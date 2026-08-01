/* Industry Atlas - companies: automotive.
 * Toyota, Tesla, BYD. Figures approximate, 2024-2025 filings and coverage;
 * mcap approx mid-2026 (Tesla ~$1.18T per July 2026 rankings). */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "toyota": {
    id: "toyota", ticker: "TM", mcap: 250, name: "Toyota", full: "Toyota Motor Corporation", country: "JP",
    industries: ["automotive"], role: "The world's largest automaker", founded: 1937, hq: "Toyota City, Japan",
    stats: [{ label: "Vehicles sold", value: "~11M", note: "2024, #1 globally" }, { label: "Revenue", value: "~$300B", note: "FY2025" }, { label: "Hybrid leadership", value: "#1", note: "the strategy the market came back to" }, { label: "Operating margin", value: "~10%", note: "exceptional for volume autos" }],
    model: [
      "Toyota sells more vehicles than anyone on Earth (~11M/yr) and makes more profit than any volume automaker, running the production system the whole industry studies. The model: relentless manufacturing efficiency (the Toyota Production System), a full-line global portfolio, and a captive finance arm smoothing every cycle.",
      "Its contrarian energy-transition bet defined the decade: rather than all-in BEVs, Toyota scaled hybrids (where it holds unmatched cost advantage) while keeping hydrogen and solid-state batteries in development. When EV growth slowed and hybrid demand surged in 2024-2025, the strategy the market once mocked became the industry's envy: record profits while BEV-heavy rivals bled."
    ],
    customers: [
      { who: "Global consumers, ~170 countries", note: "Corolla/RAV4/Camry: the reliability franchise", share: "retail core" },
      { who: "Fleet & commercial buyers", note: "Hilux is emerging-market infrastructure" },
      { who: "Luxury buyers (Lexus)", note: "the profit-dense premium arm" },
      { who: "Dealers (~10,000 worldwide)", note: "the actual direct customer of the factory" }
    ],
    suppliers: [
      { who: "Denso, Aisin (keiretsu)", note: "part-owned mega-suppliers: the tight supply web" },
      { who: "Steel & aluminum makers", note: "a car is still mostly metal" },
      { who: "Chip makers", note: "the 2021-22 shortage rewrote its just-in-time gospel" },
      { who: "Battery partners (Panasonic, CATL, BYD)", note: "plus its own Prime Planet JV" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$40B+/yr through cycles" },
      { source: "Captive finance funding", note: "Toyota Financial issues globally" },
      { source: "Cross-shareholdings", note: "the unwinding keiretsu equity web" }
    ],
    capitalOut: [
      { use: "Capex + R&D ~$25B+/yr", note: "electrification, solid-state, software" },
      { use: "Buybacks & dividends", note: "record returns as governance reforms bite" },
      { use: "Battery plants", note: "North Carolina, Japan: the BEV hedge being built" }
    ],
    revenueMix: [
      { label: "Automotive", pct: 89 }, { label: "Financial services", pct: 9 }, { label: "Other", pct: 2 }
    ],
    moat: "The production system + hybrid cost leadership + a reliability brand compounded over 60 years: scale that actually earns its margin.",
    risks: "BEV transition timing (too slow if EVs re-accelerate); yen swings; China share loss to BYD-class locals; tariff exposure on US imports.",
    competitors: ["tesla", "byd", "Volkswagen"]
  },

  "tesla": {
    id: "tesla", ticker: "TSLA", mcap: 1180, name: "Tesla", full: "Tesla, Inc.", country: "US",
    industries: ["automotive", "ev"], role: "The EV pioneer priced as an AI company", founded: 2003, hq: "Austin, USA",
    stats: [{ label: "Deliveries", value: "~1.8M", note: "2024, roughly flat: the growth pause" }, { label: "Revenue", value: "~$98B", note: "2024" }, { label: "Energy storage", value: "31 GWh+", note: "2024, the quiet second act" }, { label: "Market cap", value: "~$1.2T", note: "mostly autonomy/robotics hope" }],
    model: [
      "Tesla built the EV era: vertical integration (cells to software), a direct sales model that bypassed dealers, and manufacturing innovations (gigacasting) that reset cost curves. Its car business earns real margins by industry standards, but the trillion-dollar valuation prices something else entirely: full self-driving robotaxis, the Optimus humanoid robot, and an energy storage business growing 50%+ a year.",
      "The tension is visible in the numbers: vehicle deliveries plateaued (~1.8M in 2024, dipping 2025 amid brand controversy and Chinese competition) while the stock trades on autonomy milestones. Energy (Megapack grid storage) is the underappreciated compounder: gigawatt-hours double while cars stall. Tesla is simultaneously an auto company being commoditized and an AI bet being priced."
    ],
    customers: [
      { who: "EV consumers, direct", note: "no dealers: order online, delivered", share: "~78% of revenue" },
      { who: "Utilities & grid operators", note: "Megapack buyers, multi-GWh orders" },
      { who: "Other automakers", note: "regulatory credits: still billions/yr of pure margin" },
      { who: "Supercharger users (all brands)", note: "NACS became the North American standard" }
    ],
    suppliers: [
      { who: "Panasonic, LG, CATL", note: "cells alongside in-house 4680 production" },
      { who: "Lithium/nickel refiners", note: "direct offtakes; its own Texas lithium refinery" },
      { who: "NVIDIA + own Dojo silicon", note: "training compute for FSD" },
      { who: "Global casting & press suppliers", note: "gigapress manufacturing" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$15B/yr even in the plateau" },
      { source: "Regulatory credits", note: "competitors pay for its zero-emission halo" },
      { source: "Equity (historically)", note: "raised at premium valuations when needed; none needed now" }
    ],
    capitalOut: [
      { use: "Capex $10B+/yr", note: "gigafactories, 4680 cells, Dojo, robotaxi tooling" },
      { use: "R&D on autonomy & Optimus", note: "the valuation's actual product" },
      { use: "No dividends or buybacks", note: "everything reinvests" }
    ],
    revenueMix: [
      { label: "Automotive", pct: 78 }, { label: "Energy & storage", pct: 10 }, { label: "Services & other", pct: 12 }
    ],
    moat: "Brand + charging network + manufacturing scale in EVs, and the largest real-world driving dataset for autonomy: if FSD works, the moat is generational.",
    risks: "Valuation assumes autonomy success; BYD-class price competition; brand politicization dented demand; key-person concentration is absolute.",
    competitors: ["byd", "toyota", "Waymo (autonomy)"]
  },

  "byd": {
    id: "byd", ticker: "BYDDY", mcap: 130, name: "BYD", full: "BYD Company Limited", country: "CN",
    industries: ["automotive", "ev", "batteries"], role: "China's vertically integrated EV giant", founded: 1995, hq: "Shenzhen, China",
    stats: [{ label: "NEV sales", value: "4.3M", note: "2024, #1 globally (BEV+PHEV)" }, { label: "Revenue", value: "~$107B", note: "2024, passed Tesla" }, { label: "Battery maker", value: "#2 globally", note: "the Blade LFP battery" }, { label: "Employees", value: "900k+", note: "vertical integration in headcount form" }],
    model: [
      "BYD began as a battery maker and became the world's largest new-energy-vehicle producer by owning the whole stack: cells (its Blade LFP), semiconductors, motors, and final assembly. Vertical integration plus Chinese manufacturing scale lets it price EVs at internal-combustion parity and still earn margin: the cost position that terrifies every legacy OEM.",
      "The strategy is a barbell: dominate China's mass market (Seagull at ~$10k) while pushing premium brands (Denza, Yangwang) upmarket, then export the surplus: Southeast Asia, Latin America, Europe (tariffs permitting), plus locally assembled plants from Thailand to Hungary to Brazil. Its car-carrier fleet, built because shipping was the bottleneck, says everything about the integration instinct."
    ],
    customers: [
      { who: "Chinese consumers", note: "the home market majority", share: "~80% of volume" },
      { who: "Export markets", note: "1M+ overseas targets: SE Asia, LatAm, Europe" },
      { who: "Fleet & taxi operators", note: "e-buses and taxis were the original beachhead" },
      { who: "Other OEMs (batteries)", note: "external Blade cell sales, including to Tesla and Toyota" }
    ],
    suppliers: [
      { who: "Lithium & materials producers", note: "plus its own lithium stakes and refining" },
      { who: "Own semiconductor arm", note: "BYD Semiconductor makes its IGBTs" },
      { who: "Chinese steel & components web", note: "the Shenzhen-Chongqing manufacturing cluster" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "scale economics at 4M+ units" },
      { source: "Hong Kong + Shenzhen listings", note: "dual-listed equity; Buffett was an early backer" },
      { source: "Chinese industrial policy", note: "subsidies built the runway; scale now self-funds" }
    ],
    capitalOut: [
      { use: "Capex on plants", note: "domestic gigafactories + overseas assembly (Thailand, Hungary, Brazil)" },
      { use: "R&D ~$6B+/yr", note: "batteries, e-platforms, smart driving (God's Eye)" },
      { use: "Shipping fleet", note: "own car carriers to control export logistics" }
    ],
    revenueMix: [
      { label: "Automobiles", pct: 79 }, { label: "Mobile handset components (BYD Electronic)", pct: 17 }, { label: "Other", pct: 4 }
    ],
    moat: "Full-stack vertical integration + Blade battery cost leadership + Chinese scale: the lowest-cost EV producer on Earth by a wide margin.",
    risks: "EU/US tariff walls cap exports; Chinese domestic price war compresses everyone; property-adjacent consumer weakness at home; geopolitics taxes every expansion.",
    competitors: ["tesla", "toyota", "Geely"]
  }
});
