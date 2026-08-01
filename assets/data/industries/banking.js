/* Industry Atlas - BANKING (full module, research-backed)
 * Anchors: US banking system assets $26.1T, industry NIM 3.31%, Q1 2026 net
 * income $80.5B across 4,278 insured institutions (FDIC Quarterly Banking
 * Profile, Q1 2026); JPMorgan FY2025 net income $57.0B on revenue of $182.4B,
 * $4.4T of assets, 20% ROTCE (JPM 4Q25 earnings release, Jan 2026); global
 * banking revenues $6.4T in 2025 and sector net income $1.2T in 2024, on a
 * system intermediating ~$426T (McKinsey Global Banking Annual Review
 * 2025/2026); Basel III endgame rescinded and re-proposed Mar 2026 with
 * capital set to modestly decrease (Fed/OCC/FDIC proposals, comments due
 * Jun 2026); EURO STOXX Banks +76% in 2025, best year on record (Euronews,
 * Dec 2025); Santander record EUR 14.1B profit, UniCredit 19.2% RoTE (company
 * releases, Feb 2026); card charge-offs eased to 3.67% in Q1 2026 (Fed data);
 * 181 US bank M&A deals announced 2025, most since 2021 (S&P Global). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["banking"] = {
  meta: {
    id: "banking", name: "Banking", sector: "finance", status: "full",
    tagline: "Borrow short, lend long, survive the difference: the leveraged utility underneath every economy.",
    marketSize: { value: 6.4, unit: "$T", asOf: 2025, note: "global banking revenue pool before risk costs (McKinsey Global Banking Annual Review)" },
    cagr: { value: 4, range: [2, 6], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 4, capitalIntensity: 3, regulation: 5, disruption: 3
  },
  newsQuery: '(JPMorgan OR "net interest margin" OR "bank earnings" OR "Basel III" OR "regional banks" OR "deposit growth")',

  overview: {
    definition: "Banks take deposits, make loans, move payments, and manufacture credit. They earn the spread between what they pay for money and what they charge for it, plus fees, while running 10x leverage under the heaviest regulation in business.",
    howItWorks: [
      "The core machine is maturity transformation: deposits that can leave tomorrow fund loans that repay over years. The spread between the two (net interest margin, 3.31% for the US industry in Q1 2026) times a balance sheet levered roughly 10:1 produces a low-teens return on equity, when credit behaves. Cheap, sticky deposits are the franchise; everything else is execution.",
      "The same license supports fee businesses that need little capital: payments, cards, wealth management, and (at large banks) investment banking and trading. The best franchises blend spread income with fee income so neither rates nor markets alone set their fate. JPMorgan's 2025 split is the model: $95.4B of net interest income and $87.0B of noninterest revenue, adding to $182.4B and a 20% return on tangible equity.",
      "Banking's defining feature is that its raw material is confidence. Because assets are long and liabilities are instant, any bank dies if everyone asks for their money at once; 2023's Silicon Valley Bank run happened in hours, on phones. Hence the apparatus around the industry: deposit insurance, central-bank liquidity, capital ratios (CET1), and stress tests. Banks are private companies operating inside a public safety net, and the regulation is the rent for it.",
      "Scale increasingly decides the game. The US system holds about $26.1T of assets across 4,278 FDIC-insured institutions, but profits, deposits, and technology budgets concentrate relentlessly at the top: the biggest banks spend $10B+ a year on technology that subscale rivals cannot match, which is why 181 US bank mergers were announced in 2025 (the most since 2021) and why the regulatory pendulum matters so much: the March 2026 Basel endgame re-proposal rescinded the 2023 framework and points capital requirements modestly down, converting excess capital into buybacks and deal currency."
    ],
    history: [
      { era: "1933-1980", title: "The regulated era", text: "Post-Depression rules (Glass-Steagall, deposit insurance) make banking safe and boring for two generations." },
      { era: "1980-2007", title: "Deregulation and consolidation", text: "Interstate banking, securitization, and the 1999 repeal of Glass-Steagall build universal megabanks; leverage climbs quietly." },
      { era: "2008", title: "The global financial crisis", text: "Mortgage credit and wholesale funding implode; taxpayer rescues rewrite the social contract. Basel III doubles capital requirements." },
      { era: "2010-2021", title: "The ZIRP decade", text: "Zero rates crush margins; banks cut costs, digitize, and cede ground to fintech and private credit." },
      { era: "2022-present", title: "Rates return, profits follow", text: "Fast hikes restore margins, then break SVB via bond losses and digital runs. By 2025 the survivors mint records: $80.5B of US quarterly profit, Europe's best bank-stock year ever, and a regulatory pendulum swinging back toward lighter capital." }
    ],
    trends: [
      { title: "Private credit migration", direction: "shift", text: "Leveraged lending moves to funds with locked-up capital; banks shift toward originate-and-distribute and financing the funds themselves." },
      { title: "Digital deposit competition", direction: "up", text: "Money moves at app speed; deposit betas rose and runs got faster, repricing the value of truly sticky franchises. The easing cycle now tests betas in reverse: Q1 2026 asset yields fell 21 bps while funding costs eased only 13." },
      { title: "Technology cost arms race", direction: "up", text: "The biggest banks spend $10B+ a year on technology; scale advantages compound while subscale banks consolidate." },
      { title: "European revival", direction: "up", text: "A decade of restructuring plus positive rates produced Europe's best bank year on record in 2025: EURO STOXX Banks +76%, Santander at a record EUR 14.1B profit, UniCredit at 19.2% RoTE and briefly Europe's most valuable bank." },
      { title: "Consolidation reopens", direction: "shift", text: "181 US deals announced in 2025, the most since 2021, and Q1 2026 was the biggest first quarter by value since 2019: lighter capital rules and faster approvals are unlocking a long-deferred merger wave among 4,000+ US banks." }
    ],
    outlook: "The sector enters 2026 from a position of strength it has not held since before 2008: record profits, capital requirements heading modestly down after the Basel endgame reversal, credit normalizing benignly (card charge-offs eased to 3.67% in Q1 2026), and an M&A window open for the first time in years. The drag is the margin: NIM compresses as policy rates fall (3.31% and slipping), so earnings power shifts to fees, efficiency, and consolidation math. Structurally: fewer, bigger, more digital banks, with more of the risk-taking migrating outside the regulated perimeter, which is where the next crisis will look for a home."
  },

  structure: {
    suppliers: [
      { name: "Depositors (households, businesses)", note: "The funding base; insured retail deposits are the crown jewels" },
      { name: "Wholesale markets", note: "Bond issuance, interbank, and central-bank facilities" },
      { name: "Core banking technology", note: "FIS/Fiserv-class processors and a growing cloud stack" }
    ],
    producers: [
      { name: "Universal megabanks", note: "JPMorgan-class: every product, fortress scale, $4.4T balance sheets" },
      { name: "Regional & community banks", note: "Local lending franchises; the US still has 4,278 insured institutions and is consolidating fast" },
      { name: "Digital banks & neobanks", note: "Branchless attackers, still mostly renting the rails" }
    ],
    distributors: [
      { name: "Branches (shrinking) + apps (everything)", note: "Mobile is now the primary branch" },
      { name: "Embedded finance", note: "Banking-as-a-service inside other companies' products" }
    ],
    customers: [
      { name: "Households", note: "Mortgages, cards, deposits: the profit core" },
      { name: "Businesses", note: "Working capital, CRE, treasury services" },
      { name: "Governments & institutions", note: "Bond dealing, custody, payments plumbing" }
    ],
    regulators: [
      { name: "Central banks & prudential supervisors", note: "Capital, liquidity, stress tests; the Fed, ECB, and kin" },
      { name: "Deposit insurers (FDIC-class)", note: "The confidence backstop, funded by the industry" },
      { name: "Conduct & AML authorities", note: "Multi-billion-dollar fine risk lives here" }
    ],
    capital: [
      { name: "Public equity & AT1/sub-debt markets", note: "Capital stack layers with regulatory triggers" },
      { name: "Retained earnings", note: "The main capital engine; payouts are regulator-gated" }
    ]
  },

  valueChain: {
    intro: "Money in, risk priced, money out, repeated at 10x leverage under supervision. The profit concentrates where the funding is cheapest and the fees are stickiest.",
    stages: [
      { id: "funding", name: "Funding", what: "Deposits and wholesale borrowing", players: "Retail franchises, treasury desks", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 3 },
        linksTo: ["asset-management", "wealth-management"],
        deeper: "Deposit cost and stickiness decide winners: a 1.5% funding advantage at scale is an unassailable moat, which is why deposit betas are watched like hawks. US deposits grew for a 7th straight quarter into Q1 2026; the war now is over how slowly banks can reprice them downward as the Fed eases." },
      { id: "underwriting", name: "Credit underwriting", what: "Pricing and selecting risk", players: "Credit officers, models", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 2 },
        linksTo: ["real-estate", "private-equity", "private-credit"],
        deeper: "The skill that separates compounders from casualties, visible only when the tide goes out. Vintage discipline beats growth every full cycle: the 2022-2024 card vintages that pushed charge-offs above 4% were written in the stimulus glow of 2021." },
      { id: "balance-sheet", name: "Balance sheet & ALM", what: "Maturity, rate, and liquidity management", players: "Treasury, ALCO", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 3, concentration: 2 },
        linksTo: ["capital-markets"],
        deeper: "SVB died here, not in credit: unhedged duration plus concentrated deposits. Asset-liability management is the quiet core competence, and the easing cycle flips the problem: now the fight is keeping asset yields from repricing down faster than funding costs." },
      { id: "distribution", name: "Products & distribution", what: "Accounts, cards, mortgages, apps", players: "Retail and commercial lines", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 3 },
        linksTo: ["payments", "fintech"],
        deeper: "Where fintech attacks: each product can be unbundled by software, but the integrated deposit relationship keeps pulling customers back. The branch is now an app plus a shrinking real-estate footprint." },
      { id: "fees", name: "Fee businesses", what: "Payments, wealth, markets, advisory", players: "Universal banks", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 1, concentration: 4 },
        linksTo: ["investment-banking", "asset-management", "payments", "wealth-management"],
        deeper: "Capital-light earnings that diversify the spread engine; the reason megabank ROEs survive rate cycles. JPMorgan's $87B of 2025 noninterest revenue is nearly half the firm: a fee business the size of most industries." },
      { id: "capital-recycling", name: "Capital, workout & distribution of risk", what: "Provisions, collections, securitization, risk transfer", players: "Workout desks, securitization, SRT buyers", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 3, concentration: 3 },
        linksTo: ["private-credit", "insurance", "capital-markets"],
        deeper: "The exit end of the machine: charged-off loans get worked, sold, or securitized, and increasingly the risk itself is syndicated to insurers and funds via significant-risk-transfer deals. Capital freed here becomes the buybacks and M&A currency the equity story runs on." }
    ]
  },

  financials: {
    businessModel: [
      "Read a bank in this order: NIM (the engine), credit costs (the weather), efficiency ratio (the discipline), CET1 (the armor), ROE vs cost of equity (the verdict). Revenue = earning assets x NIM + fees; profit is what survives provisions and overhead; value is ROE sustained above a roughly 10% cost of equity, which is precisely what P/B multiples price.",
      "Banks are the only industry where the balance sheet IS the business: growth means adding risk-weighted assets, each consuming capital. That is why great banks obsess over deposit franchises and capital allocation rather than sheer size, and why leverage makes small underwriting errors fatal at scale. The 2026 twist is that the capital math itself is easing: the Basel endgame re-proposal points requirements modestly down, so the marginal dollar of capital increasingly flows to buybacks and acquisitions rather than buffers."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 70, capitalIntensity: 55, pricingPower: 45, cyclicality: 75, operatingLeverage: 60 },
    lines: [
      { label: "Net interest income", note: "Earning assets x NIM; the rate-cycle engine (industry NIM 3.31%, Q1 2026)" },
      { label: "Fee income", note: "Payments, wealth, markets; the diversifier" },
      { label: "Provisions", note: "Expected credit losses; the cycle lives here" },
      { label: "Operating costs", note: "Efficiency ratio < 55% is the bar" },
      { label: "CET1 & payouts", note: "Excess capital becomes buybacks; shortfalls become dilution" }
    ],
    unitEconomics: {
      unit: "per $100 of earning assets (US industry, Q1 2026)",
      items: [
        { label: "Net interest margin", value: "3.31%", note: "FDIC industry aggregate; compressing ~8 bps a quarter as the Fed eases" },
        { label: "Credit costs", value: "~0.5%", note: "normalized provisions; cards run hotter (3.67% charge-offs), CRE is the watch item" },
        { label: "Return on assets", value: "1.26%", note: "Q1 2026 industry ROA, a cyclically strong print" },
        { label: "ROA x ~10x leverage", value: "~12% ROE", note: "the return the P/B multiple prices against a ~10% cost of equity" }
      ]
    }
  },

  kpiRefs: ["bank-nim", "bank-roe", "bank-cet1", "bank-efficiency", "bank-npl"],
  kpiLocal: [
    {
      id: "bank-deposit-beta", name: "Deposit Beta", industries: ["banking"],
      definition: "The share of a policy-rate move that a bank passes through to its deposit costs over a cycle.",
      formula: "Change in deposit cost / change in policy rate, cumulative through the cycle",
      interpretation: "Low betas on the way up mean the franchise is sticky and cheap; high betas mean the bank is renting its funding. On the way down the sign flips: fast downward repricing protects NIM. Q1 2026 showed the squeeze: asset yields fell 21 bps, funding costs only 13.",
      healthy: "Cycle beta < 40% with a granular retail base", warning: "> 60%, or a rapid mix shift into CDs and wholesale funding"
    },
    {
      id: "bank-uninsured", name: "Uninsured Deposit Share", industries: ["banking"],
      definition: "The share of deposits above the insurance cap, i.e. the money with an incentive to run.",
      formula: "Uninsured deposits / total deposits",
      interpretation: "The SVB lesson distilled: uninsured, concentrated, digitally mobile deposits are flight risk, not franchise. Pair it with the securities book's unrealized losses to see run vulnerability before the market does.",
      healthy: "< 30% with diversified depositors", warning: "> 50%, concentrated in one industry or geography"
    }
  ],

  health: {
    intro: "Bank health is solvency, liquidity, and underwriting discipline, in that order of how fast each can kill.",
    pillars: [
      { name: "Liquidity & funding", weight: 25, metrics: "Deposit mix and stickiness, LCR, uninsured share", healthy: "Granular insured deposits, LCR > 120%", warning: "Concentrated uninsured deposits, wholesale reliance" },
      { name: "Capital", weight: 20, metrics: "CET1 buffer vs requirement incl. AOCI", healthy: "150+ bps of buffer", warning: "< 50 bps or unrealized-loss overhang" },
      { name: "Asset quality", weight: 20, metrics: "NPL formation, concentrations (CRE), coverage", healthy: "NPLs < 1%, diversified book", warning: "Single-sector concentration > 30% of loans" },
      { name: "Earnings power", weight: 20, metrics: "ROE vs cost of equity, NIM trend, fee mix", healthy: "ROE > 12% with diversified income", warning: "ROE < 8% structural" },
      { name: "Cost discipline", weight: 15, metrics: "Efficiency ratio, tech spend adequacy", healthy: "< 55% and investing", warning: "> 70% or cutting muscle" }
    ],
    scoringNote: "Liquidity failures kill in days, capital failures in quarters, earnings failures in years. Weight accordingly."
  },

  valuation: {
    intro: "Banks are valued on book value and the returns generated on it; earnings multiples are secondary.",
    methods: [
      { name: "P/B vs ROE", use: "The sector's core model: P/B = (ROE - g) / (COE - g)", avoid: "Banks with unmarked losses distorting book", strengths: "Theoretically grounded; brutally comparative", weaknesses: "Book quality varies; credibility of ROE is the real question", range: { low: 0.6, high: 2.4, asOf: 2026, note: "sub-1x means the market doubts the ROE or the book; JPMorgan-class franchises earn 2x+ tangible book" } },
      { name: "P/E", use: "Screening stable franchises", avoid: "Provision troughs and peaks (the E lies at both)", strengths: "Simple; dividend context", weaknesses: "Credit cycle distorts it, always", range: { low: 8, high: 14, asOf: 2026, note: "banks rarely deserve market multiples; leverage caps them" } },
      { name: "Dividend discount / capital return yield", use: "Mature banks returning most earnings", avoid: "Growth or turnaround stories", strengths: "Payouts are regulator-vetted, hence credible", weaknesses: "Buyback timing optionality is hard to model", range: { low: 8, high: 12, asOf: 2026, note: "total payout yields at large banks; European payouts led the 2025 rally" } },
      { name: "Excess capital + core earnings (SOTP for universals)", use: "Megabanks with distinct spread, fee, and markets engines", avoid: "Monoline banks where the parts ARE the whole", strengths: "Separates the annuity (retail deposits) from the cyclical (markets) and surfaces buyback capacity", weaknesses: "Segment disclosure is managed; capital allocation across parts is opaque", range: { low: 0, high: 0, asOf: 2026, note: "qualitative cross-check, not a headline multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a bank fast: tangible book times an ROE-justified multiple. If sustainable ROTCE is 13% against a 10% cost of equity, a premium to tangible book is earned, not given.",
      inputs: [
        { id: "vc-tbv", label: "Tangible book value ($B)", min: 2, max: 350, step: 1, value: 60, fmt: "money" },
        { id: "vc-rote", label: "Sustainable ROTCE (%)", min: 4, max: 24, step: 0.5, value: 13, fmt: "pct" },
        { id: "vc-ptbv", label: "P/TBV multiple", min: 0.4, max: 2.6, step: 0.1, value: 1.3, fmt: "mult" }
      ]
    }
  },

  pmView: {
    positioning: "The desk trades banks as levered rate-and-credit carry: the value factor's home address. The frame is simple and unforgiving: buy proven underwriters below tangible book with capital-return catalysts, avoid balance-sheet growth stories late in credit cycles, and remember the sector's returns cluster around policy inflections, not earnings seasons. 2025 proved the point twice: Europe's +76% year came from payout normalization, and the US trade rotated from NIM to consolidation.",
    debates: [
      { topic: "NIM after the hiking cycle: plateau or bleed?", bull: "Deposit betas lag on the way down too: funding reprices faster than asset books roll off, and the securities buried at 2021 yields reinvest at double. The margin tailwind has years of asset-repricing left.", bear: "The Q1 2026 print showed the squeeze in miniature: asset yields down 21 bps, funding down only 13, NIM to 3.31%. Deposit competition is now structural (apps, money funds at a tap), and every cut compresses the spread the sector just learned to love." },
      { topic: "CRE, especially office: contained regional pain or rolling crisis?", bull: "Delinquencies are flattening: the year-over-year rise in bank CRE delinquency narrowed to zero by late 2025, marks are taken, reserves built, and maturities refinance into falling rates. Office is small at the big banks and concentrated in names everyone already avoids.", bear: "Commercial mortgage delinquencies still ticked up to 4.02% in Q1 2026 and CMBS is above 5%; the refinancing wall extends through 2027 against structurally lower office values, regionals hold the concentration, and forbearance delays rather than deletes the loss." },
      { topic: "Private credit: partner or parasite?", bull: "Banks keep the client and the fee (originate, distribute, finance the funds) while shedding the capital charge: regulatory arbitrage working as intended, for the banks.", bear: "The most profitable lending migrated out with the risk, banks now hold leveraged exposure to the same credits one step removed, and the next credit cycle tests a system where the risk-takers have no deposit insurance and the banks financed them." }
    ],
    cycle: {
      where: "Late-cycle normalization that turned benign: record profits ($80.5B in Q1 2026 alone), card losses easing from their 4% peak to 3.67%, CRE flattening rather than cascading, NIM past peak and compressing as the Fed eases. The trade has rotated from rate beneficiaries to consolidation math and capital return, with the Basel re-proposal as the sector-wide catalyst.",
      drivers: "Policy rates and curve shape, credit formation (the lagged cost of past underwriting), loan growth, and the regulatory capital regime that gates payouts and M&A.",
      leads: [
        "Fed SLOOS (quarterly): lending standards lead charge-offs by 3 to 4 quarters",
        "H.8 weekly: loan growth and deposit flows in near-real-time",
        "NPL formation rate (not the stock) in quarterly filings",
        "Deposit beta disclosures: the funding war's scoreboard, now running in reverse",
        "CRE maturity schedules and special-servicing rates (Trepp free summaries)"
      ]
    },
    exposure: [
      { vehicle: "Money centers (JPM class)", note: "Quality carry: diversified earnings, fortress capital, the sector's safe expression ($57B of 2025 net income at the benchmark)" },
      { vehicle: "Regionals", note: "The CRE/credit beta and the M&A consolidation call option, in one volatile package; 181 deals in 2025 says the option is in the money" },
      { vehicle: "IB-heavy names (GS class)", note: "The capital-markets cycle trade: deal recovery beta" },
      { vehicle: "European banks", note: "The 2025 vindication trade (+76%, best year on record); still payout-rich but no longer decade-cheap" },
      { vehicle: "Preferreds & AT1s", note: "The carry without the equity beta; remember Credit Suisse's lesson on subordination" }
    ],
    catalysts: [
      { when: "FOMC meetings", what: "The discount rate of the whole trade; curve shifts move book values and NIM guides" },
      { when: "Mid-January (and quarterly)", what: "Big banks open earnings season: provisions and NII guides set the sector tone" },
      { when: "June (stress tests / CCAR)", what: "Payout capacity revealed; buyback announcements follow within weeks" },
      { when: "Basel re-proposal finalization (comments closed Jun 2026)", what: "The capital regime reset: final rules convert buffer capital into payout and M&A capacity across the sector" }
    ],
    data: [
      { series: "FDIC Quarterly Banking Profile", source: "fdic.gov (free)", why: "The whole US system's P&L and credit quality, aggregated: $26.1T of assets, NIM, ROA" },
      { series: "Fed H.8 weekly", source: "federalreserve.gov (free)", why: "Loan and deposit flows at weekly frequency" },
      { series: "SLOOS", source: "federalreserve.gov (free)", why: "Underwriting standards: the best lead indicator in credit" },
      { series: "FFIEC call reports", source: "ffiec.gov (free)", why: "Bank-by-bank granularity for the regional book" },
      { series: "Charge-off and delinquency rates", source: "FRED / federalreserve.gov (free)", why: "Card, CRE, and C&I credit quality by bank size cohort" }
    ],
    playbook: [
      { regime: "Rates rising", behavior: "First hikes are champagne (NIM expands), late hikes are hangover (deposit costs catch up, bond marks bite, credit cracks). The curve's shape beats its level: steepening is the real friend." },
      { regime: "Rates falling", behavior: "The mirror image: NIM compresses unless deposit costs reprice down fast (Q1 2026: assets -21 bps, funding -13). Winners are the banks with lagging deposit betas in reverse, plus fee-heavy universals; the offset is credit relief and an M&A bid under the sector." },
      { regime: "Recession", behavior: "Provisions spike, stocks trough 2 to 3 quarters before charge-offs peak; the historical money is made buying mid-recession below tangible book, not waiting for clean credit." },
      { regime: "Risk-off / funding stress", behavior: "The sector gaps on liquidity fear (SVB template: hours, not weeks); uninsured-deposit concentration is the tell to screen before the storm, never during." }
    ]
  },

  players: [
    { name: "JPMorgan", role: "The fortress universal", country: "US", real: true, note: "$4.4T of assets, $57B of 2025 net income, 20% ROTCE: the industry's benchmark" },
    { name: "Bank of America", role: "US deposit machine", country: "US", real: true, note: "The retail-deposit franchise at continental scale; rate-sensitivity poster child" },
    { name: "Wells Fargo", role: "Unshackled retail bank", country: "US", real: true, note: "Asset cap lifted in 2025 after 7 years; growth restored as the redemption arc completes" },
    { name: "Citigroup", role: "Global transaction bank", country: "US", real: true, note: "Treasury services span 90+ countries; the perpetual restructuring story" },
    { name: "HSBC", role: "Asia-pivoted global bank", country: "UK", real: true, note: "Trade finance and Hong Kong deposits; geopolitics is its balance sheet" },
    { name: "Santander", role: "Pan-Atlantic retail bank", country: "ES", real: true, note: "Record EUR 14.1B profit in 2025, 180M customers, 16.3% RoTE" },
    { name: "UniCredit", role: "Europe's revival flagship", country: "IT", real: true, note: "19.2% RoTE, EUR 10.6B net income 2025; became Europe's most valuable focused bank" },
    { name: "ICBC & the Chinese big 4", role: "The largest by assets", country: "CN", real: true, note: "Policy instruments as much as banks; property workout in slow motion" }
  ],

  geography: [
    { country: "US", role: "Deepest, most profitable market", note: "$26.1T of assets across 4,278 banks, consolidating fast" },
    { country: "CN", role: "Largest by assets", note: "State-directed lending; property overhang" },
    { country: "GB", role: "International wholesale hub", note: "London clears the world's currencies" },
    { country: "IT", role: "The European revival's epicenter", note: "UniCredit and Intesa led the 2025 repricing of the whole continent" },
    { country: "SG", role: "Asia's private banking vault", note: "Wealth migration winner" },
    { country: "IN", role: "The growth market", note: "Credit deepening off a low base; the decade's loan-growth story" }
  ],

  cycles: [
    { year: 1989, title: "The S&L collapse", kind: "bust", text: "Rate risk plus deregulated gambling for resurrection killed over 1,000 US thrifts and cost taxpayers ~$124B. Lesson: duration mismatch is as lethal as credit risk, a lesson re-taught in 2023." },
    { year: 2008, title: "The GFC", kind: "bust", text: "Wholesale funding + bad mortgages = systemic collapse. Lesson: leverage turns small asset errors into extinction events." },
    { year: 2020, title: "COVID stress that wasn't", kind: "shift", text: "Post-Basel capital held; banks were the shock absorber, not the shock. Lesson: the reforms worked." },
    { year: 2023, title: "SVB and the speed run", kind: "bust", text: "Digital deposits fled in hours; duration losses did the rest. Lesson: liquidity risk now moves at phone speed." },
    { year: 2025, title: "The European revival", kind: "boom", text: "EURO STOXX Banks rose 76%, the best year on record, as positive rates, record payouts, and a decade of cleanup finally repriced. Lesson: sectors left for dead reprice fastest when the returns actually arrive." }
  ],

  risks: [
    { name: "Credit cycle (CRE especially)", severity: 4, likelihood: 3, transmission: "Office repricing -> regional bank books -> provisions -> lending capacity for everyone else; delinquencies flattening in 2026 but the maturity wall runs through 2027." },
    { name: "Deposit flight speed", severity: 4, likelihood: 3, transmission: "App-era runs -> a crisis compressed from weeks to hours -> concentrated uninsured bases are kindling." },
    { name: "Shadow migration", severity: 3, likelihood: 4, transmission: "Risk moves to private credit -> escapes bank supervision -> returns via bank financing of the funds." },
    { name: "Rate whiplash", severity: 3, likelihood: 3, transmission: "Fast cuts -> NIM compression; fast hikes -> bond losses. Both ends of the seesaw hurt." },
    { name: "Stablecoin & fintech disintermediation", severity: 3, likelihood: 3, transmission: "Payments and deposits migrate to wallets and tokenized money -> funding costs rise -> the cheap-deposit moat thins exactly where the franchise value lives." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["A bank takes money people want safe (deposits), lends it to people who need it (loans), and keeps the difference in interest. Because it lends out most of what it holds, its real product is trust that your money is there when you ask."] },
    L2: { title: "Intermediate", text: ["The engine is the spread (NIM, about 3.3% in the US today) on a balance sheet levered ~10x, plus fees from payments and wealth. Regulation (capital ratios, deposit insurance, stress tests) exists because bank failures cascade; banking is a private business inside a public safety net. The US system is $26T of assets spread across 4,278 banks, and shrinking in count every year."] },
    L3: { title: "Advanced", text: ["Analysis order: funding quality, underwriting discipline, capital, then earnings. Value = ROE vs ~10% cost of equity, priced through P/B. The franchise is cheap sticky deposits; the killer is concentrated funding meeting long-duration assets, as SVB demonstrated in a single afternoon. Benchmark against the best: JPMorgan converts $182B of revenue into a 20% ROTCE, which is what fortress funding plus fee diversification buys."] },
    L4: { title: "Expert", text: ["Current regime: margins past peak (NIM 3.31% and compressing as the Fed eases), credit normalizing benignly (cards off the boil at 3.67% charge-offs, CRE flattening), and the capital regime reversing: the March 2026 Basel re-proposal rescinds the 2023 endgame and points requirements modestly down. That converts buffers into buybacks and deal currency, which is why M&A hit multi-year highs. Deposit betas in reverse and AOCI marks are where models diverge from reality."] },
    L5: { title: "Institutional", text: ["The allocator's frame: banks are levered, regulated rate-and-credit carry vehicles that periodically trade below book on doubt about either. Buy proven underwriters below tangible book with excess capital and catalysts for return of it; Europe's +76% 2025 was that playbook executing at index scale. Avoid balance-sheet growth stories late in credit cycles. Systemically, watch where the leverage went when banks got safer: private credit now holds the risk banks shed, banks finance the funds, and supervision follows the license, not the risk. That is where the next fire starts."] }
  },

  quiz: [
    { q: "A bank's core profit engine is:", choices: ["Trading revenue", "The spread between deposit costs and loan yields, levered ~10x", "ATM fees", "Government grants"], answer: 1, explain: "Net interest margin (3.31% for the US industry in Q1 2026) times a levered balance sheet produces the ROE; everything else supplements it." },
    { q: "SVB failed primarily because of:", choices: ["Bad loans", "Fraud", "Concentrated uninsured deposits fleeing while bond losses gutted the asset side", "Currency risk"], answer: 2, explain: "A classic run at digital speed: duration mismatch plus a homogeneous depositor base that moved together, in hours." },
    { q: "Banks trade on P/B rather than pure P/E because:", choices: ["Tradition", "The balance sheet IS the business and value tracks ROE versus the cost of equity", "Regulators require it", "Book value never changes"], answer: 1, explain: "P/B = (ROE - g)/(COE - g): sustained returns above a ~10% cost of equity justify premiums to book; doubt shows up as discounts." },
    { q: "The most valuable funding a bank can have is:", choices: ["Overnight wholesale borrowing", "Granular, insured retail deposits", "Bond issuance", "Central bank loans"], answer: 1, explain: "Cheap, sticky, and insured: the franchise itself. Wholesale money is the first to leave in stress." },
    { q: "Post-2008 reforms mean modern crises most likely originate:", choices: ["In heavily capitalized megabanks", "Outside the regulated perimeter, in shadow credit that banks finance indirectly", "In deposit insurance funds", "Nowhere; crises are over"], answer: 1, explain: "Risk migrated to private credit and funds; supervision follows the license, not the risk." },
    { q: "Deposit beta measures:", choices: ["Deposit growth vs GDP", "The share of a policy-rate move passed through to deposit costs", "Branch traffic", "The insured share of deposits"], answer: 1, explain: "The funding war's scoreboard: low betas on the way up mean a sticky franchise; on the way down, fast repricing protects NIM (Q1 2026: asset yields fell 21 bps, funding only 13)." },
    { q: "The US banking system's total assets are roughly:", choices: ["$2.6T", "$26T", "$260T", "$500B"], answer: 1, explain: "$26.1T across 4,278 FDIC-insured institutions as of Q1 2026, earning $80.5B of net income that quarter." },
    { q: "In 2025, European bank stocks:", choices: ["Fell for a 10th straight year", "Had their best year on record: EURO STOXX Banks +76%", "Were flat", "Were broadly nationalized"], answer: 1, explain: "Positive rates, record payouts, and a decade of restructuring finally repriced: Santander and UniCredit posted record profits with mid-to-high-teens RoTE." }
  ],

  sources: [
    { name: "FDIC Quarterly Banking Profile (Q1 2026)", url: "https://www.fdic.gov/quarterly-banking-profile", feeds: "US industry aggregates: assets, NIM, ROA, institution count" },
    { name: "Federal Reserve (H.8, SLOOS, stress tests, charge-off data)", url: "https://www.federalreserve.gov", feeds: "balance sheets, credit standards, capital" },
    { name: "McKinsey Global Banking Annual Review", url: "https://www.mckinsey.com/industries/financial-services/our-insights/global-banking-annual-review", feeds: "global revenue and profit pools" },
    { name: "BIS statistics", url: "https://www.bis.org", feeds: "global banking data" }
  ]
};
