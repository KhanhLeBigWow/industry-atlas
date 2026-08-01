/* Industry Atlas - companies: lithium.
 * Albemarle, SQM, Ganfeng. Figures approximate, 2024-2025 filings and
 * coverage through the price crash; mcap approx mid-2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "albemarle": {
    id: "albemarle", ticker: "ALB", mcap: 12, name: "Albemarle", full: "Albemarle Corporation", country: "US",
    industries: ["lithium"], role: "The West's lithium major", founded: 1994, hq: "Charlotte, USA",
    stats: [{ label: "Revenue", value: "~$5.4B", note: "2024, (44)% vs 2023: the crash year" }, { label: "Assets", value: "Atacama + Greenbushes", note: "stakes in the world's best brine and hard rock" }, { label: "Peak-to-trough", value: "(80)%+", note: "lithium price collapse 2022-2025" }, { label: "Conversion plants", value: "US, Chile, Australia, China", note: "global footprint" }],
    model: [
      "Albemarle is the largest Western lithium producer, built on 2 of the world's premier resources: a share of Chile's Atacama brine (lowest-cost lithium on Earth) and a 49% stake in Australia's Greenbushes (the best spodumene mine). It converts these into battery-grade chemicals sold on long-term contracts to cell makers and OEMs.",
      "The economics are pure commodity leverage: when lithium carbonate ran to ~$80k/t in 2022 it printed money; when prices collapsed ~90% to ~$10k/t it slashed capex, cut jobs, and idled expansions. The bet embedded in the equity: EV demand compounds through the decade, today's price is below incentive cost for new supply, and owning tier-1 resources means surviving to the other side of the cycle."
    ],
    customers: [
      { who: "Battery cell makers", note: "CATL, LG, Panasonic class: qualified, contracted volumes", share: "core" },
      { who: "EV OEMs (direct)", note: "Tesla-class direct supply deals" },
      { who: "Specialties buyers", note: "bromine and catalysts: the non-lithium cash cushion" }
    ],
    suppliers: [
      { who: "Chilean state (CORFO lease)", note: "Atacama access runs on a government lease to 2043" },
      { who: "Talison JV (Greenbushes)", note: "co-owned with Tianqi/IGO: the hard-rock crown jewel" },
      { who: "Energy & reagents", note: "conversion is a chemicals business" }
    ],
    capitalIn: [
      { source: "Operating cash flow (cyclical)", note: "boom-year windfalls fund bust-year survival" },
      { source: "Equity raise 2024", note: "$2.3B mandatory convertible at the cycle bottom" },
      { source: "Customer prepayments", note: "OEMs co-fund capacity for security of supply" }
    ],
    capitalOut: [
      { use: "Capex (slashed)", note: "from $2B+/yr to maintenance while prices stay low" },
      { use: "Conversion capacity", note: "Kemerton, Meishan: build-outs paused or trimmed" },
      { use: "Dividends", note: "30-year growth streak defended through the crash" }
    ],
    revenueMix: [
      { label: "Energy storage (lithium)", pct: 75 }, { label: "Specialties (bromine)", pct: 20 }, { label: "Ketjen catalysts", pct: 5 }
    ],
    moat: "Tier-1 resource ownership (Atacama brine + Greenbushes rock): the lowest-cost positions survive every cycle and buy distressed assets at the bottom.",
    risks: "Price took ~90% drawdowns; Chilean resource nationalism (state lithium policy); Chinese conversion overcapacity; EV demand timing risk.",
    competitors: ["sqm", "ganfeng-lithium", "Pilbara Minerals"]
  },

  "sqm": {
    id: "sqm", ticker: "SQM", mcap: 11, name: "SQM", full: "Sociedad Quimica y Minera de Chile", country: "CL",
    industries: ["lithium"], role: "Atacama's other giant", founded: 1968, hq: "Santiago, Chile",
    stats: [{ label: "Lithium capacity", value: "~210kt LCE", note: "among the world's largest" }, { label: "Cash cost", value: "bottom quartile", note: "Atacama brine economics" }, { label: "Codelco JV", value: "from 2025", note: "state partnership extends Atacama rights to 2060" }, { label: "Other lines", value: "iodine #1", note: "plus specialty plant nutrition" }],
    model: [
      "SQM pumps lithium-rich brine from beneath Chile's Atacama salt flat, the cheapest large-scale lithium source on Earth, and evaporates it into carbonate and hydroxide for the battery chain. Alongside sits a genuinely diversified chemicals business: the world's #1 iodine producer and a specialty fertilizer franchise that cushions lithium's violence.",
      "The defining 2020s event was political: Chile's National Lithium Strategy forced a joint venture with state-owned Codelco (agreed 2024, effective 2025) that extends SQM's Atacama rights to 2060 in exchange for majority state participation in the expanded project. The read: security of tenure bought with shared upside: the template for resource nationalism everywhere."
    ],
    customers: [
      { who: "Battery & cathode makers (Asia)", note: "Korea, Japan, China contracts", share: "lithium core" },
      { who: "Agriculture (specialty nutrients)", note: "potassium nitrate for high-value crops" },
      { who: "Pharma & tech (iodine)", note: "contrast media, LCD polarizers" }
    ],
    suppliers: [
      { who: "Chilean state (CORFO/Codelco)", note: "the lease, the JV, the rules" },
      { who: "Energy & logistics", note: "Atacama operations + Antofagasta ports" },
      { who: "Reagents & equipment", note: "evaporation ponds are cheap; refining is not" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "still positive at cycle lows: the cost curve's gift" },
      { source: "NYSE + Santiago listings", note: "dual-listed equity" },
      { source: "JV structure", note: "Codelco partnership shares future capex" }
    ],
    capitalOut: [
      { use: "Capacity expansion", note: "carbonate + hydroxide debottlenecking" },
      { use: "Dividends", note: "high payout policy, cycle-variable" },
      { use: "Australia (Mt Holland JV)", note: "hard-rock diversification with Wesfarmers" }
    ],
    revenueMix: [
      { label: "Lithium", pct: 60 }, { label: "Specialty plant nutrition", pct: 20 }, { label: "Iodine & industrial chemicals", pct: 20 }
    ],
    moat: "Bottom-of-the-cost-curve Atacama brine + tenure to 2060 via the state JV + real diversification (iodine, nutrients) no lithium peer has.",
    risks: "State JV dilutes economics; brine water/environmental scrutiny; lithium price risk; Chile single-asset concentration.",
    competitors: ["albemarle", "ganfeng-lithium", "Codelco (JV partner and rival)"]
  },

  "ganfeng-lithium": {
    id: "ganfeng-lithium", ticker: "GNENY", mcap: 12, name: "Ganfeng Lithium", full: "Ganfeng Lithium Group Co., Ltd.", country: "CN",
    industries: ["lithium"], role: "China's lithium integrator", founded: 2000, hq: "Xinyu, China",
    stats: [{ label: "Position", value: "top-3 global", note: "lithium chemicals output" }, { label: "Resources", value: "5 continents", note: "Argentina brine, Australia rock, Mali, Mexico" }, { label: "Integration", value: "mine → battery", note: "chemicals, metals, batteries, recycling" }, { label: "Listings", value: "Shenzhen + HK", note: "ADR GNENY" }],
    model: [
      "Ganfeng is China's most globalized lithium company: it buys resource stakes everywhere (Argentina brines, Australian spodumene via Mount Marion, projects in Mali and Mexico) and converts at massive Chinese plants into the full product ladder: carbonate, hydroxide, metal, butyllithium, even its own battery and recycling arms.",
      "The strategy mirrors Chinese industrial policy: secure upstream resources abroad, keep the value-added conversion at home, and integrate downstream when margins allow. In the crash it kept expanding while Western peers retrenched, betting balance sheet and state-adjacent patience against the cycle: the classic Chinese commodities playbook of buying share during winters."
    ],
    customers: [
      { who: "Battery giants (CATL, BYD class)", note: "the home-market cell complex", share: "core" },
      { who: "Global OEMs", note: "Tesla, BMW, VW supply agreements" },
      { who: "Chemical & pharma buyers", note: "butyllithium and metal niches" }
    ],
    suppliers: [
      { who: "Own + JV mines", note: "Mount Marion (Australia), Cauchari-Olaroz (Argentina), Goulamina (Mali)" },
      { who: "Third-party spodumene", note: "still buys concentrate when cheaper than owning" },
      { who: "Energy & reagents", note: "conversion cost base in Jiangxi" }
    ],
    capitalIn: [
      { source: "Dual listings + debt", note: "Shenzhen/HK equity funds the acquisition machine" },
      { source: "Operating cash flow (cyclical)", note: "boom profits recycled into resource stakes" },
      { source: "Policy-bank support", note: "Chinese lenders back overseas resource deals" }
    ],
    capitalOut: [
      { use: "Resource M&A", note: "stakes across Argentina, Africa, Mexico" },
      { use: "Conversion + battery capacity", note: "hydroxide lines, solid-state pilot programs" },
      { use: "Recycling buildout", note: "closing the loop as feedstock" }
    ],
    revenueMix: [
      { label: "Lithium chemicals", pct: 70 }, { label: "Batteries", pct: 20 }, { label: "Other (metal, recycling)", pct: 10 }
    ],
    moat: "Resource optionality on 5 continents + China's lowest-cost conversion complex + full-ladder product range down to batteries.",
    risks: "Geopolitics taxes every overseas asset (Mexico permit revoked, Mali risk); price crashes hit leveraged expansion; Western supply chains derisking from Chinese refiners.",
    competitors: ["albemarle", "sqm", "Tianqi Lithium"]
  }
});
