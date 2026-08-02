/* Industry Atlas - DIAGNOSTICS & TOOLS (full module, research-backed)
 * Anchors: global IVD market ~$113B in 2025 (Kalorama Information, 2025); Roche
 * Diagnostics FY2025 sales CHF 13.85B, +2% CER (Roche FY2025 results, Jan 29 2026);
 * Danaher Diagnostics Q4 2025 revenue $2.72B, +3% (Danaher, Jan 28 2026); Guardant
 * Health Q2 2025 revenue $232.1M, +31% y/y with Shield guided to $40-45M for 2025
 * (Guardant Q2 2025 results, SEC Ex-99.1); Labcorp FY2025 revenue +7% with $582.0M
 * deployed on acquisitions (Labcorp Q4/FY2025 release) and Quest closing the
 * University Hospitals outreach lab deal (Quest, Jan 27 2025); FDA's LDT rule
 * vacated Mar 31 2025 by E.D. Tex. in ACLA v. FDA, rescinded by FDA Sep 18 2025
 * (Venable, Apr 2025; AHA, Sep 2025); FDA has authorized 1,451 AI-enabled devices
 * through Dec 2025, 1,104 of them radiology (~76%), 331 authorized in 2025 alone
 * (The Imaging Wire / FDA AI device list, Dec 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["diagnostics"] = {
  meta: {
    id: "diagnostics", name: "Diagnostics & Tools", sector: "healthcare", status: "full",
    tagline: "The measurement layer of medicine: a sliver of health spending that gates the decisions, sold as a decade-long consumable annuity.",
    marketSize: { value: 113, unit: "$B", asOf: 2025, note: "global in vitro diagnostics revenue (Kalorama Information, 2025); clinical lab services and life-science tools sit alongside it" },
    cagr: { value: 5, range: [4, 7], horizon: "2025-2030" },
    maturity: "growth-mature", cyclicality: 2, capitalIntensity: 3, regulation: 5, disruption: 4
  },
  newsQuery: '("in vitro diagnostics" OR "liquid biopsy" OR "clinical laboratory" OR "Roche Diagnostics" OR Labcorp OR "Quest Diagnostics" OR Illumina OR "diagnostic testing" OR "cancer screening test")',

  overview: {
    definition: "Diagnostics and tools is the measurement layer of medicine: the instruments, reagents, assays, sequencers, and laboratories that convert a sample into a number a clinician can act on. It sells picks and shovels to biology, and it prices them as consumables.",
    howItWorks: [
      "The architecture is razor-and-blade, executed better here than almost anywhere. A manufacturer places an analyzer inside a hospital or reference lab, often at low or zero margin under a reagent-rental contract, and then sells the closed-system consumables that box consumes for the next 7 to 10 years. Switching means revalidating every assay on the menu, retraining staff, and refiling with accreditors: so installed bases move at glacial speed and consumable revenue behaves like a subscription with a clinical moat.",
      "Four groups sit on top of the manufacturing side: Roche, Abbott, Danaher, and Siemens Healthineers, with Thermo Fisher dominating the adjacent life-science tools stack. Roche Diagnostics booked CHF 13.85B in FY2025 sales (+2% at constant exchange rates), and Danaher's Diagnostics segment (Cepheid, Beckman Coulter, Radiometer) did $2.72B in Q4 2025 alone (+3%). Growth is unglamorous, but the base is enormous and the cash conversion is excellent.",
      "The services side is a different animal. In the United States, Labcorp and Quest run a national duopoly of reference labs that buy hospital outreach businesses as fast as health systems will sell them: Labcorp grew revenue about 7% in 2025 while deploying $582.0M on acquisitions, and Quest closed the University Hospitals outreach deal in January 2025. This is a route-density business: courier networks, phlebotomy sites, and fixed-cost analyzers where every incremental requisition drops through at high margin. Scale is not a nicety here, it is the entire thesis.",
      "The disruptive edge is molecular. Sequencing costs collapsed by orders of magnitude, and the money moved from the box to the algorithm and the claim: liquid biopsy for therapy selection, minimal residual disease monitoring, and multi-cancer early detection. Guardant Health did $232.1M of revenue in Q2 2025 (+31% y/y) and guided its Shield screening test to $40-45M for the year. The binding constraint is not science, it is reimbursement: a test without a CPT code, a coverage decision, and a payer contract is a research project with a sales force."
    ],
    history: [
      { era: "1950-1980", title: "Automation arrives", text: "Continuous-flow and discrete analyzers industrialize the hospital lab: chemistry panels move from craft to conveyor, and volume economics are born." },
      { era: "1988-2000", title: "CLIA and the reference lab", text: "The Clinical Laboratory Improvement Amendments put CMS in charge of lab quality; national reference labs consolidate a fragmented cottage industry into routes and megalabs." },
      { era: "2001-2015", title: "Molecular and the sequencing crash", text: "PCR goes mainstream, the genome is read, and sequencing cost falls faster than Moore's Law: Illumina builds a near-monopoly on the reading machines." },
      { era: "2016-2019", title: "Theranos and the trust reset", text: "A $9B fraud collapses on the simplest question in the industry: does the test actually work. Clinical validation becomes the industry's currency and its gate." },
      { era: "2020-present", title: "COVID boom, bust, and the screening bet", text: "Testing revenue explodes then evaporates, leaving overbuilt capacity; capital rotates to oncology screening and AI reads while the FDA's attempt to regulate lab-developed tests is vacated in March 2025." }
    ],
    trends: [
      { title: "Liquid biopsy scales", direction: "up", text: "Blood-based oncology testing is compounding at 30%-plus for the leaders (Guardant +31% in Q2 2025); the market for the category is forecast near 11% to 12% annual growth through 2030." },
      { title: "Lab consolidation grinds on", direction: "up", text: "Health systems keep selling outreach labs to Labcorp and Quest for cash and cost relief: $582.0M of Labcorp acquisitions in 2025 alone, and the pipeline is not close to empty." },
      { title: "AI reads the image", direction: "up", text: "The FDA has authorized 1,451 AI-enabled devices through 2025, 76% of them radiology: triage, quantification, and workflow, not autonomous diagnosis, is where the clearances actually land." },
      { title: "Regulatory perimeter reset", direction: "shift", text: "The vacatur of the FDA's LDT rule on March 31, 2025, handed labs back their operating freedom under CLIA, and handed investors a live question about how long that lasts." },
      { title: "China turns from tailwind to drag", direction: "down", text: "Volume-based procurement and domestic substitution compress prices and share for Western IVD players in a market that used to be their growth engine." }
    ],
    outlook: "A slow-growth core wrapped around two fast, contested frontiers. The installed-base businesses will keep compounding at low-to-mid single digits with excellent cash conversion, and the US lab duopoly will keep converting hospital outreach deals into route density. The upside case runs through oncology: if multi-cancer early detection wins reimbursement at scale, a $113B industry adds a genuinely new category rather than reshuffling the existing one. The downside is mundane and persistent: reimbursement compression, Chinese substitution, and the possibility that Congress eventually writes the LDT rule the courts just struck down."
  },

  structure: {
    suppliers: [
      { name: "Reagent and antibody makers", note: "Critical raw inputs; a single antibody lot failure can idle an assay line" },
      { name: "Instrument component chain (optics, fluidics, chips)", note: "Sequencers and analyzers are precision hardware with semiconductor content" },
      { name: "Consumables and plastics converters", note: "Tips, plates, cartridges: cheap per unit, enormous in aggregate" },
      { name: "Bioinformatics and cloud compute", note: "A sequencing run is a data problem before it is a clinical one" }
    ],
    producers: [
      { name: "Roche Diagnostics", note: "CHF 13.85B FY2025 sales (+2% CER): the largest IVD franchise on Earth" },
      { name: "Abbott, Danaher, Siemens Healthineers", note: "The rest of the big four: point-of-care, molecular, core lab, and imaging" },
      { name: "Thermo Fisher, Illumina, Qiagen", note: "Tools and sequencing: the supply side of research and molecular diagnostics" },
      { name: "Guardant, Exact Sciences, Natera", note: "The claims-driven insurgents building screening and monitoring franchises" }
    ],
    distributors: [
      { name: "Reference labs (Labcorp, Quest)", note: "Both a channel and a customer: they buy analyzers and resell the result" },
      { name: "Medical-surgical distributors", note: "McKesson-class logistics into physician offices and clinics" },
      { name: "Direct hospital contracts and GPOs", note: "Group purchasing organizations negotiate the placement economics" }
    ],
    customers: [
      { name: "Hospitals and health systems", note: "Core lab volume; increasingly sellers of their own outreach businesses" },
      { name: "Reference and specialty labs", note: "High-throughput buyers with real negotiating leverage" },
      { name: "Physician offices and retail sites", note: "Point-of-care testing where speed beats precision" },
      { name: "Pharma and biotech R&D", note: "The tools demand curve: funded by research budgets, so it cycles" }
    ],
    regulators: [
      { name: "FDA (CDRH)", note: "510(k), PMA, and breakthrough pathways; lost the LDT fight in March 2025" },
      { name: "CMS (CLIA and the fee schedule)", note: "Sets lab quality standards and, through the CLFS, the actual price of most tests" },
      { name: "EU IVDR and national notified bodies", note: "A stricter European regime that has forced menu rationalization" },
      { name: "China NMPA and NHSA procurement", note: "Approval plus volume-based tendering: the price setter in the largest emerging market" }
    ],
    capital: [
      { name: "Corporate balance sheets", note: "The big four self-fund; instruments are placed as capital the vendor carries" },
      { name: "Venture and growth equity", note: "Funds the screening insurgents through years of negative gross-to-net" },
      { name: "Private equity in lab services", note: "Roll-ups of specialty labs, pathology groups, and imaging centers" }
    ]
  },

  valueChain: {
    intro: "From a reagent vial to a reimbursed claim. Physical value concentrates in the instrument; economic value concentrates in the consumable and the coverage decision that lets someone bill for it.",
    stages: [
      { id: "inputs", name: "Reagents & instrument inputs", what: "Antibodies, enzymes, optics, fluidics, consumable plastics", players: "Thermo Fisher, Merck KGaA, specialty chemical suppliers", valueCapture: 3,
        economics: { grossMargin: [45, 60], capitalIntensity: 3, concentration: 3 },
        linksTo: ["chemicals", "manufacturing", "semiconductors"],
        deeper: "Quality here is regulatory, not commercial: a change in a reagent source can trigger revalidation of every assay downstream, which is why suppliers with locked-in specs enjoy renewal rates that look like software." },
      { id: "platforms", name: "Instruments & sequencers", what: "Analyzers, PCR systems, sequencers, mass spec", players: "Roche, Abbott, Danaher, Illumina, Sysmex", valueCapture: 4,
        economics: { grossMargin: [30, 45], capitalIntensity: 4, concentration: 5 },
        linksTo: ["medical-devices", "semiconductors", "manufacturing"],
        deeper: "The box is the customer-acquisition cost. Placements are frequently subsidized or structured as reagent rentals, because a decade of closed-system consumables is worth several multiples of the hardware. Watch placements as a leading indicator, not as revenue." },
      { id: "assays", name: "Assays, kits & menu", what: "The tests that run on the platform, cleared or lab-developed", players: "Roche, Cepheid, Qiagen, BioFire, specialty labs", valueCapture: 5,
        economics: { grossMargin: [55, 75], capitalIntensity: 2, concentration: 4 },
        linksTo: ["pharma", "biotech", "medical-devices"],
        deeper: "Menu breadth is the moat: a lab consolidates onto the platform that runs the most of what it needs. The March 2025 vacatur of the FDA's LDT rule preserved labs' ability to build their own assays under CLIA, which keeps the innovation cheap and the perimeter contested." },
      { id: "labs", name: "Clinical labs & pathology", what: "Running samples at scale and reporting results", players: "Labcorp, Quest, hospital labs, Sonic Healthcare", valueCapture: 4,
        economics: { grossMargin: [28, 40], capitalIntensity: 3, concentration: 4 },
        linksTo: ["hospitals", "health-insurance", "logistics"],
        deeper: "A route-density business dressed as medicine: couriers, draw sites, and fixed analyzers. Incremental volume drops through at high margin, which is exactly why Labcorp spent $582.0M on outreach acquisitions in 2025 and Quest bought the University Hospitals book in January 2025." },
      { id: "interpretation", name: "Interpretation & AI", what: "Reading images and slides, calling variants, flagging risk", players: "GE HealthCare, Siemens Healthineers, Philips, Paige, Tempus", valueCapture: 3,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 2 },
        linksTo: ["ai", "cloud", "data-infrastructure"],
        deeper: "The FDA has authorized 1,451 AI-enabled devices through December 2025 and 76% are radiology, with GE HealthCare alone holding 120 radiology authorizations. Almost all are triage and quantification tools: the reimbursement code for autonomous interpretation is the missing piece, not the algorithm." },
      { id: "reimbursement", name: "Coverage & reimbursement", what: "CPT codes, CLFS rates, payer contracts, prior authorization", players: "CMS, commercial payers, MolDX contractors", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 5 },
        linksTo: ["health-insurance", "government", "hospitals"],
        deeper: "Not a margin stage: a gate. A brilliant test with no coverage decision earns nothing, and a mediocre one with a favorable CLFS rate can fund a company. This is the single highest-variance node in the chain and the one investors most consistently underweight." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&Ls hide inside this industry. Manufacturers earn on consumables: revenue = installed base x pull-through per instrument, with 55% to 75% gross margins on the blade and thin-to-negative margin on the razor. Lab services earn on throughput: revenue = requisitions x revenue per requisition, with roughly 30% gross margins and enormous operating leverage on fixed analyzer and courier costs. Screening insurgents earn on claims: revenue = tests billed x realized reimbursement, where the gap between list price and cash collected is the whole story until coverage matures.",
      "Cash characteristics are unusually good for healthcare. Working capital is modest, capex runs in the mid-single digits of revenue for manufacturers, and the recurring consumable stream makes forecasting tractable. The risks are correspondingly specific: reimbursement rate cuts hit revenue with no cost offset, China's volume-based procurement resets price for an entire product line at once, and any menu concentrated in respiratory testing inherited a demand curve from the COVID period that has been mean-reverting ever since. Roche Diagnostics growing 2% at constant currency in FY2025 is the honest picture of the mature core."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 80, capitalIntensity: 45, pricingPower: 40, cyclicality: 30, operatingLeverage: 65 },
    lines: [
      { label: "Test volume", note: "Requisitions or cartridges: the demand tape, reported quarterly by the labs" },
      { label: "Revenue per test (price/mix)", note: "Where CLFS cuts and advanced-molecular mix fight each other" },
      { label: "Instrument placements", note: "Leading indicator of consumable revenue 2 to 4 quarters out" },
      { label: "Pull-through per instrument", note: "The annuity's true health: menu adoption inside the installed base" },
      { label: "Coverage and collections", note: "For screening names, cash collected vs tests billed is the only number that matters" }
    ],
    unitEconomics: {
      unit: "per test and per placed instrument (illustrative)",
      items: [
        { label: "Routine chemistry panel", value: "~$10 to $15", note: "CMS Clinical Laboratory Fee Schedule territory: commodity pricing, volume is the business" },
        { label: "Advanced molecular oncology panel", value: "10x to 100x a routine panel", note: "mix, not volume, drives lab margin; realized rates run well below list" },
        { label: "Instrument placement", value: "low or zero margin", note: "frequently a reagent-rental contract: the vendor carries the capital" },
        { label: "Consumable pull-through", value: "multiples of the box price over 7 to 10 years", note: "the annuity that funds the whole model" }
      ]
    }
  },

  kpiRefs: ["medtech-procedure-volume", "pharma-pipeline"],
  kpiLocal: [
    {
      id: "dx-pull-through", name: "Consumable Pull-Through", industries: ["diagnostics"],
      definition: "Annual consumable and reagent revenue generated per placed instrument.",
      formula: "Pull-through = consumable revenue / average active installed instruments",
      interpretation: "The health of the annuity. Rising pull-through means the customer is adding menu onto an existing box, the cheapest revenue in the industry. Falling pull-through with rising placements means the vendor is buying volume it has not yet earned.",
      healthy: "Pull-through growing while placements grow", warning: "Placements up, pull-through flat or down: the installed base is being bought, not utilized"
    },
    {
      id: "dx-reimbursed-rate", name: "Realized Reimbursement Rate", industries: ["diagnostics"],
      definition: "Cash actually collected per test billed, against the list or CLFS rate.",
      formula: "Realized rate = collected revenue / tests billed (compare to list and to CMS rate)",
      interpretation: "The gap between billing and banking. New molecular tests often collect a fraction of list until Medicare coverage and commercial contracts land; the convergence of realized rate toward the CLFS rate is the clearest proof a franchise is real.",
      healthy: "Realized rate converging on the CMS rate with denial rates falling", warning: "Volume growing while realized rate stalls: uncovered testing dressed as adoption"
    }
  ],

  health: {
    intro: "Diagnostics health is measured in three places: the durability of the installed base, the security of the reimbursement position, and the strength of the clinical evidence behind the menu.",
    pillars: [
      { name: "Reimbursement position", weight: 25, metrics: "Coverage decisions, CLFS exposure, denial rates, payer contract breadth", healthy: "Broad Medicare and commercial coverage; realized rate near list", warning: "Growth concentrated in uncovered or appeal-dependent testing" },
      { name: "Installed base & pull-through", weight: 25, metrics: "Placements, active instruments, consumable revenue per box, contract length", healthy: "Growing pull-through on a stable base with multi-year contracts", warning: "Competitive displacement, or placements that never convert to menu" },
      { name: "Menu & clinical evidence", weight: 20, metrics: "Cleared assays, guideline inclusion, published sensitivity and specificity", healthy: "Guideline-recommended tests with peer-reviewed validation", warning: "Marketing claims outrunning the published data (the 2016 lesson)" },
      { name: "Operating leverage", weight: 15, metrics: "Revenue per requisition, cost per test, lab utilization, route density", healthy: "Incremental volume dropping through above 40%", warning: "Overbuilt capacity chasing normalized volumes" },
      { name: "Geographic and regulatory risk", weight: 15, metrics: "China exposure, VBP tender outcomes, IVDR compliance, LDT policy shifts", healthy: "Diversified geography with compliant, funded regulatory pathways", warning: "Concentrated China revenue in a VBP category, or a menu resting on LDT status" }
    ],
    scoringNote: "Weight reimbursement above everything else. In diagnostics, the clinical result and the billable result are two different products, and only one of them pays."
  },

  valuation: {
    intro: "Value the annuity, not the instrument. Mature platforms trade on consumable durability, lab services on route density and free cash flow, and screening names on the market's estimate of a coverage decision that has not happened yet.",
    methods: [
      { name: "EV / EBITDA (lab services)", use: "Labcorp and Quest class: stable volume, roll-up accretion, real cash flow", avoid: "Applying it to pre-coverage screening names with negative EBITDA", strengths: "Matches a predictable, capital-light services model", weaknesses: "Buries the reimbursement risk inside a single normalized number", range: { low: 8, high: 12, asOf: 2025, note: "US reference-lab duopoly territory; M&A accretion supports the upper end" } },
      { name: "EV / Sales (platforms and tools)", use: "Roche, Abbott, Danaher, Thermo class where consumables mix is high", avoid: "Cross-reading it against lab services, whose margin structure is half as rich", strengths: "Comparable across mixed hardware-and-consumable models", weaknesses: "Says nothing about pull-through quality or China exposure", range: { low: 3, high: 6, asOf: 2025, note: "premium tracks consumable share and menu breadth, not headline growth" } },
      { name: "EV / Sales, growth-adjusted (screening)", use: "Guardant and Exact class compounding above 25% with coverage momentum", avoid: "Names with volume growth but a stalled realized reimbursement rate", strengths: "The only workable frame pre-profitability", weaknesses: "Effectively prices a binary coverage outcome as a smooth multiple", range: { low: 4, high: 10, asOf: 2025, note: "the range is a coverage-and-burn bet; Guardant grew 31% in Q2 2025" } },
      { name: "Reimbursement-adjusted DCF", use: "Sizing a single test franchise: eligible population x screening rate x realized rate", avoid: "Using list price or an unhaircut TAM as the revenue base", strengths: "Forces the analyst to model the payer, which is the actual business", weaknesses: "Highly sensitive to two assumptions nobody can verify in advance", range: { low: 0, high: 0, asOf: 2025, note: "qualitative framework, not a multiple: the discount lives in the coverage assumption" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a diagnostics name quickly: normalized EBITDA times a mix-adjusted multiple, minus net debt. Push the multiple up for consumable-heavy revenue, down for CLFS and China exposure.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.1, max: 12, step: 0.1, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 24, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -8, max: 30, step: 0.5, value: 5, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns diagnostics as a defensive annuity with a call option stapled to it: core the installed-base compounders and the US lab duopoly for cash flow and consolidation math, then size the screening insurgents against a coverage catalyst rather than a revenue run rate. The sector's mistake is buying volume growth; the sector's alpha is buying the quarter before a reimbursement decision.",
    debates: [
      { topic: "Multi-cancer early detection: new category or reimbursement mirage?", bull: "Screening is the largest untapped pool in oncology: Guardant's Shield went from launch to a $40-45M guide for 2025 with a Breakthrough Device designation and an NCI study behind it, and Medicare coverage for a blood-based screen would convert a niche into a multi-billion-dollar category almost overnight.", bear: "Coverage requires outcome data, not detection data, and the trials that answer it run for years. Meanwhile false positives generate downstream imaging costs that payers will be asked to absorb, and every quarter of delay burns cash against a multiple that already assumes the yes." },
      { topic: "Is the tools cycle normalizing or structurally lower?", bull: "Post-COVID destocking and the biotech funding drought were transient: instrument replacement cycles are due, pharma R&D budgets are stabilizing, and consumables never really left. The comps are finally clean.", bear: "China's volume-based procurement plus domestic substitution permanently removed a chunk of the growth algorithm, and academic and pharma budgets are not returning to the 2021 baseline. Roche Diagnostics at +2% CER in FY2025 may be the new normal, not a trough." },
      { topic: "Does AI commoditize the read or entrench the incumbents?", bull: "Algorithms are software margins layered on existing installed bases: GE HealthCare's 120 radiology AI authorizations run on GE scanners, and the incumbent who owns the workflow owns the inference.", bear: "The clearances are overwhelmingly triage and quantification, not diagnosis, and there is still no durable reimbursement path for the software itself. If payment ever arrives, it invites a pure-software entrant with none of the hardware cost base." }
    ],
    cycle: {
      where: "Early recovery in tools after a two-year destocking and funding trough, mid-cycle stability in core lab and services, and early-innings in oncology screening where reimbursement, not science, sets the pace. The regulatory perimeter has just reset in labs' favor after the March 2025 LDT vacatur.",
      drivers: "Utilization of healthcare services, pharma and academic research budgets, CMS fee-schedule policy, Chinese procurement tenders, and the pace of coverage decisions on molecular tests.",
      leads: [
        "CDC respiratory surveillance data (free, weekly): the cleanest proxy for infectious-disease test volume",
        "CMS Clinical Laboratory Fee Schedule postings and PAMA deadlines (cms.gov, free)",
        "FDA AI-enabled device authorization list updates (fda.gov, free, refreshed through the year)",
        "Labcorp and Quest quarterly volume and revenue-per-requisition prints (company IR, free)",
        "MolDX and Medicare Administrative Contractor coverage decisions on new molecular assays (free)"
      ]
    },
    exposure: [
      { vehicle: "Roche and Abbott class", note: "The installed-base compounders: low growth, high cash conversion, defensive" },
      { vehicle: "Danaher and Thermo Fisher", note: "Tools cyclicality with recovery optionality and best-in-class operating systems" },
      { vehicle: "Labcorp and Quest", note: "Route-density roll-ups converting hospital outreach deals into fixed-cost leverage" },
      { vehicle: "Guardant, Exact Sciences, Natera", note: "Coverage-decision equities: size for binary outcomes, not for DCF precision" },
      { vehicle: "Sysmex and Mindray", note: "Hematology and the Asia channel, including the local champion side of China's substitution trade" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Volume, price/mix, placements, and China commentary: the four numbers that move the group" },
      { when: "Annual (fall and year-end)", what: "CMS fee-schedule rulemaking and PAMA statutory deadlines reset lab pricing for the following year" },
      { when: "Medical congresses (ASCO, ADLM, ASH)", what: "Clinical validation data that precedes coverage by 12 to 24 months" },
      { when: "Coverage and clearance decisions", what: "MolDX determinations, FDA authorizations, and any Congressional revival of LDT oversight" }
    ],
    data: [
      { series: "CMS Clinical Laboratory Fee Schedule", source: "cms.gov (free)", why: "The literal price of most tests in the largest market" },
      { series: "FDA AI-enabled medical device list", source: "fda.gov (free)", why: "Authorization counts by specialty: 1,451 cumulative through Dec 2025" },
      { series: "CDC respiratory virus surveillance", source: "cdc.gov (free, weekly)", why: "Infectious-disease test volume proxy with no reporting lag" },
      { series: "Medicare Part B utilization files", source: "cms.gov (free, annual)", why: "Test-level volume and spend, the ground truth behind company claims" },
      { series: "Company quarterly releases", source: "Labcorp, Quest, Roche, Danaher IR (free)", why: "Requisition volume, pull-through, and realized reimbursement commentary" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Among the most defensive corners of healthcare: testing volume tracks utilization, which barely cycles. Tools and pharma-services exposure is the soft spot as research budgets get cut first." },
      { regime: "Rates rising", behavior: "Cash-burning screening names de-rate hardest since their value sits in distant coverage-dependent cash flows; installed-base compounders and the lab duopoly hold up on free cash flow." },
      { regime: "Reimbursement shock", behavior: "The sector's true bear case. A CLFS cut lands directly on revenue with no cost offset: rotate toward advanced-molecular mix and away from routine-panel volume." },
      { regime: "Geopolitical shock", behavior: "China exposure is the transmission line: procurement tenders and domestic substitution reprice product lines wholesale. Favor names with diversified geography and local manufacturing." }
    ]
  },

  players: [
    { name: "Roche Diagnostics", role: "Global IVD leader", country: "CH", real: true, note: "CHF 13.85B FY2025 sales, +2% CER: the widest menu and deepest installed base in the industry" },
    { name: "Abbott", role: "Point-of-care and core lab", country: "US", real: true, note: "Rapid diagnostics plus core lab and continuous glucose monitoring: the broadest channel reach" },
    { name: "Danaher", role: "Molecular and core lab operator", country: "US", real: true, note: "Cepheid, Beckman Coulter, Radiometer; Diagnostics segment revenue $2.72B in Q4 2025 (+3%)" },
    { name: "Siemens Healthineers", role: "Imaging plus lab diagnostics", country: "DE", real: true, note: "The imaging-and-IVD combination, with 89 FDA radiology AI authorizations behind it" },
    { name: "Thermo Fisher / Qiagen", role: "Life-science tools backbone", country: "US", real: true, note: "Reagents, instruments, and sample prep: the supply side of every research and molecular lab" },
    { name: "Illumina", role: "Sequencing platform", country: "US", real: true, note: "The razor-and-blade archetype: installed sequencers pulling through consumables for a decade" },
    { name: "Labcorp / Quest Diagnostics", role: "US reference-lab duopoly", country: "US", real: true, note: "Labcorp grew about 7% in 2025 on $582.0M of acquisitions; Quest closed the University Hospitals outreach deal in Jan 2025" },
    { name: "Guardant Health / Exact Sciences", role: "Screening and liquid-biopsy insurgents", country: "US", real: true, note: "Guardant Q2 2025 revenue $232.1M (+31%), Shield guided to $40-45M for 2025; Exact's Cologuard Plus gained Medicare coverage in March 2025" }
  ],

  geography: [
    { country: "US", role: "Largest market and the reimbursement rule-setter", note: "CMS pricing plus the Labcorp and Quest duopoly make it the industry's profit pool" },
    { country: "CH", role: "IVD headquarters", note: "Roche's diagnostics division alone is bigger than most national markets" },
    { country: "DE", role: "Instrument engineering", note: "Siemens Healthineers and a dense Mittelstand supplier base for optics and fluidics" },
    { country: "CN", role: "Growth market turned price battleground", note: "Volume-based procurement and domestic substitution reset economics for Western players" },
    { country: "JP", role: "Hematology and imaging strength", note: "Sysmex, Fujifilm, and Olympus hold defensible niches with global installed bases" },
    { country: "GB", role: "Screening policy laboratory", note: "NHS-scale pilots make Britain the world's test bed for population screening programs" }
  ],

  cycles: [
    { year: 1988, title: "CLIA passes", kind: "shift", text: "Congress hands lab oversight to CMS rather than the FDA, creating a quality regime that still defines the industry's boundaries. Lesson: the statute written after one crisis governs the next 40 years of business models." },
    { year: 2007, title: "The sequencing cost collapse", kind: "boom", text: "Next-generation sequencing drops the cost of reading a genome faster than any semiconductor curve, and Illumina builds a near-monopoly on the machines. Lesson: when the cost of measurement collapses, the value migrates to interpretation and reimbursement." },
    { year: 2016, title: "Theranos unravels", kind: "bust", text: "A $9B valuation built on undisclosed third-party analyzers collapses under regulatory inspection, and CMS revokes the lab's certificate. Lesson: in diagnostics the only durable asset is validated accuracy, and it cannot be marketed into existence." },
    { year: 2021, title: "The COVID testing peak", kind: "boom", text: "Emergency demand delivers multi-year revenue in quarters, funding capacity that the post-pandemic baseline cannot support. Lesson: emergency revenue is a windfall, not a franchise, and the capacity outlives the demand." },
    { year: 2025, title: "The LDT rule falls", kind: "shift", text: "On March 31 a federal court vacates the FDA's lab-developed test rule, holding that CLIA gave CMS the authority; HHS declines to appeal and the FDA rescinds the rule in September. Lesson: the regulatory perimeter is an asset on the balance sheet, and courts can revalue it overnight." }
  ],

  risks: [
    { name: "Reimbursement compression", severity: 4, likelihood: 4, transmission: "CLFS rate cuts or payer denial tightening -> revenue falls with no offsetting cost reduction -> lab margins compress and marginal specialty labs exit." },
    { name: "China procurement and substitution", severity: 3, likelihood: 4, transmission: "Volume-based tenders plus domestic-champion preference -> price resets across a product line at once -> Western IVD growth algorithm loses a full point or more." },
    { name: "Screening coverage failure", severity: 4, likelihood: 3, transmission: "Outcome data disappoints or Medicare declines coverage -> the multi-cancer detection category re-rates violently -> cash-burning insurgents face funding at punitive terms." },
    { name: "LDT re-regulation by statute", severity: 3, likelihood: 2, transmission: "Congress codifies what the courts struck down -> lab-developed tests face premarket review -> innovation cost rises and small specialty labs consolidate into the majors." },
    { name: "Clinical validity scandal", severity: 5, likelihood: 1, transmission: "A widely used assay proves unreliable -> recalls, CLIA sanctions, and litigation -> the trust discount spreads across the whole category, as it did after 2016." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Diagnostics is the measurement business of medicine: blood tests, scans, biopsies, and the machines and chemicals that make them possible. Companies sell an analyzer to a hospital cheaply, then sell the special chemicals it needs for the next decade, which is where the money is. The industry's favorite line is that most medical decisions rest on a test result while testing itself is a small slice of health spending: a cheap input with enormous leverage. The global market for these tests was about $113B in 2025."] },
    L2: { title: "Intermediate", text: ["Three models coexist. Manufacturers such as Roche (CHF 13.85B in FY2025 diagnostics sales) place instruments and earn on consumables at 55% to 75% gross margins. Reference labs such as Labcorp and Quest run high-volume testing networks where extra samples drop straight to profit, which is why Labcorp spent $582.0M buying hospital outreach labs in 2025. Newer companies such as Guardant Health (+31% revenue growth in Q2 2025) sell blood-based cancer tests, and for them the crucial question is not the science but whether insurers will pay."] },
    L3: { title: "Advanced", text: ["Analyze by node. For platforms, track placements and consumable pull-through per instrument: the box is customer-acquisition cost, the blade is the annuity. For labs, track requisition volume against revenue per requisition, since mix shift into advanced molecular testing is the only defense against fee-schedule erosion. For screening names, track realized reimbursement per test billed against list, because volume without collection is not a business. The March 2025 vacatur of the FDA's LDT rule preserved cheap assay innovation under CLIA, which matters most to the specialty labs."] },
    L4: { title: "Expert", text: ["Trade the coverage calendar, not the earnings calendar. MolDX determinations, CMS fee-schedule rulemaking, and medical-congress data readouts lead revenue by 12 to 24 months. Live debates: whether multi-cancer early detection wins outcome-based coverage, whether the tools cycle is normalizing or structurally lower after China's procurement reset, and whether the 1,451 FDA-authorized AI devices (76% radiology) entrench incumbents or invite software entrants once someone finally pays for inference. Position sizing in screening names should reflect binary payer outcomes."] },
    L5: { title: "Institutional", text: ["Allocator's frame: this is defensive healthcare cash flow with an embedded oncology option. Core the installed-base compounders and the US lab duopoly for consolidation math and free cash flow, then fund a separate, smaller sleeve of coverage-decision equities where the payoff is asymmetric and the timing is regulatory rather than commercial. The structural risk is not competition, it is the payer: every thesis in this sector eventually reduces to who decides the test is worth paying for, and at what price."] }
  },

  quiz: [
    { q: "The dominant business model in diagnostics instruments is:", choices: ["Selling analyzers at high margin", "Razor-and-blade: place the box cheaply, earn on closed-system consumables for 7 to 10 years", "Licensing patents", "Government contracting"], answer: 1, explain: "Switching platforms means revalidating the entire assay menu, so installed bases are sticky and the consumable stream behaves like a subscription with a clinical moat." },
    { q: "Roche Diagnostics reported FY2025 sales of roughly:", choices: ["CHF 3B", "CHF 13.85B, up 2% at constant exchange rates", "CHF 45B", "CHF 90B"], answer: 1, explain: "The industry's largest IVD franchise growing 2% at constant currency is the honest picture of a mature, cash-generative core." },
    { q: "Labcorp and Quest keep buying hospital outreach labs because:", choices: ["Hospitals are closing", "Lab services is a route-density business where incremental volume drops through at high margin", "Regulators require it", "The tests are patented"], answer: 1, explain: "Fixed analyzers and courier networks mean each additional requisition is nearly pure contribution: Labcorp deployed $582.0M on acquisitions in 2025 for exactly that reason." },
    { q: "For a new molecular test, the highest-variance factor in its economics is:", choices: ["Manufacturing cost", "The reimbursement decision: coverage, CPT code, and realized rate", "Instrument availability", "Sample logistics"], answer: 1, explain: "A test with no coverage decision earns nothing regardless of clinical performance; realized rate converging on the CMS rate is the proof a franchise is real." },
    { q: "On March 31, 2025, a federal court:", choices: ["Upheld the FDA's LDT rule", "Vacated the FDA's lab-developed test rule, holding that CLIA vested authority with CMS", "Banned liquid biopsy", "Raised the CLFS"], answer: 1, explain: "ACLA v. FDA in the Eastern District of Texas; HHS declined to appeal and the FDA formally rescinded the rule in September 2025." },
    { q: "Of the 1,451 AI-enabled devices the FDA had authorized through December 2025:", choices: ["Most are in oncology", "About 76% are radiology devices, mostly triage and quantification tools", "None are cleared for clinical use", "All replace physicians"], answer: 1, explain: "Radiology dominates the list with 1,104 authorizations; the clearances are workflow tools, and the missing piece is reimbursement for the software itself." },
    { q: "Guardant Health's Q2 2025 result illustrates that:", choices: ["Liquid biopsy is shrinking", "Blood-based oncology testing is compounding fast: $232.1M revenue, up 31% y/y, with Shield guided to $40-45M for the year", "Screening is already fully reimbursed", "The category is unregulated"], answer: 1, explain: "Growth is real but the equity value still hinges on future coverage decisions, which is why these names trade on multiples rather than earnings." },
    { q: "The clearest lesson of the 2021 COVID testing peak was:", choices: ["Testing demand is permanent", "Emergency revenue is a windfall, not a franchise: the capacity outlives the demand", "Instruments do not matter", "Regulation prevents surges"], answer: 1, explain: "Multi-year revenue arrived in quarters and funded capacity the post-pandemic baseline could not support, leaving years of difficult comparisons behind it." }
  ],

  sources: [
    { name: "Kalorama Information: The IVD Market in 2025", url: "https://kaloramainformation.com/the-in-vitro-diagnostics-market/", feeds: "market size" },
    { name: "Roche FY2025 results (Jan 29, 2026)", url: "https://www.roche.com/investors/updates/inv-update-2026-01-29", feeds: "diagnostics division sales" },
    { name: "Labcorp Q4 and FY2025 results", url: "https://ir.labcorp.com/news-releases/news-release-details/labcorp-announces-2025-fourth-quarter-and-full-year-results", feeds: "lab services, consolidation" },
    { name: "Venable: Federal District Court Vacates FDA's LDT Final Rule", url: "https://www.venable.com/insights/publications/2025/04/federal-district-court-vacates-fdas-ldt-final-rule", feeds: "regulation" }
  ]
};
