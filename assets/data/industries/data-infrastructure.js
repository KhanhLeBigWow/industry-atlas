/* Industry Atlas - DATA INFRASTRUCTURE (full module, research-backed)
 * Anchors: Gartner DBMS market $119.7B in 2024 (+13.4%), cloud dbPaaS 64% of
 * spend, forecast $137B 2025 and $161B 2026 (Gartner Market Share: DBMS 2024,
 * Forecast 2025 update); Snowflake FY2026 revenue $4.68B (+29%, company 8-K,
 * Jan 2026 FYE); Databricks $6.9B annualized run rate, +80% y/y (CNBC, Jun
 * 2026); MongoDB FY2026 revenue $2.46B (+23%), Atlas +29% (company release);
 * US private data center construction $50.7B SAAR Apr 2026, above office
 * construction at $43.8B (US Census via Bloomberg, Jun 2026); Oracle $300B
 * 5-year OpenAI contract (Sep 2025), RPO past $500B by Q3 FY2026 (up 4x+ y/y),
 * biggest 1-day stock gain since 1992. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["data-infrastructure"] = {
  meta: {
    id: "data-infrastructure", name: "Data Infrastructure", sector: "technology", status: "full",
    tagline: "The $120B market for remembering things, growing 16% a year because AI turned every company's data exhaust into feedstock.",
    marketSize: { value: 120, unit: "$B", asOf: 2024, note: "Gartner DBMS software market: $119.7B, +13.4% in 2024; the surrounding stack (pipelines, analytics tools, data center construction) is multiples larger" },
    cagr: { value: 16, range: [13, 19], horizon: "2024-2029" },
    maturity: "growth", cyclicality: 2, capitalIntensity: 3, regulation: 2, disruption: 4
  },
  newsQuery: '(Snowflake OR Databricks OR MongoDB OR "Oracle Cloud" OR "data center construction" OR "vector database" OR "data warehouse" OR DBMS)',

  overview: {
    definition: "Data infrastructure is the software and physical plant that stores, moves, and queries the world's information: databases, warehouses, lakehouses, pipelines, and the data centers underneath. It is the layer between raw compute and every application, and the AI boom just made it the most contested real estate in enterprise software.",
    howItWorks: [
      "The stack has 4 tiers. At the bottom, physical infrastructure: land, power, and buildings (US private data center construction hit a $50.7B annual rate in April 2026, overtaking office construction). Above it, hardware: servers, storage, and networking. Then the software heart: database engines that keep systems of record (Oracle, SQL Server, Postgres, MongoDB) and analytical platforms that answer questions across them (Snowflake, Databricks, BigQuery). On top, the connective tissue: pipelines, streaming, governance, and now the AI data layer of vector search and feature stores.",
      "The economics are consumption economics. The industry's defining shift was from perpetual licenses (pay once, run forever) to cloud consumption (pay per query, per gigabyte, per credit). Gartner put the DBMS market at $119.7B in 2024, growing 13.4%, with cloud database platform services capturing 64% of all spend. Consumption cuts both ways: revenue compounds automatically as customers' data grows (net revenue retention above 120% with zero sales effort), but it also contracts instantly when CFOs order optimization, as the whole sector learned in 2022-2023.",
      "The moat is workload gravity. A database is the stickiest software ever sold: migrations risk the business, so systems of record persist for decades (Oracle's 1980s installs still bill today). That stickiness funds a razor-and-blade dynamic: engines are cheap or free (Postgres, open-source MongoDB) and the managed cloud service is the annuity. The counterweight is the hyperscaler squeeze: AWS, Microsoft, and Google bundle credible databases into their clouds, and every independent vendor lives in the gap between hyperscaler good-enough and best-of-breed.",
      "AI rewired the map twice in 3 years. First, every model needs training and retrieval data, which made analytical platforms strategic: Databricks rode the AI wave to a $6.9B run rate growing 80%+ (June 2026), while Snowflake reached $4.68B (+29%) in FY2026. Second, inference needs new primitives: vector databases for semantic search, which began as startups (Pinecone) and are being absorbed as features (MongoDB Atlas Vector Search, pgvector). And beneath the software, Oracle converted data center scarcity into a $300B, 5-year OpenAI contract that quadrupled its backlog and produced its biggest 1-day stock gain since 1992."
    ],
    history: [
      { era: "1970-1995", title: "The relational era", text: "Codd's relational model becomes Oracle, DB2, and SQL Server; the database becomes enterprise software's first great annuity business." },
      { era: "1995-2010", title: "Open source cracks the cartel", text: "MySQL and Postgres make databases free; the web's scale problems birth NoSQL (MongoDB, Cassandra) for workloads relational engines could not stretch to." },
      { era: "2010-2019", title: "Big data and the cloud", text: "Hadoop promises everything and delivers complexity (the Cloudera-Hortonworks merger marks the bust); meanwhile Redshift, BigQuery, and Snowflake move analytics to the cloud and invent consumption pricing." },
      { era: "2020-2022", title: "The consumption supercycle", text: "Snowflake's 2020 IPO is the largest ever for software; the modern data stack (Fivetran, dbt, warehouse-centric) becomes VC orthodoxy; then 2022 rate hikes trigger an optimization wave that halves growth rates sector-wide." },
      { era: "2023-present", title: "The AI rewiring", text: "LLMs make data the binding constraint on AI: lakehouses and vector search boom, data center construction triples ($26.9B of starts in 2024 to $77.7B in 2025), and Oracle's OpenAI contract turns a legacy vendor into an AI infrastructure play." }
    ],
    trends: [
      { title: "AI data stack buildout", direction: "up", text: "Training and retrieval workloads pull spend toward lakehouses, vector search, and GPU-adjacent storage; Gartner sees DBMS growth accelerating to 18.4% in 2026 ($161B) on exactly this." },
      { title: "Data center construction boom", direction: "up", text: "US starts nearly tripled to $77.7B in 2025; the April 2026 construction rate of $50.7B annualized now exceeds office construction. Power, not capital, is the new gate." },
      { title: "Consumption over seats", direction: "shift", text: "Usage-based pricing is now the sector default: revenue tracks customers' data growth, making NRR and consumption trends the tape that matters." },
      { title: "Postgres gravity", direction: "shift", text: "Postgres became the default new-application database, and its extensions (pgvector) absorb adjacent categories; every independent vendor now prices against free." },
      { title: "Warehouse vs lakehouse convergence", direction: "shift", text: "Snowflake and Databricks each built the other's product; open table formats (Iceberg) decouple storage from engines, threatening the margin pool of proprietary formats." }
    ],
    outlook: "The demand side is as visible as software gets: data grows, AI multiplies the queries against it, and Gartner's forecast has the DBMS market compounding mid-to-high teens through the decade. The open questions are capture, not demand: whether independents keep share against hyperscaler bundles and Postgres, whether consumption growth survives the next optimization wave, and whether the AI capex complex (Oracle's OpenAI-heavy backlog is the emblem) is an annuity or a circular-financing echo. The likeliest path: the software layer compounds steadily while the physical layer cycles violently."
  },

  structure: {
    suppliers: [
      { name: "Semiconductor & hardware makers (Nvidia, storage, networking)", note: "GPUs and flash set the cost floor of every query" },
      { name: "Data center developers & REITs (Equinix, Digital Realty)", note: "Land, shells, and cooling; the physical bottleneck" },
      { name: "Power utilities & grid", note: "The binding constraint of the buildout: interconnection queues gate everything" },
      { name: "Open-source communities (Postgres, Linux Foundation projects)", note: "The free upstream that both feeds and undercuts every vendor" }
    ],
    producers: [
      { name: "Hyperscalers (AWS, Microsoft, Google)", note: "Each runs a full data stack inside its cloud; distribution is their moat" },
      { name: "Oracle", note: "The incumbent turned AI-infrastructure play: RPO past $500B on the OpenAI deal" },
      { name: "Independents (Snowflake, Databricks, MongoDB, Confluent)", note: "Best-of-breed engines living in the hyperscaler gap" },
      { name: "AI data startups (Pinecone, Weaviate class)", note: "New primitives racing to become products before they become features" }
    ],
    distributors: [
      { name: "Cloud marketplaces", note: "AWS/Azure/GCP marketplaces are the new channel: spend burns committed cloud credits" },
      { name: "Systems integrators (Accenture class)", note: "Migrations are their annuity; every re-platforming is billable" }
    ],
    customers: [
      { name: "Enterprises (every one of them)", note: "Data infrastructure is non-discretionary; the debate is only where and how much" },
      { name: "AI labs & model builders", note: "The new whale customers: OpenAI alone is roughly half of Oracle's backlog" },
      { name: "Developers", note: "Bottom-up adoption (MongoDB, Postgres) decides defaults years before procurement does" }
    ],
    regulators: [
      { name: "Data protection regimes (GDPR, state privacy laws)", note: "Residency rules shape where data physically lives" },
      { name: "Energy & land-use authorities", note: "Permitting and grid interconnection now gate data center supply" },
      { name: "Antitrust (cloud bundling scrutiny)", note: "The hyperscaler squeeze is a live competition question" }
    ],
    capital: [
      { name: "Public equity", note: "Consumption names trade on NRR and Rule of 40; Oracle re-rated on backlog" },
      { name: "Late-stage venture (Databricks $100B+ class)", note: "The largest private software companies ever, awaiting IPO windows" },
      { name: "Infrastructure & private credit", note: "Data center construction ($77.7B of 2025 starts) is financed like power plants: project debt, ABS, REIT equity" }
    ]
  },

  valueChain: {
    intro: "From a substation to a SQL query. Value capture inverts twice: the physical layer eats the capital, the software layer keeps the margin, and the hyperscalers tax everything in between.",
    stages: [
      { id: "datacenters", name: "Data centers & power", what: "Land, shells, megawatts, cooling", players: "Equinix, Digital Realty, hyperscaler self-build", valueCapture: 3,
        economics: { grossMargin: [40, 55], capitalIntensity: 5, concentration: 3 },
        linksTo: ["construction", "utilities", "real-estate"],
        deeper: "The boom layer: US private data center construction ran at $50.7B annualized in April 2026, up 27% y/y and above office construction. Average project cost tripled toward hyperscale campuses. Power is the gate: interconnection queues, not capital, now set the supply curve." },
      { id: "hardware", name: "Compute & storage hardware", what: "Servers, GPUs, flash, networking", players: "Nvidia, Dell, Supermicro, storage vendors", valueCapture: 4,
        economics: { grossMargin: [15, 40], capitalIntensity: 4, concentration: 4 },
        linksTo: ["semiconductors", "cloud"],
        deeper: "A barbell: box-assemblers earn commodity margins while the accelerator monopoly captures most of the layer's profit. For data platforms, hardware is COGS: every efficiency gain in silicon widens software gross margin or gets competed away in price." },
      { id: "databases", name: "Operational databases", what: "Systems of record: OLTP engines", players: "Oracle, Microsoft, AWS Aurora, MongoDB, Postgres", valueCapture: 4,
        economics: { grossMargin: [70, 85], capitalIntensity: 2, concentration: 4 },
        linksTo: ["cloud", "saas"],
        deeper: "The annuity core: Gartner's $119.7B DBMS market (2024) lives mostly here, and workload gravity makes it the stickiest software ever sold. The fight is at the margin: new applications default to Postgres or MongoDB Atlas (+29% in FY2026), while the installed base keeps paying Oracle." },
      { id: "analytics", name: "Analytics & lakehouse", what: "Warehouses, lakehouses, BI, ML platforms", players: "Snowflake, Databricks, BigQuery, Microsoft Fabric", valueCapture: 5,
        economics: { grossMargin: [65, 75], capitalIntensity: 2, concentration: 3 },
        linksTo: ["ai", "cloud"],
        deeper: "The growth crown: Snowflake at $4.68B (+29%, FY2026) and Databricks at $6.9B annualized (+80%, June 2026) are running the sector's defining race. Open table formats (Iceberg) are the wildcard: they unbundle storage from compute engines, which is great for customers and corrosive for proprietary margins." },
      { id: "pipelines", name: "Movement & streaming", what: "ETL/ELT, change data capture, event streams", players: "Confluent, Fivetran, dbt, Airbyte", valueCapture: 2,
        economics: { grossMargin: [65, 75], capitalIntensity: 1, concentration: 2 },
        linksTo: ["saas", "cloud"],
        deeper: "Essential and squeezed: everyone needs pipes, nobody wants to pay a premium for them, and both hyperscalers and platforms bundle adjacent versions. Streaming (Kafka economics via Confluent) is the strongest position; batch ETL is a knife-fight with open source." },
      { id: "ailayer", name: "AI data layer", what: "Vector search, feature stores, governance, observability", players: "Pinecone, Weaviate, Datadog, Collibra", valueCapture: 3,
        economics: { grossMargin: [70, 80], capitalIntensity: 1, concentration: 1 },
        linksTo: ["ai", "cybersecurity"],
        deeper: "The land-grab layer: vector databases went from obscurity to necessity with RAG, then met the feature-absorption problem: MongoDB, Postgres (pgvector), and every warehouse added vector search natively. The lesson of middleware history: primitives become features unless they become platforms first." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share the sector. Consumption platforms (Snowflake, MongoDB Atlas, Databricks): revenue = customers' usage, so growth decomposes into new logos plus net expansion (NRR 120%+ in good times); gross margins run 65-75% after paying hyperscalers for the underlying compute; sales efficiency is the swing cost. Incumbents (Oracle, Microsoft): license-and-maintenance annuities converting to cloud, where backlog (RPO) is the forward tape: Oracle's passed $500B in FY2026, up more than 4x, on AI contracts. Physical-layer owners (REITs, hyperscaler capex): power-plant economics, decade paybacks, financed with project debt.",
      "The model's beauty and its trap are the same thing: consumption. Revenue compounds with data growth and requires no renewal event, but it also has no floor: the 2022-2023 optimization wave showed growth halving in 2 quarters as customers tuned queries and deleted cold data. The AI era adds a concentration wrinkle: a handful of labs are now the marginal buyers of the entire physical layer, so one customer's funding gap (OpenAI is roughly 54% of Oracle's backlog) is the sector's tail risk."
    ],
    fingerprint: { grossMargin: 72, recurringRevenue: 85, capitalIntensity: 45, pricingPower: 60, cyclicality: 35, operatingLeverage: 75 },
    lines: [
      { label: "Consumption revenue & NRR", note: "The sector's tape: expansion within existing customers is most of the growth" },
      { label: "RPO / backlog", note: "Committed future spend: Oracle's $500B+ redefined the metric's scale" },
      { label: "Gross margin after cloud COGS", note: "Independents pay the hyperscalers rent; watch the spread" },
      { label: "Sales efficiency / Rule of 40", note: "Growth plus FCF margin: the valuation currency of the group" },
      { label: "Capex & construction (physical layer)", note: "$77.7B of 2025 US data center starts; depreciation arrives with a lag" }
    ],
    unitEconomics: {
      unit: "per $1.00 of consumption revenue (cloud data platform, illustrative)",
      items: [
        { label: "Cloud infrastructure COGS", value: "$0.25 to $0.35", note: "paid to AWS/Azure/GCP: the hyperscaler tax" },
        { label: "Gross margin", value: "65% to 75%", note: "below classic SaaS because compute is real" },
        { label: "Net revenue retention", value: "115% to 130%", note: "data growth is the built-in salesforce" },
        { label: "S&M to acquire the $1", value: "$0.40 to $0.60 in year 1", note: "payback comes from years of expansion, not the first check" }
      ]
    }
  },

  kpiRefs: ["cloud-rpo", "saas-nrr", "saas-rule40"],
  kpiLocal: [
    {
      id: "datainfra-cloud-share", name: "Cloud Share of DBMS Spend", industries: ["data-infrastructure"],
      definition: "Share of total database spend consumed as cloud services (dbPaaS) rather than on-premises licenses.",
      formula: "Cloud dbPaaS revenue / total DBMS market revenue",
      interpretation: "The migration clock: 64% of the $119.7B market was cloud in 2024 (Gartner), and nearly all incremental growth is cloud. Vendors indexed to the on-prem remainder are melting; vendors capturing the cloud increment compound.",
      healthy: "Vendor's cloud mix rising faster than the market's 64%", warning: "License revenue still the majority with no consumption engine" },
    {
      id: "datainfra-dc-construction", name: "Data Center Construction Rate", industries: ["data-infrastructure"],
      definition: "US private data center construction spending, seasonally adjusted annual rate (Census Bureau, monthly).",
      formula: "Census private construction put-in-place, data center category, SAAR",
      interpretation: "The physical layer's pulse and the AI capex cycle's cleanest free proxy: $50.7B in April 2026, +27% y/y, above office construction. Deceleration here leads software consumption weakness by quarters.",
      healthy: "Rising SAAR with broadening project count", warning: "Sequential declines or project cancellations: the capex cycle turning" }
  ],

  health: {
    intro: "Platform health is consumption durability and workload gravity; physical-layer health is power access and lease coverage; everyone's health is distance from the hyperscaler bundle.",
    pillars: [
      { name: "Consumption durability", weight: 25, metrics: "NRR trend, usage vs commitments, optimization exposure", healthy: "NRR 120%+ with usage above commitments", warning: "NRR sliding toward 105%: the 2022 pattern" },
      { name: "Workload gravity", weight: 20, metrics: "Systems-of-record share, migration cost, multi-product attach", healthy: "Mission-critical workloads, rising attach", warning: "Workloads portable to Postgres or a bundle in a quarter" },
      { name: "AI positioning", weight: 20, metrics: "AI workload revenue, vector/lakehouse traction, lab relationships", healthy: "AI is a measurable consumption driver", warning: "AI narrative without usage: the slideware tell" },
      { name: "Margin structure", weight: 20, metrics: "Gross margin after cloud COGS, Rule of 40, S&M efficiency", healthy: "70%+ gross, Rule of 40 comfortably met", warning: "Growth bought with negative FCF at scale" },
      { name: "Concentration & funding", weight: 15, metrics: "Top-customer share of backlog, counterparty credit, capex funding", healthy: "Diversified demand, funded buildout", warning: "One lab as half the backlog (the Oracle question)" }
    ],
    scoringNote: "In data infrastructure the fatal event is silent: workloads do not churn, they just stop growing while new ones land elsewhere. Watch the increment, not the base."
  },

  valuation: {
    intro: "The market prices this sector as 3 different assets: consumption software on growth-adjusted revenue multiples, incumbents on backlog-informed earnings, and the physical layer on power-plant math.",
    methods: [
      { name: "EV / Revenue (growth-adjusted)", use: "Consumption platforms: Snowflake, MongoDB, Confluent class", avoid: "Applying peak-2021 multiples; growth durability is the whole debate", strengths: "Matches the model: revenue is the cleanest signal", weaknesses: "Ignores wildly different margin structures", range: { low: 6, high: 15, asOf: 2026, note: "NTM EV/S; the high end demands 25%+ durable growth" } },
      { name: "Rule of 40 framework", use: "Ranking the group: growth % plus FCF margin %", avoid: "Treating it as a valuation output; it is a quality screen", strengths: "Puts growers and harvesters on one axis", weaknesses: "Gameable with one-time items; says nothing about moat", range: { low: 0, high: 0, asOf: 2026, note: "screen, not a multiple: 40+ earns the premium bucket" } },
      { name: "EV / EBITDA (incumbents)", use: "Oracle-class: profitable, backlog-visible, capex-heavy", avoid: "Ignoring the capex cycle beneath the earnings; AI contracts front-load spend", strengths: "Standard, comparable to broader software", weaknesses: "RPO of $500B+ is promise, not cash: haircut for counterparty risk", range: { low: 15, high: 25, asOf: 2026, note: "the AI re-rating lives in this spread" } },
      { name: "Backlog / RPO lens", use: "Sanity-checking AI-era claims: how much is contracted vs assumed", avoid: "Face-value RPO when one customer dominates it", strengths: "The scarcity lens on the AI buildout", weaknesses: "Oracle's OpenAI concentration shows the failure mode", range: { low: 0, high: 0, asOf: 2026, note: "qualitative anchor, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a data platform quickly: forward revenue times a growth-and-margin-adjusted multiple, plus net cash.",
      inputs: [
        { id: "vc-rev", label: "NTM revenue ($B)", min: 0.5, max: 70, step: 0.5, value: 5, fmt: "money" },
        { id: "vc-mult", label: "EV / Revenue multiple", min: 3, max: 20, step: 0.5, value: 9, fmt: "mult" },
        { id: "vc-netcash", label: "Net cash ($B)", min: -20, max: 15, step: 1, value: 3, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays data infrastructure as a barbell: own the consumption compounders with real workload gravity (the annuity side), trade the AI capex complex with discipline (the cyclical side), and respect that the hyperscalers tax both. Demand is the least interesting variable: data always grows. Capture, concentration, and the capex cycle are where the money is made and lost.",
    debates: [
      { topic: "Oracle's AI backlog: renaissance or circular financing?", bull: "A $500B+ RPO converts a melting license base into a decade of contracted cloud growth; Oracle owns scarce powered land and GPUs when both gate the industry, and even a haircut backlog implies years of 20%+ infrastructure growth.", bear: "Roughly 54% of that backlog is one unprofitable customer whose own funding depends on the same capex circle it is buying from; the contracts start in 2027, the spending starts now, and if AI monetization disappoints, Oracle bought the top with borrowed money." },
      { topic: "Snowflake vs Databricks: who owns the AI-era analytics layer?", bull: "For Databricks: $6.9B growing 80%+ against Snowflake's $4.68B growing 29% is the market voting: AI workloads start in the lakehouse, and open formats erode the warehouse's lock-in from below.", bear: "For Snowflake: growth quality beats growth rate: Snowflake's base is governed enterprise data with real switching costs, Databricks' surge rides AI experimentation budgets that consolidate later, and convergence means both end up selling the same thing at compressing margins." },
      { topic: "Vector databases: product or feature?", bull: "Every AI application needs retrieval; a purpose-built engine at scale beats bolted-on indexes, and the category's leader can become the AI era's system of record before incumbents catch up.", bear: "History is unkind to primitives: MongoDB, Postgres (pgvector), and every warehouse shipped native vector search within 2 years; retrieval becomes a checkbox on platforms that already own the data, and standalone vendors get acquired or evaporate." }
    ],
    cycle: {
      where: "Mid AI-buildout boom with late-cycle warning lights: construction at records ($50.7B SAAR, April 2026), software consumption reaccelerating (Gartner sees 18.4% DBMS growth in 2026), but demand concentrating in a few AI labs whose economics remain unproven: classic infrastructure-cycle topology.",
      drivers: "Enterprise data growth (secular), AI training and inference demand (the accelerant), hyperscaler and lab capex budgets, power availability, and the interest rate cost of a decade-payback buildout.",
      leads: [
        "US Census private construction spending, data center line (free, monthly): the capex pulse",
        "Hyperscaler capex guidance in quarterly earnings (free): the demand forecast for the whole chain",
        "DB-Engines popularity rankings (free, monthly): developer mindshare leads revenue by years",
        "Consumption commentary from Snowflake/MongoDB earnings (free): the optimization-wave early warning",
        "Gartner DBMS market press releases (free summaries): the annual share scoreboard"
      ]
    },
    exposure: [
      { vehicle: "Consumption pure plays (Snowflake, MongoDB, Confluent)", note: "The workload-gravity annuities; buy when optimization waves compress multiples" },
      { vehicle: "Oracle", note: "The backlog trade: AI infrastructure torque with single-counterparty risk attached" },
      { vehicle: "Hyperscalers (Microsoft, Amazon, Google)", note: "Diversified data-stack exposure with the bundling moat, diluted by everything else they do" },
      { vehicle: "Databricks (private)", note: "The IPO-in-waiting: the sector's fastest large grower, accessible via late-stage funds until listing" },
      { vehicle: "Physical layer (Equinix, Digital Realty, power chain)", note: "The construction boom as a landlord: contracted cash flows, power scarcity as moat" }
    ],
    catalysts: [
      { when: "Monthly (1st of month)", what: "Census construction spending print: the AI capex cycle's cleanest free tell" },
      { when: "Quarterly earnings", what: "Consumption trends, NRR, RPO adds; hyperscaler capex guidance resets the chain" },
      { when: "IPO window", what: "A Databricks listing reprices the entire private and public comp set" },
      { when: "AI lab funding news", what: "OpenAI-class financing rounds are now sector-level credit events: half of Oracle's backlog hangs on them" }
    ],
    data: [
      { series: "Private construction spending: data centers", source: "census.gov (free, monthly)", why: "The physical buildout's primary tape" },
      { series: "DB-Engines database rankings", source: "db-engines.com (free)", why: "Developer adoption leads enterprise revenue by years" },
      { series: "Company consumption metrics (RPO, NRR)", source: "investor relations / SEC filings (free)", why: "The demand truth serum, quarterly" },
      { series: "Gartner DBMS market releases", source: "gartner.com press releases (free summaries)", why: "Annual market size and share scoreboard" },
      { series: "EIA electricity demand data", source: "eia.gov (free)", why: "Power is the supply constraint; load growth validates the buildout" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Consumption contracts fast (the 2022 template): optimization waves hit within 2 quarters. Buy the compressed multiples of names with mission-critical gravity; avoid pipeline and tooling vendors first into the budget knife." },
      { regime: "Rates rising", behavior: "Double hit: long-duration multiples compress and the decade-payback physical buildout gets more expensive to finance. REIT and project-debt structures feel it first." },
      { regime: "AI capex bust", behavior: "The physical layer and its financiers take the crash; software consumption slows but survives (data still grows). Concentrated-backlog names (Oracle) reprice hardest; diversified consumption names become the safe haven." },
      { regime: "AI acceleration", behavior: "Everything works, in order: power and land first, GPUs second, lakehouses third, governance last. Ride the chain but watch the Census print for the top." }
    ]
  },

  players: [
    { name: "Oracle", role: "Incumbent turned AI-infra play", country: "US", real: true, note: "$300B OpenAI contract; RPO past $500B in FY2026; biggest 1-day gain since 1992" },
    { name: "Amazon Web Services", role: "Largest cloud data estate", country: "US", real: true, note: "Aurora, Redshift, S3: the default stack for a third of the cloud" },
    { name: "Microsoft", role: "The bundler", country: "US", real: true, note: "SQL Server heritage plus Fabric: data infrastructure as a Teams-style bundle" },
    { name: "Snowflake", role: "Consumption pioneer", country: "US", real: true, note: "$4.68B FY2026 revenue, +29%; invented the sector's pricing model" },
    { name: "Databricks", role: "The lakehouse challenger", country: "US", real: true, note: "$6.9B annualized run rate, +80% y/y (June 2026); the IPO the sector awaits" },
    { name: "MongoDB", role: "Developer-default database", country: "US", real: true, note: "$2.46B FY2026, +23%; Atlas (+29%) is the consumption engine" },
    { name: "Confluent", role: "Streaming backbone", country: "US", real: true, note: "Kafka's commercial steward: the strongest position in the pipes layer" },
    { name: "Equinix / Digital Realty", role: "Data center landlords", country: "US", real: true, note: "The physical layer's REIT duopoly amid a record construction boom" }
  ],

  geography: [
    { country: "US", role: "The center of gravity", note: "Every major vendor, the hyperscalers, and a $50.7B/yr construction boom" },
    { country: "CN", role: "The parallel stack", note: "Alibaba and Tencent clouds run a separate database ecosystem behind the data-sovereignty wall" },
    { country: "IE", role: "European data center hub", note: "Dublin's cluster hit grid limits first: the preview of everyone's power problem" },
    { country: "DE", role: "EU sovereignty anchor", note: "SAP's data layer plus the strictest residency rules shaping architecture" },
    { country: "SG", role: "APAC interconnection hub", note: "The region's data crossroads; land and power scarcity made it the first moratorium market" },
    { country: "IN", role: "The next buildout", note: "Data localization rules plus hyperscaler expansion: the decade's growth geography" }
  ],

  cycles: [
    { year: 1979, title: "Oracle ships commercial SQL", kind: "shift", text: "The relational database becomes a product, and enterprise data becomes an annuity that still bills 45 years later. Lesson: systems of record outlive everything, including their technology." },
    { year: 2006, title: "AWS launches S3 and EC2", kind: "shift", text: "Storage and compute become utilities, setting up consumption pricing and the hyperscaler squeeze. Lesson: whoever owns distribution eventually taxes the stack." },
    { year: 2019, title: "The Hadoop bust", kind: "bust", text: "Cloudera and Hortonworks merge in weakness as the big-data era's flagship technology collapses under its own complexity. Lesson: adoption is not economics; complexity is a business model only for consultants." },
    { year: 2020, title: "Snowflake's record IPO", kind: "boom", text: "The largest software IPO ever crowns consumption pricing; 2 years later the optimization wave halves sector growth. Lesson: usage-based revenue has no renewal floor: it breathes with the customer's CFO." },
    { year: 2025, title: "Oracle's $300B AI deal", kind: "boom", text: "One OpenAI contract quadruples Oracle's backlog and delivers its biggest 1-day gain since 1992, on a customer spending money it has not yet raised. Lesson: in infrastructure booms, the backlog is the story until the counterparty is." }
  ],

  risks: [
    { name: "AI capex bust / circular financing unwind", severity: 4, likelihood: 3, transmission: "Lab funding gap -> contracted backlog defaults (OpenAI is ~54% of Oracle's) -> construction halts -> the physical layer and its lenders eat the writedowns." },
    { name: "Hyperscaler bundling squeeze", severity: 4, likelihood: 4, transmission: "AWS/Azure/GCP ship good-enough versions -> independents lose the new-workload increment -> growth premium compresses to software-average multiples." },
    { name: "Consumption optimization wave", severity: 3, likelihood: 4, transmission: "Macro tightening -> CFOs audit cloud bills -> usage cut within 2 quarters -> NRR and guidance reset lower sector-wide (the 2022 template)." },
    { name: "Power and grid constraints", severity: 3, likelihood: 4, transmission: "Interconnection queues stretch -> buildout slips -> capacity scarcity inflates costs up the chain and caps the growth the software layer is priced for." },
    { name: "Open-source substitution", severity: 3, likelihood: 3, transmission: "Postgres and open table formats absorb features -> price umbrella collapses on commodity workloads -> vendors retreat upmarket into a shrinking premium pool." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Every app and every AI model sits on top of databases: software that stores and finds information. Companies used to buy this software once and run it themselves; now they mostly rent it from the cloud and pay by usage, like a utility bill. The market is about $120B a year and growing fast, because AI needs enormous amounts of data, and someone has to store, clean, and serve all of it."] },
    L2: { title: "Intermediate", text: ["The stack: data centers (a record US construction boom, now bigger than office building), hardware, database engines (Oracle, Postgres, MongoDB), analytics platforms (Snowflake, Databricks), and pipelines connecting them. The business model is consumption: revenue grows automatically as customers' data grows (net retention 120%+), but shrinks just as automatically when customers optimize. Gartner sized the database market at $119.7B in 2024, 64% of it already cloud."] },
    L3: { title: "Advanced", text: ["Analyze by layer and by P&L species: consumption platforms on NRR durability and gross margin after hyperscaler COGS; incumbents on backlog (RPO) quality and cloud-mix shift; the physical layer on power access and lease coverage. The structural tensions: hyperscaler bundles vs best-of-breed, Postgres gravity pricing against free, and open table formats unbundling proprietary storage margins. The Snowflake ($4.68B, +29%) vs Databricks ($6.9B run rate, +80%) race is the sector's live experiment in growth quality vs growth rate."] },
    L4: { title: "Expert", text: ["Trade the monthly Census construction print, hyperscaler capex guidance, and consumption commentary as a connected chain: physical capex leads software consumption by quarters. Live debates: whether Oracle's $500B+ RPO is an annuity or a single-counterparty bet (OpenAI is roughly half), whether vector search survives as a product or dissolves into a feature, and where the warehouse-lakehouse convergence leaves margins. The 2022 optimization wave is the base-rate reminder: consumption revenue has no floor."] },
    L5: { title: "Institutional", text: ["Allocator's frame: data infrastructure is 2 assets wearing one label. The software layer is among the best business models in public markets (secular volume growth, 70%+ gross margins, workload gravity): core it and add on optimization-wave drawdowns. The physical layer is a levered capex cycle dressed in AI clothing: rent it with discipline and watch counterparty concentration, because the marginal buyer of the entire buildout is a handful of unprofitable labs. Every thesis reduces to one question: when the AI capex tide goes out, which revenue was contracted, which was consumption, and which was hope."] }
  },

  quiz: [
    { q: "Gartner sized the global DBMS market in 2024 at roughly:", choices: ["$12B", "$119.7B, growing 13.4%", "$500B", "$1.2T"], answer: 1, explain: "About $120B in 2024, with forecasts of $137B for 2025 and $161B for 2026: one of software's largest and fastest-compounding categories." },
    { q: "By 2024, cloud services' share of database spend had reached:", choices: ["About 10%", "About 25%", "64%: the cloud is now the market", "100%"], answer: 2, explain: "Gartner put cloud dbPaaS at 64% of 2024 DBMS spend, and nearly all incremental growth is cloud: the on-prem remainder is a melting annuity." },
    { q: "Oracle's September 2025 transformation was driven by:", choices: ["A database price increase", "A $300B, 5-year cloud contract with OpenAI that helped push RPO past $500B", "Buying Snowflake", "A stock split"], answer: 1, explain: "The OpenAI deal quadrupled Oracle's backlog and produced its biggest 1-day stock gain since 1992: and left one customer as roughly half its RPO." },
    { q: "As of mid-2026, the Snowflake vs Databricks scoreboard read approximately:", choices: ["Snowflake $4.68B (+29%) vs Databricks $6.9B run rate (+80%)", "Both at $1B", "Snowflake 10x larger", "Databricks shut down"], answer: 0, explain: "Databricks' AI-fueled surge past Snowflake in scale and growth rate is the sector's defining race: growth rate vs growth quality." },
    { q: "US data center construction in April 2026 was notable because:", choices: ["It stopped", "At a $50.7B annual rate it surpassed office construction", "It was banned", "It fell 50%"], answer: 1, explain: "Census data showed data centers overtaking offices, with 2025 construction starts of $77.7B nearly tripling 2024: the AI buildout in concrete." },
    { q: "Consumption pricing's double edge is:", choices: ["It requires salespeople", "Revenue compounds with customer data growth but contracts instantly when CFOs optimize", "It is illegal in the EU", "It only works on-premises"], answer: 1, explain: "NRR above 120% in good times, but the 2022-2023 optimization wave halved sector growth in 2 quarters: usage-based revenue has no renewal floor." },
    { q: "Databases are the stickiest software ever sold because:", choices: ["They are cheap", "Workload gravity: migrating a system of record risks the business, so installs persist for decades", "Contracts forbid switching", "They run on special hardware"], answer: 1, explain: "Oracle's 1980s installs still bill today: the moat is the risk and cost of moving data, not the software itself." },
    { q: "The standalone vector database's strategic problem is:", choices: ["No demand", "Feature absorption: MongoDB, Postgres (pgvector), and every warehouse added vector search natively", "Too profitable", "Regulation"], answer: 1, explain: "Middleware history's lesson: primitives become features of platforms that already own the data unless they become platforms first." }
  ],

  sources: [
    { name: "Gartner Market Share: DBMS Worldwide 2024 ($119.7B, cloud 64%)", url: "https://www.gartner.com/en/documents/6494271", feeds: "market size, growth, cloud mix" },
    { name: "US Census / Bloomberg: data center construction $50.7B SAAR (Jun 2026)", url: "https://www.bloomberg.com/news/articles/2026-06-01/us-construction-spending-on-data-centers-eclipses-50-billion", feeds: "physical buildout" },
    { name: "CNBC: Databricks run rate $6.9B, +80% (Jun 2026)", url: "https://www.cnbc.com/2026/06/16/databricks-revenue-growth-tops-80percent-to-6point9-billion-annualized.html", feeds: "growth race" },
    { name: "Snowflake FY2026 results ($4.68B, +29%)", url: "https://www.snowflake.com/en/news/press-releases/snowflake-reports-financial-results-for-the-fourth-quarter-and-full-year-of-fiscal-2026/", feeds: "consumption economics" }
  ]
};
