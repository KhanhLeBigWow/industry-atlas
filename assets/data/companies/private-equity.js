/* Industry Atlas - companies: private-equity.
 * KKR, Carlyle, EQT AB. Figures approximate, 2024-2025 filings and coverage;
 * mcap approx mid-2026. Blackstone is profiled under asset-management. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "kkr": {
    id: "kkr", ticker: "KKR", mcap: 120, name: "KKR", full: "KKR & Co. Inc.", country: "US",
    industries: ["private-equity", "asset-management"], role: "The buyout pioneer turned alts platform", founded: 1976, hq: "New York, USA",
    stats: [{ label: "AUM", value: "$640B+", note: "2025" }, { label: "Fee-related earnings", value: "$3B+", note: "annualized, the multiple driver" }, { label: "Insurance (Global Atlantic)", value: "$180B+", note: "the Apollo-style flywheel" }, { label: "Balance-sheet investments", value: "$30B+", note: "the compounding book" }],
    model: [
      "KKR invented the modern leveraged buyout (RJR Nabisco, 1989) and then reinvented itself as a diversified alternatives platform: private equity, infrastructure, real estate, and a giant credit arm, all earning management fees on locked-up capital plus 20% carry on the profits. Fee-related earnings, the stable layer, is what the market pays up for.",
      "Two structural bets distinguish it: a permanent-capital insurance engine (Global Atlantic annuities feed assets into KKR credit strategies) and an unusually large balance sheet that co-invests alongside clients, compounding like a mini Berkshire. Asia is its biggest geographic edge: the largest alts franchise in the region by years of head start."
    ],
    customers: [
      { who: "Pensions & sovereign wealth funds", note: "the flagship fund LPs", share: "core" },
      { who: "Insurance balance sheets", note: "Global Atlantic's annuitants, plus third-party insurers buying credit" },
      { who: "Private wealth channel", note: "K-Series vehicles for individuals: the growth frontier" },
      { who: "Portfolio companies", note: "100+ businesses paying monitoring and transaction economics" }
    ],
    suppliers: [
      { who: "Banks & private credit desks", note: "LBO debt: the model's raw material" },
      { who: "Investment banks", note: "deal flow, financing, exits" },
      { who: "Operating executives network", note: "the Capstone team and executive bench" },
      { who: "Fund administrators & lawyers", note: "the machinery of 100+ vehicles" }
    ],
    capitalIn: [
      { source: "LP commitments", note: "flagship funds of $15-20B+ per vintage" },
      { source: "Insurance float", note: "Global Atlantic annuity inflows: permanent capital" },
      { source: "Balance-sheet earnings", note: "carry and investment gains recycled" }
    ],
    capitalOut: [
      { use: "Fund investments (GP commitment)", note: "skin in every game" },
      { use: "Balance-sheet co-investments", note: "the compounding book" },
      { use: "Dividends + buybacks", note: "fixed dividend, rising with FRE" },
      { use: "Platform M&A", note: "Global Atlantic buy-in, infrastructure add-ons" }
    ],
    revenueMix: [
      { label: "Management fees", pct: 45 }, { label: "Insurance segment", pct: 30 }, { label: "Carry & investment income", pct: 25 }
    ],
    moat: "48-year brand and LP relationships, permanent insurance capital, Asia head start, and a balance sheet competitors cannot replicate without diluting their model.",
    risks: "Exit drought slows carry for years; insurance adds credit-cycle and rate risk; the wealth channel bet invites liquidity-mismatch scrutiny.",
    competitors: ["blackstone", "apollo-global", "carlyle"]
  },

  "carlyle": {
    id: "carlyle", ticker: "CG", mcap: 20, name: "Carlyle Group", full: "The Carlyle Group Inc.", country: "US",
    industries: ["private-equity"], role: "The buyout brand rebuilding its engine", founded: 1987, hq: "Washington DC, USA",
    stats: [{ label: "AUM", value: "$450B+", note: "2025" }, { label: "Credit arm", value: "~$195B", note: "now the biggest segment" }, { label: "Fee-related earnings", value: "~$1.1B", note: "2024, record after cost cuts" }, { label: "Founded by", value: "3 dealmakers", note: "DC roots, government-adjacent origins" }],
    model: [
      "Carlyle built its name on government-adjacent buyouts (aerospace, defense) and a globe-spanning fund family, but the last decade told a harder story: founder succession stumbles, an exodus of rainmakers, and a stock that lagged every major peer. The franchise remains: 3 decades of LP relationships and a top-5 fundraising brand.",
      "The rebuild under Harvey Schwartz runs on 3 tracks: grow credit (now the largest segment), industrialize fee-related earnings with cost discipline (record FRE margins), and revive buyout performance so the next flagship raises bigger than the last. The stock trades at a persistent discount to Blackstone/KKR: the value case IS the execution gap closing."
    ],
    customers: [
      { who: "Pensions, sovereigns, insurers", note: "2,900+ LPs across 29 offices", share: "core" },
      { who: "Private wealth investors", note: "late to the channel, now building" },
      { who: "CLO investors", note: "one of the world's largest CLO managers" },
      { who: "Portfolio companies", note: "defense/aero heritage: Booz Allen was the classic win" }
    ],
    suppliers: [
      { who: "LBO lenders", note: "banks and private credit for deal financing" },
      { who: "Investment banks", note: "sourcing and exits" },
      { who: "Operating advisors", note: "sector bench, thinner after departures" }
    ],
    capitalIn: [
      { source: "LP fund commitments", note: "flagship buyout, credit, secondaries (AlpInvest)" },
      { source: "CLO issuance", note: "structured credit machine" },
      { source: "Fee streams", note: "management fees on ~$300B fee-earning AUM" }
    ],
    capitalOut: [
      { use: "GP commitments", note: "co-invest in every fund" },
      { use: "Dividends + buybacks", note: "fixed dividend policy post-2022" },
      { use: "Talent retention", note: "the real battle: comp packages to stop the bleed" }
    ],
    revenueMix: [
      { label: "Global credit", pct: 40 }, { label: "Private equity", pct: 40 }, { label: "Solutions (AlpInvest)", pct: 20 }
    ],
    moat: "Brand, 3 decades of LP relationships, and an AlpInvest secondaries franchise riding the industry's hottest niche.",
    risks: "Talent and performance gap vs Blackstone/KKR; buyout flagships raising slower; the discount becomes permanent if FRE growth stalls.",
    competitors: ["kkr", "blackstone", "apollo-global"]
  },

  "eqt-partners": {
    id: "eqt-partners", ticker: null, mcap: 35, name: "EQT AB", full: "EQT AB (publ)", country: "SE",
    industries: ["private-equity"], role: "Europe's buyout champion", founded: 1994, hq: "Stockholm, Sweden",
    stats: [{ label: "AUM", value: "EUR 270B+", note: "2025" }, { label: "Heritage", value: "Wallenberg", note: "born from Investor AB" }, { label: "Listed", value: "2019 Stockholm", note: "Europe's biggest listed PE firm" }, { label: "Asia arm", value: "BPEA EQT", note: "$7.5B Baring deal, 2022" }],
    model: [
      "EQT is Europe's answer to the American alts giants: a Wallenberg-family-rooted buyout house that industrialized its investment process (the 'EQT Playbook', heavy on digitalization and in-house data science) and listed in Stockholm in 2019. Flagship private equity plus one of the world's largest infrastructure franchises drive the fees.",
      "Its differentiators are thematic control-investing (healthcare, software, energy transition), an owned Asia platform via the Baring acquisition, and European deal networks American rivals rent. Like all listed PE, the earnings story is fee-related earnings growth plus lumpy carry: the Stockholm listing prices it against global peers with a European growth premium."
    ],
    customers: [
      { who: "Global institutional LPs", note: "pensions and sovereigns, increasingly US ones", share: "core" },
      { who: "Private wealth (EQT Nexus)", note: "semi-liquid entry vehicles" },
      { who: "Portfolio companies", note: "200+ across PE, infra, real assets" }
    ],
    suppliers: [
      { who: "European banks + private credit", note: "deal leverage" },
      { who: "Motherbrain (in-house AI)", note: "its data-science sourcing engine: a supplier it built" },
      { who: "Advisors & networks", note: "the Wallenberg industrial ecosystem" }
    ],
    capitalIn: [
      { source: "LP commitments", note: "EUR 20B+ flagship vintages" },
      { source: "Public equity", note: "SEK-listed shares fund platform M&A" },
      { source: "Carry recycling", note: "partners re-commit gains" }
    ],
    capitalOut: [
      { use: "GP commitments", note: "alignment capital in each fund" },
      { use: "Platform acquisitions", note: "Baring Asia, Exeter (real estate)" },
      { use: "Dividends", note: "progressive policy since listing" }
    ],
    revenueMix: [
      { label: "Private capital (PE)", pct: 50 }, { label: "Real assets & infrastructure", pct: 40 }, { label: "Other", pct: 10 }
    ],
    moat: "Europe's deepest ownership networks (Wallenberg heritage), a real Asia platform, and process industrialization peers still imitate.",
    risks: "Carry concentration in European exits; US LP allocations favor US brands; listed-in-SEK liquidity discount vs NYSE peers.",
    competitors: ["kkr", "blackstone", "CVC"]
  }
});
