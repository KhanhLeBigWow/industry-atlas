/* Industry Atlas - company profiles.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Each record powers company.html?id=<id>: business model, demand side,
 * supply side, and capital flows in/out. Keyed lookups; industries[] links
 * back to taxonomy ids and drives "featured players" on industry pages. */
window.ATLAS_COMPANIES = {

  /* ================= semiconductors ================= */
  "tsmc": {
    id: "tsmc", name: "TSMC", full: "Taiwan Semiconductor Manufacturing Co.", country: "TW",
    industries: ["semiconductors"], role: "Pure-play foundry #1", founded: 1987, hq: "Hsinchu, Taiwan",
    stats: [{ label: "Revenue", value: "$88B", note: "2024" }, { label: "Foundry share", value: "~60%", note: "~90% at leading edge" }, { label: "Gross margin", value: "~56%", note: "2024" }, { label: "Capex", value: "$30B+", note: "annual" }],
    model: [
      "TSMC manufactures chips designed by others, and only that. The pure-play foundry model means it never competes with its customers, which is why every fabless company on Earth trusts it with their crown jewels. Revenue = wafers shipped × price per wafer, with leading-edge wafers (~$18,000 to $20,000) carrying most of the profit.",
      "The economics are utilization-driven: fabs are nearly all fixed cost, so high loadings convert ~56% gross margins into ~45% operating margins. Customers co-fund the roadmap through prepayments and long-term agreements, effectively financing the $30B+ annual capex that keeps TSMC 2 to 3 years ahead of any rival."
    ],
    customers: [
      { who: "Apple", note: "largest customer, ~25% of revenue; first on every new node", share: "~25%" },
      { who: "NVIDIA, AMD, Qualcomm, Broadcom", note: "the fabless majors; AI accelerators now the growth engine" },
      { who: "Intel (partially)", note: "even the old rival outsources some tiles" },
      { who: "Automotive & industrial designers", note: "long-lifecycle chips on mature nodes" }
    ],
    suppliers: [
      { who: "ASML", note: "EUV and DUV lithography; no alternative exists" },
      { who: "Applied Materials, Lam, TEL, KLA", note: "deposition, etch, metrology fleets" },
      { who: "Shin-Etsu, SUMCO", note: "ultra-pure 300mm wafers" },
      { who: "JSR, Air Liquide", note: "photoresists and specialty gases" },
      { who: "Taiwan's grid and water system", note: "a fab cluster consumes a city's utilities" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$60B+ a year funds most of the machine" },
      { source: "Customer prepayments", note: "Apple-class customers reserve capacity with cash" },
      { source: "Government subsidies", note: "US CHIPS, Japan, EU grants for overseas fabs" },
      { source: "Bond markets", note: "modest debt; fortress balance sheet" }
    ],
    capitalOut: [
      { use: "Capex $30B+ / year", note: "new fabs in Taiwan, Arizona, Kumamoto, Dresden" },
      { use: "R&D ~8% of revenue", note: "the 2nm-and-beyond roadmap" },
      { use: "Dividends", note: "steadily rising payout to shareholders" }
    ],
    revenueMix: [
      { label: "Advanced (7nm and below)", pct: 69 }, { label: "Mature nodes", pct: 25 }, { label: "Other platforms", pct: 6 }
    ],
    moat: "Process leadership + ecosystem trust + scale: the only company that can make the best chips, at volume, for everyone, without competing with anyone.",
    risks: "Taiwan geopolitical concentration; overseas fabs cost 20% to 40% more; customer concentration (Apple).",
    competitors: ["samsung", "intel-like rivals (Samsung Foundry, Intel Foundry)"]
  },

  "nvidia": {
    id: "nvidia", name: "NVIDIA", full: "NVIDIA Corporation", country: "US",
    industries: ["semiconductors", "ai"], role: "AI accelerator leader", founded: 1993, hq: "Santa Clara, USA",
    stats: [{ label: "Revenue", value: "$130B", note: "FY2025 (calendar 2024)" }, { label: "Data center share", value: "~88%", note: "of revenue" }, { label: "Gross margin", value: "~75%", note: "" }, { label: "R&D", value: "$12B+", note: "annual" }],
    model: [
      "NVIDIA designs GPUs and the software that makes them indispensable, then outsources every wafer. The genius is the ecosystem: CUDA, the 18-year-old programming platform, means the world's AI code runs best (often only) on NVIDIA silicon, converting a chip company into a platform company with 75% gross margins.",
      "The AI buildout made it the arms dealer of the era: hyperscalers, sovereigns, and enterprises queue for allocations of each generation (Hopper, Blackwell), often prepaying. Fabless means capex stays tiny while TSMC and SK Hynix carry the factories, letting extraordinary margins flow to free cash flow."
    ],
    customers: [
      { who: "Microsoft, Meta, Amazon, Google", note: "hyperscalers are ~40%+ of revenue between them", share: "~40%+" },
      { who: "AI labs & GPU clouds", note: "OpenAI-class labs, CoreWeave-class neoclouds" },
      { who: "Sovereign AI programs", note: "national compute buildouts, export rules permitting" },
      { who: "Enterprises, gamers, automakers", note: "the original businesses continue underneath" }
    ],
    suppliers: [
      { who: "TSMC", note: "all leading-edge manufacturing and CoWoS packaging" },
      { who: "SK Hynix, Micron, Samsung", note: "HBM memory stacks, the co-limiting input" },
      { who: "Networking & board partners", note: "its own Mellanox networking is now internal" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "$60B+ annually at AI-era margins" },
      { source: "Customer prepayments/commitments", note: "demand visibility years ahead" },
      { source: "Equity markets", note: "no meaningful raise needed; the market cap is the option pool" }
    ],
    capitalOut: [
      { use: "R&D $12B+", note: "next architectures, networking, software" },
      { use: "Buybacks (tens of $B)", note: "the main capital-return channel" },
      { use: "Supply prepayments", note: "reserving TSMC and HBM capacity" },
      { use: "Strategic investments", note: "stakes across the AI ecosystem" }
    ],
    revenueMix: [
      { label: "Data center", pct: 88 }, { label: "Gaming", pct: 9 }, { label: "Pro viz + auto", pct: 3 }
    ],
    moat: "CUDA software lock-in + fastest architecture cadence + supply relationships. Competitors fight the chip; the moat is the decade of code.",
    risks: "Customer concentration and custom-silicon substitution; export controls; AI capex cycle risk.",
    competitors: ["AMD", "custom hyperscaler silicon (TPU, Trainium)", "Huawei (in China)"]
  },

  "asml": {
    id: "asml", name: "ASML", full: "ASML Holding N.V.", country: "NL",
    industries: ["semiconductors"], role: "Lithography monopoly", founded: 1984, hq: "Veldhoven, Netherlands",
    stats: [{ label: "Revenue", value: "€28B", note: "2024" }, { label: "EUV share", value: "100%", note: "sole producer" }, { label: "Backlog", value: "€36B+", note: "" }, { label: "EUV price", value: "€180M to €380M", note: "per machine" }],
    model: [
      "ASML makes the machines that make chips possible: it is the only company on Earth producing EUV lithography, the light-printing technology every advanced chip requires. A high-NA EUV machine has 100,000+ parts, costs up to €380M, and ships in 3 aircraft. Monopoly is not a metaphor here; it is the product spec.",
      "The model compounds twice: system sales (the machines) plus an installed-base annuity (service, upgrades, spares) approaching 25%+ of revenue that grows with every machine ever shipped. Customers fund development years ahead through framework agreements because their roadmaps die without ASML's."
    ],
    customers: [
      { who: "TSMC", note: "the biggest buyer of EUV", share: "~40% of system sales" },
      { who: "Samsung & SK Hynix", note: "logic and memory litho fleets" },
      { who: "Intel", note: "first buyer of high-NA EUV" },
      { who: "Chinese fabs (DUV only)", note: "export rules cap what can ship east" }
    ],
    suppliers: [
      { who: "Carl Zeiss SMT", note: "the mirrors: co-monopoly optics, part-owned by ASML" },
      { who: "Cymer (owned)", note: "the EUV light source" },
      { who: "5,000+ European suppliers", note: "a continent-wide precision network" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "monopoly economics fund everything" },
      { source: "Customer co-investment", note: "TSMC, Samsung, Intel funded EUV R&D in 2012" },
      { source: "EU strategic backing", note: "the crown jewel of European tech policy" }
    ],
    capitalOut: [
      { use: "R&D €4B+", note: "high-NA and beyond; hyper-NA on the whiteboard" },
      { use: "Dividends + buybacks", note: "consistent shareholder returns" },
      { use: "Supplier ecosystem investment", note: "Zeiss capacity, supply-chain stakes" }
    ],
    revenueMix: [
      { label: "EUV systems", pct: 38 }, { label: "DUV systems", pct: 34 }, { label: "Service & upgrades", pct: 28 }
    ],
    moat: "A literal monopoly protected by 40 years of accumulated physics, a co-monopoly optics partner, and export-control walls. Rebuilding it would take a decade and $100B+, and still probably fail.",
    risks: "Export-control whiplash on China revenue; customer capex cycles; single-source supply chain of its own.",
    competitors: ["None in EUV; Nikon/Canon in legacy DUV niches"]
  },

  "samsung": {
    id: "samsung", name: "Samsung Electronics", full: "Samsung Electronics Co.", country: "KR",
    industries: ["semiconductors", "consumer-electronics"], role: "Memory #1 + foundry challenger", founded: 1969, hq: "Suwon, South Korea",
    stats: [{ label: "Revenue", value: "~$220B", note: "2024, all divisions" }, { label: "DRAM share", value: "~40%", note: "world #1" }, { label: "Phones", value: "#1 by units", note: "with Apple by value" }, { label: "Capex", value: "$40B+", note: "mostly chips" }],
    model: [
      "Samsung is three giants in a trench coat: the world's largest memory maker (DRAM and NAND), a top-2 phone maker, and the only serious foundry challenger to TSMC. Vertical integration is the strategy: it makes the chips, screens, and batteries inside its own devices, and sells the same components to rivals including Apple.",
      "Memory drives the cycle: commodity pricing swings mean the semiconductor division can earn $40B one year and near zero two years later. The conglomerate structure smooths this with steadier phones and displays, funding counter-cyclical capex that has buried weaker memory rivals in every downturn since the 1990s."
    ],
    customers: [
      { who: "Hyperscalers & AI builders", note: "HBM and server memory demand" },
      { who: "Apple and rival OEMs", note: "buy Samsung screens and memory even as they compete" },
      { who: "Consumers worldwide", note: "~220M phones a year" },
      { who: "Foundry clients", note: "Qualcomm-class designers seeking a TSMC alternative" }
    ],
    suppliers: [
      { who: "ASML, Applied Materials, TEL", note: "the same equipment oligopoly as everyone" },
      { who: "Japanese materials firms", note: "resists and wafers; a 2019 export spat proved the dependence" },
      { who: "Its own component divisions", note: "vertical integration inside the trench coat" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "the conglomerate's internal capital market" },
      { source: "Korean policy support", note: "chips are national strategy in Seoul" },
      { source: "Bond and equity markets", note: "rarely needed; net cash fortress" }
    ],
    capitalOut: [
      { use: "Capex $40B+", note: "memory fabs (Pyeongtaek) + US foundry (Taylor, TX)" },
      { use: "R&D $20B+", note: "across chips, devices, displays" },
      { use: "Dividends", note: "governed by 3-year shareholder-return programs" }
    ],
    revenueMix: [
      { label: "Devices & phones", pct: 42 }, { label: "Semiconductors", pct: 35 }, { label: "Displays & other", pct: 23 }
    ],
    moat: "Scale and vertical integration in memory: lowest cost per bit, counter-cyclical balance sheet, and the nerve to spend through every trough.",
    risks: "Memory cyclicality; HBM race trailing SK Hynix; foundry yields trailing TSMC; governance discount.",
    competitors: ["sk-hynix (memory)", "tsmc (foundry)", "Apple (devices)"]
  },

  /* ================= cloud ================= */
  "amazon": {
    id: "amazon", name: "Amazon (AWS)", full: "Amazon.com, Inc.", country: "US",
    industries: ["cloud", "ecommerce"], role: "Cloud #1 + everything store", founded: 1994, hq: "Seattle, USA",
    stats: [{ label: "Revenue", value: "$638B", note: "2024, all Amazon" }, { label: "AWS revenue", value: "$108B", note: "2024, ~+19%" }, { label: "AWS op margin", value: "~37%", note: "most of Amazon's profit" }, { label: "Capex", value: "$75B+", note: "2024, AI-led" }],
    model: [
      "Amazon runs two intertwined machines. AWS rents computing at hyperscale: ~$108B of high-margin recurring revenue that generates most of Amazon's operating income. Retail runs near break-even by design, converting scale into low prices, Prime lock-in, and a $56B advertising business that is almost pure margin.",
      "The financial signature is reinvestment: five decades' worth of capex compressed into each year ($75B+ in 2024, accelerating for AI datacenters). Cash flows from the profitable layers (AWS, ads, subscriptions) perpetually fund the next infrastructure layer, which then becomes a product (fulfillment became FBA; servers became AWS)."
    ],
    customers: [
      { who: "Startups to enterprises to governments", note: "AWS serves millions of accounts; multi-year committed contracts" },
      { who: "AI labs (Anthropic partnership)", note: "training and inference workloads on Trainium and NVIDIA fleets" },
      { who: "300M+ consumers", note: "retail + Prime subscriptions" },
      { who: "2M+ marketplace sellers", note: "who pay fulfillment, referral, and ad fees" }
    ],
    suppliers: [
      { who: "NVIDIA + own silicon (Graviton, Trainium)", note: "the AI capex bill" },
      { who: "Utilities and power developers", note: "gigawatt PPAs, nuclear deals" },
      { who: "Manufacturers and brands worldwide", note: "retail inventory" },
      { who: "Delivery and logistics networks", note: "increasingly its own" }
    ],
    capitalIn: [
      { source: "Operating cash flow ~$110B+", note: "the engine that funds everything" },
      { source: "Bond markets", note: "cheap term debt for infrastructure" },
      { source: "Marketplace float", note: "sellers are paid after customers pay Amazon" }
    ],
    capitalOut: [
      { use: "Capex $75B+ (AI datacenters)", note: "the biggest private infrastructure program on Earth" },
      { use: "Content & devices", note: "Prime Video, Alexa ecosystem" },
      { use: "R&D at giant scale", note: "reported inside 'technology and infrastructure'" }
    ],
    revenueMix: [
      { label: "North America retail", pct: 61 }, { label: "AWS", pct: 17 }, { label: "International", pct: 22 }
    ],
    moat: "Scale economies shared: every efficiency becomes lower prices or a new rentable service. AWS adds switching costs measured in re-architecture years.",
    risks: "AI capex-to-revenue timing; antitrust pressure on marketplace + logistics bundle; retail margin fragility.",
    competitors: ["microsoft (Azure)", "Google Cloud", "Walmart, Shopify (retail)"]
  },

  "microsoft": {
    id: "microsoft", name: "Microsoft", full: "Microsoft Corporation", country: "US",
    industries: ["cloud", "saas", "ai"], role: "Enterprise cloud + AI challenger", founded: 1975, hq: "Redmond, USA",
    stats: [{ label: "Revenue", value: "$245B", note: "FY2024" }, { label: "Cloud revenue", value: "$135B+", note: "Microsoft Cloud run-rate" }, { label: "Op margin", value: "~45%", note: "the enterprise machine" }, { label: "Capex", value: "$55B+", note: "AI datacenters" }],
    model: [
      "Microsoft sells the software layer of work itself: Windows, Office/365, Teams, GitHub, and the Azure cloud underneath them. The enterprise agreement is the masterstroke: one negotiated contract covering productivity, security, and cloud, renewed for decades, with each product cross-selling the next. Result: 45% operating margins at a quarter-trillion scale.",
      "The OpenAI partnership converted Microsoft into the AI era's enterprise default: Copilots monetize AI per seat on top of 365, while Azure sells the underlying compute to everyone else. Capital flows mirror the strategy: $55B+ of datacenter capex funded by the most reliable cash flow in software."
    ],
    customers: [
      { who: "Enterprises & governments", note: "effectively all of the Fortune 500 via enterprise agreements" },
      { who: "Developers", note: "GitHub, VS Code, Azure services" },
      { who: "OpenAI", note: "customer, supplier, and investee simultaneously" },
      { who: "Consumers & gamers", note: "Windows, Xbox, Game Pass, Activision catalog" }
    ],
    suppliers: [
      { who: "NVIDIA + own silicon (Maia, Cobalt)", note: "the AI fleet" },
      { who: "OpenAI", note: "frontier models licensed into every product" },
      { who: "Power utilities", note: "including restarting Three Mile Island's reactor" },
      { who: "OEM partners", note: "Dell, Lenovo, HP carry Windows to market" }
    ],
    capitalIn: [
      { source: "Operating cash flow ~$120B", note: "software margins at cloud scale" },
      { source: "Bond markets", note: "AAA-adjacent borrowing when useful" }
    ],
    capitalOut: [
      { use: "Capex $55B+", note: "AI datacenters and power deals" },
      { use: "Dividends + buybacks ~$40B/yr", note: "one of the largest return programs anywhere" },
      { use: "M&A", note: "Activision $69B, LinkedIn, GitHub, Nuance" },
      { use: "OpenAI investment ~$13B", note: "the defining strategic bet" }
    ],
    revenueMix: [
      { label: "Intelligent Cloud (Azure)", pct: 43 }, { label: "Productivity (365, LinkedIn)", pct: 32 }, { label: "Personal computing + gaming", pct: 25 }
    ],
    moat: "Enterprise distribution and switching costs: identity (Entra), data (SharePoint/Teams), and now AI copilots all welded into one renewal.",
    risks: "AI monetization vs capex pace; OpenAI relationship complexity; regulatory scrutiny of bundling.",
    competitors: ["amazon (AWS)", "Google", "Salesforce, ServiceNow (apps)"]
  },

  /* ================= banking ================= */
  "jpmorgan": {
    id: "jpmorgan", name: "JPMorgan Chase", full: "JPMorgan Chase & Co.", country: "US",
    industries: ["banking", "investment-banking", "capital-markets"], role: "The fortress universal bank", founded: 1799, hq: "New York, USA",
    stats: [{ label: "Revenue", value: "$180B", note: "2024 managed" }, { label: "Net income", value: "$58B", note: "2024, US record" }, { label: "Assets", value: "$4.0T", note: "largest US bank" }, { label: "CET1", value: "~15%", note: "fortress buffer" }],
    model: [
      "JPMorgan runs every banking business at #1 or #2 scale: consumer deposits and cards (Chase), corporate lending, the top investment bank by fees, a top markets desk, custody, and a $3T+ asset manager. The model is the diversified flywheel: cheap deposits fund assets, scale funds technology ($17B a year), and each franchise feeds clients to the next.",
      "Earnings stack two engines: net interest income (~$93B in 2024: deposit franchise × rates) and fees (investment banking, trading, asset management). The 'fortress balance sheet' doctrine (excess capital, conservative reserving) means it profits from crises twice: surviving them, then buying the wreckage (Bear Stearns, WaMu, First Republic)."
    ],
    customers: [
      { who: "80M+ US consumers", note: "deposits, cards (#1 issuer), mortgages" },
      { who: "Corporations & sponsors", note: "lending, treasury, M&A advice, IPOs" },
      { who: "Institutional investors", note: "markets, custody, prime brokerage" },
      { who: "Governments", note: "bond dealing, payments infrastructure" }
    ],
    suppliers: [
      { who: "Depositors ($2.4T)", note: "the raw material: cheap, sticky funding" },
      { who: "Wholesale markets", note: "bonds, repo when needed" },
      { who: "Technology vendors + 60K technologists", note: "$17B/yr; the bank is a tech firm with a license" }
    ],
    capitalIn: [
      { source: "Deposits $2.4T", note: "the franchise itself" },
      { source: "Retained earnings", note: "the main capital engine" },
      { source: "Debt & preferred issuance", note: "TLAC and capital stack layers" }
    ],
    capitalOut: [
      { use: "Loans & securities", note: "the asset side: consumers, corporates, Treasuries" },
      { use: "Dividends + buybacks ~$30B+/yr", note: "regulator-gated returns" },
      { use: "Technology $17B/yr", note: "the moat maintenance bill" },
      { use: "Acquisitions in stress", note: "First Republic 2023, the classic pattern" }
    ],
    revenueMix: [
      { label: "Net interest income", pct: 52 }, { label: "Markets & IB fees", pct: 27 }, { label: "Asset mgmt + other fees", pct: 21 }
    ],
    moat: "Scale across every franchise + the deposit base + a risk culture that has out-survived every rival since 2008.",
    risks: "Credit cycle (cards, CRE); rate path compressing NIM; being systemically important means being politically visible.",
    competitors: ["Bank of America", "Goldman Sachs (IB)", "Citi, Wells Fargo"]
  },

  "berkshire": {
    id: "berkshire", name: "Berkshire Hathaway", full: "Berkshire Hathaway Inc.", country: "US",
    industries: ["insurance", "asset-management"], role: "The float machine", founded: 1965, hq: "Omaha, USA",
    stats: [{ label: "Revenue", value: "$371B", note: "2024" }, { label: "Insurance float", value: "~$170B", note: "cost below zero most years" }, { label: "Cash pile", value: "$330B+", note: "record, 2024-25" }, { label: "Equity portfolio", value: "$270B+", note: "Apple-heavy" }],
    model: [
      "Berkshire is the insurance business model taken to its logical conclusion: underwrite with discipline (GEICO, National Indemnity, reinsurance), hold the float (~$170B of premiums not yet paid as claims), and invest it in whole companies and stocks instead of bonds. When underwriting profits, the float is a negative-cost, permanent leverage no bank could ever offer.",
      "Around the insurance core sits a conglomerate: BNSF railroad, Berkshire Hathaway Energy, manufacturing and services. Each subsidiary sends its cash to Omaha, where two people allocate it with no committee, no strategy department, and a 60-year record. The current $330B cash pile is the model's honesty: when nothing is cheap, Berkshire simply waits."
    ],
    customers: [
      { who: "Auto policyholders (GEICO)", note: "~28M policies; direct model, no agents" },
      { who: "Carriers buying reinsurance", note: "National Indemnity takes cat risk few others can hold" },
      { who: "Shippers (BNSF)", note: "freight across the American West" },
      { who: "Utility customers", note: "regulated returns at BH Energy" }
    ],
    suppliers: [
      { who: "Claims networks & repair shops", note: "the insurance cost side" },
      { who: "Capital markets", note: "as a buyer: Berkshire is the market's buyer of last resort" },
      { who: "Subsidiary supply chains", note: "rail equipment, energy infrastructure" }
    ],
    capitalIn: [
      { source: "Insurance float ~$170B", note: "grows with disciplined underwriting" },
      { source: "Subsidiary earnings", note: "~$47B operating earnings (2024) upstreamed" },
      { source: "Dividends from equities", note: "Apple, banks, oil majors" }
    ],
    capitalOut: [
      { use: "Whole-company acquisitions", note: "when price and quality align (rarely)" },
      { use: "Public equities", note: "concentrated, decade-horizon stakes" },
      { use: "Buybacks", note: "when Berkshire itself is the cheapest thing available" },
      { use: "Never dividends", note: "the famous exception in corporate America" }
    ],
    revenueMix: [
      { label: "Insurance & reinsurance", pct: 26 }, { label: "BNSF + energy", pct: 18 }, { label: "Manufacturing, service, retail", pct: 56 }
    ],
    moat: "Permanent capital + underwriting discipline + a culture where subsidiaries never get sold. The float compounds; the reputation attracts sellers who refuse auctions.",
    risks: "Succession after Buffett; scale limits returns; cash drag while waiting.",
    competitors: ["progressive (auto)", "munich-re (reinsurance)", "Every allocator, in spirit"]
  },

  /* ================= insurance chain ================= */
  "marsh": {
    id: "marsh", name: "Marsh McLennan", full: "Marsh & McLennan Companies", country: "US",
    industries: ["insurance"], role: "World's largest broker", founded: 1905, hq: "New York, USA",
    stats: [{ label: "Revenue", value: "$24.5B", note: "2024, #1 for 15 straight years" }, { label: "Employees", value: "90K+", note: "" }, { label: "Op margin", value: "~25%+", note: "fee business" }, { label: "Capital at risk", value: "~$0", note: "holds no insurance risk" }],
    model: [
      "Marsh McLennan is the toll booth of global risk: Marsh (the world's largest retail broker) advises corporations and places their insurance, Guy Carpenter does the same between carriers and reinsurers, Mercer runs benefits and pensions, Oliver Wyman sells strategy. It earns commissions (10% to 15% of premium) and fees on all of it while holding zero underwriting risk.",
      "The economics are the envy of the chain: 90%+ revenue retention (insurance is compulsory and renews annually), pricing that rises with premiums in hard markets, capital-light margins above 25%, and endless tuck-in acquisitions of smaller brokers. When rates rise, brokers win; when rates fall, clients need more advice. Heads or tails, the toll gets paid."
    ],
    customers: [
      { who: "Large corporations", note: "risk advice + placement across every line", share: "most of the Fortune 500" },
      { who: "Mid-market companies", note: "via Marsh McLennan Agency roll-up" },
      { who: "Carriers & reinsurers", note: "Guy Carpenter places their reinsurance" },
      { who: "Employers & pension funds", note: "Mercer benefits, investments consulting" }
    ],
    suppliers: [
      { who: "Carriers (Chubb, AIG, Zurich...)", note: "the markets it places risk into" },
      { who: "Wholesale & MGA markets", note: "for specialty and E&S placements" },
      { who: "Talent", note: "the actual asset walks out of the elevator nightly" }
    ],
    capitalIn: [
      { source: "Commissions & fees", note: "recurring, cash-generative, no reserves needed" },
      { source: "Bond markets", note: "modest leverage for acquisitions" }
    ],
    capitalOut: [
      { use: "Broker acquisitions (dozens/yr)", note: "the eternal roll-up of independents" },
      { use: "Dividends + buybacks", note: "steady compounder returns" },
      { use: "Technology & data", note: "analytics as the next fee layer" }
    ],
    revenueMix: [
      { label: "Marsh (retail broking)", pct: 52 }, { label: "Guy Carpenter (reinsurance)", pct: 10 }, { label: "Mercer + Oliver Wyman", pct: 38 }
    ],
    moat: "Client relationships measured in decades, data on every placement on Earth, and scale no independent can match. The risk stays elsewhere; the fee stays here.",
    risks: "PE-backed consolidators bidding up acquisitions; fee transparency regulation; E&O liability.",
    competitors: ["Aon", "Gallagher, WTW", "PE roll-ups (Hub, Acrisure)"]
  },

  "chubb": {
    id: "chubb", name: "Chubb", full: "Chubb Limited", country: "CH",
    industries: ["insurance"], role: "Premier commercial P&C carrier", founded: 1882, hq: "Zurich (ops from NY)",
    stats: [{ label: "Net premiums", value: "$52B", note: "2024 written" }, { label: "Combined ratio", value: "~86%", note: "best-in-class underwriting" }, { label: "Invested assets", value: "$150B+", note: "the float at work" }, { label: "Countries", value: "54", note: "global platform" }],
    model: [
      "Chubb is what disciplined underwriting looks like at scale: a global commercial and high-net-worth P&C carrier that would rather shrink than write bad business. The ~86% combined ratio (2024) means it earns ~14 cents of underwriting profit per premium dollar BEFORE investment income, in an industry where breaking even on underwriting is respectable.",
      "The second engine turned on in 2023-24: $150B+ of invested float repriced to 4%+ yields, transforming net investment income. Distribution runs through brokers and agents worldwide (Marsh-class firms are both partner and counterparty), with the high-net-worth personal lines franchise (fine homes, art, collections) as a quietly dominant niche."
    ],
    customers: [
      { who: "Corporations (via brokers)", note: "property, casualty, D&O, cyber, marine" },
      { who: "High-net-worth households", note: "the Masterpiece franchise: homes, art, liability" },
      { who: "SMEs & consumers in Asia/LatAm", note: "the growth geography bet" },
      { who: "Other insurers", note: "assumed reinsurance selectively" }
    ],
    suppliers: [
      { who: "Brokers (Marsh, Aon, Gallagher)", note: "distribution: commissions are the acquisition cost" },
      { who: "Reinsurers", note: "cede peak cat and large-limit risk" },
      { who: "TPAs & adjusters, cat modelers", note: "claims machinery and pricing science" }
    ],
    capitalIn: [
      { source: "Premium float", note: "collected now, claims paid later, invested between" },
      { source: "Shareholders' equity ~$65B", note: "the regulatory risk capital" },
      { source: "Debt markets", note: "modest, ratings-protective leverage" }
    ],
    capitalOut: [
      { use: "Claims (~55% of premium)", note: "the product, delivered" },
      { use: "Reinsurance premiums ceded", note: "buying its own protection" },
      { use: "Dividends + buybacks", note: "consistent, growing returns" },
      { use: "Acquisitions", note: "Chubb-ACE merger heritage; Asia buildouts" }
    ],
    revenueMix: [
      { label: "North America commercial", pct: 47 }, { label: "International + Asia", pct: 33 }, { label: "Personal lines + life", pct: 20 }
    ],
    moat: "Underwriting culture (the discipline to walk away), global licenses and claims reputation: corporations pay up for a carrier that pays claims without drama.",
    risks: "Catastrophe concentration; social inflation in US casualty; competition from E&S upstarts in hard-to-price lines.",
    competitors: ["AIG, Zurich, AXA XL", "Berkshire specialty units", "Lloyd's syndicates"]
  },

  "munich-re": {
    id: "munich-re", name: "Munich Re", full: "Münchener Rück AG", country: "DE",
    industries: ["insurance"], role: "World's largest reinsurer", founded: 1880, hq: "Munich, Germany",
    stats: [{ label: "Revenue", value: "€67B", note: "2024" }, { label: "Net result", value: "€5.7B", note: "2024 record" }, { label: "Capital", value: "€30B+", note: "equity base" }, { label: "Founded", value: "1880", note: "paid 1906 SF quake in full" }],
    model: [
      "Munich Re insures the insurers: carriers cede it slices of their portfolios (treaty) or single mega-risks (facultative), paying premium for the right to hand over catastrophe losses. Its balance sheet is the industry's shock absorber; its January renewal negotiations effectively set the world price of hurricane, quake, and now cyber risk.",
      "The model sells capital and diversification: a Florida hurricane, Japanese quake, and German hailstorm rarely happen the same year, so pooling them needs less capital than holding each alone. The 2023 market reset (rates up 30%+, higher attachment points) rebuilt margins after a loss decade, driving record profits in 2023-2024. ERGO (primary insurance) and Munich Re's own investment portfolio diversify the reinsurance cycle."
    ],
    customers: [
      { who: "P&C carriers worldwide", note: "treaty programs renewed each January", share: "thousands of cedents" },
      { who: "Life insurers", note: "mortality and longevity risk transfer" },
      { who: "Large corporates & governments", note: "direct industrial mega-risks, pandemic schemes" },
      { who: "MGA programs (via fronting)", note: "the quiet capacity behind the MGA boom" }
    ],
    suppliers: [
      { who: "Retrocession & ILS markets", note: "even the reinsurer buys protection" },
      { who: "Cat modelers + own science teams", note: "Munich Re's geo-risk research is industry reference" },
      { who: "Brokers (Guy Carpenter, Aon Re)", note: "most treaty business arrives broker-intermediated" }
    ],
    capitalIn: [
      { source: "Reinsurance premiums", note: "the float, at wholesale scale" },
      { source: "Shareholders' equity", note: "rating-agency-audited capital adequacy" },
      { source: "Retro & cat bond investors", note: "renting external balance sheet at the peaks" }
    ],
    capitalOut: [
      { use: "Claims: the mega-events", note: "hurricanes, quakes, pandemics, in billions per event" },
      { use: "Dividends + buybacks", note: "German-steady shareholder returns" },
      { use: "Investment portfolio", note: "€200B+ of premiums at work in bonds and alternatives" }
    ],
    revenueMix: [
      { label: "P&C reinsurance", pct: 45 }, { label: "Life & health re", pct: 20 }, { label: "ERGO primary + investments", pct: 35 }
    ],
    moat: "145 years of loss data, the capital and ratings to hold what no one else can, and relationships where trust is literally the product being sold.",
    risks: "Climate trend outrunning annual repricing; ILS capital undercutting the cycle; reserve risk in long-tail casualty.",
    competitors: ["Swiss Re, Hannover Re", "berkshire (National Indemnity)", "ILS capital itself"]
  },

  "sedgwick": {
    id: "sedgwick", name: "Sedgwick", full: "Sedgwick Claims Management Services", country: "US",
    industries: ["insurance"], role: "World's largest TPA", founded: 1969, hq: "Memphis, USA",
    stats: [{ label: "Revenue", value: "~$5B", note: "estimate, private" }, { label: "Valuation", value: "$13.2B", note: "2024 Altas-led round" }, { label: "Colleagues", value: "33K", note: "80 countries" }, { label: "Claims handled", value: "millions/yr", note: "for carriers + self-insureds" }],
    model: [
      "Sedgwick is the machine that actually processes the promise: a third-party administrator (TPA) that runs claims end to end (intake, adjusting, medical management, payment) for carriers who outsource operations and for large corporations that self-insure and only rent the machinery. It is the biggest player in the $340B to $430B global TPA services market.",
      "The model is fees per claim and per program, not underwriting: zero insurance risk, recurring multi-year contracts, and scale advantages in technology, medical networks, and data that no single carrier's claims department can match. That capital-light profile is why private equity has owned and re-traded it repeatedly, most recently at a $13.2B valuation (2024)."
    ],
    customers: [
      { who: "Self-insured corporations", note: "Fortune 500s running their own workers' comp and liability" },
      { who: "Carriers", note: "outsourcing whole claims books or overflow" },
      { who: "MGAs & programs", note: "delegated claims for delegated underwriting" },
      { who: "Employers (disability & absence)", note: "leave management as a service" }
    ],
    suppliers: [
      { who: "Adjusters & medical networks", note: "the field workforce and provider panels" },
      { who: "Claims technology stack", note: "increasingly AI-assisted triage" },
      { who: "Data & analytics vendors", note: "benchmarks that feed pricing and reserves" }
    ],
    capitalIn: [
      { source: "Service fees", note: "per-claim and program retainers, recurring" },
      { source: "Private equity sponsors", note: "Carlyle, Altas: the serial owners" },
      { source: "Debt markets", note: "sponsor-style leverage on stable fees" }
    ],
    capitalOut: [
      { use: "Acquisitions", note: "the TPA space consolidates continuously" },
      { use: "Technology investment", note: "claims automation is the margin frontier" },
      { use: "Sponsor returns", note: "the LBO math being serviced" }
    ],
    revenueMix: [
      { label: "Casualty claims (comp, liability)", pct: 55 }, { label: "Property & specialty", pct: 25 }, { label: "Disability & absence", pct: 20 }
    ],
    moat: "Scale in a fragmented service industry: national adjuster coverage, medical networks, and switching costs once a client's claims history lives in your system.",
    risks: "Client concentration cycles; leverage through downturns; AI both threatens and powers the fee-per-claim model.",
    competitors: ["Crawford & Company", "Gallagher Bassett", "Carrier in-house claims"]
  },

  /* ================= copper ================= */
  "freeport": {
    id: "freeport", name: "Freeport-McMoRan", full: "Freeport-McMoRan Inc.", country: "US",
    industries: ["copper-mining", "mining"], role: "Largest listed copper pure-play", founded: 1912, hq: "Phoenix, USA",
    stats: [{ label: "Revenue", value: "$25.5B", note: "2024" }, { label: "Copper sold", value: "~4.2B lbs", note: "2024" }, { label: "Key asset", value: "Grasberg", note: "world-class Indonesian mine" }, { label: "Unit cost", value: "~$1.60/lb net", note: "byproduct credits help" }],
    model: [
      "Freeport digs copper (plus meaningful gold and molybdenum byproducts) from a handful of giant, decades-long mines: Grasberg in Indonesia (among the largest copper-gold deposits ever found), plus big US and South American operations. Revenue is simply pounds sold times the LME price; management controls only cost, volume, and capital discipline.",
      "The equity is a leveraged play on the copper price: at $4.50/lb copper with ~$1.60/lb net cash costs, margins gush; at $3.00 they compress violently. Byproduct gold from Grasberg effectively subsidizes the copper cost curve position. The strategic story is electrification demand meeting its 15-year supply lag, with Freeport as the most liquid way to own that thesis."
    ],
    customers: [
      { who: "Smelters & refiners", note: "concentrate sales, increasingly its own Indonesian smelter" },
      { who: "Wire & cable makers", note: "refined cathode into the grid and construction" },
      { who: "Traders (Glencore-class)", note: "the market-making layer" },
      { who: "Ultimately: utilities, EVs, datacenters", note: "the electrification demand pull" }
    ],
    suppliers: [
      { who: "Caterpillar, Komatsu", note: "haul trucks and shovels measured in fleets" },
      { who: "Energy providers", note: "mines are gigawatt customers; costs track diesel and power" },
      { who: "Indonesian government", note: "supplier of the license itself: 51% local ownership of Grasberg negotiated 2018" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "price-dependent: $7B+ in good years" },
      { source: "Bond markets", note: "deleveraged post-2016 near-death; now investment grade" },
      { source: "Partner funding", note: "Indonesia's MIND ID co-owns Grasberg" }
    ],
    capitalOut: [
      { use: "Sustaining + growth capex", note: "Grasberg underground, US leach projects, smelter" },
      { use: "Dividends + buybacks", note: "performance-based payout framework" },
      { use: "Royalties & taxes", note: "governments take 40%+ of the value in places" }
    ],
    revenueMix: [
      { label: "Copper", pct: 78 }, { label: "Gold", pct: 14 }, { label: "Molybdenum + other", pct: 8 }
    ],
    moat: "Irreplaceable orebodies: Grasberg cannot be rebuilt, rediscovered, or permitted from scratch at any price. Cost-curve position is geology's gift.",
    risks: "Copper price; Indonesian political risk; grade decline; the 2040s question of what replaces Grasberg.",
    competitors: ["codelco", "BHP, Southern Copper", "Zijin, Ivanhoe (new supply)"]
  },

  "codelco": {
    id: "codelco", name: "Codelco", full: "Corporación Nacional del Cobre de Chile", country: "CL",
    industries: ["copper-mining", "mining"], role: "Largest copper producer (state-owned)", founded: 1976, hq: "Santiago, Chile",
    stats: [{ label: "Production", value: "~1.33Mt", note: "2024, world #1" }, { label: "Revenue", value: "~$17B", note: "2024" }, { label: "Owner", value: "Republic of Chile", note: "100% state" }, { label: "Reinvestment", value: "$40B program", note: "structural projects" }],
    model: [
      "Codelco is Chile's national copper champion: 100% state-owned, operating the legendary mines nationalized in 1971 (Chuquicamata, El Teniente, Andina). It exists to convert Chilean geology into fiscal revenue: essentially all profits flow to the state, which historically left it under-capitalized while its ore grades declined for decades.",
      "The current chapter is the $40B 'structural projects' bet: converting century-old open pits to underground operations to chase deeper, lower-grade ore. Production slipped to ~1.3Mt (from 1.8Mt a decade ago) while debt rose past $20B, making Codelco a case study in the industry's core tension: the world needs more copper exactly as the best deposits age. A lithium mandate (partnering with SQM in the Atacama) adds a second strategic role."
    ],
    customers: [
      { who: "Chinese smelters & fabricators", note: "the largest destination, like all copper" },
      { who: "Asian and European wire mills", note: "long-term cathode contracts at LME-linked prices" },
      { who: "The Chilean treasury", note: "the ultimate customer: profits fund the state" }
    ],
    suppliers: [
      { who: "Equipment majors & EPC firms", note: "the $40B underground conversion program" },
      { who: "Chile's grid (increasingly solar)", note: "power contracts pivoting renewable" },
      { who: "Desalination plants", note: "Atacama water politics made seawater the answer" }
    ],
    capitalIn: [
      { source: "Copper sales", note: "LME-linked, China-heavy" },
      { source: "Bond markets ($20B+ debt)", note: "quasi-sovereign borrowing on Chile's rating" },
      { source: "State capitalization (occasional)", note: "the owner reinvests reluctantly" }
    ],
    capitalOut: [
      { use: "Transfers to the Chilean state", note: "the founding purpose" },
      { use: "Structural projects $40B", note: "underground conversions, new levels" },
      { use: "Debt service", note: "the growing constraint on everything else" }
    ],
    revenueMix: [
      { label: "Copper cathode & concentrate", pct: 92 }, { label: "Molybdenum + byproducts", pct: 8 }
    ],
    moat: "The endowment: the largest copper reserve base on Earth, in a stable(ish) mining jurisdiction, with sunk infrastructure a century deep.",
    risks: "Grade decline vs debt spiral; state ownership politics (royalties, lithium mandates); execution on megaprojects with a mixed record.",
    competitors: ["freeport", "BHP (Escondida operator)", "Zijin, CMOC"]
  }
};
