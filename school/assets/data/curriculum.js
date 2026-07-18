/* Capital Atlas - curriculum manifest.
 * Single source of truth for the module catalog. The app shell (atlas.js)
 * builds navigation, progress display, and prev/next links from this file.
 * Pages never hand-code the module list.
 */
window.ATLAS_CURRICULUM = {
  siteName: "Capital Atlas",
  tagline: "An interactive atlas of the finance industry",
  modules: [
    {
      id: "foundations",
      num: "01",
      title: "Foundations of Finance",
      short: "Foundations",
      tagline: "What finance is for: moving capital through time, across people, and around risk.",
      level: "Primer",
      minutes: 45,
      accent: "#2a78d6",
      file: "modules/foundations.html",
      summary: "The financial system map, the instruments that move money, time value of money, and the risk-return tradeoff that prices everything."
    },
    {
      id: "value-chain",
      num: "02",
      title: "The Industry Value Chain",
      short: "Value Chain",
      tagline: "Who does what, who pays whom, and how the whole machine fits together.",
      level: "Primer",
      minutes: 50,
      accent: "#1baf7a",
      file: "modules/value-chain.html",
      summary: "Capital sources, intermediaries, and users of capital. Sell-side vs buy-side, market infrastructure, and the fee flows that fund every player."
    },
    {
      id: "accounting",
      num: "03",
      title: "Accounting & the Three Statements",
      short: "Accounting",
      tagline: "The language of business: income statement, balance sheet, cash flow, and how they link.",
      level: "Core",
      minutes: 60,
      accent: "#eda100",
      file: "modules/accounting.html",
      summary: "How the three statements are built, how a single change flows through all of them, key ratios, and working capital mechanics."
    },
    {
      id: "valuation",
      num: "04",
      title: "Valuation",
      short: "Valuation",
      tagline: "What a business is worth, and the three lenses professionals use to answer it.",
      level: "Core",
      minutes: 75,
      accent: "#4a3aa7",
      file: "modules/valuation.html",
      summary: "Intrinsic vs relative value. DCF from first principles with a live sandbox, trading comps, precedent transactions, and the football field."
    },
    {
      id: "ma-deals",
      num: "05",
      title: "M&A & the Deal Process",
      short: "M&A",
      tagline: "How companies are bought and sold, from first pitch to closing dinner.",
      level: "Advanced",
      minutes: 60,
      accent: "#e34948",
      file: "modules/ma-deals.html",
      summary: "The sell-side process step by step, buyer types and synergies, accretion / dilution math, and how deals are structured and negotiated."
    },
    {
      id: "lbo-pe",
      num: "06",
      title: "Private Equity & LBOs",
      short: "PE & LBOs",
      tagline: "Buying companies with borrowed money, and why the math can work spectacularly.",
      level: "Advanced",
      minutes: 60,
      accent: "#eb6834",
      file: "modules/lbo-pe.html",
      summary: "LBO mechanics with a live simulator, returns attribution, fund structures and the GP / LP relationship, and the PE value creation playbook."
    },
    {
      id: "buy-side",
      num: "07",
      title: "Asset Management & Hedge Funds",
      short: "Buy-Side",
      tagline: "The institutions that own the market: who they are and how they invest.",
      level: "Core",
      minutes: 45,
      accent: "#008300",
      file: "modules/buy-side.html",
      summary: "Mutual funds, ETFs, pensions, endowments, sovereign wealth funds, and hedge fund strategies from long / short to global macro."
    },
    {
      id: "capital-markets",
      num: "08",
      title: "Capital Markets",
      short: "Capital Markets",
      tagline: "Where companies meet investors: equity, debt, and everything derived from them.",
      level: "Core",
      minutes: 60,
      accent: "#e87ba4",
      file: "modules/capital-markets.html",
      summary: "The IPO process, bond math and the price-yield seesaw, leveraged finance, a derivatives primer, and how trading actually happens."
    },
    {
      id: "careers",
      num: "09",
      title: "Careers & Breaking In",
      short: "Careers",
      tagline: "The role map, the money, the hours, and how to get hired.",
      level: "Primer",
      minutes: 40,
      accent: "#256abf",
      file: "modules/careers.html",
      summary: "Every seat in the industry compared, compensation ladders, recruiting timelines, and a technical interview prep bank."
    }
  ],
  paths: [
    {
      id: "explorer",
      title: "Explorer",
      audience: "New to finance",
      blurb: "Start from zero. Understand what the industry does, who the players are, and how to read a company.",
      modules: ["foundations", "value-chain", "accounting", "careers"]
    },
    {
      id: "analyst",
      title: "Analyst",
      audience: "Building technical skills",
      blurb: "The core toolkit: statements, valuation, markets, and the institutions that move them.",
      modules: ["accounting", "valuation", "capital-markets", "buy-side"]
    },
    {
      id: "dealmaker",
      title: "Dealmaker",
      audience: "Headed for IB / PE",
      blurb: "Transaction depth: valuation mastery, the M&A process, and leveraged buyouts end to end.",
      modules: ["valuation", "ma-deals", "lbo-pe"]
    }
  ]
};
