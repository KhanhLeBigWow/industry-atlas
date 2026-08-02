/* Industry Atlas - CARBON MARKETS (full module, research-backed)
 * Anchors: EUA traded value EUR 777B in 2025, up 9% y/y, prices ~EUR 74-80/t
 * mid-2026 (ESMA EU Carbon Markets Report, July 2026); global carbon pricing
 * revenue $104B in 2024 across 80 instruments covering ~24% of world emissions
 * (World Bank State and Trends, June 2025); China ETS expanded to steel,
 * cement, aluminum in March 2025: ~3,700 entities, ~8 Gt CO2e, ~15% of global
 * emissions (ICAP/MEE); VCM stuck near $1.4B in 2025, retirements ~168 Mt,
 * quality premium ~360% for high-rated credits (MSCI); CBAM definitive regime
 * live January 1, 2026, certificate sales from February 1, 2027 (European
 * Commission); Article 6 PACM operationalized at COP29 Baku, November 2024. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["carbon-markets"] = {
  meta: {
    id: "carbon-markets", name: "Carbon Markets", sector: "energy", status: "full",
    tagline: "Governments invented a commodity out of thin air; it now trades EUR 777B a year and taxes the border.",
    marketSize: { value: 950, unit: "$B", asOf: 2025, mapValue: 104, note: "annual traded value of compliance allowances (EUAs alone EUR 777B in 2025, ESMA); turnover, not revenue. mapValue = ~$104B of carbon pricing revenue collected by governments in 2024 (World Bank)" },
    cagr: { value: 9, range: [5, 14], horizon: "2025-2030" },
    maturity: "growth", cyclicality: 3, capitalIntensity: 1, regulation: 5, disruption: 3
  },
  newsQuery: '("carbon price" OR "EU ETS" OR "carbon credits" OR "emissions trading" OR CBAM OR "carbon border")',

  overview: {
    definition: "Carbon markets put a price on a tonne of CO2 and let it trade. Compliance schemes (cap-and-trade) force polluters to buy government-issued allowances; the voluntary market sells project-based credits to companies that choose to offset. One is a EUR 777B regulated commodity market; the other is a $1.4B integrity experiment.",
    howItWorks: [
      "Compliance markets are scarcity by statute. A government caps total emissions for covered sectors, issues allowances (1 allowance = 1 tonne of CO2), auctions or grants them, and shrinks the cap every year. Firms that cut emissions cheaply sell spare allowances to firms that cannot: the market finds the cheapest tonne. Miss your surrender deadline and fines apply (EUR 100+/t in the EU, plus you still owe the allowance). The allowance is a pure regulatory artifact: its entire value is the credibility of the cap.",
      "The EU ETS is the market's sun: EUR 777B of EUAs changed hands in 2025, up 9% on 2024 (ESMA), roughly 87% of global compliance traded value. Prices ranged about EUR 60-95 over 2025-26, printing EUR 74-80 by mid-2026. The Market Stability Reserve (MSR) absorbs surplus allowances automatically: the mechanism that took EUAs from under EUR 5 in 2017 to EUR 100 in 2023. Utilities hedge power sales years forward, industrials manage compliance books, and banks and funds provide liquidity: EUAs now behave like a macro commodity with a policy floor.",
      "The map is going global. 80 carbon pricing instruments covered ~24% of world emissions and raised $104B for public budgets in 2024 (World Bank). China's national ETS, already the largest by tonnage, expanded in March 2025 from power into steel, cement, and aluminum: ~1,500 added companies, ~3,700 covered entities, ~8 Gt CO2e, about 15% of global emissions under 1 scheme, though its first compliance cycles gift allowances equal to verified emissions, so price discovery is embryonic. The UK, South Korea, California-Quebec, and RGGI round out the compliance archipelago, each with its own price.",
      "The voluntary carbon market (VCM) is the mirror world: project developers (forestry, cookstoves, methane capture, direct air capture) generate credits certified by private registries (Verra, Gold Standard), which corporates buy to claim offsets. After a 2023 integrity crisis gutted trust, the market flatlined near $1.4B in 2025 (MSCI): retirements ~168 Mt (down 4.5%), issuance ~270 Mt, the lowest since 2020. What changed is quality pricing: high-rated credits fetched ~$14.80/t while low-rated traded near $3.50, a premium above 360%. Two bridges may fuse the worlds: the UN's Article 6 crediting mechanism (PACM), operationalized at COP29 in Baku, and the EU's CBAM, which from January 1, 2026 makes importers pay the EU carbon price at the border."
    ],
    history: [
      { era: "1997-2004", title: "Kyoto invents the tonne", text: "The Kyoto Protocol creates tradable emission units and the Clean Development Mechanism: carbon becomes a commodity class before it has a real market." },
      { era: "2005-2012", title: "EU ETS learns by crashing", text: "Europe launches cap-and-trade; over-allocation crashes Phase 1 EUAs to near zero in 2007, and the post-2008 recession buries Phase 2 under surplus. The cap was real; the scarcity was not." },
      { era: "2013-2020", title: "The fix and the pledge wave", text: "Backloading and the Market Stability Reserve (2019) drain the surplus; EUAs re-rate from EUR 5 toward EUR 30. Corporate net-zero pledges revive the voluntary market, which peaks near $2B in 2021." },
      { era: "2021-2023", title: "EUR 100 and the integrity crash", text: "Fit for 55 tightens the EU cap; EUAs touch EUR 100 in 2023. The same year, investigations into forestry credit over-crediting shatter VCM confidence: buyers flee, prices halve, and 'offset' becomes a legal risk." },
      { era: "2024-present", title: "Globalization of the price", text: "COP29 in Baku operationalizes Article 6 crediting; China extends its ETS to steel, cement, and aluminum (March 2025); CBAM's definitive regime starts January 1, 2026. The carbon price stops being a European eccentricity." }
    ],
    trends: [
      { title: "China scales the tonnage", direction: "up", text: "The 2025 expansion put ~8 Gt CO2e (~15% of global emissions) under 1 scheme and lifted coverage of China's own emissions from 40% to 60%; benchmarks tighten from 2027, converting a reporting exercise into a price." },
      { title: "CBAM exports the EU price", direction: "shift", text: "From 2026 importers of steel, cement, aluminum, fertilizer, hydrogen, and power pay the EU carbon price on embedded emissions (a 50t de minimis exempts ~90% of importers by count); trading partners must price carbon or pay Brussels." },
      { title: "VCM bifurcates on quality", direction: "shift", text: "The average credit fetched $3.50/t in 2025 while MSCI BBB-and-above rated credits rose 20%+ to $6.80 and top-rated removals cleared $14.80+: integrity ratings now do the pricing work registries failed to do." },
      { title: "EU supply tightens into the 2030s", direction: "up", text: "The cap declines 4.3-4.4%/yr, free allocation phases out as CBAM phases in, and the MSR keeps eating surplus: most models see structural deficit late this decade." },
      { title: "Removals eclipse avoidance", direction: "up", text: "Durable carbon removal (DAC, biochar, BECCS) commands 10x+ avoidance prices, and corporate buyers (Microsoft above all) sign multi-decade offtakes: the VCM's credible future looks like a procurement market, not an offset bazaar." }
    ],
    outlook: "Compliance carbon compounds with policy: the EU's shrinking cap plus CBAM plus China's tightening benchmarks point to more tonnage priced at higher prices, interrupted by political flinches (the 2026 debates over ETS2 for buildings and transport preview the backlash risk). The VCM stays small until Article 6 and CBAM-style recognition give private credits sovereign demand; quality-rated removals are the growth story inside the stagnation. The asymmetry: caps are legislated to tighten, and no major scheme has ever loosened one for long."
  },

  structure: {
    suppliers: [
      { name: "Project developers (South Pole, Climate Impact Partners, 1PointFive)", note: "Originate the credits: forestry, methane, cookstoves, DAC" },
      { name: "Verification bodies (DNV, Verra-accredited VVBs)", note: "The auditors of the invisible: MRV is the product's factory floor" },
      { name: "Registries & standards (Verra, Gold Standard, Puro.earth)", note: "Private mints: issuance fees per tonne, credibility as capital" },
      { name: "Ratings & data (Sylvera, BeZero, MSCI Carbon Markets)", note: "Post-2023, no institutional buyer moves without a rating" }
    ],
    producers: [
      { name: "EU & member states", note: "Auction EUAs via EEX: the deepest, most financialized carbon market" },
      { name: "China MEE", note: "~8 Gt covered post-expansion; allocation still free and benchmarked" },
      { name: "UK, California-Quebec (WCI), RGGI, South Korea", note: "The compliance archipelago: linked prices nowhere, lessons everywhere" },
      { name: "UNFCCC (PACM / Article 6)", note: "The UN's crediting mechanism: operational since Baku, first credits 2025-26" }
    ],
    distributors: [
      { name: "Exchanges & clearing (ICE, EEX, CME)", note: "EUA futures on ICE Endex; auctions on EEX; clearing is the moat" },
      { name: "Brokers & OTC desks", note: "Voluntary credits still trade bilaterally: opacity is the norm" }
    ],
    customers: [
      { name: "Compliance entities (utilities, steel, cement, refiners, airlines)", note: "Must surrender or pay EUR 100+/t penalties: demand by statute" },
      { name: "Corporates with net-zero pledges", note: "The VCM's discretionary buyers: Microsoft class removals offtakes at the top" },
      { name: "Financial players (banks, hedge funds, ETFs)", note: "Liquidity providers and cap-tightening bulls: ~EUR 777B of turnover needs them" }
    ],
    regulators: [
      { name: "European Commission (DG CLIMA) & ESMA", note: "Cap-setter and market cop: EUAs are MiFID financial instruments" },
      { name: "China's Ministry of Ecology & Environment", note: "Runs the world's biggest cap; enforcement is the open question" },
      { name: "ICVCM & VCMI", note: "The VCM's self-rescue: Core Carbon Principles label supply, claims codes police demand" },
      { name: "UNFCCC Article 6 Supervisory Body", note: "Writes the rules for UN-backed credits and corresponding adjustments" }
    ],
    capital: [
      { name: "Commodity trading houses & bank desks", note: "Shell, Trafigura-class books straddle compliance and voluntary" },
      { name: "Carbon funds & ETFs (KRBN class)", note: "Passive length on allowance prices: policy beta in a wrapper" },
      { name: "Removals offtake capital", note: "Frontier-style advance purchase commitments fund DAC before it scales" }
    ]
  },

  valueChain: {
    intro: "From a tonne that was never emitted to a cleared futures contract. Value pools at the choke points: exchanges and registries clip every tonne, developers carry the project risk, and governments take the largest cut of all: $104B in 2024.",
    stages: [
      { id: "origination", name: "Project origination", what: "Forestry, methane, cookstoves, DAC: creating the reduction", players: "South Pole, 1PointFive, thousands of developers", valueCapture: 3,
        economics: { grossMargin: [20, 50], capitalIntensity: 3, concentration: 1 },
        linksTo: ["agriculture", "forestry-paper"],
        deeper: "Ten-year projects sold into a spot market that reprices on headlines: the 2023 integrity crisis stranded whole vintages. Survivors sell forward via offtakes to Microsoft-class buyers; the long tail sells at $3.50/t or not at all." },
      { id: "mrv", name: "MRV & ratings", what: "Measuring, reporting, verifying, and now rating each tonne", players: "DNV, Sylvera, BeZero, MSCI", valueCapture: 3,
        economics: { grossMargin: [40, 60], capitalIntensity: 2, concentration: 3 },
        linksTo: ["data-infrastructure"],
        deeper: "The trust layer became the pricing layer: a 360% quality premium (MSCI, 2025) means the rating moves more value than the registry stamp. Satellite MRV is turning a consulting business into a data business." },
      { id: "registries", name: "Standards & registries", what: "Certifying and issuing credits; tracking allowances", players: "Verra, Gold Standard, Puro.earth, Union Registry", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 1, concentration: 4 },
        linksTo: ["market-infrastructure"],
        deeper: "Private mints earning cents per tonne on issuance with quasi-regulatory power and no regulator: Verra's 2023 methodology scandal proved credibility is the entire balance sheet. PACM is the state-backed competitor arriving now." },
      { id: "trading", name: "Exchanges & clearing", what: "Futures, auctions, clearing for allowances and credits", players: "ICE, EEX, CME", valueCapture: 5,
        economics: { grossMargin: [55, 75], capitalIntensity: 2, concentration: 5 },
        linksTo: ["capital-markets", "market-infrastructure"],
        deeper: "The tollbooth on EUR 777B of turnover: ICE hosts the EUA futures curve, EEX runs the auctions, and clearing mandates make the position unassailable. Volume grows with volatility AND with every new scheme that lists." },
      { id: "compliance", name: "Compliance & surrender", what: "Covered emitters buying, hedging, surrendering", players: "Utilities, steel, cement, aluminum, airlines", valueCapture: 1,
        economics: { grossMargin: [0, 0], capitalIntensity: 5, concentration: 2 },
        linksTo: ["utilities", "steel", "cement", "aluminum", "aviation"],
        deeper: "For emitters the market is a cost line that compounds: EU free allocation phases out as CBAM phases in, so the hedging desk becomes core competence. Power producers pass it through; process industries eat it or abate." },
      { id: "financialization", name: "Funds & structured carbon", what: "ETFs, carbon funds, offtake finance, CBAM certificates", players: "KRBN-class ETFs, bank desks, carbon PE", valueCapture: 4,
        economics: { grossMargin: [30, 60], capitalIntensity: 2, concentration: 3 },
        linksTo: ["asset-management", "hedge-funds", "banking"],
        deeper: "Carbon as an asset class: long-cap-tightening is a policy-beta trade with decent Sharpe until a government blinks. The next product wave is CBAM certificate management (sales start February 1, 2027) and removals offtake funds." }
    ]
  },

  financials: {
    businessModel: [
      "Follow the tonne to find the P&L. Governments run the biggest book: $104B of 2024 auction and tax revenue against near-zero cost of goods (the product is scarcity itself). Exchanges and clearers monetize turnover: fees on EUR 777B of EUA flow, margin on open interest, data subscriptions on top. Registries and raters charge per-tonne issuance and per-project fees: software margins on trust. Developers are the only capital-heavy players: they fund projects for years, then sell into a price they cannot control: forward offtakes are their survival technology.",
      "The compliance side is countercyclical to its customers: emitters' pain is the market's revenue. Volatility, not price level, drives exchange economics; price level drives everything for developers and for government take. The VCM's $1.4B is rounding error next to compliance turnover, but its unit economics are the sector's most instructive: a top-rated removal tonne at $14.80+ against a generic avoidance tonne at $3.50 is the same product name with a 4x price gap: quality certification captures the spread."
    ],
    fingerprint: { grossMargin: 55, recurringRevenue: 45, capitalIntensity: 25, pricingPower: 50, cyclicality: 60, operatingLeverage: 70 },
    lines: [
      { label: "Government auction revenue", note: "$104B globally in 2024; the EU alone funds its Innovation Fund from EUAs" },
      { label: "Exchange & clearing fees", note: "Per-lot fees on EUA futures plus auction fees: turnover is the tape" },
      { label: "Registry issuance fees", note: "Cents per tonne across hundreds of Mt: the private-mint annuity" },
      { label: "Credit sales & offtakes", note: "Developers' revenue: spot for the tail, multi-year offtakes for the credible" },
      { label: "Ratings, data & advisory", note: "Post-crisis compliance spend: every desk now buys carbon intelligence" }
    ],
    unitEconomics: {
      unit: "per tonne of CO2 (2025-26 vintages)",
      items: [
        { label: "EU allowance (EUA)", value: "EUR 74-80", note: "mid-2026 prints; EUR 60-95 range over 2025-26" },
        { label: "Generic VCM credit", value: "~$3.50", note: "MSCI global index average, 2025: the integrity discount" },
        { label: "High-rated credit / removal", value: "$6.80 to $14.80+", note: "BBB-and-above index vs A-AAA rated: ~360% quality premium" },
        { label: "Registry + verification take", value: "~$0.15 to $0.40", note: "issuance, VVB audit, and rating costs per tonne" }
      ]
    }
  },

  kpiRefs: ["cm-adv"],
  kpiLocal: [
    {
      id: "carbon-eua-price", name: "EUA Price & Curve", industries: ["carbon-markets"],
      definition: "The EU allowance spot/front-December price and the shape of the futures curve.",
      formula: "Front-Dec EUA (EUR/t); curve contango reflects cost of carry and hedging demand",
      interpretation: "The global reference carbon price: EUR 74-80 in mid-2026 vs EUR 100 peak (2023). Policy events (cap revisions, MSR intake) move it more than fundamentals.",
      healthy: "Grinding higher with the declining cap; orderly auctions", warning: "Policy-driven crashes; auction cover ratios sliding below 1.5x" },
    {
      id: "carbon-vcm-retirements", name: "VCM Retirements & Quality Spread", industries: ["carbon-markets"],
      definition: "Tonnes of voluntary credits retired per year, and the price spread between high- and low-rated credits.",
      formula: "Annual retirements (Mt) from registry data; spread = rated-A-and-above price minus CCC-B price",
      interpretation: "Retirements are real demand (credits die when used): ~168 Mt in 2025, down 4.5%. The quality spread (~$7+/t, a ~360% premium) is the market repricing trust.",
      healthy: "Retirements growing; spread stable as average quality rises", warning: "Issuance far outrunning retirements; spread blowing out on new scandals" }
  ],

  health: {
    intro: "This market's health is measured in credibility: of caps, of credits, and of the political coalitions behind both. Liquidity and enforcement are the vital signs.",
    pillars: [
      { name: "Policy durability", weight: 30, metrics: "Cap trajectory legislated, cross-party support, CBAM implementation", healthy: "Caps tightening on statute (EU: 4.3%+/yr)", warning: "Delay votes, exemption creep, ETS2-style backlash winning" },
      { name: "Market liquidity", weight: 20, metrics: "Traded value, open interest, auction cover ratios", healthy: "EUR 777B turnover and 2x+ auction cover", warning: "Thinning open interest; speculators exiting en masse" },
      { name: "Credit integrity", weight: 20, metrics: "Ratings distribution, ICVCM-labeled share, scandal cadence", healthy: "Rising rated-credit share; premiums for quality", warning: "New over-crediting exposes; buyer strikes like 2023" },
      { name: "Supply-demand balance", weight: 20, metrics: "MSR surplus (TNAC), free allocation phase-out, banking behavior", healthy: "Surplus declining toward structural deficit", warning: "Politically injected supply; hoarding distorting the curve" },
      { name: "MRV & enforcement", weight: 10, metrics: "Verification failure rates, China compliance rates, penalty collection", healthy: "98%+ compliance (the EU norm)", warning: "Paper compliance in new schemes; unverifiable baselines" }
    ],
    scoringNote: "A carbon market can fail two ways: prices crash because nobody believes the cap, or the market dies because nobody believes the credits. 2007 and 2023 were the respective autopsies."
  },

  valuation: {
    intro: "Nobody values 'the carbon market'; you value the tollbooths on it, the developers feeding it, and the allowance itself as a policy-backed commodity.",
    methods: [
      { name: "EV / EBITDA (exchanges & market infrastructure)", use: "ICE, Deutsche Boerse (EEX): carbon as a volume driver inside a clearing franchise", avoid: "Valuing carbon volumes standalone: they are one product line", strengths: "Clean comparables; recurring clearing economics", weaknesses: "Carbon upside is diluted inside diversified exchanges", range: { low: 12, high: 20, asOf: 2025, note: "exchange-group multiples; carbon is the growth kicker" } },
      { name: "Risk-adjusted NPV of offtake books (developers)", use: "Project developers and removals companies with contracted revenue", avoid: "Spot-price extrapolation on uncontracted volumes", strengths: "Separates bankable offtakes from merchant hope", weaknesses: "Delivery, permanence, and reversal risks resist quantification", range: { low: 4, high: 10, asOf: 2025, note: "x EBITDA where it exists; most trade on contracted-tonne NPV" } },
      { name: "Allowance scenario curves (the commodity itself)", use: "Positioning in EUAs/UKAs via futures or ETFs", avoid: "Pure supply-demand models that ignore politics: policy IS the fundamental", strengths: "Cap math gives unusual long-run visibility", weaknesses: "One directive amendment can reprice the curve 30%", range: { low: 60, high: 120, asOf: 2026, note: "EUR/t analyst range into 2030; EUR 74-80 mid-2026 prints" } },
      { name: "Per-tonne-of-capacity (removals & DAC)", use: "Early-stage removals: value per tonne of annual capture capacity", avoid: "Treating announced capacity as built: attrition is brutal", strengths: "Comparable across technologies", weaknesses: "Cost curves are speculative below 1 Mt scale", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; offtake cover is the real diligence item" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a carbon-market operator quickly: normalized EBITDA times an infrastructure-or-developer multiple, minus net debt.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($M)", min: 10, max: 2000, step: 10, value: 200, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 24, step: 0.5, value: 12, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($M)", min: -500, max: 2000, step: 25, value: 0, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats carbon as 3 distinct trades wearing one name: EUAs as a policy-backed commodity with legislated scarcity (core long, sized for political drawdowns), exchanges and data providers as the fee-clipping infrastructure (quality compounders), and the VCM as venture-style optionality on Article 6 and removals. Never confuse the EUR 777B market with the $1.4B one.",
    debates: [
      { topic: "EUAs: structural bull or policy mirage?", bull: "The cap declines by law, free allocation phases out as CBAM phases in, the MSR eats surplus, and no major scheme has durably loosened: forward scarcity you can read in a directive. EUR 100+ is a when, not an if.", bear: "The 2026 ETS2 backlash shows the ceiling: when carbon costs hit voters (heating, driving), politicians add supply or delay. A deep recession plus populist coalitions can cap the price for years: policy giveth, policy taketh away." },
      { topic: "Is the VCM investable or permanently broken?", bull: "The crisis was creative destruction: ratings now price quality (360% premium), ICVCM labels filter supply, Article 6 and CORSIA bring sovereign-grade demand, and removals offtakes (Microsoft class) fund a real industry. $1.4B is the bottom, not the norm.", bear: "Three years after the scandal the market is still $1.4B with falling retirements: buyers learned that cheap offsets are litigation risk and expensive removals are procurement, not markets. The VCM's demand was always reputational, and reputation does not scale." },
      { topic: "CBAM: globalizer or trade-war grenade?", bull: "The border price makes free-riding expensive: exporters to the EU adopt domestic pricing to keep the revenue (why pay Brussels?), and the 50t threshold spares 90% of importers the paperwork. It is the mechanism that turns 24% coverage into 50%.", bear: "It is also a tariff by another name: retaliation risk from major trade partners, WTO challenges, and a compliance apparatus (verification of foreign emissions) that invites both fraud and diplomatic fire. Scope extension keeps raising the stakes." }
    ],
    cycle: {
      where: "Early globalization phase: the EU market is mature and financialized (EUR 777B, deep futures curve), China is huge but pre-price (free allocation through 2026), CBAM's definitive regime just began (January 2026), and the VCM is bottoming with quality bifurcation. Policy calendar risk dominates macro risk.",
      drivers: "Legislated cap declines, CBAM phase-in vs free-allocation phase-out, energy prices (gas-coal switching sets EUA marginal demand), industrial output, and the political tolerance for visible carbon costs.",
      leads: [
        "EEX auction results and cover ratios (free, weekly)",
        "EU MSR total-number-of-allowances-in-circulation (TNAC) publication (free, annual May)",
        "China MEE compliance and allocation notices (free; benchmark tightening = the signal)",
        "Registry issuance and retirement data from Verra/Gold Standard (free, continuous)",
        "World Bank Carbon Pricing Dashboard updates (free, annual)"
      ]
    },
    exposure: [
      { vehicle: "EUA futures / KRBN-class carbon ETFs", note: "Direct policy-scarcity beta; size for 30% political drawdowns" },
      { vehicle: "Exchange groups (ICE, Deutsche Boerse/EEX)", note: "The tollbooth trade: carbon volumes inside clearing franchises" },
      { vehicle: "Removals developers & offtake books (1PointFive class)", note: "Venture-grade risk on the VCM's credible end" },
      { vehicle: "Ratings & MRV data (MSCI, Sylvera class)", note: "Picks-and-shovels on the integrity repricing" },
      { vehicle: "CBAM-exposed EU industrials (short/long pairs)", note: "Steel and cement repriced by the border mechanism: relative-value, not directional" }
    ],
    catalysts: [
      { when: "February 1, 2027", what: "CBAM certificate sales begin; first surrender covers 2026 imports: the border price gets a cash register" },
      { when: "Annual (May)", what: "EU TNAC/MSR publication resets the supply math; World Bank State and Trends prints the global scoreboard" },
      { when: "Year-end (China)", what: "Compliance deadlines for steel/cement/aluminum cohorts; benchmark tightening notices from 2027 turn coverage into price" },
      { when: "Each COP (November)", what: "Article 6 rulemaking and first PACM issuance cadence: the VCM's sovereign-demand story lives or stalls here" }
    ],
    data: [
      { series: "EUA auction results & volumes", source: "EEX (free)", why: "Primary supply tape and demand cover ratios" },
      { series: "Carbon Pricing Dashboard", source: "World Bank (free)", why: "Every instrument, price, and revenue line on Earth" },
      { series: "ETS fact sheets & allowance data", source: "ICAP (free)", why: "Scheme-by-scheme design detail, China included" },
      { series: "Registry issuance/retirements", source: "Verra & Gold Standard registries (free)", why: "The VCM's real-demand signal" },
      { series: "Union Registry & TNAC reports", source: "European Commission (free)", why: "The MSR math that drives multi-year EUA supply" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Industrial demand for allowances falls and EUAs sell off, but the MSR absorbs surplus with a lag: buy the policy floor, not the first dip. VCM discretionary demand simply evaporates." },
      { regime: "Energy crisis", behavior: "Gas-to-coal switching lifts EUA demand per MWh: carbon rallies with gas until politicians debate intervention. Watch for supply-injection headlines: they cap the trade." },
      { regime: "Rates rising", behavior: "Carry costs bite compliance hedging and speculative length; contango flattens. Developers' project finance stalls: offtake-backed names outlast merchants." },
      { regime: "Political backlash", behavior: "The regime that matters most: exemption creep, delayed tightening, ETS2-style revolts. Cut EUA length on coalition math, not on emissions data: this market's fundamental is legislative." }
    ]
  },

  players: [
    { name: "ICE (Intercontinental Exchange)", role: "Dominant carbon exchange", country: "US", real: true, note: "Hosts EUA, UKA, and RGGI futures: the global carbon price forms here" },
    { name: "EEX (Deutsche Boerse)", role: "EU auction platform", country: "DE", real: true, note: "Runs the primary EUA auctions: the market's mint gate" },
    { name: "Verra", role: "Largest VCM registry", country: "US", real: true, note: "Issued most credits ever; its 2023 methodology crisis repriced the whole VCM" },
    { name: "Gold Standard", role: "Quality-tier registry", country: "CH", real: true, note: "The premium stamp; WWF-founded, strongest in cookstoves and community projects" },
    { name: "Shell", role: "Largest corporate carbon trader", country: "GB", real: true, note: "Compliance and voluntary books across every scheme: the flow monster" },
    { name: "Microsoft", role: "Anchor removals buyer", country: "US", real: true, note: "The VCM's largest durable-removals offtaker: its procurement sets the quality bar" },
    { name: "1PointFive (Occidental)", role: "DAC developer", country: "US", real: true, note: "Direct air capture at industrial scale: selling $100+/t tonnes before the plant finishes" },
    { name: "Sylvera", role: "Carbon ratings", country: "GB", real: true, note: "One of the raters whose grades now drive the 360% quality premium" }
  ],

  geography: [
    { country: "DE", role: "EU auction & trading hub", note: "EEX Leipzig mints the primary supply; the EU cap is the world's price anchor" },
    { country: "NL", role: "EUA futures venue", note: "ICE Endex Amsterdam hosts the benchmark contract post-Brexit" },
    { country: "CN", role: "Largest ETS by tonnage", note: "~8 Gt covered after the 2025 expansion: pre-price today, decisive tomorrow" },
    { country: "US", role: "Sub-national schemes + VCM home", note: "California-Quebec and RGGI; Verra, ICE, and the biggest removals buyers" },
    { country: "GB", role: "UK ETS + trading talent", note: "Its own cap post-Brexit, plus the desks and raters of the City" },
    { country: "SG", role: "Asia's carbon hub ambition", note: "Trading houses, Climate Impact X, and Article 6 deal-making for the region" }
  ],

  cycles: [
    { year: 2007, title: "Phase 1 goes to zero", kind: "bust", text: "Over-allocated EU allowances crash to near nothing as the surplus becomes undeniable. Lesson: a cap that binds nothing prices at nothing: scarcity is the entire product." },
    { year: 2013, title: "The post-crisis glut", kind: "bust", text: "Recession-shrunk emissions leave EUAs under EUR 5 for years; the market is pronounced dead. Lesson: carbon demand is industrial output in disguise: caps must flex or drown." },
    { year: 2021, title: "The MSR re-rating", kind: "boom", text: "The Market Stability Reserve plus Fit for 55 send EUAs from EUR 30 toward EUR 100 by 2023. Lesson: credible automatic supply control, not diplomacy, is what made carbon a real asset class." },
    { year: 2023, title: "The VCM integrity crash", kind: "bust", text: "Investigations allege most rainforest avoidance credits were over-credited; buyers flee, prices halve, retirements stall. Lesson: in trust-manufactured commodities, one methodology scandal is systemic risk." },
    { year: 2026, title: "The border price era", kind: "shift", text: "CBAM's definitive regime starts, China's expanded ETS covers 60% of its emissions, and PACM credits arrive. Lesson: carbon pricing stopped being optional for exporters: the market's growth is now geopolitical." }
  ],

  risks: [
    { name: "Political reversal / exemption creep", severity: 5, likelihood: 3, transmission: "Cost-of-living backlash -> delayed caps and injected supply -> EUA repricing -> every carbon-linked valuation marks down together." },
    { name: "New integrity scandal", severity: 4, likelihood: 3, transmission: "Over-crediting expose -> buyer strike and legal risk -> VCM demand freezes -> developer defaults and registry credibility contagion." },
    { name: "CBAM trade retaliation", severity: 3, likelihood: 3, transmission: "Partners treat the border price as a tariff -> WTO challenges and counter-duties -> scope freezes -> the globalization thesis stalls." },
    { name: "Enforcement failure in new schemes", severity: 4, likelihood: 3, transmission: "Weak MRV in expanded China ETS -> paper compliance -> global coverage statistics inflate while real abatement lags -> credibility discount on all schemes." },
    { name: "Liquidity vacuum", severity: 3, likelihood: 2, transmission: "Speculative exit plus hedger retrenchment -> thin books amplify policy headlines -> volatility spikes force out remaining financial players." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Governments cap how much CO2 companies may emit and issue permits (allowances) for each tonne: companies that pollute less sell spares to those that pollute more, so cutting carbon becomes profitable. Europe runs the biggest version: allowances there cost about EUR 74-80 per tonne in mid-2026. Separately, a small voluntary market sells offset credits from projects like forest protection: it had a trust crisis and is rebuilding around quality ratings."] },
    L2: { title: "Intermediate", text: ["Two markets, one name. Compliance: the EU ETS traded EUR 777B of allowances in 2025, China's scheme now covers ~8 Gt (steel, cement, and aluminum joined in 2025), and 80 instruments worldwide raised $104B for governments in 2024. Voluntary: just $1.4B, still scarred by 2023's over-crediting scandal, with a 360% price premium for independently rated quality. The EU's CBAM (live January 2026) charges importers the EU carbon price at the border: pricing is going global whether trading partners like it or not."] },
    L3: { title: "Advanced", text: ["Analyze by role: exchanges and clearers earn fees on turnover (volatility is revenue); registries and raters earn per-tonne trust premiums; developers carry project risk into a headline-driven price; governments take the largest cut. EUA supply math is legible: cap minus 4.3%+/yr, MSR absorbing surplus, free allocation phasing out against CBAM: most models show structural deficit late this decade. The catch: the fundamental is legislative, so a directive amendment can move the curve more than any demand shock."] },
    L4: { title: "Expert", text: ["Trade the policy calendar: May TNAC publications, EEX auction cover ratios, China benchmark notices, CBAM milestones (certificate sales February 2027), and COP rulemaking on Article 6. Live debates: whether ETS2-style backlash caps political willingness to let prices rise, whether the VCM's bottom is investable via removals offtakes, and whether CBAM triggers adoption or retaliation. Structure exposure as policy-beta core (EUAs), fee-clipper compounders (ICE/EEX), and venture-sized VCM optionality: never let the third category masquerade as the first."] },
    L5: { title: "Institutional", text: ["Allocator's frame: compliance carbon is a synthetic commodity whose scarcity is legislated, giving it the rare property of forward supply you can read in law: but its tail risk is a voting booth, not a mine flood. Own the infrastructure (exchanges, data, MRV) for compounding, hold allowance length as an energy-transition hedge with explicit political stop-losses, and treat removals procurement as venture allocation with offtake cover as the diligence spine. The unifying question for every position: does the coalition behind this cap survive the next election cycle?"] }
  },

  quiz: [
    { q: "The EU ETS traded roughly how much in EUAs in 2025?", choices: ["EUR 7B", "EUR 77B", "EUR 777B: about 87% of global compliance traded value", "EUR 7.7T"], answer: 2, explain: "ESMA's 2026 report put EUA turnover at EUR 777B, up 9% y/y: the EU market is the sun the rest orbits." },
    { q: "A compliance allowance is valuable because:", choices: ["It stores carbon", "The government caps supply and fines non-surrender: scarcity by statute", "It pays a dividend", "Banks guarantee it"], answer: 1, explain: "The allowance is a pure regulatory artifact: its worth is exactly as durable as the cap and the penalty behind it." },
    { q: "China's 2025 ETS expansion added which sectors?", choices: ["Airlines and shipping", "Steel, cement, and aluminum: pushing coverage to ~8 Gt, ~15% of global emissions", "Agriculture", "Buildings and transport"], answer: 1, explain: "The March 2025 expansion lifted coverage of China's own emissions from 40% to 60%, though allocation stays free at first: tonnage now, price later." },
    { q: "The voluntary market's 2023 crisis was triggered by:", choices: ["A price spike", "Investigations alleging systematic over-crediting of forestry credits: trust collapsed", "An exchange hack", "New taxes"], answer: 1, explain: "Once flagship avoidance credits were shown to overstate impact, buyers fled: the VCM flatlined near $1.4B with a 360% premium emerging for rated quality." },
    { q: "CBAM, definitive from January 2026, does what?", choices: ["Subsidizes EU exporters", "Charges importers the EU carbon price on embedded emissions in steel, cement, aluminum, and more", "Bans coal imports", "Caps EU airline emissions"], answer: 1, explain: "The border mechanism ends free-riding on EU climate costs: a 50t threshold exempts ~90% of importers by count, and certificate sales begin February 1, 2027." },
    { q: "The Market Stability Reserve (MSR) matters because it:", choices: ["Sets a fixed price", "Automatically absorbs surplus allowances: the mechanism that took EUAs from under EUR 5 to EUR 100", "Insures traders", "Funds offsets"], answer: 1, explain: "Credible, automatic supply control turned a glutted market into a real asset class: the 2018-2023 re-rating was the MSR working." },
    { q: "In carbon markets, the best through-cycle economics belong to:", choices: ["Emitters", "Project developers", "Exchanges, registries, and raters: the fee-clippers on every tonne", "Airlines"], answer: 2, explain: "ICE and EEX monetize EUR 777B of turnover, registries mint per-tonne fees, and raters price the trust premium: infrastructure beats direction." },
    { q: "The single biggest risk to allowance prices is:", choices: ["Weather", "Political reversal: caps and supply are legislated, so coalitions matter more than fundamentals", "Mining costs", "Currency moves"], answer: 1, explain: "The fundamental is a law. The ETS2 backlash debate shows the pattern: when carbon costs hit voters, supply gets political: size positions accordingly." }
  ],

  sources: [
    { name: "ESMA EU Carbon Markets Report 2026 (EUA traded value, prices)", url: "https://www.esma.europa.eu/sites/default/files/2026-07/ESMA50-481369926-34622_Carbon_markets_report_2026.pdf", feeds: "traded value, prices" },
    { name: "World Bank State and Trends of Carbon Pricing (revenue $104B, 80 instruments)", url: "https://www.worldbank.org/en/publication/state-and-trends-of-carbon-pricing", feeds: "coverage, revenue" },
    { name: "ICAP: China national ETS expansion (steel, cement, aluminum)", url: "https://icapcarbonaction.com/en/news/china-officially-expands-national-ets-cement-steel-and-aluminum-sectors", feeds: "China ETS" },
    { name: "MSCI Carbon Markets: Carbon Credits Come of Age in 2025 (VCM value, quality premium)", url: "https://www.msci.com/research-and-insights/blog-post/carbon-credits-come-of-age-in-2025", feeds: "VCM data" }
  ]
};
