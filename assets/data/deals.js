/* Industry Atlas - the deal tape (v2: full write-ups + parties).
 * Landmark transactions with background, structure, outcome, analysis, and
 * the advisor/party lineup. Facts from public coverage and filings; figures
 * approximate with vintages; advisor lineups from proxies/press where
 * public, flagged "not publicly detailed" where they are not.
 * type: ma | rx | ecm | dcm | pca */
window.ATLAS_DEALS = [

  /* ================= M&A ================= */
  { id: "google-wiz", when: "2025-2026", type: "ma", size: "$32B",
    headline: "Google × Wiz: the largest pure-cybersecurity deal ever",
    industries: ["cybersecurity", "cloud"], companies: ["goldman-sachs"],
    synopsis: "Google agreed in March 2025 to acquire cloud-security platform Wiz for ~$32B in cash: its largest acquisition ever and the biggest sale of a venture-backed private company on record: closing in early 2026 after a year under the antitrust microscope.",
    background: "Wiz went from founding (2020) to ~$500M ARR faster than any software company before it, by scanning cloud environments agentlessly across AWS, Azure, and GCP. Google had already tried once: a reported ~$23B approach in 2024 died on deal-certainty fears, and Wiz chose an IPO path instead: which built the leverage for round 2 at $32B.",
    structure: "All cash, ~$32B, with a reported reverse termination fee in the multi-billion range: the price of asking a founder-led company to sit through an extended regulatory review. Wiz stays multi-cloud by commitment: the strategic tension the remedies debate circled.",
    outcome: "Closed March 2026 into Google Cloud. The multiple (roughly 45-60x forward ARR by street estimates) instantly re-rated every platform-security asset on the shelf.",
    analysis: "Cloud wars fought with security money: multi-cloud security was the last neutral ground, and Google paid a generational multiple to own it. It also rewrote founder playbooks: Wiz's walk-away in 2024 ADDED ~$9B in a year: deal certainty has a price, and so does patience.",
    parties: [
      { side: "Buyer", who: "Google (Alphabet)", role: "acquirer; BofA Securities as financial advisor" },
      { side: "Target", who: "Wiz", role: "Goldman Sachs lead financial advisor; Fenwick lead counsel" },
      { side: "Sellers", who: "Index, Sequoia, Insight, Cyberstarts", role: "the VC cap table: the largest venture exit ever" }
    ] },

  { id: "capone-discover", when: "2024-2025 (closed)", type: "ma", size: "$35.3B",
    headline: "Capital One × Discover: buying the rails, not just the book",
    industries: ["banking", "payments"], companies: ["capital-one", "visa", "mastercard", "morgan-stanley", "pjt-partners"],
    synopsis: "Capital One's ~$35.3B all-stock acquisition of Discover closed in May 2025 after a 15-month regulatory gauntlet, uniting 2 of America's largest card lenders and: the real prize: handing Capital One the only payments network a US bank could realistically buy.",
    background: "Capital One had spent 2 decades as a top-tier card issuer paying tolls on Visa and Mastercard's rails. Discover owned the 4th network (plus PULSE debit) but under-invested in it; its compliance stumbles and lagging valuation created the opening.",
    structure: "All stock at a ~26% premium: Discover holders received 1.0192 Capital One shares each. Stock consideration shared the regulatory-timeline risk with the sellers, and the exchange ratio held through a year of political noise about the combined credit-card share.",
    outcome: "Closed May 2025 with commitments on network investment. Integration now runs through the classic sequence: debit volume migrates to the owned network first (no interchange cap arbitrage lost), credit later as brand and acceptance build.",
    analysis: "Vertical integration in consumer finance: owning rails converts a toll-payer into a toll-collector, the exact economics the payments dossier maps. The measure of success is simple: how many billions of volume move from Visa/Mastercard rails to Discover's: watch that line, not the EPS accretion.",
    parties: [
      { side: "Buyer", who: "Capital One", role: "acquirer; Centerview Partners financial advisor; Wachtell counsel" },
      { side: "Target", who: "Discover Financial", role: "PJT Partners + Morgan Stanley financial advisors; Sullivan & Cromwell counsel" },
      { side: "Referees", who: "Fed + OCC", role: "approvals granted 2025 with community-investment commitments" }
    ] },

  { id: "up-ns", when: "2025-pending", type: "ma", size: "$85B",
    headline: "Union Pacific × Norfolk Southern: the transcontinental bet",
    industries: ["rail"], companies: ["morgan-stanley"],
    synopsis: "Union Pacific agreed in 2025 to acquire Norfolk Southern for ~$85B in the largest rail deal ever proposed: a bid to create the first true US transcontinental railroad, now living or dying at the Surface Transportation Board.",
    background: "US freight rail has been frozen as a 6-railroad oligopoly since the 1990s merger moratorium: 2 western systems (UP, BNSF), 2 eastern (NS, CSX), 2 Canadian-anchored. Every transcontinental shipment interchanges mid-country, adding days. Precision-scheduled railroading squeezed costs for a decade; the next efficiency frontier was always single-line service.",
    structure: "Cash-and-stock at a premium to NS's unaffected price, with the entire timeline hostage to an STB review under the 2001 'enhanced competition' merger rules: rules written precisely to make this deal hard, never yet tested at this scale.",
    outcome: "Pending. Shippers, unions, and Amtrak all have standing to extract conditions; a CSX-BNSF response combination is the sector's live sequel question either way.",
    analysis: "In network industries, M&A IS regulation: the model that matters is not accretion math but the probability-weighted map of remedies. If approved, the remaining Class I railroads are forced pairs and a century of East-West structure ends: which is exactly why the STB may not allow it.",
    parties: [
      { side: "Buyer", who: "Union Pacific", role: "Morgan Stanley + Wells Fargo financial advisors" },
      { side: "Target", who: "Norfolk Southern", role: "BofA Securities exclusive financial advisor" },
      { side: "Referee", who: "Surface Transportation Board", role: "the whole deal, in one regulator's hands" }
    ] },

  { id: "wbd-endgame", when: "2025-2026", type: "ma", size: "$80-110B",
    headline: "The Warner Bros. Discovery endgame: a contested carve-up",
    industries: ["media"], companies: ["netflix", "disney"],
    synopsis: "After WBD announced it would split studios-and-streaming from declining cable networks, the company became 2026's most contested prize: Paramount-Skydance pursued the whole company at a reported ~$110B enterprise value while Netflix bid ~$83B for the studio and streaming assets alone.",
    background: "The 2022 WarnerMedia-Discovery merger buckled under ~$40B of debt and cable's secular decline. Announcing the split repriced the parts: a growth business (HBO Max, the studio) shackled to a melting one (linear networks) is worth more separated: and immediately shoppable.",
    structure: "The contest itself is the structure: a whole-company bid (Paramount-Skydance, backed by Ellison-family capital) against an asset bid (Netflix, for studios and streaming, leaving the networks behind). Which perimeter wins decides who inherits the debt stack and the melting assets.",
    outcome: "Unresolved through 2026: board process, financing questions, and the political dimension of consolidating Hollywood all still moving.",
    analysis: "The textbook demonstration that corporate perimeter IS strategy: the split created the auction. Either outcome concentrates content scale further and financially quarantines linear cable: the media dossier's consolidation endgame, playing out in real time.",
    parties: [
      { side: "Target", who: "Warner Bros. Discovery", role: "board process; advisor lineup evolving with the contest" },
      { side: "Bidder", who: "Paramount-Skydance (Ellison)", role: "whole-company pursuit, ~$110B EV reported" },
      { side: "Bidder", who: "Netflix", role: "~$83B reported for studios + streaming assets" }
    ] },

  { id: "anglo-teck", when: "2025-2026", type: "ma", size: "~$69B",
    headline: "Anglo American × Teck: the copper consolidation endgame",
    industries: ["mining", "copper-mining"], companies: ["bhp", "rio-tinto", "glencore"],
    synopsis: "Anglo American and Teck Resources agreed a merger of equals reported around $69B, creating a top-tier global copper producer: the culminating move of a 3-year consolidation chase that began with BHP's failed ~$49B pursuit of Anglo.",
    background: "Every diversified miner ran the same math: copper demand compounds with grids, EVs, and data centers while new mines take 15+ years to permit and build. BHP's 2024 approaches forced Anglo to slim down (platinum, diamonds, coal exits) into exactly the copper-weighted shape that made it marriageable to Teck: itself fresh from fending off Glencore.",
    structure: "Merger of equals mechanics: stock-for-stock ratio, shared governance, dual heritage listings: the structure that lets 2 boards call a takeover a partnership. Canadian regulatory sensitivities (Teck's strategic-asset status) shaped everything.",
    outcome: "Shareholder votes passed in late 2025; a combined ~1.2Mt-plus copper producer takes shape through 2026 integration.",
    analysis: "Buying copper takes 15 months; building it takes 15 years: this deal is that sentence, priced. It also validates the mining dossier's core thesis: the structural deficit gets resolved by consolidation first, supply later: leaving the remaining pure-play copper assets as the sector's most-hunted targets.",
    parties: [
      { side: "Merging", who: "Anglo American", role: "advisor lineup not publicly detailed at announcement" },
      { side: "Merging", who: "Teck Resources", role: "advisor lineup not publicly detailed at announcement" },
      { side: "Watching", who: "BHP, Glencore, Rio", role: "the spurned suitors whose approaches shaped both companies" }
    ] },

  { id: "abbott-exact", when: "2025", type: "ma", size: "$21-23B",
    headline: "Abbott × Exact Sciences: diagnostics buys the screening franchise",
    industries: ["diagnostics", "medical-devices"], companies: [],
    synopsis: "Abbott agreed in November 2025 to acquire Exact Sciences: maker of Cologuard colorectal screening and Oncotype oncology tests: for ~$21B in equity (~$23B enterprise value), the largest diagnostics acquisition in years.",
    background: "Exact built the category-defining at-home cancer screening franchise (Cologuard) with recurring, guideline-embedded, reimbursed volumes: but carried growth-stock economics into a rate environment that stopped paying for unprofitable growth. Abbott, a diagnostics giant post-COVID, had the distribution and the balance sheet.",
    structure: "Cash acquisition at a substantial premium to the unaffected price: strategic-buyer math where cost and channel synergies (Abbott's global diagnostics footprint) justify what standalone DCFs could not.",
    outcome: "Pending customary approvals into 2026; the comp every liquid-biopsy and screening name now trades against.",
    analysis: "Cancer screening is diagnostics' subscription business: recurring tests, embedded reimbursement, data moats. The deal prices franchise durability over near-term margins: exactly the lens the diagnostics dossier says to use: and signals that scaled strategics will buy the category rather than rebuild it.",
    parties: [
      { side: "Buyer", who: "Abbott", role: "strategic acquirer" },
      { side: "Target", who: "Exact Sciences", role: "advisor lineup not publicly detailed here: check the merger proxy" }
    ] },

  { id: "spacex-xai", when: "2026", type: "ma", size: "~$250B",
    headline: "SpaceX × xAI: the largest combination ever announced",
    industries: ["space", "ai"], companies: [],
    synopsis: "SpaceX agreed to combine with xAI in a stock transaction reported around $250B: the largest M&A transaction on record: uniting launch, the Starlink constellation, and frontier AI compute ahead of SpaceX's own listing.",
    background: "Both companies share a controlling founder, massive private valuations, and complementary scarcities: xAI needs power, connectivity, and capital; SpaceX generates Starlink cash flow and owns the orbital layer every AI-era communication rides. The combination formalizes an ecosystem that already shared resources.",
    structure: "Private stock-for-stock combination: valuations set by boards and recent funding rounds rather than public markets, with related-party governance (one founder on both sides) the central fairness question. The subsequent IPO effectively asks public markets to ratify the exchange ratio after the fact.",
    outcome: "Combined entity proceeded toward the record 2026 listing; the S-1's related-party disclosures became required reading.",
    analysis: "Vertical integration of the decade's 2 scarcest assets: orbital infrastructure and training compute. It also previews a new deal species: private mega-M&A priced in private-market paper, governance-reviewed only at IPO: fairness opinions have never mattered more, or arrived later.",
    parties: [
      { side: "Combining", who: "SpaceX / xAI", role: "related-party combination; independent committees + advisors per the S-1" },
      { side: "Referee", who: "Public markets at IPO", role: "the after-the-fact fairness vote" }
    ] },

  /* ================= RX ================= */
  { id: "first-brands", when: "2025", type: "rx", size: "$10B+ debt",
    headline: "First Brands: the leveraged-loan market's cautionary tale",
    industries: ["automotive", "manufacturing"], companies: ["jefferies"],
    synopsis: "Auto-parts roll-up First Brands filed Chapter 11 in September 2025 after a ~$6.2B refinancing stalled on quality-of-earnings questions: first-lien paper collapsed from near par into the 30s within weeks, and an emergency bridge funded the filing: the fastest large-cap credit unraveling of the cycle.",
    background: "First Brands assembled dozens of aftermarket auto-parts businesses on leveraged-loan financing through the cov-lite era, leaning heavily on off-balance-sheet factoring and supply-chain finance that flattered reported leverage. Tariff costs and rising debt service squeezed 2025 cash flow just as the refinancing window opened.",
    structure: "The refinancing-turned-restructuring: a Jefferies-led ~$6.2B loan package paused for an independent quality-of-earnings review; disclosure of the factoring stack spooked the loan book; pricing gapped; and within a quarter the company needed DIP financing and court protection while creditor groups organized around the liens.",
    outcome: "Chapter 11 with the capital structure contested: recoveries turning on how the factoring and supply-chain-finance claims rank against the term loans: a docket the whole loan market is reading for precedent.",
    analysis: "A masterclass in how fast cov-lite credit reprices when trust breaks: no covenant tripped: the DISCLOSURE did it. The enduring lesson for every credit desk: off-balance-sheet working-capital finance is leverage, whatever the balance sheet says, and QoE reviews exist because someone once needed one this badly.",
    parties: [
      { side: "Company", who: "First Brands", role: "debtor; Lazard-class RX advisor reported alongside turnaround counsel" },
      { side: "Financing", who: "Jefferies", role: "led the paused ~$6.2B refinancing that exposed the stack" },
      { side: "Creditors", who: "Term-loan groups + factoring counterparties", role: "organized with separate advisors; the ranking fight" }
    ] },

  { id: "wework-rx", when: "2023-2024", type: "rx", size: "$18B+ leases",
    headline: "WeWork: the lease-rejection restructuring",
    industries: ["real-estate"], companies: ["pjt-partners"],
    synopsis: "WeWork's Chapter 11 used the Bankruptcy Code's lease-rejection power to shed hundreds of office leases and cut billions in obligations, converting its lenders into owners and proving that the Code's most powerful tool is the contract override, not the debt haircut.",
    background: "WeWork's model: long-term lease liabilities funding short-term memberships: was a duration mismatch wearing a growth story. Post-SoftBank rescue and SPAC listing, the office downturn made the ~$18B lease book the terminal problem no out-of-court fix could reach, because landlords, not lenders, held the claims.",
    structure: "Chapter 11 filed November 2023 with PJT RSSG advising the debtor: a restructuring-support agreement with secured noteholders, systematic lease rejections and renegotiations building by building, and debt equitized so the reorganized company emerged owned by its creditors with a fraction of its former footprint.",
    outcome: "Emerged mid-2024 as a smaller private company with a survivable lease book: equity wiped, SoftBank's billions largely gone, landlords holding rejection-damage claims capped by the Code.",
    analysis: "The clearest modern demonstration that Chapter 11 is a CONTRACT tool: the real liability was rent, and only a filing could rewrite it at scale. Every over-leased retailer and office tenant since has run the same play: the case is now the template, and the reason landlords underwrite tenant credit like lenders.",
    parties: [
      { side: "Company", who: "WeWork", role: "debtor; PJT Partners (RSSG) financial advisor; Kirkland & Ellis counsel" },
      { side: "Creditors", who: "SoftBank + secured noteholders", role: "RSA parties who became the owners" },
      { side: "Counterparties", who: "Hundreds of landlords", role: "lease rejections and renegotiations: the case's real battlefield" }
    ] },

  { id: "joann", when: "2024-2025", type: "rx", size: "800 stores",
    headline: "Joann: when the second filing becomes a liquidation",
    industries: ["retail"], companies: [],
    synopsis: "Fabric-and-crafts retailer Joann exited a fast 2024 Chapter 11 with its balance sheet lightened: and was back in court within a year, this time flipping from reorganization to full liquidation, closing all ~800 stores in 2025.",
    background: "The first case treated the symptom (debt) and inherited the disease: declining store traffic, thin margins, and vendor terms that never recovered. Post-emergence, trade credit stayed tight: suppliers had been burned once: which starved inventory exactly when sales needed it.",
    structure: "Chapter 22 (the street's name for the second trip) with no credible reorganization bid: the estate ran a 363-style process where liquidators' guaranteed recoveries beat any going-concern offer, so the creditors chose certainty and the stores went to going-out-of-business sales.",
    outcome: "Full wind-down: 800+ stores closed, the brand and IP sold separately, employees and landlords absorbing the tail.",
    analysis: "The Chapter 22 lesson every RX analyst memorizes: a balance-sheet fix cannot cure an operating-model problem, and the second filing usually prices the going-concern assumption itself. Watch trade-credit behavior post-emergence: vendors vote on reorganizations daily, in payment terms.",
    parties: [
      { side: "Company", who: "Joann", role: "debtor (both cases); advisor lineups per the dockets" },
      { side: "Creditors", who: "Term lenders + trade vendors", role: "chose liquidation certainty over a second promise" },
      { side: "Buyers", who: "Liquidators + IP bidders", role: "GOB sales and the brand's separate life" }
    ] },

  { id: "spirit-rx", when: "2024-2025", type: "rx", size: "$3.8B debt",
    headline: "Spirit Airlines: the prepackaged descent",
    industries: ["aviation"], companies: [],
    synopsis: "After courts blocked its JetBlue merger on antitrust grounds, Spirit filed a prepackaged Chapter 11 in November 2024: equitizing notes in weeks: then returned to restructuring in 2025 as losses persisted: the budget-carrier model itself now the question.",
    background: "Spirit's ultra-low-cost model was pincered: post-COVID cost inflation (labor, especially) hit ULCCs hardest while big carriers' premium cabins absorbed the profitable demand. The blocked merger removed the exit; the GTF engine recalls grounded aircraft; the maturity wall did the rest.",
    structure: "Round 1: a true prepack: votes solicited before filing, ~$800M of notes equitized, existing equity extinguished, in-and-out of court in under 4 months. Round 2 (2025): back into restructuring as operations kept burning: deeper cuts, fleet and network shrinkage on the table.",
    outcome: "A smaller Spirit persisting through 2026 restructuring, with the industry watching whether standalone ULCC economics still exist in the US market.",
    analysis: "Shows the prepack's power and its limit: fast on the balance sheet, silent on the business model. And it is the M&A-to-RX pipeline in one name: the antitrust loss WAS the credit event: deal lawyers and distressed funds read the same court calendar.",
    parties: [
      { side: "Company", who: "Spirit Airlines", role: "debtor; RX advisors per the docket" },
      { side: "Creditors", who: "Convertible + secured noteholders", role: "prepack RSA parties, equitized" },
      { side: "Prologue", who: "JetBlue / DOJ", role: "the blocked merger that opened the trapdoor" }
    ] },

  /* ================= ECM ================= */
  { id: "spacex-ipo", when: "2026", type: "ecm", size: "~$75B raise",
    headline: "SpaceX: the largest IPO in history",
    industries: ["space"], companies: [],
    synopsis: "SpaceX filed its S-1 in May 2026 and priced the largest IPO ever: roughly $75B raised into a record quarter where US IPO volume hit ~$105B: a listing that reprices the entire space economy off one order book.",
    background: "Two decades of private funding built launch dominance (roughly 9 in 10 US orbital launches) and Starlink's subscription machine (revenue reported past $10B): the rare frontier-infrastructure company arriving at the public market already cash-generative, and carrying the xAI combination on its cap table.",
    structure: "A multi-tranche bookbuild at historic scale: anchor allocations to sovereigns and the megacap long-onlys, index inclusion mechanics planned from day 1, and governance disclosures (founder control, related-party history with xAI) doing as much pricing work as the financials.",
    outcome: "Priced into the record Q2 2026 window; the aftermarket became the benchmark for every private mega-cap eyeing the exit (and the yardstick Anthropic's own filing queued behind).",
    analysis: "The test case for whether public markets pay private-market multiples for capex-heavy frontier infrastructure: at this size. Allocation, not valuation, was the scarce resource: a reminder that in ECM the order book is the product, and index math guarantees the aftermarket bid.",
    parties: [
      { side: "Issuer", who: "SpaceX", role: "primary + secondary mix per the S-1" },
      { side: "Syndicate", who: "Bookrunner group", role: "the megabank syndicate per the prospectus cover" },
      { side: "Buy side", who: "Sovereigns, long-onlys, index funds", role: "anchors first, index flows after inclusion" }
    ] },

  { id: "medline-ipo", when: "2025", type: "ecm", size: "$6.3B raise",
    headline: "Medline: the sponsors' exit valve reopens",
    industries: ["medical-devices", "private-equity"], companies: ["blackstone"],
    synopsis: "Medline's $6.26B December 2025 IPO: the largest US listing since Rivian in 2021: priced the medical-supplies giant near a $57B market cap and handed Blackstone, Carlyle, and Hellman & Friedman the public-market exit their record 2021 LBO had been waiting for.",
    background: "The 2021 Medline buyout (~$34B including debt) was the largest LBO since the crisis era: pristine asset, huge check, top-of-market multiple. Four years of DPI drought later, LPs needed distributions and the sponsors needed the deal that proved mega-LBOs could still exit.",
    structure: "A primary-light, secondary-heavy IPO: proceeds substantially to deleveraging and sponsor monetization, priced off medical-distribution comps with a scale premium, with the sponsors staying in size post-listing for the sell-down sequence (lockups, then blocks).",
    outcome: "Priced and traded well enough to reopen the sponsor-exit calendar: the follow-on drip and block trades through 2026 became the real monetization; every 2021-vintage board asked the same question the next morning.",
    analysis: "The deal DPI-starved private equity was praying for: proof the IPO window exits mega-LBOs again. ECM lesson inside it: mega-sponsor IPOs are processes, not events: the listing is chapter 1 of a 3-year distribution, and the aftermarket's health prices every later chapter.",
    parties: [
      { side: "Issuer", who: "Medline", role: "the largest US IPO since 2021" },
      { side: "Sellers", who: "Blackstone, Carlyle, H&F", role: "the 2021 LBO consortium monetizing" },
      { side: "Syndicate", who: "Goldman Sachs, Morgan Stanley, J.P. Morgan among leads", role: "bookrunners per the prospectus" }
    ] },

  { id: "anthropic-ipo", when: "2026", type: "ecm", size: "filed",
    headline: "Anthropic files: AI revenue meets public-market discipline",
    industries: ["ai"], companies: [],
    synopsis: "Anthropic announced an IPO filing in mid-2026 on the heels of a reported $30B+ revenue run rate: queueing the first frontier-AI-lab listing behind SpaceX in the record 2026 calendar, and handing public investors their first audited look at lab economics.",
    background: "Frontier labs grew revenue faster than any software cohort in history while spending comparably epic sums on compute: capital raised privately in ever-larger rounds. A listing trades that private patience for permanent capital, currency for compute deals, and the scrutiny that comes with both.",
    structure: "Filing-stage: the questions that will price it are already clear: gross margin after compute, the durability of enterprise API revenue, cloud-partner concentration, and governance structures (long-term benefit oversight) that public investors have never underwritten before.",
    outcome: "In registration: the order book's verdict pending: and destined to become the discount rate applied to the entire AI capex complex.",
    analysis: "The first true test of how public markets underwrite frontier-lab economics: torrential growth against torrential compute costs. Whatever multiple prints becomes the sector's reference asset: every AI-adjacent valuation argument thereafter starts with 'well, the lab trades at...'.",
    parties: [
      { side: "Issuer", who: "Anthropic", role: "S-1 stage; bookrunners per the eventual cover" },
      { side: "Stakeholders", who: "Cloud partners + strategic investors", role: "concentration disclosures the book will price" }
    ] },

  /* ================= DCM ================= */
  { id: "x-debt", when: "2025", type: "dcm", size: "$13B",
    headline: "The X debt clearance: the hung bridge finally lands",
    industries: ["media", "banking"], companies: ["morgan-stanley"],
    synopsis: "The ~$13B of buyout debt backing the 2022 X (Twitter) acquisition: hung on 7 banks' balance sheets for over 2 years: finally cleared in 2025 at prices near par, after marks that once implied billions in losses: rescued by a changed narrative, not by amortization.",
    background: "The banks (Morgan Stanley leading, with BofA, Barclays, MUFG, BNP, Mizuho, SocGen) underwrote in April 2022's market and funded into October 2022's: the classic bridge trap. Ad-revenue collapse post-acquisition made syndication impossible at any civilized price, so the debt sat: the largest hung position since the financial crisis.",
    structure: "Staged sell-downs through 2025: fixed-rate tranches first into a hot credit market, then the remainder as X's integration into the xAI orbit re-rated the equity story beneath the debt. Pricing moved from indicated 60s to mid-90s to par-adjacent across the sequence.",
    outcome: "Substantially cleared with far smaller losses than the marks once implied: a balance-sheet saga ending in relief rather than write-off.",
    analysis: "The defining hung-debt story of the cycle, and the honest lesson is uncomfortable: the banks were saved by narrative beta, not credit work. Every LevFin commitment committee now war-games this name: flex terms, market-out clauses, and the true cost of funding into a falling market.",
    parties: [
      { side: "Underwriters", who: "Morgan Stanley (lead) + 6 banks", role: "the hung syndicate: MS, BofA, Barclays, MUFG, BNP, Mizuho, SocGen" },
      { side: "Borrower", who: "X (Twitter)", role: "the 2022 LBO's debt stack" },
      { side: "Buyers", who: "Credit funds + CLOs", role: "took the paper as the story turned" }
    ] },

  { id: "finastra-uni", when: "2023", type: "dcm", size: "$5.3B",
    headline: "Finastra: private credit's record unitranche",
    industries: ["private-credit", "fintech"], companies: ["blue-owl", "ares", "oaktree"],
    synopsis: "A private-credit club wrote a record ~$5.3B unitranche (including a PIK-toggle slice) to refinance Vista's Finastra in 2023: at the time the largest direct loan ever: displacing the syndicated market from a deal it once owned.",
    background: "Finastra's existing syndicated stack faced a wall just as banks retrenched from underwriting; the software company's recurring revenue was exactly the collateral private credit wanted to prove scale on. A club of the largest direct lenders (Blue Owl and Ares among the names reported) assembled the record.",
    structure: "Single-tranche unitranche replacing first- and second-lien debt: SOFR plus a wide spread, an OID, and a partial PIK toggle giving the borrower breathing room: negotiated in weeks, no ratings, no roadshow, no flex risk.",
    outcome: "Closed and seasoned: the proof-of-scale that every larger private-credit deal since (and there have been many) cites as precedent.",
    analysis: "The size ceiling broke here: deals once impossible outside high-yield now clear in one room, at speed, priced for certainty. The syndicated-vs-private turf war's Fort Sumter: and the moment CLO managers started studying what they could no longer buy.",
    parties: [
      { side: "Borrower", who: "Finastra (Vista portfolio)", role: "refinancing the maturity wall" },
      { side: "Lenders", who: "Blue Owl, Ares + club", role: "the record direct-lending group" },
      { side: "Sponsor", who: "Vista Equity Partners", role: "kept the asset; paid for certainty" }
    ] },

  /* ================= PCA / secondaries ================= */
  { id: "vista-csg-cv", when: "2025", type: "pca", size: "$5.6B",
    headline: "Vista's Cloud Software Group CV: the single-asset record",
    industries: ["private-equity", "saas"], companies: [],
    synopsis: "Vista Equity Partners closed a record ~$5.6B single-asset continuation vehicle around Cloud Software Group (the Citrix-Tibco combination), giving existing LPs a cash-or-roll election while Vista kept its prize asset and reset the economics: the largest single-asset CV ever completed.",
    background: "CSG was too big to sell into a soft strategic market and too good (in Vista's view) to exit cheaply: the exact profile CVs were invented for. Lead secondaries buyers underwrote it like a fresh buyout: forward plan, leverage, exit path: because economically that is what a CV is.",
    structure: "The 3-party architecture at record scale: rolling LPs (continue with reset terms), selling LPs (cash at the negotiated price vs NAV), and new lead investors pricing the asset: with Vista's crystallized-then-reset carry and its own rolled commitment as the alignment evidence, and a fairness process wrapping the price.",
    outcome: "Closed 2025 as the market's reference single-asset print in a record ~$106B CV year: 83% of top-100 sponsors have now done at least one.",
    analysis: "The CV market's coming-of-age: single assets at LBO scale, full buyout diligence, institutional lead checks. The standing tension it showcased: the GP sits on both sides of the price: is why election disclosures and fairness opinions are now the negotiation, not the formality.",
    parties: [
      { side: "Sponsor", who: "Vista Equity Partners", role: "GP on both sides: seller (old fund) and manager (CV)" },
      { side: "New money", who: "Lead secondaries investors", role: "priced the asset; underwrote like a buyout" },
      { side: "Existing LPs", who: "Fund investors", role: "cash-or-roll election, fairness process attached" }
    ] },

  { id: "ardian-asf9", when: "2025", type: "pca", size: "$30B fund",
    headline: "Ardian ASF IX: the biggest pool of secondaries capital ever",
    industries: ["private-equity", "asset-management"], companies: ["ardian"],
    synopsis: "Ardian closed Secondary Fund IX at ~$30B: the largest secondaries fund ever raised: as 2025 market volume hit a record ~$240B (up 48%), with 27 LP portfolio sales above $1B and the largest single LP deal clearing $5B+.",
    background: "A decade of distributions running below commitments left institutions overweight private equity with underweight liquidity: the denominator effect became a permanent seller. Meanwhile only a handful of buyers can price billion-dollar portfolios in one bite: scale begets flow begets data begets scale.",
    structure: "A commingled mega-fund with co-invest sleeves: deployment split across LP-led portfolio purchases (priced fund-by-fund off rolled NAVs and pacing models) and selective GP-led participation, with deferred-payment structures as the standard tool for closing bid-ask gaps.",
    outcome: "Closed 2025 into the record market; Jefferies' review projected the first half of 2026 alone would clear $100B on backlog.",
    analysis: "Dry powder at this scale changes market microstructure: discounts compress, mega-portfolios clear routinely, and secondaries complete their journey from distress signal to allocation tool. For sellers the message is liberating; for buyers, the alpha migrates from access to underwriting.",
    parties: [
      { side: "Manager", who: "Ardian", role: "the record fund; the market's largest buyer" },
      { side: "LPs (fund)", who: "460+ institutions", role: "the capital behind the checkbook" },
      { side: "Counterparties", who: "Selling LPs worldwide", role: "pensions and sovereigns manufacturing liquidity" }
    ] },

  { id: "crescent-cv", when: "2026", type: "pca", size: "$3.2B",
    headline: "Crescent Credit Solutions VII CV: continuation vehicles reach credit",
    industries: ["private-credit", "private-equity"], companies: [],
    synopsis: "A Pantheon-led investor group closed a ~$3.2B continuation vehicle for Crescent Capital's credit fund in January 2026: the largest credit CV completed to date, extending the GP-led playbook from buyout equity into loan portfolios.",
    background: "Private credit inherited private equity's structural mismatch: funds end, but loan books and borrower relationships do not. As the asset class matured past $2T, its first generation of vehicles hit term walls holding perfectly good assets: the exact conditions that birthed equity CVs a decade earlier.",
    structure: "Portfolio-level CV mechanics adapted to credit: the loan book rolled into a new vehicle at a negotiated price, existing LPs electing cash or continuation, new lead capital (Pantheon and others) underwriting default and spread assumptions rather than EBITDA growth: with yield, not multiple expansion, as the return engine.",
    outcome: "Closed as the category's record and template: credit secondaries desks at every platform immediately began pipelines behind it.",
    analysis: "The CV playbook jumping asset classes on schedule: liquidity innovation follows AUM wherever it locks. For allocators it opens seasoned-loan exposure without vintage risk; for the market it confirms the thesis of the whole secondaries complex: everything locked eventually trades.",
    parties: [
      { side: "Sponsor", who: "Crescent Capital", role: "GP extending its credit vehicle" },
      { side: "New money", who: "Pantheon-led group", role: "lead investors pricing the loan book" },
      { side: "Existing LPs", who: "Fund investors", role: "cash-or-roll on a credit portfolio" }
    ] }
];
