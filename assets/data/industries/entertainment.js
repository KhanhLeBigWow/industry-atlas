/* Industry Atlas - ENTERTAINMENT & LIVE EVENTS (full module, research-backed)
 * Anchors: Live Nation FY2025 record revenue $25.2B (159M fans, 55,000 shows;
 * concerts $20.9B, Ticketmaster $3.1B) per Live Nation newsroom / Billboard;
 * Taylor Swift's Eras Tour closed Dec 2024 at $2.2B over 149 shows, ~2x the
 * next tour ever (Pollstar); Disney Experiences FY2025 revenue $36.2B with
 * record $10.0B segment operating income (Disney FY2025 earnings, Nov 2025);
 * Universal's Epic Universe opened May 22, 2025 and drove Comcast theme park
 * revenue to $9.8B in 2025, up 14% (Comcast earnings / Blooloop);
 * DOJ + 30 states sued to break up Live Nation-Ticketmaster (May 2024). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["entertainment"] = {
  meta: {
    id: "entertainment", name: "Entertainment & Live Events", sector: "tmt", status: "full",
    tagline: "Selling the one product piracy cannot touch: being there. Scarcity economics with a regulator now reading the fee receipt.",
    marketSize: { value: 150, unit: "$B", asOf: 2025, note: "global live entertainment spend: live music ~$35B+, theme parks and attractions ~$75B+, plus performing arts, festivals, ticketing, and on-site spend; boundaries blur with sports and tourism" },
    cagr: { value: 6, range: [4, 9], horizon: "2025-2030" },
    maturity: "growth-mature", cyclicality: 4, capitalIntensity: 4, regulation: 3, disruption: 2
  },
  newsQuery: '("Live Nation" OR Ticketmaster OR "theme park" OR "concert tour" OR "Epic Universe" OR "ticket prices" OR "Disney parks")',

  overview: {
    definition: "The live entertainment industry sells physical presence: concerts, festivals, theme parks, and shows that cannot be streamed, copied, or discounted into a bundle. Its raw material is scarce (one artist, one night, 60,000 seats), its pricing power is real, and its supply chain runs from superstar talent through promoters, venues, and the ticketing tollbooth to the fan's wallet.",
    howItWorks: [
      "The concert stack has 4 layers: talent (artists and the agencies that book them), promoters (who guarantee the artist a fee and take the show risk), venues (arenas, stadiums, amphitheaters), and ticketing (the checkout). Live Nation integrates 3 of the 4: it is the largest promoter on Earth, owns or operates hundreds of venues, and owns Ticketmaster, which the DOJ says controls roughly 80% or more of primary ticketing at major US concert venues. That vertical stack is both the business model and the antitrust case.",
      "The economics invert the org chart: promotion, the layer with the famous name, runs on margins of a few % because artists capture most of the gate (a headliner routinely keeps 85%+ of net ticket revenue). The money lives downstream: ticketing fees (high-margin, contractually locked to venues for years), sponsorship (brands paying to reach captive fans), and on-site spend (beer, parking, merch). Live Nation's 2025 tape shows the shape: $20.9B of concerts revenue earned thin margins while $3.1B of Ticketmaster revenue and the sponsorship line generated the bulk of profit.",
      "Theme parks are the same religion in fixed-asset form: multi-billion-dollar gates that monetize attendance twice, once at the turnstile and again per capita inside (food, hotels, line-skipping products like Lightning Lane). Disney Experiences earned a record $10.0B of operating income on $36.2B of revenue in FY2025, roughly 28% margins, with growth driven by per-cap spend rather than attendance. Universal answered with Epic Universe (opened May 22, 2025), Orlando's first new major gate since 1999, which pushed Comcast's theme park revenue up 14% to $9.8B in 2025.",
      "Demand is riding a structural shift from goods to experiences: a record 159M fans attended Live Nation's 55,000 shows in 2025, and for the first time more of them were outside the US than inside. But pricing power has drawn the state: the DOJ and 30 states sued to break up Live Nation-Ticketmaster in May 2024, the FTC's junk-fee rule forced all-in ticket pricing from May 2025, and the FTC sued Ticketmaster in September 2025 over pricing disclosures and broker resale practices. The industry's core tension: every dollar of scarcity pricing is also a political exhibit."
    ],
    history: [
      { era: "1955-1971", title: "The park is invented", text: "Disneyland (1955) and Walt Disney World (1971) turn IP into real estate with turnstiles: the per-capita spending machine is born." },
      { era: "1965-1995", title: "Touring professionalizes", text: "Rock touring becomes an industry: arenas, promoters, and the merch table; ticket stubs become the fan economy's currency." },
      { era: "1996-2010", title: "The roll-up era", text: "SFX buys the regional promoters, Clear Channel buys SFX, Live Nation spins out (2005) and merges with Ticketmaster (2010) under a consent decree critics never stopped citing." },
      { era: "2010-2019", title: "Experience economy", text: "Festivals boom, Wizarding World (2010) starts a theme park arms race, dynamic pricing arrives, and streaming makes touring the artist's paycheck instead of the album." },
      { era: "2020-present", title: "Zero to supercycle", text: "COVID wipes out live revenue almost entirely, then the rebound breaks every record: the Eras Tour grosses $2.2B, Live Nation hits $25.2B, Epic Universe opens, and the DOJ files to break up the biggest player." }
    ],
    trends: [
      { title: "Experiences over goods", direction: "up", text: "Younger consumers reallocate wallet share from stuff to memories; recreation-services spending keeps outgrowing goods, and live is the category piracy and Amazon cannot commoditize." },
      { title: "Superstar polarization", direction: "shift", text: "Stadium megatours (Eras at ~$14.8M gross per show) and blockbuster parks absorb the spend while mid-tier tours and regional venues fight rising costs: a hit-driven barbell." },
      { title: "The regulatory reckoning", direction: "shift", text: "DOJ breakup suit (May 2024), all-in pricing mandated by the FTC junk-fee rule (May 2025), an FTC pricing suit (Sept 2025), and a UK CMA probe of Oasis dynamic pricing: fees are now a policy issue." },
      { title: "Theme park arms race", direction: "up", text: "Epic Universe's opening and Disney's announced $60B decade of Experiences capex turn parks into a capacity-and-IP land war measured in ROIC on new gates." },
      { title: "Premiumization everywhere", direction: "up", text: "VIP packages, platinum seats, line-skip products, and venue tech like the $2.3B Sphere push revenue per attendee up faster than attendance: price, not volume, is the growth engine." }
    ],
    outlook: "The demand story looks structural, not just post-COVID splurge: 3 straight record years, global touring capacity sold out, and parks earning record income on flat domestic attendance. The open questions are political and cyclical: whether the DOJ forces a Ticketmaster divestiture (remedy trial expected 2026), and whether $400 all-in tickets survive a real consumer recession. The base case: live entertainment keeps taking wallet share, with fee economics redistributed by regulators rather than destroyed."
  },

  structure: {
    suppliers: [
      { name: "Talent & agencies (WME, CAA, UTA, Wasserman)", note: "The scarce input; agencies take commissions, artists take most of the gate" },
      { name: "IP owners (Disney, Universal, Nintendo, Potter estate)", note: "Franchises fill parks; licensing is the parks' content pipeline" },
      { name: "Production & staging (PRG, Tait, Solotech)", note: "Stages, rigging, video walls: touring's industrial base" },
      { name: "Insurance & security", note: "Cancellation cover and crowd safety: Astroworld made both board-level" }
    ],
    producers: [
      { name: "Live Nation", note: "Largest promoter: $25.2B revenue, 159M fans, 55,000 shows in 2025" },
      { name: "AEG Presents", note: "The #2 promoter: Coachella (Goldenvoice), stadium tours, O2 Arena" },
      { name: "Disney Experiences", note: "$36.2B revenue, record $10.0B operating income in FY2025" },
      { name: "Universal Destinations & Experiences (Comcast)", note: "$9.8B in 2025, up 14% on Epic Universe's opening" }
    ],
    distributors: [
      { name: "Primary ticketing (Ticketmaster, AXS, SeatGeek, CTS Eventim)", note: "The checkout tollbooth: Ticketmaster did $3.1B revenue in 2025" },
      { name: "Secondary market (StubHub, Vivid Seats, brokers)", note: "Resale re-prices scarcity in real time; regulators circle the broker economy" }
    ],
    customers: [
      { name: "Fans", note: "The end wallet: tickets, fees, travel, hotels, merch, $8 beers" },
      { name: "Brands & sponsors", note: "Pay for captive attention: sponsorship is the industry's highest-margin line" },
      { name: "Tourism ecosystems", note: "Orlando, Las Vegas, Nashville: cities built around gates and stages" }
    ],
    regulators: [
      { name: "DOJ Antitrust Division + 30 state AGs", note: "Suing to unwind Live Nation-Ticketmaster (filed May 2024)" },
      { name: "FTC", note: "Junk-fee rule forced all-in pricing (May 2025); sued Ticketmaster over pricing and broker practices (Sept 2025)" },
      { name: "Safety & local authorities", note: "Crowd safety, curfews, zoning: every venue is a local political deal" }
    ],
    capital: [
      { name: "Corporate balance sheets (Disney, Comcast)", note: "Parks capex funded internally: Disney committed ~$60B over a decade" },
      { name: "Public equity & converts (Live Nation, Sphere)", note: "Growth and venue bets funded in the market" },
      { name: "Private equity & sovereigns", note: "Venue platforms, festivals, and Saudi entertainment giga-projects chase the same scarcity" }
    ]
  },

  valueChain: {
    intro: "From a superstar's signature to the fee line on a fan's receipt. Value capture inverts fame: the promoter with the marquee name earns the least; the checkout and the sponsor earn the most.",
    stages: [
      { id: "talent-ip", name: "Talent & IP", what: "Artists, franchises, and the agencies that price them", players: "Superstar artists, WME/CAA/UTA, Disney and Universal IP", valueCapture: 5,
        economics: { grossMargin: [40, 70], capitalIntensity: 1, concentration: 3 },
        linksTo: ["media", "sports"],
        deeper: "Streaming turned recorded music into marketing and made the tour the paycheck, handing headliners extraordinary leverage: 85%+ of net gate on big tours. The Eras Tour was the category proof: $2.2B across 149 shows, roughly double any tour in history, plus a ~$260M concert film. IP works the same way in parks: Potter, Nintendo, and Marvel decide where attendance goes." },
      { id: "promotion", name: "Promotion & production", what: "Guaranteeing the artist, taking the show risk, building the run", players: "Live Nation Concerts, AEG Presents, festival operators", valueCapture: 2,
        economics: { grossMargin: [2, 10], capitalIntensity: 2, concentration: 4 },
        linksTo: ["media", "logistics"],
        deeper: "Promotion is a volume business run near breakeven on purpose: Live Nation books $20.9B of concerts revenue at thin margins because every show it promotes feeds the profitable layers it also owns (ticketing, sponsorship, venue F&B). The flywheel is the strategy, and the DOJ's complaint is essentially a description of it." },
      { id: "venues", name: "Venues & parks", what: "Arenas, stadiums, amphitheaters, and multi-billion-dollar gates", players: "Disney, Universal, Live Nation venues, Oak View Group, ASM Global", valueCapture: 4,
        economics: { grossMargin: [20, 35], capitalIntensity: 5, concentration: 4 },
        linksTo: ["real-estate", "construction", "tourism"],
        deeper: "Fixed-cost boxes with operating leverage in both directions. Parks are the purest version: Disney Experiences runs ~28% operating margins ($10.0B on $36.2B, FY2025) by compounding per-cap spend; Epic Universe shows the other lever, adding capacity (Orlando's first new major gate since 1999). New arena supply (OVG's builds, the $2.3B Sphere) chases premium content." },
      { id: "ticketing", name: "Ticketing (primary & resale)", what: "The checkout, the fees, and the queue", players: "Ticketmaster, AXS, SeatGeek, CTS Eventim; StubHub and Vivid Seats in resale", valueCapture: 5,
        economics: { grossMargin: [40, 60], capitalIntensity: 2, concentration: 5 },
        linksTo: ["payments", "ecommerce"],
        deeper: "The tollbooth: software margins on someone else's show risk, locked in through multi-year exclusive venue contracts. Fees stack 20-30% on face value and are split with venues, which is why venues defend the model. This is also where the industry meets the state: the Eras on-sale meltdown (Nov 2022) begat Senate hearings, the DOJ suit, all-in pricing, and the FTC's Sept 2025 case." },
      { id: "onsite", name: "On-site spend & hospitality", what: "F&B, merch, parking, hotels, premium experiences", players: "Levy/Aramark/Legends concessions, park hotels, VIP platforms", valueCapture: 4,
        economics: { grossMargin: [30, 50], capitalIntensity: 2, concentration: 2 },
        linksTo: ["restaurants", "retail", "tourism"],
        deeper: "The second wallet: once inside, the fan is a captive high-margin customer. Theme parks industrialized this with per caps (in-park spend per guest) that have outgrown attendance for a decade: hotels, Lightning Lane, and $200 wands. Concerts are catching up via VIP tiers and platinum pricing that capture what scalpers used to." },
      { id: "amplification", name: "Sponsorship & media amplification", what: "Brands, broadcast, concert films, and the content halo", players: "Live Nation sponsorship, brand activations, streaming partners", valueCapture: 4,
        economics: { grossMargin: [50, 70], capitalIntensity: 1, concentration: 3 },
        linksTo: ["media", "gaming"],
        deeper: "The highest-margin dollar in the stack: brands pay for verified, emotionally engaged crowds. The Eras concert film (~$260M box office, the biggest ever) showed live events generating their own media economics: the show funds the content, the content markets the show." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 2 different machines. The concert flywheel (Live Nation): promote at breakeven to control supply, then monetize the fan 3 more times through ticket fees, sponsorship, and on-site spend: revenue = fans x events x spend per fan, with profit concentrated in the fee and sponsor lines ($25.2B revenue, $2.4B adjusted operating income in 2025 tells you the blended margin). The park machine (Disney, Universal): huge fixed asset bases where profit = attendance x per cap minus a heavy fixed cost line, so operating leverage is violent in both directions and pricing (not attendance) has driven the record years.",
      "Capital intensity splits the same way: promotion is asset-light and working-capital funded (fans pay months before the show, an interest-earning float), while parks eat billions of capex per gate and are judged on ROIC of expansion: Epic Universe and Disney's $60B decade are bets that new capacity earns park-level margins. Watch deferred revenue (tickets sold ahead) as the demand thermometer, and watch per caps for pricing fatigue before it shows up anywhere else."
    ],
    fingerprint: { grossMargin: 35, recurringRevenue: 30, capitalIntensity: 55, pricingPower: 70, cyclicality: 60, operatingLeverage: 75 },
    lines: [
      { label: "Fans & attendance", note: "The volume engine: Live Nation's 159M fans in 2025, park turnstile counts" },
      { label: "Per-fan / per-cap spend", note: "The pricing engine: tickets, fees, F&B, hotels; where the records actually come from" },
      { label: "Ticketing fee revenue", note: "High-margin tollbooth: Ticketmaster $3.1B in 2025; the line regulators read first" },
      { label: "Sponsorship & advertising", note: "The margin kicker: brands buying captive attention" },
      { label: "Deferred revenue & event pipeline", note: "Cash arrives before the show: the cleanest forward-demand signal in the sector" }
    ],
    unitEconomics: {
      unit: "per stadium show night (illustrative)",
      items: [
        { label: "Gross gate", value: "$5M to $15M", note: "the Eras Tour averaged ~$14.8M across 149 shows (Pollstar)" },
        { label: "Artist share of net gate", value: "85%+", note: "the promoter's famous-name layer keeps very little" },
        { label: "Fees on top of face value", value: "20-30%", note: "split between ticketer and venue: the profit pool under political fire" },
        { label: "On-site spend per fan", value: "$30 to $60+", note: "parking, F&B, merch: high-margin and promoter/venue-captured" }
      ]
    }
  },

  kpiRefs: ["pay-take-rate", "retail-sss"],
  kpiLocal: [
    {
      id: "ent-percap", name: "Per Capita Spend (Per Caps)", industries: ["entertainment"],
      definition: "In-park or in-venue revenue divided by attendance: the pricing engine of parks and, increasingly, concerts.",
      formula: "Per cap = (admissions + F&B + merch + experiences revenue) / attendance",
      interpretation: "Disney's record FY2025 ($10.0B segment income) was built on per-cap growth with roughly flat domestic attendance: price doing the work volume used to.",
      healthy: "Per caps growing above inflation with flat-to-rising attendance", warning: "Per caps up only via price while attendance falls: the fatigue signature" },
    {
      id: "ent-gross-per-show", name: "Gross per Show", industries: ["entertainment"],
      definition: "Tour gross divided by show count: the unit economics of touring and the superstar-polarization gauge.",
      formula: "Gross per show = total tour gross / number of shows",
      interpretation: "The Eras Tour ran ~$14.8M per show ($2.2B / 149): roughly double any prior tour and the benchmark for the stadium megatour era.",
      healthy: "Rising grosses with strong sell-through at on-sale", warning: "Discounting late inventory; papering the house to fill seats" }
  ],

  health: {
    intro: "Promoter health is pipeline and fee durability; park health is per caps against attendance; everyone's health is the distance between pricing power and pricing backlash.",
    pillars: [
      { name: "Demand & attendance", weight: 25, metrics: "Fan counts, sell-through at on-sale, park turnstiles", healthy: "Records with global breadth (2025: more Live Nation fans abroad than in the US)", warning: "Softening sell-through hidden by higher prices" },
      { name: "Pricing power & per caps", weight: 20, metrics: "Per-cap growth vs inflation, average ticket price, premium mix", healthy: "Price and volume rising together", warning: "Price-only growth; visible affordability backlash" },
      { name: "Content & capacity pipeline", weight: 20, metrics: "Tour bookings, new gates and venues, IP slate", healthy: "Multi-year booked pipeline; expansion earning target ROIC (the Epic Universe test)", warning: "Thin superstar slate; capex opening into soft demand" },
      { name: "Regulatory & fee risk", weight: 15, metrics: "Litigation posture, fee mix disclosure, exclusive-contract dependence", healthy: "Diversified profit beyond fees", warning: "Profit concentrated in the exact line the DOJ and FTC are litigating" },
      { name: "Balance sheet & capex discipline", weight: 20, metrics: "Leverage vs event cash float, capex vs ROIC, insurance cover", healthy: "Float-funded operations; expansion self-funded", warning: "Leverage against cyclical attendance; capex racing peers into a downturn" }
    ],
    scoringNote: "In live entertainment the unforgivable events are a safety catastrophe and a lost antitrust remedy: one destroys trust, the other redistributes the profit pool by court order."
  },

  valuation: {
    intro: "The market prices the flywheel and the gates differently: promoters on adjusted operating income and fee durability, parks on ROIC of expansion inside media conglomerates that obscure them.",
    methods: [
      { name: "EV / adjusted EBITDA (promoter/ticketing)", use: "Live Nation and ticketing platforms through the cycle", avoid: "Treating record-year AOI as the base; normalize the supercycle", strengths: "Standard, captures the blended flywheel", weaknesses: "Mixes 2% promotion margins with 40%+ fee margins into one multiple", range: { low: 10, high: 15, asOf: 2025, note: "breakup risk is the discount; fee durability is the premium" } },
      { name: "Sum-of-the-parts (concerts + ticketing + sponsorship)", use: "Valuing Live Nation's segments as the different businesses they are", avoid: "SOTP as a merger-arb bet on the DOJ outcome alone", strengths: "Matches the economics; frames the divestiture scenario", weaknesses: "Segment disclosure is managed; synergies are the whole point of the structure", range: { low: 0, high: 0, asOf: 2025, note: "qualitative frame: ticketing alone would command a payments-like multiple" } },
      { name: "ROIC on new gates (parks)", use: "Judging Disney's $60B decade and Epic Universe-class projects", avoid: "Valuing parks on year-1 openings (pre-ramp) or peak-year per caps", strengths: "The actual capital-allocation question", weaknesses: "Ramp takes years; segment capex disclosure is coarse", range: { low: 0, high: 0, asOf: 2025, note: "qualitative: parks segments have earned high-teens+ returns on mature gates" } },
      { name: "EV / attendee (scarcity cross-check)", use: "Sanity-checking platforms against the fans they monetize", avoid: "Using it as a primary method: monetization per fan varies 10x", strengths: "Cuts through segment noise; frames the wallet-share thesis", weaknesses: "A fan at a club show and at Epic Universe are different assets", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor alongside per-fan spend trends" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a live entertainment name quickly: normalized adjusted EBITDA times a fee-durability-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized adj. EBITDA ($B)", min: 0.2, max: 12, step: 0.2, value: 2.4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 7, max: 20, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 0.5, value: 4, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays live entertainment as a wallet-share compounder with a regulatory overhang: long the layers with tollbooth economics (ticketing, sponsorship, per-cap machines), treat promotion as the loss-leading supply lock it is, and price the DOJ case as an event, not a thesis. 3 straight record years say the experience shift is structural; the fee fight decides who keeps the margin.",
    debates: [
      { topic: "Structural experience shift or post-COVID splurge on borrowed time?", bull: "3 record years and counting, global breadth (Live Nation's fans now majority ex-US), demographics that prefer memories to goods, and parks earning records on price alone: this is a durable reallocation of consumer wallets, not revenge spending.", bear: "Real prices are up dramatically since 2019 while attendance growth is thinning at the domestic parks; the marginal fan is financing the ticket. In the first real recession since the boom, a $400 all-in stadium seat is the easiest cut in the household budget." },
      { topic: "Live Nation: does a breakup destroy the moat or unlock the sum of the parts?", bull: "Even divested, Ticketmaster keeps its venue contracts and Live Nation keeps the world's touring supply: 2 strong businesses trading today at a conglomerate-plus-litigation discount. The remedy clears the overhang either way.", bear: "The flywheel IS the margin: promotion at 2% only makes sense feeding owned ticketing and sponsorship. Sever it and each piece faces real competition for the first time in 15 years, with the FTC still litigating the fee model itself." },
      { topic: "Theme park capex arms race: value creation or mutually assured overbuilding?", bull: "Epic Universe proved new gates create demand rather than split it (Comcast parks +14% in 2025), and Disney's $60B is aimed at proven IP with decades of per-cap runway: parks are the most defensible consumer franchise in media.", bear: "Both giants are adding Orlando capacity into a consumer that is already trading down, per caps are near the ceiling of middle-class tolerance, and $60B of concrete is the definition of pro-cyclical capital spent at the top." }
    ],
    cycle: {
      where: "Mid-to-late in a demand supercycle, early in a regulatory cycle: records everywhere (Live Nation $25.2B, Disney Experiences $10.0B income), pricing power intact, but the DOJ remedy trial and fee rules mark the state's arrival just as comps get hard.",
      drivers: "Discretionary income and consumer confidence, the superstar touring slate, park capacity additions, fee regulation, and travel costs (airfare, hotels) that gate destination attendance.",
      leads: [
        "On-sale sell-through and secondary-market price premiums (a free real-time demand read)",
        "Live Nation deferred revenue and event pipeline in quarterly filings (free)",
        "Pollstar quarterly and year-end tour grosses (free summaries)",
        "Park signals: Orlando tourism data, wait-time trackers, per-cap commentary in Disney/Comcast calls",
        "BEA recreation-services spending within PCE (free, monthly): the experience-shift scoreboard"
      ]
    },
    exposure: [
      { vehicle: "Live Nation (LYV)", note: "The integrated flywheel: pure-play on the boom, with the DOJ discount attached" },
      { vehicle: "Disney (DIS)", note: "Experiences is the earnings engine ($10.0B FY2025) inside a media conglomerate wrapper" },
      { vehicle: "Comcast (CMCSA)", note: "Epic Universe upside buried in a cable valuation: the cheapest park exposure" },
      { vehicle: "Secondary ticketing (StubHub, Vivid Seats class)", note: "Scarcity re-pricing as a business model; first in line for broker regulation" },
      { vehicle: "Sphere Entertainment / venue platforms", note: "Venue-as-technology optionality: premium content chasing premium boxes" }
    ],
    catalysts: [
      { when: "2026 (scheduled)", what: "DOJ v. Live Nation remedy trial: the sector's binary event" },
      { when: "Quarterly earnings", what: "Live Nation deferred revenue and AOI mix; Disney/Comcast per caps and attendance color" },
      { when: "Feb-May (annual)", what: "Summer tour on-sales and festival lineups: the year's demand is set here" },
      { when: "Park openings & announcements", what: "Epic Universe ramp data, Disney's $60B project reveals: the capex race scoreboard" }
    ],
    data: [
      { series: "Pollstar year-end and quarterly tour charts", source: "news.pollstar.com (free summaries)", why: "The touring tape: grosses, per-show economics, superstar slate" },
      { series: "Live Nation quarterly results & KPIs", source: "newsroom.livenation.com (free)", why: "Fans, shows, deferred revenue, segment AOI: the flywheel dashboard" },
      { series: "TEA/AECOM Theme Index", source: "aecom.com / teaconnect.org (free annual)", why: "Global park attendance by operator: the only consistent turnstile series" },
      { series: "BEA personal consumption: recreation services", source: "bea.gov (free)", why: "The goods-to-experiences shift in official data" },
      { series: "Disney & Comcast segment disclosures", source: "company IR sites (free)", why: "Per caps, attendance direction, and parks capex: the arms-race ledger" }
    ],
    playbook: [
      { regime: "Recession", behavior: "The sector's first real test since the boom: superstars and flagship parks hold (scarcity), mid-tier tours and regional attractions crack first. Watch per caps roll before attendance does." },
      { regime: "Inflation", behavior: "Historically passable: tickets and per caps re-price faster than costs. But post-2022 price levels mean the next pass-through tests the backlash threshold, not the wallet." },
      { regime: "Rates rising", behavior: "Park capex hurdles rise mid-build and venue development slows; asset-light promoters and fee businesses hold up best. Event cash float earns more: a quiet promoter tailwind." },
      { regime: "Regulatory shock", behavior: "A forced Ticketmaster divestiture or fee caps redistribute the profit pool toward venues and artists: own the layers that keep pricing power (talent, gates, sponsorship) rather than the tollbooth itself." }
    ]
  },

  players: [
    { name: "Live Nation Entertainment", role: "Integrated promoter-ticketer", country: "US", real: true, note: "Record $25.2B revenue in 2025; 159M fans, 55,000 shows; the DOJ's defendant" },
    { name: "Disney Experiences", role: "Theme park superpower", country: "US", real: true, note: "$36.2B revenue and record $10.0B operating income in FY2025; $60B decade of capex committed" },
    { name: "Universal Destinations & Experiences", role: "The challenger gate-builder", country: "US", real: true, note: "Epic Universe (opened May 2025) drove segment revenue to $9.8B, up 14%" },
    { name: "AEG Presents", role: "The #2 promoter", country: "US", real: true, note: "Coachella, stadium tours, and the O2: privately held counterweight to Live Nation" },
    { name: "CTS Eventim", role: "Europe's ticketing-promotion giant", country: "DE", real: true, note: "The continental flywheel: ticketing margins with a growing promoter arm" },
    { name: "Sphere Entertainment", role: "Venue-as-technology bet", country: "US", real: true, note: "The $2.3B Las Vegas Sphere: premium immersive capacity as a new asset class" },
    { name: "Merlin Entertainments", role: "Attractions consolidator", country: "UK", real: true, note: "Legoland, Madame Tussauds, Alton Towers: the biggest operator after Disney by gate count" },
    { name: "StubHub", role: "Secondary-market leader", country: "US", real: true, note: "Resale re-prices scarcity in real time: and sits in the FTC's broker crosshairs" }
  ],

  geography: [
    { country: "US", role: "The demand and profit center", note: "Orlando, Vegas, and the stadium circuit; also home of the DOJ and FTC cases reshaping fees" },
    { country: "UK", role: "Europe's live capital", note: "The O2, West End, festival circuit, Merlin; the CMA's Oasis pricing probe set Europe's fee tone" },
    { country: "JP", role: "Asia's mature park market", note: "Tokyo Disney (Oriental Land) and Universal Studios Japan: the world's best per-cap discipline" },
    { country: "CN", role: "The growth wildcard", note: "Shanghai Disney, Universal Beijing, Chimelong: attendance scale with policy risk" },
    { country: "FR", role: "Continental park anchor", note: "Disneyland Paris is Europe's most-visited park; festival and touring hub" },
    { country: "DE", role: "Europe's ticketing engine", note: "CTS Eventim's home market; Rammstein-scale touring economics and Europa-Park" }
  ],

  cycles: [
    { year: 1955, title: "Disneyland opens", kind: "boom", text: "Walt Disney converts IP into a gated, priced physical world: attendance x per cap becomes one of the great business models. Lesson: the moat is owning the place the story happens." },
    { year: 2000, title: "The promoter roll-up", kind: "shift", text: "SFX consolidates America's regional promoters and sells to Clear Channel; Live Nation emerges (2005) and merges with Ticketmaster (2010) under a consent decree. Lesson: consolidation bought supply control, and 15 years of antitrust argument." },
    { year: 2020, title: "COVID zero", kind: "bust", text: "Live revenue effectively goes to 0: Live Nation's sales fall over 80%, parks shutter for months. Lesson: no digital substitute exists, which is both the sector's fragility and the proof of its pricing power." },
    { year: 2022, title: "The Eras on-sale meltdown", kind: "shift", text: "Ticketmaster's crash under 3.5B queue requests for the Eras Tour triggers Senate hearings and, in May 2024, a DOJ breakup suit. Lesson: in a scarcity business, the checkout is where the politics live." },
    { year: 2025, title: "The record year", kind: "boom", text: "The Eras Tour closes at $2.2B (Dec 2024), Live Nation prints $25.2B, Disney Experiences earns a record $10.0B, and Epic Universe opens. Lesson: supercycles peak loudly; the discipline is asking what normalized demand looks like." }
  ],

  risks: [
    { name: "Ticketmaster breakup or fee caps", severity: 4, likelihood: 3, transmission: "Adverse DOJ remedy or FTC fee rules -> ticketing margin compressed or divested -> the flywheel's profit pool redistributes to venues and artists -> integrated-model multiples de-rate." },
    { name: "Consumer discretionary pullback", severity: 4, likelihood: 3, transmission: "Recession or savings depletion -> mid-tier tours and regional parks crack first -> operating leverage reverses violently on fixed-cost venues and fresh capex." },
    { name: "Pricing fatigue & affordability backlash", severity: 3, likelihood: 4, transmission: "All-in prices keep compounding -> fan resentment becomes political fuel (Oasis, Eras precedents) -> demand softens at the margin exactly when regulators need exhibits." },
    { name: "Event safety catastrophe", severity: 5, likelihood: 2, transmission: "A crowd-control or structural failure (the Astroworld template) -> criminal and civil exposure, insurance repricing, permitting friction industry-wide." },
    { name: "Superstar supply gap", severity: 3, likelihood: 3, transmission: "The stadium-filling cohort ages without replacement at the same scale -> fewer megatours -> the high-margin fee and sponsorship lines lose their volume engine." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["This industry sells being there: concerts, festivals, and theme parks. You cannot download a front-row seat or a roller coaster, so prices keep rising and records keep falling: Taylor Swift's Eras Tour earned $2.2B, the most ever, and Disney's parks made more money in 2025 than ever before. The companies earn from tickets, fees, food, hotels, and sponsors: the show is just the beginning of the bill."] },
    L2: { title: "Intermediate", text: ["The concert stack: artists take most of the ticket money, promoters (Live Nation, AEG) run near breakeven to control supply, and the profit hides in ticketing fees, sponsorship, and on-site spend. Parks run on attendance x per-cap spend with heavy fixed costs: Disney Experiences earned $10.0B on $36.2B in FY2025 mostly through pricing, and Universal's Epic Universe (2025) was Orlando's first new major gate since 1999. The catch: the DOJ is suing to break up Live Nation-Ticketmaster."] },
    L3: { title: "Advanced", text: ["Analyze by layer, not by logo: promotion is a 2%-margin supply lock, ticketing is a 40%+-margin tollbooth on multi-year exclusive contracts, sponsorship is the purest margin, and parks are ROIC-on-capex stories. Deferred revenue is the forward-demand gauge; per caps versus attendance is the pricing-fatigue gauge. Normalize the supercycle before you multiply: 2023-2025 records (Eras at ~$14.8M per show, 159M Live Nation fans) are the numerator everyone wants to annualize."] },
    L4: { title: "Expert", text: ["Trade the on-sale tape (sell-through, resale premiums), quarterly deferred revenue, and park per-cap commentary; price the DOJ remedy trial as a distinct event with breakup, behavioral-remedy, and dismissal branches. Live debates: structural experience shift vs splurge, whether SOTP value survives severing the flywheel, and whether $60B of park capex lands on demand or on a rolling-over consumer. The FTC's all-in pricing rule already reset conversion math once: model fee elasticity, not just fee revenue."] },
    L5: { title: "Institutional", text: ["Allocator's frame: live entertainment is the consumer sector's best claim on post-scarcity wallets: unpirateable inventory, real pricing power, and demographic tailwinds, trading with a regulatory discount that is genuinely hard to price. Core the per-cap machines and tollbooth economics, treat integrated-promoter equity as event-driven around the 2026 remedy, and respect that the marginal buyer of a $400 ticket is the first to disappear in a downturn. The through-cycle question: who owns the fan relationship when the state redraws the fee pool."] }
  },

  quiz: [
    { q: "The highest-grossing tour in history is:", choices: ["Coldplay's Music of the Spheres", "Taylor Swift's Eras Tour: $2.2B over 149 shows, roughly double any prior tour", "U2 at the Sphere", "Elvis in Vegas"], answer: 1, explain: "Pollstar's final Dec 2024 tally: $2.2B, ~$14.8M per show; the #2 tour ever (Coldplay, $1.14B) grossed about half as much." },
    { q: "Concert promotion, the layer with the famous name, typically earns:", choices: ["The fattest margins in the stack", "Margins of only a few %: artists keep 85%+ of the gate, and profit lives in fees, sponsorship, and on-site spend", "Nothing at all", "Fixed government rates"], answer: 1, explain: "Live Nation promotes at near breakeven to control supply; ticketing and sponsorship are where the flywheel actually earns." },
    { q: "In May 2024 the DOJ and 30 states sued Live Nation to:", choices: ["Raise ticket prices", "Break up its merger with Ticketmaster, which the complaint says controls ~80%+ of major-venue primary ticketing", "Nationalize concerts", "Ban dynamic pricing outright"], answer: 1, explain: "The 2010 merger's consent decree never quieted critics; the Eras on-sale meltdown of Nov 2022 turned complaint into case." },
    { q: "Disney Experiences' record FY2025 ($10.0B operating income) was driven mostly by:", choices: ["Surging attendance", "Per-capita spend: pricing, hotels, and premium products doing the work while domestic attendance stayed roughly flat", "Movie box office", "Streaming subscribers"], answer: 1, explain: "Per caps are the parks' pricing engine: revenue per guest has outgrown turnstile counts for a decade." },
    { q: "Epic Universe (opened May 2025) mattered because it:", choices: ["Was a small water park", "Was Orlando's first new major theme park gate since 1999 and drove Comcast's park revenue up 14% to $9.8B", "Replaced Disney World", "Failed to open"], answer: 1, explain: "New capacity created demand rather than splitting it: the data point the entire park capex arms race leans on." },
    { q: "Ticketing earns its reputation as the tollbooth because:", choices: ["It takes the show risk", "It earns software-like margins on fees stacked 20-30% over face value, locked in by multi-year exclusive venue contracts", "It pays the artists", "Margins are razor thin"], answer: 1, explain: "Ticketmaster's $3.1B of 2025 revenue converts far more of itself to profit than the $20.9B concerts line: which is why regulators start there." },
    { q: "The FTC's junk-fee rule (effective May 2025) forced live-event sellers to:", choices: ["Cap prices at $50", "Show all-in prices upfront: the full cost including fees, ending drip pricing at checkout", "Eliminate all fees", "Sell only at the box office"], answer: 1, explain: "Transparency, not price control: the fee still exists, but it can no longer ambush the fan on the final screen." },
    { q: "The bear case on the live entertainment supercycle rests on:", choices: ["People stopped liking music", "Affordability: prices have compounded since 2019, and the marginal $400 ticket is the easiest cut in a real recession", "Streaming replacing concerts", "Theme parks being banned"], answer: 1, explain: "3 record years prove demand at these prices in a strong consumer economy: the untested question is what survives a weak one." }
  ],

  sources: [
    { name: "Live Nation FY2025 results (record $25.2B revenue, 159M fans)", url: "https://newsroom.livenation.com/news/live-nation-entertainment-full-year-and-fourth-quarter-2025-results/", feeds: "concerts, ticketing, sponsorship" },
    { name: "Pollstar: Eras Tour final $2.2B tally (Dec 2024)", url: "https://news.pollstar.com/2024/12/09/taylor-swifts-eras-tour-sets-all-time-touring-record-breaking-2b/", feeds: "tour grosses" },
    { name: "Disney FY2025 earnings (Experiences $36.2B revenue, $10.0B OI)", url: "https://thewaltdisneycompany.com/press-releases/the-walt-disney-company-reports-fourth-quarter-and-full-year-earnings-for-fiscal-2025/", feeds: "parks financials" },
    { name: "Comcast theme parks 2025 ($9.8B, Epic Universe)", url: "https://www.cmcsa.com", feeds: "park revenue, Epic Universe ramp" }
  ]
};
