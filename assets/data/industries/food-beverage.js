/* Industry Atlas - FOOD & BEVERAGE (full module, research-backed)
 * Anchors: global packaged food ~$3.3T in 2024, vendor 2025 estimates span $2.7T to $3.3T+ (GM Insights, IMARC, Towards FnB, 2025);
 * US private label record $282.8B sales in 2025, +3.3% vs +1.2% for national brands, 21.3% dollar / 23.5% unit share (Circana via PLMA, Jan 2026);
 * Coca-Cola FY2025: organic +5% on +4% price/mix and flat volume, net revenue $47.9B (company release, Feb 2026);
 * Nestle Q1 2025: organic +2.8%, RIG +0.7%, pricing +2.1% on coffee and cocoa actions (Nestle, Apr 2025);
 * PepsiCo Q4 2025: global food volume (2)%, beverages +1%, snack price cuts planned (CNBC, Feb 2026);
 * GLP-1 households cut grocery spending (5.3)% within 6 months, savory snacks (11)%, sweet bakery ~(7)% (Cornell, Journal of Marketing Research, Dec 2025);
 * cocoa futures topped $12,000/ton in late 2024 then fell 40% to 45% in 2025 (StoneX); ICE arabica coffee broke $4/lb for the first time in Feb 2025 after +70% in 2024. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["food-beverage"] = {
  meta: {
    id: "food-beverage", name: "Food & Beverage", sector: "consumer", status: "full",
    tagline: "The world's largest repeat-purchase machine, priced like a bond, suddenly asked secular questions: GLP-1, private label, and $12,000 cocoa.",
    marketSize: { value: 3.3, unit: "$T", asOf: 2024, note: "global packaged food (GM Insights); 2025 vendor estimates range $2.7T to $3.3T+ depending on scope; beverages and foodservice supply add materially more" },
    cagr: { value: 5, range: [4, 6], horizon: "2025-2034" },
    maturity: "mature", cyclicality: 2, capitalIntensity: 3, regulation: 3, disruption: 3
  },
  newsQuery: '(Nestle OR PepsiCo OR "Coca-Cola" OR "packaged food" OR "private label" OR "food inflation" OR "cocoa prices" OR "GLP-1 food")',

  overview: {
    definition: "The food and beverage industry turns farm commodities into branded, shelf-stable, repeat-purchase products: a ~$3T+ global packaged-food market plus beverages, sold through the most contested 40 feet of real estate in commerce, the grocery shelf. It is the original consumer-staples business: everyone buys, weekly, in every economy.",
    howItWorks: [
      "The model is brand rent on top of commodity inputs: buy wheat, cocoa, corn, and milk at market prices, transform them with recipes and marketing into products that command 30% to 55% gross margins, and defend that spread with advertising, shelf placement, and habit. The moat is not the factory (co-manufacturers will run anyone's line); it is the brand's place in a shopper's 40-item weekly autopilot and the distribution muscle that puts it within arm's reach of desire in 200 countries.",
      "Growth decomposes into price and volume, and the split is the sector's tape. From 2021 to 2023 the industry pushed the largest pricing wave in 40 years and volumes barely blinked; by 2025 the mix inverted: Coca-Cola's FY2025 organic growth of 5% was built on 4% price/mix with volume flat, Nestle's Q1 2025 delivered 2.8% organic on just 0.7% real internal growth, and PepsiCo's Q4 2025 food volumes fell (2)%, prompting planned snack price cuts. When price is the only engine, every point of elasticity and every private-label conversion is a tax on the model.",
      "Power in the chain is a three-way negotiation: brands vs retailers vs input markets. Retailers (Walmart, Costco, Aldi, Carrefour) concentrate demand and now run their own brands as strategic P&Ls: US private label hit a record $282.8B in 2025, growing 3.3% against 1.2% for national brands, reaching 21.3% dollar share and 23.5% unit share (Circana/PLMA). Upstream, concentrated origins make inputs violent: cocoa topped $12,000/ton in late 2024 (then gave back 40% to 45% in 2025) and arabica coffee broke $4/lb in early 2025 for the first time ever. Brands sit in the middle, hedged 6 to 12 months out, deciding quarterly whether to price, shrink, or absorb.",
      "The new variable is pharmacology. GLP-1 drugs give diets adherence for the first time: households with a user cut grocery spending 5.3% within 6 months (over 8% for higher-income homes), with savory snacks down 11% and sweet bakery down ~7% (Cornell, Journal of Marketing Research, 2025). The declines land precisely on the industry's highest-margin categories, which is why every major food company now talks protein, portion control, and satiety in the same breath as flavor."
    ],
    history: [
      { era: "1860-1945", title: "Preservation era", text: "Canning, pasteurization, and refrigeration create shelf life; Nestle, Coca-Cola, and Kellogg build the first global food brands on safety and consistency." },
      { era: "1945-1980", title: "Supermarket age", text: "Suburbs, freezers, and TV advertising industrialize the weekly shop; center-store packaged brands become the most reliable profit machines in equities." },
      { era: "1980-2008", title: "Globalization and consolidation", text: "Big Food rolls up categories and exports Western diets to emerging markets; Coca-Cola's franchise-bottler concentrate model becomes the template for capital-light brand economics." },
      { era: "2008-2020", title: "The great fragmentation", text: "Private label surges post-crisis, small brands steal growth on natural/organic, and 3G's zero-based budgeting era peaks then breaks: Kraft Heinz's $15.4B write-down shows cost cuts cannot shrink to greatness." },
      { era: "2021-present", title: "Pricing era and the reckoning", text: "Historic inflation pass-through lifts revenues while volumes stall; cocoa and coffee hit records; private label sets all-time share highs; and GLP-1 drugs open the first credible structural bear case against Big Food." }
    ],
    trends: [
      { title: "Pricing-to-volume handoff", direction: "shift", text: "The 2021-2024 price wave is spent: Coca-Cola grew FY2025 on price/mix with flat volume, PepsiCo is cutting snack prices; the market now pays only for real volume growth." },
      { title: "Private label ratchet", direction: "up", text: "Record 21.3% US dollar share in 2025, growing nearly 3x national brands; retailers treat store brands as strategy, not filler, and Europe (30%+ share) suggests the ceiling is far away." },
      { title: "GLP-1 demand rewiring", direction: "shift", text: "Grocery spend falls 5.3% in user households, concentrated in snacks and confectionery; protein, yogurt, and portioned formats take the flows: a category rotation, possibly a calorie recession." },
      { title: "Input-cost violence", direction: "up", text: "Climate-stressed, origin-concentrated soft commodities (cocoa ~70% from West Africa) now superspike: $12,000/t cocoa and $4/lb coffee forced pricing, shrinkflation, and reformulation at once." },
      { title: "Health-policy escalation", direction: "shift", text: "Additive bans, front-of-pack labeling, marketing curbs, and the ultra-processed food debate move from fringe to legislation; reformulation becomes a permanent cost line." }
    ],
    outlook: "The staples franchise remains formidable: daily repeat purchase, global distribution, and pricing that eventually sticks. But the next decade is a share fight, not a tide: volume growth must be won back from private label at a record 21.3% share, from GLP-1-driven calorie declines in the best-margin aisles, and from input markets that no longer mean-revert politely. Winners will be portfolios weighted to protein, hydration, coffee, and pet, with emerging-market distribution; losers will be undifferentiated center-store brands renting shelf space from increasingly powerful retailers."
  },

  structure: {
    suppliers: [
      { name: "Farmers, co-ops & plantations", note: "Atomized sellers of wheat, milk, cocoa, coffee: price takers who keep ~15 cents of the US food dollar" },
      { name: "Agri-traders & processors (ADM, Cargill, Bunge, Louis Dreyfus)", note: "The ABCD houses: origination, crushing, and logistics between farm and factory" },
      { name: "Ingredient & flavor houses (Givaudan, IFF, Barry Callebaut, Tate & Lyle)", note: "Reformulation's picks and shovels: sweetness, satiety, and taste at industrial scale" },
      { name: "Packaging makers (Ball, Amcor, Tetra Pak)", note: "Cans, films, and cartons: a cost line and a sustainability battleground" }
    ],
    producers: [
      { name: "Global food majors (Nestle, PepsiCo, Mondelez, Unilever, Danone)", note: "Multi-category brand portfolios; Nestle alone sells in nearly every country" },
      { name: "Beverage systems (Coca-Cola, PepsiCo, Keurig Dr Pepper)", note: "Concentrate economics plus franchise bottlers: the sector's best margins" },
      { name: "Protein processors (JBS, Tyson, WH Group)", note: "High-volume, thin-margin, cycle-exposed: the anti-brand end of food" },
      { name: "Private-label manufacturers (TreeHouse class)", note: "Make the retailers' record-setting store brands; brutal economics, structural tailwind" }
    ],
    distributors: [
      { name: "Grocery retail (Walmart, Costco, Kroger, Aldi)", note: "The gatekeepers: shelf space, own brands, and now retail media leverage" },
      { name: "Foodservice distribution (Sysco class)", note: "The away-from-home channel: restaurants, schools, hospitals" }
    ],
    customers: [
      { name: "Households", note: "The weekly shop: the most repeated purchase decision in the economy" },
      { name: "Restaurants & foodservice", note: "Roughly half of US food spending happens away from home" },
      { name: "Convenience & impulse channels", note: "Where beverages and snacks earn their best margins per unit" }
    ],
    regulators: [
      { name: "FDA / USDA (US) & EFSA (EU)", note: "Safety, additives, labeling; the current front: dyes, ultra-processed definitions" },
      { name: "Health & marketing authorities", note: "Sugar taxes, front-of-pack warnings, and child-marketing curbs spreading country by country" },
      { name: "Competition authorities", note: "Mega-deals (Mars-Kellanova ~$36B) now draw real scrutiny" }
    ],
    capital: [
      { name: "Public equity (staples complex)", note: "Bond-proxy investors: dividends, buybacks, and low-beta expectations" },
      { name: "Investment-grade debt", note: "Cheap leverage funds M&A; the sector is a bond market favorite" },
      { name: "Activists & PE", note: "Breakup math (Kellogg's split, Kraft Heinz's 2025 separation) and brand carve-outs" }
    ]
  },

  valueChain: {
    intro: "From a cocoa pod to a checkout scan. Value concentrates where brands and concentrate formulas live; it thins toward the farm and the freight. The shelf is the chokepoint, and the retailer owns it.",
    stages: [
      { id: "farm-inputs", name: "Farm commodities", what: "Grains, dairy, sugar, cocoa, coffee, protein", players: "Millions of farmers; co-ops; plantation groups", valueCapture: 1,
        economics: { grossMargin: [5, 15], capitalIntensity: 4, concentration: 1 },
        linksTo: ["agriculture", "water"],
        deeper: "Atomized sellers meeting concentrated buyers: the farm keeps roughly 15 cents of the US food dollar. Origin concentration is the fragility: ~70% of cocoa from Ivory Coast and Ghana meant one bad harvest cycle sent futures past $12,000/ton in 2024." },
      { id: "trading-ingredients", name: "Trading & ingredients", what: "Origination, crushing, flavors, sweeteners, cocoa processing", players: "ADM, Cargill, Bunge, Barry Callebaut, Givaudan, IFF", valueCapture: 2,
        economics: { grossMargin: [8, 25], capitalIntensity: 3, concentration: 4 },
        linksTo: ["agriculture", "chemicals", "shipping"],
        deeper: "Two species: traders earn volatility (margins thin but capital turns fast), while flavor and ingredient houses earn specification lock-in at 40%+ gross margins. Every reformulation wave (sugar reduction, protein fortification, clean label) is their order book." },
      { id: "branded-manufacturing", name: "Branded manufacturing", what: "Recipes, brands, factories, and marketing", players: "Nestle, PepsiCo, Mondelez, Unilever, Danone, Kraft Heinz", valueCapture: 5,
        economics: { grossMargin: [30, 55], capitalIntensity: 3, concentration: 3 },
        linksTo: ["consumer-goods", "packaging", "media"],
        deeper: "The profit center: brand rent over commodity cost. But the rent is being contested from below (private label at record 21.3% US dollar share) and above (retailer trade terms), which is why the organic-growth split between pricing and real volume is the single most-watched line in staples earnings." },
      { id: "beverage-systems", name: "Beverage systems", what: "Concentrate, franchise bottling, cold distribution", players: "Coca-Cola, PepsiCo, Keurig Dr Pepper, AB InBev", valueCapture: 5,
        economics: { grossMargin: [20, 60], capitalIntensity: 3, concentration: 5 },
        linksTo: ["packaging", "water", "restaurants"],
        deeper: "The concentrate model is the sector's masterpiece: sell syrup at 60%+ gross margins and let franchised bottlers carry the trucks, plants, and coolers at 20%-something margins. Coca-Cola's FY2025 (organic +5%, price/mix +4%, revenue $47.9B) shows the system extracting price even with flat cases." },
      { id: "retail-shelf", name: "Distribution & retail", what: "Warehousing, DSD routes, shelf resets, e-grocery", players: "Walmart, Costco, Kroger, Aldi, Ahold, Amazon", valueCapture: 3,
        economics: { grossMargin: [20, 30], capitalIntensity: 3, concentration: 4 },
        linksTo: ["retail", "ecommerce", "logistics"],
        deeper: "The chokepoint. Retail concentration plus store-brand strategy plus retail media means the shelf now charges rent three ways: margin, trade spend, and advertising. Private label growing 3x national brands (2025) is retailers converting traffic into their own P&L." },
      { id: "foodservice", name: "Foodservice & away-from-home", what: "Restaurants, catering, vending, institutional", players: "Sysco, US Foods, chains and their suppliers", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 2, concentration: 3 },
        linksTo: ["restaurants", "tourism", "logistics"],
        deeper: "Roughly half of food spending in rich markets happens away from home, and it is the higher-beta half: the first line cut in recessions, the first hit by GLP-1 users (restaurant spend fell ~8% within 6 months of adoption). For brands, it is also the sampling engine that builds at-home demand." }
    ]
  },

  financials: {
    businessModel: [
      "Read a food P&L as a spread: net revenue (after trade promotion, the industry's largest hidden discount, often 15% to 25% of gross sales) minus commodity-driven cost of goods equals a 30% to 55% gross margin that funds advertising (5% to 10% of sales), route-to-market, and overhead into a 15% to 20% operating margin at the majors. The organic growth line splits into price/mix and volume (Nestle calls it RIG): the split tells you whether the franchise is compounding or just repricing. Concentrate beverage models sit above the pack; protein processors sit far below it.",
      "Cash economics are the quiet attraction: negative or minimal working capital (consumers pay the retailer before the brand pays the farmer via traders), maintenance-level capex near 3% to 5% of sales, and 90%+ free-cash-flow conversion at the best names, recycled into dividends and M&A. The model's stress points are input superspikes (cocoa at $12,000/t forced chocolate makers to price, shrink, and hedge all at once), trade-spend escalation when share is contested, and the goodwill on the balance sheet: brands bought at 15x to 20x EBITDA get impaired when volumes structurally leak, as Kraft Heinz's $15.4B write-down proved."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 75, capitalIntensity: 40, pricingPower: 55, cyclicality: 20, operatingLeverage: 35 },
    lines: [
      { label: "Organic growth split", note: "Price/mix vs volume (RIG): the sector's tape; volume-led growth earns the premium" },
      { label: "Gross margin vs input basket", note: "Cocoa, coffee, dairy, grain, packaging: hedges lag spot by 6 to 12 months" },
      { label: "Trade spend & A&M", note: "Promotion intensity rises when share is contested: watch it as a share-war gauge" },
      { label: "Market share vs private label", note: "Scanner-data share trends; the 21.3% store-brand record is the benchmark pressure" },
      { label: "FCF conversion & payout", note: "The bond-proxy contract: 90%+ conversion funding dividends and buybacks" }
    ],
    unitEconomics: {
      unit: "per $1.00 of grocery shelf price (illustrative)",
      items: [
        { label: "Farm share", value: "~$0.15", note: "USDA food-dollar series: the farm keeps roughly 15 cents" },
        { label: "Manufacturer net revenue", value: "~$0.55 to $0.65", note: "after retailer margin; trade promotion already netted out" },
        { label: "Manufacturer gross profit", value: "~$0.20 to $0.30", note: "30% to 55% gross margin on net sales, category-dependent" },
        { label: "Advertising & trade spend", value: "~$0.15 to $0.25", note: "the price of shelf position and mental availability: the true rent" }
      ]
    }
  },

  kpiRefs: ["retail-sss", "retail-inventory-turns"],
  kpiLocal: [
    {
      id: "fnb-organic-split", name: "Organic Growth Split (Price vs Volume)", industries: ["food-beverage"],
      definition: "Decomposition of organic revenue growth into price/mix and real volume (RIG in Nestle's language).",
      formula: "Organic growth = price/mix % + volume/RIG %; each reported quarterly by the majors",
      interpretation: "Volume-led growth signals franchise health; price-only growth (Coca-Cola FY2025: +4% price/mix, flat volume) signals elasticity and share risk building. Negative volume with positive pricing is the pre-derating pattern.",
      healthy: "Volume/RIG positive and 1%+ with modest pricing", warning: "Flat-to-negative volume propped by pricing for 4+ quarters" },
    {
      id: "fnb-privatelabel-gap", name: "Private Label Share Gap", industries: ["food-beverage"],
      definition: "Store-brand dollar and unit share in a category vs trend, and the growth gap vs national brands.",
      formula: "PL dollar share (Circana/PLMA); growth gap = PL sales growth minus national-brand growth",
      interpretation: "US store brands hit records in 2025: 21.3% dollar share, 23.5% unit share, growing 3.3% vs 1.2% for brands. A widening gap means the retailer is winning the shelf negotiation and brand pricing power is capped.",
      healthy: "Category PL share stable; brand premium holding", warning: "PL unit share gaining 100bps+ annually in your categories" }
  ],

  health: {
    intro: "Staples health is measured in share and spread: are the brands holding volume without buying it, and is the gross margin surviving the input basket?",
    pillars: [
      { name: "Brand strength & share", weight: 25, metrics: "Scanner share vs private label, household penetration, repeat rates", healthy: "Holding or gaining unit share at a price premium", warning: "Share leaking to store brands; premium narrowing" },
      { name: "Volume-led growth", weight: 20, metrics: "RIG/volume trend, category exposure to GLP-1-sensitive aisles", healthy: "Positive volumes across regions", warning: "Price-only growth; snacking volumes negative" },
      { name: "Input & margin management", weight: 20, metrics: "Gross margin vs commodity basket, hedge coverage, productivity programs", healthy: "Margin flat-to-up through spikes", warning: "Pricing behind cost curve; shrinkflation backlash" },
      { name: "Portfolio & innovation", weight: 20, metrics: "Growth-category mix (protein, coffee, pet, hydration), reformulation pipeline, M&A discipline", healthy: "Portfolio rotating toward demand", warning: "Center-store concentration; goodwill at risk" },
      { name: "Balance sheet & cash", weight: 15, metrics: "Leverage vs IG rating, FCF conversion, dividend cover", healthy: "2x to 3x net debt/EBITDA, 90%+ conversion", warning: "Payout maintained by leverage; impairment cycle" }
    ],
    scoringNote: "In staples, the fatal pattern is slow: 4 to 8 quarters of price-propped growth, then the write-down. Volume tells the truth before the P&L does."
  },

  valuation: {
    intro: "The sector trades as equity bonds: stable multiples on stable cash flows, with the premium reserved for volume-led growers and the discount for melting ice cubes.",
    methods: [
      { name: "EV / EBITDA", use: "The standard cross-sector staples comp", avoid: "Ignoring category mix: chocolate and snacking now carry GLP-1 and cocoa risk", strengths: "Comparable, capital-structure neutral", weaknesses: "Hides trade-spend and impairment risk", range: { low: 10, high: 16, asOf: 2025, note: "beverage systems and pet at the top; legacy center-store at the bottom" } },
      { name: "P/E relative to market", use: "The bond-proxy lens: staples vs S&P premium/discount", avoid: "Absolute reads: the sector re-rates with real rates", strengths: "Long history of mean reversion", weaknesses: "Regime shifts (GLP-1) can make cheap a trap", range: { low: 15, high: 22, asOf: 2025, note: "forward P/E band for global majors" } },
      { name: "DCF on FCF", use: "Franchises with 90%+ conversion and visible reinvestment", avoid: "Terminal-growth flattery on volume-declining brands", strengths: "Matches the annuity-like cash profile", weaknesses: "Small growth-rate changes swing perpetuity value", range: { low: 0, high: 0, asOf: 2025, note: "discipline tool, not a quoted multiple" } },
      { name: "Precedent brand M&A", use: "Sanity check via deal comps (Mars-Kellanova ~$36B class)", avoid: "Assuming every asset gets the strategic premium", strengths: "Real clearing prices for brands", weaknesses: "Synergy math inflates headline multiples", range: { low: 12, high: 20, asOf: 2025, note: "EV/EBITDA paid for scaled brand portfolios" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a food or beverage name fast: normalized EBITDA times a mix-adjusted staples multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.5, max: 30, step: 0.5, value: 8, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 20, step: 0.5, value: 13, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 80, step: 1, value: 20, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays food and beverage as a quality-and-mix trade inside a defensive shell: own the volume-led compounders (beverage systems, coffee, pet, EM distribution), avoid price-propped center-store, and treat the GLP-1 and private-label debates as the sector's live repricing events. The organic split each quarter is the tape; the input basket is the swing factor; the multiple is the rates trade you did not ask for.",
    debates: [
      { topic: "GLP-1: structural calorie recession or manageable rotation?", bull: "A 5.3% grocery-spend cut at today's still-minority adoption is a category rotation, not a collapse: dollars migrate to protein, portioned, and functional formats where margins are fine, and Big Food has monetized every diet wave from low-fat to keto. Food demand is the most adaptive demand in capitalism.", bear: "This is the first diet with pharmacological adherence, and the declines land exactly on the best-margin aisles: savory snacks (11)%, sweet bakery (7)%. Every point of penetration compounds a permanent volume leak in businesses valued as perpetuities: small terminal-growth cuts, large multiple consequences." },
      { topic: "Can brands hold the 2021-2024 pricing, or does private label ratchet it away?", bull: "Elasticities stayed historically tame through the whole wave, brands are re-earning volume with targeted price investment (PepsiCo's snack cuts), and private-label surges have stalled before: after 2008, share gains largely plateaued. Brand equity plus innovation still sets the category's price architecture.", bear: "21.3% dollar share and 23.5% unit share are records, not a cycle: the quality gap has closed, retailers now run store brands as strategy with retail-media data behind them, and Europe's 30%+ share shows the destination. Every trade-down cohort keeps part of the habit; the pricing umbrella is now a target." },
      { topic: "Big Food conglomerates: break them up?", bull: "Focused pure-plays command premium multiples and cleaner capital allocation: Kellogg's split created an acquisition target Mars paid ~$36B for, and Kraft Heinz chose separation in 2025. Activists have the template and the sector has the sprawl: sum-of-parts math finally has receipts.", bear: "Scale is the margin: procurement, retail negotiating leverage, and route-to-market are shared costs that separations duplicate. Spins strand orphan brands with stranded overhead, and the conglomerate discount is usually a growth discount that no ticker split fixes." }
    ],
    cycle: {
      where: "Post-pricing-era digestion: the inflation pass-through is complete, volumes are the scarce commodity, private label sits at record share, input markets (cocoa, coffee) are normalizing off historic spikes, and the GLP-1 demand question is moving from anecdote to data. Defensive multiples, secular questions.",
      drivers: "Food-at-home inflation vs wage growth, soft-commodity harvests (West Africa cocoa, Brazil coffee), GLP-1 adoption and coverage, retailer own-brand strategy, and real rates setting the bond-proxy multiple.",
      leads: [
        "BLS CPI food-at-home vs food-away-from-home spread (FRED, free)",
        "ICE cocoa and arabica coffee futures (free delayed quotes): the gross-margin early warning",
        "Circana/PLMA private-label share prints (free annual and half-year summaries)",
        "Quarterly organic splits at the majors: pricing vs volume/RIG (free releases)",
        "GLP-1 prescription trend summaries (IQVIA data via free press coverage)"
      ]
    },
    exposure: [
      { vehicle: "Beverage systems (Coca-Cola class)", note: "Concentrate margins, franchise capital-lightness: the sector's quality core" },
      { vehicle: "Global food majors (Nestle, PepsiCo, Mondelez class)", note: "Portfolio breadth and EM distribution; watch the volume line, not the EPS line" },
      { vehicle: "Ingredient & flavor houses (Givaudan, IFF, ADM class)", note: "Picks and shovels of the reformulation and protein wave" },
      { vehicle: "Private-label manufacturers (TreeHouse class)", note: "The share-gain pure play: structural tailwind, brutal economics, retailer as boss" },
      { vehicle: "Staples ETFs (XLP class)", note: "The defensive sleeve expressed in one line; heavy mega-cap concentration" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "The organic split: price/mix vs volume is the single number the sector trades on" },
      { when: "February (CAGNY conference)", what: "Guidance, reformulation, and portfolio-move season for the whole staples complex" },
      { when: "Crop cycles (West Africa Oct-Mar, Brazil May-Sep)", what: "Cocoa pod counts and coffee harvests set the input basket 2 quarters out" },
      { when: "Policy dates", what: "FDA additive and labeling rulings, sugar-tax adoptions, GLP-1 insurance-coverage expansions" }
    ],
    data: [
      { series: "CPI food-at-home / food-away-from-home", source: "BLS via FRED (free)", why: "The pricing-power and trade-down backdrop in one spread" },
      { series: "USDA ERS Food Price Outlook", source: "ers.usda.gov (free, monthly)", why: "Forward food-inflation forecasts, category by category" },
      { series: "Cocoa & arabica futures", source: "ICE via free quote services", why: "The gross-margin shock detector: 2024's $12,000/t print led every chocolate P&L" },
      { series: "Private-label share", source: "PLMA/Circana releases (free summaries)", why: "The structural share war, scored annually: $282.8B and 21.3% in 2025" },
      { series: "Company organic splits", source: "issuer press releases (free)", why: "Nestle RIG, Coke price/mix, Pepsi volumes: the primary tape" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Relative outperformance, absolute mediocrity: trade-down accelerates private label and hits mid-tier brands; the ends of the barbell (premium and value) hold. Foodservice-exposed names lag." },
      { regime: "Input-cost spike", behavior: "Hedges buy 2 to 4 quarters, then price-or-shrink decisions land. Concentrate models shrug; chocolate and coffee-heavy P&Ls compress with a lag, then recover pricing over 12 to 18 months." },
      { regime: "Rates rising", behavior: "The bond-proxy derating dominates fundamentals: multiples compress regardless of execution. Own volume growers; avoid leverage-funded payouts." },
      { regime: "Health-policy shock", behavior: "GLP-1 coverage expansion or additive bans hit snacking and confectionery multiples first; ingredient houses and protein-forward portfolios take the offsetting flows." }
    ]
  },

  players: [
    { name: "Nestle", role: "The global food major", country: "CH", real: true, note: "Q1 2025 organic +2.8% (RIG just 0.7%): the pricing-to-volume handoff in one print" },
    { name: "PepsiCo", role: "Snacks-plus-beverages duopolist", country: "US", real: true, note: "Q4 2025 food volume (2)%; cutting snack prices to win units back" },
    { name: "Coca-Cola", role: "The concentrate masterpiece", country: "US", real: true, note: "FY2025 organic +5% on +4% price/mix, flat volume; $47.9B revenue" },
    { name: "Mondelez", role: "Global snacking & chocolate", country: "US", real: true, note: "Ground zero for both the cocoa spike and the GLP-1 snacking debate" },
    { name: "Unilever", role: "Food-and-HPC hybrid in reshaping", country: "GB", real: true, note: "Serial portfolio pruner: ice cream separation follows the focused-pure-play template" },
    { name: "AB InBev", role: "Beer's consolidation endgame", country: "BE", real: true, note: "The leveraged-rollup archetype: volume declines met with premiumization and deleveraging" },
    { name: "JBS", role: "Protein at maximum scale", country: "BR", real: true, note: "The thin-margin, high-cyclicality counterexample to brand economics" },
    { name: "Kraft Heinz", role: "The cautionary tale turned breakup", country: "US", real: true, note: "The $15.4B write-down (2019) and the 2025 split: cost cuts could not replace growth" }
  ],

  geography: [
    { country: "US", role: "Largest profit pool", note: "The scanner-data battleground: private label records, GLP-1 adoption, retail media" },
    { country: "CH", role: "Nestle's home base", note: "Plus the chocolate and coffee heritage cluster" },
    { country: "GB", role: "European brand HQs", note: "Unilever, Diageo class; also Europe's 30%+ private-label lab" },
    { country: "BR", role: "Farm-and-protein superpower", note: "Coffee, sugar, soy, and JBS: the sector's commodity engine room" },
    { country: "CI", role: "Cocoa's chokepoint", note: "Ivory Coast plus Ghana grow ~70% of world cocoa: origin risk made visible in 2024" },
    { country: "CN", role: "The scale prize", note: "The largest grocery market; local brands and formats set a high bar for entrants" }
  ],

  cycles: [
    { year: 1985, title: "New Coke", kind: "shift", text: "Coca-Cola reformulates its flagship and retreats in 79 days. Lesson: brand equity lives in the consumer's head, not the company's lab." },
    { year: 2008, title: "Trade-down wave", kind: "bust", text: "Recession sends shoppers to store brands; private label jumps and only partly gives it back. Lesson: every downturn ratchets private label's floor higher." },
    { year: 2015, title: "The 3G experiment", kind: "shift", text: "Kraft-Heinz merges under zero-based budgeting; margins spike, brands starve, and 2019 brings a $15.4B write-down. Lesson: you cannot cost-cut your way to growth in a share-fight business." },
    { year: 2020, title: "Pantry-loading boom", kind: "boom", text: "COVID moves half of eating back home overnight; center-store brands get a windfall quarter of relevance. Lesson: windfalls mask structural drift; the trends resumed on schedule." },
    { year: 2025, title: "The reckoning year", kind: "shift", text: "Private label sets records ($282.8B, 21.3% share), GLP-1 data lands (grocery spend (5.3)% in user households), and cocoa unwinds from $12,000/t. Lesson: even defensives face secular questions, and the market reprices them fast." }
  ],

  risks: [
    { name: "GLP-1 penetration scaling", severity: 4, likelihood: 3, transmission: "Adoption plus insurance coverage grows -> per-capita calories fall -> volume declines concentrate in snacks and confectionery -> terminal-growth cuts derate staples valued as perpetuities." },
    { name: "Private-label ratchet", severity: 3, likelihood: 4, transmission: "Retailer own-brand strategy plus closed quality gap -> shelf space and unit share shift -> brands escalate trade spend -> mid-tier brands squeezed into irrelevance or M&A." },
    { name: "Input superspikes", severity: 3, likelihood: 4, transmission: "Climate stress on concentrated origins (cocoa, coffee) -> record input costs -> price-or-shrink decisions -> elasticity, shrinkflation backlash, and regulatory attention." },
    { name: "Ultra-processed food regulation", severity: 3, likelihood: 3, transmission: "Additive bans, warning labels, marketing curbs -> forced reformulation cost plus demand shift -> legacy center-store portfolios impaired." },
    { name: "Retailer power concentration", severity: 3, likelihood: 4, transmission: "Walmart/Costco/Aldi share plus retail media -> margin migrates from brand P&L to retail P&L -> brands pay three rents (margin, trade, ads) for the same shelf." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Food and beverage companies buy farm ingredients cheaply, turn them into branded products, and sell them for much more: the difference pays for advertising and profit. It is the steadiest business in the economy because everyone eats, weekly, in good times and bad. The big battle is at the supermarket shelf: famous brands vs the store's own cheaper versions, which just hit a record 21.3% of US grocery dollars."] },
    L2: { title: "Intermediate", text: ["Growth splits into price and volume, and the split matters more than the total: Coca-Cola grew 5% organically in 2025 almost entirely on price/mix with flat volume, and Nestle's real volume growth was just 0.7% in early 2025. Meanwhile inputs turned violent (cocoa above $12,000/ton, coffee above $4/lb) and new weight-loss drugs cut grocery spending 5.3% in user households: the defensive sector suddenly has offense being played against it."] },
    L3: { title: "Advanced", text: ["Analyze the chain by who owns the chokepoint: brands earn 30% to 55% gross margins on commodity inputs, concentrate beverage systems earn more with less capital, and retailers charge three rents (margin, trade spend, retail media) for shelf access. Model the hedge lag: input spikes hit gross margin 6 to 12 months after spot, then pricing recovers it over 12 to 18 months. Watch trade spend as the share-war gauge and treat 4+ quarters of price-propped growth as the pre-impairment pattern (Kraft Heinz wrote down $15.4B learning this)."] },
    L4: { title: "Expert", text: ["The live debates are GLP-1 (rotation vs calorie recession: snack volumes (11)% in user households, landing on the best-margin aisles), the private-label ratchet (records of 21.3% dollar and 23.5% unit share with Europe's 30%+ as the possible destination), and breakup math (Kellogg's split birthed Mars's ~$36B Kellanova deal; Kraft Heinz followed in 2025). Trade the quarterly organic splits, CAGNY guidance, West Africa pod counts, and FDA policy calendar; respect that the multiple is a real-rates trade wearing a defensive costume."] },
    L5: { title: "Institutional", text: ["Allocator's frame: food and beverage is the portfolio's cash-flow ballast, but the ballast now carries basis risk: GLP-1 and private label attack terminal values, not next quarter. Core the volume-led compounders (beverage systems, coffee, pet, EM distribution), fund it by underweighting price-propped center-store, and use the ingredient houses as the reformulation derivative. The repeatable alpha is simple to state and hard to do: buy volume inflections before the multiple believes them, and exit price-only growth before the write-down does it for you."] }
  },

  quiz: [
    { q: "US private label in 2025 reached:", choices: ["5% of grocery dollars", "A record $282.8B and 21.3% dollar share, growing ~3x national brands", "50% of grocery dollars", "Its lowest share in decades"], answer: 1, explain: "Circana/PLMA data: store brands set records in both dollar (21.3%) and unit (23.5%) share, growing 3.3% vs 1.2% for brands." },
    { q: "Coca-Cola's FY2025 organic growth of 5% was driven by:", choices: ["Volume up 5%", "Price/mix (+4%) with volume essentially flat", "New markets", "Currency"], answer: 1, explain: "The pricing-era signature: revenue grows while cases do not. The market now pays a premium only for volume-led growth." },
    { q: "Households with a GLP-1 user cut grocery spending by roughly:", choices: ["0%", "5.3% within 6 months, with savory snacks down 11%", "50%", "They spend more"], answer: 1, explain: "Cornell research in the Journal of Marketing Research (2025): the cuts concentrate in the industry's highest-margin snacking and sweet categories." },
    { q: "Cocoa futures in late 2024:", choices: ["Fell to historic lows", "Topped $12,000/ton, a record, before falling 40% to 45% in 2025", "Were unchanged", "Were banned"], answer: 1, explain: "Origin concentration (Ivory Coast plus Ghana grow ~70%) plus bad harvests produced the superspike; 2025 brought a partial structural rebalancing." },
    { q: "The farm's share of the US food dollar is roughly:", choices: ["75 cents", "15 cents: most value accrues to processing, brands, and retail", "50 cents", "1 cent"], answer: 1, explain: "USDA's food-dollar series: atomized farm sellers meet concentrated buyers, so value concentrates downstream." },
    { q: "The concentrate beverage model is powerful because:", choices: ["It owns all the trucks", "It sells syrup at 60%+ gross margins while franchise bottlers carry the capital", "It avoids advertising", "It has no competitors"], answer: 1, explain: "Coca-Cola's template: capital-light brand economics upstream, capital-heavy bottling franchised out downstream." },
    { q: "Kraft Heinz's $15.4B write-down (2019) taught the sector that:", choices: ["Brands are worthless", "Zero-based cost cutting cannot substitute for volume growth: starved brands impair", "Mergers always work", "Write-downs are illegal"], answer: 1, explain: "The 3G playbook spiked margins short-term while share leaked; the goodwill eventually told the truth. The 2025 breakup completed the arc." },
    { q: "The single most-watched line in staples earnings is:", choices: ["The CEO's salary", "The organic growth split: price/mix vs real volume", "Office costs", "Share count"], answer: 1, explain: "Price-propped growth for 4+ quarters is the classic pre-derating pattern; volume tells the truth before the P&L does." }
  ],

  sources: [
    { name: "PLMA / Circana: 2025 private label record ($282.8B, 21.3% share)", url: "https://www.plma.com/article/us-private-label-industry-reached-2828-billion-sales-2025", feeds: "private-label share" },
    { name: "Coca-Cola Q4 & FY2025 results (organic +5%, price/mix +4%)", url: "https://investors.coca-colacompany.com/news-events/press-releases/detail/1151/coca-cola-reports-fourth-quarter-and-full-year-2025-results", feeds: "pricing vs volume" },
    { name: "Nestle three-month sales 2025 (organic +2.8%, RIG +0.7%)", url: "https://www.nestle.com/media/pressreleases/allpressreleases/three-month-sales-2025", feeds: "organic split, input inflation" },
    { name: "Food Business News: GLP-1 users cut food spending 5.3% (Cornell study)", url: "https://www.foodbusinessnews.net/articles/29532-glp-1-users-cut-food-spending-by-53", feeds: "GLP-1 demand impact" }
  ]
};
