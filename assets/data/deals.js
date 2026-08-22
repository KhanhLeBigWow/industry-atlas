/* Industry Atlas - the deal tape.
 * Landmark transactions with synopsis + analysis, tagged to desks,
 * industries, and company profiles. Facts from public coverage; figures
 * approximate with vintages. Sources: Mergermarket/press coverage 2026,
 * Jefferies Global Secondary Market Review 2025, Cornerstone mega-bankruptcy
 * data 2025, Renaissance Capital IPO stats Q2 2026.
 * type: ma | rx | ecm | dcm | pca */
window.ATLAS_DEALS = [

  /* ================= M&A ================= */
  { id: "spacex-xai", when: "2026", type: "ma", size: "$250B",
    headline: "SpaceX × xAI: the largest deal ever announced",
    industries: ["space", "ai"], companies: [],
    synopsis: "SpaceX agreed to combine with xAI in a stock transaction reported around $250B in value, uniting launch, the Starlink network, and frontier AI compute under one roof ahead of SpaceX's own listing.",
    analysis: "The deal reads as vertical integration of the 2 scarcest assets of the decade: orbital infrastructure and training compute. It also previews a new deal species: private mega-mergers priced in private-market equity, with the IPO as the exit for everyone." },

  { id: "up-ns", when: "2025", type: "ma", size: "$85B",
    headline: "Union Pacific × Norfolk Southern: the transcontinental bet",
    industries: ["rail"], companies: [],
    synopsis: "Union Pacific agreed to combine with Norfolk Southern at ~$85B, attempting the first true US transcontinental railroad and the largest rail deal ever.",
    analysis: "The whole thesis lives with one referee: the Surface Transportation Board. If approved, the remaining Class I railroads are forced pairs, and the century-old East-West structure of US rail ends: a reminder that in networks, M&A is regulation." },

  { id: "wbd-endgame", when: "2025-2026", type: "ma", size: "$80-110B",
    headline: "The Warner Bros. Discovery endgame: a contested carve-up",
    industries: ["media"], companies: ["netflix", "disney"],
    synopsis: "After announcing a split of studios/streaming from cable networks, WBD became 2026's prize: Paramount-Skydance pursued the whole company at a reported ~$110B enterprise value while Netflix bid ~$83B for the studio and streaming assets.",
    analysis: "The textbook demonstration that corporate perimeter IS strategy: the split created the auction. Whoever wins, declining linear cable gets financially quarantined, and content scale concentrates further: exactly what the media dossier's consolidation thesis predicted." },

  { id: "google-wiz", when: "2026 (closed)", type: "ma", size: "$32B",
    headline: "Google × Wiz: the largest pure-cybersecurity deal",
    industries: ["cybersecurity", "cloud"], companies: [],
    synopsis: "Google closed its ~$32B all-cash acquisition of cloud-security platform Wiz in March 2026, its largest deal ever, folding Wiz into Google Cloud.",
    analysis: "Cloud wars fought with security money: multi-cloud security was the last neutral ground, and Google paid ~45x ARR-class multiples to own it. Every hyperscaler M&A screen now starts with what Wiz's price implies for the rest of the platform-security shelf." },

  { id: "capone-discover", when: "2025 (closed)", type: "ma", size: "$35B",
    headline: "Capital One × Discover: buying the rails",
    industries: ["banking", "payments"], companies: ["capital-one", "visa", "mastercard"],
    synopsis: "Capital One completed its ~$35B all-stock acquisition of Discover, gaining not just a card book but Discover's payment network: the only network asset a US bank could realistically buy.",
    analysis: "The strategic prize was the 4th network: owning rails converts Capital One from a Visa/Mastercard customer into a vertical competitor. Watch debit routing economics and network volume migration: that is where the synergy case lives or dies." },

  { id: "anglo-teck", when: "2025-2026", type: "ma", size: "~$69B",
    headline: "Anglo American × Teck: the copper consolidation endgame",
    industries: ["mining", "copper-mining"], companies: ["bhp", "rio-tinto", "glencore"],
    synopsis: "Anglo American and Teck Resources agreed a merger of equals reported around $69B, creating a top-tier copper producer after BHP's earlier failed approaches for Anglo.",
    analysis: "Every diversified miner concluded the same thing: building copper takes 15 years, buying it takes 15 months. The deal prices the structural deficit the mining dossier flags, and leaves the remaining pure-play copper assets as the sector's most-hunted targets." },

  { id: "abbott-exact", when: "2025", type: "ma", size: "$21-23B",
    headline: "Abbott × Exact Sciences: diagnostics buys the screening franchise",
    industries: ["diagnostics", "medical-devices"], companies: [],
    synopsis: "Abbott agreed to acquire Exact Sciences (Cologuard, Oncotype) for ~$21B equity (~$23B EV), announced November 2025: the largest diagnostics deal in years.",
    analysis: "Cancer screening is diagnostics' subscription business: recurring tests, embedded reimbursement, and data moats. Abbott paid a strategic multiple for franchise durability: the comp every liquid-biopsy name now trades against." },

  /* ================= RX ================= */
  { id: "first-brands", when: "2025", type: "rx", size: "$10B+ debt",
    headline: "First Brands: the leveraged-loan market's cautionary tale",
    industries: ["automotive", "manufacturing"], companies: ["jefferies"],
    synopsis: "Auto-parts roll-up First Brands filed Chapter 11 in September 2025 after a ~$6.2B refinancing led by Jefferies stalled on quality-of-earnings questions; first-lien paper fell into the 30s within weeks, and an emergency bridge funded the filing.",
    analysis: "A masterclass in how fast cov-lite credit reprices when trust breaks: from par whispers to a fulcrum fight in one quarter. Also a live exam question on off-balance-sheet factoring: where the QoE bodies were buried." },

  { id: "wework-rx", when: "2023-2024", type: "rx", size: "$18B+ leases",
    headline: "WeWork: the lease-rejection restructuring",
    industries: ["real-estate"], companies: ["pjt-partners"],
    synopsis: "WeWork's Chapter 11 (PJT RSSG advised the debtor) used the Code's lease-rejection power to shed hundreds of office leases and cut billions of obligations, handing the company to its lenders.",
    analysis: "The clearest modern demonstration that Chapter 11 is a CONTRACT tool, not just a debt tool: the real liability was rent. Every over-stored retailer and office tenant restructuring since runs the same play." },

  { id: "joann", when: "2025", type: "rx", size: "800 stores",
    headline: "Joann: when the second filing becomes a liquidation",
    industries: ["retail"], companies: [],
    synopsis: "Fabric retailer Joann returned to Chapter 11 within a year of its first exit and flipped from reorganization to full liquidation, closing all ~800 stores.",
    analysis: "The Chapter 22 lesson: a balance-sheet fix cannot cure an operating-model problem. First filings buy time; second filings usually price the going-concern assumption itself: creditors chose certainty of liquidation value over another promise." },

  { id: "spirit-rx", when: "2024-2025", type: "rx", size: "$3.8B debt",
    headline: "Spirit Airlines: the prepackaged descent",
    industries: ["aviation"], companies: [],
    synopsis: "After the blocked JetBlue merger, Spirit filed a prepackaged Chapter 11 (November 2024) equitizing ~$800M of notes, then returned to court in 2025 as losses continued: the budget-carrier model itself in question.",
    analysis: "Shows both the power and the limit of the prepack: fast on the balance sheet, silent on the business model. Also the M&A-to-RX pipeline in one name: the antitrust loss WAS the credit event." },

  /* ================= ECM ================= */
  { id: "spacex-ipo", when: "2026", type: "ecm", size: "~$75B raise",
    headline: "SpaceX: the largest IPO in history",
    industries: ["space"], companies: [],
    synopsis: "SpaceX filed its S-1 in May 2026 and priced the largest IPO ever recorded, with Q2 2026 US IPO volume hitting a record ~$105B, roughly $75B of it SpaceX.",
    analysis: "A generational liquidity event that reprices the entire space economy off one order book, and the ultimate test of whether public markets will pay private-market multiples for capex-heavy frontier infrastructure." },

  { id: "medline-ipo", when: "2025", type: "ecm", size: "$6.3B raise",
    headline: "Medline: the sponsors' exit valve reopens",
    industries: ["medical-devices", "private-equity"], companies: ["blackstone"],
    synopsis: "Medline's $6.26B December 2025 IPO (backed by Blackstone, Carlyle, and H&F from their 2021 record LBO) priced at a ~$57B market cap: the largest US IPO since 2021.",
    analysis: "The deal DPI-starved LPs were waiting for: proof the IPO window can exit mega-LBOs again. Every 2021-vintage sponsor board meeting since has asked the same question: are we next?" },

  { id: "anthropic-ipo", when: "2026", type: "ecm", size: "filed",
    headline: "Anthropic files: AI revenue meets public-market discipline",
    industries: ["ai"], companies: [],
    synopsis: "Anthropic announced an IPO filing in mid-2026 on the heels of a reported $30B+ revenue run rate, queueing behind SpaceX in the record 2026 issuance calendar.",
    analysis: "The first true test of how public markets underwrite frontier-lab economics: torrential revenue growth against equally torrential compute costs. The order book's verdict becomes the discount rate for the whole AI capex complex." },

  /* ================= DCM ================= */
  { id: "x-debt", when: "2025", type: "dcm", size: "$13B",
    headline: "The X debt clearance: the hung bridge finally lands",
    industries: ["media", "banking"], companies: ["morgan-stanley"],
    synopsis: "Banks led by Morgan Stanley finally sold down the ~$13B of debt backing the 2022 X (Twitter) buyout, at prices near par after 2 years marked well below: aided by the xAI orbit repricing the equity story.",
    analysis: "The defining hung-debt saga of the cycle: underwriting risk is real, balance sheets carry it, and narrative changes (not amortization) did the rescuing. LevFin desks re-learned flex math on this one name." },

  { id: "finastra-uni", when: "2023", type: "dcm", size: "$5.3B",
    headline: "Finastra: private credit's record unitranche",
    industries: ["private-credit", "fintech"], companies: ["blue-owl", "ares"],
    synopsis: "A private-credit club including Blue Owl and Ares wrote a record ~$5.3B unitranche (with a PIK component) to refinance Vista's Finastra, displacing the syndicated market entirely.",
    analysis: "The moment the size ceiling broke: deals once impossible outside high yield now clear in one room, at speed, with no ratings. The syndicated-vs-private turf war's Fort Sumter." },

  /* ================= PCA / secondaries ================= */
  { id: "vista-csg-cv", when: "2025", type: "pca", size: "$5.6B",
    headline: "Vista's Cloud Software Group CV: the single-asset record",
    industries: ["private-equity", "saas"], companies: [],
    synopsis: "Vista Equity Partners closed a record ~$5.6B single-asset continuation vehicle around Cloud Software Group, letting LPs cash out or roll while Vista kept the asset and reset economics.",
    analysis: "The CV market's coming-of-age print: single assets at LBO scale, priced by lead secondaries buyers doing full buyout diligence. The fairness question (price vs the fund's own mark) is now a standing LP negotiation, not an afterthought." },

  { id: "ardian-asf9", when: "2025", type: "pca", size: "$30B fund",
    headline: "Ardian ASF IX: the biggest pool of secondaries capital ever",
    industries: ["private-equity", "asset-management"], companies: ["ardian"],
    synopsis: "Ardian closed Secondary Fund IX at ~$30B, the largest secondaries fund ever raised, as 2025 market volume hit a record ~$240B (up 48%).",
    analysis: "Dry powder at this scale changes market microstructure: $1B+ LP portfolios clear routinely (27 of them in 2025), discounts compress, and secondaries stop being a distress signal and become an allocation tool: the asset class institutionalizes." },

  { id: "crescent-cv", when: "2026", type: "pca", size: "$3.2B",
    headline: "Crescent Credit Solutions VII CV: continuation vehicles reach credit",
    industries: ["private-credit", "private-equity"], companies: [],
    synopsis: "A Pantheon-led group closed a ~$3.2B continuation vehicle for Crescent's credit fund in January 2026: the largest credit CV to date.",
    analysis: "The CV playbook jumping asset classes: if it works for buyout equity, it works for loan books. Private credit's own duration problem (funds end, loans do not) just found its liquidity valve." }
];
