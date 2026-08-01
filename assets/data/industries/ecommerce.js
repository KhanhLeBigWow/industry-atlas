/* Industry Atlas - E-COMMERCE (full module, research-backed)
 * Anchors: global retail e-commerce ~$6.42T in 2025, +6.8% YoY, 20.5% of all retail
 * (eMarketer, Feb 2025); US Q1 2026 e-commerce $326.7B, 16.9% of retail, +9.8% YoY
 * (US Census Bureau, May 2026); Amazon ~40% of US e-commerce, Walmart ~9% (eMarketer,
 * 2025); US retail media ad spend ~$59B in 2025 with Amazon taking 75%+ (~$60B+ retail
 * media revenue) (eMarketer, 2025); Temu H1 2025 GMV ~$35B (+50%), Shein ~$27B with a
 * ~$60B full-year target (Momentum Works, 2025); US de minimis exemption ended Aug 29,
 * 2025; China GMV split Taobao/Tmall ~44% / JD ~24% / PDD ~19%, ~47% online penetration
 * (Mordor Intelligence, 2025); all-in fulfillment ~$6-12 per order (2026 3PL benchmarks). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["ecommerce"] = {
  meta: {
    id: "ecommerce", name: "E-commerce", sector: "consumer", status: "full",
    tagline: "A $6.4T selling machine where the retail is the loss leader and the ad market built on top is the profit.",
    marketSize: { value: 6.4, unit: "$T", asOf: 2025, note: "global retail e-commerce sales; 20.5% of all retail (eMarketer)" },
    cagr: { value: 7, range: [5, 9], horizon: "2025-2028" },
    maturity: "growth-mature", cyclicality: 3, capitalIntensity: 3, regulation: 3, disruption: 4
  },
  newsQuery: '(Amazon OR Shopify OR Temu OR Shein OR "e-commerce" OR "online retail" OR "retail media" OR marketplace)',

  overview: {
    definition: "E-commerce is retail rebuilt as software, logistics, and an advertising market: marketplaces that aggregate demand, storefront platforms that arm merchants, fulfillment networks that move parcels, and a retail media layer that monetizes the shelf itself. It moved ~$6.42T of goods in 2025, about 20.5% of everything retail sold on Earth (eMarketer).",
    howItWorks: [
      "The structure is an aggregation pyramid. At the top sit marketplaces (Amazon, Taobao/Tmall, Pinduoduo, Mercado Libre) that own the customer relationship and rent access to millions of sellers via commissions, fulfillment fees, and ads: a blended take that can pass 30% of a seller's sale on Amazon. Beneath them, storefront platforms (Shopify class) sell the picks and shovels to merchants who want their own site; beneath those, the physical machine: warehouses, sortation, and last-mile carriers that turn a click into a doorstep delivery for roughly $6 to $12 all-in per order.",
      "The profit pool inverted over the last decade. Selling goods online is a thin-margin, capital-hungry business; selling attention to the sellers is not. Retail media (search placements and display inside the store) reached about $59B in the US in 2025 and $140B+ globally, and Amazon alone captured 75%+ of the US pool: ads carry software-grade margins on rails the retail business already paid for. The modern marketplace P&L is a low-margin logistics company wrapped around a high-margin ad exchange.",
      "Scale economics run through density. Fulfillment cost per order falls as networks regionalize and route density rises, which is why the giants keep building: faster delivery raises conversion and order frequency, which funds more density, which lowers unit cost. Subscriptions (Prime class) convert that service level into switching costs. The flywheel is real but expensive: it is why 2-day shipping became a moat measured in hundreds of billions of capex, and why subscale 1P retailers struggle to compete on economics rather than niche.",
      "The map is multipolar. The US runs about $1.2T of e-commerce with Amazon near 40% share and Walmart a distant ~9% (eMarketer, 2025). China is the largest and most penetrated market (~47% of retail online), split roughly 44/24/19 among Alibaba, JD, and PDD, with Douyin's livestream commerce compressing everyone's take rates. The insurgents are cross-border: Temu did ~$35B of GMV in H1 2025 (+50%) and Shein ~$27B, exporting Chinese factory economics directly to Western consumers until the US closed the de minimis duty loophole in August 2025: a policy shock that redirected, but did not reverse, their growth."
    ],
    history: [
      { era: "1995-2000", title: "The land grab", text: "Amazon and eBay prove the model; hundreds of dot-coms burn venture capital proving that traffic without unit economics is a going-concern problem." },
      { era: "2000-2007", title: "Infrastructure decade", text: "Survivors build the machine: reviews, one-click, Prime (2005), and Fulfillment by Amazon (2006) turn a bookstore into a platform. Taobao routs eBay in China with free listings." },
      { era: "2008-2015", title: "Marketplace ascendancy", text: "Third-party sellers overtake 1P at Amazon; Alibaba's Singles' Day becomes the largest shopping event on Earth; Shopify arms the rebels with a storefront in a box." },
      { era: "2016-2021", title: "Ads, DTC, and the COVID spike", text: "Retail media emerges as the hidden profit engine; a DTC boom (and aggregator mania) rides cheap CAC; COVID pulls years of adoption forward and penetration spikes." },
      { era: "2022-present", title: "The hangover and the insurgents", text: "Pull-forward reverses, Shopify and Amazon retrench, and Temu/Shein weaponize de minimis and factory-direct supply until Washington shuts the loophole in 2025. Retail media and AI-driven discovery become the new battlegrounds." }
    ],
    trends: [
      { title: "Retail media gold rush", direction: "up", text: "US retail media passed ~$59B in 2025 and every retailer with traffic is building an ad business; Amazon's 75%+ share shows the spoils go to whoever owns the search bar where wallets are open." },
      { title: "Cross-border factory-direct", direction: "shift", text: "Temu (~$35B H1 2025 GMV) and Shein compressed the supply chain to factory-to-doorstep; the US de minimis repeal (Aug 2025) forced localization, semi-managed logistics, and a pivot to Europe and Latin America." },
      { title: "Take-rate creep", direction: "up", text: "Commissions plus fulfillment plus mandatory-feeling ads push effective marketplace takes toward 30%+ on Amazon: seller economics are the pressure valve regulators and rivals both watch." },
      { title: "Agentic and AI-mediated shopping", direction: "shift", text: "Chat assistants and shopping agents threaten to reroute discovery away from the search-bar-plus-ads model that funds the industry: whoever owns the agent owns the shelf." },
      { title: "Penetration grind, not spike", direction: "up", text: "US online share hit 16.9% of retail in Q1 2026 (Census), growing ~2.5x as fast as total retail: the post-COVID pattern is a steady grind higher led by grocery, health, and replenishment categories." }
    ],
    outlook: "The industry compounds mid-to-high single digits globally ($6.42T in 2025 toward ~$7.9T by 2028 per eMarketer) but the mix shifts matter more than the total: ads and services take a growing share of profit, cross-border insurgents keep deflating price points, and AI-mediated discovery is the first genuine threat to the search-and-ads model since its invention. The winners look less like retailers every year: they are logistics utilities, ad exchanges, and subscription businesses that happen to sell goods at cost."
  },

  structure: {
    suppliers: [
      { name: "Brands & manufacturers", note: "From P&G to a Guangdong factory with a Temu account: increasingly able to skip the middleman" },
      { name: "Chinese export manufacturing", note: "The factory base behind Temu, Shein, and half of Amazon's 3P sellers" },
      { name: "Carriers & 3PLs (UPS, FedEx, regional carriers)", note: "Last-mile capacity: 50-70% of fulfillment cost per order is the outbound parcel" },
      { name: "Software & payments rails (Shopify, Stripe class, cloud)", note: "The storefront, checkout, and infrastructure layer merchants rent" }
    ],
    producers: [
      { name: "Amazon", note: "~40% of US e-commerce; marketplace + logistics utility + $60B+ ad business (eMarketer, 2025)" },
      { name: "China platforms (Alibaba, PDD, JD, Douyin)", note: "The largest market: ~44/24/19 GMV split among the big 3, livestream eating share" },
      { name: "Cross-border insurgents (Temu, Shein, TikTok Shop)", note: "Factory-direct economics; ~$35B and ~$27B H1 2025 GMV respectively" },
      { name: "Omnichannel & regional champions (Walmart, MercadoLibre, Coupang, Sea)", note: "Store networks and local logistics as the differentiator" },
      { name: "The merchant long tail (Shopify economy, DTC brands)", note: "Millions of storefronts renting the rails; CAC is their oxygen" }
    ],
    distributors: [
      { name: "Fulfillment networks (FBA, Walmart WFS, 3PLs)", note: "Pick, pack, ship at ~$6-12 per order; density is destiny" },
      { name: "Last-mile carriers & gig fleets", note: "The costliest mile; unionization and wage inflation land here first" }
    ],
    customers: [
      { name: "Consumers", note: "2B+ digital buyers; convenience and price rule, loyalty is rented via subscriptions" },
      { name: "Advertisers (the real customers)", note: "Sellers and brands buying shelf placement: the margin pool" },
      { name: "B2B buyers", note: "The quieter, larger GMV pool digitizing a decade behind consumer" }
    ],
    regulators: [
      { name: "Antitrust (FTC/DOJ, EU DMA)", note: "Self-preferencing, fee stacking, and gatekeeper rules aimed at the take rate" },
      { name: "Customs & trade (USTR, CBP)", note: "The de minimis repeal (Aug 2025) showed one order can reprice a business model overnight" },
      { name: "Data & consumer protection (GDPR, state privacy laws)", note: "Targeting limits shape the ad layer's economics" },
      { name: "China regulators", note: "Platform rectification campaigns moved hundreds of billions in market cap" }
    ],
    capital: [
      { name: "Public equity", note: "Mega-cap platforms fund logistics from cash flow; the market prices the ad and cloud attachments, not the retail" },
      { name: "Venture capital", note: "The DTC and aggregator boom-bust (Thrasio class) taught cohort math the hard way" },
      { name: "Chinese platform balance sheets", note: "PDD's war chest funds Temu's customer-acquisition blitz at billions per year" }
    ]
  },

  valueChain: {
    intro: "From factory gate to doorstep to the ad auction on top. Physical work earns thin margins; aggregation and monetization earn the rest: the closer to the customer's search bar, the richer the economics.",
    stages: [
      { id: "sourcing", name: "Sourcing & merchandise", what: "Making and buying the goods that flow through the pipes", players: "Chinese export factories, brands, private label", valueCapture: 2,
        economics: { grossMargin: [10, 25], capitalIntensity: 3, concentration: 1 },
        linksTo: ["manufacturing", "textiles-apparel", "consumer-goods"],
        deeper: "The most fragmented layer and the least pricing power: Temu and Shein's innovation was contracting it directly, using realtime demand signals to cut inventory risk (Shein's small-batch test-and-reorder model). Tariffs and de minimis rules hit this layer first and hardest." },
      { id: "storefront", name: "Platforms & storefront software", what: "The rails merchants rent: site, checkout, inventory, tax", players: "Shopify, BigCommerce, WooCommerce, Salesforce", valueCapture: 4,
        economics: { grossMargin: [50, 80], capitalIntensity: 2, concentration: 3 },
        linksTo: ["saas", "cloud", "payments"],
        deeper: "SaaS economics attached to GMV: subscription plus payment take. Shopify's genius was monetizing the anti-Amazon: millions of merchants who want the customer relationship Amazon won't give them. The take rate grows as merchants adopt payments, capital, and fulfillment attach products." },
      { id: "marketplace", name: "Marketplaces & demand aggregation", what: "Owning the customer and renting access to sellers", players: "Amazon, Taobao/Tmall, PDD, MercadoLibre", valueCapture: 4,
        economics: { grossMargin: [30, 45], capitalIntensity: 4, concentration: 4 },
        linksTo: ["retail", "media"],
        deeper: "The aggregator position: commissions (~8-15%), fulfillment fees, and ads stack toward a 30%+ effective take on Amazon. The moat is the two-sided flywheel (selection brings buyers brings sellers) plus a logistics network rivals must replicate at nine-figure annual capex. Antitrust theory of harm lives here." },
      { id: "checkout", name: "Checkout & payments", what: "Converting intent to cash: auth, fraud, credit", players: "Stripe class, PayPal, Shop Pay, BNPL lenders", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 2, concentration: 3 },
        linksTo: ["payments", "fintech", "banking"],
        deeper: "Roughly 2-3% of every online transaction flows to the payments stack, and conversion-rate improvements at checkout are worth more than they cost: why one-click and stored credentials became strategic assets. BNPL attached itself here as a checkout-financing layer with credit risk hiding inside." },
      { id: "fulfillment", name: "Fulfillment & last mile", what: "Warehouses, sortation, and the doorstep", players: "Amazon logistics, UPS/FedEx, 3PLs, gig fleets", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 5, concentration: 3 },
        linksTo: ["logistics", "shipping", "real-estate"],
        deeper: "The physical bottleneck: ~$6-12 all-in per order, 50-70% of it the outbound parcel. Density and regionalization are the only structural cost levers, which is why Amazon rebuilt its network into regional clusters and why speed became a capex arms race subscale players rent (FBA, 3PLs) rather than fight." },
      { id: "monetization", name: "Retail media & monetization", what: "Selling the digital shelf: search ads, display, data", players: "Amazon Ads, Walmart Connect, Criteo, Instacart", valueCapture: 5,
        economics: { grossMargin: [70, 90], capitalIntensity: 1, concentration: 4 },
        linksTo: ["media", "ai"],
        deeper: "The crown jewels: ~$59B in the US in 2025 (eMarketer), 75%+ of it Amazon's, at margins the retail business can only dream of. Closed-loop attribution (the ad and the purchase happen in the same store) makes it the most defensible ad format in a post-cookie world. The risk: ad load has a ceiling before search results become a landfill." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector in three P&L species. Marketplaces: GMV is the headline but revenue is commissions + fulfillment fees + ads + subscriptions: watch the take rate and the mix shifting toward high-margin services (ads especially: Amazon's $60B+ ad line likely out-earns its entire retail operation). Storefront platforms: SaaS subscriptions plus a payments take on merchant GMV: gross margins of 50%+ with growth tied to merchant survival and attach rates. Retailers/1P and DTC brands: classic gross margin minus CAC minus $6-12 of fulfillment per order: contribution margin after acquisition is the whole game, and rising CAC is a silent tax on the entire long tail.",
      "Cash dynamics favor the aggregators: negative working capital (collect from the buyer today, pay the seller in weeks), advertising revenue with no COGS to speak of, and logistics capex that doubles as a competitive moat. The insurgent model runs the other way: Temu bought US market share with billions in subsidized parcels and marketing, a strategy only PDD's balance sheet could fund. The de minimis repeal (Aug 2025) added duty and compliance cost per parcel and forced the cross-border players toward local warehousing: structurally higher cost, structurally stickier operations."
    ],
    fingerprint: { grossMargin: 35, recurringRevenue: 40, capitalIntensity: 55, pricingPower: 45, cyclicality: 55, operatingLeverage: 65 },
    lines: [
      { label: "GMV & order growth", note: "The volume tape: units and frequency beat AOV as health signals" },
      { label: "Take rate & revenue mix", note: "Commissions vs fulfillment vs ads vs subscriptions: the margin story hides here" },
      { label: "Advertising revenue", note: "The profit engine: watch growth vs GMV growth for ad-load saturation" },
      { label: "Fulfillment cost per order", note: "~$6-12 all-in; falling with density = the flywheel working" },
      { label: "Contribution margin after CAC", note: "For merchants and DTC: the line between a business and a treadmill" }
    ],
    unitEconomics: {
      unit: "per online order (illustrative US marketplace)",
      items: [
        { label: "Average order value", value: "~$50-100", note: "category-dependent; frequency matters more than size" },
        { label: "Fulfillment all-in", value: "~$6-12", note: "50-70% of it the outbound parcel (2026 3PL benchmarks)" },
        { label: "Payments & fraud", value: "~2-3% of AOV", note: "the checkout stack's rent" },
        { label: "Marketplace take (seller side)", value: "~15% commission, 30%+ with fulfillment and ads", note: "the aggregator's stacked toll" }
      ]
    }
  },

  kpiRefs: ["pay-take-rate", "retail-inventory-turns", "saas-cac-payback"],
  kpiLocal: [
    {
      id: "ecom-gmv-take", name: "GMV & Take Rate", industries: ["ecommerce"],
      definition: "Gross merchandise value flowing through a platform, and the share the platform keeps as revenue.",
      formula: "Take rate = net platform revenue / GMV; blended take includes commissions, fulfillment fees, ads, subscriptions",
      interpretation: "GMV measures the economy on the platform; take rate measures the toll. Amazon's effective seller take passes 30% with fulfillment and ads stacked; rising take without seller churn is pricing power, rising take with churn is harvesting.",
      healthy: "GMV growing with stable-to-rising take driven by voluntary services", warning: "Take rising faster than seller economics allow; GMV bought with subsidies" },
    {
      id: "ecom-fulfillment-cpo", name: "Fulfillment Cost per Order", industries: ["ecommerce"],
      definition: "All-in cost to store, pick, pack, and deliver one order: the physical unit cost of the industry.",
      formula: "Total fulfillment + shipping cost / orders shipped; benchmark ~$6-12 all-in (2026)",
      interpretation: "The scale scoreboard: density and regionalization push it down, speed promises and labor inflation push it up. As a % of AOV it decides whether free shipping is a moat or a bleed.",
      healthy: "Falling per-order cost while delivery speed improves", warning: "Cost per order rising as % of AOV; speed bought with margin" }
  ],

  health: {
    intro: "Platform health is take-rate durability and logistics efficiency; merchant health is contribution margin after CAC; everyone's health is whether growth is organic or bought.",
    pillars: [
      { name: "Unit economics", weight: 25, metrics: "Contribution margin after CAC and fulfillment, cohort repeat rates", healthy: "Positive contribution on first or second order", warning: "CAC payback beyond 12 months; growth = marketing spend" },
      { name: "Monetization mix", weight: 20, metrics: "Ads + subscriptions + services share of revenue and profit", healthy: "High-margin services growing faster than GMV", warning: "1P retail carrying the P&L; ad load at saturation" },
      { name: "GMV growth & share", weight: 20, metrics: "GMV vs market growth (global ~7%), category expansion", healthy: "Gaining share in growing categories (grocery, health)", warning: "Share loss to factory-direct or livestream rivals" },
      { name: "Logistics efficiency", weight: 20, metrics: "Fulfillment cost per order, delivery speed, network density", healthy: "Cost per order falling while speed rises", warning: "Capex rising with no unit-cost payoff" },
      { name: "Regulatory & policy exposure", weight: 15, metrics: "Take-rate concentration, cross-border duty exposure, antitrust docket", healthy: "Diversified revenue, localized supply chains", warning: "Model dependent on a loophole (the de minimis lesson)" }
    ],
    scoringNote: "In e-commerce, growth is cheap to buy and expensive to keep: score cohorts and contribution margin, never the GMV headline."
  },

  valuation: {
    intro: "The market prices the attachments, not the retail: ad businesses and subscriptions like software, logistics like industrials, and GMV headlines like the vanity metric they can be.",
    methods: [
      { name: "EV / Revenue (platforms & marketplaces)", use: "Marketplaces and storefront software where margin is still scaling", avoid: "1P-heavy retailers where revenue is gross, not net: mix makes multiples incomparable", strengths: "Cuts through investment-phase margins", weaknesses: "Ignores take-rate quality and capital intensity", range: { low: 2, high: 8, asOf: 2025, note: "software-grade rails at the top; 1P-heavy models below 1x" } },
      { name: "EV / EBITDA (mature omnichannel & logistics-heavy)", use: "Walmart-class omnichannel and scaled marketplaces with stable margins", avoid: "Companies still converting retail margin to ad margin: you will misprice the mix shift", strengths: "Comparable, disciplines the story", weaknesses: "Capex intensity varies wildly; EBITDA flatters asset-heavy models", range: { low: 8, high: 15, asOf: 2025, note: "the ad-mix shift is the re-rating engine within the range" } },
      { name: "Sum-of-the-parts (Amazon-class conglomerates)", use: "Separating retail, ads, cloud, and subscriptions: each deserves its own multiple", avoid: "As precision: segment disclosure is deliberately murky", strengths: "Reveals that ads and cloud fund retail at cost", weaknesses: "Parts are never separable in practice; synergy is the point", range: { low: 0, high: 0, asOf: 2025, note: "qualitative lens; the ad segment alone reprices the stock" } },
      { name: "Cohort / contribution DCF (DTC & merchants)", use: "Brands where the question is whether cohorts repay CAC", avoid: "Pre-repeat-purchase businesses: you would be discounting hope", strengths: "The only honest lens on CAC-driven growth", weaknesses: "Cohort decay assumptions swing the answer 3x", range: { low: 1, high: 3, asOf: 2025, note: "EV/Revenue equivalents for DTC with proven repeat economics" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an e-commerce name quickly: normalized EBITDA (mind the ad-mix trajectory) times a multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.5, max: 120, step: 0.5, value: 10, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 25, step: 0.5, value: 13, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt (net cash) ($B)", min: -80, max: 60, step: 1, value: -10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays e-commerce as three separate trades wearing one label: aggregators with ad businesses (own the toll roads), picks-and-shovels rails (own the arms dealers), and CAC-treadmill merchants (mostly avoid, occasionally rent). Penetration grinding higher (16.9% of US retail and climbing) is the beta; the alpha is in mix shifts: ads over retail, services over goods, density over speed promises.",
    debates: [
      { topic: "Amazon: is near-zero-margin retail the moat or the millstone?", bull: "Retail at cost is the customer-acquisition engine for a $60B+ ad business at software margins, a Prime annuity, and the logistics utility rivals must rent: the SOTP keeps revealing the retail is free and the attachments are the company.", bear: "The flywheel needs perpetual nine-figure capex, regulators are aiming directly at the fee-stacking that funds it, and ad load is approaching the point where search results stop being search results: the margin story has a ceiling the multiple ignores." },
      { topic: "Temu/Shein: durable model or regulatory arbitrage that already died?", bull: "The de minimis repeal proved the model's resilience, not its fragility: both pivoted to local warehousing and Europe within months, US exposure is under 35% of GMV, and factory-direct with realtime demand signals is a structural cost advantage no tariff erases.", bear: "The core proposition was untaxed $8 parcels and subsidized logistics: duties, EU fees coming in 2026, and rising CAC in saturated markets turn a growth story into a margin story neither has ever demonstrated. PDD's subsidies are a war chest, not a business model." },
      { topic: "Agentic AI shopping: extinction event for the ad model or aggregator entrenchment?", bull: "Whoever owns the shopping agent owns the shelf, and the incumbents own the data, the logistics, and the checkout: agents raise conversion, kill CAC-driven middlemen, and make the biggest catalogs more valuable, not less.", bear: "Retail media is a $140B+ global toll on human attention at the search bar: if an agent compares every product and ignores sponsored placement, the industry's entire profit pool reprices, and the retail underneath it was never profitable on its own." }
    ],
    cycle: {
      where: "Mid-grind: post-COVID hangover digested, penetration compounding again (~10% YoY US growth vs ~4% retail), retail media maturing from gold rush to duopoly-plus-tail, cross-border insurgents absorbing their first real policy shock, and AI discovery the wildcard everyone models and no one prices.",
      drivers: "Consumer discretionary spend, penetration by category (grocery is the frontier), CAC and ad-load saturation, trade policy per parcel, and logistics wage inflation.",
      leads: [
        "US Census quarterly e-commerce report (free, ~6 weeks after quarter-end)",
        "Amazon segment disclosures: online stores vs 3P services vs ads growth spread (free, SEC filings)",
        "Holiday tape: Prime Day, Singles' Day, Cyber weekend GMV prints (free coverage)",
        "Trade policy docket: tariff and de minimis actions in the US and EU (free, federal register)",
        "Parcel carrier volume and pricing commentary (UPS/FedEx calls, free)"
      ]
    },
    exposure: [
      { vehicle: "Amazon", note: "The full stack: aggregator + logistics utility + the ad business that pays for it all" },
      { vehicle: "Shopify class (storefront rails)", note: "A take rate on the anti-Amazon economy without inventory risk" },
      { vehicle: "China platforms (PDD, Alibaba, JD)", note: "The largest market at discounted multiples: the discount is the geopolitics" },
      { vehicle: "Emerging-market champions (MercadoLibre, Coupang, Sea)", note: "Penetration curves a decade behind the US with local logistics moats" },
      { vehicle: "Picks and shovels (warehouse REITs, parcel carriers, payments)", note: "GMV beta without the retail knife fight" }
    ],
    catalysts: [
      { when: "Quarterly (mid Feb/May/Aug/Nov)", what: "US Census e-commerce print: the penetration tape" },
      { when: "Quarterly earnings", what: "Take-rate and ad-revenue growth vs GMV: the mix-shift scoreboard" },
      { when: "Q4 holiday season", what: "Cyber weekend and Singles' Day set the tone for the year's share math" },
      { when: "Trade policy actions", what: "Tariff rulings and EU de minimis reform (2026): repricing events for cross-border models" }
    ],
    data: [
      { series: "Quarterly Retail E-Commerce Sales", source: "census.gov (free)", why: "The canonical US penetration series: 16.9% of retail in Q1 2026" },
      { series: "E-commerce % of retail (ECOMPCTSA)", source: "FRED, stlouisfed.org (free)", why: "The long chart: 50 years of channel shift in one line" },
      { series: "Amazon 10-Q segment revenue", source: "sec.gov (free)", why: "Online stores vs 3P services vs ads: the industry's mix shift in one filing" },
      { series: "Momentum Works platform GMV trackers", source: "momentum.asia (free summaries)", why: "The best free read on Temu, Shein, Shopee GMV" },
      { series: "Marketplace Pulse research", source: "marketplacepulse.com (free articles)", why: "Seller economics, take rates, and marketplace share data" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Discretionary GMV falls but channel shift accelerates as consumers trade down online (the Temu trade); ad budgets follow sales, so retail media dips less than brand advertising. Own staples-weighted platforms, avoid CAC-dependent DTC." },
      { regime: "Inflation / wage spikes", behavior: "Fulfillment cost per order rises (labor + fuel land in the parcel); platforms pass it to sellers via fees, sellers to consumers via price: the take rate is the inflation shock absorber, merchants the shock." },
      { regime: "Rates rising", behavior: "Long-duration platform multiples compress first; negative-working-capital models earn float on the way up; BNPL credit quality is the canary at checkout." },
      { regime: "Trade war escalation", behavior: "Per-parcel duties reprice cross-border overnight (the Aug 2025 template); localized players and domestic marketplaces gain relative share. Watch EU policy for the second act." }
    ]
  },

  players: [
    { name: "Amazon", role: "The Western aggregator", country: "US", real: true, note: "~40% of US e-commerce; $60B+ ad revenue; the logistics network is the moat (eMarketer, 2025)" },
    { name: "Alibaba (Taobao/Tmall)", role: "China's incumbent", country: "CN", real: true, note: "~44% of China GMV and shrinking at the edges: livestream and PDD eat the margins" },
    { name: "PDD Holdings (Pinduoduo, Temu)", role: "The insurgent", country: "CN", real: true, note: "~19% of China GMV plus Temu's ~$35B H1 2025 cross-border blitz" },
    { name: "JD.com", role: "China's 1P logistics heavyweight", country: "CN", real: true, note: "~24% of China GMV; owns its fulfillment the way Amazon does" },
    { name: "Shopify", role: "The arms dealer", country: "CA", real: true, note: "Storefront rails for the merchant long tail; take rate grows with payments and fulfillment attach" },
    { name: "Shein", role: "Fast-fashion factory-direct", country: "SG", real: true, note: "~$27B H1 2025 GMV, ~$60B FY target; small-batch test-and-reorder is the real innovation" },
    { name: "Walmart", role: "Omnichannel counterweight", country: "US", real: true, note: "~9% of US e-commerce; stores as fulfillment nodes plus a fast-growing ad business" },
    { name: "MercadoLibre", role: "Latin America's full stack", country: "AR", real: true, note: "Marketplace + payments + logistics in one: the emerging-market playbook executed" }
  ],

  geography: [
    { country: "CN", role: "Largest and most penetrated market", note: "~47% of retail online; the platform battlefield and the export factory base" },
    { country: "US", role: "Largest profit pool", note: "$1.2T market, 16.9% penetration and grinding higher; retail media's home turf" },
    { country: "KR", role: "Penetration frontier", note: "Coupang's rocket delivery shows the end-state of logistics-as-moat" },
    { country: "SG", role: "Southeast Asia hub", note: "Sea/Shopee and Shein HQ; the region's penetration curve is a decade of growth ahead" },
    { country: "BR", role: "Latin America's anchor market", note: "MercadoLibre's core: logistics and credit gaps are the moat-building opportunity" },
    { country: "GB", role: "Europe's most online market", note: "The EU's regulatory lab: DMA enforcement and de minimis reform shape the continent" }
  ],

  cycles: [
    { year: 2000, title: "Dot-com bust", kind: "bust", text: "Pets.com and hundreds of peers burn out; Amazon survives on a convertible raised weeks before the window shut. Lesson: traffic without unit economics is a countdown timer." },
    { year: 2006, title: "Prime + FBA", kind: "shift", text: "Amazon turns shipping into a subscription and its warehouses into a platform: the marketplace flywheel starts compounding. Lesson: the infrastructure you build for yourself is the product you sell to everyone else." },
    { year: 2020, title: "COVID pull-forward", kind: "boom", text: "Penetration spikes years ahead of trend; everyone extrapolates; Amazon doubles its network, Shopify triples its multiple. Lesson: a demand spike is not a new trendline." },
    { year: 2022, title: "The hangover", kind: "bust", text: "Growth mean-reverts, overbuilt capacity and over-hired teams unwind, the DTC-aggregator complex (Thrasio class) collapses as CAC math fails at higher rates. Lesson: cohort economics were the fundamentals all along." },
    { year: 2025, title: "De minimis repeal", kind: "shift", text: "Washington ends the $800 duty-free parcel exemption (Aug 29); Temu and Shein pivot to local warehousing and Europe within months. Lesson: a business model built on a loophole is a policy decision away from a rebuild." }
  ],

  risks: [
    { name: "Trade policy shock", severity: 3, likelihood: 4, transmission: "Per-parcel duties or tariff escalation -> cross-border cost base repriced overnight -> price gaps close -> share shifts to localized players (the Aug 2025 template, EU next)." },
    { name: "AI-mediated discovery rerouting demand", severity: 4, likelihood: 3, transmission: "Shopping agents bypass the search bar -> sponsored placement loses pricing power -> the $140B+ retail media pool compresses -> the margin subsidizing retail-at-cost disappears." },
    { name: "Antitrust and platform regulation", severity: 4, likelihood: 2, transmission: "Fee-stacking and self-preferencing rulings -> take rates capped or unbundled -> marketplace margin structurally reset -> logistics capex loses its payback math." },
    { name: "CAC inflation and ad-load saturation", severity: 3, likelihood: 3, transmission: "Ad slots saturate -> CAC rises across the long tail -> merchant churn and consolidation -> platform GMV growth decays into take-rate harvesting." },
    { name: "Logistics labor cost spiral", severity: 3, likelihood: 3, transmission: "Warehouse and last-mile unionization -> fulfillment cost per order rises -> free-shipping economics break for subscale players -> share concentrates in the densest networks." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["E-commerce is shopping through the internet: about $6.4T of goods a year, or roughly $1 of every $5 spent in retail worldwide. A few giant marketplaces (Amazon in the West, Alibaba and Pinduoduo in China) run the biggest online malls, charge sellers rent to be in them, and deliver parcels for $6 to $12 each. The surprising part: the stores often make little money selling things. The real profit comes from selling ad space on the digital shelf to the merchants themselves."] },
    L2: { title: "Intermediate", text: ["The economics: marketplaces take a cut of every sale (roughly 15% commission, 30%+ once fulfillment and ads stack up), storefront software (Shopify class) rents rails to independent merchants, and fulfillment networks compete on cost per order and speed. Retail media is the margin engine: ~$59B in the US in 2025, 75%+ of it Amazon's. Insurgents like Temu (~$35B GMV in H1 2025) and Shein shipped factory-direct parcels duty-free until the US closed the de minimis loophole in August 2025 and forced them to localize."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: marketplaces on take rate, mix shift toward ads and services, and fulfillment cost per order; storefront platforms on attach rates and merchant survival; DTC brands on contribution margin after CAC and cohort repeat rates. GMV is a vanity metric until you know who keeps what: Amazon's revenue mix moving from 1P retail toward 3P services and ads is the decade's quiet re-rating story. Negative working capital and ad margins fund the logistics arms race everyone else must rent."] },
    L4: { title: "Expert", text: ["Trade the mix shifts and the policy tape: quarterly Census penetration prints, the spread between ad growth and GMV growth (saturation math), trade-policy actions that reprice cross-border models overnight, and China platform share wars compressing take rates. Live debates: whether retail-at-cost is Amazon's moat or millstone, whether Temu/Shein survive their own success post-de-minimis, and whether agentic AI shopping breaks the search-and-ads profit pool or entrenches whoever owns the agent, the catalog, and the last mile."] },
    L5: { title: "Institutional", text: ["Allocator's frame: e-commerce is a penetration-grind beta (global GMV compounding ~7%) with the alpha concentrated in monetization-mix shifts and infrastructure toll roads. Core the aggregators whose ad and subscription attachments out-earn their retail, own the picks and shovels (rails, warehouses, payments) for GMV exposure without merchant risk, and treat CAC-dependent brands as trades, not holdings. The two repricing events worth pre-positioning: trade policy per parcel, and AI agents disintermediating the search bar that funds the entire margin structure."] }
  },

  quiz: [
    { q: "Global retail e-commerce in 2025 was roughly:", choices: ["$640B", "$6.4T, about 20.5% of all retail", "$64T", "$1T"], answer: 1, explain: "eMarketer put 2025 at ~$6.42T, growing ~6.8%: about $1 of every $5 of retail on Earth now flows online." },
    { q: "The most profitable layer of a modern marketplace is typically:", choices: ["Selling goods 1P", "Retail media: selling ad placement on the digital shelf", "Free shipping", "Warehousing"], answer: 1, explain: "US retail media hit ~$59B in 2025 at software-grade margins; the retail underneath often runs near cost as the traffic engine." },
    { q: "Amazon's share of US e-commerce is roughly:", choices: ["10%", "40%, with Walmart a distant ~9%", "75%", "90%"], answer: 1, explain: "eMarketer estimates ~40% for 2025: dominant, but the take-rate stack (commission + fulfillment + ads) matters more than the share." },
    { q: "The de minimis repeal (August 2025) mattered because:", choices: ["It banned imports", "It ended duty-free treatment of sub-$800 parcels, repricing Temu and Shein's factory-direct model overnight", "It only affected Amazon", "It raised sales taxes"], answer: 1, explain: "The loophole let cross-border parcels skip duties; closing it forced localization and a pivot to Europe: policy as a repricing event." },
    { q: "A marketplace's effective take from a seller on Amazon can reach:", choices: ["2%", "About 8%", "30%+ once commission, fulfillment, and ads stack", "75%"], answer: 2, explain: "~15% commission plus FBA fees plus increasingly mandatory-feeling ads: the stacked toll is the antitrust battleground." },
    { q: "All-in fulfillment cost for a typical US online order runs about:", choices: ["$0.50", "$6-12, with 50-70% of it the outbound parcel", "$50", "It's free"], answer: 1, explain: "Density is the only structural cost lever, which is why logistics networks became the industry's defining capex arms race." },
    { q: "GMV is best understood as:", choices: ["The platform's revenue", "The value of goods transacted: a volume metric, not what the platform keeps", "Profit", "A cash-flow line"], answer: 1, explain: "Platforms keep the take rate (commissions, fees, ads), not GMV: judging a marketplace on GMV alone is judging a tollbooth by the traffic." },
    { q: "China's e-commerce market is notable because:", choices: ["It's tiny", "It's the world's largest and most penetrated (~47% of retail online), split mainly among Alibaba, JD, and PDD", "Amazon leads it", "It has no ads"], answer: 1, explain: "Roughly 44/24/19 GMV shares for the big 3 (2025), with Douyin livestream commerce compressing everyone's take rates." }
  ],

  sources: [
    { name: "eMarketer: worldwide ecommerce passes $6T; Amazon US share; retail media forecasts", url: "https://www.emarketer.com/content/worldwide-ecommerce-sales-break-6-trillion", feeds: "market size, shares, retail media" },
    { name: "US Census Bureau Quarterly Retail E-Commerce Sales", url: "https://www.census.gov/retail/mrts/www/data/pdf/ec_current.pdf", feeds: "US penetration, growth" },
    { name: "Momentum Works: Temu and Shein GMV trackers", url: "https://thelowdown.momentum.asia/despite-tariffs-temu-and-shein-continue-to-grow/", feeds: "cross-border GMV, de minimis impact" },
    { name: "Mordor Intelligence: China e-commerce market", url: "https://www.mordorintelligence.com/industry-reports/china-ecommerce-market", feeds: "China shares, penetration" }
  ]
};
