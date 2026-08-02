/* Industry Atlas - RAIL (full module, research-backed)
 * Anchors: UNP FY2024 revenue $24.3B and 59.9% operating ratio (UNP 4Q24 release, Jan 23, 2025);
 * BNSF FY2024 revenue $23.4B (BNSF 4Q24 performance summary); CSX FY2024 revenue $14.5B,
 * operating margin 36.1% (CSX 4Q24 release, Jan 23, 2025); 6 Class I railroads = ~94% of US
 * freight rail revenue (AAR); real rail rates 44% below 1981 levels in 2024 (AAR); rail ~4-5
 * cents per ton-mile vs truck 15-25 cents (BTS); trucking 72.7% of US tonnage (ATA 2025);
 * UNP-NS merger at $85B enterprise value, announced Jul 29, 2025, STB review to 1H 2027
 * (NS investor release; STB filings); China HSR 48,000 km end-2024, ~70% of world total,
 * 60,000 km target by 2030 (SCMP, Jan 2025); EU 8.3B national rail trips 2024 (Eurostat). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["rail"] = {
  meta: {
    id: "rail", name: "Rail", sector: "industrials", status: "full",
    tagline: "Land monopolies on steel wheels: 4 cents a ton-mile, 60% operating ratios, and rights-of-way nobody can rebuild.",
    marketSize: { value: 90, unit: "$B", asOf: 2024, note: "North American Class I freight revenue (UNP $24.3B, BNSF $23.4B, CSX $14.5B of it); global rail incl. passenger and equipment is several hundred $B more" },
    cagr: { value: 3, range: [1, 5], horizon: "2024-2030" },
    maturity: "mature", cyclicality: 3, capitalIntensity: 5, regulation: 4, disruption: 2
  },
  newsQuery: '("Union Pacific" OR "Norfolk Southern" OR BNSF OR CSX OR "freight rail" OR intermodal OR "high-speed rail")',

  overview: {
    definition: "Rail moves the heaviest things civilization needs (coal, grain, chemicals, cars, containers) over private steel networks assembled in the 19th century and impossible to replicate today. In the US it is 6 freight companies earning some of the best margins in industrials; in Europe and Asia it is mostly a state-run passenger utility.",
    howItWorks: [
      "The structure is a set of regional duopolies wearing a national industry's name: Union Pacific and BNSF split the American West, CSX and Norfolk Southern split the East, CN and CPKC run Canada and (via CPKC) the only single-line network touching Canada, the US, and Mexico. These 6 Class I railroads (the 2024 revenue threshold is $1.07B) carry ~94% of US freight rail revenue on ~67% of the mileage; roughly 600 short lines feed them. The moat is the land itself: contiguous rights-of-way granted or assembled over 150 years that no amount of capital could reassemble.",
      "The economics are a physics dividend: steel wheel on steel rail moves a ton for roughly 4-5 cents per ton-mile (BTS) against 15-25 cents by truck, and a train moves a ton around 500 miles on a gallon of diesel (AAR). Rail wins bulk and distance (intermodal is competitive on roughly 700-2,500 mile lanes); trucks win speed, flexibility, and the first and last mile, which is why trucking still hauls 72.7% of US tonnage (ATA, 2025). The railroad's product is not transportation exactly: it is the cheapest ton-mile on land, sold to anyone whose freight can wait a day.",
      "The P&L is volume times price over a heavily fixed cost base. Volume is carloads and revenue ton-miles, published weekly (AAR data is free and traders watch it); price is revenue per ton-mile, where deregulation did its work: the Staggers Act of 1980 freed rates, and inflation-adjusted rail rates in 2024 sat 44% below 1981 levels (AAR) even as the industry went from near-ruin to rich profitability. The modern margin machine is precision scheduled railroading (PSR): run fewer, longer, scheduled trains, sweat every asset, and drive the operating ratio (expenses over revenue, the industry's scoreboard) from the high 70s toward 60%. Union Pacific printed a 59.9% OR on $24.3B of revenue in 2024; CSX ran a 36.1% operating margin; Norfolk Southern's adjusted OR was 65.8%.",
      "The passenger world is a different industry sharing the track gauge. China built 48,000 km of high-speed rail by end-2024 (roughly 70% of everything on Earth) and is targeting 60,000 km by 2030; EU passengers took 8.3B national train trips in 2024 (Eurostat). Almost all of it is state-funded infrastructure policy, not a profit pool. The investable action stays in North American freight, where the endgame arrived in July 2025: Union Pacific's $85B bid for Norfolk Southern, a play to create the first true transcontinental railroad, now grinding through Surface Transportation Board review toward a hoped-for 1H 2027 close."
    ],
    history: [
      { era: "1830-1900", title: "The first network age", text: "Land grants, the 1869 transcontinental, and railway manias: railroads invent the modern corporation, the stock market's plumbing, and time zones, then overbuild into repeated panics." },
      { era: "1900-1970", title: "Regulated decline", text: "ICC rate regulation meets the interstate highway and the truck; railroads rot under price controls until Penn Central's 1970 collapse, then the largest bankruptcy in US history." },
      { era: "1980-2000", title: "Staggers rebirth", text: "The 1980 Staggers Act deregulates rates; ~40 Class I's consolidate toward a handful; real rates fall (44% below 1981 by 2024) while the industry returns to health: dereg's cleanest win." },
      { era: "2000-2015", title: "The compounder era", text: "Coal and China trade fill the networks; Buffett's Berkshire buys BNSF outright in 2010 for ~$44B, calling it an all-in wager on America; rails re-rate as toll-road equities." },
      { era: "2015-present", title: "PSR and the endgame", text: "Hunter Harrison's precision scheduled railroading sweeps the industry, driving ORs toward 60%; CPKC's 2023 merger creates the first USMCA single-line network; UNP bids $85B for NS in 2025 to build the first transcontinental." }
    ],
    trends: [
      { title: "PSR: margin peak or plateau", direction: "shift", text: "Operating ratios near 60% (UNP 59.9% in 2024) leave little fat; the frontier has moved from cutting cost to growing volume without giving the OR back: service quality is the new religion." },
      { title: "Coal's structural decline", direction: "down", text: "Once the anchor commodity, US coal volumes shrink with every utility retirement; every railroad is racing to replace high-margin coal tons with intermodal and industrial freight." },
      { title: "Intermodal share-taking", direction: "up", text: "Containerized rail is the growth story: 6%+ CAGR as shippers convert 700-2,500 mile truck lanes; the constraint is service reliability, not price." },
      { title: "The merger endgame", direction: "shift", text: "UNP-NS at $85B would create the first coast-to-coast US railroad and force the remaining players to respond; the STB, the unions, and 2 years of review stand between announcement and a new map." },
      { title: "Passenger renaissance abroad", direction: "up", text: "China pushes toward 60,000 km of HSR by 2030; Europe subsidizes modal shift from air and road. State capital, not shareholder returns, but it drives the global equipment order book (CRRC, Alstom, Siemens)." }
    ],
    outlook: "A mature, consolidated toll-road industry compounding GDP-plus earnings through price discipline and buybacks, with 2 live swing factors: whether the UNP-NS merger clears and re-draws the map (forcing a BNSF-CSX response), and whether intermodal service gets good enough to take structural share from trucking. Coal's decline is the slow leak; pricing power and irreplaceable networks are the reasons the leak has never sunk the boat."
  },

  structure: {
    suppliers: [
      { name: "Locomotive builders (Wabtec, Progress Rail/Caterpillar)", note: "A duopoly selling the power; overhauls and parts are the annuity" },
      { name: "Railcar makers & lessors (Greenbrier, Trinity, GATX)", note: "Cyclical car-building plus steadier leasing fleets" },
      { name: "Track, signaling & control (Siemens Mobility, Alstom, Hitachi Rail)", note: "Rail, ties, PTC and signaling: the safety-critical electronics layer" },
      { name: "Fuel (diesel)", note: "A top-3 cost line, hedged imperfectly and passed through via surcharges with a lag" }
    ],
    producers: [
      { name: "Western duopoly (Union Pacific, BNSF)", note: "$24.3B and $23.4B of 2024 revenue respectively; the richest franchises in ground transport" },
      { name: "Eastern duopoly (CSX, Norfolk Southern)", note: "$14.5B and ~$12B revenue; NS now the $85B merger target" },
      { name: "Canada (CN, CPKC)", note: "CPKC's 2023 merger built the only single-line Canada-US-Mexico network" },
      { name: "Passenger operators (Amtrak, SNCF, DB, JR, China Railway, Brightline)", note: "Mostly state-owned; Brightline and the JRs are the private exceptions" }
    ],
    distributors: [
      { name: "Intermodal marketing companies (J.B. Hunt, Hub Group)", note: "Sell rail capacity wrapped in truck-like service; rail's retail channel" },
      { name: "Transload & port terminals", note: "Where boxes, grain, and chemicals change modes; the friction point" }
    ],
    customers: [
      { name: "Utilities & coal shippers", note: "The declining anchor: high margin, captive, shrinking" },
      { name: "Agriculture, chemicals, autos, aggregates", note: "The industrial carload core; often single-served and rate-sensitive" },
      { name: "Retail & import supply chains (intermodal)", note: "The growth customer: containers off ships and off highways" }
    ],
    regulators: [
      { name: "Surface Transportation Board (STB)", note: "Rates, service disputes, and mergers: the UNP-NS decision sits here" },
      { name: "Federal Railroad Administration (FRA)", note: "Safety, crew, and equipment rules; post-East Palestine scrutiny" },
      { name: "Transport Canada / EU agencies", note: "Canadian network rules; Europe's open-access passenger regime" }
    ],
    capital: [
      { name: "Investment-grade bond markets", note: "Long-dated debt against long-dated assets; rails are core IG issuers" },
      { name: "Berkshire Hathaway", note: "Owns BNSF outright since 2010 (~$44B): the sector's permanent-capital benchmark" },
      { name: "Governments & infrastructure funds", note: "Fund nearly all passenger rail; HSR is fiscal policy in steel" }
    ]
  },

  valueChain: {
    intro: "From rolled steel to a delivered container. The network operator captures most of the value because it owns the one asset that cannot be duplicated: the right-of-way.",
    stages: [
      { id: "equipment", name: "Locomotives & rolling stock", what: "Locomotives, freight cars, passenger trainsets", players: "Wabtec, Progress Rail, Greenbrier, Trinity, CRRC, Alstom, Siemens", valueCapture: 3,
        economics: { grossMargin: [15, 25], capitalIntensity: 4, concentration: 4 },
        linksTo: ["manufacturing", "steel"],
        deeper: "A locomotive duopoly (Wabtec, Progress Rail) with an aftermarket annuity in overhauls, plus a boom-bust railcar building cycle. CRRC, built on China's HSR program, is the world's largest rolling-stock maker and the West's excluded competitor." },
      { id: "infrastructure", name: "Track, signaling & maintenance-of-way", what: "Rail, ties, ballast, bridges, PTC and dispatch systems", players: "Class I engineering budgets, Siemens Mobility, Alstom, Hitachi Rail, MoW contractors", valueCapture: 2,
        economics: { grossMargin: [10, 20], capitalIntensity: 5, concentration: 3 },
        linksTo: ["construction", "steel"],
        deeper: "In North America the freight railroads own and maintain their own track, spending 15-20% of revenue on capex forever; in Europe and Asia the state owns the infrastructure. Positive train control turned signaling into a software-and-sensors business." },
      { id: "freight-ops", name: "Freight network operations", what: "Running scheduled trains across owned networks: the profit core", players: "UNP, BNSF, CSX, NS, CN, CPKC", valueCapture: 5,
        economics: { grossMargin: [40, 55], capitalIntensity: 5, concentration: 5 },
        linksTo: ["logistics", "mining", "agriculture"],
        deeper: "Six firms, ~94% of US freight rail revenue, operating ratios near 60% (UNP: 59.9% in 2024). Pricing power comes from captive shippers and the 15-25 cent truck alternative; the STB is the only real ceiling. This is where PSR concentrated the industry's economics." },
      { id: "intermodal", name: "Intermodal & first/last mile", what: "Containers and trailers on flatcars, drayage, terminals", players: "J.B. Hunt, Hub Group, railroad intermodal arms, port operators", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 3, concentration: 3 },
        linksTo: ["logistics", "shipping", "ecommerce"],
        deeper: "The growth franchise: rail line-haul at 6-9 cents per ton-mile wrapped in truck-like door-to-door service. Wins on lanes of roughly 700-2,500 miles when service is reliable; every service meltdown hands lanes back to the highway." },
      { id: "passenger", name: "Passenger operations", what: "Commuter, intercity, and high-speed service", players: "China Railway, SNCF, DB, JR East/Central, Amtrak, Brightline", valueCapture: 1,
        economics: { grossMargin: [0, 10], capitalIntensity: 5, concentration: 4 },
        linksTo: ["government", "tourism"],
        deeper: "Economically a public utility: China's 48,000 km HSR network and Europe's 8.3B annual trips run on state balance sheets. The exceptions that prove profitability is possible: Japan's privatized JRs (dense corridors plus real estate) and Brightline's Florida experiment." },
      { id: "leasing-finance", name: "Railcar leasing & finance", what: "Owning fleets and financing equipment", players: "GATX, Trinity's lease fleet, Wells Fargo Rail, banks", valueCapture: 3,
        economics: { grossMargin: [30, 45], capitalIntensity: 5, concentration: 3 },
        linksTo: ["banking", "capital-markets"],
        deeper: "Roughly half of North American freight cars are leased. Lessors earn spread on 40-year steel assets with utilization and lease-rate cycles; it is the sector's closest thing to a specialty-finance business." }
    ]
  },

  financials: {
    businessModel: [
      "The model is a toll road with an engineering department: revenue = volume (carloads, revenue ton-miles) x price (revenue per RTM, plus fuel surcharges), set against a cost base that is heavily fixed: track, crews, locomotives. That mix creates violent operating leverage in both directions, which is why the operating ratio is the industry's single scoreboard: UNP's 59.9% (2024) versus NS's adjusted 65.8% is the gap the $85B merger math intends to close. PSR's contribution was to prove the fixed base could be permanently smaller: fewer, longer, scheduled trains and sweated assets.",
      "Cash follows a stern rhythm: 15-20% of revenue goes back into the track every year, forever, before a dollar reaches shareholders; what remains funds the sector's steady buyback-and-dividend machine. Pricing above rail-cost inflation is the compounding engine (deregulated since Staggers in 1980), and mix is the silent variable: a lost coal ton was the most profitable ton, and the intermodal box replacing it carries thinner margin. Watch price versus cost inflation, OR trajectory, and whether volume growth is finally real."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 55, capitalIntensity: 90, pricingPower: 70, cyclicality: 60, operatingLeverage: 75 },
    lines: [
      { label: "Volumes (carloads & RTMs)", note: "Published weekly by the AAR: the free real-time tape on industrial America" },
      { label: "Revenue per RTM (price/mix)", note: "The compounding engine; must outrun rail cost inflation" },
      { label: "Operating ratio", note: "Expenses / revenue: the scoreboard. Sub-60% is elite (UNP 59.9%, 2024)" },
      { label: "Fuel & surcharges", note: "A top-3 cost passed through with a lag; swings quarters, not theses" },
      { label: "Capex & free cash flow", note: "15-20% of revenue into the network annually; FCF funds buybacks" }
    ],
    unitEconomics: {
      unit: "per ton-mile (US Class I freight, illustrative)",
      items: [
        { label: "Rail revenue per ton-mile", value: "~4-5 cents", note: "BTS average for Class I freight" },
        { label: "Truck comparison", value: "~15-25 cents", note: "rail's structural price umbrella on long-haul lanes" },
        { label: "Operating cost per ton-mile", value: "~2.5-3 cents", note: "implied by a ~60% operating ratio" },
        { label: "Fuel efficiency", value: "~500 ton-miles per gallon", note: "roughly 3-4x truck efficiency (AAR)" }
      ]
    }
  },

  kpiRefs: ["avia-rasm-casm", "avia-load-factor"],
  kpiLocal: [
    {
      id: "rail-operating-ratio", name: "Operating Ratio (OR)", industries: ["rail"],
      definition: "Operating expenses as a share of revenue: the rail industry's headline efficiency metric, where lower is better.",
      formula: "OR = operating expenses / operating revenue",
      interpretation: "The PSR era reset the bar: UNP printed 59.9% for full-year 2024 while NS ran an adjusted 65.8%. Every 100bps of OR is roughly 1 point of operating margin on a largely fixed cost base.",
      healthy: "Falling OR with service metrics intact", warning: "OR improvement bought with service cuts that leak volume to trucks" },
    {
      id: "rail-velocity-dwell", name: "Train Velocity & Terminal Dwell", industries: ["rail"],
      definition: "Average train speed and hours a car sits in terminals: the service-quality vitals every US Class I reports to the STB weekly (free public data).",
      formula: "Velocity = train-miles / train-hours; dwell = avg hours per car at terminals",
      interpretation: "Fluidity is capacity: faster trains and lower dwell mean the same physical network carries more freight with fewer assets. Deterioration precedes lost intermodal share and shipper complaints at the STB.",
      healthy: "Velocity rising, dwell falling, embargoes rare", warning: "Slowing velocity + rising dwell: congestion compounding into a service meltdown" }
  ],

  health: {
    intro: "Rail health is network fluidity first (service is capacity), then the price-versus-mix engine, then whether the OR is being earned or borrowed from the franchise.",
    pillars: [
      { name: "Network fluidity & service", weight: 25, metrics: "Velocity, dwell, on-time performance, embargo frequency", healthy: "Fluid network absorbing volume growth", warning: "Congestion spirals; STB service complaints (the 2022 pattern)" },
      { name: "Pricing power", weight: 20, metrics: "Revenue per RTM vs rail cost inflation, contract renewals", healthy: "Price consistently above cost inflation", warning: "Discounting to win volume; regulatory rate pressure" },
      { name: "Cost & OR discipline", weight: 20, metrics: "Operating ratio trend, headcount productivity, fuel efficiency", healthy: "OR flat-to-falling near 60% with volume growth", warning: "OR rising on flat volume: leverage working in reverse" },
      { name: "Franchise & mix", weight: 20, metrics: "Coal exposure, intermodal growth, industrial development wins", healthy: "Intermodal and industrial gains outpacing coal decline", warning: "Coal-heavy book with no replacement pipeline" },
      { name: "Safety & regulatory posture", weight: 15, metrics: "Derailment rates, hazmat incidents, FRA/STB relations", healthy: "Improving safety stats, constructive regulator ties", warning: "A high-profile derailment (East Palestine template): years of cost and scrutiny" }
    ],
    scoringNote: "The trap score is a falling OR with falling service metrics: that is margin borrowed from the franchise, and trucking collects the loan."
  },

  valuation: {
    intro: "Rails price as infrastructure compounders: steady multiples on cyclical-but-recovering earnings, with franchise scarcity as the floor and regulation as the ceiling.",
    methods: [
      { name: "EV / EBITDA", use: "The standard cross-rail comp; normalizes leverage and depreciation policies", avoid: "Peak-coal or trough-volume years without normalizing", strengths: "Comparable across the 6 Class I's", weaknesses: "Ignores capex intensity differences", range: { low: 10, high: 14, asOf: 2025, note: "quality western franchises at the top; merger arb distorts NS" } },
      { name: "P/E on normalized EPS", use: "The long-hold compounder lens; buybacks make per-share math the story", avoid: "Using it through a service meltdown or fuel spike quarter", strengths: "Matches how the market actually trades rails", weaknesses: "OR assumptions buried inside E", range: { low: 16, high: 22, asOf: 2025, note: "Berkshire paid ~18x for BNSF in 2010; the band has held" } },
      { name: "FCF yield after full capex", use: "The honest lens: 15-20% of revenue reinvests before shareholders see cash", avoid: "EBITDA-based shortcuts that ignore the perpetual track bill", strengths: "Cuts through capital intensity", weaknesses: "Capex cycles lump; growth vs maintenance blurs", range: { low: 3, high: 5, asOf: 2025, note: "% yields; rails trade rich because the cash is durable" } },
      { name: "Franchise / replacement value", use: "Sanity check: the rights-of-way are literally irreplaceable", avoid: "Treating it as a precise number: nobody can rebuild the asset to test it", strengths: "Explains why rails never trade cheap for long", weaknesses: "Qualitative anchor only", range: { low: 0, high: 0, asOf: 2025, note: "the $85B UNP-NS bid is the latest market print on franchise scarcity" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a Class I quickly: normalized EBITDA times an infrastructure multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 1, max: 15, step: 0.5, value: 8, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 16, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: 0, max: 40, step: 1, value: 20, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns rails as irreplaceable-asset compounders: long the best-run western franchise and the intermodal share-taking story, trade the eastern duopoly around the merger, and treat the weekly AAR carload tape as a free macro instrument. The sector's alpha questions are execution questions: who runs a fluid network, who prices above inflation, and who wins the STB's blessing.",
    debates: [
      { topic: "UNP-NS: value creation or a 2-year regulatory quagmire?", bull: "A transcontinental single-line network eliminates interchange friction on thousands of lanes: ~$2.75B of claimed synergies, real service gains for shippers, and first-mover advantage in the industry's final consolidation. The STB approved CPKC; the template exists.", bear: "An $85B bet fought by every major union, scrutinized by shippers and politicians, under a merger standard (public interest, enhanced competition) never tested at this scale. Two years of management distraction while BNSF and CSX plot the response, and a rejection leaves UNP paying breakage for a map that never changes." },
      { topic: "PSR: durable operating model or franchise erosion in disguise?", bull: "PSR permanently reset the cost base: ORs went from the high 70s to ~60% and stayed there through COVID, a freight recession, and a merger cycle. Scheduled operation is simply better railroading, and the volume-growth phase is now beginning on a leaner network.", bear: "The cuts went through muscle: the 2022 service crisis, crew shortages, and shipper fury at the STB were PSR's bill arriving. Every OR record bought with slower, less reliable service leaks freight to trucks, and the leaked lane rarely comes back." },
      { topic: "Intermodal: structural share-taker or perennial promise?", bull: "The economics are unarguable: 6-9 cents per ton-mile against a 15-25 cent truck on 700-2,500 mile lanes, 3-4x fuel efficiency, and retail supply chains hungry for cost. Every point of truck conversion is a decade of volume growth.", bear: "Shippers buy reliability, not ton-mile math: intermodal share has promised a breakout for 30 years, and each service meltdown (2014, 2022) resets the trust clock. Cheap trucking in loose markets undercuts the spread exactly when rails need the volume." }
    ],
    cycle: {
      where: "Mid-cycle industrially, late-cycle structurally: freight volumes grinding sideways with the industrial economy, ORs near historic bests with little cost left to cut, and the sector's map awaiting the STB's UNP-NS ruling (expected path to a 1H 2027 close). The next leg is volume growth or consolidation, not more cost-out.",
      drivers: "Industrial production and imports (volumes), coal burn and exports (the declining anchor), truck spot rates (the competing price), diesel, and regulatory posture on mergers and service.",
      leads: [
        "AAR weekly rail traffic report (free, Wednesdays): carloads and intermodal units",
        "STB weekly service metrics (free): velocity and dwell by railroad",
        "Truck spot rates and ATA tonnage: the competing mode's price signal",
        "ISM manufacturing PMI and imports data: the volume backdrop",
        "EIA diesel prices (free, weekly): the surcharge and margin swing factor"
      ]
    },
    exposure: [
      { vehicle: "Union Pacific", note: "The premium western franchise: 59.9% OR, now betting $85B on the transcontinental endgame" },
      { vehicle: "CSX / Norfolk Southern", note: "The eastern duopoly: CSX the operator, NS the merger arb with STB risk attached" },
      { vehicle: "CN / CPKC", note: "Canadian compounders; CPKC's Mexico single-line is the USMCA re-shoring trade" },
      { vehicle: "Equipment & leasing complex (Wabtec, Greenbrier, GATX)", note: "Locomotive duopoly economics and railcar cycles: rail beta without STB exposure" },
      { vehicle: "Berkshire Hathaway", note: "The only access to BNSF: rail as permanent capital inside a conglomerate" }
    ],
    catalysts: [
      { when: "Weekly (Wednesdays)", what: "AAR traffic data: the free real-time freight tape" },
      { when: "Quarterly earnings", what: "OR trajectory, price vs cost inflation, intermodal growth, merger commentary" },
      { when: "STB milestones through 2026-2027", what: "UNP-NS review rulings: the sector's map-redrawing decision" },
      { when: "Fall peak season & winter", what: "Harvest, import peak, and coal burn: the seasonal volume swing" }
    ],
    data: [
      { series: "AAR weekly rail traffic", source: "aar.org (free)", why: "Carloads and intermodal: the primary volume tape" },
      { series: "STB rail service metrics", source: "stb.gov (free)", why: "Velocity, dwell, and the merger docket: primary regulatory source" },
      { series: "BTS freight statistics", source: "bts.gov (free)", why: "Modal cost and ton-mile share: the rail-vs-truck economics baseline" },
      { series: "EIA diesel prices", source: "eia.gov (free, weekly)", why: "The fuel surcharge and margin swing factor" },
      { series: "Eurostat rail transport statistics", source: "ec.europa.eu/eurostat (free)", why: "The passenger world's volumes: 8.3B EU trips in 2024" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Volumes fall mid-to-high single digits and operating leverage bites in reverse; but pricing holds, capex flexes, and rails historically re-rate early on the recovery trade." },
      { regime: "Oil spike", behavior: "Surcharges lag then catch up (a 1-2 quarter margin dent); the competitive gift is bigger: expensive diesel widens rail's 3-4x fuel-efficiency edge over trucks and accelerates conversion." },
      { regime: "Rates rising", behavior: "Bond-proxy derating at the multiple line; operations barely notice: IG balance sheets, long-dated debt, and pricing power make rails one of industrial's better inflation hedges." },
      { regime: "Trade shock", behavior: "Intermodal is the transmission line: import tariffs hit western intermodal volumes directly, while near-shoring to Mexico reroutes freight onto CPKC's single-line network. Domestic carload freight barely moves." }
    ]
  },

  players: [
    { name: "Union Pacific", role: "Western franchise leader", country: "US", real: true, note: "$24.3B revenue and 59.9% OR in 2024; the $85B NS bid makes it the endgame's protagonist" },
    { name: "BNSF", role: "The Berkshire railroad", country: "US", real: true, note: "$23.4B revenue in 2024; bought outright by Berkshire in 2010 for ~$44B" },
    { name: "CSX", role: "Eastern duopolist", country: "US", real: true, note: "$14.5B revenue, 36.1% operating margin in 2024: the East's PSR standard-bearer" },
    { name: "Norfolk Southern", role: "The merger target", country: "US", real: true, note: "Adjusted OR 65.8% in 2024; valued at $85B enterprise value in UNP's bid" },
    { name: "CN / CPKC", role: "Canadian Class I's", country: "CA", real: true, note: "CPKC's 2023 merger created the only single-line Canada-US-Mexico railroad" },
    { name: "China State Railway / CRRC", role: "The passenger colossus", country: "CN", real: true, note: "48,000 km of HSR (70% of the world's) and the largest rolling-stock maker on Earth" },
    { name: "SNCF / Deutsche Bahn", role: "Europe's state incumbents", country: "FR", real: true, note: "TGV and ICE networks; Europe's 8.3B annual trips run mostly on state balance sheets" },
    { name: "Wabtec / Greenbrier / GATX", role: "Equipment & leasing complex", country: "US", real: true, note: "Locomotive duopoly economics, railcar building cycles, and 40-year lease assets" }
  ],

  geography: [
    { country: "US", role: "The freight profit pool", note: "6 Class I's, ~94% of freight rail revenue, the world's best rail margins" },
    { country: "CA", role: "The northern duopoly", note: "CN and CPKC link Canadian resources to US and Mexican markets" },
    { country: "CN", role: "HSR superpower", note: "48,000 km of high-speed track, targeting 60,000 km by 2030; CRRC exports the model" },
    { country: "DE", role: "Europe's rail crossroads", note: "DB's network anchors EU freight corridors; Siemens Mobility builds the trains" },
    { country: "JP", role: "The profitable passenger exception", note: "Privatized JRs mint money on dense corridors plus real estate: the Shinkansen model" },
    { country: "IN", role: "The volume giant", note: "Indian Railways moves billions of passengers yearly and is modernizing freight corridors" }
  ],

  cycles: [
    { year: 1869, title: "The transcontinental", kind: "boom", text: "The golden spike links the coasts; railway manias follow, overbuilding networks that repeatedly collapse into receivership. Lesson: transformative infrastructure and shareholder returns are different things." },
    { year: 1970, title: "Penn Central collapses", kind: "bust", text: "The largest US bankruptcy of its era: rate regulation plus highway competition rots the industry from inside. Lesson: price controls can kill even a monopoly." },
    { year: 1980, title: "The Staggers Act", kind: "shift", text: "Deregulation frees rates; ~40 Class I's consolidate to a handful, real rates fall 44% (by 2024) and profits return. Lesson: pricing freedom, not subsidy, rebuilt American rail." },
    { year: 2010, title: "Berkshire buys BNSF", kind: "shift", text: "Buffett pays ~$44B for the whole railroad, calling it an all-in wager on America's future. Lesson: permanent capital recognized the moat before the market repriced the sector." },
    { year: 2025, title: "The $85B endgame opens", kind: "shift", text: "UNP bids $85B for NS to build the first true transcontinental; unions object, the STB deliberates into 2027. Lesson: in a 6-player industry, the last mergers are the biggest and the hardest." }
  ],

  risks: [
    { name: "Merger failure or forced conditions", severity: 3, likelihood: 3, transmission: "STB rejects or burdens UNP-NS -> breakage costs and strategy vacuum -> sector-wide multiple reset as the consolidation thesis dies." },
    { name: "Coal decline accelerating", severity: 3, likelihood: 4, transmission: "Faster utility retirements -> the highest-margin captive tons vanish -> mix degradation that intermodal growth only partly replaces." },
    { name: "Catastrophic derailment / hazmat event", severity: 4, likelihood: 3, transmission: "An East Palestine-scale incident -> well over $1B in charges, FRA crackdown, and political momentum for restrictive legislation industry-wide." },
    { name: "Autonomous trucking", severity: 4, likelihood: 2, transmission: "Driverless trucks cut highway cost per mile -> rail's 700-2,500 mile lane advantage compresses -> the structural price umbrella folds on intermodal first." },
    { name: "Service meltdown repeating", severity: 3, likelihood: 3, transmission: "Lean PSR networks hit a demand surge -> congestion spiral, embargoes, STB hearings -> emergency hiring destroys the OR while shippers re-sign with trucks." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Trains move heavy things cheaply: about 4-5 cents to move a ton 1 mile, versus 15-25 cents by truck. In the US, 6 big freight railroads own their own tracks and earn excellent profits; in Europe and China, rail is mostly government-run passenger service. The US networks were assembled 150 years ago and could never be rebuilt, which is why these companies are often called toll roads on steel wheels."] },
    L2: { title: "Intermediate", text: ["The scoreboard is the operating ratio: expenses over revenue, where Union Pacific's 59.9% (2024) is the elite standard. Deregulation (the 1980 Staggers Act) let railroads price freely: real rates fell 44% from 1981 while profits soared. Growth comes from intermodal (containers taking 700-2,500 mile lanes from trucks); decline comes from coal. The industry reinvests 15-20% of revenue in its track every year, forever, and returns the rest via buybacks."] },
    L3: { title: "Advanced", text: ["Model volume (weekly AAR carloads, free), price (revenue per RTM vs rail cost inflation), and the fixed-cost leverage that makes ORs swing hard both ways. PSR reset the cost base but created a service-quality tension: velocity and dwell (STB weekly data) tell you whether margin is earned or borrowed from the franchise. Mix matters as much as volume: a lost coal ton was the most profitable ton on the network."] },
    L4: { title: "Expert", text: ["Trade the merger endgame: UNP's $85B bid for NS (announced July 2025, STB review toward 1H 2027) would create the first transcontinental and force a BNSF-CSX response; the arb prices regulatory risk, union opposition, and an untested merger standard. Live debates: PSR durability vs franchise erosion, intermodal's structural breakout, and whether autonomous trucking ever compresses the ton-mile spread. The weekly AAR tape and STB service metrics are free, high-frequency edges."] },
    L5: { title: "Institutional", text: ["Allocator's frame: rails are the purest irreplaceable-asset compounders in industrials: physical monopolies with pricing power, 3-5% FCF yields after full reinvestment, and a century of evidence the moat holds (Berkshire's ~$44B BNSF take-private is the benchmark underwriting). Size around the two structural uncertainties: consolidation's regulatory ceiling and the terminal value of coal. The passenger world (China's 48,000 km HSR, Europe's state networks) is policy, not portfolio: play it through equipment makers if at all."] }
  },

  quiz: [
    { q: "Moving 1 ton 1 mile by rail costs roughly:", choices: ["The same as trucking", "4-5 cents, vs 15-25 cents by truck: rail's structural cost edge", "50 cents", "More than air freight"], answer: 1, explain: "Steel wheel on steel rail is a physics dividend (BTS data): rail wins bulk and long distance; trucks win speed and the last mile." },
    { q: "The rail industry's headline efficiency metric is:", choices: ["Load factor", "The operating ratio: expenses over revenue, where UNP's 59.9% (2024) is elite", "Same-store sales", "Book-to-bill"], answer: 1, explain: "Lower is better: PSR drove ORs from the high 70s toward 60%, transforming rail profitability over a decade." },
    { q: "The 1980 Staggers Act:", choices: ["Nationalized the railroads", "Deregulated rates: real prices fell 44% by 2024 while the industry returned to health", "Banned mergers", "Created Amtrak"], answer: 1, explain: "Deregulation is the industry's founding modern event: pricing freedom plus consolidation rebuilt American freight rail." },
    { q: "Precision scheduled railroading (PSR) means:", choices: ["More trains, more often", "Fewer, longer, scheduled trains and sweated assets: the margin machine with a service-quality tension", "Government scheduling", "Passenger priority"], answer: 1, explain: "PSR reset the cost base industry-wide; the bear case is that OR gains bought with service cuts leak freight to trucks." },
    { q: "In July 2025, Union Pacific bid for Norfolk Southern at:", choices: ["$10B", "$85B enterprise value: a play to create the first US transcontinental railroad", "$500B", "It bought CSX instead"], answer: 1, explain: "The bid opened the industry's endgame; STB review, union opposition, and a hoped-for 1H 2027 close define the arb." },
    { q: "China's high-speed rail network at end-2024 was roughly:", choices: ["5,000 km", "48,000 km: about 70% of the world's HSR, targeting 60,000 km by 2030", "500 km", "Equal to the US network"], answer: 1, explain: "The build-out is state industrial policy in steel; it also built CRRC into the world's largest train maker." },
    { q: "Berkshire Hathaway's 2010 BNSF deal mattered because:", choices: ["It failed", "Permanent capital paid ~$44B for a whole railroad, validating the moat before the sector re-rated", "It created Amtrak", "It was a passenger bet"], answer: 1, explain: "Buffett called it an all-in wager on America; the toll-road framing became the sector's standard investment case." },
    { q: "Intermodal freight is most competitive against trucks on:", choices: ["Any distance", "Lanes of roughly 700-2,500 miles, where rail line-haul economics overcome drayage costs", "Under 100 miles", "Air routes"], answer: 1, explain: "The math wins with distance; the constraint is service reliability, which is why velocity and dwell are the vital signs." }
  ],

  sources: [
    { name: "Union Pacific 4Q24 results (revenue $24.3B, OR 59.9%)", url: "https://www.up.com/press-releases/financial/4q24-earnings-announcement-nr-250123", feeds: "financials, operating ratio" },
    { name: "AAR Freight Rail Facts & Figures", url: "https://www.aar.org/freight-rail-facts-figures/", feeds: "industry size, rates, fuel efficiency" },
    { name: "UNP-NS transcontinental merger announcement (Jul 29, 2025)", url: "https://norfolksouthern.investorroom.com/2025-07-29-Union-Pacific-and-Norfolk-Southern-to-Create-Americas-First-Transcontinental-Railroad", feeds: "merger terms, synergies" },
    { name: "SCMP: China HSR toward 50,000 km (Jan 2025)", url: "https://www.scmp.com/economy/china-economy/article/3293188/chinas-high-speed-rail-network-track-breach-50000km-milestone-2025", feeds: "passenger/HSR contrast" }
  ]
};
