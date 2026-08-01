/* Industry Atlas - company profiles: retail.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Sources: company 10-Ks and earnings releases (Walmart FY2026 ended Jan 2026,
 * Costco FY2025 ended Aug 2025, Home Depot FY2025 ended Feb 2026); market caps
 * approximate as of mid-2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "walmart": {
    id: "walmart", ticker: "WMT", mcap: 885, name: "Walmart", full: "Walmart Inc.", country: "US",
    industries: ["retail"], role: "World's largest retailer", founded: 1962, hq: "Bentonville, USA",
    stats: [{ label: "Revenue", value: "$713B", note: "FY2026 (ended Jan 2026)" }, { label: "Stores", value: "10,750+", note: "19 countries" }, { label: "E-commerce", value: "$150B", note: "up 24% in FY2026" }, { label: "Advertising", value: "$6.4B", note: "up 46% in FY2026" }],
    model: [
      "Walmart sells more than any company on Earth: $713B in FY2026, roughly $1.9B of sales every day, to about 270M customers a week across 10,750+ stores in 19 countries. The engine is Everyday Low Prices funded by everyday low costs: buy on the best terms in retail (Walmart is the largest single customer of much of Big CPG), run the leanest supply chain in the business, and hand the savings back as prices rivals struggle to match. Grocery, roughly 60% of Walmart US sales, does the heavy lifting: food brings households in weekly, and everything else rides along.",
      "The new story is margin mix. The stores earn ~4% operating margins, but the flywheel now spins higher-margin businesses on top: a $150B e-commerce operation, a $6.4B advertising arm (Walmart Connect plus the Vizio smart-TV deal), marketplace seller fees, and $4.4B of membership income from Walmart+ and Sam's Club. The stores double as fulfillment nodes: roughly 90% of Americans live within 10 miles of a Walmart, which turns America's biggest store network into its densest delivery network."
    ],
    customers: [
      { who: "~270M weekly shoppers", note: "value-focused households; grocery drives the trip frequency" },
      { who: "Higher-income households", note: "the fastest-growing cohort; $100K+ earners trading in for price and convenience" },
      { who: "Marketplace sellers & advertisers", note: "pay commissions, fulfillment, and ad dollars to reach the traffic; the margin engine" },
      { who: "Sam's Club members", note: "the warehouse-club arm; $93B of US net sales in FY2026", share: "~13%" }
    ],
    suppliers: [
      { who: "P&G, Nestle, PepsiCo, Unilever, Coca-Cola", note: "Walmart is the largest customer for much of Big CPG (~15% of P&G's sales)" },
      { who: "~100,000 suppliers worldwide", note: "general merchandise sourced heavily from China, Mexico, India" },
      { who: "US farmers & food processors", note: "Tyson-class protein, produce, and dairy networks" },
      { who: "Its own logistics machine", note: "one of America's largest private truck fleets, automated DCs, Spark gig drivers" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$40B a year funds the whole system (FY2026)" },
      { source: "Vendor float", note: "fast-turning inventory often sells before supplier invoices come due" },
      { source: "Debt markets", note: "AA-rated borrower; modest leverage for its size" }
    ],
    capitalOut: [
      { use: "Capex ~$24B / year", note: "supply chain automation, store remodels, e-commerce" },
      { use: "Dividends", note: "50+ consecutive years of increases" },
      { use: "Buybacks", note: "steady multi-$B repurchases" },
      { use: "Acquisitions & bets", note: "Vizio ($2.3B, 2024) for ads; Flipkart and PhonePe in India" }
    ],
    revenueMix: [
      { label: "Walmart US", pct: 68 }, { label: "International", pct: 18 }, { label: "Sam's Club US", pct: 13 }, { label: "Membership & other income", pct: 1 }
    ],
    moat: "Scale nobody can replicate: the best procurement terms in retail, a logistics network refined over 60 years, and 90% of Americans within 10 miles of a store. EDLP is a promise that competitors lose money trying to keep.",
    risks: "~4% operating margins leave no room for error; Amazon on convenience, Costco and Aldi on price; tariff and import-cost exposure; wage inflation across ~2.1M associates.",
    competitors: ["Amazon", "costco", "Target", "Kroger", "Aldi"]
  },

  "costco": {
    id: "costco", ticker: "COST", mcap: 412, name: "Costco", full: "Costco Wholesale Corporation", country: "US",
    industries: ["retail"], role: "Warehouse club leader", founded: 1983, hq: "Issaquah, USA",
    stats: [{ label: "Revenue", value: "$275B", note: "FY2025 (ended Aug 2025), incl. fees" }, { label: "Warehouses", value: "~914", note: "worldwide" }, { label: "Paid members", value: "81M", note: "~90% renewal rate" }, { label: "Membership fees", value: "$5.4B", note: "the majority of operating profit" }],
    model: [
      "Costco is a membership business wearing a retailer's clothes. It sells goods at close to cost (gross margin ~11%, with a self-imposed markup cap around 14%) and makes its real profit on the $65 to $130 it charges 81M households a year for the right to shop: $5.4B of fee income in FY2025 was the majority of operating profit, renewed at ~90%. The warehouse itself is a discipline machine: ~4,000 SKUs versus 30,000+ in a supermarket, goods sold off pallets, near-zero marketing, and volume per item no rival approaches.",
      "The model compounds through trust: because markups are capped, members assume every price is fair, which drives the volume that extracts the best supplier terms in retail, which funds lower prices still. Kirkland Signature, the private label, approaches 1/3 of sales, large enough to rank among the world's biggest consumer brands on its own. Inventory turns so fast that much of it sells before supplier invoices come due: in effect, the vendors finance the warehouses."
    ],
    customers: [
      { who: "81M paid member households", note: "~145M cardholders (FY2025); suburban, higher-income skew" },
      { who: "Executive members", note: "38.7M pay double the fee for 2% back and drive most of the volume", share: "~73% of sales" },
      { who: "Small businesses", note: "restaurants, resellers, and convenience stores buying in bulk" },
      { who: "E-commerce shoppers", note: "ecom comps up 15.6% in FY2025; Instacart extends same-day reach" }
    ],
    suppliers: [
      { who: "CPG majors & Kirkland co-manufacturers", note: "name brands quietly fill Kirkland packaging (Duracell makes the batteries)" },
      { who: "Food producers & proteins", note: "deep fresh supply chains, including its own Nebraska poultry plant for rotisserie chickens" },
      { who: "Asia general-merchandise sourcing", note: "electronics, apparel, seasonal goods" },
      { who: "Fuel suppliers", note: "gas stations run as a member traffic driver" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$13B a year" },
      { source: "Membership fees", note: "$5.4B of recurring revenue, collected in advance" },
      { source: "Vendor float", note: "inventory often sells before payment is due: negative working capital" },
      { source: "Minimal debt", note: "fortress balance sheet, A+ rated" }
    ],
    capitalOut: [
      { use: "Capex ~$5B / year", note: "25 to 30 new warehouses annually" },
      { use: "Dividends + specials", note: "periodic special dividends ($15/share in Jan 2024)" },
      { use: "Wages", note: "industry-leading pay treated as an investment, not a cost" },
      { use: "Modest buybacks", note: "small, steady repurchases" }
    ],
    revenueMix: [
      { label: "Grocery (foods, sundries, fresh)", pct: 54 }, { label: "General merchandise", pct: 26 }, { label: "Gas, pharmacy & ancillary", pct: 18 }, { label: "Membership fees", pct: 2 }
    ],
    moat: "The membership flywheel: fee income lets Costco price at cost, pricing at cost builds trust, trust drives ~90% renewals and volume, and volume extracts supplier terms nobody else gets. Kirkland converts the buying power into a brand.",
    risks: "Valuation priced for perfection (about 50x earnings); razor-thin retail margins amplify any mistake; tariffs on imported goods; a maturing US warehouse footprint; dependence on periodic fee increases.",
    competitors: ["walmart", "Sam's Club (Walmart)", "BJ's Wholesale", "Amazon"]
  },

  "home-depot": {
    id: "home-depot", ticker: "HD", mcap: 343, name: "Home Depot", full: "The Home Depot, Inc.", country: "US",
    industries: ["retail"], role: "Home improvement #1", founded: 1978, hq: "Atlanta, USA",
    stats: [{ label: "Revenue", value: "$164.7B", note: "FY2025 (ended Feb 2026)" }, { label: "Stores", value: "~2,350", note: "US, Canada, Mexico" }, { label: "Pro share", value: "~50%", note: "of sales, from ~10% of customers" }, { label: "SRS deal", value: "$18.25B", note: "2024, largest in company history" }],
    model: [
      "Home Depot is the world's largest home improvement retailer: $164.7B of sales in FY2025 through ~2,350 big-box stores across North America. The customer split defines the economics: DIY homeowners are about half of sales, while pro contractors, roughly 10% of customers, are the other half and shop weekly with far bigger baskets. The store is a warehouse that sells: lumber, building materials, tools, and paint stacked to the rafters, with exclusive brands (Behr paint, Ryobi tools) no rival can carry.",
      "The strategic bet is the pro. HD Supply (reacquired in 2020) covers maintenance and repair; SRS Distribution ($18.25B, 2024) plus GMS ($5.5B, 2025) push into specialty trade distribution: roofing, drywall, landscape supply, jobsite delivery, and trade credit. That builds a parallel distribution business serving the \"complex pro,\" expands the addressable pro market by roughly $50B, and hedges the retail box against a housing cycle frozen by mortgage lock-in (comps rose just 0.3% in FY2025)."
    ],
    customers: [
      { who: "Pro contractors & trades", note: "~10% of customers, half of sales; weekly, high-ticket buyers", share: "~50%" },
      { who: "DIY homeowners", note: "weekend projects plus nondiscretionary repair and maintenance" },
      { who: "Complex pros via SRS / HD Supply", note: "roofers, remodelers, builders on jobsite delivery and trade credit" },
      { who: "Institutional & MRO buyers", note: "apartments, hospitality, facilities management" }
    ],
    suppliers: [
      { who: "TTI (Techtronic Industries)", note: "Ryobi and Milwaukee power tools; Home Depot is TTI's dominant channel" },
      { who: "Masco (Behr)", note: "exclusive paint brand since 1978" },
      { who: "Stanley Black & Decker, Owens Corning, Georgia-Pacific", note: "tools and building products at national scale" },
      { who: "Thousands of vendors + import sourcing", note: "house brands Husky, HDX, Glacier Bay" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$20B a year" },
      { source: "Bond markets", note: "SRS was debt-funded; investment-grade but leverage elevated" },
      { source: "No equity issuance", note: "decades of buybacks shrink the share count instead" }
    ],
    capitalOut: [
      { use: "Dividends ~$9B / year", note: "targets ~55% of earnings; raised again in Feb 2026" },
      { use: "Buybacks", note: "historically massive; paused after SRS, since resumed" },
      { use: "Capex ~$3.5B", note: "new stores, supply chain, interconnected retail" },
      { use: "M&A", note: "SRS $18.25B (2024), GMS $5.5B (2025), pro-distribution bolt-ons" }
    ],
    revenueMix: [
      { label: "Building materials", pct: 37 }, { label: "Hardlines (tools, hardware)", pct: 32 }, { label: "Decor (paint, flooring, kitchens)", pct: 31 }
    ],
    moat: "A scale duopoly with Lowe's, but with the pro locked in: store density plus jobsite distribution, exclusive brands, and trade credit make switching costly for the customer who matters most.",
    risks: "Housing sensitivity: high mortgage rates freeze turnover and big-ticket remodels; SRS/GMS integration and debt load; Amazon in tools and fixtures; tariff exposure on imported goods.",
    competitors: ["Lowe's", "Amazon", "ABC Supply, Beacon (pro distribution)", "Menards"]
  }

});
