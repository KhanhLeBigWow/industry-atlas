/* Industry Atlas - companies: the advisory & desk players.
 * The sell-side houses and marquee buy-side counterparties the Desks pages
 * reference. Figures approximate, 2025-2026 vintages (mcaps mid-2026). */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "goldman-sachs": {
    id: "goldman-sachs", ticker: "GS", mcap: 300, name: "Goldman Sachs", full: "The Goldman Sachs Group, Inc.", country: "US",
    industries: ["investment-banking", "capital-markets", "banking"], role: "The franchise", founded: 1869, hq: "New York, USA",
    stats: [{ label: "M&A league tables", value: "#1", note: "23 straight years by announced value" }, { label: "Revenue", value: "$50B+", note: "2025, banking + markets + AWM" }, { label: "Trading", value: "top-2 globally", note: "FICC + equities" }, { label: "Alumni network", value: "everywhere", note: "the street's talent tree" }],
    model: [
      "Goldman runs the full stack: advisory (the perennial #1 M&A franchise), underwriting across ECM and DCM, one of the world's 2 dominant trading floors, and a growing asset-and-wealth arm smoothing the cycle. The businesses feed each other: the deal brings the financing brings the hedge brings the relationship.",
      "The economics are a cycle portfolio: advisory and ECM boom with confidence, FICC booms with volatility, and AWM grows through everything. The consumer detour (Marcus) was retreated from: the firm re-concentrated on what it monopolizes: being in the room for every major transaction on Earth."
    ],
    customers: [
      { who: "Corporates & boards", note: "M&A, financing, and the first call in a crisis", share: "advisory core" },
      { who: "Sponsors & institutions", note: "financing, prime, and trading flow" },
      { who: "Governments & sovereigns", note: "privatizations, debt, advice" }
    ],
    suppliers: [
      { who: "Talent", note: "the true input: the analyst class is the product pipeline" },
      { who: "Balance sheet & funding", note: "deposits, wholesale funding, the Fed window" },
      { who: "Market infrastructure", note: "exchanges, clearing, data" }
    ],
    capitalIn: [
      { source: "Fee revenue", note: "advisory + underwriting" },
      { source: "Trading spread & financing", note: "the markets engine" },
      { source: "AWM fees", note: "$3T+ supervised" }
    ],
    capitalOut: [
      { use: "Compensation (~30%+ of revenue)", note: "the industry's largest expense line" },
      { use: "Buybacks & dividends", note: "capital return within Fed stress-test limits" },
      { use: "Technology", note: "trading infrastructure is an arms race" }
    ],
    revenueMix: [
      { label: "Global banking & markets", pct: 65 }, { label: "Asset & wealth mgmt", pct: 30 }, { label: "Platform solutions", pct: 5 }
    ],
    moat: "The relationship monopoly at the top of every league table, compounded by an alumni network that runs half the buy side.",
    risks: "Cycle beta across every line; regulatory capital rules cap returns; talent is the asset and it walks.",
    competitors: ["morgan-stanley", "jpmorgan", "evercore"]
  },

  "morgan-stanley": {
    id: "morgan-stanley", ticker: "MS", mcap: 280, name: "Morgan Stanley", full: "Morgan Stanley", country: "US",
    industries: ["investment-banking", "wealth-management", "capital-markets"], role: "Banking + the wealth machine", founded: 1935, hq: "New York, USA",
    stats: [{ label: "Client assets", value: "$7T+", note: "wealth + investment mgmt" }, { label: "M&A / ECM", value: "top-2", note: "the Goldman duopoly" }, { label: "Wealth margin", value: "~27%", note: "the annuity engine" }, { label: "E*TRADE + Solium", value: "acquired", note: "the workplace-wealth funnel" }],
    model: [
      "Morgan Stanley is 2 firms fused: a top-2 investment bank (M&A, tech ECM royalty, trading) bolted to a wealth-management annuity ($7T+ client assets) built through the Smith Barney, E*TRADE, and Eaton Vance deals. The wealth arm converts market levels into fees regardless of deal cycles.",
      "That mix is the strategy: banking provides the beta and the brand; wealth provides the multiple. The workplace channel (stock-plan administration) quietly feeds millionaires-in-formation into advisory relationships: the cheapest client acquisition in finance."
    ],
    customers: [
      { who: "Corporates & sponsors", note: "the banking franchise; tech IPO royalty", share: "banking" },
      { who: "16M+ wealth relationships", note: "advisors + self-directed + workplace" },
      { who: "Institutions", note: "equities trading is a perennial top-2" }
    ],
    suppliers: [
      { who: "Advisor talent", note: "the wealth machine's distribution" },
      { who: "Funding & balance sheet", note: "bank deposits increasingly fund the model" },
      { who: "Market data & tech", note: "platform scale" }
    ],
    capitalIn: [
      { source: "Wealth & IM fees", note: "over half of revenue, recurring" },
      { source: "Banking fees", note: "advisory + underwriting" },
      { source: "Trading", note: "equities especially" }
    ],
    capitalOut: [
      { use: "Compensation", note: "advisor payouts + banker comp" },
      { use: "Dividends & buybacks", note: "wealth stability funds steady returns" },
      { use: "Platform acquisitions", note: "E*TRADE, Eaton Vance, Solium pattern" }
    ],
    revenueMix: [
      { label: "Wealth management", pct: 45 }, { label: "Institutional securities", pct: 45 }, { label: "Investment management", pct: 10 }
    ],
    moat: "The wealth annuity: $7T of client assets producing fees in every market, attached to a top-2 deal franchise.",
    risks: "Wealth margins compress in rate cuts; banking share war with Goldman/JPM; advisor attrition.",
    competitors: ["goldman-sachs", "jpmorgan", "UBS"]
  },

  "evercore": {
    id: "evercore", ticker: "EVR", mcap: 13, name: "Evercore", full: "Evercore Inc.", country: "US",
    industries: ["investment-banking"], role: "The largest independent", founded: 1995, hq: "New York, USA",
    stats: [{ label: "Revenue", value: "$3.9B", note: "FY2025, +29%" }, { label: "Advisory rank", value: "top-5 globally", note: "with no balance sheet" }, { label: "RX + PCA", value: "franchise depth", note: "restructuring and secondaries advisory" }, { label: "Revenue per SMD", value: "street-leading", note: "the boutique economics proof" }],
    model: [
      "Evercore is the proof that advice alone scales: a top-5 global M&A franchise with zero lending, built by hiring rainmakers and giving them a conflict-free platform. Around the M&A core sit a leading restructuring group, a league-table-topping Private Capital Advisory (secondaries) desk, and equities research.",
      "The economics are the boutique model at its best: fees convert to comp (~60%) and margin with almost no capital, so revenue per senior banker: not assets: is the KPI. The cycle risk is pure deal-flow beta, cushioned by RX working the downturns."
    ],
    customers: [
      { who: "Boards & CEOs", note: "conflict-free advice at mega-cap scale", share: "core" },
      { who: "Creditors & debtors", note: "the RX franchise" },
      { who: "LPs & GPs", note: "the PCA secondaries desk" }
    ],
    suppliers: [
      { who: "Senior talent", note: "the model IS hiring rainmakers" },
      { who: "The analyst pipeline", note: "famously selective classes" }
    ],
    capitalIn: [
      { source: "Advisory fees", note: "M&A success fees dominate" },
      { source: "RX + PCA fees", note: "countercyclical + secular growth" }
    ],
    capitalOut: [
      { use: "Compensation ~60% of revenue", note: "the talent flywheel" },
      { use: "Dividends + buybacks", note: "capital-light returns" }
    ],
    revenueMix: [
      { label: "Advisory (M&A, RX, PCA)", pct: 92 }, { label: "Underwriting + research", pct: 8 }
    ],
    moat: "Rainmaker density and independence: the advice carries no financing agenda, which is exactly why boards buy it.",
    risks: "Pure deal-cycle beta; senior departures move revenue; comp ratio leaves thin room in droughts.",
    competitors: ["centerview", "lazard", "pjt-partners", "moelis"]
  },

  "pjt-partners": {
    id: "pjt-partners", ticker: "PJT", mcap: 6, name: "PJT Partners", full: "PJT Partners Inc.", country: "US",
    industries: ["investment-banking"], role: "RX royalty + placement", founded: 2015, hq: "New York, USA",
    stats: [{ label: "Revenue", value: "$1.7B", note: "2025, +15%" }, { label: "RSSG", value: "top-ranked RX", note: "the marquee reorganizations" }, { label: "Park Hill", value: "placement leader", note: "funds + secondaries" }, { label: "Origin", value: "Blackstone spin", note: "2015, Paul Taubman merger" }],
    model: [
      "PJT is 3 franchises on one small platform: RSSG (the restructuring group behind many of the largest reorganizations: WeWork, PG&E, Puerto Rico class mandates), Park Hill (fund placement and secondaries advisory), and a growing strategic advisory M&A practice built rainmaker by rainmaker.",
      "The mix is deliberately all-weather: RX earns in downturns, placement earns on the private-markets secular tide, M&A earns in expansions. Small headcount, huge fees per head: the concentrated boutique model with 3 uncorrelated engines."
    ],
    customers: [
      { who: "Debtors & creditors", note: "RSSG mandates in mega-distress", share: "the crown jewel" },
      { who: "GPs raising funds", note: "Park Hill placement" },
      { who: "Boards", note: "strategic advisory buildout" }
    ],
    suppliers: [
      { who: "Partner talent", note: "small, senior, expensive: by design" },
      { who: "The Blackstone diaspora", note: "heritage relationships" }
    ],
    capitalIn: [
      { source: "RX fees", note: "monthly retainers + completion fees" },
      { source: "Placement fees", note: "% of capital raised" },
      { source: "M&A success fees", note: "the growth engine" }
    ],
    capitalOut: [
      { use: "Compensation", note: "partner-heavy economics" },
      { use: "Buybacks", note: "steady share-count discipline" }
    ],
    revenueMix: [
      { label: "Advisory (M&A + RSSG)", pct: 75 }, { label: "Park Hill placement", pct: 25 }
    ],
    moat: "RSSG's brand in the biggest restructurings: distress is a franchise business, and theirs prints on every cycle turn.",
    risks: "Small-firm concentration (key partners, key mandates); RX feast-or-famine timing; M&A buildout competes with entrenched giants.",
    competitors: ["evercore", "houlihan-lokey", "lazard", "moelis"]
  },

  "lazard": {
    id: "lazard", ticker: "LAZ", mcap: 5, name: "Lazard", full: "Lazard, Inc.", country: "US",
    industries: ["investment-banking", "asset-management"], role: "The original independent", founded: 1848, hq: "New York / Paris",
    stats: [{ label: "Revenue", value: "$3.1B", note: "FY2025" }, { label: "Heritage", value: "175+ years", note: "the oldest advisory brand" }, { label: "Sovereign advisory", value: "unique", note: "it restructures countries" }, { label: "AUM", value: "$250B~", note: "the asset-management half" }],
    model: [
      "Lazard is 2 businesses under the oldest name in advisory: financial advisory (global M&A with unmatched European and cross-border reach, corporate and SOVEREIGN restructuring) and an asset manager whose fees steady the deal cycle. The sovereign practice is genuinely unique: when countries default, Lazard's phone rings.",
      "The strategy under new leadership: rebuild US M&A share with rainmaker hires while the brand carries Europe, and let the 2-engine structure (advice + AUM) smooth what pure boutiques cannot."
    ],
    customers: [
      { who: "European + cross-border boards", note: "the historic franchise", share: "advisory core" },
      { who: "Sovereigns in distress", note: "Argentina-to-Ukraine class mandates" },
      { who: "Institutional investors", note: "the AM client base" }
    ],
    suppliers: [
      { who: "Banker talent", note: "the rebuild is a hiring story" },
      { who: "Investment teams", note: "AM's capacity" }
    ],
    capitalIn: [
      { source: "Advisory fees", note: "M&A + RX + sovereign" },
      { source: "Management fees", note: "the AM annuity" }
    ],
    capitalOut: [
      { use: "Compensation", note: "the perennial ratio battle" },
      { use: "Dividends + buybacks", note: "post-conversion simplification" }
    ],
    revenueMix: [
      { label: "Financial advisory", pct: 60 }, { label: "Asset management", pct: 40 }
    ],
    moat: "The brand and the sovereign franchise: 175 years of being in the room, on both sides of the Atlantic.",
    risks: "US share rebuild vs entrenched rivals; AM outflows; comp discipline vs talent retention.",
    competitors: ["evercore", "rothschild", "pjt-partners", "moelis"]
  },

  "moelis": {
    id: "moelis", ticker: "MC", mcap: 5, name: "Moelis & Company", full: "Moelis & Company", country: "US",
    industries: ["investment-banking"], role: "Founder-led dealmaking", founded: 2007, hq: "New York, USA",
    stats: [{ label: "Revenue", value: "$1.5B", note: "2025, +27%" }, { label: "Founded", value: "2007", note: "launched INTO the crisis" }, { label: "RX + sponsors", note: "", value: "dual franchise" }, { label: "Middle East", value: "deep", note: "the Gulf franchise" }],
    model: [
      "Ken Moelis built the entrepreneurial boutique: lean teams, early responsibility, an active restructuring practice, deep sponsor coverage, and the street's strongest Middle East relationships. The one-firm model: no product silos, bankers work whatever the client needs.",
      "Economics are classic independent: fees to comp to margin, no balance sheet, with RX as the countercyclical engine. The bet is culture as moat: dealmakers who want to run at deals, not committees."
    ],
    customers: [
      { who: "Corporates & boards", note: "generalist M&A with sector depth", share: "core" },
      { who: "Sponsors", note: "the PE relationship web" },
      { who: "Gulf sovereigns & corporates", note: "the differentiated geography" }
    ],
    suppliers: [
      { who: "Dealmaker talent", note: "the aggressive-hire model" }
    ],
    capitalIn: [
      { source: "Advisory fees", note: "M&A + RX + capital advisory" }
    ],
    capitalOut: [
      { use: "Compensation", note: "the talent bill" },
      { use: "Dividends (incl. specials)", note: "the boutique payout pattern" }
    ],
    revenueMix: [
      { label: "Advisory", pct: 100 }
    ],
    moat: "Founder-led speed and the Gulf: relationships where the capital now lives.",
    risks: "Succession beyond the founder; comp pressure in droughts; RX and M&A rarely boom together.",
    competitors: ["evercore", "pjt-partners", "lazard", "houlihan-lokey"]
  },

  "houlihan-lokey": {
    id: "houlihan-lokey", ticker: "HLI", mcap: 13, name: "Houlihan Lokey", full: "Houlihan Lokey, Inc.", country: "US",
    industries: ["investment-banking"], role: "RX volume king · mid-cap machine", founded: 1972, hq: "Los Angeles, USA",
    stats: [{ label: "Revenue", value: "$2.4B", note: "FY2025, +25%" }, { label: "RX rank", value: "#1 by count", note: "cycle after cycle" }, { label: "MM M&A", value: "#1 by count", note: "the volume model" }, { label: "Fairness opinions", value: "#1", note: "the quiet franchise" }],
    model: [
      "Houlihan runs the volume model: #1 in restructuring by deal count, #1 in mid-cap M&A by count, #1 in fairness opinions: hundreds of mandates a year at fees the mega-boutiques ignore, summing to remarkably stable revenue. Creditor-side RX work is a specialty: committees hire Houlihan by reflex.",
      "The countercyclical hedge is structural: when M&A slows, RX accelerates, and the same industry teams work both. Diversified, repeatable, mid-cap: the anti-lumpy boutique."
    ],
    customers: [
      { who: "Creditor committees", note: "the reflex hire in distress", share: "RX franchise" },
      { who: "Founder & sponsor-owned mid-caps", note: "sale processes at industrial scale" },
      { who: "Boards needing opinions", note: "fairness and valuation work" }
    ],
    suppliers: [
      { who: "Industry-team talent", note: "coverage depth across dozens of niches" }
    ],
    capitalIn: [
      { source: "Advisory fees", note: "M&A + RX + valuation, high count" }
    ],
    capitalOut: [
      { use: "Compensation", note: "leaner per-head economics than EBs" },
      { use: "Acquisitions", note: "tuck-in advisory teams (GCA class)" },
      { use: "Dividends + buybacks", note: "steady return" }
    ],
    revenueMix: [
      { label: "Corporate finance (M&A)", pct: 60 }, { label: "Financial restructuring", pct: 25 }, { label: "Valuation & opinions", pct: 15 }
    ],
    moat: "Volume + countercyclicality: the only advisory model that prints in both halves of the cycle by design.",
    risks: "Fee-per-deal ceilings; mega-cap ambitions meet entrenched EBs; RX normalization in long expansions.",
    competitors: ["jefferies", "pjt-partners", "evercore", "lazard"]
  },

  "jefferies": {
    id: "jefferies", ticker: "JEF", mcap: 13, name: "Jefferies", full: "Jefferies Financial Group Inc.", country: "US",
    industries: ["investment-banking", "capital-markets"], role: "The full-service challenger", founded: 1962, hq: "New York, USA",
    stats: [{ label: "Revenue", value: "$7B+", note: "FY2025 class" }, { label: "Model", value: "full service, no Fed", note: "banking + markets without bank-holding drag" }, { label: "LevFin + secondaries", value: "franchises", note: "sponsor finance + the PCA review" }, { label: "League tables", value: "top-10 rising", note: "the persistent share-taker" }],
    model: [
      "Jefferies is the full-service challenger: advisory, underwriting, leveraged finance, and trading at bulge scale, minus the bank-holding-company constraints. It grew by hiring through every downturn: buying share with comp when rivals retrenched.",
      "Sponsor finance is the beating heart: LevFin underwriting plus M&A plus an elite secondaries advisory desk (its half-yearly market review is the industry's scoreboard). The First Brands stumble showed the model's risk face: underwriting aggressiveness cuts both ways."
    ],
    customers: [
      { who: "Sponsors", note: "financing + advisory, the core relationship", share: "the engine" },
      { who: "Mid-to-large corporates", note: "the challenger pitch: senior attention" },
      { who: "LPs & GPs", note: "the secondaries advisory desk" }
    ],
    suppliers: [
      { who: "Talent hired countercyclically", note: "the expansion playbook" },
      { who: "Balance sheet", note: "underwriting requires carrying risk" }
    ],
    capitalIn: [
      { source: "Banking fees", note: "advisory + ECM + DCM" },
      { source: "Trading", note: "equities + fixed income" }
    ],
    capitalOut: [
      { use: "Compensation", note: "the hire-through-downturns bill" },
      { use: "Underwriting commitments", note: "bridges carried until sold" },
      { use: "Dividends + buybacks", note: "value-conscious management" }
    ],
    revenueMix: [
      { label: "Investment banking", pct: 55 }, { label: "Capital markets (trading)", pct: 40 }, { label: "Other", pct: 5 }
    ],
    moat: "The only credible full-service alternative to the bulge for sponsors: scale products with challenger hunger.",
    risks: "Underwriting risk realized (First Brands class); comp-heavy expansion economics; cycle beta squared.",
    competitors: ["goldman-sachs", "morgan-stanley", "houlihan-lokey"]
  },

  "centerview": {
    id: "centerview", ticker: null, mcap: null, name: "Centerview Partners", full: "Centerview Partners LLC", country: "US",
    industries: ["investment-banking"], role: "Fewest, largest, quietest", founded: 2006, hq: "New York, USA",
    stats: [{ label: "Structure", value: "private partnership", note: "no public financials" }, { label: "Fee per deal", value: "street-leading", note: "mega-cap only" }, { label: "Franchises", value: "healthcare + consumer", note: "board-of-directors coverage" }, { label: "Classes", value: "tiny", note: "famously selective + well paid" }],
    model: [
      "Centerview runs the purest version of the advice business: a private partnership doing few, enormous mandates: healthcare mega-mergers, consumer icons, activism defense: with fees per deal at the top of the street and no products to cross-sell.",
      "Staying private is strategic: no earnings calls, no comp disclosure, no pressure to scale. The board relationship IS the entire asset."
    ],
    customers: [
      { who: "Mega-cap boards", note: "healthcare and consumer especially", share: "everything" },
      { who: "Companies under activist attack", note: "the defense frequently in the room" }
    ],
    suppliers: [
      { who: "A handful of partners", note: "the most concentrated talent model in banking" }
    ],
    capitalIn: [
      { source: "Advisory fees", note: "few, very large" }
    ],
    capitalOut: [
      { use: "Partner distributions", note: "the private-partnership reward" }
    ],
    revenueMix: [
      { label: "Advisory", pct: 100 }
    ],
    moat: "Reputation density: a tiny partnership that mega-cap boards call first, kept private so nothing dilutes it.",
    risks: "Extreme key-person concentration; succession; the model resists scale by design.",
    competitors: ["evercore", "goldman-sachs", "lazard"]
  },

  "oaktree": {
    id: "oaktree", ticker: null, mcap: null, name: "Oaktree Capital", full: "Oaktree Capital Management (Brookfield)", country: "US",
    industries: ["hedge-funds", "private-credit"], role: "The distressed-credit standard", founded: 1995, hq: "Los Angeles, USA",
    stats: [{ label: "AUM", value: "$200B~", note: "credit-led" }, { label: "Owner", value: "Brookfield (majority)", note: "since 2019" }, { label: "Franchise", value: "distressed debt", note: "the category's defining name" }, { label: "The memos", value: "Howard Marks", note: "the industry's required reading" }],
    model: [
      "Oaktree defined institutional distressed investing: buy the debt of good companies with bad balance sheets at deep discounts, drive or ride the restructuring, and get paid in recoveries and reorganized equity. Around the flagship distressed franchise sits a full credit platform: direct lending, high yield, real assets.",
      "The philosophy is the product: risk control first, cycles respected, patience funded by locked capital. Brookfield's majority stake wired Oaktree's credit engine into a $1T real-assets platform: credit sourcing meets equity ownership."
    ],
    customers: [
      { who: "Institutional LPs", note: "pensions and sovereigns in credit funds", share: "core" },
      { who: "Companies needing rescue capital", note: "the friendly-tough lender of last resort" }
    ],
    suppliers: [
      { who: "Broken balance sheets", note: "the raw material: sourced from every credit cycle" },
      { who: "RX advisors & courts", note: "the machinery of recoveries" }
    ],
    capitalIn: [
      { source: "LP commitments", note: "distressed funds raised BEFORE cycles turn" },
      { source: "Management fees + carry", note: "standard alternatives economics" }
    ],
    capitalOut: [
      { use: "Debt purchases at discounts", note: "the fulcrum hunt" },
      { use: "DIP + rescue loans", note: "priced for control optionality" }
    ],
    revenueMix: [
      { label: "Closed-end credit funds", pct: 60 }, { label: "Open-end + evergreen", pct: 25 }, { label: "Listed + other", pct: 15 }
    ],
    moat: "The distressed brand: 30 years of cycle scar tissue, first-call deal flow, and the memos that trained the industry.",
    risks: "Long benign-credit stretches starve the flagship strategy; Brookfield integration questions; founder-era transition.",
    competitors: ["apollo-global", "ares", "elliott"]
  },

  "elliott": {
    id: "elliott", ticker: null, mcap: null, name: "Elliott Management", full: "Elliott Investment Management L.P.", country: "US",
    industries: ["hedge-funds"], role: "The activist apex predator", founded: 1977, hq: "West Palm Beach, USA",
    stats: [{ label: "AUM", value: "$70B+", note: "multi-strategy" }, { label: "Record", value: "no down year is the lore", note: "5 decades of compounding" }, { label: "Campaigns", value: "dozens live", note: "the busiest activist anywhere" }, { label: "Range", value: "activism to distressed to PE", note: "one flexible pool" }],
    model: [
      "Elliott runs one flexible capital pool across the situations others specialize in: shareholder activism at the world's largest companies, distressed debt (the Argentina sovereign saga is legend), event-driven trades, and outright private equity through Evergreen Coast.",
      "The edge is escalation capacity: legal firepower, staying power measured in years, and a reputation that makes boards negotiate before the letter goes public. In RX situations Elliott plays every seat: creditor, fulcrum buyer, and plan sponsor."
    ],
    customers: [
      { who: "Institutional LPs", note: "capacity-constrained, long-locked", share: "the pool" }
    ],
    suppliers: [
      { who: "Situations", note: "mispriced governance, broken balance sheets, stuck deals" },
      { who: "Law firms & advisors", note: "the escalation machinery" }
    ],
    capitalIn: [
      { source: "LP capital", note: "multi-year locks fund multi-year fights" },
      { source: "Fees + performance", note: "hedge-fund economics with PE patience" }
    ],
    capitalOut: [
      { use: "Position building", note: "equity stakes + debt at the fulcrum" },
      { use: "Campaign costs", note: "proxies, litigation, operating partners" }
    ],
    revenueMix: [
      { label: "Activism & equity", pct: 50 }, { label: "Credit & distressed", pct: 35 }, { label: "Private equity", pct: 15 }
    ],
    moat: "Credible escalation: 5 decades of finishing fights it starts, which changes outcomes before they begin.",
    risks: "Size vs opportunity set; key-person succession; political scrutiny of activism.",
    competitors: ["oaktree", "Starboard", "Icahn class"]
  },

  "ardian": {
    id: "ardian", ticker: null, mcap: null, name: "Ardian", full: "Ardian SAS", country: "FR",
    industries: ["private-equity", "asset-management"], role: "The secondaries superpower", founded: 1996, hq: "Paris, France",
    stats: [{ label: "AUM", value: "$180B+", note: "2026" }, { label: "ASF IX", value: "$30B", note: "largest secondaries fund ever (2025)" }, { label: "Heritage", value: "AXA PE spinout", note: "independent since 2013" }, { label: "Platform", value: "secondaries + buyout + infra", note: "Europe's alternatives champion" }],
    model: [
      "Ardian built the world's largest secondaries franchise: $30B flagships that buy LP portfolios at industrial scale: on top of European buyout, infrastructure, and private credit arms. Scale IS the strategy in secondaries: only a handful of buyers can price $3B+ portfolios in one bite.",
      "The model compounds: relationships from primaries feed secondaries deal flow; secondaries data feeds underwriting; the flywheel makes Ardian the first call for every mega LP sale on Earth."
    ],
    customers: [
      { who: "LPs selling portfolios", note: "pensions, sovereigns, insurers", share: "secondaries" },
      { who: "LPs committing capital", note: "1,700+ investors across the platform" }
    ],
    suppliers: [
      { who: "PCA desks", note: "Evercore/Jefferies/PJT processes bring the flow" },
      { who: "GP relationships", note: "consents and data access decide execution" }
    ],
    capitalIn: [
      { source: "Fund commitments", note: "the $30B flagship class" },
      { source: "Management fees + carry", note: "platform economics" }
    ],
    capitalOut: [
      { use: "Portfolio purchases", note: "billions per bite, priced vs NAV" },
      { use: "Deferred structures", note: "the tool that closes wide bid-asks" }
    ],
    revenueMix: [
      { label: "Secondaries & primaries", pct: 55 }, { label: "Direct funds (buyout, infra)", pct: 35 }, { label: "Credit + other", pct: 10 }
    ],
    moat: "Scale nobody can match in secondaries: the biggest checkbook, the deepest NAV database, the first call.",
    risks: "Paying up in a compressed-discount market; European base vs US mega-rivals; IPO speculation vs partnership culture.",
    competitors: ["blackstone", "Lexington (Franklin)", "HarbourVest"]
  }
});
