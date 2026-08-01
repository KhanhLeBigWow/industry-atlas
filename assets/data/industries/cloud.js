/* Industry Atlas - CLOUD COMPUTING (full module, research-backed)
 * Anchors: cloud infrastructure service revenue passed $400B in 2025, big 3 hold
 * ~63% with Q4 2025 shares AWS 28% / Azure 21% / Google Cloud 14% (Synergy Research,
 * Feb 2026); big-4 hyperscaler capex ~$410B in 2025, guided to ~$725B for 2026, up
 * ~77% (company guides via CNBC / Tom's Hardware, Feb 2026); AWS FY2025 revenue
 * ~$112B at ~35% operating margin, Q4 +24% YoY; Azure +39% and Google Cloud +48%
 * ($17.7B) in Q4 2025 (CNBC, Feb 2026); Gartner public cloud end-user spending
 * $723B in 2025, ~$850B forecast 2026 (+21.3%), sovereign IaaS $80B in 2026;
 * IEA: datacenter electricity ~415 TWh (2024) doubling to ~945 TWh by 2030. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["cloud"] = {
  meta: {
    id: "cloud", name: "Cloud Computing", sector: "technology", status: "full",
    tagline: "Renting the world's computers by the hour: the utility layer of the digital economy, now rebuilding itself as an AI factory.",
    marketSize: { value: 723, unit: "$B", asOf: 2025, note: "Gartner worldwide public cloud end-user spending; infrastructure services alone passed $400B (Synergy)" },
    cagr: { value: 20, range: [17, 22], horizon: "2025-2030" },
    maturity: "growth", cyclicality: 2, capitalIntensity: 5, regulation: 3, disruption: 2
  },
  newsQuery: '(AWS OR Azure OR "Google Cloud" OR hyperscaler OR "cloud infrastructure" OR "data center capex")',

  overview: {
    definition: "Cloud computing sells computing, storage, and software over the internet on demand, replacing company-owned servers with rented capacity from hyperscale providers. It is the utility layer beneath the digital economy and, since 2023, the physical substrate of the AI buildout.",
    howItWorks: [
      "The model is a utility with software margins on top. Hyperscalers (AWS, Microsoft Azure, Google Cloud) pour hundreds of billions into datacenters, chips, and fiber, then sell slices of that capacity by the second. Scale creates a flywheel: more customers justify more regions and services, which attract more customers. Gross margins on mature infrastructure run 60%+ because a server is sold many times over its 5-to-6-year life; AWS converts that into a ~35% operating margin (Q4 2025).",
      "Three layers stack on the same iron: IaaS (raw compute and storage), PaaS (databases, ML platforms), and SaaS (finished applications). Value migrates upward: raw compute commoditizes while proprietary services (databases, AI platforms) lock customers in and carry the margin. Egress fees, compliance certifications, and ecosystem gravity make leaving expensive, which is why committed multi-year contracts (reported as RPO) keep growing faster than revenue.",
      "AI rewired the economics. Training and inference demand turned hyperscaler capex from steady (~$120B/yr across the big 3 pre-2023) to explosive: roughly $410B across Amazon, Microsoft, Alphabet, and Meta in 2025, with 2026 guides totaling ~$725B, up ~77% (Amazon ~$200B, Alphabet $175B to $185B, Meta $125B to $145B, Microsoft $110B+). GPUs became the scarce input and electricity a siting constraint: the IEA expects datacenter power demand to double from ~415 TWh (2024) to ~945 TWh by 2030, nearly 3% of global electricity.",
      "The market structure is an oligopoly with a new fringe. Cloud infrastructure service revenue passed $400B in 2025 (Synergy), with the big 3 holding ~63%: AWS 28%, Azure 21%, Google Cloud 14% as of Q4 2025. Growth reaccelerated to multi-year highs on AI demand: in Q4 2025 AWS grew 24% (fastest in 13 quarters), Azure 39%, Google Cloud 48%. Beneath the trio, Oracle and the neoclouds (CoreWeave class) are taking share at the AI margin, renting GPUs the way lessors rent aircraft: debt-financed hardware against contracted demand."
    ],
    history: [
      { era: "2006", title: "AWS launches S3 and EC2", text: "Amazon turns internal infrastructure into a product; the on-demand era begins with servers rented by the hour." },
      { era: "2010-2015", title: "Enterprise conversion", text: "Startups build cloud-native; enterprises begin the great migration. Azure leverages Microsoft's enterprise estate; price wars commoditize raw compute." },
      { era: "2016-2022", title: "The triopoly consolidates", text: "AWS, Azure, and GCP take roughly two-thirds of infrastructure; per-second billing, global regions, and platform services deepen the moats. COVID pulls years of migration forward; 2022's optimization year halves growth." },
      { era: "2023-2024", title: "The GenAI shock", text: "ChatGPT detonates enterprise AI demand; capex budgets explode, GPU allocation becomes strategy, and cloud growth reaccelerates out of the optimization trough." },
      { era: "2025-present", title: "The gigawatt era", text: "Infrastructure services pass $400B (Synergy); big-4 capex hits ~$410B and 2026 guides reach ~$725B. Power replaces chips as the binding constraint; Oracle and the neoclouds break into the AI buildout." }
    ],
    trends: [
      { title: "AI capex supercycle", direction: "up", text: "Big-4 hyperscaler capex guided to ~$725B for 2026, up ~77% year over year; datacenter construction, GPUs, and power deals dominate spending while AI services are the fastest-growing revenue line." },
      { title: "Power as the bottleneck", direction: "shift", text: "Gigawatt campuses, nuclear PPAs, and multi-year grid queues decide where capacity gets built; the IEA sees datacenter electricity doubling to ~945 TWh by 2030." },
      { title: "Custom silicon escalation", direction: "up", text: "TPU, Trainium, and Maia scale as hyperscalers attack the GPU tax: the biggest cost line of the AI era becomes a make-vs-buy battleground." },
      { title: "Sovereignty and repatriation", direction: "shift", text: "Governments demand sovereign clouds (Gartner: $80B of sovereign IaaS spend in 2026); cost-conscious workloads move back on-prem at the margin without denting aggregate growth." },
      { title: "The fourth cloud rises", direction: "shift", text: "Oracle's AI backlog and the neoclouds (CoreWeave class) crack the triopoly at the GPU margin, financed by debt structures the incumbents never needed." }
    ],
    outlook: "Still compounding: Gartner sees end-user spending reaching ~$850B in 2026 (+21.3%), under a third of enterprise workloads have migrated, and AI adds a second demand engine on top of the migration. The open questions are whether AI revenue arrives fast enough to justify ~$725B of annual capex, and whether power constraints ration growth. The oligopoly's discipline, and its depreciation schedule, will decide the decade."
  },

  structure: {
    suppliers: [
      { name: "Chipmakers", note: "GPUs/accelerators and CPUs; the biggest cost line of the AI era, led by NVIDIA" },
      { name: "Utilities & power developers", note: "Gigawatt PPAs, on-site generation, nuclear restarts; power is the new land" },
      { name: "Datacenter builders & REITs", note: "Shells, cooling, and colocation capacity; liquid cooling defines the new generation" },
      { name: "Networking & optics", note: "Switches, fiber, subsea cables; interconnect intensity rises with AI clusters" }
    ],
    producers: [
      { name: "Hyperscalers (AWS, Azure, Google Cloud)", note: "~63% of global infrastructure spend (Synergy, Q4 2025)" },
      { name: "Second tier (Oracle, Alibaba, IBM, sovereign clouds)", note: "Specialists and regional champions; Oracle's AI backlog made it the fourth force" },
      { name: "Neoclouds (CoreWeave class)", note: "GPU-for-rent pure plays financed like aircraft lessors: hardware-backed debt against contracted AI demand" }
    ],
    distributors: [
      { name: "Direct + marketplaces", note: "Enterprise agreements and cloud marketplaces reselling third-party software" },
      { name: "Global system integrators", note: "Accenture-class firms migrate and manage workloads; the enterprise on-ramp" }
    ],
    customers: [
      { name: "Enterprises & governments", note: "Multi-year committed-spend contracts (RPO); the revenue visibility engine" },
      { name: "Startups & AI labs", note: "Cloud credits are the startup world's default infrastructure; AI labs are now the largest single tenants" },
      { name: "Consumers (indirectly)", note: "Every app, stream, and game rides on it" }
    ],
    regulators: [
      { name: "Data protection regimes (GDPR and kin)", note: "Data residency shapes region buildouts and sovereign-cloud SKUs" },
      { name: "Competition authorities", note: "Egress fees, licensing practices, and AI-deal structures under scrutiny" },
      { name: "Energy & grid regulators", note: "Interconnection queues and datacenter load rules now gate physical growth" }
    ],
    capital: [
      { name: "Own operating cash flow", note: "The big 3 fund most capex from software and ad profits; the coverage ratio is the health metric" },
      { name: "Debt & asset-backed structures", note: "Neoclouds finance GPUs like aircraft; datacenter ABS and vendor financing are new asset classes" }
    ]
  },

  valueChain: {
    intro: "From electrons to applications. Margin sits at the platform layer; scarcity sits in power and chips; the current capex flood is repricing every link.",
    stages: [
      { id: "power", name: "Power & land", what: "Gigawatt grid connections, PPAs, cooling water", players: "Utilities, developers", valueCapture: 2,
        economics: { grossMargin: [10, 30], capitalIntensity: 5, concentration: 2 },
        linksTo: ["utilities", "nuclear", "copper-mining"],
        deeper: "Interconnection queues run years; power availability now decides datacenter geography, reviving nuclear deals and behind-the-meter generation. The IEA sees datacenter load doubling to ~945 TWh by 2030, with the US adding up to 240 TWh." },
      { id: "silicon", name: "Silicon", what: "GPUs, custom accelerators, CPUs, networking chips", players: "NVIDIA, custom silicon teams", valueCapture: 5,
        economics: { grossMargin: [50, 78], capitalIntensity: 4, concentration: 5 },
        linksTo: ["semiconductors"],
        deeper: "The AI era's scarce input and its margin king; hyperscalers design custom chips (TPU, Trainium, Maia) to escape the GPU tax on a capex line now measured in hundreds of billions." },
      { id: "datacenter", name: "Datacenters", what: "Shells, racks, cooling, networks", players: "Hyperscalers, colo REITs", valueCapture: 3,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 3 },
        linksTo: ["construction", "real-estate"],
        deeper: "A $10B+ AI campus is the new unit of expansion; liquid cooling and rack density define the new generation, and colo REITs (Equinix, Digital Realty class) rent the overflow." },
      { id: "iaas", name: "Infrastructure services", what: "Compute, storage, networking on demand", players: "AWS, Azure, GCP", valueCapture: 4,
        economics: { grossMargin: [55, 70], capitalIntensity: 5, concentration: 5 },
        linksTo: ["cybersecurity", "telecom"],
        deeper: "The utility core: a $400B+ market (Synergy, 2025) that commoditizes slowly, defended by egress economics, compliance, and ecosystem gravity. The big 3 hold ~63%." },
      { id: "paas-ai", name: "Platforms & AI services", what: "Databases, analytics, model APIs", players: "Hyperscalers + model labs", valueCapture: 5,
        economics: { grossMargin: [65, 80], capitalIntensity: 3, concentration: 4 },
        linksTo: ["ai", "data-infrastructure"],
        deeper: "Where lock-in lives: proprietary databases and model platforms convert rented iron into stickiness and pricing power. AI services are the fastest-growing line at all 3 hyperscalers." },
      { id: "apps", name: "Applications (SaaS)", what: "Finished software riding the stack", players: "The entire SaaS industry", valueCapture: 4,
        economics: { grossMargin: [70, 85], capitalIntensity: 1, concentration: 2 },
        linksTo: ["saas"],
        deeper: "The cloud's largest tenant class and its distribution channel through marketplaces; every SaaS gross margin is a cloud COGS line in disguise." }
    ]
  },

  financials: {
    businessModel: [
      "A utility's balance sheet earning software returns: massive prepaid capex (servers depreciate over ~5 to 6 years) sold as high-margin recurring services. Committed-spend contracts (reported as RPO) make revenue visibility unusually good; incremental margins expand as regions fill. AWS runs a ~35% operating margin on ~$112B of 2025 revenue: the benchmark the sector prices from.",
      "The AI buildout bent the model: capex intensity jumped from ~15% of revenue toward 30%+ at the big hyperscalers, depreciation is accelerating as chip generations turn over faster, and the market now debates whether AI revenue arrives fast enough to cover ~$725B of guided 2026 capex. Watch RPO growth, capex guidance, and AI service disclosures together: today's capex is tomorrow's COGS."
    ],
    fingerprint: { grossMargin: 68, recurringRevenue: 90, capitalIntensity: 90, pricingPower: 65, cyclicality: 30, operatingLeverage: 75 },
    lines: [
      { label: "Revenue", note: "Consumption + committed contracts; watch constant-currency growth and AI contribution (Q4 2025: AWS +24%, Azure +39%, GCP +48%)" },
      { label: "Gross margin", note: "60%+ at scale; server life extensions added points, AI infra and faster chip turnover are diluting them" },
      { label: "Operating margin", note: "AWS ~35%, Azure comparable; scale leverage vs AI depreciation is the current fight" },
      { label: "Capex", note: "The story: ~$410B across the big 4 in 2025, guided to ~$725B for 2026" },
      { label: "RPO", note: "Contracted backlog; the forward indicator that moves stocks" }
    ],
    unitEconomics: {
      unit: "per deployed server (illustrative)",
      items: [
        { label: "Upfront cost", value: "prepaid capex", note: "depreciated over ~5 to 6 years; AI accelerators may turn over faster" },
        { label: "Utilization", value: "the profit lever", note: "a well-sold server prints margin; idle capacity is pure cost" },
        { label: "Gross margin at scale", value: "60%+", note: "mature regions; early AI buildouts run diluted" },
        { label: "Payback", value: "~2 to 4 years at healthy utilization", note: "then the asset earns until refresh; the AI debate is whether refresh comes sooner" }
      ]
    }
  },

  kpiRefs: ["cloud-rpo", "saas-nrr", "semi-capex-intensity"],
  kpiLocal: [
    {
      id: "cloud-capex-ocf", name: "Capex / Operating Cash Flow", industries: ["cloud"],
      definition: "Capital expenditure as a share of operating cash flow: whether the buildout is self-funded.",
      formula: "Capex / operating cash flow, trailing 4 quarters",
      interpretation: "Below ~70%, the buildout rides on software and ad profits; approaching 100%, growth depends on debt and the AI-monetization clock starts ticking. Big-4 capex of ~$725B guided for 2026 pushes this ratio to historic highs.",
      healthy: "Buildout funded from operations with buybacks intact", warning: "Debt-funded capex at maintenance-level growth"
    },
    {
      id: "cloud-capex-rev-gap", name: "Capex Growth vs Revenue Growth", industries: ["cloud"],
      definition: "The spread between capex growth and cloud revenue growth: the market's proxy for AI overbuild risk.",
      formula: "YoY capex growth (%) minus YoY cloud revenue growth (%)",
      interpretation: "2026 guides imply capex up ~77% against revenue growing in the 20s to 40s: a historically wide gap. It must close from one side or the other; which side closes it is the sector's entire debate.",
      healthy: "Gap narrowing as AI revenue ramps", warning: "Gap widening for multiple consecutive years"
    }
  ],

  health: {
    intro: "Cloud provider health is a balance of growth, contracted backlog, and capex discipline: the AI era added power and silicon security to the checklist.",
    pillars: [
      { name: "Growth & share", weight: 25, metrics: "Constant-currency growth vs peers; AI service traction", healthy: "Growing at or above the market (~20%+)", warning: "Sub-market growth while capex accelerates" },
      { name: "Backlog quality", weight: 20, metrics: "RPO growth and duration", healthy: "RPO growth >= revenue growth", warning: "Backlog stagnation or single-tenant concentration" },
      { name: "Unit economics", weight: 20, metrics: "Gross margin trend, server utilization", healthy: "Stable GM through the AI mix shift", warning: "GM erosion > 300bps without revenue offset" },
      { name: "Capex coverage", weight: 20, metrics: "Capex vs operating cash flow; AI revenue vs AI spend", healthy: "OCF comfortably funds the buildout", warning: "External funding needed for maintenance-level growth" },
      { name: "Power & supply security", weight: 15, metrics: "Contracted power pipeline, chip allocations", healthy: "Multi-year power and silicon secured", warning: "Growth gated by interconnection queues" }
    ],
    scoringNote: "Weights favor forward indicators: backlog and resource security predict the next 3 years better than trailing margins."
  },

  valuation: {
    intro: "Pure-play cloud is scarce (segments hide inside megacaps), so valuation blends segment multiples with sum-of-the-parts; the neoclouds trade on their own leveraged math.",
    methods: [
      { name: "EV / Revenue (segment)", use: "Valuing cloud segments and neoclouds on growth", avoid: "Mature, slowing units", strengths: "Comparable across profitability stages", weaknesses: "Ignores the capex divergence", range: { low: 5, high: 12, asOf: 2025, note: "premium for 25%+ growers with AI backlog" } },
      { name: "EV / EBITDA less capex burden", use: "The honest cash view of infrastructure economics", avoid: "Early buildout phases where capex is all growth", strengths: "Punishes capex denial", weaknesses: "Splitting growth vs maintenance capex is judgment", range: { low: 12, high: 20, asOf: 2025, note: "on EBITDA minus maintenance capex" } },
      { name: "Sum-of-the-parts (megacaps)", use: "Backing cloud value out of Amazon, Microsoft, Alphabet", avoid: "Treating segment margins as standalone", strengths: "The only way to price the trio's cloud exposure", weaknesses: "Shared infrastructure makes the carve-out artificial", range: { low: 6, high: 10, asOf: 2025, note: "implied EV/Revenue on segment disclosures" } },
      { name: "DCF with power-constrained scenarios", use: "Long-horizon AI demand cases", avoid: "Point estimates", strengths: "Forces the AI-monetization question explicitly", weaknesses: "Terminal assumptions dominate", range: { low: 0, high: 0, asOf: 2025, note: "scenario engine, not price target" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a cloud franchise quickly: segment revenue times a growth-adjusted EV/Revenue multiple, minus net debt (megacaps often carry net cash).",
      inputs: [
        { id: "vc-rev", label: "Cloud revenue ($B)", min: 5, max: 200, step: 5, value: 110, fmt: "money" },
        { id: "vc-mult", label: "EV / Revenue multiple", min: 3, max: 15, step: 0.5, value: 8, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B, negative = net cash)", min: -80, max: 100, step: 5, value: 0, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats cloud as the AI era's toll road, expressed through 3 megacaps that dominate every index: the position most portfolios own whether they chose it or not. The live work is second-derivative: capex guides as the AI demand signal, and the supplier chain (power, cooling, optics, datacenter REITs) as the purer trades. The neoclouds are the cycle's levered beta.",
    debates: [
      { topic: "Does AI capex earn its cost of capital?", bull: "RPO growth, AI service revenue disclosures, and enterprise commitments all accelerate; Q4 2025 growth (AWS +24%, Azure +39%, GCP +48%) was the fastest in years, and the buildout is contract-backed, not speculative. The clouds hold the customer relationship whatever model wins.", bear: "~$725B of guided 2026 capex, up 77%, against revenue growing a third that fast; depreciation is a lagged margin bomb, and history's verdict on capacity races (telecom 2000) is unkind. The capex-to-revenue gap is widening, not closing." },
      { topic: "Is power the new binding constraint or a solvable queue?", bull: "Hyperscalers are solving it with money: nuclear PPAs, behind-the-meter generation, and grid investments turn a constraint into a moat smaller rivals cannot fund.", bear: "Interconnection queues run 4+ years, communities are revolting against datacenter load, and the IEA's doubling of demand to ~945 TWh by 2030 lands on grids that take a decade to expand. Electricity costs rise into COGS exactly as AI margins are being promised." },
      { topic: "Repatriation and sovereignty: noise or leak?", bull: "Every optimization cycle ends with workloads returning; sovereignty demands become new product SKUs at premium pricing (Gartner: $80B sovereign IaaS in 2026).", bear: "At scale, the cloud premium over owned infrastructure is real; AI-era unit costs revive the build-vs-rent math for the biggest tenants, who are also the growth." }
    ],
    cycle: {
      where: "Mid AI-buildout, late in the easy phase: growth reaccelerated to multi-year highs, capex guides still climbing (~$725B for 2026), margins beginning to feel depreciation; the market has started pricing overbuild scenarios.",
      drivers: "Enterprise IT budgets, AI training and inference demand, power availability, and the capex-depreciation lag that turns today's buildout into tomorrow's margin question.",
      leads: [
        "Hyperscaler RPO growth vs revenue growth each quarter",
        "Capex guidance revisions: the AI demand signal the whole supply chain trades on",
        "GPU lead times and NVIDIA's datacenter print as the demand proxy",
        "Power PPA and interconnection announcements: capacity 2 years out",
        "Cloud optimization commentary: the consumption model's early-warning phrase"
      ]
    },
    exposure: [
      { vehicle: "The megacap trio (via parents)", note: "The core position; cloud economics wrapped in ads/software conglomerates" },
      { vehicle: "Neoclouds (CoreWeave class)", note: "Pure AI-compute beta with financing leverage; the cycle's high-wire act" },
      { vehicle: "Datacenter REITs & builders", note: "The landlord trade: contracted yields on the buildout" },
      { vehicle: "Power & cooling chain (utilities, nuclear, liquid cooling)", note: "The constraint trade: whoever solves gigawatts gets paid" },
      { vehicle: "Optics & networking suppliers", note: "Picks-and-shovels on datacenter interconnect intensity" }
    ],
    catalysts: [
      { when: "Late Jan / Apr / Jul / Oct", what: "Hyperscaler earnings: capex guides and RPO move the entire AI complex" },
      { when: "Nov-Dec (re:Invent, Ignite)", what: "Product and pricing narratives for the next year" },
      { when: "NVIDIA earnings (a month after the clouds)", what: "The demand check on everything the clouds claimed" },
      { when: "Power deal announcements", what: "Nuclear PPAs and interconnection wins re-rate the constraint story" }
    ],
    data: [
      { series: "Hyperscaler capex & RPO disclosures", source: "10-Qs / IR (free)", why: "The buildout's primary source" },
      { series: "Synergy / Canalys share estimates", source: "free press summaries", why: "Market share shifts quarterly" },
      { series: "NVIDIA datacenter revenue", source: "company IR (free)", why: "The demand proxy for the whole complex" },
      { series: "EIA electricity data", source: "eia.gov (free)", why: "Datacenter load growth in the actual grid numbers" },
      { series: "IEA Energy and AI reports", source: "iea.org (free)", why: "The power-constraint base case (415 TWh to ~945 TWh by 2030)" }
    ],
    playbook: [
      { regime: "Rates rising", behavior: "Megacap balance sheets shrug; the levered edge (neoclouds, REITs) feels it first. Multiple pressure is real but earnings are near-dated." },
      { regime: "Recession", behavior: "The 2022-23 template: consumption optimization before churn: growth halves, does not reverse. Enterprise commitments make it a slowdown story, not a collapse." },
      { regime: "Inflation", behavior: "Power and construction costs squeeze; pricing power on proprietary services offsets. Net mild negative." },
      { regime: "Risk-off", behavior: "Hides inside the megacaps until AI crowding unwinds, then leads the downside; the supplier chain moves 2x the parents in both directions." }
    ]
  },

  players: [
    { name: "AWS", role: "Infrastructure leader (~28% share)", country: "US", real: true, note: "~$112B 2025 revenue at ~35% operating margin; the category creator and margin benchmark" },
    { name: "Microsoft Azure", role: "Enterprise & AI challenger (~21%)", country: "US", real: true, note: "OpenAI partnership made it the AI-era share taker; +39% in Q4 2025" },
    { name: "Google Cloud", role: "#3 (~14%)", country: "US", real: true, note: "Data/AI-led; +48% in Q4 2025, the fastest of the trio; TPUs are its silicon hedge" },
    { name: "Oracle", role: "The fourth force", country: "US", real: true, note: "AI training deals exploded its RPO; database estate plus GPU landlord economics" },
    { name: "Alibaba Cloud", role: "China's leader", country: "CN", real: true, note: "Dominates a walled domestic market alongside Huawei and Tencent" },
    { name: "CoreWeave", role: "Neocloud standard-bearer", country: "US", real: true, note: "GPU-for-rent at scale, financed with hardware-backed debt: the cycle's levered pure play" },
    { name: "Equinix / Digital Realty", role: "Colo landlords", country: "US", real: true, note: "Rent the buildout's overflow; contracted yields on AI demand" },
    { name: "NVIDIA", role: "The arms dealer", country: "US", real: true, note: "Sells the scarce input to every combatant; its datacenter print is the sector's demand check" }
  ],

  geography: [
    { country: "US", role: "Home of the big 3 and most AI capacity", note: "Northern Virginia is the world's datacenter capital; US datacenter power demand may add up to 240 TWh by 2030 (IEA)" },
    { country: "CN", role: "Separate cloud ecosystem", note: "Alibaba, Huawei, Tencent serve a walled market; export controls split the AI stack" },
    { country: "IE", role: "European beachhead", note: "Dublin hosts the big 3's EU hubs; grid limits froze new datacenter connections" },
    { country: "DE", role: "Sovereignty frontier", note: "Frankfurt's FLAP hub plus sovereign-cloud demand from EU data rules" },
    { country: "SG", role: "Southeast Asian hub", note: "Power-constrained; capacity spills to Johor and Batam" },
    { country: "IN", role: "Fastest-growing major market", note: "Gartner sees Indian public cloud spend passing $17B in 2026; hyperscalers race to build regions" }
  ],

  cycles: [
    { year: 2001, title: "The telecom overbuild (the ancestor)", kind: "bust", text: "Dot-com era fiber and hosting capacity outran demand by years; the assets worked, the equity died. Lesson: infrastructure booms are usually right about demand and wrong about timing." },
    { year: 2006, title: "AWS launches", kind: "shift", text: "Amazon turns internal tooling into the on-demand utility; a retailer becomes the world's computer landlord. Lesson: the biggest platforms start as someone's internal cost center." },
    { year: 2020, title: "COVID acceleration", kind: "boom", text: "Digital everything pulled years of migration forward in quarters. Lesson: crises compress adoption curves; capacity built in advance wins." },
    { year: 2022, title: "The optimization year", kind: "bust", text: "Customers cut cloud bills; growth halved without churn. Lesson: consumption models breathe with customer cost discipline." },
    { year: 2023, title: "AI reacceleration", kind: "boom", text: "GenAI reversed the slowdown, detonated capex budgets, and turned clouds into gigawatt-scale AI factories. Lesson: a platform's next act can arrive from a tenant's breakthrough, not its own." }
  ],

  risks: [
    { name: "AI monetization gap", severity: 5, likelihood: 3, transmission: "AI revenue lags ~$725B of capex -> guides cut -> chips, construction, and power markets unwind simultaneously -> multiple derating across the complex" },
    { name: "Power scarcity", severity: 4, likelihood: 4, transmission: "Grid queues ration growth -> capacity slips right -> revenue guides miss while energy prices flow into COGS" },
    { name: "Depreciation squeeze", severity: 3, likelihood: 4, transmission: "Faster chip turnover shortens useful lives -> depreciation accelerates -> margins compress on a lag just as growth normalizes" },
    { name: "Neocloud credit unwind", severity: 3, likelihood: 3, transmission: "GPU rental prices fall -> hardware-backed debt sours -> forced capacity sales undercut hyperscaler pricing at the margin" },
    { name: "Regulatory fragmentation", severity: 3, likelihood: 3, transmission: "Egress/licensing remedies and sovereignty rules -> region-by-region compliance builds -> structurally higher cost per workload" }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Instead of buying computers, companies rent them over the internet from a few giant providers, paying only for what they use, like electricity. That is the cloud: someone else's computers, professionally run at unimaginable scale. It is now also where almost all artificial intelligence gets built and run."] },
    L2: { title: "Intermediate", text: ["Three layers stack on shared infrastructure: raw compute (IaaS), development platforms (PaaS), and finished apps (SaaS). The big 3 providers (AWS, Azure, Google Cloud) hold ~63% of a $400B+ infrastructure market and earn utility-like recurring revenue with software-like margins, defended by switching costs and ecosystems. AI demand reaccelerated growth to multi-year highs in 2025."] },
    L3: { title: "Advanced", text: ["The economics: prepaid capex sold as high-margin services, with committed contracts (RPO) giving rare revenue visibility; AWS converts ~$112B of revenue into a ~35% operating margin. Value migrates up-stack to proprietary platforms; raw compute commoditizes. AI turned capex explosive (~$410B across the big 4 in 2025, ~$725B guided for 2026) and made GPUs and gigawatts the binding constraints."] },
    L4: { title: "Expert", text: ["Model the capex-depreciation-monetization triangle: accelerating depreciation hits margins on a lag, so AI revenue ramp speed is the entire earnings debate; the 2026 capex guide grew ~77% against revenue growing a third as fast, and that gap must close from one side. Second-order plays: power developers, cooling, optics, and datacenter REITs move on hyperscaler guidance. The neoclouds add a levered credit cycle inside the growth story."] },
    L5: { title: "Institutional", text: ["The allocator's frame: cloud is the tollbooth on both digitization and AI, with demand visibility (RPO) unmatched in tech, but it has entered a capital-intensity regime where returns depend on rationing discipline among 3 rational oligopolists plus an undisciplined levered fringe. Watch capex-to-OCF, the capex-vs-revenue growth gap, RPO duration, and power pipelines as the leading set. The telecom-2000 analog fails if contracts hold; it rhymes if they were circular."] }
  },

  quiz: [
    { q: "Cloud gross margins stay high despite huge capex because:", choices: ["Servers are free", "Capacity is sold many times over its depreciable life at utility-plus pricing", "Governments subsidize it", "There is no competition"], answer: 1, explain: "A server earns revenue continuously for ~5 to 6 years; scale and utilization turn prepaid hardware into recurring high-margin services." },
    { q: "RPO measures:", choices: ["Server uptime", "Contracted future revenue not yet recognized", "Power usage", "GPU inventory"], answer: 1, explain: "Remaining performance obligations are the committed backlog, the best forward indicator in the sector." },
    { q: "Big-4 hyperscaler capex guidance for 2026 totals roughly:", choices: ["$75B", "$250B", "$725B, up ~77% from 2025", "$2T"], answer: 2, explain: "Amazon (~$200B), Alphabet ($175B to $185B), Meta ($125B to $145B), and Microsoft ($110B+) guided a combined ~$725B, versus ~$410B spent in 2025." },
    { q: "As of Q4 2025, the big 3's approximate infrastructure shares were:", choices: ["AWS 50%, Azure 30%, GCP 15%", "AWS 28%, Azure 21%, Google Cloud 14%", "Roughly equal thirds", "Azure leads AWS"], answer: 1, explain: "Synergy Research puts the trio at ~63% combined of a market that passed $400B in 2025, with AWS's lead slowly eroding." },
    { q: "The binding constraint on new AI datacenters is increasingly:", choices: ["Software licenses", "Grid power and interconnection", "Marketing budgets", "Land prices only"], answer: 1, explain: "Gigawatt campuses wait years in interconnection queues; the IEA sees datacenter electricity doubling to ~945 TWh by 2030." },
    { q: "2022's growth slowdown taught that consumption models:", choices: ["Are immune to cycles", "Breathe with customer cost optimization", "Only grow", "Depend on retail demand"], answer: 1, explain: "Customers can dial usage down without churning; optimization cycles hit growth before logos ever leave." },
    { q: "Hyperscalers design custom chips mainly to:", choices: ["Enter retail", "Reduce dependence on GPU pricing and capture the silicon margin", "Comply with regulation", "Slow AI down"], answer: 1, explain: "Custom accelerators (TPU, Trainium, Maia) attack the biggest cost line and hedge a single-vendor dependency." },
    { q: "The bear case's favorite historical analog for the AI buildout is:", choices: ["The 2008 housing crisis", "The telecom fiber overbuild of 2000", "Tulip mania", "The 1970s oil shocks"], answer: 1, explain: "Fiber demand eventually showed up, but years after the capacity did; the equity holders of the buildout rarely captured the value. Contract-backed RPO is the clouds' rebuttal." }
  ],

  sources: [
    { name: "Synergy Research Group (cloud market share)", url: "https://www.srgresearch.com/articles/cloud-market-share-trends-big-three-together-hold-63-while-oracle-and-the-neoclouds-inch-higher", feeds: "market size, shares" },
    { name: "Company filings & earnings calls", url: "https://www.sec.gov", feeds: "segment revenue, capex, RPO, margins" },
    { name: "Gartner cloud spending forecasts", url: "https://www.gartner.com/en/newsroom", feeds: "end-user spend, sovereign cloud" },
    { name: "IEA Energy and AI", url: "https://www.iea.org/reports/energy-and-ai", feeds: "datacenter power demand" }
  ]
};
