/* Industry Atlas - ecommerce company profiles.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Loaded after companies.js; merges into the global registry. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "alibaba": {
    id: "alibaba", ticker: "BABA", mcap: 280, name: "Alibaba", full: "Alibaba Group Holding Limited", country: "CN",
    industries: ["ecommerce"], role: "China ecommerce #1 + cloud", founded: 1999, hq: "Hangzhou, China",
    stats: [{ label: "Revenue", value: "~$137B", note: "FY2025 (ended Mar 2025)" }, { label: "Active consumers", value: "~1B", note: "China, last disclosed FY2022" }, { label: "Cloud revenue", value: "~$16B", note: "FY2025, reaccelerating on AI" }, { label: "Buybacks", value: "~$12B", note: "FY2025" }],
    model: [
      "Alibaba runs China's default shopping mall without owning the inventory: Taobao (the consumer bazaar) and Tmall (brand flagship stores) match roughly 1B shoppers with millions of merchants, and the real product is advertising. Merchants bid for placement and traffic, so 'customer management revenue' converts merchant competition into a high-margin toll on Chinese consumption. Around the mall sit the utilities it had to build: Cainiao logistics, Ele.me delivery, Alipay rails via the 33%-owned Ant Group affiliate, and Alibaba Cloud, China's largest.",
      "The empire is mid-pivot. PDD and Douyin broke its growth monopoly at home, so capital now flows to two fronts: international commerce (AliExpress, Lazada, Trendyol) and an AI-era rebuild of the cloud, backed by a RMB 380B (~$53B) 3-year capex pledge announced in 2025 and the open-source Qwen model family. Meanwhile the core still throws off enough cash to fund one of the world's largest buyback programs while subsidizing a new instant-commerce war against Meituan and JD."
    ],
    customers: [
      { who: "Chinese consumers", note: "~1B annual actives across Taobao and Tmall; frequency is the battleground" },
      { who: "Merchants and brands", note: "the paying customers: ads and commissions make Taobao/Tmall ~45% of group revenue", share: "~45%" },
      { who: "Cloud and AI customers", note: "enterprises and AI startups on Alibaba Cloud; Qwen anchors the platform pitch" },
      { who: "Overseas shoppers", note: "AliExpress globally, Lazada in Southeast Asia, Trendyol in Turkey" }
    ],
    suppliers: [
      { who: "Millions of marketplace merchants", note: "the goods supply; the same crowd it monetizes with ads" },
      { who: "NVIDIA + domestic AI silicon", note: "export-rule-compliant GPUs where allowed; in-house T-Head chips as hedge" },
      { who: "Cainiao's carrier network", note: "contracted couriers and line-haul under its own logistics orchestration" },
      { who: "Ant Group", note: "Alipay payment rails; 33%-owned affiliate, regulated separately since 2020" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "core-commerce ad margins fund the whole portfolio" },
      { source: "Bond and convertible markets", note: "$5B convertible in 2024 plus regular USD bond programs" },
      { source: "Asset disposals", note: "sold Sun Art and Intime in FY2025 to refocus on core commerce + AI" }
    ],
    capitalOut: [
      { use: "AI and cloud capex", note: "RMB 380B (~$53B) pledged over 3 years, China's biggest private AI buildout" },
      { use: "Buybacks ~$12B (FY2025)", note: "shrinking the share count through the discount years" },
      { use: "Dividends", note: "~$4.6B in FY2025, initiated 2023" },
      { use: "Instant-commerce subsidies", note: "RMB 50B pledged in 2025 to defend frequency vs Meituan and JD" }
    ],
    revenueMix: [
      { label: "China commerce (Taobao/Tmall)", pct: 45 }, { label: "International commerce", pct: 13 }, { label: "Cloud", pct: 12 }, { label: "Logistics, local services, other", pct: 30 }
    ],
    moat: "A 2-sided network of ~1B consumers and millions of merchants plus the ad engine that monetizes it, deepened by owned logistics, payments rails, and China's leading cloud.",
    risks: "PDD and Douyin price-and-attention competition, Chinese regulatory swings, US-China geopolitics discounting the ADR, and margin-burning subsidy wars in instant commerce.",
    competitors: ["PDD (Pinduoduo/Temu)", "JD.com", "Douyin (ByteDance)", "Meituan (instant commerce)", "amazon"]
  },

  "shopify": {
    id: "shopify", ticker: "SHOP", mcap: 145, name: "Shopify", full: "Shopify Inc.", country: "CA",
    industries: ["ecommerce"], role: "Merchant commerce OS", founded: 2006, hq: "Ottawa, Canada",
    stats: [{ label: "Revenue", value: "$11.5B", note: "2025, +30%" }, { label: "GMV", value: "$378B", note: "2025, +29%" }, { label: "Merchant solutions", value: "~75%", note: "of revenue, payments-led" }, { label: "Free cash flow", value: "$2B", note: "2025, 17% margin" }],
    model: [
      "Shopify sells the anti-Amazon: software that lets any brand run its own store on its own domain, with Shopify invisible to the shopper. The entry product is a subscription (from $39/month up to Plus enterprise contracts), but the business is the attach. Once a merchant lives on the platform, Shopify takes a slice of every sale through Shopify Payments, then layers on Capital loans, shipping labels, installments, and tax tools: merchant solutions are now ~75% of revenue and scale with GMV, not seat count.",
      "That makes the P&L a levered bet on its merchants' success: $378B of GMV in 2025 across 175+ countries. The company stays deliberately asset-light. Stripe processes the payments underneath, the 2023 sale of its logistics arm to Flexport ended the warehouse detour, and a 10,000+ app ecosystem does the long-tail R&D. Growth now comes from moving upmarket into enterprise, offline through point of sale, and sideways into B2B wholesale."
    ],
    customers: [
      { who: "SMB and DTC merchants", note: "millions of stores; the subscription base and the funnel for everything else" },
      { who: "Enterprise brands (Shopify Plus)", note: "Gymshark, Mattel-class brands trading up for scale and checkout" },
      { who: "Offline and omnichannel retailers", note: "POS terminals pull physical retail onto the same stack" },
      { who: "Consumers (indirectly)", note: "Shop Pay and the Shop app: 100M+ registered checkout users convert better" }
    ],
    suppliers: [
      { who: "Stripe", note: "the processing engine beneath Shopify Payments" },
      { who: "Cloud infrastructure", note: "Google Cloud-led hosting keeps Black Friday online" },
      { who: "App and theme developers", note: "10,000+ apps supply features Shopify never has to build" },
      { who: "Flexport", note: "fulfillment partner and equity stake after the Deliverr retreat" },
      { who: "Affirm", note: "powers Shop Pay Installments, the BNPL layer" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "$2B free cash flow in 2025; 10 straight quarters of double-digit FCF margin" },
      { source: "Equity raises (growth era)", note: "repeated offerings through 2015 to 2021 funded the land grab" },
      { source: "Convertible notes", note: "near-zero-coupon 2020 converts; balance sheet stays net cash" }
    ],
    capitalOut: [
      { use: "R&D and sales & marketing", note: "the twin engines; AI tooling (Sidekick) now inside both" },
      { use: "Shopify Capital lending", note: "advances against merchant receivables, underwritten with platform data" },
      { use: "Strategic stakes", note: "Flexport, Affirm, Global-e, Klaviyo: the partner web holds equity" },
      { use: "Selective M&A", note: "disciplined since the $2.1B Deliverr lesson" }
    ],
    revenueMix: [
      { label: "Shopify Payments & processing (est.)", pct: 60 }, { label: "Other merchant solutions: Capital, shipping (est.)", pct: 15 }, { label: "Subscription solutions", pct: 25 }
    ],
    moat: "Switching costs of running an entire business on one operating system, compounded by the app ecosystem and Shop Pay's conversion edge that no point-solution rival can match.",
    risks: "GMV-linked cyclicality, dependence on payments economics, competition from Amazon, WooCommerce, Wix, and TikTok Shop, and a valuation that prices flawless execution.",
    competitors: ["amazon", "WooCommerce (Automattic)", "Wix, Squarespace, BigCommerce", "Salesforce Commerce Cloud, Adobe Commerce", "TikTok Shop"]
  },

  "mercadolibre": {
    id: "mercadolibre", ticker: "MELI", mcap: 92, name: "MercadoLibre", full: "MercadoLibre, Inc.", country: "AR",
    industries: ["ecommerce"], role: "LatAm commerce + fintech #1", founded: 1999, hq: "Buenos Aires, Argentina",
    stats: [{ label: "Revenue", value: "$28.9B", note: "2025, +39%" }, { label: "GMV", value: "$51.5B", note: "2024; growth accelerated through 2025" }, { label: "Mercado Pago TPV", value: "~$200B", note: "2024" }, { label: "Fintech revenue", value: "$12.6B", note: "2025, 44% of total" }],
    model: [
      "MercadoLibre is what happens when one company must build Amazon, PayPal, FedEx, and a bank simultaneously because none existed in its market. The marketplace monetizes through commissions, a fast-growing ads business, and logistics fees: Mercado Envios delivers most packages same or next day through its own fulfillment network and Meli Air freight fleet, an almost unfair advantage in a region of patchy postal systems and 100M+ unique annual buyers.",
      "Fintech is the second, faster flywheel. Mercado Pago began as marketplace checkout and became Latin America's leading digital wallet: acquiring, deposits, cards, and a credit book underwritten with marketplace data that no local bank can see. The trade-off is deliberate: heavy 2025 reinvestment in logistics, credit, and free shipping compressed margins, exchanging profit today for ownership of the region's commerce and banking rails tomorrow."
    ],
    customers: [
      { who: "Latin American consumers", note: "100M+ unique buyers a year; Brazil, Mexico, Argentina are the core", share: "3 markets = ~95% of revenue" },
      { who: "Marketplace sellers and brands", note: "millions of SMEs pay commissions, fulfillment, and ad fees" },
      { who: "Credit borrowers", note: "consumers and merchants; portfolio ~$6.6B at end-2024 and growing fast" },
      { who: "Advertisers", note: "Mercado Ads: retail media at ~$1B scale, the margin kicker" }
    ],
    suppliers: [
      { who: "Millions of marketplace sellers", note: "the inventory; 1P retail fills category gaps" },
      { who: "Carriers + own logistics network", note: "contracted last-mile fleets, fulfillment centers, Meli Air" },
      { who: "Debt and securitization markets", note: "local-currency funding behind the loan book" },
      { who: "Hyperscale cloud (AWS, Google Cloud)", note: "the platform runs on rented infrastructure" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "commerce take rates plus fintech fees fund most growth" },
      { source: "Local-currency debt + securitizations", note: "matches credit-book funding to each country's currency" },
      { source: "Equity raises (historical)", note: "2019 round included PayPal's $750M strategic investment" },
      { source: "User deposits", note: "Mercado Pago balances make funding increasingly bank-like" }
    ],
    capitalOut: [
      { use: "Logistics buildout", note: "fulfillment centers and air routes across Brazil and Mexico" },
      { use: "Credit book expansion", note: "capital lent to consumers and merchants; the growth engine and the risk" },
      { use: "Free-shipping subsidies + marketing", note: "shipping is the customer-acquisition cost" },
      { use: "Technology headcount", note: "1 of Latin America's largest engineering organizations" }
    ],
    revenueMix: [
      { label: "Brazil", pct: 54 }, { label: "Argentina", pct: 22 }, { label: "Mexico", pct: 20 }, { label: "Other LatAm", pct: 4 }
    ],
    moat: "The only end-to-end commerce, logistics, and banking stack in Latin America: each layer had to be built from scratch, and the combined data flywheel underwrites credit no entrant can copy.",
    risks: "Currency devaluation and macro shocks (Argentina above all), credit losses in a downturn, Amazon, Shein, and Temu incursions, and margin compression from the 2025 investment cycle.",
    competitors: ["amazon", "Shein & Temu (cross-border discounters)", "Magazine Luiza, Americanas (Brazil)", "Nubank (fintech flank)"]
  }

});
