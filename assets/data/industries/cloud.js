/* Industry Atlas - CLOUD COMPUTING (profile-depth module) */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["cloud"] = {
  meta: {
    id: "cloud", name: "Cloud Computing", sector: "technology", status: "profile",
    tagline: "Renting the world's computers by the hour: the utility layer of the digital economy.",
    marketSize: { value: 700, unit: "$B", asOf: 2024, note: "infrastructure + platform + hosted software spend" },
    cagr: { value: 18, range: [15, 22], horizon: "2024-2030" },
    maturity: "growth", cyclicality: 2, capitalIntensity: 5, regulation: 3, disruption: 2
  },
  overview: {
    definition: "Cloud computing sells computing, storage, and software over the internet on demand, replacing company-owned servers with rented capacity from hyperscale providers.",
    howItWorks: [
      "The model is a utility with software margins on top. Hyperscalers (AWS, Microsoft Azure, Google Cloud) pour tens of billions into datacenters, chips, and fiber, then sell slices of that capacity by the second. Scale creates a flywheel: more customers justify more regions and services, which attract more customers. Gross margins on mature infrastructure run 60%+ because a server is sold many times over its life.",
      "Three layers stack on the same iron: IaaS (raw compute and storage), PaaS (databases, ML platforms), and SaaS (finished applications). Value migrates upward: raw compute commoditizes while proprietary services (databases, AI platforms) lock customers in and carry the margin.",
      "AI rewired the economics since 2023. Training and inference demand turned capex from steady (~$120B/yr across the big 3) to explosive ($250B+ run-rate), made GPUs the scarce input, and made electricity a siting constraint. The cloud is now simultaneously the AI industry's landlord, biggest customer, and biggest competitor."
    ],
    history: [
      { era: "2006", title: "AWS launches S3 and EC2", text: "Amazon turns internal infrastructure into a product; the on-demand era begins." },
      { era: "2010-2015", title: "Enterprise conversion", text: "Startups build cloud-native; enterprises begin the great migration. Azure leverages Microsoft's enterprise estate." },
      { era: "2016-2022", title: "The triopoly consolidates", text: "AWS, Azure, and GCP take ~65% of infrastructure; per-second billing, global regions, and platform services deepen the moats." },
      { era: "2023-present", title: "The AI buildout", text: "GenAI turns clouds into gigawatt-scale AI factories; capex explodes and power becomes the binding constraint." }
    ],
    trends: [
      { title: "AI capex supercycle", direction: "up", text: "Datacenter construction, GPUs, and power deals dominate spending; AI services are the fastest-growing revenue line." },
      { title: "Power as the bottleneck", direction: "shift", text: "Gigawatt campuses, nuclear PPAs, and grid queues decide where capacity gets built." },
      { title: "Repatriation and sovereignty", direction: "shift", text: "Cost-conscious workloads move back on-prem at the margin; governments demand sovereign clouds." }
    ],
    outlook: "Still compounding: under 30% of enterprise workloads have migrated, and AI adds a second demand engine. The open questions are AI monetization versus its capex, and whether power constraints ration growth."
  },
  structure: {
    suppliers: [
      { name: "Chipmakers", note: "GPUs/accelerators and CPUs; the biggest cost line of the AI era" },
      { name: "Utilities & power developers", note: "Gigawatt PPAs, on-site generation, nuclear restarts" },
      { name: "Datacenter builders & REITs", note: "Shells, cooling, and colocation capacity" },
      { name: "Networking & optics", note: "Switches, fiber, subsea cables" }
    ],
    producers: [
      { name: "Hyperscalers (AWS, Azure, Google Cloud)", note: "~65% of global infrastructure spend" },
      { name: "Second tier (Oracle, Alibaba, CoreWeave, sovereign clouds)", note: "Specialists and regional champions; GPU clouds rose with AI" }
    ],
    distributors: [
      { name: "Direct + marketplaces", note: "Enterprise agreements and cloud marketplaces reselling third-party software" },
      { name: "Global system integrators", note: "Accenture-class firms migrate and manage workloads" }
    ],
    customers: [
      { name: "Enterprises & governments", note: "Multi-year committed-spend contracts (RPO)" },
      { name: "Startups & AI labs", note: "Cloud credits are the startup world's default infrastructure" },
      { name: "Consumers (indirectly)", note: "Every app, stream, and game rides on it" }
    ],
    regulators: [
      { name: "Data protection regimes (GDPR and kin)", note: "Data residency shapes region buildouts" },
      { name: "Competition authorities", note: "Egress fees and licensing practices under scrutiny" }
    ],
    capital: [
      { name: "Own operating cash flow", note: "The big 3 fund capex from software and ad profits" },
      { name: "Debt & asset-backed structures", note: "GPU clouds finance chips like aircraft; datacenter ABS is a new asset class" }
    ]
  },
  valueChain: {
    intro: "From electrons to applications. Margin sits at the platform layer; scarcity sits in power and chips.",
    stages: [
      { id: "power", name: "Power & land", what: "Gigawatt grid connections, PPAs, cooling water", players: "Utilities, developers", valueCapture: 2, economics: { grossMargin: [10, 30], capitalIntensity: 5, concentration: 2 }, linksTo: ["utilities", "nuclear", "copper-mining"], deeper: "Interconnection queues run years; power availability now decides datacenter geography, reviving nuclear deals and behind-the-meter generation." },
      { id: "silicon", name: "Silicon", what: "GPUs, custom accelerators, CPUs, networking chips", players: "NVIDIA, custom silicon teams", valueCapture: 5, economics: { grossMargin: [50, 78], capitalIntensity: 4, concentration: 5 }, linksTo: ["semiconductors"], deeper: "The AI era's scarce input; hyperscalers design custom chips (TPU, Trainium) to escape the GPU tax." },
      { id: "datacenter", name: "Datacenters", what: "Shells, racks, cooling, networks", players: "Hyperscalers, colo REITs", valueCapture: 3, economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 3 }, linksTo: ["construction", "real-estate"], deeper: "A $10B+ AI campus is the new unit of expansion; liquid cooling and density define the new generation." },
      { id: "iaas", name: "Infrastructure services", what: "Compute, storage, networking on demand", players: "AWS, Azure, GCP", valueCapture: 4, economics: { grossMargin: [55, 70], capitalIntensity: 5, concentration: 5 }, linksTo: ["cybersecurity"], deeper: "The utility core: commoditizing slowly, defended by egress economics, compliance, and ecosystem gravity." },
      { id: "paas-ai", name: "Platforms & AI services", what: "Databases, analytics, model APIs", players: "Hyperscalers + model labs", valueCapture: 5, economics: { grossMargin: [65, 80], capitalIntensity: 3, concentration: 4 }, linksTo: ["ai", "data-infrastructure"], deeper: "Where lock-in lives: proprietary databases and model platforms convert rented iron into stickiness and pricing power." },
      { id: "apps", name: "Applications (SaaS)", what: "Finished software riding the stack", players: "The entire SaaS industry", valueCapture: 4, economics: { grossMargin: [70, 85], capitalIntensity: 1, concentration: 2 }, linksTo: ["saas"], deeper: "The cloud's largest tenant class and its distribution channel through marketplaces." }
    ]
  },
  financials: {
    businessModel: [
      "A utility's balance sheet earning software returns: massive prepaid capex (servers depreciate over ~6 years) sold as high-margin recurring services. Committed-spend contracts (reported as RPO) make revenue visibility unusually good; incremental margins expand as regions fill.",
      "The AI buildout bent the model: capex intensity jumped from ~15% to 25%+ of revenue at the big 3, depreciation is accelerating, and the market now debates whether AI revenue arrives fast enough to cover it. Watch RPO growth, capex guidance, and AI service disclosures together."
    ],
    fingerprint: { grossMargin: 68, recurringRevenue: 90, capitalIntensity: 85, pricingPower: 65, cyclicality: 30, operatingLeverage: 75 },
    lines: [
      { label: "Revenue", note: "Consumption + committed contracts; watch constant-currency growth and AI contribution" },
      { label: "Gross margin", note: "60%+ at scale; server life extensions added points, AI infra is diluting them" },
      { label: "Operating margin", note: "AWS ~30%+, Azure comparable; scale leverage vs AI depreciation is the current fight" },
      { label: "Capex", note: "The story: $250B+ across the big 3 (2025 run-rate); today's capex is tomorrow's COGS" },
      { label: "RPO", note: "Contracted backlog; the forward indicator that moves stocks" }
    ]
  },
  kpiRefs: ["cloud-rpo", "saas-nrr", "saas-gross-margin", "semi-capex-intensity"],
  health: {
    intro: "Cloud provider health is a balance of growth, contracted backlog, and capex discipline.",
    pillars: [
      { name: "Growth & share", weight: 25, metrics: "Constant-currency growth vs peers; AI service traction", healthy: "Growing at or above the market (~20%)", warning: "Sub-market growth while capex accelerates" },
      { name: "Backlog quality", weight: 20, metrics: "RPO growth and duration", healthy: "RPO growth >= revenue growth", warning: "Backlog stagnation" },
      { name: "Unit economics", weight: 20, metrics: "Gross margin trend, server utilization", healthy: "Stable GM through the AI mix shift", warning: "GM erosion > 300bps without revenue offset" },
      { name: "Capex coverage", weight: 20, metrics: "Capex vs operating cash flow; AI revenue vs AI spend", healthy: "OCF comfortably funds the buildout", warning: "External funding needed for maintenance-level growth" },
      { name: "Power & supply security", weight: 15, metrics: "Contracted power pipeline, chip allocations", healthy: "Multi-year power and silicon secured", warning: "Growth gated by interconnection queues" }
    ],
    scoringNote: "Weights favor forward indicators: backlog and resource security predict the next 3 years better than trailing margins."
  },
  valuation: {
    intro: "Pure-play cloud is scarce (segments hide inside megacaps), so valuation blends segment multiples with sum-of-the-parts.",
    methods: [
      { name: "EV / Revenue (segment)", use: "Valuing cloud segments and GPU clouds on growth", avoid: "Mature, slowing units", strengths: "Comparable across profitability stages", weaknesses: "Ignores the capex divergence", range: { low: 5, high: 12, asOf: 2024, note: "premium for 25%+ growers" } },
      { name: "EV / EBITDA less capex burden", use: "The honest cash view of infrastructure economics", avoid: "Early buildout phases where capex is all growth", strengths: "Punishes capex denial", weaknesses: "Splitting growth vs maintenance capex is judgment", range: { low: 12, high: 20, asOf: 2024, note: "on EBITDA minus maintenance capex" } },
      { name: "DCF with power-constrained scenarios", use: "Long-horizon AI demand cases", avoid: "Point estimates", strengths: "Forces the AI-monetization question explicitly", weaknesses: "Terminal assumptions dominate", range: { low: 0, high: 0, asOf: 2024, note: "scenario engine, not price target" } }
    ]
  },
  players: [
    { name: "AWS", role: "Infrastructure leader (~31% share)", country: "US", real: true, note: "The category creator; margin benchmark" },
    { name: "Microsoft Azure", role: "Enterprise & AI challenger (~24%)", country: "US", real: true, note: "OpenAI partnership made it the AI-era share taker" },
    { name: "Google Cloud", role: "#3 (~11%)", country: "US", real: true, note: "Data/AI-led; turned profitable in 2023" },
    { name: "Oracle, Alibaba, CoreWeave", role: "Specialists & regionals", country: "US", real: true, note: "Database estates, China, and GPU-for-rent models" }
  ],
  geography: [
    { country: "US", role: "Home of the big 3 and most AI capacity", note: "Virginia is the world's datacenter capital" },
    { country: "CN", role: "Separate cloud ecosystem", note: "Alibaba, Huawei, Tencent serve a walled market" },
    { country: "SG", role: "Southeast Asian hub", note: "Power-constrained; capacity spills to Johor and Batam" }
  ],
  cycles: [
    { year: 2020, title: "COVID acceleration", kind: "boom", text: "Digital everything pulled years of migration forward." },
    { year: 2022, title: "The optimization year", kind: "bust", text: "Customers cut cloud bills; growth halved. Lesson: consumption models breathe with customer cost discipline." },
    { year: 2023, title: "AI reacceleration", kind: "boom", text: "GenAI reversed the slowdown and detonated capex budgets." }
  ],
  risks: [
    { name: "AI monetization gap", severity: 4, likelihood: 3, transmission: "If AI revenue lags, capex unwinds through chips, construction, and power markets simultaneously." },
    { name: "Power scarcity", severity: 3, likelihood: 4, transmission: "Grid queues ration growth; energy prices flow into COGS." },
    { name: "Regulatory intervention", severity: 2, likelihood: 3, transmission: "Egress/licensing remedies and sovereignty rules fragment the model." }
  ],
  levels: {
    L1: { title: "Beginner", text: ["Instead of buying computers, companies rent them over the internet from a few giant providers, paying only for what they use, like electricity. That is the cloud: someone else's computers, professionally run at unimaginable scale."] },
    L2: { title: "Intermediate", text: ["Three layers stack on shared infrastructure: raw compute (IaaS), development platforms (PaaS), and finished apps (SaaS). The big 3 providers earn utility-like recurring revenue with software-like margins, defended by switching costs and ecosystems."] },
    L3: { title: "Advanced", text: ["The economics: prepaid capex sold as high-margin services, with committed contracts (RPO) giving rare revenue visibility. Value migrates up-stack to proprietary platforms; raw compute commoditizes. AI turned capex explosive and made GPUs and gigawatts the binding constraints."] },
    L4: { title: "Expert", text: ["Model the capex-depreciation-monetization triangle: accelerating depreciation hits margins on a lag, so AI revenue ramp speed is the entire earnings debate. Second-order plays: power developers, cooling, optics, and datacenter REITs move on hyperscaler guidance."] },
    L5: { title: "Institutional", text: ["The allocator's frame: cloud is the tollbooth on both digitization and AI, with demand visibility (RPO) unmatched in tech, but it is entering a capital-intensity regime where returns depend on rationing discipline among 3 rational oligopolists. Watch capex-to-OCF, RPO duration, and power pipelines as the leading triad."] }
  },
  quiz: [
    { q: "Cloud gross margins stay high despite huge capex because:", choices: ["Servers are free", "Capacity is sold many times over its depreciable life at utility-plus pricing", "Governments subsidize it", "There is no competition"], answer: 1, explain: "A server earns revenue continuously for ~6 years; scale and utilization turn prepaid hardware into recurring high-margin services." },
    { q: "RPO measures:", choices: ["Server uptime", "Contracted future revenue not yet recognized", "Power usage", "GPU inventory"], answer: 1, explain: "Remaining performance obligations are the committed backlog, the best forward indicator in the sector." },
    { q: "The binding constraint on new AI datacenters is increasingly:", choices: ["Software licenses", "Grid power and interconnection", "Marketing budgets", "Land prices only"], answer: 1, explain: "Gigawatt campuses wait years in interconnection queues; power availability now decides geography." },
    { q: "2022's growth slowdown taught that consumption models:", choices: ["Are immune to cycles", "Breathe with customer cost optimization", "Only grow", "Depend on retail demand"], answer: 1, explain: "Customers can dial usage down without churning; optimization cycles hit growth before logos ever leave." },
    { q: "Hyperscalers design custom chips mainly to:", choices: ["Enter retail", "Reduce dependence on GPU pricing and capture the silicon margin", "Comply with regulation", "Slow AI down"], answer: 1, explain: "Custom accelerators (TPU, Trainium) attack the biggest cost line and hedge a single-vendor dependency." }
  ],
  sources: [
    { name: "Company filings & earnings calls", url: "https://www.sec.gov", feeds: "segment revenue, capex, RPO" },
    { name: "IEA datacenter energy analysis", url: "https://www.iea.org", feeds: "power demand" }
  ]
};
