/* Industry Atlas - PHARMACEUTICALS (full module, research-backed)
 * Anchors: global medicines market ~$1.6T (2024); GLP-1 class ~$50B 2024
 * heading toward $130B+ by 2030; 2025-2030 patent cliff $236B to $300B of
 * revenue (~190 drugs, 69 blockbusters); semaglutide core LOE ~2031,
 * tirzepatide ~2036 (DelveInsight, GeneOnline, Evaluate-class estimates). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["pharma"] = {
  meta: {
    id: "pharma", name: "Pharmaceuticals", sector: "healthcare", status: "full",
    tagline: "90% gross margins earned against 90% failure rates: patent-protected molecules on a treadmill that never stops.",
    marketSize: { value: 1.6, unit: "$T", asOf: 2024, note: "global prescription medicine spending" },
    cagr: { value: 6, range: [4, 8], horizon: "2024-2030" },
    maturity: "mature", cyclicality: 1, capitalIntensity: 3, regulation: 5, disruption: 3
  },

  overview: {
    definition: "The pharmaceutical industry discovers, tests, manufactures, and sells medicines. Its economics rest on a state-granted bargain: prove a molecule safe and effective through a decade of trials, and receive a patent monopoly long enough to earn back the billions the failures consumed.",
    howItWorks: [
      "The business model is a portfolio of lottery tickets with regulated payouts. Of 10,000 screened compounds, roughly 10 reach human trials and 1 becomes an approved drug, after 10 to 15 years and an all-in cost (counting failures) north of $2B. The winner then sells at 85% to 95% gross margins under patent protection, until the cliff: the day exclusivity ends and generics erase 80%+ of a small-molecule drug's revenue within 2 years.",
      "That cliff is the industry's metabolism. Between 2025 and 2030, roughly $236B to $300B of annual branded revenue loses protection (about 190 drugs, 69 of them blockbusters), the largest expiry wave in history. Pharma answers it the way it always has: pipelines, licensing, and M&A, buying biotech's science when its own labs miss the schedule. Business development is not a department; it is the survival mechanism.",
      "Nobody in this industry sells to the person who swallows the pill. The revenue path runs drugmaker → wholesaler (3 firms move ~90% of US volume) → pharmacy → patient, while the PRICE is negotiated separately between manufacturer and payers via PBMs (pharmacy benefit managers), producing America's notorious gap between list and net prices, with rebates flowing invisibly in between. Understanding pharma means following both pipes: molecules one way, money the other.",
      "The 2020s' defining event is the GLP-1 supercycle: obesity and diabetes drugs (semaglutide, tirzepatide) built a ~$50B class in 2024 heading toward $130B+ by 2030, made Eli Lilly and Novo Nordisk the two most valuable drugmakers on Earth, strained supply chains, and forced every payer, government, and competitor to reorganize around metabolic disease. It is the largest commercial phenomenon in pharmaceutical history.",
      "And the state is renegotiating the bargain: the US Inflation Reduction Act lets Medicare negotiate prices on top-selling drugs (first negotiated prices effective 2026), Europe squeezes through reference pricing, and Chinese biotech now supplies a striking share of the West's licensed pipeline candidates, cheaper and faster. The monopoly is shortening at both ends."
    ],
    history: [
      { era: "1940s-1970s", title: "The golden age of small molecules", text: "Antibiotics, vaccines, and the first psychiatric and cardiac drugs industrialize medicine; the FDA's modern trial framework forms after thalidomide (1962)." },
      { era: "1980s-1990s", title: "Biotech is born", text: "Genentech proves proteins can be drugs; Hatch-Waxman (1984) creates the modern generic bargain; blockbuster marketing (statins, SSRIs) builds Big Pharma." },
      { era: "2000-2012", title: "The first great cliff", text: "Lipitor-era expirations wipe $100B+ of revenue; productivity crisis declared; industry pivots from mass-market pills to specialty biologics and oncology." },
      { era: "2013-2019", title: "The biologic and immuno-oncology era", text: "Humira becomes the best-selling drug ever; Keytruda rewrites cancer care; biosimilars arrive slowly, proving biologic cliffs erode gently rather than collapse." },
      { era: "2020-2022", title: "The vaccine proof", text: "mRNA COVID vaccines go from sequence to authorization in 11 months: the fastest development in history and a demonstration of what the platform era can do." },
      { era: "2023-present", title: "GLP-1s and the negotiated era", text: "Obesity drugs become pharma's biggest franchise ever built; the IRA begins Medicare price negotiation; China rises as the pipeline's discount supplier; a $236B to $300B cliff looms over 2025-2030." }
    ],
    trends: [
      { title: "The GLP-1 supercycle", direction: "up", text: "From diabetes to obesity to heart, kidney, and liver indications: the class is expanding its label faster than supply can scale. Oral versions and next-generation combinations are the next battleground." },
      { title: "The record patent cliff", direction: "down", text: "$236B to $300B of revenue exposed by 2030 (Keytruda 2028 the single largest). The M&A and licensing wave to refill pipelines is already running." },
      { title: "Government as price negotiator", direction: "shift", text: "IRA Medicare negotiation ramps annually from 2026; the era of unfettered US pricing, the industry's profit pool anchor, is ending by degrees." },
      { title: "China's pipeline arbitrage", direction: "up", text: "Western pharma increasingly licenses clinical candidates from Chinese biotechs at a fraction of US costs, a supply chain shift moving up the value stack from ingredients to innovation." },
      { title: "AI in discovery", direction: "shift", text: "Structure prediction and generative chemistry compress early discovery; the bottleneck moves to trials, where 70% of cost lives." }
    ],
    outlook: "Structurally defensive growth (~6%) powered by demographics and the GLP-1 buildout, colliding with the industry's two oldest enemies at once: expiry math and price politics. The winners of the next decade are visible in outline: metabolic-franchise owners, oncology platforms with post-Keytruda answers, and whoever converts the cliff's forced M&A into pipeline rather than write-downs. The losers will have spent the 2020s buying back stock instead of science."
  },

  structure: {
    suppliers: [
      { name: "Biotech (the discovery engine)", note: "Half of approved drugs now originate outside Big Pharma; licensing is the industry's R&D supplement" },
      { name: "CROs (IQVIA, ICON class)", note: "Contract research: run the trials, the costliest step" },
      { name: "CDMOs (Lonza, Catalent class)", note: "Contract manufacturing: fill-finish capacity gated the GLP-1 ramp" },
      { name: "API & chemical suppliers", note: "Active ingredients, concentrated in China and India: the security-of-supply debate" },
      { name: "Academia & NIH", note: "The basic science substrate the whole pyramid stands on" }
    ],
    producers: [
      { name: "Big Pharma (Lilly, Novo, Pfizer, Merck, J&J, Roche, AZ, Novartis)", note: "Scale in trials, regulatory affairs, and global commercialization" },
      { name: "Biotech (clinical-stage)", note: "Science experiments with tickers; the pipeline's upstream" },
      { name: "Generic & biosimilar makers (Teva, Sandoz, Indian majors)", note: "90% of US prescriptions by volume, ~13% by value" },
      { name: "Chinese innovators (BeiGene-class)", note: "From API supplier to licensing counterparty in a decade" }
    ],
    distributors: [
      { name: "Wholesalers (McKesson, Cencora, Cardinal)", note: "~90% of US drug volume through 3 firms at ~1% margins" },
      { name: "Pharmacies (retail, specialty, mail)", note: "The dispensing layer; specialty pharmacy is where the dollars concentrate" },
      { name: "Hospitals & clinics", note: "Infused and administered drugs; the buy-and-bill channel" }
    ],
    customers: [
      { name: "Payers & PBMs (the real customers)", note: "Formulary access decides a drug's fate; 3 PBMs control ~80% of US scripts" },
      { name: "Governments", note: "Single largest buyers globally; now negotiators too (IRA, European systems)" },
      { name: "Prescribers & patients", note: "The users, courted by rep armies and (in the US) television" },
      { name: "Employers", note: "US premium payers of last resort; GLP-1 coverage is their current battlefield" }
    ],
    regulators: [
      { name: "FDA / EMA / NMPA", note: "The gatekeepers: approval standards define the industry's clock and cost" },
      { name: "CMS & the IRA regime", note: "Medicare price negotiation: the new counterparty" },
      { name: "Patent offices & courts", note: "Where exclusivity is won, extended (patent thickets), and killed" }
    ],
    capital: [
      { name: "Big Pharma balance sheets", note: "$1T+ of firepower for the cliff-driven M&A wave" },
      { name: "Venture & crossover funds", note: "Biotech's staged-risk financing machine" },
      { name: "Public markets (XBI-land)", note: "Binary-outcome equities; brutal but liquid" },
      { name: "Royalty funds (Royalty Pharma class)", note: "Non-dilutive capital against future drug sales" }
    ]
  },

  valueChain: {
    intro: "From a molecule's first synthesis to a negotiated rebate two decades later. The value pools at two points: the patented brand years, and the toll booths (PBMs, specialty distribution) money must pass through.",
    stages: [
      { id: "discovery", name: "Discovery & preclinical", what: "Target ID, screening, animal studies", players: "Biotech, academia, AI-first startups", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 1 },
        linksTo: ["biotech", "ai", "education"],
        deeper: "Thousands of candidates enter; ~1 in 1,000 survives to humans. AI is compressing this stage (structure prediction, generative chemistry), which paradoxically raises the value of the uncompressible part: biology's willingness to say no in a $500M phase 3." },
      { id: "clinical", name: "Clinical trials", what: "Phase 1-3: the $1B+ gauntlet", players: "Sponsors + CROs (IQVIA class)", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 3, concentration: 3 },
        linksTo: ["hospitals", "insurance"],
        deeper: "70% of development cost lives here; phase 2 is the graveyard (~30% success). Trial design is competitive strategy: endpoints, comparators, and enrollment speed decide franchises. CROs turned this stage into a rentable industrial process." },
      { id: "regulatory", name: "Regulatory approval", what: "FDA/EMA review and label negotiation", players: "Agencies + sponsor regulatory armies", valueCapture: 2,
        economics: { capitalIntensity: 1, concentration: 5 },
        linksTo: ["government"],
        deeper: "The label IS the product: every indication, line of therapy, and safety warning defines the addressable market. Priority review vouchers, orphan designations, and accelerated pathways are tradeable assets in themselves." },
      { id: "manufacturing", name: "Manufacturing", what: "API synthesis, biologics culture, fill-finish", players: "In-house + CDMOs (Lonza class)", valueCapture: 3,
        economics: { grossMargin: [30, 50], capitalIntensity: 4, concentration: 3 },
        linksTo: ["chemicals", "manufacturing"],
        deeper: "Invisible until it binds: GLP-1 demand outran global fill-finish capacity for 2 years, handing CDMOs pricing power and triggering a $20B+ capacity race. Sterile injectable manufacturing is the chain's quiet chokepoint." },
      { id: "brand-years", name: "The patented brand years", what: "Launch, marketing, peak sales", players: "Big Pharma commercial machines", valueCapture: 5,
        economics: { grossMargin: [85, 95], capitalIntensity: 2, concentration: 3 },
        linksTo: ["media", "health-insurance"],
        deeper: "The monopoly window that pays for everything: 10 to 14 effective years to earn back the portfolio's failures. Launch excellence (payer access, prescriber adoption) can double a molecule's lifetime value; the rep army and DTC advertising exist for this sprint." },
      { id: "access", name: "PBMs, payers & distribution", what: "Formularies, rebates, wholesale logistics", players: "CVS Caremark/ESI/Optum; McKesson class", valueCapture: 4,
        economics: { grossMargin: [3, 8], capitalIntensity: 1, concentration: 5 },
        linksTo: ["health-insurance", "logistics"],
        deeper: "The toll layer: 3 PBMs control ~80% of US scripts and extract rebates that create the list-vs-net price illusion; 3 wholesalers move ~90% of volume at 1% margins on colossal float. Low margin per unit, enormous aggregate take, permanent political target." },
      { id: "loe", name: "Loss of exclusivity & generics", what: "The cliff and the copy", players: "Teva, Sandoz, Indian majors", valueCapture: 1,
        economics: { grossMargin: [20, 40], capitalIntensity: 2, concentration: 2 },
        linksTo: ["chemicals"],
        deeper: "Small molecules lose 80%+ of revenue within 2 years of generic entry; biologics erode slower (biosimilars at 6 years in still leave Humira with meaningful share). Society's half of the bargain: eventually, every monopoly becomes a commodity that costs pennies." }
    ]
  },

  financials: {
    businessModel: [
      "Read a pharma company in this order: LOE exposure (what % of revenue expires within 5 years), pipeline rNPV against it, franchise concentration, then the P&L. The income statement is the past; the pipeline-vs-cliff balance is the future. A company with 40% of revenue expiring by 2030 and a thin phase 3 is a melting ice cube whatever this quarter printed.",
      "The economics per launched drug are extraordinary and misleading: 85% to 95% gross margins, but the honest R&D cost per approval, counting the failures, exceeds $2B. Industry R&D runs 20% to 25% of revenue; SG&A (the launch armies) another 25% to 30%. What is left still makes pharma one of the highest-margin industries on Earth, priced permanently against political risk.",
      "The GLP-1 exception rewrote the reference class: a two-company franchise growing toward $130B+ with demand rationed by manufacturing rather than marketing. Its lesson for the model: in true mass-market indications, supply chains and payer politics, not science, become the binding constraints."
    ],
    fingerprint: { grossMargin: 88, recurringRevenue: 70, capitalIntensity: 40, pricingPower: 75, cyclicality: 12, operatingLeverage: 55 },
    lines: [
      { label: "Revenue by franchise", note: "Concentration check: Keytruda is ~45% of Merck's; GLP-1s are ~60%+ of Novo's" },
      { label: "LOE schedule", note: "The expiry calendar IS the risk profile; model erosion curves per modality" },
      { label: "R&D (20% to 25% of revenue)", note: "The reinvestment engine; check phase 3 count, not the total" },
      { label: "Net vs list price", note: "US rebates hide 30% to 50% gaps; net price trend is the real pricing power" },
      { label: "Pipeline rNPV", note: "Probability-weighted candidate values against the cliff" },
      { label: "BD & M&A spend", note: "The pipeline supplement; serial overpayers destroy decades of margin" }
    ],
    unitEconomics: {
      unit: "per approved drug (industry averages)",
      items: [
        { label: "All-in R&D cost (with failures)", value: "$2.0B to $2.6B", note: "10 to 15 years from screen to approval" },
        { label: "Clinical success rate (phase 1 to approval)", value: "~8% to 12%", note: "phase 2 is the graveyard" },
        { label: "Effective patent life post-launch", value: "10 to 14 years", note: "the monopoly window that must repay the portfolio" },
        { label: "Blockbuster peak sales", value: "$1B to $30B+/yr", note: "Keytruda ~$29B (2024); semaglutide franchise similar scale" },
        { label: "Revenue 2 years after small-molecule LOE", value: "(80%) or worse", note: "the cliff, on schedule" }
      ]
    }
  },

  kpiRefs: ["pharma-pipeline", "hc-mlr", "saas-gross-margin"],
  kpiLocal: [
    {
      id: "pharma-loe-exposure", name: "LOE Exposure (5-year)", industries: ["pharma"],
      definition: "The share of current revenue from products losing patent exclusivity within 5 years.",
      formula: "LOE exposure = Revenue of products with LOE <= 5 yrs ÷ Total revenue",
      interpretation: "The industry's gravity: above ~30% without a matching phase 3 pipeline, the company must buy growth or shrink.",
      healthy: "< 20% with pipeline coverage", warning: "> 35% uncovered",
      benchmark: { median: "Big Pharma faces $236B to $300B of collective expiries 2025-2030; exposure varies 10% to 50% by company (asOf 2024)" },
      investorLens: "The first screen in the sector: cheap P/Es routinely mark high LOE exposure, not bargains.",
      operatorLens: "Sets the BD budget and the M&A clock; every franchise plan starts from this date.",
      mistakes: ["Applying small-molecule erosion (80%+ in 2 years) to biologics (slower biosimilar decay), or vice versa."],
      trend: "The 2025-2030 wave is 3x the prior cliff; Keytruda's 2028 LOE is the single largest expiry ever."
    }
  ],

  health: {
    intro: "Pharma health is pipeline-vs-cliff arithmetic first, franchise concentration second, and capital allocation discipline always.",
    pillars: [
      { name: "Pipeline vs LOE coverage", weight: 30, metrics: "Phase 3 rNPV vs 5-year expiring revenue; launch cadence", healthy: "Pipeline rNPV > expiring revenue", warning: "Cliff > 30% of revenue with thin late-stage" },
      { name: "Franchise quality & concentration", weight: 20, metrics: "Top-drug share of revenue, indication expansion runway", healthy: "No product > 30% of revenue, growing labels", warning: "One molecule > 45% with LOE inside a decade" },
      { name: "R&D productivity", weight: 20, metrics: "Approvals per $B of R&D, phase 2/3 success vs industry", healthy: "Above-industry success rates, externalized smartly", warning: "A decade of internal misses papered over by buybacks" },
      { name: "Pricing & policy exposure", weight: 15, metrics: "US net price trend, IRA negotiation list exposure, payer mix", healthy: "Volume-driven growth, diversified geographies", warning: "Growth dependent on US list-price increases" },
      { name: "Balance sheet & BD capacity", weight: 15, metrics: "Leverage vs M&A needs, deal discipline record", healthy: "Firepower for the cliff with returns discipline", warning: "Levered from past overpayment as the next cliff arrives" }
    ],
    scoringNote: "Score against the expiry calendar, not the income statement: pharma's failures are always announced a decade in advance and priced two years too late."
  },

  valuation: {
    intro: "Pharma valuation is a sum of two parts: the in-line business (cash flows with expiry dates) and the pipeline (options with probabilities). Blending them into one P/E is the sector's classic mispricing.",
    methods: [
      { name: "P/E on core EPS", use: "Screening diversified big pharma; dividend context", avoid: "High-LOE names (the E has an expiry date the P ignores)", strengths: "Simple; the sector's dividend-buyer language", weaknesses: "Blind to the cliff and pipeline optionality alike", range: { low: 10, high: 20, asOf: 2024, note: "GLP-1 winners trade far above; cliff-facers far below, both 'correctly'" } },
      { name: "Sum-of-parts: in-line DCF + pipeline rNPV", use: "The professional standard: value marketed drugs to expiry, add probability-weighted pipeline", avoid: "Point estimates on binary assets; ranges or nothing", strengths: "Matches the industry's actual economics", weaknesses: "PoS assumptions carry everything; garbage tolerance is zero", range: { low: 0, high: 0, asOf: 2024, note: "phase 3 assets typically weighted 50% to 65% PoS; phase 2 ~15% to 30%" } },
      { name: "EV / pipeline-adjusted sales", use: "Comparing growth pharma with different launch curves", avoid: "Generics and mature portfolios", strengths: "Captures the franchise build phase", weaknesses: "Peak-sales estimates are marketing documents", range: { low: 3, high: 8, asOf: 2024, note: "GLP-1 duopoly re-rated the top of the band" } },
      { name: "Biotech: rNPV / cash runway", use: "Clinical-stage names: risk-adjusted asset value vs cash to reach catalysts", avoid: "Anything valued on 'platform' alone", strengths: "The only honest frame for pre-revenue science", weaknesses: "Binary outcomes mock point estimates", range: { low: 0, high: 0, asOf: 2024, note: "sector rule: no cash to the next catalyst = no floor" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Frame a pharma the quick way: core earnings times a quality multiple, minus net debt. The honest version then subtracts the expiring franchises and adds pipeline rNPV.",
      inputs: [
        { id: "vc-ebitda", label: "Core EBITDA ($B)", min: 1, max: 40, step: 0.5, value: 12, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 20, step: 0.5, value: 11, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -20, max: 60, step: 1, value: 15, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk holds pharma as defensive growth with idiosyncratic catalysts: low beta, recession-proof demand, and event-driven alpha around readouts and approvals. The current book is a barbell: the GLP-1 duopoly (growth priced as such) against diversified value names whose cliffs are arguably over-discounted, with biotech as the options book. Sizing respects binary risk: no single readout should move the book more than a position's premium.",
    debates: [
      { topic: "GLP-1s: how big, and can the duopoly hold?", bull: "A ~$50B class in year 3 heading past $130B: obesity's addressable population is measured in hundreds of millions, label expansion (cardio, kidney, liver, sleep apnea) turns them into platform drugs, and Lilly-Novo's manufacturing scale plus 2030s patents make the moat physical, not just legal.", bear: "Payer budgets cannot absorb population-scale $500/month drugs; discontinuation rates are high; orals and next-gen entrants (plus compounders in the gray market) erode pricing years before LOE; and the duopoly premium already prices flawless execution to 2035." },
      { topic: "The $236B to $300B cliff: value trap or forced-M&A goldmine?", bull: "The cliff is the catalyst: $1T+ of balance-sheet firepower must buy pipelines, which floors quality biotech and lets patient value investors buy 10x P/E cash machines whose replacements are already in phase 3.", bear: "Cheap pharma is usually correctly cheap: erosion math is certain while replacement is probabilistic, IRA negotiation shortens effective exclusivity further, and history says cliff-driven M&A destroys value roughly as often as it creates it." },
      { topic: "Policy: manageable haircut or regime change?", bull: "The industry has absorbed every pricing reform since 1990 with mid-single-digit growth intact; IRA's first negotiated list is single-digit % of industry revenue, and innovation premiums survive because states need the pipeline more than the savings.", bear: "IRA is a ratchet, not an event: the negotiated list grows annually, 'maximum fair price' logic spreads to commercial payers, and small-molecule 9-year clocks quietly deter whole therapeutic categories. The US profit pool that funds global R&D is being repriced by law." }
    ],
    cycle: {
      where: "Not a macro cycle but a pipeline-and-policy cycle: mid-wave in the largest LOE cliff ever (2025-2030), early innings of Medicare negotiation (first prices effective 2026), and peak GLP-1 buildout with supply still catching demand.",
      drivers: "The expiry calendar, FDA approval cadence, payer budget cycles, and the M&A clock that cliff math forces. Macro matters only through rates (biotech's funding window) and the dollar.",
      leads: [
        "FDA PDUFA calendar and approval counts (free): the sector's earnings dates",
        "Phase 3 readouts at ASCO (Jun), ADA (Jun), AHA (Nov), ASH (Dec): franchise-moving data lands at conferences",
        "Weekly prescription trends (IQVIA-derived, summarized free in coverage): launch trajectories in near-real-time",
        "Biotech funding window: XBI level and follow-on issuance as the sector's credit conditions",
        "CMS negotiation lists and rates (annual): the policy ratchet's speed"
      ]
    },
    exposure: [
      { vehicle: "GLP-1 duopoly (Lilly, Novo)", note: "The growth franchise; priced for it: execution risk is the position" },
      { vehicle: "Diversified big pharma (Merck, J&J, AZ class)", note: "Dividend + pipeline value plays; the cliff-discount hunting ground" },
      { vehicle: "Biotech (XBI archetype / baskets)", note: "The options book: binary singles, convex as a basket, rate-sensitive funding" },
      { vehicle: "CROs & CDMOs (IQVIA, Lonza class)", note: "Picks and shovels: R&D spend exposure without molecule risk" },
      { vehicle: "Distributors & PBM-owners", note: "The toll booths: volume plays, political-headline risk instead of pipeline risk" },
      { vehicle: "Royalty funds (Royalty Pharma class)", note: "Diversified drug cash flows without R&D risk; the sector's bond-like slice" }
    ],
    catalysts: [
      { when: "PDUFA dates (drug-specific, published)", what: "Approval decisions gap single names 10% to 40%; the FDA calendar is the sector's event map" },
      { when: "Jun & Dec medical conferences", what: "ASCO/ADA and ASH: phase 3 data that re-rates franchises lands on stage" },
      { when: "Annual CMS negotiation rounds", what: "Each list expansion and price publication resets policy-risk pricing" },
      { when: "Q4-Q1 JPMorgan Healthcare Conference (Jan)", what: "The sector's Davos: guidance, deals, and the year's narrative in one week" },
      { when: "LOE dates (Keytruda 2028 the giant)", what: "Erosion begins on schedule; positioning ahead of it never quite does" }
    ],
    data: [
      { series: "FDA approvals & PDUFA calendar", source: "fda.gov (free)", why: "The catalyst calendar itself" },
      { series: "ClinicalTrials.gov", source: "clinicaltrials.gov (free)", why: "Pipeline census: enrollment, endpoints, and timing for every trial on Earth" },
      { series: "CMS drug negotiation publications", source: "cms.gov (free)", why: "The policy ratchet, first-hand" },
      { series: "Company R&D day decks & 10-Ks", source: "IR sites / EDGAR (free)", why: "Pipeline PoS assumptions and LOE schedules straight from the source" },
      { series: "Evaluate/GeneOnline cliff summaries", source: "public summaries (free)", why: "The expiry wave quantified: $236B+ by 2030" }
    ],
    playbook: [
      { regime: "Recession", behavior: "The classic defensive: prescriptions are the last spending cut. Relative outperformance in every drawdown since 1990; the desk adds beta here when growth rolls over." },
      { regime: "Rates rising", behavior: "Big pharma shrugs (cash-rich, short-duration); biotech gets crushed (pre-revenue duration + closed funding windows). The XBI-vs-PPH spread IS the rate trade." },
      { regime: "Inflation", behavior: "Weak direct pass-through (contracted payer prices) but margins are so high it rarely matters; watch IRA inflation-rebate penalties on price increases above CPI." },
      { regime: "Risk-off / crisis", behavior: "Relative haven with a catch: policy headlines (pricing executive orders) can hit the sector precisely when portfolios hide in it. Idiosyncratic readout risk never sleeps." }
    ]
  },

  players: [
    { name: "Eli Lilly", role: "The GLP-1 king", country: "US", real: true, note: "Tirzepatide's owner; briefly pharma's first near-$1T company" },
    { name: "Novo Nordisk", role: "The other half of the duopoly", country: "DK", real: true, note: "Semaglutide (Ozempic/Wegovy); Europe's most valuable company at peak" },
    { name: "Merck", role: "Oncology's giant with a clock", country: "US", real: true, note: "Keytruda ~$29B and LOE 2028: the sector's defining cliff story" },
    { name: "Pfizer / J&J / AbbVie / Roche / AZ / Novartis", role: "The diversified cohort", country: "US", real: true, note: "Portfolio machines managing perpetual expiry-and-replace" },
    { name: "IQVIA / Lonza", role: "CRO & CDMO leaders", country: "CH", real: true, note: "The trials-and-manufacturing picks and shovels" },
    { name: "McKesson / Cencora / Cardinal", role: "The wholesale oligopoly", country: "US", real: true, note: "~90% of US volume at 1% margins" },
    { name: "Teva / Sandoz / Sun", role: "Generic majors", country: "IL", real: true, note: "The other side of the bargain: 90% of scripts, 13% of dollars" }
  ],

  geography: [
    { country: "US", role: "~45% of global spending and most of the profit pool", note: "The pricing regime that funds world R&D, now being renegotiated" },
    { country: "CH", role: "Roche + Novartis + CDMO cluster", note: "Pharma's Zurich-Basel axis" },
    { country: "DK", role: "Novo's kingdom", note: "One company reshaped a national economy" },
    { country: "IN", role: "The world's generic factory", note: "~20% of global generic supply by volume" },
    { country: "CN", role: "API base + rising innovator", note: "From ingredients to licensed pipeline candidates in a decade" },
    { country: "IE", role: "Manufacturing + tax hub", note: "Where an outsized share of Western drug value books" }
  ],

  cycles: [
    { year: 1962, title: "Thalidomide and the modern FDA", kind: "shift", text: "Efficacy standards and controlled trials become law. Lesson: the industry's cost structure is a safety regime's mirror." },
    { year: 1984, title: "Hatch-Waxman", kind: "shift", text: "The generic bargain: easy copies after real exclusivity. Lesson: the cliff is a design feature of the system, not a bug." },
    { year: 2011, title: "The Lipitor cliff", kind: "bust", text: "The then-biggest drug ever goes generic; Big Pharma's 'patent cliff decade' wipes $100B+. Lesson: expiry math arrives exactly on schedule." },
    { year: 2015, title: "The pricing backlash begins", kind: "shift", text: "Shkreli-era scandals make list prices a permanent political issue. Lesson: reputational externalities become regulation eventually (IRA, 2022)." },
    { year: 2020, title: "mRNA's eleven months", kind: "boom", text: "COVID vaccines rewrite development speed assumptions and mint new platforms. Lesson: crises compress decades; platforms beat products." },
    { year: 2023, title: "The GLP-1 repricing", kind: "boom", text: "Obesity drugs create the largest franchise in industry history and split the sector into metabolic haves and have-nots. Lesson: true mass-market medicine is constrained by manufacturing and payers, not science." }
  ],

  risks: [
    { name: "Pipeline failure at scale", severity: 4, likelihood: 3, transmission: "Phase 3 misses on cliff-replacing assets → the expiry math runs uncovered → forced M&A at desperation prices, the sector's classic value destruction." },
    { name: "US pricing regime change", severity: 5, likelihood: 3, transmission: "IRA expansion / most-favored-nation pricing → the profit pool funding global R&D compresses → sector-wide multiple de-rating and pipeline triage." },
    { name: "GLP-1 franchise disappointment", severity: 3, likelihood: 2, transmission: "Safety signal, payer revolt, or faster-than-expected competition → the two largest drugmakers' premiums unwind → sector index mechanically follows." },
    { name: "Supply chain concentration", severity: 3, likelihood: 3, transmission: "API dependence on China/India meets geopolitics → shortages and reshoring costs → margins and political scrutiny both rise." },
    { name: "Litigation & safety", severity: 3, likelihood: 3, transmission: "The tail that never dies: opioid-scale liability or a marketed-drug withdrawal reprices a decade of earnings overnight." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Drug companies spend billions testing thousands of compounds so that a few become approved medicines. Patents give the winners years of exclusive sales at high prices to pay for all the failures; when patents expire, cheap generic copies take over. It is a science lottery with regulated prizes."] },
    L2: { title: "Intermediate", text: ["The pipeline funnel (10,000 screened → ~1 approved, $2B+ all-in) meets the patent clock (10 to 14 selling years). Revenue flows through wholesalers and pharmacies while prices are set against payers and PBMs, creating the list-vs-net gap. The industry lives by expiry-and-replace: pipelines, licensing, and M&A against a perpetual cliff, currently the biggest ever ($236B to $300B by 2030)."] },
    L3: { title: "Advanced", text: ["Analysis = LOE schedule vs pipeline rNPV, franchise concentration, net-price trends, and BD discipline. Valuation is sum-of-parts: in-line drugs DCF'd to expiry plus probability-weighted pipeline (phase 3 ~50% to 65% PoS). Modality matters: small molecules cliff hard (80%+ in 2 years), biologics erode slowly. The GLP-1 duopoly and the IRA are the current regime-setters."] },
    L4: { title: "Expert", text: ["Trade the calendar: PDUFA dates, conference readouts (ASCO/ADA/ASH), CMS negotiation rounds, and JPM week set the event map. The live debates: GLP-1 TAM vs payer capacity, cliff-driven M&A value creation vs destruction, and IRA as haircut vs ratchet. China's licensing arbitrage is quietly repricing early-stage assets worldwide."] },
    L5: { title: "Institutional", text: ["Allocator's frame: pharma is the defensive-growth anchor with an embedded options book. Structural: diversified quality + the metabolic franchise, sized for policy tail risk; biotech as convex basket exposure timed to the funding window; picks-and-shovels (CRO/CDMO/royalties) for R&D beta without binary risk. The decade's question: whether the US profit pool survives its political renegotiation intact, because every DCF in the sector quietly assumes it does."] }
  },

  quiz: [
    { q: "Why can approved drugs carry 90% gross margins without the industry being wildly profitable?", choices: ["Accounting tricks", "Each winner must repay the ~$2B+ all-in cost of the failures behind it", "Taxes", "Marketing is free"], answer: 1, explain: "The pill costs cents; the decade of failed science behind it cost billions. Portfolio economics, not unit economics." },
    { q: "A small-molecule drug 2 years after patent expiry typically retains:", choices: ["~80% of revenue", "~50%", "Under 20%", "All of it"], answer: 2, explain: "Generic substitution laws and pharmacy economics erase 80%+ quickly; biologics erode more slowly via biosimilars." },
    { q: "The 2025-2030 patent cliff exposes roughly:", choices: ["$20B", "$236B to $300B of annual revenue, the largest wave ever", "$1T", "Nothing material"], answer: 1, explain: "About 190 drugs including 69 blockbusters; Keytruda's 2028 LOE is the single largest. The M&A wave is the industry's answer." },
    { q: "In the US, the drugmaker's real pricing negotiation is with:", choices: ["Patients", "Doctors", "PBMs and payers, via rebates that create the list-vs-net gap", "Pharmacies"], answer: 2, explain: "Three PBMs control ~80% of scripts; formulary access is the sale. Patients see list prices; manufacturers book net." },
    { q: "The GLP-1 franchise's binding constraints have been:", choices: ["Science and marketing", "Manufacturing capacity and payer budgets, not discovery", "Patent length", "Physician awareness"], answer: 1, explain: "Demand outran sterile fill-finish capacity for years, and population-scale pricing is a payer-politics problem: the lesson of true mass-market medicine." },
    { q: "Sum-of-parts pharma valuation separates:", choices: ["US vs Europe", "In-line drugs (cash flows with expiry dates) from pipeline (probability-weighted options)", "Big vs small companies", "R&D vs marketing"], answer: 1, explain: "Blending a melting franchise and a phase 3 option into one P/E is the sector's classic mispricing; professionals value them separately." },
    { q: "A biotech with great science but 9 months of cash before its readout is:", choices: ["A buy on the science", "Priced off the financing risk: no cash to the catalyst means no floor", "Risk-free", "Un-analyzable"], answer: 1, explain: "The funding window is part of the asset: dilution or death precedes the data if the runway is short." },
    { q: "Pharma's recession behavior is:", choices: ["High beta", "Classic defensive: prescriptions are the last spending cut", "Same as banks", "Unpredictable"], answer: 1, explain: "Demand is need-driven and insured; the sector has outperformed in every major drawdown since 1990, which is exactly why desks hold it." }
  ],

  sources: [
    { name: "GeneOnline / Evaluate: $236B patent cliff by 2030", url: "https://www.geneonline.com/pharma-faces-236-billion-patent-cliff-by-2030-key-drugs-and-companies-at-risk/", feeds: "LOE exposure" },
    { name: "DelveInsight patent cliff 2025-2030 whitepaper", url: "https://www.delveinsight.com/whitepaper-newsletter/pharma-patent-cliff", feeds: "expiry schedule" },
    { name: "Statista / Grand View: GLP-1 market ~$50B (2024)", url: "https://www.statista.com/statistics/1661179/glp-1-drugs-market-size-worldwide/", feeds: "GLP-1 class size" },
    { name: "FDA approvals & PDUFA calendar", url: "https://www.fda.gov", feeds: "catalysts" },
    { name: "ClinicalTrials.gov", url: "https://clinicaltrials.gov", feeds: "pipeline census" }
  ]
};
