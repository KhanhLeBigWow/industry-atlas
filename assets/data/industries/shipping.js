/* Industry Atlas - MARITIME SHIPPING (full module, research-backed)
 * Anchors: Drewry WCI peak $10,377/FEU Sept 2021, crash 86% to ~$1,480 by Sept 2023,
 * Red Sea respike 2024 to the second-highest rates ever (Drewry/UNCTAD/Xeneta, 2024-25);
 * UNCTAD Review of Maritime Transport 2025: 12.72B tons carried in 2024 (+2.2%), over 80%
 * of goods trade volume moves by sea; MSC fleet ~7.1M TEU (~20% share) vs Maersk 4.6M and
 * CMA CGM 4.1M at end-2025 (Alphaliner via Container News/Kuehne+Nagel); container orderbook
 * ~13M TEU, roughly 32-38% of the fleet, highest since 2010, deliveries 2.1M TEU 2025 rising
 * to 3.5M in 2028 (BIMCO/Alphaliner/Clarksons); IMO Net-Zero Framework approved at MEPC 83
 * April 2025, adoption postponed 12 months by a 57-49 vote in Oct 2025 (IMO/DNV);
 * VLCC spot rates above $100K/day in Nov 2025 (Lloyd's List/Tankers International). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["shipping"] = {
  meta: {
    id: "shipping", name: "Maritime Shipping", sector: "industrials", status: "full",
    tagline: "Over 80% of world trade floats on it, and its price can move 10x in 3 years: the purest boom-bust machine in capitalism.",
    marketSize: { value: 600, unit: "$B", asOf: 2024, note: "annual ocean freight revenue across container, tanker, dry bulk, and specialized segments (ICS-class estimates run $500B+); the number itself swings hugely: container liners alone booked profits near $300B across 2021-22, then Maersk's EBITDA fell to $9.6B in 2025" },
    cagr: { value: 3, range: [2, 4], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 5, regulation: 3, disruption: 2
  },
  newsQuery: '(Maersk OR MSC OR "CMA CGM" OR "container shipping" OR "freight rates" OR "Suez Canal" OR "Red Sea shipping" OR VLCC OR "dry bulk" OR "Baltic Dry")',

  overview: {
    definition: "Maritime shipping moves the physical world: over 80% of international goods trade by volume, 12.7B tons in 2024 (UNCTAD), travels by sea in containerships, tankers, and bulk carriers. It is a capital-intensive commodity business where a fixed fleet meets volatile demand, so the price of ocean freight, not the volume, is where fortunes are made and destroyed.",
    howItWorks: [
      "Three fleets, three markets. Containerships carry manufactured goods on fixed schedules (liner shipping): an oligopoly of ~10 global carriers led by MSC (~7.1M TEU, ~20% of capacity at end-2025), Maersk, and CMA CGM, organized into vessel-sharing alliances. Tankers carry crude and products; bulk carriers haul iron ore, coal, and grain: both are fragmented spot markets where hundreds of owners charter ships voyage by voyage. Liner shipping sells a network; tramp shipping sells a commodity.",
      "The economics are brutal because supply is fixed and lumpy while demand moves with world trade. A ship ordered today delivers in 2 to 3 years and sails for 25, so every boom triggers ordering that arrives into the next bust. When capacity is tight, rates go vertical: Drewry's World Container Index hit $10,377 per 40-foot container in September 2021, roughly 7x its pre-pandemic level; by September 2023 it had crashed 86% to about $1,480. Nothing about the ships changed: only the balance did.",
      "Costs are mostly fixed per day (crew, insurance, financing, fuel per voyage), so a ship's daily earnings swing between deeply negative and absurdly profitable around a cash breakeven. A VLCC supertanker breaking even near $25K to $30K/day earned over $100K/day in November 2025 when sanctions and long-haul rerouting tightened the market. Operating leverage this extreme means a few percentage points of fleet-versus-demand imbalance can move earnings 10x in either direction.",
      "Geography is the hidden input: chokepoints (Suez, Panama, Hormuz, Malacca) set effective capacity. When Houthi attacks closed the Red Sea route from December 2023, rerouting around the Cape of Good Hope added 10 to 14 days per voyage, absorbing perhaps 7 to 10% of global container capacity overnight and respiking 2024 rates to the second-highest levels ever recorded. Disruption is the industry's strange friend: it soaks up excess ships. The corollary is that peace and normal transits release capacity back into an already oversupplied market."
    ],
    history: [
      { era: "1956-1970", title: "The container revolution", text: "Malcom McLean's converted tanker Ideal X sails in 1956; standardized boxes collapse port costs by ~90% and make globalization physically possible." },
      { era: "1970-2000", title: "Scale and consolidation", text: "The 1970s tanker glut (ordered into the 1973 oil shock) becomes the template bust; container lines chase scale, and conferences give way to alliances." },
      { era: "2001-2008", title: "The China supercycle", text: "WTO-era China industrializes; dry bulk rates go parabolic (Baltic Dry Index peaks at 11,793 in May 2008) and yards fill with orders at the exact top." },
      { era: "2008-2019", title: "The long hangover", text: "The BDI crashes 94% in 7 months of 2008; a decade of overcapacity, zero pricing power, and casualties follows: Hanjin, the world's 7th-largest liner, collapses in 2016." },
      { era: "2020-present", title: "Whiplash era", text: "COVID logjams send container rates up ~7x to records (2021), collapse follows (2023), then Red Sea diversions respike rates (2024) while a record orderbook and the IMO's decarbonization fight loom over everything." }
    ],
    trends: [
      { title: "Orderbook overhang", direction: "down", text: "The container orderbook stands near 13M TEU, roughly 32 to 38% of the sailing fleet depending on the count: the highest ratio since 2010. Deliveries step from 2.1M TEU (2025) to 3.5M (2028); the last time ordering looked like this, the hangover took a decade to clear." },
      { title: "Chokepoint fragility", direction: "shift", text: "Red Sea diversions (Dec 2023 onward) and Panama Canal drought restrictions turned routing into the market's biggest swing factor: disruption absorbs capacity and props up rates; normalization is a supply shock in reverse." },
      { title: "Decarbonization regulation", direction: "shift", text: "The IMO's Net-Zero Framework (approved April 2025) would be the first sector-wide GHG fuel standard plus carbon price, covering ships over 5,000 GT: adoption was postponed 12 months in a 57-49 October 2025 vote under US pressure. Fuel choice (LNG, methanol, ammonia) is now a multi-billion-dollar bet each owner must place blind." },
      { title: "Consolidation and alliances", direction: "up", text: "The top carriers now control most container capacity; the 2M alliance ended February 2025 as MSC went solo on scale (adding ~832K TEU in 2025 alone) and Maersk paired with Hapag-Lloyd in the Gemini network chasing schedule reliability." },
      { title: "Sanctions and the shadow fleet", direction: "shift", text: "Russia sanctions split tankers into compliant and shadow fleets; enforcement waves in 2025 tightened effective supply and helped push VLCC earnings above $100K/day: geopolitics is now a tanker fundamental." }
    ],
    outlook: "Segments have decoupled. Container shipping faces a classic supply cliff: a record orderbook delivering into 2027-28 just as Red Sea normalization would release 7 to 10% of effective capacity, with alliances and blanked sailings the only defense. Tankers and dry bulk look structurally tighter: small orderbooks, aging fleets, and sanctions-stretched voyages. Over all of it hangs the IMO's delayed carbon framework, which will decide whether 25-year-old fuel-choice bets pay off. The one certainty is the cycle itself: shipping has never learned to stop ordering at the top."
  },

  structure: {
    suppliers: [
      { name: "Shipyards (China CSSC, HD Hyundai, Samsung HI, Imabari)", note: "China builds roughly half of global tonnage; yards are booked years out, so newbuild prices are themselves cyclical" },
      { name: "Engine & equipment makers (MAN ES, WinGD, Wartsila)", note: "Dual-fuel engine choice is the decarbonization bet cast in metal" },
      { name: "Bunker suppliers & fuel networks", note: "Fuel is ~50% of voyage cost; Singapore is the world's bunkering hub" },
      { name: "Crewing nations (Philippines, India, China, Ukraine)", note: "~1.9M seafarers run the fleet; labor supply is a quiet chokepoint" }
    ],
    producers: [
      { name: "Container liners (MSC, Maersk, CMA CGM, COSCO, Hapag-Lloyd)", note: "MSC ~7.1M TEU / ~20% share at end-2025; top 5 control over 60% of capacity" },
      { name: "Tanker owners (Frontline, Euronav/CMB.TECH, Bahri)", note: "Fragmented spot-market players; sanctions rewired their trade map" },
      { name: "Dry bulk owners (Star Bulk, Golden Ocean, Pacific Basin)", note: "The purest commodity segment: no brands, only breakevens" },
      { name: "Specialized (LNG/LPG carriers, car carriers, cruise)", note: "Niche fleets with their own cycles; LNG carriers are floating infrastructure" }
    ],
    distributors: [
      { name: "Freight forwarders (Kuehne+Nagel, DSV, DHL GF)", note: "The travel agents of freight: asset-light margin layers between shipper and carrier" },
      { name: "Shipbrokers (Clarksons, Braemar)", note: "Match ships to cargoes and mint the market's price data" }
    ],
    customers: [
      { name: "Retailers & manufacturers (BCOs)", note: "Walmart-class importers contract annually; their inventory cycles move the peak season" },
      { name: "Commodity houses (Trafigura, Cargill, Vitol)", note: "Charter entire fleets; some run shipping desks bigger than shipowners" },
      { name: "Energy majors & utilities", note: "Crude, LNG, and coal cargoes underwrite the tanker and bulk markets" }
    ],
    regulators: [
      { name: "IMO", note: "UN agency setting safety (SOLAS) and emissions rules; its delayed Net-Zero Framework is the sector's biggest regulatory event in decades" },
      { name: "Flag states & class societies (Panama, Liberia; DNV, LR, ABS)", note: "Open registries flag most tonnage; classification societies are the de facto inspectors" },
      { name: "Competition & trade authorities (EU, FMC, USTR)", note: "Alliance immunity is under scrutiny; 2025 US port fees on Chinese-built ships weaponized fleet composition" }
    ],
    capital: [
      { name: "Bank ship finance (Nordic, Greek, Asian lenders)", note: "Traditional mortgage lending retreated post-2008; Chinese leasing filled the gap" },
      { name: "Public equity (NYSE/Oslo listings)", note: "Shipping equities are cycle-timing instruments: issued at tops, buying back at bottoms" },
      { name: "Chinese leasing houses (BoComm, ICBC Leasing)", note: "Now among the largest shipowners on Earth by book value" }
    ]
  },

  valueChain: {
    intro: "From steel plate to a box on your doorstep: value concentrates not in owning ships but in controlling scarce infrastructure (ports, canals) and information (brokers, forwarders). Owning the asset means owning the cycle.",
    stages: [
      { id: "shipbuilding", name: "Shipbuilding", what: "Constructing vessels: 2-3 year lead times, 25-year lives", players: "China CSSC, HD Hyundai, Samsung HI, Imabari", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 5, concentration: 4 },
        linksTo: ["steel", "manufacturing"],
        deeper: "A national-champion business: China, Korea, and Japan build nearly all large ships, with China near half of output. Yards feast in booms (berths sold out to 2028-29) and starve in busts; newbuild prices are the cycle's slowest-moving but most honest signal." },
      { id: "owning", name: "Vessel ownership & leasing", what: "Owning hulls and chartering them out", players: "Greek and Japanese owner dynasties, Danaos-class lessors, Chinese leasing", valueCapture: 3,
        economics: { grossMargin: [30, 60], capitalIntensity: 5, concentration: 2 },
        linksTo: ["banking", "capital-markets"],
        deeper: "The tramp-owner game is pure asset play: buy ships cheap in busts, fix long charters at tops, sell before deliveries land. Greek owners control ~20% of world tonnage by playing exactly this cycle for generations. Timing, not operating, is the skill." },
      { id: "operating", name: "Liner & tramp operations", what: "Running networks and voyages; selling the freight", players: "MSC, Maersk, CMA CGM, COSCO; Frontline, Star Bulk", valueCapture: 3,
        economics: { grossMargin: [0, 40], capitalIntensity: 4, concentration: 3 },
        linksTo: ["logistics", "oil-gas", "mining", "agriculture"],
        deeper: "Liner margins live and die on the supply-demand balance: Maersk's EBITDA went from $12.1B (2024) to $9.6B (2025) on softer rates, and 2021-22 earned the industry more than the prior 2 decades combined. Alliances share ships to fill them; capacity discipline (blanked sailings) is the only pricing lever." },
      { id: "ports", name: "Ports & terminals", what: "The chokepoint real estate where ships meet land", players: "PSA, DP World, Hutchison, APM Terminals, COSCO Ports", valueCapture: 5,
        economics: { grossMargin: [35, 55], capitalIntensity: 5, concentration: 3 },
        linksTo: ["logistics", "real-estate", "construction"],
        deeper: "The best economics in the chain: local monopolies with concession-protected returns, volume-linked but rate-insulated. Terminal operators earned steadily through the 2023 rate crash that gutted their carrier customers. Carriers vertically integrate here (APM, COSCO) precisely because the tollbooth beats the highway." },
      { id: "forwarding", name: "Forwarding & brokerage", what: "Matching cargo to capacity; selling certainty", players: "Kuehne+Nagel, DSV, DHL GF; Clarksons, Braemar", valueCapture: 4,
        economics: { grossMargin: [15, 30], capitalIntensity: 1, concentration: 3 },
        linksTo: ["logistics", "ecommerce", "retail"],
        deeper: "Asset-light spread businesses: forwarders buy space wholesale and sell retail, thriving on volatility and complexity (their 2021 profits were records too). Brokers clip commissions on every fixture and own the market data, the Clarksons model: sell the casino's statistics." },
      { id: "services", name: "Marine services & insurance", what: "Class, P&I, bunkering, finance: the enabling layer", players: "DNV, Lloyd's Register, P&I clubs, bunker traders", valueCapture: 3,
        economics: { grossMargin: [20, 40], capitalIntensity: 2, concentration: 3 },
        linksTo: ["insurance", "banking", "oil-gas"],
        deeper: "Mutual P&I clubs insure most of the fleet's liability; war-risk premiums (Red Sea cover repriced 10x in 2024) are geopolitics expressed in basis points. Classification societies certify seaworthiness and now referee the alternative-fuel transition." }
    ]
  },

  financials: {
    businessModel: [
      "Every shipping P&L is the same equation wearing different clothes: (rate minus cost per day) times operating days times ships. Rates are set by the marginal balance of fleet versus trade; costs are mostly fixed (crew, insurance, depreciation, interest) plus fuel. That makes the model a leveraged bet on a spread the operator does not control: at $1,480/FEU the same containership fleet that printed $10,377/FEU freight loses money. Liner carriers add network economics (contract versus spot mix, ~50/50 for majors); tramp owners are price takers with a choice of when to fix charters: the only real decision in the business.",
      "Capital allocation IS the strategy. The great shipping fortunes came from buying ships at scrap-adjacent prices in busts and selling (or fixing long charters) at tops; the great bankruptcies (Hanjin 2016) came from doing the reverse. The 2021-22 windfall (industry profits near $300B) went 3 ways: MSC bought ships and share (fleet +11.7% in 2025 alone), Maersk bought logistics companies chasing integration, and tanker/bulk owners largely paid dividends and deleveraged. Which choice was right is the sector's live experiment: the orderbook it financed is now everyone's problem."
    ],
    fingerprint: { grossMargin: 30, recurringRevenue: 25, capitalIntensity: 90, pricingPower: 25, cyclicality: 95, operatingLeverage: 90 },
    lines: [
      { label: "Freight rates (spot & contract)", note: "The tape: Drewry WCI, SCFI, Baltic indices: everything else is commentary" },
      { label: "TCE (time-charter equivalent) per day", note: "Tanker/bulk earnings metric: revenue net of voyage costs per operating day" },
      { label: "Volume & utilization", note: "TEU carried, load factors, blanked sailings: liners manage supply visibly" },
      { label: "Bunker & fuel spreads", note: "~50% of voyage cost; scrubber and dual-fuel spreads are margin swing factors" },
      { label: "Charter coverage & duration", note: "How much of the fleet is fixed forward: the owner's cycle bet, disclosed" }
    ],
    unitEconomics: {
      unit: "per vessel per day (illustrative, large ship)",
      items: [
        { label: "Newbuild cost", value: "VLCC ~$125M; large containership $150-200M", note: "2025 prices near cycle highs; yards booked to 2028" },
        { label: "Operating cost (opex)", value: "~$8-10K/day", note: "crew, insurance, stores, maintenance: sails or not" },
        { label: "Cash breakeven (incl. debt)", value: "~$25-35K/day", note: "leverage sets survival; low-debt owners outlast busts" },
        { label: "Spot earnings range", value: "$10K to $170K+/day (VLCC, 2025-26)", note: "the spread between ruin and riches on one ship" }
      ]
    }
  },

  kpiRefs: ["def-backlog", "avia-load-factor"],
  kpiLocal: [
    {
      id: "ship-spot-tce", name: "Spot Rate vs Cash Breakeven", industries: ["shipping"],
      definition: "Daily freight earnings (TCE for tankers/bulk, $/FEU for containers) measured against the fleet's cash breakeven level.",
      formula: "TCE = (voyage revenue - voyage costs) / voyage days; compare to opex + debt service per day",
      interpretation: "The whole sector in one spread: above breakeven, every ship is a cash machine; below it, a melting asset. WCI ran $10,377/FEU (Sept 2021) to ~$1,480 (Sept 2023) on the same fleet.",
      healthy: "Rates 1.5x+ breakeven with charter cover", warning: "Spot below cash breakeven with heavy spot exposure" },
    {
      id: "ship-orderbook-ratio", name: "Orderbook-to-Fleet Ratio", industries: ["shipping"],
      definition: "Contracted newbuild capacity as a percentage of the sailing fleet: the supply pipeline 2 to 3 years out.",
      formula: "Orderbook TEU (or DWT) / active fleet TEU (or DWT)",
      interpretation: "The best forward indicator in shipping. Container orderbook ~32-38% of fleet (2025-26, highest since 2010) signals a delivery wave through 2028; tanker and bulk books near historic lows signal tightness.",
      healthy: "Under ~10% with an aging fleet", warning: "25%+ booked at peak prices (the 2008 and 2025 pattern)" }
  ],

  health: {
    intro: "Owner health is balance-sheet timing: low breakevens and dry powder at the bottom, charter cover and deleveraging at the top. Liner health adds network discipline: filling ships without breaking the rate structure.",
    pillars: [
      { name: "Cost & breakeven position", weight: 25, metrics: "Cash breakeven/day vs segment spot, fleet age, fuel efficiency", healthy: "Breakeven in the fleet's lowest quartile", warning: "High-cost older tonnage needing peak rates to service debt" },
      { name: "Balance sheet & cycle timing", weight: 25, metrics: "Net LTV, debt maturity wall vs delivery dates, liquidity", healthy: "LTV under 40% with cash to buy distress", warning: "Peak-priced newbuilds on 70%+ leverage (the Hanjin recipe)" },
      { name: "Charter coverage & revenue visibility", weight: 20, metrics: "% days fixed forward, contract vs spot mix, counterparty quality", healthy: "Cover matched to view: long at tops, open at bottoms", warning: "Fully spot into a delivery wave; weak charterer credit" },
      { name: "Fleet & fuel readiness", weight: 15, metrics: "Dual-fuel share, CII/EEXI compliance, scrubber economics", healthy: "Compliant fleet with credible fuel pathway", warning: "Non-compliant tonnage facing IMO penalties and charterer exclusion" },
      { name: "Capital allocation discipline", weight: 15, metrics: "Ordering behavior at cycle highs, buybacks vs NAV, dividend policy", healthy: "Counter-cyclical: buying below NAV, returning cash at peaks", warning: "Ordering at record yard prices because everyone else is" }
    ],
    scoringNote: "In shipping the fatal error is always the same one: financing peak-priced ships with peak-cycle cash flows. Health is measured at the bottom of the cycle, not the top."
  },

  valuation: {
    intro: "Shipping values assets, not earnings: NAV (fleet market value minus net debt) is the anchor, because earnings can legitimately be anything. Multiples work only when explicitly mid-cycle.",
    methods: [
      { name: "P/NAV (price to net asset value)", use: "The core method: broker-assessed fleet values minus net debt vs market cap", avoid: "Trusting NAV at cycle extremes: ship values themselves overshoot", strengths: "Grounded in a real secondhand market with observable transactions", weaknesses: "NAV is a moving target; illiquid ship classes get stale marks", range: { low: 0.6, high: 1.2, asOf: 2025, note: "owners trade at discounts in busts, premiums only in manias" } },
      { name: "EV / mid-cycle EBITDA", use: "Liners and diversified owners across a full cycle", avoid: "Multiples on peak earnings: 2x peak EBITDA looked cheap in 2022 and wasn't", strengths: "Comparable across segments and time", weaknesses: "Defining mid-cycle is half the argument", range: { low: 4, high: 8, asOf: 2025, note: "commodity-cyclical multiples; quality liners at the top of the band" } },
      { name: "Charter-backed DCF", use: "Vessels on long charters (LNG carriers, leased boxships): value the contract like a bond", avoid: "Applying it to spot-traded fleets: there is no contract to discount", strengths: "Genuine cash-flow visibility where cover exists", weaknesses: "Residual value after charter is the cycle again in disguise", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: rate, term, counterparty, residual" } },
      { name: "Dividend yield through cycle", use: "Tanker/bulk names with payout formulas tied to spot earnings", avoid: "Capitalizing peak payouts: yields of 15%+ scream cycle top, not bargain", strengths: "Cash is the sector's honest scorecard", weaknesses: "Payouts vanish exactly when the yield looks best", range: { low: 3, high: 12, asOf: 2025, note: "% yield swings with the spot market by design" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Rough-cut a shipping name: mid-cycle EBITDA times a commodity-shipping multiple, minus net debt. Sanity-check against NAV before believing it.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.2, max: 12, step: 0.2, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 3, max: 10, step: 0.5, value: 5.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 30, step: 0.5, value: 4, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats shipping as 3 separate trades sharing a coastline: container liners as a supply-cycle short/avoid until the 2027-28 delivery wave clears or discipline proves out, tankers and dry bulk as tightness longs on historically low orderbooks and sanctions friction, and the infrastructure layer (ports, brokers, forwarders) as the through-cycle compounders. Nobody owns shipping for the earnings; you own the cycle position.",
    debates: [
      { topic: "Container: is the record orderbook a 2008-style decade of pain?", bull: "Carriers learned capacity discipline: alliances blank sailings within weeks, scrapping accelerates under IMO carbon rules, and Red Sea-style disruption keeps absorbing ships. Consolidation (top 5 over 60% of capacity) means this is an oligopoly now, not 2010's knife fight.", bear: "13M TEU on order against a fleet where deliveries hit 3.5M TEU in 2028, and MSC alone grew 11.7% in 2025: discipline is what oligopolies claim right before they defect. A Suez reopening releases 7 to 10% effective capacity on top. Rates below breakeven for years is the base case, not the tail." },
      { topic: "Tankers: supercycle or sanctions sugar-high?", bull: "The orderbook is near historic lows, the fleet is old, yards are full of containerships until 2028, and every sanctions wave stretches ton-miles: VLCCs above $100K/day (Nov 2025) with no supply response possible for years is the definition of a supercycle.", bear: "The tightness is political, not structural: a Russia settlement or sanctions unwind collapses ton-miles overnight, shadow-fleet vessels re-enter compliant trade, and oil demand is peaking in the medium term anyway. You are renting geopolitical friction, not owning growth." },
      { topic: "Does the IMO carbon framework create winners or just costs?", bull: "First-mover fleets (dual-fuel, efficient tonnage) gain a two-tier market: charterers pay up for compliant ships, old tonnage scraps early, and the framework effectively caps supply: regulation as a moat for modern fleets.", bear: "The October 2025 postponement (57-49 under US pressure) shows the rules can slip for years: capital spent on methanol or ammonia ships may chase a standard that keeps moving, while fuel availability lags every timeline. Early movers may have bought the wrong ships twice." }
    ],
    cycle: {
      where: "Split cycle, late 2025 into 2026: container in the down-leg (rates falling from Red Sea highs toward and below breakevens as the orderbook delivers), tankers near cycle highs on sanctions and low supply, dry bulk mid-cycle and choppy (BDI around 2,000 in early 2026). Disruption duration is the swing variable for all 3.",
      drivers: "Fleet growth vs trade growth (the only equation), chokepoint status (Suez/Panama), sanctions enforcement, Chinese commodity demand, IMO regulatory timeline, and yard capacity.",
      leads: [
        "Drewry World Container Index, weekly composite (free summary)",
        "Shanghai Containerized Freight Index, weekly (free)",
        "Baltic Dry Index and Baltic tanker indices (free via public tickers)",
        "IMF PortWatch chokepoint transit counts: Suez and Panama daily (free)",
        "Idle fleet and orderbook updates (Alphaliner/BIMCO public summaries)"
      ]
    },
    exposure: [
      { vehicle: "Liner equities (Maersk, Hapag-Lloyd, ZIM)", note: "Rate beta with balance-sheet cushions from 2021-22; ZIM is the leveraged spot proxy" },
      { vehicle: "Tanker owners (Frontline class)", note: "The tightness trade: spot leverage plus payout formulas" },
      { vehicle: "Dry bulk owners (Star Bulk class)", note: "China industrial beta with low orderbook support" },
      { vehicle: "Infrastructure & services (DP World-linked, Clarksons, forwarders)", note: "The tollbooth layer: volume exposure without rate ruin" },
      { vehicle: "Shipbuilders (HD Hyundai class)", note: "Second-derivative play: booked to 2028 at record prices" }
    ],
    catalysts: [
      { when: "Weekly (Thursdays)", what: "Drewry WCI and SCFI prints: the sector's tape" },
      { when: "Quarterly earnings", what: "Charter cover changes, payout formulas, capacity guidance (blanked sailings)" },
      { when: "October 2026", what: "IMO reconvenes on the Net-Zero Framework: the delayed adoption vote resets fuel economics" },
      { when: "Event-driven", what: "Red Sea transit normalization or escalation, sanctions waves, Panama water levels: each reprices effective supply within days" }
    ],
    data: [
      { series: "Drewry World Container Index", source: "drewry.co.uk weekly summary (free)", why: "The container spot benchmark: peak $10,377/FEU Sept 2021" },
      { series: "Baltic Dry Index", source: "Baltic Exchange via public tickers (free)", why: "Dry bulk's daily pulse since 1985; the 2008 crash chart every PM knows" },
      { series: "IMF PortWatch", source: "portwatch.imf.org (free)", why: "Satellite-based chokepoint transits: Suez diversions in near-real time" },
      { series: "UNCTAD Review of Maritime Transport", source: "unctad.org (free, annual)", why: "The industry's statistical bible: volumes, fleet, connectivity" },
      { series: "AIS ship-tracking snapshots", source: "MarineTraffic free tier", why: "Congestion and routing shifts visible before they hit indices" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Container rates fall first and hardest (discretionary goods); bulk follows China stimulus; tankers can decouple if oil keeps moving. Sell rate beta, keep tollbooths." },
      { regime: "Oil spike", behavior: "Bunker costs squeeze liners (fuel ~50% of voyage cost); tanker owners often win on volatility and floating storage. The segments hedge each other." },
      { regime: "Rates rising", behavior: "Ship finance tightens and NAVs compress; overleveraged owners hit covenants first. Favor low-LTV names: dry powder becomes strategy." },
      { regime: "Geopolitical shock", behavior: "Buy disruption, carefully: chokepoint closures and sanctions absorb capacity and spike rates (Red Sea 2024 template), but war-risk premiums and demand destruction cap the trade's duration." }
    ]
  },

  players: [
    { name: "MSC", role: "Container #1", country: "CH", real: true, note: "~7.1M TEU and ~20% share at end-2025 after adding ~832K TEU in a year: private, Geneva-based, and outbuilding everyone" },
    { name: "Maersk", role: "Container #2, integrator", country: "DK", real: true, note: "4.6M TEU; 2025 revenue ~$54B, EBITDA $9.6B (down from $12.1B): betting on end-to-end logistics over pure scale" },
    { name: "CMA CGM", role: "Container #3", country: "FR", real: true, note: "4.1M TEU; $54.4B revenue and $10.6B EBITDA in 2025: family-owned, buying media and logistics with boom cash" },
    { name: "COSCO Shipping", role: "China's state champion", country: "CN", real: true, note: "3.6M TEU plus ports and yards: vertical integration as industrial policy" },
    { name: "Hapag-Lloyd", role: "Container #5, Gemini partner", country: "DE", real: true, note: "Paired with Maersk in the Gemini network (Feb 2025) chasing 90%+ schedule reliability" },
    { name: "Frontline", role: "Tanker bellwether", country: "NO", real: true, note: "John Fredriksen's spot-leveraged VLCC fleet: the sector's cleanest cycle expression" },
    { name: "Star Bulk", role: "Dry bulk consolidator", country: "GR", real: true, note: "One of the largest listed bulk fleets; Greek shipowning tradition in public-market form" },
    { name: "HD Hyundai (KSOE)", role: "Shipbuilding leader", country: "KR", real: true, note: "The high-value yard complex: dual-fuel and LNG carriers booked years out" }
  ],

  geography: [
    { country: "GR", role: "Largest shipowning nation", note: "Greek owners control ~20% of world tonnage: generations of cycle-timing capital" },
    { country: "CN", role: "Builder, trader, owner", note: "Roughly half of shipbuilding output, the biggest port system, COSCO, and leasing giants" },
    { country: "KR", role: "High-value shipbuilding", note: "LNG carriers and dual-fuel tonnage: the technology end of the yard market" },
    { country: "SG", role: "Bunkering & transshipment hub", note: "The world's fuel station and Southeast Asia's box-switching yard" },
    { country: "DK", role: "Maersk's home", note: "Copenhagen runs liner shipping's integration experiment" },
    { country: "CH", role: "MSC's Geneva base", note: "The largest fleet on Earth is run from a landlocked country: shipping is paperwork plus steel" }
  ],

  cycles: [
    { year: 1956, title: "The container is born", kind: "shift", text: "Malcom McLean's Ideal X carries 58 boxes from Newark to Houston; standardized containers cut port costs ~90% and quietly enable globalization. Lesson: the biggest returns in shipping came from changing the box, not the ship." },
    { year: 2008, title: "The BDI collapse", kind: "bust", text: "The Baltic Dry Index peaks at 11,793 in May 2008 and hits 663 by December: down 94% in about 7 months as the China supercycle meets the crisis, with a record orderbook arriving into the wreckage. Lesson: shipping busts are fastest where the boom was loudest." },
    { year: 2016, title: "Hanjin goes under", kind: "bust", text: "The world's 7th-largest container line collapses mid-voyage, stranding ~$14B of cargo at sea and triggering the alliance-and-merger wave that built today's oligopoly. Lesson: in commodity shipping, the weakest balance sheet sets the clearing price until it disappears." },
    { year: 2021, title: "The COVID rate mania", kind: "boom", text: "Port logjams plus goods demand send the Drewry WCI to $10,377/FEU (Sept 2021), ~7x pre-pandemic; liners earn more in 2 years than in the prior 2 decades, and the Ever Given blocks Suez for 6 days as the era's perfect emblem. Lesson: windfalls finance the next glut: the 2021-22 cash became the 2027-28 orderbook." },
    { year: 2024, title: "Red Sea rerouting", kind: "shift", text: "Houthi attacks from December 2023 push carriers around the Cape of Good Hope, absorbing 7 to 10% of container capacity and respiking rates to the second-highest levels ever, masking the building oversupply. Lesson: disruption is capacity destruction in disguise, and it reverses without notice." }
  ],

  risks: [
    { name: "Orderbook delivery wave into normalization", severity: 4, likelihood: 4, transmission: "2027-28 deliveries (up to 3.5M TEU/yr) + Red Sea reopening -> effective capacity jumps double digits -> rates below cash breakeven -> weakest liners burn cash and defect on discipline." },
    { name: "Chokepoint escalation", severity: 4, likelihood: 3, transmission: "Hormuz or Taiwan Strait disruption -> war-risk premiums spike and routes stretch -> rates surge but volumes and insurability crack -> the upside case becomes uninvestable." },
    { name: "Trade war and port-fee weaponization", severity: 4, likelihood: 3, transmission: "Tariff rounds + US fees on Chinese-built tonnage (2025) -> trade volumes soften while fleet deployment fragments by ship nationality -> costs rise on shrinking cargo." },
    { name: "Decarbonization cost shock", severity: 3, likelihood: 3, transmission: "IMO framework adopted (or EU acts alone) -> carbon costs land on old tonnage -> early scrapping tightens supply but capex-heavy fuel bets strand whoever chose wrong." },
    { name: "Counterparty collapse", severity: 3, likelihood: 2, transmission: "Prolonged sub-breakeven rates -> a leveraged liner or major charterer fails (Hanjin template) -> cargo stranded, charters repudiated, and cascading credit losses across owners and lessors." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["More than 80% of everything traded internationally travels by ship: about 12.7B tons a year in containerships (boxes of goods), tankers (oil), and bulk carriers (ore and grain). The strange part is the price: shipping a container cost about $1,500 in 2019, over $10,000 in late 2021, then $1,500 again by 2023. Same ships, same routes: what changed was the balance between available ships and cargo, which is the entire industry in one sentence."] },
    L2: { title: "Intermediate", text: ["Ships take 2 to 3 years to build and last 25, so supply always arrives late: booms trigger orders that deliver into busts. Costs are mostly fixed per day, so earnings swing violently around a breakeven (a supertanker breaking even near $30K/day earned $100K+ in late 2025). Container shipping is an oligopoly (MSC ~20% of capacity, top 5 over 60%) that manages supply through alliances; tankers and dry bulk are fragmented spot markets. Watch one ratio above all: the orderbook as a % of the fleet, near record highs for containers (~32-38%) and near lows for tankers."] },
    L3: { title: "Advanced", text: ["Value assets, not earnings: NAV (broker-assessed fleet value minus net debt) anchors the equities, and P/NAV discounts widen in busts. Segment the exposure: liners carry network economics and contract cover, tramp owners are pure spot beta with a charter-timing decision. Model effective capacity, not nominal: Red Sea diversions absorbed 7 to 10% of the container fleet from December 2023 and respiked rates to the second-highest levels ever; normalization returns that capacity precisely as the 13M TEU orderbook delivers. Fuel is ~50% of voyage cost, so bunker spreads and dual-fuel premiums are margin variables, not footnotes."] },
    L4: { title: "Expert", text: ["Trade the split cycle: container down-leg (delivery wave 2.1M TEU in 2025 rising to 3.5M in 2028) against tanker/bulk tightness (historic-low orderbooks, sanctions stretching ton-miles, VLCCs above $100K/day in Nov 2025). Live debates: whether liner consolidation holds pricing discipline through the glut, whether tanker strength survives a sanctions unwind, and whether the IMO's postponed Net-Zero Framework (57-49 delay vote, Oct 2025; reconvenes Oct 2026) makes modern fleets a moat or a stranded bet. The weekly tape is free: Drewry WCI, SCFI, BDI, and PortWatch transits."] },
    L5: { title: "Institutional", text: ["Allocator's frame: shipping is not a buy-and-hold industry, it is a cycle-timing asset class where the entry point does the work of the business model. Core the infrastructure layer (ports, brokers, forwarders) for through-cycle compounding; express views on the fleet cycle through owners with fortress balance sheets and counter-cyclical management, sized as trades with exits. Respect the sector's one iron law: capital destroys itself at the top (2021-22 windfalls became the 2027-28 orderbook) and mints dynasties at the bottom, which is how Greek families came to control ~20% of world tonnage. The freight tape is public and weekly; the discipline to act against it is the entire edge."] }
  },

  quiz: [
    { q: "Roughly how much of international goods trade by volume moves by sea?", choices: ["About 25%", "About half", "Over 80% (12.7B tons in 2024, per UNCTAD)", "Under 10%"], answer: 2, explain: "Ships carry the physical economy: over 80% of trade volume, which is why freight rates feed straight into global inflation." },
    { q: "The Drewry World Container Index went from its September 2021 peak to September 2023 by:", choices: ["Rising another 50%", "Falling 86%: $10,377 to about $1,480 per FEU", "Staying flat", "Falling 10%"], answer: 1, explain: "Same fleet, same routes: the pandemic squeeze unwound and overcapacity returned. Shipping prices the balance, not the service." },
    { q: "Why did container rates respike in 2024?", choices: ["A demand boom", "Houthi attacks closed the Red Sea route, forcing Cape of Good Hope diversions that absorbed 7 to 10% of capacity", "New fuel taxes", "A canal expansion"], answer: 1, explain: "Longer routes soak up ships: disruption is effective capacity destruction, and rates hit their second-highest levels ever." },
    { q: "Ships order-to-delivery lag is 2 to 3 years. The consequence is:", choices: ["Supply responds instantly", "Booms trigger ordering that delivers into the next bust: the cycle's engine", "Rates never move", "Yards stay empty"], answer: 1, explain: "The 2021-22 windfall financed a ~13M TEU orderbook (roughly a third of the fleet) delivering through 2028: the 2008 pattern repeating." },
    { q: "The container market's structure today is best described as:", choices: ["Perfect competition", "An alliance-organized oligopoly: MSC ~20% of capacity, top 5 over 60%", "A state monopoly", "Thousands of equal players"], answer: 1, explain: "Consolidation after the 2010s bloodbath (Hanjin's 2016 collapse included) concentrated liner capacity; discipline through the coming glut is the open question." },
    { q: "The IMO Net-Zero Framework's status after October 2025:", choices: ["Fully in force", "Adoption postponed 12 months by a 57-49 vote under US pressure; talks resume October 2026", "Abandoned forever", "Replaced by national rules only"], answer: 1, explain: "Approved at MEPC 83 in April 2025 as the first sector-wide fuel standard plus carbon price, then delayed: fuel-choice bets now hang on a moving timeline." },
    { q: "A VLCC with a ~$30K/day breakeven earning $100K+/day (Nov 2025) illustrates:", choices: ["Stable utility economics", "Extreme operating leverage: small supply-demand imbalances move earnings multiples of costs", "Accounting fraud", "Government price-setting"], answer: 1, explain: "Costs are mostly fixed per day, so the spread between rate and breakeven is nearly pure cash flow: in both directions." },
    { q: "The best through-cycle economics in the maritime value chain belong to:", choices: ["Shipowners", "Shipyards", "Ports and terminals: concession-protected local monopolies paid on volume, not rates", "Bunker suppliers"], answer: 2, explain: "Terminal operators earned steadily through the 2023 rate crash that gutted their carrier customers: the tollbooth beats the highway." }
  ],

  sources: [
    { name: "UNCTAD Review of Maritime Transport 2025", url: "https://unctad.org/publication/review-maritime-transport-2025", feeds: "volumes, fleet, trade share" },
    { name: "Drewry World Container Index", url: "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry", feeds: "container spot rates" },
    { name: "IMO Net-Zero Framework (press & FAQs)", url: "https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-net-zero-shipping-talks-to-resume-in-2026.aspx", feeds: "decarbonization regulation" },
    { name: "BIMCO / Alphaliner orderbook analyses (via Maritime Executive, Container News)", url: "https://maritime-executive.com/article/bimco-containership-orderbook-reaches-new-high-fueling-growth-to-2029", feeds: "orderbook, fleet growth" }
  ]
};
