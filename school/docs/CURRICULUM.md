# Capital Atlas: Curriculum Map

The full map of the 9 modules: what each one teaches, how it is sectioned, which live tools it embeds, and what it assumes you already know. Module metadata (titles, order, levels, time estimates) comes from the manifest at `assets/data/curriculum.js`; section structure follows the authoring contract in `docs/AUTHORING-SPEC.md` (5 to 8 lesson sections, always ending in a knowledge check quiz).

## Dependency map

```
01 Foundations ──┬──> 02 Value Chain ──┬──> 07 Buy-Side
                 │                     └──> 09 Careers
                 ├──> 03 Accounting ───> 04 Valuation ──┬──> 05 M&A ──> 06 PE & LBOs
                 │                                      └───────────────────^
                 └──> 08 Capital Markets
```

Module 01 is the only true entry point. Modules 02 and 09 are readable from zero but land better after 01.

---

## Module 01: Foundations of Finance

**Level**: Primer · **Time**: ~45 min · **Prerequisites**: none (entry point)

*What finance is for: moving capital through time, across people, and around risk.*

**Learning objectives**

- Draw the financial system map: owners of capital, users of capital, and the intermediaries in between.
- Name the core instruments (equity, debt, and their variants) and what each one promises its holder.
- Compute present and future values, and explain why $1 today beats $1 next year.
- Use discounting to compare cash flows arriving at different times.
- Explain the risk-return tradeoff and how it sets the price of every asset.

**Sections**

1. Why finance exists (the system map)
2. The instruments that move money
3. Time value of money
4. Discounting and compounding in practice
5. Risk and return
6. Knowledge check

**Embedded tools**: Time Value of Money Lab (`#tool-tvm`), compounding and discounting live.

---

## Module 02: The Industry Value Chain

**Level**: Primer · **Time**: ~50 min · **Prerequisites**: 01 Foundations (the system map)

*Who does what, who pays whom, and how the whole machine fits together.*

**Learning objectives**

- Place every major player (banks, asset managers, PE, VC, hedge funds, brokers, exchanges) on one map.
- Distinguish sell-side from buy-side and explain what each side sells.
- Trace capital from its sources through intermediaries to its users, and returns flowing back.
- Follow the fee flows that fund every player, and say who pays them.
- Describe the market infrastructure (exchanges, clearing, custody) that everything runs on.

**Sections**

1. Sources, intermediaries, users
2. The sell-side
3. The buy-side
4. Market infrastructure
5. The fee map: who pays whom
6. Knowledge check

**Embedded tools**: Industry Map Explorer (`#tool-map`), a clickable map where selecting any player shows its business model and revenue sources.

---

## Module 03: Accounting & the Three Statements

**Level**: Core · **Time**: ~60 min · **Prerequisites**: 01 Foundations

*The language of business: income statement, balance sheet, cash flow, and how they link.*

**Learning objectives**

- Read each of the three financial statements and explain what question each one answers.
- Explain how the statements link, and trace a single transaction through all three.
- Distinguish profit from cash, and explain why a profitable company can run out of money.
- Compute and interpret the key ratios (margins, returns, leverage, liquidity).
- Explain working capital mechanics and why growth consumes cash.

**Sections**

1. The income statement
2. The balance sheet
3. The cash flow statement
4. How the three statements link
5. Key ratios
6. Working capital mechanics
7. Knowledge check

**Embedded tools**: Three-Statement Linkage explorer (`#tool-linkage`), watch a single change (for example $10 of depreciation) ripple through all three statements.

---

## Module 04: Valuation

**Level**: Core · **Time**: ~75 min · **Prerequisites**: 03 Accounting; 01 Foundations (time value of money)

*What a business is worth, and the three lenses professionals use to answer it.*

**Learning objectives**

- Distinguish intrinsic from relative valuation and know when each lens is credible.
- Build a DCF from first principles: free cash flow, discount rate, terminal value.
- Explain enterprise value vs equity value and bridge between them.
- Assemble trading comps: pick a peer set, spread multiples, apply them defensibly.
- Read precedent transactions and explain why they price above trading comps.
- Present a football field and defend a valuation range rather than a point.

**Sections**

1. Intrinsic vs relative value
2. Enterprise value vs equity value
3. DCF from first principles
4. Trading comps
5. Precedent transactions
6. The football field
7. Knowledge check

**Embedded tools**: DCF Sandbox (`#tool-dcf`), a full valuation on sliders (growth, margin, WACC, terminal assumptions); Comps Builder (`#tool-comps`), multiples across a peer set applied to a target.

---

## Module 05: M&A & the Deal Process

**Level**: Advanced · **Time**: ~60 min · **Prerequisites**: 04 Valuation; 03 Accounting

*How companies are bought and sold, from first pitch to closing dinner.*

**Learning objectives**

- Walk the sell-side process step by step, from pitch through marketing, bids, diligence, and close.
- Compare buyer types (strategic vs financial) and explain why they pay different prices.
- Define and size synergies, and explain who ultimately captures them.
- Run accretion / dilution math and explain what EPS impact does and does not tell you.
- Explain how deals are structured (cash vs stock, key terms) and where negotiating leverage comes from.

**Sections**

1. Why companies buy companies
2. The sell-side process, step by step
3. Buyer types and synergies
4. Accretion / dilution
5. Structure and negotiation
6. Knowledge check

