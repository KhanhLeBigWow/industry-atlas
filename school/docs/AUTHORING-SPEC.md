# Capital Atlas - Module Authoring Spec

The binding contract for every module page. The app shell (`assets/js/atlas.js`)
and design system (`assets/css/atlas.css`) do the heavy lifting; a module page is
**content + page-specific interactivity only**. Follow this exactly so all pages
render identically.

## 1. Page skeleton (mandatory)

```html
<!DOCTYPE html>
<html lang="en" data-module="MODULE_ID" data-root="..">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MODULE TITLE - Capital Atlas</title>
<meta name="description" content="One-sentence description.">
<script>(function(){var t;try{t=localStorage.getItem("atlas-theme")}catch(e){}if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t);})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/atlas.css">
</head>
<body>
<main>
  <header class="module-hero">
    <span class="kicker">Module NN · Group label</span>
    <h1>Module Title</h1>
    <p class="hero-tagline">One-line tagline.</p>
    <div class="hero-meta"></div>  <!-- shell injects level/minutes pills -->
  </header>

  <section class="lesson" id="short-slug">
    <h2><span class="sec-num">NN.1</span> Section title</h2>
    ...content...
  </section>
  <!-- 5 to 8 sections total; LAST section is always the quiz: -->
  <section class="lesson" id="quiz">
    <h2><span class="sec-num">NN.X</span> Knowledge check</h2>
    <p class="lede">A short framing line.</p>
    <div id="quiz-root"></div>
  </section>
</main>
<script src="../assets/data/curriculum.js"></script>
<script src="../assets/js/atlas.js"></script>
<script>
document.addEventListener("atlas:ready", function () {
  /* page-specific interactivity + quiz */
  Atlas.quiz("#quiz-root", [ /* 8-10 questions */ ]);
});
</script>
</body>
</html>
```

Rules:
- `data-module` must match the manifest id. `data-root` is `..` for pages in `modules/`.
- Do NOT hand-code header, sidebar, footer, or prev/next: the shell injects them.
- Every content section is `<section class="lesson" id="...">` with an `<h2>` that
  starts with `<span class="sec-num">`. Ids: short kebab-case, unique on the page.
  These drive the TOC and progress tracking.
- The quiz section is last, id `quiz`, rendered into `#quiz-root` via `Atlas.quiz`.
- Page-specific CSS goes in ONE `<style>` block in `<head>`, prefixed with the module
  id (e.g. `.val-...`) to avoid collisions. Keep it small; prefer system classes.

## 2. Shell API (available after `atlas:ready`)

- `Atlas.fmt.money(n, dec)` → `$1,234` / `($1,234)` - negatives ALWAYS in parentheses.
- `Atlas.fmt.moneyM(n)` → `$450M` / `$4.5B` (input in $M). `Atlas.fmt.pct(n, dec)` → `8.5%`.
  `Atlas.fmt.mult(n)` → `7.5x`. `Atlas.fmt.num(n, dec)`.
- `Atlas.npv(rate, flows)`, `Atlas.irr(flows)` (flows[0] = t0 outflow, negative).
- `Atlas.bind(id, fmtFn)` → binds a range input; auto-updates the `<output>` inside its
  `.slider-row` label; returns `{ value }` getter.
- `Atlas.onInput([ids], handler)` → attaches `input`/`change` to all ids and calls
  handler once immediately.
- `Atlas.quiz(selector, questions)` - `questions: [{q, choices: [4 strings], answer: idx, explain}]`.
- `Atlas.el(tag, {attrs..., text, html}, [children])` element builder.

## 3. Component gallery (use these, don't invent new patterns)

- **Cards / grids**: `.grid-2` `.grid-3` `.grid-4` of `.card` (optionally `.card-accent`).
- **Callouts**: `.callout` (Note), `.callout-tip` (Key idea), `.callout-warn` (Common
  mistake), `.callout-example` (Worked example), `.callout-case` (Real-world case),
  `.callout-deeper` (Going deeper). Use 3-6 per module. Real-world cases should use
  well-known public deals/events with the year stated.
- **Stat tiles**: `.stat-row` of `.stat-tile` (`.stat-label`, `.stat-value`, optional `.stat-delta.up/.down`).
- **Tables**: wrap in `.table-wrap`; numeric cells get `class="num"`; totals `tr.total`.
- **Formulas**: `.formula` block (mono, plain text, e.g. `EV = Equity value + Net debt`).
- **Timelines / processes**: `ol.timeline > li` with `.timeline-when`, `.timeline-title`, `.timeline-body`.
- **Tabs**: `.tabs[data-tabs] > .tab-list > button.tab[data-tab=x]` + `.tab-panel[data-panel=x]`;
  first tab/panel get `.active`. Shell wires them.
- **Accordions**: `details.accordion > summary + div.acc-body`. Great for FAQ/glossary-ish lists.
- **Figures**: SVG inside `.figure` with `.figure-title`, `.figure-sub`, optional `.figure-note`.

## 4. Interactive tools (the soul of the platform)

Each module MUST include its required tool(s) with the EXACT anchor id (linked from the
home page toolkit):

