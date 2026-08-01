/* Industry Atlas - VENTURE CAPITAL (full module, research-backed)
 * Anchors: global VC investment $427B in 2025, with AI taking 61% (~$259B) and $1B+ deals
 * roughly half of AI deal value (OECD, published Feb 2026); a16z targeting a ~$20B AI megafund
 * (Reuters, Apr 2025), Sequoia ~$56B AUM; megafunds ~72% of H1 2026 deal value vs ~25% a year
 * earlier (CNBC, Jul 2026); DPI drought: 2021-vintage funds ~0.08x DPI after ~5 years, 12-month
 * distribution yield ~10.9% vs ~19.6% decade average (PitchBook/Carta, 2025); US venture
 * secondaries ~$106B traded in 2025, and secondaries ($61.1B) out-traded VC-backed IPO value
 * ($58.8B) in the 12 months through June 2025 (Industry Ventures, Carta); down rounds ~17% of
 * Q3 2025 rounds, a near 3-year low (Carta); the top ~100 of 4,000+ annual rounds generate 70%+
 * of all returns, top-decile funds clear 3x net (Cambridge Associates). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["venture-capital"] = {
  meta: {
    id: "venture-capital", name: "Venture Capital", sector: "finance", status: "full",
    tagline: "A power-law lottery on 10-year money: about 100 deals a year pay for the other 4,000, and right now 61% of every dollar is betting on AI.",
    marketSize: { value: 3, unit: "$T", asOf: 2025, mapValue: 35, note: "global VC AUM, Preqin-class estimates (~$3T); $427B was deployed into startups in 2025 (OECD). Map sizing uses the roughly $35B annual management-fee pool (est)" },
    cagr: { value: 9, range: [6, 12], horizon: "2025-2030" },
    maturity: "cyclical-growth", cyclicality: 5, capitalIntensity: 1, regulation: 2, disruption: 3
  },
  newsQuery: '("venture capital" OR "Series A" OR "Series B" OR "seed round" OR "Andreessen Horowitz" OR "Sequoia Capital" OR "startup funding" OR unicorn OR "venture fund")',

  overview: {
    definition: "Venture capital funds the improbable: minority equity stakes in young private companies, held in 10-year closed-end funds, priced on the belief that 1 outlier will repay a portfolio of failures. It is the smallest of the big asset classes and the one that manufactures the largest companies on Earth.",
    howItWorks: [
      "The machine is a partnership sandwich: institutional LPs (endowments, pensions, sovereign funds, family offices) commit capital to a GP's 10-year fund; the GP calls that capital down over a 3-to-5-year investment period, buys minority stakes in startups round by round (pre-seed through growth), reserves capital to follow on into winners, and returns proceeds as companies exit. The GP earns roughly 2% a year in management fees plus 20% of profits (carried interest): fees run the firm, carry is the prize.",
      "The economics are a power law, not a bell curve: Cambridge Associates data shows the top ~100 rounds out of 4,000+ in a typical year generate more than 70% of all venture returns, and inside a single fund 1 to 3 positions usually produce 50% to 80% of total value. Top-decile funds clear 3x net while the median fund barely returns capital, with a top-to-bottom quartile spread over 30 points of IRR. The craft is therefore not avoiding losses (40% to 60% of positions returning under 1x is normal) but making sure at least 1 position can return the entire fund.",
      "The current market is historically lopsided: $427B of global VC deployed in 2025, with AI companies absorbing 61% of it (~$259B), more than double AI's 30% share in 2022, and deals above $1B making up roughly half of AI deal value (OECD). Capital has concentrated to match: a16z set out to raise a ~$20B AI growth megafund in 2025, Sequoia runs ~$56B of AUM including a ~$20B evergreen fund, and by H1 2026 megafunds accounted for ~72% of all deal value, up from ~25% a year earlier. VC is bifurcating into a few asset-management platforms and a long tail of specialist seed funds.",
      "Liquidity is the asset class's broken stage: paper marks (TVPI) recovered but cash back to LPs (DPI) did not. The 2021 vintage had returned roughly 0.08x of committed capital after about 5 years, and the industry's 12-month distribution yield ran near 10.9% against a ~19.6% decade average. Into that vacuum grew the secondary market: about $106B of US venture secondaries traded in 2025, and in the 12 months through June 2025 secondary volume ($61.1B) exceeded the value of all VC-backed IPOs ($58.8B). When the side door out-trades the front door, the front door is the story."
    ],
    history: [
      { era: "1946-1979", title: "Invention of the asset class", text: "ARD's $70K stake in Digital Equipment returns roughly 500x, proving the outlier math; the limited partnership and 2-and-20 take shape; the 1979 ERISA prudent-man reinterpretation unlocks pension money and creates modern VC." },
      { era: "1980-1994", title: "Sand Hill institutionalizes", text: "Sequoia, Kleiner Perkins, and the Sand Hill Road cluster fund the PC and networking eras; the playbook forms: concentrated boards, staged rounds, reserves for winners." },
      { era: "1995-2002", title: "Dot-com boom and bust", text: "The internet mints the first mania: record fundraising, day-1 IPO pops, then the NASDAQ loses ~78% and a decade of vintages goes underwater. Fund sizes and egos reset." },
      { era: "2003-2021", title: "Software eats everything, then ZIRP eats discipline", text: "Web 2.0, cloud, and mobile build the FAANG generation; 'unicorn' is coined in 2013; SoftBank's $100B Vision Fund (2017) industrializes the megaround; ZIRP-era 2021 peaks with roughly $600B+ deployed at record prices, the blowoff top." },
      { era: "2022-present", title: "The reset and the AI supercycle", text: "Rates end the free-money era: valuations reset, down rounds exceed 20% of rounds for 7 of 8 quarters, exits freeze, and DPI becomes the scarcest commodity. Simultaneously ChatGPT detonates an AI land grab that takes 61% of 2025's $427B, splitting the industry into an AI boom and an everything-else drought." }
    ],
    trends: [
      { title: "AI absorbs the asset class", direction: "up", text: "61% of 2025's global VC dollars went to AI (~$259B), with $1B+ megadeals about half of AI deal value (OECD): the deepest sector concentration in venture history." },
      { title: "Megafund consolidation", direction: "shift", text: "a16z's ~$20B target, Sequoia's evergreen structure, and General Catalyst's platform ambitions turn top GPs into asset managers; megafunds took ~72% of H1 2026 deal value vs ~25% a year earlier." },
      { title: "The DPI drought", direction: "down", text: "2021-vintage funds sat near 0.08x DPI after ~5 years and distribution yields ran about half the decade average: LPs are cash-poor and re-up capacity is rationed." },
      { title: "Secondaries as structural exit", direction: "up", text: "~$106B of US venture secondaries traded in 2025 and secondaries out-traded VC-backed IPO value in the year through June 2025: the release valve became a lane." },
      { title: "Repricing fades, selectivity stays", direction: "shift", text: "Down rounds fell to ~17% of rounds by Q3 2025, a near 3-year low (Carta), but graduation between rounds remains brutal outside AI: a two-tier market of haves and hold-ons." }
    ],
    outlook: "The next 5 years are a collision between the biggest deployment boom (AI) and the worst distribution drought in the asset class's modern history. If AI exits materialize (IPOs, M&A, secondaries at par), 2026-2028 could deliver a record LP payout cycle and validate the megafund model; if AI marks reset before liquidity arrives, 61% concentration works in reverse and fundraising outside the platform GPs freezes. Either way the structural changes look permanent: secondaries as a standing exit lane, a barbell of seed specialists and asset-management platforms, and DPI, not IRR, as the scoreboard that matters."
  },

  structure: {
    suppliers: [
      { name: "LPs: endowments, pensions, sovereigns, fund-of-funds", note: "The capital source; the Yale model made VC an institutional allocation" },
      { name: "Founders & talent pipelines", note: "Universities, big-tech alumni, repeat founders: the actual raw material" },
      { name: "Service layer (law, banks, fund admin)", note: "Wilson Sonsini/Cooley class docs; the SVB collapse (2023) showed how load-bearing the banking layer was" },
      { name: "Data & sourcing tools", note: "PitchBook, Crunchbase, Harmonic-class signal engines: sourcing is going quantitative" }
    ],
    producers: [
      { name: "Platform megafunds (a16z, General Catalyst, Sequoia)", note: "Multi-stage, multi-product asset managers; a16z is a registered RIA" },
      { name: "Seed & specialist funds", note: "The power law's native habitat: small funds, concentrated bets" },
      { name: "Corporate VC & strategics", note: "Google Ventures class, plus AI-era chip and cloud investors with strategic motives" },
      { name: "Crossovers & accelerators", note: "Tiger/Coatue class tourists (2021's protagonists) and Y Combinator's batch machine" }
    ],
    distributors: [
      { name: "Placement agents & wealth platforms", note: "Raising the funds; private-wealth rails are the next LP frontier" },
      { name: "Secondary market", note: "~$106B traded in 2025: how LP stakes and employee shares find liquidity" }
    ],
    customers: [
      { name: "Startups", note: "Consume the capital; the best ones now choose their investors" },
      { name: "LPs", note: "Consume the fund product; they buy access to the power law" },
      { name: "Acquirers & public markets", note: "Consume the exits: no IPO window, no flywheel" }
    ],
    regulators: [
      { name: "SEC", note: "Exempt reporting advisers, Reg D private placements; RIA registration for the platforms" },
      { name: "CFIUS & outbound-investment rules", note: "Geopolitics now screens both who can invest and where exits can go" },
      { name: "Tax authorities", note: "Carried interest's treatment is a perennial political football" }
    ],
    capital: [
      { name: "LP commitments & capital calls", note: "Committed, not held: the fund is a promise drawn down over years" },
      { name: "Subscription lines & NAV loans", note: "Bridge financing that flatters IRR and papers over the DPI gap" },
      { name: "Secondaries & continuation funds", note: "$11.8B of dedicated venture-secondary dry powder as of mid-2025, up 2.8x since 2022 (Carta)" }
    ]
  },

  valueChain: {
    intro: "From an endowment's commitment to a 100x position and back again. Value concentrates at the 2 ends: whoever picks (or becomes) the outlier captures nearly everything; the middle of the chain earns fees.",
    stages: [
      { id: "fundraising", name: "LP fundraising", what: "Raising 10-year committed capital from institutions", players: "GPs + placement agents; endowments, pensions, sovereigns", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 1, concentration: 4 },
        linksTo: ["asset-management", "wealth-management"],
        deeper: "Fundraising is the industry's true cycle: DPI feeds re-ups, so the distribution drought rations new commitments toward brand-name GPs. Megafunds raised $50B in H1 2026 vs $8B a year earlier while the long tail starved: capital concentration is the fundraise, not just the deals." },
      { id: "sourcing", name: "Sourcing & selection", what: "Seeing the 4,000 rounds, picking the 100 that matter", players: "Partners, scouts, accelerators, signal tools", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 2 },
        linksTo: ["ai", "saas"],
        deeper: "The scarce input is not capital but access: the best founders run competitive rounds, and the winner is often decided by brand and prior outcomes. This is why returns persist at the top: winning deals begets seeing deals, a network effect wearing a partnership." },
      { id: "investing", name: "Rounds & pricing", what: "Staged equity: pre-seed to growth, priced round by round", players: "Lead investors set terms; syndicates fill rounds", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 3 },
        linksTo: ["biotech", "fintech", "crypto"],
        deeper: "Each round is an option on the next: seed buys the Series A experiment, A buys the B. Graduation is the mortality table: most companies stall between rounds, which is why reserves and follow-on discipline, not entry price alone, decide fund outcomes. In 2025 pricing re-bifurcated: AI rounds at record marks, everything else clawing back from the 2022 reset." },
      { id: "company-building", name: "Company building", what: "Boards, hiring, go-to-market, follow-on capital", players: "GPs + platform teams (talent, marketing, policy)", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 2 },
        linksTo: ["saas", "cloud"],
        deeper: "The megafunds industrialized this: a16z-class platform teams (recruiting, sales intros, regulatory) are the pitch to founders. Whether services move the power law is contested; that they win allocations in hot rounds is not." },
      { id: "exits", name: "Exits", what: "IPOs, M&A: converting marks into money", players: "Investment banks, acquirers, public markets", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 3 },
        linksTo: ["capital-markets", "investment-banking"],
        deeper: "Everything upstream is an opinion until this stage makes it cash. The 2022-2025 exit freeze is the whole industry's binding constraint: IPOs reopened selectively (AI, defense, crypto) at trimmed valuations while antitrust posture chilled big-tech M&A. The backlog of unexited decacorns is the largest inventory overhang in venture history." },
      { id: "secondaries", name: "Secondaries & distributions", what: "LP-stake sales, tenders, continuation funds, cash back", players: "Industry Ventures, StepStone class; GP-led tenders", valueCapture: 4,
        economics: { grossMargin: [30, 50], capitalIntensity: 3, concentration: 3 },
        linksTo: ["private-equity", "asset-management"],
        deeper: "The fastest-growing stage: ~$106B of US venture secondaries traded in 2025 ($91.7B direct, $14.6B GP-led), out-trading VC-backed IPO value over the year through June 2025. Discounts to NAV are the market's live audit of private marks: the honest price the primary market refuses to print." }
    ]
  },

  financials: {
    businessModel: [
      "A GP's P&L is 2 businesses stapled together. Management fees (roughly 2% a year on committed capital, stepping down after the investment period) are contractual, decade-long, and fund the firm: on a $1B fund that is a ~$150M to $200M lifetime fee stream regardless of performance. Carried interest (20% of profits, usually after returning capital) is a long-dated call option on the power law: worth nothing on the median fund, worth fortunes on a fund-returner. The megafund era tilts the mix toward fees: at $20B of AUM the fee stream alone is an asset-management business, which is precisely the LP critique.",
      "Fund math runs on 3 letters: TVPI (paper value), DPI (cash returned), IRR (time-weighted opinion). The J-curve makes early years look bad, subscription lines make IRRs look better than they are, and only DPI cannot be argued with: which is why the 2021 vintage sitting near 0.08x DPI after ~5 years defines the current era. A venture fund needs its 1 to 3 winners to be enormous: at typical ownership (10% to 20%, diluted down), returning a $500M fund requires several billion dollars of exit value from a single company. That arithmetic, not optimism, is why everyone hunts the same outliers."
    ],
    fingerprint: { grossMargin: 65, recurringRevenue: 70, capitalIntensity: 8, pricingPower: 55, cyclicality: 90, operatingLeverage: 80 },
    lines: [
      { label: "Management fees", note: "~2% on committed capital: the annuity that keeps the lights on for 10 years" },
      { label: "Carried interest", note: "20% of profits above the return of capital: the power-law option" },
      { label: "TVPI / IRR marks", note: "Paper performance; marked quarterly, argued always" },
      { label: "DPI distributions", note: "Cash to LPs: the only line that ends arguments" },
      { label: "Platform & balance-sheet revenue", note: "RIA services, funds-of-funds, GP commitments: the megafund diversification" }
    ],
    unitEconomics: {
      unit: "per $100M seed fund (illustrative)",
      items: [
        { label: "Lifetime management fees", value: "~$15M to $20M", note: "2% a year, stepping down after the investment period" },
        { label: "Portfolio", value: "25 to 40 companies", note: "with reserves held for follow-ons into the winners" },
        { label: "Expected sub-1x positions", value: "40% to 60% of the portfolio", note: "normal, not failure: the power law prices this in" },
        { label: "The fund returner", value: "1 to 3 positions drive 50% to 80% of value", note: "a 30x+ outcome pays for everything (Cambridge Associates)" }
      ]
    }
  },

  kpiRefs: ["pe-dpi", "am-netflows", "am-feerate"],
  kpiLocal: [
    {
      id: "vc-fund-returner", name: "Fund-Returner Concentration", industries: ["venture-capital"],
      definition: "The share of a fund's total value held in its top 1 to 3 positions, and whether any single position is tracking to return the whole fund.",
      formula: "Top-3 position value / total fund value; fund-returner test = largest position's realistic exit value x ownership vs fund size",
      interpretation: "Venture returns are made by outliers: Cambridge Associates data shows 1 to 3 positions produce 50% to 80% of a typical fund's value. A portfolio of uniform 2x to 3x marks with no candidate outlier is a fund that will not clear its hurdle.",
      healthy: "At least 1 position credibly tracking to return the fund; top-3 concentration rising with marks", warning: "Even value spread, no outlier candidate, reserves deployed into the middle of the book" },
    {
      id: "vc-graduation-rate", name: "Round Graduation Rate", industries: ["venture-capital"],
      definition: "The share of companies in a cohort that raise the next priced round within roughly 24 months (seed to A, A to B).",
      formula: "Companies raising round N+1 within window / cohort raising round N",
      interpretation: "Graduation is venture's mortality table: it prices the whole risk curve. Historical seed-to-A rates ran near 30% to 40%; post-2022 cohorts have graduated far more slowly per Carta data, with AI companies the loud exception.",
      healthy: "Cohort graduation near or above historical norms; bridges are exceptions", warning: "Graduation collapsing while bridge rounds and extensions multiply: a shadow down cycle" }
  ],

  health: {
    intro: "Fund health is DPI against vintage benchmarks; GP health is whether re-ups arrive without begging; industry health is whether the flywheel (raise, deploy, exit, distribute) completes a full turn.",
    pillars: [
      { name: "Liquidity engine (DPI)", weight: 30, metrics: "DPI vs vintage benchmark, distribution yield, exit mix", healthy: "Distribution yields near the ~19.6% decade average; DPI compounding by year 7", warning: "The current pattern: ~10.9% yields, 2021 vintage near 0.08x, secondaries as the main exit" },
      { name: "Power-law capture", weight: 25, metrics: "Fund-returner presence, top-3 concentration, follow-on discipline", healthy: "Outlier candidates in every fund; reserves concentrated behind them", warning: "Uniform mid-multiple marks; spraying follow-ons evenly" },
      { name: "Fundraising & LP re-ups", weight: 20, metrics: "Re-up rate, time to close, fund size vs predecessor", healthy: "Oversubscribed successors inside 12 months", warning: "18+ month raises, shrinking funds, first-time-fund extinction" },
      { name: "Mark honesty", weight: 15, metrics: "Marks vs secondary pricing, down-round recognition, write-off pace", healthy: "Exits and secondaries land at or near carrying marks", warning: "Persistent wide NAV discounts: the secondary market calling the bluff" },
      { name: "Franchise & talent", weight: 10, metrics: "Partner continuity, carry spread, founder NPS", healthy: "Broad carry, stable partnership, founders choosing the firm", warning: "Key-person flight and succession theater" }
    ],
    scoringNote: "In venture the unforgivable event is a lost decade of DPI: a GP that returns no cash across 2 funds loses the LP base, and the power law offers no partial credit."
  },

  valuation: {
    intro: "Three nested problems: valuing startups (rounds price options, not cash flows), valuing funds (NAV is an opinion until exit), and valuing GPs (a fee annuity plus a carry option). The secondary market now referees all 3.",
    methods: [
      { name: "Vintage-benchmarked TVPI / DPI", use: "Judging funds against same-year peers (Cambridge Associates, PitchBook benchmarks)", avoid: "Comparing across vintages or trusting IRR flattered by subscription lines", strengths: "The institutional standard; controls for cycle timing", weaknesses: "TVPI is marks; only DPI is cash", range: { low: 1.5, high: 3, asOf: 2025, note: "net TVPI: median funds near the low end, top decile clears 3x (Cambridge Associates); DPI tells the truer story" } },
      { name: "Secondary pricing (% of NAV)", use: "The live market check on private marks; pricing LP stakes", avoid: "Assuming discounts converge to par on any schedule", strengths: "Actual clearing prices from ~$106B of 2025 volume", weaknesses: "Adverse selection: what trades is not a random sample", range: { low: 60, high: 90, asOf: 2025, note: "typical venture LP-stake pricing as % of NAV; prime AI names trade at or above par" } },
      { name: "Revenue multiples on the portfolio", use: "Marking growth-stage software and AI positions", avoid: "Static multiples on hyper-growth or pre-revenue science bets", strengths: "Anchors NAV to public comparables", weaknesses: "The 2021 lesson: multiples can compress 70%+ while the company executes", range: { low: 5, high: 15, asOf: 2025, note: "forward revenue multiples for venture-backed software; frontier AI labs price far above any conventional multiple" } },
      { name: "GP franchise value (fees + discounted carry)", use: "Pricing GP stakes and platform economics", avoid: "Full credit for unrealized carry on stale marks", strengths: "Separates the annuity from the option correctly", weaknesses: "Almost no listed pure-play VCs: private marks valuing private-markets firms", range: { low: 10, high: 20, asOf: 2025, note: "multiple on fee-related earnings for scaled platforms, per GP-stakes deal reporting; carry typically at 0.5x or less" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Sketch an LP's outcome fast: fund size times expected net TVPI, minus a haircut for value still trapped in unrealized marks.",
      inputs: [
        { id: "vcx-fund", label: "Fund size ($M)", min: 25, max: 2000, step: 25, value: 300, fmt: "money" },
        { id: "vcx-tvpi", label: "Expected net TVPI", min: 0.5, max: 5, step: 0.1, value: 1.8, fmt: "mult" },
        { id: "vcx-unrealized", label: "Unrealized haircut ($M)", min: 0, max: 1500, step: 25, value: 150, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats venture as a liquidity cycle wrapped around a technology bet it cannot directly own: no listed pure-plays, so exposure comes sideways (listed holders of late-stage privates, secondaries specialists, GP stakes, and the IPO pipeline) while the asset class itself is judged on 1 number, DPI. The current setup is unprecedented: record deployment into 1 theme (AI at 61% of dollars) stacked on the worst distribution drought in modern venture history. That resolves either as the biggest payout cycle ever or as a concentrated markdown; position for the fact that nobody knows which.",
    debates: [
      { topic: "AI at 61% of dollars: supercycle or blowoff?", bull: "The revenue is real this time: foundation models and AI infrastructure are compounding at rates that make 2021's SaaS marks look quaint, megadeal capital is buying actual compute and distribution, and the last 2 platform shifts (internet, mobile) each justified their manias eventually. Concentration into the winning theme is what the power law says to do.", bear: "61% into 1 theme with $1B+ deals at half the value is not diversification, it is a single trade marked by its own participants; capex-hungry business models burn the cash faster than any software generation, and when the marks reset, the same funds, LPs, and secondaries all correlate to 1 factor. 2021 taught the price lesson; this vintage may teach it at 10x the size." },
      { topic: "Megafunds: is VC becoming asset management?", bull: "Scale wins the actual game: brand wins competitive rounds, platform services win founders, permanent capital wins LP wallet share, and the fee stream funds the patience the power law requires. a16z and Sequoia are doing to VC what Blackstone did to PE, and early: the asset-gathering phase is when franchise value compounds.", bear: "Returns in venture have always scaled inversely with fund size: a $20B fund needs roughly $60B of exit value just to 3x, meaning multiple trillion-dollar outcomes per fund, forever. Fees on that AUM enrich GPs regardless, which is exactly the incentive rot LPs fear: the power law does not care how good the conference is." },
      { topic: "Secondaries: release valve or the tell?", bull: "A ~$106B market with dedicated dry powder up 2.8x since 2022 is maturation, not distress: employees get liquidity, LPs get duration management, and price discovery makes the whole asset class more institutional. Every real asset class has a secondary market; venture finally grew one.", bear: "Secondaries out-trading IPO value means the exit of first resort failed and holders are paying (10% to 40%) discounts to leave: that is the market grading NAVs in public. A release valve that becomes the main pipe is not plumbing, it is the diagnosis." }
    ],
    cycle: {
      where: "Two cycles at once: deployment is mid-boom (2025's $427B, AI-led, megafunds stacked with fresh capital) while liquidity is late-drought (2021 vintage ~0.08x DPI, distribution yields near half the decade average, down rounds fading to ~17% but exits only selectively open). The gap between those 2 clocks is the whole risk.",
      drivers: "The IPO window and rates (exit math), AI capex sentiment (61% of dollars ride it), LP liquidity and the denominator effect (re-up capacity), and secondary pricing (the live mark on everything).",
      leads: [
        "Carta State of Private Markets (free, quarterly): round counts, down-round share, graduation rates",
        "PitchBook-NVCA Venture Monitor (free, quarterly): deployment, fundraising, exit tallies",
        "IPO filings and lockup calendars for VC-backed decacorns (SEC EDGAR, free)",
        "Secondary pricing and volume commentary (Industry Ventures, Jefferies reviews: free summaries)",
        "OECD and Crunchbase AI-funding trackers (free): the concentration variable itself"
      ]
    },
    exposure: [
      { vehicle: "Listed holders of late-stage privates (Scottish Mortgage class)", note: "The closest public proxy for decacorn NAVs, with a live discount attached" },
      { vehicle: "SoftBank Group", note: "The listed megafund: Vision Fund marks plus balance-sheet AI bets, at a holding-company discount" },
      { vehicle: "Secondaries & private-markets specialists (StepStone, Hamilton Lane class)", note: "This cycle's best seat: paid to provide the liquidity everyone lacks" },
      { vehicle: "Venture-debt BDCs (Hercules class)", note: "Yield on the startup ecosystem with seniority over the equity" },
      { vehicle: "Recent VC-backed IPO baskets (Renaissance IPO ETF class)", note: "The exit pipeline as a tradeable: what venture is about to hand the public market" }
    ],
    catalysts: [
      { when: "Quarterly", what: "Carta and PitchBook-NVCA prints: down rounds, graduation, DPI trajectory" },
      { when: "Episodic, market-moving", what: "Marquee AI rounds and megafund closes: each re-marks entire sub-sectors" },
      { when: "IPO windows", what: "Decacorn filings and lockup expiries: the DPI drought's release events" },
      { when: "Fed decisions & risk regimes", what: "Rates set both the exit multiple and the LP allocation math" }
    ],
    data: [
      { series: "Venture Monitor (deployment, exits, fundraising)", source: "PitchBook-NVCA (free quarterly report)", why: "The industry's standard tape" },
      { series: "State of Private Markets (rounds, valuations, down rounds)", source: "carta.com/data (free)", why: "Cleanest primary data: real cap tables, not press releases" },
      { series: "VC investment in AI", source: "OECD (free publications)", why: "The concentration variable: 61% of 2025 dollars" },
      { series: "Form D private placements", source: "SEC EDGAR (free)", why: "Primary-source fundraise filings before the press release" },
      { series: "US PE/VC benchmark commentary", source: "Cambridge Associates (free insights)", why: "Vintage benchmarks: what good actually looks like" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Deployment slows, marks lag reality by 2 to 4 quarters, exit window slams: DPI drought extends. Best vintages are raised here though; commit into the fear." },
      { regime: "Rates rising", behavior: "Discount rates crush long-duration marks, LP denominator effect cuts commitments, venture debt tightens: the 2022 template. Secondaries discounts widen first." },
      { regime: "AI capex bust", behavior: "The 61% concentration works in reverse: correlated markdowns across funds, vintages, and secondaries simultaneously. Non-AI specialists and seed funds become the diversification." },
      { regime: "IPO window opens", behavior: "DPI floods back, re-ups unlock, fundraising reflates the long tail: the flywheel restarts. Historically brief: sell into it, distribute in kind, do not admire it." }
    ]
  },

  players: [
    { name: "Sequoia Capital", role: "The franchise", country: "US", real: true, note: "~$56B AUM; its evergreen Sequoia Capital Fund (~$20B) rewired the 10-year fund model" },
    { name: "Andreessen Horowitz", role: "Platform megafund", country: "US", real: true, note: "Registered RIA; set out to raise ~$20B for AI growth in 2025, among the largest VC funds ever" },
    { name: "General Catalyst", role: "The conglomerate experiment", country: "US", real: true, note: "Multi-strategy platform stretching the definition of VC, including owning a health system" },
    { name: "SoftBank Vision Fund", role: "The megaround pioneer", country: "JP", real: true, note: "$100B Fund 1 (2017) industrialized the blitzscaling round; now an AI balance-sheet investor" },
    { name: "Y Combinator", role: "The seed factory", country: "US", real: true, note: "Batch-based accelerator; the widest top-of-funnel in venture" },
    { name: "Benchmark", role: "The anti-megafund", country: "US", real: true, note: "Deliberately small equal-partnership funds: the purest power-law bet in the industry" },
    { name: "Tiger Global", role: "The crossover cautionary tale", country: "US", real: true, note: "2021's fastest deployer; the vintage that defines the reset" },
    { name: "StepStone / Industry Ventures", role: "Secondaries specialists", country: "US", real: true, note: "The liquidity providers in a ~$106B venture-secondary market" }
  ],

  geography: [
    { country: "US", role: "The center of gravity", note: "Roughly half or more of global VC dollars; the Bay Area's AI boom deepened the lead" },
    { country: "CN", role: "The interrupted challenger", note: "Once a near-peer to the US; regulation and geopolitics collapsed cross-border venture flows" },
    { country: "GB", role: "Europe's hub", note: "London leads European venture; DeepMind-to-present AI talent density" },
    { country: "IN", role: "The volume market", note: "Top-4 global ecosystem by deals; consumer and fintech depth, exits still maturing" },
    { country: "IL", role: "Deep-tech density", note: "The highest VC intensity per capita: security, chips, and now AI infrastructure" },
    { country: "AE", role: "The new LP", note: "Gulf sovereigns became anchor LPs of the megafund era and are building local ecosystems" }
  ],

  cycles: [
    { year: 1979, title: "The prudent-man unlock", kind: "shift", text: "ERISA's reinterpretation lets pensions into venture; institutional capital creates the modern asset class within a decade. Lesson: the biggest venture returns of all came from a regulatory footnote." },
    { year: 2000, title: "Dot-com collapse", kind: "bust", text: "The NASDAQ falls ~78%; a generation of vintages goes underwater and fundraising halves for years. Lesson: liquidity is a window, not a right: exits taken in manias are the returns that survive them." },
    { year: 2017, title: "The Vision Fund arrives", kind: "boom", text: "SoftBank's $100B fund reprices every growth round on Earth; capital scale becomes a strategy in itself. Lesson: when money is the differentiator, discipline is the casualty (see WeWork)." },
    { year: 2021, title: "The ZIRP blowoff", kind: "boom", text: "Roughly $600B+ deployed at record marks; crossovers price rounds in days. The vintage later sits near 0.08x DPI after ~5 years. Lesson: entry price is the one risk a GP chooses voluntarily." },
    { year: 2023, title: "The DPI drought", kind: "bust", text: "Exits freeze, down rounds top 20% for 7 of 8 quarters, SVB fails, and secondaries become the exit of record. Lesson: IRR is an opinion, TVPI is a mark, DPI is a fact." }
  ],

  risks: [
    { name: "AI concentration unwind", severity: 5, likelihood: 3, transmission: "AI marks reset -> 61% of deployed dollars re-price together -> NAVs, secondaries, and fundraising correlate downward across every 2023-2026 vintage at once." },
    { name: "DPI drought persists", severity: 4, likelihood: 3, transmission: "Exit window stays shut -> LPs get no cash -> re-ups fail beyond brand GPs -> long-tail fundraising extinction and orphaned portfolios." },
    { name: "Megafund return dilution", severity: 3, likelihood: 4, transmission: "$20B funds need trillion-dollar outcomes -> entry prices bid up across stages -> asset-class net returns compress toward fees." },
    { name: "LP denominator shock", severity: 3, likelihood: 3, transmission: "Public-market drawdown -> private allocations breach targets -> commitments cut and secondaries flooded -> discounts widen, marks follow." },
    { name: "Policy & geopolitical screens", severity: 3, likelihood: 2, transmission: "Outbound-investment rules, CFIUS, carry taxation -> cross-border flows and exit routes narrow -> China-style ecosystem decoupling repeats elsewhere." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Venture capital firms collect money from big institutions into 10-year funds and use it to buy small stakes in young companies, hoping a few become giants. Most startups in a portfolio fail or go sideways, and that is expected: 1 or 2 huge winners (think an early stake in a future household name) pay for everything else. The firms earn a yearly fee plus 20% of the profits."] },
    L2: { title: "Intermediate", text: ["The math is a power law: about 100 deals a year out of 4,000+ produce over 70% of all returns, and inside a fund 1 to 3 companies drive 50% to 80% of value (Cambridge Associates). So the game is access to outliers, not avoiding losses. Today's market is historically concentrated: $427B deployed globally in 2025 with 61% going to AI (OECD), while cash returned to investors sits at drought levels: the 2021 fund vintage had returned roughly 0.08x after ~5 years."] },
    L3: { title: "Advanced", text: ["Read funds through TVPI, DPI, and vintage benchmarks, and trust them in that reverse order: marks are opinions, cash is fact, and subscription lines flatter IRR. Watch graduation rates (the mortality table between rounds), fund-returner concentration (is any position tracking to return the fund), and secondary pricing as the live audit of NAV: ~$106B of US venture secondaries traded in 2025, out-trading VC-backed IPO value over the year through June 2025. The megafund shift (a16z's ~$20B AI vehicle; megafunds at ~72% of H1 2026 deal value) tilts GP economics from carry toward fees: underwrite the incentive change, not the brand."] },
    L4: { title: "Expert", text: ["The live debates are position-defining: whether AI's 61% share is the internet in 1996 or 1999; whether $20B funds can clear power-law hurdles that historically punished scale (a $20B fund must generate ~$60B of exits to 3x); and whether secondaries out-trading IPOs is maturation or diagnosis. Trade the 2-clock problem: deployment is mid-boom while liquidity is late-drought, and the spread resolves through either a record 2026-2028 distribution cycle or a correlated AI markdown. Down rounds at ~17% (Q3 2025, a 3-year low) say repricing is done; graduation rates say selection is not."] },
    L5: { title: "Institutional", text: ["Allocator's frame: venture is the only asset class where manager selection is nearly the entire return, because the median fund barely beats capital returned while the top decile clears 3x net and access to those GPs is itself the moat. Size commitments so the DPI drought is survivable (distribution yields at ~10.9% vs the ~19.6% decade average mean pacing models fail quietly), use secondaries both ways (buy discounts, sell duration), and treat the AI concentration as a portfolio-level factor exposure, not a diversified allocation. The discipline that pays: commit steadily through fear vintages, and remember that in 2 decades the asset class's entire excess return traces to a rounding error's worth of companies."] }
  },

  quiz: [
    { q: "In 2025, AI companies captured roughly what share of global VC dollars?", choices: ["15%", "33%", "61%: about $259B of $427B (OECD)", "90%"], answer: 2, explain: "AI took 61% of global venture investment in 2025, more than double its 30% share in 2022: the deepest sector concentration in venture history." },
    { q: "The power law in venture means:", choices: ["Most startups succeed modestly", "Returns spread evenly across a portfolio", "The top ~100 of 4,000+ annual rounds generate 70%+ of all returns", "Losses are rare but large"], answer: 2, explain: "Cambridge Associates data shows extreme concentration: inside a single fund, 1 to 3 positions typically produce 50% to 80% of total value." },
    { q: "DPI measures:", choices: ["Paper value of a fund's holdings", "Cash actually distributed to LPs as a multiple of what they paid in", "Annualized return", "Deal pace"], answer: 1, explain: "TVPI is marks and IRR is time-weighted opinion; DPI is cash out the door. The 2021 vintage near 0.08x after ~5 years is why LPs call this the distribution drought." },
    { q: "In the 12 months through June 2025, venture secondaries volume:", choices: ["Was negligible", "Exceeded the value of all VC-backed IPOs ($61.1B vs $58.8B)", "Was banned by the SEC", "Only involved crypto"], answer: 1, explain: "The side door out-traded the front door: ~$106B of US venture secondaries traded in 2025 overall, the market's live audit of private marks." },
    { q: "A GP's management fee and carried interest are typically:", choices: ["10% and 50%", "About 2% a year on committed capital, plus 20% of profits", "Flat $1M per deal", "Set by the SEC"], answer: 1, explain: "Fees fund the firm for a decade regardless of outcome; carry is a call option on the power law: the megafund era tilts economics toward the fee stream." },
    { q: "The skeptic's case against $20B venture megafunds is that:", choices: ["They are illegal", "Returning 3x requires ~$60B of exit value: multiple trillion-dollar outcomes per fund", "They cannot hire staff", "LPs refuse to invest"], answer: 1, explain: "Venture returns have historically scaled inversely with fund size; fees on $20B enrich the GP regardless, which is exactly the LP concern." },
    { q: "By Q3 2025, down rounds had fallen to about:", choices: ["50% of all rounds", "17%: the lowest in nearly 3 years (Carta)", "0%", "40%"], answer: 1, explain: "Repricing from the 2022 reset faded (down rounds ran above 20% for 7 of 8 quarters before), but graduation between rounds stayed brutal outside AI." },
    { q: "The event that created modern institutional VC was:", choices: ["The iPhone launch", "The 1979 ERISA prudent-man reinterpretation, unlocking pension capital", "The 2008 crisis", "SoftBank's Vision Fund"], answer: 1, explain: "A regulatory footnote let pensions allocate to venture; institutional capital built Sand Hill Road within a decade." }
  ],

  sources: [
    { name: "OECD: Venture capital investments in AI through 2025", url: "https://www.oecd.org/en/publications/venture-capital-investments-in-artificial-intelligence-through-2025_a13752f5-en/full-report.html", feeds: "deployment, AI share" },
    { name: "Carta: State of Private Markets (quarterly)", url: "https://carta.com/data/state-of-private-markets-q3-2025/", feeds: "rounds, down rounds, secondaries" },
    { name: "Cambridge Associates: US PE/VC Benchmark Commentary", url: "https://www.cambridgeassociates.com/insight/us-pe-vc-benchmark-commentary-first-half-2025/", feeds: "returns, power law, benchmarks" },
    { name: "CNBC: The rise of VC megafunds (Jul 2026)", url: "https://www.cnbc.com/2026/07/14/how-to-invest-in-venture-capital-with-the-rise-of-megafunds.html", feeds: "megafund concentration" }
  ]
};
