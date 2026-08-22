/* Industry Atlas - daily news snapshot generator
 * Runs in GitHub Actions (Node 20+, global fetch). Sweeps the Terminal's
 * 9 desk queries against the GDELT DOC API and writes the results to
 * assets/data/news-snapshot.json, which the client (assets/js/news.js)
 * uses as a fallback whenever the live wire is unreachable.
 * Free and keyless, like everything else in the atlas. */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "assets", "data", "news-snapshot.json");

/* Mirror of the DESKS array in news.html: keys must match the query strings
 * the client passes to AtlasNews.fetch verbatim, or the fallback lookup misses. */
const DESKS = [
  { id: "macro", q: '("federal reserve" OR "stock market" OR "interest rates" OR "bond market")' },
  { id: "tech", q: '(semiconductor OR "artificial intelligence" OR "cloud computing" OR cybersecurity)' },
  { id: "finance", q: '("investment banking" OR "private equity" OR "hedge fund" OR insurance OR banks)' },
  { id: "energy", q: '("oil prices" OR OPEC OR "natural gas" OR "renewable energy" OR nuclear)' },
  { id: "materials", q: '(copper OR lithium OR "iron ore" OR mining OR "rare earth")' },
  { id: "health", q: '(pharmaceutical OR biotech OR FDA OR "drug prices" OR "clinical trial")' },
  { id: "industrial", q: '(aerospace OR defense OR shipping OR manufacturing OR logistics)' },
  { id: "consumer", q: '(retail OR "consumer spending" OR ecommerce OR luxury)' },
  { id: "geo", q: '(tariffs OR sanctions OR "trade war" OR "supply chain" OR geopolitics)' },
  /* the school's desk-track wires (keys must match the desk pages verbatim) */
  { id: "desk-pca", q: '("continuation vehicle" OR "secondaries market" OR "GP stakes" OR "private equity secondaries" OR "secondaries fund")' },
  { id: "desk-ma", q: '("mergers and acquisitions" OR takeover OR "definitive agreement" OR "all-cash deal" OR "to acquire")' },
  { id: "desk-ecm", q: '(IPO OR "initial public offering" OR "follow-on offering" OR "block trade" OR "convertible notes")' },
  { id: "desk-dcm", q: '("high yield" OR "leveraged loan" OR "bond issuance" OR "private credit" OR "debt financing")' },
  { id: "desk-rx", q: '(bankruptcy OR "chapter 11" OR restructuring OR "distressed debt" OR "debt exchange")' },
  { id: "desk-cov", q: '("acquisition of" OR "agreed to acquire" OR "strategic review" OR divestiture OR "take-private")' }
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmtDate(seendate) {
  /* GDELT format: 20260725T143000Z -> "Jul 25 · 14:30z" (same as the client) */
  if (!seendate || seendate.length < 13) return "";
  return MONTHS[parseInt(seendate.slice(4, 6), 10) - 1] + " " + parseInt(seendate.slice(6, 8), 10) +
    " · " + seendate.slice(9, 11) + ":" + seendate.slice(11, 13) + "z";
}

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function fetchDesk(q, attempt = 1) {
  const url = "https://api.gdeltproject.org/api/v2/doc/doc?query=" +
    encodeURIComponent(q + " sourcelang:eng") +
    "&mode=ArtList&maxrecords=15&timespan=1d&sort=hybridrel&format=json";
  try {
    const r = await fetch(url, { headers: { "user-agent": "industry-atlas-snapshot/1.0" } });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const data = await r.json();
    const seen = {};
    return (data.articles || []).filter((a) => {
      const t = (a.title || "").toLowerCase().slice(0, 60);
      if (!a.title || seen[t]) return false;
      seen[t] = true;
      return true;
    }).map((a) => ({ title: a.title, url: a.url, domain: a.domain, when: fmtDate(a.seendate) }));
  } catch (e) {
    if (attempt < 3) {
      await sleep(8000 * attempt);
      return fetchDesk(q, attempt + 1);
    }
    console.error("desk failed after retries:", q.slice(0, 40), e.message);
    return [];
  }
}

/* keep yesterday's headlines for any desk that fails today */
let previous = {};
try { previous = JSON.parse(await readFile(OUT, "utf8")).queries || {}; } catch { /* first run */ }

const queries = {};
let total = 0;
for (const desk of DESKS) {
  let arts = await fetchDesk(desk.q);
  let kept = "";
  if (!arts.length && previous[desk.q] && previous[desk.q].length) {
    arts = previous[desk.q];
    kept = "(kept previous)";
  }
  queries[desk.q] = arts;
  total += arts.length;
  console.log(desk.id.padEnd(12), arts.length, "headlines", kept);
  await sleep(6000); /* stay polite with GDELT's per-IP rate limits */
}

if (total === 0) {
  /* Never overwrite a good snapshot with an empty one */
  console.error("all desks empty: keeping the previous snapshot");
  process.exit(1);
}

const stamp = new Date().toISOString().slice(0, 16).replace("T", " ") + "z";
await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify({ generated: stamp, queries }, null, 1));
console.log("wrote", OUT, "·", total, "headlines ·", stamp);
