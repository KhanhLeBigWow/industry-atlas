/* Industry Atlas - HOSPITALS & PROVIDERS (full module, research-backed)
 * Anchors: US hospital care spending $1.6T in 2024, 31% of the $5.3T national
 * health bill, up ~9% y/y (CMS Office of the Actuary NHE, June 2025); Medicare
 * pays ~83 cents per $1 of cost, $100B+/yr underpayment, commercial plans pay
 * ~2x to 2.5x Medicare (AHA 2024; RAND); median nonprofit operating margin
 * ~3.5% to 4.4% in 2025 (Kaufman Hall Flash Report); contract nurse wages
 * $64/hr (2019) to $132/hr peak (2022), labor costs up ~37% since 2019 (AHA
 * Costs of Caring 2024); HCA 2024: $70.6B revenue, $13.9B adj. EBITDA (~20%)
 * vs the ~4% nonprofit median; ASCs ~$45B revenue (2024) growing high single
 * digits, procedures at less than half hospital outpatient cost (Medicare
 * saves ~$4.2B/yr); 182 rural hospitals closed or dropped inpatient care
 * since 2010 (Chartis); OBBBA (July 2025) Medicaid cuts + $50B rural fund. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["hospitals"] = {
  meta: {
    id: "hospitals", name: "Hospitals & Providers", sector: "healthcare", status: "full",
    tagline: "A $1.6T fixed-cost machine paid 3 different prices for the same service: payer mix is destiny, labor is the P&L.",
    marketSize: { value: 1.6, unit: "$T", asOf: 2024, note: "US hospital care spending (CMS NHE): 31% of the $5.3T US health economy; global hospital services roughly triple that" },
    cagr: { value: 5.5, range: [4, 7], horizon: "2024-2032" },
    maturity: "mature", cyclicality: 2, capitalIntensity: 4, regulation: 5, disruption: 3
  },
  newsQuery: '("hospital operating margin" OR "health system" OR "rural hospital" OR "HCA Healthcare" OR "hospital merger" OR "site-neutral" OR "nurse staffing")',

  overview: {
    definition: "Hospitals and providers deliver acute, surgical, and increasingly ambulatory care: the place where 31% of America's $5.3T health bill actually lands. It is a high-fixed-cost service industry with administered prices, where the same appendectomy earns 3 wildly different payments depending on who insures the patient.",
    howItWorks: [
      "The core economic engine is cross-subsidy. Government payers underpay: Medicare reimbursed roughly 83 cents per $1 of cost in 2024, a $100B+ annual shortfall industry-wide (AHA), and Medicaid pays less still. Commercial insurers pay roughly 2x to 2.5x Medicare rates (RAND), and that commercial premium funds everything else. A hospital's fate is therefore set less by how many patients it treats than by which patients: payer mix is the single most important line in the model.",
      "The cost structure is labor wearing a building. Wages and benefits absorb more than half of operating expense, and the post-COVID labor shock rewrote the P&L: hospital labor costs rose ~37% between 2019 and 2024 (AHA), with contract nurse wages spiking from $64/hr in 2019 to a $132/hr peak in 2022 (Kaufman Hall) before travel-nurse reliance unwound. Layer 24/7 readiness, empty-bed fixed costs, and regulatory staffing minimums on top, and operating leverage cuts both ways: small volume or rate moves swing margins violently.",
      "Ownership splits the industry into 2 species with the same anatomy and different metabolisms. Nonprofits (most US beds) run tax-exempt, muni-bond-funded balance sheets and earned median operating margins of only ~3.5% to 4.4% in 2025 (Kaufman Hall), with a long loss-making tail. For-profits run the same hospitals as portfolio businesses: HCA converted $70.6B of 2024 revenue into $13.9B of adjusted EBITDA (~20%), roughly 5x the nonprofit median margin, by concentrating in high-growth urban markets, managing payer mix, and spreading scale across purchasing, staffing, and revenue cycle.",
      "The gravity acting on the whole system is the site-of-care shift. Surgery, imaging, and infusion migrate from inpatient wards to hospital outpatient departments to freestanding ambulatory surgery centers, where procedures cost less than half the hospital outpatient equivalent (Medicare alone saves ~$4.2B/yr). ASCs are a ~$45B market growing high single digits, and every incumbent strategy question reduces to one choice: own the migration (build ASCs, as Tenet's USPI did) or be hollowed out by it while fixed costs stay behind in the tower."
    ],
    history: [
      { era: "1946-1965", title: "Building the beds", text: "Hill-Burton federal money blankets America with community hospitals; medicine professionalizes around them." },
      { era: "1965-1983", title: "Blank-check era", text: "Medicare and Medicaid (1965) guarantee payment on a cost-plus basis; hospital spending compounds unchecked; for-profit chains (HCA, 1968) are born." },
      { era: "1983-1997", title: "The DRG revolution", text: "Medicare's prospective payment system pays fixed prices per diagnosis, ending cost-plus; lengths of stay collapse and hospitals learn cost discipline or die." },
      { era: "1997-2019", title: "Consolidation and the ACA", text: "The Balanced Budget Act (1997) squeezes rates; systems merge for payer leverage; the ACA (2010) expands coverage, cuts uncompensated care, and ties payment to quality." },
      { era: "2020-present", title: "COVID and the labor reset", text: "The pandemic fills ICUs, empties surgical suites, and triggers the worst labor inflation in industry history: 2022 is the modern margin trough, and the recovery since is uneven: strong systems compound, weak and rural ones close (182 rural hospitals shut or dropped inpatient care since 2010)." }
    ],
    trends: [
      { title: "Site-of-care migration", direction: "shift", text: "Procedures flow from inpatient to outpatient to ASC settings; outpatient is now the revenue growth engine while inpatient towers become intensive-care and complex-surgery specialists." },
      { title: "Labor cost reset", direction: "up", text: "The travel-nurse spike unwound, but the wage base reset permanently higher (~37% above 2019); workforce shortage is structural as nurses age out faster than schools graduate them." },
      { title: "For-profit vs nonprofit divergence", direction: "shift", text: "HCA-class operators post ~20% EBITDA margins while the nonprofit median hovers near 4%: scale, market density, and payer-mix management compound the gap every year." },
      { title: "Policy squeeze on the subsidy engine", direction: "down", text: "OBBBA (2025) Medicaid cuts, site-neutral payment proposals, and 340B scrutiny all attack the cross-subsidies that keep marginal hospitals alive; a $50B rural fund only partly offsets." },
      { title: "AI and revenue-cycle arms race", direction: "up", text: "Payers deploy algorithmic denials, providers deploy AI coding and appeals: administrative combat over the same dollar is now a technology budget line on both sides." }
    ],
    outlook: "Demand is demographic bedrock: an aging population guarantees volume growth near 5% to 6% nominal for a decade (CMS projects hospital spending to keep pace with the $5.3T health economy). But the spoils split unevenly: systems with commercial-heavy payer mix, outpatient networks, and labor-cost discipline compound; rural and safety-net hospitals face Medicaid cuts and closure risk. The investable story is the operators who own the site-of-care shift rather than suffer it, with policy (site-neutral payment, Medicaid funding) as the ever-present tail risk."
  },

  structure: {
    suppliers: [
      { name: "Clinical labor (nurses, physicians, staffing agencies)", note: "50%+ of operating cost; the true upstream constraint and the post-COVID crisis" },
      { name: "Drugs & devices (pharma, medtech via GPO contracts)", note: "Group purchasing organizations (Vizient, Premier) pool buying power on supplies" },
      { name: "Health IT & EHR (Epic, Oracle Health)", note: "Epic runs the medical record for most large US systems; switching is a decade decision" },
      { name: "Medical real estate & equipment finance", note: "MOB REITs, imaging leasing: the capital layer behind every campus" }
    ],
    producers: [
      { name: "Nonprofit health systems (Ascension, CommonSpirit, academic centers)", note: "Most US beds; tax-exempt, muni-funded, median margins near 4%" },
      { name: "For-profit chains (HCA, Tenet, UHS, CHS)", note: "HCA: $70.6B revenue, ~20% EBITDA margin (2024): the operating benchmark" },
      { name: "Integrated payer-providers (Kaiser Permanente)", note: "Insurer and hospital in one P&L: the closed-loop alternative model" },
      { name: "ASCs, urgent care & physician groups", note: "The fast-growing periphery pulling procedures out of the tower" }
    ],
    distributors: [
      { name: "Referral networks & payer contracts", note: "Physicians and insurer network design steer patients; in-network status IS distribution" }
    ],
    customers: [
      { name: "Government payers (Medicare, Medicaid)", note: "Volume anchor paying below cost: ~83 cents per $1 (Medicare, 2024)" },
      { name: "Commercial insurers & employers", note: "Pay 2x to 2.5x Medicare: the margin engine funding the whole system" },
      { name: "Patients", note: "Rising deductibles make them payers too: bad debt and collections now board topics" }
    ],
    regulators: [
      { name: "CMS", note: "Sets Medicare rates annually (IPPS/OPPS rules): the industry's price-setter of record" },
      { name: "State agencies & CON laws", note: "Licensure and certificate-of-need regimes gate new capacity in ~35 states" },
      { name: "FTC / DOJ", note: "Hospital merger enforcement: consolidation for payer leverage draws antitrust fire" },
      { name: "Joint Commission & CMS surveys", note: "Accreditation and quality penalties tie payment to performance" }
    ],
    capital: [
      { name: "Tax-exempt municipal bonds", note: "The nonprofit sector's funding backbone; days-cash-on-hand is the credit metric" },
      { name: "Equity & leveraged credit", note: "For-profit chains and PE-backed physician platforms fund via public and private markets" },
      { name: "Philanthropy & government grants", note: "Academic centers layer donations and NIH money onto patient revenue" }
    ]
  },

  valueChain: {
    intro: "From a nursing shortage to a muni bond coupon. The physical chain is simple (inputs, labor, care delivery); the money chain is baroque: 3 price tiers, administrative combat over every claim, and the profit pool migrating out of the building it was built in.",
    stages: [
      { id: "inputs", name: "Drugs, devices & supplies", what: "Pharmaceuticals, implants, consumables via GPOs", players: "Pharma/medtech makers; Vizient, Premier as buying pools", valueCapture: 3,
        economics: { grossMargin: [10, 20], capitalIntensity: 2, concentration: 4 },
        linksTo: ["pharma", "medical-devices", "diagnostics"],
        deeper: "Supplies and drugs run 15% to 20% of hospital cost. GPOs pool purchasing across thousands of hospitals for rebates, but sole-source implants and specialty drugs resist: physician preference items are the procurement chief's unwinnable war." },
      { id: "workforce", name: "Clinical workforce", what: "Nurses, physicians, techs: over half of every operating dollar", players: "Nursing schools, staffing agencies (AMN class), physician groups", valueCapture: 4,
        economics: { grossMargin: [20, 30], capitalIntensity: 1, concentration: 2 },
        linksTo: ["education"],
        deeper: "The COVID spike ($64/hr to $132/hr contract nurse wages, 2019 to 2022) proved labor holds the real pricing power in a shortage. Agencies arbitraged it; hospitals responded with in-house float pools and international recruiting. The structural gap between nurse retirements and graduations keeps the leverage tilted toward labor." },
      { id: "acute", name: "Acute & inpatient care", what: "The hospital tower: ICU, complex surgery, emergency", players: "HCA, Tenet, UHS, Ascension, CommonSpirit, academic centers", valueCapture: 3,
        economics: { grossMargin: [2, 20], capitalIntensity: 5, concentration: 3 },
        linksTo: ["health-insurance", "government"],
        deeper: "The widest margin dispersion in healthcare: HCA earns ~20% EBITDA where the nonprofit median operating margin sits near 4% (Kaufman Hall, 2025). The gap is payer mix, market density, and scale: not medicine. EMTALA obliges emergency care regardless of payment, making the ER both front door and loss leader." },
      { id: "ambulatory", name: "Outpatient & ASCs", what: "Same-day surgery, imaging, urgent care, infusion", players: "Tenet's USPI, SCA (Optum), physician-owned ASCs", valueCapture: 5,
        economics: { grossMargin: [25, 40], capitalIntensity: 3, concentration: 2 },
        linksTo: ["private-equity", "medical-devices"],
        deeper: "The profit pool's destination: ASC procedures cost less than half the hospital outpatient equivalent, Medicare saves ~$4.2B/yr, surgeons take equity stakes, and the ~$45B market compounds high single digits. Payers actively steer volume here, which is why every sophisticated system now buys or builds its own ASC network." },
      { id: "revcycle", name: "Revenue cycle & payer interface", what: "Coding, billing, prior authorization, denials combat", players: "R1 RCM class, Epic modules, payer utilization managers", valueCapture: 4,
        economics: { grossMargin: [30, 45], capitalIntensity: 2, concentration: 3 },
        linksTo: ["health-insurance", "saas", "ai"],
        deeper: "The administrative layer where billed charges become (much smaller) cash. Denials and prior authorization are the payer's margin tools; AI coding and appeals are the provider's counter. The 2024 Change Healthcare cyberattack froze claims nationwide and exposed this plumbing as critical infrastructure." },
      { id: "capital-layer", name: "Real estate & capital", what: "Campuses, medical office buildings, muni finance", players: "Welltower/Ventas class REITs, muni bond desks, PE", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 5, concentration: 3 },
        linksTo: ["real-estate", "banking", "capital-markets"],
        deeper: "Hospitals are half-billion-dollar buildings with 30-year financing: nonprofits issue tax-exempt munis rated on days cash on hand; REITs own the medical office space around them. Sale-leaseback deals (the Steward Health collapse, 2024) showed how stripping the real estate can strip the operator's viability with it." }
    ]
  },

  financials: {
    businessModel: [
      "Revenue = volume × rate × collection, and each factor has its own game. Volume (admissions, adjusted for outpatient activity) is demographic and market-share driven, growing steadily. Rate is trilateral: government prices are administered (Medicare ~83 cents per $1 of cost), commercial rates are negotiated on network leverage (2x to 2.5x Medicare), and the mix between them decides everything. Collection is the revenue-cycle war: denials, prior auth, and patient bad debt can bleed 5%+ of net revenue before a dollar lands.",
      "Costs are dominated by labor (50%+ of expense, reset ~37% higher since 2019), then supplies and drugs, on a heavy fixed base that makes occupancy and case mix the operating-leverage levers. The result: the median nonprofit earns 3% to 4% operating margins with a loss-making tail, while HCA's scale, urban-growth footprint, and payer-mix discipline produce ~20% EBITDA margins ($13.9B on $70.6B, 2024) from the identical clinical activity. In this industry the spread between operators, not the industry average, is where the story lives."
    ],
    fingerprint: { grossMargin: 35, recurringRevenue: 75, capitalIntensity: 70, pricingPower: 45, cyclicality: 20, operatingLeverage: 75 },
    lines: [
      { label: "Adjusted admissions & surgeries", note: "The volume tape: inpatient plus outpatient-equivalent activity" },
      { label: "Payer mix & net rate", note: "Commercial share is the margin engine; watch Medicaid and uninsured creep" },
      { label: "Labor cost ratio", note: "Salaries/benefits vs revenue: the post-COVID swing factor; contract labor is the fever gauge" },
      { label: "Outpatient revenue share", note: "The site-of-care shift scoreboard: growth lives here" },
      { label: "Days cash & leverage", note: "Nonprofit credit health (muni covenants) or for-profit debt capacity" }
    ],
    unitEconomics: {
      unit: "per $1 of net patient revenue (illustrative)",
      items: [
        { label: "Labor (salaries + benefits + contract)", value: "~$0.50 to 0.55", note: "the dominant cost; reset ~37% higher than 2019" },
        { label: "Supplies, drugs & other clinical", value: "~$0.15 to 0.20", note: "GPO-contracted, but implants and specialty drugs inflate" },
        { label: "Overhead, admin & capital costs", value: "~$0.20 to 0.25", note: "the fixed base that makes volume precious" },
        { label: "Operating margin", value: "~$0.04 median, ~$0.20 for HCA-class", note: "payer mix and scale explain the spread" }
      ]
    }
  },

  kpiRefs: ["hc-mlr"],
  kpiLocal: [
    {
      id: "hosp-operating-margin", name: "Hospital Operating Margin", industries: ["hospitals"],
      definition: "Operating income as a share of operating revenue: the industry's headline health gauge, tracked monthly by Kaufman Hall.",
      formula: "(Operating revenue - operating expense) / operating revenue",
      interpretation: "Medians ran ~3.5% to 4.4% in 2025; 2022's labor shock pushed medians below zero. The distribution matters more than the median: HCA-class operators run ~20% EBITDA while the tail loses money.",
      healthy: "4%+ sustained with stable payer mix", warning: "Below 1%, or contract labor rising as a share of expense"
    },
    {
      id: "hosp-payer-mix", name: "Payer Mix (Commercial Share)", industries: ["hospitals"],
      definition: "Share of net revenue from commercial insurers vs Medicare, Medicaid, and self-pay.",
      formula: "Commercial net revenue / total net patient revenue",
      interpretation: "Commercial pays 2x to 2.5x Medicare, which pays ~83 cents per $1 of cost: every point of mix shift toward government payers compresses margin mechanically.",
      healthy: "Commercial share stable or rising; low uninsured exposure", warning: "Medicaid redeterminations or unemployment pushing mix toward government and self-pay"
    }
  ],

  health: {
    intro: "Hospital health is payer mix, labor control, and balance-sheet endurance: clinical quality is the license to play, but the financial killers are almost always mix and wages.",
    pillars: [
      { name: "Payer mix & rate power", weight: 25, metrics: "Commercial share, negotiated rate trend, denial rates", healthy: "Commercial-heavy mix, rate escalators landing", warning: "Government mix creeping up; payers winning the denials war" },
      { name: "Labor & workforce", weight: 25, metrics: "Labor cost ratio, contract labor share, turnover, vacancies", healthy: "Contract labor near pre-COVID norms, turnover falling", warning: "Agency reliance rising; strike exposure; wage ratchets" },
      { name: "Volume & outpatient capture", weight: 20, metrics: "Adjusted admissions growth, outpatient share, ASC footprint", healthy: "Owning the site-of-care shift with growing ambulatory revenue", warning: "Inpatient-dependent revenue while procedures migrate away" },
      { name: "Balance sheet & liquidity", weight: 15, metrics: "Days cash on hand, debt service coverage, capex sustainability", healthy: "200+ days cash (nonprofit) or investment-grade leverage", warning: "Covenant pressure, deferred capex, sale-leaseback dependence" },
      { name: "Quality & regulatory standing", weight: 15, metrics: "Star ratings, readmission penalties, survey findings", healthy: "Clean surveys, penalty-free Medicare payment", warning: "Quality penalties, accreditation findings, 340B or tax-exemption challenges" }
    ],
    scoringNote: "Weights reflect what actually kills hospitals: payer mix erosion and labor inflation act fast, balance sheets buy time, and quality failures compound through payment penalties and reputation."
  },

  valuation: {
    intro: "Two valuation worlds share one industry: for-profit chains trade on EV/EBITDA and free cash flow like any operator; nonprofits are analyzed as credits (muni bonds) where days cash on hand replaces market cap.",
    methods: [
      { name: "EV / EBITDA", use: "For-profit chains (HCA, Tenet, UHS): the standard lens", avoid: "Applying chain multiples to single-market or rural operators", strengths: "Comparable, captures the operating spread", weaknesses: "Blind to payer-mix trajectory and policy risk", range: { low: 7, high: 11, asOf: 2025, note: "HCA commands the premium end on execution and buybacks" } },
      { name: "FCF yield", use: "Testing whether EBITDA converts: capex and working capital are heavy", avoid: "Peak-margin years as the base", strengths: "Cuts through capitalized growth spend", weaknesses: "Lumpy capex cycles distort single years", range: { low: 5, high: 9, asOf: 2025, note: "% yields; the chains are serial repurchasers" } },
      { name: "Muni credit lens", use: "Nonprofit systems: days cash, debt service coverage, rating trajectory", avoid: "Equity-style thinking; there is no residual claim to value", strengths: "Matches how the capital actually prices", weaknesses: "Ratings lag operating reality by quarters", range: { low: 0, high: 0, asOf: 2025, note: "qualitative: A-category ratings need ~200+ days cash and 3x+ coverage" } },
      { name: "Per-bed / replacement cost", use: "M&A and distressed situations: what is the physical franchise worth", avoid: "Using it for going-concern value; beds without payer mix are liabilities", strengths: "Anchors distressed and real-asset deals", weaknesses: "A bed's value is entirely its market context", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; urban campuses vs rural facilities differ by an order of magnitude" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a hospital operator quickly: EBITDA times a payer-mix-and-execution-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($B)", min: 0.2, max: 16, step: 0.2, value: 3, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 13, step: 0.5, value: 8.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: 0, max: 45, step: 1, value: 10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays hospitals as a quality-spread trade inside a demographically guaranteed revenue pool: long the scaled for-profits that own their markets and the site-of-care shift, avoid the policy-exposed tail, and treat every Washington headline as a repricing event for the cross-subsidy engine. Volume is the least interesting variable; mix and labor are the whole game.",
    debates: [
      { topic: "Is HCA's ~20% margin structural or a payer-cycle artifact?", bull: "Market density in growth states, scale purchasing, in-house staffing, and outpatient networks are compounding advantages no nonprofit can replicate: the margin gap has widened through 2 full cycles and funds buybacks that compound the equity regardless.", bear: "The margin rests on commercial rates at 2x to 2.5x Medicare that employers increasingly refuse to fund: site-neutral payment, price-transparency shopping, and payer steerage all attack exactly the high-margin outpatient book where HCA earns its premium." },
      { topic: "Does the ASC shift hollow out hospitals or refill them?", bull: "Systems that own ASC networks capture the migrating procedure at better margins and lower capital intensity (Tenet's USPI is now its profit engine), while the tower keeps the complex, acuity-rich cases it was built for.", bear: "The tower's fixed costs do not migrate with the surgery: inpatient units keep the sickest, worst-paying patients while the profitable volume leaves, and only operators with the balance sheet to buy the periphery escape the trap: the median community hospital cannot." },
      { topic: "Post-OBBBA policy: manageable squeeze or margin cliff?", bull: "Hospitals have absorbed every payment reform since 1983 by adapting: the cuts phase in over years, the $50B rural fund cushions the worst, and providers remain the most politically protected industry in America (every district has one).", bear: "Medicaid cuts land on exactly the hospitals with no cushion: 182 rural closures since 2010 came BEFORE this squeeze, coverage losses feed uncompensated care back into everyone's ER, and site-neutral proposals target the outpatient premium that funds the strong systems too." }
    ],
    cycle: {
      where: "Mid-recovery from the 2022 labor trough: median margins rebuilt to ~4%, contract labor normalized but wages reset permanently higher, volumes above pre-COVID: with a policy squeeze (OBBBA Medicaid cuts, site-neutral proposals) arriving just as operations stabilized.",
      drivers: "Demographics (aging drives acuity and volume), payer mix (employment and coverage policy), labor supply (nurse pipeline vs retirements), and CMS rate-setting each year.",
      leads: [
        "Kaufman Hall National Hospital Flash Report (monthly margin and labor data; free summaries)",
        "CMS IPPS/OPPS annual payment rules (each spring/summer; free)",
        "BLS healthcare employment and wage prints (monthly; free)",
        "HCA and Tenet quarterly volume and payer-mix disclosures (free)",
        "MedPAC reports to Congress on hospital margins (free)"
      ]
    },
    exposure: [
      { vehicle: "HCA Healthcare", note: "The scale operator: ~20% EBITDA margins, growth-state density, serial buybacks" },
      { vehicle: "Tenet Healthcare", note: "The ASC pivot: USPI's ambulatory earnings now drive the equity" },
      { vehicle: "Universal Health Services", note: "Acute plus behavioral health: the diversification variant" },
      { vehicle: "Medical office / hospital REITs (Welltower, Ventas class)", note: "The landlord layer: demographic demand without operating risk" },
      { vehicle: "Muni hospital bonds", note: "The nonprofit sector's investable form: credit work on days cash and coverage" }
    ],
    catalysts: [
      { when: "Each spring/summer", what: "CMS proposed and final payment rules: the annual repricing of a third of revenue" },
      { when: "Quarterly earnings", what: "Payer mix, labor cost ratio, and volume prints from the public chains" },
      { when: "Monthly", what: "Kaufman Hall flash report: the nonprofit sector's margin tape" },
      { when: "Legislative sessions", what: "Medicaid funding, site-neutral payment, and 340B fights: each moves the cross-subsidy math" }
    ],
    data: [
      { series: "CMS National Health Expenditure data", source: "cms.gov (free)", why: "The authoritative spending tape: hospital care $1.6T, 31% of the total" },
      { series: "Kaufman Hall National Hospital Flash Report", source: "kaufmanhall.com (free summaries)", why: "Monthly operating margin and labor cost medians" },
      { series: "BLS healthcare employment & earnings", source: "bls.gov (free)", why: "The labor cost leading indicator" },
      { series: "MedPAC data book & reports", source: "medpac.gov (free)", why: "Medicare margins, payment adequacy, policy direction" },
      { series: "AHA Costs of Caring & fact sheets", source: "aha.org (free)", why: "Industry cost structure and underpayment estimates (with advocacy framing)" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Volumes hold (illness ignores GDP) but payer mix rots: job losses convert commercial patients into Medicaid and self-pay at half the rate or less. Defensive on volume, cyclical on mix." },
      { regime: "Rates rising", behavior: "Muni refinancing tightens for nonprofits, REIT cap rates back up, and leveraged chains face refi math: but pricing power via annual CMS updates and commercial escalators partially indexes revenue." },
      { regime: "Labor shock", behavior: "The 2022 template: contract labor share is the fever gauge; margin recovery takes 8+ quarters and the wage base never returns. Own the systems with in-house staffing depth." },
      { regime: "Policy shock", behavior: "Medicaid cuts or site-neutral rules reprice the tail first: safety-net and rural credits gap before the chains feel it. Watch the muni spread as the early warning." }
    ]
  },

  players: [
    { name: "HCA Healthcare", role: "For-profit benchmark", country: "US", real: true, note: "$70.6B revenue, $13.9B adj. EBITDA (2024), $75.6B (2025): the operating standard" },
    { name: "Tenet Healthcare", role: "The ASC pivot", country: "US", real: true, note: "USPI's ambulatory surgery network is the earnings engine; the site-of-care trade in one ticker" },
    { name: "Universal Health Services", role: "Acute + behavioral", country: "US", real: true, note: "The diversified variant: behavioral health is a structural-shortage business" },
    { name: "Kaiser Permanente", role: "Integrated payer-provider", country: "US", real: true, note: "Insurer and hospital in one: the closed-loop model everyone studies and few replicate" },
    { name: "Ascension / CommonSpirit", role: "Nonprofit giants", country: "US", real: true, note: "Multi-state Catholic systems: scale without the for-profit toolkit; margins near the sector median" },
    { name: "Mayo Clinic / Cleveland Clinic", role: "Academic destination brands", country: "US", real: true, note: "Referral magnets where reputation IS payer leverage" },
    { name: "Fresenius Helios", role: "European private operator", country: "DE", real: true, note: "Germany's largest private hospital group: the regulated-market consolidation play" },
    { name: "Apollo Hospitals", role: "Emerging-market platform", country: "IN", real: true, note: "India's flagship chain: rising middle-class demand plus medical travel" }
  ],

  geography: [
    { country: "US", role: "The profit pool", note: "$1.6T of hospital spending, the world's highest prices, and the only large private-margin market" },
    { country: "DE", role: "Regulated private consolidation", note: "Helios and Asklepios roll up hospitals inside a DRG-based public payment system" },
    { country: "IN", role: "Growth market", note: "Apollo, Fortis, Max: private chains riding insurance penetration and medical travel" },
    { country: "SG", role: "Regional hub", note: "IHH Healthcare's base: premium private care for Southeast Asia's rising wealth" },
    { country: "AU", role: "Private-public mix", note: "Ramsay Health Care: private hospitals wrapped around a universal system" },
    { country: "BR", role: "Latin America's consolidator", note: "Rede D'Or built the region's largest private network on Brazil's private insurance base" }
  ],

  cycles: [
    { year: 1965, title: "Medicare & Medicaid", kind: "boom", text: "Government guarantees payment for the old and poor on a cost-plus basis; hospital spending compounds for 2 decades unchecked. Lesson: reimbursement design, not demand, is the industry's growth engine." },
    { year: 1983, title: "The DRG shock", kind: "shift", text: "Medicare switches to fixed prices per diagnosis; lengths of stay collapse and the cost-plus era ends overnight. Lesson: a payment-formula change can restructure an industry faster than any technology." },
    { year: 1997, title: "Balanced Budget Act", kind: "bust", text: "Deep Medicare cuts blindside the sector; margins crater and Congress partially walks it back by 1999. Lesson: policy overshoots get corrected, but only after the weak are culled." },
    { year: 2010, title: "The ACA bargain", kind: "shift", text: "Hospitals accept rate cuts in exchange for coverage expansion; uncompensated care falls and consolidation accelerates. Lesson: coverage policy is hospital revenue policy wearing a different name." },
    { year: 2022, title: "The labor trough", kind: "bust", text: "Post-COVID contract-nurse wages ($132/hr peak, up 106% from 2019) push median margins below zero; the weakest and most rural close. Lesson: in a 50%-labor business, a wage shock is a solvency event." }
  ],

  risks: [
    { name: "Labor cost re-inflation", severity: 4, likelihood: 4, transmission: "Nurse shortage tightens -> contract labor share rises -> wage ratchets spread to employed staff -> margins compress on a base that never deflates." },
    { name: "Medicaid & coverage cuts (OBBBA)", severity: 4, likelihood: 4, transmission: "Enrollment drops -> payer mix shifts to self-pay -> uncompensated care rises -> rural and safety-net closures accelerate -> volumes and acuity concentrate on survivors' ERs." },
    { name: "Site-neutral payment reform", severity: 4, likelihood: 3, transmission: "CMS equalizes hospital outpatient rates with ASC/office rates -> the outpatient premium funding fixed costs vanishes -> hospital-owned outpatient economics reprice toward ASC levels." },
    { name: "Payer denials & rate pushback", severity: 3, likelihood: 4, transmission: "Algorithmic utilization review scales -> denials and downgrades rise -> cash collection slows and admin cost grows -> net rate erodes without any headline rate cut." },
    { name: "Cyber attack on clinical or claims infrastructure", severity: 4, likelihood: 3, transmission: "Ransomware hits EHR or clearinghouse (the 2024 Change Healthcare template) -> claims and cash freeze industry-wide -> liquidity stress lands within weeks at thin-margin systems." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Hospitals are where most healthcare money goes: $1.6T a year in the US, about 31% of all health spending. They get paid 3 very different prices for the same care: government programs (Medicare, Medicaid) pay below cost, and private insurance pays roughly double, which keeps the whole system afloat. Their biggest cost by far is people: over half of every dollar goes to nurses, doctors, and staff."] },
    L2: { title: "Intermediate", text: ["The model is cross-subsidy on a fixed-cost base: commercial insurers (2x to 2.5x Medicare rates) fund the losses on government patients (Medicare pays ~83 cents per $1 of cost). Labor is over half of expense and reset ~37% higher after COVID, which is why the median nonprofit margin is only ~4% while scaled for-profits like HCA earn ~20% EBITDA. Meanwhile procedures keep migrating to ambulatory surgery centers at less than half the cost: growth lives outside the tower."] },
    L3: { title: "Advanced", text: ["Model revenue as volume × rate × collection: volume is demographic, rate is payer mix (the model's most important line), and collection is the denials war. Costs are a 50%-labor base with heavy operating leverage, so small mix or wage moves swing margins violently: 2022's contract-labor spike pushed medians negative. Separate the species: for-profits are EV/EBITDA equities (7x to 11x), nonprofits are muni credits judged on days cash on hand, and the margin spread between HCA (~20%) and the median (~4%) is the industry's central fact."] },
    L4: { title: "Expert", text: ["Trade the annual CMS rules, the monthly Kaufman Hall tape, and payer-mix prints; respect that policy is the sector's true cycle. Live debates: whether HCA's margin survives site-neutral payment and employer pushback on 2.5x commercial rates, whether the ASC shift refills or hollows the systems that own it, and how hard the OBBBA Medicaid cuts hit a tail that has already lost 182 rural hospitals since 2010. The 2024 Change Healthcare freeze added a new tail risk: claims plumbing as single point of failure."] },
    L5: { title: "Institutional", text: ["Allocator's frame: hospitals offer demographically guaranteed volume with politically administered economics: the alpha is the operator spread, not the industry beta. Core the scaled for-profits compounding via density, ambulatory capture, and buybacks; express the nonprofit sector through muni credit where days cash prices survival; and hold policy exposure consciously, because every cross-subsidy in the model (commercial premium, outpatient rate differential, 340B, tax exemption) has a constituency trying to close it. The terminal question is who owns the patient relationship as care leaves the building."] }
  },

  quiz: [
    { q: "US hospital care spending in 2024 was roughly:", choices: ["$500B, 10% of health spending", "$1.6T, about 31% of the $5.3T US health economy", "$5.3T in total", "$150B"], answer: 1, explain: "Hospital care is the largest single slice of national health expenditure: $1.6T of the $5.3T total (CMS, 2024)." },
    { q: "Medicare pays hospitals approximately:", choices: ["83 cents per $1 of cost: a $100B+ annual shortfall", "Exactly cost", "150% of cost", "Whatever hospitals bill"], answer: 0, explain: "Government underpayment is the reason commercial rates (2x to 2.5x Medicare) carry the system: payer mix is destiny." },
    { q: "A hospital's largest cost category is:", choices: ["Drugs", "Buildings", "Labor: over half of operating expense, reset ~37% higher since 2019", "Insurance"], answer: 2, explain: "Wages and benefits dominate, which is why the post-COVID labor shock (contract nurses from $64/hr to $132/hr) was a solvency event." },
    { q: "In 2024, HCA's adjusted EBITDA margin vs the median nonprofit operating margin was roughly:", choices: ["Both around 4%", "~20% vs ~4%: the industry's central spread", "~4% vs ~20%", "Both around 20%"], answer: 1, explain: "Identical clinical work, wildly different economics: scale, market density, and payer-mix management explain the gap." },
    { q: "Procedures in ambulatory surgery centers typically cost:", choices: ["More than hospitals", "About the same", "Less than half the hospital outpatient equivalent", "Nothing: they are free clinics"], answer: 2, explain: "That cost gap (Medicare alone saves ~$4.2B/yr) is why payers steer volume to ASCs and why systems race to own them." },
    { q: "The 1983 DRG payment reform mattered because it:", choices: ["Raised all hospital prices", "Ended cost-plus reimbursement with fixed prices per diagnosis, forcing cost discipline overnight", "Created Medicare", "Banned for-profit hospitals"], answer: 1, explain: "A payment-formula change restructured the industry faster than any technology: lengths of stay collapsed within years." },
    { q: "Since 2010, rural hospitals have:", choices: ["Doubled in number", "Seen 182 close or drop inpatient care, with Medicaid cuts adding pressure", "Been unaffected by payment policy", "All converted to ASCs"], answer: 1, explain: "The thin-margin tail closes first: rural payer mix skews government, and OBBBA's Medicaid cuts squeeze it further despite a $50B rural fund." },
    { q: "The 2024 Change Healthcare cyberattack demonstrated that:", choices: ["Hospitals are immune to cyber risk", "Claims processing is critical infrastructure: when it froze, hospital cash flow froze nationwide", "EHRs are optional", "Payers bear all cyber risk"], answer: 1, explain: "Thin-margin providers hit liquidity stress within weeks: the revenue-cycle plumbing is now a systemic single point of failure." }
  ],

  sources: [
    { name: "CMS Office of the Actuary, National Health Expenditures 2024 (via Health Affairs, June 2025)", url: "https://www.cms.gov/data-research/statistics-trends-reports/national-health-expenditure-data", feeds: "market size, spending growth" },
    { name: "Kaufman Hall National Hospital Flash Report (2025)", url: "https://www.kaufmanhall.com/insights/research-report/national-hospital-flash-report", feeds: "operating margins, labor costs" },
    { name: "AHA Costs of Caring & Medicare underpayment fact sheets (2024)", url: "https://www.aha.org/costsofcaring", feeds: "cost structure, underpayment" },
    { name: "HCA Healthcare Q4 2024 results (January 2025)", url: "https://investor.hcahealthcare.com/news/news-details/2025/HCA-Healthcare-Reports-Fourth-Quarter-2024-Results-and-Provides-2025-Guidance/default.aspx", feeds: "for-profit benchmark financials" }
  ]
};
