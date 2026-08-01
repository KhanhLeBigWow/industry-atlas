/* Industry Atlas - ARTIFICIAL INTELLIGENCE (full module, research-backed)
 * Anchors 2025-2026: Big-4 hyperscaler capex ~$400B in 2025, guided toward
 * $600B+ for 2026 (CNBC, Feb 2026; Tom's Hardware); OpenAI ARR ~$25B by
 * spring 2026 (Sacra); Anthropic reported a $30B run rate after ~80x growth
 * (VentureBeat, 2026); LLM API prices fell ~80% between early 2025 and early
 * 2026, with GPT-4-class capability at ~1/100th of its launch price
 * (TokenCost/CloudZero pricing indices); frontier training runs cost roughly
 * $200-500M in compute (Epoch AI class estimates, 2026); inference is 60-80%
 * of AI compute spend and rising (industry surveys, 2025-2026); 72% of
 * organizations use genAI but ~95% of pilots show no measurable P&L impact
 * (McKinsey State of AI; MIT study, 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["ai"] = {
  meta: {
    id: "ai", name: "Artificial Intelligence", sector: "technology", status: "full",
    tagline: "The fastest revenue ramps in business history, funded by the largest capex bet ever made: and the gap between the two is the whole story.",
    marketSize: { value: 300, unit: "$B", asOf: 2026, note: "est. generative AI model, API, and application revenue; frontier lab run-rates alone passed $50B in 2026, while ~$600B of infrastructure capex chases the layer above it" },
    cagr: { value: 40, range: [30, 55], horizon: "2025-2030" },
    maturity: "hypergrowth", cyclicality: 3, capitalIntensity: 5, regulation: 3, disruption: 5
  },
  newsQuery: '(OpenAI OR Anthropic OR "artificial intelligence" OR "large language model" OR "frontier model" OR "AI agents")',

  overview: {
    definition: "The AI industry trains foundation models on oceans of compute and sells the resulting intelligence three ways: consumer subscriptions, metered APIs, and enterprise agents. It sits between two industries it does not own: the chips and clouds beneath it (see semiconductors, cloud) and the software incumbents above it, all of whom it is simultaneously enriching and threatening.",
    howItWorks: [
      "The stack has 3 working layers. Frontier labs (OpenAI, Anthropic, Google DeepMind, plus open-weights players like Meta and DeepSeek) spend hundreds of millions per training run to produce foundation models. A serving and distribution layer (the labs' own APIs, plus cloud marketplaces like Bedrock and Vertex) meters those models out by the token. An application layer (coding agents, copilots, vertical AI) wraps the tokens in workflow and charges seats or outcomes. The physical substrate, GPUs and data centers, belongs to the semiconductor and cloud modules; this module is about who turns compute into revenue.",
      "The economics are inverted software: training is a massive fixed cost that depreciates in months, and inference is a real, physical cost of goods sold. A frontier-class training run cost roughly $200-500M in compute by 2026 (Epoch AI class estimates), yet the resulting capability advantage lasts only until the next rival release. Meanwhile inference, the cost of actually answering queries, has become 60-80% of AI compute spend and is still climbing as agentic workflows chain dozens of model calls per task. Labs therefore run software gross margins (est. 40-60% on inference) attached to industrial capex obligations.",
      "Prices collapse while revenue explodes: the industry's defining paradox. LLM API prices fell roughly 80% between early 2025 and early 2026, and GPT-4-class capability now costs about 1/100th of its 2023 launch price (DeepSeek's V3, landing at $0.14 per 1M input tokens in December 2024, reset the floor). Yet volume has outrun deflation spectacularly: Anthropic went from a ~$1B run rate at the end of 2024 to ~$9B at the end of 2025 to a reported $30B+ by spring 2026 (VentureBeat), while OpenAI reached roughly $25B ARR before growth flattened near that level through spring 2026 (Sacra). Coding agents and enterprise APIs, not consumer chat, drove the divergence.",
      "Everything hangs on the capex umbilical. The Big 4 hyperscalers spent about $400B on capex in 2025 and guided toward $600B+ for 2026 (CNBC, Feb 2026), much of it renting compute forward to the labs; OpenAI alone cited ~$1.4T in nameplate infrastructure commitments in late 2025 before resetting expectations to about $600B through 2030 (Feb 2026). Against that stands the adoption reality check: 72% of organizations report using genAI (McKinsey), but roughly 95% of enterprise pilots show no measurable P&L impact (MIT, 2025). The industry's valuation rests on closing that gap before the depreciation bill arrives."
    ],
    history: [
      { era: "1956-2011", title: "Winters and springs", text: "Symbolic AI and expert systems overpromise twice; funding freezes into 2 AI winters while machine learning quietly matures in academia and ad targeting." },
      { era: "2012-2017", title: "Deep learning works", text: "AlexNet wins ImageNet on gaming GPUs (2012); the transformer architecture arrives (2017). Neural networks go from curiosity to the substrate of Big Tech." },
      { era: "2018-2022", title: "Scaling laws", text: "GPT-2 and GPT-3 show capability scales predictably with compute and data; the frontier-lab species forms (OpenAI restructures, Anthropic founded 2021); training budgets jump from thousands to millions of dollars." },
      { era: "2022-2024", title: "The ChatGPT moment", text: "ChatGPT hits 100M users in 2 months, the fastest consumer adoption ever recorded; GPT-4 lands; a funding supercycle begins and Nvidia reprices as the era's tollbooth." },
      { era: "2025-present", title: "Agents and the capex supercycle", text: "Reasoning models and coding agents turn tokens into labor; DeepSeek proves frontier-class capability at 1/100th the price (Jan 2025); hyperscaler capex passes $400B; lab run-rates reach the tens of billions while the monetization gap becomes the market's obsession." }
    ],
    trends: [
      { title: "Token price collapse", direction: "down", text: "API prices fell ~80% from early 2025 to early 2026; GPT-4-class capability costs ~1/100th of launch. Deflation is the product working as intended, and the margin question that never goes away." },
      { title: "Agents eat inference", direction: "up", text: "Agentic workflows chain many model calls per task: inference is 60-80% of AI compute spend and forecast to keep rising, flipping the industry's cost center from training to serving." },
      { title: "Enterprise out-monetizes consumer", direction: "shift", text: "Coding and enterprise APIs drove Anthropic's reported ramp past $30B while OpenAI's consumer-heavy ARR flattened near $25B through spring 2026: the revenue crown moved to whoever sells work, not chat." },
      { title: "Capex supercycle", direction: "up", text: "Big-4 hyperscaler capex: ~$400B in 2025, guided toward $600B+ for 2026, with multi-trillion cumulative projections through 2030. The AI layer's growth is being pre-paid by someone else's balance sheet." },
      { title: "Open weights and efficiency", direction: "shift", text: "DeepSeek-class models deliver near-frontier capability at commodity prices; open weights commoditize mid-tier capability and force the frontier to keep earning its premium every release cycle." }
    ],
    outlook: "The next 3 years decide whether AI is the new cloud (a margin-rich utility with a few winners) or the new telecom buildout of 1999 (right about the future, wrong about who pays for it). Watch 3 gaps: run-rate revenue versus the ~$600B/yr capex chasing it; the 72% adoption rate versus the ~5% of pilots with P&L proof; and frontier pricing power versus open-weight deflation. The labs that convert coding and agent workloads into durable enterprise contracts compound; everyone else is training expensive models into a falling price tape."
  },

  structure: {
    suppliers: [
      { name: "GPU and accelerator makers (Nvidia and rivals)", note: "The tollbooth: see the semiconductors module for the industry beneath this one" },
      { name: "Hyperscale clouds (Microsoft, AWS, Google)", note: "Landlords, investors, and rivals to the labs simultaneously: ~$400B of 2025 capex" },
      { name: "Data, annotation, and RLHF vendors (Scale AI class)", note: "Human feedback and curated corpora: the unglamorous input to every frontier run" },
      { name: "Power and data-center developers", note: "Gigawatts are the new wafers: electricity availability now gates training schedules" }
    ],
    producers: [
      { name: "Frontier labs (OpenAI, Anthropic, Google DeepMind)", note: "The capability oligopoly; run-rates of $25B and $30B+ reported by spring 2026" },
      { name: "Open-weights players (Meta Llama, DeepSeek, Mistral)", note: "Give the model away, monetize elsewhere or later: the deflation engine" },
      { name: "Application and agent companies", note: "Coding agents, copilots, vertical AI: thin wrappers or the next SaaS giants, debated daily" },
      { name: "Chinese ecosystem (DeepSeek, Alibaba Qwen, Moonshot)", note: "Compute-constrained, efficiency-obsessed, and exporting price pressure globally" }
    ],
    distributors: [
      { name: "Model APIs and cloud marketplaces", note: "Bedrock, Vertex, Azure AI: the clouds clip the ticket on model consumption" },
      { name: "App stores and browsers", note: "Consumer AI rides existing distribution; assistants fight for the default slot" },
      { name: "Routers and aggregators (OpenRouter class)", note: "Multi-model switching layers that make token prices brutally comparable" }
    ],
    customers: [
      { name: "Developers", note: "The metered-API constituency; coding is the killer workload of 2025-2026" },
      { name: "Enterprises", note: "72% report genAI use, but only ~1/3 have scaled beyond pilots: the conversion battle" },
      { name: "Consumers", note: "Hundreds of millions of weekly chat users; monetization per user still shallow" }
    ],
    regulators: [
      { name: "EU (AI Act)", note: "The first comprehensive regime: GPAI obligations phased in from 2025; Brussels-effect ambitions" },
      { name: "US federal and state patchwork", note: "Executive orders, export controls on compute, and state-level AI laws in lieu of one statute" },
      { name: "Courts (copyright)", note: "Training-data litigation could reprice the industry's core input retroactively" },
      { name: "Safety institutes (UK AISI, US CAISI)", note: "Pre-deployment evaluation norms forming around frontier releases" }
    ],
    capital: [
      { name: "Hyperscaler strategic capital", note: "Microsoft in OpenAI, Amazon and Google in Anthropic: customer, landlord, and shareholder at once" },
      { name: "Venture megarounds and sovereign wealth", note: "Single rounds of $10B+ became normal; OpenAI raised $122B across 2025-2026 vehicles" },
      { name: "Compute-backed debt and leases", note: "GPU-collateralized borrowing and take-or-pay cloud deals: capex migrating into credit markets" }
    ]
  },

  valueChain: {
    intro: "From electrons to agents. Value pools at the two ends: the compute layer beneath (priced like scarcity) and the application layer above (priced like software), while the model layer in the middle fights deflation with scale.",
    stages: [
      { id: "compute", name: "Compute & training infrastructure", what: "GPU clusters, data centers, power", players: "Nvidia, hyperscalers, neoclouds (CoreWeave class)", valueCapture: 5,
        economics: { grossMargin: [40, 70], capitalIntensity: 5, concentration: 5 },
        linksTo: ["semiconductors", "cloud", "utilities"],
        deeper: "The layer eating the profit pool so far: ~$400B of 2025 hyperscaler capex guided toward $600B+ for 2026. Covered in depth by the semiconductors and cloud modules; for the AI layer it is the dominant cost line and the industry's binding constraint (power and accelerator supply gate every roadmap)." },
      { id: "data", name: "Data & feedback", what: "Training corpora, licensing, annotation, RLHF", players: "Scale AI class, publishers, expert networks", valueCapture: 2,
        economics: { grossMargin: [30, 50], capitalIntensity: 2, concentration: 3 },
        linksTo: ["data-infrastructure", "media"],
        deeper: "The web has been scraped; the frontier now pays for what it once took. Content licensing deals, expert-generated data, and human feedback pipelines are recurring costs, and copyright litigation could convert the industry's original sin into a permanent royalty." },
      { id: "models", name: "Frontier models", what: "Training and owning foundation models", players: "OpenAI, Anthropic, Google DeepMind, Meta, DeepSeek", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 4 },
        linksTo: ["cloud", "venture-capital"],
        deeper: "A $200-500M training run buys a capability lead measured in months. The moat is not the weights (open models chase every release) but the compounding loop: revenue funds compute, compute funds the next model, and enterprise workflows harden around a vendor. Inference gross margins (est. 40-60%) must amortize the fixed-cost treadmill." },
      { id: "serving", name: "Serving & distribution", what: "APIs, marketplaces, routers metering tokens", players: "Lab APIs, Bedrock, Vertex, Azure AI, OpenRouter", valueCapture: 3,
        economics: { grossMargin: [15, 35], capitalIntensity: 3, concentration: 4 },
        linksTo: ["cloud", "saas"],
        deeper: "The clouds clip a margin on every token their marketplaces serve, and routers make prices ruthlessly comparable: an 80% 1-year price decline is what a transparent, multi-vendor token market does to a layer with weak switching costs." },
      { id: "tooling", name: "Tooling & orchestration", what: "Evals, observability, vector stores, guardrails, agent frameworks", players: "LangChain class, vector DB vendors, AI-security startups", valueCapture: 2,
        economics: { grossMargin: [60, 80], capitalIntensity: 1, concentration: 2 },
        linksTo: ["data-infrastructure", "cybersecurity", "saas"],
        deeper: "Classic picks-and-shovels software economics, but the labs keep absorbing the best tools into the platform (memory, retrieval, agents-as-APIs). Survivors own the enterprise control plane: evaluation, governance, and security around models rather than features beside them." },
      { id: "applications", name: "Applications & agents", what: "Coding agents, copilots, vertical AI sold as seats or outcomes", players: "Cursor class, GitHub Copilot, vertical AI (legal, health, finance)", valueCapture: 4,
        economics: { grossMargin: [50, 80], capitalIntensity: 1, concentration: 2 },
        linksTo: ["saas", "media", "robotics"],
        deeper: "Where AI revenue becomes durable software revenue, if the wrapper adds workflow, data, and distribution the model cannot swallow. Coding proved the category (the fastest-growing software products ever measured); the open question is how much margin survives sitting between a deflating input and an incumbent-crowded market." }
    ]
  },

  financials: {
    businessModel: [
      "Read the layer stack as 3 different P&Ls. Frontier labs: metered API plus subscription revenue against inference COGS and a training fixed-cost treadmill: watch run-rate growth versus compute commitments, and gross margin as prices fall. Application companies: SaaS economics with a new COGS line (tokens) that deflates 50-80%/yr: gross margins expand mechanically if pricing holds. The compute layer beneath (semis, cloud) books the profits today: the AI layer is, so far, its largest customer and its justification.",
      "The defining financial fact is the funding gap. Combined frontier-lab run-rates in the tens of billions ($25B OpenAI, $30B+ reported at Anthropic by spring 2026) stand against ~$600B of annual infrastructure capex and OpenAI's ~$600B compute program through 2030. Labs burn billions annually and refinance through megarounds and strategic capital; the model works only while capability growth keeps converting into revenue growth faster than GPUs depreciate. Volume has outrun price deflation so far: an 80% price cut alongside 3x to 80x revenue growth is the bull case in a single sentence."
    ],
    fingerprint: { grossMargin: 50, recurringRevenue: 70, capitalIntensity: 85, pricingPower: 45, cyclicality: 55, operatingLeverage: 80 },
    lines: [
      { label: "Run-rate revenue (ARR)", note: "The sector's tape: monthly disclosures and leaks move private marks billions" },
      { label: "Compute costs & commitments", note: "Take-or-pay cloud deals and training budgets: the industry's PDP equivalent" },
      { label: "Inference gross margin", note: "Price per token versus cost per token: the margin war fought every release" },
      { label: "Burn & runway", note: "Billions per year at the frontier; funding access is a competitive weapon" },
      { label: "Enterprise vs consumer mix", note: "API and agent revenue retains and expands; consumer chat monetizes shallowly" }
    ],
    unitEconomics: {
      unit: "per 1M tokens (frontier API, 2026)",
      items: [
        { label: "Flagship list price", value: "~$2-25 blended", note: "input tokens cheap, output dear; premium tiers hold the top of the tape" },
        { label: "GPT-4-class capability price", value: "~1/100th of 2023 launch", note: "the deflation constant: capability migrates down-tier every year" },
        { label: "Inference gross margin", value: "est. 40-60%", note: "before amortizing training; hardware generations cut serving cost ~10x" },
        { label: "Frontier training run", value: "~$200-500M compute", note: "a fixed cost with a shelf life of months (Epoch AI class estimates, 2026)" }
      ]
    }
  },

  kpiRefs: ["saas-arr", "saas-gross-margin", "semi-capex-intensity"],
  kpiLocal: [
    {
      id: "ai-token-price", name: "Price per Million Tokens", industries: ["ai"],
      definition: "The blended market price of a given capability tier, per 1M tokens; the industry's unit-price tape.",
      formula: "Blended $ per 1M tokens (input/output weighted) for a fixed capability class, tracked over time",
      interpretation: "Prices fell ~80% from early 2025 to early 2026; GPT-4-class capability costs ~1/100th of launch. Deflation is healthy only while volume grows faster: it is the industry's Moore's Law and its margin threat at once.",
      healthy: "Prices falling with usage and revenue per customer rising (volume outruns deflation)", warning: "Price cuts without matching volume growth: deflation eating revenue" },
    {
      id: "ai-compute-commit", name: "Compute Commitments vs Revenue", industries: ["ai"],
      definition: "Multi-year nameplate compute and data-center obligations divided by current run-rate revenue: the leverage hiding outside the balance sheet.",
      formula: "Nameplate multi-year compute commitments / annualized revenue run-rate",
      interpretation: "OpenAI's ~$1.4T of late-2025 nameplate commitments against ~$25B ARR implied ~56x; the Feb 2026 reset to ~$600B through 2030 showed the ratio itself had become the story. High multiples are bets that revenue triples repeatedly on schedule.",
      healthy: "Commitments staged, cancellable, or under ~10x forward revenue", warning: "Fixed take-or-pay obligations many multiples of revenue with flattening growth" }
  ],

  health: {
    intro: "Lab health is compute access and revenue conversion; application health is gross margin against a deflating input; everyone's health is distance from commoditization.",
    pillars: [
      { name: "Compute economics", weight: 25, metrics: "Cost per token served, commitment coverage, power secured", healthy: "Serving costs falling faster than prices", warning: "Take-or-pay obligations outrunning demand" },
      { name: "Frontier position", weight: 20, metrics: "Benchmark standing, release cadence, capability differentiation", healthy: "Top-tier on the workloads that pay (coding, agents)", warning: "Open-weight parity within months of each release" },
      { name: "Revenue quality", weight: 20, metrics: "Run-rate growth, enterprise mix, retention and expansion", healthy: "Enterprise and API revenue compounding with high NRR", warning: "Consumer-heavy mix, flattening ARR (the 2026 OpenAI question)" },
      { name: "Funding runway", weight: 20, metrics: "Cash, burn, strategic backers, path to breakeven", healthy: "2+ years runway with committed strategic capital", warning: "Refinancing risk while burn scales with ambition" },
      { name: "Distribution & lock-in", weight: 15, metrics: "Default placements, workflow depth, switching costs", healthy: "Agents embedded in enterprise workflows and data", warning: "Traffic one router-click from a cheaper rival" }
    ],
    scoringNote: "In AI, the unforgivable event is missing a capability generation: unlike software, the product depreciates whether or not you ship, and the funding window prices that mercilessly."
  },

  valuation: {
    intro: "The sector prices futures, not financials: forward run-rate multiples for the labs, SaaS math for the application layer, and public proxies for everyone who cannot buy the privates.",
    methods: [
      { name: "EV / forward run-rate revenue", use: "Frontier labs and AI-native apps in private rounds", avoid: "Trailing figures: run-rates triple within a fund's reporting cycle", strengths: "The only multiple the market actually transacts on", weaknesses: "Run-rate is not GAAP revenue; growth persistence does the heavy lifting", range: { low: 10, high: 40, asOf: 2026, note: "2025-2026 lab rounds priced roughly 15-30x forward run-rates" } },
      { name: "Terminal-share DCF", use: "Framing what a lab must win (share of software and labor spend) to justify its mark", avoid: "Point estimates: the terminal assumptions are the entire answer", strengths: "Forces the only question that matters into numbers", weaknesses: "Discount rates and 2035 market sizes are guesses stacked on guesses", range: { low: 0, high: 0, asOf: 2026, note: "scenario engine, not a price target" } },
      { name: "Compute-adjusted economics", use: "Comparing labs: revenue per dollar of compute committed, gross margin per token", avoid: "Ignoring commitment structure (fixed vs staged changes everything)", strengths: "Cuts through ARR theater to capital efficiency", weaknesses: "Commitments are nameplate and renegotiable; disclosure is partial", range: { low: 0, high: 0, asOf: 2026, note: "qualitative anchor; see the compute-commitments KPI" } },
      { name: "Public proxy sum-of-parts", use: "Getting AI exposure through listed names: hyperscaler stakes, semis, AI-attach SaaS", avoid: "Treating a 3% revenue-attach story as a pure play", strengths: "Liquid, auditable, and priced daily", weaknesses: "Every proxy bundles the exposure with a different business", range: { low: 8, high: 25, asOf: 2026, note: "EV/EBITDA spread across the proxy complex; the AI premium migrates with the narrative" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Mark an AI franchise quickly: run-rate revenue times a growth-and-moat-adjusted EV/Revenue multiple, minus net debt (labs typically carry net cash between megarounds).",
      inputs: [
        { id: "vc-rev", label: "Run-rate revenue ($B)", min: 1, max: 60, step: 1, value: 20, fmt: "money" },
        { id: "vc-mult", label: "EV / Revenue multiple", min: 5, max: 40, step: 1, value: 15, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B, negative = net cash)", min: -60, max: 40, step: 5, value: -20, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays AI as a barbell: own the tollbooths (compute, covered in semis and cloud) and the proven monetizers (coding and enterprise agents), rent the narrative in between. The layer's pure plays are mostly private, so public exposure is proxy engineering: and the discipline is tracking revenue evidence against a capex program that assumed it in advance.",
    debates: [
      { topic: "Is the capex supercycle rational or the next fiber glut?", bull: "Run-rates went from $1B to $30B+ in 18 months at Anthropic and demand for inference outstrips supply everywhere: underbuilding, not overbuilding, is the visible error today, and the buyers are the most profitable companies in history spending cash flow, not debt.", bear: "~$600B/yr of short-lived GPUs needs hundreds of billions of new software revenue just to cover depreciation, while 95% of enterprise pilots show no P&L impact; 1999 telecom was also right about demand and still incinerated the builders. The reset of OpenAI's $1.4T to $600B was the first crack." },
      { topic: "Do frontier labs have a moat, or is the model a commodity?", bull: "The compounding loop is the moat: revenue funds compute, compute funds the next model, and enterprise agents harden into workflows and data that switching destroys; 2 labs pulled away from the pack in both capability and revenue, which is what a moat forming looks like.", bear: "DeepSeek delivered near-frontier capability at 1/100th the price with export-controlled chips; routers make switching a config change; an 80% annual price decline is not what pricing power looks like. The weights are a depreciating asset in a market where the second-best model is nearly free." },
      { topic: "Where does the value pool: models, apps, or compute?", bull: "Applications: coding agents became the fastest-growing software products ever by owning workflow on top of interchangeable models, exactly how SaaS beat servers; token deflation is their margin tailwind, and the incumbents' distribution is beatable when the product is 10x.", bear: "The labs absorb every successful wrapper category into the platform (memory, agents, retrieval all started as startups), and the compute layer beneath has captured nearly all the profit to date; history says the middle of a stack in deflation is where margins go to die." }
    ],
    cycle: {
      where: "Peak infrastructure buildout meeting the first real monetization test: capex still accelerating ($400B to $600B+ guided), lab revenue ramping but concentrating in 2 winners, and the market rotating from buying the buildout to demanding revenue evidence.",
      drivers: "Capability release cadence, enterprise conversion from pilot to production, token economics (price vs serving cost), hyperscaler capex resolve, and power availability.",
      leads: [
        "Hyperscaler quarterly capex guidance (earnings calls, free): the funding pulse",
        "Provider pricing pages and router tapes (free): the token deflation rate",
        "Epoch AI compute and training-cost trackers (epoch.ai, free)",
        "Lab run-rate disclosures and reported rounds (press, free): the revenue tape",
        "McKinsey State of AI and Stanford AI Index (free): adoption vs P&L reality"
      ]
    },
    exposure: [
      { vehicle: "Hyperscalers (Microsoft, Alphabet, Amazon)", note: "Landlord-plus-stakeholder proxies: the safest AI carry, bundled with everything else" },
      { vehicle: "Semis complex (Nvidia and the chain)", note: "The profit pool to date: see the semiconductors module; beta to capex resolve" },
      { vehicle: "AI-attach software (coding tools, agent platforms)", note: "The monetization evidence trade: revenue per seat rising as tokens deflate" },
      { vehicle: "Private lab exposure (venture funds, secondaries)", note: "The only pure play; marks move on leaks, liquidity is a rumor" },
      { vehicle: "Power and data-center adjacents (utilities, REITs)", note: "The bottleneck trade: gigawatts gate the roadmap (see utilities)" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Hyperscaler capex guidance and AI revenue disclosures: the cycle's funding votes" },
      { when: "Frontier releases (episodic, several per year)", what: "Capability step-changes reprice the whole stack within days" },
      { when: "Funding rounds and IPO signals", what: "Lab megarounds and OpenAI IPO chatter mark the private tape publicly" },
      { when: "Regulatory milestones", what: "EU AI Act GPAI enforcement, US export-control turns, and copyright rulings" }
    ],
    data: [
      { series: "Training compute and cost trends", source: "Epoch AI (epoch.ai, free)", why: "The physics of the arms race, quantified" },
      { series: "Hyperscaler capex", source: "SEC filings (sec.gov, free)", why: "The funding side of the supercycle, primary source" },
      { series: "Model prices and benchmarks", source: "provider pricing pages, public leaderboards (free)", why: "The deflation tape and the capability tape together" },
      { series: "Adoption surveys", source: "McKinsey State of AI, Stanford AI Index (free)", why: "Pilot-to-production conversion: the demand truth serum" },
      { series: "AI job postings and usage indices", source: "Indeed Hiring Lab, public usage trackers (free)", why: "Diffusion into the real economy, ahead of earnings" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Consumer AI subscriptions churn and pilots get cut, but cost-cutting is an AI sales pitch: enterprise automation demand holds better than the multiple does. Capex resolve is the real casualty to watch." },
      { regime: "Rates rising", behavior: "Long-duration terminal-value stories compress first; labs burning billions face pricier refinancing; hyperscalers' cash-funded capex becomes the moat within the moat." },
      { regime: "Capability leap", behavior: "A frontier jump reprices everything in hours: apps gain (better input, same price), laggard labs lose their round marks, and capex resolve strengthens. Own optionality before releases, not after." },
      { regime: "Efficiency shock (DeepSeek-style)", behavior: "Cheaper frontier capability hits semis and capex assumptions first (Nvidia's Jan 2025 drawdown), but expands the application layer's margins: rotate down the stack toward whoever buys tokens." }
    ]
  },

  players: [
    { name: "OpenAI", role: "Consumer champion", country: "US", real: true, note: "~$25B ARR by spring 2026 (Sacra); ChatGPT's distribution plus the Stargate compute program (~$600B through 2030)" },
    { name: "Anthropic", role: "Enterprise and coding leader", country: "US", real: true, note: "Reported $30B run rate in 2026 after ~80x growth (VentureBeat); Claude's coding and agent workloads drove the ramp" },
    { name: "Google DeepMind", role: "The integrated lab", country: "US", real: true, note: "Gemini plus TPUs plus search distribution: the only lab that owns its whole stack" },
    { name: "Meta AI", role: "Open-weights heavyweight", country: "US", real: true, note: "Llama free-rides rivals' pricing; $115-135B capex guided for 2026 with no direct model revenue" },
    { name: "Microsoft", role: "Distributor and stakeholder", country: "US", real: true, note: "OpenAI's landlord-investor plus Copilot: the era's biggest single AI position" },
    { name: "Nvidia", role: "The tollbooth", country: "US", real: true, note: "Captures more AI profit than the AI layer itself: see the semiconductors module" },
    { name: "DeepSeek", role: "The efficiency shock", country: "CN", real: true, note: "Frontier-class models at ~1/100th prices ($0.14 per 1M tokens, Dec 2024) despite export controls" },
    { name: "Mistral", role: "Europe's frontier bet", country: "FR", real: true, note: "Open-weights plus sovereign-AI positioning: the EU's answer to concentration risk" }
  ],

  geography: [
    { country: "US", role: "Frontier heartland", note: "All 3 leading labs, the capital, and most of the compute: plus the export-control lever" },
    { country: "CN", role: "The efficiency pole", note: "Compute-constrained by sanctions, so it optimizes: DeepSeek and Qwen export deflation worldwide" },
    { country: "GB", role: "Research and safety hub", note: "DeepMind's birthplace and the AI Safety Institute: influence beyond its compute" },
    { country: "FR", role: "Europe's lab", note: "Mistral plus a nuclear-powered pitch for sovereign training capacity" },
    { country: "AE", role: "Sovereign compute", note: "Gulf capital and gigawatt ambitions: G42-class deals put petrostates in the stack" },
    { country: "JP", role: "Capital and adoption", note: "SoftBank's Stargate stake and an enterprise market embracing agents early" }
  ],

  cycles: [
    { year: 1987, title: "The second AI winter", kind: "bust", text: "Expert systems overpromise, the Lisp machine market collapses, and funding freezes for a decade. Lesson: AI cycles are narrative cycles: capability disappoints slower than capital flees." },
    { year: 2012, title: "AlexNet", kind: "shift", text: "A neural net on 2 gaming GPUs wins ImageNet and rewrites the field overnight. Lesson: repurposed hardware plus an old idea at new scale is how platform shifts actually start." },
    { year: 2022, title: "ChatGPT", kind: "boom", text: "100M users in 2 months: the fastest consumer adoption ever, and the starting gun for a funding supercycle. Lesson: distribution events, not research milestones, reprice industries." },
    { year: 2025, title: "The DeepSeek shock", kind: "shift", text: "A Chinese lab ships near-frontier capability at ~1/100th the price; Nvidia sheds ~$600B of market cap in a day before recovering. Lesson: in AI, an efficiency gain anywhere transmits to capex assumptions everywhere, instantly." },
    { year: 2026, title: "The monetization test", kind: "shift", text: "Lab run-rates hit the tens of billions ($25B OpenAI, $30B+ reported at Anthropic) while capex guides past $600B and 95% of pilots still show no P&L impact; OpenAI resets $1.4T of commitments to $600B. Lesson: the market eventually demands that revenue evidence catch the buildout: position for the audit, not the anthem." }
  ],

  risks: [
    { name: "Capex-revenue gap unwinds", severity: 5, likelihood: 3, transmission: "GPU depreciation outruns AI revenue -> hyperscalers cut capex guidance -> funding window closes for burning labs -> down rounds cascade through semis, cloud, and venture marks." },
    { name: "Model commoditization", severity: 4, likelihood: 4, transmission: "Open weights reach frontier parity faster -> token prices keep falling 80%/yr without volume offset -> lab gross margins compress -> the 15-30x revenue multiples reprice toward infrastructure math." },
    { name: "Power and grid constraints", severity: 4, likelihood: 4, transmission: "Data-center interconnection queues and gigawatt shortages -> training schedules slip and inference costs rise -> capability cadence slows and capex ROI worsens (see utilities)." },
    { name: "Regulation and copyright", severity: 3, likelihood: 3, transmission: "Adverse training-data rulings or aggressive AI Act enforcement -> retroactive licensing costs and compliance drag -> retraining cycles and margin hits, worst for the smallest labs." },
    { name: "Capability plateau", severity: 5, likelihood: 2, transmission: "Scaling returns diminish -> the terminal-value story behind every mark breaks -> valuations reset from futures to financials, and $600B/yr of infrastructure hunts for a workload." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["A handful of labs train giant models that can write, code, and reason, then sell access by subscription or by usage (measured in tokens, roughly pieces of words). The catch: building these models costs hundreds of millions, running them costs real money per answer, and prices fall constantly: so companies race to grow usage faster than prices drop, funded by the biggest infrastructure spending wave in tech history."] },
    L2: { title: "Intermediate", text: ["The economics: training is a fixed cost (~$200-500M per frontier run) that depreciates in months; inference (serving answers) is the real COGS and now 60-80% of compute spend. API prices fell ~80% in a year, yet revenue exploded: Anthropic went from ~$1B to a reported $30B+ run rate in about 18 months on coding and enterprise agents, while OpenAI's consumer-heavy ~$25B flattened. Beneath it all: ~$600B of annual hyperscaler capex betting the revenue keeps coming."] },
    L3: { title: "Advanced", text: ["Analyze by layer: labs on run-rate growth versus compute commitments and inference gross margin (est. 40-60%); applications on SaaS metrics with a deflating COGS line; the serving layer on take rates and switching costs (routers made tokens a spot market). The key ratios: revenue per dollar of committed compute, and pilot-to-production conversion (72% adoption, ~5% P&L proof). Deflation is the tell: healthy when volume outruns it, fatal when it doesn't."] },
    L4: { title: "Expert", text: ["Trade the release cadence and the capex tape: frontier launches reprice the stack in hours, hyperscaler guidance votes on the cycle quarterly, and efficiency shocks (DeepSeek, Jan 2025) rotate value down-stack to token buyers. Live debates: capex supercycle versus fiber-glut redux, model moats versus commoditization, apps versus platforms for the terminal margin pool. Respect the private-market reflexivity: run-rate leaks move marks that move funding that moves compute."] },
    L5: { title: "Institutional", text: ["Allocator's frame: AI is a barbell across other people's balance sheets: the compute tollbooths (liquid, profitable, covered in semis and cloud) and the monetization layer (mostly private, marked on futures). Size public proxies for carry, private lab exposure for optionality, and treat the capex-revenue gap as the cycle's master variable: every mark in the complex is a derivative of whether ~$600B/yr of infrastructure finds its workload. The discipline is Bayesian: update on revenue evidence, not capability demos."] }
  },

  quiz: [
    { q: "By spring 2026 the frontier-lab revenue scoreboard read roughly:", choices: ["Both labs under $5B", "OpenAI ~$25B ARR, Anthropic a reported $30B+ run rate: enterprise and coding drove the divergence", "OpenAI $100B", "Neither lab disclosed anything"], answer: 1, explain: "Anthropic's ~80x ramp on coding and agent workloads overtook OpenAI's consumer-heavy ARR, which flattened near $25B (Sacra; VentureBeat)." },
    { q: "LLM API prices between early 2025 and early 2026:", choices: ["Rose ~20%", "Fell ~80%, with GPT-4-class capability at ~1/100th of its launch price", "Stayed flat", "Doubled"], answer: 1, explain: "Token deflation is the industry's constant: capability migrates down-tier every year, and volume must outrun the price decline." },
    { q: "The Big 4 hyperscalers' capex trajectory around the AI buildout was roughly:", choices: ["$40B flat", "~$400B in 2025, guided toward $600B+ for 2026", "Declining since 2024", "Under $100B combined"], answer: 1, explain: "The largest capex program in corporate history, pre-paying compute for an AI layer whose revenue is a fraction of it (CNBC, Feb 2026)." },
    { q: "Inference (serving answers) now represents about:", choices: ["5% of AI compute spend", "60-80% of AI compute spend, and rising as agents chain many calls per task", "Only research budgets", "The same as training, always"], answer: 1, explain: "The cost center flipped from training to serving: agentic workflows multiply tokens per task, making inference economics the margin war." },
    { q: "A frontier-class training run in 2026 cost roughly:", choices: ["$1M", "$200-500M in compute, with a capability shelf life measured in months", "$50B", "Nothing: models are free"], answer: 1, explain: "A massive fixed cost that depreciates as soon as a rival ships: the treadmill that makes funding access a competitive weapon (Epoch AI class estimates)." },
    { q: "The DeepSeek shock of January 2025 mattered because:", choices: ["It ended AI research", "Near-frontier capability at ~1/100th the price hit capex assumptions instantly: Nvidia shed ~$600B in a day", "It raised token prices", "It only affected China"], answer: 1, explain: "An efficiency gain anywhere transmits to capex assumptions everywhere: and it expands margins for whoever buys tokens rather than sells them." },
    { q: "Enterprise adoption of generative AI in 2025-2026 showed:", choices: ["Nobody uses it", "72% of organizations use it, but ~95% of pilots show no measurable P&L impact", "Universal profitable deployment", "Adoption only in tech"], answer: 1, explain: "The adoption-to-value gap is the demand-side question of the cycle: pilot-to-production conversion is the number to watch (McKinsey; MIT, 2025)." },
    { q: "The frontier labs' moat, if it exists, is best described as:", choices: ["Patents on the weights", "A compounding loop: revenue funds compute, compute funds the next model, and enterprise agents harden into workflows", "Government licenses", "Cheap electricity alone"], answer: 1, explain: "The weights leak and deflate; the loop and the workflow lock-in are the defensible parts: which is why the bear case is routers plus open weights." }
  ],

  sources: [
    { name: "CNBC: hyperscaler AI capex nears $700B (Feb 2026)", url: "https://www.cnbc.com/2026/02/06/google-microsoft-meta-amazon-ai-cash.html", feeds: "capex" },
    { name: "VentureBeat: Anthropic $30B run rate (2026)", url: "https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth", feeds: "lab revenue" },
    { name: "Sacra: OpenAI revenue and valuation", url: "https://sacra.com/c/openai/", feeds: "lab revenue" },
    { name: "Epoch AI: training compute and cost data", url: "https://epoch.ai", feeds: "training costs, compute trends" }
  ]
};
