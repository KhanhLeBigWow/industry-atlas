/* Industry Atlas - AGRICULTURE & AGRIBUSINESS (full module, research-backed)
 * Anchors: FAO gross value of primary crop production $3.0T (2023); OECD-FAO
 * Agricultural Outlook 2025-2034 (Jul 2025) projects ~$3.96T by 2034 (+14%).
 * USDA ERS: US net farm income peaked at $181.9B (2022), fell to $140.7B
 * (2024); May 2026 forecast puts 2026 at $153.4B with direct government
 * payments of $44.3B (+45.2%). USDA NASS (Aug 2025): US farm real estate
 * $4,350/acre (+4.3%), cropland $5,830/acre. Deere 10-K: FY2025 revenue
 * $45.7B / net income $5.0B vs FY2023 record $61.3B / $10.2B. Nutrien 10-K:
 * revenue $37.9B (2022) to ~$26B (2024). Bunge closed Viterra merger Jul 2025. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["agriculture"] = {
  meta: {
    id: "agriculture", name: "Agriculture & Agribusiness", sector: "real-assets", status: "full",
    tagline: "600M price-taking farms squeezed between input oligopolies and trading giants: the oldest industry, still the most political.",
    marketSize: { value: 4, unit: "$T", asOf: 2023, note: "farm-gate output: FAO puts primary crop production at $3.0T (2023), livestock adds roughly another third; the food system built on top is a multiple of both" },
    cagr: { value: 3, range: [2, 4], horizon: "2024-2034" },
    maturity: "cyclical-mature", cyclicality: 4, capitalIntensity: 4, regulation: 4, disruption: 3
  },
  newsQuery: '("farm income" OR "crop prices" OR "grain exports" OR fertilizer OR farmland OR "John Deere" OR Cargill OR USDA OR "wheat prices")',

  overview: {
    definition: "Agriculture & Agribusiness converts sunlight, soil, water, and chemistry into food, feed, fiber, and fuel: roughly $4T of farm-gate output feeding 8 billion people. The investable industry is everything wrapped around the farmer: seeds, chemicals, fertilizer, machines, trading, processing, and the land itself.",
    howItWorks: [
      "The structure is an hourglass. At the wide top: concentrated input oligopolies (4 firms dominate seeds and crop chemicals after the Bayer-Monsanto, Dow-DuPont, and ChemChina-Syngenta mergers; a handful control fertilizer; 3 or 4 build most large equipment). At the wide bottom: concentrated buyers, led by the ABCD grain majors (ADM, Bunge, Cargill, Louis Dreyfus), which by most estimates handle around 70% of internationally traded grain. At the narrow waist: some 600M farms worldwide (1.9M in the US), fragmented, undifferentiated, and price takers in both directions. Margin pools at the ends of the hourglass; risk pools in the middle.",
      "Farm economics are a commodity cost curve with weather on top. Prices are set globally (CME futures, Black Sea cash markets), so a farmer's P&L is yield times a price nobody controls, minus inputs, machinery, and land cost: and land, via cash rent, is the residual claimant that absorbs excess profits over time. The cycle is brutal: US net farm income hit a record $181.9B in 2022, fell 22.6% to $140.7B by 2024, and USDA's May 2026 forecast pegs 2026 at $153.4B, held up by $44.3B of direct government payments, up 45.2% in a year. When markets fail farmers, Washington writes checks: policy is the sector's shock absorber.",
      "Value migrated to the edges long ago, and the edges cycle too. Deere rode the boom to record FY2023 results ($61.3B revenue, $10.2B net income), then watched revenue fall to $45.7B and net income to $5.0B by FY2025 as farmers deferred purchases: a 25% top-line drawdown in 2 years. Its answer is the software story: precision spraying (See & Spray, built on the 2017 Blue River acquisition), autonomy, and a stated target of roughly 10% of revenue from recurring sources by 2030. Fertilizer is the wildest edge: Nutrien's revenue spiked to $37.9B in 2022 when war-driven potash and nitrogen prices tripled, then slid back near $26B by 2024 as prices normalized.",
      "Underneath everything sits the land: about 80% of US farm sector assets. Farmland behaves like a bond written on grain prices with a scarcity premium: US farm real estate averaged $4,350/acre in 2025, up 4.3%, and cropland hit $5,830/acre (USDA, Aug 2025), rising through 3 straight years of falling farm income. Thin turnover, strong farmer balance sheets, and institutional demand keep bids under the asset even when the income statement sags: the 1980s, when that linkage broke, remain the sector's defining trauma."
    ],
    history: [
      { era: "1900-1945", title: "Machines and molecules", text: "Tractors replace horses and Haber-Bosch (1909) synthesizes nitrogen from air: the invention that now feeds roughly half of humanity." },
      { era: "1945-1975", title: "The Green Revolution", text: "Hybrid seeds, fertilizer, and irrigation triple yields across Asia and the Americas; Borlaug's wheat wins a Nobel; food output outruns population." },
      { era: "1972-1987", title: "Boom into farm crisis", text: "Soviet grain deals ignite a land bubble; Volcker rates burst it. Farmland values collapse, thousands of US farms fail, and the Farm Credit System needs a bailout." },
      { era: "1996-2015", title: "Biotech and consolidation", text: "GMO seeds launch (now on 90%+ of US corn and soy acres), ethanol mandates tie corn to oil, and input makers merge into today's oligopoly: Bayer pays $63B for Monsanto." },
      { era: "2018-present", title: "Whiplash era", text: "Trade wars, COVID, then Ukraine: wheat limit-up, fertilizer records, record 2022 farm income at $181.9B, followed by a grinding 2024-2026 cost-price squeeze." }
    ],
    trends: [
      { title: "Precision ag and autonomy", direction: "up", text: "Cameras, GPS, and machine learning cut input use per acre; Deere, CNH, and AGCO pitch software and autonomy as the recurring-revenue escape from the equipment cycle." },
      { title: "Cost-price squeeze", direction: "down", text: "Crop prices normalized faster than input costs after 2022; farmdoc and Purdue crop budgets showed cash-rent corn losing money in 2024 and 2025, and equipment demand fell with it." },
      { title: "Consolidation at every node", direction: "shift", text: "Bunge closed its Viterra merger in July 2025, building a trader to rival Cargill and ADM; seeds, fertilizer, and equipment concentrated years earlier. The farmer's counterparties keep getting bigger." },
      { title: "Farmland financialization", direction: "up", text: "Pension funds, endowments, and REITs treat farmland as an inflation-hedging real asset: institutional ownership is still small but the marginal bid moved values up 4.3% in 2025 even as farm income fell." },
      { title: "Climate and water stress", direction: "shift", text: "Yield volatility rises, growing zones migrate, aquifers deplete, and crop insurance costs climb: weather risk is repricing from background noise to underwriting variable." }
    ],
    outlook: "Demand is the closest thing to a certainty in markets: OECD-FAO projects global agricultural production value rising 14% to roughly $3.96T by 2034, on population and protein diets. The cycle question is nearer term: row-crop economics are at or near trough, government payments are bridging the gap, and the next leg turns on stocks drawing down, a weather event, or trade flows re-sorting. Structurally, the edges keep winning: input and equipment oligopolies compound, traders monetize volatility, and land quietly outperforms the farmers standing on it."
  },

  structure: {
    suppliers: [
      { name: "Seed & crop chemistry (Bayer, Corteva, Syngenta, BASF)", note: "4 firms, post-merger, own the traits and molecules on most of the world's acres" },
      { name: "Fertilizer majors (Nutrien, Mosaic, CF, Yara, ICL)", note: "A ~$200B-class commodity market that tripled and mean-reverted in 3 years" },
      { name: "Equipment (Deere, CNH, AGCO, Kubota)", note: "The cycle's high-beta edge, now selling software and autonomy" },
      { name: "Feed, genetics & animal health (Zoetis, Genus, land-grant science)", note: "The livestock side's quiet compounders" }
    ],
    producers: [
      { name: "Row-crop farmers", note: "Corn, soy, wheat: 1.9M US farms, price takers hedging on the CME" },
      { name: "Livestock & dairy operations", note: "Margin businesses long feed grain and short protein prices" },
      { name: "Permanent-crop growers", note: "Nuts, fruit, vines: higher value per acre, higher water risk" },
      { name: "Corporate & institutional farms", note: "Brazil's listed groups and pension-backed operators: scale farming exists, mostly outside the US Midwest" }
    ],
    distributors: [
      { name: "ABCD traders + COFCO", note: "ADM, Bunge (now with Viterra), Cargill, Louis Dreyfus: an estimated ~70% of traded grain" },
      { name: "Co-ops & elevators", note: "The first handle: local basis, storage, and farmer credit" }
    ],
    customers: [
      { name: "Food processors & CPG", note: "Grain becomes brands; the margin re-rates 10x on the way to the shelf" },
      { name: "Biofuels", note: "Ethanol and renewable diesel: 30%+ of US corn and a growing share of soybean oil, tying crops to energy policy" },
      { name: "Feed & export markets", note: "China's ~100Mt/yr soybean import program is the single largest demand lever" }
    ],
    regulators: [
      { name: "USDA & the farm bill", note: "Subsidies, crop insurance, and the data monopoly (WASDE moves markets monthly)" },
      { name: "EPA & environmental regimes", note: "Pesticide registrations, water rules, biofuel blending volumes" },
      { name: "Trade policy & export bans", note: "Tariffs and embargoes re-route flows overnight: agriculture is diplomacy's favorite weapon" }
    ],
    capital: [
      { name: "Farm Credit System & ag banks", note: "Roughly $400B of system loans against land collateral" },
      { name: "Federal crop insurance", note: "Subsidized cover on roughly 500M US acres: the risk backstop that keeps credit flowing" },
      { name: "CME futures & farmland investors", note: "Price risk trades in Chicago; land trades at 3% to 5% cap rates to buyers with long horizons" }
    ]
  },

  valueChain: {
    intro: "From a patented seed to a branded box of cereal, with the farmer capturing the least along the way. The hourglass economics are the whole story: concentration at the ends, fragmentation in the middle.",
    stages: [
      { id: "inputs", name: "Seeds, chemistry & fertilizer", what: "Traits, crop protection, and the NPK commodity complex", players: "Bayer, Corteva, Syngenta, Nutrien, Mosaic, CF, Yara", valueCapture: 4,
        economics: { grossMargin: [20, 45], capitalIntensity: 4, concentration: 4 },
        linksTo: ["chemicals", "mining"],
        deeper: "Two businesses wearing one label: seeds and chemistry earn patent-protected margins on 90%+ biotech adoption, while fertilizer is pure commodity: potash and urea tripled in 2022 (Russia and Belarus supply ~40% of potash exports) and round-tripped by 2024, dragging Nutrien's revenue from $37.9B to ~$26B." },
      { id: "equipment", name: "Equipment & precision ag", what: "Tractors, combines, sprayers, and the software on them", players: "Deere, CNH, AGCO, Kubota", valueCapture: 4,
        economics: { grossMargin: [25, 35], capitalIntensity: 3, concentration: 4 },
        linksTo: ["manufacturing", "robotics"],
        deeper: "A dealer-financed cycle business trying to become a software one: Deere's FY2023-FY2025 round trip ($61.3B to $45.7B revenue) shows the beta, while See & Spray and autonomy anchor a target of ~10% recurring revenue by 2030. Used-equipment prices and dealer inventories are the tape to watch." },
      { id: "farming", name: "Farming", what: "Growing the crop: yield times price, minus everything", players: "600M farms worldwide; co-ops; Brazil's listed operators", valueCapture: 1,
        economics: { grossMargin: [10, 25], capitalIntensity: 5, concentration: 1 },
        linksTo: ["real-estate", "water"],
        deeper: "The residual claimant of the whole chain, and usually the squeezed one: price takers on outputs, list-price payers on inputs, with cash rent absorbing the good years. US net farm income fell from $181.9B (2022) to $140.7B (2024); 2026's $153.4B forecast leans on $44.3B of government payments." },
      { id: "trading", name: "Origination & trading", what: "Buying, storing, shipping, and arbitraging grain flows", players: "Cargill, ADM, Bunge-Viterra, Louis Dreyfus, COFCO", valueCapture: 3,
        economics: { grossMargin: [2, 6], capitalIntensity: 4, concentration: 4 },
        linksTo: ["shipping", "logistics"],
        deeper: "Pennies per bushel on enormous volume: the ABCDs monetize volatility, basis, and logistics, not price direction. Cargill printed a record ~$177B revenue year in FY2023 off the Ukraine dislocation, then ~$160B in FY2024 as calm returned: for traders, chaos is the commodity." },
      { id: "processing", name: "Processing & ingredients", what: "Crush, milling, sweeteners, starches, proteins", players: "ADM, Bunge, Cargill, Ingredion, Tate & Lyle", valueCapture: 3,
        economics: { grossMargin: [8, 15], capitalIntensity: 4, concentration: 4 },
        linksTo: ["food-beverage", "consumer-goods"],
        deeper: "Spread businesses: the soybean crush margin (meal plus oil minus beans) is the sector's most-watched processing P&L, lately supercharged and then hungover on renewable diesel demand for soy oil. Capacity additions chase good spreads and kill them: classic commodity processing." },
      { id: "land", name: "Farmland & finance", what: "Owning the acre and financing the operation", players: "Farm Credit System, ag banks, farmland REITs (FPI, LAND), pensions", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 5, concentration: 1 },
        linksTo: ["real-estate", "banking", "insurance"],
        deeper: "The quiet compounder: $4,350/acre average US farm real estate (+4.3% in 2025) on 3% to 5% cap rates, with ~40% of US farmland rented out. Land captures the chain's long-run economics; the 1980s proved what happens when it is bought with leverage at cycle highs." }
    ]
  },

  financials: {
    businessModel: [
      "One sector, 4 different P&Ls. Farmers: commodity price times yield minus costs, with land as the balance sheet and government payments as the put option: watch stocks-to-use ratios and crop budgets, not narratives. Input and equipment makers: oligopoly pricing into a cyclical customer: volumes swing with farm income (Deere's revenue fell 25% in 2 years) while patents and dealer networks defend margin. Traders and processors: volume and volatility businesses earning pennies per bushel or dollars per ton of crush: direction matters less than dislocation.",
      "Land is the fourth P&L and the sector's anchor tenant: roughly 80% of US farm assets, appreciating 4.3% in 2025 through an income downturn, yielding 3% to 5% cash. The whole complex leans on policy: $44.3B of forecast 2026 US government payments, subsidized crop insurance on ~500M acres, and biofuel mandates that convert energy policy into corn and soy demand. Underwrite the policy regime with the same care as the weather."
    ],
    fingerprint: { grossMargin: 22, recurringRevenue: 20, capitalIntensity: 70, pricingPower: 25, cyclicality: 75, operatingLeverage: 55 },
    lines: [
      { label: "Crop prices & stocks-to-use", note: "The master variable: WASDE's monthly balance sheet sets the sector's tone" },
      { label: "Net farm income", note: "USDA ERS forecasts (Feb/Sep/Dec): the demand signal for everything sold to farmers" },
      { label: "Input prices", note: "Fertilizer benchmarks and seed/chem pricing: the cost side of the squeeze" },
      { label: "Equipment orders & dealer inventory", note: "Deere and CNH order books lag farm income by 2 to 4 quarters" },
      { label: "Land values & cash rents", note: "USDA NASS annual survey (August): the balance-sheet check" }
    ],
    unitEconomics: {
      unit: "per acre of Midwest cash-rent corn (illustrative, 2025)",
      items: [
        { label: "Revenue", value: "~$850", note: "~200 bu/acre at ~$4.25/bu, late-2025 prices" },
        { label: "Inputs (seed, fertilizer, chem)", value: "~$350-400", note: "sticky even after fertilizer's 2022 spike unwound" },
        { label: "Cash rent", value: "~$250-300", note: "the landowner's cut: the residual claimant of good years" },
        { label: "Net margin", value: "roughly ($50) to ($150)", note: "farmdoc/Purdue budgets showed losses in 2024-2025: hence the payments" }
      ]
    }
  },

  kpiRefs: ["re-caprate", "mining-aisc"],
  kpiLocal: [
    {
      id: "ag-stocks-to-use", name: "Stocks-to-Use Ratio", industries: ["agriculture"],
      definition: "Ending inventories of a crop divided by total annual consumption: the tightness gauge for grain markets, published monthly in USDA's WASDE.",
      formula: "Ending stocks / total use, per crop year (WASDE, monthly)",
      interpretation: "The lower the ratio, the less buffer between a weather event and a price spike. Corn below ~10% historically supports strong prices; rebuilding stocks above ~15% signals the surplus that crushed 2024-2026 farm margins.",
      healthy: "Drawing down toward 10%: pricing power returns to growers", warning: "Rising past 15%: surplus regime, margin squeeze rolls through the chain" },
    {
      id: "ag-crush-margin", name: "Soybean Crush Margin", industries: ["agriculture"],
      definition: "The gross spread a processor earns turning soybeans into meal and oil.",
      formula: "(Meal value + oil value) per bushel minus soybean cost (board crush via CME futures)",
      interpretation: "The sector's cleanest processing P&L, and lately an energy-policy trade: renewable diesel demand for soy oil supercharged crush spreads before capacity build-out normalized them.",
      healthy: "Spreads above long-run averages with utilization tight", warning: "New crush capacity outrunning oil demand: spread compression" }
  ],

  health: {
    intro: "Farm health is balance-sheet depth against commodity cycles; agribusiness health is cost-curve position and exposure timing. Everyone's health depends on a policy regime that keeps writing checks.",
    pillars: [
      { name: "Balance sheet & land equity", weight: 25, metrics: "Debt-to-asset ratio, land LTVs, working capital", healthy: "Sector debt-to-assets low with land unlevered", warning: "1980s pattern: debt stacked on peak land values" },
      { name: "Margin & cost-curve position", weight: 20, metrics: "Breakeven vs futures curve, input cost trend, basis", healthy: "Breakevens under the curve with inputs hedged", warning: "Cash-rent operators underwater 2 years running" },
      { name: "Marketing & hedging discipline", weight: 20, metrics: "Share of crop forward-sold, hedge ratios, storage use", healthy: "Systematic sales into rallies", warning: "Hope as a marketing plan: selling the harvest low" },
      { name: "Policy & insurance coverage", weight: 20, metrics: "Crop insurance participation, payment dependence, farm bill status", healthy: "Insured acres with payments as bridge, not crutch", warning: "Income structurally dependent on ad hoc payments ($44.3B in 2026F)" },
      { name: "Diversification & mix", weight: 15, metrics: "Crop/livestock mix, geographic spread, off-farm income", healthy: "Multiple uncorrelated revenue engines", warning: "One crop, one buyer, one river system" }
    ],
    scoringNote: "In agriculture the fatal pattern is always the same: leverage taken against land at cycle highs. Income statements recover with the weather; broken balance sheets get auctioned."
  },

  valuation: {
    intro: "Four asset species, 4 valuation grammars: cyclical multiples for equipment and inputs, spread-normalized earnings for traders and processors, and cap rates for the land underneath.",
    methods: [
      { name: "EV / EBITDA (mid-cycle normalized)", use: "Equipment and input makers across the farm-income cycle", avoid: "Trough multiples on peak earnings: 2022-2023 numbers flattered everyone", strengths: "Standard, comparable across the complex", weaknesses: "Guessing mid-cycle is the whole job", range: { low: 8, high: 13, asOf: 2025, note: "Deere holds a premium on the precision-ag software story" } },
      { name: "Farmland cap rate / $ per acre", use: "Land, farmland REITs, row-crop operators' balance sheets", avoid: "Capitalizing peak cash rents", strengths: "Real comps: USDA prints $4,350/acre national marks annually", weaknesses: "Thin turnover; scarcity premiums defy yield math", range: { low: 3, high: 5, asOf: 2025, note: "% cap rates; Midwest prime trades at the low end" } },
      { name: "P/E on normalized crush/merchant margins", use: "ADM, Bunge, processors: earnings mean-revert with spreads", avoid: "Extrapolating dislocation years (2022's trader windfalls)", strengths: "Respects the volatility-is-the-product model", weaknesses: "Normalized spread is a moving target as capacity shifts", range: { low: 8, high: 12, asOf: 2025, note: "traders trade cheap for a reason: earnings quality is weather" } },
      { name: "Sum-of-parts for diversified agribusiness", use: "Conglomerates spanning inputs, processing, and retail", avoid: "Single-multiple laziness across unlike segments", strengths: "Matches the hourglass: each node deserves its own multiple", weaknesses: "Conglomerate discounts persist regardless", range: { low: 0, high: 0, asOf: 2025, note: "framework, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an agribusiness name quickly: mid-cycle EBITDA times a node-appropriate multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 12, step: 0.5, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 16, step: 0.5, value: 9, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 1, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays agriculture as a cycle with 4 expressions: equipment and inputs for farm-income beta, traders for volatility harvesting, land for the through-cycle compounder, and policy as the ever-present put. The 2024-2026 downturn put row-crop economics at trough with government payments bridging: the setup rewards patience in the oligopoly edges and skepticism toward anyone capitalizing peak spreads.",
    debates: [
      { topic: "Deere: software re-rating or cyclical wearing a hoodie?", bull: "Precision ag genuinely changes the model: See & Spray cuts herbicide use double digits, autonomy attacks labor scarcity, and a 10%-recurring-revenue target by 2030 converts iron into annuities: the installed base is the moat, and the trough (FY2025 revenue $45.7B) is when you buy it.", bear: "Revenue fell 25% in 2 years the moment farm income rolled: that is a cyclical's tape, not a software company's. Farmers defer everything in downturns, including subscriptions, and the multiple already prepays a transition that dealer economics may resist for a decade." },
      { topic: "Farmland: inflation-proof compounder or rate-inflated bond?", bull: "Scarce, productive, uncorrelated: values rose 4.3% in 2025 through 3 down income years, turnover is tiny, buyers are unlevered, and every food-demand curve slopes up. The 40-year track record beats most real assets with a fraction of the volatility.", bear: "A 3% cap rate is a long-duration bond wearing overalls: it priced off zero rates and record 2022 income. Cash rents lag falling farm income, payments cannot prop values forever, and the 1980s showed farmland can fall for 6 straight years once credit turns." },
      { topic: "Fertilizer: disciplined oligopoly or perpetual boom-bust?", bull: "Potash and nitrogen supply concentrates in fewer hands each cycle (Russia/Belarus ~40% of potash exports keeps a geopolitical floor under prices), new mines take a decade, and demand grinds up with acres and yields: buy the cost-curve leaders below replacement cost.", bear: "The 2022 triple and 2024 round trip is the permanent pattern: no discipline survives a price spike, Nutrien's $37.9B-to-$26B revenue ride proves the beta, and every windfall funds the capacity that kills the next cycle." }
    ],
    cycle: {
      where: "Trough zone for row-crop economics: stocks rebuilt, budgets negative for cash-rent operators in 2024-2025, equipment orders down, and $44.3B of forecast 2026 US government payments doing the bridging: while land values, up 4.3%, insist the downturn is cyclical, not structural.",
      drivers: "Weather (the only true exogenous variable), stocks-to-use ratios, Chinese import demand, biofuel policy, input costs, and the farm bill.",
      leads: [
        "WASDE monthly supply/demand balances (USDA, free, ~12th of the month)",
        "USDA ERS net farm income forecasts (Feb/Sep/Dec, free)",
        "Prospective Plantings (late March) and June 30 Acreage reports: the acreage battles",
        "Equipment dealer inventories and used-combine prices: the farm capex thermometer",
        "CONAB's Brazil crop reports: the Southern Hemisphere counterweight (free)"
      ]
    },
    exposure: [
      { vehicle: "Deere / CNH / AGCO", note: "Farm-income beta plus the precision-ag optionality premium" },
      { vehicle: "Corteva / Bayer / Syngenta-adjacent", note: "Seed and chemistry: the patent-protected node" },
      { vehicle: "Nutrien / Mosaic / CF", note: "Fertilizer torque: cost-curve position is the whole thesis" },
      { vehicle: "ADM / Bunge", note: "Volatility harvesters: cheap multiples, weather-quality earnings" },
      { vehicle: "Farmland REITs (FPI, LAND) & direct land", note: "The through-cycle compounder at 3% to 5% cap rates" }
    ],
    catalysts: [
      { when: "Monthly (~12th)", what: "WASDE: the balance-sheet print that moves every ag ticker" },
      { when: "Late March / June 30", what: "Prospective Plantings and Acreage: the corn-vs-soy acreage verdict" },
      { when: "Feb / Sep / Dec", what: "USDA ERS farm income forecasts: the demand signal for inputs and iron" },
      { when: "Farm bill and trade actions", what: "Payment regimes, biofuel volumes, and tariff rounds reprice whole nodes overnight" }
    ],
    data: [
      { series: "WASDE & NASS crop reports", source: "usda.gov (free)", why: "The primary tape: supply, demand, stocks" },
      { series: "ERS farm income & wealth statistics", source: "ers.usda.gov (free)", why: "Sector P&L and balance sheet, 3 forecast vintages a year" },
      { series: "NASS Land Values summary (August)", source: "nass.usda.gov (free)", why: "The annual mark on the sector's collateral" },
      { series: "CONAB & ABIOVE Brazil data", source: "gov.br / abiove.org.br (free)", why: "Brazil is the swing producer; its safrinha sets corn's floor" },
      { series: "CFTC Commitments of Traders", source: "cftc.gov (free)", why: "Positioning in corn, soy, wheat futures: the sentiment gauge" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Food demand barely blinks but farm capex freezes: equipment de-rates first and hardest; staples-linked processors hold; land barely marks down. Rotate toward the annuity nodes." },
      { regime: "Inflation / commodity boom", behavior: "The sector's home game: crop prices lead, farm income surges, equipment and fertilizer earn windfalls with a 2-quarter lag. Sell the edges into year 2: mean reversion is undefeated." },
      { regime: "Rates rising", behavior: "Farmland cap-rate math tightens and the Farm Credit channel slows; watch land values, the collateral under ~$400B of system loans. The 1980s transmission ran exactly this route." },
      { regime: "Trade war / export ban", behavior: "Flows re-route, basis blows out, and traders feast while origin farmers eat the discount: US soy learned this in 2018 when China tariffs hit. Own the logistics, hedge the origin." }
    ]
  },

  players: [
    { name: "Cargill", role: "The private giant", country: "US", real: true, note: "America's largest private company: ~$160B revenue (FY2024) after a record ~$177B war-dislocation year" },
    { name: "ADM", role: "Trader-processor", country: "US", real: true, note: "Origination plus crush plus nutrition: the listed ABCD benchmark" },
    { name: "Bunge Global", role: "Trader-processor, newly enlarged", country: "US", real: true, note: "Closed the Viterra merger July 2025: built to rival Cargill and ADM in grain flows" },
    { name: "Louis Dreyfus", role: "The 4th ABCD", country: "NL", real: true, note: "170+ years of family-held grain trading; ADQ of Abu Dhabi now holds a stake" },
    { name: "Deere & Company", role: "Equipment and precision-ag leader", country: "US", real: true, note: "FY2025: $45.7B revenue, $5.0B net income, down from FY2023 records; the sector's software story" },
    { name: "Nutrien", role: "Fertilizer and farm retail", country: "CA", real: true, note: "World's largest potash producer: revenue rode $37.9B (2022) down to ~$26B (2024)" },
    { name: "Bayer Crop Science / Corteva", role: "Seed & chemistry duopoly core", country: "DE", real: true, note: "The Monsanto and DowDuPont heirs: traits on 90%+ of US corn and soy acres" },
    { name: "COFCO International", role: "China's state trader", country: "CN", real: true, note: "Beijing's food-security arm, built to reduce dependence on the ABCDs" }
  ],

  geography: [
    { country: "US", role: "Breadbasket + agribusiness HQ", note: "Corn Belt yields, $4,350/acre land, and the USDA data machine the world trades on" },
    { country: "BR", role: "The swing producer", note: "World's largest soybean exporter; the safrinha corn crop resets global balances every year" },
    { country: "CN", role: "Largest importer", note: "~100Mt/yr of soybean imports and state stockpiles: the demand side's single biggest lever" },
    { country: "RU", role: "Wheat superpower", note: "World's top wheat exporter (~50Mt/yr) and, with Belarus, ~40% of potash exports: food as statecraft" },
    { country: "UA", role: "Contested breadbasket", note: "Sunflower, corn, wheat: the 2022 invasion showed how fast Black Sea flows reprice the world" },
    { country: "IN", role: "The billion-farmer question", note: "Largest farm population on earth; rice and wheat export bans ripple through Asia's food security" }
  ],

  cycles: [
    { year: 1973, title: "The great grain robbery", kind: "boom", text: "Soviet buyers quietly corner US wheat; prices triple and a decade-long farm boom ignites. Lesson: in opaque physical markets, information asymmetry IS the trade." },
    { year: 1985, title: "The farm crisis", kind: "bust", text: "Volcker rates plus collapsed exports crush the land bubble: farmland values fall for years, thousands of farms fail, the Farm Credit System needs rescue. Lesson: leverage against land at cycle highs is the sector's one unforgivable sin." },
    { year: 2008, title: "The food price crisis", kind: "boom", text: "Oil at $147, ethanol mandates, and thin stocks send grains vertical; export bans cascade across 30+ countries. Lesson: when stocks-to-use gets thin, food and energy become one trade." },
    { year: 2012, title: "The drought peak", kind: "shift", text: "The worst US drought in decades puts corn above $8/bu; record incomes follow, then 6 lean years as supply responds. Lesson: the cure for high crop prices is exactly one good growing season." },
    { year: 2022, title: "The Ukraine shock", kind: "boom", text: "War closes the Black Sea: wheat limit-up, fertilizer triples, US net farm income prints a record $181.9B, and traders feast. By 2024 income is down 22.6% and budgets are negative. Lesson: windfalls in agriculture are loans from the mean, repaid within 2 harvests." }
  ],

  risks: [
    { name: "Weather and climate volatility", severity: 4, likelihood: 5, transmission: "Drought or flood in a major origin -> yield shock -> price spike and insurance losses -> input demand whipsaws the following season." },
    { name: "Trade policy and export bans", severity: 4, likelihood: 4, transmission: "Tariff round or embargo -> flows re-route and origin basis collapses -> farm income hit -> government payments and acreage shifts follow (the 2018 China soy template)." },
    { name: "Farmland value correction", severity: 4, likelihood: 2, transmission: "Sustained low income + higher rates -> cash rents and land bids fall -> collateral under ~$400B of farm credit erodes -> credit contraction amplifies the downturn (the 1980s route)." },
    { name: "Input oligopoly cost squeeze", severity: 3, likelihood: 4, transmission: "Concentrated seed, chemical, and fertilizer pricing holds while crop prices fall -> farmer margins compress first and deepest -> equipment and land spending freeze." },
    { name: "Biofuel policy reversal", severity: 3, likelihood: 3, transmission: "Blending mandates or credits cut -> 30%+ of US corn demand and the soy-oil crush premium reprice -> acreage value and processing capacity strand." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Farming is the world's oldest industry and still one of its hardest businesses. Hundreds of millions of farms grow crops whose prices they cannot control, buying seeds, fertilizer, and machines from a handful of giant companies and selling grain to another handful of giant traders. Most of the investable money is made around the farmer: in the inputs, the machines, the trading, and the land itself, which quietly rises in value across decades."] },
    L2: { title: "Intermediate", text: ["The shape to remember is an hourglass: concentrated input makers on top (4 firms dominate seeds and chemicals; Deere leads equipment), 600M fragmented price-taking farms in the middle, and 4 big traders (the ABCDs) at the bottom moving ~70% of traded grain. Farm income swings define the cycle: the US went from a record $181.9B (2022) to $140.7B (2024), and Deere's revenue fell 25% right behind it. Land is the anchor: $4,350/acre on average, up 4.3% in 2025 even as incomes fell."] },
    L3: { title: "Advanced", text: ["Analyze by node, not by sector. Farmers: breakevens vs the futures curve and stocks-to-use ratios (WASDE monthly). Equipment and inputs: farm-income beta with a 2-to-4-quarter lag, oligopoly margins, dealer inventories as the tell. Traders and processors: normalized spreads (board crush), where volatility, not price level, drives earnings. Land: cap rates of 3% to 5% against cash rents that lag income both ways. And always underwrite policy: $44.3B of forecast 2026 US payments and crop insurance on ~500M acres are load-bearing structures, not footnotes."] },
    L4: { title: "Expert", text: ["Trade the calendar: WASDE around the 12th, Prospective Plantings in late March, Acreage on June 30, ERS income forecasts in Feb/Sep/Dec, CONAB in between. The live debates: whether Deere's precision-ag annuity deserves a software multiple through an iron downturn, whether 3% farmland cap rates survive a higher-rate decade, and whether fertilizer's geopolitical supply concentration finally imposes discipline on a serially undisciplined market. Respect the 2-harvest rule: every ag windfall funds the supply response that ends it."] },
    L5: { title: "Institutional", text: ["Allocator's frame: agriculture is a barbell of the world's most defensive demand and its most volatile supply. Core the compounding edges: land at honest cap rates, seed and chemistry patents, equipment installed bases: and rent the cyclical torque in fertilizer and traders around dislocations. Policy is the hidden counterparty in every position: payments, insurance, mandates, and export politics set floors and ceilings that models built on free markets will miss. The sector's history says the same thing every generation: income statements are weather, balance sheets are destiny."] }
  },

  quiz: [
    { q: "US net farm income went from its 2022 record to 2024 at roughly:", choices: ["$80B to $60B", "$181.9B to $140.7B: down 22.6% from the peak", "$300B to $250B", "It rose"], answer: 1, explain: "The post-Ukraine windfall mean-reverted within 2 harvests; by 2026 USDA forecast $153.4B, propped by $44.3B of government payments." },
    { q: "The ABCD grain majors are:", choices: ["Seed companies", "Farm lenders", "ADM, Bunge, Cargill, Louis Dreyfus: traders moving an estimated ~70% of traded grain", "Equipment makers"], answer: 2, explain: "They earn pennies per bushel on volume and volatility: Cargill's record ~$177B revenue year came from the 2022 dislocation, not price direction." },
    { q: "Deere's FY2023-to-FY2025 revenue path was:", choices: ["$61.3B down to $45.7B: a 25% drawdown as farm income rolled", "Flat", "Up 30% on software", "Down 5%"], answer: 0, explain: "Equipment is farm-income beta with a lag: the precision-ag and ~10%-recurring-revenue story is the bet that the next cycle looks different." },
    { q: "In 2025, US farmland values:", choices: ["Crashed with farm income", "Rose 4.3% to $4,350/acre despite 3 down income years", "Were flat", "Are not tracked"], answer: 1, explain: "Thin turnover, unlevered buyers, and institutional demand keep bids under land: the collateral held even as the income statement sagged (USDA NASS, Aug 2025)." },
    { q: "Fertilizer prices tripled in 2022 chiefly because:", choices: ["A demand surge from EVs", "Crop failures", "A CME glitch", "Russia's invasion: Russia and Belarus supply ~40% of potash exports, and gas-linked nitrogen spiked"], answer: 3, explain: "Nutrien's revenue rode the wave from $37.9B (2022) back to ~$26B (2024): fertilizer is the chain's purest boom-bust node." },
    { q: "The farmer's structural position in the value chain is:", choices: ["Price setter", "Monopolist", "Price taker on both sides: oligopoly inputs, oligopsony buyers, with cash rent claiming the good years", "Subsidy-free"], answer: 2, explain: "The hourglass squeezes the middle: which is why margin lives at the edges and policy keeps writing checks to the waist." },
    { q: "Stocks-to-use matters because:", choices: ["It sets land taxes", "It measures the buffer between a weather shock and a price spike: thin stocks made 2008 and 2022 explosive", "It is a farm labor metric", "Regulators require it"], answer: 1, explain: "Corn below ~10% supports prices; rebuilding past ~15% signals the surplus regime that crushed 2024-2026 margins." },
    { q: "Government payments in USDA's 2026 forecast run:", choices: ["$44.3B, up 45.2%: the sector's shock absorber at work", "Zero", "$5B", "$200B"], answer: 0, explain: "When markets fail farmers, policy bridges: payments, subsidized insurance on ~500M acres, and biofuel mandates are load-bearing, not decorative." }
  ],

  sources: [
    { name: "USDA ERS Farm Sector Income & Finances (May 2026 forecast)", url: "https://www.ers.usda.gov/topics/farm-economy/farm-sector-income-finances/farm-sector-income-forecast", feeds: "net farm income, government payments" },
    { name: "USDA NASS Land Values 2025 Summary (Aug 2025)", url: "https://www.nass.usda.gov/Publications/Todays_Reports/reports/land0825.pdf", feeds: "farmland and cropland values" },
    { name: "OECD-FAO Agricultural Outlook 2025-2034 (Jul 2025)", url: "https://www.oecd.org/en/publications/2025/07/oecd-fao-agricultural-outlook-2025-2034_3eb15914.html", feeds: "production value, demand projections" },
    { name: "Deere & Company FY2025 results / 10-K (Nov 2025)", url: "https://investor.deere.com", feeds: "equipment cycle, precision ag" }
  ]
};
