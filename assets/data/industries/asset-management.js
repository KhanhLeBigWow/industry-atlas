/* Industry Atlas - ASSET MANAGEMENT (full module, research-backed)
 * Anchors: BCG Global Asset Management 2025: global AUM ~$128T in 2024
 * (+12%), but ~70% of revenue growth since 2006 from market performance,
 * not net flows; blended fees ~21-22bps and grinding lower; passive and
 * alternatives take the flows while active core shrinks. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["asset-management"] = {
  meta: {
    id: "asset-management", name: "Asset Management", sector: "finance", status: "full",
    tagline: "$128T of other people's money, ~21bps at a time: an industry whose growth the market gave, and fee wars keep taking away.",
    marketSize: { value: 128, unit: "$T", asOf: 2024, note: "global AUM (BCG); industry revenue ~$430B" },
    cagr: { value: 6, range: [4, 9], horizon: "2024-2030, AUM terms" },
    maturity: "mature-restructuring", cyclicality: 4, capitalIntensity: 1, regulation: 4, disruption: 3
  },
  newsQuery: '(BlackRock OR Vanguard OR "asset management" OR "ETF flows" OR "private markets" fundraising)',

  overview: {
    definition: "Asset managers invest other people's money (pensions, insurers, sovereign funds, households) for a fee, typically a % of assets under management (AUM). It is finance's great scale business: near-zero marginal cost per dollar managed, and a 40-year bull market as a silent business partner.",
    howItWorks: [
      "The model is beautifully simple: gather assets, charge basis points, let markets compound the base. Global AUM hit a record ~$128T in 2024 (+12%, BCG). But the model's secret is uncomfortable: ~70% of the industry's revenue growth since 2006 came from market appreciation, not from winning new money. The industry has been getting paid for beta while selling alpha.",
      "The fee structure is a barbell pulling apart: passive (index funds/ETFs at 3-10bps) takes most net flows: Vanguard and BlackRock's iShares turned investing into a commodity: while alternatives (private equity, private credit, real assets at 1-2% + carry) take most of the profit pool. The middle (traditional active mutual funds at 50-100bps that mostly lag their benchmarks) shrinks every year. Blended industry fees grind down ~1bp at a time, to roughly 21-22bps.",
      "Scale decides everything. Managing money costs nearly the same at $1B and $100B, so giants compound advantages: BlackRock (~$11.5T) monetizes technology (Aladdin) on top of fees; Vanguard's mutual ownership recycles scale into fee cuts, an unanswerable weapon. Meanwhile alternatives houses (Blackstone at $1T+) earn more revenue per dollar than index giants earn per hundred.",
      "The industry's strategic scramble: push into private markets (the fee refuge), fight for the retail wealth channel (model portfolios, active ETFs, direct indexing), and now wire private assets into 401(k)s and ETFs: the 'democratization' wave that is either the next growth engine or the next mis-selling scandal, depending on execution. Consolidation rolls on because mid-size generalists have no answer to the barbell."
    ],
    history: [
      { era: "1924-1975", title: "The mutual fund era", text: "Pooled vehicles democratize markets; star managers and 8% loads; the industry sells access." },
      { era: "1975-2000", title: "The index heresy", text: "Bogle launches the first index fund ('un-American'); 401(k)s shift retirement onto markets; fees begin their long descent." },
      { era: "2000-2008", title: "Star culture peaks", text: "Active management's last golden age; hedge funds mystique; the crisis then shreds trust in expensive mediocrity." },
      { era: "2008-2020", title: "The passive avalanche", text: "Post-crisis, flows stampede to index/ETF; BlackRock buys iShares (the deal of the century); fee wars hit zero (literally: free funds)." },
      { era: "2020-present", title: "Barbell and blur", text: "AUM records ($128T) mask fee compression; alternatives managers become the industry's aristocracy; everyone converges on the wealth channel and private-markets access products." }
    ],
    trends: [
      { title: "The barbell", direction: "shift", text: "Flows to cheap beta, profits to expensive alts, and the priced-for-alpha middle melts: the industry's defining structure." },
      { title: "Fee compression, forever", direction: "down", text: "Blended fees ~21-22bps and down ~40% since 2010: every product ages into a cheaper version of itself." },
      { title: "Private markets in retail wrappers", direction: "up", text: "Semi-liquid funds, interval funds, private-asset ETFs, 401(k) inclusion: the industry's chosen growth story and its next regulatory battleground." },
      { title: "Technology as the product", direction: "up", text: "Aladdin, direct indexing, model portfolios: the winners sell infrastructure and portfolios, not just funds." },
      { title: "Consolidation of the middle", direction: "shift", text: "Sub-scale active managers merge (or are absorbed) because the barbell leaves them no economic home." }
    ],
    outlook: "AUM grows with markets and savings (call it 5-7%/yr through cycles) but revenue grows slower and profit slower still, unless mix shifts to alts and solutions. BCG's uncomfortable math (70% of revenue growth = market beta) means the industry's P&L is a leveraged market bet wearing a fee schedule. The prize scenarios: private-markets democratization works (trillions of retail money at 10x passive fees), or tokenization/AI resets distribution. The grind scenario: beta stays cheap, alpha stays elusive, and the industry slowly becomes infrastructure: enormous, essential, and thin."
  },

  structure: {
    suppliers: [
      { name: "Capital markets & issuers", note: "The raw material: securities to buy, companies to fund" },
      { name: "Index providers (MSCI, S&P DJI, FTSE)", note: "The quiet oligopoly: they license the benchmarks everything tracks, at 30%+ margins" },
      { name: "Custodians & fund admin (BNY, State Street, SS&C)", note: "The plumbing: safekeeping, NAV, transfer agency" },
      { name: "Data & tech (Bloomberg, FactSet, Aladdin)", note: "The desks' operating system; increasingly the differentiator" }
    ],
    producers: [
      { name: "Index giants (BlackRock, Vanguard, State Street)", note: "The beta factories: ~$25T combined; scale is the product" },
      { name: "Active houses (Fidelity, Capital Group, T. Rowe)", note: "The squeezed middle fighting for relevance via active ETFs and retirement" },
      { name: "Alternatives aristocracy (Blackstone, KKR, Apollo, Ares)", note: "1-2% + carry on $1T+ each direction: the profit pool's new home" },
      { name: "Quants & hedge funds (Citadel, Millennium, AQR)", note: "The alpha industry proper: pod shops charge pass-throughs and earn them" }
    ],
    distributors: [
      { name: "Wealth platforms & RIAs", note: "The new kingmakers: model portfolios decide where trillions sit" },
      { name: "Retirement channels (401(k)/DC platforms)", note: "The stickiest money; target-date funds are the default machine" },
      { name: "Banks & insurers", note: "Europe/Asia's dominant channel; bancassurance shelf space is bought" }
    ],
    customers: [
      { name: "Pensions & sovereign funds", note: "The giant allocators; fee-negotiating power and 10-year horizons" },
      { name: "Insurers", note: "Liability-driven AUM; the natural buyers of private credit (and of Apollo-style symbiosis)" },
      { name: "Households & retail", note: "The growth frontier: wealth channel, ETFs, and now private-markets access" }
    ],
    regulators: [
      { name: "SEC / FCA / ESMA", note: "Disclosure, liquidity rules, fund structures: the wrappers are their creation" },
      { name: "Fiduciary & retirement rules (DOL, ERISA)", note: "Who may sell what to whose 401(k): the democratization battleground" },
      { name: "Systemic-risk watchers (FSB)", note: "Is a $11T manager systemic? The unresolved post-2008 question" }
    ],
    capital: [
      { name: "Fee cash flow", note: "The industry needs almost no capital: fees fund everything (the beauty of the model)" },
      { name: "Public equity", note: "Traditional managers trade cheap; alts managers trade like growth stocks: the market has picked the winner" },
      { name: "GP stakes & M&A", note: "Consolidation capital: buying AUM, teams, and private-markets capabilities" }
    ]
  },

  valueChain: {
    intro: "From a saver's dollar to a portfolio position: the chain gathers, allocates, manages, and administers: and the economics concentrate wherever the choice is made (distribution) or the capacity is scarce (alpha, private assets).",
    stages: [
      { id: "origination", name: "Asset gathering & distribution", what: "Winning the money: sales, platforms, brands", players: "Wirehouses, RIA platforms, direct (Vanguard/Fidelity)", valueCapture: 4,
        economics: { grossMargin: [30, 50], capitalIntensity: 1, concentration: 3 },
        linksTo: ["banking", "insurance"],
        deeper: "Distribution is destiny: model-portfolio inclusion or 401(k) default status moves more money than any track record. The wealth channel's gatekeepers increasingly charge for shelf access in economics if not in name." },
      { id: "allocation", name: "Advice & allocation", what: "Deciding the mix: advisors, consultants, OCIO, target-date", players: "Mercer/Aon class, model builders, robo layers", valueCapture: 3,
        economics: { grossMargin: [25, 40], capitalIntensity: 1, concentration: 3 },
        linksTo: ["asset-management", "insurance"],
        deeper: "The allocation layer quietly commoditized the fund layer: once advisors sell models, individual funds become interchangeable parts competing on bps. OCIO and target-date funds industrialized the pension version." },
      { id: "beta", name: "Beta manufacturing (index/ETF)", what: "Tracking markets at 3-10bps, at unimaginable scale", players: "BlackRock, Vanguard, State Street", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 1, concentration: 5 },
        linksTo: ["capital-markets", "saas"],
        deeper: "A 3-way oligopoly where the product is free-ish and the profit is scale + securities lending + adjacent monetization (data, tech, flow). Vanguard's mutual structure means one competitor literally exists to destroy the industry's margin: an unrepeatable moat." },
      { id: "alpha", name: "Alpha manufacturing (active/hedge)", what: "Trying to beat the market for 50-200bps (+20% carry at the top)", players: "Active houses, hedge funds, pod shops", valueCapture: 3,
        economics: { grossMargin: [30, 60], capitalIntensity: 1, concentration: 2 },
        linksTo: ["capital-markets", "private-credit"],
        deeper: "The product most sold and least delivered: most active funds lag benchmarks after fees, which is the whole passive thesis. Real, persistent alpha (top quants, capacity-constrained pods) exists: it just doesn't scale, and it keeps the economics for itself via pass-through fees." },
      { id: "private", name: "Private markets", what: "PE, private credit, real assets, infrastructure: illiquidity for fees", players: "Blackstone, KKR, Apollo, Ares, Brookfield", valueCapture: 5,
        economics: { grossMargin: [50, 65], capitalIntensity: 2, concentration: 3 },
        linksTo: ["private-credit", "banking"],
        deeper: "The fee refuge: 1-2% management + 20% carry on locked capital, now expanding into insurance balance sheets (Apollo/Athene) and retail wrappers. The open question is whether returns survive the wall of money: fee compression's next visit is scheduled here too." },
      { id: "servicing", name: "Servicing & infrastructure", what: "Custody, admin, indices, risk tech", players: "BNY, State Street, MSCI, Aladdin", valueCapture: 3,
        economics: { grossMargin: [30, 60], capitalIntensity: 2, concentration: 4 },
        linksTo: ["banking", "saas"],
        deeper: "The pick-and-shovel layer: index providers may be the chain's best business (MSCI: licensing a list at 60% margins), and Aladdin turned one manager's risk system into the industry's operating system." }
    ]
  },

  financials: {
    businessModel: [
      "Revenue = AUM × fee rate: which makes every asset manager a leveraged play on markets (AUM = flows + performance) with a decaying multiplier (fees grind down ~1bp/yr). Costs are people (40-50% comp ratios) and increasingly technology; margins run 25-35% for traditionals and 40%+ for scaled alts. Operating leverage cuts both ways: a 20% market fall drops revenue ~20% while comp is sticky: the 2022 template.",
      "The quality hierarchy the market prices: fee-related earnings from locked-up capital (alts FRE: Blackstone class) > passive scale economics > traditional active fees that can leave any Tuesday. Carry is real but lumpy; the alts houses trained investors to value FRE precisely so the multiple ignores the lumps. BCG's structural warning applies to all of it: with ~70% of revenue growth having come from market beta, the industry's organic engine (net flows × fee) is far weaker than headline AUM records suggest."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 75, capitalIntensity: 10, pricingPower: 35, cyclicality: 60, operatingLeverage: 75 },
    lines: [
      { label: "AUM & net flows", note: "The tape: separate market effect from organic flows: always" },
      { label: "Fee rate (bps) & mix", note: "The melt: blended ~21-22bps industry-wide; mix shift is the only defense" },
      { label: "Fee-related earnings (alts)", note: "The multiple-driving line: management fees minus costs, ex-carry" },
      { label: "Performance fees / carry", note: "Real money, lumpy timing: markets value it at a discount" },
      { label: "Comp ratio", note: "40-50% of revenue: the industry's true capital is walking assets" }
    ],
    unitEconomics: {
      unit: "per $10B managed (illustrative)",
      items: [
        { label: "Index fund (5bps)", value: "$5M revenue", note: "needs immense scale; costs pennies to run at the giants" },
        { label: "Active fund (60bps)", value: "$60M revenue", note: "minus star-manager comp and distribution: and the flows are leaving" },
        { label: "Private equity (150bps + carry)", value: "$150M + upside", note: "locked 10 years: the aristocrat economics" },
        { label: "Industry blended (~21bps)", value: "~$21M", note: "the grinding average of the whole barbell" }
      ]
    }
  },

  kpiRefs: ["saas-nrr", "bank-roe"],
  kpiLocal: [
    {
      id: "am-organic-growth", name: "Organic Growth (Net Flows / AUM)", industries: ["asset-management"],
      definition: "Net new client money as a % of starting AUM, stripping out market performance.",
      formula: "Organic growth = net flows / beginning AUM (annualized)",
      interpretation: "The honest growth number: AUM can hit records while the business shrinks organically. Industry organic growth has run ~1-3%/yr; the barbell means passive and alts capture nearly all of it.",
      healthy: "3%+ organic with stable fees", warning: "Negative flows masked by market gains (the melting-iceberg pattern)" }
  ],

  health: {
    intro: "Asset-manager health = organic flows, fee-mix trajectory, and whether the franchise owns its distribution: AUM records mean nothing if the iceberg is melting underneath.",
    pillars: [
      { name: "Organic growth", weight: 30, metrics: "Net flows / AUM by product line", healthy: "Positive across cycles, led by strategic products", warning: "Chronic outflows papered over by beta" },
      { name: "Fee-mix quality", weight: 25, metrics: "Blended bps trend, alts/solutions share", healthy: "Mix shift offsetting compression", warning: "Riding legacy fee books down" },
      { name: "Distribution ownership", weight: 20, metrics: "Direct/platform/default status, model inclusion", healthy: "Owns the client or the default slot", warning: "Renting shelf space at rising cost" },
      { name: "Talent & capacity", weight: 15, metrics: "Team stability, capacity discipline in alpha products", healthy: "Retained teams, closed funds at capacity", warning: "Star exits; stretching strategies past capacity" },
      { name: "Operating discipline", weight: 10, metrics: "Comp ratio flexibility, tech leverage", healthy: "Costs flex with revenue", warning: "Sticky comp meeting falling markets (2022 template)" }
    ],
    scoringNote: "Always decompose AUM growth into market vs flows before believing any growth narrative: BCG's 70% finding is the industry's memento mori."
  },

  valuation: {
    intro: "The market has already voted: traditionals trade at 8-12x earnings (melting fee annuities), alts at 20-25x fee-related earnings (growing locked-up annuities). The entire valuation debate is which annuity you own.",
    methods: [
      { name: "P/E on fee earnings (traditionals)", use: "Franklin/T. Rowe class: price the melt honestly", avoid: "Value-trap math: cheap multiples on organically shrinking books", strengths: "Simple, brutal, honest", weaknesses: "One bull market hides the melt for years", range: { low: 8, high: 14, asOf: 2024, note: "the discount is the diagnosis" } },
      { name: "SOTP: FRE multiple + discounted carry (alts)", use: "Blackstone/KKR class: the standard street framework", avoid: "Full-value carry (it is cyclical and back-loaded)", strengths: "Matches the two-engine economics", weaknesses: "FRE multiples embed permanent-growth optimism", range: { low: 18, high: 28, asOf: 2024, note: "x fee-related earnings for the quality names" } },
      { name: "% of AUM", use: "M&A quick math: traditionals trade hands at 1-3% of AUM, alts far higher", avoid: "Comparing across fee models (1% of passive AUM ≠ 1% of PE AUM)", strengths: "Deal-comparable", weaknesses: "AUM quality varies 50x in revenue terms", range: { low: 1, high: 5, asOf: 2024, note: "% of AUM, model-dependent" } },
      { name: "DCF on flow-decomposed revenue", use: "The honest model: project flows, fee melt, and market scenarios separately", avoid: "Extrapolating beta-driven revenue as organic", strengths: "Forces the BCG decomposition", weaknesses: "Market-return assumption dominates everything", range: { low: 0, high: 0, asOf: 2024, note: "framework anchor" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a manager: AUM times fee rate times margin times a mix-quality multiple.",
      inputs: [
        { id: "vc-aum", label: "AUM ($B)", min: 50, max: 12000, step: 50, value: 1000, fmt: "money" },
        { id: "vc-fee", label: "Blended fee (bps)", min: 5, max: 150, step: 5, value: 25, fmt: "bps" },
        { id: "vc-margin", label: "Operating margin (%)", min: 15, max: 60, step: 5, value: 35, fmt: "pct" },
        { id: "vc-mult", label: "Earnings multiple", min: 6, max: 28, step: 1, value: 14, fmt: "mult" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats asset managers as market beta with a business attached: own the structural winners of the barbell (scaled alts FRE compounders, the index/tech giants), avoid the melting middle regardless of multiple, and use the group as a high-beta expression of market views. The BCG decomposition (flows vs market) is the first screen on every name.",
    debates: [
      { topic: "Alts democratization: the next trillion or the next scandal?", bull: "Retail allocates ~2% to privates vs institutions' ~25%: wiring private markets into 401(k)s and ETFs at 10x passive fees is the industry's biggest organic-growth story since the ETF itself, and the platforms (Blackstone class) own the shelf.", bear: "Illiquid assets in daily-liquidity wrappers is how crises start (the gating of semi-liquid funds was the preview): returns are already compressing as the money wall arrives, and the first retail drawdown brings the regulators and the lawyers." },
      { topic: "Are traditional active managers value traps or option value?", bull: "8-10x earnings, 5% yields, and real franchises in retirement channels: any active revival (higher dispersion, active ETFs working) re-rates them 50%.", bear: "Organic decay of 2-4%/yr is a terminal diagnosis at any multiple: the cheapness is the market correctly pricing a melting annuity, and every bounce has been a chance to sell for 15 years." },
      { topic: "Does passive scale into a systemic/political problem?", bull: "The Big 3 vote ~25% of the S&P 500 and rising: index concentration, common-ownership economics, and proxy power invite a regulatory rewrite that caps the scale machine.", bear: "Passive is the best deal households ever got and politicians know it: the backlash produces disclosure theater, pass-through voting, and nothing that dents the 3bps machine." }
    ],
    cycle: {
      where: "Late-stage barbell: record AUM ($128T) on record-thin blended fees, alts fundraising past its frenzy but FRE still compounding, traditionals consolidating, and the retail-privates push just beginning: the industry is mid-metamorphosis from product manufacturer to solutions/infrastructure provider.",
      drivers: "Market levels (the dominant P&L driver), rates (money-market vs risk-asset flows), the alts fundraising cycle, and fee-mix migration.",
      leads: [
        "Monthly ETF/fund flow data (ICI, issuer dashboards: free)",
        "Alts fundraising tallies and dry-powder trends (free summaries)",
        "Money-market fund assets (ICI weekly): the risk-appetite gauge",
        "Semi-liquid fund flows/gating news: the democratization stress signal",
        "Comp-ratio and margin guidance in quarterly prints"
      ]
    },
    exposure: [
      { vehicle: "Alts FRE compounders (Blackstone, KKR, Apollo, Ares)", note: "The structural winners: locked capital, growing fees, insurance flywheels" },
      { vehicle: "Scale + tech (BlackRock)", note: "Beta factory + Aladdin + private-markets M&A: the everything-store thesis" },
      { vehicle: "Index/data providers (MSCI, S&P Global)", note: "The chain's quiet best business: own the benchmark, not the fund" },
      { vehicle: "Traditionals (T. Rowe class)", note: "Deep value with a decay clock: trade, don't marry" },
      { vehicle: "Wealth platforms (Schwab, LPL class)", note: "Distribution owns the future: the toll on the toll-takers" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Flows by segment, FRE growth, fee-rate trend, comp ratios" },
      { when: "Monthly", what: "ETF flow league tables; money-market asset levels" },
      { when: "Rule-making windows", what: "401(k) private-assets guidance, semi-liquid fund rules: the democratization gates" },
      { when: "Fund-raising announcements", what: "Flagship alts closes: the forward-FRE signal" }
    ],
    data: [
      { series: "ICI fund & money-market flows", source: "ici.org (free, weekly/monthly)", why: "The flow tape" },
      { series: "Morningstar fund-flow summaries", source: "free monthly reports", why: "Active vs passive scoreboard" },
      { series: "BCG Global Asset Management report", source: "bcg.com (free, annual)", why: "The structural decomposition (the 70% finding)" },
      { series: "SEC filings (13F, N-PORT)", source: "sec.gov (free)", why: "Positioning and holdings, primary source" }
    ],
    playbook: [
      { regime: "Bull market", behavior: "The group is leveraged beta: revenue compounds silently, everyone looks like a genius, traditionals rally hardest off low bases. Sell the melt into strength." },
      { regime: "Bear market", behavior: "20% market fall ≈ 20% revenue fall on sticky comp: margins gap down (2022 template); alts FRE proves its lock-up value; money-market giants gather the fear cash." },
      { regime: "Rates high", behavior: "Money markets hoover trillions (cash pays again), bond funds bleed, private credit fundraising booms: the barbell's fixed-income leg reprices." },
      { regime: "Rates falling", behavior: "The $6T+ money-market mountain looks for a home: the great re-risking trade lifts every gatherer; duration funds finally see inflows." }
    ]
  },

  players: [
    { name: "BlackRock", role: "The everything store", country: "US", real: true, note: "~$11.5T AUM; iShares + Aladdin + private-markets buildout: scale as strategy" },
    { name: "Vanguard", role: "The mutual disruptor", country: "US", real: true, note: "~$10T; client-owned, exists to cut fees: the industry's margin ceiling" },
    { name: "Fidelity", role: "The private giant", country: "US", real: true, note: "Funds + brokerage + retirement recordkeeping: distribution is the moat" },
    { name: "State Street Global Advisors", role: "The third index giant", country: "US", real: true, note: "SPY's home; custody + asset management combined" },
    { name: "Blackstone", role: "The alts flagship", country: "US", real: true, note: "$1.1T+; the FRE-compounder template and retail-privates pioneer" },
    { name: "Apollo / Athena model", role: "The insurance flywheel", country: "US", real: true, note: "Athene's annuity balance sheet feeds Apollo's credit engine: the model everyone copies" },
    { name: "Amundi", role: "Europe's scale answer", country: "FR", real: true, note: "~€2.2T; the consolidation playbook in bancassurance form" },
    { name: "MSCI", role: "The benchmark landlord", country: "US", real: true, note: "Licenses the lists $16T+ tracks: arguably the chain's best economics" }
  ],

  geography: [
    { country: "US", role: "The colossus", note: "~half of global AUM; the 401(k) machine and the ETF hegemon" },
    { country: "GB", role: "Europe's hub", note: "London manages far more than the UK saves: the export model" },
    { country: "FR", role: "Bancassurance scale", note: "Amundi/BNP model: banks own the channel" },
    { country: "JP", role: "The awakening saver", note: "NISA reforms pushing household cash (¥1,000T+) toward markets" },
    { country: "CN", role: "The gated giant", note: "Huge domestic pool, foreign access perpetually 'opening'" },
    { country: "SG", role: "Asia's allocator hub", note: "Sovereign wealth (GIC/Temasek) + the region's fund passport" }
  ],

  cycles: [
    { year: 1975, title: "The first index fund", kind: "shift", text: "Bogle's 'un-American' folly seeds the passive avalanche. Lesson: the cheapest product eventually wins the flows." },
    { year: 2008, title: "The trust break", kind: "bust", text: "Active managers fall with the market they charged to beat; the crisis converts a generation to passive. Lesson: fees are the one return you control." },
    { year: 2009, title: "BlackRock buys iShares", kind: "boom", text: "$13.5B for what became the ETF empire: the industry's deal of the century. Lesson: buy the structural winner, whatever the cycle says." },
    { year: 2019, title: "Fees hit zero", kind: "shift", text: "Fidelity launches 0% funds; the beta price war ends at free. Lesson: when the product is free, the business is scale and adjacency." },
    { year: 2022, title: "The 60/40 annus horribilis", kind: "bust", text: "Stocks and bonds fall together; revenue gaps down on sticky comp; money markets gather the refugees. Lesson: the industry is short volatility and long beta, always." }
  ],

  risks: [
    { name: "Sustained bear market / lost decade", severity: 4, likelihood: 3, transmission: "AUM × fee model = revenue falls with markets while comp is sticky → margins gap down → the beta that gave 70% of growth takes it back." },
    { name: "Fee compression accelerating up the stack", severity: 4, likelihood: 4, transmission: "Passive-style price war reaches alts (already visible in PE fee terms) → the profit refuge thins → the whole barbell reprices." },
    { name: "Democratization blow-up", severity: 4, likelihood: 3, transmission: "Retail semi-liquid vehicles gate in a drawdown → scandal, suits, and rules → the industry's chosen growth story politically poisoned." },
    { name: "Systemic/political passive backlash", severity: 3, likelihood: 2, transmission: "Big-3 voting power and index concentration draw structural regulation → the scale machine's compounding logic capped." },
    { name: "Disintermediation (direct indexing, AI advisors, tokenization)", severity: 3, likelihood: 3, transmission: "Technology unbundles the fund wrapper itself → fees migrate to software and platforms → managers become subadvisors to algorithms." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Asset managers invest other people's money: your 401(k), a pension, a country's oil savings: and charge a small % of the pot each year. The pots add up to about $128T worldwide. The big split: index funds that just track the market for almost nothing (Vanguard, BlackRock), versus managers who charge more to try to beat it: and usually don't after fees."] },
    L2: { title: "Intermediate", text: ["The industry is a barbell: cheap passive funds take most new money, expensive private-markets funds (Blackstone class) take most profit, and the traditional active middle shrinks yearly. Blended fees are ~21-22bps and falling. The uncomfortable stat (BCG): ~70% of revenue growth since 2006 came from markets going up, not from winning clients: record AUM can hide a shrinking business."] },
    L3: { title: "Advanced", text: ["Model revenue = AUM × fee rate, then decompose AUM growth into market effect vs organic net flows: the second number is the business. Traditionals run 25-35% margins with 40-50% comp ratios (sticky when markets fall: see 2022). Alts economics: 1-2% management fees on locked capital (fee-related earnings, the multiple-driver) + 20% carry (real, lumpy, discounted by the market)."] },
    L4: { title: "Expert", text: ["The market prices the barbell explicitly: traditionals at 8-14x (melting annuities), alts at 18-28x FRE (growing locked annuities): the debate is annuity quality, not cheapness. Live battles: retail democratization of privates (trillions at 10x passive fees vs liquidity-mismatch scandal risk), the Apollo/Athene insurance flywheel copies, and whether the index providers (MSCI class) are the chain's true crown jewels. Watch flows monthly; they front-run every narrative."] },
    L5: { title: "Institutional", text: ["Allocator's frame: the sector is leveraged market beta wearing a fee schedule: own it when you want geared exposure to risk assets with a compounding overlay (alts FRE, index scale, benchmark landlords), and never mistake beta-driven AUM records for franchise growth. The terminal question is whether the industry keeps any economics as investing becomes infrastructure: the winners will be the ones who own distribution, lock-ups, or the benchmark itself: everyone else is renting a melting margin." ] }
  },

  quiz: [
    { q: "Global AUM in 2024 reached roughly:", choices: ["$12.8T", "$128T (+12%): a record: per BCG", "$1.28T", "$500T"], answer: 1, explain: "Markets did most of the lifting: which is precisely the industry's structural issue." },
    { q: "BCG's most uncomfortable finding: since 2006, ~70% of industry revenue growth came from:", choices: ["Winning new clients", "Market appreciation, not net flows: the industry got paid for beta", "Fee increases", "Private equity"], answer: 1, explain: "Strip out the bull market and the organic engine is weak: the first screen on any AUM record." },
    { q: "Industry blended fees now run about:", choices: ["100bps", "21-22bps, grinding lower every year", "5bps", "200bps"], answer: 1, explain: "Down ~40% since 2010: every product ages into a cheaper version of itself; only mix shift fights the melt." },
    { q: "The 'barbell' means:", choices: ["Balanced portfolios", "Flows go to cheap passive, profits to expensive alternatives, and the active middle melts", "Two CEOs", "Stocks and bonds"], answer: 1, explain: "The industry's defining structure: it explains the valuation gap (traditionals 8-14x, alts 18-28x FRE) entirely." },
    { q: "Vanguard is uniquely dangerous to competitors because:", choices: ["Its marketing", "It is owned by its fund investors: scale gets recycled into fee cuts forever", "Government backing", "It uses AI"], answer: 1, explain: "A competitor structurally incapable of protecting the industry's margin: the price war has a permanent sponsor." },
    { q: "Alts managers are valued primarily on:", choices: ["AUM alone", "Fee-related earnings (FRE): management fees on locked capital, with carry discounted separately", "Book value", "Dividends"], answer: 1, explain: "Locked-up fee streams earn 18-28x; lumpy carry gets a haircut: the street's standard SOTP." },
    { q: "The 'democratization of private markets' debate is about:", choices: ["Voting rights", "Wiring illiquid assets into retail wrappers (401(k)s, semi-liquid funds): the next trillion or the next liquidity-mismatch scandal", "Free trading apps", "Crypto"], answer: 1, explain: "Retail holds ~2% in privates vs institutions' ~25%: the growth prize is huge and so is the gating-in-a-drawdown risk." },
    { q: "In a 20% market decline, a traditional manager's profit typically:", choices: ["Falls ~5%", "Falls far more than 20%: revenue drops with AUM while comp stays sticky", "Rises", "Is unaffected"], answer: 1, explain: "Operating leverage in reverse (the 2022 template): the industry is structurally long beta and short volatility." }
  ],

  sources: [
    { name: "BCG Global Asset Management 2025 ($128T AUM, 70% finding, fee trends)", url: "https://www.bcg.com/publications/2025/global-asset-management-report", feeds: "market size, structure" },
    { name: "ICI fund flow statistics", url: "https://www.ici.org/research/stats", feeds: "flows" },
    { name: "Morningstar active/passive barometer", url: "https://www.morningstar.com", feeds: "active vs passive" },
    { name: "SEC filings (13F, N-PORT)", url: "https://www.sec.gov", feeds: "holdings, primary" }
  ]
};
