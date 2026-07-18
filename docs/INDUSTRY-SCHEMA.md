# The Industry Genome - authoring schema

One industry = one file: `assets/data/industries/<id>.js`, registering itself:

```js
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["semiconductors"] = { /* genome */ };
```

`<id>` must match an entry in `taxonomy.js`. Status ladder: `stub` (taxonomy row
only, auto-page) -> `profile` (blocks marked * below) -> `full` (everything).

All quantitative claims carry `asOf` (year) and are treated as estimates until a
live source replaces them. Never invent precision: ranges beat points.

## Blocks

### meta *
```js
meta: { id, name, sector,            // sector id from taxonomy
  status: "full",
  tagline,                            // one sentence, the hook
  marketSize: { value: 600, unit: "$B", asOf: 2024, note: "global revenue" },
  cagr: { value: 7, range: [5, 9], horizon: "2024-2030" },
  maturity: "growth" | "mature" | "cyclical-mature" | "emerging" | "declining",
  cyclicality: 1..5, capitalIntensity: 1..5, regulation: 1..5, disruption: 1..5 }
```

### overview *
```js
overview: {
  definition,                         // 2-3 sentences, no jargon
  howItWorks: [ "para", ... ],        // 3-5 paragraphs, first principles
  history: [ { era: "1959-1975", title, text } ],
  trends: [ { title, text, direction: "up"|"down"|"shift" } ],
  outlook }                           // one honest paragraph
```

### structure *
```js
structure: {
  suppliers: [ { name, note } ], producers: [...], distributors: [...],
  customers: [...], regulators: [...], capital: [...] }   // capital providers
```
Rendered as a clickable ecosystem diagram.

### valueChain *
```js
valueChain: {
  intro,
  stages: [ {
    id, name,                         // "foundry"
    what,                             // what happens at this stage
    players,                          // archetypes / notable names
    economics: { grossMargin: [40, 60], capitalIntensity: 1..5, concentration: 1..5 },
    valueCapture: 1..5,               // who keeps the profit pool
    linksTo: ["industry-id", ...],    // cross-industry hops from this stage
    deeper } ] }                      // expandable paragraph
```

### financials *
```js
financials: {
  businessModel: [ "para", ... ],     // how money is actually made
  fingerprint: {                      // 0-100 radar axes, industry-normalized
    grossMargin, recurringRevenue, capitalIntensity, pricingPower,
    cyclicality, operatingLeverage },
  lines: [ { label: "Revenue", note } , ...],  // P&L walk with industry color
  unitEconomics: { unit: "per wafer", items: [ { label, value, note } ] } }
```

### kpis  (full only; profiles may list `kpiRefs`)
```js
kpiRefs: ["semi-utilization", "semi-yield", ...],   // ids in kpis.js
kpiLocal: [ { /* same record shape as kpis.js for one-off metrics */ } ]
```

### health
```js
health: {
  intro,
  pillars: [ { name: "Liquidity", weight: 15, metrics: ["current ratio ..."],
               healthy, warning } ],   // weights sum to 100
  scoringNote }
```

### valuation *
```js
valuation: {
  intro,
  methods: [ { name: "EV / EBITDA", use, avoid, strengths, weaknesses,
               range: { low: 8, high: 14, asOf: 2024, note } } ],
  calculator: {                       // optional interactive config
    type: "multiple" | "dcf" | "navPerUnit",
    inputs: [ { id, label, min, max, step, value, fmt } ],
    compute: "fnName" } }             // implemented in industry page JS hooks
```

### players
```js
players: [ { name: "TSMC", role: "Pure-play foundry", note, country: "TW",
             real: true } ]           // real: false for archetypes
```

### geography, cycles, risks
```js
geography: [ { country: "TW", role, note } ],
cycles: [ { year: 1997, title, text, kind: "bust"|"boom"|"shift" } ],
risks: [ { name, severity: 1..5, likelihood: 1..5, transmission } ]
```

### levels *
```js
levels: {
  L1: { title: "Beginner",       text: [ "para", ... ] },   // explain to a student
  L2: { title: "Intermediate",   text: [...] },             // mechanics + terms
  L3: { title: "Advanced",       text: [...] },             // economics + strategy
  L4: { title: "Expert",         text: [...] },             // cycles, edge cases
  L5: { title: "Institutional",  text: [...] } }            // how PMs/consultants use it
```

### quiz *
```js
quiz: [ { q, choices: [4], answer: 0..3, explain } ]        // >= 5 items
```

### sources
```js
sources: [ { name: "USGS Mineral Commodity Summaries", url, feeds: "production data" } ]
```

## Graph edges (graph.js, not in the module)

```js
{ from, to, type: "supply|demand|capital|data|risk|talent|geo|tech",
  strength: 1..3, label, detail }
```
Author edges once; both industry pages and the explorer inherit them.

## KPI library records (kpis.js)

```js
{ id: "saas-nrr", name: "Net Revenue Retention", industries: ["saas", "cloud"],
  definition, formula, interpretation,
  healthy: ">= 110%", warning: "< 100%",
  benchmark: { median: "106% (public SaaS, 2024)", topDecile: "125%+" },
  investorLens, operatorLens, mistakes: [ "..." ],
  trend }                            // one line on the historical direction
```

## Writing rules

Plain American English, define terms at first use, short paragraphs. Digits not
words, % symbol, $4.5B style, negatives in parentheses, no em dashes. Estimates
flagged: "roughly", "on the order of", plus `asOf`. Real companies: only public,
non-defamatory facts at approximate precision. The tone is a sharp analyst
briefing a smart newcomer: honest about who makes money and why.
