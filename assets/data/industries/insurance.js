/* Industry Atlas - INSURANCE (full-depth module, research-backed)
 * Key figures sourced 2024-2025: Conning MGA study, Swiss Re sigma,
 * S&P Global / Insurance Insider E&S data, Aon Securities ILS report,
 * TBRC / Precedence TPA market research. See `sources`. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["insurance"] = {
  meta: {
    id: "insurance", name: "Insurance", sector: "finance", status: "full",
    tagline: "Selling promises against disaster, priced by actuaries, distributed through the longest intermediary chain in finance.",
    marketSize: { value: 7.2, unit: "$T", asOf: 2024, note: "global premiums, all lines (life ~$3T, P&C ~$2.4T, health the rest)" },
    cagr: { value: 5, range: [3, 6], horizon: "2024-2030" },
    maturity: "mature", cyclicality: 3, capitalIntensity: 4, regulation: 5, disruption: 3
  },

  newsQuery: '(insurance OR reinsurance OR "catastrophe bond" OR underwriting OR "combined ratio")',

  overview: {
    definition: "Insurance transfers risk from people and companies who cannot afford a loss to institutions paid to absorb it. Policyholders pay premiums now; insurers promise money later, invest the pool in between, and profit when premiums plus investment income exceed claims plus costs.",
    howItWorks: [
      "The core machine is the risk pool. Millions of premiums fund the few large losses; the law of large numbers makes the unpredictable individually predictable in aggregate. Actuaries price that predictability, underwriters select which risks enter the pool, and claims teams pay what was promised. The scoreboard is the combined ratio: claims plus expenses as a % of premium, where under 100% means the underwriting itself is profitable.",
      "The second engine is float. Premiums arrive years before claims are paid, so insurers permanently hold a huge investable pool of other people's money. A carrier that underwrites at 100% combined effectively borrows at 0%; below 100%, it is being PAID to invest. This is the insight Berkshire Hathaway was built on, and why rising interest rates in 2022-2024 transformed the industry's earnings power.",
      "What most outsiders miss is the distribution machine between the customer and the risk-taker. A commercial policy might pass through a retail broker (who advises the buyer), a wholesale broker (who accesses specialty markets), and an MGA (a managing general agent with delegated authority to underwrite on a carrier's behalf) before reaching the carrier, whose risk is then partly passed to reinsurers, who pass their peaks to retrocessionaires and catastrophe-bond investors. Meanwhile TPAs (third-party administrators) handle the claims, and cat modelers price the hurricanes. Each layer clips its share of the premium, and each is an industry in its own right.",
      "That chain is where the industry's economics have been migrating. Underwriting capital earns regulated, cyclical returns; distribution and services earn fee income with almost no capital at risk. That is why private equity has spent a decade rolling up brokers, MGAs, and TPAs, and why the fastest-growing corners of insurance (E&S lines, MGA-originated specialty, fronting carriers) all sit in the flexible part of the chain rather than the balance-sheet part.",
      "Pricing moves in hard and soft market cycles. Big losses or capital shortages harden the market (rates jump, terms tighten); good years attract capital and soften it. The 2023 reinsurance reset, after years of catastrophe losses, produced the hardest property market in a generation; 2024-2025 brought the first softening as capital returned. Reading where you are in that cycle is half of insurance investing."
    ],
    history: [
      { era: "1680s-1900s", title: "Lloyd's and the classical era", text: "Marine insurance formalizes at Lloyd's coffee house; mutual and stock companies spread fire and life cover through the industrial revolution." },
      { era: "1906-1945", title: "Catastrophe teaches capital", text: "The San Francisco earthquake and two world wars establish the pattern: catastrophes destroy weak carriers, reprice risk, and birth regulation (state insurance departments, reserve requirements)." },
      { era: "1950s-1980s", title: "The great expansion", text: "Auto, homeowners, and employer health cover become universal in rich economies; life insurance becomes the middle-class savings vehicle; reinsurance globalizes through Munich, Swiss, and London." },
      { era: "1992-2001", title: "Andrew, Bermuda, and the cat model", text: "Hurricane Andrew ($15B+ insured, 11 insolvencies) proves gut-feel pricing dead. Catastrophe modeling firms rise; a new Bermuda reinsurance market forms in months, establishing the template: after every mega-loss, fresh capital arrives to write the hardened rates. 9/11 repeats it at $40B+ scale." },
      { era: "2005-2012", title: "Katrina and securitized risk", text: "Katrina ($65B+ insured) drives cat bond issuance mainstream: hurricanes become an asset class pension funds can buy. AIG's 2008 collapse (a $182B rescue caused by its derivatives unit, not its insurance operations) hardens the lesson that the regulated core was sound while the unregulated edge nearly sank the system." },
      { era: "2017-2023", title: "The loss decade and the great repricing", text: "Harvey-Irma-Maria, wildfires, derechos, and COVID business-interruption fights; social inflation drives US casualty verdicts up double digits yearly. Reinsurers finally reset terms in January 2023: property rates up 30%+ with higher attachment points, the hardest market in a generation." },
      { era: "2020s", title: "The MGA era", text: "Delegated authority becomes the industry's growth engine: US MGA premium hits $114B in 2024 (up ~90% in five years), E&S passes $130B, fronting carriers and ILS blur who actually holds the risk. Distribution consolidates under PE roll-ups; AI enters underwriting and claims." }
    ],
    trends: [
      { title: "The MGA and E&S boom", direction: "up", text: "US MGA premium grew 16% in 2024 to $114B while E&S (surplus lines) reached 9% of all P&C premium, double its 2017 share. Risk is migrating from standard markets to flexible, specialist, delegated-authority channels." },
      { title: "Climate repricing", direction: "shift", text: "Insured cat losses now exceed $100B in a normal year. Property insurance is being repriced, re-termed, and in wildfire and flood zones withdrawn entirely, making insurance availability a housing and mortgage issue." },
      { title: "Alternative capital goes mainstream", direction: "up", text: "ILS capital hit a record ~$108B with $49.5B of cat bonds outstanding; pension funds now directly hold hurricane risk, capping the reinsurance cycle's hard-market peaks." },
      { title: "Social inflation", direction: "up", text: "US jury verdicts and litigation funding push casualty claim severity up ~10%+ annually, forcing reserve strengthening across the industry's long-tail lines." },
      { title: "Fee-ification of the value chain", direction: "shift", text: "PE-backed consolidation of brokers, MGAs, and TPAs continues; the profit pool shifts from underwriting capital toward capital-light distribution and services." }
    ],
    outlook: "Structurally healthy, cyclically softening. Higher rates rebuilt investment income and life insurer solvency; the 2023 pricing reset restored underwriting margins (2024 US P&C combined ratio ~95%, E&S ~88%). The open questions: whether climate losses outrun repricing, whether social inflation eats casualty reserves, and how much of the industry's profit migrates permanently to the MGA-broker-TPA layer that never holds the risk."
  },

  structure: {
    suppliers: [
      { name: "Reinsurers (Munich Re, Swiss Re, Hannover Re, Berkshire)", note: "Wholesale capital: absorb carriers' peak risks; ~$670B of global reinsurance capital" },
      { name: "Retrocession & ILS investors", note: "Reinsurers' reinsurers: cat bonds ($49.5B outstanding), ILWs ($5B to $7B), collateralized retro" },
      { name: "Cat modelers & data (Verisk, Moody's RMS, CoreLogic)", note: "The physics-and-statistics engines every property price runs through" },
      { name: "Actuarial & audit firms", note: "Reserve opinions, pricing models, Solvency II / RBC compliance" },
      { name: "TPAs & claims networks (Sedgwick, Crawford, Gallagher Bassett)", note: "Outsourced claims handling; a $340B to $430B global services market" }
    ],
    producers: [
      { name: "P&C carriers (Chubb, Progressive, Zurich, AXA, State Farm)", note: "Underwrite property and liability; ~$2.4T of global premium" },
      { name: "Life & annuity carriers (MetLife, Prudential, Nippon Life)", note: "Long-duration promises; giant bond portfolios; ~$3T of premium" },
      { name: "Health insurers / payers", note: "See the Health Insurance industry page; regulated MLR corridors" },
      { name: "Specialty & E&S carriers (Lloyd's syndicates, Markel, Kinsale)", note: "Freedom of rate and form for hard risks; $130B+ US premium, 9% of P&C and doubling since 2017" },
      { name: "Fronting carriers (Accelerant, State National, Sutton, Transverse)", note: "Rent their licenses and paper to MGA programs, ceding most risk onward; $18B+ of MGA premium, up 26% in 2024" },
      { name: "Mutuals & captives", note: "Policyholder-owned carriers and corporate self-insurance vehicles; the make-vs-buy end of the market" }
    ],
    distributors: [
      { name: "Retail agents & brokers (captive and independent)", note: "The customer-facing layer; commissions roughly 10% to 20% on P&C, 3% to 7% on group health" },
      { name: "Global retail brokers (Marsh McLennan $24.5B revenue, Aon $13.4B, Gallagher, WTW)", note: "Corporate risk advice plus placement; the industry's most valuable franchises" },
      { name: "Wholesale brokers (Amwins, Ryan Specialty, CRC)", note: "Access to E&S and specialty markets retail agents cannot reach directly" },
      { name: "MGAs / MGUs (850+ in the US)", note: "Delegated underwriting authority: price, bind, and manage programs on carriers' behalf; $114B premium in 2024, growing 16%" },
      { name: "Aggregators, embedded & direct channels", note: "Comparison sites, OEM-embedded cover, and direct-to-consumer (Progressive, GEICO model)" }
    ],
    customers: [
      { name: "Households", note: "Auto, home, life, health: the volume base" },
      { name: "SMEs and corporates", note: "Property, casualty, D&O, cyber; buy through brokers" },
      { name: "Public entities & lenders", note: "Municipal programs; mortgage and trade credit insurance embedded in finance" }
    ],
    regulators: [
      { name: "US state insurance departments + NAIC", note: "50-state licensing, rate and form approval (admitted market), RBC capital standards" },
      { name: "EIOPA / Solvency II (EU), PRA (UK)", note: "Market-consistent capital regimes for European carriers" },
      { name: "Rating agencies (AM Best, S&P)", note: "Quasi-regulators: below A- ratings, commercial distribution dries up" }
    ],
    capital: [
      { name: "Public equity & sub-debt markets", note: "Carriers' permanent capital" },
      { name: "Policyholder float", note: "The premium pool held between collection and claims: the industry's defining internal capital" },
      { name: "ILS / pension capital", note: "Securitized risk transfer: $108B and growing" },
      { name: "Private equity", note: "The dominant buyer of brokers, MGAs, and TPAs this decade" }
    ]
  },

  valueChain: {
    intro: "Follow $100 of commercial premium from the insured to the capital markets. The chain is long by design: each layer specializes in one kind of risk decision, and each clips its share on the way through. This is where the TPAs, MGAs, and wholesalers live.",
    stages: [
      { id: "risk-owners", name: "Risk owners (the insured)", what: "Households and businesses converting uncertain ruin into a fixed premium", players: "Everyone with assets or liabilities", valueCapture: 1,
        economics: { capitalIntensity: 1, concentration: 1 },
        linksTo: ["real-estate", "automotive", "construction"],
        deeper: "Demand is near-universal and often compulsory (auto liability, mortgage-required homeowners, workers' comp), which is why premium volume tracks GDP through every cycle. The buyer's real product is balance-sheet protection and, increasingly, help understanding risk itself." },
      { id: "retail", name: "Retail agents & brokers", what: "Advise the buyer, place the risk, own the relationship", players: "Marsh, Aon, Gallagher, WTW + thousands of independents", valueCapture: 4,
        economics: { grossMargin: [25, 35], capitalIntensity: 1, concentration: 3 },
        linksTo: ["asset-management"],
        deeper: "Capital-light, recurring (90%+ retention), and paid 10% to 20% of P&C premium in commissions and fees. Marsh McLennan alone earned $24.5B of revenue in 2024. This is why brokers trade at premium multiples and why PE has rolled up hundreds of independents: it is the toll booth that never holds the risk." },
      { id: "wholesale", name: "Wholesale brokers", what: "Specialty market access: connect retail agents to E&S carriers and MGA programs", players: "Amwins, Ryan Specialty, CRC Group", valueCapture: 3,
        economics: { grossMargin: [25, 35], capitalIntensity: 1, concentration: 4 },
        linksTo: ["capital-markets"],
        deeper: "When a risk is too odd, new, or hazardous for standard markets (cyber, cannabis, coastal property), the retail agent hands it to a wholesaler with relationships across the E&S market. Wholesale-distributed premium has grown double digits for 7 straight years alongside E&S itself; the top wholesalers have become multi-billion-revenue firms." },
      { id: "mga", name: "MGAs & MGUs (delegated authority)", what: "Underwrite, price, and bind policies ON BEHALF of carriers, without holding the risk", players: "850+ US MGAs; program specialists in every niche", valueCapture: 4,
        economics: { grossMargin: [20, 35], capitalIntensity: 1, concentration: 2 },
        linksTo: ["saas", "private-equity"],
        deeper: "The chain's fastest-growing link: $114B of US premium in 2024, up 16% in a year and ~90% in five. An MGA is effectively an outsourced underwriting department: deep niche expertise (equine, cyber, trucking) rented to carriers who supply the balance sheet. Nearly half of MGA premium now flows through non-affiliated MGAs, and insurtechs largely became MGAs once they discovered how expensive carrying risk is." },
      { id: "fronting", name: "Fronting carriers", what: "Licensed insurers who issue paper for MGA programs and cede most of the risk onward", players: "Accelerant, State National, Sutton, Transverse", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 3, concentration: 4 },
        linksTo: ["banking"],
        deeper: "The regulatory adapter of the MGA era: programs need admitted or E&S paper, fronting carriers provide it for a ~5% fee and reinsure away most of the risk. Fronted MGA premium passed $18B in 2024 (up 26%), with 4 firms writing 43% of it. The model's stress point is counterparty risk: if the reinsurer behind the front fails, the fronting carrier holds the bag." },
      { id: "carriers", name: "Carriers (the risk balance sheet)", what: "Underwrite, hold reserves, invest the float, pay the claims", players: "Chubb, Zurich, Progressive, Lloyd's syndicates, Kinsale", valueCapture: 4,
        economics: { grossMargin: [0, 8], capitalIntensity: 4, concentration: 2 },
        linksTo: ["capital-markets", "banking", "real-estate"],
        deeper: "Where the promise actually lives. Economics = underwriting margin (100% minus combined ratio; the 2024 US P&C average combined was ~95%, E&S a stronger ~88%) plus investment income on float. Admitted carriers file rates with states; E&S carriers write hard risks with freedom of rate and form, which is why E&S has doubled its market share since 2017." },
      { id: "reinsurance", name: "Reinsurers", what: "Insure the insurers: absorb catastrophe peaks and volatility, rent out capital", players: "Munich Re, Swiss Re, Hannover Re, Berkshire, Lloyd's", valueCapture: 4,
        economics: { grossMargin: [0, 12], capitalIntensity: 5, concentration: 4 },
        linksTo: ["capital-markets", "banking"],
        deeper: "~$670B of capital standing behind the world's carriers via treaty (whole portfolios) and facultative (single risks) cover. Reinsurance sets the industry's cycle clock: the January 2023 renewal reset property rates 30%+ upward with higher attachment points, the hardest market in a generation, and 2024-25 renewals began softening as capital returned." },
      { id: "retro-ils", name: "Retrocession & ILS", what: "Reinsurers' own risk transfer: cat bonds, sidecars, ILWs, collateralized retro", players: "Pension funds, ILS managers (Fermat, Nephila), Bermuda vehicles", valueCapture: 3,
        economics: { grossMargin: [0, 15], capitalIntensity: 5, concentration: 3 },
        linksTo: ["asset-management", "hedge-funds", "capital-markets"],
        deeper: "The chain's capital-markets endpoint: hurricane risk sliced into securities. Cat bond issuance hit a record $17.7B in 2024 ($49.5B outstanding, +10% YoY) and total alternative capital ~$108B. For pension funds the appeal is returns uncorrelated with stocks; for the industry, ILS caps how hard the hard market can get." },
      { id: "services", name: "TPAs, claims & analytics", what: "The service layer: claims administration, adjusting, actuarial, cat modeling", players: "Sedgwick, Crawford, Gallagher Bassett; Verisk, Moody's RMS", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas", "data-infrastructure", "ai"],
        deeper: "TPAs run claims for carriers and self-insured corporates; the global TPA market is estimated at $340B to $430B (2024), with claims administration over half of it. Add loss adjusters, forensic accountants, actuarial consultants, and the cat-model duopoly whose hurricane assumptions quietly set coastal property prices, and you have insurance's equivalent of the semiconductor equipment layer: small versus premiums, decisive for outcomes." }
    ]
  },

  financials: {
    businessModel: [
      "A carrier's P&L in one line: earn premium, pay losses and expenses (the combined ratio), and invest the float in between. At a 95% combined ratio a carrier keeps $5 of every $100 of premium as underwriting profit AND earns yield on roughly $150 of float per $100 of annual premium (P&C average; life float is far larger and longer). Rising rates flipped the industry's economics: the same book that earned 1% on float in 2020 earns 4%+ now.",
      "The distribution chain stacks fees on top: in specialty channels a dollar of premium can carry a retail commission (10% to 15%), wholesale commission (5% to 10%), MGA fee (10% to 20% including underwriting and sometimes claims), and a fronting fee (~5%) before any risk capital earns anything. That 30%+ friction is tolerated because each layer demonstrably improves risk selection or access; when it stops improving them, carriers pull authority back in-house, which is the MGA model's permanent discipline.",
      "Capital is the industry's inventory. Regulators (RBC in the US, Solvency II in Europe) and rating agencies dictate how much capital each dollar of premium and each asset class consumes; growth means raising or retaining capital, and mispriced growth destroys it with a lag measured in years (long-tail casualty claims arrive a decade late). This is why reserve development, not headline growth, is the professional's first read on carrier quality."
    ],
    fingerprint: { grossMargin: 30, recurringRevenue: 85, capitalIntensity: 65, pricingPower: 55, cyclicality: 60, operatingLeverage: 40 },
    lines: [
      { label: "Gross written premium (GWP)", note: "Top line before reinsurance cessions; growth = rate x exposure, know which" },
      { label: "Net earned premium", note: "What is left after ceding to reinsurers, earned over the policy period" },
      { label: "Loss ratio", note: "Claims / premium; watch current-year vs prior-year (reserve development) split" },
      { label: "Expense ratio", note: "Acquisition (commissions!) + admin / premium; the distribution chain lives here" },
      { label: "Combined ratio", note: "Loss + expense; < 100% = paid to hold the float. 2024 US P&C ~95%, E&S ~88%" },
      { label: "Investment income", note: "Yield x float; the second engine, transformed by post-2022 rates" },
      { label: "Reserve development", note: "Prior-year re-estimates; persistent adverse development is the classic slow-motion disaster" }
    ],
    flow: {
      label: "Where $100 of specialty premium goes",
      sub: "The MGA-channel fee stack, drawn to scale. Each band is a real participant clipping the premium dollar.",
      height: 320,
      left: [{ id: "premium", label: "$100 premium", note: "specialty / MGA channel" }],
      right: [
        { id: "retail", label: "Retail broker · $12", note: "commission + fees" },
        { id: "wholesale", label: "Wholesale broker · $7", note: "E&S market access" },
        { id: "mga", label: "MGA / MGU · $15", note: "delegated underwriting fee" },
        { id: "front", label: "Fronting carrier · $5", note: "licensed paper" },
        { id: "risk", label: "Losses + reinsurance · $53", note: "the actual cost of risk" },
        { id: "margin", label: "Underwriting margin · $8", note: "for the net risk holder" }
      ],
      flows: [
        { from: "premium", to: "retail", value: 12 },
        { from: "premium", to: "wholesale", value: 7 },
        { from: "premium", to: "mga", value: 15 },
        { from: "premium", to: "front", value: 5 },
        { from: "premium", to: "risk", value: 53 },
        { from: "premium", to: "margin", value: 8 }
      ]
    },
    unitEconomics: {
      unit: "per $100 of specialty commercial premium (MGA channel, illustrative)",
      items: [
        { label: "Retail broker commission & fees", value: "$10 to $15", note: "the client relationship" },
        { label: "Wholesale broker commission", value: "$5 to $10", note: "specialty market access" },
        { label: "MGA fee (underwriting, program admin)", value: "$10 to $20", note: "delegated authority + niche expertise" },
        { label: "Fronting fee (where used)", value: "~$5", note: "licensed paper, risk ceded onward" },
        { label: "Expected losses + reinsurance cost", value: "$55 to $65", note: "what the risk capital is actually paid for" },
        { label: "Target underwriting margin", value: "$5 to $10", note: "for whoever holds the net risk" }
      ]
    }
  },

  kpiRefs: ["ins-combined", "ins-loss-ratio", "ins-solvency", "ins-float", "hc-mlr"],
  kpiLocal: [
    {
      id: "ins-reserve-dev", name: "Reserve Development", industries: ["insurance"],
      definition: "The re-estimate of prior years' claim reserves: favorable (releases) or adverse (strengthening).",
      formula: "Development = Current estimate of prior-year losses − original estimate",
      interpretation: "The truth serum of insurance accounting: today's combined ratio is an estimate, and development is where the estimate meets reality years later.",
      healthy: "Consistent small favorable development", warning: "Repeated adverse development, especially in long-tail casualty",
      benchmark: { median: "US P&C ran modestly favorable through the 2010s; social inflation has turned many casualty lines adverse (asOf 2024)" },
      investorLens: "Serial adverse developers deserve permanent valuation discounts; reserving culture is management quality made visible.",
      operatorLens: "Feeds pricing feedback loops; under-reserving flatters today and poisons tomorrow's rate decisions.",
      mistakes: ["Celebrating a low combined ratio propped up by reserve releases that reverse next cycle."],
      trend: "Social inflation is driving adverse development across US casualty vintages 2016-2019."
    }
  ],

  health: {
    intro: "Carrier health is solvency and reserving honesty first, underwriting discipline second, everything else third. For distribution businesses (brokers, MGAs), substitute retention and organic growth for reserves.",
    pillars: [
      { name: "Reserve adequacy", weight: 25, metrics: "Prior-year development history, IBNR ratios, actuarial opinions, casualty vintage exposure", healthy: "Multi-year favorable development", warning: "2+ years of adverse development in the same lines" },
      { name: "Underwriting discipline", weight: 25, metrics: "Combined ratio through the cycle, growth vs market in soft years", healthy: "Sub-100% across the cycle; shrinks when pricing is bad", warning: "Growing fastest exactly when rates are softest" },
      { name: "Capital & solvency", weight: 20, metrics: "RBC / Solvency II ratio, quality of capital, cat PML vs surplus", healthy: "Solvency > 180%, 1-in-250 cat PML < 15% of equity", warning: "Buffer < 130% or PML concentration" },
      { name: "Investment portfolio", weight: 10, metrics: "Credit quality, duration match, illiquid alternatives share", healthy: "Liability-matched, IG-dominated", warning: "Yield-chasing into illiquids > 20% (watch PE-owned life insurers)" },
      { name: "Franchise & distribution", weight: 10, metrics: "Retention, broker relationships, niche leadership", healthy: "90%+ retention with rate gains", warning: "Buying growth with commission overrides" },
      { name: "Cat & accumulation management", weight: 10, metrics: "Reinsurance program adequacy, modeled vs actual losses, cyber accumulation", healthy: "Losses within modeled ranges; conservative attachment points", warning: "Serial 'one-in-100' surprises" }
    ],
    scoringNote: "Insurance kills slowly: reserves and capital ratios move quarters or years after the mistakes. Weight the forward-honesty pillars (reserving, discipline) and treat clean recent earnings as necessary, never sufficient."
  },

  valuation: {
    intro: "Three different animals share the sector: risk-bearing carriers (valued on book and returns), capital-light distribution (valued like software-adjacent services), and life insurers (valued on embedded value and rate sensitivity). Using one lens for all three is the sector's classic analytical error.",
    methods: [
      { name: "P/B vs ROE (P&C carriers)", use: "The core carrier model: sustained ROE above ~10% cost of equity justifies book premiums", avoid: "Life insurers under old accounting (book value distorted by rate marks)", strengths: "Grounded in the balance sheet the business actually runs on", weaknesses: "Reserve quality can silently misstate the B", range: { low: 0.9, high: 2.2, asOf: 2024, note: "best specialty franchises (Kinsale-class) trade far above; serial developers below 1x" } },
      { name: "P/E on operating earnings", use: "Screening carriers with stable books; dividend context", avoid: "Cat-exposed names after a quiet year (earnings at cyclical peak)", strengths: "Simple; captures the new investment-income engine", weaknesses: "One hurricane rewrites the E", range: { low: 10, high: 16, asOf: 2024, note: "P&C leaders re-rated upward with rates and pricing" } },
      { name: "EV / EBITDA (brokers, MGAs, TPAs)", use: "The distribution and services layer: recurring, capital-light fee streams", avoid: "Anything holding underwriting risk (EBITDA ignores it entirely)", strengths: "Matches how PE actually prices the roll-ups", weaknesses: "Roll-up EBITDA is heavily adjusted; organic growth is the real tell", range: { low: 10, high: 17, asOf: 2024, note: "quality wholesale and MGA platforms cleared the top of the band in recent deals" } },
      { name: "Embedded value / CSM (life)", use: "Life insurers: present value of in-force policies plus net worth", avoid: "P&C (short-duration books make EV meaningless)", strengths: "The only honest lens on decades-long promises", weaknesses: "Assumption-heavy (lapse, mortality, rates); comparability improved only with IFRS 17", range: { low: 0, high: 0, asOf: 2024, note: "typically 0.5x to 1.2x EV; discounts persist since 2008" } },
      { name: "Float-based (Buffett lens)", use: "Long-horizon view of disciplined underwriters: value = investments per share + underwriting franchise", avoid: "Serial over-100% combined operators (their float costs more than debt)", strengths: "Cuts to the economic engine: cheap, durable, growing float", weaknesses: "Requires judging underwriting culture, not just numbers", range: { low: 0, high: 0, asOf: 2024, note: "a mental model more than a multiple; it built Berkshire" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a broker/MGA platform the way the roll-ups do: EBITDA times a fee-business multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($B)", min: 0.1, max: 10, step: 0.1, value: 1.5, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 20, step: 0.5, value: 13, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 15, step: 0.5, value: 4, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk runs insurance as three uncorrelated books wearing one sector label: underwriting cyclicals (carriers/reinsurers, traded on the pricing cycle), distribution compounders (brokers/MGA platforms, owned like software), and ILS (pure cat premium, the portfolio's least-correlated return stream). Higher rates re-armed the whole sector's float income.",
    debates: [
      { topic: "Is climate outrunning the industry's repricing rights?", bull: "Insurance reprices annually: the 2023 reset proved rates and terms can move 30%+ in one renewal. Cat losses are a revenue opportunity in disguise; specialty and E&S absorb what standard markets flee, at better margins.", bear: "Availability retreat (Florida, California) shows the limit: when actuarially fair prices are politically unpayable, states suppress rates, residual markets balloon, and the tail risk quietly re-socializes onto the industry anyway." },
      { topic: "Social inflation: contained or compounding?", bull: "Casualty rates are re-accelerating, reserves for 2016-19 vintages are largely trued, and disciplined underwriters priced litigation trends years ago.", bear: "Nuclear verdicts and litigation funding are growing 10%+ annually against reserves set in a calmer era; adverse development has a habit of arriving in clusters, and the soft-market vintages now aging are the exposed ones." },
      { topic: "Brokers at software multiples: deserved or crowded?", bull: "90%+ retention, zero balance-sheet risk, pricing that rises with premiums: the best business quality in financials deserves its 25x.", bear: "Organic growth is GDP-plus at best, the roll-up math needs ever-larger deals at ever-higher multiples, and fee transparency regulation is the tail nobody prices." }
    ],
    cycle: {
      where: "Softening from the hardest market in a generation: property cat rates peaked at the January 2023-24 renewals and are easing; casualty is re-hardening on social inflation; float income is the earnings engine either way.",
      drivers: "Catastrophe losses (the capital destroyer), reserve adequacy cycles, interest rates (float yield), and capacity flows: capital enters after good years and softens the market on schedule.",
      leads: [
        "January 1 reinsurance renewal pricing (Guy Carpenter/Howden reports, free summaries)",
        "Cat bond spreads vs expected loss on Artemis (free): the marginal price of hurricane risk",
        "Quarterly reserve development disclosures across the casualty cohort",
        "Florida/California residual market policy counts: the availability-crisis thermometer",
        "P&C rate surveys (CIAB quarterly, free): the pricing cycle by line"
      ]
    },
    exposure: [
      { vehicle: "Specialty & E&S carriers", note: "The structural share-gainers; underwriting quality compounds here" },
      { vehicle: "Brokers (MMC, AON, AJG class)", note: "The fee compounders; own through cycles, watch the multiple you pay" },
      { vehicle: "Reinsurers (Munich/Swiss/Hannover, Bermuda)", note: "The hard-market trade: returns cluster in the 2 years after resets" },
      { vehicle: "Cat bonds / ILS funds", note: "Equity-like yields uncorrelated with markets; the drawdown is a hurricane, not a recession" },
      { vehicle: "Life consolidators & annuity writers", note: "The rates trade in insurance clothing; watch PE-owned illiquid asset books" }
    ],
    catalysts: [
      { when: "January 1 (and mid-year Jun/Jul)", what: "Reinsurance renewals set the cycle's price; treaty outcomes leak through broker reports within days" },
      { when: "June-November", what: "Hurricane season: the sector's live P&L; a quiet season IS a positive catalyst" },
      { when: "September (Monte Carlo Rendez-Vous)", what: "The reinsurance industry pre-negotiates January in public" },
      { when: "Q4 earnings", what: "Annual reserve reviews: where social inflation confessions happen" }
    ],
    data: [
      { series: "Artemis cat bond & ILS dashboards", source: "artemis.bm (free)", why: "Live pricing of catastrophe risk: the sector's cleanest market signal" },
      { series: "CIAB / MarketScout rate surveys", source: "free quarterly summaries", why: "The pricing cycle by line of business" },
      { series: "NAIC statutory filings", source: "naic.org (free)", why: "Reserve development and RBC, from the source" },
      { series: "NOAA seasonal hurricane outlook", source: "noaa.gov (free)", why: "The season's base rate, priced into every property book" }
    ],
    playbook: [
      { regime: "Rates rising", behavior: "Structurally positive: float reprices upward, life insurers' solvency rebuilds. The rare financial sector that likes hikes; watch bond marks (AOCI) as the offset." },
      { regime: "Recession", behavior: "Premiums track exposure (GDP) with a lag; brokers hold up best; workers' comp and credit lines feel it first. Historically a relative defensive." },
      { regime: "Inflation", behavior: "The enemy: claims severity (repair costs, medical, verdicts) outruns priced assumptions; carriers with short-tail books and annual repricing defend best." },
      { regime: "Risk-off", behavior: "Brokers behave like staples; carriers with cat concentration gap on event headlines; ILS marks only move when the wind actually blows." }
    ]
  },

  players: [
    { name: "Berkshire Hathaway", role: "The float machine", country: "US", real: true, note: "GEICO + National Indemnity + the reinsurance book: float as an investment engine, the industry's defining case study" },
    { name: "Marsh McLennan / Aon / Gallagher / WTW", role: "The big 4 brokers", country: "US", real: true, note: "$60B+ of combined revenue; the relationship layer of world commerce" },
    { name: "Munich Re / Swiss Re / Hannover Re", role: "Reinsurance triumvirate", country: "DE", real: true, note: "The capital behind the carriers; their January renewals set the global price of catastrophe" },
    { name: "Chubb / Zurich / AXA / Allianz", role: "Global commercial carriers", country: "CH", real: true, note: "Multi-line balance sheets spanning 50+ countries" },
    { name: "Progressive / State Farm / GEICO", role: "US personal lines giants", country: "US", real: true, note: "Direct and captive-agent models; Progressive's telematics-led underwriting is the sector's operational benchmark" },
    { name: "Lloyd's of London", role: "The specialty marketplace", country: "UK", real: true, note: "300+ years old: syndicates, brokers, and capital meeting in one market for the world's oddest risks" },
    { name: "Amwins / Ryan Specialty", role: "Wholesale leaders", country: "US", real: true, note: "The E&S access layer, grown into multi-billion-revenue firms" },
    { name: "Sedgwick / Crawford / Gallagher Bassett", role: "TPA leaders", country: "US", real: true, note: "Claims handling at industrial scale for carriers and self-insureds" },
    { name: "Accelerant / State National", role: "Fronting pioneers", country: "US", real: true, note: "The licensed-paper layer of the MGA boom; 4 firms front 43% of the market" },
    { name: "Verisk / Moody's RMS", role: "Cat model duopoly", country: "US", real: true, note: "Their hurricane and quake models are the de facto pricing law of coastal property" }
  ],

  geography: [
    { country: "US", role: "~45% of global premium; the deepest P&C and health markets", note: "Also home to the MGA/E&S boom and social-inflation problem" },
    { country: "UK", role: "Lloyd's and the London specialty market", note: "The world's complex-risk clearinghouse" },
    { country: "CH", role: "Reinsurance and global carriers", note: "Swiss Re + Zurich; sigma research sets industry data standards" },
    { country: "DE", role: "Munich Re + Allianz", note: "The other reinsurance pole" },
    { country: "JP", role: "Life insurance giants, dense cat exposure", note: "Earthquake risk shapes global reinsurance pricing" },
    { country: "SG", role: "Asia's insurance hub", note: "Regional HQs and a growing ILS domicile" }
  ],

  cycles: [
    { year: 1992, title: "Hurricane Andrew", kind: "bust", text: "$15B+ insured, 11 insolvencies, and the death of gut-feel cat pricing. Cat models and the Bermuda market are born. Lesson: every mega-loss creates the next generation of capital and tools." },
    { year: 2001, title: "9/11", kind: "bust", text: "$40B+ across lines nobody had correlated (property, aviation, life, BI). Terrorism pools form; the 2002-2004 hard market follows. Lesson: the killer risk is the correlation you did not price." },
    { year: 2005, title: "Katrina", kind: "bust", text: "$65B+ insured; flood vs wind coverage fights for a decade. Cat bonds go mainstream. Lesson: contract wording is risk management." },
    { year: 2008, title: "AIG", kind: "bust", text: "A $182B rescue driven by the derivatives unit, while the insurance subsidiaries stayed solvent. Lesson: the regulated core held; the unregulated edge nearly sank the system." },
    { year: 2017, title: "HIM and the loss decade", kind: "bust", text: "Harvey-Irma-Maria open a run of $100B+ cat years; wildfires join the peril map; social inflation compounds quietly in casualty. Lesson: 'unprecedented' repeated annually is a pricing problem, not weather bad luck." },
    { year: 2023, title: "The great reinsurance reset", kind: "shift", text: "January renewals reprice property cat 30%+ with higher attachment points; primary carriers retain more risk; E&S absorbs what standard markets flee. Lesson: the reinsurance cycle is the industry's central bank." },
    { year: 2024, title: "The MGA-ILS era peaks", kind: "boom", text: "MGA premium $114B (+16%), E&S $130B+ (9% share), cat bonds at records, US P&C back to ~95% combined. Lesson: when returns come back, capital returns faster; softening begins immediately." }
  ],

  risks: [
    { name: "Climate & catastrophe severity", severity: 5, likelihood: 4, transmission: "Cat losses > pricing → carrier retreat from coastal/wildfire zones → mortgage and property market stress → political intervention (state-backed insurers of last resort accumulating the worst risk)." },
    { name: "Social inflation & reserve inadequacy", severity: 4, likelihood: 4, transmission: "Nuclear verdicts and litigation funding → adverse development in 2016-2019 casualty vintages → capital erosion → sudden hard market in liability lines." },
    { name: "Fronting / delegated-authority counterparty chains", severity: 3, likelihood: 3, transmission: "An MGA misprices, its reinsurer disputes or fails, the fronting carrier eats the gap → programs cancel overnight → the E&S boom's first real stress test." },
    { name: "Interest rate whiplash (life)", severity: 3, likelihood: 3, transmission: "Fast cuts reopen the ZIRP squeeze on guaranteed products; fast hikes create surrender runs against illiquid asset books (the PE-owned annuity question)." },
    { name: "Cyber accumulation", severity: 4, likelihood: 2, transmission: "One cloud or software supply-chain event triggers thousands of policies at once: the peril with no geographic diversification. The industry caps it with sublimits and war exclusions, so far untested at scale." },
    { name: "Regulatory & political intervention", severity: 3, likelihood: 3, transmission: "Rate suppression in politically sensitive lines (California homeowners) → availability crises → residual-market blowups landing back on taxpayers and the industry." }
  ],

  levels: {
    L1: { title: "Beginner", text: [
      "Insurance is a swap: you pay a small certain amount (the premium) so a company pays the huge uncertain amount if disaster hits. The company can promise this because it pools millions of customers; only a few have disasters at once, and everyone's premiums fund them.",
      "Two things beginners miss: the company earns twice (on the pooling AND on investing your premiums before claims come due), and there is a whole hidden supply chain between you and the company: the agent who sold it, the wholesaler or MGA who structured it, the reinsurer who backs it, and the TPA who processes your claim."
    ] },
    L2: { title: "Intermediate", text: [
      "The scoreboard is the combined ratio: losses plus expenses over premium. Under 100% means underwriting profit AND free money to invest (the float). Distribution splits into retail (client-facing), wholesale (specialty access), and MGAs (delegated underwriting authority); risk splits into carriers, reinsurers, and ILS investors; services (TPAs, adjusters, cat modelers) run the machinery.",
      "The market moves in hard/soft cycles: losses burn capital, rates rise, capital returns, rates fall. Standard (admitted) markets handle normal risks under state rate regulation; the E&S market handles hard risks with pricing freedom, which is why it has doubled its share since 2017."
    ] },
    L3: { title: "Advanced", text: [
      "Analyze carriers in this order: reserve development history (the truth serum), through-cycle combined ratio, capital vs cat exposure (PML), then investment portfolio. Value P&C on P/B vs ROE, life on embedded value, distribution on EV/EBITDA; never mix the lenses. Watch the premium dollar's journey: in MGA channels, 30%+ goes to distribution and fees before risk capital earns anything.",
      "The current structural story is delegation and securitization: underwriting migrating to MGAs ($114B, +16% in 2024), risk migrating to E&S ($130B+) and ILS ($108B), fee income migrating to PE-backed consolidators. The balance sheet is being unbundled from the expertise."
    ] },
    L4: { title: "Expert", text: [
      "The expert's dashboard: January reinsurance renewal rates and attachment points (the cycle's clock), MGA premium growth vs fronting counterparty quality (the new systemic node), casualty vintage-year development curves (social inflation's tape), cat bond spreads vs modeled expected loss (the price of hurricane beta), and state residual-market growth (the political risk thermometer).",
      "Trades and theses live in the gaps between the three animals: specialty carriers with reserving credibility compound through cycles; broker/MGA platforms are duration-long fee streams priced off M&A comps; reinsurers are volatility sellers whose returns cluster in the 2 years after resets. The mistake to avoid: extrapolating a quiet cat year anywhere."
    ] },
    L5: { title: "Institutional", text: [
      "Allocator's frame: insurance is three uncorrelated return streams wearing one sector label. Underwriting beta (carriers/reinsurers) pays for bearing tail risk and mean-reverts with the cycle; distribution compounders (brokers, wholesale, MGA platforms) are GDP-plus fee streams with roll-up optionality; ILS is pure cat risk premium, structurally uncorrelated with financial markets, now buyable at record scale.",
      "The decade's institutional questions: whether climate loss trends outrun the industry's annual repricing rights (they have not yet, but availability retreat says the margin is thinning), whether the MGA-fronting-reinsurer chain concentrates a new systemic counterparty risk, and whether PE ownership of life liabilities survives a liquidity event. Position sizing should respect that the sector's worst years arrive without an earnings warning."
    ] }
  },

  quiz: [
    { q: "An MGA differs from a wholesale broker because it:", choices: ["Owns the insurance risk", "Has delegated authority to underwrite and bind policies on a carrier's behalf", "Only handles claims", "Is a type of reinsurer"], answer: 1, explain: "Wholesalers connect retail agents to markets; MGAs actually exercise underwriting authority (price, bind, manage programs) with the carrier's pen, without holding the risk." },
    { q: "A carrier runs a 96% combined ratio. It:", choices: ["Lost money underwriting", "Made a 4% underwriting margin AND earned investment income on the float", "Broke even overall", "Must raise rates by 4%"], answer: 1, explain: "Under 100% means underwriting profit, and the float earns on top; this double engine is the industry's economic core." },
    { q: "TPAs primarily:", choices: ["Underwrite specialty risks", "Provide catastrophe capital", "Administer claims and policy services for carriers and self-insured companies", "Rate insurance companies"], answer: 2, explain: "Third-party administrators are the outsourced operations layer, a $340B to $430B global market with claims handling as its core." },
    { q: "US MGA premium in 2024 was roughly:", choices: ["$14B", "$50B", "$114B, after growing 16% in a year", "$500B"], answer: 2, explain: "Conning's 2024 study: $114B of direct premium, up ~16% YoY and ~90% over five years; the fastest-growing link in the chain." },
    { q: "The E&S (surplus lines) market exists because:", choices: ["It is cheaper for consumers", "Hard, unusual, or new risks need freedom of rate and form that admitted markets' regulation does not allow", "Regulators require it", "It avoids paying claims"], answer: 1, explain: "E&S carriers can price and word policies freely for risks standard markets decline; that flexibility took E&S past $130B and 9% of US P&C premium." },
    { q: "A catastrophe bond investor is paid for:", choices: ["Lending to insurers at fixed rates", "Holding equity in carriers", "Bearing specified disaster risk: principal is lost if the trigger event occurs", "Administrative services"], answer: 2, explain: "Cat bonds securitize peak perils: investors earn a spread over money-market returns unless the defined catastrophe hits, in which case principal pays claims. $49.5B was outstanding at end-2024." },
    { q: "Persistent adverse reserve development signals:", choices: ["Conservative management", "Strong pricing power", "Past business was underpriced and the balance sheet is still paying for it", "Higher float income"], answer: 2, explain: "Reserves re-estimated upward, year after year, mean yesterday's combined ratios were fiction; it is the sector's clearest red flag." },
    { q: "Why does private equity keep buying brokers, MGAs, and TPAs rather than carriers?", choices: ["They are cheaper", "Fee streams are recurring and capital-light, with no underwriting tail risk on the balance sheet", "Regulators prefer it", "Carriers cannot be bought"], answer: 1, explain: "Distribution and services clip the premium dollar without holding the promise; that is a leverageable, roll-up-able cash flow, unlike regulated risk capital." }
  ],

  sources: [
    { name: "Conning: US MGA market study (2024 premiums $114B, +16%)", url: "https://www.prnewswire.com/news-releases/conning-us-mga-premiums-climb-16-to-114-billion-in-2024-302502760.html", feeds: "MGA market size and growth" },
    { name: "Insurance Insider US: E&S 2024 premium > $130B", url: "https://www.insuranceinsiderus.com/article/2ek9pmla89w6nkf39ojy8/research/e-s-in-2024-premium-grows-to-135bn-other-liab-comm-auto-stand-out", feeds: "E&S market data" },
    { name: "Swiss Re Institute sigma: world insurance premiums", url: "https://www.swissre.com/institute/research/sigma-research/sigma-2024-03-world-insurance-global-resilience.html", feeds: "global premium volumes" },
    { name: "Aon Securities ILS Annual Report 2024", url: "https://www.aon.com/getmedia/154b74d4-b861-45a5-a14c-bc258c88d19f/20240830-ils-annual-report-2024.pdf", feeds: "ILS capital, cat bond market" },
    { name: "Artemis cat bond dashboard", url: "https://www.artemis.bm/dashboard/catastrophe-bonds-ils-issued-and-outstanding-by-year/", feeds: "issuance and outstanding" },
    { name: "TBRC / Precedence: insurance TPA market research", url: "https://www.globenewswire.com/news-release/2025/02/21/3030301/28124/en/Insurance-Third-Party-Administrators-TPAs-Market-Opportunities-and-Strategies-Report-2024-2034-CVS-Health-Caremark-Leads-the-810-Bn-Market-9-35-Followed-by-Helmsman-and-UnitedHealt.html", feeds: "TPA market size" },
    { name: "McKinsey: Insurance MGAs, opportunities for investors", url: "https://www.mckinsey.com/industries/financial-services/our-insights/insurance-mgas-opportunities-and-considerations-for-investors", feeds: "value chain roles" },
    { name: "Business Insurance: world's largest brokers 2024", url: "https://www.businessinsurance.com/2024-brokers-profiles-worlds-10-largest-insurance-brokers/", feeds: "broker revenues" }
  ]
};
