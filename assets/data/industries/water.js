/* Industry Atlas - WATER (full module, research-backed)
 * Anchors: EPA 7th DWINSA (Sep 2023): $625B 20-year US drinking water need ($422.9B of it
 * distribution pipe); EPA CWNS 2022 report (Apr 2024): $630.1B 20-year wastewater need;
 * ASCE 2025 Report Card: drinking water C-, ~240,000 main breaks/yr, ~150,000 public water
 * systems (93% serve <10,000 people); EPA PFAS rule (Apr 2024): 4 ppt PFOA/PFOS limits,
 * treatment by 2029 (2025 proposal would extend to 2031); American Water: ~14M people served,
 * $19-20B 2026-2030 and $46-48B 2026-2035 capital plans, 22 acquisitions under agreement (Oct 2024);
 * desalination: ~22,000 plants, ~99M m3/day capacity (2023), SWRO tariffs to ~$0.28/m3 (Rizhao, 2025);
 * Global Commission on the Economics of Water (Oct 2024): water crisis could cut high-income GDP ~8%,
 * lower-income 10-15% by 2050. Sources: epa.gov (DWINSA, CWNS, PFAS), infrastructurereportcard.org. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["water"] = {
  meta: {
    id: "water", name: "Water", sector: "real-assets", status: "full",
    tagline: "The most essential commodity on Earth, delivered by its most fragmented and underpriced utility: a $1.25T American repair bill is now coming due.",
    marketSize: { value: 1, unit: "$T", asOf: 2024, note: "global water spend: utility revenue (opex + capex), industrial water, treatment equipment; estimates cluster at $0.9T to $1T (GWI class). US utility needs alone: $1.25T over 20 years (EPA)" },
    cagr: { value: 5, range: [4, 7], horizon: "2024-2030" },
    maturity: "mature", cyclicality: 1, capitalIntensity: 5, regulation: 5, disruption: 2
  },
  newsQuery: '("water utility" OR "water infrastructure" OR desalination OR PFAS OR "water treatment" OR "Thames Water" OR "American Water")',

  overview: {
    definition: "The water industry captures, treats, and delivers drinking water, then collects and treats what comes back, through regulated utilities, municipal systems, equipment makers, and a growing desalination and reuse fleet. It is a utility, a technology sector, and a scarcity trade sharing one pipe network.",
    howItWorks: [
      "The physical model is a loop: withdraw from rivers, reservoirs, or aquifers; treat to standard; push through distribution mains; collect the wastewater; treat it again; discharge or reuse. The assets are almost all buried, long-lived, and local: water is too heavy and too cheap to transport far, so every city is its own market. That is why the US has ~150,000 public water systems (ASCE, 2025) where electricity has a few thousand: 93% of them serve fewer than 10,000 people, and most lack the engineering staff and balance sheet the next 20 years will demand.",
      "The economics are rate-base economics at their purest. A regulated utility earns an allowed return (roughly 9-10% on equity in recent US cases) on the capital it prudently invests; revenue is the regulator's arithmetic, not the market's. Because pipes cost enormously more than the water flowing through them, water is the most capital-intensive utility class: the asset base runs well above 3x annual revenue. The perverse gift is that decades of underinvestment became tomorrow's earnings: every mandated pipe, filter, and treatment plant grows the rate base, which grows profit.",
      "The bill is now quantified. EPA's 7th Drinking Water Infrastructure Needs Survey (Sep 2023) tallies $625B of US drinking water needs over 20 years, $422.9B of it just distribution and transmission pipe; the companion Clean Watersheds Needs Survey (2022 report, released Apr 2024) adds $630.1B for wastewater. Call it $1.25T against systems that suffer ~240,000 main breaks a year and lose trillions of gallons to leaks (ASCE grades US drinking water C-). Regulation converts that gap into demand: the Apr 2024 PFAS rule sets 4 ppt limits on PFOA and PFOS with treatment due by 2029 (a 2025 EPA proposal would extend to 2031), and the Oct 2024 lead rule requires replacing essentially every lead service line within a decade.",
      "Where scarcity binds, the industry manufactures supply. Roughly 22,000 desalination plants (2021) produce ~99M m3/day of capacity (2023), concentrated in the Gulf; seawater reverse osmosis that cost over $1 per m3 a generation ago now clears under $0.40 at the best plants, with a 2025 Chinese project (Rizhao) at ~$0.28/m3. Reuse is the quieter revolution: Israel recycles ~90% of its municipal wastewater, the world's highest rate. Meanwhile agriculture still takes ~70% of global freshwater withdrawals, which is why the macro stakes dwarf the sector: the Global Commission on the Economics of Water (Oct 2024) estimates the water crisis could cut high-income GDP by ~8% and lower-income GDP by 10-15% by 2050."
    ],
    history: [
      { era: "1854-1908", title: "Germ theory to chlorination", text: "John Snow's Broad Street pump maps cholera to water (1854); Jersey City chlorinates its supply (1908). Waterborne disease collapses in the rich world: the highest-return infrastructure investment ever made." },
      { era: "1948-1974", title: "The regulatory build", text: "The US Clean Water Act (1972) and Safe Drinking Water Act (1974) create the modern industry: federal money builds treatment plants, and compliance becomes the demand engine it remains today." },
      { era: "1989-2008", title: "Privatization experiments", text: "England and Wales privatize their water utilities outright (1989); French concession giants (Veolia, Suez) export the operating model worldwide; Australia's Millennium Drought triggers the first big desalination wave." },
      { era: "2014-2023", title: "The reckoning", text: "Flint (2014) turns deferred maintenance into a national scandal; PFAS emerges as a chemical liability measured in parts per trillion (3M settles with US water systems for $10B+ in 2023); Thames Water's leverage model cracks in public." },
      { era: "2024-present", title: "The mandate era", text: "EPA finalizes the PFAS rule (Apr 2024) and the 10-year lead line replacement rule (Oct 2024); Ofwat's PR24 settlement (Dec 2024) unlocks roughly GBP 100B of 2025-2030 English investment; the repair bill stops being deferrable." }
    ],
    trends: [
      { title: "Mandated capex supercycle", direction: "up", text: "$1.25T of EPA-documented US needs, $50B+ of federal IIJA water funding, and a record English AMP8 cycle: regulators are ordering the investment utilities spent decades deferring, and rate base compounds accordingly." },
      { title: "PFAS remediation", direction: "up", text: "The Apr 2024 rule (4 ppt PFOA/PFOS, treatment by 2029, proposed 2031) forces thousands of systems to buy carbon, ion exchange, and RO trains; polluter settlements ($10B+ from 3M alone) fund only part of an open-ended bill." },
      { title: "Utility consolidation", direction: "shift", text: "~150,000 US systems, 93% tiny, cannot each afford a PFAS plant: fair-market-value laws in 20+ states let acquirers pay appraised prices, and American Water alone had 22 deals under agreement across 8 states (Oct 2024)." },
      { title: "Desalination and reuse scale up", direction: "up", text: "~99M m3/day of desal capacity (2023) keeps growing as SWRO tariffs fall toward $0.28-0.40/m3; Israel's ~90% wastewater reuse shows the circular endgame. Energy intensity (3-4 kWh/m3) remains the cost floor." },
      { title: "Climate whiplash", direction: "shift", text: "Drought shrinks sources while floods overwhelm systems, sometimes in the same year; the GCEW (Oct 2024) frames declining water storage as a threat to over half of global food production. Scarcity is becoming a priced input." }
    ],
    outlook: "The rare utility sector where the growth story is written in statute: PFAS deadlines, lead line mandates, and a $1.25T documented US gap give a decade-plus of rate-base growth with recession-proof demand. The constraints are political, not commercial: water bills fund the whole program, and affordability backlash (or a Thames-style balance sheet failure) is what breaks the compounding. Technology (desal, reuse, smart networks) expands supply at falling cost but never repeals the local-monopoly economics of pipes."
  },

  structure: {
    suppliers: [
      { name: "Pipe, pump & valve makers (Mueller, Xylem, Grundfos)", note: "The hardware of a buried network being rebuilt mile by mile" },
      { name: "Treatment chemistry (chlorine, coagulants; Ecolab, Veolia WTS)", note: "Consumables: the recurring-revenue layer of every plant" },
      { name: "Membranes & filtration (DuPont, Toray, LG Chem)", note: "RO and ion exchange: the PFAS and desal enabling technology" },
      { name: "Engineering & consulting (Jacobs, Stantec, AECOM)", note: "Needs surveys, rate cases, and plant design: the sector's brains for hire" }
    ],
    producers: [
      { name: "Investor-owned utilities (American Water, Essential)", note: "~14M people served by American Water alone; rate-base compounders" },
      { name: "Municipal systems (~150,000 US public water systems)", note: "9 in 10 Americans; the fragmented long tail consolidation feeds on" },
      { name: "Global operators (Veolia, Suez)", note: "Concessions and O&M contracts across 5 continents" },
      { name: "Desalination developers (ACWA Power, IDE)", note: "Manufacture drinking water from the sea at ~$0.30-0.50/m3" }
    ],
    distributors: [
      { name: "The network itself (~2.2M miles of US mains)", note: "No substitute channel: the pipe is the market, and it breaks ~240,000 times a year" }
    ],
    customers: [
      { name: "Households", note: "Inelastic demand, politically supervised prices: the affordability constituency" },
      { name: "Industry (chips, data centers, food, energy)", note: "Ultrapure and cooling water: the fastest-growing, least price-sensitive demand" },
      { name: "Agriculture", note: "~70% of global freshwater withdrawals: the elephant that mostly pays the least" }
    ],
    regulators: [
      { name: "EPA + state PUCs (US)", note: "EPA writes the standards (PFAS, lead); PUCs set the returns that fund them" },
      { name: "Ofwat (England & Wales)", note: "Price reviews every 5 years; PR24 unlocked ~GBP 100B while Thames tested the model" },
      { name: "Water rights regimes & compacts", note: "Colorado River-style allocation: law from a wetter century meeting a drier one" }
    ],
    capital: [
      { name: "Municipal bonds + State Revolving Funds", note: "Cheap public debt: the default financing of the fragmented majority" },
      { name: "Rate-base equity", note: "Investor-owned utilities fund capex with equity priced off allowed ROEs" },
      { name: "Federal programs (IIJA: $50B+ for water)", note: "The largest US federal water investment ever, routed largely through SRFs" },
      { name: "Infrastructure funds & private capital", note: "Core-infra money loves water's duration; Thames shows the leverage limit" }
    ]
  },

  valueChain: {
    intro: "From watershed to tap and back again. Value concentrates where regulation meets capital: the rate-regulated network in the middle, and the technology vendors selling into every mandated upgrade.",
    stages: [
      { id: "source", name: "Source & rights", what: "Watersheds, aquifers, allocations, storage", players: "States, irrigation districts, rights holders", valueCapture: 2,
        economics: { grossMargin: [10, 30], capitalIntensity: 3, concentration: 2 },
        linksTo: ["agriculture", "government"],
        deeper: "Water rights are property from a wetter era: seniority systems allocate scarcity by history, not price. Thin, localized rights markets (Australia is the developed exception) mean the scarcest input in the economy mostly still is not priced: the GCEW calls the mispricing a global macro risk." },
      { id: "equipment", name: "Treatment tech & chemistry", what: "Membranes, UV, carbon, pumps, chemicals", players: "Xylem, DuPont, Ecolab, Toray", valueCapture: 4,
        economics: { grossMargin: [30, 45], capitalIntensity: 3, concentration: 3 },
        linksTo: ["chemicals", "manufacturing"],
        deeper: "The sector's growth equity: every new standard is a product cycle. PFAS alone forces carbon, ion exchange, or RO onto thousands of systems by 2029-2031; consumables (media, chemicals, cartridges) turn each install into an annuity. Xylem's $7.5B Evoqua deal (2023) was a bet on exactly this." },
      { id: "projects", name: "Projects & EPC", what: "Plants, mains, digesters, desal builds", players: "Jacobs, AECOM, regional contractors", valueCapture: 2,
        economics: { grossMargin: [8, 15], capitalIntensity: 3, concentration: 3 },
        linksTo: ["construction"],
        deeper: "Thin-margin execution of everyone else's mandates: $422.9B of pipe replacement (EPA's distribution line item) is decades of trenching. Fixed-price risk on wet infrastructure has broken many contractors; the winners sell design and program management, not concrete risk." },
      { id: "utilities", name: "Regulated utilities", what: "The rate-base core: delivery + collection", players: "American Water, Essential, Severn Trent", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 2 },
        linksTo: ["utilities", "government"],
        deeper: "The purest rate-base machine in infrastructure: allowed ROE on a compounding asset base, demand that never cycles, and a mandate-driven capex runway ($46-48B over 10 years at American Water alone). The moat is legal monopoly; the risk is the regulator's pen and the customer's bill." },
      { id: "desal-reuse", name: "Desalination & reuse", what: "Manufacturing supply where nature shorted it", players: "ACWA Power, IDE, Veolia, SWA", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 5, concentration: 3 },
        linksTo: ["utilities", "construction"],
        deeper: "22,000 plants and ~99M m3/day, still compounding: SWRO tariffs fell from $1+/m3 to ~$0.28-0.40 at the frontier as membranes, energy recovery, and cheap solar stacked. Contracts are utility-like PPAs for water; energy (3-4 kWh/m3) is the irreducible cost and the carbon question." },
      { id: "digital", name: "Metering, analytics & industrial water", what: "Smart meters, leak detection, ultrapure", players: "Xylem, Badger, Ecolab, Organo", valueCapture: 4,
        economics: { grossMargin: [35, 50], capitalIntensity: 2, concentration: 3 },
        linksTo: ["semiconductors", "data-infrastructure"],
        deeper: "Non-revenue water (the ~1-in-6 gallons produced but never billed) is the industry's largest hidden reserve: metering and acoustic leak detection monetize it. Upstream, chip fabs and data centers buy ultrapure and cooling water at industrial margins: the fastest-growing demand node in the sector." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector in 3 P&Ls. Regulated utilities: revenue = rate base x allowed return plus recovered costs; growth is capex approved in rate cases, so EPA mandates literally schedule future earnings (American Water guides off a $19-20B 2026-2030 plan). Technology and chemistry vendors: equipment sales plus consumable annuities, gross margins in the 30s and 40s, growth tied to regulation and scarcity rather than GDP. Operators and EPC: fee and contract income on other people's assets, thin margins, execution risk.",
      "The sector's tension is that its growth engine and its constraint are the same line item: the customer bill. Rate base compounding at 8-9% against household affordability creates regulatory lag, disallowance risk, and political flashpoints; the UK shows both ends, with Ofwat approving ~GBP 100B of AMP8 investment (Dec 2024) while Thames Water, built on inflation-linked leverage, slid toward restructuring. Watch allowed ROE spreads over bond yields, rate-case outcomes, and bill-to-income ratios: those 3 numbers are the sector's true guidance."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 85, capitalIntensity: 90, pricingPower: 55, cyclicality: 15, operatingLeverage: 45 },
    lines: [
      { label: "Rate base & allowed ROE", note: "The earnings formula: capital invested x the regulator's permitted return" },
      { label: "Rate case outcomes", note: "Each decision resets revenue for years; the sector's true earnings reports" },
      { label: "Capex delivery vs plan", note: "$46-48B decade plans only compound if the trenches actually get dug" },
      { label: "Non-revenue water & opex", note: "Leakage is unbilled product; efficiency is margin the regulator lets you keep" },
      { label: "Acquisition pipeline", note: "Consolidation of the 150,000-system long tail: bolt-on rate base at appraised prices" }
    ],
    unitEconomics: {
      unit: "per 1,000 gallons delivered (US utility, illustrative)",
      items: [
        { label: "Retail price", value: "~$4 to $6", note: "varies widely by system; still cheaper than almost any delivered good" },
        { label: "Non-revenue water", value: "~15-20% of production", note: "leaks, theft, meter error: produced, treated, never billed" },
        { label: "Asset intensity", value: "3x+ revenue in rate base", note: "the most capital-intensive utility class per dollar of sales" },
        { label: "Allowed ROE", value: "~9-10% on equity", note: "recent US rate-case norms; the ceiling and the floor of returns" }
      ]
    }
  },

  kpiRefs: ["util-ratebase", "constr-book-to-burn"],
  kpiLocal: [
    {
      id: "water-nrw", name: "Non-Revenue Water (NRW)", industries: ["water"],
      definition: "The share of water produced that is never billed: physical leaks, theft, and metering error.",
      formula: "NRW % = (volume produced - volume billed) / volume produced",
      interpretation: "The industry's hidden reserve and its report card in one number: US systems lose roughly 1 gallon in 6, and ASCE counts the national loss in trillions of gallons a year. Falling NRW is found revenue and deferred capex.",
      healthy: "Under 15% and trending down", warning: "Over 30%: chronic in underfunded systems (some megacities exceed 40%)" },
    {
      id: "water-desal-cost", name: "Desalinated Water Cost ($/m3)", industries: ["water"],
      definition: "The all-in contracted tariff per cubic meter for new seawater reverse osmosis capacity.",
      formula: "$/m3 = contracted water tariff (capex recovery + energy + O&M)",
      interpretation: "The technology cost curve that sets scarcity's ceiling: from $1+/m3 a generation ago to under $0.40 at the best plants, with a 2025 waste-heat-powered Chinese project (Rizhao) near $0.28. Energy at 3-4 kWh/m3 is the floor.",
      healthy: "New bids under $0.50/m3", warning: "Tariffs pushed back above $1/m3 by energy costs or financing stress" }
  ],

  health: {
    intro: "Utility health is a regulatory relationship wearing financial statements; vendor health is exposure to mandates; everyone's health is the gap between asset age and bill headroom.",
    pillars: [
      { name: "Regulatory relationship", weight: 30, metrics: "Allowed ROE trend, rate-case win rate, disallowances", healthy: "Constructive multi-year settlements", warning: "Disallowed capex, emergency rate freezes, political intervention" },
      { name: "Asset condition", weight: 20, metrics: "Main breaks per 100 miles, NRW %, average pipe age", healthy: "Breaks falling, NRW under 15%", warning: "The national pattern: ~240,000 breaks/yr and C- grades" },
      { name: "Balance sheet", weight: 20, metrics: "FFO/debt, leverage vs regulatory assumptions, hybrid complexity", healthy: "Investment grade with equity headroom for the capex plan", warning: "Thames-style leverage: debt structured for a world of low rates" },
      { name: "Growth pipeline", weight: 15, metrics: "Approved capex runway, acquisition backlog, rate-base CAGR", healthy: "5-10 year mandated programs (PFAS, lead) in approved plans", warning: "Growth dependent on unfiled, contested rate cases" },
      { name: "Affordability headroom", weight: 15, metrics: "Bill as % of median income, arrears, assistance uptake", healthy: "Bills under ~2% of median household income", warning: "Rising arrears: the leading indicator of political backlash" }
    ],
    scoringNote: "In water, the fatal event is losing the regulator's trust: contamination, chronic leakage, or leverage games convert directly into disallowed returns, and the franchise is worth only what the regulator allows."
  },

  valuation: {
    intro: "The market prices water as scarce duration: regulated names trade at premiums to electric peers for the cleaner growth mandate, and technology names at industrial-quality multiples for the same reason.",
    methods: [
      { name: "P/E vs electric utility peers", use: "Regulated water utilities: the classic scarcity-premium trade", avoid: "Ignoring the premium's regulatory dependence", strengths: "Simple, long history", weaknesses: "Blind to leverage and rate-case risk", range: { low: 20, high: 30, asOf: 2024, note: "American Water class has long carried a 20-40% premium to electrics" } },
      { name: "EV / EBITDA (rate-base names)", use: "Cross-border utility comps, M&A math", avoid: "Mixing regulated and unregulated cash flows", strengths: "Capital-structure neutral", weaknesses: "EBITDA understates capex reality", range: { low: 10, high: 15, asOf: 2024, note: "premium end for mandated-growth US names" } },
      { name: "Premium / (discount) to RAB or RCV", use: "UK and concession assets: price vs regulator-recognized capital", avoid: "Treating the premium as permanent", strengths: "Anchored to the regulatory contract itself", weaknesses: "One bad price review moves the anchor", range: { low: -10, high: 25, asOf: 2024, note: "% vs regulatory capital value; Thames-era stress pushed weak names to discounts" } },
      { name: "DDM / dividend yield", use: "The income-buyer lens on a 60-year asset", avoid: "Yield-chasing leveraged structures", strengths: "Matches the holder base", weaknesses: "Rate-sensitive: the bond-proxy problem", range: { low: 2, high: 4, asOf: 2024, note: "% yields; low end = growth premium priced in" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a water utility quickly: normalized EBITDA times a scarcity-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 6, step: 0.2, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 18, step: 0.5, value: 12.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: 0, max: 30, step: 0.5, value: 10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays water as legislated compounding: core the regulated utilities executing mandated capex (the growth is in statute, not the macro), own the technology vendors selling into every PFAS and lead deadline, and treat desalination and reuse as the emerging-market growth sleeve. The whole trade is long regulatory follow-through and short affordability politics.",
    debates: [
      { topic: "Consolidation: decade-long roll-up or municipal mirage?", bull: "150,000 systems, 93% subscale, now facing PFAS plants they cannot staff or finance: fair-market-value laws in 20+ states finally price acquisitions attractively, and American Water's 22-deal pipeline (Oct 2024) is the template. Decades of bolt-on rate base at regulated returns.", bear: "Water is the most local politics in America: towns keep systems for control and jobs, deals need referendums, and each acquisition is small. The roll-up math works but the clock runs in decades; meanwhile acquirers pay premiums that regulators may not fully return." },
      { topic: "PFAS: earnings supercycle or open-ended liability?", bull: "A federally mandated, court-tested product cycle: thousands of systems must buy treatment by 2029-2031, capex flows into rate base, vendors sell media annuities for decades, and polluter settlements ($10B+ from 3M) subsidize the bill.", bear: "Standards at 4 ppt invite litigation, detection creep, and cost overruns; the 2025 deadline extension shows political give; and every compliance dollar lands on customer bills already straining: the mandate could soften exactly when the capex peaks." },
      { topic: "Desalination: scarcity's answer or energy in a costume?", bull: "Tariffs at $0.28-0.40/m3 with cheap solar attached make manufactured water competitive with long-haul conveyance; the Gulf proved it at civilization scale (~99M m3/day globally), and coastal megacities from Chennai to San Diego are the pipeline.", bear: "3-4 kWh/m3 is physics, not engineering: desal is an energy trade wearing a water tariff, brine and siting fights cap growth, and reuse plus leak recovery (NRW) beats it on cost almost everywhere inland." }
    ],
    cycle: {
      where: "Early innings of a mandated reinvestment supercycle: needs quantified ($1.25T US over 20 years), rules finalized (PFAS 2024, lead 2024, AMP8 2025-2030), funding partially appropriated, and the affordability fight just beginning. Demand never cycles; the capex wave is only starting to.",
      drivers: "Regulatory deadlines (2027 PFAS monitoring, 2029-2031 treatment), rate-case economics, drought and flood cycles, and the cost of capital for 60-year assets.",
      leads: [
        "State PUC rate-case dockets: allowed ROEs and capex approvals (free, public)",
        "EPA rulemaking dockets and enforcement actions (free)",
        "US Drought Monitor weekly maps: scarcity's news cycle (free)",
        "Ofwat publications: the AMP8 delivery scoreboard and Thames saga (free)",
        "Utility capex-plan updates and acquisition announcements (company IR, free)"
      ]
    },
    exposure: [
      { vehicle: "Regulated utilities (American Water, Essential class)", note: "The mandated-growth compounders: rate base as legislated earnings" },
      { vehicle: "Water technology (Xylem, Pentair class)", note: "Every new standard is their product cycle; PFAS is the current one" },
      { vehicle: "Global operators (Veolia class)", note: "Concession and O&M economics plus treatment chemistry scale" },
      { vehicle: "Water ETFs (PHO / CGW / FIW class)", note: "The diversified scarcity wrapper: mostly industrials, not utilities" },
      { vehicle: "Muni water bonds & infra funds", note: "The credit expression: essentiality with SRF subsidy underneath" }
    ],
    catalysts: [
      { when: "Rolling (quarterly)", what: "Rate-case decisions: each one reprices years of revenue" },
      { when: "2027", what: "PFAS monitoring results published: the national contamination map becomes public" },
      { when: "2029-2031", what: "PFAS treatment deadlines: the compliance capex crescendo" },
      { when: "Summer, annually", what: "Drought declarations and reservoir levels: scarcity's political season" }
    ],
    data: [
      { series: "US Drought Monitor", source: "droughtmonitor.unl.edu (free, weekly)", why: "The scarcity tape" },
      { series: "EPA SDWIS / ECHO violations data", source: "epa.gov (free)", why: "System-level compliance and stress, primary source" },
      { series: "USGS water use & streamflow", source: "usgs.gov (free)", why: "Physical demand and supply backdrop" },
      { series: "State PUC rate-case dockets", source: "state commission sites (free)", why: "The earnings formula being set in real time" },
      { series: "Ofwat price review & monitoring reports", source: "ofwat.gov.uk (free)", why: "The privatized model's laboratory results" }
    ],
    playbook: [
      { regime: "Recession", behavior: "The most defensive demand in the economy: volumes barely move, rate cases proceed, capex is mandated. Classic outperformance, capped only by starting valuation." },
      { regime: "Inflation", behavior: "Regulatory lag pinches margins until rate cases catch up; indexed UK-style regimes pass it through faster. Watch allowed-ROE resets vs actual cost of capital." },
      { regime: "Rates rising", behavior: "Bond-proxy derating hits the equities, and leveraged structures (the Thames template: inflation-linked debt on thin equity) can fail outright. Quality balance sheets are the whole trade." },
      { regime: "Drought / climate shock", behavior: "Scarcity headlines lift tech and desal names; volume-based utilities and agricultural users hurt; political risk (rate freezes, allocation fights) rises with the temperature." }
    ]
  },

  players: [
    { name: "American Water", role: "Largest listed US water utility", country: "US", real: true, note: "~14M people, 14 states; $19-20B 2026-2030 and $46-48B 2026-2035 capital plans; 22 acquisitions under agreement (Oct 2024)" },
    { name: "Veolia", role: "Global water & environmental leader", country: "FR", real: true, note: "The concession-and-treatment giant, scaled further by absorbing much of Suez (2022)" },
    { name: "Xylem", role: "Water technology consolidator", country: "US", real: true, note: "Pumps, smart meters, analytics; the $7.5B Evoqua deal (2023) added treatment services" },
    { name: "Ecolab", role: "Industrial water management", country: "US", real: true, note: "Water efficiency as a service for industry: the corporate scarcity trade" },
    { name: "ACWA Power", role: "Desalination developer", country: "SA", real: true, note: "The Gulf's record-setting SWRO tariffs; water as a contracted infrastructure product" },
    { name: "Severn Trent / United Utilities", role: "English regulated water", country: "GB", real: true, note: "The AMP8 (~GBP 100B sector program, 2025-2030) executors of the privatized model" },
    { name: "Essential Utilities", role: "US consolidator", country: "US", real: true, note: "The Aqua platform: serial municipal acquisitions under fair-market-value laws" },
    { name: "Thames Water", role: "The cautionary tale", country: "GB", real: true, note: "~16M customers and a leverage stack built for low rates: the sector's balance-sheet stress test" }
  ],

  geography: [
    { country: "US", role: "The fragmented giant", note: "~150,000 systems, a $1.25T 20-year documented need, and the consolidation runway" },
    { country: "GB", role: "The privatization laboratory", note: "AMP8's ~GBP 100B build vs Thames Water's near-collapse: both verdicts at once" },
    { country: "FR", role: "Concession capital", note: "Veolia and Suez exported the operate-for-fee model to the world" },
    { country: "SA", role: "Desalination superpower", note: "The world's largest manufactured-water complex; tariffs set global benchmarks" },
    { country: "IL", role: "Reuse frontier", note: "~90% of municipal wastewater recycled, the world's highest rate; drip-irrigation birthplace" },
    { country: "CN", role: "The largest build", note: "Megaproject conveyance (South-North transfer) plus the biggest treatment build-out in history" }
  ],

  cycles: [
    { year: 1908, title: "Chlorination", kind: "shift", text: "Jersey City chlorinates public supply; typhoid and cholera collapse across the rich world. Lesson: water's returns are measured in lifespans, which is why politics, not markets, allocates it." },
    { year: 1972, title: "The Clean Water Act", kind: "shift", text: "Federal standards and grants build modern US treatment. Lesson: regulation is this industry's demand engine: every standard is somebody's order book." },
    { year: 1989, title: "England privatizes", kind: "shift", text: "Water utilities sold outright, debt-free; 3 decades later several are leverage vehicles in regulatory intensive care. Lesson: private capital builds pipes only as long as the regulator polices the balance sheet." },
    { year: 2014, title: "Flint", kind: "bust", text: "A cost-saving source switch corrodes lead pipes into a national crisis. Lesson: deferred maintenance compounds silently, then detonates politically: the cheapest water is the most expensive." },
    { year: 2024, title: "The mandate year", kind: "shift", text: "PFAS rule (Apr), 10-year lead line rule (Oct), Ofwat's ~GBP 100B settlement (Dec): regulators order the reinvestment. Lesson: when the growth story is written in statute, execution and affordability become the only variables." }
  ],

  risks: [
    { name: "Affordability backlash", severity: 4, likelihood: 4, transmission: "Mandated capex -> compounding bills -> political intervention -> rate freezes and disallowances strand compliance capital." },
    { name: "Climate whiplash", severity: 4, likelihood: 4, transmission: "Drought shrinks sources and volumes -> emergency capex and allocation fights; floods overwhelm systems -> unplanned spend and liability." },
    { name: "PFAS liability cascade", severity: 4, likelihood: 3, transmission: "Detection creep and litigation -> standards tighten beyond 4 ppt -> open-ended treatment bill split unpredictably between polluters, utilities, and ratepayers." },
    { name: "Leverage failure (Thames template)", severity: 3, likelihood: 3, transmission: "Rising rates hit inflation-linked debt on thin equity -> restructuring -> sector-wide cost of capital and regulatory trust reprice." },
    { name: "Cyber / physical attack", severity: 4, likelihood: 2, transmission: "OT breach at one of thousands of under-resourced small systems -> contamination or outage -> emergency federal mandates and a security capex layer nobody budgeted." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Water companies collect, clean, and pipe the most essential product there is, then treat what goes down the drain. Because pipes are buried and local, every town is its own little monopoly: the US alone has about 150,000 water systems. Regulators, not markets, set the price, and America's pipes are so old they break about 240,000 times a year: fixing all this is expected to cost more than $1.25T over 20 years."] },
    L2: { title: "Intermediate", text: ["The business model is rate base: a regulated utility earns an allowed return (~9-10% on equity) on capital it invests, so mandated spending becomes earnings growth. New rules supply the mandates: the 2024 PFAS rule (4 ppt limits, treatment by decade's end) and the 10-year lead pipe replacement rule. Water is the most capital-intensive utility class (assets 3x+ revenue), demand never cycles, and technology vendors like Xylem sell into every new standard."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: utilities on rate-base CAGR, allowed-ROE spreads, and rate-case outcomes; vendors on mandate exposure and consumables mix; EPC on backlog quality. The structural trades: consolidation of 150,000 fragmented systems (fair-market-value laws, American Water's 22-deal pipeline), PFAS compliance capex, and non-revenue water recovery (~1 in 6 gallons unbilled). Desalination's cost curve ($1+/m3 to ~$0.28-0.40) sets scarcity's price ceiling at the coast; energy at 3-4 kWh/m3 is its floor."] },
    L4: { title: "Expert", text: ["Trade the regulatory tape: PUC dockets, EPA deadlines (2027 monitoring, 2029-2031 treatment), Ofwat interventions, and drought declarations. Live debates: whether affordability politics caps the capex supercycle, whether PFAS is an earnings cycle or an open-ended liability, and whether the UK's leverage reckoning (Thames) exports to concession models everywhere. Position quality balance sheets into rising rates; the bond-proxy derating is when you buy the mandate story, not sell it."] },
    L5: { title: "Institutional", text: ["Allocator's frame: water is legislated compounding with the lowest demand beta in the economy: core regulated names as duration with a statutory growth kicker, technology as the GDP-plus sleeve, desal and reuse as the scarcity option. Size against the 2 tail risks the sector itself created: affordability backlash that freezes returns, and leverage structures that fail before the mandate pays. The macro case is asymmetric: the GCEW puts the cost of unmanaged water crisis at ~8% of high-income GDP by 2050, and almost none of that is priced."] }
  },

  quiz: [
    { q: "EPA's latest 20-year needs surveys put combined US drinking water + wastewater investment needs at roughly:", choices: ["$125B", "$400B", "$1.25T ($625B drinking water + $630B wastewater)", "$5T"], answer: 2, explain: "The 7th DWINSA (2023) documented $625B and the 2022 CWNS (released 2024) $630.1B: a quantified, mandated reinvestment supercycle." },
    { q: "The April 2024 PFAS drinking water rule sets PFOA/PFOS limits at:", choices: ["4 parts per trillion, with treatment due by decade's end", "4 parts per million", "No enforceable limit", "Limits only for new systems"], answer: 0, explain: "4 ppt MCLs with monitoring by 2027 and treatment by 2029 (a 2025 proposal would extend to 2031): the mandate forcing treatment purchases across thousands of systems." },
    { q: "The US water sector is unusually fragmented:", choices: ["A few hundred systems", "~15,000 systems", "~150,000 public water systems, 93% serving fewer than 10,000 people", "One federal utility"], answer: 2, explain: "Water's local physics created a long tail of subscale systems: the raw material of the consolidation trade (American Water had 22 deals under agreement in Oct 2024)." },
    { q: "Compared with other utilities, water utilities are:", choices: ["The least capital-intensive", "About average", "The most capital-intensive: rate base runs 3x+ annual revenue", "Not capital-intensive at all"], answer: 2, explain: "Buried pipe costs vastly more than the product in it: which is exactly why mandated replacement compounds rate base and earnings for decades." },
    { q: "Best-in-class seawater desalination tariffs have fallen to roughly:", choices: ["$5/m3", "$0.28 to $0.40/m3", "$2/m3", "Zero"], answer: 1, explain: "From $1+/m3 a generation ago: membranes, energy recovery, and cheap power bent the curve. Energy (3-4 kWh/m3) remains the floor." },
    { q: "Agriculture's share of global freshwater withdrawals is about:", choices: ["10%", "30%", "50%", "70%"], answer: 3, explain: "The biggest user typically pays the least: the mispricing the Global Commission on the Economics of Water (2024) flags as a macro-scale risk." },
    { q: "Thames Water became the sector's cautionary tale because:", choices: ["Its water quality failed", "Leverage built for low rates met inflation-linked debt and rising rates on thin equity", "Customers left", "Desalination failed"], answer: 1, explain: "Demand never wavered: the balance sheet did. In regulated water, financial engineering is the self-inflicted risk." },
    { q: "Water utilities have historically traded at a premium P/E to electric utilities because:", choices: ["They are riskier", "Scarcity narrative + statutory capex growth + the most defensive demand in the economy", "They pay no dividends", "They are unregulated"], answer: 1, explain: "20-40% premiums for American Water class names: the market pays up for growth that is written into regulation rather than the cycle." }
  ],

  sources: [
    { name: "EPA 7th Drinking Water Infrastructure Needs Survey (2023)", url: "https://www.epa.gov/dwsrf/epas-7th-drinking-water-infrastructure-needs-survey-and-assessment", feeds: "US needs, pipe replacement" },
    { name: "EPA Clean Watersheds Needs Survey 2022 (2024 report)", url: "https://www.epa.gov/cwns", feeds: "wastewater needs" },
    { name: "EPA PFAS drinking water regulation (2024)", url: "https://www.epa.gov/sdwa/and-polyfluoroalkyl-substances-pfas", feeds: "PFAS limits, deadlines" },
    { name: "ASCE 2025 Infrastructure Report Card: Drinking Water", url: "https://infrastructurereportcard.org/cat-item/drinking-water-infrastructure/", feeds: "grades, main breaks, systems count" }
  ]
};
