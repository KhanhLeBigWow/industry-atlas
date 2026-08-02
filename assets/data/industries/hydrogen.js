/* Industry Atlas - HYDROGEN (full module, research-backed)
 * Anchors: global demand ~100 Mt in 2024, low-emissions <1% of supply; announced 2030
 * potential cut from 49 to 37 Mtpa in one year; only ~9% of the 2030 project pipeline
 * past FID (IEA Global Hydrogen Review 2025). Gray hydrogen $1-3/kg vs green $4-12/kg
 * unsubsidized; Western electrolyzers $500-1,500/kW vs Chinese $300-500/kW with China
 * holding ~60% of manufacturing capacity (BloombergNEF and industry surveys, 2025).
 * DOE H2Hubs: $7B for 7 hubs (2023); ~$2.2B canceled Oct 2025 (ARCHES $1.2B, PNW $1B)
 * per E&E News/Canary Media. Plug Power: net losses above $1B in 2023 and 2024 with
 * negative gross margin; $1.66B DOE loan guarantee closed Jan 2025 (company filings). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["hydrogen"] = {
  meta: {
    id: "hydrogen", name: "Hydrogen", sector: "energy", status: "full",
    tagline: "A $170B commodity the world already uses, and a clean-energy dream where 91% of the pipeline is still a press release.",
    marketSize: { value: 170, unit: "$B", asOf: 2024, note: "~100 Mt of annual demand, almost all gray hydrogen from fossil fuels; low-emissions supply is under 1% (IEA GHR 2025)" },
    cagr: { value: 8, range: [4, 12], horizon: "2024-2030" },
    maturity: "mature-core-emergent-edge", cyclicality: 3, capitalIntensity: 5, regulation: 4, disruption: 4
  },
  newsQuery: '("green hydrogen" OR electrolyzer OR "hydrogen hub" OR "blue hydrogen" OR "clean hydrogen" OR "hydrogen project")',

  overview: {
    definition: "Hydrogen is 2 industries wearing 1 name: a mature ~100 Mt/yr industrial-gas commodity feeding refineries and fertilizer plants, and an embryonic clean-energy sector trying to remake it. The first earns utility-grade returns in obscurity; the second has burned billions chasing a cost curve that has not yet arrived.",
    howItWorks: [
      "The existing business is invisible and enormous: roughly 100 Mt of hydrogen was consumed in 2024 (IEA), nearly all of it made on-site from natural gas (steam methane reforming, gray) or coal, and nearly all of it consumed where it is made: oil refining, ammonia for fertilizer, and methanol. Industrial gas majors (Linde, Air Products, Air Liquide) run the merchant slice on 15-to-20-year take-or-pay contracts with cost pass-through: quietly some of the best contracted economics in all of industrials.",
      "The clean-energy version replaces the reformer with an electrolyzer splitting water using renewable power (green) or bolts carbon capture onto the reformer (blue). The problem is arithmetic: gray hydrogen costs $1-3/kg; unsubsidized green runs $4-12/kg globally and $5-8/kg in Europe (BNEF and industry surveys, 2025). Electricity is roughly 60-70% of green cost, so the game reduces to cheap power at high utilization: an electrolyzer running half the time on expensive electrons produces the most expensive molecule in energy.",
      "Hardware is bifurcating: Western electrolyzers run $500-1,500/kW installed while Chinese systems sell for $300-500/kW, and China controls about 60% of global manufacturing capacity (2025). That is the solar playbook replaying: overcapacity, price war, Western pure plays (Nel, ITM class) stuck with negative gross margins on shrinking order books while the technology itself gets cheaper for everyone else.",
      "The pipeline-versus-reality gap is the industry's defining statistic: only ~9% of the announced 2030 project pipeline has reached final investment decision (IEA GHR 2025), and announced 2030 potential fell from 49 to 37 Mtpa in a single year, with electrolysis projects over 80% of the cut. What survives has a pattern: modular scale, co-located with an existing industrial buyer, contracted offtake. What died was speculative, export-oriented, and 500 MW+. Policy is the demand: 45V tax credits (up to $3/kg), EU RED III mandates, and hub subsidies, which makes every project a creature of the rulebook that funds it."
    ],
    history: [
      { era: "1913-1970", title: "The industrial workhorse", text: "Haber-Bosch ammonia synthesis makes hydrogen the molecule that feeds the world; refineries become the other captive customer. No one calls it an industry: it is plumbing." },
      { era: "1970-2003", title: "The perennial fuel of the future", text: "Oil shocks birth the phrase 'hydrogen economy'; fuel-cell hype crests around 2000 (Ballard's dot-com peak) and again with 2003's FreedomCAR push. Each wave breaks on the same rock: cost." },
      { era: "2017-2021", title: "The green wave", text: "Collapsing renewables costs plus net-zero pledges reprice the dream: 30+ national strategies, the Hydrogen Council forms, and a 2020-21 stock mania sends Plug Power up roughly 10x in a year." },
      { era: "2021-2023", title: "The policy arms race", text: "The US IRA's 45V credit (up to $3/kg), the EU Hydrogen Bank, and $7B of DOE hub awards (Oct 2023) turn hydrogen into a subsidy competition; NEOM's 2.2 GW project closes $8.4B of financing (May 2023): the largest green FID ever." },
      { era: "2023-present", title: "The reality check", text: "Cost inflation, missing offtake, and rate hikes cull the pipeline: announced 2030 supply drops from 49 to 37 Mtpa, DOE cancels ~$2.2B of hub funding (Oct 2025), and capital rotates to modular, industrial-anchored projects." }
    ],
    trends: [
      { title: "FID discipline", direction: "shift", text: "From mega-announcements to offtake-first projects: only ~9% of the 2030 pipeline is past FID (IEA), and financiers now price pre-FID capacity near 0." },
      { title: "Chinese electrolyzer dominance", direction: "up", text: "~60% of global manufacturing capacity and $300-500/kW pricing: the solar-style commoditization of the sector's core hardware." },
      { title: "Policy whiplash", direction: "down", text: "The US clawed back ~$2.2B of hub funding in Oct 2025 and proposed repurposing billions more in 2026; EU mandates (RED III's 42% renewable-hydrogen target for industry by 2030) now carry the demand case." },
      { title: "Blue pragmatism", direction: "shift", text: "Reformers plus carbon capture win the near-term big projects (US Gulf Coast, Middle East): existing gas infrastructure, $1.5-3/kg economics, and oil-major balance sheets." },
      { title: "Pure-play shakeout", direction: "down", text: "Plug's $1B+ annual losses and the electrolyzer price war are shrinking the equity universe; industrial gas majors and oil majors absorb the viable assets." }
    ],
    outlook: "The honest base case is a barbell: the boring 100 Mt commodity core keeps compounding with GDP, while clean hydrogen grows fast from a rounding error (under 1% of supply today, perhaps 1 Mt of low-emissions output in 2025 per the IEA) into the niches where it is genuinely needed: ammonia, refining, methanol, and eventually steel. The bull case requires electrolyzer costs to do what solar did, and durable policy. The bear case is already visible: without a carbon price or mandate, nobody pays a 3x premium for the same molecule. Either way, the incumbents win first."
  },

  structure: {
    suppliers: [
      { name: "Electrolyzer OEMs (Nel, ITM, Thyssenkrupp Nucera, Cummins, Chinese majors)", note: "The picks-and-shovels layer, currently a price war China is winning" },
      { name: "Catalyst & materials chain (platinum, iridium, membranes)", note: "PEM's iridium dependence is a real scaling constraint" },
      { name: "Renewable power developers & gas suppliers", note: "Electricity is 60-70% of green cost; gas is the gray feedstock" },
      { name: "Compression, storage & cryogenics (Chart, Baker Hughes class)", note: "Moving the lightest molecule is half the engineering problem" }
    ],
    producers: [
      { name: "Industrial gas majors (Linde, Air Products, Air Liquide)", note: "The incumbents: contracted, investment-grade, and buying the distressed edge" },
      { name: "Oil & gas majors (Shell, BP, ExxonMobil, Aramco)", note: "Blue hydrogen at Gulf Coast and Middle East scale" },
      { name: "Pure plays (Plug Power, fuel-cell and electrolysis ventures)", note: "The cautionary tales: growth without gross margin" },
      { name: "Ammonia producers (CF Industries, Yara)", note: "Hydrogen's biggest real customer, integrating upstream" }
    ],
    distributors: [
      { name: "Pipelines, tube trailers & liquefaction", note: "Dense regional networks (US Gulf Coast) work; long-haul hydrogen mostly travels as ammonia" }
    ],
    customers: [
      { name: "Refineries", note: "Desulfurization: the largest single use today" },
      { name: "Ammonia & methanol plants", note: "Captive demand that could decarbonize first" },
      { name: "Steel, heavy transport & power", note: "The aspirational demand: real in pilots, thin in contracts" }
    ],
    regulators: [
      { name: "US DOE & Treasury", note: "Hub funding and 45V credit rules decide project math; both moved against the sector in 2025" },
      { name: "European Commission", note: "RED III mandates and the Hydrogen Bank: the world's firmest demand backstop" },
      { name: "Certification bodies", note: "What counts as 'green' (additionality, hourly matching) is itself a contested rulebook" }
    ],
    capital: [
      { name: "Government subsidy programs", note: "45V, EU auctions, national strategies: quasi-equity that can be repriced by an election" },
      { name: "Project finance", note: "Banks lend only against contracted offtake: the discipline mechanism culling the pipeline" },
      { name: "Public equity", note: "Burned twice (2000, 2021); now funds incumbents, not dreams" }
    ]
  },

  valueChain: {
    intro: "From electrons and methane to molecules under contract. Value pools at the 2 ends: whoever owns cheap power or gas, and whoever holds the 20-year offtake. The middle (equipment, logistics) is being commoditized in real time.",
    stages: [
      { id: "equipment", name: "Electrolyzers & equipment", what: "Stacks, balance of plant, fuel cells", players: "Nel, ITM, Nucera, Cummins, Longi, Peric", valueCapture: 2,
        economics: { grossMargin: [0, 20], capitalIntensity: 4, concentration: 3 },
        linksTo: ["manufacturing", "mining", "chemicals"],
        deeper: "The solar movie, replaying: Chinese systems at $300-500/kW versus Western at $500-1,500/kW, with ~60% of manufacturing capacity in China (2025). Western OEMs run negative-to-thin gross margins on order books that shrank with the pipeline cull. Iridium and platinum loadings gate PEM scaling." },
      { id: "power", name: "Power & feedstock", what: "Renewable PPAs, nuclear, natural gas", players: "Utilities, developers, gas producers", valueCapture: 4,
        economics: { grossMargin: [20, 40], capitalIntensity: 5, concentration: 2 },
        linksTo: ["solar", "wind", "nuclear", "utilities", "oil-gas"],
        deeper: "Electricity is 60-70% of green LCOH, so hydrogen is really a power-price arbitrage: projects pencil below roughly $20-30/MWh at high load factors and die above it. Gray hydrogen is a gas derivative: every gas spike narrows the green gap for free." },
      { id: "production", name: "Production (gray, blue, green)", what: "Reformers, CCS retrofits, electrolysis plants", players: "Linde, Air Products, Air Liquide, oil majors", valueCapture: 5,
        economics: { grossMargin: [25, 40], capitalIntensity: 5, concentration: 4 },
        linksTo: ["chemicals", "oil-gas", "carbon-markets"],
        deeper: "The incumbents' fortress: on-site plants under 15-to-20-year take-or-pay contracts with energy pass-through. Gray at $1-3/kg sets the price to beat; blue lands near $1.5-3/kg with CCS; green needs $4-12/kg unsubsidized. The 45V credit (up to $3/kg) was designed to bridge exactly that gap, which is why its rules move equities." },
      { id: "midstream", name: "Storage, conversion & transport", what: "Compression, liquefaction, ammonia conversion, pipelines", players: "Industrial gas networks, shipping lines, terminal operators", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 5, concentration: 3 },
        linksTo: ["shipping", "logistics", "utilities"],
        deeper: "Physics is the moat and the tax: compressing or liquefying hydrogen eats 30%+ of its energy, and the molecule embrittles steel. Long-haul trade mostly means ammonia as the carrier. Of ~37,000 km of hydrogen pipelines announced to 2035, under 6% have reached FID (IEA): midstream is even further behind production." },
      { id: "enduse", name: "End use & offtake", what: "Refining, ammonia, methanol, steel, mobility", players: "Refiners, fertilizer makers, steelmakers, fleet operators", valueCapture: 3,
        economics: { grossMargin: [10, 25], capitalIntensity: 4, concentration: 3 },
        linksTo: ["agriculture", "steel", "oil-gas", "aviation", "shipping"],
        deeper: "The binding constraint is not supply but willingness to pay: fertilizer and refining offtakers can absorb a green premium only if mandates or carbon prices force it. Steel (DRI) is the credible new demand; road transport lost to batteries; aviation and shipping fuels are the 2030s question." },
      { id: "policy", name: "Policy & project finance", what: "Tax credits, mandates, auctions, project debt", players: "DOE, European Commission, ECAs, project banks", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 4 },
        linksTo: ["banking", "government", "carbon-markets"],
        deeper: "Where the sector's real price is set. The US wrote $7B of hub awards in 2023, then canceled ~$2.2B of them in Oct 2025 and proposed clawing back billions more: a live lesson in subsidy duration risk. Banks now demand contracted offtake before FID, which is exactly why only ~9% of the pipeline has one." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 2 different P&Ls. Incumbents (industrial gas majors): on-site plants and pipeline networks sold as 15-to-20-year take-or-pay contracts with cost pass-through: high-single-digit revenue growth, 25%+ operating margins, utility-like visibility, and the balance sheets absorbing the clean-hydrogen edge at distressed prices. Developers and pure plays: project economics gated by power price, utilization, subsidy capture, and offtake, with equipment sales layered on top: negative gross margins are common and financing is the product.",
      "Plug Power is the canonical cash-burn case study: net losses above $1B in both 2023 and 2024 on sub-$1B revenue, a negative gross margin (the hydrogen sold cost more to make than it fetched), repeated billion-dollar financings, and a $1.66B DOE loan guarantee closed in Jan 2025 to keep building (company filings). The lesson is structural, not moral: without contracted offtake at a covered margin, scale amplifies losses. The projects that work invert this: NEOM's $8.4B financing closed against a 30-year exclusive offtake by Air Products before construction began."
    ],
    fingerprint: { grossMargin: 25, recurringRevenue: 55, capitalIntensity: 85, pricingPower: 35, cyclicality: 50, operatingLeverage: 45 },
    lines: [
      { label: "On-site & take-or-pay contracts", note: "The incumbent annuity: volume-guaranteed, energy passed through" },
      { label: "Merchant & packaged gas", note: "Spot-ish sales into industry; the cyclical sliver" },
      { label: "Equipment sales (electrolyzers, fuel cells)", note: "Lumpy, competitive, margin-poor in the current price war" },
      { label: "Project development & subsidies", note: "45V credits, hub grants, EU auctions: policy as a revenue line" },
      { label: "Fuel & service", note: "Delivered hydrogen and maintenance: where Plug's negative margins lived" }
    ],
    unitEconomics: {
      unit: "per kg of hydrogen (2025 vintages)",
      items: [
        { label: "Gray (natural gas SMR)", value: "$1-3/kg", note: "the incumbent benchmark; tracks gas prices" },
        { label: "Blue (SMR + carbon capture)", value: "~$1.5-3/kg", note: "the pragmatic bridge at Gulf Coast gas prices" },
        { label: "Green (unsubsidized)", value: "$4-12/kg global, $5-8/kg Europe", note: "electricity is 60-70% of it" },
        { label: "US 45V credit", value: "up to $3/kg", note: "designed to close the gap; rules and duration are the risk" }
      ]
    }
  },

  kpiRefs: ["energy-capacity-factor", "chem-operating-rate"],
  kpiLocal: [
    {
      id: "h2-lcoh", name: "Levelized Cost of Hydrogen (LCOH)", industries: ["hydrogen"],
      definition: "All-in production cost per kg over a project's life: capex, power or gas, utilization, and stack replacement.",
      formula: "LCOH = (capex recovery + feedstock/power + opex) / kg produced",
      interpretation: "The sector's clearing price. Gray $1-3/kg is the bar; green at $4-12/kg unsubsidized (2025) explains the FID drought better than any narrative.",
      healthy: "Green LCOH under ~$3/kg with subsidy at high utilization", warning: "LCOH above $5/kg or utilization assumptions over 60% without firmed power" },
    {
      id: "h2-fid-share", name: "FID Conversion Rate", industries: ["hydrogen"],
      definition: "Share of announced project capacity that has reached final investment decision.",
      formula: "FID capacity / total announced capacity to 2030",
      interpretation: "The gap between press release and steel in the ground: ~9% globally, ~2% in Africa (IEA GHR 2025). Rising share means the pipeline is getting real; a growing pipeline with flat FIDs means the opposite.",
      healthy: "FID share rising with contracted offtake attached", warning: "Pipeline growth outpacing FIDs; cancellations of post-FID projects" }
  ],

  health: {
    intro: "Incumbent health is contract quality and return on capital; developer health is offtake, power cost, and funding runway. Everyone's health is exposure to a rulebook that can change after the ribbon is cut.",
    pillars: [
      { name: "Offtake quality", weight: 30, metrics: "Contracted share of capacity, counterparty credit, tenor", healthy: "15+ year take-or-pay with investment-grade buyers (the NEOM/Air Products template)", warning: "Merchant assumptions, MOUs counted as demand" },
      { name: "Cost position", weight: 25, metrics: "LCOH vs gray benchmark, power price, utilization", healthy: "Sub-$3/kg delivered with subsidy; firmed cheap power", warning: "Economics that only work at $3/kg credit forever" },
      { name: "Balance sheet & funding", weight: 20, metrics: "Cash runway, dilution cadence, project debt terms", healthy: "Funded to cash flow positive", warning: "The Plug pattern: annual $1B+ burn funded by serial equity raises" },
      { name: "Policy exposure", weight: 15, metrics: "Subsidy share of project returns, jurisdiction mix", healthy: "Projects viable at reduced support; EU mandate-backed demand", warning: "Single-program dependence (the canceled US hub awardees' lesson)" },
      { name: "Technology & execution", weight: 10, metrics: "Stack degradation, uptime, delivered-vs-nameplate", healthy: "Proven hours at scale, warranties honored", warning: "First-of-a-kind everything, iridium-constrained roadmaps" }
    ],
    scoringNote: "In hydrogen, the fatal event is not a competitor but a spreadsheet: projects die when the subsidy, the power price, or the offtaker's patience moves 20%."
  },

  valuation: {
    intro: "Price the 2 industries separately: incumbents like contracted industrial compounders, developers like risk-weighted project portfolios, and pure plays with a survivorship discount earned the hard way.",
    methods: [
      { name: "EV / EBITDA (industrial gas)", use: "Linde, Air Products, Air Liquide: the investable core", avoid: "Crediting incumbents' hydrogen optionality twice", strengths: "Clean comparables, contract-backed earnings", weaknesses: "Hydrogen upside is a small slice of a big base", range: { low: 12, high: 18, asOf: 2025, note: "the quality premium of take-or-pay economics" } },
      { name: "Risk-weighted project NPV", use: "Developers and single-asset stories", avoid: "Face-value pipelines: pre-FID capacity deserves near-0 weight (only ~9% converts)", strengths: "Matches how project finance actually prices", weaknesses: "Subsidy and power-price inputs dominate the answer", range: { low: 0, high: 0, asOf: 2025, note: "qualitative: NPV per FID'd project, not per announced GW" } },
      { name: "EV / Sales (pure plays)", use: "Pre-profit equipment and fuel names, if at all", avoid: "Treating revenue growth as progress when gross margin is negative (the Plug lesson)", strengths: "The only multiple that exists for loss-makers", weaknesses: "Prices the story, not the business", range: { low: 1, high: 4, asOf: 2025, note: "down from double digits in the 2021 mania" } },
      { name: "Replacement cost / $ per kW", use: "Electrolyzer makers and project hard assets", avoid: "Western cost bases in a Chinese-priced world ($300-500/kW)", strengths: "Anchors to physical reality", weaknesses: "Replacement cost is falling: today's asset is tomorrow's writedown", range: { low: 0, high: 0, asOf: 2025, note: "sanity check, not a target" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a hydrogen name quickly: normalized EBITDA times a contract-quality multiple, minus net debt. For pre-EBITDA names, this calculator is the point: there is nothing to multiply.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.1, max: 15, step: 0.1, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 20, step: 0.5, value: 13, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 1, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays hydrogen as an incumbents-first trade: own the industrial gas compounders (who win in every scenario), rent the theme through them when policy tailwinds blow, and treat pure plays as expiring options sized accordingly. The single most useful discipline is refusing to capitalize announcements: 91% of the pipeline has no FID, and the last cycle taught what that is worth.",
    debates: [
      { topic: "Green hydrogen: inevitability or permanent niche?", bull: "Every serious net-zero pathway needs clean hydrogen for ammonia, refining, and steel; electrolyzer costs follow the solar curve once China scales; and mandates (EU RED III's 42% by 2030) create demand that does not depend on virtue. The 49-to-37 Mtpa cull is the bubble clearing, not the thesis dying.", bear: "After 15 years and 3 hype cycles, low-emissions hydrogen is still under 1% of supply. Without a $150/t carbon price or permanent subsidy, nobody pays 3x for the same molecule: and the use cases keep losing to direct electrification wherever a wire reaches." },
      { topic: "Blue bridge or blue trap?", bull: "Blue at $1.5-3/kg decarbonizes real volumes this decade using existing gas infrastructure and oil-major balance sheets; the Gulf Coast buildout happens regardless of green's timeline.", bear: "Blue locks in gas exposure and depends on CCS performing at rates it rarely achieves; if green costs do fall, blue assets become the stranded middle." },
      { topic: "Do pure plays ever earn their cost of capital?", bull: "Someone builds the picks and shovels of a multi-decade transition; survivors of the shakeout inherit a consolidated market with real demand, and the DOE loan to Plug shows the state wants survivors.", bear: "Plug's decade of negative gross margins, the Nel/ITM order-book collapse, and Chinese pricing at $300-500/kW argue the value flows to customers and incumbents: the pure plays are the subsidy's pass-through, not its beneficiary." }
    ],
    cycle: {
      where: "Post-hype trough, discipline phase: the 2021 mania fully unwound, the pipeline culled from 49 to 37 Mtpa of 2030 potential, US policy in retreat, EU mandates holding the floor. FIDs that survive now are the highest-quality cohort the sector has produced.",
      drivers: "Natural gas prices (set the gray benchmark), renewable power prices and curtailment, subsidy rules (45V, EU auctions), electrolyzer cost declines, and rates (green projects are duration assets).",
      leads: [
        "IEA Global Hydrogen Review annual pipeline and FID data (free)",
        "US Treasury/DOE announcements on 45V rules and hub funding (free)",
        "EU Hydrogen Bank auction clearing prices (free)",
        "FID and offtake announcements: the only pipeline entries that count",
        "Henry Hub and TTF gas prices (EIA, free): the gray cost floor moving in real time"
      ]
    },
    exposure: [
      { vehicle: "Industrial gas majors (Linde, Air Products, Air Liquide)", note: "The all-weather core: contracted economics plus free optionality on the transition" },
      { vehicle: "Electrolyzer OEMs (Nucera, Nel class)", note: "High-beta theme exposure; Chinese pricing is the permanent headwind" },
      { vehicle: "Oil majors' blue projects", note: "The pragmatic decade: hydrogen exposure inside diversified cash machines" },
      { vehicle: "Ammonia producers (CF, Yara class)", note: "The real offtaker: clean premiums flow through fertilizer first" },
      { vehicle: "Pure plays (Plug class)", note: "Option-sized only: the cash-burn math has ended careers" }
    ],
    catalysts: [
      { when: "Ongoing 2026", what: "US budget fights over the remaining hub funding and 45V's fate: the sector's biggest single variable" },
      { when: "EU auction rounds", what: "Hydrogen Bank clearing prices: the cleanest public read on the true green premium" },
      { when: "Quarterly earnings", what: "Plug/Nel prints (burn rate, order books) and gas-major project sanctions" },
      { when: "2030 mandate deadlines approaching", what: "RED III compliance buying must start years early: watch industrial offtake contracts in 2026-2028" }
    ],
    data: [
      { series: "IEA Global Hydrogen Review & project database", source: "iea.org (free)", why: "The canonical pipeline, FID, and demand numbers" },
      { series: "DOE Hydrogen Hubs program pages", source: "energy.gov (free)", why: "Primary source on the $7B program's shrinking scope" },
      { series: "Natural gas prices (Henry Hub, TTF)", source: "EIA / eia.gov (free)", why: "Gray hydrogen's cost, updated daily" },
      { series: "EU Hydrogen Bank auction results", source: "European Commission (free)", why: "Market-clearing subsidy per kg: the honest premium" },
      { series: "Company FID and offtake announcements", source: "issuer sites (free)", why: "The only forward indicator that converts to steel" }
    ],
    playbook: [
      { regime: "Gas price spike", behavior: "Gray costs rise and the green gap narrows for free; incumbents pass costs through, green developers' relative economics improve: the counterintuitive tailwind." },
      { regime: "Rates rising", behavior: "Green projects are long-duration, capex-front-loaded assets: NPVs crush, FIDs freeze, pure plays' financing windows shut. The 2022-2024 cull was partly a rates story." },
      { regime: "Policy retreat", behavior: "The US 2025 template: hub cancellations mark subsidy-dependent names down instantly; rotate toward EU-mandate-backed and Middle East sovereign-backed projects." },
      { regime: "Recession", behavior: "Industrial hydrogen demand (refining, chemicals) dips with production; take-or-pay contracts shield incumbents; theme capital evaporates first and returns last." }
    ]
  },

  players: [
    { name: "Linde", role: "Incumbent leader", country: "UK", real: true, note: "The largest industrial gas company: take-or-pay economics across ~100 Mt of legacy demand" },
    { name: "Air Products", role: "Clean-hydrogen aggressor", country: "US", real: true, note: "NEOM's exclusive 30-year offtaker and the biggest green/blue capex bet among incumbents" },
    { name: "Air Liquide", role: "Incumbent major", country: "FR", real: true, note: "European networks plus electrolysis JVs: the measured transition play" },
    { name: "Plug Power", role: "Pure-play cautionary tale", country: "US", real: true, note: "$1B+ annual net losses, negative gross margin, $1.66B DOE loan (Jan 2025): scale before margin" },
    { name: "Nel / ITM Power", role: "Western electrolyzer pure plays", country: "NO", real: true, note: "Order books culled with the pipeline; squeezed by Chinese pricing" },
    { name: "Thyssenkrupp Nucera", role: "Alkaline at scale", country: "DE", real: true, note: "NEOM's electrolyzer supplier; the strongest Western reference book" },
    { name: "Longi / Peric (Chinese OEMs)", role: "Cost leaders", country: "CN", real: true, note: "$300-500/kW systems from ~60% of world manufacturing capacity" },
    { name: "ACWA Power / NEOM Green Hydrogen Co", role: "Mega-project template", country: "SA", real: true, note: "2.2 GW, $8.4B financed (2023): proof that contracted offtake, not ambition, closes deals" }
  ],

  geography: [
    { country: "CN", role: "Largest producer and consumer", note: "~30% of global demand plus electrolyzer manufacturing dominance: the cost-setter" },
    { country: "US", role: "Gulf Coast incumbency, policy whiplash", note: "The world's densest hydrogen pipeline network; $7B hub program now partially canceled" },
    { country: "DE", role: "Mandate-driven demand", note: "EU RED III compliance plus steel decarbonization: Europe's offtake anchor" },
    { country: "SA", role: "Sovereign-scale green exporter", note: "NEOM: cheap solar, cheap capital, and state patience" },
    { country: "AU", role: "Export ambition, FID reality", note: "A giant announced pipeline that has shed its most speculative projects" },
    { country: "JP", role: "Import strategy", note: "Betting on ammonia co-firing and imported hydrogen: the demand-side experiment" }
  ],

  cycles: [
    { year: 1973, title: "The hydrogen economy is coined", kind: "shift", text: "Oil shocks make hydrogen the perennial fuel of the future. Lesson: a molecule can be technically elegant and economically premature for 50 years." },
    { year: 2000, title: "Fuel-cell dot-com bust", kind: "bust", text: "Ballard and peers ride the bubble up and all the way down; fuel-cell cars remain 10 years away for the next 25 years. Lesson: hype cycles in hydrogen run on policy and oil prices, not unit economics." },
    { year: 2020, title: "The green mania", kind: "boom", text: "Plug rises roughly 10x, 30+ countries publish strategies, and announced pipelines balloon toward 49 Mtpa of 2030 supply. Lesson: announcements are free; electrons are not." },
    { year: 2023, title: "NEOM closes, IRA prices the gap", kind: "shift", text: "An $8.4B project financing closes against a 30-year offtake while 45V offers up to $3/kg. Lesson: contracted offtake plus subsidy is the only formula that has ever reached FID at scale." },
    { year: 2025, title: "The great cull", kind: "bust", text: "The 2030 pipeline drops from 49 to 37 Mtpa, only ~9% of what remains is past FID, and DOE cancels ~$2.2B of hub awards. Lesson: subsidy-dependent pipelines die by press release too." }
  ],

  risks: [
    { name: "Policy reversal", severity: 5, likelihood: 4, transmission: "Subsidies repriced or canceled (the Oct 2025 US template) -> project IRRs break -> FIDs freeze -> equipment orders vanish -> pure-play financing windows slam shut." },
    { name: "Offtake mirage", severity: 4, likelihood: 4, transmission: "Green premium stays unfunded -> MOUs never convert to contracts -> built capacity runs below plan -> LCOH rises further -> the cost spiral feeds itself." },
    { name: "Cost curve stall", severity: 4, likelihood: 3, transmission: "Electrolyzer costs fail to follow solar (Western prices rose 2021-2024) -> green stays 3x gray -> demand defaults to blue and gray -> the thesis slips another decade." },
    { name: "Chinese commoditization", severity: 3, likelihood: 4, transmission: "$300-500/kW pricing spreads -> Western OEM margins stay negative -> consolidation or exit -> supply chains concentrate in one jurisdiction." },
    { name: "Safety or leakage event", severity: 3, likelihood: 2, transmission: "A high-profile failure (embrittlement, explosion, or methane-scale leakage findings) -> permitting slows -> insurance repricing -> public-acceptance discount on every project." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["The world already uses about 100 Mt of hydrogen a year, mostly made from natural gas, to refine fuel and make fertilizer. The clean-energy version (green hydrogen, made by splitting water with renewable electricity) costs roughly 3x as much: $4-12/kg versus $1-3/kg: which is why, despite thousands of announcements, less than 1% of hydrogen today is low-emissions."] },
    L2: { title: "Intermediate", text: ["The industry splits in 2: industrial gas incumbents (Linde, Air Products, Air Liquide) earning utility-like returns on 15-to-20-year take-or-pay contracts, and a clean-hydrogen edge that runs on subsidies (45V's $3/kg, EU mandates). The defining statistic: only ~9% of the announced 2030 project pipeline has reached final investment decision, and last year's pipeline shrank from 49 to 37 Mtpa. Electricity is 60-70% of green cost, so cheap power at high utilization is the entire game."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: incumbents on contract quality and return on capital, developers on risk-weighted project NPV (pre-FID capacity is worth near 0), pure plays on runway and gross margin, not revenue growth. Plug Power is the case study: $1B+ annual losses with negative gross margin, funded by serial raises and a $1.66B DOE loan. The projects that close (NEOM: $8.4B against a 30-year offtake) invert the failure pattern: contracted demand first, construction second."] },
    L4: { title: "Expert", text: ["Trade the rulebook: 45V guidance, hub funding fights, and EU Hydrogen Bank auction prices move the sector more than any earnings print. Watch the gas price as green's silent ally (every Henry Hub spike narrows the gap), rates as its enemy (duration assets), and Chinese electrolyzer pricing ($300-500/kW) as the structural margin ceiling on Western OEMs. The live debates: green's inevitability vs permanent niche, blue's bridge vs trap, and whether any pure play earns its cost of capital before dilution consumes it."] },
    L5: { title: "Institutional", text: ["Allocator's frame: hydrogen is a barbell, not a sector bet. Core the industrial gas compounders, whose contracted economics win in every scenario and who acquire the edge's assets at distress; rent theme beta through OEMs only when policy momentum is verifiably improving; size pure plays as options with defined loss. Refuse to capitalize announcements: the 9% FID conversion rate is the sector's honest multiple compressor. The transition is real but slower than every pipeline implies: position for the molecule's niches (ammonia, refining, steel), not its dreams."] }
  },

  quiz: [
    { q: "Low-emissions hydrogen's share of global supply (~100 Mt in 2024) is roughly:", choices: ["25%", "10%", "Under 1%", "Half"], answer: 2, explain: "Despite 3 hype cycles, low-emissions output is on track for only ~1 Mt in 2025 (IEA): the gap between narrative and molecules is the industry's defining fact." },
    { q: "The unsubsidized cost gap in 2025 stood at approximately:", choices: ["Green $4-12/kg vs gray $1-3/kg", "Green cheaper than gray", "Both about $2/kg", "Gray $10/kg vs green $5/kg"], answer: 0, explain: "A roughly 3x premium for the same molecule: without subsidies or mandates, the buyer has no reason to pay it." },
    { q: "What share of the announced 2030 project pipeline has reached FID?", choices: ["About half", "~9%", "~75%", "~35%"], answer: 1, explain: "IEA GHR 2025: only ~9% globally (and ~2% in Africa). Pre-FID announcements are marketing; project finance requires contracted offtake." },
    { q: "The projects that actually reach FID share a pattern:", choices: ["Biggest possible scale, export focus", "Modular, co-located with an industrial buyer, contracted offtake", "Pure merchant exposure", "Government ownership"], answer: 1, explain: "The 49-to-37 Mtpa cull killed speculative 500 MW+ export projects; survivors sold their molecules before building (NEOM's 30-year Air Products offtake is the template)." },
    { q: "Electricity's share of green hydrogen's production cost is roughly:", choices: ["10%", "One-third", "60-70%", "Nearly nothing"], answer: 2, explain: "Green hydrogen is a power-price derivative: cheap electrons at high utilization decide the economics before the electrolyzer brand does." },
    { q: "Plug Power's cautionary lesson is that:", choices: ["Hydrogen demand is fake", "Scaling before achieving positive gross margin amplifies losses: $1B+ annual net losses funded by serial raises", "Fuel cells do not work", "Subsidies guarantee profits"], answer: 1, explain: "Revenue growth with negative gross margin means every sale destroys value; the burn was bridged by dilution and a $1.66B DOE loan (Jan 2025)." },
    { q: "The US hydrogen hubs program demonstrated which risk in 2025?", choices: ["Technology failure", "Subsidy duration risk: ~$2.2B of the $7B program was canceled after awards were made", "Labor shortages", "Currency risk"], answer: 1, explain: "ARCHES ($1.2B) and the Pacific Northwest hub ($1B) lost funding in Oct 2025: policy-dependent project math can be repriced by an election." },
    { q: "Chinese electrolyzer makers matter because they:", choices: ["Refuse to export", "Sell at $300-500/kW vs Western $500-1,500/kW with ~60% of manufacturing capacity: the solar playbook replaying", "Only serve gray hydrogen", "License Western designs"], answer: 1, explain: "Commoditized hardware is great for project economics and brutal for Western OEM equities: the value flows to buyers, not builders." }
  ],

  sources: [
    { name: "IEA Global Hydrogen Review 2025", url: "https://www.iea.org/reports/global-hydrogen-review-2025", feeds: "demand, pipeline, FID rates" },
    { name: "BloombergNEF hydrogen cost analyses", url: "https://about.bnef.com/insights/clean-energy/green-hydrogen-to-undercut-gray-sibling-by-end-of-decade/", feeds: "LCOH, electrolyzer costs" },
    { name: "E&E News / Canary Media on DOE hub cancellations (Oct 2025)", url: "https://www.canarymedia.com/articles/hydrogen/hydrogen-hub-cuts-trump-doe-list", feeds: "policy, hub funding" },
    { name: "Plug Power SEC filings", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=PLUG", feeds: "pure-play financials" }
  ]
};
