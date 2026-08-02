/* Industry Atlas - INVESTMENT BANKING (full module, research-backed)
 * Anchors: global IB fee pool $117.4B in 2024, +14% YoY (LSEG Global IB Review):
 * DCM $39.3B (+24%), M&A $33.4B (+7%), syndicated lending $29B (+15%).
 * Global M&A $3.5T in 2024, then $4.8T in 2025, +41% YoY, 2nd highest ever after
 * 2021, ~70 megadeals over $10B (Dealogic/Bain, Jan 2026). 2025 league tables:
 * Goldman #1 with ~$1.48T advised (~32% share), M&A fees GS $4.6B, JPM $3.1B,
 * MS $3.0B, Citi $2.0B, Evercore #5; JPM total IB fees $10.1B vs GS $8.9B.
 * Sponsors: ~$1.2T buyout dry powder, 2025 buyout value +44% to $904B ex add-ons,
 * EA $56.6B take-private a record (Bain Global PE Report). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["investment-banking"] = {
  meta: {
    id: "investment-banking", name: "Investment Banking", sector: "finance", status: "full",
    tagline: "A $117B fee pool won relationship by relationship: the assets ride the elevator down every night, and the cycle sets the bonus.",
    marketSize: { value: 117, unit: "$B", asOf: 2024, note: "global IB fee pool $117.4B, +14% YoY (LSEG): DCM $39.3B, M&A $33.4B, syndicated lending $29B, ECM the rest" },
    cagr: { value: 5, range: [3, 8], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 2, regulation: 4, disruption: 2
  },
  newsQuery: '("investment banking" OR "M&A advisory" OR "league table" OR "Goldman Sachs" OR "IPO market" OR "leveraged buyout" OR "deal fees")',

  overview: {
    definition: "Investment banks advise corporations, sponsors, and governments on mergers and acquisitions and raise their capital in equity and debt markets, paid almost entirely in success fees. The product is judgment, access, and execution: no factories, no inventory, just people who know who wants to buy what and which investors will fund it.",
    howItWorks: [
      "The business splits into coverage and product. Coverage bankers own relationships by industry (the healthcare MD who has known every CEO in the sector for 20 years); product bankers execute M&A, equity underwriting (ECM), and debt underwriting (DCM) when a deal fires. Fees are contingent: roughly 1% on a $1B sale (sliding down with size, up to 2%+ on small deals), 3.5% to 7% gross spreads on IPOs, and points on debt. The 2024 global pool was $117.4B (LSEG, +14%): DCM the biggest slice at $39.3B, M&A the most prestigious at $33.4B, because advice carries no balance-sheet risk and near-100% incremental margin.",
      "Two species compete for that pool. Bulge-bracket and universal banks (Goldman, JPMorgan, Morgan Stanley, BofA, Citi) bundle advice with balance sheet: they lend, underwrite, and hedge, and JPMorgan's lending muscle helped it to $10.1B of total IB fees in 2025 vs Goldman's $8.9B. Independent boutiques (Evercore, Centerview, Lazard, Rothschild, Moelis, PJT) sell conflict-free advice with no lending attached, and they have taken share for 15 years: Evercore ranked 5th in global M&A fees in 2025, ahead of most banks running trillion-dollar balance sheets, with a few thousand employees.",
      "The cycle is CEO confidence times the cost of debt. Fees collapsed in 2022-2023 when rates spiked; global M&A then recovered to $3.5T in 2024 and jumped 41% to $4.8T in 2025, the second-highest year on record behind 2021, powered by roughly 70 megadeals above $10B (Dealogic). League tables are the scoreboard and the marketing: Goldman advised on ~$1.48T of 2025 deal value, about a 32% share of announced volume, and earned $4.6B in pure M&A fees vs JPMorgan's $3.1B and Morgan Stanley's $3.0B. Rank begets mandates begets rank: the flywheel is reputational.",
      "The economics are a talent tollbooth. Compensation eats 55% to 65% of revenue in most years: the comp ratio is the industry's shock absorber, flexing down in droughts so shareholders and partners share the pain. A productive senior MD generates $10M to $20M of annual fees, and the franchise is partly portable, which is why teams get poached whole. The fastest-growing client is not corporate at all: financial sponsors sitting on ~$1.2T of buyout dry powder generate fees three times per asset (buy it, finance it, sell it), and sponsor coverage is now the single biggest wallet on the Street."
    ],
    history: [
      { era: "1900-1933", title: "The House of Morgan era", text: "Private partnerships finance railroads, steel, and governments; the 1929 crash brings Glass-Steagall, splitting investment from commercial banking for 66 years." },
      { era: "1980-1990", title: "M&A wars and junk bonds", text: "Hostile raids, Drexel's high-yield machine, and the $25B RJR Nabisco LBO (1989) turn advisory into a glamour industry; Milken's fall ends the first leverage supercycle." },
      { era: "1999-2008", title: "Repeal and the leverage supercycle", text: "Glass-Steagall dies in 1999; banks lever to 30x+ chasing trading profits; Bear and Lehman fail in 2008 and every surviving pure investment bank converts to a bank holding company." },
      { era: "2009-2019", title: "Dodd-Frank and the boutique rise", text: "Capital rules tax balance sheets; conflict-scarred clients hire independents; Evercore, Centerview, and PJT class firms take double-digit share of the advisory pool." },
      { era: "2020-present", title: "The sponsor era", text: "Record 2021 ($5.9T M&A), brutal 2022-2023 drought, then a 2024-2025 recovery to $4.8T driven by megadeals and private equity: sponsors, sitting on ~$1.2T of dry powder, become the Street's biggest clients." }
    ],
    trends: [
      { title: "Boutique share gains", direction: "up", text: "Independents keep converting conflict anxiety into mandates: Evercore's #5 global M&A fee rank in 2025 came with no balance sheet at all, and boards increasingly pair a boutique with a financing bank on every large deal." },
      { title: "Sponsor-driven fee flow", direction: "up", text: "2025 buyout value rose 44% to $904B ex add-ons (Bain); each sponsor asset pays fees at entry, refinancing, and exit, making PE coverage the most valuable seat in banking." },
      { title: "Private capital disintermediation", direction: "shift", text: "Private credit funds now underwrite the loans banks once syndicated, and giant sponsors run deals with skeleton bank rosters: the fee pool is growing, but pieces of it are leaking out of the banking system." },
      { title: "AI hits the analyst class", direction: "shift", text: "Pitch books, comps, and first-draft models are automating; the pyramid that trained juniors by volume is flattening, forcing banks to rethink how the next MD class learns the craft." },
      { title: "Fee pool recovery", direction: "up", text: "The pool rose 14% in 2024 to $117.4B (LSEG) and kept climbing in 2025 with the M&A rebound; DCM led early (refinancing wave), advisory followed as megadeals returned." }
    ],
    outlook: "The setup is favorable and familiar: pent-up sponsor exits, a refinancing wall, and boards re-conditioned to consolidate all point to a multi-year fee recovery, with 2025's $4.8T M&A print as the proof of concept. The structural questions cut deeper than the cycle: how much of the pool migrates to boutiques and private credit, and whether AI compresses the cost of execution faster than it compresses headcount. The relationship MD with a real franchise stays scarce either way: that scarcity is the industry."
  },

  structure: {
    suppliers: [
      { name: "Talent pipeline (target schools, MBA programs)", note: "The only raw material; recruited 2 years ahead like a futures market" },
      { name: "Data & analytics (Bloomberg, LSEG, FactSet, S&P)", note: "The terminals and league-table keepers every desk rents" },
      { name: "Law firms (Wachtell, Skadden class)", note: "Deal counsel: the other half of every working group" },
      { name: "Institutional capital (funds, insurers, sovereigns)", note: "The buy side that underwriting ultimately places paper with" }
    ],
    producers: [
      { name: "Bulge bracket (Goldman, Morgan Stanley)", note: "Full product suite; Goldman: $4.6B M&A fees, ~32% of 2025 announced volume" },
      { name: "Universal banks (JPMorgan, BofA, Citi)", note: "Balance sheet as a weapon; JPM's $10.1B total IB fees led the Street in 2025" },
      { name: "Elite boutiques (Evercore, Centerview, Lazard, Rothschild)", note: "Conflict-free advice; Evercore ranked #5 in 2025 M&A fees" },
      { name: "Mid-market & restructuring (Houlihan Lokey, Jefferies, Moelis)", note: "Volume franchises and the counter-cyclical restructuring hedge" }
    ],
    distributors: [
      { name: "Syndicate desks & institutional sales", note: "Underwriting is distribution: bookbuilding places risk with hundreds of accounts in hours" }
    ],
    customers: [
      { name: "Corporates (CEOs and boards)", note: "Episodic buyers of advice; the coverage model exists to be in the room when they decide" },
      { name: "Financial sponsors", note: "The repeat clients: ~$1.2T of buyout dry powder generating fees at entry, financing, and exit" },
      { name: "Governments & institutions", note: "Privatizations, sovereign debt, and the occasional bank rescue" }
    ],
    regulators: [
      { name: "SEC & FINRA", note: "Securities issuance, disclosure, and conduct: every prospectus and fairness opinion lives under them" },
      { name: "Federal Reserve & Basel regime", note: "Capital rules that tax balance-sheet businesses and quietly subsidize boutiques" },
      { name: "Antitrust (DOJ, FTC, EC)", note: "The M&A kill switch: enforcement posture swings billions of fees" }
    ],
    capital: [
      { name: "Bank balance sheets & deposits", note: "Universal banks fund bridges and underwriting commitments off cheap deposits" },
      { name: "Partner & public equity", note: "Boutiques run nearly capital-free: equity is for hiring and acquisitions, not inventory" },
      { name: "Wholesale funding markets", note: "The 2008 lesson: overnight repo funding a leveraged securities book is how pure investment banks die" }
    ]
  },

  valueChain: {
    intro: "From a relationship coffee to a signed fee letter to allocated bonds. The chain is short and human: value concentrates wherever the client cannot tell the difference between advice and access, and thins wherever balance sheet does commodity work.",
    stages: [
      { id: "coverage", name: "Coverage & origination", what: "Owning the client relationship years before any deal", players: "Sector MD groups at every firm; sponsor coverage teams", valueCapture: 4,
        economics: { grossMargin: [30, 50], capitalIntensity: 1, concentration: 3 },
        linksTo: ["banking", "private-equity"],
        deeper: "The scarce asset: a coverage MD who gets the first call. Costs run years ahead of revenue (pitches, ideas, favors), which is why banks tolerate seven-figure seats producing nothing for a year. Sponsor coverage is the growth seat: one fund relationship pays across dozens of portfolio companies." },
      { id: "ma-advisory", name: "M&A advisory", what: "Sell-side auctions, buy-side raids, fairness opinions, defense", players: "Goldman, Centerview, Evercore, Lazard, JPMorgan", valueCapture: 5,
        economics: { grossMargin: [35, 55], capitalIntensity: 1, concentration: 3 },
        linksTo: ["private-equity", "hedge-funds"],
        deeper: "The crown jewel: a $33.4B global fee pool (2024) at near-100% incremental margin, no capital at risk, and prestige that feeds every other product. Fees are contingent (roughly 1% on $1B, scaling down with size), so revenue is a call option on announced volume: 2025's 70 megadeals were the pool's whole growth." },
      { id: "ecm", name: "Equity underwriting (ECM)", what: "IPOs, follow-ons, convertibles, blocks", players: "Goldman, Morgan Stanley, JPMorgan bookrunners", valueCapture: 4,
        economics: { grossMargin: [30, 50], capitalIntensity: 2, concentration: 4 },
        linksTo: ["capital-markets", "venture-capital"],
        deeper: "The windowed business: IPO gross spreads of 3.5% to 7% are the richest fees in finance when the window is open and zero when it shuts (IPO fees fell 14% in 2024 even as the rest of ECM grew). Bookrunner slots concentrate among a handful of firms because issuers rent distribution and aftermarket credibility." },
      { id: "dcm", name: "Debt underwriting & leveraged finance", what: "Bonds, loans, bridges, LBO financing", players: "JPMorgan, BofA, Citi lead; private credit encroaching", valueCapture: 3,
        economics: { grossMargin: [20, 40], capitalIntensity: 4, concentration: 4 },
        linksTo: ["capital-markets", "private-credit", "banking"],
        deeper: "The volume engine: $39.3B of 2024 fees, the pool's biggest slice, driven by the refinancing calendar more than by genius. Leveraged finance is the risk seat: committed bridges can hang on the balance sheet when markets turn (the 2022 Twitter debt hang cost banks billions in marks). Private credit now competes for exactly this paper." },
      { id: "distribution", name: "Syndication & distribution", what: "Bookbuilding, allocation, placing risk with investors", players: "Syndicate desks; the sales forces of the bulge bracket", valueCapture: 3,
        economics: { grossMargin: [20, 35], capitalIntensity: 3, concentration: 4 },
        linksTo: ["asset-management", "hedge-funds", "market-infrastructure"],
        deeper: "The quiet moat of the big banks: knowing which 300 accounts will buy this credit at this price today. Allocation power creates reciprocity (investors court syndicate desks), and it is why boutiques still partner with balance-sheet banks on financings rather than build distribution themselves." },
      { id: "restructuring", name: "Restructuring & special situations", what: "Chapter 11 advisory, liability management, creditor work", players: "Houlihan Lokey, PJT, Lazard, Evercore, Moelis", valueCapture: 4,
        economics: { grossMargin: [35, 55], capitalIntensity: 1, concentration: 4 },
        linksTo: ["private-credit", "hedge-funds"],
        deeper: "The counter-cyclical hedge: fees are monthly retainers plus completion fees, paid through bankruptcy court with priority. Houlihan's dominance of the debtor side is a structural franchise: when the fee pool halves in a downturn, restructuring is the only line that doubles." }
    ]
  },

  financials: {
    businessModel: [
      "Revenue is a call option on activity: advisory fees book at closing (a lagging function of announcements 6 to 9 months prior), underwriting books at pricing, and almost nothing recurs. The cost side is the comp ratio: 55% to 65% of revenue in normal years, the industry's great shock absorber, flexing down in droughts so margins compress rather than collapse. Boutiques run 20% to 30% operating margins with almost no capital; universal banks earn less per fee dollar but monetize the client three more times through lending, hedging, and treasury services.",
      "Read the two models differently. For boutiques: fees per senior MD ($10M to $20M when productive), headcount growth as capacity investment, and the comp ratio as management discipline. For bulge brackets: IB fees are a high-ROE garnish on a balance-sheet meal, so watch wallet share (JPM $10.1B vs GS $8.9B in 2025) and how much lending it took to win it. The tell in both: backlog commentary on earnings calls, the only forward disclosure the industry gives you."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 10, capitalIntensity: 20, pricingPower: 60, cyclicality: 90, operatingLeverage: 75 },
    lines: [
      { label: "Advisory fees", note: "M&A completions: the prestige line; lags announcements by 2-3 quarters" },
      { label: "Equity underwriting", note: "IPO-window dependent: the most volatile line on the page" },
      { label: "Debt underwriting", note: "The volume line: refinancing calendars and LBO financing" },
      { label: "Comp ratio", note: "55-65% of revenue; the flex that protects margins in droughts" },
      { label: "Backlog / pipeline", note: "Qualitative but priceless: announced-not-closed deals are booked revenue in waiting" }
    ],
    unitEconomics: {
      unit: "per $1B sell-side M&A mandate (illustrative)",
      items: [
        { label: "Success fee", value: "~$10-12M (~1%)", note: "sliding scale: smaller deals 1.5-2%+, megadeals down toward 0.3%" },
        { label: "Compensation absorbed", value: "~$6-7M", note: "55-60% comp ratio: the team, the pyramid, the bonus pool" },
        { label: "Pre-tax profit", value: "~$2.5-3.5M", note: "25-30% margin on essentially zero invested capital" },
        { label: "Fee at risk", value: "100% contingent", note: "deal breaks, fee evaporates: months of work for a retainer at best" }
      ]
    }
  },

  kpiRefs: ["bank-roe", "cm-adv"],
  kpiLocal: [
    {
      id: "ib-fee-pool", name: "Fee Pool & Wallet Share", industries: ["investment-banking"],
      definition: "The global investment banking fee pool and each firm's share of it, tracked quarterly by LSEG and Dealogic.",
      formula: "Wallet share = firm IB fees / global fee pool ($117.4B in 2024 per LSEG)",
      interpretation: "The pool sets the tide (cyclical, rate-driven); share is the alpha. JPM led 2025 at $10.1B total; Goldman led pure M&A at $4.6B.",
      healthy: "Share rising through a downturn (franchise gains stick)", warning: "Share bought with balance sheet at thin lending spreads" },
    {
      id: "ib-comp-ratio", name: "Compensation Ratio", industries: ["investment-banking"],
      definition: "Total compensation and benefits as a share of net revenue: the industry's dominant cost line and its cyclical shock absorber.",
      formula: "Comp ratio = comp & benefits expense / net revenue",
      interpretation: "55-65% is normal; the flex protects margins in droughts. A ratio stuck high while revenue falls means the talent, not shareholders, holds the power.",
      healthy: "Ratio flexing down in weak years; sub-60% at boutiques", warning: "Ratio rising in a fee drought: paying to keep seats warm" }
  ],

  health: {
    intro: "Franchise health is league-table position that survives a downturn; financial health is comp discipline; existential health is conflicts avoided and talent retained.",
    pillars: [
      { name: "League-table franchise", weight: 25, metrics: "Fee rank by product, wallet share trend, repeat-client rate", healthy: "Top-5 in chosen products, share rising", warning: "Rank slipping while pool grows: losing the flywheel" },
      { name: "Business mix & ballast", weight: 20, metrics: "Advisory vs underwriting vs restructuring mix", healthy: "Restructuring and recurring lines cushioning the M&A cycle", warning: "Single-product ECM-style exposure to a shut window" },
      { name: "Comp discipline", weight: 20, metrics: "Comp ratio through the cycle, deferral structure", healthy: "Ratio flexes down in droughts; deferrals retain", warning: "Guaranteed bonuses at the cycle top (the classic sin)" },
      { name: "Talent bench", weight: 20, metrics: "MD productivity, attrition to rivals, succession depth", healthy: "Home-grown MD class, poach-resistant teams", warning: "Rainmaker concentration: 3 people are the franchise" },
      { name: "Balance sheet & risk", weight: 15, metrics: "Bridge commitments, hung-deal exposure, funding profile", healthy: "Committed capital small vs equity; no overnight funding of inventory", warning: "Bridge book swelling at the credit-cycle top" }
    ],
    scoringNote: "Weight the comp ratio double in a fee drought: it is the single fastest read on whether management or the MDs run the firm."
  },

  valuation: {
    intro: "The market prices two different animals: boutiques as high-margin, capital-light earnings streams on a violent cycle, and bulge brackets as banks that happen to own a fee franchise. Both get valued on normalized, not spot, earnings: paying peak multiples on peak fees is the sector's classic widow-maker.",
    methods: [
      { name: "P/E on normalized EPS (boutiques)", use: "Evercore, Lazard, Moelis class: earnings are the business, capital is trivial", avoid: "Spot-year P/E at either cycle extreme; normalize the fee pool first", strengths: "Clean read on a capital-light model", weaknesses: "Normalizing a 5-rated cyclical is half art", range: { low: 12, high: 22, asOf: 2025, note: "x normalized EPS; premium franchises with restructuring ballast earn the top" } },
      { name: "P/TBV vs ROTE (bulge/universal)", use: "Goldman, Morgan Stanley: the fee franchise inside a regulated bank", avoid: "Valuing the IB division standalone; capital rules bind at the group level", strengths: "Anchors to the binding constraint (capital)", weaknesses: "Blends the IB engine with markets and lending noise", range: { low: 1, high: 2, asOf: 2025, note: "x tangible book; sustained 15%+ ROTE earns the 2x end" } },
      { name: "Fees per senior MD / franchise build math", use: "Sizing boutique growth: headcount x productivity is the whole model", avoid: "Assuming hired MDs port their whole book (half is typical)", strengths: "Ties valuation to the only real asset", weaknesses: "Productivity ($10-20M/MD) swings with the cycle", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: value = MDs x normalized fees x margin, capitalized" } },
      { name: "Cycle-average fee pool share", use: "Sanity check: firm's normal wallet share x a normalized ~$100-120B pool x margin", avoid: "Extrapolating a record year (2021) or a drought (2023) as the base", strengths: "Forces through-cycle honesty", weaknesses: "Structural shifts (boutique gains, private credit leakage) move the baseline", range: { low: 0, high: 0, asOf: 2025, note: "framework, not a multiple: the pool mean-reverts, share is stickier" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an advisory franchise quickly: normalized net earnings times a franchise-quality multiple, minus net debt (boutiques typically carry net cash: enter a negative number).",
      inputs: [
        { id: "vc-earn", label: "Normalized net earnings ($B)", min: 0.2, max: 12, step: 0.2, value: 1.6, fmt: "money" },
        { id: "vc-mult", label: "Earnings multiple", min: 8, max: 26, step: 0.5, value: 16, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt / (cash) ($B)", min: -8, max: 30, step: 1, value: -1, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays investment banking as a levered call on deal activity with a franchise-quality filter: own the share gainers into a fee recovery, hold the restructuring houses as the hedge, and treat bulge-bracket IB lines as a swing factor inside bank earnings rather than a pure play. The pool mean-reverts; wallet share compounds: buy share, rent the cycle.",
    debates: [
      { topic: "Boutiques: structural winners or cycle beneficiaries about to stall?", bull: "15 years of share gains through 2 full cycles is structure, not luck: boards want conflict-free advice, capital rules keep taxing bank balance sheets, and Evercore's #5 fee rank in 2025 with no lending proves advice alone wins the biggest mandates. The model compounds: every poached MD is accretive within 2 years.", bear: "Boutique share gains coincided with the sponsor era's easy money; the largest deals still need $10B bridges only universal banks can write, MD comp inflation is eating the margin advantage, and every boutique's succession from founder rainmakers remains unproven. The next drought tests whether the franchises outlive the names on the door." },
      { topic: "Is the 2024-2025 recovery the start of a supercycle or a megadeal sugar high?", bull: "The backlog is structural: ~$1.2T of buyout dry powder must deploy, sponsor exit queues are at records, refinancing walls force capital-markets activity regardless of mood, and 2025's $4.8T printed with deal counts still flat: breadth is the upside from here.", bear: "2025 was 70 megadeals wearing a recovery costume: value up 41% on flat counts means the middle market never showed up. Megadeal fee rates run a third of mid-cap rates, antitrust can re-freeze at any election, and the last time the Street annualized a record year (2021) it hired into a 40% fee collapse." },
      { topic: "Does private capital disintermediate the banks or feed them?", bull: "Sponsors are the best clients in Street history: 3 fee events per asset, and private credit still needs banks for origination reach, syndication overflow, and the eventual IPO exits. The pie grows faster than the leakage.", bear: "Private credit already took the leveraged-loan economics banks lived on, mega-sponsors increasingly run repeat playbooks with skeleton advisory rosters, and if direct lenders build distribution the DCM fee pool ($39.3B, the biggest slice) shrinks structurally while banks keep the risk-heavy bridge book." }
    ],
    cycle: {
      where: "Early-to-mid recovery: the fee pool inflected in 2024 (+14% to $117.4B), M&A hit $4.8T in 2025 on megadeals, but deal counts and IPO volumes remain below trend: breadth, not peak, is the current question.",
      drivers: "CEO confidence, the cost and availability of debt, equity-market stability (IPO windows), antitrust posture, and sponsor deployment/exit pressure.",
      leads: [
        "Announced M&A volume tape: deal press releases and free LSEG/Dealogic quarterly summaries",
        "High-yield spreads (FRED, free): the LBO math input; sub-400bps opens the megadeal window",
        "SEC EDGAR S-1 filing counts (free): the IPO pipeline 3-6 months ahead of pricing",
        "Bank earnings-call backlog commentary: the only forward guidance the industry gives",
        "Sponsor exit announcements and take-private prints: the dry-powder clock ticking"
      ]
    },
    exposure: [
      { vehicle: "Goldman Sachs", note: "The purest listed play at scale: #1 M&A franchise (~32% of 2025 volume) inside a returns-focused bank" },
      { vehicle: "Elite boutiques (Evercore, Moelis, PJT class)", note: "The share-gain compounders: highest beta to the advisory cycle, cleanest models" },
      { vehicle: "Houlihan Lokey / Lazard", note: "Restructuring ballast: the only fee line that rises when the cycle breaks" },
      { vehicle: "Universal banks (JPMorgan class)", note: "The fee franchise as garnish: diversified, lower beta, wallet-share leader ($10.1B in 2025)" },
      { vehicle: "Exchanges & data (market-infrastructure names)", note: "The picks-and-shovels adjacency: activity volumes without the comp ratio" }
    ],
    catalysts: [
      { when: "Quarterly earnings (Jan/Apr/Jul/Oct)", what: "Fee prints and backlog commentary: the sector's forward guidance" },
      { when: "Fed decisions & HY spread moves", what: "The LBO and refinancing math that gates sponsor activity" },
      { when: "Antitrust regime shifts (elections, new enforcers)", what: "Megadeal feasibility repricing overnight" },
      { when: "Marquee IPO pricings", what: "One hot deal reopens the ECM window for a whole class of issuers" }
    ],
    data: [
      { series: "LSEG Global IB Review (quarterly)", source: "lseg.com (free PDF)", why: "The fee-pool tape and league tables, primary source" },
      { series: "High-yield OAS", source: "FRED (free)", why: "The single best lead on LBO and megadeal feasibility" },
      { series: "S-1 and merger filings", source: "SEC EDGAR (free)", why: "The pipeline itself, 3-6 months early" },
      { series: "Bain Global M&A and PE Reports (annual)", source: "bain.com (free)", why: "Volume, dry powder, and sponsor-behavior context" },
      { series: "Dealogic insight highlights", source: "dealogic.com (free summaries)", why: "Cross-check on volumes and league tables" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Advisory and ECM fees can halve; restructuring doubles but off a small base. Own the ballast names, wait for capitulation comp cuts to buy the franchises." },
      { regime: "Rates falling", behavior: "The sweet spot: LBO math works, refinancing wave hits DCM, sponsors transact both ways. Fee estimates lag the spread move: buy the beta early." },
      { regime: "Equity bull market", behavior: "IPO window opens and ECM's 3.5-7% spreads flow; watch for the hiring-at-peak sin that turns operating leverage against the group." },
      { regime: "Credit crunch", behavior: "Bridge books mark down, hung deals surface (the 2022 template), boutiques outperform bulge on zero inventory. Balance-sheet exposure is the differentiator." }
    ]
  },

  players: [
    { name: "Goldman Sachs", role: "M&A franchise leader", country: "US", real: true, note: "~$1.48T advised in 2025 (~32% share); $4.6B M&A fees, #1 for over 2 decades" },
    { name: "JPMorgan", role: "Wallet-share leader", country: "US", real: true, note: "$10.1B total IB fees in 2025, the Street's biggest: balance sheet plus franchise" },
    { name: "Morgan Stanley", role: "Bulge-bracket #3", country: "US", real: true, note: "$3.0B M&A fees in 2025; the perennial Goldman rival with a wealth-management ballast" },
    { name: "Bank of America / Citi / Barclays", role: "Balance-sheet pack", country: "US", real: true, note: "Lending-led franchises fighting for the #4 seat; Citi at $2.0B M&A fees in 2025" },
    { name: "Evercore", role: "Elite boutique standard-bearer", country: "US", real: true, note: "#5 in global M&A fees 2025 with no balance sheet: the independent model's proof" },
    { name: "Centerview Partners", role: "The private boutique", country: "US", real: true, note: "Board-level M&A counsel, ranked #2 in prestige (2025); partnership-owned, disclosure-free" },
    { name: "Lazard / Rothschild & Co", role: "The old-house independents", country: "FR", real: true, note: "Rothschild completed 351 M&A deals in 2024, the most of any independent by count" },
    { name: "Houlihan Lokey", role: "Restructuring king", country: "US", real: true, note: "Dominates debtor-side Chapter 11 work: the fee line that rises when everything else falls" }
  ],

  geography: [
    { country: "US", role: "The fee capital", note: "Roughly half the global pool; every major franchise is run from New York" },
    { country: "GB", role: "European hub", note: "London intermediates European M&A and cross-border flow despite post-Brexit fragmentation" },
    { country: "FR", role: "Independent-advisory heritage", note: "Rothschild and Lazard's Paris roots; Europe's advisory-heavy fee mix" },
    { country: "HK", role: "Asia gateway, contested", note: "China deal flow rerouting between Hong Kong, mainland banks, and Singapore" },
    { country: "JP", role: "Outbound acquirer base", note: "Cash-rich corporates and governance reform feed a steady cross-border advisory wallet" },
    { country: "IN", role: "The growth fee pool", note: "Record ECM issuance and rising sponsor activity: the fastest-growing wallet in Asia" }
  ],

  cycles: [
    { year: 1933, title: "Glass-Steagall", kind: "shift", text: "The crash splits commercial from investment banking, creating the pure advisory partnership for 66 years. Lesson: the industry's structure is written by regulators after crises, not by strategy." },
    { year: 1989, title: "RJR Nabisco and the junk-bond peak", kind: "boom", text: "The $25B LBO crowns the first leverage era; Drexel collapses months later. Lesson: fee booms built on one financing technology die with that technology." },
    { year: 2008, title: "Lehman", kind: "bust", text: "Overnight-funded leverage kills the standalone model; every survivor becomes a bank holding company. Lesson: the fee business never killed anyone; the inventory funded overnight did." },
    { year: 2021, title: "The everything boom", kind: "boom", text: "$5.9T of M&A, a SPAC mania, and record fees; banks hire and guarantee comp at the exact top. Lesson: headcount added at peak fees is the next drought's margin problem." },
    { year: 2023, title: "The rate-shock drought", kind: "bust", text: "M&A falls to ~$3.2T, IPOs shut, fee pools drop ~40% from peak; comp ratios and layoffs absorb it. Lesson: the pool can halve in 18 months; only the comp flex and restructuring desks stand between a drought and losses." }
  ],

  risks: [
    { name: "Fee-pool collapse (macro shock)", severity: 4, likelihood: 3, transmission: "Rate or confidence shock -> announcements stall -> completions dry up 2 quarters later -> revenue drops 30-40% against a fixed talent base." },
    { name: "Talent flight & comp inflation", severity: 3, likelihood: 4, transmission: "Rival guarantees poach a rainmaker team -> clients follow the people -> franchise share leaks while the comp ratio ratchets up for everyone." },
    { name: "Private capital disintermediation", severity: 3, likelihood: 3, transmission: "Private credit takes the loan economics -> sponsors internalize deal work -> the DCM slice ($39.3B, the pool's biggest) shrinks structurally." },
    { name: "Antitrust freeze", severity: 3, likelihood: 3, transmission: "Enforcement regime hardens -> megadeals (70 above $10B in 2025) become unapprovable -> the highest-fee segment of the pool goes dormant." },
    { name: "Conflict or conduct blowup", severity: 4, likelihood: 2, transmission: "A tainted fairness opinion or leak -> litigation and client exodus -> reputational franchises reprice in one news cycle (the asset is trust)." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Investment banks are paid advisers and middlemen: they help companies buy or sell each other (M&A) and raise money by selling stocks and bonds to investors. They earn success fees, roughly 1% on a $1B company sale, and globally those fees added up to about $117B in 2024. No factories, no products: the business is smart people, relationships, and trust."] },
    L2: { title: "Intermediate", text: ["The fee pool splits into M&A advice ($33.4B in 2024), debt underwriting ($39.3B), equity underwriting, and lending fees. Two models compete: giant banks (JPMorgan, Goldman) that bundle advice with loans, and boutiques (Evercore, Centerview) that sell only advice and have gained share for 15 years. Everything is cyclical: fees track CEO confidence and interest rates, and compensation (55-65% of revenue) flexes to absorb the swings."] },
    L3: { title: "Advanced", text: ["Model the sector as a call option on activity: advisory revenue lags announcements by 2-3 quarters, ECM is window-dependent, DCM rides refinancing calendars. Watch wallet share (JPM $10.1B vs GS $8.9B in 2025), MD productivity ($10-20M of fees each), and the comp ratio as the margin shock absorber. Sponsors are the structural story: ~$1.2T of buyout dry powder pays fees at entry, financing, and exit, making PE coverage the Street's biggest wallet."] },
    L4: { title: "Expert", text: ["Trade the leads: HY spreads gate LBO math, S-1 filings show the IPO pipeline early, backlog commentary is the only forward guidance. The live debates: whether boutique share gains survive founder succession and a real drought, whether 2025's $4.8T (70 megadeals, flat deal counts) broadens or fades, and how much of the DCM pool private credit structurally takes. Respect the pattern: firms that hire and guarantee comp at peak fees write the next cycle's margin collapse."] },
    L5: { title: "Institutional", text: ["Allocator's frame: this is a talent royalty on global capitalism's deal flow, with wallet share as the compounding variable and the pool as mean-reverting noise. Core the share gainers with comp discipline, pair them with restructuring ballast, and treat bulge IB lines as bank-earnings swing factors rather than pure plays. Size for a 5-rated cyclicality: the pool halved in 18 months twice in 15 years, and the franchises that emerged stronger were the ones that kept hiring through the trough."] }
  },

  quiz: [
    { q: "The global investment banking fee pool in 2024 was roughly:", choices: ["$12B", "$117B, up 14% YoY (LSEG)", "$1.2T", "$500B"], answer: 1, explain: "LSEG put 2024 at $117.4B: DCM $39.3B, M&A $33.4B, syndicated lending $29B, with ECM the balance." },
    { q: "A typical sell-side M&A fee on a $1B deal is about:", choices: ["10%", "1%, sliding lower as deals get bigger", "0.01%", "A fixed $50M"], answer: 1, explain: "Roughly 1% at $1B, 1.5-2%+ on small deals, drifting toward 0.3% on megadeals: contingent on closing, near-100% incremental margin." },
    { q: "Global M&A in 2025 reached:", choices: ["$1T", "$4.8T, up 41%: the 2nd highest year ever, behind 2021", "$10T", "It fell 41%"], answer: 1, explain: "Dealogic tallied ~$4.8T, powered by roughly 70 megadeals above $10B, while overall deal counts stayed flat: value led, breadth lagged." },
    { q: "In 2025 the total IB fee leader was:", choices: ["Goldman Sachs", "JPMorgan, at $10.1B, vs Goldman's $8.9B", "Evercore", "Centerview"], answer: 1, explain: "JPMorgan's balance-sheet-plus-franchise model led total fees; Goldman led pure M&A advisory at $4.6B and ~32% of announced volume." },
    { q: "The comp ratio matters because it is:", choices: ["A regulatory capital rule", "55-65% of revenue and the cyclical shock absorber: it flexes down so margins survive droughts", "The fee charged to clients", "Fixed by law"], answer: 1, explain: "Compensation is the industry's dominant cost; its flexibility is what stands between a 40% fee decline and outright losses." },
    { q: "Boutiques like Evercore compete against trillion-dollar banks by:", choices: ["Lending more cheaply", "Selling conflict-free advice with no balance sheet: Evercore ranked #5 in 2025 M&A fees", "Buying the companies themselves", "Undercutting fees 90%"], answer: 1, explain: "Boards pay for advice untangled from lending and trading conflicts: the independents have taken share for 15 years on exactly that pitch." },
    { q: "Financial sponsors are the Street's favorite clients because:", choices: ["They never negotiate fees", "Each asset pays roughly 3 times: at purchase, financing, and exit, with ~$1.2T of dry powder still to deploy", "They only do small deals", "They are regulators"], answer: 1, explain: "Private equity's buy-finance-sell loop makes sponsor coverage the biggest recurring wallet in banking (Bain pegs buyout dry powder near $1.2T)." },
    { q: "The 2008 lesson for the industry's structure was:", choices: ["Fees are risky", "Advisory never killed anyone; overnight-funded leveraged inventory did: every standalone survivor became a bank holding company", "M&A is illegal", "Boutiques caused it"], answer: 1, explain: "Bear and Lehman died of funding runs on levered securities books, not of their fee businesses: the capital-light advisory model emerged stronger." }
  ],

  sources: [
    { name: "LSEG Global Investment Banking Review (fee pool $117.4B, 2024)", url: "https://www.lseg.com/en/data-analytics/products/deals-intelligence", feeds: "fee pool, league tables" },
    { name: "Bain Global M&A Report 2026 ($4.8T 2025 rebound)", url: "https://www.bain.com/insights/looking-back-m-and-a-report-2026/", feeds: "M&A volumes, sponsor activity" },
    { name: "Dealogic M&A Highlights FY25", url: "https://dealogic.com/insight/ma-highlights-fy25/", feeds: "volumes, megadeals, rankings" },
    { name: "SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany", feeds: "filings pipeline, bank disclosures" }
  ]
};
