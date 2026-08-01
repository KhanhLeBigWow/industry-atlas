/* Industry Atlas - COPPER (full module, research-backed)
 * Anchors: world mine supply ~23.4Mt 2025, +2.1% vs 22.9Mt 2024 (USGS MCS 2026 /
 * GlobalData); LME record $14,527/t Jan 2026, ~$13,400/t Jul 2026 (LME via
 * TradingEconomics); 2026 TC/RC benchmark settled at $0/t, the lowest ever
 * (Antofagasta-Chinese smelter, Nov 2025); Escondida 1.35Mt and Codelco 1.33Mt
 * in 2025 (Mining.com); Grasberg mud rush Sept 2025, full capacity ~early 2028
 * (Freeport); refined deficit ~316kt 2026e vs 249kt 2025 (analyst consensus);
 * S&P Global (Jan 2026): demand ~28Mt to 42Mt by 2040, ~10Mt annual shortfall
 * within 15 years absent new mines; Anglo American-Teck $53B merger (Sept 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["copper-mining"] = {
  meta: {
    id: "copper-mining", name: "Copper", sector: "materials", status: "full",
    tagline: "The metal of electrification: every grid, motor, and datacenter is a copper order in disguise.",
    marketSize: { value: 270, unit: "$B", asOf: 2025, note: "refined copper market ~$250B to $270B (Market.us, MRFR 2025); ~23.4Mt mined plus ~5Mt scrap feeds ~28Mt refined" },
    cagr: { value: 4, range: [3, 6], horizon: "2025-2035" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 5, regulation: 4, disruption: 1
  },
  newsQuery: '("copper price" OR Codelco OR "Freeport-McMoRan" OR Escondida OR "copper mine" OR "copper deficit" OR "copper smelter")',

  overview: {
    definition: "Copper is the economy's conductor: the second-best electrical conductor known (after silver) at 1/100th the price. The industry finds, mines, concentrates, smelts, and refines it, then feeds it into wires, motors, grids, and machines.",
    howItWorks: [
      "Copper starts as rock containing less than 1% metal. Mines blast and haul ore, mills grind it to powder and float out a ~25% concentrate, smelters burn it to ~99% blister, and refineries electro-purify to 99.99% cathode traded on the LME. From discovery to first production averages ~17 years (IEA); a tier-one mine costs $5B to $15B and runs for 30 to 100 years.",
      "Supply is geology plus politics: roughly half of the ~23.4Mt mined in 2025 came from Chile (5.3Mt, ~23% of the world), Peru, the DR Congo, and a handful of giant, aging mines. Ore grades at legacy operations have fallen ~40% since 1991, so each tonne takes more rock, energy, and water, pushing the cost curve structurally higher. The concentration is the fragility: a September 2025 mud rush at Grasberg, one mine, removed enough supply to help send the world price to records.",
      "Demand is electrification itself: construction wiring, grids (~28% each), machinery, and now the accelerants. An EV uses roughly 3 to 4x the copper of a combustion car, BloombergNEF sees data centers locking in a cumulative 4.3Mt by 2035, and S&P Global (Jan 2026) projects total demand rising from ~28Mt toward 42Mt by 2040. Because new supply takes 15+ years, structural deficits resolve through price spikes, substitution at the margin (aluminum), and scrap.",
      "The market itself is three exchanges and a mid-chain chokepoint. LME, COMEX, and SHFE cathode prices set the world benchmark (US tariff moves in 2025 briefly blew the COMEX-LME arbitrage to record width), while China smelts ~50% of global concentrate. Chinese smelter overbuilding crushed treatment charges (TC/RCs) to a $0/t benchmark for 2026, the lowest ever: mines now hold all the power over the middle of the chain, and scrap (~30% of total supply) is the hidden swing producer whenever prices spike."
    ],
    history: [
      { era: "1900s-1970s", title: "The majors era", text: "Anaconda, Kennecott, and state expropriations (Chile 1971) define the century; copper politics topple governments." },
      { era: "1980s-1990s", title: "Chile's ascent", text: "Escondida (1990) and the Chilean cluster make one country ~30% of world supply; SX-EW technology unlocks oxide ores." },
      { era: "2000s", title: "The China supercycle", text: "Chinese urbanization triples prices; the industry sprints, overbuilds, and hands the 2010s a hangover." },
      { era: "2016-2020", title: "Discipline and starvation", text: "Post-bust austerity slashes exploration and project pipelines, planting today's scarcity." },
      { era: "2021-present", title: "Electrification deficit era", text: "EVs, grids, and AI datacenters lift demand while grade decline and permitting throttle supply; the LME prints a record $14,527/t (Jan 2026), majors merge ($53B Anglo-Teck), and smelters pay $0 to process concentrate." }
    ],
    trends: [
      { title: "Structural deficit forecasts", direction: "up", text: "S&P Global (Jan 2026) sees demand climbing from ~28Mt toward 42Mt by 2040 with a ~10Mt annual shortfall within 15 years absent new mines; the gap is the industry's central investment thesis." },
      { title: "Permitting as the bottleneck", direction: "shift", text: "The constraint moved from geology to politics: ~17-year lead times, resource nationalism, and community opposition gate nearly every project." },
      { title: "M&A over exploration", direction: "up", text: "Majors buy copper exposure rather than find it: the $53B Anglo American-Teck merger of equals (Sept 2025) creates a top-5 producer with 70%+ copper exposure, because acquiring tonnes costs less and takes decades less than developing them." },
      { title: "The smelter squeeze", direction: "down", text: "Chinese smelter overcapacity drove the 2026 TC/RC benchmark to $0/t (spot fees negative since 2024); Chinese smelters announced 10%+ output cuts for 2026 to force a rebalance." },
      { title: "AI and grid demand kicker", direction: "up", text: "BloombergNEF projects ~400kt/yr of AI datacenter copper demand over the next decade and power-transmission consumption nearly doubling by 2035: a demand leg that did not exist in prior cycles." }
    ],
    outlook: "The most conviction-heavy bull story in commodities, with the usual commodity caveat: every deficit forecast assumes demand arrives on schedule and supply stays as constrained as it looks. Record prices ($14,527/t LME high in Jan 2026, ~$13,400/t mid-2026), a $0 treatment-charge benchmark, and majors paying $30,000+ per tonne of production in M&A all say the supply side has already voted. Chinese construction weakness and substitution argue for patience. Both have been right in alternating years."
  },

  structure: {
    suppliers: [
      { name: "Equipment makers (Caterpillar, Komatsu, Epiroc)", note: "Trucks, drills, mills: mining's capex line" },
      { name: "Energy & water providers", note: "Mines are gigawatt customers; desalination feeds the Atacama" },
      { name: "Engineering firms (EPCs)", note: "Build the $10B projects" }
    ],
    producers: [
      { name: "Diversified majors (BHP, Rio, Glencore)", note: "Copper divisions inside global miners; Escondida (BHP-operated) did 1.35Mt in 2025" },
      { name: "Copper pure-plays (Freeport, Codelco, Southern, Antofagasta)", note: "Codelco (Chile, state) produced 1.33Mt in 2025" },
      { name: "Chinese & DRC operators (CMOC, Zijin, Ivanhoe)", note: "The fastest-growing supply bloc" }
    ],
    distributors: [
      { name: "LME / COMEX / SHFE markets", note: "Exchange-traded cathode sets the world price" },
      { name: "Traders (Glencore, Trafigura)", note: "Move concentrate and cathode, finance the flow" }
    ],
    customers: [
      { name: "Wire & cable makers", note: "The biggest first-use segment" },
      { name: "Grid operators & utilities", note: "Transmission buildouts are decade-long copper orders" },
      { name: "EV & electronics manufacturers", note: "Motors, batteries, boards, datacenters" },
      { name: "Construction", note: "Building wiring and plumbing" }
    ],
    regulators: [
      { name: "Host governments", note: "Royalties, permits, and occasionally expropriation; the fiscal terms ARE the investment case" },
      { name: "Environmental authorities", note: "Water, tailings, and biodiversity gate every new project" }
    ],
    capital: [
      { name: "Public equity & bond markets", note: "Majors fund from cash flow; juniors live on equity raises" },
      { name: "Streaming & royalty companies", note: "Alternative mine finance selling future output slices" },
      { name: "Chinese policy capital", note: "State-backed funding built the DRC copper belt" }
    ]
  },

  valueChain: {
    intro: "From 0.5% rock to 99.99% cathode to the wire in your wall. Margin lives at the mine; everything downstream is a processing toll, and in 2026 the toll hit zero.",
    stages: [
      { id: "exploration", name: "Exploration", what: "Finding economic deposits; 1-in-1,000 odds", players: "Juniors, majors' teams", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 1 },
        linksTo: ["venture-capital", "mining"],
        deeper: "Venture capital with drills: juniors burn equity on geology, and a single discovery hole can 100x a stock. Majors increasingly outsource discovery risk to this ecosystem, then acquire." },
      { id: "mining", name: "Mining & concentration", what: "Blast, haul, grind, float to ~25% concentrate", players: "Codelco, Freeport, BHP", valueCapture: 5,
        economics: { grossMargin: [30, 60], capitalIntensity: 5, concentration: 3 },
        linksTo: ["utilities", "manufacturing"],
        deeper: "Where the economics live: position on the cost curve (AISC) is destiny. First-quartile mines print cash at any price the industry survives; at $13,000/t against a ~$5,000/t first-quartile AISC, they print history." },
      { id: "smelting", name: "Smelting & refining", what: "Concentrate to 99.99% cathode", players: "Chinese smelters (~50%), Aurubis", valueCapture: 1,
        economics: { grossMargin: [0, 10], capitalIntensity: 4, concentration: 4 },
        linksTo: ["chemicals", "utilities"],
        deeper: "A toll business paid in treatment charges (TC/RCs), and the toll just vanished: the 2026 benchmark settled at $0/t, the lowest ever, with spot fees negative since 2024. Chinese overcapacity exported the margin squeeze worldwide while handing Beijing the mid-chain." },
      { id: "fabrication", name: "Fabrication", what: "Cathode to wire rod, tube, sheet", players: "Wire/cable majors", valueCapture: 2,
        economics: { grossMargin: [8, 15], capitalIntensity: 3, concentration: 2 },
        linksTo: ["manufacturing", "construction"],
        deeper: "Pass-through economics on LME price plus a fabrication premium; volume and working-capital management decide winners." },
      { id: "end-use", name: "End use", what: "Grids, EVs, buildings, datacenters", players: "Utilities, OEMs, hyperscalers", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 3, concentration: 2 },
        linksTo: ["utilities", "ev", "cloud", "construction", "data-infrastructure"],
        deeper: "The demand stack is diversifying away from Chinese construction toward grids, EVs (1.7Mt in 2025 heading toward ~4.3Mt by 2035, per BNEF), and AI datacenters: buyers with decade-long capex plans and little price sensitivity." },
      { id: "recycling", name: "Scrap & recycling", what: "Collecting and re-refining old copper", players: "Aurubis, Chinese secondaries, scrap networks", valueCapture: 3,
        economics: { grossMargin: [5, 15], capitalIntensity: 3, concentration: 2 },
        linksTo: ["waste-management", "steel"],
        deeper: "Copper is infinitely recyclable; scrap supplies ~30% of refined output (~5Mt of 2025's ~28Mt) and is the hidden swing producer: every price spike shakes loose basements, cables, and demolition metal." }
    ]
  },

  financials: {
    businessModel: [
      "A copper miner is a leveraged position on the copper price with an operating cost anchor: revenue = tonnes x LME price, cost = AISC, margin = the gap. At $13,000/t a first-quartile mine (~$5,000/t AISC) earns spectacular margins; the fourth quartile prays. Nobody controls the price, so the business is cost-curve position, volume growth, and capital discipline.",
      "The sector's sin cycle: high prices lead to mega-project approvals, simultaneous supply, price collapse, write-downs, austerity, shortage, repeat. The 2010s taught brutal capital discipline (dividends over expansion), which is precisely why the mid-2020s pipeline is thin, why majors now merge instead of build ($53B Anglo-Teck), and why the deficit thesis exists."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 10, capitalIntensity: 90, pricingPower: 15, cyclicality: 95, operatingLeverage: 80 },
    lines: [
      { label: "Revenue", note: "Tonnes x LME price; hedging is rare among majors (shareholders want the exposure)" },
      { label: "AISC margin", note: "Price minus all-in sustaining cost; the number that matters" },
      { label: "Growth capex", note: "$20,000 to $25,000 per tonne of new annual capacity; the deficit's price tag" },
      { label: "Royalties & taxes", note: "30% to 50% government take in main jurisdictions, and rising" },
      { label: "Shareholder returns", note: "The post-2016 religion: dividends and buybacks before mega-projects" }
    ],
    unitEconomics: {
      unit: "per tonne of cathode (mid-2026, first-quartile producer)",
      items: [
        { label: "LME price", value: "~$13,400/t", note: "Jul 2026; the Jan 2026 record was $14,527/t" },
        { label: "First-quartile AISC", value: "~$4,500 to $5,500/t", note: "the moat; fourth quartile sits above $8,000/t" },
        { label: "Cost to build a new tonne", value: "~$20,000 to $25,000", note: "greenfield capex per tonne of annual capacity" },
        { label: "Cost to buy a tonne (M&A)", value: "$30,000+", note: "recent deals; buying beats building on time, not price" }
      ]
    }
  },

  kpiRefs: ["mining-aisc", "mining-grade", "energy-reserve-life"],
  kpiLocal: [
    {
      id: "copper-tcrc", name: "TC/RCs (Treatment & Refining Charges)", industries: ["copper-mining"],
      definition: "The fee smelters earn to convert mine concentrate into refined cathode; the annual benchmark and spot prints gauge power between mines and smelters.",
      formula: "$/t of concentrate treated + cents/lb refined; benchmark set in annual mine-smelter negotiations",
      interpretation: "High TC/RCs = concentrate glut, smelters have leverage. Low or negative = mine scarcity. The 2026 benchmark settled at $0/t (2025: $21.25/t), the lowest ever, with spot fees negative since 2024: the clearest supply-scarcity signal the chain produces.",
      healthy: "Benchmark $60 to $90/t: balanced chain", warning: "Near zero or negative: concentrate famine (or, if spiking, a demand bust)" }
  ],

  health: {
    intro: "Miner health is cost-curve position, reserve runway, and balance-sheet strength to survive the trough that always comes.",
    pillars: [
      { name: "Cost curve position", weight: 30, metrics: "AISC quartile, grade trajectory, energy contracts", healthy: "First or second quartile with stable grades", warning: "Fourth quartile or fast grade decline" },
      { name: "Reserve life & pipeline", weight: 20, metrics: "R/P years, project options, jurisdiction quality", healthy: "> 20 years with permitted growth options", warning: "< 10 years or pipeline in fragile states" },
      { name: "Balance sheet", weight: 20, metrics: "Net debt / EBITDA at mid-cycle prices", healthy: "< 1x mid-cycle", warning: "> 2.5x (troughs kill the leveraged)" },
      { name: "Capital discipline", weight: 15, metrics: "Returns framework, project hurdle honesty", healthy: "Countercyclical investment, payout policy held", warning: "Peak-price mega-project approvals" },
      { name: "License to operate", weight: 15, metrics: "Community relations, water/tailings record, fiscal stability agreements", healthy: "Long records in stable jurisdictions", warning: "Active disputes; single-asset country risk" }
    ],
    scoringNote: "In commodities, the cost curve is 30% of the grade for a reason: it is the only moat geology sells."
  },

  valuation: {
    intro: "Asset-based methods dominate: miners are collections of finite ore bodies, not going concerns with terminal values.",
    methods: [
      { name: "P/NAV", use: "The sector standard: DCF each mine at consensus prices, sum, compare to price", avoid: "Ignoring jurisdiction discounts inside the NAV", strengths: "Asset-grounded; handles mine lives honestly", weaknesses: "NAV is hostage to the long-term price assumption", range: { low: 0.8, high: 1.3, asOf: 2026, note: "quality majors command premiums to NAV in deficit narratives" } },
      { name: "EV / EBITDA (mid-cycle)", use: "Relative screens across producers", avoid: "Spot-price EBITDA at either cycle extreme (spot 2026 EBITDA flatters everyone)", strengths: "Quick, comparable", weaknesses: "A commodity EBITDA multiple embeds a hidden price forecast", range: { low: 4, high: 8, asOf: 2026, note: "copper pure-plays price the deficit at the top of the band" } },
      { name: "EV per tonne of capacity/resource", use: "M&A math and junior comparisons", avoid: "Comparing across grade and stage", strengths: "Cuts through accounting entirely", weaknesses: "A tonne in Chile is not a tonne in a war zone", range: { low: 0, high: 0, asOf: 2026, note: "recent major M&A paid $30,000+ per tonne of production, versus ~$20,000 to $25,000 to build" } },
      { name: "FCF yield at conservative prices", use: "Stress-testing payouts: rerun cash flow at $8,000 to $9,000/t and see what survives", avoid: "Capitalizing spot-price cash flows as permanent", strengths: "Separates cycle luck from asset quality", weaknesses: "Choosing the 'conservative' price is itself the argument", range: { low: 5, high: 12, asOf: 2026, note: "% FCF yields at mid-cycle price decks; spot yields run far higher" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a copper producer quickly: mid-cycle EBITDA times a cycle-honest multiple, minus net debt. Rerun it at a $9,000/t deck before believing the answer.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 20, step: 0.5, value: 6, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 3, max: 10, step: 0.5, value: 6, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 1, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk holds copper as the highest-conviction structural long in commodities, expressed through cost-curve leaders and royalties rather than the metal itself, and sized as the violently cyclical, China-levered asset it remains. The thesis is supply arithmetic (~17-year lead times, grades down ~40% since 1991) meeting electrification demand; the risk is that the thesis is consensus at $13,000+/t.",
    debates: [
      { topic: "The deficit: inevitable or perpetually postponed?", bull: "Grades fall, permits take decades, smelters work for free, and majors pay $30,000+/t to BUY production versus ~$20,000 to build: the supply side has already voted. S&P Global sees ~42Mt of demand by 2040 against a pipeline that cannot deliver it; Grasberg's outage showed how one mine can move the world price.", bear: "Deficit forecasts have been 5 years away for 15 years: scrap supply surges at high prices (it is ~30% of refined output already), substitution accelerates above $13,000/t, and Chinese demand, half the market, is tied to a property sector in structural decline. Record prices are already rationing the marginal buyer." },
      { topic: "China: floor or trapdoor?", bull: "Grid capex and EVs already replaced property as the demand engine: China's copper use keeps growing through the construction bust, and stimulus always finds copper-intensive channels.", bear: "Manufacturing plus grid cannot forever offset the largest construction downturn in modern history; inventory cycles amplify every wobble, and the market's marginal buyer sets the price on the way down too." },
      { topic: "Resource nationalism: priced or underpriced?", bull: "Royalty regimes stabilized post-2023 (Chile's deal), and scarcity gives quality jurisdictions pricing power: the political premium is the moat for incumbent producers.", bear: "Every deficit year raises the government take: Panama closed a top-10 mine overnight (Cobre Panama), Peru cycles through crises, Indonesia flexes on Grasberg's export terms, and the DRC concentration in growth supply is itself the risk." }
    ],
    cycle: {
      where: "Late-cycle scarcity pricing: LME printed a record $14,527/t in January 2026 and holds ~$13,400/t mid-year, the 2026 TC/RC benchmark sits at $0 (mines hold all the chain power), Grasberg's recovery runs into 2028, and consensus sees the refined deficit widening to ~316kt in 2026 from ~249kt in 2025.",
      drivers: "Chinese demand (~55%), grid and EV buildouts, AI datacenter orders, mine supply disruptions (Grasberg is the template), scrap elasticity, and the dollar.",
      leads: [
        "TC/RCs (smelter treatment charges): the 2026 benchmark hit $0/t, the chain's clearest scarcity signal",
        "LME + SHFE + COMEX combined inventories vs seasonal norms",
        "China grid-investment announcements and monthly PMIs",
        "Producer quarterly reports: guidance cuts ARE the supply thesis arriving",
        "COMEX-LME price spread: tariff and squeeze risk made visible (blew out to records in 2025)"
      ]
    },
    exposure: [
      { vehicle: "Pure plays (Freeport class)", note: "The equity beta: 2x to 3x the metal's move, both directions" },
      { vehicle: "Diversified majors (BHP class)", note: "Copper growth inside iron-ore cash flows: the lower-octane expression" },
      { vehicle: "Royalty & streaming companies", note: "Cost-curve immunity: price upside without opex inflation" },
      { vehicle: "Futures / physical ETPs", note: "The clean macro expression; contango costs carry" },
      { vehicle: "Developers & juniors", note: "The option book on the incentive price: mostly expires worthless, occasionally 10x" }
    ],
    catalysts: [
      { when: "China stimulus announcements (Politburo meetings, Two Sessions in March)", what: "The demand-side gap risk in both directions" },
      { when: "Quarterly producer reports (Jan/Apr/Jul/Oct)", what: "Guidance cuts have been the supply story's recurring proof; Grasberg restart milestones are the current tape" },
      { when: "October (LME Week)", what: "The industry marks its book and sets the narrative for the year" },
      { when: "Annual TC/RC benchmark negotiations (Q4)", what: "Mine-vs-smelter power made public: 2026 settled at $0/t; Japanese smelters now want their own benchmark" }
    ],
    data: [
      { series: "LME stocks & prices", source: "lme.com (free daily)", why: "The market's inventory truth" },
      { series: "ICSG monthly balance", source: "icsg.org (free)", why: "Global supply-demand accounting" },
      { series: "Cochilco statistics", source: "cochilco.cl (free)", why: "Chilean production: nearly a quarter of world supply" },
      { series: "China PMI + grid capex", source: "NBS / SGCC releases (free)", why: "The demand engine's dashboard" },
      { series: "USGS Mineral Commodity Summaries", source: "usgs.gov (free annual)", why: "Mine production and reserves, the primary count" }
    ],
    playbook: [
      { regime: "Inflation", behavior: "Strong hedge: copper IS the input cost; real-asset bid arrives with every CPI surprise." },
      { regime: "Recession (global)", behavior: "Down 30%+ historically; the China-shaped exception: Beijing stimulus has twice turned global recessions into copper rallies." },
      { regime: "Rates / dollar", behavior: "Dollar strength is the headwind (inverse correlation ~0.6); rate cuts are a bid via both dollar and construction." },
      { regime: "Risk-off", behavior: "High-beta commodity: sold first with equities, but physical tightness (backwardation, zero TC/RCs) cushions crashes that inventory gluts would amplify." }
    ]
  },

  players: [
    { name: "Codelco", role: "Largest single producer (state-owned)", country: "CL", real: true, note: "1.33Mt in 2025; Chile's crown jewel, fighting grade decline with $40B of reinvestment" },
    { name: "BHP", role: "Escondida operator, top diversified major", country: "AU", real: true, note: "Escondida did 1.35Mt in 2025, the world's largest mine; copper is BHP's stated growth priority" },
    { name: "Freeport-McMoRan", role: "Largest listed pure-play", country: "US", real: true, note: "Grasberg's operator; the Sept 2025 mud rush cut output (460kt in 2025), full recovery ~early 2028" },
    { name: "Glencore", role: "Producer + the dominant trader", country: "CH", real: true, note: "Mines it and moves it: the physical market's information edge" },
    { name: "Anglo American + Teck", role: "Merging into Anglo Teck", country: "CA", real: true, note: "$53B merger of equals (Sept 2025): a top-5 producer, 70%+ copper, closing 2026-27" },
    { name: "Zijin Mining", role: "China's acquisitive champion", country: "CN", real: true, note: "Serbia, Tibet, DRC: the fastest external growth in the sector" },
    { name: "CMOC", role: "DRC's biggest operator", country: "CN", real: true, note: "Tenke and Kisanfu made it the decade's fastest-growing producer" },
    { name: "Ivanhoe Mines", role: "The growth story", country: "CA", real: true, note: "Kamoa-Kakula (DRC): the highest-grade major new mine on Earth" }
  ],

  geography: [
    { country: "CL", role: "~23% of world mine supply (5.3Mt in 2025)", note: "Escondida + Codelco cluster; water and grade are the constraints" },
    { country: "PE", role: "~10% of supply", note: "World-class deposits, recurring social conflict" },
    { country: "CD", role: "Fastest-growing supply + cobalt", note: "Highest grades on Earth; highest political risk premium" },
    { country: "CN", role: "~50% of smelting, ~55% of demand", note: "Controls the mid-chain and the demand signal" },
    { country: "ID", role: "Grasberg + a smelting push", note: "Export rules force domestic refining; one mine's outage moved the world price" },
    { country: "US", role: "Producer and the permitting cautionary tale", note: "Arizona's giants age while Resolution waits decades; 2025 tariffs split COMEX from the world price" }
  ],

  cycles: [
    { year: 2008, title: "GFC collapse", kind: "bust", text: "Price falls ~65% in months; leveraged developers die. Lesson: liquidity evaporates exactly when miners need it." },
    { year: 2011, title: "Supercycle peak", kind: "boom", text: "$10,000/t funds a mega-project spree that haunts the decade. Lesson: the top of the cycle is when discipline matters most." },
    { year: 2016, title: "The bottom", kind: "bust", text: "$4,300/t; balance-sheet repair becomes religion. Lesson: austerity plants the next shortage." },
    { year: 2024, title: "Record highs on thin supply", kind: "boom", text: "$11,000+/t intraday records as deficit forecasts meet a starved pipeline. Lesson: 15-year supply lags mean today's price cannot summon tomorrow's mine." },
    { year: 2025, title: "Grasberg and the $14,500 print", kind: "shift", text: "A mud rush halts the world's second-biggest mine in September; by January 2026 the LME prints a record $14,527/t and smelters accept $0 treatment charges. Lesson: when supply concentrates in a few aging giants, one accident reprices the planet." }
  ],

  risks: [
    { name: "China construction demand", severity: 4, likelihood: 3, transmission: "Property weakness -> construction copper demand falls -> China (~55% of demand) buys less -> price and every producer's cash flow follow." },
    { name: "Resource nationalism", severity: 3, likelihood: 4, transmission: "Deficit headlines -> governments raise royalties or freeze permits (Chile, Peru, DRC, Indonesia) -> NAVs reprice overnight -> the supply the deficit needs gets deterred." },
    { name: "Substitution & thrifting", severity: 3, likelihood: 3, transmission: "Sustained $13,000+/t -> cable makers requalify aluminum and designers thrift copper content -> demand erodes quietly and permanently at the margin." },
    { name: "Water & community conflict", severity: 3, likelihood: 4, transmission: "Atacama water stress or a tailings incident -> protests and court orders -> world-scale mines halt for years (the Cobre Panama template)." },
    { name: "Operational catastrophe at a mega-mine", severity: 4, likelihood: 3, transmission: "Aging giants + deeper ore -> a Grasberg-style mud rush or pit failure -> 500kt+ vanishes from supply -> price spikes, but the operator's equity and guidance crater." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Copper carries electricity better than anything affordable, so it is inside every wire, motor, and charger. Miners dig rock that is barely 1% copper, purify it to 99.99%, and sell it at a world price set on metal exchanges. More electrification means more copper, and the world mined about 23Mt of it in 2025."] },
    L2: { title: "Intermediate", text: ["The industry: giant, decades-old mines in Chile, Peru, and the DRC; a smelting middle dominated by China; and demand led by construction, grids, and now datacenters. Prices swing hard because supply takes 15+ years to add while demand moves yearly: the LME hit a record $14,527/t in January 2026. Producers win by being low-cost, not by controlling price."] },
    L3: { title: "Advanced", text: ["The analytical toolkit: cost curves (AISC quartiles), grade decline (~40% at legacy mines since 1991), incentive prices, scrap elasticity (~30% of refined supply), and TC/RCs as the mine-vs-smelter power gauge (2026 benchmark: $0/t, the lowest ever). Equities trade on P/NAV; the NAV's long-term price assumption is where every argument actually lives."] },
    L4: { title: "Expert", text: ["The current regime: an electrification demand step-change (S&P Global sees ~42Mt by 2040) meeting a pipeline starved by a decade of discipline and permitting drag, with majors merging ($53B Anglo-Teck) because buying production at $30,000+/t still beats a 17-year build. Hedge the thesis: Chinese property, substitution above $13,000/t, and scrap surges have repeatedly delayed 'inevitable' shortages, and spot prices already embed a lot of deficit."] },
    L5: { title: "Institutional", text: ["Allocator's frame: copper is the highest-conviction structural long in commodities and still a violently cyclical asset; size it as such. Express through cost-curve leaders and royalty structures for durability, developers for optionality, and watch the true leading indicators: treatment charges (now $0), Chinese grid orders, Grasberg-class supply disruptions, and the exchange inventory-to-consumption ratio. The uncomfortable question at $13,000+/t is not whether the deficit is real but how much of it is already in the price."] }
  },

  quiz: [
    { q: "Why do copper deficits take years to resolve?", choices: ["Nobody wants to mine", "New mines average ~17 years from discovery to production", "Copper cannot be recycled", "Prices are regulated"], answer: 1, explain: "The supply lag is the industry's defining fact: no price today can deliver a new tier-one mine before the late 2030s." },
    { q: "A miner's most durable advantage is:", choices: ["A famous brand", "First-quartile position on the cost curve", "A large marketing team", "Hedging everything"], answer: 1, explain: "Nobody controls the LME price; being cheaper than the marginal producer is the only moat geology sells." },
    { q: "An EV versus a combustion car uses roughly:", choices: ["The same copper", "Half the copper", "3 to 4x the copper", "No copper"], answer: 2, explain: "Motors, batteries, and wiring make EVs a structural demand accelerant: BNEF sees EV copper demand rising from 1.7Mt (2025) toward 4.3Mt by 2035, before counting chargers and grid upgrades." },
    { q: "Majors are buying copper companies rather than building mines because:", choices: ["Regulation requires it", "Acquiring production is cheaper per tonne of time and skips the permitting decade", "There is no more copper", "Interest rates are zero"], answer: 1, explain: "Recent deals paid $30,000+ per tonne of production versus ~$20,000 to $25,000 to build; the $53B Anglo-Teck merger (2025) is the thesis at maximum scale." },
    { q: "The 2026 TC/RC benchmark (the fee smelters earn) settled at:", choices: ["$100/t, a record high", "$0/t, the lowest ever: mines hold all the power over smelters", "$50/t, the long-run average", "It was abolished"], answer: 1, explain: "Chinese smelter overcapacity chasing scarce concentrate drove the benchmark from $21.25/t (2025) to zero, with spot fees negative since 2024: the chain's loudest scarcity signal." },
    { q: "The September 2025 Grasberg mud rush mattered globally because:", choices: ["Grasberg is a small mine", "Supply is so concentrated in a few aging giants that one accident helped drive the LME to a record $14,527/t", "It increased supply", "It only affected gold"], answer: 1, explain: "One mine's outage (recovery runs to ~2028) removed enough supply to reprice the world: concentration is the market's hidden fragility." },
    { q: "Scrap matters to the copper balance because it:", choices: ["Is illegal in most countries", "Supplies ~30% of refined output and surges when prices spike, acting as the hidden swing producer", "Only works for aluminum", "Is lower quality forever"], answer: 1, explain: "Copper is infinitely recyclable; high prices shake loose cables, pipes, and demolition metal, which is one reason 'inevitable' deficits keep getting postponed." },
    { q: "China's grip on the copper chain is best described as:", choices: ["It mines most of the world's copper", "It smelts ~50% of concentrate and buys ~55% of the metal: it controls the mid-chain and the demand signal", "It sets LME rules", "It has no role"], answer: 1, explain: "China mines relatively little but dominates processing and consumption: both the margin squeeze (zero TC/RCs) and the demand cycle run through Beijing." }
  ],

  sources: [
    { name: "USGS Mineral Commodity Summaries (copper, 2026)", url: "https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-copper.pdf", feeds: "production, reserves" },
    { name: "ICSG statistics", url: "https://www.icsg.org", feeds: "supply/demand balances" },
    { name: "LME copper data", url: "https://www.lme.com/metals/non-ferrous/lme-copper", feeds: "prices, inventories" },
    { name: "S&P Global copper supply study (Jan 2026)", url: "https://press.spglobal.com/2026-01-08-Substantial-Shortfall-in-Copper-Supply-Widens-as-the-Race-for-AI-and-Growing-Defense-Spending-Add-to-Accelerating-Demand,-New-S-P-Global-Study-Finds", feeds: "demand forecasts, shortfall" }
  ]
};
