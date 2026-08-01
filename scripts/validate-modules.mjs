/* Industry Atlas - structural validator for data modules.
 * Run: node scripts/validate-modules.mjs
 * Loads taxonomy, kpis, all industry modules, and all company files in a
 * window shim, then checks schema completeness, link integrity, style rules
 * (no em/en dashes), and numeric sanity. Exit 1 on any failure. */
import { readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];
const warn = [];
function bad(file, msg) { problems.push(file + ": " + msg); }

const win = { };
global.window = win;

async function load(rel) {
  const src = await readFile(join(ROOT, rel), "utf8");
  if (/[—–]/.test(src)) bad(rel, "contains an em/en dash");
  try {
    new Function("window", src)(win);
  } catch (e) {
    bad(rel, "failed to execute: " + e.message);
  }
  return src;
}

await load("assets/data/taxonomy.js");
await load("assets/data/kpis.js");
await load("assets/data/companies.js");

const taxIds = new Set(win.ATLAS_TAXONOMY.industries.map((i) => i.id));
const sectorIds = new Set(win.ATLAS_TAXONOMY.sectors.map((s) => s.id));
const taxById = Object.fromEntries(win.ATLAS_TAXONOMY.industries.map((i) => [i.id, i]));

/* industry modules */
const modDir = join(ROOT, "assets", "data", "industries");
const kpiIds = new Set((win.ATLAS_KPIS || []).map((k) => k.id));
const modFiles = (await readdir(modDir)).filter((f) => f.endsWith(".js"));
win.ATLAS_INDUSTRIES = {};
for (const f of modFiles) await load("assets/data/industries/" + f);

/* collect kpiLocal ids across modules so kpiRefs can point at them */
for (const m of Object.values(win.ATLAS_INDUSTRIES)) (m.kpiLocal || []).forEach((k) => k && k.id && kpiIds.add(k.id));

const REQUIRED = ["meta", "overview", "structure", "valueChain", "financials", "health", "valuation", "pmView", "players", "geography", "cycles", "risks", "levels", "quiz", "sources"];
for (const [id, m] of Object.entries(win.ATLAS_INDUSTRIES)) {
  const f = "industries/" + id + ".js";
  if (!taxIds.has(id)) bad(f, "id not in taxonomy");
  const full = m.meta && m.meta.status === "full";
  for (const key of REQUIRED) if (full && !m[key]) bad(f, "missing section: " + key);
  if (m.meta) {
    if (taxById[id] && m.meta.sector !== taxById[id].sector) bad(f, "meta.sector '" + m.meta.sector + "' != taxonomy '" + taxById[id].sector + "'");
    if (!sectorIds.has(m.meta.sector)) bad(f, "unknown sector id " + m.meta.sector);
    if (full && !m.newsQuery) warn.push(f + ": no newsQuery (auto-query will be used)");
  }
  (m.valueChain?.stages || []).forEach((s) => (s.linksTo || []).forEach((l) => {
    if (!taxIds.has(l)) bad(f, "valueChain linksTo unknown industry '" + l + "'");
  }));
  (m.kpiRefs || []).forEach((k) => { if (!kpiIds.has(k)) bad(f, "kpiRefs unknown id '" + k + "'"); });
  (m.kpiLocal || []).forEach((k, i) => { if (!k || !k.id) bad(f, "kpiLocal[" + i + "] malformed"); });
  if (m.health?.pillars) {
    const sum = m.health.pillars.reduce((a, p) => a + (p.weight || 0), 0);
    if (sum !== 100) bad(f, "health pillar weights sum to " + sum);
  }
  (m.quiz || []).forEach((q, i) => {
    if (!q.choices || q.choices.length !== 4) bad(f, "quiz[" + i + "] needs 4 choices");
    else if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) bad(f, "quiz[" + i + "] bad answer index");
  });
  (m.sources || []).forEach((s, i) => { if (!s.url) bad(f, "sources[" + i + "] missing url"); });
  if (full && m.levels) ["L1", "L2", "L3", "L4", "L5"].forEach((L) => { if (!m.levels[L]) bad(f, "levels missing " + L); });
  if (full && m.pmView && (!m.pmView.debates || m.pmView.debates.length < 3)) bad(f, "pmView needs 3 debates");
}

/* company fragments */
const coDir = join(ROOT, "assets", "data", "companies");
let coFiles = [];
try { coFiles = (await readdir(coDir)).filter((f) => f.endsWith(".js")); } catch { /* none yet */ }
for (const f of coFiles) await load("assets/data/companies/" + f);

for (const [id, c] of Object.entries(win.ATLAS_COMPANIES)) {
  const f = "company " + id;
  if (c.id !== id) bad(f, "record id mismatch");
  (c.industries || []).forEach((i) => { if (!taxIds.has(i)) bad(f, "unknown industry '" + i + "'"); });
  if (!c.industries || !c.industries.length) bad(f, "no industries");
  if (!c.model || c.model.length < 2) bad(f, "model needs 2 paragraphs");
  if (c.revenueMix) {
    const s = c.revenueMix.reduce((a, m) => a + m.pct, 0);
    if (s < 90 || s > 110) warn.push(f + ": revenueMix sums to " + s);
  }
  if (c.mcap != null && (typeof c.mcap !== "number" || c.mcap <= 0 || c.mcap > 6000)) bad(f, "mcap suspicious: " + c.mcap);
  if (c.mcap == null && c.ticker) warn.push(f + ": has ticker but no mcap");
}

console.log(modFiles.length + " modules, " + Object.keys(win.ATLAS_COMPANIES).length + " companies checked (" + coFiles.length + " fragment files)");
warn.forEach((w) => console.log("WARN " + w));
if (problems.length) {
  problems.forEach((p) => console.error("FAIL " + p));
  process.exit(1);
}
console.log("all clean");
