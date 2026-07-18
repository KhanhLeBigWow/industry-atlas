# Industry Atlas

The connected map of the global economy: every major industry explained from first
principles to institutional depth, wired into one knowledge graph, with a full
finance curriculum inside. Bloomberg's density, a consulting knowledge center's
frameworks, Our World in Data's visual clarity, and Obsidian's graph view, as one
free, zero-build platform.

## What's inside

- **70 industries across 11 sectors**, each with a live page. Full-depth profiles:
  **Semiconductors** and **Insurance** (research-backed: the complete
  broker → wholesaler → MGA → fronting → carrier → reinsurer → ILS → TPA chain
  with 2024 market data). Profile depth: Cloud, Banking, Copper. The rest are
  living stubs, already wired into the graph.
- **14 company profiles** (`company.html?id=tsmc`): business model, revenue mix,
  who they sell to, who supplies them, and capital flows in/out, each with a
  box-and-arrow system diagram. Featured player cards on every industry page.
- **The knowledge graph** (`graph.html`): sector-clustered force layout with
  icons, typed edges (supply, demand, capital, data, risk, talent, geopolitics,
  technology), sector and edge filters, jump-to-industry search.
- **A real world map** (`map.html`): Natural Earth geometry rendered
  library-free; 44 profiled economies clickable with GDP, exports, resources,
  energy mix, and anchor industries.
- **KPI & valuation library** (`library.html`): 38 metrics with formulas,
  healthy/warning bands, benchmarks, investor and operator lenses.
- **🎓 Finance School** (`school/`): the complete Capital Atlas curriculum:
  9 interactive modules (DCF sandbox, LBO simulator, M&A process, and more),
  learning paths, quizzes, and a 252-term glossary.
- **Lenses** (Student / Executive / Investor / Operator / Consultant), light and
  dark mode, and an optional AI research assistant (paste your own Anthropic API
  key; stored only in your browser).

## Run locally

No build step, no dependencies. From this folder:

```
python -m http.server 8322
# then open http://localhost:8322
```

(Or `npx serve`, or any static file server. Opening `index.html` directly also
works; the world map then falls back to the tile view since `fetch` needs http.)

## Deploy (GitHub Pages, free)

1. Push this folder to a **public** GitHub repository.
2. Repository Settings → Pages → Source: "Deploy from a branch" →
   branch `main`, folder `/ (root)` → Save.
3. The site goes live at `https://<username>.github.io/<repo>/` in about a
   minute. No build configuration needed; `.nojekyll` is already included.

To update the live site: commit and push. If you edit files under `assets/`,
bump the `?v=N` version stamp in the HTML files so browsers fetch fresh copies.

## Extend it

- New industry: follow `docs/INDUSTRY-SCHEMA.md`, add one file under
  `assets/data/industries/`, wire edges in `assets/data/graph.js`, add its
  script tag to the 6 root pages.
- New company: add one record to `assets/data/companies.js`; it automatically
  appears on its industries' pages and in search.
- Architecture, data model, and the free-API roadmap: `docs/ARCHITECTURE.md`.

All figures are estimates with vintages unless a source is named. Educational
reference only; nothing here is investment advice.
