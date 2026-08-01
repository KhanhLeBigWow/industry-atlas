/* Industry Atlas - luxury company profiles.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Sources: LVMH FY2025 results (Jan 27, 2026), Hermes FY2025 results (Feb 12, 2026),
 * Richemont FY2026 annual results for the year ended 31 March 2026 (May 22, 2026),
 * company registration documents; market caps approximate as of Jul 2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "lvmh": {
    id: "lvmh", ticker: "LVMUY", mcap: 270, name: "LVMH", full: "LVMH Moët Hennessy Louis Vuitton SE", country: "FR",
    industries: ["luxury"], role: "Luxury conglomerate #1", founded: 1987, hq: "Paris, France",
    stats: [{ label: "Revenue", value: "€80.8B", note: "2025, (1)% organic" }, { label: "Recurring op. profit", value: "€17.8B", note: "2025, a ~22% margin" }, { label: "Maisons", value: "75", note: "across 5 business groups" }, { label: "Stores", value: "~6,000+", note: "directly operated worldwide" }],
    model: [
      "LVMH is the portfolio theory of desire: 75 maisons spanning fashion, jewelry, beauty, wines, and retail, each run as an autonomous house on shared conglomerate rails (flagship real estate, media buying, talent, distribution). Louis Vuitton and Dior anchor the profit pool: Fashion & Leather Goods produced €37.8B of 2025's €80.8B revenue, and a handbag that costs a few hundred euros to make retails for thousands, which is why the group converts sales into a ~22% recurring operating margin even in a down year.",
      "The machine compounds through scale and patience. Size buys the best retail corners (increasingly purchased outright on the Champs-Elysees and Fifth Avenue), the biggest ad budgets, and countercyclical M&A: Tiffany at $15.8B in 2021 remains luxury's largest deal. Bernard Arnault's family holds about 49% of the equity and nearly 2/3 of the votes, so the group invests through downturns rivals must sit out. 2025 tested the model: revenue fell (4)% at actual FX and net profit dropped 13% to €10.9B, yet trends stabilized in H2 and Q4 returned to +1% organic growth."
    ],
    customers: [
      { who: "Aspirational and HNW consumers worldwide", note: "handbags, beauty, champagne, and cognac bought by hundreds of millions, not thousands" },
      { who: "Chinese customers at home and abroad", note: "the sector's swing factor; Asia ex-Japan was ~28% of revenue (2024), plus purchases made while traveling", share: "~28%" },
      { who: "Sephora and DFS shoppers", note: "Selective Retailing (€18.3B, 2025) reaches the mass-premium customer and was the standout grower" },
      { who: "Wholesale and travel retail", note: "wines & spirits distributors, airport concessions, department stores for beauty and watches" }
    ],
    suppliers: [
      { who: "Own ateliers and tanneries", note: "Louis Vuitton and Dior workshops across France, Italy, and Spain; leather increasingly integrated upstream" },
      { who: "Champagne growers and cognac distillers", note: "long-term grape and eaux-de-vie contracts in Champagne and Cognac feed Moët and Hennessy" },
      { who: "Swiss watchmaking supply chain", note: "movements, cases, and dials for TAG Heuer, Hublot, and Bulgari" },
      { who: "Flagship landlords", note: "prime retail leases worldwide, though LVMH now buys trophy locations outright" },
      { who: "Media and creative talent", note: "designers, ad platforms, and fashion media: the raw material of desirability" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~€18B+ a year funds stores, deals, and dividends" },
      { source: "Euro bond markets", note: "cheap investment-grade debt for M&A and real estate purchases" },
      { source: "Family control premium", note: "Arnault's ~49% stake means patient capital and no activist pressure" }
    ],
    capitalOut: [
      { use: "Capex ~€6B+ / year", note: "store networks, production capacity, and trophy real estate" },
      { use: "M&A", note: "Tiffany ($15.8B, 2021), Belmond, Rimowa: buying heritage that cannot be built" },
      { use: "Dividends ~€6B+ / year", note: "a steadily rising payout to shareholders, roughly half of it to the family" },
      { use: "Brand investment", note: "flagship renovations, ad campaigns, and events that keep 75 maisons desirable" }
    ],
    revenueMix: [
      { label: "Fashion & Leather Goods", pct: 47 }, { label: "Selective Retailing", pct: 23 }, { label: "Watches & Jewelry", pct: 13 }, { label: "Perfumes, cosmetics, wines & spirits", pct: 17 }
    ],
    moat: "A portfolio of brands with decades to centuries of accumulated desirability, plus conglomerate scale in real estate, advertising, and distribution. One brand can be copied; 75 at once, with the balance sheet to buy any challenger, cannot.",
    risks: "China and aspirational-demand swings; creative-director transitions at key houses; cognac squeezed by US and Chinese tariffs; succession after Arnault (77); sheer size makes outgrowing the sector arithmetic hard.",
    competitors: ["hermes", "richemont", "Kering (Gucci, Saint Laurent)", "Chanel (private)"]
  },

  "hermes": {
    id: "hermes", ticker: "HESAY", mcap: 200, name: "Hermes", full: "Hermès International SCA", country: "FR",
    industries: ["luxury"], role: "Ultra-luxury craftsmanship benchmark", founded: 1837, hq: "Paris, France",
    stats: [{ label: "Revenue", value: "€16.0B", note: "2025, +9% constant FX" }, { label: "Operating margin", value: "41%", note: "2025, the sector's best" }, { label: "Stores", value: "~300", note: "exclusive network, no franchising at scale" }, { label: "Leather artisans", value: "7,000+", note: "across 20+ French workshops" }],
    model: [
      "Hermes, a Parisian harness maker since 1837, sells scarcity itself. One artisan makes one bag from start to finish, dozens of hours per piece, and leather output grows only ~6 to 7% a year no matter how loud demand gets. The waitlist converts that restraint into pricing power and pre-spend: clients buy scarves, shoes, and jewelry to earn a Birkin or Kelly allocation, which is how a company that caps its own supply grew revenue 9% (constant FX) to €16B in 2025 with a 41% operating margin while the rest of luxury stalled.",
      "The model is protected by vertical integration and blood. Hermes owns tanneries (including exotic-skin sources), weaves silk in Lyon, and makes crystal (Saint-Louis) and silverware (Puiforcat) in-house; it opens roughly 1 new leather workshop a year in the French regions, each training ~250 artisans through its own craft schools. The family holds about 2/3 of the shares, locked inside the H51 holding created after LVMH's 2010 stealth raid failed. With €10B+ of net cash and no debt to speak of, growth is entirely self-funded: the constraint is training hands, not raising capital."
    ],
    customers: [
      { who: "Waitlisted bag clients", note: "Birkin and Kelly allocations ration the icons; resale prices above retail prove demand exceeds supply" },
      { who: "Asian clientele", note: "Asia ex-Japan is the largest region at roughly 45% of sales, with Japan adding ~10% (2024)", share: "~45%" },
      { who: "Top clients (VICs)", note: "private appointments and high-jewelry salons capture the ultra-wealthy who never see a waitlist" },
      { who: "Perfume and beauty buyers", note: "the accessible entry point, sold selectively rather than mass-distributed" }
    ],
    suppliers: [
      { who: "Own and partner tanneries", note: "calf and exotic skins; Hermes bought upstream tanneries and crocodile farms to secure quality" },
      { who: "French craft supply chain", note: "hardware, thread, and components from long-standing regional specialists" },
      { who: "Silk farms in Brazil", note: "raw silk spun and printed at Hermes' own Lyon facilities" },
      { who: "Swiss watch components", note: "movements and complications for La Montre Hermes" },
      { who: "Artisan training pipeline", note: "Ecole Hermes des savoir-faire: the scarcest input is qualified hands" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~€5B a year, far more than the model can absorb" },
      { source: "Net cash reserves", note: "€10B+ on the balance sheet; no external funding needed" },
      { source: "Family lock-up (H51)", note: "~2/3 family ownership guarantees patient, raid-proof capital" }
    ],
    capitalOut: [
      { use: "New workshops", note: "roughly 1 leather-goods site a year, each ~250 artisans, all in France" },
      { use: "Dividends plus specials", note: "ordinary payout topped with special dividends in strong years" },
      { use: "Store extensions", note: "enlarging existing flagships rather than chasing new doors" },
      { use: "Vertical acquisitions", note: "tanneries and supplier stakes that secure the craft chain" }
    ],
    revenueMix: [
      { label: "Leather goods & saddlery", pct: 44 }, { label: "Ready-to-wear & accessories", pct: 29 }, { label: "Jewelry, home & other metiers", pct: 13 }, { label: "Silk, perfume, watches & other", pct: 14 }
    ],
    moat: "Scarcity engineered at the source: single-artisan craftsmanship that cannot be scaled without diluting it, 2/3 family ownership immune to raiders, and demand that outruns supply by design. The 15-year waitlist is the balance sheet.",
    risks: "Self-imposed supply caps limit upside; exotic-skin sourcing scrutiny; a valuation priced for perfection; leather-goods concentration (44% of sales); family cohesion across generations of heirs; US tariffs on European goods.",
    competitors: ["lvmh", "Chanel (private)", "richemont", "Brunello Cucinelli, Loro Piana (quiet-luxury rivals)"]
  },

  "richemont": {
    id: "richemont", ticker: "CFRUY", mcap: 135, name: "Richemont", full: "Compagnie Financière Richemont SA", country: "CH",
    industries: ["luxury"], role: "Hard luxury (jewelry) #1", founded: 1988, hq: "Geneva, Switzerland",
    stats: [{ label: "Sales", value: "€22.4B", note: "FY2026 (ended Mar 2026), +11% constant FX" }, { label: "Jewellery Maisons", value: "€16.5B", note: "74% of sales at a 30.5% op. margin" }, { label: "Net cash", value: "€8.5B", note: "Mar 2026" }, { label: "Maisons", value: "~25", note: "Cartier to Vacheron Constantin (1755)" }],
    model: [
      "Richemont, assembled by Johann Rupert from 1988, is really a jewelry company with a watch collection attached. The Jewellery Maisons (Cartier, Van Cleef & Arpels, Buccellati, Vhernier) delivered €16.5B of FY2026's €22.4B sales, up 14% at constant FX, at a 30.5% operating margin: Cartier's Love bracelet and Van Cleef's Alhambra are the closest thing hard luxury has to annuities. The structural tailwind is branded jewelry taking share from the unbranded pieces that still dominate global jewelry spending, and Richemont owns 2 of the 3 names that matter (LVMH's Bulgari is the third).",
      "The Specialist Watchmakers (Vacheron Constantin, IWC, Jaeger-LeCoultre, Piaget, A. Lange & Söhne, and peers) show the other face of hard luxury: €3.1B of sales but just €107M of operating profit after a brutal 2-year watch downturn and record gold prices squeezing gross margins. The group sells roughly 75% direct-to-client through its own boutiques and online, sits on €8.5B of net cash, and answers to the Rupert family, whose dual-class shares carry ~51% of votes on ~10% of the capital. The costly YNAP e-commerce experiment was finally handed to Mytheresa in 2025 in exchange for a minority stake, refocusing the group on what it does best: metal, stones, and time."
    ],
    customers: [
      { who: "HNW jewelry clients", note: "Cartier and Van Cleef icons run from entry gold to high-jewelry commissions" },
      { who: "Direct retail clients", note: "boutiques plus online are roughly 75% of sales, keeping pricing and client data in-house", share: "~75%" },
      { who: "Watch collectors and authorized dealers", note: "the wholesale channel that remains for Specialist Watchmakers" },
      { who: "Americas and Asia shoppers", note: "the Americas led growth through FY2026; China stabilizing off a deep trough" }
    ],
    suppliers: [
      { who: "Gold and precious-stone suppliers", note: "responsibly sourced gold and diamonds; record gold prices are a direct input-cost headwind" },
      { who: "In-house Swiss manufactures", note: "movement and component production across the watch maisons" },
      { who: "Jewelry ateliers", note: "Cartier and Van Cleef workshops in France, Switzerland, and Italy" },
      { who: "Swiss component specialists", note: "hairsprings, dials, and cases from a concentrated national supply base" },
      { who: "Leather and fashion suppliers", note: "for Montblanc, Chloe, Alaia, Delvaux, and the Other segment" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "jewelry margins fund the whole group" },
      { source: "Net cash fortress", note: "€8.5B (Mar 2026); acquisitions and downturns financed internally" },
      { source: "Rupert family control", note: "dual-class structure: ~51% of votes on ~10% of capital, patient by design" }
    ],
    capitalOut: [
      { use: "Jewelry capacity", note: "new Cartier and Van Cleef workshops to ease production bottlenecks" },
      { use: "Retail network", note: "boutique openings and renovations behind the ~75% direct-to-client mix" },
      { use: "Dividends", note: "a steadily rising Swiss franc payout" },
      { use: "Tuck-in M&A", note: "Vhernier (2024) and craft-chain stakes; YNAP exited via the Mytheresa deal (2025)" }
    ],
    revenueMix: [
      { label: "Jewellery Maisons", pct: 74 }, { label: "Specialist Watchmakers", pct: 14 }, { label: "Other (Montblanc, fashion & accessories)", pct: 12 }
    ],
    moat: "Cartier and Van Cleef & Arpels: 2 of the world's 3 great jewelry brands, backed by in-house manufacturing, a fortress balance sheet, and the secular shift from unbranded to branded jewelry.",
    risks: "Watch division profitability near zero at the cycle's bottom; gold and diamond input costs; China demand still fragile; Rupert succession; Swiss franc strength and US tariff whiplash on Swiss-made goods.",
    competitors: ["lvmh", "hermes", "Swatch Group (Omega, watches)", "Rolex and Patek Philippe (private)"]
  }

});
