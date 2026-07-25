/* Industry Atlas - COPPER (profile-depth module) */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["copper-mining"] = {
  meta: {
    id: "copper-mining", name: "Copper", sector: "materials", status: "profile",
    tagline: "The metal of electrification: every grid, motor, and datacenter is a copper order in disguise.",
    marketSize: { value: 250, unit: "$B", asOf: 2024, note: "~22Mt mined × ~$9,500/t refined value chain" },
    cagr: { value: 4, range: [3, 6], horizon: "2024-2035" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 5, regulation: 4, disruption: 1
  },
  overview: {
    definition: "Copper is the economy's conductor: the second-best electrical conductor known (after silver) at 1/100th the price. The industry finds, mines, concentrates, smelts, and refines it, then feeds it into wires, motors, grids, and machines.",
    howItWorks: [
      "Copper starts as rock containing less than 1% metal. Mines blast and haul ore, mills grind it to powder and float out a ~25% concentrate, smelters burn it to ~99% blister, and refineries electro-purify to 99.99% cathode traded on the LME. From discovery to first production averages 15+ years; a tier-one mine costs $5B to $15B and runs for 30 to 100 years.",
      "Supply is geology plus politics: half of output comes from Chile, Peru, the DR Congo, and a handful of giant, aging mines. Ore grades have fallen for a century (new projects average ~0.45% versus 0.8%+ a generation ago), so each tonne takes more rock, energy, and water, pushing the cost curve structurally higher.",
      "Demand is electrification itself: construction wiring (~28%), grids (~28%), machinery, and now the accelerants: an EV uses ~80kg versus ~23kg for a combustion car, and AI datacenters add tonnes per megawatt. Price forms where the demand line crosses the cost curve's steep end; because new supply takes 15 years, structural deficits resolve through price spikes, substitution at the margin (aluminum), and scrap."
    ],
    history: [
      { era: "1900s-1970s", title: "The majors era", text: "Anaconda, Kennecott, and state expropriations (Chile 1971) define the century; copper politics topple governments." },
      { era: "1980s-1990s", title: "Chile's ascent", text: "Escondida (1990) and the Chilean cluster make one country ~30% of world supply; SX-EW technology unlocks oxide ores." },
      { era: "2000s", title: "The China supercycle", text: "Chinese urbanization triples prices; the industry sprints, overbuilds, and hands the 2010s a hangover." },
      { era: "2016-2020", title: "Discipline and starvation", text: "Post-bust austerity slashes exploration and project pipelines, planting today's scarcity." },
      { era: "2021-present", title: "Electrification deficit era", text: "EVs, grids, and datacenters lift long-run demand forecasts while permitting delays and grade decline throttle supply; majors turn to M&A because buying mines is cheaper than building them." }
    ],
    trends: [
      { title: "Structural deficit forecasts", direction: "up", text: "Energy-transition scenarios show demand reaching ~1.5x current supply by 2035; the gap is the industry's central investment thesis." },
      { title: "Permitting as the bottleneck", direction: "shift", text: "The constraint moved from geology to politics: 15 to 20 year timelines, resource nationalism, and community opposition gate nearly every project." },
      { title: "M&A over exploration", direction: "up", text: "Majors buy copper exposure (or entire rivals) because acquiring ounces costs less and takes decades less than finding them." }
    ],
    outlook: "The most conviction-heavy bull story in commodities, with the usual commodity caveat: every deficit forecast assumes demand arrives on schedule and supply stays as constrained as it looks. The cost curve's steepening and the 15-year supply lag argue for structurally higher prices; Chinese construction weakness and substitution argue for patience. Both have been right in alternating years."
  },
  structure: {
    suppliers: [
      { name: "Equipment makers (Caterpillar, Komatsu, Epiroc)", note: "Trucks, drills, mills: mining's capex line" },
      { name: "Energy & water providers", note: "Mines are gigawatt customers; desalination feeds the Atacama" },
      { name: "Engineering firms (EPCs)", note: "Build the $10B projects" }
    ],
    producers: [
      { name: "Diversified majors (BHP, Rio, Glencore)", note: "Copper divisions inside global miners" },
      { name: "Copper pure-plays (Freeport, Codelco, Southern, Antofagasta)", note: "Codelco (Chile, state) is the largest producer" },
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
    intro: "From 0.5% rock to 99.99% cathode to the wire in your wall. Margin lives at the mine; everything downstream is a processing toll.",
    stages: [
      { id: "exploration", name: "Exploration", what: "Finding economic deposits; 1-in-1,000 odds", players: "Juniors, majors' teams", valueCapture: 2, economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 1 }, linksTo: ["venture-capital"], deeper: "Venture capital with drills: juniors burn equity on geology, and a single discovery hole can 100x a stock. Majors increasingly outsource discovery risk to this ecosystem, then acquire." },
      { id: "mining", name: "Mining & concentration", what: "Blast, haul, grind, float to ~25% concentrate", players: "Codelco, Freeport, BHP", valueCapture: 5, economics: { grossMargin: [30, 55], capitalIntensity: 5, concentration: 3 }, linksTo: ["utilities", "manufacturing"], deeper: "Where the economics live: position on the cost curve (AISC) is destiny. First-quartile mines print cash at any price the industry survives; the marginal tonne sets the floor." },
      { id: "smelting", name: "Smelting & refining", what: "Concentrate to 99.99% cathode", players: "Chinese smelters (~50%), Aurubis", valueCapture: 2, economics: { grossMargin: [5, 15], capitalIntensity: 4, concentration: 4 }, linksTo: ["chemicals"], deeper: "A toll business paid in treatment charges (TC/RCs); Chinese overcapacity has crushed those fees to record lows, exporting the margin squeeze worldwide, and giving China leverage over the mid-chain." },
      { id: "fabrication", name: "Fabrication", what: "Cathode to wire rod, tube, sheet", players: "Wire/cable majors", valueCapture: 2, economics: { grossMargin: [8, 15], capitalIntensity: 3, concentration: 2 }, linksTo: ["manufacturing", "construction"], deeper: "Pass-through economics on LME price plus a fabrication premium; volume and working-capital management decide winners." },
      { id: "end-use", name: "End use & scrap", what: "Grids, EVs, buildings; then recycling", players: "Utilities, OEMs, scrap networks", valueCapture: 3, economics: { grossMargin: [0, 0], capitalIntensity: 3, concentration: 2 }, linksTo: ["utilities", "ev", "cloud", "construction"], deeper: "Copper is infinitely recyclable; scrap supplies ~30% of demand and is the hidden swing producer when prices spike." }
    ]
  },
  financials: {
    businessModel: [
      "A copper miner is a leveraged position on the copper price with an operating cost anchor: revenue = tonnes × LME price, cost = AISC, margin = the gap. At $9,500/t a first-quartile mine ($4,500/t AISC) earns spectacular margins; the fourth quartile prays. Nobody controls the price, so the business is cost-curve position, volume growth, and capital discipline.",
      "The sector's sin cycle: high prices → mega-project approvals → simultaneous supply → price collapse → write-downs → austerity → shortage → repeat. The 2010s taught brutal capital discipline (dividends over expansion), which is precisely why the mid-2020s pipeline is thin and the deficit thesis exists."
    ],
    fingerprint: { grossMargin: 42, recurringRevenue: 10, capitalIntensity: 90, pricingPower: 15, cyclicality: 95, operatingLeverage: 80 },
    lines: [
      { label: "Revenue", note: "Tonnes × LME price; hedging is rare among majors (shareholders want the exposure)" },
      { label: "AISC margin", note: "Price minus all-in sustaining cost; the number that matters" },
      { label: "Growth capex", note: "$15,000 to $25,000 per tonne of new annual capacity; the deficit's price tag" },
      { label: "Royalties & taxes", note: "30% to 50% government take in main jurisdictions, and rising" },
      { label: "Shareholder returns", note: "The post-2016 religion: dividends and buybacks before mega-projects" }
    ]
  },
  kpiRefs: ["mining-aisc", "mining-grade", "energy-reserve-life"],
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
      { name: "P/NAV", use: "The sector standard: DCF each mine at consensus prices, sum, compare to price", avoid: "Ignoring jurisdiction discounts inside the NAV", strengths: "Asset-grounded; handles mine lives honestly", weaknesses: "NAV is hostage to the long-term price assumption", range: { low: 0.7, high: 1.2, asOf: 2024, note: "quality majors command premiums to NAV in deficit narratives" } },
      { name: "EV / EBITDA (mid-cycle)", use: "Relative screens across producers", avoid: "Spot-price EBITDA at either cycle extreme", strengths: "Quick, comparable", weaknesses: "A commodity EBITDA multiple embeds a hidden price forecast", range: { low: 4, high: 8, asOf: 2024, note: "copper pure-plays price the deficit at the top of the band" } },
      { name: "EV per tonne of capacity/resource", use: "M&A math and junior comparisons", avoid: "Comparing across grade and stage", strengths: "Cuts through accounting entirely", weaknesses: "A tonne in Chile ≠ a tonne in a war zone", range: { low: 0, high: 0, asOf: 2024, note: "recent major M&A paid $30,000+ per tonne of production, versus ~$20,000 to build" } }
    ]
  },
  pmView: {
    positioning: "The desk holds copper as the highest-conviction structural long in commodities, expressed through cost-curve leaders and royalties rather than the metal itself, and sized as the violently cyclical, China-levered asset it remains. The thesis is supply arithmetic (15-year lags, falling grades) meeting electrification demand; the risk is that the thesis is consensus.",
    debates: [
      { topic: "The deficit: inevitable or perpetually postponed?", bull: "Grades fall, permits take decades, majors pay $30,000+/t to BUY production versus ~$20,000 to build: the supply side has already voted. AI datacenters, grids, and EVs stack demand the pipeline cannot meet by the late 2020s.", bear: "Deficit forecasts have been 5 years away for 15 years: scrap supply surges at high prices, substitution (aluminum) caps spikes above ~$10,000/t, and Chinese demand: 55% of the market: is tied to a property sector in structural decline." },
      { topic: "China: floor or trapdoor?", bull: "Grid capex and EVs already replaced property as the demand engine: China's copper use keeps growing through the construction bust, and stimulus always finds copper-intensive channels.", bear: "Manufacturing plus grid cannot forever offset the largest construction downturn in modern history; inventory cycles amplify every wobble, and the market's marginal buyer sets the price on the way down too." },
      { topic: "Resource nationalism: priced or underpriced?", bull: "Royalty regimes stabilized post-2023 (Chile's deal), and scarcity gives quality jurisdictions pricing power: the political premium is the moat for incumbent producers.", bear: "Every deficit year raises the government take: Panama closed a top-10 mine overnight (Cobre Panamá), Peru cycles through crises, and the DRC concentration in the growth supply is itself the risk." }
    ],
    cycle: {
      where: "Deficit narrative meeting soft Chinese reality: prices range-bound at historically high levels, treatment charges at record lows (concentrate scarcity), exchange inventories the tie-breaker quarter to quarter.",
      drivers: "Chinese demand (~55%), grid and EV buildouts, mine supply disruptions (guidance misses are chronic), scrap elasticity, and the dollar.",
      leads: [
        "TC/RCs (smelter treatment charges): record lows = mine scarcity, the chain's clearest signal",
        "LME + SHFE + COMEX combined inventories vs seasonal norms",
        "China grid-investment announcements and monthly PMIs",
        "Producer quarterly reports: guidance cuts ARE the supply thesis arriving",
        "Chilean/Peruvian/DRC political calendars: supply risk on a schedule"
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
      { when: "Quarterly producer reports (Jan/Apr/Jul/Oct)", what: "Guidance cuts have been the supply story's recurring proof" },
      { when: "October (LME Week)", what: "The industry marks its book and sets the narrative for the year" },
      { when: "Annual TC/RC benchmark negotiations (Q4)", what: "Mine-vs-smelter power balance made public" }
    ],
    data: [
      { series: "LME stocks & prices", source: "lme.com (free daily)", why: "The market's inventory truth" },
      { series: "ICSG monthly balance", source: "icsg.org (free)", why: "Global supply-demand accounting" },
      { series: "Cochilco statistics", source: "cochilco.cl (free)", why: "Chilean production: a quarter of world supply" },
      { series: "China PMI + grid capex", source: "NBS / SGCC releases (free)", why: "The demand engine's dashboard" }
    ],
    playbook: [
      { regime: "Inflation", behavior: "Strong hedge: copper IS the input cost; real-asset bid arrives with every CPI surprise." },
      { regime: "Recession (global)", behavior: "Down 30%+ historically; the China-shaped exception: Beijing stimulus has twice turned global recessions into copper rallies." },
      { regime: "Rates / dollar", behavior: "Dollar strength is the headwind (inverse correlation ~0.6); rate cuts are a bid via both dollar and construction." },
      { regime: "Risk-off", behavior: "High-beta commodity: sold first with equities, but physical tightness (backwardation) cushions crashes that inventory gluts would amplify." }
    ]
  },

  players: [
    { name: "Codelco", role: "Largest producer (state-owned)", country: "CL", real: true, note: "Chile's crown jewel, fighting grade decline with $40B of reinvestment" },
    { name: "Freeport-McMoRan", role: "Largest listed pure-play", country: "US", real: true, note: "Grasberg's operator; the equity market's copper proxy" },
    { name: "BHP / Rio Tinto / Glencore", role: "Diversified majors", country: "AU", real: true, note: "Copper is every major's stated growth priority" },
    { name: "Zijin / CMOC / Ivanhoe", role: "The new supply bloc", country: "CN", real: true, note: "DRC and Tibetan growth engines" }
  ],
  geography: [
    { country: "CL", role: "~24% of world mine supply", note: "Escondida + Codelco cluster; water and grade are the constraints" },
    { country: "PE", role: "~10% of supply", note: "World-class deposits, recurring social conflict" },
    { country: "CD", role: "Fastest-growing supply + cobalt", note: "Highest grades on Earth; highest political risk premium" },
    { country: "CN", role: "~50% of smelting, ~55% of demand", note: "Controls the mid-chain and the demand signal" },
    { country: "AU", role: "Majors' home base", note: "Olympic Dam and the M&A war chest" }
  ],
  cycles: [
    { year: 2008, title: "GFC collapse", kind: "bust", text: "Price falls ~65% in months; leveraged developers die. Lesson: liquidity evaporates exactly when miners need it." },
    { year: 2011, title: "Supercycle peak", kind: "boom", text: "$10,000/t funds a mega-project spree that haunts the decade. Lesson: the top of the cycle is when discipline matters most." },
    { year: 2016, title: "The bottom", kind: "bust", text: "$4,300/t; balance-sheet repair becomes religion. Lesson: austerity plants the next shortage." },
    { year: 2024, title: "Record highs on thin supply", kind: "boom", text: "$11,000+/t intraday records as deficit forecasts meet a starved pipeline. Lesson: 15-year supply lags mean today's price cannot summon tomorrow's mine." }
  ],
  risks: [
    { name: "China construction demand", severity: 4, likelihood: 3, transmission: "China is ~55% of demand; property weakness flows through grids-vs-construction mix into price, then into every producer's cash flow." },
    { name: "Resource nationalism", severity: 3, likelihood: 4, transmission: "Royalty hikes and permit freezes in Chile/Peru/DRC reprice NAVs overnight and deter exactly the supply the deficit needs." },
    { name: "Substitution & thrifting", severity: 2, likelihood: 3, transmission: "Above ~$10,000/t, aluminum substitutes in cables and designers thrift copper content, capping spikes." },
    { name: "Water & community conflict", severity: 3, likelihood: 4, transmission: "Atacama water politics and tailings incidents can halt world-scale mines for years." }
  ],
  levels: {
    L1: { title: "Beginner", text: ["Copper carries electricity better than anything affordable, so it is inside every wire, motor, and charger. Miners dig rock that is barely 1% copper, purify it to 99.99%, and sell it at a world price set on metal exchanges. More electrification means more copper."] },
    L2: { title: "Intermediate", text: ["The industry: giant, decades-old mines in Chile, Peru, and the DRC; a smelting middle dominated by China; and demand led by construction and grids. Prices swing hard because supply takes 15 years to add while demand moves yearly. Producers win by being low-cost, not by controlling price."] },
    L3: { title: "Advanced", text: ["The analytical toolkit: cost curves (AISC quartiles), grade decline, incentive prices (~$11,000/t to justify new builds), scrap elasticity, and TC/RC fees as the mine-vs-smelter power gauge. Equities trade on P/NAV; the NAV's long-term price assumption is where every argument actually lives."] },
    L4: { title: "Expert", text: ["The current regime: an electrification demand step-change meeting a pipeline starved by a decade of discipline and permitting drag, with majors paying more to buy production than to build it, the clearest deficit signal there is. Hedge the thesis: Chinese property, substitution above $10,000/t, and scrap surges have repeatedly delayed 'inevitable' shortages."] },
    L5: { title: "Institutional", text: ["Allocator's frame: copper is the highest-conviction structural long in commodities and still a violently cyclical asset; size it as such. Express through cost-curve leaders and royalty structures for durability, developers for optionality, and watch the true leading indicators: treatment charges, Chinese grid orders, permitting reform, and the exchange inventory-to-consumption ratio."] }
  },
  quiz: [
    { q: "Why do copper deficits take years to resolve?", choices: ["Nobody wants to mine", "New mines take 15+ years from discovery to production", "Copper cannot be recycled", "Prices are regulated"], answer: 1, explain: "The supply lag is the industry's defining fact: no price today can deliver a new tier-one mine before the mid-2030s." },
    { q: "A miner's most durable advantage is:", choices: ["A famous brand", "First-quartile position on the cost curve", "A large marketing team", "Hedging everything"], answer: 1, explain: "Nobody controls the LME price; being cheaper than the marginal producer is the only moat geology sells." },
    { q: "An EV versus a combustion car uses roughly:", choices: ["The same copper", "Half the copper", "3 to 4x the copper (~80kg vs ~23kg)", "No copper"], answer: 2, explain: "Motors, batteries, and wiring make EVs a structural demand accelerant, before counting the chargers and grid upgrades." },
    { q: "Majors are buying copper companies rather than building mines because:", choices: ["Regulation requires it", "Acquiring production is cheaper and 15 years faster than developing it", "There is no more copper", "Interest rates are zero"], answer: 1, explain: "Recent deals paid $30,000+ per tonne of production versus ~$20,000+ to build, and skipped the permitting decade." },
    { q: "Record-low smelter treatment charges (TC/RCs) signal:", choices: ["Too much concentrate supply", "Concentrate scarcity: mines have the upper hand over smelters", "Falling copper demand", "Smelter monopoly power"], answer: 1, explain: "TC/RCs are the fee smelters earn; when mines are scarce, smelters bid the fee down to win feed, a live gauge of chain power." }
  ],
  sources: [
    { name: "USGS Mineral Commodity Summaries", url: "https://www.usgs.gov", feeds: "production, reserves" },
    { name: "ICSG statistics", url: "https://www.icsg.org", feeds: "supply/demand balances" },
    { name: "LME data", url: "https://www.lme.com", feeds: "prices, inventories" }
  ]
};
