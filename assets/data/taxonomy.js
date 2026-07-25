/* Industry Atlas - taxonomy. The catalog of sectors and industries.
 * Every industry here gets a page; ones with a module in
 * assets/data/industries/ get full/profile depth, the rest render as
 * living stubs. Add a row + (optionally) a module file to expand. */
window.ATLAS_TAXONOMY = {
  sectors: [
    { id: "technology", name: "Technology", color: "#3987e5", icon: "💻" },
    { id: "finance", name: "Finance", color: "#fab219", icon: "💰" },
    { id: "industrials", name: "Industrials & Mobility", color: "#d95926", icon: "🏭" },
    { id: "energy", name: "Energy", color: "#199e70", icon: "⚡" },
    { id: "materials", name: "Materials", color: "#9085e9", icon: "⛏️" },
    { id: "healthcare", name: "Healthcare", color: "#e66767", icon: "🩺" },
    { id: "consumer", name: "Consumer", color: "#d55181", icon: "🛒" },
    { id: "tmt", name: "Telecom, Media & Entertainment", color: "#86b6ef", icon: "📡" },
    { id: "real-assets", name: "Real Assets & Land", color: "#008300", icon: "🌾" },
    { id: "public", name: "Public & Social", color: "#898781", icon: "🏛️" },
    { id: "digital-assets", name: "Digital Assets", color: "#4a3aa7", icon: "🪙" }
  ],
  industries: [
    /* ---- technology ---- */
    { id: "ai", name: "Artificial Intelligence", sector: "technology", blurb: "Models, training compute, and the race to make software think.", aliases: ["machine learning", "llm", "genai"] },
    { id: "cloud", name: "Cloud Computing", sector: "technology", blurb: "Renting the world's computers by the hour.", aliases: ["aws", "azure", "iaas", "hyperscaler"] },
    { id: "saas", name: "SaaS & Enterprise Software", sector: "technology", blurb: "Software sold as a subscription, the best business model yet found.", aliases: ["software", "subscription software", "b2b software"] },
    { id: "cybersecurity", name: "Cybersecurity", sector: "technology", blurb: "Selling locks in a world that keeps inventing new doors.", aliases: ["infosec", "security software"] },
    { id: "semiconductors", name: "Semiconductors", sector: "technology", blurb: "The most complex manufactured objects on Earth, and the economy under the economy.", aliases: ["chips", "semis", "foundry", "silicon"] },
    { id: "consumer-electronics", name: "Consumer Electronics", sector: "technology", blurb: "Phones, laptops, and the brutal economics of hardware.", aliases: ["smartphones", "devices"] },
    { id: "data-infrastructure", name: "Data Infrastructure", sector: "technology", blurb: "Databases, pipelines, and the plumbing of the information economy.", aliases: ["databases", "data centers", "analytics"] },
    { id: "robotics", name: "Robotics & Automation", sector: "technology", blurb: "Machines doing physical work, from factory arms to warehouse swarms.", aliases: ["automation", "industrial robots"] },
    { id: "quantum-computing", name: "Quantum Computing", sector: "technology", blurb: "A bet that physics can break the limits of classical compute.", aliases: ["quantum"] },

    /* ---- finance ---- */
    { id: "banking", name: "Banking", sector: "finance", blurb: "Borrowing short, lending long, and living on the spread.", aliases: ["commercial banking", "retail banking", "banks"] },
    { id: "capital-markets", name: "Capital Markets", sector: "finance", blurb: "Where companies meet investors: equity, debt, and everything traded.", aliases: ["stock market", "bond market", "exchanges"] },
    { id: "investment-banking", name: "Investment Banking", sector: "finance", blurb: "Advising on deals and raising capital, for a fee.", aliases: ["m&a advisory", "underwriting"] },
    { id: "asset-management", name: "Asset Management", sector: "finance", blurb: "Investing other people's money at scale, in bps.", aliases: ["mutual funds", "etf", "index funds"] },
    { id: "private-equity", name: "Private Equity", sector: "finance", blurb: "Buying whole companies with leverage and a 5-year plan.", aliases: ["buyouts", "lbo", "sponsors"] },
    { id: "venture-capital", name: "Venture Capital", sector: "finance", blurb: "Funding the improbable, priced for the impossible.", aliases: ["vc", "startups funding"] },
    { id: "hedge-funds", name: "Hedge Funds", sector: "finance", blurb: "Absolute returns, leverage, shorting, and fees to match.", aliases: ["long short", "macro funds"] },
    { id: "insurance", name: "Insurance", sector: "finance", blurb: "Selling promises against disaster, priced by actuaries.", aliases: ["p&c", "life insurance", "underwriting"] },
    { id: "payments", name: "Payments", sector: "finance", blurb: "Clipping basis points off nearly every transaction on Earth.", aliases: ["cards", "visa", "interchange"] },
    { id: "fintech", name: "Fintech", sector: "finance", blurb: "Rebuilding banking rails with software economics.", aliases: ["neobank", "bnpl"] },

    /* ---- industrials & mobility ---- */
    { id: "manufacturing", name: "Advanced Manufacturing", sector: "industrials", blurb: "Turning materials into machines, at margin points that punish error.", aliases: ["factories", "industrial"] },
    { id: "aerospace", name: "Aerospace", sector: "industrials", blurb: "A duopoly at the top, a 10,000-supplier pyramid below.", aliases: ["aircraft", "boeing", "airbus"] },
    { id: "defense", name: "Defense", sector: "industrials", blurb: "One customer, decades-long programs, and geopolitics as demand.", aliases: ["military", "primes"] },
    { id: "construction", name: "Construction & Engineering", sector: "industrials", blurb: "Huge revenues, thin margins, and risk hidden in every contract.", aliases: ["epc", "infrastructure building"] },
    { id: "logistics", name: "Logistics & Freight", sector: "industrials", blurb: "Moving everything everywhere, priced by the mile and the minute.", aliases: ["freight", "3pl", "trucking"] },
    { id: "shipping", name: "Maritime Shipping", sector: "industrials", blurb: "90% of world trade floats; rates swing 10x across cycles.", aliases: ["container shipping", "tankers", "dry bulk"] },
    { id: "rail", name: "Rail", sector: "industrials", blurb: "Steel wheels, network monopolies, and beautiful incremental margins.", aliases: ["railroads", "freight rail"] },
    { id: "aviation", name: "Airlines & Aviation", sector: "industrials", blurb: "Enormous capital, commodity seats, and profits that vanish in downturns.", aliases: ["airlines", "air travel"] },
    { id: "automotive", name: "Automotive", sector: "industrials", blurb: "The most complex consumer product, built at 3% margins.", aliases: ["cars", "oem", "auto"] },
    { id: "ev", name: "Electric Vehicles", sector: "industrials", blurb: "Rebuilding the car around the battery, and the industry around software.", aliases: ["electric cars", "bev"] },
    { id: "space", name: "Space Economy", sector: "industrials", blurb: "Launch costs fell 10x; an orbital industrial base is forming.", aliases: ["satellites", "launch"] },

    /* ---- energy ---- */
    { id: "oil-gas", name: "Oil & Gas", sector: "energy", blurb: "Still the world's biggest cash machine, priced by geology and geopolitics.", aliases: ["petroleum", "upstream", "opec"] },
    { id: "nuclear", name: "Nuclear", sector: "energy", blurb: "Dense, clean baseload power wrapped in decade-long build times.", aliases: ["reactors", "smr", "uranium"] },
    { id: "solar", name: "Solar", sector: "energy", blurb: "The cheapest electricity in history, built on a brutal manufacturing curve.", aliases: ["pv", "photovoltaics"] },
    { id: "wind", name: "Wind", sector: "energy", blurb: "Utility-scale turbines and the hard economics of intermittency.", aliases: ["offshore wind", "turbines"] },
    { id: "hydrogen", name: "Hydrogen", sector: "energy", blurb: "A molecule hunting for its economic niche.", aliases: ["electrolyzers", "green hydrogen"] },
    { id: "batteries", name: "Batteries & Storage", sector: "energy", blurb: "The bottleneck technology of electrification.", aliases: ["energy storage", "lithium-ion"] },
    { id: "utilities", name: "Utilities & Grid", sector: "energy", blurb: "Regulated returns on the largest machine ever built.", aliases: ["electricity", "power grid", "electric utilities"] },
    { id: "carbon-markets", name: "Carbon Markets", sector: "energy", blurb: "Pricing emissions, from compliance schemes to voluntary offsets.", aliases: ["carbon credits", "ets"] },

    /* ---- materials ---- */
    { id: "mining", name: "Mining", sector: "materials", blurb: "Finding, digging, and refining the periodic table.", aliases: ["metals", "extraction"] },
    { id: "steel", name: "Steel", sector: "materials", blurb: "The skeleton of civilization, made in blast furnaces and price cycles.", aliases: ["iron ore"] },
    { id: "copper-mining", name: "Copper", sector: "materials", blurb: "The metal of electrification; every green ambition is a copper order.", aliases: ["copper mining"] },
    { id: "aluminum", name: "Aluminum", sector: "materials", blurb: "Solid electricity: smelting is power cost wearing a metal costume.", aliases: ["alumina", "smelters"] },
    { id: "lithium", name: "Lithium", sector: "materials", blurb: "From brine and rock to every battery cell on the planet.", aliases: ["spodumene", "brine"] },
    { id: "rare-earths", name: "Rare Earths", sector: "materials", blurb: "Tiny volumes, enormous leverage: magnets, motors, and geopolitics.", aliases: ["neodymium", "critical minerals"] },
    { id: "chemicals", name: "Chemicals", sector: "materials", blurb: "The invisible industry inside every manufactured thing.", aliases: ["petrochemicals", "specialty chemicals"] },
    { id: "cement", name: "Cement & Aggregates", sector: "materials", blurb: "Local monopolies pouring the built world, at 8% of global CO2.", aliases: ["concrete"] },

    /* ---- healthcare ---- */
    { id: "pharma", name: "Pharmaceuticals", sector: "healthcare", blurb: "Patent-protected molecules with 90% gross margins and 10-year odds.", aliases: ["drugs", "big pharma"] },
    { id: "biotech", name: "Biotechnology", sector: "healthcare", blurb: "Science experiments with tickers; binary outcomes at scale.", aliases: ["biopharma", "genomics"] },
    { id: "hospitals", name: "Hospitals & Providers", sector: "healthcare", blurb: "Labor-heavy, regulated, and where healthcare dollars actually land.", aliases: ["health systems", "providers"] },
    { id: "medical-devices", name: "Medical Devices", sector: "healthcare", blurb: "Engineering margins in regulated bodies.", aliases: ["medtech"] },
    { id: "diagnostics", name: "Diagnostics & Tools", sector: "healthcare", blurb: "Selling the picks and shovels of biology.", aliases: ["life science tools", "lab testing"] },
    { id: "health-insurance", name: "Health Insurance & Payers", sector: "healthcare", blurb: "Managing medical cost ratios across millions of members.", aliases: ["payers", "managed care"] },

    /* ---- consumer ---- */
    { id: "retail", name: "Retail", sector: "consumer", blurb: "Buying at wholesale, selling at retail, surviving on turns.", aliases: ["stores", "big box"] },
    { id: "luxury", name: "Luxury", sector: "consumer", blurb: "Selling scarcity at 70% gross margins.", aliases: ["lvmh", "premium brands"] },
    { id: "food-beverage", name: "Food & Beverage", sector: "consumer", blurb: "Feeding the world through brands, scale, and shelf space.", aliases: ["cpg food", "beverages"] },
    { id: "restaurants", name: "Restaurants", sector: "consumer", blurb: "Franchise math, labor economics, and same-store sales.", aliases: ["qsr", "fast food"] },
    { id: "consumer-goods", name: "Consumer Goods", sector: "consumer", blurb: "Brands, distribution, and pricing power measured in pennies.", aliases: ["cpg", "fmcg"] },
    { id: "ecommerce", name: "E-commerce", sector: "consumer", blurb: "Retail rebuilt as software, logistics, and ad markets.", aliases: ["online retail", "marketplaces"] },

    /* ---- tmt ---- */
    { id: "telecom", name: "Telecommunications", sector: "tmt", blurb: "Capital-devouring networks selling connectivity by the month.", aliases: ["carriers", "5g", "broadband"] },
    { id: "media", name: "Media & Streaming", sector: "tmt", blurb: "Content is expensive, attention is scarce, bundles are back.", aliases: ["streaming", "tv", "film"] },
    { id: "entertainment", name: "Entertainment & Live Events", sector: "tmt", blurb: "Selling experiences that cannot be downloaded.", aliases: ["concerts", "theme parks"] },
    { id: "gaming", name: "Gaming", sector: "tmt", blurb: "Bigger than film and music combined, monetized by the hour.", aliases: ["video games", "esports"] },
    { id: "sports", name: "Sports Business", sector: "tmt", blurb: "Scarce live content with monopoly leagues and media-rights economics.", aliases: ["leagues", "franchises"] },

    /* ---- real assets ---- */
    { id: "real-estate", name: "Real Estate", sector: "real-assets", blurb: "The world's largest asset class, priced by cap rates and leverage.", aliases: ["property", "reits", "cre"] },
    { id: "agriculture", name: "Agriculture & Agribusiness", sector: "real-assets", blurb: "From seed genetics to grain terminals: feeding 8 billion.", aliases: ["farming", "agtech", "crops"] },
    { id: "tourism", name: "Tourism & Hospitality", sector: "real-assets", blurb: "Hotels, travel, and the economics of perishable inventory.", aliases: ["hotels", "travel"] },

    /* ---- public & social ---- */
    { id: "government", name: "Government & Public Sector", sector: "public", blurb: "The economy's largest buyer, insurer, and rule-setter.", aliases: ["public sector", "govtech"] },
    { id: "education", name: "Education", sector: "public", blurb: "Human capital formation, from classrooms to credentials.", aliases: ["edtech", "universities"] },

    /* ---- digital assets ---- */
    { id: "crypto", name: "Cryptocurrency & Blockchain", sector: "digital-assets", blurb: "Programmable money and the infrastructure being built around it.", aliases: ["bitcoin", "ethereum", "defi", "digital assets"] },
    { id: "crypto-infrastructure", name: "Crypto Infrastructure", sector: "digital-assets", blurb: "Exchanges, custody, mining, and stablecoin rails.", aliases: ["exchanges", "stablecoins", "mining"] },

    /* ---- 2026-07 expansion ---- */
    { id: "market-infrastructure", name: "Exchanges & Market Infrastructure", sector: "finance", blurb: "The tollbooths of trading: exchanges, clearinghouses, and the data they mint.", aliases: ["exchanges", "clearing", "market data", "ICE", "CME"] },
    { id: "private-credit", name: "Private Credit", sector: "finance", blurb: "Direct lending's $1.7T migration out of the banking system.", aliases: ["direct lending", "BDC", "private debt"] },
    { id: "wealth-management", name: "Wealth Management", sector: "finance", blurb: "Managing the world's private fortunes, by the basis point.", aliases: ["private banking", "RIA", "financial advisors"] },
    { id: "waste-management", name: "Waste & Environmental Services", sector: "industrials", blurb: "Route density, landfills, and the most reliable pricing power in industrials.", aliases: ["recycling", "environmental services"] },
    { id: "packaging", name: "Packaging", sector: "materials", blurb: "Everything ships inside its products: GDP-plus stability in boxes, cans, and films.", aliases: ["containers", "corrugated", "cans"] },
    { id: "forestry-paper", name: "Forestry & Paper", sector: "materials", blurb: "Timberland, pulp cycles, and the box economy behind e-commerce.", aliases: ["timber", "pulp", "lumber"] },
    { id: "textiles-apparel", name: "Textiles & Apparel", sector: "consumer", blurb: "From fiber to fast fashion: the world's most labor-intensive supply chain.", aliases: ["fashion", "garments", "footwear"] },
    { id: "gambling", name: "Gambling & Betting", sector: "consumer", blurb: "Casinos, sports betting, and the mathematics of the house edge.", aliases: ["casinos", "sports betting", "igaming"] },
    { id: "water", name: "Water", sector: "real-assets", blurb: "The scarcest utility: rights, treatment, desalination, and pipes.", aliases: ["water utilities", "desalination"] }
  ]
};
