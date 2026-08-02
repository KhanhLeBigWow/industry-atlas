/* Industry Atlas - CONSUMER ELECTRONICS (full module, research-backed)
 * Anchors 2025: global smartphone shipments 1.25B units (+2% YoY), Apple 247.8M
 * (19.7%) overtook Samsung 241.2M (19.1%) for its first full-year lead, Xiaomi
 * 165.3M (~13%) (IDC, Jan 2026); Q4 2025 Apple 81.3M / 24.2% share (IDC);
 * PC shipments 270M+ (+9.1% YoY) on Windows 10 end-of-support (Gartner, Jan 2026);
 * AI PCs ~31% of 2025 PC shipments per Gartner (77.8M units), ~40% per Canalys;
 * global replacement cycle ~3.5 to 4 years, peak 43.4 months in 2023 (Counterpoint,
 * SellCell); smartphone ASP ~$370 in 2025 toward $412 by 2029 (Counterpoint);
 * Apple FY2025 gross margin 46.9% total, products 36.8%, services 75.4% (10-K,
 * Sep 2025); Samsung Electronics FY2025 operating margin ~13% (company results). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["consumer-electronics"] = {
  meta: {
    id: "consumer-electronics", name: "Consumer Electronics", sector: "technology", status: "full",
    tagline: "1.5 billion devices a year, near-zero assembly margins, and one company keeping half the industry's profit: hardware is brutal unless you own the ecosystem.",
    marketSize: { value: 1.1, unit: "$T", asOf: 2025, note: "global device revenue; estimates span $0.9T to $1.6T on category scope; smartphones ~half of it" },
    cagr: { value: 5, range: [3, 8], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 4, capitalIntensity: 3, regulation: 2, disruption: 4
  },
  newsQuery: '(Apple OR Samsung OR Xiaomi OR "smartphone shipments" OR "PC shipments" OR "AI PC" OR Foxconn)',

  overview: {
    definition: "Consumer electronics designs, assembles, and sells the devices people live through: smartphones, PCs, tablets, wearables, TVs, and the accessory swarm around them. Roughly 1.25B smartphones and 270M+ PCs shipped in 2025, yet the profit pool concentrates so violently that one vendor routinely captures the majority of the industry's earnings.",
    howItWorks: [
      "The structure is a barbell: a handful of brand owners (Apple, Samsung, Xiaomi, Lenovo, Dell, HP) command the customer relationship and the margin, while an invisible manufacturing complex (Foxconn, Pegatron, Quanta, and the Shenzhen supply web) builds everything for assembly fees measured in single-digit dollars per unit. The brands own design, silicon choices, software, and distribution; the EMS/ODM layer owns factories, labor, and heroic logistics: 2 very different businesses wearing one product.",
      "The economics are decided by ecosystem, not hardware. Apple's FY2025 gross margin ran 46.9% overall: 36.8% on products but 75.4% on services (App Store, subscriptions, payments), and that services annuity now sets the valuation. Most Android OEMs clear hardware gross margins in the teens and net margins in the low single digits; Samsung's ~13% FY2025 operating margin leans heavily on its memory-chip arm, not its phones. The industry's razor-and-blade runs through software: sell the glass slab near commodity economics, monetize the installed base for years.",
      "Demand is a replacement market wearing a growth costume. Smartphone penetration is saturated in developed markets, so units track the upgrade cycle, and that cycle has stretched from 2 to 3 years historically to roughly 3.5 to 4 years (a 43.4-month peak in 2023, per Counterpoint): better build quality, longer software support, and $1,000+ flagships all slow the treadmill. Vendors fight back with premiumization: global smartphone ASP reached about $370 in 2025 and is tracked toward $412 by 2029, so revenue grows even when boxes don't.",
      "2025 delivered the industry's 2 defining tape prints: Apple shipped 247.8M smartphones (19.7% share) to overtake Samsung (241.2M, 19.1%) for its first full-year unit lead, sealed by a 24.2%-share Q4; and PCs grew 9.1% to 270M+ units as the October 2025 Windows 10 end-of-support deadline forced a refresh, with AI PCs at roughly 31% of shipments (Gartner) to 40% (Canalys), a definitional gap that itself tells you how unsettled the AI hardware story is. Whether on-device AI becomes a true supercycle or a spec-sheet checkbox is the sector's central live debate."
    ],
    history: [
      { era: "1950-1979", title: "The Japanese wave", text: "Transistor radios, Trinitron TVs, and the Walkman: Sony and Panasonic turn consumer hardware into a global export machine and teach the world miniaturization." },
      { era: "1980-2000", title: "The PC era", text: "IBM's open architecture spawns clones, Wintel captures the profit, and hardware makers learn the founding lesson: whoever owns the platform taxes the box-builders." },
      { era: "2001-2006", title: "Digital convergence", text: "iPod, flat panels, and feature phones; Nokia peaks near 40% of handsets; manufacturing migrates wholesale to Shenzhen and the EMS model is born." },
      { era: "2007-2015", title: "The smartphone land grab", text: "The iPhone collapses cameras, GPS, music, and computing into one slab; Android floods the world; Nokia and BlackBerry, worth $150B+ combined, evaporate within 6 years." },
      { era: "2016-present", title: "Saturation and ecosystems", text: "Unit growth stalls, replacement cycles stretch toward 4 years, and the game shifts to ASP, services attach, and supply-chain geopolitics: with on-device AI as the claimed next refresh engine." }
    ],
    trends: [
      { title: "Replacement cycles lengthening", direction: "down", text: "The global upgrade cycle has stretched to ~3.5 to 4 years (43.4-month peak in 2023): durable phones, 5 to 7 years of software support, and flagship sticker shock all slow the unit treadmill." },
      { title: "Premiumization and ASP", direction: "up", text: "Smartphone ASP hit ~$370 in 2025, tracking toward $412 by 2029 (~3% CAGR): consumers buy less often but buy better, and vendors mix-shift upward to protect revenue." },
      { title: "The AI device push", direction: "shift", text: "AI PCs reached ~31% to 40% of 2025 PC shipments depending on whose definition you accept; phone makers ship on-device models and assistants. Real refresh driver or marketing coat of paint: the tape hasn't settled it." },
      { title: "Supply chain diversification", direction: "shift", text: "China still assembles most devices, but India built roughly a fifth of iPhones and Vietnam absorbed wearables and PCs: tariff risk turned 'China+1' from slideware into capex." },
      { title: "Services and installed-base monetization", direction: "up", text: "Apple's 75.4% services gross margin against 36.8% on products is the industry's north star: every vendor now chases subscriptions, financing, trade-in programs, and ad revenue on the base." }
    ],
    outlook: "A mature, brutally Darwinian market with 2 escape hatches: own a premium ecosystem (Apple's playbook, now Samsung's aspiration) or own scale manufacturing (Foxconn's). The 2025 PC refresh and the AI narrative give units a cyclical lift into 2026, but the structural facts persist: saturated penetration, 4-year cycles, and profit pooling to whoever monetizes the installed base rather than the box. Watch whether AI features shorten upgrade cycles; if they don't, ASP and services are the only growth left."
  },

  structure: {
    suppliers: [
      { name: "Chipmakers (Qualcomm, MediaTek, Apple silicon via TSMC, Intel, AMD)", note: "The SoC is the device's cost and capability ceiling; AI specs start here" },
      { name: "Memory & display (SK Hynix, Samsung, Micron; BOE, LG Display)", note: "The most cyclical inputs: 2025's AI-datacenter memory squeeze inflated device BOMs" },
      { name: "Batteries, camera modules, casings (CATL/ATL, Sony sensors, Largan)", note: "Hundreds of specialists; camera and battery specs sell phones" },
      { name: "EMS/ODM manufacturers (Foxconn, Pegatron, Quanta, Compal, Wistron)", note: "Assemble nearly everything for low single-digit margins at continental scale" }
    ],
    producers: [
      { name: "Apple", note: "247.8M iPhones in 2025 (19.7% share), first full-year unit lead ever, plus Mac, iPad, wearables and the services annuity" },
      { name: "Samsung Electronics", note: "241.2M phones (19.1%) plus TVs and appliances; the only vertically integrated giant (chips, displays, devices)" },
      { name: "Chinese brands (Xiaomi 165.3M, vivo, OPPO, Honor, Huawei)", note: "Volume kings of emerging markets and China; thin margins, huge reach" },
      { name: "PC makers (Lenovo, HP, Dell, Asus, Acer)", note: "270M+ unit market refreshing on Windows 10 EOL and the AI PC pitch" }
    ],
    distributors: [
      { name: "Carriers", note: "Still the US phone channel: financing and trade-in promos set effective prices" },
      { name: "Big-box and online retail (Best Buy, Amazon, JD, MediaMarkt)", note: "Thin-margin volume; shelf position is bought" },
      { name: "Brand-owned channels", note: "Apple's stores and sites capture the retail margin and the trade-in flow" }
    ],
    customers: [
      { name: "Consumers", note: "Discretionary, financing-sensitive, and upgrading every ~3.5 to 4 years" },
      { name: "Enterprises & education", note: "Fleet PC and device refreshes; the Windows 10 deadline made 2025 their year" },
      { name: "Secondhand & refurb buyers", note: "A fast-growing shadow market that both cannibalizes and funds new sales via trade-in" }
    ],
    regulators: [
      { name: "Trade authorities (USTR, customs regimes)", note: "Tariffs on China-built electronics are the sector's biggest policy lever" },
      { name: "EU (USB-C mandate, right-to-repair, DMA)", note: "Brussels regulates the product and the app-store take rate" },
      { name: "Safety & spectrum bodies (FCC, CE)", note: "Certification friction, modest but universal" }
    ],
    capital: [
      { name: "Public equity", note: "Mega-cap brands fund from cash flow; Apple's buyback is the largest in market history" },
      { name: "Supply-chain finance", note: "EMS makers float enormous working capital between component purchase and brand payment" },
      { name: "State incentives", note: "India's PLI subsidies and Vietnam's tax deals bankroll the China+1 build-out" }
    ]
  },

  valueChain: {
    intro: "From a $60 SoC to a $1,000 flagship to a 75%-margin subscription. Value capture is a smile curve: fat at design/brand and services, fat in components, near zero in the middle where the devices actually get built.",
    stages: [
      { id: "components", name: "Silicon & components", what: "SoCs, memory, displays, sensors, batteries", players: "Qualcomm, MediaTek, SK Hynix, BOE, Sony sensors", valueCapture: 4,
        economics: { grossMargin: [20, 55], capitalIntensity: 5, concentration: 4 },
        linksTo: ["semiconductors", "batteries"],
        deeper: "The component layer holds the technical moats: leading-edge SoCs and camera sensors price like the oligopolies they are, while memory swings 40%+ through its cycle. In 2025 AI-datacenter demand crowded out mobile DRAM/NAND supply and pushed device BOMs up: component cycles, not consumer whims, often set hardware margins." },
      { id: "design", name: "Design & brand OEMs", what: "Product definition, silicon strategy, OS integration, brand", players: "Apple, Samsung, Xiaomi, Lenovo, Dell", valueCapture: 5,
        economics: { grossMargin: [15, 40], capitalIntensity: 2, concentration: 4 },
        linksTo: ["semiconductors", "saas"],
        deeper: "Asset-light and margin-heavy: the brands own no factories yet keep most of the hardware profit. The spread inside the layer is the industry's whole story: Apple's 36.8% product gross margin vs teens for most Android OEMs, because custom silicon plus OS control plus brand converts into pricing power nobody else has." },
      { id: "manufacturing", name: "Contract manufacturing (EMS/ODM)", what: "Assembly, test, packaging at continental scale", players: "Foxconn, Pegatron, Quanta, Compal, Luxshare", valueCapture: 1,
        economics: { grossMargin: [4, 8], capitalIntensity: 4, concentration: 4 },
        linksTo: ["manufacturing", "logistics"],
        deeper: "The hardest work for the thinnest reward: millions of workers, weeks-long product ramps, and net margins near 2 to 3%. Scale is the only moat, which is why Foxconn assembles for nearly everyone. The layer is also the geopolitical fault line: relocating iPhone capacity to India costs billions and years, and tariffs reprice it overnight." },
      { id: "distribution", name: "Distribution & retail", what: "Carriers, big-box, e-commerce, brand stores", players: "Carriers, Best Buy, Amazon, Apple retail", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 2, concentration: 3 },
        linksTo: ["retail", "ecommerce", "telecom"],
        deeper: "Channel margin is thin but channel power is real: US carrier financing promos effectively set flagship prices, and trade-in programs run the used-device flywheel. Brands that own retail (Apple) capture this layer's margin and its customer data; everyone else rents shelf space." },
      { id: "services", name: "Services & ecosystem", what: "App stores, subscriptions, payments, ads, financing", players: "Apple, Google, Samsung, Xiaomi internet services", valueCapture: 5,
        economics: { grossMargin: [60, 80], capitalIntensity: 1, concentration: 5 },
        linksTo: ["saas", "payments", "media", "gaming"],
        deeper: "The profit engine hiding behind the hardware: Apple's services gross margin ran 75.4% in FY2025 against 36.8% for products. A 30% app-store take rate on a billion-device installed base is one of the best business models ever built, which is exactly why the EU's DMA and global regulators are prying at it." },
      { id: "aftermarket", name: "Trade-in, refurb & repair", what: "Buyback programs, certified refurb, parts, recycling", players: "Brand trade-in desks, Back Market class, insurers", valueCapture: 3,
        economics: { grossMargin: [10, 30], capitalIntensity: 2, concentration: 2 },
        linksTo: ["retail", "waste-management"],
        deeper: "Longer replacement cycles built a real secondhand economy: trade-in subsidizes new flagships, refurb serves price-sensitive buyers without diluting the brand, and right-to-repair rules push parts availability. For brands it is both cannibal and financier: a used iPhone sold is a services subscriber kept." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 3 P&L species. Ecosystem brands (Apple): hardware revenue at mid-30s gross margins plus a services annuity at 75%, with the mix shifting toward the annuity every year: value the installed base, not the unit forecast. Volume brands (Xiaomi, most Android, PC OEMs): revenue = units x ASP, gross margins in the teens, operating margins low single digit, so small ASP or BOM moves swing earnings violently. EMS/ODMs (Foxconn class): assembly fees on enormous revenue, 2 to 3% net margins, and working-capital mechanics that make cash flow the real statement to read.",
      "The cycle enters through 3 doors: consumer discretionary demand (units), component costs (memory alone can move BOMs double digits, as 2025's AI-driven DRAM squeeze showed), and channel inventory (over-shipment ahead of weak sell-through produces the sector's classic guidance cuts). Replacement-cycle math is the slow structural tide underneath: every month added to the ~43-month cycle removes roughly 2% of annual replacement demand, which vendors must claw back through ASP, services, or share gains."
    ],
    fingerprint: { grossMargin: 30, recurringRevenue: 25, capitalIntensity: 40, pricingPower: 45, cyclicality: 65, operatingLeverage: 55 },
    lines: [
      { label: "Units & shipment share", note: "The quarterly tape: IDC/Gartner/Canalys prints move the stocks (Apple's 24.2% Q4 2025 print crowned its year)" },
      { label: "ASP & mix", note: "The premiumization lever: ~$370 smartphone ASP in 2025, rising as units stall" },
      { label: "Product vs services gross margin", note: "The Apple lens: 36.8% vs 75.4% in FY2025; mix shift IS the earnings story" },
      { label: "Channel inventory & sell-through", note: "Over-shipment ahead of weak demand is how hardware quarters blow up" },
      { label: "BOM & component costs", note: "Memory and SoC pricing swing hardware margins; 2025's DRAM squeeze is the live example" }
    ],
    unitEconomics: {
      unit: "per premium flagship smartphone (illustrative)",
      items: [
        { label: "Retail price / BOM", value: "~$1,000+ / ~$500-580", note: "teardown-estimated component cost for a top-tier flagship" },
        { label: "Assembly fee (EMS)", value: "~$10-30", note: "the entire manufacturing layer's cut of a $1,000 device" },
        { label: "Brand gross margin", value: "~35% to 40% (Apple class); teens for most Android", note: "design, silicon, and brand capture the hardware profit" },
        { label: "Services on the base", value: "high-margin annuity per user per year", note: "app-store take, subscriptions, payments: at ~75% gross margin it out-earns the box over a 4-year life" }
      ]
    }
  },

  kpiRefs: ["semi-asp", "retail-inventory-turns"],
  kpiLocal: [
    {
      id: "ce-replacement-cycle", name: "Replacement Cycle Length", industries: ["consumer-electronics"],
      definition: "Average months between device purchases across the installed base: the sector's structural demand denominator.",
      formula: "Installed base / annual replacement units, expressed in months (or survey-based holding period)",
      interpretation: "Longer cycles shrink annual demand from the same base. Global smartphone cycles stretched to a 43.4-month peak in 2023 and hover near 3.5 to 4 years; every added month must be offset by ASP, services, or share.",
      healthy: "Stable or shortening cycle (a real feature-driven refresh)", warning: "Cycle lengthening while ASP growth stalls: units and revenue fall together"
    },
    {
      id: "ce-services-attach", name: "Services Attach & Installed-Base Monetization", industries: ["consumer-electronics"],
      definition: "Services revenue per active device (or services share of gross profit): how well a vendor taxes its installed base beyond the hardware sale.",
      formula: "Services revenue / active installed base; track services % of total gross profit",
      interpretation: "The escape hatch from hardware economics. Apple's services carry 75.4% gross margins vs 36.8% on products (FY2025), so rising attach re-rates the whole P&L toward annuity quality.",
      healthy: "Services revenue per device rising; services gross profit share climbing", warning: "Attach flat while regulators cut take rates: the annuity thesis leaks"
    }
  ],

  health: {
    intro: "Brand health is ecosystem lock-in and mix; volume-player health is BOM discipline and inventory; EMS health is utilization and customer concentration. Everyone's health is channel truth: sell-through, not sell-in.",
    pillars: [
      { name: "Ecosystem & pricing power", weight: 25, metrics: "ASP trend vs peers, services attach, retention/switching rates", healthy: "Rising ASP with stable share; services profit share climbing", warning: "Discounting to hold share; ecosystem exits rising" },
      { name: "Unit momentum & share", weight: 20, metrics: "Shipment share by region and price tier (IDC/Canalys prints)", healthy: "Share gains in premium tiers", warning: "Share held only via low-end mix; shrinking premium presence" },
      { name: "Margin structure", weight: 20, metrics: "Gross margin vs BOM cycle, opex discipline, mix shift", healthy: "Margins stable through component swings", warning: "Margins hostage to memory prices; no services offset" },
      { name: "Channel & inventory", weight: 20, metrics: "Channel weeks of inventory, sell-in vs sell-through gap", healthy: "Lean channel, demand-matched builds", warning: "Stuffed channel ahead of soft demand: the classic pre-warning tell" },
      { name: "Supply chain resilience", weight: 15, metrics: "Assembly geography mix, single-source components, tariff exposure", healthy: "Multi-country assembly, dual-sourced criticals", warning: "One-country concentration meeting a tariff or export-control shock" }
    ],
    scoringNote: "In consumer electronics the silent killer is channel inventory: revenue is booked at sell-in, so a stuffed channel converts next quarter's demand into this quarter's writedown."
  },

  valuation: {
    intro: "The market prices ecosystem annuities like software and everything else like the cyclical hardware it is: the same shipment print can mean opposite things to an Apple and a Foxconn.",
    methods: [
      { name: "P/E on forward earnings", use: "The default for brands; the multiple encodes the ecosystem premium", avoid: "Peak-cycle earnings (a refresh year like 2025's PC print flatters the E)", strengths: "Simple, comparable, liquid consensus", weaknesses: "Blends a 75%-margin annuity with cyclical hardware into one number", range: { low: 10, high: 30, asOf: 2025, note: "volume Android/PC names at the low end; Apple's ecosystem commands the top" } },
      { name: "Sum-of-the-parts (hardware + services)", use: "Ecosystem brands: value services like software, hardware like hardware", avoid: "Applying it to pure box-makers with no annuity", strengths: "Matches the actual economics; exposes hidden annuity value", weaknesses: "Segment disclosure is partial; allocation of shared costs is art", range: { low: 0, high: 0, asOf: 2025, note: "framework anchor, not a single multiple" } },
      { name: "EV / EBITDA", use: "EMS/ODMs and diversified conglomerates (Samsung) across the cycle", avoid: "Cross-species comps (an EMS at 8x is not cheap vs a brand at 12x)", strengths: "Capital-structure neutral, standard for manufacturers", weaknesses: "Ignores the working-capital reality that dominates EMS cash flow", range: { low: 4, high: 12, asOf: 2025, note: "EMS at the bottom, premium brands well above" } },
      { name: "FCF yield & buyback math", use: "Mega-cap brands returning cash; the Apple lens", avoid: "EMS names where FCF whipsaws with working capital", strengths: "Cuts through mix noise to cash reality", weaknesses: "Capex-light brands flatter it; component makers distort it", range: { low: 3, high: 6, asOf: 2025, note: "% yields; the buyback is a structural bid under the ecosystem names" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a device maker quickly: normalized EBITDA times an ecosystem-adjusted multiple, minus net debt (most brands carry net cash: enter it as a negative).",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 1, max: 150, step: 1, value: 20, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 25, step: 0.5, value: 10, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B, negative = net cash)", min: -100, max: 60, step: 5, value: -20, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays consumer electronics as an ecosystem-annuity long wrapped in a hardware cycle trade: core the installed-base monetizers, trade the volume brands and EMS names on shipment momentum and component costs, and treat every AI-supercycle headline as a hypothesis to be tested against replacement-cycle data, not a thesis to be bought on faith.",
    debates: [
      { topic: "AI devices: genuine supercycle or spec-sheet marketing?", bull: "Every prior capability jump (3G, cameras, big screens) shortened upgrade cycles; on-device AI plus the Windows 10 deadline already drove PCs +9.1% in 2025 with AI PCs at 31 to 40% of shipments, and phone-side AI features are only in their second generation: the refresh compounds from here.", bear: "The 2025 PC print was a Windows 10 deadline pull-forward wearing an AI costume: the 31% vs 40% definitional gap shows nobody agrees what an AI PC even is, killer on-device apps remain unnamed, and replacement cycles kept lengthening right through the launch year. Supercycles need must-have, not nice-to-have." },
      { topic: "Can hardware margins survive 4-year replacement cycles?", bull: "ASP (~$370 in 2025, tracking to $412 by 2029) and services attach more than offset slower units: consumers pay up for devices they keep longer, trade-in programs recycle demand, and the installed base monetizes annually regardless of upgrade timing.", bear: "Premiumization has a ceiling and the 2025 memory-cost squeeze is eating the ASP gains; meanwhile the secondhand market grows faster than the new market, satisfying exactly the price tiers where Android volume brands live. Fewer boxes at compressed margins is the base case outside the Apple bubble." },
      { topic: "China manufacturing concentration: manageable tail or the sector's biggest mispricing?", bull: "India already assembles a meaningful share of iPhones and Vietnam absorbed wearables and PCs: the China+1 build-out is funded, underway, and tariff regimes have consistently carved out or delayed consumer-device pain because the consumer votes.", bear: "Diversification is assembly-deep only: components, tooling, and engineering density remain overwhelmingly Chinese, a serious tariff or Taiwan event repricing that dependency would hit BOMs and availability simultaneously, and no market multiple currently charges for it." }
    ],
    cycle: {
      where: "Early in a cyclical unit upturn (2025: smartphones +2%, PCs +9.1%) driven by the Windows 10 refresh and AI marketing, sitting on top of a structural replacement-cycle headwind: the tension between those two forces is the 2026 tape.",
      drivers: "Consumer discretionary health, component cost cycles (memory above all), OS support deadlines, carrier promo intensity, and whether AI features demonstrably shorten upgrade cycles.",
      leads: [
        "Foxconn/Hon Hai monthly revenue (free, published monthly: the industry's assembly tape)",
        "Korea customs 20-day export prints (free: memory and device components lead the cycle)",
        "Taiwan ODM monthly revenue (Quanta, Compal: free prints that front-run PC quarters)",
        "IDC/Gartner/Canalys quarterly shipment press releases (free top-line prints)",
        "DRAM/NAND spot price direction (free trade-press summaries: the BOM squeeze thermometer)"
      ]
    },
    exposure: [
      { vehicle: "Apple", note: "The ecosystem annuity: installed-base monetization at 75% services margins, with hardware as the customer-acquisition engine" },
      { vehicle: "Samsung Electronics", note: "A memory cycle and a device franchise in one ticker: the conglomerate discount is the entry price" },
      { vehicle: "Xiaomi class (Chinese volume brands)", note: "Emerging-market units, internet-services attach, and EV optionality: momentum trades, not annuities" },
      { vehicle: "PC OEMs (Lenovo, Dell, HP)", note: "The Windows refresh and AI PC beta: cyclical, cash-generative, cheap for a reason" },
      { vehicle: "EMS/ODM (Hon Hai class)", note: "Assembly beta on everyone's units plus AI-server upside: 2 to 3% margins mean execution is everything" }
    ],
    catalysts: [
      { when: "September (annual)", what: "Apple's iPhone launch: pricing, AI features, and the mix signal for the year" },
      { when: "January", what: "Q4/holiday shipment prints (IDC, Gartner, Canalys) plus CES: the year's scoreboard and narrative reset" },
      { when: "Quarterly earnings", what: "Brand guidance on channel inventory and margins; Foxconn's outlook as the demand oracle" },
      { when: "Policy dates", what: "Tariff rulings on China-built electronics and OS end-of-support deadlines: both move units and BOMs directly" }
    ],
    data: [
      { series: "IDC quarterly smartphone tracker (press releases)", source: "idc.com (free top-line)", why: "The unit and share tape: the 2025 Apple-over-Samsung print came from here" },
      { series: "Gartner/Canalys PC shipment prints", source: "gartner.com, canalys.com press releases (free)", why: "PC cycle and AI PC penetration tracking" },
      { series: "Hon Hai monthly revenue", source: "company IR (free, monthly)", why: "The highest-frequency read on global device assembly" },
      { series: "Korea customs export statistics", source: "customs.go.kr (free, 20-day prints)", why: "Leads component and device demand by weeks" },
      { series: "Apple 10-K/10-Q segment data", source: "sec.gov (free)", why: "Primary source for the product-vs-services margin structure" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Devices are deferrable: replacement cycles stretch further and channels destock violently. Ecosystem services revenue holds far better than hardware; EMS and volume brands take the brunt." },
      { regime: "Rates rising", behavior: "Carrier and BNPL financing is the hidden demand subsidy: tighter credit lengthens cycles at the margin. Net-cash mega-caps outperform leveraged channel and component names." },
      { regime: "Component cost shock", behavior: "Memory squeezes (the 2025 pattern) compress volume-brand margins within 2 quarters; brands with pricing power pass it through, everyone else eats it. Watch BOM commentary turn into guidance cuts." },
      { regime: "Trade war / tariff escalation", behavior: "Tariffs on China-built devices hit BOMs and shelf prices directly; India/Vietnam-shifted assembly becomes a relative-winner screen. Expect pull-forward buying ahead of effective dates, then air pockets." }
    ]
  },

  players: [
    { name: "Apple", role: "Ecosystem king", country: "US", real: true, note: "247.8M iPhones in 2025 (19.7% share, first full-year lead); FY2025 gross margin 46.9%, services 75.4%" },
    { name: "Samsung Electronics", role: "Vertically integrated giant", country: "KR", real: true, note: "241.2M phones (19.1%) plus memory, displays, TVs; ~13% FY2025 operating margin leans on chips" },
    { name: "Xiaomi", role: "Volume + ecosystem challenger", country: "CN", real: true, note: "165.3M phones (~13% share) plus IoT sprawl and an EV bet: the anti-Apple playbook at one-third the ASP" },
    { name: "Huawei", role: "Sanctioned survivor", country: "CN", real: true, note: "Rebuilt around domestic silicon and HarmonyOS; dominates China's premium tier despite US export controls" },
    { name: "Foxconn (Hon Hai)", role: "The assembly complex", country: "TW", real: true, note: "Builds for nearly every brand at 2 to 3% net margins; its monthly revenue is the sector's pulse" },
    { name: "Lenovo", role: "PC volume leader", country: "CN", real: true, note: "Top of the 270M+ unit PC market riding the Windows 10 refresh and AI PC push" },
    { name: "Dell & HP", role: "The US PC duopoly", country: "US", real: true, note: "Enterprise fleet refresh machines; cash-return equities levered to the commercial PC cycle" },
    { name: "Sony", role: "Premium niches", country: "JP", real: true, note: "PlayStation, image sensors in most flagship cameras, and audio: the component-plus-content survivor of Japan's CE era" }
  ],

  geography: [
    { country: "US", role: "Design & brand HQ", note: "Apple, Dell, HP, and the profit pool; also the tariff policy that prices the whole chain" },
    { country: "CN", role: "The manufacturing heartland", note: "Still assembles most devices and hosts the component ecosystem; Xiaomi/Huawei/BBK brands rule the home market" },
    { country: "KR", role: "Samsung & memory", note: "Devices, DRAM/NAND, and displays in one national champion; Korea's exports lead the sector's cycle" },
    { country: "TW", role: "EMS/ODM + silicon", note: "Foxconn, Quanta, Compal assemble the world; TSMC fabs the brains: the chain's single greatest concentration risk" },
    { country: "IN", role: "The rising assembler", note: "PLI subsidies pulled iPhone and Android assembly in; the China+1 thesis made concrete" },
    { country: "VN", role: "Diversification winner", note: "Samsung's phone base and a growing share of wearables and PCs" }
  ],

  cycles: [
    { year: 2007, title: "The iPhone detonation", kind: "shift", text: "One device collapses phones, cameras, music players, and GPS into a slab of glass; Nokia and BlackBerry, together worth $150B+, are gone from relevance within 6 years. Lesson: platform shifts in hardware are total: the losers don't shrink, they vanish." },
    { year: 2013, title: "The Android margin collapse", kind: "bust", text: "Android democratizes the smartphone and Shenzhen floods the world; every OEM outside Apple and Samsung falls to breakeven, and HTC (briefly a top-3 vendor) implodes. Lesson: in open-platform hardware, share without an ecosystem is a treadmill to zero margin." },
    { year: 2021, title: "The COVID pull-forward", kind: "boom", text: "Lockdowns turn every home into an office and classroom: PCs post their best year in a decade and phones surge, while chip shortages let vendors ship everything they can build. Lesson: demand shocks in devices are borrowed, not created: every unit pulled forward is a unit missing later." },
    { year: 2023, title: "The hangover", kind: "bust", text: "Smartphone shipments sink to a decade low as the pull-forward unwinds, channels destock, and the replacement cycle hits its 43.4-month record. Lesson: channel inventory turns a demand dip into an earnings crash: sell-in always overshoots sell-through on the way down." },
    { year: 2025, title: "The AI refresh year", kind: "shift", text: "Windows 10 end-of-support drives PCs +9.1%, AI PCs reach roughly a third of shipments, and Apple takes its first full-year smartphone unit lead (247.8M vs Samsung's 241.2M). Lesson: deadlines and premium share shifts, not organic demand, now move a saturated market." }
  ],

  risks: [
    { name: "China/Taiwan concentration shock", severity: 5, likelihood: 3, transmission: "Tariff escalation or a Taiwan event -> assembly and component supply disrupted simultaneously -> BOM inflation, shortages, and a repricing of every hardware multiple at once." },
    { name: "Replacement cycles lengthening past the ASP offset", severity: 4, likelihood: 4, transmission: "Cycles stretch beyond ~4 years while premiumization plateaus -> annual demand shrinks from the same installed base -> volume brands hit first, then the ecosystem names' hardware funnel." },
    { name: "AI supercycle disappointment", severity: 3, likelihood: 3, transmission: "On-device AI fails to shorten upgrade cycles -> 2025-2026 refresh proves to be deadline-driven pull-forward -> unit air pocket meets elevated expectations and inventory." },
    { name: "Component cost squeeze", severity: 3, likelihood: 4, transmission: "AI-datacenter demand keeps crowding out mobile memory supply -> DRAM/NAND prices inflate BOMs -> volume-brand margins compress within 2 quarters; price hikes test elastic demand." },
    { name: "Ecosystem regulation", severity: 3, likelihood: 4, transmission: "DMA-style rulings and app-store suits cut take rates -> the 75%-margin services annuity leaks -> the sector's highest-multiple profit pool de-rates." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Consumer electronics is the business of phones, laptops, and gadgets: about 1.25 billion smartphones and 270 million PCs sold in 2025. A few famous brands design the devices, giant contract factories in Asia build them for a few dollars per unit, and most of the profit goes to whoever also owns the software and services on the device: which is why Apple earns more than almost everyone else combined."] },
    L2: { title: "Intermediate", text: ["The economics are a smile curve: components (chips, memory, screens) and brands capture the margin, while the assembly middle earns 2 to 3%. Growth no longer comes from new users: markets are saturated and people upgrade every 3.5 to 4 years, so vendors push prices up (smartphone ASP ~$370 in 2025) and monetize the installed base with services. In 2025 Apple took the full-year unit lead for the first time (247.8M vs Samsung's 241.2M) and PCs jumped 9.1% on the Windows 10 deadline."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: ecosystem brands on installed-base monetization and product-vs-services mix (Apple: 36.8% product vs 75.4% services gross margin in FY2025), volume brands on units x ASP against BOM cycles, EMS names on utilization and working capital. Watch channel inventory religiously: revenue books at sell-in, so stuffed channels convert future demand into writedowns. The structural tide is the replacement cycle: every added month of holding period must be offset by ASP, attach, or share."] },
    L4: { title: "Expert", text: ["Trade the monthly Foxconn revenue tape, Korea export prints, and quarterly IDC/Gartner scoreboards against positioning. Live debates: whether AI devices shorten cycles or the 2025 refresh was deadline pull-forward (the 31% vs 40% AI PC definitional gap is your tell that the category is still narrative), whether memory-cost inflation breaks volume-brand margins, and how fast India/Vietnam assembly really de-risks China. Structure trades by species: annuity longs, cyclical momentum, component-cost pairs."] },
    L5: { title: "Institutional", text: ["Allocator's frame: consumer electronics is 2 asset classes sharing a sector code: a software-grade ecosystem annuity (own it as a compounder, size it on installed-base monetization and regulatory risk to take rates) and a thin-margin, inventory-cycled hardware complex (rent it tactically on refresh cycles and component costs). The tail risk nobody prices is the Taiwan-China manufacturing stack; the structural short is any brand without an ecosystem as cycles stretch toward 4 years. Every thesis reduces to one question: does this company monetize the box, or the base?"] }
  },

  quiz: [
    { q: "In full-year 2025 the smartphone unit scoreboard read:", choices: ["Samsung led as always", "Apple 247.8M (19.7%) over Samsung 241.2M (19.1%): Apple's first full-year unit lead", "Xiaomi led on emerging markets", "Huawei led globally"], answer: 1, explain: "IDC's print crowned Apple after a 24.2%-share Q4: premiumization and the developed-market upgrade wave beat Samsung's breadth." },
    { q: "The assembly layer (Foxconn class) typically earns:", choices: ["30% margins like the brands", "2 to 3% net margins: continental-scale work for the thinnest reward in the chain", "Nothing: it's subsidized", "More than Apple"], answer: 1, explain: "The smile curve's floor: brands and components keep the margin, and scale is the only moat in the middle." },
    { q: "Apple's FY2025 margin structure showed:", choices: ["Products out-earn services", "36.8% product vs 75.4% services gross margin: the annuity out-earns the box per dollar", "Both around 20%", "Services losing money"], answer: 1, explain: "The ecosystem playbook in one line: hardware acquires the customer, services tax the installed base at software margins." },
    { q: "The global smartphone replacement cycle is now roughly:", choices: ["12 months", "3.5 to 4 years, up from 2 to 3 historically: the sector's structural headwind", "10 years", "Unchanged since 2010"], answer: 1, explain: "Durable devices, long software support, and $1,000+ flagships stretched holding periods to a 43.4-month peak in 2023." },
    { q: "PCs grew 9.1% in 2025 primarily because:", choices: ["Gaming demand", "The Windows 10 end-of-support deadline forced a refresh, with AI PCs as the marketing layer", "Prices collapsed", "Tablets disappeared"], answer: 1, explain: "Deadline-driven fleet refresh did the volume work; whether the AI part shortens future cycles is the open debate." },
    { q: "AI PCs were what share of 2025 PC shipments?", choices: ["Under 5%", "Roughly 31% (Gartner) to 40% (Canalys): the definitional gap itself shows the category is unsettled", "100%", "Exactly 75%"], answer: 1, explain: "When trackers can't agree what qualifies, treat penetration stats as narrative until killer on-device apps arrive." },
    { q: "The sector's silent quarterly killer is:", choices: ["Currency", "Channel inventory: revenue books at sell-in, so a stuffed channel turns soft demand into writedowns", "Weather", "Patent fees"], answer: 1, explain: "Sell-in vs sell-through gaps explain most hardware blowups: 2023's decade-low print followed exactly this pattern." },
    { q: "The biggest underpriced structural risk is:", choices: ["Battery chemistry", "Taiwan-China concentration: assembly, components, and leading-edge silicon stack in one geography", "Too many colors", "Retail rents"], answer: 1, explain: "India and Vietnam diversify final assembly, but components, tooling, and TSMC's fabs keep the chain's core in one strait's shadow." }
  ],

  sources: [
    { name: "IDC Worldwide Quarterly Mobile Phone Tracker (2025 full-year and Q4 prints)", url: "https://www.idc.com/promo/smartphone-market-share/", feeds: "smartphone units, share" },
    { name: "Gartner PC shipment press release (FY2025, Jan 2026)", url: "https://www.gartner.com/en/newsroom/press-releases/2026-1-20-gartner-says-worldwide-pc-shipments-increased-9-point-3-percent-in-fourth-quarter-of-2025-and-9-point-1-percent-for-the-full-year", feeds: "PC units, AI PC share" },
    { name: "Counterpoint Research (smartphone ASP and replacement-cycle forecasts)", url: "https://www.counterpointresearch.com/insight/smartphone-asp-rising-on-soc-memory-price-increases", feeds: "ASP, replacement cycle, BOM costs" },
    { name: "Apple 10-K FY2025 (SEC)", url: "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm", feeds: "product vs services margins" }
  ]
};
