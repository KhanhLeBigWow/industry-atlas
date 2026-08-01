/* Industry Atlas - MEDICAL DEVICES (full module, research-backed)
 * Anchors: global medtech market ~$600B in 2025 (estimates $572B Fortune Business
 * Insights to $679B Precedence Research; ~6-7% CAGR to 2034); Medtronic FY2025
 * revenue ~$33.5B (ended Apr 2025, company release); Abbott 2024 sales $42.0B with
 * devices ~$19B (Abbott, Jan 2025); Intuitive Surgical 2025 revenue $10.1B (+20.5%),
 * 3.1M+ patients treated (+18%), Ion procedures +52%, 427 da Vinci placements in
 * Q3 2025 (company releases); Stryker MAKO 3,000+ installed systems, 2026 organic
 * growth guide 8-9.5%; GLP-1 scare erased ~$370B of medtech market cap in 2023
 * (MedTech Dive); FDA pathways: 510(k) ~$31M average cost-to-market and 90 to 180
 * days vs PMA ~$94M and 9 to 36 months; 95%+ of devices clear via 510(k). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["medical-devices"] = {
  meta: {
    id: "medical-devices", name: "Medical Devices", sector: "healthcare", status: "full",
    tagline: "Razor-and-blade economics inside the human body: regulated moats, recurring consumables, and demand that ages with the population.",
    marketSize: { value: 600, unit: "$B", asOf: 2025, note: "global medtech revenue; 2025 estimates cluster $570B to $690B (Fortune Business Insights $572B, Precedence $679B)" },
    cagr: { value: 6.5, range: [5, 8], horizon: "2025-2034" },
    maturity: "growth-mature", cyclicality: 2, capitalIntensity: 3, regulation: 5, disruption: 3
  },
  newsQuery: '(Medtronic OR Stryker OR "Intuitive Surgical" OR "Boston Scientific" OR "medical device" OR medtech OR "FDA clearance" OR "surgical robot")',

  overview: {
    definition: "The medical device industry engineers the hardware of medicine: implants, surgical robots, pacemakers, stents, glucose monitors, imaging systems, and the consumables that feed them. It is a ~$600B global market (2025) where regulatory approval is the moat, the installed base is the annuity, and every procedure performed is a revenue event.",
    howItWorks: [
      "The core model is razor-and-blade in an operating room: sell or place the capital equipment (a surgical robot, an imaging system, an insulin pump), then earn for decades on the instruments, consumables, and service contracts each use generates. Intuitive Surgical is the archetype: roughly 80%+ of its $10.1B of 2025 revenue was recurring (instruments, accessories, service), earned per procedure across an installed base of roughly 10,000 da Vinci systems. The box wins the account; the blades earn the return.",
      "Regulation is the moat and the toll. In the US, 95%+ of devices reach market through the FDA's 510(k) pathway (prove substantial equivalence to an existing device: ~$31M average cost to market, 90 to 180 days of review), while novel high-risk devices take the PMA road: clinical trials, ~$94M average cost, 9 to 36 months of review, and a user fee near $235K vs about $4,690 for a 510(k). That asymmetry shapes strategy: incremental iteration is cheap and fast, true novelty is a pharma-grade bet. Europe's MDR regime has pushed compliance costs the same direction: up.",
      "Demand is procedures, and procedures are demographics plus reimbursement. An aging population needs more knees, valves, stents, and monitors; hospitals buy what payers reimburse, so CMS rate-setting and payer policy move markets as much as innovation does. The demand curve is defensive (a hip replacement is rarely discretionary) but not immune: COVID's elective-procedure shutdown proved volumes can vanish for a quarter, and the 2021-2025 recovery produced a procedure supercycle that lifted the whole sector.",
      "Structure is a league of giants with pure-play challengers. Medtronic is the largest pure-play (~$33.5B revenue, fiscal 2025); Abbott's device segment (~$19B of its $42B 2024 sales), Johnson & Johnson MedTech (~$32B, 2024), and Stryker (~$22.6B, 2024) round out the top tier. Growth premiums accrue to category owners: Intuitive in soft-tissue robotics (procedures +18% in 2025), Stryker's MAKO in orthopedic robotics (3,000+ systems installed), Edwards in structural heart. The giants buy growth via tuck-in M&A; the sector consolidates perpetually because distribution, regulatory muscle, and hospital relationships scale."
    ],
    history: [
      { era: "1950s-1976", title: "The implant age begins", text: "Pacemakers (Medtronic's garage start, 1949), heart valves, and hip implants create the industry; devices reach market with almost no premarket oversight." },
      { era: "1976-1990s", title: "Regulation arrives", text: "The 1976 Medical Device Amendments give the FDA device authority and create the 510(k)/PMA split that still defines the economics of innovation." },
      { era: "1990s-2000s", title: "The stent wars", text: "Balloon angioplasty then drug-eluting stents (2003-2004) mint blockbuster device franchises; Boston Scientific, J&J, and Medtronic fight patent and share battles worth billions." },
      { era: "2000s-2019", title: "Platforms and robots", text: "Intuitive's da Vinci (FDA-cleared 2000) proves the installed-base model; continuous glucose monitors, TAVR valves, and neuromodulation turn devices into data platforms." },
      { era: "2020-present", title: "Shutdown, supercycle, semaglutide", text: "COVID halts elective surgery, then a multi-year procedure recovery lifts volumes; the 2023 GLP-1 scare wipes ~$370B of medtech market cap before procedures prove resilient and the sector re-rates." }
    ],
    trends: [
      { title: "Robotic surgery adoption", direction: "up", text: "Intuitive treated 3.1M+ patients in 2025 (+18%), placed 427 da Vinci systems in Q3 alone, and its Ion lung platform grew procedures ~52%; Stryker's MAKO (3,000+ systems) is pulling through implant share in knees and hips." },
      { title: "GLP-1 recalibration", direction: "shift", text: "The 2023 drug scare (~$370B of market cap erased) has inverted in places: Zepbound's FDA approval for sleep apnea (Dec 2024) drives screening, and ResMed now frames GLP-1 patients as a funnel, not a threat." },
      { title: "Procedure supercycle maturing", direction: "shift", text: "Post-COVID catch-up volumes powered 2023-2025 results; the debate is what normalized utilization looks like as backlogs clear." },
      { title: "Regulatory cost inflation", direction: "down", text: "EU MDR recertification and rising FDA evidence expectations raise the fixed cost of staying on market, squeezing small players and feeding consolidation." },
      { title: "Devices become data platforms", direction: "up", text: "CGMs, connected cardiac monitors, and surgical video AI shift value from hardware to algorithms and subscriptions: the next margin layer." }
    ],
    outlook: "Demographics do the heavy lifting: aging populations and emerging-market access growth underwrite a ~6-7% CAGR through 2034 on most estimates. The sector's question is mix, not direction: robotics and structural heart compound at double digits while mature categories grind low single digits, and payers push back on price everywhere. GLP-1s reshuffle category winners (bariatric down, screening-driven diagnostics and sleep up) more than they shrink the pie. Expect continued consolidation, premium multiples for installed-base compounders, and regulation that keeps rewarding scale."
  },

  structure: {
    suppliers: [
      { name: "Components & materials (sensors, chips, specialty polymers, nitinol)", note: "Medical-grade inputs with qualification lock-in; semiconductors run through every modern device" },
      { name: "Contract manufacturers (Jabil, Flex, Integer)", note: "Outsourced precision manufacturing under FDA quality systems" },
      { name: "Sterilization & packaging (Sotera class)", note: "A quiet oligopoly; ethylene-oxide capacity is a chokepoint" },
      { name: "CROs & test labs", note: "Clinical evidence generation for PMA-track devices" }
    ],
    producers: [
      { name: "Diversified giants (Medtronic, Abbott, J&J MedTech, Stryker, Boston Scientific)", note: "Scale in distribution, regulatory, and hospital contracting" },
      { name: "Category owners (Intuitive, Edwards, Dexcom, ResMed)", note: "Pure-play compounders with installed-base economics" },
      { name: "Imaging houses (Siemens Healthineers, GE HealthCare, Philips)", note: "Capital equipment plus service annuities" },
      { name: "Local champions (Mindray, Terumo, Olympus)", note: "Regional scale, increasingly global ambition" }
    ],
    distributors: [
      { name: "Med-surg distributors (McKesson, Cardinal, Owens & Minor)", note: "Commodity supplies flow through distribution; premium devices go direct" },
      { name: "GPOs (Vizient, Premier)", note: "Hospital group purchasing sets contract terms for the routine catalog" }
    ],
    customers: [
      { name: "Hospitals & health systems", note: "The capital budget and the procedure volume live here" },
      { name: "Ambulatory surgery centers", note: "The fastest-growing site of care; lower cost per procedure" },
      { name: "Physicians & patients", note: "Surgeon preference still decides implants; patients increasingly wear the device (CGMs, CPAP)" }
    ],
    regulators: [
      { name: "FDA (CDRH)", note: "510(k) clearance vs PMA approval: the industry's economic fork" },
      { name: "EU MDR & notified bodies", note: "Post-2021 recertification regime; costlier and slower than the old CE mark" },
      { name: "CMS & payers", note: "Reimbursement codes and rates decide whether an approved device has a market" }
    ],
    capital: [
      { name: "Public equity", note: "Premium multiples for recurring-revenue compounders; the sector IPOs sparingly" },
      { name: "M&A machine", note: "Giants buy growth via tuck-ins; strategics pay 5x to 10x revenue for category winners" },
      { name: "Venture & growth capital", note: "Funds the 510(k)-to-acquisition pipeline; exits are mostly trade sales" }
    ]
  },

  valueChain: {
    intro: "From medical-grade resin to a 10-year service contract. Value concentrates where switching costs live: the regulated design, the surgeon's trained hands, and the installed base's consumable stream.",
    stages: [
      { id: "inputs", name: "Components & materials", what: "Sensors, chips, motors, specialty alloys and polymers", players: "TE Connectivity, Heraeus, medical-grade suppliers", valueCapture: 2,
        economics: { grossMargin: [25, 40], capitalIntensity: 3, concentration: 3 },
        linksTo: ["semiconductors", "chemicals", "manufacturing"],
        deeper: "Once a component is designed into a cleared device, requalification friction makes it near-irreplaceable for the product's life: small suppliers with locked-in sockets earn quietly for decades." },
      { id: "cdmo", name: "Contract manufacturing", what: "Outsourced build under FDA quality systems", players: "Jabil Healthcare, Flex, Integer, Sanmina", valueCapture: 2,
        economics: { grossMargin: [12, 20], capitalIntensity: 4, concentration: 3 },
        linksTo: ["manufacturing", "logistics"],
        deeper: "OEMs increasingly keep design and regulatory in-house and rent the factory. Margins are thin but sticky: transferring a validated line means re-filing with regulators, so contracts roll for product lifetimes." },
      { id: "rd-regulatory", name: "Design, clinical & regulatory", what: "Turning engineering into cleared, reimbursable products", players: "OEM R&D, CROs, regulatory consultancies", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 2 },
        linksTo: ["biotech", "diagnostics"],
        deeper: "The economic fork: a 510(k) averages ~$31M to market in 90 to 180 days of review; a PMA averages ~$94M and 9 to 36 months plus trials. 95%+ of devices take the cheap road, which is why iteration beats invention in most categories." },
      { id: "oem", name: "Device OEMs", what: "Branded systems, implants, and instruments", players: "Medtronic, Abbott, Stryker, Boston Scientific, Intuitive", valueCapture: 5,
        economics: { grossMargin: [60, 75], capitalIntensity: 3, concentration: 4 },
        linksTo: ["pharma", "robotics", "ai"],
        deeper: "The industry's profit core: 60-75% gross margins earned on regulatory moats, surgeon training lock-in, and brands hospitals trust. The giants add distribution scale; the pure-plays add category dominance. Both defend with patents and 510(k) iteration speed." },
      { id: "distribution", name: "Distribution & contracting", what: "Getting products into hospital supply chains", players: "McKesson, Cardinal, GPOs, direct sales forces", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 2, concentration: 4 },
        linksTo: ["logistics", "hospitals"],
        deeper: "Commodity supplies flow through distributors at low single-digit margins; premium devices bypass them entirely with direct reps who stand in the OR. The sales force IS the channel for implants: a cost structure that doubles as a moat." },
      { id: "aftermarket", name: "Procedures, consumables & service", what: "Per-procedure revenue off the installed base", players: "OEM service arms, Intuitive's I&A stream", valueCapture: 5,
        economics: { grossMargin: [65, 80], capitalIntensity: 1, concentration: 4 },
        linksTo: ["hospitals", "health-insurance"],
        deeper: "The annuity: Intuitive earns roughly $700 to $3,500 of instruments per procedure plus service contracts around $80K to $190K per system per year, which is how recurring revenue reached ~80%+ of sales. Every placed system compounds; every procedure is a print." }
    ]
  },

  financials: {
    businessModel: [
      "Read a medtech P&L in three layers. Capital equipment (robots, imaging, monitors): lumpy, competitive, and often placed at slim margins or leased to seed the base. Consumables and implants: the profit engine, 60-75% gross margins, volume tied to procedures rather than hospital budgets. Service and software: contracted, predictable, and increasingly the multiple-defining line: investors pay up for the share of revenue that recurs. Intuitive's fingerprint (roughly 80%+ recurring, procedures +18% in 2025) is the sector's aspirational template.",
      "Costs are R&D (typically 6-12% of sales), a direct sales force that lives in operating rooms, and the regulatory-quality apparatus that scales beautifully: once built, each incremental 510(k) rides the same infrastructure. That is why consolidation never stops: a tuck-in acquisition's product flows through existing reps, contracts, and compliance at near-pure incremental margin. The bear case is always the payer: prices face relentless reimbursement pressure (CMS in the US, tender systems and volume-based procurement abroad), so growth must come from volume, mix, and category creation."
    ],
    fingerprint: { grossMargin: 65, recurringRevenue: 55, capitalIntensity: 40, pricingPower: 60, cyclicality: 25, operatingLeverage: 55 },
    lines: [
      { label: "Procedure volumes", note: "The demand tape: company prints (Intuitive +18% in 2025) and hospital admissions data" },
      { label: "Capital equipment placements", note: "System placements seed tomorrow's consumables: 427 da Vincis placed in Q3 2025 alone" },
      { label: "Recurring revenue mix", note: "Consumables + service share of sales; the multiple-defining metric" },
      { label: "R&D and pipeline", note: "6-12% of sales; watch PMA-track programs, the pharma-grade bets" },
      { label: "Pricing & reimbursement", note: "CMS rules and China VBP tenders set the ceiling on realized price" }
    ],
    unitEconomics: {
      unit: "per surgical robot placed (illustrative, da Vinci class)",
      items: [
        { label: "System price", value: "~$1M to $2.5M", note: "sold, leased, or placed under usage agreements" },
        { label: "Instruments & accessories", value: "~$700 to $3,500 per procedure", note: "limited-use instruments expire by design: the blade" },
        { label: "Annual service contract", value: "~$80K to $190K per system", note: "contracted, near-software margins" },
        { label: "Recurring share of revenue", value: "~80%+ (Intuitive, 2025)", note: "the installed base is the business" }
      ]
    }
  },

  kpiRefs: ["hc-mlr", "pharma-pipeline"],
  kpiLocal: [
    {
      id: "medtech-procedure-volume", name: "Procedure Volume Growth", industries: ["medical-devices"],
      definition: "Year-over-year growth in procedures performed using a company's platforms: the purest demand signal in medtech.",
      formula: "Procedure growth = (procedures this period ÷ procedures prior period) - 1",
      interpretation: "Procedures drive consumables, which drive margin. Intuitive's +18% in 2025 is elite; mature categories run low single digits. Watch the gap between procedure growth and revenue growth for pricing signals.",
      healthy: "Volume growth at or above category rate with stable pricing", warning: "Decelerating procedures with rising discounting; utilization per system falling"
    },
    {
      id: "medtech-recurring-mix", name: "Recurring Revenue Mix", industries: ["medical-devices"],
      definition: "Consumables, instruments, and service as a share of total revenue: how much of the business the installed base already guarantees.",
      formula: "Recurring mix = (consumables + service revenue) ÷ total revenue",
      interpretation: "The multiple-defining metric: recurring streams get valued like software, capital equipment like industrials. Intuitive runs ~80%+; imaging houses run near 50%; pure implant makers effectively 100% (every procedure is a sale).",
      healthy: "Rising mix on a growing installed base", warning: "Mix rising only because capital placements are stalling"
    }
  ],

  health: {
    intro: "Medtech health is the durability of the moat: regulatory position, installed base, and payer relations. Quality failures and reimbursement cuts are the two events that break franchises.",
    pillars: [
      { name: "Innovation & regulatory execution", weight: 25, metrics: "Clearance cadence, PMA pipeline, trial readouts", healthy: "Steady 510(k) flow plus 1-2 credible PMA bets", warning: "Stalled pipeline; warning letters; recalls" },
      { name: "Recurring revenue & installed base", weight: 20, metrics: "Recurring mix, system placements, utilization per system", healthy: "Mix rising on growing placements", warning: "Placements stalling; utilization flat or falling" },
      { name: "Procedure & category exposure", weight: 20, metrics: "Volume growth vs category, GLP-1-exposed share", healthy: "Overweight growing procedures (robotics, structural heart)", warning: "Concentration in categories drugs can substitute" },
      { name: "Pricing & payer position", weight: 15, metrics: "Realized price trend, reimbursement coverage, VBP exposure", healthy: "Flat-to-positive price with broad coverage", warning: "Tender-driven price cuts; coverage denials" },
      { name: "Balance sheet & M&A capacity", weight: 20, metrics: "Leverage, FCF conversion, tuck-in track record", healthy: "Investment grade with dry powder and disciplined deals", warning: "Serial large deals masking organic decay" }
    ],
    scoringNote: "Weight the recurring base most for pure-plays and the pipeline most for diversified giants: a Medtronic lives on portfolio renewal, an Intuitive on utilization of what is already placed."
  },

  valuation: {
    intro: "The market prices medtech as healthcare's quality compounders: defensive volumes, high gross margins, and recurring streams earn premium multiples, with the dispersion set by growth and recurring mix.",
    methods: [
      { name: "EV / EBITDA vs growth", use: "Diversified large caps (Medtronic, Stryker class)", avoid: "Applying large-cap multiples to single-product stories", strengths: "Comparable across the league table", weaknesses: "Blends capital equipment and annuity economics", range: { low: 13, high: 22, asOf: 2025, note: "growth and recurring mix set position in the band" } },
      { name: "P/E on forward earnings", use: "The sector's common tongue for profitable names", avoid: "Names mid-recall or mid-pipeline-transition", strengths: "Simple; captures the defensive-growth premium", weaknesses: "Amortization from serial M&A distorts GAAP", range: { low: 15, high: 30, asOf: 2025, note: "category owners (Intuitive class) trade well above the top" } },
      { name: "DCF on installed-base annuities", use: "Platform businesses where placed systems annuitize revenue", avoid: "Pre-commercial or single-approval-risk stories", strengths: "Matches the economics: visible per-procedure cash flows", weaknesses: "Terminal assumptions on utilization do the work", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; output hinges on procedure growth fade" } },
      { name: "EV / Revenue for growth medtech", use: "Pre-profit or margin-inflecting pure-plays", avoid: "Mature single-digit growers", strengths: "Usable before earnings arrive", weaknesses: "Ignores wildly different margin destinies", range: { low: 3, high: 8, asOf: 2025, note: "strategics have paid above this in competitive takeouts" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a medtech name quickly: EBITDA times a growth-and-mix-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($B)", min: 0.2, max: 12, step: 0.2, value: 3, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 30, step: 0.5, value: 17, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 30, step: 0.5, value: 5, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns medtech as defensive growth with an annuity kicker: core the installed-base compounders (robotics, CGM, structural heart), hold the diversified giants for carry and M&A optionality, and trade the GLP-1-exposed names on evidence rather than narrative. Procedure volumes are the tape; reimbursement rules are the regime changes.",
    debates: [
      { topic: "GLP-1s: medtech's secular headwind or its screening tailwind?", bull: "The 2023 panic (~$370B of market cap erased) already looks overdone: procedures kept growing, bariatric surgery is a rounding error of sector revenue, and Zepbound's sleep apnea approval is driving diagnosis of a massively underpenetrated condition: ResMed now calls GLP-1 patients a funnel. Healthier-for-longer patients ultimately consume more procedures, not fewer.", bear: "Drugs compound too: as prices fall and indications stack (cardiovascular, kidney, sleep), pharmacological management will quietly defer or downsize whole procedure categories over 10 to 20 years. The market repriced the tail risk once; the tail is still there, and medtech multiples again embed zero of it." },
      { topic: "Is Intuitive-class robotics worth software multiples?", bull: "An installed base near 10,000 systems, ~80%+ recurring revenue, procedures compounding 18%, surgeon training lock-in measured in careers, and new platforms (Ion +52%) extending the runway: this is the closest thing healthcare has to a network-effect business, and competition has failed to land for 20 years.", bear: "Medtronic's Hugo and J&J's Ottava finally bring credible competition to soft-tissue robotics just as US procedure catch-up normalizes; hospitals under margin pressure will bid platforms against each other, and a 60x-class earnings multiple leaves no room for the duopoly-pricing era ending." },
      { topic: "Diversified giants vs pure-play category owners", bull: "Scale wins the next decade: GPO contracting, regulatory infrastructure, and emerging-market distribution favor the Medtronic-Abbott class, and their multiples embed pessimism while tuck-in M&A quietly refreshes the portfolio: buy the cheap compounders.", bear: "The giants are structurally low-growth conglomerates that have lagged for 15 years for a reason: capital allocation dilutes the winners inside them. Every basis point of alpha in medtech has come from owning the category killers pure and paying up: dilution by diversification is the sector's classic value trap." }
    ],
    cycle: {
      where: "Late in the post-COVID procedure supercycle: catch-up backlogs have largely cleared, volumes are normalizing toward demographic trend, and the GLP-1 discount has partially unwound: stock selection now beats beta.",
      drivers: "Demographics (aging), hospital capex budgets, reimbursement rate-setting, procedure site-of-care shift to ASCs, and drug-vs-device substitution at the category level.",
      leads: [
        "Intuitive quarterly procedure growth prints (free press releases: the sector's demand bellwether)",
        "HCA and Tenet earnings commentary on admissions and surgical volumes (free)",
        "CMS proposed and final payment rules (free, spring and fall)",
        "FDA 510(k) and PMA clearance databases (free, monthly updates)",
        "Hospital capex and construction data (AHA, Census construction spending, free)"
      ]
    },
    exposure: [
      { vehicle: "Intuitive Surgical", note: "The installed-base compounder: pay-up quality with procedure-print risk" },
      { vehicle: "Medtronic", note: "Largest pure-play (~$33.5B FY2025): value with a self-help and pipeline story" },
      { vehicle: "Stryker", note: "Ortho plus MAKO flywheel: 3,000+ robots pulling through implants" },
      { vehicle: "Abbott", note: "Devices (~$19B) inside a diversified healthcare compounder: the defensive route in" },
      { vehicle: "Boston Scientific / Edwards class", note: "Category growth: electrophysiology and structural heart pure exposure" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Procedure growth, system placements, and utilization: the sector's tape" },
      { when: "Spring and fall (annual)", what: "CMS proposed and final reimbursement rules reset category economics" },
      { when: "Major meetings (ACC, TCT, and peers)", what: "Pivotal trial readouts move device categories like drug data moves pharma" },
      { when: "FDA advisory panels & approvals", what: "PMA decisions are binary events for pure-plays; clearance cadence signals pipeline health" }
    ],
    data: [
      { series: "FDA 510(k) and PMA databases", source: "fda.gov (free)", why: "Clearance cadence and competitive entry, primary source" },
      { series: "CMS payment rules and claims data", source: "cms.gov (free)", why: "Reimbursement: the price-setting mechanism for US procedures" },
      { series: "Company procedure and placement prints", source: "IR releases (free, quarterly)", why: "Intuitive, Stryker, and peers publish the demand tape directly" },
      { series: "Hospital operator commentary", source: "HCA/Tenet earnings (free)", why: "Admissions and surgical volume trends from the buyer's side" },
      { series: "MedTech Dive / FDA MAUDE recalls", source: "free", why: "Recall and safety-signal monitoring: the franchise-breaking risk" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Volumes hold better than almost any industrial (procedures are need-based), but hospital capex freezes: consumables-heavy names outperform capital equipment sellers." },
      { regime: "Rates rising", behavior: "Long-duration growth multiples compress first (the Intuitive class); cash-generative value giants hold; hospital customers defer big-ticket purchases." },
      { regime: "Policy shock (reimbursement cuts)", behavior: "Category-specific and violent: a CMS rate cut reprices a franchise overnight. Diversification across procedure codes is the hedge." },
      { regime: "Drug disruption headlines", behavior: "The 2023 template: indiscriminate selloffs create entry points in names with low substitution exposure. Underwrite category by category, not sector-wide." }
    ]
  },

  players: [
    { name: "Medtronic", role: "Largest pure-play", country: "IE", real: true, note: "~$33.5B revenue FY2025; Dublin-domiciled, Minneapolis-run; cardiac to surgical to diabetes" },
    { name: "Abbott", role: "Diversified devices leader", country: "US", real: true, note: "Devices ~$19B of $42B 2024 sales; FreeStyle Libre CGM is the growth engine" },
    { name: "Johnson & Johnson MedTech", role: "Diversified giant", country: "US", real: true, note: "~$32B (2024); surgery, ortho, vision, and the Ottava robot bet" },
    { name: "Stryker", role: "Orthopedics & MAKO", country: "US", real: true, note: "~$22.6B (2024); 3,000+ MAKO robots pulling through knee and hip implants" },
    { name: "Boston Scientific", role: "Cardio growth machine", country: "US", real: true, note: "Electrophysiology and structural heart: the giants' fastest grower" },
    { name: "Intuitive Surgical", role: "Robotics category king", country: "US", real: true, note: "$10.1B 2025 revenue (+20.5%); 3.1M+ patients treated; ~80%+ recurring" },
    { name: "Edwards Lifesciences", role: "Structural heart pure-play", country: "US", real: true, note: "TAVR pioneer; the template for PMA-moat category ownership" },
    { name: "Siemens Healthineers", role: "Imaging & diagnostics", country: "DE", real: true, note: "Capital equipment plus service annuities across the hospital" }
  ],

  geography: [
    { country: "US", role: "Largest market & innovation hub", note: "Roughly 40%+ of global revenue; FDA clearance is the global gold standard" },
    { country: "IE", role: "Domicile & manufacturing base", note: "Medtronic's home plus a deep device manufacturing cluster" },
    { country: "DE", role: "European champion", note: "Siemens Healthineers, B. Braun; EU MDR's most exposed industrial base" },
    { country: "JP", role: "Endoscopy & precision", note: "Olympus and Terumo own global niches; an aging home market" },
    { country: "CN", role: "Growth market with teeth", note: "Volume-based procurement cuts prices 50%+ in tendered categories; Mindray leads the local champions" },
    { country: "CH", role: "Precision & specialty", note: "High-end manufacturing, Alcon in vision; the quiet quality cluster" }
  ],

  cycles: [
    { year: 1976, title: "Regulation arrives", kind: "shift", text: "The Medical Device Amendments give the FDA premarket authority and create the 510(k)/PMA fork. Lesson: the regulatory pathway IS the business model: cheap iteration beat expensive invention from this day forward." },
    { year: 2004, title: "The stent boom", kind: "boom", text: "Drug-eluting stents become overnight multibillion-dollar franchises, then a 2006 safety scare halves the market. Lesson: device blockbusters are real, and so is single-study headline risk." },
    { year: 2020, title: "Elective shutdown", kind: "bust", text: "COVID halts non-emergency procedures worldwide; device revenue evaporates in a quarter while patients wait. Lesson: procedures defer, they rarely disappear: the backlog became a 3-year tailwind." },
    { year: 2023, title: "The GLP-1 panic", kind: "shift", text: "Ozempic-era extrapolation erases ~$370B of medtech market cap, the sector's worst derating since COVID, before procedure data proves resilient. Lesson: markets price drug disruption sector-wide, but substitution happens category by category." },
    { year: 2025, title: "Robotics goes mainstream", kind: "boom", text: "Intuitive treats 3.1M+ patients (+18%), Stryker's MAKO passes 3,000 systems, and credible rivals (Hugo, Ottava) finally arrive. Lesson: installed-base compounding is the sector's best economics, and success invites the assault." }
  ],

  risks: [
    { name: "Reimbursement cuts", severity: 4, likelihood: 3, transmission: "CMS or payer rate cuts -> procedure economics deteriorate for hospitals -> volume and price pressure lands on the device line simultaneously." },
    { name: "Drug substitution (GLP-1 template)", severity: 3, likelihood: 3, transmission: "Expanding drug indications -> patients managed pharmacologically -> specific procedure categories (bariatric, some cardiac) shrink while multiples de-rate sector-wide." },
    { name: "Regulatory tightening", severity: 3, likelihood: 4, transmission: "EU MDR-style evidence inflation -> compliance fixed costs rise -> small players exit or sell, and iteration slows even for the giants." },
    { name: "Product liability & recalls", severity: 4, likelihood: 3, transmission: "A safety signal -> recall, MAUDE headlines, and litigation (the Philips respirator saga) -> a decade of settlements and a franchise's trust destroyed." },
    { name: "China localization & VBP", severity: 3, likelihood: 4, transmission: "Volume-based procurement tenders -> 50%+ price cuts in covered categories -> multinationals cede share to local champions or take margin pain to stay." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Medical device companies make the hardware of healthcare: implants, surgical robots, pacemakers, glucose monitors. It is a ~$600B global market (2025) that grows with aging populations. The trick of the business: sell the machine once, then earn for years on the disposable instruments and service every procedure uses, the way razor companies earn on blades."] },
    L2: { title: "Intermediate", text: ["Two things shape the economics: regulation and recurring revenue. In the US, 95%+ of devices reach market via the fast, cheap 510(k) pathway (~$31M average, months) while novel devices need PMA approval (~$94M, years of trials): iteration is structurally favored over invention. The best businesses convert an installed base into per-procedure income: Intuitive Surgical earns ~80%+ of its $10.1B revenue (2025) from instruments and service, not robot sales."] },
    L3: { title: "Advanced", text: ["Analyze demand as procedures, not products: volumes are demographic and defensive, but reimbursement (CMS rules, China's VBP tenders) sets realized price, and site-of-care shifts to surgery centers change the buyer. Separate the P&L layers: capital equipment is cyclical and competitive; consumables carry 60-75% gross margins; service recurs at near-software economics. The 2023 GLP-1 selloff (~$370B of market cap) was a masterclass in sector-wide pricing of category-specific risk: the alpha was underwriting substitution exposure name by name."] },
    L4: { title: "Expert", text: ["Trade the procedure tape (Intuitive's quarterly prints, hospital operator commentary) and the regulatory calendar (CMS rules, FDA panels, pivotal readouts at ACC and TCT). Live debates: whether GLP-1s net out as headwind or screening tailwind, whether soft-tissue robotics stays a de facto monopoly as Hugo and Ottava land, and whether diversified giants can ever out-compound the category pure-plays. Recurring mix is the multiple: model it before the market re-rates it."] },
    L5: { title: "Institutional", text: ["Allocator's frame: medtech is healthcare's quality-compounder sleeve: defensive volumes, oligopoly structures, and installed-base annuities, purchased at premium multiples that demand execution. Core the category owners with rising recurring mix, use the diversified giants as cheap carry and M&A optionality, and treat regulatory and liability tail risk as the sector's true drawdown source. Every franchise ultimately rests on two fragile things: a reimbursement code and a safety record."] }
  },

  quiz: [
    { q: "The global medical device market in 2025 is roughly:", choices: ["$60B", "$200B", "$600B, growing ~6-7% a year", "$5T"], answer: 2, explain: "Estimates cluster between $570B and $690B for 2025, with most forecasts around a 6-7% CAGR through 2034 on aging demographics." },
    { q: "The FDA's 510(k) pathway matters because:", choices: ["It requires the largest clinical trials", "95%+ of devices use it: ~$31M and months to market vs ~$94M and years for PMA", "It applies only to drugs", "It was abolished in 2020"], answer: 1, explain: "The 510(k)/PMA fork is the industry's economic constitution: proving equivalence is cheap and fast, so iteration structurally beats invention." },
    { q: "Intuitive Surgical earns most of its revenue from:", choices: ["Selling robots", "Advertising", "Recurring instruments, accessories, and service: ~80%+ of its $10.1B 2025 revenue", "Government grants"], answer: 2, explain: "The razor-and-blade model: each of the 3.1M+ procedures in 2025 consumed limited-use instruments, and every system carries a service contract." },
    { q: "The 2023 GLP-1 scare taught investors that:", choices: ["Devices are obsolete", "Markets price drug disruption sector-wide even when substitution is category-specific: ~$370B of market cap vanished, then largely recovered", "Drugs cannot affect device demand", "Bariatric surgery is medtech's largest market"], answer: 1, explain: "The derating hit everything; the earnings damage concentrated in a few categories. By late 2024 the FDA had even approved Zepbound for sleep apnea, turning screening into a device tailwind." },
    { q: "Medtech demand is considered defensive because:", choices: ["Devices are luxury goods", "Procedures are mostly need-based: a hip replacement is rarely discretionary", "Governments ban competition", "Prices always rise"], answer: 1, explain: "Volumes track demographics more than GDP. COVID's elective shutdown was the exception that proved the rule: deferred procedures returned as a multi-year backlog." },
    { q: "The largest pure-play medical device company by revenue is:", choices: ["Intuitive Surgical", "Edwards Lifesciences", "Medtronic, at ~$33.5B in fiscal 2025", "ResMed"], answer: 2, explain: "Medtronic leads the pure-plays; Abbott's ~$19B device segment and J&J MedTech's ~$32B sit inside diversified healthcare parents." },
    { q: "China's volume-based procurement (VBP) program:", choices: ["Raises device prices", "Cuts tendered category prices 50%+ and favors local champions like Mindray", "Applies only to drugs", "Was cancelled"], answer: 1, explain: "Centralized tenders trade volume for deep price cuts: multinationals must choose between margin pain and share loss in the world's key growth market." },
    { q: "A device franchise is most durably broken by:", choices: ["One weak quarter", "A safety recall or a reimbursement cut: the two events that reprice a franchise overnight", "A new CEO", "Currency moves"], answer: 1, explain: "Liability sagas (the Philips respirator recall) and CMS rate changes destroy value faster than any competitor: the moat rests on a safety record and a reimbursement code." }
  ],

  sources: [
    { name: "Fortune Business Insights: Medical Devices Market (2025)", url: "https://www.fortunebusinessinsights.com/industry-reports/medical-devices-market-100085", feeds: "market size, CAGR" },
    { name: "Intuitive Surgical Q3 2025 earnings release", url: "https://isrg.intuitive.com/news-releases/news-release-details/intuitive-announces-third-quarter-earnings-5", feeds: "procedures, placements, recurring revenue" },
    { name: "MedTech Dive: GLP-1s and medtech executives", url: "https://www.medtechdive.com/news/glp-1s-medtech-executives-q3/698329/", feeds: "GLP-1 impact, market cap correction" },
    { name: "FDA: Device Approvals and Clearances", url: "https://www.fda.gov/medical-devices/products-and-medical-procedures/device-approvals-and-clearances", feeds: "510(k)/PMA pathways, clearance data" }
  ]
};
