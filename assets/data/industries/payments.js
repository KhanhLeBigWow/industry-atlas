/* Industry Atlas - PAYMENTS (full module, research-backed)
 * Anchors: McKinsey Global Payments 2024: ~$2.4T global payments revenue
 * (2023), on track for ~$3.1T by 2028; 3.4T transactions handled 2023. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["payments"] = {
  meta: {
    id: "payments", name: "Payments", sector: "finance", status: "full",
    tagline: "A tollbooth on human commerce: a few basis points on everything, 3.4T times a year.",
    marketSize: { value: 2.4, unit: "$T", asOf: 2023, note: "global payments revenue pool (McKinsey); ~$3.1T expected by 2028" },
    cagr: { value: 5, range: [4, 7], horizon: "2023-2028" },
    maturity: "growth-mature", cyclicality: 2, capitalIntensity: 2, regulation: 4, disruption: 4
  },
  newsQuery: '(Visa OR Mastercard OR Stripe OR "payments industry" OR "real-time payments" OR stablecoin payments)',

  overview: {
    definition: "The payments industry moves money between buyers and sellers and takes a sliver of nearly every transaction on Earth. It is the highest-quality tollbooth in finance: asset-light, network-effect-protected, and levered to the permanent shift from cash to digital.",
    howItWorks: [
      "Follow one card swipe: the merchant's acquirer routes it through a network (Visa/Mastercard) to the cardholder's issuing bank, which approves it in milliseconds. The merchant pays ~2% (the merchant discount rate); most goes to the issuer as interchange (funding rewards), the acquirer keeps ~0.2-0.5%, and the network takes ~0.1-0.15%: the smallest cut, on the widest base, with the best economics ever designed.",
      "The industry earned ~$2.4T of revenue in 2023 handling 3.4T transactions (McKinsey), heading toward ~$3.1T by 2028. Roughly half of global payments revenue still comes from Asia-Pacific and from humble sources: account balances (net interest on floats) and commercial payments, not just consumer cards: the pool is far bigger than the card networks.",
      "The stack has layered, not replaced: networks (Visa/Mastercard, the duopoly), issuers/acquirers (banks and processors like Fiserv/Adyen), gateways and modern rails (Stripe, PayPal), wallets (Apple Pay riding the rails, Alipay/WeChat replacing them), and now real-time payment systems (India's UPI, Brazil's Pix, FedNow) built by states to bypass the card tax entirely.",
      "The strategic war is rails vs rails: card networks defend the most profitable toll road in history against government RTP schemes (UPI does more volume than cards in India, near-free), account-to-account push in Europe, and stablecoins probing cross-border. So far the duopoly keeps winning where it matters (the profitable, rewards-funded US and cross-border), because the hardest thing to replicate is not technology: it is two-sided acceptance plus fraud liability plus habit."
    ],
    history: [
      { era: "1950-1970", title: "The card is born", text: "Diners Club then BankAmericard (→Visa) and Interbank (→Mastercard) create general-purpose credit: bank consortia become networks." },
      { era: "1970-2000", title: "Electronic rails", text: "Magstripe, ATMs, and electronic authorization scale the networks globally; interchange becomes the system's fuel and its lawsuit magnet." },
      { era: "2000-2015", title: "The internet layer", text: "PayPal cracks online trust; the networks IPO (Visa 2008, the era's defining listing); Square and Stripe make acceptance a developer API." },
      { era: "2015-2022", title: "Wallets and superapps", text: "Apple Pay tokenizes the card (riding the rails); Alipay/WeChat leapfrog cards in China entirely; fintech valuations boom and bust." },
      { era: "2022-present", title: "Rails vs rails", text: "State RTP systems scale (UPI ~14B tx/month, Pix dominant in Brazil), regulators cap fees, stablecoins go from crypto toy to Treasury-blessed settlement experiment." }
    ],
    trends: [
      { title: "Cash-to-digital, the forever tailwind", direction: "up", text: "Still the core engine: every % of cash displaced is fee-bearing volume; emerging markets are decades from done." },
      { title: "Real-time payments (state rails)", direction: "up", text: "UPI, Pix, FedNow: near-free, instant, account-to-account: the first credible structural threat to card economics, spreading by government mandate." },
      { title: "Software eats acceptance", direction: "up", text: "Payments embed into vertical software (Toast, Shopify): the acquirer becomes invisible and the software layer captures the economics." },
      { title: "Cross-border premium under siege", direction: "shift", text: "The industry's richest corridor (remittances ~6% cost, B2B FX spreads) is stablecoins' and RTP-linkage's first target." },
      { title: "Regulatory fee compression", direction: "down", text: "Interchange caps (EU, Durbin, pending US credit rules) grind at the pool; each cap reroutes economics rather than killing them." }
    ],
    outlook: "The pool grows ~5%/yr toward $3.1T by 2028 (McKinsey): slower than the 2010s but still GDP-plus, because cash displacement and commerce digitization outrun fee compression. The duopoly's US/cross-border fortress looks defensible this decade; the real share shifts happen underneath (software-embedded acceptance) and beside it (state rails owning domestic A2A). The tail question: whether stablecoin settlement matures from experiment to genuine cross-border rail, and who owns it."
  },

  structure: {
    suppliers: [
      { name: "Banking system", note: "Issuers and acquirers: the balance sheets and licenses beneath every transaction" },
      { name: "Cloud & data infrastructure", note: "Authorization at millisecond scale; fraud ML is a compute business" },
      { name: "Telecom & device layer", note: "Phones are the new terminals; NFC and QR are the acceptance hardware" },
      { name: "Identity & fraud vendors", note: "KYC, tokenization, fraud scoring: the trust supply chain" }
    ],
    producers: [
      { name: "Card networks (Visa, Mastercard)", note: "The duopoly toll road: ~0.1-0.15% of everything, at 50%+ operating margins" },
      { name: "Acquirers & processors (Fiserv, Adyen, Worldpay)", note: "Merchant-side plumbing: scale and software attach decide winners" },
      { name: "Gateways & fintech rails (Stripe, PayPal)", note: "The developer layer that made acceptance an API call" },
      { name: "State RTP systems (UPI, Pix, FedNow)", note: "Public rails, near-free by design: the counter-model" }
    ],
    distributors: [
      { name: "Vertical software & marketplaces", note: "Toast, Shopify class: payments embedded where commerce happens" },
      { name: "Wallets (Apple Pay, Alipay class)", note: "The consumer interface: rides the rails in the West, replaced them in China" }
    ],
    customers: [
      { name: "Merchants", note: "Pay the ~2% MDR; the constituency behind every interchange lawsuit" },
      { name: "Consumers", note: "Pay indirectly (prices) and get paid in rewards: the system's political shield" },
      { name: "Corporates & governments", note: "B2B payments: the biggest, least digitized pool left" }
    ],
    regulators: [
      { name: "Central banks", note: "Now competitors too: they build the RTP rails and set the rules" },
      { name: "Fee regulators (EU IFR, Durbin)", note: "Interchange caps: the pool's persistent headwind" },
      { name: "AML/sanctions regimes", note: "Payments is the enforcement chokepoint of the financial system" }
    ],
    capital: [
      { name: "Public equity", note: "V/MA are core compounder holdings; the fintech long tail reprices violently" },
      { name: "Venture capital", note: "Fintech's biggest category: $100B+ poured in the 2021 vintage, now sober" },
      { name: "Private equity", note: "Processor roll-ups and carve-outs (Worldpay class deals)" }
    ]
  },

  valueChain: {
    intro: "A ~2% merchant fee, split five ways in milliseconds. The network takes the smallest slice on the widest base: the best position; the issuer takes the biggest slice with the most risk; software is eating the acquirer's share.",
    stages: [
      { id: "issuing", name: "Issuing", what: "Cards, credit, rewards: the consumer side", players: "JPMorgan, Amex, Capital One, fintech issuers", valueCapture: 4,
        economics: { grossMargin: [30, 50], capitalIntensity: 3, concentration: 3 },
        linksTo: ["banking", "fintech"],
        deeper: "Takes most of the interchange (~1.5-1.8% on US credit) but funds rewards and eats credit risk: really a lending business wearing a payments jacket. Amex's closed loop keeps every slice." },
      { id: "network", name: "Networks (the duopoly)", what: "Routing, rules, settlement, brand", players: "Visa, Mastercard, UnionPay, Amex", valueCapture: 5,
        economics: { grossMargin: [75, 85], capitalIntensity: 1, concentration: 5 },
        linksTo: ["saas", "banking"],
        deeper: "~0.1-0.15% of everything, near-zero marginal cost, two-sided network effects compounding since 1958. 50%+ operating margins, minimal capex: arguably the best business model ever listed. The bear case is not competition; it is the referee (regulators) and the state building its own road." },
      { id: "acquiring", name: "Acquiring & processing", what: "Merchant accounts, terminals, authorization", players: "Fiserv, Adyen, Worldpay, Chase Paymentech", valueCapture: 3,
        economics: { grossMargin: [20, 40], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas", "banking"],
        deeper: "0.2-0.5% take, scale-driven, and commoditizing: unless wrapped in software. Adyen's single-platform model and the ISV-embedded wave are the differentiation; legacy processors roll up for scale." },
      { id: "gateway", name: "Gateways & orchestration", what: "The API layer: checkout, tokens, routing", players: "Stripe, PayPal/Braintree, Checkout.com", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas", "cloud"],
        deeper: "Stripe turned acceptance into seven lines of code and priced the bundle at ~2.9% + 30¢: the developer moat. Orchestration (smart routing across processors) is the enterprise counter-trend squeezing everyone's take rate." },
      { id: "value-added", name: "Value-added services", what: "Fraud, data, loyalty, issuing-as-a-service, B2B", players: "Networks' fastest segment, fintech specialists", valueCapture: 4,
        economics: { grossMargin: [50, 70], capitalIntensity: 1, concentration: 2 },
        linksTo: ["saas", "asset-management"],
        deeper: "Where the growth narrative lives: Visa/Mastercard's services lines grow ~2x core volume, monetizing fraud tools, tokens, and data on rails they already own: the answer to 'what happens when volume growth slows.'" },
      { id: "crossborder", name: "Cross-border & remittances", what: "FX, correspondent banking, remittance corridors", players: "Networks, Wise, Western Union, SWIFT, stablecoins", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 2, concentration: 3 },
        linksTo: ["banking", "crypto"],
        deeper: "The richest toll (remittances still cost ~6%; network cross-border fees are their highest-margin volume) and therefore the most attacked: Wise's mid-market rates, RTP interlinking, and stablecoin settlement all aim here first." }
    ]
  },

  financials: {
    businessModel: [
      "The keystone formula: revenue = volume × take rate. Volume = transactions × ticket size, driven by consumer spend, cash displacement, and commerce growth: a GDP-plus compounder. Take rates differ by two orders of magnitude across the stack (network ~0.1%, gateway bundle ~2.9%): position in the split IS the business model. Networks convert this into 50%+ operating margins and torrential FCF because their cost base barely moves with volume: pure operating leverage on human commerce.",
      "Read the P&Ls by layer: networks report volume growth, cross-border mix (the margin kicker), and value-added services growth; acquirers report net take rate (bps) and volume, and are judged on take-rate stability vs commoditization; issuers are credit businesses: NIM, rewards cost, and charge-offs dominate. The pool's revenue is ~$2.4T but the profit skews violently toward the network layer and US credit interchange; a third of payments revenue is actually float income (net interest on balances), which rises and falls with rates."
    ],
    fingerprint: { grossMargin: 60, recurringRevenue: 85, capitalIntensity: 20, pricingPower: 70, cyclicality: 30, operatingLeverage: 80 },
    lines: [
      { label: "Payment volume & transactions", note: "The tape: total volume growth, transactions, ticket size" },
      { label: "Take rate (net revenue bps)", note: "The competitive scoreboard: stable = moat, sliding = commoditizing" },
      { label: "Cross-border volume", note: "The networks' margin kicker: travel + B2B FX at premium fees" },
      { label: "Value-added services", note: "The second growth engine: fraud, tokens, data, ~2x core growth" },
      { label: "Incentives & rebates", note: "Contra-revenue paid to win bank/merchant deals: watch it creep" }
    ],
    unitEconomics: {
      unit: "per $100 US credit-card purchase (illustrative)",
      items: [
        { label: "Merchant pays (MDR)", value: "~$2.00-2.50", note: "the full toll on the transaction" },
        { label: "Issuer keeps (interchange)", value: "~$1.50-1.80", note: "funds rewards, eats credit risk" },
        { label: "Acquirer/gateway keeps", value: "~$0.20-0.50", note: "more if software-bundled (Stripe class)" },
        { label: "Network keeps", value: "~$0.10-0.15", note: "the smallest slice, the best economics" }
      ]
    }
  },

  kpiRefs: ["saas-nrr", "bank-nim"],
  kpiLocal: [
    {
      id: "pay-take-rate", name: "Net Take Rate", industries: ["payments"],
      definition: "Net revenue as a share of payment volume processed, in basis points.",
      formula: "Take rate (bps) = net revenue / total payment volume × 10,000",
      interpretation: "The single number that says whether a payments company has pricing power or is being commoditized. Networks ~11-13bps net; acquirers ~20-50bps; Stripe-class bundles ~290bps gross on small merchants.",
      healthy: "Flat-to-rising take rate with volume growth", warning: "Take rate sliding faster than volume grows (mix or competition)" }
  ],

  health: {
    intro: "Payments health is volume momentum, take-rate integrity, and regulatory insulation: the model is so good that the risks are mostly external.",
    pillars: [
      { name: "Volume growth", weight: 25, metrics: "Payment volume vs consumer spend, transactions", healthy: "GDP-plus with cash-displacement kicker", warning: "Volume lagging nominal spend (share loss)" },
      { name: "Take-rate integrity", weight: 25, metrics: "Net revenue bps trend, incentive creep", healthy: "Stable-to-rising, incentives contained", warning: "Grinding compression, rebates ballooning" },
      { name: "Mix quality", weight: 20, metrics: "Cross-border share, services share, credit vs debit", healthy: "Rising cross-border + services mix", warning: "Domestic-debit-heavy, cap-exposed mix" },
      { name: "Regulatory insulation", weight: 15, metrics: "Interchange-cap exposure, antitrust docket", healthy: "Diversified across regimes", warning: "One ruling from a re-priced pool (US credit caps)" },
      { name: "Rail relevance", weight: 15, metrics: "Position vs RTP/A2A/wallets in each market", healthy: "Riding or owning the new rails", warning: "Being routed around (the India lesson)" }
    ],
    scoringNote: "Score the layer, not the label: a 'fintech' that is really an issuer should be scored as a credit business."
  },

  valuation: {
    intro: "The market prices the networks as perpetual compounders and everything below them on take-rate durability: the multiple IS a judgment about commoditization.",
    methods: [
      { name: "P/E on forward earnings (networks)", use: "Visa/Mastercard: stable 25-30x franchises", avoid: "Treating regulatory repricing as noise: it is the tail risk", strengths: "Clean, comparable, decades of history", weaknesses: "Embeds permanence; India/regulation test it", range: { low: 22, high: 32, asOf: 2024, note: "the compounder premium" } },
      { name: "EV / EBITDA (processors/acquirers)", use: "Fiserv, Worldpay class: scale-economics businesses", avoid: "Paying network multiples for commoditizing layers", strengths: "Standard for the plumbing", weaknesses: "Misses take-rate trajectory", range: { low: 10, high: 16, asOf: 2024, note: "software attach earns the top of the range" } },
      { name: "Growth-adjusted revenue multiples (fintech)", use: "Stripe/Adyen class: price volume growth + take-rate durability", avoid: "2021's mistake: paying SaaS multiples for interchange pass-through", strengths: "Fits pre-margin growth", weaknesses: "Gross vs net revenue confusion burned a vintage of investors", range: { low: 4, high: 12, asOf: 2024, note: "x NET revenue, growth-dependent" } },
      { name: "DCF with regulatory scenarios", use: "The networks' tail risks: run explicit cap/RTP scenarios", avoid: "Single-path DCFs on politically-priced cash flows", strengths: "Makes the real debate explicit", weaknesses: "Scenario weights are the answer in disguise", range: { low: 0, high: 0, asOf: 2024, note: "framework, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a payments name: net revenue times margin times a durability multiple, minus net debt.",
      inputs: [
        { id: "vc-rev", label: "Net revenue ($B)", min: 0.5, max: 40, step: 0.5, value: 10, fmt: "money" },
        { id: "vc-margin", label: "EBITDA margin (%)", min: 10, max: 70, step: 5, value: 45, fmt: "pct" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 28, step: 1, value: 16, fmt: "mult" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns the networks as core compounders (the highest-quality toll on global consumption), trades the processor layer on take-rate evidence, and treats state rails + stablecoins as the decade's structural short-the-moat debate: real enough to monitor monthly, slow enough not to panic. The 2021 lesson is carved on the wall: never confuse gross volume with net revenue.",
    debates: [
      { topic: "Are the card networks' moats permanent or politically rented?", bull: "Two-sided acceptance built over 65 years, fraud liability, rewards addiction, and cross-border reach: no RTP scheme replicates the bundle; every 'Visa-killer' since 2010 ended up riding Visa's rails. Services growth means they win even as rails multiply.", bear: "India proved the unthinkable: a state rail (UPI) took the volume and the networks kept the crumbs. Interchange is a political price, not a market one: one US credit-cap ruling reprices the whole US pool, and the multiple assumes it never happens." },
      { topic: "Is the acquiring/processor layer investable or structurally commoditizing?", bull: "Scale + software attach = durable mid-teens growth at reasonable multiples (Adyen's single platform, Fiserv's Clover): the plumbing consolidates into a few winners with real operating leverage.", bear: "Take rates only compress: orchestration layers auction every transaction, ISVs capture the merchant relationship, and the layer's history is a graveyard of roll-ups that bought growth and rented margins." },
      { topic: "Stablecoins: cross-border revolution or regulatory arbitrage with a countdown?", bull: "Sub-second, sub-cent settlement vs a 6%-cost remittance system and T+2 correspondent chains: with US legislation blessing issuers, the first real new rail since cards: whoever owns distribution (exchanges, wallets, even Visa settling in USDC) owns the corridor.", bear: "The hard part of payments was never settlement speed: it is compliance, reversibility, FX liquidity, and the last mile into local currency: stablecoins solve the easy 10% and inherit the hard 90%, while banks' own RTP interlinking closes the gap quietly." }
    ],
    cycle: {
      where: "Mature-growth: the pool compounds ~5% toward $3.1T (2028), the easy fintech money is gone, and returns now come from position (layer) selection rather than category beta. Rate cuts trim the float-income third of the pool; consumer spend stays the volume metronome.",
      drivers: "Nominal consumer spending, cash displacement pace, cross-border travel, rates (float income), and the regulatory docket.",
      leads: [
        "Monthly network volume disclosures + weekly card-spend trackers (banks publish free)",
        "Cross-border travel data: the margin mix signal",
        "Interchange litigation/regulation docket (US credit caps = the tail risk)",
        "UPI/Pix monthly transaction stats: the state-rail scoreboard, published free",
        "Stablecoin settlement volumes (public chain data): the new-rail experiment's tape"
      ]
    },
    exposure: [
      { vehicle: "Networks (Visa, Mastercard)", note: "The core compounders: toll on global consumption + services optionality" },
      { vehicle: "Modern acquirers (Adyen class)", note: "The take-rate-durability trade: evidence over story" },
      { vehicle: "Issuer/credit hybrids (Amex)", note: "Closed-loop economics: payments + premium credit in one" },
      { vehicle: "Fintech rails (Stripe pre-IPO, PayPal)", note: "The developer layer: growth vs commoditization knife-edge" },
      { vehicle: "Legacy processors (Fiserv class)", note: "Cash-flow value with Clover-style software kickers" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Volume, cross-border mix, take rate, incentives: the four-line checkup" },
      { when: "Monthly", what: "UPI/Pix stats; bank card-spend trackers" },
      { when: "Legislative sessions", what: "US credit interchange bills: the sector's biggest single repricing risk" },
      { when: "Ongoing", what: "Stablecoin regulation + network stablecoin pilots (Visa USDC settlement class news)" }
    ],
    data: [
      { series: "Network operating metrics (V/MA quarterly)", source: "company IR (free)", why: "The primary tape: volume, cross-border, take rate" },
      { series: "UPI monthly statistics", source: "NPCI (free)", why: "The state-rail counterfactual, live" },
      { series: "Pix statistics", source: "Banco Central do Brasil (free)", why: "Second data point on A2A displacement" },
      { series: "BIS payments statistics", source: "bis.org (free)", why: "Cross-country cash/digital mix" },
      { series: "Fed payments studies + Nilson summaries", source: "free releases", why: "US volume and interchange structure" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Volume dips with spend but the toll model cushions: debit holds, credit ticket sizes fall, cross-border (travel) hits hardest. Networks outperform issuers (no credit risk)." },
      { regime: "Inflation", behavior: "The hidden friend: tolls are % of nominal spend: pricing power without pricing decisions. Issuers gain on NIM until charge-offs catch up." },
      { regime: "Rate cuts", behavior: "Float income (a third of the global pool) compresses; volume-levered names outperform balance-levered ones." },
      { regime: "Regulatory shock", behavior: "Cap announcements reprice the whole layer instantly (Durbin 2011 template): own the diversified, services-heavy names; the pure-domestic-interchange plays take the hit." }
    ]
  },

  players: [
    { name: "Visa", role: "The largest network", country: "US", real: true, note: "~$15T volume/yr; the toll-road archetype at 50%+ operating margins" },
    { name: "Mastercard", role: "The other duopolist", country: "US", real: true, note: "Faster services growth; the same fortress, slightly smaller" },
    { name: "Stripe", role: "The developer rail", country: "US", real: true, note: "Private; made acceptance an API and priced the bundle" },
    { name: "PayPal", role: "The internet's first wallet", country: "US", real: true, note: "400M+ accounts; the turnaround-vs-decay debate stock" },
    { name: "Adyen", role: "The single-platform acquirer", country: "NL", real: true, note: "Enterprise processing at software margins: the take-rate-durability proof case" },
    { name: "Fiserv", role: "Legacy processor + Clover", country: "US", real: true, note: "The scale consolidator; Clover is the software kicker" },
    { name: "American Express", role: "The closed loop", country: "US", real: true, note: "Network + issuer in one: keeps every slice, owns the premium customer" },
    { name: "NPCI (UPI)", role: "The state-rail template", country: "IN", real: true, note: "~14B tx/month at near-zero fees: the counter-model the whole industry studies" }
  ],

  geography: [
    { country: "US", role: "The profit pool", note: "Highest interchange, rewards culture, the networks' home fortress" },
    { country: "CN", role: "The parallel universe", note: "Alipay/WeChat leapfrogged cards; UnionPay guards the border" },
    { country: "IN", role: "The state-rail proof", note: "UPI took the volume; the world's regulators took notes" },
    { country: "BR", role: "Pix nation", note: "A2A displaced cash and dented cards in 4 years" },
    { country: "EU", role: "The regulated pool", note: "Capped interchange, open banking, and a wish for rail sovereignty" },
    { country: "GB", role: "Fintech lab", note: "Wise, Revolut, Checkout.com: the challenger cluster" }
  ],

  cycles: [
    { year: 2008, title: "Visa's IPO", kind: "boom", text: "The largest US IPO to date, priced in a crisis: the market discovers the networks are not banks. Lesson: the toll road has no credit risk." },
    { year: 2011, title: "The Durbin amendment", kind: "shift", text: "US debit interchange capped overnight; economics reroute to credit and exempt players. Lesson: interchange is a political price." },
    { year: 2016, title: "Demonetization + UPI", kind: "shift", text: "India yanks its cash and builds a public rail; UPI becomes the world's biggest payments experiment. Lesson: states can build rails too." },
    { year: 2021, title: "The fintech bubble", kind: "boom", text: "Payments startups price gross volume as net revenue; $100B+ of venture money learns the difference. Lesson: take rate is the business." },
    { year: 2022, title: "The repricing", kind: "bust", text: "PayPal (75%) and the fintech complex crater as growth normalizes. Lesson: the pool compounds; the labels on it reprice." }
  ],

  risks: [
    { name: "US credit interchange regulation", severity: 4, likelihood: 3, transmission: "Caps on the world's richest interchange pool → rewards economics unravel → issuer and network US revenue reprices in one ruling." },
    { name: "State rails winning A2A globally", severity: 4, likelihood: 3, transmission: "UPI/Pix template spreads → domestic card volume routed around → networks left with cross-border and services (still good, much smaller)." },
    { name: "Take-rate commoditization below the network layer", severity: 3, likelihood: 4, transmission: "Orchestration + ISV capture → acquirer/gateway margins grind down → the middle of the stack consolidates or dies." },
    { name: "Stablecoin cross-border breakthrough", severity: 3, likelihood: 2, transmission: "Compliant stablecoin corridors at near-zero cost → the remittance and B2B FX premium (the richest toll) compresses first." },
    { name: "Systemic fraud/cyber event", severity: 4, likelihood: 2, transmission: "A network-level breach or authorization outage → trust, the only real product, takes the hit → regulatory response compounds it." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Every time a card is swiped, about 2% of the purchase quietly goes to the companies that move the money: mostly to the bank that issued the card (funding your rewards points), a little to the machine's provider, and a tiny slice to Visa or Mastercard. That tiny slice, taken trillions of times a year, built 2 of the most profitable companies on Earth."] },
    L2: { title: "Intermediate", text: ["The industry earned ~$2.4T in 2023 on 3.4T transactions, heading to ~$3.1T by 2028 (McKinsey). The stack: issuers (banks: biggest slice, carry credit risk), networks (Visa/Mastercard: smallest slice, best margins), acquirers/gateways (merchant side: commoditizing unless wrapped in software like Stripe). New threats are real: India's UPI and Brazil's Pix are government rails that move money nearly free."] },
    L3: { title: "Advanced", text: ["The formula is volume × take rate: judge every company by which layer it occupies and whether its take rate is defensible. Networks earn ~11-13bps net at 50%+ operating margins with cross-border and value-added services as the growth kickers. A third of global payments revenue is actually float (net interest): rate-sensitive. The 2021 fintech vintage's fatal error: valuing gross volume as if it were net revenue."] },
    L4: { title: "Expert", text: ["Trade the four-line quarterly checkup (volume, cross-border mix, take rate, incentive creep) and the regulatory docket: Durbin 2011 is the template for how fast interchange politics reprices equity. The live debates: network moat permanence vs the India precedent, acquirer commoditization vs software attach, and stablecoins' assault on the cross-border premium. Position by layer, not label."] },
    L5: { title: "Institutional", text: ["Allocator's frame: the networks are the portfolio's toll on global consumption: GDP-plus compounding, no credit risk, 25-30x earnings that embeds a permanence assumption you must consciously underwrite. The structural short thesis (state rails + caps + A2A) has one confirmed case (India) and a slow fuse everywhere else: monitor UPI/Pix stats monthly, own the services-diversified names, and remember that in payments, the regulator is the only competitor that has ever actually won." ] }
  },

  quiz: [
    { q: "On a $100 US credit purchase, Visa/Mastercard keep roughly:", choices: ["$2.50", "$1.50", "$0.10-0.15: the smallest slice, on the widest base", "Nothing"], answer: 2, explain: "The issuer takes ~$1.50-1.80 (funding rewards, eating credit risk); the network's tiny toll at near-zero marginal cost is the best economics in the stack." },
    { q: "Global payments revenue in 2023 was about:", choices: ["$240B", "$2.4T, heading toward ~$3.1T by 2028", "$24T", "$50B"], answer: 1, explain: "McKinsey's Global Payments Report: ~$2.4T on 3.4T transactions, compounding ~5%/yr." },
    { q: "India's UPI matters to the whole industry because:", choices: ["It uses Visa rails", "It proved a state-built rail can take a giant market's volume at near-zero fees", "It failed", "It only handles cash"], answer: 1, explain: "~14B transactions/month routed around card economics: the template Brazil (Pix) followed and every regulator studies." },
    { q: "The 2021 fintech vintage's classic valuation error was:", choices: ["Ignoring growth", "Valuing gross payment volume as if it were net revenue: take rate is the business", "Too much profit focus", "Ignoring crypto"], answer: 1, explain: "A ~2.9% gross bundle can be ~0.5% net after interchange pass-through: confusing the two misprices a company by 5x." },
    { q: "Interchange is best understood as:", choices: ["A market price", "A political price: Durbin 2011 and EU caps repriced whole pools overnight", "A tax", "Fixed forever"], answer: 1, explain: "Fee caps are the sector's recurring earthquake: regulation, not competition, is what has actually cut the toll." },
    { q: "A third of global payments revenue actually comes from:", choices: ["Fraud fees", "Float: net interest on balances, which moves with rates", "Rewards", "Terminals"], answer: 1, explain: "The pool is rate-sensitive in a way card-centric investors forget: cuts compress the float third." },
    { q: "The networks' answer to slowing volume growth is:", choices: ["Higher swipe fees", "Value-added services (fraud, tokens, data) growing ~2x core on rails they already own", "Buying banks", "Leaving cross-border"], answer: 1, explain: "Services turn the network from a toll into a platform: the core of the modern bull case." },
    { q: "Cross-border payments are strategically important because:", choices: ["They are low margin", "They carry the richest tolls (remittances ~6%): making them the first target for stablecoins and RTP linkage", "Nobody uses them", "They are unregulated"], answer: 1, explain: "The premium corridor funds the networks' margins and attracts every new-rail experiment: the front line of rails vs rails." }
  ],

  sources: [
    { name: "McKinsey Global Payments Report 2024 ($2.4T pool, $3.1T by 2028)", url: "https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-in-2024-simpler-interfaces-complex-reality", feeds: "market size, growth" },
    { name: "NPCI UPI statistics", url: "https://www.npci.org.in/what-we-do/upi/product-statistics", feeds: "state-rail volumes" },
    { name: "Visa/Mastercard quarterly operating metrics", url: "https://investor.visa.com", feeds: "volumes, take rates" },
    { name: "BIS payments statistics", url: "https://www.bis.org/statistics/payment_stats.htm", feeds: "cross-country mix" }
  ]
};
