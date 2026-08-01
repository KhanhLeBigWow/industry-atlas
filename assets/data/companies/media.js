/* Industry Atlas - media company profiles.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Sources: Netflix Q4 2025 shareholder letter (Jan 2026); Disney FY2025 Q4 earnings release
 * (Nov 2025); Spotify Q4 2025 update (Feb 2026) and Loud & Clear payout report (Jan 2026);
 * Netflix/WBD deal releases (Dec 2025 to Feb 2026); market caps as of Jul 2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "netflix": {
    id: "netflix", ticker: "NFLX", mcap: 305, name: "Netflix", full: "Netflix, Inc.", country: "US",
    industries: ["media"], role: "Streaming #1", founded: 1997, hq: "Los Gatos, California, USA",
    stats: [{ label: "Revenue", value: "$45.2B", note: "2025, +16%; 2026 guided to ~$51B" }, { label: "Operating margin", value: "~29.5%", note: "2025 vs 26.7% in 2024; 31.5% targeted for 2026" }, { label: "Paid members", value: "300M+", note: "last disclosed Dec 2024; quarterly counts since retired" }, { label: "Content budget", value: "~$20B", note: "2026 cash spend plan" }],
    model: [
      "Netflix sells one thing at planetary scale: a monthly subscription to the world's largest television service, 300M+ paying households (measured in viewers, closer to 700M people) across 190+ countries. Revenue = members x price, now with a fast-compounding ads layer on top. The flywheel is arithmetic: the biggest member base spreads a ~$20B content budget across the most subscribers, so Netflix outspends every rival in absolute terms while costing each household less. 2025 delivered $45.2B of revenue (+16%) at a ~29.5% operating margin, numbers legacy media cannot approach.",
      "The second act is monetizing attention twice: the cheap ad-supported tier (70M+ monthly actives by late 2024) built a ~$1.5B ads business in 2025 that is guided toward ~$3B in 2026, while live events (NFL Christmas games, weekly WWE) pull television's last premium ad dollars over the top. The discipline showed in 2026: Netflix agreed to buy Warner Bros. at an $82.7B enterprise value, then refused to chase Paramount Skydance's $31-per-share counterbid and walked away with a $2.8B termination fee instead of a bidding-war hangover."
    ],
    customers: [
      { who: "300M+ member households", note: "in 190+ countries; no single customer matters, churn is the only enemy" },
      { who: "Advertisers", note: "~$1.5B ads revenue in 2025, guided toward ~$3B in 2026; live sports anchor the upfronts" },
      { who: "Telco and pay-TV bundlers", note: "Comcast, Sky, Jio, and dozens more resell subscriptions inside their packages" },
      { who: "Consumer-device platforms", note: "the Netflix button on remotes worldwide is paid-for distribution in reverse" }
    ],
    suppliers: [
      { who: "Own studios in 50+ countries", note: "in-house production from Seoul to Madrid is the biggest content source" },
      { who: "Rival studios", note: "Sony's output deal plus licensed catalogs from Warner, NBCU, and others fill the library" },
      { who: "Sports and live rights owners", note: "WWE (10 years, ~$5B), NFL games, boxing events" },
      { who: "Amazon Web Services", note: "virtually all compute and storage runs on a competitor's cloud" },
      { who: "ISPs hosting Open Connect", note: "Netflix's own CDN boxes sit inside carrier networks worldwide" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "free cash flow ~$8B+ in 2025; content is fully self-funded" },
      { source: "Debt markets", note: "$14B+ raised in the cash-burn years; now investment grade" },
      { source: "WBD termination fee", note: "$2.8B collected in 2026 when Paramount Skydance outbid it for Warner Bros." }
    ],
    capitalOut: [
      { use: "Content cash spend ~$20B", note: "2026 plan, the largest programming budget in streaming" },
      { use: "Buybacks", note: "the primary return channel; no dividend" },
      { use: "Technology ~$3B / year", note: "recommendations, the ads stack, games, live-streaming infrastructure" },
      { use: "Live rights and events", note: "WWE, NFL, and stunt events that advertisers pay up for" }
    ],
    revenueMix: [
      { label: "US & Canada", pct: 44 }, { label: "Europe, Middle East & Africa", pct: 32 }, { label: "Asia-Pacific", pct: 13 }, { label: "Latin America", pct: 11 }
    ],
    moat: "The scale flywheel: the biggest subscriber base funds the biggest content budget at the lowest cost per member, steered by the deepest viewing dataset, distributed through a default-app habit on every screen on Earth.",
    risks: "Hit-cycle dependence and content cost inflation; a consolidated Paramount Skydance (Warner Bros., HBO Max) rival; saturated US and Canada market; the ads business must scale to justify the multiple.",
    competitors: ["disney", "Paramount Skydance (Warner Bros., HBO Max)", "Amazon Prime Video, Apple TV+", "YouTube (the real rival for hours viewed)"]
  },

  "disney": {
    id: "disney", ticker: "DIS", mcap: 173, name: "Walt Disney", full: "The Walt Disney Company", country: "US",
    industries: ["media"], role: "IP flywheel: studios, streaming, parks", founded: 1923, hq: "Burbank, California, USA",
    stats: [{ label: "Revenue", value: "$94.4B", note: "FY2025 (ended Sep 2025), +3%" }, { label: "Experiences OI", value: "$10.0B", note: "FY2025, a record" }, { label: "Streaming subs", value: "~196M", note: "Disney+ 112.6M + Hulu 83.7M at final disclosure, Nov 2025" }, { label: "Content spend", value: "~$23B", note: "annual, among the largest budgets in media" }],
    model: [
      "Disney is an IP flywheel with a balance sheet: characters born in film and television are re-monetized through theme parks, cruise ships, merchandise, games, and streaming, each window reinforcing the next. FY2025 revenue was $94.4B (+3%) across 3 segments: Entertainment ($42.5B), Experiences ($36.2B), and Sports ($17.7B). The profit engine is Experiences: parks, cruises, and consumer products earned a record $10.0B of operating income on physical assets no competitor can replicate, which is why a media company's most defensible business is real estate with castles on it.",
      "The decade's pivot is nearly complete: direct-to-consumer streaming swung from billions in losses to ~$1.3B of FY2025 operating income on $24.6B of revenue, guided toward ~$2.1B in FY2026, while ESPN's flagship streaming service (launched Aug 2025) moved the last jewel of cable over the top. Linear TV keeps shrinking underneath, so the model is a race: grow parks, cruises, and streaming profit faster than the cable bundle declines, with a $60B, 10-year Experiences buildout as the accelerant."
    ],
    customers: [
      { who: "Park and cruise guests", note: "Experiences: $36.2B revenue and record $10.0B operating income in FY2025" },
      { who: "Streaming households", note: "~196M Disney+ and Hulu subscriptions at final disclosure (Nov 2025)" },
      { who: "Advertisers", note: "ESPN live sports plus the ad tiers on Disney+ and Hulu" },
      { who: "Distributors and licensees", note: "cable affiliate fees still fund ESPN; toy, apparel, and game makers license the IP" }
    ],
    suppliers: [
      { who: "Sports leagues", note: "NFL, NBA (11-year, ~$2.6B/year deal from 2025), college football: rights inflation is ESPN's cost side" },
      { who: "Creative talent", note: "actors, directors, animators across Marvel, Pixar, Lucasfilm, and 20th Century" },
      { who: "Shipyards", note: "Meyer Werft and partners are building out a doubling cruise fleet" },
      { who: "Construction and ride engineering", note: "Imagineering's contractor network delivers the $60B parks decade" },
      { who: "Cloud and streaming tech vendors", note: "the BAMTech-heritage stack rides on third-party infrastructure" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "parks profits plus newly profitable streaming fund the machine" },
      { source: "Bond markets", note: "investment-grade debt, much of it legacy of the $71B Fox acquisition" },
      { source: "Advance bookings", note: "cruises and vacation packages collect cash long before the ship sails" }
    ],
    capitalOut: [
      { use: "Parks and cruise capex", note: "the $60B, 10-year Experiences expansion announced in 2023" },
      { use: "Content spend ~$23B", note: "films, series, and sports rights across the portfolio" },
      { use: "Dividends and buybacks", note: "payout restored in 2024; buybacks running $3B+ a year" },
      { use: "Hulu buyout completion", note: "paid Comcast a final ~$440M in 2025 to own 100% of Hulu" }
    ],
    revenueMix: [
      { label: "Entertainment (film, TV, streaming)", pct: 44 }, { label: "Experiences (parks, cruises, products)", pct: 38 }, { label: "Sports (ESPN)", pct: 18 }
    ],
    moat: "A century of owned IP (Marvel, Star Wars, Pixar, the princess canon) monetized through irreplicable physical parks: rivals can stream, but none can build Disneyland.",
    risks: "Structural linear TV decline; sports rights inflation; parks are macro-sensitive and capex-hungry; CEO succession after Bob Iger; franchise fatigue at the box office.",
    competitors: ["netflix", "Comcast NBCUniversal (Epic Universe, Peacock)", "Paramount Skydance (Warner Bros., HBO Max)", "Amazon (Prime Video, NBA rights)"]
  },

  "spotify": {
    id: "spotify", ticker: "SPOT", mcap: 99, name: "Spotify", full: "Spotify Technology S.A.", country: "SE",
    industries: ["media"], role: "Audio streaming #1", founded: 2006, hq: "Stockholm, Sweden",
    stats: [{ label: "Revenue", value: "€17.2B", note: "2025, +10%" }, { label: "Premium subs", value: "290M", note: "Q4 2025; 751M total monthly actives" }, { label: "Gross margin", value: "~33%", note: "Q4 2025, a record high" }, { label: "Royalties paid", value: "$11B", note: "to the music industry in 2025; $70B+ all time" }],
    model: [
      "Spotify is the world's largest audio subscription business: 751M monthly listeners and 290M paying subscribers (Q4 2025) generated €17.2B of 2025 revenue, split roughly 89% Premium subscriptions and 11% advertising. The economics are an aggregator's: about 70% of every euro flows back to rights holders as royalties ($11B paid to the music industry in 2025 alone), so gross margin only reached a record ~33% in late 2025 after a decade of grinding upward through marketplace tools, podcasts, and audiobooks that carry better unit economics than licensed music.",
      "Scale finally flipped the P&L: 2024 was the first profitable year in company history and 2025 delivered roughly $2.5B of operating profit. The playbook is price and product: periodic subscription increases that stick with minimal churn, an expanding bundle (audiobooks, AI DJ, video podcasts), and an ad stack monetizing 476M free listeners. Founder Daniel Ek moved up to executive chairman in 2026, handing daily operations to co-CEOs Alex Norstrom and Gustav Soderstrom: the posture of a compounding platform, not a turnaround."
    ],
    customers: [
      { who: "290M Premium subscribers", note: "~89% of revenue; family, duo, and student plans segment the pricing", share: "~89%" },
      { who: "Advertisers", note: "€1.8B in 2025 against 476M ad-supported listeners; podcasts and video lift the mix" },
      { who: "Labels and artists (marketplace)", note: "Discovery Mode and Marquee sell promotion back to the supply side" }
    ],
    suppliers: [
      { who: "Universal, Sony, Warner", note: "the 3 majors plus Merlin's indies license most of the catalog and renegotiate every cycle" },
      { who: "Music publishers", note: "songwriter and publishing royalties stack on top of recording rights" },
      { who: "Podcast and audiobook creators", note: "from The Joe Rogan Experience to the big publishing houses' audiobook catalogs" },
      { who: "Google Cloud", note: "the entire backend runs on GCP" },
      { who: "Apple and Google app stores", note: "distribution gatekeepers and long-running fee antagonists" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "free cash flow above €2B a year since 2024" },
      { source: "Direct listing (2018)", note: "went public without raising new money; VC and convertibles funded the burn years" },
      { source: "Exchangeable notes (2021)", note: "$1.5B raised at a 0% coupon in the cheap-money era" }
    ],
    capitalOut: [
      { use: "Royalties", note: "$11B to the music industry in 2025, the largest annual payment from any retailer in history" },
      { use: "R&D and product", note: "recommendations, AI DJ, the ads stack, audiobooks" },
      { use: "Buybacks", note: "a $1B program begun in 2021; cash now piles up faster than it returns" },
      { use: "Content deals", note: "the $1B+ podcast splurge (Gimlet, The Ringer, Rogan), since rationalized" }
    ],
    revenueMix: [
      { label: "Premium subscriptions", pct: 89 }, { label: "Ad-supported (music, podcasts, video)", pct: 11 }
    ],
    moat: "Habit and personalization on a non-exclusive catalog: playlists, taste graphs, and ubiquity across thousands of device types make switching feel like losing a decade of musical memory.",
    risks: "3 majors control the catalog and reprice it every cycle; gross margin structurally capped near the low 30s%; Apple, Amazon, and YouTube bundle music into larger ecosystems; AI-generated music muddies royalty pools.",
    competitors: ["YouTube Music (Alphabet)", "Apple Music", "Amazon Music", "Tencent Music (China)"]
  }

});
