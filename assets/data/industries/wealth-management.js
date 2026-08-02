/* Industry Atlas - WEALTH MANAGEMENT (full module, research-backed)
 * Anchors: global personal wealth $471T across 56 markets, 60M millionaires
 * holding $226T (48.1% of the total) (UBS Global Wealth Report 2025, June 2025;
 * the 2026 edition adds +10.8% wealth growth in 2025); the great wealth transfer:
 * $124T changing hands through 2048, $105T to heirs, $46T to millennials, and
 * $62T of it from the 2% of households that are HNW/UHNW (Cerulli, Dec 2024);
 * Morgan Stanley FY2025: record 29.3% wealth pre-tax margin, $7.4T WM client
 * assets, $9.3T combined with IM, road to $10T (company 8-K/earnings, Jan 2026);
 * RIA M&A record 2025: DeVoe counted 273 deals by late October (beating 2024's
 * full-year 272), PE-backed consolidators at 53% of deals, Echelon full-year
 * tally 466 (+27.3%), nearly $800B of AUM changing hands (DeVoe, Echelon,
 * InvestmentNews/AdvisorHub, 2025-2026); advisor demographics: 109,093 advisors
 * (37.5% of headcount, 41.5% of assets) plan to retire within a decade (Cerulli),
 * McKinsey projects a 90,000-110,000 advisor shortage by 2034, rookie failure
 * rate ~72%; family offices: 8,030 worldwide with $3.1T AUM (2024), heading to
 * 10,720 and $5.4T by 2030 (Deloitte Family Office Insights, 2024). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["wealth-management"] = {
  meta: {
    id: "wealth-management", name: "Wealth Management", sector: "finance", status: "full",
    tagline: "A basis-point toll on $471T of private wealth, collected through the stickiest relationship in finance: and $124T of it is about to change hands.",
    marketSize: { value: 471, unit: "$T", asOf: 2024, note: "global personal wealth stock, 56 markets (UBS GWR 2025); the industry's annual advice-fee pool is a few hundred $B: mapValue reflects a rough ~$500B revenue estimate", mapValue: 500 },
    cagr: { value: 5, range: [4, 7], horizon: "2024-2030" },
    maturity: "mature-growing", cyclicality: 3, capitalIntensity: 1, regulation: 4, disruption: 3
  },
  newsQuery: '("wealth management" OR "financial advisor" OR "private bank" OR "registered investment adviser" OR RIA OR "family office")',

  overview: {
    definition: "Wealth management is the business of advising, investing, and banking the world's private fortunes: from mass-affluent 401(k) rollovers to family offices running billions. The product is a relationship; the pricing is a percentage of assets; the economics are an annuity that compounds with markets.",
    howItWorks: [
      "The revenue model is elegantly simple: charge roughly 1% (retail) down to 30-60 bps (UHNW) on client assets, every year, forever. Because the fee is a percentage of a stock (assets) rather than a flow (transactions), revenue is recurring, compounds with markets, and survives recessions far better than transactional finance. UBS counts $471T of global personal wealth as of 2024, with 60M millionaires holding $226T of it: 48.1% of the world's wealth sits with 1.6% of its adults, which is why every model in the industry segments ruthlessly by wealth tier.",
      "The industry is really 4 businesses wearing one name. Wirehouses and universal banks (Morgan Stanley, Merrill, UBS) bundle advice with lending, deposits, and capital-markets access: Morgan Stanley's wealth unit printed a record 29.3% pre-tax margin in 2025 on $7.4T of client assets. Independent RIAs sell fiduciary advice unbundled from product, custodying assets at Schwab or Fidelity. Independent broker-dealers (LPL class) rent compliance and platform to affiliated advisors. Private banks and family offices serve the top: Deloitte counts 8,030 family offices managing $3.1T, heading to 10,720 and $5.4T by 2030.",
      "The value chain quietly inverted over 20 years. Product (mutual funds, ETFs) was commoditized to near-zero fees; the advice layer kept its ~1%: the advisor, not the fund manager, now owns the client and captures the economics. That is why asset managers pay for distribution, why custodians give custody away nearly free to harvest cash sweep and lending, and why private equity is paying double-digit EBITDA multiples to roll up RIAs: 2025 set an all-time M&A record with 273 deals counted by DeVoe through late October (Echelon's broader tally: 466, +27.3%), with PE-backed consolidators at 53% of deal flow and nearly $800B of AUM changing hands.",
      "Two demographic clocks dominate every strategic plan. First, the great wealth transfer: Cerulli projects $124T moving through 2048 ($105T to heirs, $46T to millennials), and most heirs historically fire their parents' advisor: the transfer is simultaneously the industry's largest growth pool and its largest attrition event. Second, the advisor cliff: 109,093 advisors (37.5% of headcount, controlling 41.5% of assets) plan to retire within a decade, and McKinsey projects a 90,000-110,000 advisor shortage by 2034. Scarce advisors plus abundant assets equals rising advisor economics: the talent, like the client, is the asset."
    ],
    history: [
      { era: "1900s-1974", title: "Stockbrokers and trust banks", text: "Wealth advice lives inside commissions and trust departments; fixed commissions make brokerage a cartel." },
      { era: "1975-1999", title: "May Day and the fee revolution", text: "The SEC deregulates commissions (1975); discounters (Schwab) are born; fee-based accounts and the first RIAs decouple advice from product." },
      { era: "2000-2008", title: "Product cracks, advice holds", text: "The dot-com bust vaporizes trust in stock-picking; index funds and open architecture win; wirehouses pivot from selling funds to selling planning." },
      { era: "2008-2019", title: "The independence wave", text: "The GFC shatters bank brands; breakaway brokers flood into RIAs; robo-advisors force fees down on product but prove humans keep the relationship; zero commissions (2019) end the transactional era." },
      { era: "2020-present", title: "Consolidation and the transfer", text: "PE discovers recurring fee streams: RIA M&A sets records 5 years running (466 deals in 2025 per Echelon); wirehouses re-rate as wealth compounds (Morgan Stanley at 29.3% margins); the $124T handoff begins." }
    ],
    trends: [
      { title: "PE roll-up supercycle", direction: "up", text: "Consolidators took 53% of 2025 RIA deals (DeVoe): cheap-again debt, fragmented supply (15,000+ RIAs), and recurring revenue make wealth the LBO template of financial services." },
      { title: "Fee compression climbs the stack", direction: "shift", text: "Product fees went to zero; advice fees held near 1%: the open question is whether AI-assisted planning and flat-fee models finally compress the advice layer itself." },
      { title: "The advisor shortage", direction: "down", text: "37.5% of advisors retiring within a decade against a projected 100,000-advisor shortfall by 2034: recruiting packages, sunset programs, and productivity tech are bid up accordingly." },
      { title: "Wealth transfer positioning", direction: "up", text: "$124T through 2048, $62T of it from the wealthiest 2% of households: every platform is racing to bind spouses and heirs before the estate settles." },
      { title: "Family office boom", direction: "up", text: "8,030 offices and $3.1T today, 10,720 and $5.4T by 2030 (Deloitte): the UHNW increasingly insource, disintermediating private banks at the very top." }
    ],
    outlook: "Structurally advantaged and demographically supercharged: wealth grows faster than GDP, the fee attaches to the stock, and the transfer plus the advisor cliff reward scale platforms that can recruit, retain, and inherit. The bear case is not demand: it is margin, if AI and fee transparency finally do to advice what indexing did to product, and leverage, if the PE roll-ups discover their EBITDA was partly beta. Watch organic growth ex-markets: it is the only honest number in the industry."
  },

  structure: {
    suppliers: [
      { name: "Asset managers (BlackRock, Vanguard, alts platforms)", note: "Product manufacturers: commoditized in ETFs, resurgent in alts and models" },
      { name: "Custodians (Schwab, Fidelity, Pershing/BNY)", note: "Hold the assets nearly free; monetize cash sweep, lending, and flow" },
      { name: "Wealthtech (Envestnet, Orion, Addepar, eMoney)", note: "Planning, reporting, and rebalancing rails: the advisor's operating system" },
      { name: "Data & research (Morningstar, Cerulli, DeVoe)", note: "Ratings, benchmarks, and the M&A scoreboard" }
    ],
    producers: [
      { name: "Wirehouses (Morgan Stanley, Merrill, UBS)", note: "Bundled advice + banking at scale; MS: $7.4T client assets, 29.3% margin (2025)" },
      { name: "Private banks (JPMorgan, Goldman, Pictet class)", note: "UHNW advice wrapped around the balance sheet" },
      { name: "RIAs & consolidators (Mercer, Creative Planning, EP Wealth)", note: "Fiduciary independents: the fastest-consolidating shelf in finance" },
      { name: "Independent broker-dealers (LPL, Raymond James)", note: "Platform-as-a-service for affiliated advisors; LPL is the recruiting machine" }
    ],
    distributors: [
      { name: "The advisor", note: "Distribution IS the advisor: books of clients move with the person, which is why recruiting is warfare" },
      { name: "Workplace channels (stock plans, 401(k) rollovers)", note: "Morgan Stanley's E*TRADE/Solium play: meet the client at the paycheck, convert at the liquidity event" }
    ],
    customers: [
      { name: "Mass affluent ($100K-$1M)", note: "Served by models, call centers, and robo-hybrids: margin lives in scale" },
      { name: "HNW ($1M-$30M)", note: "The core P&L: 60M people, $226T (UBS): full-service advice territory" },
      { name: "UHNW & family offices ($30M+)", note: "Bespoke, credit-hungry, fee-pressured: increasingly self-institutionalizing" }
    ],
    regulators: [
      { name: "SEC", note: "RIAs (fiduciary standard) and Reg BI for brokers; Form ADV is the industry's public census" },
      { name: "FINRA & state regulators", note: "Broker-dealer conduct, licensing, and arbitration" },
      { name: "Global supervisors (FINMA, FCA, MAS, HKMA)", note: "Private banking hubs live on license and reputation; secrecy is long dead, service is the moat" }
    ],
    capital: [
      { name: "Private equity sponsors", note: "The consolidation engine: 53% of 2025 RIA deals were PE-backed buyers" },
      { name: "Private credit", note: "Funds the roll-ups' debt stacks against recurring fee EBITDA" },
      { name: "Public markets", note: "Wirehouse re-ratings (MS) and the occasional aggregator IPO window" }
    ]
  },

  valueChain: {
    intro: "From fund factory to family dinner table. The economics concentrate wherever the client relationship lives: product was commoditized, custody gives itself away, and the advice layer kept the fee.",
    stages: [
      { id: "product", name: "Product manufacturing", what: "Funds, ETFs, SMAs, alts, structured notes", players: "BlackRock, Vanguard, alts sponsors", valueCapture: 2,
        economics: { grossMargin: [30, 50], capitalIntensity: 1, concentration: 4 },
        linksTo: ["asset-management", "private-equity", "hedge-funds"],
        deeper: "Index fees went to ~0 and the shelf is open architecture: manufacturers now pay for placement and pin their hopes on alts, models, and direct indexing. The power flowed downstream to whoever owns the client." },
      { id: "custody", name: "Custody & clearing", what: "Holding assets, settling trades, sweeping cash", players: "Schwab, Fidelity, Pershing/BNY", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 3, concentration: 5 },
        linksTo: ["banking", "market-infrastructure"],
        deeper: "Custody is free the way a casino hotel room is free: the house earns net interest on swept cash, securities lending, and payment for order flow. A 3-player oligopoly custodies most independent RIA assets: quiet, enormous scale economics." },
      { id: "platform", name: "Platform & wealthtech", what: "Planning software, TAMPs, reporting, compliance rails", players: "Envestnet, Orion, Addepar, LPL (as platform)", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 2, concentration: 3 },
        linksTo: ["fintech", "saas"],
        deeper: "The advisor's operating system, priced in bps or seats. Sticky (repapering is misery) but squeezed between custodians integrating upward and consolidators internalizing tech at scale." },
      { id: "advice", name: "The advice layer", what: "Financial planning, portfolio oversight, the relationship", players: "Wirehouses, RIAs, private banks: 270,000+ US advisors", valueCapture: 5,
        economics: { grossMargin: [55, 70], capitalIntensity: 1, concentration: 2 },
        linksTo: ["investment-banking", "capital-markets"],
        deeper: "The crown: ~1% on assets for a relationship clients keep for decades and move only under duress. Fragmentation is the paradox: the most valuable layer has the least concentration, which is exactly why PE is rolling it up at record pace (466 deals in 2025)." },
      { id: "banking", name: "Lending & banking", what: "Securities-based loans, mortgages, deposits for the wealthy", players: "Wirehouse banks, JPMorgan, UBS", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 3, concentration: 4 },
        linksTo: ["banking", "private-credit"],
        deeper: "The bundled model's profit turbo: lend against the portfolio you manage, fund it with the sweep deposits you gathered. Spread income is why bank-owned wealth margins (MS at 29.3%) embarrass advice-only P&Ls: and why rates matter to this fee business more than it admits." },
      { id: "estate", name: "Trust, estate & insurance", what: "Estate planning, trusts, tax, life insurance wrappers", players: "Trust banks, private banks, insurers", valueCapture: 3,
        economics: { grossMargin: [30, 50], capitalIntensity: 1, concentration: 3 },
        linksTo: ["insurance", "real-estate"],
        deeper: "Where the $124T transfer actually executes: trusts, PPLI, and estate work bind the next generation before the estate settles. Low-glamour, high-retention: the firms that own the estate plan tend to keep the heirs." }
    ]
  },

  financials: {
    businessModel: [
      "The core equation: revenue = client assets x fee rate, so earnings decompose into 3 drivers: markets (beta), net new assets (organic growth), and fee/mix (pricing plus lending and cash attach). Beta dominates any single year: a 20% drawdown is a 20% revenue cut with a lag: but flows compound across decades, which is why the only diagnostic that matters is organic growth ex-markets. Bank-attached models add a 4th driver, net interest income on sweeps and securities-based lending, which is what lifts a Morgan Stanley to a 29.3% pre-tax margin while advice-only shops run in the teens and twenties.",
      "Cost structure is the advisor: wirehouses pay out roughly 40-50% of the revenue an advisor generates; RIAs pay salaries plus equity. Operating leverage is real but capped by that payout grid: scale shows up instead in technology, compliance, and the home office spread over more assets. The consolidator model arbitrages exactly this: buy a $2M-EBITDA RIA at 8-10x, centralize ops, cross-sell tax and estate, and re-rate the aggregate at a mid-teens platform multiple: it works beautifully until markets fall and the debt (private-credit funded, floating) does not."
    ],
    fingerprint: { grossMargin: 60, recurringRevenue: 85, capitalIntensity: 15, pricingPower: 65, cyclicality: 45, operatingLeverage: 55 },
    lines: [
      { label: "Asset-based fees", note: "The annuity: ~1% retail, 30-60 bps UHNW, billed quarterly on balances" },
      { label: "Net interest income", note: "Cash sweep + securities-based lending: the bundled model's margin turbo" },
      { label: "Transactional & product", note: "Commissions, structured notes, insurance: the shrinking legacy tail" },
      { label: "Planning & family office fees", note: "Flat and hourly fees for tax, estate, bill-pay: growing at the top" },
      { label: "Net new assets", note: "Not a revenue line but THE metric: organic growth is the only non-beta signal" }
    ],
    unitEconomics: {
      unit: "per $1M advisory relationship (illustrative)",
      items: [
        { label: "Annual fee at ~100 bps", value: "~$10,000", note: "blended retail rate; falls to 30-60 bps above $10M" },
        { label: "Advisor payout / comp", value: "~$4,000-5,000", note: "the grid: 40-50% of revenue follows the advisor" },
        { label: "Platform, custody, ops", value: "~$1,500-2,500", note: "custody itself near-free; tech and compliance are the real load" },
        { label: "Pre-tax profit", value: "~$2,500-3,500", note: "25-35% margins at scale: recurring, and it compounds with markets" }
      ]
    }
  },

  kpiRefs: ["am-netflows", "am-feerate"],
  kpiLocal: [
    {
      id: "wm-organic-growth", name: "Organic Growth (NNA Rate)", industries: ["wealth-management"],
      definition: "Net new client assets as a % of beginning-of-period assets, annualized: growth with the market's contribution stripped out.",
      formula: "Organic growth = net new assets / beginning client assets (annualized)",
      interpretation: "Markets flatter every wealth P&L; organic growth is the honest number. Morgan Stanley's road to $10T runs through NNA prints, not bull markets.",
      healthy: "5%+ organic; best consolidators 7%+", warning: "Sub-2%: the growth story is just beta"
    },
    {
      id: "wm-advisor-productivity", name: "Revenue per Advisor", industries: ["wealth-management"],
      definition: "Annualized revenue divided by advisor headcount: the scarcity metric in a shrinking profession.",
      formula: "Revenue per advisor = segment revenue / average advisor count",
      interpretation: "With 37.5% of advisors retiring within a decade (Cerulli), productivity growth must cover the headcount gap: it is the industry's labor thesis in one ratio.",
      healthy: "Rising productivity with stable attrition", warning: "Recruiting-package inflation outrunning revenue per advisor"
    }
  ],

  health: {
    intro: "Strip out the market and 4 questions remain: is money arriving organically, will the fee hold, who inherits the clients, and who inherits the advisors.",
    pillars: [
      { name: "Organic growth", weight: 25, metrics: "NNA rate, share of flows, recruiting net wins", healthy: "5%+ NNA through flat markets", warning: "Flows negative ex-recruiting; growth = beta" },
      { name: "Fee durability & mix", weight: 20, metrics: "Realized bps, fee-based share, lending/cash attach", healthy: "Stable bps with rising fee-based mix", warning: "Discounting spreading upmarket; NII masking fee erosion" },
      { name: "Advisor bench & succession", weight: 20, metrics: "Advisor age, retention, next-gen equity paths", healthy: "Succession plans funded and signed", warning: "Book concentration in advisors near retirement (industry: 41.5% of assets)" },
      { name: "Client demographics & transfer readiness", weight: 20, metrics: "Client age mix, heir/spouse relationships, estate services attach", healthy: "Heirs engaged before the estate settles", warning: "Aged book, no next-gen contact: the $124T flows out, not through" },
      { name: "Balance sheet & leverage", weight: 15, metrics: "Debt/EBITDA (consolidators), sweep sensitivity, regulatory capital", healthy: "Leverage sized to a 20% drawdown", warning: "Floating-rate LBO debt against beta-inflated EBITDA" }
    ],
    scoringNote: "Wealth franchises rarely die loudly; they leak: advisor by advisor, estate by estate. Health here is measured in retention half-lives, not quarters."
  },

  valuation: {
    intro: "Public wirehouses price like high-ROE banks with an annuity premium; private RIAs price like recurring-revenue LBOs. The whole complex re-rated as investors learned that wealth fees survive what trading revenues do not.",
    methods: [
      { name: "EV / EBITDA (RIA and consolidator)", use: "Private RIA deals and aggregator marks: the M&A lingua franca", avoid: "Applying platform multiples to sub-$1B-AUM books", strengths: "Matches how 466 deals a year actually clear", weaknesses: "EBITDA is beta-inflated at cycle tops; add-backs get creative", range: { low: 8, high: 18, asOf: 2025, note: "typical sellers high-single to low-double digits; mega-platforms command the top (DeVoe/Echelon)" } },
      { name: "P/E on wealth-weighted earnings", use: "Wirehouses and universal banks (Morgan Stanley class)", avoid: "Lumping wealth P/Es with trading-heavy peers", strengths: "Captures the re-rating as fee mix rises", weaknesses: "Bank capital rules and NII blur the pure-fee story", range: { low: 12, high: 18, asOf: 2025, note: "MS re-rated toward the top as wealth hit 29.3% margins" } },
      { name: "% of AUM heuristic", use: "Quick sanity check on advisory books and tuck-ins", avoid: "Using it as the primary method: fee rates vary 3x by segment", strengths: "Fast, universal shorthand", weaknesses: "Ignores margin, growth, and client age entirely", range: { low: 1, high: 3, asOf: 2025, note: "% of AUM; 2%+ only for high-fee, young-client books" } },
      { name: "DCF on the fee annuity", use: "Testing what growth and attrition the multiple implies", avoid: "Terminal values that assume zero fee compression forever", strengths: "Forces the transfer-attrition debate into numbers", weaknesses: "Client-longevity and heir-retention inputs are soft", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: run it to interrogate the EBITDA multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a wealth platform fast: recurring EBITDA times a scale-and-growth-adjusted multiple, minus net debt (watch the consolidators' stacks).",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($M)", min: 5, max: 1000, step: 5, value: 100, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 20, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($M)", min: -200, max: 5000, step: 25, value: 400, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats wealth management as the highest-quality recurring revenue in financials: long the scaled platforms compounding organic growth (the Morgan Stanley template), long the recruiting machines gaining advisor share, and skeptical of leverage stacked on beta-inflated EBITDA late in a bull market. The demographic trades (transfer, advisor cliff) are decade trades: position for retention winners, not headlines.",
    debates: [
      { topic: "Does fee compression finally reach the advice layer?", bull: "Product fees went to zero and advice held ~1% for 20 years because trust does not commoditize: clients pay for a person in the room when markets fall, and AI makes that person more productive, not redundant: margins expand.", bear: "Every 'this layer is different' claim in asset gathering has eventually failed: AI planning, flat-fee models, and fee transparency give the next generation, which already distrusts %-of-AUM math, the tools to defect: 100 bps becomes 50 and the roll-up math collapses." },
      { topic: "The $124T transfer: growth engine or attrition event?", bull: "$105T to heirs means decades of forced money-in-motion, and scaled platforms with estate services, banking, and next-gen apps capture outsized share: the biggest organic-growth tailwind finance has ever seen.", bear: "Most heirs fire their parents' advisor, heirs consolidate accounts, millennials index by default at lower fees: for the average incumbent the transfer is a slow-motion run on the book that today's multiples entirely ignore." },
      { topic: "PE roll-ups: durable platforms or leverage on a bull market?", bull: "Recurring fees, 90%+ client retention, fragmented supply, and real scale synergies: the consolidators are building permanent, Berkshire-grade cash machines, and 53% PE share of a record 2025 proves the model's depth.", bear: "Floating-rate debt against EBITDA that is 60% market beta, integration debt behind the deal count, and exit multiples that require a greater fool: a 30% drawdown turns the aggregator template into financial services' next workout wave." }
    ],
    cycle: {
      where: "Late-cycle exuberance in private markets (record 2025 M&A, PE at 53% of deals) against early-cycle demographics: the transfer and the advisor shortage are just beginning. Public platforms are printing record margins (MS 29.3%) with beta's help: the honest signal is organic growth, which remains healthy at the scaled winners.",
      drivers: "Equity and bond market levels (fee base), rates (sweep NII and roll-up debt costs), household savings flows, advisor movement, and the estate-settlement calendar.",
      leads: [
        "Quarterly net new asset prints (Morgan Stanley, Schwab, LPL: free in earnings releases)",
        "DeVoe and Echelon quarterly RIA M&A reports (free summaries)",
        "Fed Z.1 household net worth release (quarterly, free: the fee base's tape)",
        "SEC Form ADV filings (free: RIA AUM and headcount, primary source)",
        "Advisor-movement trackers and recruiting-deal inflation (trade press, free)"
      ]
    },
    exposure: [
      { vehicle: "Morgan Stanley", note: "The bundled-model champion: $7.4T client assets, 29.3% margin, road to $10T" },
      { vehicle: "Charles Schwab", note: "Custody oligopoly + sweep economics: the RIA ecosystem's landlord" },
      { vehicle: "LPL Financial", note: "The advisor-recruiting machine: pure-play beneficiary of independence and the shortage" },
      { vehicle: "UBS", note: "The global private-banking scale play, Swiss-anchored, Asia-levered" },
      { vehicle: "Consolidator credit / PE secondaries", note: "The indirect route into private RIA economics: senior in the structure, mind the beta" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "NNA prints, fee rates, sweep balances: the organic-growth scoreboard" },
      { when: "Quarterly (DeVoe/Echelon reports)", what: "RIA deal counts and multiples: the private-market temperature" },
      { when: "June (UBS Global Wealth Report)", what: "The annual re-basing of the wealth stock and millionaire counts" },
      { when: "Fed decisions", what: "Sweep NII, securities-based lending demand, and consolidator debt costs all reprice" }
    ],
    data: [
      { series: "Net new assets by platform", source: "company earnings releases / SEC EDGAR (free)", why: "The only non-beta growth signal" },
      { series: "Household net worth (Z.1)", source: "federalreserve.gov (free, quarterly)", why: "The fee base itself, measured" },
      { series: "RIA census: AUM, headcount", source: "SEC Form ADV / IAPD (free)", why: "Primary-source map of the independent channel" },
      { series: "RIA M&A deal counts", source: "DeVoe & Echelon summaries (free)", why: "Consolidation pace and multiple trend" },
      { series: "Global wealth stock & millionaire counts", source: "UBS Global Wealth Report (free, annual)", why: "The denominator: $471T and compounding" }
    ],
    playbook: [
      { regime: "Bear market / drawdown", behavior: "Fees fall with a lag but relationships hold; organic growth persists at quality platforms. The casualties are levered consolidators: their EBITDA deflates against fixed debt. Buy the platforms, avoid the stacks." },
      { regime: "Rates rising", behavior: "Sweep NII expands (bundled models win) but cash sorting drains balances and roll-up debt bites; recruiting slows as financing tightens. Favor bank-attached over levered independents." },
      { regime: "Rates falling", behavior: "M&A reignites (2025's record followed easing), NII compresses, markets lift the fee base: consolidator exit windows open. The beta flatters everyone; underwrite organic growth only." },
      { regime: "Melt-up", behavior: "Every wealth P&L looks brilliant; multiples on beta-inflated EBITDA peak. Rotate toward the demographically advantaged (heir retention, advisor pipelines) and lighten whatever needs the market to stay up." }
    ]
  },

  players: [
    { name: "Morgan Stanley", role: "Wirehouse + workplace flywheel", country: "US", real: true, note: "$7.4T WM client assets, record 29.3% pre-tax margin (2025), $10T ambition" },
    { name: "UBS", role: "Global private-banking leader", country: "CH", real: true, note: "The world's largest wealth manager by invested assets after absorbing Credit Suisse" },
    { name: "Merrill (Bank of America)", role: "Wirehouse inside a universal bank", country: "US", real: true, note: "The original thundering herd, now a deposit-and-advice bundle" },
    { name: "JPMorgan Private Bank", role: "UHNW private bank", country: "US", real: true, note: "Balance-sheet-powered advice at the top of the pyramid" },
    { name: "Charles Schwab", role: "Custodian + direct wealth", country: "US", real: true, note: "Custody oligopolist for independent RIAs; monetizes the sweep, not the seat" },
    { name: "Fidelity", role: "Custodian, direct, and workplace giant", country: "US", real: true, note: "Private ownership funds patient share-taking across every channel" },
    { name: "LPL Financial", role: "Independent broker-dealer platform", country: "US", real: true, note: "The advisor-recruiting machine: pure-play on the independence migration" },
    { name: "Mercer Advisors / Creative Planning", role: "PE-backed RIA consolidators", country: "US", real: true, note: "The roll-up archetypes in a record 466-deal 2025 (Echelon)" }
  ],

  geography: [
    { country: "US", role: "The core market", note: "Largest wealth pool and millionaire count (UBS GWR); home of the RIA model and the consolidation wave" },
    { country: "CH", role: "Offshore private-banking capital", note: "UBS, Pictet, Julius Baer: cross-border wealth's trust jurisdiction" },
    { country: "GB", role: "European hub", note: "London private banking and the platform/consolidator scene (St. James's Place class)" },
    { country: "SG", role: "Asia's offshore magnet", note: "MAS-licensed hub pulling regional and Chinese wealth; family-office incentives" },
    { country: "HK", role: "Greater China gateway", note: "The onshore-offshore hinge for the world's second-largest wealth pool" },
    { country: "AE", role: "The new offshore riser", note: "Dubai's zero-tax pitch is pulling family offices and private banks eastward" }
  ],

  cycles: [
    { year: 1975, title: "May Day deregulation", kind: "shift", text: "The SEC ends fixed commissions; discount brokerage is born and the transactional cartel starts its 40-year melt. Lesson: regulation redraws the profit pool overnight: the fee always finds a new home." },
    { year: 2000, title: "Dot-com bust", kind: "bust", text: "Stock-picking brokers lose client trust with 80% drawdowns in tech books; fee-based advice and open architecture win the aftermath. Lesson: busts do not kill the industry, they rotate its business model." },
    { year: 2008, title: "The GFC and the breakaway wave", kind: "bust", text: "Bank brands shatter (Merrill sold in a weekend); advisors discover clients follow the person, not the logo: the RIA channel's golden age begins. Lesson: in wealth, the relationship is the asset, and it is portable." },
    { year: 2019, title: "Zero commissions", kind: "shift", text: "Schwab cuts online commissions to $0 and the industry follows within days; custody economics shift fully to sweep and lending. Lesson: when a revenue line hits zero, the survivors are those already paid another way." },
    { year: 2025, title: "The consolidation record", kind: "boom", text: "RIA M&A breaks every record (466 deals per Echelon, PE at 53%), with nearly $800B of AUM changing hands as rates ease. Lesson: recurring fees plus fragmentation is an irresistible LBO recipe: until the beta in the EBITDA gets marked." }
  ],

  risks: [
    { name: "Market drawdown hits the fee base", severity: 4, likelihood: 4, transmission: "Equities fall 25% -> asset-based fees follow with a lag -> levered consolidators breach covenants while wirehouses just print thinner margins." },
    { name: "Wealth-transfer attrition", severity: 4, likelihood: 3, transmission: "Estates settle -> heirs consolidate and fire incumbent advisors -> books built over 30 years leak out in 3 -> multiples paid on aged books prove too high." },
    { name: "Advisor shortage and talent inflation", severity: 3, likelihood: 4, transmission: "109,000 retirements meet a thin pipeline -> recruiting packages and payouts inflate -> margins compress exactly as service demand from the transfer peaks." },
    { name: "Fee compression reaches advice", severity: 4, likelihood: 2, transmission: "AI planning + fee transparency + heir skepticism -> 100 bps drifts toward 50 -> every valuation built on durable fee rates re-prices downward." },
    { name: "Consolidator leverage unwind", severity: 3, likelihood: 3, transmission: "Drawdown deflates EBITDA -> floating-rate debt stresses PE-backed platforms -> fire-sale supply of advisory books -> private marks and exit multiples reset across the channel." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Wealth managers help people invest and plan, and charge a small % of the money they oversee, usually around 1% a year. Because the fee repeats every year and clients rarely leave, it is one of the steadiest businesses in finance. The world has $471T of private wealth (UBS), and about $124T of it will pass from older generations to heirs over the next 2 decades: whoever keeps those families as clients wins."] },
    L2: { title: "Intermediate", text: ["The industry splits into wirehouses (Morgan Stanley, Merrill: advice bundled with banking), independent RIAs (fiduciary advice, assets custodied at Schwab or Fidelity), and private banks for the ultra-rich. Product fees collapsed to near zero; the advice layer kept its ~1%, so the advisor owns the economics. Watch 2 numbers: net new assets (growth without the market's help) and pre-tax margin (Morgan Stanley set a record 29.3% in 2025)."] },
    L3: { title: "Advanced", text: ["Decompose any wealth P&L into beta (market moves), organic growth (NNA rate), fee/mix, and, for bank-attached models, net interest on sweeps and lending. Private equity is consolidating the fragmented RIA layer at record pace (466 deals in 2025, PE-backed buyers at 53%): the trade buys recurring EBITDA at 8-10x and re-rates it at platform multiples, financed with floating-rate debt whose collateral is partly market beta. The demographic overlays: 37.5% of advisors retiring within a decade, $124T of client assets in motion through 2048."] },
    L4: { title: "Expert", text: ["Trade the NNA tape and the M&A multiple cycle: DeVoe/Echelon deal counts lead private marks, Fed Z.1 re-bases the fee pool, and rate turns swing both sweep NII and consolidator debt math. Live debates: whether AI finally compresses the advice fee the way indexing compressed product, whether the transfer is net growth or net attrition for incumbents, and whether roll-up EBITDA survives a real drawdown. The scarce resources are advisors (100,000-short by 2034 per McKinsey) and heir relationships: underwrite retention, not AUM."] },
    L5: { title: "Institutional", text: ["Allocator's frame: wealth management is the highest-quality fee annuity in financials, but the cycle has stacked leverage on top of beta, so discriminate ruthlessly between platforms that compound organically and structures that need markets to rise. Core the scaled bundled models and custody oligopolists, treat consolidator equity as late-cycle optionality and its credit as the safer expression, and make the 2 demographic clocks (the $124T transfer, the advisor cliff) the underwriting spine of every position. The terminal question is fee durability: if trust stays human, the annuity endures; if advice commoditizes, the whole capital structure above 50 bps is mispriced."] }
  },

  quiz: [
    { q: "The core wealth management revenue model is:", choices: ["Commissions per trade", "A recurring % of client assets, roughly 1% retail and 30-60 bps for the ultra-wealthy", "Flat monthly subscriptions", "Performance fees only"], answer: 1, explain: "The fee attaches to the asset stock and repeats annually: recurring, market-compounding, and the reason PE loves the space." },
    { q: "Per UBS's Global Wealth Report, global personal wealth stands at about:", choices: ["$47T", "$471T, with 60M millionaires holding 48.1% of it", "$4.7T", "$1,000T"], answer: 1, explain: "UBS counted $471T across 56 markets as of 2024: the industry's denominator, and it grew 10.8% in 2025." },
    { q: "Cerulli's great wealth transfer projection through 2048 is:", choices: ["$12T", "$50T", "$124T, with $105T to heirs and $46T to millennials", "$500T"], answer: 2, explain: "$124T changes hands through 2048, over half of it from the wealthiest 2% of households: growth pool and attrition event at once." },
    { q: "Morgan Stanley's wealth unit in 2025 delivered:", choices: ["A record 29.3% pre-tax margin on $7.4T of client assets", "Losses on declining assets", "5% margins", "Flat assets of $1T"], answer: 0, explain: "The bundled model (fees + sweep NII + lending) at scale: the public-market proof that wealth deserves an annuity multiple." },
    { q: "2025's RIA M&A market was notable because:", choices: ["Deals stopped", "It set an all-time record (466 deals per Echelon) with PE-backed consolidators at 53% of activity", "Only banks bought RIAs", "Multiples fell to 2x"], answer: 1, explain: "DeVoe's count broke 2024's record by late October; nearly $800B of AUM changed hands as easing rates re-armed the consolidators." },
    { q: "The advisor demographic problem: within a decade, retiring advisors represent about:", choices: ["5% of headcount", "37.5% of headcount and 41.5% of client assets, per Cerulli", "90% of headcount", "No meaningful share"], answer: 1, explain: "109,093 planned retirements against a ~72% rookie failure rate: McKinsey projects a 90,000-110,000 advisor shortage by 2034." },
    { q: "Product fees collapsed while advice fees held because:", choices: ["Regulators fixed advice prices", "The advisor owns the client relationship: trust has not commoditized the way fund manufacturing did", "Funds became illegal", "Advice is capital-intensive"], answer: 1, explain: "The value chain inverted: manufacturers now pay for shelf space while the advice layer keeps ~1%: the open question is whether AI changes that." },
    { q: "Family offices are:", choices: ["Disappearing", "Growing fast: 8,030 offices with $3.1T in 2024, heading to 10,720 and $5.4T by 2030 per Deloitte", "Only a European phenomenon", "Capped by regulation at 1,000"], answer: 1, explain: "The UHNW increasingly insource their wealth management: a boom for staff and services, a disintermediation threat to private banks." }
  ],

  sources: [
    { name: "UBS Global Wealth Report 2025 (global wealth $471T; 2026 edition: +10.8%)", url: "https://www.ubs.com/global/en/media/display-page-ndp/en-20250618-gwr-2025.html", feeds: "wealth stock, millionaire counts" },
    { name: "Cerulli: $124T wealth transfer through 2048 (Dec 2024)", url: "https://www.cerulli.com/press-releases/cerulli-anticipates-124-trillion-in-wealth-will-transfer-through-2048", feeds: "wealth transfer, advisor demographics" },
    { name: "DeVoe / InvestmentNews & Echelon: record 2025 RIA M&A", url: "https://www.investmentnews.com/ria-news/2025-ria-ma-sets-new-yearly-record-with-more-deals-on-the-horizon/262781", feeds: "consolidation, deal multiples" },
    { name: "Morgan Stanley earnings (FY2025 8-K: 29.3% WM margin, $7.4T assets)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000895421&type=8-K", feeds: "platform financials" }
  ]
};
