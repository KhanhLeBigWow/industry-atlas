/* Industry Atlas - SPORTS BUSINESS (full module, research-backed)
 * Anchors: global core sports market ~$495B in 2025, ~5.3% CAGR (The Business
 * Research Company, 2025); NBA media rights $76B over 11 years (2025-26 to
 * 2035-36), ~$6.9B/season, ~2.6x the prior deal, Disney ~$2.6B/yr, NBC and
 * Amazon in, TNT out (CBS Sports/ESPN, Jul 2024); NFL average franchise value
 * $7.1B (+20% YoY), all 32 teams $228B combined, Cowboys $12.8B (Sportico,
 * 2025); NFL average revenue multiple 10.7x vs 6.4x five years earlier
 * (Forbes, Aug 2025); NFL PE stake sales: Dolphins 13% at $8.1B, Bills 20.6%
 * at $5.8B, Eagles 8% at $8.3B, 49ers 6.2% at $8.6B valuations (Sportico/
 * Forbes, 2024-25); women's elite sports revenue projected above $2.35B in
 * 2025, ~3x 2022 (Deloitte, 2024); WNBA expansion fees $250M in 2025 vs $50M
 * in 2023; Netflix paid ~$150M for two 2024 NFL Christmas games (~24M avg
 * viewers each, Nielsen). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["sports"] = {
  meta: {
    id: "sports", name: "Sports Business", sector: "tmt", status: "full",
    tagline: "The last content that must be watched live, owned by legal monopolies, and repricing upward every time a deal expires.",
    marketSize: { value: 495, unit: "$B", asOf: 2025, note: "core global sports market (leagues, events, media, services); the broader sports economy with goods and recreation approaches $2.9T" },
    cagr: { value: 5, range: [4, 7], horizon: "2025-2030" },
    maturity: "mature-growth", cyclicality: 2, capitalIntensity: 3, regulation: 3, disruption: 3
  },
  newsQuery: '("media rights" OR "franchise valuation" OR NFL OR NBA OR "Premier League" OR "womens sports" OR FIFA OR "sports betting")',

  overview: {
    definition: "The sports business turns games into the scarcest commodity in media: live, unrepeatable, DVR-proof content with built-in tribal demand. Leagues are legal cartels that pool and auction that scarcity; franchises are the member-shares; and everyone from Disney to Amazon to private equity is bidding for a piece.",
    howItWorks: [
      "The structure is a pyramid of sanctioned monopolies. A league (NFL, NBA, Premier League, IPL) controls the schedule, the championship, and, critically, the pooled sale of media rights: in the US the 1961 Sports Broadcasting Act explicitly exempts that pooling from antitrust. Clubs are franchises in the literal sense: member-owners of the cartel, sharing national revenue roughly equally while keeping local revenue (tickets, sponsorship, regional media) for themselves. Players capture their share through unions and collective bargaining agreements that typically split league revenue near 50/50.",
      "Media rights are the profit engine and the repricing mechanism. Live sports is the last content that assembles mass simultaneous audiences, which makes it the spine of both the legacy pay-TV bundle and the streamers' subscriber math. That scarcity keeps auctions competitive even as television shrinks: the NBA's new deal (2025-26 through 2035-36) totals about $76B over 11 years, roughly $6.9B per season and about 2.6x the prior contract, with Disney paying ~$2.6B a year and NBC and Amazon buying in while TNT lost out after nearly 4 decades. The NFL's 2021 round topped $110B over 11 years. Each renewal resets the entire industry's economics upward.",
      "Franchises behave like trophy assets with an annuity attached. Team P&Ls are modest (the NFL's contracted national money alone distributes roughly $400M per club per year), but valuations compound far faster than earnings: Sportico put the average NFL team at $7.1B in 2025, up 20% in a year, with all 32 worth $228B combined, and Forbes pegged the average revenue multiple at 10.7x versus 6.4x just 5 years earlier. Scarcity does the work: there are only 32 NFL slots, and control rarely trades. The 2024 decision to admit private equity funds (up to 10% per NFL team) created a new marginal buyer: stake sales have printed at $5.8B to $8.8B valuations across the Bills, Dolphins, Eagles, 49ers, and Bears.",
      "The growth vectors sit outside the legacy men's TV package: women's sports (Deloitte projected elite women's sports revenue above $2.35B in 2025, roughly 3x its 2022 estimate, and WNBA expansion fees jumped from $50M in 2023 to $250M in 2025), betting and data rights following the 2018 US legalization wave, international expansion (league games abroad, the IPL's per-match rights value trailing only the NFL), and stadium districts that convert game-day traffic into year-round mixed-use real estate."
    ],
    history: [
      { era: "1958-1984", title: "Television discovers sports", text: "The 1958 NFL title game proves sports is TV gold; the 1961 Sports Broadcasting Act legalizes pooled league rights, creating the modern economic engine." },
      { era: "1984-1992", title: "The commercial revolution", text: "The privately financed 1984 LA Olympics turns a surplus and invents modern sponsorship; Jordan and Nike prove athletes are global brands." },
      { era: "1992-2010", title: "The pay-TV supercycle", text: "The Premier League breaks away and sells to Sky (1992); ESPN's per-subscriber fee becomes the richest toll in media; rights inflate for 2 decades on bundle economics." },
      { era: "2010-2020", title: "Valuations detach", text: "Ballmer pays $2B for the Clippers (2014) and looks silly for a week; cord-cutting begins eroding the bundle even as rights keep climbing; the 2018 PASPA repeal legalizes US sports betting." },
      { era: "2020-present", title: "Streamers and institutions arrive", text: "COVID empties stadiums but media money carries the leagues; Amazon, Netflix, and YouTube buy premium packages; the NBA signs $76B; the NFL opens to private equity; women's sports inflects." }
    ],
    trends: [
      { title: "Rights inflation, new buyers", direction: "up", text: "Every marquee renewal steps up (NBA ~2.6x) because streamers joined the auction: Amazon (TNF ~$1B/yr and an NBA package), Netflix (NFL Christmas, ~$5B WWE deal), YouTube (Sunday Ticket ~$2B/yr)." },
      { title: "Institutional capital floods in", direction: "up", text: "PE funds (Arctos, Ares, CVC) and sovereign wealth own league and team stakes; NFL stake sales printed at up to $8.8B valuations within a year of the 2024 rule change." },
      { title: "Women's sports inflection", direction: "up", text: "Revenue projected past $2.35B in 2025 (Deloitte), ~3x 2022; WNBA expansion fees went $50M to $250M in 2 years; rights still priced far below audience growth." },
      { title: "The legacy bundle decays", direction: "down", text: "US pay-TV homes keep shrinking, eroding the per-subscriber subsidy that funded 30 years of rights inflation; ESPN's answer is going direct-to-consumer." },
      { title: "Venues become real estate plays", direction: "shift", text: "Owners now underwrite stadium districts: hotels, offices, casinos, and apartments around the arena convert 10 game days into 365 revenue days." }
    ],
    outlook: "Scarcity economics with a buyer-transition risk. As long as live sports remains the only content that reliably aggregates mass audiences, rights reprice upward at every renewal and franchise values follow: the streamers' arrival deepened the bid just as the cable bundle weakened it. The decade's swing factors: whether streaming monetization fully replaces the pay-TV subsidy before it erodes, how far women's sports and international expansion extend the growth runway, and whether institutional capital keeps paying 10x+ revenue for assets that almost never trade."
  },

  structure: {
    suppliers: [
      { name: "Athletes, academies & agents", note: "The talent pipeline; CAA and Wasserman class agencies clip 3-10% of the wage bill" },
      { name: "Apparel & equipment (Nike, Adidas)", note: "Kit suppliers and sponsors at once; athlete deals are marketing R&D" },
      { name: "Data & officiating tech (Sportradar, Genius, Hawk-Eye)", note: "The picks and shovels of the betting era" },
      { name: "Venue builders & operators", note: "$1B+ stadiums, increasingly anchoring mixed-use districts" }
    ],
    producers: [
      { name: "Major men's leagues (NFL, NBA, EPL, IPL, F1, UFC)", note: "The IP owners; the NFL alone is worth $228B across 32 teams (Sportico, 2025)" },
      { name: "Mega-event owners (FIFA, IOC)", note: "World Cup and Olympics: quadrennial monopolies with national broadcasters as captive buyers" },
      { name: "Women's leagues (WNBA, NWSL, WSL)", note: "The growth asset: revenue ~3x since 2022 (Deloitte)" },
      { name: "College sports (NCAA conferences)", note: "A multibillion-dollar US anomaly now paying its labor force" }
    ],
    distributors: [
      { name: "Legacy broadcasters (Disney/ESPN, NBC, Sky, TNT)", note: "Still the volume buyers; ESPN's bundle fee funded the modern rights era" },
      { name: "Streamers (Amazon, Netflix, YouTube, Apple, DAZN)", note: "The new marginal bid: sports as subscriber acquisition and churn control" },
      { name: "Ticketing & hospitality (Ticketmaster class)", note: "The gate between fans and seats, with fees to match" }
    ],
    customers: [
      { name: "Fans", note: "Tickets, subscriptions, merchandise, and decades of loyalty: demand that survives recessions" },
      { name: "Advertisers & sponsors", note: "Sports is most of the top-rated broadcasts left; sponsorship is a $100B+ global line" },
      { name: "Sportsbooks", note: "Betting operators pay for data, integrity feeds, and media integrations" }
    ],
    regulators: [
      { name: "Antitrust law & carve-outs", note: "The 1961 Sports Broadcasting Act blesses pooled rights; courts police the edges (NCAA lost repeatedly)" },
      { name: "Gambling regulators", note: "State-by-state US patchwork post-2018; integrity rules bind leagues and books together" },
      { name: "Players' unions & CBAs", note: "Quasi-regulatory: salary caps, revenue splits, and labor peace are negotiated, not given" }
    ],
    capital: [
      { name: "Founding families & billionaires", note: "The legacy cap table; succession events force sales" },
      { name: "Private equity & institutions (Arctos, Ares, CVC, Sixth Street)", note: "Minority stakes at $5.8B-$8.8B NFL marks; CVC deployed ~$5B+ across LaLiga, Ligue 1, rugby, tennis" },
      { name: "Sovereign wealth (PIF, QIA)", note: "Saudi Arabia bought golf's civil war and Newcastle; states buy soft power" },
      { name: "Public markets & muni bonds", note: "Liberty's F1, MSG Sports, Atlanta Braves trade daily; taxpayers still co-fund stadiums" }
    ]
  },

  valueChain: {
    intro: "From a 12-year-old in an academy to a $76B media contract. Value concentrates where scarcity lives: the league that controls the auction and the capital that owns the franchise.",
    stages: [
      { id: "talent", name: "Talent & development", what: "Academies, drafts, agents, athlete brands", players: "Club academies, NCAA, CAA, Wasserman, Excel", valueCapture: 4,
        economics: { grossMargin: [20, 35], capitalIntensity: 2, concentration: 3 },
        linksTo: ["education", "entertainment"],
        deeper: "Players collectively capture roughly half of league revenue via CBAs: the best-paid labor force in the world per capita. Agencies clip fees on wages and endorsements; athlete media brands (podcasts, docuseries) now compete with the leagues for attention." },
      { id: "leagues", name: "Clubs & leagues (the IP)", what: "Competitions, schedules, and the pooled rights auction", players: "NFL, NBA, Premier League, IPL, F1, UFC, FIFA, IOC", valueCapture: 5,
        economics: { grossMargin: [30, 50], capitalIntensity: 2, concentration: 5 },
        linksTo: ["media", "entertainment"],
        deeper: "The cartel layer: one seller, many bidders, antitrust blessing. League offices take a slice and distribute the rest; the real prize is franchise membership itself, which appreciates on scarcity (32 NFL slots, average $7.1B each in 2025)." },
      { id: "rights", name: "Media rights & distribution", what: "Broadcast, cable, and streaming packages", players: "Disney/ESPN, NBC, Amazon, Netflix, YouTube, Sky, DAZN", valueCapture: 3,
        economics: { grossMargin: [10, 25], capitalIntensity: 3, concentration: 4 },
        linksTo: ["media", "telecom"],
        deeper: "Buyers often lose money on sports directly and earn it back in subscriber retention, advertising reach, and bundle pricing: which is why the marginal bid keeps rising. Netflix paid ~$150M for two 2024 NFL Christmas games and drew ~24M average viewers each: cheap per eyeball, priceless per headline." },
      { id: "venues", name: "Venues & matchday", what: "Stadiums, tickets, concessions, hospitality", players: "Team-owned venues, Live Nation/Ticketmaster, Legends, ASM", valueCapture: 2,
        economics: { grossMargin: [15, 30], capitalIntensity: 5, concentration: 3 },
        linksTo: ["real-estate", "construction", "tourism"],
        deeper: "The capital-heavy stage: $1B+ builds, 30-year bonds, and public subsidy fights. The new model treats the stadium as an anchor tenant for a mixed-use district: the real return is in the surrounding real estate, not the hot dogs." },
      { id: "commercial", name: "Sponsorship, betting & merchandise", what: "Naming rights, kit deals, licensing, data feeds", players: "Nike, Adidas, Fanatics, Sportradar, DraftKings, FanDuel", valueCapture: 3,
        economics: { grossMargin: [25, 45], capitalIntensity: 2, concentration: 3 },
        linksTo: ["gambling", "consumer-goods", "textiles-apparel", "retail"],
        deeper: "Sponsorship is the quiet $100B+ line that scales with attention; betting turned the schedule itself into a monetizable data product. Official data and integrity feeds are sole-source by league fiat: small revenue, monopoly economics." },
      { id: "capital", name: "Ownership & capital", what: "Franchise stakes, league funds, valuations", players: "Arctos, Ares, CVC, Sixth Street, PIF, Liberty Media", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 5, concentration: 4 },
        linksTo: ["private-equity", "capital-markets"],
        deeper: "The financialization layer: minority stakes trade at 10.7x average revenue in the NFL (Forbes, 2025), up from 6.4x in 5 years. PE gets diversified exposure to rights inflation without operating anything; sellers get liquidity without ceding control. The unresolved question is exit: who buys from the funds at 12x?" }
    ]
  },

  financials: {
    businessModel: [
      "Read the industry as 3 stacked P&Ls. Leagues and clubs: revenue is media rights (the largest and fastest-growing line, contracted 7 to 11 years ahead), matchday, sponsorship, and licensing; the dominant cost is players, pinned near 50% of revenue by CBAs, which makes margins structurally stable and labor peace the key earnings variable. Rights buyers: sports is a loss leader amortized across subscribers and advertising: judge them on churn and bundle economics, not sports P&L. Capital owners: total return is 90% appreciation, 10% yield: the asset is the franchise certificate, not the cash flow.",
      "The financial signature is rare: contracted, quasi-recurring revenue with monopoly pricing power and low cyclicality (attendance and ratings held through every modern recession), but thin conversion to distributable cash at the club level. Valuations therefore trade on scarcity and the next rights print rather than DCF: the NFL's average franchise rose 20% in 2025 to $7.1B while team cash flows moved far less. That gap between price and yield is either the bull case (a Veblen asset with an institutional bid) or the risk (duration priced for permanent rights inflation)."
    ],
    fingerprint: { grossMargin: 35, recurringRevenue: 70, capitalIntensity: 45, pricingPower: 85, cyclicality: 25, operatingLeverage: 50 },
    lines: [
      { label: "Media rights", note: "The engine: national deals contracted a decade out; the NBA's new deal alone is ~$6.9B/yr" },
      { label: "Matchday & ticketing", note: "Local, price-inelastic for winners; premium seating is the margin" },
      { label: "Sponsorship & commercial", note: "Naming rights, kit deals, league partners: the $100B+ global line" },
      { label: "Licensing & merchandise", note: "Fanatics-era royalties; small but pure margin" },
      { label: "Expansion fees & stake sales", note: "The balance-sheet line: WNBA fees went $50M to $250M in 2 years" }
    ],
    unitEconomics: {
      unit: "per NFL franchise (illustrative, 2025)",
      items: [
        { label: "Average valuation", value: "$7.1B", note: "Sportico 2025; up 20% YoY; Cowboys top at $12.8B" },
        { label: "Revenue", value: "~$660M", note: "implied by Forbes's 10.7x average revenue multiple" },
        { label: "National distributions", value: "~$400M/yr", note: "each club's share of pooled media and league money (Packers disclosures)" },
        { label: "Operating margin", value: "~15-20%", note: "player costs capped by CBA; the return is appreciation, not yield" }
      ]
    }
  },

  kpiRefs: ["media-content-ratio", "media-dtc-margin"],
  kpiLocal: [
    {
      id: "sports-rights-stepup", name: "Media Rights Step-Up", industries: ["sports"],
      definition: "The ratio of a new rights deal's average annual value to the expiring deal's.",
      formula: "Step-up = new deal AAV / prior deal AAV",
      interpretation: "The industry's single most important print: it reprices every franchise in the league. The NBA's 2024 renewal stepped up ~2.6x; a step-up near 1x would break the valuation model.",
      healthy: "1.5x+ on marquee renewals with new bidder classes entering", warning: "Step-ups below 1.2x, packages going unsold, or renewals shortening"
    },
    {
      id: "sports-franchise-multiple", name: "Franchise Revenue Multiple", industries: ["sports"],
      definition: "Franchise value divided by annual revenue: the scarcity premium in one number.",
      formula: "Multiple = franchise value / trailing revenue (Sportico/Forbes annual lists)",
      interpretation: "NFL average hit 10.7x in 2025 versus 6.4x five years earlier (Forbes): expansion driven by PE admission and rights inflation, not earnings growth.",
      healthy: "Stable-to-rising multiples confirmed by actual stake sales at or above list marks", warning: "Stake sales printing below published marks; multiple expansion with flat rights"
    }
  ],

  health: {
    intro: "League health is the durability of the next rights auction; club health is fan demand and labor peace; the capital layer's health is whether real transactions confirm the marks.",
    pillars: [
      { name: "Rights trajectory", weight: 30, metrics: "Step-up ratios, bidder count, deal tenor", healthy: "Multiple credible bidders incl. streamers; 1.5x+ renewals", warning: "Unsold packages, shrinking tenors, single-bidder auctions" },
      { name: "Fan engagement", weight: 25, metrics: "Ratings, attendance, youth demographics, social reach", healthy: "Ratings outperforming TV decline; sellouts; young fan growth", warning: "Aging audiences, soft secondary ticket prices" },
      { name: "Revenue diversification", weight: 20, metrics: "Media/matchday/sponsor mix, women's and international lines", healthy: "No line above 60%; new lines compounding", warning: "Single-buyer or single-market dependence" },
      { name: "Labor & cost control", weight: 15, metrics: "CBA years remaining, revenue-split stability", healthy: "Long labor peace; player share ~50% and stable", warning: "Opt-outs looming, lockout rhetoric, cap fights" },
      { name: "Ownership & balance sheet", weight: 10, metrics: "League debt limits, stake-sale prints vs marks", healthy: "Deep buyer bench; sales confirm valuations", warning: "Forced sellers, stake sales below marks, stadium debt stress" }
    ],
    scoringNote: "Sports rarely fails on demand: it fails on labor stoppages, buyer concentration, and paying today for rights growth that a smaller bundle cannot fund tomorrow."
  },

  valuation: {
    intro: "Franchises price on scarcity and revenue multiples confirmed by rare transactions; listed vehicles price on EBITDA; everything ultimately keys off the next rights print.",
    methods: [
      { name: "Revenue multiple (franchises)", use: "The standard for team stakes: Sportico/Forbes lists, PE marks", avoid: "Treating it as an earnings measure: it is a scarcity index", strengths: "Matches how deals actually print", weaknesses: "Circular: lists inform deals inform lists", range: { low: 5, high: 12, asOf: 2025, note: "NFL averages 10.7x (Forbes); soccer and smaller leagues trade lower" } },
      { name: "EV / EBITDA (listed vehicles)", use: "Liberty F1, Atlanta Braves, MSG Sports, Man Utd class", avoid: "Applying club multiples to rights buyers", strengths: "Real market prices, daily liquidity", weaknesses: "Thin float, controlled companies, event-driven", range: { low: 12, high: 25, asOf: 2025, note: "premium end for league-level IP like F1" } },
      { name: "Precedent stake sales", use: "Marking franchises where PE minorities have printed", avoid: "Ignoring minority discounts and control restrictions", strengths: "Actual cash prices: Bills 20.6% at $5.8B, 49ers 6.2% at $8.6B", weaknesses: "Sparse, negotiated, rights-cycle dependent", range: { low: 0, high: 0, asOf: 2025, note: "transaction anchor, not a multiple" } },
      { name: "Contracted-rights DCF", use: "Valuing league cash flows where deals run 7-11 years", avoid: "Extrapolating step-ups forever as terminal growth", strengths: "The visible decade is genuinely contracted", weaknesses: "Terminal value is a bet on the bundle's replacement", range: { low: 0, high: 0, asOf: 2025, note: "sanity check on what multiples imply" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a franchise quickly: revenue times a scarcity-adjusted multiple, less net debt.",
      inputs: [
        { id: "vc-rev", label: "Franchise revenue ($M)", min: 100, max: 1500, step: 25, value: 650, fmt: "money" },
        { id: "vc-mult", label: "Revenue multiple", min: 3, max: 14, step: 0.5, value: 9, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($M)", min: 0, max: 3000, step: 50, value: 600, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays sports as scarcity duration with almost no pure-play float: own the listed league IP (F1 class) and the picks and shovels (data, ticketing, betting infrastructure), treat rights buyers as media stocks whose sports spend is a churn hedge, and access franchises through the PE funds now permitted onto cap tables. The tape to watch is not earnings: it is step-up ratios and stake-sale prints.",
    debates: [
      { topic: "Rights supercycle: durable scarcity or a bubble on a melting bundle?", bull: "Live sports is the last mass simultaneous audience, and the buyer pool just doubled: Amazon, Netflix, YouTube, and Apple bid alongside legacy TV, so every renewal steps up (NBA ~2.6x) even as cable shrinks. Scarcity plus new money is not a bubble, it is repricing.", bear: "The pay-TV bundle that funded 30 years of inflation loses millions of homes a year, and streamers buy sports tactically, not structurally: once subscriber growth saturates, the marginal bid gets disciplined. Somebody paid 2.6x more for an audience that is measurably aging." },
      { topic: "Franchise valuations: institutional asset class or greater-fool trophy market?", bull: "10.7x revenue is cheap for a monopoly certificate with contracted decade-long cash flows, zero churn, and a buyer bench that now includes PE and sovereigns: every actual transaction (Bills, 49ers, Eagles stakes) printed at or above the lists.", bear: "These are illiquid, control-restricted minority stakes in assets yielding almost nothing, marked by media outlets and validated by a handful of negotiated deals: classic duration priced for permanent rights inflation, with no visible exit for the funds buying in at the top." },
      { topic: "Women's sports: structural inflection or star-driven spike?", bull: "Revenue tripled since 2022 to a projected $2.35B+ (Deloitte), WNBA expansion fees went 5x in 2 years, and rights remain priced far below audience growth: the rare underpriced asset inside an expensive sector.", bear: "The surge concentrates in a few transcendent stars and 2 leagues; absolute numbers are still under 1% of the industry, and history shows attention spikes that faded when the stars left." }
    ],
    cycle: {
      where: "Mid rights-supercycle, early institutional-capital cycle: the NBA's record deal starts airing in the 2025-26 season, NFL PE stakes are printing at record marks, and women's sports is at the steep part of its curve, while pay-TV decay quietly erodes the legacy funding base.",
      drivers: "Streaming subscriber economics, pay-TV attrition, betting legalization and handle growth, labor peace, and the scarcity bid from PE and sovereign wealth.",
      leads: [
        "Rights step-up ratios on every marquee renewal (trade press, free)",
        "Annual Sportico and Forbes franchise valuation lists (free)",
        "Green Bay Packers annual financials: the only public NFL book (free)",
        "Nielsen ratings prints for marquee windows (free press releases)",
        "WNBA/NWSL expansion-fee and attendance prints (free)"
      ]
    },
    exposure: [
      { vehicle: "Liberty Media / Formula One (FWONK class)", note: "The cleanest listed league IP: global rights, capped team costs" },
      { vehicle: "Listed clubs (Atlanta Braves, MSG Sports, Man Utd class)", note: "Franchise scarcity with a ticker; thin float, control discounts" },
      { vehicle: "Rights buyers (Disney, Comcast, Netflix, Amazon)", note: "Sports as churn control inside media P&Ls; size the media thesis first" },
      { vehicle: "Picks and shovels (Sportradar, Genius, Live Nation class)", note: "Data, integrity, and ticketing tolls on the whole ecosystem" },
      { vehicle: "Betting operators (Flutter, DraftKings class)", note: "The demand side of the data economy; regulatory beta attached" }
    ],
    catalysts: [
      { when: "Oct 2025 onward", what: "NBA's NBC/Amazon era debuts: first ratings and churn evidence for the $76B bet" },
      { when: "Jun-Jul 2026", what: "48-team World Cup across North America: FIFA's largest-ever commercial cycle" },
      { when: "Aug-Dec annually", what: "Forbes and Sportico valuation lists reset the franchise marks" },
      { when: "2025-2027", what: "WNBA CBA renegotiation and $250M expansion teams; NFL and NBA international game expansion" }
    ],
    data: [
      { series: "Franchise valuations & stake sales", source: "Sportico / Forbes annual lists (free)", why: "The industry's balance sheet, updated yearly" },
      { series: "Packers annual report", source: "packers.com / AP coverage (free)", why: "The only open NFL P&L: national revenue per club" },
      { series: "Ratings for marquee windows", source: "Nielsen press releases (free)", why: "Demand evidence behind the rights bids" },
      { series: "Deloitte sports outlooks", source: "deloitte.com insights (free)", why: "Best free synthesis incl. women's sports revenue" },
      { series: "State betting handle", source: "state gaming commissions (free)", why: "The betting economy's primary tape" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Attendance and ratings historically hold; sponsorship and advertising soften first. Contracted rights carry league revenue through; listed clubs trade with the tape anyway." },
      { regime: "Rates rising", behavior: "Franchise values are long duration: marks are sticky but stake demand thins and stadium financing costs bite. Prefer cash-generative picks and shovels over scarcity marks." },
      { regime: "Streaming wars intensify", behavior: "Best regime: every renewal becomes an auction with a desperate new bidder. Own league IP and rights-cycle beneficiaries." },
      { regime: "Cord-cutting accelerates", behavior: "Watch step-up ratios, not subscriber counts: the moment a marquee package renews flat, the whole valuation stack rerates. Rotate toward betting/data tolls that price on engagement." }
    ]
  },

  players: [
    { name: "NFL", role: "The most valuable league", country: "US", real: true, note: "Average team $7.1B, all 32 worth $228B (Sportico, 2025); ~$110B media round in 2021" },
    { name: "NBA", role: "The rights-inflation benchmark", country: "US", real: true, note: "$76B over 11 years from 2025-26: ~2.6x the prior deal" },
    { name: "Premier League", role: "Global soccer's media flagship", country: "GB", real: true, note: "Record ~$8.5B domestic deal for 2025-29; international rights now rival domestic" },
    { name: "FIFA & IOC", role: "Mega-event monopolies", country: "CH", real: true, note: "World Cup and Olympics: quadrennial auctions to national broadcasters" },
    { name: "Liberty Media / Formula 1", role: "The listed league", country: "US", real: true, note: "Bought F1 for $4.4B in 2017; the public-market proof of league IP value" },
    { name: "Disney / ESPN", role: "Legacy rights king going DTC", country: "US", real: true, note: "~$2.6B/yr for the NBA A package; the bundle's biggest toll turning into an app" },
    { name: "Amazon / Netflix / YouTube", role: "The streaming land grab", country: "US", real: true, note: "TNF ~$1B/yr; NFL Christmas games ~24M viewers each; Sunday Ticket ~$2B/yr" },
    { name: "CVC Capital Partners", role: "PE's league pioneer", country: "LU", real: true, note: "~$5B+ deployed across LaLiga, Ligue 1, rugby, tennis, volleyball" }
  ],

  geography: [
    { country: "US", role: "The valuation engine", note: "4 of the 5 richest leagues; the betting and PE capital pools" },
    { country: "GB", role: "Soccer's commercial capital", note: "Premier League exports rights to 180+ markets" },
    { country: "CH", role: "Governing-body HQ", note: "FIFA, IOC, UEFA: the mega-event monopolies domicile here" },
    { country: "IN", role: "Cricket's superpower", note: "IPL media rights (~$6B for 2023-27) trail only the NFL per match" },
    { country: "SA", role: "Sovereign disruptor", note: "PIF bought golf's civil war, Newcastle, and the 2034 World Cup" },
    { country: "ES", role: "Legacy giants, new capital", note: "LaLiga sold ~8% of its media business to CVC for ~$2.2B (2021)" }
  ],

  cycles: [
    { year: 1961, title: "The Sports Broadcasting Act", kind: "shift", text: "Congress exempts pooled league TV rights from antitrust, legalizing the cartel economics that fund everything since. Lesson: the industry's moat is written in statute, not strategy." },
    { year: 1984, title: "The LA Olympics surplus", kind: "boom", text: "A privately financed Games turns a large surplus and invents modern sponsorship tiers. Lesson: scarcity plus exclusivity converts attention into rent." },
    { year: 1992, title: "Premier League x Sky", kind: "shift", text: "England's top clubs break away and sell to a struggling satellite broadcaster; both are transformed. Lesson: sports and distribution platforms make each other: the rights bid is a platform bet." },
    { year: 2020, title: "COVID's empty stadiums", kind: "bust", text: "Matchday revenue vanishes overnight; contracted media money carries the leagues through. Lesson: the media annuity, not the gate, is the industry's true balance sheet." },
    { year: 2024, title: "Streamers and PE arrive together", kind: "shift", text: "The NBA signs $76B with Amazon and NBC inside; the NFL votes to admit private equity, and stakes print at up to $8.8B valuations. Lesson: new buyer classes, not new fans, drive the repricing." }
  ],

  risks: [
    { name: "Rights deflation at renewal", severity: 4, likelihood: 3, transmission: "Pay-TV decay outruns streaming monetization -> a marquee package renews flat -> step-up assumption breaks -> franchise multiples compress league-wide." },
    { name: "Buyer concentration", severity: 3, likelihood: 3, transmission: "A handful of streamers and 2 broadcasters set the marginal bid -> one strategic retreat (a Netflix or Amazon pivot) thins the auction -> pricing power flips to buyers." },
    { name: "Betting integrity shock", severity: 3, likelihood: 3, transmission: "A major match-fixing or player-gambling scandal -> regulatory clampdown and sponsor flight -> the fastest-growing commercial line stalls." },
    { name: "Labor stoppage", severity: 3, likelihood: 2, transmission: "CBA fight or lockout -> lost seasons burn fan goodwill and trigger media make-goods -> ratings and sponsorship take years to recover (the 1994 MLB template)." },
    { name: "Valuation-liquidity reset", severity: 4, likelihood: 2, transmission: "Rates stay high and PE exits stay closed -> stake sales print below the lists -> the mark-to-media valuation stack rerates without a single game changing." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Sports leagues sell the only TV content people insist on watching live, which makes it enormously valuable to networks and streaming services. Leagues auction those broadcast rights for billions (the NBA's newest deal is worth about $76B over 11 years), and the teams themselves, which almost never come up for sale, keep rising in price: the average NFL team was worth $7.1B in 2025."] },
    L2: { title: "Intermediate", text: ["The economics rest on 3 pillars: pooled media rights (legal for US leagues since 1961), franchise scarcity (only 32 NFL slots exist), and labor deals that fix player costs near 50% of revenue. Media rights reprice upward at every renewal because streamers like Amazon, Netflix, and YouTube now bid against traditional TV. Growth is coming from women's sports (revenue roughly tripled since 2022 to a projected $2.35B+), legalized betting, and international expansion."] },
    L3: { title: "Advanced", text: ["Analyze the 3 P&Ls separately: leagues/clubs earn contracted media money plus matchday and sponsorship with CBA-capped costs; rights buyers treat sports as a churn hedge judged on subscriber math, not sports profit; capital owners earn appreciation, not yield. The valuation stack keys off 2 prints: rights step-up ratios (NBA ~2.6x in 2024) and franchise revenue multiples (NFL 10.7x average in 2025, from 6.4x in 5 years). Watch whether actual stake sales confirm the published marks."] },
    L4: { title: "Expert", text: ["Live debates: whether streaming monetization replaces the melting pay-TV subsidy before the next renewal cycle, whether 10.7x revenue for illiquid minority stakes is an institutional asset class or duration mispriced, and whether women's sports is a structural inflection or a star cycle. Trade the catalysts: the NBA's NBC/Amazon debut (2025-26), the 2026 World Cup cycle, annual valuation lists, and every CBA opt-out date. The tell on the whole sector is a single marquee package renewing flat."] },
    L5: { title: "Institutional", text: ["Allocator's frame: sports offers contracted, recession-resistant revenue with monopoly pricing power but almost no liquid pure-play float, so access is the whole game: listed league IP (F1 class), club listings at control discounts, PE funds with league-approved stakes, and picks-and-shovels operators. The asset class's structural bet is that scarce live attention keeps repricing upward as distribution fragments; its structural flaw is exit dependence on an ever-deeper buyer bench. Underwrite the rights cycle, not the team."] }
  },

  quiz: [
    { q: "The NBA's media deal starting in 2025-26 totals roughly:", choices: ["$7.6B over 5 years", "$76B over 11 years: about 2.6x the prior contract", "$760M per season", "$176B over 20 years"], answer: 1, explain: "About $6.9B per season from Disney, NBC, and Amazon: the benchmark print for rights inflation, with TNT out after nearly 4 decades." },
    { q: "Live sports commands premium rights fees mainly because it is:", choices: ["Cheap to produce", "The last content watched live at mass scale: DVR-proof and churn-resistant", "Government subsidized", "Free of competition"], answer: 1, explain: "Simultaneous mass audiences are extinct elsewhere in media; that scarcity keeps legacy TV and streamers bidding against each other." },
    { q: "In 2025 the average NFL franchise was worth about:", choices: ["$710M", "$7.1B, with all 32 teams at $228B combined", "$71B", "$2.28B"], answer: 1, explain: "Sportico's 2025 list: up 20% in a year, with the Cowboys at $12.8B and 3 clubs above $10B." },
    { q: "US leagues can legally pool and sell national TV rights because of:", choices: ["An FCC waiver", "The 1961 Sports Broadcasting Act's antitrust exemption", "State gambling laws", "Union contracts"], answer: 1, explain: "Congress blessed the cartel: one seller facing many bidders is the industry's statutory moat." },
    { q: "NFL franchise revenue multiples moved over 5 years from roughly:", choices: ["10.7x down to 6.4x", "6.4x up to 10.7x: expansion driven by PE entry and rights inflation", "2x to 3x", "They are unchanged"], answer: 1, explain: "Forbes (2025): the multiple, not earnings, did most of the valuation work: the scarcity premium in one number." },
    { q: "Deloitte projected elite women's sports revenue in 2025 at:", choices: ["Above $2.35B, roughly 3x its 2022 estimate", "About $235M", "Above $23.5B", "Flat since 2020"], answer: 0, explain: "The inflection is real: WNBA expansion fees jumped from $50M (2023) to $250M (2025) alongside record ratings and attendance." },
    { q: "Streamers pay up for sports primarily to:", choices: ["Maximize direct sports profit", "Acquire and retain subscribers: sports is churn control, not a P&L line", "Satisfy regulators", "Fill daytime schedules"], answer: 1, explain: "Netflix's ~$150M for two NFL Christmas games bought ~24M average viewers each: cheap marketing, expensive television." },
    { q: "A club's dominant cost line, fixed by collective bargaining, is:", choices: ["Stadium debt", "Player compensation, pinned near 50% of league revenue", "Travel", "Broadcasting equipment"], answer: 1, explain: "CBAs make margins structurally stable and shift the earnings risk to labor peace: lockouts, not recessions, are the historical profit killers." }
  ],

  sources: [
    { name: "Sportico NFL team valuations 2025", url: "https://www.sportico.com/valuations/teams/2025/nfl-team-values-2025-dallas-cowboys-billion-1234866760/", feeds: "franchise values, stake sales" },
    { name: "CBS Sports: NBA 11-year, $76B media deal", url: "https://www.cbssports.com/nba/news/nba-signs-new-tv-deal-details-on-11-year-76-billion-deal-with-espn-nbc-amazon-as-tnt-gets-left-out/", feeds: "media rights" },
    { name: "The Business Research Company: Global Sports Market Report", url: "https://www.thebusinessresearchcompany.com/report/sports-global-market-report", feeds: "market size, CAGR" },
    { name: "Deloitte insights: women's sports revenue predictions", url: "https://www.deloitte.com/insights", feeds: "women's sports, industry outlook" }
  ]
};
