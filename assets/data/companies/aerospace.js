/* Industry Atlas - aerospace company profiles.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Sources: Airbus FY2025 press release (Feb 2026), Boeing Q4/FY2025 release (Jan 2026),
 * GE Aerospace Q4/FY2025 release (Jan 2026), market caps as of Jul 2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "airbus": {
    id: "airbus", ticker: "EADSY", mcap: 185, name: "Airbus", full: "Airbus SE", country: "FR",
    industries: ["aerospace"], role: "Commercial aircraft #1", founded: 1970, hq: "Toulouse, France",
    stats: [{ label: "Revenue", value: "€73.4B", note: "2025, +6%" }, { label: "Deliveries", value: "793 jets", note: "2025, a record; ~870 targeted for 2026" }, { label: "Order book", value: "€619B", note: "YE2025, roughly 11 years of output" }, { label: "EBIT adjusted", value: "€7.1B", note: "2025, a 9.7% margin" }],
    model: [
      "Airbus sells commercial jets in a global duopoly where the product queue is measured in decades: the order book stood at €619B at year-end 2025, about 11 years of production. Customers pay pre-delivery installments as their aircraft move down the line, so the backlog partially finances itself. The cash machine is the A320neo family: 607 of the 793 jets delivered in 2025, built on a learning curve refined over 12,000+ aircraft.",
      "Two smaller legs diversify the cycle: Helicopters (€9.0B revenue in 2025, roughly half civil, half military) and Defence and Space (€13.4B, spanning Eurofighter, A400M, and satellites, now restructured after heavy space charges in 2024). The structural quirk is currency: costs are largely in euros while jets are priced in dollars, forcing one of the world's biggest corporate hedging programs. The current battle is industrial, not commercial: ramping the A320 line toward 75 a month by 2027 against a strained engine and aerostructures supply chain."
    ],
    customers: [
      { who: "IndiGo", note: "largest single order book in aviation, roughly 900 A320-family jets awaiting delivery" },
      { who: "Global airlines", note: "American, Delta, United, easyJet, Wizz, Emirates (A350) and dozens more" },
      { who: "Lessors (AerCap, Avolon, Air Lease)", note: "bulk buyers who place jets with airlines worldwide" },
      { who: "European governments", note: "A400M airlifters, tankers, Eurofighter work shares, military satellites" }
    ],
    suppliers: [
      { who: "CFM International and Pratt & Whitney", note: "the two A320neo engine options; engines gate the entire ramp" },
      { who: "Rolls-Royce", note: "sole engine (Trent XWB) on the A350" },
      { who: "Spirit AeroSystems", note: "key aerostructures; Airbus took over Spirit's Airbus work packages as Boeing reabsorbed the rest" },
      { who: "Safran, Thales, Collins, Liebherr", note: "landing gear, avionics, cabin and air systems" },
      { who: "Hexcel and composite suppliers", note: "carbon fiber for A350 wings and fuselage" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "delivery-driven; strengthens as the ramp scales" },
      { source: "Customer pre-delivery payments", note: "buyers finance the backlog with staged cash installments" },
      { source: "European governments", note: "historic repayable launch aid plus steady defence and space contracts" },
      { source: "Bond markets", note: "modest leverage on a net-cash balance sheet" }
    ],
    capitalOut: [
      { use: "R&D ~€3B+ self-funded", note: "next-gen single-aisle studies, hydrogen research, incremental neo upgrades" },
      { use: "Capex for the ramp", note: "new A320 final assembly lines in Toulouse, Mobile, Tianjin" },
      { use: "Dividends plus specials", note: "regular payout topped up with special dividends in strong years" },
      { use: "Supply-chain rescues", note: "buying Spirit's Airbus plants and supporting fragile suppliers" }
    ],
    revenueMix: [
      { label: "Commercial aircraft", pct: 70 }, { label: "Defence & Space", pct: 18 }, { label: "Helicopters", pct: 12 }
    ],
    moat: "A duopoly seat protected by certification barriers, an 11-year backlog, and the A320neo's grip on the single-aisle market: even a perfect new rival would wait a decade for slots and approvals.",
    risks: "Engine and aerostructures supply chain gating deliveries; dollar-euro FX exposure; defence and space execution charges; tariff and trade-policy whiplash.",
    competitors: ["boeing", "COMAC (C919, emerging in China)", "Embraer (regional jets)"]
  },

  "boeing": {
    id: "boeing", ticker: "BA", mcap: 165, name: "Boeing", full: "The Boeing Company", country: "US",
    industries: ["aerospace"], role: "Commercial aircraft #2, defense prime", founded: 1916, hq: "Arlington, Virginia, USA",
    stats: [{ label: "Revenue", value: "$89.5B", note: "2025, a record; +35% off a strike-hit 2024" }, { label: "Deliveries", value: "600 jets", note: "2025 vs 348 in 2024" }, { label: "Backlog", value: "$682B", note: "YE2025 record; 6,100+ aircraft worth $567B" }, { label: "BCA segment loss", value: "($7B)", note: "2025, driven by a ~$4.9B 777X charge" }],
    model: [
      "Boeing holds the other duopoly seat and is climbing out of a 6-year crisis: the 737 MAX groundings, 787 delivery pauses, the 2024 door-plug incident and machinists' strike. 2025 was the pivot year: record revenue of $89.5B on 600 deliveries and 1,173 net orders, yet Commercial Airplanes still lost ($7B), mostly from a ~$4.9B charge as the 777X slipped to 2027. The economics are brutal on the way down and lucrative on the way up: each delivery converts years of inventoried cost into cash, so the recovery is really a working-capital unwind.",
      "The other 2 legs steady the ship. Defense, Space & Security ($27.2B in 2025) is a top-tier prime with fighters, tankers, and the F-47 next-gen fighter win in 2025, though legacy fixed-price contracts (KC-46, Air Force One) keep biting. Global Services ($20.9B) is the quiet profit engine: parts, maintenance, and training on a fleet of 10,000+ Boeing jets in service. The company reabsorbed Spirit AeroSystems to pull fuselage quality back in-house, betting vertical reintegration fixes what outsourcing broke."
    ],
    customers: [
      { who: "US government", note: "the Pentagon and NASA anchor BDS plus much of services; roughly a third of revenue" },
      { who: "Ryanair, Southwest, United", note: "the great 737 MAX volume buyers" },
      { who: "Emirates and Gulf carriers", note: "launch customers for the 777X widebody" },
      { who: "Lessors (AerCap, BOC Aviation)", note: "portfolio buyers smoothing the order book" }
    ],
    suppliers: [
      { who: "Spirit AeroSystems", note: "737 fuselages and structures; reacquired to control quality" },
      { who: "CFM International", note: "sole engine (LEAP-1B) on the 737 MAX" },
      { who: "GE Aerospace and Rolls-Royce", note: "GE9X sole on 777X; GEnx and Trent 1000 power the 787" },
      { who: "Collins, Honeywell, Parker", note: "avionics, flight controls, systems across the fleet" },
      { who: "Howmet, ATI, titanium suppliers", note: "fasteners, forgings, and structural metals" }
    ],
    capitalIn: [
      { source: "Customer pre-delivery payments", note: "the $682B backlog carries staged cash from buyers" },
      { source: "Equity raise ~$24B (Oct 2024)", note: "one of the largest ever, sold to shore up the balance sheet" },
      { source: "Bond markets", note: "$50B+ gross debt built up through the crisis years" },
      { source: "Operating cash flow", note: "turned positive again in 2025 as deliveries scaled" }
    ],
    capitalOut: [
      { use: "Debt paydown", note: "the first claim on recovery cash flow" },
      { use: "Working capital and inventory", note: "thousands of part-built jets financed through the production system" },
      { use: "R&D and certification", note: "777X flight test, MAX 7/10 certification, F-47 development" },
      { use: "No dividend since 2020", note: "shareholder returns suspended until the balance sheet heals" }
    ],
    revenueMix: [
      { label: "Commercial Airplanes", pct: 46 }, { label: "Defense, Space & Security", pct: 31 }, { label: "Global Services", pct: 23 }
    ],
    moat: "The same duopoly walls as Airbus (certification, installed base, a $682B backlog) plus irreplaceable US defense franchises: customers can defect only as fast as the rival's sold-out production line allows.",
    risks: "Execution and quality culture under FAA scrutiny; 777X certification timing; ($7B)-a-year commercial losses until volume normalizes; fixed-price defense contracts.",
    competitors: ["airbus", "COMAC (C919)", "Lockheed Martin and Northrop Grumman (defense)"]
  },

  "ge-aerospace": {
    id: "ge-aerospace", ticker: "GE", mcap: 380, name: "GE Aerospace", full: "GE Aerospace (General Electric Company)", country: "US",
    industries: ["aerospace"], role: "Jet engine leader", founded: 1917, hq: "Evendale, Ohio, USA",
    stats: [{ label: "Revenue", value: "$45.9B", note: "2025, +18%" }, { label: "Installed base", value: "~70,000 engines", note: "~45,000 commercial, ~25,000 military (incl. CFM)" }, { label: "Free cash flow", value: "$7.7B", note: "2025, +24%" }, { label: "LEAP deliveries", value: "+28%", note: "2025, a record year" }],
    model: [
      "GE Aerospace runs the purest razor-and-blades model in heavy industry: new engines sell near cost (LEAPs at a loss early in the program), then generate 20 to 30 years of spare parts, overhauls, and service contracts. Services are roughly 70% of revenue, and the annuity compounds with the installed base: about 70,000 engines flying, including the CFM56, the best-selling jet engine in history. In 2025 the model printed: revenue up 18% to $45.9B, operating profit in Commercial Engines & Services up 26% to $8.9B.",
      "Half the franchise lives inside CFM International, the 50/50 joint venture with Safran running since 1974: LEAP is the sole engine on the 737 MAX and powers roughly 60% of A320neo orders, meaning GE wins the single-aisle race no matter which airframer does. Widebody is nearly a sweep (GE9X sole on the 777X, GEnx on most 787s), while Defense & Propulsion Technologies ($12.2B in 2025) supplies fighters and helicopters. Since the 2024 three-way split of old GE, this is a standalone pure play returning most of its cash to shareholders while developing RISE, the open-fan bet on the next single-aisle generation."
    ],
    customers: [
      { who: "Boeing", note: "sole-source on 737 MAX (via CFM) and 777X; GEnx on the 787" },
      { who: "Airbus", note: "LEAP takes ~60% of A320neo engine selections; CF6 heritage widebodies" },
      { who: "Airlines and lessors", note: "the real profit pool: multi-decade service agreements and shop visits" },
      { who: "US DoD and allies", note: "F110, F404/F414 fighter engines, T700/T901 helicopter turbines" }
    ],
    suppliers: [
      { who: "Safran", note: "50/50 CFM partner; co-produces every LEAP" },
      { who: "Howmet and Precision Castparts", note: "turbine blades, structural castings, fasteners: the chronic bottleneck" },
      { who: "ATI, Carpenter", note: "nickel superalloys and titanium melt" },
      { who: "MTU, IHI and risk-share partners", note: "modules co-developed and co-owned across programs" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "$7.7B free cash flow in 2025; the services annuity funds everything" },
      { source: "Customer service agreements", note: "long-term rate-per-flight-hour contracts lock in decades of revenue" },
      { source: "Risk-share partners", note: "Safran, MTU, IHI co-fund development and share program economics" }
    ],
    capitalOut: [
      { use: "Buybacks and dividends", note: "the dominant use of cash since the 2024 spin" },
      { use: "R&D ~$3B/year", note: "RISE open fan, adaptive-cycle military engines, durability upgrades" },
      { use: "Capacity and MRO investment", note: "$1B+ into US factories and global overhaul shops (2025)" },
      { use: "New-engine losses", note: "each early LEAP ships below cost to seed tomorrow's aftermarket" }
    ],
    revenueMix: [
      { label: "Commercial services", pct: 52 }, { label: "Commercial equipment", pct: 21 }, { label: "Defense & Propulsion", pct: 27 }
    ],
    moat: "The installed base is the moat: ~70,000 engines that must, by regulation, be serviced with certified parts for decades, protected by metallurgy and certification know-how no entrant can shortcut.",
    risks: "LEAP durability and time-on-wing costs; castings and superalloy supply constraints; dependence on Boeing and Airbus build rates; RTX and Rolls-Royce competition on next-gen programs.",
    competitors: ["Rolls-Royce (widebody)", "Pratt & Whitney (RTX, GTF on A320neo)", "Safran (CFM partner, rival in systems)"]
  }

});
