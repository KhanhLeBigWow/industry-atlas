/* Industry Atlas - QUANTUM COMPUTING (full module, research-backed)
 * Anchors: Google Willow, 105 qubits, first below-threshold surface code, error
 * suppression factor 2.14 per code-distance step (Nature / Google Quantum AI, Dec 2024);
 * IBM Starling roadmap, ~200 logical qubits and 100M gates by 2029, qLDPC codes cutting
 * physical-qubit overhead ~90% (IBM Quantum blog, Jun 2025); quantum computing revenue
 * $1.4B in 2025, on track to ~double by 2028 (QED-C State of the Global Quantum Industry
 * 2026, Apr 2026); IonQ quarterly revenue $64.7M vs $11.4M in Q2 2024, ~$19B market cap,
 * and Rigetti ~$6.3B market cap on $7.1M FY2025 revenue (company filings / 24-7 Wall St,
 * May 2026); Quantinuum Helios encoding 48 logical qubits from 98 physical (Nov 2025);
 * NIST finalized 3 post-quantum crypto standards Aug 2024, US federal migration deadlines
 * clustering 2030-2035 (NIST). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["quantum-computing"] = {
  meta: {
    id: "quantum-computing", name: "Quantum Computing", sector: "technology", status: "full",
    tagline: "A $1.4B industry priced like a $100B one: the market is paying today for a machine that does not fully exist yet.",
    marketSize: { value: 1.4, unit: "$B", asOf: 2025, note: "quantum computing revenue per QED-C; add ~$470M of quantum sensing for a ~$1.9B total quantum industry" },
    cagr: { value: 30, range: [25, 40], horizon: "2025-2030" },
    maturity: "emergent", cyclicality: 2, capitalIntensity: 4, regulation: 3, disruption: 5
  },
  newsQuery: '("quantum computing" OR "quantum computer" OR qubit OR "logical qubit" OR "post-quantum cryptography" OR IonQ OR Quantinuum OR Rigetti)',

  overview: {
    definition: "The quantum computing industry builds machines that compute with quantum states (superposition and entanglement) instead of classical bits, promising exponential speedups on a narrow but valuable class of problems: chemistry simulation, optimization, and breaking today's public-key cryptography. Revenue is tiny ($1.4B in 2025 per QED-C); the valuations are a bet on what fault tolerance unlocks.",
    howItWorks: [
      "The physics comes first: a qubit can hold a blend of 0 and 1, and n entangled qubits explore a state space of 2^n. The catch is that qubits are catastrophically fragile: heat, vibration, and stray electromagnetic fields destroy the computation (decoherence). Everything in the industry, from dilution refrigerators colder than deep space to laser-trapped single atoms, exists to keep quantum states alive long enough to compute.",
      "Error correction is the whole game. Physical qubits fail roughly 1 time in 1,000 operations; useful algorithms need failure rates near 1 in a trillion. The fix is encoding 1 logical qubit across many physical ones. Google's Willow chip (Dec 2024, 105 qubits) was the first to go below threshold: adding physical qubits made the logical qubit exponentially better, cutting logical errors by a factor of 2.14 each time the code distance grew by 2. Quantinuum's Helios (Nov 2025) encoded 48 logical qubits from just 98 physical trapped ions, a ~2:1 ratio nobody else has matched. Physical qubit counts are marketing; logical qubits are progress.",
      "The business today is razor-thin gruel while the science cooks: selling research systems to national labs ($10M to $50M+ apiece), renting machine time through clouds (AWS Braket, Azure Quantum, IBM's platform, with published pricing historically around $1.60 per runtime second), and consulting for governments and F500 R&D groups. QED-C counts $1.4B of 2025 computing revenue across the whole industry: less than a single hyperscaler earns in a day. Bookings, mostly sovereign, are the real tape.",
      "The capital structure is venture economics wearing public tickers: pure-plays burn $50M to $200M+ a year against single-digit to low-triple-digit $M revenue, funded by serial equity issuance. IonQ grew quarterly revenue from $11.4M (Q2 2024) to $64.7M and carries a ~$19B market cap; Rigetti carried a ~$6.3B market cap on $7.1M of FY2025 revenue (May 2026 reads): roughly 900x trailing sales. The bet being priced is not this decade's cash flow but a seat at the table when fault-tolerant machines arrive: IBM's Starling roadmap targets ~200 logical qubits running 100M gates by 2029."
    ],
    history: [
      { era: "1981-1994", title: "Theory era", text: "Feynman proposes simulating nature with quantum machines (1981); Shor's 1994 factoring algorithm gives the field its killer app and its threat: quantum computers would break RSA encryption." },
      { era: "1995-2015", title: "Lab decades", text: "Error-correcting codes (1995), first 2-qubit gates, D-Wave sells annealers to skeptics. Qubits inch from 2 to a few dozen while coherence times crawl upward." },
      { era: "2016-2020", title: "Cloud and supremacy", text: "IBM puts a quantum chip on the cloud (2016); Google's 53-qubit Sycamore claims quantum supremacy (2019) on a contrived benchmark IBM immediately disputes. Big Tech commits." },
      { era: "2021-2023", title: "SPACs and winter", text: "IonQ, Rigetti, and D-Wave list via SPAC near the 2021 top, then fall 80%+ as revenue disappoints. IBM ships the 1,121-qubit Condor (2023) and quietly pivots the roadmap from qubit counts to quality." },
      { era: "2024-present", title: "Error-correction era", text: "Willow goes below threshold (Dec 2024), NIST finalizes post-quantum crypto standards (Aug 2024), Quantinuum hits 48 logical qubits (2025), IBM commits to fault tolerance by 2029. Retail money floods in; Jensen Huang's '15 to 30 years away' remark (Jan 2025) briefly wipes 40% off the pure-plays in a day." }
    ],
    trends: [
      { title: "Logical-qubit race", direction: "up", text: "The scoreboard flipped from physical counts to error-corrected logical qubits: Willow's below-threshold result, Quantinuum's 2:1 encoding on Helios, and Microsoft's 800x error-rate improvements define the new leaderboard." },
      { title: "Roadmap credibility gap", direction: "shift", text: "IBM (Starling, 2029) and Google publish dated fault-tolerance roadmaps; the market now trades milestone delivery, not promises. Each hit re-rates the sector, each slip is an air pocket." },
      { title: "Sovereign quantum programs", direction: "up", text: "The US National Quantum Initiative, China's multi-billion-dollar state program, and EU/UK/Japan national labs make governments the anchor customer: security-driven demand that ignores ROI math." },
      { title: "Post-quantum migration", direction: "up", text: "NIST's Aug 2024 standards started a forced global crypto upgrade with federal deadlines clustering 2030-2035; 'harvest now, decrypt later' collection makes it urgent before any quantum computer works. The defensive trade pays first." },
      { title: "Modality shakeout", direction: "shift", text: "Superconducting (Google, IBM), trapped ion (IonQ, Quantinuum), neutral atom (Pasqal, QuEra), and photonic (PsiQuantum) architectures are diverging in error-correction efficiency; capital is starting to pick winners." }
    ],
    outlook: "The next 5 years decide whether this is the early internet or cold fusion with better marketing. The technical trendline is genuinely bending: below-threshold error correction was the field's decades-long gate, and it opened in Dec 2024. But commercial quantum advantage (beating classical machines on a paying problem) remains undemonstrated, and classical algorithms keep moving the goalposts. Expect revenue to roughly double to ~$3B by 2028 (QED-C trajectory), driven by sovereign systems and PQC migration rather than killer apps, punctuated by violent sentiment cycles around every milestone and every skeptical soundbite."
  },

  structure: {
    suppliers: [
      { name: "Cryogenics (Bluefors, Oxford Instruments)", note: "Dilution refrigerators near absolute zero: the picks and shovels with real margins today" },
      { name: "Lasers & photonics (Coherent, Toptica class)", note: "Trapped-ion and neutral-atom machines are precision optics projects" },
      { name: "Control electronics (Quantum Machines, Zurich Instruments, Keysight)", note: "Classical brains steering quantum hardware; every modality needs them" },
      { name: "Semiconductor fabs & packaging", note: "Superconducting chips ride specialized semi processes; cryo-CMOS is a frontier" }
    ],
    producers: [
      { name: "Big Tech full-stack (IBM, Google, Microsoft)", note: "Balance sheets that can fund 10-year roadmaps without dilution" },
      { name: "Public pure-plays (IonQ, Rigetti, D-Wave)", note: "The tradeable tickers; venture risk at public-market valuations" },
      { name: "Private champions (Quantinuum, PsiQuantum, Pasqal)", note: "Quantinuum leads logical-qubit benchmarks; PsiQuantum bets on photonic scale" },
      { name: "National labs & China's state program", note: "USTC and state-funded machines make quantum a sovereignty race" }
    ],
    distributors: [
      { name: "Cloud platforms (AWS Braket, Azure Quantum, IBM Quantum Platform)", note: "Nearly all commercial access is rented by the second through hyperscaler consoles" }
    ],
    customers: [
      { name: "Governments & national labs", note: "The anchor buyers: defense, intelligence, and prestige budgets" },
      { name: "Financial institutions", note: "Portfolio optimization and risk experiments; mostly R&D budgets, not production" },
      { name: "Pharma & chemicals R&D", note: "Molecular simulation is the most credible killer app; still pre-commercial" },
      { name: "Academia & HPC centers", note: "Volume users of cloud access and on-prem research systems" }
    ],
    regulators: [
      { name: "Export-control regimes (BIS, allies)", note: "Quantum joined chip-style controls in 2024; China access is politically gated" },
      { name: "NIST & NSA", note: "Crypto standard-setters; their PQC deadlines force the security migration" },
      { name: "National quantum programs", note: "Funding agencies (DARPA, national initiatives) act as de facto industrial policy" }
    ],
    capital: [
      { name: "Public equity & ATM issuance", note: "The SPAC class of 2021 lives on serial share sales; dilution is the business model" },
      { name: "Sovereign & defense funding", note: "DARPA's benchmarking initiative and national programs fund what markets will not" },
      { name: "Big Tech balance sheets & VC", note: "Google/IBM/Microsoft self-fund; PsiQuantum-class privates raise $B rounds" }
    ]
  },

  valueChain: {
    intro: "From liquid-helium plumbing to a cryptography migration nobody can skip. Value today pools at the edges: component suppliers paid in cash and the security industry paid in fear, while the machine builders in the middle burn capital racing for fault tolerance.",
    stages: [
      { id: "components", name: "Enabling hardware", what: "Cryogenics, lasers, control electronics, vacuum systems", players: "Bluefors, Oxford Instruments, Quantum Machines, Keysight", valueCapture: 4,
        economics: { grossMargin: [35, 50], capitalIntensity: 4, concentration: 4 },
        linksTo: ["semiconductors", "manufacturing"],
        deeper: "The only reliably profitable layer: every lab and roadmap buys refrigerators and control stacks regardless of which qubit wins. Bluefors-class cryogenics is a near-monopoly niche; classic picks-and-shovels economics in a gold rush of uncertain gold." },
      { id: "qpu", name: "Qubit fabrication (QPUs)", what: "Superconducting chips, trapped ions, neutral atoms, photonics", players: "Google, IBM, IonQ, Quantinuum, PsiQuantum, Pasqal", valueCapture: 2,
        economics: { grossMargin: [20, 40], capitalIntensity: 5, concentration: 4 },
        linksTo: ["semiconductors"],
        deeper: "Four rival physics stacks, each with a scaling thesis: superconducting is fast but noisy, ions are pristine but slow, atoms scale in count, photons scale in theory. The modality that reaches cheap logical qubits first strands everyone else's capex: this is the industry's central technical wager." },
      { id: "systems", name: "Systems & error correction", what: "Full machines, real-time decoders, logical-qubit engineering", players: "IBM, Google, Quantinuum, Riverlane", valueCapture: 3,
        economics: { grossMargin: [40, 60], capitalIntensity: 3, concentration: 3 },
        linksTo: ["semiconductors", "ai"],
        deeper: "Where the race is actually run: Willow's below-threshold memory, Quantinuum's 48-from-98 encoding, IBM's qLDPC codes cutting physical overhead ~90%. Decoding errors in real time is a classical-compute problem, pulling AI hardware into the stack." },
      { id: "access", name: "Cloud access & orchestration", what: "QCaaS, per-second machine time, hybrid runtimes", players: "AWS Braket, Azure Quantum, IBM Quantum Platform", valueCapture: 3,
        economics: { grossMargin: [50, 70], capitalIntensity: 3, concentration: 4 },
        linksTo: ["cloud", "saas"],
        deeper: "Hyperscalers aggregate every vendor's hardware behind one console and skim the margin, exactly as they did to GPUs. For pure-plays, cloud distribution is reach without pricing power: the platform owns the customer." },
      { id: "software", name: "Algorithms & applications", what: "SDKs (Qiskit class), error mitigation, chemistry and optimization apps", players: "IBM, Classiq, algorithm boutiques", valueCapture: 2,
        economics: { grossMargin: [60, 80], capitalIntensity: 1, concentration: 2 },
        linksTo: ["ai", "pharma"],
        deeper: "Software margins with no market yet: until hardware crosses utility, applications are demos and papers. The long-run prize is owning the abstraction layer (the CUDA position) before the machines work; the risk is a decade of revenue-free land grab." },
      { id: "pqc", name: "Post-quantum security", what: "Crypto migration, PQC libraries, quantum-safe networking", players: "Cybersecurity vendors, HSM makers, consultancies", valueCapture: 4,
        economics: { grossMargin: [70, 85], capitalIntensity: 1, concentration: 2 },
        linksTo: ["cybersecurity", "government", "banking"],
        deeper: "The revenue that arrives before the computers work: NIST's 2024 standards plus 2030-2035 federal deadlines force every bank, government, and platform to re-plumb encryption. Multi-year, compliance-driven, and paid regardless of when (or whether) a code-breaking machine ships." }
    ]
  },

  financials: {
    businessModel: [
      "Three P&L species share one sector. Pure-plays (IonQ, Rigetti, D-Wave class): revenue = a handful of system sales to governments plus cloud credits and R&D contracts; gross margins look softwareish on services but the operating line is a furnace, with burn multiples of revenue funded by at-the-market equity sales. Big Tech programs (IBM, Google, Microsoft): quantum is an R&D line item inside $100B+ revenue bases, invisible to the P&L but existential to the roadmap narrative. Suppliers (cryogenics, control): normal instrument-maker economics, book-and-bill, real margins today.",
      "The defining metric is not revenue but runway-to-milestone: cash divided by burn, compared against the date of the next fundable proof point. IonQ's revenue scaled from $11.4M to $64.7M a quarter in under 2 years (partly via acquisitions) and the market paid ~$19B for it; Rigetti's revenue fell 34% to $7.1M in FY2025 and the market still paid ~$6.3B, because the equity is priced as an option on fault tolerance, not a multiple of anything current. When sentiment turns, financing windows shut fast: dilution is the tax long holders pay for the option."
    ],
    fingerprint: { grossMargin: 45, recurringRevenue: 30, capitalIntensity: 70, pricingPower: 45, cyclicality: 40, operatingLeverage: 75 },
    lines: [
      { label: "Bookings & backlog", note: "Mostly sovereign contracts; the leading indicator in a pre-revenue industry" },
      { label: "Revenue mix", note: "System sales (lumpy, $10M+ each) vs cloud access vs services; mix reveals maturity" },
      { label: "Cash burn & runway", note: "The survival metric: net cash / annual burn, read against milestone dates" },
      { label: "Share count", note: "ATM issuance grows it relentlessly; per-share math erodes even in good years" },
      { label: "Technical milestones", note: "Not a P&L line, but logical-qubit results move these equities more than earnings do" }
    ],
    unitEconomics: {
      unit: "per flagship quantum system (illustrative)",
      items: [
        { label: "Research system sale", value: "$10M to $50M+", note: "buyers are national labs and sovereign programs, not enterprises" },
        { label: "Cloud machine time", value: "~$1.60/second class", note: "IBM's published pay-as-you-go rate; utilization is the unknown" },
        { label: "Annual burn (pure-play)", value: "$(50M) to $(200M+)", note: "R&D-heavy losses against single-digit to low-triple-digit $M revenue" },
        { label: "Physical-to-logical overhead", value: "~2:1 (best) to 1,000:1 (surface codes at scale)", note: "the cost curve that decides everything; qLDPC codes aim to cut it ~90%" }
      ]
    }
  },

  kpiRefs: ["cloud-rpo", "semi-capex-intensity"],
  kpiLocal: [
    {
      id: "quantum-logical-qubits", name: "Logical Qubits & Encoding Ratio", industries: ["quantum-computing"],
      definition: "Count of error-corrected (logical) qubits demonstrated and the number of physical qubits consumed to make each one.",
      formula: "Encoding ratio = physical qubits / logical qubits; watch error suppression as code distance grows",
      interpretation: "The industry's true scoreboard: physical counts are marketing, logical qubits are progress. Benchmarks: Willow's 105 physical qubits ran 1 below-threshold logical memory (Dec 2024); Quantinuum's Helios encoded 48 logical from 98 physical (Nov 2025).",
      healthy: "Logical counts rising while logical error rates fall exponentially", warning: "Physical-qubit headlines with no error-correction data attached" },
    {
      id: "quantum-runway-milestone", name: "Runway vs Milestone Distance", industries: ["quantum-computing"],
      definition: "Years of cash at current burn compared with time to the next fundable technical proof point.",
      formula: "Runway = net cash / annual FCF burn; compare against dated roadmap milestones",
      interpretation: "Pure-plays burn $50M to $200M+ a year against minimal revenue; the equity survives only if cash outlasts the next result that reopens the financing window.",
      healthy: "3+ years of runway with dated, credible milestones inside it", warning: "Under 2 years of runway, slipping roadmaps, serial ATM issuance" }
  ],

  health: {
    intro: "In a pre-commercial industry, health is measured in physics papers and balance sheets, not margins: technical trajectory tells you if the option is real, runway tells you who lives to exercise it.",
    pillars: [
      { name: "Technical trajectory", weight: 30, metrics: "Logical-qubit count, error suppression vs code distance, peer-reviewed results", healthy: "Below-threshold scaling, improving encoding ratios", warning: "Qubit-count press releases without fidelity data" },
      { name: "Runway & dilution discipline", weight: 25, metrics: "Net cash / burn, share-count growth, financing terms", healthy: "3+ years runway raised at strength", warning: "Emergency raises, runway under 2 years" },
      { name: "Commercial traction", weight: 20, metrics: "Bookings, system deliveries, cloud utilization, repeat buyers", healthy: "Growing sovereign backlog plus early enterprise repeat use", warning: "One-off grants dressed as commercial revenue" },
      { name: "Policy & sovereign demand", weight: 15, metrics: "National program funding, export posture, PQC deadline enforcement", healthy: "Multi-year government programs funded", warning: "Budget cuts, export rules cutting addressable market" },
      { name: "Talent & ecosystem", weight: 10, metrics: "PhD retention, developer adoption (SDK downloads), partner depth", healthy: "Net talent inflows, growing developer base", warning: "Founder exits, teams poached by Big Tech" }
    ],
    scoringNote: "Weight technical results above all: in quantum, a single Nature paper (Willow, Dec 2024) re-rated the whole sector, and a single skeptical soundbite (Jan 2025) cut it 40%. Everything else is financing to survive between those moments."
  },

  valuation: {
    intro: "There is no earnings multiple because there are no earnings: the sector trades on option value, milestone momentum, and scarcity of pure-play tickers. Discipline means sizing, not precision.",
    methods: [
      { name: "EV / Sales (the only multiple available)", use: "Ranking pure-plays against each other and against their own history", avoid: "Treating it as valuation: at 100x to 900x sales the multiple measures sentiment, not value", strengths: "Comparable, trackable through cycles", weaknesses: "Revenue is tiny, lumpy, and partly grant-based", range: { low: 25, high: 900, asOf: 2026, note: "IonQ ~75x annualized; Rigetti touched ~900x trailing (May 2026): the widest quality spread in tech" } },
      { name: "Real options / scenario TAM", use: "The honest frame: probability of fault tolerance x share of a future market, discounted hard", avoid: "Single-scenario DCFs; the distribution is bimodal (transformative or near-zero)", strengths: "Matches the actual bet being made", weaknesses: "Every input is a guess; garbage in, conviction out", range: { low: 0, high: 0, asOf: 2026, note: "qualitative anchor; forces explicit probability and timeline assumptions" } },
      { name: "Milestone-adjusted venture marks", use: "Privates (PsiQuantum, Quantinuum class) and cross-checking public prices against latest round math", avoid: "Assuming stale private marks are current truth", strengths: "Grounded in what sophisticated buyers actually paid", weaknesses: "Rounds are infrequent and strategic, not market-clearing", range: { low: 0, high: 0, asOf: 2026, note: "multi-billion dollar private valuations for the leading privates; direction matters more than level" } },
      { name: "Strategic / acqui-value floor", use: "Downside framing: what IP, patents, and PhD teams fetch from Big Tech or defense buyers", avoid: "Using it as a base case; distressed tech sells at fractions of invested capital", strengths: "A real floor exists (talent and patents are scarce)", weaknesses: "Floor is far below prevailing market caps", range: { low: 0, high: 0, asOf: 2026, note: "qualitative; think $B-scale strategic value vs $10B+ market caps" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Price a quantum pure-play the only way the market does: a revenue run-rate, a sentiment multiple, and the cash pile that buys time.",
      inputs: [
        { id: "vc-rev", label: "Revenue run-rate ($M)", min: 5, max: 500, step: 5, value: 100, fmt: "money" },
        { id: "vc-mult", label: "EV / Sales multiple", min: 10, max: 400, step: 10, value: 60, fmt: "mult" },
        { id: "vc-cash", label: "Net cash ($M)", min: 0, max: 3000, step: 50, value: 500, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk treats quantum as a venture book that happens to have tickers: size it like options (small, diversified, loss-tolerant), own the layers that get paid regardless of which physics wins (components, PQC migration), and rent the pure-plays around milestones rather than marrying them. Big Tech gives free quantum optionality inside businesses that already earn; the pure-plays give leverage to the same events at 100x the volatility.",
    debates: [
      { topic: "Investable industry or science project with tickers?", bull: "Below-threshold error correction (Willow) was THE gate, and it opened; IBM has a dated, engineering-grade path to 200 logical qubits by 2029; sovereign demand funds the interim. Buying after the science de-risks but before revenue is how venture returns happen in public markets.", bear: "$1.4B of revenue supports tens of billions of market cap; commercial advantage on a paying problem has never been demonstrated; classical algorithms keep eating claimed speedups. You are paying 2035 prices for 2029 hopes with 2021-SPAC share-count hygiene." },
      { topic: "Which modality wins fault tolerance?", bull: "Trapped ions lead on quality today (Quantinuum's 2:1 encoding, 48 logical qubits) and superconducting leads on speed and manufacturability (Google, IBM): the leaders are pulling away, and qLDPC codes slash the overhead that made scaling look impossible.", bear: "Every modality still needs 100x to 1,000x scale-up under constraints (wiring, lasers, cryogenics) that get harder nonlinearly; photonics and neutral atoms could leapfrog; picking the winner now is picking the winning airframe in 1908." },
      { topic: "Is post-quantum cryptography the real trade?", bull: "PQC migration is compliance-mandated (NIST standards live since Aug 2024, federal deadlines 2030-2035), worth billions in security spend, and pays regardless of when a code-breaking machine exists: it is the sector's only guaranteed cash flow.", bear: "PQC revenue accrues to incumbent security and infrastructure vendors, not quantum companies; it is a cybersecurity trade wearing a quantum costume, and it caps rather than expresses quantum upside." }
    ],
    cycle: {
      where: "Early in the error-correction era and mid hype-cycle: the science inflected (Willow, Helios, qLDPC roadmaps) but revenue has not, leaving valuations hostage to milestone news and macro liquidity. Post-2024 retail enthusiasm has already survived one 40% air pocket.",
      drivers: "Milestone delivery vs dated roadmaps, sovereign program budgets, liquidity and rate conditions (long-duration option value), PQC deadline enforcement, and skeptic soundbites from adjacent tech leaders.",
      leads: [
        "arXiv quant-ph preprints and Nature papers (free): results move stocks weeks before earnings",
        "IBM and Google research blogs (free): roadmap checkpoints are dated and checkable",
        "SEC EDGAR 10-Qs (free): burn, runway, and share count for every pure-play",
        "Federal budget lines for the National Quantum Initiative and DARPA programs (free)",
        "NIST/CISA PQC migration guidance (free): the enforcement clock on the security trade"
      ]
    },
    exposure: [
      { vehicle: "IonQ", note: "The liquid pure-play: real bookings and revenue scale, priced for a lot of future" },
      { vehicle: "Big Tech (IBM, Alphabet, Microsoft)", note: "Free quantum optionality inside earning businesses; the risk-adjusted way in" },
      { vehicle: "Rigetti / D-Wave class", note: "High-beta milestone trades; sized for total loss, rented not owned" },
      { vehicle: "Enabling suppliers (cryogenics, photonics, control instruments)", note: "Paid in cash today whichever qubit wins; the picks-and-shovels sleeve" },
      { vehicle: "PQC / cybersecurity migration names", note: "The deadline-driven cash flow expression of the quantum threat" }
    ],
    catalysts: [
      { when: "Ongoing (papers drop unannounced)", what: "Logical-qubit records and below-threshold results: the sector's true earnings" },
      { when: "Quarterly earnings", what: "Bookings, burn, and runway for the pure-plays; ATM issuance disclosures" },
      { when: "2026-2029 roadmap checkpoints", what: "IBM's dated march to Starling (200 logical qubits, 2029); each hit or slip re-rates the space" },
      { when: "Federal deadlines and awards", what: "DARPA benchmarking downselects, national program budgets, PQC enforcement milestones (2030-2035)" }
    ],
    data: [
      { series: "arXiv quant-ph preprints", source: "arxiv.org (free)", why: "The primary tape: technical results before press releases" },
      { series: "Pure-play financials (burn, runway, share count)", source: "SEC EDGAR (free)", why: "Survival math for option-priced equities" },
      { series: "IBM/Google quantum roadmaps", source: "company research blogs (free)", why: "Dated, falsifiable milestones to trade against" },
      { series: "QED-C industry reports", source: "quantumconsortium.org (free summaries)", why: "The cleanest revenue and market-size baseline ($1.4B, 2025)" },
      { series: "NIST PQC standards & migration guidance", source: "nist.gov (free)", why: "The compliance clock driving the security trade" }
    ],
    playbook: [
      { regime: "Liquidity flood / risk-on", behavior: "Long-duration option value inflates fastest here: pure-plays can triple on flows alone. Ride with stops; this regime ends faster than it starts." },
      { regime: "Rates rising", behavior: "The discount rate on a 2030s payoff is brutal: pure-plays derate hardest in tech. Rotate to suppliers and Big Tech expressions; keep powder for the panic lows." },
      { regime: "Milestone shock (positive)", behavior: "A Willow-class result lifts everything indiscriminately: fade the laggards' sympathy rallies, add to the actual achiever." },
      { regime: "Skeptic shock / timeline slip", behavior: "A missed checkpoint or credible '20 years away' take cuts 30-50% fast (Jan 2025 template). Pre-set buy levels on the names with 3+ years runway; dilution risk decides who to catch." }
    ]
  },

  players: [
    { name: "Google Quantum AI", role: "Error-correction pioneer", country: "US", real: true, note: "Willow (Dec 2024): 105 qubits, first below-threshold surface code; the result that opened the era" },
    { name: "IBM Quantum", role: "Roadmap standard-setter", country: "US", real: true, note: "Starling: ~200 logical qubits and 100M gates targeted for 2029 on qLDPC codes (~90% overhead cut)" },
    { name: "IonQ", role: "The liquid pure-play", country: "US", real: true, note: "Trapped ion; quarterly revenue $11.4M to $64.7M in under 2 years; ~$19B cap (May 2026)" },
    { name: "Quantinuum", role: "Logical-qubit leader", country: "US", real: true, note: "Helios encoded 48 logical qubits from 98 physical (Nov 2025); Honeywell-backed, private" },
    { name: "Microsoft", role: "Topological wildcard", country: "US", real: true, note: "Majorana bet plus qubit-virtualization software: 800x error-rate gains demonstrated on Quantinuum hardware" },
    { name: "PsiQuantum", role: "Photonic moonshot", country: "US", real: true, note: "Skipping small machines to build fault-tolerant scale directly; multi-billion dollar private valuation" },
    { name: "Rigetti & D-Wave", role: "High-beta small caps", country: "US", real: true, note: "Rigetti: ~$6.3B cap on $7.1M FY2025 revenue; D-Wave sells annealers today; both trade as milestone options" },
    { name: "Pasqal", role: "Europe's neutral-atom champion", country: "FR", real: true, note: "Analog neutral-atom machines shipping to HPC centers; the EU's flagship bet" }
  ],

  geography: [
    { country: "US", role: "Research and capital hegemon", note: "Google, IBM, IonQ, PsiQuantum plus DARPA and national-lab demand" },
    { country: "CN", role: "The rival pole", note: "State-funded program (USTC, Origin Quantum) with multi-billion dollar commitments; export controls wall the two ecosystems apart" },
    { country: "GB", role: "Quantum-heavy talent base", note: "Quantinuum's Cambridge roots, Riverlane's decoders, a national quantum computing centre" },
    { country: "FR", role: "EU flagship", note: "Pasqal, Alice & Bob, Quandela: a dense startup cluster on state support" },
    { country: "CA", role: "Early mover", note: "D-Wave, Xanadu, and Photonic; strong theory bench, thin capital markets" },
    { country: "JP", role: "Systems integrator", note: "Fujitsu/RIKEN superconducting machines and a national quantum strategy tied to HPC" }
  ],

  cycles: [
    { year: 1994, title: "Shor's algorithm", kind: "shift", text: "A factoring algorithm proves quantum machines would break RSA, creating both the field's funding case and the threat that still drives sovereign spending. Lesson: in deep tech, the killer app can precede the machine by half a century." },
    { year: 2019, title: "Sycamore supremacy", kind: "boom", text: "Google claims quantum supremacy on a contrived sampling task; IBM disputes the math within days. Hype and funding surge anyway. Lesson: benchmarks chosen by the vendor measure marketing, not utility." },
    { year: 2021, title: "The SPAC class", kind: "boom", text: "IonQ, Rigetti, and D-Wave list via SPAC into peak liquidity at multi-billion valuations on near-zero revenue. Lesson: access to capital is not evidence of a market." },
    { year: 2022, title: "Quantum winter", kind: "bust", text: "Rates rise, revenue disappoints, and the SPAC class falls 80%+; funding narrows to governments and Big Tech. Lesson: long-duration options are rate instruments; own runway, not promises." },
    { year: 2024, title: "Willow and the whipsaw", kind: "shift", text: "Below-threshold error correction (Dec 2024) ignites a retail mania; weeks later a single 'useful quantum is 15 to 30 years away' remark from Nvidia's CEO cuts the pure-plays 40% in a day (Jan 2025). Lesson: when an equity trades on narrative, one sentence is a macro event." }
  ],

  risks: [
    { name: "Fault-tolerance timeline slip", severity: 5, likelihood: 3, transmission: "Missed roadmap checkpoints -> financing windows close -> dilution spirals at falling prices -> pure-plays reprice toward cash value." },
    { name: "Modality obsolescence", severity: 4, likelihood: 3, transmission: "One architecture reaches cheap logical qubits first -> rivals' capex and IP stranded -> winner-take-most re-rating across the board." },
    { name: "Classical and AI catch-up", severity: 4, likelihood: 3, transmission: "Better classical algorithms and GPU simulation erode claimed speedups -> use-case TAM shrinks -> the option loses its underlying." },
    { name: "Perpetual dilution", severity: 3, likelihood: 5, transmission: "$50M to $200M+ annual burn vs minimal revenue -> serial ATM issuance -> per-share value leaks even in technically successful years." },
    { name: "Cryptographically relevant machine arrives early", severity: 5, likelihood: 1, transmission: "A CRQC surprises the migration clock -> harvested ciphertext decrypted -> systemic security scramble; quantum vendors soar while every unmigrated institution bleeds." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Quantum computers use the strange physics of atoms (superposition, entanglement) to attack problems ordinary computers cannot, like simulating molecules or breaking today's encryption. They mostly do not work usefully yet: the whole industry earned about $1.4B in 2025, less than a mid-size software company. Investors pay high prices anyway because if the machines mature, the payoff could be enormous."] },
    L2: { title: "Intermediate", text: ["The core problem is fragility: qubits fail about 1 time in 1,000 operations, and useful work needs near-perfect reliability, so many physical qubits are combined into 1 error-corrected 'logical' qubit. Google's Willow chip (Dec 2024) proved errors fall exponentially as you add qubits (below threshold), and Quantinuum encoded 48 logical qubits from 98 physical ones (2025). Revenue today is governments buying research systems and cloud access; the valuations (IonQ ~$19B, Rigetti ~$6.3B on $7.1M of revenue) price the future, not the present."] },
    L3: { title: "Advanced", text: ["Analyze the sector in layers: enabling suppliers (cryogenics, lasers, control electronics) get paid in cash today; QPU builders burn capital racing 4 rival architectures toward fault tolerance; hyperscaler clouds own distribution; and post-quantum cryptography is the one deadline-driven cash flow (NIST standards since Aug 2024, federal migration 2030-2035). Track logical qubits and encoding ratios, not physical counts, and read every pure-play through runway-vs-milestone math: cash divided by burn against the next dated proof point (IBM's Starling checkpoints to 2029 are the sector's metronome)."] },
    L4: { title: "Expert", text: ["Trade the milestone tape: arXiv papers and roadmap checkpoints move these names more than earnings, and the Jan 2025 episode (a 40% one-day drawdown on a single skeptical remark) defines the volatility regime. Live debates: whether trapped-ion quality (Quantinuum's 2:1 encoding) beats superconducting manufacturability at scale, whether qLDPC codes really cut the 1,000:1 overhead ~90%, and whether PQC spend is quantum upside or just cybersecurity revenue. Respect the bimodal outcome distribution: size positions so the zero branch is survivable."] },
    L5: { title: "Institutional", text: ["Allocator's frame: quantum is a public-market venture book with a sovereign demand floor and a compliance-driven side trade. Core the layers paid regardless of physics (components, PQC migration), hold Big Tech for free optionality, and run pure-plays as a rented options sleeve sized for total loss, rebalanced around milestones rather than quarters. The discipline is refusing precision the asset cannot offer: every model reduces to 2 numbers, the probability of fault tolerance this decade and the runway to survive until the answer, and the second one is the only number management controls."] }
  },

  quiz: [
    { q: "Google's Willow chip (Dec 2024) mattered because it:", choices: ["Had the most qubits ever", "Went below threshold: adding physical qubits made the logical qubit exponentially better", "Ran Windows", "Broke RSA encryption"], answer: 1, explain: "With 105 qubits, Willow cut logical errors by a factor of 2.14 each time the code distance grew by 2: the error-correction gate the field had chased since 1995." },
    { q: "The industry's true scoreboard is:", choices: ["Physical qubit counts", "Stock price", "Logical (error-corrected) qubits and the physical-to-logical encoding ratio", "Patent counts"], answer: 2, explain: "Physical counts are marketing: Quantinuum's 48 logical from 98 physical (2025) beat machines with 10x the raw qubits. Quality per qubit is what compounds." },
    { q: "Quantum computing revenue in 2025 was roughly:", choices: ["$1.4B: less than a single hyperscaler earns in a day", "$140B", "$14B", "Zero"], answer: 0, explain: "QED-C's 2026 industry report counted $1.4B of computing revenue (plus ~$470M of sensing), on track to roughly double by 2028: tiny against tens of billions of market cap." },
    { q: "Rigetti in May 2026 traded at roughly:", choices: ["2x sales", "900x trailing sales: a ~$6.3B cap on $7.1M of declining revenue", "10x earnings", "Book value"], answer: 1, explain: "The equity prices an option on fault tolerance, not current business: the widest gap between valuation and revenue in public tech." },
    { q: "IBM's Starling roadmap targets, by 2029:", choices: ["1 million physical qubits", "A quantum phone", "~200 logical qubits running 100M gates, using qLDPC codes that cut physical overhead ~90%", "Room-temperature qubits"], answer: 2, explain: "Announced June 2025 with dated checkpoints: the sector's most engineering-grade fault-tolerance plan, and its metronome for re-rating." },
    { q: "'Harvest now, decrypt later' means:", choices: ["Buying quantum stocks early", "Adversaries store encrypted data today to decrypt once quantum machines mature: making the crypto migration urgent before any machine works", "A farming subsidy", "Cloud caching"], answer: 1, explain: "This passive, undetectable threat is why NIST finalized post-quantum standards in Aug 2024 and federal deadlines cluster 2030-2035: the defensive trade pays first." },
    { q: "In Jan 2025, quantum pure-plays fell ~40% in a day because:", choices: ["A machine exploded", "Rates rose", "Nvidia's CEO said useful quantum computers were likely 15 to 30 years away", "IBM exited the field"], answer: 2, explain: "When equities trade on narrative rather than earnings, one credible sentence is a macro event: the sector's defining volatility lesson." },
    { q: "The most reliably profitable layer of the value chain today is:", choices: ["Quantum application software", "QPU manufacturing", "Enabling hardware (cryogenics, lasers, control electronics) plus the PQC migration", "Cloud access"], answer: 2, explain: "Suppliers get paid whichever qubit wins, and NIST-mandated crypto migration is deadline-driven cash flow: the edges earn while the middle burns." }
  ],

  sources: [
    { name: "Google Quantum AI / Nature: quantum error correction below the surface code threshold (Dec 2024)", url: "https://www.nature.com/articles/s41586-024-08449-y", feeds: "error-correction milestones" },
    { name: "IBM Quantum: path to large-scale fault tolerance, Starling 2029 (Jun 2025)", url: "https://www.ibm.com/quantum/blog/large-scale-ftqc", feeds: "roadmap, logical qubits" },
    { name: "QED-C State of the Global Quantum Industry 2026 (via The Quantum Insider, Apr 2026)", url: "https://thequantuminsider.com/2026/04/14/global-quantum-computing-market-to-double-by-2028-reaching-3-billion-in-revenue-qed-c-state-of-the-global-quantum-industry-2026-report-finds/", feeds: "market size, revenue" },
    { name: "NIST: first 3 finalized post-quantum encryption standards (Aug 2024)", url: "https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards", feeds: "cryptography timeline" }
  ]
};
