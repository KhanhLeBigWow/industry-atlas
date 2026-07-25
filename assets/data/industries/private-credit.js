/* Industry Atlas - PRIVATE CREDIT (full module, research-backed)
 * Anchors: ~$2T AUM 2024 (Fed, Moody's), direct lending ~45% of it;
 * Morgan Stanley-class forecasts ~$5T by 2029; spreads SOFR+500-600. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["private-credit"] = {
  meta: {
    id: "private-credit", name: "Private Credit", sector: "finance", status: "full",
    tagline: "The $2 trillion migration of lending out of banks and into funds: the defining financial-structure story of the decade.",
    marketSize: { value: 2, unit: "$T", asOf: 2024, note: "global private credit AUM; forecasts run toward $5T by 2029" },
    cagr: { value: 15, range: [10, 20], horizon: "2024-2029" },
    maturity: "growth", cyclicality: 3, capitalIntensity: 2, regulation: 2, disruption: 2
  },
  newsQuery: '("private credit" OR "direct lending" OR "private debt" OR BDC)',

  overview: {
    definition: "Private credit is lending done by investment funds instead of banks: loans negotiated directly between a borrower (usually a private-equity-owned company) and a fund, never syndicated, never traded, held to maturity. It is the banking system's risk, reassembled outside the banking system's rules.",
    howItWorks: [
      "The core product is the direct loan: a fund lends $50M to $1B+ to a mid-market or sponsor-backed company at floating rates (typically SOFR + 500 to 600bps), senior secured, with covenants and board-level access banks stopped offering. One lender (or a small club) holds the whole loan, so deals close in weeks with certainty: the product private equity actually buys is speed and discretion, and it pays 150 to 300bps over syndicated markets for it.",
      "The structure is the innovation: funds raise locked-up capital from institutions (pensions, insurers, sovereigns), so there is no deposit run risk: the 2023 SVB lesson in reverse. Vehicles span drawdown funds, BDCs (listed business development companies: the retail window), and insurance balance sheets that PE firms increasingly own outright, turning annuity float into captive lending capital: the Apollo-Athene model that reshaped the industry.",
      "Growth came from bank retreat: post-2008 capital rules made leveraged lending expensive for banks, and every crisis since (2020, SVB 2023) accelerated the handoff. AUM reached ~$2T in 2024 with direct lending about 45% of it, and the frontier is expanding beyond buyout debt into asset-based finance (equipment, receivables, consumer, aviation, royalties): a claimed $20T+ addressable pool, now including investment-grade corporates and the AI datacenter buildout.",
      "The debates write themselves: returns have beaten syndicated markets with remarkably few marked losses, which is either genuine illiquidity-and-selection premium or marks that have not met a real default cycle. PIK interest (paying with more debt) is rising, banks now finance the funds that displaced them (the risk returned one step removed), and regulators openly wonder where the next cycle's losses actually live."
    ],
    history: [
      { era: "1980s-2000s", title: "Mezzanine prehistory", text: "Junior capital funds and BDCs exist at boutique scale; banks own middle-market lending." },
      { era: "2008-2012", title: "The regulatory gift", text: "Basel III and leveraged-lending guidance push banks out; credit funds pick up what capital rules stranded." },
      { era: "2013-2019", title: "Direct lending scales", text: "Unitranche loans replace syndicates in mid-market LBOs; Ares/Owl-class platforms institutionalize; dry powder compounds." },
      { era: "2020-2022", title: "Stress tests passed (small ones)", text: "COVID and the 2022 rate shock: floating-rate loans outperform bonds; the asset class markets itself as all-weather." },
      { era: "2023-present", title: "The $2T mainstream", text: "SVB pushes more lending out of banks; insurance capital pours in; banks partner with the funds; asset-based finance and IG corporates become the next land grab. Fed and IMF start writing the systemic-risk papers." }
    ],
    trends: [
      { title: "Insurance capital fusion", direction: "up", text: "PE-owned insurers channel annuity float into affiliated credit: permanent capital at scale, and the decade's biggest regulatory question." },
      { title: "Asset-based finance land grab", direction: "up", text: "Beyond LBO debt into equipment, consumer, aviation, royalties, and datacenter financing: the '$20T addressable' pitch deck era." },
      { title: "Bank partnerships", direction: "shift", text: "If you can't beat them: banks originate and sell to funds, or lend to the funds (subscription and NAV lines): risk migrates, relationships remain." },
      { title: "Retail democratization", direction: "up", text: "Interval funds, BDCs, and ETF attempts open the asset class to individuals: liquidity promises meeting illiquid assets, the oldest story in finance." },
      { title: "PIK accumulation", direction: "down", text: "Rising payment-in-kind interest and amendment activity: stress absorbing quietly into marks rather than defaults, so far." }
    ],
    outlook: "Structural growth with an untested core: the bank-to-fund migration is real, sticky, and probably heading toward $5T, while the asset class's defining claim (better risk-adjusted returns with lower volatility) awaits its first full default cycle at scale. The winners are the platforms with origination breadth, permanent capital, and workout muscle; the reckoning, when it comes, will be about vintage discipline and where the leverage quietly stacked."
  },

  structure: {
    suppliers: [
      { name: "LPs: pensions, endowments, sovereigns", note: "The locked-up capital base chasing yield with less mark-to-market" },
      { name: "Insurance balance sheets", note: "Annuity float: the permanent-capital engine (Athene-model)" },
      { name: "Banks (ironically)", note: "Subscription lines, NAV loans, and fund leverage: financing their own displacement" },
      { name: "Retail (new)", note: "BDCs and interval funds: the democratization channel" }
    ],
    producers: [
      { name: "Mega-platforms (Apollo, Ares, Blackstone Credit, Blue Owl, Oaktree)", note: "Multi-hundred-billion credit arms; origination is the moat" },
      { name: "Mid-market specialists", note: "Sector and size niches where selection still differentiates" },
      { name: "BDCs (listed)", note: "The public wrapper: FS/ARCC-class vehicles with daily prices on illiquid books" },
      { name: "Bank JVs & platforms", note: "Originate-to-fund partnerships stitching the old and new systems" }
    ],
    distributors: [
      { name: "Placement agents & consultants", note: "The institutional gatekeepers" },
      { name: "Wealth platforms", note: "Private-markets allocations reaching advisors and individuals" }
    ],
    customers: [
      { name: "PE-sponsored companies", note: "The core borrower: LBO and add-on financing at speed" },
      { name: "Mid-market corporates (non-sponsored)", note: "Companies too small or too complex for syndicated markets" },
      { name: "Asset owners (ABF)", note: "Aircraft, equipment, receivables, consumer books, datacenters" },
      { name: "Investment-grade corporates (new)", note: "Bespoke IG private placements: the frontier" }
    ],
    regulators: [
      { name: "SEC (funds, BDCs)", note: "Disclosure and valuation oversight: lighter than bank capital rules by design" },
      { name: "Fed / FSB / IMF (watching)", note: "Systemic-risk monitoring: the papers precede the rules" },
      { name: "Insurance regulators (NAIC)", note: "The affiliated-asset question: annuities funding sponsor deals" }
    ],
    capital: [
      { name: "Drawdown funds (7-10yr locks)", note: "The classic structure: no run risk by construction" },
      { name: "Permanent capital (insurance, BDCs)", note: "The strategic prize: fee streams without fundraising cycles" },
      { name: "Fund-level leverage", note: "0.5x to 1.5x at the vehicle: the quiet amplifier" }
    ]
  },

  valueChain: {
    intro: "From pension commitment to a covenant negotiation in a Delaware conference room. The chain is short by design: that is the product.",
    stages: [
      { id: "raise", name: "Capital formation", what: "LP commitments, insurance float, BDC raises", players: "IR teams, consultants, wealth platforms", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 3 },
        linksTo: ["insurance", "asset-management", "wealth-management"],
        deeper: "Fee economics start here: 1 to 1.5% management on invested (not committed) capital plus 10 to 15% carry over a 5 to 7% hurdle: gentler than PE's 2-and-20, at 3x the asset scale. Permanent capital vehicles are the endgame: fees forever, no re-raise risk." },
      { id: "originate", name: "Origination", what: "Sourcing loans: sponsor coverage, bank partnerships, direct", players: "Platform origination armies", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 4 },
        linksTo: ["private-equity", "investment-banking", "banking"],
        deeper: "The real moat: seeing every deal. Mega-platforms cover every sponsor and increasingly buy origination (consumer lenders, equipment financiers) outright. In credit, unlike equities, you cannot buy what you never saw." },
      { id: "underwrite", name: "Underwriting & structuring", what: "Diligence, docs, covenants, pricing", players: "Deal teams + lawyers", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 2 },
        linksTo: ["banking", "private-equity"],
        deeper: "Where the risk is actually priced: leverage (5x to 6.5x EBITDA typical), covenants (real ones, unlike syndicated cov-lite), and EBITDA-adjustment skepticism. Vintage discipline here decides who survives the cycle; 2021's underwriting is the cohort everyone watches." },
      { id: "hold", name: "Portfolio & monitoring", what: "Quarterly marks, amendments, board seats", players: "Portfolio teams, valuation agents", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 2 },
        linksTo: ["capital-markets"],
        deeper: "The controversial part: loans are marked by models, not markets. Smooth marks are the asset class's selling point and its critics' exhibit A. PIK conversions and amendments happen here, quietly." },
      { id: "workout", name: "Workouts & recovery", what: "Restructuring when it goes wrong", players: "Workout specialists", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 3 },
        linksTo: ["private-equity"],
        deeper: "The untested muscle at scale: single-lender workouts are faster and quieter than syndicate brawls (the pitch), but recoveries across a real default cycle are the asset class's great unknown. Lender-on-lender violence (priming, drop-downs) has already arrived from the syndicated world." }
    ]
  },

  financials: {
    businessModel: [
      "Two P&Ls share the label. The FUND earns spread: SOFR + 500-600 on senior direct loans, ~10% to 12% gross unlevered in the 2024 rate regime, minus fees and (rare, so far) losses. The MANAGER earns fees on AUM plus carry: the compounding machine that made credit arms the growth story inside every listed alternative manager. When you buy Apollo-class equity, you are buying the manager economics; when an LP commits, they get the fund's.",
      "The credit math: floating rates mean the borrower absorbs rate risk (2022's gift to lenders became 2023-24's interest-coverage squeeze: coverage ratios fell toward 1.5x across portfolios). Defaults have stayed low while PIK and amendments rose: the bear reading is stress deferred into marks; the bull reading is flexible capital doing exactly what it promised. Fund leverage (0.5x to 1.5x) and back-leverage from banks amplify both stories.",
      "Read a platform in this order: origination breadth, vintage discipline (2021 exposure), PIK share and non-accruals trend, permanent-capital mix, then fee-related earnings growth. Read a BDC via NAV trajectory, non-accruals, and price-to-NAV against its history."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 80, capitalIntensity: 15, pricingPower: 60, cyclicality: 55, operatingLeverage: 65 },
    lines: [
      { label: "AUM & FRE (manager)", note: "Fee-related earnings: the multiple's favorite line" },
      { label: "Spread & yield (fund)", note: "SOFR + 500-600 senior; watch spread compression as capital floods in" },
      { label: "Interest coverage (borrowers)", note: "~1.5x and the cycle's stress gauge" },
      { label: "PIK share & non-accruals", note: "The quiet-stress dashboard" },
      { label: "Net IRR by vintage", note: "The only scoreboard that survives the cycle" }
    ],
    unitEconomics: {
      unit: "per $100M senior direct loan (illustrative, 2024 regime)",
      items: [
        { label: "Coupon", value: "SOFR + 550 (~10%)", note: "floating; plus 2 to 3 pts upfront fees (OID)" },
        { label: "Expected loss (benign years)", value: "< 1%", note: "the number the cycle will audit" },
        { label: "Manager take", value: "~1.25% mgmt + 12.5% carry over hurdle", note: "on invested capital" },
        { label: "LP net return target", value: "9% to 12% unlevered", note: "levered sleeves target mid-teens" }
      ]
    }
  },

  kpiRefs: ["bank-nim", "bank-npl", "am-feerate", "am-netflows"],
  kpiLocal: [
    {
      id: "pc-pik", name: "PIK Share & Non-Accruals", industries: ["private-credit"],
      definition: "The share of portfolio income paid in kind (added to principal instead of cash) and loans no longer accruing income.",
      formula: "PIK share = PIK income ÷ total investment income; Non-accruals = fair value of non-accrual loans ÷ portfolio",
      interpretation: "Private credit's stress speaks softly: before defaults, coupons convert to PIK and amendments extend. Rising PIK is the cycle arriving in disguise.",
      healthy: "PIK < 6% of income; non-accruals < 2%", warning: "PIK > 10% or non-accruals > 3.5% and rising",
      benchmark: { median: "Public BDC PIK income ~8% to 10% and drifting up (asOf 2024-25 disclosures)" },
      investorLens: "The best early-warning line in BDC filings; smooth NAVs with rising PIK are the tell.",
      operatorLens: "Amendment capacity is the franchise: flexible capital is the pitch, PIK discipline is the practice.",
      mistakes: ["Reading low defaults as low stress; single-lender loans restructure privately long before a 'default' prints."],
      trend: "Drifting upward across the industry since the 2023-24 coverage squeeze."
    }
  ],

  health: {
    intro: "Platform health is origination breadth, vintage discipline, and capital permanence; fund health is coverage, PIK, and honest marks.",
    pillars: [
      { name: "Origination & selection", weight: 25, metrics: "Deal funnel breadth, sponsor coverage, win-rate discipline", healthy: "Sees the market, declines most of it", warning: "Deploying to keep pace with fundraising" },
      { name: "Vintage & underwriting discipline", weight: 25, metrics: "Leverage at entry, covenant quality, 2021-cohort exposure", healthy: "Real covenants, sober adjusted-EBITDA", warning: "Cov-lite creep and 7x+ entry leverage" },
      { name: "Portfolio stress signals", weight: 20, metrics: "Interest coverage, PIK share, non-accruals, amendment volume", healthy: "Coverage > 1.7x, PIK contained", warning: "Coverage ~1.2x with PIK rising" },
      { name: "Capital structure & permanence", weight: 20, metrics: "Locked vs redeemable capital, fund leverage, insurance mix", healthy: "Long locks, modest leverage", warning: "Retail liquidity promises on illiquid books" },
      { name: "Workout capability", weight: 10, metrics: "Restructuring bench, control experience, recovery record", healthy: "Proven workout muscle", warning: "Never restructured at scale" }
    ],
    scoringNote: "The asset class has not met its exam: score everything against the default cycle that has not happened yet, not the smooth decade that has."
  },

  valuation: {
    intro: "Two valuations for two animals: managers on fee-earnings multiples, vehicles on NAV and yield: and the marks beneath both are the perpetual argument.",
    methods: [
      { name: "P/FRE (managers)", use: "The alt-manager standard: fee-related earnings times a quality multiple, plus carry optionality", avoid: "Blending volatile carry into the fee multiple", strengths: "Prices the annuity fairly", weaknesses: "FRE growth assumes fundraising forever", range: { low: 18, high: 28, asOf: 2024, note: "credit-led managers command premiums on permanence" } },
      { name: "Price / NAV (BDCs)", use: "The vehicle lens: discount/premium to book against history and non-accruals", avoid: "Trusting NAV without auditing PIK and marks", strengths: "Simple, comparable, yield-anchored", weaknesses: "The N is a model output", range: { low: 0.8, high: 1.1, asOf: 2024, note: "quality externally-managed BDCs cluster near 1x; stress trades at 0.7x" } },
      { name: "Spread vs syndicated markets", use: "The relative-value check: private premium over BSL/HY for the same risk", avoid: "Ignoring illiquidity when comparing", strengths: "The honest allocator's frame", weaknesses: "'Same risk' is doing heavy lifting", range: { low: 150, high: 300, asOf: 2024, note: "bps of premium; compressing as capital floods in" } },
      { name: "Net IRR by vintage", use: "The only cycle-proof scoreboard for funds", avoid: "Interim IRRs inflated by subscription lines", strengths: "Reality, eventually", weaknesses: "Arrives years late", range: { low: 8, high: 14, asOf: 2024, note: "% net; dispersion will widen with the first real cycle" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a credit manager the market's way: fee-related earnings times a permanence multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Fee-related earnings ($B)", min: 0.1, max: 6, step: 0.1, value: 1.2, fmt: "money" },
        { id: "vc-mult", label: "P/FRE multiple", min: 12, max: 32, step: 1, value: 22, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 15, step: 0.5, value: 2, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk touches private credit three ways: owning the listed managers (the fee compounders), trading BDCs against NAV and stress signals, and: for allocators: deciding how much illiquid credit premium to harvest. The regime question shadows all three: this is the fastest-scaled asset class in modern finance, and it has never met a default cycle at its current size.",
    debates: [
      { topic: "Illiquidity premium or unmarked risk?", bull: "A decade of delivered net returns above syndicated markets, with covenants, information rights, and workout speed banks and bond funds lost: the premium is structural (origination + selection + illiquidity), not accounting.", bear: "Smooth marks are a feature until they are a fiction: PIK is rising, coverage fell toward 1.5x, and single-lender 'amendments' bury what syndicated markets would price daily. The premium's audit arrives with the first real recession at $2T scale." },
      { topic: "Insurance fusion: permanent capital or systemic wormhole?", bull: "Annuity liabilities are the perfect duration match for private loans; the Athene model funds retirement promises with better yields than public bonds, under real capital rules.", bear: "PE firms originating loans, rating them via captive processes, and funding them with policyholder float is the pre-2008 conflict stack in new wrappers: and the IMF/Fed papers keep saying so politely." },
      { topic: "Bank displacement: secular win or spread cannibalization?", bull: "Capital rules are not reversing; every stress event hands funds more share; ABF and IG open pools far larger than LBO debt: $5T by 2029 is the base case, and the managers' fee streams compound accordingly.", bear: "Capital flooding in is compressing the very spreads that justified the allocation (premiums down 100bps+), banks are re-entering via partnerships on their terms, and fundraising supercycles historically mark return-cycle tops." }
    ],
    cycle: {
      where: "Late innings of the benign era: record AUM and dry powder, spreads compressing, PIK and amendments quietly rising, insurance capital still flooding in: the classic late-cycle pattern of stress accumulating beneath smooth marks.",
      drivers: "Base rates (floating-rate income), PE deal activity (origination volume), credit conditions (the borrowers' health), and the fundraising cycle that sets competitive spread pressure.",
      leads: [
        "BDC quarterly filings: PIK share, non-accruals, NAV marks (the industry's only public windows)",
        "Interest coverage disclosures across sponsor portfolios",
        "Spread trend: private premium vs BSL/high yield (compression = crowding)",
        "Amendment and maturity-wall data (2026-28 refinancing cliff)",
        "Fed/IMF financial-stability reports: the regulatory weather"
      ]
    },
    exposure: [
      { vehicle: "Listed alt managers (Apollo, Ares, Blackstone, Blue Owl class)", note: "The fee-stream compounders: the cleanest public expression" },
      { vehicle: "Quality BDCs (ARCC class)", note: "Yield vehicles: buy discounts to NAV with clean non-accruals, respect the marks question" },
      { vehicle: "LP commitments (allocators)", note: "The direct harvest: manager selection IS the return; vintage diversification is the defense" },
      { vehicle: "Bank partners", note: "The second-order trade: banks earning fees on origination without the capital charge" },
      { vehicle: "Short book (stress names)", note: "BDCs with rising PIK + premium NAVs: the asymmetry when the cycle arrives" }
    ],
    catalysts: [
      { when: "Quarterly BDC filings (Feb/May/Aug/Nov)", what: "The public stress dashboard: PIK, non-accruals, NAV marks" },
      { when: "Alt-manager earnings", what: "FRE growth, fundraising, deployment pace: the fee-machine scoreboard" },
      { when: "Fed SLOOS + financial stability reports", what: "The regulatory temperature on the bank-fund nexus" },
      { when: "The 2026-2028 maturity wall", what: "The refinancing test of 2021-vintage underwriting" }
    ],
    data: [
      { series: "BDC filings (10-Qs)", source: "SEC EDGAR (free)", why: "Loan-level windows into an otherwise dark market" },
      { series: "Fed notes & FSB reports on private credit", source: "federalreserve.gov / fsb.org (free)", why: "The systemic-risk literature, primary source" },
      { series: "Preqin/PitchBook press summaries", source: "free releases", why: "AUM, dry powder, and fundraising tallies" },
      { series: "Lincoln/KBRA mid-market indices", source: "free summaries", why: "Coverage ratios and default proxies for the private book" }
    ],
    playbook: [
      { regime: "Rates rising", behavior: "Income up (floating rates), borrower stress up with a lag: the 2022-24 sequence. Managers win; weak borrowers accumulate PIK." },
      { regime: "Rates falling", behavior: "Income compresses but coverage relief arrives; deployment (PE deals) reaccelerates: net positive for the managers' flywheel." },
      { regime: "Recession", behavior: "The untaken exam: expect defaults to print later and lower than public markets (amendments first), NAVs to lag reality, and dispersion between platforms to finally appear. Manager equities trade like high-beta financials regardless." },
      { regime: "Risk-off / credit stress", behavior: "Listed managers and BDCs gap with credit spreads even when marks do not; permanent capital prevents forced selling: the structure works, the stocks still fall." }
    ]
  },

  players: [
    { name: "Apollo / Athene", role: "The insurance-fusion pioneer", country: "US", real: true, note: "~$600B credit; annuity float as permanent lending capital: the model everyone copied" },
    { name: "Ares Management", role: "Direct lending's standard-bearer", country: "US", real: true, note: "The largest direct-lending franchise; ARCC is the BDC benchmark" },
    { name: "Blackstone Credit / Blue Owl / Oaktree", role: "The mega-platform cohort", country: "US", real: true, note: "Scale origination across corporate and asset-based credit" },
    { name: "Golub / HPS / Sixth Street", role: "The specialists-at-scale", country: "US", real: true, note: "Sponsor-finance depth; HPS's sale to BlackRock marked the consolidation era" },
    { name: "BlackRock (post-HPS)", role: "Traditional AM's entry", country: "US", real: true, note: "The $12T manager buying its way into private credit" },
    { name: "Banks (JPMorgan, Goldman)", role: "The displaced, re-entering", country: "US", real: true, note: "Partnership programs and fund financing: if you can't hold it, finance it" }
  ],

  geography: [
    { country: "US", role: "~70% of global AUM", note: "The deepest sponsor ecosystem and the retreating-bank gift" },
    { country: "UK", role: "Europe's hub", note: "Direct lending's second market; London documents the continent" },
    { country: "DE", role: "The bank-dominated frontier", note: "Mittelstand lending slowly opening to funds" },
    { country: "SG", role: "Asia's beachhead", note: "Regional private credit forming around family and sponsor capital" }
  ],

  cycles: [
    { year: 2008, title: "The founding gift", kind: "shift", text: "Bank retreat under new capital rules hands funds the middle market. Lesson: regulation reallocates risk; it rarely eliminates it." },
    { year: 2016, title: "The energy mini-test", kind: "bust", text: "Oil-patch direct loans crack; recoveries vary wildly by lender. Lesson: workout skill, not underwriting slogans, separates platforms." },
    { year: 2020, title: "COVID's pass", kind: "shift", text: "Amendments and sponsor equity cures avert defaults; the asset class claims all-weather status. Lesson: flexible capital works: in a crisis that lasts a quarter." },
    { year: 2022, title: "The floating-rate windfall", kind: "boom", text: "Rate hikes crush bonds while private-credit income rises: the marketing moment of the decade. Lesson: someone pays for the windfall: the borrowers, with a lag." },
    { year: 2023, title: "SVB accelerates the migration", kind: "boom", text: "Bank stress sends more lending to funds; insurance capital floods in; the Fed starts publishing worry-papers. Lesson: every banking crisis is a private-credit fundraise." }
  ],

  risks: [
    { name: "The untested default cycle", severity: 4, likelihood: 3, transmission: "A real recession at $2T scale → coverage breaks → PIK and amendments give way to restructurings → dispersion between marks and recoveries reprices the asset class and its managers." },
    { name: "Spread compression / crowding", severity: 3, likelihood: 4, transmission: "Capital inflows outrun origination → premiums over syndicated markets compress → the return case erodes exactly as risk peaks: the classic late-cycle trade-down in quality." },
    { name: "Insurance-nexus regulation", severity: 3, likelihood: 3, transmission: "NAIC/Fed action on affiliated assets and captive ratings → the permanent-capital engine throttles → manager growth stories reprice." },
    { name: "Liquidity mismatch at the retail edge", severity: 3, likelihood: 2, transmission: "Interval-fund gates in stress → headline contagion to the whole asset class → fundraising freezes (the UK property-fund pattern, in credit)." },
    { name: "Bank-fund interconnection", severity: 3, likelihood: 2, transmission: "Fund leverage and NAV lines route stress back into banks → the risk that 'left' the system returns through the financing door." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Private credit means investment funds, not banks, lending money to companies: directly negotiated loans the fund keeps until repaid. Pensions and insurers supply the money; private-equity-owned companies borrow most of it. It grew huge (~$2 trillion) because rules made the same loans expensive for banks to hold."] },
    L2: { title: "Intermediate", text: ["The core product: senior secured floating-rate loans at SOFR + 500-600 to sponsor-backed mid-market companies: one lender, real covenants, weeks to close. Structures: drawdown funds (locked capital), BDCs (listed vehicles), and insurance balance sheets. The manager earns fees + carry; the fund earns spread minus losses: two different investments sharing one label."] },
    L3: { title: "Advanced", text: ["Analysis: origination breadth (the moat), vintage discipline, interest coverage (~1.5x now), PIK share and non-accruals (stress speaks softly here), capital permanence, and workout capability. Valuation: P/FRE for managers, price/NAV for BDCs, spread-vs-syndicated for allocators. The marks debate: model-priced loans mean volatility is hidden, not absent."] },
    L4: { title: "Expert", text: ["The regime: late benign-cycle: record dry powder compressing spreads, PIK drifting up, insurance fusion scaling, banks re-entering via partnerships, and the 2026-28 maturity wall as the scheduled exam of 2021 underwriting. Trade BDC filings as the public stress dashboard; treat Fed/IMF stability papers as the regulatory clock. ABF and IG expansion are the growth story; conflicts and captive ratings are its shadow."] },
    L5: { title: "Institutional", text: ["Allocator's frame: private credit is a genuine structural reallocation (bank balance sheet → fund capital) offering a harvestable premium: IF manager selection, vintage diversification, and honesty about smoothed marks are taken seriously. Own the listed managers for the fee compounding; commit to platforms with workout scars, not just origination machines. The system-level question: whether moving maturity-transformation risk out of banks made finance safer or just quieter: is the one every stability regulator is now paid to answer."] }
  },

  quiz: [
    { q: "Private credit's core product is:", choices: ["Public bonds", "Directly negotiated, held-to-maturity floating-rate loans (typically SOFR + 500-600) to sponsor-backed companies", "Mortgages", "Credit cards"], answer: 1, explain: "One lender, senior secured, real covenants, weeks to close: speed and certainty are what borrowers pay the premium for." },
    { q: "The asset class scaled to ~$2T primarily because:", choices: ["Banks got greedy", "Post-2008 capital rules pushed banks out of leveraged lending; funds with locked capital picked it up", "Rates were zero", "Retail demand"], answer: 1, explain: "Regulation reallocated the risk: every subsequent bank stress (2020, SVB 2023) accelerated the migration." },
    { q: "Rising PIK interest across portfolios signals:", choices: ["Strong growth", "Borrowers conserving cash: stress absorbing quietly before any default prints", "Higher recoveries", "Lower fees"], answer: 1, explain: "Paying interest with more debt is the private market's soft-default; it shows up quarters before non-accruals do." },
    { q: "The Apollo-Athene model fused private credit with:", choices: ["Crypto", "Annuity insurance float: permanent capital funding affiliated lending", "Hedge funds", "Real estate"], answer: 1, explain: "Policyholder liabilities as duration-matched lending capital: the industry's engine and its biggest regulatory question." },
    { q: "'Smooth returns' in private credit partly reflect:", choices: ["No risk", "Model-based quarterly marks rather than daily market prices: volatility hidden, not absent", "Government guarantees", "Hedging"], answer: 1, explain: "The marks debate: single-lender loans reprice privately through amendments; the first full default cycle audits the smoothness." },
    { q: "A BDC trading at 0.75x NAV with rising non-accruals is:", choices: ["A clear bargain", "Pricing the marks question: the discount is the market's verdict on the model-NAV", "Impossible", "A bank"], answer: 1, explain: "Price/NAV discounts encode distrust of the marks; clean books trade near 1x, stress trades at the discount." },
    { q: "Floating-rate loans in 2022's hikes meant:", choices: ["Fund losses", "Fund income rose while borrowers' interest coverage fell toward ~1.5x: the windfall had a payer", "Nothing changed", "Defaults spiked immediately"], answer: 1, explain: "The lenders' gift was the borrowers' squeeze: coverage compression is the cycle's slow fuse." },
    { q: "Banks now relate to private credit mostly as:", choices: ["Ignoring it", "Partners and financiers: originating for funds and lending TO them, so the risk returns one step removed", "Regulators", "Borrowers"], answer: 1, explain: "Subscription lines, NAV loans, and origination JVs stitch the systems together: the interconnection regulators keep writing about." }
  ],

  sources: [
    { name: "Fed note: private credit growth (~$2T)", url: "https://www.federalreserve.gov/econres/notes/feds-notes/private-credit-growth-and-monetary-policy-transmission-20240802.html", feeds: "market size, systemic analysis" },
    { name: "Morgan Stanley: $5T by 2029 outlook", url: "https://www.morganstanley.com/ideas/private-credit-outlook-considerations", feeds: "growth forecast" },
    { name: "Moody's private credit outlook", url: "https://www.moodys.com/web/en/us/insights/credit-risk/outlooks/private-credit-2025.html", feeds: "credit trends" },
    { name: "BDC filings", url: "https://www.sec.gov", feeds: "portfolio-level stress data" }
  ]
};
