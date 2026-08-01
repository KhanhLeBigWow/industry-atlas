/* Industry Atlas - GAMING (full module, research-backed)
 * Anchors: global games market ~$188.8B in 2025, mobile ~$103B of it, 3.6B
 * players (Newzoo Global Games Market Report, 2025); GTA VI delayed to
 * Nov 19, 2026 (Take-Two, announced Nov 2025); Microsoft closed the $69B
 * Activision Blizzard deal Oct 2023, Game Pass ~30M subs vs an internal
 * ~77M projection (WSJ/press, 2025-26); Roblox Q1 2026: 132M DAUs, $1.7B
 * bookings, $1.5B paid to creators in 2025 (company shareholder letter);
 * Steam concurrent record ~42.0M (Jan 2026, SteamDB). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["gaming"] = {
  meta: {
    id: "gaming", name: "Gaming", sector: "tmt", status: "full",
    tagline: "The largest entertainment medium on Earth, monetized by the hour: a hit-driven business that quietly became a recurring-revenue machine.",
    marketSize: { value: 189, unit: "$B", asOf: 2025, note: "Newzoo estimate ($188.8B): mobile ~$103B, console ~$46B, PC ~$40B; larger than global box office and recorded music combined" },
    cagr: { value: 4, range: [3, 6], horizon: "2025-2030" },
    maturity: "mature-growth", cyclicality: 2, capitalIntensity: 2, regulation: 3, disruption: 4
  },
  newsQuery: '("video game industry" OR "Grand Theft Auto" OR Roblox OR "Game Pass" OR "Take-Two" OR Nintendo OR "Epic Games" OR Steam)',

  overview: {
    definition: "The gaming industry makes and monetizes interactive entertainment: mobile, console, and PC games plus the engines, platforms, storefronts, and creator economies around them. At ~$189B of 2025 consumer spend (Newzoo) and roughly 3.6B players, it is bigger than the global film and recorded-music businesses combined, yet it trades attention, not tickets.",
    howItWorks: [
      "The structure is a barbell: a handful of platform gatekeepers (Apple and Google app stores, Sony, Microsoft, Nintendo, Valve's Steam) take 12% to 30% of every dollar that crosses their storefronts, while thousands of studios compete for the hits that flow through them. Between the two sit the publishers (Tencent, EA, Take-Two, Activision under Microsoft), which fund development, own the IP, and run the live-service operations that keep a game earning for a decade.",
      "The business model flipped in the 2010s from selling boxes to renting attention. Free-to-play (F2P) games give the product away and monetize a thin slice of players: roughly 5% to 10% of users generate most F2P revenue, through in-game purchases, battle passes, and cosmetics. The result is subscription-like economics without a subscription: Fortnite, Roblox, and Honor of Kings book revenue continuously, and the industry's profit pool migrated from launch weekends to live operations.",
      "Mobile is more than half the market (~$103B of ~$189B in 2025, per Newzoo), which makes Apple and Google the industry's most profitable participants despite publishing nothing: the 30% platform take on in-app purchases is the single largest toll in entertainment, and the antitrust fights around it (Epic v. Apple, EU DMA) are the industry's most consequential regulatory front. Console is the premium tier (~$46B), PC the open one (~$40B), where Valve's Steam, with concurrent users peaking around 42M in January 2026, functions as a de facto monopoly storefront that no regulator has touched.",
      "Costs are hit-driven and escalating: AAA budgets now run $200M to $400M+ and take 5 to 7 years, which concentrates the industry around franchises that cannot be allowed to fail. GTA VI, delayed twice to November 19, 2026, is expected to be the largest entertainment launch in history: its predecessor grossed over $1B in 3 days and has sold for 12 years. The counterweight is user-generated content: Roblox pays creators to build its catalog ($1.5B paid out in 2025) and posted 132M daily active users in Q1 2026, an existence proof that the cheapest content pipeline is your own audience."
    ],
    history: [
      { era: "1972-1983", title: "Arcade to crash", text: "Atari builds the first boom; a flood of shovelware and channel stuffing produces the 1983 crash, wiping out ~97% of US industry revenue in 2 years." },
      { era: "1985-2000", title: "Console dynasties", text: "Nintendo rebuilds the market on quality control and licensed cartridges; Sony's PlayStation (1994) turns games into mainstream adult entertainment; the platform-royalty model is born." },
      { era: "2000-2012", title: "Online and the App Store", text: "Broadband enables Xbox Live, World of Warcraft's subscriptions, and Steam's digital storefront; the 2008 App Store puts a console in every pocket and free-to-play rewrites monetization." },
      { era: "2012-2020", title: "Live service and F2P conquest", text: "League of Legends, then Fortnite's battle pass (2018), prove games-as-a-service out-earns games-in-a-box; mobile passes console; Tencent becomes the world's largest games company." },
      { era: "2020-present", title: "Boom, hangover, consolidation", text: "COVID pulls forward years of demand; the correction brings 30,000+ industry layoffs (2022-2024); Microsoft closes the $69B Activision deal (Oct 2023); GTA VI's Nov 2026 date becomes the sector's macro event." }
    ],
    trends: [
      { title: "Attention is the constraint", direction: "shift", text: "Player counts still grow (~3.6B) but hours are finite: evergreen titles (Fortnite, Roblox, GTA Online) absorb time that used to rotate across new releases, making launches into share-of-attention battles." },
      { title: "UGC platforms compound", direction: "up", text: "Roblox's flywheel (132M DAUs, $1.7B quarterly bookings, creator payouts up 63% in 2025 to $1.5B) shows audience-built catalogs scaling faster than studio pipelines." },
      { title: "Subscription disappointment", direction: "down", text: "Game Pass stalled near 30M subscribers against Microsoft's internal ~77M-by-2026 projection; a 50% price hike in Oct 2025 triggered cancellations: the Netflix-of-games thesis is wounded." },
      { title: "Platform-fee erosion", direction: "shift", text: "Epic v. Apple rulings, the EU's DMA, and alternative app stores chip at the 30% toll; every point of take-rate relief flows straight to publisher gross margin." },
      { title: "AI in the pipeline", direction: "up", text: "Generative tools compress art, QA, and localization costs on $300M budgets; the labs' open question is whether AI deflates AAA cost curves or floods the market with content and compresses pricing." }
    ],
    outlook: "Low-single-digit market growth with a violent internal mix shift: mobile and UGC platforms compound, premium console rides a GTA VI supercycle into 2027, and subscription economics get relitigated after Game Pass undershot. The structural questions are take rates (regulation is the publishers' friend), AAA cost inflation versus AI deflation, and whether the next Roblox-scale platform emerges from user-generated content rather than a studio. Attention, not spending, is the scarce resource."
  },

  structure: {
    suppliers: [
      { name: "Engine makers (Epic's Unreal, Unity)", note: "The industry's operating systems; Unreal takes 5% royalties, Unity charges per-seat" },
      { name: "Chipmakers (NVIDIA, AMD, custom silicon)", note: "GPUs set the visual ceiling; console makers buy semi-custom AMD" },
      { name: "Development studios (thousands, mostly small)", note: "The creative labor pool; work-for-hire to owned-IP spectrum" },
      { name: "Cloud & tooling (AWS/Azure, middleware, QA/localization)", note: "Live-service games are distributed systems with art budgets" }
    ],
    producers: [
      { name: "Tencent", note: "World's largest games company: Honor of Kings, Riot, stakes across the industry" },
      { name: "Microsoft Gaming", note: "Xbox + $69B Activision Blizzard: Call of Duty, Game Pass, and a strategy in mid-reset" },
      { name: "Sony PlayStation / Nintendo", note: "The premium console duopoly of exclusive IP; Nintendo the most durable franchise machine in entertainment" },
      { name: "Take-Two, EA, NetEase, and the publisher tier", note: "Franchise owners; Take-Two's GTA VI (Nov 2026) is the sector's single biggest asset" }
    ],
    distributors: [
      { name: "Apple App Store / Google Play", note: "The mobile toll booths: up to 30% of ~$103B mobile spend" },
      { name: "Steam (Valve)", note: "PC's de facto monopoly storefront: ~42M concurrent users at the Jan 2026 peak" },
      { name: "Console storefronts (PSN, Xbox, eShop)", note: "Closed gardens with 30% standard cuts and first-party leverage" }
    ],
    customers: [
      { name: "~3.6B players (Newzoo, 2025)", note: "From daily mobile puzzlers to 100-hour RPG buyers; a thin whale layer funds F2P" },
      { name: "Advertisers", note: "In-game ads monetize the non-paying 90%+ of mobile audiences" },
      { name: "Viewers (Twitch, YouTube)", note: "Watching is marketing: streamers are the industry's unpaid distribution arm" }
    ],
    regulators: [
      { name: "Competition authorities (FTC, CMA, EU)", note: "Cleared Microsoft-Activision with cloud remedies; now probing app-store tolls via the DMA" },
      { name: "China's NPPA", note: "License approvals and minor playtime caps: a single regulator that can freeze the world's largest market" },
      { name: "Consumer & gambling watchdogs", note: "Loot-box rules (Belgium bans, EU scrutiny) sit on the F2P monetization frontier" }
    ],
    capital: [
      { name: "Big-tech balance sheets", note: "Microsoft's $69B Activision deal reset the M&A ceiling; Tencent and Sony buy stakes constantly" },
      { name: "Public equity", note: "Pure plays (Take-Two, EA, Roblox, Nintendo) trade on pipeline hopes and live-service KPIs" },
      { name: "VC & private funding", note: "Studio seed rounds boomed in 2021, froze in the hangover; AI-native studios are the new thesis" }
    ]
  },

  valueChain: {
    intro: "From engine license to whale wallet. Value pools at the two ends: the platforms that tax every transaction and the evergreen IP that commands decade-long attention. The middle, work-for-hire development, earns the least for the most effort.",
    stages: [
      { id: "engines", name: "Engines & tools", what: "Unreal, Unity, middleware, AI tooling", players: "Epic Games, Unity", valueCapture: 3,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 5 },
        linksTo: ["saas", "ai"],
        deeper: "A duopoly renting picks and shovels: Unreal takes ~5% of gross revenue above a threshold, Unity sells seats and ads. Unity's 2023 runtime-fee revolt showed the limit of pricing power over your own developers; Epic's engine is also a Trojan horse for its store and Fortnite economy." },
      { id: "development", name: "Development", what: "Studios turning budgets into builds over 3-7 years", players: "Rockstar, FromSoftware, thousands of independents", valueCapture: 2,
        economics: { grossMargin: [10, 30], capitalIntensity: 2, concentration: 1 },
        linksTo: ["media", "ai"],
        deeper: "The industry's creative labor pool and its margin sink: AAA budgets of $200M to $400M+ concentrate risk, and the 2022-2024 layoff wave (30,000+ jobs) fell hardest here. Owning IP is the only escape from work-for-hire economics; AI tooling is the live cost-deflation experiment." },
      { id: "publishing", name: "Publishing & live ops", what: "Funding, IP ownership, marketing, live-service operation", players: "Tencent, Take-Two, EA, Microsoft/Activision", valueCapture: 4,
        economics: { grossMargin: [50, 70], capitalIntensity: 2, concentration: 3 },
        linksTo: ["media", "entertainment"],
        deeper: "Where hit risk gets pooled and franchises get milked: a GTA or Call of Duty earns for a decade past launch. The skill that matters now is live operations: seasonal content, events, and battle passes that turn a purchase into a habit. Bookings, not revenue, is the honest KPI (deferrals smooth the P&L)." },
      { id: "platforms", name: "Storefronts & platforms", what: "Distribution, payments, and the 12-30% toll", players: "Apple, Google, Valve, Sony, Microsoft, Nintendo", valueCapture: 5,
        economics: { grossMargin: [70, 90], capitalIntensity: 2, concentration: 5 },
        linksTo: ["payments", "ecommerce", "consumer-electronics"],
        deeper: "The industry's best economics belong to companies that make almost none of its content: app stores tax ~$103B of mobile spend at up to 30%, Steam taxes PC with ~42M peak concurrents and near-zero marginal cost. Epic v. Apple and the EU DMA are slowly prying the tolls open: every point conceded reprices publisher margins upward." },
      { id: "hardware", name: "Hardware", what: "Consoles, gaming PCs, handhelds, peripherals", players: "Sony, Nintendo, Microsoft, NVIDIA/AMD ecosystem", valueCapture: 2,
        economics: { grossMargin: [0, 20], capitalIntensity: 4, concentration: 4 },
        linksTo: ["semiconductors", "consumer-electronics"],
        deeper: "Consoles are razors: sold near cost (sometimes below at launch) to build an installed base that pays 30% royalties for 8 years. Nintendo is the exception that proves the rule, profitably selling cheaper hardware wrapped around irreplaceable IP. The GPU boom made gaming NVIDIA's springboard, then its side business." },
      { id: "audience", name: "Audience economy", what: "UGC platforms, esports, streaming, creator payouts", players: "Roblox, Twitch, YouTube Gaming, esports leagues", valueCapture: 3,
        economics: { grossMargin: [20, 40], capitalIntensity: 2, concentration: 3 },
        linksTo: ["media", "sports"],
        deeper: "The audience became the supply chain: Roblox paid creators $1.5B in 2025 (up 63%) to build the content its 132M DAUs consume, and is raising US 18+ payout rates 42% in 2026 to court older users. Esports proved attention without proving economics; streaming proved watching games is itself a media category." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector in three P&L species. Platforms (Apple/Google/Valve/console makers): take-rate revenue on other people's content, 70%+ gross margins, capex-light: the closest thing entertainment has to exchange economics. Publishers: hit-driven revenue smoothed by live services; watch bookings (cash in the door) rather than revenue, because deferred recognition of in-game purchases makes the income statement lag the business by quarters. UGC platforms (Roblox): marketplace math, where bookings grow with engagement and creator payouts are the COGS that buys the catalog.",
      "The margin story is mix: a dollar of catalog or live-service revenue carries 70%+ incremental margin, a dollar of new AAA revenue arrives net of a $300M development sunk cost and a 30% platform toll. That is why franchises are hoarded, why GTA VI's timing moves Take-Two's multi-year earnings arc, and why every publisher is trying to convert buyers into recurring spenders. The failure mode is the opposite mix: rising budgets into a stalled subscription experiment, which is roughly the Xbox story since the $69B Activision close (Game Pass ~30M subs versus a ~77M internal target, 2,500+ layoffs, a 50% price hike that shed subscribers)."
    ],
    fingerprint: { grossMargin: 68, recurringRevenue: 65, capitalIntensity: 25, pricingPower: 50, cyclicality: 30, operatingLeverage: 80 },
    lines: [
      { label: "Bookings & deferred revenue", note: "The honest demand signal; revenue is bookings smoothed by accounting" },
      { label: "Live-service / recurrent spend", note: "In-game purchases and season passes: the margin engine (75%+ of big-publisher revenue)" },
      { label: "Full-game & catalog sales", note: "Launch spikes plus the long tail; catalog is nearly pure margin" },
      { label: "Platform & royalty take", note: "For platform owners: the 12-30% toll on third-party spend" },
      { label: "Creator payouts / dev costs", note: "Roblox's DevEx ($1.5B in 2025) or capitalized development: the content COGS" }
    ],
    unitEconomics: {
      unit: "per AAA franchise title (illustrative)",
      items: [
        { label: "Development + marketing", value: "$250M to $500M+", note: "5-7 years; GTA VI reportedly well above this range" },
        { label: "Platform toll", value: "12% to 30% of gross", note: "Steam/console/app store cut before the publisher sees a dollar" },
        { label: "Launch gross (top-10 hit)", value: "$1B+ possible", note: "GTA V cleared $1B in 3 days (2013); most titles never recoup" },
        { label: "Live-service tail", value: "50%+ of lifetime value", note: "GTA Online out-earned the campaign over 12 years" }
      ]
    }
  },

  kpiRefs: ["pay-take-rate", "saas-nrr"],
  kpiLocal: [
    {
      id: "gaming-bookings", name: "Bookings vs Revenue", industries: ["gaming"],
      definition: "Cash value of games, in-game items, and subscriptions sold in the period, before deferral into GAAP revenue.",
      formula: "Bookings = revenue + change in deferred revenue",
      interpretation: "Bookings lead revenue by quarters for live-service businesses; a widening gap signals accelerating in-game spend, a narrowing one signals decay hidden by deferrals. Roblox Q1 2026: $1.7B bookings vs $1.4B revenue.",
      healthy: "Bookings growth at or above revenue growth", warning: "Bookings decelerating while reported revenue still rises"
    },
    {
      id: "gaming-engagement", name: "DAU x Hours x Monetization", industries: ["gaming"],
      definition: "The live-service stack: daily active users, engagement hours, and average bookings per DAU.",
      formula: "Bookings = DAU x hours per DAU x monetization per hour",
      interpretation: "Decompose growth to find its quality: DAU growth with flat monetization is land-grab; monetization growth on flat DAU is harvest. Roblox's Q1 2026 miss on DAUs (132M) and hours mattered more than its bookings beat.",
      healthy: "All three factors positive; payer conversion rising", warning: "Monetization squeezing a shrinking or aging user base"
    }
  ],

  health: {
    intro: "Publisher health is franchise depth and live-service retention; platform health is take-rate durability; everyone's health is the gap between content cost inflation and audience attention.",
    pillars: [
      { name: "Live-service engagement", weight: 25, metrics: "DAU/MAU trends, hours, retention cohorts, recurrent spend share", healthy: "Stable or rising engagement on evergreen titles", warning: "Whale fatigue: monetization rising as users decline" },
      { name: "Pipeline & franchise depth", weight: 20, metrics: "Owned IP count, release slate, franchise age spread", healthy: "3+ durable franchises, staggered slate", warning: "One aging franchise carrying the P&L" },
      { name: "Monetization quality", weight: 20, metrics: "Bookings growth, payer conversion, ARPPU vs price fatigue, loot-box exposure", healthy: "Broad-based payer growth", warning: "Regulatory-fragile mechanics driving marginal revenue" },
      { name: "Platform dependence", weight: 15, metrics: "Share of bookings paying 30% tolls, direct-to-consumer mix", healthy: "Growing D2C and PC mix; toll relief captured", warning: "Mobile-only revenue fully exposed to app-store terms" },
      { name: "Cost discipline & balance sheet", weight: 20, metrics: "Dev cost per title vs revenue per title, capitalized dev, net cash", healthy: "Net cash, budgets scaling slower than franchise revenue", warning: "Budget inflation outrunning hits (the 2022-2024 layoff template)" }
    ],
    scoringNote: "Gaming punishes the middle: pure platforms and evergreen-IP owners compound, while subscale publishers renting attention between hits absorb all the industry's volatility."
  },

  valuation: {
    intro: "The market prices franchises like annuities and pipelines like lottery tickets: live-service mix and IP durability set the multiple, launch calendars set the timing.",
    methods: [
      { name: "EV / EBITDA (bookings-adjusted)", use: "Established publishers (EA, Take-Two, Ubisoft class)", avoid: "Years distorted by launch timing; normalize across a slate cycle", strengths: "Comparable, captures live-service margin", weaknesses: "Capitalized dev costs flatter EBITDA", range: { low: 12, high: 20, asOf: 2025, note: "franchise depth and recurrent-spend mix set the premium; Take-Two priced GTA VI years early" } },
      { name: "EV / Bookings", use: "UGC and high-growth platforms (Roblox class) pre-margin maturity", avoid: "Mature publishers where margin is knowable", strengths: "Cuts through deferrals and payout accounting", weaknesses: "Assumes margins arrive eventually", range: { low: 4, high: 9, asOf: 2025, note: "engagement quality (hours, payer conversion) drives the spread" } },
      { name: "P/E with franchise haircuts", use: "Nintendo-class IP owners with net-cash balance sheets", avoid: "Hit-dependent names mid-drought", strengths: "Simple, respects earnings durability", weaknesses: "Misses cycle position around console transitions", range: { low: 15, high: 30, asOf: 2025, note: "irreplaceable IP earns the top of the range" } },
      { name: "Sum-of-the-parts / IP appraisal", use: "Conglomerates (Tencent games inside Tencent; Xbox inside Microsoft)", avoid: "Standalone pure plays", strengths: "Surfaces hidden franchise value and stake portfolios", weaknesses: "Parts rarely get separated; conglomerate discounts persist", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: Activision fetched $69B, ~7x its revenue" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a publisher quickly: through-cycle EBITDA (average across a slate, not a launch year) times a franchise-quality multiple, plus the net cash most of the sector carries.",
      inputs: [
        { id: "vc-ebitda", label: "Normalized EBITDA ($B)", min: 0.2, max: 10, step: 0.2, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 8, max: 26, step: 0.5, value: 15, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B, negative = net cash)", min: -15, max: 20, step: 1, value: -3, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays gaming as an attention oligopoly wearing a hits business: core the toll collectors and evergreen-IP compounders, trade the publishers around their launch calendars, and treat UGC platforms as the sector's growth optionality. The 2026-2027 setup is unusually event-driven: GTA VI (Nov 19, 2026) is the largest scheduled catalyst in entertainment history and its gravity distorts every other publisher's slate.",
    debates: [
      { topic: "Is subscription the future or a failed experiment?", bull: "Game Pass at ~30M subs is early, not broken: catalog access plus cloud streaming is how the next billion players onboard, and Microsoft can fund a decade of losses to own the Netflix position when it matures.", bear: "Games are not movies: one live-service title absorbs 100+ hours, so all-you-can-eat access is worth less, not more. The evidence is in: ~30M subs versus a ~77M internal projection, a 50% price hike that shed subscribers, and Microsoft pivoting its exclusives to rival platforms. The bundle broke." },
      { topic: "GTA VI: tide that lifts all boats or attention black hole?", bull: "The launch reprices the whole category: new console and GPU sales, lapsed players returning, a $100+ pricing umbrella other publishers slot under, and years of GTA Online recurrent spend for Take-Two.", bear: "Attention is zero-sum in the launch window: every publisher is already steering slates away from Nov 2026, and titles that collide with it get vaporized. One more delay (there have been 2) craters the sector's most crowded long." },
      { topic: "Does AI deflate AAA costs or destroy content scarcity?", bull: "Generative tools attack the actual problem, $300M+ budgets and 6-year cycles: faster art, QA, and localization mean more shots on goal per dollar and fatter margins for IP owners who ship.", bear: "When everyone's costs fall, content floods and scarcity value migrates to distribution and brands: platforms and Nintendo-class IP win again, mid-tier publishers get commoditized, and UGC platforms full of AI-assisted creators eat the discovery layer." }
    ],
    cycle: {
      where: "Exiting the post-COVID hangover (30,000+ layoffs, 2022-2024) and entering a content supercycle: Switch 2 momentum, a rebuilt release slate, and GTA VI in Nov 2026 as the scheduled crescendo. Mobile growth has matured to low single digits; UGC engagement is the structural grower.",
      drivers: "Release slate density, engagement hours per capita, platform take-rate litigation, console hardware cycles, and China license approvals.",
      leads: [
        "Steam concurrent-user records (steamdb.info, free, real time)",
        "Roblox monthly/quarterly DAU, hours, and bookings disclosures (free)",
        "Take-Two commentary on GTA VI timing: the sector's master clock",
        "App-store policy and court rulings (Epic v. Apple docket, EU DMA actions)",
        "Newzoo's free annual Global Games Market Report for market-size revisions"
      ]
    },
    exposure: [
      { vehicle: "Take-Two", note: "The GTA VI event trade wrapped in an evergreen catalog; timing risk is the whole position" },
      { vehicle: "Nintendo", note: "The IP annuity: hardware cycles come and go, Mario and Zelda compound" },
      { vehicle: "Roblox", note: "UGC growth optionality: engagement flywheel vs monetization-per-hour skeptics" },
      { vehicle: "Tencent / NetEase (ADRs)", note: "The China games oligopoly at conglomerate discounts, with NPPA regulatory beta" },
      { vehicle: "Platform proxies (Microsoft, Apple, Sony)", note: "The toll collectors: gaming exposure diluted inside bigger businesses" }
    ],
    catalysts: [
      { when: "Nov 19, 2026", what: "GTA VI launch: the largest entertainment release ever scheduled; any slip reprices the sector" },
      { when: "Quarterly earnings", what: "Bookings, DAU/engagement, and recurrent-spend mix: the live-service scoreboard" },
      { when: "Court and regulatory dates", what: "App-store take-rate rulings (Epic v. Apple remedies, EU DMA enforcement) reprice mobile margins" },
      { when: "June (Summer Game Fest) and console showcases", what: "Slate reveals set 18-month expectations; delays land here too" }
    ],
    data: [
      { series: "Steam concurrent users and top-sellers", source: "steamdb.info / Valve (free)", why: "Real-time PC demand tape; the Jan 2026 record was ~42M" },
      { series: "Roblox shareholder letters (DAU, hours, bookings, DevEx)", source: "ir.roblox.com (free)", why: "The cleanest public window into UGC economics" },
      { series: "Newzoo Global Games Market Report (free edition)", source: "newzoo.com (free summary)", why: "The market-size and segment-mix benchmark everyone quotes" },
      { series: "Company monthly/quarterly deliveries of recurrent spend", source: "publisher IR decks (free)", why: "Live-service share is the margin-mix signal" },
      { series: "Epic v. Apple docket and EU DMA decisions", source: "courtlistener.com / ec.europa.eu (free)", why: "Take-rate litigation is the biggest hidden earnings lever" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Historically resilient: cost-per-hour of fun beats most entertainment, and F2P converts squeezed wallets into engagement. Watch whale spend and ad-funded mobile, which do wobble." },
      { regime: "Risk-on / rate cuts", behavior: "Growth multiples on UGC and pipeline stories expand fastest; M&A reopens (the Activision playbook) with big tech and Tencent as natural buyers." },
      { regime: "Regulatory squeeze", behavior: "Take-rate relief is a publisher tailwind dressed as tech-lash; loot-box or minor-protection rules are the opposite: check China NPPA and EU consumer dockets before touching F2P-heavy names." },
      { regime: "Launch-window congestion", behavior: "Around mega-launches (GTA VI), fade the collateral: mid-tier titles sharing the window underperform, hardware and accessory chains overperform." }
    ]
  },

  players: [
    { name: "Tencent", role: "The largest games company on Earth", country: "CN", real: true, note: "Honor of Kings, Riot (League, Valorant), and minority stakes across the Western industry" },
    { name: "Microsoft Gaming", role: "Consolidator in mid-reset", country: "US", real: true, note: "$69B Activision close (2023); Game Pass ~30M subs vs ~77M target; strategy pivoting multiplatform" },
    { name: "Sony PlayStation", role: "Premium console leader", country: "JP", real: true, note: "Installed-base economics plus prestige exclusives; live-service push has been bumpy" },
    { name: "Nintendo", role: "The IP annuity", country: "JP", real: true, note: "Mario, Zelda, Pokemon partnership: entertainment's most durable franchise portfolio, now with a film flywheel" },
    { name: "Take-Two / Rockstar", role: "Owner of the biggest launch in history", country: "US", real: true, note: "GTA VI due Nov 19, 2026 after 2 delays; GTA V grossed $1B in 3 days and sold for 12 years" },
    { name: "Valve", role: "PC's private toll bridge", country: "US", real: true, note: "Steam's ~42M peak concurrents (Jan 2026) monetized at ~30% with a skeleton headcount" },
    { name: "Epic Games", role: "Engine + Fortnite + the app-store insurgent", country: "US", real: true, note: "Unreal Engine royalties fund the litigation that is prying open Apple's 30%" },
    { name: "Roblox", role: "The UGC platform", country: "US", real: true, note: "132M DAUs, $1.7B bookings (Q1 2026); paid creators $1.5B in 2025, raising US 18+ rates 42% in 2026" }
  ],

  geography: [
    { country: "US", role: "Largest spending market + platform HQs", note: "~$37B mobile spend alone (2025); Microsoft, Take-Two, Valve, Epic, Roblox" },
    { country: "CN", role: "Largest player base, walled market", note: "Tencent and NetEase; NPPA license approvals and minor playtime caps gate everything" },
    { country: "JP", role: "Console and IP superpower", note: "Sony, Nintendo, Bandai Namco, FromSoftware: IP density per capita without rival" },
    { country: "KR", role: "PC/mobile powerhouse", note: "Nexon, Krafton, NCSoft; the original F2P and esports laboratory" },
    { country: "GB", role: "Development hub", note: "Rockstar North (GTA), Rare, and a deep studio bench feeding global publishers" },
    { country: "PL", role: "The AA-to-AAA challenger", note: "CD Projekt (Witcher, Cyberpunk) proved a national industry can be built on 2 franchises" }
  ],

  cycles: [
    { year: 1983, title: "The Atari crash", kind: "bust", text: "Shovelware, channel stuffing, and zero quality control collapse US industry revenue ~97% in 2 years; Nintendo rebuilds on licensed scarcity. Lesson: in content industries, unlimited supply is the death condition: curation is the moat." },
    { year: 2008, title: "The App Store and F2P", kind: "shift", text: "A console in every pocket plus free-to-play rewrites monetization; mobile grows from nothing to half the market in a decade. Lesson: the biggest platform shifts look like toys and arrive priced at zero." },
    { year: 2018, title: "Fortnite's battle pass", kind: "shift", text: "A free game out-earns the whole box-product industry with cosmetics and seasons; every publisher pivots to live service. Lesson: the business model IS the product: recurring attention beats launch revenue." },
    { year: 2021, title: "The COVID pull-forward", kind: "boom", text: "Lockdowns compress years of adoption into quarters; hiring and valuations follow the fake trendline; 30,000+ layoffs (2022-2024) unwind it. Lesson: never extrapolate a captive audience: demand pulled forward is demand borrowed." },
    { year: 2023, title: "The $69B Activision close", kind: "shift", text: "Microsoft wins the biggest tech-content deal ever after a global antitrust gauntlet, then Game Pass stalls near 30M subs and the strategy resets multiplatform. Lesson: buying content is easy; changing how customers want to pay for it is not." }
  ],

  risks: [
    { name: "Platform take-rate and policy shocks", severity: 3, likelihood: 4, transmission: "App-store rule changes or console-fee moves -> gross margin repricing across every publisher -> mobile-heavy names swing hardest in both directions." },
    { name: "Mega-launch slip (GTA VI as systemic event)", severity: 3, likelihood: 3, transmission: "A third delay -> Take-Two guidance reset -> sector sentiment, console/GPU demand forecasts, and adjacent slates all reprice with it." },
    { name: "Regulation of F2P monetization and minors", severity: 4, likelihood: 3, transmission: "Loot-box bans or China-style playtime caps spread -> whale revenue compresses -> F2P-dependent P&Ls lose their highest-margin dollars." },
    { name: "AAA cost inflation outrunning hits", severity: 4, likelihood: 3, transmission: "$400M budgets meet finite attention -> misses become existential -> consolidation, layoffs, and slate shrinkage (the 2022-2024 template repeats)." },
    { name: "AI content flood", severity: 3, likelihood: 3, transmission: "Generative tools collapse content costs -> discovery drowns and scarcity value migrates to platforms and mega-brands -> mid-tier publisher margins structurally compress." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Video games are the world's biggest entertainment business: about $189B in 2025, more than movies and music combined, played by roughly 3.6B people. Most of the money now comes not from selling games in boxes but from free games that charge small amounts inside (skins, season passes), and from the platforms (app stores, Steam, consoles) that take a cut of every purchase."] },
    L2: { title: "Intermediate", text: ["The economics barbell: platforms take 12% to 30% of every dollar at 70%+ margins, while studios absorb the hit risk of $200M+ productions. Mobile is more than half the market (~$103B), which makes Apple and Google the most profitable companies in gaming without making games. Free-to-play monetizes a thin whale layer (5% to 10% of players fund most F2P revenue), and live-service titles like Fortnite and GTA Online earn for a decade: launch day is the start of the business, not the payoff."] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: platforms on take-rate durability, publishers on bookings (not revenue: deferrals smooth the truth) and recurrent-spend mix, UGC platforms on the DAU x hours x monetization stack. Franchise depth sets the multiple; launch calendars set the timing. The live experiments to track: Game Pass's stalled subscription thesis (~30M subs vs a ~77M target), Roblox's creator-payout flywheel ($1.5B in 2025), and take-rate litigation that reprices mobile margins with every ruling."] },
    L4: { title: "Expert", text: ["Trade the event calendar: GTA VI (Nov 19, 2026) is the largest scheduled launch in entertainment history and distorts every slate around it: fade window-sharing mid-tier titles, own the complements. Underwrite AI's two-sided effect (budget deflation for IP owners vs content-flood commoditization for the mid-tier), watch China's NPPA as a binary regulator on the world's biggest player base, and treat Steam concurrents and Roblox engagement as the sector's free real-time demand tape."] },
    L5: { title: "Institutional", text: ["Allocator's frame: gaming is an attention oligopoly with exchange-like toll collectors at one end and irreplaceable IP annuities at the other: core those two, rent the hit-driven middle only around catalysts. Structural longs are engagement migration (UGC, emerging-market mobile) and take-rate erosion flowing to content owners; structural shorts are subscale publishers renting attention between hits. Every thesis reduces to one question: in a world of infinite content, who owns the scarce thing: the audience's habit, or the toll booth it passes through."] }
  },

  quiz: [
    { q: "The global games market in 2025 was roughly:", choices: ["$50B, smaller than music", "$189B: bigger than global box office and recorded music combined (Newzoo)", "$1T", "$20B"], answer: 1, explain: "Newzoo pegged 2025 at ~$188.8B across ~3.6B players: the largest entertainment medium, with mobile ~$103B of it." },
    { q: "Free-to-play games make most of their money from:", choices: ["Advertising to every player equally", "A thin slice of players: roughly 5% to 10% of users generate most F2P revenue", "Selling player data", "Hardware bundles"], answer: 1, explain: "Whale economics: the product is free for the many and monetized deeply by the few, via in-game purchases and passes." },
    { q: "Apple and Google matter to gaming because they:", choices: ["Publish the biggest games", "Tax up to 30% of the ~$103B mobile market as storefront owners", "Make consoles", "Own Steam"], answer: 1, explain: "The app-store toll is the largest single cut in entertainment: which is why Epic v. Apple and the EU DMA are the sector's key legal fronts." },
    { q: "GTA VI is significant because:", choices: ["It launches a new console", "It is expected to be the largest entertainment launch ever: due Nov 19, 2026 after 2 delays", "It is free-to-play", "It ends the GTA franchise"], answer: 1, explain: "GTA V grossed $1B in 3 days and earned for 12 years via GTA Online; the sequel's date moves the whole sector's calendar." },
    { q: "Microsoft's $69B Activision acquisition has so far:", choices: ["Tripled Game Pass subscribers", "Undershot: Game Pass stalled near 30M subs vs a ~77M internal projection, with layoffs and a price hike", "Been blocked by regulators", "Made Xbox the console leader"], answer: 1, explain: "The biggest gaming deal ever closed in Oct 2023; the subscription thesis it was built on has not yet delivered." },
    { q: "Roblox's core model is:", choices: ["Selling AAA games", "Paying its own users to build content: $1.5B in creator payouts in 2025 against 132M DAUs", "Subscription only", "Hardware sales"], answer: 1, explain: "UGC turns the audience into the supply chain: creator payouts are the COGS that buys an ever-growing catalog." },
    { q: "For live-service companies, the honest demand KPI is:", choices: ["GAAP revenue", "Bookings: cash sales before deferral, which lead reported revenue by quarters", "Headcount", "Metacritic scores"], answer: 1, explain: "Deferred-revenue accounting smooths the P&L; bookings show the business as it is happening." },
    { q: "In a recession, gaming demand has historically:", choices: ["Collapsed like luxury goods", "Held up well: cost-per-hour of fun is unbeatable, though whale spend and ad revenue can wobble", "Doubled", "Tracked oil prices"], answer: 1, explain: "Engagement is resilient; the cyclical parts are advertising-funded mobile and the discretionary whale wallet." }
  ],

  sources: [
    { name: "Newzoo Global Games Market Report 2025 (market size, segments, players)", url: "https://newzoo.com/resources/trend-reports/newzoo-global-games-market-report-2025-free-version", feeds: "market size, mix" },
    { name: "Take-Two / press: GTA VI delayed to Nov 19, 2026 (Nov 2025)", url: "https://variety.com/2025/gaming/news/gta-6-release-delayed-november-2026-1236571679/", feeds: "catalysts, pipeline" },
    { name: "Roblox Q1 2026 shareholder letter (DAUs, bookings, DevEx payouts)", url: "https://ir.roblox.com", feeds: "UGC economics, engagement" },
    { name: "Press coverage of Game Pass subscribers vs projections (WSJ via PC Gamer, 2025-26)", url: "https://www.pcgamer.com/gaming-industry/as-microsoft-lays-off-thousands-and-jacks-up-game-pass-prices-former-ftc-chair-says-i-told-you-so-the-activision-blizzard-buyout-is-harming-both-gamers-and-developers/", feeds: "subscription debate, M&A aftermath" }
  ]
};
