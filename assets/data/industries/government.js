/* Industry Atlas - GOVERNMENT & PUBLIC SECTOR (full module, research-backed)
 * Anchors: global public debt above $100T in 2024, 93% of world GDP (IMF
 * Fiscal Monitor, Oct 2024); public procurement ~$13T/yr with <3% of it
 * published openly (Open Contracting Partnership / Spend Network, 2020);
 * US federal contract obligations ~$755B in FY2024, DOD $445B or ~59% (GAO
 * contracting snapshot); government expenditure as % of GDP, 2024 (IMF):
 * France 57%, Germany 48%, Japan 42%, US 38%; Palantir FY2025 revenue
 * $4.48B, government $2.4B or 54% (company filings via Wikipedia). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["government"] = {
  meta: {
    id: "government", name: "Government & Public Sector", sector: "public", status: "full",
    tagline: "The economy's largest buyer, borrower, and rule-setter: 40% of rich-world GDP, a $13T procurement market, and a $100T debt stack.",
    marketSize: { value: 13, unit: "$T", asOf: 2020, note: "annual global public procurement of goods, services, and works (OCP/Spend Network estimate, still the standard cite); total government spending runs roughly 3x that" },
    cagr: { value: 5, range: [3, 7], horizon: "2024-2030" },
    maturity: "mature", cyclicality: 1, capitalIntensity: 3, regulation: 5, disruption: 2
  },
  newsQuery: '("government procurement" OR "federal contract" OR "public sector" OR govtech OR "sovereign debt" OR "fiscal deficit" OR "government shutdown")',

  overview: {
    definition: "Government is the economy's largest single actor: it taxes, borrows, spends, employs, insures, and regulates. As an industry it is 3 investable markets stacked together: the sovereign bonds it issues, the $13T of goods and services it buys from private suppliers each year, and the software and outsourcing firms that run it.",
    howItWorks: [
      "Start with scale. Government is not one entity but layers: central, state or provincial, and local, plus social insurance funds and state-owned enterprises. In advanced economies the consolidated stack spends between roughly 38% and 57% of GDP (IMF, 2024): France 57%, Germany 48%, Japan 42%, the US 38%. That money does 4 jobs: it transfers (pensions, benefits, the largest slice), it produces (schools, courts, armies), it buys (procurement), and it regulates (a shadow budget imposed on everyone else). No other customer, competitor, or counterparty comes close.",
      "The money loop runs taxes in, bonds for the gap. Taxation covers most of the bill; deficits cover the rest, and the bond market is both the state's bank and its disciplinarian. Global public debt passed $100T in 2024, about 93% of world GDP, and the IMF projects it approaching 100% by 2030, with the US and China driving the climb (Fiscal Monitor, Oct 2024). Sovereign issuance is the deepest capital market on Earth: auctions, primary dealers, and ratings agencies form its plumbing, and the interest line is now a top budget item in most large economies: the constraint that shapes every other policy choice.",
      "The procurement economy is where companies meet the state. Governments spend about $13T a year on public contracts, from fighter jets to school lunches (Open Contracting Partnership / Spend Network); the US federal government alone obligated about $755B in FY2024, 59% of it through the Department of Defense (GAO). Contract types allocate risk: cost-plus work pays a thin, audited margin and leaves overruns with the taxpayer; fixed-price work pays better and can bankrupt the careless. The moat is incumbency: clearances, past-performance ratings, and compliance machinery keep recompete win rates near 90%, while less than 3% of global contracting data is published openly: opacity is this market's defining inefficiency and its corruption channel.",
      "The newest layer is govtech: replacing COBOL-era systems with cloud, data, and AI. Palantir is the proof case that software can capture monopoly-grade economics from the state: roughly $4.48B of FY2025 revenue, $2.4B (54%) from government, including a $795M US Army software deal in 2025. Behind the vendors sits the deeper debate: state capacity. Whether governments can still build (housing, transmission lines, digital services) has become a live political economy question, and efficiency drives (the DOGE template) now cut headcount even as modernization budgets grow: bodies out, software in."
    ],
    history: [
      { era: "Antiquity-1900", title: "The minimal state", text: "Tax collectors, courts, and armies: by the late 19th century public spending averaged only about 10% of GDP in the West." },
      { era: "1900-1945", title: "Wars build states", text: "Income taxes, central banks, and 2 total mobilizations ratchet the state's share of the economy up: and it never returns to the 10% world." },
      { era: "1945-1979", title: "The welfare state", text: "Pensions, national health systems, and mass education push European spending toward half of GDP; government becomes the largest employer in most rich countries." },
      { era: "1979-2008", title: "The market state", text: "Thatcher and Reagan privatize and outsource; New Public Management imports business methods; the modern government contractor industry is born." },
      { era: "2008-present", title: "The state returns", text: "Bailouts, COVID's fiscal bazooka, and industrial policy bring big government back, funded by a bond market now holding a $100T public debt stack." }
    ],
    trends: [
      { title: "Fiscal dominance", direction: "up", text: "Interest costs are a top budget line across the G7; with debt above $100T (IMF, 2024), debt service now shapes defense, tax, and entitlement choices rather than the reverse." },
      { title: "GovTech modernization", direction: "up", text: "AI, cloud, and data platforms are moving into core government; Palantir's 54%-government revenue mix growing at venture speed showed the ceiling and reset every vendor's ambition." },
      { title: "Efficiency politics", direction: "shift", text: "DOGE-style cost drives, headcount cuts, and program audits are now electoral products; they threaten body-shop contractors while accelerating software substitution." },
      { title: "Procurement transparency", direction: "up", text: "With under 3% of the $13T contract market published openly, open-contracting reforms are the cheapest anti-corruption lever governments have: adoption is slow but one-directional." },
      { title: "Geopolitics re-arms the state", direction: "up", text: "Rearmament, chip acts, and subsidy races have made government the marginal investor in strategic industries: industrial policy is procurement by another name." }
    ],
    outlook: "Government spending does not mean-revert: crises ratchet it up and politics rarely ratchets it back, so the procurement and govtech markets grow with nominal GDP plus a modernization premium. The binding constraint has shifted from ideology to arithmetic: with public debt above $100T and rising, interest costs force prioritization, which favors software over headcount, defense over discretionary, and audited efficiency over expansion. For investors the setup is a barbell: sovereign bonds price the state's balance sheet risk while contractor and govtech equities monetize its operating budget: the rare customer that cannot churn, prints its own currency, and pays in 30 days."
  },

  structure: {
    suppliers: [
      { name: "Defense primes (Lockheed, RTX, BAE class)", note: "The largest contractor bloc: DOD alone obligated $445B in FY2024" },
      { name: "Services & IT primes (Leidos, Booz Allen, Accenture Federal, CGI)", note: "Mission IT, consulting, and engineering: the recompete economy" },
      { name: "GovTech software (Palantir, Tyler Technologies, SAP)", note: "Data platforms, courts, ERP: the margin end of the market" },
      { name: "Builders & operators (construction, Serco/Maximus class outsourcers)", note: "Infrastructure, prisons, benefits processing: thin margins, long contracts" }
    ],
    producers: [
      { name: "Central governments", note: "Defense, entitlements, and the sovereign balance sheet: the apex buyer" },
      { name: "State, provincial & local governments", note: "Schools, police, roads: in federal systems, most public employment lives here" },
      { name: "Social insurance funds & SOEs", note: "Pension schemes, health funds, state enterprises: the off-budget state" },
      { name: "Multilaterals (EU, World Bank, UN system)", note: "Cross-border budgets and procurement regimes with their own rulebooks" }
    ],
    distributors: [
      { name: "Contract vehicles & marketplaces (GSA schedules, framework agreements)", note: "Pre-negotiated rails that route the $13T to approved vendors" }
    ],
    customers: [
      { name: "Citizens & residents", note: "The end users: services, transfers, and protection in exchange for taxes and votes" },
      { name: "Businesses", note: "Buy rule-certainty and infrastructure; supply the tax base and the lobbying" },
      { name: "Bondholders", note: "The state's creditors: pension funds, banks, foreign reserves, and central banks" }
    ],
    regulators: [
      { name: "Legislatures & budget offices (CBO class)", note: "Appropriations power: no money moves without them" },
      { name: "Auditors & procurement watchdogs (GAO, courts of audit)", note: "Bid protests, program audits, and the paper trail of the $755B" },
      { name: "Ratings agencies & the IMF", note: "The external scorekeepers of sovereign credit and fiscal honesty" }
    ],
    capital: [
      { name: "Sovereign bond markets", note: "The deepest market on Earth funds the deficits; auctions are the heartbeat" },
      { name: "Central banks", note: "Buyers of last resort and setters of the state's marginal funding cost" },
      { name: "Municipal & sub-sovereign finance", note: "The $4T US muni market and its global cousins fund the local layer" }
    ]
  },

  valueChain: {
    intro: "From tax collection to a signed contract and a delivered service. Value capture inverts civic importance: the policy core earns nothing, while the software vendors bolted onto the side of the state earn the best margins in the chain.",
    stages: [
      { id: "revenue", name: "Tax & revenue collection", what: "Taxes, customs, and fees: the world's largest cash flow", players: "Revenue authorities (IRS, HMRC class), tax software, Big 4 advisors", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 5 },
        linksTo: ["banking", "saas"],
        deeper: "Collection costs pennies per dollar raised, which is why tax authorities were the first agencies to digitize. The private capture here is compliance: an entire professional industry prices the tax code's complexity, and every simplification proposal threatens it." },
      { id: "debt", name: "Sovereign borrowing", what: "Bond issuance, auctions, and debt management", players: "Treasuries and DMOs, primary dealers, ratings agencies", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 4 },
        linksTo: ["capital-markets", "banking", "insurance"],
        deeper: "The $100T stock (IMF, 2024) rolls constantly: refunding calendars are macro events. Primary dealers earn the spread for underwriting auctions; the real power sits with the marginal buyer, which post-QE is once again the private bond market: hence the return of the vigilantes." },
      { id: "budget", name: "Budgeting & policy", what: "Appropriations, program design, regulation", players: "Finance ministries, legislatures, OMB/CBO class scorekeepers", valueCapture: 1,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 5 },
        linksTo: ["defense", "education"],
        deeper: "Where the money is aimed. Budget processes are the industry's demand signal: a continuing resolution freezes new awards, a defense supplemental creates markets overnight. Lobbying earns the highest documented ROI in finance precisely because this stage prices policy, not product." },
      { id: "procurement", name: "Procurement & contracting", what: "The $13T market: goods, services, and works", players: "Defense primes, services firms, builders; GSA-style vehicles", valueCapture: 4,
        economics: { grossMargin: [8, 25], capitalIntensity: 2, concentration: 3 },
        linksTo: ["defense", "construction", "manufacturing"],
        deeper: "Risk allocation is the whole game: cost-plus caps margins near 8% but guarantees them; fixed-price offers 15%+ and ruin in the same envelope. Incumbency compounds: clearances, past performance, and protest law give holders ~90% recompete odds. Under 3% of global award data is open: information asymmetry is the alpha." },
      { id: "delivery", name: "Service delivery & operations", what: "Benefits, health, justice, and infrastructure operations", players: "Agencies plus outsourcers (Serco, Maximus, CGI class)", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 2, concentration: 3 },
        linksTo: ["hospitals", "education", "utilities"],
        deeper: "The outsourced state runs on long contracts with painful KPIs: margins are thin, reputational risk is enormous (one failed benefits system makes national news), and rebids arrive every 5 to 10 years. Scale and switching costs, not pricing power, are the moat." },
      { id: "govtech", name: "GovTech & modernization", what: "Software, data, and AI for the state", players: "Palantir, Tyler Technologies, Accenture Federal, SAP", valueCapture: 5,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas", "cloud", "cybersecurity", "ai"],
        deeper: "The chain's crown jewels: software margins sold to a customer that never churns. Palantir's $2.4B of government revenue (54% of FY2025 total) proved the ceiling; Tyler's courts-and-ERP franchise proved the floor compounds quietly. The gate is procurement itself: selling to government is a certification moat once crossed." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector through 3 different P&Ls. Contractors (services and defense primes): revenue = funded backlog burning into sales, margins set by contract mix (cost-plus ~6% to 9% EBIT, fixed-price 10% to 15% with overrun risk), and the key ratios are book-to-bill, backlog coverage, and recompete win rate. GovTech vendors: SaaS economics with government sales cycles: 90%+ gross retention, multi-year ramps, and margins that embarrass the services peers once deployed. The sovereign itself: revenue is taxes (elastic to nominal GDP), the cost lines are transfers and interest, and the equity is the currency: dilution shows up as inflation, not share count.",
      "The customer's quality is the sector's paradox: near-zero credit risk, 30-day payment, contracts measured in years: and yet vendor multiples sit below commercial peers because growth is budget-capped, margins are audited, and political risk arrives without warning (shutdowns, efficiency drives, program cancellations). The current cycle sharpens both edges: a $100T debt stack pressures discretionary spending, while modernization and rearmament budgets grow through it. Winners hold price via software or sole-source positions; losers rent out bodies at audited cost."
    ],
    fingerprint: { grossMargin: 30, recurringRevenue: 85, capitalIntensity: 35, pricingPower: 40, cyclicality: 15, operatingLeverage: 45 },
    lines: [
      { label: "Obligations & outlays", note: "The demand tape: US federal contracts hit ~$755B in FY2024 (GAO)" },
      { label: "Backlog & book-to-bill", note: "Funded vs unfunded backlog is the contractor's earnings visibility" },
      { label: "Recompete win rate", note: "The moat metric: incumbents keep ~90%; every loss is a 5-to-10-year hole" },
      { label: "Deficits & interest cost", note: "The sovereign P&L: interest crowding out programs is the macro risk line" },
      { label: "Award protests & CRs", note: "Timing risk: continuing resolutions and GAO protests slip revenue right" }
    ],
    unitEconomics: {
      unit: "per $100 of contract revenue (services prime, illustrative)",
      items: [
        { label: "Cost-plus work", value: "6% to 9% EBIT", note: "the government audits your costs and caps your fee" },
        { label: "Fixed-price work", value: "10% to 15% EBIT", note: "keep the upside, eat the overruns" },
        { label: "Recompete retention", value: "~90% by value", note: "clearances and past performance lock in the incumbent" },
        { label: "Payment terms", value: "~30 days, near-zero credit risk", note: "the customer prints the currency it pays you in" }
      ]
    }
  },

  kpiRefs: ["def-backlog", "saas-nrr"],
  kpiLocal: [
    {
      id: "gov-debt-gdp", name: "Public Debt / GDP", industries: ["government"],
      definition: "General government gross debt as a share of GDP: the sovereign balance sheet in one ratio.",
      formula: "General government gross debt / nominal GDP",
      interpretation: "Trajectory beats level: what matters is whether the ratio compounds (interest rate above growth rate) and how much revenue interest consumes. The global stock passed $100T, 93% of world GDP, in 2024 (IMF).",
      healthy: "Stable or falling ratio; interest below ~10% of revenue", warning: "Ratio rising with r above g; interest crowding out programs" },
    {
      id: "gov-recompete-rate", name: "Recompete Win Rate", industries: ["government"],
      definition: "Share of a contractor's expiring contracts retained at rebid, by value.",
      formula: "Recompete wins / recompetes decided (by contract value)",
      interpretation: "The moat metric of government services: incumbency (clearances, past performance, transition risk) normally holds ~90%. Misses compound because replacements take 5 to 10 years to rebuild.",
      healthy: "90%+ by value at stable pricing", warning: "Below 80%, or wins bought with margin givebacks" }
  ],

  health: {
    intro: "For the state, health is fiscal arithmetic plus institutional capacity; for its vendors, health is backlog quality and political insulation. The 2 are linked: a fiscally stressed customer eventually becomes a worse customer.",
    pillars: [
      { name: "Fiscal sustainability", weight: 30, metrics: "Debt/GDP trajectory, deficit, interest/revenue, r vs g", healthy: "Primary balance near zero; interest under 10% of revenue", warning: "Compounding ratio; interest outgrowing defense (the US crossover)" },
      { name: "Procurement & execution", weight: 20, metrics: "Award timeliness, protest rates, cost overruns, open data share", healthy: "On-time awards, published contracts", warning: "CR-driven freezes; overruns and scandal cycles" },
      { name: "Political stability", weight: 20, metrics: "Budget process reliability, rule of law, policy continuity", healthy: "Budgets pass on schedule", warning: "Shutdown rituals, retroactive contract changes, capture" },
      { name: "Digital & state capacity", weight: 15, metrics: "Legacy system share, digital service adoption, delivery speed", healthy: "Estonia-class digital rails", warning: "COBOL cores, failed IT megaprojects, can't-build syndrome" },
      { name: "Workforce & institutions", weight: 15, metrics: "Public wage competitiveness, attrition, institutional trust", healthy: "Stable expert cadre", warning: "Hollowed agencies outsourcing their own judgment" }
    ],
    scoringNote: "Score the sovereign and its vendors separately, then cross-check: contractor backlogs are only as good as the appropriations behind them, and no vendor moat survives its customer's insolvency arithmetic."
  },

  valuation: {
    intro: "Nobody values the state itself; markets price its debt and its suppliers. Bonds carry the balance-sheet judgment, services primes trade on backlog-backed cash flow, and govtech trades on software economics with a political discount that periodically disappears.",
    methods: [
      { name: "EV / EBITDA (services primes)", use: "Leidos/Booz Allen class: backlog-backed, budget-funded cash flows", avoid: "Peak-award extrapolation; normalize for protest and CR timing", strengths: "Stable, comparable, cash-generative cohort", weaknesses: "Blind to contract-mix risk (fixed-price bombs surface late)", range: { low: 10, high: 16, asOf: 2025, note: "premium for backlog coverage and software mix" } },
      { name: "EV / Sales (govtech growth)", use: "Pure-play government software scaling into modernization budgets", avoid: "Applying it to body-shop revenue dressed as tech", strengths: "Captures the land-and-expand curve before margins show", weaknesses: "Palantir traded far above any historical band: momentum, not comps", range: { low: 5, high: 15, asOf: 2025, note: "gov software cohort; the flagship trades well above" } },
      { name: "Sovereign yield & spread math", use: "The state's own paper: real yields, term premium, CDS for the EM cohort", avoid: "Treating reserve-currency and non-reserve sovereigns as one asset class", strengths: "The deepest, most honest price signal in finance", weaknesses: "Reflexive: the price changes the fundamentals via interest cost", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: r vs g decides everything" } },
      { name: "Concession / PPP DCF", use: "Availability-payment infrastructure and long outsourcing contracts", avoid: "Volume-risk concessions valued like availability deals", strengths: "Contracted cash flows suit DCF unusually well", weaknesses: "Political repricing risk over 25-year lives", range: { low: 8, high: 14, asOf: 2025, note: "% equity IRRs typically underwritten" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a government contractor quickly: normalized EBITDA times a mix-adjusted multiple, minus net debt. Software mix and recompete record argue the multiple up; fixed-price concentration argues it down.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 8, step: 0.2, value: 1.6, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 24, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -2, max: 15, step: 0.5, value: 3, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays government as a barbell: sovereign duration prices the balance sheet, contractor and govtech equities monetize the operating budget. Core the software-mix compounders (the only pricing power in the chain), hold services primes as budget-cycle carry, and treat sovereign bonds as the macro instrument they are. The customer cannot churn; the risk is that it reprioritizes.",
    debates: [
      { topic: "Does the $100T debt stack actually bind?", bull: "Reserve-currency sovereigns with independent central banks do not run out of their own money: Japan ran 200%+ debt/GDP for decades without crisis, and the real constraint is inflation, not solvency. Duration at these yields pays you to wait.", bear: "The constraint binds through the budget, not default: interest is already crowding out programs across the G7, and the IMF's path to 100% of world GDP by 2030 means every future crisis starts with less fiscal room. Term premium is back and structurally higher." },
      { topic: "GovTech premium: durable moat or multiple madness?", bull: "Certification, clearances, and data gravity make government software the stickiest revenue in tech; modernization budgets grow through austerity because software replaces headcount. Palantir's 54%-government mix compounding at venture speed is the template, not the anomaly.", bear: "One flagship's multiple priced a decade of flawless execution; procurement reform can commoditize what protest law protects; and the same efficiency politics funding software today can cancel programs tomorrow. Buy the economics, never the story multiple." },
      { topic: "Efficiency drives: contractor risk or contractor opportunity?", bull: "Every headcount cut needs a system to replace it: DOGE-style austerity is a forced modernization order for the software and automation vendors, and outsourcers absorb the work agencies shed.", bear: "Cost politics do not discriminate: consulting and services line items are the first cut, insourcing rhetoric is bipartisan, and margin scrutiny follows the audits. The body-shop end of the sector is structurally short efficiency politics." }
    ],
    cycle: {
      where: "Fiscal dominance era: record peacetime debt, interest costs crowding budgets, rearmament and modernization spending rising anyway, and efficiency politics ascendant. Demand is secure; its composition is being fought over line by line.",
      drivers: "Nominal GDP (the tax base), rates (the interest bill), elections (the priorities), geopolitics (the defense floor), and demographics (the entitlement escalator).",
      leads: [
        "US Treasury Monthly Statement: outlays, receipts, interest cost (free)",
        "CBO baseline updates and monthly budget reviews (free)",
        "USAspending.gov award obligations by agency and vendor (free, daily)",
        "Treasury auction results and bid-to-cover ratios (TreasuryDirect, free)",
        "IMF Fiscal Monitor, twice yearly: the global debt scoreboard (free)"
      ]
    },
    exposure: [
      { vehicle: "Services primes (Leidos, Booz Allen, CGI class)", note: "Budget-cycle carry: backlog visibility, single-digit growth, protest risk" },
      { vehicle: "GovTech pure plays (Palantir, Tyler class)", note: "The margin end: software economics on an unchurnable customer" },
      { vehicle: "Defense primes crossover", note: "The procurement market's largest slice: see the defense module" },
      { vehicle: "Sovereign duration (Treasury/gilt curves, TLT class)", note: "The balance-sheet trade: fiscal risk priced in basis points" },
      { vehicle: "Municipal and sub-sovereign credit", note: "The local layer: tax-advantaged carry with pension-math tail risk" }
    ],
    catalysts: [
      { when: "Oct 1 (US fiscal year start)", what: "Appropriations or shutdown: stop-work risk, award timing, the annual ritual" },
      { when: "Twice yearly (spring/fall)", what: "IMF Fiscal Monitor and WEO: the global fiscal scoreboard resets" },
      { when: "Quarterly", what: "Treasury refunding announcements: duration supply moves the whole curve" },
      { when: "Election cycles", what: "Priorities, agencies, and procurement pipelines rotate; efficiency mandates arrive" }
    ],
    data: [
      { series: "Federal outlays, receipts, debt, interest", source: "FRED / fiscaldata.treasury.gov (free)", why: "The sovereign P&L in real time" },
      { series: "Contract obligations by agency and vendor", source: "USAspending.gov (free)", why: "Who is winning the $755B, updated daily" },
      { series: "Global debt, deficits, spending ratios", source: "IMF Fiscal Monitor & WEO database (free)", why: "Cross-country balance sheets, comparable" },
      { series: "Government at a Glance indicators", source: "OECD (free)", why: "Spending, employment, and trust metrics for 38 countries" },
      { series: "Bid-protest decisions and program audits", source: "gao.gov (free)", why: "Procurement integrity and award-risk primary source" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Government is the countercyclical bid: outlays rise, contractor demand holds, quality sovereigns rally. The sector is the portfolio's shock absorber, not its beta." },
      { regime: "Rates rising", behavior: "The interest bill compounds first: watch interest/revenue crossovers, term premium, and refunding sizes. Austerity risk reprices services vendors with a lag." },
      { regime: "Election year", behavior: "Continuing resolutions slow awards, protests rise, pipelines stall: buy the post-appropriations catch-up in names with funded backlog." },
      { regime: "Fiscal consolidation", behavior: "Cuts hit bodies before software: overweight modernization vendors, underweight staffing-heavy primes, and respect that consolidations usually slip." }
    ]
  },

  players: [
    { name: "US federal government", role: "The apex buyer", country: "US", real: true, note: "~$755B of FY2024 contract obligations; DOD $445B, 59% of the total (GAO)" },
    { name: "Palantir", role: "GovTech flagship", country: "US", real: true, note: "FY2025 revenue $4.48B, government $2.4B (54%); a $795M Army software deal in 2025" },
    { name: "Accenture", role: "Global public sector integrator", country: "IE", real: true, note: "Federal Services arm is a top modernization prime across NATO economies" },
    { name: "Leidos", role: "Federal IT & mission services prime", country: "US", real: true, note: "The scale template for government services: backlog-driven, defense-adjacent" },
    { name: "Booz Allen Hamilton", role: "The pure play", country: "US", real: true, note: "Revenue almost entirely US government: the cleanest listed proxy for federal budgets" },
    { name: "Tyler Technologies", role: "State & local software", country: "US", real: true, note: "Courts, ERP, and payments for thousands of jurisdictions: quiet compounding" },
    { name: "Serco", role: "Outsourced operations (UK model)", country: "GB", real: true, note: "Prisons, transport, benefits processing: the thin-margin end of the market state" },
    { name: "CGI", role: "Government IT, Canada & Europe", country: "CA", real: true, note: "Long-cycle public IT contracts: the sector's non-US services benchmark" }
  ],

  geography: [
    { country: "US", role: "Largest procurement market", note: "$755B of federal contracts in FY2024; spending 38% of GDP: low for the rich world (IMF, 2024)" },
    { country: "FR", role: "The statist benchmark", note: "Government spends 57% of GDP (IMF, 2024): the high-water mark among large economies" },
    { country: "CN", role: "State capitalism at scale", note: "SOEs and local-government finance direct capital, not just spend it; co-driver of the global debt climb" },
    { country: "GB", role: "The outsourcing lab", note: "From Thatcher privatizations to PFI to Serco: the market-state experiment, results mixed" },
    { country: "EE", role: "Digital state exemplar", note: "X-Road rails put nearly every service online: the reference build every govtech pitch cites" },
    { country: "SG", role: "State capacity benchmark", note: "Small state, elite bureaucracy, sovereign wealth: government run as a compounder" }
  ],

  cycles: [
    { year: 1933, title: "The New Deal ratchet", kind: "shift", text: "Depression response permanently enlarges the American state; spending never returns to the ~10%-of-GDP world of 1900. Lesson: crises ratchet the state up; peace rarely ratchets it back." },
    { year: 1979, title: "The privatization wave", kind: "shift", text: "Thatcher, then Reagan, sell state enterprises and outsource operations; the modern government contractor industry is born from the state's retreat. Lesson: shrinking the state creates markets." },
    { year: 2010, title: "Eurozone sovereign crisis", kind: "bust", text: "Greek yields blow out and the eurozone learns that members borrow in a currency they do not print; austerity follows, and populism follows austerity. Lesson: such sovereigns are credits, not currencies." },
    { year: 2020, title: "The COVID fiscal bazooka", kind: "boom", text: "Governments deploy trillions in weeks; deficits hit wartime levels and the state proves it can move fast when it chooses. Lesson: the fiscal put exists, and the bill arrives later as debt and inflation." },
    { year: 2024, title: "The $100T milestone", kind: "shift", text: "The IMF flags global public debt through $100T (93% of GDP), US and China driving; term premium returns and efficiency politics go mainstream. Lesson: interest cost is now policy's binding constraint." }
  ],

  risks: [
    { name: "Sovereign debt stress in a major economy", severity: 5, likelihood: 2, transmission: "Buyers demand more yield -> interest crowds the budget -> forced austerity -> contractor demand and macro growth hit together." },
    { name: "Shutdowns & appropriations dysfunction", severity: 3, likelihood: 4, transmission: "Funding lapse -> stop-work orders and frozen awards -> contractor cash-flow gaps and slipped revenue (a recurring US ritual)." },
    { name: "Efficiency drives & insourcing politics", severity: 3, likelihood: 3, transmission: "Deficit politics -> program cuts, consulting freezes, insourcing -> recompete losses and margin pressure at the services end." },
    { name: "Procurement capture & scandal", severity: 3, likelihood: 3, transmission: "Opaque contracting (97% of the $13T unpublished) -> corruption events -> debarments, clawbacks, and backlash against outsourcing itself." },
    { name: "State capacity erosion", severity: 4, likelihood: 3, transmission: "Underpaid workforce + legacy systems -> delivery failures -> collapsing trust -> populist swings that reprice policy risk across every regulated industry." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Government is the biggest economic actor there is: in rich countries roughly 38 to 57 cents of every GDP dollar flows through it, and worldwide it buys about $13T of goods and services from companies every year. Investors meet it in 3 ways: the bonds it issues to fund deficits, the companies that sell to it (from fighter jets to software), and the rules it writes for everyone else."] },
    L2: { title: "Intermediate", text: ["The mechanics: taxes fund most of the budget, bonds fund the gap, and the global pile of government debt passed $100T in 2024 (93% of world GDP, per the IMF). The procurement market has its own physics: cost-plus contracts pay thin audited margins, fixed-price contracts pay more with overrun risk, and incumbents keep about 90% of contracts at rebid. The US federal government alone signed ~$755B of contracts in FY2024, 59% via the Pentagon."] },
    L3: { title: "Advanced", text: ["Analyze the 3 P&Ls separately. Contractors: book-to-bill, funded backlog, contract mix, and recompete record: protests and continuing resolutions move quarters. GovTech: SaaS metrics with sovereign stickiness: retention above 90% and margins the services firms cannot touch. The sovereign: r vs g decides whether debt compounds, and interest/revenue tells you when the arithmetic starts binding policy. Cross-check them: vendor backlogs are only as strong as the appropriations behind them."] },
    L4: { title: "Expert", text: ["Trade the calendar: October 1 appropriations, quarterly refunding announcements, twice-yearly IMF Fiscal Monitors, and election-year award freezes. The live debates: whether the $100T stack binds reserve-currency sovereigns (Japan says slowly, the term premium says increasingly), whether govtech multiples price a moat or a story, and whether efficiency politics is net long or short the contractor complex (long software, short bodies is the emerging answer)."] },
    L5: { title: "Institutional", text: ["Allocator's frame: government exposure is a barbell across the capital structure of the state itself: sovereign duration prices the balance sheet, contractor and govtech equities monetize the operating budget, and state capacity is the hidden factor in every country allocation you make. The sector's paradox is permanent: the best customer in capitalism (cannot churn, prints its payment currency, 30-day terms) attached to the worst governance cycle (annual budgets, elections, protests). Size positions for the customer, hedge them for the politics."] }
  },

  quiz: [
    { q: "Roughly how much do governments worldwide spend each year on public contracts?", choices: ["$1.3T", "About $13T: roughly 3x Germany's GDP", "$130B", "$130T"], answer: 1, explain: "The Open Contracting Partnership / Spend Network estimate: ~$13T a year of goods, services, and works: the largest customer market on Earth." },
    { q: "In 2024 the IMF flagged that global public debt had passed:", choices: ["$10T", "$50T", "$100T, about 93% of world GDP", "$500T"], answer: 2, explain: "The October 2024 Fiscal Monitor milestone, with the ratio projected to approach 100% of GDP by 2030, driven by the US and China." },
    { q: "Government spending as a share of GDP in France (2024, IMF) is about:", choices: ["25%", "38%", "57%: the high-water mark among large economies", "75%"], answer: 2, explain: "France 57%, Germany 48%, Japan 42%, US 38%: the rich-world range runs roughly 38% to 57% of GDP." },
    { q: "US federal contract obligations in FY2024 totaled about:", choices: ["$75B", "$755B, with 59% flowing through the Department of Defense", "$7.5T", "$250B"], answer: 1, explain: "GAO's government-wide snapshot: ~$755B obligated, $445B of it DOD: defense is the procurement market's center of gravity." },
    { q: "Cost-plus contracts differ from fixed-price contracts because they:", choices: ["Pay higher margins", "Leave overrun risk with the government and cap the vendor's audited margin", "Are illegal in the US", "Never get rebid"], answer: 1, explain: "Cost-plus pays ~6% to 9% EBIT with the taxpayer eating overruns; fixed-price pays 10% to 15% but the overruns are yours." },
    { q: "Incumbent contractors typically retain what share of contracts at rebid?", choices: ["Around 90%: clearances and past performance are the moat", "About 50%", "Under 25%", "100%: rebids are ceremonial"], answer: 0, explain: "Recompete win rates near 90% make incumbency the sector's core asset: every loss is a 5-to-10-year hole in backlog." },
    { q: "What share of global government contracting data is published openly?", choices: ["Nearly all of it", "About half", "Under 3%: opacity is the market's defining inefficiency", "Exactly 25%"], answer: 2, explain: "Less than 3% (~$363B of the $13T) per the Open Contracting Partnership: transparency is the cheapest anti-corruption lever going." },
    { q: "Palantir's FY2025 numbers made it govtech's flagship because:", choices: ["It was acquired by the Pentagon", "Roughly $4.48B of revenue with $2.4B (54%) from government, growing at venture speed", "It stopped selling to governments", "It became a defense prime"], answer: 1, explain: "Proof that software can earn top-tier economics from the state: including a $795M Army software deal in 2025: and the reset point for every govtech valuation debate." }
  ],

  sources: [
    { name: "IMF Fiscal Monitor (Oct 2024): global public debt above $100T", url: "https://www.imf.org/en/Publications/FM", feeds: "debt, deficits, spending ratios" },
    { name: "Open Contracting Partnership / Spend Network: $13T global procurement", url: "https://www.open-contracting.org/what-is-open-contracting/global-procurement-spend/", feeds: "procurement market size, transparency" },
    { name: "GAO government-wide contracting snapshot (FY2024)", url: "https://www.gao.gov/blog/snapshot-government-wide-contracting-fy-2024-interactive-dashboard", feeds: "US federal contracting" },
    { name: "USAspending.gov", url: "https://www.usaspending.gov", feeds: "awards, obligations, vendors" }
  ]
};
