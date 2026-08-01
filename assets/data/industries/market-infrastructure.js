/* Industry Atlas - EXCHANGES & MARKET INFRASTRUCTURE (full module, research-backed)
 * Anchors: global exchange industry revenue $57.9B in 2024, up 7.5% (Burton-Taylor);
 * financial market data spend a record $49.2B in 2025, up 6.5%, index industry $7.2B, up 13.4% (Burton-Taylor, 2026);
 * CME FY2025 revenue $6.5B on record ADV of 28.1M contracts, up 6% (CME press releases, Jan-Feb 2026);
 * ICE FY2025 net revenue $9.9B: exchange $5.4B, fixed income & data $2.4B, mortgage tech $2.1B (ICE IR, Feb 2026);
 * US listed options 15.2B contracts in 2025, up 26%, ~61M ADV, 0DTE ~24% of ADV, record 110M contracts Oct 10 (Cboe, State of the Options Industry 2025);
 * DTCC processed $4.7 quadrillion in securities transactions in 2025; DTC custodies $114T (DTCC, 2026);
 * Nasdaq ARR $2.9B, up 10% y/y, 37% SaaS (Nasdaq 8-K, Q2 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["market-infrastructure"] = {
  meta: {
    id: "market-infrastructure", name: "Exchanges & Market Infrastructure", sector: "finance", status: "full",
    tagline: "The tollbooths of capitalism: every trade pays twice, once to match and once to clear, and the exhaust data sells for more than the toll.",
    marketSize: { value: 58, unit: "$B", asOf: 2024, note: "global exchange industry revenue (Burton-Taylor, +7.5% y/y); the adjacent market data industry adds a record $49.2B (2025)" },
    cagr: { value: 7, range: [5, 9], horizon: "2024-2030" },
    maturity: "mature-compounding", cyclicality: 2, capitalIntensity: 2, regulation: 5, disruption: 3
  },
  newsQuery: '("CME Group" OR "Intercontinental Exchange" OR Nasdaq OR "London Stock Exchange" OR Cboe OR DTCC OR clearinghouse OR "market data fees" OR "0DTE")',

  overview: {
    definition: "Market infrastructure is the plumbing of finance: the exchanges that match buyers and sellers, the clearinghouses that guarantee both sides, the depositories that settle and custody the result, and the data and index businesses minted from the exhaust. It is a licensed oligopoly of natural monopolies, and one of the best business models ever listed.",
    howItWorks: [
      "The core machine is a matching engine wrapped in a network effect: liquidity attracts liquidity, so the venue with the deepest book wins the flow, and the flow deepens the book. In products an exchange owns outright (futures, index options), that flywheel is unbreakable: CME's Treasury and SOFR complexes, ICE's Brent, Cboe's SPX and VIX trade nowhere else, because the open interest lives in one clearinghouse and cannot move. Fungible products (cash equities) fragment across dozens of venues and dark pools, which is why equity trading is the industry's worst business and proprietary derivatives its best.",
      "Every matched trade then passes through a central counterparty (CCP), which novates it: the clearinghouse becomes buyer to every seller and seller to every buyer, collects initial and variation margin, and stands behind a mutualized default waterfall. Clearing is the deepest moat in finance: regulators mandate it (post-2008 Dodd-Frank and EMIR pushed swaps into CCPs), open interest is captive, and the fee meter runs on every position every day. At the settlement layer, DTCC processed $4.7 quadrillion in securities transactions in 2025 and custodies $114T at its depository: utility economics, systemic importance, effectively zero competition.",
      "The third profit pool is information. Exchanges sell the data their own order flow generates (quotes, depth, benchmarks) on subscription terms, then license the indices built on top: an asset manager running an S&P 500 or FTSE fund pays basis points forever. Global financial market data spend hit a record $49.2B in 2025 (up 6.5%), and the index industry alone reached $7.2B, growing 13.4%: faster than the exchanges themselves. This is why ICE ($9.9B FY2025 revenue) now earns more from data, mortgage tech, and recurring services than from trading, and why LSEG is majority a data company wearing an exchange's name.",
      "The revenue equation is volume times rate per contract, plus the recurring stack. Volume loves volatility: 2025's tariff shocks produced record everything (CME ADV 28.1M contracts, up 6%; US options 15.2B contracts, up 26%; single days above 100M contracts twice). Rates per contract drift down slowly under competition and mix shift, so operators chase two offsets: pricing power in captive products and recurring revenue that pays regardless of the tape. Incremental margins on an extra contract are near 100%: the matching engine is already built."
    ],
    history: [
      { era: "1602-1970", title: "Clubs and floors", text: "From Amsterdam's VOC shares to open-outcry pits: exchanges as member-owned clubs, profits flowing to seat holders, prices discovered by shouting." },
      { era: "1971-1999", title: "Screens beat floors", text: "Nasdaq launches as the first electronic quotation system (1971); financial futures are invented at the CME (1972); electronic matching guts the floor economics everywhere but Chicago's pits." },
      { era: "2000-2007", title: "Demutualization and the deal wave", text: "Member clubs convert to for-profit companies and IPO (CME 2002, NYSE 2006); an M&A frenzy follows as everyone realizes matching engines scale globally at near-zero marginal cost." },
      { era: "2008-2019", title: "Clearing becomes the mandate", text: "Lehman's cleared book is wound down in days while its bilateral book takes years: regulators respond by forcing OTC derivatives into CCPs. Clearinghouses become systemically designated utilities with a legislated moat." },
      { era: "2020-present", title: "Data pivot and the retail supercycle", text: "LSEG buys Refinitiv ($27B), ICE builds a mortgage-data stack, Nasdaq buys Adenza: exchanges rerate as recurring-revenue data companies. Meanwhile zero-days-to-expiry options and 24/5 retail flow drive the biggest volume boom in history: 15.2B US options contracts in 2025." }
    ],
    trends: [
      { title: "The 0DTE era", direction: "up", text: "Options expiring the same day made up about 24% of all US listed options ADV in 2025 and 59% of SPX volume: a structural retail and systematic flow that mints high-margin index-option revenue for Cboe and CME." },
      { title: "Exchanges become data companies", direction: "shift", text: "Recurring data, index, and technology revenue now rivals or exceeds transaction revenue at ICE, LSEG, and Nasdaq: the market pays a higher multiple for the annuity than the casino." },
      { title: "Market data spend compounding", direction: "up", text: "A record $49.2B in 2025 (up 6.5%), with the index slice growing 13.4%: pricing power that customers protest annually and pay anyway." },
      { title: "24/7 and tokenization pressure", direction: "shift", text: "Crypto venues trade around the clock and settle in minutes; incumbents respond with 24/5 equities plans, T+1 settlement (US, 2024), and DTCC's own tokenization pilots: the rails are being re-plumbed, mostly by the incumbents themselves." },
      { title: "Volume supercycle vs rate decay", direction: "up", text: "Volatility regimes (tariffs, rates, elections) keep volumes at records, but rate per contract erodes slowly under mix shift and member pressure: growth is volume-led, not price-led." }
    ],
    outlook: "The structural bets all point the same way: more products cleared, more strategies systematized, more data consumed, more of the world's savings passing through fewer, larger pieces of plumbing. Expect mid-single-digit volume growth punctuated by volatility windfalls, double-digit data and index growth, and continued M&A as operators buy recurring revenue. The risks are regulatory (data-fee caps, CCP capital rules) and architectural (tokenized settlement compressing the stack), not competitive: nobody has ever successfully attacked an incumbent derivatives franchise head-on."
  },

  structure: {
    suppliers: [
      { name: "Matching and clearing technology (in-house, ION, FIS)", note: "The core engines are mostly built, not bought: the tech IS the exchange" },
      { name: "Data centers & connectivity (Equinix NY4/NY5, CME Aurora, microwave networks)", note: "Colocation racks and low-latency links: sold back to members at rich margins" },
      { name: "Cloud partners (Google-CME, AWS-Nasdaq, Microsoft-LSEG)", note: "Multi-billion strategic deals moving data and analytics, not yet the matching engines" },
      { name: "Reference data & contributors", note: "Prices, curves, and corporate actions feeding the data factories" },
      { name: "Settlement banks & collateral custodians", note: "The cash and collateral legs behind every cleared position" }
    ],
    producers: [
      { name: "CME Group", note: "FY2025 revenue $6.5B on record 28.1M contracts/day: the rates and futures fortress" },
      { name: "ICE", note: "FY2025 revenue $9.9B across exchanges ($5.4B), fixed income & data ($2.4B), mortgage tech ($2.1B)" },
      { name: "Nasdaq, Cboe, LSEG, Deutsche Boerse", note: "Equities-and-data, options-and-volatility, data-first, and Eurex-plus-Clearstream respectively" },
      { name: "DTCC, Euroclear, OCC", note: "The utilities: user-owned or member-governed, processing quadrillions for basis points" },
      { name: "National champions (HKEX, NSE, JPX, B3)", note: "Domestic monopolies; India's NSE leads the world in contracts traded" }
    ],
    distributors: [
      { name: "Data vendors (Bloomberg, LSEG Workspace, FactSet)", note: "Redistribute exchange data to 1M+ desktops; both customer and competitor" },
      { name: "Brokers & retail platforms", note: "Route the order flow; retail apps turned options into a consumer product" },
      { name: "OMS/EMS software vendors", note: "The order-routing layer every institution trades through: distribution and lock-in" },
      { name: "ETF sponsors", note: "Turn licensed indices into tradable products: the index business's distribution arm" }
    ],
    customers: [
      { name: "Banks & dealers", note: "Clearing members who mutualize the default fund and pay the largest bills" },
      { name: "Hedge funds & market makers", note: "The volume engine: Citadel Securities-class firms are the largest takers of colocation and data" },
      { name: "Asset & wealth managers", note: "Index licensees and data subscribers: pay bps on trillions tracking benchmarks" },
      { name: "Corporates & commercials", note: "Hedgers of fuel, grain, rates, and FX: the original clients of the futures pits" },
      { name: "Retail traders", note: "Nearly half of daily US options volume in 2025: the marginal buyer of 0DTE" }
    ],
    regulators: [
      { name: "SEC & CFTC", note: "The US split: securities vs derivatives, each with fee-filing oversight" },
      { name: "ESMA, FCA, national authorities", note: "EMIR clearing mandates and the EU's running fight over data costs" },
      { name: "Systemic designation (FSOC, central banks)", note: "Major CCPs are designated SIFMUs: too important to fail, supervised accordingly" },
      { name: "CPMI-IOSCO", note: "Sets the global principles for financial market infrastructures (PFMI): the CCP rulebook's rulebook" }
    ],
    capital: [
      { name: "Self-funding cash machines", note: "80%+ incremental margins mean expansion is financed by operations" },
      { name: "Default waterfalls", note: "Member-posted margin and guarantee funds: the clearing system's real balance sheet, roughly $1T of collateral held at major CCPs" },
      { name: "Bond markets for M&A", note: "The data pivot was bought with leverage: LSEG-Refinitiv, ICE-Ellie Mae/Black Knight, Nasdaq-Adenza" },
      { name: "Float income", note: "Interest earned on members' cash collateral: a quiet rates-levered revenue line" }
    ]
  },

  valueChain: {
    intro: "Six tollbooths between an order and a settled position, plus a data factory bolted to the side. Value capture concentrates where the asset cannot leave: proprietary contracts, captive clearing, and licensed benchmarks.",
    stages: [
      { id: "listings", name: "Listings & issuer services", what: "IPO venues, listing fees, corporate services", players: "NYSE (ICE), Nasdaq, LSEG, HKEX", valueCapture: 2,
        economics: { grossMargin: [50, 70], capitalIntensity: 1, concentration: 4 },
        linksTo: ["investment-banking", "capital-markets"],
        deeper: "Prestige revenue, not profit revenue: listings are single-digit % of exchange P&Ls but anchor the brand and the data. The real fight is jurisdictional: London's listing drought vs New York's gravity is a national-policy issue wearing an exchange logo." },
      { id: "execution", name: "Trading & execution", what: "Matching engines, maker-taker pricing, colocation", players: "CME, ICE, Nasdaq, Cboe, wholesalers off-exchange", valueCapture: 4,
        economics: { grossMargin: [55, 75], capitalIntensity: 2, concentration: 4 },
        linksTo: ["capital-markets", "hedge-funds", "crypto-infrastructure"],
        deeper: "Two different businesses share this box. Proprietary derivatives (SPX, Brent, SOFR) are monopolies with pricing power. Fungible cash equities fragment across 16+ US venues and wholesalers, competing away the economics: which is why 40%+ of US equity volume now executes off-exchange." },
      { id: "clearing", name: "Clearing (CCPs)", what: "Novation, margining, default management", players: "CME Clearing, ICE Clear, OCC, LCH (LSEG)", valueCapture: 5,
        economics: { grossMargin: [60, 80], capitalIntensity: 3, concentration: 5 },
        linksTo: ["banking", "capital-markets"],
        deeper: "The deepest moat in finance: regulation mandates the product, open interest cannot migrate without closing every position, and the fee meter runs daily. The tail risk is existential: a CCP default waterfall breach would be a Lehman-class event, which is why members, not shareholders, post most of the capital." },
      { id: "settlement", name: "Settlement, custody & depositories", what: "DVP settlement, asset servicing, collateral", players: "DTCC, Euroclear, Clearstream (DB1)", valueCapture: 3,
        economics: { grossMargin: [40, 60], capitalIntensity: 3, concentration: 5 },
        linksTo: ["banking", "asset-management", "wealth-management"],
        deeper: "Utility economics at absurd scale: DTCC processed $4.7 quadrillion in 2025 and custodies $114T, charging fractions of a basis point. User-owned, so profit is capped by design: the strategic value is control of the rails, which is why tokenization pilots run through DTCC rather than around it." },
      { id: "data", name: "Market data & indices", what: "Real-time feeds, benchmarks, index licensing, analytics", players: "LSEG, ICE, Nasdaq, S&P DJI, MSCI", valueCapture: 5,
        economics: { grossMargin: [70, 90], capitalIntensity: 1, concentration: 4 },
        linksTo: ["asset-management", "data-infrastructure", "ai"],
        deeper: "The exhaust became the engine: a $49.2B market data industry (2025) growing 6.5%, with index licensing ($7.2B, up 13.4%) the crown jewel because fees scale with the AUM tracking the benchmark, not with usage. Sell the same byte 10,000 times at 90% margins: software economics without the churn." },
      { id: "technology", name: "Exchange technology & services", what: "Market tech sales, surveillance, anti-fin-crime, SaaS", players: "Nasdaq (Adenza, Verafin), LSEG, ION", valueCapture: 3,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas", "cloud", "fintech"],
        deeper: "Selling the picks to other casinos: 130+ marketplaces run Nasdaq technology, and its $2.9B ARR (37% SaaS, as of Q2 2025) shows the strategy: convert exchange know-how into subscription software that smooths the volume cycle." }
    ]
  },

  financials: {
    businessModel: [
      "One P&L, two engines. The transaction engine is volume times rate per contract: revenue arrives with every trade, costs barely move, so incremental margins approach 100% and operating leverage is the story in both directions. Volatility is the raw material: tariff week in April 2025 printed 100M options contracts in a day, and every one paid the toll. The recurring engine (data subscriptions, index licensing, technology ARR, listings) pays regardless of the tape, and now sets the multiple: ICE and LSEG each derive roughly half or more of revenue from it.",
      "The fingerprint is extraordinary: EBITDA margins of 50-70% at scale, minimal capex (2-4% of revenue), negative working capital, and pricing power that survives annual customer revolts. Capital allocation is the differentiator: CME runs a variable-dividend cash-return model; ICE and Nasdaq lever up to buy recurring revenue and delever on the cash flows; LSEG integrated a $27B data acquisition. The bear math is simple too: volumes mean-revert after volatility spikes, rate per contract decays slowly, and regulators periodically threaten the data-fee escalator."
    ],
    fingerprint: { grossMargin: 85, recurringRevenue: 55, capitalIntensity: 20, pricingPower: 85, cyclicality: 35, operatingLeverage: 90 },
    lines: [
      { label: "Transaction & clearing fees", note: "Volume x rate per contract: the volatility-levered engine (CME: ~80% of revenue)" },
      { label: "Market data & connectivity", note: "Subscription feeds, colocation, terminals: the annuity everyone protests and pays" },
      { label: "Index & benchmark licensing", note: "Bps on tracking AUM: the fastest-growing, highest-margin line ($7.2B industry, +13.4% in 2025)" },
      { label: "Technology & services ARR", note: "Exchange tech, surveillance, anti-fin-crime sold as SaaS (Nasdaq ARR $2.9B)" },
      { label: "Listings & issuer services", note: "Steady, small, strategic: the brand anchor" }
    ],
    unitEconomics: {
      unit: "per futures contract cleared (illustrative, CME FY2025 derived)",
      items: [
        { label: "Average rate per contract", value: "~$0.70-0.75", note: "~$5.3B transaction fees over ~7.1B contracts (28.1M ADV x ~252 days)" },
        { label: "Incremental cost per contract", value: "near zero", note: "the matching engine and CCP are already built and staffed" },
        { label: "Incremental margin", value: "~90%+", note: "why volume surprises flow straight to EBITDA" },
        { label: "Data exhaust per contract", value: "sold separately, forever", note: "the same trade feeds quote, depth, and settlement data subscriptions" }
      ]
    }
  },

  kpiRefs: ["cm-adv", "pay-take-rate"],
  kpiLocal: [
    {
      id: "mi-rpc", name: "Rate per Contract (RPC)", industries: ["market-infrastructure"],
      definition: "Average transaction and clearing fee earned per contract or trade executed.",
      formula: "RPC = transaction & clearing revenue / contracts traded",
      interpretation: "The price side of the volume x price equation. Mix matters: options and commodities carry higher RPC than rates; member volume prices below customer volume. CME's blended futures RPC runs about $0.70 (FY2025 derived).",
      healthy: "Stable-to-rising RPC on favorable mix", warning: "Multi-quarter RPC erosion while volumes flatten: the double squeeze" },
    {
      id: "mi-recurring-share", name: "Recurring Revenue Share", industries: ["market-infrastructure"],
      definition: "Share of total revenue from subscriptions: data, index licensing, technology ARR, listings.",
      formula: "Recurring share = (data + index + tech ARR + listings) / total revenue",
      interpretation: "The multiple-setter: recurring dollars are valued like software, transaction dollars like a casino with good weather. ICE and LSEG rerated as this crossed 50%.",
      healthy: "Rising share with double-digit recurring growth", warning: "Recurring growth stalling while priced as an annuity" }
  ],

  health: {
    intro: "Transaction health is volume durability and rate discipline; franchise health is recurring share and index momentum; systemic health is the clearinghouse's margin model on its worst day.",
    pillars: [
      { name: "Volume durability & mix", weight: 25, metrics: "ADV trend vs volatility regime, product breadth, open interest growth", healthy: "Records across asset classes (2025: CME 28.1M ADV, options 15.2B contracts)", warning: "Volume concentrated in one volatility-dependent product" },
      { name: "Recurring & data momentum", weight: 25, metrics: "Data/index/ARR growth, retention, pricing realization", healthy: "Double-digit index growth, ARR compounding (industry: +6.5% to $49.2B in 2025)", warning: "Data growth below inflation: the annuity thesis breaks" },
      { name: "Pricing power (RPC)", weight: 15, metrics: "Rate per contract trend, fee-filing outcomes", healthy: "Stable RPC with mix tailwinds", warning: "Regulated fee rollbacks or member revolts that stick" },
      { name: "Clearing risk management", weight: 20, metrics: "Margin coverage, default-fund sizing, stress results, skin-in-the-game", healthy: "Cover-2 standard met with headroom; incidents absorbed (nickel 2022 as the anti-pattern)", warning: "Margin breaches, member concentration, waterfall disputes" },
      { name: "Regulatory posture", weight: 15, metrics: "Data-fee scrutiny, antitrust, systemic designations, deal approvals", healthy: "Constructive engagement; deals clearing", warning: "Fee caps proposed, M&A blocked (Deutsche Boerse-LSE 2017 template)" }
    ],
    scoringNote: "A CCP's health is binary at the tail: 99 clean years mean nothing if the margin model fails on day 100. Weight the stress tests, not the streak."
  },

  valuation: {
    intro: "The market prices these as infrastructure compounders: premium multiples justified by moats, margins, and the recurring pivot. The debate is never quality, only price and volume normalization.",
    methods: [
      { name: "EV / EBITDA", use: "The standard cross-exchange comp", avoid: "Comparing across recurring mix: a data-heavy LSEG and a transaction-heavy CME are different animals at the same multiple", strengths: "Clean at 50-70% EBITDA margins", weaknesses: "Flatters volatility-windfall years", range: { low: 14, high: 22, asOf: 2025, note: "data-heavy names command the top; pure transaction the bottom" } },
      { name: "P/E on normalized volumes", use: "Through-cycle view stripping the volatility windfall", avoid: "Using peak-vol years (2025) as the base", strengths: "Disciplines the mean-reversion risk", weaknesses: "Normal is genuinely hard to define when 0DTE keeps resetting it higher", range: { low: 20, high: 30, asOf: 2025, note: "quality-compounder territory; rarely cheap outright" } },
      { name: "Sum-of-the-parts (transaction vs annuity)", use: "Data-pivot stories: value index/data on software multiples, trading on exchange multiples", avoid: "Double-counting synergies between the parts", strengths: "Reveals the rerating math behind ICE, LSEG, Nasdaq", weaknesses: "Segments disclose unevenly", range: { low: 0, high: 0, asOf: 2025, note: "framework, not a single multiple" } },
      { name: "FCF yield", use: "The cash-machine lens: minimal capex means EBITDA converts", avoid: "Ignoring deal leverage mid-integration", strengths: "Cuts through amortization noise from serial M&A", weaknesses: "Buyback-vs-deal allocation shifts the story", range: { low: 3, high: 5, asOf: 2025, note: "% yields; scarcity pricing for the quality" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an exchange quickly: normalized EBITDA times a mix-adjusted multiple, minus net debt. Nudge the multiple up for recurring share, down for volatility dependence.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.5, max: 12, step: 0.25, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 10, max: 26, step: 0.5, value: 17, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 25, step: 0.5, value: 5, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns market infrastructure as the quality-compounder sleeve of financials: long volatility without paying theta, long indexing without fee compression, long retail speculation without credit risk. Core the data-pivot names for the rerating, hold the derivatives fortresses for the volatility convexity, and respect that entry multiple is the only real risk in the group.",
    debates: [
      { topic: "Is 0DTE volume structural or a volatility fad?", bull: "Three straight record years, ~24% of US options ADV in 2025, and the flow is now embedded in retail platforms, systematic overlays, and income ETFs: this is a new market structure, not a mania, and it mints monopoly-margin index-option revenue daily.", bear: "Same-day options are volatility consumption, not investment: one gap-down event that vaporizes retail sellers, or one regulatory intervention on gamified options approval, and the marginal quarter of volume growth disappears with the multiple that priced it as permanent." },
      { topic: "Does the data pivot deserve software multiples?", bull: "90% gross margins, 100%+ retention in benchmarks, and fees that scale with tracked AUM: index licensing is better than software (no churn, no CAC), and $49.2B of industry spend growing 6.5% through every cycle proves the demand curve.", bear: "Customers are consolidating (fewer, bigger asset managers), regulators in the EU and US circle data fees annually, and AI-native analytics could commoditize the analytics layer that justifies terminal pricing: the annuity is real but its escalator is politically capped." },
      { topic: "Tokenization: existential threat or incumbent upgrade?", bull: "T+1 went through DTCC, not around it; tokenization pilots run on incumbent rails with incumbent governance; and 24/7 trading multiplies the hours the toll booth operates. The plumbers own the re-plumbing.", bear: "Atomic settlement collapses the spread between execution and settlement where the stack earns its fees, and crypto-native venues have already demonstrated a full exchange-clearing-custody stack at a fraction of the cost: the moat is regulatory, and regulation can change." }
    ],
    cycle: {
      where: "Late in a volatility windfall, early in the structural pivots: 2025 printed records everywhere (CME 28.1M ADV, 15.2B options contracts, $49.2B data spend), so comps are brutal even as 0DTE, index growth, and the data pivot keep compounding underneath.",
      drivers: "Volatility regime (rates, tariffs, elections), retail engagement, indexing growth, clearing mandates, and the data-fee regulatory cycle.",
      leads: [
        "CME monthly volume and open interest reports (cmegroup.com, free)",
        "OCC daily and monthly options volume (theocc.com, free)",
        "Cboe market statistics and 0DTE share disclosures (cboe.com, free)",
        "VIX level and realized volatility (free everywhere): the raw material for transaction revenue",
        "SEC/ESMA rulemaking dockets on market data fees (free): the annuity's political weather"
      ]
    },
    exposure: [
      { vehicle: "CME Group", note: "The rates-and-futures fortress: pure volatility convexity with a variable-dividend cash return" },
      { vehicle: "ICE", note: "The conglomerate compounding play: energy franchise plus data and mortgage annuities" },
      { vehicle: "Cboe", note: "The 0DTE and volatility pure-play: SPX and VIX are unreplicable licenses" },
      { vehicle: "Nasdaq / LSEG / Deutsche Boerse", note: "The data-and-technology rerating stories at three different stages" },
      { vehicle: "Index publishers (S&P Global, MSCI)", note: "The purest annuity: bps on the world's tracked AUM without running a matching engine" }
    ],
    catalysts: [
      { when: "Monthly (first business days)", what: "Exchange volume prints: the sector's tape, free and market-moving" },
      { when: "Quarterly earnings", what: "RPC trends, recurring growth, ARR, and capital-return updates" },
      { when: "Regulatory calendar", what: "Data-fee rulings, CCP capital rules, options-market-structure reviews" },
      { when: "Volatility events", what: "Every macro shock is a revenue event: April and October 2025 each printed 100M+ options days" }
    ],
    data: [
      { series: "CME volume & open interest", source: "cmegroup.com monthly reports (free)", why: "The futures tape, straight from the source" },
      { series: "US options volumes", source: "theocc.com (free)", why: "The retail-and-0DTE pulse, daily" },
      { series: "Cboe market statistics", source: "cboe.com (free)", why: "SPX/VIX volumes and 0DTE share" },
      { series: "VIX & realized volatility", source: "Cboe / FRED (free)", why: "The leading indicator for transaction revenue" },
      { series: "WFE market highlights", source: "world-exchanges.org (free summaries)", why: "Global cross-venue volume context" }
    ],
    playbook: [
      { regime: "Volatility spike", behavior: "Revenue windfall with zero credit risk: transaction lines gap up, data lines unmoved. The group is one of the few longs that likes a crisis: fade only the multiple, never the earnings." },
      { regime: "Volatility collapse", behavior: "The bear case: volumes normalize 10-20% off peaks, operating leverage runs in reverse, and transaction-heavy names de-rate. Recurring-heavy names (LSEG, index publishers) carry through." },
      { regime: "Rates rising", behavior: "Double tailwind: rate-hedging volumes explode (SOFR, Treasury futures) and collateral balances earn float. CME is the cleanest expression." },
      { regime: "Regulatory offensive", behavior: "Data-fee caps or CCP capital hikes compress the annuity math: watch EU consolidated-tape and SEC market-data rulemakings; the moat is legal, so legal weather matters." }
    ]
  },

  players: [
    { name: "CME Group", role: "Derivatives fortress", country: "US", real: true, note: "FY2025: $6.5B revenue, record 28.1M contracts/day; SOFR, Treasuries, energy, ags: the world hedges here" },
    { name: "ICE (Intercontinental Exchange)", role: "The serial compounder", country: "US", real: true, note: "FY2025: $9.9B revenue; built from a power-trading startup into NYSE + energy + data + mortgage rails in 25 years" },
    { name: "Nasdaq", role: "Exchange turned SaaS vendor", country: "US", real: true, note: "$2.9B ARR (37% SaaS, Q2 2025); sells technology to 130+ other marketplaces" },
    { name: "LSEG", role: "Data company with an exchange attached", country: "GB", real: true, note: "The $27B Refinitiv bet made data and analytics the majority of revenue" },
    { name: "Cboe", role: "Volatility franchise", country: "US", real: true, note: "SPX and VIX complexes: 0DTE was 59% of SPX volume in 2025" },
    { name: "Deutsche Boerse", role: "Europe's vertical silo", country: "DE", real: true, note: "Eurex derivatives + Clearstream settlement: the integrated model regulators elsewhere broke up" },
    { name: "HKEX", role: "The China gateway", country: "HK", real: true, note: "Stock Connect makes it the toll bridge between global capital and mainland markets" },
    { name: "DTCC", role: "The settlement utility", country: "US", real: true, note: "$4.7 quadrillion processed in 2025; $114T in custody; user-owned, systemically designated" }
  ],

  geography: [
    { country: "US", role: "The gravitational center", note: "CME, ICE/NYSE, Nasdaq, Cboe, OCC, DTCC: deepest liquidity and the fee pool to match" },
    { country: "GB", role: "Data and clearing hub", note: "LSEG's data stack and LCH's swap-clearing dominance outlasted Brexit's listing drought" },
    { country: "DE", role: "Europe's derivatives silo", note: "Deutsche Boerse's Eurex-Clearstream vertical: the EU's answer to Chicago" },
    { country: "HK", role: "China access point", note: "HKEX monetizes the mainland connection both directions" },
    { country: "IN", role: "The volume phenomenon", note: "NSE leads the world in derivatives contracts traded, on retail options flow regulators keep trying to cool" },
    { country: "JP", role: "Asia's incumbent", note: "JPX consolidates cash and derivatives; a governance-reform data story" }
  ],

  cycles: [
    { year: 1987, title: "Black Monday", kind: "bust", text: "A 20% one-day crash stress-tests the clearing system to the edge; circuit breakers and coordinated margining follow. Lesson: the plumbing's worst day defines its next 30 years of rules." },
    { year: 2002, title: "Demutualization wave", kind: "shift", text: "CME IPOs first among US exchanges; member clubs become profit machines and the great exchange M&A era begins. Lesson: the same matching engine is worth 10x more with shareholders than with seat holders." },
    { year: 2008, title: "Lehman and the clearing mandate", kind: "shift", text: "CCPs wind down Lehman's cleared book in days while bilateral claims take a decade; Dodd-Frank and EMIR force OTC derivatives into clearinghouses. Lesson: crises legislate moats: the CCPs' best marketing was the system's failure." },
    { year: 2010, title: "The Flash Crash", kind: "bust", text: "The Dow drops ~1,000 points in minutes as liquidity evaporates across fragmented electronic venues. Lesson: speed fragmented the market faster than the safeguards evolved: microstructure is systemic risk." },
    { year: 2021, title: "GameStop margin call", kind: "shift", text: "Meme-stock volatility forces a $3B+ overnight margin demand through NSCC; brokers restrict buying and retail discovers the clearing layer exists. Lesson: the invisible plumbing sets the rules of the visible casino: and T+1 settlement followed within three years." }
  ],

  risks: [
    { name: "CCP default waterfall breach", severity: 5, likelihood: 1, transmission: "Member default exceeds margin + guarantee fund -> losses mutualize across surviving members -> confidence run on the clearing system -> central bank backstop and a decade of re-regulation." },
    { name: "Volume normalization after the volatility supercycle", severity: 3, likelihood: 3, transmission: "Volatility regime calms -> transaction revenue falls 10-20% off record comps -> operating leverage reverses -> transaction-heavy names de-rate from compounder multiples." },
    { name: "Market data fee regulation", severity: 3, likelihood: 3, transmission: "SEC/EU rulemaking caps or unbundles data fees -> the annuity's pricing escalator breaks -> data-pivot valuations rerate down (the thesis priced perpetual 5-8% price rises)." },
    { name: "Technology outage or cyberattack", severity: 4, likelihood: 2, transmission: "Matching engine or clearing outage at scale -> trading halts, settlement fails, litigation -> regulatory capital add-ons and lost listing/flow credibility (ASX's failed CHESS rebuild as the cautionary tale)." },
    { name: "Disintermediation by tokenized settlement", severity: 3, likelihood: 2, transmission: "Atomic 24/7 settlement matures on regulated rails -> execution-to-custody stack compresses -> fee layers collapse into fewer, cheaper steps -> incumbents cannibalize themselves or lose the flow to those who will." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Exchanges are the marketplaces where stocks, options, and futures trade: they earn a tiny fee on every transaction, like a tollbooth on a highway. Behind them, clearinghouses guarantee that both sides of every trade actually pay up, and depositories keep track of who owns what (one US utility, DTCC, processed $4.7 quadrillion of transactions in 2025). The twist: selling the data about all that trading, and licensing benchmarks like the S&P 500, has become as big a business as the trading itself."] },
    L2: { title: "Intermediate", text: ["The economics are volume times price with almost no incremental cost: a matching engine that handles 28M contracts a day (CME, 2025) barely notices a million more, so extra volume flows to profit at ~90% margins. Volatility is the raw material: turbulent markets drove US options to 15.2B contracts in 2025, up 26%. The moat splits by product: proprietary contracts (SPX options, Brent futures) trade in exactly one place because their open interest is captive to one clearinghouse, while ordinary stocks trade anywhere, so those fees competed toward zero."] },
    L3: { title: "Advanced", text: ["Analyze the group in three layers. Transaction: track ADV by product and rate per contract (mix shifts matter more than headline volume). Recurring: data subscriptions, index licensing (fees scale with tracked AUM: the $7.2B index industry grew 13.4% in 2025), and technology ARR: this layer sets the multiple. Clearing: the invisible risk layer: margin models, default waterfalls, and skin-in-the-game determine whether the fortress survives its worst day. Value transaction revenue like a volatility-levered toll road and recurring revenue like software, and be suspicious of anyone using a single multiple for both."] },
    L4: { title: "Expert", text: ["Trade the monthly volume tape against the volatility regime, and position around the three live debates: whether 0DTE (~24% of US options ADV) is structure or fad, whether data annuities deserve software multiples under regulatory fee pressure, and whether tokenized settlement compresses the stack or upgrades it. Watch RPC decay as the silent thesis-killer, the EU consolidated tape and SEC data-fee dockets as the annuity's political weather, and CCP stress-test disclosures as the tail risk nobody prices until it prints (nickel 2022, NSCC-GameStop 2021)."] },
    L5: { title: "Institutional", text: ["Allocator's frame: market infrastructure is the rare sleeve that is long volatility, long indexing, and long financialization simultaneously, with 50-70% EBITDA margins and legislated moats. It behaves as quality-compounder equity with crisis-alpha characteristics: transaction revenue spikes exactly when the rest of the book is bleeding. Size it as a core financials holding whose real risks are entry multiple, regulatory rewrites of the data and clearing rulebooks, and the once-a-generation architectural transition (tokenization) that the incumbents currently control but do not yet monetize. The question that decides the next decade: who owns the rails when settlement becomes instant."] }
  },

  quiz: [
    { q: "An exchange's core economic advantage is:", choices: ["Low fees", "The liquidity network effect: the deepest book attracts the flow, which deepens the book", "Government subsidies", "Brand advertising"], answer: 1, explain: "Liquidity begets liquidity: once a contract's open interest concentrates in one venue and clearinghouse, it is nearly impossible to dislodge." },
    { q: "A clearinghouse (CCP) makes money and manages risk by:", choices: ["Betting against members", "Becoming buyer to every seller and seller to every buyer, collecting margin and fees on every position", "Lending to hedge funds", "Setting interest rates"], answer: 1, explain: "Novation puts the CCP in the middle of every trade: fees flow daily, and initial plus variation margin protects it from member defaults." },
    { q: "In 2025, US listed options volume reached:", choices: ["1.5B contracts", "15.2B contracts, up 26%, with 0DTE about 24% of daily volume", "150M contracts", "Volume fell"], answer: 1, explain: "Record retail and systematic flow: single days topped 100M contracts twice (April and October 2025), per Cboe's industry review." },
    { q: "Why do proprietary futures (like Brent or SOFR) resist competition while stock trading fragmented?", choices: ["Better technology", "Their open interest is captive to one clearinghouse: closing and reopening positions elsewhere is prohibitively costly", "Regulation bans competitors", "Stocks are more popular"], answer: 1, explain: "Fungible equities trade on 16+ US venues; a proprietary contract's positions live in one CCP, so the franchise is effectively a licensed monopoly." },
    { q: "The market data and index business matters because:", choices: ["It is a small side business", "It is a $49.2B industry (2025) with software-like margins, and index fees scale with tracked AUM", "Exchanges give data away", "Only regulators buy data"], answer: 1, explain: "Burton-Taylor pegs 2025 data spend at a record $49.2B (up 6.5%) and the index industry at $7.2B (up 13.4%): the exhaust became the engine." },
    { q: "Post-2008 regulation (Dodd-Frank, EMIR) affected clearinghouses by:", choices: ["Shrinking them", "Mandating central clearing of OTC derivatives: legislating a bigger moat", "Banning derivatives", "Nationalizing them"], answer: 1, explain: "Lehman's cleared book unwound in days while bilateral claims took years: regulators responded by forcing swaps into CCPs." },
    { q: "The 2021 GameStop episode revealed that:", choices: ["Exchanges failed", "The clearing layer's margin calls (a $3B+ overnight NSCC demand) set the rules of the visible market", "Retail cannot trade options", "Settlement is instant"], answer: 1, explain: "Brokers restricted buying because of clearing margin, not malice: the invisible plumbing constrained the visible casino, and T+1 followed." },
    { q: "The strongest bear case against the sector's premium multiples is:", choices: ["Weak margins", "Volume mean-reversion after volatility records plus regulatory caps on data fees", "No moats", "Rising capex"], answer: 1, explain: "2025 printed record everything: if volatility calms and regulators break the data-fee escalator, both engines decelerate onto compounder multiples." }
  ],

  sources: [
    { name: "CME Group FY2025 results & volume reports", url: "https://www.cmegroup.com/media-room/press-releases/2026/2/04/cme_group_inc_reportsfourthconsecutiveyearofrecordannualrevenuea.html", feeds: "revenue, ADV, RPC" },
    { name: "ICE full year 2025 results", url: "https://ir.theice.com/press/news-details/2026/Intercontinental-Exchange-Reports-Strong-Full-Year-2025-Results/default.aspx", feeds: "segment revenue, recurring mix" },
    { name: "Burton-Taylor exchange, market data & index benchmarks", url: "https://tpicap.com/burtontaylor/reports/global-exchange-index", feeds: "industry revenue pools" },
    { name: "Cboe: State of the Options Industry 2025", url: "https://www.cboe.com/insights/posts/the-state-of-the-options-industry-2025/", feeds: "options volumes, 0DTE share" }
  ]
};
