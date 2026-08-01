/* Industry Atlas - companies: telecom.
 * T-Mobile US, Verizon, Deutsche Telekom. Figures approximate, 2024-2025
 * filings and coverage; mcap approx mid-2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "t-mobile": {
    id: "t-mobile", ticker: "TMUS", mcap: 270, name: "T-Mobile US", full: "T-Mobile US, Inc.", country: "US",
    industries: ["telecom"], role: "US wireless growth leader", founded: 1994, hq: "Bellevue, USA",
    stats: [{ label: "Revenue", value: "$81B", note: "2024" }, { label: "Postpaid customers", value: "100M+", note: "2024, best-in-class adds" }, { label: "5G coverage", value: "#1 US", note: "the Sprint spectrum dividend" }, { label: "FCF", value: "~$17B", note: "2024, after the capex peak" }],
    model: [
      "T-Mobile sells wireless subscriptions: a monthly toll on connectivity, at churn rates so low the revenue behaves like an annuity. The 2020 Sprint merger delivered the industry's best mid-band 5G spectrum position, letting it win share from AT&T and Verizon for years on network quality, the thing carriers can least quickly copy.",
      "The economics are classic infrastructure-plus-brand: enormous fixed network cost, near-zero marginal cost per gigabyte, so every incremental subscriber is nearly pure margin. Having passed its 5G capex peak, the cash now flows to buybacks and a growing fixed-wireless broadband business that attacks cable with the network it already built."
    ],
    customers: [
      { who: "~130M wireless connections", note: "postpaid consumer is the profit core", share: "most of revenue" },
      { who: "Enterprises & government", note: "the historic laggard segment it is now winning" },
      { who: "Fixed-wireless broadband homes", note: "6M+ subscribers: cable's new competitor" },
      { who: "MVNOs & wholesale", note: "reselling capacity on the network's edges" }
    ],
    suppliers: [
      { who: "Ericsson & Nokia", note: "radio access network gear" },
      { who: "Tower companies (American Tower, Crown Castle)", note: "it rents most of its ~80k sites" },
      { who: "Apple & Samsung", note: "handsets, sold on to subscribers near cost" },
      { who: "Deutsche Telekom", note: "majority owner and technology partner" }
    ],
    capitalIn: [
      { source: "Subscription cash flow", note: "~$17B FCF: past the 5G build peak" },
      { source: "Bond markets", note: "investment-grade; ~$70B+ debt from Sprint and spectrum" },
      { source: "Spectrum auctions (outflow when buying)", note: "licenses are the sector's land" }
    ],
    capitalOut: [
      { use: "Network capex ~$9-10B/yr", note: "densification, mid-band buildout" },
      { use: "Buybacks $10B+/yr", note: "the post-buildout capital-return era" },
      { use: "Spectrum purchases", note: "episodic multi-billion auctions" },
      { use: "Dividends", note: "initiated 2023, growing" }
    ],
    revenueMix: [
      { label: "Postpaid service", pct: 63 }, { label: "Equipment", pct: 17 }, { label: "Prepaid & wholesale", pct: 15 }, { label: "Other", pct: 5 }
    ],
    moat: "Best US mid-band 5G spectrum + lowest cost per gigabyte + a brand built on being the anti-carrier: network lead is a 5-year head start.",
    risks: "Wireless market saturating; price competition from cable MVNOs; $70B+ debt; promotional intensity burns margin when growth slows.",
    competitors: ["verizon", "AT&T"]
  },

  "verizon": {
    id: "verizon", ticker: "VZ", mcap: 180, name: "Verizon", full: "Verizon Communications Inc.", country: "US",
    industries: ["telecom"], role: "US scale incumbent", founded: 1983, hq: "New York, USA",
    stats: [{ label: "Revenue", value: "$135B", note: "2024" }, { label: "Wireless connections", value: "~145M", note: "largest US base" }, { label: "Dividend yield", value: "~6%", note: "the widows-and-orphans anchor" }, { label: "Net debt", value: "~$150B", note: "spectrum-heavy balance sheet" }],
    model: [
      "Verizon is the incumbent's incumbent: the largest, most profitable US wireless base, harvested at premium prices under a brand built on decades of network-quality advertising. Growth is scarce; the model is retention, pricing discipline, and converting a giant subscriber annuity into the S&P 500's most-watched dividend.",
      "The strategic bind: it paid ~$53B for C-band spectrum to catch up in 5G while T-Mobile got Sprint's for cheap, loading the balance sheet just as growth stalled. The response is financial: cut capex, protect the dividend, push broadband (Fios plus fixed-wireless) and premium plans, and let scale do the compounding."
    ],
    customers: [
      { who: "~145M wireless connections", note: "premium postpaid consumer skew", share: "~75% of revenue" },
      { who: "Enterprises & public sector", note: "networks, private 5G, FirstNet rival offerings" },
      { who: "Broadband households", note: "Fios fiber + fixed wireless, ~12M connections" },
      { who: "Wholesale & MVNOs", note: "cable's wireless offers ride partly on Verizon" }
    ],
    suppliers: [
      { who: "Ericsson, Nokia, Samsung Networks", note: "RAN and core gear" },
      { who: "Tower & fiber owners", note: "site leases and backhaul" },
      { who: "Corning", note: "fiber glass for Fios and densification" },
      { who: "Handset makers", note: "iPhone subsidies are a real cost line" }
    ],
    capitalIn: [
      { source: "Operating cash flow ~$37B", note: "the annuity engine" },
      { source: "Bond markets", note: "one of the world's largest corporate borrowers" },
      { source: "Asset sales", note: "media misadventures (AOL/Yahoo) divested at a loss" }
    ],
    capitalOut: [
      { use: "Dividends ~$11B/yr", note: "18 straight years of increases: the covenant with shareholders" },
      { use: "Capex ~$17-18B/yr", note: "C-band buildout winding down" },
      { use: "Debt paydown", note: "the deleveraging decade after C-band" },
      { use: "Spectrum", note: "$53B C-band in 2021: the bet it had to make" }
    ],
    revenueMix: [
      { label: "Consumer wireless & broadband", pct: 76 }, { label: "Business", pct: 22 }, { label: "Other", pct: 2 }
    ],
    moat: "Scale, premium brand, and the largest profitable subscriber base in US telecom: hard to grow, very hard to kill.",
    risks: "Growth-free core; T-Mobile's network lead; ~$150B debt against rising rates; broadband is the only real growth and cable fights back.",
    competitors: ["t-mobile", "AT&T"]
  },

  "deutsche-telekom": {
    id: "deutsche-telekom", ticker: "DTEGY", mcap: 180, name: "Deutsche Telekom", full: "Deutsche Telekom AG", country: "DE",
    industries: ["telecom"], role: "Europe's telecom champion", founded: 1995, hq: "Bonn, Germany",
    stats: [{ label: "Revenue", value: "EUR 116B", note: "2024" }, { label: "T-Mobile US stake", value: "~51%", note: "most of the equity value" }, { label: "Customers", value: "250M+", note: "across Europe + US" }, { label: "EBITDA AL", value: "EUR 43B", note: "2024" }],
    model: [
      "Deutsche Telekom is two companies wearing one ticker: a majority stake in T-Mobile US (the growth machine that is most of its value) and Europe's steadiest incumbent telecom across Germany and a dozen markets. The US stake turned a sleepy utility into the only European carrier that compounded like a tech stock.",
      "The European business runs the classic incumbent playbook: fiber buildout, B2B services, and disciplined pricing in a 3-to-4-player market structure that Brussels keeps fragmented. Cash from the mature European base plus the consolidated US engine funds fiber capex, dividends, and gradual buy-ups of the T-Mobile stake: management's favorite acquisition is its own subsidiary."
    ],
    customers: [
      { who: "German households & businesses", note: "fixed + mobile incumbency, ~40% share", share: "~25% of revenue" },
      { who: "US wireless subscribers (via TMUS)", note: "consolidated: the growth and the multiple", share: "~65% of revenue" },
      { who: "European markets (10+)", note: "Greece, Poland, Czechia, Hungary and more" },
      { who: "Enterprises (T-Systems)", note: "the perennially restructured IT services arm" }
    ],
    suppliers: [
      { who: "Ericsson & Nokia", note: "network gear; Huawei being phased out of the core" },
      { who: "Fiber construction firms", note: "Germany's FTTH catch-up is a civil-engineering program" },
      { who: "Handset makers", note: "device volumes across 2 continents" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "EUR 40B+ EBITDA across the group" },
      { source: "Bond markets", note: "one of Europe's largest corporate issuers" },
      { source: "German state legacy", note: "the government still holds ~28% directly and via KfW" }
    ],
    capitalOut: [
      { use: "Capex EUR 16-17B/yr", note: "German fiber + US network via TMUS" },
      { use: "Dividends", note: "EUR 0.90+/share, tied to earnings growth" },
      { use: "TMUS stake purchases", note: "buying up toward and past 50% over years" },
      { use: "Tower monetization", note: "sold GD Towers stake at a 27x multiple in 2022" }
    ],
    revenueMix: [
      { label: "T-Mobile US", pct: 65 }, { label: "Germany", pct: 22 }, { label: "Europe segment", pct: 10 }, { label: "Systems & other", pct: 3 }
    ],
    moat: "The TMUS control stake (a US growth asset no other EU telecom has) + German incumbency + scale purchasing across 250M customers.",
    risks: "Value concentrated in one US asset; German fiber capex race; EU regulation keeps returns capped; T-Systems chronically underperforms.",
    competitors: ["verizon", "Vodafone", "Orange"]
  }
});
