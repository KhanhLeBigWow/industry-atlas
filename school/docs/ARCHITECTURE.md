# Capital Atlas: Architecture

How the platform is built, why it is built that way, and where it goes next.

## 1. Design goals

1. **Zero build.** Plain HTML, CSS, and ES5-compatible vanilla JavaScript. No bundler, no framework, no package.json, no compile step. `git clone` and double-click `index.html` is a complete dev environment; `git push` is a complete deploy.
2. **Content-as-data.** One manifest (`assets/data/curriculum.js`) is the single source of truth for the module catalog and learning paths. Navigation, progress display, prev / next links, hero metadata, and the home page grid are all generated from it. Pages never hand-code the module list, so adding a module is a manifest entry plus one HTML file.
3. **Interactive-first.** Every abstract concept gets a live tool the learner can push on: honest math, real formulas, stated assumptions, recomputed on every input. The tools are the soul of the platform, not decoration.
4. **Private-by-default.** No account, no server, no analytics, no cookies. All state (progress, quiz scores, theme) lives in the learner's `localStorage` and never leaves the device.

## 2. System overview

Four layers, loaded in order on every page:

```
+--------------------------------------------------------------+
|  MANIFEST      assets/data/curriculum.js                      |
|                window.ATLAS_CURRICULUM                        |
|                modules[] + paths[] + site metadata            |
+------------------------------+-------------------------------+
                               | read by
                               v
+--------------------------------------------------------------+
|  SHELL         assets/js/atlas.js  (+ assets/css/atlas.css)   |
|                chrome injection - progress store - scroll spy |
|                quiz engine - finance math - fmt helpers       |
|                exposes window.Atlas, fires "atlas:ready"      |
+------------------------------+-------------------------------+
                               | injects chrome into / serves
                               v
+--------------------------------------------------------------+
|  PAGES         index.html - glossary.html - modules/*.html    |
|                content + page-specific interactivity only     |
|                declare <html data-module="id" data-root="..">  |
+------------------------------+-------------------------------+
                               | call after atlas:ready
                               v
+--------------------------------------------------------------+
|  ENGINES       Atlas.quiz()  - per-module knowledge checks    |
|                Atlas.bind() / Atlas.onInput() - live tools    |
|                Atlas.npv() / Atlas.irr() / Atlas.fmt - math   |
+--------------------------------------------------------------+
```

Script order on every page: `curriculum.js` first (defines `window.ATLAS_CURRICULUM`), then `atlas.js` (builds the shell from it), then an inline `<script>` that waits for the `atlas:ready` event to wire page-specific tools and the quiz.

## 3. Content model

### 3.1 Curriculum manifest schema

`assets/data/curriculum.js` assigns one object to `window.ATLAS_CURRICULUM`:

```js
{
  siteName: "Capital Atlas",
  tagline:  "An interactive atlas of the finance industry",
  modules: [{
    id:      "valuation",          // stable key; matches <html data-module>
    num:     "04",                 // zero-padded display number
    title:   "Valuation",          // full title
    short:   "Valuation",          // sidebar label
    tagline: "...",                // one-line hero tagline
    level:   "Core",               // Primer | Core | Advanced (drives pill styling)
    minutes: 75,                   // estimated reading + tool time
    accent:  "#4a3aa7",            // module accent color (--mod-accent)
    file:    "modules/valuation.html",
    summary: "..."                 // 1-2 sentence card summary
  }, ...],
  paths: [{
    id:       "dealmaker",
    title:    "Dealmaker",
    audience: "Headed for IB / PE",
    blurb:    "...",
    modules:  ["valuation", "ma-deals", "lbo-pe"]  // ordered module ids
  }, ...]
}
```

### 3.2 Page anatomy

Every module page follows the mandatory skeleton in `docs/AUTHORING-SPEC.md`:

