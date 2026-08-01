/* Industry Atlas - mining company profiles.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Sources: BHP FY2025 results (Aug 2025), Rio Tinto FY2025 results (Feb 2026),
 * Glencore 2025 preliminary results (Feb 2026); market caps as of mid-2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  /* ================= mining ================= */
  "bhp": {
    id: "bhp", ticker: "BHP", mcap: 205, name: "BHP", full: "BHP Group Limited", country: "AU",
    industries: ["mining"], role: "World's largest miner", founded: 1885, hq: "Melbourne, Australia",
    stats: [{ label: "Revenue", value: "$51.3B", note: "FY2025 (June year-end)" }, { label: "Underlying EBITDA", value: "$26B", note: "FY2025, 53% margin" }, { label: "Copper output", value: "2.0Mt+", note: "FY2025 record" }, { label: "Iron ore", value: "~290Mt", note: "WAIO, lowest-cost major" }],
    model: [
      "BHP digs up the 2 commodities the modern world cannot function without: iron ore for steel and copper for electrification. The engine is Western Australia Iron Ore, a 290 Mt per year system of mines, private rail, and ports that produces at roughly $18 per tonne, the lowest cost of any major. Because BHP is a price taker, the model is entirely about cost-curve position: at prices that bankrupt marginal Chinese and African supply, BHP still prints ~50% EBITDA margins.",
      "The strategic pivot is toward future-facing metals. Copper passed 2 Mt in FY2025 (Escondida in Chile, the world's largest copper mine, is 57.5% BHP), and copper now rivals iron ore as the biggest earnings engine. Jansen in Canada is a $10B+ wager on potash as a 4th pillar from 2027. A strict capital allocation framework returns a minimum 50% of underlying profit as dividends and rations everything else against the balance sheet."
    ],
    customers: [
      { who: "Chinese steel mills", note: "China takes roughly 60% of revenue; Baowu-class mills buy Pilbara fines on index-linked and spot pricing", share: "~60%" },
      { who: "Japanese, Korean, Indian steelmakers", note: "Nippon Steel, POSCO, JSW: contract relationships dating back to the 1960s Pilbara openings" },
      { who: "Copper smelters and traders", note: "Asian smelters and global merchants take Escondida and South Australian output" },
      { who: "Fertilizer distributors (from ~2027)", note: "Jansen potash will feed agricultural supply chains" }
    ],
    suppliers: [
      { who: "Caterpillar, Komatsu, Liebherr", note: "autonomous haul fleets, shovels, and drills" },
      { who: "Orica, Dyno Nobel", note: "bulk explosives and blasting services" },
      { who: "Bechtel, Hatch, Worley", note: "EPC contractors building Jansen and copper growth projects" },
      { who: "Fuel and power providers", note: "diesel and gas today, renewable PPAs ramping in Chile and the Pilbara" },
      { who: "Contract labor and unions", note: "Escondida's union is famously willing to strike" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$18B+ a year across the cycle" },
      { source: "Bond markets", note: "single-A balance sheet; net debt target band of $5B to $15B" },
      { source: "Asset sales", note: "petroleum merged into Woodside in 2022; legacy coal mines divested" }
    ],
    capitalOut: [
      { use: "Dividends", note: "minimum 50% payout policy; ~$5.6B declared in FY2025" },
      { use: "Capex ~$10B / year", note: "copper growth in Chile and South Australia, Jansen stages 1 and 2" },
      { use: "Samarco remediation", note: "~$31.7B Brazil dam-failure settlement (2024), paid over many years" },
      { use: "Buybacks", note: "episodic, when the balance sheet allows" }
    ],
    revenueMix: [
      { label: "Iron ore", pct: 45 }, { label: "Copper", pct: 45 }, { label: "Coal", pct: 9 }, { label: "Other", pct: 1 }
    ],
    moat: "Tier-1 orebodies held for decades: the lowest-cost major iron ore system on Earth plus the world's largest copper mine mean BHP earns margin at prices where rivals lose money. Scale, owned infrastructure, and a fortress balance sheet do the rest.",
    risks: "China steel demand has likely peaked and iron ore still pays most of the bills; Samarco liabilities in Brazil; Escondida grade decline and Chilean policy; Jansen cost overruns into a soft potash market.",
    competitors: ["rio-tinto", "glencore", "Vale", "Fortescue", "Anglo American"]
  },

  "rio-tinto": {
    id: "rio-tinto", ticker: "RIO", mcap: 155, name: "Rio Tinto", full: "Rio Tinto Group", country: "GB",
    industries: ["mining"], role: "Diversified major #2", founded: 1873, hq: "London, UK (dual-listed with Sydney)",
    stats: [{ label: "Revenue", value: "$57.6B", note: "2025" }, { label: "Underlying EBITDA", value: "$25.4B", note: "2025" }, { label: "Iron ore shipped", value: "~330Mt", note: "Pilbara, 2025" }, { label: "Capex", value: "~$11B", note: "2025, growth heavy" }],
    model: [
      "Rio Tinto is the Pilbara plus a plan to need it less. Iron ore from Western Australia is still over half of revenue and most of the earnings: an integrated system of 17 mines, 1,700km of private railway with driverless trains, and 4 port terminals, run from a remote operations center in Perth. It pioneered autonomous haulage, and the whole machine sits in the lowest cost quartile, so cash pours out at almost any iron ore price.",
      "The next decade is about 3 growth bets. Oyu Tolgoi in Mongolia is ramping toward ~500kt of copper a year, on track to be a top-5 mine globally. Simandou in Guinea, the biggest mining project in a generation, shipped first high-grade iron ore in late 2025. And the $6.7B Arcadium acquisition (2025) created Rio Tinto Lithium. Meanwhile hydro-powered aluminium smelters in Canada, ~24% of revenue, become more valuable as carbon pricing spreads."
    ],
    customers: [
      { who: "Chinese steel mills", note: "China is over half of revenue; Baowu is both customer and JV partner in Pilbara mines and Simandou", share: "~55%" },
      { who: "Japanese and Korean steelmakers", note: "Nippon Steel and POSCO relationships, some structured as mine JVs" },
      { who: "Aluminium buyers", note: "automotive, aerospace, and can sheet; low-carbon hydro metal earns green premiums" },
      { who: "Copper smelters and the EV chain", note: "Oyu Tolgoi concentrate into Asian smelters; lithium into battery makers" }
    ],
    suppliers: [
      { who: "Komatsu, Caterpillar", note: "autonomous trucks and AutoHaul driverless rail systems" },
      { who: "Orica and mining services", note: "explosives, drilling, maintenance contractors" },
      { who: "Energy systems", note: "owned hydro dams in Quebec and BC; gas plus a solar buildout in the Pilbara" },
      { who: "Consortium partners", note: "Chinalco, Baowu, and Winning consortium co-build Simandou; Mongolia co-owns Oyu Tolgoi" },
      { who: "Dry-bulk shipping", note: "one of the world's largest iron ore charterers" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$15B a year at mid-cycle prices" },
      { source: "Bond markets", note: "conservative gearing; modest net debt for its size" },
      { source: "Partner co-funding", note: "Simandou JV partners and Mongolian carried interests share the bill" }
    ],
    capitalOut: [
      { use: "Dividends", note: "50% to 60% payout; among London's largest dividend payers" },
      { use: "Capex ~$11B / year", note: "Simandou, Oyu Tolgoi, lithium, Pilbara replacement mines" },
      { use: "M&A", note: "Arcadium Lithium bought for $6.7B (closed 2025)" },
      { use: "Closure and rehabilitation", note: "a growing bill across century-old operations" }
    ],
    revenueMix: [
      { label: "Iron ore", pct: 55 }, { label: "Aluminium", pct: 24 }, { label: "Copper", pct: 9 }, { label: "Minerals & other", pct: 12 }
    ],
    moat: "The Pilbara system: lowest-quartile iron ore backed by owned rail and ports, plus hydro-powered aluminium that appreciates as carbon prices rise, plus 2 of the world's great growth assets in Oyu Tolgoi and Simandou.",
    risks: "China concentration above 50% of revenue; Simandou is a multibillion dollar bet on Guinea's politics; social license scars from Juukan Gorge (2020); lithium entry timed into a price trough.",
    competitors: ["bhp", "glencore", "Vale", "Fortescue", "Alcoa (aluminium)"]
  },

  "glencore": {
    id: "glencore", ticker: "GLNCY", mcap: 77, name: "Glencore", full: "Glencore plc", country: "CH",
    industries: ["mining"], role: "Miner + world's largest commodity trader", founded: 1974, hq: "Baar, Switzerland",
    stats: [{ label: "Revenue", value: "~$230B", note: "2025, mostly marketing turnover" }, { label: "Adjusted EBITDA", value: "$13.5B", note: "2025" }, { label: "Marketing EBIT", value: "$2.9B", note: "2025, top half of guidance" }, { label: "Net debt", value: "$11.2B", note: "end 2025" }],
    model: [
      "Glencore is 2 businesses fused together. Marketing is the world's largest commodity trading operation, born as Marc Rich + Co in 1974: it moves oil, coal, and metals through chartered ships, warehouses, and blending facilities, earning arbitrage margins on flow rather than price direction. Management guides this book to $2.2B to $3.2B of EBIT in almost any market, and volatility is a friend: chaos widens spreads. Industrial is the mines themselves: copper and cobalt in the DRC, zinc via Kazzinc, stakes in Collahuasi and Antamina, and one of the world's biggest coal portfolios.",
      "Coal is the contrarian cash cow. After shareholders pushed back on a planned spin-off, Glencore chose in 2024 to keep coal and run it for cash, then doubled down by buying Elk Valley's steelmaking coal business from Teck for $6.9B. The trader-miner combination is the real design: owning production feeds the trading book with flow and information, and the marketing arm monetizes both. Copper output around 0.9 Mt has a stated growth path well above 1 Mt as the electrification decade tightens supply."
    ],
    customers: [
      { who: "Asian power utilities", note: "thermal coal into Japan, Korea, Taiwan, and Southeast Asia on contract and spot" },
      { who: "Steelmakers", note: "steelmaking coal (post-EVR), ferroalloys, and traded iron ore" },
      { who: "Battery and EV supply chain", note: "the world's largest cobalt producer, plus nickel and copper into cathode makers" },
      { who: "Refiners and industrials", note: "the oil marketing desk moves millions of barrels a day to refiners and end users" }
    ],
    suppliers: [
      { who: "Third-party producers", note: "the marketing arm buys from rival miners and national oil companies as much as from its own assets" },
      { who: "Its own industrial mines", note: "Katanga copper-cobalt (DRC), Kazzinc, Collahuasi and Antamina stakes, Australian coal" },
      { who: "Shipping and logistics", note: "hundreds of chartered vessels, ports, warehouses, and blending terminals" },
      { who: "Banks and trade finance desks", note: "$10B+ of committed revolvers underpin the trading book" },
      { who: "Equipment OEMs and contractors", note: "standard mining fleets across 3 continents" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "funds from operations ~$10B a year" },
      { source: "Revolving credit and trade finance", note: "rolled annually; the lifeblood of the marketing book" },
      { source: "Bond markets", note: "a standing debt program across currencies" }
    ],
    capitalOut: [
      { use: "Shareholder returns", note: "base dividend plus buybacks, typically $2B to $3B a year" },
      { use: "Capex ~$5B to $6B / year", note: "copper brownfields and coal sustaining spend" },
      { use: "Working capital and margin", note: "price spikes can absorb billions overnight in margin calls" },
      { use: "M&A", note: "EVR steelmaking coal from Teck for $6.9B (2024)" }
    ],
    revenueMix: [
      { label: "Marketing: energy (turnover)", pct: 55 }, { label: "Marketing: metals (turnover)", pct: 30 }, { label: "Industrial assets", pct: 15 }
    ],
    moat: "The only supermajor that pairs tier-1 mines with the world's largest trading network: production feeds flow, flow feeds information, and the marketing book earns $2B to $3B whether prices rise or fall.",
    risks: "Coal concentration in an ESG-constrained world (it chose to keep coal in 2024); DRC political and cobalt price risk; legal legacy after ~$1.5B of 2022 bribery settlements; a trading book that must always find credit.",
    competitors: ["bhp", "rio-tinto", "Vale", "Trafigura / Vitol (trading)", "Anglo American"]
  }

});