| Module | Required tool ids |
|---|---|
| foundations | `tool-tvm` (time value of money lab) |
| value-chain | `tool-map` (clickable industry map) |
| accounting | `tool-linkage` (three-statement ripple explorer) |
| valuation | `tool-dcf` (DCF sandbox), `tool-comps` (comps builder) |
| ma-deals | `tool-accretion` (accretion / dilution calculator) |
| lbo-pe | `tool-lbo` (LBO simulator) |
| buy-side | `tool-fees` (fee drag visualizer) |
| capital-markets | `tool-bond` (price-yield seesaw), `tool-payoff` (option payoff builder) |
| careers | `tool-comp` (comp ladder explorer) |

Structure (the anchor id goes on the `.tool` div; place it inside a relevant section):

```html
<div class="tool" id="tool-dcf">
  <div class="tool-head"><span class="tool-badge">Live tool</span><h3>DCF Sandbox</h3></div>
  <div class="tool-body">
    <div class="tool-controls">
      <div class="slider-row">
        <label>Revenue growth <output></output></label>
        <input type="range" id="dcf-g" min="0" max="20" step="0.5" value="8">
      </div>
      ...
    </div>
    <div class="tool-output">
      <div class="tool-kpis"> ...stat-tiles updated live... </div>
      ...SVG chart or table updated live...
    </div>
  </div>
  <div class="tool-foot">All figures illustrative. Assumes ... </div>
</div>
```

Use `.tool-body.stacked` when the tool is diagram-first (e.g. the industry map).
Tools must be honest math (real formulas, stated assumptions), recompute on every
input, and never NaN - clamp edge cases. Add 1-2 extra small interactives beyond the
required ones where they genuinely teach (payoff toggles, scenario buttons, etc.).

## 5. Charts & SVG (dataviz rules - binding)

- Charts live in `.figure` (or `.tool-output`) which renders on `--surface-1`.
- Series colors: use CSS vars `var(--viz-1)` … `var(--viz-8)` IN ORDER, never cycled,
  never hardcoded hex. Positive/negative: `var(--pos)` / `var(--neg)`. Never use status
  colors for series.
- One axis only, never dual-axis. Bars ≤ 24px thick, 4px rounded data-end (`rx="4"`),
  square at baseline (overlap a rect or use path). Lines 2px, round caps. Dots r ≥ 4
  with 2px surface ring (`stroke="var(--surface-1)" stroke-width="2"`).
- Gridlines: `class="gridline"`, hairline, solid. Axis text 11-12px, fill `var(--ink-3)`
  or the provided `.lbl-muted` class.
- 2px surface gap between stacked segments / touching bars.
- Label selectively (endpoint, extreme, the story) - never every point. Text uses ink
  colors, never series colors. ≥2 series → include a `.legend` row.
- Charts in the fixed-viewBox SVGs: prefer `viewBox="0 0 720 H"` (or 960 wide for
  `.wide` figures), height as needed.
- Sequential ramps: blue steps only (`#cde2fb → #0d366b` family). Diverging: blue ↔ red
  with gray midpoint.

## 6. Writing style (binding)

- Polished, plain-English, C-suite friendly but warm. Explain like a sharp mentor, not
  a textbook. Short paragraphs (≤ 4 sentences). Define every term on first use.
- American English. NEVER use an em dash (—). Use commas, periods, or parentheses.
- Numbers: digits not words; `%` not "percent"; `$4.5M` style; negatives in parentheses;
  multiples like `7.5x`.
- Standard deal terminology is fine (EBITDA, LOI, TEV) but define at first use.
- Every module: open with a 2-3 sentence "why this matters" in the hero tagline + first
  section lede; each section starts with a `.lede` paragraph.
- All company examples in worked math must be FICTIONAL (use names like "Meridian
  Industrial Co."). Real companies only in `.callout-case` describing public, historical
  events. Never fabricate specific stats about real firms; keep case numbers approximate
  ("roughly", "about") and famous (e.g. RJR Nabisco 1989, Facebook IPO 2012).
- No investment advice. Educational framing throughout.

## 7. Quiz (binding)

8-10 questions, exactly 4 choices each, one correct (`answer` = index 0-3), every
question has an `explain` sentence. Mix recall + applied math (small mental-math
numbers). Cover the whole module.

## 8. Definition of done (verifier checklist)

1. Skeleton matches §1 exactly (theme snippet, fonts, css path, scripts order, ids).
2. 5-8 `.lesson` sections + final `#quiz` section; sec-nums sequential and match module number.
3. Required tool anchor id(s) present, functional math, no NaN at slider extremes.
4. At least 2 `.figure` SVG visuals beyond the tools; dataviz rules respected.
5. At least 3 callouts, ≥ 1 `.callout-case`, ≥ 1 worked example, ≥ 1 table, ≥ 1 formula block.
6. No em dashes anywhere. Negatives in parentheses. `%` and digits.
7. No hand-coded header/sidebar/footer. No external JS/CSS beyond the skeleton's.
8. Valid HTML (balanced tags), page-specific styles prefixed, no console errors.
9. Quiz renders and stores score (calls `Atlas.quiz`).
