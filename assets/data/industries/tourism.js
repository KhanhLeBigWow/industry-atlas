/* Industry Atlas - TOURISM & HOSPITALITY (full module, research-backed)
 * Anchors: WTTC Economic Impact Research 2024: travel & tourism GDP contribution
 * $11.1T in 2024 (1 in 10 dollars of global GDP), 348M jobs, international
 * visitor spending $1.89T, domestic $5.4T; 2034 forecast $16T (11.4% of GDP).
 * UN Tourism (International Tourism Highlights, 2025 edition): ~1.5B
 * international arrivals in 2024 (full pre-pandemic recovery), 1.52B in 2025
 * (+4% vs 2024); France 102M and Spain 93.7M arrivals led 2024; US tourism
 * receipts $213B (2025). Booking Holdings 10-K: revenue $23.7B, net income
 * $5.8B (2024), 1.235B room nights (2023). Expedia: revenue $13.69B, net
 * income $1.234B (2024). Airbnb: revenue $11.1B, net income $2.65B (2024).
 * Overtourism: Mount Fuji 4,000 climbers/day cap + Y2,000 fee (2024); Venice
 * day-tripper fee; Spain fined Airbnb $75M over unlicensed listings (2025).
 * STR/CoStar: record nominal US hotel ADR/RevPAR 2024; real RevPAR below 2019. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["tourism"] = {
  meta: {
    id: "tourism", name: "Tourism & Hospitality", sector: "real-assets", status: "full",
    tagline: "1 in 10 dollars of global GDP, sold one perishable night at a time: an industry of empty rooms racing midnight.",
    marketSize: { value: 11.1, unit: "$T", asOf: 2024, note: "WTTC total GDP contribution (direct + indirect + induced); international visitor spending $1.89T of it, domestic $5.4T (WTTC, 2024)" },
    cagr: { value: 4, range: [3, 6], horizon: "2024-2034" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 3, regulation: 3, disruption: 3
  },
  newsQuery: '("international tourist arrivals" OR "hotel RevPAR" OR overtourism OR "Booking Holdings" OR "tourist tax" OR Airbnb OR Expedia)',

  overview: {
    definition: "Tourism & hospitality is the machinery that moves, houses, feeds, and entertains people away from home: hotels and short-term rentals, tour operators and cruise lines, online travel agencies, and the experiences layered on top. Its defining economics: the inventory is perishable. An unsold room night or cabin expires at midnight worth exactly $0.",
    howItWorks: [
      "Scale first: WTTC's 2024 research put travel and tourism's total GDP contribution at $11.1T, roughly 1 in every 10 dollars of global output, supporting 348M jobs. UN Tourism counted about 1.5B international arrivals in 2024, the full recovery to pre-pandemic levels, rising to an estimated 1.52B in 2025 (+4%). Domestic travel is the quiet giant: $5.4T of spending vs $1.89T international (WTTC, 2024). Few industries touch more of the real economy: aviation, real estate, restaurants, retail, and payments all clip the same trip.",
      "The hotel industry split itself in two decades ago. Brands (Marriott, Hilton, Accor) sold their real estate and became asset-light franchisors: they collect 4% to 6% of room revenue as fees, plus loyalty and marketing charges, on rooms someone else owns. Owners (REITs, private equity, families) carry the buildings, the debt, and the operating leverage. The result is two opposite P&Ls wearing the same logo: franchisors compound fee streams at software-like margins; owners ride RevPAR (revenue per available room, the industry's master metric: occupancy times average daily rate) with full cyclical beta.",
      "Distribution is a duopoly tax. Booking Holdings ($23.7B revenue, $5.8B net income, 2024; 1.235B room nights booked in 2023) and Expedia ($13.69B revenue, 2024) intermediate a huge share of independent and leisure lodging demand, charging commissions of roughly 15% to 25%. Their moat is a two-sided network plus performance-marketing scale: they are among Google's largest advertisers, and much of their margin is arbitrage between what a click costs and what a booking pays. Airbnb ($11.1B revenue, $2.65B net income, 2024) built the third pole by converting spare housing into lodging supply. Hotel brands fight back with loyalty programs and direct-booking discounts: distribution mix is the industry's permanent tug-of-war.",
      "The cycle is demand-fast, supply-slow. Travel demand swings with confidence, employment, and FX within months; hotel supply answers in 3-to-5-year construction cycles, and cruise ships take longer. That mismatch makes pricing violent in both directions: post-COVID 'revenge travel' pushed US hotel ADR and RevPAR to record nominal highs (STR/CoStar data), even as inflation-adjusted RevPAR lagged 2019. Meanwhile the product itself is shifting from things to memories: experiences, tours, and events are the fastest-growing wallet share, and the backlash is real too: from Venice's day-tripper fee to Mount Fuji's 4,000-climbers-a-day cap (2024) to Spain fining Airbnb $75M over unlicensed listings (2025), destinations have started rationing themselves."
    ],
    history: [
      { era: "1841-1950", title: "Package birth", text: "Thomas Cook invents the organized tour; rail, then ocean liners, industrialize leisure travel for the middle class." },
      { era: "1950-1990", title: "Jet-age mass tourism", text: "The 707 and the package holiday build the Mediterranean coast; hotel chains (Hilton, Holiday Inn) standardize the room; arrivals climb from 25M (1950) to 400M+." },
      { era: "1995-2010", title: "The OTA revolution", text: "Expedia (1996) and Booking.com move travel online; opaque inventory becomes searchable; travel agents' storefronts close while a new intermediary duopoly forms; hotel brands go asset-light." },
      { era: "2010-2019", title: "Boom and platforms", text: "Chinese outbound travel explodes, Airbnb turns apartments into inventory, arrivals hit 1.46B (2019); overtourism enters the vocabulary in Venice and Barcelona." },
      { era: "2020-present", title: "Collapse and record recovery", text: "COVID cuts international arrivals ~70% in 2020, the industry's worst year ever; revenge travel then drives a full recovery by 2024 (~1.5B arrivals, UN Tourism) with record nominal hotel rates, and destinations begin taxing and capping the crowds." }
    ],
    trends: [
      { title: "Experiences over things", direction: "up", text: "Tours, activities, dining, and events are the fastest-growing travel wallet share; the tours-and-activities segment is the last big offline pool OTAs and Airbnb are racing to digitize." },
      { title: "Overtourism backlash", direction: "shift", text: "Venice charges day-trippers, Mount Fuji caps climbers at 4,000/day with a Y2,000 fee (2024), Amsterdam ran a 'Stay Away' campaign, and Spain fined Airbnb $75M (2025): rationing by fee and cap is now policy." },
      { title: "Direct vs OTA tug-of-war", direction: "shift", text: "Brands push loyalty and member rates to reclaim distribution; OTAs answer with their own loyalty and fintech; AI trip-planning agents threaten to reshuffle who owns the customer entirely." },
      { title: "Rate-led, not room-led growth", direction: "up", text: "Post-2022, revenue records came from price (record nominal ADR/RevPAR per STR/CoStar) more than occupancy; real, inflation-adjusted RevPAR only slowly reclaimed 2019." },
      { title: "Asia rebalancing", direction: "up", text: "Chinese outbound recovery lagged the West; Japan boomed on a weak yen (36.8M arrivals, 2024); the next decade of arrivals growth is disproportionately Asian." }
    ],
    outlook: "The demand story is close to structural: rising global middle classes buy travel before almost anything else discretionary, and UN Tourism's 1.52B arrivals (2025) sits on a decades-long upward staircase interrupted only by shocks. The economics increasingly favor the toll-takers over the asset owners: franchisors, OTAs, and loyalty ecosystems compound fees on other people's capital, while owners and cruise lines carry the leverage and the cyclical risk. Watch 3 fault lines: whether AI agents reorder distribution, whether overtourism policy caps volume growth in marquee destinations, and whether the post-COVID price umbrella holds once supply catches up."
  },

  structure: {
    suppliers: [
      { name: "Real estate & construction", note: "Hotels are buildings first: owners, developers, and REITs supply the physical rooms" },
      { name: "Airlines & cruise shipyards", note: "Seats and cabins are the industry's feedstock; both are their own capital-intensive worlds" },
      { name: "Labor", note: "1 in 10 jobs globally touches travel (WTTC, 348M in 2024); housekeeping-to-chef wage inflation is the sector's core cost line" },
      { name: "Tech & GDS plumbing", note: "Amadeus/Sabre distribution rails, property-management systems, revenue-management software" }
    ],
    producers: [
      { name: "Hotel brands (Marriott, Hilton, Accor, IHG)", note: "Asset-light fee machines: franchise + management contracts on millions of rooms" },
      { name: "Hotel owners (REITs, PE, families)", note: "Carry the buildings and the beta; Host class REITs are the listed pure-play" },
      { name: "Cruise lines (Royal Caribbean, Carnival, NCL)", note: "Floating all-inclusive resorts: high leverage, high operating leverage" },
      { name: "Alternative lodging (Airbnb, Vrbo)", note: "Housing converted to inventory: $11.1B revenue at Airbnb (2024)" },
      { name: "Tour operators & experiences (TUI, Viator, GetYourGuide)", note: "Packaging and the fast-digitizing activities layer" }
    ],
    distributors: [
      { name: "OTA duopoly (Booking Holdings, Expedia)", note: "$23.7B and $13.69B revenue respectively (2024); 15% to 25% commissions on intermediated nights" },
      { name: "Metasearch & Google", note: "Google is the real toll booth: OTAs are among its largest advertisers" },
      { name: "Direct & loyalty channels", note: "Brand.com plus loyalty programs: the margin-defense channel" },
      { name: "Corporate travel (Amex GBT, CWT)", note: "Managed business travel: negotiated rates, slower post-COVID recovery" }
    ],
    customers: [
      { name: "Leisure travelers", note: "The volume engine: confidence- and FX-sensitive, increasingly experience-led" },
      { name: "Business & group travel", note: "The profit filler: conferences and corporate rates smooth midweek occupancy" },
      { name: "Domestic travelers", note: "The stabilizer: $5.4T of spending (WTTC, 2024), 3x international" }
    ],
    regulators: [
      { name: "Destination governments", note: "Tourist taxes, visa policy, short-term rental rules, and now caps: Venice fees, Fuji quotas" },
      { name: "Competition authorities", note: "EU DMA gatekeeper rules hit Booking; rate-parity clauses litigated across Europe" },
      { name: "Safety & maritime regimes", note: "Aviation and cruise safety rules; flag-state law governs the high seas" }
    ],
    capital: [
      { name: "Hotel real estate capital", note: "REITs, private equity, and CMBS debt price rooms like any other real asset: per key, off cap rates" },
      { name: "High-yield & cruise debt", note: "Cruise lines borrowed to survive 2020; deleveraging is their equity story" },
      { name: "Franchise cash flows", note: "Asset-light brands self-fund: fee streams support buybacks rather than buildings" }
    ]
  },

  valueChain: {
    intro: "From a destination's raw appeal to the loyalty program that recycles the traveler. The physical assets earn the least reliable returns; the toll-takers on top of them, fees, commissions, and points, capture the compounding.",
    stages: [
      { id: "destinations", name: "Destinations & attractions", what: "The places themselves: cities, parks, resorts, events", players: "Governments, Disney-class operators, national park systems", valueCapture: 2,
        economics: { grossMargin: [10, 30], capitalIntensity: 5, concentration: 1 },
        linksTo: ["real-estate", "construction", "entertainment"],
        deeper: "The scarcest asset in travel is an irreplaceable place, yet places capture value worst: benefits leak to thousands of local businesses while costs (crowding, housing pressure) concentrate on residents. Hence the policy turn: Venice day-tripper fees, Fuji caps, tourist taxes nearly everywhere: destinations pricing what they used to give away." },
      { id: "transport", name: "Getting there", what: "Flights, cruises, rail, rental cars", players: "Airlines, Royal Caribbean, Carnival, rail operators", valueCapture: 2,
        economics: { grossMargin: [10, 25], capitalIntensity: 5, concentration: 3 },
        linksTo: ["aviation", "shipping", "rail"],
        deeper: "Travel's capital-heavy on-ramp. Airlines are their own brutal industry; cruise is the hybrid: a transport asset priced like a resort, with onboard spend (drinks, excursions, casinos) driving margin. Cruise's post-COVID deleveraging plus record bookings made it the recovery's best equity trade." },
      { id: "lodging", name: "Lodging supply", what: "Owning and operating the rooms", players: "Hotel REITs, PE owners, Airbnb hosts", valueCapture: 3,
        economics: { grossMargin: [25, 40], capitalIntensity: 5, concentration: 1 },
        linksTo: ["real-estate", "restaurants"],
        deeper: "Owners hold the operating leverage: high fixed costs mean a few points of occupancy swing EBITDA violently in both directions. Valued per key off cap rates like the real estate it is. Airbnb's genius was adding supply with zero construction: 8M+ listings of other people's housing, which is precisely why cities now regulate it." },
      { id: "brands", name: "Brands & franchising", what: "Flags, standards, management contracts", players: "Marriott, Hilton, Accor, IHG", valueCapture: 5,
        economics: { grossMargin: [60, 80], capitalIntensity: 1, concentration: 4 },
        linksTo: ["luxury", "restaurants"],
        deeper: "The industry's best business model: collect 4% to 6% of room revenue plus loyalty and marketing fees on rooms someone else financed. Marriott flags roughly 1.7M rooms while owning almost none. Net unit growth (the pipeline of newly flagged rooms) is the compounding engine; the moat is the loyalty base that makes a flag worth paying for." },
      { id: "distribution", name: "OTAs & distribution", what: "Search, booking, and the commission toll", players: "Booking Holdings, Expedia, Trip.com, Google", valueCapture: 5,
        economics: { grossMargin: [70, 90], capitalIntensity: 1, concentration: 5 },
        linksTo: ["ecommerce", "payments"],
        deeper: "The duopoly clips 15% to 25% of intermediated nights. Booking's model is the purer: agency commissions, ruthless performance-marketing math, and $5.8B of net income (2024). The perpetual risks: Google keeping more of the funnel, regulators (EU DMA) trimming the terms, and AI agents becoming the new front door. Trip.com owns the Chinese outbound wave." },
      { id: "experiences", name: "Experiences & loyalty", what: "Tours, activities, events, points ecosystems", players: "Viator, GetYourGuide, Airbnb Experiences, co-brand card programs", valueCapture: 4,
        economics: { grossMargin: [50, 75], capitalIntensity: 2, concentration: 2 },
        linksTo: ["entertainment", "payments", "banking"],
        deeper: "Two growth engines share this stage. Experiences: the last big offline pool (walking tours to bungee jumps), fragmented among tiny operators, being aggregated at 20%+ take rates. Loyalty: points are a currency business: brands sell points to co-brand card banks for billions in high-margin revenue, and the programs double as the direct-booking moat." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector in 4 P&L species. Asset-light brands: fees (4% to 6% of room revenue) times a growing room base: 60%+ margins, minimal capex, buyback machines: the compounding is net unit growth times RevPAR. Owners and cruise lines: high fixed costs and real assets, so EBITDA is a leveraged bet on RevPAR (occupancy x ADR) or net yields: brutal downcycles, explosive recoveries. OTAs: take rate on gross bookings minus performance marketing: the spread between what a click costs and what a booking pays. Experiences and loyalty: commission and points economics: high margin, growth priced accordingly.",
      "The industry's shared physics is perishable inventory plus demand shocks. Revenue management (dynamic pricing born in this sector and airlines) exists to fill rooms before midnight kills them. Fixed-cost bases mean operating leverage cuts both ways: 2020 vaporized global arrivals by ~70% and produced the industry's worst year ever, while 2022-24 revenge travel produced record nominal ADR and RevPAR (STR/CoStar) and record OTA profits. Balance sheets tell you who survives the next shock: franchisors barely noticed COVID; cruise lines still carry the debt they borrowed to live through it."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 30, capitalIntensity: 55, pricingPower: 55, cyclicality: 85, operatingLeverage: 75 },
    lines: [
      { label: "RevPAR (occupancy x ADR)", note: "The master hotel metric: rate-led growth is quality, occupancy-led is recovery" },
      { label: "Gross bookings & take rate", note: "The OTA tape: Booking's room nights (1.235B, 2023) times commission" },
      { label: "Net unit growth", note: "Franchisors' compounding engine: newly flagged rooms in the pipeline" },
      { label: "Loyalty & co-brand fees", note: "Points sold to banks: high-margin, recession-resistant revenue" },
      { label: "Onboard / ancillary spend", note: "Cruise margin lives in drinks, excursions, casinos; hotels' in F&B and fees" }
    ],
    unitEconomics: {
      unit: "per US hotel room night (illustrative, 2024)",
      items: [
        { label: "ADR / occupancy", value: "~$150-160 / ~63%", note: "record nominal ADR; RevPAR ~$100 (STR/CoStar vintage)" },
        { label: "OTA commission if intermediated", value: "15% to 25%", note: "the distribution toll; direct bookings escape it" },
        { label: "Brand fees", value: "4% to 6% of room revenue", note: "plus loyalty/marketing charges: the franchisor's cut" },
        { label: "Owner margin", value: "GOP ~35-45% before rent/debt", note: "labor is the biggest line; leverage eats the rest" }
      ]
    }
  },

  kpiRefs: ["pay-take-rate", "re-caprate"],
  kpiLocal: [
    {
      id: "tourism-revpar", name: "RevPAR (Revenue per Available Room)", industries: ["tourism"],
      definition: "Room revenue divided by available room nights: the hotel industry's single-number health check, blending price and occupancy.",
      formula: "RevPAR = Occupancy % x ADR (average daily rate)",
      interpretation: "Decompose it always: rate-led RevPAR growth (pricing power) is high quality; occupancy-led growth is recovery; both falling is the downcycle. US RevPAR hit record nominal levels in 2024, but real RevPAR lagged 2019: inflation did the lifting.",
      healthy: "RevPAR growing with ADR leading; premium to comp set", warning: "Discounting to hold occupancy; real RevPAR shrinking" },
    {
      id: "tourism-direct-mix", name: "Direct booking mix", industries: ["tourism"],
      definition: "Share of bookings arriving through brand.com and loyalty channels rather than OTAs.",
      formula: "Direct mix = direct-channel room nights / total room nights",
      interpretation: "Every point of direct mix saves 15% to 25% commission and deepens the loyalty moat. The metric measures who owns the customer: the flag or the intermediary.",
      healthy: "Rising direct mix with growing loyalty penetration", warning: "OTA dependence rising; commissions outpacing RevPAR" }
  ],

  health: {
    intro: "Brand health is fee growth and loyalty gravity; owner health is RevPAR versus fixed costs and debt; OTA health is take rate versus traffic-acquisition costs. Everyone's health is the consumer's willingness to travel.",
    pillars: [
      { name: "Demand & bookings", weight: 25, metrics: "Arrivals, forward bookings, TSA throughput, booking windows", healthy: "Forward bookings up y/y; lengthening windows", warning: "Shortening windows, cancellations rising: the classic pre-recession tell" },
      { name: "Pricing power", weight: 20, metrics: "ADR growth vs inflation, rate-led vs occupancy-led RevPAR", healthy: "Real ADR growth; rate integrity in downturn", warning: "Stealth discounting via packages and points" },
      { name: "Distribution control", weight: 20, metrics: "Direct mix, loyalty penetration, commission costs", healthy: "Direct mix rising; loyalty members > 50% of nights", warning: "OTA share creeping up; marketing costs outrunning bookings" },
      { name: "Balance sheet & asset intensity", weight: 20, metrics: "Leverage vs asset type, fee mix, capex needs", healthy: "Asset-light fees or moderate LTV on owned assets", warning: "Cruise-style leverage into a demand shock" },
      { name: "License to operate", weight: 15, metrics: "Destination policy, tourist taxes, STR regulation exposure", healthy: "Diversified destinations; constructive local ties", warning: "Concentration in cap-and-fee markets (Venice, Barcelona pattern)" }
    ],
    scoringNote: "Weight the balance sheet double ahead of any macro cloud: in tourism, demand shocks are not tail events, they are the operating environment: 2001, 2008, 2020 in a single working lifetime."
  },

  valuation: {
    intro: "One sector, 4 valuation languages: fee multiples for franchisors, per-key and cap rates for owners, EBITDA and FCF for OTAs and cruise, and take-rate math for platforms.",
    methods: [
      { name: "EV / EBITDA (owners, cruise, blended)", use: "Hotel owners, cruise lines, diversified operators", avoid: "Peak-RevPAR years as the base: normalize the cycle", strengths: "Standard, comparable, debt-inclusive", weaknesses: "Hides asset intensity differences", range: { low: 8, high: 13, asOf: 2024, note: "owners and cruise at the low end, quality operators higher" } },
      { name: "Fee-stream multiple (asset-light brands)", use: "Marriott/Hilton class franchisors", avoid: "Lumping them with owners: they are royalty streams, not real estate", strengths: "Matches the economics: recurring fees, low capex", weaknesses: "Pays up for net-unit-growth promises", range: { low: 14, high: 18, asOf: 2024, note: "EV/EBITDA premium to owners; the sector's quality shelf" } },
      { name: "Per-key / cap rate (hotel real estate)", use: "REITs and private-market hotel deals", avoid: "Trophy-asset comps for commodity boxes", strengths: "Grounded in replacement cost and income", weaknesses: "Cap rates swing with credit, not just lodging", range: { low: 6, high: 9, asOf: 2024, note: "cap rate %, full-service US hotels; per-key varies 10x by segment" } },
      { name: "Gross bookings x take rate (OTAs/platforms)", use: "Booking, Expedia, Airbnb: model GBV, take rate, and marketing efficiency", avoid: "Revenue multiples that ignore who pays for traffic", strengths: "Exposes the real unit economics", weaknesses: "AI-distribution risk is unmodelable in the multiple", range: { low: 12, high: 17, asOf: 2024, note: "EV/EBITDA; Booking commands the premium on margin and buybacks" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a travel name fast: normalized EBITDA times a model-appropriate multiple (owner, brand, or platform), minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 12, step: 0.2, value: 3, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 20, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 30, step: 1, value: 5, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays travel as a structural-demand story wearing cyclical clothes: core the toll-takers (OTA duopoly, asset-light franchisors, loyalty economics) that compound on other people's capital, trade the leveraged assets (owners, cruise) as cycle instruments, and treat every demand shock as the entry point it has historically been. Distribution disruption by AI agents is the live structural question worth real underwriting.",
    debates: [
      { topic: "Do AI agents break the OTA duopoly?", bull: "Booking's moat is two-sided liquidity and supply integration, not the search box: any agent still needs inventory, payments, and support, and Booking is building the agentic layer itself with $5.8B of annual profit (2024) to spend defending.", bear: "The duopoly's margin IS the funnel: they arbitrage Google clicks into commissions. If travelers ask an assistant instead of searching, the paid-search moat evaporates and the commission compresses toward utility rates: the one scenario the multiple never priced." },
      { topic: "Is the asset-light premium permanent?", bull: "Fee streams on 4% to 6% of a growing global room base, near-zero capex, loyalty moats deepening: these are royalty companies compounding at software economics, and net unit growth is contractually visible years out.", bear: "Fees are a derivative of RevPAR: a real recession cuts them dollar for dollar; net unit growth slows when owners cannot finance construction; and the premium multiple assumes both keep compounding through a downturn they have never really been tested by at this valuation." },
      { topic: "Does overtourism cap the volume story?", bull: "Caps and fees hit a handful of marquee cities while demand redistributes: the world is not short of coastline, and pricing the crowds (Venice fees, Fuji quotas) makes flows more sustainable and more monetizable, not smaller.", bear: "The backlash is spreading, not containing: Spain's $75M Airbnb fine, STR bans across major cities, and resident politics turning anti-tourist in the exact places travelers most want to go: the industry's growth assumption meets a political ceiling in its highest-value markets." }
    ],
    cycle: {
      where: "Late recovery, early normalization: arrivals fully recovered (~1.5B in 2024, 1.52B in 2025 per UN Tourism), record nominal rates flattening, revenge-travel tailwind fading into GDP-like growth, with Chinese outbound the last big recovery leg still playing out.",
      drivers: "Consumer confidence and employment, FX (weak-currency destinations boom: Japan), airline capacity and fares, hotel supply growth, and destination policy.",
      leads: [
        "TSA checkpoint throughput (tsa.gov, free, daily): the US demand pulse",
        "UN Tourism World Tourism Barometer (free summaries): arrivals by region",
        "STR/CoStar weekly US RevPAR prints (free press summaries)",
        "OTA and hotel forward-booking commentary each earnings season",
        "Airline forward schedules and fare data (free aggregates): capacity precedes heads in beds"
      ]
    },
    exposure: [
      { vehicle: "OTA duopoly (Booking class)", note: "The toll booth: highest-margin exposure to global travel volume" },
      { vehicle: "Asset-light franchisors (Marriott/Hilton class)", note: "Royalty streams on the world's room base: the quality compounders" },
      { vehicle: "Hotel REITs (Host class)", note: "The RevPAR beta trade: buy fear, sell record-ADR euphoria" },
      { vehicle: "Cruise (Royal Caribbean class)", note: "Deleveraging + record bookings: equity torque on the balance sheet" },
      { vehicle: "Alt lodging & experiences (Airbnb class)", note: "The structural share-gainer, priced accordingly; regulation is the swing factor" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "RevPAR guidance, net unit growth, take rates, forward bookings: the sector tape" },
      { when: "January & May", what: "UN Tourism Barometer releases: the arrivals scoreboard and outlook" },
      { when: "Summer season (June-August)", what: "Peak-season pricing and overtourism flashpoints set the narrative" },
      { when: "Policy dates", what: "Tourist-tax votes, STR regulations, visa changes: destination-level repricing events" }
    ],
    data: [
      { series: "TSA checkpoint travel numbers", source: "tsa.gov (free, daily)", why: "Highest-frequency free travel demand series anywhere" },
      { series: "UN Tourism World Tourism Barometer", source: "untourism.int (free summaries)", why: "The global arrivals and receipts scoreboard" },
      { series: "WTTC Economic Impact Research", source: "wttc.org (free)", why: "GDP, jobs, and spending sizing by country" },
      { series: "US lodging CPI & travel spending", source: "FRED / BLS (free)", why: "Rate trends and the real-vs-nominal RevPAR check" },
      { series: "Company monthlies/quarterlies (STR summaries, airline traffic)", source: "company sites, CoStar press (free)", why: "RevPAR, bookings, and capacity at the coalface" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Leisure trades down before it cancels; group and corporate cancel first. Owners and cruise gap down on operating leverage; franchisors and OTAs fall less and recover first. Historically the sector's best entry regime." },
      { regime: "Oil spike", behavior: "Airfares rise and squeeze trip budgets: long-haul suffers, drive-to destinations and domestic win; cruise fuel bills bite margins directly." },
      { regime: "Rates rising", behavior: "Hotel cap rates widen and REIT NAVs compress; cruise refinancing costs bite; asset-light names are the relative shelter." },
      { regime: "Shock (pandemic, war, terror)", behavior: "The rehearsed disaster: demand vaporizes then V-recovers (2001, 2020 template). Own the balance sheets that survive; buy the survivors into the panic, not after the recovery headline." }
    ]
  },

  players: [
    { name: "Booking Holdings", role: "OTA duopoly leader", country: "US", real: true, note: "$23.7B revenue, $5.8B net income (2024); 1.235B room nights (2023): travel's toll booth" },
    { name: "Expedia Group", role: "OTA duopolist", country: "US", real: true, note: "$13.69B revenue (2024); Vrbo, Hotels.com: the US-centric half of the duopoly" },
    { name: "Marriott International", role: "Largest hotel franchisor", country: "US", real: true, note: "~1.7M rooms flagged, almost none owned: the asset-light archetype" },
    { name: "Hilton", role: "Asset-light franchisor", country: "US", real: true, note: "The purest fee-machine P&L in lodging; loyalty (Honors) is the moat" },
    { name: "Airbnb", role: "Alternative lodging platform", country: "US", real: true, note: "$11.1B revenue, $2.65B net income (2024): housing turned into hotel supply" },
    { name: "Trip.com Group", role: "Asia's OTA champion", country: "CN", real: true, note: "Owns Chinese outbound: the industry's biggest remaining recovery lever" },
    { name: "Accor", role: "European hotel major", country: "FR", real: true, note: "5,000+ hotels, luxury-to-economy: Europe's flag of flags" },
    { name: "Royal Caribbean", role: "Cruise leader", country: "US", real: true, note: "Record bookings and deleveraging: the recovery's standout equity" }
  ],

  geography: [
    { country: "FR", role: "Most-visited country", note: "102M arrivals (2024, UN Tourism); Accor's home; tourism as soft power" },
    { country: "ES", role: "Second-most visited, backlash epicenter", note: "93.7M arrivals (2024); Barcelona protests; $75M Airbnb fine (2025)" },
    { country: "US", role: "Receipts leader", note: "$213B tourism receipts (2025, UN Tourism data), 72.3M arrivals; the highest-spend visitors" },
    { country: "CN", role: "Largest outbound source", note: "Pre-COVID top spender; its lagging recovery is the sector's biggest open position" },
    { country: "JP", role: "Weak-yen boom", note: "36.8M arrivals (2024, record); overtourism arrived with them: Fuji caps, Kyoto fines" },
    { country: "IT", role: "Heritage superpower", note: "57.7M arrivals (2024); Venice's day-tripper fee is the overtourism policy lab" }
  ],

  cycles: [
    { year: 1996, title: "The OTA big bang", kind: "shift", text: "Expedia launches; Booking.com follows in Europe. Within 15 years the corner travel agent is gone and 2 platforms tax the world's room nights. Lesson: in travel, distribution shifts create more equity value than the assets ever did." },
    { year: 2001, title: "9/11 demand shock", kind: "bust", text: "Air travel and hotel demand crater overnight; recovery takes years and rewrites security costs into every trip. Lesson: travel demand is confidence: it vaporizes instantly and returns slowly." },
    { year: 2020, title: "COVID zero", kind: "bust", text: "International arrivals fall ~70%, the worst year in tourism history; cruise lines borrow billions to survive burning cash at sea. Lesson: in this sector the balance sheet is the survival kit, not the scorecard." },
    { year: 2023, title: "Revenge travel", kind: "boom", text: "Pent-up demand meets constrained supply: record nominal ADR and RevPAR, record OTA profits, planes and beaches full. Lesson: perishable-inventory industries reprice violently when demand returns before supply." },
    { year: 2025, title: "The overtourism turn", kind: "shift", text: "Venice charges entry, Fuji caps climbers, Spain fines Airbnb $75M, residents march in Barcelona and Mallorca. Lesson: when the product is a place, the residents are silent shareholders: ignore them and they regulate you." }
  ],

  risks: [
    { name: "Pandemic / geopolitical shock", severity: 5, likelihood: 2, transmission: "Borders close or fear spikes -> demand vaporizes in weeks -> fixed costs and debt burn cash -> leveraged owners and cruise dilute or default (the 2020 template)." },
    { name: "Recession in the consumer", severity: 4, likelihood: 3, transmission: "Discretionary budgets shrink -> trade-down then cancellation -> occupancy-led RevPAR decline -> operating leverage turns owners' EBITDA negative fast." },
    { name: "AI-agent disintermediation", severity: 3, likelihood: 3, transmission: "Trip planning moves from search to assistants -> paid-search funnel bypassed -> OTA take rates and hotel direct channels both repriced -> whoever owns the agent owns the customer." },
    { name: "Overtourism regulation", severity: 3, likelihood: 4, transmission: "Resident backlash -> caps, tourist taxes, STR bans in marquee cities -> volume ceilings and compliance costs exactly where demand and margins are highest." },
    { name: "Labor cost inflation", severity: 3, likelihood: 4, transmission: "Hospitality wages reset structurally higher -> GOP margins compress -> owners squeezed between brand standards and payrolls -> service cuts erode the product itself." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Tourism is one of the world's biggest industries: about 1 in every 10 dollars of global GDP ($11.1T in 2024, per WTTC) and roughly 1.5B international trips a year. Its key quirk: the product expires. An unsold hotel room tonight is worthless tomorrow, so the whole industry is built around filling seats and beds before midnight, and prices swing hard with demand."] },
    L2: { title: "Intermediate", text: ["Learn the 3 core P&Ls. Hotel brands like Marriott own almost no hotels: they collect 4% to 6% fees on rooms others own (high margin, low risk). Owners carry the buildings and live and die by RevPAR: occupancy times average daily rate. Online travel agencies (Booking: $23.7B revenue in 2024; Expedia) tax bookings at 15% to 25% commission. The toll-takers earn better returns than the asset owners: a pattern worth remembering across industries."] },
    L3: { title: "Advanced", text: ["Model the cycle: demand moves in months (confidence, FX, shocks), supply in years (construction), so pricing overshoots both ways: 2020's ~70% arrivals collapse, then 2023-24's record nominal RevPAR (real RevPAR lagged 2019: decompose rate vs occupancy always). Value each species in its own language: fee multiples for franchisors, per-key and cap rates for owners, gross bookings times take rate minus traffic costs for OTAs. Watch net unit growth for brands and direct-mix versus OTA dependence for everyone."] },
    L4: { title: "Expert", text: ["Trade the tape: TSA throughput daily, STR weekly RevPAR, UN Tourism barometers, forward-booking commentary. The live debates: whether AI agents dissolve the paid-search moat that funds the OTA duopoly's economics; whether the asset-light premium (14x to 18x fees) survives its first real recession test; whether overtourism policy (Venice fees, Fuji caps, Spain's $75M Airbnb fine) caps volume in the highest-value cities. Chinese outbound is the biggest open recovery position: Trip.com is its listed expression."] },
    L5: { title: "Institutional", text: ["Allocator's frame: travel demand is one of the most reliable long-run growth streams in the global consumer (middle classes buy trips before nearly anything else), but the sector rewards owning the fee streams on that growth, not the assets under it. Core the royalty models (franchisors, OTA platforms, loyalty economics), rent the leveraged beta (REITs, cruise) across the cycle, and underwrite shocks as scheduled events: 2001, 2008, 2020 says the next one is a when. The structural pivot to price into everything: distribution is repricing again, from search to agents, and in travel the distribution winner has always captured more value than the destination."] }
  },

  quiz: [
    { q: "Travel & tourism's total contribution to global GDP (WTTC, 2024) was roughly:", choices: ["$1T, about 1%", "$11.1T, about 1 in 10 dollars of global output", "$50T, half of GDP", "$500B"], answer: 1, explain: "WTTC's 2024 research: $11.1T total contribution, 348M jobs, with domestic spending ($5.4T) nearly 3x international ($1.89T)." },
    { q: "The hotel industry's master metric, RevPAR, equals:", choices: ["Revenue per employee", "Occupancy times average daily rate", "Rooms divided by revenue", "Profit per guest"], answer: 1, explain: "RevPAR blends how full you are with what you charge. Decompose it: rate-led growth is pricing power, occupancy-led is recovery." },
    { q: "Marriott and Hilton make most of their money by:", choices: ["Owning hotel real estate", "Running restaurants", "Collecting 4% to 6% fees on rooms other people own", "Selling package tours"], answer: 2, explain: "The asset-light pivot: brands sold the buildings and kept the fee streams, loyalty programs, and pipelines: royalty economics on the world's room base." },
    { q: "The OTA duopoly (Booking + Expedia) charges commissions of roughly:", choices: ["1% to 2%", "50%", "15% to 25%", "Nothing: they earn on ads only"], answer: 2, explain: "The distribution toll on intermediated nights: which is why hotels push loyalty programs and direct booking so hard, and why Booking earned $5.8B in 2024." },
    { q: "Tourism's defining economic quirk is that its inventory:", choices: ["Appreciates with age", "Is perishable: an unsold room night expires worthless at midnight", "Can be stored in warehouses", "Is infinitely expandable"], answer: 1, explain: "Perishability plus high fixed costs created revenue management (dynamic pricing) and explains the sector's violent price swings in both directions." },
    { q: "In 2020, COVID cut international tourist arrivals by roughly:", choices: ["10%", "30%", "70%: the worst year in tourism history", "It had no effect"], answer: 2, explain: "Demand vaporized in weeks; recovery took until 2024 (~1.5B arrivals, UN Tourism). The lesson: balance sheets are survival kits in this sector." },
    { q: "The overtourism backlash has produced which real policy?", choices: ["A global ban on hotels", "Mount Fuji's 4,000-climbers-per-day cap with an entry fee", "Free flights for locals", "Mandatory travel insurance worldwide"], answer: 1, explain: "2024's Fuji cap joins Venice's day-tripper fee and Spain's $75M Airbnb fine: destinations have started rationing and pricing access." },
    { q: "The biggest structural threat to the OTA business model is:", choices: ["Rising hotel construction", "AI agents replacing search as travel's front door, bypassing the paid-search funnel", "Cheaper airfares", "Loyalty programs being banned"], answer: 1, explain: "OTA margins are substantially arbitrage between Google click costs and booking commissions; if planning moves to assistants, that funnel, and the moat it funds, reprices." }
  ],

  sources: [
    { name: "WTTC Economic Impact Research 2024 ($11.1T, 348M jobs)", url: "https://wttc.org/news-article/travel-and-tourism-set-to-break-all-records-in-2024-reveals-wttc", feeds: "GDP contribution, jobs, spending" },
    { name: "UN Tourism World Tourism Barometer / Highlights 2025", url: "https://www.untourism.int", feeds: "arrivals, receipts, outlook" },
    { name: "Booking Holdings investor relations (10-K)", url: "https://ir.bookingholdings.com", feeds: "OTA financials, room nights" },
    { name: "TSA checkpoint travel numbers", url: "https://www.tsa.gov/travel/passenger-volumes", feeds: "daily US travel demand" }
  ]
};
