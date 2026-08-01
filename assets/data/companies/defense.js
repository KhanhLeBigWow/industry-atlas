/* Industry Atlas - DEFENSE company profiles (research-backed).
 * Anchors: LMT FY2025 results (Jan 2026 release): $75B sales, ~$194B backlog,
 * F-35 = 27% of sales, US government = 72% of sales. RTX FY2025 (Jan 2026):
 * $88.6B sales, $268B backlog ($161B commercial / $107B defense), FCF $7.9B.
 * Rheinmetall FY2025 (Mar 2026 annual report): EUR 9.9B sales (+29% continuing
 * ops), EUR 63.8B backlog, 18.5% operating margin, 2026 guide EUR 14B to 14.5B.
 * Market caps approximate, July 2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "lockheed-martin": {
    id: "lockheed-martin", ticker: "LMT", mcap: 133, name: "Lockheed Martin", full: "Lockheed Martin Corporation", country: "US",
    industries: ["defense"], role: "Largest pure-play defense prime", founded: 1995, hq: "Bethesda, USA",
    stats: [{ label: "Revenue", value: "$75B", note: "2025, up 6%" }, { label: "Backlog", value: "~$194B", note: "record; ~2.6x annual sales" }, { label: "F-35 share", value: "27%", note: "of 2025 sales" }, { label: "US government", value: "72%", note: "of sales; 28% international" }],
    model: [
      "Lockheed Martin (the 1995 Lockheed plus Martin Marietta merger) sells sole-source franchises to governments: fighters, missiles, helicopters, and satellites that only it builds. The F-35 is the spine: 27% of 2025 sales, more than 1,100 jets delivered, and a program of record spanning about 20 nations that locks in production and sustainment revenue into the 2070s. Contracts split between cost-plus development work (government carries the risk) and fixed-price production (Lockheed carries it), and the ~$194B backlog gives visibility most industries would kill for.",
      "The growth engine has shifted to munitions: Missiles and Fire Control grew 14% in 2025 as Ukraine replenishment and allied rearmament pull PAC-3 interceptors (output climbing toward 650 a year), HIMARS, GMLRS, and JASSM. The model's weakness showed the same year: over $1.6B of charges on fixed-price classified aeronautics and helicopter programs, and Boeing's win of the next-generation F-47 fighter in March 2025, a reminder that franchise losses take decades to reverse."
    ],
    customers: [
      { who: "US Department of Defense", note: "the anchor: cost-plus development plus fixed-price production across all 4 segments", share: "63% of 2025 sales" },
      { who: "Allied governments (FMS + direct)", note: "the F-35's ~20-nation club, plus PAC-3, HIMARS, and Aegis buyers rearming fast", share: "28%" },
      { who: "NASA and civil agencies", note: "Orion deep-space capsule, GPS III, weather satellites" },
      { who: "US intelligence community", note: "classified aeronautics and space work; growth nobody can see" }
    ],
    suppliers: [
      { who: "Northrop Grumman & BAE Systems", note: "F-35 center and aft fuselages: partners on the airframe itself" },
      { who: "Pratt & Whitney (RTX)", note: "the F135, sole engine of the F-35" },
      { who: "Howmet, PCC, castings & forgings base", note: "structural castings and forgings gate every fighter rate ramp" },
      { who: "L3Harris (Aerojet Rocketdyne)", note: "solid rocket motors: the binding constraint on missile output" },
      { who: "Defense microelectronics chain", note: "radiation-hardened and trusted-foundry chips, seekers, sensors" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "roughly $7B to $9B a year funds the whole machine" },
      { source: "Government progress payments", note: "customers pay as work advances, financing inventory" },
      { source: "Bond markets", note: "~$20B of debt; issuance often funds buybacks" }
    ],
    capitalOut: [
      { use: "Shareholder returns", note: "~$3B+ of dividends plus multi-$B buybacks absorb most free cash flow" },
      { use: "Company-funded R&D", note: "~$1.5B+ IRAD on top of customer-funded development" },
      { use: "Munitions capacity capex", note: "PAC-3, GMLRS, and solid-motor capacity expansions" },
      { use: "Pension obligations", note: "the legacy workforce still draws cash decades later" }
    ],
    revenueMix: [
      { label: "Aeronautics", pct: 40 }, { label: "Rotary & Mission Systems", pct: 23 }, { label: "Missiles & Fire Control", pct: 19 }, { label: "Space", pct: 17 }
    ],
    moat: "Sole-source franchises locked in for decades: the West's only in-production 5th-generation fighter, plus classified relationships, clearances, and program knowledge no entrant can replicate.",
    risks: "F-35 concentration (27% of sales), fixed-price development charges (over $1.6B in 2025), US budget politics, and losing the next fighter generation after the F-47 went to Boeing.",
    competitors: ["rtx", "Northrop Grumman", "Boeing Defense", "General Dynamics"]
  },

  "rtx": {
    id: "rtx", ticker: "RTX", mcap: 290, name: "RTX", full: "RTX Corporation", country: "US",
    industries: ["defense", "aerospace"], role: "Largest A&D company by revenue", founded: 2020, hq: "Arlington, USA",
    stats: [{ label: "Revenue", value: "$88.6B", note: "2025, up 10%" }, { label: "Backlog", value: "$268B", note: "$161B commercial, $107B defense" }, { label: "Free cash flow", value: "$7.9B", note: "2025, up $3.4B" }, { label: "GTF orders", value: "10,000+", note: "engines ordered and committed" }],
    model: [
      "RTX (the 2020 merger of United Technologies and Raytheon) runs 2 businesses that hedge each other: commercial aerospace (Pratt & Whitney engines, Collins Aerospace systems) and defense (Raytheon missiles and air defense). The commercial side is razor-and-blade at its purest: GTF engines sell near cost because 25+ years of spare parts, shop visits, and upgrades earn multiples of the sale price, and Collins has sole-source content on virtually every aircraft flying. The defense side sells the West's air-defense arsenal: Patriot (fielded by 19 nations), AMRAAM, the SM family, and Tomahawk.",
      "2025 showed the model compounding: sales up 10% to $88.6B, free cash flow up $3.4B to $7.9B, and a record $268B backlog split $161B commercial and $107B defense. The GTF powder-metal recall remains the scar tissue: a multi-$B remediation of the fleet that grounded hundreds of A320neos, yet paradoxically deepened the aftermarket annuity as every inspected engine returns to a longer service life. European rearmament and Middle East air-defense demand keep Raytheon's effector lines sold out years ahead."
    ],
    customers: [
      { who: "US Department of Defense", note: "just under half of total sales, spread across all 3 segments", share: "~46% (2024)" },
      { who: "Airbus & Boeing", note: "GTF is 1 of 2 engine options on the A320neo; Collins content ships on both OEMs' jets" },
      { who: "Airlines & lessors", note: "the aftermarket annuity: spares, MRO, and shop visits price like monopolies" },
      { who: "Allied governments", note: "Patriot's 19-nation club, NASAMS, and Ukraine-driven replenishment orders" }
    ],
    suppliers: [
      { who: "Howmet, PCC, castings & forgings", note: "turbine airfoils and structural castings: the physical bottleneck of engine output" },
      { who: "Specialty metals chain", note: "titanium and nickel superalloys, re-sourced away from Russia after 2022" },
      { who: "Defense microelectronics", note: "AESA radar modules and seekers from trusted foundries" },
      { who: "Energetics & rocket motors", note: "solid motors (L3Harris Aerojet, Nammo) gate every missile ramp" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "$7.9B of 2025 free cash flow, even after GTF compensation outflows" },
      { source: "Government progress payments", note: "defense contracts finance their own work in progress" },
      { source: "Bond markets", note: "merger-era debt load, comfortably investment grade" },
      { source: "Divestitures", note: "sold the actuation and cybersecurity units to sharpen the portfolio" }
    ],
    capitalOut: [
      { use: "R&D", note: "GTF Advantage, next-gen air defense, hypersonics; much of it customer-funded" },
      { use: "Dividends + buybacks", note: "the $36B+ post-merger capital-return pledge was delivered" },
      { use: "GTF fleet remediation", note: "multi-$B customer compensation running through 2026" },
      { use: "Capacity capex", note: "Patriot GEM-T and effector plant expansions across the US and Europe" }
    ],
    revenueMix: [
      { label: "Pratt & Whitney", pct: 36 }, { label: "Collins Aerospace", pct: 33 }, { label: "Raytheon", pct: 31 }
    ],
    moat: "An installed base measured in decades: sole-source engine and systems content annuitizes nearly every aircraft flying, while Patriot-class franchises make Raytheon the default air-defense supplier of the West.",
    risks: "GTF durability costs run through 2026 and beyond; fixed-price defense programs; titanium and castings supply; a $268B backlog that now demands flawless execution.",
    competitors: ["lockheed-martin", "GE Aerospace (engines)", "Safran (systems)", "Northrop Grumman"]
  },

  "rheinmetall": {
    id: "rheinmetall", ticker: "RNMBY", mcap: 53, name: "Rheinmetall", full: "Rheinmetall AG", country: "DE",
    industries: ["defense"], role: "Europe's rearmament champion", founded: 1889, hq: "Dusseldorf, Germany",
    stats: [{ label: "Revenue", value: "EUR 9.9B", note: "2025, +29% continuing ops" }, { label: "Backlog", value: "EUR 63.8B", note: "end-2025; guided toward ~EUR 135B in 2026" }, { label: "Operating margin", value: "18.5%", note: "2025" }, { label: "155mm capacity", value: "~1.5M rounds/yr", note: "targeted by 2027; world #1" }],
    model: [
      "Rheinmetall transformed from a sleepy German auto-parts-and-defense conglomerate into Europe's pure-play rearmament champion: it sold its civilian Power Systems business in 2025 and now sells what the continent suddenly cannot get enough of. Ammunition is the crown jewel: the world's largest 155mm artillery shell maker, vertically integrated from propellant powder (Nitrochemie) to explosives (the Expal acquisition) to the finished round, ramping toward ~1.5M rounds a year by 2027. Vehicle Systems builds the Panther and Lynx and supplies the Leopard 2's smoothbore gun; Electronic Solutions sells Skyranger air defense and battlefield digitalization.",
      "The economics are capacity-as-product: NATO's Hague summit committed members to 3.5% of GDP on core defense by 2035, Germany's budget lines exploded, and orders flow to whoever can physically produce, so Rheinmetall builds plants (Unterluess, Lithuania, Romania, Ukraine JVs) faster than any rival. Sales rose 29% to EUR 9.9B in 2025 with the backlog at EUR 63.8B (over 6x sales) and guided to roughly double toward EUR 135B in 2026; the stock rose ~20x from early 2022 to its October 2025 peak before giving back roughly half on margin worries, a reminder that the market has already paid for years of flawless execution."
    ],
    customers: [
      { who: "Germany (Bundeswehr)", note: "the anchor customer: Zeitenwende budgets, ammunition framework contracts, Leopard and Puma fleets" },
      { who: "Ukraine", note: "shells, Lynx vehicles, air defense, and in-country joint ventures; among its largest markets since 2022" },
      { who: "NATO Europe", note: "Hungary, the Netherlands, Denmark, the Baltics, the UK, Italy: rearmament orders across the alliance" },
      { who: "US programs", note: "F-35 center fuselages built in Weeze with Northrop; a finalist bid for the US Army's XM30 fighting vehicle" }
    ],
    suppliers: [
      { who: "Steel & energetics chain", note: "armor steel, explosives, and precursors; it bought Expal to own more of the chain" },
      { who: "Nitrochemie (majority-owned)", note: "propellant powder, the true bottleneck of shell output, largely in-house" },
      { who: "Powertrain & optics partners", note: "engines, transmissions, and optronics from the European tier base" },
      { who: "KNDS", note: "partner and rival at once: Rheinmetall arms the Leopard 2 that KNDS assembles" }
    ],
    capitalIn: [
      { source: "Operating cash flow + prepayments", note: "ammunition framework deals arrive with cash up front" },
      { source: "Equity re-rating", note: "a DAX heavyweight since 2023; the market now funds whatever it announces" },
      { source: "Bond issuance", note: "debt funds plants and acquisitions at modest leverage" },
      { source: "Divestment proceeds", note: "the 2025 sale of civilian Power Systems completed the pure-play pivot" }
    ],
    capitalOut: [
      { use: "Capacity capex", note: "new works at Unterluess, a Lithuanian shell plant, Romanian powder, Ukrainian JVs" },
      { use: "M&A", note: "Expal (explosives), Loc Performance (US vehicles), naval shipbuilder NVL (agreed 2025)" },
      { use: "Dividends", note: "payout rising with earnings, secondary to growth investment" },
      { use: "R&D", note: "Skyranger air defense, loitering munitions, digital soldier systems" }
    ],
    revenueMix: [
      { label: "Vehicle Systems", pct: 45 }, { label: "Weapon & Ammunition", pct: 32 }, { label: "Electronic Solutions", pct: 23 }
    ],
    moat: "Capacity is the moat: the only European company that can mass-produce shells, propellant, and armored vehicles at wartime scale, with vertical integration and political relationships rivals cannot assemble this decade.",
    risks: "A Ukraine ceasefire or rearmament fatigue would hit the multiple hardest; execution risk on a backlog over 6x sales; 2026 guidance already disappointed a market priced for perfection.",
    competitors: ["KNDS", "BAE Systems", "General Dynamics (land systems)", "Hanwha Aerospace"]
  }

});
