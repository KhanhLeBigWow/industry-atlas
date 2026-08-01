/* Industry Atlas - MEDIA & STREAMING (full module, research-backed)
 * Anchors: Netflix FY2025 revenue $45.2B (+16%), operating margin ~29.5% vs 26.7% in 2024;
 * 2026 guide $51.0-51.4B at 31.5% margin, ads revenue ~$3B (Netflix Q4 2025 shareholder letter, Jan 20, 2026).
 * Netflix agreed to acquire Warner Bros. (post-split Streaming & Studios) at $82.7B TEV / $72.0B equity,
 * $27.75/share, announced late 2025 (Netflix newsroom). WBD split announced Jun 9, 2025: Warner Bros. +
 * Discovery Global, completing mid-2026 (WBD release). NBA rights: 11 years, $76B, Disney/NBC/Amazon from
 * 2025-26 season, ~2.6x the prior annual fee; TNT out after ~4 decades (CBS Sports/ESPN, Jul 2024).
 * Disney DTC: FY2025 operating income $1.3B on $24.6B revenue, ~9x YoY; Disney+/Hulu 183M subs; FY2026
 * guide ~$2.1B (Disney FY2025 Q4 earnings, Nov 2025). Nielsen Gauge: May 2025 streaming 44.8% of TV time,
 * first month above broadcast+cable combined (44.2%); Dec 2025 streaming 47.5%, cable 20.2%, a record low.
 * PwC Global E&M Outlook (2025): industry $3.5T in 2025, $4.2T by 2030 (~3.4% CAGR); US video streaming
 * ~$113B revenue in 2025. Netflix paid sharing launched May 2023 ($7.99/mo extra member, US). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["media"] = {
  meta: {
    id: "media", name: "Media & Streaming", sector: "tmt", status: "full",
    tagline: "The streaming wars ended the way wars do: a profitable victor, consolidation among the rest, and a bundle that looks suspiciously like cable.",
    marketSize: { value: 3.5, unit: "$T", asOf: 2025, note: "global entertainment & media spend per PwC Outlook (incl. advertising); US video streaming ~$113B of it" },
    cagr: { value: 3.4, range: [3, 5], horizon: "2025-2030" },
    maturity: "mature-restructuring", cyclicality: 3, capitalIntensity: 3, regulation: 2, disruption: 4
  },
  newsQuery: '(Netflix OR "HBO Max" OR "Disney+" OR "Warner Bros" OR "streaming service" OR "media rights" OR "box office")',

  overview: {
    definition: "The media industry creates, packages, and monetizes video stories and live events: film, television, and now the streaming platforms that deliver them directly to 1B+ households. A century-old wholesale business (studios selling to networks selling to cable) is being rebuilt as direct retail, and the retailer with the most scale is buying the store next door.",
    howItWorks: [
      "The old model was a tollbooth chain: studios made content, networks scheduled it, cable operators bundled ~200 channels for $100/month, and affiliate fees plus advertising paid everyone twice. Streaming collapsed the chain: platforms now commission content, distribute it globally over the internet, and bill households directly. The crossover is official: in May 2025 streaming took 44.8% of US TV time, passing broadcast and cable combined (44.2%) for the first time in Nielsen's Gauge; by December 2025 streaming hit 47.5% while cable fell to 20.2%, its lowest share ever recorded.",
      "The economics are fixed-cost content against variable subscriber revenue, which makes scale nearly everything. A $17B annual content budget spread over 300M+ members costs a few dollars per member-month; the same slate over 50M members is ruinous. Netflix proved the model clears: FY2025 revenue of $45.2B (+16%) at a ~29.5% operating margin (vs 26.7% in 2024), guiding to $51B+ and 31.5% in 2026. Disney's streaming unit crossed into profit far more modestly: $1.3B of FY2025 operating income on $24.6B of revenue (a ~5% margin) after years of multibillion-dollar losses. Everyone below that line is subscale, and knows it.",
      "Monetization is now a ladder, not a price. Ad-supported tiers lowered the entry price and opened a second revenue stream: Netflix's ads revenue grew ~2.5x to over $1.5B in 2025 and is guided to roughly double to ~$3B in 2026. Paid sharing (launched May 2023, $7.99/month per extra member in the US) converted borrower households into payers and restarted growth: roughly 50M members were added in the following 18 months. Bundles returned because churn is the tax on direct retail: Disney+/Hulu, Disney/Max pairings, and telecom packaging all trade margin for retention, quietly reassembling the cable bundle at a new address.",
      "Live sports is the last content that must be watched now, which makes leagues the most powerful suppliers in the chain: the NBA's 11-year, $76B deal with Disney, NBC, and Amazon (from the 2025-26 season) reset its annual fee roughly 2.6x higher and dropped TNT after almost 4 decades. Legacy media is restructuring around that reality: Warner Bros. Discovery announced in June 2025 it would split into Warner Bros. (streaming and studios) and Discovery Global (cable networks) by mid-2026, and Netflix then agreed to acquire Warner Bros. at an $82.7B enterprise value: the endgame trade, the scaled winner buying a 100-year library, HBO, and DC with the cash its margin structure now throws off."
    ],
    history: [
      { era: "1948-1980", title: "The broadcast trinity", text: "Three US networks own the nation's evenings; advertising monopolizes attention monetization; Hollywood studios feed the machine under strict separation rules." },
      { era: "1980-2007", title: "Cable's golden bundle", text: "Affiliate fees stack on advertising: every household pays for 200 channels to watch 15. The dual-revenue bundle becomes the most profitable media model ever built." },
      { era: "2007-2019", title: "Streaming insurgency", text: "Netflix pivots from DVDs to streaming (2007), commissions House of Cards (2013), and goes global. Cord-cutting begins; studios license their crown jewels to their disruptor for easy cash." },
      { era: "2019-2022", title: "The streaming wars", text: "Disney+, HBO Max, Peacock, and Paramount+ launch in 18 months; content spend becomes an arms race; growth-at-any-cost pricing burns billions chasing Netflix's subscriber curve." },
      { era: "2022-present", title: "Profitability and consolidation", text: "Netflix's first subscriber loss (Q1 2022) ends the land-grab era: ad tiers, paid sharing, and price discipline follow. Disney DTC turns profitable (FY2025), WBD splits, Netflix agrees to buy Warner Bros., and streaming passes linear TV (Nielsen, May 2025)." }
    ],
    trends: [
      { title: "Streaming passes linear", direction: "shift", text: "44.8% of US TV time in May 2025, the first month above broadcast plus cable combined; 47.5% by December. The audience has moved; the ad dollars and sports rights are following it." },
      { title: "The profitability turn", direction: "up", text: "Netflix at ~29.5% operating margin (2025) guiding to 31.5%; Disney DTC from heavy losses to $1.3B of operating income (FY2025). Discipline replaced growth-at-any-cost as the sector religion." },
      { title: "Ad tiers and the CTV land grab", direction: "up", text: "Cheap ad-supported plans widen the funnel and monetize attention twice: Netflix ads revenue ~$1.5B in 2025, guided toward ~$3B in 2026. Connected-TV advertising is the industry's next $10B+ P&L line." },
      { title: "Sports rights inflation", direction: "up", text: "The NBA's $76B/11-year reset (~2.6x the old annual fee) is the template: leagues auction scarce live audiences to desperate bidders, including Amazon and Netflix, and capture the streaming era's surplus." },
      { title: "Linear decay and structural separation", direction: "down", text: "Cable's viewing share hit a record-low 20.2% in December 2025. Owners are amputating: WBD's split walls the declining networks (Discovery Global) off from the growth assets, a pattern peers are copying." }
    ],
    outlook: "Consolidation is the story of the next 5 years: the market supports perhaps 3 or 4 global-scale streamers, and the Netflix-Warner Bros. deal ($82.7B TEV, subject to regulators) prices the endgame. Ads and live sports migrate fully onto streaming, the bundle re-forms around fewer, fatter apps, and linear networks get managed for cash in structural runoff. The scarce assets are franchises, sports rights, and distribution scale; the stranded assets are mid-sized general-entertainment services and the cable dial."
  },

  structure: {
    suppliers: [
      { name: "Talent & creators (guilds, showrunners, A-list)", note: "Organized and militant: the 2023 WGA/SAG strikes shut production for months" },
      { name: "Sports leagues (NBA, NFL, EPL, cricket boards)", note: "The most powerful suppliers: monopoly sellers of must-watch-live content" },
      { name: "Production studios & facilities", note: "Soundstages, VFX houses, and the freelance crew economy beneath every slate" },
      { name: "Tech infrastructure (cloud, CDNs, ad tech)", note: "Streaming rides rented rails: encoding, delivery, and ad-serving at scale" }
    ],
    producers: [
      { name: "Netflix", note: "The scaled winner: $45.2B revenue, ~29.5% margin (2025), now buying Warner Bros." },
      { name: "Disney", note: "The IP flywheel: franchises feed streaming, parks, and merchandise simultaneously" },
      { name: "Warner Bros. / HBO Max", note: "Premium brand and century-old library: the endgame's prize asset" },
      { name: "Amazon & Apple", note: "Ecosystem players: video as retention spend for commerce and hardware" },
      { name: "Comcast NBCU & Paramount Skydance", note: "Subscale streamers attached to studios and declining networks" }
    ],
    distributors: [
      { name: "Devices & TV operating systems", note: "Roku, smart-TV makers, Amazon Fire, Apple/Google: shelf space and app-store take rates" },
      { name: "Telecom & pay-TV bundlers", note: "Carriers resell streaming subscriptions; the old distributors become billing partners" }
    ],
    customers: [
      { name: "Households", note: "1B+ subscriptions globally; churn-prone and increasingly price-tiered" },
      { name: "Advertisers", note: "The second customer returns: CTV budgets chase the audience that left linear" }
    ],
    regulators: [
      { name: "Antitrust (DOJ/FTC, EC)", note: "The Netflix-Warner Bros. review is the sector's biggest regulatory event in decades" },
      { name: "FCC & broadcast rules", note: "Licenses, station ownership caps, and retransmission rules still bind linear" },
      { name: "Content quotas & local rules (EU, India)", note: "Local-content mandates shape global commissioning budgets" }
    ],
    capital: [
      { name: "Studio & platform balance sheets", note: "Content is self-funded at the winners; Netflix's margin structure finances its own M&A" },
      { name: "Debt markets", note: "Legacy media carries heavy leverage against declining linear cash flows" },
      { name: "Private capital", note: "PE and sovereigns buy libraries, sports stakes, and production assets for annuity cash" }
    ]
  },

  valueChain: {
    intro: "From a writers' room to a global app in 6 stages. Value pools at the two ends: the scarce IP and leagues upstream, and the scaled aggregation platform downstream. The middle (production, linear distribution) is being squeezed hardest.",
    stages: [
      { id: "talent-ip", name: "Talent, IP & leagues", what: "Franchises, formats, stars, and live sports rights", players: "Leagues (NBA/NFL), guilds, CAA/WME, franchise owners", valueCapture: 4,
        economics: { grossMargin: [30, 60], capitalIntensity: 1, concentration: 3 },
        linksTo: ["sports", "entertainment"],
        deeper: "Scarcity pricing at its purest: the NBA re-auctioned itself for $76B over 11 years (~2.6x the prior annual fee) because live sport is the last content advertisers cannot time-shift around. Below the leagues, the 2023 strikes showed organized talent can halt the entire supply chain." },
      { id: "production", name: "Content production", what: "Development, physical production, post & VFX", players: "Warner Bros., Universal, Sony, A24, independents", valueCapture: 2,
        economics: { grossMargin: [5, 15], capitalIntensity: 3, concentration: 3 },
        linksTo: ["entertainment", "gaming"],
        deeper: "The streaming era's cost-plus commissions killed the old back-end lottery: producers get a ~10-20% margin upfront and surrender the upside. Sony chose arms-dealer status (selling to every platform, owning none): the one legacy studio strategy that aged well." },
      { id: "streaming", name: "Streaming platforms", what: "Aggregation, recommendation, global billing", players: "Netflix, Disney+, HBO Max, Prime Video", valueCapture: 5,
        economics: { grossMargin: [35, 50], capitalIntensity: 3, concentration: 4 },
        linksTo: ["ai", "cloud"],
        deeper: "The scale threshold is brutal: fixed content cost over the member base decides everything. Netflix's ~29.5% operating margin (2025) versus Disney DTC's ~5% versus losses everywhere else is the whole industry structure in one line. Recommendation engines are the merchandising: engagement per content dollar is the real KPI." },
      { id: "linear", name: "Linear networks & pay TV", what: "Cable/broadcast channels, affiliate fees, retrans", players: "Discovery Global, Fox, NBCU networks, station groups", valueCapture: 3,
        economics: { grossMargin: [30, 40], capitalIntensity: 2, concentration: 4 },
        linksTo: ["telecom", "sports"],
        deeper: "A melting ice cube that still throws off cash: margins hold even as cable's viewing share hits record lows (20.2% in December 2025) because affiliate fees reprice slower than audiences leave. The play is runoff management: harvest, deleverage, and hold sports and news to slow the melt." },
      { id: "advertising", name: "Advertising & CTV ad tech", what: "Upfronts, programmatic CTV, measurement", players: "YouTube, Amazon Ads, Netflix Ads, The Trade Desk", valueCapture: 4,
        economics: { grossMargin: [60, 80], capitalIntensity: 2, concentration: 3 },
        linksTo: ["ecommerce", "ai"],
        deeper: "The second monetization engine: ad tiers turned streamers into sellers of the premium video inventory advertisers lost when linear died. Netflix built a ~$1.5B ads business by 2025 and guides to ~$3B in 2026; Amazon flipped 200M Prime households to ads-by-default. Commerce data attached to the TV screen is the prize." },
      { id: "devices", name: "Devices & distribution rails", what: "Smart TVs, streaming sticks, OS home screens, app stores", players: "Roku, Samsung/LG, Amazon Fire TV, Apple, Google", valueCapture: 3,
        economics: { grossMargin: [20, 50], capitalIntensity: 2, concentration: 4 },
        linksTo: ["consumer-electronics", "semiconductors"],
        deeper: "The new cable box: TV operating systems charge 15-30% app-store takes, sell home-screen placement like supermarket shelf space, and harvest viewing data. Hardware is sold near cost; the OS and ad rights are the business." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector in 4 different P&Ls. The scaled streamer (Netflix): subscription revenue = members x ARM, against a largely fixed content budget: every incremental member and price increase drops through, which is how margin walked from 21% (2022) to ~29.5% (2025) with 31.5% guided. Diversified media (Disney): streaming sits inside a franchise flywheel where parks and consumer products co-fund the content. Legacy linear (Discovery Global class): high-margin declining annuities managed for cash and debt paydown. Ecosystem tech (Amazon, Apple, YouTube): video monetizes indirectly through commerce, hardware, and ads, making their content budgets strategically bottomless and margin-invisible.",
      "Content accounting is the sector's trapdoor: cash spend is capitalized and amortized over years, so reported earnings can flatter cash burn during growth phases. The tell is the cash-content-to-amortization ratio: Netflix's converged toward ~1.1x as it matured, and its FCF turned decisively positive. The second structural line is advertising: ad tiers reintroduce cyclicality (ad markets track GDP) but raise total monetization per viewing hour. The third is rights inflation: sports is the only input cost rising faster than streaming revenue, which is why leagues, not platforms, capture that surplus."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 80, capitalIntensity: 55, pricingPower: 60, cyclicality: 40, operatingLeverage: 75 },
    lines: [
      { label: "Members & ARM", note: "The volume and price engine: average revenue per membership is the pricing-power tape" },
      { label: "Content spend vs amortization", note: "Cash discipline signal: a widening gap means growth is being capitalized, not earned" },
      { label: "Advertising revenue", note: "The second engine: Netflix ~$1.5B (2025) guided to ~$3B (2026); Amazon and Disney scaling too" },
      { label: "Engagement & churn", note: "Hours per member predicts retention; churn is the tax on every price increase" },
      { label: "Linear affiliate & retrans decline", note: "Legacy cash half-life: cable at 20.2% of viewing and falling" }
    ],
    unitEconomics: {
      unit: "per subscriber per month (illustrative, US-scale streamer)",
      items: [
        { label: "Blended ARM", value: "~$15-18", note: "ad tier lowers the sticker; ad revenue recaptures the gap and more" },
        { label: "Content cost per member-month", value: "~$4-5", note: "a ~$17B annual budget spread over 300M+ members: the scale moat itself" },
        { label: "Extra-member fee (paid sharing)", value: "$7.99", note: "US price; converted borrower households into ~50M new members after May 2023" },
        { label: "Operating margin at scale", value: "~30%", note: "Netflix 2025 actual ~29.5%; subscale peers run 0-5% or negative" }
      ]
    }
  },

  kpiRefs: ["telecom-arpu", "telecom-churn", "saas-nrr"],
  kpiLocal: [
    {
      id: "media-content-ratio", name: "Cash Content Spend / Amortization", industries: ["media"],
      definition: "Cash spent on content in a period divided by the content amortization expense recognized in the same period.",
      formula: "Content additions (cash) / content amortization (P&L)",
      interpretation: "Above 1.0x means the platform is investing ahead of the P&L (normal in growth); a converging ratio signals maturity and real earnings. Netflix's drift toward ~1.1x accompanied its FCF inflection.",
      healthy: "~1.0-1.2x at steady state, converging over time", warning: "Persistently >1.4x: earnings are being manufactured by capitalization" },
    {
      id: "media-dtc-margin", name: "Streaming (DTC) Operating Margin", industries: ["media"],
      definition: "Operating income of the direct-to-consumer streaming segment as a share of its revenue: the scoreboard of the profitability turn.",
      formula: "DTC operating income / DTC revenue",
      interpretation: "The scale gradient in one number: Netflix ~29.5% (2025, guiding 31.5%), Disney ~5% (FY2025, first real profit year), most others near zero or negative.",
      healthy: "Positive and expanding 200bps+ per year", warning: "Losses beyond year 5 of operation, or margin bought via content starvation" }
  ],

  health: {
    intro: "Platform health is scale and engagement; studio health is franchise depth; legacy health is how gracefully linear cash is being redeployed before it evaporates.",
    pillars: [
      { name: "Scale & engagement", weight: 30, metrics: "Members, hours per member, share of TV time (Nielsen)", healthy: "200M+ members or a defended niche; engagement flat-to-up", warning: "Subscale general entertainment: the structurally doomed quadrant" },
      { name: "Monetization ladder", weight: 20, metrics: "ARM growth, ad-tier mix, paid-sharing conversion, bundle attach", healthy: "Price increases sticking with churn contained; ads scaling", warning: "Price hikes met with churn spikes; ad tier cannibalizing without recapture" },
      { name: "Content efficiency", weight: 20, metrics: "Cash spend/amortization, engagement per content dollar, franchise hit rate", healthy: "Ratio near 1.1x; library doing the retention work", warning: "Spend rising while engagement share falls: paying more for less attention" },
      { name: "Balance sheet & FCF", weight: 15, metrics: "Leverage vs linear decay rate, FCF conversion", healthy: "FCF positive; leverage sized to declining cash flows", warning: "Legacy leverage against a melting affiliate base (the value-trap signature)" },
      { name: "Linear exposure & transition", weight: 15, metrics: "Share of profit from linear, sports rights coverage, spin/split optionality", healthy: "Linear <30% of profit and hedged with sports/news", warning: "Majority of profit from the 20%-of-viewing dial with no separation plan" }
    ],
    scoringNote: "In streaming, scale forgives most sins and subscale forgives none: every metric above ultimately proxies whether the fixed content cost has enough members to land on."
  },

  valuation: {
    intro: "A bifurcated tape: the scaled winner prices like a compounding consumer platform, legacy media like declining annuities with an option on restructuring. The Netflix-Warner Bros. deal gave the sector its first true endgame comp.",
    methods: [
      { name: "EV / EBITDA (bifurcated)", use: "The cross-sector screen: streamers vs studios vs networks", avoid: "Averaging the two regimes into one 'media multiple'", strengths: "Comparable, quick", weaknesses: "Content amortization policies distort EBITDA comparability", range: { low: 6, high: 14, asOf: 2025, note: "legacy nets 6-8x; scaled streaming platforms command the top and above" } },
      { name: "FCF yield", use: "Mature platforms where cash content spend has converged with amortization", avoid: "Growth-phase streamers still investing ahead of the P&L", strengths: "Cuts through content accounting entirely", weaknesses: "Punishes justified investment years", range: { low: 2, high: 5, asOf: 2025, note: "% yield; Netflix's FCF inflection is what re-rated the whole model" } },
      { name: "Sum-of-the-parts", use: "Diversified media (Disney, NBCU parents): streaming + studio + linear + parks priced separately", avoid: "Companies mid-restructuring where segment lines are moving", strengths: "Reveals the stranded-asset discount and spin math (the WBD split logic)", weaknesses: "Parts rarely separate cleanly; conglomerate discount persists", range: { low: 0, high: 0, asOf: 2025, note: "qualitative framework; the WBD split and Netflix bid are the live worked example" } },
      { name: "Per-subscriber / per-engagement value", use: "M&A sanity checks and private-market comps", avoid: "Treating all subscribers as equal (ARM and churn differ 5x across markets)", strengths: "Matches how acquirers actually underwrite", weaknesses: "Ignores content liabilities attached to the subs", range: { low: 0, high: 0, asOf: 2025, note: "anchor: $82.7B TEV for Warner Bros.' streaming, studios, and library" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a media name quickly: revenue times margin gives EBITDA, times a regime-appropriate multiple, minus net debt. Use 6-8x for linear-heavy, 12x+ for scaled streaming.",
      inputs: [
        { id: "vc-rev", label: "Revenue ($B)", min: 1, max: 60, step: 1, value: 20, fmt: "money" },
        { id: "vc-margin", label: "EBITDA margin (%)", min: 5, max: 40, step: 1, value: 22, fmt: "pct" },
        { id: "vc-mult", label: "EV / EBITDA multiple", min: 4, max: 20, step: 0.5, value: 9, fmt: "mult" },
        { id: "vc-netdebt", label: "Net debt ($B)", min: -20, max: 50, step: 1, value: 10, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays media as a barbell: own the scaled platform winner and the irreplaceable IP/sports assets, avoid the subscale middle, and treat legacy linear as a cash-harvest special-situations book (spins, splits, deal targets) rather than a hold. The profitability turn is real but fully priced at the top: the marginal dollar is made on consolidation events and the ad-revenue ramp, not on subscriber counts the winners no longer even report as guidance.",
    debates: [
      { topic: "Netflix: is 31.5% the margin ceiling or the halfway point?", bull: "Operating margin walked from 21% to ~29.5% in 3 years with 31.5% guided; ads roughly doubling to ~$3B (2026) is nearly pure incremental margin, price increases keep sticking, and the Warner Bros. library plus HBO output cuts third-party licensing cost forever. 40% is visible.", bear: "Sports rights (the next growth leg) carry league-taxed economics, the ad build needs years of sales infrastructure, saturation in rich markets pushes growth to low-ARM geographies, and an $82.7B acquisition plus integration is exactly where great margin stories historically stall." },
      { topic: "The Warner Bros. deal: endgame masterstroke or top-ticking the cycle?", bull: "A century of IP, HBO's brand, DC, and a warehouse of franchises bought with a richly valued currency at ~$83B TEV: it removes Netflix's only content-moat rival, and the buyer's distribution instantly doubles the assets' monetization. Consolidation math this clean rarely reappears.", bear: "Studios are melting too (theatrical is structurally smaller), regulators may extract years and remedies, culture integration between a tech platform and a 100-year studio is a graveyard genre, and the seller's own split timeline signals how eager legacy holders were to hand off the risk." },
      { topic: "Sports rights: rational scarcity pricing or a bubble the buyers will regret?", bull: "Live sport is the last mass simultaneous audience: the NBA tripling its annual fee to ~$7B across Disney, NBC, and Amazon simply marked the asset to its true scarcity, and streamers' global reach plus betting-adjacent engagement keeps widening the bidder pool.", bear: "Ratings do not support 2.6x resets forever: the deals are priced off desperation (linear needs the glue, streamers need the funnel), and when one major bidder blinks, rights deflation arrives fast: TNT walking away is the first data point, not an anomaly." }
    ],
    cycle: {
      where: "Post-war consolidation phase: the profitability turn is proven (Netflix ~29.5%, Disney DTC positive), streaming has passed linear in the audience data, and the M&A endgame is live: the cycle's remaining questions are regulatory approvals, the pace of linear decay, and how much of the ads opportunity gets captured before the next rights auction.",
      drivers: "Household penetration and churn, advertising market growth (GDP-linked), sports rights auction calendar, antitrust posture, and the cost of content inflation vs pricing power.",
      leads: [
        "Nielsen Gauge monthly viewing shares (free): the audience tape",
        "Netflix quarterly shareholder letters and biannual engagement report (free)",
        "Upfront advertising commitments each May (trade press, free)",
        "Rights auction outcomes (NFL, EPL, cricket renewals set the inflation curve)",
        "Churn and switching data from Antenna's free published insights"
      ]
    },
    exposure: [
      { vehicle: "Netflix", note: "The scaled winner: margin compounding plus the Warner Bros. option; priced for it" },
      { vehicle: "Disney", note: "IP flywheel with a parks subsidy; DTC margin has 25 points of Netflix-shaped headroom" },
      { vehicle: "Legacy networks (Discovery Global, Fox class)", note: "Deep-value cash harvests or value traps; the difference is leverage and sports coverage" },
      { vehicle: "Amazon / Apple / YouTube (via parents)", note: "No pure-play exposure: video is their retention and ads spend, which is exactly why they never have to stop" },
      { vehicle: "CTV picks-and-shovels (Trade Desk, Roku class)", note: "The ad-dollar migration without picking the content winner" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "ARM, margin, and ads trajectory: the winners retired subscriber guidance, so revenue quality is the print" },
      { when: "May (upfronts)", what: "CTV ad commitments: the annual mark on how fast linear dollars migrate" },
      { when: "2026 (mid-year)", what: "WBD split completion and Netflix-Warner Bros. regulatory milestones: the sector's repricing event" },
      { when: "Rights renewals (rolling)", what: "Each league auction re-marks sports inflation and reveals who still must overpay" }
    ],
    data: [
      { series: "Nielsen Gauge (monthly US viewing shares)", source: "nielsen.com newsroom (free)", why: "The definitive audience-shift tape: streaming vs broadcast vs cable" },
      { series: "Netflix shareholder letters & engagement reports", source: "Netflix IR (free)", why: "The scaled model's primary source: margins, ads, engagement hours" },
      { series: "Disney segment results (DTC operating income)", source: "Disney IR (free)", why: "The challenger profitability scoreboard" },
      { series: "PwC Global E&M Outlook summaries", source: "pwc.com (free summaries)", why: "Market sizing and 5-year growth mix" },
      { series: "SEC filings (10-Ks, merger proxies)", source: "sec.gov (free)", why: "Content accounting detail and deal terms, primary source" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Advertising falls first and hardest: linear worst, ad tiers dented. Subscriptions prove resilient (cheap per-hour entertainment); trade-down to ad plans cushions revenue. Own subscription-weighted, avoid ad-dependent legacy." },
      { regime: "Rates rising", behavior: "Leveraged legacy media compresses (debt against declining cash flows is the worst duration trade in the sector); FCF-positive platforms are fine. Watch refinancing calendars at the networks." },
      { regime: "Ad upcycle", behavior: "CTV takes disproportionate share of every incremental ad dollar; Netflix/Amazon ads and the ad-tech rails outperform; upfront pricing confirms it by June." },
      { regime: "Content shock (strike, franchise fatigue)", behavior: "Production halts cut cash spend and flatter near-term FCF (the 2023 strike pattern), then starve the slate 12-18 months out: fade the FCF beat, watch the engagement data for the payback." }
    ]
  },

  players: [
    { name: "Netflix", role: "Scaled streaming winner", country: "US", real: true, note: "$45.2B revenue, ~29.5% operating margin (2025); acquiring Warner Bros. at $82.7B TEV" },
    { name: "Disney", role: "Franchise flywheel", country: "US", real: true, note: "DTC turned: $1.3B FY2025 operating income, 183M Disney+/Hulu subs, ~$2.1B guided FY2026" },
    { name: "Warner Bros. / HBO Max", role: "The endgame prize", country: "US", real: true, note: "Century-old library, HBO, DC: split from Discovery, then agreed to Netflix's offer" },
    { name: "Amazon Prime Video", role: "Ecosystem streamer", country: "US", real: true, note: "Video as commerce retention; NBA and NFL rights; flipped Prime to ads-by-default" },
    { name: "YouTube (Alphabet)", role: "The attention incumbent", country: "US", real: true, note: "Consistently the largest single streaming platform in Nielsen's Gauge; the free rival every subscription competes with" },
    { name: "Comcast NBCUniversal", role: "Subscale challenger", country: "US", real: true, note: "Peacock plus a ~$2.5B/yr NBA bet to keep NBC's sports glue; networks being separated" },
    { name: "Paramount Skydance", role: "Recapitalized studio", country: "US", real: true, note: "Old Hollywood under new tech-family ownership (2025); consolidation's next mover" },
    { name: "Discovery Global", role: "Linear cash harvest", country: "US", real: true, note: "CNN, TNT Sports, Discovery: the split-off networks company managed for cash and deleveraging" }
  ],

  geography: [
    { country: "US", role: "The center of gravity", note: "Largest streaming market (~$113B, 2025) and home of every global platform" },
    { country: "GB", role: "Production hub + Sky/BBC", note: "Tax credits and soundstages make Britain Hollywood's biggest offshore lot" },
    { country: "KR", role: "Content export powerhouse", note: "K-dramas travel globally at a fraction of Hollywood cost: the best content ROI on Earth" },
    { country: "IN", role: "The volume frontier", note: "Sub-$3 ARPUs, cricket rights economics, and JioHotstar's scale: growth priced in pennies" },
    { country: "JP", role: "Anime engine", note: "The most globally portable genre; Sony's Crunchyroll consolidated it" },
    { country: "CA", role: "Runaway production", note: "Vancouver and Toronto host the overflow slate via tax incentives and currency" }
  ],

  cycles: [
    { year: 2000, title: "AOL Time Warner", kind: "bust", text: "A $165B merger of distribution and content destroys value at record scale as the platform shifts underneath it. Lesson: buying content for yesterday's pipe is the sector's classic error." },
    { year: 2013, title: "House of Cards", kind: "shift", text: "Netflix commissions originals using viewing data and releases whole seasons at once: the studio gatekeepers lose their monopoly on greenlights. Lesson: distribution owning commissioning changes who captures value." },
    { year: 2019, title: "The streaming wars open", kind: "boom", text: "Disney+ signs 10M households on day 1; every studio pulls its library home and launches an app; content spend goes vertical. Lesson: cheap capital turns strategy into a spending contest." },
    { year: 2022, title: "The Netflix correction", kind: "bust", text: "The first subscriber loss in a decade cuts the stock ~(75)% from peak and ends growth-at-any-cost: ad tiers and paid sharing are born within a year. Lesson: markets fund land grabs only until the land runs out." },
    { year: 2025, title: "Crossover and consolidation", kind: "shift", text: "Streaming passes broadcast plus cable combined (Nielsen, May), WBD splits itself, and Netflix agrees to buy Warner Bros. for $82.7B TEV. Lesson: every content cycle ends the same way: consolidation around whoever owns distribution." }
  ],

  risks: [
    { name: "Sports rights escalation", severity: 4, likelihood: 4, transmission: "Leagues re-auction scarcity (NBA ~2.6x template) -> content inflation outruns ARM growth -> margins compress for every bidder who needs live glue." },
    { name: "Saturation and churn-cycling", severity: 3, likelihood: 3, transmission: "Rich-market penetration peaks -> price hikes met with serial churn (subscribe, binge, cancel) -> ARM growth stalls and acquisition costs re-inflate." },
    { name: "Regulatory block of consolidation", severity: 3, likelihood: 3, transmission: "Netflix-Warner Bros. challenged or conditioned -> the endgame comp collapses -> legacy assets reprice down with no buyer of last resort." },
    { name: "Linear collapse outpacing transition", severity: 4, likelihood: 3, transmission: "Affiliate-fee model unravels faster than DTC profits ramp (cable already 20.2% of viewing) -> stranded networks, leveraged balance sheets, forced sales." },
    { name: "Generative AI content flood", severity: 3, likelihood: 2, transmission: "AI-assisted video crushes production cost at the low end -> attention fragments toward free supply (YouTube-class) -> premium pricing power and talent economics erode together." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Media companies make shows, movies, and live sports, and increasingly sell them straight to your TV through apps instead of cable channels. Streaming now takes more of Americans' TV time than broadcast and cable combined (it crossed that line in May 2025). The biggest app, Netflix, finally proved the business can be very profitable, and the industry is now merging into a few giant players." ] },
    L2: { title: "Intermediate", text: ["The economics: content is a fixed cost, so profit depends on how many members share it. Netflix ($45.2B revenue, ~29.5% operating margin in 2025) has 300M+ members carrying its budget; Disney's streaming just turned profitable ($1.3B in FY2025); smaller services lose money. Growth now comes from a monetization ladder: price increases, ad-supported tiers (Netflix ads heading to ~$3B in 2026), paid sharing fees, and bundles. Live sports is the exception: leagues like the NBA ($76B over 11 years) capture that value themselves." ] },
    L3: { title: "Advanced", text: ["Analyze by P&L species: scaled platforms on ARM, engagement, and the cash-content-to-amortization ratio (converging toward ~1.1x signals real earnings); diversified media on sum-of-the-parts with streaming, studio, linear, and parks priced separately; legacy networks on cash-harvest math (affiliate decline rate vs leverage). The structural trade is the middle getting squeezed: production runs cost-plus, linear melts (20.2% of viewing), while irreplaceable IP upstream and scaled aggregation downstream take the pools. Watch the WBD split and Netflix-Warner Bros. approval as the sector's live case study." ] },
    L4: { title: "Expert", text: ["Trade the monthly Nielsen tape, quarterly ARM and ads prints, upfront pricing, and the rights auction calendar. Live debates: whether Netflix's margin compounds past 31.5% or stalls on sports costs and integration; whether $82.7B for Warner Bros. is endgame genius or a cycle top; whether NBA-style 2.6x rights resets are scarcity pricing or a bubble that deflates when one bidder blinks. Special situations cluster in legacy: splits, spins, and forced deleveraging create the entry points scale investors never offer." ] },
    L5: { title: "Institutional", text: ["Allocator's frame: media is now a barbell of one proven compounding platform (plus the ecosystem players who never need profits) against a legacy complex in structural runoff, with franchises and sports rights as the scarce collateral in between. Core the scaled winner and the IP owners, run legacy as an event-driven book, and treat the CTV advertising migration as the sector's most underwritten growth line. The permanent question is who owns the customer relationship: every era of media history, from the network trinity to the cable bundle to the app, paid its surplus to that owner." ] }
  },

  quiz: [
    { q: "In May 2025, Nielsen's Gauge recorded a first: streaming's share of US TV time:", choices: ["Fell below 20%", "Passed broadcast and cable combined (44.8% vs 44.2%)", "Equaled theatrical box office", "Was overtaken by cable"], answer: 1, explain: "The structural crossover: by December 2025 streaming hit 47.5% while cable fell to a record-low 20.2%." },
    { q: "Netflix's FY2025 P&L showed roughly:", choices: ["$45.2B revenue at a ~29.5% operating margin", "$20B revenue at breakeven", "$80B revenue at 10% margin", "A net loss"], answer: 0, explain: "Revenue grew 16% to $45.2B with margin up from 26.7%; 2026 guidance calls for $51B+ at 31.5%: the profitability turn, quantified." },
    { q: "The core economic logic of streaming is:", choices: ["Variable content costs", "Fixed content cost spread over members: scale decides who profits", "Advertising only", "Government subsidies"], answer: 1, explain: "A ~$17B budget over 300M+ members costs a few dollars per member-month; the same slate over 50M members is ruinous. Hence consolidation." },
    { q: "Netflix's paid-sharing crackdown (May 2023) worked by:", choices: ["Banning all sharing outright", "Charging $7.99/month per extra member and converting borrower households: roughly 50M members followed", "Cutting prices", "Removing ads"], answer: 1, explain: "Borrowers became payers, and alongside the ad tier it restarted growth after the 2022 subscriber loss." },
    { q: "The NBA's 2024 rights deal reset the sports market by:", choices: ["Cutting fees 50%", "Selling 11 years for $76B (~2.6x the prior annual fee) to Disney, NBC, and Amazon, dropping TNT", "Moving all games to free TV", "Ending national broadcasts"], answer: 1, explain: "Live sport is the last must-watch-now content: leagues auction that scarcity and capture the streaming era's surplus." },
    { q: "Disney's streaming segment in FY2025:", choices: ["Lost $4B", "Earned $1.3B of operating income on $24.6B revenue: its first real profit year", "Out-earned Netflix", "Was shut down"], answer: 1, explain: "A ~9x improvement year over year and ~$2.1B guided for FY2026: profitable, but a ~5% margin versus Netflix's ~29.5% shows the scale gap." },
    { q: "Warner Bros. Discovery's 2025 restructuring:", choices: ["Merged with Comcast", "Split into Warner Bros. (streaming/studios) and Discovery Global (networks), after which Netflix agreed to buy Warner Bros. at $82.7B TEV", "Took the company private", "Sold CNN to Disney"], answer: 1, explain: "Separate the melting linear assets, sell the growth assets: the template for legacy media's endgame." },
    { q: "The biggest structural risk to streaming margins is:", choices: ["Cheaper cloud computing", "Sports rights inflation: leagues repricing scarce live content faster than platforms can raise ARM", "Too few password sharers", "Declining internet speeds"], answer: 1, explain: "Content is the cost line, and sports is the only input repricing at 2.6x per cycle: whoever needs the live glue pays the league's price." }
  ],

  sources: [
    { name: "Netflix Q4 2025 shareholder letter (Jan 20, 2026)", url: "https://s22.q4cdn.com/959853165/files/doc_financials/2025/q4/FINAL-Q4-25-Shareholder-Letter.pdf", feeds: "revenue, margins, ads, guidance" },
    { name: "Nielsen Gauge (streaming vs linear viewing shares)", url: "https://www.nielsen.com/news-center/2025/streaming-reaches-historic-tv-milestone-eclipses-combined-broadcast-and-cable-viewing-for-first-time/", feeds: "audience shares" },
    { name: "Disney FY2025 Q4 earnings (DTC operating income)", url: "https://thewaltdisneycompany.com/press-releases/the-walt-disney-company-reports-fourth-quarter-and-full-year-earnings-for-fiscal-2025/", feeds: "DTC profitability" },
    { name: "PwC Global Entertainment & Media Outlook", url: "https://www.pwc.com/gx/en/news-room/press-releases/2025/pwc-global-entertainment-media-outlook.html", feeds: "market size, growth" }
  ]
};