- `<html data-module="ID" data-root="..">`: the shell resolves the module from the manifest by `data-module` and prefixes all generated links with `data-root`.
- A pre-paint inline script applies the saved theme before first render (no flash of wrong theme).
- A `.module-hero` header with kicker, `<h1>`, tagline, and an empty `.hero-meta` div the shell fills with level / minutes / position pills.
- 5 to 8 `<section class="lesson" id="...">` blocks; each `<h2>` starts with a `.sec-num` span. The last section is always `id="quiz"` with a `#quiz-root` mount point.
- No hand-coded header, sidebar, footer, or prev / next. The shell injects all chrome.
- Page-specific CSS lives in one `<style>` block, class-prefixed with the module id.

### 3.3 Section / progress contract

The `section.lesson[id]` elements are the contract between content and the shell:

- The sidebar table of contents is generated from them (ids drive anchors, `<h2>` text drives labels).
- The scroll spy observes them; entering one marks it seen and persists that immediately.
- The section count on the page is the denominator for the 70% section component of module completion, so section counts can change between visits without corrupting stored progress (the stored `total` is refreshed on every mark).

## 4. App shell responsibilities

`assets/js/atlas.js` is a single IIFE, roughly 425 lines, with no dependencies. On `DOMContentLoaded` it:

1. **Injects chrome.** Header (brand, nav, theme toggle, mobile burger), sidebar (curriculum list with completion ticks, on-page TOC), footer (educational disclaimer), and prev / next cards derived from manifest order. It also wraps `<main>` in the `.shell` / `.content` layout scaffolding and sets `--mod-accent` from the manifest.
2. **Tracks progress.** An `IntersectionObserver` (root margin `-35% 0px -55%`, meaning a section counts when it occupies the middle band of the viewport) marks sections seen, highlights the active TOC entry, and persists to `localStorage` on every event.
3. **Runs quizzes.** `Atlas.quiz` renders one question at a time with 4 choices, instant right / wrong feedback with an explanation line, a results screen with a verdict, and a retake button. Best score wins: a retake can only raise the stored score.
4. **Provides finance math and formatting.** NPV, IRR (bisection on the range (95%) to 1,000%; returns NaN when no sign change exists), and formatters that enforce house style: negatives in parentheses, `$4.5B` scaling, `7.5x` multiples.
5. **Wires stock components.** Tab groups (`[data-tabs]`) are wired automatically; accordions are native `<details>`.
6. Dispatches **`atlas:ready`** so pages can safely wire their own tools.

### Public API (`window.Atlas`)

| Member | What it does |
|---|---|
| `Atlas.curriculum` | The parsed manifest object. |
| `Atlas.progress` | Progress store: `get(id)`, `markSeen(id, secId, total)`, `setQuiz(id, score, total)`, `pct(id)`, `done(id)`, `data`. |
| `Atlas.fmt.num(n, d)` | Locale-formatted number, negatives in parentheses. |
| `Atlas.fmt.money(n, d)` | `$1,234` / `($1,234)`. |
| `Atlas.fmt.moneyM(n, d)` | Input in $M; renders `$450M` or `$4.5B`. |
| `Atlas.fmt.pct(n, d)` | `8.5%`, negatives in parentheses. |
| `Atlas.fmt.mult(n, d)` | `7.5x`. |
| `Atlas.npv(rate, flows)` | NPV with `flows[0]` at t = 0. |
| `Atlas.irr(flows)` | IRR via bisection; `flows[0]` is the negative t0 outflow. |
| `Atlas.el(tag, attrs, children)` | Element builder (`text` / `html` are special attrs). |
| `Atlas.bind(id, fmtFn)` | Binds a range input, auto-updates the `<output>` in its `.slider-row`, returns a `{ value }` getter / setter. |
| `Atlas.onInput([ids], handler)` | Attaches `input` / `change` listeners and calls the handler once immediately. |
| `Atlas.quiz(selector, questions)` | Renders the knowledge check; `questions: [{q, choices, answer, explain}]`. |

## 5. Design system

### 5.1 Token strategy

All visual decisions are CSS custom properties defined once in `assets/css/atlas.css` on `:root` and overridden under `[data-theme="dark"]`. Components and page-specific styles reference tokens, never raw hex. The families:

