/* Industry Atlas - EDUCATION (full module, research-backed)
 * Anchors: global education expenditure projected at $7.3T by 2025, >6% of world GDP,
 * with edtech under $500B of it (HolonIQ); US student loan debt $1.86T across 42.6M
 * federal borrowers, average balance $40,467 (Education Data Initiative, Q1 2026);
 * Byju's fell from a $22B valuation (March 2022) to zero with US Chapter 11 in
 * February 2024 (public filings); Chegg fell 38% in one day in May 2023 on its
 * ChatGPT warning and posted an $(873)M net loss on $618M revenue in 2024; OPM
 * pioneer 2U filed Chapter 11 in July 2024, shedding $450M+ of debt after paying
 * $800M for edX in 2021; the US hosted 1,177,766 international students in 2024/25,
 * +5%, worth $42.9B and 355,736 jobs (IIE Open Doors Nov 2025; NAFSA); WEF Future of
 * Jobs 2025 expects 39% of core skills to change by 2030. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["education"] = {
  meta: {
    id: "education", name: "Education", sector: "public", status: "full",
    tagline: "A $7T sector where the state is buyer, producer, and referee: investors get the rim, not the wheel, and the rim just survived a bubble.",
    marketSize: { value: 7.3, unit: "$T", asOf: 2025, note: "global education expenditure, public + private, per HolonIQ's $7.3T-by-2025 projection (>6% of world GDP); edtech is under $500B of it" },
    cagr: { value: 5, range: [3, 7], horizon: "2025-2030" },
    maturity: "defensive-mature", cyclicality: 2, capitalIntensity: 3, regulation: 5, disruption: 4
  },
  newsQuery: '("higher education" OR edtech OR "student debt" OR "student loans" OR "international students" OR "university enrollment" OR "school funding")',

  overview: {
    definition: "The education industry converts public budgets, household savings, and debt into human capital: K-12 schooling, universities, tutoring, testing, publishing, edtech, and workforce training. It is one of the largest spending categories on Earth and one of the least privatized: governments fund and deliver most of it, leaving investors a narrow but eventful rim.",
    howItWorks: [
      "Follow the money, not the students. Global education expenditure was projected by HolonIQ to reach $7.3T by 2025, more than 6% of world GDP, yet the overwhelming share is government-funded and government-delivered: teacher salaries in public systems. The investable industry is the rim around that core: publishers and courseware, testing and credentials, private schools and tutoring, for-profit and online universities, edtech software, and the recruitment pipelines that move students across borders.",
      "Higher education runs on a peculiar unit economics: a high sticker price almost nobody pays. US private nonprofit colleges now discount first-year tuition by more than 50% on average (NACUBO surveys), competing for a shrinking pool of 18-year-olds with merit aid while costs (60-70% labor) keep rising. The gap is bridged by debt: US student loans total $1.86T across 42.6M federal borrowers, averaging $40,467 each (Education Data Initiative, Q1 2026): a politically radioactive asset class that funds the sector and caps its pricing power.",
      "Edtech just lived a full boom-bust cycle in 4 years. Venture funding peaked above $20B in 2021 (HolonIQ) as COVID moved classrooms online; it then fell more than 80% as classrooms moved back. The wreckage is instructive: Byju's, once India's most valuable startup at $22B (March 2022), collapsed to zero with its US arm in Chapter 11 by February 2024; OPM pioneer 2U, which paid $800M for edX in 2021, filed Chapter 11 in July 2024; and Chegg lost 38% of its market value in a single May 2023 session after admitting ChatGPT was taking its homework-help customers, then posted an $(873)M loss on $618M of 2024 revenue. AI is simultaneously the sector's biggest threat (free answers) and its biggest product opportunity (tutoring at scale).",
      "The third engine is mobility and reskilling. International students are a genuine export industry: the US hosted a record 1,177,766 in 2024/25, contributing $42.9B and 355,736 jobs (IIE Open Doors; NAFSA), with India (363,019 students) overtaking China as the top sender: and host-country politics (Canadian permit cuts, Australian caps, US visa posture) now set the growth rate. Meanwhile employers are becoming the fastest-growing customer: the WEF's Future of Jobs 2025 expects 39% of workers' core skills to change by 2030, turning corporate reskilling and credentials into the sector's most durable demand line."
    ],
    history: [
      { era: "1944-1970", title: "Massification", text: "The GI Bill and its global cousins turn university from elite finishing school into mass institution; enrollment compounds for two generations." },
      { era: "1980-2008", title: "Tuition inflation and the loan machine", text: "US tuition rises far faster than CPI for decades; federal loans expand to bridge the gap, building today's $1.8T+ debt stock and a for-profit college boom riding it." },
      { era: "2010-2015", title: "For-profit reckoning and the MOOC mirage", text: "Regulators crush loan-fueled for-profit enrollment; free MOOCs (Coursera, edX) promise disruption, discover completion rates in the single digits, and pivot to credentials." },
      { era: "2020-2021", title: "The COVID edtech mania", text: "Lockdowns force 1.5B+ students online; edtech VC tops $20B in 2021 (HolonIQ); Byju's hits $22B; China bans for-profit K-9 tutoring outright, vaporizing a $100B sector in a summer." },
      { era: "2022-present", title: "The reset and the AI shock", text: "Funding falls 80%+; Byju's goes to zero, 2U goes bankrupt, Chegg becomes the first public AI casualty; demographic decline arrives in US and East Asian classrooms while AI tutoring races free AI answers." }
    ],
    trends: [
      { title: "AI on both sides of the trade", direction: "shift", text: "Free chatbots gutted paid homework help (the Chegg template) while AI-native products (Duolingo class) ship tutoring at near-zero marginal cost: the moat question is now distribution and habit, not content." },
      { title: "The demographic cliff", direction: "down", text: "US 18-year-olds peak around 2025 and shrink for a decade-plus (WICHE projections); Korea, Japan, and China face steeper drops: fewer students chasing fixed capacity means discounting and closures." },
      { title: "International flows politicized", direction: "shift", text: "Canada cut new study permits ~35% for 2024 and Australia legislated caps: host-country immigration politics, not demand, now gates a $40B+ per-country export line." },
      { title: "Employer-funded learning", direction: "up", text: "With 39% of core skills changing by 2030 (WEF), corporate L&D, certificates, and apprenticeship-style pipelines are outgrowing degree programs; the buyer shifts from household to HR budget." },
      { title: "Unbundling the degree", direction: "up", text: "Micro-credentials, skills-based hiring, and income-share experiments chip at the 4-year bundle; the degree premium persists, but its monopoly on signaling is eroding." }
    ],
    outlook: "The core grows with GDP and demographics: slowly, unevenly, and mostly outside investor reach. The rim is where the action is: a disciplined post-bust edtech cohort with real unit economics, assessment and credentialing franchises, international-student infrastructure hostage to visa politics, and a reskilling wave with corporate budgets behind it. The open question is AI: if it becomes the tutor, incumbents with distribution win big; if it stays the free answer key, the Chegg template claims more victims."
  },

  structure: {
    suppliers: [
      { name: "Publishers & courseware (Pearson, McGraw Hill, Cengage)", note: "Textbook oligopoly turned digital-subscription and assessment businesses" },
      { name: "Learning infrastructure (Instructure/Canvas, PowerSchool, Blackboard)", note: "The LMS layer: sticky, boring, and sold through 3-year district cycles" },
      { name: "Assessment & testing (ETS, College Board, Pearson VUE)", note: "Gatekeeper economics: the SAT, TOEFL, and certification exams are toll roads" },
      { name: "Teacher labor pipeline", note: "The real input: 60-70% of system cost is people, and shortages are chronic" }
    ],
    producers: [
      { name: "Public K-12 systems", note: "The bulk of the $7T: government-run, locally governed, non-investable" },
      { name: "Universities (public, nonprofit, for-profit)", note: "From Harvard's ~$50B endowment to tuition-dependent colleges one bad fall from closure" },
      { name: "Online operators (SNHU, WGU, Grand Canyon, Stride)", note: "Scale players in online degrees and virtual K-12: the working-adult franchise" },
      { name: "Tutoring & supplemental (Kumon, hagwons, ex-Byju's class)", note: "Household-funded shadow education: enormous in East Asia, boom-bust everywhere" }
    ],
    distributors: [
      { name: "OPMs & platforms (2U/edX, Coursera, Academic Partnerships)", note: "Revenue-share middlemen between universities and online students; 2U's Chapter 11 repriced the model" },
      { name: "International recruitment (IDP Education, agents, pathway providers)", note: "The pipes of a 1.2M-student US inflow and its UK/AU/CA equivalents" }
    ],
    customers: [
      { name: "Governments", note: "The dominant payer at every level; budgets set the sector's growth rate" },
      { name: "Households", note: "Tuition, tutoring, test prep: savings plus $1.86T of US student debt" },
      { name: "Employers", note: "The growth customer: L&D budgets, tuition benefits, reskilling mandates" }
    ],
    regulators: [
      { name: "Education ministries & the US Dept of Education", note: "Funding rules, accountability regimes, and Title IV loan eligibility: the kill switch for US operators" },
      { name: "Accreditors", note: "Private gatekeepers of degree legitimacy and federal aid access" },
      { name: "Immigration authorities", note: "Visa policy is revenue policy for every internationalized university" }
    ],
    capital: [
      { name: "Public budgets & muni bonds", note: "Appropriations fund the core; nonprofits borrow in the muni market on enrollment credit" },
      { name: "Student loans", note: "$1.86T in the US, 91% federal: the sector's shadow balance sheet" },
      { name: "Endowments & philanthropy", note: "Wealth concentrated at the top: a handful of institutions hold most of it" },
      { name: "Venture & PE", note: "$20B+ edtech VC in 2021 fell 80%+; PE consolidates schools, testing, and LMS assets" }
    ]
  },

  valueChain: {
    intro: "From taxpayer and household wallet to a credential an employer trusts. Margin lives at the toll gates (testing, courseware, software), not in the classroom, where labor absorbs nearly everything.",
    stages: [
      { id: "funding", name: "Funding & finance", what: "Budgets, loans, endowments, 529s", players: "Governments, Sallie Mae/SoFi class, endowment offices", valueCapture: 2,
        economics: { grossMargin: [0, 0], capitalIntensity: 4, concentration: 2 },
        linksTo: ["government", "banking", "private-credit"],
        deeper: "The $1.86T US loan stock is the chain's load-bearing wall: 91% federal, politically contested (forgiveness fights, repayment-plan whiplash), and the reason for-profit operators live and die by Title IV eligibility. Endowments are the other pole: permanent capital that makes a few dozen universities function like tax-exempt asset managers with a teaching arm." },
      { id: "content", name: "Content & courseware", what: "Curriculum, textbooks, digital courseware", players: "Pearson, McGraw Hill, Cengage, OpenStax", valueCapture: 3,
        economics: { grossMargin: [55, 70], capitalIntensity: 2, concentration: 4 },
        linksTo: ["media", "saas"],
        deeper: "A used-book and piracy war forced the pivot: inclusive-access subscriptions bill courseware like software, trading unit price for attach rate. AI is the new front: content is trivially generatable, so the survivors sell assessment, data, and workflow, not chapters." },
      { id: "k12", name: "K-12 delivery", what: "Primary and secondary schooling", players: "Public systems, charters, private and international schools", valueCapture: 1,
        economics: { grossMargin: [0, 10], capitalIntensity: 3, concentration: 1 },
        linksTo: ["government", "construction"],
        deeper: "The largest slice of the $7T and the least investable: politically governed, labor-intensive, locally fragmented. The investable edges are private-pay international schools (premium fees in Asia and the Gulf), US charter facilities, and the vendor stack sold into districts." },
      { id: "highered", name: "Higher education", what: "Degrees, research, and the campus", players: "Public flagships, nonprofits, for-profits, online megaschools", valueCapture: 3,
        economics: { grossMargin: [0, 15], capitalIntensity: 4, concentration: 2 },
        linksTo: ["government", "real-estate"],
        deeper: "A barbell: selective institutions with pricing power and endowments on one end, tuition-dependent schools discounting 50%+ into a shrinking demographic on the other. Online mega-universities (SNHU, WGU) broke the geography constraint and now enroll six figures each: scale economics finally applied to teaching." },
      { id: "edtech", name: "Edtech platforms & OPMs", what: "Learning software, marketplaces, online program management", players: "Coursera, Duolingo, Instructure, ex-2U", valueCapture: 4,
        economics: { grossMargin: [50, 75], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas", "ai", "cloud"],
        deeper: "Software margins, education CAC: selling to districts takes years, selling to consumers churns, and selling through universities (the OPM revenue share) just went through bankruptcy court with 2U. The post-2021 survivors run SaaS discipline; the AI question is whether they own the tutor or get disintermediated by the free chatbot, as Chegg was." },
      { id: "credentials", name: "Credentials & workforce learning", what: "Testing, certification, corporate reskilling", players: "ETS, Pearson VUE, LinkedIn Learning, cert bodies", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas", "ai", "government"],
        deeper: "The toll-road end of the chain: exams and certifications are priced on what the credential unlocks, not what it costs. With 39% of core skills changing by 2030 (WEF), employer-funded reskilling is the fastest-growing budget line in the sector, and the one least exposed to demographic decline." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share one sector. Institutions (universities, school operators) sell enrollment: revenue = students x net price, where net price is sticker minus discount, and 60-70% of cost is labor: operating leverage is real but capacity is sticky, so falling enrollment turns campuses into fixed-cost traps. Toll roads (testing, courseware, LMS) sell mandatory or near-mandatory attachments to enrollment: high gross margins, multi-year contracts, and pricing power bounded only by political tolerance. Edtech sells software and subscriptions: SaaS economics gated by brutal acquisition costs and, since 2023, by whether free AI does the job.",
      "The sector's financial signature is stability with slow-motion crises. Demand is countercyclical (recessions push adults back to school) and government funding smooths cycles, but the structural clocks tick loudly: a $1.86T US loan stock capping tuition growth, first-year discount rates above 50% at US private nonprofits, a demographic cliff arriving from 2025, and international revenue hostage to visa politics. The 2021-24 edtech cycle added the cautionary tail: Byju's ($22B to zero), 2U (Chapter 11), and Chegg ($(873)M 2024 net loss) all monetized a surge the P&L treated as permanent."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 70, capitalIntensity: 45, pricingPower: 45, cyclicality: 25, operatingLeverage: 40 },
    lines: [
      { label: "Enrollment & starts", note: "The volume engine: fall census and new-student starts are the sector's tape" },
      { label: "Net tuition per student", note: "Sticker minus discount: the honest price, and it is stagnating in the US" },
      { label: "Government appropriations & aid", note: "The dominant revenue line for public systems; Title IV eligibility for private operators" },
      { label: "Subscription ARR & retention", note: "Edtech's health metric: post-2021, retention separates products from pandemic artifacts" },
      { label: "International student mix", note: "Full-fee payers who subsidize domestic seats: a $42.9B US line item with visa risk attached" }
    ],
    unitEconomics: {
      unit: "per US undergraduate seat (illustrative)",
      items: [
        { label: "Sticker vs net tuition", value: "discounts above 50%", note: "first-year discount rates at private nonprofits, per NACUBO surveys" },
        { label: "Cost structure", value: "60-70% labor", note: "instruction plus administration: why productivity gains are so hard" },
        { label: "Debt per federal borrower", value: "$40,467 average", note: "Education Data Initiative, Q1 2026; 42.6M borrowers" },
        { label: "Completion", value: "~6 in 10 finish in 6 years", note: "NCES cohort rates: the sector's quietest scandal, and the ROI variable that matters" }
      ]
    }
  },

  kpiRefs: ["saas-nrr", "saas-cac-payback"],
  kpiLocal: [
    {
      id: "edu-net-tuition", name: "Net Tuition Revenue per Student", industries: ["education"],
      definition: "Tuition and fee revenue after institutional aid and discounts, divided by enrolled students: the honest price of a seat.",
      formula: "Net tuition revenue / FTE enrollment; discount rate = institutional aid / gross tuition",
      interpretation: "Sticker prices are marketing; net tuition is the P&L. US private nonprofits now discount first-year students above 50% (NACUBO), so enrollment growth with falling net price is running to stand still.",
      healthy: "Net tuition per student rising with stable discount rate", warning: "Discount rate climbing yearly to hold enrollment flat: the death-spiral signature"
    },
    {
      id: "edu-intl-mix", name: "International Student Mix", industries: ["education"],
      definition: "Share of enrollment (and of tuition revenue) from international, typically full-fee students.",
      formula: "International FTE / total FTE; better: international tuition / total tuition",
      interpretation: "Full-fee internationals cross-subsidize domestic seats and research; the US hosted 1,177,766 in 2024/25 worth $42.9B (Open Doors, NAFSA). High mix is high margin and high policy risk: Canada's ~35% permit cut showed how fast the tap turns.",
      healthy: "Diversified source countries, mix below ~25% of revenue", warning: "Single-country concentration or mix so high that one visa decision breaks the budget"
    }
  ],

  health: {
    intro: "Institutional health is enrollment demand against fixed costs; vendor health is retention and attach rates; everyone's health is policy exposure.",
    pillars: [
      { name: "Enrollment demand", weight: 25, metrics: "Applications, starts, yield, demographic pipeline", healthy: "Growing starts against the demographic tide", warning: "Buying enrollment with discounts; shrinking yield" },
      { name: "Funding stability", weight: 25, metrics: "Appropriations trend, Title IV standing, aid dependence", healthy: "Diversified funding, secure eligibility", warning: "One legislature or one regulation from a revenue cliff" },
      { name: "Pricing & net revenue", weight: 20, metrics: "Net tuition per student, discount rate trajectory", healthy: "Net price rising modestly, discount stable", warning: "Discount rate above 50% and climbing" },
      { name: "Outcomes & ROI", weight: 15, metrics: "Completion, placement, earnings premium, loan repayment", healthy: "Graduates out-earning debt comfortably", warning: "Programs failing debt-to-earnings tests: regulatory bait" },
      { name: "Balance sheet & endowment", weight: 15, metrics: "Endowment per student, leverage, liquidity", healthy: "Reserves covering a bad enrollment year twice over", warning: "Tuition-dependent, levered campus, thin days-cash" }
    ],
    scoringNote: "In education the fatal event is a funding-eligibility loss or an enrollment air pocket against fixed campus costs: both unfold slowly, then suddenly (the college-closure pattern)."
  },

  valuation: {
    intro: "Price the toll roads like software, the operators like regulated services, and the institutions like credits: most of the sector is valued in the muni market, not the stock market.",
    methods: [
      { name: "EV / EBITDA (education services)", use: "For-profit operators, school groups, testing and courseware", avoid: "Treating pandemic-era enrollment surges as run-rate", strengths: "Standard, comparable across operators", weaknesses: "Regulatory risk sits outside the multiple", range: { low: 8, high: 14, asOf: 2025, note: "quality operators at the top; Title IV-exposed names discounted" } },
      { name: "EV / Revenue (edtech)", use: "Growth-stage platforms with SaaS economics", avoid: "The 2021 template: 20x revenue on COVID cohorts ended with Byju's at zero", strengths: "Only sane yardstick pre-profitability", weaknesses: "Ignores CAC reality and churn; the bust was built on it", range: { low: 2, high: 6, asOf: 2025, note: "AI-native winners command the top; ex-growth names trade below" } },
      { name: "Cohort LTV / CAC", use: "Consumer edtech and subscription learning", avoid: "Blended CAC that hides paid-channel dependence", strengths: "Exposes whether growth creates value", weaknesses: "LTV assumptions are the whole answer", range: { low: 0, high: 0, asOf: 2025, note: "framework, not a multiple: demand LTV/CAC above 3x" } },
      { name: "Credit lens (institutions)", use: "Universities and school systems via muni/rating frameworks", avoid: "Equity-style thinking: there is no equity, only obligations", strengths: "Matches how the capital actually prices", weaknesses: "Ratings lag enrollment reality", range: { low: 0, high: 0, asOf: 2025, note: "qualitative: endowment per student, demand trend, days-cash" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an education operator quickly: normalized EBITDA times a regulation-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($M)", min: 20, max: 1500, step: 10, value: 200, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 18, step: 0.5, value: 10, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($M)", min: -500, max: 3000, step: 50, value: 300, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats education as a defensive services sector with venture-grade tails: core the toll roads (testing, courseware, LMS) and the disciplined post-bust platforms, own international-flow infrastructure with eyes open on visa politics, and underwrite nothing that depends on a government staying generous or a chatbot staying bad. The 2021 vintage taught the sizing lesson: Byju's, 2U, and Chegg were all consensus longs.",
    debates: [
      { topic: "AI: edtech's extinction event or its iPhone moment?", bull: "AI finally delivers the sector's holy grail, 1-on-1 tutoring at zero marginal cost: incumbents with distribution and habit (Duolingo class) convert it into engagement and margin, and institutions pay for the workflow layer that makes AI safe to deploy.", bear: "The free chatbot IS the product: Chegg fell 38% in a day and lost $(873)M in 2024 because students stopped paying for what ChatGPT gives away. Most edtech is a thin UI over content AI generates on demand: distribution delays the outcome, it does not change it." },
      { topic: "Is the US higher-ed model breaking or self-correcting?", bull: "The degree premium persists, applications at selective schools hit records, online megaschools prove the cost curve can bend, and the demographic cliff mostly prunes capacity that deserved pruning: the strong get stronger.", bear: "Discount rates above 50%, $1.86T of debt politically frozen, net tuition flat in real terms, and a decade of shrinking 18-year-old cohorts from 2025: a fixed-cost industry facing falling volume and capped price. Closures accelerate and the muni market reprices the tail." },
      { topic: "International student flows: structural compounder or policy artifact?", bull: "Emerging-market middle classes want Anglosphere credentials faster than seats grow: the US just set a record (1,177,766 in 2024/25) even against visa friction, and every restriction in one host redirects, not destroys, demand.", bear: "Canada cut permits ~35% in one announcement and Australia legislated caps: this is an export industry where the exporter's electorate keeps voting to shrink it. Concentration risk is brutal: India plus China are over half the US inflow." }
    ],
    cycle: {
      where: "Post-bust reset: edtech funding down 80%+ from the 2021 peak with survivors turning profitable, US demographic cliff beginning, international flows at record highs but politically capped, and AI product cycles just starting to separate winners from roadkill.",
      drivers: "Demographics (birth cohorts 18 years prior), government budgets and loan policy, employer skill demand (39% of core skills changing by 2030, per WEF), visa politics, and AI capability jumps.",
      leads: [
        "National Student Clearinghouse enrollment reports (free, term-by-term US tape)",
        "State Dept student-visa issuance data (free, monthly: the international-flow lead)",
        "State appropriations and federal budget proposals for education lines",
        "Edtech VC funding tallies (HolonIQ and press: the sentiment gauge)",
        "Duolingo/Coursera-class earnings: subscriber growth as the AI-adoption tape"
      ]
    },
    exposure: [
      { vehicle: "Duolingo class (consumer AI-native)", note: "The AI-as-product bull case: habit, distribution, and gross margin" },
      { vehicle: "Pearson class (assessment & courseware)", note: "The toll road: testing and qualifications with digital margins" },
      { vehicle: "IDP Education class (international flows)", note: "Pure play on cross-border students: high ROIC, high visa beta" },
      { vehicle: "Grand Canyon / Stride class (US operators)", note: "Online degrees and virtual K-12: cash generative, regulation-discounted" },
      { vehicle: "Instructure / PowerSchool class (LMS infrastructure)", note: "The boring sticky layer: PE keeps taking it private for a reason" }
    ],
    catalysts: [
      { when: "Sept-Oct (annual)", what: "Fall enrollment census and Clearinghouse prints: the volume verdict" },
      { when: "Nov (annual)", what: "Open Doors international-student data: the export-line scoreboard" },
      { when: "Budget season (spring)", what: "State appropriations and federal loan-policy moves: the funding tape" },
      { when: "Ongoing", what: "AI model releases and visa-policy announcements: the two step-change risks" }
    ],
    data: [
      { series: "NCES / IPEDS institutional data", source: "nces.ed.gov (free)", why: "The census of US institutions: enrollment, finance, completion" },
      { series: "Enrollment estimates", source: "National Student Clearinghouse Research Center (free)", why: "The fastest read on US enrollment, term by term" },
      { series: "Federal student aid portfolio", source: "studentaid.gov data center (free)", why: "Loan stock, repayment status, forgiveness flows: primary source" },
      { series: "Open Doors international exchange data", source: "opendoorsdata.org (free)", why: "The international-flow tape: 1,177,766 US students in 2024/25" },
      { series: "Global enrollment and spend", source: "UNESCO UIS (free)", why: "The only global baseline for the $7T denominator" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Countercyclical core: adults return to school, online operators and reskilling benefit; state budgets lag into cuts 1-2 years later, hitting public systems." },
      { regime: "Rates rising", behavior: "Student-loan burden bites politics, muni-funded campuses defer capex, PE stops rolling up the vendor stack; toll roads barely notice." },
      { regime: "AI capability jump", behavior: "Re-underwrite everything: assume free AI does the current product's job, then ask what survives (distribution, credentials, regulated workflows). The Chegg template, not the Duolingo one, is the base case." },
      { regime: "Immigration tightening", behavior: "Mark down international-mix names first (IDP class, UK/AU universities); watch redirection to alternative hosts rather than demand destruction." }
    ]
  },

  players: [
    { name: "Pearson", role: "Assessment & courseware toll road", country: "GB", real: true, note: "Textbook giant rebuilt around testing, qualifications, and digital subscriptions" },
    { name: "Duolingo", role: "Consumer AI-native winner", country: "US", real: true, note: "Gamified language learning: the sector's proof that AI can be product, not just threat" },
    { name: "Coursera", role: "Platform & credentials marketplace", country: "US", real: true, note: "MOOC pioneer turned degrees-and-certificates platform straddling consumer and enterprise" },
    { name: "Chegg", role: "The AI cautionary tale", country: "US", real: true, note: "Fell 38% in a day (May 2023) on ChatGPT; $618M revenue, $(873)M net loss in 2024" },
    { name: "Byju's", role: "The bubble's monument", country: "IN", real: true, note: "$22B valuation (March 2022) to zero; US arm in Chapter 11 by February 2024" },
    { name: "New Oriental", role: "Crackdown survivor", country: "CN", real: true, note: "Rebuilt after China's 2021 tutoring ban erased its core business overnight" },
    { name: "IDP Education", role: "International-flow infrastructure", country: "AU", real: true, note: "Student placement plus a stake in IELTS testing: pure play on cross-border demand" },
    { name: "Stride", role: "US online K-12 operator", country: "US", real: true, note: "Virtual and career schooling at scale: the school-choice trade in listed form" }
  ],

  geography: [
    { country: "US", role: "Largest spender and importer", note: "Record 1,177,766 international students (2024/25); $1.86T loan stock; the demographic cliff's front line" },
    { country: "CN", role: "Largest system, policy wildcard", note: "The 2021 tutoring ban erased ~$100B of market value in a summer: policy risk made flesh" },
    { country: "IN", role: "Largest school-age population", note: "Top sender to the US (363,019 students) and ground zero of the edtech bust (Byju's)" },
    { country: "GB", role: "Export model under strain", note: "Universities financially dependent on international fees while visa politics tighten" },
    { country: "AU", role: "Education as top-tier export", note: "International education rivals commodities in export earnings; caps now ration it" },
    { country: "KR", role: "Shadow-education extreme", note: "Hagwon private tutoring consumes household budgets: the demographic cliff's steepest edge" }
  ],

  cycles: [
    { year: 1944, title: "The GI Bill", kind: "boom", text: "The US pays veterans to enroll, inventing mass higher education and two generations of enrollment growth. Lesson: education demand is policy-made, and policy can make it fast." },
    { year: 2010, title: "For-profit reckoning", kind: "bust", text: "Loan-fueled for-profit enrollment peaks, then gainful-employment rules and recruiting scandals crush it. Lesson: revenue that is 90% federal aid is a regulatory position, not a business." },
    { year: 2021, title: "China's double reduction", kind: "bust", text: "Beijing bans for-profit K-9 tutoring in a summer, vaporizing a ~$100B listed sector. Lesson: where education is politics, the state can delete your industry, not just regulate it." },
    { year: 2021, title: "The COVID edtech peak", kind: "boom", text: "VC tops $20B (HolonIQ), Byju's raises at $22B, 2U pays $800M for edX. Lesson: a forced-adoption spike is a cohort, not a curve: never capitalize lockdown behavior." },
    { year: 2023, title: "The AI shock", kind: "shift", text: "Chegg drops 38% in a day on ChatGPT; by 2024 Byju's is at zero and 2U is in Chapter 11. Lesson: when your product is answers, free answers are an extinction event: moats must be habit, distribution, or credentials." }
  ],

  risks: [
    { name: "Demographic cliff", severity: 4, likelihood: 5, transmission: "Shrinking 18-year-old cohorts from 2025 -> discounting wars for fewer students -> tuition-dependent campuses hit fixed-cost traps -> closures and muni stress." },
    { name: "Policy & funding shock", severity: 4, likelihood: 3, transmission: "Budget austerity or Title IV rule change -> appropriations and aid eligibility cut -> operators lose their dominant revenue line overnight (the 2010 for-profit and 2021 China templates)." },
    { name: "AI disintermediation", severity: 4, likelihood: 4, transmission: "Free AI answers and tutoring improve -> paid homework help and thin-content edtech churn out (Chegg template) -> subscription bases and courseware pricing erode." },
    { name: "Visa and immigration tightening", severity: 3, likelihood: 4, transmission: "Host-country politics cap student visas (Canada ~(35)% permits, Australia caps) -> full-fee international revenue drops -> internationalized universities and recruiters reprice." },
    { name: "Credential value erosion", severity: 3, likelihood: 2, transmission: "Skills-based hiring spreads and the degree premium narrows -> households balk at debt-financed tuition -> enrollment and pricing power fall together, slowly then suddenly." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Education is one of the world's biggest spending categories: roughly $7T a year, over 6% of global GDP, but most of it is governments paying teachers. Investors can only own the edges: textbook and testing companies, private schools and tutoring, online universities, and education software. Those edges just went through a wild boom and bust: money flooded in during COVID, and by 2024 the biggest startup (Byju's, once worth $22B) was worth nothing."] },
    L2: { title: "Intermediate", text: ["The sector splits into 3 business types. Institutions sell enrollment: high sticker prices, heavy discounts (over 50% for new students at US private colleges), costs that are mostly salaries. Toll roads sell what enrollment requires: tests, courseware, software: the best margins in the sector. Edtech sells subscriptions: software economics, but customer acquisition is brutal and free AI now competes with the product, which is how Chegg lost most of its value. Underneath it all sits $1.86T of US student debt funding demand and capping prices."] },
    L3: { title: "Advanced", text: ["Analyze by exposure, not category: demographic beta (US 18-year-olds peak ~2025, East Asia worse), policy beta (Title IV eligibility, appropriations, China's 2021 tutoring ban), visa beta (a $42.9B US export line moved by immigration politics), and AI beta (does free AI do your product's job?). Net tuition per student, not sticker price, is the institutional P&L; retention, not downloads, is the edtech one. The 2021-24 cycle: $20B+ VC peak, then Byju's to zero, 2U bankrupt, Chegg impaired: is the base-rate library for underwriting the sector."] },
    L4: { title: "Expert", text: ["Trade the annual tapes: Clearinghouse enrollment prints, Open Doors international data (record 1,177,766 US students in 2024/25), state budget seasons, and visa-policy announcements from Ottawa, Canberra, and Washington. Live debates: AI as extinction event vs iPhone moment (Chegg vs Duolingo as the two priors), whether US higher ed self-corrects or enters a closure wave, and whether international flows compound through politics or get capped by them. Respect the sector's kill switches: one regulation ended China's tutoring industry; one eligibility rule ended the US for-profit boom."] },
    L5: { title: "Institutional", text: ["Allocator's frame: education offers defensive, countercyclical demand with venture tails on both ends of the outcome distribution. Core the toll roads (assessment, courseware, LMS: pricing power without enrollment risk), own disciplined platforms with proven retention, treat international-flow names as high-ROIC/high-policy-beta satellites, and price all institutional exposure through a credit lens: the equity is in the muni market. The reskilling wave (39% of core skills changing by 2030, per WEF) is the decade's most durable demand line because its buyer is a corporation, not a shrinking birth cohort or a strained treasury."] }
  },

  quiz: [
    { q: "Global education spending is roughly:", choices: ["$500B, mostly private", "$7T, over 6% of global GDP, mostly government-funded", "$50T", "$1T, mostly edtech"], answer: 1, explain: "HolonIQ projected $7.3T by 2025: one of Earth's largest spending pools, but overwhelmingly public and non-investable; edtech is under $500B of it." },
    { q: "Byju's is the sector's cautionary tale because it:", choices: ["Never raised money", "Went from a $22B valuation (March 2022) to zero, with US Chapter 11 by February 2024", "Was acquired by Google", "Only operated in the US"], answer: 1, explain: "The COVID edtech mania's flagship: forced-adoption growth capitalized as permanent, ending in insolvency courts on two continents." },
    { q: "Chegg's May 2023 one-day 38% drop was triggered by:", choices: ["A data breach", "Admitting ChatGPT was taking its homework-help customers", "A textbook recall", "New tuition rules"], answer: 1, explain: "The first public AI casualty: when your product is answers, free answers are an extinction event. It posted an $(873)M net loss on $618M revenue in 2024." },
    { q: "US student loan debt stands at about:", choices: ["$186B", "$1.86T across 42.6M federal borrowers, 91% federal", "$18.6T", "$400B, mostly private"], answer: 1, explain: "Education Data Initiative, Q1 2026: averaging $40,467 per federal borrower: the sector's shadow balance sheet, funding demand and capping prices." },
    { q: "US private nonprofit colleges typically discount first-year tuition by:", choices: ["Under 10%", "More than 50% on average (NACUBO surveys)", "Exactly 25%", "Nothing: sticker is the price"], answer: 1, explain: "Sticker prices are marketing; net tuition is the P&L. A discount rate climbing yearly to hold enrollment flat is the death-spiral signature." },
    { q: "International students matter to US universities because they:", choices: ["Pay less than locals", "Numbered a record 1,177,766 in 2024/25, contributing $42.9B: full-fee payers who subsidize domestic seats", "Are ineligible for degrees", "Only study online"], answer: 1, explain: "Open Doors and NAFSA data: an export industry whose growth rate is set by visa politics: Canada cut permits ~35% in one announcement." },
    { q: "China's 2021 'double reduction' policy demonstrated that:", choices: ["Tutoring is recession-proof", "Where education is politics, the state can delete an industry: ~$100B of for-profit tutoring value vanished in a summer", "Regulation always fails", "Edtech is immune to policy"], answer: 1, explain: "New Oriental and peers lost their core business overnight: the sector's starkest illustration of policy beta." },
    { q: "The most durable demand line in education this decade is likely:", choices: ["Printed textbooks", "Employer-funded reskilling: WEF expects 39% of core skills to change by 2030", "For-profit law schools", "DVD courses"], answer: 1, explain: "The buyer is a corporate L&D budget, not a shrinking birth cohort or a strained treasury: the one growth line insulated from the demographic cliff." }
  ],

  sources: [
    { name: "HolonIQ global education market outlook", url: "https://www.holoniq.com/edtech-in-10-charts", feeds: "market size, edtech spend, VC funding" },
    { name: "Education Data Initiative student loan statistics", url: "https://educationdata.org/student-loan-debt-statistics", feeds: "student debt stock, borrower counts" },
    { name: "IIE Open Doors international student data", url: "https://opendoorsdata.org/annual-release/international-students/", feeds: "international flows" },
    { name: "NAFSA international student economic value tool", url: "https://www.nafsa.org/policy-and-advocacy/policy-resources/nafsa-international-student-economic-value-tool-v2", feeds: "export value, jobs supported" }
  ]
};
