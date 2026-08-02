/* Industry Atlas - PACKAGING (full module, research-backed)
 * Anchors: global packaging ~$1.2T in 2025, ~3.5% CAGR to 2030 (Smithers, Mordor Intelligence);
 * corrugated ~$225B in 2025, top 5 producers ~22% share; e-commerce packaging ~$75B demand,
 * corrugated the fastest format at ~9.5% CAGR to 2029 (GM Insights, Smithers);
 * Smurfit Kappa + WestRock closed Jul 5, 2024: world's largest containerboard maker, ~$34B
 * combined revenue, ~500 converting plants (Fastmarkets, company reports);
 * International Paper closed DS Smith Jan 31, 2025 at ~$7.2B, $514M+ synergies (IP, PR Newswire);
 * Amcor closed Berry Global Apr 30, 2025: announced at $8.4B, final consideration $10.4B plus
 * ~$5.2B assumed debt, $650M synergies (Amcor, SEC filings);
 * EU PPWR (Regulation (EU) 2025/40) applies from Aug 12, 2026: all packaging recyclable or
 * reusable by 2030, 30-65% recycled content in plastics by 2030 (European Commission). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["packaging"] = {
  meta: {
    id: "packaging", name: "Packaging", sector: "materials", status: "full",
    tagline: "A $1.2T toll on everything that ships: GDP-plus volumes, commodity margins, and a consolidation wave rewriting who collects.",
    marketSize: { value: 1.2, unit: "$T", asOf: 2025, note: "global packaging revenue across fiber, plastics, metal, glass; corrugated alone ~$225B" },
    cagr: { value: 3.5, range: [3, 4], horizon: "2025-2030" },
    maturity: "mature", cyclicality: 2, capitalIntensity: 4, regulation: 3, disruption: 2
  },
  newsQuery: '("Smurfit Westrock" OR Amcor OR "International Paper" OR containerboard OR "corrugated packaging" OR "flexible packaging" OR "packaging waste regulation")',

  overview: {
    definition: "The packaging industry converts fiber, resin, metal, and glass into the boxes, films, cans, bottles, and cartons that carry nearly every physical good on Earth. It is the quietest $1.2T market in the economy: a consumable toll collected on global consumption itself.",
    howItWorks: [
      "Packaging is 4 industries wearing one name, split by substrate. Paper and board (corrugated boxes, folding cartons) is the largest slice and the e-commerce workhorse. Plastics (rigid containers plus flexible films and pouches) is the growth substrate: light, cheap, and now the regulatory target. Metal (aluminum beverage cans, food cans) and glass round it out. Each substrate has its own raw material cycle, its own capital base, and its own champions, and substitution between them is where the strategic action lives.",
      "The economics are volume-times-spread. Producers buy commodity inputs (containerboard made from wood pulp or recovered cardboard, resin cracked from oil and gas, aluminum sheet) and sell converted product on contracts that pass input costs through with a lag: 3 to 9 months in corrugated, similar in cans. Margin therefore lives in the spread between finished prices and raw material costs, and the quarterly earnings story is almost always price-cost timing, not demand. Volumes track consumption at roughly GDP, which makes packaging one of the most stable top lines in materials: people box, bottle, and can things in every economy.",
      "Structure is consolidating fast. Corrugated was long a fragmented, discipline-challenged business; 3 megadeals changed the map in 18 months. Smurfit Kappa and WestRock combined in July 2024 into the world's largest containerboard and box maker (~$34B revenue, ~500 converting plants). International Paper closed its ~$7.2B acquisition of DS Smith in January 2025, bolting Europe's box network onto America's mill system. And Amcor closed Berry Global in April 2025 (announced at $8.4B in stock, $10.4B final consideration plus ~$5.2B assumed debt), creating a flexible-and-rigid plastics giant hunting $650M of synergies. Even so, the top 5 corrugated producers hold only ~22% of that market: consolidation has room to run.",
      "Two secular forces set the agenda. E-commerce converts retail sales into corrugated demand: every parcel is a box, and e-commerce packaging (~$75B of demand) is growing at roughly 9.5% a year, far above the industry's 3.5%. Sustainability regulation converts packaging design into a compliance discipline: the EU's Packaging and Packaging Waste Regulation (PPWR, in force February 2025, applying from August 2026) requires all packaging to be recyclable or reusable by 2030 and mandates 30-65% recycled content in plastic packaging. Both forces favor scale, fiber, and whoever controls recycled feedstock."
    ],
    history: [
      { era: "1870s-1930s", title: "The substrate century begins", text: "The corrugated box (patented 1871), the tin can, and machine-made glass turn packaging from craft into industry; brands are born on labels." },
      { era: "1950s-1980s", title: "Plastics and the supermarket", text: "Polyethylene films, PET bottles, and the aluminum can (1959) remake consumer goods; self-service retail makes the package the salesman." },
      { era: "1990s-2008", title: "Consolidation, round one", text: "Containerboard's brutal price cycles (the mid-1990s linerboard collapse burned a generation of investors) force mill closures and mergers; discipline slowly improves." },
      { era: "2009-2019", title: "The e-commerce dividend", text: "Amazon-era parcel volumes hand corrugated a structural demand stream; boxmakers rerate from deep-cyclical to GDP-plus consumable." },
      { era: "2020-present", title: "Whiplash and megamergers", text: "COVID box mania, the 2022-23 destocking bust, then 3 megadeals (Smurfit Westrock, IP-DS Smith, Amcor-Berry) and the EU's PPWR reset the board in under 3 years." }
    ],
    trends: [
      { title: "Megamerger consolidation", direction: "up", text: "~$50B of combinations closed 2024-25; the bet is that 3 scaled leaders finally bring capacity discipline to businesses that historically overbuilt at every peak." },
      { title: "E-commerce corrugated demand", direction: "up", text: "E-commerce packaging (~$75B) compounds at ~9.5% vs ~3.5% for packaging overall; every percentage point of retail that moves online is a box that didn't exist before." },
      { title: "Plastics regulation hardens", direction: "shift", text: "The EU PPWR applies from August 2026: recyclability mandates, 30-65% recycled content in plastics by 2030, reuse quotas, and empty-space limits turn design into compliance." },
      { title: "Fiber substitution", direction: "up", text: "Brand owners swap plastic for paper where physics allows (mailers, trays, cups); fiber wins the optics war even where lifecycle math is closer than it looks." },
      { title: "Recycled feedstock scarcity", direction: "shift", text: "Mandated recycled content collides with limited high-quality supply: food-grade recycled resin trades at a premium to virgin, inverting the old economics and rewarding whoever locks up collection." }
    ],
    outlook: "The demand story is boring in the best way: ~3.5% growth on a $1.2T base, with e-commerce corrugated compounding at nearly 3x that rate. The equity story is sharper: whether the newly merged giants (Smurfit Westrock, IP-DS Smith, Amcor-Berry) convert scale into pricing discipline and synergy delivery, and whether PPWR-class regulation becomes a moat for scaled compliant players or a margin tax on everyone. Fiber demand looks structurally advantaged; plastic packaging faces a decade of mandated reinvention that its biggest producers are, paradoxically, best placed to monetize."
  },

  structure: {
    suppliers: [
      { name: "Pulp & recovered fiber (mills, OCC dealers)", note: "Virgin pulp and old corrugated containers: the fiber chain's swing input" },
      { name: "Petrochemical resin makers (Dow, LyondellBasell, ExxonMobil)", note: "Polyethylene, polypropylene, PET: packaging takes ~40% of global plastics output" },
      { name: "Aluminum & steel sheet, glass sand", note: "Can sheet and cullet chains with their own smelter economics" },
      { name: "Packaging machinery (Krones, Tetra Laval, Bobst)", note: "Filling and converting lines: the hidden capex gatekeepers" }
    ],
    producers: [
      { name: "Smurfit Westrock", note: "World's largest containerboard and box maker post the July 2024 combination (~$34B revenue)" },
      { name: "International Paper + DS Smith", note: "The ~$7.2B January 2025 deal: US mills married to Europe's box network" },
      { name: "Amcor (with Berry Global)", note: "Flexibles plus rigid plastics giant; the April 2025 close created a ~$24B-revenue plastics leader" },
      { name: "Ball, Crown, Ardagh (metal), O-I (glass), Tetra Pak (cartons)", note: "The substrate oligopolies beyond fiber and film" }
    ],
    distributors: [
      { name: "Packaging distributors (Bunzl, Veritiv class)", note: "Fragmented last mile of boxes, films, and supplies to smaller customers" }
    ],
    customers: [
      { name: "Food & beverage brands", note: "Roughly half of all packaging demand; recession-resistant and contract-heavy" },
      { name: "E-commerce & retail", note: "The growth buyer: parcels, mailers, private-label programs" },
      { name: "Consumer goods, pharma, industrial", note: "The long tail: from blister packs to drums" }
    ],
    regulators: [
      { name: "EU (PPWR, Regulation 2025/40)", note: "The global pacesetter: recyclability by 2030, recycled-content floors, reuse quotas" },
      { name: "US states & EPR schemes", note: "Extended producer responsibility laws spreading state by state; no federal PPWR yet" },
      { name: "Food-contact authorities (FDA, EFSA)", note: "Every material touching food needs clearance: a quiet barrier to entry" }
    ],
    capital: [
      { name: "Public equity & investment-grade debt", note: "The majors fund mills and megadeals in the bond market; Amcor-Berry was all stock" },
      { name: "Private equity", note: "A serial consolidator of converters; Berry itself was built by PE roll-up" },
      { name: "Green financing", note: "Recycling capacity and fiber-based capex increasingly ride sustainability-linked paper" }
    ]
  },

  valueChain: {
    intro: "From tree and barrel of oil to the box on a doorstep and back through the recycling stream. Margin concentrates where capacity is disciplined (mills, cans) and where the customer relationship lives (converting); it evaporates in undifferentiated commodity stretches.",
    stages: [
      { id: "raw-materials", name: "Raw materials", what: "Pulp, recovered fiber (OCC), resins, aluminum sheet, glass sand", players: "Pulp majors, resin crackers, smelters, OCC collection networks", valueCapture: 2,
        economics: { grossMargin: [10, 25], capitalIntensity: 5, concentration: 3 },
        linksTo: ["forestry-paper", "chemicals", "aluminum"],
        deeper: "Pure commodity cycles: resin follows oil and gas economics, OCC follows collection volumes and (historically) Chinese import policy. China's 2018-21 waste-import bans rerouted the world's recovered fiber and crushed OCC prices, a reminder that this stage's economics are set by policy as much as supply." },
      { id: "substrate", name: "Substrate production", what: "Containerboard and paperboard mills, film extrusion, can sheet rolling, glass furnaces", players: "Smurfit Westrock, International Paper, Nine Dragons, film extruders", valueCapture: 4,
        economics: { grossMargin: [15, 30], capitalIntensity: 5, concentration: 4 },
        linksTo: ["forestry-paper", "manufacturing"],
        deeper: "The capital heart of the industry: a new containerboard machine runs $500M+ and lives 40 years, so supply arrives in indivisible lumps and discipline is everything. Operating rates above ~95% support price hikes; below ~90%, price wars start. The 2024-25 megadeals are, at bottom, bets on controlling this stage's supply curve." },
      { id: "converting", name: "Converting", what: "Corrugating, box plants, printing, laminating films into pouches, can lines", players: "Integrated majors' box networks, Amcor-Berry, thousands of independents", valueCapture: 3,
        economics: { grossMargin: [12, 22], capitalIntensity: 3, concentration: 2 },
        linksTo: ["manufacturing", "consumer-goods"],
        deeper: "Where substrate becomes product and where the customer relationship lives: design, printing, just-in-time delivery within a ~150-mile box-plant radius. Integration is the classic corrugated model: mills feed captive box plants, letting integrateds flex tons between markets. Independents survive on service and niches; scale players win national accounts." },
      { id: "filling", name: "Filling & co-packing", what: "Contract filling, assembly, kitting for brands", players: "Brand owners' lines, contract packers, Tetra Pak's installed systems", valueCapture: 2,
        economics: { grossMargin: [8, 15], capitalIntensity: 3, concentration: 2 },
        linksTo: ["food-beverage", "consumer-goods"],
        deeper: "The interface with the brand's factory: filling lines are often the packaging company's Trojan horse (Tetra Pak places the machine, then sells the carton stream for decades: razor-and-blade with sterile milk). Co-packing is low-margin but sticky: switching a validated food line is pain nobody volunteers for." },
      { id: "distribution", name: "Distribution & fulfillment", what: "Boxes and supplies to businesses; packaging's role in parcel logistics", players: "Bunzl, Veritiv class distributors; Amazon's own packaging engine", valueCapture: 2,
        economics: { grossMargin: [10, 20], capitalIntensity: 2, concentration: 3 },
        linksTo: ["logistics", "ecommerce", "retail"],
        deeper: "E-commerce made packaging a logistics variable: right-sizing algorithms, frustration-free packaging mandates, and dimensional-weight pricing all push toward less material per parcel. Amazon is simultaneously the industry's biggest customer and its most aggressive packaging engineer, a customer-concentration story hiding in plain sight." },
      { id: "recovery", name: "Collection & recycling", what: "Recovered fiber, recycled resin (PCR), deposit systems, EPR schemes", players: "Waste majors, OCC dealers, PCR producers, EPR organizations", valueCapture: 3,
        economics: { grossMargin: [10, 25], capitalIntensity: 4, concentration: 3 },
        linksTo: ["waste-management"],
        deeper: "The stage regulation is turning from afterthought into chokepoint: PPWR-style recycled-content mandates (30-65% for plastics by 2030) make PCR feedstock a scarce strategic input. Food-grade recycled resin already prices above virgin at times: the recycling stream is becoming a seller's market, and packagers are integrating backward into it." }
    ]
  },

  financials: {
    businessModel: [
      "The model is spread capture on enormous volume: buy fiber, resin, or metal; convert it; sell on 1-to-3-year contracts with cost pass-through mechanisms that lag by a quarter or 3. Reported margins therefore breathe with input costs even when underlying economics are stable: falling OCC or resin fattens a year, spikes compress it, and the pass-through catches up later. Volumes are the stable part (food and beverage is half of demand and nobody stops eating), which is why packaging screens defensive within materials despite commodity inputs.",
      "Capital intensity splits by stage: mills and glass furnaces are 5-of-5 capex monsters with 40-year lives; converting is lighter and closer to the customer. The integrated fiber majors run 15-20% EBITDA margins at mid-cycle; flexible plastics converters run similar on less capital but face resin volatility and now compliance capex. The 2024-25 megadeals add a synergy layer to the story: IP-DS Smith guides to $514M+, Amcor-Berry to $650M, and delivery against those numbers (plant closures, procurement, mill optimization) is the single biggest earnings swing factor for the next 3 years."
    ],
    fingerprint: { grossMargin: 20, recurringRevenue: 75, capitalIntensity: 70, pricingPower: 45, cyclicality: 40, operatingLeverage: 55 },
    lines: [
      { label: "Volumes & box shipments", note: "The demand tape: US corrugated shipments print quarterly; e-commerce is the growth line" },
      { label: "Price-cost spread", note: "Finished prices vs OCC/resin/energy: the margin engine and the earnings-surprise machine" },
      { label: "Operating rates", note: "Mill and plant utilization: above ~95% supports hikes, below ~90% invites price wars" },
      { label: "Synergy delivery", note: "IP-DS Smith $514M+, Amcor-Berry $650M: the merger math the market is underwriting" },
      { label: "Sustainability capex & mix", note: "Recyclable redesign, PCR sourcing, fiber substitution wins: the PPWR-era P&L line" }
    ],
    unitEconomics: {
      unit: "per ton of containerboard (illustrative, US mid-cycle)",
      items: [
        { label: "Linerboard price", value: "~$800-950/ton", note: "US kraftliner, 2025 vintage trade-press ranges; moves in announced hike rounds" },
        { label: "Recovered fiber (OCC) input", value: "~$70-120/ton", note: "the swing cost; China's import bans once sent it near zero" },
        { label: "Integrated mill EBITDA", value: "~$150-250/ton", note: "mid-cycle; leverage to operating rates is fierce" },
        { label: "New machine capital cost", value: "$500M+ per machine", note: "40-year assets: why supply arrives in lumps and discipline matters" }
      ]
    }
  },

  kpiRefs: ["chem-operating-rate", "mfg-price-cost", "retail-inventory-turns"],
  kpiLocal: [
    {
      id: "pkg-box-shipments", name: "Corrugated Box Shipments", industries: ["packaging"],
      definition: "Volume of corrugated boxes shipped per period (US data published quarterly by the Fibre Box Association), the industry's cleanest real-economy demand read.",
      formula: "Shipments = billion square feet of corrugated shipped; watch year-over-year change and vs GDP",
      interpretation: "Boxes ship weeks before goods sell, making this a leading indicator for consumption and freight. The 2022-23 destocking printed the worst declines since 2009 without a consumer recession: inventory cycles can masquerade as demand collapse.",
      healthy: "Positive year-over-year growth tracking or beating GDP", warning: "Multi-quarter declines while operating rates slip below ~90%" },
    {
      id: "pkg-price-occ-spread", name: "Containerboard-OCC Spread", industries: ["packaging"],
      definition: "The gap between finished containerboard prices and the cost of recovered fiber (OCC), the core margin driver for recycled-fiber mills.",
      formula: "Spread = linerboard price per ton (trade indexes) minus OCC cost per ton",
      interpretation: "Spread expansion (price hikes sticking while OCC stays soft) is the classic packaging earnings-beat setup; compression means pass-through lag pain for 2 to 3 quarters. Follow announced hike rounds and whether trade indexes recognize them.",
      healthy: "Stable or widening spread with hikes recognized", warning: "OCC spiking while finished prices stall: margin squeeze in the pipeline" }
  ],

  health: {
    intro: "Producer health is capacity discipline and pass-through speed; converter health is customer mix and service density; everyone's health now includes a regulatory-readiness line.",
    pillars: [
      { name: "Price-cost management", weight: 25, metrics: "Spread trends, pass-through lag, hike realization", healthy: "Hikes stick within a quarter; contracts indexed", warning: "Serial failed hike rounds; 3-quarter pass-through lag" },
      { name: "Capacity discipline", weight: 20, metrics: "Operating rates, announced additions vs closures", healthy: "Rates above ~93%; closures matching new machines", warning: "Speculative capacity racing demand (the pre-1995 pattern)" },
      { name: "Volume & mix quality", weight: 20, metrics: "E-commerce share, food & beverage weighting, customer concentration", healthy: "Growing e-commerce mix on a defensive food base", warning: "Overexposure to destocking-prone or single mega-customers" },
      { name: "Balance sheet & synergy delivery", weight: 20, metrics: "Leverage post-megadeal, synergy run-rate vs guidance", healthy: "Deleveraging on plan; synergies tracking ($514M IP, $650M Amcor)", warning: "Integration slippage; leverage stuck above 3.5x" },
      { name: "Regulatory & substitution readiness", weight: 15, metrics: "PPWR-compliant portfolio share, PCR feedstock access, fiber-substitution wins", healthy: "Recyclable designs shipping; PCR locked up", warning: "Portfolio stranded against 2030 mandates" }
    ],
    scoringNote: "Packaging punishes indiscipline with a lag: today's groundbreaking is 2027's price war. Score the supply pipeline, not just the current spread."
  },

  valuation: {
    intro: "The market prices packaging as a defensive-cyclical hybrid: cheaper than staples, steadier than steel. Multiples turn on capacity discipline beliefs and, right now, on synergy credibility.",
    methods: [
      { name: "EV / EBITDA (mid-cycle)", use: "The standard lens for integrated fiber and plastics majors", avoid: "Peak-spread years flatter it; normalize the price-cost spread first", strengths: "Comparable across substrates and borders", weaknesses: "Hides where you are in the pass-through lag", range: { low: 6, high: 10, asOf: 2025, note: "fiber majors low end, flexibles and cans toward the top; synergy delivery earns rerating" } },
      { name: "FCF yield", use: "Mature mills and can makers: capex is knowable, cash is the point", avoid: "Megadeal integration years when restructuring cash muddies it", strengths: "Cuts through pass-through accounting noise", weaknesses: "Understates value during heavy sustainability-capex phases", range: { low: 6, high: 10, asOf: 2025, note: "% yields; the sector's core appeal vs staples at half the multiple" } },
      { name: "EV per ton of capacity", use: "Sanity check on mill systems vs the $500M+ cost of building new", avoid: "Applying mill metrics to converting or filling assets", strengths: "Replacement-cost anchor when earnings are cyclical", weaknesses: "A ton of discipline is worth more than a ton of capacity", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; compare implied EV/ton to newbuild cost" } },
      { name: "Sum-of-parts (substrate mix)", use: "Conglomerates spanning fiber, flexibles, and specialty lines", avoid: "Letting the fastest-growing sliver set the whole multiple", strengths: "Matches the reality that substrates trade differently", weaknesses: "Synergy and integration value falls between the parts", range: { low: 7, high: 9, asOf: 2025, note: "blended EV/EBITDA outcome for diversified majors" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a packaging major quickly: mid-cycle EBITDA times a discipline-adjusted multiple, minus net debt (mind the post-megadeal balance sheets).",
      inputs: [
        { id: "vc-ebitda", label: "Mid-cycle EBITDA ($B)", min: 0.5, max: 10, step: 0.25, value: 4, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 12, step: 0.5, value: 8, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: 0, max: 25, step: 0.5, value: 10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays packaging as defensive carry with 2 embedded options: consolidation discipline (the megamerger trio converting scale into pricing power) and regulation (PPWR-class rules moating scaled compliant players). Core the fiber majors for the e-commerce stream, own cans for stability, and treat flexibles as the synergy-execution trade. The tape to watch is box shipments and hike realization, not GDP.",
    debates: [
      { topic: "Does the megamerger wave finally fix capacity discipline?", bull: "3 deals (~$50B combined) put the corrugated and plastics supply curves in far fewer hands: Smurfit Westrock alone runs the world's largest mill-and-box system, and rational leaders close mills instead of chasing share. The 2024-25 hike rounds sticking is early proof: this is the beer-industry consolidation playbook hitting boxes.", bear: "Top 5 corrugated share is still only ~22%: this is not beer. Chinese and independent capacity keeps coming, integration is a 3-year distraction (IP is simultaneously digesting DS Smith and shedding assets), and every prior cycle's discipline promise died the moment operating rates hit 97% and someone announced a greenfield machine." },
      { topic: "Is fiber substitution a secular gift or an optics trade?", bull: "Brand owners are paying up to swap plastic for paper across mailers, trays, and cups because consumers and regulators demand it; PPWR-class rules structurally tax plastic formats. Every conversion is captive volume for fiber systems, and the e-commerce box stream (~9.5% growth) compounds on top.", bear: "Physics and lifecycle math fight back: film often carries less mass and lower transport emissions than the fiber replacing it, plastic keeps winning where barrier properties matter, and mandated recycled content actually entrenches sophisticated plastics players. Substitution is real but narrow: mistake it for a fiber supercycle and you overpay at the top." },
      { topic: "PPWR: moat or margin tax?", bull: "Compliance at scale is a competitive weapon: the majors can fund recyclable redesign, lock up scarce PCR feedstock, and absorb testing and labeling costs that crush small converters. Regulation accelerates consolidation and hands share to whoever is ready by August 2026.", bear: "The same rules mandate packaging minimization, reuse quotas, and empty-space limits: the EU is legislating fewer units and less material per unit, which is deflation for everyone. Compliance capex earns no return if the end state is structurally smaller European packaging demand." }
    ],
    cycle: {
      where: "Early-to-mid recovery: the 2022-23 destocking bust (the worst box-shipment declines since 2009) has washed out, hike rounds are being tested, and the megamerger trio is in integration year 1: spreads and synergy delivery, not volumes, will set the next leg.",
      drivers: "Consumer goods volumes, e-commerce penetration, OCC and resin input costs, containerboard capacity additions vs closures, and the PPWR implementation clock (applies August 2026).",
      leads: [
        "US corrugated box shipments (Fibre Box Association quarterly releases, free)",
        "Industrial production: paperboard containers (FRED series, free)",
        "OCC recovered-paper price direction (trade press summaries; FRED PPI wastepaper, free)",
        "Retail inventories-to-sales ratio (Census via FRED, free): the destocking early-warning",
        "Announced containerboard price-hike rounds and whether trade indexes recognize them"
      ]
    },
    exposure: [
      { vehicle: "Smurfit Westrock", note: "The scale thesis purest: world's largest box system, listed post-merger in New York" },
      { vehicle: "International Paper", note: "The turnaround-plus-integration trade: DS Smith synergies ($514M+) against portfolio surgery" },
      { vehicle: "Amcor", note: "Flexibles consolidation: $650M Berry synergies and the PPWR-compliance option in plastics" },
      { vehicle: "Metal cans (Ball, Crown class)", note: "The disciplined substrate: 2-to-3-player regional oligopolies, beverage-tied stability" },
      { vehicle: "Packaging distributors (Bunzl class)", note: "Asset-light compounding on the industry's fragmented last mile" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "Price-cost spread commentary, synergy run-rates, and volume guidance: the sector's tape" },
      { when: "Price-hike announcement rounds (episodic)", what: "Whether hikes stick and indexes recognize them: the discipline referendum" },
      { when: "August 2026", what: "PPWR begins applying across the EU: compliance winners and stranded portfolios start separating" },
      { when: "2026-2027", what: "Megadeal synergy deadlines: IP-DS Smith and Amcor-Berry either deliver the promised $1.1B+ combined or rerate down" }
    ],
    data: [
      { series: "Fibre Box Association box shipments", source: "fibrebox.org quarterly releases (free summaries)", why: "The demand tape for corrugated" },
      { series: "Industrial production: paperboard containers", source: "FRED (free)", why: "Monthly volume proxy, long history" },
      { series: "PPI: corrugated boxes and wastepaper", source: "FRED / BLS (free)", why: "Price and input-cost direction for the spread" },
      { series: "Retail inventories-to-sales ratio", source: "Census via FRED (free)", why: "Destocking cycles hit boxes before anything else" },
      { series: "EU PPWR implementation acts", source: "European Commission environment pages (free)", why: "The regulatory clock: primary source" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Volumes dip low-single-digit (food and beverage carries half of demand); watch destocking amplify the print. Historically among the shallowest materials drawdowns: buy the box-shipment trough." },
      { regime: "Oil/resin spike", behavior: "Flexibles margins compress for 2-3 quarters until pass-through catches up; fiber names relatively advantaged. Own the substrate the input shock is not in." },
      { regime: "Rates rising", behavior: "Post-megadeal balance sheets feel it: deleveraging paths slow, and EV/ton support matters more. Cans and distributors (lighter capital) hold best." },
      { regime: "Regulatory acceleration", behavior: "PPWR-style rules spreading (US EPR states, Asia) rewards scaled compliant portfolios and PCR access; short stranded single-use formats, long the redesign winners." }
    ]
  },

  players: [
    { name: "Smurfit Westrock", role: "Global corrugated leader", country: "IE", real: true, note: "July 2024 combination: ~$34B revenue, world's largest containerboard and box system" },
    { name: "International Paper", role: "Fiber major, integrating DS Smith", country: "US", real: true, note: "Closed the ~$7.2B DS Smith deal January 2025; $514M+ synergy target" },
    { name: "Amcor", role: "Flexible & rigid plastics giant", country: "CH", real: true, note: "Closed Berry Global April 2025 ($8.4B announced, $10.4B final consideration); $650M synergies" },
    { name: "Ball", role: "Aluminum beverage cans", country: "US", real: true, note: "The can oligopoly's anchor; infinitely-recyclable-aluminum thesis" },
    { name: "Crown Holdings", role: "Metal packaging", country: "US", real: true, note: "Beverage and food cans plus transit packaging: the disciplined substrate" },
    { name: "Tetra Pak", role: "Aseptic cartons", country: "CH", real: true, note: "Private (Tetra Laval): razor-and-blade filling systems locked into dairies for decades" },
    { name: "Mondi", role: "European fiber & flexibles", country: "GB", real: true, note: "Kraft paper and packaging spanning the fiber-substitution frontier" },
    { name: "Nine Dragons Paper", role: "China containerboard heavyweight", country: "CN", real: true, note: "The capacity variable outside the Western consolidation story" }
  ],

  geography: [
    { country: "US", role: "Largest single market; fiber mill heartland", note: "Home of IP, Smurfit Westrock's US system, Ball, Crown; box shipments are the sector's global tape" },
    { country: "CN", role: "Largest volume market and capacity wildcard", note: "Nine Dragons class mills; its 2018-21 waste-import bans rewired global recovered fiber" },
    { country: "DE", role: "Packaging machinery and engineering", note: "Krones class filling and converting lines: the industry's toolmakers" },
    { country: "GB", role: "Fiber packaging and distribution", note: "Mondi, Bunzl, and the DS Smith legacy now inside International Paper" },
    { country: "IE", role: "Corporate home of the corrugated champion", note: "Smurfit Westrock's Dublin roots atop a global mill network" },
    { country: "SE", role: "Nordic fiber innovation", note: "Tetra Pak's birthplace and the renewable-materials lab (Billerud class) for fiber substitution" }
  ],

  cycles: [
    { year: 1995, title: "The linerboard collapse", kind: "bust", text: "A mid-1990s capacity binge meets slowing demand; linerboard prices crater and take a decade of returns with them. Lesson: in lumpy-capacity industries, today's groundbreaking is tomorrow's price war." },
    { year: 2009, title: "The GFC volume shock", kind: "bust", text: "Box shipments post their worst declines in decades as trade and retail freeze; survivors close mills and consolidate. Lesson: packaging is defensive, not immune: it is a levered play on things moving." },
    { year: 2018, title: "China's waste ban", kind: "shift", text: "Beijing bans imported mixed recyclables, stranding the West's recovered fiber and crushing OCC prices. Lesson: a policy decision in one capital can reprice a global input chain overnight." },
    { year: 2021, title: "The COVID box mania", kind: "boom", text: "Locked-down consumers move life online; box demand and containerboard prices hit records and mills run flat out. Lesson: demand pulled forward is demand borrowed: the destocking bill arrives later." },
    { year: 2024, title: "The megamerger reset", kind: "shift", text: "Smurfit-WestRock closes (July 2024), then IP-DS Smith (~$7.2B, January 2025) and Amcor-Berry ($8.4B announced, April 2025 close): ~$50B of consolidation in 10 months. Lesson: busts write the merger papers that booms then have to justify." }
  ],

  risks: [
    { name: "Capacity indiscipline returns", severity: 4, likelihood: 3, transmission: "New machines announced at the peak -> operating rates slip below ~90% -> failed hike rounds -> spread compression across every fiber name (the 1995 template)." },
    { name: "Input cost squeeze", severity: 3, likelihood: 4, transmission: "OCC, resin, or energy spikes -> pass-through lags 2-3 quarters -> margin misses cluster -> defensives derate just as they are owned for safety." },
    { name: "Megadeal integration failure", severity: 3, likelihood: 3, transmission: "Synergies slip ($514M IP, $650M Amcor targets) -> leverage stays high into a soft patch -> forced disposals and the consolidation-discipline thesis unwinds." },
    { name: "Regulatory demand destruction", severity: 3, likelihood: 3, transmission: "PPWR minimization, reuse quotas, and empty-space rules -> fewer units and less material per unit in Europe -> compliance capex chases structurally smaller demand." },
    { name: "Customer concentration & substitution whiplash", severity: 3, likelihood: 2, transmission: "Mega-customers (Amazon class) re-engineer packaging out -> right-sizing and mailer substitution cut corrugated square footage per parcel -> volume growth decouples from parcel growth." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Packaging is the $1.2T business of making the boxes, bottles, cans, films, and cartons that nearly everything is sold in. It grows a little faster than the economy (every online order needs a box), and its companies make money on the gap between what raw paper, plastic, or metal costs and what the finished package sells for. It is one of the steadiest industries in materials because half of all packaging wraps food and drink, and people never stop buying those."] },
    L2: { title: "Intermediate", text: ["The industry splits by substrate: fiber (corrugated boxes: the biggest slice, ~$225B), plastics (films and rigid containers), metal cans, and glass. Margins live in the price-cost spread: input costs pass through contracts with a 3-to-9-month lag, so earnings surprises are usually timing, not demand. Two forces dominate the story: e-commerce (packaging demand ~$75B, growing ~9.5% a year) and regulation (the EU's PPWR requires all packaging to be recyclable or reusable by 2030, with 30-65% recycled content in plastics). And the map just changed: Smurfit-WestRock, IP-DS Smith (~$7.2B), and Amcor-Berry ($8.4B announced) consolidated the industry in under a year."] },
    L3: { title: "Advanced", text: ["Analyze by stage and substrate: mills and furnaces are lumpy-capacity businesses where operating rates above ~95% support price hikes and below ~90% invite wars; converting is the customer-facing, service-dense layer; recovery is the emerging chokepoint as recycled-content mandates make PCR feedstock strategic. Track the containerboard-OCC spread, box shipments (a leading indicator that ships before goods sell), and hike-round realization. The 2022-23 destocking taught the key nuance: inventory cycles can print recession-grade volume declines without a consumer recession: read the retail inventories-to-sales ratio before calling demand."] },
    L4: { title: "Expert", text: ["The live debates: whether ~$50B of megamergers finally fixes capacity discipline (top 5 corrugated share is still only ~22%: this is not a true oligopoly yet), whether fiber substitution is a secular volume gift or an optics trade that lifecycle math eventually checks, and whether PPWR is a moat for scaled compliant players or legislated demand destruction (minimization and reuse quotas shrink units). Trade the synergy clocks: IP-DS Smith ($514M+) and Amcor-Berry ($650M) either deliver by 2026-27 or the consolidation premium unwinds. Watch China: Nine Dragons capacity and policy moves sit outside the Western discipline story entirely."] },
    L5: { title: "Institutional", text: ["Allocator's frame: packaging is defensive carry inside materials: staples-adjacent volumes at half the staples multiple, with FCF yields of 6-10% funding buybacks and megadeal deleveraging. The alpha is in 2 embedded options the market prices lazily: consolidation discipline (does the new Big 3 behave like an oligopoly before it technically is one) and regulatory bifurcation (PPWR-ready portfolios taking share from stranded ones after August 2026). Size fiber for the e-commerce stream, cans for ballast, flexibles for synergy execution: and remember the sector's oldest rule: the cycle is made in the capacity announcements, not the demand line."] }
  },

  quiz: [
    { q: "The global packaging market in 2025 is roughly:", choices: ["$100B", "$1.2T, growing ~3.5% a year", "$10T", "$50B"], answer: 1, explain: "A ~$1.2T toll on global consumption, compounding a touch above GDP: corrugated alone is ~$225B of it." },
    { q: "Packaging margins primarily come from:", choices: ["Patent royalties", "The spread between finished prices and input costs (fiber, resin, metal), passed through with a lag", "Advertising", "Government subsidies"], answer: 1, explain: "Price-cost spread is the margin engine: pass-through lags of 3 to 9 months make earnings surprises a timing story." },
    { q: "The 2024-25 megamerger wave included:", choices: ["Only small bolt-ons", "Smurfit-WestRock, International Paper-DS Smith (~$7.2B), and Amcor-Berry ($8.4B announced)", "A Boeing acquisition", "No major deals"], answer: 1, explain: "Roughly $50B of consolidation closed in about 10 months, rewriting the fiber and plastics supply curves." },
    { q: "E-commerce matters to packaging because:", choices: ["It reduces demand", "Every parcel is a box: e-commerce packaging (~$75B) grows ~9.5% a year, nearly 3x the industry rate", "It only affects glass", "Shipping is free"], answer: 1, explain: "Online retail converts store sales into corrugated demand: the industry's structural growth stream." },
    { q: "The EU's PPWR requires that by 2030:", choices: ["All packaging be plastic", "All packaging be recyclable or reusable, with 30-65% recycled content in plastics", "Packaging be banned", "Only glass be used"], answer: 1, explain: "Regulation (EU) 2025/40 applies from August 2026: recyclability mandates, recycled-content floors, and reuse quotas turn design into compliance." },
    { q: "Containerboard mills invite price wars when:", choices: ["Demand rises", "Operating rates slip below roughly 90%", "OCC gets cheap", "Boxes get bigger"], answer: 1, explain: "Supply arrives in $500M+ 40-year lumps: high utilization supports hikes, slack capacity has always broken discipline (the 1995 lesson)." },
    { q: "The 2022-23 box-shipment slump mainly reflected:", choices: ["A consumer depression", "Destocking: retailers burning off COVID-era inventory, printing recession-grade declines without a consumer recession", "A fiber shortage", "New regulation"], answer: 1, explain: "The worst declines since 2009 were an inventory cycle in disguise: watch the inventories-to-sales ratio before calling demand." },
    { q: "Recycled-content mandates make which input newly strategic?", choices: ["Virgin oil", "Post-consumer recycled (PCR) feedstock: food-grade recycled resin can price above virgin", "Gold", "Helium"], answer: 1, explain: "Mandated demand meets limited quality supply: the recovery stage is turning from afterthought into chokepoint, and majors are integrating backward into it." }
  ],

  sources: [
    { name: "Smithers, The Future of Global Packaging to 2030", url: "https://www.smithers.com/services/market-reports/packaging/the-future-of-global-packaging-to-2030", feeds: "market size, growth" },
    { name: "Amcor: completion of Berry Global combination (Apr 2025)", url: "https://www.amcor.com/media/news/amcor-completes-combination-with-berry-global", feeds: "M&A, synergies" },
    { name: "International Paper: DS Smith acquisition completed (Jan 2025)", url: "https://www.prnewswire.com/news-releases/international-paper-completes-acquisition-of-ds-smith-302365680.html", feeds: "M&A, synergies" },
    { name: "European Commission: Packaging & Packaging Waste Regulation", url: "https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste/packaging-packaging-waste-regulation_en", feeds: "regulation" }
  ]
};
