/* Industry Atlas - WIND (full module, research-backed)
 * Anchors: record 178 GW mechanically installed globally in 2025 (+40% YoY), ~165 GW grid-connected,
 * top 5 turbine OEMs all Chinese for the first time, Goldwind 29.7 GW (GWEC Global Wind Report 2026, May 2026);
 * Orsted cancels Ocean Wind 1/2 with DKK 28.4B impairments, a ~$4B writedown plus up to $1.55B provisions
 * (Orsted announcement, Oct-Nov 2023); bp/Equinor cancel Empire Wind 2 PPA (Jan 2024); NYSERDA voids 3 awards (Apr 2024);
 * Siemens Gamesa: EUR 1.6B onshore quality charges (2023), FY2023 loss ~EUR 4.3B, break-even targeted FY2026,
 * vs Vestas 5.7% EBIT margin in 2025, best since 2019 (company reports, Feb 2026);
 * Chinese OEM overseas orders 26.1 GW in 2024 (+70% YoY), export pricing 30-40% below Western
 * (Wood Mackenzie / Rystad, 2025); OBBBA: PTC begin-construction deadline July 4, 2026, else
 * placed-in-service by Dec 31, 2027; 45X wind component credits end after 2027 (Treasury/IRS, 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["wind"] = {
  meta: {
    id: "wind", name: "Wind", sector: "energy", status: "full",
    tagline: "Record volumes, ruined margins: the industry installs more than ever while its Western manufacturers fight to earn anything on it.",
    marketSize: { value: 150, unit: "$B", asOf: 2025, note: "order-of-magnitude annual global wind capex implied by ~178 GW installed; turbine equipment and services roughly half" },
    cagr: { value: 8, range: [6, 10], horizon: "2025-2030" },
    maturity: "growth-cyclical", cyclicality: 4, capitalIntensity: 5, regulation: 4, disruption: 3
  },
  newsQuery: '("offshore wind" OR "wind turbine" OR Vestas OR "Siemens Gamesa" OR Orsted OR Goldwind OR "wind farm")',

  overview: {
    definition: "The wind industry converts moving air into electricity at utility scale: turbine manufacturers (OEMs), the component chain beneath them, project developers who permit and finance wind farms, installers who erect them on land and sea, and operators who run them for 25 to 30 years. It is simultaneously a manufacturing business, a construction business, and an infrastructure asset class, and each obeys different economics.",
    howItWorks: [
      "The physical chain runs from steel, copper, rare-earth magnets, and 100-meter composite blades through nacelle assembly to project sites. A modern onshore turbine is 4 to 7 MW; offshore machines now exceed 15 MW with rotors wider than the wingspan of any aircraft ever built. Bigger rotors capture more energy per tower, so the industry has been locked in an arms race of turbine scaling: great for levelized cost of energy (LCOE), brutal for manufacturers, because each new platform resets the learning curve and the warranty risk before the last one paid back.",
      "The money splits into 3 different businesses. OEMs sell turbines at thin (often negative) margins and earn the reliable profit on multi-decade service contracts: Vestas class service EBIT margins run far above turbine margins, a razor-and-blade structure that echoes jet engines. Developers create value by advancing projects from land rights to permits to a bankable power purchase agreement (PPA), then either build-and-hold or flip at financial close. Owners earn regulated-utility-like returns from contracted electricity sales, levered 70% to 80% with project debt and, in the US, monetized through tax credits.",
      "Policy is not a subsidy on top of the market: it IS the demand curve. The US production tax credit (PTC, roughly $27 to $30/MWh inflation-indexed) has driven every American boom and bust since 1992, and the 2025 OBBBA law turned it into a cliff: projects must begin construction by July 4, 2026 or be placed in service by December 31, 2027 to qualify, and the 5% spend safe harbor was eliminated for wind. Europe runs auctions and contracts-for-difference; China runs central planning at a scale that dwarfs both: more than 130 GW mechanically installed there in 2025 alone.",
      "The industry's core tension is that record demand coexists with broken manufacturing economics. A record 178 GW was mechanically installed globally in 2025 (+40% YoY, per GWEC), yet the top 5 OEMs by volume were all Chinese for the first time (Goldwind 29.7 GW), Siemens Gamesa was still digging out of EUR billions in quality losses, and Chinese export pricing 30-40% below Western levels hangs over every non-Chinese order book. Offshore wind added its own crisis: inflation and rates broke fixed-price contracts signed in the cheap-money era, forcing Orsted's ~$4B Ocean Wind writedown and a wave of US project cancellations and repricings in 2023-2025."
    ],
    history: [
      { era: "1980-1990", title: "The California wind rush", text: "Tax credits pull thousands of small Danish and US turbines into Altamont and Tehachapi passes; the 1985 credit expiry busts the boom and hands the surviving technology lead to Denmark." },
      { era: "1992-2008", title: "PTC whipsaw era", text: "The US production tax credit (1992) creates a boom-bust metronome: every expiry year, installs collapse; Vestas, Gamesa, and GE industrialize the megawatt-class turbine." },
      { era: "2009-2016", title: "China scales, costs plunge", text: "Chinese five-year plans build the world's largest market and OEM base; turbine prices fall by half; wind becomes cost-competitive with fossil generation in good sites." },
      { era: "2017-2020", title: "Auctions and zero subsidy", text: "Feed-in tariffs give way to competitive auctions; German and Dutch offshore bids hit zero subsidy; the value migrates from producers to consumers and the OEM margin squeeze begins." },
      { era: "2021-present", title: "Inflation breaks the model", text: "Steel, logistics, and rate inflation land on fixed-price backlogs: Siemens Gamesa takes EUR 1.6B in quality charges, Orsted writes off ~$4B on Ocean Wind, US offshore reprices, while China installs records and its OEMs go global." }
    ],
    trends: [
      { title: "Chinese OEM globalization", direction: "up", text: "Overseas orders hit 26.1 GW in 2024 (+70% YoY) and kept surging in 2025; with export prices 30-40% below Western OEMs, China is exporting its domestic price war to every open market." },
      { title: "Western OEM discipline", direction: "shift", text: "Vestas, GE Vernova, and Siemens Gamesa stopped chasing volume: fewer variants, price-indexed contracts, value-over-volume order intake. Vestas's 5.7% EBIT margin in 2025 (best since 2019) is the proof the strategy can work." },
      { title: "Offshore repricing", direction: "shift", text: "The 2023-2025 cancellation wave (Ocean Wind, Empire Wind 2, voided NYSERDA awards) reset offshore PPA prices sharply higher; projects now clear at rates that actually cover capital costs, where politics allows any to clear at all." },
      { title: "US policy cliff", direction: "down", text: "OBBBA's July 4, 2026 begin-construction deadline and the end of 45X component credits after 2027 compress years of US demand into a safe-harbor sprint, then a hole." },
      { title: "Turbine upsizing fatigue", direction: "shift", text: "After quality failures on rushed platforms (Siemens Gamesa's 4.X/5.X), OEMs are freezing designs and industrializing workhorse models: reliability is the new rating." }
    ],
    outlook: "Global volume keeps growing: GWEC sees total capacity crossing 2 TW by 2030 from roughly 1.2 TW today, pulled by China, India, and power-hungry grids everywhere. The investable question is who earns it. Western OEMs live or die on pricing discipline and service annuities while tariffs and localization rules decide how far Chinese machines penetrate; offshore is now a repriced, slower, more honest business; and US onshore faces a tax-credit sprint into 2026-2027 followed by the first real test of post-subsidy economics, with data-center demand as the potential offset."
  },

  structure: {
    suppliers: [
      { name: "Blades & composites (TPI, LM Wind Power)", note: "100m+ structures in fiberglass and carbon; quality escapes here become fleet-wide charges" },
      { name: "Gearboxes, bearings, castings (ZF, SKF, and a China-heavy chain)", note: "Precision heavy engineering; the offshore bottleneck" },
      { name: "Generators & power electronics", note: "Permanent-magnet designs tie the industry to rare-earth supply" },
      { name: "Steel, copper & rare earths", note: "A turbine is mostly commodity inputs; input inflation broke the 2021-2023 backlogs" },
      { name: "Installation vessels (Cadeler class)", note: "A handful of jack-up ships gate every offshore schedule" }
    ],
    producers: [
      { name: "Vestas", note: "Largest Western OEM; 2025 EBIT margin 5.7%, the recovery template" },
      { name: "Siemens Gamesa (Siemens Energy)", note: "EUR billions of quality losses; break-even targeted FY2026" },
      { name: "GE Vernova", note: "US onshore leader running the workhorse-product playbook" },
      { name: "Goldwind, Envision, Mingyang, Windey, SANY", note: "The Chinese top tier: all 5 out-installed every Western OEM in 2025" }
    ],
    distributors: [
      { name: "Developers (Orsted, RWE, EDPR, Invenergy)", note: "Turn land and permits into bankable projects; the industry's origination layer" }
    ],
    customers: [
      { name: "Utilities & IPPs", note: "Own and operate the fleet; NextEra and Iberdrola class balance sheets" },
      { name: "Corporate PPA buyers", note: "Tech and data-center offtakers now anchor merchant-adjacent projects" },
      { name: "Governments via auctions", note: "CfD and auction schemes are the offshore demand mechanism" }
    ],
    regulators: [
      { name: "Treasury/IRS (US)", note: "PTC begin-construction rules are, functionally, the US demand schedule" },
      { name: "Permitting & siting authorities", note: "BOEM offshore leases, state commissions, EU permitting: years-long critical path" },
      { name: "Grid operators", note: "Interconnection queues and curtailment rules cap what gets built and what it earns" },
      { name: "Trade bodies", note: "EU and US tariff probes into Chinese turbines will shape the next decade's market shares" }
    ],
    capital: [
      { name: "Tax equity (US)", note: "PTC monetization through tax-equity and transfer markets funds most US projects" },
      { name: "Project finance banks", note: "70-80% leverage against contracted cash flows; rates reset the whole stack in 2022-2023" },
      { name: "Infrastructure funds & yieldcos", note: "Operating farms trade as bond-like infra assets; the exit market for developers" }
    ]
  },

  valueChain: {
    intro: "From steel plate and rare-earth magnets to a 30-year contracted cash flow. Manufacturing earns the least and risks the most; the durable economics live in service annuities and in owning the finished asset.",
    stages: [
      { id: "materials", name: "Materials & inputs", what: "Steel towers, copper, composites, rare-earth magnets", players: "Steelmakers, magnet chain (China-dominant), composites suppliers", valueCapture: 2,
        economics: { grossMargin: [10, 20], capitalIntensity: 4, concentration: 3 },
        linksTo: ["steel", "copper-mining", "rare-earths"],
        deeper: "A turbine is hundreds of tons of commodities: input inflation flows straight into OEM losses when backlogs are fixed-price, which is exactly what happened in 2021-2023. Rare-earth magnets add a geopolitical single point of failure: China dominates processing." },
      { id: "components", name: "Components", what: "Blades, gearboxes, generators, bearings, castings", players: "TPI, LM Wind Power, ZF, SKF, Chinese casting houses", valueCapture: 2,
        economics: { grossMargin: [8, 18], capitalIntensity: 4, concentration: 3 },
        linksTo: ["manufacturing"],
        deeper: "Thin-margin precision manufacturing squeezed between commodity inputs and OEM buyers, with warranty liability flowing back up the chain. The US 45X production credit briefly made domestic blades and nacelles attractive; OBBBA ends it after 2027." },
      { id: "oems", name: "Turbine OEMs", what: "Design, assemble, warrant the machine", players: "Vestas, Siemens Gamesa, GE Vernova, Goldwind, Envision, Mingyang", valueCapture: 3,
        economics: { grossMargin: [5, 15], capitalIntensity: 4, concentration: 4 },
        linksTo: ["manufacturing", "solar"],
        deeper: "Brutal economics for an oligopoly: multi-year fixed bids, warranty tails measured in decades, and a Chinese competitor set pricing 30-40% lower in export markets. The 2025 scoreboard was stark: the top 5 OEMs by installs were all Chinese, led by Goldwind at 29.7 GW, while Vestas's 5.7% EBIT margin counted as a Western triumph." },
      { id: "development", name: "Development & financing", what: "Site control, permits, PPAs, financial close", players: "Orsted, RWE, EDPR, Invenergy, NextEra's dev arm", valueCapture: 4,
        economics: { grossMargin: [20, 40], capitalIntensity: 3, concentration: 2 },
        linksTo: ["utilities", "capital-markets", "private-equity"],
        deeper: "Where option value lives: a permitted project with a bankable PPA is worth multiples of the development spend. It is also where the 2023 carnage hit: Orsted's Ocean Wind cancellation cost ~$4B in writedowns plus up to $1.55B in provisions because fixed-price PPAs met doubled rates and inflated capex." },
      { id: "installation", name: "Construction & installation", what: "EPC, cranes, vessels, grid connection", players: "EPC contractors, Cadeler class vessel owners, cable layers", valueCapture: 3,
        economics: { grossMargin: [8, 15], capitalIntensity: 5, concentration: 3 },
        linksTo: ["construction", "shipping"],
        deeper: "Offshore installation is the chokepoint: purpose-built jack-up vessels for 15 MW machines number in the dozens globally, and day rates reprice with every supply squeeze. Onshore, the constraint is cranes, roads, and interconnection timing." },
      { id: "operate", name: "Operations & service", what: "O&M contracts, spares, repowering, asset ownership", players: "OEM service arms, owner-operators, independent service providers", valueCapture: 5,
        economics: { grossMargin: [20, 35], capitalIntensity: 2, concentration: 3 },
        linksTo: ["utilities", "batteries"],
        deeper: "The annuity: 10-20 year full-scope service agreements with indexed pricing, plus the owner's 25-30 year contracted cash flows. Service is what kept Vestas alive through the turbine-margin winter, and repowering (new machines on old sites with existing permits and grid) is the highest-return capex in the sector." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector in 3 P&Ls. OEMs: revenue = deliveries x ASP per MW; watch order intake pricing (Vestas discloses EUR/MW) against the cost curve, because the margin is decided at signing, years before delivery: the 2021-2023 losses were 2019-2021 bids meeting 2022 steel. Service is the stabilizer: high-margin, indexed, contracted for decades. Developers: lumpy gains on project sales plus fees; NAV is a pipeline-stage-weighted option book. Owners: bond-like levered returns on contracted power, where the PTC (roughly $27-30/MWh) can exceed the wholesale power price in revenue terms.",
      "The balance-sheet tell is provisions and guarantees. Warranty provisions flag quality trouble years before the press release (Siemens Gamesa's EUR 1.6B charge in 2023 followed years of rising provisions), and OEMs carry huge contingent guarantee lines that spooked lenders enough that Berlin backstopped Siemens Energy with billions in state guarantees in November 2023. For owners, the tell is the discount rate: offshore projects sanctioned at 2020 rates were worthless at 2023 rates, hence the (DKK 28.4B) impairment Orsted booked and the industry-wide repricing that followed."
    ],
    fingerprint: { grossMargin: 15, recurringRevenue: 35, capitalIntensity: 85, pricingPower: 35, cyclicality: 70, operatingLeverage: 65 },
    lines: [
      { label: "Order intake & ASP (EUR/MW)", note: "The forward margin signal: price against cost curve at signing" },
      { label: "Backlog & book-to-bill", note: "Turbine plus service backlog; quality of terms matters more than size" },
      { label: "Service revenue & margin", note: "The annuity that funds the manufacturing cycle" },
      { label: "Warranty provisions & charges", note: "The early-warning line: quality problems surface here first" },
      { label: "Project pipeline & FID cadence", note: "For developers: staged GW and the pace of financial close" }
    ],
    unitEconomics: {
      unit: "per MW installed (illustrative)",
      items: [
        { label: "Western onshore turbine ASP", value: "~$1M/MW", note: "Chinese export bids run as low as ~$400k/MW: the whole competitive problem in one line" },
        { label: "All-in onshore project capex", value: "~$1.5M/MW", note: "offshore runs $4M+/MW, US offshore higher still" },
        { label: "OEM EBIT margin", value: "5.7% (Vestas 2025)", note: "the best Western print since 2019; Siemens Gamesa still negative" },
        { label: "Service agreement", value: "15-25% margins, 10-20 yrs", note: "indexed, contracted: the sector's only reliable annuity" }
      ]
    }
  },

  kpiRefs: ["energy-capacity-factor", "def-backlog"],
  kpiLocal: [
    {
      id: "wind-asp-mw", name: "Turbine ASP per MW", industries: ["wind"],
      definition: "Average selling price of turbine orders, disclosed per MW of capacity (Vestas publishes it quarterly).",
      formula: "Order intake value / order intake MW",
      interpretation: "The forward margin signal: today's ASP against today's cost curve is next year's gross margin. Falling ASP into rising input costs was the 2021-2023 disaster; the Western recovery has been priced-up, value-over-volume intake.",
      healthy: "Stable or rising ASP with indexation clauses", warning: "ASP sliding toward Chinese export levels (~$400k/MW) without matching cost position"
    },
    {
      id: "wind-service-margin", name: "Service Margin & Attach", industries: ["wind"],
      definition: "EBIT margin of the OEM service segment and the share of the installed fleet under OEM contract.",
      formula: "Service EBIT / service revenue; fleet under contract / total installed fleet",
      interpretation: "Service is the annuity that carried Vestas through negative turbine margins. High attach rates on a growing installed base compound; upsizing that strands old platforms threatens spares economics.",
      healthy: "Service margins near 20% or better with multi-year backlog", warning: "Margin compression from unplanned repairs (the quality-crisis signature)"
    }
  ],

  health: {
    intro: "OEM health is pricing discipline plus quality culture; developer health is balance-sheet headroom against repricing; the sector's shared vital sign is policy runway.",
    pillars: [
      { name: "Order pricing & backlog quality", weight: 25, metrics: "ASP/MW trend, indexation share, book-to-bill", healthy: "Rising ASP, indexed contracts, selective intake", warning: "Volume-chasing at Chinese price points" },
      { name: "Execution & warranty", weight: 25, metrics: "Warranty provisions, fleet availability, charges", healthy: "Provisions stable, availability 97%+", warning: "Rising provisions, fleet-wide defect campaigns (the Siemens Gamesa pattern)" },
      { name: "Service franchise", weight: 20, metrics: "Service margin, attach rate, contract duration", healthy: "20%+ margins, decade-plus backlog", warning: "Attach erosion to independents" },
      { name: "Balance sheet & guarantees", weight: 15, metrics: "Net debt, guarantee lines, provisions coverage", healthy: "Headroom to post project guarantees", warning: "State backstops required (Siemens Energy, Nov 2023)" },
      { name: "Policy & market exposure", weight: 15, metrics: "US cliff exposure, auction pipeline, tariff shelter", healthy: "Diversified across policy regimes", warning: "Concentrated in post-2027 US onshore or unsheltered export markets" }
    ],
    scoringNote: "In wind, quality failures and mispriced backlogs are the twin unforgivables: both are decided years before they hit the P&L, so score the leading indicators, not the reported margin."
  },

  valuation: {
    intro: "Three asset species, three lenses: OEMs on normalized EBITDA with the service annuity valued separately, developers on pipeline NAV, operating assets on levered cash yield.",
    methods: [
      { name: "EV / EBITDA (OEMs)", use: "Vestas, GE Vernova class through the margin cycle", avoid: "Trough-margin extrapolation: 2023 margins were as unrepresentative as 2016 peaks", strengths: "Standard, comparable", weaknesses: "Blends a weak manufacturing business with a great service business", range: { low: 8, high: 14, asOf: 2025, note: "on normalized margins; the market pays up when ASP discipline shows through" } },
      { name: "SOTP: service annuity + manufacturing", use: "Separating the annuity from the cyclical factory", avoid: "Letting a fat service multiple flatter a value-destroying turbine unit", strengths: "Matches the actual economics", weaknesses: "Segment disclosure varies", range: { low: 12, high: 18, asOf: 2025, note: "EV/EBITDA on the service stream alone" } },
      { name: "Pipeline NAV / EV per MW", use: "Developers: stage-weighted GW times value per MW", avoid: "Face-value pipelines: early-stage GW is nearly free for a reason", strengths: "Captures option value", weaknesses: "Repricing risk: 2023 proved NAVs can evaporate with rates", range: { low: 0.1, high: 0.5, asOf: 2025, note: "$M per MW by stage, late-stage permitted projects at the top" } },
      { name: "CAFD yield (operating assets)", use: "Yieldcos and infra funds owning contracted farms", avoid: "Ignoring merchant tail and curtailment risk after PPA expiry", strengths: "Cash-based, comparable to infra", weaknesses: "Rate-sensitive; PTC transfer market pricing shifts returns", range: { low: 7, high: 11, asOf: 2025, note: "% cash yield; wider than 2021 because rates repriced everything" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a wind OEM quickly: normalized EBITDA times a discipline-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 6, step: 0.2, value: 1.6, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 18, step: 0.5, value: 10, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -3, max: 15, step: 0.5, value: 1, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays wind as 3 separate trades wearing one theme: a disciplined-recovery long in the surviving Western OEMs (service annuity plus priced-up backlog), a repriced-offshore trade in developers who survived 2023 with balance sheets intact, and a policy-cliff timing trade around the July 2026 US deadline. Volume growth is not the question: 178 GW installed in 2025 settles it. Margin capture and policy runway are the whole game.",
    debates: [
      { topic: "US offshore: repriced and investable, or structurally broken?", bull: "The 2023-2025 purge (Ocean Wind's ~$4B writedown, Empire Wind 2's cancelled PPA, voided NYSERDA awards) was the bottom: surviving projects reprice 30-50% higher, contracts now carry inflation indexation, and East Coast states still have binding statutory targets with no alternative at scale.", bear: "The problem was never just price: federal permitting is now actively hostile, Orsted withdrew from New York's 2025 solicitation entirely, the vessel and supply chain never localized, and every project must survive 2 election cycles before first power. Repricing fixed the old contracts, not the political physics." },
      { topic: "Can Western OEMs survive the Chinese export push?", bull: "Tariff walls and security-of-supply politics fence off the US and EU home markets; Chinese machines carry credibility gaps in financing, service networks, and litigation recourse; and Vestas's 2025 recovery (5.7% EBIT, record revenue) proves discipline beats scale in sheltered markets.", bear: "The 2025 scoreboard already reads Goldwind 29.7 GW while all 5 top OEMs are Chinese; a 30-40% price gap wins every unsheltered market (95% of Middle East and Africa capacity in 2025 went Chinese), and shrinking to defended markets is a melting-ice strategy: solar's Western manufacturers ran this exact play and lost." },
      { topic: "Does US onshore wind work after the PTC cliff?", bull: "Data-center load growth is the first real demand shock in 20 years, wind is the cheapest incremental electron in the wind belt even unsubsidized, and safe-harbored equipment plus repowering carry the pipeline years past 2027 while scarcity lifts power prices.", bear: "The PTC (~$27-30/MWh) is frequently worth more than the energy itself; strip it and returns halve while gas and solar-plus-storage compete for the same interconnection queue. The post-2027 US order book is the emptiest forward market in the sector." }
    ],
    cycle: {
      where: "Mid-repricing: global installs at records (178 GW in 2025) while Western manufacturing exits a 3-year margin depression; US demand pulled forward into the 2026 safe-harbor sprint with a visible air pocket behind it; offshore rebuilding on honest prices.",
      drivers: "Policy schedules (PTC deadlines, auction rounds), interest rates through project finance and NAVs, steel and logistics costs through OEM margins, Chinese export penetration, and power demand growth (data centers) setting the post-subsidy floor.",
      leads: [
        "Vestas quarterly order intake and ASP per MW disclosures (free, company site)",
        "Treasury/IRS begin-construction guidance and safe-harbor rulings",
        "EIA monthly capacity additions and planned-generation data (free)",
        "State offshore solicitation outcomes (NYSERDA, NJ BPU) and European CfD auction clearing prices",
        "LBNL interconnection queue reports for the post-2027 US pipeline"
      ]
    },
    exposure: [
      { vehicle: "Vestas", note: "The pure-play Western OEM: service annuity plus the pricing-discipline recovery" },
      { vehicle: "GE Vernova", note: "US onshore turbine leader wrapped in a grid-equipment business the market loves more" },
      { vehicle: "Orsted / RWE class developers", note: "Repriced offshore optionality; balance sheet quality is the screen" },
      { vehicle: "NextEra / Iberdrola class owners", note: "The contracted-cash-flow way in: wind as infrastructure, not manufacturing" },
      { vehicle: "TPI Composites and component names", note: "High-beta ramp exposure; 45X expiry after 2027 is the US overhang" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "OEM order intake, ASP/MW, warranty provisions: the forward margin tape" },
      { when: "July 4, 2026", what: "OBBBA begin-construction deadline: the single largest date in US wind" },
      { when: "Auction calendar (rolling)", what: "UK CfD rounds, German offshore tenders, US state solicitations set forward prices" },
      { when: "Annual (spring)", what: "GWEC Global Wind Report and LBNL market reports reset the volume and cost baselines" }
    ],
    data: [
      { series: "EIA Electric Power Monthly & preliminary generator data", source: "eia.gov (free)", why: "US capacity additions and generation share, primary source" },
      { series: "GWEC Global Wind Report", source: "gwec.net (free)", why: "Global installs, OEM league tables, forecasts" },
      { series: "LBNL Land-Based Wind Market Report & Queued Up", source: "emp.lbl.gov (free)", why: "US costs, PPA prices, interconnection queue depth" },
      { series: "Vestas order announcements & ASP", source: "vestas.com (free)", why: "The sector's cleanest forward pricing signal" },
      { series: "IRENA renewable capacity statistics", source: "irena.org (free)", why: "Country-level installed base, annually updated" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Contracted owners barely notice; OEM order intake pauses; rates falling helps NAVs more than demand softness hurts. The infra leg outperforms the manufacturing leg." },
      { regime: "Rates rising", behavior: "The 2022-2023 template: developer NAVs and yieldcos reprice down hard, fixed-price backlogs turn toxic, offshore FIDs freeze. Own service annuities, avoid unhedged development pipelines." },
      { regime: "Energy crisis / power price spike", behavior: "Merchant tails and new PPAs reprice up; political will for wind surges (Europe 2022). The best regime for developers with ready-to-build pipelines." },
      { regime: "Trade war escalation", behavior: "Tariff walls shelter Western OEM home markets but raise input costs; Chinese OEMs pivot harder into open markets. Watch rare-earth export controls as the chokepoint nobody prices." }
    ]
  },

  players: [
    { name: "Vestas", role: "Largest Western OEM", country: "DK", real: true, note: "Record 2025 revenue, 5.7% EBIT margin: the discipline-over-volume recovery template" },
    { name: "Siemens Gamesa (Siemens Energy)", role: "OEM in repair", country: "DE", real: true, note: "EUR 1.6B quality charges (2023), state-backstopped guarantees; break-even targeted FY2026" },
    { name: "GE Vernova", role: "US onshore leader", country: "US", real: true, note: "Workhorse-turbine strategy; wind is the drag, grid the darling, in one equity" },
    { name: "Goldwind", role: "World #1 by installs", country: "CN", real: true, note: "29.7 GW installed in 2025; leading the export push" },
    { name: "Envision / Mingyang / Windey / SANY", role: "Chinese top tier", country: "CN", real: true, note: "With Goldwind, the entire 2025 global top 5: 30-40% below Western pricing abroad" },
    { name: "Orsted", role: "Offshore developer bellwether", country: "DK", real: true, note: "Built the industry, then booked ~$4B on Ocean Wind: the offshore cycle in one company" },
    { name: "NextEra Energy", role: "Largest wind owner-operator", country: "US", real: true, note: "The infrastructure way to own the theme; PTC monetization at scale" },
    { name: "Iberdrola / RWE / EDPR", role: "European utility developers", country: "ES", real: true, note: "Diversified balance sheets that absorbed the 2023 repricing and kept building" }
  ],

  geography: [
    { country: "CN", role: "The gravity well", note: "130+ GW mechanically installed in 2025; 99.96% served by domestic OEMs; the export base for everything" },
    { country: "US", role: "Largest non-China market", note: "PTC-driven onshore heartland (wind belt states); offshore ambitions repriced and politically contested" },
    { country: "DK", role: "The industry's birthplace", note: "Vestas and Orsted: OEM and developer bellwethers from a country of 6M people" },
    { country: "DE", role: "European anchor", note: "Siemens Energy home; North Sea and Baltic buildout plus the EU's biggest onshore repowering market" },
    { country: "GB", role: "Offshore leader ex-China", note: "CfD auction regime built the world's most mature offshore market; AR5's failed round taught the pricing lesson" },
    { country: "IN", role: "The next volume market", note: "Domestic OEM base (Suzlon) plus Chinese import pressure; grid, not demand, is the constraint" }
  ],

  cycles: [
    { year: 1985, title: "California credit expiry", kind: "bust", text: "The first wind boom dies with its tax credit; turbine quality scandals discredit the industry for a decade and hand leadership to Denmark's conservative engineering school. Lesson: subsidy cliffs select for survivors, not innovators." },
    { year: 2013, title: "PTC lapse whipsaw", kind: "bust", text: "The US credit expires and new installs collapse over 90% in a single year before the retroactive extension. Lesson: when policy is the demand curve, policy calendars are the cycle." },
    { year: 2017, title: "Zero-subsidy offshore bids", kind: "shift", text: "German and Dutch auctions clear at zero subsidy; the industry celebrates its own margin funeral as auctions transfer the value of falling costs to consumers. Lesson: cost curves you don't capture are donations." },
    { year: 2023, title: "The offshore reckoning", kind: "bust", text: "Fixed-price PPAs from the cheap-money era meet doubled rates and inflated capex: Orsted writes off ~$4B on Ocean Wind, Siemens Gamesa books EUR 1.6B in quality charges, Berlin backstops Siemens Energy. Lesson: a backlog is a liability until proven otherwise." },
    { year: 2025, title: "Record volume, split fortunes", kind: "shift", text: "A record 178 GW installs globally while the top 5 OEMs are all Chinese for the first time and Vestas's 5.7% margin counts as Western triumph; OBBBA sets the PTC cliff. Lesson: an industry can win the energy transition and still lose money building it." }
  ],

  risks: [
    { name: "US policy cliff", severity: 4, likelihood: 4, transmission: "Miss the July 2026 begin-construction window -> post-2027 US onshore demand air pocket -> OEM volume and component (45X expiry) shakeout." },
    { name: "Chinese price war going global", severity: 4, likelihood: 4, transmission: "Export pricing 30-40% below Western -> open markets flip Chinese -> Western OEMs shrink to tariff-sheltered zones -> the solar-manufacturing endgame replays." },
    { name: "Quality failures at new turbine scale", severity: 4, likelihood: 3, transmission: "Rushed platform launches -> fleet-wide defect campaigns -> billions in charges and provisioning (the 4.X/5.X template) -> financing costs rise for everyone." },
    { name: "Rates and repricing round two", severity: 3, likelihood: 3, transmission: "Higher-for-longer discount rates -> developer NAVs and yieldco valuations compress -> FIDs slip -> turbine order intake follows with a lag." },
    { name: "Grid and curtailment saturation", severity: 3, likelihood: 4, transmission: "Interconnection queues and negative price hours grow -> capture prices fall below LCOE in windy regions -> merchant tails devalue and PPA appetite thins." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Wind turbines turn moving air into electricity, and the business splits into 3 parts: companies that build the machines (Vestas, GE, and now mostly Chinese giants like Goldwind), companies that develop wind farms, and companies that own them for 25+ years. The world installed a record 178 GW in 2025, more than ever, yet many Western manufacturers barely make money: building turbines is a hard business even when everyone wants them."] },
    L2: { title: "Intermediate", text: ["The economics are razor-and-blade: turbines sell at thin margins while 10-20 year service contracts earn the reliable profit. Policy is the demand curve: the US PTC (roughly $27-30/MWh) has driven every American boom and bust, and the 2025 OBBBA law set a hard deadline (begin construction by July 4, 2026). Offshore wind just lived through a brutal repricing: Orsted wrote off ~$4B cancelling Ocean Wind when fixed-price contracts met inflation and doubled rates. Meanwhile Chinese OEMs took all 5 top spots in 2025 installs and export at prices 30-40% below Western rivals."] },
    L3: { title: "Advanced", text: ["Analyze by species: OEMs on order ASP per MW versus the cost curve (margin is decided at signing, not delivery) plus warranty provisions as the quality early-warning; developers on stage-weighted pipeline NAV with rate sensitivity; owners on levered CAFD against PPA duration. The 2021-2023 losses were mispriced backlogs, not weak demand: fixed bids met steel and logistics inflation. Vestas's recovery to 5.7% EBIT in 2025 came from value-over-volume intake and the service annuity, while Siemens Gamesa's EUR 1.6B quality charge showed what platform-rushing costs."] },
    L4: { title: "Expert", text: ["Trade the policy calendar (the July 2026 safe-harbor sprint and the post-2027 air pocket), quarterly ASP prints, and auction clearing prices. Live debates: whether repriced US offshore is investable or politically broken, whether tariff shelters can hold against a 30-40% Chinese price gap (the solar precedent says no, the credibility gap says maybe), and whether data-center load gives US onshore a post-PTC floor. Watch warranty provisions and guarantee lines: both crises of 2023 were visible there first."] },
    L5: { title: "Institutional", text: ["Allocator's frame: wind is 3 uncorrelated exposures in one label: cyclical manufacturing (own only the disciplined, service-heavy OEMs), development option books (size for repricing risk: 2023 proved NAVs can halve on rates), and contracted infrastructure (the duration asset, priced off real yields). The structural short is undifferentiated Western manufacturing capacity in unsheltered markets; the structural long is the service installed-base annuity and late-stage permitted pipelines in supply-constrained grids. Every thesis reduces to: who captures the value of a technology that keeps winning on cost while its builders keep losing on price."] }
  },

  quiz: [
    { q: "Global wind installations in 2025 were:", choices: ["Declining as subsidies faded", "A record ~178 GW mechanically installed, up 40% YoY", "Flat at ~50 GW", "Mostly offshore"], answer: 1, explain: "GWEC recorded 178 GW mechanically installed and ~165 GW grid-connected in 2025: volume is not the industry's problem; margin capture is." },
    { q: "The 2025 global top 5 turbine OEMs by installs were:", choices: ["Vestas, GE, Siemens Gamesa, Nordex, Goldwind", "All Chinese for the first time, led by Goldwind at 29.7 GW", "All American", "Evenly split East-West"], answer: 1, explain: "Goldwind, Envision, Windey, Mingyang, and SANY out-installed every Western OEM, on the back of a 130+ GW Chinese home market." },
    { q: "Orsted's Ocean Wind cancellation (2023) cost roughly:", choices: ["Nothing: contracts protected it", "$4B in writedowns (DKK 28.4B impairments) plus up to $1.55B in provisions", "$100M", "Only reputational damage"], answer: 1, explain: "Fixed-price PPAs signed in the cheap-money era met doubled rates and inflated capex: the defining offshore loss of the cycle." },
    { q: "Wind OEMs earn their most reliable profit from:", choices: ["Turbine sales", "Multi-decade service contracts: the razor-and-blade annuity", "Government grants", "Electricity sales"], answer: 1, explain: "Turbine margins are thin to negative; 10-20 year indexed service agreements at 15-25% margins carried Vestas through the manufacturing winter." },
    { q: "Under OBBBA, US wind projects keep full PTC eligibility by:", choices: ["Nothing changed", "Beginning construction by July 4, 2026, or being placed in service by Dec 31, 2027", "Paying a fee", "Using US turbines only"], answer: 1, explain: "The 2025 law also eliminated the 5% spend safe harbor for wind and ends 45X component credits after 2027: the policy cliff shaping all US demand." },
    { q: "Chinese turbines in export markets price roughly:", choices: ["At parity with Western machines", "30-40% below Western OEMs, with bids as low as ~$400k/MW", "At a premium", "Only in China"], answer: 1, explain: "The cost gap won 95% of Middle East and Africa capacity in 2025 and drove 26.1 GW of overseas orders in 2024 (+70% YoY)." },
    { q: "The earliest warning of an OEM quality crisis is usually:", choices: ["The share price", "Rising warranty provisions on the balance sheet", "Press releases", "Auction results"], answer: 1, explain: "Siemens Gamesa's EUR 1.6B charge followed years of climbing provisions: in wind, quality problems are booked quietly before they explode publicly." },
    { q: "Vestas's 2025 result mattered because:", choices: ["It hit 20% margins", "A 5.7% EBIT margin, the best Western print since 2019, validated value-over-volume discipline", "It exited wind", "It merged with Goldwind"], answer: 1, explain: "Record revenue with recovering margin showed a Western OEM can earn money in sheltered markets by pricing up and leaning on service, not chasing Chinese volume." }
  ],

  sources: [
    { name: "GWEC Global Wind Report 2026 (178 GW record, OEM league table)", url: "https://www.gwec.net/news/gwec-records-sharp-rise-in-wind-turbine-installations-as-five-oems-exceed-100-gw", feeds: "installs, OEM shares" },
    { name: "Orsted company announcement (Ocean Wind cessation, DKK 28.4B impairments)", url: "https://orsted.com/en/company-announcement-list/2023/10/oersted-ceases-development-of-its-us-offshore-wind-73751", feeds: "offshore repricing" },
    { name: "Vestas annual report 2025 (5.7% EBIT margin, record revenue)", url: "https://www.vestas.com/en/media/company-news/2026/vestas-annual-report-2025---generating-value-amidst-gro-c4302973", feeds: "OEM financials, ASP" },
    { name: "Treasury/IRS OBBBA begin-construction guidance (Notice 2025-42 analyses)", url: "https://www.jw.com/news/insights-obbba-construction-notice-2025-42/", feeds: "PTC policy" }
  ]
};
