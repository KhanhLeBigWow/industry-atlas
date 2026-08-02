/* Industry Atlas - SPACE ECONOMY (full module, research-backed)
 * Anchors: global space economy $686B in 2025, +12% YoY, after a record $613B
 * in 2024 with commercial activity ~78% of the total and government spending
 * $132B (Space Foundation, The Space Report 2025 Q2, Jul 2025, and 2026 ed.);
 * SpaceX flew a record ~165 Falcon 9 missions in 2025, roughly 3/4 of them
 * for its own Starlink network, and carried ~90% of global upmass; Starlink
 * revenue ~$11B on 9M+ subscribers by end-2025 (Sacra; Forbes, Dec 2025);
 * launch cost fell from ~$54,500/kg (Shuttle era) to ~$1,500-2,800/kg on
 * reusable Falcon 9, with Starship targeting under $200/kg (Aerospace
 * America / AIAA); US Space Force FY2026 resources ~$40B: $26.4B base plus
 * $13.8B reconciliation funds largely for Golden Dome missile defense, up
 * from $28.9B enacted FY2025 (Aerospace Corp CSPS, Aug 2025; SpaceNews);
 * constellations: Starlink ~8,000 active satellites in 2025 crossing 10,000
 * by early 2026; Amazon Leo (ex-Kuiper) 3,236 planned; Eutelsat OneWeb ~634. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["space"] = {
  meta: {
    id: "space", name: "Space Economy", sector: "industrials", status: "full",
    tagline: "Launch costs fell 95% and a $686B orbital economy followed: one company flies most of the mass, and everyone else rides, races, or arms.",
    marketSize: { value: 686, unit: "$B", asOf: 2025, note: "Space Foundation, The Space Report: +12% YoY from $613B in 2024; commercial ~78%, government budgets ~$132B (2024)" },
    cagr: { value: 8, range: [6, 12], horizon: "2025-2032" },
    maturity: "growth", cyclicality: 2, capitalIntensity: 5, regulation: 4, disruption: 5
  },
  newsQuery: '(SpaceX OR Starlink OR Starship OR "satellite constellation" OR "rocket launch" OR "Space Force" OR "space economy")',

  overview: {
    definition: "The space economy builds, launches, and operates everything above the Karman line, then sells what comes back down: connectivity, imagery, navigation, and deterrence. A $686B market (2025, Space Foundation) that spent 50 years as a government program and the last 10 becoming an industry.",
    howItWorks: [
      "The stack has 3 layers. Upstream: rockets and satellites get built and launched, a hardware business with brutal capital intensity. Midstream: ground stations, mission control, and spectrum move bits between orbit and Earth. Downstream: services, where roughly 78% of the money actually lives: satellite broadband, TV, GPS-enabled everything, Earth imagery, and the defense missions that anchor demand. The rocket is the famous part; the recurring revenue is the business.",
      "One company rewired the economics. SpaceX flew a record ~165 Falcon 9 missions in 2025, roughly 90% of the mass the world put into orbit, and did it mostly for itself: about 3/4 of those flights carried its own Starlink satellites. Reusable boosters cut the cost of reaching low Earth orbit from ~$54,500/kg in the Shuttle era to roughly $1,500 to $2,800/kg: a 95%+ decline that turned constellations from bankruptcy bait (Iridium, 1999) into the industry's growth engine.",
      "Cheap launch created the megaconstellation. Starlink crossed 8,000 active satellites in 2025 (10,000+ by early 2026), serving 9M+ subscribers and generating ~$11B of revenue: roughly 2/3 of SpaceX's total, meaning the launch monopolist's real product is now a telecom subscription. Amazon Leo (formerly Kuiper) is racing an FCC deployment clock toward its 3,236-satellite plan, Eutelsat OneWeb operates ~634, and China is fielding state-backed answers (Guowang, Qianfan). Orbit is filling up fast, and so are the spectrum filings.",
      "Government remains the anchor tenant, and it is rearming. Global government space budgets hit $132B in 2024; the US Space Force's FY2026 resources approach $40B ($26.4B base plus $13.8B in reconciliation funds), nearly double 5 years ago, with the Golden Dome missile-defense architecture (est. up to $500B over time) driving satellite, sensor, and interceptor demand. Civil space (NASA's commercial cargo, crew, and lunar programs) pioneered the fixed-price contracting that built SpaceX in the first place: the state funds the frontier, then buys the service."
    ],
    history: [
      { era: "1957-1972", title: "The state race", text: "Sputnik to Apollo: superpower prestige funds everything; NASA peaks near 4% of the US federal budget, then the money and the missions recede." },
      { era: "1980-2000", title: "Commercial satcom v1", text: "GEO satellites mint money in TV and telephony; launch stays a government-adjacent oligopoly at $10,000+/kg; Iridium's $5B constellation goes bankrupt in 1999 and sells for $25M." },
      { era: "2002-2015", title: "NewSpace seeds", text: "SpaceX founded 2002; NASA's fixed-price COTS contracts replace cost-plus; Falcon 9 reaches orbit 2010; the first booster lands back at Cape Canaveral in Dec 2015." },
      { era: "2016-2021", title: "Reuse and froth", text: "Reflown boosters normalize; Starlink deployment begins 2019; a SPAC wave takes dozens of pre-revenue space firms public near the top; most lose 80%+ by 2023." },
      { era: "2022-present", title: "Industrial orbit", text: "Launch cadence goes weekly-to-daily; Starlink passes 9M subscribers; Space Force budgets surge toward $40B with Golden Dome; Starship test flights chase the next 10x cost drop." }
    ],
    trends: [
      { title: "Launch cost deflation", direction: "down", text: "From $54,500/kg (Shuttle) to ~$1,500-2,800/kg (Falcon 9 reusable); Starship targets under $200/kg. Each step down makes new orbital business models solvent and old satellite designs obsolete." },
      { title: "Megaconstellation buildout", direction: "up", text: "Starlink 10,000+ active satellites by early 2026, Amazon Leo deploying toward 3,236, China's Guowang and Qianfan scaling: LEO broadband is now a capex arms race with telecom economics as the prize." },
      { title: "Defense space super-cycle", direction: "up", text: "US Space Force resources near $40B FY2026 (from $28.9B FY2025); Golden Dome pulls missile-warning, tracking, and interceptor constellations into procurement. Allies follow; space is now a warfighting domain with a budget line to match." },
      { title: "Vertical integration", direction: "shift", text: "SpaceX builds the rocket, the satellite, the terminal, and sells the subscription: ~3/4 of its 2025 launches served itself. Competitors must integrate or accept their supplier is also their rival." },
      { title: "Orbital congestion & debris", direction: "shift", text: "Tens of thousands of satellites planned against a fixed orbital commons: collision-avoidance maneuvers, deorbit rules, and spectrum fights are becoming the industry's binding regulatory layer." }
    ],
    outlook: "The Space Foundation projects the space economy crossing $1T as soon as 2032, and the path there is mostly services: broadband subscribers, imagery analytics, and defense constellations, all riding launch costs that keep falling. The swing variables are Starship (a working $200/kg system re-prices everything again), the Golden Dome buildout (the largest space procurement wave since Apollo), and whether anyone builds a real competitor to SpaceX before the market fully consolidates around it. Concentration, not demand, is the sector's defining risk."
  },

  structure: {
    suppliers: [
      { name: "Satellite manufacturers (SpaceX in-house, Airbus, Thales Alenia, Rocket Lab, Maxar heritage)", note: "From bespoke $500M GEO birds to Starlink's assembly-line smallsats" },
      { name: "Propulsion & components (Rocketdyne class, electric-thruster and avionics makers)", note: "Engines, solar arrays, star trackers: the sole-source niches of orbit" },
      { name: "Semiconductor & sensor chain", note: "Rad-hardened chips, focal planes, phased-array antennas: space is a demanding chip customer" },
      { name: "Ground equipment (user terminals, gateways, teleports)", note: "The largest hardware volume: half the industry's revenue touches the ground segment" }
    ],
    producers: [
      { name: "SpaceX", note: "~165 Falcon 9 flights in 2025, ~90% of global upmass, Starlink's owner: the industry's center of gravity" },
      { name: "Rocket Lab", note: "The #2 US launcher by cadence (Electron) scaling into medium lift (Neutron)" },
      { name: "Blue Origin & ULA", note: "New Glenn and Vulcan: the funded challengers for national-security and Leo (Kuiper) launch" },
      { name: "China's CASC + commercial entrants", note: "The only other full-stack space power; state constellations plus Landspace-class startups" }
    ],
    distributors: [
      { name: "Direct-to-consumer (Starlink model) and enterprise/government contracts", note: "Satcom sells like telecom; imagery and PNT sell like data subscriptions; defense sells like programs" }
    ],
    customers: [
      { name: "Consumers & enterprises", note: "Broadband, backhaul, maritime/aviation connectivity: the fastest-growing revenue pool" },
      { name: "Governments & militaries", note: "$132B of global budgets (2024); the anchor tenant and the margin-insensitive buyer" },
      { name: "Data buyers (agriculture, insurance, logistics, finance)", note: "Earth observation's downstream: imagery in, decisions out" }
    ],
    regulators: [
      { name: "FCC & ITU", note: "Spectrum and orbital-slot licensing: the scarcest resource in space is a frequency" },
      { name: "FAA (launch licensing)", note: "Every US launch needs a license; cadence lives or dies on approval speed" },
      { name: "National security apparatus (ITAR, export controls)", note: "Rockets are missiles wearing payload fairings; the technology is born export-controlled" }
    ],
    capital: [
      { name: "Venture & growth equity", note: "SpaceX's private rounds made it among the most valuable private companies on Earth; VC funds the long tail" },
      { name: "Government contracts as financing", note: "NASA and DoD milestone payments are the industry's original venture capital" },
      { name: "Public markets (post-SPAC survivors)", note: "Rocket Lab class earned trust; dozens of 2021 SPACs did not. Capital access now tracks execution" }
    ]
  },

  valueChain: {
    intro: "From factory floor to orbit to a monthly subscription. Value capture inverts altitude: the rocket gets the glory, the ground terminal gets the volume, and the service contract gets the margin.",
    stages: [
      { id: "manufacturing", name: "Satellite & spacecraft manufacturing", what: "Buses, payloads, and the shift from bespoke to assembly line", players: "SpaceX (in-house), Airbus, Thales Alenia, Rocket Lab, Maxar heritage", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 4, concentration: 3 },
        linksTo: ["manufacturing", "semiconductors", "aerospace"],
        deeper: "Starlink turned satellites into consumer electronics: thousands of near-identical units at a per-unit cost legacy primes cannot touch. The bespoke GEO business ($200M+ per bird) shrinks while smallsat lines scale: the margin moved from craftsmanship to cadence." },
      { id: "launch", name: "Launch", what: "Getting mass to orbit: the industry's re-priced bottleneck", players: "SpaceX, Rocket Lab, ULA, Blue Origin, Arianespace, China's CASC", valueCapture: 4,
        economics: { grossMargin: [10, 50], capitalIntensity: 5, concentration: 5 },
        linksTo: ["aerospace", "defense"],
        deeper: "Reuse flipped the model: a Falcon 9 lists near $70M but a reflown booster's marginal cost is a fraction of that, so every reflight widens the moat. At ~90% of global upmass, SpaceX prices against expendable competitors while its own costs keep falling: monopoly economics earned through engineering, contestable only by Starship-class bets." },
      { id: "ground", name: "Ground segment", what: "Gateways, teleports, mission control, and user terminals", players: "KSAT, SES ground network, AWS/Azure ground stations, terminal makers", valueCapture: 2,
        economics: { grossMargin: [20, 35], capitalIntensity: 3, concentration: 2 },
        linksTo: ["telecom", "cloud"],
        deeper: "The unglamorous half of every constellation: phased-array user terminals sold near cost to win subscribers (Starlink's razor), gateway networks that determine real capacity, and cloud downlink-as-a-service turning antennas into an API. Volume lives here even when margin does not." },
      { id: "connectivity", name: "Satellite connectivity services", what: "Broadband, backhaul, mobility, and direct-to-device", players: "Starlink, Eutelsat OneWeb, SES, Viasat, Amazon Leo (deploying)", valueCapture: 5,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 4 },
        linksTo: ["telecom", "media"],
        deeper: "The prize: recurring telecom revenue at global reach. Starlink's ~$11B (2025) on 9M+ subscribers proved the model; direct-to-device deals with mobile carriers open a market measured in billions of handsets. The catch is a capex treadmill: LEO satellites deorbit in ~5 years, so the network must be rebuilt perpetually just to stand still." },
      { id: "data", name: "Earth observation, PNT & analytics", what: "Imagery, radar, GPS, and the decisions sold on top", players: "Planet, BlackSky, ICEYE, Vantor (Maxar), government GPS/Galileo", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 3, concentration: 2 },
        linksTo: ["agriculture", "insurance", "defense"],
        deeper: "Software margins on space hardware: daily whole-Earth imaging, SAR that sees through clouds, and free GPS underpinning trillions in ground activity. Defense and intelligence budgets carry the sector while commercial analytics (crop yields, insurance claims, supply chains) matures from demo to subscription." },
      { id: "missions", name: "Government & exploration services", what: "National-security launch, crew and cargo, lunar programs", players: "SpaceX, Northrop, Lockheed, L3Harris, Firefly, Intuitive Machines", valueCapture: 4,
        economics: { grossMargin: [10, 25], capitalIntensity: 4, concentration: 4 },
        linksTo: ["defense", "government"],
        deeper: "The anchor tenant's storefront: NSSL launch contracts, ISS and lunar cargo, missile-warning constellations. Golden Dome ($13.8B of FY2026 reconciliation funds, potentially hundreds of billions over time) is the largest new program pipeline since Apollo: fixed-price where possible, cost-plus where physics resists schedules." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share one industry. Launch companies are manufacturers whose economics hinge on reuse: build cost amortizes across flights, so cadence is margin (SpaceX's ~165 flights in 2025 versus competitors' handfuls is the whole story). Satellite operators are telecoms in a harder neighborhood: heavy upfront constellation capex, then subscription revenue racing satellite depreciation (LEO birds last ~5 years). Data and analytics players look like software once the constellation exists: 50%+ gross margins selling the same pixel twice.",
      "Government contracts stabilize everything: milestone payments fund development (NASA's fixed-price commercial programs built SpaceX's cash engine), and defense demand ($132B of global budgets in 2024, US Space Force near $40B FY2026) is margin-insensitive and counter-cyclical. The sector's financial trap is the constellation treadmill: revenue is recurring but so is the capex, and a network that stops launching starts shrinking. Watch cash conversion, not headline growth: the 2021 SPAC class grew backlogs while burning to zero."
    ],
    fingerprint: { grossMargin: 40, recurringRevenue: 55, capitalIntensity: 90, pricingPower: 60, cyclicality: 30, operatingLeverage: 75 },
    lines: [
      { label: "Launch cadence & upmass", note: "The sector's tape: flights per year and kilograms to orbit, by provider" },
      { label: "Constellation subscribers & ARPU", note: "Starlink 9M+ subs, ~$11B revenue (2025): the model everyone now chases" },
      { label: "Government awards & backlog", note: "NSSL, NASA, Golden Dome: the anchor revenue with decade-long tails" },
      { label: "Constellation capex & replenishment", note: "LEO satellites deorbit in ~5 years; the network is a perpetual construction site" },
      { label: "Cash runway (pre-profit names)", note: "The survival metric the SPAC class ignored; the market no longer does" }
    ],
    unitEconomics: {
      unit: "per Falcon 9-class launch (illustrative)",
      items: [
        { label: "List price", value: "~$70M", note: "external customers; Starlink flies at internal cost" },
        { label: "Marginal cost, reflown booster", value: "~$15-30M (est.)", note: "reuse is the margin: each reflight amortizes the airframe" },
        { label: "Cost to LEO", value: "~$1,500-2,800/kg", note: "vs ~$54,500/kg Shuttle era; Starship targets under $200/kg" },
        { label: "Starlink subscriber", value: "~$100-120/mo residential", note: "hardware terminal sold near cost to win the subscription" }
      ]
    }
  },

  kpiRefs: ["def-backlog", "semi-capex-intensity"],
  kpiLocal: [
    {
      id: "space-cost-per-kg", name: "Launch Cost per Kilogram", industries: ["space"],
      definition: "The price (or internal cost) of delivering 1 kg of payload to low Earth orbit: the industry's master variable.",
      formula: "Launch price / payload mass to LEO",
      interpretation: "Every sustained step down re-prices the whole stack: $54,500/kg (Shuttle) supported only governments; ~$1,500-2,800/kg (Falcon 9 reusable) funded megaconstellations; sub-$200/kg (Starship target) would make orbital industry and space-based compute plausible.",
      healthy: "Falling costs with rising cadence and reliability", warning: "Cost declines stalling, or a single provider setting the floor" },
    {
      id: "space-launch-cadence", name: "Launch Cadence & Reuse Rate", industries: ["space"],
      definition: "Orbital launches per year by provider, and the share flown on previously used boosters.",
      formula: "Flights/year; reuse rate = reflown-booster missions / total missions",
      interpretation: "Cadence is the launch business's margin engine and the constellation business's lifeline. SpaceX's ~165 Falcon 9 flights in 2025 (roughly 3/4 for Starlink) versus single-digit cadences elsewhere IS the competitive landscape.",
      healthy: "Rising cadence, high reuse, no reliability regression", warning: "Failures or licensing delays breaking the rhythm" }
  ],

  health: {
    intro: "Launch health is cadence and reliability; operator health is subscriber economics against the replenishment treadmill; everyone's health is access to patient capital and government anchors.",
    pillars: [
      { name: "Cadence & reliability", weight: 25, metrics: "Flights/year, success streak, reuse rate, license throughput", healthy: "Rising cadence with a clean failure record", warning: "Anomalies, stand-downs, FAA holds breaking momentum" },
      { name: "Constellation economics", weight: 25, metrics: "Subscriber growth, ARPU, capex per delivered Gbps, replenishment cost", healthy: "Revenue growth outpacing replenishment capex", warning: "Subscriber growth stalling while the deorbit clock runs" },
      { name: "Government anchor", weight: 20, metrics: "Backlog, NSSL/NASA/Golden Dome awards, cost-plus vs fixed-price mix", healthy: "Multi-year funded backlog across programs", warning: "Single-program dependence or award protests piling up" },
      { name: "Balance sheet & funding", weight: 15, metrics: "Cash runway, burn vs milestones, capital-markets access", healthy: "18+ months runway or self-funding operations", warning: "Sub-12-month runway with dilutive raises (the SPAC-class pattern)" },
      { name: "Regulatory & orbital position", weight: 15, metrics: "Spectrum rights, orbital slots, debris posture, deployment deadlines", healthy: "Licensed spectrum with deployment milestones on track", warning: "FCC deadlines slipping; conjunction warnings rising" }
    ],
    scoringNote: "In space, a single failure can pause a company for quarters: reliability compounds into cadence, cadence into cost, cost into every other advantage. Score the streak, not the story."
  },

  valuation: {
    intro: "A barbell market: one giant private company that resets the private-market tape with every secondary, and a public long tail priced on revenue multiples, backlog, and survival odds.",
    methods: [
      { name: "EV / Revenue (growth names)", use: "Pre-profit launch, EO, and satcom challengers scaling revenue", avoid: "Applying it to names without a path to gross-margin expansion", strengths: "Matches the stage; comparable across the class", weaknesses: "Ignores the capex treadmill entirely", range: { low: 4, high: 12, asOf: 2025, note: "execution leaders (Rocket Lab class) command the top of the band" } },
      { name: "EV / EBITDA (mature operators)", use: "Legacy GEO satcom (SES, Viasat, Eutelsat class) with real cash flow", avoid: "Treating declining GEO annuities as stable: LEO is eating them", strengths: "Standard, cash-based", weaknesses: "Terminal-value doubt: the multiple is low for a reason", range: { low: 4, high: 7, asOf: 2025, note: "value-trap territory unless multi-orbit pivots work" } },
      { name: "Constellation DCF (subscriber build)", use: "Modeling Starlink-style networks: subs x ARPU minus perpetual replenishment", avoid: "Trusting TAM-share assumptions; Iridium's ghost haunts every deck", strengths: "Forces the capex treadmill into the math", weaknesses: "Hypersensitive to churn, terminal costs, and satellite life", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; private-market SpaceX marks embed it" } },
      { name: "Backlog & program value (defense-adjacent)", use: "Primes and launch providers with NSSL/Golden Dome awards", avoid: "Face-value backlogs: protests, rescopes, and cost-plus caps bite", strengths: "The most fundable revenue in the sector", weaknesses: "Political budgets can rescope in a single appropriations cycle", range: { low: 10, high: 14, asOf: 2025, note: "EV/EBITDA for defense-space exposure, in line with primes" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a space name quickly: forward revenue times a stage-adjusted multiple, minus net debt (or plus net cash).",
      inputs: [
        { id: "vc-rev", label: "Forward revenue ($B)", min: 0.1, max: 20, step: 0.1, value: 1, fmt: "money" },
        { id: "vc-mult", label: "EV / Revenue multiple", min: 1, max: 15, step: 0.5, value: 6, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 20, step: 0.5, value: 0, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk's problem: the industry's best asset is private. SpaceX (~90% of upmass, Starlink's ~$11B) is unownable in public markets, so the playbook is picks-and-shovels and adjacency: the credible #2 launcher, defense-space budget beneficiaries, component sole-sources, and the EO names crossing into real subscriptions. Treat legacy GEO operators as melting ice cubes with option value, and the remaining SPAC-class names as venture positions wearing tickers.",
    debates: [
      { topic: "Starlink: natural monopoly or capex treadmill?", bull: "Vertical integration no one can match: free launch at marginal cost, terminal-to-orbit control, 9M+ subscribers compounding, and direct-to-device adding every phone on Earth to the TAM. The replenishment cycle is a moat: only SpaceX can afford it.", bear: "A network that must rebuild itself every ~5 years never stops paying capex; Amazon Leo and China's constellations arrive with sovereign-scale wallets; and rural broadband demand has a ceiling that fiber and 5G keep lowering. Telecom multiples, not software ones, await." },
      { topic: "Starship: does sub-$200/kg make the industry or break it?", bull: "Every cost step-down created markets no one priced: $1,500/kg made Starlink solvent, and $200/kg makes orbital data centers, manufacturing, and lunar logistics investable. Demand elasticity has beaten every capacity forecast since 2015.", bear: "Deflation is only fun for the deflator: a working Starship strands every competing launch business case, crushes satellite-hardware pricing, and hands one private company even more of the stack. If it slips, the industry planned around vaporware; if it works, the industry consolidates." },
      { topic: "Golden Dome: durable super-cycle or budget blip?", bull: "Missile-warning and tracking constellations, interceptors, and sensors: a genuinely new architecture with $13.8B already appropriated for FY2026 and estimates reaching $500B. Space Force resources nearly doubled in 5 years; great-power competition does not de-fund the high ground.", bear: "Half-trillion architectures meet appropriations reality: rescopes, protests, and continuing resolutions. The reconciliation money is one-time; the baseline actually fell to $26.4B. Buying primes on a program that has no fixed design is buying a press release." }
    ],
    cycle: {
      where: "Early infrastructure buildout with a defense overlay: launch supply still scarce outside SpaceX, constellations deploying against deadlines, government budgets accelerating, and public-market capital returning selectively after the 2021-2023 SPAC winter. Closer to 1998 telecom than 2007: real demand, real overbuild risk, unevenly funded.",
      drivers: "Launch cost trajectory (Starship), constellation deployment deadlines, defense appropriations (Space Force, Golden Dome), spectrum decisions, and private-market appetite for SpaceX paper.",
      leads: [
        "Orbital launch log: flights by provider, monthly (free: Jonathan McDowell's planet4589.org)",
        "Active-satellite counts and constellation growth (free: CelesTrak catalog)",
        "FAA commercial launch licenses and stand-downs (free: faa.gov)",
        "Defense appropriations and Space Force budget lines (free: congressional documents, CSPS budget briefs)",
        "FCC constellation filings and deployment-milestone orders (free: fcc.gov IB filings)"
      ]
    },
    exposure: [
      { vehicle: "Rocket Lab", note: "The public pure-play: cadence #2, vertical integration in miniature, Neutron the re-rating event" },
      { vehicle: "Defense primes' space units (L3Harris, Northrop, Lockheed)", note: "Golden Dome and missile-warning exposure at prime-contractor multiples" },
      { vehicle: "EO & analytics (Planet, BlackSky class)", note: "Software margins if subscriptions stick; defense contracts as the bridge" },
      { vehicle: "Legacy satcom (SES, Viasat, Eutelsat class)", note: "Cheap cash flows in secular decline: turnaround optionality, value-trap risk" },
      { vehicle: "SpaceX via pre-IPO funds/secondaries", note: "The actual industry, available only to qualified buyers at private marks" }
    ],
    catalysts: [
      { when: "Each Starship test campaign", what: "The industry's cost curve, live-streamed: full reuse milestones re-price everything" },
      { when: "Annual appropriations (fall)", what: "Space Force topline and Golden Dome awards: the defense anchor's size gets set" },
      { when: "FCC deployment deadlines", what: "Amazon Leo must hit constellation milestones; misses force waivers or fire sales" },
      { when: "Starlink/SpaceX IPO signals", what: "Any spin or listing reshapes the sector's public-market map overnight" }
    ],
    data: [
      { series: "Launch log & satellite catalog", source: "planet4589.org / CelesTrak (free)", why: "Cadence and constellation counts: the primary physical tape" },
      { series: "FAA licensed launches", source: "faa.gov (free)", why: "Licensing throughput gates US cadence" },
      { series: "Space Force budget documents", source: "DoD comptroller / CSPS briefs (free)", why: "The anchor tenant's spending, itemized" },
      { series: "FCC IB constellation filings", source: "fcc.gov (free)", why: "Spectrum: who may build what, by when" },
      { series: "The Space Report topline data", source: "spacefoundation.org (free summaries)", why: "The $686B market-size benchmark series" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Government anchor holds (defense and civil budgets lag cycles); consumer broadband adds slow; pre-profit names hit funding walls first. Rotate toward backlog-backed names." },
      { regime: "Rates rising", behavior: "The capex treadmill gets expensive: constellation builders and SPAC-class survivors reprice hardest; cash-flowing defense-space exposure outperforms." },
      { regime: "Geopolitical escalation", behavior: "Budgets jump (Space Force nearly doubled in 5 years), ASAT and jamming risk reprices resilience: proliferated constellations and defense primes win; commercial imagery demand spikes." },
      { regime: "Risk-on liquidity", behavior: "The sector's siren song: TAM slides and pre-revenue listings return. Own execution (cadence, subscribers, backlog); rent the froth, do not marry it." }
    ]
  },

  players: [
    { name: "SpaceX", role: "The integrated monopolist", country: "US", real: true, note: "~165 Falcon 9 flights in 2025, ~90% of global upmass; Starlink ~$11B revenue, 9M+ subs; among the most valuable private companies anywhere" },
    { name: "Rocket Lab", role: "The public pure-play challenger", country: "US", real: true, note: "Electron's small-launch cadence plus components; Neutron aims at Falcon 9's class" },
    { name: "Blue Origin", role: "The funded rival", country: "US", real: true, note: "New Glenn heavy lift, BE-4 engines (also powering ULA's Vulcan), lunar contracts: patient billionaire capital" },
    { name: "ULA (Boeing-Lockheed JV)", role: "Legacy national-security launcher", country: "US", real: true, note: "Vulcan flies the NSSL missions the Pentagon refuses to single-source" },
    { name: "Amazon Leo (ex-Kuiper)", role: "The constellation challenger", country: "US", real: true, note: "3,236 satellites planned, hundreds in orbit by early 2026, racing FCC deployment milestones" },
    { name: "Eutelsat OneWeb / SES", role: "European operators in transition", country: "FR", real: true, note: "~634 LEO satellites plus GEO fleets: multi-orbit pivots against Starlink's tide; IRIS2 the sovereign answer" },
    { name: "Planet Labs", role: "Earth-observation leader", country: "US", real: true, note: "Daily whole-Earth imaging; the test case for EO as a subscription software business" },
    { name: "CASC & China's constellations", role: "The state-scale competitor", country: "CN", real: true, note: "Guowang and Qianfan target Starlink-class scale; the only full-stack rival ecosystem" }
  ],

  geography: [
    { country: "US", role: "The center of gravity", note: "SpaceX, the Cape's launch cadence, NASA, and a Space Force budget near $40B: most of the industry's mass and money" },
    { country: "CN", role: "The systemic rival", note: "State constellations, a growing commercial launch sector, and lunar ambitions on Apollo-like timelines" },
    { country: "FR", role: "Europe's space capital", note: "Arianespace, Eutelsat, Airbus space: plus Kourou spaceport and the IRIS2 sovereign constellation push" },
    { country: "IN", role: "The cost innovator", note: "ISRO's frugal engineering, Chandrayaan lunar landings, and a liberalizing private space sector" },
    { country: "JP", role: "The precision niche", note: "JAXA, MHI's H3, ispace's lunar attempts, and world-class components" },
    { country: "RU", role: "The faded pioneer", note: "Soyuz heritage and ISS partnership, but sanctions and lost commercial launch share since 2022" }
  ],

  cycles: [
    { year: 1969, title: "Apollo's peak and cliff", kind: "boom", text: "NASA consumes ~4% of the US federal budget, lands on the Moon, then loses its mission and 2/3 of its funding within a decade. Lesson: prestige demand evaporates; only economic or security demand compounds." },
    { year: 1999, title: "Iridium's bankruptcy", kind: "bust", text: "A $5B, 66-satellite constellation meets a $3,000 handset and no customers; bankruptcy, then a $25M fire sale. Lesson: constellation capex spent ahead of proven demand is the sector's classic grave." },
    { year: 2015, title: "The booster lands", kind: "shift", text: "Falcon 9's first stage returns to Cape Canaveral in Dec 2015; reuse moves from heresy to baseline within 5 years. Lesson: cost curves, not contracts, decide who owns space." },
    { year: 2021, title: "The SPAC vintage", kind: "bust", text: "Dozens of pre-revenue space firms list via SPAC near the liquidity top; most lose 80%+ by 2023 and several liquidate. Lesson: cheap capital funds hardware dreams; physics and cash burn grade them." },
    { year: 2025, title: "The defense super-cycle", kind: "boom", text: "Space Force resources near $40B (from $28.9B FY2025) as Golden Dome pulls missile-defense constellations into procurement. Lesson: once space becomes a warfighting domain, the state returns as the anchor customer, at scale." }
  ],

  risks: [
    { name: "Single-provider concentration", severity: 4, likelihood: 3, transmission: "SpaceX stumble (Starship failure, safety stand-down, price hikes) -> the ~90% of upmass everyone depends on stalls -> constellation deadlines slip industry-wide and challengers cannot fill the gap." },
    { name: "Constellation overbuild & price war", severity: 4, likelihood: 3, transmission: "Starlink + Amazon Leo + China constellations chase the same subscribers -> ARPU compression while replenishment capex stays fixed -> the weakest balance sheets exit (the Iridium pattern at 10x scale)." },
    { name: "Orbital debris / Kessler cascade", severity: 5, likelihood: 2, transmission: "Collision or ASAT event in a crowded shell -> debris multiplies conjunctions -> insurance and maneuvering costs spike, orbits become unusable, and regulators freeze deployments." },
    { name: "Budget and program rescoping", severity: 3, likelihood: 3, transmission: "Continuing resolutions or Golden Dome redesigns -> awards slip and one-time reconciliation money is not renewed -> defense-anchored revenue guidance breaks." },
    { name: "Conflict extending into orbit", severity: 5, likelihood: 2, transmission: "Jamming, ASAT tests, or attacks on constellations in a great-power crisis -> commercial assets become targets -> insurers withdraw, dual-use operators face wartime exposure." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["The space economy is everything built for orbit and sold back on Earth: satellite internet, TV, GPS, weather, imagery, and defense. It reached $686B in 2025, and most of that money is services, not rockets. One company, SpaceX, launches about 90% of the world's mass to orbit and runs Starlink, a 9M+ subscriber internet service beamed from thousands of satellites. Rockets got roughly 95% cheaper per kilogram in 15 years: that price drop is why the industry suddenly works."] },
    L2: { title: "Intermediate", text: ["The stack: manufacturing and launch (hardware, brutal capex), ground segment (terminals and gateways), and services (where ~78% of revenue lives). Reusable boosters cut launch from ~$54,500/kg (Shuttle) to ~$1,500-2,800/kg, making megaconstellations solvent: Starlink passed 8,000 active satellites and ~$11B of revenue in 2025, with Amazon Leo (3,236 planned) and Chinese constellations chasing. Governments anchor everything: $132B of global budgets, and a US Space Force heading toward $40B with the Golden Dome missile-defense buildout."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: launchers live on cadence and reuse (SpaceX's ~165 flights in 2025 IS the moat), operators live on subscriber economics versus a replenishment treadmill (LEO satellites deorbit in ~5 years, so capex never ends), and data players earn software margins once the constellation exists. Government contracts are the funding floor: fixed-price NASA programs built SpaceX; NSSL and Golden Dome now do the same for the defense side. The valuation barbell: private SpaceX marks at one end, revenue-multiple survivors and melting GEO annuities at the other."] },
    L4: { title: "Expert", text: ["Trade the physical tape: launch logs, active-satellite counts, FCC deployment deadlines, and appropriations lines, all free and ahead of the filings. Live debates: Starlink as natural monopoly versus capex treadmill; Starship's sub-$200/kg as market-maker versus industry-breaker (deflation strands every rival business case); Golden Dome as durable super-cycle versus one-time reconciliation sugar. Respect the 2021 SPAC lesson: in space, backlog is not revenue, and revenue is not cash. Cadence, subscribers, and funded backlog are the only 3 honest metrics."] },
    L5: { title: "Institutional", text: ["Allocator's frame: the sector's dominant asset is private, so public exposure is structurally adjacent: the credible #2 launcher, defense primes' space units, EO-as-software, and component sole-sources. Size the concentration risk honestly: one company's cost curve sets everyone's economics, and its IPO (or its failure) is the sector's biggest single event. The demand foundation is real and compounding: connectivity TAM, a defense budget that nearly doubled in 5 years, and launch costs still falling. The discipline is Iridium's ghost: never underwrite capex ahead of demonstrated demand, however beautiful the constellation."] }
  },

  quiz: [
    { q: "The global space economy in 2025 was roughly:", choices: ["$68B", "$250B", "$686B, with ~78% of it commercial (Space Foundation)", "$5T"], answer: 2, explain: "The Space Report pegged 2025 at a record $686B, +12% YoY from $613B in 2024, with services, not rockets, earning most of it." },
    { q: "SpaceX's launch position in 2025 was:", choices: ["One of many similar providers", "~165 Falcon 9 flights and ~90% of global upmass, mostly flying its own Starlink satellites", "Limited to government missions", "Behind Ariane and ULA"], answer: 1, explain: "Roughly 3/4 of its record cadence served Starlink: the launch monopolist is its own biggest customer, and its real product is a telecom subscription." },
    { q: "Reusable rockets cut the cost of reaching LEO from ~$54,500/kg (Shuttle era) to about:", choices: ["$25,000/kg", "$10,000/kg", "$1,500-2,800/kg, with Starship targeting under $200/kg", "$1/kg"], answer: 2, explain: "A 95%+ decline: the master variable that made megaconstellations solvent and turned a government program into an industry." },
    { q: "Starlink by end-2025 had roughly:", choices: ["100,000 users on a pilot network", "9M+ subscribers and ~$11B of revenue: about 2/3 of SpaceX's total", "No consumer business", "Only military customers"], answer: 1, explain: "Starlink proved the constellation-as-telecom model, and its cash now funds Starship: the vertical integration competitors must answer." },
    { q: "Iridium's 1999 bankruptcy teaches that:", choices: ["Satellites don't work", "Constellation capex spent ahead of proven demand is the sector's classic grave: $5B built, $25M at the fire sale", "GEO beats LEO", "Government customers are unreliable"], answer: 1, explain: "The ghost in every constellation deck: demand must be underwritten, not assumed, because the capex is spent before the first subscriber signs." },
    { q: "US Space Force resources for FY2026 approach:", choices: ["$4B", "$12B", "$40B: a $26.4B base plus $13.8B largely for Golden Dome missile defense", "$500B"], answer: 2, explain: "Nearly double 5 years ago: the defense super-cycle is the sector's anchor demand, with Golden Dome the largest new program pipeline since Apollo." },
    { q: "The Kessler syndrome risk is:", choices: ["Rocket fuel shortages", "A collision cascade where debris multiplies until orbits become unusable", "Satellite software bugs", "Solar panel degradation"], answer: 1, explain: "With tens of thousands of satellites planned in fixed orbital shells, debris is the industry's shared-commons tail risk: severity 5, and rising congestion feeds it." },
    { q: "LEO constellations are a capex treadmill because:", choices: ["Rockets are single-use", "Satellites in low orbit deorbit in ~5 years, so the network must be perpetually rebuilt just to stand still", "Spectrum expires monthly", "Ground stations wear out"], answer: 1, explain: "Recurring revenue meets recurring capex: the honest constellation model prices perpetual replenishment, which only the best-funded players can sustain." }
  ],

  sources: [
    { name: "Space Foundation, The Space Report ($613B 2024; $686B 2025)", url: "https://www.spacefoundation.org/2025/07/22/the-space-report-2025-q2/", feeds: "market size, growth, commercial/government split" },
    { name: "Sacra: SpaceX revenue, Starlink, valuation", url: "https://sacra.com/c/spacex/", feeds: "SpaceX/Starlink financials, launch share" },
    { name: "Aerospace Corp CSPS: FY2026 Defense Space Budget (Golden Dome)", url: "https://csps.aerospace.org/papers/fy-2026-defense-space-budget-emergence-golden-dome", feeds: "defense space spending" },
    { name: "SpaceNews: FY2026 appropriations, Space Force at $26B base", url: "https://spacenews.com/defense-appropriations-bill-for-2026-funds-space-force-at-26-billion-presses-pentagon-on-golden-dome/", feeds: "budgets, programs, policy" }
  ]
};
