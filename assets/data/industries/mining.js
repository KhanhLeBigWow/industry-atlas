/* Industry Atlas - MINING (full module, research-backed)
 * Anchors: BHP FY2025 revenue $51.3B, underlying EBITDA $26B at a 53% margin,
 * copper output above 2Mt for the first time, WAIO iron ore record 290Mt
 * (BHP results, Aug 2025). Rio Tinto FY2025 revenue $57.6B, underlying EBITDA
 * $25.4B, net profit $11.6B, 60% payout for a 9th straight year (Rio Tinto
 * FY2025 results, Feb 2026). Glencore 2025 revenue $230.9B (trading-inflated),
 * adjusted EBITDA $14.4B, copper 952kt (Glencore prelims, Feb 2026). Copper
 * first crossed $12,000/t in Dec 2025 and briefly topped $14,500/t in Jan 2026
 * (IEA commentary, 2026). BHP's $49B Anglo American bid died May 2024, a
 * renewed approach was abandoned Nov 2025, and the ~$60B Anglo-Teck merger
 * went to shareholder votes in Dec 2025 (Reuters/CNBC). IEA: copper grades
 * down ~40% since 1991, a potential 30% copper supply gap by 2035, NZE copper
 * demand +50% by 2040 (IEA Global Critical Minerals Outlook 2025). PwC Mine
 * 2026: top 40 miners' 2025 revenue $909B, net profit $120B, EBITDA margin 27%. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["mining"] = {
  meta: {
    id: "mining", name: "Mining", sector: "materials", status: "full",
    tagline: "Price takers digging ever deeper for ever poorer rock, just as electrification makes their product the most strategic stuff on Earth.",
    marketSize: { value: 909, unit: "$B", asOf: 2025, note: "combined revenue of the top 40 miners (PwC Mine 2026); Glencore's trading turnover inflates it, and thousands of juniors and state producers sit outside it" },
    cagr: { value: 4, range: [2, 6], horizon: "2025-2030" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 5, regulation: 4, disruption: 2
  },
  newsQuery: '(BHP OR "Rio Tinto" OR Glencore OR "Anglo American" OR "copper price" OR "iron ore" OR "copper mine")',

  overview: {
    definition: "Mining finds, digs, and refines the periodic table: iron ore for steel, copper for everything electric, plus coal, aluminum, nickel, lithium, and gold. A handful of diversified majors (BHP, Rio Tinto, Glencore, Vale) sit atop a global pyramid of single-asset producers, state champions, and exploration juniors.",
    howItWorks: [
      "The defining fact is that miners are price takers: iron ore and copper prices are set on exchanges and index assessments, so a producer controls only volume and cost. Position on the global cost curve is therefore destiny: first-quartile assets (BHP's Pilbara iron ore, Escondida copper) print cash through every trough, while fourth-quartile mines are call options on the commodity price. BHP's FY2025 shows the model at its best: $51.3B of revenue converting to $26B of underlying EBITDA, a 53% margin no manufacturer could dream of.",
      "The asset life cycle runs decades: 10 to 15 years from discovery to first production (permits, feasibility, construction), then 20 to 50 years of operation while the orebody slowly degrades. Grade decline is the industry's gravity: average copper ore grades have fallen about 40% since 1991 (IEA), and moving from 1% to 0.5% copper roughly doubles the rock moved, energy burned, and cost per tonne of metal. Every mine ages up the cost curve; only new discoveries or acquisitions reset the clock.",
      "Two commodities dominate the majors' P&Ls, and they are trading places. Iron ore was the great cash engine of the China era: Pilbara ore costs around $20/t to produce and sold above $100/t for most of a decade, funding the sector's dividends. But China's steel demand has peaked with its property market, and iron ore prices are expected to fall below 2019 levels by 2027 (World Bank). Copper is the successor: BHP's copper EBITDA jumped 44% to roughly $12B in FY2025, nearly matching iron ore's $14B, and prices ran to records (above $14,500/t briefly in Jan 2026) on mine disruptions, AI-and-grid demand, and a thin project pipeline.",
      "The capital cycle is the industry's heartbeat. The 2003-2012 China supercycle triggered a capex binge that ended in the 2015 bust; the survivors swore discipline, cut capex roughly in half, and returned cash instead (Rio Tinto has paid at the top of its 40-60% payout range for 9 straight years). A decade of underbuilding is now colliding with electrification demand: the IEA sees a potential 30% copper supply shortfall by 2035. With greenfield builds costing north of $20,000 per annual tonne and taking 15 years, boards buy rather than build: hence BHP's failed $49B run at Anglo American and the ~$60B Anglo-Teck merger creating a ~1.2Mt copper producer."
    ],
    history: [
      { era: "1870-1950", title: "Empires of extraction", text: "Rio Tinto's Spanish pyrite mines, Anglo American's South African gold and diamonds, Guggenheim copper: mining finance builds modern capital markets and a few colonial fortunes." },
      { era: "1950-2000", title: "Bulk commodities go global", text: "Australia's Pilbara and Brazil's Carajas industrialize iron ore; seaborne trade, long-term contracts with Japanese steelmakers, and the diversified-major model emerge." },
      { era: "2003-2012", title: "The China supercycle", text: "Chinese urbanization multiplies metal prices; miners chase volume with a historic capex binge; iron ore moves from annual contracts to spot pricing; valuations peak with $100B+ takeovers on the table." },
      { era: "2013-2020", title: "Bust and repentance", text: "Prices halve, write-downs bite (Rio's Alcan deal alone destroyed tens of billions), Glencore nearly buckles under debt in 2015, Vale's dam disasters kill hundreds. Boards pivot to capital discipline: dividends over shovels." },
      { era: "2021-present", title: "The scarcity pivot", text: "Record iron ore dividends give way to a copper land grab: BHP's $49B Anglo bid fails (2024), Anglo merges with Teck (~$60B, 2025), copper crosses $12,000/t (Dec 2025), and the IEA warns of a 30% supply gap by 2035." }
    ],
    trends: [
      { title: "Copper eats the portfolio", direction: "up", text: "Every major is pivoting to copper: BHP's copper EBITDA (~$12B, +44% in FY2025) nearly matches iron ore; Glencore targets ~1.6Mt of output by 2035; M&A premiums follow the electrification metal." },
      { title: "Iron ore's long goodbye", direction: "down", text: "China's property-led steel demand has peaked; the World Bank sees prices below 2019 levels by 2027, and Simandou's high-grade Guinean supply (first shipments late 2025) adds pressure. The cash cow is aging." },
      { title: "Grade decline and cost inflation", direction: "down", text: "Copper grades down ~40% since 1991 (IEA): deeper pits, more rock, more energy per tonne. AISC creeps structurally higher, which quietly raises the long-run price floor." },
      { title: "Buy over build", direction: "shift", text: "With greenfield copper above $20,000 per annual tonne and 15-year lead times, consolidation is the growth strategy: BHP-Anglo (failed twice), Anglo-Teck (~$60B), Zijin's serial acquisitions." },
      { title: "Resource nationalism", direction: "shift", text: "Cobre Panama's forced closure (2023), Indonesian export bans, Chilean royalty reform, DRC leverage: host states are repricing their share of the rent, and permits are the scarcest resource of all." }
    ],
    outlook: "A structurally undersupplied copper market meeting a structurally oversupplied iron ore market, inside balance sheets built for discipline. The IEA's 30% copper gap by 2035 is the bull case's spine: demand rises 50% by 2040 in net-zero scenarios while grades fall and pipelines thin. The bear case is that China's metals demand rolls over faster than electrification ramps, and that record prices eventually do what they always do: mint new supply, revive substitution, and flush out scrap. Either way the majors enter the fight with 27% sector EBITDA margins (PwC, 2025) and a decade of underinvestment behind them: scarcity is the base case someone has to disprove."
  },

  structure: {
    suppliers: [
      { name: "Equipment OEMs (Caterpillar, Komatsu, Epiroc, Sandvik)", note: "400-tonne trucks and autonomous drills; the mining-tech oligopoly with its own aftermarket annuity" },
      { name: "EPCM & contractors (Bechtel, Fluor, Worley, Thiess)", note: "Build the $10B+ projects; capex blowouts usually start here" },
      { name: "Energy & explosives (diesel, grid power, Orica, Dyno)", note: "Energy is 15-30% of cash costs; electrification of fleets is the next capex wave" },
      { name: "Labor & communities", note: "Skilled-labor scarcity and community consent gate every expansion" }
    ],
    producers: [
      { name: "Diversified majors (BHP, Rio Tinto, Glencore, Vale, Anglo Teck)", note: "Multi-commodity portfolios; BHP FY2025 revenue $51.3B, Rio 2025 $57.6B" },
      { name: "Copper pure-plays (Freeport, Codelco, Southern Copper, Antofagasta)", note: "The electrification beta; Grasberg and the Chilean giants" },
      { name: "State & national champions (Codelco, Saudi Ma'aden, China's Zijin/CMOC)", note: "Strategic actors that do not optimize for shareholder returns" },
      { name: "Juniors & developers", note: "Thousands of exploration lottery tickets; the discovery pipeline the majors stopped funding" }
    ],
    distributors: [
      { name: "Traders (Glencore, Trafigura, Mercuria)", note: "Glencore's $230.9B of 2025 revenue is mostly this: moving, blending, and financing metal" },
      { name: "Bulk shipping & rail", note: "Capesize freight and dedicated heavy-haul railways; logistics is the moat in iron ore" }
    ],
    customers: [
      { name: "Chinese smelters & steel mills", note: "China buys ~70% of seaborne iron ore and half the world's copper; the customer IS the cycle" },
      { name: "Global manufacturers", note: "Grid, EV, construction, and electronics demand pull through semis and smelters" },
      { name: "Financial buyers", note: "ETFs, exchange warehouses, and strategic stockpiles set marginal prices some quarters" }
    ],
    regulators: [
      { name: "Host governments & mining codes", note: "Royalties, permits, ownership rules: Chile, Peru, Indonesia, DRC each rewrite terms mid-game" },
      { name: "Environmental agencies & courts", note: "Tailings, water, and biodiversity approvals run a decade; Juukan Gorge showed heritage failures end careers" },
      { name: "Competition & foreign-investment reviews", note: "Every mega-merger crosses 5+ jurisdictions; South Africa shaped the BHP-Anglo outcome" }
    ],
    capital: [
      { name: "Equity markets (London, Sydney, Toronto, New York)", note: "The majors are index heavyweights; juniors live off Toronto and ASX placements" },
      { name: "Debt & project finance", note: "Investment-grade majors borrow cheap; single-asset developers pay up or give away streams" },
      { name: "Royalty & streaming (Franco-Nevada, Wheaton class)", note: "Non-dilutive capital that takes the top line and skips the cost inflation" }
    ]
  },

  valueChain: {
    intro: "From a geologist's drill core to a coil of Chinese steel or a grid transformer. Value concentrates where geology is best and capital already sunk: tier-1 orebodies out-earn everything downstream of them.",
    stages: [
      { id: "exploration", name: "Exploration & discovery", what: "Geology, drilling, resource definition", players: "Juniors, majors' brownfield teams", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 1 },
        linksTo: ["copper-mining", "lithium", "rare-earths"],
        deeper: "A lottery with terrible odds: roughly 1 in 1,000 prospects becomes a mine. Majors slashed exploration in the discipline era and now buy discoveries instead: the juniors are the industry's outsourced R&D, funded by equity hope." },
      { id: "development", name: "Development & construction", what: "Feasibility, permitting, building the mine", players: "Majors, EPCM firms, project financiers", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 5, concentration: 3 },
        linksTo: ["construction", "manufacturing"],
        deeper: "The valley of death: 10-15 years, $5B-15B for a tier-1 copper build, and permits that can vanish mid-stream (Cobre Panama). Greenfield capex north of $20,000 per annual tonne of copper is why $49B for Anglo looked cheap to BHP." },
      { id: "extraction", name: "Mining operations", what: "Drill, blast, haul: open pit and underground", players: "BHP, Rio, Vale, Codelco, Freeport", valueCapture: 5,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 3 },
        linksTo: ["manufacturing", "oil-gas"],
        deeper: "Where the rent lives, if the geology is right: Pilbara iron ore costs ~$20/t against $100 prices; BHP ran a 53% EBITDA margin in FY2025. Autonomous haulage and remote operations centers are the productivity frontier; grade decline is the tax on it." },
      { id: "processing", name: "Processing & smelting", what: "Crushing, concentrating, smelting, refining", players: "Chinese smelters, Glencore, Aurubis, freeports of metal", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 4, concentration: 4 },
        linksTo: ["steel", "aluminum", "chemicals"],
        deeper: "Structurally squeezed: China built so much smelting capacity that treatment charges went negative in 2025, meaning smelters effectively paid for concentrate. Strategic (everyone wants domestic refining) but a margin desert: the IEA calls it the chain's pressure point." },
      { id: "trading", name: "Trading & logistics", what: "Marketing, blending, freight, financing flows", players: "Glencore, Trafigura, Mercuria, bulk shippers", valueCapture: 3,
        economics: { grossMargin: [1, 3], capitalIntensity: 3, concentration: 4 },
        linksTo: ["shipping", "capital-markets", "logistics"],
        deeper: "Pennies per tonne at colossal turnover: Glencore's $230.9B of 2025 revenue produced $14.4B of adjusted EBITDA, most of it from assets, not trading. The real product is information: traders see every cargo and arbitrage the world's ignorance." },
      { id: "endmarkets", name: "End markets", what: "Steel, grid, EVs, construction, electronics", players: "Steelmakers, cable makers, OEMs, utilities", valueCapture: 3,
        economics: { grossMargin: [10, 25], capitalIntensity: 4, concentration: 2 },
        linksTo: ["steel", "batteries", "ev", "construction", "utilities"],
        deeper: "Demand is a derivative of civilization's build rate: China's property bust shrinks iron ore's market while grids, data centers, and EVs grow copper's roughly 50% by 2040 in the IEA's net-zero path. The end market you feed determines which decade you own." }
    ]
  },

  financials: {
    businessModel: [
      "Revenue = volume x a price you do not control, so the P&L is a leveraged bet on the commodity deck. Costs are heavily fixed (mine plans, fleets, labor), which makes operating leverage brutal in both directions: a $1,000/t move in copper drops almost straight to EBITDA. The discipline-era model converts that torque into shareholder cash: BHP turned $51.3B of FY2025 revenue into $26B of underlying EBITDA (53% margin), and Rio paid out 60% of underlying earnings for a 9th consecutive year. Watch three numbers: realized price vs benchmark, unit costs (AISC) vs the curve, and the sustaining-vs-growth capex split.",
      "The balance sheet is the survival kit. Price takers with fixed costs must fund the trough from the boom: the 2015 near-death experiences (Glencore's emergency deleveraging, Anglo's fire sales) wrote the current playbook of low net debt, payout ratios tied to earnings (not fixed dividends), and buybacks as the flex. The new tension is growth: copper scarcity argues for building, discipline argues for buying, and the 2024-2025 M&A wave (BHP-Anglo twice, Anglo-Teck at ~$60B) shows boards choosing premiums over greenfield risk."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 10, capitalIntensity: 90, pricingPower: 15, cyclicality: 90, operatingLeverage: 85 },
    lines: [
      { label: "Realized prices", note: "The tape: iron ore, copper, coal benchmarks vs what the company actually captured" },
      { label: "Volumes & unit costs", note: "AISC vs the global cost curve; grade-driven creep is the silent killer" },
      { label: "Capex: sustaining vs growth", note: "Sustaining keeps the mine alive; growth is the cycle bet. Watch reclassification games" },
      { label: "Shareholder returns", note: "Payout-ratio dividends plus buybacks: Rio at the top of its 40-60% range for 9 years" },
      { label: "Marketing/trading (where present)", note: "Glencore's $230.9B turnover vs $14.4B EBITDA: revenue is meaningless, margin is everything" }
    ],
    unitEconomics: {
      unit: "per tonne of copper (illustrative, 2025)",
      items: [
        { label: "Realized price", value: "~$9,500-10,500/t", note: "2025 averages; spot first crossed $12,000 in Dec 2025, briefly $14,500+ in Jan 2026" },
        { label: "AISC", value: "~$4,900/t (~$2.20/lb) median", note: "first-quartile mines sit far below; grade decline pushes everyone up" },
        { label: "EBITDA margin per tonne", value: "~$5,000+/t at 2025 prices", note: "the torque: every price move lands here" },
        { label: "Greenfield capex", value: "$20,000+ per annual tonne", note: "and 10-15 years to build: why boards paid ~$60B for Anglo-Teck instead" }
      ]
    }
  },

  kpiRefs: ["mining-aisc", "mining-grade"],
  kpiLocal: [
    {
      id: "mining-reserve-replacement", name: "Reserve Replacement Ratio", industries: ["mining", "copper-mining"],
      definition: "New reserves added (discovery, conversion, acquisition) versus reserves depleted by production in a period.",
      formula: "Reserve replacement = Reserves added / Reserves mined (x100%)",
      interpretation: "Below 100%, a miner is liquidating itself in slow motion: the market pays for the annuity of future production, and grade-adjusted replacement is even harder than the headline. The majors' exploration cuts in the discipline era are why M&A returned: buying Anglo's copper was reserve replacement by check.",
      healthy: "Above 100% through the cycle at stable or better grades",
      warning: "Sustained sub-100% replacement, or replacement only via lower-grade ounces and tonnes"
    },
    {
      id: "mining-tcrc", name: "Treatment & Refining Charges (TC/RCs)", industries: ["mining", "copper-mining"],
      definition: "The fee smelters charge miners to convert concentrate into refined metal: the price of processing capacity.",
      formula: "Miner's realized price = Refined metal price (minus) TC/RC and payability deductions",
      interpretation: "TC/RCs split the value chain's rent between mine and smelter. China's smelter overbuild pushed spot copper TCs negative in 2025: smelters effectively paying for concentrate, which signals concentrate scarcity and shifts rent upstream to the mines.",
      healthy: "For miners: low or negative TCs (concentrate is scarce); for smelters: the reverse",
      warning: "For smelters: sustained negative TCs, which the IEA flags as the chain's breaking point"
    }
  ],

  health: {
    intro: "A miner's health is its cost-curve seat, its balance sheet at trough prices, and how many years of good rock remain. Everything else is commentary.",
    pillars: [
      { name: "Cost curve position", weight: 30, metrics: "AISC quartile by asset, margin at trough prices", healthy: "Core assets in the first quartile (Pilbara, Escondida class)", warning: "Portfolio drifting to third and fourth quartile as grades fall" },
      { name: "Balance sheet through the trough", weight: 20, metrics: "Net debt/EBITDA at mid-cycle prices, liquidity, payout flexibility", healthy: "Net debt/EBITDA under 1x mid-cycle; payout-ratio dividends", warning: "Fixed dividends plus leverage: the 2015 Glencore setup" },
      { name: "Reserve life & grade trajectory", weight: 20, metrics: "Reserve years at current rates, replacement ratio, grade profile", healthy: "20+ years at stable grades, replacement above 100%", warning: "Shrinking reserve life papered over with lower-grade conversions" },
      { name: "Commodity mix & growth optionality", weight: 15, metrics: "Share of EBITDA from future-facing metals, sanctioned project pipeline", healthy: "Rising copper share (the BHP FY2025 pattern) with real projects", warning: "Single-commodity exposure to a structurally declining market" },
      { name: "License to operate", weight: 15, metrics: "Tailings audits, community agreements, host-country relations, safety record", healthy: "Independent tailings verification, stable fiscal terms", warning: "Disputes, dam risk, or a host state renegotiating mid-cycle (Cobre Panama)" }
    ],
    scoringNote: "Weight the trough, not the peak: mining equities are priced on what survives the bottom of the cycle, and catastrophic tailings or safety failures (Brumadinho) can void every other pillar overnight."
  },

  valuation: {
    intro: "The market prices miners on mid-cycle earnings power and asset NAV, then argues endlessly about what mid-cycle means. Spot-price multiples are a trap in both directions.",
    methods: [
      { name: "EV / EBITDA (mid-cycle)", use: "Majors and diversified producers; normalize commodity prices first", avoid: "Spot-price EBITDA at cycle extremes: cheap at the top is the classic value trap", strengths: "Comparable, quick, matches how generalists screen", weaknesses: "Everything hinges on the price deck you normalize to", range: { low: 4, high: 7, asOf: 2025, note: "diversified majors; copper-heavy names command the top and beyond" } },
      { name: "P / NAV", use: "The miner's DCF: sum each mine's life-of-asset cash flows at a commodity deck", avoid: "Treating NAV as precise: grade, recovery, and price assumptions swing it 50%", strengths: "Captures mine lives, capex, and asset quality that multiples miss", weaknesses: "Deck-dependent; development assets get haircut arbitrarily", range: { low: 0.7, high: 1.3, asOf: 2025, note: "x NAV; scarcity premiums on tier-1 copper push the top" } },
      { name: "FCF yield", use: "The discipline-era lens: what cash actually reaches shareholders", avoid: "Peak-price yields annualized; growth-capex years understate power", strengths: "Cuts through accounting; matches the payout model", weaknesses: "Lumpy with capex cycles and price swings", range: { low: 5, high: 10, asOf: 2025, note: "% yields for majors at mid-cycle assumptions" } },
      { name: "EV per tonne of production/resource", use: "Copper M&A math: compare buying vs the $20,000+/t cost of building", avoid: "Cross-commodity comparisons; a tonne of iron ore is not a tonne of copper", strengths: "The lens the BHP-Anglo and Anglo-Teck deals were argued in", weaknesses: "Ignores cost position and jurisdiction entirely", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: acquisition cost vs replacement cost" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a miner quickly: mid-cycle EBITDA times a through-cycle multiple, minus net debt. Argue about the EBITDA, not the arithmetic.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 1, max: 30, step: 0.5, value: 12, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 3, max: 10, step: 0.5, value: 5.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 1, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays mining as two trades wearing one sector: a melting iron ore annuity that still funds the dividends, and a copper scarcity story the IEA hands you in chart form (30% supply gap by 2035). Own cost-curve winners with copper mix shifting up, treat pure iron ore exposure as a carry trade with a China put nobody sells, and respect that the whole complex is a levered China-plus-dollar macro instrument whatever the micro thesis says.",
    debates: [
      { topic: "Copper supercycle: structural deficit or priced-in narrative?", bull: "Grades down 40% since 1991, 15-year lead times, a thin sanctioned pipeline, and demand rising 50% by 2040 in net-zero paths: the 30% gap by 2035 is arithmetic, not opinion, and $14,500/t January prints were the market agreeing.", bear: "Every input of that arithmetic is a policy assumption: high prices are already rationing Chinese demand (down 8% year over year in Q4 2025), aluminum substitutes at the margin, scrap supply is price-elastic, and record prices have historically minted the supply everyone swore was impossible." },
      { topic: "Iron ore: durable cash cow or melting glacier?", bull: "Pilbara costs ~$20/t against $100 prices, the majors behave like an oligopoly on volume, India and Southeast Asia urbanize next, and BHP just set a 290Mt production record while printing a 53% margin: glaciers melt slowly and pay dividends the whole way.", bear: "China's steel demand has peaked with its property sector, scrap-fed EAF share rises every year, Simandou adds high-grade supply from late 2025, and the World Bank sees prices below 2019 levels by 2027: the terminal value is shrinking faster than the payout ratio admits." },
      { topic: "Buy vs build: is the M&A wave discipline or its abandonment?", bull: "Paying ~$60B for Anglo-Teck class assets is rational when greenfield copper costs $20,000+ per annual tonne, takes 15 years, and might get Cobre-Panama'd at the finish line: acquiring proven, permitted, producing tier-1 assets IS capital discipline correctly priced.", bear: "Mega-merger history (Rio-Alcan, the 2011 vintage) says premiums transfer the scarcity value to the seller; BHP walking away twice was the discipline, and the next cycle top will be dated to whichever CEO finally wins a bidding war." }
    ],
    cycle: {
      where: "Split-screen cycle: copper at record prices with a decade of underinvestment behind it (early-to-mid upcycle), iron ore past its structural peak and grinding down (late cycle), balance sheets strong everywhere: the sector enters the divergence from a position of unusual financial health (27% top-40 EBITDA margins, PwC 2025).",
      drivers: "China construction and stimulus, global grid/EV/data-center buildout, mine supply disruptions, the dollar, and the capex cycle's 10-year echo.",
      leads: [
        "China official PMI and property starts (NBS, free monthly): the iron ore demand tape",
        "LME and COMEX exchange inventories (exchange sites, free): copper tightness in one number",
        "Company quarterly production reports (BHP, Rio, Vale, Freeport: free, Jan/Apr/Jul/Oct)",
        "World Bank Pink Sheet monthly commodity prices (free): the deck everyone normalizes to",
        "worldsteel monthly crude steel output (free): the iron ore pull-through"
      ]
    },
    exposure: [
      { vehicle: "Diversified majors (BHP, Rio Tinto class)", note: "Cost-curve winners with rising copper mix; the core holding" },
      { vehicle: "Copper pure-plays (Freeport, Antofagasta class)", note: "The scarcity beta: torque to the deficit thesis, no iron ore drag" },
      { vehicle: "Glencore", note: "Assets plus a trading machine: the volatility-loving way to own the complex" },
      { vehicle: "Royalty & streaming (Franco-Nevada, Wheaton class)", note: "Top-line exposure that skips cost inflation and capex blowouts" },
      { vehicle: "ETFs (PICK, COPX, XME)", note: "The macro expression without single-mine event risk" }
    ],
    catalysts: [
      { when: "Jan/Apr/Jul/Oct", what: "Quarterly production reports: volumes, unit costs, guidance resets" },
      { when: "Feb and Aug", what: "Results seasons: dividends, buybacks, capex budgets, price-deck confessions" },
      { when: "Monthly", what: "China PMI, property starts, and credit data: the demand tape for bulks" },
      { when: "Event-driven", what: "M&A votes and bids (the Anglo-Teck template), mine disruptions, host-country fiscal changes" }
    ],
    data: [
      { series: "World Bank Commodity Price Data (Pink Sheet)", source: "worldbank.org (free monthly)", why: "The canonical free price series for every metal" },
      { series: "USGS Mineral Commodity Summaries", source: "usgs.gov (free annual)", why: "Production, reserves, and country shares: the supply-side atlas" },
      { series: "IEA Critical Minerals data & outlooks", source: "iea.org (free)", why: "The demand scenarios and supply-gap math driving the copper thesis" },
      { series: "Company production reports", source: "bhp.com, riotinto.com, vale.com (free quarterly)", why: "The primary tape: volumes, costs, guidance" },
      { series: "worldsteel crude steel statistics", source: "worldsteel.org (free monthly)", why: "Iron ore demand, one derivative upstream" }
    ],
    playbook: [
      { regime: "Global recession", behavior: "Everything sells off with demand, but cost-curve leaders keep earning: buy first-quartile assets at fourth-quartile prices. The trough is when reserve life is cheapest." },
      { regime: "China stimulus wave", behavior: "Bulks rip first and hardest (iron ore is the purest stimulus trade); fade the spike unless property follows through: the 2025 lesson is stimulus front-loads, then fades." },
      { regime: "Dollar and rates rising", behavior: "Dollar strength is a headwind to all commodities; local-currency cost bases (AUD, BRL, CLP) cushion margins: watch FX as a second-order earnings driver." },
      { regime: "Supply shock (strike, dam, coup, closure)", behavior: "The disruption premium accrues to everyone else: a Grasberg or Cobre Panama event reprices the whole cost curve upward. Own the diversified names that benefit without owning the event." }
    ]
  },

  players: [
    { name: "BHP", role: "The largest diversified major", country: "AU", real: true, note: "FY2025: $51.3B revenue, $26B EBITDA (53% margin), copper above 2Mt for the first time; walked away from Anglo twice" },
    { name: "Rio Tinto", role: "Iron ore heavyweight, diversifying", country: "GB", real: true, note: "2025: $57.6B revenue, $25.4B EBITDA; Pilbara plus Simandou plus a lithium push; 60% payout 9 years running" },
    { name: "Glencore", role: "Miner-trader hybrid", country: "CH", real: true, note: "2025: $230.9B revenue (trading-inflated), $14.4B adjusted EBITDA, 952kt copper, targeting ~1.6Mt by 2035" },
    { name: "Vale", role: "Iron ore giant", country: "BR", real: true, note: "Carajas's high-grade ore; still rebuilding trust after Brumadinho (2019, 270 deaths)" },
    { name: "Anglo Teck", role: "The new copper major", country: "GB", real: true, note: "~$60B Anglo American-Teck merger (votes Dec 2025): ~1.2Mt of copper capacity, second only to BHP" },
    { name: "Freeport-McMoRan", role: "Copper pure-play", country: "US", real: true, note: "Grasberg's operator: the deficit thesis's highest-beta large cap, and 2025's reminder that supply risk cuts both ways" },
    { name: "Codelco", role: "State copper champion", country: "CL", real: true, note: "Chile's state miner: giant orebodies, aging assets, and politics in the boardroom" },
    { name: "Zijin Mining", role: "China's acquisitive champion", country: "CN", real: true, note: "Serial buyer of copper, gold, and lithium assets across the Belt and Road map" }
  ],

  geography: [
    { country: "AU", role: "Iron ore heartland", note: "The Pilbara: the world's best mining real estate and BHP/Rio's cash engine (290Mt WAIO record, FY2025)" },
    { country: "CL", role: "Copper superpower", note: "Largest producer; Escondida, Codelco's giants, and a live royalty debate" },
    { country: "CN", role: "The customer and the refiner", note: "Buys ~70% of seaborne iron ore, smelts half the world's copper, and owns the processing chokepoint" },
    { country: "BR", role: "High-grade iron ore", note: "Vale's Carajas; quality premium ore with tailings scars" },
    { country: "CD", role: "Copper-cobalt frontier", note: "DRC's grades are the world's best and its politics the hardest; Chinese capital dominates" },
    { country: "ID", role: "Nickel and policy laboratory", note: "Export bans forced onshore processing: the resource-nationalism playbook others now copy" }
  ],

  cycles: [
    { year: 2006, title: "China supercycle ignition", kind: "boom", text: "Chinese urbanization multiplies metal demand; prices triple and quadruple; miners re-rate from value traps to growth stocks and launch a historic capex binge. Lesson: the biggest cycles come from new demand classes, not supply events." },
    { year: 2015, title: "The great bust", kind: "bust", text: "China slows, prices halve, and the binge's supply lands: Glencore's shares crater on debt fears, Anglo plans to shed most of its workforce, write-downs sweep the sector. Lesson: leverage plus price taking is existential, not uncomfortable." },
    { year: 2016, title: "The discipline pivot", kind: "shift", text: "Survivors cut capex roughly in half, tie dividends to payout ratios, and swear off mega-projects; a decade of underinvestment begins. Lesson: yesterday's discipline is tomorrow's shortage: the cure for low prices worked too well." },
    { year: 2021, title: "Iron ore's last blowout", kind: "boom", text: "Stimulus and supply friction push iron ore above $200/t; BHP and Rio pay record dividends rather than build. Lesson: discipline held even at the top: the boom bought back shares instead of breaking ground, seeding the copper scarcity now." },
    { year: 2025, title: "The copper land grab", kind: "shift", text: "BHP's $49B Anglo pursuit (dead May 2024, revived and abandoned Nov 2025) gives way to the ~$60B Anglo-Teck merger as copper crosses $12,000/t. Lesson: when building takes 15 years, companies buy each other instead of buying shovels: scarcity gets capitalized before it gets solved." }
  ],

  risks: [
    { name: "China demand rollover", severity: 4, likelihood: 4, transmission: "Property-led steel decline deepens -> iron ore below 2019 levels (World Bank path) -> the majors' dividend engine shrinks -> payouts and valuations reset before copper growth fills the hole." },
    { name: "Resource nationalism & permit loss", severity: 4, likelihood: 4, transmission: "Host states reprice the rent (Cobre Panama closure, royalty hikes, export bans) -> reserves become stranded or taxed -> NAVs cut and country risk premia widen across the sector." },
    { name: "Capex blowouts & project failure", severity: 3, likelihood: 4, transmission: "Grade decline forces bigger, deeper, remoter builds -> budgets overrun and schedules slip -> returns on growth capex disappoint -> boards retreat to buybacks, worsening the supply gap they were solving." },
    { name: "Tailings or safety catastrophe", severity: 5, likelihood: 2, transmission: "A dam failure (Brumadinho killed 270 in 2019) -> criminal liability, multi-billion remediation, license revocations -> a decade of discount on the operator and tighter rules for everyone." },
    { name: "Substitution and demand destruction", severity: 3, likelihood: 3, transmission: "Record copper prices -> aluminum substitution in cable, thrifting in design, surging scrap recovery -> the deficit narrative erodes at exactly the multiple that priced it as permanent." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Mining companies dig up the raw ingredients of everything: iron ore for steel, copper for wires and motors, plus coal, gold, and battery metals. They cannot set their prices (markets do), so the winners are simply the ones who dig at the lowest cost. A few giants (BHP, Rio Tinto, Glencore, Vale) dominate, and their fortunes swing with China, which buys most of the world's metal."] },
    L2: { title: "Intermediate", text: ["The core mechanics: position on the global cost curve decides who profits through downturns, and ore grades (metal per tonne of rock) decide long-run costs: grades have fallen about 40% since 1991, so mining gets structurally harder. The majors earn spectacular margins on their best assets (BHP: 53% EBITDA margin in FY2025) and return most of it as dividends, a discipline learned in the 2015 bust. The big rotation: iron ore's China-driven golden age is fading while copper, the electrification metal, hit records above $14,500/t in early 2026."] },
    L3: { title: "Advanced", text: ["Analyze a miner in layers: mid-cycle EBITDA (never spot), AISC quartile by asset, reserve life and replacement ratio, and the sustaining-vs-growth capex split. NAV is the anchor but the price deck is the argument. The strategic picture: a decade of capital discipline gutted the project pipeline just as the IEA projects a 30% copper supply gap by 2035, so growth now happens by M&A (BHP-Anglo attempts, the ~$60B Anglo-Teck merger) at premiums that capitalize scarcity before a single new tonne is produced."] },
    L4: { title: "Expert", text: ["Trade the divergence: copper early-cycle on underinvestment, iron ore late-cycle on China's structural steel decline, both inside unusually strong balance sheets. Live debates: whether high prices ration demand faster than supply responds (Chinese refined demand fell 8% year over year in Q4 2025 even as prices ran), whether smelter overcapacity (negative treatment charges) breaks the concentrate market's economics, and whether buying at ~$60B beats building at $20,000+ per annual tonne. Watch production reports, LME stocks, and China's monthly data as the tape."] },
    L5: { title: "Institutional", text: ["Allocator's frame: mining is the levered macro expression of the physical world's build rate: a China-plus-dollar instrument with idiosyncratic geology attached. Core the cost-curve leaders with rising future-facing-metal mix, use royalty/streaming structures for inflation-protected top-line exposure, and size pure-plays as deficit-thesis torque. The sector's paradox is the alpha source: capital discipline (27% top-40 EBITDA margins, PwC 2025) is simultaneously the reason to own it and the reason the supply gap exists. The catastrophic tail (tailings, expropriation) is uninsurable: diversify across jurisdictions or accept you are short one lawsuit."] }
  },

  quiz: [
    { q: "Miners are 'price takers,' which means their main controllable lever is:", choices: ["Marketing spend", "Cost position on the global curve", "Commodity prices", "Exchange listing"], answer: 1, explain: "Prices are set on exchanges; a first-quartile cost seat (Pilbara, Escondida class) is the only durable moat and prints cash through every trough." },
    { q: "BHP's FY2025 results marked a milestone because:", choices: ["Iron ore revenue doubled", "It exited copper", "Copper output topped 2Mt for the first time and copper EBITDA (~$12B) nearly matched iron ore's", "It cut its dividend to zero"], answer: 2, explain: "The portfolio is rotating: copper EBITDA jumped 44% while iron ore's fell, the sector's China-to-electrification handoff in one income statement." },
    { q: "Glencore's revenue (~$231B in 2025) dwarfs BHP's (~$51B) because:", choices: ["Glencore mines far more metal", "Trading turnover counts as revenue; its $14.4B EBITDA tells the real story", "Accounting fraud", "Currency effects"], answer: 1, explain: "Marketing revenue is gross cargo value at wafer-thin margins: in mining and trading, revenue is meaningless and margin is everything." },
    { q: "Copper ore grades have fallen roughly how much since 1991 (IEA)?", choices: ["5%", "15%", "40%", "80%"], answer: 2, explain: "Grade decline is the industry's gravity: halving grade roughly doubles rock moved and cost per tonne, quietly raising the long-run price floor." },
    { q: "The majors now grow copper mainly by acquisition because:", choices: ["Exploration is illegal", "Greenfield builds cost $20,000+ per annual tonne and take 10-15 years, with permit risk on top", "Copper demand is falling", "Banks refuse project loans"], answer: 1, explain: "That math made $49B for Anglo look reasonable to BHP and produced the ~$60B Anglo-Teck merger: scarcity gets capitalized before it gets solved." },
    { q: "The IEA's headline warning for the copper market is:", choices: ["A permanent surplus", "A potential 30% supply shortfall by 2035", "Grades rising too fast", "Chinese overproduction of mines"], answer: 1, explain: "Thin pipelines, falling grades, and 15-year lead times against demand that rises 50% by 2040 in net-zero paths: the arithmetic behind the M&A wave." },
    { q: "Iron ore's structural problem is that:", choices: ["Deposits are exhausted", "China's property-led steel demand has peaked, with prices seen below 2019 levels by 2027", "It cannot be shipped", "Copper replaced it in construction"], answer: 1, explain: "The cash cow still earns (Pilbara costs ~$20/t), but the terminal value is shrinking: the World Bank sees prices grinding below 2019 levels." },
    { q: "The 2015 bust taught the industry that:", choices: ["Capex should rise in downturns", "Leverage plus price taking is existential: hence payout-ratio dividends and low debt today", "Trading is riskless", "China would never slow"], answer: 1, explain: "Glencore's near-death and Anglo's fire sales wrote the discipline playbook, which then underbuilt supply and seeded today's copper scarcity." }
  ],

  sources: [
    { name: "BHP results for the year ended 30 June 2025 (Aug 2025)", url: "https://www.bhp.com/news/media-centre/releases/2025/08/bhp-results-for-the-full-year-ended-30-june-2025", feeds: "BHP revenue, EBITDA, copper/iron ore volumes" },
    { name: "Rio Tinto 2025 full year results (SEC 6-K, Feb 2026)", url: "https://www.sec.gov/Archives/edgar/data/863064/000162828026009503/fullyear2025_finalx18feb.htm", feeds: "Rio revenue, EBITDA, payout" },
    { name: "Glencore Preliminary Results 2025 (Feb 2026)", url: "https://www.glencore.com/media-and-insights/news/preliminary-results-2025", feeds: "Glencore revenue, EBITDA, copper output" },
    { name: "IEA Global Critical Minerals Outlook 2025", url: "https://www.iea.org/reports/global-critical-minerals-outlook-2025", feeds: "grade decline, supply gap, demand scenarios" }
  ]
};
