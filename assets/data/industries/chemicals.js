/* Industry Atlas - CHEMICALS (full module, research-backed)
 * Anchors: global chemical sales ~$6T with China ~45% of it (Cefic Facts & Figures 2025);
 * Europe's global share fell 21% to 13% 2009-2024 and ~37M tons (~9%) of European capacity
 * was permanently closed 2024-2025, ~10 crackers shut or slated 2022-2027, EU gas ~2.5x US
 * (S&P Global, SCI/Cefic 2026); global ethylene capacity grew ~40M tons 2020-2025, ~70% of it
 * in China, vs ~27M tons of demand growth (Wood Mackenzie 2025); China C2 capacity ~121% above
 * domestic demand in 2025 (ICIS, Jan 2025); BASF FY2024 sales EUR 65.3B, EBITDA before special
 * items EUR 7.9B; Dow FY2024 sales $43.0B, operating EBITDA $2.6B, 3 European asset shutdowns
 * announced 2025; LyondellBasell FY2024 revenue $35.1B; Sinopec chemicals segment posted a
 * RMB (14.6B) operating loss in 2025. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["chemicals"] = {
  meta: {
    id: "chemicals", name: "Chemicals", sector: "materials", status: "full",
    tagline: "The invisible ~$6T industry inside every manufactured thing, living through its worst overcapacity cycle since the 1980s.",
    marketSize: { value: 6, unit: "$T", asOf: 2024, note: "global chemical sales; China alone is ~45% of them (Cefic). Europe's share halved from 21% to 13% since 2009" },
    cagr: { value: 3.5, range: [2, 5], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 4, capitalIntensity: 5, regulation: 4, disruption: 3
  },
  newsQuery: '(BASF OR "Dow Chemical" OR LyondellBasell OR petrochemical OR "chemical industry" OR ethylene OR "specialty chemicals" OR "chemical plant")',

  overview: {
    definition: "The chemical industry converts hydrocarbons, minerals, and air into the molecules everything else is made from: plastics, fertilizers, coatings, adhesives, solvents, gases, and 70,000 other products. It is the upstream of every downstream: ~96% of manufactured goods touch chemistry somewhere.",
    howItWorks: [
      "The industry splits into two economic species wearing one SIC code. Commodity chemicals (ethylene, propylene, methanol, chlorine, ammonia and their polymer children) are capacity businesses: identical molecules, price set by the marginal producer, profit determined by where your plant sits on the global cost curve. Specialty chemicals (catalysts, electronic chemicals, flavors, coatings, adhesives) are formulation businesses: sold on performance in the customer's process, priced on value, defended by qualification switching costs. Commodity margins swing from 25% to negative; specialties grind out 20%+ EBITDA with a fraction of the capital.",
      "Commodity economics start with feedstock. A steam cracker eats naphtha (an oil product) or ethane (a gas liquid) and emits ethylene; whoever has the cheapest carbon wins. The US shale basins and the Middle East crack ethane at a fraction of European naphtha costs, and with EU natural gas averaging ~2.5x US prices in 2025, Europe's crackers became the world's marginal, money-losing capacity. That single spread explains most of the industry's current geography of pain.",
      "Scale is the other law. World-scale plants cost $1B to $10B+ (a full refinery-to-chemicals complex can top $20B), run for 40 years, and reward integration: BASF's Verbund model pipes one unit's byproduct into the next unit's feed across a 10 km site, squeezing out logistics and energy costs no standalone plant can match. The catch is operating leverage: these plants only make money run hard, so in a glut everyone keeps producing, which deepens the glut. That is precisely today's condition: global ethylene capacity grew ~40M tons from 2020 to 2025, ~70% of it built in China, against only ~27M tons of demand growth.",
      "Demand is GDP with a multiplier and a lag: chemicals are bought by manufacturers, not consumers, so orders swing with industrial production plus an inventory whipsaw (the 2023-2024 destocking was the worst in decades). The current cycle's brutal math: China built capacity for self-sufficiency (its C2 capacity in 2025 stands ~121% above domestic demand), Europe is rationalizing (~37M tons, roughly 9% of its capacity, permanently closed in 2024-2025), and even Sinopec's chemicals arm lost RMB (14.6B) at the operating line in 2025. Consensus does not expect operating rates and margins to normalize before 2028."
    ],
    history: [
      { era: "1860-1940", title: "Synthesis age", text: "German dye houses (Bayer, BASF, Hoechst) invent industrial R&D; Haber-Bosch ammonia (1913) feeds the world and rewrites geopolitics." },
      { era: "1945-1973", title: "Petrochemical boom", text: "Oil replaces coal as the feedstock; plastics go mass-market; US and European majors build the modern cracker economy on cheap crude." },
      { era: "1973-1990", title: "Oil shocks and restructuring", text: "Feedstock repricing ends the golden age; overbuilt commodity capacity forces the first great rationalization and the specialty-vs-commodity split." },
      { era: "1990-2015", title: "Globalization and shale", text: "Middle East ethane plants and Chinese demand pull the industry east; post-2010 US shale gas hands North America a feedstock windfall and a cracker construction boom." },
      { era: "2015-present", title: "China's capacity supercycle", text: "Mega-mergers (Dow-DuPont, ChemChina-Syngenta) consolidate the West while China builds ~70% of the world's new ethylene capacity; the 2022 energy shock then breaks Europe's cost position, triggering the current shakeout." }
    ],
    trends: [
      { title: "European rationalization", direction: "down", text: "~37M tons (~9% of European capacity) permanently closed 2024-2025; ~10 crackers shut or slated 2022-2027. Dow alone is closing its Boehlen cracker, Schkopau chlor-alkali assets, and a UK siloxanes plant; LyondellBasell put European assets under strategic review." },
      { title: "China overcapacity", direction: "down", text: "C2 capacity ~121% above domestic demand (2025); polypropylene exports jumped from 1.3M tons (2023) to 2.4M tons (2024). China flipped from the industry's demand sink to its supply overhang." },
      { title: "Specialty premium", direction: "up", text: "Capital rotates from cyclical volume to formulation moats: electronic chemicals, adhesives, and industrial gases command 2x the multiples of commodity peers, and portfolio carve-outs feed a steady M&A pipeline." },
      { title: "Decarbonization economics", direction: "shift", text: "EU carbon pricing (ETS, CBAM) adds cost to exactly the plants already losing on gas; green ammonia, bio-feedstocks, and chemical recycling are real but sub-scale, so carbon is currently a regional tax, not yet a technology race winner." },
      { title: "Supply-side reform 2.0", direction: "shift", text: "Beijing signaled permit curbs on new ethylene capacity from 2026 as the glut turns Chinese producers loss-making too; whether it enforces them is the single biggest variable in the global cycle." }
    ],
    outlook: "A trough that will be measured in years, not quarters. The bull case rests on capacity discipline: Europe's closures are permanent, China's new-build pipeline thins after 2026, and demand compounds at GDP-plus, so operating rates grind back toward the high 80s by 2027-2028 and spreads mean-revert violently off a low base. The bear case is that China keeps building for strategic self-sufficiency regardless of returns, exporting deflation indefinitely. Either way the industry that emerges is barbelled: feedstock-advantaged commodity producers (US Gulf Coast, Middle East) plus specialty formulators, with the unadvantaged middle, above all Europe's naphtha crackers, structurally gone."
  },

  structure: {
    suppliers: [
      { name: "Oil, gas & NGL producers", note: "Naphtha, ethane, LPG, methane: feedstock is 50-70% of a commodity chemical's cost" },
      { name: "Utilities & power", note: "Crackers and chlor-alkali are energy hogs; EU gas at ~2.5x US broke a continent's cost position" },
      { name: "Catalyst & licensor houses (UOP, Johnson Matthey, Clariant)", note: "Process technology and catalysts: small line item, total leverage" },
      { name: "EPC & equipment (Technip, Linde Engineering)", note: "The $10B-plant construction complex; capex cycles start here" }
    ],
    producers: [
      { name: "Diversified majors (BASF, Dow, SABIC)", note: "BASF: EUR 65.3B sales 2024; Dow: $43.0B; integrated commodity-to-specialty portfolios" },
      { name: "Commodity petrochemical pure-plays (LyondellBasell, Sinopec chems, Braskem)", note: "Cost-curve businesses; LYB $35.1B revenue 2024, Sinopec chems loss-making 2025" },
      { name: "Specialty houses (Shin-Etsu, Ecolab, Sika, Givaudan class)", note: "Formulation, qualification moats, 20%+ EBITDA margins" },
      { name: "Industrial gases (Linde, Air Liquide, Air Products)", note: "An oligopoly annuity hiding inside the sector: 15-20 year take-or-pay contracts" }
    ],
    distributors: [
      { name: "Chemical distributors (Brenntag, IMCD, Univar)", note: "Blend, repack, and deliver to the long tail of small buyers; asset-light margin on complexity" }
    ],
    customers: [
      { name: "Packaging & consumer goods", note: "The largest polymer sink: films, bottles, containers" },
      { name: "Construction & automotive", note: "PVC, insulation, coatings, adhesives, lightweight composites: the cyclical demand core" },
      { name: "Agriculture", note: "Fertilizers and crop protection: a parallel cycle keyed to crop prices" },
      { name: "Electronics & pharma", note: "Ultra-pure specialty demand: small tons, premium prices, brutal qualification" }
    ],
    regulators: [
      { name: "EPA / ECHA (REACH)", note: "Registration, restriction, and liability; PFAS is the live multi-decade battle" },
      { name: "EU ETS & CBAM", note: "Carbon pricing on energy-intensive production; a structural cost wedge vs the US and Asia" },
      { name: "Process safety regimes (OSHA PSM, Seveso)", note: "One Bhopal rewrote the industry's license to operate" }
    ],
    capital: [
      { name: "Investment-grade bond markets", note: "Long-lived assets funded with long-dated debt; ratings discipline capex at the top of cycles" },
      { name: "Private equity", note: "Carve-out machine: specialty units pried out of conglomerates at 10-14x EBITDA" },
      { name: "State capital (Sinopec, SABIC/Aramco, ADNOC)", note: "Builds for strategy, not returns: the reason capacity discipline keeps failing" }
    ]
  },

  valueChain: {
    intro: "From a molecule of ethane to a qualified adhesive in an iPhone: value capture rises as you move from tons to formulations. The cost curve rules the upstream; switching costs rule the downstream.",
    stages: [
      { id: "feedstock", name: "Feedstock & energy", what: "Naphtha, ethane, LPG, methane, minerals, power", players: "Oil majors, NGL producers, utilities", valueCapture: 3,
        economics: { grossMargin: [20, 40], capitalIntensity: 5, concentration: 3 },
        linksTo: ["oil-gas", "mining"],
        deeper: "Feedstock is 50-70% of commodity chemical cost, which makes the chemical industry a derivative trade on regional energy spreads. US ethane and Middle East gas are structurally advantaged; European naphtha plus ~2.5x US gas prices is the losing hand the 2022 energy shock exposed permanently." },
      { id: "base-chems", name: "Base petrochemicals", what: "Crackers and reformers: ethylene, propylene, aromatics, methanol, ammonia, chlorine", players: "Dow, LyondellBasell, SABIC, Sinopec, ExxonMobil Chemical", valueCapture: 2,
        economics: { grossMargin: [0, 20], capitalIntensity: 5, concentration: 3 },
        linksTo: ["oil-gas", "manufacturing"],
        deeper: "The cycle's epicenter. World-scale crackers cost $1B-5B, run 40 years, and price off the marginal producer, so a capacity glut crushes everyone: ~40M tons of ethylene capacity added 2020-2025 against ~27M tons of demand growth. Operating rates, not demand, are the number to watch." },
      { id: "polymers", name: "Intermediates & polymers", what: "PE, PP, PVC, PET, styrenics, polyurethanes and their intermediates", players: "The same majors plus Braskem, Formosa, Borealis", valueCapture: 3,
        economics: { grossMargin: [10, 25], capitalIntensity: 4, concentration: 3 },
        linksTo: ["packaging", "automotive", "construction"],
        deeper: "Where tons become products: 400M+ tons/year of plastics. Margins ride the polymer-minus-monomer spread, and China's export flip (PP exports up from 1.3M to 2.4M tons in one year) means the marginal ton now travels. Recycling mandates and plastic-waste politics are this stage's slow-burn re-rating risk." },
      { id: "specialties", name: "Specialty chemicals", what: "Catalysts, coatings, adhesives, electronic chemicals, flavors & fragrances, lubricant additives", players: "Shin-Etsu, Sika, Ecolab, Givaudan, PPG, DuPont", valueCapture: 5,
        economics: { grossMargin: [35, 50], capitalIntensity: 3, concentration: 4 },
        linksTo: ["semiconductors", "pharma", "consumer-goods"],
        deeper: "The crown jewels: products sold on performance in the customer's process, qualified over years, and nearly impossible to switch out for a 5% price cut (a $0.50 photoresist chemical gates a $10,000 wafer). Pricing power, R&D moats, and 2x commodity multiples: the reason every conglomerate now markets itself as 'specialty'." },
      { id: "gases-agchem", name: "Industrial gases & agrochemicals", what: "Oxygen, nitrogen, hydrogen on-site; fertilizers and crop protection", players: "Linde, Air Liquide, Air Products; Nutrien, Yara, Corteva, Bayer", valueCapture: 4,
        economics: { grossMargin: [25, 45], capitalIntensity: 4, concentration: 4 },
        linksTo: ["agriculture", "hydrogen", "food-beverage"],
        deeper: "Two parallel kingdoms. Industrial gases are the sector's best business: a 3-player oligopoly selling air through 15-20 year take-or-pay contracts with energy pass-through, compounding through every cycle. Agrochemicals run on their own crop-price clock and carry the sector's litigation tail (glyphosate)." },
      { id: "distribution", name: "Distribution & formulation services", what: "Blending, repackaging, logistics, technical service for the long tail", players: "Brenntag, IMCD, Univar, regional blenders", valueCapture: 3,
        economics: { grossMargin: [20, 30], capitalIntensity: 2, concentration: 3 },
        linksTo: ["logistics", "manufacturing"],
        deeper: "Producers want to ship trainloads; a mid-size coatings plant wants 3 drums and advice. Distributors arbitrage that gap, asset-light, and consolidate a fragmented global market: less cyclical than their suppliers because their margin is a service fee on flow, not a spread on price." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 2 different P&Ls sharing a ticker page. Commodity producers: revenue = volume x price, where price is set by the global cost curve and volume by operating rates; the income statement is a leveraged bet on spreads (product price minus feedstock cost), so EBITDA can double or vanish inside 18 months. Watch spreads, utilization, and inventory swings, not revenue. Specialty producers: price-on-value formulations with 20%+ EBITDA margins, low capital intensity, and volumes that track customer production runs; watch volume-vs-price mix, R&D vintage, and qualification wins. The industrial gas oligopoly is a third thing entirely: contracted annuities with energy pass-through that deserve infrastructure multiples.",
      "The current cycle shows both faces. In FY2024 BASF held EBITDA before special items at EUR 7.9B on EUR 65.3B of sales largely thanks to its downstream businesses, while pure commodity exposure bled: Dow earned just $2.6B of operating EBITDA on $43.0B of sales, LyondellBasell's EBITDA fell to $4.3B ex items, and Sinopec's chemical segment ran a RMB (14.6B) operating loss in 2025. Balance sheets are built for this: investment-grade leverage, countercyclical capex discipline, and dividends defended to the last (sometimes past the point of prudence, as Dow's 2025 dividend cut showed)."
    ],
    fingerprint: { grossMargin: 25, recurringRevenue: 35, capitalIntensity: 80, pricingPower: 40, cyclicality: 75, operatingLeverage: 70 },
    lines: [
      { label: "Volumes vs price/mix", note: "The first split in every chemicals print: real demand vs cycle pricing" },
      { label: "Spreads (product minus feedstock)", note: "The commodity earnings engine: ethylene-naphtha, PE-ethane, urea-gas" },
      { label: "Operating rates", note: "Below ~85% utilization, commodity margins compress toward cash cost; the glut gauge" },
      { label: "Specialty mix & margin", note: "The de-cyclicalization story every major is selling; test it in downturns" },
      { label: "Capex & turnarounds", note: "Maintenance is non-negotiable; growth capex at cycle tops is the sector's classic sin" }
    ],
    unitEconomics: {
      unit: "per ton of ethylene (illustrative, 2024-2025)",
      items: [
        { label: "US ethane cracker cash cost", value: "~$250-350", note: "the shale advantage: bottom of the global cost curve" },
        { label: "European naphtha cracker cash cost", value: "~$700-900", note: "gas at ~2.5x US prices: the marginal, loss-making ton" },
        { label: "Asia spot ethylene price", value: "~$800-900", note: "set by the marginal producer; Europe earns roughly nothing at these levels" },
        { label: "Specialty conversion downstream", value: "35-50% gross margin", note: "the same carbon, formulated and qualified, escapes the cost curve entirely" }
      ]
    }
  },

  kpiRefs: ["mining-aisc", "retail-inventory-turns"],
  kpiLocal: [
    {
      id: "chem-spread", name: "Product Spread", industries: ["chemicals"],
      definition: "The gap between a chemical's selling price and its feedstock cost: the commodity industry's gross margin in one number.",
      formula: "Spread = Product price (e.g. ethylene or polyethylene) minus feedstock cost (naphtha, ethane, gas), per ton",
      interpretation: "Spreads, not volumes, drive commodity chemical earnings: a $100/ton spread move on a 10M ton system is $1B of EBITDA. Regional spreads diverge with energy: US ethane crackers earned positive spreads through the entire 2023-2025 trough while European naphtha spreads sat near or below zero.",
      healthy: "Spreads above reinvestment economics (roughly $400+/ton ethylene-naphtha)", warning: "Spreads at or below cash cost for the marginal producer: closures follow"
    },
    {
      id: "chem-operating-rate", name: "Operating Rate (Utilization)", industries: ["chemicals"],
      definition: "Actual production as a share of nameplate capacity, industry-wide or by plant: the supply-demand balance made visible.",
      formula: "Operating rate = Production / Effective capacity",
      interpretation: "The cycle clock. Above ~90% utilization, producers regain pricing power and spreads expand; below ~85%, the marginal ton chases any buyer and margins compress toward cash cost. Global ethylene rates fell into the low 80s during the 2023-2025 glut, and consensus puts normalization no earlier than 2027-2028.",
      healthy: "Above 88-90% and rising", warning: "Below 85% with new capacity still commissioning"
    }
  ],

  health: {
    intro: "Commodity health is cost-curve position and balance-sheet stamina; specialty health is pricing power and qualification share; everyone's health is process safety and capital discipline at the cycle top.",
    pillars: [
      { name: "Cost-curve position", weight: 30, metrics: "Feedstock slate (ethane vs naphtha), energy contracts, integration depth", healthy: "First-quartile cash costs (US Gulf, Middle East)", warning: "Marginal-producer economics (European naphtha, merchant power)" },
      { name: "Portfolio mix", weight: 20, metrics: "Specialty share of EBITDA, contract vs spot exposure", healthy: "Majority of profit from priced-on-value products", warning: "Commodity spread exposure marketed as 'specialty'" },
      { name: "Balance sheet & capital discipline", weight: 20, metrics: "Net debt/EBITDA through-cycle, capex timing, dividend cover", healthy: "Leverage sized for trough EBITDA; countercyclical capex", warning: "Peak-cycle megaprojects; dividends funded with debt (the Dow 2025 lesson)" },
      { name: "Operations & safety", weight: 15, metrics: "Process safety incidents, plant reliability, turnaround execution", healthy: "Top-quartile reliability, clean safety record", warning: "Recurring incidents: in chemicals, safety failures are balance-sheet events" },
      { name: "Regulatory & carbon position", weight: 15, metrics: "Carbon cost exposure, PFAS/litigation tail, permitting standing", healthy: "Low-carbon footprint or pass-through pricing", warning: "EU ETS exposure without abatement path; open-ended liability chains" }
    ],
    scoringNote: "In commodity chemicals the cost curve is destiny: a first-quartile plant survives any cycle, a fourth-quartile plant is an option on the spread. Score specialty franchises on a different sheet entirely."
  },

  valuation: {
    intro: "The sector prices two things: cost-curve position through the cycle for commodities, and moat durability for specialties. The classic error is paying a mid-cycle multiple on peak-cycle earnings.",
    methods: [
      { name: "EV / EBITDA (mid-cycle normalized)", use: "Commodity producers: normalize EBITDA to mid-cycle spreads before applying the multiple", avoid: "Trailing multiples at spread extremes: cheap at the peak, dear at the trough is the trap", strengths: "Standard, comparable, cycle-aware if normalized", weaknesses: "Mid-cycle is a modeled fiction everyone estimates differently", range: { low: 5, high: 8, asOf: 2025, note: "commodity names; diversified majors 7-9x; troughs optically higher on depressed EBITDA" } },
      { name: "Specialty multiple", use: "Formulation franchises, industrial gases, electronic chemicals", avoid: "Applying it to commodity businesses wearing specialty labels", strengths: "Matches annuity-like economics and pricing power", weaknesses: "Pays up for a moat that commoditization can erode", range: { low: 12, high: 18, asOf: 2025, note: "EV/EBITDA; industrial gases and top specialty compounders at the high end" } },
      { name: "Replacement cost / EV per ton", use: "Sanity check on commodity assets: buy below replacement, be wary above", avoid: "Assets that will never earn their cost of capital (stranded European crackers have replacement value but no future)", strengths: "Anchors value in physical scarcity through the cycle", weaknesses: "Replacement cost is irrelevant if nobody would rationally replace it", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; a world-scale cracker complex runs $1B-5B+" } },
      { name: "Sum-of-the-parts", use: "Diversified majors (BASF class): value commodity, specialty, and ag pieces separately", avoid: "Assuming the conglomerate discount closes without a catalyst", strengths: "Exposes hidden specialty value inside cyclical wrappers; feeds the carve-out thesis", weaknesses: "The parts stay summed until management actually separates them", range: { low: 0, high: 0, asOf: 2025, note: "framework; PE pays 10-14x for carved-out specialty units" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a chemicals name quickly: mid-cycle EBITDA times a mix-adjusted multiple, minus net debt. Use trough or peak EBITDA at your peril.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 12, step: 0.5, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 18, step: 0.5, value: 7, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 1, value: 10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays chemicals as a cost-curve trade with a quality overlay: own feedstock-advantaged commodity producers and specialty compounders through the cycle, rent the deep cyclicals at the trough, and avoid the structurally stranded middle (unadvantaged European commodity capacity). The 2025-2026 setup is a classic bombed-out cyclical bottom: spreads at cash cost, ~9% of European capacity closing, China's build-out cresting, and nobody expecting normalization before 2028: which is exactly when trough buyers get paid, if the capacity discipline holds.",
    debates: [
      { topic: "Is Europe's chemical industry in managed decline or at a cyclical trough?", bull: "The closures ARE the bull case: ~37M tons permanently gone rebalances the market, survivors keep the specialty and Verbund cores that still earn, and EU industrial policy (energy relief, CBAM protection) is finally waking up. What remains is smaller but ownable.", bear: "Nothing cyclical about gas at 2.5x US prices plus the world's highest carbon costs: that is a permanent input-cost wedge. Each closure round shrinks the ecosystem (crackers feed derivative plants feed customers), so decline compounds. Europe's share already halved from 21% to 13% since 2009; trends like that rarely stop at 13%." },
      { topic: "Will China's overcapacity actually rationalize?", bull: "Beijing has run this play before: the 2016 supply-side reform in steel and coal turned gluts into profits inside 2 years. Permit curbs on new ethylene from 2026 are the signal, Sinopec's chemical losses are the motivation, and the Five Year Plan is the mechanism.", bear: "Chemicals self-sufficiency is strategic policy, not a P&L exercise: provincial employment, refinery integration, and import substitution all argue for running the plants regardless of margin. China's C2 capacity at 121% above domestic demand means the surplus gets exported either way: deflation is the product." },
      { topic: "Does the specialty premium survive?", bull: "Qualification moats, priced-on-value economics, and GDP-plus niches (electronic chemicals riding semis, adhesives riding lightweighting) justify 12-18x: these are quiet compounders with decade-long customer lock-in, and PE bids validate the marks every year.", bear: "Every specialty ages into a commodity: patents lapse, customers dual-source, Chinese entrants move up the value chain exactly as they did in commodities. Paying 16x for yesterday's moat while volume growth runs 2% is how quality investors lose money slowly." }
    ],
    cycle: {
      where: "At or near the bottom of the deepest downcycle since the 1980s restructuring: global operating rates in the low 80s, European capacity exiting, Chinese additions cresting, spreads at marginal cash cost, and consensus pushing recovery to 2027-2028. Chemicals lead the industrial cycle by 1-2 quarters: the first sector down, historically among the first back up.",
      drivers: "Industrial production and the inventory cycle (demand), capacity additions vs closures (supply), regional energy spreads (cost curve), and Chinese policy on both stimulus and capacity permits.",
      leads: [
        "Chemical production and capacity utilization indices (Fed G.17, Eurostat: free)",
        "US natural gas and ethane prices vs Brent-linked naphtha (EIA: free)",
        "China chemical PPI and PMI (NBS: free): the glut's pricing pulse",
        "ISM manufacturing new orders minus inventories: chemicals' early-cycle demand proxy (free)",
        "Producer commentary on operating rates and closure announcements each earnings season"
      ]
    },
    exposure: [
      { vehicle: "Feedstock-advantaged commodity producers (LyondellBasell, Dow, Westlake class)", note: "The cost-curve trade: US Gulf ethane economics, bought at trough spreads" },
      { vehicle: "Diversified majors (BASF class)", note: "SOTP value with European risk attached: the restructuring option" },
      { vehicle: "Specialty compounders (Shin-Etsu, Sika, Ecolab class)", note: "The quality core: pricing power through the cycle" },
      { vehicle: "Industrial gases (Linde, Air Liquide, Air Products)", note: "The sector's annuity: contracted, pass-through, infrastructure-grade" },
      { vehicle: "Chemical distributors (Brenntag, IMCD class)", note: "Asset-light flow economics: cyclical but self-funding" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Spread, volume, and operating-rate commentary: the cycle's dashboard" },
      { when: "2026 (March)", what: "China's Five Year Plan and ethylene permit curbs: the supply-discipline verdict" },
      { when: "Ongoing 2025-2027", what: "European closure announcements and EU industrial-policy response (energy costs, CBAM)" },
      { when: "Any oil or gas shock", what: "Regional feedstock spreads reprice instantly; cost-curve winners and losers swap overnight" }
    ],
    data: [
      { series: "Industrial production: chemicals (G.17)", source: "FRED / Federal Reserve (free)", why: "US chemical output and capacity utilization, the domestic cycle gauge" },
      { series: "Henry Hub gas, ethane, naphtha prices", source: "EIA (free)", why: "The cost curve's raw inputs; the US-Europe spread in real time" },
      { series: "EU chemical production index", source: "Eurostat (free)", why: "Europe's rationalization tracked monthly" },
      { series: "China PPI: chemical raw materials", source: "NBS (free)", why: "The glut's pricing pulse at the source" },
      { series: "ACC weekly economic report / chemical activity barometer", source: "americanchemistry.com (free summaries)", why: "Industry-built leading indicator with a long history" }
    ],
    playbook: [
      { regime: "Recession", behavior: "First in, first out: volumes and spreads collapse early via destocking, then trough before the broad market. Buy quality cyclicals when spreads hit cash cost and closures accelerate: the 2009 and (likely) 2025 template." },
      { regime: "Oil spike", behavior: "Splits the sector: gas-based US and Middle East producers gain vs oil-linked naphtha crackers (spreads widen with the oil-gas ratio); specialty margins squeeze until price increases catch up 2-3 quarters later." },
      { regime: "Rates rising", behavior: "Construction and durables demand fades (PVC, insulation, coatings first); leveraged cyclicals de-rate; the contracted gas names and net-cash specialties become the hiding place." },
      { regime: "Geopolitical shock", behavior: "Energy and freight transmission dominates: 2022 showed a gas shock can strand a continent's capacity. Trade barriers cut both ways: tariffs on Chinese polymers protect Western spreads but tax downstream customers." }
    ]
  },

  players: [
    { name: "BASF", role: "Diversified global leader", country: "DE", real: true, note: "EUR 65.3B sales, EUR 7.9B EBITDA before special items (2024); the Verbund model, now building it in Zhanjiang, China" },
    { name: "Dow", role: "Commodity major", country: "US", real: true, note: "$43.0B sales, $2.6B operating EBITDA (2024); closing 3 European assets, cut its dividend in 2025" },
    { name: "LyondellBasell", role: "Polyolefins pure-play", country: "NL", real: true, note: "$35.1B revenue (2024); Houston-run, Rotterdam-incorporated; European assets under strategic review" },
    { name: "Sinopec (chemicals arm)", role: "China's state giant", country: "CN", real: true, note: "RMB (14.6B) segment operating loss in 2025: even the glut's builder is bleeding" },
    { name: "SABIC", role: "Feedstock-advantaged major", country: "SA", real: true, note: "Aramco-controlled; Middle East gas economics at the bottom of the cost curve" },
    { name: "Linde", role: "Industrial gas leader", country: "UK", real: true, note: "The sector's best business model: contracted gases, ~30% operating margins through cycles" },
    { name: "Shin-Etsu Chemical", role: "Specialty compounder", country: "JP", real: true, note: "Silicon wafers, PVC, and photoresists: the quiet margin machine of the sector" },
    { name: "Ecolab", role: "Specialty services model", country: "US", real: true, note: "Chemistry sold as a service contract: the de-commoditization endgame" }
  ],

  geography: [
    { country: "CN", role: "~45% of global sales and the capacity engine", note: "Built ~70% of new ethylene capacity 2020-2025; now the world's supply overhang and its biggest market at once" },
    { country: "US", role: "Feedstock-advantaged producer", note: "Shale ethane put the Gulf Coast at the bottom of the cost curve; a decade of cracker construction followed" },
    { country: "DE", role: "Europe's chemical heartland, under strain", note: "BASF's Ludwigshafen Verbund is the icon; energy costs are forcing the deepest restructuring since reunification" },
    { country: "SA", role: "Gas-advantaged exporter", note: "SABIC and Aramco push crude-oil-to-chemicals: the feedstock kings diversifying beyond fuel demand" },
    { country: "JP", role: "Specialty powerhouse", note: "Shin-Etsu, Mitsubishi Chemical, and the electronic-chemicals oligopoly serving global semis" },
    { country: "IN", role: "The next demand engine", note: "Per-capita chemical consumption a fraction of China's; Reliance leads a domestic build-out" }
  ],

  cycles: [
    { year: 1973, title: "The oil shock", kind: "bust", text: "Feedstock costs quadruple and end the petrochemical golden age; overbuilt capacity meets repriced inputs. Lesson: the chemical industry is a leveraged derivative on its feedstock." },
    { year: 2008, title: "The great destock", kind: "bust", text: "GFC demand collapse plus inventory liquidation halves volumes in months; chemicals prove they lead the industrial cycle down. Lesson: the inventory whipsaw doubles every demand move, in both directions." },
    { year: 2012, title: "The shale windfall", kind: "boom", text: "US ethane prices collapse as shale gas floods in; Gulf Coast crackers mint money and $200B+ of new US capacity gets sanctioned. Lesson: cost curves are rewritten by energy revolutions, not chemistry." },
    { year: 2017, title: "The merger wave", kind: "shift", text: "Dow-DuPont merges and re-splits into 3; ChemChina buys Syngenta; Bayer buys Monsanto. Portfolio logic replaces conglomerate logic. Lesson: in a mature industry, the portfolio is the strategy." },
    { year: 2022, title: "The energy rupture", kind: "bust", text: "Russian gas cutoff sends EU energy to multiples of US levels just as China's capacity wave lands; ~37M tons of European capacity begins exiting. Lesson: a plant's location is a bet on 40 years of local energy policy." }
  ],

  risks: [
    { name: "China keeps building through the glut", severity: 4, likelihood: 3, transmission: "Strategic self-sufficiency overrides returns -> surplus exported -> global spreads pinned at cash cost -> Western commodity producers earn below cost of capital for years." },
    { name: "European deindustrialization spiral", severity: 4, likelihood: 4, transmission: "Energy plus carbon costs -> cracker closures -> derivative plants lose feedstock -> downstream customers relocate -> each exit shrinks the case for staying." },
    { name: "Demand disappoints (plastics peak)", severity: 3, likelihood: 2, transmission: "Recycling mandates + packaging reduction + EV-driven auto simplification -> polymer demand grows below GDP -> the 2028 rebalancing thesis slips again." },
    { name: "PFAS and liability tail", severity: 3, likelihood: 3, transmission: "Forever-chemical litigation broadens -> multi-decade settlements (the 3M template) -> uninsurable liabilities reprice any producer with legacy exposure." },
    { name: "Catastrophic process safety event", severity: 5, likelihood: 1, transmission: "A Bhopal-scale accident anywhere -> license-to-operate crisis industry-wide -> regulation, insurance, and multiples reset for a decade." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Chemical companies turn oil, gas, and minerals into the ingredients of nearly everything: plastics, paints, fertilizers, glues, and the ultra-pure liquids that make computer chips possible. It is a huge industry (about $6T of sales a year, nearly half of it in China) that most people never notice, because its products are always inside something else. The key divide: 'commodity' chemicals compete on price like wheat, while 'specialty' chemicals compete on performance like medicine."] },
    L2: { title: "Intermediate", text: ["The economics run on 2 spreads: what a plant pays for feedstock (oil-based naphtha or gas-based ethane) versus what its output sells for. Cheap US shale gas and Middle East feedstock sit at the bottom of the cost curve; Europe, paying ~2.5x US gas prices, sits at the top and is closing plants (~9% of its capacity in 2024-2025 alone). Meanwhile China built ~70% of the world's new ethylene capacity in 5 years, far ahead of demand, so prices are pinned near cost and even Sinopec's chemical arm lost money in 2025."] },
    L3: { title: "Advanced", text: ["Analyze commodity and specialty on separate sheets. Commodities: model regional spreads, operating rates (below ~85% utilization, pricing power dies), and cost-curve position; normalize to mid-cycle EBITDA before touching a multiple, because trailing numbers lie at both extremes. Specialties: interrogate the moat (qualification lock-in, share of customer cost vs value delivered) and watch for commoditization creep. Diversified majors are SOTP stories: BASF's EUR 7.9B of 2024 EBITDA leaned on downstream businesses while pure commodity peers like Dow ($2.6B on $43B of sales) showed what undiluted spread exposure looks like at the trough."] },
    L4: { title: "Expert", text: ["The live trade is the 2025-2028 rebalancing: ~37M tons of European capacity exiting, China's additions cresting with Beijing signaling ethylene permit curbs from 2026, and consensus pushing recovery past 2027. Trough buyers of feedstock-advantaged names get paid if discipline holds; the bear case is China building for strategy, not returns, and exporting deflation indefinitely (PP exports nearly doubled in 2024). Second-order effects matter: each European cracker closure strands derivative plants, tariff walls are rising around Chinese polymers, and the specialty premium (12-18x vs 5-8x) is itself a crowded judgment to stress-test."] },
    L5: { title: "Institutional", text: ["Allocator's frame: chemicals is 3 asset classes wearing one sector label. Contracted industrial gases are infrastructure and deserve those multiples; specialty formulators are quality compounders whose moats need periodic re-underwriting; commodity producers are cost-curve options on the cycle, sized at the trough and trimmed into spread euphoria. The structural view: global capacity leadership has migrated with cheap energy 3 times (US, Middle East, China), Europe is exiting the commodity game, and the next decade's alpha lies in the rebalancing timing, the carve-out wave as majors simplify, and whether decarbonization becomes a moat (green premiums, CBAM protection) or merely a cost. Chemicals remain the industrial cycle's best early-warning system: watch them even when you do not own them."] }
  },

  quiz: [
    { q: "Global chemical sales run about:", choices: ["$500B, mostly in Europe", "$6T, with China alone ~45% of them", "$1T, mostly in the US", "$20T"], answer: 1, explain: "Roughly $6T (2024, Cefic): the invisible giant. China is ~45% of sales; Europe's share halved from 21% to 13% since 2009." },
    { q: "The main divide in chemical economics is:", choices: ["Organic vs inorganic", "Commodity (price-takers on a cost curve) vs specialty (priced on performance with qualification moats)", "Liquid vs solid", "Domestic vs export"], answer: 1, explain: "Commodity margins swing with spreads and utilization; specialties earn 20%+ EBITDA on formulation moats. Same sector, different asset classes." },
    { q: "Europe's chemical crisis is driven mainly by:", choices: ["Weak chemistry skills", "Energy costs (~2.5x US gas prices) plus carbon costs, which pushed its crackers to the top of the global cost curve", "A ban on plastics", "Labor strikes"], answer: 1, explain: "That cost wedge drove ~37M tons (~9% of European capacity) into permanent closure in 2024-2025, with ~10 crackers shut or slated." },
    { q: "China's role in the current cycle:", choices: ["Minor importer", "Built ~70% of the world's new ethylene capacity 2020-2025, far ahead of demand, flipping from demand sink to supply overhang", "Exited chemicals", "Only makes specialties"], answer: 1, explain: "Capacity grew ~40M tons globally vs ~27M tons of demand; China's C2 capacity sits ~121% above its own demand, and the surplus exports deflation." },
    { q: "A commodity chemical producer's destiny is set by:", choices: ["Its brand", "Its position on the global cost curve: feedstock and energy costs decide who profits through the trough", "Its ad budget", "Its headquarters city"], answer: 1, explain: "US ethane crackers (~$250-350/ton cash cost) earn through cycles that bankrupt European naphtha capacity (~$700-900/ton)." },
    { q: "The sector's best structural business model is:", choices: ["Naphtha cracking", "Industrial gases: a 3-player oligopoly on 15-20 year take-or-pay contracts with energy pass-through", "Fertilizer trading", "Chemical shipping"], answer: 1, explain: "Linde, Air Liquide, and Air Products sell air on infrastructure-grade contracts: the annuity hiding inside a cyclical sector." },
    { q: "Chemicals matter to macro investors because:", choices: ["They are immune to cycles", "They lead the industrial cycle: first down via destocking, historically among the first to turn back up", "They only track oil", "They are government-owned"], answer: 1, explain: "Purchases sit at the front of every supply chain, so chemical volumes and prices move 1-2 quarters before the broad industrial economy." },
    { q: "The classic chemicals valuation trap is:", choices: ["Using EBITDA at all", "Paying a normal multiple on peak-cycle earnings (or panicking at optically high trough multiples): always normalize to mid-cycle", "Ignoring dividends", "Using DCF"], answer: 1, explain: "Trailing multiples lie at both extremes: cheap-looking peaks and expensive-looking troughs. Mid-cycle normalization is the discipline." }
  ],

  sources: [
    { name: "Cefic Facts & Figures 2025 (global and EU chemical industry data)", url: "https://cefic.org/facts-and-figures-of-the-european-chemical-industry/", feeds: "market size, regional shares" },
    { name: "BASF FY2024 results (sales EUR 65.3B, EBITDA bsi EUR 7.9B)", url: "https://www.basf.com/global/en/media/news-releases/2025/02/p-25-026", feeds: "financials" },
    { name: "Dow Q4/FY2024 results and 2025 European shutdown announcement", url: "https://investors.dow.com/en/news/news-details/2025/Dow-will-shut-down-three-upstream-European-assets-in-response-to-structural-challenges-in-the-region/default.aspx", feeds: "financials, capacity rationalization" },
    { name: "ICIS Asian Chemical Connections: China C2/C3 capacity vs demand (Jan 2025)", url: "https://www.icis.com/asian-chemical-connections/2025/01/chinas-c2-and-c3-capacity-in-2025-forecast-to-be-121-and-179-more-than-local-demand/", feeds: "China overcapacity" }
  ]
};
