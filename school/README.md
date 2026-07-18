# Capital Atlas

**An interactive atlas of the finance industry.** Capital Atlas is a static, zero-build learning platform that takes you from zero to deal-ready: the industry value chain, accounting, valuation, M&A, private equity, capital markets, and careers. Every concept is explained visually and backed by a live, hands-on tool (a DCF sandbox, an LBO simulator, an accretion / dilution calculator, and more than 20 others). There is no account, no server, and no tracking: the entire site is plain HTML, CSS, and vanilla JavaScript, and your progress lives in your own browser.

## The curriculum

| # | Module | One-liner |
|---|--------|-----------|
| 01 | Foundations of Finance | What finance is for: moving capital through time, across people, and around risk. |
| 02 | The Industry Value Chain | Who does what, who pays whom, and how the whole machine fits together. |
| 03 | Accounting & the Three Statements | The language of business: income statement, balance sheet, cash flow, and how they link. |
| 04 | Valuation | What a business is worth, and the three lenses professionals use to answer it. |
| 05 | M&A & the Deal Process | How companies are bought and sold, from first pitch to closing dinner. |
| 06 | Private Equity & LBOs | Buying companies with borrowed money, and why the math can work spectacularly. |
| 07 | Asset Management & Hedge Funds | The institutions that own the market: who they are and how they invest. |
| 08 | Capital Markets | Where companies meet investors: equity, debt, and everything derived from them. |
| 09 | Careers & Breaking In | The role map, the money, the hours, and how to get hired. |

Three curated learning paths (Explorer, Analyst, Dealmaker) sequence these modules for different goals. See [docs/CURRICULUM.md](docs/CURRICULUM.md) for the full map.

## Quick start

No build step, no dependencies, no install.

**Option 1: open directly.** Double-click `index.html`. Everything works from the filesystem.

**Option 2: local server** (nicer URLs, closer to production):

```bash
# from the project root
python -m http.server 8000
# or
npx serve
```

Then open `http://localhost:8000`.

## Project structure

```
capital-atlas/
├── index.html                    Home: hero, learning paths, module grid, toolkit
├── glossary.html                 Searchable glossary (200+ terms)
├── assets/
│   ├── css/
│   │   └── atlas.css             Design system: tokens, components, light/dark themes
│   ├── data/
│   │   └── curriculum.js         Curriculum manifest (single source of truth)
│   └── js/
│       └── atlas.js              App shell: chrome, progress, quiz engine, helpers
├── modules/
│   ├── foundations.html          Module 01
│   ├── value-chain.html          Module 02
│   ├── accounting.html           Module 03
│   ├── valuation.html            Module 04
│   ├── ma-deals.html             Module 05
│   ├── lbo-pe.html               Module 06
│   ├── buy-side.html             Module 07
│   ├── capital-markets.html      Module 08
│   └── careers.html              Module 09
└── docs/
    ├── AUTHORING-SPEC.md         Binding contract for module pages
    ├── ARCHITECTURE.md           Platform architecture and roadmap
    └── CURRICULUM.md             Curriculum map, objectives, learning paths
```

The only external dependency is Google Fonts (Fraunces, Inter, JetBrains Mono), loaded from each page's `<head>`.

## How progress tracking works

There is no server and no account. The app shell (`assets/js/atlas.js`) stores everything in `localStorage` under the key `atlas-progress-v1`:

- **Sections**: as you scroll a module, an `IntersectionObserver` marks each section as seen.
- **Quizzes**: each module ends with a knowledge check; your best score is kept.
- **Completion**: a module's percentage is 70% sections seen + 30% best quiz score. At 95% or above it shows a checkmark in the sidebar and on the home page.

Theme choice (light / dark) is stored separately under `atlas-theme`. Clearing the browser's site data resets everything. Nothing ever leaves the device.

## Adding a module

1. Read [docs/AUTHORING-SPEC.md](docs/AUTHORING-SPEC.md). It is the binding contract: page skeleton, shell API, component gallery, chart rules, writing style, and the definition-of-done checklist.
2. Add an entry to the `modules` array in `assets/data/curriculum.js` (id, num, title, short, tagline, level, minutes, accent, file, summary). The shell builds all navigation, progress display, and prev / next links from this manifest; nothing else needs to be edited.
3. Create `modules/<id>.html` from the skeleton in the spec: `data-module` must match the manifest id, 5 to 8 `.lesson` sections plus a final `#quiz` section, and the module's required interactive tool anchor(s).
4. Wire the page inside the `atlas:ready` event handler: interactivity via `Atlas.bind` / `Atlas.onInput`, the quiz via `Atlas.quiz("#quiz-root", [...])`.
5. Run the verifier checklist in section 8 of the spec before shipping.

## Deployment

The site is fully static, so GitHub Pages is the whole pipeline:

1. Push the repository to GitHub.
2. In the repo settings, enable **Pages** with source set to the `main` branch, root folder.
3. Done. No build step, no CI, no configuration files.

Any static host (Netlify, Cloudflare Pages, an S3 bucket) works the same way: upload the folder as-is.

## Disclaimer

Capital Atlas is educational content only. Nothing on the site is investment, legal, tax, or accounting advice. Worked examples use fictional companies; all figures in the interactive tools are illustrative. Real-world cases describe public, historical events in approximate terms.
