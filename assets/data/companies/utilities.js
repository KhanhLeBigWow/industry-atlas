/* Industry Atlas - company profiles: utilities.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Figures researched July 2026 from company FY2025 releases and market data. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "nextera-energy": {
    id: "nextera-energy", ticker: "NEE", mcap: 185, name: "NextEra Energy", full: "NextEra Energy, Inc.", country: "US",
    industries: ["utilities"], role: "Renewables developer #1 + regulated utility", founded: 1925, hq: "Juno Beach, Florida, USA",
    stats: [{ label: "Revenue", value: "$27.4B", note: "2025, up 11%" }, { label: "Adjusted earnings", value: "$7.7B", note: "2025, $3.71/share" }, { label: "Backlog", value: "~30 GW", note: "renewables + storage, YE 2025" }, { label: "FPL customers", value: "~6M accounts", note: "12M+ Floridians" }],
    model: [
      "NextEra is 2 companies under 1 ticker. Florida Power & Light, America's largest electric utility, earns a regulated return on an ever-growing Florida rate base: the state adds people, FPL adds grid and cheap solar, regulators approve the spend, earnings compound. NextEra Energy Resources, the other half, is the world's largest developer of wind, solar, and battery storage, selling output under long-term contracts to utilities and, increasingly, data centers.",
      "The engine is capital conversion at scale: tens of billions of capex a year turned into rate base or 20-year contracted cash flows, financed cheaper than any rival can match. 2025 was a record origination year (~13.5 GW added to backlog, 7.2 GW placed in service), and AI demand is now pulling the pipeline: a ~15 GW data center prospect list and a deal with Google to recommission the Duane Arnold nuclear plant in Iowa by decade's end."
    ],
    customers: [
      { who: "Florida households & businesses", note: "~6M FPL accounts; regulated monopoly service territory", share: "~2/3 of revenue" },
      { who: "Hyperscalers & data centers", note: "Google (Duane Arnold PPA); ~15 GW data center pipeline at Energy Resources" },
      { who: "Utilities, munis, co-ops", note: "long-term PPAs for wind, solar, and storage output" },
      { who: "Wholesale power markets", note: "merchant tail and hedged positions around the contracted core" }
    ],
    suppliers: [
      { who: "GE Vernova", note: "wind turbines and gas turbines for new dispatchable capacity" },
      { who: "First Solar & module makers", note: "solar panels at multi-GW annual volumes" },
      { who: "Battery cell suppliers", note: "grid-scale storage packs, the fastest-growing input" },
      { who: "EPC contractors & skilled trades", note: "thousands of MW under construction at any moment" },
      { who: "Natural gas producers & pipelines", note: "fuel for FPL's fleet, still the backbone of Florida supply" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$13B+ a year across the regulated and contracted fleets" },
      { source: "Debt markets", note: "one of the largest US corporate issuers; scale is the moat's twin" },
      { source: "Tax equity & credit transfers", note: "IRA-era tax credits monetized with banks and corporates" },
      { source: "Asset recycling & partners", note: "stakes sold to infrastructure capital to fund the next build" }
    ],
    capitalOut: [
      { use: "Capex ~$30B+ / year", note: "FPL grid and solar ($8.9B in 2025) plus Energy Resources buildout" },
      { use: "Dividends", note: "30+ consecutive years of increases; the sector's compounding benchmark" },
      { use: "Interest expense", note: "servicing a heavy but investment-grade debt stack" },
      { use: "Storm hardening & O&M", note: "burying lines and rebuilding fast after hurricanes" }
    ],
    revenueMix: [
      { label: "FPL (regulated utility)", pct: 67 }, { label: "Energy Resources (contracted renewables)", pct: 31 }, { label: "Corporate & other", pct: 2 }
    ],
    moat: "Scale advantages that stack: the lowest cost of capital in the sector, the largest development pipeline and supply chain in renewables, and a constructive Florida regulatory compact no competitor can replicate.",
    risks: "Interest rate sensitivity on long-duration assets; policy whiplash on renewable tax credits and tariffs; Florida hurricane exposure; execution risk on a ~30 GW backlog.",
    competitors: ["constellation-energy", "iberdrola", "Southern Company", "Duke Energy", "Brookfield Renewable"]
  },

  "constellation-energy": {
    id: "constellation-energy", ticker: "CEG", mcap: 98, name: "Constellation Energy", full: "Constellation Energy Corporation", country: "US",
    industries: ["utilities"], role: "Largest US clean power producer (nuclear)", founded: 2022, hq: "Baltimore, Maryland, USA",
    stats: [{ label: "Revenue", value: "$25.5B", note: "2025, up 8%" }, { label: "Capacity", value: "~60 GW", note: "post-Calpine, Jan 2026" }, { label: "Nuclear fleet", value: "~22 GW", note: "largest in the US; ~10% of US clean power" }, { label: "Calpine deal", note: "closed Jan 2026", value: "~$26.6B TEV" }],
    model: [
      "Constellation, spun out of Exelon in 2022, owns the largest nuclear fleet in America and sells its output competitively rather than through regulated rates. The model is a spread business: near-zero-marginal-cost, always-on carbon-free generation on one side, and one of the biggest retail books in the country (about 3/4 of the Fortune 100 buy from it) on the other. The federal nuclear production tax credit puts a revenue floor under the fleet, capping downside while leaving upside to power prices.",
      "AI turned that fleet into strategic infrastructure. Microsoft signed a 20-year deal to restart the 835 MW Crane Clean Energy Center (the former Three Mile Island Unit 1), Meta contracted the 1.1 GW Clinton plant for 20 years, and in January 2026 Constellation closed the ~$26.6B acquisition of Calpine, adding ~26 GW of flexible gas and the Geysers geothermal complex to create the nation's largest power producer at ~60 GW."
    ],
    customers: [
      { who: "Hyperscalers", note: "Microsoft (Crane restart) and Meta (Clinton), both 20-year fixed-price PPAs" },
      { who: "Commercial & industrial retail", note: "~3/4 of the Fortune 100; one of the largest C&I supply books in the US" },
      { who: "Wholesale markets & capacity auctions", note: "PJM, ERCOT, New York, New England energy and capacity sales" },
      { who: "Homes & small businesses", note: "millions of competitive retail electricity and gas accounts" }
    ],
    suppliers: [
      { who: "Cameco, Urenco, Orano", note: "uranium, conversion, and enrichment for the nuclear fleet" },
      { who: "Westinghouse & Framatome", note: "fuel fabrication, reactor components, outage services" },
      { who: "Natural gas producers & pipelines", note: "fuel for the ~26 GW Calpine gas fleet" },
      { who: "GE Vernova & Siemens Energy", note: "turbine services and parts across the combined fleet" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "merchant power margins plus the retail book" },
      { source: "Nuclear PTC floor", note: "IRA support price de-risks the fleet's revenue line" },
      { source: "Debt markets", note: "investment-grade issuance; Calpine debt assumed at close" },
      { source: "Equity", note: "50M new shares issued as part of the Calpine consideration" }
    ],
    capitalOut: [
      { use: "Nuclear fuel & fleet capex", note: "refueling outages, uprates, and the ~$1.6B Crane restart" },
      { use: "Buybacks & dividend", note: "multi-billion repurchase authority; dividend growing ~10% a year" },
      { use: "Deleveraging", note: "digesting Calpine while defending the credit rating" },
      { use: "Growth options", note: "uprates, data center co-location, early new-nuclear work" }
    ],
    revenueMix: [
      { label: "Electricity (retail + wholesale)", pct: 85 }, { label: "Natural gas sales", pct: 12 }, { label: "Other energy products", pct: 3 }
    ],
    moat: "An irreplaceable asset base: nobody can build 22 GW of licensed US nuclear this generation, and 24/7 carbon-free power is exactly what hyperscalers will sign 20-year contracts for.",
    risks: "Merchant power and capacity price volatility; nuclear operational or regulatory events; Calpine integration and added gas exposure; policy risk to the PTC floor.",
    competitors: ["Vistra", "NRG Energy", "Talen Energy", "nextera-energy"]
  },

  "iberdrola": {
    id: "iberdrola", ticker: "IBDRY", mcap: 155, name: "Iberdrola", full: "Iberdrola, S.A.", country: "ES",
    industries: ["utilities"], role: "Global grids + renewables supermajor", founded: 1901, hq: "Bilbao, Spain",
    stats: [{ label: "Revenue", value: "€45B", note: "2025" }, { label: "EBITDA", value: "€15.7B", note: "2025, +3%" }, { label: "Net profit", value: "€6.3B", note: "2025, +12%" }, { label: "Networks asset base", value: "€51B", note: "regulated, +12% in 2025" }],
    model: [
      "Iberdrola, Europe's most valuable utility, runs 2 complementary machines across 4 core markets: Spain, the UK (ScottishPower plus Electricity North West), the US Northeast (Avangrid, taken fully private in late 2024), and Brazil (Neoenergia). Regulated electricity networks now contribute roughly half of group EBITDA from a €51B asset base, while one of the world's largest renewable fleets (hydro, onshore and offshore wind, solar) sells power under PPAs and hedges into wholesale markets.",
      "The strategy has pivoted hard toward the grid: of €14.5B invested in 2025, 62% went to networks and 60% to the US and UK, where regulators pay predictable returns on transmission and distribution that AI, electrification, and reshoring all require. Networks EBITDA jumped 21% in 2025 and carried the group while weak Spanish power prices dented the generation and customer business, exactly the diversification the model is built for."
    ],
    customers: [
      { who: "Regulated network users", note: "30M+ grid supply points across Spain, UK, US Northeast, Brazil" },
      { who: "Retail energy customers", note: "tens of millions of electricity and gas contracts in liberalized markets" },
      { who: "Corporate PPA buyers", note: "Amazon-class offtakers contracting wind and solar output long term" },
      { who: "Wholesale markets", note: "merchant and hedged sales from the ~45 GW renewables-led fleet" }
    ],
    suppliers: [
      { who: "Siemens Gamesa, Vestas, GE Vernova", note: "onshore and offshore wind turbines" },
      { who: "Hitachi Energy, Prysmian", note: "transformers, HVDC gear, and cables: the scarce grid inputs" },
      { who: "Solar module & battery makers", note: "panels and storage for the build pipeline" },
      { who: "EPC & marine contractors", note: "offshore wind construction (East Anglia 3, Vineyard Wind, Baltic Eagle)" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "€15.7B EBITDA funds most of the plan" },
      { source: "Green bonds", note: "the world's largest corporate green bond issuer" },
      { source: "Partners & asset rotation", note: "co-investors (Masdar, GIC) buy into projects to recycle capital" },
      { source: "Hybrid capital & scrip dividends", note: "balance sheet flexibility without losing the credit rating" }
    ],
    capitalOut: [
      { use: "Capex €14.5B (2025)", note: "62% networks; €30B+ earmarked for grids in UK, US, Brazil through 2028" },
      { use: "Dividends", note: "steadily rising payout on a €135B+ market cap" },
      { use: "M&A", note: "Electricity North West (2024), Avangrid minority buyout, Brazil consolidation" },
      { use: "Interest expense", note: "servicing ~€50B of net debt across 4 currencies" }
    ],
    revenueMix: [
      { label: "Networks (EBITDA basis)", pct: 50 }, { label: "Renewables (EBITDA basis)", pct: 35 }, { label: "Customer & other (EBITDA basis)", pct: 15 }
    ],
    moat: "Regulated monopoly grids in 4 stable jurisdictions layered under a top-tier global renewables fleet: diversified returns, unmatched green financing access, and decades of regulatory relationships.",
    risks: "Regulatory resets and tariff reviews across jurisdictions; offshore wind cost inflation; weak Spanish power prices; currency swings (GBP, USD, BRL); grid reliability scrutiny after Spain's April 2025 blackout.",
    competitors: ["Enel", "EDF", "National Grid", "RWE", "nextera-energy"]
  }

});