- **Surfaces**: `--bg`, `--surface-1` (cards, chart surface), `--surface-2` (recessed panels), `--surface-3` (hover washes), `--hairline`.
- **Ink**: `--ink` (primary text), `--ink-2` (secondary), `--ink-3` (muted / axis labels).
- **Brand**: `--brand` (#184f95 light), `--brand-strong`, `--brand-soft`.
- **Module accent**: `--mod-accent`, set per page by the shell from the manifest; drives the hero kicker, section numbers, and progress fills.
- **Type**: Fraunces (display), Inter (text), JetBrains Mono (numbers, formulas) via `--font-display` / `--font-mono`.

### 5.2 Light / dark

Light is the default; dark is a full token override under `[data-theme="dark"]`. The pre-paint script in every page's `<head>` reads `localStorage["atlas-theme"]`, falls back to `prefers-color-scheme`, and stamps `data-theme` on `<html>` before first paint. The header toggle flips the attribute and persists the choice.

### 5.3 Dataviz palette and binding chart rules

The categorical palette is 8 validated series colors, each with a separately tuned dark-mode variant:

| Token | Light | Dark |
|---|---|---|
| `--viz-1` | #2a78d6 | #3987e5 |
| `--viz-2` | #1baf7a | #199e70 |
| `--viz-3` | #eda100 | #c98500 |
| `--viz-4` | #008300 | #008300 |
| `--viz-5` | #4a3aa7 | #9085e9 |
| `--viz-6` | #e34948 | #e66767 |
| `--viz-7` | #e87ba4 | #d55181 |
| `--viz-8` | #eb6834 | #d95926 |

Plus semantic `--pos` / `--neg` for gains and losses. The binding rules (full text in `docs/AUTHORING-SPEC.md` section 5): charts render on `--surface-1`; series colors are used in token order, never cycled, never hardcoded; one axis only, never dual-axis; bars at most 24px thick with 4px rounded data ends and square baselines; 2px lines with round caps; dots r >= 4 with a 2px surface ring; hairline solid gridlines; labels are selective and always use ink colors, never series colors; 2 or more series requires a `.legend` row; sequential ramps are blue-only steps and diverging scales are blue to red through a gray midpoint.

## 6. Progress data model

Everything is stored under one `localStorage` key, `atlas-progress-v1`:

```json
{
  "valuation": {
    "seen":  { "intrinsic-vs-relative": true, "dcf": true, "comps": true },
    "total": 7,
    "quiz":  { "score": 8, "total": 10 }
  },
  "foundations": {
    "seen":  { "system-map": true },
    "total": 6,
    "quiz":  null
  }
}
```

- `seen` is a set of section ids marked by the scroll spy; `total` is the section count observed on the last visit.
- `quiz` is the best score: `setQuiz` only overwrites when the new score is strictly higher.
- Completion percentage: `round(70 * min(1, seenCount / total) + 30 * (quiz.score / quiz.total))`. Sections carry 70% of the weight, the quiz 30%, so a module cannot be completed by scrolling alone or by quizzing alone.
- A module is "done" (checkmark in sidebar and home grid) at 95% or above, which in practice requires seeing every section and scoring roughly 9 of 10 on the quiz.
- Theme lives under a separate key, `atlas-theme`, so clearing progress does not reset appearance.
- All reads and writes are wrapped in try / catch, so private browsing modes degrade gracefully to in-memory state.

## 7. Accessibility and performance notes

**Accessibility**

- Semantic landmarks throughout: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`, real heading hierarchy.
- Icon buttons carry `aria-label`s; informative SVGs carry `role="img"` and `aria-label` descriptions.
- Quiz and tabs are real `<button>` elements, keyboard-operable by default; accordions are native `<details>` / `<summary>`.
- Dark and light palettes are tuned separately (not naive inversion) to hold text contrast on both surfaces; chart text always uses ink tokens rather than series colors.
- Known gaps to close: tab groups do not yet implement full WAI-ARIA tab semantics (`role="tablist"`, arrow-key navigation), and live tool outputs are not yet announced via `aria-live` regions.

**Performance**

- No framework, no bundle: the entire JS payload is 2 files (~22 KB raw, smaller gzipped), CSS is 1 file (~29 KB raw). Charts are inline SVG, so there are zero image requests.
- The only external requests are Google Fonts; `preconnect` hints are in every head. Self-hosting the 3 font families would make the site fully offline-capable and is a cheap future win.
- The scroll spy uses `IntersectionObserver` (no scroll handlers); progress writes are small JSON blobs.
- Everything else is static and cache-friendly; GitHub Pages CDN semantics apply with no special configuration.

## 8. Roadmap

Phased extensions, ordered by leverage per unit of complexity. Phase 2 preserves the zero-build constraint; Phase 3 relaxes it deliberately; Phase 4 builds on Phase 3 infrastructure.

### Phase 2: deepen the static platform (no build step yet)

**Site search index.**
A search box in the header that finds any concept, tool, or glossary term across all 9 modules. Valuable because the atlas framing invites lookup-driven use ("where was accretion / dilution covered?"), and a static site can serve that without a server. Implementation: a small generator script (run manually or as a pre-commit step) walks `modules/*.html`, extracts section ids, headings, ledes, and glossary terms into `assets/data/search-index.js` (same pattern as the curriculum manifest); the shell adds a header search input that does client-side prefix and fuzzy matching over the index and deep-links to `module.html#section-id`. Under roughly 200 KB of index this needs no library at all.

**Spaced-repetition flashcard engine.**
A "Review" page that resurfaces quiz questions from completed modules on an expanding schedule. Valuable because a one-time quiz measures learning but does not retain it; spaced repetition is the highest-evidence retention technique and the question bank already exists. Implementation: extract each module's quiz array into `assets/data/quizbank.js` so questions are addressable outside their page; add a review engine to the shell implementing a simplified SM-2 scheduler (per-question ease factor and next-due date stored under a new `atlas-review-v1` localStorage key); the review page pulls due cards across modules and reuses the existing quiz renderer for display and grading.

**Printable module PDFs.**
A print stylesheet good enough that "Print to PDF" from any module produces a clean handout. Valuable for classroom use, offline study, and interview-prep binders. Implementation: an `@media print` block in `atlas.css` that hides chrome (header, sidebar, footer, prev / next), flattens the layout to single column, forces light-theme token values, breaks pages before each `.lesson` section, and replaces each interactive tool with its `.tool-foot` assumptions text plus a static caption. Tools cannot print their interactivity, so each tool gains a one-paragraph "what this tool shows" summary that is hidden on screen and shown in print.

**Deep-linkable tool states via URL params.**
Sharable links that restore a specific tool configuration, e.g. `valuation.html?dcf-g=12&dcf-wacc=9#tool-dcf`. Valuable because it turns every tool into a discussion artifact: an instructor can link "look what happens at 8x leverage" and a learner sees exactly that scenario. Implementation: extend `Atlas.bind` with an opt-in `sync: true` flag that initializes the input from `URLSearchParams` and writes changes back via `history.replaceState`; add a small "Copy link to this scenario" button to the `.tool-head`. Because all tools already recompute from input values on every change, restoring state is just setting inputs and dispatching one `input` event.

### Phase 3: dynamic platform (framework, accounts, AI)

**Next.js migration path preserving content.**
Move the shell to Next.js with static export while keeping every module's content intact. Valuable as the enabler for the rest of Phase 3 (auth, API routes, server-rendered search) without rewriting 9 modules of hand-crafted HTML and SVG. Implementation: the manifest becomes a typed TypeScript module; the app shell (header, sidebar, progress, quiz) becomes React components that reproduce `atlas.js` behavior; module bodies port mechanically to MDX or stay as sanitized HTML rendered inside a `ModuleLayout`, since they were deliberately authored as content-only markup with no chrome. The authoring spec becomes the MDX component contract, and `next export` keeps GitHub Pages viable until server features are actually needed.

**User accounts and sync.**
Optional sign-in that syncs progress, quiz history, and review schedules across devices, with localStorage remaining the anonymous default. Valuable because serious learners work across a laptop and a phone, and cohort features (below) need identity. Implementation: a lightweight auth provider (magic-link email via Auth.js) plus a small progress API backed by Postgres; the client keeps writing to localStorage first and syncs with a last-write-wins merge keyed on `(moduleId, sectionId)` and best-score semantics for quizzes, which matches the existing local model exactly. Privacy stance carries over: sync is opt-in, and the stored payload is only the progress JSON.

**AI tutor pane powered by the Claude API, grounded on module content.**
A collapsible tutor panel on every module page that answers questions in the site's voice, grounded in the module the learner is reading. Valuable because the number one gap in self-paced content is "I did not understand that paragraph, explain it differently," and the content is already structured for grounding. Implementation: a server route (Next.js API route or edge function, keeping the API key server-side) that assembles a system prompt from the current module's section text plus the authoring spec's style rules, and streams Claude's response into the pane; retrieval starts as "whole current module in context" (modules are compact), upgrading later to embedding-based retrieval over the Phase 2 search index for cross-module questions. Guardrails: educational-only framing, refusal of investment advice, and answers cite section anchors the learner can click.

**Scenario-based case simulations.**
Multi-step branching cases that put the learner in a seat, e.g. running a sell-side M&A process: pick the buyer list, set the process design, react to first-round bids, negotiate the LOI, and get scored against outcomes. Valuable because tools teach mechanics but cases teach judgment, and this is the closest a website gets to deal experience. Implementation: a JSON case schema (stages, decision points, state variables like leverage and price, scoring rubric) interpreted by a case engine component; the engine reuses the existing finance math (`npv`, `irr`, accretion / dilution logic) so consequences are computed rather than scripted. Ship 1 flagship case per advanced module (sell-side process for M&A, a take-private for LBOs, an IPO pricing case for capital markets).

**Cohort / classroom mode with shared progress.**
Instructors create a cohort, students join with a code, and the instructor sees a progress and quiz-score dashboard by module. Valuable because the curriculum is a natural semester companion for finance clubs, bootcamps, and analyst onboarding classes, and visibility is what instructors need to assign it. Implementation: builds directly on accounts and sync; adds cohort and membership tables, an invite-code join flow, and a read-only aggregation dashboard over the same progress records. Assignments are just (module, due date) rows; no new content model is required.

### Phase 4: ecosystem

**Certification exams.**
A proctored-lite, timed exam per learning path (Explorer, Analyst, Dealmaker) with a verifiable completion certificate. Valuable because a credential converts finished learners into public advocates and gives the certificate a link-back distribution loop. Implementation: a randomized exam assembled from a held-out question bank (never shown in module quizzes), served and scored server-side to keep answers off the client; passing generates a certificate page with a signed verification URL (HMAC of name, path, score, date). Add-on: an anti-retake cooldown and per-question exposure tracking to keep the bank healthy.

**Community contributions via the authoring spec.**
Open the module catalog to outside authors. Valuable because the marginal cost of a 10th module (say, restructuring or venture capital) is one HTML file plus a manifest entry, and the authoring spec already reads as a reviewable contract. Implementation: a CONTRIBUTING.md that points to `docs/AUTHORING-SPEC.md` as the acceptance bar, plus a CI validator that mechanically checks the definition-of-done list (skeleton conformance, section ids, required tool anchors, no em dashes, quiz shape, no external scripts); human review then covers only pedagogy and accuracy. Community modules land under a `community/` namespace in the manifest with a distinct badge until promoted.

**Localization.**
Translated curricula, starting with the highest-demand languages for finance education. Valuable because the interactive-tool pedagogy travels across languages far better than video, and the content model makes strings enumerable. Implementation: restructure content lookups so every learner-visible string in the shell comes from a locale file, and give modules a per-locale file path in the manifest (`file: { en: ..., es: ... }`); translated modules are full page translations (the authoring spec's style section gets per-locale number and currency conventions). The Phase 3 AI tutor doubles as a translation-QA assistant, flagging drift between language versions of the same section.
