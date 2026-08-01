/* Industry Atlas - AVIATION / AIRLINES (full module, research-backed)
 * Anchors: IATA: 2025 industry revenue crossed $1T for the first time, net profit $45B
 * (4.2% margin) on a record ~84% load factor; IATA Jul 2026 update: Middle East war and
 * jet fuel near $152/bbl (vs ~$90 in 2025) halve the 2026 profit forecast to ~$23B (2.0%
 * margin), with fuel at 31.4% of opex vs 25.4% in 2025 and labor the largest cost line
 * (~28%). Delta FY2025: record $63.4B revenue, 9.2% operating margin, $8.2B Amex loyalty
 * remuneration (+11%), record $4.6B FCF. Ryanair FY2025: 200M passengers (first in EU),
 * EUR 46 average fare ((7)%), EUR 1.61B PAT.
 * Sources: IATA pressroom / Global Outlook (Dec 2025, Jun-Jul 2026), Delta 8-K and IR
 * release (Jan 2026), Ryanair corporate news (May 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["aviation"] = {
  meta: {
    id: "aviation", name: "Airlines & Aviation", sector: "industrials", status: "full",
    tagline: "A $1T revenue machine that keeps about $9 per passenger: the loyalty program upstairs often out-earns the metal.",
    marketSize: { value: 1.0, unit: "$T", asOf: 2025, note: "industry revenue topped $1T for the first time in 2025; net profit $45B, a 4.2% margin (IATA)" },
    cagr: { value: 4, range: [3, 6], horizon: "2025-2030" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 5, regulation: 4, disruption: 2
  },
  newsQuery: '(IATA OR "air travel demand" OR "load factor" OR "jet fuel" OR "airline profits" OR Ryanair OR "Delta Air Lines" OR Lufthansa)',

  overview: {
    definition: "Airlines sell the most perishable inventory in commerce: a seat on a departing flight, worthless the moment the door closes. The industry moves roughly 5B passengers a year on razor margins, financing $100M aircraft to sell $46 fares, while quietly running some of the best annuity businesses in finance (loyalty programs) inside some of the worst operating businesses in industrials.",
    howItWorks: [
      "The structure is fragmented globally but consolidated regionally: a 4-carrier oligopoly moves most US domestic traffic, Europe splits between 3 network groups (Lufthansa, IAG, Air France-KLM) and Ryanair's cost machine, the Gulf runs state-backed superconnectors, and Asia mixes state champions with the fastest-growing markets on Earth. Nobody holds global pricing power: seats are commodities, and the marginal fare is set by whoever most needs the cash.",
      "The economics are brutal by construction: costs are largely fixed per flight, inventory perishes daily, and the 2 biggest cost lines are uncontrollable. Labor is now the largest component (~28% of opex per IATA's December 2025 outlook) and jet fuel swings from 25.4% of opex (2025) to 31.4% (2026 estimate) on geopolitics alone. Result: a record 2025 (revenue above $1T, net profit $45B, 4.2% margin) still worked out to roughly $9 of profit per passenger, and IATA's mid-2026 update halved the 2026 forecast to about $23B after fuel spiked toward $152/bbl.",
      "The hidden profit engine is loyalty: airlines mint miles and sell them to banks at software margins. Delta's remuneration from American Express alone reached $8.2B in 2025 (+11%), and United's MileagePlus was appraised near $22B in 2020, more than the airline's market cap at the time, when it was pledged as collateral. In bad years the loyalty annuity out-earns flying; the modern US major is a loyalty and premium-cabin business with a scheduled-airline cost base attached.",
      "Capacity is the cycle's thermostat, and right now someone else controls it: the aerospace delivery crisis (Airbus and Boeing sold out into the 2030s, rates below plan) keeps fleets scarce, load factors at a record ~84%, and fares firmer than demand alone would justify. That borrowed discipline is the bull case; the 2026 fuel shock is the reminder of the bear case, because costs reprice in weeks while fares reprice with a lag, and the industry never owns its biggest input."
    ],
    history: [
      { era: "1919-1978", title: "Flag carriers", text: "State-owned airlines, IATA-coordinated fares, flying as luxury: a regulated club where the moat was the license, not the cost line." },
      { era: "1978-2000", title: "Deregulation", text: "The 1978 US Airline Deregulation Act frees pricing and routes: fares fall for decades, hub-and-spoke forms, Southwest proves the low-cost model, and nearly every pre-1978 US carrier eventually passes through bankruptcy." },
      { era: "2001-2009", title: "The crucible", text: "9/11, SARS, $147 oil, and the GFC: US airlines lose more in a decade than the industry had cumulatively earned; Chapter 11 becomes a restructuring tool; Ryanair and easyJet rewrite Europe's short-haul economics." },
      { era: "2010-2019", title: "Consolidation's golden decade", text: "US mergers leave 4 carriers with most of the market; ancillary fees, bag charges, and co-brand cards turn tickets into platforms; the industry posts its first sustained run of real profits." },
      { era: "2020-present", title: "COVID and the scarcity rebound", text: "Traffic collapses 90%+; governments inject tens of billions; loyalty programs (MileagePlus at ~$22B) collateralize survival debt. Demand roars back into a supply-constrained fleet: record ~84% load factors, $1T revenue in 2025, then a 2026 fuel shock that halves profits." }
    ],
    trends: [
      { title: "Premiumization and loyalty mix", direction: "up", text: "Premium cabins, credit-card economics, and segmented fares detach the winners from the commodity middle: Delta's $8.2B Amex stream grew 11% in 2025 while base fares stagnated." },
      { title: "Borrowed capacity discipline", direction: "shift", text: "The aerospace delivery crisis rations fleet growth industry-wide: scarcity is doing what airline boards never could, keeping load factors (~84%) and fares at records." },
      { title: "Fuel and geopolitics", direction: "down", text: "Jet fuel near $152/bbl in 2026 (vs ~$90 in 2025) lifted fuel to 31.4% of opex and halved profit forecasts to ~$23B: the P&L's biggest line remains unhedgeable in the long run." },
      { title: "Labor cost ratchet", direction: "shift", text: "Labor overtook fuel as the largest cost (~28% of opex): post-COVID contracts ratcheted pay up across pilots and crews, and airline labor costs ratchet in only one direction." },
      { title: "Decarbonization mandates", direction: "shift", text: "SAF blending mandates (EU first) and emissions schemes raise the structural cost per seat: a slow, compounding tax on an industry with no electric alternative at range." }
    ],
    outlook: "Demand is the dependable part: traffic compounds at roughly GDP-plus as emerging middle classes fly. The investable question is whether the industry's 2 structural upgrades (consolidation plus loyalty economics, and scarcity imposed by the aircraft shortage) survive contact with its 2 permanent taxes (fuel and labor). 2025 showed the ceiling: $1T revenue, $45B profit. 2026 is showing the floor test: a single geopolitical fuel shock halving industry earnings. Winners will keep looking less like airlines and more like loyalty platforms with route networks attached."
  },

  structure: {
    suppliers: [
      { name: "Airframers & engine OEMs (Airbus, Boeing, CFM, GE, P&W)", note: "A sold-out duopoly rations the industry's growth; MRO and spares run on OEM terms" },
      { name: "Lessors (AerCap, Avolon, SMBC class)", note: "Own roughly half the world fleet; in scarcity their slots and residuals appreciate" },
      { name: "Fuel suppliers & airport fuel farms", note: "25-31% of opex flows straight to the energy complex" },
      { name: "Airports, ANSPs & ground handling", note: "Monopoly infrastructure charging regulated (or not) rents; slots at capacity-controlled hubs are quasi-property" },
      { name: "Labor (pilot, crew, mechanic unions)", note: "The largest cost line (~28%) and the stickiest: contracts ratchet upward" }
    ],
    producers: [
      { name: "Network carriers (Delta, United, Lufthansa, IAG)", note: "Hubs, premium cabins, loyalty: the profit pool's deep end" },
      { name: "Low-cost & ultra-low-cost (Ryanair, easyJet, IndiGo)", note: "Cost per seat as the only moat; Ryanair flew 200M passengers at EUR 46 average fares (FY2025)" },
      { name: "Gulf superconnectors (Emirates, Qatar Airways)", note: "Geography as strategy: connecting everyone through one hub with widebodies" },
      { name: "State champions (China's Big 3, flag carriers)", note: "Scale without profit discipline; policy objectives ride in the cockpit" }
    ],
    distributors: [
      { name: "Direct digital (airline apps/sites)", note: "The margin-preserving channel every carrier pushes; loyalty data is the prize" },
      { name: "GDS & OTAs (Amadeus, Sabre, Booking class)", note: "Legacy tollbooths under attack from NDC direct-connect standards" },
      { name: "Corporate travel (TMCs)", note: "Managed travel contracts anchor the high-yield business cabin" }
    ],
    customers: [
      { name: "Leisure travelers", note: "Price-elastic volume; trade down fast in recessions" },
      { name: "Business & premium", note: "A minority of seats, a majority of the profit on long-haul" },
      { name: "Cargo shippers", note: "Bellyhold freight: a swing profit line that spiked in COVID and normalized after" }
    ],
    regulators: [
      { name: "FAA / EASA / ICAO", note: "Safety certification and operations; ATC capacity is a growing US constraint" },
      { name: "DOT, EU261 consumer regimes", note: "Compensation and passenger-rights rules that reprice delays" },
      { name: "Slot coordinators & bilateral treaties", note: "Market access is negotiated state-to-state; open skies is policy, not right" }
    ],
    capital: [
      { name: "Aircraft finance (EETCs, secured debt, sale-leasebacks)", note: "The metal is the collateral; airlines borrow against wings" },
      { name: "Loyalty-backed financing", note: "COVID's innovation: MileagePlus (~$22B appraisal) and peers pledged as survival collateral" },
      { name: "Governments", note: "Bailout capital of last resort, everywhere, every crisis" }
    ]
  },

  valueChain: {
    intro: "From a $100M aircraft to a $46 fare and back. The physical chain (fleet, fuel, network) consumes the capital; the intangible chain (distribution, loyalty, cargo) captures the margin.",
    stages: [
      { id: "fleet", name: "Fleet & financing", what: "Acquiring and financing the aircraft", players: "Airbus, Boeing, AerCap-class lessors, EETC markets", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 5, concentration: 4 },
        linksTo: ["aerospace", "banking"],
        deeper: "Roughly half the world fleet is leased: airlines rent scarcity from lessors who rent it from a sold-out duopoly. In the current delivery drought, used aircraft and lease rates appreciate: the rare moment the metal makes money for its owner." },
      { id: "fuel", name: "Fuel", what: "The tank that eats the P&L", players: "Oil majors, refiners, airport fuel consortia, hedge desks", valueCapture: 1,
        economics: { grossMargin: [1, 5], capitalIntensity: 3, concentration: 3 },
        linksTo: ["oil-gas"],
        deeper: "25.4% of opex in 2025, 31.4% in 2026 as jet fuel spiked toward $152/bbl (IATA). Hedging is a philosophy split: Europeans hedge heavily and buy time, most US carriers run unhedged and ride the spot market. Neither owns the input; both reprice fares with a lag." },
      { id: "network", name: "Network & operations", what: "Hubs, slots, schedules, crews", players: "Network carriers, airports, air traffic control", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 5, concentration: 3 },
        linksTo: ["tourism", "logistics"],
        deeper: "The operating business itself: connectivity rents at fortress hubs, slot portfolios at capacity-controlled airports (Heathrow class) that trade like real estate, and an execution game measured in completion factor and on-time performance. This is where the ~84% record load factor is manufactured." },
      { id: "distribution", name: "Distribution & revenue management", what: "Pricing and selling the seat", players: "Airline direct channels, Amadeus/Sabre, OTAs, TMCs", valueCapture: 2,
        economics: { grossMargin: [15, 30], capitalIntensity: 2, concentration: 4 },
        linksTo: ["ecommerce", "payments"],
        deeper: "Revenue management is the industry's real IP: repricing millions of fares continuously against perishable inventory. The channel war (NDC direct-connect vs GDS tollbooths) is a decade-long margin fight worth billions in segment fees." },
      { id: "loyalty", name: "Loyalty & co-brand", what: "Minting miles, selling them to banks", players: "Delta/Amex, United/Chase, cobrand issuers", valueCapture: 5,
        economics: { grossMargin: [40, 60], capitalIntensity: 1, concentration: 4 },
        linksTo: ["payments", "banking"],
        deeper: "The crown jewels: Delta's Amex remuneration hit $8.2B in 2025 (+11%), and MileagePlus appraised near $22B in 2020. Banks pay cash today for miles redeemed later at the airline's marginal cost (an empty seat). It is a float-and-spread business hiding inside an industrial." },
      { id: "cargo", name: "Cargo & ancillary", what: "Bellyhold freight plus everything unbundled", players: "Cargo divisions, Emirates SkyCargo, ULCC ancillary machines", valueCapture: 3,
        economics: { grossMargin: [10, 25], capitalIntensity: 2, concentration: 3 },
        linksTo: ["logistics", "shipping", "ecommerce"],
        deeper: "Bellyhold capacity moves with passenger networks and swings with trade cycles. Ancillary is the LCC's second engine: Ryanair's FY2025 arithmetic (EUR 13.95B revenue over 200M passengers vs a EUR 46 average fare) implies roughly EUR 24 per passenger of bags, seats, and extras: over a third of the take." }
    ]
  },

  financials: {
    businessModel: [
      "Read an airline P&L as 3 businesses sharing a fleet. The transport business: revenue = traffic (RPK) x yield, costs = capacity (ASK) x unit cost (CASM), profit lives in the sliver where RASM exceeds CASM, and both move with fuel, labor, and the cycle. The loyalty business: sell miles to banks at high margin (Delta: $8.2B from Amex in 2025), redeem them in otherwise-empty seats. The cargo/ancillary business: monetize the belly and unbundle everything else. In good years transport carries the headline; in bad years loyalty carries the company.",
      "The fixed-cost physics dominate: load factor averaged a record ~84% in 2025 and the industry still earned only about $9 per passenger ($45B net on roughly 5B passengers), because breakeven load factors sit high and the last few points of occupancy are all the profit. Operating leverage cuts both ways at speed: IATA's 2026 forecast halved (to ~$23B) on a fuel spike alone. Balance sheets amplify it: aircraft debt and leases mean EV is mostly claims senior to equity, which is why the sector restructures every decade and why EBITDAR, not net income, is the comparison currency."
    ],
    fingerprint: { grossMargin: 25, recurringRevenue: 20, capitalIntensity: 90, pricingPower: 30, cyclicality: 90, operatingLeverage: 85 },
    lines: [
      { label: "Unit revenue (RASM / yield)", note: "Fare and mix per seat-mile: the demand thermometer" },
      { label: "Load factor & capacity (ASK)", note: "Record ~84% in 2025; capacity growth is the industry's self-harm metric" },
      { label: "CASM ex-fuel", note: "The controllable cost line; labor (~28% of opex) is its engine" },
      { label: "Fuel bill & hedge book", note: "25-31% of opex swinging on geopolitics: 2026's halved profits live here" },
      { label: "Loyalty remuneration", note: "Delta/Amex $8.2B class streams: the margin annuity to underwrite" }
    ],
    unitEconomics: {
      unit: "per passenger (2025 industry vintages)",
      items: [
        { label: "Industry net profit", value: "~$9", note: "$45B net on roughly 5B passengers: less than a checked bag fee" },
        { label: "Fuel share of cost", value: "25.4% (2025) to 31.4% (2026E)", note: "IATA; jet fuel ~$90/bbl in 2025, ~$152/bbl 2026E" },
        { label: "Ryanair average fare", value: "EUR 46", note: "FY2025, down (7%): the ULCC floor under global short-haul pricing" },
        { label: "Ancillary at ULCCs", value: "~EUR 24 per passenger", note: "arithmetic from Ryanair FY2025 revenue vs fares: the unbundling dividend" }
      ]
    }
  },

  kpiRefs: ["aero-deliveries", "energy-breakeven"],
  kpiLocal: [
    {
      id: "avia-load-factor", name: "Load Factor", industries: ["aviation"],
      definition: "Share of available seat capacity actually sold: RPK divided by ASK.",
      formula: "Load factor = RPK / ASK; breakeven load factor = the occupancy at which RASM covers CASM",
      interpretation: "The industry's occupancy gauge: 2025 set a record ~84% full-year average (IATA) because the aircraft shortage rationed capacity. Profit lives in the gap between actual and breakeven load factor, so a high load factor with falling fares can still mean losses.",
      healthy: "Above ~82% with stable or rising yields", warning: "Load factor sustained only by fare cuts, or slipping below ~78% as capacity outruns demand" },
    {
      id: "avia-rasm-casm", name: "RASM-CASM Spread", industries: ["aviation"],
      definition: "Unit revenue minus unit cost per available seat-mile: the airline's entire margin in one spread.",
      formula: "RASM = total revenue / ASM; CASM = operating cost / ASM; operating margin per seat-mile = RASM - CASM",
      interpretation: "The cleanest cross-carrier comparison: it strips out size and shows whether pricing is outrunning cost. Watch CASM ex-fuel separately to isolate what management controls; fuel moved from 25.4% to 31.4% of opex into 2026 through no airline's fault.",
      healthy: "Positive spread with CASM ex-fuel growing slower than RASM", warning: "CASM ex-fuel compounding above RASM growth: the ratchet that ends in restructuring" }
  ],

  health: {
    intro: "Airline health is liquidity first (the industry's killer is the cash-out date, not the income statement), unit economics second, and structural position (loyalty, hubs, cost rank) third.",
    pillars: [
      { name: "Liquidity & leverage", weight: 30, metrics: "Cash + revolver vs 6-12 months of fixed costs; net debt incl leases / EBITDAR", healthy: "Under ~2.5x lease-adjusted with deep liquidity", warning: "Above 4x into a demand or fuel shock: the restructuring zone" },
      { name: "Unit economics", weight: 25, metrics: "RASM-CASM spread, CASM ex-fuel trajectory, breakeven load factor", healthy: "Positive spread, flat CASM ex-fuel", warning: "Costs compounding above unit revenue" },
      { name: "Loyalty & premium mix", weight: 15, metrics: "Co-brand remuneration, premium cabin share of revenue", healthy: "Delta-class: $8.2B Amex stream, growing double digits", warning: "Commodity coach dependence with no annuity cushion" },
      { name: "Fuel exposure & hedging", weight: 15, metrics: "Hedge ratio, fleet fuel efficiency, gauge age", healthy: "Young fleet plus a deliberate hedge policy", warning: "Old gauges unhedged into a $152/bbl tape" },
      { name: "Network & fleet position", weight: 15, metrics: "Hub strength, slot portfolio, delivery positions", healthy: "Fortress hubs and near-term delivery slots (scarce assets now)", warning: "Point-to-point overlap with ULCCs and no fleet renewal path" }
    ],
    scoringNote: "Airlines die of illiquidity, not unprofitability: every framework must weight the balance sheet ahead of the P&L, because the P&L can halve in a quarter (2026's industry forecast did)."
  },

  valuation: {
    intro: "The market prices airlines as cyclicals with memory: multiples stay compressed because everyone remembers the last restructuring. Lease-adjusted metrics are mandatory; the loyalty annuity is the sum-of-parts kicker.",
    methods: [
      { name: "EV / EBITDAR", use: "The standard cross-carrier lens: adds back rent so leased and owned fleets compare", avoid: "Ignoring the R: leases are debt wearing a different name", strengths: "Comparable across fleet strategies", weaknesses: "EBITDAR is far above the cash that reaches equity", range: { low: 4, high: 7, asOf: 2025, note: "Ryanair and loyalty-rich US majors at the top; state carriers and ULCC turnarounds below" } },
      { name: "P/E through the cycle", use: "Quality franchises with real earnings (Delta class)", avoid: "Peak-cycle earnings at peak multiples: the classic airline trap", strengths: "Simple, equity-holder honest", weaknesses: "E can halve on a fuel headline (2026: industry profit $45B to ~$23B)", range: { low: 5, high: 10, asOf: 2025, note: "the sector rarely re-rates; earnings growth does the work" } },
      { name: "FCF yield", use: "Post-capex reality check: separates compounders from capex treadmills", avoid: "Reading deferred fleet capex as durable FCF", strengths: "Cuts through EBITDAR flattery (Delta: record $4.6B FCF in 2025)", weaknesses: "Delivery-cycle lumpy", range: { low: 7, high: 15, asOf: 2025, note: "% yields; the market demands double digits from most of the sector" } },
      { name: "Loyalty sum-of-parts", use: "Sizing the annuity inside the airline", avoid: "Treating an SOTP that can never be separated as realizable value", strengths: "Reveals the mispricing: MileagePlus appraised ~$22B in 2020, above United's market cap then", weaknesses: "The parts share one balance sheet and one brand", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; loyalty streams deserve payment-company multiples, flying deserves airline ones" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Rough-cut an airline: lease-adjusted EBITDAR times a cycle-honest multiple, minus net debt including capitalized leases.",
      inputs: [
        { id: "vc-ebitdar", label: "EBITDAR ($B)", min: 0.5, max: 15, step: 0.5, value: 6, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDAR multiple", min: 3, max: 9, step: 0.5, value: 5.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt incl leases ($B)", min: -5, max: 40, step: 1, value: 15, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats airlines as cyclical beta wrapped around 2 genuinely good businesses: loyalty annuities and structural cost leadership. Own the franchises that monetize scarcity (fortress hubs, co-brand streams, EUR 46 cost bases), rent the rest tactically around fuel and the demand tape, and never mistake a scarcity-supported upcycle for a new industry.",
    debates: [
      { topic: "Investable at last, or value trap with a century of evidence?", bull: "The model changed: US consolidation, loyalty economics (Delta's $8.2B Amex stream), premium mix, and a supply side rationed by the aircraft shortage produced record revenue and real FCF ($4.6B at Delta in 2025). This is a different industry from the one that destroyed capital for decades.", bear: "2026 answered the question: one regional war halved industry profits to ~$23B inside a year. Fuel and labor still take 55%+ of revenue off the top, seats are still commodities, and capacity discipline is on loan from Boeing's dysfunction, not earned. Cyclical, leveraged, and priced accordingly forever." },
      { topic: "Loyalty: durable annuity or consumer-credit beta with wings?", bull: "Contractual, growing (+11% at Delta in 2025), software-margin, and countercyclical enough to collateralize the industry through COVID at payment-company appraisals (~$22B for MileagePlus). The bank pays today; the airline redeems in marginal-cost seats years later.", bear: "It is card-spend beta: a consumer recession hits mile sales and premium redemptions together, issuers renegotiate terms at every renewal, and regulators are circling interchange (the pool the whole arrangement drinks from)." },
      { topic: "The 2026 fuel shock: lagged pass-through or margin reset?", bull: "Constrained capacity means fares follow fuel with a 2-3 quarter lag, exactly as in 2022: carriers repriced, capacity trimmed, margins rebuilt. Scarcity makes this the fastest pass-through regime in the industry's history.", bear: "$152/bbl into softening demand is not 2022: Ryanair's EUR 46 fares cap the pass-through floor on short-haul, Middle East capacity is dumping into rerouted long-haul markets, and margin repair requires capacity exits nobody volunteers for. The 2.0% net margin forecast is the reset." }
    ],
    cycle: {
      where: "Just past the top: 2025 was the post-COVID scarcity boom's peak print ($1T revenue, $45B profit, ~84% load factor); 2026 is a live fuel-shock stress test with forecasts halved to ~$23B. Supply remains rationed by the aerospace delivery crisis, which cushions fares; the question is how much demand the fuel-driven fare increases destroy.",
      drivers: "Consumer income and business travel, jet fuel (crack spreads on top of crude), capacity growth (gated by aircraft deliveries), and geopolitics (airspace closures reroute the map).",
      leads: [
        "TSA daily checkpoint throughput (tsa.gov, free, near-real-time US demand)",
        "EIA jet fuel spot prices and crack spreads (eia.gov, free, weekly)",
        "IATA Air Passenger Market Analysis (iata.org, free monthly RPK and load factor)",
        "Airline monthly traffic releases and forward-booking commentary (company IR, free)",
        "Airbus/Boeing monthly delivery tallies: the capacity faucet (company sites, free)"
      ]
    },
    exposure: [
      { vehicle: "Delta (and quality US majors)", note: "The loyalty-and-premium compounder case: $63.4B revenue, 9.2% operating margin, record FCF in 2025" },
      { vehicle: "Ryanair", note: "Structural cost leadership: 200M passengers at EUR 46 fares; wins every European price war it starts" },
      { vehicle: "United / long-haul network beta", note: "Higher torque to premium international and to fuel; the trade, not the core" },
      { vehicle: "Lessors (AerCap class)", note: "Aircraft scarcity without fuel or fare risk: the picks-and-shovels of the shortage" },
      { vehicle: "JETS-class ETFs", note: "The blunt beta instrument for cycle timing, not stock selection" }
    ],
    catalysts: [
      { when: "Monthly", what: "Traffic releases, TSA throughput trend, jet fuel tape" },
      { when: "Quarterly earnings", what: "RASM/CASM guidance, hedge disclosures, loyalty remuneration growth, capacity plans" },
      { when: "June & December", what: "IATA AGM and Global Outlook: the industry's official forecast resets (June 2026's halved profits moved the whole sector)" },
      { when: "Event-driven", what: "OPEC+ decisions, airspace closures, aircraft delivery slips, and US ATC capacity actions" }
    ],
    data: [
      { series: "TSA checkpoint travel numbers", source: "tsa.gov (free, daily)", why: "The highest-frequency free demand series in any industry" },
      { series: "Jet fuel and crack spreads", source: "EIA (free)", why: "The cost line that halved 2026 industry profits, in real time" },
      { series: "IATA monthly passenger & cargo analyses", source: "iata.org (free)", why: "Global RPK, load factor, and yield direction" },
      { series: "US DOT/BTS airline financials & fares", source: "bts.gov (free, lagged)", why: "Audited unit revenue and cost data by carrier" },
      { series: "Eurocontrol daily traffic", source: "eurocontrol.int (free)", why: "European flight volumes, including the rerouting effects of airspace closures" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Earnings evaporate on small revenue dips (operating leverage cuts fastest here); own liquidity and loyalty cushions, expect trade-down toward ULCCs but fare wars to bruise everyone. Position in the survivors who buy assets in the trough." },
      { regime: "Oil spike", behavior: "The 2026 live case: profits halve on the tape, hedged Europeans outperform for 2-3 quarters, then pass-through and capacity cuts repair margins. Fade the panic in cost leaders; respect it in leveraged laggards." },
      { regime: "Rates rising", behavior: "Lease rates and fleet financing reprice, consumer spend tightens, lessor spreads compress: capital-heavy laggards underperform loyalty-rich franchises." },
      { regime: "Supply normalization", behavior: "The medium-term bear case: when Airbus and Boeing finally ramp, capacity floods back and fares mean-revert. Watch delivery tallies as the early warning and rotate from fare beneficiaries to share gainers." }
    ]
  },

  players: [
    { name: "Delta Air Lines", role: "The quality benchmark", country: "US", real: true, note: "FY2025: record $63.4B revenue, 9.2% operating margin, $8.2B Amex remuneration, record $4.6B FCF" },
    { name: "United Airlines", role: "Premium international torque", country: "US", real: true, note: "MileagePlus appraised ~$22B in 2020: the loyalty-collateral proof case" },
    { name: "Ryanair", role: "Europe's cost machine", country: "IE", real: true, note: "FY2025: first EU airline to 200M passengers; EUR 46 average fare, EUR 1.61B PAT despite (7)% fares" },
    { name: "IAG (British Airways parent)", role: "Transatlantic profit pool", country: "GB", real: true, note: "Heathrow slot fortress plus the industry's richest long-haul market" },
    { name: "Lufthansa Group", role: "Europe's network giant", country: "DE", real: true, note: "Multi-brand hub system spanning premium and low-cost; perennial restructuring-in-progress" },
    { name: "Emirates", role: "The superconnector", country: "AE", real: true, note: "Geography as strategy: one hub, all widebodies; 2026's Middle East disruptions hit this model hardest" },
    { name: "IndiGo", role: "The growth market's winner", country: "IN", real: true, note: "Dominates Indian domestic aviation, the fastest-growing major market, with ULCC economics" },
    { name: "China's Big 3 (Air China, China Eastern, China Southern)", role: "State-scale capacity", country: "CN", real: true, note: "Enormous fleets, policy mandates, thin profits: capacity that does not answer to shareholders" }
  ],

  geography: [
    { country: "US", role: "The profit pool", note: "Consolidated to 4 majors; loyalty and premium economics generate most of global industry profit" },
    { country: "IE", role: "LCC capital", note: "Ryanair's home and the domicile of much of world aircraft leasing" },
    { country: "GB", role: "Slot fortress", note: "Heathrow's capacity cap makes its slots among aviation's scarcest assets" },
    { country: "AE", role: "Superconnector hub", note: "Emirates and the Gulf model: transfer traffic as national strategy; frontline exposure to 2026's airspace disruptions" },
    { country: "CN", role: "Scale without margin", note: "Largest future travel market; state carriers prioritize connectivity over returns" },
    { country: "IN", role: "The growth frontier", note: "Fastest-growing major aviation market; IndiGo's order book ranks among the world's largest" }
  ],

  cycles: [
    { year: 1978, title: "US deregulation", kind: "shift", text: "Pricing and route freedom turn flying into a commodity; fares fall for decades and nearly every pre-1978 US carrier eventually passes through bankruptcy. Lesson: the regulation was the moat; once it lifted, only cost leadership and scarcity were left." },
    { year: 2001, title: "9/11 and the lost decade", kind: "bust", text: "Terrorism, SARS, and oil destroy more value in 10 years than the industry had cumulatively earned; Chapter 11 becomes standard equipment. Lesson: airlines carry the economy's tail risks directly on their P&L." },
    { year: 2008, title: "$147 oil into the GFC", kind: "bust", text: "The fuel spike then demand collapse forces the US consolidation wave (Delta-Northwest, United-Continental, American-US Airways). Lesson: the cure for airline pain is fewer airlines." },
    { year: 2020, title: "COVID zero", kind: "bust", text: "Traffic falls 90%+; governments inject tens of billions; United pledges MileagePlus (appraised ~$22B, above its market cap) to borrow. Lesson: the loyalty program, not the airline, was the credit." },
    { year: 2026, title: "The fuel shock", kind: "shift", text: "Middle East war lifts jet fuel toward $152/bbl and IATA halves its industry profit forecast to ~$23B a year after record 2025 results. Lesson: airlines never own their biggest cost, so no airline upcycle is ever more than one headline deep." }
  ],

  risks: [
    { name: "Sustained fuel shock", severity: 4, likelihood: 4, transmission: "Geopolitics -> jet fuel to 31%+ of opex -> fares lag costs -> industry profit halves (2026: $45B to ~$23B) -> leveraged carriers restructure." },
    { name: "Demand shock (pandemic / deep recession)", severity: 5, likelihood: 2, transmission: "Travel stops -> revenue evaporates against fixed costs -> cash burn measured in months -> bailouts, dilution, and loyalty-collateral borrowing." },
    { name: "Capacity flood on supply normalization", severity: 3, likelihood: 3, transmission: "Airbus/Boeing ramps succeed -> fleets grow into softening demand -> load factors and fares mean-revert -> the scarcity premium in earnings and multiples unwinds." },
    { name: "Labor cost ratchet", severity: 3, likelihood: 4, transmission: "Tight pilot and mechanic supply -> contracts reset up (labor already ~28% of opex, the largest line) -> CASM ex-fuel compounds above RASM -> structural margin erosion." },
    { name: "Climate policy & SAF mandates", severity: 3, likelihood: 4, transmission: "Blending mandates and emissions pricing -> structurally higher cost per seat with no drop-in alternative at scale -> demand taxed, short-haul substituted, laggard fleets penalized." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Airlines fly about 5B passengers a year and, even in a record year like 2025, keep only about $9 of profit per passenger: less than a checked-bag fee. Planes are hugely expensive, fuel and wages eat most of every ticket, and empty seats expire worthless the moment the flight leaves. The surprising part: the frequent-flyer program, which sells miles to credit-card banks, is often the most profitable thing an airline owns."] },
    L2: { title: "Intermediate", text: ["The unit economics: revenue per seat-mile (RASM) minus cost per seat-mile (CASM) is the whole margin, and load factor (a record ~84% in 2025) tells you how full the system is. Fuel was 25.4% of costs in 2025 and jumped toward 31.4% in 2026 when war pushed jet fuel near $152/bbl, halving industry profit forecasts to ~$23B. Labor (~28%) is now the biggest cost line. Ryanair shows the low-cost pole: 200M passengers at EUR 46 average fares, profitable anyway."] },
    L3: { title: "Advanced", text: ["Analyze the 3 embedded businesses separately: transport (cyclical, leveraged, commodity), loyalty (Delta's $8.2B Amex stream at software margins; MileagePlus appraised ~$22B in 2020), and cargo/ancillary (Ryanair adds roughly EUR 24 per passenger in extras). Use lease-adjusted metrics (EV/EBITDAR of 4-7x) because half the fleet is rented, and weight liquidity over earnings: airlines die of cash-out dates, not losses. Today's fares are propped by the aerospace delivery shortage: borrowed discipline."] },
    L4: { title: "Expert", text: ["Trade the tape: TSA throughput and EIA jet fuel daily, IATA monthlies for RPK and load factor, delivery tallies for the capacity faucet. The live debates: whether consolidation-plus-loyalty made US majors durable compounders or 2026's halved forecast re-proved the old physics; whether loyalty is an annuity or card-spend beta; and how fast $152/bbl fuel passes through fares when Ryanair's EUR 46 pricing caps the short-haul floor. Position quality and cost leaders; rent the beta."] },
    L5: { title: "Institutional", text: ["Allocator's frame: aviation is cyclical beta wrapped around scarce assets (fortress hubs, Heathrow-class slots, co-brand contracts, delivery positions) that compound quietly while the transport business oscillates around zero economic profit. Size core positions in the few structural winners (loyalty-rich US majors, Ryanair-class cost leaders, lessors renting scarcity), treat everything else as trading inventory, and remember the sector's base rate: a century of traffic growth, a handful of equities that ever mattered, and an industry P&L one headline away from halving (2026's did)."] }
  },

  quiz: [
    { q: "In 2025 the global airline industry earned, per passenger, roughly:", choices: ["$90", "$9: $45B of net profit spread over about 5B passengers", "$450", "Nothing: it lost money"], answer: 1, explain: "A record year ($1T+ revenue, 4.2% net margin) still produced less profit per passenger than a checked-bag fee: the fixed-cost physics of the business." },
    { q: "IATA halved its 2026 industry profit forecast to about $23B because:", choices: ["A pandemic returned", "Middle East disruptions pushed jet fuel toward $152/bbl, lifting fuel to 31.4% of operating costs", "Boeing stopped deliveries", "Loyalty programs were banned"], answer: 1, explain: "Fuel went from ~$90/bbl (25.4% of opex) in 2025 to ~$152/bbl (31.4%): costs reprice in weeks, fares reprice with a lag." },
    { q: "The 2025 record ~84% load factor was largely a product of:", choices: ["Cheaper tickets", "The aerospace delivery crisis rationing capacity industry-wide", "Government seat quotas", "Larger airports"], answer: 1, explain: "With Airbus and Boeing sold out and behind schedule, fleets grew slower than demand: scarcity imposed the discipline airlines rarely impose on themselves." },
    { q: "Delta's single largest loyalty cash stream in 2025 was:", choices: ["Bag fees", "$8.2B of remuneration from American Express, up 11%", "Cargo", "Government subsidies"], answer: 1, explain: "Selling miles to a bank is a high-margin annuity: in bad years the loyalty business out-earns the flying business." },
    { q: "United's MileagePlus program mattered in 2020 because:", choices: ["It was shut down", "It was appraised near $22B, above United's market cap, and pledged as collateral for survival debt", "It merged with Delta's", "It became a bank"], answer: 1, explain: "COVID revealed the sum-of-parts truth: the market valued the loyalty annuity above the entire airline that owned it." },
    { q: "Ryanair's FY2025 model in one line:", choices: ["High fares, few passengers", "200M passengers at EUR 46 average fares, profitable via EUR ~24 per head of ancillary and a fanatical cost base", "Premium long-haul", "State subsidies"], answer: 1, explain: "The first EU carrier to 200M passengers cut fares (7)% and still earned EUR 1.61B: cost leadership is the only durable moat in commodity seats." },
    { q: "The 1978 US deregulation's long-run lesson was:", choices: ["Regulation returned quickly", "The license had been the moat: fares fell for decades and nearly every pre-1978 carrier eventually went bankrupt", "Fares rose permanently", "Nothing changed"], answer: 1, explain: "Once pricing freed, only cost leadership and scarce assets (hubs, slots, loyalty) protected returns: the industry restructured for 40 years." },
    { q: "Airlines are best compared on EV/EBITDAR because:", choices: ["It flatters growth", "Adding back rent neutralizes leased-vs-owned fleet differences: leases are debt in different clothing", "Net income is too high", "Regulators require it"], answer: 1, explain: "Roughly half the world fleet is leased; without the R, a sale-leaseback would cosmetically transform the same economics." }
  ],

  sources: [
    { name: "IATA: Middle East disruptions and high fuel prices halve 2026 profitability (Jul 2026)", url: "https://www.iata.org/en/pressroom/2026-releases/06-07-middle-east-disruptions-high-fuel-prices-halve-airline-industry-profitability/", feeds: "2026 forecast, fuel prices, cost shares" },
    { name: "IATA Global Outlook for Air Transport (Dec 2025)", url: "https://www.iata.org/en/iata-repository/publications/economic-reports/global-outlook-for-air-transport-december-2025/", feeds: "2025 revenue/profit, load factor, labor share" },
    { name: "Delta Air Lines Q4 & FY2025 results (Jan 2026)", url: "https://www.prnewswire.com/news-releases/delta-air-lines-announces-december-quarter-and-full-year-2025-financial-results-302659392.html", feeds: "revenue, margins, Amex remuneration, FCF" },
    { name: "Ryanair FY2025 results (May 2025)", url: "https://corporate.ryanair.com/news/ryanair-reports-pat-of-e1-61bn-despite-7-lower-fares-1st-eu-airline-to-carry-200m-guests-in-one-year/", feeds: "passengers, fares, PAT" }
  ]
};
