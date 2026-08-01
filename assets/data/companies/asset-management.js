/* Industry Atlas - asset-management company profiles.
 * Figures researched Jul 2026: company 8-K/10-K filings and earnings releases
 * (BlackRock FY2025 8-K/10-K; Blackstone 4Q25 press release; MSCI 4Q25 release),
 * market caps as of mid/late Jul 2026 (stockanalysis.com, macrotrends, companiesmarketcap).
 * Approximate precision by design; vintages noted per stat. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "blackrock": {
    id: "blackrock", ticker: "BLK", mcap: 172, name: "BlackRock", full: "BlackRock, Inc.", country: "US",
    industries: ["asset-management"], role: "World's largest asset manager", founded: 1988, hq: "New York, USA",
    stats: [{ label: "AUM", value: "$14.0T", note: "YE2025; $15.3T by mid-2026" }, { label: "Revenue", value: "$24.2B", note: "2025, up from $20.4B" }, { label: "Technology services", value: "$2.0B", note: "2025; Aladdin + Preqin, up 24%" }, { label: "Net inflows", value: "Record", note: "2025, best year in firm history" }],
    model: [
      "BlackRock is a toll road on the world's savings: it manages $14T and clips a few hundredths of a percent of everything, every year. Base fees tied to AUM make revenue a function of market levels, net flows, and product mix, so the business compounds with global wealth itself. iShares, the largest ETF franchise on Earth, turned indexing into a scale game BlackRock has already won: at its size it earns healthy margins at fee levels that would starve smaller rivals.",
      "The second act bolts higher-fee engines onto the passive core. Roughly $28B of acquisitions across 2024 and 2025 (GIP for infrastructure, HPS for private credit, Preqin for private-markets data) built an alternatives platform targeting $600B of client assets and $3B+ of revenue. Aladdin, the risk and portfolio platform, rents BlackRock's own plumbing to competitors: $2.0B of 2025 technology revenue that makes the firm the operating system of asset management, not merely its largest player."
    ],
    customers: [
      { who: "Institutional investors", note: "pensions, insurers, sovereign wealth funds: the bulk of AUM in long-dated mandates" },
      { who: "Wealth & retail investors", note: "iShares ETFs and model portfolios distributed through advisors and platforms" },
      { who: "Corporates & treasurers", note: "money-market and cash management at enormous scale" },
      { who: "Rival managers & governments (Aladdin)", note: "competitors run their books on BlackRock software; central banks call it in crises" }
    ],
    suppliers: [
      { who: "Index providers (MSCI, S&P DJI, FTSE Russell)", note: "benchmark licenses whose fees scale with the assets tracking them" },
      { who: "Market data & exchanges", note: "Bloomberg and LSEG feeds power research, trading, and pricing" },
      { who: "Custodians (BNY, State Street, JPMorgan)", note: "safekeeping for the $14T it manages but never holds" },
      { who: "Microsoft Azure", note: "Aladdin's cloud backbone" },
      { who: "Distribution platforms", note: "wirehouses, RIAs, and brokerages that give iShares shelf space" }
    ],
    capitalIn: [
      { source: "Fee revenue / operating cash flow", note: "$24.2B of 2025 revenue converts to roughly $5B+ of annual free cash flow" },
      { source: "Stock as acquisition currency", note: "GIP and HPS were paid largely in BLK shares" },
      { source: "Bond markets", note: "modest investment-grade leverage for a fee machine this steady" }
    ],
    capitalOut: [
      { use: "M&A ~$28B (2024 to 2025)", note: "GIP, HPS, Preqin: buying private markets and the data layer around them" },
      { use: "Dividends + buybacks", note: "steadily rising payout plus consistent repurchases" },
      { use: "Aladdin & technology", note: "platform R&D that rivals then rent" },
      { use: "Seed & co-investment", note: "warming up new funds, ETFs, and private-markets vehicles" }
    ],
    revenueMix: [
      { label: "Base fees & securities lending", pct: 80 }, { label: "Technology services", pct: 8 }, { label: "Performance fees", pct: 6 }, { label: "Distribution & other", pct: 6 }
    ],
    moat: "Scale nobody can match: the lowest cost per dollar managed, the iShares liquidity flywheel, and Aladdin embedded inside rivals' own operations make BlackRock market infrastructure, not just a participant.",
    risks: "Fees ride market levels (beta risk); passive fee compression; digesting $28B of private-markets acquisitions; political fire from both directions on ESG.",
    competitors: ["Vanguard", "State Street (SSGA)", "Fidelity", "Amundi", "blackstone"]
  },

  "blackstone": {
    id: "blackstone", ticker: "BX", mcap: 150, name: "Blackstone", full: "Blackstone Inc.", country: "US",
    industries: ["asset-management", "private-equity"], role: "Alternatives #1", founded: 1985, hq: "New York, USA",
    stats: [{ label: "AUM", value: "$1.27T", note: "YE2025, up 13%" }, { label: "Inflows", value: "~$240B", note: "2025; $71B in Q4 alone" }, { label: "Distributable earnings", value: "$7.1B", note: "2025, up ~20%" }, { label: "Management fees", value: "$8.0B", note: "2025, up 12%" }],
    model: [
      "Blackstone manages $1.27T of other people's money across private equity, real estate, credit, and multi-asset strategies, earning management fees of roughly 1% to 2% on committed capital plus carried interest of up to 20% of profits above a hurdle. The balance sheet stays light: LPs supply the capital, Blackstone supplies judgment and deal access, and the $8.0B management-fee stream (2025) arrives whether or not markets cooperate.",
      "The strategic shift is from episodic funds to permanent money. Perpetual vehicles for wealthy individuals (BREIT, BCRED, BXPE) and long-dated insurance mandates now anchor a large and growing share of AUM, smoothing the old fundraise-invest-harvest cycle. Credit & Insurance has overtaken real estate as the largest segment, and 2025 distributable earnings of $7.1B (up ~20%, with net realizations up 50%) show the flywheel: more permanent AUM, more fee-related earnings, less dependence on lumpy exits."
    ],
    customers: [
      { who: "Public pensions", note: "the anchor LPs of every flagship fund" },
      { who: "Sovereign wealth funds & insurers", note: "mega-commitments and perpetual insurance accounts" },
      { who: "Private wealth individuals", note: "BREIT, BCRED, BXPE: alternatives repackaged in semi-liquid retail wrappers" },
      { who: "Endowments & family offices", note: "the original alternatives believers" }
    ],
    suppliers: [
      { who: "Investment banks", note: "M&A execution and underwriting on both ends of every deal" },
      { who: "Leveraged finance markets", note: "LBO debt from banks and, increasingly, rival private credit funds" },
      { who: "Law firms & advisors", note: "Simpson Thacher and peers paper the deals" },
      { who: "Operating executives", note: "a bench of former CEOs parachuted into portfolio companies" },
      { who: "Placement & distribution partners", note: "private banks and wirehouses selling the wealth products" }
    ],
    capitalIn: [
      { source: "LP commitments", note: "pensions and sovereign funds lock capital up for a decade at a time" },
      { source: "Perpetual capital vehicles", note: "BREIT, BCRED, and insurance accounts that never hand the money back" },
      { source: "Private wealth channel", note: "the fastest-growing spigot: individuals via private banks" },
      { source: "Fee stream", note: "$8.0B of 2025 management fees funds the firm itself" }
    ],
    capitalOut: [
      { use: "GP commitments & co-invest", note: "the firm eats its own cooking in every fund" },
      { use: "Dividends", note: "pays out most of distributable earnings each quarter" },
      { use: "Compensation & carry", note: "the talent takes its cut of the 20" },
      { use: "Opportunistic buybacks", note: "modest repurchases alongside the payout" }
    ],
    revenueMix: [
      { label: "Management & advisory fees", pct: 60 }, { label: "Performance revenues (carry & incentive)", pct: 30 }, { label: "Principal investments & other", pct: 10 }
    ],
    moat: "Brand, scale, and relationships compound: the biggest LPs commit to Blackstone because it is the biggest, and 4 decades of proprietary data across hundreds of portfolio companies sharpen every next bet.",
    risks: "Rate-sensitive real estate marks; fundraising and exit cycles; retail redemption waves (BREIT 2022 to 2023 showed the template); carry depends on markets cooperating.",
    competitors: ["KKR", "Apollo", "Brookfield", "Carlyle", "Ares", "blackrock"]
  },

  "msci": {
    id: "msci", ticker: "MSCI", mcap: 46, name: "MSCI", full: "MSCI Inc.", country: "US",
    industries: ["asset-management"], role: "Benchmark & risk standard-setter", founded: 1969, hq: "New York, USA",
    stats: [{ label: "Revenue", value: "~$3.0B", note: "2025" }, { label: "Adj. EBITDA margin", value: "~60%", note: "structurally" }, { label: "Retention", value: "~94%", note: "subscription renewals" }, { label: "Linked ETF assets", value: "~$2T", note: "mid-2025" }],
    model: [
      "MSCI sells the measuring sticks of global investing. Its indexes (ACWI, World, EM) are the contractual benchmarks for trillions in mandates and roughly $2T of ETFs, which pay MSCI basis-point royalties on assets; Barra risk models and RiskMetrics analytics decompose portfolios; ESG and climate ratings screen them. Nearly all revenue is recurring subscription or asset-based fees, retention runs about 94%, and adjusted EBITDA margins near 60% make this one of the best business models in finance.",
      "The genius is the double toll: managers pay to license the benchmark, then investors pay again as passive money tracks it. Index data is largely a fixed cost, so each incremental subscription is nearly pure margin, and capex is minimal: free cash flow funds relentless buybacks. The Burgiss acquisition extends the playbook into private assets, the opaque corner of the market that needs benchmarks most."
    ],
    customers: [
      { who: "BlackRock / iShares", note: "largest client via ETF benchmark royalties", share: "~10% of revenue" },
      { who: "Active managers & hedge funds", note: "benchmarks to beat, Barra models to manage the risk of trying" },
      { who: "Asset owners", note: "pensions and sovereign funds define policy portfolios in MSCI terms" },
      { who: "Banks, insurers & private-markets GPs", note: "analytics, ESG screens, and Burgiss private-assets data" }
    ],
    suppliers: [
      { who: "Exchanges & market data vendors", note: "raw prices and corporate actions feeding the index engines" },
      { who: "Corporate disclosures", note: "the ESG and climate inputs, collected and structured at scale" },
      { who: "Cloud providers (Azure, Google)", note: "compute for index production and risk analytics" },
      { who: "Global data operations centers", note: "Mumbai, Manila, Budapest: the human data pipeline" }
    ],
    capitalIn: [
      { source: "Recurring subscriptions", note: "roughly three quarters of revenue renews on contract" },
      { source: "Asset-based fees", note: "basis points on ~$2T of MSCI-linked ETFs, growing with passive flows" },
      { source: "Debt markets", note: "runs about 3x levered; cheap debt has funded years of buybacks" }
    ],
    capitalOut: [
      { use: "Buybacks", note: "the bulk of free cash flow retires shares" },
      { use: "Dividends", note: "a growing payout on top" },
      { use: "Bolt-on M&A", note: "Burgiss (private-assets data), RCA, Trove Research" },
      { use: "Product & data investment", note: "custom indexes, climate, private-markets tooling" }
    ],
    revenueMix: [
      { label: "Index", pct: 56 }, { label: "Analytics", pct: 23 }, { label: "Sustainability & climate", pct: 12 }, { label: "Private assets", pct: 9 }
    ],
    moat: "Benchmark entrenchment: trillions of dollars are contractually wired to MSCI indexes, and switching a benchmark is a decade of pain for a rounding-error saving.",
    risks: "Client concentration (BlackRock about 10% of revenue); asset-based fees fall with equity markets; self-indexing by large managers; ESG politicization in the US.",
    competitors: ["S&P Global (S&P DJI)", "FTSE Russell (LSEG)", "Bloomberg", "Morningstar (Sustainalytics)", "ISS STOXX"]
  }

});
