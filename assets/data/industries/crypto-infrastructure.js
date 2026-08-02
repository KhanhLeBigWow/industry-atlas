/* Industry Atlas - CRYPTO INFRASTRUCTURE (full module)
 * Anchors: Coinbase 2024 revenue ~$6.6B (10-K); stablecoin supply ~$300B
 * (2026, post GENIUS Act); Circle IPO June 2025 (NYSE: CRCL), USDC reserves
 * earning Treasury yield; US spot bitcoin ETFs ~$100B+ AUM within 18 months
 * of Jan 2024 launch; April 2024 halving cut miner issuance to 3.125 BTC. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["crypto-infrastructure"] = {
  meta: {
    id: "crypto-infrastructure", name: "Crypto Infrastructure", sector: "digital-assets", status: "full",
    tagline: "The exchanges, custodians, stablecoin issuers, and miners that turned a protocol into an industry: picks and shovels for programmable money.",
    marketSize: { value: 60, unit: "$B", asOf: 2025, note: "annual revenue across exchanges, custody, stablecoin float income, and mining; swings violently with the crypto cycle" },
    cagr: { value: 15, range: [-5, 40], horizon: "2025-2030, cycle-dependent" },
    maturity: "adolescent", cyclicality: 5, capitalIntensity: 3, regulation: 4, disruption: 4
  },
  newsQuery: '(Coinbase OR stablecoin OR "bitcoin ETF" OR Binance OR "crypto exchange" OR USDC)',

  overview: {
    definition: "Crypto infrastructure is the businesses that make digital assets usable: exchanges that match buyers and sellers, custodians that hold keys, stablecoin issuers that wrap dollars in tokens, and miners/validators that secure the networks. The protocols may be decentralized; the money is made by intermediaries.",
    howItWorks: [
      "The industry's great irony: a movement born to eliminate intermediaries built its economics on new ones. Exchanges (Coinbase, Binance, Kraken) earn trading fees of 5-60bps per trade, plus listing, custody, and staking revenue: classic market-infrastructure economics with 10x the volatility. Coinbase's ~$6.6B of 2024 revenue (10-K) tracks crypto prices with beta well above 1: volumes explode in bull markets and evaporate in winters.",
      "Stablecoins became the industry's most bankable business by accident: issue a token 1:1 against dollars, invest the reserves in T-bills, keep the interest. At ~$300B of aggregate supply (2026) and 4-5% short rates, the float earns $12B+/yr for doing approximately nothing: Circle (USDC, NYSE-listed since June 2025) and Tether split most of it. The 2025 US GENIUS Act gave the model a federal rulebook, converting regulatory risk into a moat for compliant issuers.",
      "Mining is the industrial layer: warehouses of ASICs converting electricity into bitcoin security. The April 2024 halving cut block rewards to 3.125 BTC, squeezing high-cost miners and accelerating 2 pivots: vertical integration into cheap power, and conversion of sites into AI data centers (the same substations and cooling serve both masters, and AI tenants pay steadier rent than hashprice).",
      "The institutional turn rewired everything: US spot bitcoin ETFs (approved January 2024) gathered ~$100B+ within 18 months, making BlackRock a top holder of bitcoin exposure and pushing custody, prime brokerage, and settlement toward regulated rails. Tokenization pilots (BlackRock's BUIDL money-market fund, JPMorgan's Onyx) point at the endgame: traditional assets settling on crypto plumbing, with the infrastructure firms as the tollbooths."
    ],
    history: [
      { era: "2009-2013", title: "Cypherpunk era", text: "Bitcoin's first exchanges are hobby projects; Mt. Gox handles 70% of volume, then loses 850k BTC. Lesson one: custody is the product." },
      { era: "2014-2017", title: "The retail on-ramp", text: "Coinbase makes buying bitcoin as easy as a bank app; the 2017 ICO mania mints the first exchange fortunes; Tether quietly becomes crypto's dollar." },
      { era: "2018-2021", title: "Institutional flirtation", text: "CME futures, custody startups, and the 2021 bull run: Coinbase IPOs at ~$85B; Binance becomes the offshore giant; DeFi builds a parallel system." },
      { era: "2022-2023", title: "The reckoning", text: "Terra, Celsius, and FTX collapse in sequence; $8B of customer funds vanish at FTX; the industry's case for regulation writes itself." },
      { era: "2024-present", title: "The regulated era", text: "Spot ETFs, the GENIUS Act for stablecoins, Circle's IPO, banks entering custody: the infrastructure institutionalizes while offshore volume persists." }
    ],
    trends: [
      { title: "Stablecoins as the killer app", direction: "up", text: "~$300B supply settling trillions annually; payments companies (Visa, Stripe) integrating; the dollar's newest export channel." },
      { title: "ETF-ization of access", direction: "up", text: "Spot ETFs moved the marginal buyer from exchange apps to brokerage accounts: fee compression for exchanges, scale for custodians." },
      { title: "Miners becoming data centers", direction: "shift", text: "Post-halving economics push miners toward AI hosting: power portfolios are worth more than hashrate." },
      { title: "Tokenization of TradFi", direction: "up", text: "Money-market funds, treasuries, and private credit issuing on-chain: the pilots are small, the direction is unmistakable." },
      { title: "Regulatory bifurcation", direction: "shift", text: "US rules crystallizing (ETFs, GENIUS Act) while offshore venues keep the leverage and the long tail: two parallel industries." }
    ],
    outlook: "The infrastructure layer keeps monetizing whichever narrative wins: trading fees in manias, float income in calm, hosting revenue in winters. Stablecoins look like the durable franchise (float economics plus payments utility), exchanges consolidate toward regulated scale, and mining converges with the AI power buildout. The perennial risks: a cycle deep enough to gut volumes for years, and the possibility that banks, once fully authorized, simply absorb the profitable parts."
  },

  structure: {
    suppliers: [
      { name: "ASIC makers (Bitmain, MicroBT)", note: "Mining hardware: a Chinese duopoly upstream of 'decentralization'" },
      { name: "Power producers & grids", note: "Miners are grid-scale load; electricity is 60-80% of mining opex" },
      { name: "Cloud & security vendors", note: "Exchanges are software firms with nation-state-grade threat models" },
      { name: "Banking partners", note: "Fiat rails in and out: the chokepoint regulators actually control" }
    ],
    producers: [
      { name: "Exchanges (Coinbase, Binance, Kraken, OKX)", note: "Matching engines + custody + listing: the toll collectors" },
      { name: "Stablecoin issuers (Tether, Circle)", note: "Tokenized dollars; the reserves earn the profit" },
      { name: "Miners (Marathon, Riot, Core Scientific class)", note: "Industrial bitcoin security; increasingly AI landlords" },
      { name: "Custodians (Coinbase Custody, BitGo, Anchorage)", note: "Key management for institutions; the ETF plumbing" }
    ],
    distributors: [
      { name: "Brokerages & ETF issuers", note: "BlackRock/Fidelity ETFs put bitcoin in every 401(k) menu adjacent" },
      { name: "Fintech apps (PayPal, Cash App, Revolut)", note: "Embedded crypto for the mainstream" }
    ],
    customers: [
      { name: "Retail traders", note: "The cycle's fuel; fee-rich, sentiment-driven" },
      { name: "Institutions & funds", note: "Hedge funds, corporates, now ETF APs: the volume base load" },
      { name: "Cross-border users", note: "Stablecoins as dollar access where banks fail: the humanitarian use case with real volume" }
    ],
    regulators: [
      { name: "SEC / CFTC", note: "The jurisdictional tug-of-war; ETF approvals reset the map" },
      { name: "Treasury / OCC (GENIUS Act regime)", note: "Stablecoin reserves, audits, and issuer licensing" },
      { name: "FATF / global AML", note: "Travel rule and sanctions screening: compliance is the real product tier" }
    ],
    capital: [
      { name: "Public equity", note: "Coinbase, Circle, the miners: crypto beta in brokerage-account form" },
      { name: "Venture capital", note: "a16z crypto class funds; the 2021 vintage is still digesting" },
      { name: "Token treasuries", note: "Protocols self-fund from their own token reserves: reflexive and fragile" }
    ]
  },

  valueChain: {
    intro: "From electricity to a retirement account: the chain secures the ledger, wraps the dollar, matches the trade, and custodies the keys. Fee pools concentrate at the trust points: exactly where decentralization gave up.",
    stages: [
      { id: "mining", name: "Mining & validation", what: "Securing the ledger with hashpower or stake", players: "Marathon, Riot, Foundry pools; ETH stakers", valueCapture: 2,
        economics: { grossMargin: [20, 45], capitalIntensity: 5, concentration: 3 },
        linksTo: ["utilities", "semiconductors", "data-infrastructure"],
        deeper: "Commodity production of security: revenue = coin price x issuance share, costs = power + ASIC depreciation. The halving cycle structurally squeezes margins every 4 years; survivors own sub-4-cent power. The AI pivot re-rates the asset: a miner's substation queue position now matters more than its hashrate." },
      { id: "stablecoins", name: "Stablecoin issuance", what: "Tokenized dollars; reserves earn the float", players: "Tether, Circle, PayPal USD", valueCapture: 5,
        economics: { grossMargin: [80, 95], capitalIntensity: 1, concentration: 5 },
        linksTo: ["banking", "payments", "capital-markets"],
        deeper: "The best business in crypto: ~$300B of interest-free deposits invested in T-bills. Tether's reported profits rival Goldman's with ~100 employees. The GENIUS Act trades freedom for franchise: compliant issuers get banking access; the moat is now a license." },
      { id: "exchange", name: "Exchanges & trading", what: "Matching, listing, market data", players: "Binance, Coinbase, Kraken, Hyperliquid", valueCapture: 4,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 4 },
        linksTo: ["market-infrastructure", "fintech"],
        deeper: "Market-infrastructure economics on a rollercoaster: take rates compress with institutionalization (retail 40bps+, institutional low single digits), so exchanges diversify into subscriptions, staking, custody, and derivatives, where offshore venues still dominate open interest." },
      { id: "custody", name: "Custody & prime", what: "Key management, settlement, financing", players: "Coinbase Custody, BitGo, Anchorage, Fireblocks", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 2, concentration: 4 },
        linksTo: ["asset-management", "banking"],
        deeper: "The ETF era's quiet winner: every spot ETF needs a qualified custodian, and Coinbase custodies most of them: single-point-of-failure concerns included. Prime services (lending, settlement) rebuild post-FTX with actual segregation this time." },
      { id: "defi", name: "DeFi protocols", what: "Automated exchanges, lending, derivatives on-chain", players: "Uniswap, Aave, Maker/Sky class", valueCapture: 2,
        economics: { grossMargin: [90, 99], capitalIntensity: 1, concentration: 2 },
        linksTo: ["crypto", "fintech"],
        deeper: "Software eating the intermediaries that ate the disintermediation: AMMs and lending pools run at near-zero marginal cost with fee switches votable by tokenholders. Real innovation, unresolved question: whether value accrues to tokens or leaks to users." },
      { id: "onramps", name: "Distribution & on-ramps", what: "ETFs, fintech apps, payment integrations", players: "BlackRock/Fidelity ETFs, PayPal, Stripe", valueCapture: 3,
        economics: { grossMargin: [30, 60], capitalIntensity: 1, concentration: 3 },
        linksTo: ["asset-management", "payments", "ecommerce"],
        deeper: "The marginal buyer moved from exchange apps to brokerage accounts and checkout flows: TradFi distribution captures the relationship while crypto infrastructure keeps the plumbing fees. Stripe's stablecoin acquiring and Visa's USDC settlement are the bridgeheads." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share the label. Exchanges: revenue = volume x take rate, with volume a function of price cycles (Coinbase's revenue tripled in 2024's recovery); costs are compliance, security, and engineering, so incremental volume is nearly pure margin: operating leverage both directions. Stablecoin issuers: float x short rates minus distribution rev-share (Coinbase takes roughly half of Circle's USDC economics): a money-market fund wearing a token. Miners: coin price x issuance share minus power: commodity producers whose costs are fixed in fiat and revenue in crypto.",
      "The sector's financial signature is reflexivity: crypto prices drive volumes, which drive revenues, which drive the equities, which sit in indexes that... the equities are leveraged crypto beta. The counterweights are the annuity streams: custody fees on ETF assets, stablecoin float, subscription products. Watch the mix shift each cycle: every winter, the survivors emerge with more recurring revenue and fewer trading-fee dependencies."
    ],
    fingerprint: { grossMargin: 65, recurringRevenue: 35, capitalIntensity: 40, pricingPower: 45, cyclicality: 95, operatingLeverage: 85 },
    lines: [
      { label: "Trading volume & take rate", note: "The cycle tape: retail bps premium vs institutional compression" },
      { label: "Stablecoin float & rate capture", note: "Supply x short rates minus distribution costs" },
      { label: "Custody/ETF assets", note: "The annuity layer: bps on institutionally-held coins" },
      { label: "Hashprice & power cost", note: "Mining's entire economics in 2 numbers" },
      { label: "Subscription & services", note: "The diversification scoreboard each winter" }
    ],
    unitEconomics: {
      unit: "per $100 retail trade vs $1,000 stablecoin float (illustrative)",
      items: [
        { label: "Retail trade fee", value: "~$0.40-0.60", note: "Coinbase-class consumer take rate" },
        { label: "Institutional trade fee", value: "~$0.02-0.05", note: "the compression institutionalization brings" },
        { label: "Stablecoin float income", value: "~$45/yr per $1,000", note: "at ~4.5% short rates, before rev-share" },
        { label: "Mining gross margin", value: "~30-45%", note: "at post-halving hashprice with competitive power" }
      ]
    }
  },

  kpiRefs: ["pay-take-rate", "am-organic-growth"],
  kpiLocal: [
    {
      id: "ci-float-yield", name: "Stablecoin Float Economics", industries: ["crypto-infrastructure"],
      definition: "Interest earned on stablecoin reserves, net of distribution rev-share: the sector's most durable profit pool.",
      formula: "Float income = average supply x reserve yield; net = minus partner rev-share",
      interpretation: "At ~$300B supply and 4-5% rates the pool is $12B+/yr; rate cuts compress it dollar-for-dollar. Issuers with owned distribution keep more of it.",
      healthy: "Growing supply offsetting rate cuts; diversified distribution", warning: "Supply concentrated in one venue; rates falling with no volume offset" }
  ],

  health: {
    intro: "Infrastructure health = surviving the cycle you cannot control: recurring-revenue mix, custody-grade trust, regulatory standing, and balance-sheet discipline against 80% drawdowns.",
    pillars: [
      { name: "Revenue mix quality", weight: 25, metrics: "Recurring (float, custody, subs) vs trading share", healthy: "40%+ recurring", warning: "Trading fees carrying everything (2021 pattern)" },
      { name: "Trust & security record", weight: 25, metrics: "Custody segregation, proof of reserves, hack history", healthy: "Clean record, audited reserves", warning: "Commingling, opaque reserves (the FTX pattern)" },
      { name: "Regulatory standing", weight: 20, metrics: "Licenses, GENIUS compliance, jurisdiction mix", healthy: "Licensed in core markets", warning: "Offshore-only with US users" },
      { name: "Balance-sheet discipline", weight: 15, metrics: "Corporate coin holdings, leverage, cash runway", healthy: "Runway through a 2-year winter", warning: "Levered long own inventory" },
      { name: "Cost of production (miners)", weight: 15, metrics: "All-in power cost, fleet efficiency", healthy: "Sub-$0.04/kWh, current-gen fleet", warning: "Above-median cost into a halving" }
    ],
    scoringNote: "History's lesson: every cycle's biggest failure was a trust failure, not a technology failure. Score custody practices like a bank examiner."
  },

  valuation: {
    intro: "The market prices these as crypto beta with a business attached: multiples expand and collapse with the cycle, so the craft is normalizing volumes and separating annuity streams from mania streams.",
    methods: [
      { name: "EV / normalized revenue", use: "Exchanges: haircut bull-market volumes toward cycle averages", avoid: "Peak-quarter annualization (the classic 2021 error)", strengths: "Cycle honesty", weaknesses: "Normal is a guess in a 4-year cycle", range: { low: 4, high: 10, asOf: 2025, note: "x normalized revenue for scaled exchanges" } },
      { name: "Float-income multiple (stablecoins)", use: "Circle class: price the T-bill annuity", avoid: "Ignoring rate sensitivity and rev-share leakage", strengths: "Money-market economics are modelable", weaknesses: "Supply growth is crypto-cyclical", range: { low: 15, high: 30, asOf: 2025, note: "x net float income for compliant issuers" } },
      { name: "EV per EH/s + power assets (miners)", use: "Mining comps: hashrate plus the substation portfolio", avoid: "Valuing hashrate alone post-halving", strengths: "Captures the AI-hosting option", weaknesses: "Hashprice swings reprice everything", range: { low: 0, high: 0, asOf: 2025, note: "asset-based; the power pipeline drives premiums" } },
      { name: "Sum-of-the-parts", use: "Coinbase class: trading + custody + stablecoin share + ventures", avoid: "One multiple across annuity and mania revenue", strengths: "Matches the 3-species reality", weaknesses: "Segment disclosure is thin", range: { low: 0, high: 0, asOf: 2025, note: "framework" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a crypto-infrastructure firm: normalized revenue times a mix-quality multiple.",
      inputs: [
        { id: "vc-rev", label: "Normalized revenue ($B)", min: 0.5, max: 15, step: 0.5, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / revenue multiple", min: 2, max: 15, step: 0.5, value: 6, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -10, max: 10, step: 1, value: -3, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats crypto infrastructure as the investable expression of a volatile asset class: own the annuity-rich franchises (stablecoin float, custody scale) as the quality core, trade the exchanges as high-beta cycle vehicles, and treat miners as power-asset specials with a crypto kicker. Never confuse a bull-market P&L with a business model.",
    debates: [
      { topic: "Are stablecoins a generational franchise or a rate trade?", bull: "Zero-cost deposits at global scale, payments utility compounding independent of crypto prices, and a federal rulebook that licenses the moat: this is the money-market fund of the internet, early.", bear: "The float is 90% of profits and rates are cyclical; banks and money funds can issue tokenized deposits the moment it matters; and distribution (Coinbase's rev-share) already eats half the economics: a great business someone else can commoditize." },
      { topic: "Coinbase: category winner or melting toll road?", bull: "The regulated fortress: ETF custody monopoly-adjacent, USDC economics, derivatives buildout, and every US institutional flow defaults to it: the Schwab of a new asset class.", bear: "Take rates only compress: retail bps are 10x institutional and retail is exactly what ETFs cannibalize; each cycle the fee mix worsens while offshore venues keep the leverage volume." },
      { topic: "Do miners' AI pivots create value or admit defeat?", bull: "Power portfolios with interconnection queues are the scarcest asset in the AI buildout; converting hashrate sheds into GPU hosting doubles asset value overnight (the Core Scientific template).", bear: "It concedes mining's terminal economics: each halving halves revenue against fixed costs, and the AI tenants extract most surplus because miners negotiate from weakness." }
    ],
    cycle: {
      where: "Post-institutionalization mid-cycle: ETFs and the GENIUS Act converted access and rules from risks into rails; volumes and prices remain reflexive; the next stress test is a real credit event inside the now-larger stablecoin complex.",
      drivers: "Crypto prices (the dominant variable), short rates (float income), regulatory milestones, halving economics, and tokenization adoption.",
      leads: [
        "Stablecoin aggregate supply (public chain data, free): the liquidity tide",
        "Spot ETF net flows (issuer dashboards, free daily)",
        "Exchange volumes and take-rate disclosures (Coinbase quarterlies)",
        "Hashprice index (free mining dashboards): miner stress gauge",
        "Funding rates and open interest (free derivatives dashboards): leverage temperature"
      ]
    },
    exposure: [
      { vehicle: "Coinbase (COIN)", note: "The regulated exchange + custody + USDC share: quality beta" },
      { vehicle: "Circle (CRCL)", note: "Pure stablecoin float economics, post-2025 IPO" },
      { vehicle: "Miners (MARA, RIOT, CORZ class)", note: "Power-asset specials; the AI-hosting option" },
      { vehicle: "Spot ETFs (IBIT class)", note: "The clean asset exposure, no business risk" },
      { vehicle: "Galaxy/brokers", note: "Prime and asset-management picks-and-shovels" }
    ],
    catalysts: [
      { when: "Quarterly", what: "Coinbase take-rate and subscription mix; Circle float and supply" },
      { when: "Rate decisions", what: "Every FOMC cut compresses stablecoin float income directly" },
      { when: "Regulatory milestones", what: "Market-structure legislation, ETF options/altcoin approvals" },
      { when: "~2028", what: "The next halving: mining economics reset again" }
    ],
    data: [
      { series: "Stablecoin supply & flows", source: "public chain explorers (free)", why: "The sector's deposit base, live" },
      { series: "ETF flow dashboards", source: "issuer sites (free)", why: "Institutional demand tape" },
      { series: "Hashrate & hashprice", source: "free mining dashboards", why: "Miner margin proxy" },
      { series: "Coinbase/Circle filings", source: "sec.gov (free)", why: "The only audited windows into the economics" }
    ],
    playbook: [
      { regime: "Crypto bull", behavior: "Everything works, exchanges most: volumes and take rates both expand. Trim into euphoria; the mix always looks best at the top." },
      { regime: "Crypto winter", behavior: "Trading revenue falls 70%+; float and custody annuities prove who has a business. Accumulate the balance-sheet survivors." },
      { regime: "Rate cuts", behavior: "Stablecoin float compresses but risk appetite (volumes) usually offsets; net positive for exchanges, negative for pure issuers." },
      { regime: "Trust shock (an FTX event)", behavior: "Flight to regulated venues: the compliant franchises gain share in every crisis. Own the beneficiaries before the stress." }
    ]
  },

  players: [
    { name: "Coinbase", role: "The regulated US exchange", country: "US", real: true, note: "~$6.6B 2024 revenue; ETF custodian of choice; half of USDC economics" },
    { name: "Binance", role: "The offshore giant", country: "AE", real: true, note: "Largest global volumes; $4.3B US settlement (2023) and a compliance rebuild" },
    { name: "Tether", role: "The stablecoin incumbent", country: "SV", real: true, note: "USDT: the largest float, the fattest profits, the fewest employees" },
    { name: "Circle", role: "The compliant issuer", country: "US", real: true, note: "USDC; NYSE-listed June 2025; the GENIUS Act's designed winner" },
    { name: "Kraken / OKX / Bybit", role: "The exchange second tier", country: "US", real: true, note: "Derivatives depth and regional strongholds" },
    { name: "Marathon / Riot / Core Scientific", role: "Industrial miners", country: "US", real: true, note: "Hashrate + power portfolios; the AI-hosting conversions" },
    { name: "BitGo / Anchorage / Fireblocks", role: "Custody & infrastructure", country: "US", real: true, note: "Keys, wallets-as-a-service, settlement rails" },
    { name: "BlackRock (IBIT)", role: "The distribution whale", country: "US", real: true, note: "The ETF that made bitcoin a brokerage line item; BUIDL tokenization pilot" }
  ],

  geography: [
    { country: "US", role: "The regulated center", note: "ETFs, listed exchanges, the GENIUS regime: rules made it the hub it once chased away" },
    { country: "AE", role: "The offshore capital", note: "Dubai/Abu Dhabi licensing pulled the global venues" },
    { country: "SG", role: "Asia's compliance hub", note: "MAS licensing; the institutional gateway" },
    { country: "CH", role: "Crypto valley", note: "Zug foundations and Swiss private-bank custody" },
    { country: "SV", role: "The experiment", note: "El Salvador's bitcoin tender experiment: symbolism over volume" },
    { country: "CN", role: "The banned giant", note: "Mining exodus of 2021; ASIC manufacturing never left" }
  ],

  cycles: [
    { year: 2014, title: "Mt. Gox collapse", kind: "bust", text: "850k BTC lost; the first great custody failure. Lesson: in crypto, the custodian IS the counterparty risk." },
    { year: 2017, title: "ICO mania", kind: "boom", text: "Exchanges mint fortunes listing tokens; the SEC's enforcement decade begins. Lesson: the picks-and-shovels win every gold rush." },
    { year: 2021, title: "The everything rally", kind: "boom", text: "Coinbase IPOs at ~$85B; leverage builds offshore. Lesson: bull-market take rates are not a business model." },
    { year: 2022, title: "FTX", kind: "bust", text: "$8B of customer funds gone; contagion clears the leveraged tier. Lesson: proof of reserves became table stakes overnight." },
    { year: 2024, title: "The ETF turn", kind: "shift", text: "Spot ETFs gather ~$100B+ inside 18 months; Wall Street becomes the distribution. Lesson: institutionalization compresses fees and concentrates custody." }
  ],

  risks: [
    { name: "A stablecoin run", severity: 5, likelihood: 2, transmission: "Reserve doubt -> redemptions -> T-bill fire sale + depegging -> the sector's deposit base and its safest narrative break together." },
    { name: "Cycle-length volume winter", severity: 4, likelihood: 3, transmission: "Prices fall -> volumes fall 70% -> trading-fee P&Ls invert -> equity dilution at the bottom (the 2022 template)." },
    { name: "Bank absorption", severity: 3, likelihood: 3, transmission: "Full regulatory clarity -> banks offer custody/tokenized deposits at scale -> the compliant franchises' moat becomes a commodity license." },
    { name: "Catastrophic hack or key failure", severity: 4, likelihood: 2, transmission: "A top-3 custodian breach -> ETF plumbing doubt -> institutional flows reverse for years." },
    { name: "Regulatory whiplash", severity: 3, likelihood: 3, transmission: "An administration change reopens settled rules -> compliance capex resets and offshore share rebounds." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Crypto infrastructure is the businesses around digital coins: apps where people buy them (exchanges like Coinbase), companies that store them safely, firms that issue digital dollars (stablecoins), and the industrial 'miners' whose computers keep the networks running. Like the gold rush: the surest money was in picks and shovels, not prospecting."] },
    L2: { title: "Intermediate", text: ["Three business models: exchanges earn a small fee per trade (great in booms, brutal in winters); stablecoin issuers hold real dollars against their tokens and keep the interest (~$300B of tokens earning T-bill yield: the industry's steadiest profit); miners convert cheap electricity into bitcoin, with economics reset every 4 years by the 'halving'. The 2024 US spot ETFs moved buying into normal brokerage accounts and made regulated custody the crown-jewel service."] },
    L3: { title: "Advanced", text: ["Model each species separately: exchanges = volume x take rate with extreme operating leverage and structural take-rate compression as institutions displace retail; issuers = float x short rates minus distribution rev-share (watch who owns the customer); miners = hashprice minus power cost, a commodity cost-curve business with a real-option on AI data-center conversion. The reflexivity is the risk: prices drive volumes drive revenues drive the equities."] },
    L4: { title: "Expert", text: ["Trade the tape that is free: stablecoin supply (the liquidity tide), ETF net flows, hashprice, funding rates. Live debates: stablecoin franchise durability vs rate-trade skepticism, Coinbase's fee-mix decay vs regulated-fortress thesis, miners' power portfolios vs terminal halving math. The GENIUS Act rewrote the game: compliance is now the moat, and the next crisis's share shifts are pre-determined toward the licensed."] },
    L5: { title: "Institutional", text: ["Allocator's frame: this sector is the investable wrapper on an asset class whose returns you cannot forecast: so own the streams least coupled to price (float, custody, compliance moats), size the beta consciously, and remember that every cycle's terminal event has been a failure of trust, not technology. The terminal question is whether crypto infrastructure remains a distinct industry or becomes a product line inside banks and asset managers: position for both by owning what they would have to buy."] }
  },

  quiz: [
    { q: "The steadiest profit pool in crypto infrastructure is:", choices: ["Trading fees", "Stablecoin float: reserves invested in T-bills earn billions at ~$300B supply", "NFT royalties", "Mining"], answer: 1, explain: "Interest on reserves is rate-driven, not sentiment-driven: the closest thing to an annuity in the sector." },
    { q: "Exchanges' take rates structurally compress because:", choices: ["Regulation caps them", "Institutional volume (low bps) displaces retail (high bps) as the asset class matures", "Mining costs rise", "Stablecoins ban fees"], answer: 1, explain: "Retail pays 40bps+, institutions pay low single digits: ETF-ization accelerates exactly that mix shift." },
    { q: "The 2024 spot bitcoin ETFs mattered because:", choices: ["They raised coin prices permanently", "They moved the marginal buyer into brokerage accounts (~$100B+ in 18 months) and made regulated custody the choke point", "They eliminated exchanges", "They ended mining"], answer: 1, explain: "Distribution shifted to Wall Street; custody concentrated at compliant infrastructure: fee compression plus franchise concentration." },
    { q: "The bitcoin halving (April 2024) does what to miners?", choices: ["Doubles their revenue", "Halves issuance revenue against fixed costs, squeezing high-cost producers every 4 years", "Nothing", "Cuts their power bills"], answer: 1, explain: "It is a programmed margin squeeze: only cheap-power, efficient-fleet miners cross each halving comfortably." },
    { q: "Miners pivoting to AI data centers are monetizing:", choices: ["Their coins", "Their power portfolios: substations and interconnection queues are the AI buildout's scarcest input", "Their brand", "Their software"], answer: 1, explain: "The same megawatts serve either master; steadier AI rents can out-earn volatile hashprice." },
    { q: "FTX's collapse taught the sector that:", choices: ["Marketing matters", "Custody and segregation are everything: the biggest failures are trust failures, not technology failures", "Tokens are illegal", "Volumes never fall"], answer: 1, explain: "$8B of commingled customer funds later, proof-of-reserves and regulated custody became the industry's table stakes." },
    { q: "The GENIUS Act (2025) primarily:", choices: ["Banned stablecoins", "Gave stablecoins a federal rulebook: converting regulatory risk into a licensing moat for compliant issuers", "Nationalized exchanges", "Taxed mining"], answer: 1, explain: "Rules define reserves, audits, and issuers: compliance became the franchise, to Circle-class issuers' benefit." },
    { q: "Crypto-infrastructure equities behave like:", choices: ["Utilities", "Leveraged crypto beta: prices drive volumes drive revenue, with operating leverage amplifying both directions", "Bonds", "Groceries"], answer: 1, explain: "Reflexivity is the defining financial property: normalize volumes before believing any multiple." }
  ],

  sources: [
    { name: "Coinbase 10-K (2024 revenue, segment mix)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001679788", feeds: "exchange economics" },
    { name: "Circle S-1/10-K (USDC float economics)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=circle", feeds: "stablecoin model" },
    { name: "Public chain data: stablecoin supply, ETF flows", url: "https://www.theblock.co/data", feeds: "supply, flows" },
    { name: "Mining dashboards (hashrate, hashprice)", url: "https://data.hashrateindex.com", feeds: "mining economics" }
  ]
};
