/* Industry Atlas - company profiles: food-beverage.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Sources: company annual reports FY2024/FY2025, stockanalysis.com quotes (Jul 2026),
 * Wikipedia company pages (accessed Aug 2026). Market caps approximate, Jul 2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "nestle": {
    id: "nestle", ticker: "NSRGY", mcap: 258, name: "Nestle", full: "Nestle S.A.", country: "CH",
    industries: ["food-beverage"], role: "World's largest food company", founded: 1866, hq: "Vevey, Switzerland",
    stats: [
      { label: "Revenue", value: "CHF 89.5B", note: "2025 (~$110B)" },
      { label: "Billionaire brands", value: "29", note: "each with CHF 1B+ annual sales" },
      { label: "Countries sold", value: "185+", note: "~340 factories worldwide" },
      { label: "Employees", value: "~270,000", note: "2025" }
    ],
    model: [
      "Nestle is a portfolio machine: roughly 2,000 brands spanning coffee (Nescafe, Nespresso, plus a global Starbucks license), pet care (Purina), infant nutrition (Gerber), confectionery (KitKat), and health science, pushed through distribution that reaches 185+ countries. The formula is buy or build a brand, plug it into local-for-local manufacturing (~340 factories), then premiumize: a Nespresso pod sells coffee at a multiple of the commodity price. Coffee and pet care alone are roughly half of sales and more of the profit pool.",
      "The economics are steady rather than spectacular: ~17% underlying operating margin on CHF 89.5B of 2025 sales, with scale purchasing (it is among the world's largest buyers of coffee, cocoa, and milk) defending gross margin against commodity swings. The machine has sputtered lately: 3 CEOs between 2024 and 2025, sluggish organic growth, and a restructuring announced in late 2025 that cuts 16,000 jobs, carves the water unit into a standalone entity, and puts laggard brands under review."
    ],
    customers: [
      { who: "Walmart and global grocery majors", note: "largest retail customer; Carrefour, Tesco, Costco, and discounters follow" },
      { who: "E-commerce platforms", note: "Amazon plus direct channels; ~18% of group sales online (2024)" },
      { who: "Nespresso direct-to-consumer", note: "boutiques, subscriptions, and office coffee, a rare owned channel" },
      { who: "Out-of-home operators", note: "Nestle Professional supplies hotels, restaurants, caterers" }
    ],
    suppliers: [
      { who: "Coffee and cocoa farmers", note: "sources from 500,000+ farmers; buys ~10% of the world's coffee crop" },
      { who: "Dairy farmers", note: "one of the world's largest milk buyers, district-level collection networks" },
      { who: "Grain and ag commodity traders", note: "wheat, oats, sugar, vegetable oils at global scale" },
      { who: "Packaging groups", note: "Amcor, Tetra Pak class suppliers for plastics, cartons, aluminum" },
      { who: "Co-manufacturers and logistics", note: "third-party capacity flexes seasonal and regional demand" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "CHF 10B+ free cash flow a year funds the model" },
      { source: "Bond markets", note: "one of Europe's largest corporate issuers; cheap, laddered debt" },
      { source: "L'Oreal stake", note: "a ~20% holding worth tens of $B, a strategic reserve trimmed when needed" },
      { source: "Disposals", note: "divesting underperformers (US waters 2021, brand reviews ongoing)" }
    ],
    capitalOut: [
      { use: "Dividends CHF ~8B / year", note: "raised annually for ~30 consecutive years" },
      { use: "Buybacks", note: "recurring programs, throttled back in 2024 to 2025 to protect the balance sheet" },
      { use: "Capex ~4% to 5% of sales", note: "coffee and pet care capacity leads" },
      { use: "Bolt-on M&A and restructuring", note: "Starbucks license ($7.2B, 2018); CHF 3B cost program to 2027" }
    ],
    revenueMix: [
      { label: "Coffee & beverages", pct: 28 }, { label: "PetCare", pct: 21 }, { label: "Nutrition & health science", pct: 16 }, { label: "Food, dairy, confectionery, water", pct: 35 }
    ],
    moat: "Unmatched breadth: the widest brand portfolio in food, emerging-market distribution built over a century, and raw-material buying power no rival matches. No single brand is the moat; the aggregation is.",
    risks: "Management churn (3 CEOs in 2 years) and activist scrutiny; weak organic growth; GLP-1 and health-regulation pressure on processed food; cocoa and coffee cost inflation; strong Swiss franc versus emerging-market revenues.",
    competitors: ["unilever", "danone", "mondelez", "Mars (private)", "coca-cola", "pepsico"]
  },

  "coca-cola": {
    id: "coca-cola", ticker: "KO", mcap: 377, name: "Coca-Cola", full: "The Coca-Cola Company", country: "US",
    industries: ["food-beverage"], role: "Global beverage brand #1", founded: 1892, hq: "Atlanta, USA",
    stats: [
      { label: "Revenue", value: "$47.9B", note: "2025" },
      { label: "Servings", value: "2.2B / day", note: "200+ countries and territories" },
      { label: "Operating margin", value: "~30%", note: "comparable, 2025" },
      { label: "Dividend streak", value: "63 years", note: "consecutive annual increases (2025)" }
    ],
    model: [
      "Coca-Cola sells concentrate, not (mostly) Coke: the company makes syrup and brand, then roughly 200 independent bottling partners do the capital-heavy work of manufacturing, bottling, and delivering finished drinks. That split is the whole business model. The bottlers carry the trucks and plants; Atlanta keeps the secret formula, the trademark, and ~30% operating margins on $47.9B of 2025 revenue serving 2.2B daily servings.",
      "The 2015 to 2017 refranchising wave sold company-owned bottling back to partners, deliberately shrinking revenue to expand margin, and the pivot to a total beverage company added coffee (Costa, $4.9B in 2019), dairy (fairlife), sports drinks (BodyArmor, $5.6B in 2021), and water and tea to the cola core. Roughly $5B a year of marketing feeds brands the bottler system then makes physically unavoidable, from hypermarkets to hand carts."
    ],
    customers: [
      { who: "Bottling partners", note: "CCEP, FEMSA, Arca Continental, HBC, Swire: they buy the concentrate; the true customer set" },
      { who: "Global retail", note: "Walmart to corner kiosks, reached via the bottler system" },
      { who: "McDonald's and foodservice", note: "fountain partnership running since 1955; largest restaurant account" },
      { who: "Direct ventures", note: "Costa stores, fairlife, and juice sold as finished product" }
    ],
    suppliers: [
      { who: "Sweetener producers", note: "corn syrup (ADM, Ingredion) in the US; cane and beet sugar elsewhere" },
      { who: "Can and bottle makers", note: "Ball, Crown, Ardagh aluminum; PET resin suppliers" },
      { who: "Citrus and coffee growers", note: "Florida and Brazil oranges for Minute Maid; green coffee for Costa" },
      { who: "Bottler supply chains", note: "CO2, closures, coolers, and vending equipment across partners" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$12B to $15B a year at concentrate margins" },
      { source: "Bond markets", note: "blue-chip issuer with decades of cheap access" },
      { source: "Refranchising proceeds", note: "selling bottling assets funded the asset-light shift" }
    ],
    capitalOut: [
      { use: "Dividends ~$8.5B / year", note: "the 63-year streak is the shareholder covenant" },
      { use: "Brand M&A", note: "Costa, BodyArmor, fairlife (earnout of ~$6B settled 2025)" },
      { use: "Marketing ~$5B / year", note: "the moat's maintenance capex" },
      { use: "Modest buybacks", note: "mainly offsetting dilution" }
    ],
    revenueMix: [
      { label: "North America", pct: 39 }, { label: "EMEA", pct: 17 }, { label: "Latin America", pct: 13 }, { label: "Asia Pacific + bottling & ventures", pct: 31 }
    ],
    moat: "The strongest brand in consumer goods compounded by the bottler system: a century of local capital invested by partners that no entrant can replicate, plus shelf and fountain placements locked in by relationships older than most competitors.",
    risks: "GLP-1 drugs and anti-sugar regulation (taxes now in 100+ jurisdictions); an IRS transfer-pricing dispute with ~$16B at stake, under appeal; FX exposure with most sales outside the US; category concentration in beverages.",
    competitors: ["pepsico", "Keurig Dr Pepper", "nestle", "danone", "Red Bull (private)"]
  },

  "pepsico": {
    id: "pepsico", ticker: "PEP", mcap: 190, name: "PepsiCo", full: "PepsiCo, Inc.", country: "US",
    industries: ["food-beverage"], role: "Snacks #1 + beverages #2", founded: 1965, hq: "Purchase, NY, USA",
    stats: [
      { label: "Revenue", value: "$93.9B", note: "2025" },
      { label: "Foods vs beverages", value: "~57% / 43%", note: "of revenue" },
      { label: "Walmart", value: "~14%", note: "of net revenue (2024 10-K)" },
      { label: "Dividend streak", value: "53 years", note: "consecutive annual increases (2025)" }
    ],
    model: [
      "PepsiCo is 2 engines under 1 roof: Frito-Lay, the world's dominant savory snacks business (Lay's, Doritos, Cheetos), and Pepsi beverages (Pepsi, Gatorade, Mountain Dew), plus Quaker foods. Snacks earn the margin; beverages buy the scale and the shelf. The 1965 merger logic still holds: chips and soda share trucks, retail relationships, and occasions, giving PepsiCo a better-together bargaining position no pure-play rival has. Revenue reached $93.9B in 2025, ~57% food.",
      "Unlike Coca-Cola, PepsiCo owns most of its North American bottling and runs direct-store-delivery with one of the largest private truck fleets in the US: heavier assets and lower margins than the concentrate model, but total control of the shelf, restocked by its own people. That control is now under review: Elliott Management took a ~$4B stake in 2025, pushing refranchising studies, plant closures, and a cut of nearly 20% of the US product lineup by early 2026."
    ],
    customers: [
      { who: "Walmart", note: "largest customer including Sam's Club", share: "~14%" },
      { who: "Grocery, club, dollar, convenience", note: "DSD reaches virtually every US food retailer weekly" },
      { who: "Foodservice", note: "restaurants, stadiums, campuses; fountain and snack contracts" },
      { who: "International bottlers and distributors", note: "franchise model in much of the world" }
    ],
    suppliers: [
      { who: "Potato, corn, and oat farmers", note: "Frito-Lay contract-grows potatoes at world scale; Quaker anchors oats" },
      { who: "Cooking oil producers", note: "sunflower, canola, and corn oil are core snack inputs" },
      { who: "Packaging suppliers", note: "aluminum cans (Ball class), PET resin, flexible film for chips" },
      { who: "Sweetener and flavor houses", note: "corn syrup, sugar, and flavor systems" },
      { who: "Co-manufacturers and logistics", note: "flex capacity around its owned plants and fleet" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$12B to $13B a year" },
      { source: "Bond markets", note: "steady investment-grade issuer" },
      { source: "Divestitures", note: "sold Tropicana juice control to PAI Partners (2021) for ~$3.3B" }
    ],
    capitalOut: [
      { use: "Dividends ~$7B+ / year", note: "53 straight annual increases" },
      { use: "Capex ~$5B / year", note: "snack plants, beverage lines, and the DSD fleet" },
      { use: "M&A", note: "poppi (~$2B, 2025), Siete Foods (~$1.2B, 2024): health-forward bolt-ons" },
      { use: "Buybacks ~$1B / year", note: "secondary to the dividend" }
    ],
    revenueMix: [
      { label: "North America beverages", pct: 30 }, { label: "North America foods (Frito-Lay + Quaker)", pct: 30 }, { label: "International (all segments)", pct: 40 }
    ],
    moat: "Direct-store-delivery at national scale plus category dominance in salty snacks: Frito-Lay's share of the US market gives PepsiCo pricing power and shelf authority that pulls the beverage business along with it.",
    risks: "North America snack volumes declining as GLP-1 drugs and health trends bite; activist pressure from Elliott; US regulatory push on additives and dyes; Walmart concentration; beverage share losses to Coca-Cola and upstarts.",
    competitors: ["coca-cola", "mondelez", "Kellanova / Kraft Heinz", "Keurig Dr Pepper", "nestle"]
  }

});
