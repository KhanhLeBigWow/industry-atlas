/* Industry Atlas - GAMBLING & BETTING (full module, research-backed)
 * Anchors: global gambling revenue $643.7B in 2025 (Gambling Insider statistics roundup, 2026);
 * US commercial gaming record $78.7B GGR and $18.1B state gaming taxes in 2025 (AGA State of the
 * States 2026); US sports betting record $16.96B GGR on $166.94B handle at a 10.2% hold in 2025
 * (AGA via ESPN, 2026); FanDuel + DraftKings roughly 68% of US online handle, challengers BetMGM
 * 9.8%, Fanatics 7.3%, Caesars 5.3% (Casino Reports market database, 2026); Macau GGR $30.8B in
 * 2025, +9.1% YoY, roughly 85% of 2019 levels (DICJ via Yogonet, Jan 2026). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["gambling"] = {
  meta: {
    id: "gambling", name: "Gambling & Betting", sector: "consumer", status: "full",
    tagline: "The only consumer industry where the product is a math formula: the house edge, compounded across $640B of global losses a year.",
    marketSize: { value: 644, unit: "$B", asOf: 2025, note: "global gross gaming revenue (player losses) across casinos, lotteries, betting; online ~$121B of it" },
    cagr: { value: 6, range: [4, 9], horizon: "2025-2030" },
    maturity: "growth-mature", cyclicality: 3, capitalIntensity: 3, regulation: 5, disruption: 4
  },
  newsQuery: '("sports betting" OR FanDuel OR DraftKings OR casino OR Macau OR iGaming OR "gross gaming revenue" OR "prediction market")',

  overview: {
    definition: "The gambling industry manufactures and distributes risk for entertainment: casinos, sports betting, lotteries, and online gaming. Its unit of account is gross gaming revenue (GGR): what players lose. Globally that ran about $643.7B in 2025, making the house edge one of the most reliable revenue formulas in the consumer economy.",
    howItWorks: [
      "Every product is the same machine wearing different clothes: a game with a built-in statistical margin for the operator. Slots hold 5-10% of coin-in, double-zero roulette holds 5.26%, a classic two-sided sports bet holds about 4.5%, and lotteries keep 40-50% of every ticket. Revenue = handle (total wagered) x hold (the edge that sticks). Operators do not gamble; they sell volatility retail and collect the margin wholesale.",
      "The industry splits into 4 economic species. Land-based casinos are real-estate-heavy entertainment complexes (Las Vegas Strip resorts earn more from rooms, food, and shows than from tables). Online operators are marketing-and-technology machines with almost no physical capital. Lotteries are state-sanctioned monopolies, the largest single slice of global GGR. B2B suppliers (slot makers, live-casino studios, odds feeds, platforms) sell picks and shovels on revenue-share terms, often with the best margins in the sector: Evolution's live-casino studios run EBITDA margins above 60%.",
      "The US is the growth engine. Since the Supreme Court struck down PASPA in May 2018, nearly 40 jurisdictions have legalized sports betting, and the market compounded to a record $16.96B of sportsbook GGR on $166.94B of handle in 2025 (AGA), inside a record $78.7B total US commercial GGR that threw off $18.1B in state gaming taxes. Two brands took most of it: FanDuel (Flutter) and DraftKings control roughly 68% of online handle, a duopoly built on daily-fantasy databases, parlay product, and promotional firepower no challenger has matched.",
      "The quiet driver of profitability is hold expansion. Same-game parlays, priced with 20-30% theoretical margins versus ~4.5% on straight bets, pushed the average US sportsbook hold to 10.2% in 2025, roughly double the early post-PASPA years. That is the industry's flywheel and its vulnerability: recreational bettors love parlays, regulators increasingly notice what they cost players, and CFTC-regulated prediction markets (Kalshi, Polymarket) now offer sports event contracts at exchange-style pricing that undercuts sportsbook margins entirely, from a federal flank the states cannot easily block."
    ],
    history: [
      { era: "1931-1978", title: "Nevada's monopoly", text: "Nevada legalizes gambling in the Depression; the mob builds Las Vegas, Howard Hughes and corporate licensing launder its reputation. Atlantic City breaks the monopoly in 1978." },
      { era: "1978-2001", title: "The American spread", text: "The Indian Gaming Regulatory Act (1988) and riverboat laws carpet the US with regional casinos; tribal gaming grows into a parallel industry (nearly $42B GGR by FY2023, NIGC). Gambling normalizes from vice to entertainment line item." },
      { era: "2002-2013", title: "Macau's supernova", text: "Macau ends the Stanley Ho monopoly, licenses Sands, Wynn, and MGM, and rides junket-financed VIP baccarat past Las Vegas by 2007, peaking near $45B GGR in 2013: 6x the Strip." },
      { era: "2014-2018", title: "Crackdowns and the courtroom", text: "China's anti-corruption drive guts Macau VIP (GGR falls by more than a third); the US argues Murphy v. NCAA, and in May 2018 the Supreme Court voids PASPA, handing sports betting to the states." },
      { era: "2018-present", title: "The mobile land grab", text: "Nearly 40 US jurisdictions legalize; FanDuel and DraftKings burn billions on promos to seize a ~68% duopoly; parlays double the hold; Macau rebuilds on premium-mass; prediction markets open a CFTC-regulated side door." }
    ],
    trends: [
      { title: "Parlay-driven hold expansion", direction: "up", text: "US average hold reached 10.2% in 2025 as same-game parlays became the default recreational product; every point of hold is pure operator margin, and pure player cost." },
      { title: "The state tax squeeze", direction: "shift", text: "States are re-rating the golden goose: New York taxes online sports GGR at 51%, Illinois moved to a graduated rate up to 40% plus a per-wager surcharge in 2025. Tax creep is now the biggest line-item risk in operator models." },
      { title: "Prediction markets go mainstream", direction: "up", text: "Kalshi's CFTC-regulated sports event contracts survived state cease-and-desist orders in 2025 via federal preemption arguments; Polymarket re-entered the US through a licensed exchange. Exchange pricing threatens the parlay margin pool." },
      { title: "Macau's premium-mass rebuild", direction: "up", text: "GGR hit $30.8B in 2025 (+9.1%), about 85% of 2019, with junket VIP replaced by higher-margin premium-mass play: a structurally better earnings mix on lower volume." },
      { title: "iGaming legalization stall", direction: "shift", text: "Online casino, the highest-margin US vertical, remains legal in only 7 states as land-based operators and unions fight cannibalization battles; gray-market sweepstakes casinos fill the vacuum." }
    ],
    outlook: "The next 5 years are a collision between the industry's best-ever product economics (parlays, iGaming, premium-mass Macau) and the 3 forces those economics summon: tax-hungry states, problem-gambling politics, and margin-compressing prediction markets. Base case: mid-single-digit global growth with US online consolidating around the duopoly as promo spend fades into profit. The swing variable is regulatory: California and Texas legalization would add the 2 largest prizes, while a federal turn on advertising or event contracts could reprice the whole sector."
  },

  structure: {
    suppliers: [
      { name: "Content & equipment (Aristocrat, Light & Wonder, Evolution, Playtech)", note: "Slots, table games, live-casino studios: revenue-share economics, sector-best margins" },
      { name: "Odds, data & risk (Sportradar, Genius Sports, Kambi, OpenBet)", note: "Official league data feeds and pricing engines behind most sportsbooks" },
      { name: "Compliance & payments rails (GeoComply, Paysafe, Trustly)", note: "Geolocation, KYC, and instant banking: every legal bet passes through them" },
      { name: "Leagues & rights holders (NFL, NBA, FIFA ecosystem)", note: "Sell data rights and sponsorships to the industry they once sued to stop" }
    ],
    producers: [
      { name: "Online operators (FanDuel/Flutter, DraftKings, bet365, Entain)", note: "The growth engine: ~68% US duopoly, marketing-and-tech P&Ls" },
      { name: "Integrated resorts (Sands, Galaxy, MGM, Wynn, Caesars)", note: "Casino floors wrapped in hotels, malls, and arenas: Macau, Vegas, Singapore" },
      { name: "Lotteries (state monopolies; Brightstar, Allwyn, Intralot as operators)", note: "The biggest, quietest slice: US ticket sales alone exceed $100B a year" },
      { name: "Tribal gaming (US)", note: "Nearly $42B GGR (FY2023, NIGC), a sovereign parallel system with its own compacts" }
    ],
    distributors: [
      { name: "Mobile apps & app stores", note: "The new casino floor: CAC, promos, and push notifications replace free drinks" },
      { name: "Casino floors & lottery retail", note: "Convenience stores sell more gambling than the Las Vegas Strip" },
      { name: "Affiliates & media (Better Collective class, ESPN Bet licensing)", note: "Paid per depositing player: the acquisition layer" }
    ],
    customers: [
      { name: "Recreational players", note: "The vast majority of volume; entertainment budget, negative expected value accepted" },
      { name: "Premium mass & VIP", note: "Macau's rebuilt core; hosted play, credit, and comps economics" },
      { name: "Sharps & arbitrageurs", note: "Skilled bettors whom sportsbooks limit within days: the industry only banks losers" }
    ],
    regulators: [
      { name: "State commissions (Nevada GCB, NJ DGE, and ~40 peers)", note: "License, tax, and audit everything; suitability reviews reach into ownership" },
      { name: "Macau DICJ & national regulators (UKGC, MGA)", note: "Concession renewals and affordability rules move billions in value" },
      { name: "CFTC", note: "The wildcard: federal oversight of event contracts bypasses state licensing entirely" },
      { name: "AML bodies (FinCEN, FATF)", note: "Casinos are financial institutions in AML law; junket history shows why" }
    ],
    capital: [
      { name: "Casino REITs (VICI, GLPI)", note: "OpCo/PropCo splits monetized the real estate; operators now rent their own floors" },
      { name: "High-yield credit", note: "The sector's habitat: leverage amplified the Caesars LBO disaster and funds every resort build" },
      { name: "Public equity & venture", note: "DKNG as the sector's growth proxy; prediction-market startups raised at multi-billion marks through 2025" }
    ]
  },

  valueChain: {
    intro: "From a game designer's math model to a settled bet: the margin concentrates in whoever owns the player relationship and the content IP, while the capital sits in real estate and the risk sits with the license.",
    stages: [
      { id: "content", name: "Game content & studios", what: "Slot titles, live-casino streams, table game IP", players: "Aristocrat, Light & Wonder, Evolution, Playtech", valueCapture: 5,
        economics: { grossMargin: [55, 75], capitalIntensity: 2, concentration: 4 },
        linksTo: ["gaming", "saas", "media"],
        deeper: "Hit games are annuities: operators pay revenue share for decades, and switching costs are player habits. Evolution built a near-monopoly in live dealer streaming with EBITDA margins above 60%: the best P&L in gambling belongs to a supplier, not a casino." },
      { id: "platform", name: "Platforms, odds & data", what: "Sportsbook engines, risk management, official data feeds", players: "Kambi, OpenBet, Sportradar, Genius Sports", valueCapture: 3,
        economics: { grossMargin: [40, 60], capitalIntensity: 2, concentration: 4 },
        linksTo: ["sports", "ai", "saas"],
        deeper: "Pricing thousands of in-play markets per game is an ML problem; leagues sell official data as a toll. The strategic risk: scaled operators (FanDuel, DraftKings, bet365) keep insourcing the stack, shrinking the third-party market to subscale operators." },
      { id: "online-ops", name: "Online operators", what: "Apps, CRM, promotions, the player relationship", players: "FanDuel, DraftKings, bet365, BetMGM, Fanatics", valueCapture: 4,
        economics: { grossMargin: [45, 60], capitalIntensity: 2, concentration: 5 },
        linksTo: ["ecommerce", "media", "payments"],
        deeper: "A CAC-versus-LTV business wearing a gaming license: the duopoly's ~68% handle share rests on database scale, parlay product depth, and the ability to outspend rivals on promos through every state launch, then harvest margin as markets mature." },
      { id: "land-ops", name: "Land-based resorts", what: "Casino floors inside hotel-retail-entertainment complexes", players: "Sands, Galaxy, MGM, Wynn, Caesars", valueCapture: 3,
        economics: { grossMargin: [25, 45], capitalIntensity: 5, concentration: 3 },
        linksTo: ["tourism", "real-estate", "restaurants"],
        deeper: "Licenses are the moat (6 Macau concessions, capped US markets), buildings are the cost: $4B+ per integrated resort. Singapore's 2-license duopoly shows the model at its best; Macau's 2025 recovery to ~85% of 2019 on premium-mass shows mix beating volume." },
      { id: "lottery", name: "Lotteries", what: "State-monopoly draw games, scratchers, terminals", players: "State lotteries; Brightstar, Allwyn, Intralot as tech/operators", valueCapture: 3,
        economics: { grossMargin: [40, 55], capitalIntensity: 2, concentration: 4 },
        linksTo: ["government", "retail"],
        deeper: "The 40-50% take-out rate is the highest hold in gambling, defended by statute. For suppliers it is a bond-like annuity: multi-decade contracts, minimal churn, which is why IGT spun its gaming arm to Apollo and rebuilt as lottery pure-play Brightstar in 2025." },
      { id: "compliance", name: "Payments, identity & compliance", what: "Geolocation, KYC/AML, deposits, responsible-gaming tools", players: "GeoComply, Paysafe, Trustly, Worldpay", valueCapture: 2,
        economics: { grossMargin: [30, 50], capitalIntensity: 2, concentration: 3 },
        linksTo: ["payments", "fintech", "cybersecurity"],
        deeper: "Every legal US bet is geolocated and identity-checked in milliseconds: a regulatory mandate turned toll booth. GeoComply sits on nearly all US online wagers; the layer scales with handle, not with hold, making it the purest volume play in the chain." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as 3 different P&Ls. Online operators: revenue = handle x hold, minus promotions (the line that separates GGR from net gaming revenue), minus gaming taxes, minus marketing; the model swings from cash furnace during state launches to 25-35% EBITDA margins at maturity, and every point of hold (10.2% US average in 2025, parlay-driven) drops almost straight through. Land-based resorts: EBITDAR on a property-by-property basis, with rent to the REITs, maintenance capex that never ends, and non-gaming revenue (rooms, food, entertainment) now over half the Strip's take. Suppliers: revenue-share royalties on content and platforms, software economics with gambling-sector multiples.",
      "The structural tension is who keeps the edge. Gross margins are enormous because the product is math, but states tax GGR at anywhere from 6.75% (Nevada) to 51% (New York online), leagues charge for data, app stores and payments take their cut, and promotions hand a chunk of the hold back to players. The 2025 US numbers frame it: $78.7B of commercial GGR produced $18.1B of state gaming taxes before a dollar of operating cost. Owning the license is permission to earn; owning the player database and the content IP is what determines how much survives to EBITDA."
    ],
    fingerprint: { grossMargin: 60, recurringRevenue: 45, capitalIntensity: 50, pricingPower: 65, cyclicality: 50, operatingLeverage: 70 },
    lines: [
      { label: "Handle & GGR", note: "The volume tape: monthly state reports and Macau's first-business-day print" },
      { label: "Hold %", note: "The margin engine: parlay mix pushed the US average to 10.2% in 2025" },
      { label: "Promotions (GGR to NGR bridge)", note: "The launch-phase cash burn; fading promos are the maturity dividend" },
      { label: "Gaming taxes", note: "6.75% to 51% of GGR by state: the line legislators keep revisiting" },
      { label: "Non-gaming revenue", note: "Rooms, food, retail, entertainment: over half of Las Vegas Strip revenue" }
    ],
    unitEconomics: {
      unit: "per $100 wagered, US online sportsbook (illustrative)",
      items: [
        { label: "Handle", value: "$100", note: "recycled bankroll: players re-bet winnings, so handle >> deposits" },
        { label: "GGR at average hold", value: "~$10", note: "10.2% US average in 2025; straight bets ~5%, parlays 20-30%" },
        { label: "Promos + gaming tax", value: "~$3 to $6 of that", note: "varies by state maturity and tax rate (NY takes 51% of GGR)" },
        { label: "Mature-state EBITDA", value: "~$2 to $3", note: "25-35% of net revenue once marketing normalizes" }
      ]
    }
  },

  kpiRefs: ["pay-take-rate", "retail-sss"],
  kpiLocal: [
    {
      id: "gam-hold", name: "Hold Rate (Win %)", industries: ["gambling"],
      definition: "GGR as a % of handle: the share of total wagers the house keeps.",
      formula: "Hold = GGR / handle; theoretical hold set by product mix, actual hold adds sports-outcome luck",
      interpretation: "The industry's price. US sportsbook average hit 10.2% in 2025 on parlay mix, roughly double early post-PASPA levels. Rising hold = margin expansion; compare actual vs theoretical to separate skill from variance.",
      healthy: "Stable-to-rising hold with parlay mix, near theoretical", warning: "Hold reliant on one-sided outcomes; regulator scrutiny of parlay pricing" },
    {
      id: "gam-promo-intensity", name: "Promo Intensity (GGR to NGR)", industries: ["gambling"],
      definition: "Promotional spend (bonus bets, odds boosts, deposit matches) as a % of GGR.",
      formula: "Promo intensity = (GGR - NGR) / GGR",
      interpretation: "The customer-acquisition arms race in one ratio. New-state launches run 30%+ as operators buy databases; mature markets fade toward 15%. The duopoly's scale lets it outspend and still out-earn.",
      healthy: "Declining glide path as states mature; CAC payback under 2 years", warning: "Promo intensity flat or rising in mature states: share war, not growth" }
  ],

  health: {
    intro: "Operator health is hold quality and license standing; supplier health is content share and contract duration; everyone's health is regulatory goodwill, the one asset that cannot be bought back quickly.",
    pillars: [
      { name: "Margin quality (hold & promo)", weight: 25, metrics: "Hold vs theoretical, promo intensity glide path, parlay mix", healthy: "Rising structural hold, fading promos", warning: "Buying handle with promos; hold luck masking mix problems" },
      { name: "Regulatory & license standing", weight: 25, metrics: "Tax-rate trajectory, license renewals, RG compliance record", healthy: "Long concessions, clean audits, seat at the table", warning: "Tax hikes landing, fines, advertising restrictions" },
      { name: "Market position & database", weight: 20, metrics: "GGR share by state, active users, cross-sell rate to iGaming", healthy: "Top-3 share with growing actives", warning: "Sub-5% share paying duopoly-level CAC" },
      { name: "Balance sheet & rent load", weight: 15, metrics: "Leverage vs EBITDAR, REIT rent coverage, launch-burn runway", healthy: "Net leverage under 4x with rent covered 2x+", warning: "Caesars-2008-style leverage into a downturn" },
      { name: "Product & tech velocity", weight: 15, metrics: "In-house stack vs third-party, live-betting depth, feature cadence", healthy: "Owned stack, weekly release cycles", warning: "Renting a commodity platform in a product war" }
    ],
    scoringNote: "Weight regulatory standing near the top: in gambling, the state is simultaneously your licensor, your largest effective shareholder via taxes, and your most dangerous competitor via lotteries."
  },

  valuation: {
    intro: "The market prices 3 different animals: online growth operators on revenue and path-to-margin, land-based resorts on EV/EBITDAR and property value, suppliers like the software royalties they are.",
    methods: [
      { name: "EV / EBITDA (land-based)", use: "Integrated resorts and regionals through the cycle", avoid: "Ignoring rent: REIT-tenant operators need EBITDAR lenses", strengths: "Standard, comparable across Vegas, Macau, regionals", weaknesses: "Concession renewal risk and capex cycles hide inside the multiple", range: { low: 7, high: 11, asOf: 2025, note: "Macau names carry the China discount; Singapore duopoly the premium" } },
      { name: "EV / Revenue with margin bridge (online)", use: "DraftKings-class operators still scaling into profitability", avoid: "Static multiples: the whole thesis is the promo fade and hold mix", strengths: "Captures the land-grab phase honestly", weaknesses: "Assumes mature margins that regulation can confiscate (see Illinois 2025)", range: { low: 2, high: 6, asOf: 2025, note: "x forward revenue; leaders earn the top of the band" } },
      { name: "Sum-of-the-parts with PropCo", use: "Operators sitting on owned real estate (or REIT stubs VICI/GLPI)", avoid: "Double-counting rent savings in the OpCo", strengths: "The OpCo/PropCo arbitrage built modern casino finance", weaknesses: "Cap-rate sensitivity; sale-leaseback locks in a fixed-cost floor", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor; casino REITs trade on cap rates near triple-net peers" } },
      { name: "Annuity multiple (suppliers & lottery)", use: "Evolution, Brightstar-class contracts: price the royalty stream", avoid: "Applying operator multiples to contract-locked cash flows", strengths: "Matches the economics: decade-long revenue share", weaknesses: "Regulatory bans on content categories can hit overnight", range: { low: 10, high: 18, asOf: 2025, note: "EV/EBITDA; quality suppliers out-multiple most operators" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a gambling name quickly: normalized EBITDA times a license-and-mix-adjusted multiple, minus net debt (count REIT rent capitalization for tenants).",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 12, step: 0.2, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 5, max: 20, step: 0.5, value: 10, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -5, max: 30, step: 1, value: 5, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays gambling as 3 sleeves: the US online duopoly as a maturing land-grab harvesting margin (the growth book), Macau and Singapore resorts as a China-sentiment recovery trade at ~85% of prior peak (the value book), and B2B suppliers plus casino REITs as the annuity core that earns through every promo war. Regulation is not a risk factor here; it is the industry's operating system, so position sizing follows the legislative calendar.",
    debates: [
      { topic: "Is the FanDuel/DraftKings duopoly permanent?", bull: "Scale compounds everywhere that matters: promo budgets, parlay pricing data, media deals, and state-by-state launch playbooks. Challengers with famous brands (ESPN Bet, Caesars) have already retreated or stalled; ~68% handle share with better hold is a moat that widens as promos fade into profit.", bear: "The moat is a spending level, not a technology: bet365 proves product can travel, Fanatics is buying share, and prediction markets attack the margin pool itself with exchange pricing. Duopolies built on CAC get repriced the moment growth capital returns to the sector." },
      { topic: "Parlay hold: durable margin or regulatory time bomb?", bull: "Players demonstrably prefer lottery-style payoffs; 10.2% blended hold is a consumer choice, not a trick, and it funds the taxes states now budget around ($18.1B in 2025). Mix keeps shifting toward same-game parlays as live betting deepens.", bear: "A product holding 20-30% marketed as sports knowledge invites the sequel to the UK's affordability reckoning: advertising bans, stake limits, or federal action. The industry's best margin is also its best evidence for critics, and prediction markets price the same events at a fraction of the vig." },
      { topic: "Macau: value trap or coiled spring?", bull: "GGR at ~85% of 2019 with a structurally richer premium-mass mix, junket risk purged, concessions renewed to 2033, and 6 licenses defending a market Beijing wants stable: mid-single-digit growth on today's multiples is being paid to wait.", bear: "Every Macau thesis is a China policy trade in a casino costume: capital controls, anti-corruption cycles, and Beijing's discretion over visas can vaporize a quarter's GGR without warning, and the 2014 crackdown (revenue down more than a third) is the template, not the tail." }
    ],
    cycle: {
      where: "US online is exiting land-grab into harvest (promos fading, hold rising, taxes rising to meet it); Macau is mid-recovery at ~85% of 2019; land-based US is late-cycle steady; prediction markets are in their 1999 moment: explosive, unpriced, and legally unresolved.",
      drivers: "State legalization calendar, consumer discretionary health, China policy toward Macau, parlay adoption, and the CFTC-versus-states jurisdiction fight.",
      leads: [
        "Macau monthly GGR (DICJ, first business day: free, the sector's fastest macro read)",
        "State monthly revenue reports (NJ DGE, Nevada GCB, Illinois: free, handle and hold by operator)",
        "AGA Commercial Gaming Revenue Tracker (free, quarterly US aggregate)",
        "Legislative trackers for tax bills and new-state launches (free via state records)",
        "Prediction-market volumes (Kalshi publishes contract data: free)"
      ]
    },
    exposure: [
      { vehicle: "Flutter (FanDuel) / DraftKings", note: "The duopoly: US online growth with the margin-harvest thesis attached" },
      { vehicle: "Macau complex (Sands, Galaxy, Wynn Macau)", note: "The recovery-and-China-sentiment sleeve; premium-mass mix upgrade" },
      { vehicle: "B2B suppliers (Evolution, Aristocrat, Light & Wonder)", note: "Picks and shovels with 60%+ margins at the top of the class" },
      { vehicle: "Casino REITs (VICI, GLPI)", note: "The real estate annuity: triple-net rent from the industry, none of the hold risk" },
      { vehicle: "Sector ETFs (BETZ, BJK)", note: "Basket exposure across operators, suppliers, and international names" }
    ],
    catalysts: [
      { when: "Monthly (1st business day)", what: "Macau GGR print: the tape for the entire Asia complex" },
      { when: "Quarterly earnings", what: "Hold %, promo intensity, and state-level profitability disclosures" },
      { when: "Sept-Feb (NFL season)", what: "Peak handle, peak CAC war, and the parlay mix data that sets full-year hold" },
      { when: "State legislative sessions (spring)", what: "Tax-hike bills, iGaming expansion, California/Texas legalization noise, event-contract rulings" }
    ],
    data: [
      { series: "Macau monthly gross gaming revenue", source: "DICJ (dicj.gov.mo, free)", why: "Fastest, cleanest read on Asia gaming and China consumer" },
      { series: "US state gaming revenue reports", source: "NJ DGE, Nevada GCB, state regulators (free)", why: "Operator-level handle, GGR, and hold: the primary US tape" },
      { series: "AGA Commercial Gaming Revenue Tracker", source: "americangaming.org (free)", why: "Aggregated US GGR by vertical, quarterly" },
      { series: "UKGC industry statistics", source: "gamblingcommission.gov.uk (free)", why: "The mature-market template for regulation and player-protection economics" },
      { series: "Company filings (DKNG, Flutter 10-K/10-Q)", source: "SEC EDGAR (free)", why: "Handle, hold, promo, and state-cohort disclosures straight from the source" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Gambling is less cyclical than feared (lotteries are counter-cyclical, regionals resilient) but destination resorts and VIP get hit; online holds up on small recreational stakes. Rotate toward lottery-linked suppliers and REITs." },
      { regime: "Tax/regulatory shock", behavior: "A big-state tax hike or ad ban reprices every online operator's terminal margin: cut gross exposure first, ask questions later, then buy the duopoly (scale absorbs taxes better than challengers)." },
      { regime: "China tightening", behavior: "Macau names gap down on visa or capital-control headlines regardless of fundamentals; the 2014 template says wait for policy inflection, not valuation support." },
      { regime: "Risk-on consumer boom", behavior: "Handle, hold, and multiples expand together; online operators are the high-beta expression, suppliers lag but follow on content demand." }
    ]
  },

  players: [
    { name: "Flutter Entertainment (FanDuel)", role: "US online #1", country: "US", real: true, note: "FanDuel leads US online GGR on parlay mix and hold; Flutter runs bet365-class brands globally" },
    { name: "DraftKings", role: "US online co-duopolist", country: "US", real: true, note: "The pure-play US growth proxy; duopoly ~68% of online handle with FanDuel (2026)" },
    { name: "Entain / BetMGM", role: "Challenger with a resort partner", country: "GB", real: true, note: "BetMGM (JV with MGM) holds ~10% of US handle; Entain runs Ladbrokes/bwin globally" },
    { name: "Las Vegas Sands", role: "Asia integrated-resort leader", country: "US", real: true, note: "Macao and Marina Bay Sands Singapore: the premium-mass model at scale" },
    { name: "Galaxy Entertainment", role: "Macau concessionaire", country: "HK", real: true, note: "One of 6 Macau licenses; the local heavyweight of the $30.8B (2025) market" },
    { name: "Evolution", role: "Live-casino B2B monopoly-adjacent", country: "SE", real: true, note: "Streams live dealers to hundreds of operators; EBITDA margins above 60%" },
    { name: "Aristocrat Leisure", role: "Slot content leader", country: "AU", real: true, note: "Top of the global slot floor plus social-casino digital arm" },
    { name: "Kalshi", role: "Prediction-market challenger", country: "US", real: true, note: "CFTC-regulated event contracts on sports; won 2025 injunctions against state regulators" }
  ],

  geography: [
    { country: "US", role: "Largest market, fastest growth", note: "$78.7B commercial GGR 2025 (record); nearly 40 sports betting jurisdictions, only 7 with iGaming" },
    { country: "MO", role: "Macau: Asia's casino capital", note: "$30.8B GGR 2025, ~85% recovered; 6 concessions, premium-mass replacing junket VIP" },
    { country: "GB", role: "Mature online template", note: "The regulatory bellwether: affordability checks and ad limits preview US debates" },
    { country: "SG", role: "The duopoly model", note: "2 licenses (Marina Bay Sands, RWS): the highest-quality casino economics anywhere" },
    { country: "AU", role: "Highest per-capita losses", note: "Pokies in every pub; Aristocrat's home base and a cautionary regulatory tale" },
    { country: "MT", role: "Offshore licensing hub", note: "Malta licenses much of Europe's online industry; the EU's iGaming back office" }
  ],

  cycles: [
    { year: 1978, title: "Atlantic City opens", kind: "boom", text: "The first legal US casinos outside Nevada trigger a 40-year state-by-state expansion. Lesson: in gambling, supply is legislated, and each legalization wave mints fortunes for the early licensees." },
    { year: 2002, title: "Macau liberalization", kind: "boom", text: "Ending the 40-year monopoly, Macau licenses US operators; junket-financed VIP baccarat drives GGR past Las Vegas within 5 years. Lesson: a license into Chinese demand was the single most valuable piece of paper in consumer history." },
    { year: 2011, title: "Online poker's Black Friday", kind: "bust", text: "The DOJ indicts the offshore poker giants, seizing domains and stranding player funds. Lesson: operating ahead of the law is a business model until, abruptly, it is a criminal indictment." },
    { year: 2014, title: "The Macau crackdown", kind: "bust", text: "China's anti-corruption campaign guts junket VIP; GGR falls by more than a third over 2 years. Lesson: revenue that depends on another government's tolerance is rented, not owned." },
    { year: 2018, title: "PASPA falls", kind: "shift", text: "Murphy v. NCAA hands sports betting to the states; within 7 years, $166.94B of legal handle and a 2-brand duopoly. Lesson: when prohibition ends, the spoils go to whoever already owns the customer database (daily fantasy was the trojan horse)." }
  ],

  risks: [
    { name: "State tax escalation", severity: 4, likelihood: 4, transmission: "Budget gaps -> statehouses re-rate GGR taxes (Illinois to 40% + per-bet fees, 2025) -> terminal margins compress -> online operator multiples de-rate sector-wide." },
    { name: "Problem-gambling political backlash", severity: 4, likelihood: 3, transmission: "Rising addiction data + parlay-hold headlines -> advertising bans, stake and deposit limits (UK template) -> handle and hold fall together -> growth thesis breaks." },
    { name: "Prediction-market disruption", severity: 3, likelihood: 4, transmission: "CFTC-regulated event contracts scale nationally -> exchange pricing undercuts 10%+ sportsbook holds -> margin pool shrinks and state tax bases erode -> legal chaos repricing both models." },
    { name: "China policy shock on Macau", severity: 4, likelihood: 2, transmission: "Capital controls or visa tightening -> GGR gaps down (2014: down more than a third) -> concession economics and $30B of annual revenue hostage to policy." },
    { name: "Illegal and gray-market leakage", severity: 3, likelihood: 3, transmission: "High taxes + friction -> players drift to offshore books and sweepstakes casinos -> legal GGR undershoots, states blame operators -> compliance costs rise while the channel shrinks." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Casinos, sportsbooks, and lotteries all sell the same thing: games where the odds favor the house by a built-in margin called the hold. Players lost about $644B worldwide in 2025. The business is not beating gamblers; it is running enough volume that the math edge (5-10% on slots, ~10% on US sports bets, 40%+ on lottery tickets) shows up as reliably as rent."] },
    L2: { title: "Intermediate", text: ["Revenue = handle x hold, and the industry splits into online operators (marketing machines: FanDuel and DraftKings hold ~68% of US online handle), land-based resorts (real estate plus entertainment; Macau did $30.8B in 2025), lotteries (state monopolies), and B2B suppliers (the best margins: Evolution runs 60%+ EBITDA). Since the US legalized sports betting in 2018, handle has compounded to $166.94B (2025) and parlays doubled the hold to 10.2%."] },
    L3: { title: "Advanced", text: ["Model the 3 P&Ls separately: online on the GGR-to-NGR-to-EBITDA bridge (promo fade and tax rates decide terminal margin), resorts on EV/EBITDAR with concession and rent risk, suppliers on contract-locked royalties. The key US dynamic is margin harvest: promo intensity fading in mature states while parlay mix lifts hold, offset by tax creep (NY 51%, IL up to 40% plus per-bet fees). Macau is a mix-upgrade story: ~85% of 2019 GGR but premium-mass economics beat the junket VIP it replaced."] },
    L4: { title: "Expert", text: ["Trade the monthly tapes (Macau DICJ, state revenue reports) against the legislative calendar. Live debates: whether duopoly share survives prediction markets pricing sports at exchange vig under CFTC cover (Kalshi's 2025 injunctions against state regulators opened a federal flank), whether 10.2% blended hold is durable consumer preference or the trigger for a UK-style affordability reckoning, and whether Macau's discount is China risk fairly priced or a value trap. Watch cross-sell to iGaming: 7 states, highest margins, stalled expansion."] },
    L5: { title: "Institutional", text: ["Allocator's frame: gambling offers annuity economics wrapped in headline risk. Core the toll collectors (B2B content, lottery contracts, casino REITs), own the scaled duopoly as the harvest thesis matures, and treat Macau as a China-policy trade with a casino attached. Size everything to regulatory regimes, not cycles: the state giveth the license, taketh 51% at the top, and occasionally competes with you through its own lottery. The unpriced tail on both sides is prediction markets: either the margin pool's disruptor or online gambling's federal Trojan horse."] }
  },

  quiz: [
    { q: "The industry's core revenue equation is:", choices: ["Visitors x ticket price", "Handle x hold: total wagered times the house's built-in margin", "Deposits minus withdrawals", "Tables x hours open"], answer: 1, explain: "Everything from slots to sportsbooks reduces to volume times edge; US sportsbooks held 10.2% of $166.94B of handle in 2025." },
    { q: "US sports betting in 2025 set records of roughly:", choices: ["$78.7B GGR on $644B handle", "$16.96B GGR on $166.94B handle", "$1B GGR on $10B handle", "$30.8B GGR on $100B handle"], answer: 1, explain: "AGA data: a 22.8% GGR jump on 11% handle growth, because parlay mix lifted hold to 10.2%. ($78.7B was total US commercial GGR; $30.8B was Macau.)" },
    { q: "The FanDuel/DraftKings duopoly rests mostly on:", choices: ["Patents on odds", "Exclusive state licenses", "Database scale, parlay product, and promo firepower from the daily-fantasy era", "Lower taxes than rivals"], answer: 2, explain: "Licenses are open to many; the ~68% handle share comes from customer data, product depth, and the ability to outspend challengers through every launch." },
    { q: "Same-game parlays matter because they:", choices: ["Reduce operator risk to zero", "Carry 20-30% theoretical holds vs ~4.5% on straight bets, doubling blended margins", "Are tax-exempt", "Only sharps play them"], answer: 1, explain: "Parlay adoption is why US hold reached 10.2% in 2025: the margin engine, and the regulatory lightning rod." },
    { q: "Macau's 2025 recovery is best described as:", choices: ["Full recovery past 2013's peak", "About 85% of 2019 GGR ($30.8B) with a richer premium-mass mix replacing junket VIP", "Still closed to visitors", "Overtaken by Las Vegas"], answer: 1, explain: "Volume is below peak but the earnings mix improved: junkets were purged after 2021 and direct premium-mass play carries better margins." },
    { q: "Prediction markets threaten sportsbooks because they:", choices: ["Offer better graphics", "Are illegal everywhere", "Price events at exchange-style vig under CFTC oversight, bypassing state licensing and undercutting 10%+ holds", "Ban parlays"], answer: 2, explain: "Kalshi's 2025 court wins against state cease-and-desist orders opened a federal channel that competes on price with the industry's fattest margins." },
    { q: "The best margins in the sector belong to:", choices: ["Las Vegas resorts", "B2B suppliers like Evolution (60%+ EBITDA), selling content on revenue share", "Sportsbooks in New York", "Lottery retailers"], answer: 1, explain: "Picks and shovels win: suppliers take a cut of GGR without CAC wars, 51% taxes, or resort capex." },
    { q: "The sector's most repeatable lesson from history (Black Friday 2011, Macau 2014, Illinois 2025) is:", choices: ["Technology disrupts slowly", "Consumers set prices", "The state is the real counterparty: legal status, taxes, and tolerance can reprice the business overnight", "Real estate always appreciates"], answer: 2, explain: "Gambling supply is legislated. Every major boom and bust in the industry started with a government decision, not a consumer one." }
  ],

  sources: [
    { name: "AGA: US commercial gaming record 2025 ($78.7B GGR, $18.1B taxes)", url: "https://www.americangaming.org/commercial-gaming-revenue-hits-78-7-billion-in-2025-driving-record-18-1-billion-in-gaming-taxes-nationwide/", feeds: "US GGR, sports betting, taxes" },
    { name: "Gambling Insider statistics roundup (global $643.7B, 2025)", url: "https://www.gamblinginsider.com/in-depth/114456/gambling-statistics", feeds: "global market size, online share" },
    { name: "Yogonet: Macau 2025 GGR $30.9B, highest since pandemic", url: "https://www.yogonet.com/international/news/2026/01/05/116968-macau-casino-revenue-hits-309-billion-in-2025-highest-since-pandemic", feeds: "Macau GGR, recovery" },
    { name: "Casino Reports: US sports betting market share database", url: "https://www.casinoreports.com/news/us-sports-betting-market-stats-database/", feeds: "duopoly share, hold, parlay mix" }
  ]
};
