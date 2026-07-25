/* Industry Atlas - OIL & GAS (full module, research-backed)
 * Anchors (IEA Oil 2024/2025, IEF): 2024 demand ~102.9 mb/d heading to a
 * ~105.5 mb/d plateau by 2030; upstream capex ~$570B+; US liquids > 20 mb/d
 * (90% of 2015-24 global supply growth); OPEC+ effective spare ~6 mb/d. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["oil-gas"] = {
  meta: {
    id: "oil-gas", name: "Oil & Gas", sector: "energy", status: "full",
    tagline: "Still the world's biggest cash machine: 103 million barrels a day, priced by geology, cartels, and fear.",
    marketSize: { value: 4, unit: "$T", asOf: 2024, note: "annual global revenue across the chain at ~$80 crude" },
    cagr: { value: 1, range: [0, 3], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 5, regulation: 4, disruption: 3
  },

  overview: {
    definition: "The oil and gas industry finds, extracts, transports, refines, and sells hydrocarbons: the molecules that still supply over half of the world's primary energy, nearly all of its transport fuel, and the feedstock of modern chemistry.",
    howItWorks: [
      "The chain has three classical segments. Upstream finds and produces crude and gas (the exploration bets, the drilling, the geology); midstream moves and stores it (pipelines, tankers, LNG trains); downstream refines crude into usable products (gasoline, diesel, jet, petrochemical feedstock) and markets them. Integrated majors span all three; most of the industry specializes in one.",
      "Economics start at the wellhead: a barrel that costs $35 to produce and sells at $80 is a money machine; the same barrel at $45 crude is a write-off. Nobody controls the price, so the business is cost-curve position, capital discipline, and reserve replacement, forever. Decline is the industry's gravity: existing fields lose roughly 5% to 8% of output yearly, so ~$570B of upstream capex is spent annually just to stand still and grow slightly.",
      "Then there is the cartel. OPEC+ manages roughly 40% of supply and currently holds an extraordinary ~6 mb/d of effective spare capacity, the largest buffer outside COVID. That spare capacity is a policy instrument: it caps rallies, punishes market-share challenges, and makes oil the only major market where a committee meeting in Vienna can reprice the world's inputs overnight.",
      "The 2020s' plot: US shale turned America into the largest producer in history (20+ mb/d of liquids, 90% of the decade's global supply growth) but is maturing, with growth slowing to 0.6 mb/d in 2024 from 1.4 mb/d in 2023. Demand, meanwhile, approaches its long-forecast plateau: the IEA sees ~105.5 mb/d by 2030 as EVs, efficiency, and China's slowdown bite. The industry's response has been ruthless discipline: return cash, consolidate (a $250B+ M&A wave), and let someone else drill for growth.",
      "Gas runs on a parallel track with a different story: LNG turned a regional fuel into a global market, Europe's 2022 crisis re-priced energy security, and gas demand keeps growing as the bridge (or crutch) of the energy transition, with datacenters now adding an unexpected new demand line."
    ],
    history: [
      { era: "1859-1960", title: "Rockefeller to the Seven Sisters", text: "Standard Oil builds and loses the first energy monopoly; the majors carve up global production under concession terms tilted their way." },
      { era: "1960-1979", title: "OPEC takes the wheel", text: "Producer nations nationalize reserves; the 1973 embargo and 1979 Iranian revolution deliver two oil shocks and stagflation. Energy becomes national security." },
      { era: "1980-2000", title: "Glut and consolidation", text: "North Sea and Alaska flood the market; prices collapse in 1986 and stay low; the megamergers (Exxon-Mobil, BP-Amoco, Chevron-Texaco) build today's supermajors." },
      { era: "2001-2014", title: "The China supercycle", text: "Chinese demand takes crude from $20 to $147 (2008); 'peak oil supply' fear reigns; $100+ becomes normal and funds a global capex binge." },
      { era: "2014-2020", title: "Shale breaks the cartel's grip", text: "US fracking adds the fastest supply growth in history; OPEC's 2014 price war fails to kill it; 2020 demand collapse briefly sends WTI to -$37. Capital flees the sector." },
      { era: "2021-present", title: "Discipline, war, and the plateau debate", text: "Underinvestment meets reopening; Russia's invasion of Ukraine reroutes global flows and re-prices energy security. Majors pivot to capital returns and mega-M&A; the IEA calls a demand plateau by 2030 while OPEC and the industry bet on longer." }
    ],
    trends: [
      { title: "Capital discipline over growth", direction: "shift", text: "The shareholder revolt stuck: payouts and buybacks outrank drilling; upstream capex (~$570B) is high but flat-ish and consolidation replaces exploration." },
      { title: "Shale maturity", direction: "down", text: "US growth slowed to 0.6 mb/d (2024) as Tier-1 inventory depletes; the marginal barrel's home is shifting back toward OPEC+ and offshore." },
      { title: "LNG buildout", direction: "up", text: "A record wave of US and Qatari liquefaction capacity lands mid-decade, globalizing gas and testing prices." },
      { title: "The demand plateau debate", direction: "shift", text: "IEA: ~105.5 mb/d plateau by 2030 with a possible major surplus; OPEC sees growth into the 2040s. Trillions of capex hinge on who is right." },
      { title: "Energy security premium", direction: "up", text: "Post-2022, supply diversity beats price optimization; strategic stocks, sanctioned flows, and chokepoints (Hormuz, Red Sea) carry permanent premiums." }
    ],
    outlook: "A cash-rich, low-multiple industry managing its own sunset debate. Base case: demand grinds to a plateau near 105 mb/d, OPEC+ defends $70 to $90, and disciplined producers out-earn the S&P on free cash flow yield while shrinking equity counts. The tails are wide: a surplus scenario (IEA's late-decade view) breaks prices and budgets; a geopolitical supply loss spikes them. The industry's bet is that the last profitable barrel will be pumped by whoever kept costs lowest and discipline longest."
  },

  structure: {
    suppliers: [
      { name: "Oilfield services (SLB, Halliburton, Baker Hughes)", note: "Drilling, fracking, completions: the industry's capex made flesh" },
      { name: "Rig and equipment builders", note: "Offshore rigs, pressure pumping fleets, subsea hardware" },
      { name: "Steel & materials", note: "Casing, pipelines, LNG trains: heavy-industry inputs" },
      { name: "Engineering (EPC) firms", note: "The $10B+ megaproject builders" }
    ],
    producers: [
      { name: "NOCs (Saudi Aramco, ADNOC, CNPC, Petrobras)", note: "National oil companies control ~70% of reserves; states in corporate clothing" },
      { name: "Supermajors (ExxonMobil, Chevron, Shell, TotalEnergies, BP)", note: "Integrated across the chain; the public market's core holdings" },
      { name: "Independents / shale E&Ps", note: "US-centric pure plays; the marginal barrel's former home" },
      { name: "Gas & LNG specialists (Qatar, Cheniere class)", note: "The globalizing gas trade" }
    ],
    distributors: [
      { name: "Midstream & pipelines", note: "Toll-road economics moving molecules; MLP-land in the US" },
      { name: "Tanker fleets & traders (Vitol, Trafigura, Glencore)", note: "2 billion tonnes a year at sea; traders arbitrage every dislocation" },
      { name: "Refiners & fuel retail", note: "Crack spreads and forecourts; the consumer-facing end" }
    ],
    customers: [
      { name: "Transport (~60% of oil demand)", note: "Road, aviation, shipping: the EV battle is fought here" },
      { name: "Petrochemicals", note: "The growth end: plastics and chemistry outlast combustion" },
      { name: "Power & industry (gas)", note: "Baseload, heating, fertilizer feedstock; now AI datacenters" },
      { name: "Governments (strategic reserves)", note: "SPRs as both customer and market instrument" }
    ],
    regulators: [
      { name: "OPEC+ (de facto)", note: "The supply regulator: quotas, cuts, and spare capacity policy" },
      { name: "National regulators & IEA", note: "Licensing, methane rules, strategic stocks coordination" },
      { name: "Sanctions regimes (OFAC, EU)", note: "Russia/Iran/Venezuela flows rerouted by decree; the shadow fleet is the workaround" }
    ],
    capital: [
      { name: "Retained cash flow", note: "The sector self-funds; external equity is rarely welcome anymore" },
      { name: "Bond markets", note: "Investment-grade balance sheets after the 2020 near-death diet" },
      { name: "Sovereign budgets", note: "NOC capex is fiscal policy; petrostate breakevens ($80+ for many budgets) shape OPEC+ decisions" },
      { name: "Private equity / private operators", note: "Quietly bought the assets majors sold; now the exit-less end of the pool" }
    ]
  },

  valueChain: {
    intro: "From seismic survey to gas station, with a cartel meeting in the middle. Margin lives upstream when prices are high, midstream always, and downstream when everyone least expects it.",
    stages: [
      { id: "exploration", name: "Exploration & appraisal", what: "Seismic, wildcat wells, reserve booking", players: "Majors, NOCs, frontier independents", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 4, concentration: 2 },
        linksTo: ["mining"],
        deeper: "The lottery-ticket end: deepwater wells cost $100M+ each with real dry-hole risk. Discipline-era exploration budgets are half their 2014 peak; companies increasingly buy reserves through M&A instead (Exxon-Pioneer, Chevron-Hess), effectively outsourcing exploration to the past." },
      { id: "upstream", name: "Production (upstream)", what: "Drilling, completing, lifting the barrels", players: "Aramco to shale independents", valueCapture: 5,
        economics: { grossMargin: [40, 75], capitalIntensity: 5, concentration: 3 },
        linksTo: ["utilities", "steel"],
        deeper: "Where the money lives: lifting costs run $3 to $5 at Aramco's fields, $35 to $45 all-in for good shale, higher offshore. Decline rates (5% to 8% yearly) make it a treadmill: ~$570B of annual capex mostly replaces what geology takes back. Cost-curve position is destiny." },
      { id: "services", name: "Oilfield services", what: "The rigs, crews, sand, and science of extraction", players: "SLB, Halliburton, Baker Hughes", valueCapture: 3,
        economics: { grossMargin: [15, 25], capitalIntensity: 4, concentration: 4 },
        linksTo: ["manufacturing", "robotics"],
        deeper: "The leveraged play on drilling activity: feast in booms, famine in busts (2015-2020 was a depression). Consolidated into a big-3 plus specialists; the picks-and-shovels expression of any upstream cycle view." },
      { id: "midstream", name: "Midstream & LNG", what: "Pipelines, storage, liquefaction, shipping", players: "Pipeline giants, Cheniere, Qatar Energy", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 5, concentration: 3 },
        linksTo: ["shipping", "utilities"],
        deeper: "Toll-road economics: volume-based, fee-locked, mostly price-agnostic: the sector's bond-like layer. LNG is its growth story: liquefaction turns stranded gas into a global commodity, and the mid-2020s capacity wave (US Gulf, Qatar) will test the market's depth." },
      { id: "refining", name: "Refining", what: "Crude into gasoline, diesel, jet, feedstock", players: "Integrated majors, independents, Asian mega-refiners", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 4, concentration: 3 },
        linksTo: ["chemicals", "aviation", "logistics"],
        deeper: "Margin = crack spread (product price minus crude), violently cyclical and regionally fragmented. The West closes refineries while Asia and the Middle East build them; occasional golden ages (2022) reward whoever stayed." },
      { id: "marketing", name: "Trading & marketing", what: "Moving, hedging, arbitraging every molecule", players: "Vitol, Trafigura, majors' trading desks", valueCapture: 3,
        economics: { grossMargin: [0, 3], capitalIntensity: 2, concentration: 3 },
        linksTo: ["capital-markets", "banking"],
        deeper: "Pennies per barrel on colossal volumes, with option value on chaos: dislocations (2020 contango, 2022 rerouting) hand traders their best years. The majors' in-house desks are quietly among their most profitable units." }
    ]
  },

  financials: {
    businessModel: [
      "Read an oil company in this order: cost curve position (breakeven), reserve life and replacement, balance sheet, then the payout framework. Revenue = production × price; nobody controls the second term, so quality means surviving the trough and gushing in the peak. At $80 Brent, a $40-breakeven producer prints ~50% margins; at $55 the same company merely survives while the fourth quartile bleeds.",
      "The discipline-era P&L is a cash-return machine: majors now frame guidance around free cash flow at conservative price decks ($60 to $65), with buybacks flexing on the upside. Reserve replacement below 100% is a silent liquidation; the M&A wave (Exxon-Pioneer $60B, Chevron-Hess $53B) is the industry buying inventory instead of exploring for it.",
      "Fiscal terms are the hidden P&L line: government take (royalties, production sharing, windfall taxes) runs 40% to 90% of the economic rent depending on jurisdiction. A barrel's profitability is as much a political outcome as a geological one."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 15, capitalIntensity: 90, pricingPower: 20, cyclicality: 95, operatingLeverage: 80 },
    lines: [
      { label: "Realized price vs benchmark", note: "Brent/WTI/Henry Hub less differentials; the term nobody controls" },
      { label: "Production (boe/d)", note: "The volume engine; watch decline vs guidance" },
      { label: "Lifting + all-in costs", note: "Cost-curve position: $3 (Aramco) to $45+ (marginal shale)" },
      { label: "Capex", note: "~$570B industry-wide; the discipline test every quarter" },
      { label: "Reserve replacement", note: "Below 100% = slow liquidation; M&A now does the replacing" },
      { label: "Government take", note: "Royalties, PSCs, windfall taxes: 40% to 90% of rent" },
      { label: "Shareholder returns", note: "The era's scoreboard: dividends + buybacks vs price deck" }
    ],
    unitEconomics: {
      unit: "per barrel (illustrative, $80 Brent)",
      items: [
        { label: "Revenue", value: "$80", note: "benchmark less quality/location differentials" },
        { label: "Lifting + opex", value: "$10 to $20", note: "existing wells; geology's gift or curse" },
        { label: "Full-cycle costs (F&D, capex)", value: "$25 to $45", note: "the honest breakeven including finding the barrel" },
        { label: "Government take", value: "$15 to $40", note: "royalties and taxes on the margin" },
        { label: "Free cash flow", value: "$15 to $30", note: "first-quartile producers; the payout fuel" }
      ]
    }
  },

  kpiRefs: ["energy-breakeven", "energy-reserve-life", "mining-aisc", "energy-capacity-factor"],
  kpiLocal: [
    {
      id: "og-rrr", name: "Reserve Replacement Ratio", industries: ["oil-gas"],
      definition: "New reserves booked as a % of production extracted in the year.",
      formula: "RRR = Reserve additions ÷ Annual production",
      interpretation: "Above 100%, the company replaces what it pumps; sustained below, it is liquidating in slow motion, however good the dividends feel.",
      healthy: ">= 100% over 3-year average", warning: "< 80% sustained",
      benchmark: { median: "Majors ~100% mostly via acquisition (asOf 2024)" },
      investorLens: "Separates going concerns from managed declines; check HOW replacement happened (drill bit vs checkbook vs price revisions).",
      operatorLens: "Drives exploration budgets and M&A strategy; the existential KPI.",
      mistakes: ["Counting price-driven reserve revisions as replacement skill."],
      trend: "The industry increasingly replaces through M&A; organic exploration is half its 2014 peak."
    }
  ],

  health: {
    intro: "Oil company health is breakeven first, balance sheet second, inventory depth third. The cycle always comes; the question is who funds dividends through it.",
    pillars: [
      { name: "Cost curve position", weight: 30, metrics: "Corporate breakeven incl. dividend, lifting costs, acreage quality", healthy: "Sub-$45 full breakeven", warning: "Needs $65+ to cover payout" },
      { name: "Balance sheet", weight: 20, metrics: "Net debt/EBITDA at $60 deck, liquidity through a trough", healthy: "< 1x mid-cycle", warning: "> 2x entering a downturn" },
      { name: "Inventory & reserve depth", weight: 20, metrics: "R/P years, Tier-1 undrilled locations, RRR", healthy: "> 10 years quality inventory", warning: "< 7 years or serial negative revisions" },
      { name: "Capital discipline", weight: 20, metrics: "Capex vs guidance, payout framework credibility, M&A pricing", healthy: "Returns framework held through a price rally", warning: "Growth capex creeping back at cycle highs" },
      { name: "Transition & fiscal exposure", weight: 10, metrics: "Jurisdiction mix, carbon cost exposure, gas share", healthy: "Diversified, gas-weighted, stable regimes", warning: "Concentrated in fragile fiscal regimes or high-carbon-cost markets" }
    ],
    scoringNote: "Weight the trough, not the peak: every oil company looks brilliant at $95. The 2020 stress (negative WTI) is the calibration event."
  },

  valuation: {
    intro: "Oil equities price a strip nobody believes and a terminal value everybody debates. The craft is normalizing price decks and paying for barrels, not narratives.",
    methods: [
      { name: "EV / DACF (debt-adjusted cash flow)", use: "The sector's P/E: comparing producers on cash generation", avoid: "Cross-cycle comparisons without a common price deck", strengths: "Handles leverage and the sector's D&A noise", weaknesses: "One year of prices dominates it", range: { low: 3, high: 7, asOf: 2024, note: "structurally low vs the market; the plateau debate priced in" } },
      { name: "P/NAV on proved + probable", use: "Asset value: DCF each field at strip and terminal decks", avoid: "Ignoring fiscal terms and decommissioning inside the NAV", strengths: "Grounded in the actual barrels", weaknesses: "Hostage to the long-term price assumption", range: { low: 0.6, high: 1.1, asOf: 2024, note: "the sector trades at persistent NAV discounts; the terminal-demand haircut" } },
      { name: "FCF yield at a normalized deck", use: "The discipline-era headline: FCF at $60 to $70 Brent vs market cap", avoid: "Spot-price FCF extrapolation at either extreme", strengths: "Directly comparable to any other equity's cash return", weaknesses: "Deck choice is the whole answer", range: { low: 8, high: 15, asOf: 2024, note: "% yields; the market demands double the S&P's cash yield to hold the sector" } },
      { name: "EV / boe of reserves (M&A metric)", use: "Deal math and inventory-depth comparisons", avoid: "Mixing reserve categories or geographies", strengths: "Cuts through accounting to the resource", weaknesses: "A barrel in the Permian ≠ a barrel anywhere else", range: { low: 0, high: 0, asOf: 2024, note: "recent US shale deals paid $2 to $4 per boe of proved reserves" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a producer the discipline-era way: normalized EBITDA at a conservative deck, a mid-cycle multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA at $65 Brent ($B)", min: 1, max: 80, step: 1, value: 20, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 2.5, max: 8, step: 0.25, value: 4.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -20, max: 60, step: 1, value: 10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns energy for three reasons: cash returns (double-digit FCF yields at conservative decks), inflation and geopolitical hedging (the only sector that rallies on war headlines), and the value factor's densest expression. Sizing respects the regime: it is a 4% index weight that behaves like a macro position. The long book favors low-breakeven, discipline-credible producers; the tactical book trades OPEC+ policy and inventory data.",
    debates: [
      { topic: "Peak demand: 2030 plateau or 2040s growth?", bull: "OPEC, the majors, and every EM demand curve say the IEA is early again: petrochemicals, aviation, and the Global South keep demand rising past 2035, and underinvestment meets that demand with structurally higher prices.", bear: "IEA's math is arithmetic, not ideology: EVs displace ~1 mb/d more each year, China's gasoline demand has peaked, and supply capacity is racing 8 mb/d ahead of demand by 2030. Plateau + record spare capacity = a decade of capped prices." },
      { topic: "Capital discipline: permanent religion or cycle-high virtue?", bull: "The shareholder base changed; managements are paid on returns, not barrels. Payout frameworks survived $95 and $70 alike; consolidation (Exxon-Pioneer, Chevron-Hess) locks in inventory without adding rigs. The discipline IS the bull case: supply cannot respond like 2014 again.", bear: "Every discipline era in commodity history died at the next price spike. NOC and private operators face no such constraints and are already taking share; the listed sector's restraint just donates market share and eventually breaks." },
      { topic: "US shale: mature cash cow or spent force?", bull: "Slower growth (0.6 mb/d) is the feature: consolidation moved Tier-1 acreage to disciplined hands, efficiency gains keep grinding breakevens down, and 20 mb/d of liquids with a decade of inventory is a national strategic asset, not a decline story.", bear: "Tier-1 inventory exhaustion is real: well productivity per foot has flattened, gas-oil ratios are rising, and the M&A wave was an admission that the drill bit stopped working. The marginal barrel is migrating back to OPEC+, with everything that implies for pricing power." }
    ],
    cycle: {
      where: "Late-cycle discipline plateau: prices range-bound ($70 to $90 Brent) under record OPEC+ spare capacity (~6 mb/d), demand growth decelerating toward the IEA's ~105.5 mb/d plateau call, and the equity story carried by capital returns rather than price beta.",
      drivers: "OPEC+ quota policy (the swing variable), global inventories vs 5-year averages, US shale capital response, demand pulses (China, aviation), and the geopolitical risk premium that appears and evaporates with headlines.",
      leads: [
        "EIA Weekly Petroleum Status Report (Wednesdays): inventories vs 5-year average, the market's heartbeat",
        "Baker Hughes rig count (Fridays): the US supply response, 6 to 9 months ahead of production",
        "Brent time spreads: backwardation = tight physical market, contango = glut building",
        "OPEC MOMR and IEA OMR monthlies: the demand-forecast tug-of-war itself moves price",
        "Refining crack spreads: end-demand truth serum before it shows in crude"
      ]
    },
    exposure: [
      { vehicle: "Supermajors (Exxon, Chevron, Shell class)", note: "Integrated cash-return machines; the core defensive energy holding" },
      { vehicle: "E&P pure plays", note: "The price beta: 2x to 3x crude's moves; own the low-breakeven, sell the hope stories" },
      { vehicle: "Oilfield services (SLB class)", note: "The capex derivative: levered to activity, not price; international/offshore cycle exposure" },
      { vehicle: "Midstream / pipelines", note: "The yield expression: toll-road cash flows, 6% to 8% distributions, low price sensitivity" },
      { vehicle: "Refiners", note: "The crack-spread trade: a different cycle entirely; golden ages are short and violent" },
      { vehicle: "Energy index (XLE/XOP archetypes)", note: "XLE = majors-weighted quality; XOP = equal-weight E&P beta. Know which trade you own" }
    ],
    catalysts: [
      { when: "OPEC+ ministerial meetings (roughly bi-monthly)", what: "Quota decisions gap the market; watch compliance data between meetings" },
      { when: "Wednesdays 10:30am ET", what: "EIA inventories: the weekly volatility event" },
      { when: "Q4-Q1 budget season", what: "Producer capex guidance sets the year's supply narrative and discipline test" },
      { when: "Jun-Nov hurricane season", what: "Gulf of Mexico supply and refining outage risk" },
      { when: "Geopolitical flashpoints", what: "Hormuz (20% of supply transits), Russia sanctions regime, Red Sea routing: the permanent option premium" }
    ],
    data: [
      { series: "Weekly Petroleum Status Report", source: "eia.gov (free)", why: "Inventories, production, demand proxies: the highest-frequency fundamentals in any commodity" },
      { series: "Baker Hughes rig count", source: "bakerhughes.com (free, Fridays)", why: "The US supply response, published every week since 1944" },
      { series: "OPEC Monthly Oil Market Report", source: "opec.org (free)", why: "The cartel's own demand view and production tables" },
      { series: "IEA Oil Market Report (summary)", source: "iea.org (free summary)", why: "The counterparty forecast in the plateau debate" },
      { series: "CFTC Commitments of Traders", source: "cftc.gov (free, Fridays)", why: "Positioning: crowded longs precede air pockets" }
    ],
    playbook: [
      { regime: "Inflation", behavior: "The classic hedge: energy is the only sector with reliably positive real-rate-shock and CPI-surprise beta. 2022 was the textbook: +60% while the market fell 19%." },
      { regime: "Rates rising", behavior: "Relatively immune: short-duration cash flows, low multiples, payouts now. Outperforms growth in tightening cycles almost mechanically." },
      { regime: "Recession", behavior: "Demand hit of 1 to 3 mb/d historically, cushioned by OPEC cuts; E&P beta falls hard, majors' dividends hold. Buy the trough when inventories crest." },
      { regime: "Geopolitical shock", behavior: "The portfolio's war insurance: supply-side events add $10 to $30 of risk premium overnight. This optionality is why the sector earns a permanent allocation despite the secular debate." }
    ]
  },

  players: [
    { name: "Saudi Aramco", role: "The central bank of oil", country: "SA", real: true, note: "~12 mb/d capacity, $3 lifting costs, and the world's spare capacity in one company" },
    { name: "ExxonMobil", role: "Largest Western major", country: "US", real: true, note: "Pioneer deal made it the Permian's king; the discipline era's standard-setter" },
    { name: "Chevron / Shell / TotalEnergies / BP", role: "The supermajor cohort", country: "US", real: true, note: "Integrated cash machines with diverging transition strategies" },
    { name: "PetroChina / CNOOC / Petrobras", role: "The NOC giants", country: "CN", real: true, note: "State champions; Petrobras' pre-salt is the decade's best conventional growth" },
    { name: "SLB / Halliburton / Baker Hughes", role: "The services big 3", country: "US", real: true, note: "The capex cycle's pure expression" },
    { name: "Vitol / Trafigura", role: "The traders", country: "SG", real: true, note: "Private, colossal, and best-in-chaos; 2022 profits exceeded most majors'" },
    { name: "Cheniere / QatarEnergy", role: "LNG titans", country: "US", real: true, note: "The gas globalization trade made corporate" }
  ],

  geography: [
    { country: "US", role: "Largest producer in history (20+ mb/d liquids)", note: "Shale made it the swing supply; now maturing" },
    { country: "SA", role: "Swing producer and OPEC anchor", note: "The spare capacity that disciplines the market" },
    { country: "RU", role: "Sanctioned giant (~10 mb/d)", note: "Rerouted east at discounts; the shadow fleet's reason" },
    { country: "AE", role: "Expanding capacity + trading hub", note: "5 mb/d ambitions, Fujairah storage" },
    { country: "BR", role: "Pre-salt deepwater growth", note: "The best conventional barrels added this decade" },
    { country: "IR", role: "The sanctioned wildcard", note: "2 mb/d of exports that policy can add or subtract overnight" }
  ],

  cycles: [
    { year: 1973, title: "The first oil shock", kind: "shift", text: "The embargo quadruples prices and invents energy policy. Lesson: oil is the one commodity that reorders geopolitics." },
    { year: 1986, title: "The counter-shock", kind: "bust", text: "Saudi opens the taps to punish quota cheats; prices halve and stay down a decade. Lesson: the cartel disciplines members as ruthlessly as rivals." },
    { year: 2008, title: "$147 and back", kind: "boom", text: "The supercycle peaks; demand destruction and the GFC cut prices 75% in months. Lesson: the cure for high prices is high prices." },
    { year: 2014, title: "OPEC vs shale", kind: "bust", text: "The market-share war fails to kill fracking but bankrupts hundreds of E&Ps. Lesson: US shale reset the cost curve, but with other people's money." },
    { year: 2020, title: "Negative oil", kind: "bust", text: "COVID demand collapse sends WTI to -$37 intraday; the sector's capital exodus completes. Lesson: storage, not price, is the ultimate constraint." },
    { year: 2022, title: "The security repricing", kind: "boom", text: "Russia's invasion reroutes global energy; Europe pays any price for non-Russian molecules; energy is the year's only green sector. Lesson: the risk premium is structural now." }
  ],

  risks: [
    { name: "Demand plateau arriving on schedule", severity: 4, likelihood: 3, transmission: "EV adoption + efficiency + China slowdown → IEA's 8 mb/d surplus scenario by 2030 → price ceiling breaks budgets from Riyadh to Midland, and terminal-value math haircuts every NAV." },
    { name: "OPEC+ cohesion failure", severity: 4, likelihood: 2, transmission: "A market-share war (1986, 2014, 2020 precedents) dumps spare capacity onto a plateauing market: the sector's fastest path to $40." },
    { name: "Geopolitical supply loss", severity: 4, likelihood: 3, transmission: "Hormuz disruption, Russian escalation, or Iranian flashpoint removes millions of barrels overnight; upside risk for producers, systemic risk for everyone downstream." },
    { name: "Fiscal & climate policy squeeze", severity: 3, likelihood: 4, transmission: "Windfall taxes, carbon pricing, and drilling restrictions ratchet with each price spike and election; the government take only rises." },
    { name: "Shale inventory exhaustion", severity: 3, likelihood: 3, transmission: "Tier-1 depletion → US supply response weakens → pricing power migrates to OPEC+ → higher volatility in both directions." },
    { name: "Stranded asset / financing pressure", severity: 2, likelihood: 3, transmission: "ESG-driven capital rationing raises the sector's cost of capital and shrinks its buyer base, even as cash flows persist." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Companies find oil and gas underground, pump it up, move it through pipelines and ships, turn it into fuels and plastics, and sell it everywhere. Prices swing wildly because supply changes slowly while a cartel (OPEC) deliberately manages how much reaches the market. It remains the world's most geopolitically important industry."] },
    L2: { title: "Intermediate", text: ["Three segments: upstream (find and produce: the profit engine), midstream (move and store: toll-road economics), downstream (refine and sell: thin, cyclical margins). Producers cannot set prices, so winners are low-cost operators who replace their reserves and keep debt low. OPEC+ holds ~6 mb/d of spare capacity as a policy weapon, and US shale's 20 mb/d rewrote the last decade."] },
    L3: { title: "Advanced", text: ["The analytical toolkit: cost curves and corporate breakevens, decline rates (5% to 8%) versus the ~$570B capex treadmill, reserve replacement, fiscal regimes (40% to 90% government take), and the inventory-spare-capacity-positioning triangle that sets price. Equities are valued on EV/DACF, P/NAV, and FCF yield at normalized decks; the discipline era made the payout framework the strategy."] },
    L4: { title: "Expert", text: ["The regime: record spare capacity capping rallies, shale maturing (+0.6 mb/d and slowing), consolidation replacing exploration, and the IEA-vs-OPEC plateau debate as the terminal-value argument in every model. Trade the calendar (EIA Wednesdays, OPEC meetings, budget season), respect time spreads over headlines, and treat the geopolitical premium as sold optionality that occasionally exercises."] },
    L5: { title: "Institutional", text: ["Allocator's frame: energy is the portfolio's inflation and conflict hedge that happens to pay double-digit cash yields while the world debates its sunset. Structural position: low-breakeven majors and royalty/midstream cash streams sized as a macro overlay; tactical alpha in E&P beta around inventory cycles and OPEC policy. The decade's meta-question: does the plateau arrive before or after underinvestment bites, and every energy P&L is secretly a bet on that sequencing."] }
  },

  quiz: [
    { q: "Why does the industry spend ~$570B a year on upstream capex just to roughly stand still?", choices: ["Regulation requires it", "Existing fields decline 5% to 8% annually; capex mostly replaces what geology takes back", "Executives like drilling", "To reduce prices"], answer: 1, explain: "Decline is the industry's gravity: without continuous investment, global supply would fall by millions of barrels per day within a few years." },
    { q: "OPEC+ spare capacity of ~6 mb/d matters because:", choices: ["It is exported immediately", "It caps price rallies and disciplines market-share challengers: a policy weapon held in reserve", "It is stranded", "It reduces demand"], answer: 1, explain: "The credible threat of releasing barrels restrains both prices and rivals; it is the market's central-bank function." },
    { q: "A producer with a $40 full-cycle breakeven at $80 Brent earns roughly:", choices: ["$10/bbl", "$40/bbl before government take", "$80/bbl", "Nothing"], answer: 1, explain: "Margin = price minus all-in cost; fiscal terms then take 40% to 90% of that rent depending on jurisdiction." },
    { q: "Backwardation in the futures curve signals:", choices: ["A glut building", "A tight physical market: spot barrels command a premium over future delivery", "Low volatility", "OPEC cheating"], answer: 1, explain: "When today's barrel is worth more than next year's, inventories are being pulled; contango signals the opposite." },
    { q: "The 2014-2020 lesson of US shale was:", choices: ["It failed", "It reset the global cost curve but destroyed capital doing it, funding growth with other people's money", "OPEC won", "Demand vanished"], answer: 1, explain: "Shale added historic supply while the sector generated cumulative negative free cash flow; the discipline era is the survivors' response." },
    { q: "Why do energy equities work as an inflation hedge?", choices: ["They are cheap", "Revenue is the commodity driving the inflation; short-duration cash flows resist rate pressure", "Governments protect them", "They do not"], answer: 1, explain: "2022 was the textbook: energy +60% while rates crushed long-duration assets. The sector IS the CPI input." },
    { q: "Reserve replacement below 100% for years means:", choices: ["Efficiency", "The company is liquidating slowly, whatever the dividend says", "Higher prices ahead", "Better geology"], answer: 1, explain: "Pumping more than you replace shrinks the asset base; the recent M&A wave is the industry buying replacement instead of drilling for it." },
    { q: "The IEA's late-decade scenario that most threatens the sector is:", choices: ["Demand doubling", "Supply capacity ~8 mb/d above demand by 2030: spare capacity at never-seen levels crushing prices", "No more discoveries", "Refining shortages"], answer: 1, explain: "A plateau in demand meeting continued capacity growth is the surplus scenario; whether it lands on schedule is THE debate every model secretly answers." }
  ],

  sources: [
    { name: "IEA Oil 2024/2025 (demand plateau, spare capacity, US supply)", url: "https://www.iea.org/reports/oil-2025/executive-summary", feeds: "demand/supply outlook" },
    { name: "IEF/S&P upstream investment outlook (capex)", url: "https://www.ief.org/reports/upstream-oil-and-gas-investment-outlook-2024", feeds: "capex data" },
    { name: "EIA weekly & OPEC capacity data", url: "https://www.eia.gov", feeds: "inventories, capacity" },
    { name: "Baker Hughes rig count", url: "https://bakerhughesrigcount.gcs-web.com", feeds: "activity" }
  ]
};
