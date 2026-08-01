/* Industry Atlas - RETAIL (full module, research-backed)
 * Anchors: global retail ~$31T 2025 with e-commerce ~$6.4T (~20% penetration)
 * (eMarketer / Capital One Shopping, 2025); US retail forecast $5.42T-$5.48T
 * for 2025, +2.7% to +3.7% (NRF, Mar 2025); Walmart FY2025 (ended Jan 2025)
 * revenue $681B, net income $20.2B, 4.3% operating margin, ~270M weekly
 * customers (10-K, SEC); global retail media ad spend ~$166B in 2025, Amazon
 * ~75% of US retail media (eMarketer, 2025); TJX FY2025 (ended Feb 2025) net
 * sales $56.4B, comps +4%, net income $4.9B (company press release); 2025 US
 * tariffs on Chinese goods spiked to 145% before settling near 30%
 * (Morgan Stanley / CNBC, 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["retail"] = {
  meta: {
    id: "retail", name: "Retail", sector: "consumer", status: "full",
    tagline: "A $31T machine that keeps 2 to 4 cents of every dollar: the biggest industry with the thinnest cushion.",
    marketSize: { value: 31, unit: "$T", asOf: 2025, note: "global retail sales; US ~$5.4T (NRF 2025 forecast), e-commerce ~$6.4T (~20% of the total)" },
    cagr: { value: 4, range: [3, 5], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 3, capitalIntensity: 3, regulation: 2, disruption: 4
  },
  newsQuery: '(Walmart OR Costco OR Target OR "retail sales" OR "same-store sales" OR "retail media" OR "off-price retail" OR "retail tariffs")',

  overview: {
    definition: "Retail buys goods at wholesale, moves them through distribution centers and stores (or straight to doorsteps), and sells them at a markup. It is the largest industry on Earth by revenue (~$31T in 2025) and one of the thinnest by margin: the whole game is velocity, turning inventory faster than costs erode the spread.",
    howItWorks: [
      "The core equation is brutally simple: gross margin x inventory turns = the return engine. A grocer earning 22% gross margin but turning stock 15x a year can out-earn a furniture chain at 45% margin turning 2x. Everything in retail (formats, supply chains, private label, markdown cadence) exists to push one of those 2 variables. Net margins land at 2% to 4% for most of the industry: Walmart's FY2025 operating margin was 4.3% on $681B of revenue, and its ~$20.2B net income works out to about 3 cents per sales dollar.",
      "Scale is the moat. The biggest buyers extract the best wholesale costs, amortize logistics over more volume, and price below smaller rivals while earning more. Walmart serves ~270M customers a week across 10,750+ stores in 19 countries; Costco converts scale into a membership annuity, selling goods near cost and booking most of its profit as fees. Discounters (Aldi, Lidl) run the same logic through ruthless assortment: ~2,000 SKUs instead of 30,000, mostly private label, at costs no full-range grocer can match.",
      "The industry now runs 2 P&Ls at once. The first is the old one: comps (same-store sales), gross margin, shrink, labor. The second is the new profit stack: retail media (selling ad space on your site and shelf data to brands), membership fees, and marketplace commissions. Global retail media hit roughly $166B of ad spend in 2025 per eMarketer, growing far faster than retail itself, at software-like margins: Amazon alone captures about 75% of US retail media dollars. For thin-margin retailers, a $1B media business can out-earn $20B of merchandise sales.",
      "Inventory is where retailers die. Order too little and you miss the season; order too much and markdowns eat the year (the 2022 glut forced Target and others into margin-crushing clearance). Off-price retail weaponizes that cycle: TJX buys other retailers' mistakes at cents on the dollar and resold $56.4B of them in FY2025 at a ~9% net margin, more than double the industry norm. Tariffs add a new layer: 2025 US rates on Chinese goods spiked to 145% before settling near 30%, forcing retailers to choose between absorbing costs on 3% margins or testing price-weary consumers."
    ],
    history: [
      { era: "1850s-1950s", title: "Department stores and catalogs", text: "Macy's and Sears invent mass merchandising and mail order: one roof, fixed prices, national reach." },
      { era: "1962-1990", title: "The discount big bang", text: "Walmart, Kmart, and Target all open in 1962. Everyday low prices plus logistics discipline reorganize the industry around scale; malls peak." },
      { era: "1990-2007", title: "Big box and category killers", text: "Home Depot, Best Buy, and warehouse clubs roll up categories; Walmart passes $100B then $300B; China joins the WTO and becomes the world's stockroom." },
      { era: "2008-2019", title: "The e-commerce squeeze", text: "Amazon compounds while malls empty: the 'retail apocalypse' closes thousands of stores (Toys R Us, Sears); off-price and dollar stores absorb the value shopper." },
      { era: "2020-present", title: "Omnichannel and the second P&L", text: "COVID whipsaws demand, then the 2022 inventory glut punishes over-orderers. Survivors fuse stores with fulfillment, and retail media plus membership become the profit story." }
    ],
    trends: [
      { title: "Retail media boom", direction: "up", text: "~$166B of global ad spend in 2025 flowing to retailers' sites and shelf data: high-margin profit that is re-ranking who earns what in the industry." },
      { title: "Value migration", direction: "shift", text: "Trading down is structural, not cyclical: off-price (TJX comps +4% in FY2025), clubs, and discounters take share in both good years and bad." },
      { title: "Tariff and sourcing reset", direction: "shift", text: "2025 tariff spikes (145% on China at the peak, ~30% after the truce) are forcing diversification to Vietnam, India, and Mexico, and re-testing every landed-cost model." },
      { title: "Store as fulfillment node", direction: "up", text: "Curbside, ship-from-store, and micro-fulfillment turn the box into a warehouse: the store survived e-commerce by joining it." },
      { title: "Middle-market erosion", direction: "down", text: "Mid-price department stores and undifferentiated specialty keep shrinking: the barbell (scale value on one end, experience or brand on the other) wins." }
    ],
    outlook: "Retail grows roughly with consumption (3% to 5% a year), but the profit pool is being redistributed: toward scale players monetizing traffic twice (goods plus media and membership), toward off-price and discounters riding the value shopper, and away from the undifferentiated middle. The 2025-2026 test is tariffs against a price-fatigued consumer: who can absorb, reroute sourcing, or pass through without breaking traffic. The quiet structural story is that the best retailers are becoming ecosystems whose merchandise margin is only the entry ticket."
  },

  structure: {
    suppliers: [
      { name: "Consumer brands & CPG (P&G, Nestle, Unilever class)", note: "The shelf's landlords pay rent now: trade spend plus retail media" },
      { name: "Contract manufacturers & private-label makers", note: "The store brand engine: retailer margins 5-10 points above national brands" },
      { name: "Asian sourcing base (China, Vietnam, India, Bangladesh)", note: "The world's stockroom, being re-mapped by tariffs" },
      { name: "Logistics & shipping (ocean, parcel, 3PL)", note: "Freight rates and port flows set landed cost; a container is a P&L line" }
    ],
    producers: [
      { name: "Mass & grocery (Walmart, Kroger, Schwarz, Aldi)", note: "Walmart: $681B FY2025, the largest company on Earth by revenue" },
      { name: "Clubs & membership (Costco, Sam's Club)", note: "Goods near cost; the fee line is the profit" },
      { name: "Off-price (TJX, Ross, Burlington)", note: "$56.4B TJX FY2025: buying the industry's mistakes at a discount" },
      { name: "Home & specialty (Home Depot, Lowe's, Best Buy)", note: "Category killers with pro and services attach" }
    ],
    distributors: [
      { name: "Own DC networks + last-mile carriers", note: "Retailers are their own distributors; the DC network IS the company" }
    ],
    customers: [
      { name: "Households", note: "~270M weekly at Walmart alone; the consumer's health is the industry's weather" },
      { name: "Small business & pro buyers", note: "Clubs and home improvement's higher-ticket, stickier tail" },
      { name: "Brands (as ad buyers)", note: "The new customer: brands buying retail media placement and shelf data" }
    ],
    regulators: [
      { name: "FTC & antitrust", note: "Merger blocks (Kroger-Albertsons) and pricing scrutiny" },
      { name: "Customs & trade (USTR, CBP)", note: "Tariff schedules rewrite sourcing math overnight" },
      { name: "Labor & safety (state and federal)", note: "Minimum wages and scheduling laws hit the largest private workforces" }
    ],
    capital: [
      { name: "Public equity", note: "Mega-cap staples-adjacent compounders vs left-for-dead turnarounds" },
      { name: "Supplier credit (payables)", note: "The hidden loan: sell goods before paying for them and working capital funds you" },
      { name: "Sale-leasebacks & REITs", note: "The real estate under the stores is its own capital market" }
    ]
  },

  valueChain: {
    intro: "From factory gate to checkout, a $31T flow with margin pooled at the 2 ends: sourcing scale upstream, and traffic monetization (media, membership) downstream. The middle, moving boxes, is cost to be crushed.",
    stages: [
      { id: "sourcing", name: "Sourcing & private label", what: "Product development, vendor negotiation, landed cost", players: "Retailer sourcing arms, agents, factory networks", valueCapture: 4,
        economics: { grossMargin: [10, 25], capitalIntensity: 2, concentration: 3 },
        linksTo: ["manufacturing", "textiles-apparel", "consumer-goods"],
        deeper: "Where scale becomes margin: the biggest buyers get factory pricing no one else sees, and private label converts that into 5-10 extra margin points. Tariffs made this the hottest seat in retail: 2025's China spike (145% peak, ~30% settled) sent sourcing teams sprinting to Vietnam, India, and Mexico." },
      { id: "wholesale", name: "Import & wholesale", what: "Ocean freight, customs, consolidation", players: "Importers, trading companies, freight forwarders", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 2, concentration: 2 },
        linksTo: ["shipping", "logistics"],
        deeper: "The pipeline between factory and DC. Container rates and port congestion flow straight into gross margin: the 2021-2022 freight spike and the 2025 tariff front-running (importers pulling forward shipments ahead of deadlines) both showed up in earnings 2 quarters later." },
      { id: "fulfillment", name: "Distribution & fulfillment", what: "DCs, automation, last mile", players: "Retailer DC networks, parcel carriers, automation vendors", valueCapture: 2,
        economics: { grossMargin: [0, 10], capitalIntensity: 5, concentration: 3 },
        linksTo: ["logistics", "robotics"],
        deeper: "Retail's capex is here now: automated DCs and micro-fulfillment, not new stores. E-commerce economics live or die on cost-per-order; the store-as-node model (curbside, ship-from-store) exists because the last mile is the most expensive one." },
      { id: "stores", name: "Stores & formats", what: "The box: grocery, club, off-price, specialty", players: "Walmart, Costco, Aldi, TJX, Home Depot", valueCapture: 3,
        economics: { grossMargin: [22, 45], capitalIntensity: 4, concentration: 3 },
        linksTo: ["real-estate", "food-beverage"],
        deeper: "Format is destiny: a club, a discounter, and a department store can sell the same goods with wildly different economics. The store proved more durable than the 2017 'apocalypse' narrative implied: it is the cheapest fulfillment node and the best customer-acquisition machine retail has." },
      { id: "digital", name: "E-commerce & marketplace", what: "Online storefronts, third-party sellers, delivery", players: "Amazon, Walmart.com, marketplace operators", valueCapture: 3,
        economics: { grossMargin: [20, 40], capitalIntensity: 4, concentration: 4 },
        linksTo: ["ecommerce", "payments"],
        deeper: "~$6.4T globally in 2025, ~20% of all retail. First-party e-commerce is often margin-dilutive (fulfillment cost eats the spread); the marketplace model fixes that by taking a commission on other sellers' goods, no inventory risk attached. Every large retailer is now building one." },
      { id: "media", name: "Retail media & services", what: "Ads, membership, data, financial services", players: "Amazon Ads, Walmart Connect, Costco membership", valueCapture: 5,
        economics: { grossMargin: [70, 90], capitalIntensity: 1, concentration: 4 },
        linksTo: ["media", "payments", "fintech"],
        deeper: "The profit pool of the decade: ~$166B of global ad spend in 2025 (eMarketer) at software margins, because the retailer owns the traffic, the shelf, and the purchase data. Amazon takes ~75% of US retail media; everyone else is racing to monetize their own eyeballs before brands' budgets are fully allocated." }
    ]
  },

  financials: {
    businessModel: [
      "The merchandise P&L: revenue = traffic x conversion x basket; gross margin (22% grocery to 45% specialty) minus labor, rent, shrink, and freight leaves 2% to 4% net for most. Because margins are thin, small swings in comps or markdowns produce violent earnings moves: retail has structural operating leverage in both directions. The balance sheet works for you if you turn inventory before paying suppliers (negative working capital, the grocer's hidden float) and against you the moment goods age.",
      "The ecosystem P&L: membership fees, retail media, and marketplace commissions monetize the same traffic a second time at 70%+ margins. This is why Walmart trades like a different company than it did a decade ago and why Costco's fee line is watched more closely than its merchandise margin. The off-price counter-model (TJX: $56.4B sales, ~9% net margin in FY2025) skips the ecosystem and simply out-buys everyone: opportunistic purchasing plus fast turns beats owning the infrastructure."
    ],
    fingerprint: { grossMargin: 28, recurringRevenue: 15, capitalIntensity: 45, pricingPower: 30, cyclicality: 55, operatingLeverage: 65 },
    lines: [
      { label: "Comps (same-store sales)", note: "The heartbeat: traffic vs ticket, reported monthly or quarterly" },
      { label: "Gross margin & markdowns", note: "Where inventory mistakes and tariffs surface, 1-2 quarters late" },
      { label: "Inventory & turns", note: "The 2022 glut lesson: inventory growth above sales growth is the red flag" },
      { label: "E-commerce mix & fulfillment cost", note: "Growth that can dilute margin: watch cost-per-order, not just penetration" },
      { label: "Alt profit streams", note: "Retail media, membership, marketplace: small revenue, outsized profit" }
    ],
    unitEconomics: {
      unit: "per $100 of big-box sales (illustrative)",
      items: [
        { label: "Cost of goods", value: "~$70-75", note: "scale buying and private label move this line" },
        { label: "Labor + occupancy + ops", value: "~$20-24", note: "the store's fixed-cost base; wages are the swing factor" },
        { label: "Operating profit", value: "~$3-4", note: "Walmart FY2025: 4.3%; grocery often runs lower" },
        { label: "Net income", value: "~$2-3", note: "the famous 2-4 cents; off-price and clubs beat it structurally" }
      ]
    }
  },

  kpiRefs: ["retail-sss", "retail-inventory-turns"],
  kpiLocal: [
    {
      id: "retail-gmroi", name: "GMROI (Gross Margin Return on Inventory)", industries: ["retail"],
      definition: "Gross margin dollars earned per dollar of average inventory investment: the single number that fuses margin and turns.",
      formula: "GMROI = annual gross margin $ / average inventory cost",
      interpretation: "Below ~2.0x the inventory is not paying rent; strong operators run 3x+. Off-price and grocery win it differently: TJX through fast turns on cheap buys, grocers through 15x velocity on thin margins.",
      healthy: "3.0x+, stable or rising; inventory growing slower than sales", warning: "Sub-2.0x, or inventory growth outrunning sales (the 2022 pattern)" }
  ],

  health: {
    intro: "Retail health is velocity and discipline: are the goods turning, is the margin honest (not borrowed from future markdowns), and is the traffic monetized more than once.",
    pillars: [
      { name: "Comps & traffic", weight: 30, metrics: "Same-store sales, traffic vs ticket split, share vs channel", healthy: "Positive comps led by traffic", warning: "Ticket-only comps (inflation masking traffic decline)" },
      { name: "Inventory discipline", weight: 25, metrics: "Inventory vs sales growth, turns, markdown cadence", healthy: "Inventory growth below sales growth; clean seasonal exits", warning: "Swelling inventory, packaway excuses, clearance quarters" },
      { name: "Margin structure", weight: 20, metrics: "Gross margin trend, shrink, freight and tariff pass-through", healthy: "Stable-to-rising GM with price gaps maintained", warning: "GM propped up while price gaps vs discounters widen" },
      { name: "Alt profit mix", weight: 15, metrics: "Retail media, membership, marketplace share of operating income", healthy: "Growing high-margin streams (media, fees)", warning: "Merchandise-only P&L in a 2-P&L industry" },
      { name: "Balance sheet & leases", weight: 10, metrics: "Lease-adjusted leverage, negative working capital health", healthy: "Payables funding inventory; leverage under 3x", warning: "Debt-funded buybacks on deteriorating comps" }
    ],
    scoringNote: "Weight comps and inventory most: in a 3%-margin business, one bad buying season does what a recession does to other industries."
  },

  valuation: {
    intro: "The market prices retailers on comp durability and the mix shift toward high-margin streams: the multiple spread between ecosystem compounders and undifferentiated middlemen has never been wider.",
    methods: [
      { name: "EV / EBITDA (lease-adjusted)", use: "The standard cross-format comp; adjust for capitalized leases or nothing compares", avoid: "Ignoring leases: rent is debt wearing an expense costume", strengths: "Comparable across formats", weaknesses: "Hides capex differences between asset-light and DC-heavy models", range: { low: 6, high: 14, asOf: 2025, note: "value grocers at the low end; quality compounders (Costco class) far above it" } },
      { name: "P / E on through-cycle comps", use: "Steady compounders with visible comp algorithms (clubs, off-price, home improvement)", avoid: "Turnarounds: E is the thing in question", strengths: "Matches how the buy side frames these stocks", weaknesses: "Thin margins make E volatile; one markdown cycle distorts it", range: { low: 12, high: 30, asOf: 2025, note: "the spread IS the thesis: Costco's premium vs department-store single digits" } },
      { name: "FCF yield", use: "Cash-generative mature chains; the buyback-and-dividend cohort", avoid: "High-growth DC build-outs where capex is the story", strengths: "Cuts through inventory accounting and lease noise", weaknesses: "Working-capital swings lump cash flows year to year", range: { low: 4, high: 8, asOf: 2025, note: "% yields; sustained sub-4% requires an ecosystem story" } },
      { name: "Sum-of-the-parts (ecosystem retailers)", use: "Scale players where retail media, membership, and marketplace deserve their own multiples", avoid: "Applying it to retailers whose 'media business' is a press release", strengths: "Captures the 2-P&L reality: $1B of media profit is not worth a retail multiple", weaknesses: "Segment disclosure is thin; parts can be aspirational", range: { low: 0, high: 0, asOf: 2025, note: "qualitative frame; the media/fee streams carry 15x+ while merchandise carries 7x" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a retailer quickly: EBITDA times a format-adjusted multiple, minus net debt including capitalized leases.",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($B)", min: 0.5, max: 45, step: 0.5, value: 6, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 22, step: 0.5, value: 9, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt incl. leases ($B)", min: -10, max: 60, step: 1, value: 10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays retail as a share-shift story wrapped in a macro trade: long the structural winners (clubs, off-price, ecosystem scale) that take share in every tape, short or avoid the undifferentiated middle, and treat the group's beta to the consumer as the entry-timing tool rather than the thesis. The mix shift toward retail media and membership is the decade's re-rating engine.",
    debates: [
      { topic: "Is the value-retail run (clubs, off-price, discounters) a cycle or a regime?", bull: "Share gains compounded through expansions AND recessions for 20 years: TJX comps +4% in a healthy FY2025 tape. Value is a habit consumers learn and keep; the formats' buying scale is a moat that widens with every stressed vendor.", bear: "Multiples now price permanence: clubs and off-price trade at software-adjacent P/Es on 3-9% margins. A real wage boom or a tariff-driven cost surge that hits their price gaps compresses both comps and the premium at once." },
      { topic: "Retail media: durable profit pool or brand-budget fad?", bull: "~$166B in 2025 and still under-allocated versus where purchases happen; closed-loop attribution (ad to checkout in one dataset) is what brand CFOs always wanted. It is the highest-ROI shelf space ever sold.", bear: "It is trade spend re-labeled: brands are shifting existing budgets, not growing them, and the mid-tier networks (everyone but Amazon and Walmart) are subscale ad businesses with inflated take-rate assumptions baked into retail multiples." },
      { topic: "Tariffs: margin event or industry re-rating?", bull: "Retail has digested every cost shock for 30 years: diversify sourcing, lean on private label, pass through selectively. The 2025 spike-and-truce (145% to ~30% on China) proved rates are negotiable and the biggest buyers adapt fastest, extending their edge.", bear: "This time the consumer is already price-fatigued: pass-through breaks traffic, absorption breaks 3% margins, and the retail inventory method means the pain reaches P&Ls with a lag investors keep underestimating." }
    ],
    cycle: {
      where: "Late-cycle consumer with a structural overlay: nominal US retail sales still growing (+2.7% to +3.7% forecast for 2025 per NRF) but trade-down behavior everywhere, tariff costs entering P&Ls with a lag, and the share-shift winners making new highs while the middle shrinks.",
      drivers: "Real wage growth and savings rates, tariff schedules and freight rates, housing turnover (home categories), and the pace of brand-budget migration into retail media.",
      leads: [
        "US Census Advance Monthly Retail Sales (free, monthly: the industry's tape)",
        "University of Michigan consumer sentiment and inflation expectations (free)",
        "NRF Global Port Tracker import volumes (free: tariff front-running shows up here first)",
        "FRED retail inventories-to-sales ratio (free: the glut early-warning)",
        "Weekly comp commentary from bellwether prints (Walmart, Costco monthly sales, free)"
      ]
    },
    exposure: [
      { vehicle: "Walmart", note: "The scale ecosystem: $681B revenue plus media, membership, and marketplace optionality" },
      { vehicle: "Costco", note: "The membership annuity: fee income and renewal rates, priced like the staple it is" },
      { vehicle: "Off-price (TJX, Ross class)", note: "The share-shift compounders; counter-cyclical buying advantage" },
      { vehicle: "Home improvement (Home Depot, Lowe's)", note: "Housing-cycle beta with pro-business ballast" },
      { vehicle: "XRT / retail ETFs", note: "The blunt macro instrument; equal-weight quirks make it a popular short vehicle" }
    ],
    catalysts: [
      { when: "Monthly (mid-month)", what: "Census retail sales print: the macro tape for the whole group" },
      { when: "Quarterly earnings (off-cycle: Jan/Apr/Jul/Oct fiscal ends)", what: "Comps, inventory vs sales growth, margin guides: retail reports after the market's mood is set" },
      { when: "Holiday season (Nov-Dec)", what: "~20% of annual sales, more of profit: the year is won or lost here" },
      { when: "Tariff and trade decisions", what: "Rate changes re-price sourcing math and gross margin guides overnight" }
    ],
    data: [
      { series: "Advance Monthly Retail Trade Report", source: "census.gov (free)", why: "The primary demand tape, category by category" },
      { series: "Retail inventories-to-sales ratio", source: "FRED (free)", why: "The glut and markdown early-warning system" },
      { series: "Consumer sentiment & inflation expectations", source: "University of Michigan (free)", why: "Traffic and trade-down leading indicator" },
      { series: "Global Port Tracker", source: "NRF (free)", why: "Import volumes reveal tariff front-running and ordering confidence" },
      { series: "Personal income, spending, savings rate", source: "BEA (free)", why: "The consumer's fuel gauge" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Trade-down accelerates: clubs, discounters, off-price, and dollar stores gain share while discretionary specialty gets hit on both comps and margin. The group's dispersion is widest here." },
      { regime: "Inflation surge", behavior: "Grocers pass through nominal gains; discretionary loses share of wallet to food and fuel. Watch who holds price gaps: value formats compound share when rivals reprice." },
      { regime: "Rates rising", behavior: "Housing-linked retail (home improvement, furniture) leads down; lease-heavy balance sheets refinance painfully; negative-working-capital models feel it least." },
      { regime: "Tariff shock", behavior: "Front-running lifts imports then air-pockets; gross margin pain lands 1-2 quarters later via inventory accounting. Biggest buyers reroute sourcing fastest and widen their cost edge." }
    ]
  },

  players: [
    { name: "Walmart", role: "Scale leader", country: "US", real: true, note: "$681B revenue FY2025, ~270M weekly customers; the ecosystem pivot re-rated the stock" },
    { name: "Amazon", role: "E-commerce & media giant", country: "US", real: true, note: "The marketplace-plus-ads model everyone imitates; ~75% of US retail media" },
    { name: "Costco", role: "Membership club", country: "US", real: true, note: "Goods near cost; renewal rates ~90%+: the fee line is the business" },
    { name: "TJX", role: "Off-price king", country: "US", real: true, note: "$56.4B FY2025 sales, +4% comps, ~9% net margin: triple the industry norm" },
    { name: "Home Depot", role: "Category killer", country: "US", real: true, note: "Home improvement duopolist; pro customers are the moat" },
    { name: "Schwarz Group (Lidl/Kaufland)", role: "Discounter", country: "DE", real: true, note: "Europe's largest retailer; the hard-discount model Aldi pioneered" },
    { name: "Seven & i (7-Eleven)", role: "Convenience giant", country: "JP", real: true, note: "~85,000 stores globally; the takeover battle for it gripped 2024-2025" },
    { name: "PDD Holdings (Temu)", role: "Cross-border disruptor", country: "CN", real: true, note: "Factory-direct ultra-value; the de minimis crackdown is its regulatory test" }
  ],

  geography: [
    { country: "US", role: "Largest market", note: "~$5.4T of 2025 retail sales (NRF); home of the scale, club, and off-price models" },
    { country: "CN", role: "Largest e-commerce market", note: "Digital penetration far above the West; exporter of the factory-direct model (Temu, Shein)" },
    { country: "DE", role: "Discount heartland", note: "Aldi and Lidl trained Europe to shop hard-discount; their expansion pressures everyone" },
    { country: "JP", role: "Convenience capital", note: "The konbini is the world's densest retail format" },
    { country: "GB", role: "Grocery battleground", note: "Tesco vs discounters: the market where price wars go to escalate" },
    { country: "IN", role: "The growth frontier", note: "Modern retail still a minority of a fast-formalizing, billion-consumer market" }
  ],

  cycles: [
    { year: 1962, title: "The discount big bang", kind: "shift", text: "Walmart, Kmart, and Target all open the same year; everyday low price plus logistics beats the department store within a generation. Lesson: format innovation, not merchandising taste, is what re-ranks retail." },
    { year: 2000, title: "Dot-com and the Amazon seed", kind: "shift", text: "E-tailers implode, but Amazon survives the crash and compounds for 25 years. Lesson: the disruption was real; only the timing and the winner were misjudged." },
    { year: 2008, title: "The great trade-down", kind: "bust", text: "The GFC guts discretionary retail while dollar stores, clubs, and off-price post their best comps. Lesson: recessions do not shrink retail so much as reroute it toward value." },
    { year: 2017, title: "The retail apocalypse", kind: "bust", text: "Record store closures, Toys R Us and Sears die, malls hollow out: yet Walmart, Costco, and TJX thrive through it. Lesson: it was a sorting, not an extinction: the middle died, the ends compounded." },
    { year: 2022, title: "The inventory whipsaw", kind: "shift", text: "COVID over-ordering meets a spending pivot to services; Target and peers take billions in markdowns while TJX feasts on the excess. Lesson: in a 3%-margin industry, the inventory line is the risk line." }
  ],

  risks: [
    { name: "Consumer downturn / trade-down", severity: 4, likelihood: 3, transmission: "Real incomes squeeze -> traffic and ticket fall -> operating leverage inverts on thin margins -> discretionary and mid-tier take the earnings hit while value formats absorb the share." },
    { name: "Tariff and sourcing cost shock", severity: 4, likelihood: 4, transmission: "Rates jump (2025: 145% peak on China) -> landed costs rise -> absorb (margin) or pass through (traffic) -> inventory accounting delays the pain, then concentrates it." },
    { name: "Structural share loss to new formats", severity: 4, likelihood: 4, transmission: "E-commerce, discounters, and factory-direct entrants under-price -> price gaps widen -> comps rot slowly -> deleverage on fixed store costs turns decline into spiral (the Sears path)." },
    { name: "Inventory misjudgment", severity: 3, likelihood: 4, transmission: "Over-ordering into a demand shift -> markdowns and packaways -> gross margin craters for 2-4 quarters -> the 2022 pattern; off-price is the counterparty that profits." },
    { name: "Labor cost and shrink escalation", severity: 3, likelihood: 3, transmission: "Wage floors rise and theft grows -> the largest private workforces reprice -> 100-200 bps of cost against a 300-400 bps margin -> automation capex becomes forced, not optional." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Retailers buy products in bulk, mark them up, and sell them to you: but they only keep about 2 to 4 cents of every dollar after paying for goods, staff, and stores. The winners survive on speed (selling inventory fast) and scale (buying cheaper than rivals). Walmart, the world's biggest company by revenue at $681B, keeps roughly 3 cents per dollar: the game is volume, not markup."] },
    L2: { title: "Intermediate", text: ["The core math is gross margin times inventory turns: a grocer at 22% margin turning stock 15x a year beats a boutique at 45% turning 2x. Formats are strategies: clubs (Costco) profit from membership fees, discounters (Aldi) from ruthless simplicity, off-price (TJX: $56.4B sales, comps +4% in FY2025) from buying other retailers' mistakes. Watch same-store sales and whether inventory grows faster than sales: that gap predicted the 2022 markdown bloodbath."] },
    L3: { title: "Advanced", text: ["Model retail as 2 P&Ls: merchandise (comps, gross margin, shrink, freight) and ecosystem (retail media, membership, marketplace: ~$166B of global ad spend in 2025 at software margins). Mix shift between them drives re-ratings more than comps do. Tariffs enter via landed cost with a 1-2 quarter lag through inventory accounting; the 2025 China spike (145% peak, ~30% settled) is the live case study. Negative working capital is the quiet superpower: suppliers finance the shelf."] },
    L4: { title: "Expert", text: ["Trade the dispersion: long share-shift compounders (clubs, off-price, ecosystem scale), avoid the middle, and use the Census tape, port volumes, and inventories-to-sales for timing. Live debates: whether value retail's premium multiples price a regime or a cycle, whether retail media is incremental budget or re-labeled trade spend, and whether tariff pass-through breaks a price-fatigued consumer. Holiday concentration means the year is decided in 8 weeks: position for the guide, not the print."] },
    L5: { title: "Institutional", text: ["Allocator's frame: retail is a $31T revenue pool with a tiny, violently redistributing profit pool. Own the redistribution: traffic monetized twice (goods plus media and fees), buying scale that compounds through every shock, and counter-cyclical models (off-price) that profit from rivals' mistakes. The short side writes itself in the undifferentiated middle, but timing is brutal: thin-margin operating leverage cuts both ways. Every retail thesis reduces to one question: does this operator turn inventory and traffic into cash faster than its costs and its competitors move."] }
  },

  quiz: [
    { q: "Typical net margins across most of retail run:", choices: ["10% to 15%", "2% to 4%: the thinnest cushion of any giant industry", "20%+", "Negative"], answer: 1, explain: "Walmart's FY2025 numbers are the benchmark: 4.3% operating margin, ~3% net, on $681B of revenue. Velocity, not markup, is the business." },
    { q: "The core return equation in retail is:", choices: ["Store count x square footage", "Gross margin x inventory turns", "Revenue x employees", "Markup x advertising"], answer: 1, explain: "GMROI fuses them: a 22%-margin grocer turning 15x can out-earn a 45%-margin boutique turning 2x. Every format is a different answer to this equation." },
    { q: "Costco's profit engine is primarily:", choices: ["Merchandise markup", "Real estate", "Membership fees: goods are sold near cost", "Advertising"], answer: 2, explain: "The club model sells goods at razor-thin margins to justify the fee, and renewal rates above 90% make that fee line an annuity." },
    { q: "Retail media matters because:", choices: ["It replaces TV ads", "It is ~$166B of 2025 ad spend at 70%+ margins: a second P&L on the same traffic", "It reduces shrink", "Regulators require it"], answer: 1, explain: "For a 3%-margin retailer, ad dollars at software margins re-rank the profit pool; Amazon alone takes ~75% of US retail media (eMarketer, 2025)." },
    { q: "TJX's off-price model wins by:", choices: ["Exclusive brand launches", "Buying other retailers' excess inventory cheap and turning it fast", "Online-only sales", "Luxury positioning"], answer: 1, explain: "FY2025: $56.4B in sales, +4% comps, ~9% net margin, roughly triple the industry norm: the counterparty that profits from everyone else's inventory mistakes." },
    { q: "The 2022 inventory glut taught investors to watch:", choices: ["Store openings", "Inventory growth vs sales growth: when inventory outruns sales, markdowns follow", "CEO changes", "Dividend yields"], answer: 1, explain: "Over-ordering into a demand pivot forced billions in markdowns at Target and peers; the ratio deteriorated visibly quarters before the earnings damage." },
    { q: "2025 tariffs hit retail P&Ls:", choices: ["Immediately, in the same week", "With a 1-2 quarter lag, through inventory accounting on goods bought earlier", "Never: retailers are exempt", "Only via currency"], answer: 1, explain: "Costs flow through inventory before hitting cost of goods sold: the 145%-to-30% China whipsaw showed up in margins well after the headlines." },
    { q: "The 'retail apocalypse' of 2017 is best read as:", choices: ["The death of all stores", "A sorting: the undifferentiated middle died while value and scale formats compounded", "An e-commerce failure", "A regulation story"], answer: 1, explain: "Sears and Toys R Us fell while Walmart, Costco, and TJX made new highs: share redistribution, not industry extinction." }
  ],

  sources: [
    { name: "NRF 2025 retail sales forecast ($5.42T-$5.48T)", url: "https://nrf.com/media-center/press-releases/nrf-forecasts-2025-retail-sales-to-hit-5-42-trillion-despite-economic-uncertainty", feeds: "market size, growth" },
    { name: "Walmart FY2025 10-K ($681B revenue)", url: "https://www.sec.gov/Archives/edgar/data/104169/000010416925000021/wmt-20250131.htm", feeds: "financials, margins" },
    { name: "eMarketer retail media forecasts (~$166B global, 2025)", url: "https://www.emarketer.com/content/retail-media-search-ad-spending-forecast-trends-2025", feeds: "retail media" },
    { name: "TJX Q4/FY2025 results ($56.4B sales, +4% comps)", url: "https://investor.tjx.com/news-releases/news-release-details/tjx-companies-inc-reports-q4-and-fy25-results-q4-comp-store", feeds: "off-price economics" }
  ]
};
