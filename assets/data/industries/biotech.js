/* Industry Atlas - BIOTECHNOLOGY (full module, research-backed)
 * Anchors: (1) XBI fell ~20% into an April 4, 2025 low, rallied ~75% off it,
 * and finished 2025 up ~36%; it was up ~30% YTD through July 30, 2026
 * (stockanalysis.com XBI performance; Mizuho 2026 biotech outlook).
 * (2) Biopharma VC deployed ~$33.8B in 2025, concentrated in later-stage
 * assets, with early-stage starved (PitchBook via BioSpace, Dec 2025).
 * (3) Cumulative Phase 1 to approval success ~9.6% across 9,985 phase
 * transitions in 7,455 programs at 1,103 companies; Phase 2 is the killer
 * (~31%); biomarker-selected programs run ~25% vs ~8% unselected
 * (BIO / Informa / QLS clinical development success rates study).
 * (4) FDA CDER approved 46 novel drugs in 2025, 43% first in class, 23 with
 * orphan designation (FDA CDER New Drug Therapy Approvals, Jan 2026).
 * (5) ~$180B to $300B of branded revenue loses exclusivity 2025-2030
 * (~190 drugs, 69 blockbusters) against ~$180B of dry powder at the top 12
 * acquirers (PitchBook; CNBC, Jan 7, 2026).
 * (6) China out-licensing reached ~$135.7B of 2025 deal value, ~38% of large
 * pharma licensing deals and ~30% of industry upfronts, with average upfronts
 * up from ~$52M (2022) to ~$172M (early 2026) (Fierce Biotech; Vision Life
 * Sciences China out-licensing tracker, 2026). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["biotech"] = {
  meta: {
    id: "biotech", name: "Biotechnology", sector: "healthcare", status: "full",
    tagline: "The only industry whose product is a probability: ~10% of drugs that enter humans reach a patient, and the other 90% are financed anyway.",
    marketSize: { value: 620, unit: "$B", asOf: 2025, note: "global biologic and biotech-derived medicine revenue; estimates run ~$450B to ~$630B depending on definition, and roughly half of prescription drug sales now come from biotech-derived molecules" },
    cagr: { value: 9, range: [7, 12], horizon: "2025-2030" },
    maturity: "growth", cyclicality: 4, capitalIntensity: 3, regulation: 5, disruption: 5
  },

  newsQuery: '(biotech OR biotechnology OR "clinical-stage" OR "phase 3 results" OR "FDA approval" OR "licensing deal" OR CRISPR OR "gene therapy")',

  overview: {
    definition: "Biotechnology invents medicines out of biology rather than chemistry: antibodies, cell and gene therapies, RNA, and engineered proteins. Commercially it is an options market wearing lab coats, where thousands of mostly loss-making companies sell claims on future science to investors and to the large pharma companies that will eventually buy or license the winners.",
    howItWorks: [
      "The unit of production is a program, and the unit of value is a probability. Across the industry's largest study of phase transitions (9,985 transitions, 7,455 programs, 1,103 companies), the cumulative odds of getting from Phase 1 into a patient's hands are about 9.6%. Phase 2 is where programs die: roughly a 31% success rate, because that is the first honest test of whether the biology works in humans. Selection matters more than effort: biomarker-selected programs approve at about 25% versus about 8% unselected, which is why modern biotech is built around finding the right patients before it finds the right dose.",
      "Almost nobody in this industry earns revenue. A clinical-stage biotech is a cash-burning research vehicle whose balance sheet is its business model: raise, burn, generate data, revalue, raise again. The financing cycle therefore IS the industry cycle. Biopharma venture deployed about $33.8B in 2025, up from a depressed 2024 but far below the ~$42B 2021 peak, and, critically, concentrated in later-stage companies with clinical assets while seed and Series A went hungry. The listed market told the same story with more volatility: the XBI fell about 20% into an April 4, 2025 low on tariff and policy fear, rallied roughly 75% off that bottom, and closed 2025 up about 36%.",
      "The exit machine is pharma's arithmetic problem. Roughly $180B to $300B of branded revenue loses exclusivity between 2025 and 2030 (about 190 drugs, 69 of them blockbusters), while the top 12 acquirers sit on something like $180B of deployable capacity. Big pharma does not need to like biotech; it needs to replace revenue on a schedule set by patent expiry. That converts into two payment forms: outright acquisition (often at 60% to 100%+ premiums for de-risked Phase 2 and 3 assets) and licensing, where the biotech keeps the science and sells geography, taking an upfront payment, contingent milestones, and a royalty. Milestones are the industry's most-misread line item: the headline biodollar total is almost never paid.",
      "Two forces are reshaping who captures that money. First, China: Chinese biotechs generated roughly $135.7B of out-licensing deal value in 2025 and accounted for about 38% of large pharma's licensing deals and about 30% of all upfronts, with the average upfront rising from ~$52M in 2022 to ~$172M by early 2026. Western pharma can now buy a fast-follower antibody or ADC from Suzhou for a fraction of what a Boston Series C costs, which compresses valuations for undifferentiated US assets and rewards genuine novelty. Second, obesity: the GLP-1 class has pulled capital, trial sites, and management attention toward metabolic disease, funding adjacent bets (muscle preservation, oral incretins, cardiometabolic) while starving everything that looks like a crowded me-too. Meanwhile the regulator kept delivering: FDA's drug center approved 46 novel medicines in 2025, 43% of them first in class."
    ],
    history: [
      { era: "1976-1990", title: "Recombinant beginnings", text: "Genentech is founded in 1976 and recombinant human insulin arrives in 1982: biology becomes manufacturable. Amgen's EPO proves a single protein can build a multibillion-dollar company." },
      { era: "1991-2001", title: "The genomics bubble", text: "The Human Genome Project turns sequences into stock stories; capital floods in on the promise that reading the code equals curing disease. The 2001 collapse teaches the industry that targets are not drugs." },
      { era: "2002-2012", title: "Antibodies and orphans", text: "Monoclonals become the reliable modality and the Orphan Drug pathway makes small populations economic. Biosimilar law (BPCIA, 2010) sets the rules for how biologic cliffs will erode: slowly." },
      { era: "2013-2021", title: "The platform era and the peak", text: "CAR-T (2017), CRISPR, and mRNA move from paper to approval; COVID vaccines compress development to 11 months. Zero rates fund a record ~$42B of venture and the widest IPO window the sector has seen." },
      { era: "2022-present", title: "Reset, then re-rating", text: "Rates rise, the XBI draws down roughly (60)% peak to trough, and much of the listed universe trades near or below net cash. Capital returns selectively by 2025: ~$33.8B of venture, a reopened M&A bid against the patent cliff, and China as the pipeline's new low-cost supplier." }
    ],
    trends: [
      { title: "Capital concentrates late", direction: "shift", text: "The ~$33.8B deployed in 2025 went disproportionately to companies with clinical data. Discovery-stage formation slowed, which is a 2029 pipeline problem being created now." },
      { title: "The patent-cliff bid", direction: "up", text: "$180B to $300B of 2025-2030 expiries against ~$180B of acquirer dry powder makes M&A the sector's most dependable exit, and the reason quality assets clear at large premiums." },
      { title: "China as pipeline supplier", direction: "up", text: "About 38% of large pharma licensing deals now originate from Chinese partners. Speed and cost advantages are real; the discount to Western assets is closing fast." },
      { title: "Obesity gravity", direction: "shift", text: "GLP-1 economics bend capital allocation, trial capacity, and management attention toward cardiometabolic, while crowded oncology me-too programs struggle to raise at all." },
      { title: "Modality maturation", direction: "up", text: "ADCs, bispecifics, and in-vivo cell engineering move from novelty to workhorse; one-time gene therapies still struggle with reimbursement math despite clinical wins." }
    ],
    outlook: "The setup into the late 2020s is unusually clean on demand and unusually harsh on selection. The buyers must buy: patent expiry is a calendar, not an opinion, and the money to fund it exists. What has changed is that the buyers can now shop globally and pay for differentiation only. Expect a barbell: genuinely novel biology and de-risked late-stage assets clearing at rich premiums, while the long tail of undifferentiated clinical-stage companies dilutes, reverse-merges, or liquidates. The sector's beta remains a rates-and-risk-appetite trade; its alpha remains a probability-estimation trade."
  },

  structure: {
    suppliers: [
      { name: "Tools & reagents (Thermo Fisher, Danaher, Illumina)", note: "Sequencers, instruments, and consumables: the picks and shovels that get paid regardless of outcome" },
      { name: "CROs (IQVIA, ICON, Fortrea)", note: "Run the trials; the variable cost line that scales with ambition" },
      { name: "CDMOs (Lonza, Samsung Biologics, WuXi Biologics, Catalent)", note: "Contract manufacturing: why a biotech can be capital-light until launch" },
      { name: "Academic labs & NIH-funded science", note: "The unpriced upstream: most first-in-class targets trace to public funding" }
    ],
    producers: [
      { name: "Clinical-stage biotechs", note: "The bulk of the listed universe: no revenue, a runway, and one or two binary events" },
      { name: "Commercial-stage biotechs (Vertex, Regeneron, argenx class)", note: "Graduated: real product revenue at pharma-grade gross margins" },
      { name: "Platform companies (Alnylam, BioNTech, CRISPR names)", note: "Sell repeatability rather than a single asset; valued on the platform's shots on goal" },
      { name: "Chinese biotechs (Hengrui, Akeso, Legend class)", note: "Fast, cheap, and increasingly first: now ~38% of large pharma's in-licensing" }
    ],
    distributors: [
      { name: "Pharma partners as commercial channel", note: "Most biotechs never build a sales force; they rent one via licensing" },
      { name: "Specialty pharmacy & wholesalers (McKesson, Cencora, Cardinal)", note: "Three firms move the vast majority of US drug volume, including specialty biologics" }
    ],
    customers: [
      { name: "Large pharma (acquirer and licensee)", note: "The true customer for most biotechs: they buy the program, not the pill" },
      { name: "Payers and PBMs", note: "Decide whether an approved drug is a business; formulary access is the second approval" },
      { name: "Providers and specialty centers", note: "Cell and gene therapies require certified centers, which gates launch curves" },
      { name: "Patients and advocacy groups", note: "In rare disease, organized patients shape trial design and regulatory urgency" }
    ],
    regulators: [
      { name: "FDA (CDER and CBER)", note: "46 novel approvals in 2025; the agency's posture is the sector's single largest exogenous variable" },
      { name: "EMA, PMDA, NMPA", note: "Europe, Japan, and China: second and third approvals set the ex-US economics" },
      { name: "CMS and the IRA regime", note: "Medicare negotiation from 2026 shortens the effective monopoly, and treats small molecules more harshly than biologics" },
      { name: "USPTO and patent courts", note: "Composition-of-matter claims are the asset; IPR challenges and obviousness rulings can erase a company" },
      { name: "CFIUS / BIOSECURE-style review", note: "Cross-border science is now a national security question, especially for China-linked deals" }
    ],
    capital: [
      { name: "Venture capital (crossover and dedicated funds)", note: "~$33.8B deployed in 2025, tilted to clinical-stage" },
      { name: "Public equity (IPOs and follow-ons)", note: "Follow-ons, not IPOs, are the real financing channel; every good data day is a chance to sell stock" },
      { name: "Royalty monetization (Royalty Pharma class)", note: "Selling future royalties for present cash: non-dilutive capital for approved assets" },
      { name: "Venture debt and structured deals", note: "Expensive, covenant-heavy, and often the last stop before a strategic sale" }
    ]
  },

  valueChain: {
    intro: "From a public-funded target to a partnered royalty stream. Value capture is inverted relative to effort: the discovery that took 15 years often sells for a fraction of what the last two years of clinical de-risking are worth.",
    stages: [
      { id: "discovery", name: "Target discovery & lead", what: "Biology, targets, screening, lead optimization", players: "Academia, platform biotechs, AI-discovery firms", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 1 },
        linksTo: ["ai", "diagnostics"],
        deeper: "Cheap in dollars, expensive in years. Human genetic validation is the strongest known predictor of eventual approval, which is why genetics-anchored programs command a valuation premium before a single patient is dosed." },
      { id: "preclinical", name: "Preclinical & IND", what: "Toxicology, manufacturing scale-up, regulatory filing", players: "Charles River, CROs, in-house teams", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 2 },
        linksTo: ["diagnostics", "chemicals"],
        deeper: "Typically $5M to $20M and 12 to 24 months to reach an IND. This is the stage venture abandoned in 2025, and the reason the 2030 pipeline will be thinner than the 2026 one." },
      { id: "clinical", name: "Clinical development", what: "Phase 1 safety, Phase 2 proof of concept, Phase 3 confirmation", players: "Sponsors, CROs, trial sites, investigators", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 3, concentration: 2 },
        linksTo: ["hospitals", "pharma"],
        deeper: "Where 90% of the money and all of the value creation happen. Phase 2 is the graveyard (~31% advance); a clean Phase 2 readout can re-rate a company 3x to 10x in a day, which is why position sizing here is an options exercise, not an equity one." },
      { id: "manufacturing", name: "Biomanufacturing", what: "Cell lines, bioreactors, fill-finish, cold chain", players: "Lonza, Samsung Biologics, WuXi Biologics, in-house plants", valueCapture: 3,
        economics: { grossMargin: [25, 40], capitalIntensity: 5, concentration: 4 },
        linksTo: ["chemicals", "manufacturing"],
        deeper: "The reason biologic cliffs erode gently: making a biosimilar is genuinely hard, so entrants are few and price decay is measured in years, not the 80%+ two-year collapse small molecules suffer. Capacity is booked years ahead and geopolitics now prices into supplier choice." },
      { id: "commercial", name: "Approval & commercialization", what: "Filing, launch, formulary access, pricing", players: "Sponsors, pharma partners, payers, PBMs", valueCapture: 4,
        economics: { grossMargin: [80, 92], capitalIntensity: 2, concentration: 3 },
        linksTo: ["pharma", "health-insurance"],
        deeper: "Approval is permission, not demand. Launch trajectories are set by reimbursement and specialty-center readiness; the graveyard of approved-but-commercially-dead drugs is large, and rare-disease launches live or die on patient finding." },
      { id: "capital", name: "Capital & exit", what: "Financing rounds, licensing, M&A, royalty sales", players: "VCs, crossover funds, pharma BD teams, bankers", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 3 },
        linksTo: ["venture-capital", "capital-markets", "investment-banking"],
        deeper: "The stage that decides whether the science ever becomes a business. M&A is the dominant exit: patent-cliff math plus ~$180B of acquirer dry powder keeps a persistent bid under de-risked assets, while licensing lets a biotech monetize geography without giving up the franchise." }
    ]
  },

  financials: {
    businessModel: [
      "There are three P&Ls hiding under one sector label. Clinical-stage: no revenue, R&D is the whole income statement, and the only real metrics are burn rate, runway, and the calendar of readouts. Platform and partnered: collaboration revenue that is really amortized upfronts plus contingent milestones, which flatters growth in the year a deal signs and vanishes the next. Commercial-stage: a pharma P&L at 80% to 92% gross margins with enormous operating leverage, because the cost of the second million doses is trivial against the $2B+ (failures included) that produced the first.",
      "The financing structure is the business model. A biotech's equity is a call option on data with a maturity set by cash runway, which is why runway management is strategy: raising 18 months before a readout is dilution, raising 3 months before it is desperation, and the market prices the difference. Milestone-heavy licensing deals deserve skepticism (biodollar headlines rarely pay out in full), while royalty monetization and structured debt trade future upside for present survival. The single most useful discipline in the sector is to value programs individually with honest probabilities and then check the total against enterprise value net of cash."
    ],
    fingerprint: { grossMargin: 85, recurringRevenue: 25, capitalIntensity: 40, pricingPower: 72, cyclicality: 78, operatingLeverage: 90 },
    lines: [
      { label: "R&D expense", note: "The real output line: read it per program, not in total" },
      { label: "Cash, equivalents, and runway", note: "The survival metric; quarters of runway is the sector's most predictive number" },
      { label: "Collaboration & milestone revenue", note: "Lumpy, non-recurring, and routinely mistaken for growth" },
      { label: "Product revenue & gross-to-net", note: "For commercial names, the gap between list and net is where the launch story is really told" },
      { label: "Share count and ATM activity", note: "Dilution is the true cost of capital here; track shares outstanding, not just the market cap" }
    ],
    unitEconomics: {
      unit: "per development program (illustrative)",
      items: [
        { label: "Discovery to IND", value: "~$5M to $20M", note: "12 to 24 months; the stage venture capital retreated from in 2025" },
        { label: "Phase 1 to Phase 3 out-of-pocket", value: "~$50M to $500M+", note: "Phase 3 dominates; large cardiometabolic outcome trials sit at the top of the range" },
        { label: "All-in cost per approval", value: "~$2B+", note: "Capitalized, failures included: the ~90% that die are paid for by the ~10% that live" },
        { label: "Probability, Phase 1 to approval", value: "~10%", note: "~9.6% cumulative (BIO/Informa/QLS); ~25% if biomarker-selected, ~8% if not" }
      ]
    }
  },

  kpiRefs: ["pharma-pipeline", "pharma-loe-exposure"],
  kpiLocal: [
    {
      id: "biotech-runway", name: "Cash Runway (quarters)", industries: ["biotech"],
      definition: "How long existing cash funds operations at the current burn rate, measured against the next value-creating readout.",
      formula: "Runway = Cash and equivalents / quarterly net operating burn",
      interpretation: "The sector's survival clock. A company with runway past its next major readout controls its financing terms; one without it will raise into weakness, and the market discounts that in advance.",
      healthy: "8+ quarters, clearing the next binary event with room", warning: "Under 4 quarters ahead of a readout, or a going-concern flag"
    },
    {
      id: "biotech-loa", name: "Likelihood of Approval (LoA)", industries: ["biotech", "pharma"],
      definition: "The probability a program in a given phase and indication ultimately reaches approval, used to risk-adjust every forecast.",
      formula: "LoA = product of remaining phase transition probabilities (Phase 1 to approval baseline ~9.6%)",
      interpretation: "The number that converts a science story into a valuation. Phase 2 is the killer transition (~31%); biomarker selection roughly triples the odds (~25% vs ~8%); rare disease and oncology sit far apart on the same scale.",
      healthy: "Genetics-validated or biomarker-selected programs well above phase baselines", warning: "Crowded mechanism, unselected population, and a single-asset company"
    }
  ],

  health: {
    intro: "Biotech health is not measured in margins; it is measured in months of cash, quality of evidence, and whether the company controls the timing of its own decisions.",
    pillars: [
      { name: "Cash runway & funding access", weight: 30, metrics: "Quarters of runway, burn trajectory, ATM usage, quality of shareholder base", healthy: "Funded through the next two catalysts", warning: "Financing needed within 4 quarters, pre-readout" },
      { name: "Evidence quality", weight: 25, metrics: "Randomization, control arms, powering, biomarker selection, replication", healthy: "Controlled data with prespecified endpoints", warning: "Single-arm, post-hoc subgroups, moving endpoints" },
      { name: "Pipeline breadth vs binarity", weight: 20, metrics: "Number of independent shots on goal, mechanism diversity", healthy: "3+ uncorrelated programs or a validated platform", warning: "One asset, one indication, one readout" },
      { name: "Partnering & ownership economics", weight: 15, metrics: "Retained rights, royalty rates, milestone realism, geography splits", healthy: "Ex-US partnered, US rights retained", warning: "Everything licensed away for survival cash" },
      { name: "Governance & dilution discipline", weight: 10, metrics: "Share count growth, insider alignment, board quality, capital-allocation record", healthy: "Measured issuance into strength", warning: "Serial dilution at discounts, promotional disclosure" }
    ],
    scoringNote: "Weight runway heaviest: in biotech, being right about the science and wrong about the financing calendar produces the same outcome for shareholders as being wrong about both."
  },

  valuation: {
    intro: "Nothing here can be valued on current earnings, because there usually are none. The sector's valuation work is probability-weighted forecasting plus a hard cash-balance sanity check.",
    methods: [
      { name: "rNPV (risk-adjusted NPV)", use: "The default: value each program on peak sales, ramp, patent life, and phase-specific LoA", avoid: "Optimistic LoAs and peak-sales numbers that assume no competitor exists in 2032", strengths: "Forces explicit, auditable assumptions; sums to a defensible enterprise value", weaknesses: "Wildly sensitive to LoA and discount rate; small input changes swing value by multiples", range: { low: 10, high: 14, asOf: 2025, note: "% discount rates typical for clinical-stage programs; 8% to 10% for approved assets" } },
      { name: "EV / peak sales", use: "Fast comparison across partnered or late-stage assets", avoid: "Preclinical companies, where peak sales is a fantasy with a spreadsheet", strengths: "Simple, widely quoted, useful for M&A framing", weaknesses: "Ignores timing, probability, and the cost of getting there", range: { low: 2, high: 5, asOf: 2025, note: "x risk-adjusted peak sales for Phase 3 and approved assets" } },
      { name: "Cash-adjusted EV (negative EV screen)", use: "Trough conditions, when large parts of the listed universe trade at or below net cash", avoid: "Treating cheapness as safety: burn destroys the cash you are buying", strengths: "Anchors the downside in a sector with no earnings floor", weaknesses: "Says nothing about whether the science works", range: { low: 0, high: 1, asOf: 2025, note: "EV/cash below 1.0x flags a market verdict on the pipeline, not a bargain" } },
      { name: "M&A comps and takeout premiums", use: "Framing what an acquirer would pay for a de-risked asset against the patent cliff", avoid: "Assuming every good asset gets bought; most do not", strengths: "Reflects the real clearing price set by the sector's dominant exit", weaknesses: "Premiums are event-driven and cannot be underwritten as a base case", range: { low: 60, high: 120, asOf: 2025, note: "% premiums typical for Phase 2/3 acquisitions in the current cliff-driven cycle" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Frame a late-stage biotech quickly: risk-adjusted peak sales times a peak-sales multiple, minus net debt (enter net cash as a negative). The honest version replaces this with a program-by-program rNPV.",
      inputs: [
        { id: "vc-ebitda", label: "Risk-adjusted peak sales ($B)", min: 0.1, max: 10, step: 0.1, value: 1.5, fmt: "money" },
        { id: "vc-mult", label: "EV / peak sales multiple", min: 1, max: 8, step: 0.25, value: 3, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B), negative = net cash", min: -5, max: 10, step: 0.25, value: -1, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats biotech as a barbell of options and cash. Core exposure sits in commercial-stage compounders with validated franchises, funded by a basket of clinical-stage names sized as premium at risk rather than as equity positions: no single readout should be able to break the book. The sector's beta is a rates-and-risk-appetite trade (the XBI's ~20% drop into April 2025 and ~75% rally off it in one year is the whole argument), while its alpha is disciplined probability estimation and knowing which balance sheets can wait.",
    debates: [
      { topic: "Is the 2025-2026 recovery a re-rating or a bounce?", bull: "The XBI's ~36% 2025 and ~30% first-half 2026 come with fundamentals attached: 46 novel FDA approvals in 2025, a patent cliff that forces acquirers to transact, and ~$180B of dry powder aimed at exactly this asset class. Recoveries built on M&A demand are more durable than recoveries built on rates.", bear: "Two thirds of that move is duration and risk appetite, not science. Venture at ~$33.8B is still a third below the 2021 peak, early-stage formation is shrinking, and a sector that needs the equity window open to survive is one hawkish quarter from repricing again." },
      { topic: "Does China licensing destroy or expand the US biotech value pool?", bull: "It expands it: cheaper, faster assets let pharma run more shots on goal, and Western biotechs that own genuinely novel biology now compete against commoditized fast-followers rather than being confused with them. Differentiation gets paid more, not less.", bear: "It destroys the middle. When ~38% of large pharma's licensing deals and ~30% of upfronts come from China, the marginal buyer of an undifferentiated US Phase 1 asset has a cheaper alternative on speed dial, and that is most of the listed universe. Add BIOSECURE-style politics and both the discount and the risk are real." },
      { topic: "Are one-time curative therapies a business or a science project?", bull: "Gene and cell therapies deliver durable benefit that chronic drugs cannot, and outcomes-based contracts plus rare-disease pricing are gradually solving reimbursement. Manufacturing costs fall with every scale generation.", bear: "The model fights itself: cure the prevalent patients and the market disappears, while payers resist million-dollar upfronts for benefits that show up on someone else's balance sheet years later. Several technically successful therapies have been withdrawn commercially, which is the clearest verdict available." }
    ],
    cycle: {
      where: "Early-to-mid recovery. Capital returned in 2025 (~$33.8B venture, a reopened follow-on window, XBI up ~36%) and kept running into 2026, but the recovery is concentrated: late-stage and differentiated assets are funded, early-stage formation is not. The M&A bid is the cycle's floor; the equity window is its ceiling.",
      drivers: "Real rates and risk appetite, the patent-expiry calendar at large pharma, FDA throughput and posture, and the relative cost of Chinese-sourced assets.",
      leads: [
        "FDA novel approvals and advisory committee calendar (fda.gov, free)",
        "ClinicalTrials.gov registrations and status changes: the pipeline's true leading indicator (free)",
        "Follow-on and IPO issuance counts: the financing window opening or shutting (SEC EDGAR, free)",
        "Announced licensing upfronts, especially China-sourced deal terms (company releases, free)",
        "XBI price and relative strength versus large-cap pharma as the risk-appetite gauge (free quotes)"
      ]
    },
    exposure: [
      { vehicle: "XBI (equal-weight biotech ETF)", note: "The sector's pure beta: equal weighting makes it a small-cap risk-appetite instrument, not a pharma proxy" },
      { vehicle: "Commercial-stage compounders (Vertex, Regeneron, argenx class)", note: "Real revenue, real margins: the ballast that lets the rest of the book be volatile" },
      { vehicle: "Platform names (Alnylam, BioNTech class)", note: "Buying repeatability: multiple shots on goal from one validated technology" },
      { vehicle: "Clinical-stage baskets", note: "Options, sized as premium: diversify across uncorrelated mechanisms or do not play" },
      { vehicle: "Tools and CDMOs (Thermo, Lonza class)", note: "Picks and shovels: paid on activity rather than outcomes, with a lag to the funding cycle" }
    ],
    catalysts: [
      { when: "Medical conferences (ASCO, ASH, AHA, EASD)", what: "Data drops that reprice entire mechanisms in an afternoon" },
      { when: "PDUFA dates and advisory committees", what: "Binary regulatory events with published calendars: the sector's scheduled volatility" },
      { when: "JPMorgan Healthcare Conference (January)", what: "The deal-announcement window: M&A and licensing cluster here" },
      { when: "Quarterly filings", what: "Cash, burn, runway, and share count: the survival arithmetic updated four times a year" }
    ],
    data: [
      { series: "FDA novel drug approvals and AdComm calendar", source: "fda.gov (free)", why: "Regulatory throughput and scheduled binary events, from the primary source" },
      { series: "ClinicalTrials.gov registry and status", source: "clinicaltrials.gov (free API)", why: "Which programs exist, who is enrolling, and when readouts land" },
      { series: "SEC EDGAR filings (10-Q, S-1, 424B)", source: "sec.gov (free)", why: "Cash, runway, dilution, and the financing window in real time" },
      { series: "NIH RePORTER grant awards", source: "reporter.nih.gov (free)", why: "The upstream science funnel that seeds the next decade of programs" },
      { series: "XBI and IBB prices", source: "free quote feeds", why: "The risk-appetite gauge; XBI's equal weighting makes it the small-cap read" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Demand for medicine is defensive, but biotech is not: the funding window shuts first. Rotate toward cash-rich and commercial names; avoid anything financing within a year." },
      { regime: "Rates rising", behavior: "The sector's worst regime. Long-duration cash flows discount hard and the equity window narrows. 2022 is the template: a roughly (60)% drawdown and a universe trading near net cash." },
      { regime: "Rates falling", behavior: "The sector's best regime, and the core of the 2025 recovery. Add beta early via XBI, then rotate into single names with catalysts inside 12 months." },
      { regime: "Policy shock (pricing, tariffs, security review)", behavior: "Volatility without much cash-flow content for clinical-stage names, since they have no revenue to tax. Use it to buy assets whose value sits in a 2030 approval, not a 2026 price list." }
    ]
  },

  players: [
    { name: "Vertex Pharmaceuticals", role: "Commercial-stage franchise leader", country: "US", real: true, note: "Cystic fibrosis monopoly funding expansion into pain and gene-edited disease" },
    { name: "Regeneron", role: "Antibody platform and partner", country: "US", real: true, note: "Genetics-first discovery engine with long-running Sanofi and Bayer collaborations" },
    { name: "Amgen", role: "The original scaled biotech", country: "US", real: true, note: "Proved a protein could build a mega-cap; now a pharma-scale acquirer itself" },
    { name: "Alnylam", role: "Platform (RNA interference)", country: "US", real: true, note: "Turned a Nobel-winning mechanism into a repeatable, approved modality" },
    { name: "BioNTech", role: "mRNA platform", country: "DE", real: true, note: "COVID windfall redeployed into an oncology pipeline: the best-funded pivot in the sector" },
    { name: "Genmab", role: "Antibody engineering and royalties", country: "DK", real: true, note: "Licensing-led model: partner the molecule, keep the economics" },
    { name: "argenx", role: "Autoimmune franchise builder", country: "NL", real: true, note: "FcRn biology scaled into one of the decade's fastest biotech launches" },
    { name: "Jiangsu Hengrui", role: "China's out-licensing leader", country: "CN", real: true, note: "GSK deal with ~$500M upfront across a COPD candidate plus 11 programs, up to ~$12B in total value" }
  ],

  geography: [
    { country: "US", role: "Capital, science, and the profit pool", note: "Boston and the Bay Area concentrate venture, talent, and the pricing power that funds global R&D" },
    { country: "CN", role: "The new pipeline supplier", note: "~$135.7B of 2025 out-licensing value; ~38% of large pharma licensing deals now originate here" },
    { country: "GB", role: "Genomics and discovery", note: "Cambridge and Oxford anchor human genetics, the strongest predictor of approval odds" },
    { country: "CH", role: "Buyer and manufacturer", note: "Basel's pharma acquirers plus Lonza, one of the world's largest contract biomanufacturers" },
    { country: "DK", role: "Metabolic and antibody cluster", note: "The GLP-1 heartland plus a disciplined antibody licensing model" },
    { country: "SG", role: "Manufacturing and Asia hub", note: "Biologics capacity and regional trial infrastructure outside the US-China axis" }
  ],

  cycles: [
    { year: 1980, title: "Genentech goes public", kind: "boom", text: "The stock nearly triples on day one with no approved product, inventing the template for financing science with public equity. Lesson: this industry has always sold the story before the drug." },
    { year: 2001, title: "The genomics bust", kind: "bust", text: "The sequence-everything bubble deflates as investors learn that identifying a target is not the same as drugging one. Lesson: platforms are valued on approvals, not on data volume." },
    { year: 2021, title: "The zero-rate peak", kind: "boom", text: "Record venture near $42B, an IPO window open to preclinical companies, and valuations set by narrative. Lesson: cheap capital funds the tail of the distribution, and the tail is mostly failure." },
    { year: 2022, title: "The reset", kind: "bust", text: "The XBI falls roughly (60)% peak to trough and much of the listed universe trades near or below net cash as financing vanishes. Lesson: runway is strategy; companies that raised at the top survived to matter." },
    { year: 2025, title: "Recovery on the cliff's terms", kind: "shift", text: "A ~20% drop into April, then a ~75% rally and a ~36% year, funded by patent-cliff M&A demand, 46 FDA approvals, and ~$33.8B of venture concentrated in late-stage assets. Lesson: the recovery rewarded evidence, not optionality." }
  ],

  risks: [
    { name: "Financing window closure", severity: 5, likelihood: 3, transmission: "Rates or risk appetite turn -> follow-on window shuts -> pre-readout companies raise at deep discounts or fail -> pipeline attrition shows up in approvals 5 years later." },
    { name: "Clinical failure concentration", severity: 4, likelihood: 4, transmission: "A Phase 2 or 3 miss in a crowded mechanism -> the whole peer group reprices on read-through -> capital exits the modality regardless of individual merit." },
    { name: "China substitution", severity: 3, likelihood: 4, transmission: "Cheaper, faster assets out of China -> pharma's willingness to pay for undifferentiated Western programs falls -> valuation compression across the clinical-stage middle." },
    { name: "Pricing and reimbursement policy", severity: 3, likelihood: 3, transmission: "IRA negotiation and payer pushback -> lower realizable peak sales -> every rNPV falls and the acquirer's bid for late-stage assets follows it down." },
    { name: "Regulatory disruption or safety event", severity: 4, likelihood: 2, transmission: "Agency capacity shocks or a class-wide safety signal -> review timelines slip and trials halt -> cash burns against a frozen calendar, the one thing a runway cannot absorb." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Biotech companies try to invent medicines from biology: antibodies, gene therapies, and engineered proteins. Most of them have no product and no revenue; they raise money, spend it on experiments, and hope the results are good enough that a large pharmaceutical company buys them. Only about 10% of drugs that begin human testing ever reach patients, so the industry is a portfolio of expensive lottery tickets, and the tickets are funded by investors who accept those odds."] },
    L2: { title: "Intermediate", text: ["The economics: a clinical-stage biotech is a balance sheet with a science project attached, so cash runway and readout timing matter more than any income statement. Phase 2 is where most programs die (~31% advance), and picking the right patients roughly triples the odds of approval (~25% versus ~8%). The exits are acquisition and licensing, both driven by large pharma's patent cliff: $180B to $300B of branded revenue loses protection between 2025 and 2030, and acquirers hold something like $180B to spend replacing it."] },
    L3: { title: "Advanced", text: ["Value the programs, not the company: build an rNPV with honest phase-transition probabilities, realistic peak sales, and a patent-life-limited ramp, then check the sum against enterprise value net of cash. Watch the financing calendar as closely as the clinical one, since dilution is the real cost of capital here. And underwrite the new competitive reality: with ~38% of large pharma's licensing deals now sourced from China at average upfronts of ~$172M, the marginal buyer for an undifferentiated Western asset has cheaper options."] },
    L4: { title: "Expert", text: ["Trade the scheduled volatility (PDUFA dates, advisory committees, conference data drops) with sizing that treats each position as premium at risk. Track the beta separately from the alpha: the XBI's ~20% April 2025 drawdown and subsequent ~75% rally was a rates-and-risk-appetite move, while the ~$33.8B venture year and 46 FDA approvals were the fundamental floor beneath it. The live debates are whether the 2025-2026 re-rating is durable, whether China expands or hollows the value pool, and whether one-time curative therapies can ever be reimbursed at scale."] },
    L5: { title: "Institutional", text: ["Allocator's frame: biotech is the public market's most direct exposure to convex innovation, and it must be sized like a venture sleeve rather than a healthcare sector. Core the commercial-stage compounders, express beta through equal-weight instruments when rates are falling, and hold clinical-stage exposure as a diversified options book with no single readout capable of breaking the sleeve. The structural bid is arithmetic (patent expiry is a calendar) and the structural risk is financing (the sector cannot self-fund). Everything else in the sector reduces to one question: what is the honest probability, and is it in the price."] }
  },

  quiz: [
    { q: "The cumulative odds of a drug entering Phase 1 and reaching approval are about:", choices: ["50%", "~10%: roughly 9.6% across the largest study of phase transitions", "25%", "2%"], answer: 1, explain: "BIO/Informa/QLS analyzed 9,985 phase transitions across 7,455 programs: ~9.6% cumulative. The other ~90% are paid for by the winners." },
    { q: "Which clinical phase kills the most programs?", choices: ["Phase 1", "Phase 2, at roughly a 31% success rate: the first honest test of the biology in humans", "Phase 3", "Regulatory review"], answer: 1, explain: "Phase 1 mostly tests safety and usually advances; Phase 2 is where efficacy claims meet reality, which is why a clean Phase 2 can re-rate a company several times over." },
    { q: "Biopharma venture capital deployed in 2025 was approximately:", choices: ["$5B", "~$33.8B, concentrated in later-stage companies while early-stage went hungry", "$120B", "$1B"], answer: 1, explain: "PitchBook counted ~$33.8B, well below the ~$42B 2021 peak. The tilt toward clinical assets means thinner discovery-stage formation, a pipeline problem for the 2030s." },
    { q: "The most dependable exit for a de-risked biotech asset is:", choices: ["An IPO", "Acquisition or licensing driven by pharma's patent cliff", "A dividend", "A reverse merger"], answer: 1, explain: "$180B to $300B of branded revenue expires between 2025 and 2030 against ~$180B of acquirer dry powder. Buyers transact on a calendar, not on sentiment." },
    { q: "China's role in the global drug pipeline as of 2025 is best described as:", choices: ["Negligible", "Dominant supplier of in-licensed assets: ~38% of large pharma licensing deals and ~30% of upfronts", "Only generics", "Blocked entirely"], answer: 1, explain: "Chinese out-licensing reached ~$135.7B of 2025 deal value, and average upfronts rose from ~$52M in 2022 to ~$172M by early 2026." },
    { q: "For a clinical-stage biotech, the single most predictive financial metric is:", choices: ["Gross margin", "Cash runway measured against the next readout", "P/E ratio", "Dividend yield"], answer: 1, explain: "There are no earnings to value. A company funded past its next catalyst dictates its financing terms; one that is not will raise into weakness at a discount." },
    { q: "Biologic drugs erode more slowly than small molecules after patent expiry because:", choices: ["Patents last longer", "Biosimilars are genuinely hard to manufacture, so entrants are few and price decay takes years", "Payers forbid substitution", "They are cheaper"], answer: 1, explain: "Small molecules can lose 80%+ of revenue within 2 years of generic entry; biologic manufacturing complexity turns the cliff into a slope." },
    { q: "The XBI's 2025 pattern was:", choices: ["A steady straight-line gain", "Roughly (20)% into an April low, then about a 75% rally to finish the year up ~36%", "Flat all year", "A (60)% loss"], answer: 1, explain: "Policy and tariff fear drove the April drawdown; rate relief, 46 FDA approvals, and patent-cliff M&A demand drove the recovery. The sector's beta is a risk-appetite trade." }
  ],

  sources: [
    { name: "BIO / Informa / QLS clinical development success rates (via Applied Clinical Trials)", url: "https://www.appliedclinicaltrialsonline.com/view/low-success-rates-persist-clinical-trials", feeds: "phase transition probabilities, LoA" },
    { name: "PitchBook 2025 biopharma VC analysis (via BioSpace, Dec 2025)", url: "https://www.biospace.com/business/early-stage-biotechs-suffer-in-2025-as-vc-shuns-risk-pitchbook", feeds: "venture funding, stage mix" },
    { name: "FDA CDER Novel Drug Approvals", url: "https://www.fda.gov/drugs/novel-drug-approvals-fda", feeds: "approvals, regulatory throughput" },
    { name: "Big pharma M&A and the patent cliff (CNBC, Jan 7, 2026)", url: "https://www.cnbc.com/2026/01/07/big-pharma-race-to-snap-up-biotech-assets-as-170-billion-patent-cliff-looms.html", feeds: "LOE exposure, M&A demand" }
  ]
};
