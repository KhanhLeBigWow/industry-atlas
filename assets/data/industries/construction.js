/* Industry Atlas - CONSTRUCTION & ENGINEERING (full module, research-backed)
 * Anchors: ~$13T global construction ecosystem spend, ~13% of world GDP (McKinsey,
 * "The Next Normal in Construction"); narrower output measure ~$9.5T in 2025 with
 * residential falling 6.7% on China's unwind (Oxford Economics Global Construction
 * Outlook, Q2 2025); labor productivity grew ~1%/yr for 2 decades vs 2.8% for the
 * world economy, a $1.6T annual value-add gap (McKinsey Global Institute,
 * "Reinventing Construction", Feb 2017); US industry needed ~439,000 net new workers
 * in 2025 after ~501,000 in 2024, ~349,000 projected for 2026, mostly retirements
 * (Associated Builders and Contractors, 2025); IIJA authorized $1.2T incl $550B new
 * spending, with $275.1B (47%) obligated and $119.4B (21%) outlaid of $580.6B as of
 * Dec 31, 2024 (GAO-25-107243); 98% of megaprojects over $1B run more than 30% over
 * budget with an average overrun of 80% (McKinsey, 2015), and only 0.5% of 16,000+
 * database projects deliver on budget, on time, with promised benefits (Flyvbjerg);
 * modular construction market ~$95-110B in 2025, growing ~7-8%/yr (Fortune Business
 * Insights et al., 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["construction"] = {
  meta: {
    id: "construction", name: "Construction & Engineering", sector: "industrials", status: "full",
    tagline: "A $13T industry that builds civilization at 2% net margins and 1% productivity growth: the money is made everywhere except the middle of the contract.",
    marketSize: { value: 13, unit: "$T", asOf: 2024, note: "global construction ecosystem spend, ~13% of world GDP (McKinsey); Oxford Economics' narrower output measure runs ~$9.5T (2025)" },
    cagr: { value: 3, range: [2, 4], horizon: "2025-2030" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 2, regulation: 4, disruption: 2
  },
  newsQuery: '("construction industry" OR "infrastructure spending" OR megaproject OR "engineering and construction" OR "construction backlog" OR "cost overrun")',

  overview: {
    definition: "Construction & engineering designs and erects the built world: housing, offices, factories, roads, grids, fabs, and data centers. It is the planet's largest industry by spend (~$13T, roughly 13% of global GDP per McKinsey) and among its worst by economics: hyper-fragmented, brutally cyclical, and organized so that the party in the middle, the contractor, warehouses everyone else's risk.",
    howItWorks: [
      "The industry is a project economy, not a product economy. Every job is a prototype: a unique design, on a unique site, built by a temporary coalition of an owner, a design firm, a general contractor (GC), and dozens of subcontractors, assembled by competitive bid and disbanded at completion. Nothing carries over: no factory learning curve, no installed base, no recurring revenue. That structure explains the sector's defining pathology: labor productivity grew ~1% a year for 2 decades against 2.8% for the world economy (McKinsey Global Institute), leaving a $1.6T annual value-add gap on the table.",
      "Who bears risk is written in the contract, and the contract is the business model. Fixed-price (lump-sum) work makes the contractor an insurer of cost, weather, labor, and inflation for a 5% to 8% bid margin: the downside is many times the upside. Cost-plus and reimbursable structures push risk back to the owner for a lower fee. The industry's graveyard is filled with firms that bid fixed-price megaprojects at the top of a cycle: 98% of $1B+ megaprojects run more than 30% over budget, with an average overrun of 80% (McKinsey), and across Flyvbjerg's 16,000+ project database only 0.5% deliver on budget, on time, with the promised benefits.",
      "The cash mechanics are stranger than the margins. Contractors bill owners ahead of the costs they incur (billings in excess of cost), so a growing, well-run contractor runs on negative working capital: the owner's money funds the build, and float earns interest. The mirror image is retainage: owners hold back 5% to 10% of every invoice until completion, and the accounting (percentage-of-completion) books estimated margins years before the truth arrives. Growth throws off cash; a shrinking backlog gives it all back at exactly the wrong moment.",
      "The profit pool sits at the edges, not the center. Materials oligopolies (cement, aggregates), equipment makers and rental fleets, specialty trade contractors with scarce crafts (electrical, mechanical), and concession owners who operate the finished asset for decades all out-earn the GC in the middle. Vinci, the sector's most instructive company, generates most of its profit from toll roads and airports, not construction. Meanwhile demand has bifurcated: private residential is hostage to rates and China's property unwind (global residential output fell 6.7% in 2025 per Oxford Economics), while public infrastructure (the $1.2T IIJA tail) and AI-era private capex (data centers, chip fabs) boom."
    ],
    history: [
      { era: "1850-1945", title: "Steel and the skyline", text: "Bessemer steel, elevators, and reinforced concrete invent the vertical city; the Empire State Building rises in 410 days (1931), a productivity benchmark the industry has never reclaimed." },
      { era: "1945-1973", title: "The great buildout", text: "Postwar housing, the 1956 Interstate Highway Act, and mass suburbanization: construction's golden age of volume, standardization, and rising productivity." },
      { era: "1980-2007", title: "Fragmentation and leverage", text: "Subcontracting atomizes the industry; the UK invents PFI/PPP concessions; Spain and the US inflate housing bubbles; China's urbanization begins pouring half the world's cement." },
      { era: "2008-2020", title: "The lost decade", text: "The GFC cuts US housing starts from ~2.2M to ~550K; Spanish construction implodes; Chinese stimulus keeps global volume alive while productivity flatlines at ~1% growth (MGI)." },
      { era: "2021-present", title: "Policy capex and the labor wall", text: "Evergrande's default ends China's residential supercycle; the IIJA ($1.2T), CHIPS, and the AI data-center boom re-anchor demand in non-residential; the US needs ~439,000 net new workers (ABC, 2025) it cannot find." }
    ],
    trends: [
      { title: "Labor scarcity as the binding constraint", direction: "shift", text: "ABC pegged the US gap at ~501,000 workers in 2024 and ~439,000 in 2025; the 2026 need (~349,000) is driven mostly by retirements. Wages and schedules now gate projects the way capital once did." },
      { title: "Public purse plus AI capex", direction: "up", text: "The IIJA still had ~53% of its $580.6B unobligated as of end-2024 (GAO): a multi-year tail. Data centers and chip fabs added a private megaproject wave the industry did not forecast." },
      { title: "China residential unwind", direction: "down", text: "The world's largest construction market is shrinking its largest segment; Oxford Economics had global residential output falling 6.7% in 2025, dragging total world output." },
      { title: "Modular and industrialized construction", direction: "up", text: "A ~$95-110B market growing ~7-8%/yr as labor scarcity forces factory methods; the promise is real, but Katerra's $2B+ collapse (2021) shows the factory break-even problem in downturns." },
      { title: "Digitalization, finally", direction: "shift", text: "Construction ranks second-to-last in US sector digitization (MGI). BIM, drones, and AI takeoff/scheduling tools are landing now, aimed squarely at the $1.6T productivity gap." }
    ],
    outlook: "A split-screen decade: rate-sensitive residential and commercial grind sideways while public infrastructure, grid, and AI/manufacturing capex run a genuine boom. The constraint has moved from demand to labor and delivery capacity, which favors whoever owns scarce crafts, fleets, and materials rather than whoever bids lowest. The structural question is whether industrialized methods finally crack the 1% productivity curse; the cyclical one is what happens to bid discipline, and 2 years later to margins, when this much money chases this few workers."
  },

  structure: {
    suppliers: [
      { name: "Cement, aggregates & concrete (Holcim, Heidelberg, CRH, Cemex)", note: "Regional oligopolies: heavy, cheap-per-ton materials travel badly, so local share is pricing power" },
      { name: "Steel, lumber & building products", note: "The cost lines that swing bids: rebar, structural steel, lumber futures" },
      { name: "Equipment makers & rental (Caterpillar, Komatsu, United Rentals)", note: "Contractors rent the cycle instead of owning it; rental penetration keeps rising" },
      { name: "Distribution (Ferguson, ABC Supply class)", note: "The pick-up counter of the industry: fragmented customers, steady spreads" }
    ],
    producers: [
      { name: "Global EPC & GC groups (Vinci, Bouygues, ACS/Turner, Bechtel, China State Construction)", note: "Huge revenue, thin margins; the largest builder on Earth is Chinese and state-owned" },
      { name: "Specialty trade contractors (Quanta, EMCOR, Comfort Systems)", note: "Electrical and mechanical crafts: the scarce, re-rated end of the labor shortage" },
      { name: "Homebuilders (D.R. Horton, Lennar class)", note: "Really land-and-financing businesses that subcontract the building" },
      { name: "Design & engineering (AECOM, Jacobs, WSP, Arcadis)", note: "Asset-light fee earners at the front of every project" }
    ],
    distributors: [
      { name: "Competitive bid + developer channel", note: "Work is won job-by-job through bids, negotiated contracts, and framework agreements; relationships and prequalification are the shelf space" }
    ],
    customers: [
      { name: "Governments", note: "Roads, transit, water, defense: the countercyclical purse (IIJA, national infrastructure plans)" },
      { name: "Private developers & owners", note: "Residential and commercial: the rate-sensitive half of demand" },
      { name: "Corporates & hyperscalers", note: "Fabs, data centers, factories: the new megaproject clients with real balance sheets" },
      { name: "Households", note: "Repair, remodel, and self-build: the quiet, stable tail of spend" }
    ],
    regulators: [
      { name: "Permitting & building codes", note: "Local by nature: zoning, codes, and inspections set the clock speed of everything" },
      { name: "Safety authorities (OSHA class)", note: "Construction is among the deadliest major industries; safety records price into bids and insurance" },
      { name: "Environmental review (NEPA class)", note: "Years-long approvals are often the true critical path of infrastructure" }
    ],
    capital: [
      { name: "Owners' project finance & lenders", note: "Construction loans, muni bonds, and federal programs fund the work; contractors mostly ride others' capital" },
      { name: "Surety bonds", note: "The sector's unique credit layer: bonding capacity is a contractor's real balance sheet constraint" },
      { name: "Infrastructure funds & PPP equity", note: "Patient capital that owns the finished asset; concessions turned builders into toll collectors" }
    ]
  },

  valueChain: {
    intro: "From quarry to concession: value pools at the two ends of the chain, in materials oligopolies and long-life asset ownership, while the contractor in the middle warehouses the risk for single-digit margins.",
    stages: [
      { id: "materials", name: "Materials & products", what: "Cement, aggregates, steel, lumber, fixtures", players: "Holcim, Heidelberg, CRH, Cemex, steelmakers", valueCapture: 4,
        economics: { grossMargin: [15, 30], capitalIntensity: 5, concentration: 4 },
        linksTo: ["cement", "steel", "mining", "forestry-paper"],
        deeper: "Heavy materials are local monopolies in disguise: hauling aggregates more than ~50 miles destroys the economics, so regional share means pricing power. This layer captures inflation the contractor cannot pass on." },
      { id: "design", name: "Design & engineering", what: "Architecture, engineering, program management", players: "AECOM, Jacobs, WSP, Arcadis", valueCapture: 3,
        economics: { grossMargin: [30, 50], capitalIntensity: 1, concentration: 2 },
        linksTo: ["real-estate", "government"],
        deeper: "Asset-light fees on headcount: the best risk-adjusted seat in the chain. MGI ranked inadequate design processes among the top causes of the productivity gap; design decisions commit ~80% of a project's cost before ground breaks." },
      { id: "contracting", name: "General contracting & EPC", what: "Bidding, integration, delivery of whole projects", players: "Vinci, Bechtel, ACS/Turner, Fluor, China State", valueCapture: 2,
        economics: { grossMargin: [5, 12], capitalIntensity: 2, concentration: 2 },
        linksTo: ["government", "real-estate", "oil-gas"],
        deeper: "The risk warehouse: fixed-price contracts convert the GC into an uncompensated insurer. With 98% of $1B+ megaprojects running 30%+ over budget (McKinsey), one bad job can erase a decade of 3% net margins: which is why the smartest players migrated to cost-plus, construction management, and concessions." },
      { id: "trades", name: "Specialty trades", what: "Electrical, mechanical, plumbing, grid, finishes", players: "Quanta, EMCOR, Comfort Systems, thousands of locals", valueCapture: 4,
        economics: { grossMargin: [12, 20], capitalIntensity: 2, concentration: 1 },
        linksTo: ["utilities", "data-infrastructure"],
        deeper: "Where the labor shortage becomes pricing power: scarce crafts (electricians above all) plus structural demand from grid, data centers, and electrification re-rated this layer from cyclical sub to strategic partner. The most fragmented layer, hence the sector's busiest roll-up territory." },
      { id: "equipment", name: "Equipment & rental", what: "Machines, fleets, tools, telematics", players: "Caterpillar, Komatsu, United Rentals, Ashtead", valueCapture: 4,
        economics: { grossMargin: [25, 40], capitalIntensity: 4, concentration: 3 },
        linksTo: ["manufacturing", "logistics"],
        deeper: "The picks-and-shovels trade on the whole sector: rental converts contractors' capex into opex and earns fleet-utilization economics across thousands of customers. Secondhand equipment values are one of the industry's most honest cycle gauges." },
      { id: "ownership", name: "Concessions & asset ownership", what: "Toll roads, airports, PPPs, developed real estate", players: "Vinci, Ferrovial, ACS/Abertis heritage, infra funds", valueCapture: 5,
        economics: { grossMargin: [40, 70], capitalIntensity: 5, concentration: 2 },
        linksTo: ["real-estate", "private-equity", "banking", "insurance"],
        deeper: "The escape hatch from contracting economics: build the asset once, collect tolls for 30 to 75 years. Vinci's concessions arm produces the majority of group profit on a fraction of revenue: the sector's clearest lesson in where to sit." }
    ]
  },

  financials: {
    businessModel: [
      "Read a contractor's P&L as an insurance book, not a factory. Revenue is backlog burning at estimated margins under percentage-of-completion accounting: the reported margin is a forecast, and the difference between margin at bid and margin at completion (the fade) is where truth lives. Contract mix is the risk disclosure: fixed-price work carries the fat tail, cost-plus and construction-management fees carry the quality. Net margins of 2% to 4% mean a single 10% overrun on a large lump-sum job (the megaproject base rate, per McKinsey and Flyvbjerg) can vaporize years of earnings.",
      "Cash is the better statement. Healthy contractors grow with negative working capital (billings ahead of costs: the owner funds the job), so expansion throws off float and contraction consumes it; retainage of 5% to 10% ages on the balance sheet until completion. The edges of the chain keep different books entirely: materials firms earn oligopoly spreads on tons, rental fleets earn utilization on iron, design firms bill hours, and concession owners collect inflation-linked tolls for decades. Same industry, 5 different P&L species: never apply one multiple to all of them."
    ],
    fingerprint: { grossMargin: 12, recurringRevenue: 20, capitalIntensity: 30, pricingPower: 25, cyclicality: 85, operatingLeverage: 45 },
    lines: [
      { label: "Backlog & book-to-burn", note: "The demand tape: new awards vs revenue burned; 12-24 months of cover is typical for GCs" },
      { label: "Contract mix", note: "Fixed-price share = risk warehoused; cost-plus/CM share = fee quality" },
      { label: "Gross margin fade", note: "Margin at completion vs at bid: the honesty metric of the estimating machine" },
      { label: "Working capital float", note: "Billings in excess vs unbilled receivables: growth funds itself, shrinkage bites" },
      { label: "Write-downs & claims", note: "Project charges and unresolved claims: where a decade of margin goes to die" }
    ],
    unitEconomics: {
      unit: "per $100M fixed-price project (illustrative)",
      items: [
        { label: "Bid gross margin", value: "5% to 8%", note: "before contingency; won in competition against 4 to 8 rivals" },
        { label: "Contingency", value: "2% to 3%", note: "the entire buffer against weather, labor, and inflation" },
        { label: "A 10% cost overrun", value: "turns ~$6M of profit into ~($4M)", note: "the asymmetry that defines the industry" },
        { label: "Retainage held by owner", value: "5% to 10%", note: "released at completion; the slowest dollars in the deal" }
      ]
    }
  },

  kpiRefs: ["def-backlog"],
  kpiLocal: [
    {
      id: "constr-margin-fade", name: "Contract Margin Fade", industries: ["construction"],
      definition: "The drift between the gross margin estimated at contract award and the margin realized at completion, tracked across the project portfolio.",
      formula: "Fade = margin at completion (%) minus margin at bid (%), by project vintage; portfolio net fade per year",
      interpretation: "Percentage-of-completion accounting reports estimates, so fade is where reality surfaces. Chronic negative fade means the estimating machine, the contract mix, or the bid discipline is broken: the megaproject base rate (98% of $1B+ jobs 30%+ over budget) shows how bad the tail gets.",
      healthy: "Flat-to-positive net fade; write-ups from closed-out claims", warning: "Serial negative fade; repeated single-project charges" },
    {
      id: "constr-book-to-burn", name: "Book-to-Burn & Backlog Months", industries: ["construction"],
      definition: "New contract awards divided by revenue recognized in the period, with backlog expressed as months of forward revenue.",
      formula: "Book-to-burn = new awards / revenue; backlog months = backlog / (trailing revenue / 12)",
      interpretation: "Above 1.0x the future is growing; below it the firm is eating its seed corn. Quality matters as much as size: margin embedded in backlog, funded vs merely awarded, and customer concentration decide whether backlog is an asset or a liability.",
      healthy: "Book-to-burn > 1.0x at stable or rising embedded margins", warning: "Backlog rising only because burn slowed; margin-dilutive mega-awards" }
  ],

  health: {
    intro: "Contractor health is contract discipline and cash conversion; the sector's health is labor supply, public funding flow, and the private capex cycle. The income statement lies until projects close: cash and claims disclosures tell the truth first.",
    pillars: [
      { name: "Contract discipline & mix", weight: 30, metrics: "Fixed-price share, bid-margin trend, claims outstanding", healthy: "Cost-plus/CM tilt; walking away from bad bids", warning: "Fixed-price megaprojects won at cycle peaks" },
      { name: "Backlog quality", weight: 20, metrics: "Book-to-burn, embedded margin, funded share, client mix", healthy: "> 1.0x at stable margins, diversified clients", warning: "Growth via margin-dilutive mega-awards" },
      { name: "Execution & safety", weight: 20, metrics: "On-time delivery, incident rates, write-down history", healthy: "Clean multi-year record; claims resolved favorably", warning: "Repeat project charges (the serial-fade pattern)" },
      { name: "Cash conversion", weight: 15, metrics: "Billings in excess, retainage aging, FCF vs net income", healthy: "Negative working capital while growing", warning: "Unbilled receivables ballooning: disputed work in disguise" },
      { name: "Labor & supply chain", weight: 15, metrics: "Craft retention, sub default exposure, materials cover", healthy: "Self-perform capability in scarce trades", warning: "Schedule slips from crew shortages; sub insolvencies" }
    ],
    scoringNote: "Weight discipline over growth: in a business where 0.5% of large projects hit plan (Flyvbjerg), the winners are defined by the contracts they refused."
  },

  valuation: {
    intro: "The market prices the seat in the chain, not the sector: risk-warehousing GCs earn discount multiples, scarce-craft specialty trades and rental fleets re-rated to quality-industrial levels, and concession hybrids get valued in pieces.",
    methods: [
      { name: "EV / EBITDA (contractors)", use: "GCs, EPC, and specialty trades on normalized backlog burn", avoid: "Peak-margin extrapolation right after a bidding boom", strengths: "Standard and comparable across the fragmented set", weaknesses: "POC accounting means EBITDA is partly an estimate", range: { low: 5, high: 10, asOf: 2025, note: "legacy EPC at the bottom; electrical/grid specialty names re-rated well above the top on AI-era demand" } },
      { name: "FCF yield with float adjustment", use: "Separating true cash economics from working-capital timing", avoid: "Crediting float from growth as permanent cash flow", strengths: "Cuts through percentage-of-completion estimates", weaknesses: "Reverses violently when backlog shrinks", range: { low: 5, high: 10, asOf: 2025, note: "% yield on normalized burn; demand a discount to asset-light industrials" } },
      { name: "Sum-of-the-parts (concession hybrids)", use: "Vinci/Ferrovial class: DCF the concessions, multiple the contracting", avoid: "One blended multiple across toll roads and lump-sum risk", strengths: "Matches the 5-species reality of the P&L", weaknesses: "Conglomerate discounts persist for years", range: { low: 10, high: 14, asOf: 2025, note: "EV/EBITDA on concession assets; contracting arms fetch 5x to 7x" } },
      { name: "Backlog coverage sanity check", use: "Stress-testing any contractor multiple against forward cover", avoid: "Face-value backlogs: embedded margin and funding status decide worth", strengths: "The demand-visibility lens", weaknesses: "Backlog is worth what execution makes of it", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a contractor quickly: normalized EBITDA times a seat-in-the-chain multiple, minus net debt (many quality names run net cash thanks to float).",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 10, step: 0.2, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 16, step: 0.5, value: 8, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 20, step: 0.5, value: 0, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays construction as a barbell around the risk warehouse: own the layers with pricing power (materials, equipment rental, scarce-craft specialty trades) and the layers with annuities (concessions), and touch naked fixed-price contracting beta only as a dated cycle trade. Demand is knowable from free public data; what is never knowable from outside is which GC just bid away its next 3 years, so contract mix and fade history substitute for faith.",
    debates: [
      { topic: "Specialty trades re-rating: structural or a capex sugar high?", bull: "Grid buildout, data centers, reshored fabs, and electrification give electrical and mechanical contractors a decade of utility-like demand against a shrinking craft workforce (ABC: ~439,000 workers short in 2025): scarcity pricing plus backlog visibility justifies the re-rate.", bear: "It is still contracting: margins are cyclical, labor cost inflation cuts both ways, and when the AI capex wave pauses, names priced as compounders will re-learn that book-to-burn below 1.0x compresses multiples faster than earnings." },
      { topic: "Modular construction: is this time different?", bull: "Labor scarcity finally forces industrialization: a ~$100B market compounding ~7-8%, hyperscaler and healthcare clients demanding factory speed, and the $1.6T productivity prize (MGI) accruing to whoever cracks repeatability.", bear: "Katerra raised $2B+, was SoftBank-backed, and still collapsed in 2021: factories need volume through the downturn that project demand never guarantees, and every cycle's modular champion has died on that math." },
      { topic: "Public capex: supercycle or political sugar?", bull: "The IIJA had ~53% of $580.6B still unobligated at end-2024 (GAO): years of contracted tailwind, before CHIPS, grid, and defense construction: a multi-decade replacement cycle for 1950s-70s assets that both parties fund.", bear: "Obligated is not outlaid (21% actually spent by end-2024), a January 2025 executive order showed disbursements can pause on a signature, and deficit math eventually caps every purse: the tail is real but its slope is political." }
    ],
    cycle: {
      where: "A split cycle: residential and commercial soft under rates and China's property unwind (global output roughly flat-to-down in 2025 per Oxford Economics), while public infrastructure and AI/manufacturing capex run hot: the rare construction upcycle led entirely by non-residential.",
      drivers: "Interest rates (residential transmission), public appropriations and obligation pace, private capex cycles (data centers, fabs), materials costs, and the labor supply ceiling.",
      leads: [
        "Building permits and housing starts (US Census/FRED, free, monthly)",
        "Architecture Billings Index (AIA/Deltek, free headline): leads non-residential by ~9 to 12 months",
        "ABC Construction Backlog Indicator and Dodge Momentum Index (free headlines)",
        "Construction materials PPI and cement shipments (BLS/USGS, free)",
        "JOLTS construction job openings (BLS, free): the labor ceiling in one series"
      ]
    },
    exposure: [
      { vehicle: "Specialty trades (Quanta, EMCOR class)", note: "Scarce crafts plus grid/data-center demand: the shortage as a long position" },
      { vehicle: "Equipment & rental (Caterpillar, United Rentals class)", note: "Picks-and-shovels on all of it; utilization and used-equipment values as the tell" },
      { vehicle: "Materials (CRH, Holcim class)", note: "Regional oligopolies that capture the inflation contractors eat" },
      { vehicle: "Concession hybrids (Vinci, Ferrovial)", note: "Contracting optionality wrapped around toll-road annuities" },
      { vehicle: "Homebuilders (D.R. Horton class)", note: "The pure rate trade: land, entitlements, and a subcontracted build" }
    ],
    catalysts: [
      { when: "Monthly (1st week)", what: "Census construction spending, housing starts and permits: the sector's tape" },
      { when: "Quarterly earnings", what: "Backlog, book-to-burn, margin fade, and project charges: the honesty audit" },
      { when: "Appropriations & obligation reports", what: "IIJA/DOT obligation pace and any policy pauses gate the public tailwind" },
      { when: "Fed decisions", what: "Rates are the residential demand curve; each cut reprices starts within months" }
    ],
    data: [
      { series: "Construction spending (put in place)", source: "census.gov (free, monthly)", why: "Total demand, split public/private and by segment" },
      { series: "Housing starts, permits, completions", source: "census.gov / FRED (free)", why: "The residential cycle's primary gauge" },
      { series: "Architecture Billings Index", source: "AIA/Deltek (free headline)", why: "The best free lead on non-residential work" },
      { series: "Construction materials PPI & employment/JOLTS", source: "bls.gov (free)", why: "Cost squeeze and the labor ceiling" },
      { series: "IIJA funding status", source: "gao.gov (free reports)", why: "Tracks obligated vs outlaid: the real public-spend tail" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Backlog cushions revenue for 12 to 18 months, then the air pocket: private work vanishes first, public capex turns countercyclical. Own float-rich balance sheets; shrinking contractors consume their own working capital." },
      { regime: "Rates rising", behavior: "Residential is the first casualty (starts fall within 2 to 3 quarters); commercial follows via cap rates; infrastructure barely notices. Rotate from homebuilders toward public-exposed and specialty names." },
      { regime: "Inflation spike", behavior: "Fixed-price contractors eat it (the 2021-22 lumber and steel lesson); cost-plus, rental, and materials pass it through. Expect a fade epidemic reported 1 to 2 years after the spike." },
      { regime: "Boom", behavior: "Bid discipline dies at the top: backlogs swell with tomorrow's write-downs. Favor firms that let book-to-burn dip rather than chase; watch the fade metric, not the award headlines." }
    ]
  },

  players: [
    { name: "Vinci", role: "Concessions-contracting hybrid", country: "FR", real: true, note: "The sector's best business model: majority of profit from toll roads and airports, not building" },
    { name: "China State Construction Engineering", role: "World's largest builder", country: "CN", real: true, note: "State-owned scale (~$300B class revenue); the index weight of China's buildout" },
    { name: "Bechtel", role: "US EPC standard-bearer", country: "US", real: true, note: "Private megaproject specialist: fabs, LNG, infrastructure" },
    { name: "ACS Group / Hochtief / Turner", role: "Global contracting network", country: "ES", real: true, note: "Madrid-listed web spanning US commercial building (Turner) and global civil works" },
    { name: "Larsen & Toubro", role: "India's infrastructure champion", country: "IN", real: true, note: "The pure play on the fastest-growing major construction market" },
    { name: "Quanta Services", role: "Specialty trades leader", country: "US", real: true, note: "Grid, renewables, and data-center electrical work: the labor shortage as a moat" },
    { name: "AECOM / Jacobs", role: "Design & engineering", country: "US", real: true, note: "Asset-light fees at the front of every project; the best risk-adjusted seat" },
    { name: "Caterpillar / United Rentals", role: "Equipment layer", country: "US", real: true, note: "The sector's picks and shovels; rental utilization is the cycle's honest gauge" }
  ],

  geography: [
    { country: "CN", role: "Largest market, now shrinking core", note: "Decades of pouring half the world's cement; the residential unwind drags global output" },
    { country: "US", role: "Policy + AI capex engine", note: "IIJA tail plus data centers and fabs; short ~439,000 workers (ABC, 2025)" },
    { country: "IN", role: "Fastest-growing major market", note: "Urbanization and a national infrastructure pipeline decades deep" },
    { country: "FR", role: "Concessions capital", note: "Vinci and Bouygues wrote the playbook for owning what you build" },
    { country: "ES", role: "Global contractor exporter", note: "ACS, Ferrovial, Acciona: the GFC's survivors turned world builders" },
    { country: "SA", role: "Giga-project frontier", note: "NEOM-class programs: the largest fixed-price risk experiments on Earth" }
  ],

  cycles: [
    { year: 1931, title: "The Empire State benchmark", kind: "boom", text: "410 days from ground to topping-out, mid-Depression. Lesson: the industry once knew how to be fast; the 1% productivity era is a choice of structure, not physics." },
    { year: 1956, title: "Interstate Highway Act", kind: "boom", text: "A public program defines demand for 2 generations of contractors. Lesson: in construction, policy is the deepest demand pool: and the slowest to reverse." },
    { year: 2008, title: "The GFC housing bust", kind: "bust", text: "US starts fall from ~2.2M to ~550K; Spanish construction implodes; a generation leaves the trades. Lesson: today's labor shortage was hired away in 2009: cycles echo for decades." },
    { year: 2021, title: "Evergrande and Katerra", kind: "bust", text: "China's largest developer defaults on $300B of liabilities the same year SoftBank's $2B+ modular champion dies. Lesson: construction booms end in credit events, and factory models die when volume drops below break-even." },
    { year: 2022, title: "The policy-capex pivot", kind: "shift", text: "IIJA, CHIPS, and the AI data-center wave re-anchor demand in non-residential just as rates crush housing. Lesson: the sector's segments can boom and bust simultaneously: aggregate data hides the trade." }
  ],

  risks: [
    { name: "Fixed-price contract blowups", severity: 4, likelihood: 4, transmission: "Inflation or delay on a lump-sum megaproject -> contingency exhausted -> charges many times annual margin -> covenant and surety stress (the 98%-over-budget base rate at work)." },
    { name: "Labor shortage deepening", severity: 4, likelihood: 4, transmission: "Retirements outpace entry (~349,000 net new workers needed in 2026, mostly replacement) -> wage inflation and schedule slip -> bids reprice up or margins fade down." },
    { name: "Housing and credit downturn", severity: 4, likelihood: 3, transmission: "Rates stay high -> starts and commercial development stall -> backlog burn exceeds bookings -> negative working capital unwinds into a cash drain." },
    { name: "Public funding reversal", severity: 3, likelihood: 3, transmission: "Policy pause or deficit squeeze -> obligation pace slows (only 21% of IIJA funds outlaid by end-2024) -> the infrastructure tailwind flattens mid-cycle." },
    { name: "Materials cost spikes", severity: 3, likelihood: 4, transmission: "Cement, steel, or tariff shock -> fixed-price contractors absorb what oligopoly suppliers pass through -> fade epidemic reported 1 to 2 years later." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Construction is the world's biggest industry by spending (~$13T a year, about 13% of everything the global economy produces) and one of its least profitable. Builders win work by bidding against each other, keep only 2% to 4% of revenue as profit, and carry the risk if the project runs late or over budget: which, on big projects, it almost always does. The money is better at the edges: the companies selling cement, renting machines, or collecting tolls on the finished road."] },
    L2: { title: "Intermediate", text: ["The contract is the business model. Fixed-price work makes the builder an insurer of everything (weather, wages, inflation) for a 5% to 8% margin; cost-plus work hands risk back to the owner for a smaller, safer fee. Cash runs backward: healthy contractors bill ahead of costs and grow on the owner's money, while owners hold back 5% to 10% (retainage) until the job is done. Demand splits 3 ways: housing (rate-sensitive), commercial (cycle-sensitive), and public infrastructure (policy-driven: the $1.2T IIJA is still mostly unspent)."] },
    L3: { title: "Advanced", text: ["Analyze contractors like insurance books: contract mix is the risk disclosure, backlog book-to-burn is the demand tape, and margin fade (bid margin vs completed margin) is the honesty metric, because percentage-of-completion accounting reports estimates. The base rates are grim: 98% of $1B+ megaprojects run 30%+ over budget (McKinsey); only 0.5% of large projects hit budget, schedule, and benefits (Flyvbjerg). Map the chain's 5 P&L species (materials, design fees, contracting, trades, concessions) and price each separately."] },
    L4: { title: "Expert", text: ["Trade the split cycle: residential off rates (permits lead), non-residential off the Architecture Billings Index (~9 to 12 months lead), public work off obligation pace, not authorization headlines. Live debates: whether the specialty-trades re-rating survives an AI capex pause, whether modular finally scales (Katerra says factories die below break-even volume), and whether the labor wall (ABC: ~439,000 workers short in 2025) forces the industrialization McKinsey has begged for since 2017. Fade the award headlines; follow the fade metric."] },
    L5: { title: "Institutional", text: ["Allocator's frame: construction is a $13T flow with a 1% productivity curse, and the alpha is seat selection, not sector timing: own pricing power (materials oligopolies, scarce crafts, rental fleets) and annuities (concessions), rent the risk warehouse only when cycle entry is paid for. The $1.6T productivity gap (MGI) is the century's largest unclaimed industrial prize; whoever industrializes delivery, modular, robotics, or AI-native design, captures margin the incumbents never had. Until then, respect the oldest rule in the book: the best contract is the one you refused."] }
  },

  quiz: [
    { q: "Global construction labor productivity over the past 2 decades grew roughly:", choices: ["5% a year", "1% a year, vs 2.8% for the world economy: a $1.6T annual gap (McKinsey)", "In line with manufacturing", "It fell every year"], answer: 1, explain: "MGI's Reinventing Construction (2017) quantified the sector's defining pathology: project-by-project prototyping resists the learning curves that transformed factories." },
    { q: "The construction ecosystem's share of the global economy is about:", choices: ["2% of GDP", "13% of GDP: ~$13T of annual spend, the largest industry on Earth", "50% of GDP", "Too small to measure"], answer: 1, explain: "McKinsey pegs ecosystem spend near $13T; Oxford Economics' narrower output measure ran ~$9.5T in 2025. Enormous flow, thin profit." },
    { q: "Of megaprojects over $1B, the share running more than 30% over budget is roughly:", choices: ["10%", "50%", "98%, with an average overrun of 80% (McKinsey)", "Zero since 2000"], answer: 2, explain: "And across Flyvbjerg's 16,000+ project database, only 0.5% deliver on budget, on time, with promised benefits: the base rate every bid ignores." },
    { q: "A fixed-price contract makes the contractor:", choices: ["A guaranteed profit earner", "An insurer of cost, labor, weather, and inflation for a 5% to 8% margin: capped upside, uncapped downside", "Risk-free", "The owner of the asset"], answer: 1, explain: "The asymmetry that defines the industry: on a $100M job, a 10% overrun turns ~$6M of profit into ~($4M) of loss." },
    { q: "ABC estimated the US construction industry's 2025 hiring gap at about:", choices: ["10,000 workers", "439,000 net new workers, after ~501,000 in 2024", "5 million workers", "A surplus"], answer: 1, explain: "The 2026 need (~349,000) is mostly replacing retirees: the constraint is structural demographics, not just the cycle." },
    { q: "A healthy, growing contractor typically runs:", choices: ["Heavy net debt to fund projects", "Negative working capital: billings run ahead of costs, so the owner's money funds the build", "Huge inventories", "No cash at all"], answer: 1, explain: "Float is the hidden asset of contracting: and it reverses into a cash drain the moment backlog shrinks. Cash flow, not reported margin, tells the truth." },
    { q: "Vinci's most instructive lesson is that it earns most of its profit from:", choices: ["Lump-sum megaprojects", "Toll roads and airports: concessions built once, harvested for decades", "Selling cement", "Design fees"], answer: 1, explain: "The escape hatch from contracting economics: own what you build. Concession assets carry 10x to 14x multiples while contracting arms fetch 5x to 7x." },
    { q: "Of the IIJA's available funds, the share actually outlaid by end-2024 was about:", choices: ["21%, with 47% obligated: the tail runs for years (GAO)", "95%", "100%", "Nothing was authorized"], answer: 0, explain: "Authorized, obligated, and outlaid are 3 different numbers: the public-capex tailwind is real but its slope is set by obligation pace and politics." }
  ],

  sources: [
    { name: "McKinsey Global Institute, Reinventing Construction (Feb 2017)", url: "https://www.mckinsey.com/capabilities/operations/our-insights/reinventing-construction-through-a-productivity-revolution", feeds: "productivity, market size" },
    { name: "Oxford Economics, Global Construction Outlook 2025-26", url: "https://www.oxfordeconomics.com/resource/global-construction-outlook-2025-26/", feeds: "output, forecasts" },
    { name: "GAO, IIJA Infrastructure Grants funding status (GAO-25-107243)", url: "https://www.gao.gov/products/gao-25-107243", feeds: "public spending" },
    { name: "ABC workforce shortage analysis (Construction Dive, 2025)", url: "https://www.constructiondive.com/news/labor-demand-gap-shrinks-abc-construction-staff/810681/", feeds: "labor" }
  ]
};
