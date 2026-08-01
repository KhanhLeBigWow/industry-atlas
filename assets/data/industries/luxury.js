/* Industry Atlas - LUXURY (full module, research-backed)
 * Anchors: personal luxury goods EUR 364B (2024) easing to ~EUR 358B (2025E), a (2)% erosion,
 * per Bain & Company / Altagamma Luxury Market Monitor (Nov 2025); luxury customer base shrank
 * from ~400M (2022) to ~330M (2025) with ~50M aspirational buyers priced out after 20%+ price
 * hikes since 2021, and ~80% of 2024 growth came from price, not volume (Bain); mainland China
 * contracted again in 2025, (3)% to (5)% after a sharp 2024 drop (Bain China monitor); LVMH FY2025
 * revenue EUR 80.8B, (5)% reported / (1)% organic, Fashion & Leather Goods EUR 37.8B at (5)% organic
 * with operating profit (13)% (LVMH release, Jan 2026); Hermes FY2025 revenue EUR 16B, +9% constant
 * FX, 41% operating margin (Hermes release, Feb 2026); Kering FY2025 organic (3)% with Gucci (10)%
 * (Kering release); Richemont jewellery maisons +8% to EUR 15.3B FYMar2025, +24% in the June 2025
 * quarter (Richemont). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["luxury"] = {
  meta: {
    id: "luxury", name: "Luxury", sector: "consumer", status: "full",
    tagline: "Selling scarcity at 70% gross margins: the only consumer business where raising the price raises the desire, until 2024 proved there is a limit.",
    marketSize: { value: 390, unit: "$B", asOf: 2025, note: "personal luxury goods ~EUR 358B (Bain-Altagamma 2025E); the broader luxury economy incl. cars, hospitality, wine ~EUR 1.5T" },
    cagr: { value: 4, range: [2, 6], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 4, capitalIntensity: 2, regulation: 2, disruption: 3
  },
  newsQuery: '(LVMH OR Hermes OR Kering OR Gucci OR Richemont OR "luxury goods" OR "personal luxury")',

  overview: {
    definition: "The luxury industry converts craftsmanship, heritage, and engineered scarcity into the highest sustained pricing power in the consumer economy: handbags, watches, jewelry, fashion, and beauty sold at 65% to 75% gross margins by a handful of mostly French, Italian, and Swiss houses, several still family-controlled after a century.",
    howItWorks: [
      "The product is the brand, not the object. A leather handbag that costs a few hundred dollars to make retails for $3,000 to $12,000 because the maison has spent decades (Hermes: nearly two centuries) building a story of craft, exclusivity, and social signaling that no factory can replicate. That intangible moat shows up as 65% to 75% gross margins and, at the very top, Hermes's 41% operating margin (FY2025): software economics on stitched leather.",
      "Scarcity is manufactured deliberately. The best houses cap production below demand (Hermes waitlists, Rolex allocation), keep distribution in their own stores, never discount, and destroy or rework unsold stock rather than let it hit an outlet. Volume restraint is the price of pricing power: the houses that chased volume (logo-heavy 2010s Gucci) got the boom and then the bust, while the houses that rationed supply compound through every cycle.",
      "The industry consolidated into conglomerates that run portfolios of maisons: LVMH (~75 brands, EUR 80.8B revenue in FY2025), Kering, and Richemont, alongside independent fortresses Hermes, Chanel, and Rolex. The conglomerate model shares back-office scale, real estate muscle, and media buying while keeping each brand's creative identity separate. Family control is the norm, not the exception: Arnault, Pinault, Rupert, the Hermes family, and the Wertheimers control the equity, so strategy runs on decades.",
      "Demand rides wealth creation, not GDP. Chinese nationals drove roughly a third of global demand at peak; when China's property-led wealth effect cracked, mainland personal luxury contracted in both 2024 and 2025 ((3)% to (5)% in 2025 per Bain). Meanwhile the industry's own 20%+ price hikes since 2021 pushed out ~50M aspirational customers, shrinking the client base from ~400M (2022) to ~330M (2025). The result is a market of EUR 358B (2025E) that is flat to down for the first sustained stretch since 2009, and a brutal divergence: Hermes grew 9% while Gucci fell 10% in the same year."
    ],
    history: [
      { era: "1837-1946", title: "The founders' workshops", text: "Hermes (1837), Louis Vuitton (1854), Chanel (1910): saddlers, trunk-makers, and couturiers serving European aristocracy build the heritage stories the industry still monetizes." },
      { era: "1947-1986", title: "Licensing and dilution", text: "Postwar houses license their names onto everything from ties to ashtrays; Cardin and Gucci nearly destroy themselves. The lesson that distribution control IS the brand gets learned the hard way." },
      { era: "1987-2000", title: "The conglomerate era", text: "Bernard Arnault assembles LVMH from a distressed textile group; PPR (Kering) and Richemont follow. Licenses are bought back, stores go direct, and luxury becomes an investable industry." },
      { era: "2001-2019", title: "The China supercycle", text: "Chinese consumers go from ~1% of global demand to ~33%: the greatest customer-creation event in consumer history. Megabrands, flagship arms races, and daigou gray markets define the era." },
      { era: "2020-present", title: "Boom, elevation, reckoning", text: "COVID crushes 2020, then revenge spending and stimulus produce record 2021-2023. Brands hike prices 20%+ ('elevation'), then China slumps and aspirational buyers walk: 2024-2025 is the first real test of the pricing-power era." }
    ],
    trends: [
      { title: "The great divergence", direction: "shift", text: "One market, opposite outcomes: Hermes +9% constant FX with a 41% margin in FY2025 while LVMH's Fashion & Leather Goods fell (5)% organic and Gucci fell (10)%. Brand heat, not category exposure, now decides the P&L." },
      { title: "Aspirational exodus", direction: "down", text: "~50M customers priced out since 2022 (Bain); the base shrank from ~400M to ~330M. Entry-price buyers funded ~half of industry revenue: their exit caps volume just as price fatigue caps price." },
      { title: "China demand reset", direction: "down", text: "Mainland personal luxury contracted (3)% to (5)% in 2025 after a sharp 2024 drop: two straight down years, with stabilization signs only from Q3 2025. Emerging markets (Gulf, India, SEA, LatAm) now match mainland China at ~EUR 45B combined." },
      { title: "Hard luxury over soft", direction: "shift", text: "Jewelry was 2025's standout category (+4% to 6% globally); Richemont's jewellery maisons grew 8% to EUR 15.3B then +24% in the June 2025 quarter. Buyers want tangible, store-of-value objects over logo fashion." },
      { title: "Resale and authentication", direction: "up", text: "The secondary market (Vestiaire, RealReal, watch platforms) turned luxury into a quasi-asset class: resale values now feed back into primary pricing power (Birkins trade above retail) and expose the brands whose products depreciate." }
    ],
    outlook: "A two-speed industry exiting a two-year downcycle. Bain expects stabilization then modest recovery into 2026, but the easy era is over: 80% of 2024 growth was price, and that lever is spent. The winners' playbook is now volume-light, craft-heavy, top-client-focused (Hermes, Cartier); the losers must win back the aspirational middle they fired. Watch China's Q3 2025 stabilization, Gucci's Demna-era relaunch, and whether US demand (the 2025 bright spot) survives tariffs. Structurally, wealth concentration still compounds faster than GDP: the customer base shrinks, but it gets richer."
  },

  structure: {
    suppliers: [
      { name: "Tanneries & exotic skins", note: "Calf, crocodile, ostrich: the best are being bought outright by Hermes, LVMH, Chanel to lock supply" },
      { name: "Diamonds, gold & gemstones (mining chain)", note: "Cartier and Tiffany sit atop the precious-materials complex; provenance rules tighten" },
      { name: "Italian & French artisan workshops", note: "Thousands of family ateliers in Tuscany and the Marche make 'Made in Italy' possible; brands are consolidating them" },
      { name: "Swiss movement makers & silk/textile mills", note: "ETA, Sellita movements; Como silk, Biella wool: deep craft monopolies feed the maisons" }
    ],
    producers: [
      { name: "LVMH", note: "EUR 80.8B FY2025, ~75 maisons: the conglomerate benchmark, currently digesting a Fashion & Leather Goods downturn" },
      { name: "Hermes", note: "EUR 16B FY2025, +9% constant FX, 41% operating margin: the scarcity model's proof case" },
      { name: "Kering", note: "Gucci-dependent, organic (3)% FY2025 and a net loss on restructuring: the turnaround story" },
      { name: "Richemont, Chanel, Rolex, Prada", note: "Hard-luxury champion, private fortress, watch king, and the Miu Miu-fueled outperformer" }
    ],
    distributors: [
      { name: "Directly operated stores (DTC)", note: "The channel: 70%+ of megabrand sales; flagship real estate doubles as marketing" },
      { name: "Travel retail & department store concessions", note: "Airports and Galeries Lafayette-class hosts; wholesale keeps shrinking by design" }
    ],
    customers: [
      { name: "VICs and HNW clients", note: "The top ~2% of clients can drive 30%+ of a megabrand's sales; private salons, art fairs, and yachts court them" },
      { name: "Aspirational middle class", note: "~half of industry revenue at peak; ~50M of them exited after the 2021-2024 price hikes: the demand question of the decade" },
      { name: "Chinese nationals & tourists", note: "Roughly a third of global demand at peak; where they shop (mainland vs Japan vs Europe) swings regional prints" }
    ],
    regulators: [
      { name: "Customs & trade authorities", note: "Tariffs (US 15% on EU goods, 2025), import duties, and daigou crackdowns move demand across borders" },
      { name: "CITES & sustainability regimes", note: "Exotic-skin permits, EU due-diligence and anti-waste laws (France bans destroying unsold luxury)" },
      { name: "IP & anti-counterfeit enforcement", note: "The industry's existential legal front: counterfeits are a $500B+ shadow economy" }
    ],
    capital: [
      { name: "Family holding companies", note: "Arnault's Agache/Christian Dior SE, Pinault's Artemis, the Hermes family pact: control capital with 30-year horizons" },
      { name: "Public equity", note: "LVMH, Hermes, Richemont, Kering anchor European indices; Hermes trades like a luxury asset itself (~50x earnings)" },
      { name: "M&A war chests", note: "Brands are bought, rarely built: Tiffany went to LVMH for $15.8B (2021), the largest luxury deal ever" }
    ]
  },

  valueChain: {
    intro: "From a crocodile farm to a waitlist. The physical chain is short; the value chain is almost entirely intangible: the brand layer captures most of the economics, and the houses have spent 30 years vertically integrating both ends to protect it.",
    stages: [
      { id: "materials", name: "Raw materials & skins", what: "Leathers, exotics, gold, diamonds, silk", players: "Heng Long (LVMH), Hermes-owned tanneries, De Beers chain", valueCapture: 2,
        economics: { grossMargin: [20, 35], capitalIntensity: 3, concentration: 3 },
        linksTo: ["mining", "agriculture", "textiles-apparel"],
        deeper: "Scarce inputs are being locked up: Hermes owns tanneries and crocodile farms, LVMH bought its exotic-skin chain, Chanel buys silk mills. Provenance (conflict diamonds, animal welfare) is now a brand-risk input, not just a cost." },
      { id: "craft", name: "Ateliers & manufacturing", what: "Cutting, stitching, assembly, watchmaking", players: "In-house ateliers, Tuscan workshops, Swiss manufactures", valueCapture: 2,
        economics: { grossMargin: [15, 30], capitalIntensity: 3, concentration: 2 },
        linksTo: ["manufacturing", "textiles-apparel"],
        deeper: "An Hermes artisan trains 2 years and makes one bag at a time: capacity grows ~6% to 7% a year by design, which IS the scarcity engine. The Italian subcontractor base is fragmented and aging; brands are consolidating it for control and compliance." },
      { id: "brand", name: "The maison (brand & design)", what: "Creative direction, collections, IP, pricing", players: "LVMH, Hermes, Kering, Chanel, Richemont maisons", valueCapture: 5,
        economics: { grossMargin: [65, 75], capitalIntensity: 2, concentration: 4 },
        linksTo: ["media", "consumer-goods"],
        deeper: "Where the economics live: the gap between $600 of cost and $6,000 of price is brand equity. A hot creative cycle (Gucci 2015-2019) can double a brand's revenue; a cold one halves it. The 2025 creative-director merry-go-round (Demna to Gucci, new hands at Chanel, Dior, Versace) is the industry re-rolling its dice." },
      { id: "retail", name: "Distribution & flagships", what: "Directly operated stores, e-commerce, travel retail", players: "Brands' own networks; DFS, department-store hosts", valueCapture: 4,
        economics: { grossMargin: [55, 70], capitalIntensity: 3, concentration: 3 },
        linksTo: ["retail", "ecommerce", "real-estate", "tourism"],
        deeper: "DTC control is the post-licensing religion: own the store, own the price, own the client data, never discount. Flagships on Bond Street and Canton Road are marketing that pays rent; LVMH and Chanel now simply buy the buildings. Wholesale is deliberately starved to kill the markdown channel." },
      { id: "engagement", name: "Marketing & clienteling", what: "Shows, ambassadors, VIC programs, media", players: "Maisons + fashion media, celebrity complex", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 2 },
        linksTo: ["media", "entertainment"],
        deeper: "Luxury spends ~10% of sales making products feel unbuyable: couture shows that lose money, ambassadors who cost millions, private dinners for top clients. Clienteling apps quietly turned sales associates into private bankers for handbags: the top 2% of clients get the scarce goods first." },
      { id: "resale", name: "Secondary market & services", what: "Resale, authentication, repair, aftercare", players: "Vestiaire Collective, The RealReal, watch platforms, brands' own repair ateliers", valueCapture: 3,
        economics: { grossMargin: [30, 45], capitalIntensity: 1, concentration: 2 },
        linksTo: ["ecommerce", "retail"],
        deeper: "Resale reprices the primary market in real time: Birkins and Daytonas trading above retail advertise scarcity; logo bags trading at (60)% expose weak brands. Brands ambivalently embrace it (certified pre-owned watches) because residual value has become part of the purchase math." }
    ]
  },

  financials: {
    businessModel: [
      "The model is price over volume, forever. Revenue = (small, controlled) units x (relentlessly rising) price/mix; the P&L carries 65% to 75% gross margins, ~10% of sales in marketing, and heavy but productive flagship opex. Operating margins run ~20% for good houses, ~30% for great ones, 41% for Hermes (FY2025). Working capital is the quiet tell: luxury inventory appreciates (leather, watches, spirits age well), so the houses carry it patiently rather than discount.",
      "Cash conversion is superb: capital intensity is modest (stores, some ateliers), M&A is the main use of cash, and the families pay themselves dividends through control structures. The cycle risk is operational deleverage: when volume drops, flagship rents and atelier payrolls do not, so a (5)% organic decline became a (13)% operating-profit decline at LVMH's Fashion & Leather Goods in FY2025. The 2021-2024 'elevation' experiment showed the model's edge and its limit: ~80% of 2024 growth was price, and the customer base paid for it by shrinking ~70M."
    ],
    fingerprint: { grossMargin: 70, recurringRevenue: 25, capitalIntensity: 30, pricingPower: 85, cyclicality: 60, operatingLeverage: 70 },
    lines: [
      { label: "Organic revenue growth by division", note: "The tape: price/mix vs volume, and Fashion & Leather Goods above all" },
      { label: "Regional splits (Asia ex-Japan, US, Europe, Japan)", note: "Chinese cluster demand moves across geographies; read nationalities, not borders" },
      { label: "Operating margin by maison", note: "The divergence metric: Hermes 41% vs turnaround brands near breakeven" },
      { label: "Retail network & same-store productivity", note: "Sales per store and per sqm: elevation means fewer, bigger, richer stores" },
      { label: "Inventory & provisions", note: "Rising inventory plus a no-discount policy: watch for write-downs at weak brands" }
    ],
    unitEconomics: {
      unit: "per iconic leather handbag (illustrative)",
      items: [
        { label: "Production cost (materials + labor)", value: "~$500 to $800", note: "full-grain leather, ~15 to 20 artisan hours" },
        { label: "Retail price", value: "$3,000 to $12,000+", note: "up 20%+ since 2021 across megabrands" },
        { label: "Gross margin", value: "~70% to 80%", note: "before ~10% of sales in marketing and rich flagship opex" },
        { label: "Resale value (icons)", value: "80% to 130% of retail", note: "Birkin-class pieces trade above retail; weak logos fetch 30% to 40%" }
      ]
    }
  },

  kpiRefs: ["retail-sss", "retail-inventory-turns"],
  kpiLocal: [
    {
      id: "lux-price-mix", name: "Price/Mix vs Volume Split", industries: ["luxury"],
      definition: "Decomposition of organic growth into like-for-like price increases and mix versus actual unit volume.",
      formula: "Organic growth = price/mix contribution + volume contribution (disclosed or inferred from ASP moves)",
      interpretation: "Healthy luxury growth is balanced. Bain estimates ~80% of 2024 industry growth was price: a warning that volume (the customer base) was already shrinking beneath record revenue.",
      healthy: "Volume flat-to-up with steady low single-digit price", warning: "Price-only growth; volume declines masked by hikes"
    },
    {
      id: "lux-client-funnel", name: "Client Base Breadth", industries: ["luxury"],
      definition: "Size and mix of the active customer base: top clients (VICs) versus aspirational entry-price buyers.",
      formula: "Active clients by tier; share of revenue from top 1% to 2% of clients",
      interpretation: "The industry's base fell from ~400M (2022) to ~330M (2025) as ~50M aspirational buyers were priced out (Bain). Over-reliance on VICs concentrates revenue and stalls the recruitment engine that feeds future top clients.",
      healthy: "Growing entry-tier recruitment alongside VIC spend", warning: "Shrinking base with rising VIC concentration"
    }
  ],

  health: {
    intro: "Brand heat is the balance sheet. A maison's health is measured in desirability (waitlists, full-price sell-through, resale premiums) long before it shows up in revenue, and in customer-funnel breadth long before it shows up in margin.",
    pillars: [
      { name: "Brand heat & desirability", weight: 30, metrics: "Waitlists, full-price sell-through, resale premium/discount, search and social momentum", healthy: "Demand rationed, resale at or above retail", warning: "Markdown pressure via gray channels, resale at deep discounts" },
      { name: "Pricing power & mix", weight: 20, metrics: "Like-for-like price realization vs volume, ASP trajectory", healthy: "Balanced price and volume growth", warning: "Price-only growth (the 2024 pattern) or outright price resistance" },
      { name: "Customer funnel breadth", weight: 20, metrics: "Active client count, entry-tier recruitment, VIC concentration, nationality mix", healthy: "Broad recruitment plus deepening VIC spend", warning: "Base shrinking while top-client share climbs past ~35%" },
      { name: "Distribution control", weight: 15, metrics: "DTC share, wholesale exposure, gray-market leakage, store productivity", healthy: "70%+ DTC, no discounting, rising sales/sqm", warning: "Wholesale dependence, daigou arbitrage, outlet creep" },
      { name: "Balance sheet & control", weight: 15, metrics: "Net cash/debt, family control stability, creative succession", healthy: "Net cash, settled governance, planned creative transitions", warning: "Leveraged M&A hangovers, succession vacuums, revolving-door designers" }
    ],
    scoringNote: "Weights favor desirability because everything else is downstream of it: a hot brand fixes its own P&L, and a cold one cannot cost-cut its way back to heat. Gucci's (10)% FY2025 on top of a (23)% FY2024 is the case study."
  },

  valuation: {
    intro: "The market prices luxury like the assets its products have become: scarce, compounding, and wildly dispersed. Quality compounders trade at software multiples; turnarounds trade at food-retail multiples, in the same sector, in the same year.",
    methods: [
      { name: "Forward P/E", use: "The sector's common tongue: megacaps with clean earnings", avoid: "Turnarounds with restructuring noise (Kering's FY2025 net loss)", strengths: "Comparable, long history of sector bands", weaknesses: "Hides the divergence: one multiple, two industries", range: { low: 15, high: 55, asOf: 2025, note: "Kering-class turnarounds near the low; Hermes ~50x, priced as a permanent compounder" } },
      { name: "EV / EBIT", use: "Cross-conglomerate comparison where lease accounting muddies EBITDA", avoid: "Brands mid-network-restructuring", strengths: "Captures the operating-margin divergence directly", weaknesses: "Cyclical margin troughs flatter the multiple", range: { low: 10, high: 30, asOf: 2025, note: "LVMH mid-teens in the 2025 trough; Hermes at a structural premium" } },
      { name: "DCF on brand cash flows", use: "The compounders: century-old demand, visible reinvestment, net cash", avoid: "Creative-cycle-dependent brands where 5-year cash flows are a guess", strengths: "Values what the market actually owns: a perpetual royalty on wealth creation", weaknesses: "Terminal assumptions do all the work at 50x starting multiples", range: { low: 0, high: 0, asOf: 2025, note: "qualitative: small WACC or growth tweaks swing fair value 30%+" } },
      { name: "EV / Sales (M&A and brand deals)", use: "Acquisitions and pre-recovery brands where margin is temporarily broken", avoid: "Healthy megabrands (it understates margin quality)", strengths: "The deal currency: LVMH paid $15.8B for Tiffany (~4x sales, 2021)", weaknesses: "Ignores how hard margin repair actually is", range: { low: 1, high: 6, asOf: 2025, note: "distressed brands ~1x to 2x; trophy assets 4x+" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a luxury house: revenue times an operating margin that reflects brand heat, times an EV/EBIT multiple that reflects how permanent the market thinks that heat is, minus net debt.",
      inputs: [
        { id: "vc-rev", label: "Revenue ($B)", min: 1, max: 100, step: 1, value: 18, fmt: "money" },
        { id: "vc-margin", label: "Operating margin (%)", min: 5, max: 45, step: 1, value: 22, fmt: "pct" },
        { id: "vc-mult", label: "EV / EBIT multiple", min: 8, max: 35, step: 0.5, value: 16, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -15, max: 30, step: 1, value: 0, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats luxury as a wealth-effect compounder with a creative-cycle overlay: core the scarcity franchises (Hermes-class) that ration supply and own their clients, trade the conglomerates on China and margin inflections, and touch turnarounds only on evidence of brand heat, never on valuation alone. The 2024-2025 downcycle reframed the sector: pricing power is no longer assumed, it is audited, print by print.",
    debates: [
      { topic: "Is the pricing-power era over?", bull: "Elevation overshot, but the model is intact: the wealthy keep getting wealthier, icons still command waitlists, and the houses that priced with discipline (Hermes +9% in FY2025) never lost volume. A 2-year digestion after a 20%+ price reset is normal, not structural.", bear: "~50M customers walked and 80% of 2024 growth was price: the industry cannibalized its own funnel. Entry-tier buyers were tomorrow's VICs; firing them caps the 2030s client base, and Bain's own language ('betrayed' clients) says the social contract cracked. The next decade's growth must come from volume the industry no longer recruits." },
      { topic: "Hermes at ~50x earnings: compounder or priced for perfection?", bull: "A 41% margin, +9% growth through the industry's worst year since 2009, production capped by artisan training, demand capped by nothing: it is the closest thing equities offer to a perpetual royalty on global wealth. Scarcity assets deserve scarcity multiples.", bear: "50x on EUR 16B of revenue prices decades of flawless execution and assumes the Birkin premium is a law of nature. Any wobble (a China VIC downturn, a succession stumble, resale prices rolling) compresses the multiple faster than earnings can grow into it. Quality is real; the entry price is the risk." },
      { topic: "China: cyclical trough or structural decline?", bull: "Two down years reflect property-market wealth destruction and confidence, not fallen desire: Bain flags stabilization from Q3 2025, the savings pool is enormous, and the Chinese middle class is still growing. Every prior China scare (2013 anti-graft, 2015) preceded a boom.", bear: "This one is different: property (70% of household wealth) faces a decade-long workout, common-prosperity politics discourage flaunting, and Gen Z buys experiences and guochao domestic brands. Chinese nationals may never again be a third of global demand, and no other region recruits customers at that speed: the Gulf and India together are one mainland China, at best." }
    ],
    cycle: {
      where: "Bottoming: 2 consecutive down/flat years (EUR 364B in 2024 to ~EUR 358B in 2025E, the first sustained contraction since 2009), China stabilizing from Q3 2025, US resilient, and a sector-wide creative reset (new designers at Gucci, Chanel, Dior) that will show in 2026 collections. Recovery is consensus for 2026; its slope is not.",
      drivers: "Wealth effects (equities, property, crypto) over GDP; Chinese consumer confidence; currency and tourist-flow arbitrage (yen weakness moved billions of spend to Japan); the creative-director cycle; and the price/volume balance after elevation.",
      leads: [
        "Swiss watch export statistics (FH, monthly, free): the sector's oldest high-frequency demand proxy",
        "China NBS retail sales and consumer confidence (monthly, free)",
        "LVMH quarterly organic growth by division (the sector bellwether, reported first)",
        "Bain-Altagamma Luxury Market Monitor (spring and fall, free press releases)",
        "Resale price indices for icon bags and watches (platform data, free summaries): real-time brand heat"
      ]
    },
    exposure: [
      { vehicle: "LVMH", note: "The diversified proxy: 75 maisons, every category and region: sector beta with an Arnault premium-discount debate" },
      { vehicle: "Hermes", note: "The scarcity pure-play: highest quality, highest multiple, lowest cyclicality: size for the valuation, not the business" },
      { vehicle: "Richemont", note: "Hard-luxury exposure: Cartier and Van Cleef ride the jewelry-over-fashion shift (+24% in the June 2025 quarter)" },
      { vehicle: "Kering", note: "The turnaround option: Gucci's Demna era and a new CEO: convex if brand heat returns, value-trap risk if not" },
      { vehicle: "Luxury ETFs (Amundi S&P Global Luxury class)", note: "Basket exposure across the divergence; includes autos and spirits adjacents" }
    ],
    catalysts: [
      { when: "Jan/Apr/Jul/Oct", what: "LVMH reports first: its organic print sets the sector tape for the quarter" },
      { when: "Lunar New Year & Golden Week", what: "The China demand reads: mainland vs Hainan vs Japan spend mix" },
      { when: "Spring & fall", what: "Bain-Altagamma monitor updates: the industry's official scoreboard" },
      { when: "Fashion weeks & debut collections (2026)", what: "Demna's Gucci, new Chanel and Dior eras hit stores: the creative reset's verdict" }
    ],
    data: [
      { series: "Swiss watch exports by market", source: "Federation of the Swiss Watch Industry (free, monthly)", why: "High-frequency, nationality-level luxury demand proxy since 1885" },
      { series: "China retail sales, gold & jewelry category", source: "NBS China (free, monthly)", why: "The mainland demand pulse" },
      { series: "Company quarterly releases (LVMH, Hermes, Kering, Richemont)", source: "company IR sites (free)", why: "Organic growth by division and region: the primary tape" },
      { series: "Bain-Altagamma Luxury Market Monitor", source: "bain.com press releases (free)", why: "Market sizing, customer-base counts, category splits" },
      { series: "Japan tourist arrivals & duty-free spend", source: "JNTO (free, monthly)", why: "Tracks the yen-driven Chinese spend migration" }
    ],
    playbook: [
      { regime: "Recession / wealth shock", behavior: "Luxury falls with asset prices, not payrolls: watch equity and property drawdowns. VIC spend holds; aspirational spend vanishes first. Quality names de-rate less and recover first (2009, 2020 pattern)." },
      { regime: "China stimulus / confidence turn", behavior: "The highest-beta upside in the sector: mainland-exposed names (Richemont, LVMH) re-rate on the first credible confidence data, months before revenue confirms." },
      { regime: "Dollar strength / FX swings", behavior: "Translation hits EUR reporters, but flows matter more: currency gaps re-route Chinese spend (weak yen made Japan the 2024 boom market). Watch pricing-harmonization moves." },
      { regime: "Tariffs / trade friction", behavior: "US 15% tariffs (2025) test pricing power on the strongest market: strong brands pass it through, weak ones eat it. Watch for US price hikes and mix shifts as the tell." }
    ]
  },

  players: [
    { name: "LVMH", role: "Conglomerate benchmark", country: "FR", real: true, note: "EUR 80.8B FY2025, (1)% organic; Fashion & Leather Goods EUR 37.8B fell (5)% organic, operating profit (13)%" },
    { name: "Hermes", role: "Scarcity pure-play", country: "FR", real: true, note: "EUR 16B FY2025, +9% constant FX, 41% operating margin: the divergence's winning pole" },
    { name: "Kering", role: "Turnaround conglomerate", country: "FR", real: true, note: "Organic (3)% FY2025, Gucci (10)%; Demna's Gucci and CEO de Meo carry the 2026 recovery bet" },
    { name: "Richemont", role: "Hard-luxury champion", country: "CH", real: true, note: "Jewellery maisons +8% to EUR 15.3B (FY Mar 2025), then +24% in the June 2025 quarter" },
    { name: "Chanel", role: "Private fortress", country: "GB", real: true, note: "Wertheimer-owned, ~$19B revenue class; the most aggressive price-elevator of 2021-2024" },
    { name: "Rolex", role: "Watch king", country: "CH", real: true, note: "Private, Geneva-based, ~$10B+ class; allocation lists made steel sports watches a parallel currency" },
    { name: "Prada Group", role: "The outperformer", country: "IT", real: true, note: "Miu Miu's breakout made Prada the rare soft-luxury grower through the 2024-2025 slump" },
    { name: "Moncler", role: "Focused independent", country: "IT", real: true, note: "Single-category discipline (luxury outerwear) with conglomerate-grade margins; perennial M&A speculation" }
  ],

  geography: [
    { country: "FR", role: "The conglomerate capital", note: "LVMH, Hermes, Kering, Chanel's ateliers: luxury is France's aerospace" },
    { country: "IT", role: "The manufacturing heart", note: "Tuscan leather, Brianza furniture, Prada, Moncler: 'Made in Italy' is the industry's factory floor" },
    { country: "CH", role: "Watches and Richemont", note: "Geneva and the Jura arc: Rolex, Patek, Cartier's movements; FH export data is the sector's tape" },
    { country: "US", role: "Largest single market", note: "The 2025 bright spot: domestic demand grew while Europe and Asia sagged; now the tariff test case" },
    { country: "CN", role: "The swing customer", note: "Roughly a third of global demand at peak; two down years (2024-2025), stabilizing from Q3 2025" },
    { country: "JP", role: "The arbitrage market", note: "Yen weakness made Tokyo the world's luxury discount mall in 2024; tourist flows reversed as FX normalized" }
  ],

  cycles: [
    { year: 1987, title: "Arnault assembles LVMH", kind: "shift", text: "A distressed-textile financier takes over Louis Vuitton Moet Hennessy and invents the luxury conglomerate. Lesson: brands are bought, rarely built: control of heritage is the scarcest asset." },
    { year: 1997, title: "Asia crisis ends the Japan era", kind: "bust", text: "Japan, briefly ~half of global luxury demand, deflates with its bubble; the industry learns its first single-nationality concentration lesson. Lesson: every luxury supercycle has one buyer at its center, until it does not." },
    { year: 2009, title: "GFC, then the China rescue", kind: "bust", text: "Personal luxury contracts ~8% in the crisis, then China's stimulus-fed middle class powers a decade of growth. Lesson: luxury tracks wealth creation, and the next wealth wave can come from a new continent." },
    { year: 2021, title: "Revenge spending & elevation", kind: "boom", text: "Post-COVID demand explodes; brands hike prices 20%+ and record margins follow. Lesson: a demand windfall spent on price instead of clients borrows growth from the future." },
    { year: 2024, title: "The aspirational exodus", kind: "shift", text: "China slumps, ~50M priced-out customers exit, and the market posts its weakest stretch since 2009 while Hermes grows through it. Lesson: pricing power is a brand-by-brand fact, not an industry entitlement." }
  ],

  risks: [
    { name: "China structural demand decline", severity: 4, likelihood: 3, transmission: "Property wealth workout + guochao preferences -> Chinese cluster spend permanently below peak -> a third of demand re-based -> conglomerate margins and multiples reset lower." },
    { name: "Aspirational base erosion hardens", severity: 4, likelihood: 4, transmission: "Elevated prices + resale alternatives -> entry-tier buyers never return -> recruitment funnel to future VICs breaks -> volume growth structurally capped." },
    { name: "Creative miss at a megabrand", severity: 4, likelihood: 3, transmission: "Cold designer cycle (the Gucci template: (23)% then (10)%) -> full-price sell-through drops -> gray-market discounting -> brand equity and margin spiral that takes 3 to 5 years to repair." },
    { name: "Tariffs and trade fragmentation", severity: 3, likelihood: 4, transmission: "US 15% tariffs on EU goods (2025) -> price hikes into the strongest market -> demand tests + FX distortions re-route flows -> regional margin volatility." },
    { name: "Succession and key-person risk", severity: 3, likelihood: 2, transmission: "Founder-controlled groups (Arnault is 76) -> succession uncertainty -> strategy drift or family discord -> conglomerate discounts widen and M&A logic unravels." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Luxury companies sell handbags, watches, and jewelry for 5x to 10x what they cost to make, and customers happily pay because the brand signals taste and status. The trick is scarcity: the best houses (Hermes, Rolex) deliberately make fewer items than people want, never discount, and keep waitlists. A few French, Italian, and Swiss families control most of the industry, and the market is about EUR 358B a year (2025)."] },
    L2: { title: "Intermediate", text: ["The economics: 65% to 75% gross margins, price-over-volume forever, and distribution the brands own outright. Demand follows wealth creation, not GDP: Chinese buyers drove the 2010s supercycle, and their 2024-2025 pullback ((3)% to (5)% in 2025) plus 20%+ price hikes that expelled ~50M aspirational customers produced the first sustained contraction since 2009. Read organic growth by division, the price/volume split, and regional flows: nationalities matter more than borders."] },
    L3: { title: "Advanced", text: ["Analyze brand by brand, not sector-wide: FY2025 had Hermes at +9% constant FX with a 41% margin and Gucci at (10)% in the same market. The levers are brand heat (waitlists, full-price sell-through, resale premiums), funnel breadth (VIC concentration vs entry-tier recruitment), and operating leverage (flagship rents and ateliers turn a (5)% revenue dip into a (13)% profit dip, per LVMH's Fashion & Leather Goods). Hard luxury (jewelry, +4% to 6% in 2025) is out-compounding soft; resale prices are the real-time truth serum."] },
    L4: { title: "Expert", text: ["Trade the wealth-effect beta and the creative cycle: LVMH's print sets the quarterly tape, Swiss watch exports and Japan duty-free data give the monthly pulse, and the Bain-Altagamma monitor sets the official scoreboard. Live debates: whether elevation permanently broke the aspirational funnel (80% of 2024 growth was price), whether Hermes's ~50x multiple can survive any wobble, and whether Chinese demand ever returns to a third of the market. The 2026 creative resets (Demna's Gucci, new Chanel and Dior) are the sector's binary catalysts."] },
    L5: { title: "Institutional", text: ["Allocator's frame: luxury is a levered claim on global wealth concentration with family-controlled governance and century-length brand duration: core the scarcity franchises as perpetual royalties, own the conglomerates for cycle beta, and price turnarounds as options on creative heat. The structural questions are funnel math (a ~330M and shrinking client base vs ever-richer VICs) and China's re-basing; the structural comfort is that no industry converts inequality into cash flow more efficiently. Position sizing should respect that multiples here embed permanence, and permanence is exactly what 2024-2025 called into question."] }
  },

  quiz: [
    { q: "Personal luxury goods in 2025 (Bain-Altagamma) were roughly:", choices: ["EUR 358B, down ~2% after EUR 364B in 2024: the first sustained contraction since 2009", "EUR 1.5T and growing 10%", "EUR 100B", "EUR 700B, up 5%"], answer: 0, explain: "The EUR 1.5T figure is the broader luxury economy (cars, hotels, wine); personal goods eased from EUR 364B to ~EUR 358B in 2025." },
    { q: "The 'aspirational exodus' refers to:", choices: ["VICs switching brands", "~50M entry-tier customers priced out after 20%+ hikes since 2021, shrinking the base from ~400M to ~330M", "Chinese tourists visiting Japan", "Designers leaving Kering"], answer: 1, explain: "Bain's customer-base math is the decade's key risk: entry buyers fund ~half of revenue and become tomorrow's top clients." },
    { q: "In FY2025 the divergence read:", choices: ["Every house declined equally", "Gucci +9%, Hermes (10)%", "Hermes +9% constant FX at a 41% margin while Gucci fell (10)% and LVMH's F&LG fell (5)% organic", "Only watches grew"], answer: 2, explain: "Same market, opposite outcomes: brand heat and pricing discipline, not category or geography, decided the P&L." },
    { q: "Roughly what share of 2024 industry growth came from price increases (Bain)?", choices: ["20%", "50%", "None", "About 80%: volume was already shrinking beneath record revenue"], answer: 3, explain: "Price-only growth is the sector's warning flag: it flattered revenue while the customer base contracted." },
    { q: "Mainland China's personal luxury market in 2025:", choices: ["Grew 15%", "Contracted (3)% to (5)%, its second straight down year, stabilizing from Q3", "Was banned", "Overtook the US"], answer: 1, explain: "The property-led wealth shock and confidence slump re-based the decade's growth engine; emerging markets (~EUR 45B combined) now match it." },
    { q: "Hermes caps production because:", choices: ["Regulators require it", "It cannot find leather", "Scarcity IS the pricing power: artisan capacity grows ~6% to 7% a year by design, keeping demand rationed", "Its stores are too small"], answer: 2, explain: "Rationed supply, waitlists, and no discounts are the model: the restraint produces the 41% margin, not despite it." },
    { q: "Hard luxury outperformed in 2025 because:", choices: ["Fashion got cheaper", "Buyers favored jewelry's tangible, store-of-value character: Richemont's jewellery maisons hit +24% in the June 2025 quarter", "Watches were discounted", "Gold prices fell"], answer: 1, explain: "Jewelry grew an estimated 4% to 6% globally while soft luxury contracted: objects with residual value won the downcycle." },
    { q: "A (5)% organic revenue decline at LVMH's Fashion & Leather Goods became a (13)% operating profit decline because:", choices: ["Currency effects", "Fraud", "Tax changes", "Operating deleverage: flagship rents and atelier payrolls are fixed, so lost volume falls straight through the P&L"], answer: 3, explain: "High fixed-cost glamour cuts both ways: the same leverage that made 2021-2023 margins record-setting amplifies the downturn." }
  ],

  sources: [
    { name: "Bain & Company / Altagamma Luxury Market Monitor (Nov 2025)", url: "https://www.bain.com/about/media-center/press-releases/20252/global-luxury-stays-resilient-despite-economic-headwinds-and-shifting-consumer-trends-that-reshape-marketbain--company-and-altagamma/", feeds: "market size, customer base, category splits" },
    { name: "Bain: The 2025 Chinese Personal Luxury Goods Market", url: "https://www.bain.com/insights/the-2025-chinese-personal-luxury-goods-market/", feeds: "China demand" },
    { name: "LVMH FY2025 results (Jan 2026)", url: "https://www.lvmh.com/en/publications/solid-performance-in-a-disrupted-global-economic-and-geopolitical-environment", feeds: "conglomerate financials" },
    { name: "Hermes International FY2025 results (Feb 2026)", url: "https://finance.yahoo.com/news/herm-international-2025-full-results-070000439.html", feeds: "margins, divergence" }
  ]
};
