/* Industry Atlas - ALUMINUM (full module, research-backed)
 * Anchors 2025: global primary output ~73.8Mt, up 1.1% y/y; China ~44 to 45Mt, ~60% of world,
 * pinned at its 45Mt capacity cap set in 2017 (IAI data via Mysteel, Jan 2026). Smelting burns
 * ~14MWh of electricity per tonne; a competitive smelter needs 10-to-20-year power near $40/MWh,
 * while European smelters paid $70 to $110/MWh (Fastmarkets, 2025). LME aluminum rose 17%+ in
 * 2025 with a ~1.8Mt global deficit; Russian (Rusal) units were ~60% of LME on-warrant stock
 * (PricePedia, Dec 2025). EU CBAM's definitive phase starts 2026, an effective 5 to 12% price
 * uplift on high-carbon imports (ING Think, 2025). Recycling uses ~5% of primary's energy. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["aluminum"] = {
  meta: {
    id: "aluminum", name: "Aluminum", sector: "materials", status: "full",
    tagline: "Solid electricity: a metal whose cost curve is a map of the world's cheapest power, and whose supply is now rationed by Beijing.",
    marketSize: { value: 210, unit: "$B", asOf: 2025, note: "global aluminum market across primary metal and semis (~$210B, Precedence Research); ~74Mt of primary output underneath it" },
    cagr: { value: 5, range: [4, 6], horizon: "2025-2035" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 5, regulation: 3, disruption: 2
  },
  newsQuery: '("aluminum smelter" OR "aluminium smelter" OR "LME aluminium" OR alumina OR bauxite OR Rusal OR Alcoa OR "Norsk Hydro" OR "China Hongqiao")',

  overview: {
    definition: "The aluminum industry digs bauxite, refines it into alumina, and runs enough electricity through it to make the world's second-most-used metal (~74Mt a year of primary output). It is really 2 businesses stapled together: an upstream power arbitrage priced off the LME, and a downstream conversion trade that turns commodity ingot into can sheet, car bodies, and aircraft plate.",
    howItWorks: [
      "The chain is fixed chemistry: roughly 4 to 5 tonnes of bauxite become ~2 tonnes of alumina (the Bayer process), which become 1 tonne of aluminum in a Hall-Heroult smelter. Each step concentrates value and capital intensity: bauxite is cheap dirt near ports, alumina is a mid-margin chemical business, and smelting is a continuous electrochemical process that cannot be turned off without freezing the pots solid (restarts cost months and millions). That inflexibility is why supply responds slowly and prices overshoot in both directions.",
      "Smelting consumes ~14MWh of electricity per tonne, which is why traders call the metal solid electricity. Power is roughly a third of cash cost, and a smelter needs a 10-to-20-year contract near $40/MWh to sit comfortably on the global cost curve (Fastmarkets, 2025). So smelters cluster wherever electrons are stranded and cheap: Quebec and Iceland hydro, Gulf gas, Yunnan hydro, Xinjiang coal. Europe, paying $70 to $110/MWh, has curtailed swathes of capacity since 2021; the US, where data centers now sign PPAs above $115/MWh, has not built a greenfield smelter since 1980.",
      "China is the market: ~44 to 45Mt of output in 2025, about 60% of the world, produced against a 45Mt national capacity cap Beijing set in 2017 and reaffirmed in its 2025-2027 Action Plan. New pots require old pots to close (capacity replacement, not expansion), and smelters are migrating from coal provinces to Yunnan hydro to survive China's carbon accounting. In 2025 output effectively touched the ceiling: the first time in modern history the marginal tonne of world supply is rationed by policy rather than price.",
      "Pricing is layered: the LME price is the global tape, but physical buyers pay LME plus a regional premium (where tariffs and local tightness live) plus a product premium (billet, foil stock). US Section 232 duties, raised to 50% in June 2025, blew the US Midwest premium to records while barely moving the LME. Meanwhile Russian metal, self-sanctioned by Western buyers since 2022, piled up as ~60% of LME on-warrant stock: the exchange's inventory and the metal the West actually wants are increasingly different things."
    ],
    history: [
      { era: "1886-1945", title: "From precious to strategic", text: "Hall and Heroult independently crack electrolytic smelting in 1886; a metal once dearer than silver becomes the airframe metal of 2 world wars. Alcoa runs it as a near-monopoly until 1945 antitrust." },
      { era: "1945-1978", title: "The aluminum age", text: "Postwar boom: cans, cars, construction. A 6-firm Western oligopoly sets producer prices like OPEC with brochures." },
      { era: "1978-2000", title: "The LME takes over", text: "The 1978 LME contract ends producer pricing; aluminum becomes a traded commodity. The Soviet collapse floods the market in the 1990s, forcing the first coordinated global output cuts (the 1994 MOU)." },
      { era: "2000-2017", title: "China eats the industry", text: "China goes from ~10% of output to over half, building coal-fired smelters faster than the world adds demand. The 2015 export flood craters prices; Beijing answers with supply-side reform and the 45Mt cap in 2017." },
      { era: "2018-present", title: "Sanctions, blackouts, carbon", text: "Rusal sanctions (2018) spike prices 30% in days; Europe's energy crisis curtails over 1Mt and the LME prints a record $4,073/t in March 2022; CBAM and China's ETS turn carbon into a cost line. In 2025 China reaches its cap and the market runs a ~1.8Mt deficit." }
    ],
    trends: [
      { title: "China at the ceiling", direction: "shift", text: "2025 output of ~45Mt sits on the 45Mt cap (IAI/Mysteel). If Beijing holds the line, the world's swing producer is out of swing: ex-China supply, recycling, and demand destruction must balance the market." },
      { title: "Power scarcity, new competitor", direction: "shift", text: "Smelters now bid for long-term power against AI data centers paying $115+/MWh, triple what smelting economics support. The binding constraint on Western supply is electrons, not capital or demand." },
      { title: "Green aluminum and CBAM", direction: "up", text: "Low-carbon metal (under ~4t CO2e/t, vs ~15t global average) is a ~$73B market in 2025 (IMARC). Premiums have been thin to date, but CBAM's definitive phase from 2026 turns carbon into a hard import cost: 5 to 12% effective uplift on dirty tonnes into Europe (ING)." },
      { title: "The scrap supercycle", direction: "up", text: "Secondary aluminum uses ~5% of primary's energy and avoids ~95% of the emissions. With primary capped in China and power-starved in the West, scrap is the fastest-growing mine on Earth, and everyone from Novelis to Hongqiao is building recycling capacity." },
      { title: "Trade fragmentation", direction: "shift", text: "50% US Section 232 duties, Russian self-sanctioning, and Indonesian-style export bans on ore are regionalizing a once-global market. Increasingly the LME sets the base and politics sets the premium." }
    ],
    outlook: "The structural setup is the most interesting in decades: demand grows with electrification (EVs, grids, solar frames) while the 2 traditional supply valves, Chinese expansion and cheap Western power, are both shut. That argues for higher mid-cycle prices and fat margins for low-cost, low-carbon producers. The bear case is equally simple: aluminum demand is transport and construction, so a global recession or a Chinese cap relaxation reprices everything. Either way, the cost curve (power price times carbon intensity) decides who compounds and who becomes an option on the LME."
  },

  structure: {
    suppliers: [
      { name: "Bauxite miners (Guinea's CBG/SMB, Rio Tinto, Alcoa)", note: "Guinea supplies the majority of China's imported ore: one country's politics under half the chain" },
      { name: "Alumina refiners (Chalco, Alcoa, Hongqiao, South32)", note: "The mid-chain chemical step; alumina spot squeezes periodically maul smelter margins" },
      { name: "Power producers and grids", note: "The true feedstock: ~14MWh/t; the power contract IS the smelter's business model" },
      { name: "Carbon anode and petcoke chain", note: "Every tonne of metal consumes ~0.4t of carbon anodes: an oil-refining byproduct market few watch" }
    ],
    producers: [
      { name: "China Hongqiao", note: "World's largest at ~6.7Mt (2025), migrating capacity to Yunnan hydro" },
      { name: "Chalco / Chinalco", note: "China's state champion, ~6Mt, integrated bauxite to fabrication" },
      { name: "Rusal", note: "Largest ex-China producer (~3.8Mt); Siberian hydro power, sanctions-shadowed sales" },
      { name: "Western + Gulf group (Alcoa, Rio Tinto, Hydro, EGA)", note: "The low-carbon and gas-powered rest-of-world supply base" }
    ],
    distributors: [
      { name: "LME warehouses and merchant traders (Glencore, Trafigura)", note: "The physical market's plumbing; financing trades can lock up 1Mt+ for years" },
      { name: "Metal service centers", note: "Cut-to-size distribution to thousands of fabricators" }
    ],
    customers: [
      { name: "Transport (~33% of demand)", note: "Autos, EVs (lightweighting), aerospace plate: the biggest and most cyclical slug" },
      { name: "Construction (~20 to 25%)", note: "Extrusions, curtain wall, frames: China property is the demand swing factor" },
      { name: "Packaging and electrical", note: "Can sheet (the stable annuity) and cable/grid conductor (the electrification kicker)" }
    ],
    regulators: [
      { name: "NDRC / Beijing", note: "The 45Mt cap and ETS inclusion: the world's real supply regulator" },
      { name: "EU (CBAM, ETS)", note: "Prices the carbon in every imported tonne from 2026" },
      { name: "US Commerce (Section 232)", note: "50% duties since June 2025; premiums, not the LME, absorb them" },
      { name: "The LME itself", note: "Warehouse rules and Russian-metal policy move billions in inventory value" }
    ],
    capital: [
      { name: "Corporate bond markets", note: "Smelter fleets are financed on the balance sheet; leverage is lethal at cycle troughs" },
      { name: "Commodity trade finance and prepays", note: "Traders bank producers via offtake prepayments (Rusal's lifeline playbook)" },
      { name: "Project finance tied to PPAs", note: "New smelters get built only where a 20-year power contract can anchor the debt" }
    ]
  },

  valueChain: {
    intro: "From red dirt to rolled coil: value concentrates wherever electricity is cheap or conversion is certified. The smelter takes the commodity risk; the roller clips a toll on top of a metal price it passes through.",
    stages: [
      { id: "bauxite", name: "Bauxite mining", what: "Strip-mining aluminum ore near tidewater", players: "Rio Tinto, Alcoa, Guinea's CBG/SMB, Hongqiao's Guinea JVs", valueCapture: 2,
        economics: { grossMargin: [20, 35], capitalIntensity: 3, concentration: 3 },
        linksTo: ["mining", "shipping"],
        deeper: "Ore is abundant but concentrated: Guinea became the chain's chokepoint as China's dominant import source, so every Conakry coup rumor moves alumina futures. Low margins, but control of ore is strategic insurance for integrated producers." },
      { id: "alumina", name: "Alumina refining", what: "Bayer-process chemistry: ~2t alumina per tonne of metal", players: "Chalco, Alcoa, Hongqiao, South32", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 4, concentration: 4 },
        linksTo: ["chemicals", "mining"],
        deeper: "A quiet oligopoly that periodically bites: refinery outages or Guinea disruptions send spot alumina from ~15% of the LME price to 25%+, transferring billions from smelters to refiners. Integrated players (Alcoa, Chalco) hedge the fight internally; merchant smelters just bleed." },
      { id: "smelting", name: "Primary smelting", what: "Hall-Heroult electrolysis: ~14MWh per tonne", players: "Hongqiao, Chalco, Rusal, EGA, Alcoa, Rio, Hydro", valueCapture: 4,
        economics: { grossMargin: [10, 30], capitalIntensity: 5, concentration: 3 },
        linksTo: ["utilities", "carbon-markets"],
        deeper: "The industry's beating heart and its casino: margin = LME price minus power minus alumina, and all 3 move independently. Pots run 24/7 for decades; curtailment is quasi-permanent (Europe's 2021-22 losses have mostly not returned). Cost curve position is destiny, and the curve is a power-price map." },
      { id: "semis", name: "Casting, rolling, extrusion", what: "Ingot into sheet, plate, foil, billet, extrusions", players: "Novelis, Constellium, Kaiser, UACJ, Chinese majors", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 4, concentration: 3 },
        linksTo: ["manufacturing", "packaging"],
        deeper: "A conversion business: metal price is passed through, and the roller earns a per-tonne conversion margin on top. Qualified capacity in can sheet and auto body sheet is tight in the West, giving the Novelis class utility-like economics with commodity optics." },
      { id: "fabrication", name: "Downstream fabrication", what: "Auto body sheet, aerospace plate, cans, building systems, cable", players: "OEM supply chains, canmakers, cable makers", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 3, concentration: 2 },
        linksTo: ["automotive", "ev", "construction", "aerospace"],
        deeper: "Where the metal meets GDP: transport is ~33% of demand and rising with EV lightweighting; solar frames and grid cable are the new marginal buyers. Certification moats (aerospace plate) earn real margins; commodity extrusion earns freight plus a prayer." },
      { id: "recycling", name: "Secondary and scrap", what: "Remelting scrap at ~5% of primary's energy", players: "Novelis (world's largest recycler), Hydro CIRCAL, secondary smelters", valueCapture: 4,
        economics: { grossMargin: [10, 25], capitalIntensity: 3, concentration: 2 },
        linksTo: ["waste-management", "steel"],
        deeper: "The energy math is unanswerable: 95% emissions avoided, no smelter needed. The constraint is scrap supply and sorting (alloy contamination), which is why scrap spreads tighten every year and why capped-out China quietly became the world's biggest scrap importer and recycler." }
    ]
  },

  financials: {
    businessModel: [
      "Upstream is a price-taking margin business: revenue = tonnes × (LME + premiums), cost = alumina (~35 to 40% of cash cost) + power (~30%) + carbon anodes, labor, and casting. Nobody controls the price, so the entire game is cost-curve position: a first-quartile smelter (cheap hydro, owned alumina) prints cash through every trough, while fourth-quartile capacity is a call option on the LME that spends half its life curtailed. Operating leverage is savage in both directions because costs are mostly fixed and pots cannot idle gracefully.",
      "Downstream inverts the risk: rollers and extruders buy metal at LME plus premium, sell at metal plus a conversion fee, and hedge the metal in between, so their P&L is volume and conversion margin, not the aluminum price. The market chronically misprices this: Novelis-class converters screen as metals cyclicals but earn packaging-like recurring economics on can sheet. Watch working capital everywhere: a $500/t LME move swings inventory funding needs violently, and trade-finance stress is how aluminum companies actually die."
    ],
    fingerprint: { grossMargin: 18, recurringRevenue: 15, capitalIntensity: 85, pricingPower: 20, cyclicality: 90, operatingLeverage: 80 },
    lines: [
      { label: "LME price + regional premiums", note: "The tape: 2025 averaged sharply higher (+17%) on China's cap and a ~1.8Mt deficit" },
      { label: "Power and alumina spreads", note: "The 2 input prices that decide smelter margin; each can move 50%+ in a year" },
      { label: "Volume and utilization", note: "Curtailments and restarts: quasi-permanent decisions, announced like capex" },
      { label: "Conversion margin (downstream)", note: "The roller's toll per tonne; metal price passes through" },
      { label: "Carbon cost and green premium", note: "ETS/CBAM charges vs low-carbon pricing: the new margin axis from 2026" }
    ],
    unitEconomics: {
      unit: "per tonne of primary aluminum (illustrative, 2025)",
      items: [
        { label: "Realized price (LME + premium)", value: "~$2,700 to $3,200", note: "LME rose 17%+ in 2025; US buyers add a record Midwest premium" },
        { label: "Alumina (~1.9t needed)", value: "~$700 to $950", note: "spikes to 25%+ of LME in squeezes transfer margin up the chain" },
        { label: "Power (~14MWh)", value: "~$560 at $40/MWh; $1,000+ in Europe", note: "the line that decides which hemisphere smelts" },
        { label: "Smelter cash margin", value: "~$200 to $800+", note: "quartile-dependent; the 2025 deficit fattened everyone" }
      ]
    }
  },

  kpiRefs: ["mining-aisc"],
  kpiLocal: [
    {
      id: "alu-power-cost", name: "Smelter Power Cost per Tonne", industries: ["aluminum"],
      definition: "The electricity bill embedded in each tonne of metal: the single largest controllable cost and the industry's competitive fingerprint.",
      formula: "Power cost/t = ~14MWh × contracted power price ($/MWh)",
      interpretation: "At $40/MWh a smelter pays ~$560/t and lives; at $80/MWh it pays ~$1,120/t and dies in the next trough. Contract tenor matters as much as price: spot-exposed smelters are weather derivatives.",
      healthy: "< $600/t on 10-year+ contracts or owned generation", warning: "> $900/t, spot-indexed, or contract expiring into a tight power market" },
    {
      id: "alu-premium", name: "Regional Premium", industries: ["aluminum"],
      definition: "The surcharge physical buyers pay over the LME for delivered metal in a region: where tariffs, freight, and local scarcity actually price.",
      formula: "All-in price = LME cash + regional premium (+ product premium for billet, foil stock)",
      interpretation: "Tariffs land here, not in the LME: the US Midwest premium hit records after Section 232 duties rose to 50% in June 2025 while the world price barely blinked. Diverging premiums are the fingerprint of a fragmenting market.",
      healthy: "Premiums stable and converging across regions", warning: "One region's premium decoupling: policy shock or physical shortage incoming" }
  ],

  health: {
    intro: "Producer health is 3 questions: where do you sit on the power-cost curve, how clean are your electrons, and can your balance sheet survive 2 years of trough prices while pots keep running.",
    pillars: [
      { name: "Cost curve position", weight: 30, metrics: "Cash cost vs global curve, alumina integration, power price and tenor", healthy: "First or second quartile with 10-year+ power", warning: "Fourth quartile, spot power, merchant alumina" },
      { name: "Power security", weight: 25, metrics: "Contract duration, owned generation share, grid/political risk", healthy: "Owned hydro or 15-year PPAs", warning: "Contracts repricing into data-center competition" },
      { name: "Balance sheet through cycle", weight: 15, metrics: "Net debt / mid-cycle EBITDA, trade-finance dependence", healthy: "< 1.5x mid-cycle, undrawn liquidity", warning: "> 3x, prepay-funded, working capital squeezed" },
      { name: "Carbon position", weight: 15, metrics: "t CO2e/t metal, CBAM/ETS exposure, low-carbon product share", healthy: "< 4t CO2e/t (hydro class), certified green products", warning: "Coal-fired, CBAM-exposed, no decarbonization path" },
      { name: "Integration and product mix", weight: 15, metrics: "Bauxite/alumina self-sufficiency, value-added product share", healthy: "Integrated upstream, 50%+ value-added sales", warning: "Merchant everything: pure LME beta with none of the hedges" }
    ],
    scoringNote: "In aluminum the unforgivable event is losing your power contract: capacity without competitive electricity is scrap value, whatever the nameplate says."
  },

  valuation: {
    intro: "The market prices aluminum equities as leveraged bets on the LME with a cost-curve multiplier: the discipline is normalizing the price deck and refusing to capitalize peak spreads.",
    methods: [
      { name: "EV / EBITDA (mid-cycle)", use: "The standard screen across producers", avoid: "Spot-EBITDA multiples at cycle extremes: trough multiples look expensive, peak multiples look absurdly cheap, both lie", strengths: "Comparable, quick", weaknesses: "Everything rides on the assumed mid-cycle LME price", range: { low: 5, high: 7, asOf: 2025, note: "low-carbon, integrated names earn the top of the band" } },
      { name: "FCF yield at normalized prices", use: "Testing whether the equity pays you to hold cycle risk", avoid: "Capitalizing deficit-year cash flows as permanent", strengths: "Cuts through D&A games and working-capital noise", weaknesses: "Normalized is an argument, not a number", range: { low: 6, high: 12, asOf: 2025, note: "% yields; commodity equities must out-yield the market" } },
      { name: "Replacement cost / NAV", use: "Sanity check: no greenfield US smelter since 1980 means incumbency has scarcity value", avoid: "Applying Chinese build costs to Western assets: the West builds at multiples of China's cost, when it can build at all", strengths: "Anchors the long-run price floor and M&A math", weaknesses: "Stranded high-carbon assets can trade below replacement forever", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: power contracts, not pots, hold the value" } },
      { name: "Cost-curve scenario DCF", use: "Modeling who prints cash at $2,200 vs $3,200 LME", avoid: "Single price-deck DCFs presented with false precision", strengths: "Makes the leverage explicit: quartile position times price scenario", weaknesses: "Garbage decks in, confident garbage out", range: { low: 0, high: 0, asOf: 2025, note: "scenario tool, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an aluminum producer quickly: mid-cycle EBITDA times a cost-curve-adjusted multiple, minus net debt. Be honest about what mid-cycle means with China at its cap.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 12, step: 0.5, value: 3, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 3, max: 9, step: 0.5, value: 6, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 20, step: 0.5, value: 4, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk trades aluminum as a policy-rationed power arbitrage: long the low-cost, low-carbon producers into a structurally tighter market (China capped, Western power scarce), short or avoid the coal-fired and spot-power-exposed tail, and treat premiums, not the LME, as the tell for trade-policy shocks. The 2025 deficit (~1.8Mt) made the bull case consensus; position sizing should respect that.",
    debates: [
      { topic: "Is China's 45Mt cap a structural bull market or a policy that bends?", bull: "The cap held even as 2025 prices ran: it is carbon policy, not market policy, reaffirmed in the 2025-2027 Action Plan. With the swing producer frozen, every demand increment lands on a supply curve that takes 5+ years and scarce power to extend: steel's 2016 supply-side reform, replayed in a better metal.", bear: "China has bent every industrial cap when growth demanded it, and 2025 output already brushed the ceiling: 45.02Mt against 45Mt. Capacity swaps, Yunnan restarts, and definitional creep can add real tonnes without ever repealing anything, and Chinese semis exports leak metal out anyway." },
      { topic: "Green premium: real pricing power or marketing?", bull: "CBAM converts virtue into invoice from 2026: 5 to 12% effective cost on dirty imports into Europe (ING), and automakers need auditable low-carbon inputs for their own scope-3 targets. Hydro-powered producers own a scarce product (<4t CO2e/t) that coal smelters cannot replicate at any price.", bear: "A decade of green-aluminum branding produced premiums measured in tens of dollars a tonne: buyers talk carbon and pay spot. CBAM prices carbon at the border but rebates nothing to green producers outside Europe, and a recession flattens every premium conversation into a price conversation." },
      { topic: "Does the Russian stock overhang cap rallies?", bull: "The overhang is an illusion of availability: ~60% of LME on-warrant metal is Russian units most Western consumers will not touch, so usable free inventory is far tighter than headline stocks. Squeezes get sharper, not softer.", bear: "Metal is metal: China and Turkey happily absorb Rusal tonnes, freeing non-Russian units for the West, and any peace-driven normalization dumps years of shadow inventory expectations onto the curve overnight." }
    ],
    cycle: {
      where: "Early-to-mid upcycle: China pinned at its cap, a ~1.8Mt global deficit, LME up 17%+ in 2025 and grinding higher into 2026, but demand's China-property leg still soft: a supply-led bull market, which is the durable kind until recession tests it.",
      drivers: "Chinese output vs the 45Mt cap, ex-China restarts (Europe's power prices), transport and construction demand, scrap availability, and trade policy (Section 232, CBAM, LME Russian-metal rules).",
      leads: [
        "IAI monthly primary production statistics (free): China vs cap is the number",
        "LME daily stocks and cancelled warrants (free): watch the Russian share",
        "European power forwards: the restart/curtailment switch for ~1Mt of latent capacity",
        "Alumina spot price as % of LME: input squeezes hit smelter margins first",
        "China property starts and global auto builds: the demand-side confirmatory data"
      ]
    },
    exposure: [
      { vehicle: "Alcoa", note: "The pure-play Western beta: integrated alumina, leverage to LME and premiums" },
      { vehicle: "Norsk Hydro", note: "Hydro power + green premium optionality: the low-carbon quality end" },
      { vehicle: "Rio Tinto (aluminum division)", note: "Quebec hydro smelters inside a diversified miner: cheaper cyclicality" },
      { vehicle: "Hindalco / Novelis", note: "The conversion-margin play: recycling and can sheet, metal price passed through" },
      { vehicle: "Century Aluminum", note: "Highest-beta US smelter equity: a leveraged option on tariffs and the Midwest premium" }
    ],
    catalysts: [
      { when: "Monthly (IAI/SMM data)", what: "Chinese output vs the 45Mt cap: the single series that moves the thesis" },
      { when: "2026 onward", what: "CBAM definitive phase: carbon costs land on EU imports, green premiums get a hard floor test" },
      { when: "Quarterly earnings", what: "Power contract updates, curtailment/restart decisions, alumina cost guidance" },
      { when: "Policy dates", what: "Section 232 revisions, LME Russian-metal rule changes, China ETS tightening" }
    ],
    data: [
      { series: "Primary production by region", source: "International Aluminium Institute (free, monthly)", why: "The supply tape: China vs cap, ex-China restarts" },
      { series: "LME price and stocks", source: "LME free data / Westmetall (free daily)", why: "Price, inventory, and the Russian-warrant share" },
      { series: "US import premiums and trade flows", source: "USGS Mineral Commodity Summaries (free)", why: "Tariff transmission and US supply dependence (Canada)" },
      { series: "Alumina and bauxite trade", source: "IAI + customs summaries (free)", why: "Input-cost squeezes and the Guinea chokepoint" },
      { series: "EU carbon price (EUA)", source: "Ember / EEX summaries (free)", why: "Prices the CBAM cost on every dirty imported tonne" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Brutal: transport + construction are most of demand, and fixed-cost smelters cannot flex. Premiums collapse first, LME follows, fourth-quartile equities trade as options. Own only balance sheets and first-quartile costs." },
      { regime: "Energy/power spike", behavior: "Double-edged and regional: European curtailments tighten supply (bullish LME) while spot-power producers bleed. The trade is long hydro-powered producers, short spot-exposed ones: the spread IS the thesis." },
      { regime: "China stimulus", behavior: "The classic upside shock: property and grid spending lift demand while the cap freezes supply response. Deficits widen fast; premiums in Asia lead the move." },
      { regime: "Dollar/rates rising", behavior: "Headwind: dollar-priced metal costs more in local currency, financing inventory gets pricier, and construction demand slows. Conversion businesses (Novelis class) hold up best." }
    ]
  },

  players: [
    { name: "China Hongqiao", role: "World's largest producer", country: "CN", real: true, note: "~6.7Mt primary output (2025); shifting pots from Shandong coal to Yunnan hydro" },
    { name: "Chalco (Chinalco)", role: "State champion, #2 globally", country: "CN", real: true, note: "~6Mt, integrated bauxite-to-fabrication; Beijing's instrument in the sector" },
    { name: "Rusal", role: "Largest ex-China producer", country: "RU", real: true, note: "~3.8Mt on Siberian hydro; its units are ~60% of LME on-warrant stock via Western self-sanctioning" },
    { name: "Alcoa", role: "The Western pure play", country: "US", real: true, note: "The 1886 original: bauxite, alumina, smelting; ELYSIS zero-carbon smelting JV with Rio" },
    { name: "Rio Tinto Aluminium", role: "Low-carbon heavyweight", country: "GB", real: true, note: "Quebec and BC hydro smelters; the industry's cheapest clean electrons" },
    { name: "Norsk Hydro", role: "Green premium pioneer", country: "NO", real: true, note: "Hydro-powered, sells certified low-carbon (REDUXA) and 75%-recycled (CIRCAL) products" },
    { name: "Emirates Global Aluminium", role: "Gulf champion", country: "AE", real: true, note: "~2.7Mt on cheap gas; the GCC is the third pillar of world supply" },
    { name: "Novelis (Hindalco)", role: "Largest roller and recycler", country: "US", real: true, note: "Can sheet and auto body sheet: conversion margins, not LME bets" }
  ],

  geography: [
    { country: "CN", role: "~60% of world output", note: "44 to 45Mt in 2025, at the 45Mt cap; also the biggest scrap recycler" },
    { country: "GN", role: "The bauxite chokepoint", note: "Dominant supplier of China's imported ore; political risk here prices into alumina" },
    { country: "AU", role: "Bauxite and alumina power", note: "Top-tier ore reserves and refining; South32/Alcoa/Rio assets" },
    { country: "CA", role: "Hydro smelting for the US", note: "Quebec's cheap hydro feeds most US aluminum imports: tariff policy's awkward fact" },
    { country: "RU", role: "Sanctioned swing supplier", note: "Rusal's ~3.8Mt seeks Asian buyers; its metal dominates LME warehouses" },
    { country: "AE", role: "Gulf gas smelting", note: "EGA anchors the GCC's ~10% of world output, aimed at export markets" }
  ],

  cycles: [
    { year: 1886, title: "Hall-Heroult", kind: "shift", text: "Electrolytic smelting turns a metal dearer than silver into a commodity within a generation; Napoleon III's aluminum cutlery becomes soda cans. Lesson: process technology, not scarcity, sets a material's destiny." },
    { year: 1994, title: "The post-Soviet flood", kind: "bust", text: "The USSR's collapse dumps military-industrial metal onto the LME; prices crater until producers sign a rare coordinated cut (the 1994 MOU). Lesson: aluminum supply shocks are political events wearing commodity clothes." },
    { year: 2009, title: "The warehouse trade", kind: "bust", text: "The GFC halves prices; banks and traders warehouse millions of idle tonnes in contango-financing deals, and delivery queues at Detroit sheds stretch past a year. Lesson: in metals, the financing structure can distort the physical market for years." },
    { year: 2015, title: "China's export flood and the cap", kind: "shift", text: "Chinese overcapacity drives the LME below $1,500/t and most of the world's smelters underwater; Beijing responds with supply-side reform and the 45Mt cap in 2017. Lesson: the marginal producer's government, not the marginal producer, sets the floor." },
    { year: 2022, title: "The energy-crisis spike", kind: "boom", text: "European power prices force 1Mt+ of curtailments and the Ukraine invasion adds sanction fear: the LME prints a record $4,073/t in March 2022, then round-trips as recession fear takes over. Lesson: solid electricity rallies on power shocks and dies on demand shocks, sometimes in the same year." }
  ],

  risks: [
    { name: "China relaxes or evades the 45Mt cap", severity: 4, likelihood: 2, transmission: "Capacity-swap creep or policy loosening -> supply resumes growing -> the deficit thesis and 2025's price gains unwind -> high-cost ex-China capacity closes permanently." },
    { name: "Global recession in transport/construction", severity: 4, likelihood: 3, transmission: "Demand contracts in the 2 biggest end markets -> destocking amplifies the fall -> premiums then LME collapse -> fixed-cost smelters burn cash and leveraged names dilute." },
    { name: "Power repricing against smelters", severity: 4, likelihood: 3, transmission: "Data centers and electrification bid up long-term power -> expiring smelter PPAs reprice unaffordably -> Western curtailments become closures -> supply concentrates further in China and the Gulf." },
    { name: "Trade and sanctions rupture", severity: 3, likelihood: 4, transmission: "New tariffs or LME Russian-metal bans -> premiums dislocate violently by region -> physical arbitrage rewires flows -> hedges tracking the LME stop matching the price users actually pay." },
    { name: "Guinea supply shock", severity: 3, likelihood: 2, transmission: "Political disruption in the dominant bauxite exporter -> alumina spot spikes to 25%+ of LME -> merchant smelter margins vaporize -> integrated producers capture the transfer." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Aluminum is the light, rustproof metal in cans, cars, planes, and window frames. Making it new takes enormous electricity (about 14MWh per tonne, a US household's yearly use several times over), so smelters get built wherever power is cheapest. China makes about 60% of the world's supply, and recycling old aluminum takes only ~5% of the energy of making new metal, which is why the can you toss is genuinely valuable."] },
    L2: { title: "Intermediate", text: ["The chain runs bauxite ore -> alumina -> smelted metal -> rolled and extruded products, and the economics split in 2: smelters are price-takers whose margin is the LME price minus power and alumina costs, while rollers earn a conversion fee and pass the metal price through. Since 2017 China has capped its smelting capacity at 45Mt, and in 2025 it effectively hit that ceiling (~45Mt of ~74Mt world output), helping push the LME up 17%+ with a ~1.8Mt global deficit."] },
    L3: { title: "Advanced", text: ["Analyze producers by cost-curve quartile: power price and contract tenor (~14MWh/t means $40/MWh vs $80/MWh is a ~$560/t margin gap), alumina integration, and carbon intensity (hydro ~4t CO2e/t vs coal ~15 to 20t). Watch the pricing stack separately: LME (global balance), regional premiums (tariffs: the US Midwest premium hit records after Section 232 went to 50% in June 2025), and product premiums. Downstream, value converters on conversion margin and volume, never on the metal price they hedge away."] },
    L4: { title: "Expert", text: ["The live debates: whether Beijing's cap is durable carbon policy or bendable industrial policy (2025 output of 45.02Mt says it is already being tested); whether CBAM's 2026 definitive phase finally converts green aluminum from marketing into margin (5 to 12% effective uplift on dirty EU imports); and whether the LME's ~60% Russian on-warrant stock means usable inventories are far tighter than headlines suggest. Trade the monthly IAI China print, European power forwards (the restart switch), and alumina/LME ratio as the margin-squeeze tell."] },
    L5: { title: "Institutional", text: ["Allocator's frame: aluminum is the cleanest expression of 2 secular themes, power scarcity and supply rationed by policy, wrapped in a deeply cyclical demand base. Core the low-cost low-carbon producers (owned hydro, integrated alumina) as compounding scarcity assets; treat high-cost smelters as cheap optionality to be rented, not owned; and hold the conversion/recycling franchises for the through-cycle ballast. Size for the tail: this sector's history is policy shocks (1994, 2017, 2018 sanctions, 2025 tariffs) repricing everything faster than any demand model."] }
  },

  quiz: [
    { q: "Traders call aluminum 'solid electricity' because:", choices: ["It conducts power in grids", "Smelting one tonne consumes ~14MWh, making power the defining cost", "It is priced in energy units", "Smelters sell electricity back"], answer: 1, explain: "Power is roughly a third of cash cost; the global cost curve is essentially a map of who has the cheapest long-term electrons." },
    { q: "China's role in world aluminum supply is:", choices: ["A minor importer", "~60% of output, now pinned at a 45Mt national capacity cap", "Mostly recycling", "Bauxite mining only"], answer: 1, explain: "China produced ~44 to 45Mt of the world's ~74Mt in 2025, brushing the cap Beijing set in 2017: the marginal tonne is now policy-rationed." },
    { q: "Smelters get built:", choices: ["Near car factories", "Wherever cheap, long-term power is stranded: Quebec hydro, Gulf gas, Yunnan hydro", "Near bauxite mines only", "In financial centers"], answer: 1, explain: "A competitive smelter needs ~$40/MWh for decades; ore travels to the electrons, not the other way around." },
    { q: "Recycling aluminum uses roughly:", choices: ["The same energy as smelting", "Half the energy", "~5% of the energy, avoiding ~95% of emissions", "More energy than primary"], answer: 2, explain: "Remelting skips electrolysis entirely: scrap is the fastest-growing 'mine', and capped-out China is now the biggest recycler." },
    { q: "When the US raised Section 232 duties to 50% in June 2025, the main price effect was:", choices: ["The LME doubled", "The US Midwest premium hit records while the LME barely moved", "Aluminum got cheaper in the US", "Nothing changed"], answer: 1, explain: "Tariffs price into regional premiums, not the global tape: all-in price = LME + regional premium + product premium." },
    { q: "Russian metal on the LME matters because:", choices: ["It is banned everywhere", "Rusal units are ~60% of on-warrant stock that many Western buyers will not touch, so usable inventory is tighter than headlines", "It trades at a premium", "It is higher quality"], answer: 1, explain: "Self-sanctioning turned LME stocks into sticky Russian inventory: headline stocks overstate what Western consumers can actually buy." },
    { q: "A smelter's margin is best described as:", choices: ["A fee per tonne set by contract", "LME price plus premiums, minus alumina (~35 to 40% of cash cost) and power (~30%)", "Fixed by governments", "Driven by marketing"], answer: 1, explain: "Price-taking with mostly fixed costs: cost-curve quartile is destiny, and power plus alumina decide the quartile." },
    { q: "CBAM's definitive phase (from 2026) matters because it:", choices: ["Bans aluminum imports to the EU", "Turns embedded carbon into a hard import cost, an effective 5 to 12% uplift on high-carbon tonnes", "Subsidizes coal smelters", "Only affects steel"], answer: 1, explain: "Carbon becomes an invoice line at the EU border: the first regulation that pays hydro-powered producers for being clean." }
  ],

  sources: [
    { name: "International Aluminium Institute: primary production statistics", url: "https://international-aluminium.org/statistics/primary-aluminium-production/", feeds: "production, China share" },
    { name: "Mysteel: IAI global output exceeds 73Mt in 2025", url: "https://www.mysteel.net/news/5111608-iai-global-primary-aluminum-output-exceeds-73-million-t-in-2025", feeds: "2025 output, China vs cap" },
    { name: "Fastmarkets: US aluminium smelting and energy costs", url: "https://www.fastmarkets.com/insights/us-aluminium-smelting-and-energy-costs-3-key-growth-factors/", feeds: "power economics, 14MWh/t, $40/MWh benchmark" },
    { name: "ING Think: greening aluminium (tariffs, costs, carbon)", url: "https://think.ing.com/articles/greening-aluminium-tariffs-costs-carbon/", feeds: "CBAM impact, green premium, regional power costs" }
  ]
};
