/* Industry Atlas - HEDGE FUNDS (full module, research-backed)
 * Anchors: industry capital crossed $5T for the first time at end-2025 and
 * reached ~$5.6T by Q2 2026 (HFR); Citadel is the most profitable hedge fund
 * ever with $90.4B cumulative net gains since 1990 and a 19.2% annualized net
 * return (LCH Investments, Jan 2026); Citadel's 3 largest funds charged
 * ~$12.5B in pass-through expenses 2022 to Sep 2024, ~$11B of it compensation
 * (Bloomberg, 2025); average fees have eroded from 2-and-20 to ~1.4% and ~16%
 * (With Intelligence / industry surveys); 2025 returns: HFRI +12.6%, Citadel
 * Wellington +10.2% (worst since 2018), Millennium +10.5%, S&P 500 +17.9%
 * (Hedgeweek/CNBC, Jan 2026); Citadel returned $5B of 2025 profit (CNBC). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["hedge-funds"] = {
  meta: {
    id: "hedge-funds", name: "Hedge Funds", sector: "finance", status: "full",
    tagline: "A $5.6T market for the scarcest commodity in finance: repeatable alpha. The pod shops cornered it, and they bill you for the electricity.",
    marketSize: { value: 5.6, unit: "$T", asOf: 2026, note: "global hedge fund AUM (HFR, Q2 2026); crossed $5T for the first time at end-2025", mapValue: 150 },
    cagr: { value: 7, range: [4, 10], horizon: "2025-2030" },
    maturity: "mature-consolidating", cyclicality: 4, capitalIntensity: 2, regulation: 3, disruption: 3
  },
  newsQuery: '("hedge fund" OR Citadel OR "Millennium Management" OR "multi-strategy" OR "Point72" OR HFRI OR "activist investor")',

  overview: {
    definition: "Hedge funds are private investment pools that chase absolute returns with tools mutual funds cannot use: leverage, short selling, derivatives, and concentration. The product is alpha; the business is charging some of the highest fees in finance for it, to a client base that is now overwhelmingly institutional.",
    howItWorks: [
      "The vehicle is a lightly regulated private partnership, typically a Cayman master fund fed by onshore and offshore feeders, sold only to institutions and the wealthy. The manager (the GP) runs the money; limited partners (pensions, sovereign wealth funds, endowments, family offices) supply it. Industry capital crossed the $5T mark for the first time at end-2025 and stood above $5.6T by Q2 2026 (HFR): an asset base larger than all but the biggest national banking systems, run by a few thousand firms.",
      "The classic fee deal was 2-and-20: a 2% management fee on assets plus 20% of profits above a high-water mark. Two decades of institutional pressure eroded the average to roughly 1.4% and 16%. But the top of the market went the other way: multi-strategy platforms like Citadel and Millennium replaced the management fee with full expense pass-through, billing LPs for compensation, technology, data, even office costs, then layering an incentive fee on top. Bloomberg found Citadel's 3 largest funds charged about $12.5B in pass-through expenses from 2022 through September 2024, roughly $11B of it employee comp. LPs pay because the net returns have cleared the bar anyway.",
      "The pod shop is the industry's dominant design: dozens to hundreds of autonomous teams (pods) running tight, market-neutral risk under a centralized risk engine that levers the diversified book 5x to 8x. Discipline is brutal: Millennium famously cuts portfolio managers whose losses approach 7.5%, and annual PM turnover at the platforms runs 15% to 20%. That machine converts many small, uncorrelated edges into a steady double-digit net return, which is why allocators queue for capacity, and why the war for proven PMs has produced $50M+ packages as routine and guarantees reported up to $120M for a single senior hire.",
      "Alpha has capacity limits, so the best firms ration size rather than stretch it: Citadel returned $5B of 2025 profit to investors and has handed back well over $25B since 2017, keeping the fund small enough to compound. The scoreboard is kept by LCH Investments: Citadel is the most profitable hedge fund of all time with $90.4B in cumulative net gains since 1990 (a 19.2% annualized net return), adding $7.4B in 2025 even in its weakest year since 2018 (Wellington +10.2%, vs +12.6% for the HFRI composite and +17.9% for the S&P 500). The lesson in those numbers: the industry's profits concentrate ferociously in a top tier that compounds through every cycle."
    ],
    history: [
      { era: "1949-1989", title: "The hedged fund", text: "Alfred Winslow Jones pairs longs with shorts, adds leverage, and takes 20% of profits: the template. A cottage industry of a few hundred funds serves rich families." },
      { era: "1990-1999", title: "Macro titans", text: "Soros breaks the Bank of England in 1992 (about $1B in a day); Tiger, Moore, and Tudor make global macro glamorous. Then LTCM's Nobel-decorated leverage implodes in 1998 and needs a Fed-brokered $3.6B rescue: genius plus leverage equals systemic risk." },
      { era: "2000-2008", title: "Institutionalization", text: "Two dot-com-proof bear-market wins send pensions and endowments piling in; AUM passes $1T (2004) then nearly $2T. The GFC breaks the spell: the average fund loses about (19%) in 2008 and gates lock investors inside." },
      { era: "2009-2020", title: "The index-shame decade", text: "A relentless S&P bull run makes 2-and-20 look absurd; CalPERS exits hedge funds entirely in 2014. Fees compress, funds of funds shrink, and quants (Renaissance, Two Sigma, D.E. Shaw) plus early pod platforms quietly take share." },
      { era: "2021-present", title: "The platform era", text: "GameStop wrecks Melvin (down 53% in January 2021) while Citadel and Millennium sail on: proof of the pod model. Pass-through fees, nine-figure talent packages, and capacity rationing define the top; industry AUM crosses $5T at end-2025 on back-to-back double-digit years." }
    ],
    trends: [
      { title: "Platform concentration", direction: "up", text: "Multi-strategy firms hold the pricing power, the talent, and the inflow queue; second-tier platforms (Balyasny, Schonfeld, Qube) chase the model, and $55B+ has been farmed to external managers pod-style." },
      { title: "Fee bifurcation", direction: "shift", text: "The average fund's fees keep eroding toward 1.4-and-16, while top platforms charge pass-through structures whose all-in cost can reach 5% to 7% of assets in strong years. Price follows scarcity of net alpha, not tradition." },
      { title: "Talent inflation", direction: "up", text: "Proven PMs command $50M+ guarantees, non-competes stretch past 2 years, and gardening leave parks capacity on the sidelines: comp is the industry's largest cost and its tightest bottleneck." },
      { title: "Capacity discipline", direction: "shift", text: "Elite funds return profits annually (Citadel: $5B for 2025) and hard-close rather than dilute returns: AUM growth migrates to second-tier platforms and new launches instead." },
      { title: "Quant, AI, and data arms race", direction: "up", text: "Alternative data, machine learning, and systematic execution spread from quant shops to every strategy; the expense is real (and passed through), and the edges decay faster each year." }
    ],
    outlook: "The industry enters the late 2020s at record size with a barbell forming: elite platforms rationing scarce capacity at premium fees, and everyone else fighting fee compression to stay in institutional portfolios. Watch three tensions: whether pod-shop returns survive their own crowding (many platforms, similar trades, shared leverage), whether LPs keep tolerating pass-through economics if net returns lag a strong S&P (2025 already tested this), and whether AI compresses the half-life of every edge. The likely path is consolidation: more AUM, fewer firms that matter, and alpha priced like the scarce asset it is."
  },

  structure: {
    suppliers: [
      { name: "Talent pipelines (banks, prop shops, PhD programs)", note: "The true raw material; sell-side desks and quant academia feed the pods" },
      { name: "Data and analytics vendors", note: "Market data, alternative data, and research: costs that pass straight through to LPs at platforms" },
      { name: "Technology and execution infrastructure", note: "Low-latency plumbing, risk systems, cloud compute: the quant arms race's suppliers" },
      { name: "Legal, audit, and fund formation", note: "Cayman counsel, Big 4 audit, compliance: the institutional wrapper" }
    ],
    producers: [
      { name: "Multi-strategy platforms (Citadel, Millennium, Point72)", note: "The dominant design: pods, pass-through, capacity rationing" },
      { name: "Quant firms (Renaissance, D.E. Shaw, Two Sigma)", note: "Systematic alpha factories; Medallion remains the industry's legend" },
      { name: "Macro and relative value (Bridgewater, Brevan Howard)", note: "Rates, FX, and convexity: the crisis-alpha wing" },
      { name: "Long/short, event-driven, and activists (TCI, Elliott)", note: "Concentrated stock-picking; TCI's $18.9B gain in 2025 was a single-year record (Forbes/LCH)" }
    ],
    distributors: [
      { name: "Prime brokerage capital introduction", note: "Banks matchmake funds and allocators to win the financing business" },
      { name: "Investment consultants (Albourne, Mercer class)", note: "The institutional gatekeepers; their fee scrutiny drove 2-and-20's erosion" },
      { name: "Funds of funds", note: "Shrunken but surviving as capacity-access vehicles for the closed platforms" }
    ],
    customers: [
      { name: "Pensions and sovereign wealth funds", note: "The biggest checks; buy diversification and drawdown protection, not lottery tickets" },
      { name: "Endowments and foundations", note: "The original institutional adopters (the Yale model)" },
      { name: "Family offices and private wealth", note: "The founding client base, now the flexible tail of the LP register" }
    ],
    regulators: [
      { name: "SEC", note: "Adviser registration, Form PF systemic reporting, 13F disclosure; its 2023 private fund rules were struck down in court in 2024" },
      { name: "CFTC and prudential regulators", note: "Derivatives and the leverage channel; the Treasury basis trade keeps them awake" },
      { name: "Offshore regulators (Cayman CIMA) and the FCA", note: "Domicile plumbing and the London management hub" }
    ],
    capital: [
      { name: "LP capital (locked with gates and quarterly windows)", note: "The equity; lockups are the industry's liability management" },
      { name: "Prime broker financing", note: "The leverage: margin loans, swaps, and repo that turn 1x edges into 6x returns" },
      { name: "GP-stakes buyers (Petershill, Blue Owl class)", note: "Outside equity in the management companies themselves: how founders monetize" }
    ]
  },

  valueChain: {
    intro: "From a pension's allocation memo to a pod's P&L and back. The chain's profits pool wherever net alpha is provably scarce: in the platforms that manufacture it and the talent they bid for.",
    stages: [
      { id: "capital-sourcing", name: "Capital raising & allocators", what: "LP commitments, consultants, cap intro", players: "Pensions, SWFs, endowments, Albourne class", valueCapture: 2,
        economics: { grossMargin: [0, 10], capitalIntensity: 1, concentration: 3 },
        linksTo: ["asset-management", "wealth-management", "insurance"],
        deeper: "Capital is abundant; capacity is not. The power balance inverted in the 2020s: elite platforms choose their LPs, impose pass-through terms, and return profits rather than accept more. Everyone else still pitches." },
      { id: "talent", name: "Talent supply chain", what: "PMs, analysts, quants: sourcing, vetting, retaining", players: "Platforms' business development armies, headhunters", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 2 },
        linksTo: ["investment-banking", "asset-management"],
        deeper: "The industry's real factor market. Proven PMs are the scarce input: $50M+ packages are routine, single guarantees have reached a reported $120M, and 2-year non-competes park talent on paid leave just to deny rivals. Comp is the largest line in every platform's pass-through bill." },
      { id: "alpha-production", name: "Alpha production (strategies)", what: "Research, positioning, portfolio construction across L/S equity, macro, credit, quant", players: "Citadel, Millennium, D.E. Shaw, Bridgewater, TCI", valueCapture: 5,
        economics: { grossMargin: [50, 70], capitalIntensity: 2, concentration: 3 },
        linksTo: ["capital-markets", "ai"],
        deeper: "The manufacturing floor. Pod shops industrialized it: many small uncorrelated edges, ruthless stop-outs (Millennium cuts PMs near 7.5% drawdowns), and centralized leverage. Single-manager funds still win big in concentrated form: TCI's $18.9B profit in 2025 was the largest single-year gain LCH has recorded." },
      { id: "leverage-execution", name: "Leverage & execution (prime brokerage)", what: "Margin financing, securities lending, swaps, clearing", players: "Goldman Sachs, Morgan Stanley, JPMorgan primes", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 4, concentration: 4 },
        linksTo: ["banking", "capital-markets", "market-infrastructure"],
        deeper: "The banks' quiet gold mine: prime brokerage revenue compounds with hedge fund leverage, and the top 3 primes finance most of the industry. Archegos (2021, $10B+ of bank losses) showed the tail risk of financing concentration; the Treasury basis trade shows the systemic version." },
      { id: "infrastructure", name: "Fund infrastructure & data", what: "Administration, custody, audit, market and alternative data", players: "Citco, SS&C, State Street; Bloomberg, S&P", valueCapture: 3,
        economics: { grossMargin: [30, 50], capitalIntensity: 3, concentration: 4 },
        linksTo: ["data-infrastructure", "market-infrastructure"],
        deeper: "Post-Madoff, independent administration became mandatory hygiene: NAV calculation moved out of the manager's hands. Data is the growth line: platforms spend hundreds of millions on feeds and compute, an expense LPs now pay directly under pass-through." },
      { id: "fee-distribution", name: "Fees & the manager P&L", what: "Management fees, incentive fees, pass-through billing, GP stakes", players: "The GPs; Petershill and Blue Owl as equity buyers", valueCapture: 5,
        economics: { grossMargin: [40, 60], capitalIntensity: 1, concentration: 3 },
        linksTo: ["asset-management", "private-equity"],
        deeper: "Where the industry's economics crystallize. The average fund sells at 1.4-and-16 and falling; the elite bill costs plus 20%+ of gains. Citadel's 3 biggest funds passed through ~$12.5B of expenses in under 3 years (Bloomberg): a comp bill LPs paid because net returns still beat the alternatives. GP-stakes deals price these fee streams like annuities." }
    ]
  },

  financials: {
    businessModel: [
      "Separate the fund from the firm. The fund's P&L belongs to LPs: gross trading returns, minus financing costs, minus fees, equals net return, and the manager's job is keeping that net number above what a 60/40 portfolio delivers with less hassle. The firm's P&L is the fee machine: management fees (or pass-through billing) cover the cost base, and incentive fees above the high-water mark are nearly pure margin. At scale the operating leverage is enormous: a platform earning 20% of gains on $60B of levered capital mints billions in a good year, which is exactly what funds the talent war.",
      "The fee models now define the strategic tiers. Classic 2-and-20 has eroded to roughly 1.4% and 16% on average, squeezing mid-sized single-manager funds hardest: they carry institutional cost bases without platform pricing power. Pass-through inverts the model: the LP pays all expenses (comp above all) plus incentive, so the manager's downside is protected and growth in headcount is funded by clients. The all-in cost can run 5% to 7% of assets in strong years, meaning a platform must generate mid-teens gross just to deliver 10% net: in 2025, Citadel (+10.2%) and Millennium (+10.5%) did roughly that while the S&P returned 17.9%. LPs stay because the return arrives with a fraction of equity beta: the product is the Sharpe ratio, not the raw number."
    ],
    fingerprint: { grossMargin: 60, recurringRevenue: 40, capitalIntensity: 15, pricingPower: 60, cyclicality: 70, operatingLeverage: 85 },
    lines: [
      { label: "Management fees / pass-through billing", note: "The cost-covering base: ~1.4% average, or costs billed direct at platforms" },
      { label: "Incentive fees", note: "The profit engine: ~16-20% of gains above high-water marks; zero in a down year" },
      { label: "Fund performance (gross and net)", note: "The driver of everything: fees, flows, and franchise all key off the return print" },
      { label: "Net flows and capacity", note: "Elite funds return capital (Citadel: $5B for 2025); the rest fight for allocations" },
      { label: "Compensation expense", note: "The dominant cost: ~$11B of Citadel's ~$12.5B pass-through bill was comp (Bloomberg)" }
    ],
    unitEconomics: {
      unit: "per $10B multi-strategy fund, strong year (illustrative)",
      items: [
        { label: "Gross return (levered)", value: "~18%", note: "many small edges, levered 5x to 8x at the book level" },
        { label: "Pass-through expenses", value: "~5-7% of NAV", note: "comp, data, technology billed to LPs (Bloomberg, 2025)" },
        { label: "Incentive fee", value: "~20% of net-of-expense gains", note: "above high-water mark" },
        { label: "LP net return", value: "~10-12%", note: "2025 reality: Citadel +10.2%, Millennium +10.5%" }
      ]
    }
  },

  kpiRefs: ["am-netflows", "am-feerate"],
  kpiLocal: [
    {
      id: "hf-net-sharpe", name: "Net Sharpe Ratio", industries: ["hedge-funds"],
      definition: "Risk-adjusted return delivered to LPs: excess net return per unit of volatility. The metric allocators actually buy; raw returns without it are just beta in a costume.",
      formula: "(net annual return - risk-free rate) / annualized volatility of net returns",
      interpretation: "A fund netting 10% with 4% vol (Sharpe ~1.5) is a better product than one netting 15% with 20% vol. Top platforms sustain Sharpe near or above 2, which is why their capacity is rationed.",
      healthy: "> 1.0 through a full cycle; platforms > 1.5", warning: "< 0.5, or a high Sharpe built on short-vol or illiquid marks (smooth until it isn't)" },
    {
      id: "hf-fee-load", name: "All-In Fee Load", industries: ["hedge-funds"],
      definition: "Total annual cost to the LP as a % of NAV: management fee plus incentive fee plus pass-through expenses. The gap between gross and net returns.",
      formula: "(management fees + incentive fees + passed-through expenses) / average NAV",
      interpretation: "Averages have eroded toward 1.4-and-16, but platform all-in loads reach 5% to 7% in strong years. The load is defensible only while net returns clear the LP's next-best alternative.",
      healthy: "Net alpha comfortably exceeds the load; load falls in down years (incentive = 0)", warning: "Fee load consuming more than half of gross returns; pass-through billing rising while net returns lag" }
  ],

  health: {
    intro: "A hedge fund's health is measured in net alpha, capital stickiness, and bench depth: the fund dies when any one of returns, LPs, or talent walks out, and they tend to leave together.",
    pillars: [
      { name: "Alpha persistence", weight: 30, metrics: "Net return vs strategy benchmark, Sharpe, high-water mark status", healthy: "Positive net alpha across 3+ year windows; above high-water mark", warning: "2+ years under the mark (incentive fees dead, talent flees)" },
      { name: "Capital durability", weight: 20, metrics: "LP concentration, lockup terms, redemption queue, capacity policy", healthy: "Diversified institutional LPs, multi-year locks, returning capital by choice", warning: "Single-LP dependence; gates raised under stress (the 2008 scar)" },
      { name: "Talent bench", weight: 20, metrics: "PM retention, succession depth, comp competitiveness", healthy: "Low regretted attrition; alpha survives any single departure", warning: "Key-man concentration; star PMs poached with $50M+ guarantees" },
      { name: "Risk and leverage discipline", weight: 15, metrics: "Drawdown control, gross/net exposure, financing term and diversity", healthy: "Stop-out discipline enforced (the 7.5% rule); termed financing across multiple primes", warning: "Style drift, leverage creep, overnight financing concentration" },
      { name: "Alignment and fee economics", weight: 15, metrics: "GP capital in fund, fee structure vs net value added, expense transparency", healthy: "Large GP co-investment; fees earned by net alpha", warning: "Pass-through opacity plus mediocre nets; GP wealth extracted via fees, not returns" }
    ],
    scoringNote: "Weight alpha persistence double in a fund under 5 years old: everything else can be bought, but a real edge cannot be faked for long against a high-water mark."
  },

  valuation: {
    intro: "The funds themselves are marked daily; what gets valued is the management company: a fee stream on flighty capital, priced like an annuity when the capital is sticky and like an option when it is not.",
    methods: [
      { name: "Fee-related earnings (FRE) multiple", use: "The GP-stakes lens: value recurring management-fee earnings like an asset-light annuity", avoid: "Applying FRE multiples to incentive fees; they are an option, not an annuity", strengths: "Separates durable economics from performance luck", weaknesses: "Hedge fund capital is less locked than PE: multiples should discount for it", range: { low: 8, high: 16, asOf: 2025, note: "x FRE; sticky platform capital earns the top of the range" } },
      { name: "Incentive fees at a haircut multiple", use: "Layer on performance fees at 3-6x a normalized (not peak) year", avoid: "Capitalizing a record year: 2025's $7.4B Citadel gain is not an annuity", strengths: "Captures the real upside without paying annuity prices for it", weaknesses: "Normalizing is guesswork; high-water marks make it path-dependent", range: { low: 3, high: 6, asOf: 2025, note: "x normalized incentive fee earnings" } },
      { name: "% of AUM heuristic", use: "Quick sanity check across GP-stake transactions", avoid: "Comparing pass-through platforms to 1-and-10 long/short shops on the same %", strengths: "Fast, comparable, deal-tested", weaknesses: "Ignores fee structure entirely: the whole story is in the rate", range: { low: 2, high: 10, asOf: 2025, note: "% of AUM; fee quality and stickiness set the point in range" } },
      { name: "Listed manager comps", use: "Man Group and listed alternatives as the public market's read on fee streams", avoid: "Reading one stock as the industry: listed names skew systematic and lower-fee", strengths: "Live market pricing, honest about cyclicality", weaknesses: "Thin comp set; the best economics (Citadel, Millennium) are private", range: { low: 8, high: 12, asOf: 2025, note: "x earnings for listed managers; a visible discount to PE-firm multiples" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a hedge fund management company: fee-related earnings times a stickiness-adjusted multiple, plus balance-sheet cash and GP investments net of debt.",
      inputs: [
        { id: "vc-fre", label: "Fee-related earnings ($B)", min: 0.1, max: 5, step: 0.1, value: 0.8, fmt: "money" },
        { id: "vc-mult", label: "FRE multiple", min: 6, max: 18, step: 0.5, value: 11, fmt: "mult" },
        { id: "vc-netcash", label: "Net cash / (debt) ($B)", min: -3, max: 6, step: 0.5, value: 1, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats hedge funds two ways: as competitors setting the marginal price of alpha and talent, and as an investable ecosystem via listed managers, GP-stakes vehicles, and the prime brokerage banks that tax the leverage. The industry's own health is a market signal: platform gross exposure, pod crowding, and financing spreads tell you where forced selling will come from before it comes.",
    debates: [
      { topic: "Pod shops: durable alpha machines or a crowded leverage treadmill?", bull: "The model industrializes alpha: hundreds of uncorrelated edges, ruthless risk discipline, and capacity rationing produced double-digit nets with equity-fraction volatility for a decade. Citadel's $90.4B lifetime and 19.2% annualized net (LCH) is the record every allocator can read.", bear: "Every platform runs similar pods, similar factors, and borrows from the same 3 primes: the edges are shared, the leverage is shared, and a January 2025-style 2.5% half-year showed the machine sputters when crowded trades chop. The next deleveraging event is a fire in a theater where every exit is the same door." },
      { topic: "Is the pass-through fee model defensible?", bull: "LPs buy net returns, and pass-through funds the talent and technology that produce them: Citadel netted LPs $7.4B in 2025 even in its worst year since 2018. Alignment survives because the incentive fee only pays above the mark: expensive and worth it beats cheap and mediocre.", bear: "A structure where clients fund $11B of employee comp regardless of outcome (Bloomberg) has manager-friendly asymmetry baked in; a third of institutions already say fees are too high, and one 5%-net year against a 20% S&P turns the queue of LPs into a queue of redemptions." },
      { topic: "Does the industry deserve $5.6T, or has AUM outrun alpha?", bull: "Back-to-back double-digit years (11.2% average in 2025 per Barclays) and record inflows say institutions get what they pay for: uncorrelated return streams in a world where bonds stopped diversifying. The $5T milestone reflects earned trust, not froth.", bear: "Alpha is a roughly fixed pie and AUM doubling means thinner slices: the industry lagged the S&P in both banner years, elite funds returning billions confirm the capacity math, and marginal dollars are flowing to second-tier platforms running the same trades with less talent. Size is the enemy, and the industry just ate it." }
    ],
    cycle: {
      where: "Late innings of the platform boom: record AUM ($5.6T, HFR Q2 2026), record fee extraction, nine-figure talent packages, and the first LP grumbles about nets lagging a strong S&P. Historically that mix (peak size, peak comp, crowding) precedes a shakeout that the disciplined survive and the levered do not.",
      drivers: "Market dispersion (alpha's raw material), rates (cash yields raise the fee hurdle and fund short rebates), prime brokerage leverage supply, and the equity cycle that sets the opportunity cost.",
      leads: [
        "HFR monthly index prints and quarterly flow commentary (free press releases)",
        "SEC 13F filings, 45 days after quarter-end (EDGAR, free): position crowding across platforms",
        "OFR Hedge Fund Monitor: leverage and Treasury basis trade exposure (free)",
        "Fed Senior Credit Officer Opinion Survey: dealer financing terms tightening or easing (free)",
        "CFTC Commitments of Traders: leveraged fund positioning in futures (free, weekly)"
      ]
    },
    exposure: [
      { vehicle: "Man Group (listed)", note: "The cleanest public hedge fund manager: fee-stream economics, priced daily" },
      { vehicle: "GP-stakes vehicles (Blue Owl, Petershill class)", note: "Diversified slices of private managers' fee streams" },
      { vehicle: "Prime brokerage banks (Goldman Sachs, Morgan Stanley)", note: "The tax collectors on leverage: revenue compounds with platform gross exposure" },
      { vehicle: "Alternative asset managers with hedge fund arms (Blackstone class)", note: "BAAM-style allocator businesses: fees on the fund-picking layer" },
      { vehicle: "Managed futures / replication ETFs (DBMF class)", note: "Strategy beta at ETF fees: what the average fund must now beat to justify itself" }
    ],
    catalysts: [
      { when: "January", what: "LCH annual rankings and full-year return prints: the industry's public scoreboard" },
      { when: "Quarterly (45 days after quarter-end)", what: "13F season: crowding, new positions, and copy-trading flows" },
      { when: "Semiannual", what: "Fed Financial Stability Report and OFR updates on hedge fund leverage and the basis trade" },
      { when: "Q4", what: "Redemption notice deadlines and capacity decisions: who returns capital, who gates, who reopens" }
    ],
    data: [
      { series: "13F institutional holdings", source: "SEC EDGAR (free)", why: "The only mandated window into equity books: crowding and conviction" },
      { series: "HFRI index returns and industry AUM", source: "hfr.com press releases (free)", why: "The performance and flow tape" },
      { series: "Hedge fund leverage and basis trade metrics", source: "OFR Hedge Fund Monitor (free)", why: "The systemic risk dashboard regulators actually watch" },
      { series: "Leveraged fund futures positioning", source: "CFTC Commitments of Traders (free)", why: "Weekly read on macro and basis positioning" },
      { series: "Dealer financing terms", source: "Fed SCOOS (free)", why: "When primes tighten terms, deleveraging follows" }
    ],
    playbook: [
      { regime: "Vol spike / risk-off", behavior: "Pod shops de-gross fast and mechanically: their selling amplifies the move (August 2024 template). Macro and CTAs are the hedges that pay; watch financing spreads for contagion." },
      { regime: "Rates rising", behavior: "Cash at 5% raises every fund's hurdle but fattens short rebates and widens dispersion: relative value and macro feast, levered duration trades (the basis trade) become the systemic worry." },
      { regime: "Bull-beta melt-up", behavior: "Hedged books lag the index by design; expect fee-worthiness headlines and LP impatience. The discipline test: funds that chase beta into the top give back their franchise in the drawdown." },
      { regime: "Deleveraging event", behavior: "Crowded longs fall harder than the market while shorts squeeze: the pain trade is platform consensus unwinding. Buy what the pods are forced to sell; the recovery trade has repeated for 30 years." }
    ]
  },

  players: [
    { name: "Citadel", role: "The apex platform", country: "US", real: true, note: "$90.4B lifetime net gains since 1990, 19.2% annualized (LCH, Jan 2026); returned $5B of 2025 profit" },
    { name: "Millennium Management", role: "The pod-shop archetype", country: "US", real: true, note: "~330+ pods, ruthless 7.5% drawdown discipline; +10.5% in 2025" },
    { name: "Bridgewater Associates", role: "Macro institution", country: "US", real: true, note: "The largest macro shop; risk-parity's inventor, rebuilt post-Dalio" },
    { name: "D.E. Shaw", role: "Quant pioneer", country: "US", real: true, note: "Systematic and hybrid strategies; among LCH's top lifetime money-makers" },
    { name: "Renaissance Technologies", role: "The quant legend", country: "US", real: true, note: "Medallion's decades of ~66% gross returns remain the industry's unmatched artifact" },
    { name: "Point72", role: "Platform challenger", country: "US", real: true, note: "Cohen's rebuilt firm; topped Citadel and Millennium's 2025 returns" },
    { name: "TCI Fund Management", role: "Concentrated activist", country: "GB", real: true, note: "$18.9B profit in 2025: the largest single-year gain LCH has recorded" },
    { name: "Man Group", role: "The listed manager", country: "GB", real: true, note: "The public market's window into hedge fund economics; systematic-heavy" }
  ],

  geography: [
    { country: "US", role: "The center of gravity", note: "New York, Greenwich, Chicago, and now Miami: most AUM, most talent, most fees" },
    { country: "GB", role: "European hub", note: "London's Mayfair and St James's: macro, quant (Qube), and activists (TCI)" },
    { country: "KY", role: "Domicile of record", note: "The Cayman master-feeder is the industry's default legal plumbing" },
    { country: "SG", role: "Asia's rising hub", note: "Singapore's fund incentives pulled launches from Hong Kong through the 2020s" },
    { country: "AE", role: "The new magnet", note: "Dubai and Abu Dhabi: tax, time zone, and sovereign LPs next door; platforms opened en masse" },
    { country: "CH", role: "Quiet money", note: "Geneva and Pfaeffikon: macro shops and the private-wealth LP base" }
  ],

  cycles: [
    { year: 1998, title: "LTCM", kind: "bust", text: "Nobel laureates lever a convergence book 25x; Russia defaults; the Fed brokers a $3.6B rescue to stop the unwind cascading. Lesson: leverage converts being right eventually into being dead now." },
    { year: 2008, title: "The gates", kind: "bust", text: "The average fund loses about (19%), but the deeper wound is liquidity: managers gate redemptions and the 'hedge' in hedge fund is exposed as marketing for many. Lesson: your terms are your risk model; LPs never forgot the gates." },
    { year: 2014, title: "CalPERS walks", kind: "shift", text: "America's largest pension kills its hedge fund program, calling it too costly and complex: the fee revolt goes mainstream and 2-and-20 begins its slide toward 1.4-and-16. Lesson: in a decade of index shame, fees are the performance you control." },
    { year: 2021, title: "GameStop and Archegos", kind: "shift", text: "Melvin loses 53% in a January to a Reddit squeeze; Archegos vaporizes $10B+ of prime broker capital in a week. The pod platforms sail through both. Lesson: concentration is the killer; the diversified-pod model won the argument." },
    { year: 2025, title: "The $5T year", kind: "boom", text: "Industry capital crosses $5T (HFR), the average fund returns 11.2% (Barclays), TCI books a record $18.9B, and Citadel returns $5B to LPs anyway. Yet the S&P's 17.9% out-runs nearly everyone. Lesson: peak AUM, peak comp, and index-lagging nets are how late cycle looks in this industry." }
  ],

  risks: [
    { name: "Crowded platform deleveraging", severity: 4, likelihood: 4, transmission: "Vol spike -> pods hit stop-outs simultaneously -> forced de-grossing across platforms holding the same trades -> price moves feed further stop-outs (August 2024 in miniature; a bigger version awaits)." },
    { name: "Treasury basis trade unwind", severity: 5, likelihood: 2, transmission: "Repo stress or margin spike -> levered basis positions (hundreds of billions, OFR-tracked) unwind -> Treasury market dysfunction -> Fed forced to intervene -> hedge fund leverage becomes a political target." },
    { name: "Fee model backlash", severity: 3, likelihood: 3, transmission: "Nets lag a strong S&P for 2+ years -> consultants turn -> pass-through terms renegotiated and average fees grind below 1.4-and-16 -> mid-tier funds become uneconomic and consolidate or close." },
    { name: "Talent cost spiral", severity: 3, likelihood: 4, transmission: "$50M+ guarantees and $120M packages escalate -> comp consumes the alpha pool -> LPs fund richer payrolls for thinner nets -> the marginal platform launch stops penciling." },
    { name: "Regulatory re-perimeter", severity: 3, likelihood: 3, transmission: "A systemic scare (basis trade, prime broker loss) -> leverage caps, dealer financing limits, or mandatory clearing -> the levered relative-value complex shrinks and its fee streams with it." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Hedge funds are private investment funds for institutions and the wealthy that can bet on prices falling as well as rising, borrow to amplify positions, and charge fees far above mutual funds: historically 2% of assets plus 20% of profits. The industry manages about $5.6T (2026). The pitch is returns that do not depend on the stock market going up; the reality is a huge range, from the best compounding machines in finance to expensive mediocrity."] },
    L2: { title: "Intermediate", text: ["Know the strategy map (long/short equity, macro, relative value, event-driven, quant) and the fee reality: the average fund now charges about 1.4-and-16, while elite multi-strategy platforms bill all expenses to clients (pass-through) plus incentive. The platforms (Citadel, Millennium, Point72) run hundreds of small teams under strict risk limits, levered several times over, producing steady double-digit nets: Citadel's +10.2% in 2025 was its worst year since 2018. Fees only get paid above the high-water mark: a fund underwater earns no incentive until losses are recovered."] },
    L3: { title: "Advanced", text: ["Analyze a fund like an allocator: net-of-everything alpha versus strategy beta, Sharpe not raw return, capacity discipline (the best return capital: Citadel handed back $5B for 2025), terms (lockups, gates), and the all-in fee load, which reaches 5% to 7% of NAV at pass-through platforms in strong years (Bloomberg counted ~$12.5B of expenses at Citadel's 3 largest funds in under 3 years, ~$11B of it comp). Analyze the manager like a business: fee-related earnings valued as an annuity, incentive fees as an option, talent as the balance sheet."] },
    L4: { title: "Expert", text: ["Trade the ecosystem's mechanics: 13F crowding across platforms, OFR leverage data, prime financing terms (SCOOS), and the reflexivity of pod risk management: simultaneous stop-outs turn dips into cascades, and buying what platforms are forced to sell has worked for 30 years. Live debates: whether pod alpha survives its own crowding, whether pass-through economics survive an index-lagging stretch, and whether $5.6T of AUM has outrun a roughly fixed alpha pool. Watch the talent market as a leading indicator: guarantees peak before returns do."] },
    L5: { title: "Institutional", text: ["Allocator's frame: hedge funds are a fee-heavy claim on the scarcest input in markets, and the dispersion between managers dwarfs the average (LCH's core finding: the top 20 firms capture most of the industry's lifetime gains, Citadel's $90.4B leading). Underwrite persistence, not last year's print; pay premium fees only where net alpha is proven and capacity-rationed; treat the industry's aggregate leverage as your portfolio's hidden correlation in a crisis. The uncomfortable truth at $5.6T: the average dollar in the industry now buys index-lagging returns, while the access-constrained top tier remains genuinely worth the queue."] }
  },

  quiz: [
    { q: "Global hedge fund industry capital in 2026 stands at roughly:", choices: ["$1T", "$3T", "$5.6T, having crossed $5T for the first time at end-2025 (HFR)", "$15T"], answer: 2, explain: "HFR marked the historic $5T crossing at end-2025; capital reached about $5.6T by Q2 2026 on record inflows and back-to-back double-digit return years." },
    { q: "The classic hedge fund fee model, and where averages sit today:", choices: ["2-and-20 then, roughly 1.4-and-16 now: two decades of institutional pressure", "Fees have risen for everyone", "Flat 5% of assets", "Free until profitable"], answer: 0, explain: "Average management fees eroded from 2% toward 1.4% and incentive fees from 20% toward 16%: except at elite platforms, where pass-through made all-in costs higher than ever." },
    { q: "Pass-through fees mean LPs at platforms like Citadel pay:", choices: ["Only profits", "A fixed 2%", "All fund expenses (comp, data, technology) plus an incentive fee: ~$12.5B billed by Citadel's 3 largest funds in under 3 years", "Nothing"], answer: 2, explain: "Bloomberg's 2025 analysis found ~$11B of that ~$12.5B was employee compensation: clients fund the talent war directly, and pay it in down years too." },
    { q: "The most profitable hedge fund of all time, per LCH Investments:", choices: ["Bridgewater", "Citadel: $90.4B in net gains since 1990, a 19.2% annualized net return", "Melvin Capital", "LTCM"], answer: 1, explain: "LCH has ranked Citadel first 4 years running (through Jan 2026); it added $7.4B in 2025 even in its weakest year since 2018." },
    { q: "Multi-strategy pod shops control risk primarily by:", choices: ["Buying index funds", "Avoiding leverage entirely", "Diversifying across asset classes only", "Tight per-pod drawdown limits: Millennium cuts PMs whose losses approach 7.5%"], answer: 3, explain: "Many small, market-neutral books under ruthless stop-out discipline let the platform lever the diversified whole 5x to 8x: the model that won the 2020s." },
    { q: "Top platforms returning capital (Citadel: $5B of 2025 profit) signals:", choices: ["Distress", "Alpha has capacity limits: keeping funds smaller protects returns per dollar", "Regulatory orders", "Lack of ideas"], answer: 1, explain: "Elite funds ration size because edges dilute with AUM: returning profits keeps the compounding rate high and the LP queue long." },
    { q: "In 2025 the average hedge fund returned about 11-12.6% while the S&P 500 returned 17.9%. The right conclusion:", choices: ["Hedge funds failed", "Hedge funds beat the market", "The comparison needs risk-adjusting: hedged books run a fraction of equity volatility, and allocators buy the Sharpe, not the raw print", "The S&P data is wrong"], answer: 2, explain: "A hedged 11% with low drawdown risk is a different product than unhedged beta: though a multi-year gap this wide is exactly what re-opens the fee debate." },
    { q: "The clearest systemic-risk channel from hedge funds today:", choices: ["Retail fraud", "Levered Treasury basis trades financed by dealers: a forced unwind could impair the world's benchmark market", "Too few funds", "Excessive cash holdings"], answer: 1, explain: "OFR and the Fed track hundreds of billions in levered basis positions: the reason regulators publish hedge fund leverage monitors and lose sleep over repo." }
  ],

  sources: [
    { name: "HFR market commentary ($5T milestone, industry AUM)", url: "https://www.hfr.com/media/market-commentary/global-hedge-fund-industry-capital-surges-past-historic-5-trillion-milestone/", feeds: "AUM, flows, index returns" },
    { name: "CNBC on LCH Investments 2025 rankings (Citadel $90.4B lifetime)", url: "https://www.cnbc.com/2026/01/19/hedge-fund-profit-billions-citadel-bridgewater-millennium-titan-elite-gains-dalio.html", feeds: "manager gains, rankings" },
    { name: "Bloomberg pass-through fee analysis (2025)", url: "https://www.bloomberg.com/graphics/2025-hedge-fund-investment-fees/", feeds: "fee structures, expenses" },
    { name: "SEC EDGAR 13F filings", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=13F", feeds: "holdings, crowding" }
  ]
};
