/* Industry Atlas - CONSUMER GOODS (full module, research-backed)
 * Anchors: P&G FY2025 organic sales +2%, split evenly between price and
 * volume, net sales ~$84B (P&G IR, Jul 2025); Unilever FY2025 underlying
 * sales +3.5% (1.5% volume, 2.0% price), turnover EUR 50.5B, (3.8%) on FX
 * and disposals, Q4 +4.7% with 2.8% volume (Unilever, Feb 2026); L'Oreal
 * FY2025 sales EUR 44.05B, +4.0% like-for-like, China beauty market roughly
 * flat with its first quarterly growth in 2 years (~+3% in Q3 2025)
 * (L'Oreal Finance, Feb 2026; Business of Fashion); US private label CPG
 * sales $330B in 2025, 24% of food & beverage dollar share, +3.3% vs +1.2%
 * for national brands (Circana/PLMA, 2026); Dollar Tree record 102M
 * households with 6.5M net adds in Q4, ~60% of new shoppers from $100K+
 * households; Dollar General FY comps +3% (company reports via Retail
 * Dive/PYMNTS, late 2025/early 2026). Market sizing is definitional:
 * narrow packaged-goods counts run ~$2.3T while the broadest FMCG
 * definitions reach $14T+ (Global Growth Insights, SkyQuest, 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["consumer-goods"] = {
  meta: {
    id: "consumer-goods", name: "Consumer Goods", sector: "consumer", status: "full",
    tagline: "Brands bought weekly by billions: the 4-year pricing supercycle just ran out, and now every P&L must pass the volume test.",
    marketSize: { value: 7, unit: "$T", asOf: 2025, note: "definitional midpoint, disclosed as such: narrow packaged-goods estimates run ~$2.3T while the broadest FMCG definitions reach $14T+ (2025); this module covers household, personal care, and beauty brands, with food & beverage profiled separately" },
    cagr: { value: 3.5, range: [2, 5], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 2, capitalIntensity: 2, regulation: 2, disruption: 3
  },
  newsQuery: '("Procter & Gamble" OR Unilever OR "consumer staples" OR "private label" OR FMCG OR "consumer goods" OR "brand pricing")',

  overview: {
    definition: "Consumer goods companies design, brand, and distribute the products households buy on repeat: detergent, shampoo, razors, skincare, diapers, cleaning spray. The physical product is cheap to make; the business is the brand in the shopper's head and the distribution that puts it within arm's reach of most of humanity.",
    howItWorks: [
      "The model is brand rent collected in pennies. A branded manufacturer earns 40% to 60% gross margins on products that cost cents to make, then reinvests roughly 10% of sales into advertising and another large slice into trade spend (payments to retailers for shelf space and promotions). The moat is psychological and logistical at once: decades of advertising build habit and trust, while distribution muscle puts the product in millions of outlets. Pricing power is real but measured in pennies: a few cents per unit, multiplied across billions of weekly purchases, is what moves these P&Ls.",
      "The manufacturer-retailer bargain defines the industry's power balance. Walmart, Costco, Amazon, and the discounters aggregate demand, charge for shelf access, and run their own house brands as a permanent negotiating chip. That chip has never been bigger: US private label CPG sales hit a record $330B in 2025, taking 24% of retail food and beverage dollar share and growing 3.3%, nearly 3x the 1.2% growth of national brands (Circana). Club retailers alone drove about half of private label's growth. Every price increase a brand takes widens the gap private label can undercut.",
      "From 2021 to 2024 the industry ran a pricing supercycle: input-cost inflation was passed through in double-digit price increases while volumes quietly fell, and organic growth looked healthy on price alone. That engine has now run out. P&G's fiscal 2025 organic growth slowed to 2%, split evenly between price and volume, on net sales of roughly $84B (P&G IR, July 2025). Unilever's 2025 underlying sales grew 3.5%, with 1.5% from volume and 2.0% from price, and its Q4 accelerated to 4.7% with 2.8% from volume (Unilever, February 2026). The market now pays for volume-led growth: price-only growth is read as borrowed time.",
      "Geography and the value-premium split tell the rest of the story. China, the sector's growth engine for 2 decades, stalled: the Chinese beauty market was roughly flat in 2025, posting its first quarterly growth in 2 years (~3% in Q3), while local C-beauty brands took share in mass segments (L'Oreal, BoF). Meanwhile US demand bifurcated: premium brands priced 25%+ above average gained about 1 point of share, even as dollar stores boomed: Dollar Tree reached a record 102M shopper households, adding 6.5M in a single quarter, with roughly 60% of new shoppers coming from households earning over $100K. The same consumer buys premium serum and $1.25 dish soap."
    ],
    history: [
      { era: "1837-1929", title: "Soap and scale", text: "P&G, Colgate, and Lever Brothers turn commodity soap into branded, wrapped, advertised products; mass production meets mass media (radio soap operas are literally named for the sponsor)." },
      { era: "1931-1979", title: "The brand management era", text: "Neil McElroy's 1931 P&G memo invents brand management: one manager, one brand, run as a business. TV advertising and the supermarket create the golden age of the national brand." },
      { era: "1980-2007", title: "Globalization and the retailer's rise", text: "Multinationals push into emerging markets while Walmart and the hypermarkets consolidate the checkout; category management, slotting fees, and scanner data shift power toward the shelf's owner." },
      { era: "2008-2019", title: "Value wars and the 3G shock", text: "Recession trade-down boosts private label; zero-based budgeting (the 3G playbook) strips costs and, eventually, brand equity; DTC insurgents like Dollar Shave Club (bought for $1B in 2016) prove distribution moats can be flanked online." },
      { era: "2020-present", title: "Pricing supercycle and the volume test", text: "COVID hoarding, then historic input inflation passed through as price; volumes sag, private label hits a record $330B and 24% US share, dollar channels absorb trade-down, and by FY2025 P&G's organic growth is down to 2%: the price engine is out of fuel." }
    ],
    trends: [
      { title: "Volume is the new proof", direction: "shift", text: "After 4 years of price-led growth, investors now discount pricing and pay for volume: P&G FY2025 organic +2% split evenly, Unilever Q4 2025 at +4.7% with 2.8% volume was rewarded precisely because volume led." },
      { title: "Private label's record run", direction: "up", text: "$330B of US sales and 24% dollar share in 2025, growing ~3x national brands, with club retailers driving about half the gain: quality perception has caught up with price advantage." },
      { title: "The value-channel migration", direction: "shift", text: "Dollar Tree added 6.5M households in a quarter (102M total), ~60% of new shoppers from $100K+ households; Dollar General comps +3%: trade-down is now a middle-and-upper-income behavior." },
      { title: "Retail media taxes the brand", direction: "up", text: "Retailers monetize their shopper data by selling ads back to the brands on their shelves; trade spend migrates into retail media networks, raising the true cost of distribution." },
      { title: "China: local brands rewrite beauty", direction: "shift", text: "The Chinese beauty market went roughly flat (first quarterly growth in 2 years only by Q3 2025), and C-beauty brands took mass-segment share: multinationals' growth premium there has compressed." }
    ],
    outlook: "Steady but re-based: global beauty growing 4.5% to 5% and broader FMCG value growth in the low single digits, with the mix shifting from price to volume. The winners will be brands that fund innovation and advertising heavily enough to justify their price gaps versus a structurally stronger private label, while rebuilding volume in a bifurcated consumer landscape. China stabilization and input-cost calm are the swing factors; the sector's dividend-compounder appeal is intact, but the multiple now demands volume proof."
  },

  structure: {
    suppliers: [
      { name: "Agricultural and oleochemical inputs", note: "Palm oil, tallow, corn, pulp: the commodity cost base that triggered the pricing supercycle" },
      { name: "Specialty chemicals and fragrance houses (Givaudan, IFF, dsm-firmenich)", note: "The secret oligopoly inside every scent and formula" },
      { name: "Packaging converters", note: "Bottles, cartons, films, cans: often 10%+ of product cost and the sustainability battleground" },
      { name: "Contract manufacturers (co-packers)", note: "Flexible capacity for brands, and the production base of private label" }
    ],
    producers: [
      { name: "Megacap multinationals (P&G, Unilever, Colgate, Kimberly-Clark, Reckitt)", note: "P&G ~$84B FY2025 sales; Unilever EUR 50.5B: scale, distribution, and dividend histories" },
      { name: "Beauty houses (L'Oreal, Estee Lauder)", note: "L'Oreal EUR 44.05B in 2025, +4.0% like-for-like: the sector's premium-growth franchise" },
      { name: "Local and challenger brands", note: "C-beauty in China, DTC insurgents, social-commerce natives: attack niches faster than big companies reformulate" },
      { name: "Private label manufacturers", note: "The unbranded shadow industry making the retailers' $330B counter-offer" }
    ],
    distributors: [
      { name: "Mass, club, and dollar retail (Walmart, Costco, Dollar General, Dollar Tree)", note: "The demand aggregators; club drove ~half of private label growth, dollar absorbs trade-down" },
      { name: "E-commerce and social commerce (Amazon, TikTok Shop)", note: "The fastest-growing shelf, with retail media as its toll" },
      { name: "Wholesalers and route-to-market distributors", note: "How brands reach millions of fragmented small stores across emerging markets" }
    ],
    customers: [
      { name: "Households", note: "Billions of weekly repeat purchases; habit is the real customer" },
      { name: "The bifurcated shopper", note: "Premium brands gained ~1 point of share while dollar stores added millions of $100K+ households: same wallet, split behavior" }
    ],
    regulators: [
      { name: "FDA / FTC (US)", note: "Product safety, cosmetics oversight, and advertising-claim enforcement" },
      { name: "EU regulation (cosmetics, packaging, green claims)", note: "The world's de facto formulation and packaging standard-setter" },
      { name: "Advertising standards bodies", note: "Claims are the product; regulators police the words on the label" }
    ],
    capital: [
      { name: "Public equity: the dividend compounders", note: "Multi-decade dividend growth records make staples the classic bond-proxy equity" },
      { name: "Activists", note: "Peltz at P&G and Unilever: portfolio focus and margin campaigns recur every cycle" },
      { name: "Private equity carve-outs", note: "Orphan brands cycle out of conglomerates into sponsor hands (and sometimes back)" }
    ]
  },

  valueChain: {
    intro: "From palm oil to the shopper's basket. Value concentrates in the middle: the brand owner captures the margin, while inputs are commodities and the shelf increasingly charges rent on both sides.",
    stages: [
      { id: "inputs", name: "Commodities & ingredients", what: "Ag commodities, oleochemicals, surfactants, actives, fragrance", players: "ADM-class traders, Givaudan, IFF, BASF", valueCapture: 2,
        economics: { grossMargin: [10, 40], capitalIntensity: 3, concentration: 3 },
        linksTo: ["agriculture", "chemicals"],
        deeper: "Mostly commodity economics, with one exception: fragrance and flavor houses are a quiet oligopoly with specialty margins, because reformulating a hit scent is riskier than paying for it. Input inflation here in 2021-2022 is what forced the industry-wide pricing wave." },
      { id: "packaging", name: "Packaging", what: "Bottles, cartons, flexibles, closures: the brand made physical", players: "Amcor, Berry, Ball, Smurfit Westrock", valueCapture: 2,
        economics: { grossMargin: [15, 25], capitalIntensity: 4, concentration: 3 },
        linksTo: ["packaging", "forestry-paper"],
        deeper: "Often 10%+ of product cost and the frontline of sustainability regulation (EU packaging rules, plastic taxes). Design is marketing: the bottle shape is as trademarked as the logo. Converters earn steady, thin margins with pass-through contracts." },
      { id: "manufacturing", name: "Manufacturing & co-packing", what: "High-speed filling, converting, and assembly at cents per unit", players: "Brand-owned plants + contract manufacturers", valueCapture: 2,
        economics: { grossMargin: [10, 20], capitalIntensity: 3, concentration: 2 },
        linksTo: ["manufacturing", "logistics"],
        deeper: "Deliberately unglamorous: lines run at hundreds of units a minute and the game is OEE, waste, and changeover time. The same co-packers that flex brand capacity also make private label, which is why store brands closed the quality gap: it is often the same factory." },
      { id: "brand", name: "Brand, R&D & marketing", what: "The asset: equity in the shopper's head, built by ads and innovation", players: "P&G, Unilever, L'Oreal, Colgate, challengers", valueCapture: 5,
        economics: { grossMargin: [40, 60], capitalIntensity: 1, concentration: 3 },
        linksTo: ["media"],
        deeper: "The crown of the chain: intangible, high-margin, and expensive to maintain (roughly 10% of sales into advertising, forever). Brands are options on pricing: P&G ran 4 years of price-led growth on brand equity alone before volume had to take over in FY2025. Underinvest (the 3G lesson) and the asset quietly depletes." },
      { id: "route", name: "Route to market & trade", what: "Sales forces, distributors, trade spend, category management", players: "Brand sales orgs, national distributors, wholesalers", valueCapture: 3,
        economics: { grossMargin: [15, 25], capitalIntensity: 2, concentration: 3 },
        linksTo: ["logistics", "retail"],
        deeper: "Trade spend (promotions, slotting, display) is often the second-largest line after COGS and the least transparent. In emerging markets, distribution IS the moat: reaching millions of tiny stores profitably takes decades to build, which is why Unilever's India machine is so prized." },
      { id: "shelf", name: "Retail shelf & digital commerce", what: "Physical and digital shelf, retail media, house brands", players: "Walmart, Costco, Amazon, dollar channel, TikTok Shop", valueCapture: 4,
        economics: { grossMargin: [22, 30], capitalIntensity: 3, concentration: 4 },
        linksTo: ["retail", "ecommerce"],
        deeper: "The shelf now charges twice: margin on the sale and retail media fees for visibility, while running private label as competitor-in-residence (24% US share and rising). Dollar stores became the growth shelf of the 2020s: 102M Dollar Tree households, increasingly affluent ones." }
    ]
  },

  financials: {
    businessModel: [
      "The P&L is a machine for converting gross margin into brand equity and cash. Roughly: 100 of revenue, 45 to 55 of COGS, 25 to 30 of SG&A dominated by advertising and trade spend, leaving high-teens to low-20s operating margins that barely move across cycles. Revenue growth decomposes into volume, price, and mix, and the market reads the split obsessively: P&G's FY2025 organic +2% split evenly between price and volume told investors the pricing era was over; Unilever's 2.8% volume in Q4 2025 told them the volume era might be starting. Capital intensity is low, cash conversion is high, and working capital is often negative: shoppers pay the retailer before the brand pays its suppliers.",
      "The balance-sheet story is stability monetized. Predictable cash funds decades-long dividend growth records, steady buybacks, and bolt-on M&A of challenger brands (buy the insurgent before it scales). The risks are slow-motion: private label share creep ($330B and 24% of US food and beverage dollars in 2025), retail media inflating the true cost of shelf presence, and the temptation to harvest brands by cutting advertising, which flatters margins for years and then breaks the franchise. Currency matters more than credit: Unilever's turnover fell (3.8%) in 2025 to EUR 50.5B on FX and disposals even as underlying sales grew 3.5%."
    ],
    fingerprint: { grossMargin: 50, recurringRevenue: 75, capitalIntensity: 30, pricingPower: 60, cyclicality: 25, operatingLeverage: 40 },
    lines: [
      { label: "Organic growth: the price/volume/mix split", note: "The sector's single most-watched disclosure; volume-led is the healthy kind" },
      { label: "Gross margin & productivity programs", note: "Input costs vs pricing vs cost-savings pipelines: the margin tug-of-war" },
      { label: "Advertising & promotion spend", note: "~10% of sales; cutting it is borrowing from the brand's future" },
      { label: "Trade spend & retail media", note: "The opaque second cost of distribution, migrating into retailer ad networks" },
      { label: "FCF conversion & dividends", note: "90%+ conversion and multi-decade dividend records are the investor contract" }
    ],
    unitEconomics: {
      unit: "per $5.00 item at retail (illustrative)",
      items: [
        { label: "Retailer take", value: "~$1.25-1.50", note: "25% to 30% retail margin, plus retail media fees on top" },
        { label: "Manufacturer net revenue", value: "~$3.25-3.50", note: "after trade spend and promotional allowances" },
        { label: "COGS", value: "~$1.60-1.80", note: "ingredients, packaging, manufacturing: pennies at line speed" },
        { label: "Advertising + overhead, then profit", value: "~$0.65-0.75 operating profit", note: "high-teens operating margin on net revenue, repeated billions of times weekly" }
      ]
    }
  },

  kpiRefs: ["retail-inventory-turns", "retail-sss"],
  kpiLocal: [
    {
      id: "cg-price-volume-mix", name: "Price / Volume / Mix Split", industries: ["consumer-goods"],
      definition: "Decomposition of organic sales growth into what came from charging more (price), selling more units (volume), and selling a richer assortment (mix).",
      formula: "Organic growth = volume % + price % + mix %; disclosed each quarter by major FMCG companies",
      interpretation: "The health check of brand power. FY2025: P&G +2% split evenly; Unilever +3.5% (1.5% volume, 2.0% price). Price-only growth with falling volume means elasticity is arriving and private label is being invited in.",
      healthy: "Balanced or volume-led growth with stable share", warning: "Multi-quarter negative volume papered over by price" },
    {
      id: "cg-private-label-gap", name: "Private Label Share & Price Gap", industries: ["consumer-goods"],
      definition: "Store brands' share of category dollars and the % price discount to the branded equivalent: the standing measure of how much brand equity is actually worth at the shelf.",
      formula: "PL dollar share of category; price gap = (brand price - PL price) / brand price",
      interpretation: "US private label hit $330B and 24% of food & beverage dollars in 2025, growing ~3x national brands. When a brand widens its price gap without innovation to justify it, share transfers quietly and rarely comes back.",
      healthy: "Stable brand share with a defensible price gap", warning: "PL share rising while the brand's gap widens past ~30%" }
  ],

  health: {
    intro: "Brand health is measured in volume share and price gaps; corporate health in gross margin defense and reinvestment discipline. The failure mode is slow: harvested brands look profitable right up until the shelf reallocates.",
    pillars: [
      { name: "Volume-led organic growth", weight: 25, metrics: "Volume vs price split, market share in scanner data", healthy: "Positive volume with held share (Unilever Q4 2025: 2.8% volume)", warning: "Price-only growth, share leaking to private label" },
      { name: "Brand equity & pricing power", weight: 25, metrics: "Price gap vs private label, ad spend ratio, innovation vitality", healthy: "Premium sustained by steady A&P (~10% of sales) and real innovation", warning: "Ad cuts funding margin beats; gap widening without news" },
      { name: "Gross margin defense", weight: 20, metrics: "Input-cost pass-through, productivity pipeline, promo depth", healthy: "Margins recovered post-inflation without deep promotions", warning: "Rising promo intensity to move volume" },
      { name: "Channel & geographic balance", weight: 15, metrics: "Exposure across mass/club/dollar/online; EM vs China concentration", healthy: "Growing in value channels and e-commerce; diversified EM engine", warning: "Overweight a stalling China or a single retailer" },
      { name: "Cash & capital discipline", weight: 15, metrics: "FCF conversion, dividend cover, bolt-on M&A record", healthy: "90%+ conversion; acquisitions that scale", warning: "Big-ticket M&A to buy growth the base business lost" }
    ],
    scoringNote: "Weight volume share above all: in staples, reported margins can be managed for years, but shelf-level volume share is the truth serum."
  },

  valuation: {
    intro: "Staples trade as bond-proxy compounders: stable cash flows, dividend records, and a premium to the market that expands when growth is volume-led and contracts when it is price-only or rates rise.",
    methods: [
      { name: "P/E relative to market", use: "The classic staples lens: quality megacaps vs the index", avoid: "Absolute P/E without a rates context: these are duration assets", strengths: "Long comparable history; captures the quality premium", weaknesses: "Blind to the volume/price mix beneath EPS", range: { low: 18, high: 25, asOf: 2025, note: "quality US/EU staples; beauty compounders command more" } },
      { name: "EV / EBITDA", use: "Cross-border comps and deal math for brand portfolios", avoid: "Ignoring brand reinvestment differences: harvested EBITDA is lower quality", strengths: "Standard M&A currency", weaknesses: "Treats ad-starved and ad-fed EBITDA alike", range: { low: 12, high: 18, asOf: 2025, note: "megacap staples; premium beauty and hot categories above" } },
      { name: "DCF on steady-state FCF", use: "The most honest frame for predictable, low-capex cash machines", avoid: "Heroic terminal growth: these are GDP-ish businesses", strengths: "Matches the economics: stability is the product", weaknesses: "Terminal-value dominated; small WACC changes swing it", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; sanity-check implied terminal growth vs 2-4% category growth" } },
      { name: "Sum-of-the-parts for conglomerates", use: "Multi-category portfolios with divestment stories (Unilever-class reshaping)", avoid: "SOTP as a perpetual excuse: discounts persist without action", strengths: "Surfaces hidden beauty/premium value inside blended multiples", weaknesses: "Breakup value only real when management acts", range: { low: 0, high: 0, asOf: 2025, note: "event-driven lens; portfolio reshaping was 2025's dominant corporate theme" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a staples name quickly: steady-state EBITDA times a quality-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Steady-state EBITDA ($B)", min: 0.5, max: 30, step: 0.5, value: 5, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 24, step: 0.5, value: 14, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 60, step: 1, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats staples as defensive compounders whose premium must be re-earned: after 4 years of price-led growth, the tape pays for volume inflections and punishes price-only prints. Long the volume-recovery names and the beauty compounders at sane multiples, watch private label share as the structural short thesis on weak brands, and treat China stabilization as free optionality on the European megacaps.",
    debates: [
      { topic: "Private label at 24%: ceiling or new baseline?", bull: "US private label share still sits well below European levels (35%+ in parts of the UK/Germany), quality perception has permanently improved, club channel economics favor house brands, and retail media gives retailers both the data and the ad inventory to grow them: the $330B is a floor, not a peak.", bear: "Premium national brands GAINED ~1 point of share in 2025 even as private label set records: the squeeze is on undifferentiated mid-tier brands, not the category kings. Innovation and advertising still convert; the brands that kept investing are pulling away, and PL share historically plateaus when inflation cools." },
      { topic: "Is FMCG pricing power spent or resting?", bull: "The FY2025 resets (P&G +2%, split evenly) mark digestion, not exhaustion: volumes are turning (Unilever Q4 at 2.8% volume), input costs have normalized, and the next innovation cycle re-earns pricing the honest way, through mix and premiumization.", bear: "4 years of compounded price increases permanently re-anchored value perception: shoppers learned the dollar store and the store brand. Elasticity arrived late but it arrived; every future increase now gets audited at the shelf, and volume growth must be bought back with promotion." },
      { topic: "China beauty: cyclical trough or structural loss?", bull: "The market just printed its first growth in 2 years (~3% in Q3 2025) and multinationals' premium science brands remain aspirational; a consumer-confidence recovery re-rates the entire China exposure that markets now price near zero.", bear: "C-beauty brands won the mass segment on speed, social commerce, and national pride, and they are moving upmarket; even in recovery, multinationals keep less of a smaller premium slice. The 2010s China growth premium is not coming back at the old margins." }
    ],
    cycle: {
      where: "Late pricing cycle, early volume-recovery phase: input inflation digested, price contribution fading toward zero, volume just turning positive at the leaders, private label and value channels holding their crisis-era gains: the multiple debate now hinges on whether volume-led growth sticks.",
      drivers: "Input costs (ag, oil, freight), consumer real income and sentiment, promotional intensity, China demand, and the rate environment (bond-proxy duration).",
      leads: [
        "Quarterly price/volume/mix splits from P&G, Unilever, L'Oreal, Colgate (free, company IR)",
        "Circana/NIQ scanner-data releases on private label and category share (free summaries)",
        "Dollar store and club comps (Dollar General, Dollar Tree, Costco monthly/quarterly, free)",
        "BLS CPI detail for household furnishings, personal care, and cleaning products (free)",
        "University of Michigan consumer sentiment and real disposable income prints (free)"
      ]
    },
    exposure: [
      { vehicle: "Megacap staples (P&G, Colgate, Kimberly-Clark class)", note: "The defensive core: dividend records and volume-recovery torque" },
      { vehicle: "Beauty compounders (L'Oreal, Estee Lauder class)", note: "The sector's premium-growth franchise, with China as the swing factor" },
      { vehicle: "Portfolio-reshaping stories (Unilever, Reckitt class)", note: "SOTP value plus activist pressure: event-driven staples" },
      { vehicle: "Value-channel retailers (Dollar General, Dollar Tree, Costco)", note: "The trade-down beneficiaries: 102M-household reach and counting" },
      { vehicle: "Staples sector ETFs (XLP class)", note: "The blunt defensive allocation when the call is macro, not stock-specific" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Price/volume/mix splits and gross margin bridges: the sector's scoreboard" },
      { when: "February (CAGNY conference)", what: "The staples industry's annual strategy stage: guidance, reinvestment, and portfolio news" },
      { when: "Monthly scanner-data releases", what: "Circana/NIQ share shifts: private label vs brands, premium vs value" },
      { when: "Input-cost resets and FX", what: "Ag commodity moves and dollar swings flow to gross margin with a 2-3 quarter lag" }
    ],
    data: [
      { series: "CPI detail: personal care, household supplies", source: "BLS (free)", why: "The pricing environment, straight from the source" },
      { series: "Private label share and CPG demand", source: "Circana public releases (free summaries)", why: "The brand-vs-store-brand scoreboard: $330B and 24% share in 2025" },
      { series: "Company price/volume/mix disclosures", source: "P&G, Unilever, L'Oreal IR (free)", why: "The primary tape on pricing power" },
      { series: "Ag and oleochemical commodity prices", source: "USDA, World Bank Pink Sheet (free)", why: "The input-cost lead indicator for gross margins" },
      { series: "Consumer sentiment and real incomes", source: "University of Michigan, BEA (free)", why: "The trade-down/trade-up dial" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Relative outperformance: demand is steady but shifts within the basket: value channels, private label, and smaller pack sizes win share inside the same categories." },
      { regime: "Inflation spike", behavior: "Margins compress first (input costs lead pricing by quarters), then pricing catches up: own the brands with proven pass-through and watch elasticity data for the breaking point." },
      { regime: "Rates rising", behavior: "The bond-proxy premium deflates: staples derate versus the market even with intact fundamentals; volume-led growers hold up best." },
      { regime: "Consumer boom", behavior: "Staples lag cyclicals but premiumization accelerates: beauty and premium tiers outgrow, and the value channels keep their new affluent shoppers anyway." }
    ]
  },

  players: [
    { name: "Procter & Gamble", role: "The category-king benchmark", country: "US", real: true, note: "~$84B FY2025 sales, organic +2% split evenly price/volume: the pricing era's official end" },
    { name: "Unilever", role: "The reshaping multinational", country: "GB", real: true, note: "EUR 50.5B turnover 2025, +3.5% underlying (1.5% volume); portfolio surgery under activist watch" },
    { name: "L'Oreal", role: "Beauty's compounder", country: "FR", real: true, note: "EUR 44.05B in 2025, +4.0% like-for-like; navigating a flat China beauty market" },
    { name: "Colgate-Palmolive", role: "The focused global brand", country: "US", real: true, note: "Oral care's near-monopoly share in much of the world: focus as a strategy" },
    { name: "Kimberly-Clark", role: "Paper-based staples major", country: "US", real: true, note: "Diapers and tissue: commodity-adjacent categories where scale is the margin" },
    { name: "Reckitt", role: "Health and hygiene specialist", country: "GB", real: true, note: "High-margin OTC-adjacent brands; a recurring portfolio-breakup debate" },
    { name: "Estee Lauder", role: "Prestige beauty pure-play", country: "US", real: true, note: "The cautionary China tale: travel-retail and mainland exposure cut its earnings power hard" },
    { name: "Proya", role: "C-beauty champion", country: "CN", real: true, note: "The local-brand insurgency: social-commerce native, taking mass-beauty share at home" }
  ],

  geography: [
    { country: "US", role: "Largest single market + megacap HQs", note: "Home of P&G, Colgate, KC, Estee Lauder; also private label's $330B record and the dollar-store boom" },
    { country: "GB", role: "European FMCG capital", note: "Unilever and Reckitt HQs; a high-private-label home market that previews brand stress" },
    { country: "FR", role: "Beauty's center of gravity", note: "L'Oreal and the prestige ecosystem; beauty is France's quiet industrial champion" },
    { country: "DE", role: "Household & personal care heartland", note: "Henkel and Beiersdorf; discounter retail (Aldi, Lidl) trained Europe's value shopper" },
    { country: "CN", role: "The stalled growth engine", note: "Beauty market flat in 2025 with first growth in 2 years by Q3; C-beauty brands rewriting the mass segment" },
    { country: "IN", role: "The next volume frontier", note: "Distribution-led growth: millions of small stores, rising incomes, and the deepest route-to-market moats" }
  ],

  cycles: [
    { year: 1931, title: "The brand management memo", kind: "shift", text: "McElroy's P&G memo makes the brand the unit of management, a structure the whole industry copies. Lesson: organizational innovation can outlast any single product." },
    { year: 2008, title: "Recession trade-down", kind: "bust", text: "Private label spikes as shoppers economize; brands that cut advertising to protect margins cede share that takes a decade to claw back. Lesson: the ad budget is the moat's maintenance capex." },
    { year: 2016, title: "The DTC flank", kind: "shift", text: "Dollar Shave Club sells for $1B, proving a $200M-revenue insurgent can bypass the shelf entirely and force a $60B incumbent to respond. Lesson: distribution moats have digital side doors." },
    { year: 2019, title: "The 3G reckoning", kind: "bust", text: "Kraft Heinz writes down $15.4B of brand value after years of zero-based budgeting: costs left, and equity left with them. Lesson: you cannot cost-cut a brand into growth." },
    { year: 2023, title: "Peak pricing", kind: "shift", text: "Double-digit price increases carry organic growth while volumes fall; by FY2025 P&G's growth is +2% split evenly and the market demands volume. Lesson: pricing is a battery, not an engine: it runs out." }
  ],

  risks: [
    { name: "Structural private label share gain", severity: 4, likelihood: 4, transmission: "Retailers push house brands ($330B, 24% US share) -> mid-tier brands lose shelf and volume -> deleverage forces promo spending -> margin and equity erode together." },
    { name: "Retailer power and the retail media tax", severity: 3, likelihood: 4, transmission: "Shelf owners monetize data and ad inventory -> trade spend migrates to retail media -> true distribution cost inflates -> brand P&Ls pay twice for the same shopper." },
    { name: "China local-brand competition", severity: 3, likelihood: 4, transmission: "C-beauty and local FMCG win on speed and social commerce -> multinationals lose mass share in a flat market -> the EM growth premium in their multiples compresses." },
    { name: "Input-cost spike round 2", severity: 3, likelihood: 3, transmission: "Ag/energy shock -> gross margin squeeze -> new price increases hit an already re-anchored consumer -> elasticity bites immediately this time." },
    { name: "Volume erosion from behavior shifts", severity: 3, likelihood: 2, transmission: "GLP-1 adoption, aging demographics, and de-consumption trends -> category volumes flatten -> growth must come entirely from share and mix in a zero-sum shelf." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Consumer goods companies make the everyday products in your bathroom and laundry room: toothpaste, shampoo, detergent, razors. They spend enormous sums on advertising so you reach for their brand without thinking, and they earn a few cents of profit per item, billions of times a week. Store brands (the supermarket's own cheaper version) are their oldest and currently strongest competitor: US store brands hit a record $330B in sales in 2025."] },
    L2: { title: "Intermediate", text: ["The economics: 40-60% gross margins fund ~10% of sales in advertising plus heavy trade spend to retailers, leaving stable high-teens operating margins and excellent cash conversion. Growth splits into price, volume, and mix, and the split is the story: from 2021-2024 the industry grew almost entirely on price; by FY2025 P&G was at +2% split evenly and Unilever at +3.5% with volume finally leading in Q4. Meanwhile private label took 24% of US food & beverage dollars and dollar stores added millions of six-figure-income households."] },
    L3: { title: "Advanced", text: ["Analyze the triangle: brand strength (price gap vs private label, ad reinvestment, innovation vitality), retailer power (trade spend, retail media, house-brand pressure), and cost dynamics (input pass-through with a 2-3 quarter lag). Watch the volume/price split as the pricing-power truth serum, scanner-data share as the shelf-level reality, and China exposure as the multiple's swing factor: the beauty market there went flat and local brands took the mass segment. Currency swings (Unilever's turnover fell (3.8%) in 2025 despite +3.5% underlying growth) routinely dwarf operational moves."] },
    L4: { title: "Expert", text: ["Trade the volume inflection: after 4 years of price-led growth, the market pays for volume-led prints and fades price-only ones. Live debates: whether 24% private label share is a ceiling or a staging post toward European levels, whether pricing power is spent or merely resting between innovation cycles, and whether multinationals ever recover their China margins against C-beauty. The event layer is portfolio surgery: spin-offs, SOTP discounts, and activists give staples an M&A pulse the fundamentals lack."] },
    L5: { title: "Institutional", text: ["Allocator's frame: staples are equity duration with a brand moat: bond-proxy stability that derates with rates and re-rates on volume-led growth. Core the reinvesting category kings and beauty compounders, underwrite the reshaping conglomerates as event-driven positions, and treat weak mid-tier brands as structural shorts against the private label tide. The permanent lesson of 2021-2025: pricing is a battery that brand equity charges slowly and inflation drains fast: the durable franchises are the ones still funding advertising and innovation when the battery is empty."] }
  },

  quiz: [
    { q: "P&G's fiscal 2025 organic growth was:", choices: ["+8%, all price", "+2%, split evenly between price and volume: the pricing era's end", "(5%)", "+12% on volume"], answer: 1, explain: "After 4 years of price-led growth, FY2025's +2% with pricing's contribution fading to parity marked the supercycle's exhaustion." },
    { q: "US private label CPG sales in 2025 reached:", choices: ["$33B", "$330B, a record, at 24% of food & beverage dollar share", "$3.3T", "They shrank"], answer: 1, explain: "Circana's 2025 data: $330B, growing 3.3% vs 1.2% for national brands, with club retailers driving about half the gain." },
    { q: "Dollar Tree's new shoppers in late 2025 were notable because:", choices: ["They were all low-income", "~60% came from households earning over $100K: trade-down went upmarket", "There were none", "They only bought food"], answer: 1, explain: "6.5M net household adds in a quarter (102M total), majority from six-figure incomes: value-seeking became a cross-income behavior." },
    { q: "A branded manufacturer's biggest ongoing brand investment is:", choices: ["Factories", "Advertising (~10% of sales) plus trade spend: the moat's maintenance capex", "Patents", "Real estate"], answer: 1, explain: "Cut the ad budget and margins improve for years while equity quietly depletes: the 3G/Kraft Heinz lesson ($15.4B write-down)." },
    { q: "The 'volume/price/mix split' matters because:", choices: ["Regulators require it", "It reveals whether growth is real demand or borrowed pricing: volume-led is the healthy kind", "It sets tax rates", "It measures inventory"], answer: 1, explain: "Unilever's Q4 2025 (+4.7% with 2.8% volume) was rewarded precisely because volume led; price-only prints now get faded." },
    { q: "China's beauty market in 2025 was:", choices: ["Growing 20%", "Roughly flat, with its first quarterly growth in 2 years (~3% in Q3), as local C-beauty brands took mass share", "Closed to foreign brands", "The industry's fastest grower"], answer: 1, explain: "The sector's former growth engine stalled; L'Oreal grew +4.0% like-for-like globally while its China exposure merely stabilized." },
    { q: "Retail media matters to brands because:", choices: ["It is free advertising", "Retailers now charge brands for visibility on top of margin: the shelf taxes twice", "It replaces factories", "It lowers trade spend"], answer: 1, explain: "Trade dollars migrate into retailer ad networks; the true cost of distribution rises even when list margins look stable." },
    { q: "Private label closed the quality gap partly because:", choices: ["Brands license their formulas", "The same co-packers often make both the brand and the store brand", "Regulation standardized products", "It didn't"], answer: 1, explain: "Contract manufacturing means store brands frequently roll off comparable lines: the price gap stayed, the quality gap didn't." }
  ],

  sources: [
    { name: "P&G Q4 & FY2025 results (organic +2%, ~$84B)", url: "https://www.pginvestor.com/news/news-details/2025/PG-Announces-Fourth-Quarter-and-Fiscal-Year-2025-Results/default.aspx", feeds: "organic growth, price/volume split" },
    { name: "Unilever FY2025 results (USG +3.5%, EUR 50.5B)", url: "https://www.unilever.com/investors/results-events/results-events-webcasts/overview-q4-2025/", feeds: "volume/price split, turnover" },
    { name: "L'Oreal 2025 annual results (EUR 44.05B, +4.0% LFL)", url: "https://www.loreal-finance.com/eng/press-release/2025-annual-results", feeds: "beauty market, China" },
    { name: "Circana: US private label CPG sales reach $330B", url: "https://www.circana.com/post/circana-research-reveals-u-s-private-label-cpg-sales-reach-330-billion", feeds: "private label share and growth" }
  ]
};
