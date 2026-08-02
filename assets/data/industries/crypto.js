/* Industry Atlas - CRYPTOCURRENCY & BLOCKCHAIN (full module, research-backed)
 * Anchors: total crypto market cap $2.26T as of Aug 2026, (41%) y/y, vs a 2025
 * peak above $4T (CoinGecko global charts, Aug 1 2026); bitcoin ATH $126,080 on
 * Oct 6 2025, now ~$63K, (50%) below peak, BTC market cap $1.27T, dominance
 * 56-58% (CoinGecko / CoinMarketCap, Aug 2026); stablecoin supply $307.6B and
 * DeFi TVL $74.0B (DefiLlama, Aug 2026); GENIUS Act signed Jul 18 2025 with
 * 1:1 reserve backing (Wikipedia); US spot bitcoin ETFs live Jan 2024, IBIT
 * first to $1B daily volume Jan 19 2024 and fastest ETF ever to $100B AUM
 * (2025); Apr 2024 halving cut the block subsidy to 3.125 BTC. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["crypto"] = {
  meta: {
    id: "crypto", name: "Cryptocurrency & Blockchain", sector: "digital-assets", status: "full",
    tagline: "A $2.26T asset class that got its ETF, its federal law, and its cycle top in the same 18 months: liquidity beta with a 4-year heartbeat.",
    marketSize: { value: 2.26, unit: "$T", asOf: 2026, mapValue: 60, note: "total crypto market cap (CoinGecko, Aug 2026), (41%) y/y and roughly half the 2025 peak above $4T; an asset stock, not revenue. Map sizing uses ~$60B of estimated annual industry revenue (exchange fees, miner revenue, stablecoin float income)" },
    cagr: { value: 15, range: [0, 40], horizon: "2025-2030" },
    maturity: "emerging-institutional", cyclicality: 5, capitalIntensity: 3, regulation: 4, disruption: 5
  },
  newsQuery: '(bitcoin OR ethereum OR stablecoin OR "crypto market" OR "digital assets" OR "spot ETF" OR blockchain)',

  overview: {
    definition: "The crypto industry issues, trades, secures, and builds on blockchain-based assets: bitcoin's $1.27T monetary experiment, the smart-contract platforms beneath DeFi, a $308B stablecoin money layer, and the miners, exchanges, and custodians that turned a cypherpunk protocol into an asset class with its own ETF complex and its own federal statute.",
    howItWorks: [
      "The asset layer is a monetary pyramid with bitcoin at the top: a fixed 21M-coin supply whose issuance halves every 4 years (3.125 BTC per block since April 2024), giving it sub-1% annual dilution and the digital-gold pitch. Below sit the smart-contract platforms (Ethereum, Solana) that sell blockspace, the computational real estate on which stablecoins, DeFi, and tokenized assets settle. Bitcoin alone is 56-58% of the $2.26T total: dominance rises in bear markets as speculative capital retreats up the quality curve.",
      "Market structure is a barbell. Onshore: regulated spot exchanges (Coinbase class) earning take rates of 10 to 60 bps, plus CME futures and, since January 2024, spot ETFs. Offshore: perpetual-futures venues (Binance class) where most volume actually trades, with leverage to 100x and a funding-rate mechanism that substitutes for expiry. Stablecoins are the quote currency and settlement rail for both: $307.6B outstanding (DefiLlama, Aug 2026), and their issuers are money-market funds in disguise, harvesting the T-bill yield on reserves while paying holders nothing.",
      "The institutional rails were built in 2024-2025. Spot bitcoin ETFs launched January 2024; BlackRock's IBIT hit $1B of daily volume on day 1 (Jan 19, 2024) and became the fastest ETF in history to reach $100B in assets (2025). The GENIUS Act, signed July 18, 2025, gave stablecoins a federal framework requiring 1:1 backing in dollars and low-risk assets, converting a gray-zone product into a licensed one. Total market cap crossed $4T for the first time in mid-2025, and bitcoin printed its $126,080 all-time high on October 6, 2025: legitimacy and the cycle top arrived in the same season.",
      "The cycle mechanics matter more than any fundamental: crypto is global-liquidity beta wearing a 4-year supply clock. Halvings cut new issuance; easing cycles add fuel; leverage builds until a flush (the recurring template is a liquidation cascade that clears 20-30% in days). As of August 2026 the market sits (50%) below the October 2025 peak with the Fear & Greed index at 33: by historical standards a mid-bear reading, and milder than the (75%)+ drawdowns of 2018 and 2022, which bulls attribute to the ETF base bid."
    ],
    history: [
      { era: "2008-2013", title: "Genesis", text: "Satoshi's whitepaper (Oct 2008) answers the financial crisis with trustless money; a pizza costs 10,000 BTC; Silk Road proves demand, then teaches the first regulation lesson." },
      { era: "2014-2016", title: "Winter and rebuilding", text: "Mt. Gox collapses with ~850K BTC, setting the custody trauma that still shapes the industry; Ethereum launches (2015) and makes blockchains programmable." },
      { era: "2017-2019", title: "ICO mania", text: "Bitcoin touches $20K as initial coin offerings raise billions on whitepapers; the SEC responds, the bubble deflates (80%)+, and crypto winter culls the tourists." },
      { era: "2020-2022", title: "Leverage and collapse", text: "DeFi summer, NFTs, and corporate treasuries carry bitcoin to $69K; then Terra's $40B algorithmic stablecoin implodes, contagion takes 3AC and Celsius, and FTX's fraud caps the worst year in the industry's history." },
      { era: "2023-present", title: "The institutional era", text: "Spot ETFs approved January 2024, the April 2024 halving, the GENIUS Act (July 2025), a $4T market and a $126,080 bitcoin (October 2025): then the familiar rhythm reasserts, and 2026 trades (41%) below the prior year." }
    ],
    trends: [
      { title: "ETF-ization of demand", direction: "up", text: "Spot ETFs made the marginal buyer a brokerage account: IBIT's record run to $100B AUM rewired flows, and daily ETF net flow is now the sector's most-watched tape." },
      { title: "Stablecoins as the killer app", direction: "up", text: "$308B outstanding and post-GENIUS Act licensing pulled banks, payment networks, and fintechs into issuance; dollar stablecoins are quietly exporting US monetary rails to emerging markets." },
      { title: "The 2026 drawdown", direction: "down", text: "Total cap (41%) y/y, bitcoin (50%) off its high, DeFi TVL at $74B versus a far larger 2025 peak: liquidity left the long tail first, as it always does." },
      { title: "From enforcement to legislation", direction: "shift", text: "The US pivoted from regulation-by-lawsuit to statute: GENIUS for stablecoins, with market-structure legislation the next battleground; the EU's MiCA regime is already live." },
      { title: "Compute convergence", direction: "shift", text: "Miners are re-rating as power-and-datacenter companies, retasking sites toward AI compute: hashrate economics now compete with GPU economics for the same megawatts." }
    ],
    outlook: "The structural story survived its own top: rails (ETFs, licensed stablecoins, regulated custody) keep compounding while prices do their 4-year theater. The open question is whether institutional plumbing dampens the historical (75%) drawdowns or merely adds correlated leverage. Stablecoins have the clearest product-market fit and the clearest revenue model (float income), which also makes them the most exposed to rate cuts. The next scheduled supply event is the 2028 halving; the unscheduled ones are liquidity turns and legislation."
  },

  structure: {
    suppliers: [
      { name: "ASIC and hardware makers (Bitmain, MicroBT, Nvidia-adjacent)", note: "China-dominated mining silicon: the industry's one physical supply chain" },
      { name: "Energy providers and grid operators", note: "Mining is monetized electricity; power contracts are the miner's real balance sheet" },
      { name: "Core developers and protocol teams", note: "The unpaid or foundation-funded engineers maintaining trillion-dollar codebases" },
      { name: "Cloud and node infrastructure (RPC providers, oracles)", note: "Chainlink-class data feeds and node services: quiet single points of failure" }
    ],
    producers: [
      { name: "Miners and validators (MARA class, staking pools)", note: "Convert energy and capital into new coins and network security" },
      { name: "Stablecoin issuers (Tether, Circle)", note: "Mint the industry's working capital; earn the T-bill float on $308B" },
      { name: "Protocol foundations (Ethereum, Solana)", note: "Steward the blockspace factories the rest of the stack rents" }
    ],
    distributors: [
      { name: "Exchanges (Coinbase, Binance, Kraken)", note: "The take-rate toll booths; custody, listing, and liquidity in one conflicted bundle" },
      { name: "ETF sponsors (BlackRock, Fidelity)", note: "The 2024 pivot: crypto in a brokerage wrapper, IBIT the fastest ETF ever to $100B" },
      { name: "Fintech apps (Robinhood, PayPal, Cash App)", note: "Retail's on-ramp; distribution owners taking their cut of the spread" }
    ],
    customers: [
      { name: "Retail traders and holders", note: "Still the volatility engine; concentrated in each cycle's new cohort" },
      { name: "Institutions and allocators", note: "ETF buyers, macro funds trading liquidity beta, endowment toe-dips" },
      { name: "Corporates and treasuries", note: "Bitcoin balance-sheet strategies: leveraged equity wrappers around the asset" },
      { name: "Emerging-market users", note: "Dollar stablecoins as savings and remittance rails where banks fail" }
    ],
    regulators: [
      { name: "SEC and CFTC", note: "The securities-vs-commodities boundary war; ETF approvals rewrote the map" },
      { name: "Treasury, OCC, and the GENIUS Act regime", note: "Stablecoin licensing and 1:1 reserve enforcement since July 2025" },
      { name: "Global bodies (FATF, EU MiCA, offshore regulators)", note: "Arbitrage is the industry's oldest strategy; the venues live where the rules thin out" }
    ],
    capital: [
      { name: "Venture capital", note: "The a16z-crypto class funds the application layer through feast-and-famine vintages" },
      { name: "Public equities and converts", note: "Miners, Coinbase, and treasury companies: the levered stock-market expressions" },
      { name: "Token treasuries and foundations", note: "Protocols self-fund from pre-mined war chests: capital with no cost and no discipline" },
      { name: "Stablecoin float", note: "$308B of interest-free deposits funding issuer profits: the sector's one true annuity" }
    ]
  },

  valueChain: {
    intro: "From megawatts to money-market float. The physical work (mining) earns the worst economics; the boring layers (stablecoin float, exchange take rates) capture the most. Value pools at the choke points where crypto touches dollars.",
    stages: [
      { id: "protocols", name: "Base-layer protocols", what: "Bitcoin, Ethereum, Solana: the blockspace factories", players: "Protocol foundations, core dev teams", valueCapture: 4,
        economics: { grossMargin: [85, 99], capitalIntensity: 1, concentration: 4 },
        linksTo: ["data-infrastructure", "cybersecurity"],
        deeper: "Protocols monetize through issuance and fees, and the token IS the equity: no revenue line, just a monetary premium. Bitcoin's fixed supply is the entire product; Ethereum burns fees to tie activity to the asset. The moat is credible neutrality plus the installed base of capital that has already chosen a chain." },
      { id: "mining", name: "Mining & validation", what: "Converting energy and stake into security and new coins", players: "MARA, Riot, CleanSpark, staking pools", valueCapture: 2,
        economics: { grossMargin: [30, 55], capitalIntensity: 5, concentration: 3 },
        linksTo: ["semiconductors", "utilities"],
        deeper: "A commodity producer whose commodity halves in supply every 4 years: the April 2024 halving cut the subsidy to 3.125 BTC per block, doubling production cost per coin overnight. Miners survive on power contracts, fleet efficiency, and equity issuance; in 2026's drawdown the marginal fleet is underwater, and the pivot to AI datacenter hosting is the escape hatch." },
      { id: "stablecoins", name: "Stablecoin issuance", what: "The dollar layer: minting, reserves, redemption", players: "Tether, Circle, bank entrants", valueCapture: 5,
        economics: { grossMargin: [90, 99], capitalIntensity: 1, concentration: 5 },
        linksTo: ["payments", "banking"],
        deeper: "The best business model in crypto: take deposits, pay 0%, hold T-bills, keep the spread on $308B. The GENIUS Act (July 2025) mandates 1:1 reserves and licensing, which legitimizes the product and invites banks and networks to compete the float away. Two issuers control the overwhelming majority of supply: concentration is the systemic risk and the moat." },
      { id: "exchanges", name: "Exchanges & trading venues", what: "Spot, perps, listing, and market-making", players: "Coinbase, Binance, Kraken, CME", valueCapture: 5,
        economics: { grossMargin: [60, 85], capitalIntensity: 2, concentration: 4 },
        linksTo: ["capital-markets", "market-infrastructure"],
        deeper: "Take rate times volume, with volume 5x-ing in manias and evaporating in winters: operating leverage in both directions. Offshore perp venues out-trade onshore spot many times over; the fee pool migrates onshore with each regulatory turn. Exchanges also run custody, listing, and staking: vertically integrated conflicts a securities lawyer would never allow, and gradually isn't." },
      { id: "custody", name: "Custody & institutional access", what: "ETFs, qualified custody, prime services", players: "Coinbase Custody, BitGo, BlackRock, Fidelity", valueCapture: 3,
        economics: { grossMargin: [40, 70], capitalIntensity: 2, concentration: 4 },
        linksTo: ["asset-management", "banking"],
        deeper: "The bridge layer built 2024-2025: spot ETFs collect 19-25 bps on what became $100B+ of assets in the leader alone, and nearly every US ETF custodies at Coinbase: a quiet single point of failure. Prime brokerage, lending, and settlement are being rebuilt post-FTX with segregation this time." },
      { id: "applications", name: "DeFi & applications", what: "Lending, DEXs, derivatives, wallets, tokenization", players: "Uniswap, Aave, wallet providers", valueCapture: 2,
        economics: { grossMargin: [70, 95], capitalIntensity: 1, concentration: 2 },
        linksTo: ["fintech", "venture-capital", "gaming"],
        deeper: "Open-source finance with $74B of TVL (Aug 2026), well below the prior peak: composable, permissionless, and brutally forkable, which is why fee capture keeps leaking to users. Tokenized real-world assets and on-chain treasuries are the institutional beachhead; the moat, where one exists, is liquidity network effects." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 4 different P&Ls. Exchanges: revenue = volume x take rate, costs mostly fixed, so earnings swing 5x across a cycle: the purest operating-leverage instruments in public markets. Stablecoin issuers: reserves x short-term yield = revenue, at 90%+ margins: a money-market fund whose depositors accept 0%, earning billions on $308B of float (and dying by 25 bp increments when the Fed cuts). Miners: sell a commodity (hashes) priced in another commodity (BTC) with costs in a third (power): hashprice spread businesses that finance capex with equity at the top and dilute at the bottom.",
      "The assets themselves have no cash flows, so the industry's fundamentals are flow metrics: ETF net flows (the new marginal buyer), stablecoin net issuance (working capital entering or leaving), and on-chain fees (actual demand for blockspace). In August 2026 all 3 are soft: total cap $2.26T versus above $4T at the 2025 peak, DeFi TVL $74B, Fear & Greed at 33. The discipline is remembering which businesses earn through the winter (float income, custody fees) and which merely survive it (miners, long-tail tokens)."
    ],
    fingerprint: { grossMargin: 70, recurringRevenue: 25, capitalIntensity: 40, pricingPower: 45, cyclicality: 95, operatingLeverage: 85 },
    lines: [
      { label: "Trading volume x take rate", note: "The exchange engine: watch spot vs perp mix and fee compression" },
      { label: "Float income on reserves", note: "$308B of stablecoins x T-bill yields: the sector's annuity, hostage to the Fed" },
      { label: "Block rewards & hashprice", note: "Miner revenue per unit of compute: halves by protocol every 4 years" },
      { label: "ETF & custody fees", note: "19-25 bps on ETF assets plus custody: small rates, newly enormous bases" },
      { label: "On-chain fees & MEV", note: "Gas, priority fees, and order-flow value: the protocols' real demand signal" }
    ],
    unitEconomics: {
      unit: "per bitcoin mined (illustrative, post-2024 halving)",
      items: [
        { label: "Block subsidy", value: "3.125 BTC per block", note: "halved April 2024; next cut to 1.5625 BTC ~2028" },
        { label: "Energy cash cost per BTC", value: "~$35K to $55K", note: "fleet efficiency and power price dependent; efficient fleets at the low end" },
        { label: "Spot price (Aug 2026)", value: "~$63K", note: "(50%) below the $126,080 October 2025 high: margins compressed" },
        { label: "All-in cost incl. depreciation", value: "often $70K+", note: "the marginal listed miner earns less than its cost of capital mid-bear" }
      ]
    }
  },

  kpiRefs: ["pay-take-rate", "cm-adv", "am-netflows"],
  kpiLocal: [
    {
      id: "crypto-mvrv", name: "MVRV Ratio", industries: ["crypto"],
      definition: "Market value to realized value: market cap divided by the aggregate cost basis of all coins (each coin valued at the price it last moved on-chain).",
      formula: "MVRV = market cap / realized cap",
      interpretation: "The on-chain price-to-book: how far the market trades above holders' cost basis. Cycle tops historically print above 3.5; capitulation bottoms dip below 1.0.",
      healthy: "1.0 to 2.5: accumulation to mid-cycle", warning: ">3.5 euphoria; <1.0 capitulation (also the historical buy zone)" },
    {
      id: "crypto-hashprice", name: "Hashprice", industries: ["crypto"],
      definition: "Miner revenue per unit of computing power per day (typically $ per PH/s/day): the commodity price of bitcoin mining.",
      formula: "Hashprice = (block subsidy + fees) x BTC price / network hashrate",
      interpretation: "The single number that sets miner P&L: it falls when hashrate rises or price drops, and gets cut in half by protocol at every halving.",
      healthy: "Stable or rising with fleet efficiency gains ahead of network growth", warning: "Sustained lows below efficient-fleet cash cost: capitulation, rig sales, and hashrate migration" }
  ],

  health: {
    intro: "Price is the symptom. The industry's health lives in flows (is capital entering?), leverage (how violently will it exit?), and integrity (do the rails hold under stress?).",
    pillars: [
      { name: "Liquidity & flows", weight: 25, metrics: "ETF net flows, stablecoin net issuance, spot volumes", healthy: "Sustained ETF inflows; stablecoin supply growing", warning: "Redemptions plus shrinking float: capital is leaving the system" },
      { name: "Leverage in the system", weight: 20, metrics: "Perp funding rates, open interest vs market cap, DeFi loan books", healthy: "Funding near flat; OI modest vs cap", warning: "Persistent high funding and record OI: the flush is being loaded" },
      { name: "Regulatory trajectory", weight: 20, metrics: "Legislation vs enforcement, ETF/product approvals, banking access", healthy: "Statutes replacing lawsuits (the GENIUS Act pattern)", warning: "Banking chokepoints and hostile rulemaking returning" },
      { name: "Security integrity", weight: 15, metrics: "Exchange/bridge hacks, custody failures, protocol exploits", healthy: "Quiet quarters; hacks contained and reimbursed", warning: "9-figure exploits (Bybit lost ~$1.46B in Feb 2025): confidence is the collateral" },
      { name: "Adoption fundamentals", weight: 20, metrics: "Active addresses, stablecoin settlement volume, developer counts, tokenized assets", healthy: "Usage growing through the price winter", warning: "Activity purely price-correlated: speculation all the way down" }
    ],
    scoringNote: "Score flows and leverage together: strong inflows with low leverage is early-cycle health; strong inflows with record leverage is a top forming. In crypto the same number means opposite things depending on what funding rates are doing."
  },

  valuation: {
    intro: "The assets have no cash flows and the companies have too much cyclicality: so the discipline is valuing each layer with its own tool and refusing to annualize a mania quarter.",
    methods: [
      { name: "EV / EBITDA on exchanges & brokers", use: "Coinbase class: normalize volumes across a full cycle first", avoid: "Trailing multiples at cycle extremes: peak earnings on peak multiples", strengths: "Standard, comparable to market-infrastructure peers", weaknesses: "Which year is normal? Volume assumptions swing the answer 3x", range: { low: 8, high: 20, asOf: 2026, note: "bear-market compression from 2025 highs; quality venues hold the top of the band" } },
      { name: "Float-income math for stablecoin issuers", use: "Circle class: reserves x short-rate x margin, then a payments-style multiple", avoid: "Extrapolating peak Fed rates: float income is a duration-0 rate bet", strengths: "Matches the actual money-market economics", weaknesses: "Rate cuts and reserve-sharing deals compress the spread fast", range: { low: 15, high: 30, asOf: 2026, note: "P/E on float income; post-GENIUS Act scarcity premium for licensed issuers" } },
      { name: "On-chain relative value (MVRV, realized cap)", use: "The assets themselves: where does price sit vs aggregate cost basis?", avoid: "Treating on-chain ratios as timing tools: they are zones, not triggers", strengths: "Cycle positioning grounded in holder behavior, free data", weaknesses: "Each cycle's structure (ETFs, wrappers) distorts comparability", range: { low: 1, high: 3.5, asOf: 2026, note: "MVRV band, not a multiple: sub-1.0 marked every prior bear bottom" } },
      { name: "Replacement cost for miners (EV per EH/s)", use: "Sanity-check miner EVs against the cost of building the same hashrate new", avoid: "NAV math on the coin treasury alone: the fleet depreciates brutally", strengths: "Anchors the equity to hardware and power reality", weaknesses: "Efficiency (J/TH) differences make raw EH/s comparisons lie", range: { low: 0, high: 0, asOf: 2026, note: "qualitative anchor: in busts EVs converge to fleet replacement cost, in manias they trade on hashprice dreams" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a crypto exchange or infrastructure name quickly: cycle-normalized EBITDA times a regime-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Cycle-normalized EBITDA ($B)", min: 0.2, max: 10, step: 0.2, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 25, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -10, max: 10, step: 0.5, value: -2, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats crypto as a liquidity-beta sleeve with a 4-year supply clock: core bitcoin exposure via ETFs sized as a volatility budget, stablecoin float businesses as the sector's only annuity, and exchanges and miners as high-beta cyclicals to be rented, not owned, through the cycle. Nothing here is a hold-forever compounder except, arguably, the rails.",
    debates: [
      { topic: "Bitcoin at $63K: broken cycle or normal winter?", bull: "Every prior cycle drew down (75%)+ and this one has held at (50%): the ETF base bid and a $1.27T market cap have structurally dampened the downside, and the 2028 halving clock is already running. Buying mid-bear MVRV zones has worked in every cycle since 2011.", bear: "The dampened drawdown cuts both ways: the marginal buyer is now a levered TradFi flow that leaves as fast as it came, the reflexive retail mania that produced 10x cycles is priced out, and digital gold now competes with actual gold in the same allocator's inflation bucket. Flat is the new bull case." },
      { topic: "Stablecoins: crypto's killer app or a regulated commodity?", bull: "$308B outstanding, a federal statute, and settlement economics that embarrass correspondent banking: stablecoins are the first crypto product normal businesses adopt without believing in anything. Distribution wars have barely started and the float compounds with every new corridor.", bear: "The GENIUS Act made stablecoins a money-market fund with extra steps: 1:1 reserves, licensing, and zero yield to holders is a product banks and card networks can replicate at will. Float income is a duration-0 rate bet, and the Fed's cutting cycle is the short thesis nobody hedges." },
      { topic: "Do smart-contract platforms accrue value?", bull: "Fee burn ties the token to activity like a buyback ties equity to earnings; blockspace is the settlement API for tokenized finance, and the winner's liquidity network effect is already visible in where institutions deploy.", bear: "Blockspace is a deflating commodity: every scaling upgrade and L2 siphons fees from the base asset, DeFi TVL at $74B shows demand elasticity, and forkable open-source infrastructure has never sustained monopoly pricing anywhere in software history." }
    ],
    cycle: {
      where: "10 months past the October 2025 top ($126,080): bitcoin (50%) off the high, total cap $2.26T from above $4T, Fear & Greed at 33, dominance rising as the long tail bleeds. By the 4-year clock this is mid-winter, with the April 2028 halving the next scheduled supply event: the unscheduled variables are Fed liquidity and market-structure legislation.",
      drivers: "Global liquidity and real rates, the halving supply schedule, ETF flow regime, stablecoin issuance growth, leverage build-and-flush cycles, and the US legislative calendar.",
      leads: [
        "Daily spot ETF net flows (Farside Investors, free): the marginal buyer's diary",
        "Stablecoin net issuance (DefiLlama, free): working capital entering or leaving",
        "Perp funding rates and open interest (Coinglass free tier): how loaded the flush is",
        "MVRV ratio (free on-chain dashboards): price vs aggregate cost basis",
        "Crypto Fear & Greed index (alternative.me, free): the sentiment thermometer, currently 33"
      ]
    },
    exposure: [
      { vehicle: "Spot bitcoin ETFs (IBIT class)", note: "The clean beta: 19-25 bps for custody-free exposure; size it as a vol budget" },
      { vehicle: "Exchange equities (Coinbase class)", note: "Volume x take rate with 5x earnings swings: buy fear, trim euphoria" },
      { vehicle: "Stablecoin float businesses (Circle class)", note: "The annuity: float income with rate-cut and competition risk" },
      { vehicle: "Miners (MARA class)", note: "Hashprice beta with equity-dilution risk; the AI-datacenter pivot is the option value" },
      { vehicle: "Venture and token baskets", note: "The application-layer lottery: vintage timing dominates selection" }
    ],
    catalysts: [
      { when: "Every FOMC and liquidity turn", what: "Crypto trades as the longest-duration risk asset: rate path repricing moves the whole complex" },
      { when: "2026-2027 legislative sessions", what: "US market-structure legislation: the securities/commodities boundary decided by statute" },
      { when: "April 2028 (scheduled)", what: "The 5th halving: subsidy to 1.5625 BTC; the supply-shock narrative reloads" },
      { when: "Quarterly", what: "ETF flow inflections and exchange earnings: the institutional demand scoreboard" }
    ],
    data: [
      { series: "Total market cap & dominance", source: "CoinGecko global charts (free)", why: "The asset class's tape: $2.26T, Aug 2026" },
      { series: "Stablecoin supply & DeFi TVL", source: "DefiLlama (free)", why: "Working capital and application demand: $307.6B and $74B" },
      { series: "Spot ETF daily flows", source: "Farside Investors (free)", why: "The marginal buyer, published daily" },
      { series: "Fear & Greed index", source: "alternative.me (free)", why: "Sentiment extremes mark both tails" },
      { series: "Hashrate & difficulty", source: "blockchain.com charts (free)", why: "Miner capitulation and network security in one series" }
    ],
    playbook: [
      { regime: "Liquidity easing", behavior: "Maximum beta works: alts outrun bitcoin, miners outrun both, funding rates lead the froth. Ride it with an exit discipline: this regime ends at leverage records, not price targets." },
      { regime: "Liquidity tightening", behavior: "Dominance rises, the long tail bleeds out, exchange volumes halve. Rotate to bitcoin-only and float-income names; miners and levered treasuries are the shorts." },
      { regime: "Risk-off shock", behavior: "Correlations go to 1 and crypto trades like triple-levered Nasdaq for a week; stablecoin pegs and exchange solvency are the tail risks to monitor, not price." },
      { regime: "Regulatory breakthrough", behavior: "Rotate onshore: licensed issuers, US venues, and ETF complexes capture the fee-pool migration every time the rules clarify." }
    ]
  },

  players: [
    { name: "Coinbase", role: "US exchange & custody anchor", country: "US", real: true, note: "The regulated toll booth: exchange, custodian to most US spot ETFs, and USDC economics" },
    { name: "Binance", role: "Offshore volume leader", country: "AE", real: true, note: "The world's largest venue by volume; the perpetual-futures casino the cycle runs through" },
    { name: "Tether", role: "Stablecoin incumbent", country: "SV", real: true, note: "The largest issuer of the $308B stablecoin float; among the most profitable firms per employee anywhere" },
    { name: "Circle", role: "Licensed stablecoin challenger", country: "US", real: true, note: "USDC issuer; the GENIUS Act's model citizen and a public float-income pure play" },
    { name: "BlackRock (IBIT)", role: "ETF gorilla", country: "US", real: true, note: "IBIT: $1B day-1 volume (Jan 2024) and the fastest ETF in history to $100B AUM" },
    { name: "MARA Holdings", role: "Largest listed miner", country: "US", real: true, note: "Hashprice beta at scale; pivoting megawatts toward AI compute like the rest of the fleet" },
    { name: "Bitmain", role: "ASIC kingmaker", country: "CN", real: true, note: "Dominates mining silicon: the one hardware choke point in a software industry" },
    { name: "Ethereum Foundation", role: "Protocol steward", country: "CH", real: true, note: "Shepherds the #2 asset and the smart-contract standard the application layer builds on" }
  ],

  geography: [
    { country: "US", role: "Capital and rules", note: "ETF complex, Circle, Coinbase, and the GENIUS Act: the 2024-2025 pivot made the US the institutional center" },
    { country: "CN", role: "Hardware, not trading", note: "Trading banned since 2021, yet Bitmain-class ASIC makers still supply the world's hashrate" },
    { country: "AE", role: "Offshore hub", note: "Binance-class venues and friendly licensing: where the leverage lives" },
    { country: "SG", role: "Asia institutional gateway", note: "Licensed exchanges and funds serving Asia's allocators under MAS supervision" },
    { country: "CH", role: "Foundation country", note: "Crypto Valley (Zug): Ethereum and dozens of protocol foundations domicile here" },
    { country: "SV", role: "The experiment", note: "Made bitcoin legal tender in 2021 and became Tether's home base: the sovereign adoption test case" }
  ],

  cycles: [
    { year: 2014, title: "Mt. Gox", kind: "bust", text: "The exchange handling most bitcoin volume collapses with ~850K BTC. Lesson: custody is crypto's recurring single point of failure; not your keys, not your coins." },
    { year: 2017, title: "ICO mania", kind: "boom", text: "Bitcoin hits $20K while whitepapers raise billions; the 2018 winter erases (80%)+. Lesson: every cycle invents a new wrapper for the same leverage, and the SEC reads whitepapers too." },
    { year: 2022, title: "Terra and FTX", kind: "bust", text: "A $40B algorithmic stablecoin dies in a week; contagion takes 3AC and Celsius; FTX is revealed as fraud. Lesson: the yield was the risk, and unbacked stability is a short-volatility trade." },
    { year: 2024, title: "The ETF pivot", kind: "shift", text: "Spot bitcoin ETFs approved in January after a decade of denials; IBIT does $1B on day 1. Lesson: distribution, not technology, was the binding constraint on institutional money." },
    { year: 2025, title: "The $4T top", kind: "boom", text: "GENIUS Act signed July 18; market cap crosses $4T; bitcoin prints $126,080 on October 6, then gives back half. Lesson: legitimacy de-risks the rails, not the price: cycle tops and policy wins arrive in the same season." }
  ],

  risks: [
    { name: "Stablecoin reserve break", severity: 5, likelihood: 2, transmission: "Redemption run on a major issuer -> forced T-bill liquidation and a broken peg -> exchange liquidity vanishes -> forced selling across the entire asset class." },
    { name: "Leverage cascade", severity: 4, likelihood: 4, transmission: "Offshore perp leverage builds -> a price shock triggers liquidation spirals -> 20-30% drawdowns in days -> the recurring template, now with ETF holders watching." },
    { name: "Regulatory reversal", severity: 3, likelihood: 3, transmission: "A political turn or scandal -> banking access narrows and product approvals stall -> flows reverse and the fee pool migrates offshore again." },
    { name: "Security failure at scale", severity: 4, likelihood: 3, transmission: "An exchange or bridge hack (Bybit lost ~$1.46B in Feb 2025) -> custody confidence shock -> redemption runs on venues -> contagion through lending desks." },
    { name: "Cryptographic break", severity: 5, likelihood: 1, transmission: "A practical quantum or algorithmic break -> the security assumption under every chain fails -> repricing toward zero for unpatched networks; the tail risk with no hedge." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Cryptocurrencies are digital assets secured by networks of computers instead of banks. Bitcoin, the largest, has a fixed supply of 21M coins, which is the core of its appeal as digital gold. People buy crypto on exchanges or, since 2024, through ETFs in a normal brokerage account. Prices move in dramatic multi-year cycles: the whole market was worth over $4T at its 2025 peak and about $2.26T by mid-2026."] },
    L2: { title: "Intermediate", text: ["The industry has 4 money machines: exchanges earn fees on trading volume, miners convert electricity into new coins, stablecoin issuers hold $308B of reserves and keep the interest, and protocols sell blockspace. Bitcoin's issuance halves every 4 years (now 3.125 BTC per block), which anchors the famous cycle. The 2025 turn of the cycle came with institutional milestones attached: the fastest-ever ETF to $100B and a federal stablecoin law (the GENIUS Act, July 2025)."] },
    L3: { title: "Advanced", text: ["Analyze each layer with its own tool: exchanges on cycle-normalized EBITDA (never annualize a mania quarter), stablecoin issuers as money-market funds (reserves x rate x margin), miners on hashprice versus fleet cost, and the assets themselves on flow metrics: ETF net flows, stablecoin issuance, on-chain fees. MVRV (market cap over aggregate cost basis) frames cycle position: above 3.5 is euphoria, below 1.0 has marked every bear bottom. As of August 2026: (50%) off the top, Fear & Greed at 33, mid-winter by the clock."] },
    L4: { title: "Expert", text: ["The live debates: whether ETF-era structure dampens the historical (75%) drawdowns or just changes who panics; whether GENIUS Act stablecoins are a compounding rail or a commoditized money-market wrapper banks will absorb; and whether smart-contract tokens accrue value or leak it to L2s. Trade the flow tape (ETF dailies, stablecoin issuance, funding rates) rather than the narrative, respect that leverage flushes are the mechanism of every local bottom, and watch miners' AI-compute pivot re-rate power portfolios independent of coin price."] },
    L5: { title: "Institutional", text: ["Allocator's frame: crypto is liquidity beta with a supply clock, sized as a volatility budget rather than an asset-class weight: a 2% position that behaves like 10%. Core the cleanest expressions (spot ETFs, float-income equities), rent the cyclicals (exchanges, miners) with regime discipline, and underwrite the systemic risks that never leave: stablecoin concentration, offshore leverage, custody choke points. The rails compound through winters; the prices do not have to. Every thesis here reduces to one question: when global liquidity turns, is this the first thing bought or the first thing sold?"] }
  },

  quiz: [
    { q: "As of August 2026, the total crypto market cap versus its 2025 peak reads roughly:", choices: ["$2.26T vs above $4T: about half", "$4T vs $2T: still at highs", "$500B vs $1T", "Unchanged"], answer: 0, explain: "The market crossed $4T in 2025, bitcoin peaked at $126,080 that October, and by August 2026 the total sat at $2.26T: (41%) y/y (CoinGecko)." },
    { q: "Stablecoin issuers make money by:", choices: ["Charging holders monthly fees", "Holding $308B of reserves in T-bills and keeping the interest while paying holders 0%", "Mining new coins", "Trading against their users"], answer: 1, explain: "A money-market fund in disguise: the GENIUS Act (July 2025) requires 1:1 reserves in dollars and low-risk assets, and the float income is the business." },
    { q: "The bitcoin halving matters because it:", choices: ["Doubles transaction speed", "Cuts new supply in half every 4 years (3.125 BTC per block since April 2024), anchoring the cycle", "Halves fees for users", "Splits the network"], answer: 1, explain: "Issuance halves by protocol roughly every 4 years; the next cut, to 1.5625 BTC, arrives around 2028 and doubles miners' production cost per coin." },
    { q: "Spot bitcoin ETFs changed the market by:", choices: ["Making crypto illegal to self-custody", "Nothing changed", "Putting bitcoin in brokerage accounts: IBIT became the fastest ETF ever to $100B in assets", "Eliminating volatility"], answer: 2, explain: "Approved January 2024 after a decade of denials: distribution, not technology, was the constraint. Daily ETF flows are now the marginal-buyer tape." },
    { q: "The best structural economics in the crypto stack belong to:", choices: ["Miners", "Stablecoin float and exchange take rates: the layers where crypto touches dollars", "NFT marketplaces", "Node operators"], answer: 1, explain: "Mining is a brutal commodity business; the choke points converting crypto to and from dollars capture the margin: 90%+ for float income." },
    { q: "The 2022 collapse (Terra, FTX) taught that:", choices: ["Crypto was over", "The yield was the risk: unbacked stability is a short-volatility trade, and custody without segregation is fraud waiting", "Stablecoins are impossible", "Leverage helps in downturns"], answer: 1, explain: "A $40B algorithmic stablecoin died in a week and the industry's second-largest exchange was a fraud: the reforms (segregation, reserves, statute) define today's structure." },
    { q: "Miner health is best tracked through:", choices: ["Twitter sentiment", "Hashprice: revenue per unit of compute per day, versus the fleet's power cost", "Total coins held", "Employee count"], answer: 1, explain: "Hashprice = (subsidy + fees) x price / hashrate: when it sits below efficient-fleet cash cost, capitulation, rig sales, and hashrate migration follow." },
    { q: "By the 4-year cycle clock, August 2026 ((50%) off peak, Fear & Greed at 33) reads as:", choices: ["Peak euphoria", "Mid-winter: post-top drawdown with the 2028 halving as the next scheduled supply event", "Early mania", "The cycle no longer exists"], answer: 1, explain: "10 months past the October 2025 top: milder than 2018 and 2022 so far, which is itself the sector's central debate: dampened cycle or delayed one?" }
  ],

  sources: [
    { name: "CoinGecko global charts (market cap, dominance, Aug 2026)", url: "https://www.coingecko.com/en/global-charts", feeds: "market cap, dominance, bitcoin ATH" },
    { name: "DefiLlama (stablecoin supply $307.6B, DeFi TVL $74B, Aug 2026)", url: "https://defillama.com", feeds: "stablecoins, TVL" },
    { name: "GENIUS Act (signed Jul 18, 2025)", url: "https://en.wikipedia.org/wiki/GENIUS_Act", feeds: "stablecoin regulation" },
    { name: "Farside Investors: spot bitcoin ETF flows", url: "https://farside.co.uk/btc/", feeds: "ETF flows" }
  ]
};
