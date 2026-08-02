/* Industry Atlas - SOLAR (full module, research-backed)
 * Anchors: global PV additions passed 600GW in 2025 (~605GW, IEA Global Energy
 * Review 2026; SolarPower Europe counted 664GW), cumulative ~2,800GW; China
 * installed ~370GW, over half the world total. Module spot prices fell under
 * $0.10/W (TOPCon quotes ~$0.089/W, Oct 2025, pv magazine); China's top 4
 * module makers lost a combined $1.54B in H1 2025 (PV Tech); Daqo's H1 2025
 * gross margin hit (65.8)% (PV Tech); Chinese module capacity exceeds 900GW vs
 * ~600-700GW of global demand. US module capacity grew from ~8GW pre-IRA to
 * ~56.5GW/yr by mid-2025 (pv magazine USA / Clean Investment Monitor); AD/CVD
 * petitions vs India, Indonesia, Laos filed summer 2025, ITC injury finding
 * Sept 2025 (FTI/SEIA). Beijing's anti-involution price floors (H2 2025)
 * lifted quotes to ~RMB0.70/W (PV Tech); the $7B polysilicon consolidation
 * plan stalled at SAMR in Jan 2026 (CSIS/pv magazine). First Solar FY2025:
 * 17.5GW shipped, $5.2B revenue, 50.1GW/$15B backlog (FY2025 10-K). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["solar"] = {
  meta: {
    id: "solar", name: "Solar", sector: "energy", status: "full",
    tagline: "The cheapest electricity ever built, made by an industry that cannot stop losing money making it.",
    marketSize: { value: 350, unit: "$B", asOf: 2025, note: "global solar PV revenue across equipment, EPC, and services; estimates span $250B to $400B by scope" },
    cagr: { value: 10, range: [7, 14], horizon: "2025-2030" },
    maturity: "high-growth", cyclicality: 4, capitalIntensity: 4, regulation: 4, disruption: 3
  },
  newsQuery: '("solar module" OR photovoltaic OR polysilicon OR "First Solar" OR "solar tariff" OR "solar manufacturing" OR "solar installations")',

  overview: {
    definition: "The solar industry turns sand into electrons: polysilicon refiners, wafer and cell fabs, module assemblers, inverter makers, and the developers and financiers who bolt the panels to the ground. It is simultaneously the fastest-growing energy source in history and one of the worst businesses in it.",
    howItWorks: [
      "Physically, the chain runs quartz to kilowatt: metallurgical silicon is refined into polysilicon, grown into ingots, sliced into wafers, doped into cells, laminated into modules, paired with inverters and trackers, and wired into projects. Economically, it splits into 2 different industries: a brutal commodity manufacturing business (everything up to the module) and an infrastructure business (development, ownership, and power sales) that buys from it. The cheaper the first gets, the better the second does.",
      "Manufacturing is a learning-curve knife fight dominated by China, which controls roughly 80% or more of every upstream step. Capacity is built ahead of demand, costs fall on a relentless experience curve, and price follows cost down: module spot prices dropped below $0.10/W in 2025 (TOPCon quotes touched $0.089/W in October), below most producers' full cost. The result in 2025: China's top 4 module makers (LONGi, Jinko, Trina, JA Solar) lost a combined $1.54B in H1 alone, and polysilicon leader Daqo printed a (65.8)% gross margin. Overcapacity is the industry's natural state: Chinese module capacity exceeds 900GW against ~600-700GW of global demand.",
      "Demand, meanwhile, is booming: the world added more than 600GW of PV in 2025 (IEA counts ~605GW; SolarPower Europe, using DC terms, 664GW), taking cumulative capacity to roughly 2,800GW, the largest installed base of any generation technology. China alone installed ~370GW, over half the total. Solar wins on price: at $30 to $90/MWh unsubsidized it undercuts new fossil generation across most of the world, so growth is increasingly gated by grids, land, and interconnection queues rather than economics.",
      "Policy carves out the exception to Chinese dominance. The US Inflation Reduction Act's 45X manufacturing credits plus a thickening tariff wall (AD/CVD duties on Southeast Asia, new 2025 petitions against India, Indonesia, and Laos) grew US module capacity from ~8GW pre-IRA to ~56.5GW/yr by mid-2025. First Solar, with its non-Chinese CdTe thin-film technology, is the model's proof: 17.5GW shipped and $5.2B of revenue in 2025, a 50.1GW backlog worth $15B, and gross margins near 47% while Chinese rivals bled. Same product, opposite economics: the difference is a moat made of statute."
    ],
    history: [
      { era: "1954-1999", title: "Space toy to niche", text: "Bell Labs' first practical cell (1954) powers satellites, then calculators; costs fall 100x but solar stays a rounding error." },
      { era: "2000-2010", title: "The German gift", text: "Germany's feed-in tariffs create the first mass market; Q-Cells and SunPower boom; China quietly builds the factories to supply it." },
      { era: "2011-2013", title: "First glut", text: "Chinese capacity floods a subsidy-cut Europe; prices halve; Solyndra, Q-Cells, and Suntech fail. Manufacturing consolidates in China for good." },
      { era: "2014-2021", title: "Grid parity", text: "Costs drop ~90% in a decade; auctions replace subsidies; solar becomes the cheapest new electricity in most of the world and the default utility-scale build." },
      { era: "2022-present", title: "Terawatt era, second glut", text: "The IRA sparks a Western manufacturing race while Chinese polysilicon capacity quadruples (2022-2024); installs pass 600GW/yr in 2025 as module prices collapse under $0.10/W and the whole Chinese chain goes loss-making." }
    ],
    trends: [
      { title: "Demand supercycle", direction: "up", text: "600GW+ added in 2025, over a quarter of global energy demand growth; data-center load growth is adding a new, price-insensitive buyer." },
      { title: "Manufacturing depression", direction: "down", text: "Prices below cash cost for most of the chain; top-4 Chinese makers lost $1.54B in H1 2025; at least 4 polysilicon producers suspended output." },
      { title: "Anti-involution", direction: "shift", text: "Beijing's H2 2025 push (minimum price floors, capacity discipline) lifted module quotes to ~RMB0.70/W and flipped polysilicon back toward profit; a $7B consolidation plan stalled at the regulator in early 2026." },
      { title: "Trade wall economics", direction: "shift", text: "45X credits plus tariffs built a ~56.5GW US module base, but cell capacity (~8GW) lags badly: the wall protects assembly, not yet the chain." },
      { title: "Storage attach", direction: "up", text: "Batteries turn midday gluts into evening revenue; hybrid solar-plus-storage is becoming the default bid, pulling the 2 industries into 1 product." }
    ],
    outlook: "Volume is the safest bet in energy: solar wins on cost and keeps winning. Value is the hard question. Chinese manufacturing needs a genuine capacity cull (the anti-involution campaign is the attempt) before margins normalize; Western manufacturing lives or dies on policy durability; and as penetration rises, the binding constraints shift to grids, curtailment, and capture prices. The likely shape: installs keep compounding, manufacturing stays commoditized with policy-protected islands of profit, and the economics migrate downstream to whoever owns the electrons and the storage behind them."
  },

  structure: {
    suppliers: [
      { name: "Polysilicon refiners (Tongwei, GCL, Daqo, Wacker, Hemlock)", note: "The chain's most cyclical link: 4x capacity growth 2022-2024, then (65.8)% gross margins" },
      { name: "Glass, EVA, silver paste, frames", note: "Consumables with their own oligopolies; silver is the cell's costliest input" },
      { name: "Equipment makers (tool vendors for ingot, cell, module lines)", note: "The picks-and-shovels of every capacity race, Chinese-dominated" },
      { name: "Inverter and tracker makers (Huawei, Sungrow, SMA, Enphase, Nextracker)", note: "Power electronics: better margins than panels, real brand and software moats" },
      { name: "Silver, copper & specialty metals", note: "Solar is now ~15% of global silver demand; metallization cost drives cell-design choices" }
    ],
    producers: [
      { name: "Integrated Chinese majors (LONGi, JinkoSolar, Trina, JA Solar)", note: "60GW+ annual shipers each at peak; collectively lost $1.54B in H1 2025" },
      { name: "First Solar", note: "The non-Chinese exception: CdTe thin film, 17.5GW shipped in 2025, ~47% gross margins under 45X" },
      { name: "Hanwha Qcells, Indian makers (Waaree, Adani)", note: "The tariff-wall beneficiaries building in the US and India" },
      { name: "Developers and EPCs", note: "The buyers of all of it: they convert cheap hardware into contracted cash flows" }
    ],
    distributors: [
      { name: "Distributors and installer networks", note: "Fragmented resi/C&I channel; utility-scale buys direct from the factory" },
      { name: "Residential platforms (Sunrun class)", note: "Lease and PPA originators: a consumer-finance business wearing a hard hat" }
    ],
    customers: [
      { name: "Utilities and IPPs", note: "The volume buyers: gigawatt procurement on 20-year horizons" },
      { name: "Corporates and hyperscalers", note: "PPA offtakers; AI data-center load is the new marginal buyer" },
      { name: "Households and businesses", note: "Rooftop: policy-sensitive, rate-sensitive, and the industry's retail face" },
      { name: "Governments and off-grid buyers", note: "Auctions, tenders, and the emerging-market electrification tail" }
    ],
    regulators: [
      { name: "Trade authorities (US Commerce/ITC, EU)", note: "Tariff dockets move more market cap than earnings do" },
      { name: "US Treasury/IRS", note: "45X and 48E guidance defines Western manufacturing economics" },
      { name: "China NDRC/NEA and MIIT", note: "Sets installation pace and now polices overcapacity via price floors" },
      { name: "Grid operators and PUCs", note: "Interconnection queues and net-metering rules gate demand" }
    ],
    capital: [
      { name: "Project finance and tax equity", note: "Cheap, structured debt against contracted PPAs; the real product is the financing" },
      { name: "Green bonds and infrastructure funds", note: "Yield-hungry capital compresses returns on operating assets" },
      { name: "State capital (China)", note: "Provincial subsidies built the glut; Beijing now funds the cleanup" },
      { name: "Public equity and ETFs (TAN class)", note: "Thematic flows amplify both directions of the cycle" }
    ]
  },

  valueChain: {
    intro: "From quartz to a 25-year power contract. Value pools invert with the cycle: upstream manufacturing captures nothing at the bottom, while power electronics and asset ownership earn steadily throughout.",
    stages: [
      { id: "polysilicon", name: "Polysilicon", what: "Refining silicon to 99.9999%+ purity", players: "Tongwei, GCL, Daqo, Wacker", valueCapture: 1,
        economics: { grossMargin: [-40, 30], capitalIntensity: 5, concentration: 4 },
        linksTo: ["chemicals", "mining"],
        deeper: "The chain's boom-bust amplifier: 2-year build times against 6-month demand swings. Capacity quadrupled 2022-2024; prices then sat below cost for over a year and Daqo printed a (65.8)% gross margin in H1 2025. Beijing's price floors flipped the segment back toward profit in late 2025: a policy floor, not a market one." },
      { id: "wafer-cell", name: "Ingots, wafers & cells", what: "Growing, slicing, and doping the silicon", players: "LONGi, TCL Zhonghuan, Tongwei, JA Solar", valueCapture: 2,
        economics: { grossMargin: [0, 15], capitalIntensity: 4, concentration: 4 },
        linksTo: ["semiconductors", "manufacturing"],
        deeper: "Where the technology race lives: PERC gave way to TOPCon in 2 years, with HJT and back-contact fighting for the next node and perovskite tandems on the horizon. Each transition strands the last generation's capex, which is why scale leaders keep spending through losses: stopping means obsolescence." },
      { id: "modules", name: "Module assembly", what: "Laminating cells into weatherproof panels", players: "LONGi, Jinko, Trina, JA Solar, First Solar", valueCapture: 2,
        economics: { grossMargin: [-10, 20], capitalIntensity: 3, concentration: 3 },
        linksTo: ["manufacturing"],
        deeper: "The commodity endpoint: spot prices fell to ~$0.089/W in China (Oct 2025), below full cost for nearly everyone. The exception proves the rule: First Solar's CdTe modules, sold into the tariff-walled US market with 45X credits, carried gross margins near 47% while silicon peers lost money on every watt." },
      { id: "inverters-bos", name: "Inverters, trackers & BOS", what: "Power electronics and everything that holds panels up", players: "Huawei, Sungrow, Enphase, SolarEdge, Nextracker", valueCapture: 4,
        economics: { grossMargin: [25, 45], capitalIntensity: 2, concentration: 3 },
        linksTo: ["semiconductors", "consumer-electronics", "batteries"],
        deeper: "The chain's quiet margin pool: inverters carry brand, software, grid-code certification, and service networks that panels lack. As modules approach free, balance-of-system becomes most of project cost, and the tracker/inverter makers price against project value, not against $/W." },
      { id: "development-epc", name: "Development & EPC", what: "Sites, permits, interconnection, construction", players: "NextEra, EDF/Engie arms, Adani, thousands of local developers", valueCapture: 3,
        economics: { grossMargin: [10, 25], capitalIntensity: 3, concentration: 2 },
        linksTo: ["construction", "utilities"],
        deeper: "The scarce assets here are not panels but queue positions: interconnection rights, land, and permits. A mature project with grid access sells for multiples of its development cost; falling module prices flow straight into developer margin or lower PPA bids, which is why developers quietly cheer the manufacturing depression." },
      { id: "ownership", name: "Asset ownership & power sales", what: "Owning plants, selling electrons for 25+ years", players: "NextEra, Brookfield, utilities, infra funds", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 2 },
        linksTo: ["utilities", "banking", "capital-markets", "batteries"],
        deeper: "Infrastructure economics: contracted PPAs, cheap leverage, unlevered returns of roughly 6% to 9%. The emerging risk is value deflation: at high penetration, midday prices collapse (capture rates fall), making storage attach and PPA structure, not hardware cost, the driver of returns." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share one industry. Manufacturers sell a commodity on a falling cost curve: revenue = GW shipped x $/W, margins swing violently with the capacity cycle, and the 2025 print was historic red ink ($1.54B of H1 losses at the Chinese top 4) even as volumes hit records. Power-electronics and tracker makers look like industrial-tech: 25% to 45% gross margins, brand and software attach, and pricing tied to project value. Developers and owners look like infrastructure: development margin on flip, then contracted, levered annuities with single-digit unlevered returns.",
      "Policy is a fourth line item. In the US, 45X manufacturing credits can exceed the entire market price of a module: First Solar's $5.2B revenue and ~47% gross margin in the 2025 vintage are inseparable from statute, which is why its 50.1GW/$15B backlog trades at a premium and why every tariff docket is an earnings event. In China, the state built the glut (provincial capital funded a 4x polysilicon expansion in 2 years) and is now engineering the cull via price floors. Both models make government the industry's most important customer, supplier, and risk."
    ],
    fingerprint: { grossMargin: 18, recurringRevenue: 25, capitalIntensity: 75, pricingPower: 20, cyclicality: 80, operatingLeverage: 70 },
    lines: [
      { label: "Shipments (GW) & ASP ($/W)", note: "The manufacturer tape: volume records and price collapses can coexist, as 2025 proved" },
      { label: "Gross margin by segment", note: "Poly, cell, module margins mark the cycle; watch the spread vs spot prices" },
      { label: "Contracted backlog", note: "First Solar's 50.1GW/$15B is the template: visibility is the scarcest asset" },
      { label: "Tax credits (45X) & tariff exposure", note: "For US names, statute is a revenue line; model repeal and phase-down scenarios" },
      { label: "Inventory & cash burn", note: "Gluts show up as swelling inventory and negative FCF quarters before they hit price" }
    ],
    unitEconomics: {
      unit: "per watt, utility-scale (2025 vintages)",
      items: [
        { label: "Module spot price (China)", value: "~$0.09-0.12/W", note: "Oct 2025 TOPCon quotes ~$0.089/W: below most producers' full cost" },
        { label: "US-made module realized price", value: "~$0.25-0.30/W", note: "tariff wall + domestic-content premium; 45X credit stacks on top" },
        { label: "All-in utility-scale build cost (US)", value: "~$1.00-1.20/W", note: "modules are now a minority of project cost; BOS and labor dominate" },
        { label: "Unsubsidized LCOE", value: "~$30-90/MWh", note: "cheapest new generation across most geographies; sunny-region low end" }
      ]
    }
  },

  kpiRefs: ["energy-capacity-factor", "semi-utilization"],
  kpiLocal: [
    {
      id: "solar-module-asp", name: "Module ASP ($/W)", industries: ["solar"],
      definition: "Average selling price per watt of PV modules, spot and contracted.",
      formula: "Module revenue / watts shipped; track China spot (TOPCon) as the global marker",
      interpretation: "The single number that marks the manufacturing cycle. Sub-$0.10/W (2025) means the chain is pricing below cost; recoveries show up here before they show up in margins.",
      healthy: "ASP at or above integrated cash cost with stable quarter-over-quarter trend", warning: "ASP below cash cost industry-wide; price floors holding only by government decree" },
    {
      id: "solar-annual-installs", name: "Global Annual Installs (GW)", industries: ["solar"],
      definition: "Gigawatts of PV capacity added worldwide per year.",
      formula: "Sum of national capacity additions (IEA/IRENA/SolarPower Europe; AC vs DC conventions differ)",
      interpretation: "The demand tape: 605GW in 2025 per the IEA (664GW on SolarPower Europe's DC count), up ~12% year over year. Growth deceleration matters more than the level: capacity was built for perpetual 20%+ growth.",
      healthy: "Double-digit annual growth with broadening geography", warning: "Flat or falling installs in China, which is over half of world demand" }
  ],

  health: {
    intro: "Manufacturer health is cost-curve position and balance-sheet endurance; developer health is queue quality and financing spreads; everyone's health is policy exposure, mapped honestly.",
    pillars: [
      { name: "Cost curve position", weight: 25, metrics: "Cash cost per watt vs China spot, technology node (TOPCon/HJT), scale", healthy: "Cash-cost positive at spot; current-node capacity", warning: "Losing money at spot on last-generation lines" },
      { name: "Policy & trade insulation", weight: 20, metrics: "45X/tariff-wall revenue share, domestic-content qualification, repeal sensitivity", healthy: "Profitable even ex-credits, or statutory protection locked long-term", warning: "Entire margin explained by a credit one bill could remove" },
      { name: "Backlog & contract quality", weight: 20, metrics: "GW contracted, pricing terms, offtaker credit, cancellation clauses", healthy: "Multi-year backlog at fixed or floored prices (the First Solar 50.1GW template)", warning: "Spot-exposed volumes; backlogs repricing downward" },
      { name: "Balance sheet endurance", weight: 20, metrics: "Net debt, inventory days, FCF burn rate vs cycle duration", healthy: "Net cash or low leverage; can outlast a 2-year price war", warning: "Levered into a glut; inventory swelling while prices fall" },
      { name: "Technology roadmap", weight: 15, metrics: "Node transition readiness, R&D share, perovskite-tandem optionality", healthy: "Leading the current transition with a credible next step", warning: "Capex stranded on obsolete nodes; buying technology late" }
    ],
    scoringNote: "In solar manufacturing, the cycle kills the levered before it kills the inefficient: endurance beats elegance at the bottom, and the bottom is where 2025 sat."
  },

  valuation: {
    intro: "The market prices 3 different animals: manufacturers on through-cycle earnings power (with a policy overlay), power-electronics names as industrial tech, and asset owners on project IRRs and yield.",
    methods: [
      { name: "EV / EBITDA (through-cycle)", use: "Module and polysilicon makers: normalize across the glut-and-cull cycle", avoid: "Trough multiples on trough earnings; 2025 EBITDA is not a base year", strengths: "Comparable across the chain", weaknesses: "Cycle timing dominates the answer; Chinese accounting adds noise", range: { low: 4, high: 10, asOf: 2025, note: "commodity manufacturers; Chinese majors trade the low end in gluts" } },
      { name: "P/E on policy-adjusted earnings", use: "First Solar class: strip 45X to see the ex-statute business, then decide what the credit is worth", avoid: "Capitalizing credits at a market multiple as if they were permanent", strengths: "Forces the repeal-scenario math", weaknesses: "Binary policy outcomes defeat point estimates", range: { low: 10, high: 18, asOf: 2025, note: "backlog visibility (50.1GW/$15B) supports the premium end" } },
      { name: "Project DCF / IRR", use: "Developers and asset owners: value the pipeline at achievable spreads", avoid: "Marking every queue position as a completed project", strengths: "Matches the infrastructure economics", weaknesses: "Capture-rate erosion at high penetration is easy to under-model", range: { low: 6, high: 9, asOf: 2025, note: "% unlevered IRRs on contracted utility-scale; levered equity higher" } },
      { name: "Replacement cost per GW", use: "Sanity check in distress: gluts price capacity below what it costs to build", avoid: "Assuming obsolete capacity has replacement value at all", strengths: "Marks the cycle floor", weaknesses: "Technology transitions can make replacement cost irrelevant", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: Chinese cell capacity traded far below build cost in 2025" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a solar manufacturer quickly: mid-cycle EBITDA times a cycle-and-policy-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.2, max: 8, step: 0.2, value: 1.6, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 3, max: 16, step: 0.5, value: 7, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 20, step: 0.5, value: 2, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays solar as a barbell: own the policy-moated manufacturers and the margin-rich power-electronics names, own the asset developers who benefit from cheap panels, and avoid the commodity middle until China's capacity cull is real. Demand is not the debate (600GW+ and compounding); who captures it is the entire trade.",
    debates: [
      { topic: "Is anti-involution a real bottom or a government-decreed truce?", bull: "Beijing has done this before (coal, steel, cement): price floors plus forced consolidation culled capacity and restored margins for years. Polysilicon already flipped profitable in late 2025, and the loss math ($1.54B in a half-year at the top 4) makes discipline self-enforcing.", bear: "The $7B consolidation plan stalled at the regulator in January 2026, provincial governments protect local champions, and every price floor invites cheating. 900GW+ of module capacity against ~650GW of demand means the cull needs years, not quarters: floors without exits just freeze the pain." },
      { topic: "First Solar: durable franchise or a levered bet on one statute?", bull: "A 50.1GW backlog at fixed prices, the only scaled non-Chinese technology (CdTe), hyperscaler demand arriving, and tariff walls that both parties keep building: the moat is bipartisan protectionism, not one bill, and 47% gross margins buy time to extend the technology lead.", bear: "Strip 45X and the margin story collapses toward commodity reality; Chinese tandem-perovskite progress threatens the efficiency gap; and a backlog is a queue of prices that look great only until repeal, phase-down, or a trade deal reopens the door to $0.09/W imports." },
      { topic: "Does AI load growth re-rate solar, or does the grid choke first?", bull: "Data centers need power now, solar-plus-storage is the fastest new electron at scale, and hyperscalers sign PPAs at premium prices for speed: a price-insensitive buyer class arriving exactly as hardware hits record cheapness.", bear: "Interconnection queues run 4+ years, hyperscalers are also buying gas and nuclear for firmness, and rising penetration crushes midday capture rates: volume growth with value decay is solar's oldest trick." }
    ],
    cycle: {
      where: "A manufacturing depression inside a demand boom: record installs (605GW in 2025), record losses upstream, and a state-managed capacity cull just beginning. Downstream (developers, electronics) sits mid-expansion; upstream sits at or near a policy-engineered trough.",
      drivers: "China's capacity discipline, US/EU trade and credit policy, interest rates (project finance spreads), grid and interconnection capacity, and storage costs.",
      leads: [
        "China module and polysilicon spot prices (pv magazine / SMM weeklies, free)",
        "China NEA monthly installation statistics (free)",
        "US EIA Electric Power Monthly and EIA-860M capacity additions (free)",
        "US Commerce/ITC tariff dockets and 45X/48E Treasury guidance (free, primary)",
        "Polysilicon operating-rate and inventory reports (free trade-press summaries)"
      ]
    },
    exposure: [
      { vehicle: "First Solar", note: "The policy-moat pure play: backlog visibility with statute risk attached" },
      { vehicle: "Inverter/tracker names (Enphase, SolarEdge, Sungrow, Nextracker class)", note: "The margin pool: industrial-tech economics on solar volume" },
      { vehicle: "Chinese integrated majors (LONGi, Jinko, Trina class)", note: "The cull trade: torched equity that re-rates violently if discipline holds" },
      { vehicle: "Developers/IPPs (NextEra, Brookfield class)", note: "Cheap-hardware beneficiaries with infrastructure balance sheets" },
      { vehicle: "TAN-class solar ETFs", note: "Beta to the theme; mixes the barbell with the commodity middle, size accordingly" }
    ],
    catalysts: [
      { when: "Weekly/monthly", what: "China spot prices and NEA install data: the cycle's tape" },
      { when: "2026 trade calendar", what: "Final AD/CVD duties on India, Indonesia, Laos (ITC found injury Sept 2025); each ruling reprices US manufacturers" },
      { when: "Beijing policy windows", what: "Polysilicon consolidation plan revival, price-floor enforcement, capacity-exit funding" },
      { when: "US budget cycles", what: "45X/48E phase-down or repeal riders: the single largest swing factor for US names" }
    ],
    data: [
      { series: "IEA Global Energy Review / Renewables reports", source: "iea.org (free)", why: "The authoritative annual install and forecast tape" },
      { series: "China module/poly spot prices", source: "pv-magazine.com price coverage (free)", why: "The manufacturing cycle's daily marker" },
      { series: "US capacity additions and queue data", source: "EIA (free) + LBNL interconnection reports (free)", why: "US demand and the grid bottleneck, primary source" },
      { series: "Trade case dockets", source: "usitc.gov / trade.gov (free)", why: "Tariff outcomes move US solar equities more than earnings" },
      { series: "SEIA/Wood Mackenzie Solar Market Insight", source: "seia.org (free summaries)", why: "US segment detail: utility vs C&I vs resi" }
    ],
    playbook: [
      { regime: "Rates rising", behavior: "Project finance spreads widen, PPA math tightens, resi demand (a financing product) sags first; manufacturers feel it as order deferrals. Own margin, not volume." },
      { regime: "Recession", behavior: "Utility-scale is contract-backed and holds; resi and C&I slump; cheap hardware plus falling rates on the way out set up the recovery trade." },
      { regime: "Trade war escalation", behavior: "US/EU manufacturers re-rate up, project costs re-rate up, installers suffer: the wall taxes deployment to subsidize production. Watch cell (not module) capacity as the true bottleneck." },
      { regime: "Energy price spike", behavior: "PPA demand surges and merchant solar prints money; the demand story accelerates while input costs (silver, aluminum, freight) claw some back." }
    ]
  },

  players: [
    { name: "LONGi Green Energy", role: "Scale leader, wafers-to-modules", country: "CN", real: true, note: "The learning curve's biggest balance sheet; deep H1 2025 losses, back-contact technology bet" },
    { name: "JinkoSolar", role: "Shipment volume leader", country: "CN", real: true, note: "TOPCon front-runner shipping 80GW-class volumes at commodity margins" },
    { name: "Trina Solar", role: "Integrated Chinese major", country: "CN", real: true, note: "Modules plus trackers and storage: the diversify-downstream template" },
    { name: "Tongwei", role: "Polysilicon and cell king", country: "CN", real: true, note: "Top of the cost curve upstream; the anti-involution cull's biggest stakeholder" },
    { name: "First Solar", role: "The Western exception", country: "US", real: true, note: "CdTe thin film; 17.5GW shipped 2025, 50.1GW/$15B backlog, ~47% gross margin under 45X" },
    { name: "Hanwha Qcells", role: "Tariff-wall builder", country: "KR", real: true, note: "Multi-billion US cell-to-module buildout in Georgia: the IRA thesis in physical form" },
    { name: "Sungrow", role: "Inverter co-leader", country: "CN", real: true, note: "With Huawei, splits the global inverter market; storage systems now the growth engine" },
    { name: "NextEra Energy", role: "Developer-owner colossus", country: "US", real: true, note: "The biggest single buyer thesis: cheap panels become contracted 25-year cash flows" }
  ],

  geography: [
    { country: "CN", role: "Manufacturing hegemon + largest market", note: "80%+ of upstream capacity and ~370GW of 2025 installs: both sides of every trade" },
    { country: "US", role: "Policy-walled growth market", note: "45X built ~56.5GW of module capacity from ~8GW; cells and wafers still import-dependent" },
    { country: "IN", role: "The third pole", note: "Domestic-content rules plus ALMM building a protected manufacturing base; huge install runway" },
    { country: "DE", role: "Europe's anchor market", note: "The original demand engine; now a rooftop-heavy, import-dependent volume market" },
    { country: "VN", role: "Transshipment battleground", note: "SE Asian cell hub caught in the AD/CVD crossfire; capacity migrating to Indonesia and Laos, now targeted too" },
    { country: "BR", role: "Sunbelt volume market", note: "Distributed-generation boom; the template for emerging-market, subsidy-light adoption" }
  ],

  cycles: [
    { year: 2004, title: "Germany's feed-in tariff", kind: "boom", text: "The EEG guarantees 20-year prices and creates the first gigawatt market; global capacity races to supply Bavarian rooftops. Lesson: subsidies build demand, but whoever builds supply keeps the industry." },
    { year: 2012, title: "First glut", kind: "bust", text: "Chinese capacity meets slashed European tariffs; prices halve; Solyndra, Q-Cells, and Suntech fail while survivors double down. Lesson: in learning-curve industries, the crash is the moat: it buries everyone who can't fund the next node." },
    { year: 2016, title: "SunEdison collapses", kind: "bust", text: "The world's largest renewables developer implodes under $16B of acquisition debt. Lesson: cheap panels do not make cheap capital; developer models die of balance sheet, not demand." },
    { year: 2022, title: "The IRA rewires the map", kind: "shift", text: "45X credits and tariff walls launch a US manufacturing race from an 8GW base. Lesson: when statute can exceed the product's market price, policy is the business model." },
    { year: 2025, title: "Second glut, state cull", kind: "shift", text: "Installs pass 600GW while modules fall under $0.10/W; the top 4 Chinese makers lose $1.54B in a half-year; Beijing imposes price floors. Lesson: record demand cannot save a supply side built for a market twice its size." }
  ],

  risks: [
    { name: "Chinese overcapacity persists", severity: 4, likelihood: 4, transmission: "Price floors leak -> losses resume across the chain -> Western fabs undercut the moment walls crack -> another lost decade for manufacturer equity." },
    { name: "US policy reversal", severity: 4, likelihood: 3, transmission: "45X repeal or phase-down -> US manufacturing margins evaporate -> buildout stalls mid-construction -> backlog repricing hits the sector's premium names hardest." },
    { name: "Grid saturation and capture-rate decay", severity: 4, likelihood: 4, transmission: "Midday oversupply -> negative prices and curtailment -> PPA and merchant revenues compress -> project IRRs fall -> demand growth decelerates despite record-cheap hardware." },
    { name: "Trade war whiplash", severity: 3, likelihood: 4, transmission: "New tariffs on each relocation (SE Asia, then India/Indonesia/Laos) -> import costs spike faster than domestic cells scale -> US deployment slows, punishing developers and installers." },
    { name: "Technology leapfrog", severity: 3, likelihood: 2, transmission: "Perovskite tandems commercialize early -> TOPCon capex strands industry-wide -> today's cost leaders become tomorrow's write-downs (the PERC precedent, compressed)." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Solar panels turn sunlight into electricity, and they have become the cheapest way to make power in most of the world. The world added a record 600GW+ of solar in 2025, over half of it in China. The catch: the companies making the panels mostly lose money, because so many factories were built that panels sell for less than they cost to make. The people who profit are usually those who own the solar farms, not those who build the panels."] },
    L2: { title: "Intermediate", text: ["Think of solar as 2 industries: commodity manufacturing (polysilicon, wafers, cells, modules: China makes 80%+ of it, prices fell under $0.10/W in 2025, and the top 4 Chinese makers lost $1.54B in half a year) and infrastructure (developers and owners who turn cheap panels into 25-year contracted cash flows). Policy splits the map: US tariffs plus IRA manufacturing credits built a protected 56.5GW module base, and First Solar earned ~47% gross margins inside that wall while Chinese rivals bled outside it."] },
    L3: { title: "Advanced", text: ["Analyze by species: manufacturers on cost-curve position and balance-sheet endurance through the glut (2025 was a trough year: never anchor on trough or peak economics); power-electronics names as industrial tech with 25% to 45% gross margins; owners on project IRRs (6% to 9% unlevered) and capture-rate risk. The 2 state variables that matter: whether Beijing's anti-involution price floors become a real capacity cull, and whether US statute (45X, tariffs) survives its political cycles. Model both explicitly."] },
    L4: { title: "Expert", text: ["Trade the tape: China spot prices weekly, NEA install data monthly, trade dockets on their calendar (India/Indonesia/Laos duties finalize in 2026). Live debates: anti-involution as bottom vs truce, First Solar's moat ex-45X, and whether AI load growth re-rates volume before grid saturation decays value. Watch cell (not module) capacity in the US: assembly behind a wall is not a supply chain. The perovskite-tandem timeline is the tail risk under every TOPCon balance sheet."] },
    L5: { title: "Institutional", text: ["Allocator's frame: solar offers the rare certainty of volume (installs compound on cost superiority alone) attached to chronic uncertainty of value capture. Barbell accordingly: policy-moated manufacturers and margin-rich electronics on one side, asset owners harvesting cheap hardware on the other, and the commodity middle only as a distressed cull trade with explicit China-policy triggers. Size every US position against statute risk and every Chinese position against discipline risk: in this industry, governments set the clearing price on both sides of the Pacific."] }
  },

  quiz: [
    { q: "Global solar additions in 2025 were roughly:", choices: ["60GW", "Over 600GW: a record, and more than a quarter of global energy demand growth", "6,000GW", "200GW"], answer: 1, explain: "The IEA counted ~605GW (SolarPower Europe, on a DC basis, 664GW), taking cumulative capacity to ~2,800GW: the largest installed base of any generation technology." },
    { q: "In 2025, Chinese module spot prices fell to about:", choices: ["$1.00/W", "Under $0.10/W: below most producers' full cost", "$0.50/W", "$5.00/W"], answer: 1, explain: "TOPCon quotes touched ~$0.089/W in October 2025: the definition of a glut, with 900GW+ of capacity chasing ~650GW of demand." },
    { q: "China's top 4 module makers in H1 2025 collectively:", choices: ["Earned record profits", "Lost about $1.54B: record volumes, record losses", "Broke even", "Exited the industry"], answer: 1, explain: "LONGi, Jinko, Trina, and JA Solar shipped enormous volumes at prices below cost: the manufacturing depression inside the demand boom." },
    { q: "The US IRA's 45X credit mattered because it:", choices: ["Subsidized rooftop installs only", "Grew US module capacity from ~8GW to ~56.5GW/yr by mid-2025 by paying manufacturers per unit produced", "Banned Chinese panels", "Funded research only"], answer: 1, explain: "Production credits plus tariff walls made US manufacturing viable: for some products the statute is worth more than the module's market price." },
    { q: "First Solar's edge over Chinese rivals in 2025 was:", choices: ["Cheaper production costs than China", "A non-Chinese technology (CdTe) sold inside a tariff-and-credit wall: ~47% gross margins and a 50.1GW/$15B backlog", "Bigger volumes than LONGi", "No exposure to policy"], answer: 1, explain: "Same end product, opposite economics: the moat is bipartisan protectionism plus the only scaled non-silicon technology, which is also the bear case in one sentence." },
    { q: "'Anti-involution' in Chinese solar refers to:", choices: ["A new cell design", "Beijing's campaign of price floors and capacity discipline to end below-cost competition", "An export ban", "A rooftop subsidy"], answer: 1, explain: "Minimum prices from H2 2025 lifted quotes and flipped polysilicon back toward profit, but the $7B consolidation plan stalled: a decreed floor is not yet a cull." },
    { q: "As solar penetration rises, project returns are threatened most by:", choices: ["Panel prices rising", "Capture-rate decay: midday oversupply crushes the prices solar actually receives", "Lack of sunlight", "Inverter shortages"], answer: 1, explain: "Value deflation is solar's structural risk: volume can grow while every marginal megawatt-hour earns less, which is why storage attach defines the next decade's economics." },
    { q: "The best-margin segment of the solar value chain is typically:", choices: ["Polysilicon refining", "Inverters, trackers, and power electronics: brand, software, and grid certification that panels lack", "Module assembly", "Wafer slicing"], answer: 1, explain: "25% to 45% gross margins against a commodity panel: as modules approach free, balance-of-system captures the value." }
  ],

  sources: [
    { name: "IEA Global Energy Review 2026 (2025 PV additions ~605GW)", url: "https://www.iea.org/reports/global-energy-review-2026/technology-solar-pv-and-wind", feeds: "installs, capacity" },
    { name: "PV Tech: China's top 4 makers lose $1.54B in H1 2025", url: "https://www.pv-tech.org/chinas-top-four-solar-manufacturers-suffer-1-54-billion-losses-h1-2025/", feeds: "manufacturer economics" },
    { name: "pv magazine USA: US passes 50GW of module capacity (Feb 2025)", url: "https://pv-magazine-usa.com/2025/02/04/u-s-surpasses-50-gw-of-solar-module-manufacturing-capacity/", feeds: "US manufacturing" },
    { name: "First Solar FY2025 annual report (17.5GW shipped, 50.1GW backlog)", url: "https://www.sec.gov/Archives/edgar/data/1274494/000127449426000098/fslr2025annualreportpdf.pdf", feeds: "company financials" }
  ]
};
