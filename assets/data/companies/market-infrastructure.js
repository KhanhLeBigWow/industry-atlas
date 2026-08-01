/* Industry Atlas - market infrastructure company profiles.
 * Loaded after companies.js; merges into the same registry.
 * Figures are approximate, public, with asOf vintages noted. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "cme-group": {
    id: "cme-group", ticker: "CME", mcap: 110, name: "CME Group", full: "CME Group Inc.", country: "US",
    industries: ["market-infrastructure"], role: "Derivatives exchange #1", founded: 1898, hq: "Chicago, USA",
    stats: [
      { label: "Revenue", value: "$6.1B", note: "2024, all-time record" },
      { label: "Volume", value: "26.5M contracts/day", note: "2024 average, record" },
      { label: "Adj. op margin", value: "~65%", note: "2024" },
      { label: "Returned to holders", value: "$25B+", note: "dividends since 2012" }
    ],
    model: [
      "CME runs the deepest futures and options markets on Earth across interest rates, equity indexes, energy, agriculture, FX, and metals, then clears every trade through its own clearinghouse. Revenue is a toll on volume: roughly $0.70 per contract across 26.5M contracts a day (2024), plus a growing market data annuity (~$710M in 2024). The vertical silo is the trick: a position opened at CME can only be closed at CME, so open interest acts like gravity and liquidity compounds on itself.",
      "The economics are software-like without the software risk: fees scale with volume while the matching engine's cost barely moves, producing ~65% adjusted operating margins on tiny capex. Volatility is the raw material: Fed policy uncertainty, elections, and commodity shocks all print volume. The exclusive license on S&P 500 futures (CME owns 27% of the S&P Dow Jones Indices venture) and the SOFR complex, the successor to LIBOR rates trading, anchor the two biggest product lines."
    ],
    customers: [
      { who: "Banks and dealer desks", note: "hedging rate, FX, and commodity exposure; the core of open interest" },
      { who: "Hedge funds and asset managers", note: "macro expression and portfolio hedging in rates and equity index futures" },
      { who: "Proprietary trading firms", note: "Citadel Securities, DRW, Jump class firms supply the liquidity everyone else consumes" },
      { who: "Commercial hedgers and retail", note: "farmers, energy producers, airlines; micro contracts pull in retail brokers" }
    ],
    suppliers: [
      { who: "Google Cloud", note: "10-year partnership (2021); markets and data migrating to Google infrastructure" },
      { who: "CyrusOne", note: "owns the Aurora, Illinois data center housing the Globex matching engine (sale-leaseback, 2016)" },
      { who: "S&P Dow Jones Indices", note: "index licensing for the equity franchise; part-owned by CME" },
      { who: "Connectivity and telecom providers", note: "microwave and fiber routes that traders pay to be near" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$3.7B adjusted net income (2024) funds everything" },
      { source: "Google equity investment", note: "$1B preferred stake alongside the 2021 cloud deal" },
      { source: "Investment-grade debt", note: "modest leverage; legacy of the CBOT and NYMEX mergers" }
    ],
    capitalOut: [
      { use: "Dividends, regular + special", note: "annual variable special dividend; $25B+ returned since 2012" },
      { use: "Clearinghouse skin-in-the-game", note: "capital committed to the CME Clearing default waterfall" },
      { use: "Capex (small)", note: "technology and the cloud migration; no factories to build" }
    ],
    revenueMix: [
      { label: "Interest rate products", pct: 28 }, { label: "Equity index products", pct: 20 }, { label: "Energy, ag, FX, metals", pct: 33 }, { label: "Market data & other", pct: 19 }
    ],
    moat: "Liquidity network effects locked in by vertical clearing (open interest cannot leave) plus exclusive index licenses: rebuilding the order book elsewhere has defeated every challenger for 3 decades.",
    risks: "FMX (BGC's bank-backed rates exchange) attacking Treasuries and SOFR; volumes are cyclical with volatility; clearing concentration draws regulatory attention.",
    competitors: ["ice", "Cboe Global Markets", "Eurex (Deutsche Boerse)", "FMX (BGC Group)"]
  },

  "ice": {
    id: "ice", ticker: "ICE", mcap: 77, name: "ICE", full: "Intercontinental Exchange, Inc.", country: "US",
    industries: ["market-infrastructure"], role: "Exchanges + data + mortgage rails", founded: 2000, hq: "Atlanta, USA",
    stats: [
      { label: "Net revenue", value: "$9.3B", note: "2024, up 16%" },
      { label: "Recurring share", value: "~50%", note: "data, listings, subscriptions" },
      { label: "Footprint", value: "13 exchanges", note: "+ 6 clearinghouses, incl. NYSE" },
      { label: "Net income", value: "$2.8B", note: "2024, GAAP" }
    ],
    model: [
      "ICE is Jeff Sprecher's 25-year compounding machine: it began in 2000 as an electronic energy marketplace and now owns 13 exchanges and 6 clearinghouses, including the NYSE, plus a fixed income data empire and the plumbing of the US mortgage market. The playbook never changes: buy an analog network (NYSE 2013, Interactive Data 2015, Ellie Mae 2020, Black Knight 2023 for $11.9B), digitize it, and attach recurring data and workflow fees to the transaction flow.",
      "The result is an all-weather mix: energy futures (Brent crude and TTF gas are its benchmarks) throw off transaction fees when markets move, while roughly half of revenue is recurring regardless. Mortgage technology is the long option: Encompass origination software, the MSP servicing platform, and the MERS registry together touch most US home loans, but the segment ran a GAAP operating loss of ($170M) in 2024 with originations at cyclical lows, a bet that volumes normalize."
    ],
    customers: [
      { who: "Energy and commodity traders", note: "majors, utilities, airlines, and funds hedging on Brent, TTF, and global benchmarks" },
      { who: "Banks and asset managers", note: "fixed income pricing, reference data, and index feeds from ICE Data Services" },
      { who: "Listed corporates", note: "NYSE listing fees and the brand premium of the Big Board" },
      { who: "Mortgage lenders and servicers", note: "banks and nonbanks running Encompass and MSP end to end" }
    ],
    suppliers: [
      { who: "Own data centers", note: "Mahwah, New Jersey (NYSE) and Basildon, UK; ICE keeps the core stack in-house" },
      { who: "Market data contributors", note: "dealers and venues whose prices feed evaluated pricing services" },
      { who: "Technology and hardware vendors", note: "matching engine infrastructure, networking, cloud at the edges" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$4.6B a year (2024) across the segments" },
      { source: "Bond markets", note: "the Black Knight deal was debt-funded; ~$20B gross debt at peak" },
      { source: "Equity issuance for M&A", note: "shares used repeatedly as acquisition currency" }
    ],
    capitalOut: [
      { use: "Serial M&A", note: "the defining use of capital for 2 decades; then integrate and deleverage" },
      { use: "Debt paydown", note: "leverage back toward ~3.3x by end 2024 after Black Knight" },
      { use: "Dividends ~$1B/year", note: "plus buybacks resumed once leverage normalized" }
    ],
    revenueMix: [
      { label: "Exchanges", pct: 54 }, { label: "Fixed income & data services", pct: 25 }, { label: "Mortgage technology", pct: 21 }
    ],
    moat: "Benchmark liquidity (Brent, TTF, NYSE listings) that cannot be replicated, welded to subscription data and mortgage workflow software with brutal switching costs.",
    risks: "Mortgage segment hostage to US origination volumes; acquisition leverage; antitrust and market-structure scrutiny of exchange data pricing.",
    competitors: ["cme-group", "Nasdaq", "lseg", "Cboe Global Markets"]
  },

  "lseg": {
    id: "lseg", ticker: "LNSTY", mcap: 57, name: "LSEG", full: "London Stock Exchange Group plc", country: "GB",
    industries: ["market-infrastructure"], role: "Data & clearing giant (not just an exchange)", founded: 1801, hq: "London, UK",
    stats: [
      { label: "Total income", value: "£8.5B", note: "2024, ex recoveries (~$10.8B)" },
      { label: "Recurring revenue", value: "~70%+", note: "subscriptions, data, indexes" },
      { label: "Swap clearing", value: "~90%+", note: "LCH SwapClear share of cleared OTC rate swaps" },
      { label: "Microsoft stake", value: "~4%", note: "10-year partnership since 2022" }
    ],
    model: [
      "The name misleads: after the $27B Refinitiv acquisition (2021), LSEG is a financial data company with an exchange attached. Data & Analytics (Workspace terminals, real-time feeds, pricing) plus FTSE Russell index licensing generate the majority of income on subscription terms, which is why 70%+ of revenue recurs. The actual London listing venue, shrinking as companies drift to New York, is now a small slice of the P&L.",
      "The second engine is post-trade: LCH's SwapClear clears the overwhelming majority of the world's cleared interest rate swaps, a utility position regulators entrenched after 2008, and LSEG has bought its LCH stake up to ~94%. The Microsoft partnership (Microsoft took ~4% of the equity in 2022) is the counterattack on Bloomberg: rebuild Workspace on Azure and inside Teams, and turn the Refinitiv data estate into an AI-ready platform. Capital Markets includes a majority stake in Tradeweb, the electronic bond and swaps venue that has compounded faster than the parent."
    ],
    customers: [
      { who: "Banks and trading desks", note: "Workspace terminals, FX venues, and real-time data; the old Refinitiv base" },
      { who: "Asset managers and ETF issuers", note: "FTSE Russell benchmarks license fees scale with indexed AUM" },
      { who: "Clearing members", note: "global dealers clearing rate swaps through LCH SwapClear" },
      { who: "Issuers and corporates", note: "London listings and Main Market fees, the legacy franchise" }
    ],
    suppliers: [
      { who: "Microsoft Azure", note: "strategic cloud for the data platform migration" },
      { who: "Exchange and OTC data sources", note: "LSEG buys raw data from hundreds of venues to redistribute" },
      { who: "Market data contributors", note: "dealer quotes feeding pricing and reference data services" },
      { who: "Technology vendors", note: "the multi-year integration of the Refinitiv stack" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "subscription revenue makes it steady and forecastable" },
      { source: "Equity issued for Refinitiv", note: "Blackstone and Thomson Reuters took stock, since sold down" },
      { source: "Microsoft investment", note: "~4% stake purchased from the consortium in 2022" },
      { source: "Debt markets", note: "investment-grade; leverage managed around 2x" }
    ],
    capitalOut: [
      { use: "Buybacks ~£1B/year", note: "the main return channel as consortium overhang cleared" },
      { use: "Progressive dividend", note: "steadily rising payout" },
      { use: "LCH minority buy-in", note: "€433M to reach ~94% ownership (2024)" },
      { use: "Platform capex", note: "Workspace rebuild and the Azure migration" }
    ],
    revenueMix: [
      { label: "Data & Analytics", pct: 47 }, { label: "Capital Markets (incl. Tradeweb)", pct: 22 }, { label: "FTSE Russell + Risk Intelligence", pct: 17 }, { label: "Post Trade (LCH)", pct: 14 }
    ],
    moat: "Two near-utilities in one: SwapClear's ~90%+ grip on rate swap clearing and an entrenched subscription data and index estate that customers wire into their workflows.",
    risks: "Workspace still chasing Bloomberg's terminal dominance; London's shrinking listing venue; integration execution and FX translation on a mostly non-UK revenue base.",
    competitors: ["Bloomberg (data & terminals)", "ice", "Deutsche Boerse", "MSCI and S&P Global (indexes)"]
  }

});
