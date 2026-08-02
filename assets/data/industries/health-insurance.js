/* Industry Atlas - HEALTH INSURANCE & PAYERS (full module, research-backed)
 * Anchors: UNH FY2025 revenue $447.6B (+12%), adjusted medical care ratio 88.9%
 * vs 85.5% in 2024, profit down to $12.1B (UnitedHealth Group release, Jan 2026);
 * ACA MLR floors 80%/85% with rebates (KFF); Medicare Advantage = 54% of
 * beneficiaries in 2025, 35M+ enrolled, growth slowed to 4% (KFF 2026 update);
 * Humana FY2025 benefit ratio 90.4%, 4+ star share 94% -> 25% (Humana releases);
 * Big 3 PBMs process ~80% of ~6.6B US prescriptions, $7.3B specialty-generic
 * markup 2017-2022 (FTC interim reports, Jul 2024 / Jan 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["health-insurance"] = {
  meta: {
    id: "health-insurance", name: "Health Insurance & Payers", sector: "healthcare", status: "full",
    tagline: "A regulated spread business on the biggest bill in America: the payer keeps 15% of the premium and fights medicine for the rest.",
    marketSize: { value: 1.5, unit: "$T", asOf: 2025, note: "combined revenue of the 6 largest US public payers; UnitedHealth alone booked $447.6B in FY2025; PBM pass-through dollars inflate headline revenue" },
    cagr: { value: 6, range: [4, 8], horizon: "2024-2030" },
    maturity: "mature-consolidating", cyclicality: 2, capitalIntensity: 2, regulation: 5, disruption: 3
  },
  newsQuery: '(UnitedHealth OR Humana OR Centene OR "Medicare Advantage" OR "medical loss ratio" OR "pharmacy benefit manager")',

  overview: {
    definition: "Health insurers (payers) collect premiums, contract provider networks, and pay medical claims, keeping the spread between the two. In the US the industry intermediates most of a $4.9T (2023, CMS) national health bill, and the ACA caps how much of each premium dollar it may keep.",
    howItWorks: [
      "The core machine is a regulated spread: premiums in, claims out, and the medical loss ratio (MLR) is the whole ballgame. The ACA sets floors: insurers must spend at least 80% of premiums on care (individual and small group) or 85% (large group and Medicare Advantage) or rebate the difference. That turns the P&L into a fight over the residual 15% to 20%, which must cover admin, marketing, and profit: at UnitedHealth's scale, 100 basis points of MLR is roughly $3B of pretax swing.",
      "The customer mix is really 3 businesses. Commercial: employers buy coverage, and roughly 2 in 3 covered workers sit in self-funded plans (KFF, 2024) where the employer bears claims risk and the payer earns fee-based ASO income, renting its network and claims engine. Government: Medicare Advantage (MA), Medicaid managed care, and ACA exchanges, where the government sets the rates and the payer manages the risk. Government books drove nearly all the growth of the last 15 years: MA covered 54% of Medicare beneficiaries in 2025, up from 19% in 2007 (KFF).",
      "The giants stopped being just insurers. UnitedHealth's Optum owns a PBM, analytics, and roughly 90,000 affiliated physicians (about 1 in 10 US doctors); CVS stacked Aetna on Caremark and a drugstore chain; Cigna runs Express Scripts. The 3 integrated PBMs process about 80% of the roughly 6.6B annual US prescriptions (FTC, 2024), which means the largest payers now sit on both sides of the claim: payer, pharmacy middleman, and increasingly the provider being paid.",
      "The cycle is an actuarial lag. Premiums are priced a year ahead on projected cost trend; government rates lag further. When utilization jumps, as it did in 2024-2025 when post-COVID senior demand, GLP-1s, and behavioral health met CMS funding cuts and the v28 risk-model phase-in, margins crater before pricing can catch up: UnitedHealth's adjusted care ratio leapt from 85.5% in 2024 to 88.9% in 2025 and profit fell to $12.1B. The repricing then arrives through benefit cuts, market exits, and rate hikes: UnitedHealthcare planned to shed roughly 1.3M MA members into 2026."
    ],
    history: [
      { era: "1929-1965", title: "Blues and the employer accident", text: "Baylor's teacher plan births Blue Cross; WWII wage controls and the tax exclusion weld health coverage to the paycheck: an accident that still defines the market." },
      { era: "1965-1982", title: "Government enters", text: "Medicare and Medicaid (1965) make Washington the biggest buyer of healthcare; the 1973 HMO Act invents managed care as cost-control policy." },
      { era: "1983-2003", title: "Managed care and backlash", text: "HMOs tame cost trend in the 1990s, then patients revolt against gatekeeping; the industry consolidates from hundreds of plans toward national carriers." },
      { era: "2003-2010", title: "Part D and the ACA", text: "The 2003 Medicare Modernization Act builds modern Medicare Advantage and Part D; the 2010 ACA adds guaranteed issue, exchanges, and the MLR floor that caps the industry's take." },
      { era: "2010-present", title: "Verticalization and the shock", text: "Blocked horizontal mergers (Anthem-Cigna, Aetna-Humana, 2017) push capital vertical: CVS-Aetna, Cigna-Express Scripts, Optum's provider buying spree. Then 2024-2025 delivers the worst utilization shock in 2 decades and an MA margin reset." }
    ],
    trends: [
      { title: "The MA repricing cycle", direction: "shift", text: "Utilization shock plus CMS funding cuts and v28 risk-model phase-in crushed MA margins; plans are cutting benefits, exiting counties, and shedding members (UnitedHealthcare: ~1.3M MA members into 2026) to rebuild margin." },
      { title: "Government books outgrow commercial", direction: "up", text: "MA hit 54% of Medicare beneficiaries in 2025 (35M+ enrolled), and Medicaid managed care plus exchanges keep converting public dollars into private premiums: the industry's revenue is increasingly a policy output." },
      { title: "PBMs under siege", direction: "down", text: "FTC interim reports found the Big 3 marked up specialty generics for $7.3B of excess revenue (2017-2022); a 2024 insulin-rebate case and the February 2026 Express Scripts settlement signal structural reform of rebate and spread economics." },
      { title: "Payers become providers", direction: "up", text: "Optum's ~90,000 affiliated physicians and CVS's clinic build-out move the profit pool from underwriting to delivering care, where MLR floors do not cap the margin on an internal transaction." },
      { title: "Denials become politics", direction: "shift", text: "Prior authorization and claim-denial practices moved from trade press to national outrage after the December 2024 killing of UnitedHealthcare's CEO; AI-driven utilization review now carries litigation and regulatory risk, not just savings." }
    ],
    outlook: "Demographics guarantee the revenue: 10,000 Americans age into Medicare daily and national health spending compounds at ~5% to 6%. The open question is who keeps the margin. The 2024-2025 shock proved government repricing lags cost trend by roughly 2 years, and the recovery trade is that 2026-2027 rates and benefit cuts restore MA margins on a smaller, better-priced book. The structural bet is vertical integration surviving its regulators: if the PBM and clinic profit pools stay attached, the giants compound; if Washington severs them, the industry reverts to a capped-spread utility."
  },

  structure: {
    suppliers: [
      { name: "Hospitals & physician groups", note: "The cost base: unit-price negotiation with consolidating systems is the payer's real supply chain" },
      { name: "Pharma & drugmakers (via PBMs)", note: "Drug spend is the fastest-growing claim line; rebates are the contested currency" },
      { name: "Healthtech & data vendors", note: "Claims platforms, risk-coding, UM algorithms: the payer's factory floor" },
      { name: "Brokers & benefit consultants", note: "Commission-paid distribution that owns the employer relationship" }
    ],
    producers: [
      { name: "Diversified nationals (UnitedHealth, Elevance, Cigna, CVS/Aetna)", note: "Insurance plus services stacks; UNH is the $447.6B (FY2025) bellwether" },
      { name: "Government-book specialists (Humana, Centene)", note: "MA and Medicaid pure plays: highest growth, highest policy beta" },
      { name: "Blues & nonprofits (HCSC, regional BCBS)", note: "Deep local share and reserves without public-market pressure" },
      { name: "Integrated payer-providers (Kaiser Permanente)", note: "The closed-loop model: insurer, hospitals, and doctors under one roof" }
    ],
    distributors: [
      { name: "Employers & benefit consultants", note: "The commercial channel; self-funded ASO deals dominate large accounts" },
      { name: "Brokers, agents & AEP marketing", note: "Medicare's October to December annual enrollment is the industry's selling season" },
      { name: "ACA exchanges & CMS", note: "Government storefronts where plan design and subsidy rules set the terms" }
    ],
    customers: [
      { name: "Employers", note: "Roughly 2 in 3 covered workers are in self-funded plans (KFF 2024): fee revenue, not risk" },
      { name: "Government (CMS, states)", note: "The largest customer: MA benchmarks, Medicaid capitation, exchange subsidies" },
      { name: "Individuals & seniors", note: "MA's 35M+ enrollees choose plans on premiums, extras, and star ratings" }
    ],
    regulators: [
      { name: "CMS / HHS", note: "Sets MA rates, star ratings, risk adjustment, and audits: the margin-setting regulator" },
      { name: "State insurance commissioners & NAIC", note: "Licensing, rate review, and RBC capital standards, state by state" },
      { name: "DOJ & FTC", note: "Blocked the horizontal mergers; now prosecuting PBM practices and upcoding" }
    ],
    capital: [
      { name: "Public equity", note: "Managed care trades on EPS; the 2024-2025 shock compressed the group's multiple" },
      { name: "Investment-grade debt", note: "Modest leverage funds M&A; the model itself needs little capex" },
      { name: "Float & statutory reserves", note: "Premiums arrive before claims: an investment portfolio rides the gap under RBC rules" }
    ]
  },

  valueChain: {
    intro: "From a premium dollar to a paid claim, with tollbooths along the way. The ACA caps the underwriting spread, so the value migrated to the uncapped stages: pharmacy middlemen and owned care delivery.",
    stages: [
      { id: "funding", name: "Premium & funding capture", what: "Employer contracts, CMS benchmarks, exchange subsidies", players: "Employers, CMS, state Medicaid agencies", valueCapture: 2,
        economics: { grossMargin: [0, 5], capitalIntensity: 1, concentration: 3 },
        linksTo: ["government", "insurance"],
        deeper: "Where the revenue is decided but not earned: MA benchmark rates, subsidy rules, and the employer tax exclusion are policy levers that size the whole pool. The average employer single premium ran about $8,950 a year in 2024 (KFF)." },
      { id: "underwriting", name: "Underwriting & risk adjustment", what: "Pricing risk a year ahead; coding it for CMS", players: "Payer actuarial teams, risk-coding vendors", valueCapture: 4,
        economics: { grossMargin: [10, 20], capitalIntensity: 1, concentration: 4 },
        linksTo: ["insurance"],
        deeper: "MA revenue scales with coded sickness, which built an upcoding industry now under DOJ and RADV audit. The v28 model phase-in clawed back coding intensity and helped detonate 2024-2025 margins." },
      { id: "networks", name: "Provider network contracting", what: "Negotiating unit prices with hospitals and doctors", players: "National payers vs consolidating health systems", valueCapture: 4,
        economics: { grossMargin: [10, 20], capitalIntensity: 2, concentration: 4 },
        linksTo: ["hospitals"],
        deeper: "The payer's moat is the discount: scale buys lower unit prices, which is why share begets share. Provider consolidation is the counterforce, pushing commercial unit prices up faster than CPI." },
      { id: "pbm", name: "Pharmacy benefit management", what: "Formularies, rebates, and drug-claim processing", players: "CVS Caremark, Express Scripts (Cigna), Optum Rx (UNH)", valueCapture: 5,
        economics: { grossMargin: [4, 8], capitalIntensity: 1, concentration: 5 },
        linksTo: ["pharma", "biotech"],
        deeper: "3 firms process ~80% of ~6.6B annual US prescriptions (FTC, 2024). Thin stated margins hide the economics: rebates, spread pricing, and affiliated specialty pharmacies that the FTC says produced $7.3B of markup revenue on specialty generics from 2017-2022. The February 2026 Express Scripts settlement began forcing the model open." },
      { id: "medmgmt", name: "Claims & utilization management", what: "Adjudication, prior auth, care management", players: "Payer platforms, UM algorithm vendors", valueCapture: 3,
        economics: { grossMargin: [15, 25], capitalIntensity: 2, concentration: 4 },
        linksTo: ["saas", "ai", "data-infrastructure"],
        deeper: "The factory that pays (or denies) a billion claims: admin cost per claim falls with scale, which is the quiet source of big-payer operating leverage. AI adjudication cuts cost but is now a litigation surface." },
      { id: "delivery", name: "Owned care & value-based contracts", what: "Employed physicians, clinics, capitation deals", players: "Optum Health, CVS Health Care Delivery, Kaiser", valueCapture: 4,
        economics: { grossMargin: [8, 15], capitalIntensity: 3, concentration: 3 },
        linksTo: ["hospitals", "diagnostics"],
        deeper: "The uncapped frontier: MLR floors do not bind profit earned by a payer-owned clinic billing the payer's own plan. Optum's ~90,000 affiliated physicians make UnitedHealth the largest employer of doctors in America, and the FTC's next target set." }
    ]
  },

  financials: {
    businessModel: [
      "Two engines, one chassis. The risk engine: fully-insured premiums minus medical claims, where the MLR floor (80% to 85% under the ACA) caps the gross spread and scale in admin decides who keeps more of the residual. The fee engine: ASO contracts for self-funded employers, PBM services, and Optum-style health services, which carry no underwriting risk and no MLR cap: this is where the diversified payers earn their multiple. UnitedHealth's FY2025 shows the chassis at full size: $447.6B of revenue, but profit of just $12.1B, a ~2.7% net margin, because the care ratio ran to 88.9%.",
      "The balance sheet is a small float business attached to a giant clearing operation. Premiums arrive monthly, claims settle over roughly 45 to 50 days, and reserves (incurred but not reported claims) sit invested in the gap: rising rates are a quiet tailwind. Watch days claims payable and reserve development like a hawk: a payer can flatter this quarter's MLR by under-reserving, and the truth surfaces 2 quarters later. Capital needs are regulatory (state RBC minimums), not industrial, so free cash flow converts to buybacks and M&A in normal years."
    ],
    fingerprint: { grossMargin: 16, recurringRevenue: 90, capitalIntensity: 20, pricingPower: 45, cyclicality: 25, operatingLeverage: 45 },
    lines: [
      { label: "Premium revenue", note: "Members times rate: the volume engine, repriced annually" },
      { label: "Medical costs (MLR)", note: "The whole ballgame: 100bps at UNH scale is ~$3B of pretax swing" },
      { label: "Operating cost ratio", note: "Admin leverage: the scale players' quiet edge, low double digits and falling" },
      { label: "Services & PBM revenue", note: "Optum-class fee streams: uncapped, higher multiple, regulator bait" },
      { label: "Investment income", note: "Float on reserves: rate hikes helped offset the 2024-2025 claims pain" }
    ],
    unitEconomics: {
      unit: "per member per month (commercial, illustrative)",
      items: [
        { label: "Premium PMPM", value: "~$745", note: "average single employer premium ~$8,950/yr (KFF, 2024)" },
        { label: "Medical claims", value: "85% to 89% of premium", note: "the MLR: 2025 ran hot across the group" },
        { label: "Admin, selling, taxes", value: "~10% to 12%", note: "scale compresses this line; small plans die here" },
        { label: "Pretax underwriting margin", value: "2% to 5%", note: "a thin, capped spread on an enormous, recurring base" }
      ]
    }
  },

  kpiRefs: ["hc-mlr", "ins-loss-ratio"],
  kpiLocal: [
    {
      id: "hi-stars", name: "Medicare Advantage Star Ratings", industries: ["health-insurance"],
      definition: "CMS quality score (1 to 5 stars) per MA contract; 4+ stars unlocks ~5% bonus payments and rebate dollars that fund richer benefits.",
      formula: "Weighted composite of clinical, access, and member-experience measures, published each October for the plan year after next",
      interpretation: "Stars are revenue, delayed 2 years: Humana's share of members in 4+ star plans crashed from 94% to 25% for the 2025 rating year, gutting bonus payments and forcing benefit cuts.",
      healthy: "70%+ of members in 4+ star plans; stable measure-level scores", warning: "Contract-level slippage below 4 stars: the benefit-cut, share-loss spiral starts 2 years out" },
    {
      id: "hi-dcp", name: "Days Claims Payable", industries: ["health-insurance"],
      definition: "How many days of medical costs sit in the claims-payable reserve: the market's fastest read on reserve adequacy.",
      formula: "Medical claims payable / (medical costs in quarter) x days in quarter",
      interpretation: "Stable DCP means the MLR print is real; falling DCP alongside an in-line MLR suggests earnings are borrowing from the reserve. The 2024-2025 shock was foreshadowed by reserve noise.",
      healthy: "Stable to rising, roughly 45 to 50 days, with favorable prior-period development", warning: "Sequential DCP declines while management holds guidance" }
  ],

  health: {
    intro: "Payer health is cost forecasting discipline plus regulatory standing: the P&L is a spread the government can reprice, so the balance sheet and the coding file both have to be clean.",
    pillars: [
      { name: "Medical cost discipline", weight: 30, metrics: "MLR vs pricing assumptions, prior-period development, DCP trend", healthy: "MLR within guided range; favorable development", warning: "Serial MLR overshoots and reserve draw-downs (the 2024-2025 pattern)" },
      { name: "Government book quality", weight: 25, metrics: "Star ratings, v28/RADV exposure, MA and Medicaid margins", healthy: "70%+ members in 4+ star plans; audit-ready coding", warning: "Star crashes (Humana: 94% to 25%), DOJ upcoding suits, benchmark cuts" },
      { name: "Mix & services diversification", weight: 15, metrics: "Fee-based and services share of earnings, ASO vs fully-insured", healthy: "Growing uncapped fee streams", warning: "Single-book concentration in repriced MA" },
      { name: "Balance sheet & reserves", weight: 15, metrics: "RBC ratios, DCP, parent-company liquidity", healthy: "RBC well above state minimums; conservative reserving", warning: "Thin RBC plus aggressive reserve releases" },
      { name: "Regulatory & political standing", weight: 15, metrics: "FTC/DOJ dockets, rate-filing outcomes, denial-practice exposure", healthy: "Clean audits, constructive CMS posture", warning: "Live antitrust actions, PBM structural remedies, denial litigation" }
    ],
    scoringNote: "In managed care the fatal error is pricing on hope: cost trend missed by 300bps, as in 2025, erases 2 years of earnings growth, and the government only reprices on its own calendar."
  },

  valuation: {
    intro: "Managed care trades on EPS: the market pays for the compounding of a capped spread plus uncapped services, and it de-rates violently when the actuaries miss.",
    methods: [
      { name: "P/E on forward earnings", use: "The sector's native language: stable books, high FCF conversion", avoid: "Trough-earnings years mid-shock: 2025 EPS was not the run-rate", strengths: "Comparable, long history", weaknesses: "Hides reserve quality and mix", range: { low: 8, high: 20, asOf: 2025, note: "the group de-rated from high teens toward single digits through the MA shock" } },
      { name: "EV / EBITDA", use: "Cross-checking diversified payers with services arms", avoid: "Pure underwriters where float and reserves distort EV", strengths: "Neutralizes buyback-driven EPS", weaknesses: "Insurance EBITDA is an awkward construct", range: { low: 6, high: 13, asOf: 2025, note: "services-heavy names earn the top of the range" } },
      { name: "Price per member", use: "M&A math: what a book of covered lives fetches", avoid: "Mixing ASO fee members with fully-insured risk members", strengths: "Grounds deals in the unit that matters", weaknesses: "Member value varies 10x by line of business", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: MA members command multiples of commercial ASO lives" } },
      { name: "Sum-of-the-parts (payer + services)", use: "UNH-class conglomerates: insurance at a spread multiple, Optum-class services at a growth multiple", avoid: "Letting the SOTP assume regulators never force separation", strengths: "Matches how the giants actually earn", weaknesses: "Intercompany pricing makes segment margins negotiable", range: { low: 0, high: 0, asOf: 2025, note: "the separation-risk discount is the live debate" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a payer quickly: normalized EBITDA (through-cycle MLR, not the shock year) times a mix-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 1, max: 40, step: 1, value: 12, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 15, step: 0.5, value: 9, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -10, max: 60, step: 1, value: 20, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays payers as a defensive compounder with a policy overlay: own the diversified scale leaders through the cycle, trade the MA pure plays on the repricing calendar, and treat every FTC docket as a valuation input. The 2024-2025 shock reset the group from quality-growth multiples to show-me multiples: the entry case is that margins are policy-cyclical, not broken.",
    debates: [
      { topic: "Medicare Advantage: growth engine or policy trap?", bull: "Penetration hit 54% and demographics add 10,000 seniors a day; the 2024-2025 margin crash forced benefit cuts and weak-plan exits, so survivors reprice a bigger share of a growing pool: classic capacity-exit recovery, with 2026-2027 CMS rates already turning friendlier.", bear: "KFF showed MA gross margins ran about $1,730 per enrollee (2021), roughly double other books: Washington noticed. v28, RADV audits, and benchmark pressure are structural clawback, and enrollment growth already slowed to 4% in 2025 from a 9% long-run average. The excess margin was the anomaly, not the new floor." },
      { topic: "Vertical integration: moat or breakup target?", bull: "Payer plus PBM plus clinics captures the whole healthcare dollar, funds value-based care, and out-earned pure insurers for a decade: no regulator has actually forced separation, and the Express Scripts settlement traded transparency for structure.", bear: "The FTC's PBM case, the $7.3B markup finding, and bipartisan delinking bills all aim at the same joint: internal transfer pricing. If payer-owned pharmacies and clinics must deal at arm's length, the uncapped profit pools that justify the multiple deflate." },
      { topic: "Can payers actually bend cost trend?", bull: "Capitation and value-based contracts align incentives, MA plans run lower utilization than fee-for-service on comparable risk, and AI-driven care management finally gives UM real precision: the toolkit is compounding.", bear: "After 15 years of value-based rhetoric, 2025 produced the worst cost trend in 2 decades, providers consolidate pricing power faster than payers capture savings, and the political ceiling on denial-driven savings got very visible after December 2024. Trend management is a rounding error on a $4.9T bill." }
    ],
    cycle: {
      where: "Early repricing after the 2024-2025 utilization shock: MLRs at generational highs (UNH 88.9%, Humana 90.4% in 2025), benefits being cut, members being shed, and 2026-2027 rates set to restore margin on smaller books. The trade is timing the MLR peak.",
      drivers: "Medical cost trend vs priced trend, CMS rate notices and risk-model phase-ins, star-rating cohorts, and the political calendar.",
      leads: [
        "CMS MA advance notice (January/February) and final rate notice (April): the annual margin-setting event (cms.gov, free)",
        "Quarterly MLR prints and days claims payable across the big 6",
        "October star-ratings release: revenue visibility 2 years forward",
        "Hospital and provider volume commentary: utilization shows up there first",
        "KFF MA enrollment and margin trackers (kff.org, free)"
      ]
    },
    exposure: [
      { vehicle: "UnitedHealth Group", note: "The diversified bellwether: insurance plus Optum services; the multiple debate is separation risk" },
      { vehicle: "Humana", note: "The MA pure play: maximum torque to the repricing cycle, both directions" },
      { vehicle: "Elevance / Cigna / CVS", note: "Blues scale, PBM cash flows, and the vertical-stack discount respectively" },
      { vehicle: "Centene", note: "Medicaid and exchange beta: redetermination and subsidy-policy sensitive" },
      { vehicle: "Managed-care basket vs hospitals pair", note: "The classic trade: payer MLR pain is provider revenue, and vice versa" }
    ],
    catalysts: [
      { when: "January/February, then April", what: "CMS MA advance and final rate notices: the industry's annual repricing print" },
      { when: "Quarterly earnings", what: "MLR vs guide, days claims payable, prior-period development" },
      { when: "October", what: "Star ratings release plus annual enrollment (Oct 15 to Dec 7): share shifts get decided" },
      { when: "Ongoing dockets", what: "FTC PBM remedies, DOJ risk-coding suits, ACA subsidy legislation" }
    ],
    data: [
      { series: "CMS MA enrollment and rate files", source: "cms.gov (free, monthly)", why: "The primary tape on the growth book" },
      { series: "KFF Medicare Advantage and MLR trackers", source: "kff.org (free)", why: "Penetration, margins per enrollee, rebate data" },
      { series: "NHE projections", source: "CMS Office of the Actuary (free)", why: "The spending baseline the whole sector rides" },
      { series: "FTC PBM reports and dockets", source: "ftc.gov (free)", why: "Primary source on the structural-reform risk" },
      { series: "Company 8-Ks and stat filings", source: "SEC EDGAR / NAIC (free)", why: "MLR, DCP, and reserve development, unspun" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Defensive: premiums recur, Medicaid enrollment rises countercyclically, and elective utilization softens. Commercial membership bleeds with payrolls, but the group historically outperforms." },
      { regime: "Inflation spike", behavior: "Danger with a lag: hospital labor costs flow into network contracts 1 to 2 years later, exactly the 2024-2025 template. Premiums chase; margins compress first." },
      { regime: "Rates rising", behavior: "Mild tailwind: float income on reserves rises and the fee businesses are rate-insensitive. Valuation, not earnings, takes the duration hit." },
      { regime: "Election year", behavior: "Headline beta dominates: Medicare-for-All or MA-cut rhetoric compresses multiples regardless of prints. Historically the entry point, not the exit." }
    ]
  },

  players: [
    { name: "UnitedHealth Group", role: "Diversified bellwether", country: "US", real: true, note: "$447.6B FY2025 revenue (+12%); adjusted care ratio 88.9% vs 85.5% in 2024; profit fell to $12.1B" },
    { name: "Elevance Health", role: "Blues licensee at national scale", country: "US", real: true, note: "The Anthem franchise: deep commercial share across 14 Blues states plus Carelon services" },
    { name: "CVS Health / Aetna", role: "Vertical stack", country: "US", real: true, note: "Drugstores, Caremark PBM, and Aetna under one roof: the integration thesis in one ticker" },
    { name: "Cigna", role: "Commercial and PBM house", country: "US", real: true, note: "Express Scripts drives the dollars; its February 2026 FTC settlement is the PBM reform template" },
    { name: "Humana", role: "Medicare Advantage pure play", country: "US", real: true, note: "FY2025 benefit ratio 90.4%; 4+ star membership crashed from 94% to 25%; ~425K MA members shed in 2025" },
    { name: "Centene", role: "Medicaid and exchange leader", country: "US", real: true, note: "The government-books specialist: maximum policy beta on redeterminations and subsidies" },
    { name: "Kaiser Permanente", role: "Integrated payer-provider", country: "US", real: true, note: "Nonprofit closed loop: plan, hospitals, and physicians aligned by design, not acquisition" },
    { name: "HCSC & the Blues", role: "Nonprofit heavyweights", country: "US", real: true, note: "Health Care Service Corp and regional Blues: quiet balance sheets, dominant local share" }
  ],

  geography: [
    { country: "US", role: "The market", note: "Employer coverage, MA, Medicaid, and exchanges: private payers intermediating a $4.9T (2023) health bill" },
    { country: "NL", role: "Managed-competition lab", note: "Mandatory private insurance with risk equalization: the policy design US reformers study" },
    { country: "CH", role: "Universal private model", note: "Compulsory individual coverage from private insurers, community-rated" },
    { country: "DE", role: "Dual system", note: "Statutory sickness funds beside a private full-coverage tier for higher earners" },
    { country: "BR", role: "Largest emerging private market", note: "Roughly a quarter of Brazilians hold private plans; consolidators like Hapvida scale the model" },
    { country: "IN", role: "The growth frontier", note: "Low penetration, government mega-schemes, and fast-compounding private health premiums" }
  ],

  cycles: [
    { year: 1973, title: "The HMO Act", kind: "shift", text: "Washington invents managed care to fight cost inflation, funding the model that becomes the industry. Lesson: this industry's products are created by statute." },
    { year: 1998, title: "Managed care backlash", kind: "bust", text: "Gatekeeping tames cost trend until patients and legislators revolt; restrictions loosen and trend re-accelerates. Lesson: cost control that patients can feel becomes politics, then law." },
    { year: 2010, title: "The ACA", kind: "shift", text: "Guaranteed issue, exchanges, and the 80/85 MLR floor cap the take and reprice the pool toward scale and government books. Lesson: regulation set the margin ceiling; strategy became growing the base under it." },
    { year: 2017, title: "Mergers blocked, capital goes vertical", kind: "shift", text: "Courts kill Anthem-Cigna and Aetna-Humana; within 2 years CVS buys Aetna and Cigna buys Express Scripts. Lesson: when horizontal consolidation is blocked, the dollars integrate vertically." },
    { year: 2024, title: "The utilization shock", kind: "bust", text: "Post-COVID senior utilization, v28, and CMS funding cuts collide: UNH's care ratio jumps 340bps to 88.9% (2025), Humana's stars collapse, guidance falls across the group. Lesson: government repricing lags cost trend by 2 years, and margin is a policy variable." }
  ],

  risks: [
    { name: "Cost trend outrunning pricing again", severity: 4, likelihood: 4, transmission: "Utilization or GLP-1 spend beats actuarial assumptions -> MLR overshoots -> guidance cuts -> group-wide multiple compression before pricing resets." },
    { name: "Risk-adjustment clawback", severity: 4, likelihood: 3, transmission: "RADV audits and DOJ upcoding cases -> retroactive recoveries and coding-intensity limits -> structural MA margin reset below the KFF-documented premium to other books." },
    { name: "PBM structural reform", severity: 3, likelihood: 4, transmission: "FTC remedies plus delinking legislation -> rebate and spread economics unwound -> the uncapped profit pool that carries the diversified multiple shrinks." },
    { name: "Political redesign of the model", severity: 5, likelihood: 2, transmission: "MA benchmark cuts, a public option, or single-payer momentum -> the addressable pool and the allowed spread reprice together -> terminal-value question for the whole group." },
    { name: "Subsidy and eligibility cliffs", severity: 3, likelihood: 4, transmission: "Enhanced ACA subsidies lapsing and Medicaid redeterminations -> membership losses and sicker residual risk pools -> exchange and Medicaid books turn loss-making." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Health insurers collect monthly premiums and pay medical bills, keeping the difference. US law caps the keep: at least 80 to 85 cents of every premium dollar must go to actual care, or the insurer sends rebate checks. The biggest firms (UnitedHealth booked $447.6B of revenue in 2025) make it up on volume: tens of millions of members, repriced every year."] },
    L2: { title: "Intermediate", text: ["The key number is the medical loss ratio: claims divided by premiums. The business splits into commercial (employers, mostly self-funded where the payer just earns fees) and government (Medicare Advantage, now 54% of Medicare, plus Medicaid and exchanges), which is where the growth lives. 2024-2025 was the stress test: seniors used more care than plans priced for, UNH's care ratio jumped from 85.5% to 88.9%, and profits across the group fell hard."] },
    L3: { title: "Advanced", text: ["Model the lag: premiums price a year ahead, CMS rates lag further, so cost shocks hit margins for roughly 2 years before repricing lands. Track days claims payable and prior-period development for reserve truth, star ratings for MA revenue 2 years forward, and v28/RADV for coding clawback. The diversified names are really 2 businesses: a capped insurance spread and uncapped services (PBM, clinics), and the FTC is litigating whether they stay attached."] },
    L4: { title: "Expert", text: ["Trade the repricing calendar: the January advance notice, April final rates, October stars, and quarterly MLR prints. The live debates are whether MA margins mean-revert to the KFF-documented 2x premium over other books or to something Washington tolerates; whether PBM reform (the $7.3B FTC markup finding, the Express Scripts settlement) is transparency or delinking; and how much of Optum-class services EBITDA survives arm's-length transfer pricing. Position for margin recovery, hedge the docket."] },
    L5: { title: "Institutional", text: ["Allocator's frame: payers are a defensive compounder whose terminal economics are set politically: a regulated spread on an unstoppable spending base, plus a services stack the regulators may yet sever. The 2024-2025 shock demonstrated both the fragility (a 340bps MLR miss erased years of estimates) and the resilience (repricing began within 4 quarters). Size the group as a healthcare-cost hedge with policy tail risk, and remember the only permanent bull case: the bill itself, $4.9T and compounding, always gets paid by someone."] }
  },

  quiz: [
    { q: "The ACA's medical loss ratio rule requires insurers to spend on care at least:", choices: ["50% of premiums", "80% to 85% of premiums, or rebate the difference", "95% of premiums", "There is no requirement"], answer: 1, explain: "80% in individual/small group, 85% in large group and MA: the floor that caps the industry's take and turns the P&L into a fight over the residual 15% to 20%." },
    { q: "In 2025 UnitedHealth's adjusted medical care ratio did what?", choices: ["Fell to 80%", "Held flat", "Jumped from 85.5% to 88.9%: the utilization shock", "Hit 100%"], answer: 2, explain: "A 340bps jump: post-COVID senior utilization, v28 phase-in, and CMS funding cuts crushed margins; profit fell to $12.1B on $447.6B of revenue." },
    { q: "Medicare Advantage now covers roughly what share of Medicare beneficiaries?", choices: ["10%", "25%", "54%: up from 19% in 2007", "90%"], answer: 2, explain: "35M+ enrollees as of early 2026 (KFF): the industry's growth engine, though enrollment growth slowed to 4% in 2025 as plans cut benefits to rebuild margin." },
    { q: "The 3 largest PBMs (Caremark, Express Scripts, Optum Rx) process about:", choices: ["20% of US prescriptions", "50%", "80% of roughly 6.6B annual prescriptions", "100%"], answer: 2, explain: "FTC (2024). Its follow-up report found $7.3B of specialty-generic markup revenue from 2017-2022, and enforcement actions followed." },
    { q: "For self-funded employer plans, the payer primarily earns:", choices: ["Underwriting spread", "ASO fees for renting its network and claims engine, with no claims risk", "Government subsidies", "Nothing"], answer: 1, explain: "Roughly 2 in 3 covered workers are in self-funded plans (KFF 2024): the employer bears the risk, the payer collects fees: a very different P&L from fully-insured." },
    { q: "Humana's star-ratings crash mattered because:", choices: ["Stars are cosmetic", "4+ stars drives ~5% bonus revenue with a 2-year lag: 94% to 25% of members gutted future payments", "Stars set drug prices", "CMS ignores stars"], answer: 1, explain: "Star ratings are delayed revenue: the crash forced benefit cuts and membership losses (~425K individual MA members shed in 2025) years after the underlying scores slipped." },
    { q: "Why do payers hold up relatively well in recessions?", choices: ["People stop getting sick", "Premiums recur, Medicaid enrollment rises countercyclically, and elective care softens", "Government bails them out", "They short hospitals"], answer: 1, explain: "The revenue is annual and non-discretionary, and the government books expand exactly when commercial membership bleeds: a built-in stabilizer." },
    { q: "The core risk to the vertical-integration thesis is:", choices: ["Slow websites", "Regulators forcing arm's-length dealing between payer, PBM, and owned clinics: deflating the uncapped profit pools", "Too few members", "Foreign competition"], answer: 1, explain: "MLR floors cap the insurance spread but not internal services margins: the FTC's PBM case and delinking bills target precisely that joint." }
  ],

  sources: [
    { name: "UnitedHealth Group FY2025 results (Jan 2026)", url: "https://www.unitedhealthgroup.com/content/dam/UHG/PDF/investors/2025/unh-reports-2025-results-and-issues-2026-outlook.pdf", feeds: "revenue, care ratio, profit" },
    { name: "KFF Medicare Advantage 2026 enrollment update", url: "https://www.kff.org/medicare/medicare-advantage-in-2026-enrollment-update-and-key-trends/", feeds: "MA penetration, enrollment, margins" },
    { name: "FTC second interim PBM staff report (Jan 2025)", url: "https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-releases-second-interim-staff-report-prescription-drug-middlemen", feeds: "PBM share, markups, enforcement" },
    { name: "Humana Q4 2025 results and 2026 guidance", url: "https://humana.gcs-web.com/news-releases/news-release-details/humana-reports-fourth-quarter-2025-financial-results-provides", feeds: "benefit ratio, MA membership, stars" }
  ]
};
