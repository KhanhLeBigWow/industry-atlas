/* Industry Atlas - BANKING (profile-depth module) */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["banking"] = {
  meta: {
    id: "banking", name: "Banking", sector: "finance", status: "profile",
    tagline: "Borrow short, lend long, survive the difference: the leveraged utility underneath every economy.",
    marketSize: { value: 7, unit: "$T", asOf: 2024, note: "global banking revenue pool (McKinsey-style estimate)" },
    cagr: { value: 4, range: [2, 6], horizon: "2024-2030" },
    maturity: "mature", cyclicality: 4, capitalIntensity: 3, regulation: 5, disruption: 3
  },
  overview: {
    definition: "Banks take deposits, make loans, move payments, and manufacture credit. They earn the spread between what they pay for money and what they charge for it, plus fees, while running 10x leverage under the heaviest regulation in business.",
    howItWorks: [
      "The core machine is maturity transformation: deposits that can leave tomorrow fund loans that repay over years. The spread between the two (net interest margin, ~3%) times a balance sheet levered roughly 10:1 produces a ~10% return on equity, when credit behaves. Cheap, sticky deposits are the franchise; everything else is execution.",
      "The same license supports fee businesses that need little capital: payments, cards, wealth management, and (at large banks) investment banking and trading. The best franchises blend spread income with fee income so neither rates nor markets alone set their fate.",
      "Banking's defining feature is that its raw material is confidence. Because assets are long and liabilities are instant, any bank dies if everyone asks for their money at once; 2023's Silicon Valley Bank run happened in hours, on phones. Hence the apparatus around the industry: deposit insurance, central-bank liquidity, capital ratios (CET1), and stress tests. Banks are private companies operating inside a public safety net, and the regulation is the rent for it."
    ],
    history: [
      { era: "1933-1980", title: "The regulated era", text: "Post-Depression rules (Glass-Steagall, deposit insurance) make banking safe and boring for two generations." },
      { era: "1980-2007", title: "Deregulation and consolidation", text: "Interstate banking, securitization, and the 1999 repeal of Glass-Steagall build universal megabanks; leverage climbs quietly." },
      { era: "2008", title: "The global financial crisis", text: "Mortgage credit and wholesale funding implode; taxpayer rescues rewrite the social contract. Basel III doubles capital requirements." },
      { era: "2010-2021", title: "The ZIRP decade", text: "Zero rates crush margins; banks cut costs, digitize, and cede ground to fintech and private credit." },
      { era: "2022-present", title: "Rates return", text: "Fast hikes restore margins, then break SVB via bond losses and digital runs. Deposit competition and Basel endgame define the current fight." }
    ],
    trends: [
      { title: "Private credit migration", direction: "shift", text: "Leveraged lending moves to funds with locked-up capital; banks shift toward originate-and-distribute and financing the funds themselves." },
      { title: "Digital deposit competition", direction: "up", text: "Money moves at app speed; deposit betas rose and runs got faster, repricing the value of truly sticky franchises." },
      { title: "Technology cost arms race", direction: "up", text: "The biggest banks spend $10B+ a year on technology; scale advantages compound while subscale banks consolidate." }
    ],
    outlook: "Higher-for-longer rates keep the margin engine alive; credit normalization (especially commercial real estate) is the drag. Structurally: fewer, bigger, more digital banks, with more of the risk-taking migrating outside the regulated perimeter, which is where the next crisis will look for a home."
  },
  structure: {
    suppliers: [
      { name: "Depositors (households, businesses)", note: "The funding base; insured retail deposits are the crown jewels" },
      { name: "Wholesale markets", note: "Bond issuance, interbank, and central-bank facilities" },
      { name: "Core banking technology", note: "FIS/Fiserv-class processors and a growing cloud stack" }
    ],
    producers: [
      { name: "Universal megabanks", note: "JPMorgan-class: every product, fortress scale" },
      { name: "Regional & community banks", note: "Local lending franchises; the US still has ~4,000" },
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
    intro: "Money in, risk priced, money out, repeated at 10x leverage under supervision.",
    stages: [
      { id: "funding", name: "Funding", what: "Deposits and wholesale borrowing", players: "Retail franchises, treasury desks", valueCapture: 4, economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 3 }, linksTo: ["asset-management"], deeper: "Deposit cost and stickiness decide winners: a 1.5% funding advantage at scale is an unassailable moat, which is why deposit betas are watched like hawks." },
      { id: "underwriting", name: "Credit underwriting", what: "Pricing and selecting risk", players: "Credit officers, models", valueCapture: 5, economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 2 }, linksTo: ["real-estate", "private-equity"], deeper: "The skill that separates compounders from casualties, visible only when the tide goes out. Vintage discipline beats growth every full cycle." },
      { id: "balance-sheet", name: "Balance sheet & ALM", what: "Maturity, rate, and liquidity management", players: "Treasury, ALCO", valueCapture: 3, economics: { grossMargin: [0, 0], capitalIntensity: 3, concentration: 2 }, linksTo: ["capital-markets"], deeper: "SVB died here, not in credit: unhedged duration plus concentrated deposits. Asset-liability management is the quiet core competence." },
      { id: "distribution", name: "Products & distribution", what: "Accounts, cards, mortgages, apps", players: "Retail and commercial lines", valueCapture: 3, economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 3 }, linksTo: ["payments", "fintech"], deeper: "Where fintech attacks: each product can be unbundled by software, but the integrated deposit relationship keeps pulling customers back." },
      { id: "fees", name: "Fee businesses", what: "Payments, wealth, markets, advisory", players: "Universal banks", valueCapture: 4, economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 4 }, linksTo: ["investment-banking", "asset-management", "payments"], deeper: "Capital-light earnings that diversify the spread engine; the reason megabank ROEs survive rate cycles." }
    ]
  },
  financials: {
    businessModel: [
      "Read a bank in this order: NIM (the engine), credit costs (the weather), efficiency ratio (the discipline), CET1 (the armor), ROE vs cost of equity (the verdict). Revenue = earning assets × NIM + fees; profit is what survives provisions and overhead; value is ROE sustained above ~10% cost of equity, which is precisely what P/B multiples price.",
      "Banks are the only industry where the balance sheet IS the business: growth means adding risk-weighted assets, each consuming capital. That is why great banks obsess over deposit franchises and capital allocation rather than sheer size, and why leverage makes small underwriting errors fatal at scale."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 70, capitalIntensity: 55, pricingPower: 45, cyclicality: 75, operatingLeverage: 60 },
    lines: [
      { label: "Net interest income", note: "Earning assets × NIM; the rate-cycle engine" },
      { label: "Fee income", note: "Payments, wealth, markets; the diversifier" },
      { label: "Provisions", note: "Expected credit losses; the cycle lives here" },
      { label: "Operating costs", note: "Efficiency ratio < 55% is the bar" },
      { label: "CET1 & payouts", note: "Excess capital becomes buybacks; shortfalls become dilution" }
    ]
  },
  kpiRefs: ["bank-nim", "bank-roe", "bank-cet1", "bank-efficiency", "bank-npl"],
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
      { name: "P/B vs ROE", use: "The sector's core model: P/B ≈ (ROE − g) / (COE − g)", avoid: "Banks with unmarked losses distorting book", strengths: "Theoretically grounded; brutally comparative", weaknesses: "Book quality varies; credibility of ROE is the real question", range: { low: 0.6, high: 2.0, asOf: 2024, note: "sub-1x means the market doubts the ROE or the book" } },
      { name: "P/E", use: "Screening stable franchises", avoid: "Provision troughs and peaks (the E lies at both)", strengths: "Simple; dividend context", weaknesses: "Credit cycle distorts it, always", range: { low: 7, high: 13, asOf: 2024, note: "banks rarely deserve market multiples; leverage caps them" } },
      { name: "Dividend discount / capital return yield", use: "Mature banks returning most earnings", avoid: "Growth or turnaround stories", strengths: "Payouts are regulator-vetted, hence credible", weaknesses: "Buyback timing optionality is hard to model", range: { low: 8, high: 12, asOf: 2024, note: "total payout yields at large banks" } }
    ]
  },
  pmView: {
    positioning: "The desk trades banks as levered rate-and-credit carry: the value factor's home address. The frame is simple and unforgiving: buy proven underwriters below tangible book with capital-return catalysts, avoid balance-sheet growth stories late in credit cycles, and remember the sector's returns cluster around policy inflections, not earnings seasons.",
    debates: [
      { topic: "NIM after the hiking cycle: plateau or bleed?", bull: "Deposit betas lag on the way down too: funding reprices faster than asset books roll off, and the securities buried at 2021 yields reinvest at double. The margin tailwind has years of asset-repricing left.", bear: "Deposit competition is now structural (apps, money funds at a tap), the curve's shape punishes maturity transformation, and every cut compresses the spread the sector just learned to love." },
      { topic: "CRE, especially office: contained regional pain or rolling crisis?", bull: "Marks are taken, reserves built, and maturities extend-and-pretend into a recovering rate environment; office is 3% of big-bank books and concentrated in names everyone already avoids.", bear: "The refinancing wall rolls through 2026-27 at doubled rates against halved valuations; regional banks hold the concentration, and regulators' forbearance delays rather than deletes the loss." },
      { topic: "Private credit: partner or parasite?", bull: "Banks keep the client and the fee (originate, distribute, finance the funds) while shedding the capital charge: regulatory arbitrage working as intended, for the banks.", bear: "The most profitable lending migrated out with the risk, banks now hold leveraged exposure to the same credits one step removed, and the next credit cycle tests a system where the risk-takers have no deposit insurance and the banks financed them." }
    ],
    cycle: {
      where: "Mid credit-normalization: provisions rising from unnaturally low bases, NIM past peak but fat, capital returns constrained by Basel endgame uncertainty. The trade has rotated from rate-beneficiaries to credit-quality differentiation.",
      drivers: "Policy rates and curve shape, credit formation (the lagged cost of past underwriting), loan growth, and the regulatory capital regime that gates payouts.",
      leads: [
        "Fed SLOOS (quarterly): lending standards lead charge-offs by 3 to 4 quarters",
        "H.8 weekly: loan growth and deposit flows in near-real-time",
        "NPL formation rate (not the stock) in quarterly filings",
        "Deposit beta disclosures: the funding war's scoreboard",
        "CRE maturity schedules and special-servicing rates (Trepp free summaries)"
      ]
    },
    exposure: [
      { vehicle: "Money centers (JPM class)", note: "Quality carry: diversified earnings, fortress capital, the sector's safe expression" },
      { vehicle: "Regionals", note: "The CRE/credit beta and the M&A consolidation call option, in one volatile package" },
      { vehicle: "IB-heavy names (GS class)", note: "The capital-markets cycle trade: deal recovery beta" },
      { vehicle: "European banks", note: "The deep-value expression: decade-cheap, payout-rich, politically capped" },
      { vehicle: "Preferreds & AT1s", note: "The carry without the equity beta; remember Credit Suisse's lesson on subordination" }
    ],
    catalysts: [
      { when: "FOMC meetings", what: "The discount rate of the whole trade; curve shifts move book values and NIM guides" },
      { when: "Mid-January (and quarterly)", what: "Big banks open earnings season: provisions and NII guides set the sector tone" },
      { when: "June (stress tests / CCAR)", what: "Payout capacity revealed; buyback announcements follow within weeks" },
      { when: "Quarterly SLOOS release", what: "The credit cycle's forward indicator, traded within the hour" }
    ],
    data: [
      { series: "FDIC Quarterly Banking Profile", source: "fdic.gov (free)", why: "The whole US system's P&L and credit quality, aggregated" },
      { series: "Fed H.8 weekly", source: "federalreserve.gov (free)", why: "Loan and deposit flows at weekly frequency" },
      { series: "SLOOS", source: "federalreserve.gov (free)", why: "Underwriting standards: the best lead indicator in credit" },
      { series: "FFIEC call reports", source: "ffiec.gov (free)", why: "Bank-by-bank granularity for the regional book" }
    ],
    playbook: [
      { regime: "Rates rising", behavior: "First hikes are champagne (NIM expands), late hikes are hangover (deposit costs catch up, bond marks bite, credit cracks). The curve's shape beats its level: steepening is the real friend." },
      { regime: "Recession", behavior: "Provisions spike, stocks trough 2 to 3 quarters before charge-offs peak; the historical money is made buying mid-recession below tangible book, not waiting for clean credit." },
      { regime: "Inflation", behavior: "Mildly positive via nominal loan growth and rate pass-through, until it forces the hikes that end the cycle." },
      { regime: "Risk-off / funding stress", behavior: "The sector gaps on liquidity fear (SVB template: hours, not weeks); uninsured-deposit concentration is the tell to screen before the storm, never during." }
    ]
  },

  players: [
    { name: "JPMorgan", role: "The fortress universal", country: "US", real: true, note: "~$4T balance sheet; the industry's benchmark" },
    { name: "Bank of America / Wells / Citi", role: "US megabanks", country: "US", real: true, note: "Deposit giants with divergent execution" },
    { name: "HSBC / Santander / BNP", role: "Global & pan-European", country: "UK", real: true, note: "Cross-border trade and retail networks" },
    { name: "ICBC & the Chinese big 4", role: "The largest by assets", country: "CN", real: true, note: "Policy instruments as much as banks" }
  ],
  geography: [
    { country: "US", role: "Deepest, most profitable market", note: "~4,000 banks and consolidating" },
    { country: "CN", role: "Largest by assets", note: "State-directed lending; property overhang" },
    { country: "UK", role: "International wholesale hub", note: "London clears the world's currencies" },
    { country: "SG", role: "Asia's private banking vault", note: "Wealth migration winner" }
  ],
  cycles: [
    { year: 2008, title: "The GFC", kind: "bust", text: "Wholesale funding + bad mortgages = systemic collapse. Lesson: leverage turns small asset errors into extinction events." },
    { year: 2020, title: "COVID stress that wasn't", kind: "shift", text: "Post-Basel capital held; banks were the shock absorber, not the shock. Lesson: the reforms worked." },
    { year: 2023, title: "SVB and the speed run", kind: "bust", text: "Digital deposits fled in hours; duration losses did the rest. Lesson: liquidity risk now moves at phone speed." }
  ],
  risks: [
    { name: "Credit cycle (CRE especially)", severity: 4, likelihood: 4, transmission: "Office repricing flows into regional bank books, provisions, then lending capacity for everyone else." },
    { name: "Deposit flight speed", severity: 4, likelihood: 3, transmission: "App-era runs compress a crisis from weeks to hours; concentrated uninsured bases are kindling." },
    { name: "Shadow migration", severity: 3, likelihood: 4, transmission: "Risk moving to private credit escapes bank supervision but returns via bank financing of the funds." },
    { name: "Rate whiplash", severity: 3, likelihood: 3, transmission: "Fast cuts compress NIM; fast hikes create bond losses. Both ends of the seesaw hurt." }
  ],
  levels: {
    L1: { title: "Beginner", text: ["A bank takes money people want safe (deposits), lends it to people who need it (loans), and keeps the difference in interest. Because it lends out most of what it holds, its real product is trust that your money is there when you ask."] },
    L2: { title: "Intermediate", text: ["The engine is the spread (NIM ~3%) on a balance sheet levered ~10x, plus fees from payments and wealth. Regulation (capital ratios, deposit insurance, stress tests) exists because bank failures cascade; banking is a private business inside a public safety net."] },
    L3: { title: "Advanced", text: ["Analysis order: funding quality, underwriting discipline, capital, then earnings. Value = ROE vs ~10% cost of equity, priced through P/B. The franchise is cheap sticky deposits; the killer is concentrated funding meeting long-duration assets, as SVB demonstrated in a single afternoon."] },
    L4: { title: "Expert", text: ["Current regime: restored margins, normalizing credit (CRE the epicenter), Basel endgame reshaping capital math, and the structural migration of risk to private credit with banks as financiers-once-removed. Deposit beta assumptions and AOCI marks are where models diverge from reality."] },
    L5: { title: "Institutional", text: ["The allocator's frame: banks are levered, regulated rate-and-credit carry vehicles that periodically trade below book on doubt about either. Buy proven underwriters below tangible book with excess capital and catalysts for return of it; avoid balance-sheet growth stories late in credit cycles. Systemically, watch where the leverage went when banks got safer: that is where the next fire starts."] }
  },
  quiz: [
    { q: "A bank's core profit engine is:", choices: ["Trading revenue", "The spread between deposit costs and loan yields, levered ~10x", "ATM fees", "Government grants"], answer: 1, explain: "Net interest margin times a levered balance sheet produces the ROE; everything else supplements it." },
    { q: "SVB failed primarily because of:", choices: ["Bad loans", "Fraud", "Concentrated uninsured deposits fleeing while bond losses gutted the asset side", "Currency risk"], answer: 2, explain: "A classic run at digital speed: duration mismatch plus a homogeneous depositor base that moved together, in hours." },
    { q: "Banks trade on P/B rather than pure P/E because:", choices: ["Tradition", "The balance sheet IS the business and value tracks ROE versus the cost of equity", "Regulators require it", "Book value never changes"], answer: 1, explain: "P/B ≈ (ROE − g)/(COE − g): sustained returns above ~10% cost of equity justify premiums to book; doubt shows up as discounts." },
    { q: "The most valuable funding a bank can have is:", choices: ["Overnight wholesale borrowing", "Granular, insured retail deposits", "Bond issuance", "Central bank loans"], answer: 1, explain: "Cheap, sticky, and insured: the franchise itself. Wholesale money is the first to leave in stress." },
    { q: "Post-2008 reforms mean modern crises most likely originate:", choices: ["In heavily capitalized megabanks", "Outside the regulated perimeter, in shadow credit that banks finance indirectly", "In deposit insurance funds", "Nowhere; crises are over"], answer: 1, explain: "Risk migrated to private credit and funds; supervision follows the license, not the risk." }
  ],
  sources: [
    { name: "FDIC Quarterly Banking Profile", url: "https://www.fdic.gov", feeds: "US industry aggregates" },
    { name: "Fed H.8 & stress tests", url: "https://www.federalreserve.gov", feeds: "balance sheets, capital" },
    { name: "BIS statistics", url: "https://www.bis.org", feeds: "global banking data" }
  ]
};
