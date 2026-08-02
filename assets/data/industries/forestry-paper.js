/* Industry Atlas - FORESTRY & PAPER (full module, research-backed)
 * Anchors: global paper & board production 464 Mt in 2024, +1.9% after 2 down years,
 * packaging ~2/3 of output, graphic paper declining ~2.1%/yr (IndexBox/Statista, 2024);
 * BHKP China $495/t and NBSK $690/t Aug 2025 (Fastmarkets/XP); Suzano cash cost R$832/t
 * Q2 2025; Suzano Cerrado line 2.55 Mt/yr started July 2024, R$22.2B capex, firm capacity
 * ~13.5 Mt/yr (Business Wire/EUWID); investable US timberland 80-90M acres worth
 * $100-200B, NCREIF index 443 properties ~$27.2B, 46 deals/940k acres in 2025 (Forisk/NCREIF);
 * IP closed $7.2B DS Smith deal Jan 31, 2025; Smurfit Westrock FY2025 sales $31.2B,
 * adj. EBITDA $4.9B (PaperAge/SEC); US mass timber construction market ~$390M in 2025
 * growing ~13%/yr to ~$1.07B by 2033 (Mark Spark Solutions / ResearchAndMarkets 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["forestry-paper"] = {
  meta: {
    id: "forestry-paper", name: "Forestry & Paper", sector: "materials", status: "full",
    tagline: "Trees compound at 5%/yr no matter what the Fed does; everything downstream of the stump is a commodity cycle wearing a green costume.",
    marketSize: { value: 550, unit: "$B", asOf: 2024, note: "global paper & paperboard market value (IndexBox, heading to ~$600B by 2035); 464 Mt produced in 2024; lumber, panels, and timberland sit on top of this" },
    cagr: { value: 1, range: [0.5, 2], horizon: "2024-2035" },
    maturity: "cyclical-mature", cyclicality: 4, capitalIntensity: 5, regulation: 3, disruption: 2
  },
  newsQuery: '(Suzano OR "pulp price" OR containerboard OR "International Paper" OR timberland OR "paper mill" OR "mass timber")',

  overview: {
    definition: "Forestry & paper runs from the seedling to the shipping box: growing and harvesting timber, sawing it into lumber, cooking it into pulp, forming it into paper and board, and converting it into packaging and tissue. It is three businesses in one label: a real asset (timberland), a pure cost-curve commodity (pulp), and a scale manufacturing industry (paper, board, and boxes).",
    howItWorks: [
      "Start at the stump. Timberland is the sector's bedrock asset: trees add volume and value biologically at roughly 5%/yr regardless of markets, and the owner chooses when to harvest, which makes timber the only commodity with a free storage option. In the US alone, Forisk estimates 80-90M investable acres worth $100B to $200B, held by TIMOs (timber investment managers running pension money), public timber REITs (Weyerhaeuser's ~10M acres lead), and family offices. The NCREIF Timberland Index tracks 443 institutional properties worth ~$27.2B and has run since 1987: this is a mature, appraisal-based asset class, not a frontier.",
      "The middle of the chain is pulp, the sector's purest commodity and its most brutal cost curve. Hardwood pulp (BHKP, mostly eucalyptus) and softwood pulp (NBSK) trade globally with China as the marginal buyer: in August 2025 BHKP sat near $495/t in China and NBSK near $690/t, trough-ish levels that squeezed high-cost producers. The curve is a hemisphere arbitrage: a Brazilian eucalyptus tree is harvestable in about 7 years versus 40+ for boreal softwood, so Brazilian cash costs (Suzano: R$832/t in Q2 2025, roughly $150/t) undercut Nordic and North American mills by hundreds of dollars. When prices fall, they fall toward Brazil's cost, and someone in the Northern Hemisphere closes a mill.",
      "Downstream, paper and board split into two opposite worlds. Graphic paper (newsprint, office, magazines) is in structural collapse, shrinking about 2.1%/yr as screens replace print: the demand never comes back, and the game is harvesting cash and converting machines. Packaging is the growth side: containerboard for e-commerce boxes, cartonboard, and tissue now make up roughly two thirds of the 464 Mt of paper and board the world produced in 2024 (a year that grew 1.9% after 2 down years). The box economy is consolidating fast: International Paper closed its $7.2B acquisition of DS Smith in January 2025 to integrate Europe, and Smurfit Westrock's first full post-merger year delivered $31.2B of sales and $4.9B of adjusted EBITDA while shutting ~600kt of high-cost capacity.",
      "The capital math explains the industry's behavior. A world-scale greenfield pulp line costs roughly $1,600 per annual tonne (Suzano's Cerrado project: R$22.2B for 2.55 Mt/yr, the largest single line ever built, started July 2024), takes years to permit and plant, and then runs for decades at near-full rates because the marginal tonne is cheap. So supply arrives in lumps, prices whipsaw around the cost curve, and only the lowest-cost quartile earns through the trough. Meanwhile the stump end quietly gains new demand: mass timber construction (US market ~$390M in 2025, compounding ~13%/yr) and carbon markets are slowly adding non-pulp reasons to own trees."
    ],
    history: [
      { era: "1840s-1950", title: "Paper industrializes", text: "Wood pulp replaces rags, the kraft process (1884) unlocks strong brown paper, and newsprint feeds the golden age of print; forests become industrial feedstock." },
      { era: "1950-1990", title: "The integrated giants", text: "US South pine plantations and Nordic mills build vertically integrated empires: land, pulp, paper, and boxes under one roof; containerboard rises with the shipping container." },
      { era: "1990-2010", title: "The great unbundling", text: "The internet begins killing graphic paper while integrated companies sell millions of timberland acres to TIMOs and convert to REITs: timberland becomes an institutional asset class with its own index." },
      { era: "2010-2020", title: "Eucalyptus and e-commerce", text: "Brazilian and Uruguayan plantation pulp resets the global cost curve; Amazon-era box demand replaces print as the volume story; China's National Sword (2018) rewires the recovered-fiber trade." },
      { era: "2020-present", title: "Scale or exit", text: "COVID whipsaws lumber and boxes, then a consolidation wave (Smurfit Westrock, IP-DS Smith) meets megaproject supply (Suzano's 2.55 Mt Cerrado line, 2024); mass timber and plastic substitution open new demand doors." }
    ],
    trends: [
      { title: "Graphic paper collapse", direction: "down", text: "Structural decline of ~2.1%/yr with no floor in sight: the playbook is harvest cash, close machines, or convert them to packaging grades." },
      { title: "The box economy", direction: "up", text: "Packaging is ~2/3 of global paper output and growing with e-commerce and plastic substitution; consolidation (IP-DS Smith at $7.2B, Smurfit Westrock at $31.2B sales) is concentrating pricing discipline." },
      { title: "Latin American cost reset", direction: "shift", text: "Suzano's 13.5 Mt/yr system and 7-year eucalyptus rotations keep dragging the pulp price deck toward Brazilian cash cost; each new megaline forces Northern closures." },
      { title: "Timberland as an asset class", direction: "up", text: "Values keep climbing while deal volume thins (46 US transactions, 940k acres in 2025): institutions prize the inflation-hedged, biology-powered return but struggle to underwrite at today's prices." },
      { title: "Wood construction & carbon", direction: "up", text: "Mass timber (US market ~$390M in 2025, ~13% CAGR, 18-story buildings now code-legal) plus carbon credits add new, non-cyclical reasons to own forests." }
    ],
    outlook: "A tale of two halves: downstream, packaging grows GDP-plus while graphic paper melts, and consolidation slowly converts a fragmented commodity into a disciplined oligopoly. Upstream, the pulp cost curve keeps shifting south (Cerrado could run ~2.7 Mt/yr from 2027 with no new capex) and timberland keeps re-rating as real-asset money hunts inflation protection with optionality on mass timber and carbon. The losers are known in advance: high-cost Northern Hemisphere capacity in shrinking grades. The winners own cheap fiber, cheap energy, or the land itself."
  },

  structure: {
    suppliers: [
      { name: "Seedling nurseries & silviculture", note: "Genetics matter: cloned eucalyptus is why Brazilian rotations run 7 years" },
      { name: "Forestry equipment (Deere, Ponsse, Komatsu Forest)", note: "Harvesters and forwarders: mechanized logging is capital, not labor" },
      { name: "Process chemicals & enzymes", note: "Caustic, chlorine dioxide, starch: the pulp mill is half chemistry plant" },
      { name: "Mill equipment (Valmet, ANDRITZ, Voith)", note: "An oligopoly of machine builders behind every new line, including Cerrado" },
      { name: "Energy & freight", note: "Mills are power plants (black liquor) and pulp travels 10,000 km to its buyer: both costs swing the spread" }
    ],
    producers: [
      { name: "Suzano", note: "World's largest market pulp producer: ~13.5 Mt/yr after the 2.55 Mt Cerrado startup (July 2024)" },
      { name: "International Paper + DS Smith", note: "Containerboard's consolidator: $7.2B deal closed Jan 2025, integration rate heading to ~90%" },
      { name: "Smurfit Westrock", note: "$31.2B FY2025 sales, $4.9B adjusted EBITDA: the other box giant, closing ~600kt of weak capacity" },
      { name: "Timber REITs & TIMOs (Weyerhaeuser, Rayonier, PotlatchDeltic)", note: "The landowners: ~10M acres at Weyerhaeuser alone" }
    ],
    distributors: [
      { name: "Paper merchants & packaging distributors", note: "Fragmented middle layer; big producers increasingly sell boxes direct" },
      { name: "Lumber yards & building-products dealers", note: "Home Depot to pro dealers: the housing channel for wood products" },
      { name: "Pulp traders & agents", note: "Intermediate the seaborne market between Latin mills and Asian buyers" }
    ],
    customers: [
      { name: "E-commerce, food & consumer goods", note: "Every shipped parcel and cereal box is containerboard or carton demand" },
      { name: "Construction & homebuilders", note: "Lumber, OSB, and now mass timber: housing starts are the demand tape" },
      { name: "Tissue & hygiene brands", note: "The steadiest fiber demand on Earth: recession-proof, population-driven" },
      { name: "Publishers & printers", note: "The shrinking legacy: graphic paper's remaining buyers, fewer every year" }
    ],
    regulators: [
      { name: "Forest certification (FSC, PEFC/SFI)", note: "Market access passports: uncertified fiber is increasingly unsellable to brands" },
      { name: "EU deforestation & packaging rules (EUDR, PPWR)", note: "Traceability mandates and fiber-vs-plastic rules reshape trade flows" },
      { name: "Trade authorities", note: "US-Canada softwood lumber duties: a 40-year dispute that reprices the border" },
      { name: "Environmental permitting (EPA, IBAMA, national agencies)", note: "Water, air, and plantation licensing gate every mill and every harvest plan" }
    ],
    capital: [
      { name: "Pension funds & endowments via TIMOs", note: "The original timberland buyers since the 1980s: patient, appraisal-based money" },
      { name: "Public equity (REITs and producers)", note: "WY, RYN, PCH for land; SUZ, IP for the industrial cycle" },
      { name: "Development banks & green bonds", note: "Plantation pulp megaprojects (R$22.2B Cerrado) tap sustainability-linked debt" }
    ]
  },

  valueChain: {
    intro: "From a 7-year-old eucalyptus to a next-day-delivery box. Value pools at the two ends: the land (scarce, appreciating, tax-advantaged) and the low-cost pulp line: the middle is a knife-fight over spread.",
    stages: [
      { id: "timberland", name: "Timberland & harvesting", what: "Growing, managing, and cutting the fiber", players: "Weyerhaeuser, Rayonier, TIMOs (Manulife, Nuveen class)", valueCapture: 4,
        economics: { grossMargin: [30, 50], capitalIntensity: 4, concentration: 2 },
        linksTo: ["real-estate", "agriculture", "asset-management", "carbon-markets"],
        deeper: "The return is biology plus optionality: trees grow through recessions, harvests can wait for price, and the land carries HBU (higher-and-better-use) and carbon upside. Forisk pegs the investable US universe at 80-90M acres worth $100-200B; values keep rising while 2025 saw just 46 deals for 940k acres: scarce supply meets patient capital." },
      { id: "wood-products", name: "Lumber & panels", what: "Sawmills, OSB, plywood, engineered wood", players: "West Fraser, Canfor, Weyerhaeuser Wood Products", valueCapture: 2,
        economics: { grossMargin: [5, 25], capitalIntensity: 3, concentration: 3 },
        linksTo: ["construction", "real-estate"],
        deeper: "The housing-cycle pure play: lumber went from ~$400 to ~$1,700 per thousand board feet in the 2021 superspike, then round-tripped. Sawmills are spread businesses (log cost in, lumber price out) with ferocious operating leverage. Mass timber (CLT) is the premium new lane: small today (~$390M US market) but growing ~13%/yr with building codes now allowing 18 stories." },
      { id: "pulp", name: "Market pulp", what: "Cooking wood into cellulose for sale", players: "Suzano, Arauco, CMPC, Paper Excellence", valueCapture: 4,
        economics: { grossMargin: [20, 45], capitalIntensity: 5, concentration: 4 },
        linksTo: ["chemicals", "shipping"],
        deeper: "The purest cost-curve trade in materials. Prices (BHKP $495/t China, Aug 2025) gravitate to the marginal producer's cash cost; Suzano's R$832/t makes it the price-setter's floor. New supply arrives in 2-3 Mt lumps (Cerrado line: 2.55 Mt for R$22.2B) that reset the deck for years. Low-cost producers treat downturns as market-share harvests." },
      { id: "paper-board", name: "Paper & board making", what: "Containerboard, cartonboard, tissue, graphic grades", players: "IP, Smurfit Westrock, Nine Dragons, UPM, Stora Enso", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 5, concentration: 3 },
        linksTo: ["packaging", "consumer-goods"],
        deeper: "Grade selection is destiny: tissue and containerboard grow with population and parcels; graphic paper shrinks 2.1%/yr forever. The conversion trade (rebuilding a graphic machine to make board) is the sector's signature capex, and operating rates above ~95% are when price hikes stick." },
      { id: "converting", name: "Converting & boxes", what: "Corrugated boxes, cartons, bags, tissue rolls", players: "Integrated majors' box plants, Packaging Corp, regional converters", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 3, concentration: 3 },
        linksTo: ["packaging", "ecommerce", "retail", "logistics"],
        deeper: "Where the sector meets the customer: box plants sit within ~150 miles of demand because corrugated ships badly. Integration is the strategic lever: IP bought DS Smith partly to push 500-600kt of its containerboard through captive European box plants, lifting integration toward 90%: the mill's volume insurance." },
      { id: "recycling", name: "Recovered fiber", what: "Collecting and re-pulping OCC and mixed paper", players: "Waste haulers, Nine Dragons' supply chain, mill buyers", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 2, concentration: 2 },
        linksTo: ["waste-management", "packaging"],
        deeper: "Old corrugated containers (OCC) are containerboard's largest input: a box is recycled into a box up to 7 times. China's National Sword (2018) banned mixed-paper imports and rewired global flows overnight, crushing US OCC prices and forcing Nine Dragons to buy pulp and overseas mills instead. Policy, not geology, sets this raw material's price." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share the sector. Landowners (REITs/TIMOs) earn biological growth plus harvest income plus land sales: low volatility, tax-advantaged REIT structures, returns that look like real estate with a growth spurt. Pulp producers are cost-curve warriors: revenue = tonnes x a world price they do not control, so the entire model is cash cost (Suzano's R$832/t vs BHKP at $495/t leaves margin even at trough; a Nordic mill at $600+ bleeds). Packaging companies are spread-and-scale manufacturers: box prices reset with containerboard indices, energy and OCC costs swing the spread, and consolidation (IP-DS Smith, Smurfit Westrock) exists to keep operating rates and discipline high.",
      "Capital intensity rules everything: a greenfield pulp line costs ~$1,600 per annual tonne and must run flat-out for decades, so producers add supply in lumps and pray the cycle cooperates. Watch the cash conversion: maintenance capex eats 40-60% of EBITDA at mature mills, FX is a silent earnings engine for Brazilian exporters (costs in reais, revenue in dollars), and timberland owners can simply not harvest in weak markets: the only inventory on Earth that appreciates while you wait."
    ],
    fingerprint: { grossMargin: 25, recurringRevenue: 30, capitalIntensity: 85, pricingPower: 35, cyclicality: 75, operatingLeverage: 70 },
    lines: [
      { label: "Price realization per tonne", note: "Pulp, containerboard, and lumber indices set the top line; hikes stick above ~95% operating rates" },
      { label: "Cash cost & cost-curve position", note: "The survival metric: first quartile earns through troughs, fourth quartile closes" },
      { label: "Volume & operating rate", note: "Mills must run full; market-related downtime announcements are the discipline tell" },
      { label: "Capex: maintenance vs growth vs conversion", note: "Graphic-to-packaging machine conversions are the signature reallocation" },
      { label: "Harvest volumes & land sales (HBU)", note: "Timberland's cash levers: deferrable harvests and real-estate monetization" }
    ],
    unitEconomics: {
      unit: "per tonne of hardwood market pulp (BHKP)",
      items: [
        { label: "Spot price, China", value: "$495/t", note: "Aug 2025 (Fastmarkets/XP): near-trough, below many producers' all-in cost" },
        { label: "Cash cost, Brazilian leader", value: "R$832/t (~$150)", note: "Suzano Q2 2025, ex-downtime: the world's cost floor" },
        { label: "Greenfield capex", value: "~$1,600 per annual tonne", note: "Cerrado math: R$22.2B for 2.55 Mt/yr" },
        { label: "Fiber rotation", value: "~7 yrs (Brazil) vs 40+ (boreal)", note: "The hemisphere arbitrage underneath the whole cost curve" }
      ]
    }
  },

  kpiRefs: ["mining-aisc", "semi-utilization"],
  kpiLocal: [
    {
      id: "fp-cash-cost", name: "Pulp Cash Cost per Tonne", industries: ["forestry-paper"],
      definition: "All cash production costs (wood, chemicals, energy, labor, logistics) per tonne of pulp: cost-curve position in a single number.",
      formula: "Cash cost/t = (wood + chemicals + energy + labor + freight) / tonnes produced",
      interpretation: "Commodity prices fall toward the marginal producer's cash cost in a glut, so the low-cost quartile earns through every trough. Benchmark: Suzano at R$832/t (~$150) in Q2 2025 versus BHKP spot of $495/t in China.",
      healthy: "First-quartile position; positive spread at trough prices", warning: "Cash-negative at spot; aging high-cost Northern assets"
    },
    {
      id: "fp-operating-rate", name: "Mill Operating Rate", industries: ["forestry-paper", "packaging"],
      definition: "Production or shipments as a % of rated capacity for a grade (containerboard, pulp, tissue): the sector's utilization gauge.",
      formula: "Operating rate = shipments / rated capacity, by grade and region",
      interpretation: "Above ~95%, price increases stick; below ~90%, discipline cracks and market-downtime announcements begin. Grade-level rates lead price moves by months.",
      healthy: ">95% with low producer and port inventories", warning: "<90% with inventories building"
    }
  ],

  health: {
    intro: "Landowner health is appraisal-honest NAV and harvest flexibility; producer health is cost-curve position and grade mix; everyone's health is balance-sheet patience, because the cycle always tests it.",
    pillars: [
      { name: "Cost-curve position", weight: 30, metrics: "Cash cost/t vs global curve, fiber self-sufficiency, energy self-generation", healthy: "First quartile; own plantations; energy-surplus mills", warning: "Fourth-quartile mills in shrinking grades" },
      { name: "Grade & demand mix", weight: 20, metrics: "Packaging/tissue share vs graphic exposure, e-commerce linkage", healthy: "Packaging and tissue dominate; graphic <10%", warning: "Graphic-heavy portfolio with no conversion plan" },
      { name: "Balance sheet through the cycle", weight: 20, metrics: "Net debt/EBITDA at mid-cycle, maturity ladder vs downturns", healthy: "<2.5x mid-cycle with headroom at trough", warning: "Peak-cycle leverage meeting a price reset (the 2009 Smurfit-Stone pattern)" },
      { name: "Fiber & land security", weight: 15, metrics: "Owned/contracted wood supply, plantation age-class balance, wildfire/pest exposure", healthy: "Self-sufficient, diversified, insured fiber basket", warning: "Spot-wood dependence; concentrated single-region forests" },
      { name: "Capital discipline", weight: 15, metrics: "Capex vs depreciation, returns on expansion, closure willingness", healthy: "Counter-cyclical builds, ruthless closures (600kt at Smurfit Westrock)", warning: "Pro-cyclical megaprojects landing into gluts" }
    ],
    scoringNote: "In this sector the cycle is not a risk, it is the business model: score companies on where they sit when prices visit the cost curve's floor, because they always do."
  },

  valuation: {
    intro: "Two valuation cultures share the sector: industrial paper companies trade on mid-cycle EBITDA multiples and replacement cost, while timberland trades on appraised NAV per acre with real-asset money setting the marginal price.",
    methods: [
      { name: "EV / EBITDA (mid-cycle)", use: "Producers and packagers: normalize the price deck first", avoid: "Trough or peak-year multiples: a 6x on peak pulp prices is a 12x on mid-cycle", strengths: "Standard, comparable across the group", weaknesses: "Choosing 'mid-cycle' is half the work", range: { low: 5, high: 8, asOf: 2025, note: "packaging majors at the high end; pure pulp at the low" } },
      { name: "NAV / appraised timberland value", use: "Timber REITs and TIMO portfolios: acres x per-acre value by region", avoid: "Trusting appraisal smoothing blindly: NCREIF values lag transactions", strengths: "Anchored in a real, transacting land market", weaknesses: "Thin deal volume (940k acres in 2025) makes marks stale", range: { low: 0.7, high: 1.1, asOf: 2025, note: "P/NAV for public timber REITs across the cycle" } },
      { name: "EV per tonne vs replacement cost", use: "Sanity check on producers: compare to ~$1,600/t greenfield", avoid: "Ignoring grade and cost position: a tonne of trough-cost BHKP is not a tonne of Nordic graphic", strengths: "Hard physical anchor from real projects (Cerrado)", weaknesses: "Old high-cost tonnes deserve discounts to replacement", range: { low: 800, high: 1600, asOf: 2025, note: "$ per annual tonne of pulp capacity" } },
      { name: "FCF / dividend yield through cycle", use: "REITs and mature packagers held for income", avoid: "Capitalizing peak lumber or pulp FCF", strengths: "What long-horizon owners actually collect", weaknesses: "Maintenance capex definitions vary widely", range: { low: 4, high: 8, asOf: 2025, note: "% FCF yield, mid-cycle assumptions" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a forestry & paper name quickly: mid-cycle EBITDA times a cost-curve-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.3, max: 8, step: 0.1, value: 2.5, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 12, step: 0.5, value: 6.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -2, max: 25, step: 0.5, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays this as three separate trades sharing a sector tag: timberland as an inflation-hedged real asset with carbon and mass-timber optionality, pulp as a pure cost-curve cyclical traded around Chinese spot, and packaging as a consolidating GDP-plus compounder. The classic error is averaging them into one 'paper' view: the box economy and the graphic-paper melt are opposite businesses.",
    debates: [
      { topic: "Suzano's cost advantage: moat or treadmill?", bull: "7-year rotations, R$832/t cash cost, 13.5 Mt of scale, and a debottleneck to ~2.7 Mt at Cerrado with zero new capex: nobody on Earth can replicate the position, and every price war ends with Suzano owning more of the market.", bear: "The moat invites its own flooding: each Brazilian or Uruguayan megaline resets the price deck toward Suzano's own cost, FX does half the work and can reverse, and shareholders keep funding capacity that lowers the price of everything they already own. You hold a cost curve, not pricing power." },
      { topic: "Timberland at today's prices: real-asset gem or value trap?", bull: "Biology pays 5%/yr through every recession, inflation correlation is genuine, the investable universe is finite (80-90M US acres), and mass timber plus carbon markets add demand streams the appraisals barely credit yet.", bear: "Returns compressed as $100B+ of institutional money chased scarce acres; appraisal smoothing (NCREIF) flatters volatility; and values rising while transactions thin to 46 deals a year is exactly what distribution tops look like. The optionality is priced before it is proven." },
      { topic: "Is the box economy GDP-plus or GDP with extra steps?", bull: "E-commerce intensity, plastic substitution mandates (EU PPWR), and emerging-market packaging growth keep volumes above GDP, while consolidation (IP-DS Smith at $7.2B, Smurfit Westrock shutting 600kt) converts volume into pricing discipline for the first time in the sector's history.", bear: "The 2022-23 destock proved boxes are GDP with inventory beta: lightweighting, right-sizing, and reuse quietly erode tonnes per parcel, and industries consolidate like this when they are mature, not when they are growing." }
    ],
    cycle: {
      where: "Pulp at trough-to-early-recovery (BHKP $495/t in Aug 2025 sat below many producers' all-in costs, forcing closures); packaging mid-cycle with consolidation doing the heavy lifting; timberland values at highs with transaction volume thinning; lumber hostage to housing starts and mortgage rates.",
      drivers: "Chinese pulp demand and port inventories, US housing starts, e-commerce box volumes, energy and OCC costs, and the arrival schedule of Latin American megaprojects.",
      leads: [
        "China BHKP/NBSK spot moves and port inventories (trade-press summaries, free)",
        "US housing starts and permits (FRED, free): the lumber demand tape",
        "Box shipment prints and containerboard operating rates (Fibre Box Association headlines)",
        "Producer downtime and closure announcements: the discipline signal",
        "CME lumber futures curve (free delayed quotes)"
      ]
    },
    exposure: [
      { vehicle: "Suzano (ADR: SUZ)", note: "The cost-curve king: trough-proof economics, FX-levered, supply-wave author" },
      { vehicle: "Timber REITs (WY, RYN, PCH)", note: "Liquid land: biological growth plus HBU and carbon optionality" },
      { vehicle: "Containerboard majors (IP, Smurfit Westrock)", note: "The consolidation-and-discipline trade on the box economy" },
      { vehicle: "Nordic integrateds (UPM, Stora Enso)", note: "Diversified fiber platforms with mass-timber and biofuel side bets" },
      { vehicle: "Lumber names & ETFs (West Fraser; WOOD, CUT)", note: "Housing torque: the sector's highest-beta corner" }
    ],
    catalysts: [
      { when: "Monthly", what: "Pulp list-price letters and China port-inventory data: the pulp tape" },
      { when: "Quarterly", what: "Earnings plus Fibre Box Association shipment prints and NCREIF timberland index releases" },
      { when: "Housing data weeks", what: "Starts and permits reprice the entire wood-products complex" },
      { when: "2026-2027", what: "Cerrado debottleneck toward 2.7 Mt and further containerboard closures reset both supply decks" }
    ],
    data: [
      { series: "Housing starts & lumber PPI", source: "FRED (free)", why: "Wood products demand and price, primary and clean" },
      { series: "FAO forest products statistics", source: "fao.org FAOSTAT-Forestry (free)", why: "The global production ledger: 464 Mt and every trend inside it" },
      { series: "NCREIF Timberland Index", source: "ncreif.org quarterly releases (free summaries)", why: "The institutional land market's official tape" },
      { series: "CME lumber futures", source: "cmegroup.com (free delayed)", why: "The market's live vote on housing and wood supply" },
      { series: "Box shipments & operating rates", source: "Fibre Box Association / AF&PA headlines (free via trade press)", why: "The e-commerce economy measured in corrugated" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Boxes track industrial production down and pulp gluts; timberland barely notices (defer the harvest, let the trees grow). Rotate toward landowners and the lowest-cost pulp producer; avoid leveraged high-cost mills." },
      { regime: "Housing boom / rate cuts", behavior: "Lumber moves first and hardest: sawmill operating leverage turns $100/mbf of price into pure margin. The 2021 superspike ($400 to $1,700) is the template for how violent it gets." },
      { regime: "Inflation", behavior: "Timberland earns its keep as the classic real-asset hedge; box pricing catches up to costs with a lag; energy-short European mills suffer most." },
      { regime: "China stimulus", behavior: "The marginal pulp buyer returns: BHKP spot moves within weeks, Brazilian exporters re-rate first, and the high-cost tail gets a stay of execution." }
    ]
  },

  players: [
    { name: "Suzano", role: "Pulp cost-curve leader", country: "BR", real: true, note: "World's largest market pulp producer: ~13.5 Mt/yr; Cerrado's 2.55 Mt line (2024) is the largest ever built" },
    { name: "International Paper", role: "Containerboard consolidator", country: "US", real: true, note: "Closed the $7.2B DS Smith acquisition Jan 2025; pushing integration toward ~90%" },
    { name: "Smurfit Westrock", role: "Global box giant", country: "IE", real: true, note: "$31.2B FY2025 sales, $4.9B adjusted EBITDA; closed ~600kt of high-cost capacity" },
    { name: "Weyerhaeuser", role: "Largest timber REIT", country: "US", real: true, note: "~10M US acres plus wood products: the institutional land benchmark" },
    { name: "UPM", role: "Nordic integrated", country: "FI", real: true, note: "Pulp, labels, biofuels: the diversify-away-from-paper playbook, with Uruguay as its pulp engine" },
    { name: "Stora Enso", role: "Renewable materials pivot", country: "FI", real: true, note: "Graphic-paper exit, packaging focus, and one of the biggest mass timber (CLT) builders" },
    { name: "Nine Dragons", role: "China's containerboard queen", country: "CN", real: true, note: "Built on imported OCC until National Sword forced a supply-chain rebuild" },
    { name: "West Fraser", role: "Lumber leader", country: "CA", real: true, note: "North America's largest lumber producer plus OSB: the housing cycle in corporate form" }
  ],

  geography: [
    { country: "BR", role: "Pulp superpower", note: "7-year eucalyptus rotations and the world's lowest cash costs; the cost curve's southern anchor" },
    { country: "US", role: "Timberland + containerboard heartland", note: "The South is the world's wood basket; 80-90M investable acres and the box majors' home market" },
    { country: "CA", role: "Softwood lumber", note: "Beetle-hit BC supply shrinking; the 40-year softwood duties fight with the US reprices the border" },
    { country: "FI", role: "Nordic integrateds", note: "UPM, Stora Enso, Metsa: long rotations and high costs offset by engineering and new-materials R&D" },
    { country: "CN", role: "Largest producer & marginal buyer", note: "Sets global pulp prices at the margin; recovered-fiber policy (National Sword) rewired world trade" },
    { country: "CL", role: "The other plantation power", note: "Arauco and CMPC: Latin America's second pulp pole, expanding alongside Brazil" }
  ],

  cycles: [
    { year: 1995, title: "The pulp whipsaw", kind: "boom", text: "NBSK spiked toward $1,000/t on inventory panic, then roughly halved within a year as supply and destocking hit. Lesson: pulp prices are an inventory cycle stacked on a capacity cycle; neither cares about your forecast." },
    { year: 2009, title: "Smurfit-Stone bankruptcy", kind: "bust", text: "The US containerboard heavyweight filed Chapter 11 in January 2009: peak-cycle leverage met a demand collapse. Lesson: in commodity manufacturing, the balance sheet is the strategy; leverage converts a downturn into a wipeout." },
    { year: 2018, title: "National Sword", kind: "shift", text: "China banned mixed recovered-paper imports, crushing US OCC prices and forcing Nine Dragons and peers to rebuild their fiber supply chains. Lesson: a policy memo can reprice a global raw material faster than any mine or mill." },
    { year: 2021, title: "The lumber superspike", kind: "boom", text: "Lumber futures ran from ~$400 to ~$1,700/mbf as stimulus-fueled homebuilding met COVID-curtailed sawmills, then round-tripped. Lesson: inelastic supply plus demand shock equals price theater; sawmill equities are the leveraged expression." },
    { year: 2024, title: "Cerrado and the consolidation wave", kind: "shift", text: "Suzano started the largest pulp line ever (2.55 Mt) while IP bought DS Smith and Smurfit Westrock closed 600kt: supply scaled south as boxes concentrated. Lesson: mature industries end up owned by the lowest-cost and the most disciplined; position for both." }
  ],

  risks: [
    { name: "Latin American supply wave", severity: 4, likelihood: 4, transmission: "New 2-3 Mt low-cost lines -> prices reset toward Brazilian cash cost -> high-cost Northern mills close -> write-downs and stranded capacity across Europe and North America." },
    { name: "Structural demand erosion", severity: 3, likelihood: 4, transmission: "Digitalization keeps shrinking graphic paper -> mills convert to packaging grades -> converted capacity floods containerboard -> the decline migrates into the growth grades' pricing." },
    { name: "Wildfire, pests & climate stress", severity: 4, likelihood: 3, transmission: "Fire and beetle losses in concentrated regions -> salvage gluts then supply gaps -> insurance and appraisal values reprice -> timberland's 'safe real asset' premium erodes." },
    { name: "China policy & demand swings", severity: 3, likelihood: 3, transmission: "Stimulus or import-policy shifts -> the marginal pulp and OCC buyer changes behavior overnight -> spot prices whipsaw -> high-cost exporters lose their clearing market (the National Sword template)." },
    { name: "Energy & chemical cost shocks", severity: 3, likelihood: 3, transmission: "Gas and power spikes (the 2022 European template) -> energy-short mills become cash-negative -> curtailments and permanent closures -> regional supply shifts to energy-integrated producers." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["This industry grows trees, cuts them into lumber for houses, cooks them into pulp, and turns the pulp into paper and boxes. The big story of the last 20 years: paper for reading (newspapers, office paper) keeps shrinking because of screens, while paper for shipping (cardboard boxes) keeps growing because of online shopping. Boxes are now about 2/3 of the 464 Mt of paper the world makes each year, and the land the trees grow on has become an investment in its own right."] },
    L2: { title: "Intermediate", text: ["Three businesses hide under one label. Timberland is a real asset: trees grow ~5%/yr regardless of markets, and US institutional forests are worth $100-200B. Pulp is a global commodity where Brazil wins on biology: eucalyptus matures in 7 years versus 40+ up north, giving Suzano cash costs near $150/t against prices of ~$495/t (Aug 2025). Packaging is a scale manufacturing game consolidating fast: International Paper bought DS Smith for $7.2B and Smurfit Westrock was born a $31B-revenue giant. Graphic paper, meanwhile, declines ~2%/yr forever."] },
    L3: { title: "Advanced", text: ["Analyze by species: landowners on NAV per acre and harvest optionality (appraisals lag: 2025 saw values rise on just 46 deals); pulp producers on cost-curve position, because prices always revisit the marginal cash cost; packagers on operating rates (hikes stick above ~95%) and integration. The capex anchor is ~$1,600 per annual tonne greenfield (Cerrado: R$22.2B for 2.55 Mt), which frames every EV/tonne multiple. FX is the hidden earnings engine for Brazilian exporters, and grade mix is destiny: tissue and boxes grow, graphic melts."] },
    L4: { title: "Expert", text: ["Trade pulp around Chinese spot and port inventories, lumber around housing starts and the futures curve, and packaging around box-shipment prints and closure discipline. The live debates: whether Suzano's cost moat is self-defeating (each megaline reprices its own book), whether timberland's appraisal-smoothed returns survive $100B+ of crowding, and whether e-commerce box growth outruns lightweighting. Watch the 2026-27 supply schedule: Cerrado's free debottleneck to ~2.7 Mt and the next Latin project decide the pulp deck for a decade."] },
    L5: { title: "Institutional", text: ["Allocator's frame: this sector offers one genuine diversifier (timberland: biology-powered, inflation-correlated, appraisal-smoothed) attached to two cyclicals best owned at the cost curve's extremes. Core the land through REITs or TIMOs sized for illiquidity, own the first-quartile pulp producer as the through-cycle survivor, and treat packaging consolidation as a slow re-rating story with GDP-beta risk. The optionality book (mass timber at ~13% CAGR, carbon markets, plastic substitution) is real but early: underwrite it at zero and treat it as a free call on the land you already wanted to own."] }
  },

  quiz: [
    { q: "Global paper & board production in 2024 was roughly:", choices: ["100 Mt, mostly newsprint", "250 Mt, mostly office paper", "464 Mt, with packaging around 2/3 of it", "1,000 Mt, mostly tissue"], answer: 2, explain: "The world made 464 Mt in 2024 (+1.9% after 2 down years); boxes and board dominate while graphic paper keeps shrinking." },
    { q: "Graphic paper (newsprint, office, magazines) demand is:", choices: ["Growing with GDP", "In structural decline of roughly 2%/yr as screens replace print", "Flat forever", "Growing faster than packaging"], answer: 1, explain: "The decline is structural, not cyclical: the playbook is harvesting cash, closing machines, or converting them to packaging grades." },
    { q: "Suzano's Cerrado project, started July 2024, is:", choices: ["The largest single pulp line ever built: 2.55 Mt/yr for R$22.2B", "A paper recycling plant", "A timberland fund", "A sawmill complex"], answer: 0, explain: "Cerrado lifted Suzano to ~13.5 Mt/yr and could reach ~2.7 Mt from 2027 with no new capex: supply arrives in deck-resetting lumps." },
    { q: "Brazil dominates hardwood pulp mainly because:", choices: ["Cheap labor", "Government subsidies", "Eucalyptus matures in ~7 years versus 40+ for northern softwood, producing the world's lowest cash costs", "Closer to China"], answer: 2, explain: "Biology is the moat: fast rotations gave Suzano a Q2 2025 cash cost of R$832/t (~$150) against BHKP spot of $495/t." },
    { q: "The investable US timberland universe is estimated at:", choices: ["$5B on a few thousand acres", "80-90M acres worth $100B to $200B", "$2T across all forests", "Nothing: forests cannot be owned"], answer: 1, explain: "Forisk's estimate frames the institutional asset class: TIMOs, REITs, and family offices own it, with NCREIF tracking ~$27B of index properties." },
    { q: "Timberland returns come from:", choices: ["Price speculation only", "Government payments", "Rent from campers", "Biological growth (~5%/yr), harvest income, and land-value appreciation plus HBU sales"], answer: 3, explain: "Trees grow through recessions and harvests can wait for better prices: the only commodity inventory that appreciates in storage." },
    { q: "International Paper's January 2025 move was:", choices: ["Closing its acquisition of DS Smith for $7.2B to integrate European packaging", "Exiting the box business", "Buying a railroad", "Merging with Suzano"], answer: 0, explain: "The deal pushes 500-600kt of IP containerboard through captive European box plants, lifting integration toward 90%: the consolidation era's signature move." },
    { q: "In a pulp glut, prices tend to fall toward:", choices: ["Zero", "Last year's average", "The marginal producer's cash cost, which is why cost-curve position is the survival metric", "The price of recycled paper"], answer: 2, explain: "Commodity 101: the low-cost quartile (Brazil) earns through the trough while high-cost Northern mills curtail or close." }
  ],

  sources: [
    { name: "IndexBox: World Paper & Paperboard Market Overview 2024", url: "https://www.indexbox.io/blog/paper-and-paperboard-world-market-overview-2024-13/", feeds: "production, market size, grade trends" },
    { name: "Fastmarkets pulp price insights (China BHKP/NBSK)", url: "https://www.fastmarkets.com/insights/prices-for-nbsk-bhk-imports-in-china-begin-to-tumble/", feeds: "pulp prices" },
    { name: "Forisk: timberland investment research & 2025 transactions review", url: "https://forisk.com/2025-timberland-transactions-review/", feeds: "timberland values, deal volume" },
    { name: "Suzano Cerrado startup announcement (Business Wire, July 2024)", url: "https://www.businesswire.com/news/home/20240722940920/en/Suzano-Starts-Operation-of-the-Worlds-Largest-Pulp-Production-Line", feeds: "capacity, capex" }
  ]
};
