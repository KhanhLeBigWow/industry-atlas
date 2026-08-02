/* Industry Atlas - ELECTRIC VEHICLES (full module, research-backed)
 * Anchors 2025: global EV sales 20.7M units (BEV+PHEV), +20% YoY, roughly 1 in 4
 * new cars (Rho Motion, Jan 2026); China 12.9M, Europe 4.3M (+33%), US 1.8M ((4)%);
 * battery pack prices $108/kWh, (8)% YoY, China average $84/kWh (BloombergNEF, Dec 2025);
 * public chargers top 7M globally, 1.8M added in 2025, China >65% of stock (IEA GEVO 2026);
 * BYD #1 in BEVs at 2.26M vs Tesla 1.64M ((8.6)%, second straight annual decline)
 * (CNBC / TechCrunch, Jan 2026); Chinese EV makers down from 487 (2018) to ~130 (2024),
 * Hozon/Neta in bankruptcy, China auto-industry margin 4.4% in 2025, ~$69B of revenue
 * erased 2023-2025 (TechNode, S&P Global, CNN, Bloomberg); China vehicle exports 5.8M
 * in 2025, +20% YoY; ~11 electric light-duty vehicles per public charge point (IEA). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["ev"] = {
  meta: {
    id: "ev", name: "Electric Vehicles", sector: "industrials", status: "full",
    tagline: "The car rebuilt around the battery: record volumes, collapsing costs, and a price war eating its own winners.",
    marketSize: { value: 800, unit: "$B", asOf: 2025, note: "derived: 20.7M EVs sold in 2025 (Rho Motion) at a blended ~$40K ASP; the battery and charging chains stack on top" },
    cagr: { value: 15, range: [10, 20], horizon: "2025-2030" },
    maturity: "growth", cyclicality: 4, capitalIntensity: 5, regulation: 4, disruption: 5
  },
  newsQuery: '("electric vehicle" OR "EV sales" OR BYD OR Tesla OR "battery prices" OR "charging infrastructure" OR "plug-in hybrid")',

  overview: {
    definition: "The electric vehicle industry designs, builds, and fuels cars whose core cost is a battery, not an engine. It spans battery-electric (BEV) and plug-in hybrid (PHEV) vehicles, the cell makers beneath them, and the charging networks around them: an industry being scaled and shaken out at the same time.",
    howItWorks: [
      "The product economics invert the old car business. In a combustion car the engine is maybe 15% of cost and margins live in variants and financing; in an EV the battery pack is 25% to 40% of cost, so whoever controls cells controls the P&L. That is why the decisive 2025 datapoint was not a car launch but a cost print: average pack prices fell 8% to $108/kWh (BloombergNEF), and China's average hit $84/kWh, 44% to 56% below what North American and European buyers pay. Battery cost decline is the industry's Moore's Law, and China is running it fastest.",
      "Scale is now real and lopsided. 20.7M EVs sold globally in 2025, up 20%, roughly 1 in 4 new cars (Rho Motion). But the growth map is jagged: China took 12.9M of those units, Europe grew 33% to 4.3M, the rest of the world jumped 48% to 1.7M, and the US shrank 4% to 1.8M after federal tax credits expired. China also builds the majority of the world's EVs and most of its batteries, which makes EV supply chains a geopolitical instrument as much as an industrial one.",
      "Competition is a war of attrition priced in cash burn. China's price war cut average selling prices for years running, drove the domestic auto industry's profit margin down to 4.4% in 2025, and by one Bloomberg estimate erased roughly $69B of revenue between 2023 and 2025. The casualty list is long: Chinese EV makers went from 487 registered in 2018 to about 130 by 2024; Ji Yue (the Baidu-Geely venture) entered liquidation and Hozon, parent of Neta, entered bankruptcy in 2025. The survivors, led by BYD and Geely, convert scale into cost leadership and export the war: China shipped 5.8M vehicles abroad in 2025, up 20%.",
      "The moat question is unsettled. BYD passed Tesla as the world's largest BEV maker in 2025 (2.26M BEVs vs 1.64M Tesla deliveries, Tesla's second consecutive annual decline) on vertical integration: it makes its own cells, semiconductors, and ships. Tesla argues the car is a robot and the value is autonomy software. Legacy OEMs argue brands and manufacturing depth win once the technology commoditizes. Meanwhile the refueling network is being rebuilt in public: over 7M public charge points worldwide at end-2025, with 1.8M added that year alone and China holding more than 65% of the stock (IEA). Whoever is right about the moat, the loser's outcome is already visible in Hozon's filings."
    ],
    history: [
      { era: "1996-2003", title: "False dawn", text: "GM's EV1 proves electric drive works and dies anyway; lead-acid and NiMH batteries cannot carry a market. The lesson waits for lithium-ion." },
      { era: "2004-2012", title: "Tesla's wedge", text: "A Silicon Valley startup uses laptop cells in a Lotus body, nearly dies in 2008, then lands the Model S: EVs reframed from compliance boxes to status objects." },
      { era: "2013-2019", title: "China decides", text: "Beijing designates NEVs a strategic industry: subsidies, license-plate privileges, and forced learning build CATL, BYD, and hundreds of startups. Tesla's Model 3 survives production hell and proves mass-market demand." },
      { era: "2020-2022", title: "The bubble", text: "Zero rates plus climate policy equals mania: Rivian floats at $150B+ on near-zero revenue, SPACs mint pre-product EV makers, lithium prices go vertical. Real capacity gets built underneath the froth." },
      { era: "2023-present", title: "Price war and shakeout", text: "Tesla cuts first; BYD cuts harder; Chinese margins compress to 4.4% and weaker brands fail (Ji Yue, Hozon/Neta). Volumes hit records anyway: 20.7M in 2025, 1 in 4 cars sold. Growth and carnage, simultaneously." }
    ],
    trends: [
      { title: "Battery cost decline", direction: "down", text: "Pack prices fell 8% to $108/kWh in 2025 despite rising metal prices, on LFP adoption and cell overcapacity (BloombergNEF). Every $10/kWh is roughly $600 to $800 off a mass-market EV's cost." },
      { title: "China's export wave", direction: "up", text: "5.8M vehicles exported in 2025 (+20%): the price war's survivors take their cost curves global, forcing tariff walls in the US and EU and factory-localization deals everywhere else." },
      { title: "PHEV resurgence", direction: "shift", text: "Plug-in hybrids grew faster than BEVs in Europe in 2025 (+38% vs +31%): buyers hedge range anxiety, OEMs harvest them for margin, and purists call it a detour. Either way they count, and they carry the transition." },
      { title: "Charging buildout", direction: "up", text: "1.8M public points added in 2025 (+33%) to top 7M; fast and ultra-fast chargers grew 40% to 2.2M and average delivered speed rose 15% (IEA). The refueling network is compounding faster than the fleet." },
      { title: "Western demand wobble", direction: "shift", text: "US sales fell 4% in 2025 once federal credits expired: the first big natural experiment in subsidy removal. Europe reaccelerated on CO2 targets. Policy, not preference, still sets the Western slope." }
    ],
    outlook: "Volume growth looks durable: costs keep falling, China's machine keeps scaling, and charging anxiety keeps shrinking. Profit is the contested variable. The Chinese shakeout should consolidate toward a handful of global cost leaders by 2030; Western OEMs must cross the transition valley before their combustion cash cows retire; and the US market must prove it can grow without credits. Expect record units, thin margins, more bankruptcies, and a decade-defining fight over whether software or scale sets the terminal moat."
  },

  structure: {
    suppliers: [
      { name: "Battery cell makers (CATL, BYD, LG Energy Solution, Panasonic, SK On)", note: "The industry's true OPEC: cells are 25% to 40% of vehicle cost" },
      { name: "Upstream materials (lithium, nickel, graphite, cathode/anode makers)", note: "Volatile feedstock; China refines the majority of nearly all of it" },
      { name: "Power semiconductors & electronics (Infineon, STMicro, onsemi)", note: "SiC inverters and chips: the quiet content-per-vehicle winners" },
      { name: "Motors, e-axles, thermal & software stacks (Bosch, ZF, Nidec class)", note: "Legacy tier-1s reinventing themselves around fewer moving parts" },
      { name: "Gigacasting, tooling & factory automation (IDRA class)", note: "The manufacturing-method arms race: fewer parts, fewer robots, lower cost per body" }
    ],
    producers: [
      { name: "BYD", note: "World #1: 2.26M BEVs in 2025, ~4.6M NEVs total, vertically integrated to the cell" },
      { name: "Tesla", note: "1.64M deliveries in 2025, (8.6)% and a second straight annual decline; the autonomy-option thesis" },
      { name: "Chinese challengers (Geely, Xiaomi, Li Auto, Chery, NIO class)", note: "The shakeout's contenders: 487 makers in 2018 became ~130 by 2024" },
      { name: "Legacy OEMs (VW, Hyundai-Kia, GM, Stellantis, Toyota)", note: "Crossing the valley: EV losses funded by combustion profits" },
      { name: "US pure plays (Rivian, Lucid)", note: "The 2021 vintage's survivors: real products, unproven unit economics, finite runway" }
    ],
    distributors: [
      { name: "Direct-to-consumer online sales", note: "Tesla's template: no dealers, posted prices, software-style updates" },
      { name: "Franchise dealers & agency models", note: "Legacy channel adapting; EVs need less service revenue, which dealers feel" },
      { name: "Export & localization channels", note: "5.8M Chinese vehicle exports in 2025; tariff walls force assemble-where-you-sell deals" }
    ],
    customers: [
      { name: "Households", note: "Total cost of ownership vs sticker shock; charging access decides who buys" },
      { name: "Fleets & ride-hail", note: "High-utilization economics favor EVs first; the volume floor" },
      { name: "Commercial & delivery", note: "Vans and light trucks electrify on route math, not sentiment" },
      { name: "Governments & public fleets", note: "Procurement mandates seed volume and charging demand in every major market" }
    ],
    regulators: [
      { name: "Beijing (MIIT, NDRC)", note: "The industry's chief architect: subsidies, credits, and consolidation pressure" },
      { name: "EU (CO2 fleet targets, 2035 combustion phase-out)", note: "Demand by decree; tariffs on Chinese imports layered on top" },
      { name: "US (EPA, NHTSA, Treasury)", note: "Credit expiry cut sales 4% in 2025: proof policy is a demand line item" },
      { name: "Safety & battery regulators (UNECE, GB standards)", note: "Thermal-runaway rules, recycling mandates, data rules for connected cars" }
    ],
    capital: [
      { name: "Equity markets", note: "The 2021 SPAC vintage funded capacity; the survivors now fund from cash flow" },
      { name: "State capital (China)", note: "Provincial funds and policy banks built the field, and now cull it" },
      { name: "Green bonds & battery project finance", note: "Gigafactories are $2B to $5B a shot; charging networks are infrastructure-fund assets" },
      { name: "Strategic & JV capital", note: "OEM-cell joint ventures split the capex and lock the supply: the industry's marriage contracts" }
    ]
  },

  valueChain: {
    intro: "From brine ponds to a software subscription. Value capture today sits with cell champions and vertically integrated OEMs; the endgame fight is whether it migrates up to software or stays with whoever owns the cost curve.",
    stages: [
      { id: "materials", name: "Battery materials", what: "Lithium, nickel, graphite, cathodes, anodes", players: "Albemarle, SQM, Ganfeng, Chinese refiners", valueCapture: 3,
        economics: { grossMargin: [15, 50], capitalIntensity: 4, concentration: 4 },
        linksTo: ["lithium", "mining", "rare-earths", "chemicals"],
        deeper: "Feast-or-famine economics: lithium margins swing with a spot price that moved ~10x and back within 4 years. China's grip on refining (not mining) is the West's real dependency, and the reason materials policy is now industrial policy." },
      { id: "cells", name: "Cells & packs", what: "The EV's engine-equivalent: 25% to 40% of vehicle cost", players: "CATL, BYD, LG Energy Solution, Panasonic", valueCapture: 5,
        economics: { grossMargin: [10, 25], capitalIntensity: 5, concentration: 5 },
        linksTo: ["batteries", "manufacturing"],
        deeper: "The chain's power seat. Pack prices hit $108/kWh in 2025 ((8)% YoY) on LFP adoption and brutal overcapacity; China's $84/kWh average is the global cost floor. CATL alone supplies over a third of the world's cells: an oligopoly deeper than the OEM layer it serves." },
      { id: "components", name: "Power electronics & drivetrain", what: "Inverters, SiC chips, motors, e-axles, thermal systems", players: "Infineon, STMicro, Bosch, Nidec", valueCapture: 4,
        economics: { grossMargin: [30, 45], capitalIntensity: 4, concentration: 4 },
        linksTo: ["semiconductors", "manufacturing"],
        deeper: "EVs carry 2x to 3x the semiconductor content of combustion cars, led by silicon carbide inverters. Fewer moving parts gutted the old tier-1 catalog (no exhaust, no transmission complexity), but the electronics winners earn chip-industry margins in an auto-volume market." },
      { id: "assembly", name: "Vehicle design & assembly", what: "Platforms, gigacasting, software integration, final build", players: "BYD, Tesla, Geely, VW, Hyundai-Kia", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 5, concentration: 3 },
        linksTo: ["automotive", "steel", "robotics"],
        deeper: "Where the price war lands. China's industry-wide margin fell to 4.4% in 2025; Neta lost money on every car before Hozon's bankruptcy. Vertical integration (BYD's cells-to-ships model) and manufacturing innovation (gigacasting, structural packs) are the only defenses against commoditization." },
      { id: "distribution", name: "Distribution & retail", what: "Direct sales, dealers, exports, financing", players: "OEM online channels, dealer groups, export networks", valueCapture: 2,
        economics: { grossMargin: [5, 12], capitalIntensity: 2, concentration: 2 },
        linksTo: ["retail", "ecommerce", "banking"],
        deeper: "Direct sales compress the old dealer spread but push inventory risk back onto OEMs. The growth story is exports: China shipped 5.8M vehicles in 2025 (+20%), and tariff walls (US, EU) are redrawing distribution into localize-or-lose regional blocs." },
      { id: "charging", name: "Charging, energy & services", what: "Public networks, home charging, software, insurance, V2G", players: "Tesla Supercharger, TELD, Star Charge, IONITY, utilities", valueCapture: 3,
        economics: { grossMargin: [15, 35], capitalIntensity: 5, concentration: 3 },
        linksTo: ["utilities", "solar", "saas", "insurance"],
        deeper: "The refueling network rebuilt as a grid asset: 7M+ public points at end-2025, fast chargers up 40% in a year, ~11 EVs per public point (IEA). Utilization is everything: a fast charger below ~15% utilization burns cash, above ~30% it prints. Software, fleet contracts, and grid services decide which." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share one industry. Vertically integrated cost leaders (BYD class) run thin per-unit margins on enormous volume, protected by owning the cell: their earnings track battery costs and mix, not brand. Pure-play growth OEMs (Tesla, the surviving Chinese challengers) sell a hardware-margin story today and a software-option story tomorrow: watch gross margin per vehicle net of credits, then watch deliveries. Legacy OEMs report EVs as a loss-making line inside a combustion P&L: their real metric is the cash-burn bridge to parity, and whether it lands before the ICE annuity fades.",
      "The sector's structural problem is that record demand and margin destruction arrived together: 20.7M units (+20%) in 2025, against a Chinese industry margin of 4.4% and a price war that erased roughly $69B of revenue in 3 years. Capital intensity is savage (a gigafactory runs $2B to $5B; a platform program similar), so operating leverage cuts both ways: scale winners compound cost advantages, subscale players (Hozon: losses of 82,000 yuan per Neta V sold) burn to zero. Charging and energy services add a utility-like annuity, but it is still small next to the metal."
    ],
    fingerprint: { grossMargin: 18, recurringRevenue: 12, capitalIntensity: 90, pricingPower: 25, cyclicality: 70, operatingLeverage: 80 },
    lines: [
      { label: "Deliveries & mix", note: "The tape: monthly China registrations, quarterly OEM prints; BEV vs PHEV mix shifts margin" },
      { label: "Gross margin per vehicle", note: "The price-war scoreboard, watched net of regulatory credits" },
      { label: "Battery cost ($/kWh)", note: "The industry's cost curve: $108/kWh pack average in 2025, China $84" },
      { label: "Capex & capacity plans", note: "Gigafactories and platforms; utilization below ~70% bleeds" },
      { label: "Software & services revenue", note: "FSD-class subscriptions, charging, insurance: small, but it carries the multiple" }
    ],
    unitEconomics: {
      unit: "per mass-market BEV (illustrative, 2025)",
      items: [
        { label: "ASP / battery cost", value: "~$35-45K / ~$6-9K", note: "60-80 kWh pack at $108/kWh average; $84/kWh in China" },
        { label: "OEM gross margin", value: "10% to 20%", note: "leaders; price-war participants run near zero or negative" },
        { label: "China cost advantage", value: "30%+ landed", note: "cells, labor, supply-chain density; tariffs exist to offset it" },
        { label: "Lifetime software/services", value: "$2-8K potential", note: "the contested upside: autonomy subscriptions, charging, insurance" }
      ]
    }
  },

  kpiRefs: ["auto-capu", "semi-utilization"],
  kpiLocal: [
    {
      id: "ev-pack-cost", name: "Battery Pack Cost ($/kWh)", industries: ["ev"],
      definition: "Volume-weighted average price of a complete lithium-ion battery pack, the EV's single largest cost line.",
      formula: "Pack $ / usable kWh (cells + modules + integration); BloombergNEF's annual survey is the benchmark",
      interpretation: "The industry's Moore's Law. 2025: $108/kWh average ((8)% YoY), China at $84/kWh with North America and Europe 44% and 56% higher. Sub-$100 packs put mass-market EVs at sticker parity with combustion.",
      healthy: "Falling 5-10%/yr on chemistry and scale", warning: "Metal spikes passing through to packs; the Western cost premium widening" },
    {
      id: "ev-penetration", name: "EV Share of New Vehicle Sales", industries: ["ev"],
      definition: "BEV plus PHEV units as a share of total light-vehicle sales, by market and globally.",
      formula: "EV units sold / total light-vehicle units sold, per period",
      interpretation: "The adoption S-curve's position. 2025: roughly 1 in 4 globally (20.7M units), around half of China's market, growing 33% in Europe, and (4)% in the US after credit expiry: one industry, three different curves.",
      healthy: "Share rising without subsidy escalation", warning: "Share stalling when incentives lapse (the US 2025 template)" }
  ],

  health: {
    intro: "EV-maker health is unit economics at scale; battery health is utilization and chemistry leadership; everyone's health is cash runway through the price war.",
    pillars: [
      { name: "Unit economics", weight: 25, metrics: "Gross margin per vehicle net of credits, contribution margin trend", healthy: "Positive and widening at volume", warning: "Negative per-unit economics rationalized as share-buying (the Neta pattern)" },
      { name: "Scale & utilization", weight: 20, metrics: "Deliveries growth, plant utilization, platform consolidation", healthy: "70%+ utilization, volumes compounding", warning: "New capacity announced while existing lines idle" },
      { name: "Battery position", weight: 20, metrics: "Cell sourcing terms, $/kWh trajectory, chemistry flexibility (LFP/NMC)", healthy: "Owned or contracted cells at falling cost", warning: "Spot-buying cells; single-supplier, single-chemistry exposure" },
      { name: "Balance sheet & runway", weight: 20, metrics: "Net cash, burn rate, quarters of runway at current pricing", healthy: "2+ years runway or self-funding", warning: "Serial capital raises into a falling-price market" },
      { name: "Brand & software pricing power", weight: 15, metrics: "Realized ASP vs segment, options attach, software revenue", healthy: "Price holds without incentive stuffing", warning: "Discounting to move metal; software promises without revenue" }
    ],
    scoringNote: "In a price war, the only unforgivable state is negative unit economics plus short runway: growth cannot fix a product sold below cost, as 350+ dead Chinese EV brands attest."
  },

  valuation: {
    intro: "The sector prices survivors and options: cost leaders on scaled earnings, pre-profit players on sales and runway, and Tesla on a debate about what business it is even in.",
    methods: [
      { name: "EV / EBITDA (scaled leaders)", use: "BYD-class integrated winners with real earnings", avoid: "Applying it mid price-war: trough margins on peak volumes mislead", strengths: "Comparable to autos; disciplines the story", weaknesses: "Margin volatility makes the E unstable", range: { low: 6, high: 14, asOf: 2025, note: "cost leaders earn the top; legacy OEM EV arms are buried in 3-5x parents" } },
      { name: "EV / Sales (pre-profit pure plays)", use: "Growth-stage makers before margin inflection", avoid: "Names without a credible path to positive contribution margin", strengths: "Only handle available pre-profit", weaknesses: "Prices hope; the 2021 vintage proved how badly", range: { low: 1, high: 3, asOf: 2025, note: "down from 10x+ bubble marks; runway quality sets position in range" } },
      { name: "DCF on the volume ramp", use: "Long-horizon adoption math: units x margin at maturity", avoid: "Terminal margins above proven auto economics without a moat argument", strengths: "Forces explicit S-curve and margin assumptions", weaknesses: "Tiny terminal-assumption changes swing value 2x", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; discipline tool more than price tool" } },
      { name: "Sum-of-the-parts (auto + energy + software)", use: "Tesla and any maker claiming autonomy or energy optionality", avoid: "Paying full price for options with no revenue attached", strengths: "Separates the car company from the story", weaknesses: "The parts are guesses stacked on guesses", range: { low: 0, high: 0, asOf: 2025, note: "the entire Tesla bull-bear spread lives in this method's assumptions" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an EV maker quickly: normalized EBITDA times a survivor-adjusted multiple, minus net debt. Pre-profit names: use scenario EBITDA at target margin, then haircut for runway risk.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.5, max: 30, step: 0.5, value: 8, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 20, step: 0.5, value: 10, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -30, max: 40, step: 1, value: 0, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays EVs as a shakeout, not a theme: long the proven cost leaders and the picks-and-shovels layers with pricing power (cells, power semis), avoid subscale makers burning into a falling price deck, and treat Tesla as its own single-name debate rather than sector beta. Volume growth is consensus; who earns a margin on it is the trade.",
    debates: [
      { topic: "Tesla: declining automaker or mispriced AI platform?", bull: "Deliveries are a distraction: the fleet is a data moat, autonomy converts cars into recurring high-margin software, and the energy business compounds quietly. You are buying a robotics option with a car company attached, and options on new S-curves always look expensive before they pay.", bear: "Two consecutive annual delivery declines ((8.6)% in 2025 to 1.64M) while the global market grew 20% is share loss, not strategy; BYD took the crown with a cheaper, faster product cycle. The autonomy option has been 2 years away for a decade, and the core business now shrinks while priced as if the option were exercised." },
      { topic: "China's price war: healthy consolidation or exported margin destruction?", bull: "This is the shakeout working: 487 makers culled to ~130 and falling, with Hozon-class failures transferring share to BYD and Geely at 42%+ combined. The endgame is a handful of global cost champions earning normal margins on enormous volume: buy the survivors while the market prices the war, not the peace.", bear: "There is no peace: overcapacity is structural, local governments protect zombie makers, and the war simply exports (5.8M vehicles shipped in 2025) until Western tariffs answer. A 4.4% industry margin is not a phase, it is the equilibrium of a state-subsidized commodity: terminal margins never normalize." },
      { topic: "Legacy OEMs: can they cross the valley?", bull: "They own brands, plants, dealers, and combustion cash flows that fund the transition; PHEV strength (+38% in Europe in 2025) plays exactly to their hybrid depth. At 3-5x earnings the market prices extinction, so mere survival is a multiple rerate.", bear: "The valley is wider than the cash bridge: EV lines lose money, ICE profits peak as bans approach, and Chinese imports undercut them at home and in every export market. Software gaps are cultural, not budgetary. Cheap can get cheaper when the core asset is melting." }
    ],
    cycle: {
      where: "Mid-shakeout, early-mainstream adoption: 1 in 4 cars sold globally is an EV, costs still falling 8%/yr at the pack, but industry margins near cyclical lows and the casualty rate still rising. Volume curve up, profit pool contested: the classic growth-industry consolidation phase.",
      drivers: "Battery costs ($/kWh), Chinese competitive intensity and exports, Western subsidy and tariff policy, charging density, and interest rates on a financed big-ticket purchase.",
      leads: [
        "China weekly NEV insurance registrations (CnEVPost aggregates them, free)",
        "Monthly global EV sales tallies (Rho Motion press releases, free)",
        "Quarterly delivery prints: Tesla, BYD, NIO-class (company IR, free)",
        "Lithium carbonate spot price (headline prints on SMM and Trading Economics, free)",
        "IEA charging-deployment and EV outlook data (iea.org, free)"
      ]
    },
    exposure: [
      { vehicle: "BYD-class cost leaders", note: "The shakeout's compounders: cell-to-ship integration at the global cost floor" },
      { vehicle: "Tesla", note: "A single-name debate: size it on the autonomy option you actually believe" },
      { vehicle: "Battery champions (CATL class)", note: "The chain's power seat: sell to every OEM, win either way" },
      { vehicle: "Power semis & suppliers (Infineon, STMicro class)", note: "Content-per-vehicle growth with chip margins: EV beta without price-war exposure" },
      { vehicle: "Legacy OEMs at distressed multiples", note: "The contrarian sleeve: survival is a rerate, sized for the valley risk" }
    ],
    catalysts: [
      { when: "Early January & quarterly", what: "Delivery prints (Tesla, BYD, Chinese challengers): the sector scoreboard" },
      { when: "December (annual)", what: "BloombergNEF battery price survey: the cost-curve checkpoint" },
      { when: "Spring (annual)", what: "IEA Global EV Outlook: adoption, charging, and policy baseline reset" },
      { when: "Policy windows", what: "EU 2035 phase-out reviews, US credit changes, China NEV policy, tariff decisions: demand is legislated here" }
    ],
    data: [
      { series: "Global and regional EV sales", source: "Rho Motion press releases + IEA Global EV Outlook (free)", why: "The volume tape and its policy context" },
      { series: "Battery pack prices ($/kWh)", source: "BloombergNEF annual survey headlines (free)", why: "The industry's cost curve, one number" },
      { series: "China NEV registrations & exports", source: "CAAM releases, CnEVPost (free)", why: "60%+ of the market, weekly cadence" },
      { series: "US charging infrastructure", source: "DOE AFDC station counts (free)", why: "Adoption's physical constraint, primary source" },
      { series: "Company deliveries & margins", source: "OEM IR releases (free)", why: "Who is winning the price war, net of credits" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Big-ticket financed purchases defer: EV demand hit is real but cushioned by falling costs and fleet buyers. Subscale makers with short runway die here; cost leaders gain share on the way through." },
      { regime: "Oil spike", behavior: "The TCO argument writes its own ads: adoption accelerates, PHEV/BEV mix shifts electric, and sentiment lifts the whole complex. The cleanest macro tailwind the sector gets." },
      { regime: "Rates rising", behavior: "Double hit: monthly-payment math slows demand while capital-hungry pre-profit names reprice hardest. Own self-funding leaders; avoid anything that needs the equity market open." },
      { regime: "Subsidy or tariff shock", behavior: "The US 2025 credit expiry template: an air pocket, then a rebase at true demand. Tariff walls fragment the market into regional blocs: localized producers win, exporters and their suppliers reprice." }
    ]
  },

  players: [
    { name: "BYD", role: "Global volume and cost leader", country: "CN", real: true, note: "2.26M BEVs, ~4.6M NEVs in 2025: took Tesla's crown on vertical integration" },
    { name: "Tesla", role: "The pure-play incumbent", country: "US", real: true, note: "1.64M deliveries in 2025, (8.6)%: second straight decline; the autonomy-option debate incarnate" },
    { name: "CATL", role: "Battery superpower", country: "CN", real: true, note: "Over a third of global cell supply; the chain's most concentrated power seat" },
    { name: "Geely Group", role: "Multi-brand consolidator", country: "CN", real: true, note: "Volvo, Zeekr, Polestar and more: with BYD, 42%+ of China's market" },
    { name: "Volkswagen Group", role: "Legacy giant in transition", country: "DE", real: true, note: "Europe's biggest EV bet: software stumbles, China share loss, PHEV cushion" },
    { name: "Hyundai-Kia", role: "The fast follower", country: "KR", real: true, note: "E-GMP platform earned design and efficiency credibility the Western legacies lack" },
    { name: "Xiaomi EV", role: "The insurgent", country: "CN", real: true, note: "Phone-maker turned automaker: SU7 demand proved brand can still create EV queues" },
    { name: "LG Energy Solution", role: "The non-Chinese cell alternative", country: "KR", real: true, note: "The West's default battery partner as supply chains split into blocs" }
  ],

  geography: [
    { country: "CN", role: "The center of gravity", note: "12.9M EVs sold in 2025, majority of global production, >65% of public chargers, 5.8M vehicle exports" },
    { country: "US", role: "The policy-dependent market", note: "1.8M sales, (4)% in 2025 after credit expiry; tariff walls shield a lagging transition" },
    { country: "DE", role: "Legacy heartland at risk", note: "The auto-industrial base with the most to lose; EU CO2 targets force its hand" },
    { country: "KR", role: "Battery and fast-follower hub", note: "LG, SK, Samsung SDI cells plus Hyundai-Kia: the West's supply-chain hedge" },
    { country: "JP", role: "The hybrid holdout", note: "Toyota's hybrid-first path: vindicated by PHEV strength or the largest strategic miss in autos" },
    { country: "NO", role: "The preview", note: "Effectively fully electric new-car sales: proof of the endgame when policy and charging align" }
  ],

  cycles: [
    { year: 2008, title: "Tesla's near-death winter", kind: "shift", text: "The Roadster ships as the financial system burns; Tesla survives on fumes and a government loan. Lesson: new auto companies are nearly impossible: the survivors get mythologies." },
    { year: 2018, title: "Model 3 production hell", kind: "shift", text: "Tents, sleeping on factory floors, and a near-bankruptcy later, mass-market EV manufacturing is proven. Lesson: in this industry, manufacturing IS the technology." },
    { year: 2021, title: "The SPAC bubble", kind: "boom", text: "Rivian floats above $150B on near-zero revenue; pre-product makers mint billions; lithium goes vertical. Lesson: capital abundance builds real capacity and fake companies with equal enthusiasm." },
    { year: 2023, title: "The price war opens", kind: "bust", text: "Tesla cuts prices globally; BYD cuts below them; every subscale maker must follow with balance sheets that cannot. Lesson: when the cost leader sets price, everyone else's margin is a rounding error." },
    { year: 2025, title: "Record volumes, ruthless shakeout", kind: "shift", text: "20.7M sold (+20%) while Hozon goes bankrupt, US sales fall 4% on credit expiry, and Tesla loses the crown to BYD. Lesson: an industry can boom and consolidate simultaneously: volume growth saves no one with negative unit economics." }
  ],

  risks: [
    { name: "Price war persistence", severity: 4, likelihood: 4, transmission: "Structural overcapacity in China -> ASPs keep falling -> margins stay at 4.4%-class levels industry-wide -> more Hozon-style failures and no terminal-margin normalization for survivors." },
    { name: "Policy reversal in the West", severity: 4, likelihood: 3, transmission: "Credit removal or mandate delay (US 2025 template) -> demand air pocket -> Western OEM EV lines miss scale targets -> transition-valley cash bridges break." },
    { name: "Battery supply-chain fracture", severity: 4, likelihood: 3, transmission: "Export controls or tariffs on cells and refined materials -> Western pack costs (already 44-56% above China) rise further -> price parity recedes and adoption slows outside China." },
    { name: "Tariff-wall fragmentation", severity: 3, likelihood: 4, transmission: "US/EU barriers vs Chinese exports -> parallel regional cost structures -> global scale economics break -> higher prices everywhere; exporters and their suppliers reprice first." },
    { name: "Technology leapfrog", severity: 3, likelihood: 2, transmission: "Solid-state or sodium-ion breakthrough scales -> incumbent gigafactory assets and chemistries devalue -> today's cell champions become tomorrow's stranded capex." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Electric cars replace the engine and fuel tank with a battery and motors: the battery is the expensive part, about a third of the car's cost. In 2025 the world bought 20.7M electric cars, roughly 1 in every 4 new cars, and most were made in China. Batteries get cheaper every year (like computer chips used to), which is why electric cars keep getting more affordable, and why over 7M public chargers now exist to fuel them."] },
    L2: { title: "Intermediate", text: ["The economics: whoever controls the battery controls the profit, because packs are 25% to 40% of cost and fell to $108/kWh in 2025 ((8)% YoY, China at $84). China sold 12.9M of the world's 20.7M EVs, and its brutal price war (industry margin 4.4%, brands like Neta's parent Hozon in bankruptcy) is culling hundreds of makers into a few giants. BYD passed Tesla as the biggest BEV maker (2.26M vs 1.64M); the US market fell 4% when tax credits expired, proving policy is still a demand line."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: integrated cost leaders on unit economics and $/kWh trajectory, pure plays on gross margin per vehicle net of credits plus cash runway, legacy OEMs on the cash bridge across the transition valley. The cell layer (CATL class) is the chain's power seat: more concentrated than the OEMs it supplies. Watch the three-curve world: China scaling at 50%+ penetration, Europe policy-driven at +33%, the US rebasing post-credits: one industry, three demand regimes, and a price war that exports itself through 5.8M Chinese vehicle shipments."] },
    L4: { title: "Expert", text: ["Trade the monthly registration tape, the December BNEF cost print, and policy windows; respect that the shakeout is mid-cycle (487 Chinese makers to ~130 and falling) and that consolidation, not adoption, is the alpha question. Live debates: Tesla's autonomy option vs its shrinking core, whether Chinese margins ever normalize or the 4.4% world is equilibrium, and whether legacy OEMs' PHEV cushion (+38% in Europe) buys enough time. Tariff architecture is the new industry structure: model regional blocs, not a global market."] },
    L5: { title: "Institutional", text: ["Allocator's frame: EVs offer secular volume growth with contested profit pools: core the layers with structural pricing power (cells, power semiconductors, charging infrastructure at scale), own the proven cost leaders through the shakeout, and treat pre-profit OEMs as venture positions requiring runway underwriting. The sector's paradox is that the transition is no longer in doubt while most participants' survival is: position for the peace (consolidated, normalized margins by 2030) while sized for the war. Every thesis reduces to one question: when battery costs stop being a differentiator, what moat is left, and who owns it."] }
  },

  quiz: [
    { q: "Global EV sales in 2025 (BEV + PHEV) reached roughly:", choices: ["5M units", "20.7M units, about 1 in 4 new cars sold", "50M units", "2M units"], answer: 1, explain: "Rho Motion's tally: 20.7M, +20% YoY, with China at 12.9M, Europe 4.3M, and the US shrinking 4% to 1.8M after credit expiry." },
    { q: "The EV's single largest cost component is:", choices: ["The motor", "Software", "The battery pack: 25% to 40% of vehicle cost", "Paint and interior"], answer: 2, explain: "Which is why pack prices ($108/kWh in 2025, (8)% YoY) are the industry's most important number: the cost curve IS the product roadmap." },
    { q: "In 2025 the world's largest BEV maker was:", choices: ["Tesla", "Volkswagen", "Toyota", "BYD, with 2.26M BEVs vs Tesla's 1.64M"], answer: 3, explain: "Tesla posted a second straight annual decline ((8.6)%) while BYD's vertical integration (cells to ships) took the crown." },
    { q: "China's EV price war has resulted in:", choices: ["Rising margins for all", "Makers culled from 487 (2018) to ~130 (2024), a 4.4% industry margin, and bankruptcies like Hozon/Neta", "Higher prices", "No exports"], answer: 1, explain: "Roughly $69B of revenue erased in 3 years by one estimate: the shakeout transfers share to cost leaders like BYD and Geely." },
    { q: "When US federal EV tax credits expired in 2025, US sales:", choices: ["Fell 4%, while the global market grew 20%", "Doubled", "Were unaffected", "Fell 50%"], answer: 0, explain: "The cleanest natural experiment yet in subsidy removal: policy is still a demand line item in the West." },
    { q: "Global public charging infrastructure at end-2025:", choices: ["About 500K points", "Over 7M points, with 1.8M added that year and China holding >65%", "Mostly in Europe", "Shrinking"], answer: 1, explain: "IEA data: fast chargers grew 40% to 2.2M and average speeds rose 15%: the network compounds faster than the fleet." },
    { q: "Battery pack prices in China vs the West in 2025:", choices: ["Identical everywhere", "China higher", "China at $84/kWh, with North America and Europe 44% and 56% higher", "Unknown"], answer: 2, explain: "BloombergNEF's survey: China's supply-chain density sets the global cost floor, which is what tariff walls exist to offset." },
    { q: "The layer of the EV value chain with the most concentrated power is:", choices: ["Dealers", "The cell makers: CATL alone supplies over a third of global cells", "Paint shops", "Tire makers"], answer: 1, explain: "Cells are the engine-equivalent at 25% to 40% of cost, and the cell oligopoly is deeper than the OEM layer it serves." }
  ],

  sources: [
    { name: "Rho Motion: global EV sales 2025 (20.7M, +20%)", url: "https://rhomotion.com/news/global-ev-sales-reach-20-7-million-units-in-2025-growing-by-20/", feeds: "sales volumes, regional splits" },
    { name: "BloombergNEF Battery Price Survey 2025 ($108/kWh)", url: "https://about.bnef.com/insights/clean-transport/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour-despite-rising-metal-prices-bloombergnef/", feeds: "battery costs" },
    { name: "IEA Global EV Outlook (charging chapter)", url: "https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-charging-chap-6-and-10", feeds: "charging infrastructure, adoption" },
    { name: "CNBC: BYD 2025 deliveries and China price war", url: "https://www.cnbc.com/2026/01/02/byds-china-ev-deliveries-sharply-decline-in-december-but-lead-overall-sales-in-2025.html", feeds: "company volumes, competitive dynamics" }
  ]
};
