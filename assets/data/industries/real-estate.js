/* Industry Atlas - REAL ESTATE (full module, research-backed)
 * Anchors: global real estate worth $393.3T at end-2024, ~4x global GDP, the
 * world's largest asset class; commercial $58.5T, residential ~$269T (Savills,
 * 2025). US office vacancy hit a record ~19.6% in Q1 2025 (Moody's) and office
 * CMBS delinquency re-spiked to ~10.6-11.7% in 2025, at or above GFC-era peaks
 * (Trepp via Wolf Street). ~$957B of US CRE mortgages matured in 2025, near 3x
 * the 20-year average (MBA). North America data center vacancy fell to a record
 * ~1.6% in H1 2025 with record absorption and ~75% of construction preleased
 * (CBRE). US listed REITs: ~$1.4T equity market cap, ~$4.5T gross assets owned,
 * ~170M Americans in REIT-owning households (Nareit, 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["real-estate"] = {
  meta: {
    id: "real-estate", name: "Real Estate", sector: "real-assets", status: "full",
    tagline: "The world's largest asset class ($393T) repricing to a higher cost of capital: one lease, one refinancing, one appraisal at a time.",
    marketSize: { value: 393, unit: "$T", asOf: 2024, note: "Savills estimate of all global property value; commercial ~$58.5T, residential ~$269T, the rest agricultural land" },
    cagr: { value: 4, range: [2, 5], horizon: "2024-2030" },
    maturity: "mature", cyclicality: 4, capitalIntensity: 5, regulation: 4, disruption: 2
  },
  newsQuery: '("commercial real estate" OR REIT OR "cap rates" OR "office vacancy" OR "housing market" OR CMBS OR "data center leasing")',

  overview: {
    definition: "Real estate is the business of owning, developing, financing, and operating the built world: homes, offices, warehouses, malls, apartments, hotels, and now data centers. At $393T it is the largest store of wealth on Earth, roughly 4x global GDP and bigger than global equities and bonds combined (Savills, end-2024).",
    howItWorks: [
      "Strip away the buildings and real estate is a bond with an operating business attached. A property's value is its net operating income (NOI) divided by a capitalization rate: the market's required unlevered yield, priced off the risk-free rate plus spreads for sector, credit, and lease risk. Because almost every deal carries 50% to 70% debt, small moves in rates and cap rates produce violent moves in equity: a 100bps cap-rate expansion cuts a levered equity position by a third or more. The 2022-2024 rate shock, the fastest hiking cycle in 4 decades, pushed cap rates up roughly 100 to 200bps and US commercial values down about 20% from their 2022 peaks before stabilizing in 2025.",
      "Ownership splits into 2 worlds. Residential ($269T globally) is mostly household-owned, financed by the 30-year mortgage machine (in the US: Fannie, Freddie, and the banks), and traded through fragmented brokerage. Commercial ($58.5T) is increasingly institutional: listed REITs (~$1.4T of US equity market cap owning ~$4.5T of gross assets), private equity megafunds (Blackstone is the world's largest owner), pensions, sovereign funds, and insurers. The REIT wrapper, invented by Congress in 1960, exempts corporate tax if ~90% of taxable income is paid out: it turned buildings into dividend-paying stocks that ~170M Americans now hold, mostly through retirement accounts (Nareit, 2025).",
      "The capital stack is the industry's real product. Equity sits under mezzanine under senior mortgages, which are held by banks (with small and regional banks heavily concentrated in CRE), securitized into CMBS, guaranteed by housing agencies, or written by insurers and private debt funds. Debt is why real estate cycles are credit cycles: ~$957B of US commercial mortgages matured in 2025 alone, nearly 3x the 20-year average (MBA), forcing loans written at 3.5% coupons and peak values to refinance at 6.5%+ against lower appraisals. Lenders' response, extend-and-pretend, spreads the pain over years rather than crystallizing it.",
      "Beneath the aggregate sits the sharpest bifurcation in modern property history. Offices are in a slow-motion depression: US vacancy hit a record ~19.6% in early 2025 and office CMBS delinquency re-spiked to ~10.6-11.7%, at or above the worst levels of the financial crisis (Trepp). Meanwhile data centers are the tightest real estate on the planet: North American vacancy fell to a record ~1.6% in H1 2025, absorption set records 2 years running, and ~75% of everything under construction is preleased by AI and cloud hyperscalers (CBRE). Industrial, rental housing, and senior housing sit on the favored side; commodity office and aging malls on the other. Same asset class, opposite worlds."
    ],
    history: [
      { era: "1930s-1970s", title: "The mortgage machine", text: "The New Deal invents the modern housing system: FHA insurance, Fannie Mae, and the 30-year amortizing mortgage make homeownership a mass asset. The 1960 REIT Act creates the tax wrapper that will eventually securitize the skyline." },
      { era: "1980s-1990s", title: "S&L bust and securitization", text: "Deregulated thrifts binge on CRE lending and collapse; the Resolution Trust Corporation liquidates ~$400B of assets and, in doing so, births the modern CMBS market and the 1990s REIT era: distressed buildings recapitalized as public companies." },
      { era: "2000-2009", title: "The housing bubble", text: "Subprime mortgages, securitization alchemy, and 20%+ annual home-price gains end in the global financial crisis: US home prices fall ~27% peak-to-trough, and real estate credit nearly takes down the world banking system. Lesson written in stone: housing is the financial system." },
      { era: "2010-2021", title: "The ZIRP supercycle", text: "A decade of near-zero rates compresses cap rates to record lows, private equity institutionalizes the asset class (Blackstone becomes the world's largest owner), and yield-starved capital floods in. Logistics and apartments boom on e-commerce and undersupply; a 2021 crescendo prices everything to perfection." },
      { era: "2022-present", title: "The rate reset", text: "The fastest hiking cycle in 40 years resets cap rates and cuts US commercial values ~20%. Remote work hollows out offices (record ~19.6% vacancy, GFC-level CMBS delinquency), China's developer complex defaults (Evergrande), and AI turns data centers into the world's scarcest real estate at ~1.6% vacancy." }
    ],
    trends: [
      { title: "Office repricing", direction: "down", text: "Record ~19.6% US vacancy (Q1 2025) and office CMBS delinquency at ~11%: values on commodity towers are down 50%+ from peak, and the workout wave (conversions, deed-backs, note sales) will run for years." },
      { title: "Data centers as the new core", direction: "up", text: "AI and hyperscaler demand drove North American vacancy to a record ~1.6% with ~75% of construction preleased (CBRE, 2025); power, not land, is the binding constraint, and rents are back to 2011-2012 levels of $200+/kW/month." },
      { title: "The debt wall, extended", direction: "shift", text: "~$957B of US CRE mortgages matured in 2025 (near 3x the 20-year norm); banks extend rather than foreclose, so the reset drips through appraisals and refinancings instead of crashing at once." },
      { title: "Housing shortage economics", direction: "up", text: "A structural deficit of homes in the US and most developed markets keeps rents and homebuilder returns supported even at 7% mortgage rates: supply, not demand, is the broken variable." },
      { title: "Private capital ascendant", direction: "shift", text: "Megafunds, sovereigns, and private credit now set the marginal price of buildings; public REITs, which reprice daily, increasingly trade as the truth-teller leading private marks by 12 to 18 months." }
    ],
    outlook: "The repricing is mostly done; the workout is not. With values down ~20% and cap rates reset, 2025-2027 sets up as a classic early-recovery vintage: transaction volumes thaw, dry powder meets motivated sellers, and NOI growth (not multiple expansion) drives returns. Offices remain a decade-long workout with equity wiped on the commodity tail; data centers, industrial, and rental housing carry the demand story. The swing variable is the long end of the rate curve: real estate is now, visibly, a rates asset."
  },

  structure: {
    suppliers: [
      { name: "Construction & materials (GCs, cement, steel, lumber)", note: "The cost side of every pro forma; construction inflation ran far ahead of rents 2021-2024" },
      { name: "Architects, engineers & entitlement consultants", note: "Zoning and permitting: the slowest, most political input in the chain" },
      { name: "Utilities & power", note: "The new gating supplier: data-center feasibility is now a question for the grid, not the broker" },
      { name: "Proptech & building systems", note: "Property management software, smart-building systems, listing platforms (Zillow, CoStar class)" }
    ],
    producers: [
      { name: "Developers & merchant builders", note: "Take entitlement and construction risk for a development margin; first to die in a credit crunch" },
      { name: "Homebuilders (D.R. Horton, Lennar class)", note: "Manufacture the product America is short of; land-light models re-rated the group" },
      { name: "REITs (Prologis, Equinix, Simon class)", note: "~$1.4T of listed US equity owning ~$4.5T of assets across 12+ property sectors" },
      { name: "Private equity & institutions (Blackstone, Brookfield)", note: "The largest owners; closed-end funds set the marginal bid" }
    ],
    distributors: [
      { name: "Commercial brokerage (CBRE, JLL, Cushman)", note: "Leasing and capital-markets intermediation; fee income tracks transaction volume" },
      { name: "Residential brokerage & portals", note: "NAR's ~5-6% commission structure cracked by 2024 antitrust settlements; portals own the eyeballs" }
    ],
    customers: [
      { name: "Tenants (corporates, retailers, 3PLs, hyperscalers)", note: "The rent payers; credit and lease length define asset quality" },
      { name: "Households", note: "Owners and renters both; housing is the largest line in most family balance sheets" },
      { name: "Governments & institutions", note: "Long-lease anchor tenants and, in downturns, buyers of last resort" }
    ],
    regulators: [
      { name: "Local zoning & planning boards", note: "The true supply regulator: entitlement is where value is created and blocked" },
      { name: "Central banks", note: "Real estate is the economy's rate-transmission mechanism; the Fed sets the cap-rate floor" },
      { name: "FHFA / Fannie / Freddie / FHA", note: "The US housing-finance backstop: ~70% of mortgages touch a federal guarantee" },
      { name: "SEC & bank supervisors", note: "REIT disclosure; Basel rules on bank CRE concentration decide who can lend" }
    ],
    capital: [
      { name: "Banks (especially regional)", note: "The biggest CRE lenders; small banks' outsized CRE concentration is the system's watched risk" },
      { name: "CMBS & agency securitization", note: "Bond-market financing; delinquency prints are the cycle's public thermometer" },
      { name: "Debt funds & insurers", note: "Private credit filling the hole banks left; insurers write long-duration senior loans" },
      { name: "Fund equity (PE, sovereigns, pensions)", note: "Record dry powder waiting on price discovery; denominators fixed by their own marks" }
    ]
  },

  valueChain: {
    intro: "From a zoning hearing to a securitized bond. Value capture concentrates where risk is taken (entitlement, development) and where capital is intermediated (the stack), while long-hold ownership earns bond-plus returns on enormous bases.",
    stages: [
      { id: "land", name: "Land & entitlement", what: "Site control, zoning, permits, land banking", players: "Land bankers, local developers, homebuilders' option books", valueCapture: 4,
        economics: { grossMargin: [30, 60], capitalIntensity: 3, concentration: 1 },
        linksTo: ["government", "agriculture"],
        deeper: "The highest-multiple-on-cost step in the chain: rezoning farmland to residential or industrial can 10x value with no construction. It is also pure political risk: NIMBY boards, environmental review, and multi-year timelines. Homebuilders now control land through options rather than ownership, renting the upside without the balance sheet." },
      { id: "development", name: "Development & construction", what: "Design, build, lease-up: manufacturing buildings", players: "Merchant developers, homebuilders, GC networks", valueCapture: 3,
        economics: { grossMargin: [15, 25], capitalIntensity: 5, concentration: 2 },
        linksTo: ["construction", "cement", "steel"],
        deeper: "Developers target a spread between yield-on-cost and exit cap rate (build to a 7%, sell at a 5.5%). The 2022 reset compressed that spread to zero for offices and kept it wide for data centers. Construction debt is recourse and floating: the reason developer fortunes are made in booms and surrendered in busts." },
      { id: "financing", name: "Debt & the capital stack", what: "Mortgages, CMBS, mezz, construction loans", players: "Banks, agencies, CMBS desks, debt funds, insurers", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 5, concentration: 3 },
        linksTo: ["banking", "capital-markets", "private-credit", "insurance"],
        deeper: "Real estate is the world's largest collateral pool, and the lender usually earns steadier economics than the owner. The 2025 maturity wall (~$957B in the US) is this stage's stress test: loans written at 2021 values and 3.5% coupons meeting 6.5%+ refinancing math. Private debt funds are taking share exactly where bank regulators forced retreat." },
      { id: "ownership", name: "Ownership & asset management", what: "Holding, leasing strategy, capex, portfolio construction", players: "REITs, PE funds, sovereigns, family offices", valueCapture: 3,
        economics: { grossMargin: [55, 70], capitalIntensity: 5, concentration: 2 },
        linksTo: ["private-equity", "asset-management"],
        deeper: "NOI margins of 55-70% look rich but sit on massive capital bases: unlevered returns are bond-like (5-8%), so managers add leverage and operational alpha (lease-up, renovation, densification). Fund managers layer fees on top: the 1.5-and-20 on other people's buildings is often the best business in the stage." },
      { id: "operations", name: "Leasing & property operations", what: "Filling and running buildings: rent, service, retention", players: "Property managers, leasing brokers, facility services", valueCapture: 2,
        economics: { grossMargin: [10, 20], capitalIntensity: 1, concentration: 2 },
        linksTo: ["retail", "logistics", "data-infrastructure"],
        deeper: "The operational grind that determines whether pro formas come true: occupancy, renewals, and expense control. Sector matters more than skill right now: a mediocre data-center operator outperforms a brilliant office one when national vacancies are 1.6% vs ~20%." },
      { id: "transactions", name: "Transactions & services", what: "Brokerage, appraisal, financing advisory, exits", players: "CBRE, JLL, Cushman, appraisers, title insurers", valueCapture: 2,
        economics: { grossMargin: [15, 30], capitalIntensity: 1, concentration: 3 },
        linksTo: ["investment-banking", "capital-markets", "wealth-management"],
        deeper: "Fee businesses geared to volume, not price: the 2022-2024 transaction freeze (volumes down ~50%) crushed capital-markets revenue at the big brokers, while the coming refinancing and workout wave is their recovery trade. Appraisal lag, marks that trail reality by quarters, is the private market's shock absorber and its credibility problem." }
    ]
  },

  financials: {
    businessModel: [
      "The core P&L is rent minus operating expenses (NOI), minus interest, with depreciation as a giant non-cash wedge: which is why the sector reports FFO (funds from operations) instead of EPS. Value creation has exactly 3 sources: NOI growth (contractual escalators, mark-to-market on lease rollover, occupancy gains), cap-rate compression (a gift from the rates market, not management), and leverage (which amplifies both directions). REITs add a distribution constraint: paying out ~90% of taxable income means growth must be externally funded, so the equity's cost of capital vs asset yields governs whether issuance creates or destroys value.",
      "Around the owners sits a fee economy with better returns on capital: brokers earn on volume, managers earn on AUM and promote, homebuilders earn a manufacturing margin (land-light models turned them into double-digit ROE compounders), and lenders earn spread on the world's largest collateral pool. Watch the divides: fixed vs floating debt, maturity ladders vs the 2025-2027 wall, and same-store NOI vs headline growth. In the reset, balance-sheet structure separated survivors from forced sellers more than asset quality did."
    ],
    fingerprint: { grossMargin: 62, recurringRevenue: 85, capitalIntensity: 95, pricingPower: 50, cyclicality: 70, operatingLeverage: 55 },
    lines: [
      { label: "Rental revenue / NOI", note: "The annuity: contractual leases with escalators; same-store NOI is the truth serum" },
      { label: "FFO / AFFO", note: "Cash earnings after backing out depreciation; the REIT sector's EPS" },
      { label: "Development & merchant gains", note: "Lumpy manufacturing profit; the first line to vanish in a credit crunch" },
      { label: "Fee & services income", note: "Brokerage, management, promote: capital-light and volume-geared" },
      { label: "Interest expense & maturities", note: "The line that killed 2022-2024 vintage returns; ladder and hedges are strategy" }
    ],
    unitEconomics: {
      unit: "per $100M stabilized property (illustrative, 2025 math)",
      items: [
        { label: "NOI at a 6% cap rate", value: "$6M/yr", note: "purchase price = NOI / cap rate" },
        { label: "Debt service (60% LTV at ~6.5%)", value: "~$3.9M/yr", note: "leaving ~$2.1M to $40M of equity: ~5% cash-on-cash" },
        { label: "Cap rate +100bps", value: "(14%) value", note: "$100M becomes ~$86M; equity absorbs ~(35%): leverage cuts both ways" },
        { label: "NOI growth +3%/yr", value: "~8-10% levered IRR", note: "the base case: income plus modest growth, no multiple help" }
      ]
    }
  },

  kpiRefs: ["re-caprate", "re-ffo"],
  kpiLocal: [
    {
      id: "re-occupancy", name: "Occupancy / Vacancy Rate", industries: ["real-estate"],
      definition: "Share of leasable space (or units) generating rent; vacancy is its mirror.",
      formula: "Occupancy = leased space / total leasable space; economic occupancy weights by rent actually paid",
      interpretation: "The sector's pulse, and right now its bifurcation gauge: US office vacancy hit a record ~19.6% (Q1 2025) while North American data centers sit at ~1.6%.",
      healthy: "93%+ with positive absorption and rising renewal spreads", warning: "Sub-85%, negative absorption, rising concessions (free rent masking falling effective rents)" },
    {
      id: "re-dscr", name: "DSCR (Debt Service Coverage)", industries: ["real-estate"],
      definition: "NOI divided by annual debt service: the margin of safety between the building's income and its mortgage.",
      formula: "DSCR = NOI / (interest + scheduled amortization)",
      interpretation: "The refinancing cycle's kill switch: loans underwritten at 1.4x on 3.5% coupons can fail 1.0x at 6.5%, forcing equity paydowns, extensions, or default regardless of occupancy.",
      healthy: "1.4x+ with fixed-rate, laddered maturities", warning: "Below 1.2x, floating-rate, or a maturity inside 18 months without a refinancing path" }
  ],

  health: {
    intro: "Owner health is a balance-sheet question first and a real-estate question second: the 2022-2024 reset was survived by maturity ladders, not by architecture.",
    pillars: [
      { name: "Balance sheet & maturity ladder", weight: 30, metrics: "Net debt/EBITDA, fixed vs floating mix, weighted average maturity, DSCR", healthy: "Sub-6x, 80%+ fixed, no maturity cliff, 1.4x+ coverage", warning: "Floating-rate stack meeting the 2025-2027 wall; covenant waivers" },
      { name: "Occupancy & lease quality", weight: 25, metrics: "Occupancy, WALT (lease term), tenant credit, renewal spreads", healthy: "93%+, staggered expiries, positive re-leasing spreads", warning: "Concentrated rollovers, concessions rising, watch-list tenants" },
      { name: "Same-store NOI growth", weight: 20, metrics: "Organic NOI, escalators vs expense inflation (taxes, insurance)", healthy: "3%+ with expenses contained", warning: "Insurance and tax inflation eating escalators (the Sun Belt trap)" },
      { name: "Cost of capital vs asset yields", weight: 15, metrics: "Implied cap rate vs private marks, NAV premium/discount, spread to debt cost", healthy: "Equity trading at/above NAV, accretive issuance possible", warning: "Deep NAV discounts forcing shrinkage; negative leverage (debt cost above cap rate)" },
      { name: "Pipeline & capex discipline", weight: 10, metrics: "Development yield-on-cost spread, preleasing, deferred capex", healthy: "150bps+ spread to exit caps, majority preleased", warning: "Spec development late-cycle; capex starvation dressing up FFO" }
    ],
    scoringNote: "Grade the liabilities before the assets: in real estate, insolvency almost always arrives through the maturity schedule, not the rent roll."
  },

  valuation: {
    intro: "Four lenses, one asset: the direct-cap value of the income, the sum of the parts (NAV), the cash-flow multiple (FFO), and the through-cycle IRR. Public and private answers currently disagree, which is itself the trade.",
    methods: [
      { name: "Direct capitalization (NOI / cap rate)", use: "Single stabilized assets; the industry's native language", avoid: "Transitional assets (lease-up, redevelopment) where NOI is not yet real", strengths: "Simple, universal, marks straight off comparable trades", weaknesses: "One-number sensitivity: 50bps moves values ~8-10%; comps freeze when volumes do", range: { low: 4, high: 9, asOf: 2025, note: "% cap rates: prime industrial/apartments at the low end, commodity office at or above the high end" } },
      { name: "NAV (net asset value)", use: "REITs: mark the portfolio to private-market value, net the debt", avoid: "When private marks are stale; NAV inherits appraisal lag", strengths: "Sum-of-parts discipline; flags public/private arbitrage (privatizations, buybacks)", weaknesses: "The marks are opinions; NAV discounts can persist for years", range: { low: -25, high: 10, asOf: 2025, note: "% premium/(discount) to NAV across US REIT sectors; office at the deep-discount end" } },
      { name: "P/FFO or P/AFFO multiple", use: "Cross-REIT comparison on cash earnings", avoid: "Companies capitalizing heavy recurring capex (AFFO catches what FFO misses)", strengths: "The sector's P/E; growth-adjusted screens work", weaknesses: "Ignores balance-sheet risk unless you force it in", range: { low: 10, high: 22, asOf: 2025, note: "x AFFO; data centers/towers at the top, office at the bottom" } },
      { name: "Unlevered DCF / IRR", use: "Institutional underwriting: 10-year hold, exit cap, itemized capex", avoid: "False precision; the exit cap assumption IS the answer", strengths: "Forces explicit rent, rollover, and capex views", weaknesses: "Garbage in, garbage out with 10 years of compounding", range: { low: 6, high: 12, asOf: 2025, note: "% unlevered IRR targets: core at the low end, opportunistic underwriting mid-teens levered" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a property or portfolio the way the market does: stabilized NOI times an NOI multiple (100 / cap rate: a 6% cap = 16.7x), minus net debt, equals equity value.",
      inputs: [
        { id: "vc-noi", label: "Stabilized NOI ($M)", min: 1, max: 100, step: 1, value: 12, fmt: "money" },
        { id: "vc-mult", label: "NOI multiple (100 / cap rate)", min: 8, max: 25, step: 0.5, value: 16.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($M)", min: 0, max: 250, step: 5, value: 110, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats real estate as a rates-plus-credit asset with a demand overlay: long the structurally short sectors (rental housing, industrial, data centers) through the listed REITs that already repriced, underwrite the debt wall as opportunity (credit and workout capital), and touch office only at basis levels where the equity math starts from land value. Public REITs lead private marks by 12 to 18 months: trade the lag, do not argue with it.",
    debates: [
      { topic: "Office: generational value or terminal decline?", bull: "The best towers are already scarce again: flight-to-quality rents are at records, sub-replacement-cost pricing means nothing new gets built for a decade, and record ~20% vacancy is an average hiding a leased-up premium tier. Buying trophy office at a 50%+ discount to 2019 is the classic hated-vintage trade.", bear: "Utilization never recovered: hybrid work is a permanent 20-30% demand haircut, and the vacancy record keeps printing 3 years into 'return to office.' Commodity towers are worth land minus demolition; the CMBS market (delinquency at GFC levels) is telling you the equity is gone, and conversions pencil for maybe 10-15% of stock." },
      { topic: "Data centers: durable core asset or the next overbuild?", bull: "Record-low ~1.6% vacancy with ~75% of construction preleased is the tightest supply-demand in any property type ever measured; power scarcity gates supply for years, and hyperscaler credit signs 15-year leases. This is the rare real estate with secular demand growth: infrastructure economics in a property wrapper.", bear: "Single-industry tenant concentration is the definition of specialty-asset risk: if AI capex digests (every capex supercycle has), preleasing evaporates and you own windowless boxes built for one use. Depreciation is understated (chips move faster than shells), and today's $200+/kW rents are the cycle's peak print." },
      { topic: "Is the private-market mark-down finished?", bull: "Transaction volumes are thawing, public REITs bottomed and re-rated first (as always), values are down ~20% and bid-ask spreads are closing: 2025-2027 is a classic early-recovery vintage, and record dry powder plus a functioning CMBS market puts a floor under prices.", bear: "Extend-and-pretend has deferred, not resolved, the reckoning: the maturity wall rolls forward (~$957B matured in 2025 alone), CMBS distress is still climbing toward mid-teens projections, and if long rates stay at 4.5%+ the old marks are still fiction. Appraisal lag means private funds are quoting prices no buyer will pay." }
    ],
    cycle: {
      where: "Early recovery in the repriced sectors (industrial, housing, data centers), late-stage workout in office and legacy retail: values down ~20% from 2022 peaks and stabilizing, transaction volumes recovering from the freeze, with the 2025-2027 maturity wall still metering out distress.",
      drivers: "The 10-year Treasury (the cap-rate anchor), bank CRE credit appetite, supply pipelines (starts collapsed in 2023-2024, a 2026-2027 rent tailwind), and structural demand shifts: hybrid work, e-commerce, AI power demand, household formation.",
      leads: [
        "10-year Treasury yield and real rates (FRED, free): the cap-rate anchor",
        "Housing starts and permits (Census/FRED, free): the supply valve",
        "Case-Shiller and FHFA home price indices (FRED, free)",
        "CMBS delinquency prints (Trepp and CRED iQ headline data, free summaries)",
        "REIT implied cap rates vs private marks (Nareit T-Tracker, free)"
      ]
    },
    exposure: [
      { vehicle: "Listed equity REITs (sector-specific)", note: "The liquid, already-repriced expression: pick sectors, not 'real estate'" },
      { vehicle: "Homebuilders (D.R. Horton, Lennar class)", note: "The housing-shortage manufacturers: land-light, double-digit ROE, rate-cut torque" },
      { vehicle: "Brokers & services (CBRE, JLL)", note: "Volume-recovery beta with no balance-sheet risk: the transaction thaw trade" },
      { vehicle: "CRE credit (CMBS, debt funds, mortgage REITs)", note: "Lend at reset values and 6%+ coupons: equity-like returns, senior position" },
      { vehicle: "Private funds (opportunistic/distress vintages)", note: "The workout capital: 2025-2027 vintages historically outperform; mind the J-curve and gates" }
    ],
    catalysts: [
      { when: "8x/year (FOMC)", what: "The cap-rate anchor moves: real estate is the most rate-levered equity sector" },
      { when: "Quarterly earnings", what: "REIT FFO guidance, same-store NOI, and leasing spreads: the operating tape" },
      { when: "Monthly", what: "CMBS delinquency and special-servicing prints: the distress thermometer" },
      { when: "Ongoing", what: "Data-center leasing and power deals: the marginal demand story for the decade" }
    ],
    data: [
      { series: "10-year Treasury, mortgage rates, Case-Shiller", source: "FRED (free)", why: "The discount rate and the housing tape in one place" },
      { series: "Housing starts, permits, completions", source: "US Census (free)", why: "The supply pipeline: today's starts are 2027's rent growth" },
      { series: "REIT operating and valuation data (T-Tracker)", source: "Nareit / reit.com (free)", why: "FFO, occupancy, and sector performance for the whole listed universe" },
      { series: "Office vacancy and CMBS delinquency summaries", source: "Moody's CRE and Trepp public releases (free)", why: "The distress cycle's public scoreboard" },
      { series: "Data center supply/demand", source: "CBRE research (free reports)", why: "Vacancy, absorption, and preleasing for the tightest sector" }
    ],
    playbook: [
      { regime: "Rates falling", behavior: "The whole complex re-rates: longest-duration sectors (towers, data centers, net lease) and NAV-discount names move first; homebuilders get affordability torque." },
      { regime: "Recession", behavior: "Defensive leases outperform (apartments, net lease, storage); development and brokerage volumes stall; credit takes the losses. Real estate enters recessions late and exits late." },
      { regime: "Sticky inflation", behavior: "Short-lease sectors (hotels, storage, apartments) reprice fastest and hedge best; fixed long leases without escalators are the losers; replacement cost rises, flattering existing assets." },
      { regime: "Credit crunch", behavior: "Maturity ladders decide survival; extend-and-pretend caps transaction volume; debt funds and unlevered buyers feast. Watch regional-bank CRE stress as the contagion channel." }
    ]
  },

  players: [
    { name: "Blackstone", role: "Largest private owner", country: "US", real: true, note: "Real estate AUM in the $300B class; its buy/sell rotation (logistics in, office out) called the last 2 cycles" },
    { name: "Brookfield", role: "Global owner-operator", country: "CA", real: true, note: "Trophy office, renewables-adjacent infrastructure, and a taste for complexity and leverage" },
    { name: "Prologis", role: "Logistics REIT champion", country: "US", real: true, note: "~1.2B sq ft of warehouses; the e-commerce supply chain's landlord" },
    { name: "Equinix", role: "Data-center REIT", country: "US", real: true, note: "The interconnection franchise riding ~1.6% sector vacancy and AI demand" },
    { name: "Simon Property Group", role: "Mall REIT survivor", country: "US", real: true, note: "A-mall consolidation: proof that within a declining format, the best assets still compound" },
    { name: "CBRE", role: "Services giant", country: "US", real: true, note: "The largest brokerage/management platform: the sector's volume-geared toll collector" },
    { name: "D.R. Horton", role: "Largest US homebuilder", country: "US", real: true, note: "The land-light manufacturing model that re-rated the whole homebuilder group" },
    { name: "Evergrande (cautionary)", role: "The bust case", country: "CN", real: true, note: "$300B+ of liabilities into default and 2024 liquidation: leverage plus presales plus policy reversal" }
  ],

  geography: [
    { country: "US", role: "Deepest institutional market", note: "REITs invented here; ~$1.4T listed, the CMBS market, and the world's pricing benchmark" },
    { country: "CN", role: "The deflating giant", note: "Property built to ~25% of GDP, then the developer defaults (Evergrande, Country Garden): a decade-long unwind" },
    { country: "JP", role: "The low-rate laboratory", note: "Tokyo's deep, liquid market; decades of lessons in what post-bubble real estate looks like" },
    { country: "UK", role: "Global capital's entrepot", note: "London prices global money flows; open-ended fund gatings made it the liquidity-mismatch case study" },
    { country: "DE", role: "Europe's housing market", note: "Listed residential landlords (Vonovia class) and the eurozone's sharpest 2022-2023 repricing" },
    { country: "SG", role: "Asia's REIT hub", note: "S-REIT listings plus GIC/Temasek: sovereign capital's real estate headquarters" }
  ],

  cycles: [
    { year: 1989, title: "S&L collapse", kind: "bust", text: "Deregulated thrifts fund a CRE boom that ends with ~1,000 failed institutions and the RTC liquidating ~$400B, seeding modern CMBS and the 1990s REIT era. Lesson: real estate busts are lending busts wearing hard hats." },
    { year: 2008, title: "The housing crash", kind: "bust", text: "Subprime securitization turns a US housing correction (~27% price decline) into a global banking crisis. Lesson: housing finance is the financial system; leverage on an 'asset that never falls' is how systems break." },
    { year: 2012, title: "The ZIRP supercycle", kind: "boom", text: "A decade of near-zero rates compresses cap rates to records and institutionalizes the asset class; Blackstone-scale funds become the marginal buyer of everything. Lesson: when the discount rate falls for 10 years, everyone looks like a genius: distinguish alpha from duration." },
    { year: 2021, title: "China's developer default", kind: "bust", text: "Evergrande ($300B+ liabilities) and peers default as Beijing's 'three red lines' pop the presale-funded model; the world's biggest construction market enters a structural decline. Lesson: presales are leverage; policy is the cap rate in managed economies." },
    { year: 2022, title: "The rate reset", kind: "shift", text: "The fastest hikes in 40 years push cap rates up 100-200bps, US values down ~20%, and offices into a distress cycle worse than the GFC on CMBS prints, while AI makes data centers the scarcest space on Earth. Lesson: real estate is a rates asset first; the sector you own matters more than the skill you bring." }
  ],

  risks: [
    { name: "Maturity wall / refinancing gap", severity: 4, likelihood: 4, transmission: "~$957B of 2025 maturities rolls forward -> loans fail DSCR at 6.5% coupons -> extensions exhaust, defaults and note sales -> appraisals mark down -> lender appetite tightens further." },
    { name: "Office obsolescence deepens", severity: 4, likelihood: 4, transmission: "Hybrid work persists -> record ~20% vacancy grinds higher on lease expiries -> commodity towers hit land value -> municipal tax bases erode -> urban doom-loop pressure on transit, retail, and city credit." },
    { name: "Regional-bank CRE contagion", severity: 4, likelihood: 2, transmission: "Concentrated small-bank CRE books take losses -> deposit flight and supervisory clampdown -> CRE credit contracts economy-wide -> forced sales reprice even healthy sectors." },
    { name: "Data-center overbuild / AI capex digestion", severity: 3, likelihood: 2, transmission: "Hyperscaler capex pauses -> preleasing evaporates on spec power-shell pipelines -> specialty assets with one tenant type reprice -> the sector's premium multiples compress." },
    { name: "Climate and insurance repricing", severity: 3, likelihood: 4, transmission: "Catastrophe losses reprice premiums -> insurance costs double in exposed markets (Florida, California) -> NOI compresses and some assets become unfinanceable -> values gap down where coverage fails." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Real estate is the world's biggest asset class: all the homes, offices, warehouses, and stores on Earth are worth about $393T, roughly 4x everything the world produces in a year. The business is simple at heart: buy or build a property, rent it out, and pay the mortgage with the rent. Because owners borrow most of the purchase price, small changes in interest rates make property values swing hard: which is exactly what happened when rates jumped in 2022."] },
    L2: { title: "Intermediate", text: ["The core math: a property is worth its net operating income divided by a cap rate (the yield buyers demand). When rates rose 2022-2024, cap rates rose too and US commercial values fell about 20%. The sector then split: offices hit record ~19.6% vacancy with mortgage delinquencies at financial-crisis levels, while data centers hit record-low ~1.6% vacancy on AI demand. REITs (tax-exempt if they pay out ~90% of income) let anyone own this: ~170M Americans hold them through retirement accounts."] },
    L3: { title: "Advanced", text: ["Analyze the liabilities before the assets: fixed vs floating debt, the maturity ladder against the 2025-2027 wall (~$957B matured in 2025 alone), and DSCR at today's coupons decide who survives; the rent roll decides who thrives. Value on 3 lenses at once: direct cap (NOI / cap rate), NAV vs where the stock trades, and P/AFFO against growth. Respect appraisal lag: public REITs reprice 12 to 18 months before private marks, so the listed market is the leading indicator, not the noisy one."] },
    L4: { title: "Expert", text: ["Trade the bifurcation and the lag: sector selection (data centers, industrial, rental housing vs commodity office) dominates security selection, and the public/private mark gap is a harvestable spread via privatizations, NAV-discount activism, and lending against reset values. Live debates: whether trophy office at 50% off is a vintage trade or a value trap, whether ~1.6%-vacancy data centers are infrastructure or a single-tenant capex cycle, and whether extend-and-pretend resolves quietly or rolls into a bank-credit event. The 10-year Treasury is the sector's single factor: position sizing starts there."] },
    L5: { title: "Institutional", text: ["Allocator's frame: real estate is the portfolio's inflation-sensitive duration sleeve, and the 2022 reset restored its risk premium: entry cap rates at 100-200bps above the lows mean forward returns come from income and NOI growth, not multiple expansion. Blend liquid REITs (the price discovery), core private (the income), and 2025-2027 opportunistic/credit vintages (the distress harvest), sized against the illiquidity you can actually carry: gated funds and appraisal smoothing flatter volatility but do not remove it. Structural overweights follow structural shortages: housing, logistics, and power-rich land. Every thesis reduces to one question: what is the durable NOI, and what will the marginal dollar of capital pay for it when you need to sell."] }
  },

  quiz: [
    { q: "Global real estate is worth roughly:", choices: ["$58T", "$393T: about 4x global GDP and the world's largest asset class", "$1.4T", "$957B"], answer: 1, explain: "Savills pegs end-2024 global property at $393.3T: bigger than global equities and bonds combined; ~$269T of it is residential." },
    { q: "A property's value in the industry's native math is:", choices: ["Replacement cost", "NOI divided by the cap rate: income capitalized at the market's required yield", "Square footage times inflation", "Whatever the loan appraisal says"], answer: 1, explain: "Direct capitalization: which is why a 100bps cap-rate move swings values ~10-15%, and why real estate is a rates asset first." },
    { q: "The 2022-2024 rate shock pushed US commercial values:", choices: ["Up 20%", "Down about 20% from 2022 peaks before stabilizing in 2025", "Down 80% everywhere", "Nowhere: leases protected them"], answer: 1, explain: "Cap rates expanded ~100-200bps off record lows; leverage translated that into far larger equity losses on 2021-vintage deals." },
    { q: "By 2025, US office space was:", choices: ["Fully recovered", "At record ~19.6% vacancy with office CMBS delinquency at or above GFC-era levels", "The tightest sector in real estate", "Mostly converted to housing"], answer: 1, explain: "Hybrid work is a structural demand haircut: the bifurcation's losing side, with commodity towers repricing toward land value." },
    { q: "North American data centers in 2025 ran at roughly:", choices: ["20% vacancy", "~1.6% vacancy: a record low, with ~75% of construction preleased", "50% vacancy", "No vacancy data exists"], answer: 1, explain: "AI and hyperscaler demand made data centers the tightest property type ever measured (CBRE); power, not land, gates new supply." },
    { q: "REITs avoid corporate tax by:", choices: ["Registering offshore", "Paying out ~90% of taxable income as dividends: the 1960 wrapper that turned buildings into stocks", "Owning only houses", "Special Fed exemptions"], answer: 1, explain: "The distribution requirement is why REITs fund growth externally: and why ~170M Americans hold real estate through their retirement accounts." },
    { q: "The sector's biggest near-term stress point is:", choices: ["Tenant demand", "The debt wall: ~$957B of US CRE mortgages matured in 2025, near 3x the 20-year average, refinancing into 6.5%+ coupons", "Construction costs", "Property taxes"], answer: 1, explain: "Loans written at 3.5% coupons and peak values must clear today's DSCR math: extend-and-pretend spreads the reckoning across years." },
    { q: "Public REITs vs private real estate marks:", choices: ["Always agree", "Public prices lead private appraisals by 12 to 18 months: appraisal lag smooths private marks", "Private marks lead", "Neither reflects value"], answer: 1, explain: "Listed REITs repriced first in 2022 and re-rated first in the recovery: the liquid market is the leading indicator of the illiquid one." }
  ],

  sources: [
    { name: "Savills Impacts: global real estate value ($393.3T, end-2024)", url: "https://impacts.savills.com/market-trends/how-much-is-global-real-estate-worth.html", feeds: "market size" },
    { name: "CBRE North America Data Center Trends H1 2025 (record ~1.6% vacancy)", url: "https://www.cbre.com/insights/briefs/north-america-data-center-trends-h1-2025-ai-and-hyperscaler-demand-lead-to-record-low-vacancy", feeds: "data-center supply/demand" },
    { name: "Nareit REIT industry data (~$1.4T market cap; ~170M Americans)", url: "https://www.reit.com/data-research/data/reits-numbers", feeds: "REIT structure and stats" },
    { name: "Trepp office CMBS delinquency (~10.6% May 2025, via Wolf Street)", url: "https://wolfstreet.com/2025/05/31/office-cmbs-delinquency-rate-re-spikes-to-10-6-to-worst-levels-of-the-financial-crisis-meltdown/", feeds: "office distress" }
  ]
};
