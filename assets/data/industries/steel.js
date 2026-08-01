/* Industry Atlas - STEEL (full module, research-backed)
 * Anchors: global crude steel 1,849 Mt in 2025 with China at 961 Mt, ~52% share
 * (worldsteel press release, Jan 2026); China exports hit a record ~118 Mt in 2024
 * (+24% y/y) and tracked toward 115-120 Mt in 2025 despite 62 countries imposing
 * 207 trade restrictions (GMK Center, Oct 2025); US Section 232 steel tariff
 * doubled from 25% to 50% effective June 4, 2025; EU CBAM fully in force
 * Jan 1, 2026, with safeguard quotas cut ~50% and out-of-quota duty doubled to
 * 50% (April 2026 provisional deal); EAF made 29.1% of global steel in 2024
 * (US ~72%, China ~10%; worldsteel World Steel in Figures 2025); Stegra's Boden
 * hydrogen-DRI plant: EUR 6.5B raised, 700 MW electrolysis, 2.5 Mtpa (startup
 * targeted 2026); top producers 2025: Baowu 124.8 Mt, ArcelorMittal 63.4 Mt,
 * Nippon Steel 57.8 Mt after closing U.S. Steel (worldsteel); Nucor FY2025 net
 * income ~$1.7B, (14%) y/y. Sources: worldsteel.org, gmk.center, bcg.com, SEC. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["steel"] = {
  meta: {
    id: "steel", name: "Steel", sector: "materials", status: "full",
    tagline: "1.85 billion tonnes a year, half of it Chinese, all of it cyclical: the world's most political commodity business.",
    marketSize: { value: 1.4, unit: "$T", asOf: 2025, note: "~1,849 Mt of crude steel (worldsteel) at a blended ~$750/t of finished product" },
    cagr: { value: 2, range: [0, 3], horizon: "2025-2030" },
    maturity: "mature-cyclical", cyclicality: 5, capitalIntensity: 5, regulation: 4, disruption: 3
  },
  newsQuery: '("crude steel" OR ArcelorMittal OR Nucor OR Baowu OR "steel tariff" OR "green steel" OR "steel exports" OR "electric arc furnace")',

  overview: {
    definition: "The steel industry converts iron ore, coking coal, and scrap into the structural metal of civilization: about 1,849 Mt of crude steel in 2025 (worldsteel), feeding construction, autos, machinery, energy, and appliances. It is capital-heavy, deeply cyclical, trade-war-prone, and now racing to decarbonize the 7% to 8% of global CO2 emissions it produces.",
    howItWorks: [
      "Two process routes split the industry. The blast furnace-basic oxygen (BF-BOF) route smelts iron ore with coking coal: enormous scale, low variable cost when running full, brutal fixed costs when not, and roughly 2 tonnes of CO2 per tonne of steel. The electric arc furnace (EAF) route melts scrap with electricity: smaller, flexible, cleaner, and dominant wherever scrap is abundant. Globally EAF made 29.1% of steel in 2024; in the US it is ~72%, in China only ~10% (worldsteel), which is why the decarbonization map is really a map of scrap availability.",
      "China is not a participant in this market; it IS half the market. Chinese mills produced 961 Mt in 2025, about 52% of world output (worldsteel, Jan 2026), against domestic demand sinking with the property bust. The overflow goes abroad: exports hit a record ~118 Mt in 2024 (+24% y/y) and tracked toward 115-120 Mt in 2025 (GMK Center), an export flood larger than the entire output of any other country except India. Every other steel market's price, margin, and politics are downstream of this imbalance.",
      "The rest of the world responds with walls. The US doubled its Section 232 steel tariff from 25% to 50% on June 4, 2025; the EU switched on CBAM carbon border charges on January 1, 2026 and agreed in April 2026 to cut steel import quotas roughly 50% while doubling the out-of-quota duty to 50%; by late 2025, 62 countries had 207 restrictions aimed at Chinese steel (GMK Center). Steel prices are therefore regional, not global: US hot-rolled coil can trade at 2x the Chinese export price, and a mill's profitability depends as much on which side of a tariff wall it sits as on how well it runs.",
      "Profit lives in the spread, not the price: metal spread = steel price minus raw materials (scrap for EAFs; iron ore plus coking coal for blast furnaces). Fixed costs are so heavy that a $50/t spread move swings mills from record profits to losses, which is why steel equities behave like leveraged options on the spread. The long game is the green transition: hydrogen direct-reduced iron (DRI) projects like Stegra's Boden plant in Sweden (EUR 6.5B raised, 700 MW of electrolysis, 2.5 Mtpa targeted from 2026) promise ~95% CO2 cuts at a cost premium someone, customer or state, must pay."
    ],
    history: [
      { era: "1856-1900", title: "Bessemer to Carnegie", text: "The Bessemer converter makes steel cheap; rails and skyscrapers follow. Carnegie's mills make the US the world's producer, and in 1901 J.P. Morgan assembles U.S. Steel, the first $1B+ corporation." },
      { era: "1901-1970", title: "The integrated century", text: "Blast furnaces power two world wars and the postwar boom. Big Steel becomes synonymous with national power: every industrializing state builds its own mills, usually state-owned." },
      { era: "1970-2000", title: "Rust Belt and mini-mills", text: "Japan, then Korea, out-invest the West; oil shocks crush demand. Dozens of US integrated mills go bankrupt while Nucor's scrap-fed mini-mills rewrite the cost curve from below." },
      { era: "2001-2014", title: "The China supercycle", text: "Chinese output grows from ~150 Mt to ~800 Mt in 15 years, dragging iron ore and every steel asset up with it. Mittal rolls up the West's mills, taking Arcelor in 2006 to form the first 100 Mt producer." },
      { era: "2015-present", title: "Overcapacity and the green race", text: "China's slowdown turns surplus into export floods (2015, then a record ~118 Mt in 2024). Tariff walls rise everywhere, CBAM prices carbon at the EU border, and hydrogen-DRI pilots turn decarbonization into the industry's first new technology race in 50 years." }
    ],
    trends: [
      { title: "The second China export flood", direction: "up", text: "Record ~118 Mt exported in 2024, near-repeat in 2025 (GMK Center): property-bust overflow priced to move, pressuring every open market and triggering 200+ trade actions." },
      { title: "Tariff walls and market fragmentation", direction: "shift", text: "Section 232 at 50% (June 2025), EU quotas cut ~50% with 50% out-of-quota duty (April 2026): one global price is becoming 3 or 4 regional ones, and location beats efficiency." },
      { title: "EAF share grinding higher", direction: "up", text: "29.1% of global output in 2024 and rising: China's scrap pool is projected to roughly triple by 2035, which would flip the world's biggest BF fleet toward electric melting." },
      { title: "Green steel gets real", direction: "up", text: "Stegra's Boden hydrogen-DRI plant (2.5 Mtpa, ~95% CO2 cut) targets 2026 startup; CBAM gives low-carbon steel a priced advantage in Europe from January 2026." },
      { title: "Demand intensity past peak", direction: "down", text: "China's construction-led steel intensity has peaked; global demand growth now leans on India, infrastructure, and energy transition steel (grids, turbines, EVs) at low single digits." }
    ],
    outlook: "Flat-to-slow global volume with violent regional divergence. Protected markets (US, increasingly EU) keep spreads above history behind tariff and carbon walls; open markets absorb Chinese surplus until Beijing cuts capacity in earnest. The EAF share keeps climbing with scrap supply, and the green premium becomes a real P&L line in Europe under CBAM. The investable industry splits in two: cost-curve leaders behind walls (US mini-mills, Indian growth) and green-transition option value (hydrogen DRI), with the undifferentiated middle earning its cost of capital only at cycle peaks."
  },

  structure: {
    suppliers: [
      { name: "Iron ore majors (Vale, Rio Tinto, BHP, Fortescue)", note: "A seaborne oligopoly that historically captures more profit than the mills it feeds" },
      { name: "Coking coal miners (BHP, Teck heritage, Mongolian and Australian mines)", note: "The blast furnace's second feedstock and its carbon liability" },
      { name: "Scrap processors (Sims, regional dealers)", note: "The EAF era's ore: fragmented collection, increasingly strategic" },
      { name: "Equipment and technology (SMS group, Danieli, Primetals, Midrex)", note: "Furnaces, casters, rolling mills, and the DRI licenses behind green steel" }
    ],
    producers: [
      { name: "China Baowu", note: "World #1 at 124.8 Mt (2025, worldsteel): a state-built consolidation vehicle" },
      { name: "ArcelorMittal", note: "#2 at 63.4 Mt across 4 continents: the global diversified benchmark" },
      { name: "Nippon Steel", note: "#3 at 57.8 Mt after closing the U.S. Steel acquisition in June 2025" },
      { name: "Nucor and the mini-mills", note: "The EAF model's proof: FY2025 net income ~$1.7B even in a down year" }
    ],
    distributors: [
      { name: "Service centers (Reliance Inc., Ryerson, Klockner)", note: "Buy coil, cut and process to order: the industry's inventory buffer and margin stabilizer" },
      { name: "Traders (Duferco, Stemcor heritage, Japanese sogo shosha)", note: "Move surplus across borders: the arbitrage layer tariffs are aimed at" }
    ],
    customers: [
      { name: "Construction (~50% of demand)", note: "Rebar, sections, decking: the reason steel demand tracks property and infrastructure" },
      { name: "Automotive (~12%)", note: "The quality-critical buyer: exposed-panel sheet is the industry's hardest product" },
      { name: "Machinery, energy, appliances", note: "Yellow goods, pipelines, wind towers, white goods: the diversified tail" }
    ],
    regulators: [
      { name: "Trade authorities (USTR/Commerce, European Commission)", note: "Section 232, safeguards, anti-dumping: the profit pool's real architects" },
      { name: "Carbon regimes (EU ETS + CBAM)", note: "CBAM live January 2026: carbon cost now follows steel across the EU border" },
      { name: "OECD Steel Committee", note: "The overcapacity scorekeeper: much cited, little obeyed" }
    ],
    capital: [
      { name: "State capital (China, India, Southeast Asia)", note: "Most of the world's capacity was built for strategy, not returns: the structural overhang" },
      { name: "Public equity and bonds", note: "Western mills fund through cycles; ratings hinge on through-cycle leverage discipline" },
      { name: "Green transition funding (EU Innovation Fund, government grants)", note: "Stegra's EUR 6.5B package shows the blended state-private model hydrogen DRI requires" }
    ]
  },

  valueChain: {
    intro: "From ore and scrap to coated coil in a car door. The profit pool sits at the ends: miners upstream and processors downstream out-earn the melt shops in the middle, except where tariff walls or technology change the math.",
    stages: [
      { id: "raw-materials", name: "Iron ore, coal & scrap", what: "The feedstock triangle: ore + coking coal for BF, scrap for EAF", players: "Vale, Rio Tinto, BHP; Sims and scrap dealers", valueCapture: 4,
        economics: { grossMargin: [35, 55], capitalIntensity: 5, concentration: 4 },
        linksTo: ["mining", "shipping"],
        deeper: "The seaborne iron ore oligopoly has out-earned steelmakers for 2 decades: concentrated supply selling into fragmented demand. Scrap is the strategic reserve of the EAF era: China's pool is projected to roughly triple from ~220 Mt (2025) toward 600 Mt by 2035, the single biggest force reshaping the industry's process mix." },
      { id: "steelmaking", name: "Iron & steelmaking", what: "BF-BOF smelting or EAF melting into crude steel", players: "Baowu, ArcelorMittal, Nippon Steel, Nucor, POSCO", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 5, concentration: 2 },
        linksTo: ["mining", "hydrogen", "utilities"],
        deeper: "The tonnage stage with the worst economics: 1,849 Mt of 2025 output chasing maybe 1.75 Bt of demand. A greenfield integrated mill costs $1B+ per Mtpa and runs 40+ years, so capacity exits slowly and losses cut deep. EAFs changed the entry math: a fraction of the capital, scalable, and 70%+ of US output." },
      { id: "rolling", name: "Rolling & finishing", what: "Casting, hot and cold rolling, galvanizing, coating", players: "Integrated into most mills; rerollers in open markets", valueCapture: 3,
        economics: { grossMargin: [8, 18], capitalIntensity: 4, concentration: 3 },
        linksTo: ["manufacturing", "automotive"],
        deeper: "Where commodity slab becomes differentiated product: exposed automotive sheet, high-strength grades, coated coil. Value-added mix is the main lever separating a $50/t EBITDA mill from a $150/t one, and the reason auto-certified capacity earns a durable premium." },
      { id: "distribution", name: "Service centers & trade", what: "Stocking, cutting, processing, and moving steel to fabricators", players: "Reliance Inc., Ryerson, traders, sogo shosha", valueCapture: 3,
        economics: { grossMargin: [12, 25], capitalIntensity: 2, concentration: 2 },
        linksTo: ["logistics", "construction"],
        deeper: "The industry's shock absorber: service centers buy at mill price, sell processed at spread, and turn inventory fast. Less cyclical and higher-ROIC than the mills they buy from: Reliance has compounded through every steel cycle since the 1990s. Traders intermediate the surplus flows that tariff regimes now target." },
      { id: "specialty", name: "Specialty & high-grade steel", what: "Stainless, electrical steel, tool steel, aerospace grades", players: "Outokumpu, Aperam, voestalpine, Carpenter", valueCapture: 4,
        economics: { grossMargin: [15, 30], capitalIntensity: 4, concentration: 4 },
        linksTo: ["ev", "aerospace", "defense"],
        deeper: "Small tonnage, real margins: grain-oriented electrical steel for transformers and EV motors is sold out globally on grid and electrification demand. Certification and metallurgy know-how create actual moats here, unlike carbon steel where the moat is a tariff." },
      { id: "green-transition", name: "Green steel & the scrap loop", what: "Hydrogen DRI, CCUS, recycling: decarbonizing 7% to 8% of global CO2", players: "Stegra, SSAB (HYBRIT), ArcelorMittal, Midrex", valueCapture: 3,
        economics: { grossMargin: [0, 20], capitalIntensity: 5, concentration: 3 },
        linksTo: ["hydrogen", "utilities", "carbon-markets"],
        deeper: "The first new process race in 50 years. Stegra's Boden plant (EUR 6.5B, 700 MW electrolysis, 2.5 Mtpa, ~95% CO2 cut) is the greenfield test; SSAB's HYBRIT the incumbent's version. CBAM (live January 2026) converts carbon intensity into landed cost in the EU, giving green tonnes a priced edge: whether the premium covers the capital is THE open question." }
    ]
  },

  financials: {
    businessModel: [
      "A steel mill's P&L is a spread on legs of fixed cost. Revenue = tonnes shipped x realized price per tonne; cost = raw materials (60% to 70% of it) + energy + labor + heavy depreciation. The metal spread (steel price minus scrap or minus ore-plus-coal) does almost all the work: with fixed costs this large, a $50/t spread move can double or erase EBITDA. That is why steel equities trade like leveraged bets on the spread, and why EBITDA per tonne is the industry's universal scorecard: mini-mills through-cycle earn maybe $100 to $150/t, commodity integrated mills far less, specialty far more.",
      "Balance-sheet posture decides who survives the trough and who compounds. The modern playbook (Nucor is the archetype) runs low leverage, variable-cost labor, countercyclical capex, and buybacks at the bottom: Nucor still earned ~$1.7B of net income in FY2025, a down year at (14%) y/y. The old playbook (high fixed costs, peak-cycle acquisitions) produced the bankruptcy wave of the early 2000s. Regional exposure is now a financial characteristic too: a tonne sold behind the US tariff wall in 2025 could earn 2x the spread of the same tonne sold into Asia."
    ],
    fingerprint: { grossMargin: 12, recurringRevenue: 10, capitalIntensity: 90, pricingPower: 25, cyclicality: 90, operatingLeverage: 85 },
    lines: [
      { label: "Shipments (tonnes)", note: "The volume line: watch utilization vs nameplate capacity" },
      { label: "Realized price / t", note: "Regional and product mix in one number: US HRC vs export Asia can differ 2x" },
      { label: "Metal spread / t", note: "Price minus scrap (EAF) or ore + coal (BF): the actual profit engine" },
      { label: "EBITDA / t", note: "The cross-cycle scorecard: compare mills on it, not on margin %" },
      { label: "Capex: maintain vs grow vs green", note: "Decarbonization adds a third bucket that ratings agencies now price" }
    ],
    unitEconomics: {
      unit: "per tonne of hot-rolled coil (illustrative, 2025 vintage)",
      items: [
        { label: "US HRC price", value: "~$800-900/t", note: "tariff-supported; Chinese export offers ran near $450-500/t" },
        { label: "EAF raw materials", value: "~$400-450/t", note: "~1.1t scrap plus alloys; moves with the scrap market" },
        { label: "Conversion + labor + energy", value: "~$150-200/t", note: "EAF flexes down in troughs; BF barely can" },
        { label: "EBITDA / t (mini-mill, mid-cycle)", value: "~$100-150/t", note: "peaked above $500/t in the 2021 squeeze" }
      ]
    }
  },

  kpiRefs: ["mining-aisc", "energy-capacity-factor"],
  kpiLocal: [
    {
      id: "steel-metal-spread", name: "Metal Spread", industries: ["steel"],
      definition: "Realized steel price minus raw material cost per tonne: scrap for EAF mills, iron ore plus coking coal for blast furnace mills.",
      formula: "Spread = price/t (minus) feedstock cost/t; EBITDA/t = spread (minus) conversion cost/t",
      interpretation: "The single number that drives steel earnings: fixed costs are so heavy that spread moves flow almost straight to EBITDA. Regional spreads diverge sharply under tariffs: US spreads ran roughly 2x Asian export spreads in 2025.",
      healthy: "Spread comfortably above conversion cost with room for capex", warning: "Spread compressing toward conversion cost: trough conditions, cash burn for high-cost mills" },
    {
      id: "steel-capacity-utilization", name: "Capacity Utilization", industries: ["steel"],
      definition: "Crude steel production as a share of installed capacity, the industry's structural health gauge.",
      formula: "Utilization = production / nameplate capacity (mill, country, or world)",
      interpretation: "Below ~80% globally signals overcapacity pressing on prices; the world has run below that for most of the post-2015 era because Chinese capacity exceeds domestic demand by a wide margin.",
      healthy: "85%+ sustained at the mill level; global trend rising", warning: "Sub-75% global utilization with exports rising: flood conditions" }
  ],

  health: {
    intro: "Steel health is cost-curve position first, balance sheet second, and increasingly carbon-transition readiness: the cycle punishes the expensive and the levered, and CBAM now taxes the dirty.",
    pillars: [
      { name: "Cost curve position", weight: 30, metrics: "EBITDA/t vs peers, feedstock integration, energy costs, EAF vs BF mix", healthy: "First-quartile cash cost; spreads positive through troughs", warning: "Fourth-quartile costs surviving on tariffs or subsidies alone" },
      { name: "Balance sheet & cycle discipline", weight: 25, metrics: "Net debt / mid-cycle EBITDA, capex timing, buyback discipline", healthy: "Under 1.5x mid-cycle leverage; countercyclical capital returns", warning: "Peak-cycle M&A, trough refinancing (the 2001 bankruptcy pattern)" },
      { name: "Mix & value-add", weight: 15, metrics: "Share of value-added and certified products, contract vs spot", healthy: "Auto/electrical/specialty grades a rising share; sticky contracts", warning: "Pure commodity long products in an open market" },
      { name: "Regional & trade positioning", weight: 15, metrics: "Share of volume behind tariff/carbon walls, export dependence", healthy: "Capacity inside protected, growing demand regions", warning: "Export-reliant capacity aimed at markets raising barriers (the 2025-2026 squeeze)" },
      { name: "Decarbonization readiness", weight: 15, metrics: "CO2/t vs benchmarks, CBAM exposure, credible transition path and funding", healthy: "EAF/DRI roadmap funded; CBAM a tailwind", warning: "Old BF fleet, no funded plan: relining decisions due in the 2030s" }
    ],
    scoringNote: "Score through the cycle, never at the peak: 2021 made every mill look brilliant and 2015 made every mill look doomed. The durable question is who earns their cost of capital at mid-cycle spreads."
  },

  valuation: {
    intro: "The market pays for through-cycle EBITDA/t, balance sheet resilience, and position behind walls: it pays nothing for peak earnings, which is why steel looks cheapest at the top.",
    methods: [
      { name: "EV / EBITDA (mid-cycle)", use: "The standard lens: normalize EBITDA/t across a cycle, not the last 12 months", avoid: "Trailing multiples at spread extremes: 3x at the peak is not cheap", strengths: "Comparable across regions and process routes", weaknesses: "Choosing mid-cycle is half art; regional walls shift it", range: { low: 4, high: 7, asOf: 2025, note: "US mini-mills command the top; commodity BF exporters the bottom" } },
      { name: "EV per tonne of capacity", use: "Asset deals and replacement-cost sanity checks", avoid: "Treating all tonnes alike: a coated-sheet tonne is not a rebar tonne", strengths: "Cuts through earnings noise; anchors M&A", weaknesses: "Ignores cost position and carbon liability", range: { low: 200, high: 900, asOf: 2025, note: "$/t of capacity; greenfield integrated runs $1,000+ which is why M&A beats building" } },
      { name: "FCF yield through-cycle", use: "The discipline test: mills that convert EBITDA to cash across a full cycle", avoid: "Single-year yields: working capital swings dominate short windows", strengths: "Rewards the Nucor playbook of countercyclical capital returns", weaknesses: "Green capex muddies the denominator for a decade", range: { low: 5, high: 12, asOf: 2025, note: "% yields; the market demands a premium yield for cyclicality" } },
      { name: "Price / tangible book", use: "Deep-cycle troughs and restructuring cases", avoid: "Book values carrying obsolete BF assets or unfunded carbon liabilities", strengths: "A floor when earnings vanish", weaknesses: "Book can overstate a stranded asset badly", range: { low: 0.5, high: 1.5, asOf: 2025, note: "x tangible book; sub-0.7x historically marked trough entry points" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a steelmaker fast: mid-cycle EBITDA times a route-and-region-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 15, step: 0.5, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 3, max: 10, step: 0.5, value: 5.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 30, step: 1, value: 3, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk trades steel as a spread cycle wrapped in trade policy: own the low-cost, low-leverage compounders behind tariff walls as core, rent the high-beta commodity names only at trough valuations with China policy as the trigger, and treat green steel as long-dated optionality funded by someone else's balance sheet. The China supply decision matters more than any company's execution.",
    debates: [
      { topic: "China overcapacity: managed decline or permanent flood?", bull: "Beijing has done it before: the 2016-2017 supply-side reform cut 150 Mt of capacity and doubled global prices. With property structurally smaller, closures are politically easier, and every exported tonne now buys a trade war: the 2025 output cut to 961 Mt is the start of a real decline that re-tightens the world.", bear: "Steel employment is regional politics in China: provinces protect their mills, capacity swaps replace rather than retire, and exports at ~118 Mt clear the surplus without closures. Absent a forced consolidation, the flood is the steady state and every non-Chinese spread stays capped at the tariff wall." },
      { topic: "US mini-mill premium: structural moat or policy artifact?", bull: "Nucor and Steel Dynamics earn first-quartile costs, run fortress balance sheets, and sit behind a 50% tariff both parties support: reshoring, grid, and infrastructure demand give them volume growth no other developed market has. The premium multiple is earned twice over.", bear: "Strip the tariff and US HRC converges toward import parity: the premium is a political annuity, revocable by one proclamation or one trade deal. Meanwhile capacity additions inside the wall (new EAF sheet mills) are quietly rebuilding oversupply domestically: the wall keeps imports out, not discipline in." },
      { topic: "Green steel: the next moat or a capital bonfire?", bull: "CBAM prices carbon at the EU border from January 2026: green tonnes carry a regulatory cost advantage that widens every year the ETS tightens. First movers (Stegra, SSAB) lock scarce renewable power, permits, and auto contracts: premium pricing plus policy tailwind on a 40-year asset.", bear: "Hydrogen DRI needs cheap firm clean power at a scale that barely exists: Stegra's EUR 6.5B for 2.5 Mtpa implies capital intensity several times a conventional mill, for a product whose premium autos pay only in press releases. If CBAM leaks or politics soften, the pioneers own stranded electrolyzers." }
    ],
    cycle: {
      where: "Trough-to-early-repair outside the US: Chinese demand still falling with property, exports at flood records, and non-Chinese spreads compressed, but tariff and CBAM walls (2025-2026) are re-partitioning the market, and Chinese output has now fallen 5 straight years from the 2020 peak. Behind US walls: mid-cycle, softening from the 2021-2022 super-spike.",
      drivers: "Chinese property and infrastructure (half of global demand), Chinese capacity policy, tariff and carbon-border regimes, scrap availability, energy prices, and global construction/auto volumes.",
      leads: [
        "China monthly crude steel output and exports (NBS and customs data, free)",
        "worldsteel monthly production releases (free, ~25th of each month)",
        "Iron ore spot and HRC futures (CME/SGX, free delayed quotes)",
        "China property new starts and PMI (NBS, free): the demand engine's tachometer",
        "Trade actions pipeline: Section 232 reviews, EU safeguard decisions (official journals, free)"
      ]
    },
    exposure: [
      { vehicle: "US mini-mills (Nucor, Steel Dynamics class)", note: "The quality core: low cost, low leverage, tariff-sheltered, countercyclical buybacks" },
      { vehicle: "ArcelorMittal class (global diversified)", note: "The mid-cycle value trade: cheap on assets, hostage to Europe's energy and China's exports" },
      { vehicle: "Iron ore majors (Vale, Rio, BHP)", note: "Upstream expression: steel's profit pool has often lived here instead" },
      { vehicle: "Service centers (Reliance Inc. class)", note: "Steel exposure with less cyclicality and better ROIC: the distribution toll booth" },
      { vehicle: "Green steel and DRI enablers (SSAB, Midrex licensees, electrolyzer chain)", note: "Long-dated CBAM-backed optionality; size it like venture, not value" }
    ],
    catalysts: [
      { when: "Monthly (~25th)", what: "worldsteel production print: China share and global run-rate in one table" },
      { when: "Quarterly earnings", what: "EBITDA/t, spread commentary, and capex guidance: the mills mark the cycle to market" },
      { when: "Policy windows (2026)", what: "EU safeguard replacement (July 2026), CBAM first full reporting year, any Section 232 renegotiation" },
      { when: "China policy meetings (March NPC, July Politburo)", what: "Capacity-cut and stimulus signals: the single biggest swing factor for global spreads" }
    ],
    data: [
      { series: "Monthly crude steel production by country", source: "worldsteel.org press releases (free)", why: "The global tape: output, China share, regional trends" },
      { series: "China steel exports and iron ore imports", source: "China customs monthly data (free via press aggregation)", why: "The flood gauge that sets non-Chinese spreads" },
      { series: "US HRC futures and Midwest premium", source: "CME (free delayed)", why: "The protected market's price signal, tradable and forward-looking" },
      { series: "Producer price indices for steel mill products", source: "FRED (free)", why: "Long-run realized price history for US mills" },
      { series: "EU ETS carbon price", source: "EU/exchange data (free delayed)", why: "Sets CBAM's bite and the green steel premium's floor" }
    ],
    playbook: [
      { regime: "Global recession", behavior: "Spreads collapse first, equities before earnings: high-cost and levered names go first. Buy the survivors at tangible book once capacity cuts start, not before." },
      { regime: "China stimulus / capacity cuts", behavior: "The 2016 template: everything rallies, commodity names most. The trade is fast and front-runs the data: watch policy language, not output prints." },
      { regime: "Tariff escalation", behavior: "Protected-market mills re-rate up, exporters and traders de-rate; watch for domestic capacity additions eroding the wall's value from inside within 2-3 years." },
      { regime: "Energy shock", behavior: "European EAFs and DRI curtail on power prices (the 2022 template); US gas-and-scrap mills gain share. Green steel timelines slip: cheap clean power is the whole thesis." }
    ]
  },

  players: [
    { name: "China Baowu", role: "World #1 producer", country: "CN", real: true, note: "124.8 Mt in 2025 (worldsteel): the state-directed consolidator of Chinese steel" },
    { name: "ArcelorMittal", role: "Global diversified #2", country: "LU", real: true, note: "63.4 Mt across Europe, Americas, Africa: the industry's global bellwether" },
    { name: "Nippon Steel", role: "#3 and transpacific buyer", country: "JP", real: true, note: "57.8 Mt in 2025 after closing the U.S. Steel acquisition (June 2025)" },
    { name: "Nucor", role: "EAF model archetype", country: "US", real: true, note: "100% EAF, ~$1.7B FY2025 net income; the cycle-discipline benchmark" },
    { name: "POSCO", role: "Korean integrated leader", country: "KR", real: true, note: "Among the lowest-cost BF operators; pivoting into batteries and hydrogen DRI" },
    { name: "Tata Steel / JSW", role: "India's growth engines", country: "IN", real: true, note: "India is the only major market adding demand AND capacity at scale" },
    { name: "Cleveland-Cliffs", role: "US integrated + auto sheet", country: "US", real: true, note: "Vertically integrated ore-to-auto-sheet: the tariff wall's integrated expression" },
    { name: "SSAB / Stegra", role: "Green steel vanguard", country: "SE", real: true, note: "HYBRIT pilot and the EUR 6.5B Boden hydrogen-DRI greenfield (2.5 Mtpa, ~2026)" }
  ],

  geography: [
    { country: "CN", role: "Half the industry", note: "961 Mt in 2025, ~52% of world output; exports near records reshape every other market" },
    { country: "IN", role: "The growth market", note: "#2 producer and rising: the only large economy still adding steel intensity" },
    { country: "US", role: "The protected EAF market", note: "~72% EAF, 50% Section 232 wall, structurally highest prices in the world" },
    { country: "JP", role: "Quality incumbent", note: "Nippon Steel and JFE: shrinking at home, buying abroad (U.S. Steel, India JVs)" },
    { country: "KR", role: "Efficient exporter", note: "POSCO and Hyundai Steel: world-class costs squeezed between China and tariffs" },
    { country: "DE", role: "Europe's industrial core", note: "thyssenkrupp and the CBAM test bed: high energy costs meet the green transition first" }
  ],

  cycles: [
    { year: 1901, title: "U.S. Steel: the first billion-dollar company", kind: "boom", text: "Morgan merges Carnegie's empire into a corporation capitalized at $1.4B, controlling ~2/3 of US output. Lesson: steel invented industrial gigantism, and market share bought at the peak erodes from day one." },
    { year: 1982, title: "Rust Belt collapse", kind: "bust", text: "Oil shocks, imports, and mini-mills break Big Steel: dozens of integrated mills close and steel towns hollow out across a decade. Lesson: high fixed costs plus a new low-cost process route is a death sentence, however dominant the incumbent." },
    { year: 2008, title: "Supercycle peak", kind: "boom", text: "China's build-out drives global output past 1.3 Bt and Mittal assembles the first 100 Mt producer; then the GFC cuts demand 25% in months. Lesson: the cycle always looks structural at the top: capacity built for the peak is serviced in the trough." },
    { year: 2015, title: "The first China flood", kind: "bust", text: "Chinese exports hit 112 Mt as domestic demand stalls; global prices halve, and the political reaction seeds Section 232. Lesson: one country's overcapacity becomes everyone's trade policy." },
    { year: 2021, title: "The COVID whiplash squeeze", kind: "boom", text: "Restart demand meets curtailed supply: US HRC touches ~$1,900/t, 4x pre-COVID, and mills bank record profits into buybacks and new EAFs. Lesson: in commodity cycles the cure for high prices is high prices: the capacity ordered in 2021 pressures spreads by 2025." }
  ],

  risks: [
    { name: "Chinese export flood persists", severity: 4, likelihood: 4, transmission: "Property bust keeps demand falling -> mills export the surplus (~118 Mt 2024 record) -> non-Chinese spreads compress -> trade walls rise further -> exporters and open-market mills bleed." },
    { name: "Structural demand erosion", severity: 4, likelihood: 3, transmission: "China steel intensity past peak + material substitution -> global demand flatlines -> chronic sub-80% utilization -> the industry earns below cost of capital outside protected niches." },
    { name: "Carbon transition capital trap", severity: 4, likelihood: 3, transmission: "CBAM and ETS tighten -> BF fleets need $100B+ of DRI/EAF conversion -> weak balance sheets cannot fund it -> stranded assets and forced consolidation in Europe first." },
    { name: "Trade policy whiplash", severity: 3, likelihood: 4, transmission: "Tariff walls built by proclamation die by proclamation -> a US-EU or US-China deal reopens protected markets -> premium spreads and premium multiples deflate together." },
    { name: "Energy price shock", severity: 3, likelihood: 3, transmission: "Power or gas spike (the 2022 Europe template) -> EAF and DRI economics invert -> curtailments, share shifts to coal-based BF output -> decarbonization stalls exactly when carbon prices rise." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Steel is the metal skeleton of buildings, cars, bridges, and machines: the world made about 1.85 billion tonnes of it in 2025, and China alone made about half. It is produced 2 ways: melting iron ore with coal in giant blast furnaces (the old, dirty way) or melting recycled scrap with electricity (the newer, cleaner way). Steel companies earn money when the gap between steel prices and raw material costs is wide, and lose it fast when the gap closes."] },
    L2: { title: "Intermediate", text: ["The industry runs on the metal spread (steel price minus scrap or ore-plus-coal) sitting on huge fixed costs, so small spread moves swing profits violently. China produces ~52% of world steel (961 Mt in 2025, worldsteel) but its demand is shrinking with the property bust, so record exports (~118 Mt in 2024) flood everyone else's markets. Governments respond with walls: a 50% US tariff (June 2025), EU carbon border charges (CBAM, January 2026), and 200+ trade restrictions worldwide. Result: steel prices are regional, and where a mill sits matters as much as how well it runs."] },
    L3: { title: "Advanced", text: ["Analyze mills on EBITDA per tonne through a full cycle, never on peak earnings: mini-mills (EAF, ~29% of global output and rising) flex costs and earn $100-150/t mid-cycle, while commodity blast furnace mills earn less with more capital at risk. The structural forces: Chinese scrap availability roughly tripling by 2035 pushes the world toward EAF; CBAM converts carbon intensity into landed cost in Europe; and hydrogen DRI (Stegra's 2.5 Mtpa Boden plant, EUR 6.5B) tests whether green steel earns a premium or burns capital. Balance sheet discipline separates compounders (Nucor: ~$1.7B net income even in the 2025 down year) from the bankruptcy file."] },
    L4: { title: "Expert", text: ["Trade the policy calendar as much as the spread: worldsteel monthly prints, China customs export data, NPC and Politburo language on capacity, Section 232 reviews, and the EU safeguard replacement due July 2026. Live debates: whether Beijing repeats the 2016 supply-side reform (the biggest single upside catalyst in the sector), whether the US mini-mill premium survives new domestic capacity inside the wall, and whether CBAM makes green steel a moat or a bonfire. Watch relining decisions on European blast furnaces in the 2030s: each one is a forced choice between $1B of old technology and $3B of new."] },
    L5: { title: "Institutional", text: ["Allocator's frame: steel is a deep-cyclical with state-distorted supply, so through-cycle alpha comes from 3 sleeves: quality compounders behind durable walls (US mini-mills) held as core, distressed-to-mid-cycle trades on the global names timed to Chinese policy inflections, and small, venture-sized positions in the green transition chain (DRI licenses, electrolyzers, premium green offtake). The upstream check: iron ore majors have captured more of the chain's profit than the mills for 2 decades: always ask whether the steel thesis is better expressed in the feedstock. Position sizing respects reflexivity: steel equities discount spread turns 6-9 months early, and the consensus mid-cycle is always wrong in the direction of the last peak."] }
  },

  quiz: [
    { q: "Global crude steel output in 2025 was roughly:", choices: ["500 Mt", "1,000 Mt", "1,850 Mt, with China at ~52%", "5,000 Mt"], answer: 2, explain: "worldsteel counted 1,849 Mt in 2025; China's 961 Mt was about 52%: half the industry inside one country's policy decisions." },
    { q: "The metal spread is:", choices: ["The width of a steel beam", "Steel price minus raw material cost per tonne: the industry's true profit engine", "A type of coating", "The gap between bid and ask on steel futures"], answer: 1, explain: "With massive fixed costs, spread moves flow almost straight to EBITDA: steel equities are leveraged bets on the spread." },
    { q: "The EAF (electric arc furnace) route matters because:", choices: ["It is the oldest process", "It melts scrap with electricity: cheaper to build, flexible, cleaner, and 29.1% of global output in 2024 and rising", "It requires more coal", "It only makes stainless"], answer: 1, explain: "EAF rewrote the cost curve (Nucor's rise) and is the decarbonization default wherever scrap is abundant: US output is ~72% EAF, China only ~10%." },
    { q: "China's steel exports in 2024:", choices: ["Fell to a decade low", "Hit a record ~118 Mt (+24% y/y), flooding open markets as domestic demand sank", "Were banned", "Went entirely to the US"], answer: 1, explain: "Property-bust overflow priced to move: by late 2025, 62 countries had 207 trade restrictions aimed at Chinese steel (GMK Center)." },
    { q: "On June 4, 2025 the US:", choices: ["Removed all steel tariffs", "Doubled the Section 232 steel tariff from 25% to 50%", "Nationalized U.S. Steel", "Joined CBAM"], answer: 1, explain: "The 50% wall made the US the world's most protected major steel market, and US prices decoupled further from world levels." },
    { q: "CBAM, live January 1, 2026, means:", choices: ["The EU subsidizes steel imports", "Steel imported into the EU pays for its embedded carbon: dirty tonnes cost more at the border", "China joins the EU ETS", "Steel is banned in construction"], answer: 1, explain: "CBAM converts carbon intensity into landed cost, giving low-carbon (EAF, hydrogen DRI) steel a priced advantage in Europe." },
    { q: "Stegra's Boden project is significant because:", choices: ["It is the largest blast furnace ever", "It is the first commercial-scale hydrogen-DRI greenfield: EUR 6.5B, 700 MW of electrolysis, 2.5 Mtpa, ~95% less CO2", "It mines iron ore", "It makes aluminum"], answer: 1, explain: "Boden is the test case for whether green steel earns its capital: hydrogen replaces coal as the chemical reductant." },
    { q: "The Nucor playbook that outperformed for decades:", choices: ["Maximum leverage at the peak", "Low-cost EAFs, low leverage, variable labor costs, and countercyclical capital returns", "Only exporting to China", "Avoiding scrap"], answer: 1, explain: "Cycle discipline is the moat: Nucor earned ~$1.7B even in the FY2025 down year while levered peers bled." }
  ],

  sources: [
    { name: "worldsteel 2025 production release (Jan 2026)", url: "https://worldsteel.org/media/press-releases/2026/december-2025-crude-steel-production-2025-global-crude-steel-production/", feeds: "output, China share" },
    { name: "worldsteel top steel producers", url: "https://worldsteel.org/data/top-steel-producers/", feeds: "company rankings" },
    { name: "GMK Center: EAF share and China trade restrictions", url: "https://gmk.center/en/news/the-share-of-eaf-in-global-steel-production-in-2024-increased-to-29-1/", feeds: "process mix, trade actions" },
    { name: "BCG: 50% Section 232 tariffs (June 2025)", url: "https://www.bcg.com/publications/2025/june-2025-update-impact-us-tariffs-50-percent-on-steel-aluminum", feeds: "trade policy" }
  ]
};
