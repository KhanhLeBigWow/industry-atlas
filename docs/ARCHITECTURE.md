# Industry Atlas - System Architecture

The connected map of the global economy: every major industry, explained from first
principles to institutional depth, linked into one knowledge graph. This document is
the complete system design. It is written so that any future contributor (human or AI)
can extend the platform without redesigning it.

---

## 1. Design goals

1. **Free forever.** Static-first architecture with zero required services, zero paid
   data. Runs from a folder, deploys to GitHub Pages. Every planned data integration
   uses free public APIs; paid sources (Bloomberg, PitchBook, Gartner) are explicitly
   out of scope and unnecessary.
2. **One template, infinite industries.** A single universal industry page renders any
   data module that follows the Industry Genome schema. Adding industry #71 is writing
   one data file, not building a page.
3. **Graph-native.** Industries, companies, countries, materials, and technologies are
   nodes; supply, demand, capital, data, risk, and talent relationships are typed edges.
   Every page is a view over the same graph.
4. **Progressive depth.** Every topic readable at 5 levels (Beginner, Intermediate,
   Advanced, Expert, Institutional). The same page serves a student and a portfolio
   manager through lenses, not separate sites.
5. **Interactive-first.** Value chains, KPIs, valuation methods, and connections are
   things you click and manipulate, never just prose.
6. **Honest data posture.** Until live APIs are wired in, all quantitative figures are
   clearly flagged as illustrative estimates with vintage years. The schema carries
   `source` and `asOf` fields everywhere so real data can replace estimates in place.

## 2. System overview

```
+---------------------------------------------------------------+
|                           PAGES (views)                       |
|  index    industry.html?id=X   graph    map    library        |
|  (home)   (universal template) (explorer)(world)(KPI/valuation)|
+---------------------------------------------------------------+
|                        ENGINES (assets/js)                    |
|  core.js: registry, router, search, lenses, theme, progress   |
|  viz.js:  force graph, sankey, value chain, treemap, tile map,|
|           KPI cards, timeline, radar, bars                    |
|  assistant.js: optional AI panel (user-supplied API key)      |
+---------------------------------------------------------------+
|                       DATA LAYER (assets/data)                |
|  taxonomy.js    sectors -> industries (the catalog)           |
|  graph.js       typed edges between all node kinds            |
|  kpis.js        the KPI library (full pedagogical records)    |
|  countries.js   country profiles for the world map            |
|  industries/*.js  one Industry Genome module per industry     |
+---------------------------------------------------------------+
|              FUTURE: INGEST ADAPTERS (free APIs)              |
|  EDGAR  FRED  WorldBank  IMF  OECD  Comtrade  USGS  Eurostat  |
+---------------------------------------------------------------+
```

Everything above the ingest line ships today and works offline. The ingest line is a
contract, not a dependency.

## 3. The data model

### 3.1 Node kinds