**Embedded tools**: Accretion / Dilution calculator (`#tool-accretion`), does the deal add to or subtract from the acquirer's EPS, across financing mixes.

---

## Module 06: Private Equity & LBOs

**Level**: Advanced · **Time**: ~60 min · **Prerequisites**: 04 Valuation; 05 M&A (deal process); 03 Accounting

*Buying companies with borrowed money, and why the math can work spectacularly.*

**Learning objectives**

- Explain LBO mechanics: why leverage amplifies equity returns and where it breaks.
- Compute IRR and MOIC and explain what each measures.
- Attribute returns across the three levers: deleveraging, earnings growth, and multiple expansion.
- Describe fund structures and the GP / LP relationship, including the 2-and-20 economics.
- Outline the PE value creation playbook from entry thesis to exit.

**Sections**

1. The LBO idea
2. LBO mechanics and the debt paydown engine
3. Returns: IRR, MOIC, and attribution
4. Fund structures and the GP / LP relationship
5. The value creation playbook
6. Knowledge check

**Embedded tools**: LBO Simulator (`#tool-lbo`), set purchase multiple, leverage, growth, and exit assumptions; watch IRR and MOIC respond, and watch the math crack at the extremes.

---

## Module 07: Asset Management & Hedge Funds

**Level**: Core · **Time**: ~45 min · **Prerequisites**: 02 Value Chain; 01 Foundations

*The institutions that own the market: who they are and how they invest.*

**Learning objectives**

- Compare the major institution types: mutual funds, ETFs, pensions, endowments, sovereign wealth funds.
- Explain active vs passive management and the fee economics of each.
- Map the main hedge fund strategies, from long / short equity to global macro.
- Quantify fee drag and explain what 2-and-20 costs an investor over time.
- Explain how these institutions, as the market's owners, shape prices and corporate behavior.

**Sections**

1. Who owns the market
2. Mutual funds and ETFs
3. Pensions, endowments, sovereign wealth
4. Hedge funds and their strategies
5. Fees and what they cost you
6. Knowledge check

**Embedded tools**: Fee Drag Visualizer (`#tool-fees`), what management and performance fees compound to over decades.

---

## Module 08: Capital Markets

**Level**: Core · **Time**: ~60 min · **Prerequisites**: 01 Foundations (time value of money); 02 Value Chain helpful; 04 Valuation helpful for the IPO pricing discussion

*Where companies meet investors: equity, debt, and everything derived from them.*

**Learning objectives**

- Walk the IPO process from pitch to pricing and explain who does what.
- Do basic bond math: price a bond, and explain the inverse relation between price and yield.
- Explain duration intuitively: why longer bonds swing harder when rates move.
- Describe leveraged finance and where high-yield debt fits in the capital structure.
- Read option payoff diagrams and build simple combinations from calls and puts.
- Explain how trading actually happens: order flow, market makers, and liquidity.

**Sections**

1. Equity capital markets and the IPO
2. Bond math and the price-yield seesaw
3. Leveraged finance
4. A derivatives primer
5. How trading actually happens
6. Knowledge check

**Embedded tools**: Bond Price Seesaw (`#tool-bond`), rates up, prices down, live; Option Payoff Builder (`#tool-payoff`), calls, puts, and combinations drawn as payoff diagrams.

---

## Module 09: Careers & Breaking In

**Level**: Primer · **Time**: ~40 min · **Prerequisites**: none required; 02 Value Chain makes the role map far more meaningful

*The role map, the money, the hours, and how to get hired.*

**Learning objectives**

- Compare every major seat in the industry: what the job actually is, day to day.
- Read compensation ladders by seat and seniority, and understand the tradeoffs behind the money.
- Map recruiting timelines and know when each pipeline opens and closes.
- Prepare for technical interviews with the standard question bank.
- Choose a target path based on fit rather than prestige alone.

**Sections**

1. The role map: every seat compared
2. Compensation ladders
3. Hours, lifestyle, and tradeoffs
4. Recruiting timelines
5. Technical interview prep
6. Knowledge check

**Embedded tools**: Comp Ladder Explorer (`#tool-comp`), pay by seat and seniority, interactive.

---

## Learning paths

Three curated routes through the curriculum. On the home page, picking a path highlights its modules in order; progress works the same either way.

### Explorer

**For**: people new to finance who want to understand the industry, not yet practice it.

**Sequence**: 01 Foundations -> 02 Value Chain -> 03 Accounting -> 09 Careers

Start from zero. Understand what the industry does, who the players are, and how to read a company. Ends with the careers module so the map connects to real seats. Roughly 3h 15m.

### Analyst

**For**: students and early professionals building technical skills for research, banking, or investing roles.

**Sequence**: 03 Accounting -> 04 Valuation -> 08 Capital Markets -> 07 Buy-Side

The core toolkit: statements, valuation, markets, and the institutions that move them. Assumes the Foundations material (or equivalent comfort with time value of money) is already in hand. Roughly 4h.

### Dealmaker

**For**: anyone headed for investment banking or private equity, including interview prep.

**Sequence**: 04 Valuation -> 05 M&A -> 06 PE & LBOs

Transaction depth: valuation mastery, the M&A process, and leveraged buyouts end to end. Assumes accounting fluency (Module 03) as a hard prerequisite; do it first if the three-statement linkage is not automatic yet. Roughly 3h 15m.
