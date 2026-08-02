/* Industry Atlas - ADVANCED MANUFACTURING (full module, research-backed)
 * Anchors: global manufacturing value added $16.8T in 2024, China $4.7T (~28%),
 * US $2.9T (World Bank / TheGlobalEconomy, 2024); US factory construction spend
 * tripled from ~$80B (2021) to a ~$235B peak annual rate (2024), cooling to
 * ~$190B SAAR by early 2026 (Census Bureau); $645B+ of semiconductor projects
 * announced across 140+ US sites since 2020 (SIA); ISM Manufacturing PMI 53.3
 * in June 2026, 6th straight month of expansion (ISM); 542,000 industrial
 * robots installed in 2024, double a decade ago, China 54% of them (IFR World
 * Robotics 2025); US manufacturing ~10% of GDP, ~12.8M workers (BLS 2024);
 * Germany industrial production (4.4%) in 2024 (Destatis). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["manufacturing"] = {
  meta: {
    id: "manufacturing", name: "Advanced Manufacturing", sector: "industrials", status: "full",
    tagline: "A $16.8T value-added machine being rewired by robots, subsidies, and geopolitics: the physical economy's operating system.",
    marketSize: { value: 16.8, unit: "$T", asOf: 2024, note: "global manufacturing value added (World Bank); China $4.7T of it, the US $2.9T" },
    cagr: { value: 3, range: [2, 5], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 4, capitalIntensity: 4, regulation: 3, disruption: 3
  },
  newsQuery: '("manufacturing PMI" OR reshoring OR "factory construction" OR "industrial automation" OR "smart factory" OR "industrial robots")',

  overview: {
    definition: "Manufacturing is the conversion of materials, labor, and capital into physical goods: the horizontal layer beneath autos, aerospace, electronics, and everything else on a shelf. This module covers the factories, machine tools, automation systems, and multi-industrial companies that make making possible, and the economics they all share.",
    howItWorks: [
      "Start with the scale: manufacturing generated $16.8T of global value added in 2024 (World Bank), roughly 12% of world GDP, and its geography is lopsided. China alone produced $4.7T (~28% of the total): more than the US ($2.9T), Japan, and Germany combined. That concentration took just 2 decades to build and is now the central fact of industrial policy everywhere: every tariff, subsidy, and friendshoring initiative is, at bottom, a reaction to it.",
      "The economics are a residual: materials typically eat 50% to 60% of revenue, labor and overhead take another large bite, and what remains is a single-digit to mid-teens operating margin governed by 3 levers: capacity utilization, the price/cost spread, and mix. Fixed costs dominate, so operating leverage is brutal in both directions: a 5% volume swing can move earnings 20%+. That is why a 1-point move in a PMI survey moves billions in market cap: the tape trades the second derivative of factory activity.",
      "The value is migrating from making to enabling. Assembly itself, even at enormous scale, earns commodity margins (contract manufacturers run low single digits). The rich economics sit at the edges: automation and industrial software vendors selling picks and shovels (Industry 4.0 spend hit roughly $89B in 2025, compounding ~12%), component makers with sole-source niches, and the aftermarket: spare parts, service contracts, and consumables that recur at 2x the margin of original equipment. Reading any industrial P&L means asking one question first: is this company selling the factory, or feeding it?",
      "Policy is redrawing the map for the first time in 30 years. The CHIPS Act and IRA (August 2022) tripled US factory construction spending from roughly $80B in 2021 to a record ~$235B annual rate in 2024 (Census Bureau), with $645B+ of semiconductor projects announced across 140+ sites since 2020. The boom is real but cooling: the run rate slipped toward $190B by early 2026, and the labor to staff the new plants (the US employs ~12.8M manufacturing workers, with a persistent skills gap) is the binding constraint. Meanwhile 542,000 industrial robots were installed worldwide in 2024 (IFR), double a decade ago, and China bought 54% of them: the country with the most factories is automating fastest."
    ],
    history: [
      { era: "1760-1913", title: "The first machines", text: "Steam, steel, and interchangeable parts turn craft into industry; Britain, then America and Germany, build the modern factory." },
      { era: "1913-1970", title: "Mass production", text: "Ford's moving assembly line makes scale the strategy; the US emerges from WW2 as the world's factory and mass production becomes mass prosperity." },
      { era: "1970-2000", title: "The lean revolution", text: "Toyota proves process is a weapon: quality and inventory discipline let Japan (and Germany's Mittelstand) out-manufacture Detroit; the US rust belt hollows." },
      { era: "2001-2018", title: "The China supercycle", text: "WTO accession (2001) plus containerized logistics moves the world's supply chains east; China passes the US as the largest manufacturer around 2010 and keeps compounding." },
      { era: "2018-present", title: "Resilience over efficiency", text: "Tariffs, COVID shortages, and the CHIPS Act/IRA flip the doctrine: security of supply now competes with cost. US factory construction triples to a ~$235B peak; robots and subsidies do the rebuilding." }
    ],
    trends: [
      { title: "Reshoring, with a hangover", direction: "shift", text: "US factory construction tripled off the 2021 base to ~$235B (2024), then cooled toward $190B by early 2026: the buildout is real, but the subsidy impulse is fading and execution now matters more than announcements." },
      { title: "Robots everywhere", direction: "up", text: "542,000 industrial robots installed in 2024, double a decade ago (IFR); labor scarcity plus falling robot costs make automation a when, not an if, for mid-size factories." },
      { title: "China's overcapacity exports", direction: "shift", text: "With ~28% of global value added and 54% of robot installations, China's excess capacity in EVs, solar, and steel is exporting price deflation: the trigger for the tariff walls rising everywhere." },
      { title: "The worker cliff", direction: "down", text: "~12.8M US manufacturing workers and a retirement wave: hundreds of thousands of unfilled roles make labor, not demand, the gate on the reshoring boom." },
      { title: "The software-defined factory", direction: "up", text: "Smart-factory spend (~$89B in 2025, ~12% CAGR) shifts value to MES, PLM, and AI-driven optimization: the factory becomes a programmable asset, and its vendors earn software-adjacent margins." }
    ],
    outlook: "A structurally mature industry entering an unusually capital-rich decade: subsidies, automation, and supply-chain redesign are forcing the largest re-tooling since the 1990s. The winners are the arms dealers of that re-tooling (automation, electrification, industrial software) and the multi-industrials with aftermarket annuities; the losers are undifferentiated capacity competing with subsidized or Chinese supply. Cyclically, the ISM PMI at 53.3 (June 2026, 6th straight expansion month) says the inventory recession of 2023-2024 has turned; the question is whether the capex supercycle outlasts the political cycle funding it."
  },

  structure: {
    suppliers: [
      { name: "Materials (steel, aluminum, chemicals, resins)", note: "50% to 60% of a typical manufacturer's cost base; the price/cost spread starts here" },
      { name: "Components (bearings, motors, fasteners, castings)", note: "Sole-source niches with pricing power hide in this layer" },
      { name: "Capital equipment (machine tools, robots, presses)", note: "Fanuc, DMG Mori, Trumpf class: the sector's own suppliers of productivity" },
      { name: "Industrial software (PLM, MES, CAD, simulation)", note: "Siemens and Dassault class: the highest-margin input a factory buys" }
    ],
    producers: [
      { name: "Diversified multi-industrials", note: "Honeywell, Siemens, ITW class: portfolios of niche No. 1s with aftermarket tails" },
      { name: "Contract manufacturers (EMS/ODM)", note: "Foxconn, Jabil, Flex: enormous revenue, commodity margins, other people's brands" },
      { name: "Machinery OEMs", note: "Short-cycle (tools, compressors) to long-cycle (turbines): the classic PMI beta" },
      { name: "The Mittelstand and SME base", note: "Millions of specialist factories: the hidden champions and acquisition fodder for roll-ups" }
    ],
    distributors: [
      { name: "Industrial distributors (Grainger, Fastenal class)", note: "The MRO channel: razor-thin logistics businesses with surprisingly durable returns" },
      { name: "Dealers and system integrators", note: "Robots and machine tools sell through engineers, not catalogs" }
    ],
    customers: [
      { name: "OEM end markets (autos, aerospace, electronics)", note: "Derived demand: the factory's order book is someone else's product cycle" },
      { name: "Construction and infrastructure", note: "Equipment and building products ride the non-residential cycle" },
      { name: "Government and defense", note: "The customer that never has a recession, and now writes subsidy checks too" }
    ],
    regulators: [
      { name: "Safety and environmental (OSHA, EPA and peers)", note: "Compliance is a real cost and a moat for incumbents who have absorbed it" },
      { name: "Trade authorities (USTR, EU Commission, WTO)", note: "Tariffs are now a primary demand variable, set politically and changed overnight" },
      { name: "Standards bodies (ISO, IEC, NIST)", note: "Certification regimes gate market access; quality systems are table stakes" }
    ],
    capital: [
      { name: "Corporate bond and equity markets", note: "Investment-grade balance sheets fund the capex; buybacks absorb the cash cows" },
      { name: "Equipment finance and leasing", note: "Machines are financed assets; captive finance arms smooth the cycle" },
      { name: "Industrial policy (CHIPS, IRA, EU equivalents)", note: "$100B+ of grants and credits: the state is a co-investor again" }
    ]
  },

  valueChain: {
    intro: "From coil steel to a serviced machine in the field. The margin curve is a smile: materials and assembly earn the least; automation, software, and the aftermarket earn the most.",
    stages: [
      { id: "materials", name: "Materials & inputs", what: "Steel, aluminum, polymers, castings", players: "Nucor, Alcoa, BASF class", valueCapture: 2,
        economics: { grossMargin: [10, 20], capitalIntensity: 5, concentration: 3 },
        linksTo: ["steel", "aluminum", "chemicals", "mining"],
        deeper: "The cost base everyone else negotiates against: 50% to 60% of factory revenue. Commodity pricing with regional protection (tariffs on steel are the oldest trick in industrial policy). The manufacturer's skill is passing these costs through faster than they arrive." },
      { id: "equipment", name: "Machine tools & capital equipment", what: "CNC machines, presses, injection molding, lasers", players: "Fanuc, DMG Mori, Trumpf, Haas", valueCapture: 3,
        economics: { grossMargin: [25, 40], capitalIntensity: 3, concentration: 4 },
        linksTo: ["robotics", "semiconductors"],
        deeper: "The sector's own capex: deeply cyclical (orders can halve in a downturn) but consumables and service smooth the best franchises. Japan and Germany dominate precision; the installed base creates a service annuity that outlasts the machine sale by decades." },
      { id: "components", name: "Engineered components", what: "Bearings, motors, hydraulics, precision parts", players: "SKF, Parker Hannifin, Regal Rexnord", valueCapture: 3,
        economics: { grossMargin: [25, 35], capitalIntensity: 3, concentration: 3 },
        linksTo: ["automotive", "aerospace"],
        deeper: "Where spec-in economics live: once a component is designed into a platform, switching costs protect pricing for the platform's life. The best names are portfolios of boring monopolies: No. 1 or No. 2 in niches too small to attract attackers." },
      { id: "automation", name: "Automation & industrial software", what: "Robots, PLCs, sensors, MES/PLM, vision", players: "Siemens, Rockwell, ABB, Keyence, Fanuc", valueCapture: 5,
        economics: { grossMargin: [40, 55], capitalIntensity: 2, concentration: 4 },
        linksTo: ["robotics", "ai", "saas"],
        deeper: "The crown of the chain: 542,000 robots installed in 2024 (IFR, double a decade ago) and ~$89B of smart-factory spend compounding at ~12%. Keyence's 50%+ operating margins show what selling productivity, rather than product, earns. Labor scarcity makes this the least discretionary capex in the budget." },
      { id: "production", name: "Production & assembly", what: "Factories: owned, contracted, or hybrid", players: "Foxconn, Jabil, Flex, every OEM", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 4, concentration: 2 },
        linksTo: ["consumer-electronics", "ev", "textiles-apparel"],
        deeper: "Scale without margin: contract manufacturing runs low-single-digit operating margins on nine-figure revenue because the customer owns the brand, the design, and the negotiating table. The location of this stage is what the entire reshoring debate is about; the economics of it barely change wherever it lands." },
      { id: "aftermarket", name: "Aftermarket, MRO & distribution", what: "Spares, service contracts, consumables", players: "Grainger, Fastenal, OEM service arms", valueCapture: 4,
        economics: { grossMargin: [30, 45], capitalIntensity: 2, concentration: 3 },
        linksTo: ["logistics", "rail"],
        deeper: "The installed base is the annuity: parts and service recur at roughly 2x the margin of original equipment and hold up in downturns (machines run longer when capex freezes). Distributors monetize fragmentation: millions of SKUs, millions of small buyers, and the vending machine on the factory floor as a moat." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share the sector. Multi-industrials compound: portfolios of niche leaders, 15% to 25% operating margins at the best (ITW, Keyence class), pricing power tested annually against material costs, and aftermarket mix as the quality marker. Machinery OEMs cycle: revenue follows the capex cycle with a 6-to-12-month lag, decremental margins of 25% to 35% punish downturns, and backlog/book-to-bill is the tell. Contract manufacturers churn: enormous, low-margin, working-capital-heavy revenue where the game is asset turns and customer concentration risk, not margin.",
      "The shared arithmetic: materials at 50% to 60% of revenue make the price/cost spread the quarterly swing factor; high fixed costs make utilization the annual one. Watch 4 numbers: organic volume growth vs the PMI, price vs cost (the spread, not either alone), backlog conversion, and free-cash conversion (inventory is where industrial earnings go to die). The 2021-2023 inflation proved the sector could price: the names that pushed 2 rounds of increases and kept them re-rated; the ones that couldn't revealed they never had a moat, just a cycle."
    ],
    fingerprint: { grossMargin: 30, recurringRevenue: 30, capitalIntensity: 65, pricingPower: 45, cyclicality: 70, operatingLeverage: 75 },
    lines: [
      { label: "Organic growth & volumes", note: "The PMI beta: compare to ISM to see share gains vs cycle" },
      { label: "Price/cost spread", note: "The margin engine: price realized minus material and labor inflation" },
      { label: "Backlog & book-to-bill", note: "Long-cycle visibility; below 1.0 for 2 quarters means estimates fall" },
      { label: "Aftermarket / services mix", note: "The recurring, high-margin ballast: quality industrials run 30%+" },
      { label: "Free-cash conversion", note: "Inventory and receivables absorb cash in recoveries; 90%+ of net income is the bar" }
    ],
    unitEconomics: {
      unit: "per $100 of factory revenue (illustrative)",
      items: [
        { label: "Materials & purchased parts", value: "$50-60", note: "the pass-through battleground" },
        { label: "Direct labor", value: "$10-15", note: "shrinking with automation, but scarce and re-pricing" },
        { label: "Overhead & depreciation", value: "$15-20", note: "the fixed-cost block behind operating leverage" },
        { label: "Operating profit", value: "$8-15", note: "the residual; aftermarket earns roughly 2x this rate" }
      ]
    }
  },

  kpiRefs: ["retail-inventory-turns", "def-backlog", "semi-capex-intensity"],
  kpiLocal: [
    {
      id: "mfg-capacity-utilization", name: "Capacity Utilization", industries: ["manufacturing"],
      definition: "Output as a share of maximum sustainable output, for a plant or the whole sector (Fed G.17 for the US).",
      formula: "Utilization = actual output / full-capacity output; US long-run manufacturing average ~76-78%",
      interpretation: "The operating-leverage dial: above trend, incremental volume drops almost straight to profit and pricing firms; below it, discounting and absorption losses compound.",
      healthy: "Above 78% and rising with backlog", warning: "Below 75% and falling: price wars follow"
    },
    {
      id: "mfg-price-cost", name: "Price/Cost Spread", industries: ["manufacturing"],
      definition: "Realized price increases minus input-cost inflation (materials, freight, labor) in margin points.",
      formula: "Spread = price contribution to margin (bps) minus cost headwind (bps), disclosed or derived from bridges",
      interpretation: "The cleanest read on pricing power: a positive spread through an inflation shock marks a moat; chronic negative spread marks a price-taker.",
      healthy: "Positive spread in both inflation and deflation", warning: "Price givebacks when costs fall: no moat, just a cycle"
    }
  ],

  health: {
    intro: "Industrial health is the compounding of small advantages: utilization, spread, mix, and balance-sheet patience. The sick ones show it first in cash conversion, not revenue.",
    pillars: [
      { name: "Demand & backlog", weight: 25, metrics: "Organic growth vs PMI, book-to-bill, order cancellation rates", healthy: "Outgrowing the cycle; book-to-bill above 1.0", warning: "Backlog burn with orders below 1.0 for 2+ quarters" },
      { name: "Price/cost & margin", weight: 25, metrics: "Price/cost spread, gross margin trend, decremental margins", healthy: "Positive spread; decrementals contained under 30%", warning: "Margin compression while raising prices: mix rot" },
      { name: "Aftermarket & recurring mix", weight: 20, metrics: "Services/consumables share of revenue and profit", healthy: "30%+ of revenue recurring at 2x OE margin", warning: "OE-only exposure: pure capex-cycle beta" },
      { name: "Balance sheet & cash", weight: 15, metrics: "Net debt/EBITDA through-cycle, FCF conversion, working-capital discipline", healthy: "Under 2x leverage; 90%+ conversion", warning: "Inventory swelling ahead of a slowdown" },
      { name: "Automation & productivity", weight: 15, metrics: "Revenue per employee trend, robot density, capex quality", healthy: "Productivity compounding faster than wages", warning: "Headcount-led growth in a labor-scarce decade" }
    ],
    scoringNote: "Score through the cycle, not at the peak: mid-cycle margins and trough decrementals reveal more than any boom-year print."
  },

  valuation: {
    intro: "The market pays for the annuity and the moat, not the metal: aftermarket-rich compounders trade like staples, machinery cyclicals trade on normalized earnings, and everything gets re-rated at PMI turns.",
    methods: [
      { name: "EV / EBITDA (mid-cycle)", use: "The standard cross-industrial yardstick; normalize EBITDA to mid-cycle first", avoid: "Peak-margin extrapolation at cycle tops (the classic industrial trap)", strengths: "Comparable across the space; capital-structure neutral", weaknesses: "Hides capex intensity differences", range: { low: 8, high: 14, asOf: 2025, note: "cyclicals at the low end; quality multi-industrials at the top" } },
      { name: "P/E on mid-cycle EPS", use: "Compounders with stable portfolios (ITW, Honeywell class)", avoid: "Deep cyclicals: peak EPS makes them look cheapest exactly at the top", strengths: "Simple; matches how the market quotes the group", weaknesses: "Cycle-timing errors compound; buybacks flatter it", range: { low: 15, high: 25, asOf: 2025, note: "automation and quality names carry the premium" } },
      { name: "FCF yield", use: "Testing whether earnings are real: industrials with poor conversion always disappoint", avoid: "Recovery years when working capital drains cash legitimately", strengths: "Cuts through percentage-of-completion and inventory games", weaknesses: "Lumpy capex programs distort single years", range: { low: 4, high: 7, asOf: 2025, note: "% yield; quality compounders trade below 5%" } },
      { name: "Replacement cost / capacity value", use: "Sanity check in the subsidy era: what would this footprint cost to rebuild post-CHIPS?", avoid: "Using it as a floor for undifferentiated capacity competing with China", strengths: "Grounds value in the physical asset base as construction costs soar", weaknesses: "Capacity without customers is worth scrap", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor, not a multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value an industrial quickly: mid-cycle EBITDA times a quality-adjusted multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 20, step: 0.5, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 6, max: 18, step: 0.5, value: 11, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 40, step: 1, value: 6, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats manufacturing as 3 books: core the aftermarket-rich compounders and automation arms dealers (structural winners of labor scarcity and re-tooling), trade the short-cycle machinery names on PMI inflections, and underwrite the reshoring theme selectively: own the enablers of the buildout, not the subsidized capacity itself. The ISM print is the metronome; the price/cost spread is the stock-picker's edge.",
    debates: [
      { topic: "Reshoring: supercycle or subsidy sugar high?", bull: "Construction spend tripled to a ~$235B annual rate, $645B+ of chip projects are announced, and security-of-supply logic survives any election: this is a decade-long re-tooling, and the equipment, automation, and electrical names have years of backlog to prove it.", bear: "The run rate already rolled from $235B toward $190B, announcements are not ramps, and the labor to staff the plants does not exist at these wages. When the subsidy impulse fades, the industry rediscovers that the reasons production left were never repealed." },
      { topic: "Does Industry 4.0 actually show up in the numbers?", bull: "542,000 robots a year, doubled in a decade, and Keyence-class margins prove the vendors monetize it; labor scarcity means automation capex is now defensive, not discretionary: the least cancellable line in the budget.", bear: "Buyers' productivity stats remain stubbornly flat: the gains leak away in integration costs and complexity. Smart-factory spend (~$89B) is still a rounding error against $16.8T of value added, and most factories run on spreadsheets and hope." },
      { topic: "China at ~28%: unassailable or peak share?", bull: "Scale, clusters, engineers, and 54% of the world's robot installations: China's cost and capability lead is widening in the industries that matter (EVs, batteries, solar), and tariffs just tax everyone else's consumers.", bear: "Overcapacity is deflating Chinese margins at home, tariff walls are rising in every major market, and demographics plus wage growth erode the base. Share peaked; the marginal factory now lands in Mexico, India, or Vietnam." }
    ],
    cycle: {
      where: "Early-to-mid recovery: ISM at 53.3 in June 2026, the 6th straight month of expansion after the 2023-2024 inventory recession; capex programs from the subsidy era still converting; Germany still shrinking (industrial production fell 4.4% in 2024): a desynchronized global cycle with the US leading.",
      drivers: "Rates and credit (capex financing), the inventory cycle, industrial policy and tariffs, China's export pricing, and the autos/construction end-market cycles.",
      leads: [
        "ISM Manufacturing PMI, especially new orders minus inventories (free, monthly, 1st business day)",
        "Fed G.17 industrial production and capacity utilization (free, monthly)",
        "Census core capital goods orders (nondefense ex-aircraft): the capex tell (free, monthly)",
        "Census construction spending, manufacturing category: the reshoring tape (free, monthly)",
        "Regional Fed surveys (Empire, Philly): the PMI's early-warning system (free)"
      ]
    },
    exposure: [
      { vehicle: "Quality multi-industrials (ITW, Honeywell, Siemens class)", note: "The compounders: aftermarket ballast, pricing power, through-cycle FCF" },
      { vehicle: "Automation pure plays (Rockwell, Keyence, Fanuc, ABB class)", note: "The picks-and-shovels of labor scarcity; premium multiples, structural demand" },
      { vehicle: "Short-cycle machinery & components", note: "The PMI trade: buy at trough utilization, sell when decrementals turn incremental" },
      { vehicle: "Industrial distributors (Fastenal, Grainger class)", note: "The toll booths: daily-demand visibility and countercyclical cash flow" },
      { vehicle: "Sector ETFs (XLI class)", note: "The blunt instrument for cycle views without single-name execution risk" }
    ],
    catalysts: [
      { when: "1st business day, monthly", what: "ISM Manufacturing PMI: the sector's macro heartbeat and multiple-setter" },
      { when: "Monthly (Census)", what: "Durable goods / core capex orders and manufacturing construction spend" },
      { when: "Quarterly earnings", what: "Price/cost bridges, backlog conversion, decremental-margin guidance" },
      { when: "Policy dates", what: "Tariff decisions and CHIPS/IRA award tranches: demand created and destroyed by press release" }
    ],
    data: [
      { series: "ISM Manufacturing PMI", source: "ismworld.org (free headline)", why: "The cycle's front page; 50 is the line the market trades" },
      { series: "Industrial production & capacity utilization (G.17)", source: "federalreserve.gov / FRED (free)", why: "Output and the operating-leverage dial, primary source" },
      { series: "Core capital goods orders (M3)", source: "census.gov (free)", why: "The cleanest US capex signal" },
      { series: "Manufacturing construction spending", source: "census.gov (free)", why: "The reshoring boom, measured monthly in dollars" },
      { series: "IFR World Robotics annual data", source: "ifr.org (free press releases)", why: "Automation adoption by country: the structural trend's scoreboard" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Short-cycle names see orders halve with 25%+ decremental margins; distributors and aftermarket hold best. Buy quality when the PMI bottoms, not when it looks safe: the group turns 2 quarters before the data." },
      { regime: "Rates rising", behavior: "Capex financing tightens and long-cycle orders stretch; balance-sheet quality re-prices. Compounders with pricing power outperform leveraged roll-ups." },
      { regime: "Input-cost shock", behavior: "The price/cost spread separates moats from cycles within 2 quarters: own the names that push price and keep it, avoid the pass-through laggards." },
      { regime: "Trade war escalation", behavior: "Tariffs re-price supply chains overnight: domestic capacity and automation vendors win, import-dependent assemblers and exporters to China lose. Watch the retaliation list, not the headline." }
    ]
  },

  players: [
    { name: "Siemens", role: "Industrial software + automation flagship", country: "DE", real: true, note: "The factory's operating system: PLM, PLCs, and electrification under one roof" },
    { name: "Honeywell", role: "US multi-industrial compounder", country: "US", real: true, note: "Aerospace, automation, and materials: the quality-portfolio template" },
    { name: "ABB", role: "Robotics & electrification", country: "CH", real: true, note: "Robots plus the electrical gear every new factory needs" },
    { name: "Fanuc", role: "The robot maker's robot maker", country: "JP", real: true, note: "CNC controls and yellow robots: the installed base behind global automation" },
    { name: "Keyence", role: "Sensors & vision at software margins", country: "JP", real: true, note: "50%+ operating margins selling productivity: the sector's economics ceiling" },
    { name: "Rockwell Automation", role: "North American automation pure play", country: "US", real: true, note: "The reshoring boom's most direct picks-and-shovels equity" },
    { name: "Foxconn (Hon Hai)", role: "Contract-manufacturing giant", country: "TW", real: true, note: "Assembles the world's electronics at scale-without-margin economics" },
    { name: "Illinois Tool Works", role: "The decentralized compounder", country: "US", real: true, note: "800+ niche businesses and the 80/20 playbook: process as a moat" }
  ],

  geography: [
    { country: "CN", role: "The factory of the world", note: "$4.7T of value added (~28% of global, 2024) and 54% of 2024 robot installs: scale and automation compounding together" },
    { country: "US", role: "Reshoring's home market", note: "$2.9T of value added but only ~10% of GDP; construction boom (~$235B peak) rebuilding strategic capacity" },
    { country: "DE", role: "Engineering exporter under strain", note: "Machine tools and Mittelstand excellence; industrial production fell 4.4% in 2024 on energy costs and auto weakness" },
    { country: "JP", role: "Precision & automation heartland", note: "Fanuc, Keyence, DMG Mori heritage: the machines that make machines" },
    { country: "MX", role: "Nearshoring's biggest winner", note: "USMCA access plus labor cost: the default landing spot for North America-bound capacity" },
    { country: "IN", role: "The next scale story", note: "PLI subsidies and China+1 sourcing pull electronics assembly in; infrastructure and skills are the gate" }
  ],

  cycles: [
    { year: 1913, title: "The moving assembly line", kind: "boom", text: "Ford cuts chassis build time from 12 hours to 93 minutes; scale becomes the strategy and the modern industrial economy follows. Lesson: process innovation beats product innovation for decades at a time." },
    { year: 1980, title: "The lean invasion", kind: "shift", text: "Toyota-quality Japanese goods gut US market share in autos and electronics; the rust belt is born. Lesson: cost advantages get all the headlines, but quality systems win the war." },
    { year: 2001, title: "China joins the WTO", kind: "shift", text: "Supply chains move east at container speed; US manufacturing employment falls by millions in a decade while output holds. Lesson: efficiency optimized globally concentrates fragility locally." },
    { year: 2008, title: "The great trade collapse", kind: "bust", text: "Global industrial production falls off a cliff as credit freezes: factory orders vanish faster than end demand. Lesson: the bullwhip effect means manufacturing overshoots every downturn, both ways." },
    { year: 2021, title: "Shortage era and the subsidy response", kind: "shift", text: "COVID shortages expose the cost of distance; CHIPS and IRA (2022) triple US factory construction to a ~$235B peak by 2024. Lesson: resilience became a line item, and governments became customers of capacity itself." }
  ],

  risks: [
    { name: "China overcapacity exporting deflation", severity: 4, likelihood: 4, transmission: "Subsidized excess capacity in EVs, solar, steel -> global price deflation in tradable goods -> margin compression for everyone unprotected -> tariff walls and trade fragmentation." },
    { name: "Subsidy cliff", severity: 3, likelihood: 3, transmission: "Political turnover or fiscal strain trims CHIPS/IRA follow-through -> announced projects stall (spend already cooling from $235B toward $190B) -> equipment and construction backlogs deflate." },
    { name: "Skilled-labor shortage", severity: 3, likelihood: 5, transmission: "Retirement wave plus training gap -> new plants understaffed -> ramps slip and wages inflate -> reshoring economics erode exactly where capacity was promised." },
    { name: "Trade-war escalation", severity: 4, likelihood: 4, transmission: "Tariff rounds and retaliation -> input costs jump and export markets close -> supply chains re-route at forced speed -> capex misallocation and stranded capacity." },
    { name: "Energy-cost shock (the Germany template)", severity: 3, likelihood: 3, transmission: "Sustained high power and gas prices -> energy-intensive production becomes uncompetitive (German output fell 4.4% in 2024) -> deindustrialization migrates the base, permanently." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Manufacturing is the business of turning materials into products: cars, chips, machines, appliances. It generated about $16.8T of value worldwide in 2024, and China makes more of it (~28%) than the US, Japan, and Germany combined. Factories have high fixed costs, so profits swing hard with volume: when orders rise a little, earnings rise a lot, and vice versa. The best businesses in the sector often are not the factories at all, but the companies selling them robots, software, and spare parts."] },
    L2: { title: "Intermediate", text: ["The arithmetic: materials eat 50% to 60% of revenue, so margins hinge on 3 levers: utilization, the price/cost spread, and mix. Investors track the ISM PMI (above 50 = expansion; 53.3 in June 2026) because operating leverage turns small volume changes into big earnings moves. Value concentrates at the edges of the chain: automation vendors (542,000 robots installed in 2024, double a decade ago) and the aftermarket, where parts and service recur at roughly 2x the margin of the original sale."] },
    L3: { title: "Advanced", text: ["Analyze by species: multi-industrials on price/cost spread, aftermarket mix, and FCF conversion; machinery on backlog, book-to-bill, and decremental margins; contract manufacturers on asset turns and customer concentration. The reshoring trade needs disaggregating: US factory construction tripled to a ~$235B peak (2024) then cooled toward $190B, so own the enablers (automation, electrical, equipment) with backlog evidence rather than the subsidized capacity itself. Labor is the binding constraint: revenue per employee and robot density are the decade's quality screens."] },
    L4: { title: "Expert", text: ["Trade the PMI inflections (the group turns 2 quarters before the data), the price/cost bridges each earnings season, and the policy tape: tariffs and subsidy tranches now create and destroy demand by press release. Live debates: whether reshoring outlasts its subsidies, whether Industry 4.0 spend (~$89B, ~12% CAGR) ever shows up in buyers' productivity rather than just vendors' margins, and whether China's ~28% share is peak or plateau. Germany's 4.4% output decline in 2024 is the cautionary energy-cost case study."] },
    L5: { title: "Institutional", text: ["Allocator's frame: manufacturing is the physical economy's index, so own its structural royalty streams rather than its cyclical body: automation and industrial software (labor scarcity's arms dealers), aftermarket annuities, and distribution toll booths, with short-cycle machinery sized as a tactical PMI overlay. The regime shift is real: industrial policy has made the state a co-investor in capacity for the first time since the Cold War, which raises the floor on capex but politicizes returns. Underwrite accordingly: subsidy-dependent economics deserve subsidy-length horizons, and the moat test in this sector is always the same: a positive price/cost spread in both directions of the cycle."] }
  },

  quiz: [
    { q: "Global manufacturing value added in 2024 was roughly:", choices: ["$1.7T", "$16.8T, with China producing ~28% of it", "$50T", "$500B"], answer: 1, explain: "World Bank data: $16.8T globally; China's $4.7T exceeds the US, Japan, and Germany combined." },
    { q: "China's ~$4.7T of manufacturing value added is notable because it:", choices: ["Trails the US", "Exceeds the US, Japan, and Germany combined", "Is mostly textiles", "Has been shrinking for a decade"], answer: 1, explain: "~28% of global output in one country: the fact behind every tariff, subsidy, and friendshoring policy of the era." },
    { q: "After the CHIPS Act and IRA (2022), US factory construction spending:", choices: ["Fell by half", "Roughly tripled from ~$80B (2021) to a ~$235B peak annual rate (2024)", "Stayed flat", "Was banned"], answer: 1, explain: "Census data shows the steepest factory-building boom on record, led by chips and batteries: though the run rate cooled toward $190B by early 2026." },
    { q: "A 1-point ISM PMI move matters to industrial stocks because:", choices: ["It changes tax rates", "High fixed costs create operating leverage: small volume swings produce large earnings swings", "It sets tariffs", "It is a government mandate"], answer: 1, explain: "The PMI proxies volume direction; with operating leverage, a 5% volume move can swing earnings 20%+, so the tape trades the survey." },
    { q: "Industrial robot installations in 2024 totaled about:", choices: ["5,000", "542,000: double a decade ago, with China taking 54%", "10 million", "50,000"], answer: 1, explain: "IFR World Robotics 2025: the world's largest manufacturer is also automating fastest: scale and productivity compounding together." },
    { q: "The richest economics in the manufacturing value chain belong to:", choices: ["Assembly lines", "Automation/software vendors and the aftermarket, not the factories themselves", "Raw materials", "Warehousing"], answer: 1, explain: "Contract assembly earns low single digits; Keyence-class automation vendors earn 50%+ operating margins, and parts/service recur at ~2x OE margins." },
    { q: "Germany's industrial production in 2024:", choices: ["Grew 10%", "Fell about 4.4%: the energy-cost and auto-weakness case study", "Doubled", "Was unreported"], answer: 1, explain: "Destatis data: sustained high energy costs plus auto and machinery weakness pushed output to its lowest since 2020: the deindustrialization warning." },
    { q: "The cleanest test of an industrial company's moat is:", choices: ["Revenue size", "A positive price/cost spread in both inflation and deflation", "Number of factories", "CEO tenure"], answer: 1, explain: "Anyone can raise prices in a shortage; keeping the spread positive when costs fall separates pricing power from a lucky cycle." }
  ],

  sources: [
    { name: "World Bank: Manufacturing, value added (current US$)", url: "https://data.worldbank.org/indicator/NV.IND.MANF.CD", feeds: "market size, country shares" },
    { name: "US Census Bureau: Construction spending (manufacturing)", url: "https://www.census.gov/construction/c30/c30index.html", feeds: "reshoring capex" },
    { name: "ISM Manufacturing PMI Report on Business", url: "https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/", feeds: "cycle" },
    { name: "IFR World Robotics 2025", url: "https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years", feeds: "automation adoption" }
  ]
};
