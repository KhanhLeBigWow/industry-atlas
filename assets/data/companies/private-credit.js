/* Industry Atlas - PRIVATE CREDIT company profiles (research-backed).
 * Anchors: Apollo 4Q'25 earnings release (Feb 2026): AUM $938B, FRE $2,528M,
 * SRE $3,361M, PII $338M, inflows $228B, origination $309B. Ares 4Q'25 release
 * (Feb 2026): AUM $622.5B, FPAUM $385B, FRE +30%, fundraising $113B. Blue Owl
 * 4Q'25 release (Feb 2026): AUM $307B, FPAUM $187.7B, ~85% of fees permanent.
 * Market caps approximate as of mid-July 2026 (macrotrends/companiesmarketcap). */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "apollo": {
    id: "apollo", ticker: "APO", mcap: 68.5, name: "Apollo", full: "Apollo Global Management, Inc.", country: "US",
    industries: ["private-credit", "asset-management"], role: "Credit origination + retirement colossus", founded: 1990, hq: "New York, USA",
    stats: [{ label: "AUM", value: "$938B", note: "Dec 2025; $709B fee-generating" }, { label: "Inflows", value: "$228B", note: "2025, record; $182B organic" }, { label: "FRE + SRE", value: "$5.9B", note: "2025; adjusted net income $5.2B" }, { label: "Origination", value: "$309B", note: "2025, record" }],
    model: [
      "Apollo runs private credit's biggest flywheel. Athene, its wholly owned retirement business, sells fixed annuities and funding agreements: long-dated, spread-bearing liabilities that must be invested the day they arrive. Apollo answers with assets it manufactures itself through 16 origination platforms (Atlas SP in securitized credit, MidCap Financial in middle-market lending, PK AirFinance in aviation, Wheels in fleet leasing) plus bespoke investment-grade deals for names like Intel, AB InBev, and AT&T. The firm originated a record $309B of credit in 2025; Marc Rowan's thesis is that assets, not capital, are the scarce resource.",
      "The economics stack two engines: fee-related earnings ($2.5B in 2025, up 23%) from managing $709B of fee-generating AUM, and spread-related earnings ($3.4B) from the gap between what Athene's balance sheet earns and what its annuities cost. Both are built for durability: permanent capital, a mostly investment-grade book, and a growing wealth channel (Apollo Aligned Alternatives) opening the retail spigot. Combined fee plus spread earnings hit a record $5.9B in 2025 on $228B of inflows."
    ],
    customers: [
      { who: "Athene policyholders", note: "US retirees buying fixed and indexed annuities: the liability engine that funds the machine" },
      { who: "Institutional LPs", note: "pensions, sovereign wealth funds, and insurers across credit, hybrid, and equity funds" },
      { who: "Investment-grade corporates", note: "multi-billion bespoke financings: Intel's Ireland fab JV, AB InBev, AT&T" },
      { who: "Private wealth", note: "Apollo Aligned Alternatives (AAA) and semi-liquid credit funds via banks and RIAs" }
    ],
    suppliers: [
      { who: "16 origination platforms", note: "Atlas SP, MidCap Financial, PK AirFinance, Wheels: proprietary asset factories" },
      { who: "Bank partners", note: "Citi's $25B private credit program (2024) and warehouse lines feed Atlas SP" },
      { who: "PE sponsors & corporates", note: "deal flow that outgrew bank balance sheets after 2008" },
      { who: "Rating agencies", note: "IG private placements need ratings to earn insurance capital treatment" }
    ],
    capitalIn: [
      { source: "Annuity premiums & funding agreements", note: "Athene's ~$70B a year of organic inflows" },
      { source: "Institutional fund commitments", note: "drawdown funds across the credit-to-equity spectrum" },
      { source: "Global wealth inflows", note: "AAA and semi-liquid vehicles, the fastest-growing channel" },
      { source: "Holdco debt & preferreds", note: "investment-grade issuance funds seed capital and M&A" }
    ],
    capitalOut: [
      { use: "Credit origination", note: "$309B in 2025 across platforms and direct deals" },
      { use: "Policyholder obligations", note: "annuity payments: the liability side of the spread" },
      { use: "Dividends + buybacks", note: "$0.51/quarter dividend plus steady repurchases" },
      { use: "Platform M&A", note: "Bridge Investment Group (real estate, 2025) and stakes in origination platforms" }
    ],
    revenueMix: [
      { label: "Spread-related (Athene)", pct: 54 }, { label: "Fee-related earnings", pct: 41 }, { label: "Principal investing", pct: 5 }
    ],
    moat: "The Athene flywheel: permanent, spread-bearing liabilities married to proprietary origination at a scale (16 platforms, $309B a year) no rival can assemble this decade.",
    risks: "SRE compresses if rates fall or annuity competition bids up liability costs; regulators are circling the insurance-PE nexus; and originating $300B a year without adverse selection is the eternal question.",
    competitors: ["ares", "blue-owl", "Blackstone (BXCI)", "KKR (Global Atlantic)", "Brookfield/Oaktree"]
  },

  "ares": {
    id: "ares", ticker: "ARES", mcap: 37.5, name: "Ares", full: "Ares Management Corporation", country: "US",
    industries: ["private-credit", "asset-management"], role: "Direct lending pioneer", founded: 1997, hq: "Los Angeles, USA",
    stats: [{ label: "AUM", value: "$622.5B", note: "Dec 2025, up 29% y/y" }, { label: "Fee-paying AUM", value: "$385B", note: "Dec 2025, up 32%" }, { label: "FRE", value: "~$1.8B", note: "2025, up 30%; 41.7% margin" }, { label: "Fundraising", value: "$113B", note: "2025, record" }],
    model: [
      "Ares built the direct-lending category and still owns its commanding heights. Ares Capital Corporation (ARCC), the largest business development company, anchors a credit complex of $406.9B (65% of firm AUM) that lends directly to sponsor-backed middle-market companies: the loans banks stopped making after 2008. Scale is self-reinforcing: sponsors call Ares first because it can underwrite $1B+ unitranche checks alone, and 3 decades of loan-by-loan performance data sharpen underwriting no newcomer can match.",
      "The model is management-fee compounding: raise long-dated or permanent funds, deploy, collect fees on $385B of fee-paying AUM, and let FRE (~$1.8B in 2025, up 30%) grow at a 41.7% margin. Performance fees are deliberately de-emphasized: European-style waterfalls delay them, and Wall Street rewards the steadier fee stream with a premium multiple. The 2025 GCP International acquisition bolted on data centers and industrial real estate across Japan, Southeast Asia, and Brazil, while Aspida, its annuity arm, gives Ares an Athene-style spread engine in miniature."
    ],
    customers: [
      { who: "Institutional LPs", note: "pensions, insurers, and sovereigns across hundreds of funds and SMAs" },
      { who: "Sponsor-backed borrowers", note: "PE-owned middle-market companies paying floating-rate spreads for speed and certainty" },
      { who: "Private wealth", note: "non-traded BDCs and semi-liquid funds distributed through wirehouses" },
      { who: "Aspida policyholders", note: "annuity buyers feeding the insurance spread engine" }
    ],
    suppliers: [
      { who: "PE sponsors", note: "hundreds of relationships generate proprietary deal flow" },
      { who: "Banks", note: "subscription lines, leverage facilities, and CLO warehouses" },
      { who: "Acquired platforms", note: "GCP (data centers, logistics), Landmark (secondaries), Aspida (insurance)" },
      { who: "Rating agencies & fund lawyers", note: "the plumbing of BDCs, CLOs, and fund finance" }
    ],
    capitalIn: [
      { source: "Fund commitments", note: "record $113B raised in 2025" },
      { source: "Wealth channel", note: "non-traded BDC and semi-liquid inflows" },
      { source: "Aspida premiums", note: "annuity and reinsurance flows" },
      { source: "Balance sheet debt", note: "investment-grade holdco issuance" }
    ],
    capitalOut: [
      { use: "Deployment", note: "over $100B a year into loans and real assets" },
      { use: "Dividends", note: "raised 20% for 2026; tied to FRE growth" },
      { use: "M&A", note: "GCP International closed 2025; Landmark and Aspida before it" },
      { use: "GP commitments", note: "skin in the game alongside LPs in every fund" }
    ],
    revenueMix: [
      { label: "Credit", pct: 65 }, { label: "Real assets", pct: 22 }, { label: "Secondaries", pct: 7 }, { label: "Private equity + other", pct: 6 }
    ],
    moat: "Incumbency in direct lending: the largest BDC, 3 decades of sponsor relationships and proprietary credit data, and the scale to lead $1B+ deals alone while newcomers wait in line.",
    risks: "A default cycle among leveraged middle-market borrowers would hit credit marks, PIK accrual, and the fundraising flywheel at once, while the wall of money entering private credit compresses the spreads the whole model is priced on.",
    competitors: ["apollo", "blue-owl", "Blackstone Credit", "HPS (BlackRock)", "Golub Capital, Sixth Street"]
  },

  "blue-owl": {
    id: "blue-owl", ticker: "OWL", mcap: 14.4, name: "Blue Owl", full: "Blue Owl Capital Inc.", country: "US",
    industries: ["private-credit", "asset-management"], role: "Permanent-capital direct lender", founded: 2021, hq: "New York, USA",
    stats: [{ label: "AUM", value: "$307B", note: "Dec 2025" }, { label: "Fee-paying AUM", value: "$187.7B", note: "Dec 2025" }, { label: "Permanent capital", value: "~85%", note: "of 2025 management fees" }, { label: "New commitments", value: "$56B", note: "2025; $17B in Q4" }],
    model: [
      "Blue Owl, born in 2021 from the merger of Owl Rock (direct lending, founded 2016) and Dyal Capital (GP stakes), runs 3 platforms: Credit ($152.1B AUM: direct lending with a software-lending specialty), Real Assets ($74.7B: triple net lease, real estate credit, and data centers), and GP Strategic Capital ($68.8B: minority stakes in PE firms, a franchise Dyal effectively invented). Nearly everything sits in permanent vehicles: listed and non-traded BDCs, REITs, and decade-plus funds that generated ~85% of 2025 management fees.",
      "The economics are almost pure fee stream: recurring management fees on capital that cannot leave quickly, sold hardest through private wealth, the firm's signature channel. The 2025 headline was data centers: Blue Owl and Meta closed a $27B financing for the Hyperion campus in Louisiana (the largest private credit deal ever, with ~$7B of Blue Owl JV cash), stacked on the IPI Partners acquisition. The 2026 stress test arrived fast: elevated redemption requests in its non-traded funds and softer tech-lending marks knocked the stock ~68% off its peak, making wealth-channel confidence the variable to watch."
    ],
    customers: [
      { who: "Private wealth investors", note: "non-traded BDCs and REITs via wirehouses and RIAs: the signature channel" },
      { who: "Institutional LPs", note: "pensions and sovereigns in GP stakes and net lease funds locked for a decade plus" },
      { who: "Tech & sponsor-backed borrowers", note: "software direct lending (OTF, OTIC) is the house specialty" },
      { who: "PE firms & hyperscalers", note: "GP stake sales (Dyal) and data center financings (Meta's $27B Hyperion)" }
    ],
    suppliers: [
      { who: "PE sponsors", note: "deal flow for both direct lending and GP stakes" },
      { who: "Distribution partners", note: "wirehouses, private banks, and RIA platforms move the product" },
      { who: "Banks", note: "Morgan Stanley arranged the Hyperion SPV debt; leverage lines fund the BDCs" },
      { who: "Digital infrastructure operators", note: "IPI Partners (acquired 2025) and developer JVs build the data centers" }
    ],
    capitalIn: [
      { source: "Wealth-channel inflows", note: "$56B of new commitments in 2025; redemption-tested in 2026" },
      { source: "Institutional commitments", note: "GP stakes and net lease funds with long lockups" },
      { source: "BDC leverage & securitizations", note: "listed OBDC debt and CLOs on private loans" },
      { source: "Insurance mandates", note: "Kuvare Asset Management deal (2024) added insurance AUM" }
    ],
    capitalOut: [
      { use: "Loans to companies", note: "senior secured, floating rate, tech-heavy" },
      { use: "Data center equity & construction", note: "~$7B into the Meta Hyperion JV alone" },
      { use: "Net lease real estate", note: "sale-leasebacks of corporate properties" },
      { use: "Dividends", note: "nearly all distributable earnings are paid out" }
    ],
    revenueMix: [
      { label: "Credit", pct: 52 }, { label: "Real assets", pct: 25 }, { label: "GP strategic capital", pct: 23 }
    ],
    moat: "Permanent capital (~85% of management fees) plus the deepest private-wealth distribution in private credit and Dyal's near-monopoly on GP minority stakes: fees that recur regardless of exits.",
    risks: "The 2026 redemption wave is the live test: exit requests near 40% of shares in its tech-income fund against 5% quarterly caps, a $490M OTF markdown in Q1 2026, rising PIK income, and a stock ~68% below peak that chills the wealth fundraising the model depends on.",
    competitors: ["apollo", "ares", "Blackstone (BCRED)", "HPS (BlackRock)", "Sixth Street, Golub Capital"]
  }

});
