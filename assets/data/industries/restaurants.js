/* Industry Atlas - RESTAURANTS (full module, research-backed)
 * Anchors: US restaurant sales ~$1.1T and total foodservice ~$1.5T in 2025, 15.9M jobs
 * (NRA State of the Restaurant Industry, Jan 2025); McDonald's ~95% franchised, 4% royalty
 * (5% on new US units from Jan 1, 2024, first hike in ~30 years), rent 8.5-15% of sales
 * and ~64% of franchised revenue (MCD 10-Q/FDD via Restaurant Dive/CNBC, 2023-24);
 * $5 Meal Deal June 2024 and McValue Jan 2025, 15 of 18 QSR brands lost retention in the
 * value wars (Facteus, 2026); DoorDash ~55-67% US delivery share, Uber Eats ~23-30%,
 * 15-30% commissions (Bloomberg Second Measure, 2024); California AB 1228 $20/hr wage
 * April 2024, ~25% labor cost step, CA fast food menus +14.5% Sep 2023-Oct 2024 (CNN,
 * Harvard Shift Project, 2025); Chick-fil-A $22B system sales 2024, ~$9.2M standalone AUV;
 * Raising Cane's $5.1B sales, +33%, $6.6M AUV (QSR Magazine, Restaurant Business, 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["restaurants"] = {
  meta: {
    id: "restaurants", name: "Restaurants", sector: "consumer", status: "full",
    tagline: "A $1.1T industry where the best business is not selling food: it is collecting 4% of everyone who does.",
    marketSize: { value: 1.1, unit: "$T", asOf: 2025, note: "US restaurant sales (NRA forecast); total US foodservice ~$1.5T; global foodservice roughly $3T+" },
    cagr: { value: 4, range: [3, 5], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 3, capitalIntensity: 2, regulation: 3, disruption: 3
  },
  newsQuery: '(McDonalds OR Starbucks OR Chipotle OR "fast food" OR "same-store sales" OR franchisee OR DoorDash OR "restaurant chain")',

  overview: {
    definition: "The restaurant industry converts commodity food, hourly labor, and leased real estate into prepared meals and experiences. Its true product ranges from a $5 meal deal to a tasting menu, but its best economics belong to the franchisors who license brands and collect royalties without cooking anything.",
    howItWorks: [
      "The industry splits into two P&L species that share a dining room. Operators (franchisees, independents, company-owned chains) live on the four-wall math: food ~28-32% of sales, labor ~28-34%, occupancy 6-10%, leaving 10-20% restaurant-level margins in a good year. Franchisors sit above them collecting 4-6% royalties plus advertising fees on system sales they do not operate: McDonald's, ~95% franchised, books rent and royalties at corporate margins operators can only dream about. The franchisor P&L is an annuity; the operator P&L is a knife fight.",
      "McDonald's runs the model's masterclass: it is as much landlord as restaurateur. Beyond the 4% royalty (raised to 5% for new US restaurants from January 1, 2024, the first increase in roughly 30 years), it owns or controls the real estate under most US units and charges franchisees rent of 8.5-15% of gross sales. Rent, not royalties, is the bigger stream: roughly 64% of McDonald's franchised revenue. Add a ~4% advertising contribution and a US franchisee hands over 16-24% of every sales dollar before buying a single bun.",
      "Demand is habitual but hypersensitive to value perception. Americans now spend more at restaurants than at grocery stores, yet the post-2021 menu inflation (CA fast food menus rose 14.5% from September 2023 to October 2024, nearly double the national pace) taught low-income guests to stay home. The 2024-25 value wars were the industry's answer: McDonald's $5 Meal Deal (June 2024), then the McValue platform (January 2025), matched within weeks by nearly every major chain. The traffic came back; the loyalty did not: 15 of 18 major QSR brands had lower customer retention 2 years into the discounting than when it began.",
      "Distribution has been rewired by delivery platforms. DoorDash holds roughly 55-67% of US delivery, Uber Eats 23-30%, and their 15-30% commissions (30-40% all-in with marketing and fees) sit on top of a business whose entire operating margin is often thinner than the take rate. Chains with drive-thrus, apps, and first-party loyalty (the QSR giants) can negotiate or bypass; independents largely cannot. The result is a quiet transfer of the industry's scarcest resource, the customer relationship, from kitchens to platforms."
    ],
    history: [
      { era: "1921-1954", title: "The chain is born", text: "White Castle standardizes the hamburger; Howard Johnson's franchises the roadside; the car creates the drive-in." },
      { era: "1955-1979", title: "The franchise revolution", text: "Ray Kroc franchises McDonald's and Harry Sonneborn adds the real estate insight: the company would be a landlord financed by hamburgers. KFC, Burger King, and Wendy's replicate the playbook nationwide." },
      { era: "1980-2007", title: "Casual dining's golden age", text: "Chili's, Applebee's, Olive Garden, and the sit-down chains conquer the suburbs; QSR goes global as McDonald's becomes shorthand for American capitalism." },
      { era: "2008-2019", title: "Fast casual and the phone", text: "Chipotle proves $2M+ AUVs without franchising; the smartphone brings apps, loyalty, and third-party delivery; casual dining begins a long traffic bleed." },
      { era: "2020-present", title: "Shock and repricing", text: "COVID closes dining rooms and crowns the drive-thru and delivery; stimulus, then inflation, then the 2024-25 value wars; labor law (California's $20 wage) and GLP-1 drugs open new structural questions." }
    ],
    trends: [
      { title: "Value wars attrition", direction: "shift", text: "Discounting since mid-2024 bought traffic, not loyalty: retention fell across 15 of 18 major QSR brands, and the industry is learning that $5 meals reset price expectations downward for years." },
      { title: "Labor cost ratchet", direction: "up", text: "California's $20 fast food wage (April 2024) raised covered labor costs ~25% overnight; a state council can raise it annually. Wages ratchet up and never back down: automation math improves every year." },
      { title: "Chicken beats beef", direction: "up", text: "The chicken wars are the growth story: Chick-fil-A hit $22B in 2024 system sales with ~$9.2M standalone AUVs, Raising Cane's grew 33% to $5.1B, and Wingstop compounds while burger chains discount." },
      { title: "Delivery consolidation", direction: "shift", text: "DoorDash's roughly 2-in-3 share of US delivery makes it the industry's de facto toll road; commissions of 15-30% force operators to reprice menus or build first-party channels." },
      { title: "Digital-first units", direction: "up", text: "Smaller boxes, double drive-thrus, kiosks, and app-only pickup lanes: the new unit template trades dining rooms for throughput, cutting labor hours and capex per dollar of sales." }
    ],
    outlook: "Sales grind higher (~4%/yr, mostly price) on a $1.1T base, but the spoils split unevenly: franchisors with pricing power and unit growth compound like consumer royalties, while operators absorb labor inflation, delivery tolls, and value-war margin pressure. The chicken and beverage growth brands take share from legacy burger and casual dining; the tail of independents keeps churning (roughly 30% fail in year 1). Watch the low-income consumer, state wage councils, and whether GLP-1 adoption dents traffic: the model survives all three, but multiples will not wait for proof."
  },

  structure: {
    suppliers: [
      { name: "Broadline distributors (Sysco, US Foods, PFG)", note: "The industry's logistics backbone: 2 stops a week to 700,000+ US locations" },
      { name: "Food & beverage producers", note: "Proteins, produce, syrup: chains contract years ahead; independents take spot prices" },
      { name: "Equipment & kitchen tech (Middleby class)", note: "Fryers to kiosks: every labor law passed is an equipment sales pitch" },
      { name: "Labor market", note: "The binding input: ~15.9M US workers, the nation's largest teenage employer, chronic turnover of 75-100%/yr" }
    ],
    producers: [
      { name: "Franchisors (McDonald's, Yum!, RBI, Wendy's)", note: "License brands, collect 4-6% royalties: the asset-light annuity" },
      { name: "Company-operated chains (Chipotle, Starbucks, Cane's)", note: "Own the margin and the risk; growth priced like tech when AUVs climb" },
      { name: "Franchisees", note: "From 1-store families to 1,000-unit PE-backed operators: the industry's leveraged working class" },
      { name: "Independents (~50% of units)", note: "The culture, the churn: most of the industry's failures and nearly all its Michelin stars" }
    ],
    distributors: [
      { name: "Delivery platforms (DoorDash, Uber Eats)", note: "15-30% commissions on ~$100B+ of US order flow; the new middlemen" },
      { name: "Drive-thru & first-party apps", note: "70%+ of QSR volume; the channel chains fight to keep unintermediated" }
    ],
    customers: [
      { name: "US consumers", note: "Restaurants now capture over half the US food dollar; visits are habit, tickets are sentiment" },
      { name: "Low-income guests", note: "The QSR swing vote: their 2023-24 pullback started the value wars" },
      { name: "Businesses & institutions", note: "Catering, travel, contract foodservice: the B2B tail" }
    ],
    regulators: [
      { name: "Health departments & FDA", note: "Food safety: one E. coli headline (McDonald's, Oct 2024) can erase a quarter of traffic" },
      { name: "Labor regulators & wage councils", note: "California's Fast Food Council can raise wages annually: a new political price-setter" },
      { name: "FTC & franchise law", note: "FDD disclosure, joint-employer fights, franchisee-protection bills" }
    ],
    capital: [
      { name: "Franchise finance & SBA lending", note: "Unit buildouts at $1.5M-$2.5M each, funded by banks against cash flows" },
      { name: "Whole-business securitization", note: "Franchisors (Wendy's, Domino's class) borrow 5-7x EBITDA against royalty streams" },
      { name: "Private equity", note: "Roll-ups of franchisees and buyouts of brands: restaurants are PE's favorite cash-flow toy" }
    ]
  },

  valueChain: {
    intro: "From farm gate to $5 meal deal. The physical chain runs through farms, trucks, and kitchens; the profit chain runs through brands, real estate, and apps. Value capture is inversely proportional to proximity to the fryer.",
    stages: [
      { id: "inputs", name: "Food supply & distribution", what: "Proteins, produce, packaging, twice-weekly truck drops", players: "Sysco, US Foods, Performance Food Group", valueCapture: 2,
        economics: { grossMargin: [15, 20], capitalIntensity: 3, concentration: 3 },
        linksTo: ["agriculture", "food-beverage", "logistics"],
        deeper: "Broadliners run a scale-and-density game: thin margins, massive volumes, and route economics. Big chains bypass them with dedicated supply chains and locked-in contracts; independents pay spot. Commodity swings (beef, chicken wings, coffee) hit operators with a 1-2 quarter lag." },
      { id: "franchising", name: "Brands & franchising", what: "Licensing the name, menu, and playbook for 4-6% of sales", players: "McDonald's, Yum! Brands, RBI, Domino's", valueCapture: 5,
        economics: { grossMargin: [55, 85], capitalIntensity: 1, concentration: 4 },
        linksTo: ["private-equity", "capital-markets"],
        deeper: "The industry's crown jewels: royalty streams with no food cost, no labor, and contractual escalators. McDonald's moved new-unit royalties from 4% to 5% in 2024, the first hike in ~30 years, and the market barely blinked: that is pricing power. Securitization markets happily lend 5-7x EBITDA against these streams." },
      { id: "realestate", name: "Real estate & development", what: "Sites, drive-thrus, ground leases, new-unit buildouts", players: "McDonald's (landlord), franchisees, NNN REITs", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 2 },
        linksTo: ["real-estate", "construction"],
        deeper: "Sonneborn's insight still runs the industry: control the dirt and the operator can never leave. McDonald's collects 8.5-15% of franchisee sales as rent, roughly 64% of its franchised revenue: a real estate empire with a hamburger attached. For everyone else, the drive-thru pad site is the most fought-over 0.75 acres in American retail." },
      { id: "operations", name: "Restaurant operations", what: "The four walls: cooking, staffing, serving, cleaning", players: "Franchisees, independents, company stores", valueCapture: 2,
        economics: { grossMargin: [15, 25], capitalIntensity: 3, concentration: 1 },
        linksTo: ["retail", "tourism"],
        deeper: "The most fragmented stage in the Atlas: ~750,000 US locations, no operator above ~3% unit share. Restaurant-level margins of 15-25% (Chipotle's ~25% is elite) fund everything above and below. Prime cost (food + labor) near 60% of sales is the discipline line: above 65% and the unit is working for its suppliers." },
      { id: "digital", name: "Digital & delivery", what: "Apps, loyalty, kiosks, third-party delivery", players: "DoorDash, Uber Eats, chain-owned apps", valueCapture: 4,
        economics: { grossMargin: [45, 55], capitalIntensity: 2, concentration: 4 },
        linksTo: ["ecommerce", "payments", "logistics"],
        deeper: "DoorDash's ~55-67% US share makes it the tollbooth: 15-30% commissions (30-40% all-in) on orders from an industry with single-digit operating margins. Chains fight back with 30M+ member loyalty programs and app-only pricing; the data prize is knowing the guest by name before the platform does." },
      { id: "capital", name: "Franchise finance & M&A", what: "Unit lending, securitization, franchisee roll-ups, brand buyouts", players: "Banks, SBA, PE firms, NNN REITs", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 4, concentration: 2 },
        linksTo: ["banking", "private-equity"],
        deeper: "Restaurants are structured-finance friendly: predictable royalties support whole-business securitizations, and franchisee cash flows support leveraged roll-ups (private multiples of 4-8x unit EBITDA). The failure mode is leverage meeting a traffic downturn: large Burger King and Subway franchisees hit bankruptcy in 2023-24 when both arrived at once." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 3 P&Ls. Franchisors: revenue = system sales x royalty rate (+ rent + fees), 40-60% operating margins, minimal capex: earnings compound with unit count and menu-price inflation, which is why they trade like consumer staples with growth. Company operators: revenue = AUV x units, margins live and die on prime cost (food + labor ~60% of sales) and traffic leverage: a 3% comp move swings restaurant margins disproportionately. Franchisees and independents: the same math with leverage on top and no exit multiple.",
      "The unit is the atom: a QSR box costs $1.5M-$2.5M to build and targets $2M-$4M in sales (Chick-fil-A's ~$9.2M standalone AUV is the industry's outlier ceiling) with 15-25% restaurant-level margins, yielding 20-40% cash-on-cash returns when it works. Stack on the franchisor's 16-24% take (royalty + ads + rent at McDonald's) and delivery's 15-30% commission on off-premise orders, and the operator keeps the thinnest slice of the value they cook. Inflation flows through with a lag: menus reprice in quarters, wages ratchet instantly and permanently."
    ],
    fingerprint: { grossMargin: 60, recurringRevenue: 40, capitalIntensity: 40, pricingPower: 45, cyclicality: 55, operatingLeverage: 70 },
    lines: [
      { label: "Same-store sales & traffic", note: "The sector's tape: comps split into price vs traffic; traffic is the truth serum" },
      { label: "Unit growth & AUV", note: "New boxes and their volumes: the franchisor growth algorithm" },
      { label: "Prime cost", note: "Food + labor as % of sales: the operator's survival metric, ~60% is the line" },
      { label: "Royalty & fee streams", note: "Franchisor revenue: system sales x rate, plus rent and ad funds" },
      { label: "Digital & delivery mix", note: "First-party app share vs 15-30% commission third-party volume" }
    ],
    unitEconomics: {
      unit: "per franchised QSR unit (illustrative)",
      items: [
        { label: "Buildout cost / AUV", value: "$1.5M-$2.5M / $2M-$4M", note: "Chick-fil-A standalone AUVs (~$9.2M) are the outlier ceiling" },
        { label: "Prime cost", value: "58-64% of sales", note: "food ~30% + labor ~30%; the discipline line" },
        { label: "Franchisor take", value: "8-24% of sales", note: "royalty 4-6% + ads ~4% + rent 8.5-15% where the franchisor is landlord" },
        { label: "Restaurant-level margin", value: "10-20%", note: "before franchisee G&A and debt service; 20-40% cash-on-cash when it works" }
      ]
    }
  },

  kpiRefs: ["retail-sss", "pay-take-rate"],
  kpiLocal: [
    {
      id: "rest-auv", name: "Average Unit Volume (AUV)", industries: ["restaurants"],
      definition: "Annual sales per restaurant: the industry's productivity yardstick and the ceiling on everything downstream.",
      formula: "AUV = system sales / average unit count (trailing 12 months)",
      interpretation: "High AUVs amortize fixed costs and justify buildouts: Chick-fil-A's ~$9.2M standalone AUV vs a ~$2M QSR norm explains its line out the door and its franchisee waiting list.",
      healthy: "AUV rising faster than menu inflation (real traffic growth)", warning: "AUV growth entirely price-driven while traffic declines"
    },
    {
      id: "rest-prime-cost", name: "Prime Cost Ratio", industries: ["restaurants"],
      definition: "Food plus labor as a share of sales: the two costs an operator controls weekly and the fastest read on unit health.",
      formula: "Prime cost % = (COGS + total labor incl. benefits) / net sales",
      interpretation: "The industry's discipline line sits near 60%. California's $20 wage pushed covered operators' labor line up ~25% overnight: prime cost is where labor law meets the P&L.",
      healthy: "Below 60% with stable food costs", warning: "Above 65%: the unit is working for its suppliers and staff"
    }
  ],

  health: {
    intro: "Franchisor health is system momentum and franchisee solvency; operator health is prime cost and traffic. Both die by the same sword: guests deciding the price is not worth it.",
    pillars: [
      { name: "Traffic & comp quality", weight: 25, metrics: "Same-store sales split (price vs traffic), retention, value perception scores", healthy: "Positive traffic with modest price", warning: "Comps 100% price-driven; traffic negative (the 2024 QSR pattern)" },
      { name: "Unit economics", weight: 25, metrics: "AUV, prime cost, restaurant-level margin, cash-on-cash returns", healthy: "Prime cost under 60%, 20%+ cash-on-cash", warning: "Margins under 12%; new units missing pro formas" },
      { name: "Franchisee health", weight: 20, metrics: "Franchisee EBITDA, leverage, closure and transfer rates, litigation", healthy: "Waiting lists for territories", warning: "Franchisee bankruptcies (Burger King, Subway operators 2023-24)" },
      { name: "Development pipeline", weight: 15, metrics: "Net unit growth, pipeline commitments, buildout cost inflation", healthy: "3-5%+ net unit growth, on-budget builds", warning: "Closures exceeding openings; buildout costs breaking returns" },
      { name: "Digital & balance sheet", weight: 15, metrics: "First-party mix, loyalty membership, leverage vs royalty coverage", healthy: "App/loyalty share rising, delivery on chain's terms", warning: "Third-party dependence over 20% of sales; covenant pressure" }
    ],
    scoringNote: "Weight franchisee health more than the market does: royalty streams look bulletproof until the operators paying them cannot make payroll. Franchisee distress is the franchisor's leading indicator, lagged 2 years."
  },

  valuation: {
    intro: "The market prices the 2 P&L species very differently: franchisors as royalty annuities (premium multiples, securitizable), operators as leveraged retailers (traffic-dependent, cyclical). Confusing the 2 is the sector's classic valuation error.",
    methods: [
      { name: "EV / EBITDA (franchisors)", use: "McDonald's, Yum!, Domino's class: asset-light royalty streams", avoid: "Applying franchisor multiples to companies that actually run restaurants", strengths: "Matches the annuity economics; comparable across brands", weaknesses: "Hides franchisee stress building beneath the royalty line", range: { low: 14, high: 22, asOf: 2025, note: "quality franchisors; hypergrowth names (Wingstop class) trade far above" } },
      { name: "P/E on unit growth (company operators)", use: "Chipotle class: own-store growth compounding", avoid: "Mature operators with no unit story: they deserve retail multiples", strengths: "Captures the reinvestment runway at high returns on capital", weaknesses: "Priced for perfection; a traffic stumble compresses fast", range: { low: 25, high: 45, asOf: 2025, note: "growth operators; casual dining trades at half this" } },
      { name: "Unit-level EBITDA multiple (private M&A)", use: "Franchisee roll-ups, PE deals, independent sales", avoid: "Public-multiple anchoring: private units trade on cash flow durability", strengths: "The ground-truth market: real buyers, real leverage math", weaknesses: "Illiquid, brand-dependent, lease terms move value materially", range: { low: 4, high: 8, asOf: 2025, note: "x unit EBITDA; premium brands and drive-thru sites at the top" } },
      { name: "Royalty-stream DCF / securitization lens", use: "Sanity-checking franchisor value against what debt markets lend", avoid: "Treating ad funds and pass-throughs as ownable cash flow", strengths: "Whole-business securitizations price the annuity directly (5-7x EBITDA of debt)", weaknesses: "Assumes system sales never shrink; Subway's decade says otherwise", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: the debt market's read on royalty durability" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a restaurant name quickly: normalized EBITDA times a model-appropriate multiple (franchisor vs operator), minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.1, max: 15, step: 0.1, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 30, step: 0.5, value: 16, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -2, max: 60, step: 0.5, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays restaurants as a barbell: core the franchisor annuities (royalty streams with inflation pass-through) and the elite unit-growth compounders, avoid the middle (casual dining, discount-dependent QSR equity), and watch franchisee health as the early-warning system. Traffic, not comps, is the tell: price-driven comps are borrowed time.",
    debates: [
      { topic: "Is the franchisor royalty stream really recession-proof?", bull: "System sales are nominal and menu prices never fall: royalties compound through every cycle, McDonald's raised its rate in 2024 for the first time in ~30 years and franchisees still queue for territories. Securitization markets lend against these streams like utilities.", bear: "The stream is only as good as the operators paying it: franchisee margins absorbed the labor ratchet, the value wars, and 8% buildout financing simultaneously, and large operators are already failing (Burger King, Subway franchisees 2023-24). Squeeze the base long enough and the annuity develops credit risk." },
      { topic: "Delivery platforms: demand creators or margin parasites?", bull: "Platforms built a ~$100B+ incremental occasion (late night, office lunch, suburbs without drive-thrus) restaurants could never serve alone; chains that price menus up 15-20% on-platform pass the toll to guests who happily pay for convenience.", bear: "A 15-30% commission (30-40% all-in) against single-digit operating margins is structurally extractive: platforms own the customer data, commoditize the kitchen, and the industry funded its own disintermediation. DoorDash's ~2-in-3 share means the negotiation is over." },
      { topic: "GLP-1 and the calorie recession: noise or structural?", bull: "Adoption is concentrated, appetite suppression moderates over time, and restaurants sell occasions, not just calories: menus will shift to protein and smaller formats as they always adapt. The $1.1T top line barely registers it.", bear: "Double-digit percent of US adults on appetite suppressants is a first-in-history demand shock: fewer visits, smaller tickets, and the marginal casual-dining occasion disappears first. The tail risk is not priced into 20x franchisor multiples." }
    ],
    cycle: {
      where: "Late value-war phase: traffic bought with discounts, retention still below 2024 levels at most major QSR brands, labor costs structurally reset (California's $20 floor), and the low-income consumer still fragile. Franchisor earnings resilient; operator margins at cycle lows.",
      drivers: "Real wage growth vs menu inflation (the value gap), state wage policy, commodity costs (beef, chicken, coffee), unit development costs and financing rates.",
      leads: [
        "Census advance retail sales: food services & drinking places (monthly, free)",
        "BLS CPI: food away from home vs food at home spread (the eat-out incentive)",
        "Company traffic disclosures and value-platform announcements (free)",
        "NRA Restaurant Performance Index (monthly, free)",
        "California Fast Food Council wage votes (annual reset risk)"
      ]
    },
    exposure: [
      { vehicle: "Franchisor equities (McDonald's, Yum!, Domino's class)", note: "The royalty annuity core: inflation pass-through with 40%+ margins" },
      { vehicle: "Elite company operators (Chipotle class)", note: "Unit-growth compounding at high returns on capital; pay up, verify traffic" },
      { vehicle: "Chicken & beverage growth brands (Wingstop, Cane's when public)", note: "The share takers: category momentum over macro" },
      { vehicle: "Delivery platforms (DoorDash)", note: "The tollbooth on off-premise: own the take rate instead of paying it" },
      { vehicle: "Suppliers & distributors (Sysco, Middleby class)", note: "Picks and shovels: volume exposure without menu-price risk" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Comp splits (price vs traffic), franchisee health commentary, value-platform economics" },
      { when: "Monthly (mid-month)", what: "Census food services sales print; CPI food-away-from-home spread" },
      { when: "Annual (spring)", what: "California Fast Food Council wage decisions; state legislative sessions on wages and fees" },
      { when: "Episodic", what: "Food safety events (McDonald's E. coli, Oct 2024 template), franchisee bankruptcies, delivery fee-cap laws" }
    ],
    data: [
      { series: "Advance retail sales: food services & drinking places", source: "census.gov MARTS (free, monthly)", why: "The industry top line, near real-time" },
      { series: "CPI food away from home vs food at home", source: "bls.gov (free, monthly)", why: "The value gap driving traffic to or from restaurants" },
      { series: "Employment & wages, food services", source: "bls.gov CES (free, monthly)", why: "Labor cost inflation, the biggest controllable line" },
      { series: "Restaurant Performance Index", source: "restaurant.org (free, monthly)", why: "Operator sentiment and same-store composite" },
      { series: "OpenTable seated diner data", source: "opentable.com/state-of-industry (free)", why: "Full-service traffic, daily frequency" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Trade-down cascades: casual dining loses to QSR, QSR loses to grocery. Franchisors hold (nominal royalties, value menus recapture traffic); leveraged operators and casual dining de-rate first." },
      { regime: "Inflation spike", behavior: "Menus reprice with a lag but never retreat: franchisors are net winners (royalties on higher nominal sales), operators get squeezed in the lag, and the value gap vs groceries decides traffic." },
      { regime: "Rates rising", behavior: "Unit development slows (buildouts are financed), franchisee leverage bites, securitization refis get expensive: growth stories de-rate more than annuities." },
      { regime: "Labor shock (wage laws)", behavior: "Step-change in prime cost: operators cut hours, raise prices, and buy kiosks (the California template: +14.5% menu prices, (10,700) jobs). Automation suppliers and franchisors outperform the operators absorbing it." }
    ]
  },

  players: [
    { name: "McDonald's", role: "The franchisor archetype", country: "US", real: true, note: "~95% franchised, ~40,000+ units; 4% royalty (5% new US units since 2024) plus rent of 8.5-15% of sales: landlord first, restaurant second" },
    { name: "Chick-fil-A", role: "The AUV king (private)", country: "US", real: true, note: "$22B system sales 2024; ~$9.2M standalone AUVs on a 6-day week: the highest-throughput boxes in the industry" },
    { name: "Yum! Brands", role: "Multi-brand franchisor", country: "US", real: true, note: "KFC, Taco Bell, Pizza Hut: ~60,000 units, ~98% franchised, the purest royalty machine at scale" },
    { name: "Starbucks", role: "Beverage giant in turnaround", country: "US", real: true, note: "~40,000 stores, mostly company-operated in the US: the industry's biggest bet that a brand can be both premium and ubiquitous" },
    { name: "Chipotle", role: "Company-operated compounder", country: "US", real: true, note: "No franchising, ~25% restaurant margins, 3,700+ units: proof the operator model can earn tech multiples with elite execution" },
    { name: "Restaurant Brands International", role: "Franchise consolidator", country: "CA", real: true, note: "Burger King, Tim Hortons, Popeyes, Firehouse: 3G-style G&A discipline applied to royalty streams" },
    { name: "Raising Cane's", role: "The chicken challenger (private)", country: "US", real: true, note: "$5.1B sales 2024, +33% with 15% comps and $6.6M AUVs: the value-war era's share winner" },
    { name: "DoorDash", role: "Delivery gatekeeper", country: "US", real: true, note: "~55-67% of US delivery; ~$10.7B 2024 revenue built on 15-30% restaurant commissions" }
  ],

  geography: [
    { country: "US", role: "The home market", note: "$1.1T restaurant sales, ~750,000 locations, 15.9M workers: the franchise model's birthplace and stress lab" },
    { country: "CN", role: "The growth engine", note: "Yum China's 16,000+ units and McDonald's fastest development market: localization plus geopolitical exposure" },
    { country: "GB", role: "Chains meet pubs", note: "Greggs, Pret, and the pub estate; Compass Group runs global contract catering from London" },
    { country: "JP", role: "Operational perfectionism", note: "Conbini foodservice, kaiten sushi, and the world's densest Michelin map: throughput as culture" },
    { country: "FR", role: "The culinary canon", note: "Michelin's home sets global fine-dining standards; also McDonald's most profitable European market" },
    { country: "IN", role: "The next frontier", note: "Fastest-growing QSR market: localized menus (no-beef McDonald's) and a decade-long development runway" }
  ],

  cycles: [
    { year: 1955, title: "Kroc and the real estate epiphany", kind: "shift", text: "Ray Kroc franchises McDonald's; Harry Sonneborn reframes it as a landlord financed by hamburgers. Lesson: the industry's best business was never the food: it is the toll on those who sell it." },
    { year: 2008, title: "Casual dining's long bust begins", kind: "bust", text: "The GFC guts sit-down traffic; Bennigan's liquidates overnight and the category never recovers its 1990s share. Lesson: mid-market restaurants are the first casualty of a squeezed consumer, and traffic lost to trade-down rarely returns." },
    { year: 2015, title: "The fast-casual gold rush", kind: "boom", text: "Shake Shack IPOs at triple-digit earnings multiples; Chipotle proves $2M+ AUVs without franchising; capital floods every 'Chipotle of X'. Lesson: unit economics travel, but scarcity premiums on restaurant growth stories always mean-revert." },
    { year: 2020, title: "COVID closes the dining room", kind: "bust", text: "Dining rooms shut nationwide; drive-thru and delivery keep QSR alive while 90,000+ restaurants close for good. Lesson: channel diversity is survival: the crisis handed the future to the drive-thru and the apps." },
    { year: 2024, title: "The value wars", kind: "shift", text: "Menu inflation breaks the low-income guest; McDonald's $5 Meal Deal (June 2024) triggers industry-wide discounting, and 2 years in, 15 of 18 major QSR brands have lower retention. Lesson: discounts buy traffic, not loyalty, and teach guests the real price of everything." }
  ],

  risks: [
    { name: "Labor cost ratchet", severity: 4, likelihood: 4, transmission: "Wage laws and councils (CA $20 floor) -> ~25% labor cost step for covered units -> menu prices +14.5% and hour cuts -> traffic loss and automation capex, with wages never resetting down." },
    { name: "Low-income consumer breakdown", severity: 4, likelihood: 3, transmission: "Real wages lag menu inflation -> visit frequency drops at the bottom quartile -> value wars reignite -> price investment compresses franchisee margins before franchisor royalties." },
    { name: "Delivery platform dependence", severity: 3, likelihood: 4, transmission: "Off-premise share shifts to platforms taking 15-30% -> operators reprice or lose the occasion -> customer data and relationship migrate to the aggregator -> kitchens commoditize into fulfillment." },
    { name: "Food safety event", severity: 4, likelihood: 2, transmission: "One outbreak (McDonald's E. coli, Oct 2024; Chipotle 2015 template) -> instant traffic collapse and headline decay -> quarters of discounting to rebuild trust -> franchisee cash flow stress." },
    { name: "Franchisee credit squeeze", severity: 3, likelihood: 3, transmission: "Royalties + rent + ads at 16-24% of sales meet wage inflation and 8% buildout debt -> operator EBITDA compresses -> closures and bankruptcies (Burger King, Subway operators 2023-24) -> unit growth stalls and the royalty annuity develops credit risk." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Restaurants sell prepared food, but the industry's best business is franchising: companies like McDonald's let operators run restaurants under their brand and collect roughly 4% of sales as a royalty, plus rent, without cooking anything. Americans spend over $1.1T a year eating out, more than they spend at grocery stores, and about 15.9M people work in the industry: the biggest employer of first jobs in America."] },
    L2: { title: "Intermediate", text: ["Two P&Ls share every dining room. Operators live on prime cost (food ~30% + labor ~30% of sales) and keep 10-20% restaurant-level margins; franchisors collect royalties, ad fees, and often rent (McDonald's takes 16-24% of a franchisee's sales all-in) at 40-60% operating margins. Delivery platforms (DoorDash at ~2-in-3 US share) charge 15-30% commissions on top. Watch same-store sales split into price vs traffic: price-driven comps with falling traffic is the industry's warning light, and it was flashing through the 2024-25 value wars."] },
    L3: { title: "Advanced", text: ["Value the 2 species separately: franchisors as royalty annuities (14-22x EBITDA, securitizable at 5-7x leverage), operators as leveraged retailers priced on unit growth and prime-cost discipline. The unit is the atom: $1.5M-$2.5M buildout, $2M-$4M AUV, 20-40% cash-on-cash when it works. The 2024 labor reset (California's $20 wage, +25% covered labor cost) and the value wars compressed operator margins while franchisor earnings held: that divergence is the sector's central tension, because franchisee distress is the royalty stream's leading indicator."] },
    L4: { title: "Expert", text: ["Trade the monthly Census food-services print, the CPI eat-out-vs-grocery spread, and quarterly traffic splits; respect that discounting cycles reset price perception for years (15 of 18 QSR brands lost retention through the value wars). Live debates: whether franchisee squeeze eventually infects the royalty annuity, whether delivery platforms are demand creators or margin parasites at a 30-40% all-in take, and whether GLP-1 adoption is a structural traffic headwind. The chicken insurgency (Chick-fil-A $22B, Cane's +33%) shows category momentum beats macro: share shifts are the alpha."] },
    L5: { title: "Institutional", text: ["Allocator's frame: restaurants offer 2 uncorrelated exposures wearing 1 sector label: consumer-royalty annuities (franchisors: inflation-linked, securitizable, staples-like) and leveraged consumer cyclicals (operators: traffic beta with labor-law tail risk). Barbell them: core the annuities and elite compounders, avoid the discount-dependent middle, and monitor franchisee credit as the system's early-warning sensor. Structural watch items: state wage councils as recurring political repricing, platform consolidation of the customer relationship, and GLP-1 as the first genuine demand-side question the model has faced in decades."] }
  },

  quiz: [
    { q: "McDonald's biggest revenue stream from its franchisees is:", choices: ["The 4% royalty", "Advertising fees", "Rent: roughly 64% of franchised revenue, at 8.5-15% of sales", "Equipment sales"], answer: 2, explain: "Sonneborn's insight: McDonald's is a landlord financed by hamburgers. Real estate, not royalties, is the bigger toll." },
    { q: "US restaurant industry sales in 2025 were forecast at roughly:", choices: ["$1.1T (total foodservice ~$1.5T)", "$300B", "$5T", "$700B"], answer: 0, explain: "The NRA's 2025 forecast: $1.1T for restaurants, ~$1.5T including all foodservice, with ~15.9M jobs." },
    { q: "A restaurant operator's prime cost is:", choices: ["Rent plus utilities", "Food plus labor: ~60% of sales is the discipline line", "Marketing spend", "Franchise fees"], answer: 1, explain: "Food (~30%) and labor (~30%) are the 2 costs managed weekly; above 65% the unit is working for its suppliers and staff." },
    { q: "The 2024-25 QSR value wars showed that discounting:", choices: ["Permanently wins customers", "Bought traffic but not loyalty: 15 of 18 major brands had lower retention 2 years in", "Raised margins", "Only worked for casual dining"], answer: 1, explain: "The $5 Meal Deal era recovered visits but reset price expectations: retention stayed below pre-war levels almost everywhere." },
    { q: "Delivery platforms typically charge restaurants:", choices: ["A flat $1 per order", "1-2% of the order", "50% commissions", "15-30% commissions (30-40% all-in with fees), against single-digit operating margins"], answer: 3, explain: "DoorDash's tiered 15/25/30% plans, plus marketing and processing fees, often exceed the operator's entire margin on the order." },
    { q: "California's 2024 fast food wage law ($20/hr) roughly:", choices: ["Cut menu prices", "Had no measurable effect", "Raised covered labor costs ~25%, with CA fast food menus up 14.5% in about a year", "Applied only to sit-down restaurants"], answer: 2, explain: "AB 1228 stepped wages from $16 to $20 in April 2024: prices rose at nearly double the national pace and operators cut hours." },
    { q: "Chick-fil-A's standalone units are notable for:", choices: ["Being open 7 days a week", "~$9.2M average volumes, roughly 3x a typical QSR box, on a 6-day week", "The industry's lowest prices", "Being company-operated"], answer: 1, explain: "The industry's throughput ceiling: $22B in 2024 system sales from a fraction of McDonald's unit count." },
    { q: "The franchisor royalty stream's hidden risk is:", choices: ["Franchisee health: operators squeezed by wages, rent, and debt eventually cannot pay (Burger King, Subway operators went bankrupt 2023-24)", "Currency moves", "Commodity prices", "Weather"], answer: 0, explain: "The annuity is only as good as the operators funding it: franchisee distress is the royalty stream's leading indicator, lagged about 2 years." }
  ],

  sources: [
    { name: "NRA State of the Restaurant Industry 2025 ($1.5T foodservice, 15.9M jobs)", url: "https://www.restaurant.org/research-and-media/media/press-releases/restaurant-industry-poised-for-growth-in-2025-industry-expected-to-employ-15-9-million-people-and-r/", feeds: "market size, employment" },
    { name: "Restaurant Dive: McDonald's royalty increase to 5% (2024)", url: "https://www.restaurantdive.com/news/mcdonalds-raises-royalty-rate-on-new-restaurants-by-25-percent/694463/", feeds: "franchise economics" },
    { name: "Facteus: QSR value wars traffic vs loyalty (2026)", url: "https://facteus.com/blog/qsr-value-wars-traffic-vs-loyalty", feeds: "value wars, retention" },
    { name: "Restaurant Business: Chick-fil-A AUVs and Raising Cane's growth (2025)", url: "https://www.restaurantbusinessonline.com/financing/chick-fil-unit-volumes-stand-alone-restaurants-hit-9m-last-year", feeds: "chicken wars, AUVs" }
  ]
};
