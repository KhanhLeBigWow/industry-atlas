/* Industry Atlas - BATTERIES & STORAGE (full module, research-backed)
 * Anchors: 2025 global EV battery installations 1,187 GWh, +31.7% YoY; CATL
 * 39.2% share (464.7 GWh), BYD 16.4%, LG Energy Solution 108.8 GWh (SNE
 * Research via CnEVPost/electrive, Feb 2026). BNEF 2025 price survey (Dec
 * 2025): average pack $108/kWh, down 8%; LFP packs $81/kWh vs NMC $128;
 * lowest observed LFP storage cell $36/kWh. LFP >55% of global EV
 * deployments in 2025, >80% in China (IEA Global EV Outlook 2026). Grid
 * storage installations ~275 GWh in 2025, +61% YoY: China ~167, US ~52,
 * Europe ~25 (industry tallies, 2026). Global nameplate cell capacity
 * passed 4 TWh in 2025, China >80%; ~6.7 TWh announced by 2030 (McKinsey
 * Battery 2035; MetaMarketMonitoring). Solid-state: Toyota targets first
 * solid-state BEV 2027-2028; QuantumScape Eagle Line inaugurated Feb 2026;
 * Samsung SDI and CATL target 2027 (trade press, 2026). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["batteries"] = {
  meta: {
    id: "batteries", name: "Batteries & Storage", sector: "energy", status: "full",
    tagline: "The bottleneck technology of electrification: a 4 TWh factory base chasing 1.5 TWh of demand, where scale is the only moat and China owns the curve.",
    marketSize: { value: 150, unit: "$B", asOf: 2025, note: "global battery revenue; lithium-ion ~$90B of it, EV cells the largest slice, grid storage the fastest" },
    cagr: { value: 16, range: [12, 21], horizon: "2025-2033" },
    maturity: "growth", cyclicality: 4, capitalIntensity: 5, regulation: 3, disruption: 4
  },
  newsQuery: '(CATL OR "battery gigafactory" OR "lithium-ion battery" OR "energy storage system" OR "solid-state battery" OR "LFP battery")',

  overview: {
    definition: "The battery industry converts mined lithium, iron, nickel, and graphite into electrochemical cells, packs, and grid-scale storage systems: the enabling hardware for EVs, renewables firming, and everything portable. It is semiconductor-style manufacturing economics applied to a chemistry problem, at commodity margins, dominated by China.",
    howItWorks: [
      "The structure is a Chinese-led oligopoly on top of a global overcapacity glut. CATL alone installed 464.7 GWh of EV batteries in 2025 for a 39.2% share; add BYD (16.4%) and the rest of China's top-10 names and Chinese firms control roughly 2/3 of the world market, with Korea's LG Energy Solution (108.8 GWh), SK On, and Samsung SDI plus Japan's Panasonic splitting most of the remainder (SNE Research, 2025). Global nameplate capacity passed 4 TWh in 2025 against roughly 1.5 TWh of actual demand: utilization near 40% is the industry's defining statistic.",
      "The economics are a learning-curve knife fight. Cells are priced per kWh and fall relentlessly: BNEF's 2025 survey put average pack prices at $108/kWh, down 8% in a year, with LFP packs at $81/kWh and the cheapest stationary-storage LFP cells at $36/kWh. Cost leadership comes from scale, yield, vertical integration into cathode and lithium, and process speed: CATL earns real margins at prices that put tier-2 producers underwater. There is no aftermarket annuity here: you win by being the lowest-cost manufacturer of a product that gets 8% cheaper every year.",
      "Demand runs on 2 engines. EVs installed 1,187 GWh in 2025, up 31.7% (SNE Research): volume grows even when EV headlines wobble because battery content per vehicle rises. Grid storage is the newer, faster engine: roughly 275 GWh installed in 2025, up 61%, with China (~167 GWh) and the US (~52 GWh) leading as solar-plus-storage becomes the default new power plant. Storage now absorbs the industry's cheapest cells and its excess capacity: it is the demand sponge that keeps the price war from being even bloodier.",
      "Chemistry is strategy. LFP (lithium iron phosphate: cheap, safe, cobalt-free) passed nickel-based chemistries in 2025 with over 55% of global EV deployments and more than 80% inside China (IEA), gutting the nickel-cobalt supply chains the West spent a decade building. The next fronts are sodium-ion for the low end, high-nickel and silicon anodes for premium range, and solid-state for the 2027-2030 horizon: Toyota targets its first solid-state BEV in 2027-2028, Samsung SDI and CATL target 2027 pilot output, and QuantumScape's Eagle Line started up in early 2026. Every chemistry shift re-prices billions in installed capex."
    ],
    history: [
      { era: "1991-2008", title: "Sony's spark", text: "Sony commercializes lithium-ion for camcorders; Japan owns the industry; the cell is a consumer-electronics component, not an energy asset." },
      { era: "2009-2015", title: "The false dawn", text: "Stimulus-funded western startups (A123, Ener1) chase an EV market that hasn't arrived; most die. Korea scales methodically; China begins subsidizing domestic champions." },
      { era: "2016-2020", title: "Gigafactory era", text: "Tesla and Panasonic bet on desert-scale manufacturing; China's subsidy regime (local-content rules) incubates CATL and BYD into giants; costs fall below $150/kWh." },
      { era: "2021-2023", title: "The scramble", text: "EV demand surges, lithium spikes ~10x, pack prices rise in 2022 for the first time ever; the West responds with the IRA's $35/kWh cell credit and a gigafactory announcement boom." },
      { era: "2024-present", title: "Glut and consolidation", text: "China's capacity wave crashes into slowing EV growth: cell prices collapse, Northvolt (Europe's flagship) goes bankrupt in 2025, LFP passes nickel globally, and grid storage becomes the growth engine." }
    ],
    trends: [
      { title: "LFP conquest", direction: "shift", text: "Over 55% of global EV deployments in 2025 and rising fastest outside China (+66%): the cheap, safe chemistry is eating the premium one, and cathode value is migrating from nickel and cobalt to process cost." },
      { title: "Grid storage boom", direction: "up", text: "~275 GWh installed in 2025, up 61%: storage is the fastest-growing battery market and the first to see $36/kWh cells, turning solar-plus-storage into the default new power plant." },
      { title: "Overcapacity price war", direction: "down", text: "4 TWh of nameplate capacity against ~1.5 TWh of demand; average pack prices fell 8% to $108/kWh in 2025 even as metals rose. Tier-2 producers are burning cash; consolidation is underway." },
      { title: "Supply chain bifurcation", direction: "shift", text: "US tariffs and IRA sourcing rules vs China's 80%+ grip on cells and refining: the industry is splitting into a cheap Chinese chain and an expensive politically-shielded western one." },
      { title: "Solid-state countdown", direction: "up", text: "Toyota (2027-2028 BEV target), Samsung SDI and CATL (2027 pilots), QuantumScape's 2026 Eagle Line: the first credible timelines, though cost parity with a $36/kWh LFP incumbent is a brutal bar." }
    ],
    outlook: "Demand is not the question: EVs plus storage plausibly triple GWh volumes by the early 2030s. The question is who makes money supplying it. Expect the Chinese oligopoly to consolidate share as tier-2 capacity exits, LFP and sodium-ion to keep dragging prices down, storage to overtake autos as the marginal buyer, and western capacity to survive only where policy pays for it. Solid-state is the 2028-2032 wildcard: if it ships at scale, today's 4 TWh of liquid-electrolyte capex starts aging fast."
  },

  structure: {
    suppliers: [
      { name: "Lithium, nickel, graphite miners (Albemarle, SQM, Ganfeng)", note: "The volatile cost floor: lithium swung ~10x up and back down within 3 years" },
      { name: "Cathode & anode makers (Ronbay, Dynanonic, BTR, Posco Future M)", note: "Where chemistry becomes cost; LFP shifted value from metals to process" },
      { name: "Separators, electrolytes, foils (Yunnan Energy, Tinci, SEMCORP)", note: "Consumable oligopolies riding every GWh" },
      { name: "Equipment makers (Wuxi Lead, Yinghe, Manz heritage)", note: "The picks-and-shovels of gigafactory buildouts; order books track capex cycles" }
    ],
    producers: [
      { name: "CATL", note: "39.2% global share in 2025 (464.7 GWh): the industry's cost and technology referent" },
      { name: "BYD", note: "16.4% share, fully vertical: the automaker that became its own battery giant" },
      { name: "Korean trio (LG Energy Solution, SK On, Samsung SDI)", note: "The West's default non-Chinese suppliers; LG installed 108.8 GWh in 2025" },
      { name: "Panasonic, EVE, CALB, Gotion", note: "Tesla's legacy partner plus China's hungry second tier" }
    ],
    distributors: [
      { name: "Direct to OEM / EPC", note: "Cells sell on multi-year supply agreements; storage systems through developers and EPCs (Tesla Megapack, Sungrow, Fluence)" }
    ],
    customers: [
      { name: "Automakers", note: "The anchor buyers; battery supply deals are 5-to-10-year strategic marriages" },
      { name: "Utilities & storage developers", note: "The fastest-growing buyers; procure by the GWh on project economics" },
      { name: "Consumer electronics & industrial", note: "The legacy base: phones, tools, forklifts, data-center backup" }
    ],
    regulators: [
      { name: "US Treasury/IRS (IRA 45X) & USTR tariffs", note: "$35/kWh cell credits and 25%+ China tariffs: policy is a P&L line item" },
      { name: "EU (Battery Regulation, CBAM)", note: "Carbon footprint rules, recycled-content mandates, due diligence" },
      { name: "China (MIIT, NDRC)", note: "The original architect: subsidies, local-content rules, and now export controls on graphite and LFP know-how" },
      { name: "Safety authorities (UN 38.3, NFPA 855)", note: "Thermal-runaway rules govern transport and storage siting" }
    ],
    capital: [
      { name: "State capital & policy banks", note: "Chinese provincial funds and western subsidy programs built most of the 4 TWh" },
      { name: "Equity markets", note: "CATL's Shenzhen/HK listings and the 2021-2022 gigafactory SPAC wave; Northvolt's $15B collapse chastened private capital" },
      { name: "Project finance", note: "Grid storage is financed like power infrastructure: contracted revenue, leveraged returns" }
    ]
  },

  valueChain: {
    intro: "From brine ponds to grid dispatch. Value capture is barbell-shaped: upstream mining rents when metals spike, downstream systems and software margins in storage, with brutal commodity economics in the cell-making middle.",
    stages: [
      { id: "raw-materials", name: "Mining & refining", what: "Lithium, nickel, graphite, copper foil feedstock", players: "Albemarle, SQM, Ganfeng, Tianqi, China's refiners", valueCapture: 3,
        economics: { grossMargin: [10, 50], capitalIntensity: 5, concentration: 4 },
        linksTo: ["lithium", "mining", "copper-mining"],
        deeper: "The whipsaw stage: lithium carbonate rose ~10x into late 2022 then gave nearly all of it back, transferring billions of margin from cell makers to miners and back. China refines the majority of battery-grade lithium and ~90%+ of graphite regardless of where it is mined: refining, not mining, is the real chokepoint." },
      { id: "active-materials", name: "Cathodes, anodes & components", what: "CAM/AAM, separators, electrolytes, foils", players: "Ronbay, Dynanonic, BTR, Posco Future M, Yunnan Energy, Tinci", valueCapture: 3,
        economics: { grossMargin: [8, 20], capitalIntensity: 4, concentration: 4 },
        linksTo: ["chemicals", "manufacturing"],
        deeper: "Cathode is ~40% of cell cost and where chemistry wars are fought. LFP's 2025 crossover (>55% of EV deployments) shifted value from nickel-cobalt precursor chains to iron-phosphate process economics: bad news for the western CAM plants designed around NMC." },
      { id: "cells", name: "Cell manufacturing", what: "Gigafactories: electrode coating, stacking, formation", players: "CATL, BYD, LG, Panasonic, SK On, EVE, CALB", valueCapture: 4,
        economics: { grossMargin: [5, 25], capitalIntensity: 5, concentration: 4 },
        linksTo: ["manufacturing", "semiconductors"],
        deeper: "Semiconductor-fab logic at chemical-plant margins: ~$60-90M capex per GWh, yield and utilization decide survival, and the learning curve compounds to the biggest player. CATL earns ~20%+ gross margins at prices that leave tier-2 Chinese and most western plants cash-negative: 4 TWh of capacity chasing 1.5 TWh of demand guarantees a shakeout." },
      { id: "packs-bms", name: "Packs, modules & BMS", what: "Structural packs, thermal management, battery software", players: "OEM in-house, CATL (CTP), BYD (Blade), Tier-1s", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 3, concentration: 3 },
        linksTo: ["ev", "automotive", "consumer-electronics"],
        deeper: "Cell-to-pack and cell-to-chassis designs are collapsing this stage into the cell makers and OEMs: BYD's Blade and CATL's Qilin turned pack engineering into a differentiator, squeezing independent pack assemblers out of the EV chain." },
      { id: "storage-systems", name: "Grid storage systems", what: "Containerized ESS, inverters, EMS software, integration", players: "Tesla (Megapack), Sungrow, Fluence, CATL (EnerOne), HD Hyundai", valueCapture: 4,
        economics: { grossMargin: [15, 30], capitalIntensity: 3, concentration: 3 },
        linksTo: ["utilities", "solar", "wind"],
        deeper: "The industry's best current economics: ~275 GWh installed in 2025 (+61%), and systems capture margin on integration, software, and long-term service agreements that cells alone never see. Tesla's storage business out-margins its car business: the annuity-ish end of an otherwise transactional industry." },
      { id: "recycling", name: "Second life & recycling", what: "Black mass, cathode-to-cathode recovery, repurposed packs", players: "GEM, Brunp (CATL), Redwood Materials, Li-Cycle heritage", valueCapture: 2,
        economics: { grossMargin: [0, 15], capitalIntensity: 4, concentration: 3 },
        linksTo: ["waste-management", "mining"],
        deeper: "Structurally inevitable, cyclically brutal: recycling economics track metal prices, so the 2023-2025 lithium bust starved the business model just as EU recycled-content mandates guaranteed its future. Feedstock stays scarce until the first big EV cohorts retire around 2030." }
    ]
  },

  financials: {
    businessModel: [
      "A cell maker's P&L is a manufacturing spread: revenue = GWh shipped x price per kWh; cost = materials (60-70%, metals-linked) plus depreciation on ~$60-90M/GWh of capex plus yield losses. Prices reset down ~8%/yr (BNEF 2025: $108/kWh average pack), so margins survive only if cost falls faster: scale, utilization, vertical integration, and process speed are the whole game. CATL converts ~39% share into ~20%+ gross margins and real free cash flow; most competitors convert smaller scale into losses. Policy is a genuine P&L line: the IRA's 45X credit pays $35/kWh per US-made cell, which can exceed the entire margin on the cell itself.",
      "Storage systems and recycling bookend the cell commodity. ESS integrators sell engineered systems with software and multi-year service attach: higher margin, growing 60%+ (2025), and increasingly the demand sponge for cheap cells. Watch 3 spreads: cell price vs cathode cost (the manufacturing margin), leader vs tier-2 gross margin (the consolidation clock), and Chinese vs western delivered cost including tariffs and credits (the bifurcation premium). Balance sheets matter: this is a business where you spend billions years before the demand shows up, and Northvolt's 2025 bankruptcy showed what happens when yield ramps miss while the debt clock runs."
    ],
    fingerprint: { grossMargin: 18, recurringRevenue: 15, capitalIntensity: 90, pricingPower: 25, cyclicality: 70, operatingLeverage: 75 },
    lines: [
      { label: "GWh shipped & installed", note: "The volume tape: 1,187 GWh EV installations in 2025, +31.7% (SNE Research)" },
      { label: "ASP per kWh & price/cost spread", note: "Packs averaged $108/kWh in 2025, down 8%; margin lives in falling cost, not price" },
      { label: "Utilization & yield", note: "~40% industry utilization; leaders run full, laggards eat depreciation" },
      { label: "Chemistry & customer mix", note: "LFP >55% and rising; storage vs auto mix shifts margin and cyclicality" },
      { label: "Subsidies & tariffs", note: "45X credits ($35/kWh US cells), EU rules, China rebates: policy is revenue" }
    ],
    unitEconomics: {
      unit: "per GWh of cell capacity (illustrative)",
      items: [
        { label: "Capex to build", value: "$60-90M", note: "China at the low end; western greenfields can exceed $100M" },
        { label: "Revenue at ~$60/kWh cells", value: "~$60M/yr", note: "1 GWh = 1M kWh; commodity LFP cell pricing, 2025 vintage" },
        { label: "Leader gross margin", value: "~20%+", note: "CATL-class scale, yield, and integration" },
        { label: "Tier-2 gross margin", value: "0% to (10)%", note: "sub-scale plants at war prices; the consolidation fuel" }
      ]
    }
  },

  kpiRefs: ["semi-utilization", "semi-yield", "mining-aisc"],
  kpiLocal: [
    {
      id: "batt-cost-kwh", name: "Price per kWh (cell/pack)", industries: ["batteries"],
      definition: "The volume-weighted selling price of lithium-ion cells and packs, the industry's single most-watched number.",
      formula: "Revenue / kWh shipped; benchmarked annually by BNEF's battery price survey",
      interpretation: "2025: average packs $108/kWh (down 8%), LFP packs $81, cheapest storage LFP cells $36. Falling prices grow the market and cull weak producers simultaneously.",
      healthy: "Own costs falling faster than prices; premium vs benchmark", warning: "Price declines outrunning cost curve; inventory writedowns" },
    {
      id: "batt-installs-gwh", name: "Installations (GWh, EV + storage)", industries: ["batteries"],
      definition: "Actual battery deployment into vehicles and grid systems, the demand-side tape against which 4 TWh of capacity is judged.",
      formula: "Monthly EV installation tallies (SNE Research, CABIA) + annual ESS additions",
      interpretation: "2025: 1,187 GWh into EVs (+31.7%) plus ~275 GWh into storage (+61%). Installations vs nameplate capacity is the industry's utilization and shakeout clock.",
      healthy: "30%+ combined growth; storage accelerating", warning: "EV stall without storage offset; utilization sliding below 40%" }
  ],

  health: {
    intro: "In a commodity manufacturing war, health is cost position, utilization, and the balance sheet to outlast the price cycle: technology pipelines decide who is still relevant when solid-state arrives.",
    pillars: [
      { name: "Cost position & scale", weight: 25, metrics: "Cost per kWh vs benchmark, GWh scale, vertical integration", healthy: "Top-quartile cost; CATL-class scale effects", warning: "Sub-scale plants pricing below cash cost" },
      { name: "Utilization & execution", weight: 25, metrics: "Plant utilization, yield ramps, on-time customer launches", healthy: "80%+ utilization, yields >90%", warning: "The Northvolt pattern: capex spent, yield missing" },
      { name: "Customer & chemistry mix", weight: 20, metrics: "OEM contract quality, storage share, LFP/NMC/sodium optionality", healthy: "Diversified anchors + growing storage book", warning: "Single-OEM dependence; stranded NMC-only capacity" },
      { name: "Balance sheet & funding", weight: 15, metrics: "Net debt vs capex plan, subsidy dependence, cash burn", healthy: "Self-funding growth through the price war", warning: "Debt-funded capacity racing a falling price" },
      { name: "Technology pipeline", weight: 15, metrics: "Next-gen chemistry roadmap, patents, pilot lines", healthy: "Credible sodium-ion and solid-state programs", warning: "No answer to the 2027-2030 chemistry turn" }
    ],
    scoringNote: "The unforgivable event is spending billions on capacity that never reaches yield: in batteries, execution failures are terminal because the price curve does not wait."
  },

  valuation: {
    intro: "The market prices scale leaders as growth manufacturers and everyone else as options on consolidation: EV/EBITDA for the profitable, EV per GWh for the building, and venture math for solid-state.",
    methods: [
      { name: "EV / EBITDA", use: "Profitable leaders (CATL, LG, BYD's battery arm)", avoid: "Applying it to cash-burning tier-2s: negative EBITDA breaks it", strengths: "Standard, captures the scale premium", weaknesses: "Cycle-peak GWh growth flatters; subsidy income blurs quality", range: { low: 8, high: 16, asOf: 2025, note: "CATL commands the top; Korean names mid-range on IRA-dependent US books" } },
      { name: "EV per GWh of capacity", use: "Capacity in buildout, private rounds, M&A", avoid: "Face-value announced pipelines: most announced TWh never gets built", strengths: "Cuts through pre-profit noise", weaknesses: "A GWh of yielding CATL capacity is not a GWh of anything else", range: { low: 30, high: 100, asOf: 2025, note: "$M per installed GWh; discount unfunded announcements toward 0" } },
      { name: "P/E on normalized margin", use: "The leaders through the price war", avoid: "Trough-margin years as the denominator", strengths: "Anchors the compounder debate", weaknesses: "Normalized is doing heavy lifting when prices fall 8%/yr", range: { low: 15, high: 25, asOf: 2025, note: "growth-manufacturer band; the CATL premium question" } },
      { name: "Venture/DCF for solid-state", use: "QuantumScape-class pre-revenue developers", avoid: "Multiples: there is nothing to multiply", strengths: "Forces explicit milestones (2026-2028 pilots)", weaknesses: "Binary outcomes; cost parity vs $36/kWh LFP is a moving target", range: { low: 0, high: 0, asOf: 2025, note: "qualitative: probability-weighted scenarios, not comps" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a battery maker quickly: through-cycle EBITDA times a scale-adjusted multiple, minus the net debt funding the buildout.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 25, step: 0.2, value: 6, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 20, step: 0.5, value: 11, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -20, max: 40, step: 1, value: 5, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays batteries as a consolidating commodity with a policy overlay: long the scale leader and the storage-systems economics, short or avoid sub-scale cell capacity, and treat western gigafactories as policy trades, not manufacturing trades. Demand growth is the least interesting variable: 30%+ GWh growth is consensus. The alpha is in who survives the price war and what the 2027 chemistry turn strands.",
    debates: [
      { topic: "CATL: compounder or commodity producer at peak share?", bull: "39.2% share, ~20%+ gross margins at war prices, vertical integration from lithium to recycling, and the technology lead (Qilin, Shenxing, sodium-ion): this is TSMC logic applied to chemistry, and consolidation hands it more share every quarter.", bear: "No customer wants a 40% supplier: OEMs are dual-sourcing by design, governments are walling off its biggest growth markets, and a product that deflates 8%/yr caps revenue no matter the share. Peak share plus geopolitics equals a structurally discounted multiple." },
      { topic: "Western gigafactories: strategic necessity or capital incinerator?", bull: "The IRA pays $35/kWh, tariffs add 25%+, and auto OEMs will pay a security premium for non-Chinese cells: policy has legislated a profit pool, and the survivors of the Northvolt shakeout inherit it with less competition.", bear: "Northvolt burned ~$15B and died anyway: yield is earned, not subsidized. Chinese cells land at half the western cost, credits can be repealed, and every western plant is a leveraged bet that 2 governments keep writing checks for a decade." },
      { topic: "Solid-state: game changer or perpetually 5 years away?", bull: "Toyota, Samsung SDI, and CATL all now target 2027 pilots with real capex behind them; the first chemistry to double density resets the premium market, and the incumbents' liquid-electrolyte capex becomes the stranded asset.", bear: "The bar is not the lab, it is a $36/kWh LFP cell from a depreciated Chinese plant. Solid-state has missed every timeline for 15 years, and even success starts as a tiny premium niche while LFP and sodium-ion keep taking the volume." }
    ],
    cycle: {
      where: "Mid-shakeout: demand compounding 30%+, prices down 8% to record lows, ~40% industry utilization, tier-2 producers cash-negative, and the first big bankruptcies (Northvolt) already landed: classic commodity consolidation with a growth kicker.",
      drivers: "EV adoption and content per vehicle, storage project economics (solar-plus-storage vs gas peakers), lithium and metals prices, Chinese capacity discipline, and western policy (tariffs, 45X, EU mandates).",
      leads: [
        "Monthly EV battery installation tallies (SNE Research, CABIA via trade press; free)",
        "BNEF annual battery price survey headline (December; free release)",
        "Lithium carbonate spot price (the cost floor and sentiment gauge; free trackers)",
        "US grid storage additions (EIA-860M monthly; free)",
        "CATL quarterly margins: the sector's price-war thermometer (free filings)"
      ]
    },
    exposure: [
      { vehicle: "CATL (Shenzhen/HK)", note: "The scale leader: consolidation's main beneficiary, geopolitics' main target" },
      { vehicle: "LG Energy Solution / Samsung SDI (KR)", note: "The non-China premium play, leveraged to IRA policy durability" },
      { vehicle: "Tesla (storage segment)", note: "Megapack: the systems-margin end of the chain inside an auto multiple" },
      { vehicle: "Equipment & materials (Wuxi Lead class, separator/electrolyte oligopolies)", note: "Picks-and-shovels on every GWh built, whoever builds it" },
      { vehicle: "Battery ETFs (LIT class)", note: "Diversified beta across miners, cells, and OEMs; blunt but liquid" }
    ],
    catalysts: [
      { when: "Monthly", what: "SNE/CABIA installation tallies and China cell price trackers: the volume and price tape" },
      { when: "Quarterly earnings", what: "CATL and LG margins, utilization commentary, storage backlog growth" },
      { when: "December (annual)", what: "BNEF price survey: the benchmark print that resets every cost curve model" },
      { when: "Policy dates", what: "US tariff and 45X rulings, EU Battery Regulation milestones, China export-control moves" }
    ],
    data: [
      { series: "EV battery installations & market share", source: "SNE Research monthlies via CnEVPost/electrive (free)", why: "The primary volume and share tape" },
      { series: "Battery pack price benchmark", source: "BloombergNEF annual survey release (free headline)", why: "The industry's cost-curve anchor: $108/kWh in 2025" },
      { series: "US battery storage capacity", source: "EIA-860M / EIA Today in Energy (free)", why: "The storage boom, measured monthly, primary source" },
      { series: "EV and battery demand outlooks", source: "IEA Global EV Outlook (free)", why: "Chemistry mix (LFP >55%) and demand scenarios" },
      { series: "Lithium carbonate prices", source: "free spot trackers (SMM headlines, Trading Economics)", why: "The cost floor and the miners' feedback loop" }
    ],
    playbook: [
      { regime: "Recession", behavior: "EV demand wobbles but storage is project-financed infrastructure and keeps building; price war worsens as volume slows: own the leader and the storage book, not the marginal producer." },
      { regime: "Lithium spike", behavior: "Cell makers with long-term supply and integration (CATL, BYD) hold margin; spot buyers bleed; miners re-rate. Watch pass-through clauses: 2022 proved contracts matter more than chemistry." },
      { regime: "Rates rising", behavior: "Storage project IRRs compress and gigafactory debt gets expensive: buildouts slip, which perversely helps utilization and the incumbents." },
      { regime: "Trade war escalation", behavior: "Tariffs re-price the bifurcation premium: Korean and domestic US capacity re-rates, Chinese exporters route through storage and third countries, and policy headlines drive the tape more than fundamentals." }
    ]
  },

  players: [
    { name: "CATL", role: "Global leader", country: "CN", real: true, note: "464.7 GWh installed 2025, 39.2% share: the industry's cost curve and technology referent" },
    { name: "BYD", role: "Vertical champion", country: "CN", real: true, note: "16.4% share; the only automaker that is also a top-2 cell maker (Blade LFP)" },
    { name: "LG Energy Solution", role: "Korean leader", country: "KR", real: true, note: "108.8 GWh in 2025; the West's default supplier, leveraged to IRA policy" },
    { name: "Panasonic", role: "Japanese incumbent", country: "JP", real: true, note: "Tesla's original partner; 3.7% share and fighting to stay relevant beyond it" },
    { name: "SK On / Samsung SDI", role: "Korean challengers", country: "KR", real: true, note: "US joint ventures with Ford, GM, Stellantis; Samsung targets 2027 solid-state" },
    { name: "EVE / CALB / Gotion", role: "China's second tier", country: "CN", real: true, note: "The price war's front line: 2-5% shares each, storage-heavy order books" },
    { name: "Tesla (Energy)", role: "Storage systems power", country: "US", real: true, note: "Megapack: the systems-and-software margin layer on top of bought and built cells" },
    { name: "QuantumScape", role: "Solid-state developer", country: "US", real: true, note: "Eagle Line started 2026; the listed pure-play on the chemistry turn" }
  ],

  geography: [
    { country: "CN", role: "The manufacturing hegemon", note: ">80% of global cell capacity plus dominant refining, cathode, and equipment shares" },
    { country: "KR", role: "The alternative chain", note: "LG, SK On, Samsung SDI: the non-Chinese oligopoly, building heavily in the US" },
    { country: "JP", role: "The pioneer, now niche", note: "Panasonic plus Toyota's solid-state program: technology depth, lost scale" },
    { country: "US", role: "Policy-built buildout", note: "IRA 45X credits seeded a gigafactory belt; ~52 GWh of storage installed in 2025" },
    { country: "HU", role: "Europe's cell hub", note: "CATL Debrecen, Samsung SDI, SK On: Chinese and Korean plants serving German OEMs" },
    { country: "DE", role: "The anchor customer", note: "VW's PowerCo and the auto industry that must buy what Europe struggles to build" }
  ],

  cycles: [
    { year: 1991, title: "Sony ships lithium-ion", kind: "shift", text: "A camcorder battery starts the electrification age; Japan owns the first decade. Lesson: enabling technologies are born as components long before they become industries." },
    { year: 2012, title: "The first western bust", kind: "bust", text: "A123 Systems, stimulus-funded and technology-rich, goes bankrupt into a missing EV market (and sells to China's Wanxiang). Lesson: being early with capacity is the same as being wrong." },
    { year: 2017, title: "The gigafactory bet", kind: "boom", text: "Tesla and Panasonic scale the Nevada Gigafactory while China's subsidy rules incubate CATL; costs crack $150/kWh. Lesson: in learning-curve industries, whoever builds scale first sets the price for everyone." },
    { year: 2022, title: "The lithium whipsaw", kind: "shift", text: "Lithium spikes ~10x and pack prices rise for the first time in survey history; 2 years later both collapse. Lesson: the cost floor is a commodity market: contracts and integration, not chemistry, decide who keeps margin." },
    { year: 2025, title: "Northvolt and the glut", kind: "bust", text: "Europe's $15B flagship goes bankrupt while 4 TWh of capacity chases 1.5 TWh of demand and packs hit $108/kWh. Lesson: subsidies can fund a factory; only yield and utilization can fund a company." }
  ],

  risks: [
    { name: "Price war outrunning cost curves", severity: 4, likelihood: 4, transmission: "Chinese overcapacity -> prices fall faster than costs -> tier-2 losses spread up the chain -> writedowns, bankruptcies, and stranded western capex." },
    { name: "Policy reversal", severity: 4, likelihood: 3, transmission: "45X repeal or tariff whiplash -> western plant economics break overnight -> buildouts cancel -> supply re-concentrates in China." },
    { name: "Raw material spike", severity: 3, likelihood: 3, transmission: "Lithium or graphite squeeze -> cell costs jump against fixed-price contracts -> margin transfer to miners -> storage project delays (the 2022 template)." },
    { name: "Chemistry disruption", severity: 4, likelihood: 2, transmission: "Solid-state or sodium-ion scales early -> liquid-electrolyte capex strands -> incumbents' depreciation schedules meet obsolete plants." },
    { name: "Safety event at grid scale", severity: 4, likelihood: 2, transmission: "A major ESS fire in a dense market -> siting moratoria and code tightening -> storage demand, the industry's growth engine, stalls while costs rise." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Batteries store electricity for cars, phones, and the power grid. One Chinese company, CATL, makes nearly 4 of every 10 EV batteries on Earth, and prices fall almost every year ($108 per kWh for an average pack in 2025) which is exactly why EVs and giant grid batteries keep getting cheaper. The industry's problem is the opposite of most: it built far more factory capacity than the world yet needs."] },
    L2: { title: "Intermediate", text: ["The economics: cells are a commodity priced per kWh, so profit comes from being the lowest-cost manufacturer at the highest utilization. China controls >80% of capacity and its champions (CATL 39.2%, BYD 16.4% in 2025) set the global price. The cheap, safe LFP chemistry passed premium nickel chemistries in 2025 (>55% of EV deployments), and grid storage (~275 GWh installed, +61%) is the fastest-growing buyer. The West subsidizes its own plants ($35/kWh IRA credits) because it cannot yet match Chinese costs: Northvolt's bankruptcy proved how hard catching up is."] },
    L3: { title: "Advanced", text: ["Analyze it as 3 spreads: cell price vs cathode cost (the manufacturing margin), leader vs tier-2 margins (the consolidation clock: CATL ~20%+ gross vs cash-negative laggards), and Chinese vs western delivered cost including tariffs and credits (the bifurcation premium). Utilization near 40% against 4 TWh of nameplate makes shakeout the base case. Model chemistry mix explicitly: LFP and sodium-ion take the volume floor, high-nickel holds the premium niche, and solid-state (2027-2028 pilots) is the optionality and the stranding risk."] },
    L4: { title: "Expert", text: ["Trade the monthly installation tape (SNE/CABIA), CATL's margin prints, lithium spot, and the December BNEF survey; position around policy dates because tariffs and 45X rulings move western names more than fundamentals do. Live debates: the CATL premium (compounder vs capped commodity at peak share), western gigafactory survivorship post-Northvolt, and whether solid-state's 2027 timelines finally hold against a $36/kWh LFP bar. Storage systems (Megapack class) are where margin hides in plain sight inside auto and industrial multiples."] },
    L5: { title: "Institutional", text: ["Allocator's frame: batteries offer semiconductor-style volume growth with commodity-style economics, so own the structural winners of consolidation (the scale leader, the storage-systems layer, the equipment and materials oligopolies) rather than the capacity itself. Size policy exposure honestly: half the western industry's margin is legislated, and legislation reverses. The 2027-2032 chemistry turn is the portfolio event: it either strands 4 TWh of liquid-electrolyte capex or confirms the incumbents for another decade. Every thesis reduces to one question: whose cost per kWh falls fastest, for longest, with a balance sheet that survives the fight."] }
  },

  quiz: [
    { q: "CATL's share of global EV battery installations in 2025 was roughly:", choices: ["10%", "25%", "39%: 464.7 GWh, more than the next 2 players combined", "60%"], answer: 2, explain: "SNE Research put CATL at 39.2% of a 1,187 GWh market: the only producer above 30%, and the industry's price-setter." },
    { q: "BNEF's 2025 survey put average battery pack prices at:", choices: ["$108/kWh, down 8%: a record low despite rising metals", "$250/kWh", "$500/kWh", "Prices rose 20%"], answer: 0, explain: "Overcapacity, competition, and the LFP shift drove packs to $108/kWh; the cheapest stationary-storage LFP cells hit $36/kWh." },
    { q: "In 2025, LFP chemistry:", choices: ["Was banned in China", "Passed nickel-based chemistries with >55% of global EV deployments", "Remained a niche below 10%", "Was only used in phones"], answer: 1, explain: "The cheap, cobalt-free chemistry crossed over globally (IEA), powering >80% of Chinese EVs and growing 43% vs 8% for nickel chemistries." },
    { q: "The industry's defining supply-demand statistic is:", choices: ["Demand exceeds capacity 2-to-1", "~4 TWh of nameplate capacity against ~1.5 TWh of demand: utilization near 40%", "Perfect balance", "No one measures capacity"], answer: 1, explain: "Overcapacity, mostly Chinese, guarantees a price war and consolidation: the shakeout is the investment story." },
    { q: "Grid storage in 2025:", choices: ["Shrank as subsidies ended", "Installed ~275 GWh, up 61%: the industry's fastest-growing market", "Remained smaller than phone batteries", "Was banned in the US"], answer: 1, explain: "China (~167 GWh) and the US (~52 GWh) led as solar-plus-storage became the default new power plant and the sponge for cheap cells." },
    { q: "Cell manufacturing margins are best described as:", choices: ["Software-like everywhere", "A scale spread: leaders earn ~20%+ gross while tier-2 producers run cash-negative", "Uniformly negative", "Set by regulators"], answer: 1, explain: "Prices deflate ~8%/yr, so only top-quartile cost positions (scale, yield, integration) earn through the war: everyone else funds the shakeout." },
    { q: "Northvolt's 2025 bankruptcy taught the industry that:", choices: ["Europe has too many batteries", "Subsidies can fund a factory but only yield and utilization fund a company", "Batteries are obsolete", "Lithium is worthless"], answer: 1, explain: "Roughly $15B in, Europe's flagship never reached commercial yield: execution, not capital or policy, is the binding constraint." },
    { q: "Solid-state batteries in 2026 are best described as:", choices: ["Already dominant", "Credible 2027-2028 pilot timelines (Toyota, Samsung SDI, CATL) facing a brutal $36/kWh LFP cost bar", "Cancelled industry-wide", "A grid-only technology"], answer: 1, explain: "The timelines are finally real, but success means beating depreciated LFP plants on cost, not just density: the niche comes long before the volume." }
  ],

  sources: [
    { name: "SNE Research 2025 EV battery installations & share (via CnEVPost)", url: "https://cnevpost.com/2026/02/04/global-ev-battery-market-share-2025/", feeds: "volumes, market share" },
    { name: "BloombergNEF 2025 Lithium-Ion Battery Price Survey", url: "https://about.bnef.com/insights/clean-transport/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour-despite-rising-metal-prices-bloombergnef/", feeds: "prices per kWh" },
    { name: "IEA Global EV Outlook (battery chapter)", url: "https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries", feeds: "chemistry mix, demand" },
    { name: "McKinsey Battery 2035 (capacity outlook)", url: "https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/battery-2035-building-new-advantages", feeds: "capacity, TWh outlook" }
  ]
};