| Kind | Examples | Lives in |
|---|---|---|
| `sector` | Technology, Energy, Materials | taxonomy.js |
| `industry` | Semiconductors, Copper Mining, Banking | taxonomy.js + industries/*.js |
| `company` | archetype or real (TSMC, JPMorgan) | industry modules (`players`) |
| `country` | Taiwan, USA, Chile | countries.js |
| `material` | Silicon, Copper, Lithium | graph.js nodes |
| `technology` | EUV lithography, LLMs | graph.js nodes |
| `metric` | NRR, Combined Ratio, Yield | kpis.js |

### 3.2 Edge types (the connective tissue)

Every cross-industry relationship is one record in `graph.js`:

```js
{ from: "semiconductors", to: "cloud", type: "supply",
  strength: 3,            // 1 weak .. 3 critical
  label: "GPUs and custom silicon are the cloud's core capex",
  detail: "..." }         // one paragraph shown on click
```

Types: `supply` (physical goods/services flow), `demand` (downstream pull),
`capital` (funding/investment flow), `data` (information flow), `risk`
(risk transmission), `talent` (labor flow), `geo` (geopolitical coupling),
`tech` (technology diffusion). The graph explorer colors edges by type; industry
pages render their ego-network automatically.

### 3.3 The Industry Genome (summary)

Each `assets/data/industries/<id>.js` exports one object with these blocks
(full field-by-field contract in `INDUSTRY-SCHEMA.md`):

- `meta` - id, name, sector, status (`full` | `profile` | `stub`), market size, CAGR, asOf
- `overview` - definition, how it really works, history eras, trends, outlook
- `structure` - suppliers / producers / distributors / customers / regulators / capital
- `valueChain` - ordered clickable stages, each with economics (margin, capital intensity, who captures value)
- `financials` - how money is made; the economic fingerprint (margins, capex, cyclicality, pricing power) as a radar profile
- `kpis` - references into the KPI library plus industry-specific target ranges
- `health` - the Financial Health Engine weights and thresholds for this industry
- `valuation` - method cards (when to use, when not, ranges) plus interactive calculator config
- `players` - archetypes and notable companies with roles
- `connections` - inherited from graph.js automatically; module may add narrative
- `geography` - where the industry concentrates and why
- `cycles` - historical cycle/timeline entries (year, event, lesson)
- `risks` - ranked risk register with transmission channels
- `levels` - L1..L5 narratives (Beginner to Institutional)
- `quiz` - knowledge check items
- `sources` - named free sources for future live data

**Stubs are first-class.** An industry listed in taxonomy.js without a module still
gets a working page: catalog metadata, its graph neighborhood, KPI candidates by
sector, and an "expand this industry" authoring prompt. The platform is therefore
expandable forever by adding one file at a time.

## 4. Engines

### 4.1 core.js
- **Registry**: merges taxonomy + loaded industry modules + graph + KPI library into
  one in-memory store (`Atlas.store`).
- **Router**: `industry.html?id=semiconductors` resolves module or stub; unknown ids
  get a graceful catalog redirect.
- **Search**: client-side index over industries, KPIs, countries, glossary of the
  graph (name + aliases + summary), ranked prefix/substring scoring. Semantic search
  is a Phase 3 upgrade (embeddings via the AI panel).
- **Lenses**: a global switch (Student / Executive / Investor / Operator / Consultant)
  stored per session; pages tag sections with `data-lens` and the engine highlights
  or reorders what each audience cares about. One page, five dashboards.
- **Progress**: localStorage per industry per level, same 70/30 section/quiz model.
- **Theme**: dark default (terminal heritage), light available, persisted.

### 4.2 viz.js (all dependency-free SVG/canvas)
| Component | Used for |
|---|---|
| `forceGraph` | knowledge graph explorer, per-industry ego networks |
| `valueChain` | clickable stage-by-stage chain with expandable nodes |
| `sankey` | value/money flow (who captures the margin) |
| `treemap` | market composition, segment sizing |
| `tileMap` | world map as tile-grid cartogram (Phase 2: TopoJSON) |
| `kpiCard` | metric tiles with range gauge (healthy/warning bands) |
| `timeline` | history eras and cycle charts |
| `radar` | the industry economic fingerprint |
| `bars`, `lines` | generic charts, dataviz-rule compliant |

Chart rules follow the validated palette (fixed categorical order, one axis, thin
marks, selective labels, legends for 2+ series) so every visualization reads as one
system in both themes.

### 4.3 assistant.js (optional AI layer)
- A slide-over panel on every page. Without a key: shows what it can do and how to
  enable it. With a user-pasted Anthropic API key (stored only in localStorage):
  calls the Messages API directly from the browser (CORS-enabled with the
  `anthropic-dangerous-direct-browser-access` header), **grounded on the current
  page's data module**, which is serialized into the system prompt.
- Built-in task templates: explain this industry at level X, compare two industries,
  generate an investment memo skeleton, explain a KPI with a worked example,
  trace a shock through the graph ("oil doubles: walk the transmission").
- Cost note: the key is pay-per-use with Anthropic; everything else on the platform
  remains free. No server ever sees the key.

## 5. Information architecture

```
Home (index.html)
 ├─ global search (everything)
 ├─ sector shelves -> industry cards (status-aware)
 ├─ featured deep dive + graph teaser + stats
Industry (industry.html?id=X)      <- THE template
 ├─ sticky section nav: Overview | Structure | Value chain | Financials
 |   | KPIs | Health | Valuation | Players | Connections | Geography
 |   | History | Risks | Learn | Quiz
 ├─ lens switcher (5 audiences)
 └─ AI panel
Graph (graph.html)   force-directed explorer, filters by sector/edge type
Map (map.html)       tile-grid world; click country -> profile panel
Library (library.html) every KPI + valuation method, searchable
```

Navigation rule: **nothing is more than 2 clicks from anything it is connected to.**
Every mention of an industry, KPI, or country anywhere is a link into its page.

## 6. Data integration roadmap (all free)

| Source | What it feeds | Auth | Cost |
|---|---|---|---|
| SEC EDGAR full-text + XBRL | company financials, filings | none | free |
| FRED (St. Louis Fed) | rates, macro series, industrial production | free key | free |
| World Bank Open Data | GDP, trade, development indicators | none | free |
| IMF Data API | macro, BoP, forecasts | none | free |
| OECD SDMX | industry stats, productivity | none | free |
| UN Comtrade | bilateral trade flows (feeds the map + edges) | free key | free |
| USGS Mineral Summaries | mining production/reserves | none | free |
| Eurostat | EU industry data | none | free |
| EIA Open Data | US energy | free key | free |
| IRENA | renewables capacity | none | free |
| OpenAlex / Crossref | papers, citations (research graph) | none | free |
| PatentsView | patents by technology/company | none | free |
| **Explicitly avoided** | Bloomberg, PitchBook, Gartner, S&P CapIQ | n/a | paid, unnecessary |

Adapter contract (Phase 3): each source gets one fetch-and-normalize module that
writes into the same schema fields the hand-authored estimates occupy today
(`{ value, source, asOf }`). Pages never know whether a number came from an author
or an API. A small build-time cache script (Node or Python, still free) snapshots
API pulls into static JSON so the deployed site stays static and fast.

## 7. Performance, accessibility, scale

- No framework, no build: first paint is one CSS + deferred JS; industry data loads
  as one script per page. 70 industries at full depth ≈ 70 files, each lazy by route.
- All visuals are SVG/canvas with text alternatives; keyboard focus on interactive
  nodes; color never carries meaning alone (typed edges also differ by dash/width;
  KPI bands are labeled).
- At 500+ industries: move registry to generated JSON indexes + fetch-on-route
  (same schema). At company-level scale: introduce a real graph database behind an
  API, keeping the front-end contract identical. The schema is the stable ABI.

## 8. Build phases

- **Phase 1 (this build):** architecture, schemas, design system, engines, taxonomy
  (~70 industries), knowledge graph seed, KPI library, world map seed, universal
  template, flagship Semiconductors at full depth, 3 profile-depth industries
  (Cloud, Banking, Copper Mining) proving cross-sector connections, AI panel.
- **Phase 2:** 10 more full industries (author or AI-assist via the panel), real
  TopoJSON map, Sankey money-flow per industry, printable briefs, URL-state deep
  links for every interactive.
- **Phase 3:** free-API adapters + snapshot cache, semantic search via embeddings,
  company pages (EDGAR-backed), earnings-transcript summaries through the AI panel.
- **Phase 4:** community authoring via the schema, versioned data snapshots,
  classroom mode, scenario simulators (shock propagation through the graph).

---

## 9. v2 architecture (2026-07): the terminal layer

The platform grew a live layer on top of the knowledge layer. Everything remains
static-hosted and $0; live data arrives client-side from free, keyless APIs.

```
+----------------------------------------------------------------------+
|                             PAGES (views)                            |
|  index      industry?id=X    company?id=X    markets    news         |
|  (home)     (genome+desk)    (flows+news)  (market map) (terminal)   |
|  graph      map              library        school/                  |
+----------------------------------------------------------------------+
|                        DOCS RAIL (structured library)                |
|  core.buildDocSide(): sticky left sidebar on every profile page:    |
|  on-page sections (scroll-spy) + atlas tree (all profiled pages)    |
+----------------------------------------------------------------------+
|                              ENGINES                                 |
|  core.js   viz.js (+ marketMap: squarified 2-level treemap)          |
|  news.js   (GDELT client, 30-min localStorage cache)                 |
|  assistant.js (BYO Anthropic key)                                    |
+----------------------------------------------------------------------+
|                    KNOWLEDGE DATA (authored, versioned)              |
|  taxonomy (79) · graph (131+ edges) · kpis (40+) · countries (44)    |
|  companies (19) · industries/*.js (11 full/profile genomes + pmView) |
+----------------------------------------------------------------------+
|                    LIVE DATA (free, keyless, client-side)            |
|  GDELT DOC API ... news wires, per-industry + terminal desks         |
|  world-110m.json . geographic base (local snapshot)                  |
|  [planned] World Bank/FRED/EIA adapters ... macro & country series   |
|  [designed] BYO-free-key quotes (Finnhub/AlphaVantage class) for     |
|             finviz-style performance heatmaps on the market map      |
+----------------------------------------------------------------------+
```

### The news pipeline (Bloomberg-terminal feel, $0)
Every industry/company page queries GDELT (a free global news index updated
every 15 minutes, CORS-open) with a curated `newsQuery` (or an auto-built one
from name + aliases). Results cache 30 minutes per query in localStorage.
`news.html` is the cross-sector terminal: 9 desks with tuned queries over 24h
windows. Optional hardening (Phase 3): a GitHub Action snapshots desk feeds
daily into static JSON as a fallback when GDELT is slow.

### The finviz layer: status and path
- SHIPPED: `markets.html` market map: squarified treemap of all industries,
  clustered by sector, sized by market size (or graph connections), brightness
  by profile depth, click-through to profiles. This is finviz's MAP applied to
  the real economy rather than tickers.
- DESIGNED (Phase 3): performance heat: a BYO-free-key quotes module
  (Finnhub/Alpha Vantage class, both offer free tiers with CORS) colors the
  company layer by daily % move and adds live stat rows to company pages. Same
  pattern as the AI assistant: key stored locally, never on a server. finviz
  itself has no free API; screener-style filtering will run over our own
  company records as that layer grows.

### The structured library (docs rail)
Profile pages now render inside a docs-grade layout: a sticky left rail with
(1) every section of the current page, scroll-spy highlighted, and (2) the
atlas tree: every profiled industry grouped by sector, plus the tool pages.
Nothing is more than one glance and one click away. On mobile the rail yields
to the horizontal section nav and burger menu.
