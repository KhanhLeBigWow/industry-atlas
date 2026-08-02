/* Industry Atlas - FINTECH (full module, research-backed)
 * Anchors: global fintech revenue $378B in 2024 (+21%) and $504B in 2025, ~4x
 * banking's growth; 69% of public fintechs profitable, EBITDA margins 12% to 16%
 * (BCG Global Fintech Report, June 2025/2026). Nubank FY2025: 131M customers,
 * $2.9B net income, 33% ROE, $15/mo ARPAC (Nu Holdings Q4 2025 results).
 * Revolut 2025: $6B revenue (+46%), $2.3B pretax profit, 68.3M retail customers.
 * Klarna: $45.6B (2021) to $6.7B (2022) to ~$14B NYSE IPO (Sept 2025); take rate
 * ~2.4% of GMV vs Affirm ~8.7%. Funding reset: Q1 2025 fintech VC $10.3B vs ~$38B
 * quarterly peak in 2021 (CB Insights); Chime IPO $9.8B vs $25B 2021 mark; Stripe
 * $106.7B (Sept 2025) back above its $95B 2021 peak. Embedded finance: ~$7T US
 * transaction value by 2026 (Bain). Stablecoins: ~$390B genuine payment volume
 * in 2025, roughly 2x 2024 (Artemis/McKinsey); GENIUS Act signed 2025. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["fintech"] = {
  meta: {
    id: "fintech", name: "Fintech", sector: "finance", status: "full",
    tagline: "Software ate the bank's front door: now the survivors must earn like banks while staying priced like tech.",
    marketSize: { value: 504, unit: "$B", asOf: 2025, note: "global fintech revenue (BCG); grew 22% in 2025, ~4x the pace of traditional banking; payments the largest slice" },
    cagr: { value: 20, range: [15, 25], horizon: "2024-2028" },
    maturity: "growth", cyclicality: 3, capitalIntensity: 2, regulation: 4, disruption: 4
  },
  newsQuery: '(fintech OR neobank OR "buy now pay later" OR stablecoin OR Nubank OR Revolut OR Klarna OR Stripe OR "embedded finance")',

  overview: {
    definition: "Fintech rebuilds banking, payments, lending, and investing as software: branchless distribution, near-zero marginal cost to serve, and data-driven underwriting, layered on top of (and increasingly instead of) the incumbent financial system.",
    howItWorks: [
      "The industry is a three-layer stack. At the bottom sit the rails and charters: card networks, ACH and real-time payment systems, and the sponsor banks that lend their licenses to everyone above. The middle layer is infrastructure: acceptance and processing (Stripe, Adyen), account connectivity (Plaid), identity and fraud tooling. The top layer is what consumers see: neobanks, BNPL checkouts, trading and wealth apps. The whole pool earned $504B of revenue in 2025 per BCG, growing 22%, with payments the largest single slice ($126B of the 2024 pool).",
      "The core economic edge is cost-to-serve. A branchless bank with one cloud core can serve a customer for a fraction of what a branch network costs, then monetize through interchange, interest income, and subscriptions. Nubank is the proof: 131M customers at the end of 2025, monthly revenue per active customer of $15, and a 33% ROE that most incumbent banks cannot touch. The catch is that the products are still balance-sheet products: deposits must be gathered, credit losses must be provisioned, and regulators treat scale as systemic.",
      "The profitability turn is the decade's headline. In 2021 the sector ran on growth at any price; by 2025, 69% of public fintechs were profitable and average EBITDA margins had climbed from 12% to 16% (BCG). Nubank earned $2.9B of net income in 2025 (up from $2.0B in 2024); Revolut posted $6B of revenue (+46%) and $2.3B of pretax profit on 68.3M retail customers. The scaled winners now compound like software companies with bank-grade earnings underneath.",
      "The valuation cycle was brutal and clarifying. Quarterly VC funding collapsed from ~$38B at the 2021 peak to $10.3B in Q1 2025 (CB Insights), a drop of more than 70%. Klarna round-tripped from $45.6B to $6.7B to a ~$14B NYSE IPO in September 2025; Chime listed at $9.8B against a $25B private mark. Yet Stripe's September 2025 valuation of $106.7B cleared its 2021 peak: the market re-rated proven unit economics and starved everything else. The next revenue pools are embedded finance (Bain sees ~$7T of US transaction value by 2026) and regulated stablecoins."
    ],
    history: [
      { era: "1950-1998", title: "Plastic and mainframes", text: "Cards, ATMs, and core banking systems: fintech before the word existed, built by banks and their vendors." },
      { era: "1998-2008", title: "The PayPal wave", text: "PayPal proves money can move over the internet at consumer scale; eBay buys it in 2002; online payments become an industry." },
      { era: "2009-2014", title: "The post-crisis founding class", text: "Smartphones, app stores, and a trust vacuum after 2008 spawn Square, Stripe, Venmo, and the first neobanks: distribution moves to the phone." },
      { era: "2015-2021", title: "The blitzscale era", text: "ZIRP capital funds neobanks, BNPL, and trading apps at any price; Klarna peaks at $45.6B and quarterly VC funding hits ~$38B in 2021." },
      { era: "2022-present", title: "Reset and resurgence", text: "Rates end the party: funding falls 70%+, valuations halve or worse, and profitability becomes the religion. By 2025 revenue hits $504B, the IPO window reopens (Chime, Klarna, Circle), and stablecoins get a US law." }
    ],
    trends: [
      { title: "The profitability turn", direction: "up", text: "69% of public fintechs profitable and margins expanding (BCG): the sector graduated from burning capital to compounding it, and markets now pay for earnings, not users." },
      { title: "Embedded finance", direction: "up", text: "Payments, lending, and insurance sold inside other software: Bain projects ~$7T of US transaction value by 2026, roughly 10% of US transactions, making every software company a potential fintech." },
      { title: "Stablecoins go legitimate", direction: "shift", text: "The 2025 GENIUS Act gave US dollar stablecoins a federal framework; genuine payment volume reached ~$390B in 2025, about 2x 2024, mostly cross-border and B2B where card rails are weakest." },
      { title: "Valuation bifurcation", direction: "shift", text: "Scaled winners re-rate (Stripe above its 2021 peak at $106.7B) while the long tail is starved: mid and late-stage rounds took their highest deal share since 2021 as capital concentrates." },
      { title: "AI through the stack", direction: "up", text: "Underwriting, fraud, and service are being rebuilt on models: Klarna says its AI assistant does the work of ~700 agents. Cost curves bend fastest where labor was the product." }
    ],
    outlook: "A growth industry that survived its own bubble: revenue compounding ~20% off a $504B base, profitability proven at scale, and 2 open frontiers (embedded finance and stablecoins) that expand the pool rather than redivide it. The unresolved test is credit: most neobank and BNPL loan books have never been through a full recession. The scaled winners look increasingly like the new incumbents; the question is whether they keep tech multiples once they carry bank-sized balance sheets."
  },

  structure: {
    suppliers: [
      { name: "Sponsor banks & charters", note: "Rent the license: the quiet chokepoint of US fintech, and post-Synapse, the scrutinized one" },
      { name: "Card networks & bank rails (Visa, Mastercard, ACH, Pix, UPI)", note: "The pipes everyone builds on; instant-payment rails are the new competitive substrate" },
      { name: "Cloud & core processors", note: "AWS-era cores (and legacy FIS/Fiserv) set the cost-to-serve floor" },
      { name: "Credit capital (warehouse lines, forward-flow, securitization)", note: "BNPL and digital lenders run on wholesale funding until they earn deposits" }
    ],
    producers: [
      { name: "Neobanks (Nubank, Revolut, Chime)", note: "Nubank: 131M customers, $2.9B net income 2025; the model works at scale" },
      { name: "Payments infrastructure (Stripe, Adyen, Block)", note: "Acceptance and processing: the sector's most software-like economics" },
      { name: "BNPL & digital lenders (Klarna, Affirm)", note: "Checkout credit: ~$560B of global BNPL GMV in 2025" },
      { name: "Embedded finance & BaaS platforms", note: "Finance as an API inside vertical software: the fastest-growing channel" }
    ],
    distributors: [
      { name: "App stores & superapps", note: "Distribution is the phone; referral loops made Nubank's CAC famously tiny" },
      { name: "Embedded channels (software platforms, marketplaces)", note: "The product goes to where commerce already happens: Shopify-class platforms as bank branches" }
    ],
    customers: [
      { name: "Consumers", note: "From the underbanked (Latin America's opening) to prime users hunting yield and UX" },
      { name: "SMBs", note: "The most underserved segment in banking: payments, credit, and payroll in one stack" },
      { name: "Enterprises & platforms", note: "Buy infrastructure, not apps: every large company is becoming a payments company" }
    ],
    regulators: [
      { name: "US patchwork (CFPB, OCC, Fed, state regulators)", note: "Open banking (Section 1033), BaaS crackdowns, and the GENIUS Act stablecoin regime" },
      { name: "UK FCA & EU (PSD2/PSD3)", note: "Open banking's birthplace; license-driven markets where charters are earned, not rented" },
      { name: "Emerging-market central banks (Brazil, India)", note: "Pix and UPI: state-built rails that created fintech booms by fiat" }
    ],
    capital: [
      { name: "Venture capital", note: "Q1 2025: $10.3B vs ~$38B quarterly at the 2021 peak; concentrated in scaled winners" },
      { name: "Public markets", note: "The 2025 IPO window (Chime, Klarna, Circle) reopened the exit path at reset prices" },
      { name: "Deposits", note: "The endgame funding source: cheap, sticky, and the reason neobanks pursue full licenses" },
      { name: "Securitization & private credit", note: "Loan books recycled into the capital markets; the fair-weather funding lesson of 2016 and 2022" }
    ]
  },

  valueChain: {
    intro: "From a charter and a card rail to a checkout button. Value concentrates at the two ends: the infrastructure everyone must use, and the customer relationship everyone wants to own. The middle (undifferentiated apps without a moat) is where the 2022 reset did its killing.",
    stages: [
      { id: "rails", name: "Rails & sponsor banks", what: "Card networks, ACH/RTP/Pix/UPI, chartered banks renting licenses", players: "Visa, Mastercard, sponsor banks, central-bank rails", valueCapture: 4,
        economics: { grossMargin: [40, 70], capitalIntensity: 3, concentration: 5 },
        linksTo: ["payments", "banking"],
        deeper: "The networks are the industry's tollbooths, and the sponsor banks its quiet gatekeepers. Synapse's 2024 collapse (frozen customer funds, no clean ledger) turned BaaS from a growth story into a compliance story: regulators now treat rented charters as the system's soft spot." },
      { id: "infrastructure", name: "Data, identity & risk infrastructure", what: "Account connectivity, KYC/AML, fraud, credit data", players: "Plaid, Alloy-class identity, bureaus, fraud platforms", valueCapture: 4,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 3 },
        linksTo: ["data-infrastructure", "cybersecurity", "ai"],
        deeper: "Picks and shovels with software margins: every new fintech is a customer, and fraud spend is non-discretionary. Plaid's mark fell from $13.4B (2021) to $6.1B (2025): even the good middleware repriced. AI is the battleground: fraud models and underwriting data are where model quality converts directly into loss rates." },
      { id: "acceptance", name: "Payment acceptance & processing", what: "Getting merchants paid: online, in-store, cross-border", players: "Stripe, Adyen, Block, PayPal", valueCapture: 5,
        economics: { grossMargin: [40, 65], capitalIntensity: 2, concentration: 4 },
        linksTo: ["payments", "ecommerce"],
        deeper: "The sector's crown-jewel economics: take a slice of every transaction, ride e-commerce growth, and sell software on top. Stripe's $106.7B September 2025 valuation, above its 2021 peak, is the reset's clearest verdict: volume-based revenue with software margins re-rates first. Margins quoted on net revenue; gross take rates are thin slivers of enormous volume." },
      { id: "neobanking", name: "Neobanks & consumer finance", what: "Branchless banking: accounts, cards, credit, the full wallet", players: "Nubank, Revolut, Chime, Monzo", valueCapture: 4,
        economics: { grossMargin: [30, 55], capitalIntensity: 3, concentration: 3 },
        linksTo: ["banking"],
        deeper: "The model finally proved itself: Nubank's $15 monthly ARPAC against a cost-to-serve a branch bank cannot approach yields a 33% ROE at 131M customers. The strategic race is the license: deposit funding and full charters turn an app into a bank, with a bank's capital rules attached. Most of the long tail never got there." },
      { id: "credit", name: "Digital lending & BNPL", what: "Checkout installment credit and app-based lending", players: "Klarna, Affirm, digital lenders", valueCapture: 3,
        economics: { grossMargin: [30, 50], capitalIntensity: 4, concentration: 3 },
        linksTo: ["private-credit", "banking", "retail"],
        deeper: "Two BNPL species: Klarna monetizes ~2.4% of GMV, mostly merchant fees on short Pay-in-4 loans; Affirm takes ~8.7%, half of it interest on longer loans. Interest carries more margin and more credit risk. Global BNPL GMV hit ~$560B in 2025, but the books are young: the model's full-recession stress test is still ahead of it." },
      { id: "embedded", name: "Embedded finance, wealth & crypto platforms", what: "Finance inside other software; investing and digital-asset apps", players: "BaaS platforms, Robinhood-class brokers, Circle", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 2, concentration: 2 },
        linksTo: ["saas", "wealth-management", "crypto-infrastructure"],
        deeper: "The expansion frontier: Bain projects ~$7T of US embedded transaction value by 2026, roughly 10% of US transactions. Stablecoins are the wildcard rail: ~$390B of genuine payment volume in 2025 (2x 2024) and a US federal framework via the GENIUS Act. If dollars move as tokens, interchange economics get renegotiated." }
    ]
  },

  financials: {
    businessModel: [
      "Read fintech in three P&L species. Payments infrastructure: revenue = volume x take rate, gross margins software-like on net revenue, operating leverage enormous once fraud and compliance are built. Neobanks: a hybrid P&L: interchange plus net interest income minus credit provisions, where ARPAC (Nubank: $15/mo) against near-zero cost-to-serve creates bank earnings with tech cost structure. Lenders and BNPL: spread businesses wearing app clothing: revenue is take rate plus interest, and the real driver is credit losses against funding cost.",
      "The sector's fingerprint changed in the reset. Growth is still ~20%+ on a $504B pool, but the market now underwrites earnings: 69% of public fintechs are profitable and EBITDA margins are climbing (BCG). Balance-sheet gravity is the tension: every step deeper into lending and deposits raises returns and drags multiples toward bank comps. The scaled winners (Nubank $2.9B, Revolut $2.3B pretax in 2025) earn like banks and still grow like software: that combination is what the 2025 IPO window paid for."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 55, capitalIntensity: 30, pricingPower: 45, cyclicality: 55, operatingLeverage: 75 },
    lines: [
      { label: "TPV & take rate", note: "The payments engine: volume growth times monetization; watch mix shift compressing rates" },
      { label: "ARPAC & active customers", note: "The neobank tape: Nubank's $15/mo against incumbent-bank ARPUs several times higher is the runway" },
      { label: "Net interest income & funding cost", note: "Deposits vs warehouse lines: the spread that decides who survives a credit cycle" },
      { label: "Credit provisions & delinquency", note: "The swing line: BNPL and neobank books are young; provisions are where recessions arrive first" },
      { label: "Regulatory & compliance cost", note: "The rising fixed cost: BaaS crackdowns and stablecoin rules professionalize the cost base" }
    ],
    unitEconomics: {
      unit: "per active neobank customer (illustrative, Nubank-style)",
      items: [
        { label: "Monthly ARPAC", value: "~$15", note: "Nubank, 2025; up 27% YoY as credit and wallet share deepen" },
        { label: "Cost-to-serve", value: "~$1 per month class", note: "cloud core, no branches: the structural advantage" },
        { label: "CAC", value: "low single-digit $", note: "referral-driven; incumbents spend hundreds per account" },
        { label: "Credit losses", value: "the swing factor", note: "underwriting quality decides whether ARPAC is profit or provision" }
      ]
    }
  },

  kpiRefs: ["pay-take-rate", "bank-nim", "saas-cac-payback"],
  kpiLocal: [
    {
      id: "fintech-arpac", name: "ARPAC (Avg Revenue per Active Customer)", industries: ["fintech"],
      definition: "Monthly revenue divided by monthly active customers: the neobank monetization tape.",
      formula: "ARPAC = total revenue / average active customers, monthly",
      interpretation: "Nubank hit $15/mo in 2025 (+27% YoY); incumbent banks earn several times that per customer, which is the bull case (runway) and the bear case (they haven't yet).",
      healthy: "Rising ARPAC with flat cost-to-serve and stable credit losses", warning: "ARPAC growth driven mainly by riskier credit expansion"
    },
    {
      id: "fintech-loss-rate", name: "Net Credit Loss Rate", industries: ["fintech"],
      definition: "Charge-offs net of recoveries as a share of the loan book: the honesty meter for app-based lenders.",
      formula: "Net losses / average receivables, annualized",
      interpretation: "BNPL books turn over in weeks, so losses show up fast; a rising loss rate with rising growth means underwriting is being spent to buy volume.",
      healthy: "Stable or falling losses while originations grow", warning: "Loss rate climbing faster than yield; provisions lagging delinquency trends"
    }
  ],

  health: {
    intro: "Fintech health is unit economics with a credit conscience: monetization per customer, discipline in the loan book, and a funding base that survives a shut capital market.",
    pillars: [
      { name: "Unit economics & monetization", weight: 25, metrics: "ARPAC trend, take rate, contribution margin", healthy: "ARPAC compounding on flat cost-to-serve", warning: "Growth bought with incentives; monetization stalling" },
      { name: "Credit quality", weight: 20, metrics: "Delinquency, net charge-offs, provision coverage", healthy: "Losses stable through growth; coverage conservative", warning: "Losses rising with the book; reserve releases funding EPS" },
      { name: "Funding & capital", weight: 20, metrics: "Deposit share of funding, warehouse dependence, capital ratios", healthy: "Deposit-funded, charter secured, capital above minimums", warning: "Wholesale-funded growth; charter rented from a strained sponsor" },
      { name: "Growth efficiency", weight: 20, metrics: "CAC payback, referral share, cohort retention", healthy: "Payback under 12 months; organic acquisition dominant", warning: "Paid CAC climbing; cohorts churning before payback" },
      { name: "Regulatory standing", weight: 15, metrics: "License scope, consent orders, compliance investment", healthy: "Full licenses in core markets; clean supervisory record", warning: "Consent orders, BaaS partner risk, growth ahead of compliance" }
    ],
    scoringNote: "The sector's fatal pattern is growth outrunning either credit discipline or compliance: both failures compound quietly, then all at once (Synapse, the 2016 marketplace-lending bust)."
  },

  valuation: {
    intro: "The market prices fintech on a spectrum from software to bank: infrastructure earns revenue multiples, neobanks earn growth-adjusted bank math, and lenders get credit-cycle skepticism no matter what they call themselves.",
    methods: [
      { name: "EV / Revenue (growth-adjusted)", use: "Payments and infrastructure names with software margins", avoid: "Applying it to balance-sheet lenders: revenue is not comparable", strengths: "Matches the software-like economics; comparable across private marks", weaknesses: "Ignores credit risk and capital needs entirely", range: { low: 4, high: 12, asOf: 2025, note: "Affirm ~9x sales vs Klarna ~5x at IPO shows the take-rate and growth premium" } },
      { name: "P/E on through-cycle ROE", use: "Profitable neobanks: bank math with a growth kicker", avoid: "Peak-credit earnings; normalize the provision line", strengths: "Anchors to real earnings power (Nubank: 33% ROE)", weaknesses: "Young books flatter earnings until the first real cycle", range: { low: 15, high: 30, asOf: 2025, note: "scaled profitable neobanks command bank-defying multiples while growth holds" } },
      { name: "EV / Gross profit", use: "Cross-species comps: strips funding and interchange pass-throughs", avoid: "Companies capitalizing credit losses below the gross line", strengths: "The cleanest like-for-like across payments, neobanks, BNPL", weaknesses: "Still silent on capital intensity", range: { low: 8, high: 20, asOf: 2025, note: "the reset compressed the band; scaled winners sit at the top" } },
      { name: "Volume-based sanity checks (TPV, GMV)", use: "Bounding what a take rate could plausibly monetize", avoid: "Face-value GMV multiples: 2021's signature error", strengths: "Grounds the story in transaction reality", weaknesses: "Volume without monetization is a vanity metric", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; Klarna monetizes ~2.4% of GMV, Affirm ~8.7%: same industry, different businesses" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a fintech quickly: net revenue times a growth-and-quality-adjusted multiple, plus net cash (many carry it; lenders carry the opposite).",
      inputs: [
        { id: "vc-revenue", label: "Net revenue ($B)", min: 0.2, max: 20, step: 0.2, value: 3, fmt: "money" },
        { id: "vc-mult", label: "EV / Revenue multiple", min: 2, max: 15, step: 0.5, value: 6, fmt: "mult" },
        { id: "vc-netcash", label: "Net cash ($B)", min: -5, max: 15, step: 0.5, value: 1, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays fintech as a barbell: core the scaled winners with proven unit economics (payments infrastructure, profitable neobanks) and treat everything credit-heavy as cycle-timing, not compounding. The 2022 reset did the quality filtering; the open question the market keeps repricing is whether bank-sized balance sheets eventually earn bank-sized multiples.",
    debates: [
      { topic: "Neobanks: new incumbents or banks in waiting?", bull: "Nubank earns a 33% ROE at 131M customers with ARPAC still a fraction of incumbent levels: the cost-to-serve gap is structural, the cross-sell runway is decades long, and emerging markets add customers faster than banks can close branches.", bear: "Every step deeper into lending drags the P&L toward bank physics: provisions, capital ratios, rate sensitivity. When growth normalizes, a neobank is a bank with a nicer app, and banks trade at 8x to 12x earnings, not 25x." },
      { topic: "BNPL: durable credit innovation or an untested cycle product?", bull: "Klarna and Affirm reached profitability while growing double digits; short-duration books reprice risk in weeks, not years, and checkout distribution is a structural funnel banks cannot replicate.", bear: "The books have never seen a real unemployment cycle, regulators are circling consumer-credit disclosure, and the merchant-fee model invites competition from every wallet with a balance sheet. Fair-weather funding plus young cohorts is the 2016 marketplace-lending setup at 10x the scale." },
      { topic: "Stablecoins: the next rail or a feature the incumbents absorb?", bull: "~$390B of genuine 2025 payment volume doubling annually, a federal framework (GENIUS Act), and cross-border B2B economics that undercut correspondent banking by orders of magnitude: this is the first credible new rail since cards.", bear: "Visa and the banks are already issuing and settling in stablecoins themselves; regulation raises the moat for exactly the incumbents it was supposed to disrupt. The volume is real but the margin may accrue to whoever already owns distribution and trust." }
    ],
    cycle: {
      where: "Early expansion after a full boom-bust: funding still down 70%+ from the 2021 peak but concentrating in winners, the IPO window reopened in 2025 (Chime, Klarna, Circle), profitability proven at scale, and the first true credit-cycle test still ahead.",
      drivers: "Consumer spending and e-commerce volume, the rate cycle (NII windfall vs funding cost), VC and IPO risk appetite, and regulatory posture on BaaS, open banking, and stablecoins.",
      leads: [
        "CB Insights quarterly State of Fintech (free summaries): funding, deals, valuations",
        "SEC EDGAR S-1/F-1 filings: the IPO pipeline is the sentiment tape (free)",
        "Fed G.19 consumer credit and NY Fed Household Debt & Credit for delinquency trend (free)",
        "Company credit disclosures: Affirm and Nubank delinquency prints lead the sector's credit narrative",
        "Stablecoin supply and volume dashboards (free public trackers) for the new-rail thesis"
      ]
    },
    exposure: [
      { vehicle: "Scaled neobanks (Nubank class)", note: "The proven compounders: bank earnings, software cost base, EM runway" },
      { vehicle: "Payments infrastructure (Adyen public; Stripe private)", note: "Volume-linked software economics: the sector's quality core" },
      { vehicle: "BNPL (Affirm, Klarna)", note: "High-beta credit-plus-growth: size on delinquency evidence, not narrative" },
      { vehicle: "Picks and shovels (identity, fraud, BaaS infrastructure)", note: "Every fintech is a customer; margins without credit risk" },
      { vehicle: "Fintech ETFs (FINX/ARKF class)", note: "Broad beta to the theme; accept the long tail dragging the winners" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Delinquency and provision prints, ARPAC trends, take-rate trajectory: credit data moves the whole complex" },
      { when: "IPO windows", what: "Each major listing (post-Klarna/Chime) reprices private marks across the sector" },
      { when: "Regulatory milestones", what: "GENIUS Act implementation, open banking (Section 1033) litigation, BaaS enforcement actions" },
      { when: "Fed decisions", what: "Rate cuts compress the NII windfall that funds neobank earnings; cuts also reopen risk appetite" }
    ],
    data: [
      { series: "SEC EDGAR filings (Affirm, Nu, Chime, Klarna)", source: "sec.gov (free)", why: "Primary-source credit metrics and cohort disclosure" },
      { series: "Fed G.19 consumer credit & NY Fed Household Debt Report", source: "federalreserve.gov / newyorkfed.org (free)", why: "The macro credit backdrop for every lending fintech" },
      { series: "BCG Global Fintech Report (annual)", source: "bcg.com (free)", why: "The revenue-pool and profitability benchmark" },
      { series: "World Bank Global Findex", source: "worldbank.org (free)", why: "Financial-inclusion runway: the EM neobank demand map" },
      { series: "Stablecoin dashboards (Artemis, DefiLlama)", source: "free public trackers", why: "Supply and settlement volume for the new-rail thesis" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Credit-heavy names get hit first and hardest: BNPL and neobank provisions spike while payments volume merely slows. Rotate toward infrastructure and acceptance; buy the credit names only once losses print and pass." },
      { regime: "Rates rising", behavior: "Deposit-rich neobanks enjoy an NII windfall; wholesale-funded lenders bleed on funding cost. Duration-of-funding is the divider, not the logo." },
      { regime: "Rates falling", behavior: "NII compresses but origination volumes, refinancing, and risk appetite recover; multiple expansion usually outruns the earnings drag for the growth names." },
      { regime: "Liquidity wave", behavior: "The 2021 lesson: fintech is among the highest-beta sectors to VC and IPO liquidity. Ride it in the quality names, and remember every funding metric mean-reverts." }
    ]
  },

  players: [
    { name: "Nubank", role: "The scaled neobank proof", country: "BR", real: true, note: "131M customers, $2.9B net income, 33% ROE (2025): the model's existence proof" },
    { name: "Stripe", role: "Payments infrastructure flagship", country: "US", real: true, note: "$106.7B valuation (Sept 2025), above its 2021 peak: the reset's clearest winner" },
    { name: "Revolut", role: "The everything-app challenger", country: "GB", real: true, note: "$6B revenue (+46%) and $2.3B pretax profit in 2025; 68.3M retail customers" },
    { name: "Klarna", role: "BNPL at merchant-fee scale", country: "SE", real: true, note: "The $45.6B to $6.7B to ~$14B IPO round trip: the sector's valuation parable" },
    { name: "Affirm", role: "BNPL, interest-led model", country: "US", real: true, note: "~8.7% of GMV monetized vs Klarna's ~2.4%; first full-year profit in FY2025" },
    { name: "Adyen", role: "Enterprise acceptance", country: "NL", real: true, note: "Single-platform processing for global enterprises; the public payments-quality comp" },
    { name: "Chime", role: "US consumer neobank", country: "US", real: true, note: "2025 IPO at $9.8B vs $25B private mark: the reset, priced publicly" },
    { name: "Ant Group", role: "The superapp precedent", country: "CN", real: true, note: "Alipay's scale showed the endgame; its halted 2020 IPO showed the regulatory ceiling" }
  ],

  geography: [
    { country: "US", role: "Deepest market and capital base", note: "Infrastructure leaders, the IPO window, and a regulatory patchwork that shapes the global playbook" },
    { country: "GB", role: "Europe's fintech capital", note: "Revolut, Wise, Monzo: FCA licensing and open banking made London the license-first hub" },
    { country: "BR", role: "The neobank proving ground", note: "Nubank plus Pix: state-built instant rails plus a concentrated banking oligopoly to disrupt" },
    { country: "IN", role: "Rails-driven mass adoption", note: "UPI processes the world's largest instant-payment volumes; monetization still the open question" },
    { country: "CN", role: "The superapp precedent", note: "Alipay and WeChat Pay reached near-total penetration, then met the regulatory ceiling" },
    { country: "SG", role: "Asia's licensing hub", note: "Digital-bank charters and the regional HQ for Southeast Asia's fintech buildout" }
  ],

  cycles: [
    { year: 2002, title: "PayPal survives the dot-com bust", kind: "shift", text: "The first internet-payments winner exits to eBay while hundreds of peers die. Lesson: distribution and fraud control, not novelty, decide payments." },
    { year: 2010, title: "The post-crisis founding class", kind: "boom", text: "Square, Stripe, and the first neobanks launch into a trust vacuum with smartphones as the new branch. Lesson: fintech booms are born in banking's credibility busts." },
    { year: 2016, title: "The marketplace-lending bust", kind: "bust", text: "Lending Club's governance scandal and funding flight crater the P2P model. Lesson: capital-markets-funded lending is fair-weather; deposits are the moat." },
    { year: 2021, title: "Peak everything", kind: "boom", text: "~$38B quarterly funding, Klarna at $45.6B, GMV multiples treated as valuation. Lesson: when volume metrics replace earnings, the top is near." },
    { year: 2023, title: "The reset and the plumbing failures", kind: "bust", text: "Funding falls 70%+, SVB's collapse hits the startup treasury stack, and Synapse's 2024 failure freezes real customers' money. Lesson: charters, ledgers, and deposit insurance exist for a reason." }
  ],

  risks: [
    { name: "First real credit cycle", severity: 4, likelihood: 3, transmission: "Unemployment rises -> young BNPL and neobank books spike losses -> provisions crush earnings just as funding tightens -> equity resets across the credit-heavy tier." },
    { name: "Regulatory reclassification", severity: 4, likelihood: 3, transmission: "BaaS enforcement and consumer-credit rules tighten -> compliance cost becomes a fixed tax -> sub-scale players exit and sponsor-bank capacity shrinks -> growth reprices." },
    { name: "Incumbent absorption", severity: 3, likelihood: 4, transmission: "Banks and networks copy the features (instant pay, BNPL at checkout, stablecoin settlement) -> CAC rises and take rates compress -> the middle of the stack commoditizes." },
    { name: "Rate regime shift", severity: 3, likelihood: 3, transmission: "Rate cuts compress the NII windfall -> neobank earnings growth stalls -> the growth-multiple math breaks for the deposit-rich winners." },
    { name: "Rail disruption cuts both ways", severity: 3, likelihood: 2, transmission: "Stablecoins and state rails (Pix, UPI, FedNow) route around cards -> interchange pools shrink -> today's fintech winners built on card economics face their own disruptors." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Fintech is banking rebuilt as apps: checking accounts, payments, and loans delivered through your phone instead of a branch. The companies earned about $504B in 2025, growing about 4x faster than traditional banks, because serving a customer through software costs a fraction of serving one through buildings. The biggest, like Brazil's Nubank (131M customers), are now solidly profitable."] },
    L2: { title: "Intermediate", text: ["The stack has three layers: rails and licenses at the bottom, infrastructure (Stripe-style payments, Plaid-style data) in the middle, consumer apps on top. Money is made from interchange, interest, and take rates on volume. The 2021 bubble popped hard (funding fell 70%+; Klarna went $45.6B to $6.7B to a $14B IPO), and the survivors turned profitable: 69% of public fintechs now make money."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: payments names on volume x take rate with software margins; neobanks on ARPAC vs cost-to-serve and provision discipline (Nubank: $15/mo ARPAC, 33% ROE); lenders on loss rates against funding cost. The structural tension is balance-sheet gravity: lending deepens returns but drags valuation toward bank math. Watch delinquency prints before growth prints."] },
    L4: { title: "Expert", text: ["Trade the credit tape (Affirm and Nubank delinquency disclosures, Fed G.19), the IPO window, and the regulatory calendar (GENIUS Act implementation, Section 1033, BaaS enforcement). Live debates: neobank multiple durability once growth normalizes, BNPL's untested recession behavior, and whether stablecoins (~$390B of genuine 2025 payment volume) reroute interchange or get absorbed by the incumbents they targeted."] },
    L5: { title: "Institutional", text: ["Allocator's frame: fintech is a barbell of proven compounders and unpriced credit risk. Core the volume-linked infrastructure and the scaled profitable neobanks; treat credit-heavy growth as cyclical exposure sized on evidence. The sector's revenue pool ($504B, compounding ~20%) is real and expanding into embedded finance and tokenized rails, but the first full credit cycle will decide which multiples were earned and which were borrowed."] }
  },

  quiz: [
    { q: "Global fintech revenue in 2025 reached roughly:", choices: ["$50B", "$504B, growing ~4x faster than traditional banking (BCG)", "$5T", "$126B"], answer: 1, explain: "BCG's Global Fintech Report: $378B in 2024, $504B in 2025, with payments the largest slice of the pool." },
    { q: "Nubank's 2025 results showed that neobanks:", choices: ["Still cannot make money", "Can be very profitable: 131M customers, $2.9B net income, 33% ROE", "Only work in the US", "Depend on branch networks"], answer: 1, explain: "The scaled-neobank existence proof: software cost-to-serve plus $15/mo ARPAC produced returns most incumbent banks cannot match." },
    { q: "Klarna's valuation path from 2021 to its 2025 IPO was:", choices: ["Steadily upward", "$45.6B to $6.7B to a ~$14B NYSE listing: the sector's reset in one company", "Flat throughout", "It never raised money"], answer: 1, explain: "The round trip is the industry's valuation parable: 2021 priced GMV and growth; 2025 priced take rates and profitability." },
    { q: "Affirm monetizes ~8.7% of GMV vs Klarna's ~2.4% mainly because:", choices: ["Affirm charges merchants more for identical products", "Affirm earns interest on longer loans; Klarna leans on merchant fees for short Pay-in-4", "Klarna is unregulated", "Affirm has more users"], answer: 1, explain: "Same label, different businesses: interest income carries more margin and more credit risk than merchant-fee BNPL." },
    { q: "The neobank's core structural advantage is:", choices: ["Better branding", "Cost-to-serve: a cloud core and no branches, so low ARPAC can still yield high returns", "Government subsidies", "Higher interest rates"], answer: 1, explain: "Nubank serves customers at a fraction of branch-bank cost, which turns a $15/mo ARPAC into a 33% ROE." },
    { q: "Embedded finance means:", choices: ["Banks buying fintechs", "Financial products sold inside non-financial software: Bain sees ~$7T of US transaction value by 2026", "Crypto-only banking", "ATMs in stores"], answer: 1, explain: "Payments, lending, and insurance move to where commerce happens: every software platform becomes a distribution channel for finance." },
    { q: "Stablecoins in 2025 were significant because:", choices: ["They replaced all card payments", "Genuine payment volume hit ~$390B (2x 2024) and the GENIUS Act created a US federal framework", "They were banned globally", "Only criminals used them"], answer: 1, explain: "Legitimacy plus volume growth made stablecoins the first credible new payment rail since cards, strongest in cross-border B2B." },
    { q: "The 2022-2023 reset taught the sector that:", choices: ["Growth fixes everything", "Funding metrics mean-revert and plumbing matters: 70%+ funding decline, SVB, and Synapse's frozen customer funds", "Regulation is optional", "Valuations only go up"], answer: 1, explain: "The bust filtered for unit economics and revealed that charters, clean ledgers, and deposit insurance are the industry's real foundations." }
  ],

  sources: [
    { name: "BCG Global Fintech Report (2025/2026 editions)", url: "https://www.bcg.com/press/1june2026-global-fintech-revenues-surpass-half-trillion-dollars", feeds: "revenue pool, growth, profitability" },
    { name: "Nu Holdings Q4 & FY 2025 results", url: "https://international.nubank.com.br/company/nu-holdings-ltd-reports-fourth-quarter-and-full-year-2025-financial-results/", feeds: "neobank unit economics" },
    { name: "CB Insights State of Fintech (quarterly)", url: "https://www.cbinsights.com/research/report/fintech-trends-q3-2025/", feeds: "funding, deals, valuations" },
    { name: "SEC EDGAR (Affirm, Nu, Chime, Klarna filings)", url: "https://www.sec.gov/edgar", feeds: "filings, credit metrics" }
  ]
};
