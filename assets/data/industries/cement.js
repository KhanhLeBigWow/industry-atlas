/* Industry Atlas - CEMENT & AGGREGATES (full module, research-backed)
 * Anchors: global cement output ~4.0Bt in 2024 with China ~1,900Mt (~47.5%) and
 * India ~450Mt (USGS via Global Cement Top 100, Jan 2025); cement ~8% of global
 * anthropogenic CO2, ~0.83t CO2 per ton of clinker, ~60% from calcination
 * chemistry (Reccessary / npj Materials Sustainability, 2025); Heidelberg
 * Materials inaugurated Brevik CCS, the world's first industrial-scale cement
 * carbon-capture plant, June 18 2025: 400,000t CO2/yr, ~50% of plant emissions
 * (Heidelberg Materials release, S&P Global); Holcim spun off its North America
 * business as Amrize (~$30B, NYSE/SIX: AMRZ) on June 23 2025 (Holcim release,
 * Construction Dive); US cement price ~$163/t in 2025, +1.8% YoY (Statista /
 * IndexBox); Vulcan Q1 2025 aggregates prices +7%, cash gross profit $10.63/t,
 * +20% (Vulcan Materials Q1 2025 release). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["cement"] = {
  meta: {
    id: "cement", name: "Cement & Aggregates", sector: "materials", status: "full",
    tagline: "The world's most consumed man-made material, sold from local monopolies that emit 8% of global CO2.",
    marketSize: { value: 400, unit: "$B", asOf: 2024, note: "implied global cement revenue: ~4.0Bt output (USGS) at a rough $100/t world average; aggregates and ready-mix add markets of similar scale on top" },
    cagr: { value: 3, range: [1, 5], horizon: "2024-2030" },
    maturity: "mature", cyclicality: 4, capitalIntensity: 5, regulation: 4, disruption: 2
  },
  newsQuery: '(Holcim OR Cemex OR "Heidelberg Materials" OR "cement prices" OR "cement plant" OR "aggregates producer" OR clinker)',

  overview: {
    definition: "The cement and aggregates industry quarries limestone and stone, burns clinker at 1,450C, grinds it into cement, and combines it with sand, gravel, and water into concrete: humanity's second-most consumed substance after water. Roughly 4.0Bt of cement was produced in 2024 (USGS), nearly half of it in China, feeding an estimated 30Bt of concrete poured every year.",
    howItWorks: [
      "The process is chemistry plus heat: crushed limestone and clay enter a rotary kiln at 1,450C, where calcination strips CO2 from calcium carbonate to form clinker, the reactive gray nodules that are cement's active ingredient. Clinker is ground with gypsum and fillers into cement powder, which is then batched with aggregates (crushed stone, sand, gravel) into ready-mix concrete with a 90-minute working life from truck to pour. Every stage is continuous-process heavy industry: a modern integrated plant costs $300M+ and runs for 50 years.",
      "The economics are governed by weight. Cement sells for roughly $163/t in the US (2025, Statista), aggregates for a fraction of that, so value-to-weight is terrible and freight destroys margin beyond roughly 150-200 miles by truck. Markets are therefore local, and the moat is the quarry permit: a stone reserve next to a growing metro is effectively irreplaceable, because nobody re-zones land for a new pit beside the suburbs it would supply. That is why US aggregates leaders printed +7% pricing and +20% cash gross profit per ton growth (Vulcan, Q1 2025) into flat volumes: local monopolies re-price when demand firms and give little back when it fades.",
      "Then there is the carbon problem, and it is structural: cement accounts for ~8% of global anthropogenic CO2, roughly 0.83t of CO2 per ton of clinker, and about 60% of that comes from the calcination chemistry itself rather than the fuel. You cannot fuel-switch your way out of a chemical reaction, which is why the industry's decarbonization stack runs through clinker substitution (slag, fly ash, calcined clay), alternative fuels, and ultimately carbon capture: Heidelberg Materials opened Brevik in Norway in June 2025, the world's first industrial-scale cement CCS plant, capturing 400,000t/yr (~50% of plant emissions) for storage under the North Sea, and sells the output as evoZero branded near-zero cement.",
      "Industry structure splits into two very different games. Globally, consolidation built multiregional majors (Holcim, Heidelberg Materials, Cemex, CRH) that now face a shrinking, brutally oversupplied China (still ~1,900Mt, just under half of world output) and growth concentrated in India (~450Mt, #2) and the Global South. In the US, a decade of pricing discipline, import-short coastal markets, and infrastructure spending made North America the sector's profit pool: CRH moved its primary listing to the NYSE in 2023, and Holcim spun its North American business off as Amrize (~$30B at listing) in June 2025. The capital now follows the pricing, and the pricing lives in American stone."
    ],
    history: [
      { era: "1824-1900", title: "Portland's patent", text: "Joseph Aspdin patents Portland cement in 1824; reinforced concrete arrives late-century and the built world gets a new skeleton." },
      { era: "1900-1970", title: "Pouring modernity", text: "Hoover Dam, autobahns, and the US Interstate system industrialize concrete; cement becomes a strategic commodity every nation wants to make itself." },
      { era: "1970-2000", title: "From family pits to majors", text: "Lafarge, Holcim, and Cemex roll up thousands of local quarries and kilns into multinationals; cartel fines across Europe reveal how comfortable local oligopolies had become." },
      { era: "2001-2015", title: "The China supercycle", text: "China's urbanization consumes more cement in 2011-2013 than the US did in the entire 20th century (USGS-derived estimates); global capacity doubles; the Lafarge-Holcim merger of equals (2015) caps the consolidation era." },
      { era: "2016-present", title: "Carbon and the American pivot", text: "EU carbon pricing bites, Brevik CCS opens (June 2025) as the first industrial-scale capture plant, and the majors pivot West: CRH to the NYSE (2023), Holcim spins off Amrize (2025), US pricing becomes the industry's engine." }
    ],
    trends: [
      { title: "US pricing regime", direction: "up", text: "A decade of discipline plus import-short markets: cement ~$163/t (+1.8% in 2025 after double-digit 2022-23 hikes), aggregates prices up 5-7% annually at Vulcan and Martin Marietta with margin expanding faster than volume." },
      { title: "China's long descent", direction: "down", text: "Output has fallen from a ~2.4Bt peak toward ~1.9Bt as the property bust grinds on; China dropping to under half of world production marks the end of the supercycle that built the modern industry." },
      { title: "Decarbonization gets industrial", direction: "shift", text: "Brevik proves cement CCS at scale (400,000t/yr from June 2025); EU ETS free allowances phase out under CBAM from 2026, converting carbon from a report line into a cost line: and, for early movers, a green-premium product line." },
      { title: "Aggregates consolidation", direction: "up", text: "Majors and infrastructure funds compete for pits: bolt-on M&A of family-owned quarries is the sector's quiet compounding machine because permits, not plants, are the scarce asset." },
      { title: "Clinker on a diet", direction: "shift", text: "Blended cements, calcined clays (LC3), and limestone fillers push the clinker ratio down: the cheapest ton of CO2 the industry can cut, and a margin lever wherever standards allow it." }
    ],
    outlook: "A tale of two industries: ex-China volumes grind higher with population and infrastructure (India is the growth engine at ~450Mt and compounding), while China's decline caps global tonnage near 4Bt. The investment story is not volume, it is pricing power and carbon: US aggregates monopolies compounding price over stagnant tons, and European majors converting CCS and green cement from cost into moat as CBAM walls off the home market. The wildcard is whether carbon costs arrive faster than green premiums: the sector's margin structure over the 2030s hangs on that race."
  },

  structure: {
    suppliers: [
      { name: "Quarries & reserves (owned)", note: "The industry largely supplies itself: limestone and stone reserves are the balance sheet's real asset" },
      { name: "Energy (coal, petcoke, gas, power)", note: "30-40% of cement production cost; kilns are fuel-switching omnivores, increasingly burning waste" },
      { name: "Equipment (FLSmidth, thyssenkrupp Polysius, KHD)", note: "Kilns, mills, and now capture units: a specialized oligopoly of plant builders" },
      { name: "SCM sources (steel slag, fly ash, calcined clay)", note: "Clinker substitutes bought from steelmakers and utilities; supply shrinks as coal plants retire" }
    ],
    producers: [
      { name: "Global majors (Holcim, Heidelberg Materials, Cemex, CRH)", note: "Multiregional cement + aggregates + ready-mix; the decarbonization capex lives here" },
      { name: "US aggregates pure-plays (Vulcan, Martin Marietta)", note: "Stone monopolies with 90%+ US exposure: the sector's premium equities" },
      { name: "Amrize", note: "Holcim's North American spin-off (June 2025, ~$30B): a pure bet on US construction" },
      { name: "Asian giants (Anhui Conch, UltraTech)", note: "Scale champions of China and India: half the world's tonnage, a fraction of its market cap" }
    ],
    distributors: [
      { name: "Ready-mix batchers & concrete products", note: "Often vertically owned; the 90-minute delivery radius makes this the most local business on Earth" },
      { name: "Bulk terminals & importers", note: "Coastal silos arbitrage cheap seaborne clinker into deficit markets like the US Gulf and East Coast" }
    ],
    customers: [
      { name: "Infrastructure & public works", note: "Roughly half of US aggregates demand; funded by multi-year highway bills, the least cyclical slice" },
      { name: "Residential construction", note: "The cyclical swing factor: foundations, slabs, and streets follow housing starts" },
      { name: "Non-residential & industrial", note: "Warehouses, data centers, factories, LNG: the reshoring-era kicker" }
    ],
    regulators: [
      { name: "EPA & state air agencies", note: "Kiln emissions (NOx, SOx, mercury) under Clean Air Act rules; permits take years" },
      { name: "EU ETS & CBAM", note: "Carbon pricing plus a border tariff phasing in from 2026: the world's first real carbon wall around cement" },
      { name: "Local zoning & mining permits", note: "The accidental moat-maker: every rejected quarry application enriches the incumbents" },
      { name: "Competition authorities", note: "Cement's cartel history is long and multinational; pricing discipline lives near the legal line" }
    ],
    capital: [
      { name: "Investment-grade bond markets", note: "BBB balance sheets funding $300M plants and now $500M+ capture units" },
      { name: "Infrastructure & private equity funds", note: "Aggregates pits trade as perpetual real assets; PE competes with strategics for every family quarry" },
      { name: "Public subsidy for decarbonization", note: "EU Innovation Fund, Norway's Longship (Brevik), US DOE grants: first-of-a-kind CCS is publicly co-funded" }
    ]
  },

  valueChain: {
    intro: "From blasted rock to a poured foundation in six stages. Value capture is upside down by glamour: the kiln is the engineering marvel, but the humble quarry permit next to a growing city is where the returns live.",
    stages: [
      { id: "quarry", name: "Quarrying & reserves", what: "Limestone, stone, sand: drilling, blasting, crushing", players: "Vulcan, Martin Marietta, majors' reserve networks", valueCapture: 4,
        economics: { grossMargin: [30, 45], capitalIntensity: 4, concentration: 3 },
        linksTo: ["mining"],
        deeper: "The moat stage: a permitted reserve near a metro is a wasting asset that cannot be replicated, because zoning kills new pits. Decades of reserves get valued like real estate with an extraction annuity attached. Permitting timelines of 5-10 years mean supply responds to price about as fast as a glacier." },
      { id: "clinker", name: "Clinker production", what: "1,450C rotary kilns turning limestone into cement's active ingredient", players: "Holcim, Heidelberg Materials, Cemex, Anhui Conch", valueCapture: 3,
        economics: { grossMargin: [25, 35], capitalIntensity: 5, concentration: 3 },
        linksTo: ["oil-gas", "carbon-markets"],
        deeper: "The carbon epicenter: ~0.83t CO2 per ton of clinker, ~60% from the calcination reaction itself. Fuel is 30-40% of cost, so kilns burn whatever is cheapest: petcoke, tires, sorted waste. This is where CCS must bolt on (Brevik: 400,000t/yr from 2025) and where EU carbon pricing lands first." },
      { id: "grinding", name: "Grinding & blending", what: "Milling clinker with gypsum, slag, fly ash into finished cements", players: "Integrated majors plus standalone grinders near ports", valueCapture: 2,
        economics: { grossMargin: [15, 25], capitalIntensity: 3, concentration: 3 },
        linksTo: ["steel", "utilities"],
        deeper: "The clinker-ratio lever lives here: every point of substitution (steel slag, fly ash, calcined clay) cuts CO2 and cost together. Standalone grinding stations near ports are also the import channel: cheap seaborne clinker ground locally is the discipline check on inland pricing." },
      { id: "logistics", name: "Logistics & terminals", what: "Bulk trucking, rail, barges, coastal silos", players: "Producers' own fleets, bulk carriers, terminal operators", valueCapture: 2,
        economics: { grossMargin: [5, 12], capitalIntensity: 4, concentration: 2 },
        linksTo: ["logistics", "shipping", "rail"],
        deeper: "Freight defines the market map: ~150-200 economic miles by truck, farther by rail and barge, globally by ship for clinker. The freight-adjusted price is the industry's true unit of account: producers quote it that way because geography is half the margin." },
      { id: "aggregates", name: "Aggregates", what: "Crushed stone, sand, gravel: the 90% of concrete that is not cement", players: "Vulcan, Martin Marietta, CRH, Heidelberg Materials", valueCapture: 5,
        economics: { grossMargin: [35, 50], capitalIntensity: 4, concentration: 3 },
        linksTo: ["mining", "construction"],
        deeper: "The sector's crown jewels: a low-tech product with a monopoly wrapper. Sub-$25/t prices mean a 30-mile freight radius, so each pit owns its neighborhood. Vulcan's Q1 2025 print (prices +7%, cash gross profit per ton +20% to $10.63) is the model: price compounds, volume merely oscillates." },
      { id: "readymix", name: "Ready-mix & products", what: "Batching concrete, blocks, precast: the last 90 minutes", players: "Cemex (the ready-mix heavyweight), thousands of locals", valueCapture: 2,
        economics: { grossMargin: [8, 15], capitalIntensity: 3, concentration: 2 },
        linksTo: ["construction", "real-estate"],
        deeper: "Fragmented, competitive, and thin: ready-mix exists mostly to pull through upstream cement and stone at captive volumes. The interesting frontier is performance concrete and admixtures, where chemistry finally earns a margin in a commodity chain." }
    ]
  },

  financials: {
    businessModel: [
      "The P&L is a price-cost spread on enormous fixed assets: revenue = tons times freight-adjusted price, costs are energy (30-40% of cement production cost), labor, and maintenance, and operating leverage is fierce in both directions because kilns and crushers cost the same to own at 60% utilization as at 95%. The US model is price over volume: mid-single-digit annual price increases against flat tons drove Vulcan's cash gross profit per ton up 20% in Q1 2025. The emerging-market model is volume at commodity prices, hostage to utilization: China's overcapacity keeps domestic returns pinned near zero.",
      "Capital allocation is the differentiator. Aggregates bolt-ons compound quietly (buy a family pit at 8x, run it at monopoly pricing forever); cement mega-capex is where returns go to die unless discipline holds. The new line item is carbon: EU producers face the ETS free-allowance phase-out from 2026 under CBAM, and first-mover CCS (Brevik cost was publicly co-funded) creates a green-premium product (evoZero) whose pricing is still being discovered. Watch EBITDA per ton, not margin %: mix between cement, aggregates, and ready-mix makes percentage comparisons lie."
    ],
    fingerprint: { grossMargin: 32, recurringRevenue: 25, capitalIntensity: 85, pricingPower: 65, cyclicality: 70, operatingLeverage: 75 },
    lines: [
      { label: "Volumes (tons shipped)", note: "The cycle tape: housing starts and highway lettings show up here with a 2-quarter lag" },
      { label: "Freight-adjusted pricing", note: "The moat tape: US aggregates +5-7%/yr through flat volumes is the regime to monitor" },
      { label: "Energy & fuel cost per ton", note: "The margin swing factor; alternative-fuel share is the structural offset" },
      { label: "EBITDA per ton", note: "The cleanest cross-cycle metric: mix-proof where margin % misleads" },
      { label: "Carbon costs & credits", note: "ETS positions, CBAM exposure, green-premium revenue: the new P&L battleground" }
    ],
    unitEconomics: {
      unit: "per metric ton of cement (US, 2025)",
      items: [
        { label: "Average selling price", value: "~$163/t", note: "US 2025 average, +1.8% YoY (Statista); coastal markets set by import parity" },
        { label: "Energy share of production cost", value: "30-40%", note: "fuel plus power; the reason kilns burn tires and sorted waste" },
        { label: "EBITDA per ton (US majors)", value: "~$40-55", note: "roughly, at current pricing; emerging-market producers earn a fraction of this" },
        { label: "Embedded CO2", value: "~0.6-0.8t per ton of cement", note: "at ~$80/t EU carbon, an unabated ton carries $50+ of latent carbon cost" }
      ]
    }
  },

  kpiRefs: ["mining-aisc", "energy-capacity-factor"],
  kpiLocal: [
    {
      id: "cement-clinker-ratio", name: "Clinker-to-Cement Ratio", industries: ["cement"],
      definition: "Share of clinker in each ton of finished cement; the rest is slag, fly ash, calcined clay, and fillers.",
      formula: "Clinker consumed / cement produced (global average ~0.74; best-practice blends reach 0.5-0.6)",
      interpretation: "The cheapest decarbonization lever and a cost lever in one number: every point down cuts ~0.008t CO2 and the fuel bill with it. Falling ratio = a producer getting paid to decarbonize.",
      healthy: "Declining toward 0.65 or below with stable strength ratings", warning: "Stuck above 0.80: full carbon exposure when ETS/CBAM costs land" },
    {
      id: "cement-cash-profit-ton", name: "Cash Gross Profit per Ton", industries: ["cement"],
      definition: "Freight-adjusted revenue minus cash cost of production, per ton shipped: the sector's purest pricing-power gauge.",
      formula: "(Freight-adjusted price (cash production cost)) per ton; Vulcan Q1 2025: $10.63/t aggregates, +20% YoY",
      interpretation: "Strips out mix and freight noise. When this compounds faster than inflation on flat volumes, the local-monopoly model is working; when it compresses, discipline or demand has cracked.",
      healthy: "High-single-digit %+ annual growth through flat volumes", warning: "Price increases failing to stick; spread compression in falling-volume quarters" }
  ],

  health: {
    intro: "Cement health is position and discipline: where your reserves sit, what your energy and carbon exposure costs, and whether management treats capital like the scarce input it is.",
    pillars: [
      { name: "Market position & pricing power", weight: 25, metrics: "Reserve locations vs metro growth, local share, price realization vs announcements", healthy: "Permitted reserves in supply-short metros; announced increases sticking", warning: "Exposure to import-parity coastal markets or fragmented, undisciplined regions" },
      { name: "Cost curve & energy", weight: 20, metrics: "Cash cost per ton vs regional peers, alternative-fuel share, power contracts", healthy: "First-quartile cost, 30%+ alternative fuels", warning: "Petcoke/coal dependence with spot exposure; aging kilns below scale" },
      { name: "Carbon readiness", weight: 20, metrics: "Clinker ratio trajectory, CCS pipeline, ETS/CBAM exposure, green product revenue", healthy: "Ratio falling, funded capture projects, green premiums being realized", warning: "Unabated EU exposure as free allowances phase out from 2026" },
      { name: "Balance sheet & capital discipline", weight: 20, metrics: "Net debt/EBITDA, bolt-on vs mega-capex mix, returns on acquired tons", healthy: "Under 2x levered, aggregates bolt-ons at single-digit multiples", warning: "Mega-plant bets in oversupplied markets; deal prices assuming perpetual peak pricing" },
      { name: "Demand pipeline", weight: 15, metrics: "Infrastructure funding visibility, backlog of public lettings, housing exposure", healthy: "Multi-year highway-bill funding flowing; diversified end markets", warning: "Residential-heavy mix into a rate shock; expiring public programs" }
    ],
    scoringNote: "Weight position over performance: a mediocre operator on great reserves out-earns a great operator in a fragmented market, and the market knows it: that is the aggregates premium in one sentence."
  },

  valuation: {
    intro: "The market prices this sector as two species: aggregates monopolies as infrastructure compounders at premium multiples, cement as cyclical heavy industry at commodity multiples. The spread between them is the sector's defining valuation fact.",
    methods: [
      { name: "EV / EBITDA", use: "The standard lens: cement majors vs aggregates pure-plays, through mid-cycle earnings", avoid: "Comparing across the species line: a Vulcan multiple on a Cemex asset base misleads by 2x", strengths: "Comparable, capital-structure neutral", weaknesses: "Hides carbon liabilities and reserve depletion", range: { low: 7, high: 18, asOf: 2025, note: "cement majors 7-10x; US aggregates pure-plays 14-18x: the moat premium" } },
      { name: "EV per ton of capacity", use: "Cement asset deals and replacement-cost sanity checks", avoid: "Applying US per-ton values to oversupplied markets: a Chinese ton is not an American ton", strengths: "Cuts through cycle earnings to the asset", weaknesses: "Ignores position: the whole point of this industry", range: { low: 100, high: 300, asOf: 2025, note: "$/t cement capacity; US assets at the top, greenfield ~$250-300/t sets the ceiling" } },
      { name: "FCF yield through the cycle", use: "The discipline test: does pricing power reach shareholders after maintenance and carbon capex?", avoid: "Peak-cycle yields as normal; capture capex is about to bite EU producers", strengths: "Exposes capital-allocation truth", weaknesses: "Lumpy with kiln rebuilds and M&A", range: { low: 4, high: 8, asOf: 2025, note: "% yields; aggregates names trade at the low (expensive) end" } },
      { name: "Reserve NAV (aggregates)", use: "Valuing permitted reserves like real assets: tons times margin, discounted over decades", avoid: "Counting unpermitted acreage as reserves; permits are the asset", strengths: "Matches how strategics and PE actually bid for pits", weaknesses: "Long-duration assumptions do heavy lifting", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: deal comps for pits routinely exceed screen-based values" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a cement or aggregates producer: mid-cycle EBITDA times a position-adjusted multiple, minus net debt. Move the multiple, not the EBITDA, for the aggregates premium.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 8, step: 0.25, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 20, step: 0.5, value: 10, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -2, max: 15, step: 0.5, value: 3, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays this as a quality-spread sector: core the US aggregates monopolies as infrastructure compounders, own the disciplined global majors for the decarbonization re-rating optionality, and treat emerging-market cement as a utilization trade, not an investment. The single most important input is not tons: it is whether announced price increases stick, published twice a year in plain sight.",
    debates: [
      { topic: "Is the US aggregates premium (14-18x) justified or peak-infrastructure pricing?", bull: "These are perpetual local monopolies with 5-10 year permit walls, pricing that compounded through 2008 and COVID, and a decade of highway funding visibility: real assets with equity liquidity deserve real-asset multiples, and every private-market pit deal validates the screen price.", bear: "You are paying software multiples for rocks at the exact moment federal infrastructure money crests: volumes are already flat, price elasticity eventually exists even for stone, and a 2-point de-rating erases 5 years of pricing gains. The moat is real; the entry price assumes it never gets tested." },
      { topic: "Decarbonization: cost curse or margin moat?", bull: "CBAM walls off the EU market from unabated imports from 2026 while first movers (Brevik live, evoZero selling at premiums) turn compliance into product differentiation: carbon becomes the new freight, another local-monopoly maker that incumbents with balance sheets win.", bear: "Capture costs $100+/t CO2 against a product selling for $163/t: the math needs permanent subsidy or a green premium customers have not yet proven they will pay at scale. Meanwhile ETS costs land on schedule whether the premium shows up or not: margin compression with extra capex is the base case." },
      { topic: "Does China's overcapacity stay contained or export deflation?", bull: "Cement travels badly and China's exports are a rounding error against 1,900Mt of domestic output; closures and carbon rules will grind capacity down internally while ex-China pricing lives its own life.", bear: "Clinker ships just fine: Vietnam (~110Mt, #3 producer) already exports aggressively, Chinese-built plants across Africa and Asia chase the same trade flows, and every coastal deficit market from Houston to Lagos imports the marginal ton: the price ceiling everywhere is set by seaborne desperation." }
    ],
    cycle: {
      where: "Split-screen: the US is late-cycle on pricing but volume-flat awaiting rate cuts and the next highway bill; Europe is trough-adjacent with carbon capex looming; China is in a structural downtrend (below half of world output for the first time in a generation); India is mid-boom. Global tonnage is plateaued near 4Bt: the cycle now lives in price and mix, not volume.",
      drivers: "Housing starts and mortgage rates, public infrastructure funding cycles, energy prices (30-40% of cost), carbon policy milestones, and Chinese property construction.",
      leads: [
        "Architecture Billings Index (AIA, free): non-residential demand 9-12 months out",
        "US housing starts and permits (Census/FRED, free): the residential swing factor",
        "FHWA highway obligations and state DOT lettings (free): the public-demand pipeline",
        "USGS Mineral Industry Surveys cement shipments (free, monthly): the volume tape itself",
        "EU ETS carbon price (free quotes): the cost clock ticking toward the 2026 CBAM phase-in"
      ]
    },
    exposure: [
      { vehicle: "Vulcan / Martin Marietta class", note: "The pure aggregates monopolies: pay up for the compounding, size for the multiple risk" },
      { vehicle: "Holcim / Heidelberg Materials", note: "Global majors at cement multiples with decarbonization re-rating optionality; Heidelberg owns the CCS first-mover card" },
      { vehicle: "Amrize", note: "The June 2025 spin: pure-play North America exposure with a fresh capital-allocation story to prove" },
      { vehicle: "CRH", note: "The NYSE-listed roll-up machine: aggregates-heavy, bolt-on driven, the sector's allocation benchmark" },
      { vehicle: "Cemex / UltraTech class", note: "The EM beta sleeve: Mexico/US border economics and India's volume boom, with EM balance-sheet history to respect" }
    ],
    catalysts: [
      { when: "January and mid-year", what: "Price-increase announcements and, more importantly, realization evidence in Q1/Q3 prints" },
      { when: "Quarterly earnings", what: "Freight-adjusted pricing, cash gross profit per ton, energy cost per ton: the spread tape" },
      { when: "2026 onward", what: "CBAM definitive phase-in and ETS free-allowance cuts: the carbon P&L becomes real for EU producers" },
      { when: "US federal cycles", what: "Highway bill reauthorization and rate-cut timing: the two demand switches for the US names" }
    ],
    data: [
      { series: "Cement production & shipments", source: "USGS Mineral Industry Surveys (free)", why: "The primary volume tape, monthly, by region" },
      { series: "PPI: cement and concrete products", source: "FRED (free)", why: "Pricing regime confirmation beyond company claims" },
      { series: "Housing starts, construction spending", source: "US Census via FRED (free)", why: "The demand backdrop, residential and total" },
      { series: "EU ETS carbon price", source: "Ember / EEX public quotes (free)", why: "The decarbonization cost clock" },
      { series: "Global cement CO2 emissions", source: "Our World in Data (free)", why: "The 8%-of-global-CO2 constraint, quantified annually" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Volumes drop with construction but infrastructure funding cushions; pricing historically holds better than volume (the monopoly test). Buy the aggregates names into the de-rating, not before it." },
      { regime: "Energy spike", behavior: "30-40% of cement cost reprices against you with a lag; alternative-fuel leaders and aggregates (less energy-intense) outperform integrated cement. Price increases follow 2 quarters later." },
      { regime: "Rates falling", behavior: "The classic setup: housing starts reignite volumes on top of a locked-in pricing regime: the operating-leverage upside case for the US names." },
      { regime: "Carbon shock (ETS spike, CBAM enforcement)", behavior: "Spread trade: long capture-ready and low-clinker producers, short unabated EU exposure; watch green premiums for confirmation the moat thesis is working." }
    ]
  },

  players: [
    { name: "Holcim", role: "Global #1, post-spin", country: "CH", real: true, note: "45 markets ex-North America after spinning off Amrize (June 2025); net-zero flag-bearer" },
    { name: "Heidelberg Materials", role: "The CCS first mover", country: "DE", real: true, note: "Opened Brevik, the world's first industrial-scale cement capture plant (400,000t/yr, June 2025); sells evoZero near-zero cement" },
    { name: "Cemex", role: "The Americas ready-mix heavyweight", country: "MX", real: true, note: "Mexico-US integrated model; the sector's great deleveraging story after its 2008 near-death" },
    { name: "CRH", role: "The roll-up machine", country: "IE", real: true, note: "Moved primary listing to NYSE (2023); aggregates-heavy, bolt-on compounder, allocation benchmark" },
    { name: "Amrize", role: "The pure-play spin", country: "US", real: true, note: "Holcim's North America business, listed June 23 2025 at ~$30B (AMRZ); Jan Jenisch at the helm" },
    { name: "Vulcan Materials / Martin Marietta", role: "The US aggregates duopoly", country: "US", real: true, note: "Local stone monopolies: Vulcan's Q1 2025 cash gross profit +20% to $10.63/t on +7% pricing" },
    { name: "Anhui Conch", role: "China's scale champion", country: "CN", real: true, note: "The lowest-cost giant in a ~1,900Mt market that is structurally shrinking" },
    { name: "UltraTech Cement", role: "India's growth engine", country: "IN", real: true, note: "The leader in the world's #2 market (~450Mt) and its only major growth story" }
  ],

  geography: [
    { country: "CN", role: "Half the world's kilns", note: "~1,900Mt, just under 50% of global output (2024, USGS) and falling with the property bust" },
    { country: "IN", role: "The growth market", note: "#2 at ~450Mt; infrastructure and housing compounding while everyone else plateaus" },
    { country: "US", role: "The profit pool", note: "Import-short, pricing-disciplined (~$163/t cement, 2025); where the sector's equity value concentrates" },
    { country: "DE", role: "Heidelberg's home, carbon's frontline", note: "EU ETS and CBAM make Europe the decarbonization proving ground" },
    { country: "CH", role: "Holcim HQ", note: "The global industry's boardroom; strategy set here now runs 45 markets ex-America" },
    { country: "VN", role: "The export valve", note: "#3 producer (~110Mt) and the seaborne clinker price-setter for deficit coasts" }
  ],

  cycles: [
    { year: 2008, title: "The US housing collapse", kind: "bust", text: "US cement consumption fell roughly (40%) peak to trough as housing imploded; leveraged producers (Cemex most famously) spent a decade repairing balance sheets. Lesson: operating leverage on fixed kilns cuts both ways, and debt turns a volume cycle into a solvency event." },
    { year: 2011, title: "China's pour", kind: "boom", text: "By USGS-derived estimates China used more cement in 2011-2013 than the US did in the entire 20th century; global capacity chased the miracle. Lesson: capacity built for a supercycle outlives the supercycle: today's Chinese overhang is that boom's bill." },
    { year: 2015, title: "The Lafarge-Holcim merger", kind: "shift", text: "The mega-merger of equals capped 40 years of consolidation and mostly disappointed: synergies met culture and China met everyone. Lesson: in a local business, global scale is a headline, not a margin: position beats size." },
    { year: 2021, title: "China's property bust", kind: "bust", text: "Evergrande's default marked the turn: Chinese output slid from its ~2.4Bt peak toward ~1.9Bt, dragging global tonnage flat. Lesson: half the industry's volume was one policy regime; watch the policy, not the trendline." },
    { year: 2025, title: "Brevik and the great unbundling", kind: "shift", text: "Heidelberg opened the first industrial-scale cement CCS plant (June 2025) while Holcim spun off Amrize (~$30B): carbon strategy and American pricing became separate, ownable theses. Lesson: when one industry contains two stories, capital markets will eventually split the share classes to match." }
  ],

  risks: [
    { name: "Carbon costs outrunning green premiums", severity: 4, likelihood: 3, transmission: "ETS free allowances phase out from 2026 -> unabated EU tons carry $50+/t latent cost -> capture capex accelerates before premiums are proven -> FCF compression and de-rating for the laggards." },
    { name: "US demand air pocket", severity: 3, likelihood: 3, transmission: "Rates stay high + federal infrastructure funding crests -> volumes fall while multiples price perpetual compounding -> the aggregates premium compresses 2-4 turns -> price discipline gets its first real test in a decade." },
    { name: "Seaborne import flood", severity: 3, likelihood: 3, transmission: "Chinese/Vietnamese overcapacity seeks exits -> cheap clinker lands at coastal terminals -> import-parity pricing caps realizations in Gulf/East Coast markets -> the pricing regime frays at its edges first." },
    { name: "Energy price shock", severity: 3, likelihood: 3, transmission: "Fuel is 30-40% of cement cost -> spot-exposed kilns see margins gap down for 2+ quarters -> price increases lag costs -> spread compression until announcements catch up, if discipline holds." },
    { name: "Binder disruption", severity: 2, likelihood: 2, transmission: "Low-clinker chemistries, LC3, and novel binders scale -> clinker demand per ton of construction falls faster than volume grows -> stranded kiln capacity in high-cost regions -> though 50-year asset lives and building codes make this a 2040s risk, not a 2020s one." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Cement is the glue of the built world: limestone burned in giant kilns, ground to powder, and mixed with sand, gravel, and water to make concrete. The world produces about 4 billion tons a year, nearly half in China, and making it causes about 8% of global CO2. Because rock and cement are heavy and cheap, they cannot travel far: every quarry and plant mostly serves its own neighborhood, which is why owning the right pit in the right place is such a good business."] },
    L2: { title: "Intermediate", text: ["The economics run on weight and heat: freight kills margins beyond ~150-200 miles, so markets are local and quarry permits near growing cities are effectively monopolies (US aggregates leaders raised prices 5-7% in 2025 on flat volumes). Energy is 30-40% of cement cost, and the CO2 problem is chemical: ~60% of clinker emissions come from the calcination reaction, not the fuel. The US is the profit pool at ~$163/t; China is half the volume and almost none of the profit."] },
    L3: { title: "Advanced", text: ["Analyze the sector as two species: aggregates monopolies (price compounding over flat tons, 14-18x EBITDA) and cyclical cement (7-10x, utilization-driven). Track freight-adjusted pricing and cash gross profit per ton, not margin %: mix lies. The carbon P&L is becoming real: EU free allowances phase out from 2026 under CBAM, capture is proven but expensive (Brevik: 400,000t/yr from June 2025), and the clinker ratio is the cheapest lever. Watch whether announced price increases stick: that is the whole monopoly thesis in one data point."] },
    L4: { title: "Expert", text: ["Trade the split-screen cycle: US late-cycle pricing vs volume waiting on rates, Europe trough-plus-carbon-capex, China structurally descending, India booming. Live debates: whether the aggregates premium survives an infrastructure funding crest, whether CBAM converts carbon from cost into moat, and whether seaborne clinker (Vietnam ~110Mt and hungry) can crack coastal pricing. The 2025 unbundling (Amrize spin, CRH's US migration) says management teams believe American stone and European carbon strategy deserve separate multiples: position accordingly."] },
    L5: { title: "Institutional", text: ["Allocator's frame: this sector offers real-asset economics with equity liquidity: permitted reserves are perpetual local monopolies whose pricing has compounded through every regime since the 1990s, and private-market pit transactions keep validating public multiples. Core the aggregates compounders and size the de-rating risk honestly; own decarbonization optionality through the capture leaders rather than the laggards; treat EM cement as cyclical beta. The long thesis is simple: humanity will pour concrete for another century, the permits are finite, and the carbon constraint raises the moat for whoever solves it first."] }
  },

  quiz: [
    { q: "Global cement production in 2024 was roughly:", choices: ["400 million tons", "4.0 billion tons, with China just under half", "40 billion tons", "1 billion tons, mostly in the US"], answer: 1, explain: "USGS pegged 2024 output at ~4.0Bt; China produced ~1,900Mt (~47.5%), India ~450Mt: the first time in a generation China sits below half." },
    { q: "Cement's share of global anthropogenic CO2 is about:", choices: ["1%", "3%", "8%", "20%"], answer: 2, explain: "~8%: and roughly 60% of clinker emissions come from calcination chemistry itself, which is why you cannot fuel-switch the problem away." },
    { q: "The deepest moat in this industry is:", choices: ["Kiln technology patents", "Brand loyalty among builders", "A permitted quarry near a growing metro: zoning makes new pits nearly impossible", "Government price supports"], answer: 2, explain: "Low value-to-weight means ~150-200 mile markets; permits take 5-10 years and neighbors say no. The rock is common; the permission is the monopoly." },
    { q: "Brevik, opened by Heidelberg Materials in June 2025, matters because it is:", choices: ["The world's largest cement plant", "The first industrial-scale carbon capture plant in cement: 400,000t CO2/yr, ~50% of plant emissions", "A new type of kiln", "China's first export terminal"], answer: 1, explain: "Brevik proved cement CCS at industrial scale, with CO2 stored under the North Sea and the output sold as evoZero near-zero cement." },
    { q: "Vulcan's Q1 2025 print (prices +7%, cash gross profit per ton +20%) illustrates:", choices: ["Volume growth economics", "The local-monopoly model: price compounds while volume merely oscillates", "Currency effects", "Cost inflation destroying margins"], answer: 1, explain: "US aggregates is a price-over-volume business: flat tons, compounding spread: the reason pure-plays trade at 14-18x while cement gets 7-10x." },
    { q: "Roughly what share of cement production cost is energy?", choices: ["5%", "30-40%", "70%", "90%"], answer: 1, explain: "Fuel and power run 30-40% of cost: which is why kilns burn petcoke, tires, and sorted waste, and why energy shocks hit margins for 2+ quarters." },
    { q: "Holcim's June 2025 spin-off of Amrize (~$30B) was a bet that:", choices: ["Cement demand is ending", "North American pricing and infrastructure deserve their own multiple, separate from the global carbon story", "China would recover", "Aggregates are obsolete"], answer: 1, explain: "The unbundling (echoing CRH's NYSE move) split the sector's two theses: American stone economics and European decarbonization strategy: into separately ownable stories." },
    { q: "The clinker-to-cement ratio matters because:", choices: ["Higher is always better", "It is only a quality metric", "Every point of reduction cuts CO2 and fuel cost together: the cheapest decarbonization lever", "Regulators fix it globally"], answer: 2, explain: "Substituting slag, fly ash, and calcined clay for clinker (global average ~0.74) is the rare lever where the green move and the margin move are the same move." }
  ],

  sources: [
    { name: "Global Cement Top 100 2026 / USGS production data", url: "https://www.globalcement.com/magazine/articles/1390-global-cement-top-100-2026", feeds: "production volumes, country shares" },
    { name: "Heidelberg Materials Brevik CCS opening (June 18, 2025)", url: "https://www.heidelbergmaterials.com/system/files/2025-06/HM_EN_20250618.pdf", feeds: "decarbonization, CCS" },
    { name: "Holcim: completion of Amrize spin-off (June 2025)", url: "https://www.holcim.com/media/media-releases/holcim-completes-spin-off-of-north-america-business", feeds: "corporate structure, strategy" },
    { name: "Vulcan Materials Q1 2025 results", url: "https://stocktitan.net/news/VMC/vulcan-reports-first-quarter-2025-ttpr28o7v29m.html", feeds: "US pricing, unit economics" }
  ]
};
