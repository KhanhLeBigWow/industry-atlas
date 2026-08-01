/* Industry Atlas - CYBERSECURITY (full module, research-backed)
 * Anchors: Gartner worldwide end-user security spending $213B in 2025, up from
 * $193B in 2024 (Gartner press release, Jul 2025); IBM Cost of a Data Breach 2025:
 * global average $4.44M, down 9%, first decline in 5 years, US average $10.22M;
 * Chainalysis: 2024 ransomware payments $813M, (35)% vs $1.25B in 2023;
 * CrowdStrike ending ARR $5.25B (FY2026, Jan 2026); Palo Alto NGS ARR $5.6B
 * FY2025, guiding $7.0B to $7.1B FY2026; Google closed Wiz for $32B (Mar 2026),
 * the largest pure-cybersecurity deal on record. */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["cybersecurity"] = {
  meta: {
    id: "cybersecurity", name: "Cybersecurity", sector: "technology", status: "full",
    tagline: "The only industry with a funded, innovating adversary: $213B of defense spending against an attacker economy that ships product too.",
    marketSize: { value: 213, unit: "$B", asOf: 2025, note: "worldwide end-user information security spending (Gartner, Jul 2025 update); $193B in 2024" },
    cagr: { value: 12, range: [10, 15], horizon: "2024-2029" },
    maturity: "growth", cyclicality: 2, capitalIntensity: 2, regulation: 4, disruption: 4
  },
  newsQuery: '(cybersecurity OR ransomware OR "data breach" OR CrowdStrike OR "Palo Alto Networks" OR "zero trust" OR "cyberattack")',

  overview: {
    definition: "Cybersecurity sells protection for digital assets: software, hardware, and services that prevent, detect, and respond to attacks on networks, endpoints, identities, data, and cloud workloads. It is the tax every other industry pays on going digital, and the tax rate keeps rising: Gartner puts worldwide end-user spending at $213B in 2025, up from $193B in 2024.",
    howItWorks: [
      "The industry is uniquely adversarial: demand is manufactured by a professional attacker economy that innovates on its own P&L. Ransomware crews run affiliate programs, help desks, and revenue shares; nation-state groups run multi-year campaigns. Chainalysis tracked $813M of ransomware payments in 2024, down (35)% from $1.25B in 2023 after law-enforcement takedowns, but attack volume still rose. Every attacker innovation (phishing kits, AI-generated lures, supply chain implants) becomes a defender product category 18 months later.",
      "The business model has converged on SaaS economics with a fear-based demand curve. Vendors sell subscriptions per user, per endpoint, or per workload, land with one module, and expand across a platform: endpoint, identity, cloud, data, SIEM. CrowdStrike ended FY2026 (Jan 2026) with $5.25B of ARR; Palo Alto's next-generation security ARR hit $5.6B in FY2025 and is guided to $7.0B to $7.1B in FY2026. Gross margins run 75%+ and retention is structurally high: ripping out a security stack is risky, so churn is the industry's rarest event.",
      "The strategic war is platform versus point solution. A Fortune 500 CISO historically ran 50 to 70 discrete tools; boards now demand consolidation, and the big platforms (CrowdStrike's Falcon, Palo Alto's platformization push, Microsoft's bundle) are absorbing categories the way Office absorbed utilities. Microsoft disclosed security revenue above $20B a year back in 2023 and bundles much of it into E5 licenses: the single biggest competitive fact in the industry. The counter-thesis: security is the one budget where 'good enough' can mean breach, so best-of-breed keeps winning the crown-jewel workloads.",
      "What keeps the checkbook open is the asymmetry of loss. IBM's 2025 Cost of a Data Breach study puts the global average at $4.44M per breach (down 9%, the first decline in 5 years, credited to AI-assisted detection) and $10.22M in the US, where regulators pile on. Add SEC 4-business-day breach disclosure, EU NIS2 and DORA, and personal liability creeping toward CISOs and directors, and security is the last line item cut in any downturn: spending grows roughly 2x the broader IT budget."
    ],
    history: [
      { era: "1987-1999", title: "Antivirus era", text: "Signature-based scanners (McAfee, Symantec, Kaspersky) sold in boxes; the firewall is born; security is an IT afterthought bought like office supplies." },
      { era: "2000-2012", title: "Perimeter enterprise", text: "Worms (ILOVEYOU, Slammer) and compliance regimes (SOX, PCI) industrialize the market: firewalls, IDS, and the castle-and-moat doctrine. Check Point and Cisco own the perimeter." },
      { era: "2013-2016", title: "The board wakes up", text: "Snowden, the Target breach (40M cards), and Sony's hack move security from the server room to the boardroom; CISO becomes a C-suite title; cloud begins dissolving the perimeter the industry was built to defend." },
      { era: "2017-2021", title: "Ransomware and zero trust", text: "WannaCry and NotPetya (~$10B in damage) prove cyber risk is macro risk; ransomware becomes a franchised business; SolarWinds shows the supply chain is the new battlefield; 'never trust, always verify' replaces the moat." },
      { era: "2022-present", title: "Platform consolidation", text: "Rate hikes reprice growth, boards demand fewer vendors, and the giants absorb categories: Cisco buys Splunk ($28B, closed 2024), Google buys Wiz ($32B, closed Mar 2026, the largest pure-cyber deal ever), and Palo Alto pursues platformization. AI arrives on both sides of the fight." }
    ],
    trends: [
      { title: "Platform consolidation", direction: "shift", text: "CISOs are cutting 50-tool stacks to 3 to 5 platforms; the ARR migrates to CrowdStrike, Palo Alto, and Microsoft, while subscale point vendors face a sell-or-shrink decade." },
      { title: "AI on both sides", direction: "up", text: "Attackers use AI for phishing and deepfakes (16% of breaches per IBM 2025); defenders use it to cut detection and containment to 241 days mean, a 9-year low. The SOC analyst shortage makes AI agents the industry's biggest product bet." },
      { title: "Cloud security land grab", direction: "up", text: "Security spend follows workloads to the cloud: CNAPP went from acronym to $32B acquisition (Wiz) in 5 years; every hyperscaler now sells the locks for its own building." },
      { title: "Ransomware economics under pressure", direction: "down", text: "Payments fell (35)% to $813M in 2024 as takedowns (LockBit) and refusal-to-pay hardened; attackers respond by moving upmarket and stealing data instead of encrypting it." },
      { title: "Regulation as demand", direction: "up", text: "SEC disclosure rules, NIS2, DORA, and cyber insurance underwriting standards turn best practice into mandate: compliance is now a sales channel." }
    ],
    outlook: "A structural grower digesting its own success: spending compounds low-double-digits toward $300B by decade's end, but the spoils concentrate. Platforms with 110%+ retention and AI-native SOC products take share; subscale vendors get consolidated (Thoma Bravo alone has taken a dozen private) or starved. The wildcards are Microsoft's bundle, which caps pricing across the industry, and AI, which rearms both sides at once. Demand is the least risky part of the thesis: the adversary funds the marketing."
  },

  structure: {
    suppliers: [
      { name: "Cloud hyperscalers (AWS, Azure, GCP)", note: "The compute under every security platform: also competitors upstairs" },
      { name: "Chipmakers & appliance ODMs", note: "Fortinet's custom ASICs; firewalls are still hardware at the edge" },
      { name: "Threat intel & vulnerability research", note: "Bug bounties, red teams, and the researcher ecosystem that feeds detection content" },
      { name: "Open-source security stack", note: "Snort, Linux hardening, SIEM plumbing: free inputs, commercial wrappers" }
    ],
    producers: [
      { name: "Platform vendors (CrowdStrike, Palo Alto, Microsoft)", note: "Multi-module ARR machines; $5B+ ARR each and consolidating the stack" },
      { name: "Specialists (Zscaler, Okta, CyberArk, Cloudflare)", note: "Own a control point (SASE, identity, privileged access, edge) and defend it" },
      { name: "Hyperscaler security arms", note: "Microsoft $20B+ security revenue; Google absorbed Wiz for $32B: the biggest new entrants are the oldest companies" },
      { name: "Services & MDR (Accenture, Mandiant, Arctic Wolf)", note: "The talent shortage monetized: someone must run the tools" }
    ],
    distributors: [
      { name: "Channel & VARs", note: "Security remains channel-heavy; distributors and resellers touch most enterprise deals" },
      { name: "Cloud marketplaces", note: "AWS/Azure marketplace burn-down budgets are the fastest-growing route to market" },
      { name: "MSSPs & MSPs", note: "The SMB's outsourced security department: platforms white-label through them" }
    ],
    customers: [
      { name: "Enterprises (CISO budgets)", note: "The core market: security is 5-10% of IT spend and rising" },
      { name: "Governments & critical infrastructure", note: "Sovereign demand with sovereign procurement: slow, sticky, enormous" },
      { name: "SMBs via MSPs", note: "Underpenetrated and underdefended: the volume frontier" },
      { name: "Consumers", note: "The legacy antivirus tail (Norton, McAfee): cash cows in runoff" }
    ],
    regulators: [
      { name: "SEC", note: "4-business-day material-breach disclosure (since Dec 2023): breaches are now securities events" },
      { name: "EU (NIS2, DORA, GDPR)", note: "The world's most demanding compliance stack; fines up to 4% of global revenue" },
      { name: "CISA & national agencies", note: "KEV catalog, incident reporting mandates, and the public-private threat-sharing spine" },
      { name: "Cyber insurers", note: "De facto regulators: underwriting questionnaires set minimum controls (MFA, EDR) market-wide" }
    ],
    capital: [
      { name: "Venture capital", note: "A perennial top-3 VC category; Israel and the US mint the startups" },
      { name: "Private equity (Thoma Bravo class)", note: "The sector's consolidator: Proofpoint $12.3B, Darktrace $5.3B, SailPoint, Ping" },
      { name: "Strategic M&A", note: "Google-Wiz $32B and Cisco-Splunk $28B reset the ceiling on exit math" }
    ]
  },

  valueChain: {
    intro: "From a researcher's exploit write-up to a board's risk register. Value concentrates where the control point is stickiest: identity, the endpoint agent, and the network edge. The most profitable seat is the platform that turns fear into a subscription.",
    stages: [
      { id: "threat-intel", name: "Threat research & intelligence", what: "Finding vulnerabilities and tracking adversaries", players: "Mandiant (Google), Unit 42, Talos, bug-bounty platforms", valueCapture: 2,
        economics: { grossMargin: [50, 70], capitalIntensity: 1, concentration: 3 },
        linksTo: ["ai", "defense"],
        deeper: "Intelligence rarely monetizes alone: it feeds detection content and brand. The real currency is attribution credibility: whoever names the threat group frames the narrative, and the narrative sells the platform." },
      { id: "platforms", name: "Security platforms (endpoint, identity, cloud)", what: "Multi-module SaaS suites: the industry's center of gravity", players: "CrowdStrike, Palo Alto, Microsoft, Wiz (Google)", valueCapture: 5,
        economics: { grossMargin: [72, 80], capitalIntensity: 2, concentration: 4 },
        linksTo: ["saas", "cloud", "ai"],
        deeper: "The land-and-expand machine: land with endpoint or firewall, expand to 5+ modules, and NRR does the rest. CrowdStrike's $5.25B ARR and Palo Alto's $5.6B NGS ARR are the scoreboard; the agent on the endpoint and the policy engine in the identity path are the stickiest real estate in software." },
      { id: "network-edge", name: "Network & edge security (firewall, SASE)", what: "Securing traffic: appliances giving way to cloud-delivered SASE", players: "Fortinet, Palo Alto, Zscaler, Cloudflare, Check Point", valueCapture: 4,
        economics: { grossMargin: [60, 78], capitalIntensity: 3, concentration: 4 },
        linksTo: ["telecom", "cloud", "semiconductors"],
        deeper: "The old perimeter is now a hybrid: hardware firewalls (Fortinet's ASIC cost edge) plus zero-trust cloud proxies (Zscaler's model). SASE is the refresh cycle in progress: every branch-office appliance retired becomes a cloud subscription, trading one-time boxes for recurring revenue." },
      { id: "data-siem", name: "Data, SIEM & the security lake", what: "Collecting and analyzing security telemetry at scale", players: "Splunk (Cisco), Microsoft Sentinel, CrowdStrike, Datadog", valueCapture: 4,
        economics: { grossMargin: [70, 80], capitalIntensity: 3, concentration: 3 },
        linksTo: ["data-infrastructure", "ai", "cloud"],
        deeper: "Whoever owns the telemetry owns the AI roadmap: SOC copilots and autonomous response train on this exhaust. Cisco paid $28B for Splunk largely for this seat; pricing by data volume is under attack from security lakes built on cheap object storage." },
      { id: "services", name: "Services, MDR & incident response", what: "Running security for those who cannot staff it", players: "Accenture, Deloitte, Mandiant, Arctic Wolf, MSSPs", valueCapture: 3,
        economics: { grossMargin: [25, 45], capitalIntensity: 1, concentration: 2 },
        linksTo: ["saas", "government"],
        deeper: "A talent-arbitrage business: millions of unfilled security jobs worldwide make outsourced detection (MDR) the fastest-growing delivery model. Incident response is the industry's ambulance service: sold at panic prices, it converts breaches into multi-year platform contracts." },
      { id: "risk-transfer", name: "Cyber insurance & risk transfer", what: "Pricing and absorbing the residual risk", players: "Chubb, Beazley, AXA XL, Coalition, Resilience", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 4, concentration: 3 },
        linksTo: ["insurance", "capital-markets"],
        deeper: "A ~$15B premium market that learned underwriting the hard way: ransomware losses circa 2020-21 forced strict control requirements, which now drive tool adoption industry-wide. Insurers are becoming the sector's de facto regulator: no EDR and MFA, no policy. Systemic accumulation (one cloud outage, thousands of claims) is the unsolved actuarial problem." }
    ]
  },

  financials: {
    businessModel: [
      "Read the sector as three P&L species. Platform vendors are SaaS at its best: 75%+ gross margins, ARR and net new ARR as the tape, NRR of 110%+ doing the compounding, and FCF margins of 25-35% at scale. Appliance-heritage names (Fortinet, Check Point) blend hardware (lower margin, cyclical refresh) with high-margin subscription attach: watch product versus service mix. Services and MDR run people-margin economics: 25-45% gross, scaling with headcount until AI changes the ratio.",
      "The demand curve is fear discounted by budget cycles. Breaches, regulation, and insurance mandates create a floor under spending (Gartner: $193B to $213B, 2024 to 2025), while consolidation decides who captures it: platformization deals trade near-term discounts for multi-year lock-in, depressing billings optically while raising lifetime value. The bear math is Microsoft: when the bundle is 'free' inside E5, pure plays must out-innovate a competitor with a $20B+ security business and infinite distribution."
    ],
    fingerprint: { grossMargin: 76, recurringRevenue: 82, capitalIntensity: 22, pricingPower: 68, cyclicality: 28, operatingLeverage: 72 },
    lines: [
      { label: "ARR & net new ARR", note: "The sector's tape: CrowdStrike $5.25B, Palo Alto NGS $5.6B and guiding $7B+" },
      { label: "Net revenue retention", note: "110-120% is the platform compounding engine; below 105% the story breaks" },
      { label: "Module / platform adoption", note: "Customers on 5+ modules: the consolidation thesis made measurable" },
      { label: "Billings & RPO", note: "The forward book; platformization deals lump it, so read multi-quarter" },
      { label: "FCF margin & Rule of 40", note: "Growth plus FCF margin: the sector's quality screen, best names clear 50" }
    ],
    unitEconomics: {
      unit: "per enterprise platform customer (illustrative)",
      items: [
        { label: "Subscription gross margin", value: "75% to 80%", note: "cloud-delivered software economics" },
        { label: "Net revenue retention", value: "110% to 120%", note: "expansion from module attach, not seat growth alone" },
        { label: "CAC payback", value: "18 to 30 months", note: "long enterprise cycles, offset by near-zero churn" },
        { label: "Modules per customer", value: "5+ for platform leaders", note: "each module attach roughly doubles customer lifetime value" }
      ]
    }
  },

  kpiRefs: ["saas-arr", "saas-nrr", "saas-rule40"],
  kpiLocal: [
    {
      id: "cyber-nnarr", name: "Net New ARR", industries: ["cybersecurity"],
      definition: "New annual recurring revenue added in a period, net of churn and contraction: the sector's growth heartbeat.",
      formula: "Ending ARR minus beginning ARR for the period",
      interpretation: "The cleanest read on demand and competitive wins; guides re-rate on this number. CrowdStrike's record $330.7M net new ARR in Q4 FY2026 (+47% YoY) reset its multiple.",
      healthy: "Accelerating or stable net new ARR with NRR above 110%", warning: "Decelerating net new ARR masked by headline ARR still growing"
    },
    {
      id: "cyber-platform-mix", name: "Platform Adoption Rate", industries: ["cybersecurity"],
      definition: "Share of customers using 5 or more modules of a vendor's platform.",
      formula: "Customers with 5+ modules / total customers",
      interpretation: "Measures whether the consolidation pitch is landing: multi-module customers churn less, pay more, and anchor the NRR engine.",
      healthy: "Rising multi-module share with stable discounting", warning: "Module adoption bought with steep platformization discounts that never normalize"
    }
  ],

  health: {
    intro: "Vendor health is growth durability times trust: one bad update or breach of the vendor itself can undo a decade of brand. Sector health is the spending floor: fear, regulation, and insurance mandates hold it up.",
    pillars: [
      { name: "Growth durability", weight: 25, metrics: "Net new ARR trend, pipeline, win rates vs platforms", healthy: "Net new ARR stable or accelerating", warning: "Serial deceleration; wins requiring outsized discounts" },
      { name: "Retention & platform depth", weight: 25, metrics: "NRR, gross churn, modules per customer", healthy: "NRR 110%+, rising multi-module share", warning: "NRR slipping under 105%; single-product exposure to a bundler" },
      { name: "Efficiency (Rule of 40)", weight: 20, metrics: "Growth + FCF margin, sales efficiency, magic number", healthy: "Rule of 40 above 40, FCF margin 25%+", warning: "Growth bought with cash burn in a consolidating market" },
      { name: "Trust & operational integrity", weight: 15, metrics: "Vendor's own security record, update discipline, uptime", healthy: "Clean record, transparent postmortems", warning: "A SolarWinds- or July-2024-CrowdStrike-style self-inflicted event" },
      { name: "Balance sheet & M&A capacity", weight: 15, metrics: "Net cash, ability to buy categories vs be bought", healthy: "Net cash and accretive tuck-ins", warning: "Leverage into decelerating growth; forced-seller posture" }
    ],
    scoringNote: "Weight trust brutally: in a business that sells trust, the vendor's own incident is the one event that converts a compounder into a case study overnight."
  },

  valuation: {
    intro: "The market prices cybersecurity as SaaS with a durability premium: recurring revenue plus an adversary-funded demand floor. Multiples sort on growth, Rule of 40, and platform status.",
    methods: [
      { name: "EV / ARR (or EV / NTM revenue)", use: "The standard for growers: ARR is the cleanest unit of value", avoid: "Comparing across product vs platform mixes blindly", strengths: "Matches the recurring model; comparable across the group", weaknesses: "Ignores profitability entirely; punishes honest billings", range: { low: 5, high: 18, asOf: 2025, note: "platform leaders at the top; decelerating point vendors at the bottom" } },
      { name: "Rule of 40 regression", use: "Screening quality: growth + FCF margin vs multiple", avoid: "Names mid-transition where optics lag economics", strengths: "Separates efficient compounders from growth-at-any-cost", weaknesses: "A screen, not a valuation; regime-dependent slope", range: { low: 0, high: 0, asOf: 2025, note: "qualitative anchor: best names clear 50 and command the premium" } },
      { name: "EV / FCF for matured names", use: "Check Point, Fortinet class: cash machines with slower growth", avoid: "Applying to sub-scale burners", strengths: "Cash is honest; captures the annuity character", weaknesses: "Understates option value of new platform modules", range: { low: 20, high: 35, asOf: 2025, note: "x FCF; quality SaaS cash compounders" } },
      { name: "Strategic / M&A comps", use: "Sanity check on scarcity value of category leaders", avoid: "Marking a whole portfolio to bid premiums", strengths: "Real clearing prices: Wiz $32B, Splunk $28B, Darktrace $5.3B", weaknesses: "Strategics pay for synergies no financial buyer sees", range: { low: 8, high: 25, asOf: 2026, note: "EV/ARR paid in takeouts; hyperscalers set the ceiling" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a security vendor quickly: ARR times a growth-and-quality-adjusted multiple, plus net cash.",
      inputs: [
        { id: "vc-arr", label: "ARR ($B)", min: 0.2, max: 8, step: 0.1, value: 2, fmt: "money" },
        { id: "vc-mult", label: "EV / ARR multiple", min: 3, max: 22, step: 0.5, value: 10, fmt: "mult" },
        { id: "vc-netcash", label: "Net cash ($B)", min: -5, max: 8, step: 0.5, value: 1, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays cybersecurity as consolidation-with-a-floor: long the platform winners taking share of a budget that will not shrink, own the cash compounders for ballast, and treat point vendors as M&A lottery tickets, not core. The adversary funds the demand; the debate is only about who captures it and at what multiple.",
    debates: [
      { topic: "Platform consolidation: secular winner-take-most or a discount cycle in disguise?", bull: "CISOs genuinely want fewer vendors; multi-module customers churn less and expand forever; CrowdStrike and Palo Alto are running the Microsoft-Office playbook on a $213B budget, and the ARR scoreboards prove it is working.", bear: "Platformization is partly bought: free modules and multi-year discounts pull forward demand and depress pricing, and every consolidation era in software ended with best-of-breed re-fragmenting the stack the moment the platform's second-best products failed in production." },
      { topic: "Does Microsoft's bundle cap the whole industry?", bull: "Microsoft is the industry's biggest vendor and its biggest vulnerability: it monetizes securing its own products' flaws, regulators and CISOs increasingly resist the single-vendor concentration, and pure plays keep beating it on efficacy in the categories that matter.", bear: "A $20B+ security business growing inside an E5 license that CFOs already pay for is structural price deflation for everyone else: Microsoft does not need to be best, only free-enough, and that is how suites have always killed category software." },
      { topic: "AI: does it favor attack or defense, and who monetizes it?", bull: "Defense wins the data war: vendors sit on telemetry attackers cannot see, AI SOC agents attack the labor shortage (the industry's real constraint), and IBM already credits AI-assisted response for the first breach-cost decline in 5 years ($4.44M in 2025).", bear: "Offense scales faster: AI collapses the cost of convincing phishing, deepfakes, and vulnerability discovery for attackers with no compliance drag, while defenders must buy AI through procurement cycles. If breaches accelerate anyway, the tools look like a tax that failed." }
    ],
    cycle: {
      where: "Mid-consolidation of a structural growth market: spending compounding low-double-digits ($193B to $213B into 2025), growth leaders decelerating from 30%+ to high-teens, M&A resetting scarcity value (Wiz $32B), and AI product cycles just beginning to monetize.",
      drivers: "Threat volume and headline breaches, regulation (SEC, NIS2, DORA), cloud and AI workload growth, IT budget cycles, and the platform-vs-bundle share war.",
      leads: [
        "Vendor ARR and net new ARR prints (quarterly SEC filings, free)",
        "CISA Known Exploited Vulnerabilities additions: threat tempo, free",
        "Chainalysis and FBI IC3 annual reports: ransomware economics, free",
        "IBM Cost of a Data Breach annual (free): the CFO's fear index",
        "Cyber insurance pricing commentary in insurer earnings: the control-mandate channel"
      ]
    },
    exposure: [
      { vehicle: "Platform leaders (CrowdStrike, Palo Alto)", note: "The consolidation longs: premium multiples for share-taking ARR machines" },
      { vehicle: "Cash compounders (Fortinet, Check Point)", note: "Lower growth, real FCF: ballast with the same demand floor" },
      { vehicle: "Control-point specialists (Zscaler, CyberArk, Cloudflare)", note: "Own identity or the edge: takeout candidates with standalone economics" },
      { vehicle: "Sector ETFs (CIBR, HACK, BUG)", note: "The diversified wrapper for the budget-floor thesis without single-vendor risk" },
      { vehicle: "Adjacent: Microsoft, Google, Cisco", note: "The bundlers: security upside embedded in diversified megacaps, post Wiz and Splunk" }
    ],
    catalysts: [
      { when: "Quarterly earnings", what: "ARR, net new ARR, and NRR prints: the entire equity story in 3 numbers" },
      { when: "Aug (Black Hat/DEF CON) & spring (RSA)", what: "Product cycles, AI SOC announcements, and the narrative reset" },
      { when: "Major breach headlines (unscheduled)", what: "The perverse catalyst: sector rallies on other people's incidents" },
      { when: "Regulatory deadlines (NIS2 enforcement, SEC actions)", what: "Compliance-driven budget unlocks, especially in Europe" }
    ],
    data: [
      { series: "Vendor ARR / NRR disclosures", source: "SEC filings, investor relations (free)", why: "The primary tape for share and demand" },
      { series: "CISA KEV catalog & advisories", source: "cisa.gov (free)", why: "Real-time threat tempo from the primary source" },
      { series: "IBM Cost of a Data Breach", source: "ibm.com (free report, annual)", why: "The loss-severity anchor CFOs quote" },
      { series: "Chainalysis Crypto Crime Report", source: "chainalysis.com (free, annual)", why: "Ransomware revenue: the adversary's income statement" },
      { series: "Verizon DBIR", source: "verizon.com (free, annual)", why: "Breach patterns by vector: where the spend goes next" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Security is the last cut: budgets hold but deals shrink and lengthen; platforms with consolidation ROI pitches gain share; burners get repriced hardest." },
      { regime: "Breach wave / headline regime", behavior: "Sector outperforms on fear: incident-response names spike first, platforms convert the panic into multi-year contracts two quarters later." },
      { regime: "Rates rising", behavior: "Multiple compression hits the premium growers most; rotate toward Rule-of-40 cash compounders; M&A math slows for sponsors but not for strategics." },
      { regime: "AI capex boom", behavior: "Every new AI workload ships with a security attach; cloud-security and data-security names lever the buildout; watch for AI-agent products to reopen the growth premium." }
    ]
  },

  players: [
    { name: "CrowdStrike", role: "Endpoint-born platform leader", country: "US", real: true, note: "$5.25B ARR (FY2026); survived its July 2024 outage with retention intact" },
    { name: "Palo Alto Networks", role: "Network-born platform consolidator", country: "US", real: true, note: "NGS ARR $5.6B FY2025, guiding $7B+; platformization is the strategy and the word" },
    { name: "Microsoft", role: "The bundler", country: "US", real: true, note: "$20B+ security revenue disclosed in 2023: the industry's largest vendor and its pricing ceiling" },
    { name: "Fortinet", role: "Firewall economics master", country: "US", real: true, note: "Custom ASICs and channel reach: the sector's margin outlier" },
    { name: "Google (Wiz, Mandiant)", role: "Hyperscaler challenger", country: "US", real: true, note: "Closed Wiz for $32B (Mar 2026): the largest pure-cyber acquisition on record" },
    { name: "Zscaler", role: "Zero-trust / SASE specialist", country: "US", real: true, note: "The cloud-proxy pure play riding the appliance-to-cloud refresh" },
    { name: "Check Point", role: "The veteran cash machine", country: "IL", real: true, note: "Israel's security flagship: decades of high-margin FCF, slower growth" },
    { name: "Cisco (Splunk)", role: "Networking incumbent buying relevance", country: "US", real: true, note: "$28B for Splunk (closed 2024): the telemetry seat, bought not built" }
  ],

  geography: [
    { country: "US", role: "Demand core + platform HQs", note: "The largest budgets, the SEC's disclosure regime, and most of the market cap" },
    { country: "IL", role: "The startup foundry", note: "Unit 8200 alumni pipeline; Wiz, Check Point, CyberArk: outsized share of new company formation" },
    { country: "GB", role: "European hub", note: "NCSC's active-defense doctrine, Darktrace heritage, and the cyber insurance market at Lloyd's" },
    { country: "CN", role: "Walled market + named adversary", note: "Domestic vendors only inside; Volt Typhoon-class campaigns attributed by Western agencies outside" },
    { country: "RU", role: "The adversary economy's home turf", note: "Most major ransomware crews operate from or around its jurisdiction, per Western law enforcement" },
    { country: "IN", role: "The global SOC floor", note: "Managed security delivery and services scale: the labor behind the tooling" }
  ],

  cycles: [
    { year: 2013, title: "Target and the board awakening", kind: "shift", text: "A 40M-card breach via an HVAC vendor costs the CEO his job; Snowden redefines the insider threat. Security budgets move from IT discretionary to board mandate. Lesson: breaches reprice governance, and governance buys product." },
    { year: 2017, title: "WannaCry / NotPetya", kind: "bust", text: "Wormable nation-state tooling escapes into the wild; ~$10B of damage, shipping lines and factories halted, insurers hit with war-exclusion litigation. Lesson: cyber risk is macro risk, and one leaked exploit can tax the whole economy." },
    { year: 2020, title: "SolarWinds", kind: "shift", text: "A poisoned software update compromises US agencies and Fortune 500s through their own vendor. Supply chain security becomes a category overnight. Lesson: the trust chain is the attack surface: your vendor's breach is your breach." },
    { year: 2022, title: "The multiple reset", kind: "bust", text: "Rate hikes cut high-growth security multiples in half or worse even as spending grew; unprofitable vendors funded at 40x ARR faced a decade of catch-up. Lesson: the demand floor protects revenue, not valuations." },
    { year: 2024, title: "The CrowdStrike outage and the consolidation year", kind: "shift", text: "A faulty content update crashes ~8.5M Windows machines: the defender becomes the outage. Meanwhile ransomware payments fall (35)% to $813M and the giants shop: Splunk closes, Wiz is bid. Lesson: concentration cuts both ways: platforms compound trust, and spend it all at once." }
  ],

  risks: [
    { name: "Hyperscaler bundling", severity: 4, likelihood: 4, transmission: "Microsoft/Google fold security into cloud contracts -> pricing pressure across categories -> pure-play growth and multiples compress." },
    { name: "Consolidation squeeze on point vendors", severity: 4, likelihood: 4, transmission: "CISOs cut vendor counts -> single-product names lose renewals -> forced sales at falling multiples (the Thoma Bravo pipeline)." },
    { name: "Vendor self-inflicted event", severity: 5, likelihood: 2, transmission: "A bad update or breach of the vendor itself (SolarWinds, July 2024) -> trust evaporates -> churn, litigation, and regulatory scrutiny compound for years." },
    { name: "AI-accelerated offense", severity: 4, likelihood: 3, transmission: "AI collapses attacker costs -> breach frequency outruns tooling -> boards question ROI even as spend rises; efficacy, not budget, becomes the bottleneck." },
    { name: "Budget normalization", severity: 3, likelihood: 2, transmission: "A quiet threat year plus CFO scrutiny -> security audited like any other line item -> growth reverts toward IT-budget rates and the premium multiple unwinds." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Cybersecurity companies sell protection for computers, networks, and data: subscriptions that block hackers, spot break-ins, and clean up afterward. The world spends about $213B a year on it (2025), and spending keeps rising because attackers keep getting better: the average corporate breach costs $4.44M, and over $10M in the US."] },
    L2: { title: "Intermediate", text: ["The industry runs on SaaS economics with a fear-driven demand floor: 75%+ gross margins, revenue measured in ARR, and customers who almost never leave because switching is risky. The big fight is consolidation: platforms like CrowdStrike ($5.25B ARR) and Palo Alto ($5.6B next-gen ARR) absorb the 50-tool security stack, while Microsoft bundles a $20B+ security business into licenses companies already buy. Even the criminals have economics: ransomware collected $813M in 2024, down (35)% after police takedowns."] },
    L3: { title: "Advanced", text: ["Analyze vendors on 3 numbers: net new ARR (demand and share), NRR (the compounding engine, 110%+ healthy), and Rule of 40 (growth plus FCF margin, quality screen). Distinguish P&L species: platform SaaS, appliance-heritage hybrids (Fortinet's hardware-attach model), and people-margin services. Platformization deals trade near-term billings for lock-in: read multi-quarter, not one print. The structural bear case is always Microsoft: free-enough beats best when budgets tighten."] },
    L4: { title: "Expert", text: ["Trade the tape: quarterly ARR prints, CISA KEV tempo, ransomware economics (Chainalysis), and M&A resets (Wiz $32B, Splunk $28B set the scarcity math). Live debates: whether platformization is secular share gain or a discount cycle, whether AI rearms offense faster than defense monetizes it, and whether the vendor-trust tail risk (SolarWinds, the July 2024 outage) is priced. Breach headlines are perverse catalysts: the sector rallies on other people's incidents, then converts panic into contracts 2 quarters later."] },
    L5: { title: "Institutional", text: ["Allocator's frame: cybersecurity is the rare software vertical with an exogenous, self-funding demand driver: the adversary innovates, regulation ratchets, and insurance mandates convert best practice into procurement. Core the platform compounders and the FCF veterans, hold specialists as takeout optionality, and size the bundler risk explicitly: Microsoft is both the industry's biggest vendor and its pricing ceiling. The unhedgeable risk is reflexive: every vendor is itself a target, and in a trust business, one self-inflicted incident converts a decade of compounding into a case study."] }
  },

  quiz: [
    { q: "Worldwide end-user security spending in 2025 (Gartner) is roughly:", choices: ["$50B", "$213B, up from $193B in 2024", "$1T", "$20B"], answer: 1, explain: "Gartner's July 2025 update: $213B, growing well above overall IT budgets: the fear-and-regulation demand floor at work." },
    { q: "The average global cost of a data breach in 2025 (IBM) was:", choices: ["$44,000", "$4.44M globally, $10.22M in the US", "$1B", "Unmeasurable"], answer: 1, explain: "IBM's 2025 study: $4.44M average, the first decline in 5 years (credited to AI-assisted response); US breaches cost over 2x the global mean." },
    { q: "Ransomware payments in 2024 (Chainalysis) did what?", choices: ["Doubled", "Fell (35)% to $813M after takedowns and payment refusals", "Went to zero", "Hit $100B"], answer: 1, explain: "LockBit's disruption and hardened victims cut payments from $1.25B to $813M: the adversary economy has cycles too." },
    { q: "The 'platformization' war is about:", choices: ["Cheaper laptops", "Consolidating 50-tool security stacks onto a few platforms: the ARR follows", "Open-source licensing", "Government contracts only"], answer: 1, explain: "CISOs are cutting vendor counts; CrowdStrike ($5.25B ARR) and Palo Alto ($5.6B NGS ARR) are the consolidation scoreboards." },
    { q: "Microsoft matters to every security investor because:", choices: ["It exited security", "Its $20B+ security business bundles into licenses companies already buy: the industry's pricing ceiling", "It only serves consumers", "It regulates the sector"], answer: 1, explain: "Free-enough inside E5 is structural price pressure: pure plays must out-innovate a competitor with infinite distribution." },
    { q: "Google's 2026-closed Wiz acquisition was notable as:", choices: ["A small tuck-in", "The largest pure-cybersecurity deal ever at $32B", "A failed bid", "A hardware deal"], answer: 1, explain: "Announced March 2025, closed March 2026: hyperscalers now set the ceiling on security M&A math." },
    { q: "The July 2024 CrowdStrike incident taught the industry that:", choices: ["Endpoint security is obsolete", "Platform concentration cuts both ways: a defender's bad update crashed ~8.5M machines", "Outages don't matter", "Regulation ended"], answer: 1, explain: "The defender became the outage: trust is the product, and concentration means one mistake propagates at platform scale." },
    { q: "The healthiest quick screen for a security vendor combines:", choices: ["Headcount and offices", "Net new ARR, NRR above 110%, and Rule of 40", "Patent count", "Ad spend"], answer: 1, explain: "Demand, compounding, and efficiency in 3 numbers: the sector's entire equity story reduces to them." }
  ],

  sources: [
    { name: "Gartner: information security spending forecast ($213B, 2025)", url: "https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025", feeds: "market size, growth" },
    { name: "IBM Cost of a Data Breach Report 2025 ($4.44M global average)", url: "https://www.ibm.com/reports/data-breach", feeds: "breach economics" },
    { name: "Chainalysis Crypto Crime Report (2024 ransomware payments $813M)", url: "https://www.chainalysis.com/blog/crypto-ransomware-payments-2024/", feeds: "adversary economics" },
    { name: "Palo Alto Networks FY2025 Q4 earnings release (SEC 8-K; NGS ARR $5.6B)", url: "https://www.sec.gov/Archives/edgar/data/1327567/000132756725000024/ex991q425earningsrelease.htm", feeds: "vendor ARR, platformization" }
  ]
};
