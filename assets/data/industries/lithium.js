/* Industry Atlas - LITHIUM (full module, research-backed)
 * Anchors: battery-grade lithium carbonate peaked above $80,000/t (Nov 2022), crashed
 * ~88% to about $9,000-10,000/t by mid-2025, then nearly doubled to ~$26,000/t by late
 * Jan 2026 (Fastmarkets/INN); SQM's realized Atacama price fell $30,467/t (2023) to
 * $9,174/t (2025) per its 20-F; demand ~1.8 Mt LCE 2025 heading to ~3.7 Mt by 2030
 * (Albemarle); surplus 175 kt (2023) -> 141 kt (2025, S&P Global) -> deficit in 2026
 * (Fastmarkets/Benchmark); China refines ~65-70% of lithium chemicals (Wood Mackenzie/
 * EIA, 2025); Greenbushes AISC ~$7,000/t, SQM ~$8,200/t cash (Roskill via
 * discoveryalert, 2025); lithium chemicals market ~$32B (Grand View Research, 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["lithium"] = {
  meta: {
    id: "lithium", name: "Lithium", sector: "materials", status: "full",
    tagline: "The metal every battery needs, priced by whoever cries last: an 88% crash and a 95% rebound inside 40 months.",
    marketSize: { value: 32, unit: "$B", asOf: 2025, note: "lithium chemicals market value (Grand View Research); the figure itself swings with price, it was roughly 2x this at 2022 peak prices" },
    cagr: { value: 15, range: [12, 18], horizon: "2025-2030" },
    maturity: "high-growth commodity", cyclicality: 5, capitalIntensity: 5, regulation: 3, disruption: 4
  },
  newsQuery: '(lithium OR spodumene OR "lithium carbonate" OR Albemarle OR SQM OR Ganfeng)',

  overview: {
    definition: "The lithium industry finds, mines, and refines the lightest metal into battery-grade chemicals: carbonate and hydroxide measured in tonnes of lithium carbonate equivalent (LCE). It feeds nearly every EV, phone, and grid battery on Earth, and it prices like a commodity possessed: demand compounds at 15%+ while supply arrives in lumps, so the price whipsaws by multiples, not percents.",
    howItWorks: [
      "Lithium comes from 2 geologies and, increasingly, a third. Brine: pump lithium-rich groundwater into Andean evaporation ponds for 12-18 months (Chile's Atacama, Argentina's puna), the lowest cash costs on the curve. Hard rock: mine spodumene ore, mostly in Australia, concentrate it, then ship it to a converter, faster to build, costlier to run. The third is direct lithium extraction (DLE): chemically pulling lithium from brine in hours instead of months, with ~90% recovery versus roughly half for ponds, now moving from pilot to first commercial projects in Arkansas's Smackover formation.",
      "The industry's center of gravity sits mid-chain: refining. Mines produce concentrate; converters turn it into battery-grade carbonate or hydroxide; and China performs about 65-70% of that conversion (Wood Mackenzie, 2025), up from roughly 45% in 2015. That chokepoint, not the rocks themselves, is what Western industrial policy (the IRA, EU critical raw materials rules) is trying to unwind: lithium in the ground is abundant; qualified battery-grade chemical capacity outside China is not.",
      "Economics are pure cost-curve. Battery-grade lithium is a spec-driven commodity: once qualified, buyers switch on price, so nobody has pricing power at the product level and everybody lives or dies by position on the curve. Integrated brine (Atacama) and the best hard rock (Greenbushes, AISC around $7,000/t LCE) sit at the bottom; non-integrated spodumene converters run $9,000-12,000/t; Chinese lepidolite (low-grade mica) is the swing tonne that sets the marginal price. When spot visited $9,000-10,000/t in mid-2025, perhaps half the industry was underwater, and curtailments did the rebalancing.",
      "Demand is the steadiest thing in the story: ~1.8 Mt LCE in 2025, on track to roughly double to ~3.7 Mt by 2030 (Albemarle's forecast), driven by 20M+ annual EV sales and grid storage growing even faster than EVs. Supply is the unstable part: mines take 5-10 years to permit and build, then arrive all at once. That mismatch produced the defining tape of this decade: above $80,000/t in November 2022, about $9,000/t by mid-2025 (an ~88% collapse), then a 95% rebound in 2 months to ~$26,000/t by late January 2026 as the surplus flipped to deficit. Same molecule, 3 different decades of price, 40 months apart."
    ],
    history: [
      { era: "1950-1990", title: "Niche metal", text: "Lithium serves ceramics, glass, grease, and psychiatry; a few US and Chilean producers supply a market too small for Wall Street to notice." },
      { era: "1991-2015", title: "The battery is born", text: "Sony commercializes the lithium-ion cell (1991); laptops and phones build steady demand; a cozy oligopoly (SQM, Rockwood/Albemarle, FMC, plus Talison's Greenbushes) supplies it profitably and quietly." },
      { era: "2016-2020", title: "First EV boom-bust", text: "China's EV subsidies triple prices by 2018; Australian spodumene mines flood in response; prices halve into 2020 and marginal miners go bust. The template is set: lithium overshoots in both directions." },
      { era: "2021-2022", title: "The superspike", text: "Post-COVID EV demand meets a supply base still licking its wounds: Chinese spot carbonate runs above $80,000/t (Nov 2022) and lithium becomes a geopolitical noun. Every automaker signs offtakes; every junior gets funded." },
      { era: "2023-present", title: "Crash and whipsaw", text: "The 2022 price built too many mines: surplus peaks at ~175 kt LCE (2023) and price collapses ~88% to ~$9,000-10,000/t by mid-2025. Curtailments bite, Rio Tinto buys Arcadium for $6.7B at the lows (closed March 2025), and in early 2026 the market flips to deficit: price doubles in 2 months." }
    ],
    trends: [
      { title: "Storage is the new EV", direction: "up", text: "Grid-scale storage (ESS) is compounding faster than EVs and broke most 2025 demand models to the upside; it is price-elastic, so cheap lithium literally creates its own demand." },
      { title: "China's refining chokepoint", direction: "shift", text: "~65-70% of lithium chemical conversion is Chinese (2025); IRA/FEOC sourcing rules and export-control skirmishes are forcing a parallel ex-China chain to be built at a structural cost premium." },
      { title: "DLE goes commercial", direction: "up", text: "Standard Lithium/Equinor's Arkansas project (22,500 t/y, construction 2026, production 2028) and Exxon's Saltwerx target the first commercial US DLE; if the ~90% recovery economics hold, oilfield brines become lithium provinces." },
      { title: "Swing supply sets the price", direction: "shift", text: "Chinese lepidolite and fast-cycle African spodumene (Zimbabwe, Mali) now act as the marginal tonne: they shut at $10,000/t and restart at $20,000/t, capping both tails of the price." },
      { title: "Contract structure maturing", direction: "up", text: "GFEX and CME futures, spot indices, and auction pricing are replacing opaque long-term contracts: lithium is becoming a real traded commodity with a curve, hedging, and financial players." }
    ],
    outlook: "Demand doubling by 2030 is the consensus; the argument is entirely about supply discipline. The 2023-2025 bust cancelled and curtailed enough capacity that most forecasters (Fastmarkets, Benchmark) had 2026 flipping to deficit, and the price agreed violently: +95% in 2 months. But the same rebound re-arms the swing supply that caused the bust, and JPMorgan's $18,000/t Q4 2026 target embeds exactly that ceiling. The durable winners are unchanged in any scenario: bottom-quartile cost assets (Atacama brine, Greenbushes) and whoever cracks qualified ex-China conversion at scale."
  },

  structure: {
    suppliers: [
      { name: "Reagent & chemicals suppliers (soda ash, sulfuric acid, lime)", note: "Conversion is chemistry at scale; reagents are a real cost line, especially for hard rock" },
      { name: "Mining & processing equipment (crushers, kilns, DLE membranes)", note: "DLE technology vendors (sorbents, membranes) are the chain's newest picks-and-shovels" },
      { name: "EPC & engineering firms", note: "Every project slips; converter commissioning to battery-grade spec is the classic 12-month overrun" },
      { name: "Power & water", note: "Evaporation needs sun and time; conversion needs cheap energy; Atacama water rights are politically contested" }
    ],
    producers: [
      { name: "Integrated majors (Albemarle, SQM, Rio Tinto/Arcadium, Ganfeng, Tianqi)", note: "Resource plus conversion; the cost-curve royalty" },
      { name: "Australian spodumene miners (Pilbara, MinRes, IGO/Greenbushes JV)", note: "~45% of mined supply; leveraged pure-play price beta" },
      { name: "Chinese converters & lepidolite", note: "The marginal producers whose restart decisions set the price" },
      { name: "Juniors & DLE developers", note: "Hundreds of stories, few financeable at trough prices; the 2026 rebound reopens the window" }
    ],
    distributors: [
      { name: "Long-term offtakes + spot/auction sales", note: "Producers sell direct to cathode and cell makers; auctions (spodumene) and indices set marginal price" },
      { name: "Traders & exchanges (GFEX, CME)", note: "A young but deepening futures market; China's GFEX contract now moves the physical price" }
    ],
    customers: [
      { name: "Cathode & precursor makers", note: "The direct buyers; qualification cycles of 6-18 months make them sticky" },
      { name: "Cell makers (CATL, BYD, LG, Panasonic class)", note: "Increasingly integrate upstream; CATL owns lepidolite mines whose halts move the global price" },
      { name: "Automakers & ESS integrators", note: "Sign offtakes and prepayments to secure supply; GM, Tesla, and Ford all bought into mines this cycle" }
    ],
    regulators: [
      { name: "Resource states (Chile's Corfo/state JV model, Argentina, Australia)", note: "Chile treats the Atacama as a strategic asset: lease payments scale to ~40% of revenue at peak prices" },
      { name: "US IRA / FEOC rules & EU CRMA", note: "Subsidy and sourcing rules that decide which tonnes qualify for which supply chain" },
      { name: "Permitting & environmental authorities", note: "Water use in the Atacama, mine permits in Nevada and Serbia: the 5-10 year gate on all new supply" }
    ],
    capital: [
      { name: "Equity markets & ASX juniors", note: "The exploration funding machine; opens and shuts with the lithium price" },
      { name: "Customer prepayments & offtake-linked debt", note: "Automakers and cell makers finance mines to secure tonnes" },
      { name: "Strategic M&A", note: "Bottom-of-cycle consolidation: Rio Tinto's $6.7B Arcadium takeout (closed 2025) is the template" }
    ]
  },

  valueChain: {
    intro: "From salt flat and spodumene pit to the cathode in a battery cell. Value capture follows the cost curve upstream and the qualification moat mid-chain: the mine earns the cycle's profits, the converter earns a toll, and everyone downstream treats lithium as a cost to be hedged.",
    stages: [
      { id: "resource", name: "Exploration & mining", what: "Brine pumping, spodumene mining, DLE", players: "SQM, Albemarle, Pilbara, MinRes, Rio Tinto", valueCapture: 5,
        economics: { grossMargin: [20, 70], capitalIntensity: 5, concentration: 4 },
        linksTo: ["mining", "copper-mining"],
        deeper: "Position on the cost curve is the entire business. Atacama brine and Greenbushes (AISC ~$7,000/t LCE) print money at any price seen this decade; lepidolite and non-integrated spodumene needed the 2026 rebound to breathe. Margin range above is the honest answer: it depends on the year." },
      { id: "conversion", name: "Conversion & refining", what: "Concentrate to battery-grade carbonate/hydroxide", players: "Ganfeng, Tianqi, Albemarle, SQM, Chinese independents", valueCapture: 3,
        economics: { grossMargin: [5, 20], capitalIntensity: 4, concentration: 4 },
        linksTo: ["chemicals", "manufacturing"],
        deeper: "The geopolitical chokepoint: ~65-70% Chinese (2025). Standalone converters earn a toll squeezed from both sides; integrated players capture the mine-to-chemical spread. Ex-China conversion carries a cost premium that IRA credits exist to offset: qualification to battery grade, not construction, is the hard part." },
      { id: "cathode", name: "Cathode & precursor", what: "Lithium plus nickel/iron/phosphate into cathode active material", players: "Chinese CAM majors, POSCO, BASF class", valueCapture: 2,
        economics: { grossMargin: [8, 15], capitalIntensity: 4, concentration: 3 },
        linksTo: ["chemicals", "batteries"],
        deeper: "Processing margin on a pass-through input: cathode makers hedge lithium and compete on chemistry (LFP vs NCM) and yield. The LFP shift matters upstream: it prefers carbonate over hydroxide, which reshuffled which producers earn the premium." },
      { id: "cells", name: "Cells & packs", what: "Battery manufacturing at terawatt-hour scale", players: "CATL, BYD, LG Energy, Panasonic, SK", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 5, concentration: 4 },
        linksTo: ["batteries", "ev", "consumer-electronics"],
        deeper: "The demand aggregators: cell makers translate EV and ESS orders into lithium offtakes, and their inventory cycles (restock/destock) amplify every price move. CATL integrating into mines means the biggest customer is also a swing producer: a structural conflict the market reprices around." },
      { id: "end-markets", name: "End demand (EV & storage)", what: "Vehicles, grid batteries, electronics", players: "Automakers, ESS integrators, utilities", valueCapture: 2,
        economics: { grossMargin: [0, 15], capitalIntensity: 3, concentration: 2 },
        linksTo: ["ev", "automotive", "utilities", "solar"],
        deeper: "EVs are ~60%+ of lithium demand and ESS the fastest-growing slice; both are deflation machines that pass cheap lithium through to buyers. Demand elasticity runs upstream: the 2023-2025 lithium crash helped make $25,000 EVs and grid storage boom possible." },
      { id: "recycling", name: "Recycling", what: "Black mass to battery-grade chemicals", players: "Chinese recyclers, Redwood Materials, Li-Cycle class", valueCapture: 2,
        economics: { grossMargin: [0, 20], capitalIntensity: 4, concentration: 2 },
        linksTo: ["waste-management", "batteries"],
        deeper: "The 2030s supply source scaling on 2020s feedstock: recycling economics track the lithium price, so the bust bankrupted the pioneers (Li-Cycle) while China built scale on process scrap. Meaningful supply share arrives when the first mass EV fleets retire, roughly 2030+." }
    ]
  },

  financials: {
    businessModel: [
      "A lithium producer's P&L is 3 numbers wearing a company: volumes, realized price, and cash cost. Realized price lags spot (contract mixes, quarterly formulas), which is why SQM's average Atacama price fell from $30,467/t in 2023 to $9,174/t in 2025 (its 20-F) even as spot moved further faster. Cost position is destiny: at mid-2025's ~$9,000-10,000/t spot, Greenbushes (~$7,000/t AISC) and Atacama brine still earned margin while lepidolite and non-integrated converters ($9,000-12,000/t) bled and shut. Royalties and state leases claw back the peaks: Chile's Corfo formula scales toward 40% of revenue at high prices, so Atacama torque is real but shared.",
      "Balance sheets, not income statements, decide who survives the troughs. The 2023-2025 bust forced dividend cuts, capex deferrals, and equity raises across the sector, and handed Rio Tinto the Arcadium portfolio for $6.7B at the lows. The corollary: this is a sector where counter-cyclical capital wins. Volume growth is the through-cycle compounder (demand ~1.8 Mt LCE in 2025 doubling to ~3.7 Mt by 2030, per Albemarle), but only for producers who can fund the build without selling equity at trough prices."
    ],
    fingerprint: { grossMargin: 35, recurringRevenue: 15, capitalIntensity: 85, pricingPower: 20, cyclicality: 95, operatingLeverage: 85 },
    lines: [
      { label: "Realized price vs spot", note: "The lag tells you what the next 2 quarters already look like" },
      { label: "Volumes & expansion ramps", note: "The only controllable growth lever; ramps to battery grade routinely slip" },
      { label: "Cash cost / AISC per tonne", note: "Curve position = survival; watch grade drift and strip ratios" },
      { label: "Royalties & lease payments", note: "Corfo-style sliding scales confiscate the peaks" },
      { label: "Inventory across the chain", note: "Cathode/cell destocking amplifies busts; restocking turbocharges rallies (see Jan 2026)" }
    ],
    unitEconomics: {
      unit: "per tonne of LCE (battery-grade carbonate)",
      items: [
        { label: "Atacama brine cash cost", value: "~$5,000-8,000", note: "before Corfo lease; the curve's floor" },
        { label: "Integrated hard rock (Greenbushes)", value: "~$7,000 AISC", note: "best-in-class spodumene (2025)" },
        { label: "Non-integrated converter", value: "~$9,000-12,000", note: "the marginal cost zone where 2025's curtailments happened" },
        { label: "Spot price roundtrip", value: "$80,000+ (2022) to ~$9,000 (2025) to ~$26,000 (Jan 2026)", note: "the same tonne, 3 different worlds" }
      ]
    }
  },

  kpiRefs: ["mining-aisc", "energy-reserve-life"],
  kpiLocal: [
    {
      id: "lithium-realized-price", name: "Realized LCE Price vs Spot", industries: ["lithium"],
      definition: "Average selling price per tonne of LCE a producer actually books versus the prevailing spot index.",
      formula: "Realized $/t = lithium revenue / LCE tonnes sold; compare to Fastmarkets/SMM spot for the period",
      interpretation: "Contract structures lag spot in both directions: in a crash, realized > spot flatters current results while guaranteeing worse ones ahead (SQM: $30,467/t in 2023 to $9,174/t in 2025); in a rally, the lag reverses and upgrades come pre-announced.",
      healthy: "Realized within ~15% of spot with disclosed contract mix", warning: "Widening gap vs spot; opaque or renegotiated contracts mid-cycle" }
  ],

  health: {
    intro: "Lithium health is measured at the trough, not the peak: cost-curve position, balance-sheet endurance, and resource quality decide who is still standing to enjoy the next spike.",
    pillars: [
      { name: "Cost-curve position", weight: 30, metrics: "Cash cost and AISC per tonne vs the marginal producer", healthy: "Bottom quartile (~$7,000/t class)", warning: "Above $10,000/t and non-integrated: the 2025 curtailment zone" },
      { name: "Balance sheet through-cycle", weight: 25, metrics: "Net debt/EBITDA at mid-cycle prices, liquidity runway at trough prices", healthy: "Funds capex at $10,000/t spot", warning: "Equity raises or asset sales forced at the lows" },
      { name: "Resource quality & duration", weight: 20, metrics: "Grade, reserve life, expansion optionality, recovery rates", healthy: "Decades of reserves with low-capex brownfield growth", warning: "Grade decline, short mine life, greenfield-only growth" },
      { name: "Offtake & customer book", weight: 15, metrics: "Contracted share, counterparty quality, pricing formulas", healthy: "Diversified tier-1 buyers with floors/collars", warning: "Concentrated in one cell maker; pure spot exposure at the marginal cost" },
      { name: "Jurisdiction & license", weight: 10, metrics: "Royalty regime stability, water/community standing, permitting", healthy: "Stable rules, secured permits and water rights", warning: "Resource nationalism drift (Chile 2023 model shift), contested water" }
    ],
    scoringNote: "Score everything at $10,000-12,000/t assumed prices, not spot: any lithium company looks healthy at $26,000/t, and the cycle guarantees you will not always get it."
  },

  valuation: {
    intro: "The market prices lithium equities on normalized prices, not spot: the whole game is arguing about the long-run incentive price (what it takes to call forth the next million tonnes) and who owns the tonnes beneath it.",
    methods: [
      { name: "NAV / DCF at long-run price", use: "Producers and developers: model volumes at a $12,000-18,000/t deck", avoid: "Spot-price extrapolation in either direction: the 2022 and 2025 tapes were both lies", strengths: "Forces the incentive-price debate into the open", weaknesses: "NAV is hostage to one assumption; small deck changes double or halve it", range: { low: 0.6, high: 1.2, asOf: 2026, note: "P/NAV; producers near 1x, developers at deep discounts" } },
      { name: "EV / EBITDA (mid-cycle)", use: "Producing majors on normalized earnings", avoid: "Trough EBITDA (multiples look infinite) and peak EBITDA (look absurdly cheap)", strengths: "Comparable across the group", weaknesses: "Nobody agrees what mid-cycle EBITDA is", range: { low: 6, high: 12, asOf: 2026, note: "quality integrated names at the top of the range" } },
      { name: "EV per tonne of capacity/resource", use: "Ranking developers and M&A comps", avoid: "Treating all tonnes alike: permitted brine differs from inferred lepidolite by 10x", strengths: "Cuts through pre-revenue accounting", weaknesses: "Ignores cost position and time-to-market", range: { low: 0, high: 0, asOf: 2026, note: "qualitative ranking anchor; calibrate to Rio/Arcadium at $6.7B" } },
      { name: "Cost-curve margin capitalization", use: "The purist's method: capitalize the structural margin between an asset's cost and the marginal producer's", avoid: "Assets whose margin exists only at peak prices", strengths: "Values what actually persists through cycles", weaknesses: "The marginal cost itself moves (DLE, lepidolite learning curves)", range: { low: 0, high: 0, asOf: 2026, note: "framework, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a lithium producer quickly: mid-cycle EBITDA at your assumed long-run LCE price, times a cycle-honest multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.2, max: 8, step: 0.2, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 14, step: 0.5, value: 8, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -3, max: 15, step: 0.5, value: 2, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats lithium as a high-beta expression of electrification with a violent inventory cycle wrapped around a clean secular trend: own the bottom of the cost curve as the core, trade the spodumene pure-plays as price beta, and respect that the marginal Chinese tonne, not the demand line, sets the price you mark to. Nobody gets paid for predicting demand (everyone agrees it doubles); the alpha is entirely in supply discipline and timing the restocking cycles.",
    debates: [
      { topic: "Is the 2026 rebound a new supercycle or another headfake?", bull: "The bust did its job: 3 years of cancelled projects and curtailments met ESS demand that broke every model to the upside, flipping 2026 to deficit (Fastmarkets/Benchmark). Deficits in a 15%-growth commodity do not resolve politely: the doubling to ~$26,000/t is the market discovering the incentive price, and new supply is 5+ years away.", bear: "The rebound IS the supply response's alarm clock: curtailed lepidolite and Australian tonnes restart within quarters at $18,000-20,000/t, African supply keeps scaling, and JPMorgan's $18,000/t Q4 2026 target embeds exactly this ceiling. 2016-18 taught the same lesson: lithium rallies recruit their own executioners, fast." },
      { topic: "Does China's ~65-70% refining share stay a chokepoint or get competed away?", bull: "Refining is capex plus process knowledge plus cheap energy: IRA credits, FEOC rules, and $10B+ of announced ex-China converters break the monopoly by 2030, and qualified Western tonnes earn a durable premium in a bifurcated market.", bear: "China's converters sit years down the learning curve with reagent, power, and scale advantages Western greenfields cannot match: most announced projects die in qualification, the premium never covers the cost gap, and the chokepoint persists exactly like it has in rare earths." },
      { topic: "DLE: cost-curve revolution or perpetual pilot plant?", bull: "~90% recovery in hours versus ~50% in 18 months of ponds, on brines from Arkansas to oilfields worldwide: Exxon and Equinor money (Smackover projects targeting 2028) is the validation, and success flattens the cost curve while unlocking US-qualified supply at scale.", bear: "Every brine chemistry is different, no DLE flowsheet has run at commercial scale for a full year, and the graveyard of mining process technologies is full of 90%-recovery pilots. First movers eat the commissioning pain; the DFS economics assume prices the swing supply may never allow." }
    ],
    cycle: {
      where: "Early upcycle after a 30-month bust: price doubled off the mid-2025 lows to ~$26,000/t (Jan 2026) as the surplus (175 kt in 2023, 141 kt in 2025 per S&P Global) flipped to deficit; the question of the next 4 quarters is how fast curtailed supply restarts and whether restocking has overshot real demand.",
      drivers: "EV sales growth (China above all), ESS installation rates, curtailment/restart decisions at marginal mines, cathode-chain inventory cycles, and the GFEX speculative bid.",
      leads: [
        "SMM and Fastmarkets lithium carbonate headline prices (free summaries)",
        "GFEX lithium carbonate futures curve: China's speculative and hedging tape",
        "China EV monthly sales (CPCA/CAAM releases, free)",
        "ASX quarterly production reports from Pilbara/MinRes/IGO: volumes, costs, restart language (free)",
        "USGS Mineral Commodity Summaries for annual supply baselines (free)"
      ]
    },
    exposure: [
      { vehicle: "Albemarle", note: "The Western integrated major: Atacama + Greenbushes JV exposure with a real balance sheet" },
      { vehicle: "SQM", note: "Purest Atacama torque; now sharing the salar with Codelco under the state JV model" },
      { vehicle: "Australian spodumene (Pilbara, MinRes, IGO class)", note: "High-beta price exposure; the first to reprice in both directions" },
      { vehicle: "Chinese integrateds (Ganfeng, Tianqi)", note: "Conversion chokepoint exposure, with governance and policy discounts attached" },
      { vehicle: "Lithium ETFs (LIT class) & developer baskets", note: "Diversified beta; developers are optionality that only funds in upcycles" }
    ],
    catalysts: [
      { when: "Quarterly (Jan/Apr/Jul/Oct)", what: "ASX production reports: costs, volumes, and restart/curtailment decisions in plain sight" },
      { when: "Monthly", what: "China EV sales and cathode operating rates: the demand pulse that moves spot" },
      { when: "2026-2028", what: "US DLE milestones: Standard Lithium/Equinor construction start (2026), Exxon Saltwerx toward 2028 production" },
      { when: "Ongoing", what: "Chile's SQM-Codelco JV implementation and any Corfo/royalty regime changes: the Atacama's political price" }
    ],
    data: [
      { series: "USGS Mineral Commodity Summaries (lithium)", source: "usgs.gov (free)", why: "Authoritative annual production, reserves, and country shares" },
      { series: "GFEX/CME lithium futures", source: "exchange sites + free quote pages", why: "The forward curve is the market's supply-discipline verdict" },
      { series: "China EV sales", source: "CPCA/CAAM monthly releases (free)", why: "The single biggest demand driver, published monthly" },
      { series: "Company quarterlies (SQM 20-F, Albemarle 10-K, ASX reports)", source: "SEC/ASX filings (free)", why: "Realized prices, costs, and volumes: the ground truth" },
      { series: "Spot LCE price summaries", source: "Fastmarkets/SMM free headlines, Trading Economics", why: "The daily tape everything marks to" }
    ],
    playbook: [
      { regime: "Recession", behavior: "EV demand slows but rarely reverses; ESS keeps growing on utility economics. Lithium equities trade like levered cyclicals anyway: expect 40%+ drawdowns and size for them." },
      { regime: "China stimulus", behavior: "The strongest upside regime: EV subsidies plus infrastructure storage plus GFEX speculation hit the same small market simultaneously (the Jan 2026 doubling had all 3)." },
      { regime: "Rates rising", behavior: "Developers die first: pre-revenue NAVs compress and funding windows shut. Producers with cash flow gain relative share of the future supply pipeline." },
      { regime: "Geopolitical rupture", behavior: "China export controls or FEOC tightening bifurcate the market: ex-China qualified tonnes reprice upward instantly; Chinese-chain-exposed converters and cathode names absorb the shock." }
    ]
  },

  players: [
    { name: "Albemarle", role: "Western integrated major", country: "US", real: true, note: "Atacama brine + 49% of Greenbushes; ~17% market share; cash cost ~$7,500/t (2025)" },
    { name: "SQM", role: "Atacama brine king", country: "CL", real: true, note: "201 kt LCE from the salar in 2024; realized price fell $30,467/t (2023) to $9,174/t (2025): the cycle in one line" },
    { name: "Ganfeng Lithium", role: "Chinese integrated giant", country: "CN", real: true, note: "Mines on 4 continents feeding China's conversion base" },
    { name: "Tianqi Lithium", role: "Chinese integrated", country: "CN", real: true, note: "Co-owner of Greenbushes: the world's best spodumene mine has a Chinese shareholder" },
    { name: "Pilbara Minerals", role: "Spodumene pure-play", country: "AU", real: true, note: "The sector's cleanest price beta; its quarterly reports are the industry's cost tape" },
    { name: "Rio Tinto (Arcadium)", role: "Diversified entrant", country: "GB", real: true, note: "Bought Arcadium for $6.7B at the 2025 lows: the counter-cyclical playbook executed" },
    { name: "CATL", role: "Customer turned swing producer", country: "CN", real: true, note: "The largest cell maker owns lepidolite mines; its 2025 mine suspension moved the world price" },
    { name: "ExxonMobil (Saltwerx)", role: "DLE challenger", country: "US", real: true, note: "Smackover brines, targeting 2028 production: oil money testing whether DLE rewrites the curve" }
  ],

  geography: [
    { country: "AU", role: "Hard-rock heartland", note: "~45% of mined supply from spodumene (Greenbushes, Pilgangoora); ships concentrate, mostly to China" },
    { country: "CL", role: "Brine superpower", note: "Atacama hosts the lowest-cost tonnes on Earth; state JV model (SQM-Codelco) now governs them" },
    { country: "CN", role: "The refining chokepoint", note: "~65-70% of chemical conversion plus lepidolite swing supply plus GFEX price discovery" },
    { country: "AR", role: "Brine growth frontier", note: "The puna's project pipeline (Rio, Ganfeng, POSCO) is the decade's biggest brine build-out" },
    { country: "US", role: "DLE and IRA reshoring", note: "Smackover DLE projects and Thacker Pass aim to build a qualified domestic chain from near zero" },
    { country: "ZW", role: "Fast-cycle African supply", note: "Zimbabwe spodumene scaled in 2 years flat: the new swing tonne, largely Chinese-financed" }
  ],

  cycles: [
    { year: 1997, title: "Atacama enters", kind: "shift", text: "SQM's brine operation undercuts every incumbent and halves the price. Lesson: in commodities, the new low-cost producer does not join the market, it resets it." },
    { year: 2018, title: "First EV bust", kind: "bust", text: "China's subsidy-fed price spike recruits an Australian spodumene wave; prices halve into 2020 and marginal miners fold. Lesson: lithium supply responds faster than bulls assume, hard rock can arrive in 3 years." },
    { year: 2022, title: "The superspike", kind: "boom", text: "Post-COVID EV demand meets underinvestment: Chinese spot tops $80,000/t and every boardroom greenlights a project at once. Lesson: the peak price is the bust's purchase order." },
    { year: 2024, title: "The great crash", kind: "bust", text: "The 2022 cohort of supply lands into destocking: ~88% collapse toward $9,000-10,000/t (mid-2025), curtailments sweep the curve, Rio buys Arcadium for $6.7B. Lesson: troughs transfer assets from the leveraged to the patient." },
    { year: 2026, title: "The whipsaw", kind: "shift", text: "Surplus (141 kt in 2025) flips to deficit; spot doubles in 2 months to ~$26,000/t by late January. Lesson: in a 15%-growth commodity, balance is a knife edge, and inventory cycles turn it into a catapult." }
  ],

  risks: [
    { name: "Swing-supply restart capping the rally", severity: 3, likelihood: 4, transmission: "Price above $18,000-20,000/t -> curtailed lepidolite and spodumene restarts within quarters -> surplus returns -> the 2026 rally repeats the 2018 script." },
    { name: "Demand-side chemistry shift", severity: 4, likelihood: 2, transmission: "Sodium-ion scaling in ESS and cheap EVs -> lithium intensity per GWh erodes at the margin -> long-dated demand forecasts (~3.7 Mt by 2030) get marked down -> incentive price falls." },
    { name: "Resource nationalism", severity: 4, likelihood: 3, transmission: "Chile-style state JV models spread (Atacama precedent) -> royalty/lease take rises toward 40% at peaks -> project returns compress -> supply arrives later and costlier everywhere." },
    { name: "China export-control weaponization", severity: 4, likelihood: 3, transmission: "Processing tech or chemical export curbs -> ex-China cathode chains scramble for qualified supply -> price bifurcation and Western converter panic-building -> misallocated capex on both sides." },
    { name: "DLE commercialization failure", severity: 3, likelihood: 3, transmission: "Smackover-class projects miss cost or recovery targets -> the flat-cost-curve thesis dies -> incentive price ratchets up -> volatility amplifies since ponds and mines stay the only supply." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Lithium is the lightest metal and the one ingredient every phone, laptop, EV, and grid battery needs. It comes from salty groundwater in South America and hard rock in Australia, and most of it gets refined in China. Because demand grows fast but new mines take many years, the price swings wildly: it fell almost 90% between 2022 and 2025, then nearly doubled again in 2 months in early 2026."] },
    L2: { title: "Intermediate", text: ["The economics: a spec-grade commodity priced off the cost curve. Brine (Atacama) and top hard rock (Greenbushes, ~$7,000/t AISC) sit at the bottom; Chinese lepidolite is the marginal tonne that sets the price. Demand (~1.8 Mt LCE in 2025) doubles by 2030 on EVs and grid storage, but supply arrives in lumps: the 2022 spike above $80,000/t built the mines that caused the 2023-2025 crash to ~$9,000-10,000/t, and those curtailments set up 2026's deficit and rebound."] },
    L3: { title: "Advanced", text: ["Analyze producers on 3 axes: cost-curve position (survival), realized-vs-spot price lag (the next 2 quarters, pre-announced: see SQM's $30,467/t to $9,174/t slide), and balance-sheet endurance at trough prices. Mid-chain, China's ~65-70% refining share is the structural chokepoint the IRA and FEOC rules are built against. Value everything on a long-run incentive price ($12,000-18,000/t), never spot: both the 2022 and 2025 tapes were lies in opposite directions."] },
    L4: { title: "Expert", text: ["Trade the inventory cycle around the secular trend: cathode-chain restocking turned a modest 2026 deficit (surplus was still 141 kt in 2025) into a 95% price move in 2 months. Watch the marginal tonne's restart math ($18,000-20,000/t), GFEX positioning, and ASX quarterly cost tapes. Live debates: supercycle vs headfake, whether ex-China conversion ever closes the cost gap, and whether DLE (Smackover, ~90% recovery, 2028 targets) flattens the curve or joins mining's pilot-plant graveyard."] },
    L5: { title: "Institutional", text: ["Allocator's frame: lithium is electrification beta with a violent commodity cycle superimposed, and the cycle, not the trend, sets entry prices. Core the bottom-quartile cost assets (Atacama, Greenbushes exposure) sized for 40%+ drawdowns; treat spodumene pure-plays as tactical beta; fund developers only in open windows; and underwrite counter-cyclically: Rio's $6.7B trough purchase of Arcadium is the template. The permanent questions are supply discipline and the marginal tonne's cost: demand doubling is consensus and therefore free."] }
  },

  quiz: [
    { q: "Battery-grade lithium carbonate's price path from late 2022 to early 2026 was roughly:", choices: ["Flat around $20,000/t", "$80,000+ down ~88% to ~$9,000-10,000, then a ~95% rebound to ~$26,000", "A steady decline to zero", "A steady rise"], answer: 1, explain: "The defining tape: the 2022 superspike built too much supply, the 2023-2025 crash curtailed it, and the 2026 deficit repriced it violently." },
    { q: "China's share of global lithium chemical refining is about:", choices: ["10%", "33%", "65-70%", "95%"], answer: 2, explain: "Mines are spread across Australia, Chile, and Argentina, but conversion concentrates in China (Wood Mackenzie, 2025): the chokepoint Western policy targets." },
    { q: "The lowest-cost lithium on Earth comes from:", choices: ["Chinese lepidolite", "Atacama brine and the Greenbushes mine (~$7,000/t class)", "Recycling", "US DLE projects"], answer: 1, explain: "Cost-curve position is the industry's entire hierarchy: these assets earned margin even at the mid-2025 trough while marginal producers shut." },
    { q: "Chinese lepidolite matters because it is:", choices: ["The highest grade ore", "The marginal swing supply whose shutdowns and restarts set the global price", "Export-banned", "Used only in ceramics"], answer: 1, explain: "It shuts near $10,000/t and restarts near $20,000/t: both tails of the price are capped by the same Chinese mica." },
    { q: "SQM's realized Atacama price fell from $30,467/t (2023) to $9,174/t (2025). This illustrates:", choices: ["Fraud", "That realized prices lag spot: contract structures pre-announce the next quarters' results", "Currency effects", "Declining ore grades"], answer: 1, explain: "Producer P&Ls follow spot with a lag in both directions: the realized-vs-spot gap is one of the sector's best forward indicators." },
    { q: "Direct lithium extraction (DLE) promises:", choices: ["Cheaper spodumene mining", "~90% recovery in hours versus ~50% over 12-18 months of evaporation ponds", "Lithium from seawater at scale today", "Elimination of refining"], answer: 1, explain: "First commercial US projects (Standard Lithium/Equinor, Exxon's Saltwerx in the Smackover) target 2028: if the economics hold, brine provinces multiply." },
    { q: "Rio Tinto's $6.7B purchase of Arcadium at the 2025 lows is a lesson in:", choices: ["Overpaying at peaks", "Counter-cyclical capital: troughs transfer assets from the leveraged to the patient", "Vertical integration failure", "Regulatory arbitrage"], answer: 1, explain: "The bust forced sales and the strongest balance sheet showed up: the classic commodity-cycle wealth transfer." },
    { q: "Demand for lithium is expected to go from ~1.8 Mt LCE (2025) to roughly:", choices: ["2 Mt by 2030", "3.7 Mt by 2030: driven by EVs plus even faster-growing grid storage", "1 Mt by 2030", "10 Mt by 2027"], answer: 1, explain: "Doubling in 5 years (Albemarle's forecast) is the consensus everyone already owns: the investment debate is entirely about supply discipline." }
  ],

  sources: [
    { name: "SQM 20-F (Atacama volumes, realized prices)", url: "https://www.stocktitan.net/sec-filings/SQM/20-f-chemical-mining-co-of-chile-inc-files-annual-report-foreign-issu-6516f7b02afb.html", feeds: "prices, volumes, Chile JV" },
    { name: "USGS Mineral Commodity Summaries: Lithium", url: "https://www.usgs.gov/centers/national-minerals-information-center/lithium-statistics-and-information", feeds: "production, reserves, country shares" },
    { name: "Investing News Network lithium market updates (price tape, forecasts)", url: "https://investingnews.com/daily/resource-investing/battery-metals-investing/lithium-investing/lithium-forecast/", feeds: "prices, supply/demand balance" },
    { name: "Fastmarkets lithium insights (Smackover DLE, supply outlook)", url: "https://www.fastmarkets.com/insights/smackover-lithium-projects/", feeds: "DLE projects, market balance" }
  ]
};
