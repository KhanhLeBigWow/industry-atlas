/* Industry Atlas - ROBOTICS & AUTOMATION (full module, research-backed)
 * Anchors: 542,076 industrial robots installed globally in 2024, stock more than
 * doubled in 10 years (IFR World Robotics 2025, Sept 2025); China 295,000 installs,
 * 54% of world demand, domestic Chinese makers >57% home share for the first time,
 * operational stock >2M (IFR, Sept 2025); South Korea density 1,220 robots per
 * 10,000 workers, world's highest (IFR 2025); Amazon deployed its 1,000,000th
 * warehouse robot and launched the DeepFleet AI model, +10% fleet travel efficiency
 * (Amazon / TechCrunch, July 2025); FANUC ~21% operating margin on record JPY 857B
 * (~$5.7B) sales, FY ended March 2026; ABB Robotics $2.3B 2024 revenue at 12.1%
 * margin, spinoff listing announced for 2026 (ABB, April 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["robotics"] = {
  meta: {
    id: "robotics", name: "Robotics & Automation", sector: "technology", status: "full",
    tagline: "Half a million new factory robots a year, half of them bolted down in China, and a venture supercycle betting the next billion workers are humanoid.",
    marketSize: { value: 80, unit: "$B", asOf: 2025, note: "robot hardware ~$16B (IFR value basis) triples with software, peripherals, and integration; warehouse and professional service robotics add the rest" },
    cagr: { value: 11, range: [8, 14], horizon: "2025-2030" },
    maturity: "cyclical-growth", cyclicality: 4, capitalIntensity: 3, regulation: 2, disruption: 4
  },
  newsQuery: '(robotics OR "industrial robot" OR humanoid OR cobot OR FANUC OR "warehouse automation" OR "robot orders")',

  overview: {
    definition: "The robotics industry builds programmable machines that do physical work: 6-axis factory arms, cobots, warehouse fleets, surgical systems, and now humanoids. It is really 3 industries stacked: a Japanese precision-components oligopoly, a machinery cycle wearing a growth story, and a venture-funded AI frontier.",
    howItWorks: [
      "The structure is an oligopoly on top of a duopoly. 4 firms (FANUC, ABB, KUKA, Yaskawa) have historically supplied roughly half of the world's industrial arms, but beneath them sits the real chokepoint: 2 Japanese companies, Nabtesco (RV gears) and Harmonic Drive (strain-wave gears), dominate the precision reducers that can be a third of an arm's cost. Distribution runs through thousands of local system integrators who turn a bare arm into a working cell at 2x to 3x the hardware price.",
      "The economics are machinery economics, and margin tracks vertical integration. FANUC, which builds its own servos, controls, and CNC brains, printed a ~21% operating margin on record JPY 857B (~$5.7B) sales in the year ended March 2026; ABB's robotics arm earned 12.1% on $2.3B of 2024 revenue and is being spun off to a separate 2026 listing. Customers do not buy robots, they buy payback periods: installed cell cost divided by fully loaded labor savings, and every year of rising wages and falling robot prices compresses that math further in automation's favor.",
      "Demand is a structural adoption curve that cycles hard. The world installed 542,076 industrial robots in 2024, more than double the count of a decade earlier (IFR, Sept 2025), yet orders still swing 20% to 40% with auto and electronics capex, which together drive roughly half of demand. China is the gravitational center: 295,000 installations in 2024, 54% of the global market, an operational stock above 2M units, and, for the first time, domestic Chinese suppliers taking more than 57% of their home market. Asia absorbed 74% of 2024 deployments versus 16% for Europe and 9% for the Americas.",
      "The frontier is fleets and AI. Amazon deployed its 1,000,000th warehouse robot in July 2025 and released DeepFleet, a foundation model that routes the swarm about 10% more efficiently: proof that robot fleets compound through data, not just units. Humanoids are the capital magnet: Figure ran an 11-month pilot at BMW's Spartanburg plant and raised at a reported $39B valuation in late 2025, Tesla converted Fremont lines to Optimus, and China's Unitree reportedly shipped 5,500+ humanoids in 2025 with a $17,990 list price on its G1. Actual productive humanoid deployments still number in the hundreds to low thousands; the valuations price millions."
    ],
    history: [
      { era: "1961-1979", title: "Unimate to Japan", text: "The first industrial robot goes to work at a GM plant in 1961; Japan licenses the technology and industrializes it, founding what becomes the FANUC-Yaskawa axis." },
      { era: "1980-2000", title: "The Japanese century", text: "Auto welding and painting lines make robots standard equipment; the Big 4 (FANUC, ABB, KUKA, Yaskawa) forms; Japanese component makers lock up reducers and servos." },
      { era: "2000-2015", title: "Electronics and the China pull", text: "Consumer electronics assembly joins autos as the demand engine; China becomes the world's largest robot market in 2013 and never gives the title back." },
      { era: "2015-2021", title: "Cobots and warehouses", text: "Universal Robots creates the collaborative category for SMEs; Amazon's 2012 Kiva purchase (and its closure to outside customers) spawns an entire third-party warehouse robotics industry; Midea buys KUKA in 2016 as Made in China 2025 targets robotics." },
      { era: "2022-present", title: "The AI robotics era", text: "Installations plateau at record levels (~542k in 2024) while the story shifts to intelligence: foundation models for manipulation, million-robot fleets, Chinese makers taking majority home share, and a humanoid funding boom." }
    ],
    trends: [
      { title: "Chinese localization", direction: "shift", text: "Domestic suppliers passed 57% of the Chinese market in 2024 (IFR), the first majority ever: the world's biggest customer is becoming the biggest competitor, moving upmarket exactly as Japan did in the 1980s." },
      { title: "Fleets over units", direction: "up", text: "Amazon's 1M-robot milestone and DeepFleet's 10% routing gain show the moat migrating from the arm to the orchestration layer: fleet data compounds, hardware commoditizes." },
      { title: "Humanoid capital boom", direction: "up", text: "Billions of venture dollars, a reported $39B Figure valuation, Optimus lines at Fremont: against hundreds of robots actually working. The gap between capital and deployment is the sector's defining spread." },
      { title: "Cobots and SME adoption", direction: "up", text: "Collaborative robots, roughly a tenth of installations per IFR, open the long tail of small factories where integrators and safety caging never penetrated." },
      { title: "Western OEM squeeze", direction: "down", text: "ABB spinning off a 12.1%-margin robotics unit and KUKA living under Midea ownership tell the same story: mid-margin Western hardware is caught between Japanese components and Chinese price." }
    ],
    outlook: "Adoption compounds regardless of the hype cycle: global robot density doubled in 7 years and wage inflation keeps compressing payback periods. The open questions are who captures the AI layer (incumbents with installed bases and channels, or foundation-model natives) and whether Chinese makers do to FANUC what FANUC did to everyone else. Humanoids are real optionality with venture-grade odds: the honest base case is warehouse and factory fleets scaling for a decade while humanoid economics get debugged in public."
  },

  structure: {
    suppliers: [
      { name: "Precision reducers (Nabtesco, Harmonic Drive)", note: "RV and strain-wave gears: a Japanese duopoly that can be a third of an arm's cost" },
      { name: "Servos, drives & controls (Yaskawa, Inovance, Panasonic)", note: "The motion layer; Yaskawa sells to rivals and competes with them" },
      { name: "Sensors & machine vision (Keyence, Cognex, SICK)", note: "The eyes; Keyence-class margins are the envy of the whole chain" },
      { name: "Compute & AI silicon (Nvidia Jetson/Isaac, TI)", note: "The new entrant tax: every AI-era robot pays the GPU toll" }
    ],
    producers: [
      { name: "The Big 4 (FANUC, ABB, KUKA, Yaskawa)", note: "Roughly half of industrial arms historically; FANUC's ~21% margin is the benchmark" },
      { name: "Chinese champions (Estun, Inovance, Efort)", note: "The force behind 57% domestic share, now exporting" },
      { name: "Cobot & mobile makers (Universal Robots/Teradyne, Doosan, Geek+, Locus)", note: "The SME and warehouse long tail" },
      { name: "Humanoid builders (Figure, 1X, Agility, Unitree, Tesla Optimus)", note: "Hundreds deployed, millions promised" }
    ],
    distributors: [
      { name: "System integrators", note: "Thousands of local firms turning arms into cells at 2x to 3x hardware cost: the industry's real capacity constraint" }
    ],
    customers: [
      { name: "Automotive & EV plants", note: "The founding customer and still the largest single vertical" },
      { name: "Electronics assembly", note: "With autos, roughly half of global demand: the cyclicality source" },
      { name: "E-commerce & logistics", note: "Amazon alone operates 1M+ robots; 75% of its deliveries are robot-assisted" },
      { name: "General industry, food, pharma, hospitals", note: "The adoption frontier as payback periods compress" }
    ],
    regulators: [
      { name: "ISO safety standards (ISO 10218, ISO/TS 15066)", note: "Define caging, speed limits, and what 'collaborative' legally means" },
      { name: "OSHA & machinery directives", note: "Workplace safety regimes gate deployment speed" },
      { name: "Export controls", note: "Chip restrictions on China ripple straight into robot compute and the localization race" }
    ],
    capital: [
      { name: "Net-cash corporate balance sheets", note: "The Japanese majors hoard cash to survive 40% order drawdowns" },
      { name: "Venture capital", note: "The humanoid cohort has raised billions against pilot-stage revenue" },
      { name: "RaaS & leasing", note: "Robots-as-a-service converts SME capex to opex and shifts cycle risk to financiers" }
    ]
  },

  valueChain: {
    intro: "From a strain-wave gear machined to micron tolerance to a warehouse where 1M robots move the shelves. The toll booths sit upstream in Japanese components and downstream in whoever owns the fleet and its data; the arm in the middle is the most commoditized link.",
    stages: [
      { id: "components", name: "Precision components", what: "Reducers, servos, sensors, compute", players: "Nabtesco, Harmonic Drive, Keyence, Nvidia", valueCapture: 5,
        economics: { grossMargin: [30, 55], capitalIntensity: 4, concentration: 5 },
        linksTo: ["semiconductors", "manufacturing"],
        deeper: "The reducer duopoly (Nabtesco in RV gears for heavy payloads, Harmonic Drive in strain-wave for light ones) is the industry's deepest moat: decades of metallurgy and tolerance know-how. Every humanoid bill-of-materials fight starts here, which is why Chinese reducer startups are a strategic, not commercial, project." },
      { id: "oems", name: "Robot OEMs", what: "6-axis arms, SCARA, delta, cobots", players: "FANUC, ABB, KUKA, Yaskawa, Estun", valueCapture: 3,
        economics: { grossMargin: [30, 40], capitalIntensity: 3, concentration: 4 },
        linksTo: ["manufacturing", "automotive"],
        deeper: "Margin equals integration depth: FANUC's ~21% operating margin versus ABB Robotics' 12.1% is mostly self-made servos, controls, and a service network. Chinese entrants attack from below with arms at a fraction of Western ASPs, funded by the world's largest home market." },
      { id: "intelligence", name: "Software & AI", what: "Vision, simulation, fleet orchestration, foundation models", players: "Nvidia (Isaac), Amazon (DeepFleet), Figure (Helix), startups", valueCapture: 4,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 2 },
        linksTo: ["ai", "saas", "semiconductors"],
        deeper: "The layer everyone believes will capture the next decade's value, still fragmented today. DeepFleet's 10% routing gain across 1M robots is the template: software improvements that monetize an installed hardware base instantly. The open question is whether manipulation foundation models transfer across bodies the way LLMs transfer across tasks." },
      { id: "integration", name: "System integration", what: "Turning arms into working cells", players: "Thousands of regional integrators", valueCapture: 2,
        economics: { grossMargin: [15, 25], capitalIntensity: 1, concentration: 1 },
        linksTo: ["manufacturing", "ev", "automotive"],
        deeper: "A $40k arm becomes a $120k to $200k working cell after tooling, vision, safety, and programming. Fragmented, local, and chronically short of engineers: integration capacity, not robot supply, is the adoption bottleneck, and the strongest argument for cobots and AI-assisted programming." },
      { id: "fleets", name: "Fleet operations", what: "Warehouse AMRs, sortation, service robots at scale", players: "Amazon Robotics, Geek+, Locus, AutoStore", valueCapture: 4,
        economics: { grossMargin: [20, 35], capitalIntensity: 4, concentration: 3 },
        linksTo: ["logistics", "ecommerce", "retail"],
        deeper: "Amazon's Kiva playbook (buy it in 2012, close it to rivals, build 1M units) created and constrained this market at once: the biggest operator is not a vendor. Everyone else sells fleets to retailers and 3PLs on labor-savings math, where fleet uptime and software lock-in decide who compounds." },
      { id: "aftermarket", name: "Service, spares & RaaS", what: "Maintenance, retrofits, financing for a 4M+ unit installed base", players: "OEM service arms, integrators, RaaS financiers", valueCapture: 3,
        economics: { grossMargin: [30, 45], capitalIntensity: 2, concentration: 3 },
        linksTo: ["banking", "manufacturing"],
        deeper: "The world's operational stock is past 4M industrial robots (China alone above 2M), each a 10-to-15-year annuity of spares, service contracts, and retrofit upgrades. RaaS models put the asset on a financier's book: good for adoption, and a quiet transfer of cycle risk to whoever holds the paper." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 3 P&L species. Component monopolies (Nabtesco, Harmonic, Keyence class) carry the highest and steadiest margins: sole-source parts priced like the tolls they are. OEMs are machinery businesses: revenue = units x ASP, margin = vertical integration (FANUC ~21% operating margin versus ABB Robotics' 12.1% in 2024), cash generation strong at mid-cycle, brutal operating leverage in both directions. Fleet and software players are a third species entirely: SaaS-like gross margins on orchestration, logistics-like economics on operations, venture-like burn in the humanoid cohort.",
      "The cycle math: orders track auto and electronics capex (roughly half of demand), backlogs run 6 to 12 months, and downturns cut orders 20% to 40%, which is why the Japanese majors run net-cash balance sheets as standard equipment. The structural offset is the payback equation: cell cost over labor savings, compressed every year by rising wages and falling robot ASPs (Chinese arms now ship below $15k). Watch order intake and book-to-bill before revenue; for the pre-profit cohort, watch cash runway against demo cadence, because pilots are not purchase orders."
    ],
    fingerprint: { grossMargin: 35, recurringRevenue: 25, capitalIntensity: 55, pricingPower: 55, cyclicality: 70, operatingLeverage: 65 },
    lines: [
      { label: "Orders & book-to-bill", note: "The tape that leads revenue by 2 to 4 quarters; Yaskawa reports first each cycle" },
      { label: "Units installed & ASPs", note: "542k global installs in 2024; ASP erosion is the China signal" },
      { label: "Service & software attach", note: "The annuity on a 4M+ unit installed base: the quality-of-earnings marker" },
      { label: "China revenue share", note: "54% of world demand: exposure and vulnerability in the same line" },
      { label: "R&D intensity", note: "The AI transition tax: skimp now, rent your intelligence layer later" }
    ],
    unitEconomics: {
      unit: "per installed 6-axis robot cell (illustrative)",
      items: [
        { label: "Robot arm ASP", value: "$25k to $60k", note: "Chinese arms undercut to sub-$15k; humanoids target this band" },
        { label: "Installed cell cost", value: "2x to 3x the arm", note: "integration, tooling, vision, safety: the integrator's share" },
        { label: "Payback vs labor", value: "1 to 3 years", note: "at developed-market wages: the purchase trigger" },
        { label: "Lifetime service & spares", value: "roughly 1x the arm over 10+ yrs", note: "the installed-base annuity" }
      ]
    }
  },

  kpiRefs: ["def-backlog", "semi-utilization"],
  kpiLocal: [
    {
      id: "robo-density", name: "Robot Density (per 10,000 workers)", industries: ["robotics"],
      definition: "Operational robot stock per 10,000 manufacturing employees: the adoption S-curve in one number.",
      formula: "Density = operational robot stock / manufacturing employment x 10,000",
      interpretation: "South Korea leads at 1,220 (IFR 2025), and global density doubled in 7 years. Rising density with rising output is healthy automation; density measures headroom, not saturation.",
      healthy: "Density climbing alongside manufacturing output", warning: "Density stalls while wages climb: usually an integration-capacity bottleneck" },
    {
      id: "robo-payback", name: "Automation Payback Period", industries: ["robotics"],
      definition: "Years for a robot cell to repay itself in labor, quality, and throughput savings: the industry's demand thermostat.",
      formula: "Payback = installed cell cost / annual fully loaded labor savings",
      interpretation: "Falling robot prices and rising wages compress it structurally; every compression opens a new tier of factories to automation.",
      healthy: "Under 2 years: adoption accelerates on its own", warning: "Over 4 years: projects die in the CFO's office" }
  ],

  health: {
    intro: "OEM health is order momentum and integration depth; component-maker health is the moat's tolerance in microns; the frontier cohort's health is runway versus proof. Everyone's health has a China answer or is missing one.",
    pillars: [
      { name: "Order momentum & backlog", weight: 25, metrics: "Book-to-bill, order growth vs JARA/A3 tape, backlog months", healthy: "Book-to-bill above 1 with rising ASP mix", warning: "Serial order declines masked by backlog burn" },
      { name: "China position", weight: 20, metrics: "China revenue share, local share trend, localization defense", healthy: "Growing in China above local-maker price points", warning: "Share ceded to Estun/Inovance class on price" },
      { name: "Component & software depth", weight: 20, metrics: "In-house servo/control share, software and service attach", healthy: "FANUC-style vertical integration, rising attach", warning: "Assembler economics: buying the margin-rich parts from others" },
      { name: "Customer concentration", weight: 15, metrics: "Auto + electronics share of orders, vertical diversification", healthy: "General industry and logistics broadening the base", warning: "Auto capex sneeze becomes revenue pneumonia" },
      { name: "Balance sheet & cycle readiness", weight: 20, metrics: "Net cash, fixed-cost flexibility, R&D protection in downturns", healthy: "Net cash funding R&D through a 40% order drop", warning: "Leverage plus operating leverage: the machinery death spiral" }
    ],
    scoringNote: "Robotics is a machinery cyclical wearing a growth story: score the cycle first and the story second, and never pay structural-growth multiples for cyclical-peak orders."
  },

  valuation: {
    intro: "The market prices 3 different animals under one theme ETF: machinery cyclicals, component compounders, and venture-stage AI bets. Using one multiple for all 3 is how theme investors get hurt.",
    methods: [
      { name: "EV / EBITDA (machinery comps)", use: "OEMs and integrator-adjacent hardware through the cycle", avoid: "Peak-order extrapolation: normalize the order book first", strengths: "Standard, comparable across the capital-goods universe", weaknesses: "Misses net-cash balance sheets and cycle position", range: { low: 10, high: 16, asOf: 2025, note: "quality Japanese names sit at the top of the band" } },
      { name: "Mid-cycle P/E (Japanese majors)", use: "FANUC and Yaskawa class: earnings normalized across the order cycle", avoid: "Trough P/E screens: cyclicals look cheapest at the peak", strengths: "Respects the net-cash cushions and through-cycle earnings power", weaknesses: "Mid-cycle is a judgment, not a number", range: { low: 18, high: 30, asOf: 2025, note: "FANUC's historical premium band; component monopolies command more" } },
      { name: "EV / Sales (pre-profit robotics)", use: "Warehouse fleets and humanoid names without earnings", avoid: "Applying it to machinery businesses that have real earnings", strengths: "The only ratio available before profits exist", weaknesses: "A multiple on hope: pilots are not purchase orders", range: { low: 2, high: 10, asOf: 2025, note: "listed names; private humanoid marks (Figure at a reported $39B) sit far above" } },
      { name: "Installed-base annuity lens", use: "Valuing service, spares, and software attach on 4M+ deployed units separately from new-unit sales", avoid: "Face-value TAM decks: attach rates are earned, not assumed", strengths: "Finds the quality earnings the cycle hides", weaknesses: "Disclosure is thin; attach economics vary wildly", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a robotics name quickly: mid-cycle EBITDA times a cycle-honest multiple, minus net debt (often negative here: the Japanese majors run net cash).",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.2, max: 6, step: 0.1, value: 1.2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 25, step: 0.5, value: 14, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -8, max: 10, step: 0.5, value: -2, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns the toll bridges (components and sensors), rents the cyclicals (OEMs, on the order tape, not the narrative), underwrites fleets on unit economics, and sizes humanoids like the venture bets they are. Every position needs a China answer: the largest customer in the industry's history is becoming its largest competitor, and that transition sets both the bull and bear case for the entire Western complex.",
    debates: [
      { topic: "Humanoids: iPhone moment or Segway rerun?", bull: "A general-purpose form factor amortizes R&D across every task in the built-for-humans world; manipulation foundation models transfer across jobs the way LLMs did across text; Figure's BMW pilot and Amazon-scale labor math ($ trillions of global wages) mean even single-digit penetration builds the largest hardware market ever.", bear: "Hundreds of robots do productive work while valuations price millions; hands, uptime, and cost-per-hour are unsolved; and Unitree ships at $17,990 while Western BOMs run multiples of that: if humanoids work, China wins the hardware anyway, and the venture cohort holds the R&D bill." },
      { topic: "Chinese localization: cyclical share shift or permanent conquest?", bull: "The high end holds: precision reducers, servo quality, and 10-year reliability records keep Japanese and European makers in the cells that cannot fail, and China's own wage inflation feeds everyone's demand.", bear: "57% home share and climbing is exactly the 1980s Japanese playbook running in reverse: Estun and Inovance move upmarket, price the volume segment where scale lives, and Western OEMs lose the revenue base that funds the AI transition. ABB spinning off robotics reads as the incumbents pricing this in." },
      { topic: "Warehouse robotics: winner-take-most or commodity fleet?", bull: "Fleet data compounds: DeepFleet's 10% efficiency gain across 1M robots is a moat no startup can replicate; integration lock-in and uptime records make switching costs real for everyone selling to 3PLs and retailers.", bear: "The best operator (Amazon) is not a vendor and keeps its edge in-house, the Kiva precedent proves it; everyone else sells into thin logistics margins against falling hardware prices, and the SPAC-era graveyard (Berkshire Grey class) shows how that ends." }
    ],
    cycle: {
      where: "Installations plateaued at record levels (542k in 2024, IFR) after the 2021-2022 surge: China still grinding higher, Western auto and electronics capex soft, and the humanoid capital cycle running near peak froth. Classic mid-plateau: the adoption story intact, the order tape sideways.",
      drivers: "Manufacturing capex (auto + electronics ~half of demand), wages versus robot ASPs (the payback equation), reshoring and China policy, and AI capability jumps that reset what robots can do.",
      leads: [
        "JARA quarterly order and shipment statistics (free): the global proxy tape",
        "A3 North American robot orders (free quarterly press releases)",
        "Yaskawa quarterly results: February fiscal year-end makes it the cycle's earliest reporter",
        "China manufacturing PMI and robotics policy announcements (NBS, free)",
        "US core capital goods orders (FRED, free): the broad capex backdrop"
      ]
    },
    exposure: [
      { vehicle: "Japanese majors (FANUC, Yaskawa class)", note: "The pure machinery cyclicals: net cash, ~21% margins at the best house, order-tape driven" },
      { vehicle: "Components & sensors (Keyence, Nabtesco, Harmonic class)", note: "The toll bridges: the sector's quality compounders" },
      { vehicle: "ABB Robotics spinoff (2026 listing)", note: "A rare pure-play listing event: watch the multiple the market assigns" },
      { vehicle: "Warehouse & logistics automation (AutoStore, Zebra, Geek+ class)", note: "Fleet economics without Amazon's shadow priced in: underwrite uptime, not TAM" },
      { vehicle: "Humanoid exposure (Figure, 1X private; Tesla as listed proxy)", note: "Venture odds at venture sizes: pilots are not purchase orders" }
    ],
    catalysts: [
      { when: "Quarterly", what: "JARA and A3 order statistics; Yaskawa then FANUC earnings set the sector tape" },
      { when: "Late September, annually", what: "IFR World Robotics release: the industry's census and the year's headline numbers" },
      { when: "2026", what: "ABB Robotics listing and Unitree's STAR Market IPO: 2 price discoveries for the whole complex" },
      { when: "Humanoid milestones", what: "Optimus production starts, Figure fleet expansions, BMW-class pilot conversions: sentiment gates for every robotics multiple" }
    ],
    data: [
      { series: "IFR World Robotics installations, density, geography", source: "ifr.org press summaries (free)", why: "The census: 542k installs, China 54%, density tables" },
      { series: "JARA order/shipment statistics", source: "jara.jp (free)", why: "Japanese makers ship globally: the best free proxy for world demand" },
      { series: "A3 North American robot orders", source: "automate.org (free quarterly releases)", why: "The Americas tape, by vertical" },
      { series: "Core capital goods orders & capacity utilization", source: "FRED (free)", why: "The capex cycle that robot orders ride" },
      { series: "Company fleet and margin disclosures", source: "Amazon, ABB, FANUC filings (free)", why: "1M-robot fleets and the 21% vs 12% margin spread, from the source" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Orders fall 20% to 40% with capex and operating leverage reverses; net-cash Japanese names survive to buy share. Add the toll bridges in the trough: component demand returns before OEM P&Ls show it." },
      { regime: "Wage inflation / labor scarcity", behavior: "The payback period compresses and automation becomes the CFO's answer: structural order tailwind, cobots and RaaS lead because SMEs feel wages first." },
      { regime: "Rates rising", behavior: "RaaS books, venture-funded fleets, and pre-profit humanoid names feel it first; machinery multiples compress but net-cash balance sheets cushion the majors." },
      { regime: "Geopolitical / reshoring", behavior: "Reshored factories are greenfield automation: US, Mexico, and India orders offset China risk. Export controls on AI chips ripple into robot compute; localization accelerates on both sides." }
    ]
  },

  players: [
    { name: "FANUC", role: "The yellow standard", country: "JP", real: true, note: "~21% operating margin on record JPY 857B (~$5.7B) sales, FYE March 2026; net cash; makes its own servos and brains" },
    { name: "ABB Robotics", role: "Duopoly-tier OEM, spinning off", country: "CH", real: true, note: "$2.3B revenue at 12.1% margin (2024); separate listing set for 2026" },
    { name: "Yaskawa", role: "Motoman arms + servo king", country: "JP", real: true, note: "Sells motion components to rivals; February year-end makes it the cycle's first tape" },
    { name: "KUKA", role: "Auto-line specialist", country: "DE", real: true, note: "Owned by China's Midea since 2016: the localization parable in one cap table" },
    { name: "Universal Robots (Teradyne)", role: "Cobot category creator", country: "DK", real: true, note: "Opened the SME long tail; Odense cluster anchor" },
    { name: "Amazon Robotics", role: "The largest fleet operator", country: "US", real: true, note: "1,000,000th robot deployed July 2025; DeepFleet AI; buys, builds, and keeps it in-house" },
    { name: "Estun / Inovance", role: "Chinese champions", country: "CN", real: true, note: "The force behind domestic makers' first-ever >57% home share (2024)" },
    { name: "Figure / Tesla Optimus", role: "Humanoid capital magnets", country: "US", real: true, note: "BMW pilot and Fremont lines; hundreds deployed against valuations pricing millions" }
  ],

  geography: [
    { country: "JP", role: "Components + OEM heartland", note: "FANUC, Yaskawa, and the Nabtesco/Harmonic reducer duopoly: the industry's toll bridge" },
    { country: "CN", role: "54% of world demand", note: "295k installs (2024), >2M operational stock, domestic makers past 57% home share" },
    { country: "KR", role: "Density champion", note: "1,220 robots per 10,000 workers, the world's highest (IFR 2025)" },
    { country: "DE", role: "Auto integration + KUKA", note: "Europe's engineering pole; the continent takes 16% of world installs" },
    { country: "US", role: "Fleets + humanoid capital", note: "Americas take 9% of installs but host the software frontier: Amazon, Figure, Nvidia's robot stack" },
    { country: "DK", role: "The cobot cluster", note: "Odense: Universal Robots, MiR, and the collaborative ecosystem they seeded" }
  ],

  cycles: [
    { year: 1961, title: "Unimate at General Motors", kind: "shift", text: "The first industrial robot unloads die castings in New Jersey; Japan licenses the idea and builds the industry. Lesson: new robot categories start in auto plants, and auto still buys first." },
    { year: 1991, title: "Japan's capex winter", kind: "bust", text: "The bubble bursts and robot orders collapse with the machinery cycle; only the strong balance sheets keep funding R&D. Lesson: robots are capex, and capex is the cycle." },
    { year: 2009, title: "The GFC halving", kind: "bust", text: "Global installations roughly halve as auto and electronics freeze orders; China's stimulus then pulls the industry out and never lets go of first place. Lesson: a 40% order drop is a feature of this industry, not a tail risk." },
    { year: 2016, title: "Midea buys KUKA", kind: "shift", text: "Germany sells a robotics crown jewel to its biggest customer as Made in China 2025 targets the industry. Lesson: when your largest customer decides to become your competitor, it is a when, not an if." },
    { year: 2024, title: "Warehouse bust, humanoid boom", kind: "shift", text: "SPAC-era warehouse names crater (Berkshire Grey class) even as Amazon nears 1M robots and humanoid startups raise billions at venture marks. Lesson: category adoption and shareholder returns are different trades." }
  ],

  risks: [
    { name: "Chinese localization sweep", severity: 4, likelihood: 4, transmission: "Estun/Inovance class moves upmarket -> price cuts across the volume segment -> Western and Japanese share and margins compress -> R&D budgets shrink just as the AI transition demands them." },
    { name: "Capex cycle bust", severity: 3, likelihood: 4, transmission: "Auto + electronics capex freeze -> orders drop 20% to 40% (the 2009 template) -> operating leverage reverses -> leveraged names cut the future to pay the present." },
    { name: "Humanoid disillusionment", severity: 3, likelihood: 3, transmission: "Pilots miss cost-per-hour economics -> venture funding stops -> private marks crater -> the derating spills onto every listed name priced off the robotics theme." },
    { name: "Component chokepoint shock", severity: 4, likelihood: 2, transmission: "A reducer or robot-compute supply break (duopoly sourcing, one export control) -> industry-wide delivery slips -> integrators idle and adoption timelines push right." },
    { name: "Safety incident & labor backlash", severity: 3, likelihood: 2, transmission: "A high-profile injury or a political job-loss flashpoint -> standards tighten and speed limits drop -> deployment friction rises exactly where adoption was easiest." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Robots are programmable machines that do physical work: factory arms that weld cars, warehouse robots that carry shelves, and new human-shaped ones learning to do more. The world installs about 542,000 factory robots a year, China buys more than half of them, and companies automate because a robot that costs 2 years of a worker's wages can run for 10."] },
    L2: { title: "Intermediate", text: ["The industry stacks 3 layers: Japanese component makers (gears and motors) with the best margins, 4 big robot builders (FANUC, ABB, KUKA, Yaskawa) with machinery economics, and integrators who turn a $40k arm into a $150k working cell. Demand tracks factory spending, so orders swing hard with auto and electronics capex. The 2024 scoreboard: 542k installs, China at 54%, and Chinese domestic makers past 57% of their home market for the first time."] },
    L3: { title: "Advanced", text: ["Analyze by species: component monopolies on moat durability (the Nabtesco/Harmonic reducer duopoly), OEMs on order momentum and vertical integration (FANUC's ~21% margin versus ABB Robotics' 12.1% is integration depth, not luck), fleets on uptime and unit economics, humanoids on runway versus proof. Watch book-to-bill and the JARA/A3 order tape 2 to 4 quarters ahead of revenue, and treat the payback period (cell cost over labor savings) as the demand thermostat."] },
    L4: { title: "Expert", text: ["The live debates: whether Chinese localization (57% home share and rising) runs the 1980s Japan playbook against its teachers; whether the AI layer accrues to incumbents with installed bases or foundation-model natives; and whether humanoid economics close before venture patience does. Trade the order cycle against the adoption story: the 2026 price discoveries (ABB Robotics listing, Unitree IPO) will mark the whole complex, and Amazon's 1M-robot, DeepFleet playbook is the template for fleet-scale moats."] },
    L5: { title: "Institutional", text: ["Allocator's frame: robotics offers 3 uncorrelated exposures mislabeled as one theme: toll-bridge component compounders (core holdings), machinery cyclicals (rent them on the order tape with net-cash protection), and venture-grade AI optionality (size accordingly). Density doubling in 7 years says the adoption curve is real; the 2009 halving says the path is violent. The decade's alpha question is simple to state and hard to answer: when intelligence becomes the differentiator, does the value pool over the installed base, the fleet data, or the model weights?"] }
  },

  quiz: [
    { q: "Global industrial robot installations in 2024 were roughly:", choices: ["100,000", "542,000: more than double a decade earlier", "5 million", "50,000"], answer: 1, explain: "IFR's World Robotics 2025 counted 542,076 installations in 2024; the operational stock has passed 4M units." },
    { q: "China's share of 2024 global robot demand was about:", choices: ["54%, with domestic Chinese makers past 57% of their home market for the first time", "10%", "25%", "80%"], answer: 0, explain: "295,000 installs made China 54% of the world market, and 2024 was the first year local suppliers outsold foreign ones at home." },
    { q: "The robotics value chain's deepest moat sits in:", choices: ["Final assembly of arms", "Paint and packaging", "Precision reducers: the Nabtesco/Harmonic Drive duopoly, up to a third of an arm's cost", "Trade shows"], answer: 2, explain: "Decades of metallurgy and micron tolerances make the gear duopoly the hardest link to replicate: every humanoid BOM fight starts there." },
    { q: "FANUC out-earns ABB Robotics (roughly 21% vs 12.1% margin) mainly because:", choices: ["It advertises more", "It makes its own servos, controls, and brains: vertical integration is the margin", "Currency luck", "Lower wages"], answer: 1, explain: "Margin tracks integration depth in this industry; assemblers who buy the margin-rich parts from others keep machinery-grade economics." },
    { q: "A bare robot arm becomes a working factory cell at:", choices: ["The same price", "Half the price", "10x the price", "2x to 3x the price, via integrators: the industry's real bottleneck"], answer: 3, explain: "Tooling, vision, safety, and programming double or triple the cost, and integrator engineering capacity gates adoption more than robot supply does." },
    { q: "Amazon's warehouse robotics milestone in July 2025:", choices: ["Its 1,000,000th robot, plus the DeepFleet AI that routes the swarm ~10% more efficiently", "Its first robot", "Selling its robots to rivals", "Shutting the program down"], answer: 0, explain: "The Kiva playbook at full scale: buy it (2012), close it to rivals, build a million units, then monetize the fleet with software gains." },
    { q: "The world's highest robot density belongs to:", choices: ["The US", "South Korea: 1,220 robots per 10,000 workers (IFR 2025)", "Brazil", "France"], answer: 1, explain: "Electronics and auto concentration put Korea far ahead; global density doubled in 7 years, the adoption S-curve in one number." },
    { q: "The honest status of humanoid robots (as of 2026) is:", choices: ["Millions deployed", "Proven failures", "Hundreds to low thousands doing productive work, while valuations price millions", "Banned"], answer: 2, explain: "Figure's BMW pilot and Unitree's $17,990 G1 are real, but pilots are not purchase orders: the capital-to-deployment gap is the sector's defining spread." }
  ],

  sources: [
    { name: "IFR World Robotics 2025 (installations, China, density)", url: "https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years", feeds: "installations, geography, density" },
    { name: "Amazon: 1 millionth robot & DeepFleet (July 2025)", url: "https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model", feeds: "warehouse fleets" },
    { name: "ABB Robotics spinoff announcement (April 2025)", url: "https://www.supplychainbrain.com/articles/41579-abb-to-spin-off-robotics-unit-for-2026-stock-market-listing", feeds: "OEM economics, corporate actions" },
    { name: "A3 Association for Advancing Automation", url: "https://www.automate.org", feeds: "North American orders" }
  ]
};
