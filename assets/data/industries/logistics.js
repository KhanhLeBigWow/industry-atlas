/* Industry Atlas - LOGISTICS & FREIGHT (full module, research-backed)
 * Anchors: US business logistics costs $2.58T in 2024, 8.8% of US GDP, up 5.4% y/y
 * (CSCMP State of Logistics 2025, via FreightWaves); global logistics spend ~$10-11T,
 * roughly 9-11% of world GDP (Armstrong & Associates / Statista, 2023-2024); UPS US
 * daily volume down 8.6% in 2025 amid the agreed >50% Amazon volume glidedown by
 * June 2026; FedEx passed UPS in market cap in 2025 (~$85B vs ~$75B); Convoy, the
 * $3.8B digital freight broker, shut down October 2023; Yellow, a 99-year-old LTL
 * carrier, filed Chapter 11 in August 2023; last mile = ~53% of total shipping cost,
 * up from 41% in 2018 (Statista); DAT dry van spot ~$1.53/mile (Apr 2024) vs ~$1.96
 * (Apr 2025); ATRI truckload operating costs +4% in 2024 ex-fuel on a ~25% 3-year
 * stack; warehouse automation market ~$25-31B in 2025, mid-teens CAGR. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["logistics"] = {
  meta: {
    id: "logistics", name: "Logistics & Freight", sector: "industrials", status: "full",
    tagline: "A $10T toll on everything that moves: brutal commodity cycles at the bottom, network moats at the top, and Amazon rewriting the map.",
    marketSize: { value: 10.2, unit: "$T", asOf: 2024, note: "global logistics spend, roughly 9-11% of world GDP; the US alone ran $2.58T (8.8% of US GDP) in 2024" },
    cagr: { value: 5, range: [3, 7], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 4, capitalIntensity: 3, regulation: 3, disruption: 3
  },
  newsQuery: '(UPS OR FedEx OR DHL OR trucking OR "freight rates" OR "freight broker" OR "supply chain" OR "last mile delivery" OR "warehouse automation")',

  overview: {
    definition: "Logistics & Freight moves and stores everything the economy makes: trucking, parcel networks, freight brokerage and forwarding, warehousing, and the last mile to the doorstep. It is a roughly $10T annual toll on world trade, and the most reliably cyclical service industry on Earth.",
    howItWorks: [
      "The industry is a stack of very different businesses wearing one name. Global logistics spend runs about $10-11T a year, roughly 9-11% of world GDP; the US alone spent $2.58T in 2024 (8.8% of GDP, per CSCMP's State of Logistics). At the bottom sits asset-heavy linehaul: trucking (hundreds of thousands of US carriers, most operating fewer than 10 trucks), rail intermodal, ocean, and air freight. Above it sit asset-light intermediaries (brokers, forwarders, 3PLs) that own relationships and software instead of steel. At the top sit the integrated parcel networks (UPS, FedEx, DHL, and now Amazon) whose hub-and-spoke density is the sector's only true moat.",
      "The economics of the open-market layers are commodity economics with wheels. Entry barriers in trucking are a used truck and an operating authority, so capacity floods in during booms and exits agonizingly slowly in busts: the 2021 rate spike bred the 3-year freight recession that followed. By April 2024, DAT dry van spot rates sat near $1.53/mile while ATRI measured truckload operating costs up ~25% over 3 years (+4% in 2024 alone, ex-fuel): thousands of carriers literally hauled below cost. The casualties were biblical: Yellow, a 99-year-old LTL carrier, filed Chapter 11 in August 2023, and Convoy, the $3.8B-valuation digital broker, shut its doors 2 months later.",
      "Parcel is where network math replaces commodity math. Density is destiny: cost per stop falls as packages per stop rise, which is why the last mile still eats ~53% of total shipping cost (up from 41% in 2018) and why scale players keep winning it. The map is being redrawn: Amazon built the third great US network and by most counts now delivers more US parcels than UPS or FedEx, and it sells Amazon Shipping to outside merchants at rates reported up to 30% below Big 2 pricing. UPS chose margin over volume: it agreed to cut Amazon volume by more than 50% by June 2026 and watched US daily volume fall 8.6% in 2025 as it pivoted to SMB and healthcare freight. FedEx, mid cost-cutting program, passed UPS in market capitalization in 2025 for the first time ever.",
      "The intermediation and warehousing layers monetize fragmentation and labor scarcity. Brokers clip roughly 13-18% gross margin matching loads from thousands of shippers to hundreds of thousands of carriers; the digital-brokerage venture wave promised to compress that spread and mostly died trying (Convoy's lesson: software does not repeal the freight cycle), while incumbents like C.H. Robinson absorbed the playbook and automated their own quoting. In the warehouse, e-commerce service levels plus scarce labor are funding a ~$25-31B warehouse automation market (2025) growing at a mid-teens CAGR: robots, goods-to-person systems, and the contract logistics operators (GXO, DHL Supply Chain) who run them for fees."
    ],
    history: [
      { era: "1956-1979", title: "The box and the interstate", text: "Malcom McLean's shipping container (1956) and the US interstate system industrialize freight; costs per ton-mile collapse and modern distribution is born." },
      { era: "1980-1993", title: "Deregulation", text: "The Motor Carrier Act (1980) and Staggers Act blow the doors off regulated rates: trucking fragments into hundreds of thousands of carriers, LTL networks consolidate, and FedEx's hub-and-spoke model scales overnight air." },
      { era: "1994-2007", title: "Globalization and the 3PL", text: "NAFTA and China's WTO entry stretch supply chains across oceans; freight forwarders and third-party logistics firms become the operating system of global trade." },
      { era: "2008-2019", title: "E-commerce rewires the map", text: "The parcel supercycle begins; Amazon starts building its own network; the ELD mandate (2017) tightens truck capacity; venture capital pours into digital brokerage." },
      { era: "2020-present", title: "Whiplash", text: "COVID crunch sends rates to records in 2021, then the longest freight recession on record (2022-2025) kills Yellow and Convoy; UPS and Amazon consciously uncouple; automation ramps as labor stays scarce." }
    ],
    trends: [
      { title: "Amazonification of parcel", direction: "shift", text: "Amazon's network now delivers more US parcels than UPS or FedEx by most counts and sells external shipping at reported discounts up to 30%: the duopoly is now a triopoly where one player also owns the demand." },
      { title: "The long freight recession", direction: "down", text: "3+ years of spot rates near or below operating cost; capacity exits slowly because used trucks are cheap and owner-operators defer surrender: attrition, not demand, sets the bottom." },
      { title: "Brokerage digitizes without the unicorns", direction: "shift", text: "Convoy's $3.8B collapse ended the venture land-grab, but the technology won anyway: incumbent brokers automated quoting and matching, compressing headcount per load." },
      { title: "Warehouse automation", direction: "up", text: "A ~$25-31B market (2025) compounding mid-teens as labor scarcity and e-commerce service levels make robots the cheapest reliable worker in the building." },
      { title: "Nearshoring and trade re-routing", direction: "shift", text: "Tariffs and China de-risking push volume toward Mexico and Southeast Asia: network redesign is expensive for shippers and lucrative for the 3PLs who manage it." }
    ],
    outlook: "The cycle turns when capacity finishes dying: spot rates were already inflecting by 2025 (DAT dry van ~$1.96/mile in April 2025 vs $1.53 a year earlier), and the survivors inherit a tighter market. Structurally, the sector barbells: commodity linehaul stays brutal and cheap, while density networks (parcel, LTL, forwarding scale) and automation vendors compound. The wild cards are Amazon's pricing appetite in parcel, tariff policy rearranging trade lanes, and autonomous trucking, which would reprice the largest cost line in the industry: the driver."
  },

  structure: {
    suppliers: [
      { name: "Truck & trailer OEMs (Daimler Truck, PACCAR, Volvo)", note: "Fleet capex is the cycle's thermostat: orders boom at the top, vanish at the bottom" },
      { name: "Warehouse automation vendors (Dematic/KION, Honeywell Intelligrated, AutoStore)", note: "A ~$25-31B market (2025) growing mid-teens on labor scarcity" },
      { name: "Fuel & energy", note: "Diesel is 15-25% of trucking cost; surcharges pass it through, imperfectly and late" },
      { name: "Labor (drivers, warehouse workers, Teamsters)", note: "The largest cost line and the binding constraint; demographics keep it tight" }
    ],
    producers: [
      { name: "Parcel integrators (UPS, FedEx, DHL, Amazon Logistics)", note: "Hub-and-spoke density: the sector's only true moat, now a 4-player fight" },
      { name: "Trucking carriers (truckload & LTL)", note: "Truckload is atomized and brutal; LTL is consolidated and lucrative (ODFL class)" },
      { name: "Brokers & forwarders (C.H. Robinson, DSV, Kuehne+Nagel)", note: "Asset-light spread businesses: countercyclical cash, cyclical earnings" },
      { name: "Contract logistics & 3PLs (GXO, DHL Supply Chain)", note: "Running warehouses and networks for fees: the recurring-revenue corner" }
    ],
    distributors: [
      { name: "Load boards & freight marketplaces (DAT, Truckstop)", note: "The spot market's price tape: where 8M+ loads a year find trucks" }
    ],
    customers: [
      { name: "Retail & e-commerce shippers", note: "Amazon alone reshaped 2 of the 3 legacy parcel networks' strategies" },
      { name: "Manufacturers & industrial shippers", note: "Contract freight buyers; their inventory cycles ARE the freight cycle" },
      { name: "Consumers", note: "The doorstep: last mile eats ~53% of total shipping cost and rising" }
    ],
    regulators: [
      { name: "FMCSA / DOT", note: "Hours-of-service, ELD mandate, safety scores: capacity policy in disguise" },
      { name: "Customs & trade (CBP, tariff regimes)", note: "Tariff schedules re-route networks; de minimis rules made and unmade air freight booms" },
      { name: "EPA / CARB", note: "Emissions rules set fleet replacement cycles and truck costs" }
    ],
    capital: [
      { name: "Public equity & high yield", note: "Carriers and integrators; the cycle prices credit brutally at the bottom" },
      { name: "Private equity roll-ups", note: "3PL and brokerage consolidation: buy fragmentation, sell density" },
      { name: "Industrial REITs & infra funds (Prologis class)", note: "The warehouse itself became an institutional asset class" },
      { name: "Venture capital", note: "The freight-tech wave crested with Convoy ($3.8B) and washed out in 2023" }
    ]
  },

  valueChain: {
    intro: "From factory gate to doorstep, value capture inverts asset weight: the trucks earn the least, the networks and the software earn the most, and the last mile burns half the money.",
    stages: [
      { id: "equipment", name: "Equipment & infrastructure", what: "Trucks, trailers, hubs, warehouses, sortation", players: "Daimler Truck, PACCAR, Prologis, automation vendors", valueCapture: 3,
        economics: { grossMargin: [18, 28], capitalIntensity: 5, concentration: 4 },
        linksTo: ["automotive", "manufacturing", "real-estate", "robotics"],
        deeper: "Truck orders are the cycle's leading indicator: fleets order at peak rates and take delivery into the bust. Warehouses graduated into an institutional asset class (Prologis class rents compounding), and automation vendors sell the labor-scarcity solution at software-adjacent multiples." },
      { id: "linehaul", name: "Long-haul transport", what: "Truckload, rail intermodal, ocean, air freight", players: "Knight-Swift, Schneider, J.B. Hunt, railroads", valueCapture: 2,
        economics: { grossMargin: [8, 18], capitalIntensity: 4, concentration: 1 },
        linksTo: ["rail", "shipping", "aviation", "oil-gas"],
        deeper: "The commodity core: hundreds of thousands of US carriers, no pricing power, spot rates set at the margin by the marginal truck. DAT dry van spot ran ~$1.53/mile in April 2024 against costs up ~25% in 3 years (ATRI): a market that clears by bankruptcy. LTL is the exception: terminal networks are duplicable only at enormous cost, so returns are structurally higher." },
      { id: "intermediation", name: "Brokerage & forwarding", what: "Matching loads to capacity; buying transport wholesale, selling retail", players: "C.H. Robinson, DSV, Kuehne+Nagel, Expeditors", valueCapture: 3,
        economics: { grossMargin: [12, 18], capitalIntensity: 1, concentration: 2 },
        linksTo: ["shipping", "aviation", "saas"],
        deeper: "Asset-light spread businesses: gross margin is the buy-sell spread on fragmentation. Cash flow is countercyclical (working capital releases in downturns) even as earnings compress. Convoy's 2023 collapse proved venture-subsidized spreads don't survive a freight recession; the incumbents kept the automation and the customers." },
      { id: "parcel", name: "Parcel networks", what: "Hub-and-spoke sortation and delivery of packages", players: "UPS, FedEx, DHL, Amazon Logistics", valueCapture: 4,
        economics: { grossMargin: [15, 25], capitalIntensity: 4, concentration: 5 },
        linksTo: ["ecommerce", "aviation"],
        deeper: "Density economics: the network with the most packages per stop wins on cost. That is why Amazon's insourcing is existential math, not a headline: UPS is cutting Amazon volume >50% by June 2026 and re-pricing toward SMB and healthcare, trading 8.6% US volume decline (2025) for yield. FedEx's cost program carried it past UPS in market cap in 2025." },
      { id: "warehousing", name: "Warehousing & fulfillment", what: "Storage, pick-pack, returns, contract logistics", players: "GXO, DHL Supply Chain, Lineage (cold), Amazon FCs", valueCapture: 3,
        economics: { grossMargin: [8, 16], capitalIntensity: 3, concentration: 2 },
        linksTo: ["real-estate", "robotics", "ecommerce"],
        deeper: "Contract logistics is the sector's recurring-revenue corner: multi-year contracts, open-book or fixed-fee, sticky once a customer's inventory is inside your building. Automation changes the margin math: a ~$25-31B equipment market (2025) is converting labor cost into capex that operators amortize across clients." },
      { id: "lastmile", name: "Last mile & delivery", what: "The final leg to door, locker, or store", players: "Amazon DSPs, UPS/FedEx, gig networks, regional carriers", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 2, concentration: 3 },
        linksTo: ["ecommerce", "retail"],
        deeper: "The most expensive mile: ~53% of total shipping cost (Statista, up from 41% in 2018), because density collapses at the doorstep. Every structural response (lockers, pickup points, route AI, drones) is an attempt to re-aggregate stops. Gig and DSP models convert fixed fleets into variable cost, at regulatory and quality risk." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 3 P&L species. Asset-based carriers: revenue = volume x yield (rate per mile or per piece); costs are drivers, equipment, and fuel; the operating ratio (opex / revenue) is the universal scoreboard, and operating leverage cuts both ways violently. Asset-light intermediaries: revenue is gross freight under management but the real line is net revenue (the buy-sell spread, typically 13-18% in US brokerage); earnings compress in downcycles but working capital releases cash. Networks (parcel, LTL): high fixed cost, density-driven marginal economics, and real pricing power expressed in annual general rate increases and surcharges.",
      "The cycle is the model: freight demand follows inventories and goods consumption, capacity follows with a lag, and rates clear at the marginal truck's desperation. 2021 minted records; 2022-2025 became the longest freight recession on record, with ATRI costs up ~25% over 3 years against spot rates that touched $1.53/mile (April 2024): Yellow (Chapter 11, August 2023) and Convoy (shut October 2023) were the tombstones. Through-cycle winners share 2 traits: balance sheets that survive the bottom, and density or contracts that price above the commodity at the top."
    ],
    fingerprint: { grossMargin: 18, recurringRevenue: 35, capitalIntensity: 55, pricingPower: 35, cyclicality: 80, operatingLeverage: 70 },
    lines: [
      { label: "Volumes (tonnage, loads, packages)", note: "The demand tape: Cass shipments, ATA tonnage, daily package counts" },
      { label: "Yield (revenue per mile / per piece)", note: "The pricing tape: UPS trades volume for yield; spot vs contract spread tells the cycle" },
      { label: "Operating ratio", note: "Opex / revenue: the sector's universal margin yardstick, lower is better" },
      { label: "Fuel & surcharges", note: "Pass-through with lags: rising fuel pinches first, falling fuel flatters" },
      { label: "Contract vs spot mix", note: "Contract cushions downcycles, caps upcycles; mix shifts are the earnings surprise machine" }
    ],
    unitEconomics: {
      unit: "per US dry van truckload mile (illustrative)",
      items: [
        { label: "Spot rate", value: "~$1.55 to ~$2.00", note: "DAT range across 2024-2025; contract rates run above spot in downcycles" },
        { label: "Carrier operating cost", value: "up ~25% in 3 years", note: "ATRI: +4% in 2024 ex-fuel; many 2024 miles ran below cost" },
        { label: "Driver share of cost", value: "~40% of cost per mile", note: "wages plus benefits: the largest and stickiest line" },
        { label: "Broker's cut", value: "13% to 18% of the load", note: "gross margin for matching; net margin is thin after people and tech" }
      ]
    }
  },

  kpiRefs: ["retail-inventory-turns", "avia-load-factor"],
  kpiLocal: [
    {
      id: "log-operating-ratio", name: "Operating Ratio (OR)", industries: ["logistics", "rail"],
      definition: "Operating expenses as a share of operating revenue: the universal margin scoreboard for carriers and networks.",
      formula: "OR = operating expenses / operating revenue x 100 (lower is better)",
      interpretation: "A 90 OR means a 10% operating margin. Best-in-class LTL runs a low-70s OR; truckload lives in the 90s and crosses 100 at cycle bottoms, which is how the 2022-2025 freight recession cleared capacity.",
      healthy: "Sub-90 at mid-cycle for trucking; low 70s for elite LTL", warning: "OR at or above 100: hauling at a loss to keep trucks moving" },
    {
      id: "log-revenue-per-piece", name: "Revenue per Piece (Parcel Yield)", industries: ["logistics", "ecommerce"],
      definition: "Average revenue earned per package delivered: the parcel networks' pricing-discipline gauge.",
      formula: "Package revenue / packages delivered, by segment",
      interpretation: "Yield up while volume falls is a deliberate mix trade (the UPS 2025 playbook: shed Amazon, keep healthcare and SMB). Yield down while volume falls is a price war: the Amazon Shipping scenario the Big 2 fear.",
      healthy: "Yield growth at or above cost inflation with stable base volume", warning: "Falling yield and falling volume together: network deleverage" }
  ],

  health: {
    intro: "Carrier health is cost position and balance sheet at the bottom of the cycle; network health is density and mix; everyone's health is discipline about chasing volume.",
    pillars: [
      { name: "Network density & mix", weight: 25, metrics: "Packages per stop, revenue per piece, SMB/healthcare vs mega-shipper mix", healthy: "Rising density, yield above cost inflation", warning: "Volume bought with price; one customer above 10% of revenue" },
      { name: "Cost position & operating ratio", weight: 25, metrics: "OR vs peers, cost per mile/piece trend, automation penetration", healthy: "OR improving through the cycle, structural cost gap vs peers", warning: "OR above 100 or closing on it; costs compounding above yield" },
      { name: "Balance sheet & fleet", weight: 20, metrics: "Leverage vs cycle position, fleet age, lease obligations", healthy: "Capacity to buy assets cheap at the bottom", warning: "Refinancing needs mid-recession (the Yellow pattern)" },
      { name: "Contract quality", weight: 15, metrics: "Contract vs spot mix, tenure, pricing escalators", healthy: "Multi-year contracts with cost pass-throughs", warning: "Spot-heavy books at cycle tops; contracts priced at the peak" },
      { name: "Labor & automation", weight: 15, metrics: "Driver turnover, union exposure and contract dates, automation capex", healthy: "Turnover below peers; automation offsetting wage inflation", warning: "Contract cliffs (Teamsters class) with no productivity offset" }
    ],
    scoringNote: "In freight, the fatal error is procyclical: adding capacity and leverage at the top. Score discipline at the peak more heavily than performance at the trough."
  },

  valuation: {
    intro: "The market prices freight names on mid-cycle earnings power and density moats: commodity carriers trade like cyclicals, networks like infrastructure, brokers like capital-light compounders with cyclical earnings.",
    methods: [
      { name: "EV / EBITDA (asset-based carriers)", use: "Truckload and LTL through the cycle", avoid: "Trough multiples on trough earnings: the classic value trap in reverse", strengths: "Standard, comparable, capex-aware", weaknesses: "Cycle timing dominates the multiple", range: { low: 5, high: 12, asOf: 2025, note: "truckload at the low end; elite LTL (ODFL class) commands the top and beyond" } },
      { name: "P/E on parcel integrators", use: "UPS, FedEx: mature networks with dividends", avoid: "Extrapolating yield gains while volume structurally leaks to Amazon", strengths: "Captures pricing discipline and buybacks", weaknesses: "Pension, restructuring, and surcharge noise", range: { low: 10, high: 16, asOf: 2025, note: "FedEx passed UPS in market cap in 2025: execution, not volume, set the ranking" } },
      { name: "Asset-light multiple (brokers & forwarders)", use: "C.H. Robinson, DSV, Kuehne+Nagel class", avoid: "Valuing on gross revenue: net revenue is the real base", strengths: "Matches the capital-light economics; M&A comps abound (DSV's serial playbook)", weaknesses: "Spread compression risk from digitization", range: { low: 8, high: 15, asOf: 2025, note: "EV/EBITDA; forwarding scale and M&A optionality earn the premium" } },
      { name: "Mid-cycle normalization", use: "Sanity check for everything: estimate normal OR and normal rates, value that", avoid: "Anchoring on 2021 (peak) or 2023-2024 (trough): both lie", strengths: "The only honest lens on a 3-year-cycle industry", weaknesses: "Normal is an estimate; capacity structure shifts between cycles", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a freight name quickly: mid-cycle EBITDA times a density-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 15, step: 0.5, value: 3, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 16, step: 0.5, value: 8, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 1, value: 10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays freight as macro beta with network-moat islands: own the density compounders (elite LTL, forwarding scale, automation vendors) through the cycle, trade the commodity carriers on capacity attrition, and treat parcel as a pricing-discipline story shadowed by Amazon. The freight cycle is shorter and sharper than the economic cycle: position off freight data, not GDP.",
    debates: [
      { topic: "Parcel: rational triopoly or Amazon's next conquest?", bull: "UPS and FedEx are shedding bad volume on purpose: yields rise, GRIs stick, healthcare and SMB mix improves, and Amazon's network is optimized for its own boxes, not the B2B and premium freight the Big 2 keep. Discipline plus density equals durable margin.", bear: "Amazon already delivers more US parcels than either incumbent and sells external shipping at up to 30% discounts: every premium pivot shrinks the denominator of a fixed-cost network. UPS's 8.6% US volume decline (2025) is deleverage marketed as strategy." },
      { topic: "Did Convoy prove digital brokerage is a mirage?", bull: "Convoy proved nothing about the technology: it proved venture-funded spread compression dies in a freight recession. The automation survived inside C.H. Robinson and DSV, where AI quoting is quietly halving cost per load: the efficiency accrues to scale incumbents.", bear: "Brokerage IS a cycle business with 13-18% gross margins and near-zero switching costs: software cannot create pricing power in a commodity spread, and each digitization round hands more of the margin to shippers. The end state is thinner spreads for everyone." },
      { topic: "When does the freight recession actually end?", bull: "Capacity attrition is real and compounding: 3 years of sub-cost rates, Yellow's 30,000 jobs gone, carrier authorities shrinking monthly, and spot already inflected ($1.53 to $1.96/mile April 2024 to April 2025). The next tightening will be violent because equipment orders collapsed too.", bear: "Every exit is offset by a cheap used truck re-entering at a lower cost basis, tariffs cap goods volumes, and shippers learned to live lean on inventory. Overcapacity is structural until autonomous trucks arrive and make it permanent." }
    ],
    cycle: {
      where: "Late downcycle of the longest freight recession on record (2022-2025): spot rates inflecting off the bottom, capacity still exiting, parcel mid-realignment around the Amazon glidedown, warehouse automation spending decoupled from the freight cycle and compounding.",
      drivers: "Goods consumption and inventory restocking, carrier capacity attrition vs entry, diesel prices, tariff and trade-lane shifts, labor contracts.",
      leads: [
        "Cass Freight Index shipments and expenditures (free, monthly)",
        "DAT spot rate trendlines, dry van especially (free summaries, weekly)",
        "Census retail inventories-to-sales ratio via FRED (free): restocking is the demand fuse",
        "BLS trucking employment (free, monthly): payrolls track capacity with a lag",
        "ISM Manufacturing new orders (free): the goods-economy tape freight follows"
      ]
    },
    exposure: [
      { vehicle: "Parcel integrators (UPS, FedEx)", note: "Yield discipline plus dividends; sized against the Amazon shadow" },
      { vehicle: "Elite LTL (Old Dominion class)", note: "The sector's quality compounder: terminal networks are the moat" },
      { vehicle: "Brokers (C.H. Robinson class)", note: "Countercyclical cash, cyclical earnings: buy hated, sell loved" },
      { vehicle: "Global forwarders (DSV, Kuehne+Nagel)", note: "Scale, M&A optionality, and trade re-routing complexity as revenue" },
      { vehicle: "Warehouse ecosystem (Prologis, GXO, automation vendors)", note: "The secular sleeve: labor scarcity and e-commerce compounding through freight cycles" }
    ],
    catalysts: [
      { when: "Monthly (mid-month)", what: "Cass Freight Index and DAT rate prints: the cycle's scoreboard" },
      { when: "Quarterly earnings", what: "Integrator yield vs volume trade, broker net revenue per load, carrier ORs" },
      { when: "Each fall", what: "Parcel general rate increases and peak-season surcharges: pricing power made visible" },
      { when: "Contract and policy dates", what: "Teamsters negotiations, tariff rulings, and emissions deadlines reset cost curves" }
    ],
    data: [
      { series: "Cass Freight Index (shipments, expenditures)", source: "cassinfo.com (free, monthly)", why: "The cleanest through-cycle freight demand and price tape" },
      { series: "DAT spot rates and load-to-truck ratios", source: "dat.com trendlines (free summaries)", why: "The marginal price of a truck, weekly" },
      { series: "Retail inventories-to-sales ratio", source: "Census via FRED (free)", why: "Restocking cycles lead freight demand" },
      { series: "Truck transportation employment", source: "BLS (free)", why: "Capacity proxy: payroll declines mark attrition progress" },
      { series: "Freightos Baltic Index (ocean container rates)", source: "freightos.com (free)", why: "The global goods-flow thermometer feeding US inland freight" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Freight leads the economy down and bottoms first: buy quality carriers and brokers when ORs are ugliest and capacity is exiting, before the macro all-clear." },
      { regime: "Oil spike", behavior: "Surcharges lag cost: carriers pinch first, then recover; asset-light brokers pass it through fastest. Fuel-efficient fleets gain share quietly." },
      { regime: "Rates rising", behavior: "Equipment finance tightens and kills marginal capacity faster: bullish for survivors' pricing 12 months out, bearish for levered fleets now." },
      { regime: "Trade shock", behavior: "Tariff walls crush lane volumes but mint re-routing revenue: forwarders and Mexico-corridor assets win while port-dependent flows lose." }
    ]
  },

  players: [
    { name: "UPS", role: "Parcel integrator in pivot", country: "US", real: true, note: "Cutting Amazon volume >50% by June 2026; US daily volume down 8.6% in 2025 as yield replaces volume" },
    { name: "FedEx", role: "Parcel integrator, cost story", country: "US", real: true, note: "Passed UPS in market cap in 2025 for the first time, on restructuring execution" },
    { name: "DHL Group", role: "Global logistics champion", country: "DE", real: true, note: "Express, forwarding, and contract logistics under one roof: the diversified template" },
    { name: "Amazon Logistics", role: "The insourcer", country: "US", real: true, note: "Delivers more US parcels than UPS or FedEx by most counts; sells external shipping at reported 30% discounts" },
    { name: "DSV / Kuehne+Nagel", role: "Forwarding giants", country: "DK", real: true, note: "Asset-light scale and serial M&A: complexity and fragmentation are their raw materials" },
    { name: "C.H. Robinson", role: "Brokerage incumbent", country: "US", real: true, note: "Largest NA truckload broker; absorbed the digital playbook that killed Convoy" },
    { name: "Old Dominion / J.B. Hunt", role: "Trucking quality", country: "US", real: true, note: "Elite LTL density and intermodal scale: proof carriers can compound" },
    { name: "Prologis / GXO", role: "Warehouse landlord & operator", country: "US", real: true, note: "The buildings and the robots: logistics real estate and contract fulfillment at scale" }
  ],

  geography: [
    { country: "US", role: "Largest single market", note: "$2.58T of logistics spend in 2024 (8.8% of GDP); home of the parcel fight and the freight recession" },
    { country: "CN", role: "Largest freight volume engine", note: "Manufacturing exports plus a hyper-scale domestic parcel market (SF Express, Cainiao class)" },
    { country: "DE", role: "European logistics anchor", note: "DHL Group's home; the continent's freight crossroads" },
    { country: "DK", role: "Forwarding consolidator", note: "DSV turned a Danish trucker into a global top-3 forwarder via serial M&A" },
    { country: "SG", role: "Asian transshipment hub", note: "Port, air cargo, and regional distribution HQ for Asia-Pacific flows" },
    { country: "MX", role: "Nearshoring winner", note: "Now the top US trade partner: cross-border trucking corridors are the growth lane" }
  ],

  cycles: [
    { year: 1956, title: "The container", kind: "shift", text: "Malcom McLean ships the first containers; handling costs collapse and global supply chains become possible. Lesson: standardization, not speed, is what compounds in logistics." },
    { year: 1980, title: "Deregulation", kind: "shift", text: "The Motor Carrier Act opens trucking to anyone with a truck: rates fall, incumbents die, fragmentation becomes permanent. Lesson: in deregulated freight, moats must be built (density, terminals), not licensed." },
    { year: 2018, title: "Amazon builds the third network", kind: "shift", text: "Amazon scales its own air, linehaul, and DSP delivery web; within years it out-delivers the incumbents domestically. Lesson: your biggest customer can become your biggest competitor, on your own economics." },
    { year: 2021, title: "The everything shortage", kind: "boom", text: "COVID demand plus port chaos send freight rates to all-time records; carriers order trucks and brokers mint margin. Lesson: freight booms sow their own bust: capacity ordered at the top arrives in the trough." },
    { year: 2023, title: "Yellow and Convoy", kind: "bust", text: "A 99-year-old LTL carrier (30,000 jobs) and a $3.8B digital broker die months apart in the freight recession. Lesson: in commodity freight, the balance sheet is the strategy; technology alone repeals nothing." }
  ],

  risks: [
    { name: "Prolonged overcapacity", severity: 3, likelihood: 4, transmission: "Cheap used trucks -> slow capacity exit -> rates below cost for years -> serial carrier and broker failures -> weakest-balance-sheet names die regardless of operating skill." },
    { name: "Amazon parcel price war", severity: 4, likelihood: 3, transmission: "Amazon Shipping priced ~30% below Big 2 -> B2C yield war -> fixed-cost network deleverage at UPS/FedEx -> margin compression outruns the premium-mix pivot." },
    { name: "Labor cost shocks", severity: 3, likelihood: 4, transmission: "Teamsters-class contracts and driver demographics -> step-change wage inflation -> ORs deteriorate faster than pricing resets -> automation capex forced at cycle bottoms." },
    { name: "Trade and tariff shock", severity: 4, likelihood: 3, transmission: "Tariff walls -> goods volumes fall and lanes re-route -> asset networks built for old flows strand -> forwarders win re-routing fees while carriers eat empty miles." },
    { name: "Autonomous trucking disruption", severity: 3, likelihood: 2, transmission: "Driverless linehaul at scale -> the ~40% driver cost line collapses -> rate deflation passes to shippers -> asset values and driver-based business models reprice violently." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Logistics is the business of moving and storing everything you buy: trucks, planes, ships, warehouses, and the courier at your door. The world spends about $10T a year on it, roughly 9-11% of global GDP. A few giant networks (UPS, FedEx, DHL, Amazon) deliver parcels, while hundreds of thousands of small trucking companies haul everything else, and middlemen called brokers match cargo to trucks."] },
    L2: { title: "Intermediate", text: ["The industry splits into commodity layers and network layers. Trucking is brutally competitive (anyone with a truck can enter), so rates swing wildly: the 2021 boom was followed by a 3-year freight recession that bankrupted Yellow and shut Convoy. Parcel is the opposite: hub-and-spoke density creates real moats, which is why the last mile (the expensive final leg, ~53% of total shipping cost) is dominated by scale players, and why Amazon building its own network changed everything."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: carriers on operating ratio and cost per mile (ATRI costs rose ~25% in 3 years while spot touched $1.53/mile: that gap IS the shakeout); brokers on net revenue per load and countercyclical cash; parcel networks on yield versus volume (UPS traded an 8.6% US volume decline in 2025 for mix and price). The freight cycle runs shorter than the economic cycle: watch Cass shipments, DAT spot rates, and inventories-to-sales, not GDP."] },
    L4: { title: "Expert", text: ["Live debates: whether the parcel triopoly holds pricing as Amazon sells external shipping at reported 30% discounts; whether digital brokerage compresses spreads structurally now that the tech lives inside C.H. Robinson and DSV rather than venture-funded challengers; and whether 3 years of capacity attrition sets up a violent 2026 tightening. Position around the fall GRI season, labor contract dates, and tariff rulings: those reset the cost and price curves mid-cycle."] },
    L5: { title: "Institutional", text: ["Allocator's frame: freight is macro beta with embedded quality islands: core the density compounders (elite LTL, forwarding scale, warehouse automation and logistics real estate) that earn through cycles, and trade commodity trucking as a capacity-attrition clock. The structural questions worth underwriting a decade out: Amazon's terminal share of US parcel, autonomous trucking's repricing of the ~40% driver cost line, and nearshoring's permanent re-routing of lanes toward Mexico. Everything else is the cycle, and the cycle always comes back."] }
  },

  quiz: [
    { q: "Global logistics spend runs roughly:", choices: ["$1T, about 1% of world GDP", "$10-11T, roughly 9-11% of world GDP", "$50T, half of world GDP", "$500B, mostly parcels"], answer: 1, explain: "About $10-11T a year globally; the US alone spent $2.58T in 2024, or 8.8% of US GDP (CSCMP State of Logistics)." },
    { q: "The last mile matters because it:", choices: ["Is the cheapest leg", "Consumes ~53% of total shipping cost, because density collapses at the doorstep", "Is fully automated", "Only applies to groceries"], answer: 1, explain: "Statista puts last mile at ~53% of shipping cost, up from 41% in 2018: the least dense, most labor-heavy leg of the journey." },
    { q: "Convoy's 2023 shutdown showed that:", choices: ["Freight technology is useless", "Venture-subsidized spreads cannot survive a freight recession, even with good software", "Brokers are illegal", "Spot rates never fall"], answer: 1, explain: "The $3.8B digital broker died in the freight recession; the automation playbook survived inside incumbents like C.H. Robinson." },
    { q: "UPS's Amazon glidedown is a plan to:", choices: ["Deliver all Amazon volume exclusively", "Buy Amazon Logistics", "Cut Amazon volume by more than 50% by June 2026 and pivot to higher-yield freight", "Merge with FedEx"], answer: 2, explain: "UPS chose margin over volume: shed low-yield Amazon packages (US volume fell 8.6% in 2025) and re-mix toward SMB and healthcare." },
    { q: "A trucking operating ratio of 100 means:", choices: ["100% profit margin", "The carrier breaks even on operations: every dollar of revenue is consumed by cost", "100 trucks in the fleet", "Rates doubled"], answer: 1, explain: "OR = opex / revenue x 100. At 100 the carrier hauls for free; the 2022-2025 recession pushed many carriers past it and out of business." },
    { q: "Freight cycles are so violent because:", choices: ["Demand never changes", "Entry barriers are a used truck and an authority: capacity floods in at the top and exits slowly at the bottom", "Regulators set all rates", "Fuel is free in booms"], answer: 1, explain: "Low entry barriers plus slow exit (cheap used trucks) means rates overshoot in both directions: 2021 records, then 3 years below cost." },
    { q: "A freight broker's core economics are:", choices: ["Owning trucks and terminals", "A 13-18% gross spread for matching fragmented shippers to fragmented carriers, with countercyclical cash flow", "Government fees", "Warehouse rents"], answer: 1, explain: "Brokers buy transport wholesale and sell retail: the spread is the product, and working capital releases cash in downturns." },
    { q: "Warehouse automation is compounding mid-teens because:", choices: ["Robots are fashionable", "Warehouses are shrinking", "Labor is scarce and e-commerce service levels keep rising: robots became the cheapest reliable worker", "Regulation requires it"], answer: 2, explain: "A ~$25-31B market in 2025: labor scarcity math plus pick-pack intensity funds goods-to-person systems and the operators who run them." }
  ],

  sources: [
    { name: "CSCMP State of Logistics 2025 (via FreightWaves)", url: "https://www.freightwaves.com/news/logistics-gdp-share-rose-in-24-not-likely-to-drop-cscmp-report", feeds: "US logistics costs, GDP share" },
    { name: "UPS investor relations (volumes, Amazon glidedown)", url: "https://investors.ups.com", feeds: "parcel volumes, yield" },
    { name: "FreightWaves: Convoy shutdown", url: "https://www.freightwaves.com/news/its-over-convoy-shutting-operations-no-strategic-white-knight-to-the-rescue", feeds: "brokerage, freight recession" },
    { name: "Cass Freight Index", url: "https://www.cassinfo.com/freight-audit-payment/cass-transportation-indexes", feeds: "shipments, freight expenditures" }
  ]
};
