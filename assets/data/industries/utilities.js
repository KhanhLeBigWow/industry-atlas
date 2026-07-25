/* Industry Atlas - UTILITIES & GRID (full module, research-backed)
 * Anchors: US IOU capex ~$1.1T planned 2025-2029 (EEI) / ~$1.3T 2026-30
 * (S&P); 2024 US transmission capex ~$35B + distribution ~$60B; datacenter
 * demand ended two flat decades of load growth. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["utilities"] = {
  meta: {
    id: "utilities", name: "Utilities & Grid", sector: "energy", status: "full",
    tagline: "Regulated returns on the largest machine ever built, suddenly handed its first demand supercycle in 20 years.",
    marketSize: { value: 3, unit: "$T", asOf: 2024, note: "global electricity sector revenue; US utility capex alone ~$1.1T planned 2025-2029" },
    cagr: { value: 6, range: [4, 8], horizon: "2024-2030" },
    maturity: "growth", cyclicality: 1, capitalIntensity: 5, regulation: 5, disruption: 3
  },
  newsQuery: '("electric utility" OR "power grid" OR "electricity demand" OR "data center power" OR "rate case")',

  overview: {
    definition: "Utilities generate, transmit, and distribute electricity (and gas and water) under a regulated bargain: monopoly service territories in exchange for government-set prices and returns. The grid they operate is often called the largest and most complex machine ever built.",
    howItWorks: [
      "The regulated model is unique in capitalism: a utility earns an allowed return (~9% to 10% ROE in the US) ON its invested capital, the 'rate base'. Spend $1B on approved grid assets and regulators let you charge customers enough to earn ~$95M a year on it, forever, with depreciation recovered too. Growth therefore equals capex: the only way to grow earnings is to invest more, which is why utilities are the one industry that celebrates spending.",
      "The bargain's referee is the rate case: periodic regulatory proceedings where the utility justifies its costs and regulators set prices. Everything strategic happens there: allowed ROE, what counts as prudent investment, who pays for storm damage or stranded coal plants. Regulatory relationships are the actual moat; territory maps are just geography.",
      "After 20 years of flat demand (efficiency offset growth), the load supercycle arrived: AI datacenters, electrification (EVs, heat pumps), and reshored manufacturing broke the flatline. US utilities now plan ~$1.1T of capex for 2025-2029 (EEI), rising toward $1.3T for 2026-2030 (S&P), with 2024 already at ~$35B transmission and ~$60B distribution spend. Interconnection queues stretch years; gigawatt-scale customers are signing bespoke deals; and nuclear plants are being restarted for single tenants.",
      "The tension is affordability vs buildout: every capex dollar lands on customer bills, politicians answer to ratepayers, and the industry must fund the biggest build in its history without triggering a rate revolt. That is the whole equity story: rate-base growth (6% to 8%+) compounding through allowed returns, gated by regulatory and political patience."
    ],
    history: [
      { era: "1882-1935", title: "Edison to the holding companies", text: "Pearl Street starts it; utility empires pyramid until the 1929 crash; PUHCA (1935) creates the regulated-monopoly template." },
      { era: "1950s-1970s", title: "The golden build", text: "Demand grows 7%/yr; nuclear promises 'too cheap to meter'; the grid nationalizes in most countries, stays investor-owned in the US." },
      { era: "1978-2001", title: "Deregulation experiments", text: "PURPA, merchant power, and California's 2000-01 crisis (and Enron) teach that electricity markets need careful design; the US ends up half-restructured." },
      { era: "2005-2020", title: "The flat decades", text: "Efficiency kills load growth; coal retires against gas and renewables; utilities grow via grid replacement and renewables rate-basing." },
      { era: "2022-present", title: "The load supercycle", text: "Datacenters, EVs, and factories end the flatline; capex plans reach $1.1T+ (2025-29); nuclear restarts and gigawatt interconnection deals mark the new era." }
    ],
    trends: [
      { title: "Datacenter demand shock", direction: "up", text: "AI campuses request gigawatts each; utilities are re-forecasting decades of load in single planning cycles and signing special contracts to ring-fence costs." },
      { title: "The capex supercycle", direction: "up", text: "~$1.1T US IOU capex 2025-2029: transmission, distribution hardening, generation: the biggest build since the golden era, all of it rate-base fuel." },
      { title: "Nuclear renaissance", direction: "up", text: "Restarts (Three Mile Island for Microsoft), life extensions, and SMR pipelines: carbon-free baseload got a datacenter-funded second act." },
      { title: "Affordability politics", direction: "shift", text: "Bills rising faster than inflation put allowed ROEs and cost allocation under pressure; who pays for AI's grid is the fight of the decade." },
      { title: "Grid resilience & wildfire risk", direction: "shift", text: "Storm hardening and wildfire liability (PG&E's bankruptcy the cautionary tale) turn climate adaptation into both capex program and tail risk." }
    ],
    outlook: "The best structural growth setup the sector has seen in two generations: legislated-quality demand growth, a $1T+ investable backlog, and premium customers (hyperscalers) willing to underwrite it. The constraints are political (rate shock), physical (supply chains, transformers, labor), and legal (wildfire liability). Utilities that navigate regulators well compound 6% to 8% rate-base growth plus a 3%+ yield: equity bonds with a growth kicker, at last."
  },

  structure: {
    suppliers: [
      { name: "Equipment makers (GE Vernova, Siemens Energy, Hitachi)", note: "Turbines, transformers (3-year lead times), switchgear: the buildout's bottleneck" },
      { name: "EPC & line contractors (Quanta class)", note: "The workforce actually building the grid" },
      { name: "Fuel suppliers", note: "Gas, uranium, and (declining) coal feed the generation fleet" },
      { name: "Copper, steel & cable", note: "The grid is metal; commodity costs flow into rate cases" }
    ],
    producers: [
      { name: "Investor-owned utilities (NextEra, Southern, Duke class)", note: "~70% of US customers; the rate-base compounders" },
      { name: "Public power & co-ops", note: "Municipal and rural systems: a third of the US map" },
      { name: "Independent power producers & merchants (Vistra, Constellation class)", note: "Unregulated generation selling into markets: the datacenter cycle's high-beta winners" },
      { name: "Grid operators (ISOs/RTOs, national TSOs)", note: "The air-traffic controllers of electrons" }
    ],
    distributors: [
      { name: "The wires themselves", note: "Transmission (high voltage, FERC-regulated) and distribution (state-regulated) monopolies" },
      { name: "Retail suppliers (where restructured)", note: "Texas-style competitive retail atop regulated wires" }
    ],
    customers: [
      { name: "Residential (~1/3 of US load)", note: "The voters whose bills set the politics" },
      { name: "Commercial & industrial", note: "The base load; factories returning via reshoring" },
      { name: "Datacenters (the marginal buyer)", note: "Gigawatt requests, special contracts, co-located generation deals" }
    ],
    regulators: [
      { name: "State PUCs", note: "Set retail rates and allowed ROEs: the true P&L authors" },
      { name: "FERC", note: "Transmission, wholesale markets, interconnection rules" },
      { name: "EPA & siting authorities", note: "Emissions and the decade-long permitting gauntlet" }
    ],
    capital: [
      { name: "Bond markets", note: "~50/50 debt in the capital structure; among the largest corporate issuers" },
      { name: "Equity markets", note: "The supercycle's marginal funding: issuance is back after a decade of buybacks" },
      { name: "Federal support (IRA credits, DOE loans)", note: "Tax credits subsidize the clean half of the buildout" },
      { name: "Hyperscaler contracts", note: "The new capital source: customers underwriting dedicated capacity" }
    ]
  },

  valueChain: {
    intro: "Electrons flow one way; money flows back through the meter and the rate case. Regulated wires are the annuity; merchant generation is the cycle's torque.",
    stages: [
      { id: "generation", name: "Generation", what: "Gas, nuclear, renewables, coal (retiring)", players: "IOUs + IPPs + renewables developers", valueCapture: 3,
        economics: { grossMargin: [20, 50], capitalIntensity: 5, concentration: 2 },
        linksTo: ["oil-gas", "nuclear", "solar", "wind"],
        deeper: "Split personality: regulated generation earns allowed returns; merchant generation earns market prices, and the datacenter squeeze made merchants (nuclear especially) the cycle's best story: existing carbon-free plants suddenly command premium contracts." },
      { id: "transmission", name: "Transmission", what: "High-voltage highways, FERC-regulated", players: "IOUs, transcos", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 3 },
        linksTo: ["copper-mining", "construction"],
        deeper: "The best-returning regulated asset class (FERC ROEs run above state ones) and the buildout's chokepoint: interregional lines take a decade to permit. ~$35B/yr US spend and rising." },
      { id: "distribution", name: "Distribution", what: "The last miles to every meter", players: "The local utility", valueCapture: 4,
        economics: { grossMargin: [35, 55], capitalIntensity: 5, concentration: 5 },
        linksTo: ["real-estate"],
        deeper: "The pure monopoly core (~$60B/yr US capex): undergrounding, hardening, and smart-meter modernization: politically safest spend, straight into rate base." },
      { id: "retail", name: "Retail & the meter", what: "Billing, rates, demand response", players: "Utilities + competitive retailers", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas"],
        deeper: "Where affordability politics lives: rate design (time-of-use, demand charges) decides who pays for the buildout, and AI-era cost allocation is the emerging battle." },
      { id: "flexibility", name: "Storage & flexibility", what: "Batteries, demand response, VPPs", players: "Developers, utilities, aggregators", valueCapture: 3,
        economics: { grossMargin: [15, 35], capitalIntensity: 4, concentration: 2 },
        linksTo: ["batteries", "cloud"],
        deeper: "The grid's new shock absorber: storage arbitrages the renewable duck curve and defers wires spend; virtual power plants turn customers into capacity." }
    ]
  },

  financials: {
    businessModel: [
      "The regulated algebra: Earnings = Rate base × equity share × allowed ROE. Growth = capex above depreciation. The 2025-2029 plan (~$1.1T US) implies 6% to 8%+ rate-base CAGRs at the growthiest names, which, plus a ~3.5% dividend, is the whole bull case. The bear case is the same equation's denominators: equity issuance to fund it and regulators trimming ROEs when bills bite.",
      "Watch three seams: regulatory lag (costs land before rates catch up: inflation's quiet tax on utilities), the gap between allowed and EARNED ROE (execution truth), and merchant exposure (unregulated fleets turn the sector's safest names into power-price torque: Constellation-class nuclear owners re-rated 3x on the datacenter bid). Wildfire liability is the tail that turns bonds into options (PG&E: the only utility bankruptcy caused by climate physics)."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 95, capitalIntensity: 98, pricingPower: 35, cyclicality: 10, operatingLeverage: 35 },
    lines: [
      { label: "Rate base & capex plan", note: "The growth engine: 5-year capex plans are the guidance that matters" },
      { label: "Allowed vs earned ROE", note: "~9.5% allowed US average; earning it is execution" },
      { label: "Load growth", note: "The new variable: datacenter interconnection requests re-rate everything" },
      { label: "Equity needs", note: "The dilution question every capex plan carries" },
      { label: "Regulatory calendar", note: "Rate cases pending = earnings visibility (or risk)" }
    ],
    unitEconomics: {
      unit: "per $1B of approved rate-base investment",
      items: [
        { label: "Allowed return (equity half, ~9.5% ROE)", value: "~$48M/yr", note: "earned for the asset's regulatory life" },
        { label: "Depreciation recovery", value: "full cost over 30 to 60 yrs", note: "customers repay the principal too" },
        { label: "Earnings growth math", value: "6% to 8% rate-base CAGR", note: "the supercycle's core equation" }
      ]
    }
  },

  kpiRefs: ["energy-capacity-factor", "bank-roe", "re-caprate"],
  kpiLocal: [
    {
      id: "util-ratebase", name: "Rate Base Growth", industries: ["utilities"],
      definition: "The compound growth of the regulated asset base on which returns are earned.",
      formula: "Rate base CAGR = (Capex − depreciation − retirements) growth path, regulator-approved",
      interpretation: "The sector's EPS algorithm: rate base × allowed ROE = regulated earnings. The 2025-29 US plans imply the fastest growth in generations.",
      healthy: ">= 7% CAGR with manageable equity needs", warning: "< 4%, or growth funded by heavy dilution",
      benchmark: { median: "US IOUs guiding 6% to 8% (asOf 2025); leaders 9%+" },
      investorLens: "Multiple premiums track rate-base growth almost mechanically; check the equity-issuance footnote before believing the CAGR.",
      operatorLens: "The capital plan IS the strategy; regulatory approval risk is the real constraint.",
      mistakes: ["Ignoring regulatory lag and earned-vs-allowed gaps; a 10% ROE never earned is a 9-handle story."],
      trend: "Plans revised upward every quarter of the datacenter era."
    }
  ],

  health: {
    intro: "Utility health is regulatory relationship quality first, balance-sheet capacity second, and physical-risk exposure always.",
    pillars: [
      { name: "Regulatory environment", weight: 30, metrics: "Jurisdiction constructiveness, allowed vs earned ROE, rate-case cadence", healthy: "Constructive states, earned ≈ allowed", warning: "Contentious PUCs, growing lag" },
      { name: "Rate-base growth & funding", weight: 25, metrics: "Capex plan credibility, equity needs, FFO/debt", healthy: "7%+ CAGR, FFO/debt > 14%", warning: "Growth requiring serial dilution or credit slippage" },
      { name: "Load & customer mix", weight: 15, metrics: "Datacenter pipeline, industrial reshoring, affordability headroom", healthy: "Growing load with contracted large customers", warning: "Bill increases outpacing political tolerance" },
      { name: "Physical & climate risk", weight: 15, metrics: "Wildfire exposure, storm history, liability regimes", healthy: "Hardened systems, liability caps", warning: "PG&E-pattern exposure without legal protection" },
      { name: "Generation transition", weight: 15, metrics: "Stranded-asset risk, clean pipeline, fuel diversity", healthy: "Funded transition inside rate base", warning: "Coal concentration facing disallowance" }
    ],
    scoringNote: "Utilities fail politically before they fail financially: score the regulator relationship the way you would score credit."
  },

  valuation: {
    intro: "Utilities trade as regulated bond-plus-growth: P/E versus rate-base growth, with merchant exposure valued on power curves.",
    methods: [
      { name: "P/E vs rate-base growth", use: "The sector standard: pay more P/E for faster regulated CAGR", avoid: "Blending merchant earnings into the regulated multiple", strengths: "Matches the earnings algorithm", weaknesses: "Hides dilution and lag", range: { low: 14, high: 22, asOf: 2025, note: "premium names with 8%+ growth at the top; laggards at the bottom" } },
      { name: "Dividend yield + growth (DDM)", use: "The income lens: yield plus rate-base growth ≈ total return", avoid: "High-payout names funding capex with the dividend's future", strengths: "Honest for the buyer base", weaknesses: "Rate-sensitive comparisons shift with treasuries", range: { low: 3, high: 4.5, asOf: 2025, note: "% yields; spread to the 10-year is the sector's valuation weather" } },
      { name: "EV/EBITDA (merchant/IPP)", use: "Unregulated fleets on power-price torque", avoid: "Applying it to regulated wires", strengths: "Captures the datacenter-era optionality", weaknesses: "EBITDA rides the power curve", range: { low: 8, high: 14, asOf: 2025, note: "nuclear-heavy merchants re-rated to the top on AI contracts" } },
      { name: "Sum-of-parts", use: "Hybrids: regulated core + merchant + renewables development arms", avoid: "Letting the exciting part hide the funding needs", strengths: "The honest frame for NextEra-class complexity", weaknesses: "Assumption-heavy", range: { low: 0, high: 0, asOf: 2025, note: "the analyst's default for diversified names" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a regulated utility quickly: EBITDA times a regulated-quality multiple, minus the sector's structural debt.",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($B)", min: 0.5, max: 30, step: 0.5, value: 8, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 16, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: 0, max: 100, step: 1, value: 30, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk's classic bond proxy just became a growth story: the sector now offers legislated-quality demand growth (datacenters), a $1T+ capex runway converting straight into EPS, and a 3%+ yield, at multiples still arguing with the 10-year Treasury. The book splits regulated compounders (owned for the algebra) from merchant power (traded as AI-era torque).",
    debates: [
      { topic: "Is datacenter load growth durable or double-counted?", bull: "Interconnection requests exceed anything in modern history, hyperscalers sign 15-year contracts and restart nuclear plants: this is contracted, creditworthy demand that survives any AI shakeout because compute migrates, it doesn't disappear.", bear: "Requests are options, not orders: developers file the same gigawatt in 5 queues; AI efficiency gains (chips, cooling, models) could halve energy-per-compute; and utilities building for phantom load will strand it on ratepayers, the 1970s nuclear mistake in cloud clothing." },
      { topic: "Who pays: can the buildout survive affordability politics?", bull: "Special large-load tariffs ring-fence datacenter costs, IRA credits subsidize the clean half, and regulators historically approve growth capex when jobs come with it: the compact bends but holds.", bear: "Residential bills are already outrunning inflation; every rate case becomes a referendum on subsidizing trillion-dollar tech firms; ROE cuts and disallowances are how the politics resolve, and they land straight on the sector's multiple." },
      { topic: "Merchant nuclear premium: durable re-rating or cycle top?", bull: "Existing carbon-free baseload is irreplaceable on any timeline that matters; 20-year hyperscaler PPAs at premium prices converted spot-price torque into contracted annuities: the re-rating is a business-model upgrade.", bear: "The premium prices in perfection: new gas, storage, and eventually SMRs cap long-run power prices, political backlash against 'datacenters jumping the queue' is building, and merchants have round-tripped every prior cycle." }
    ],
    cycle: {
      where: "Early innings of the first demand supercycle since the 1960s, with capex plans (~$1.1T/5yr) still being revised upward and the equity market splitting utilities into growth-utilities and legacy-yield names.",
      drivers: "Load growth (the new variable), interest rates (the old one: the sector trades off the 10-year), regulatory outcomes, and power prices for the merchant tail.",
      leads: [
        "Interconnection queue additions and large-load tariff filings (state PUC dockets, free)",
        "EEI capex plan updates and company 5-year plans (raised = re-rated)",
        "10-year Treasury yield: the sector's valuation gravity",
        "Rate-case outcomes: allowed ROE trend across states",
        "Forward power curves (PJM/ERCOT) for the merchant book"
      ]
    },
    exposure: [
      { vehicle: "Growth-regulated compounders (NextEra class)", note: "The 8%-CAGR-plus-yield core" },
      { vehicle: "Merchant power / nuclear (Constellation, Vistra class)", note: "The AI-power torque trade; contracted PPAs de-risk it progressively" },
      { vehicle: "Transmission-heavy names", note: "FERC returns + the least political spend" },
      { vehicle: "Grid suppliers (GE Vernova, Quanta class)", note: "The picks-and-shovels: capex beta without rate-case risk" },
      { vehicle: "XLU archetype", note: "The rate-sensitivity beta; increasingly bifurcated inside" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Capex plan revisions and load-growth guidance: the re-rating events of this cycle" },
      { when: "Rate-case decisions (state calendars)", what: "Allowed ROEs and large-load tariffs set precedent state by state" },
      { when: "FOMC / 10-year moves", what: "The old reflex: yield-proxy trading never fully left" },
      { when: "Hyperscaler power announcements", what: "Each nuclear restart or gigawatt PPA re-prices the merchant complex" }
    ],
    data: [
      { series: "EIA electricity data & outlooks", source: "eia.gov (free)", why: "Load, capacity, prices: the sector's census" },
      { series: "FERC filings & interconnection data", source: "ferc.gov (free)", why: "The queue is the demand pipeline" },
      { series: "EEI capex & financial reviews", source: "eei.org (free summaries)", why: "The industry's own $1.1T plan, updated" },
      { series: "State PUC dockets", source: "state commission sites (free)", why: "Rate cases: the primary documents of the P&L" }
    ],
    playbook: [
      { regime: "Rates rising", behavior: "The classic headwind: bond-proxy de-rating, funding costs up. The supercycle's growth is the first credible offset in decades: watch the correlation weaken." },
      { regime: "Recession", behavior: "The textbook defensive: demand barely moves, dividends hold, sector outperforms; regulated earnings do not read GDP." },
      { regime: "Inflation", behavior: "Negative through regulatory lag (costs now, rates later); riders and trackers mitigate; merchants with power-price pass-through actually benefit." },
      { regime: "Risk-off", behavior: "A hiding place, with a new wrinkle: the merchant/AI-power names now carry growth-stock beta inside the 'safe' sector. Know which utility you own." }
    ]
  },

  players: [
    { name: "NextEra Energy", role: "The growth-utility archetype", country: "US", real: true, note: "Florida regulated base + the world's largest renewables developer" },
    { name: "Southern / Duke / AEP / Exelon", role: "The regulated core", country: "US", real: true, note: "Multi-state rate-base compounders with $40B+ capex plans each" },
    { name: "Constellation / Vistra", role: "Merchant power winners", country: "US", real: true, note: "Nuclear and gas fleets re-rated by the datacenter bid; TMI restart for Microsoft" },
    { name: "National Grid / Iberdrola / Enel", role: "The global networks", country: "UK", real: true, note: "Transatlantic wires and renewables at sovereign scale" },
    { name: "GE Vernova / Siemens Energy / Hitachi Energy", role: "The equipment chokepoint", country: "US", real: true, note: "Turbines and transformers with multi-year backlogs" },
    { name: "State Grid Corp of China", role: "The largest utility on Earth", country: "CN", real: true, note: "1.1B customers; UHV transmission at continental scale" }
  ],

  geography: [
    { country: "US", role: "The investable epicenter: ~$1.1T capex plan", note: "Datacenter demand concentrated in Virginia, Texas, Georgia" },
    { country: "CN", role: "Half the world's grid build", note: "State Grid's UHV network is the century's infrastructure project" },
    { country: "DE", role: "The Energiewende lab", note: "Renewables integration lessons, at a price" },
    { country: "IN", role: "The growth frontier", note: "Fastest large-market demand growth; solar + coal in tandem" }
  ],

  cycles: [
    { year: 1935, title: "PUHCA and the compact", kind: "shift", text: "Holding-company abuses birth the regulated-monopoly bargain. Lesson: the sector's structure is a political settlement, revisable by politics." },
    { year: 1979, title: "Three Mile Island", kind: "bust", text: "The accident freezes US nuclear for 40 years; cost overruns strand billions. Lesson: build-cycle overreach lands on ratepayers and shareholders for decades." },
    { year: 2001, title: "California crisis + Enron", kind: "bust", text: "Botched deregulation meets market manipulation; blackouts and bankruptcy. Lesson: electricity is politics with electrons." },
    { year: 2019, title: "PG&E's wildfire bankruptcy", kind: "bust", text: "The first climate-change bankruptcy: liability without cap. Lesson: physical risk can turn the safest sector's names into options overnight." },
    { year: 2024, title: "The TMI restart", kind: "boom", text: "Microsoft contracts to reopen Three Mile Island; the symbol of the demand supercycle. Lesson: when hyperscalers underwrite your capex, the growth is real: the allocation fight begins." }
  ],

  risks: [
    { name: "Affordability backlash / ROE compression", severity: 4, likelihood: 4, transmission: "Bills outrun politics → PUCs cut allowed returns and disallow capex → the growth algebra and the multiple deflate together." },
    { name: "Phantom load / overbuild", severity: 3, likelihood: 3, transmission: "Duplicate interconnection requests + AI efficiency → capacity built for demand that consolidates → stranded costs fight for a payer." },
    { name: "Rates regime", severity: 3, likelihood: 3, transmission: "A 100bp move in the 10-year re-prices the whole sector; funding $1T+ into higher rates squeezes both dilution and coverage." },
    { name: "Wildfire & storm liability", severity: 4, likelihood: 2, transmission: "Inverse condemnation-style liability → PG&E-pattern equity destruction wherever climate meets old wires and weak legal caps." },
    { name: "Supply chain (transformers, turbines, labor)", severity: 3, likelihood: 4, transmission: "3-year transformer lead times and crew shortages slip the capex plans that the multiples already price." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Utilities run the power grid: generating electricity and delivering it through wires to every building. Because you cannot choose your wires company, governments set their prices and guarantee them a fair profit on what they invest. After 20 flat years, AI datacenters and electric cars are making electricity demand grow again: so utilities are building more than they have in generations."] },
    L2: { title: "Intermediate", text: ["The regulated model: earnings = rate base (approved investment) × allowed ROE (~9.5%). Growth means capex; the rate case is where prices, returns, and prudence get decided. The US industry plans ~$1.1T of investment for 2025-2029, driven by datacenters, electrification, and grid hardening. Merchant generators (unregulated) sell at market prices: the high-beta corner of a low-beta sector."] },
    L3: { title: "Advanced", text: ["Analyze: jurisdiction quality, allowed-vs-earned ROE, rate-base CAGR against equity needs and FFO/debt, load-growth pipeline credibility, and physical-risk exposure. Valuation: P/E scaled to rate-base growth for regulated; EV/EBITDA on power curves for merchants; DDM for the income base. The 10-year Treasury remains the sector's gravitational field: the supercycle is the first force strong enough to bend it."] },
    L4: { title: "Expert", text: ["Trade the dockets: large-load tariff designs, interconnection reforms, and ROE trends state by state; track queue additions against announced hyperscaler capex for load-growth truth. The merchant nuclear re-rating is the cycle's defining trade: contracted PPAs progressively convert it from power-price torque to annuity. Tail risks to price: affordability revolts, phantom-load overbuild, and wildfire liability without caps."] },
    L5: { title: "Institutional", text: ["Allocator's frame: the sector now offers two distinct exposures: regulated compounders (bond-plus-growth: 6% to 8% rate-base CAGR + 3%+ yield, defensively correlated) and AI-power torque (merchant nuclear/gas re-rating on datacenter contracts, growth-stock behavior). The decade's meta-question: whether the political compact stretches to fund history's largest grid build without breaking allowed returns: every utility DCF quietly assumes it does."] }
  },

  quiz: [
    { q: "A regulated utility grows earnings primarily by:", choices: ["Raising prices freely", "Investing more approved capital: earnings = rate base × allowed ROE", "Cutting service", "Trading power"], answer: 1, explain: "The regulated algebra: spend prudently, earn ~9.5% on it for decades. Capex IS the growth strategy." },
    { q: "US investor-owned utilities plan roughly how much capex for 2025-2029?", choices: ["$100B", "$400B", "~$1.1 trillion", "$5T"], answer: 2, explain: "EEI's tally: ~$1.1T, the biggest build since the golden era: datacenters, electrification, hardening." },
    { q: "The sector's classic valuation gravity is:", choices: ["Oil prices", "The 10-year Treasury yield", "Copper", "The dollar"], answer: 1, explain: "Bond-proxy trading: yields up, utilities down: the supercycle's growth is the first credible counterweight in decades." },
    { q: "Merchant nuclear plants re-rated because:", choices: ["Uranium got cheap", "Hyperscalers signed long-term premium PPAs for existing carbon-free baseload (even restarting Three Mile Island)", "Regulation ended", "Coal returned"], answer: 1, explain: "Existing clean baseload is irreplaceable on AI timelines; contracts converted spot torque into annuities." },
    { q: "Regulatory lag hurts utilities during:", choices: ["Deflation", "Inflation: costs land now, rate relief comes later", "Recessions", "Elections only"], answer: 1, explain: "The gap between spending and recovery is the sector's quiet inflation tax; trackers and riders are the mitigations." },
    { q: "PG&E's 2019 bankruptcy taught that:", choices: ["Utilities cannot fail", "Wildfire liability can turn the safest sector's equity into an option", "California ran out of power", "Rates were too low"], answer: 1, explain: "Climate physics plus inverse-condemnation liability produced the first climate-driven utility bankruptcy." },
    { q: "The biggest political risk of the datacenter buildout is:", choices: ["Too much clean energy", "Residential ratepayers subsidizing hyperscaler load: affordability backlash hitting allowed ROEs", "Foreign ownership", "Nothing"], answer: 1, explain: "Who pays for AI's grid is the fight of the decade; special large-load tariffs are the attempted answer." },
    { q: "In recessions, utilities historically:", choices: ["Fall hardest", "Outperform: demand and regulated earnings barely move", "Track banks", "Suspend dividends"], answer: 1, explain: "The textbook defensive: electrons are the last bill households skip." }
  ],

  sources: [
    { name: "EEI: IOU capex ~$1.1T 2025-2029", url: "https://www.utilitydive.com/news/investor-owned-utilities-spending-more-than-ever-eei/802315/", feeds: "capex plans" },
    { name: "S&P Global: ~$1.3T 2026-30 forecast", url: "https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/04/surging-energy-demand-puts-us-utility-capex-forecast-near-1-3t-in-2026-30", feeds: "capex outlook" },
    { name: "EIA electricity data", url: "https://www.eia.gov/electricity/", feeds: "load, prices, capacity" },
    { name: "FERC", url: "https://www.ferc.gov", feeds: "transmission, interconnection" }
  ]
};
