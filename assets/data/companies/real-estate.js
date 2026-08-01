/* Industry Atlas - company profiles: real-estate.
 * Same schema as companies.js plus "mcap" (approx market cap, $B, latest known).
 * Figures are approximate public facts; vintages noted per stat. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "prologis": {
    id: "prologis", ticker: "PLD", mcap: 133, name: "Prologis", full: "Prologis, Inc.", country: "US",
    industries: ["real-estate"], role: "Logistics real estate #1", founded: 1983, hq: "San Francisco, USA",
    stats: [{ label: "Revenue", value: "$9.8B", note: "2025" }, { label: "Portfolio", value: "~1.3B sq ft", note: "~5,900 buildings, 20 countries" }, { label: "AUM", value: "~$230B", note: "owned + managed, 2025" }, { label: "Customers", value: "~6,500", note: "top 10 = only ~14% of rent" }],
    model: [
      "Prologis owns the boxes the consumption economy flows through: roughly 1.3B square feet of warehouses leased to everyone from Amazon to the local 3PL. Revenue = occupied square feet x rent per foot, and the trick is location: infill land near big-city consumers is nearly impossible to entitle, so as decade-old leases roll to market, rents reset sharply higher with almost no new capital required.",
      "Two engines sit on top of rent. Development converts a vast land bank into new buildings at healthy creation margins, and Strategic Capital manages co-investment vehicles for institutional partners, a capital-light fee stream (~7% of 2025 revenue) that lets Prologis control far more real estate than its own balance sheet holds. Newer bets bolt onto the roofs and the grid: one of the largest US onsite solar programs, EV fleet charging, and converting select powered sites into data centers."
    ],
    customers: [
      { who: "Amazon", note: "largest tenant at ~5% of net effective rent; e-commerce anchor", share: "~5%" },
      { who: "Home Depot, FedEx, DHL, UPS", note: "retail and parcel majors, each 1% to 2% of rent" },
      { who: "3PLs and e-commerce operators", note: "thousands of transport and fulfillment tenants fill the roll" },
      { who: "Institutional LPs", note: "pensions and sovereigns pay Strategic Capital fees and promotes" }
    ],
    suppliers: [
      { who: "General contractors", note: "the development pipeline is built, not bought" },
      { who: "Land sellers & municipalities", note: "entitled infill land is the scarce input" },
      { who: "Steel, concrete, roofing makers", note: "build-cost inflation flows through development yields" },
      { who: "Utilities & solar vendors", note: "power access now gates data center conversions" },
      { who: "Leasing brokers (CBRE, JLL)", note: "third-party brokers source most tenants" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "contractual rents from ~6,500 customers" },
      { source: "Unsecured bond markets", note: "rare A-rated REIT; borrows cheaply in USD, EUR, JPY" },
      { source: "Strategic Capital partners", note: "institutional equity co-funds the ventures" },
      { source: "Asset recycling", note: "sales and contributions to ventures fund new starts" }
    ],
    capitalOut: [
      { use: "Development starts", note: "multi-$B per year, plus a land bank for the next decade" },
      { use: "Dividends ~$4B / year", note: "REIT rules require paying out most taxable income" },
      { use: "Acquisitions", note: "Duke Realty ($26B, 2022) shows the consolidation playbook" },
      { use: "Energy & data center capex", note: "solar, storage, and powered-shell conversions" }
    ],
    revenueMix: [
      { label: "Rental operations", pct: 92 }, { label: "Strategic capital fees", pct: 7 }, { label: "Development & other", pct: 1 }
    ],
    moat: "Irreplaceable infill land near consumers plus the sector's lowest cost of capital: scale, an A-rated balance sheet, and demand data from 1.3B square feet compound into pricing power no rival can assemble.",
    risks: "Post-pandemic demand digestion (vacancy up, market rents soft in 2024 to 2025), rate-driven swings in property values, and Southern California concentration.",
    competitors: ["GLP", "Goodman Group", "Blackstone (Link Logistics)", "Segro", "EastGroup Properties"]
  },

  "american-tower": {
    id: "american-tower", ticker: "AMT", mcap: 77, name: "American Tower", full: "American Tower Corporation", country: "US",
    industries: ["real-estate", "telecom"], role: "Global tower REIT #1", founded: 1995, hq: "Boston, USA",
    stats: [{ label: "Revenue", value: "$10.6B", note: "2025" }, { label: "Sites", value: "~149,000", note: "~25 countries, YE2024" }, { label: "Top 3 US carriers", value: "~49%", note: "of property revenue, 2025" }, { label: "Data centers", value: "28", note: "CoreSite, ~$1B revenue" }],
    model: [
      "American Tower rents vertical real estate: steel towers whose tenants are wireless carriers bolting antennas on under 5 to 10 year non-cancellable leases with built-in escalators (~3% fixed in the US, CPI-linked abroad). The economics are tenancy-driven: the first tenant covers the tower, the second and third drop through at 90%+ incremental margins, and churn stays minimal because relocating a network is costlier than paying rent.",
      "Roughly half of revenue is US towers riding 5G densification by T-Mobile, AT&T, and Verizon; the rest spans about 100,000 international sites across Latin America, Africa, and Europe, plus CoreSite, the $10.1B 2021 acquisition that added interconnection data centers now leasing record space into AI demand. Recent strategy is discipline: the India unit was sold (~$2.5B, 2024) and capital steered toward developed markets and data centers."
    ],
    customers: [
      { who: "T-Mobile", note: "largest tenant; Sprint-merger churn now largely digested", share: "~18%" },
      { who: "AT&T and Verizon", note: "~17% and ~14% of property revenue respectively", share: "~31%" },
      { who: "International carriers", note: "Telefonica, Airtel, Vodafone anchor overseas towers" },
      { who: "Clouds & enterprises", note: "CoreSite interconnection and colocation tenants" }
    ],
    suppliers: [
      { who: "Ground-lease landlords", note: "much of the land under the towers is leased, a quiet cost line" },
      { who: "Tower fabricators & build crews", note: "steel and construction for new sites" },
      { who: "Power & fuel providers", note: "grid power and diesel across Africa and Latin America" },
      { who: "Data center equipment vendors", note: "cooling and switchgear for CoreSite expansion" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$5B a year of contracted, escalating rent" },
      { source: "Investment-grade bond markets", note: "a large debt stack refinanced continuously" },
      { source: "Asset sales", note: "India exit (~$2.5B, 2024) recycled capital out of high-churn markets" },
      { source: "Equity (historically)", note: "issued for the big M&A waves, not needed for run-rate" }
    ],
    capitalOut: [
      { use: "Dividends ~$3B / year", note: "REIT payout; growth resumed after a 2024 pause" },
      { use: "Capex ~$1.7B / year", note: "new tower builds plus CoreSite development" },
      { use: "Debt service", note: "higher rates bite a leveraged balance sheet" },
      { use: "M&A (episodic)", note: "CoreSite ($10.1B, 2021), Telxius towers (2021) built the footprint" }
    ],
    revenueMix: [
      { label: "US & Canada towers", pct: 49 }, { label: "International towers", pct: 37 }, { label: "Data centers", pct: 10 }, { label: "Services", pct: 4 }
    ],
    moat: "Zoning makes towers nearly impossible to replicate and leases make them nearly impossible to leave: exclusive locations plus contractual escalators equal a compounding annuity.",
    risks: "Tenant concentration (3 US carriers ~49% of property revenue), emerging-market FX and fuel costs, and heavy leverage in a higher-rate world.",
    competitors: ["Crown Castle", "SBA Communications", "Cellnex", "IHS Towers", "Equinix (data centers)"]
  },

  "cbre": {
    id: "cbre", ticker: "CBRE", mcap: 41, name: "CBRE Group", full: "CBRE Group, Inc.", country: "US",
    industries: ["real-estate"], role: "CRE services #1", founded: 1906, hq: "Dallas, USA",
    stats: [{ label: "Revenue", value: "$40.6B", note: "2025, +13%" }, { label: "Employees", value: "155,000+", note: "incl. Turner & Townsend" }, { label: "Investment AUM", value: "$155B", note: "YE2025" }, { label: "Core EBITDA", value: "$3.3B", note: "2025" }],
    model: [
      "CBRE is the picks and shovels of commercial real estate: it sells services on other people's buildings rather than owning them. The world's largest brokerage (leasing and investment sales) sits beside the world's largest outsourced facilities platform, so revenue splits into transactional fees that swing with the property cycle and multi-year contractual streams that do not.",
      "A decade of strategy has tilted the mix toward resilient revenue: Building Operations & Experience plus Turner & Townsend project management now dwarf brokerage, and both grew double digits in 2025 while capital markets recovered from the 2023 to 2024 rate shock. Real Estate Investments adds a $155B AUM asset manager and the Trammell Crow development arm: tiny in revenue, meaningful in earnings torque. The margin math is service-business math: low single-digit operating margins on facilities work, fat margins on brokerage, and buybacks doing the shareholder-return lifting."
    ],
    customers: [
      { who: "Corporate occupiers", note: "Fortune 500 firms outsource facilities and workplace under multi-year contracts" },
      { who: "Institutional landlords & investors", note: "leasing, investment sales, valuation, property management" },
      { who: "Data center & infrastructure builders", note: "Turner & Townsend runs hyperscale construction programs" },
      { who: "Fund LPs", note: "pensions and sovereigns invested across $155B of AUM" }
    ],
    suppliers: [
      { who: "Skilled labor", note: "brokers, engineers, technicians: talent is the raw material" },
      { who: "Subcontractor networks", note: "janitorial, HVAC, security delivered under facilities contracts" },
      { who: "Data & software vendors", note: "market data and proptech tooling at global scale" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$1.7B free cash flow in 2025" },
      { source: "Investment-grade debt", note: "modest leverage: ~1.2x net debt to core EBITDA" },
      { source: "Co-investment returns", note: "GP stakes in REI funds and Trammell Crow projects" }
    ],
    capitalOut: [
      { use: "Share buybacks", note: "the main return channel; CBRE pays no dividend" },
      { use: "M&A", note: "Turner & Townsend control, J&J Worldwide Services ($800M, 2024)" },
      { use: "Co-investment", note: "seed capital into developments and managed funds" },
      { use: "Talent & technology", note: "producer recruiting and platform tech spend" }
    ],
    revenueMix: [
      { label: "Building Ops & Experience", pct: 57 }, { label: "Advisory (brokerage)", pct: 22 }, { label: "Project Management", pct: 19 }, { label: "Real Estate Investments", pct: 2 }
    ],
    moat: "Scale and brand beget data and cross-sell: the biggest broker sees the most deals, wins the biggest outsourcing mandates, and spreads fixed technology spend across $40B of revenue.",
    risks: "Transactional revenue swings with rates and deal volume, facilities margins are structurally thin, and the assets ride the elevator home every night.",
    competitors: ["JLL", "Cushman & Wakefield", "Colliers", "Savills", "Newmark"]
  }

});
