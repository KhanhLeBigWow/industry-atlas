/* Industry Atlas - CAPITAL MARKETS (full module, research-backed)
 * Anchors: global equity market cap $126.7T (+8.7% in 2024) and global fixed income
 * outstanding $145.1T; US holds 49.1% of equities ($62.2T) and 40.1% of bonds ($58.2T)
 * (SIFMA 2025 Capital Markets Fact Book, Jul 2025). Record US equity ADV of 17.7B
 * shares through Nov 2025, +49% YoY, first 20B-share days in Oct (SIFMA, Dec 2025).
 * Jane Street record $39.6B 2025 trading revenue, topping JPMorgan by 11% with ~3,500
 * staff; Citadel Securities record $12.2B, +25% YoY, ~$6.5B EBITDA (Bloomberg,
 * Mar/Apr 2026); record ~$114B 2025 revenue pool across leading trading firms, non-bank
 * revenue +45% (Hedgeweek, 2026). Global ECM $957B in 2025, +25%, IPOs +44%; H1 2025
 * debt issuance a record $7.1T (LSEG). US passive fund assets ~$19.3T vs $17.4T active,
 * Dec 2025 (Morningstar / PWL Capital monitor). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["capital-markets"] = {
  meta: {
    id: "capital-markets", name: "Capital Markets", sector: "finance", status: "full",
    tagline: "A $272T pipe between savers and issuers, where a 3,500-person firm now out-trades JPMorgan.",
    marketSize: { value: 272, unit: "$T", asOf: 2024, note: "securities outstanding: $126.7T global equities + $145.1T global fixed income (SIFMA, Jul 2025); an asset stock, not revenue", mapValue: 400 },
    cagr: { value: 6, range: [4, 9], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 4, capitalIntensity: 3, regulation: 5, disruption: 4
  },
  newsQuery: '("capital markets" OR "bond issuance" OR "IPO market" OR "market maker" OR "Treasury market" OR "equity trading volume")',

  overview: {
    definition: "Capital markets are the machinery that turns savings into securities and securities back into cash: issuance, trading, clearing, and the data layer wrapped around all of it. Roughly $272T of stocks and bonds outstanding change hands across exchanges, dealer desks, and electronic market makers, and every toll along the way is a business.",
    howItWorks: [
      "The market has two rooms. The primary market is where issuers raise money: IPOs, follow-ons, and bond deals, underwritten for a fee. The secondary market is where those securities trade forever after, and it dwarfs the primary: $126.7T of global equity market cap and $145.1T of fixed income outstanding (SIFMA, 2024 year-end), against 2025 primary flow of $957B in global equity issuance and a record $7.1T of debt issuance in H1 alone (LSEG). The US is the gravitational center: 49.1% of world equities ($62.2T) and 40.1% of bonds ($58.2T).",
      "Follow the fees. Issuers pay underwriters: global investment banking fees ran $60.5B in H1 2025, (1%) YoY (LSEG). Traders pay spreads: the bid-ask gap is the market maker's raw material, and at scale it compounds into astonishing sums. The 2025 revenue pool across leading trading firms hit a record ~$114B, with non-bank firms up 45% YoY: Jane Street alone booked $39.6B, out-earning every bank trading floor on Wall Street including JPMorgan, with roughly 3,500 employees; Citadel Securities added a record $12.2B, +25% (Bloomberg, 2026). Exchanges collect transaction fees, listing fees, and, increasingly, the most durable toll of all: market data and index licensing.",
      "The plumbing is where the leverage hides. Orders route through exchanges, dark pools, and retail wholesalers (payment for order flow puts most US retail trades through 2 or 3 firms); everything nets through central clearinghouses (DTCC, OCC, LCH) that mutualize default risk against posted margin; settlement in US equities moved to T+1 in 2024. Volume is the industry's oxygen: US equity ADV hit a record 17.7B shares through Nov 2025, up 49% YoY, with the first 20B-share days ever printed in October (SIFMA). More volume means more spread capture, more clearing fees, more data consumption: the whole chain gears to flow.",
      "Two structural currents are rewriting who earns what. First, passive: US passive fund assets reached ~$19.3T by Dec 2025, overtaking the $17.4T in active strategies (Morningstar data), concentrating flow into index rebalances and closing auctions and shifting power to index providers. Second, electronification: market making migrated from bank balance sheets to technology firms (post-2008 capital rules pushed banks out; Citadel Securities and Jane Street moved in), and fixed income is following equities down the electronic path: Tradeweb printed a record $2.9T in average daily volume in Sep 2025. The winners own either the flow, the venue, or the data; everyone else pays rent."
    ],
    history: [
      { era: "1602-1929", title: "Invention of the public market", text: "From Amsterdam's VOC shares to the Buttonwood Agreement to the 1929 crash: markets scale faster than the rules around them." },
      { era: "1933-1971", title: "The regulated club", text: "Securities Acts and the SEC professionalize disclosure; fixed commissions make brokerage a cartel; Bretton Woods keeps capital largely home." },
      { era: "1971-1999", title: "Deregulation and screens", text: "Nasdaq (1971) puts quotes on screens; May Day 1975 ends fixed commissions; financial futures (CME, 1972) and London's Big Bang (1986) globalize trading." },
      { era: "2000-2010", title: "Decimals, speed, and the GFC", text: "Decimalization (2001) and Reg NMS (2005) shred spreads and birth HFT; 2008 proves market liquidity is a promise from dealer balance sheets that can be withdrawn; the 2010 Flash Crash shows the new machine's failure modes." },
      { era: "2010-present", title: "Passive tide, non-bank kings", text: "Index funds overtake active; zero commissions (2019) and PFOF industrialize retail flow; capital rules push banks back and Citadel Securities and Jane Street forward; T+1 lands in 2024; volumes and trading revenue set records through 2025." }
    ],
    trends: [
      { title: "Non-bank liquidity kings", direction: "up", text: "The 2025 trading revenue pool hit ~$114B with non-bank firms up 45%; Jane Street's $39.6B beat every bank. Regulation moved the risk, technology moved the margin." },
      { title: "The passive tide", direction: "shift", text: "US passive fund assets (~$19.3T) now exceed active ($17.4T); flow concentrates into rebalances and auctions, and index providers quietly become the market's allocators." },
      { title: "Fixed income electronification", direction: "up", text: "Bond trading is 15 years behind equities and closing fast: Tradeweb's record $2.9T ADV (Sep 2025) shows the migration from phone to protocol." },
      { title: "Retail and options flow", direction: "up", text: "Record 17.7B-share ADV, options volume at successive records, and 20B-share days: the retail cohort that arrived in 2020 stayed, and its flow is the wholesalers' feedstock." },
      { title: "Public-to-private drift", direction: "shift", text: "US listed-company counts are roughly half their 1996 peak; private equity and private credit intercept issuance upstream, threatening the listed toll road's long-run traffic." }
    ],
    outlook: "Volume records, revenue records, and issuance recovering (ECM +25% in 2025, IPOs +44%): the cycle is generous, and history says peak volumes are late-cycle behavior. Structurally, the tolls are migrating: away from commissions (zero), away from bank dealing desks (to non-banks), toward data, indices, clearing, and whoever owns the electronic pipe. The durable franchises are the ones that get paid whether markets rise or fall: exchanges, clearinghouses, data vendors, and the 2 or 3 market makers whose scale became the moat."
  },

  structure: {
    suppliers: [
      { name: "Issuers (corporates, sovereigns, municipalities)", note: "The product source: $7.1T of debt issuance in H1 2025 alone" },
      { name: "Index providers (S&P DJI, MSCI, FTSE Russell)", note: "Define what $19T+ of passive money must buy: quiet kingmakers" },
      { name: "Data & terminal vendors (Bloomberg, LSEG, FactSet)", note: "The industry's operating system, sold by subscription" },
      { name: "Technology & connectivity (colocation, FIX, cloud)", note: "Microseconds are inventory for the trading firms" }
    ],
    producers: [
      { name: "Underwriters (bulge bracket + boutiques)", note: "Manufacture new securities; $60.5B of global fees in H1 2025" },
      { name: "Exchanges (ICE/NYSE, Nasdaq, CME, Cboe)", note: "The listed venues: transaction fees plus the data annuity" },
      { name: "Market makers (Citadel Securities, Jane Street, Virtu)", note: "The new liquidity utilities: $39.6B and $12.2B revenue hauls in 2025" },
      { name: "Electronic bond venues (Tradeweb, MarketAxess)", note: "Fixed income's electronification landlords" }
    ],
    distributors: [
      { name: "Retail brokers (Schwab, Robinhood, IBKR)", note: "Zero commission up front; the flow itself is the product" },
      { name: "Prime brokers", note: "Leverage, custody, and securities lending to hedge funds: banking's tollbooth on the buy side" },
      { name: "Wealth platforms & advisors", note: "Where household savings actually meet the market" }
    ],
    customers: [
      { name: "Asset managers", note: "Passive ($19.3T US) and active ($17.4T): the flow's origin" },
      { name: "Hedge funds & prop traders", note: "Turn over the most volume per dollar of assets" },
      { name: "Pensions, insurers, sovereign funds", note: "The slow, giant money that anchors duration" },
      { name: "Corporates & households", note: "Hedgers, buyback programs, and 401(k) drip" }
    ],
    regulators: [
      { name: "SEC & CFTC", note: "Securities and derivatives cops; market structure rulemaking moves billions" },
      { name: "FINRA & exchanges (SROs)", note: "Front-line surveillance of brokers and trading" },
      { name: "Fed & Treasury", note: "Own the Treasury market's plumbing problem and the dealer backstop" },
      { name: "ESMA, FCA, global Basel rules", note: "Bank capital rules decided who makes markets: the non-banks won" }
    ],
    capital: [
      { name: "Dealer & market-maker balance sheets", note: "Trading capital plus prime-broker leverage: liquidity's raw material" },
      { name: "Clearinghouse margin & default funds", note: "The mutualized loss-absorber; margin calls are the system's reflex" },
      { name: "Repo market", note: "Multi-trillion daily funding wheel that finances every bond inventory" }
    ]
  },

  valueChain: {
    intro: "From a CFO's funding need to a filled retail order in 40 milliseconds. Value capture inverts intuition: the glamorous underwriting fee is cyclical, while the boring tolls (venues, data, clearing) compound quietly, and the spread earned a fraction of a cent at a time built 2025's biggest trading fortunes.",
    stages: [
      { id: "origination", name: "Origination & underwriting", what: "IPOs, follow-ons, bond deals: manufacturing new paper", players: "Goldman, JPMorgan, Morgan Stanley, boutiques", valueCapture: 4,
        economics: { grossMargin: [50, 70], capitalIntensity: 2, concentration: 4 },
        linksTo: ["investment-banking", "banking"],
        deeper: "Feast-or-famine economics keyed to issuance windows: global ECM ran $957B in 2025 (+25%) after 3 lean years, and IPO fees (up to 7% of proceeds) remain the priciest toll in finance. League-table position is self-reinforcing: issuers hire the banks that price and place the last deal well." },
      { id: "venues", name: "Exchanges & trading venues", what: "Listing, matching, and the auction that sets the price", players: "ICE/NYSE, Nasdaq, CME, Cboe, LSE, HKEX", valueCapture: 5,
        economics: { grossMargin: [55, 75], capitalIntensity: 2, concentration: 5 },
        linksTo: ["market-infrastructure"],
        deeper: "Natural monopolies in each product: liquidity begets liquidity, so volume concentrates and margins follow. The strategic shift: transaction fees are competed and regulated, so exchanges pivoted to what cannot be arbitraged away: proprietary data, connectivity, and index franchises, now the majority of revenue growth." },
      { id: "liquidity", name: "Market making & liquidity", what: "Standing in the middle of every trade, earning the spread", players: "Citadel Securities, Jane Street, Virtu, bank dealers", valueCapture: 5,
        economics: { grossMargin: [40, 60], capitalIntensity: 4, concentration: 4 },
        linksTo: ["hedge-funds", "banking"],
        deeper: "The chain's new apex: technology firms that price risk in microseconds across every asset class. Jane Street's $39.6B and Citadel Securities' $12.2B 2025 hauls (Bloomberg) exceed most banks' entire markets divisions; scale is the moat, because more flow means better prices means more flow. The open question is what regulators do with utilities this systemic and this private." },
      { id: "posttrade", name: "Clearing & settlement", what: "Netting, margining, and moving the securities and cash", players: "DTCC, OCC, LCH, CME Clearing, Euroclear", valueCapture: 2,
        economics: { grossMargin: [30, 50], capitalIntensity: 3, concentration: 5 },
        linksTo: ["market-infrastructure", "payments"],
        deeper: "Utility economics by design (much of it user-owned), but the system's true chokepoint: a clearinghouse failure is the one event with no rehearsal. T+1 settlement (2024) halved counterparty exposure windows; central clearing of Treasuries is the next regulatory build-out." },
      { id: "data", name: "Data, indices & analytics", what: "Selling the market's exhaust back to the market", players: "Bloomberg, LSEG, S&P Global, MSCI, FactSet", valueCapture: 5,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 4 },
        linksTo: ["data-infrastructure", "asset-management"],
        deeper: "The best business model in the chain: subscription revenue, near-zero marginal cost, and demand that grows with both passive (index licensing scales with the $19T+ tracking it) and active (every desk needs the terminal). Prices rise annually and churn barely exists: capital markets' answer to enterprise software." },
      { id: "buyside", name: "The buy side", what: "Deploying the world's savings into the paper", players: "BlackRock, Vanguard, hedge funds, pensions", valueCapture: 3,
        economics: { grossMargin: [30, 60], capitalIntensity: 1, concentration: 3 },
        linksTo: ["asset-management", "hedge-funds", "wealth-management"],
        deeper: "The customer everyone upstream serves, and a barbell: passive giants who pay almost nothing per dollar but move oceans on rebalance days, and hedge funds who pay the most per dollar of assets and subsidize the sell side. The passive crossover ($19.3T vs $17.4T, Dec 2025) rewires flow patterns for every stage above." }
    ]
  },

  financials: {
    businessModel: [
      "The industry's master equation is volume times capture rate, with operating leverage stacked on top. Market makers earn a sliver of spread on colossal flow: at 17.7B shares a day, fractions of a cent compound into $114B revenue pools, and because the cost base is technologists and servers, incremental volume drops through at extreme margins (Citadel Securities: ~$6.5B EBITDA on $12.2B revenue). Exchanges earn transaction fees plus the growing annuity of data and index licensing. Underwriters earn 0.35% to 7% of proceeds depending on product, entirely hostage to issuance windows.",
      "The P&L species differ in volatility exposure. Trading franchises love turbulence: spreads widen and volumes spike, so their best quarters are everyone else's worst. Underwriting loves calm: issuance needs stable prices and open windows. Data and clearing barely notice either: subscriptions and margin fees accrue regardless, which is why the market awards them the premium multiples. The through-cycle winners pair a volatility-levered engine with a recurring toll: exactly the mix the big exchanges have spent a decade assembling."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 40, capitalIntensity: 45, pricingPower: 55, cyclicality: 70, operatingLeverage: 80 },
    lines: [
      { label: "Trading revenue (spread capture)", note: "Volume x capture rate: the volatility-levered engine" },
      { label: "Transaction & clearing fees", note: "Per-trade tolls; competed at venues, monopolistic at clearing" },
      { label: "Market data & index licensing", note: "The subscription annuity; scales with passive AUM" },
      { label: "Underwriting & advisory fees", note: "$60.5B globally in H1 2025; the cyclical feast" },
      { label: "Net interest & securities lending", note: "Client balances, margin loans, and repo: the quiet float income" }
    ],
    unitEconomics: {
      unit: "per unit of flow (illustrative)",
      items: [
        { label: "Bid-ask spread, large-cap US equity", value: "~1 to 3 bps", note: "the market maker's raw material, captured half at a time" },
        { label: "Exchange transaction fee", value: "~0.1 to 0.3 bps", note: "tiny per trade, enormous at 17.7B shares a day" },
        { label: "IPO underwriting fee", value: "3.5% to 7% of proceeds", note: "the priciest toll; scales down for mega-deals" },
        { label: "Investment-grade bond fee", value: "~0.35% to 0.7%", note: "commoditized; won on league table and balance sheet" }
      ]
    }
  },

  kpiRefs: ["cm-adv", "am-netflows"],
  kpiLocal: [
    {
      id: "cm-issuance", name: "Primary Issuance Volume", industries: ["capital-markets"],
      definition: "Dollar value of new equity and debt sold to investors per period: the primary market's pulse.",
      formula: "Issuance = ECM proceeds + DCM proceeds per period, vs trailing 5-year average",
      interpretation: "Issuance is the windows business: 2025 ECM ran $957B (+25%) with IPOs +44%, while H1 debt issuance hit a record $7.1T (LSEG). Fees follow volume with a lag.",
      healthy: "At or above trend with broad sector participation", warning: "Windows shut: IPOs pulled, high-yield frozen, fees evaporating" },
    {
      id: "cm-capture", name: "Revenue Capture Rate", industries: ["capital-markets"],
      definition: "Revenue earned per unit of notional traded: the price of intermediation.",
      formula: "Capture = Trading (or fee) revenue / Notional volume handled",
      interpretation: "Volume without capture is vanity: exchanges and wholesalers can grow share while regulation or competition melts the rate. Trading firms' 2025 records came from both legs rising at once.",
      healthy: "Stable capture on growing volume", warning: "Capture compressing faster than volume grows (the zero-commission lesson)" }
  ],

  health: {
    intro: "Trading franchises are healthy when flow, capture, and risk discipline rise together; venues and data firms when the recurring share compounds; the system when margin calls get met quietly.",
    pillars: [
      { name: "Volume & volatility mix", weight: 25, metrics: "ADV vs trend, options/equity ratio, vol regime", healthy: "Records like 2025's 17.7B shares with orderly vol", warning: "Volume dependent on a single mania; vol drought compressing spreads" },
      { name: "Capture rate & share", weight: 25, metrics: "Revenue per notional, venue market share, wholesaler share of retail", healthy: "Stable or rising capture on growing flow", warning: "Share held only by cutting capture; regulatory fee caps" },
      { name: "Risk & balance sheet", weight: 20, metrics: "VaR vs capital, margin coverage, stress drawdowns", healthy: "Record revenue without record risk (the 2025 non-bank pattern)", warning: "Inventory losses, margin breaches, concentrated positions" },
      { name: "Recurring revenue mix", weight: 15, metrics: "Data, index, and clearing share of total revenue", healthy: "Recurring > 40% and compounding (the exchange playbook)", warning: "Pure transaction dependence into a volume downturn" },
      { name: "Regulatory posture", weight: 15, metrics: "Rulemaking exposure (PFOF, market data, capital), exam findings", healthy: "Diversified against any single rule change", warning: "Business model hostage to one regulatory decision" }
    ],
    scoringNote: "Capital markets firms rarely die of slow decline; they die in afternoons, when leverage meets a gap. Weight risk discipline accordingly."
  },

  valuation: {
    intro: "The market prices this chain by revenue durability: data and index annuities at software multiples, exchanges at infrastructure multiples, and anything volatility-levered at a structural discount it perpetually argues with.",
    methods: [
      { name: "EV / EBITDA (exchanges & venues)", use: "ICE, CME, Nasdaq class: infrastructure with data attached", avoid: "Treating a volume spike year as the base", strengths: "Clean comparables; margin structure stable", weaknesses: "Blends transaction cyclicality with data durability", range: { low: 12, high: 20, asOf: 2025, note: "data-heavy names command the top of the band" } },
      { name: "P/E on normalized trading revenue", use: "Market makers, banks' markets divisions, brokers", avoid: "Capitalizing a record year (2025's $114B pool is the cautionary case)", strengths: "Forces the through-cycle question", weaknesses: "Normalized is a guess; capture rates shift structurally", range: { low: 8, high: 15, asOf: 2025, note: "volatility-levered earnings never earn annuity multiples" } },
      { name: "Recurring-revenue multiple (data & index)", use: "S&P Global, MSCI, LSEG class", avoid: "Applying it to transaction revenue in the same company", strengths: "Matches subscription economics", weaknesses: "Priced for perfection; AI-era data disruption unmodeled", range: { low: 18, high: 28, asOf: 2025, note: "EV/EBITDA; the chain's quality premium lives here" } },
      { name: "Sum-of-the-parts (diversified groups)", use: "Exchanges and banks mixing tolls, trading, and data", avoid: "Letting the trading segment's discount infect the annuity segments", strengths: "Reveals hidden annuities inside cyclical wrappers", weaknesses: "Parts rarely separable in practice; conglomerate discount persists", range: { low: 0, high: 0, asOf: 2025, note: "framework, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a capital markets franchise: normalized EBITDA times a durability-adjusted multiple, minus net debt. Push the multiple up for recurring mix, down for volatility dependence.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.5, max: 15, step: 0.5, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 28, step: 0.5, value: 15, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -10, max: 40, step: 1, value: 5, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays capital markets as a barbell: core the toll roads (exchanges with data annuities, index and data vendors, clearing-adjacent infrastructure) and rent the volatility beta (market makers, brokers, banks' trading arms) with the humility that 2025's record $114B revenue pool is a cycle reading, not a run rate. The structural longs are wherever flow is still migrating: fixed income electronification and the passive plumbing.",
    debates: [
      { topic: "Non-bank market makers: durable utilities or the next systemic flashpoint?", bull: "They are better at this than banks were: real-time risk, thin inventories, no depositors, and 2025 proved the model at scale ($39.6B for Jane Street without a losing quarter narrative). Concentration is the price of quality liquidity, and spreads for retail have never been tighter.", bear: "Two private firms now stand in the middle of most US retail flow with no Fed backstop, no public disclosure rhythm, and profits that regulators will eventually read as rent. One bad afternoon of correlated inventory, or one PFOF rulemaking, reprices the whole model." },
      { topic: "Does the passive crossover break price discovery?", bull: "Decades of predictions, no breakage: active still sets marginal prices, dispersion persists, and passive's $19.3T is the cheapest financial service ever delivered to households. Fewer fee dollars burned is welfare, not fragility.", bear: "Markets grew measurably more inelastic: index flows move prices without opinions attached, correlated ownership concentrates in 3 managers, and the system has never run a sustained passive outflow cycle. The test arrives exactly when it is least affordable." },
      { topic: "Is the listed toll road a melting asset?", bull: "Volumes at records (17.7B ADV), issuance recovering (IPOs +44% in 2025), and every private asset eventually needs a public exit or a public benchmark: the pipe monetizes either way, and data revenue grows even when listings shrink.", bear: "US listed counts are half the 1996 peak, private credit intercepts the bond market's growth, and companies stay private through their fastest-growth years: the exchanges' volume franchise can set records while the underlying asset base quietly narrows." }
    ],
    cycle: {
      where: "Late-cycle exuberance by the tape's own measures: record ADV (17.7B shares, +49%), record trading revenue pools ($114B), issuance windows wide open (ECM +25% in 2025), and retail engagement at highs. Volume records are historically a late-cycle tell; the toll roads are the hedge against what follows.",
      drivers: "Volatility regime, policy rates and the issuance calculus, retail participation, and the structural migration of flow to electronic venues.",
      leads: [
        "SIFMA monthly volume and issuance statistics (free): the industry's tape",
        "Cboe VIX and realized-vol spread (free): the spread-width driver",
        "FINRA margin statistics (free, monthly): retail leverage as a sentiment gauge",
        "ICI weekly fund flows (free): the passive/active rotation in real time",
        "IPO backlog and pricing performance (LSEG/EY summaries, free): the windows indicator"
      ]
    },
    exposure: [
      { vehicle: "Exchanges (ICE, CME, Nasdaq, Cboe class)", note: "Volume beta wrapped around a data annuity: the core holding" },
      { vehicle: "Data & index (S&P Global, MSCI, LSEG class)", note: "The chain's software economics; pay up, hold long" },
      { vehicle: "Listed market makers & brokers (Virtu, IBKR, Schwab class)", note: "The purest volatility and retail-flow beta; rent, don't marry" },
      { vehicle: "Banks with top-3 markets divisions (GS, MS, JPM class)", note: "Trading upside with a diversified wrapper and a valuation discount" },
      { vehicle: "Electronic bond venues (Tradeweb, MarketAxess class)", note: "The structural share-shift long: fixed income's electronification" }
    ],
    catalysts: [
      { when: "Monthly (first week)", what: "Exchange and venue volume prints: the sector's scoreboard, free and early" },
      { when: "Quarterly earnings", what: "Capture rates, data revenue growth, and trading VaR disclosures" },
      { when: "SEC/CFTC rulemaking windows", what: "Market structure reform (PFOF, market data fees, Treasury clearing) moves business models overnight" },
      { when: "Vol events & Fed decisions", what: "Every macro shock is a trading revenue event and an issuance-window event, in opposite directions" }
    ],
    data: [
      { series: "SIFMA Research statistics (volumes, issuance, outstanding)", source: "sifma.org (free)", why: "The authoritative US tape: ADV, issuance, market sizes" },
      { series: "Cboe VIX and volume data", source: "cboe.com (free)", why: "The spread-and-volume driver in one index" },
      { series: "FINRA margin debt", source: "finra.org (free)", why: "Retail leverage: the cycle's mood ring" },
      { series: "ICI fund flow data", source: "ici.org (free)", why: "Passive vs active rotation, weekly" },
      { series: "FRED financial conditions & rates", source: "fred.stlouisfed.org (free)", why: "The issuance-window macro backdrop" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Trading revenue spikes first (vol), then issuance dies (windows shut): own the venues, fade the underwriters, and watch clearing margin stress as the tail risk." },
      { regime: "Rates rising", behavior: "Bond issuance slows but bond TRADING volume rises with rate vol; net interest on client cash inflects up for brokers: a quiet earnings tailwind." },
      { regime: "Vol spike", behavior: "The market makers' harvest: spreads widen, volumes surge, records print (the 2025 pattern). The risk is inventory gaps: the same afternoon that makes the year can end the firm." },
      { regime: "Calm bull grind", behavior: "The traders' famine and the issuers' feast: capture compresses, IPO windows open wide, and the data annuities just keep compounding: rotate accordingly." }
    ]
  },

  players: [
    { name: "Jane Street", role: "Trading's new apex", country: "US", real: true, note: "Record $39.6B 2025 trading revenue with ~3,500 staff: out-earned JPMorgan's floor by 11% (Bloomberg)" },
    { name: "Citadel Securities", role: "Retail flow king", country: "US", real: true, note: "Record $12.2B 2025 net trading revenue, +25% YoY, ~$6.5B EBITDA; the largest US retail wholesaler" },
    { name: "JPMorgan (Markets)", role: "Biggest bank trading house", country: "US", real: true, note: "The bank benchmark the non-banks now measure against" },
    { name: "Goldman Sachs (Global Banking & Markets)", role: "The underwriting-and-trading pairing", country: "US", real: true, note: "League-table fixture in ECM's $957B 2025 rebound" },
    { name: "ICE / NYSE", role: "Exchange & data conglomerate", country: "US", real: true, note: "The listed-market flagship; data and listings wrapped around the Big Board" },
    { name: "CME Group", role: "Derivatives monopoly", country: "US", real: true, note: "Rates, equity index, and commodity futures: the world's risk-transfer venue" },
    { name: "LSEG", role: "Data-first exchange group", country: "GB", real: true, note: "Refinitiv deal made it more data vendor than venue: the sector's strategic direction in one company" },
    { name: "Tradeweb", role: "Bond electronification leader", country: "US", real: true, note: "Record $2.9T average daily volume in Sep 2025: fixed income's migration, quantified" }
  ],

  geography: [
    { country: "US", role: "The gravitational center", note: "49.1% of global equities ($62.2T) and 40.1% of bonds ($58.2T); deepest liquidity, highest valuations" },
    { country: "GB", role: "Europe's trading hub", note: "FX, rates, and LSEG's data empire; listings lost to New York remain the sore point" },
    { country: "HK", role: "China's capital gateway", note: "IPO revival led APAC's 29% issuance growth in 2025; the listing venue geopolitics built" },
    { country: "JP", role: "The #3 cash equity market", note: "Governance reform turned Tokyo from value trap to flow magnet" },
    { country: "CN", role: "Giant, semi-closed", note: "Shanghai and Shenzhen: vast domestic base, capital controls at the border" },
    { country: "IN", role: "The volume phenomenon", note: "NSE leads the world in derivatives contracts traded; retail options culture at national scale" }
  ],

  cycles: [
    { year: 1987, title: "Black Monday", kind: "bust", text: "Portfolio insurance sells into a falling market; the Dow drops 22.6% in a day. Lesson: when everyone runs the same rule, liquidity is a mirage." },
    { year: 2000, title: "Dot-com issuance orgy", kind: "bust", text: "IPO windows that priced anything slam shut for years; underwriting fees evaporate. Lesson: primary markets are the most procyclical business in finance." },
    { year: 2008, title: "The dealer run", kind: "bust", text: "Bank balance sheets that WERE the bond market's liquidity vanish simultaneously. Lesson: market liquidity is a promise from someone's balance sheet, and promises get withdrawn." },
    { year: 2020, title: "The dash for cash", kind: "shift", text: "Even Treasuries gap as basis trades unwind faster than dealers can absorb; the Fed backstops the world's safest market. Lesson: the plumbing, not the asset, is the risk." },
    { year: 2021, title: "Meme stocks and the retail return", kind: "shift", text: "Zero commissions plus stimulus births a retail cohort that never left; PFOF and market structure become dinner-table topics. Lesson: distribution changes flow, and flow changes everything upstream." }
  ],

  risks: [
    { name: "Volatility drought", severity: 3, likelihood: 3, transmission: "Extended calm -> spreads and volumes compress together -> trading revenue pools shrink from 2025's $114B record -> operating leverage runs in reverse across makers, venues, and brokers." },
    { name: "Non-bank concentration event", severity: 5, likelihood: 2, transmission: "A top-2 market maker stumbles in stress -> retail equity and ETF liquidity evaporates intraday -> clearing margin spirals -> authorities improvise a backstop for firms outside the safety net." },
    { name: "Treasury market plumbing failure", severity: 5, likelihood: 2, transmission: "Levered basis trades unwind -> dealer balance sheets saturate -> the risk-free curve gaps -> every asset priced off it reprices at once (the 2020 rehearsal, larger)." },
    { name: "Regulatory rewrite of market structure", severity: 3, likelihood: 3, transmission: "PFOF ban or data-fee caps -> wholesaler and exchange economics reprice -> zero-commission retail model strains -> flow migrates and capture rates reset lower." },
    { name: "Passive flow reversal", severity: 4, likelihood: 2, transmission: "Demographics or a lost decade turn index flows negative -> inelastic markets amplify selling -> correlated drawdowns across the $19T passive complex -> political blowback lands on the index oligopoly." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Capital markets are where companies and governments raise money by selling stocks and bonds, and where investors trade them afterward. The world holds about $127T of stocks and $145T of bonds. Everyone in the middle charges a small toll: banks for arranging deals, exchanges for hosting trades, and trading firms for standing ready to buy or sell, and tiny tolls on enormous volume add up to one of finance's biggest industries."] },
    L2: { title: "Intermediate", text: ["The revenue map: underwriters earn fees on new issues ($60.5B globally in H1 2025), market makers earn the bid-ask spread on flow (record 17.7B US shares traded daily in 2025), and exchanges earn transaction fees plus a growing data-and-index annuity. Two structural shifts matter most: passive funds overtook active in the US (~$19.3T vs $17.4T), and market making moved from banks to technology firms: Jane Street out-earned every Wall Street bank trading floor in 2025."] },
    L3: { title: "Advanced", text: ["Analyze by revenue durability, not label: volatility-levered trading (records in turbulent years, famine in calm ones), cyclical underwriting (hostage to issuance windows: ECM +25% in 2025 after 3 shut years), and recurring data/clearing tolls that accrue regardless. The master equation is volume x capture rate with heavy operating leverage: Citadel Securities converted $12.2B of revenue into ~$6.5B of EBITDA. Normalize everything: 2025's record pool is a cycle reading, not a run rate."] },
    L4: { title: "Expert", text: ["Trade the structure, not the tape: fixed income electronification (Tradeweb's $2.9T ADV) is a decade-long share shift; PFOF and market-data rulemaking are binary repricing events for wholesalers and exchanges; Treasury clearing mandates rewire the repo-dealer nexus. Live debates: whether 2 private market makers standing in most US retail flow is efficiency or systemic fragility, whether passive's inelasticity amplifies the next drawdown, and whether shrinking listed-company counts melt the exchanges' asset base beneath record volumes."] },
    L5: { title: "Institutional", text: ["Allocator's frame: barbell the chain. Core the annuities (exchange data franchises, index and data vendors, clearing infrastructure) at their premium multiples, because they compound through every regime; rent the volatility beta (makers, brokers, bank trading arms) sized to the vol cycle, never capitalized at peak. The system-level risk is plumbing: 1987, 2008, and 2020 were all liquidity-promise failures, not valuation events. Every thesis here reduces to one question: when flow reverses, whose toll survives, and whose balance sheet is the one making the promise."] }
  },

  quiz: [
    { q: "Global securities outstanding split roughly:", choices: ["Equities far larger than bonds", "$126.7T equities vs $145.1T fixed income: bonds are the bigger market", "About $20T combined", "Bonds are triple equities"], answer: 1, explain: "SIFMA's 2025 Fact Book: fixed income ($145.1T) outweighs equities ($126.7T), though equities get the headlines." },
    { q: "In 2025 the top trading revenue on Wall Street belonged to:", choices: ["JPMorgan", "Goldman Sachs", "Jane Street: $39.6B with ~3,500 employees, beating JPMorgan by 11%", "NYSE"], answer: 2, explain: "A private non-bank market maker out-earned every bank trading floor: the decade's defining shift in who makes markets (Bloomberg, 2026)." },
    { q: "The US share of global equity market cap is roughly:", choices: ["10%", "25%", "49%: $62.2T of the $126.7T total", "80%"], answer: 2, explain: "Per SIFMA (2024 year-end), the US holds 49.1% of world equities and 40.1% of world bonds: the gravitational center of both." },
    { q: "By late 2025, US passive fund assets vs active stood at:", choices: ["Active still double passive", "~$19.3T passive vs $17.4T active: passive ahead", "Exactly equal", "Passive under $5T"], answer: 1, explain: "The crossover is done in US funds; flow now concentrates in rebalances and auctions, and index providers became quiet kingmakers." },
    { q: "Market makers earn their best quarters when:", choices: ["Markets are calm", "Volatility spikes: spreads widen and volumes surge simultaneously", "Rates are at zero", "IPO windows are open"], answer: 1, explain: "Volatility is the trading franchise's harvest: 2025's turbulence drove the record $114B revenue pool. Underwriters want the opposite weather." },
    { q: "US equity trading volume in 2025:", choices: ["Fell to decade lows", "Averaged a record 17.7B shares daily, +49%, with the first 20B-share days", "Was flat", "Moved entirely to bonds"], answer: 1, explain: "SIFMA's tape: record ADV through November, a volume boom that history suggests is late-cycle behavior." },
    { q: "The 2020 dash for cash taught that:", choices: ["Treasuries never wobble", "Even the safest market's liquidity is plumbing: dealer capacity, and it can jam", "Retail caused it", "Clearing is optional"], answer: 1, explain: "Basis-trade unwinds overwhelmed dealer balance sheets until the Fed stepped in: the plumbing, not the asset, is the systemic risk." },
    { q: "An exchange's most durable revenue line is:", choices: ["IPO listing fees", "Transaction fees", "Market data and index licensing: the subscription annuity that grows with passive AUM", "Floor trading badges"], answer: 2, explain: "Transaction fees are competed and regulated; data and index licensing compound quietly, which is why data-heavy exchanges earn the premium multiple." }
  ],

  sources: [
    { name: "SIFMA 2025 Capital Markets Fact Book & research statistics", url: "https://www.sifma.org/research/statistics/fact-book", feeds: "market sizes, ADV, issuance" },
    { name: "Bloomberg: Jane Street / Citadel Securities 2025 trading hauls", url: "https://www.bloomberg.com/news/articles/2026-04-24/jane-street-snatches-wall-street-crown-with-record-39-6-billion-trading-haul", feeds: "trading revenue" },
    { name: "LSEG deal data: 2025 global issuance (via Investment Executive)", url: "https://www.investmentexecutive.com/industry-news/global-equity-debt-activity-up-in-2025-lseg/", feeds: "ECM/DCM issuance, IB fees" },
    { name: "Morningstar US Active/Passive Barometer", url: "https://www.morningstar.com/business/insights/research/active-passive-barometer", feeds: "passive share" }
  ]
};
