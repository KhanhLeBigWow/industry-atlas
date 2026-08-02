/* Industry Atlas - NUCLEAR (full module, research-backed)
 * Anchors: 416 reactors / 376 GW operating, 63 under construction (IAEA PRIS, Nov 2025);
 * record ~2,667 TWh generated 2024 (Energy Institute); Microsoft-Constellation 837 MW
 * 20-yr PPA to restart Three Mile Island Unit 1 by 2027, $1B DOE loan (CNBC, Nov 2025);
 * uranium spot topped $100/lb Jan 2026, term ~$90/lb highest since 2008 (Investing News, TradeTech);
 * Kazatomprom cut 2026 output ~8M lb, Cameco guidance (19%) (INN, 2025); China approved 10 more
 * reactors Apr 2025, 4th straight year of 10+ (NucNet); US executive orders target 400 GW by 2050
 * (DOE, May 2025); ~13 hyperscaler nuclear deals totaling ~9.8 GW (smrintel, 2026). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["nuclear"] = {
  meta: {
    id: "nuclear", name: "Nuclear", sector: "energy", status: "full",
    tagline: "The only energy source being restarted from the grave: 30 years of stagnation repriced in 3 years by AI datacenters and energy security.",
    marketSize: { value: 250, unit: "$B", asOf: 2025, note: "implied value of ~2,650 TWh of annual nuclear generation at wholesale power prices; excludes ~$10B uranium market and new-build capex" },
    cagr: { value: 3, range: [2, 5], horizon: "2025-2035" },
    maturity: "mature-reaccelerating", cyclicality: 2, capitalIntensity: 5, regulation: 5, disruption: 3
  },
  newsQuery: '("nuclear power" OR "small modular reactor" OR SMR OR uranium OR "reactor restart" OR NuScale OR Westinghouse OR Kazatomprom)',

  overview: {
    definition: "The nuclear industry mines and enriches uranium, builds and operates fission reactors, and manages their fuel and waste for a century after. It supplies roughly 9% of global electricity from 416 reactors (~376 GW as of late 2025, per IAEA PRIS): the densest, most regulated, most capital-intensive way humans make power.",
    howItWorks: [
      "The economics are the inverse of a gas plant: almost all cost is fixed and up front, marginal cost is close to nothing. A paid-off reactor running at a 90%+ capacity factor produces power for roughly $30/MWh cash cost (fuel is only ~$6 of that), around the clock, for 60 to 80 years with license renewals. That is why the fight is never about running reactors: it is about building them, and about who captures the spread when firm clean power gets scarce.",
      "The fuel cycle is its own oligopoly stack: Kazakhstan mines ~40% of the world's uranium (Kazatomprom alone ~20%), conversion and enrichment run through a handful of plants (Urenco, Orano, Rosatom, Centrus), and fabricated fuel is reactor-specific. Fuel is a small share of operating cost, so demand is price-inelastic: utilities contract years ahead and pay up for security. When Kazatomprom trimmed ~8M lb from 2026 output and Cameco cut guidance 19% on McArthur River setbacks, spot uranium ran from the $60s through $100/lb by January 2026 and term prices hit their highest level since 2008.",
      "New build splits into two worlds. China builds Hualong One units in under 6 years at roughly $3,000/kW and has approved 10+ reactors a year for 4 straight years (~$27B in the April 2025 round alone), with ~30 of the world's 63 units under construction. The West builds rarely and painfully: Vogtle and Flamanville ran years late and multiples over budget, which is why the near-term Western playbook is restarts and uprates of existing plants, not greenfields: capacity that already exists, repriced.",
      "The demand shock came from an unexpected buyer: hyperscalers. Microsoft signed a 20-year PPA for all 837 MW of a restarted Three Mile Island Unit 1 (now the Crane Clean Energy Center, targeting 2027, backed by a $1B DOE loan); Amazon put $700M into X-energy for up to 12 SMRs; Google signed the first corporate SMR PPA with Kairos; Meta lined up as much as 6.6 GW. Roughly 13 tech deals totaling ~9.8 GW have converted nuclear from a subsidy case into a scarcity trade: firm, clean, 24/7 power is exactly what AI datacenters cannot get from the grid queue."
    ],
    history: [
      { era: "1954-1979", title: "Atoms for peace", text: "From the first grid-connected reactors to a US ordering boom: nuclear is the future, until Three Mile Island melts down in 1979 and US new orders stop for a generation." },
      { era: "1979-2000", title: "The long freeze", text: "Chernobyl (1986) hardens opposition; costs balloon under post-accident regulation; France quietly builds 50+ standardized reactors and shows what serial construction can do." },
      { era: "2000-2011", title: "False renaissance", text: "A 2000s revival narrative and a uranium spike to $136/lb collapse into Fukushima (2011): Japan shuts its fleet, Germany votes to exit, and uranium enters a decade-long bear market." },
      { era: "2011-2021", title: "The value trough", text: "Cheap shale gas and subsidized renewables squeeze merchant reactors; plants close early across the US; Westinghouse goes bankrupt on Vogtle overruns while China and Russia keep building." },
      { era: "2022-present", title: "The repricing", text: "The Ukraine energy shock resets energy security math; AI datacenter demand resets power markets; the US targets 400 GW by 2050 by executive order, Palisades becomes the first-ever US restart of a shut plant, and uranium clears $100/lb." }
    ],
    trends: [
      { title: "Restarts and uprates", direction: "up", text: "Palisades (~800 MW, early 2026) and Crane/TMI (837 MW, 2027) created a new asset class: shut reactors as call options. Uprates add capacity at a fraction of new-build cost; every operator is now scouring its fleet." },
      { title: "Hyperscaler PPAs", direction: "up", text: "~9.8 GW of tech-buyer nuclear deals across ~13 agreements: datacenters pay premium prices for firm clean power, effectively re-underwriting the merchant fleet's economics." },
      { title: "SMR pipeline maturing", direction: "shift", text: "NuScale holds the only NRC design certification (77 MWe approved May 2025); X-energy, Kairos, Oklo, and TerraPower race toward first power around 2030. Real orders now exist; real revenue mostly does not yet." },
      { title: "Fuel cycle nationalism", direction: "shift", text: "Russia supplies ~44% of global enrichment; the US banned Russian uranium imports and put $2.7B into domestic enrichment. HALEU for advanced reactors barely exists outside Russia: the fuel bottleneck is the SMR wave's quiet risk." },
      { title: "China scale-up", direction: "up", text: "~30 reactors under construction, 10+ approvals a year, 41 Hualong One units built or building: China passes France in installed capacity this decade and sets the global cost benchmark." }
    ],
    outlook: "The IAEA projects capacity could double by 2050 (561 to 992 GW); the US targets a quadrupling to 400 GW. Neither happens on current Western build rates, which is exactly the investment tension: existing reactors and near-term restarts capture scarcity pricing now, while the SMR cohort must prove it can build serially on budget by the early 2030s. The fleet's economics are the best they have been in 40 years; the build-out remains a show-me story."
  },

  structure: {
    suppliers: [
      { name: "Uranium miners (Cameco, Kazatomprom, Orano)", note: "Concentrated at the country level: Kazakhstan ~40% of mined supply" },
      { name: "Converters & enrichers (Urenco, Orano, Rosatom, Centrus)", note: "A 4-player enrichment oligopoly; Russia ~44% of capacity is the West's problem" },
      { name: "Reactor OEMs (Westinghouse, Framatome, KHNP, Rosatom, CNNC)", note: "Design, fuel fabrication, and major components; export deals are decade-long marriages" },
      { name: "Heavy components & EPC (Doosan, Japan Steel Works, Bechtel)", note: "Ultra-large forgings and megaproject construction: the physical gate on any build wave" }
    ],
    producers: [
      { name: "Constellation", note: "Largest US fleet (~22 GW): the pure-play scarcity trade and Microsoft's counterparty" },
      { name: "EDF", note: "56 French reactors, ~65% of French power: the West's only at-scale serial operator" },
      { name: "CNNC & CGN", note: "China's twin builders: ~58 GW operating and ~30 units under construction between them" },
      { name: "Rosatom", note: "Russia's state champion: builds most of the world's export reactors and finances them too" }
    ],
    distributors: [
      { name: "Grids & wholesale markets", note: "Most output clears through regulated rates or wholesale markets" },
      { name: "Direct corporate PPAs", note: "The new channel: hyperscalers contract plant output directly, 20 years at a time" }
    ],
    customers: [
      { name: "Utilities & ratepayers", note: "The traditional buyer: baseload under regulated or contracted terms" },
      { name: "Hyperscalers & datacenters", note: "The marginal buyer setting the price: Microsoft, Amazon, Google, Meta (~9.8 GW of deals)" },
      { name: "Industry & governments", note: "Process heat, hydrogen, and naval propulsion: the long-tail demand stack" }
    ],
    regulators: [
      { name: "NRC (US) & national regulators", note: "License everything; the 2025 executive orders cap review timelines at 18 months" },
      { name: "IAEA", note: "Global safety standards and safeguards; its PRIS database is the industry's scoreboard" },
      { name: "Export control & nonproliferation regimes", note: "Enrichment technology is weapons-adjacent: geopolitics rides every fuel contract" }
    ],
    capital: [
      { name: "Government credit (DOE LPO, ECAs)", note: "$1B for Crane, $1.52B for Palisades: sovereign balance sheets de-risk what markets will not" },
      { name: "Regulated rate base & contracted cash flows", note: "The traditional funding: ratepayers or 20-year PPAs carry the capex" },
      { name: "Equity & venture for SMRs", note: "Amazon into X-energy ($700M), public listings (NuScale, Oklo): venture math applied to heavy industry" }
    ]
  },

  valueChain: {
    intro: "From Kazakh ore to a 60-year power annuity to a 10,000-year waste obligation. Value concentrates in the middle: an operating, depreciated reactor is one of the best assets in global energy, while both ends (mining cycles, new-build megaprojects) destroy capital with regularity.",
    stages: [
      { id: "fuel", name: "Uranium & fuel cycle", what: "Mining, conversion, enrichment, fabrication", players: "Cameco, Kazatomprom, Urenco, Orano, Centrus", valueCapture: 4,
        economics: { grossMargin: [30, 55], capitalIntensity: 4, concentration: 5 },
        linksTo: ["mining", "chemicals"],
        deeper: "A price-inelastic customer meets concentrated supply: fuel is <10% of a reactor's cost, so utilities pay whatever security requires. The 2025-26 squeeze (Kazatomprom's ~8M lb cut, Cameco's 19% guidance cut, spot through $100/lb) shows how little slack exists; enrichment is the tighter chokepoint still, with Russia at ~44% of capacity." },
      { id: "equipment", name: "Reactor design & heavy components", what: "NSSS design, forgings, turbines, fuel assemblies", players: "Westinghouse, Framatome, Doosan, Japan Steel Works, BWXT", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 4, concentration: 5 },
        linksTo: ["manufacturing", "steel", "defense"],
        deeper: "Ultra-large forgings come from a handful of presses on Earth; naval nuclear work (BWXT) overlaps defense budgets. The OEM prize is the razor-and-blade fuel fabrication annuity: whoever designed the reactor sells it fuel for 60 years, which is why Westinghouse's VVER-replacement fuel for Eastern Europe is a geopolitical product." },
      { id: "newbuild", name: "New build & EPC", what: "Licensing, construction, commissioning of new plants", players: "Bechtel, KHNP, Rosatom, CNNC, EDF", valueCapture: 2,
        economics: { grossMargin: [0, 10], capitalIntensity: 5, concentration: 4 },
        linksTo: ["construction", "government"],
        deeper: "Where Western capital goes to die: Vogtle finished years late at roughly double its budget and bankrupted Westinghouse on the way. China's 68.7-month Hualong One builds and Korea's on-time Barakah project prove the problem is serial execution, not physics: first-of-a-kind is ruinous, the 10th unit is a business." },
      { id: "operations", name: "Fleet operations & uprates", what: "Running reactors at 90%+ capacity factors; restarts, uprates, license renewals", players: "Constellation, EDF, CGN, Duke, Vistra", valueCapture: 5,
        economics: { grossMargin: [40, 60], capitalIntensity: 3, concentration: 3 },
        linksTo: ["utilities", "carbon-markets"],
        deeper: "The crown jewels: a depreciated reactor produces firm clean power at ~$30/MWh cash cost and now sells it to hyperscalers at a premium for 20 years. Restarts are the purest expression: Palisades and Crane resurrect existing steel for a fraction of new-build cost, which is why shut plants suddenly trade like optionality instead of liabilities." },
      { id: "smr", name: "SMRs & advanced reactors", what: "Factory-built small reactors, Gen IV designs, HALEU fuel", players: "NuScale, X-energy, Kairos, Oklo, TerraPower", valueCapture: 2,
        economics: { grossMargin: [0, 10], capitalIntensity: 5, concentration: 2 },
        linksTo: ["ai", "data-infrastructure", "venture-capital"],
        deeper: "The venture layer: real customers (Amazon's 12-unit X-energy program, Google-Kairos, TVA-NuScale) but essentially no revenue until ~2030. The bet is that factory production breaks the megaproject curse; the risks are HALEU fuel supply, first-of-a-kind costs, and whether hyperscaler patience survives the first schedule slip." },
      { id: "backend", name: "Waste, decommissioning & back end", what: "Spent fuel storage, decommissioning, reprocessing", players: "Holtec, Orano, EnergySolutions, national agencies", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 3, concentration: 4 },
        linksTo: ["waste-management", "government"],
        deeper: "A guaranteed, government-adjacent annuity: decommissioning trust funds (built up over decades of operation) fund the work, dry-cask storage is a licensed oligopoly, and Finland's Onkalo is the first real geological repository. Holtec's pivot from burying Palisades to restarting it captures the era in one company." }
    ]
  },

  financials: {
    businessModel: [
      "Read the industry in 3 P&Ls. Operators: revenue = output (capacity factor x MW) x realized price; costs are overwhelmingly fixed, so a paid-off fleet is a leveraged bet on power prices, and a 20-year hyperscaler PPA converts that leverage into an annuity: Constellation's repricing from utility multiple to scarcity multiple is the era's defining trade. Fuel-cycle names: classic commodity producers, but with price-inelastic customers and decade-long contract books: term price and contracting volume matter more than spot. SMR developers: pre-revenue venture burn with milestone catalysts, valued on optionality, not earnings.",
      "New build is the capital destroyer to underwrite carefully: overnight cost per kW ranges from roughly $3,000 in China to $10,000+ for Western first-of-a-kind units, and interest during a decade of construction can rival the plant itself, which is why nuclear economics live and die on the discount rate and why government credit (DOE loans, ECAs, regulated rate base) anchors nearly every project. The 2025-26 restart wave works precisely because it skips construction: existing steel, new license, immediate scarcity pricing."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 80, capitalIntensity: 95, pricingPower: 55, cyclicality: 30, operatingLeverage: 75 },
    lines: [
      { label: "Generation & capacity factor", note: "The volume engine: US fleet runs >90%, the world's best" },
      { label: "Realized price & PPA mix", note: "Merchant vs contracted vs hyperscaler premium: the repricing story lives here" },
      { label: "Fuel & operating cost", note: "~$30/MWh cash cost for US fleet; fuel only ~$6 of it" },
      { label: "New build & restart capex", note: "Watch cost per kW and schedule vs plan: overruns compound at megaproject scale" },
      { label: "Decommissioning & waste liabilities", note: "Trust fund adequacy: a 10,000-year obligation discounted to today" }
    ],
    unitEconomics: {
      unit: "per MWh, US operating reactor (illustrative)",
      items: [
        { label: "Cash generating cost", value: "~$30-32", note: "NEI fleet average; the lowest-cost firm clean power in existence" },
        { label: "Fuel share of cost", value: "~$6", note: "why uranium at $100/lb barely dents operator margins" },
        { label: "Merchant wholesale price", value: "~$40-60", note: "the old world: thin margins, early retirements" },
        { label: "Hyperscaler PPA price", value: "premium to wholesale (est. $100+)", note: "the new world: Crane-class deals reprice the whole fleet" }
      ]
    }
  },

  kpiRefs: ["energy-capacity-factor", "mining-aisc"],
  kpiLocal: [
    {
      id: "nuclear-overnight-cost", name: "Overnight Cost per kW", industries: ["nuclear"],
      definition: "Capital cost of building a plant excluding financing, per kilowatt of capacity: the industry's make-or-break number.",
      formula: "Total construction cost (ex-interest) / net capacity in kW",
      interpretation: "China's Hualong One lands near $3,000/kW in under 6 years; Western first-of-a-kind units (Vogtle, Flamanville) blew past $10,000/kW. The gap IS the investment debate.",
      healthy: "<$6,000/kW with schedule held", warning: "Serial re-baselining; interest during construction compounding" },
    {
      id: "nuclear-term-price", name: "Uranium Term Price & Contracting", industries: ["nuclear"],
      definition: "Long-term contracted U3O8 price and annual volumes contracted: the fuel cycle's real signal (spot is thin and noisy).",
      formula: "Reported term price ($/lb U3O8) + annual contracted volumes vs reactor requirements",
      interpretation: "Term hit ~$90/lb by early 2026, highest since 2008, with spot above $100: utilities are re-contracting into a structural deficit after a decade of drawing inventories.",
      healthy: "Term rising with volumes: producers locking real margin", warning: "Spot spiking above term on thin volume: squeeze, not demand" }
  ],

  health: {
    intro: "Operator health is fleet performance and contract quality; developer health is schedule credibility and funding runway; the industry's health is political permission, renewed or revoked in single events.",
    pillars: [
      { name: "Fleet performance", weight: 25, metrics: "Capacity factor, forced outage rate, refueling duration", healthy: ">90% capacity factor (US fleet standard)", warning: "Extended outages; the French 2022 corrosion episode template" },
      { name: "Contract & price quality", weight: 20, metrics: "Contracted share, PPA tenor, counterparty credit", healthy: "Long-tenor PPAs with investment-grade buyers", warning: "Merchant exposure at cycle prices" },
      { name: "Build & restart execution", weight: 20, metrics: "Cost per kW vs plan, schedule adherence, milestone hit rate", healthy: "Palisades/Crane-style milestones landing", warning: "Vogtle-style re-baselining" },
      { name: "Fuel security", weight: 15, metrics: "Contract coverage years, enrichment sourcing, HALEU access", healthy: "5+ years covered, non-Russian routes secured", warning: "Spot dependence; single-source enrichment" },
      { name: "Balance sheet & funding", weight: 20, metrics: "Leverage vs contracted cash flow, government credit access, decommissioning fund adequacy", healthy: "Investment grade; DOE/ECA support secured", warning: "Venture burn without milestone funding" }
    ],
    scoringNote: "One safety event anywhere resets the whole industry's score: Fukushima shut reactors in Germany that had operated flawlessly for decades. Political permission is the asset; everything else is engineering."
  },

  valuation: {
    intro: "Three regimes in one sector: operators price like scarce infrastructure, fuel names like cyclical miners with annuity contracts, SMR developers like venture options wearing tickers.",
    methods: [
      { name: "EV / EBITDA (operators)", use: "Fleet owners with contracted cash flows (Constellation class)", avoid: "Applying utility multiples to merchant fleets mid-repricing", strengths: "Standard, comparable across power", weaknesses: "Misses the PPA optionality that drives the story", range: { low: 9, high: 16, asOf: 2025, note: "scarcity premium at the top; regulated fleets at the bottom" } },
      { name: "$/kW replacement value", use: "Sanity check: existing reactors vs $6,000-10,000/kW new-build cost", avoid: "Plants without license runway or transmission access", strengths: "Captures the restart-era logic: existing steel is cheap", weaknesses: "A kW is only worth what its power sells for", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; fleets still trade below Western replacement cost" } },
      { name: "NAV / commodity curve (fuel cycle)", use: "Miners and enrichers on contracted books plus price decks", avoid: "Spot-price extrapolation: term contracts set realized prices", strengths: "Matches how producers actually sell", weaknesses: "Decade-long mine timelines make the deck speculative", range: { low: 0, high: 0, asOf: 2025, note: "NAV multiples expand with term price; watch contracting volume" } },
      { name: "Milestone option value (SMRs)", use: "Pre-revenue developers: price the catalysts, not the DCF", avoid: "Any earnings multiple: there are no earnings until ~2030", strengths: "Honest about what is knowable", weaknesses: "Binary outcomes; dilution between milestones", range: { low: 0, high: 0, asOf: 2025, note: "position size is the valuation tool" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a nuclear operator quickly: normalized EBITDA times a scarcity-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.5, max: 12, step: 0.5, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 7, max: 20, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 1, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays nuclear as 3 separate trades sharing a narrative: long the incumbent operators (scarcity of firm clean power, repriced by hyperscaler PPAs), long the fuel cycle on a structural deficit with price-inelastic buyers, and venture-size the SMR cohort on milestones. The mistake is treating them as one trade: the operator thesis works even if SMRs disappoint, and uranium works even if power prices soften.",
    debates: [
      { topic: "Is hyperscaler demand durable or a capex-cycle artifact?", bull: "AI power demand is measured in gigawatts and the grid queue is 5+ years: 20-year PPAs signed by investment-grade tech buyers (~9.8 GW across 13 deals) are the most bankable demand signal power markets have ever produced.", bear: "Datacenter forecasts have a long history of 10x overshoot, AI efficiency gains compound, and a capex pause converts premium PPAs into stranded expectations: the marginal buyer setting today's price can vanish faster than a reactor can be restarted." },
      { topic: "Can the West build new reactors on budget?", bull: "Korea's Barakah landed on time, China ships Hualong One in 68.7 months, and the fixes are known: serial builds of one design, experienced supply chains, and the 2025 US licensing reforms (18-month NRC caps) remove the regulatory tax.", bear: "Vogtle doubled its budget, Flamanville ran 12 years late, and the Western supply chain and craft labor that Korea and China maintained must be rebuilt from scratch: the first 10 SMRs will be first-of-a-kind economics wearing a factory narrative." },
      { topic: "Uranium: supercycle or squeeze?", bull: "A structural deficit into the 2030s: a decade of underinvestment, inventory drawdown complete, Kazatomprom and Cameco both cutting guidance while 63 reactors are under construction and restarts add unplanned demand: term at $90/lb is the market re-rating, not spot noise.", bear: "Above $100/lb, idled capacity (McArthur expansions, US ISR, new African supply) re-enters, secondary supply and enrichment underfeeding cushion more than bulls admit, and fuel demand is so price-inelastic that the cure for high prices is simply more mining, on mining's usual 5-year lag." }
    ],
    cycle: {
      where: "Early innings of the first genuine upcycle since the 1970s: existing-fleet economics already repriced, uranium term at 2008 highs, but the build-out (the part that doubles the industry) is still mostly announcements. The gap between contracted intentions and poured concrete is where this cycle will be won or lost.",
      drivers: "AI/datacenter load growth, energy security policy (post-2022), decarbonization mandates, government credit support, and the uranium contracting cycle.",
      leads: [
        "Uranium spot and term prices (Cameco publishes monthly, free)",
        "NRC licensing docket and restart milestones (nrc.gov, free)",
        "EIA monthly nuclear generation and capacity data (free)",
        "IAEA PRIS reactor additions and construction starts (free)",
        "Hyperscaler PPA and SMR order announcements (company releases, free)"
      ]
    },
    exposure: [
      { vehicle: "Fleet operators (Constellation, Vistra class)", note: "The core scarcity trade: existing reactors meeting new demand" },
      { vehicle: "Uranium producers (Cameco, Kazatomprom class)", note: "The fuel deficit with contract-book visibility" },
      { vehicle: "Physical uranium (Sprott Physical Uranium Trust)", note: "The commodity without mining execution risk" },
      { vehicle: "SMR developers (NuScale, Oklo, X-energy class)", note: "Venture-sized optionality: milestones, not multiples" },
      { vehicle: "Components & services (BWXT, Holtec class)", note: "Picks and shovels: forgings, fuel, casks, restarts, defense overlap" }
    ],
    catalysts: [
      { when: "Early 2026", what: "Palisades restart: the first-ever US return of a shut reactor, the template trade's proof point" },
      { when: "2027", what: "Crane Clean Energy Center (TMI Unit 1) online for Microsoft: the marquee PPA delivers or slips" },
      { when: "Quarterly", what: "Uranium term-price prints and utility contracting volumes; Cameco/Kazatomprom guidance" },
      { when: "Ongoing 2026-2030", what: "NRC decisions under 18-month caps; first SMR concrete (TVA, X-energy Seadrift); China's annual ~10-reactor approval rounds" }
    ],
    data: [
      { series: "IAEA PRIS reactor database", source: "pris.iaea.org (free)", why: "The global scoreboard: operating, building, retired" },
      { series: "EIA nuclear generation & outage data", source: "eia.gov (free)", why: "US fleet output and capacity factors, monthly" },
      { series: "Uranium spot & long-term price", source: "cameco.com investor page (free, monthly)", why: "The fuel cycle's tape without a UxC subscription" },
      { series: "NRC reactor licensing & event reports", source: "nrc.gov (free)", why: "Restart milestones and safety signals, primary source" },
      { series: "World Nuclear Association country profiles", source: "world-nuclear.org (free)", why: "Build pipelines and policy by country" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Contracted fleets barely notice; merchant power softens; SMR funding windows narrow first. Uranium demand is reactor-driven, not GDP-driven: the deficit math survives." },
      { regime: "Rates rising", behavior: "The sector's real enemy: nuclear is the most capex-heavy, longest-duration asset in energy. New-build and SMR economics deteriorate first; operating fleets with contracted revenue hold." },
      { regime: "Energy crisis / gas spike", behavior: "Nuclear's best regime: merchant margins explode, political permission expands (the 2022 template), restarts accelerate." },
      { regime: "Safety event anywhere", behavior: "Sell first, analyze later: Fukushima repriced German, Japanese, and US assets within weeks. The industry's beta to a single event is unlike anything else in energy." }
    ]
  },

  players: [
    { name: "Constellation", role: "Largest US operator", country: "US", real: true, note: "~22 GW fleet; Microsoft's 837 MW Crane PPA made it the era's defining equity" },
    { name: "EDF", role: "Western fleet champion", country: "FR", real: true, note: "56 reactors, ~65% of French power; renationalized to fund the next build wave" },
    { name: "CNNC / CGN", role: "China's builders", country: "CN", real: true, note: "~30 units under construction; Hualong One in 68.7 months sets the world cost benchmark" },
    { name: "Rosatom", role: "Export monopolist", country: "RU", real: true, note: "Builds and finances most export reactors; ~44% of global enrichment: the geopolitical chokepoint" },
    { name: "Cameco", role: "Western uranium major", country: "CA", real: true, note: "McArthur River/Cigar Lake; co-owns Westinghouse; cut 2025 guidance 19% and tightened the market" },
    { name: "Kazatomprom", role: "Largest producer", country: "KZ", real: true, note: "~20% of world mined supply; its 2026 output cut (~8M lb) helped push spot past $100/lb" },
    { name: "Westinghouse", role: "Reactor OEM & fuel", country: "US", real: true, note: "AP1000 design and the VVER-replacement fuel franchise; owned by Brookfield and Cameco" },
    { name: "NuScale / X-energy / Oklo", role: "SMR cohort", country: "US", real: true, note: "NuScale holds the only NRC design certification; X-energy carries Amazon's $700M and a 12-unit program" }
  ],

  geography: [
    { country: "US", role: "Largest fleet", note: "94 reactors, ~97 GW; executive orders target 400 GW by 2050; restarts lead the near term" },
    { country: "FR", role: "Deepest penetration", note: "~63 GW supplying ~65% of national power: the serial-build proof case, now aging" },
    { country: "CN", role: "The build engine", note: "~55 GW operating, ~30 under construction, 10+ approvals yearly: passes France this decade" },
    { country: "RU", role: "Fuel & export power", note: "Rosatom dominates export builds and ~44% of enrichment: sanctions-resistant leverage" },
    { country: "KZ", role: "Uranium heartland", note: "~40% of global mined supply: the Saudi Arabia of uranium, with China buying ever more of it" },
    { country: "KR", role: "The on-time builder", note: "26 GW at home, Barakah delivered abroad; wins Western bids on execution credibility" }
  ],

  cycles: [
    { year: 1979, title: "Three Mile Island", kind: "bust", text: "A partial meltdown injures no one but kills the US order book for a generation; regulation ratchets permanently. Lesson: nuclear's cost of capital is set by its worst day, not its average one." },
    { year: 1986, title: "Chernobyl", kind: "bust", text: "The worst-case accident happens, and it happens in a design and political system the West did not share: the distinction saves the industry elsewhere but not its reputation. Lesson: public trust is the industry's scarcest fuel." },
    { year: 2007, title: "The uranium spike", kind: "boom", text: "Spot touches $136/lb on renaissance hype and a flooded mine (Cigar Lake); the renaissance delivers almost no Western reactors. Lesson: uranium prices can rally on a build-out that never arrives." },
    { year: 2011, title: "Fukushima", kind: "bust", text: "A tsunami defeats the backup power; Japan idles its fleet, Germany legislates an exit, and uranium enters a 10-year bear market. Lesson: one plant's failure reprices every reactor on Earth." },
    { year: 2024, title: "The AI repricing", kind: "shift", text: "Microsoft signs 20 years of Three Mile Island, executive orders target a quadrupling, Palisades comes back from the dead, and uranium clears $100/lb. Lesson: demand shocks can come from outside the industry entirely: nuclear did not change, its buyers did." }
  ],

  risks: [
    { name: "A major safety event anywhere", severity: 5, likelihood: 1, transmission: "Accident in any country -> global political reversal -> shutdowns, license freezes, cost-of-capital spike across the entire sector (the Fukushima template)." },
    { name: "Western new-build cost failure", severity: 4, likelihood: 4, transmission: "First SMRs and AP1000 restarts overrun -> hyperscalers and governments retreat to gas plus renewables -> the build-out thesis collapses back to an existing-fleet story." },
    { name: "Hyperscaler demand fade", severity: 3, likelihood: 3, transmission: "AI capex pause -> premium PPA pipeline stalls -> operator scarcity multiples compress toward utility multiples." },
    { name: "Fuel cycle chokepoints", severity: 4, likelihood: 3, transmission: "Russian enrichment (~44% of capacity) restricted or weaponized -> Western fuel costs spike and HALEU-dependent SMR schedules slip years." },
    { name: "Rate and financing shock", severity: 3, likelihood: 3, transmission: "Sustained high rates -> interest during construction compounds -> projects cancel at the financing stage, the 1980s pattern repeating." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Nuclear plants split uranium atoms to boil water and spin turbines: about 9% of the world's electricity from 416 reactors. They cost enormous sums to build but almost nothing to run, so an old reactor is a bargain and a new one is a gamble. After decades of stagnation, tech companies hungry for round-the-clock clean power (Microsoft even paid to restart Three Mile Island) have made nuclear the most talked-about energy source of the decade."] },
    L2: { title: "Intermediate", text: ["The economics invert gas: ~$30/MWh cash cost once built, with fuel only ~$6 of it, so everything depends on capacity factor (US fleet: >90%) and the price power sells for. The industry splits into 3 businesses: operating fleets (annuities, newly repriced by ~9.8 GW of hyperscaler PPAs), the fuel cycle (uranium topped $100/lb in early 2026 on supply cuts), and new build (China delivers in under 6 years; the West's last attempts doubled their budgets). Restarts like Palisades and Crane/TMI work because they skip construction entirely."] },
    L3: { title: "Advanced", text: ["Analyze by species: operators on contracted share, PPA tenor, and merchant exposure; fuel names on term price and contracting volumes (not spot, which is thin); SMR developers on milestones and funding runway. The binding constraints are Western construction capability, enrichment capacity (Russia ~44%), and HALEU for advanced designs. Watch the gap between announced gigawatts (~13 tech deals, executive-order targets of 400 GW by 2050) and concrete actually poured: 63 reactors under construction globally, ~30 of them Chinese."] },
    L4: { title: "Expert", text: ["Trade the milestone tape: Palisades (early 2026), Crane (2027), first SMR concrete, NRC decisions under the 18-month caps, and China's spring approval rounds. Live debates: hyperscaler demand durability vs AI capex cycle, Western serial-build credibility (Barakah and Hualong One prove it is possible, Vogtle proves it is not automatic), and uranium supercycle vs squeeze above $100/lb. The fuel cycle's geopolitics (Kazakh supply, Russian enrichment, US $2.7B enrichment push) is a parallel trade in itself."] },
    L5: { title: "Institutional", text: ["Allocator's frame: nuclear is 3 uncorrelated theses sharing a headline: infrastructure-grade operator cash flows (core, PPA-backed), a structural commodity deficit with price-inelastic buyers (cyclical sleeve), and venture-profile SMR optionality (size accordingly). The sector's unique feature is single-event beta: one accident anywhere reprices everything, everywhere, which argues for owning the scarcity economics while stress-testing every position against the Fukushima scenario. The decade's question is whether the West relearns serial construction; the existing fleet pays you while you wait for the answer."] }
  },

  quiz: [
    { q: "Roughly how much of an operating US reactor's ~$30/MWh cash cost is fuel?", choices: ["Half", "About $6: which is why $100/lb uranium barely dents operator margins", "Nearly all of it", "Zero"], answer: 1, explain: "Nuclear is the inverse of gas: fixed costs dominate, fuel is a rounding error, so operators are levered to power prices, not uranium." },
    { q: "The Microsoft-Constellation deal restarts:", choices: ["Chernobyl", "Three Mile Island Unit 1 (Crane Clean Energy Center): 837 MW, a 20-year PPA, targeting 2027", "A coal plant", "Fukushima"], answer: 1, explain: "The marquee deal of the AI-power era: one buyer, one reactor, 20 years, plus a $1B DOE loan behind it." },
    { q: "China's role in the global build pipeline is roughly:", choices: ["A minor participant", "~30 of the world's 63 reactors under construction, with 10+ approvals a year", "Exiting nuclear", "Only buying Russian designs"], answer: 1, explain: "Hualong One units in 68.7 months at benchmark costs: China is the industry's execution proof case and its cost yardstick." },
    { q: "Uranium prices by early 2026 had:", choices: ["Collapsed below $20/lb", "Topped $100/lb spot with term prices at their highest since 2008", "Never moved", "Been fixed by regulators"], answer: 1, explain: "Kazatomprom's ~8M lb cut and Cameco's 19% guidance cut met restart-era demand: a structural deficit repriced the fuel cycle." },
    { q: "Why do restarts like Palisades matter so much?", choices: ["They are cheaper to insure", "They deliver firm clean capacity while skipping the megaproject construction risk that ruins Western new builds", "They avoid regulation", "They use no fuel"], answer: 1, explain: "Existing steel, new license: Palisades is the first-ever US restart of a shut plant, and the template every operator is now studying." },
    { q: "The West's quiet fuel-cycle vulnerability is:", choices: ["Too much uranium", "Enrichment: Russia holds ~44% of global capacity, and HALEU for advanced reactors barely exists outside it", "Cheap conversion", "Excess fabrication"], answer: 1, explain: "Hence the US ban on Russian uranium and $2.7B for domestic enrichment: fuel security is now industrial policy." },
    { q: "SMR developers today are best valued on:", choices: ["EV/EBITDA", "Milestones and funding runway: essentially no revenue arrives before ~2030", "Dividend yield", "Book value"], answer: 1, explain: "Real customers (Amazon's 12-unit X-energy program, Google-Kairos) but venture-profile economics: position size is the valuation tool." },
    { q: "The industry's defining risk feature is:", choices: ["Currency exposure", "Single-event beta: one accident anywhere reprices every reactor on Earth, as Fukushima proved", "Seasonal demand", "Patent cliffs"], answer: 1, explain: "Fukushima shut flawless German reactors within weeks: political permission is the industry's real asset, and it is globally correlated." }
  ],

  sources: [
    { name: "IAEA PRIS reactor database (416 reactors, 376 GW, Nov 2025)", url: "https://pris.iaea.org", feeds: "fleet, construction pipeline" },
    { name: "Constellation Crane Clean Energy Center newsroom / CNBC DOE loan coverage", url: "https://www.constellationenergy.com/about/locations/crane-clean-energy-center.html", feeds: "restarts, PPAs" },
    { name: "Cameco uranium price data & Investing News uranium reviews", url: "https://www.cameco.com/invest/markets/uranium-price", feeds: "fuel cycle prices" },
    { name: "DOE nuclear executive order takeaways / World Nuclear News", url: "https://www.energy.gov/ne/articles/9-key-takeaways-president-trumps-executive-orders-nuclear-energy", feeds: "policy" }
  ]
};
