/* Industry Atlas - WASTE & ENVIRONMENTAL SERVICES (full module, research-backed)
 * Anchors: WM FY2025 revenue $25.2B (+14.2% incl. Stericycle), core price 5.8% to 6.2%,
 * yield 4.0% to 4.2% (WM 8-K / stockanalysis.com, Feb 2026); Republic Services FY2025
 * revenue $16.6B, avg yield 4.5% (Waste Today, Feb 2026); EREF 2024 national average
 * MSW tip fee $62.28/ton, +10% YoY, Northeast $84.44 (EREF via Waste Advantage, 2025);
 * WM/Stericycle $7.2B close Nov 2024, $125M+ synergies (Waste Dive); WM $1.6B for 20
 * RNG plants 2022-2026, ~25M MMBtu/yr (WM mediaroom, Apr 2025); OCC ~$72/ton Jun 2025
 * vs $108 a year prior (Resource Recycling/RISI); EPA 2018 baseline 292.4M tons MSW,
 * 32.1% recycled/composted, 50% landfilled (epa.gov). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["waste-management"] = {
  meta: {
    id: "waste-management", name: "Waste & Environmental Services", sector: "industrials", status: "full",
    tagline: "Everyone's trash, priced like a toll road: route density, irreplaceable landfills, and CPI-plus pricing that never takes a year off.",
    marketSize: { value: 120, unit: "$B", asOf: 2025, note: "US solid waste & environmental services revenue; estimates span ~$90B to $156B by scope (Persistence, Grand View)" },
    cagr: { value: 5, range: [3, 6], horizon: "2025-2033" },
    maturity: "mature", cyclicality: 2, capitalIntensity: 4, regulation: 4, disruption: 2
  },
  newsQuery: '("Republic Services" OR "Waste Connections" OR "GFL Environmental" OR landfill OR "solid waste" OR "renewable natural gas" OR recycling)',

  overview: {
    definition: "The waste industry collects, hauls, sorts, buries, burns, and increasingly monetizes society's discards: roughly 292M tons of US municipal solid waste a year (EPA), half of it landfilled. Three companies dominate a $120B US market built on two moats nobody can replicate: dense collection routes and permitted landfill airspace.",
    howItWorks: [
      "The business is a vertically integrated toll system. Trucks collect from homes and businesses on contracted routes; transfer stations consolidate loads; landfills (or incinerators) take the final ton for a tipping fee. The integrated majors (WM, Republic Services, Waste Connections) own every step, so a competitor hauling in their market pays them at the gate anyway: the disposal network taxes even the competition.",
      "Route density is the first moat: the marginal cost of one more stop on an existing route is trivial, while a new entrant must run half-empty trucks past the incumbent's customers. The second moat is geological and political: permitting a new landfill in the US takes years and is nearly impossible near cities, so permitted airspace behaves like urban land. EREF pegged the 2024 national average MSW tip fee at $62.28/ton, up 10%: the largest jump since 2022, with the landfill-starved Northeast at $84.44 versus roughly half that in the Southeast. Scarcity is local, and so is pricing power.",
      "Pricing is the industry's defining habit. Contracts embed CPI-linked or open-market escalators, and the majors push price above cost inflation every single year: WM's 2025 core price ran 5.8% to 6.2% (yield 4.0% to 4.2%), Republic's average yield 4.5%. Volumes barely move with GDP (trash is nondiscretionary), so 4% to 5% yield on flat-to-modest volume compounds into utility-grade revenue with industrial margins. WM booked $25.2B of 2025 revenue (+14.2%, helped by Stericycle); Republic $16.6B.",
      "Two newer profit pools sit on top. Recycling: MRFs (materials recovery facilities) sort commingled bins and sell the bales, but commodity prices whipsaw (OCC cardboard averaged ~$72/ton in June 2025 versus $108 a year earlier), so the majors have repriced contracts to fee-for-service, pushing commodity risk back onto municipalities. Sustainability: landfills produce methane for decades, and capturing it as renewable natural gas turns a compliance cost into an energy annuity: WM alone is spending $1.6B on 20 RNG plants (2022-2026) adding ~25M MMBtu/yr, including the $131M Fairless plant opened in April 2025."
    ],
    history: [
      { era: "1900-1976", title: "Town dump era", text: "Thousands of unlined municipal dumps; collection is a fragmented mom-and-pop trade with occasional organized-crime flavor in big cities." },
      { era: "1976-1991", title: "RCRA professionalizes", text: "The Resource Conservation and Recovery Act, then Subtitle D (1991), mandates liners, monitoring, and closure funding: compliance costs wipe out small dumps and hand scale players the market." },
      { era: "1985-2000", title: "The roll-up decades", text: "WM, USA Waste, Republic, and Allied consolidate thousands of haulers; the 1998 USA Waste/WM merger creates the giant, and the 1999 WM accounting scandal nearly destroys it." },
      { era: "2000-2018", title: "Discipline replaces empire", text: "The survivors stop chasing volume and start pricing: returns on capital become the religion; free cash flow and dividends make trash a quality compounder." },
      { era: "2018-present", title: "Sword, gas, and medicine", text: "China's National Sword ban breaks the old recycling model and forces fee-for-service repricing; landfill gas becomes an RNG gold rush; WM buys Stericycle ($7.2B, 2024) to bolt medical waste onto the network." }
    ],
    trends: [
      { title: "Price above cost, forever", direction: "up", text: "The majors have institutionalized 4% to 5% yield with 5%+ core price; 2025 marked another year of spread expansion over cost inflation. The market now expects it." },
      { title: "Landfill scarcity deepens", direction: "up", text: "New-site permitting takes years where it is possible at all; EREF's 10% tip-fee jump in 2024 was the largest since 2022. Airspace owners harvest the squeeze." },
      { title: "RNG buildout", direction: "up", text: "Landfill gas dominates US RNG supply; WM's 20-plant, $1.6B program and peers' equivalents convert methane liabilities into $ per MMBtu plus environmental credits." },
      { title: "Recycling de-risked, not fixed", direction: "shift", text: "Post-National Sword contracts charge processing fees and pass commodity risk through; MRF automation raises throughput, but bale prices (OCC $72 vs $108 YoY) still swing the segment." },
      { title: "Consolidation up the risk curve", direction: "shift", text: "With core solid waste consolidated, capital moves adjacent: medical waste (Stericycle), hazardous and industrial services, and Canadian consolidators (GFL) rolling up what remains." }
    ],
    outlook: "The rare industrial where the 10-year thesis is boring on purpose: nondiscretionary volumes, embedded escalators, and disposal scarcity that compounds. Watch three swing factors: whether RNG and credit prices (RINs) hold well enough to justify the buildout, whether PFAS liability at landfills becomes the sector's asbestos or its next price umbrella, and whether the majors keep M&A discipline as targets get scarcer and pricier. None threaten the core toll-road math."
  },

  structure: {
    suppliers: [
      { name: "Truck & body OEMs (Mack, Peterbilt, Heil, McNeilus)", note: "A refuse truck runs $300K to $400K+; fleets are the biggest capex line after landfills" },
      { name: "Landfill engineering & liners (SCS, CEC, geosynthetics makers)", note: "Cell construction, gas systems, and closure engineering: regulation made them essential" },
      { name: "MRF equipment & robotics (CP Group, Machinex, AMP)", note: "Optical sorters and AI picking arms are repricing MRF labor economics" },
      { name: "Fuel & labor markets", note: "Diesel/CNG and CDL drivers: the two cost lines pricing escalators exist to outrun" }
    ],
    producers: [
      { name: "WM", note: "$25.2B 2025 revenue; the largest network of landfills, plus Stericycle's medical waste" },
      { name: "Republic Services", note: "$16.6B 2025 revenue, 4.5% average yield; the pricing-discipline standard-bearer" },
      { name: "Waste Connections", note: "The rural-and-secondary-market specialist: exclusive markets, best margins" },
      { name: "GFL, Casella, Clean Harbors", note: "The Canadian consolidator, the Northeast scarcity play, and the hazardous-waste leader" }
    ],
    distributors: [
      { name: "Transfer stations & rail-haul", note: "Waste flows to the cheapest gate: NYC exports by rail and truck; transfer economics decide who wins a market" }
    ],
    customers: [
      { name: "Municipalities", note: "Franchise and contract collection; sticky 5-to-10-year deals with escalators" },
      { name: "Commercial & industrial", note: "Open-market accounts where core price lands hardest; the margin engine" },
      { name: "Residential subscription", note: "Individual households in unfranchised markets; churn is low, billing is annuity-like" }
    ],
    regulators: [
      { name: "EPA (RCRA Subtitle D)", note: "Liners, monitoring, closure/post-closure funding: the rules that created the modern industry" },
      { name: "State environmental agencies", note: "Permitting authority over new airspace: the de facto supply regulator" },
      { name: "FTC/DOJ", note: "Every major deal now trades divestitures; antitrust is the binding constraint on M&A" }
    ],
    capital: [
      { name: "Investment-grade balance sheets", note: "The big 3 fund fleets and airspace at utility-like spreads" },
      { name: "Municipal bonds & flow-control", note: "Public landfills and authorities finance via munis; ~34% cheaper gate rates than private sites (EREF)" },
      { name: "Tax equity & green credits", note: "RNG plants monetize RINs, LCFS credits, and ITC-style incentives alongside gas revenue" }
    ]
  },

  valueChain: {
    intro: "A ton of trash pays a toll at every step from curb to cell. The deeper into the ground you go, the better the economics: collection earns margins, disposal earns rents.",
    stages: [
      { id: "collection", name: "Collection", what: "Trucks, routes, carts, contracts", players: "WM, Republic, Waste Connections, thousands of independents", valueCapture: 4,
        economics: { grossMargin: [30, 40], capitalIntensity: 4, concentration: 4 },
        linksTo: ["logistics", "automotive"],
        deeper: "Route density is destiny: one more stop costs almost nothing, a rival's first stop costs a truck. Franchise and exclusive markets (Waste Connections' specialty) turn collection into a local monopoly with a contract on top." },
      { id: "transfer", name: "Transfer & long-haul", what: "Consolidation stations, rail and truck transport to distant disposal", players: "Integrated majors, rail-haul specialists", valueCapture: 3,
        economics: { grossMargin: [20, 30], capitalIntensity: 3, concentration: 4 },
        linksTo: ["logistics", "rail"],
        deeper: "Where cities ran out of local airspace, waste became freight: the Northeast exports by rail at $84+ gate rates. Owning the transfer station means taxing every hauler in the market shed." },
      { id: "disposal", name: "Landfill disposal", what: "Permitted airspace: the scarce asset", players: "WM (largest network), Republic, regional publics", valueCapture: 5,
        economics: { grossMargin: [40, 55], capitalIntensity: 5, concentration: 5 },
        linksTo: ["real-estate", "construction"],
        deeper: "A modern Subtitle D landfill is a decades-long annuity: cell capex is prepaid, then every incremental ton is mostly margin. Permitting new sites takes years where possible at all, so tip fees compound: $62.28/ton national average in 2024, up 10% (EREF). Airspace is the industry's oil reserve." },
      { id: "recycling", name: "Recycling & MRFs", what: "Sorting commingled material into salable bales", players: "WM, Republic, Casella, municipal MRFs", valueCapture: 2,
        economics: { grossMargin: [5, 20], capitalIntensity: 4, concentration: 3 },
        linksTo: ["packaging", "forestry-paper", "aluminum"],
        deeper: "The chain's worst economics: revenue depends on OCC, plastics, and metals prices (OCC fell from $108 to ~$72/ton in the year to June 2025). Post-National Sword, the majors repriced to processing fees plus commodity pass-through: the customer now owns the whipsaw." },
      { id: "energy", name: "Landfill gas & RNG", what: "Methane capture, renewable natural gas, waste-to-energy", players: "WM, Republic/Archaea peers, Reworld (WtE)", valueCapture: 4,
        economics: { grossMargin: [40, 60], capitalIntensity: 5, concentration: 4 },
        linksTo: ["utilities", "oil-gas", "carbon-markets"],
        deeper: "Decades of buried organics emit methane that regulation says must be managed anyway: RNG turns the obligation into revenue. WM's $1.6B, 20-plant program adds ~25M MMBtu/yr; returns ride on gas prices plus RINs and LCFS credits, which is both the upside and the policy risk." },
      { id: "special", name: "Medical, hazardous & environmental services", what: "Regulated waste streams with certification moats", players: "WM (Stericycle), Clean Harbors, Veolia", valueCapture: 4,
        economics: { grossMargin: [25, 40], capitalIntensity: 3, concentration: 4 },
        linksTo: ["hospitals", "pharma", "chemicals"],
        deeper: "Cradle-to-grave liability makes customers pay for compliance certainty: sharps, pharma waste, industrial cleanouts, emergency response. WM's $7.2B Stericycle deal (closed Nov 2024, $125M+ synergies) bet that medical waste plus the disposal network compounds like core solid waste." }
    ]
  },

  financials: {
    businessModel: [
      "The model is annuity revenue with industrial assets. Revenue = customers x price, where price carries contractual escalators plus discretionary core price on open-market accounts: WM's 2025 core price of 5.8% to 6.2% converted to 4.0% to 4.2% yield after mix, and that spread over cost inflation is the entire margin-expansion story. Volumes are nondiscretionary and move a point or two with the economy; churn is minimal because switching haulers saves little and disposal is the incumbent's anyway. EBITDA margins for the majors sit around 30%, landfill-heavy mixes higher.",
      "Cash flow is the sector's calling card and capex is its tax: trucks, carts, MRF automation, and above all landfill cells and closure liabilities. The majors convert roughly half of EBITDA to free cash flow, fund rising dividends, and recycle the rest into tuck-in M&A at 8x to 12x EBITDA that immediately synergizes onto existing routes and gates. The newer twist is growth capex with commodity exposure: RNG plants and recycling upgrades earn well above cost of capital at current gas, RIN, and bale prices, but mark the once-pure annuity to energy and commodity markets at the margin."
    ],
    fingerprint: { grossMargin: 38, recurringRevenue: 85, capitalIntensity: 70, pricingPower: 85, cyclicality: 25, operatingLeverage: 45 },
    lines: [
      { label: "Core price & yield", note: "The tape that matters: 4% to 5% yield is the sector's heartbeat (WM 4.0% to 4.2%, Republic 4.5% in 2025)" },
      { label: "Volumes", note: "Flat to +1% is normal; watch commercial roll-off as the macro tell" },
      { label: "Landfill metrics", note: "Tons in, remaining permitted airspace, and tip-fee trajectory ($62.28 national avg, 2024)" },
      { label: "Recycling brokerage & commodity basket", note: "OCC is the swing bale; fee-for-service share shows who owns the risk" },
      { label: "Sustainability revenue", note: "RNG MMBtu sold, RIN/LCFS realizations, and plant in-service dates" }
    ],
    unitEconomics: {
      unit: "per ton of MSW (illustrative)",
      items: [
        { label: "National average tip fee", value: "$62.28 (2024)", note: "EREF; up 10% YoY, the largest jump since 2022" },
        { label: "Regional spread", value: "~$42 to $84+", note: "Southeast vs Northeast: disposal scarcity is a local phenomenon" },
        { label: "Landfill incremental economics", value: "richest in the chain", note: "cell capex is sunk; each added ton is mostly margin until airspace runs out" },
        { label: "OCC bale price", value: "~$72 (Jun 2025)", note: "vs $108 a year earlier: why recycling is now priced fee-for-service" }
      ]
    }
  },

  kpiRefs: ["log-operating-ratio", "energy-capacity-factor"],
  kpiLocal: [
    {
      id: "waste-yield", name: "Core Price & Revenue Yield", industries: ["waste-management"],
      definition: "Core price is the gross price increase put through on the base business; yield is what survives into revenue after mix, rollbacks, and churn.",
      formula: "Yield = price-driven revenue growth / prior-period revenue; core price reported separately by the majors",
      interpretation: "The sector's single most-watched print. 2025: WM core price 5.8% to 6.2% converting to 4.0% to 4.2% yield; Republic 4.5% average yield. Spread over internal cost inflation = margin expansion.",
      healthy: "Yield 4%+ with stable churn", warning: "Yield converging to CPI; rising rollbacks signal price-taking" },
    {
      id: "waste-airspace", name: "Permitted Airspace & Landfill Life", industries: ["waste-management"],
      definition: "Remaining permitted disposal capacity, in years at current intake, across a company's landfill network.",
      formula: "Remaining permitted tons / annual tons interned; disclosed in 10-Ks as average remaining life",
      interpretation: "Airspace is inventory that appreciates: scarcity sets tip-fee trajectory ($62.28 avg, +10% in 2024 per EREF). Expansions of existing permits are far cheaper than new sites, which take years where possible at all.",
      healthy: "25+ years average life with active expansion permits", warning: "Short-life networks forcing long-haul dependence and margin leakage" }
  ],

  health: {
    intro: "Health here is pricing discipline standing on irreplaceable assets: judge the escalator machine first, the asset position second, and the balance sheet's appetite last.",
    pillars: [
      { name: "Pricing discipline", weight: 30, metrics: "Core price, yield vs cost inflation, rollback rates", healthy: "Yield 4%+ and spread widening", warning: "Price wars in open markets; yield at or below CPI" },
      { name: "Asset position", weight: 25, metrics: "Landfill airspace life, route density, internalization rate (own tons to own gates)", healthy: "25+ year airspace, 65%+ internalization", warning: "Disposal-short networks renting rivals' gates" },
      { name: "Volume & mix quality", weight: 15, metrics: "Commercial/industrial mix, franchise share, churn", healthy: "Sticky franchise and C&I anchor tenants", warning: "Volume bought with price; temporary roll-off dependence" },
      { name: "Capital allocation", weight: 15, metrics: "Tuck-in multiples, RNG return hurdles, dividend cover", healthy: "8x to 12x tuck-ins that synergize; FCF funds it all", warning: "Empire-building at 15x+; growth capex outrunning returns" },
      { name: "Environmental liability", weight: 15, metrics: "Closure/post-closure reserves, PFAS exposure, methane compliance", healthy: "Fully funded reserves, gas capture ahead of rules", warning: "Under-reserved legacy sites; PFAS litigation creep" }
    ],
    scoringNote: "The sector's failure mode is not recession: it is discipline breaking (price wars, dumb M&A) or a liability surprise (the PFAS question) surfacing decades after the tons went in."
  },

  valuation: {
    intro: "Trash trades like infrastructure wearing an industrial label: the market pays utility-plus multiples for CPI-plus pricing, and the debate is only ever about how much premium is too much.",
    methods: [
      { name: "EV / EBITDA", use: "The standard for the majors and every tuck-in", avoid: "Ignoring landfill capex intensity differences between networks", strengths: "Comparable across the group; deal benchmark", weaknesses: "Flatters disposal-light models that rent gates", range: { low: 11, high: 17, asOf: 2025, note: "the big 3 at the top of the range; a persistent premium to industrials" } },
      { name: "FCF yield", use: "The quality lens: conversion of EBITDA to cash after cells and fleets", avoid: "Years distorted by RNG buildout capex without crediting the coming revenue", strengths: "Cuts through capex accounting; matches the dividend story", weaknesses: "Growth capex vs maintenance split is management's word", range: { low: 3, high: 5, asOf: 2025, note: "% yields; the compounders rarely get cheap" } },
      { name: "DCF on landfill annuities", use: "Valuing airspace: tons x tip-fee trajectory over permitted life", avoid: "Assuming perpetual permitting success", strengths: "Values the scarce asset directly; captures tip-fee compounding", weaknesses: "Closure liabilities and PFAS tails are the hard part", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor for asset deals and expansions" } },
      { name: "Sum-of-parts with sustainability", use: "Separating core collection/disposal from RNG and recycling investments", avoid: "Power-market multiples on credit-dependent RNG cash flows", strengths: "Prevents the annuity from subsidizing commodity bets in the multiple", weaknesses: "Segments are integrated; clean splits are estimates", range: { low: 0, high: 0, asOf: 2025, note: "framework, not a single multiple" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a waste name quickly: EBITDA times an infrastructure-grade multiple, minus net debt. Discipline and airspace decide where in the range it deserves to sit.",
      inputs: [
        { id: "vc-ebitda", label: "EBITDA ($B)", min: 0.2, max: 10, step: 0.2, value: 3, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 20, step: 0.5, value: 14, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: 0, max: 30, step: 0.5, value: 8, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk owns waste as the defensive compounder sleeve: infrastructure economics without regulated returns. Core the disciplined majors for the 4% to 5% yield machine, prefer disposal-rich networks in scarcity regions, and treat RNG and recycling as embedded options rather than the thesis. The entry problem is chronic: quality is known, so the group is rarely cheap; the alpha is in relative discipline and in buying the inevitable multiple compressions when a macro scare hits a business the macro barely touches.",
    debates: [
      { topic: "Is 17x EBITDA for trash a bubble or fair value for a private toll road?", bull: "CPI-plus escalators, irreplaceable airspace, 90%+ revenue retention, and secular tip-fee inflation: price it against regulated utilities and transmission, not industrials, and the multiple is defensible with a decade of visible compounding.", bear: "It is still trucks, diesel, and labor with GDP-linked volumes; the premium assumes pricing discipline is permanent culture, and every industrial oligopoly that believed that eventually met a price war, a regulator, or a capital-allocation ego." },
      { topic: "RNG: annuity extension or commodity trap?", bull: "The gas is already seeping from owned assets; capture capex is modest against $1.6B-scale programs adding 25M MMBtu/yr, and even at soft RIN prices the projects clear hurdles: it is found money on a liability you had to manage anyway.", bear: "Returns lean on RINs and LCFS credits, which are policy constructs one rulemaking away from repricing; the sector is quietly converting its cleanest annuity into energy-credit beta, and the market caps that cash flow accordingly." },
      { topic: "PFAS: the next asbestos or the next price umbrella?", bull: "Landfills are passive receivers, not manufacturers; liability regimes are landing on chemical makers, and if leachate treatment becomes mandatory, it is a cost passed through the gate: regulation has always ended up raising tip fees and widening the majors' moat.", bear: "Cradle-to-grave liability cuts both ways: thousands of legacy cells received PFAS-laden waste for decades, monitoring rules are tightening, and the tail is unquantifiable: the one genuinely open-ended balance-sheet risk in the sector." }
    ],
    cycle: {
      where: "Mid-cycle steady state with a pricing tailwind: tip fees +10% in 2024 (EREF's largest jump since 2022), yields holding 4%+, volumes flat, and the RNG capex wave cresting into revenue through 2026. The group's multiples, not its fundamentals, carry the cycle risk.",
      drivers: "Cost inflation vs escalators, disposal scarcity by region, energy and RIN prices for RNG, commodity bale prices, and M&A pipeline pricing.",
      leads: [
        "WM and Republic quarterly core price and yield disclosures (free, IR sites)",
        "EREF annual MSW tipping-fee report (summaries free)",
        "EPA methane and Subtitle D rulemaking dockets (free, epa.gov)",
        "OCC and recovered-paper indices via Resource Recycling coverage (free)",
        "CPI garbage and trash collection index, FRED (free): the escalator's public shadow"
      ]
    },
    exposure: [
      { vehicle: "WM", note: "The network king: most landfills, Stericycle's medical annuity, the RNG flagship program" },
      { vehicle: "Republic Services", note: "The pricing purist: 4.5% yield in 2025 and the cleanest discipline story" },
      { vehicle: "Waste Connections", note: "Exclusive and secondary markets: the highest-margin, lowest-drama compounder" },
      { vehicle: "GFL / Casella", note: "The leverage-and-growth end: consolidation beta and Northeast scarcity, respectively" },
      { vehicle: "Clean Harbors / Reworld class", note: "Hazardous waste and waste-to-energy: adjacent moats, different cycles" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Core price, yield, volume, and RNG in-service updates: the whole thesis in 4 numbers" },
      { when: "Annual (spring)", what: "EREF tipping-fee report: the scarcity scorecard" },
      { when: "EPA rulemakings", what: "Landfill methane standards and PFAS designations move liability and pricing math" },
      { when: "Deal announcements", what: "Tuck-in multiples and antitrust divestitures reveal market-by-market power" }
    ],
    data: [
      { series: "EPA Facts & Figures (MSW generation, recycling rates)", source: "epa.gov (free)", why: "The 292M-ton baseline and material-by-material trends" },
      { series: "EREF landfill tipping-fee survey", source: "erefdn.org (free summaries)", why: "The price of scarcity, regionally" },
      { series: "CPI: garbage and trash collection", source: "FRED (free)", why: "Public proxy for the escalator machine" },
      { series: "Company core price/yield disclosures", source: "WM, RSG, WCN IR (free)", why: "The primary pricing tape" },
      { series: "Recovered-commodity price coverage", source: "resource-recycling.com (free)", why: "OCC and bale prices: the recycling swing factor" }
    ],
    playbook: [
      { regime: "Recession", behavior: "The showcase regime: volumes dip 1 to 3 points (roll-off first), pricing holds, multiples expand as capital hides here. Buy the panic, not the peak." },
      { regime: "Inflation spike", behavior: "Short lag, then escalators catch up and core price overshoots: 2021-2023 proved the model; margins exit higher than they entered." },
      { regime: "Rates rising", behavior: "The real threat: bond-proxy multiples compress even as fundamentals hold. Duration risk lives in the valuation, not the business." },
      { regime: "Energy shock", behavior: "Diesel bites collection margins for 2 quarters (fuel surcharges lag); RNG economics improve simultaneously: the sector partially hedged itself." }
    ]
  },

  players: [
    { name: "WM", role: "Industry leader", country: "US", real: true, note: "$25.2B 2025 revenue; largest landfill network; $1.6B RNG program; Stericycle owner" },
    { name: "Republic Services", role: "Disciplined #2", country: "US", real: true, note: "$16.6B 2025 revenue, 4.5% average yield: the pricing benchmark" },
    { name: "Waste Connections", role: "Exclusive-market specialist", country: "CA", real: true, note: "Secondary and franchise markets; the group's best margins by design" },
    { name: "GFL Environmental", role: "The consolidator", country: "CA", real: true, note: "Levered roll-up of solid waste and environmental services across North America" },
    { name: "Casella Waste", role: "Northeast scarcity play", country: "US", real: true, note: "Airspace where it is scarcest ($84+ regional tip fees)" },
    { name: "Clean Harbors", role: "Hazardous-waste leader", country: "US", real: true, note: "Incinerators and industrial services: certification moats, tighter capacity" },
    { name: "Veolia", role: "Global environmental major", country: "FR", real: true, note: "Water, waste, and energy across 40+ countries; the European integrated model" },
    { name: "Reworld (ex-Covanta)", role: "Waste-to-energy operator", country: "US", real: true, note: "Combustion with energy recovery: 12% of US MSW ends here (EPA)" }
  ],

  geography: [
    { country: "US", role: "The profit pool", note: "~$120B market, half of MSW landfilled; the big 3 and the RNG buildout" },
    { country: "CA", role: "Consolidator home base", note: "Waste Connections and GFL domiciles; integrated North American routes" },
    { country: "FR", role: "European integrated model", note: "Veolia and Suez heritage: utility-style contracts, aggressive recycling mandates" },
    { country: "GB", role: "Landfill-tax laboratory", note: "Punitive landfill taxes pushed waste to energy-from-waste and exports" },
    { country: "CN", role: "The demand shock that was", note: "National Sword (2018) banned imported scrap and broke the old recycling trade" },
    { country: "IN", role: "The frontier", note: "Urbanizing waste streams with informal-sector collection: the next formalization story" }
  ],

  cycles: [
    { year: 1991, title: "Subtitle D lands", kind: "shift", text: "Liner, monitoring, and closure-funding rules make small dumps uneconomic; thousands close and volume concentrates into engineered regional landfills. Lesson: regulation is the moat-builder in waste: compliance cost is a fixed cost, and scale wins fixed-cost games." },
    { year: 1999, title: "WM's accounting scandal", kind: "bust", text: "The roll-up era's aggressive books unravel; a $1.7B restatement (then the largest ever) craters the stock and forces cultural rebuild. Lesson: serial acquirers' earnings deserve serial skepticism: integration math hides sins for years." },
    { year: 2008, title: "The recession that wasn't", kind: "shift", text: "Volumes fall with industrial activity but pricing holds and cash flows barely flinch; the market reclassifies trash from cyclical industrial to defensive compounder. Lesson: nondiscretionary volume plus contracted price equals a different asset class than the sector label implies." },
    { year: 2018, title: "National Sword", kind: "bust", text: "China bans imported mixed recyclables; bale prices collapse and municipal recycling programs bleed. The majors reprice contracts to fee-for-service within 2 years. Lesson: when a business loses its end market, watch who holds repricing power: the processors passed the pain through and kept the fee." },
    { year: 2024, title: "The adjacency era", kind: "boom", text: "WM closes Stericycle at $7.2B, tip fees jump 10%, and the RNG buildout converts methane compliance into an energy annuity. Lesson: mature oligopolies grow by bolting regulated adjacencies onto irreplaceable networks: the network is the acquirer's real currency." }
  ],

  risks: [
    { name: "PFAS liability at legacy landfills", severity: 4, likelihood: 3, transmission: "PFAS designations tighten -> leachate treatment mandates and litigation over decades-old cells -> under-reserved closure liabilities surface -> the sector's cleanest balance sheets carry an asbestos-shaped question mark." },
    { name: "Pricing discipline breaks", severity: 4, likelihood: 2, transmission: "A major chases share or a consolidator buys volume -> core price converges to CPI -> the premium multiple built on permanent discipline compresses across the whole group." },
    { name: "RNG credit repricing", severity: 3, likelihood: 3, transmission: "RIN or LCFS values fall on policy change -> RNG project returns miss hurdles -> $1B+ programs mark to commodity reality -> sustainability capex gets recut and the growth narrative deflates." },
    { name: "Antitrust hardening", severity: 3, likelihood: 3, transmission: "FTC/DOJ block or strip tuck-ins -> the M&A compounding engine slows -> growth reverts to price-only and consolidators built on deal flow (GFL model) rerate." },
    { name: "Recycling commodity collapse", severity: 2, likelihood: 4, transmission: "OCC and bale prices fall (the $108 to $72 pattern) -> brokerage and MRF revenue drops -> modest EPS hit where fee-for-service contracts lag: the risk the industry already largely repriced away." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Someone has to collect the trash every week, no matter what the economy does. In the US, 3 big companies do most of it: they own the trucks, the routes, and crucially the landfills where trash legally has to go. Because almost nobody can get permission to build a new landfill, the companies that own them can raise prices a little every year, forever: that is the whole secret."] },
    L2: { title: "Intermediate", text: ["The model is route density plus disposal scarcity. Collection is a local monopoly (the incumbent's marginal stop is nearly free), and landfills are irreplaceable assets: the national average tip fee hit $62.28/ton in 2024, up 10% (EREF). The majors put through 5%+ core price converting to 4% to 5% revenue yield (WM 4.0% to 4.2%, Republic 4.5% in 2025), on volumes that barely notice recessions. Recycling is the weak link (bale prices whipsaw), so it has been repriced to fee-for-service."] },
    L3: { title: "Advanced", text: ["Analyze the spread machine: yield versus internal cost inflation is the margin story; internalization rate (own tons to own gates) and airspace life are the asset story. Landfill economics are an annuity: cell capex is sunk, incremental tons are mostly margin, and scarcity compounds the gate rate. New profit pools carry new risk DNA: RNG returns lean on RINs and LCFS credits (policy beta), and Stericycle-style adjacencies test whether network synergies survive integration. Watch tuck-in multiples for discipline."] },
    L4: { title: "Expert", text: ["The live debates: whether 15x to 17x EBITDA is defensible infrastructure pricing or discipline-dependent hope; whether PFAS is a pass-through cost (bullish, historically how regulation resolved) or an open-ended tail on decades of legacy cells; whether RNG converts a compliance liability into an annuity or quietly loads energy-credit beta onto a defensive multiple. Position around the valuation cycle, not the business cycle: fundamentals rarely wobble, multiples do, and rate spikes are the group's real drawdowns."] },
    L5: { title: "Institutional", text: ["Allocator's frame: waste is private infrastructure available in public markets: CPI-plus escalators on nondiscretionary demand, secured by permitted airspace no one can replicate. Core the disciplined majors and size the levered consolidators as credit-cycle instruments, not compounders. The book's tail risks are legal (PFAS), political (RIN regimes, antitrust), and cultural (discipline is a choice, not a law). Every thesis reduces to one question: does the escalator keep outrunning the cost line, and who owns the gate when it does."] }
  },

  quiz: [
    { q: "The waste industry's 2 structural moats are:", choices: ["Brands and patents", "Route density and permitted landfill airspace: both nearly impossible to replicate", "Cheap labor and fuel hedges", "Government ownership"], answer: 1, explain: "One more stop on an existing route is nearly free, and permitting a new landfill takes years where it is possible at all: incumbents own both." },
    { q: "The 2024 national average MSW tipping fee was:", choices: ["$12/ton", "$62.28/ton, up 10%: the largest jump since 2022 (EREF)", "$500/ton", "Falling steadily"], answer: 1, explain: "Disposal scarcity compounds the gate rate: the Northeast averaged $84.44 while the Southeast sat near half the national figure." },
    { q: "In 2025, the majors' pricing looked like:", choices: ["Price freezes", "WM core price of 5.8% to 6.2% converting to 4.0% to 4.2% yield; Republic 4.5% yield", "Prices set by the EPA", "Discounting to win share"], answer: 1, explain: "Yield above cost inflation, every year, is the sector's entire margin-expansion story: the market now treats it as a law of nature." },
    { q: "Recycling contracts were repriced after 2018 because:", choices: ["Robots got expensive", "China's National Sword ban collapsed bale prices, so the majors moved to fee-for-service and passed commodity risk to customers", "Recycling was banned", "Landfills got cheaper"], answer: 1, explain: "OCC's slide from $108 to ~$72/ton in the year to June 2025 shows why: the processors keep the fee, the customer owns the whipsaw." },
    { q: "Landfill-gas RNG is attractive because:", choices: ["It needs no permits", "The methane must be managed anyway: capture converts a compliance cost into gas revenue plus environmental credits", "It replaces trucks", "It is risk-free"], answer: 1, explain: "WM's $1.6B, 20-plant program adds ~25M MMBtu/yr: but returns lean on RIN and LCFS credit prices, which is the policy risk." },
    { q: "WM's $7.2B Stericycle deal (2024) was a bet that:", choices: ["Medical waste is unregulated", "Regulated adjacencies bolt profitably onto an irreplaceable collection-and-disposal network", "Hospitals stop producing waste", "Recycling beats landfills"], answer: 1, explain: "Certification moats plus WM's logistics and gates: $125M+ of projected synergies from running medical waste through existing infrastructure." },
    { q: "In a recession, waste volumes typically:", choices: ["Collapse 30%", "Dip 1 to 3 points while pricing holds: the sector re-rated as a defensive compounder after 2008", "Double", "Go to zero"], answer: 1, explain: "Trash is nondiscretionary and prices are contracted: 2008 taught the market that the sector label (industrial) mismatched the cash flows (utility-like)." },
    { q: "The sector's most open-ended balance-sheet risk is:", choices: ["Truck prices", "PFAS liability: decades of legacy cells received PFAS-laden waste, and the monitoring and litigation tail is unquantified", "Font choices on invoices", "Weather"], answer: 1, explain: "Regulation has historically raised tip fees and widened moats: PFAS is the scenario where it instead lands as an asbestos-shaped liability." }
  ],

  sources: [
    { name: "EREF 2024 MSW tipping-fee report (via Waste Advantage)", url: "https://wasteadvantagemag.com/eref-report-shows-10-increase-in-u-s-landfill-tipping-fees-largest-increase-since-2022/", feeds: "tip fees, scarcity" },
    { name: "WM Q4/FY2025 earnings release (8-K)", url: "https://www.sec.gov/Archives/edgar/data/823768/000110465925007338/tm254559d1_ex99-1.htm", feeds: "revenue, core price, yield" },
    { name: "WM Stericycle completion & RNG program (Waste Dive, WM mediaroom)", url: "https://www.wastedive.com/news/wm-stericycle-acquire-medical-waste-market-fish-miller/731712/", feeds: "M&A, RNG buildout" },
    { name: "EPA Facts & Figures on Materials, Wastes and Recycling", url: "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/national-overview-facts-and-figures-materials", feeds: "MSW generation, recycling rates" }
  ]
};
