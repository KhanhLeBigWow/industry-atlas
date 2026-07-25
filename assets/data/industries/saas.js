/* Industry Atlas - SAAS & ENTERPRISE SOFTWARE (full module, research-backed)
 * Anchors: Gartner enterprise-app SaaS $218.5B 2024 (+16.7%); public SaaS
 * growth ~17-18% with median NRR ~110% (SaaS Capital / ChartMogul 2024). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["saas"] = {
  meta: {
    id: "saas", name: "SaaS & Enterprise Software", sector: "technology", status: "full",
    tagline: "The best business model ever found: software rented by the month, compounding through renewals.",
    marketSize: { value: 300, unit: "$B", asOf: 2024, note: "enterprise application SaaS ~$219B (Gartner) plus infrastructure software" },
    cagr: { value: 17, range: [14, 19], horizon: "2024-2030" },
    maturity: "growth", cyclicality: 2, capitalIntensity: 1, regulation: 2, disruption: 4
  },

  overview: {
    definition: "SaaS (software as a service) delivers applications over the internet on subscription: the vendor runs one continuously updated version for all customers and rents access by seat or usage. It replaced software you bought and installed with software you subscribe to forever.",
    howItWorks: [
      "The model's genius is the compounding base. Revenue is recurring by contract: this year's customers are next year's starting point, and with net revenue retention above 100% (the public median hovers near 110%), the installed base grows even before a single new logo signs. A SaaS company is a machine that converts sales and marketing spend into an annuity.",
      "The economics are extreme by any industrial standard: 70% to 80% gross margins (the product costs almost nothing to serve one more customer), near-zero capital intensity (the cloud providers own the hardware), and switching costs that grow with every workflow, integration, and byte of customer data stored. The catch is the cost of growth: acquiring a customer often costs 1 to 2 years of their revenue upfront, which is why growing SaaS companies burn cash while their unit economics quietly mint it.",
      "Distribution defines the sub-species. Enterprise SaaS sells top-down through salesforces and multi-year contracts (Salesforce, Workday); product-led growth (PLG) spreads bottom-up through free tiers and self-serve upgrades (Figma-style); vertical SaaS owns one industry's entire workflow (Veeva in pharma, Toast in restaurants) and typically earns the best retention of all because it IS the customer's operating system.",
      "The industry grew up: after the 2021 everything-rally and the 2022 rate shock, buyers consolidated vendors, growth halved to the high teens, and the market began paying for efficiency (the Rule of 40) instead of growth at any price. Then AI arrived as both the biggest product opportunity since mobile and the first genuine architectural threat: if agents do the work, what happens to per-seat pricing?"
    ],
    history: [
      { era: "1999-2004", title: "Salesforce plants the flag", text: "'No Software' marketing launches the category; skeptics say enterprises will never put data in someone else's datacenter." },
      { era: "2005-2012", title: "Category by category", text: "NetSuite (ERP), Workday (HR), ServiceNow (IT) prove every on-prem suite can be rebuilt as a subscription. AWS makes starting a software company nearly free." },
      { era: "2013-2019", title: "The golden age", text: "Cheap capital + proven playbook = hundreds of SaaS IPOs. The metrics canon (ARR, NRR, CAC payback, Rule of 40) becomes a shared language between founders and investors." },
      { era: "2020-2021", title: "COVID pull-forward and the bubble", text: "Digitization compresses 5 years into 2; median public SaaS multiples touch 15x+ forward revenue; everything works until it doesn't." },
      { era: "2022-2023", title: "The efficiency reset", text: "Rates repriced duration: multiples fell 60%+, growth halved, 'default alive' replaced 'growth at all costs'. Vendor consolidation and seat rationalization hit NRR by 5 to 10 points." },
      { era: "2024-present", title: "The AI question", text: "Every vendor ships copilots; pricing experiments shift from seats toward usage and outcomes. Enterprise app SaaS still grew 16.7% to $218.5B (Gartner), but the market now debates which incumbents AI armors and which it dissolves." }
    ],
    trends: [
      { title: "AI repricing software", direction: "shift", text: "Copilots add premium SKUs today; agents threaten seat counts tomorrow. Pricing is migrating from per-seat toward usage and outcome-based models, redistributing value inside every category." },
      { title: "Efficiency as religion", direction: "up", text: "The Rule of 40 replaced growth-at-any-cost; free cash flow margins of 25%+ at scale became table stakes for premium multiples." },
      { title: "Vendor consolidation", direction: "shift", text: "CIOs cut tool sprawl; platforms with suites win wallet share from point solutions; private equity rolls up the long tail." },
      { title: "Vertical SaaS ascendancy", direction: "up", text: "Industry-specific platforms (healthcare, construction, restaurants, logistics) earn the highest retention and expand into payments and fintech attach." }
    ],
    outlook: "Still the best business model at scale, entering its most contested decade. The base case: high-teens growth continues as software eats the remaining un-digitized workflows and AI SKUs add pricing. The bear case is architectural: agentic AI collapses seat counts and lets buyers build what they once bought. Winners will be defined by data gravity and workflow depth, not feature lists."
  },

  structure: {
    suppliers: [
      { name: "Cloud infrastructure (AWS, Azure, GCP)", note: "The largest cost of revenue; SaaS gross margin is partly a hyperscaler pricing decision" },
      { name: "AI model providers", note: "Anthropic/OpenAI-class APIs now sit in every roadmap, and in COGS" },
      { name: "Dev tools & data infrastructure", note: "GitHub-to-Datadog stack; software is built on rented software" },
      { name: "Talent", note: "Engineers and quota-carrying reps are the real factory" }
    ],
    producers: [
      { name: "Platform megavendors (Microsoft, Salesforce, SAP, Oracle)", note: "Suites + distribution; the consolidation winners" },
      { name: "Category leaders (ServiceNow, Workday, Adobe, Intuit)", note: "Own one giant workflow each" },
      { name: "Growth pure-plays (CrowdStrike, Datadog, Snowflake class)", note: "Best-of-breed depth; the multiple premium lives here" },
      { name: "Vertical SaaS (Veeva, Toast, Procore class)", note: "One industry, whole workflow, highest retention" },
      { name: "PE-owned long tail", note: "Thousands of niche products compounding quietly at 8% growth under roll-ups" }
    ],
    distributors: [
      { name: "Direct enterprise sales", note: "AEs, SEs, multi-year contracts; the classic motion" },
      { name: "Product-led growth (self-serve)", note: "Free tier → credit card → expansion; sales shows up later" },
      { name: "Hyperscaler marketplaces", note: "AWS/Azure marketplaces burn committed cloud spend; the fastest-growing channel" },
      { name: "SIs & partners (Accenture class)", note: "Implementation armies that make enterprise deals land" }
    ],
    customers: [
      { name: "Enterprises", note: "6-figure ACVs, 3-year terms, procurement gauntlets; the revenue core" },
      { name: "Mid-market & SMB", note: "Higher churn, faster sales cycles; the PLG hunting ground" },
      { name: "Developers", note: "Bottom-up adopters who become the enterprise deal's champions" },
      { name: "Governments", note: "FedRAMP-gated, slow, sticky forever once in" }
    ],
    regulators: [
      { name: "Data protection regimes (GDPR, CCPA and kin)", note: "Data residency and privacy shape architecture and sales geography" },
      { name: "Sector compliance (HIPAA, SOC 2, FedRAMP)", note: "Certifications as moats: expensive to earn, table stakes to sell" }
    ],
    capital: [
      { name: "Venture capital", note: "Funded the entire category's creation; still seeds each new wave" },
      { name: "Growth equity & crossover funds", note: "The pre-IPO scaling capital" },
      { name: "Public markets", note: "Deep, liquid, and multiple-obsessed" },
      { name: "Private equity", note: "Thoma Bravo/Vista-class buyers of maturing assets; the exit of record post-2022" }
    ]
  },

  valueChain: {
    intro: "From rented infrastructure to a workflow the customer cannot imagine leaving. Margin concentrates where switching costs live: the application layer and its data.",
    stages: [
      { id: "infra", name: "Cloud infrastructure", what: "Rented compute, storage, AI APIs", players: "AWS, Azure, GCP", valueCapture: 3,
        economics: { grossMargin: [55, 70], capitalIntensity: 5, concentration: 5 },
        linksTo: ["cloud", "ai"],
        deeper: "SaaS outsourced its capex here; in exchange, 6% to 15% of every SaaS revenue dollar flows to 3 hyperscalers, and AI inference is pushing that share up. The dependency is strategic: marketplaces, credits, and co-sell make the landlord also the distributor." },
      { id: "build", name: "Product & engineering", what: "One codebase, continuously shipped to all customers", players: "R&D organizations", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 1 },
        linksTo: ["data-infrastructure"],
        deeper: "20% to 30% of revenue goes here, and it is the actual factory: single-version multi-tenancy is why marginal cost approaches zero and why every customer is always on the latest release. AI pair-programming is quietly deflating this cost line, which will show up in margins industry-wide." },
      { id: "acquire", name: "Go-to-market", what: "Sales, marketing, PLG funnels", players: "Sales orgs, growth teams", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 1 },
        linksTo: ["media"],
        deeper: "The biggest spend line (30% to 50% of revenue while growing) and the model's true cost: customers are bought upfront and repaid over years. CAC payback (median ~25 months, elite under 12) is where SaaS business quality is actually decided." },
      { id: "application", name: "The application layer", what: "The workflow + the customer's data", players: "Every SaaS vendor", valueCapture: 5,
        economics: { grossMargin: [70, 85], capitalIntensity: 1, concentration: 2 },
        linksTo: ["cybersecurity", "ai"],
        deeper: "Where the moat lives: the deeper the workflow and the more data accumulated, the higher the switching cost. This is the industry's answer to the AI threat too; agents still need systems of record to act on, and whoever owns the data owns the agent's context." },
      { id: "success", name: "Customer success & renewal", what: "Onboarding, adoption, expansion", players: "CS organizations", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 1 },
        linksTo: [],
        deeper: "Invented by this industry because the revenue model demanded it: when customers pay annually, the sale never ends. NRR (median ~110% public) is manufactured here, and it is the single best predictor of the multiple a SaaS company earns." },
      { id: "ecosystem", name: "Ecosystem & marketplace", what: "APIs, app stores, SIs, developers", players: "Platform vendors", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 1, concentration: 3 },
        linksTo: ["venture-capital"],
        deeper: "The endgame of category winners: when others build businesses on your APIs (Salesforce's AppExchange pioneered it), you stop being a product and become an economy, with take rates to match." }
    ]
  },

  financials: {
    businessModel: [
      "Read a SaaS company in this order: ARR growth (the engine), NRR (the compounding quality), gross margin (the model integrity), CAC payback (the cost of growth), then Rule of 40 (the growth-profit exchange rate). Revenue is the trailing indicator; committed backlog (RPO) and net-new ARR are the leading ones.",
      "The lifecycle P&L: young SaaS burns 30%+ of revenue chasing growth (rationally, if LTV/CAC clears 3x); at scale the same company should print 25%+ free cash flow margins as S&M efficiency and renewals take over. The public market's post-2022 lesson: companies that never made that turn were not early, they were broken. The median public SaaS company now grows ~17% with a Rule of 40 score near 28; the elite decile does 40+ and trades at twice the multiple.",
      "Watch the AI seams: inference costs pressuring the sacred 75% gross margin, copilot SKUs adding 15% to 30% price uplifts, and usage-based lines creeping into seat-based P&Ls. The winners will disclose AI revenue cleanly; the pretenders will bury AI costs in R&D."
    ],
    fingerprint: { grossMargin: 76, recurringRevenue: 95, capitalIntensity: 8, pricingPower: 62, cyclicality: 30, operatingLeverage: 72 },
    lines: [
      { label: "ARR / revenue", note: "Growth rate is the multiple's first input; check organic vs acquired" },
      { label: "NRR", note: "The compounding quality: median ~110%, elite 120%+; watch the trend, not the level" },
      { label: "Gross margin", note: "75%+ is the birthright; AI inference is the new threat to it" },
      { label: "S&M spend", note: "30% to 50% while growing; efficiency shows up in CAC payback and magic number" },
      { label: "Rule of 40", note: "Growth % + FCF margin %; the sector's quality scalar (median ~28)" },
      { label: "RPO / billings", note: "The forward order book; moves stocks more than reported revenue" },
      { label: "Stock comp", note: "The honesty check: 10% to 25% of revenue; FCF margins that ignore it are fiction" }
    ],
    unitEconomics: {
      unit: "per $1 of new ARR (illustrative enterprise motion)",
      items: [
        { label: "Cost to acquire (S&M)", value: "$1.00 to $2.00", note: "the upfront investment: CAC payback 12 to 30 months" },
        { label: "Gross profit per year", value: "$0.75 to $0.80", note: "the annuity begins" },
        { label: "Year-2 value of the cohort", value: "$1.05 to $1.20", note: "NRR compounds it before any new sale" },
        { label: "Lifetime gross profit (5yr+)", value: "$4 to $6", note: "why the upfront burn is rational, when retention holds" }
      ]
    }
  },

  kpiRefs: ["saas-nrr", "saas-arr", "saas-cac-payback", "saas-ltv-cac", "saas-rule40", "saas-gross-margin", "saas-magic-number", "cloud-rpo"],

  health: {
    intro: "SaaS health is retention quality first, growth efficiency second, and honesty about stock comp always.",
    pillars: [
      { name: "Retention quality", weight: 30, metrics: "NRR trend, gross (logo) retention, cohort curves", healthy: "NRR >= 110% with gross retention >= 90%", warning: "NRR sliding below 105% or whale-masked logo churn" },
      { name: "Growth efficiency", weight: 25, metrics: "CAC payback, magic number, net-new ARR trend", healthy: "Payback < 18 months, magic number > 0.75", warning: "Payback > 30 months while burn continues" },
      { name: "Margin structure", weight: 15, metrics: "Gross margin, FCF margin incl. stock comp", healthy: "GM >= 75%, FCF positive at scale", warning: "GM < 65% or SBC > 20% of revenue papering over FCF" },
      { name: "Rule of 40", weight: 15, metrics: "Growth + FCF margin", healthy: ">= 40 elite, >= 30 solid", warning: "< 20 without a credible path" },
      { name: "Market position", weight: 15, metrics: "Category leadership, platform vs point risk, AI exposure direction", healthy: "System of record with data gravity", warning: "Point solution in a consolidating category, AI-substitutable" }
    ],
    scoringNote: "Retention carries the most weight because everything else can be fixed with money; a leaky bucket cannot."
  },

  valuation: {
    intro: "SaaS is valued on growth-adjusted revenue multiples until profits mature, then on FCF. The craft is refusing to pay revenue multiples for revenue that behaves like license sales.",
    methods: [
      { name: "EV / Revenue (growth-adjusted)", use: "The default: multiple scaled against growth + NRR quality", avoid: "Low-growth or high-churn names (a 3x on melting ARR is not cheap)", strengths: "Comparable across profitability stages", weaknesses: "Silent on efficiency; enabled the 2021 bubble", range: { low: 4, high: 12, asOf: 2024, note: "median ~6x forward; elite growers with 120% NRR clear the top" } },
      { name: "EV / FCF (mature)", use: "Scaled platforms with 20%+ FCF margins", avoid: "Companies where SBC is the profit illusion", strengths: "The honest endpoint every SaaS multiple must eventually justify", weaknesses: "Punishes rational reinvestment phases", range: { low: 20, high: 40, asOf: 2024, note: "quality compounders; check FCF net of stock comp" } },
      { name: "Rule of 40 regression", use: "Screening the sector: multiple vs (growth + margin) explains most valuation spread", avoid: "As a precision tool; it is a compass", strengths: "Correlates with multiples better than growth alone since 2022", weaknesses: "Mixes margin definitions; gameable one year at a time", range: { low: 0, high: 0, asOf: 2024, note: "each Rule-of-40 point adds roughly 0.1x to 0.15x of revenue multiple" } },
      { name: "Cohort / NRR-based DCF", use: "Underwriting the annuity directly: model the installed base's cash flows", avoid: "Sub-scale companies where cohorts are noise", strengths: "Values what SaaS actually is: a book of compounding contracts", weaknesses: "Retention assumptions dominate; small errors compound like the revenue does", range: { low: 0, high: 0, asOf: 2024, note: "the private equity underwriting standard" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Price a SaaS platform the market's way: forward revenue times a growth-and-quality multiple, minus net debt (usually net cash).",
      inputs: [
        { id: "vc-ebitda", label: "Forward revenue ($B)", min: 0.2, max: 60, step: 0.2, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / Revenue multiple", min: 2, max: 18, step: 0.5, value: 7, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt (net cash) ($B)", min: -20, max: 10, step: 0.5, value: -2, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats SaaS as the equity market's purest duration asset: near-perfect gross margins and contractual revenue, priced off long-dated cash flows and therefore violently rate-sensitive. The long book owns data-gravity compounders through drawdowns; the short book hunts point solutions with decaying NRR and AI substitution risk. Since 2022 the sector trades on efficiency (Rule of 40) as much as growth.",
    debates: [
      { topic: "Does AI armor SaaS or dissolve it?", bull: "Incumbents own the data and distribution; copilot SKUs are already adding 15% to 30% price uplift on the largest installed bases in software, and agents need systems of record to act on. AI is the biggest upsell cycle since mobile.", bear: "Agents collapse seat counts (the industry's pricing unit), inference costs erode the 75% gross margin, and AI-native challengers rebuild categories at a tenth of the seat price. The S-curve that made SaaS is starting a new one without the incumbents." },
      { topic: "Is high-teens growth durable or terminal deceleration?", bull: "Only ~30% of enterprise workloads are digitized; vertical SaaS, international, and AI SKUs each extend the runway. 17% growth on a $300B base is one of the great compounding stories available at scale.", bear: "The easy seats are sold. NRR fell 5 to 10 points post-2022 and never fully recovered; vendor consolidation means share shifts, not market growth. High-teens becomes low-teens, and the multiples still assume the old regime." },
      { topic: "Platforms vs best-of-breed", bull: "CIO consolidation and AI budgets favor megavendor suites; distribution beats product in enterprise software, and the platforms own distribution.", bear: "Suites historically under-innovate until best-of-breed eats a category (Slack, Figma, CrowdStrike all outran incumbents). AI lowers the cost of being best-of-breed everywhere at once." }
    ],
    cycle: {
      where: "Mid-cycle after a hard reset: growth normalized in the high teens, multiples off 60% from 2021's peak and stable near ~6x forward revenue, with dispersion between AI-perceived winners and losers at record width.",
      drivers: "Enterprise IT budget cycles (set Q4, spent through the year), rate expectations (the multiple's denominator), and now AI budget reallocation, which both funds copilot SKUs and cannibalizes legacy line items.",
      leads: [
        "cRPO / RPO growth vs revenue growth in quarterly prints (acceleration shows here first)",
        "NRR direction across the public cohort (SaaS Capital and ChartMogul publish free annual cuts)",
        "Hyperscaler consumption commentary (SaaS runs on it; optimization cycles hit both together)",
        "Software job postings (a free real-time proxy for vendor confidence)",
        "Net-new ARR added per quarter, the cleanest demand signal available"
      ]
    },
    exposure: [
      { vehicle: "Megacap platforms (Microsoft, Salesforce class)", note: "The consolidation + AI distribution trade; lowest risk, index-heavy" },
      { vehicle: "Elite growth pure-plays", note: "120%+ NRR names; the premium multiple is rented, not owned; size accordingly" },
      { vehicle: "Vertical SaaS", note: "Highest retention in software; often the best risk-adjusted compounders" },
      { vehicle: "Software index (IGV/WCLD archetype)", note: "The beta expression; heavily megacap-weighted" },
      { vehicle: "Picks and shovels (cloud infra, dev tools, cybersecurity)", note: "Exposure to software creation itself rather than any category winner" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "cRPO guides and NRR disclosures move names 10%+; the sector reports in distinct waves (late Jan, late Apr, late Jul, late Oct)" },
      { when: "Annual user conferences (Sep-Nov)", what: "Dreamforce/Ignite-class events set AI product narratives and next-year pricing" },
      { when: "Fed meetings / rate path", what: "The multiple's denominator; long-duration SaaS moves 2x the market on rate surprises" },
      { when: "Q4 budget season (Nov-Jan)", what: "Enterprise renewals and vendor consolidation decisions land here" }
    ],
    data: [
      { series: "BVP Nasdaq Emerging Cloud Index", source: "cloudindex.bvp.com (free)", why: "The sector's live multiple and composition dashboard" },
      { series: "SaaS Capital annual survey", source: "saas-capital.com (free)", why: "Private-company growth and retention benchmarks by size" },
      { series: "Gartner press releases", source: "gartner.com newsroom (free)", why: "Category market sizes and shares without the paywall" },
      { series: "Company IR: cRPO, NRR disclosures", source: "SEC filings / IR decks (free)", why: "The primary source; the metrics canon is disclosed quarterly" }
    ],
    playbook: [
      { regime: "Rates rising", behavior: "Multiple compression, hardest on unprofitable high-multiple names; the 2022 template was a 60%+ de-rating. Quality with FCF holds best." },
      { regime: "Recession", behavior: "SMB-exposed and consumption models feel it first (churn, seat cuts); enterprise contracts defer rather than die. NRR is the tell, 2 quarters lagged." },
      { regime: "Inflation", behavior: "Decent pass-through via annual price escalators and CPI-linked renewals; margins hold better than industrials but labor costs bite R&D." },
      { regime: "Risk-off", behavior: "High-beta duration: expect 1.5x to 2.5x market downside in drawdowns and the same on the way back. Crowding in 'AI winners' amplifies both directions." }
    ]
  },

  players: [
    { name: "Microsoft", role: "The distribution empire", country: "US", real: true, note: "365 + Azure + Copilot: enterprise software's default renewal" },
    { name: "Salesforce", role: "The category creator", country: "US", real: true, note: "CRM's inventor and still its king; the sector's efficiency-turn case study" },
    { name: "SAP / Oracle", role: "The ERP incumbency", country: "DE", real: true, note: "Cloud migrations of 40-year-old customer bases; slow, giant, sticky" },
    { name: "ServiceNow", role: "Workflow platform", country: "US", real: true, note: "The 2020s' premier enterprise compounder; 98%+ renewal rates" },
    { name: "Adobe / Intuit", role: "Creative + financial monopolies", country: "US", real: true, note: "Subscription conversions that became case studies" },
    { name: "Workday / Veeva / Toast", role: "Category & vertical leaders", country: "US", real: true, note: "HR, pharma, restaurants: own the workflow, own the decade" },
    { name: "Thoma Bravo / Vista", role: "The PE consolidators", country: "US", real: true, note: "The exit of record for maturing SaaS; efficiency surgeons" }
  ],

  geography: [
    { country: "US", role: "~70% of global SaaS revenue and nearly all category creation", note: "The playbook, capital, and talent concentration" },
    { country: "IL", role: "Cybersecurity and dev-tool factory", note: "Highest startup density per capita" },
    { country: "IN", role: "The delivery and R&D base + rising product scene", note: "GCCs of every major vendor; Zoho/Freshworks-class natives" },
    { country: "DE", role: "SAP's shadow and industrial software", note: "Europe's enterprise anchor" },
    { country: "AU", role: "PLG natives", note: "Atlassian/Canva proved bottom-up from anywhere" }
  ],

  cycles: [
    { year: 2001, title: "Dotcom washout spares the model", kind: "bust", text: "ASPs die, but Salesforce survives on subscription cash flow. Lesson: recurring revenue is the crash insurance." },
    { year: 2009, title: "The GFC stress test", kind: "shift", text: "SaaS churns but does not collapse; opex beats capex in a credit crunch. Enterprise adoption accelerates out of the trough." },
    { year: 2016, title: "The first SaaS winter", kind: "bust", text: "LinkedIn's guidance miss halves the sector's multiples in a quarter. Lesson: duration assets gap, they do not drift." },
    { year: 2021, title: "Peak everything", kind: "boom", text: "Median forward multiples touch 15x+; 2021 vintage IPOs later fall 70%+. Lesson: the model is real, the price was not." },
    { year: 2022, title: "The rate reset", kind: "bust", text: "The fastest multiple compression in software history (-60%+); efficiency replaces growth as the scoreboard. Rule of 40 becomes doctrine." },
    { year: 2024, title: "AI bifurcation", kind: "shift", text: "The sector still grows 16.7% (Gartner), but returns split violently between perceived AI winners and roadkill. Lesson: within-sector dispersion is now the trade." }
  ],

  risks: [
    { name: "Agentic AI vs per-seat pricing", severity: 4, likelihood: 3, transmission: "Agents reduce human seats → NRR erodes at renewal → the compounding math runs backward through every DCF in the sector." },
    { name: "Rate regime", severity: 3, likelihood: 3, transmission: "Long-duration cash flows reprice mechanically; a 100bp surprise moves the sector's multiple more than a year of execution." },
    { name: "Vendor consolidation", severity: 3, likelihood: 4, transmission: "CIO tool-rationalization → point solutions churn into suites → the long tail becomes PE food at falling multiples." },
    { name: "Gross margin erosion from AI COGS", severity: 3, likelihood: 3, transmission: "Inference costs land in cost of revenue → the 75%+ birthright margin slips → FCF and multiples follow." },
    { name: "Security / data breach", severity: 3, likelihood: 2, transmission: "One breach at a major multi-tenant vendor re-prices trust across the model; compliance costs ratchet permanently." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Instead of buying software in a box, companies rent it monthly over the internet: always updated, no servers to run. The seller wins because customers pay forever; the buyer wins because starting costs almost nothing. Subscription software now runs most of how companies work."] },
    L2: { title: "Intermediate", text: ["The model runs on its metrics canon: ARR (the recurring base), NRR (do existing customers pay more each year: median ~110%), CAC payback (how fast a customer repays their acquisition cost), and the Rule of 40 (growth plus profit margin). High gross margins (75%+) and contractual renewals make it the most predictable revenue in business."] },
    L3: { title: "Advanced", text: ["Quality analysis is retention analysis: cohort curves, gross vs net retention, and expansion mix decide what a revenue dollar is worth. Valuation runs on growth-adjusted EV/Revenue transitioning to FCF multiples at maturity, with stock comp as the honesty test. Distribution motion (enterprise vs PLG vs vertical) shapes every line of the P&L."] },
    L4: { title: "Expert", text: ["The current regime: efficiency-era multiples (~6x forward median), record dispersion on AI narratives, consolidation favoring platforms, and pricing migrating from seats to usage/outcomes. Model AI three ways: SKU uplift on the base, COGS pressure on gross margin, and seat-count risk at renewal. cRPO and net-new ARR lead everything reported."] },
    L5: { title: "Institutional", text: ["Allocator's frame: SaaS is the market's cleanest duration + quality factor expression: own irreplaceable systems of record through the cycle, rent the beta via indices, and trade the dispersion (AI-armored vs AI-substitutable) rather than the sector. The structural question for the decade is whether agentic AI breaks the seat-pricing social contract; position sizes should survive either answer."] }
  },

  quiz: [
    { q: "A SaaS company has 110% NRR. This means:", choices: ["It churned 10% of customers", "Last year's customers now pay 10% more in aggregate, before any new sales", "Revenue grew 110%", "Margins are 110%"], answer: 1, explain: "Net revenue retention measures the installed base's spend: above 100%, the company grows even with zero new logos. The median public SaaS company sits near 110%." },
    { q: "Why do healthy SaaS companies burn cash while growing fast?", choices: ["The product is unprofitable", "Customers are acquired upfront (1 to 2 years of revenue in CAC) and repay over years", "Cloud bills exceed revenue", "Fraud"], answer: 1, explain: "S&M spend front-loads what renewals repay later; the burn is an investment in an annuity, rational as long as retention and LTV/CAC hold." },
    { q: "The Rule of 40 says:", choices: ["Grow 40% or die", "Revenue growth % plus FCF margin % should reach 40", "Spend 40% on marketing", "40x is the fair multiple"], answer: 1, explain: "It prices the growth-profit trade-off on one scale; the public median is ~28, and elite scores earn premium multiples." },
    { q: "The 2022 SaaS crash was primarily caused by:", choices: ["Products stopped working", "Mass churn", "Rates repricing long-duration cash flows: multiples compressed 60%+ while businesses kept growing", "A data breach"], answer: 2, explain: "The model performed; the price regime broke. Duration assets gap when the discount rate moves." },
    { q: "AI threatens the SaaS model most directly through:", choices: ["Server costs", "Per-seat pricing, if agents reduce the human seats being licensed", "Slower internet", "Longer sales cycles"], answer: 1, explain: "Seats are the industry's pricing unit; agent-done work challenges it, which is why pricing is migrating toward usage and outcomes." },
    { q: "Vertical SaaS commands the best retention because:", choices: ["It is cheaper", "It becomes the customer's entire operating system for their industry", "Regulators require it", "It has no competitors"], answer: 1, explain: "Own the whole workflow of one industry (pharma, restaurants, construction) and switching means re-running the business." },
    { q: "cRPO growth outpacing revenue growth signals:", choices: ["Trouble ahead", "Acceleration: contracted future revenue is building faster than it is being recognized", "Channel stuffing", "Nothing"], answer: 1, explain: "Committed remaining performance obligations are the forward order book; the market trades the print on it." },
    { q: "Stock-based compensation matters in SaaS analysis because:", choices: ["It is illegal", "At 10% to 25% of revenue it can make 'FCF margins' fiction if ignored", "It reduces churn", "It is tax-free"], answer: 1, explain: "SBC is a real cost paid in dilution; quality analysis nets it from FCF before applying any multiple." }
  ],

  sources: [
    { name: "Gartner: enterprise application SaaS market 2024 ($218.5B, +16.7%)", url: "https://www.gartner.com/en/documents/6647734", feeds: "market size" },
    { name: "SaaS Capital growth & retention benchmarks", url: "https://www.saas-capital.com/research/", feeds: "growth, NRR medians" },
    { name: "BVP Cloud Index", url: "https://cloudindex.bvp.com", feeds: "multiples, composition" },
    { name: "ChartMogul SaaS retention report", url: "https://chartmogul.com/reports/", feeds: "retention benchmarks" }
  ]
};
