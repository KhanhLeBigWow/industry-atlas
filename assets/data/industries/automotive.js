/* Industry Atlas - AUTOMOTIVE (full module, research-backed)
 * Anchors 2025: ~90M global light-vehicle sales (S&P Global Mobility forecast 89.6M);
 * EVs 20.7M units, ~25% of new-car sales, BEVs ~14M (IEA/ICCT/Benchmark, 2025);
 * China exports 8.32M vehicles, +30% YoY, #1 exporter 3rd straight year, ~35.6% of the
 * global market (CAAM via Gasgoo/CarNewsChina, Feb 2026); BYD BEV 2.26M vs Tesla 1.64M,
 * BYD takes the BEV crown (CnEVPost/Electrek, Jan 2026); Toyota ~11.3M group sales, 6th
 * straight year #1, VW ~9.0M with China down 8% (Nippon.com/CarExpert, Jan 2026);
 * US dealer new-vehicle gross ~$3,284/unit Q2 2025 (Haig Partners). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["automotive"] = {
  meta: {
    id: "automotive", name: "Automotive", sector: "industrials", status: "full",
    tagline: "The most complex consumer product on Earth, built at 3% margins, and China just changed who builds it.",
    marketSize: { value: 3, unit: "$T", asOf: 2025, note: "global new-vehicle revenue (~90M light vehicles at a ~$33K blended price); $4T+ adding parts, service, used, and finance" },
    cagr: { value: 3, range: [1, 4], horizon: "2025-2030" },
    maturity: "cyclical-mature", cyclicality: 4, capitalIntensity: 5, regulation: 4, disruption: 5
  },
  newsQuery: '(Toyota OR Volkswagen OR BYD OR Tesla OR "auto sales" OR "electric vehicles" OR "auto tariffs" OR "car exports")',

  overview: {
    definition: "The automotive industry designs, builds, finances, and services the roughly 90M new vehicles the world buys each year: a $3T manufacturing complex feeding a $4T+ ecosystem of dealers, lenders, insurers, and repair shops. It employs more people than any other manufacturing sector and is mid-way through its biggest structural rupture since the assembly line.",
    howItWorks: [
      "The structure is an oligopoly with no monopolist: roughly a dozen groups build most of the world's cars, led by Toyota (~11.3M vehicles in 2025, its 6th straight year on top) and Volkswagen (~9.0M). Beneath them sits a Tier 1 supplier layer (Bosch, Denso, ZF, CATL) that makes 70-80% of each vehicle's content, then thousands of Tier 2/3 shops. The OEM's real job is design, integration, brand, and final assembly: a car is 30,000 parts and the OEM makes surprisingly few of them.",
      "The economics are volume-and-utilization math wearing a consumer brand: enormous fixed costs (a new plant runs $1-2B, a new platform $5B+) mean profit swings violently with volume. Mass-market OEMs earn 3-8% operating margins in good years and lose money below ~70-80% plant utilization. The margin lives elsewhere: dealers earn about half their gross profit from parts and service on a sliver of revenue, and captive finance arms (Toyota Financial, GM Financial) reliably out-earn the factories per dollar of capital.",
      "The demand cycle is credit and confidence: cars are the largest purchase most households finance, so sales track rates, employment, and used-car values. The 2025 tape: ~90M light vehicles globally, a record; China alone is ~34.4M units (35.6% of the world); the US is 16.2M. EVs hit 20.7M units, roughly 25% of new-car sales, but adoption is wildly regional: over 60% of global EV volume is China, Europe is ~23% share, the US just ~9%.",
      "The rupture is Chinese scale: China exported 8.32M vehicles in 2025 (+30% YoY), its 3rd straight year as the world's largest auto exporter, a title Japan held for decades. BYD sold 2.26M pure BEVs in 2025 and took the global BEV crown from Tesla (1.64M, down 8.6%), while its overseas sales alone passed 1M units, up 150%. Chinese OEMs enjoy a structural cost advantage in batteries (the EV's most expensive part) and speed; the West's response is tariffs, which buys time but not competitiveness."
    ],
    history: [
      { era: "1908-1945", title: "Fordism", text: "The Model T and the moving assembly line invent mass production; the car reshapes cities, labor, and the 20th century economy." },
      { era: "1945-1973", title: "Detroit's golden age", text: "The Big 3 own half the world's output; annual model changes, dealer networks, and financing invent modern consumer capitalism." },
      { era: "1973-2008", title: "The lean revolution", text: "Oil shocks open the door; Toyota's production system (kanban, kaizen, just-in-time) rewrites manufacturing itself; Japanese and then Korean OEMs take permanent share." },
      { era: "2008-2020", title: "Crisis and the outsider", text: "GM and Chrysler go bankrupt in 2009; the survivors consolidate platforms; Tesla proves an EV startup can reach scale and a $1T valuation without dealers." },
      { era: "2020-present", title: "Chips, EVs, and China", text: "The semiconductor shortage teaches OEMs scarcity pricing (record profits on fewer units); then the EV transition and China's export wave (8.32M vehicles in 2025) redraw the map faster than any era since the 1970s." }
    ],
    trends: [
      { title: "China's export wave", direction: "up", text: "From ~700K exports in 2019 to 8.32M in 2025: BYD, Chery, and SAIC are doing to autos what Japan did in the 1980s, except with a home market of 34M units funding the assault." },
      { title: "EV adoption diverging", direction: "shift", text: "Globally ~25% of new cars are EVs, but the S-curve split: China 60%+ of volume, Europe ~23% share, the US ~9% and slipping as incentives fade. Plug-in hybrids are the surprise growth engine." },
      { title: "Legacy margin squeeze", direction: "down", text: "Tariffs, EV losses and write-downs, and Chinese price competition compress legacy OEM margins; VW's China sales fell 8% in 2025 in what was once its profit sanctuary." },
      { title: "Software-defined vehicle", direction: "shift", text: "The car becomes a computer with wheels: over-the-air updates, subscription features, and driver-assistance stacks shift value to whoever owns the software layer, which is mostly not the legacy OEMs." },
      { title: "Tariff re-regionalization", direction: "shift", text: "US, EU, and others wall off Chinese vehicles; Mexico becomes China's top export market and a nearshoring battleground; the industry rebuilds as 3 regional blocs." }
    ],
    outlook: "Volume grows at GDP-like rates (~3%), but the spoils are being redistributed: Chinese OEMs take share wherever tariffs allow, Toyota's hybrid-heavy pragmatism out-earns the EV purists, and legacy Western OEMs face a decade of expensive dual-track investment (ICE cash cows funding EV catch-up) with Chinese cost curves as the finish line. The investable core shifts toward the annuity layers (dealers' service bays, captive finance, aftermarket) and the scarce-competence assets (batteries, software), away from undifferentiated assembly."
  },

  structure: {
    suppliers: [
      { name: "Battery makers (CATL, BYD, LG Energy Solution)", note: "The new engine oligopoly: 30-40% of an EV's cost, concentrated in Asia" },
      { name: "Tier 1 systems (Bosch, Denso, ZF, Continental, Magna)", note: "Build 70-80% of vehicle content; margin follows sole-source share" },
      { name: "Semiconductors", note: "1,000-3,000 chips per car; the 2021 shortage halted plants worldwide" },
      { name: "Steel, aluminum & materials", note: "A car is ~1.5 tons of commodity exposure; hedging is a core competency" }
    ],
    producers: [
      { name: "Toyota Group", note: "~11.3M vehicles (2025), 6th straight year #1; hybrids 42% of parent sales" },
      { name: "Volkswagen Group", note: "~9.0M vehicles; China (2.69M, down 8%) turned from profit pool to battleground" },
      { name: "BYD", note: "~4.5M NEVs; 2.26M pure BEVs took Tesla's crown; overseas sales +150% to 1M+" },
      { name: "Tesla, Hyundai-Kia, GM, Ford, Stellantis", note: "The rest of the top tier: 3-7M units each, all mid-transition" }
    ],
    distributors: [
      { name: "Franchised dealers", note: "~$3,300 gross per new vehicle (Q2 2025, US); parts and service are the real profit engine" },
      { name: "Direct-to-consumer (Tesla model)", note: "No dealers, no negotiation: the margin the franchise system used to keep" }
    ],
    customers: [
      { name: "Households", note: "The largest financed purchase after housing; payment size drives everything" },
      { name: "Fleets & rental", note: "Volume buyers at thin margins; the shock absorber of OEM production planning" },
      { name: "Ride-hail & mobility", note: "Small today; the autonomy bet is that they become the buyer of record" }
    ],
    regulators: [
      { name: "Safety (NHTSA, Euro NCAP)", note: "Crash standards and recalls; a bad recall costs billions" },
      { name: "Emissions & fuel economy (EPA, EU CO2 regime, China NEV mandates)", note: "The de facto industrial policy forcing the EV transition" },
      { name: "Trade authorities", note: "Tariffs are now a first-order earnings variable: US and EU walls against Chinese EVs" }
    ],
    capital: [
      { name: "Captive finance arms", note: "Toyota Financial, GM Financial: bank-sized balance sheets funding the customer" },
      { name: "Bond markets", note: "OEMs and captives are among the largest corporate issuers on Earth" },
      { name: "Government support", note: "Bailouts (2009), EV subsidies, and China's industrial policy: the state is never far away" }
    ]
  },

  valueChain: {
    intro: "From ore to odometer: a car generates revenue 4 times (sale, finance, service, resale), and the factory captures the smallest margin of the 4.",
    stages: [
      { id: "materials", name: "Raw materials & batteries", what: "Steel, aluminum, lithium, cells", players: "CATL, BYD, LG, mining majors", valueCapture: 4,
        economics: { grossMargin: [15, 25], capitalIntensity: 5, concentration: 4 },
        linksTo: ["steel", "aluminum", "lithium"],
        deeper: "The battery is the new engine and the new OPEC: cells are 30-40% of an EV's cost and 2 Chinese companies (CATL, BYD) make roughly half the world's supply. Whoever owns cell chemistry and scale owns the EV cost curve, which is why every tariff debate is really a battery debate." },
      { id: "components", name: "Tier 1 components & systems", what: "Braking, electronics, seats, ADAS", players: "Bosch, Denso, ZF, Magna, Continental", valueCapture: 3,
        economics: { grossMargin: [12, 22], capitalIntensity: 3, concentration: 3 },
        linksTo: ["semiconductors", "batteries", "manufacturing"],
        deeper: "Suppliers build most of the car but live under annual price-down contracts: 2-3% yearly cost givebacks are standard. The escape routes are sole-source technology (ADAS sensors, e-axles) and China exposure: the Tier 1s that supply BYD grow; those tied to European ICE volume shrink." },
      { id: "assembly", name: "Design & final assembly (OEMs)", what: "Platforms, integration, brand, the factory", players: "Toyota, VW, BYD, Tesla, Hyundai-Kia", valueCapture: 2,
        economics: { grossMargin: [10, 20], capitalIntensity: 5, concentration: 3 },
        linksTo: ["ev", "robotics", "manufacturing"],
        deeper: "The famous 3% business: $5B platforms, $1-2B plants, and 3-8% operating margins for mass-market players (Toyota's ~10% is the execution ceiling; BYD's vertical integration is the new cost floor). Utilization is destiny: below ~75-80% of straight-time capacity, fixed costs eat the P&L, which is why overcapacity always ends in price wars." },
      { id: "distribution", name: "Distribution & retail", what: "Dealers, logistics, direct sales", players: "AutoNation, Penske, Lithia; Tesla direct", valueCapture: 3,
        economics: { grossMargin: [10, 15], capitalIntensity: 2, concentration: 2 },
        linksTo: ["retail", "logistics"],
        deeper: "US dealers grossed ~$3,284 per new vehicle in Q2 2025, but the front end is the loss leader: parts and service generate roughly half of dealer gross profit on barely a tenth of revenue, and F&I (finance and insurance products) adds another high-margin layer per unit. Franchise laws make the network a legally protected annuity." },
      { id: "finance", name: "Auto finance & insurance", what: "Loans, leases, floorplan, insurance", players: "Captives (Toyota Financial, GMF), banks, Ally", valueCapture: 4,
        economics: { grossMargin: [30, 45], capitalIntensity: 4, concentration: 3 },
        linksTo: ["banking", "insurance"],
        deeper: "The quiet profit pool: captives earn steady spreads on bank-sized books, subsidize sales with promotional rates when demand softens, and hold the residual-value risk on every lease. When used-car prices fall, lease residuals become the industry's hidden balance-sheet bomb; when rates rise, the monthly payment, not the sticker, caps demand." },
      { id: "aftermarket", name: "Aftermarket, used & mobility", what: "Service, parts, used vehicles, ride-hail", players: "Dealers' service bays, O'Reilly class, Carvana, CarMax", valueCapture: 4,
        economics: { grossMargin: [25, 45], capitalIntensity: 2, concentration: 2 },
        linksTo: ["retail", "logistics"],
        deeper: "The 290M-vehicle US car parc (average age ~13 years) is an annuity: every aging vehicle is recurring parts-and-labor demand that out-margins the new-car business by multiples. The used market turns over more than 2x the new market's volume. EVs threaten the model long-term (fewer moving parts, less service), which is the dealers' own transition problem." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector in 4 different P&Ls. OEMs: revenue = units x price, with brutal operating leverage; watch utilization, mix (trucks and premium carry the margin), incentive spend, and warranty accruals. Tier 1 suppliers: contractual price-downs against volume growth; margin follows sole-source technology share. Dealers: thin front-end, fat back-end; parts, service, and F&I are roughly half of gross profit on a fraction of revenue. Captive finance: a spread bank wearing a car badge, earning steadily until used-vehicle values or credit turn.",
      "The cycle's signature is operating leverage in both directions: the 2021-22 chip shortage proved OEMs earn record profits at depressed volumes when scarcity supports price; 2024-25 proved the reverse as normalization plus Chinese competition compressed pricing. The EV transition doubles capital intensity mid-cycle: legacy OEMs fund dual ICE and EV lineups (multi-billion write-downs are now routine) while BYD-class vertical integration sets a cost benchmark the West cannot yet match. Toyota's hybrid-weighted lineup (42% of its 2025 sales) is the current proof that pragmatism out-earns ideology in this transition."
    ],
    fingerprint: { grossMargin: 18, recurringRevenue: 25, capitalIntensity: 85, pricingPower: 35, cyclicality: 85, operatingLeverage: 80 },
    lines: [
      { label: "Units & mix", note: "The volume engine: SAAR prints, China monthlies, and the truck/premium mix that carries margin" },
      { label: "Pricing & incentives", note: "ATPs minus incentive spend: the first casualty of overcapacity" },
      { label: "EV mix & losses", note: "Most legacy EV lines lose money per unit; the crossover year keeps slipping" },
      { label: "Captive finance income", note: "Spread income, credit provisions, and lease residual marks" },
      { label: "Warranty & recalls", note: "The tail risk line: a bad launch or defect costs billions" }
    ],
    unitEconomics: {
      unit: "per new vehicle (US, illustrative, 2025)",
      items: [
        { label: "OEM revenue / operating profit", value: "~$35-50K / ~$1,500-3,000", note: "3-8% mass-market operating margin; Toyota-class execution ~10%" },
        { label: "Dealer front-end gross", value: "~$3,284", note: "Q2 2025 per new unit retailed (Haig Partners); falling from COVID peaks" },
        { label: "Dealer back-end (F&I + service)", value: "~$2,000+ F&I; service at 40%+ gross margin", note: "roughly half of dealer gross profit on ~10% of revenue" },
        { label: "Battery pack (EV)", value: "~$8-12K", note: "30-40% of an EV's cost: the reason China's cell dominance matters" }
      ]
    }
  },

  kpiRefs: ["retail-inventory-turns", "semi-utilization"],
  kpiLocal: [
    {
      id: "auto-days-supply", name: "Days' Supply (Dealer Inventory)", industries: ["automotive"],
      definition: "How many days of inventory sit on dealer lots at the current selling rate: the industry's pricing-power thermometer.",
      formula: "Days' supply = units in inventory / average daily sales rate",
      interpretation: "Low days' supply = scarcity pricing (the 2021-22 profit bonanza ran near 30 days). High days' supply forces incentives, which torch OEM and dealer margins together.",
      healthy: "45-60 days; hot models leaner", warning: "80-100+ days: incentive wars and production cuts follow"
    },
    {
      id: "auto-capu", name: "Plant Capacity Utilization", industries: ["automotive"],
      definition: "Production as a share of straight-time plant capacity: the master variable of OEM profitability.",
      formula: "Utilization = units produced / rated straight-time capacity",
      interpretation: "Fixed costs dominate assembly: above ~80% plants mint money, below ~70% they burn it. Chronic industry overcapacity (especially China's) is why price wars keep recurring.",
      healthy: ">80% with flexible shifts", warning: "<70%: losses, then plant closures, then political fights"
    }
  ],

  health: {
    intro: "OEM health is utilization, mix, and transition discipline; dealer health is the back-end annuity; everyone's health is exposure to Chinese cost curves and tariff walls.",
    pillars: [
      { name: "Volume & mix", weight: 25, metrics: "Units vs SAAR, truck/premium share, market-share trend", healthy: "Share stable with rich mix", warning: "Share loss masked by incentives" },
      { name: "Margin & cost position", weight: 25, metrics: "Operating margin vs peers, cost per unit vs BYD benchmark, utilization", healthy: "5%+ mass-market, 10%+ premium", warning: "Sub-3% margins at healthy volumes" },
      { name: "Transition readiness", weight: 20, metrics: "EV/hybrid mix, battery sourcing, software capability, EV unit economics", healthy: "Multi-powertrain flexibility (the Toyota template)", warning: "EV losses widening with no cost path" },
      { name: "Balance sheet & captive", weight: 15, metrics: "Net industrial cash, captive credit metrics, lease residual exposure", healthy: "Net industrial cash; captive delinquencies stable", warning: "Industrial debt funding dividends; residual write-downs" },
      { name: "Geographic & tariff exposure", weight: 15, metrics: "China dependence, tariff-exposed flows, plant footprint vs demand", healthy: "Build-where-you-sell footprint", warning: "Profit pool concentrated in one contested market (the VW-in-China lesson)" }
    ],
    scoringNote: "In autos, the unforgivable event is stranded capacity: plants sized for a demand or powertrain mix that never arrives compound losses for a decade."
  },

  valuation: {
    intro: "The market prices autos as cyclical, capital-hungry, and disruptable: legacy OEMs trade at some of the lowest multiples in global equities, while anything with a software or battery story trades on a different planet.",
    methods: [
      { name: "P/E (legacy OEMs)", use: "The standard lens for Toyota/VW/GM class names", avoid: "Peak-cycle earnings at trough multiples that look cheap all the way down", strengths: "Simple, comparable, long history", weaknesses: "Ignores captive finance leverage and pension/warranty tails", range: { low: 4, high: 9, asOf: 2025, note: "Toyota earns the top; distressed transitions the bottom" } },
      { name: "EV / EBITDA (industrial ops)", use: "Cross-border comps with captives carved out", avoid: "Consolidated EV math: captive debt is not industrial debt", strengths: "Normalizes leverage and D&A policy", weaknesses: "EBITDA overstates cash in a 5%-of-sales capex business", range: { low: 2, high: 5, asOf: 2025, note: "structurally the cheapest large-cap manufacturing on Earth" } },
      { name: "EV / Sales (growth & EV names)", use: "Pre-profit EV makers and the Tesla class", avoid: "Applying it to 3%-margin legacy volume", strengths: "Works when margins are the debate", weaknesses: "A license for narrative: Tesla trades as an AI option, not a carmaker", range: { low: 1, high: 8, asOf: 2025, note: "BYD mid-range; Tesla the perennial outlier" } },
      { name: "Sum-of-the-parts", use: "Separating captive finance (book value), stakes, and industrial ops", avoid: "Double-counting captive earnings in the industrial multiple", strengths: "Reveals hidden value (dealer groups, captives, stakes like Toyota's holdings)", weaknesses: "Markets rarely pay full SOTP for conglomerate autos", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; the activist's favorite lens" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an automaker quickly: normalized industrial EBITDA times a cycle-honest multiple, minus net industrial debt (leave the captive at book).",
      inputs: [
        { id: "vc-ebitda", label: "Normalized industrial EBITDA ($B)", min: 1, max: 40, step: 1, value: 15, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 1.5, max: 8, step: 0.5, value: 3.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net industrial debt ($B)", min: -30, max: 60, step: 1, value: 0, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats autos as 3 separate trades wearing one sector badge: a value/cyclical trade in legacy OEMs (cheap for structural reasons, tradable at extremes), a growth/geopolitics trade in the China-EV complex (BYD's cost curve vs the tariff wall), and a quality-annuity trade in the layers around the factory (dealers, aftermarket, captives). Confusing the 3 is how generalists get hurt here.",
    debates: [
      { topic: "China's export wave: unstoppable or tariff-capped?", bull: "8.32M exports in 2025 (+30%) with a 20-30% landed cost advantage and 1M+ BYD units already overseas: Japan's 1980s playbook at 3x the speed, and transplant factories (Hungary, Brazil, Thailand, Mexico) hop the tariff walls just as Japanese transplants did.", bear: "The walls are real and rising: US effectively closed, EU duties climbing, and every new market China wins triggers a political response. Domestic overcapacity plus a price war means exports are partly distress volume, not durable share." },
      { topic: "Legacy OEMs: value or value trap?", bull: "4-6x earnings, dividend yields above 5%, net industrial cash at several names, and hybrid demand extending the profitable ICE tail for a decade: Toyota just proved the pragmatists compound while the market prices extinction.", bear: "Cheapness is the market correctly pricing a decade of dual-track capex, Chinese price competition, and EV write-downs: the terminal value of undifferentiated assembly is genuinely in question. Cigar butts with $5B annual capex bills." },
      { topic: "Tesla: carmaker or AI option?", bull: "Deliveries fell 8.6% in 2025 and the stock barely cared, because the value is autonomy, robotaxis, and energy: if full self-driving works at scale, the car business is the distribution channel for a software margin structure autos have never seen.", bear: "It lost the BEV crown to BYD (2.26M vs 1.64M), its lineup is aging, competition is global, and the AI narrative carries a car company's multiple risk: any stumble in autonomy timelines reprices it as an automaker, which is a long way down." }
    ],
    cycle: {
      where: "Post-scarcity normalization: the 2021-22 pricing bonanza is fully unwound, inventories and incentives are rebuilding, China's price war is exporting deflation, and tariffs are scrambling the map. Volume at records, margins past peak: a late-cycle setup for producers even as EV adoption compounds.",
      drivers: "Rates and monthly-payment math, used-car values, China's overcapacity and export flows, tariff policy, and the EV cost curve (battery prices).",
      leads: [
        "US SAAR (BEA/FRED, free, monthly): the demand pulse",
        "China CPCA/CAAM monthly sales and exports (free summaries)",
        "Manheim Used Vehicle Value Index (free, monthly): residuals and trade-in health",
        "Dealer inventory days' supply and incentive spend (Cox Automotive/NADA releases)",
        "Battery cell and lithium prices: the EV cost-curve input"
      ]
    },
    exposure: [
      { vehicle: "Toyota", note: "The execution compounder: hybrid pragmatism, ~10% margins, fortress balance sheet" },
      { vehicle: "BYD", note: "The wave itself: vertical integration from cells to ships; tariff risk is the position" },
      { vehicle: "Tesla", note: "The optionality trade: sized as an AI/autonomy option, not a car position" },
      { vehicle: "Dealer groups (AutoNation, Penske, Lithia class)", note: "The annuity layer: parts, service, and F&I compound through OEM pain" },
      { vehicle: "Suppliers & battery chain (CATL class, Tier 1s)", note: "Content-per-vehicle growth vs price-down grind; pick sole-source technology" }
    ],
    catalysts: [
      { when: "Monthly (1st week)", what: "China CPCA prints and US SAAR: the global demand tape" },
      { when: "Quarterly (early Jan/Apr/Jul/Oct)", what: "Tesla and BYD delivery prints: the EV scoreboard the whole complex trades on" },
      { when: "Ongoing", what: "Tariff and trade decisions (US, EU, Mexico): now a first-order earnings variable" },
      { when: "Quarterly earnings", what: "Pricing/incentive commentary, EV loss trajectories, captive credit metrics" }
    ],
    data: [
      { series: "US light vehicle sales (SAAR)", source: "BEA via FRED (free)", why: "The cleanest monthly demand signal" },
      { series: "China sales & exports", source: "CAAM/CPCA monthly summaries (free)", why: "The market that moves the world total" },
      { series: "Manheim Used Vehicle Value Index", source: "publicmanheim.com (free)", why: "Used values drive trade-ins, residuals, and captive health" },
      { series: "EU registrations", source: "ACEA (free, monthly)", why: "EV share and the Chinese-brand penetration tape" },
      { series: "Global EV sales & battery prices", source: "IEA Global EV Outlook (free, annual)", why: "The transition's authoritative scoreboard" }
    ],
    playbook: [
      { regime: "Recession", behavior: "The classic casualty: SAAR falls 20-30%, operating leverage inverts, captives take credit losses. Own the aftermarket (repairs rise as new-car purchases defer); avoid leveraged OEMs." },
      { regime: "Rates rising", behavior: "Payment math bites before sticker prices do; captive spreads compress, lease returns lose money. Demand shifts used and cheap: watch subprime auto delinquencies as the canary." },
      { regime: "Oil spike", behavior: "Mix shifts small and electric; truck-heavy US OEMs lose their margin engine. Historically the trigger for share shifts (1973, 1979, 2008): transitions accelerate under fuel pain." },
      { regime: "Trade war escalation", behavior: "Tariffs reprice supply chains overnight: transplant-heavy and build-where-you-sell names win; export-dependent models (and their suppliers) get hit. Mexico exposure is the swing factor." }
    ]
  },

  players: [
    { name: "Toyota", role: "Volume and execution leader", country: "JP", real: true, note: "~11.3M group vehicles 2025, 6th straight year #1; hybrids 42% of parent sales" },
    { name: "Volkswagen Group", role: "Europe's giant in transition", country: "DE", real: true, note: "~9.0M vehicles; China fell 8% to 2.69M: the old profit pool is now the battlefield" },
    { name: "BYD", role: "The vertically integrated challenger", country: "CN", real: true, note: "2.26M BEVs in 2025 took Tesla's crown; ~4.5M NEVs total; overseas +150% to 1M+" },
    { name: "Tesla", role: "EV pioneer turned AI option", country: "US", real: true, note: "1.64M deliveries 2025, (8.6%) YoY; valuation rides autonomy, not units" },
    { name: "Hyundai-Kia", role: "The quiet share-taker", country: "KR", real: true, note: "~7M units; design-and-EV execution that outgrew its price bracket" },
    { name: "GM & Ford", role: "Detroit's survivors", country: "US", real: true, note: "Truck franchises fund the transition; tariff-era winners at home, subscale abroad" },
    { name: "Stellantis", role: "The 14-brand rollup", country: "NL", real: true, note: "Peugeot-Fiat-Chrysler merger math: synergy margins vs brand overstretch" },
    { name: "CATL", role: "The battery king", country: "CN", real: true, note: "Roughly a third of global cell supply: the OPEC of the EV era" }
  ],

  geography: [
    { country: "CN", role: "Largest market, producer, and exporter", note: "34.4M domestic sales (35.6% of world), 8.32M exports in 2025: all 3 crowns at once" },
    { country: "US", role: "Richest profit pool", note: "16.2M sales; trucks and tariffs shelter Detroit; EV share just ~9%" },
    { country: "JP", role: "The lean superpower", note: "Toyota's system still sets the manufacturing benchmark; yen and exports drive earnings" },
    { country: "DE", role: "Premium heartland under siege", note: "VW/BMW/Mercedes fund the industrial base; squeezed between Chinese EVs and US tariffs" },
    { country: "KR", role: "The agile #3 bloc", note: "Hyundai-Kia's design-led rise plus a domestic battery complex (LG, SK, Samsung)" },
    { country: "MX", role: "The tariff-era pivot", note: "Nearshoring hub for US supply and now China's top export destination: both blocs' beachhead" }
  ],

  cycles: [
    { year: 1913, title: "The moving assembly line", kind: "boom", text: "Ford cuts Model T build time from 12 hours to 93 minutes; the price halves and the mass market is born. Lesson: process innovation beats product innovation for reshaping an industry." },
    { year: 1979, title: "Oil shock II and the Japanese wave", kind: "shift", text: "Fuel panic meets Toyota's lean quality; Japanese share of the US market triples in a decade and never gives it back. Lesson: share lost in a crisis is lost for a generation." },
    { year: 2009, title: "Detroit's bankruptcy", kind: "bust", text: "GM and Chrysler fail into government hands as SAAR collapses; decades of legacy costs and overcapacity come due at once. Lesson: in a 3%-margin business, the balance sheet is the product." },
    { year: 2021, title: "The chip shortage", kind: "shift", text: "Plants idle for want of $1 chips; scarce inventory sends prices and OEM profits to records on fewer units. Lesson: the industry discovered it over-produces; discipline, not volume, makes money." },
    { year: 2025, title: "China's crown year", kind: "shift", text: "China exports 8.32M vehicles (+30%), BYD dethrones Tesla in BEVs, and tariff walls rise on 2 continents. Lesson: cost curves built at home become geopolitics abroad: the 1980s Japan playbook, faster and bigger." }
  ],

  risks: [
    { name: "Chinese overcapacity exporting deflation", severity: 4, likelihood: 5, transmission: "Domestic price war -> exports at distress prices -> global ATPs and margins compress -> legacy restructuring and plant closures." },
    { name: "Tariff and trade-war escalation", severity: 4, likelihood: 4, transmission: "New tariffs -> supply chains reprice overnight -> stranded plants and pass-through inflation -> retaliation hits exporters' volumes." },
    { name: "EV transition stranding ICE capital", severity: 4, likelihood: 3, transmission: "Adoption outruns plans in some markets, stalls in others -> mistimed capacity both ways -> write-downs and dual-track capex burn." },
    { name: "Used-value / credit unwind", severity: 3, likelihood: 3, transmission: "Used prices fall -> lease residuals and trade-in equity sink -> captive losses and tighter credit -> new-car demand feeds back down." },
    { name: "Autonomy repricing the ownership model", severity: 5, likelihood: 2, transmission: "Robotaxis reach cost parity -> households defer ownership -> volume shifts to fleets -> per-unit economics and dealer networks reprice structurally." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["About a dozen big companies build the world's roughly 90M new cars a year: Toyota sells the most (~11.3M in 2025), and China now makes and exports more cars than anyone. Carmakers keep only about 3 cents of profit per dollar of sales; the better businesses are around the car: the loan, the repairs, and the parts. 1 in 4 new cars sold globally is now electric, though in the US it is fewer than 1 in 10."] },
    L2: { title: "Intermediate", text: ["The economics: huge fixed costs make plant utilization the master variable (above ~80% plants mint money, below ~70% they burn it), and suppliers build most of the car under annual price-down contracts. Dealers earn about half their gross profit from parts and service; captive finance arms quietly out-earn the factories. The 2025 scoreboard: China at 35.6% of the global market with 8.32M exports, BYD past Tesla in BEVs (2.26M vs 1.64M), EVs at ~25% of global sales but wildly uneven by region."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: OEMs on utilization, mix, and incentive discipline (carve the captive out of every multiple); suppliers on sole-source content growth vs the price-down grind; dealers on back-end gross (the front end is a customer-acquisition cost); captives on residual and credit exposure. The structural overlay: Chinese cost curves (batteries 30-40% of EV cost, half the world's cells from 2 Chinese firms) versus Western tariff walls, with Toyota's multi-powertrain pragmatism as the current margin-proof that the transition rewards flexibility over ideology."] },
    L4: { title: "Expert", text: ["Trade the monthly tape (SAAR, CPCA, Manheim) against positioning in the 3 sub-trades: legacy value (cheap for structural reasons: tradable at inventory and incentive extremes), the China complex (BYD's transplant strategy vs tariff escalation), and the annuity layer (dealers, aftermarket) that compounds through OEM pain. Live debates: whether China's 8.32M-export wave is durable share or distress volume, whether legacy 4-6x P/Es are value or correctly priced decline, and whether Tesla's (8.6%) delivery year matters when the multiple rides autonomy."] },
    L5: { title: "Institutional", text: ["Allocator's frame: autos offer deep-value cyclicality with a live disruption overlay: underwrite legacy OEMs only with balance-sheet margin (net industrial cash) and treat their yield as compensation for terminal-value risk; own the layers where returns persist (aftermarket annuities, dealer consolidation, battery/sole-source technology); and treat China exposure as the sector's dominant factor, hedgeable only through geographic footprint. The decade's central question is whether tariff walls can hold a 20-30% cost gap at bay long enough for the West to close it: position for the answer being 'partially'."] }
  },

  quiz: [
    { q: "The world's largest vehicle exporter in 2025 was:", choices: ["Japan", "Germany", "China: 8.32M vehicles, +30% YoY, its 3rd straight year on top", "South Korea"], answer: 2, explain: "China went from ~700K exports in 2019 to 8.32M in 2025, taking the crown Japan held for decades: the industry's biggest structural shift." },
    { q: "In 2025, the global BEV sales crown went to:", choices: ["Tesla", "BYD: 2.26M BEVs vs Tesla's 1.64M", "Volkswagen", "Toyota"], answer: 1, explain: "BYD's BEV sales grew ~28% while Tesla's fell 8.6%: the first year the crown changed hands, with BYD's overseas sales alone passing 1M units." },
    { q: "Mass-market automakers typically earn operating margins of:", choices: ["15-20%", "3-8%: enormous fixed costs make utilization the master variable", "Over 25%", "Zero: they all lose money"], answer: 1, explain: "A $1-2B plant and $5B platforms mean profit swings violently with volume; Toyota's ~10% is the execution ceiling, not the norm." },
    { q: "Dealers make most of their gross profit from:", choices: ["New-car sales", "Parts, service, and F&I: roughly half of gross profit on a fraction of revenue", "Advertising", "Trade-ins alone"], answer: 1, explain: "The ~$3,300 front-end gross per new vehicle is almost a customer-acquisition cost; the service bay and finance office are the annuity." },
    { q: "Global EV share of new-car sales in 2025 was roughly:", choices: ["5%", "25%, but wildly regional: 60%+ of volume in China, ~9% share in the US", "50% everywhere", "75%"], answer: 1, explain: "20.7M EVs sold globally: the S-curve is real but split by geography, with China supplying and buying most of it." },
    { q: "The battery pack matters strategically because it is:", choices: ["Easily commoditized everywhere", "30-40% of an EV's cost, with about half of world cell supply from 2 Chinese firms", "Only 5% of vehicle cost", "Made mostly in Europe"], answer: 1, explain: "Whoever owns cell chemistry and scale owns the EV cost curve: which is why every tariff debate is really a battery debate." },
    { q: "The 2021 chip shortage taught the industry that:", choices: ["Volume is everything", "Scarcity pays: record profits on fewer units when inventory discipline holds", "Chips are optional", "Prices cannot rise"], answer: 1, explain: "Plants idled for want of $1 semiconductors, inventories hit record lows, and pricing power produced the best OEM margins in decades." },
    { q: "The world's top-selling automaker in 2025 was:", choices: ["Volkswagen", "BYD", "Toyota: ~11.3M group vehicles, its 6th straight year at #1", "Tesla"], answer: 2, explain: "Toyota's hybrid-heavy lineup (42% of parent sales) kept it on top while VW slipped to ~9.0M, dragged by an 8% decline in China." }
  ],

  sources: [
    { name: "S&P Global Mobility 2025 sales forecast (89.6M)", url: "https://press.spglobal.com/2024-12-20-S-P-Global-Mobility-forecasts-89-6M-auto-sales-worldwide-in-2025", feeds: "volumes" },
    { name: "CnEVPost: BYD vs Tesla 2025 BEV tallies", url: "https://cnevpost.com/2026/01/02/tesla-q4-2025-global-deliveries/", feeds: "EV scoreboard" },
    { name: "Gasgoo/CAAM: China 2025 exports (8.32M)", url: "https://autonews.gasgoo.com/articles/news/chinas-auto-exports-2025-surge-in-total-volume-and-structural-shift-2015800194803539968", feeds: "China exports" },
    { name: "ICCT/IEA global EV market monitor 2025", url: "https://theicct.org/publication/global-ev-market-monitor-for-ldvs-2025/", feeds: "EV adoption" }
  ]
};
