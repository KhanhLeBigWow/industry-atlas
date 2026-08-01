/* Industry Atlas - TELECOM (full module, research-backed)
 * Anchors: mobile operator revenue $1.19T (2025) growing to $1.36T by 2030, ~2.7%/yr (GSMA Mobile Economy 2025);
 * 5.8B unique mobile subscribers (~70% of humanity), 8.8B connections, 5G passed 2B connections end-2024 (GSMA);
 * global telecom capex fell 8% in 2024, flat in 2025, ~(2%) in 2026, capex/revenue ~16% (2024) heading to ~14% by 2027,
 * wireless capital intensity down ~7pts from the 5G peak toward ~11% by 2029 (Dell'Oro Group, 2025-2026);
 * US blended postpaid phone ARPU $53.22 (2H 2022) to $56.37 (early 2026), ~6% over 3.5 years (Recon Analytics);
 * tower economics: ~3% annual lease escalators, tower ROI ~3% at 1 tenant, ~13% at 2, ~24% at 3 (S&P Global KPI guide, 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["telecom"] = {
  meta: {
    id: "telecom", name: "Telecommunications", sector: "tmt", status: "full",
    tagline: "The world's most essential subscription and its worst-paid landlord: $1.5T of revenue carrying everyone else's boom.",
    marketSize: { value: 1.5, unit: "$T", asOf: 2025, note: "global telecom services revenue; mobile operators ~$1.19T of it (GSMA), fixed broadband and enterprise the rest; broader definitions run past $2T" },
    cagr: { value: 3, range: [2, 4], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 2, capitalIntensity: 5, regulation: 4, disruption: 3
  },
  newsQuery: '(Verizon OR "AT&T" OR T-Mobile OR Ericsson OR "5G network" OR "spectrum auction" OR "fiber broadband" OR "telecom capex")',

  overview: {
    definition: "Telecommunications builds and operates the networks that move the world's voice and data: mobile, fiber, cable, and increasingly satellite. It is a capital-devouring utility with subscription economics: 5.8B people pay for it monthly, and nearly every other industry's digital revenue rides on top of it.",
    howItWorks: [
      "The business is a stack of tolls on connectivity. Governments auction spectrum (a scarce public asset) to carriers; carriers buy radios and switching gear from a shrunken equipment oligopoly (Ericsson, Nokia, Huawei, Samsung); they hang that gear on towers and fiber they increasingly rent rather than own; and they sell access by the month to consumers and enterprises. The mobile side alone generated ~$1.19T of operator revenue in 2025 across 8.8B connections (GSMA), making telecom one of the largest recurring-revenue machines in the economy.",
      "The defining tension is that traffic compounds while revenue crawls. Data usage grows 20%+ a year in most markets, forcing perpetual network investment, yet ARPU barely moves: blended US postpaid phone ARPU rose from $53.22 in late 2022 to just $56.37 by early 2026, about 6% over 3.5 years, below inflation (Recon Analytics). Carriers sell more of their product every year for roughly the same money, which is why the industry chronically earns near or below its cost of capital while the platforms riding its pipes mint software margins.",
      "Capex is the industry's true business cycle. The 5G buildout pushed worldwide telecom capex to a peak around 2022-2023; it then fell 8% in 2024, went flat in 2025, and Dell'Oro forecasts another ~(2%) in 2026 with capex/revenue easing from ~16% toward ~14% by 2027 and wireless capital intensity down ~7pts from the 5G peak by 2029. The wind-down is the sector's investment story: every dollar not spent on radios becomes free cash flow, dividends, and debt paydown, until the next G restarts the treadmill.",
      "The value chain has quietly inverted. The best economics no longer sit with the carriers but with their landlords: tower companies lease vertical real estate on 5-to-10-year contracts with ~3% annual escalators, and the colocation math is brutal in their favor: a tower earns roughly 3% returns with 1 tenant, ~13% with 2, and ~24% with 3, at near-zero marginal cost (S&P Global). Carriers sold these assets to fund spectrum and now rent them back forever: a sale-leaseback of the industry's moat."
    ],
    history: [
      { era: "1876-1983", title: "The monopoly century", text: "Bell's patent becomes AT&T, the archetypal regulated monopoly: universal service in exchange for guaranteed returns, and Bell Labs as the rent it paid civilization." },
      { era: "1984-1999", title: "Breakup and buildout", text: "The 1984 AT&T divestiture births competition; mobile goes mass-market on GSM; deregulation and the internet trigger a fiber land grab funded by exuberant debt." },
      { era: "2000-2006", title: "The telecom bust", text: "The bubble bursts: WorldCom's fraud, hundreds of billions of market value erased, dark fiber everywhere. The overbuild eventually powered the internet, but its financiers never saw the return." },
      { era: "2007-2019", title: "The smartphone transfer", text: "The iPhone detonates data demand; carriers spend fortunes on 3G/4G while Apple, Google, and the OTT apps capture the value on top. 'Dumb pipe' goes from insult to business model." },
      { era: "2020-present", title: "5G hangover and the infrastructure trade", text: "A $100B+ spectrum splurge (the US C-band auction alone raised ~$81B) and peak 5G capex give way to discipline: capex fell 8% in 2024, carriers pivot to FCF, and towers, fiber, and data centers become the sector's prized assets." }
    ],
    trends: [
      { title: "Capex wind-down", direction: "down", text: "The 5G cycle has peaked: global capex flat in 2025, ~(2%) in 2026, capital intensity heading from ~16% to ~14% of revenue (Dell'Oro). The FCF inflection is the sector's bull case." },
      { title: "ARPU stagnation", direction: "shift", text: "US blended postpaid phone ARPU up only ~6% in 3.5 years; reported growth increasingly comes from bundled perks and fixed wireless, not core connectivity pricing." },
      { title: "Fiber and convergence", direction: "up", text: "Carriers and infrastructure funds race to pass homes with fiber; converged mobile+broadband bundles cut churn, and cable's MVNO attack blurs the old market boundaries." },
      { title: "Infrastructure separation", direction: "up", text: "Towers, fiber, and data centers keep migrating to REITs and infrastructure capital (American Tower, Cellnex, KKR-class funds) that price them like annuities, not telcos." },
      { title: "Satellite direct-to-device", direction: "shift", text: "Starlink-class constellations now message ordinary phones from orbit: today a coverage partner sold through carriers, potentially tomorrow's first new competitor in decades." }
    ],
    outlook: "A utility decade: low-single-digit revenue growth (GSMA sees mobile at ~2.7%/yr to $1.36T by 2030), falling capex, consolidation where regulators allow it, and capital returns as the main event. The equity story splits in two: carriers as bond-like FCF yields with modest growth, and infrastructure (towers, fiber) as escalator-driven compounders. The wildcards are price wars (a Jio can reset a market permanently), the 6G capex restart late in the decade, and whether satellite turns from partner into predator."
  },

  structure: {
    suppliers: [
      { name: "Network equipment (Ericsson, Nokia, Huawei, Samsung)", note: "A geopolitically split oligopoly: Huawei banned across much of the West, duopoly economics for the survivors" },
      { name: "Semiconductors (Qualcomm, Broadcom, chipmakers)", note: "Modems, basebands, and optics: the silicon under every G" },
      { name: "Devices (Apple, Samsung)", note: "The subsidy sinkhole: handset promotions are the carriers' biggest customer-acquisition cost" },
      { name: "Software & IT (Amdocs, OSS/BSS, cloud vendors)", note: "Billing and network software; the cloud now runs parts of the network itself" }
    ],
    producers: [
      { name: "Mobile carriers (China Mobile, Verizon, T-Mobile, Vodafone class)", note: "The subscription machines: ~$1.19T of 2025 revenue across 8.8B connections" },
      { name: "Fixed/broadband operators (Comcast, Charter, national telcos)", note: "Cable vs fiber vs fixed wireless: the broadband land war" },
      { name: "Satellite operators (Starlink, AST SpaceMobile class)", note: "Orbit as the new coverage layer, and maybe the new competitor" }
    ],
    distributors: [
      { name: "Retail stores and digital channels", note: "Shrinking storefronts; the app is the new store" },
      { name: "MVNOs (cable, Google Fi, prepaid brands)", note: "Renting wholesale capacity and repricing it: cable's MVNOs are the US market's real disruptors" }
    ],
    customers: [
      { name: "Consumers", note: "5.8B unique subscribers, ~70% of humanity: the world's widest customer base" },
      { name: "Enterprises & government", note: "Connectivity, private networks, IoT fleets: stickier and better-priced than consumer" },
      { name: "Hyperscalers & wholesale", note: "Cloud giants buy dark fiber and capacity at industrial scale, sometimes bypassing carriers entirely" }
    ],
    regulators: [
      { name: "Spectrum agencies (FCC, Ofcom, national regulators)", note: "They mint the industry's scarcest input at auction and referee consolidation" },
      { name: "Competition authorities", note: "4-to-3 mergers are the sector's most litigated question: pricing power vs investment capacity" },
      { name: "ITU & standards bodies (3GPP)", note: "Each G is a treaty: global standards decide the equipment cycle" }
    ],
    capital: [
      { name: "Bond markets", note: "Carriers are among the largest corporate borrowers on Earth; spectrum and networks are financed with decades of debt" },
      { name: "Infrastructure funds & REITs", note: "Towers and fiber trade at annuity multiples; private capital funds the fiber buildout" },
      { name: "Governments & subsidies", note: "Universal-service and rural broadband programs (BEAD class) co-fund the uneconomic edges" }
    ]
  },

  valueChain: {
    intro: "From spectrum auction to monthly bill. The physics flows carriers-outward, but the profits pool at the landlords: towers and fiber capture annuity economics while the operators in the middle fight over a flat ARPU pie.",
    stages: [
      { id: "equipment", name: "Network equipment", what: "Radios, antennas, core network, optics", players: "Ericsson, Nokia, Huawei, Samsung", valueCapture: 3,
        economics: { grossMargin: [35, 45], capitalIntensity: 3, concentration: 4 },
        linksTo: ["semiconductors", "manufacturing"],
        deeper: "A once-crowded field consolidated to 3-4 players, then split by geopolitics: Huawei owns much of the non-Western world, Ericsson and Nokia the rest. Demand is brutally cyclical with the carrier capex cycle: equipment revenue fell 11% in 2024 as the 5G ramp ended (Dell'Oro)." },
      { id: "spectrum", name: "Spectrum & licenses", what: "Auctioned rights to the airwaves", players: "Governments (FCC class) selling; carriers buying", valueCapture: 1,
        economics: { grossMargin: [0, 0], capitalIntensity: 5, concentration: 5 },
        linksTo: ["government"],
        deeper: "The industry's original sin: auctions transfer tens of billions per cycle from carriers to treasuries before a single subscriber pays. The US C-band auction alone raised ~$81B in 2021. Spectrum is the moat, but the state charges full price for it." },
      { id: "infrastructure", name: "Towers, fiber & data centers", what: "The physical layer, leased back to its former owners", players: "American Tower, Cellnex, Crown Castle, fiber cos", valueCapture: 5,
        economics: { grossMargin: [60, 75], capitalIntensity: 5, concentration: 3 },
        linksTo: ["real-estate", "construction", "data-infrastructure"],
        deeper: "The sector's crown jewels: 5-to-10-year leases, ~3% annual escalators, and colocation math where the 2nd tenant lifts tower ROI from ~3% to ~13% and the 3rd to ~24% at near-zero marginal cost. Carriers sold this moat to fund spectrum; the buyers became the industry's best businesses." },
      { id: "operators", name: "Network operators", what: "Running networks, selling subscriptions", players: "China Mobile, Verizon, AT&T, T-Mobile, Vodafone", valueCapture: 3,
        economics: { grossMargin: [50, 60], capitalIntensity: 5, concentration: 4 },
        linksTo: ["media", "cloud", "consumer-electronics"],
        deeper: "High gross margins, crushing capital intensity: ~14-16% of revenue goes back into the network every year. Scale and market structure decide everything: 3-player markets price rationally, 4+ player markets burn. The product is essential, undifferentiated, and repriced by the angriest competitor." },
      { id: "wholesale", name: "Wholesale & MVNOs", what: "Renting capacity and rebranding it", players: "Cable MVNOs (Comcast, Charter), Google Fi, prepaid brands", valueCapture: 2,
        economics: { grossMargin: [15, 30], capitalIntensity: 1, concentration: 3 },
        linksTo: ["retail", "media"],
        deeper: "Capital-light arbitrage on someone else's network. Usually a niche, but cable's US MVNOs turned it into a strategic weapon: bundling mobile at cost to defend broadband, adding millions of lines a year and capping everyone's pricing power." },
      { id: "services", name: "Enterprise, IoT & beyond connectivity", what: "Private networks, IoT, security, edge, satellite D2D", players: "Carrier enterprise arms, hyperscaler partners, Starlink", valueCapture: 3,
        economics: { grossMargin: [30, 50], capitalIntensity: 2, concentration: 2 },
        linksTo: ["cloud", "cybersecurity", "ai", "space"],
        deeper: "Where carriers hunt for growth beyond the flat consumer pie: private 5G for factories, IoT fleets, managed security. The record is mixed (telcos have repeatedly lost adjacent markets to cloud players), but enterprise is the one segment where connectivity still commands pricing." }
    ]
  },

  financials: {
    businessModel: [
      "A carrier P&L is a subscription annuity fighting a capex treadmill. Revenue = subscribers x ARPU, and both move glacially: churn ~1%/month in good postpaid franchises, ARPU nearly flat (US blended postpaid phone ARPU rose ~6% in 3.5 years). EBITDA margins run 35-45% on service revenue, but 14-16% of revenue exits annually as capex and more leaves as spectrum payments, so FCF conversion, not margin, separates winners. The model rewards scale, 3-player market structure, and converged bundles that suppress churn.",
      "Infrastructure P&Ls are the inverse: towers and fiber convert long contracts with ~3% escalators into 60%+ gross margins and REIT-style AFFO growth, with colocation as the operating-leverage lever (American Tower grew adjusted EBITDA 7.5% in Q4 2025 on exactly this math). The sector-wide swing factor is the capex cycle itself: the 5G wind-down (capex (8%) in 2024, flat 2025, ~(2%) 2026 per Dell'Oro) is mechanically inflecting carrier FCF higher until 6G restarts the treadmill."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 90, capitalIntensity: 85, pricingPower: 35, cyclicality: 25, operatingLeverage: 70 },
    lines: [
      { label: "Service revenue & ARPU", note: "The core tape: connectivity pricing vs perk-stuffed reported ARPU" },
      { label: "Net adds & churn", note: "Postpaid phone nets are the US market's monthly scoreboard" },
      { label: "EBITDA margin", note: "35-45% on service revenue for scaled carriers; watch promo intensity eat it" },
      { label: "Capex/sales & FCF", note: "The cycle variable: ~16% of revenue in 2024 heading toward ~14% by 2027" },
      { label: "Leverage & payout", note: "2.5-3.5x net debt/EBITDA typical for carriers, 5x+ for towers; dividends are the covenant with shareholders" }
    ],
    unitEconomics: {
      unit: "per US postpaid phone subscriber (illustrative)",
      items: [
        { label: "ARPU", value: "~$56/month", note: "big-3 blended postpaid phone, early 2026; up only ~6% since late 2022" },
        { label: "Monthly churn", value: "~1%", note: "an ~8-year expected customer life when the bundle holds" },
        { label: "Acquisition cost", value: "$400 to $1,000", note: "device promos amortized over 24-36 month contracts: the hidden price war" },
        { label: "EBITDA margin", value: "35% to 45%", note: "on service revenue, before the network takes its ~15% capex tithe" }
      ]
    }
  },

  kpiRefs: ["re-ffo", "semi-capex-intensity"],
  kpiLocal: [
    {
      id: "telecom-arpu", name: "ARPU (Average Revenue Per User)", industries: ["telecom"],
      definition: "Service revenue per subscriber per month: the industry's price level.",
      formula: "ARPU = service revenue / average subscribers / months in period",
      interpretation: "The stagnation gauge: US blended postpaid phone ARPU went $53.22 (2H 2022) to $56.37 (early 2026), ~6% in 3.5 years. Parse it: perks and bundling can inflate reported ARPU while core connectivity pricing stays flat.",
      healthy: "ARPU rising with or above inflation on core connectivity", warning: "Flat/declining ARPU masked by perk accounting; promo escalation"
    },
    {
      id: "telecom-churn", name: "Postpaid Churn", industries: ["telecom"],
      definition: "Share of subscribers leaving per month: the annuity's decay rate.",
      formula: "Monthly churn = disconnects / average subscriber base",
      interpretation: "At ~1%/month a subscriber is an 8-year annuity; at 2% the CAC math breaks. Convergence (mobile + broadband bundles) is the churn suppressant every carrier is chasing.",
      healthy: "Under ~1% monthly postpaid phone churn", warning: "Above ~1.5%, or churn spiking after price actions"
    }
  ],

  health: {
    intro: "Carrier health is cash discipline in a flat-revenue world: subscriber economics, capex restraint, and a balance sheet that survives both the auction and the price war.",
    pillars: [
      { name: "FCF & capex discipline", weight: 25, metrics: "FCF conversion, capex/sales vs peers, spectrum outlays", healthy: "Capex intensity falling post-5G, FCF covering dividend 1.5x+", warning: "Perpetual 'elevated investment' with no FCF inflection" },
      { name: "Subscriber economics", weight: 25, metrics: "Net adds, churn, ARPU trend, promo intensity", healthy: "Positive postpaid nets at ~1% churn without promo escalation", warning: "Buying growth: rising CAC, perk-inflated ARPU, churn drift" },
      { name: "Balance sheet", weight: 20, metrics: "Net debt/EBITDA, maturity wall, rate exposure", healthy: "Under ~3x with laddered maturities", warning: "4x+ into a rate cycle, dividends funded by borrowing" },
      { name: "Market structure", weight: 15, metrics: "Player count, share stability, MVNO pressure", healthy: "Rational 3-player market with stable share", warning: "4+ players or a capitalized disruptor resetting price" },
      { name: "Asset quality", weight: 15, metrics: "Spectrum depth, fiber mix, network rankings", healthy: "Deep mid-band spectrum, growing fiber/converged base", warning: "Spectrum-starved, copper-heavy, renting the future" }
    ],
    scoringNote: "In telecom the fatal pattern is borrowing to pay both the auction and the dividend while a price war runs: each is survivable alone, together they compound into the balance-sheet death spiral."
  },

  valuation: {
    intro: "Two markets in one sector: carriers price like leveraged utilities (EBITDA multiples, FCF yields), infrastructure prices like contracted annuities (AFFO multiples, escalator math). Applying one lens to the other is the classic mistake.",
    methods: [
      { name: "EV / EBITDA (carriers)", use: "The standard carrier comp; normalize for leases and spectrum", avoid: "Comparing across markets with different structures: a 3-player market's multiple is earned, not given", strengths: "Simple, comparable, leverage-aware", weaknesses: "Ignores capex intensity differences: EBITDA is not cash here", range: { low: 5, high: 8, asOf: 2025, note: "scaled developed-market carriers; growth stories (T-Mobile class) command the top" } },
      { name: "FCF yield & dividend coverage", use: "The real carrier lens: what is left after the network is fed", avoid: "Peak-capex years that understate normalized FCF", strengths: "Cuts through EBITDA illusions; matches how these equities are owned", weaknesses: "Spectrum auctions arrive as lumpy FCF ambushes", range: { low: 5, high: 10, asOf: 2025, note: "% FCF yields; the 5G wind-down is pushing yields up mechanically" } },
      { name: "Infrastructure multiples (towers/fiber)", use: "Towers, fiber cos, data-center-adjacent assets on EV/EBITDA or AFFO", avoid: "Valuing them like carriers: contracted escalators deserve annuity math", strengths: "Matches the 3% escalator + colocation economics", weaknesses: "Rate-sensitive: these de-rated hard from ZIRP-era 25x+ peaks", range: { low: 16, high: 24, asOf: 2025, note: "EV/EBITDA for scaled tower platforms; tenancy ratio drives the premium" } },
      { name: "Sum-of-the-parts / per-asset", use: "Break-up math: $/home passed for fiber, $/tower, MHz-pop for spectrum", avoid: "Assuming trapped assets get separated: managements hoard them", strengths: "Reveals hidden infrastructure value inside carrier conglomerates", weaknesses: "The discount persists until an activist or a deal forces the math", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; fiber has traded at $1,000+ per home passed in private deals" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a carrier quickly: EBITDA times a structure-adjusted multiple, minus the debt pile that telecom always carries.",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($B)", min: 2, max: 90, step: 1, value: 40, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 12, step: 0.5, value: 6.5, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: 0, max: 200, step: 5, value: 120, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats telecom as 2 trades wearing 1 sector tag: carriers as defensive FCF-yield vehicles levered to the capex wind-down and market-structure repair, and infrastructure (towers, fiber) as rate-sensitive contracted compounders. Nobody owns telecom for revenue growth: GSMA's own forecast is ~2.7%/yr. You own it for the cash inflection, the consolidation option, and the escalators.",
    debates: [
      { topic: "Does the 5G capex wind-down finally fix carrier returns?", bull: "Capex intensity is falling from ~16% toward ~14% of revenue with wireless intensity down ~7pts from peak (Dell'Oro): that delta drops straight to FCF, funds dividends and buybacks, and for once there is no new G demanding it back until late-decade.", bear: "The treadmill always restarts: fiber overbuild, densification, and 6G are already queued, ARPU is flat at ~6% growth per 3.5 years, and history says carriers spend every dollar the network asks for. The 'harvest era' has been promised after every G and delivered after none." },
      { topic: "Towers: compounders or rate-hostage bond proxies?", bull: "3% escalators, 5-to-10-year contracts, and colocation math (3% ROI at 1 tenant, 24% at 3) make towers the best business model in the sector: American Tower compounding EBITDA at 7%+ even post-5G proves the annuity holds without a capex boom.", bear: "Tenancy is the whole model and carriers are consolidating: every merger deletes a tenant, escalators lag real inflation in a high-rate world, and the ZIRP-era 25x multiples assumed a growth phase that ended with the 5G ramp." },
      { topic: "Satellite direct-to-device: coverage partner or the first new competitor in decades?", bull: "Physics and economics favor partnership: D2D is capacity-starved, priced as a coverage add-on, and sold through carriers who own the spectrum and the billing relationship. It extends the product, it does not replace it.", bear: "Starlink already messages ordinary phones and iterates at aerospace speed with its own launch cost curve. Every 'complement' with its own customer relationship eventually forward-integrates: cable said the same about MVNOs before losing millions of mobile lines to them." }
    ],
    cycle: {
      where: "Early harvest phase of the 5G cycle: capex peaked (down 8% in 2024, flat 2025, ~(2%) 2026), FCF inflecting, consolidation pending in Europe, price competition simmering via cable MVNOs and value brands. Infrastructure de-rated on rates and now trades on tenancy math rather than momentum.",
      drivers: "Capex cycle timing, market structure (3 vs 4 players), rate levels (leverage and tower multiples), data traffic growth vs monetization, and regulatory posture on consolidation.",
      leads: [
        "Dell'Oro and carrier guidance on capex/revenue trajectory (free press releases)",
        "Quarterly postpaid phone net adds and churn across the big 3 (free filings)",
        "Spectrum auction calendars and proceeds (FCC and national regulators, free)",
        "Tower company tenancy ratios and organic growth prints (free filings)",
        "GSMA Mobile Economy annual data on connections and 5G adoption (free)"
      ]
    },
    exposure: [
      { vehicle: "Scaled carriers (T-Mobile, Verizon, AT&T, Deutsche Telekom class)", note: "The FCF-yield core: own the share-taker, clip the others' dividends" },
      { vehicle: "Tower REITs (American Tower, Cellnex class)", note: "The escalator annuity: rate-sensitive but the sector's best unit economics" },
      { vehicle: "Fiber & infrastructure (listed and private vehicles)", note: "Home-passed economics with private-market bid support" },
      { vehicle: "Equipment makers (Ericsson, Nokia)", note: "The capex-cycle beta: leveraged to the next buildout, bleeding between them" },
      { vehicle: "Satellite challengers (Starlink exposure via SpaceX, AST class)", note: "The optionality/disruption sleeve: small, binary, watch it" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Net adds, churn, ARPU, and above all capex guidance: the FCF inflection is the thesis" },
      { when: "Spectrum auctions (episodic)", what: "Tens of billions of FCF ambush per cycle; auction calendars are balance-sheet events" },
      { when: "MWC Barcelona (late Feb/early Mar)", what: "The industry's order book and narrative reset: 6G timing, D2D deals, AI-network pitches" },
      { when: "M&A and regulatory rulings", what: "4-to-3 approvals in Europe, cable-mobile convergence deals: market structure is destiny" }
    ],
    data: [
      { series: "GSMA Mobile Economy reports", source: "gsma.com (free)", why: "The demand tape: connections, 5G adoption, operator revenue forecasts" },
      { series: "Dell'Oro capex & equipment press releases", source: "delloro.com (free summaries)", why: "The capex cycle: the sector's real business cycle, tracked quarterly" },
      { series: "FCC auction results & broadband data", source: "fcc.gov (free)", why: "Spectrum outlays and US broadband competition, primary source" },
      { series: "ITU statistics", source: "itu.int DataHub (free)", why: "Global penetration and usage: the emerging-market growth backdrop" },
      { series: "Carrier quarterly subscriber reports", source: "company IR sites (free)", why: "Net adds, churn, ARPU: the primary scoreboard" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Among the most defensive sectors in the market: connectivity is the last subscription cancelled. Watch prepaid trade-down and enterprise deferrals, not disconnects." },
      { regime: "Rates rising", behavior: "Painful twice: heavy debt reprices and tower/infra multiples compress. Favor low-leverage carriers with dividend coverage; the bond-proxy trade unwinds." },
      { regime: "Inflation", behavior: "Escalators protect towers (~3% contractual); carriers lag: repricing consumers takes quarters and invites churn. Real ARPU usually falls." },
      { regime: "Tech transition (next G)", behavior: "Equity headwind for carriers as the capex treadmill restarts; tailwind for equipment makers and densification plays. Trade the guidance, not the marketing." }
    ]
  },

  players: [
    { name: "China Mobile", role: "The scale king", country: "CN", real: true, note: "Roughly 1B mobile subscribers: the largest carrier on Earth, state-anchored" },
    { name: "Verizon", role: "US premium network", country: "US", real: true, note: "The dividend fortress: ~$130B-class debt load, FCF-yield equity" },
    { name: "AT&T", role: "US converged bet", country: "US", real: true, note: "Post-media detox: fiber + mobile convergence as the churn moat" },
    { name: "T-Mobile US", role: "The share-taker", country: "US", real: true, note: "Sprint merger + mid-band 5G head start turned the challenger into the price-setter" },
    { name: "Deutsche Telekom", role: "Europe's champion", country: "DE", real: true, note: "Majority owner of T-Mobile US: the rare European telco that won abroad" },
    { name: "Reliance Jio", role: "The disruptor archetype", country: "IN", real: true, note: "Free voice and near-free data collapsed India to 3 carriers: the case study in price-level resets" },
    { name: "American Tower", role: "The landlord", country: "US", real: true, note: "Tower REIT compounding on ~3% escalators; adjusted EBITDA +7.5% in Q4 2025" },
    { name: "Ericsson & Nokia", role: "Western equipment duopoly", country: "SE", real: true, note: "The capex-cycle proxies: revenue fell with the 5G wind-down, waiting on 6G" }
  ],

  geography: [
    { country: "US", role: "Richest market", note: "3-player postpaid oligopoly plus cable MVNOs; the world's highest ARPUs" },
    { country: "CN", role: "Largest market", note: "3 state carriers, Huawei's home base, and the fastest 5G buildout ever run" },
    { country: "IN", role: "The volume frontier", note: "A billion connections at rock-bottom ARPU; Jio rewrote the global playbook here" },
    { country: "DE", role: "Europe's anchor", note: "Deutsche Telekom's home; Europe's fragmented 100+ carrier map is the consolidation debate" },
    { country: "SE", role: "Equipment heartland", note: "Ericsson (and neighbor Nokia in FI): the West's answer to Huawei" },
    { country: "KE", role: "Mobile-money pioneer", note: "M-Pesa proved telcos can be banks: the leapfrog model for the Global South" }
  ],

  cycles: [
    { year: 1984, title: "The AT&T breakup", kind: "shift", text: "The archetypal monopoly is carved into Baby Bells; competition and chaos follow. Lesson: in telecom, market structure is set by courts and regulators, not markets." },
    { year: 2001, title: "The telecom bust", kind: "bust", text: "The fiber land grab collapses: WorldCom's fraud, hundreds of billions erased, dark fiber everywhere. The internet later ran on that glass, but its financiers were long gone. Lesson: infrastructure overbuilt ahead of demand destroys its builders even when the demand eventually arrives." },
    { year: 2007, title: "The iPhone transfer", kind: "shift", text: "Smartphones detonate data demand; carriers fund the network boom while Apple and the app economy capture the value on top. Lesson: owning the pipe does not mean owning the profit pool that flows through it." },
    { year: 2016, title: "Jio resets India", kind: "shift", text: "Reliance launches with free voice and near-free data; a 10+ carrier market consolidates to 3 within years. Lesson: a capitalized disruptor can permanently reset a market's price level, and incumbency is no defense." },
    { year: 2024, title: "The 5G hangover", kind: "shift", text: "After a $100B+ spectrum splurge and peak buildout, global capex falls 8% and the industry pivots to FCF harvest (Dell'Oro). Lesson: the G-cycle is telecom's real business cycle: buy the wind-down, respect the restart." }
  ],

  risks: [
    { name: "Dumb-pipe value drift", severity: 4, likelihood: 5, transmission: "Traffic compounds 20%+/yr -> ARPU stays flat (~6% in 3.5 years) -> capex persists while monetization accrues to platforms -> returns pinned below cost of capital." },
    { name: "Price war / disruptor reset", severity: 4, likelihood: 3, transmission: "A capitalized entrant or MVNO attack (Jio, cable mobile) -> promo escalation -> ARPU and CAC deteriorate together -> weakest balance sheet capitulates first." },
    { name: "Rate shock on leverage", severity: 4, likelihood: 3, transmission: "Carrier debt piles and 5x-levered towers reprice -> interest eats FCF -> dividends cut -> the bond-proxy shareholder base exits at once." },
    { name: "Spectrum and 6G capex restart", severity: 3, likelihood: 4, transmission: "New auction + new G -> tens of billions of FCF ambush -> the harvest-era thesis dies -> multiples compress back to treadmill pricing." },
    { name: "Satellite disintermediation", severity: 3, likelihood: 2, transmission: "D2D constellations scale capacity -> coverage moat erodes in rural/maritime first -> partner economics flip to competition -> terminal-value questions for subscale carriers." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Telecom companies build the networks your phone and internet run on, then charge monthly for access: about 5.8B people (70% of the world) pay for it. It is a steady, essential business, but the networks cost enormous sums to build and upgrade, so the companies carry huge debts and grow slowly: the industry earns about $1.5T a year but adds only ~3% to that annually."] },
    L2: { title: "Intermediate", text: ["The core tension: data usage compounds every year, but prices do not (US postpaid phone ARPU rose ~6% in 3.5 years), so carriers keep investing 14-16% of revenue into networks that earn thin returns. The best economics moved to the landlords: tower companies with 3% annual rent escalators, where adding a 2nd tenant lifts returns from ~3% to ~13%. The 5G buildout has peaked, capex fell 8% in 2024, and the sector is entering its cash-harvest phase."] },
    L3: { title: "Advanced", text: ["Analyze by layer: carriers on FCF yield and market structure (3-player markets price rationally, 4+ burn), towers on tenancy ratios and escalator spreads vs rates, equipment makers as pure capex-cycle beta. Parse reported ARPU for perk stuffing, watch churn as the annuity decay rate, and treat spectrum auctions as recurring FCF ambushes. The current setup: Dell'Oro sees capex intensity falling to ~14% of revenue by 2027, which is the whole carrier bull case in one number."] },
    L4: { title: "Expert", text: ["The live debates: whether the capex wind-down finally delivers the harvest era every prior G failed to (history says the network takes the money back), whether tower multiples survive carrier consolidation deleting tenants, and whether satellite D2D stays a partner or forward-integrates into the first new competitor in decades. Trade the capex guidance and consolidation rulings, not the revenue line: GSMA's own forecast is ~2.7%/yr to $1.36T by 2030, and nobody is paying for that growth."] },
    L5: { title: "Institutional", text: ["Allocator's frame: telecom is 2 asset classes sharing a sector tag. Carriers are quasi-utility credit-and-yield instruments: size them as defensive income with a capex-cycle overlay, and underwrite market structure before anything else. Infrastructure (towers, fiber) is contracted real assets: escalator annuities with colocation optionality, priced off rates and tenancy, increasingly bid by private capital at premiums to public multiples. The sector's recurring alpha source is the gap between those 2 framings inside conglomerate carriers: the SOTP discount that persists until a deal, a spin, or an activist forces the math."] }
  },

  quiz: [
    { q: "Global mobile operator revenue in 2025 was roughly:", choices: ["$120B", "$1.19T, forecast to reach $1.36T by 2030 (~2.7%/yr)", "$12T", "$500B and shrinking"], answer: 1, explain: "GSMA's Mobile Economy 2025: a massive but slow-growing pie, which is why the sector trades on cash returns, not growth." },
    { q: "US blended postpaid phone ARPU from late 2022 to early 2026 rose about:", choices: ["6%: below inflation, the stagnation problem in one number", "30%", "It doubled", "It fell by half"], answer: 0, explain: "From $53.22 to $56.37 (Recon Analytics): traffic compounds, prices crawl: the industry's defining tension." },
    { q: "After the 5G buildout peaked, worldwide telecom capex in 2024:", choices: ["Rose 20%", "Fell 8%, then went flat in 2025 with capex intensity easing toward ~14% of revenue", "Went to zero", "Was nationalized"], answer: 1, explain: "Dell'Oro's numbers: the wind-down is mechanical FCF relief for carriers, until the next G restarts the treadmill." },
    { q: "A tower with 3 tenants versus 1 tenant earns roughly:", choices: ["The same return", "~24% ROI vs ~3%: colocation at near-zero marginal cost is the model", "Less, due to crowding", "Returns are set by regulators"], answer: 1, explain: "Long leases with ~3% escalators plus colocation math make towers the sector's best economics: the landlords beat the operators." },
    { q: "The 2001 telecom bust teaches that:", choices: ["Demand forecasts were wrong: the internet fizzled", "Overbuilt infrastructure destroys its builders even when demand eventually arrives", "Fraud was the only problem", "Fiber was a bad technology"], answer: 1, explain: "The dark fiber eventually carried the internet, but WorldCom-era financiers were wiped out years before the demand showed up." },
    { q: "Jio's 2016 entry into India shows that:", choices: ["Incumbency always wins", "A capitalized disruptor can permanently reset a market's price level: India went from 10+ carriers to 3", "Free pricing is illegal", "ARPU always recovers"], answer: 1, explain: "Free voice and near-free data forced consolidation and a structurally lower price level: the case study every carrier CFO fears." },
    { q: "The 'dumb pipe' problem means:", choices: ["Networks are unreliable", "Carriers fund the network while platforms on top capture the value: traffic compounds, ARPU does not", "Pipes are cheap to build", "Regulators set all prices"], answer: 1, explain: "Since the iPhone era, the profit pool moved up the stack: carriers sell more product every year for roughly the same money." },
    { q: "Carriers and towers should be valued:", choices: ["Identically: same sector, same multiple", "Differently: carriers on FCF yield (~5-10%) and EBITDA multiples (~5-8x), towers as contracted annuities (~16-24x)", "Only on revenue growth", "On subscriber counts alone"], answer: 1, explain: "Two asset classes share the sector tag: applying carrier math to escalator annuities (or vice versa) is the classic mistake." }
  ],

  sources: [
    { name: "GSMA Mobile Economy 2025", url: "https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-economy/the-mobile-economy-2025/", feeds: "operator revenue, connections, 5G adoption" },
    { name: "Dell'Oro Group telecom capex research (2025-2026)", url: "https://www.delloro.com/news/worldwide-telecom-capex-to-decline-in-2026/", feeds: "capex cycle, capital intensity" },
    { name: "Recon Analytics / Light Reading ARPU analysis (2026)", url: "https://www.reconanalytics.com/the-affordability-paradox-telecom-claims-less-of-the-wallet-even-as-arpu-climbs/", feeds: "US ARPU trend" },
    { name: "S&P Global tower industry KPI guide", url: "https://www.spglobal.com/market-intelligence/en/news-insights/resources/kpi-guides/tower", feeds: "tower economics, tenancy" }
  ]
};
