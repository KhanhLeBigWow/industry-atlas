/* Industry Atlas - AVIATION company profiles (research-backed).
 * Anchors: DAL FY2025 results (Jan 2026 release): ~$63B GAAP revenue ($58.3B
 * adjusted, up 2.3%), 10% operating margin, record $4.6B FCF, $14.3B adjusted
 * net debt, Amex remuneration $8.2B (~10% of revenue). UAL FY2025 (Jan 2026):
 * record $59.1B revenue (up 3.5%), $3.4B net income, 181M passengers, premium
 * revenue up 11%, loyalty up 9%. Ryanair FY2025 (ended Mar 2025): EUR 13.95B
 * revenue, 200M passengers; H1 FY26 (Nov 2025): PAT EUR 2.54B up 42%, average
 * fare ~EUR 58. Ryanair discloses only 2 revenue lines (scheduled/ancillary),
 * so its revenueMix has 2 entries by design. Market caps approximate, July 2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "delta-air-lines": {
    id: "delta-air-lines", ticker: "DAL", mcap: 46, name: "Delta Air Lines", full: "Delta Air Lines, Inc.", country: "US",
    industries: ["aviation"], role: "US premium carrier, most profitable airline", founded: 1925, hq: "Atlanta, USA",
    stats: [{ label: "Revenue", value: "~$63B", note: "2025 GAAP; $58.3B adjusted, up 2.3%" }, { label: "Operating margin", value: "10%", note: "2025; ~$5B pre-tax profit" }, { label: "Free cash flow", value: "$4.6B", note: "2025, a company record" }, { label: "Amex remuneration", value: "$8.2B", note: "2025, ~10% of revenue" }],
    model: [
      "Delta sells reliability and status, not seats. The premium cabin, the SkyMiles program, and the American Express co-brand now do the heavy lifting: premium and other diversified streams reached 60% of revenue in 2025, and Amex alone paid Delta $8.2B for miles and cardmember perks, a stream expected to reach ~$9B in 2026. The airline underneath runs a fortress-hub system anchored by Atlanta (the world's busiest airport) plus Detroit, Minneapolis, Salt Lake City, and coastal positions in New York, Boston, LA, and Seattle, where schedule depth and operational reliability let Delta charge a persistent fare premium over rivals.",
      "The economics look less like an airline and more like a consumer franchise bolted onto one: a 10% operating margin and record $4.6B free cash flow in 2025, in an industry where most carriers barely earn their cost of capital. Cash goes first to the balance sheet: adjusted net debt fell $3.7B to $14.3B, restoring investment-grade metrics (2.4x gross leverage) with $35B of unencumbered assets behind it. One structural quirk: Delta owns the Trainer, PA oil refinery (Monroe Energy), a hedge that turns jet fuel crack spreads from a pure cost into a partly captive supply."
    ],
    customers: [
      { who: "Premium and corporate travelers", note: "premium revenue grew 7% in 2025; the highest-yield seats drive most of the profit" },
      { who: "American Express", note: "$8.2B of remuneration in 2025 for miles and card perks; effectively Delta's largest single customer", share: "~10% of revenue" },
      { who: "Main cabin leisure travelers", note: "the volume base; segmented from basic economy up to refundable fares" },
      { who: "Cargo shippers and MRO clients", note: "belly cargo plus Delta TechOps, which services engines for other airlines" }
    ],
    suppliers: [
      { who: "Airbus and Boeing", note: "new orders skew Airbus: A321neo, A330-900, A350; a mixed legacy fleet underneath" },
      { who: "Engine makers (GE, Pratt & Whitney, Rolls-Royce)", note: "propulsion and spare parts; TechOps brings much MRO in-house" },
      { who: "Jet fuel suppliers + own refinery", note: "fuel is the largest volatile cost; Monroe Energy softens crack-spread swings" },
      { who: "Regional partners", note: "wholly-owned Endeavor Air plus SkyWest and Republic fly Delta Connection" },
      { who: "Airports and ATC", note: "gates, slots, and airspace: Hartsfield-Jackson is the irreplaceable anchor" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "roughly $8B in 2025 funds the machine" },
      { source: "Amex remuneration", note: "a contractual, growing multi-$B annuity independent of ticket sales" },
      { source: "Debt markets", note: "in 2020 Delta raised $9B secured by SkyMiles itself; the loyalty program is collateral-grade" },
      { source: "Aircraft financing", note: "EETCs and sale-leasebacks when useful; less needed as leverage falls" }
    ],
    capitalOut: [
      { use: "Fleet capex", note: "next-generation Airbus deliveries; renewal over expansion" },
      { use: "Debt paydown", note: "$3.7B of adjusted net debt retired in 2025 alone" },
      { use: "Employee profit sharing", note: "above $1B a year in good years; the non-union labor bargain" },
      { use: "Dividends", note: "reinstated in 2023 and rising; buybacks remain modest" }
    ],
    revenueMix: [
      { label: "Main cabin passenger", pct: 49 }, { label: "Premium products", pct: 34 }, { label: "Loyalty, refinery & other", pct: 16 }, { label: "Cargo", pct: 1 }
    ],
    moat: "The premium-loyalty flywheel: fortress hubs and best-in-class reliability earn a fare premium, which feeds SkyMiles and the Amex stream, which funds the product that keeps premium travelers loyal.",
    risks: "Deeply cyclical demand, fuel price swings, labor cost inflation, and reliance on a single co-brand partner for ~10% of revenue.",
    competitors: ["united-airlines", "American Airlines", "Southwest Airlines"]
  },

  "united-airlines": {
    id: "united-airlines", ticker: "UAL", mcap: 38, name: "United Airlines", full: "United Airlines Holdings, Inc.", country: "US",
    industries: ["aviation"], role: "US global network carrier", founded: 1926, hq: "Chicago, USA",
    stats: [{ label: "Revenue", value: "$59.1B", note: "2025, record, up 3.5%" }, { label: "Net income", value: "$3.4B", note: "2025; diluted EPS $10.20" }, { label: "Passengers", value: "181M", note: "2025" }, { label: "Premium revenue", value: "+11%", note: "2025 vs 2024; loyalty up 9%" }],
    model: [
      "United monetizes network breadth: 7 hubs (Newark, Chicago O'Hare, Denver, Houston, San Francisco, LA, Washington Dulles) feed the largest international route map of any US carrier, with new markets added constantly (13 international destinations in 2025 alone). The United Next strategy swaps small regional jets for larger, premium-heavy narrowbodies, raising seats per departure and pushing premium product into every market: premium revenue grew 11% in 2025 while basic economy holds the price-sensitive floor, segmenting the cabin from budget to Polaris business class.",
      "2025 was the proof point: record $59.1B revenue, $3.4B of net income, $8.4B of operating cash flow, and 181M passengers with the lowest seat-cancel rate in company history. Like Delta, United increasingly earns from streams beyond the fare: MileagePlus and the JPMorgan Chase co-brand generate multi-$B annual payments, an asset so bankable United borrowed $6.8B against the program in 2020. The bet embedded in the model is a huge aircraft orderbook, among the industry's largest, which brings gauge and cost advantages if traffic grows and heavy delivery obligations if it does not."
    ],
    customers: [
      { who: "International and business travelers", note: "the widebody network and Polaris cabin serve the highest-yield demand" },
      { who: "JPMorgan Chase and MileagePlus partners", note: "co-brand card economics convert cardholder spend into a multi-$B revenue annuity" },
      { who: "Domestic leisure travelers", note: "basic economy up through Economy Plus; the volume engine across 7 hubs" },
      { who: "Cargo shippers", note: "widebody belly capacity across the Pacific and Atlantic, ~3% of revenue" }
    ],
    suppliers: [
      { who: "Boeing", note: "the core fleet and the bulk of the orderbook: 737 MAX and 787 deliveries pace United Next" },
      { who: "Airbus", note: "A321neo and A321XLR add narrowbody range and hedge Boeing delay risk" },
      { who: "Engine makers (CFM, GE Aerospace, Pratt & Whitney)", note: "propulsion, spares, and long-term service agreements" },
      { who: "Regional carriers", note: "SkyWest, Mesa, Republic and others fly United Express feed" },
      { who: "Airports, ATC, and fuel suppliers", note: "slots and airspace at congested Newark are both asset and chokepoint" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "$8.4B in 2025" },
      { source: "MileagePlus economics", note: "Chase co-brand payments; the program secured a $6.8B loan in 2020" },
      { source: "Aircraft financing and bond markets", note: "EETCs and secured debt fund deliveries" },
      { source: "Equity markets", note: "crisis-era raises diluted holders; buybacks now run in reverse" }
    ],
    capitalOut: [
      { use: "Fleet capex", note: "the United Next orderbook: hundreds of narrowbodies and widebodies on firm order" },
      { use: "Debt reduction", note: "paying down the pandemic borrowing stack as cash flow allows" },
      { use: "Share buybacks", note: "resumed in 2024, the first since COVID" },
      { use: "Labor and airport investment", note: "new contracts industry-wide plus terminal and lounge buildouts" }
    ],
    revenueMix: [
      { label: "Domestic passenger", pct: 56 }, { label: "International passenger", pct: 35 }, { label: "Cargo", pct: 3 }, { label: "Loyalty & other", pct: 6 }
    ],
    moat: "Slot-constrained hubs (Newark, O'Hare, SFO) and the widest international network of any US carrier, defended by gate control, alliance scale (Star Alliance), and loyalty lock-in.",
    risks: "Boeing delivery dependence, Newark ATC congestion, fuel and labor cost swings, and an orderbook that assumes sustained demand growth.",
    competitors: ["delta-air-lines", "American Airlines", "Southwest and low-cost carriers"]
  },

  "ryanair": {
    id: "ryanair", ticker: "RYAAY", mcap: 34, name: "Ryanair", full: "Ryanair Holdings plc", country: "IE",
    industries: ["aviation"], role: "Europe's ultra-low-cost leader, #1 by passengers", founded: 1984, hq: "Dublin, Ireland",
    stats: [{ label: "Revenue", value: "€13.95B", note: "FY2025 (ended Mar 2025)" }, { label: "Passengers", value: "200M", note: "FY2025; ~207M targeted for FY2026" }, { label: "H1 FY26 profit", value: "€2.54B", note: "Apr to Sep 2025, up 42%" }, { label: "Average fare", value: "~€58", note: "H1 FY26; ancillary adds ~€23 per passenger" }],
    model: [
      "Ryanair is a cost machine that happens to fly planes: one aircraft type (Boeing 737) bought at crisis-era prices, 25-minute turnarounds, point-to-point routes into cheap airports, and 100% direct distribution through its own app and website. Fares average about €58 (H1 FY26) and function partly as customer acquisition: ancillary revenue (priority boarding, seats, bags) adds roughly €23 per passenger at near-pure margin, and made up 34% of FY2025 revenue. The unit-cost gap to every European rival is the product, and it widened after COVID.",
      "The balance sheet is the second weapon: Ryanair carries one of the strongest credit profiles in the industry, held €3B of cash at September 2025 while cutting gross debt from €2.7B to €1.5B, and pays cash for aircraft that leveraged rivals must lease. That lets it order countercyclically: 300 Boeing 737 MAX-10s underpin a plan to reach 300M passengers a year by 2034. H1 FY26 showed the operating leverage, with profit after tax up 42% to €2.54B as traffic hit a record 119M and fares recovered 13%."
    ],
    customers: [
      { who: "Price-driven leisure travelers", note: "200M passengers in FY2025, the most of any European airline" },
      { who: "Visiting friends & relatives (VFR) traffic", note: "dense intra-European city pairs, especially where migrants commute home" },
      { who: "Ancillary buyers", note: "priority boarding, reserved seats, and bags convert a €58 fare into €80+ of revenue" },
      { who: "Airports and regions", note: "secondary airports pay for traffic via low fees and incentives; Ryanair sells passenger volume itself" }
    ],
    suppliers: [
      { who: "Boeing", note: "sole airframer: 737-800s, MAX 8200 Gamechangers, and 300 MAX-10s on order; delivery delays are the key constraint" },
      { who: "CFM International", note: "engines for the entire fleet; single-type commonality keeps maintenance cheap" },
      { who: "Secondary and primary airports", note: "Stansted, Bergamo, Charleroi and hundreds more compete for Ryanair capacity" },
      { who: "Fuel suppliers and hedge counterparties", note: "fuel is heavily hedged years forward, smoothing the largest cost line" },
      { who: "In-house operations", note: "Ryanair Labs (tech), internal maintenance, and its own crew training pipeline" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "the lowest costs in Europe generate cash even at €58 fares" },
      { source: "Ancillary revenue stream", note: "€4.7B in FY2025; high-margin and more stable than fares" },
      { source: "Bond markets", note: "unsecured investment-grade issuance, rare for an airline; debt is modest and falling" }
    ],
    capitalOut: [
      { use: "Aircraft capex", note: "paid largely in cash; the MAX-10 order is the路 growth engine to 300M passengers" },
      { use: "Share buybacks", note: "rolling programs; billions returned since 2008" },
      { use: "Dividends", note: "a regular dividend introduced in 2024, a first in company history" },
      { use: "Debt repayment", note: "gross debt cut from €2.7B to €1.5B between Mar and Sep 2025" }
    ],
    revenueMix: [
      { label: "Scheduled fares", pct: 66 }, { label: "Ancillary services", pct: 34 }
    ],
    moat: "A structural unit-cost advantage no European rival has closed in 30 years: fleet commonality, cash-bought aircraft, cheap airports, and direct distribution compound into fares competitors cannot match profitably.",
    risks: "Boeing delivery delays capping growth, EU261 compensation and ATC strike disruption, environmental taxes on short-haul flying, and eventual succession after Michael O'Leary.",
    competitors: ["easyJet", "Wizz Air", "Lufthansa Group and legacy flag carriers"]
  }

});
