/* Industry Atlas - SEMICONDUCTORS (flagship full-depth module)
 * The reference implementation of the Industry Genome schema. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["semiconductors"] = {
  meta: {
    id: "semiconductors", name: "Semiconductors", sector: "technology", status: "full",
    tagline: "The most complex objects humans manufacture, and the layer every other industry now runs on.",
    marketSize: { value: 630, unit: "$B", asOf: 2024, note: "global chip revenue; ~$1T expected by ~2030" },
    cagr: { value: 8, range: [6, 10], horizon: "2024-2030" },
    maturity: "cyclical-mature", cyclicality: 5, capitalIntensity: 5, regulation: 4, disruption: 3
  },

  newsQuery: '(semiconductor OR TSMC OR Nvidia OR "chip manufacturing" OR foundry OR "export controls" chips)',

  overview: {
    definition: "Semiconductors are the tiny switches (transistors) etched into silicon that perform all digital computation and much of the world's sensing and power control. The industry designs, manufactures, and packages these chips, from $0.10 microcontrollers to $40,000 AI accelerators.",
    howItWorks: [
      "Start with sand. Silicon is refined to 99.9999999% purity, grown into crystal ingots, and sliced into mirror-smooth 300mm wafers. A fab then draws transistor patterns onto each wafer with light (lithography), builds them up through hundreds of deposition, etch, and implant steps over roughly 3 months, and ends with billions of working switches per chip. A leading-edge wafer emerges worth about $18,000 to $20,000, carrying chips that may resell for 10x that.",
      "The industry's physics-defying engine was Moore's Law: transistor counts doubling roughly every 2 years at constant cost for 50 years. That exponential is why the same money buys a million times more compute than in 1980, and why every industry eventually reorganized around cheap computation. The doubling has slowed and gotten savagely expensive, which is reshaping the industry's structure (chiplets, advanced packaging, and specialization instead of free scaling).",
      "The business is split by a historic bargain. Designing chips and manufacturing them used to happen inside one company (an IDM, like old Intel). In 1987 TSMC introduced the foundry model: we manufacture, you design. That unbundling created the fabless industry (NVIDIA, Qualcomm, AMD, Apple silicon) and concentrated manufacturing scale in a few foundries, because each new fab generation costs more (now $20B+) and only massive shared volume can pay for it.",
      "The industry is violently cyclical: demand swings (phones, PCs, cars, datacenters) collide with supply that arrives in $20B, 2-year-lag increments. Customers double-order in shortages and cancel in gluts (the bullwhip), so industry revenue can fall 15% while end demand barely moves. Memory chips, being commodities, amplify every cycle; logic held by strong design moats dampens it.",
      "Since 2020 the industry stopped being just a business and became statecraft. Export controls on advanced chips and tools, $100B+ of national subsidies (US CHIPS Act, EU Chips Act, and counterparts in Japan, India, China), and the concentration of leading-edge production in Taiwan turned semiconductors into the central commodity of great-power competition."
    ],
    history: [
      { era: "1947-1958", title: "The transistor and the chip", text: "Bell Labs' transistor (1947) replaces vacuum tubes; Kilby and Noyce independently invent the integrated circuit (1958-59), putting multiple transistors on one piece of silicon." },
      { era: "1965-1980", title: "Moore's Law era begins", text: "Gordon Moore observes the doubling pattern (1965). Intel ships the first microprocessor (1971). Silicon Valley earns its name." },
      { era: "1980s", title: "The memory wars", text: "Japanese DRAM manufacturing excellence nearly destroys the US industry; Intel exits memory for microprocessors (1985), the most famous strategic pivot in tech history. US-Japan trade friction previews today's chip geopolitics." },
      { era: "1987-2000", title: "The foundry revolution", text: "Morris Chang founds TSMC, unbundling design from manufacturing. Fabless startups explode. The PC boom makes Intel and Microsoft the Wintel duopoly; Korea (Samsung) takes memory leadership." },
      { era: "2000-2015", title: "Mobile rewires the industry", text: "The dotcom bust cuts industry revenue ~32% (2001). Smartphones then create the biggest chip market ever; ARM's low-power designs beat x86 in mobile; Apple starts designing its own silicon; equipment and players consolidate." },
      { era: "2016-2019", title: "Leading edge narrows to three", text: "EUV lithography (a 20-year, $10B+ ASML bet) finally works. GlobalFoundries quits the race; only TSMC, Samsung, and Intel remain at the edge. AI training on GPUs begins bending the demand curve." },
      { era: "2020-present", title: "Shortage, statecraft, and AI", text: "COVID shortages halt car plants and put chips on front pages. The US restricts advanced-chip exports to China (2022, tightened since); CHIPS Acts subsidize reshoring. ChatGPT ignites an AI accelerator boom that makes NVIDIA one of the most valuable companies on Earth and re-sorts the entire supply chain around advanced packaging and HBM memory." }
    ],
    trends: [
      { title: "The AI supercycle", direction: "up", text: "Accelerators, HBM memory, and advanced packaging are supply-constrained; AI datacenter silicon is growing 30%+ annually while mature-node markets digest inventory. One customer class (hyperscalers) now drives the leading edge." },
      { title: "Geopolitical re-sorting", direction: "shift", text: "Export controls split the market into compliance zones; subsidies pull fabs toward the US, Japan, and Europe at a 20% to 40% cost premium; China pours state capital into mature nodes and self-sufficiency." },
      { title: "The end of easy scaling", direction: "shift", text: "Transistor costs no longer fall automatically each node. Value is shifting to architecture, chiplets, 3D packaging (CoWoS, hybrid bonding), and software co-design; packaging became a bottleneck as strategic as lithography." },
      { title: "Leading-edge oligopoly hardens", direction: "up", text: "Each node costs more ($20B+ per fab, $380M per EUV high-NA tool), concentrating advanced logic in TSMC with Samsung and Intel fighting to stay in range. Pricing power at the edge has never been stronger." },
      { title: "Mature-node oversupply risk", direction: "down", text: "Massive Chinese buildout in 28nm+ chips (power, analog, MCU) points toward structural overcapacity and price pressure in the industry's commodity half." }
    ],
    outlook: "The most probable path: a decade of higher structural growth (electrification, AI, edge compute) layered on the same violent cycle, with a widening split between a supply-constrained, pricing-powerful leading edge and a commoditizing mature tier. The tail risks are not subtle: a Taiwan crisis is the single largest identifiable risk to the global economy, and a genuine AI demand air-pocket would hit the industry's most crowded trade."
  },

  structure: {
    suppliers: [
      { name: "EDA software (Synopsys, Cadence, Siemens)", note: "The design tools; a 3-firm oligopoly every chip passes through" },
      { name: "IP cores (ARM, RISC-V ecosystem)", note: "Licensed building blocks; ARM architectures ship in ~99% of smartphones" },
      { name: "Equipment (ASML, Applied Materials, Lam, Tokyo Electron, KLA)", note: "ASML is the world's only EUV lithography maker; the top 5 control the toolset" },
      { name: "Materials (Shin-Etsu, SUMCO, JSR, Air Liquide)", note: "Ultra-pure wafers, photoresists, gases; Japan dominates several single-source niches" }
    ],
    producers: [
      { name: "Foundries (TSMC, Samsung Foundry, GlobalFoundries, SMIC, UMC)", note: "Manufacture for others; TSMC holds ~60% of foundry revenue and ~90% of leading-edge output" },
      { name: "Fabless designers (NVIDIA, Qualcomm, AMD, Broadcom, Apple silicon)", note: "Design only; the industry's margin and market-cap leaders" },
      { name: "IDMs (Intel, Texas Instruments, Infineon, STMicro)", note: "Design and manufacture in-house; dominant in analog and power" },
      { name: "Memory (Samsung, SK Hynix, Micron)", note: "A 3-player commodity oligopoly; HBM for AI is its new premium tier" },
      { name: "OSAT packaging/test (ASE, Amkor, JCET)", note: "Assembly, packaging, and test; advanced packaging made them strategic" }
    ],
    distributors: [
      { name: "Broadline distributors (Arrow, Avnet, WT Micro)", note: "Channel to 100,000+ smaller customers; where cycle inventory hides" },
      { name: "Direct sales", note: "Large customers (Apple, hyperscalers, automakers) buy direct on multi-year agreements" }
    ],
    customers: [
      { name: "Smartphones and PCs (~40% of demand)", note: "The legacy volume base; replacement-cycle driven" },
      { name: "Datacenter and AI (~25% and rising fast)", note: "The growth engine; concentrated in fewer than 10 buyers" },
      { name: "Automotive (~10%)", note: "$500 to $1,500 of content per car and rising with EVs and ADAS" },
      { name: "Industrial, comms, consumer (~25%)", note: "Long-tail, longer product cycles, distribution-served" }
    ],
    regulators: [
      { name: "US BIS export controls", note: "Defines what advanced compute may be sold where; the industry's new demand boundary" },
      { name: "CHIPS program offices (US, EU, Japan, India)", note: "$100B+ of subsidies steering fab locations" },
      { name: "Antitrust and CFIUS-style review", note: "Deal review killed NVIDIA-ARM; national security screens cross-border M&A" }
    ],
    capital: [
      { name: "Public equity markets", note: "Deeply liquid; the sector is ~10% of global market cap" },
      { name: "Government subsidy capital", note: "Grants and tax credits now fund 20% to 35% of new Western fabs" },
      { name: "Customer prepayments", note: "Hyperscalers and Apple prepay capacity; HBM is sold out years ahead" }
    ]
  },

  valueChain: {
    intro: "Follow a chip from idea to datacenter. Margin concentrates where the moats are: design tools, design, lithography, and leading-edge manufacturing. Click each stage.",
    stages: [
      { id: "eda-ip", name: "Design tools & IP", what: "EDA software and licensed cores every chip is built with", players: "Synopsys, Cadence, ARM", valueCapture: 4,
        economics: { grossMargin: [85, 90], capitalIntensity: 1, concentration: 5 },
        linksTo: ["saas", "ai"],
        deeper: "A near-perfect business: 3 EDA firms and ARM tax every design ever made, with 90%+ retention and software margins. US control of EDA is also an export-control chokepoint: cut off the tools and advanced design stops." },
      { id: "design", name: "Chip design (fabless)", what: "Architecture, logic design, and verification of the chip itself", players: "NVIDIA, AMD, Qualcomm, Apple", valueCapture: 5,
        economics: { grossMargin: [50, 78], capitalIntensity: 2, concentration: 4 },
        linksTo: ["ai", "cloud"],
        deeper: "Where the largest profit pool now sits. A frontier GPU design costs $500M+ and 3 years, but wins compound: software ecosystems (CUDA) lock in customers for a decade. Fabless P&Ls put ~20% of revenue into R&D and outsource the $20B factories." },
      { id: "materials", name: "Materials & wafers", what: "Polysilicon, 300mm wafers, photoresists, specialty gases", players: "Shin-Etsu, SUMCO, JSR", valueCapture: 2,
        economics: { grossMargin: [25, 40], capitalIntensity: 3, concentration: 4 },
        linksTo: ["chemicals", "mining"],
        deeper: "Quiet, Japanese-dominated, and full of single points of failure: one fire at a resist plant has moved global chip output. Ultra-purity requirements make qualification take years, which is the moat." },
      { id: "equipment", name: "Equipment", what: "The machines that make the machines: lithography, deposition, etch, metrology", players: "ASML, Applied Materials, Lam, TEL, KLA", valueCapture: 4,
        economics: { grossMargin: [45, 55], capitalIntensity: 3, concentration: 5 },
        linksTo: ["manufacturing", "robotics"],
        deeper: "ASML's EUV monopoly is the single most concentrated technology position on Earth: each machine has 100,000+ parts, costs $180M to $380M, and no rival exists. Equipment revenue is the industry's capex, so it swings hardest in cycles but compounds across them." },
      { id: "foundry", name: "Wafer fabrication (foundry)", what: "The 3-month, 1,000-step transformation of blank wafers into chips", players: "TSMC, Samsung, Intel Foundry", valueCapture: 5,
        economics: { grossMargin: [45, 60], capitalIntensity: 5, concentration: 5 },
        linksTo: ["utilities", "construction"],
        deeper: "The scale game's endpoint: a leading-edge fab costs $20B+, uses a small city's power and water, and must run above ~90% utilization to earn its keep. TSMC's ~90% share of leading-edge logic makes it the most systemically important company in the world economy." },
      { id: "packaging", name: "Packaging & test", what: "Cutting, stacking, connecting, and testing dies; now 2.5D/3D advanced packaging", players: "ASE, Amkor, TSMC (CoWoS)", valueCapture: 3,
        economics: { grossMargin: [15, 30], capitalIntensity: 4, concentration: 3 },
        linksTo: ["manufacturing"],
        deeper: "Once the cheap afterthought done in Malaysia and Taiwan, packaging became a bottleneck the moment AI chips started gluing GPU dies to HBM memory stacks. CoWoS capacity, not wafer supply, gated AI accelerator shipments in 2023-24." },
      { id: "distribution", name: "Distribution", what: "Routing chips to 100,000+ electronics makers", players: "Arrow, Avnet, WPG", valueCapture: 1,
        economics: { grossMargin: [10, 15], capitalIntensity: 2, concentration: 3 },
        linksTo: ["logistics"],
        deeper: "Low-margin logistics and credit provision, but strategically informative: channel inventory here is the cycle's early-warning gauge." },
      { id: "oem", name: "Devices & systems (OEM)", what: "Chips become phones, servers, cars, and machines", players: "Apple, Dell, Foxconn, automakers", valueCapture: 3,
        economics: { grossMargin: [10, 45], capitalIntensity: 3, concentration: 3 },
        linksTo: ["consumer-electronics", "automotive", "ev"],
        deeper: "Value capture varies wildly: Apple takes phone-industry profits with custom silicon; server assemblers earn single digits. The lesson runs through the whole chain: designing your own chip is how OEMs escape commodity margins." },
      { id: "downstream", name: "Cloud, enterprise, consumer", what: "Where the compute finally earns its living", players: "Hyperscalers, enterprises, 5B consumers", valueCapture: 4,
        economics: { grossMargin: [30, 70], capitalIntensity: 4, concentration: 4 },
        linksTo: ["cloud", "ai", "banking", "media"],
        deeper: "The demand side of the whole chain: hyperscaler capex decisions ripple backward through every stage above, which is why chip investors now read cloud earnings calls first." }
    ]
  },

  financials: {
    businessModel: [
      "Three distinct money machines share one industry. Foundries sell manufacturing capacity: enormous fixed costs, so profit is a leveraged bet on utilization and pricing per wafer (TSMC converts ~55% gross margins into ~40%+ operating margins at high loadings). Fabless designers sell IP embodied in silicon: R&D-heavy, asset-light, 50% to 78% gross margins, with profits compounding wherever a software ecosystem locks in demand. Memory makers sell a commodity: identical products, price set by the marginal bit, margins swinging from 60% to negative across a single cycle.",
      "The cycle is the industry's defining financial fact. Demand shifts a few % while supply arrives in multi-billion-dollar, 2-year-delayed lumps; distributors and OEMs amplify with inventory swings. Result: industry revenue routinely swings +25% then (15)% across 3 years. Through-cycle averages, not point-in-time margins, are the only honest way to read these companies.",
      "Capital intensity is the moat and the risk at once. Roughly $180B of annual industry capex (2024) buys tomorrow's capacity; whoever mistimes it either starves in a shortage or drowns in depreciation. The leading edge escaped commodity fate precisely because only 3 firms can still afford the table stakes."
    ],
    fingerprint: { grossMargin: 62, recurringRevenue: 25, capitalIntensity: 95, pricingPower: 72, cyclicality: 90, operatingLeverage: 85 },
    lines: [
      { label: "Revenue", note: "Wafer shipments × ASP (foundry) or units × ASP (fabless); read backlog and utilization first" },
      { label: "Gross margin", note: "Foundry 45% to 60% (utilization-driven); fabless 50% to 78% (moat-driven); memory (10)% to 60% (cycle-driven)" },
      { label: "R&D", note: "The real cost of staying alive: 8% of revenue at TSMC, ~20% at fabless leaders" },
      { label: "Operating margin", note: "The operating-leverage payoff: TSMC ~42%, NVIDIA 60%+ in boom, memory makers negative in troughs" },
      { label: "Capex", note: "30% to 50% of foundry/memory revenue; near zero for fabless; THE strategic variable" },
      { label: "Free cash flow", note: "What survives capex; fabless gushes it, manufacturers earn it only across a full cycle" }
    ],
    unitEconomics: {
      unit: "per leading-edge (3nm-class) wafer",
      items: [
        { label: "Selling price", value: "$18,000 to $20,000", note: "roughly 3x a mature-node wafer" },
        { label: "Cash manufacturing cost", value: "~$6,000 to $8,000", note: "materials, labor, power, consumables" },
        { label: "Depreciation share", value: "~$5,000 to $6,000", note: "the $20B fab, amortized over ~5 years of wafers" },
        { label: "Operating profit", value: "~$6,000 to $8,000", note: "at healthy utilization; evaporates below ~80% loadings" }
      ]
    }
  },

  kpiRefs: ["semi-utilization", "semi-yield", "semi-asp", "semi-leadtime", "semi-capex-intensity", "semi-inventory-days"],

  health: {
    intro: "How to judge whether a semiconductor company is healthy. Weights reflect what actually kills or crowns companies in this industry: technology position and capital discipline, judged through the cycle rather than at its ends.",
    pillars: [
      { name: "Technology position", weight: 25, metrics: "Node leadership or design-win share; process roadmap execution; ecosystem lock-in (e.g. CUDA, EUV)", healthy: "Leadership or clear fast-follower at the segment's frontier", warning: "Slipping roadmaps, lost flagship customers" },
      { name: "Through-cycle profitability", weight: 20, metrics: "Gross margin averaged over 5+ years; margin floor in troughs", healthy: "GM floor > 35% (logic) with cycle average > 45%", warning: "Trough gross margins near or below zero (commodity exposure)" },
      { name: "Capex discipline", weight: 20, metrics: "Capex intensity vs demand evidence; prepay/backlog coverage of new capacity", healthy: "Expansion underwritten by contracts and prepayments", warning: "Building on hope into falling lead times" },
      { name: "Balance sheet", weight: 15, metrics: "Net cash or low leverage; liquidity to fund a full downturn's capex", healthy: "Net cash (the sector's strong franchises hoard it)", warning: "Net debt > 2x EBITDA entering a downcycle" },
      { name: "Customer & geographic concentration", weight: 10, metrics: "Top-customer share of revenue; exposure to export-control zones", healthy: "No customer > 20%, diversified end markets", warning: "One customer or one restricted geography dominating growth" },
      { name: "Cash conversion", weight: 10, metrics: "FCF through the cycle; inventory days vs history", healthy: "Positive FCF even in trough years (fabless) or across the cycle (fabs)", warning: "Inventory ballooning past 130 days while receivables stretch" }
    ],
    scoringNote: "Score each pillar 0 to 100 against the healthy/warning bands, multiply by weights. Above 75: fortress. 50 to 75: cyclical but sound. Below 50: the next downturn is an existential event, not a bad year."
  },

  valuation: {
    intro: "Semis are valued differently by sub-sector and by cycle position: the same company can 'deserve' 10x and 25x earnings 18 months apart. The craft is normalizing the cycle before applying any multiple.",
    methods: [
      { name: "EV / EBITDA (through-cycle)", use: "Foundries, IDMs, equipment makers; anything with heavy depreciation", avoid: "Memory at cycle extremes (EBITDA is a fiction at the top, absent at the bottom)", strengths: "Capital-structure neutral; pairs with the sector's depreciation reality", weaknesses: "Flatters companies under-investing; always cross-check capex", range: { low: 8, high: 16, asOf: 2024, note: "equipment and foundry leaders command the top of the band" } },
      { name: "P/E on normalized EPS", use: "Fabless leaders and diversified analog with stable margins", avoid: "Anywhere trough or peak earnings distort the base; normalize first", strengths: "Simple, comparable, tracks the quality spectrum well", weaknesses: "The E is the hard part; consensus rarely models a real downcycle", range: { low: 15, high: 35, asOf: 2024, note: "AI leaders have traded far above; that is an expectations bet, not a comp" } },
      { name: "EV / Sales", use: "High-growth fabless where margins are still scaling", avoid: "Manufacturers (sales without margin context is meaningless at fabs)", strengths: "Usable when earnings are reinvested away; captures growth optionality", weaknesses: "Silent on profitability; the multiple's history is short and regime-dependent", range: { low: 4, high: 15, asOf: 2024, note: "premium tier reserved for 25%+ growers with 60%+ GM" } },
      { name: "P/B (memory specialty)", use: "Memory makers across the cycle: buy near 1x book, sell near 2.5x+", avoid: "Logic and fabless, where the assets are people and IP, not book value", strengths: "The commodity cycle's most reliable mean-reversion anchor for 30 years", weaknesses: "HBM's contract-like economics may be breaking the old bands", range: { low: 0.9, high: 2.5, asOf: 2024, note: "the classic trough-to-peak band for the big 3" } },
      { name: "DCF with capex honesty", use: "Long-horizon views of foundries and equipment; testing what growth is priced in", avoid: "Point estimates; the cycle makes single-path DCFs decorative", strengths: "Forces the capex-depreciation reality into the value story", weaknesses: "Terminal assumptions dominate; garbage tolerance is low", range: { low: 0, high: 0, asOf: 2024, note: "use as a scenario engine, not a price target machine" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a foundry-like business the quick way: normalized EBITDA × a cycle-honest multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 1, max: 60, step: 0.5, value: 12, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 22, step: 0.5, value: 11, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt (net cash) ($B)", min: -40, max: 40, step: 1, value: -8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk splits semis into tollbooths (owned through the cycle: EDA, litho, leading foundry), cyclicals (traded: memory on P/B bands, equipment on capex inflections), and the AI complex (crowded, momentum-driven, sized with respect). It is the market's highest-beta quality sector: nothing expresses a global growth view faster.",
    debates: [
      { topic: "Is AI capex a supercycle or an air pocket in waiting?", bull: "Hyperscaler capex guides keep rising, accelerators remain allocated not sold, HBM is contracted years out, and inference demand compounds on top of training. The compute buildout is early: think 1996, not 2000.", bear: "Ten buyers fund the leading edge; the moment AI revenue disappoints their boards, orders pause in unison. Double-ordering, record positioning, and a 2-year capacity lag are exactly how every semi bust has started." },
      { topic: "Do CHIPS-era subsidies end in glut?", bull: "Subsidies de-risk geographic resilience without changing discipline at the leading edge, where 3 players rationally manage supply.", bear: "China's mature-node buildout plus subsidized Western fabs is textbook capacity overshoot; 28nm+ pricing already shows it. The commodity half of the industry faces a structural margin squeeze." },
      { topic: "How should Taiwan risk be priced?", bull: "The silicon shield holds: deterrence is stable, and TSMC's Arizona/Kumamoto spread thins the tail yearly. The discount on the world's best manufacturing franchise is the opportunity.", bear: "A low-probability, portfolio-ending magnitude event that correlates with everything else failing at once deserves more than 50bps of discount; hedges are underpriced because the scenario is unmodelable." }
    ],
    cycle: {
      where: "A split cycle: AI silicon and HBM supply-constrained (boom), analog/MCU/mature nodes digesting the 2021 over-order (late downcycle, bottoming). The composite indices mask two opposite phases.",
      drivers: "Hyperscaler capex, smartphone/PC replacement waves, auto/industrial inventory, and the 2-year lag between capex decisions and wafers out.",
      leads: [
        "TSMC monthly revenue (published ~10th, free): the chain's highest-frequency truth",
        "Lead times (falling = downcycle loading) and distributor inventory days",
        "SEMI equipment book-to-bill and WSTS monthly billings (3-month average)",
        "Memory spot vs contract pricing: the commodity end turns first",
        "HBM contract coverage and CoWoS capacity announcements for the AI complex"
      ]
    },
    exposure: [
      { vehicle: "Tollbooths (ASML, EDA duopoly, TSMC)", note: "Own through the cycle: monopoly economics compound across busts" },
      { vehicle: "AI complex (NVDA and the HBM chain)", note: "The momentum book; size for 30% drawdowns that arrive without appointments" },
      { vehicle: "Memory (Samsung, SK Hynix, Micron)", note: "The P/B band trade: buy near 1x book in loss quarters, trim past 2x" },
      { vehicle: "Equipment (AMAT, Lam, TEL, KLA)", note: "Capex beta with consolidation quality; leads the cycle both ways" },
      { vehicle: "SOXX/SMH archetypes", note: "The sector beta: increasingly an NVDA-weighted single bet; know the concentration" }
    ],
    catalysts: [
      { when: "~10th monthly", what: "TSMC revenue release: the sector's pulse check" },
      { when: "Late Jan / Apr / Jul / Oct", what: "Earnings waves: TSMC and ASML guide first, NVIDIA closes the loop a month later" },
      { when: "March (GTC), December (SEMICON)", what: "Product and capacity narratives reset" },
      { when: "Irregular, watch October", what: "US export-control updates: each round re-prices China exposure across the chain" }
    ],
    data: [
      { series: "WSTS/SIA monthly billings", source: "semiconductors.org (free)", why: "The industry's official revenue pulse, 3-month smoothed" },
      { series: "TSMC monthly revenue", source: "pr.tsmc.com (free)", why: "Leading-edge demand in near-real-time" },
      { series: "SEMI book-to-bill & fab forecasts", source: "semi.org (free summaries)", why: "The capex cycle's direction" },
      { series: "DRAM/NAND spot price summaries", source: "TrendForce free notes", why: "The commodity end's turn signal" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Orders fall 20% to 30% with a violent inventory unwind; the buy signal is inventory normalization plus capex cuts, historically 2 quarters before the trough in fundamentals." },
      { regime: "Rates rising", behavior: "Multiple compression on the growth half; tollbooths hold best. Less rate-sensitive than software: earnings are nearer-dated." },
      { regime: "Inflation", behavior: "Mildly positive: pricing power at the constrained leading edge passes costs through; commodity semis cannot." },
      { regime: "Risk-off", behavior: "1.5x market beta and the first sector sold on global growth fear; Taiwan headlines add a gap-risk layer no other sector carries." }
    ]
  },

  players: [
    { name: "TSMC", role: "Pure-play foundry", country: "TW", real: true, note: "~60% foundry share, ~90% of leading-edge logic; the chain's center of gravity" },
    { name: "NVIDIA", role: "Fabless AI leader", country: "US", real: true, note: "Accelerators + CUDA ecosystem; captured the AI profit pool" },
    { name: "ASML", role: "Lithography monopoly", country: "NL", real: true, note: "Sole maker of EUV machines; the chokepoint of chokepoints" },
    { name: "Samsung", role: "Memory #1 + foundry challenger", country: "KR", real: true, note: "DRAM/NAND leadership funds its pursuit of TSMC" },
    { name: "SK Hynix", role: "HBM leader", country: "KR", real: true, note: "Won the first AI memory round; HBM sold out years ahead" },
    { name: "Intel", role: "IDM in transition", country: "US", real: true, note: "Betting the company on regaining process leadership and foundry customers" },
    { name: "AMD / Qualcomm / Broadcom", role: "Fabless majors", country: "US", real: true, note: "CPUs, mobile, networking; TSMC's anchor customers" },
    { name: "Micron", role: "Memory #3", country: "US", real: true, note: "The West's memory champion" },
    { name: "Synopsys & Cadence", role: "EDA duopoly", country: "US", real: true, note: "Every chip is born in their software" },
    { name: "ASE / Amkor", role: "OSAT leaders", country: "TW", real: true, note: "Packaging and test scale; suddenly strategic in the chiplet era" }
  ],

  geography: [
    { country: "TW", role: "Leading-edge logic manufacturing (~90%)", note: "TSMC's cluster is the world's most concentrated strategic asset" },
    { country: "KR", role: "Memory superpower", note: "Samsung + SK Hynix hold ~70% of DRAM" },
    { country: "US", role: "Design, EDA, equipment, AI chips", note: "Controls the IP and tool chokepoints; rebuilding fabs with subsidies" },
    { country: "JP", role: "Materials and equipment", note: "Photoresists, wafers, and tools with 50% to 90% niche shares" },
    { country: "NL", role: "Lithography", note: "ASML: the only EUV source on Earth" },
    { country: "CN", role: "Largest consumer; mature-node builder", note: "Buys ~35% of chips; racing for self-sufficiency below the export-control line" },
    { country: "MY", role: "Packaging & test hub", note: "~13% of global assembly/test flows through Penang" }
  ],

  cycles: [
    { year: 1985, title: "The DRAM massacre", kind: "bust", text: "Japanese memory dumping crushes US producers; Intel exits DRAM for CPUs. Lesson: in commodity chips, cost curve position is survival, and strategic retreat can be the best trade ever made." },
    { year: 1995, title: "PC supercycle peak", kind: "boom", text: "Windows 95-era demand triples memory prices, then 1996-98 overbuild vaporizes them. Lesson: today's shortage funds tomorrow's glut, always." },
    { year: 2001, title: "Dotcom bust", kind: "bust", text: "Industry revenue falls ~32%, the worst year in its history. Lesson: double-ordering during booms means the crash overshoots real demand by 2x." },
    { year: 2009, title: "Financial crisis trough", kind: "bust", text: "Memory prices fall below cash cost; Qimonda goes bankrupt; survivors consolidate into today's 3-player oligopoly. Lesson: troughs, not booms, set long-run industry structure." },
    { year: 2017, title: "Memory boom", kind: "boom", text: "Cloud datacenter buildout doubles DRAM prices; 2019 delivers the hangover. Lesson: even 'structural' demand obeys the capacity lag." },
    { year: 2021, title: "The great shortage", kind: "boom", text: "COVID demand + double-ordering halts car production worldwide; chips become dinner-table news and national policy. Lesson: the bullwhip is strongest where chips are cheapest (autos' $2 MCUs)." },
    { year: 2023, title: "Memory crash meets AI boom", kind: "shift", text: "The worst memory downturn in a decade coincides with an AI accelerator shortage: two cycles, opposite phases, one industry. Lesson: 'the semi cycle' is now several cycles wearing one name." }
  ],

  risks: [
    { name: "Taiwan concentration", severity: 5, likelihood: 2, transmission: "Any blockade or conflict halts ~90% of leading-edge logic; within months, global electronics, auto, and cloud production stalls. No rebuild path under 5 years at any budget. The single largest identifiable risk in the world economy." },
    { name: "Cycle overbuild", severity: 3, likelihood: 4, transmission: "Subsidized fabs + AI exuberance deliver simultaneous capacity; utilization and ASPs fall together; equipment orders collapse first, then memory pricing, then capex-heavy balance sheets." },
    { name: "Export-control escalation", severity: 4, likelihood: 4, transmission: "Each tightening cuts revenue to the largest end market and accelerates Chinese substitution below the line; retaliation risk runs through rare earths and mature-node dumping." },
    { name: "Single-source chokepoints", severity: 4, likelihood: 2, transmission: "One EUV maker, a handful of resist and wafer plants: a fire, quake, or embargo at any of them ripples through every fab within a quarter (see the 2011 Tōhoku and 2021 Renesas events)." },
    { name: "AI demand air-pocket", severity: 3, likelihood: 3, transmission: "If AI monetization lags capex, hyperscalers pause orders; accelerator, HBM, and advanced packaging investments unwind violently through the most crowded positioning in the sector." },
    { name: "Power, water, talent", severity: 3, likelihood: 3, transmission: "Fabs need gigawatts, millions of gallons daily, and scarce process engineers; each constraint now gates expansion as hard as capital does." }
  ],

  levels: {
    L1: { title: "Beginner", text: [
      "Chips are tiny sheets of silicon covered in billions of microscopic on-off switches. Every phone, car, computer, and appliance thinks with them. A few companies design them (like architects), a few factories called fabs build them (like ultra-clean printing presses), and everything electronic downstream depends on the output.",
      "Two things make this industry special: the factories are the most expensive buildings on Earth ($20B+ each), and most advanced chips are made on one island, Taiwan. That is why chips show up in the news next to presidents, not just products."
    ] },
    L2: { title: "Intermediate", text: [
      "The industry splits into design (fabless companies like NVIDIA), manufacturing (foundries like TSMC), memory (a commodity made by 3 firms), equipment (ASML's litho machines), and packaging. Each has different economics: design earns software-like margins on R&D; manufacturing earns returns on utilization of giant fixed assets; memory swings with commodity pricing.",
      "The industry moves in 2-to-4-year cycles because supply arrives in huge delayed lumps while buyers over-order in shortages and cancel in gluts. Reading utilization, inventory days, and lead times tells you where in the cycle you stand, usually before the headlines do."
    ] },
    L3: { title: "Advanced", text: [
      "Value migrates along the chain over time. Free transistor scaling ended, so differentiation moved from process nodes alone to architecture, chiplets, advanced packaging, and software ecosystems; that is why packaging (CoWoS) and HBM memory became bottlenecks and why CUDA is a moat measured in decades. Leading-edge manufacturing consolidated to 3 players because each node's capex only pencils at massive shared volume.",
      "Financial analysis here means normalizing the cycle: through-cycle margins, capex-to-depreciation ratios, channel inventory, and prepayment-backed backlogs. Peak-quarter multiples and trough-quarter panic are both category errors; P/B bands for memory and mid-cycle EV/EBITDA for fabs have been the reliable anchors."
    ] },
    L4: { title: "Expert", text: [
      "The geopolitical layer is now a first-order input. Export controls define addressable markets; subsidies distort fab siting economics by 20% to 40%; China's mature-node buildout threatens a structural glut in the industry's commodity half while its self-sufficiency drive races the control line. Scenario analysis (Taiwan risk, control escalation, subsidy oversupply) belongs in every model, not in a footnote.",
      "Watch the second-derivative indicators experts trade on: equipment book-to-bill, TSMC's monthly revenue, HBM contract coverage, CoWoS capacity announcements, distributor inventory days, and lead-time inflections. Each leads reported revenue by one to three quarters."
    ] },
    L5: { title: "Institutional", text: [
      "Position sizing in semis is a bet on cycle phase plus structural regime. The institutional playbook: own the tollbooths (EDA, litho, leading foundry) through the cycle, trade the commodity (memory) on P/B extremes and supply discipline signals, underwrite fabless leaders on ecosystem durability rather than unit forecasts, and treat AI capex concentration (10 buyers driving the leading edge) as both the bull case and the crowding risk.",
      "For allocators and consultants: the sector's 10-year story is bifurcation. A supply-constrained strategic tier with utility-like pricing power wrapped in sovereign subsidy, and a commoditizing tier facing Chinese capacity. Frameworks built on 'the semiconductor cycle' as one object will misprice both halves."
    ] }
  },

  quiz: [
    { q: "Why did the foundry model (TSMC, 1987) reshape the industry?", choices: ["It made chips cheaper to ship", "It let designers exist without owning $20B fabs, splitting the industry into fabless + foundry", "It eliminated the need for lithography", "It ended the memory business"], answer: 1, explain: "Unbundling design from manufacturing created the fabless industry and concentrated manufacturing scale where volume could pay for each new node." },
    { q: "A fab's profitability is MOST sensitive to:", choices: ["Marketing spend", "Utilization of its mostly-fixed cost base", "Currency moves", "Distributor margins"], answer: 1, explain: "Fabs are almost entirely fixed cost; loadings above ~90% mint money while loadings below ~80% destroy margins. Utilization IS the P&L." },
    { q: "Falling industry lead times most often signal:", choices: ["Demand is accelerating", "A shortage is starting", "Double-ordered demand is unwinding and a downcycle may follow", "Yields are improving"], answer: 2, explain: "When chips arrive faster, buyers stop panic-ordering and start canceling; lead-time inflections lead the cycle by 2 to 3 quarters." },
    { q: "Why does memory swing harder than logic through cycles?", choices: ["Memory fabs are older", "Memory is a commodity priced at the marginal bit, while strong logic carries design moats", "Logic is subsidized", "Memory has no capex"], answer: 1, explain: "Identical products mean pure price competition: memory margins run from 60% to negative across a cycle while differentiated logic holds a floor." },
    { q: "ASML matters disproportionately because:", choices: ["It is the largest chipmaker", "It is the world's only maker of EUV lithography machines", "It owns TSMC", "It sets memory prices"], answer: 1, explain: "No EUV, no leading edge: a literal monopoly on the machine that enables every advanced node, which also makes it an export-control lever." },
    { q: "The 2021 auto chip shortage taught that:", choices: ["Cars use no chips", "The bullwhip hits hardest in cheap chips with long, thin supply chains", "Fabs can be built in months", "Distributors hold no inventory"], answer: 1, explain: "$2 microcontrollers halted $50,000 vehicles; low-value parts get the least supply-chain attention and the most violent whiplash." },
    { q: "A memory maker trades at 1.0x book value after 2 loss-making quarters. Historically this has been:", choices: ["A sell signal", "Meaningless", "Near the trough-buying zone of the P/B band", "Proof of fraud"], answer: 2, explain: "For 30 years the big memory names have cycled roughly between 1x book (trough) and 2.5x+ (peak); book value anchors the commodity cycle." },
    { q: "Advanced packaging (CoWoS, HBM stacking) became strategic because:", choices: ["Transistor scaling alone stopped delivering, so performance now comes from connecting dies", "Packaging is the cheapest step", "Regulators required it", "It replaced lithography"], answer: 0, explain: "With Moore's Law slowing, gluing compute dies to memory stacks is how AI chips get faster; packaging capacity gated AI shipments in 2023-24." }
  ],

  sources: [
    { name: "WSTS / SIA industry statistics", url: "https://www.semiconductors.org", feeds: "market size, shipments" },
    { name: "SEMI equipment & fab data", url: "https://www.semi.org", feeds: "capex, capacity" },
    { name: "Company filings (EDGAR)", url: "https://www.sec.gov/cgi-bin/browse-edgar", feeds: "financials, utilization commentary" },
    { name: "US BIS export control rules", url: "https://www.bis.doc.gov", feeds: "regulatory perimeter" }
  ]
};
