/* Industry Atlas - DEFENSE (full module, research-backed)
 * Anchors (SIPRI 2024): global military spend $2.72T (+9.4%, steepest rise
 * since the Cold War); US $997B (~37% of world, 66% of NATO). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["defense"] = {
  meta: {
    id: "defense", name: "Defense", sector: "industrials", status: "full",
    tagline: "One customer, decade-long programs, and demand set by fear: the industry where geopolitics IS the income statement.",
    marketSize: { value: 2.72, unit: "$T", asOf: 2024, note: "global military expenditure (SIPRI); ~$600B addressable equipment/services market" },
    cagr: { value: 7, range: [5, 9], horizon: "2024-2030" },
    maturity: "growth", cyclicality: 2, capitalIntensity: 3, regulation: 5, disruption: 4
  },
  newsQuery: '("defense industry" OR "defense contractor" OR "military spending" OR Lockheed OR Rheinmetall)',

  overview: {
    definition: "The defense industry designs and builds weapons systems, platforms, and military services for governments: the only customer legally allowed to buy most of what it makes. Its demand curve is written in threat assessments and treaty obligations, not consumer taste.",
    howItWorks: [
      "Everything flows from the monopsony: governments are the sole buyer, so the industry's economics are negotiated, not discovered. Programs run on two contract species: cost-plus (development phase: the state absorbs overruns, margins are capped ~8% to 10%) and fixed-price (production: margins can reach 12% to 15%, but overruns are the contractor's problem, as Boeing's defense unit has spent a decade demonstrating). Programs last decades: the B-52 has flown for 70 years; the F-35 will be sustained into the 2070s.",
      "The moat is the barrier stack: security clearances, decades of program heritage, certified facilities, political entrenchment (jobs spread deliberately across congressional districts), and the fact that a new entrant cannot legally test-market a missile. Consolidation after the Cold War (the 1993 'Last Supper') reduced ~50 US primes to 5: Lockheed Martin, RTX, Northrop Grumman, General Dynamics, Boeing, each sitting atop pyramids of thousands of suppliers.",
      "The money is made less on the sale than on the tail: sustainment, upgrades, spares, and services across a platform's 30-to-50-year life typically exceed the original purchase price 2x to 3x. Backlogs are the industry's defining financial feature: multi-year, government-funded order books ($150B+ at the biggest primes) that make revenue visibility the best in industrials.",
      "The 2020s broke the post-Cold-War peace dividend: Russia's invasion of Ukraine, Middle East conflicts, and Pacific tension drove global spending to $2.72T in 2024, up 9.4%, the steepest rise since the Cold War, with Europe rearming fastest and NATO members pledging toward historic spending levels. Simultaneously, the Ukraine war rewrote doctrine: $500 drones destroying $5M tanks challenged the exquisite-platform model and opened the door to defense-tech insurgents (Anduril, Palantir-class) selling software and autonomous mass at commercial speed.",
      "Ammunition and capacity became the scandal: decades of just-in-time procurement left the West unable to produce artillery shells at war rates, triggering the first major industrial-base expansion since the 1980s. The industry's future is being contested between the primes' program machine and a new generation betting that software-defined, attritable systems are the next arsenal."
    ],
    history: [
      { era: "1945-1991", title: "The Cold War arsenal", text: "Permanent mobilization builds the military-industrial complex Eisenhower named; the US and USSR spend up to 10%+ of GDP on rivalry." },
      { era: "1993-2001", title: "The Last Supper and consolidation", text: "Pentagon tells contractors to merge or die; ~50 primes become 5. Budgets fall 30%+; the peace dividend hollows the supplier base." },
      { era: "2001-2011", title: "The GWOT surge", text: "9/11 doubles US spending; counterinsurgency buys MRAPs and drones; services and intelligence contracting boom." },
      { era: "2011-2021", title: "Sequestration and pivot", text: "Budget caps squeeze; primes financialize (buybacks over capacity); China's buildup begins resetting threat assessments." },
      { era: "2022-present", title: "Rearmament", text: "Ukraine ends the holiday from history: global spend hits $2.72T (2024), Europe surges, ammunition capacity becomes strategic, and defense-tech startups attack the primes' model with software and autonomy." }
    ],
    trends: [
      { title: "European rearmament", direction: "up", text: "The fastest regional surge since the Cold War: Germany's Zeitenwende, frontline states above 4% of GDP, and EU-level procurement waking a fragmented industrial base (Rheinmetall became Europe's defining defense stock)." },
      { title: "Attritable autonomy", direction: "shift", text: "Ukraine's drone war proved cheap, software-defined mass can beat exquisite platforms; every military is now buying autonomy, and the primes' cost structures were not built for $50K products." },
      { title: "Munitions industrial base rebuild", direction: "up", text: "Artillery, missiles, and solid rocket motors are capacity-constrained; multi-year procurement contracts are funding the first real plant expansion in 40 years." },
      { title: "Defense-tech venture wave", direction: "up", text: "Anduril-class companies raised billions to sell software-first systems at commercial speed; the Pentagon's acquisition reform is the gating factor." },
      { title: "Space and cyber as budget lines", direction: "up", text: "Contested domains pull spending toward satellites, resilience, and offensive cyber: growth segments inside the budget." }
    ],
    outlook: "A secular upcycle with structural friction: threat-driven budgets rising nearly everywhere (SIPRI's steepest increase since the Cold War), backlogs at records, and the sustainment tail compounding, against labor shortages, supply-chain fragility, and the doctrinal question of whether tomorrow's spending flows to the primes' platforms or the insurgents' autonomous swarms. Both can win for a decade; the share fight defines the 2030s."
  },

  structure: {
    suppliers: [
      { name: "Tier 1-3 supplier pyramid", note: "Thousands of specialized firms under each prime; single-source chokepoints everywhere (solid rocket motors: essentially 2)" },
      { name: "Electronics & semiconductors", note: "Precision weapons are chip products; export-grade supply chains required" },
      { name: "Specialty materials (titanium, energetics, rare earths)", note: "Explosives precursors and magnet metals are strategic bottlenecks" },
      { name: "Skilled labor & cleared talent", note: "Welders to cleared software engineers: the binding constraint of the rebuild" }
    ],
    producers: [
      { name: "US primes (Lockheed, RTX, Northrop, GD, Boeing Defense)", note: "The big 5 atop the pyramid; $150B+ combined backlogs" },
      { name: "European champions (BAE, Rheinmetall, Thales, Leonardo, KNDS, Saab)", note: "The rearmament trade's home team" },
      { name: "Defense-tech insurgents (Anduril, Palantir, drone makers)", note: "Software-first, venture-funded, acquisition-reform dependent" },
      { name: "State producers (China's AVIC/NORINCO, Russia's Rostec, Israel's trio)", note: "The non-market half of the global industry" }
    ],
    distributors: [
      { name: "Government-to-government (FMS)", note: "US Foreign Military Sales: exports as foreign policy, State Department approved" },
      { name: "Direct commercial sales", note: "The faster, politically riskier export channel" }
    ],
    customers: [
      { name: "The US DoD (~$997B budget authority)", note: "37% of world spending; the customer that sets the industry's clock" },
      { name: "NATO + allies", note: "Europe's surge, Gulf recapitalization, Indo-Pacific buildups" },
      { name: "Emerging-market militaries", note: "The contested export battleground vs Chinese/Korean/Turkish offerings" }
    ],
    regulators: [
      { name: "Congress & parliaments", note: "The real demand function: budgets are laws" },
      { name: "Acquisition bureaucracies (DoD 5000, DGA...)", note: "The process that takes 10 years to buy what changes in 2" },
      { name: "Export control (ITAR, Wassenaar)", note: "Every sale is a foreign-policy decision" }
    ],
    capital: [
      { name: "Government progress payments", note: "The customer finances work-in-progress: negative working capital at scale" },
      { name: "Public markets", note: "Dividend-and-buyback aristocrats re-rated by rearmament" },
      { name: "Venture capital", note: "$10B+/yr now flowing to defense-tech, unthinkable a decade ago" }
    ]
  },

  valueChain: {
    intro: "From threat assessment to a 50-year sustainment tail. The profit concentrates late: winning the program is the entry fee; the aftermarket is the business.",
    stages: [
      { id: "requirements", name: "Requirements & budgets", what: "Threat analysis becomes funded programs", players: "Pentagon, parliaments, NATO planners", valueCapture: 1,
        economics: { capitalIntensity: 1, concentration: 5 },
        linksTo: ["government"],
        deeper: "The industry's true demand engine: budget documents. The US process (NDAA, appropriations) sets the world's tempo; a line item is worth more than any marketing department." },
      { id: "rd", name: "R&D & prototyping", what: "Cost-plus development of new systems", players: "Prime labs, DARPA, defense-tech startups", valueCapture: 2,
        economics: { grossMargin: [8, 12], capitalIntensity: 3, concentration: 4 },
        linksTo: ["ai", "space", "semiconductors"],
        deeper: "Deliberately low-margin (the state caps profit on its own money) but strategically decisive: winning development locks decades of production and sustainment. The insurgents' wedge: self-funded development at commercial speed, selling products instead of programs." },
      { id: "production", name: "Platform production", what: "Aircraft, ships, vehicles, missiles at rate", players: "The primes + shipyards", valueCapture: 3,
        economics: { grossMargin: [10, 15], capitalIntensity: 4, concentration: 5 },
        linksTo: ["aerospace", "manufacturing", "steel"],
        deeper: "Fixed-price production is where learning curves pay: margins expand lot over lot, unless the bid was bought too low (Boeing's KC-46 has burned $7B+ of overruns). Rate matters: a hot line prints; a cold line bleeds." },
      { id: "munitions", name: "Munitions & energetics", what: "Missiles, shells, propellants: the consumables", players: "RTX/Lockheed missiles, Rheinmetall, GD-OTS", valueCapture: 4,
        economics: { grossMargin: [12, 18], capitalIntensity: 4, concentration: 4 },
        linksTo: ["chemicals", "mining"],
        deeper: "The war-rate revelation: the West could not make 155mm shells fast enough for Ukraine. Multi-year contracts are now funding capacity doubling; consumables are the closest thing defense has to recurring revenue with a wartime call option." },
      { id: "sustainment", name: "Sustainment & upgrades", what: "The 30-to-50-year aftermarket tail", players: "Primes' services arms, depots", valueCapture: 5,
        economics: { grossMargin: [15, 25], capitalIntensity: 2, concentration: 4 },
        linksTo: ["logistics"],
        deeper: "Where the lifetime money lives: sustainment typically runs 2x to 3x the acquisition cost, sole-sourced to whoever built the platform, on margins the production line envies. The F-35's sustainment fight is the current test of who controls the tail." },
      { id: "software", name: "Software & autonomy layer", what: "Mission systems, C2, AI, autonomous platforms", players: "Palantir, Anduril, prime software units", valueCapture: 4,
        economics: { grossMargin: [40, 70], capitalIntensity: 1, concentration: 2 },
        linksTo: ["ai", "cybersecurity", "saas"],
        deeper: "The insurgency: software margins inside a hardware industry, sold as products not programs. If autonomy makes mass cheap and software the differentiator, this stage's share of the budget: and the industry's power structure: changes." }
    ]
  },

  financials: {
    businessModel: [
      "Read a defense prime in this order: backlog and book-to-bill (the funded future), program mix (cost-plus vs fixed-price, development vs production vs sustainment), margin trajectory by segment, then cash conversion. Revenue is the most visible in industrials: today's sales were appropriated years ago; the backlog IS the model.",
      "The economics are regulated symbiosis: single-digit development margins, low-teens production margins expanding down learning curves, and a high-teens sustainment tail, all financed by customer progress payments that make working capital negative. Free cash flow, not revenue growth, is the sector's scoreboard, and the 2010s were spent returning it; the 2020s are testing whether capacity reinvestment resumes.",
      "The tail risk is program risk: fixed-price development bids (Boeing's tanker, several space programs) can vaporize a decade of margin, and cancellations, though rare, are absolute. The new variable is competition from below: defense-tech firms with venture subsidies and software margins bidding against cost structures built for cost-plus accounting."
    ],
    fingerprint: { grossMargin: 20, recurringRevenue: 75, capitalIntensity: 45, pricingPower: 40, cyclicality: 25, operatingLeverage: 45 },
    lines: [
      { label: "Backlog & book-to-bill", note: "The funded future: >1.0 book-to-bill means the future is still growing" },
      { label: "Segment margins", note: "Watch mix: development drag vs production learning curves vs sustainment cream" },
      { label: "EACs (estimates at completion)", note: "Where fixed-price truth lives; charges cluster here" },
      { label: "Free cash flow", note: "The payout engine; progress payments make it lumpy but rich" },
      { label: "Award announcements", note: "DoD contract announcements (daily, public) are the order tape" }
    ],
    unitEconomics: {
      unit: "per major program (illustrative)",
      items: [
        { label: "Development phase", value: "8% to 10% margin", note: "cost-plus; the state pays to learn" },
        { label: "Production lots", value: "11% to 15% margin", note: "learning curve expands lot over lot" },
        { label: "Sustainment tail", value: "2x to 3x acquisition cost", note: "over 30 to 50 years, sole-sourced" },
        { label: "Cash profile", value: "customer-financed", note: "progress payments = negative working capital" }
      ]
    }
  },

  kpiRefs: ["cloud-rpo", "saas-gross-margin"],
  kpiLocal: [
    {
      id: "def-backlog", name: "Backlog & Book-to-Bill", industries: ["defense", "aerospace"],
      definition: "Contracted future revenue (backlog) and the ratio of new orders to revenue recognized (book-to-bill).",
      formula: "Book-to-bill = Orders received ÷ Revenue; Backlog = cumulative funded + unfunded orders",
      interpretation: "The sector's forward truth: backlogs at the big primes exceed 2 years of revenue; book-to-bill above 1.0 means the future is still growing.",
      healthy: "Book-to-bill >= 1.1 in an upcycle", warning: "< 0.9 sustained",
      benchmark: { median: "US primes ~1.1 to 1.3 in the rearmament cycle (asOf 2024)" },
      investorLens: "Re-rating happens on orders, not revenue: awards lead the P&L by 2 to 5 years.",
      operatorLens: "Capacity and hiring plans hang off it; a hot backlog with a cold labor market is the current bind.",
      mistakes: ["Counting unfunded backlog (options) as equal to funded; only appropriations are real."],
      trend: "Records across US and European primes since 2022; Europe's growth is the marginal buyer."
    }
  ],

  health: {
    intro: "Prime health is backlog quality, program execution discipline, and exposure mix to the budget's growing lines.",
    pillars: [
      { name: "Backlog quality & growth", weight: 25, metrics: "Funded backlog years, book-to-bill, customer mix", healthy: "> 2 years funded, B2B > 1.0", warning: "Shrinking funded backlog in an upcycle" },
      { name: "Program execution", weight: 25, metrics: "EAC adjustment history, fixed-price development exposure", healthy: "Clean EAC record", warning: "Serial charges (the Boeing pattern)" },
      { name: "Portfolio positioning", weight: 20, metrics: "Share of munitions, space, autonomy, sustainment vs legacy platforms", healthy: "Weighted to growing budget lines", warning: "Concentration in programs facing doctrinal doubt" },
      { name: "Cash & capital allocation", weight: 15, metrics: "FCF conversion, capacity reinvestment vs payouts", healthy: "FCF ~100% of net income with rebuild capex", warning: "Payouts starving the capacity the cycle demands" },
      { name: "Supply chain & labor", weight: 15, metrics: "Single-source exposure, hiring vs plan, clearance pipeline", healthy: "Dual-sourced criticals, staffed lines", warning: "Delivery slips from the tier base" }
    ],
    scoringNote: "In defense, the customer forgives cost but never forgives failure to deliver in a war; execution reputation is the multi-decade asset."
  },

  valuation: {
    intro: "Defense trades on cash flow durability and budget beta: a bond-like core with a geopolitical call option attached.",
    methods: [
      { name: "EV / EBITDA", use: "The sector standard across primes", avoid: "Ignoring pension adjustments (legacy primes carry giants)", strengths: "Comparable, stable earnings base", weaknesses: "Misses backlog momentum and program risk", range: { low: 10, high: 16, asOf: 2024, note: "re-rated upward since 2022; Europe at premiums on rearmament growth" } },
      { name: "FCF yield", use: "The payout lens: primes as defense bonds", avoid: "Years distorted by progress-payment timing", strengths: "Matches how the holders think", weaknesses: "Lumpy by design", range: { low: 4, high: 7, asOf: 2024, note: "% yields; compressed as the sector re-rated" } },
      { name: "EV / Backlog-adjusted revenue", use: "Growth comparisons in the rearmament cycle", avoid: "Mixing funded and unfunded books", strengths: "Prices the visible future", weaknesses: "Backlog conversion timing varies by program", range: { low: 1.5, high: 3, asOf: 2024, note: "munitions-heavy names command the premium" } },
      { name: "Venture comps (defense-tech)", use: "The insurgents: priced on ARR-like contract growth", avoid: "Applying prime multiples to pre-scale software", strengths: "Captures the doctrinal option", weaknesses: "Acquisition-reform dependence is unpriceable", range: { low: 0, high: 0, asOf: 2024, note: "Anduril-class private marks rival mid-cap primes" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a prime the sector's way: EBITDA times a durability multiple, minus net debt (mind the pensions).",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($B)", min: 0.5, max: 20, step: 0.5, value: 9, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 18, step: 0.5, value: 13, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt + pension ($B)", min: -5, max: 40, step: 1, value: 15, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns defense as the portfolio's geopolitical hedge with bond-like cash flows: low beta, budget-backed revenue visibility measured in years, and a call option on every deterioration in the world's headlines. The rearmament cycle turned it from a value backwater into a momentum sector; position sizing now must respect that the easy re-rating already happened.",
    debates: [
      { topic: "Is the rearmament cycle durable or priced?", bull: "$2.72T and climbing with the steepest growth since the Cold War, NATO commitments hardening into law, backlogs at records, and Europe's industrial base needing a decade of catch-up: this is a multi-year earnings upgrade cycle, not a headline trade.", bear: "European multiples doubled on promises that require fiscal room Europe does not have; US budgets face debt-ceiling physics; and defense stocks historically round-trip geopolitical premiums once ceasefires arrive. The spending is real; the multiple is the question." },
      { topic: "Primes vs defense-tech: who wins the next budget?", bull: "The primes own the programs, the clearances, the sustainment tails, and the political geography; insurgents become suppliers or acquisitions, as they always have.", bear: "Ukraine proved $500 drones kill $5M vehicles; software-defined attritable mass is a different cost curve, and acquisition reform plus venture billions give the insurgents their first real opening since the 1950s. The primes' margin structure cannot make cheap things profitably." },
      { topic: "Munitions: supercycle or spike?", bull: "Stockpile math is brutal: years of production deficits to refill, allies' magazines empty, and multi-year contracts now guarantee demand into the 2030s: the closest thing to recurring revenue defense has ever had.", bear: "Peace or even frozen conflict collapses the urgency, capacity being built now arrives into that lull, and artillery-era munitions may be the wrong stockpile for the next war anyway." }
    ],
    cycle: {
      where: "Mid rearmament upcycle: budgets rising globally, backlogs at records, European names re-rated hardest, US primes lagging the narrative on execution stumbles: dispersion within the sector at decade highs.",
      drivers: "Threat perception (the demand curve), budget legislation cycles, program execution, and export decisions; almost nothing macro: recessions barely register in appropriations.",
      leads: [
        "Daily DoD contract announcements (defense.gov, free): the order tape itself",
        "NDAA and appropriations milestones (markups, passage): the legislated demand",
        "Book-to-bill and funded backlog in quarterly prints",
        "European procurement announcements and NATO spending pledges",
        "EAC adjustments: execution truth arrives here first"
      ]
    },
    exposure: [
      { vehicle: "US primes (LMT, RTX, NOC, GD class)", note: "The cash-flow core: backlogs + payouts; execution risk differentiates" },
      { vehicle: "European champions (Rheinmetall, BAE, Thales class)", note: "The rearmament beta: highest growth, richest multiples, fiscal-promise risk" },
      { vehicle: "Munitions & missile pure exposure", note: "The war-rate trade: capacity contracts into the 2030s" },
      { vehicle: "Defense-tech (public proxies, Palantir class)", note: "The doctrinal option: software margins, narrative-heavy pricing" },
      { vehicle: "Sector ETFs (ITA/EUAD archetypes)", note: "US-primes-weighted vs the newer European rearmament baskets: different trades" }
    ],
    catalysts: [
      { when: "Feb-Mar (budget request), summer (markups), Q4 (NDAA)", what: "The US legislative calendar is the sector's earnings guidance" },
      { when: "NATO summits (annual)", what: "Spending pledges reset European multiples" },
      { when: "Quarterly earnings", what: "Book-to-bill, EAC charges, and sustainment margin trajectory" },
      { when: "Geopolitical events", what: "The sector gaps on conflict headlines in both directions; ceasefire risk is real portfolio math" }
    ],
    data: [
      { series: "SIPRI military expenditure database", source: "sipri.org (free)", why: "The global spending census: the demand curve, annually" },
      { series: "DoD daily contract announcements", source: "defense.gov (free)", why: "Every award over $7.5M, published daily" },
      { series: "USAspending.gov", source: "usaspending.gov (free)", why: "Contract-level federal spending, queryable" },
      { series: "Company backlog disclosures", source: "10-Qs (free)", why: "The funded future, from the source" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Near-immune: appropriations do not read GDP prints. Classic late-cycle rotation destination; relative outperformance in every drawdown since 2000." },
      { regime: "Rates rising", behavior: "Mildly negative through the bond-proxy channel and pension math, offset by budget growth; sector held up fine through 2022-23 hikes." },
      { regime: "Geopolitical shock", behavior: "The direct beneficiary: gaps higher on conflict, outperforms for quarters as budgets respond. The portfolio's headline hedge alongside energy." },
      { regime: "Peace / de-escalation", behavior: "The unhedged tail: ceasefire headlines compress the sector 10% to 20% and European rearmament premiums much more. Size for it." }
    ]
  },

  players: [
    { name: "Lockheed Martin", role: "The largest prime", country: "US", real: true, note: "F-35, missiles, space: ~$71B revenue and the deepest sustainment tail" },
    { name: "RTX / Northrop / General Dynamics / Boeing Defense", role: "The US big-5 cohort", country: "US", real: true, note: "Missiles-and-engines, bombers-and-space, subs-and-vehicles, and the cautionary tale, respectively" },
    { name: "Rheinmetall", role: "Europe's rearmament champion", country: "DE", real: true, note: "Ammunition and vehicles; the defining European defense equity of the decade" },
    { name: "BAE / Thales / Leonardo / KNDS / Saab", role: "European champions", country: "UK", real: true, note: "The fragmented base the EU is trying to consolidate" },
    { name: "Anduril / Palantir", role: "The defense-tech insurgency", country: "US", real: true, note: "Software and autonomy sold as products at commercial speed" },
    { name: "AVIC / NORINCO / Rostec", role: "The state producers", country: "CN", real: true, note: "The non-market half; China's buildup is the pacing threat" }
  ],

  geography: [
    { country: "US", role: "$997B: 37% of world spending", note: "The customer and the industry in one country" },
    { country: "DE", role: "Zeitenwende epicenter", note: "Rheinmetall's order book is Europe's rearmament in miniature" },
    { country: "UK", role: "Europe's largest defense industry", note: "BAE spans both sides of the Atlantic" },
    { country: "FR", role: "Sovereign full-spectrum industry", note: "Rafale-to-nuclear autonomy doctrine" },
    { country: "IL", role: "Combat-proven exporter", note: "Iron Dome-class systems with unmatched validation" },
    { country: "KR", role: "The rising arsenal", note: "K9 and K2 exports armed Europe faster than Europe could" }
  ],

  cycles: [
    { year: 1961, title: "Eisenhower's warning", kind: "shift", text: "The military-industrial complex gets its name from its architect. Lesson: the industry's political entrenchment is a design feature." },
    { year: 1993, title: "The Last Supper", kind: "bust", text: "Post-Cold-War budgets fall 30%+; the Pentagon orders consolidation. Lesson: peace is the sector's bear case, and it arrives suddenly." },
    { year: 2001, title: "9/11 surge", kind: "boom", text: "Budgets double in a decade; services and ISR boom. Lesson: threat shocks reprice the sector for years, not days." },
    { year: 2013, title: "Sequestration", kind: "bust", text: "Automatic caps prove budgets can fall even mid-conflict. Lesson: the customer's politics are the real cycle." },
    { year: 2022, title: "The Zeitenwende", kind: "boom", text: "Russia's invasion ends the peace dividend; Europe re-rates overnight and global spending begins its steepest climb since the Cold War. Lesson: deterrence failures are demand events." },
    { year: 2024, title: "The drone reckoning", kind: "shift", text: "$2.72T of spending meets the lesson that cheap autonomy kills expensive platforms. Lesson: the budget is secure; its allocation is not." }
  ],

  risks: [
    { name: "Peace / de-escalation repricing", severity: 3, likelihood: 3, transmission: "Ceasefires compress geopolitical premiums 10% to 20% at the primes and far more in rearmament-priced Europe; the bear case is good news." },
    { name: "Fixed-price program blowups", severity: 3, likelihood: 4, transmission: "Aggressive bids meet inflation and labor shortages → EAC charges → a decade of margin vaporized on one program (the Boeing template)." },
    { name: "Doctrinal disruption", severity: 4, likelihood: 3, transmission: "Attritable autonomy shifts budget share from platforms to software-defined mass → the primes' cost structures and multiples both misfit the new demand." },
    { name: "Budget politics", severity: 3, likelihood: 3, transmission: "Continuing resolutions, debt-ceiling standoffs, and election swings stall awards and starve new programs." },
    { name: "Supply chain & labor fragility", severity: 3, likelihood: 4, transmission: "Single-source castings, energetics, and cleared-labor shortages slip deliveries → penalties, charges, and hot-line economics gone cold." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Defense companies build weapons and military equipment that only governments may buy. Demand comes from budgets set by politics and threats, contracts run for decades, and the manufacturer usually keeps servicing what it built for a generation. When the world gets scarier, spending rises: 2024 hit $2.72 trillion, the fastest growth since the Cold War."] },
    L2: { title: "Intermediate", text: ["The model: cost-plus development (low, safe margins), fixed-price production (better margins, real risk), and the sustainment tail worth 2x to 3x the original sale. Backlogs give the best revenue visibility in industrials. Five US primes and a handful of European champions sit atop pyramids of thousands of suppliers, guarded by clearances, program heritage, and politics."] },
    L3: { title: "Advanced", text: ["Analysis runs on backlog quality (funded vs unfunded, book-to-bill), program mix and EAC discipline, sustainment share, and budget-line positioning (munitions, space, autonomy growing; legacy platforms contested). Valuation: EV/EBITDA (pension-adjusted) and FCF yield: a bond-like core re-rated by the rearmament cycle, with Europe carrying the growth premium and the promise risk."] },
    L4: { title: "Expert", text: ["Trade the legislative calendar (budget request → markups → NDAA), the daily DoD award tape, and NATO summitry; respect ceasefire tail risk as the sector's inverse catalyst. The structural fight: primes' program machine vs defense-tech's software economics, with Ukraine's drone lessons as the doctrinal accelerant and acquisition reform as the gate. Munitions capacity contracts into the 2030s are the cycle's most bankable line."] },
    L5: { title: "Institutional", text: ["Allocator's frame: defense is the geopolitical hedge that pays you to hold it: appropriation-backed cash flows, negative correlation to peace, near-zero correlation to GDP. Core: US primes at reasonable FCF yields; satellite: European rearmament and munitions beta, sized for promise risk; option book: defense-tech exposure for the doctrinal shift. The decade's question is allocation within a growing budget, not the budget's direction, and the desk's edge is reading procurement documents nobody else enjoys."] }
  },

  quiz: [
    { q: "Global military spending in 2024 reached:", choices: ["$1.2T", "$2.72T, up 9.4%: the steepest rise since the Cold War", "$5T", "$800B"], answer: 1, explain: "SIPRI's census: $2,718B, with the US at $997B (37% of the world) and Europe surging fastest." },
    { q: "Cost-plus contracts exist because:", choices: ["Contractors prefer low margins", "The state absorbs development risk it forces contractors to take, capping profit in exchange", "They maximize profits", "Fixed prices are illegal"], answer: 1, explain: "Development is too uncertain to bid fixed; the government pays costs plus a regulated fee (~8% to 10%), keeping the risk it created." },
    { q: "Most of a platform's lifetime money is made in:", choices: ["The press release", "Development", "Initial production", "The 30-to-50-year sustainment tail, at 2x to 3x acquisition cost"], answer: 3, explain: "Spares, upgrades, and services: sole-sourced to the builder at the portfolio's best margins. Win the program, own the tail." },
    { q: "Book-to-bill above 1.0 means:", choices: ["Losses", "New orders exceed revenue recognized: the funded future is still growing", "Overbilling", "Layoffs coming"], answer: 1, explain: "The sector's forward indicator; re-ratings follow orders years before revenue." },
    { q: "Ukraine's drone war challenged the industry because:", choices: ["Drones are illegal", "Cheap attritable autonomy destroying expensive platforms questions the exquisite-platform cost model", "Drones need no software", "It didn't"], answer: 1, explain: "$500 drones versus $5M vehicles is a different cost curve; budgets are being reallocated toward software-defined mass, the insurgents' home turf." },
    { q: "Defense equities in recessions historically:", choices: ["Crash with the market", "Outperform: appropriations do not read GDP prints", "Track oil", "Go to zero"], answer: 1, explain: "Demand is legislated years ahead; the sector is a classic late-cycle and drawdown rotation destination." },
    { q: "The sector's inverse catalyst is:", choices: ["War", "Peace: ceasefires compress geopolitical premiums, hardest where rearmament hope is priced", "Inflation", "Elections"], answer: 1, explain: "The 1990s peace dividend cut budgets 30%+; every rally since 2022 carries that tail." },
    { q: "The 'Last Supper' (1993) refers to:", choices: ["A merger dinner where the Pentagon told ~50 primes to consolidate into a few", "A budget vote", "A weapons test", "An export scandal"], answer: 0, explain: "Post-Cold-War consolidation created today's big-5 structure in a single strategic signal." }
  ],

  sources: [
    { name: "SIPRI military expenditure 2024 ($2.72T, US $997B)", url: "https://www.sipri.org/publications/2025/sipri-fact-sheets/trends-world-military-expenditure-2024", feeds: "global spending" },
    { name: "DoD daily contract announcements", url: "https://www.defense.gov/News/Contracts/", feeds: "order flow" },
    { name: "USAspending.gov", url: "https://www.usaspending.gov", feeds: "contract-level data" },
    { name: "Company 10-Ks (backlogs, EACs)", url: "https://www.sec.gov", feeds: "financials" }
  ]
};
