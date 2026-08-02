/* Industry Atlas - RARE EARTHS (full module, research-backed)
 * Anchors: China ~69% of mined output 2025 (GlobalData via Mining Technology) and ~91% of
 * refining, ~94% of sintered NdFeB magnets (IEA, 2024 data); MOFCOM Announcement No. 18
 * (April 4, 2025) put 7 elements under export licensing, October 2025 expansion suspended
 * under a truce expiring November 2026, with Dy/Tb/Y exports still ~50% below baseline
 * (CSIS, 2026); MP Materials-DoD partnership (July 10, 2025): $400M equity (~15% stake),
 * $110/kg NdPr price floor for 10 years, 7,000 t/yr magnet offtake, 10X Facility targeting
 * ~10,000 t/yr US magnet capacity by 2028; NdPr oxide ~$90/kg China domestic (SMM, June 2026)
 * vs ~$184/kg FOB Nd oxide (March 2026): a 60%+ two-tier spread; Lynas ~10,500 t/yr NdPr
 * nameplate, first ex-China separated Dy (May 2025) and Tb (June 2026); NdFeB = 96% of
 * magnet demand 2025, >120 kt by 2030, 332 ktpa by 2036 (IDTechEx).
 * Sources: IEA Rare Earth Elements analysis; MP Materials press release 7/10/25; CSIS
 * "Rare Earth Export Restrictions One Year Later"; USGS Mineral Commodity Summaries. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["rare-earths"] = {
  meta: {
    id: "rare-earths", name: "Rare Earths", sector: "materials", status: "full",
    tagline: "A ~$6B market with a multi-trillion-dollar shadow: 17 elements, 4 that matter, and 1 country refining ~90% of them.",
    marketSize: { value: 6, unit: "$B", asOf: 2025, note: "separated oxides and metals; estimates span $4B to $14B depending on definition; the downstream NdFeB magnet market is several times larger" },
    cagr: { value: 9, range: [7, 12], horizon: "2025-2030" },
    maturity: "strategic-growth", cyclicality: 4, capitalIntensity: 4, regulation: 4, disruption: 3
  },
  newsQuery: '("rare earth" OR "rare earths" OR neodymium OR dysprosium OR NdPr OR "MP Materials" OR "Lynas" OR "rare earth magnet" OR "permanent magnet" export)',

  overview: {
    definition: "The rare earths industry mines, separates, and refines 17 chemically similar elements, then turns 4 of them (neodymium, praseodymium, dysprosium, terbium) into the permanent magnets inside every EV motor, wind turbine, missile fin, and robot joint. The ore is common; the separation chemistry is the moat; and one country owns almost all of it.",
    howItWorks: [
      "Start with a paradox: rare earths are not rare. Cerium is more abundant than copper. What is rare is economic concentration: the elements occur together in low grades, chemically interchangeable, and must be pried apart through hundreds of solvent-extraction stages. Roughly 90% of the industry's value sits in the 4 magnet elements: NdPr (the light pair that forms the magnet's body) and Dy/Tb (the heavy pair, tiny doses that keep magnets working at heat). A deposit's worth is its NdPr and heavies content, not its headline tonnage.",
      "The chain runs mine to concentrate to separated oxide to metal to alloy to magnet, and difficulty rises at every step. Mining is the easy part: China produced ~69% of mined output in 2025 (GlobalData), but the US, Australia, and Myanmar all dig meaningful volumes. Separation is the chokepoint: China holds ~91% of refining capacity and ~94% of sintered NdFeB magnet production (IEA, 2024 data), a position built over 3 decades of state support, tolerated environmental cost, and accumulated process know-how that the West let atrophy after Mountain Pass closed in 2002.",
      "Pricing is opaque and, since 2025, split in two. The Shanghai Metals Market benchmark put NdPr oxide near $90/kg in China in June 2026, while FOB China neodymium oxide fetched ~$184/kg for Western buyers in March 2026: a 60%+ premium born of export controls. The US answered with policy pricing: under the July 2025 MP Materials-DoD partnership, the Pentagon guarantees MP $110/kg for NdPr for 10 years, took a ~15% equity stake ($400M), and committed to buy 7,000 t/yr of magnets for a decade. A commodity market now has a Western reference price set in Washington.",
      "Demand is small in tonnes and enormous in leverage. NdFeB magnets are 96% of rare earth magnet demand (IDTechEx, 2025); global magnet demand should exceed 120,000 t by 2030, roughly 30% above today, en route to a forecast 332 ktpa by 2036. A single EV carries only 1 to 2 kg of magnets, a direct-drive wind turbine roughly 600 kg per MW, and an F-35 about 417 kg of rare earth materials (a widely cited CRS figure): trivial masses without which a multi-trillion-dollar downstream simply stops. That asymmetry, tiny inputs gating huge outputs, is the entire geopolitics of the industry."
    ],
    history: [
      { era: "1949-1984", title: "The American era", text: "Mountain Pass, California supplies the world: europium for color TV, samarium-cobalt for the Cold War. Rare earths are a US industry." },
      { era: "1985-2002", title: "China's long game", text: "Deng Xiaoping, 1992: \"The Middle East has oil, China has rare earths.\" Subsidies, lax environmental rules, and price pressure hollow out Western supply; Mountain Pass closes in 2002." },
      { era: "2010-2015", title: "First weaponization, first bust", text: "China halts shipments to Japan over the Senkaku incident (2010); some prices rise 10x in a year. Molycorp IPOs into the panic, restarts Mountain Pass, and is bankrupt by June 2015 when Beijing relaxes quotas and prices collapse." },
      { era: "2016-2024", title: "Consolidation and the magnet boom", text: "Beijing merges producers into 2 state giants (China Rare Earth Group, Northern Rare Earth); EV and wind demand makes NdFeB the growth story; MP Materials revives Mountain Pass, Lynas scales Malaysia." },
      { era: "2025-present", title: "The weaponization era", text: "MOFCOM Announcement No. 18 (April 4, 2025) puts 7 elements and magnets under export licensing; October 2025 widens it before a US truce pauses the expansion. The Pentagon buys into MP Materials with a price floor and magnet offtake. Two-tier pricing arrives." }
    ],
    trends: [
      { title: "Export controls as statecraft", direction: "shift", text: "China's licensing regime (April 2025, expanded October 2025, partially paused under a truce expiring November 2026) turned an obscure commodity into a lever in every trade negotiation; Dy/Tb/Y exports still run ~50% below baseline (CSIS, 2026)." },
      { title: "Two-tier pricing", direction: "up", text: "FOB China Nd oxide at ~$184/kg vs ~$113/kg domestic (March 2026): Western buyers pay a 60%+ security premium, which is precisely the margin ex-China projects need to pencil." },
      { title: "State-backed Western buildout", direction: "up", text: "The MP-DoD deal ($110/kg floor, 7,000 t/yr magnet offtake, 10X Facility targeting ~10,000 t/yr US magnets by 2028), Lynas's heavy circuit, and EU CRMA targets: industrial policy is now the industry's marginal investor." },
      { title: "Magnet demand from electrification and robots", direction: "up", text: "Magnet demand exceeds 120 kt by 2030 (~30% growth); EVs' share doubles to ~18% by 2030, and IDTechEx flags humanoid robotics among the fastest-growing NdFeB categories of the early 2030s." },
      { title: "Thrifting, substitution, recycling", direction: "shift", text: "Heavy-free magnet designs, grain-boundary diffusion (less Dy per magnet), ferrite fallbacks, and magnet recycling all chip at demand intensity: the perennial bear case that price spikes keep funding." }
    ],
    outlook: "The next 5 years are a race between Chinese leverage and Western replication. China's refining share erodes slowly (the IEA still sees ~80%+ of refining there in 2030 on current trends), so every escalation cycle produces price spikes, policy money, and new ex-China capacity that only survives if the premium or the price floors persist. Demand is the easy call: electrification and robotics compound regardless. The hard call is price structure: a durable two-tier market rewards MP and Lynas handsomely; a detente that reunifies pricing at Chinese marginal cost strands the new builds, exactly as it did in 2015. Position for volatility, not for a trend."
  },

  structure: {
    suppliers: [
      { name: "Mines (Bayan Obo, Mountain Pass, Mt Weld, Myanmar clays)", note: "Bayan Obo alone is roughly half of world mine supply; ionic clays in Myanmar/Laos feed China's heavy-REE diet" },
      { name: "Reagent & acid chain", note: "Solvent-extraction chemistry consumes industrial acids and extractants at scale: an underrated bottleneck for new separators" },
      { name: "Mining services & EPC", note: "Crackers, kilns, and SX circuits are bespoke; ex-China engineering talent is scarce and expensive" },
      { name: "Power & water", note: "Separation is energy- and effluent-intensive; permits hinge on radioactive thorium/uranium tailings management" }
    ],
    producers: [
      { name: "China Northern Rare Earth", note: "World's largest producer; controls Bayan Obo light-REE output" },
      { name: "China Rare Earth Group", note: "The 2021 state consolidation of southern heavy-REE assets" },
      { name: "MP Materials", note: "Mountain Pass ore to Texas magnets; the Pentagon's chosen instrument since July 2025" },
      { name: "Lynas Rare Earths", note: "Largest ex-China separator: ~10,500 t/yr NdPr nameplate, first Western Dy (May 2025) and Tb (June 2026)" }
    ],
    distributors: [
      { name: "Traders & tolling networks (Shenghe class)", note: "Move concentrate and oxides through opaque bilateral deals; the market has no real exchange" },
      { name: "Magnet makers as channel", note: "JL MAG, Ningbo Yunsheng, Proterial, Shin-Etsu: oxides reach end users as magnets, not metals" }
    ],
    customers: [
      { name: "EV & auto OEMs", note: "1 to 2 kg of NdFeB per traction motor; the 2025 export controls idled European and Indian assembly lines within weeks" },
      { name: "Wind OEMs", note: "Direct-drive turbines carry ~600 kg of magnets per MW; offshore is the magnet-hungry segment" },
      { name: "Defense primes", note: "~417 kg of REEs in an F-35 (CRS); guided munitions, sonar, radar: small tonnage, absolute criticality" },
      { name: "Electronics & industrial", note: "Speakers, drives, HVAC compressors, factory servos: the diffuse base load, plus robotics as the coming wave" }
    ],
    regulators: [
      { name: "China MOFCOM", note: "Export licenses under Announcement No. 18 (April 2025): case-by-case approvals are the market's single biggest variable" },
      { name: "US DoD / DPA authorities", note: "Equity stakes, price floors, offtakes: the Pentagon acts as investor, customer, and regulator at once" },
      { name: "EU (Critical Raw Materials Act)", note: "2030 targets: 10% mined, 40% processed, 25% recycled domestically; more aspiration than enforcement so far" },
      { name: "Environmental agencies", note: "Thorium-bearing tailings make every new separator a decade-long permitting fight (Lynas's Malaysia saga)" }
    ],
    capital: [
      { name: "State capital", note: "Chinese SOE balance sheets on one side; DoD's $400M equity plus a $150M heavy-separation loan to MP on the other" },
      { name: "Equity markets", note: "A small, volatile cohort (MP, Lynas, juniors): financings cluster at price spikes, dilution at troughs" },
      { name: "Offtake-linked finance", note: "Magnet buyers (autos, defense) increasingly prepay or invest to secure supply, aerospace-PDP style" }
    ]
  },

  valueChain: {
    intro: "From ore that is 90% worthless mass to magnets that are 90% of the value: the chain concentrates worth exactly where China concentrated capability. Mining is contested; separation and magnet-making are the moats.",
    stages: [
      { id: "mine-concentrate", name: "Mining & concentration", what: "Ore to mixed rare-earth concentrate", players: "Northern Rare Earth, MP Materials, Lynas (Mt Weld), Myanmar artisanal", valueCapture: 2,
        economics: { grossMargin: [20, 45], capitalIntensity: 4, concentration: 4 },
        linksTo: ["mining"],
        deeper: "Grade and basket composition decide everything: a deposit's NdPr share (and any Dy/Tb) is its real endowment. China mined ~69% of 2025 output, but mining is the most replicable step: which is why Beijing's controls target the steps after it." },
      { id: "separation", name: "Separation & refining", what: "Solvent extraction into individual oxides at 99.9%+ purity", players: "Chinese SOEs (~91% share), Lynas Malaysia, MP Stage II", valueCapture: 5,
        economics: { grossMargin: [25, 50], capitalIntensity: 5, concentration: 5 },
        linksTo: ["chemicals"],
        deeper: "The industry's choke point: hundreds of mixer-settler stages tuned by process knowledge that took China 30 years to accumulate. Heavies are hardest: Lynas's May 2025 dysprosium run was the first commercial ex-China separation, at a ~1,500 t/yr circuit against Chinese capacity orders of magnitude larger." },
      { id: "metal-alloy", name: "Metal & alloy making", what: "Oxides to metals to NdFeB alloy flake", players: "Chinese converters dominate; MP, Neo Performance building out", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 4, concentration: 5 },
        linksTo: ["manufacturing"],
        deeper: "The forgotten middle: electrolytic reduction and strip-casting capacity outside China is nearly nonexistent, so even Western oxides historically flew to China to become metal. April 2025's controls covered alloys too, exposing this gap brutally." },
      { id: "magnets", name: "Magnet manufacturing", what: "Sintered NdFeB blocks, machined and coated", players: "JL MAG, Ningbo Yunsheng, Proterial, Shin-Etsu, TDK; MP Independence, e-VAC in the US", valueCapture: 5,
        economics: { grossMargin: [20, 35], capitalIntensity: 4, concentration: 5 },
        linksTo: ["manufacturing", "ev", "wind"],
        deeper: "China makes ~94% of sintered NdFeB (IEA): the bottleneck the MP-DoD deal attacks head-on with 7,000 t/yr of guaranteed Pentagon offtake and a 10X Facility targeting ~10,000 t/yr by 2028. Magnet-making adds 2 layers of moat: grain-boundary engineering IP and customer qualification cycles measured in years." },
      { id: "end-systems", name: "Motors & end systems", what: "Traction motors, generators, actuators, guidance systems", players: "Auto OEMs, wind OEMs, defense primes, robotics makers", valueCapture: 4,
        economics: { grossMargin: [15, 30], capitalIntensity: 3, concentration: 3 },
        linksTo: ["ev", "wind", "defense", "robotics", "consumer-electronics"],
        deeper: "Where tiny magnet cost meets huge system value: magnets are ~1% of an EV's bill of materials and 100% of its motor's function. The 2025 supply scare pushed OEMs into direct offtakes, inventory hoarding, and motor redesigns: the customer is becoming the financier." },
      { id: "recycling", name: "Recycling & circularity", what: "Magnet-to-magnet and swarf recovery", players: "Chinese recyclers (~30% of feed there), Cyclic Materials, Ionic Technologies", valueCapture: 2,
        economics: { grossMargin: [10, 25], capitalIntensity: 3, concentration: 2 },
        linksTo: ["waste-management", "batteries"],
        deeper: "Today a rounding error outside China; by the mid-2030s a real second supply as first-generation EV motors and turbines retire. The EU's CRMA 25% recycled target and defense interest in urban mining make this the chain's long-dated option." }
    ]
  },

  financials: {
    businessModel: [
      "Producers are price takers on a benchmark 1 country effectively sets. Revenue = tonnes of separated oxide (or magnet) times a price discovered mostly on the Shanghai Metals Market: NdPr oxide traded near $90/kg domestically in June 2026 after touching multi-year highs in Q1. Costs are dominated by reagents, energy, and labor across hundreds of SX stages, so margins swing violently with price: Chinese SOEs sit lowest on the curve, MP and Lynas carry Western cost structures that need either strong prices, the ex-China premium (60%+ in early 2026), or policy floors to earn their capital back.",
      "The 2025 policy wave rewired the model for Western names. MP now has a guaranteed $110/kg NdPr floor for 10 years, DoD offtake for 7,000 t/yr of magnets, and moves value downstream where magnet pricing is contractual rather than spot: a commodity producer converting itself into a defense-adjacent manufacturer with annuity features. Lynas runs the pure-play version: spot-exposed oxides plus scarcity value as the only ex-China heavy separator. Watch realized price vs SMM benchmark, cash cost per kg, and the share of volumes under fixed-price or floor-protected contracts: that mix is the difference between a miner's P&L and a utility's."
    ],
    fingerprint: { grossMargin: 35, recurringRevenue: 20, capitalIntensity: 75, pricingPower: 35, cyclicality: 80, operatingLeverage: 75 },
    lines: [
      { label: "NdPr oxide volumes & realized price", note: "The revenue engine: NdPr drives most of any deposit's basket value" },
      { label: "Heavy REE output (Dy, Tb)", note: "Tiny tonnes, premium prices, maximum strategic weight" },
      { label: "Magnet & metal revenue", note: "The downstream migration: contractual pricing, defense offtakes" },
      { label: "Cash cost per kg REO", note: "The survival metric when Beijing lets prices fall" },
      { label: "Policy income (floors, grants, loans)", note: "MP's $110/kg floor payments land here: read the footnotes" }
    ],
    unitEconomics: {
      unit: "per kg of NdPr oxide (2026 vintages)",
      items: [
        { label: "China domestic price", value: "~$90/kg", note: "SMM benchmark, June 2026; spiked ~21% into July" },
        { label: "Ex-China (FOB) price", value: "~$184/kg Nd oxide", note: "vs ~$113 domestic, March 2026: the 60%+ security premium" },
        { label: "DoD floor for MP", value: "$110/kg", note: "10-year guarantee (July 2025 deal); Pentagon pays the shortfall quarterly" },
        { label: "Basket reality", value: "NdPr = most of revenue", note: "roughly a quarter of contained ore, the bulk of its value; Dy/Tb the kicker" }
      ]
    }
  },

  kpiRefs: ["mining-aisc", "mining-grade"],
  kpiLocal: [
    {
      id: "ree-ndpr-price", name: "NdPr Oxide Price", industries: ["rare-earths"],
      definition: "Benchmark price of neodymium-praseodymium oxide, the value driver of nearly every rare earth deposit and magnet.",
      formula: "SMM China spot (domestic) and FOB China quotes, $/kg; compare vs producer cash costs and the $110/kg DoD floor",
      interpretation: "Sets sector profitability and financing windows. ~$90/kg domestic (June 2026) vs ~$184/kg FOB shows the two-tier market export controls created.",
      healthy: "Price above Western all-in costs; narrowing but positive ex-China premium", warning: "Sub-$60/kg with a closed premium: the 2015 Molycorp zone" },
    {
      id: "ree-exchina-premium", name: "Ex-China Price Premium", industries: ["rare-earths"],
      definition: "Spread between FOB/Western prices and China domestic benchmarks for the same oxide.",
      formula: "(FOB or EU/US delivered price minus SMM domestic price) / SMM domestic price",
      interpretation: "The market's real-time vote on supply security risk and the subsidy every ex-China project implicitly earns: 60%+ in early 2026.",
      healthy: "Sustained 20%+ premium funding Western capacity", warning: "Premium collapse toward zero: detente pricing that strands new builds" }
  ],

  health: {
    intro: "Producer health is basket quality times cost position times policy backing. In a market where 1 government sets prices and another writes floors, balance-sheet stamina through the cycle is the tiebreaker.",
    pillars: [
      { name: "Resource & basket quality", weight: 25, metrics: "NdPr grade, Dy/Tb content, mine life, thorium burden", healthy: "High NdPr share with heavies optionality", warning: "Cerium-heavy baskets: tonnage without value" },
      { name: "Separation & downstream capability", weight: 25, metrics: "Separated capacity, metal/alloy/magnet integration, recovery rates", healthy: "Oxide-to-magnet integration operating at nameplate", warning: "Concentrate-only sellers shipping value to China" },
      { name: "Offtake & policy backing", weight: 20, metrics: "Contracted volumes, floors, government equity/loans, customer prepayments", healthy: "MP-style floors and defense offtake", warning: "100% spot exposure to SMM pricing" },
      { name: "Cost & balance sheet", weight: 20, metrics: "Cash cost/kg vs Chinese curve, net cash, funding runway", healthy: "Net cash through a $60/kg NdPr trough", warning: "Debt-funded expansion priced off peak prices" },
      { name: "Permitting & ESG", weight: 10, metrics: "Tailings/thorium compliance, license tenure, community standing", healthy: "Long-dated licenses (Lynas Malaysia to 2036)", warning: "Open-ended reviews: the sector's classic 5-year delay" }
    ],
    scoringNote: "Score producers on trough economics, not spike economics: every prior cycle's winners were decided when Beijing let prices fall, not when it made them rise."
  },

  valuation: {
    intro: "The market prices 2 things at once: a volatile commodity stream and a strategic-scarcity option that governments keep bidding for. Most valuation errors come from using only 1 of those lenses.",
    methods: [
      { name: "NAV / DCF on a price deck", use: "Producers and developers: PV of production at long-run NdPr assumptions", avoid: "Spot-price extrapolation at spikes (the 2011 and Q1 2026 trap)", strengths: "Forces explicit price and cost assumptions", weaknesses: "NAV swings wildly with the deck; terminal prices are guesses about Chinese policy", range: { low: 0.6, high: 1.5, asOf: 2026, note: "P/NAV; strategic names command the top of the band" } },
      { name: "EV / EBITDA (through-cycle)", use: "Producing names (MP, Lynas) on normalized prices", avoid: "Peak-margin years as the denominator", strengths: "Comparable, simple", weaknesses: "EBITDA can triple or vanish inside 18 months", range: { low: 8, high: 20, asOf: 2026, note: "policy-backed names trade far above classic miner multiples" } },
      { name: "Strategic scarcity premium", use: "Sizing what defense relevance adds: floors, offtakes, equity stakes", avoid: "Treating it as guaranteed: policy support has election risk", strengths: "Explains why MP re-rated ~4x around the July 2025 DoD deal", weaknesses: "Unquantifiable by construction; crowds pile in late", range: { low: 0, high: 0, asOf: 2026, note: "qualitative overlay, not a multiple" } },
      { name: "EV per tonne of separated capacity", use: "Cross-checking developers vs builders vs acquirers", avoid: "Comparing concentrate capacity to magnet capacity: different animals", strengths: "Grounds hype in replacement cost", weaknesses: "Capacity means little without recovery rates and customers", range: { low: 0, high: 0, asOf: 2026, note: "sanity check; magnet capacity carries multiples of oxide value" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a rare earth producer quickly: through-cycle EBITDA times a policy-adjusted multiple, minus net debt. Stress the EBITDA at trough prices before believing the answer.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.05, max: 3, step: 0.05, value: 0.4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 24, step: 0.5, value: 14, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -2, max: 5, step: 0.1, value: 0, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats rare earths as a geopolitical volatility trade wearing a mining costume: small, illiquid equities that re-rate violently on policy events rather than earnings. Core the policy-backed Western champions (floors and offtakes convert politics into cash flow), rent the juniors only during escalation windows, and never confuse a supply scare's price spike with a durable price regime: Beijing has ended every prior spike at a time of its choosing.",
    debates: [
      { topic: "Is the ex-China premium durable or a truce artifact?", bull: "Controls stay structurally in place (April 2025 rules never lifted; Dy/Tb exports ~50% below baseline a year later), qualification cycles lock buyers into Western supply for years, and no OEM board will re-concentrate in China after 2025: the premium is the new tax on trust, and it funds an entire parallel supply chain.", bear: "The premium exists because volumes are throttled, not because costs changed: general licenses issued from December 2025 already eased flows, and the truce structure gives Beijing an incentive to reopen just enough to crush the arbitrage: exactly the 2015 playbook that bankrupted Molycorp." },
      { topic: "MP Materials: national champion re-rating or policy-dependent cost taker?", bull: "A $110/kg floor, 15% Pentagon ownership, guaranteed magnet offtake of 7,000 t/yr, and Apple-class commercial deals convert commodity torque into contracted, defense-grade cash flows: the only vertically integrated ore-to-magnet asset in the West deserves an infrastructure multiple.", bear: "Strip the floor and the offtake and you have a single-mine producer whose costs sit above Chinese SOEs, trading at multiples of NAV; the entire equity case rests on Washington's decade-long constancy, which is not a natural phenomenon." },
      { topic: "Does substitution cap the bull case?", bull: "Thrifting has run for 15 years and NdFeB still holds 96% of magnet demand: physics favors it, and each new application (humanoid robots most of all) adds demand faster than engineering removes grams.", bear: "At $180/kg, every motor lab in the world works on heavy-free designs, ferrite alternatives, and magnet recycling; demand intensity per device has fallen every cycle, and 332 ktpa forecasts assume engineers stop responding to prices." }
    ],
    cycle: {
      where: "Mid-weaponization cycle: controls in force with a fragile truce (expiry November 2026), two-tier pricing intact, Western capacity 2 to 3 years from scale, and demand compounding beneath the politics. Prices spiked into Q1 2026, corrected, then re-tightened: policy, not the commodity cycle, sets the tempo.",
      drivers: "MOFCOM licensing throughput, US-China negotiation state, MP/Lynas ramp milestones, EV and wind build rates, defense restocking, and Chinese SOE production quotas.",
      leads: [
        "MOFCOM announcements and license-approval anecdotes (the single biggest price mover)",
        "China customs monthly magnet export volumes (free, GACC data): the flow gauge",
        "SMM NdPr and Dy/Tb price prints and the FOB-vs-domestic spread",
        "MP and Lynas quarterly production reports (free): the ex-China ramp scoreboard",
        "USGS Mineral Commodity Summaries (annual, free): shares and reserves baseline"
      ]
    },
    exposure: [
      { vehicle: "MP Materials", note: "The policy-backed integrator: floor, offtake, magnets; priced accordingly" },
      { vehicle: "Lynas Rare Earths", note: "The ex-China pure play: NdPr scale plus the only Western Dy/Tb" },
      { vehicle: "Magnet & processing specialists (Neo Performance, e-VAC class)", note: "Downstream scarcity with customer qualification moats" },
      { vehicle: "Critical minerals ETFs (REMX class)", note: "Diversified beta to the theme; heavy China weightings, read the holdings" },
      { vehicle: "Developers & juniors (Arafura, Iluka refinery class)", note: "Escalation-window torque; financing risk is the default state" }
    ],
    catalysts: [
      { when: "November 2026", what: "Truce expiry on the October 2025 control expansion: renewal, lapse, or escalation resets pricing" },
      { when: "Quarterly", what: "MP 10X/Independence and Lynas heavy-circuit ramp milestones vs nameplate" },
      { when: "Monthly", what: "China customs magnet export prints: the throttle position, in tonnes" },
      { when: "Episodic", what: "New government deals (floors, stockpiles, equity stakes) anywhere in the G7: each one re-rates the cohort" }
    ],
    data: [
      { series: "USGS Mineral Commodity Summaries: rare earths", source: "usgs.gov (free, annual)", why: "Authoritative production, reserves, and import-reliance baseline" },
      { series: "China magnet/REE export volumes", source: "GACC customs data via free press summaries", why: "The real-time measure of how open the tap is" },
      { series: "SMM rare earth price headlines", source: "metal.com free tier", why: "The de facto global benchmark for NdPr, Dy, Tb" },
      { series: "MP Materials & Lynas quarterlies", source: "company sites (free)", why: "Ex-China volumes, costs, and ramp progress: the supply-diversification tape" },
      { series: "IEA critical minerals reports", source: "iea.org (free)", why: "Refining-share and demand-scenario context beyond the headlines" }
    ],
    playbook: [
      { regime: "Escalation (controls tighten)", behavior: "Prices gap, the whole cohort rips, juniors triple: sell into the third week of the spike; scares fade faster than mines get built." },
      { regime: "Detente / truce extension", behavior: "Premium compresses, policy-backed names hold (floors bite), spot-exposed juniors round-trip: rotate toward MP-class contracted cash flows." },
      { regime: "Recession", behavior: "EV and wind orders slip, magnet demand pauses, but strategic buying (defense, stockpiles) sets a floor politics never had before 2025." },
      { regime: "China supply flood", behavior: "The 2015 template: quota surge, price collapse, Western bankruptcies. Policy floors are the untested new defense: assume only floor-holders survive it." }
    ]
  },

  players: [
    { name: "China Northern Rare Earth", role: "Volume king", country: "CN", real: true, note: "Bayan Obo's operator: the world's largest producer and the light-REE price setter" },
    { name: "China Rare Earth Group", role: "Heavy-REE consolidator", country: "CN", real: true, note: "2021 state merger controlling southern ionic-clay heavies: the Dy/Tb chokepoint" },
    { name: "MP Materials", role: "US national champion", country: "US", real: true, note: "Mountain Pass + Texas magnets; DoD holds ~15% with a $110/kg NdPr floor (July 2025)" },
    { name: "Lynas Rare Earths", role: "Ex-China pure play", country: "AU", real: true, note: "~10,500 t/yr NdPr nameplate in Malaysia; first Western separated Dy and Tb (2025-26)" },
    { name: "JL MAG Rare-Earth", role: "Magnet leader", country: "CN", real: true, note: "Top NdFeB maker supplying global EV platforms: where the oxides actually go" },
    { name: "Shenghe Resources", role: "Trader-investor", country: "CN", real: true, note: "Stakes and offtakes across global projects: China's commercial reach beyond its borders" },
    { name: "Neo Performance Materials", role: "Western processor", country: "CA", real: true, note: "Estonia separation and European magnet build: the ex-China midstream in miniature" },
    { name: "Iluka Resources", role: "Government-backed entrant", country: "AU", real: true, note: "Eneabba refinery under Australian federal financing: policy capital in action" }
  ],

  geography: [
    { country: "CN", role: "The incumbent everything", note: "~69% of mining, ~91% of refining, ~94% of sintered magnets: the chain's center of gravity and its policy risk" },
    { country: "US", role: "Mine + magnet rebuild", note: "Mountain Pass ore, Texas magnet plants, Pentagon capital: reshoring as national security" },
    { country: "AU", role: "The Western resource base", note: "Mt Weld, Eneabba, Arafura's Nolans: best ex-China geology plus state financing" },
    { country: "MY", role: "Processing host", note: "Lynas's Kuantan plant, licensed through 2036: the largest ex-China separator lives here" },
    { country: "MM", role: "The shadow supplier", note: "Ionic-clay heavies from Myanmar feed Chinese refineries: conflict-zone supply beneath the Dy/Tb market" },
    { country: "JP", role: "Magnet technology pole", note: "Shin-Etsu, TDK, Proterial: post-2010 embargo, Japan wrote the diversification playbook everyone now copies" }
  ],

  cycles: [
    { year: 2002, title: "Mountain Pass closes", kind: "bust", text: "Chinese price pressure and environmental liabilities end US production; the West outsources the whole chain. Lesson: supply chains atrophy quietly and rebuild expensively." },
    { year: 2010, title: "The Senkaku embargo", kind: "boom", text: "China halts shipments to Japan; some prices rise 10x within a year and the world discovers the dependency. Lesson: scarcity is a policy variable, not a geological one." },
    { year: 2015, title: "Molycorp goes bankrupt", kind: "bust", text: "Quotas relax, prices collapse, and the West's flagship restart fails 5 years after its IPO. Lesson: capacity built for spike prices dies at policy prices." },
    { year: 2022, title: "The EV repricing", kind: "boom", text: "NdPr roughly triples off 2020 lows as EV demand meets tight quotas, funding a new generation of projects. Lesson: real demand growth arrived, but the price mechanism still runs through Beijing." },
    { year: 2025, title: "Weaponization and the Pentagon's answer", kind: "shift", text: "April export controls meet July's MP-DoD deal: floors, offtakes, and state equity replace the free market on both sides. Lesson: when a commodity becomes ammunition, governments become the marginal buyers." }
  ],

  risks: [
    { name: "Chinese supply flood post-truce", severity: 4, likelihood: 3, transmission: "Quota surge and license easing -> NdPr back below $60/kg -> ex-China projects miss debt covenants -> 2015-style consolidation, with price floors the only untested shield." },
    { name: "Escalation cutting heavy-REE exports", severity: 5, likelihood: 3, transmission: "Truce lapse (November 2026) -> Dy/Tb licensing freeze -> magnet output gated worldwide -> auto and defense production stoppages within a quarter, as 2025 previewed." },
    { name: "Substitution and thrifting", severity: 3, likelihood: 3, transmission: "Sustained high prices -> heavy-free magnet adoption and ferrite substitution at the margin -> demand intensity per device falls -> long-run volume forecasts (120 kt+ by 2030) overshoot." },
    { name: "Ex-China execution failure", severity: 3, likelihood: 4, transmission: "SX ramp problems, cost overruns (Lynas's expansion already at A$294M), permitting delays -> diversification timelines slip years -> premium persists but Western equities burn cash waiting." },
    { name: "Policy reversal in the West", severity: 4, likelihood: 2, transmission: "Administration change or fiscal squeeze -> floors, offtakes, and loans questioned -> the strategic premium in MP-class valuations deflates faster than any commodity move." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Rare earths are 17 metals that are not actually rare: they are just hard to separate from each other. A few of them make the world's strongest magnets, which sit inside electric cars, wind turbines, headphones, and fighter jets. China refines about 90% of the world's supply and makes about 94% of the magnets, so when it restricted exports in 2025, factories on other continents felt it within weeks. The amounts are tiny (a car uses 1 to 2 kg) but nothing works without them."] },
    L2: { title: "Intermediate", text: ["Value concentrates in 4 elements: NdPr (the magnet's body) and Dy/Tb (heat resistance), so a deposit's basket, not its tonnage, is its worth. The chain runs mine to separation to metal to magnet, and difficulty and concentration rise at each step: China mined ~69% of 2025 output but holds ~91% of separation. Since the April 2025 export controls, pricing split in 2: ~$90/kg NdPr inside China (SMM, June 2026) vs a 60%+ premium FOB. The US response was the July 2025 MP Materials-DoD deal: $400M of Pentagon equity, a $110/kg price floor, and guaranteed magnet purchases."] },
    L3: { title: "Advanced", text: ["Model producers on basket value times recovery times realized price minus a cost curve China anchors. The key spreads: FOB vs domestic (the security premium funding Western projects), realized vs SMM benchmark (contract quality), and price vs Western cash costs (survival math). Separation capability is the scarce asset: Lynas's ~1,500 t/yr heavy circuit made it the first ex-China Dy/Tb producer in 2025-26, worth more strategically than its NdPr tonnage suggests. Demand is the dependable leg: NdFeB is 96% of magnet demand, headed past 120 kt by 2030 on EVs, wind, and early robotics."] },
    L4: { title: "Expert", text: ["Trade the policy tape, not the commodity tape: MOFCOM license throughput, monthly GACC magnet-export prints, and truce headlines move prices more than any mine ramp. The live debates: whether the ex-China premium survives detente, whether MP's floor-and-offtake model earns an infrastructure multiple or hides policy dependence, and whether substitution engineering caps the 2030s demand curve. Respect the 2015 asymmetry: Beijing can end any price spike by opening the tap, so size juniors for round trips and reserve conviction for balance sheets that survive $60/kg NdPr."] },
    L5: { title: "Institutional", text: ["Allocator's frame: rare earths are not a commodity allocation but a geopolitical option premium with industrial cash flows attached: a ~$6B oxide market whose disruptions reprice trillions in EV, wind, defense, and robotics output. Core the policy-backed integrators (state floors convert tail risk into contracted revenue), treat spot-exposed names as escalation-window rentals, and monitor the November 2026 truce expiry as the cohort's single largest binary. The decade's structural question is whether the West can hold a 2-tier price long enough to amortize a parallel supply chain: every position is ultimately a view on that."] }
  },

  quiz: [
    { q: "China's grip on the rare earth chain is strongest at which step?", choices: ["Mining (~69% of 2025 output)", "Refining and magnets: ~91% of separation and ~94% of sintered NdFeB (IEA)", "End-device assembly", "Recycling"], answer: 1, explain: "Mining is replicable; 30 years of separation know-how and magnet capacity are the real moat, which is why export controls target oxides, alloys, and magnets rather than ore." },
    { q: "Rare earths are:", choices: ["Geologically scarce", "Common in the crust but costly to separate: hundreds of solvent-extraction stages", "Only found in China", "Radioactive fuels"], answer: 1, explain: "Cerium is more abundant than copper. Economic concentration and separation chemistry, not geology, create the scarcity." },
    { q: "The value of a rare earth deposit is driven mainly by:", choices: ["Total tonnage", "Its NdPr content plus any Dy/Tb: roughly 90% of basket value sits in 4 magnet elements", "Cerium content", "Proximity to ports"], answer: 1, explain: "Magnet elements carry the price; a big cerium-heavy resource can be nearly worthless per tonne of ore." },
    { q: "The July 2025 MP Materials-DoD partnership included:", choices: ["Only a research grant", "$400M of Pentagon equity (~15%), a $110/kg NdPr price floor for 10 years, and 7,000 t/yr of magnet offtake", "Nationalization of Mountain Pass", "A ban on exports to allies"], answer: 1, explain: "Washington became investor, price setter, and anchor customer at once: the boldest US industrial-policy intervention in a commodity market in decades." },
    { q: "After the April 2025 export controls, pricing became:", choices: ["Globally uniform", "Two-tier: ~$90/kg NdPr inside China vs a 60%+ premium FOB for Western buyers (2026)", "Fixed by the UN", "Irrelevant to magnet makers"], answer: 1, explain: "Throttled export licenses split the market; the ex-China premium is the implicit subsidy funding every Western project." },
    { q: "Lynas Rare Earths matters because it:", choices: ["Is China's largest producer", "Is the largest ex-China separator (~10,500 t/yr NdPr) and produced the first Western Dy (2025) and Tb (2026)", "Only mines lithium", "Makes EV motors"], answer: 1, explain: "Its Malaysia plant is the only meaningful separation capacity outside China, and its new ~1,500 t/yr heavy circuit broke China's total heavies monopoly." },
    { q: "The 2015 Molycorp bankruptcy teaches that:", choices: ["Rare earth demand is fake", "Capacity built for spike prices dies when Beijing reopens supply: policy sets the trough", "US mining is illegal", "Prices only go up"], answer: 1, explain: "China relaxed quotas, prices collapsed, and the West's flagship restart failed 5 years after IPO: the template every investor should stress-test against." },
    { q: "Magnet demand growth into the 2030s is driven by:", choices: ["Declining electronics use", "EVs (share doubling to ~18% by 2030), wind, defense restocking, and humanoid robotics: 120 kt+ by 2030, 332 ktpa forecast by 2036", "Coal plants", "Paper manufacturing"], answer: 1, explain: "NdFeB holds 96% of magnet demand and every electrification and robotics curve adds to it; substitution engineering is the main brake." }
  ],

  sources: [
    { name: "IEA: Rare Earth Elements analysis (refining and magnet shares)", url: "https://www.iea.org/reports/rare-earth-elements/executive-summary", feeds: "market structure, shares" },
    { name: "MP Materials-DoD partnership announcement (July 10, 2025)", url: "https://mpmaterials.com/news/mp-materials-announces-transformational-public-private-partnership-with-the-department-of-defense-to-accelerate-u-s-rare-earth-magnet-independence/", feeds: "price floor, offtake, equity terms" },
    { name: "CSIS: Rare Earth Export Restrictions One Year Later (2026)", url: "https://www.csis.org/analysis/rare-earth-export-restrictions-one-year-later", feeds: "export controls, flows" },
    { name: "USGS Mineral Commodity Summaries: Rare Earths", url: "https://www.usgs.gov/centers/national-minerals-information-center/rare-earths-statistics-and-information", feeds: "production, reserves" }
  ]
};
