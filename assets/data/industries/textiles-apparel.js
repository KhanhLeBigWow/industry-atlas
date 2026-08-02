/* Industry Atlas - TEXTILES & APPAREL (full module, research-backed)
 * Anchors: global apparel retail ~$1.7T in 2025 (Research and Markets $1.69T, GMI $1.84T);
 * US de minimis exemption ended for China/HK May 2, 2025 and for all countries Aug 29, 2025,
 * statutory repeal 2027 (CNBC, CNN, Morning Consult); 2025 sourcing shift: Vietnam garment
 * exports $37.5B (+10.5%), Bangladesh $38.8B (+0.9%), Cambodia $11.6B (+16.9%), China's
 * global share down to ~27.4% from ~30.1% (Fibre2Fashion, RAPID via The Business Standard);
 * Nike FY2025 revenue $46.3B, (10)%, net income $3.2B, (44)% (Nike IR, June 2025);
 * EU ESPR unsold-goods destruction ban for large firms from July 2026, mandatory separate
 * textile collection from Jan 1, 2025 (European Commission). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["textiles-apparel"] = {
  meta: {
    id: "textiles-apparel", name: "Textiles & Apparel", sector: "consumer", status: "full",
    tagline: "A $1.7T industry where the sewing machine earns pennies and the brand earns the margin: the world's most labor-intensive supply chain, mid-reshuffle.",
    marketSize: { value: 1.7, unit: "$T", asOf: 2025, note: "global apparel retail; estimates run $1.69T to $1.84T depending on footwear/accessories scope (Research and Markets, GMI)" },
    cagr: { value: 5, range: [3, 6], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 3, capitalIntensity: 2, regulation: 3, disruption: 4
  },
  newsQuery: '(Shein OR Temu OR Nike OR Inditex OR Zara OR "fast fashion" OR "garment industry" OR "apparel imports" OR "de minimis" OR "textile recycling")',

  overview: {
    definition: "Textiles and apparel turns fiber into fabric and fabric into the 100B+ garments the world buys each year: a $1.7T retail market (2025) built on a supply chain that runs from cotton fields and petrochemical crackers through Asian sewing floors to the brand and the checkout, where nearly all the profit concentrates.",
    howItWorks: [
      "The chain is a pyramid with the money at the top: fiber (cotton, and increasingly polyester, now roughly 57% of global fiber output per Textile Exchange) is spun into yarn, woven or knitted into fabric, dyed and finished, then cut and sewn into garments by contract manufacturers, mostly in Asia. Brands own almost no factories: Nike, Inditex, and H&M orchestrate thousands of suppliers and capture value through design, brand, and distribution, not production. A garment retailing at $100 typically leaves the factory at a $20 to $25 FOB cost; the sewing itself is a few dollars of labor.",
      "The core financial problem is not making clothes, it is guessing what will sell: fashion demand is unknowable at order time, orders are placed months ahead, and unsold inventory must be marked down or destroyed. Gross margins of 50%+ at brand level exist to absorb markdown risk; inventory discipline IS the P&L. The industry's great business-model innovations are all attacks on this problem: Zara's 2-to-3-week proximity-sourced cycles that chase demand instead of forecasting it, off-price giants (TJX class) that monetize everyone else's mistakes, and Shein's real-time test-and-repeat engine that launches thousands of SKUs daily in tiny batches and reorders only winners.",
      "Ultrafast fashion added a trade-policy turbocharger that just blew up: Shein and Temu built their US model on the de minimis exemption, shipping sub-$800 parcels from Chinese factories duty-free, direct to consumers. Washington ended that for China and Hong Kong on May 2, 2025, then for all countries on August 29, 2025, with statutory repeal set for 2027. Temu stopped shipping US orders direct from Chinese factories, raised prices, and cut its advertising blitz; both platforms scrambled into US warehouses and local fulfillment. Usage dipped, then partially rebounded: the model bent but did not break (Morning Consult, CNBC, 2025).",
      "Sourcing is geopolitics in fabric form: China still leads garment exports but its global share slid to roughly 27.4% in 2025 from 30.1%, as tariffs pushed brands toward China+1. Vietnam's garment exports rose 10.5% to $37.5B in 2025, closing to within $1.3B of Bangladesh, whose exports stalled at $38.8B (+0.9%); Cambodia surged 16.9% to $11.6B (Fibre2Fashion, RAPID). The catch: China moved upstream into yarn, fabric, and trims, so garments sewn in Vietnam or Dhaka often still carry Chinese content: the dependence relocated rather than disappeared."
    ],
    history: [
      { era: "1764-1900", title: "The first industry", text: "The spinning jenny, the power loom, and the mill: textiles is where industrial capitalism began, and where its labor battles started too." },
      { era: "1900-1974", title: "Ready-to-wear and the first offshoring", text: "Standard sizing turns clothing into mass manufacturing; production drifts from New England and Lancashire toward cheaper labor, first the American South, then Asia." },
      { era: "1974-2005", title: "The quota era", text: "The Multi-Fibre Arrangement caps developing-country exports with country quotas, scattering production across dozens of nations; its 2005 expiry unleashes China, which takes over a third of world exports within a decade." },
      { era: "2005-2020", title: "Fast fashion's reign", text: "Zara and H&M compress design-to-rack cycles and globalize the high street; polyester overtakes cotton; the 2013 Rana Plaza collapse (1,134 deaths) forces safety accords and puts the supply chain's human cost on the front page." },
      { era: "2020-present", title: "Ultrafast and the reset", text: "Shein and Temu weaponize de minimis and algorithmic micro-batching; COVID whipsaws inventories; the 2025 de minimis repeal, tariff walls, and EU circularity law begin repricing the entire disposable-clothing model." }
    ],
    trends: [
      { title: "De minimis crackdown", direction: "shift", text: "The May 2025 (China) and August 2025 (global) repeal ended duty-free direct-from-factory parcels: Shein and Temu raised prices and localized fulfillment; the ultrafast cost advantage narrowed but survived." },
      { title: "China+1 sourcing", direction: "shift", text: "Vietnam (+10.5% to $37.5B) and Cambodia (+16.9%) took the orders leaving China in 2025; Bangladesh flatlined at $38.8B; China's upstream grip on fabric and trims keeps the decoupling shallow." },
      { title: "Circularity regulation", direction: "up", text: "EU ESPR bans destroying unsold apparel for large firms from July 2026; separate textile collection became mandatory across the EU on Jan 1, 2025; EPR schemes make brands pay for their waste: compliance is becoming a cost line and a moat." },
      { title: "Synthetics ascendant", direction: "up", text: "Polyester is now roughly 57% of global fiber output (Textile Exchange): cheap, oil-linked, and the reason microplastics and recyclability now sit on regulators' desks." },
      { title: "Legacy brand squeeze", direction: "down", text: "Nike's FY2025 revenue fell 10% to $46.3B and net income dropped 44% as its DTC-first pivot faltered and On/Hoka took running share: even the industry's strongest brand is re-learning wholesale humility." }
    ],
    outlook: "Volume grows low-single-digit with emerging-market wardrobes, but the industry's economics are being re-cut by three forces at once: trade policy (tariffs and the 2027 full de minimis repeal reprice the ultrafast model), regulation (EU circularity rules turn waste into a liability), and the brand cycle (Nike's recovery attempt vs the insurgents). Expect sourcing to keep fragmenting, prices to carry more duty, and the winners to be whoever matches supply to demand fastest: the industry's oldest problem, now with tariffs attached."
  },

  structure: {
    suppliers: [
      { name: "Fiber producers (cotton growers, polyester/chemical majors)", note: "Cotton is a farmed commodity; polyester (~57% of fiber) is petrochemicals in disguise" },
      { name: "Textile mills (spinning, weaving, dyeing/finishing)", note: "The capital-intensive middle: China, India, and Turkey dominate; dyeing is the water and chemistry chokepoint" },
      { name: "Trims, machinery & software (YKK, Shima Seiki, Lectra)", note: "Zippers, knitting machines, and CAD: quiet oligopolies inside a fragmented chain" },
      { name: "Logistics & freight", note: "Ocean for cost, air for speed: ultrafast fashion made parcels a trade-policy issue" }
    ],
    producers: [
      { name: "Contract garment manufacturers (Shenzhou, Crystal, MAS class)", note: "Cut-make-trim at scale; the best have gone vertical from yarn to garment" },
      { name: "Global brands (Nike, adidas, Levi's)", note: "Asset-light orchestrators: design, brand, and sourcing, not factories" },
      { name: "Fast fashion integrators (Inditex, H&M, Fast Retailing)", note: "Retailer-brands that own the demand signal and compress the cycle" },
      { name: "Ultrafast platforms (Shein, Temu)", note: "Algorithmic micro-batch supply chains bolted to social-media demand" }
    ],
    distributors: [
      { name: "Multi-brand retail & department stores", note: "The shrinking legacy channel Nike is now re-embracing" },
      { name: "E-commerce & marketplaces", note: "Brand DTC sites, Amazon, and the Shein/Temu apps: the checkout moved into the feed" },
      { name: "Off-price (TJX, Ross class)", note: "The industry's markdown clearinghouse: they buy everyone's mistakes at cents on the dollar" }
    ],
    customers: [
      { name: "Consumers", note: "Discretionary, trend-driven, and trading down or up with the cycle" },
      { name: "Institutional & workwear buyers", note: "Uniforms, healthcare, military: the stable unglamorous tail" }
    ],
    regulators: [
      { name: "Trade authorities (USTR, CBP, EU DG Trade)", note: "Tariffs, de minimis rules, and forced-labor bans (UFLPA) set the cost map" },
      { name: "EU environmental regime (ESPR, EPR, waste law)", note: "Destruction bans, eco-design rules, and producer-pays waste schemes from 2025-2026" },
      { name: "Labor & safety bodies (ILO, national accords)", note: "Post-Rana Plaza inspection regimes; wage floors move sourcing math" }
    ],
    capital: [
      { name: "Public equity", note: "Brands and retailers trade on comps and margin; manufacturers on order books" },
      { name: "Trade finance & factoring", note: "Letters of credit and receivables finance grease every container" },
      { name: "PE & sponsor capital", note: "Serial buyer of brands and off-price; graveyard of overleveraged mall retail" }
    ]
  },

  valueChain: {
    intro: "From a cotton boll or an oil barrel to a checkout and, increasingly, a recycling bin. Value capture inverts the labor pyramid: the countries that sew capture cents while the brands that design and sell capture the margin.",
    stages: [
      { id: "fibers", name: "Fibers", what: "Cotton, polyester, and specialty fibers", players: "Cotton belt farmers, petrochemical majors, Lenzing", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 3, concentration: 2 },
        linksTo: ["agriculture", "chemicals", "oil-gas"],
        deeper: "Cotton is a weather-and-subsidy commodity; polyester (~57% of global fiber, Textile Exchange) is an oil derivative whose cost curve tracks crude. Xinjiang cotton bans (UFLPA) made fiber provenance a compliance discipline: brands now trace to the bale or risk seizure at the border." },
      { id: "mills", name: "Textile mills", what: "Spinning, weaving, knitting, dyeing, finishing", players: "Chinese, Indian, Turkish mill groups; Toray in technical fabrics", valueCapture: 2,
        economics: { grossMargin: [10, 18], capitalIntensity: 4, concentration: 2 },
        linksTo: ["chemicals", "manufacturing", "water"],
        deeper: "The chain's capital-intensive middle and its environmental chokepoint: dyeing and finishing drive most of the water and chemical load. China dominates here even as garment sewing migrates: fabric is the upstream leverage Beijing kept while exporting the low-margin needle work." },
      { id: "cmt", name: "Garment manufacturing", what: "Cut, make, trim: the sewing floor", players: "Shenzhou, Crystal International, MAS Holdings, thousands of SMEs", valueCapture: 1,
        economics: { grossMargin: [10, 20], capitalIntensity: 2, concentration: 1 },
        linksTo: ["manufacturing", "logistics"],
        deeper: "The most labor-intensive stage in global industry: Bangladesh's RMG sector alone employs ~4M workers. Margins are thin, switching costs low, and power asymmetric: brands cancel, factories eat it (COVID 2020 proved it). The exceptions are vertical champions like Shenzhou, whose yarn-to-garment integration earns manufacturer margins other suppliers only read about." },
      { id: "brands", name: "Brands & design", what: "Design, brand equity, sourcing orchestration", players: "Nike, Inditex, adidas, Levi's, Shein", valueCapture: 5,
        economics: { grossMargin: [45, 62], capitalIntensity: 2, concentration: 3 },
        linksTo: ["luxury", "consumer-goods", "media"],
        deeper: "Where the industry's profit lives: brand converts a $22 FOB garment into a $100 retail sale. But brand heat is mortal: Nike's FY2025 (revenue (10)% to $46.3B, net income (44)%) shows how fast a DTC-first strategy and a cold product line can bleed even the category king, while On and Hoka took running share." },
      { id: "retail", name: "Retail & e-commerce", what: "Stores, DTC sites, marketplaces, off-price", players: "Inditex, TJX, Amazon, department stores, brand DTC", valueCapture: 3,
        economics: { grossMargin: [30, 45], capitalIntensity: 3, concentration: 3 },
        linksTo: ["retail", "ecommerce", "payments"],
        deeper: "The demand-signal owner: Inditex's genius was fusing retail data to a 2-to-3-week supply loop, selling more at full price than anyone. Off-price is the shadow system: TJX-class buyers monetize the industry's forecasting errors, and they get stronger every time everyone else guesses wrong." },
      { id: "circularity", name: "Resale, recycling & waste", what: "Secondhand platforms, collection, fiber-to-fiber recycling", players: "ThredUp, Vinted, charity/exporter networks, nascent recyclers", valueCapture: 2,
        economics: { grossMargin: [30, 60], capitalIntensity: 2, concentration: 2 },
        linksTo: ["waste-management", "retail"],
        deeper: "Regulation is force-feeding this stage into existence: EU-wide separate textile collection since Jan 1, 2025, EPR schemes making brands fund it, and the ESPR ban on destroying unsold clothing from July 2026 (large firms). Resale platforms have scale but thin profits; true fiber-to-fiber recycling is still sub-1% of input: the gap is the opportunity." }
    ]
  },

  financials: {
    businessModel: [
      "Read the industry in three P&L species. Brands: revenue = sell-in or DTC sales; the model is gross margin (50%+) built to fund marketing and absorb markdowns; watch full-price sell-through, inventory-to-sales, and channel mix (Nike's DTC push and retreat is the cautionary tale: Direct fell 13% in FY2025 with digital down 20%). Retailer-integrators (Inditex class): comps and inventory turns are everything; speed substitutes for forecasting. Manufacturers: order-book utilization and labor-cost arbitrage; margins thin except for vertical champions.",
      "The cash cycle is the silent killer: goods are ordered and paid for months before they sell, so working capital balloons exactly when demand disappoints (the 2022 post-COVID glut buried the sector in markdowns). Tariffs and the de minimis repeal now sit directly in COGS: duty at roughly $80 per parcel or ad valorem rates lands on the landed cost line, forcing price increases, absorption, or sourcing shifts. The structural winners run negative-to-low working capital, fast turns, and full-price discipline; the losers financialize their inventory mistakes every Q4."
    ],
    fingerprint: { grossMargin: 52, recurringRevenue: 10, capitalIntensity: 30, pricingPower: 40, cyclicality: 60, operatingLeverage: 55 },
    lines: [
      { label: "Comps / DTC growth", note: "Same-store sales and digital growth: the demand tape" },
      { label: "Gross margin & markdowns", note: "Full-price sell-through vs promotion: where forecasting errors surface" },
      { label: "Inventory & turns", note: "Inventory-to-sales growth spread is the sector's best early warning" },
      { label: "Sourcing & duty costs", note: "FOB inflation, freight, tariffs: the 2025 tariff wall lives here" },
      { label: "Channel mix", note: "DTC vs wholesale vs off-price: margin and brand-control tradeoffs" }
    ],
    unitEconomics: {
      unit: "per $100 retail garment (illustrative)",
      items: [
        { label: "FOB factory cost", value: "$20 to $25", note: "fabric is over half of it; sewing labor $1 to $3" },
        { label: "Landed cost with duty/freight", value: "$25 to $35", note: "tariffs and de minimis repeal push this up post-2025" },
        { label: "Brand/retail gross margin", value: "50% to 60%", note: "funds marketing, stores, markdowns" },
        { label: "Operating margin, brand level", value: "5% to 15%", note: "Inditex sits high teens; distressed retail negative" }
      ]
    }
  },

  kpiRefs: ["retail-inventory-turns", "retail-sss"],
  kpiLocal: [
    {
      id: "txa-fullprice", name: "Full-Price Sell-Through", industries: ["textiles-apparel"],
      definition: "Share of units sold at full price before markdown: the cleanest read on whether supply matched demand.",
      formula: "Full-price units sold / total units sold (proxy: gross margin trend vs plan, markdown reserve)",
      interpretation: "High full-price sell-through means the model is forecasting or reacting well (Zara's edge); collapse means the inventory will be monetized by off-price at cents on the dollar.",
      healthy: "70%+ and stable; gross margin holding through holiday", warning: "Rising promo cadence; inventory growing faster than sales for 2+ quarters"
    },
    {
      id: "txa-sourcing-lead", name: "Sourcing Lead Time", industries: ["textiles-apparel"],
      definition: "Weeks from design commitment to product on shelf: the variable that determines how much demand risk a model carries.",
      formula: "Design freeze date to in-store date, weighted by volume",
      interpretation: "Traditional brands run 6 to 9 months (peak forecast risk); Zara 2 to 3 weeks on reactive lines; Shein days. Shorter lead time converts markdown risk into reorder optionality.",
      healthy: "Falling lead times, rising in-season reorder share", warning: "Long-lead commitments meeting a demand shock (the 2022 glut mechanism)"
    }
  ],

  health: {
    intro: "Brand health is heat plus discipline: strong demand signals, inventory matched to them, and a supply chain that can flex when either changes.",
    pillars: [
      { name: "Brand heat & full-price realization", weight: 25, metrics: "Search/social trends, full-price sell-through, pricing power", healthy: "Waiting lists, low promo cadence", warning: "Rising markdowns, discount-driven traffic (Nike's FY2025 pattern)" },
      { name: "Inventory discipline", weight: 20, metrics: "Inventory vs sales growth, turns, aging", healthy: "Inventory growing slower than sales", warning: "The 2022 signature: inventory +30% on flat sales" },
      { name: "Sourcing resilience", weight: 20, metrics: "Country concentration, tariff exposure, traceability compliance", healthy: "Diversified with dual-sourced fabric; UFLPA-clean provenance", warning: "Single-country dependence meeting a tariff or forced-labor seizure" },
      { name: "Channel economics", weight: 20, metrics: "DTC/wholesale balance, off-price leakage, marketplace exposure", healthy: "Profitable DTC plus healthy wholesale partners", warning: "Forcing DTC at wholesale's expense, then discounting to move volume" },
      { name: "Balance sheet & lease load", weight: 15, metrics: "Net debt, lease obligations, working-capital swing capacity", healthy: "Net cash or low leverage (the Inditex posture)", warning: "Leveraged retail with long leases into a demand downturn" }
    ],
    scoringNote: "Apparel's unforgivable event is the inventory-brand doom loop: overbuy, discount, cheapen the brand, discount more. It takes 2 quarters to enter and 5 years to exit."
  },

  valuation: {
    intro: "The market pays for speed, heat, and discipline: fast-turn integrators and hot brands earn premium multiples; forecast-heavy, promo-dependent models trade like the working-capital risk they are.",
    methods: [
      { name: "EV / EBITDA", use: "Brands and retailers through the cycle", avoid: "Peak-margin years; normalize markdown cycles", strengths: "Standard, captures lease-adjusted operations", weaknesses: "Inventory risk hides off-EBITDA until it lands", range: { low: 6, high: 14, asOf: 2025, note: "off-price and Inditex at the top; challenged mall retail at the bottom" } },
      { name: "Forward P/E", use: "Global sportswear and mega-brands", avoid: "Turnaround stories where E is a guess (Nike's FY2026-27 estimates kept moving)", strengths: "Comparable across the global peer set", weaknesses: "Brand-heat inflections make forward E unstable", range: { low: 12, high: 28, asOf: 2025, note: "premium reserved for compounders with full-price discipline" } },
      { name: "EV / Sales", use: "High-growth DTC, resale platforms, pre-margin ultrafast", avoid: "Mature brands: sales without margin is the industry's oldest trap", strengths: "Works when margins are in transition", weaknesses: "Ignores the markdown machine underneath", range: { low: 0.5, high: 3, asOf: 2025, note: "Shein's private-market marks kept falling toward the low end" } },
      { name: "FCF yield", use: "The discipline test: converts inventory truth into cash truth", avoid: "Single-year reads distorted by working-capital swings", strengths: "Cuts through channel-stuffing and promo accounting", weaknesses: "Capex-light sector flatters everyone in good years", range: { low: 4, high: 8, asOf: 2025, note: "% yield; quality integrators compound at the low end" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an apparel name quickly: normalized EBITDA times a heat-and-discipline-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 12, step: 0.2, value: 3, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 18, step: 0.5, value: 9, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -8, max: 20, step: 0.5, value: 1, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays apparel as a dispersion trade, not a sector bet: long the fast-turn compounders (Inditex class) and the markdown monetizers (off-price), trade brand turnarounds on evidence not narrative, and treat ultrafast as a policy-exposed disruptor whose cost edge is being legislated away in real time. Inventory-to-sales spreads and import data are the tape.",
    debates: [
      { topic: "Shein/Temu after de minimis: broken or merely taxed?", bull: "The edge was never just the duty loophole: it is a demand-sensing supply chain that reorders winners in days. Prices rose, users dipped in May 2025, and rebounded by June; localized US fulfillment rebuilds the economics under the new rules.", bear: "The model monetized a tariff arbitrage that is now gone everywhere (globally since Aug 29, 2025, statutory by 2027): add duty at roughly $80 a parcel or ad valorem rates, US warehousing costs, and rising ad prices, and ultrafast converges toward the fast-fashion economics it was supposed to obsolete: with a falling private-market valuation to prove it." },
      { topic: "Nike: category king rebooting or structural share donor?", bull: "FY2025 was the kitchen sink: revenue (10)% to $46.3B with digital purged of discounting, wholesale relationships restored, and sport-led product back in the pipeline; Q2 FY2026 already inched positive (+1% to $12.4B). Distribution plus brand at this scale mean the recovery is when, not if.", bear: "Net income fell 44%, China keeps declining, Converse is in free fall, and On and Hoka show the moat leaks at the running core: management itself pushed the payoff to 2027. Paying a premium multiple for a turnaround whose proof keeps sliding right is how value traps dress up as blue chips." },
      { topic: "Circularity rules: cost burden or moat for the compliant?", bull: "ESPR destruction bans (July 2026), mandatory collection (Jan 2025), and EPR fees hit the high-waste ultrafast model hardest and reward brands with traceability and durability already built: regulation as a competitive subsidy for quality.", bear: "Compliance costs land on everyone while enforcement lags and secondhand exports keep absorbing the waste; the rules add basis points of cost without changing the consumer's $8-dress preference: margin erosion dressed as virtue." }
    ],
    cycle: {
      where: "Mid-reset: the 2022 inventory glut is digested, but tariffs and the de minimis repeal are inflating landed costs into a value-conscious consumer, sourcing is mid-migration (Vietnam and Cambodia gaining, Bangladesh stalled, China share sliding), and the sector's biggest brand is mid-turnaround: dispersion over direction.",
      drivers: "Consumer discretionary spend, tariff and trade policy, cotton and polyester input costs, freight rates, and the brand-heat rotation.",
      leads: [
        "US apparel import data by country (OTEXA monthly, free): the sourcing-shift tape",
        "Retailer inventory-to-sales spreads from 10-Qs and Census retail inventories (free)",
        "Cotton prices and USDA WASDE updates (free): the natural-fiber cost curve",
        "Apparel CPI vs import price indices (BLS, free): who is eating the tariff",
        "Bangladesh (BGMEA) and Vietnam export releases (free): supplier-country health"
      ]
    },
    exposure: [
      { vehicle: "Fast-turn integrators (Inditex class)", note: "The sector's compounders: speed as a structural margin moat" },
      { vehicle: "Global sportswear (Nike, adidas class)", note: "Brand-heat cyclicals; buy evidence of full-price recovery, not promises" },
      { vehicle: "Off-price retail (TJX class)", note: "Long other people's forecasting errors; counter-cyclical merchandise supply" },
      { vehicle: "Vertical manufacturers (Shenzhou class)", note: "The pick-and-shovel play on brand outsourcing; order-book beta with China risk" },
      { vehicle: "Resale/circularity platforms", note: "Regulatory tailwind, unproven unit economics: optionality sizing only" }
    ],
    catalysts: [
      { when: "Monthly", what: "OTEXA import data: country shares show the tariff response in near-real time" },
      { when: "Quarterly earnings", what: "Inventory vs sales growth and gross-margin guides: the markdown early-warning system" },
      { when: "2026-2027", what: "EU ESPR destruction ban (July 2026) and full US de minimis statutory repeal (2027): structural cost resets" },
      { when: "Holiday season (Nov-Jan)", what: "Full-price vs promo cadence decides the year for most of the sector" }
    ],
    data: [
      { series: "US apparel imports by country", source: "OTEXA / trade.gov (free, monthly)", why: "The sourcing-shift and tariff-response tape" },
      { series: "Cotton prices & supply", source: "USDA WASDE, ICE cotton (free summaries)", why: "Half the cost of a garment starts here or in crude" },
      { series: "Apparel CPI & import prices", source: "BLS (free)", why: "Tariff pass-through vs margin absorption" },
      { series: "Retail inventories & sales", source: "US Census (free, monthly)", why: "The glut-detector: 2022's crash was visible here first" },
      { series: "Garment-country exports", source: "BGMEA, Vietnam customs, WTO stats (free)", why: "Supplier-side confirmation of the China+1 rotation" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Trade-down accelerates: off-price and value chains gain, mid-tier brands get crushed, luxury-adjacent holds. Watch inventory discipline: gluts form in the first two soft quarters." },
      { regime: "Tariff escalation", behavior: "Landed costs jump; winners are diversified sourcers and domestic-inventory holders; ultrafast direct-ship models take the direct hit (the 2025 template)." },
      { regime: "Input-cost spike (cotton/oil)", behavior: "Fiber inflation squeezes mills and manufacturers first, brands 2 to 3 quarters later; pricing power separates compounders from promoters." },
      { regime: "Consumer boom", behavior: "Brand-heat beta leads: sportswear and trend-driven names outperform; discipline erodes last: exit when inventory growth outruns sales." }
    ]
  },

  players: [
    { name: "Inditex (Zara)", role: "Fast-fashion integrator", country: "ES", real: true, note: "The speed model's inventor: ~EUR 38.6B sales FY2024, the sector's margin benchmark" },
    { name: "Nike", role: "Sportswear leader in turnaround", country: "US", real: true, note: "FY2025 revenue $46.3B, (10)%; net income (44)%; Elliott Hill's sport-led reset targets 2027" },
    { name: "Shein", role: "Ultrafast pioneer", country: "SG", real: true, note: "Singapore-domiciled, China supply chain; ~$38B 2024 revenue per press reports; de minimis repeal hit its core arbitrage" },
    { name: "PDD Holdings (Temu)", role: "Ultrafast marketplace", country: "CN", real: true, note: "Halted direct-from-China US shipping after May 2025; pivoted to US warehouses and local sellers" },
    { name: "H&M", role: "Fast-fashion incumbent", country: "SE", real: true, note: "The squeezed middle: undercut by Shein below, out-executed by Zara above" },
    { name: "Fast Retailing (Uniqlo)", role: "Apparel-as-basics giant", country: "JP", real: true, note: "LifeWear over trend: Asia's most valuable apparel company by design" },
    { name: "TJX", role: "Off-price king", country: "US", real: true, note: "Monetizes the industry's forecasting errors; strengthens every markdown cycle" },
    { name: "Shenzhou International", role: "Vertical manufacturer", country: "CN", real: true, note: "Yarn-to-garment for Nike/adidas/Uniqlo: the rare supplier with real margins" }
  ],

  geography: [
    { country: "CN", role: "Largest producer, moving upstream", note: "Garment share sliding (~27.4% in 2025) but fabric, trims, and machinery grip intact" },
    { country: "VN", role: "The share winner", note: "2025 garment exports $37.5B (+10.5%); 21.5% of US apparel imports; FTA-rich and moving upmarket" },
    { country: "BD", role: "The stalled giant", note: "$38.8B exports (+0.9%) in 2025; ~4M RMG workers; cost leader losing momentum to Vietnam and Cambodia" },
    { country: "IN", role: "Fiber-to-fashion full stack", note: "Cotton, mills, and garments; the perennial next-big-sourcing-base" },
    { country: "US", role: "Largest single consumer market", note: "Sets the trade-policy weather: de minimis repeal and tariffs re-priced the import map" },
    { country: "ES", role: "Fast fashion's capital", note: "Inditex's Arteixo HQ: proximity sourcing from Spain, Portugal, Morocco, Turkey powers the speed loop" }
  ],

  cycles: [
    { year: 2005, title: "Quota expiry", kind: "shift", text: "The Multi-Fibre Arrangement ends; China's share of world garment exports explodes within a decade. Lesson: trade rules, not costs alone, draw the sourcing map." },
    { year: 2013, title: "Rana Plaza", kind: "bust", text: "A Dhaka factory collapse kills 1,134 garment workers making clothes for Western brands; safety accords and audit regimes follow. Lesson: the supply chain's hidden costs eventually invoice the brands." },
    { year: 2020, title: "COVID cancellations", kind: "bust", text: "Brands cancel billions in orders mid-production; suppliers and workers absorb it; e-commerce share leaps. Lesson: asymmetric contracts transmit shocks down the chain until regulation or reputation pushes back." },
    { year: 2022, title: "The great glut", kind: "bust", text: "Post-COVID overordering meets a spending shift to services: inventories balloon 30%+ and markdowns torch a year of margin. Lesson: in apparel, the inventory line is the truth and the sales line is the story." },
    { year: 2025, title: "De minimis repeal", kind: "shift", text: "Washington ends duty-free parcels from China (May 2) then everywhere (Aug 29); Temu drops direct-from-factory shipping, prices rise, sourcing re-routes. Lesson: business models built on a customs exemption are policy trades wearing supply chains." }
  ],

  risks: [
    { name: "Tariff and trade escalation", severity: 4, likelihood: 4, transmission: "New tariffs or de minimis enforcement -> landed costs jump -> price hikes into a value-driven consumer -> volume and margin compress simultaneously." },
    { name: "Inventory/demand shock", severity: 4, likelihood: 3, transmission: "Demand rolls after long-lead orders are placed -> gluts -> markdowns -> brand cheapening -> the 2022 doom loop replays." },
    { name: "Forced-labor and human-rights enforcement", severity: 3, likelihood: 3, transmission: "UFLPA-style seizures or a Rana Plaza-scale event -> supply halts and reputational fallout -> emergency re-sourcing at premium cost." },
    { name: "Climate and fiber-supply disruption", severity: 3, likelihood: 3, transmission: "Drought or flood hits cotton belts -> fiber prices spike -> mill and manufacturer margins squeeze -> brand COGS inflation 2 to 3 quarters later." },
    { name: "Circularity compliance costs", severity: 2, likelihood: 4, transmission: "EPR fees, destruction bans (EU, July 2026), and eco-design rules -> per-unit costs rise -> high-waste fast-turn models lose the most, laggards face fines and shelf bans." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Clothing is a $1.7T global business where almost nothing is made by the brand on the label: cotton or polyester becomes fabric, mostly in Asia, and workers sew it into garments for a few dollars each. The brand and the store capture most of the price you pay. The industry's biggest problem is guessing what will sell: unsold clothes get discounted, shipped to off-price chains, or (until new EU rules) destroyed."] },
    L2: { title: "Intermediate", text: ["The economics: a $100 garment leaves the factory at $20 to $25; brand gross margins of 50%+ exist to fund marketing and absorb markdown risk. The great innovations attack forecasting error: Zara's 2-to-3-week reactive cycles, off-price monetizing mistakes, and Shein's test-and-reorder algorithm. Trade policy is a first-order variable: the 2025 end of de minimis duty-free parcels forced Shein and Temu to raise prices and localize, while tariffs pushed sourcing from China (share down to ~27.4%) toward Vietnam (+10.5% to $37.5B) and Cambodia."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: brands on full-price sell-through and channel mix, integrators on comps and turns, manufacturers on order books and labor arbitrage. The inventory-to-sales spread is the sector's best early warning (it flagged the 2022 glut). Sourcing analysis must look upstream: garments sewn in Vietnam still carry Chinese fabric, so tariff exposure hides in the bill of materials. Nike's FY2025 (revenue (10)%, net income (44)%) is the case study in how channel strategy errors compound brand-heat loss."] },
    L4: { title: "Expert", text: ["Trade the dispersion: monthly OTEXA import shares for the sourcing rotation, Census inventory spreads for the markdown cycle, and full-price cadence for brand inflections. Live debates: whether ultrafast survives the loss of its customs arbitrage (global repeal Aug 2025, statutory 2027), whether Nike's 2027-dated recovery is evidence or hope, and whether EU circularity rules (destruction ban July 2026, EPR fees) are a cost or a moat. Respect the asymmetry: brand-heat losses take quarters to show and years to reverse."] },
    L5: { title: "Institutional", text: ["Allocator's frame: apparel is a working-capital business wearing a consumer-discretionary label: the compounders (Inditex, TJX class) win by structurally shrinking forecast risk, not by predicting fashion. Core them, trade brand turnarounds on full-price evidence, and treat ultrafast and resale as policy-exposed optionality. The 2025-2027 window reprices the whole chain: tariffs and de minimis repeal hit landed costs, EU circularity law hits waste economics, and sourcing keeps fragmenting. Every thesis reduces to one question: who matches supply to demand fastest, at the lowest markdown, under the new rules."] }
  },

  quiz: [
    { q: "Of a $100 retail garment, the factory (FOB) cost is typically:", choices: ["$60 to $70", "$20 to $25: the brand and retail layers capture most of the value", "$45 to $50", "$5 or less"], answer: 1, explain: "Sewing labor itself is only $1 to $3; design, brand, and distribution capture the margin: the value pyramid inverts the labor pyramid." },
    { q: "The US de minimis exemption that powered Shein and Temu:", choices: ["Was expanded in 2025", "Ended for China/HK on May 2, 2025 and for all countries that August, with statutory repeal set for 2027", "Applies only to luxury goods", "Was never used by e-commerce"], answer: 1, explain: "Duty-free sub-$800 parcels were the ultrafast model's cost edge; Temu stopped direct-from-China US shipping and both platforms raised prices and localized fulfillment." },
    { q: "In 2025 sourcing data, the country closing fastest on Bangladesh was:", choices: ["Mexico", "Vietnam: exports +10.5% to $37.5B vs Bangladesh's nearly flat $38.8B", "Turkey", "Indonesia"], answer: 1, explain: "Vietnam narrowed the gap to $1.3B while Cambodia surged 16.9%; China's global share slid to ~27.4%: the China+1 rotation in one table (Fibre2Fashion, RAPID)." },
    { q: "Nike's fiscal 2025 delivered:", choices: ["Record profits", "Revenue down 10% to $46.3B and net income down 44%: the price of a DTC-first pivot meeting cold product", "Flat results", "20% growth"], answer: 1, explain: "Digital fell 20% and Direct 13%; Elliott Hill's turnaround re-embraced wholesale and sport-led product, with payoff guided to 2027." },
    { q: "Zara's structural edge is:", choices: ["The lowest prices", "A 2-to-3-week proximity-sourced cycle that reacts to demand instead of forecasting it", "Owning cotton farms", "Celebrity marketing"], answer: 1, explain: "Speed converts markdown risk into reorder optionality: Inditex sells more at full price than peers, which is the whole margin story." },
    { q: "The dominant fiber in global textile production today is:", choices: ["Cotton", "Polyester: roughly 57% of output, an oil derivative (Textile Exchange)", "Wool", "Linen"], answer: 1, explain: "Synthetics' rise made apparel partly a petrochemical business and put microplastics and recyclability on the regulatory agenda." },
    { q: "From July 2026, large companies selling in the EU:", choices: ["Must make all clothing locally", "May no longer destroy unsold apparel and footwear under the ESPR", "Face no textile rules", "Must use only cotton"], answer: 1, explain: "Paired with mandatory separate textile collection (Jan 1, 2025) and EPR fees, EU law is turning unsold inventory from a quiet write-off into a regulated liability." },
    { q: "The 2013 Rana Plaza collapse mattered because:", choices: ["It had no consequences", "1,134 workers died making clothes for Western brands, forcing safety accords and audit regimes on the whole chain", "It only affected local firms", "It happened in a cotton field"], answer: 1, explain: "The disaster priced in the supply chain's hidden human costs: inspection accords, buyer codes, and traceability expectations date from it." }
  ],

  sources: [
    { name: "Nike FY2025 fourth quarter and full year results (Nike IR, June 2025)", url: "https://investors.nike.com/investors/news-events-and-reports/investor-news/investor-news-details/2025/NIKE-Inc--Reports-Fiscal-2025-Fourth-Quarter-and-Full-Year-Results/default.aspx", feeds: "brand financials" },
    { name: "CNBC: end of the de minimis exemption (Aug 2025)", url: "https://www.cnbc.com/2025/08/29/retail-impact-de-minimis-exemption-ends-globally.html", feeds: "trade policy" },
    { name: "Fibre2Fashion: Vietnam-Bangladesh sourcing dynamics (2025 export data)", url: "https://www.fibre2fashion.com/news/international-textiles-trade-news/evolving-sourcing-dynamics-and-the-vietnam-bangladesh-rivalry-310658-newsdetails.htm", feeds: "sourcing/exports" },
    { name: "European Commission: Ecodesign for Sustainable Products Regulation (ESPR)", url: "https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/ecodesign-sustainable-products-regulation_en", feeds: "regulation" }
  ]
};
