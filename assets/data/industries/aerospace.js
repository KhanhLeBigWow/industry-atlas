/* Industry Atlas - AEROSPACE (full module, research-backed)
 * Anchors 2024: Airbus 766 deliveries vs Boeing 348; Airbus backlog 8,658
 * aircraft (~14 years of production, a record); Boeing backlog ~$435B. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["aerospace"] = {
  meta: {
    id: "aerospace", name: "Aerospace", sector: "industrials", status: "full",
    tagline: "A duopoly with a 14-year order book that cannot build planes fast enough: scarcity economics at 35,000 feet.",
    marketSize: { value: 800, unit: "$B", asOf: 2024, note: "global aerospace & defense revenue; commercial aircraft ~$300B of it" },
    cagr: { value: 6, range: [4, 8], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 3, capitalIntensity: 4, regulation: 5, disruption: 2
  },
  newsQuery: '(Boeing OR Airbus OR "aircraft deliveries" OR "aerospace supply chain" OR "jet engine")',

  overview: {
    definition: "The aerospace industry designs, builds, and supports commercial aircraft, engines, and the 10,000-supplier pyramid beneath them. Two companies assemble nearly every large jet on Earth; a handful more make the engines; everyone else feeds them.",
    howItWorks: [
      "The structure is a duopoly sitting on an oligopoly: Airbus and Boeing split large commercial aircraft, while three engine groups (GE, Rolls-Royce, Pratt & Whitney) power them. Below stretches the tiered supplier pyramid: fuselage sections, avionics, landing gear, fasteners, castings, down to specialty metals: the deepest industrial supply chain outside autos, and currently its most strained.",
      "The economics are razor-and-blade at airliner scale: airframes and especially engines are sold near cost (engines often below it), because the money lives in the 25-to-30-year aftermarket: spare parts, maintenance contracts, and shop visits priced at monopoly margins. An engine maker loses money on delivery and earns 2x to 3x the sale price servicing it; the installed base IS the business.",
      "Demand is a supercycle wearing a queue: air traffic doubles roughly every 15 years (emerging-market middle classes), airlines replace fuel-hungry fleets, and both airframers are sold out into the 2030s: Airbus's backlog hit a record 8,658 aircraft (~14 years of production at current rates), Boeing's stands near $435B. In 2024 Airbus delivered 766 jets to Boeing's 348: the widest gap in the duopoly's history, driven by Boeing's quality crisis (the 737 MAX saga, the January 2024 door-plug blowout, an FAA production cap, and a crippling strike).",
      "The binding constraint is supply, not demand: castings, forgings, engine parts, and skilled labor gate output; both OEMs have missed rate targets for years. That scarcity re-priced the whole chain: suppliers with sole-source positions (and the aftermarket giants) hold the pricing power, while the OEMs absorb penalties. The next battleground is the 2030s clean-sheet aircraft and whoever masters the next engine architecture."
    ],
    history: [
      { era: "1958-1969", title: "The jet age", text: "The 707 and 747 shrink the planet; Boeing becomes America's export champion." },
      { era: "1970-2000", title: "Airbus rises", text: "A European consortium becomes a true rival: fly-by-wire A320 rewrites the narrowbody market; the duopoly forms as Lockheed and McDonnell Douglas exit commercial." },
      { era: "2000-2018", title: "The supercycle", text: "Emerging-market demand and fuel-efficient re-engined jets (A320neo, 737 MAX) build record backlogs; suppliers consolidate; the aftermarket becomes the profit engine." },
      { era: "2018-2020", title: "MAX crisis and COVID", text: "Two 737 MAX crashes (346 deaths) ground the fleet and shatter Boeing's engineering reputation; COVID halts aviation, gutting the supply chain's finances." },
      { era: "2021-present", title: "Scarcity era", text: "Travel roars back but the hollowed-out supply chain cannot: rate ramps slip, Airbus outdelivers Boeing 2-to-1 (766 vs 348 in 2024), backlogs hit records, and quality escapes put Boeing under an FAA microscope." }
    ],
    trends: [
      { title: "The delivery gap", direction: "shift", text: "Airbus's 6th straight year outselling Boeing, now with double the deliveries; every Boeing stumble converts into decade-long Airbus market share because slots are the scarce commodity." },
      { title: "Supply chain fragility", direction: "down", text: "Castings, engine parts (GTF powder-metal recalls grounded hundreds of jets), and labor gate everything; rate targets slip annually." },
      { title: "Aftermarket golden age", direction: "up", text: "Old jets fly longer because new ones can't be delivered: shop visits, spares, and MRO pricing are the cycle's best economics." },
      { title: "Certification rigor", direction: "shift", text: "Post-MAX, the FAA/EASA regime slowed every new variant; the era of self-certification is over, raising the cost and time of change." },
      { title: "Next-gen propulsion", direction: "up", text: "Open-rotor demos (RISE), hydrogen studies, and SAF mandates shape the 2030s clean-sheet race that will reset the duopoly's balance." }
    ],
    outlook: "A decade of visible demand (14-year backlogs) meeting constrained supply: the rare industrial setup where volume, price, and aftermarket all compound together, IF the chain can execute. Boeing's recovery is the swing variable: a stabilized Boeing normalizes the duopoly; continued stumbles hand Airbus structural dominance and keep scarcity pricing for everyone else. The engine aftermarket remains the sector's crown-jewel economics regardless."
  },

  structure: {
    suppliers: [
      { name: "Engine makers (GE Aerospace, Rolls-Royce, P&W/RTX, CFM/Safran)", note: "The oligopoly within: razor-blade kings of the aftermarket" },
      { name: "Aerostructures (Spirit Aero, Leonardo, MHI)", note: "Fuselages and wings; Spirit's crisis was Boeing's crisis" },
      { name: "Systems & avionics (Honeywell, Collins, Thales, Safran)", note: "Cockpits, landing gear, electrics: sole-source niches everywhere" },
      { name: "Castings, forgings & specialty metals (PCC, Howmet, titanium chain)", note: "The physical bottleneck of every rate ramp" }
    ],
    producers: [
      { name: "Airbus", note: "766 deliveries (2024), 8,658-jet backlog: the duopoly's current winner" },
      { name: "Boeing", note: "348 deliveries (2024), ~$435B backlog: in rebuild under FAA caps" },
      { name: "Embraer & regionals", note: "The 100-150 seat niche and the only credible third force" },
      { name: "COMAC", note: "China's C919: a political certainty, a commercial question" }
    ],
    distributors: [
      { name: "Direct + lessor channel", note: "Leasing giants (AerCap class) buy ~half of all new jets and place them with airlines" }
    ],
    customers: [
      { name: "Airlines", note: "The end buyers; fleet plans are 20-year bets on traffic and fuel" },
      { name: "Lessors", note: "Own ~50% of the world fleet; the industry's financiers and slot arbitrageurs" },
      { name: "Cargo & governments", note: "Freighters, VIP, tankers: the diversifying tail" }
    ],
    regulators: [
      { name: "FAA & EASA", note: "Certification and production oversight; post-MAX, the binding authority" },
      { name: "Accident investigators (NTSB, BEA)", note: "Their findings rewrite the industry's rules" },
      { name: "Export credit & trade bodies", note: "Aircraft are diplomacy; WTO fights over subsidies ran 17 years" }
    ],
    capital: [
      { name: "Customer advances (PDPs)", note: "Pre-delivery payments finance work-in-progress: the backlog funds itself" },
      { name: "Bond markets", note: "Boeing's crisis borrowing (~$50B+ debt) is the sector's cautionary balance sheet" },
      { name: "Lessor & aviation finance", note: "$60B+/yr of aircraft financing: banks, capital markets, ECAs" }
    ]
  },

  valueChain: {
    intro: "From titanium sponge to a 30-year maintenance annuity. The profit pyramid inverts the physical one: the aftermarket out-earns the assembly line many times over.",
    stages: [
      { id: "materials", name: "Materials & castings", what: "Titanium, superalloys, precision castings", players: "Howmet, PCC, VSMPO heritage chain", valueCapture: 3,
        economics: { grossMargin: [25, 35], capitalIntensity: 4, concentration: 4 },
        linksTo: ["mining", "steel"],
        deeper: "The ramp's true gate: single-digit suppliers for critical castings and forgings. The titanium chain's Russia exposure (VSMPO) became a strategic scramble post-2022." },
      { id: "components", name: "Systems & structures", what: "Avionics, gear, sections, interiors", players: "Collins, Honeywell, Safran, Spirit", valueCapture: 3,
        economics: { grossMargin: [15, 25], capitalIntensity: 3, concentration: 4 },
        linksTo: ["semiconductors", "manufacturing"],
        deeper: "Sole-source positions abound: once certified onto a platform, a supplier is irreplaceable for the program's life: pricing power the OEMs spend decades trying to claw back." },
      { id: "engines", name: "Engines", what: "The hardest machines humans mass-produce", players: "GE, CFM, Rolls-Royce, P&W", valueCapture: 5,
        economics: { grossMargin: [0, 15], capitalIntensity: 5, concentration: 5 },
        linksTo: ["defense", "manufacturing"],
        deeper: "Sold at or below cost to win the slot; the shop-visit annuity (2x to 3x the sale price over 25 years) is the actual product. The GTF powder-metal recall showed the model's risk: fleet-wide inspections cost billions when the blade metallurgy blinks." },
      { id: "assembly", name: "Final assembly (the duopoly)", what: "Integration, certification, delivery", players: "Airbus, Boeing", valueCapture: 3,
        economics: { grossMargin: [8, 15], capitalIntensity: 4, concentration: 5 },
        linksTo: ["defense", "aviation"],
        deeper: "Astonishingly thin economics for a duopoly: single-digit margins on $100M+ machines, because pricing is set at order (years earlier), penalties bite on delay, and the customer base is concentrated too. The moat is certification + installed base, not margin." },
      { id: "aftermarket", name: "Aftermarket & MRO", what: "Spares, maintenance, upgrades for 25-30 years", players: "Engine OEMs, HEICO, airlines' MRO arms", valueCapture: 5,
        economics: { grossMargin: [30, 45], capitalIntensity: 2, concentration: 3 },
        linksTo: ["aviation", "logistics"],
        deeper: "The crown jewels: captive demand (certified parts only), monopoly pricing on sole-source spares, and a golden age right now because delivery delays keep old fleets flying. HEICO's PMA (approved alternative parts) niche is the only structural discount lever." },
      { id: "financing", name: "Leasing & finance", what: "Owning and placing the world's fleet", players: "AerCap, Avolon, SMBC", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 5, concentration: 3 },
        linksTo: ["banking", "capital-markets", "insurance"],
        deeper: "Lessors arbitrage delivery slots, credit, and residual values: in scarcity, their order books appreciate like assets. Aviation finance is its own $60B+/yr capital market with insurance wrapped around every hull." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector in three different P&Ls. OEMs (Airbus/Boeing): revenue = deliveries × price, margins thin, cash driven by PDP flows and delivery timing: rate ramps ARE the earnings story. Engine makers: losses at delivery, annuity in the aftermarket: watch shop-visit volumes and spares pricing, not engine sales. Suppliers: margin follows sole-source share and aftermarket mix; castings houses with pricing power out-earn structure makers absorbing OEM penalties.",
      "Backlogs give demand visibility unique in industrials (Airbus: ~14 years), but convert slowly and at prices fixed years ago: inflation between order and delivery lands on the producer. The cycle's current gift is the aftermarket: delayed deliveries keep 20-year-old jets flying, and every extra flight-hour is high-margin spares demand. Boeing's ~$50B debt pile shows the other tail: quality failures compound into cash burn, penalties, and dilution."
    ],
    fingerprint: { grossMargin: 22, recurringRevenue: 60, capitalIntensity: 65, pricingPower: 55, cyclicality: 55, operatingLeverage: 60 },
    lines: [
      { label: "Deliveries & rates", note: "The volume engine: monthly delivery tallies are the sector's tape" },
      { label: "Backlog & book-to-bill", note: "Airbus 8,658 jets; slots into the 2030s are the scarce asset" },
      { label: "Aftermarket revenue", note: "Engine makers' shop visits + spares: the margin engine" },
      { label: "PDPs & inventory", note: "Customer advances fund the build; watch inventory swelling on undelivered jets" },
      { label: "Charges & penalties", note: "Program accounting hides risk until it doesn't (Boeing's specialty)" }
    ],
    unitEconomics: {
      unit: "per narrowbody jet (illustrative)",
      items: [
        { label: "List price / real price", value: "~$120M / ~$50-60M", note: "discounts of ~50% are standard" },
        { label: "OEM margin at delivery", value: "8% to 12%", note: "on a good program, after learning curve" },
        { label: "Engine at delivery", value: "near zero or negative", note: "the blade is sold below cost" },
        { label: "Engine aftermarket, 25 yrs", value: "2x to 3x the engine's price", note: "the annuity that funds the industry" }
      ]
    }
  },

  kpiRefs: ["def-backlog", "energy-capacity-factor"],
  kpiLocal: [
    {
      id: "aero-deliveries", name: "Deliveries & Rate Ramp", industries: ["aerospace"],
      definition: "Aircraft delivered per period and the production-rate trajectory versus target.",
      formula: "Rate = aircraft/month per program; delivery count = the cash and revenue event",
      interpretation: "Deliveries are when cash and revenue land; rates are the promise. 2024: Airbus 766, Boeing 348: the duopoly's widest-ever gap.",
      healthy: "Rates rising on plan; deliveries matching guidance", warning: "Serial rate-target slips; FAA caps" }
  ],

  health: {
    intro: "OEM health is execution and cash discipline; supplier health is sole-source share and ramp readiness; everyone's health is quality culture.",
    pillars: [
      { name: "Execution & quality", weight: 30, metrics: "Delivery vs guidance, escapes/ADs, regulator posture", healthy: "Clean audits, rates on plan", warning: "FAA caps, recurring escapes (the Boeing pattern)" },
      { name: "Backlog quality", weight: 20, metrics: "Years of production, deposit-backed share, customer credit", healthy: "5+ years, diversified airlines", warning: "Concentration in fragile carriers" },
      { name: "Aftermarket mix", weight: 20, metrics: "Services share of revenue and profit", healthy: "Aftermarket > 40% of profit", warning: "OE-only exposure to ramp risk" },
      { name: "Balance sheet", weight: 15, metrics: "Net debt vs cycle, PDP dependence", healthy: "Investment grade with ramp headroom", warning: "Crisis leverage (Boeing ~$50B) limiting options" },
      { name: "Supply chain control", weight: 15, metrics: "Dual sourcing, castings coverage, labor pipeline", healthy: "Secured critical path", warning: "Single-source waits gating every rate" }
    ],
    scoringNote: "In aerospace, quality failures are the only unforgivable financial event: they compound through regulators, customers, and courts for a decade."
  },

  valuation: {
    intro: "The sector prices execution and aftermarket annuities: OEMs on delivery-normalized cash flow, engine and parts makers like the annuity businesses they are.",
    methods: [
      { name: "EV / EBITDA (delivery-normalized)", use: "OEMs and structures through ramp cycles", avoid: "Peak-delivery extrapolation; normalize the rate", strengths: "Standard, comparable", weaknesses: "Program accounting obscures true earnings", range: { low: 9, high: 15, asOf: 2024, note: "Airbus commands the premium; Boeing trades on recovery hope" } },
      { name: "FCF yield through the ramp", use: "The OEM cash story: PDPs, inventory, penalties net out here", avoid: "Single-year reads: cash lumps with delivery timing", strengths: "Cuts through program accounting", weaknesses: "Ramp capex clouds it", range: { low: 3, high: 6, asOf: 2024, note: "% yields on normalized delivery rates" } },
      { name: "Aftermarket multiple (engines/parts)", use: "GE Aerospace, HEICO class: price the annuity", avoid: "Applying OEM multiples to annuity businesses", strengths: "Matches the economics", weaknesses: "Shop-visit cycles still cycle", range: { low: 15, high: 25, asOf: 2024, note: "EV/EBITDA; the sector's quality premium lives here" } },
      { name: "Backlog value / slot scarcity", use: "Sanity-checking OEM value against sold-out decades", avoid: "Face-value backlogs (prices are stale, escalation partial)", strengths: "The scarcity lens", weaknesses: "Slots are worth what execution makes them", range: { low: 0, high: 0, asOf: 2024, note: "qualitative anchor, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an aerospace name quickly: normalized EBITDA times an execution-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.5, max: 15, step: 0.5, value: 6, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 7, max: 22, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -10, max: 60, step: 1, value: 12, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays aerospace as a scarcity duopoly with an annuity attached: long the aftermarket compounders and the executing airframer, trade the recovering one on evidence, and treat the supplier chain as ramp-beta with sole-source moats. Fourteen-year backlogs make demand the least interesting variable; execution is the whole game.",
    debates: [
      { topic: "Boeing: deep-value recovery or structurally impaired?", bull: "A duopoly seat with a $435B backlog cannot stay broken: new leadership, post-strike reset, and the FAA cap lifting converts into years of delivery growth from a depressed base: the classic averaging-up turnaround with a moat.", bear: "Culture is the slowest thing to fix in industrials: two decades of financial engineering hollowed the engineering; debt (~$50B) forces equity raises at the worst times; and every quality escape restarts the regulator clock. Cheap on 2027 numbers that keep moving to 2029." },
      { topic: "Is the aftermarket golden age durable or a delivery-delay artifact?", bull: "Fleets age either way: 25-year service lives, captive certified-parts demand, and pricing power that has compounded through every cycle: the annuity out-earns the cycle regardless of ramp timing.", bear: "Today's super-normal shop-visit demand IS the OEM's failure to deliver: when rates finally ramp, retirements accelerate and the spares bonanza mean-reverts, just as aftermarket multiples price permanence." },
      { topic: "COMAC: rounding error or the duopoly's end?", bull: "The C919 is a 1980s-tech jet with Western engines, no global certification, and decades of service-network gap: China buys it politically while the duopoly stays sold out anyway.", bear: "Every duopoly-killer looked crude at first (Airbus itself did); China's domestic market alone can fund iteration for 30 years, and each geopolitical rupture converts Chinese orders straight into COMAC scale." }
    ],
    cycle: {
      where: "Mid scarcity-cycle: record backlogs, constrained supply, aftermarket at peak economics, Boeing's recovery the sector's swing factor: demand visibility measured in decades, execution measured in monthly delivery prints.",
      drivers: "Air traffic growth (~2x GDP), fleet replacement economics (fuel prices), supply-chain capacity, and regulator posture on rates.",
      leads: [
        "Monthly delivery and order tallies (both OEMs publish; free)",
        "FAA production-cap decisions on Boeing rates",
        "Engine-maker aftermarket commentary: shop-visit volumes and spares pricing",
        "Supplier rate-readiness signals (castings, GTF recall progress)",
        "Air traffic data (IATA monthlies) for the demand backdrop"
      ]
    },
    exposure: [
      { vehicle: "Airbus", note: "The executing duopolist: scarcity pricing with the cleaner sheet" },
      { vehicle: "Boeing", note: "The optionality trade: evidence-based sizing, not faith" },
      { vehicle: "Engine & aftermarket (GE Aerospace, Safran, HEICO class)", note: "The annuity core: the sector's best through-cycle economics" },
      { vehicle: "Suppliers (Howmet class)", note: "Ramp beta with sole-source pricing power" },
      { vehicle: "Lessors (AerCap class)", note: "Slot scarcity as a balance-sheet trade; credit + residual risk" }
    ],
    catalysts: [
      { when: "Monthly (early month)", what: "Delivery/order tallies: the duopoly scoreboard" },
      { when: "Quarterly earnings", what: "Rate guidance, program charges, aftermarket growth" },
      { when: "Air shows (Paris/Farnborough, alternating Junes)", what: "Order theater and program announcements" },
      { when: "FAA/EASA decisions", what: "Rate caps and certifications gate the entire equity story" }
    ],
    data: [
      { series: "Airbus & Boeing orders/deliveries", source: "company sites (free, monthly)", why: "The primary tape" },
      { series: "IATA traffic statistics", source: "iata.org (free summaries)", why: "Demand backdrop" },
      { series: "FAA airworthiness directives", source: "faa.gov (free)", why: "Quality and fleet-grounding risk, primary source" },
      { series: "Cirium/CAPA fleet analyses", source: "free summaries", why: "Backlog and fleet-age context" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Orders pause but 14-year backlogs absorb it; deliveries and aftermarket carry through. Milder than industrial peers unless credit hits airlines." },
      { regime: "Oil spike", behavior: "Double-edged: airline pain vs replacement acceleration (new jets burn 15-20% less). Net: order tailwind, delivery risk if airlines wobble." },
      { regime: "Rates rising", behavior: "Lessor economics and airline financing tighten at the margin; industrial quality names hold; Boeing's refinancing math worsens." },
      { regime: "Geopolitical shock", behavior: "Traffic dips are temporary; titanium/China exposure and export bans are the real transmission. Defense overlap hedges the primes-adjacent names." }
    ]
  },

  players: [
    { name: "Airbus", role: "Duopoly leader", country: "FR", real: true, note: "766 deliveries 2024; 8,658-jet record backlog (~14 years)" },
    { name: "Boeing", role: "Duopolist in rebuild", country: "US", real: true, note: "348 deliveries 2024 under FAA cap; ~$435B backlog; the sector's swing factor" },
    { name: "GE Aerospace / CFM", role: "Engine & aftermarket king", country: "US", real: true, note: "The LEAP installed base is a 30-year annuity being written now" },
    { name: "Rolls-Royce / Pratt & Whitney", role: "The other engine houses", country: "UK", real: true, note: "Widebody power and the GTF recall's lessons, respectively" },
    { name: "Safran / Honeywell / Collins (RTX)", role: "Systems oligopoly", country: "FR", real: true, note: "Sole-source niches across every platform" },
    { name: "HEICO / TransDigm", role: "Aftermarket consolidators", country: "US", real: true, note: "The parts-pricing masterclass equities" },
    { name: "AerCap", role: "The lessor giant", country: "IE", real: true, note: "~2,000 aircraft; slot scarcity's biggest balance sheet" },
    { name: "COMAC", role: "The challenger", country: "CN", real: true, note: "C919: politically inevitable domestically, unproven globally" }
  ],

  geography: [
    { country: "FR", role: "Airbus HQ + Safran", note: "Toulouse is the duopoly's healthier pole" },
    { country: "US", role: "Boeing, GE, the supplier base", note: "Seattle/Charleston + an engine-and-parts heartland" },
    { country: "UK", role: "Rolls-Royce + wings", note: "Widebody engines and Airbus wing plants" },
    { country: "DE", role: "Airbus co-home", note: "Hamburg finals + Bremen structures" },
    { country: "CN", role: "Largest future market + COMAC", note: "One in five deliveries heads here; the leverage flows both ways" },
    { country: "JP", role: "Tier-1 heavies", note: "MHI/KHI/SHI build big Boeing sections" }
  ],

  cycles: [
    { year: 1970, title: "The 747 gamble", kind: "boom", text: "Boeing bets the company and wins widebody air travel. Lesson: clean-sheet bets define decades: and nearly kill their makers." },
    { year: 1997, title: "McDonnell Douglas merger", kind: "shift", text: "Boeing absorbs MDD, and, many argue, its finance-first culture. Lesson: culture acquisitions run backward." },
    { year: 2019, title: "The MAX groundings", kind: "bust", text: "346 deaths, a 20-month grounding, and the end of certification deference. Lesson: in aerospace, quality is the balance sheet." },
    { year: 2020, title: "COVID zero", kind: "bust", text: "Traffic drops 95%; the supply chain sheds the workforce it now can't rebuild. Lesson: the 2020 layoffs became the 2024 delivery crisis." },
    { year: 2024, title: "The door plug and the gap", kind: "shift", text: "A blowout, an FAA cap, a strike: Boeing delivers 348 to Airbus's 766. Lesson: duopoly share moves in decade-long waves, and it's moving." }
  ],

  risks: [
    { name: "Boeing execution failure persisting", severity: 4, likelihood: 3, transmission: "More escapes → extended FAA caps → cash burn and dilution → duopoly becomes de facto monopoly with slot prices to match." },
    { name: "Supply chain breakage", severity: 3, likelihood: 4, transmission: "A castings or engine-parts failure gates both OEMs simultaneously → rate targets slip industry-wide (the GTF recall template)." },
    { name: "Aftermarket normalization", severity: 3, likelihood: 3, transmission: "Successful ramps → accelerated retirements → the spares golden age mean-reverts onto premium multiples." },
    { name: "China decoupling", severity: 3, likelihood: 3, transmission: "Delivery freezes to Chinese carriers (a recurring lever) + COMAC substitution → 20% of demand politicized." },
    { name: "Catastrophic quality event", severity: 5, likelihood: 1, transmission: "Another fatal design flaw anywhere in the chain → grounding, criminal exposure, and a re-run of 2019-2024 for whoever owns it." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Two companies (Airbus and Boeing) build nearly all large passenger jets, and three engine makers power them. Airlines order years ahead: the waiting list is now about 14 years long: and planemakers earn most of their money not selling the jet, but servicing it for the next 25 years."] },
    L2: { title: "Intermediate", text: ["The economics: thin margins on the aircraft, rich annuities in the aftermarket (engines sell at a loss; their spare parts earn 2x to 3x the price over decades). Backlogs are records (Airbus 8,658 jets), so supply, not demand, is the constraint: castings, engine parts, and labor gate production. Boeing's quality crisis handed Airbus a 766-vs-348 delivery year in 2024."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: OEMs on delivery-normalized cash flow and program-charge honesty; engine/parts makers on installed base and shop-visit cycles; suppliers on sole-source share. Backlog visibility is unmatched but converts at stale prices: inflation lands on producers. The aftermarket's current super-cycle is partly the delivery crisis in disguise: model its normalization."] },
    L4: { title: "Expert", text: ["Trade the monthly delivery tape, FAA cap decisions, and engine-aftermarket commentary; respect that duopoly share moves in decade waves and one is underway. Live debates: Boeing's culture-vs-valuation turnaround math, aftermarket permanence vs delivery-delay artifact, and COMAC's 30-year political runway. The 2030s clean-sheet race (open-rotor, next narrowbody) is where today's engine bets compound."] },
    L5: { title: "Institutional", text: ["Allocator's frame: aerospace offers industrial scarcity with software-grade demand visibility: core the aftermarket annuities (the sector's true compounders), own the executing airframer, and size the recovering one as evidence-based optionality. The chain's fragility is the alpha source and the risk: sole-source suppliers reprice on every ramp slip. Every thesis in the sector ultimately reduces to one question: who can actually build the things on time, safely." ] }
  },

  quiz: [
    { q: "In 2024 the delivery scoreboard read:", choices: ["Boeing 766, Airbus 348", "Airbus 766, Boeing 348: the duopoly's widest gap", "Roughly tied", "COMAC led"], answer: 1, explain: "Boeing's quality crisis, FAA cap, and strike produced a 2-to-1 Airbus year; slots and share move in decade waves." },
    { q: "Jet engines are typically sold:", choices: ["At 50% margins", "At or below cost: the 25-year spares-and-service annuity is the real product", "Only with aircraft", "By airlines"], answer: 1, explain: "Razor-and-blade at industrial scale: the aftermarket earns 2x to 3x the engine's price over its life." },
    { q: "Airbus's backlog (~8,658 jets) equals roughly:", choices: ["2 years of production", "14 years: a record: making supply, not demand, the constraint", "6 months", "The industry's annual output"], answer: 1, explain: "Sold out into the late 2030s: which is why execution and the supply chain, not orders, drive the equity stories." },
    { q: "The aftermarket is booming right now partly because:", choices: ["Jets got cheaper", "Delivery delays keep old fleets flying: every extra flight-hour is high-margin spares demand", "Regulation requires it", "Fuel is free"], answer: 1, explain: "The OEMs' failure to deliver is the parts-and-MRO industry's golden age: and the mean-reversion risk when ramps succeed." },
    { q: "The MAX crisis permanently changed:", choices: ["Nothing", "Certification: regulator deference ended, raising the cost and time of every design change", "Ticket prices", "Engine design"], answer: 1, explain: "Post-2019, the FAA/EASA regime treats OEM self-certification as history: quality is now the schedule." },
    { q: "Lessors matter because they:", choices: ["Fly the planes", "Buy ~half of all new jets and own ~half the world fleet: the industry's financiers and slot arbitrageurs", "Build engines", "Set fuel prices"], answer: 1, explain: "AerCap-class balance sheets intermediate between OEMs and airlines: in scarcity, their delivery slots appreciate like assets." },
    { q: "The sector's most unforgivable financial event is:", choices: ["A missed quarter", "A quality failure: it compounds through regulators, courts, and customers for a decade", "A strike", "Currency moves"], answer: 1, explain: "The MAX saga cost Boeing $50B+ in debt, its reputation, and half the duopoly's deliveries: quality IS the balance sheet." },
    { q: "COMAC's C919 today is best described as:", choices: ["A global Boeing-killer", "Politically certain in China, commercially unproven globally: a 30-year question, not a 3-year one", "Cancelled", "An Airbus partner"], answer: 1, explain: "Western engines, no global certification, no service network: yet a domestic market big enough to fund decades of iteration." }
  ],

  sources: [
    { name: "Airbus/Boeing 2024 deliveries & backlog (CAPA, Forecast Intl)", url: "https://centreforaviation.com/analysis/reports/global-aircraft-order-backlog-another-new-record-at-14-years-airbus-outsells-boeing-again-707386", feeds: "deliveries, backlog" },
    { name: "Boeing 10-K (backlog $435B)", url: "https://www.sec.gov/Archives/edgar/data/12927/000001292725000015/ba-20241231.htm", feeds: "financials" },
    { name: "IATA traffic data", url: "https://www.iata.org", feeds: "demand" },
    { name: "FAA airworthiness directives", url: "https://www.faa.gov", feeds: "quality/regulatory" }
  ]
};
