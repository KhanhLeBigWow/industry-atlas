/* Industry Atlas - PRIVATE EQUITY (full module, research-backed)
 * Anchors: 2025 global buyout deal value $904B (+44%) and exit value $717B (+47%),
 * second-best year ever (Bain Global PE Report 2026); ~32,000 unsold portfolio
 * companies worth ~$3.8T, holding periods ~7 years, distributions below 15% of NAV
 * for 4 straight years (Bain 2026); buyout dry powder ~$1.3T, aging into 2022-23
 * vintages (Bain 2026); secondaries volume $240B in 2025 (+48%), GP-led ~$115B,
 * 147 continuation-fund exits (Jefferies Global Secondary Market Review, Jan 2026);
 * global PE AUM ~$9T (Preqin); alternatives forecast to $32T by 2030 (Preqin, Oct 2025). */
window.ATLAS_INDUSTRIES = window.ATLAS_INDUSTRIES || {};
window.ATLAS_INDUSTRIES["private-equity"] = {
  meta: {
    id: "private-equity", name: "Private Equity", sector: "finance", status: "full",
    tagline: "A $9T machine for buying companies with borrowed money: currently brilliant at buying, jammed at selling.",
    marketSize: { value: 9, unit: "$T", asOf: 2025, mapValue: 200, note: "global PE AUM (Preqin); buyout is the core, VC/growth/secondaries the rest; alternatives overall forecast to $32T by 2030. Map sizing uses the ~$200B annual fee-and-carry revenue pool" },
    cagr: { value: 10, range: [8, 13], horizon: "2025-2030" },
    maturity: "maturing-growth", cyclicality: 4, capitalIntensity: 1, regulation: 3, disruption: 3
  },
  newsQuery: '(Blackstone OR KKR OR "Apollo Global" OR Carlyle OR "private equity" OR "leveraged buyout" OR "take-private" OR "continuation vehicle")',

  overview: {
    definition: "Private equity firms raise 10-year funds from institutions, buy whole companies using significant debt, work them over for 5 to 7 years, and sell them for (ideally) multiples of the equity invested. The managers keep 20% of the profits. It is the acquisition arm of the institutional capital world, now managing roughly $9T.",
    howItWorks: [
      "The vehicle is the closed-end fund: LPs (pensions, sovereign funds, endowments, insurers) commit capital for 10+ years; the GP calls it down deal by deal. Economics are '2 and 20': a management fee (roughly 1.5% to 2% of commitments) that pays the bills regardless of performance, and carried interest (20% of profits above a hurdle, typically 8%) where the fortunes are made. The LBO itself is simple arithmetic: buy at 11x to 12x EBITDA with 50% to 60% debt, and every turn of EBITDA growth, margin gain, or multiple expansion compounds onto a levered equity slice.",
      "Returns come from 3 levers: leverage, multiple expansion, and operating improvement. The first 2 did most of the work in the ZIRP decade; the 2022 rate shock repriced both. Bain's 2026 report is blunt: cheap debt and easy multiple expansion are gone for the foreseeable future, so value creation has swung to operations: pricing, procurement, add-on M&A at lower multiples, and increasingly AI-driven cost programs. Entry discipline now decides vintages the way leverage once did.",
      "The whole industry runs on a flywheel: raise, deploy, exit, distribute, raise again. That flywheel is jammed at the exit stage. Roughly 32,000 portfolio companies worth about $3.8T sit unsold globally (Bain, 2026), holding periods at exit have stretched to about 7 years, and distributions have run below 15% of NAV for 4 consecutive years: an industry record. LPs who are not getting cash back cannot recommit, which is why fundraising lagged even as 2025 dealmaking rebounded 44% to $904B.",
      "The response to the jam is financial engineering on the fund itself: a $240B secondaries market (2025, up 48%) where LPs sell stakes and GPs roll prized assets into continuation vehicles: 147 CV exits in 2025, and nearly 80% of the top 100 sponsors have now done one. Meanwhile the industry's structure is barbelling: mega-platforms (Blackstone, KKR, Apollo) diversify into credit, infrastructure, and insurance balance sheets and court private wealth through evergreen funds, while thousands of mid-market firms fight for the same LP dollar. The listed GPs are effectively fee-stream compounders wearing a deal firm's clothes."
    ],
    history: [
      { era: "1979-1989", title: "The LBO is invented", text: "KKR's early buyouts and Drexel's junk bonds create the playbook; the $25B RJR Nabisco fight (1989) makes 'Barbarians at the Gate' the industry's founding myth and its first cautionary tale." },
      { era: "1990-2006", title: "Institutionalization", text: "Pensions and endowments (the Yale model) make PE a core allocation; funds grow from millions to billions; the 2 and 20 template hardens." },
      { era: "2007-2012", title: "Mega-buyout hubris and the GFC", text: "The 2006-07 club-deal peak (TXU at ~$45B) meets the crisis; 'amend and extend' saves most deals, and the asset class's survival converts skeptics." },
      { era: "2013-2021", title: "The ZIRP golden age", text: "Free money quadruples AUM; entry multiples grind up; 2021 sets all-time records for deals and exits; GPs list on public markets and diversify into everything." },
      { era: "2022-present", title: "Rate reset and the liquidity squeeze", text: "Rates end the multiple-expansion trade; exits freeze, holding periods stretch to ~7 years, and $3.8T of unsold companies pile up; CVs and secondaries become the industry's release valve while 2025 dealmaking ($904B) stages a narrow recovery." }
    ],
    trends: [
      { title: "The exit drought and DPI crisis", direction: "down", text: "Distributions below 15% of NAV for 4 straight years; ~32,000 companies worth ~$3.8T unsold. Until cash comes back, fundraising stays rationed and LPs triage GP relationships." },
      { title: "Continuation vehicles go mainstream", direction: "up", text: "GP-led secondaries hit ~$115B in 2025 with 147 CV exits; ~80% of the top 100 sponsors have done one. Critics note CVs defer the distribution problem rather than solve it." },
      { title: "Private wealth and evergreen funds", direction: "up", text: "The next trillion is retail: semi-liquid evergreen vehicles, 401(k) ambitions, and wealth platforms distributing PE in $25K increments. Fee-rich, liquidity-mismatched, and regulator-watched." },
      { title: "Consolidation of the GP landscape", direction: "shift", text: "Mega-platforms compound AUM across credit, infrastructure, and insurance while mid-market firms merge, sell GP stakes, or quietly become zombies that cannot raise the next fund." },
      { title: "Value creation moves to operations", direction: "shift", text: "With leverage and multiple expansion neutered, margin work, add-on M&A, and AI adoption inside portfolio companies carry the returns math. Bain calls it a new era; entry price discipline is the tell." }
    ],
    outlook: "The recovery is real but narrow: 2025 deal value ($904B) and exits ($717B) were the second best ever, yet 13 megadeals supplied 30% of the total and the distribution engine remains clogged. The base case is a multi-year grind: exits normalize slowly, CVs and secondaries institutionalize as a permanent third exit route, and AUM keeps compounding toward Preqin's $32T all-alternatives 2030 marker, with private wealth as the marginal buyer. The bear case is that a $3.8T backlog marked at hopeful NAVs meets a real repricing. Either way, the mega-platforms' fee streams look more durable than the average fund's carry."
  },

  structure: {
    suppliers: [
      { name: "Investment banks", note: "Sell-side auctions and financing: the deal-flow supply chain" },
      { name: "Lenders (banks + private credit)", note: "The leverage itself; direct lenders now write whole unitranches" },
      { name: "Advisors (consultants, lawyers, accountants)", note: "Due diligence industrial complex; billions in fees per cycle" },
      { name: "Placement agents & secondaries advisors", note: "Matchmakers for fundraises and the $240B secondary market" }
    ],
    producers: [
      { name: "Mega-platforms (Blackstone, KKR, Apollo, Carlyle)", note: "Multi-asset alternative managers; listed, diversified, fee machines" },
      { name: "Large-cap specialists (Thoma Bravo, Vista, Advent, EQT, CVC)", note: "Sector depth as the edge, software above all" },
      { name: "Mid-market firms (thousands)", note: "Where most deals happen and most fundraising pain lives" },
      { name: "Secondaries houses (Ardian, Lexington, HarbourVest)", note: "Liquidity providers to everyone else; the cycle's winners" }
    ],
    distributors: [
      { name: "Placement agents & wealth platforms (iCapital class)", note: "The new retail rails: feeder funds and evergreen vehicles into private banks" }
    ],
    customers: [
      { name: "Public pensions", note: "The anchor LPs; allocation targets near 10%+ and denominator-effect constrained" },
      { name: "Sovereign wealth funds", note: "Gulf and Asian capital: the largest checks and co-invest appetite" },
      { name: "Endowments & foundations", note: "The original believers; now the most DPI-starved" },
      { name: "Insurers & private wealth", note: "The growth frontier: annuity balance sheets and evergreen retail" }
    ],
    regulators: [
      { name: "SEC", note: "Advisers Act oversight; its 2023 private fund rules were struck down in 2024, but exam pressure persists" },
      { name: "FTC / DOJ antitrust", note: "Roll-up strategies and interlocking directorates under scrutiny" },
      { name: "EU AIFMD & national regulators", note: "Europe's marketing and leverage rulebook" },
      { name: "Tax authorities", note: "Carried interest's treatment: a perennial political football" }
    ],
    capital: [
      { name: "LP commitments", note: "The raw material: 10-year locked capital, called on demand" },
      { name: "Leveraged loan & high-yield markets", note: "Traditional LBO fuel; syndicated vs private credit share swings with spreads" },
      { name: "NAV loans & subscription lines", note: "Fund-level leverage smoothing calls and juicing IRRs; controversial when used for distributions" },
      { name: "GP-stakes investors", note: "Blue Owl class buying minority stakes in the managers themselves" }
    ]
  },

  valueChain: {
    intro: "From an LP's committed dollar to a realized exit and back again. The tollbooth is the management company: fees are contractual, carry is the lottery ticket, and the current cycle's profits pool wherever liquidity is scarce.",
    stages: [
      { id: "fundraising", name: "Fundraising", what: "Raising 10-year committed capital from LPs", players: "GPs' IR teams, placement agents, consultants", valueCapture: 4,
        economics: { grossMargin: [50, 70], capitalIntensity: 1, concentration: 3 },
        linksTo: ["asset-management", "wealth-management", "insurance"],
        deeper: "The fee stream is set here: ~1.5% to 2% on committed capital for 10+ years, contractually locked. In the current squeeze, re-ups follow DPI: GPs who returned cash raise in months; those who did not stretch to 2-year fundraises or die. Private wealth is the new marginal dollar." },
      { id: "origination", name: "Sourcing & deal selection", what: "Finding and winning targets: auctions, take-privates, founders", players: "Deal teams, investment banks, buyside advisors", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 2 },
        linksTo: ["investment-banking"],
        deeper: "Entry price is the one decision that cannot be fixed later. 2025's rebound leaned on take-privates and corporate carve-outs: 13 megadeals above $10B supplied $274B, 30% of global value, 11 of them in the US. Proprietary sourcing is mostly marketing; auction discipline is the real edge." },
      { id: "financing", name: "Leverage & structuring", what: "Debt packages: syndicated loans, private credit, bonds", players: "Banks, direct lenders, CLOs", valueCapture: 3,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 3 },
        linksTo: ["private-credit", "banking", "capital-markets"],
        deeper: "The LBO's engine room. Post-2022, private credit took huge share of buyout financing with speed and certainty as the pitch; syndicated markets clawed some back on price. Structures got safer (50% loan-to-value class) but costlier: interest coverage, not covenants, is the portfolio's binding constraint." },
      { id: "ownership", name: "Ownership & value creation", what: "5 to 7 years of operational work: pricing, add-ons, talent, AI", players: "Operating partners, portfolio company management, consultants", valueCapture: 4,
        economics: { grossMargin: [0, 0], capitalIntensity: 2, concentration: 1 },
        linksTo: ["saas", "manufacturing", "hospitals"],
        deeper: "Where returns must now come from: with multiple expansion gone, EBITDA growth carries the math. Playbooks concentrate in fragmented services, software, and healthcare: buy-and-build at lower add-on multiples remains the most reliable arbitrage. Holding periods at exit now average ~7 years, so the operational clock runs longer than the model assumed." },
      { id: "exit", name: "Exit", what: "Sales to strategics, sponsors, or IPO", players: "Investment banks, corporate buyers, other sponsors", valueCapture: 5,
        economics: { grossMargin: [0, 0], capitalIntensity: 1, concentration: 2 },
        linksTo: ["capital-markets", "investment-banking"],
        deeper: "The choke point of the entire asset class. Exit value recovered 47% to $717B in 2025, yet ~32,000 companies (~$3.8T) remain unsold and almost 40% of holdings are now past 5 years. Sponsor-to-sponsor sales and corporate M&A are doing the work; the IPO window opens only for the largest, cleanest assets." },
      { id: "secondaries", name: "Secondaries & fund liquidity", what: "LP stake sales, continuation vehicles, NAV lending", players: "Ardian, Lexington, HarbourVest, Jefferies (advisory)", valueCapture: 5,
        economics: { grossMargin: [50, 70], capitalIntensity: 3, concentration: 3 },
        linksTo: ["asset-management", "wealth-management"],
        deeper: "The release valve turned asset class: $240B of 2025 volume (LP-led $125B, GP-led $115B), a 48% jump to a record. CVs let GPs hold winners and crystallize some carry; buyers get quality assets at known marks. The open question is whether CVs are a third exit route or a can-kicking machine: Bain notes they defer rather than solve the distribution problem." }
    ]
  },

  financials: {
    businessModel: [
      "Read a PE firm as 2 businesses stapled together. The management company earns fee-related earnings (FRE): contractual management fees on committed or invested capital, minus a lean cost base: 50%+ FRE margins at scale, recurring for a decade at a time, and the reason listed GPs trade like asset-light compounders. The carry vehicle earns performance fees: 20% of profits above an 8% hurdle, recognized lumpily, shared with the deal teams, and utterly cycle-dependent. Fundraising drives the first; exits drive the second. Today the first is healthy and the second is starved.",
      "Fund-level economics follow the J-curve: fees drag returns negative in years 1 to 3, value builds through the middle years, and distributions land in years 5 to 10 (now stretching longer: holding periods at exit average ~7 years). LP math lives on DPI (cash back over cash in), not IRR, and 4 straight years of distributions below 15% of NAV have made that painfully clear. Watch the flywheel metrics: fundraising vs deployment, dry powder age (buyout's ~$1.3T skews to 2022-23 vintages that must deploy or expire), and the NAV-to-exit-value gap that determines whether today's marks are real."
    ],
    fingerprint: { grossMargin: 60, recurringRevenue: 75, capitalIntensity: 15, pricingPower: 65, cyclicality: 65, operatingLeverage: 70 },
    lines: [
      { label: "Management fees / FRE", note: "The contractual annuity: ~1.5% to 2% on committed capital, 50%+ margins at scale" },
      { label: "Carried interest", note: "20% of profits over the hurdle: the lumpy, levered lottery ticket" },
      { label: "Fundraising & net inflows", note: "The growth engine: follows DPI with a lag" },
      { label: "Deployment & dry powder", note: "~$1.3T of buyout dry powder, aging: fee clocks and deadlines attached" },
      { label: "Realizations / DPI", note: "The cycle's scarcest line item: below 15% of NAV for 4 straight years" }
    ],
    unitEconomics: {
      unit: "per $1B flagship buyout fund (illustrative)",
      items: [
        { label: "Management fee", value: "~$15-20M/yr", note: "1.5% to 2% on committed, stepping down post-investment period" },
        { label: "Carried interest at 2.0x gross", value: "~$200M", note: "20% of $1B profit, above an 8% preferred return" },
        { label: "GP commitment", value: "$20-50M", note: "2% to 5% skin in the game, often financed" },
        { label: "Fund life", value: "10 yrs + extensions", note: "and extensions are now the norm, not the exception" }
      ]
    }
  },

  kpiRefs: ["am-netflows", "am-feerate"],
  kpiLocal: [
    {
      id: "pe-dpi", name: "DPI (Distributions to Paid-In)", industries: ["private-equity"],
      definition: "Cumulative cash returned to LPs divided by cash they paid in: the realized, unfakeable return metric.",
      formula: "DPI = cumulative distributions / paid-in capital",
      interpretation: "IRR can be engineered (sub lines, early marks); DPI is cash in the LP's account. Funds should reach ~1.0x by years 7 to 8. Industry-wide distributions have run below 15% of NAV for 4 straight years (Bain, 2026): the drought defining this cycle.",
      healthy: "1.0x+ by year 8; annual distributions above ~20% of NAV", warning: "DPI flat for years while IRR looks fine: marks, not money"
    },
    {
      id: "pe-drypowder", name: "Dry Powder & Vintage Age", industries: ["private-equity"],
      definition: "Committed but uncalled capital, and how old it is. Buyout dry powder stands near $1.3T, majority raised in 2022-23.",
      formula: "Dry powder = commitments called-down not yet invested; age = years since fund close",
      interpretation: "Fresh dry powder is optionality; old dry powder is pressure. Investment periods expire at ~5 years, so aging powder forces deployment at whatever prices prevail: a seller's best friend and a vintage's quiet killer.",
      healthy: "Powder young and deploying on plan", warning: "Majority of powder 3+ years old; deployment racing the clock"
    }
  ],

  health: {
    intro: "GP health is the durability of the fee stream and the honesty of the marks; fund health is DPI; industry health is whether the flywheel spins: raise, deploy, exit, distribute, repeat.",
    pillars: [
      { name: "Distribution engine (DPI)", weight: 25, metrics: "Distributions as % of NAV, holding periods, exit mix", healthy: "Distributions above 20% of NAV; holds under 6 years", warning: "Sub-15% of NAV for years; ~7-year holds; CV-dependent exits" },
      { name: "Fundraising & re-up rate", weight: 25, metrics: "Fund size vs predecessor, time to close, LP re-up %", healthy: "Successors at or above prior size in under 12 months", warning: "18+ month raises, shrinking funds, zombie risk" },
      { name: "Fee durability & FRE margin", weight: 20, metrics: "FRE margin, fee rate trend, perpetual-capital share", healthy: "FRE margins 50%+; growing evergreen/insurance base", warning: "Fee compression, heavy reliance on transaction fees" },
      { name: "Portfolio leverage & marks", weight: 15, metrics: "Interest coverage, covenant headroom, NAV vs exit evidence", healthy: "Coverage above 2x; exits at or above carrying marks", warning: "PIK toggles spreading; exits below marks; NAV-loan stacking" },
      { name: "Team & succession", weight: 15, metrics: "Carry spread, senior turnover, founder transition", healthy: "Broad carry participation, executed succession", warning: "Key-person flight, founder economics hoarding" }
    ],
    scoringNote: "In PE the unforgivable event is a broken flywheel: a GP that cannot return cash cannot raise, and a GP that cannot raise is a runoff vehicle with expensive offices."
  },

  valuation: {
    intro: "Two distinct problems: valuing the listed managers (fee streams plus a carry option) and valuing the funds' assets themselves (where NAV is an opinion until an exit makes it a fact).",
    methods: [
      { name: "P / distributable earnings (listed GPs)", use: "Blackstone, KKR, Apollo class: DE blends FRE and realized carry", avoid: "Treating peak realization years as run-rate", strengths: "Matches how the firms report and guide", weaknesses: "Carry's lumpiness distorts single years", range: { low: 15, high: 25, asOf: 2025, note: "P/DE; FRE-heavy platforms command the top of the range" } },
      { name: "Sum-of-the-parts: FRE multiple + carry at a discount", use: "Separating the annuity from the option", avoid: "Full value for unrealized carry on stale marks", strengths: "Prices the 2 businesses correctly", weaknesses: "Carry discount is a guess dressed as precision", range: { low: 20, high: 30, asOf: 2025, note: "FRE multiple range; net accrued carry typically at 0.5x or less" } },
      { name: "EV / EBITDA at the deal level", use: "Underwriting buyouts and reading entry discipline", avoid: "Trusting marks that have not met a buyer", strengths: "The industry's native language", weaknesses: "Adjusted EBITDA is a negotiation, not a number", range: { low: 10, high: 13, asOf: 2025, note: "average buyout entry multiples; software and healthcare above" } },
      { name: "NAV discount (listed funds and secondaries)", use: "Listed PE trusts and LP stake pricing", avoid: "Assuming discounts always close", strengths: "The market's live verdict on private marks", weaknesses: "Illiquid, sentiment-swung", range: { low: 75, high: 95, asOf: 2025, note: "secondary pricing as % of NAV for buyout LP stakes" } }
    ],
    calculator: {
      type: "multiple",
      intro: "Value a listed alternative manager quickly: fee-related earnings times an FRE multiple, plus net accrued carry taken at a haircut.",
      inputs: [
        { id: "vc-fre", label: "Fee-related earnings ($B)", min: 0.2, max: 8, step: 0.2, value: 2, fmt: "money" },
        { id: "vc-fremult", label: "FRE multiple", min: 12, max: 32, step: 1, value: 24, fmt: "mult" },
        { id: "vc-carry", label: "Net accrued carry, discounted ($B)", min: 0, max: 20, step: 0.5, value: 4, fmt: "money" }
      ]
    }
  },

  pmView: {
    positioning: "The desk plays PE 2 ways: own the listed mega-platforms as fee-stream compounders with a free carry option, and treat the asset class itself as a liquidity cycle: DPI is the tape. The scarce commodity this cycle is cash back to LPs, which is why secondaries and CV specialists hold the best economics. Demand for the product (LP allocations, retail rails) is secular; the flywheel's exit stage is cyclical and currently the whole story.",
    debates: [
      { topic: "Is the $3.8T backlog a repricing waiting to happen?", bull: "Marks have been validated by 2025's $717B of exits landing at or near NAV; rate cuts plus open credit markets clear the inventory over 3 to 4 years, and today's discounted secondary buyers earn the easiest returns in the asset class.", bear: "The unsold 32,000 are unsold for a reason: 2021 entry prices at 2021 multiples with 2026 rates. Adverse selection means the good assets exited first; what remains meets buyers 10% to 20% below carrying value, and DPI-starved LPs discover NAV was a narrative." },
      { topic: "Continuation vehicles: third exit route or can-kicking machine?", bull: "CVs keep compounding assets with the GP who knows them best, give LPs a cash option at a market-tested price, and 147 exits in 2025 with ~80% of top sponsors participating says the structure is now institutional plumbing.", bear: "The GP sets the price, picks the asset, and collects fees twice; conflicts are structural, and Bain itself notes CVs defer rather than solve the distribution problem. When a tool exists mainly because the honest exit price is unacceptable, that tells you the price." },
      { topic: "Retail and evergreen funds: the next trillion or the next scandal?", bull: "Private wealth allocations sit at a fraction of institutional levels with $80T+ of household assets to tap; evergreen structures solve the J-curve and commitment mechanics, and the mega-platforms' distribution deals make it inevitable.", bear: "Semi-liquid wrappers on illiquid assets are a redemption-gate headline waiting for its cycle; fees stack through feeder chains, returns get diluted by cash drags, and the first gated retail fund brings the regulatory reckoning the industry has dodged." }
    ],
    cycle: {
      where: "Early in a narrow recovery within a liquidity squeeze: 2025 deal value $904B (+44%) and exits $717B (+47%) were the second best ever, but 13 megadeals drove 30% of value, dry powder is aging, and distributions remain historically depressed: the flywheel turns but grinds.",
      drivers: "Rates and credit spreads (LBO math), exit windows (IPO and corporate M&A appetite), LP liquidity (DPI feeding re-ups), and regulatory posture on retail access.",
      leads: [
        "Listed GP earnings (Blackstone, KKR, Apollo 10-Qs: fundraising, deployment, realizations; free on SEC EDGAR)",
        "Bain Global Private Equity Report (annual, free: deal, exit, dry powder anchors)",
        "Jefferies Global Secondary Market Review (semiannual, free: volumes and NAV pricing)",
        "Preqin insights and quarterly updates (free summaries: AUM, fundraising)",
        "Fed Senior Loan Officer Survey + leveraged-loan headlines (free: credit conditions for LBOs)"
      ]
    },
    exposure: [
      { vehicle: "Listed mega-platforms (Blackstone, KKR, Apollo, Carlyle class)", note: "FRE compounders with carry optionality: the cleanest public expression" },
      { vehicle: "Listed PE trusts and funds-of-funds (HarbourVest, Pantheon class, LSE-listed)", note: "Buy diversified NAV at a discount; the discount is the trade" },
      { vehicle: "Secondaries specialists (Ardian, Lexington via parents; StepStone class)", note: "This cycle's best seat: liquidity provider pricing power" },
      { vehicle: "GP-stakes vehicles (Blue Owl class)", note: "Royalty on the industry's fee streams across dozens of managers" },
      { vehicle: "Listed-PE ETFs (PSP class)", note: "Blunt beta on the listed managers; fee-heavy but simple" }
    ],
    catalysts: [
      { when: "Quarterly (GP earnings)", what: "Fundraising, deployment, and realization prints: the industry's only real-time tape" },
      { when: "Annually (Feb-Mar)", what: "Bain and Preqin global reports reset the anchor numbers everyone quotes" },
      { when: "Semiannually", what: "Jefferies secondary review: NAV pricing tells you what marks are really worth" },
      { when: "Rate decisions & credit windows", what: "Every 50bps changes LBO math, refi runways, and exit windows" }
    ],
    data: [
      { series: "Listed GP filings (BX, KKR, APO, CG)", source: "SEC EDGAR (free)", why: "AUM, FRE, carry, deployment: primary source" },
      { series: "Global deal/exit/dry powder totals", source: "Bain Global PE Report (free annual)", why: "The industry's benchmark scoreboard" },
      { series: "Secondary market volume & pricing", source: "Jefferies review (free)", why: "The live market price of private marks" },
      { series: "Fundraising and AUM trends", source: "Preqin insights (free summaries)", why: "Flywheel input: what LPs are actually committing" },
      { series: "Leveraged loan conditions", source: "Fed SLOOS + LSTA commentary (free)", why: "The cost and availability of the industry's fuel" }
    ],
    playbook: [
      { regime: "Recession", behavior: "Carry evaporates and marks lag reality, but fee streams hold and dry powder buys cheap: recession vintages are historically the best. Own FRE, fade unrealized carry." },
      { regime: "Rates falling", behavior: "The all-clear signal: LBO math improves, exit windows open, DPI recovers, and the backlog clears. Listed GPs re-rate first, secondaries discounts narrow second." },
      { regime: "Rates rising / credit shock", behavior: "Deal volume stalls, coverage ratios bite, PIK spreads, and the NAV-vs-reality gap widens. Secondaries buyers and liquidity providers take pricing power." },
      { regime: "Regulatory turn", behavior: "Carry taxation and retail-product rules are the levers; headline risk for listed GPs, existential only if fee structures are touched: they have survived every prior attempt." }
    ]
  },

  players: [
    { name: "Blackstone", role: "The mega-platform", country: "US", real: true, note: "Largest alternatives manager (AUM above $1.2T); the fee-stream compounder template" },
    { name: "KKR", role: "The original, reinvented", country: "US", real: true, note: "From RJR Nabisco to insurance balance sheets and Asia" },
    { name: "Apollo", role: "Credit-PE hybrid", country: "US", real: true, note: "Athene's annuity engine makes it as much insurer as sponsor" },
    { name: "Carlyle", role: "Global buyout house", country: "US", real: true, note: "The government-adjacent pioneer, rebuilding its fee story" },
    { name: "EQT", role: "Europe's listed champion", country: "SE", real: true, note: "Nordic roots, global funds, early CV and exit-machine adopter" },
    { name: "CVC", role: "Europe's buyout giant", country: "LU", real: true, note: "2024 IPO; sports and consumer franchise deals a specialty" },
    { name: "Thoma Bravo", role: "Software specialist", country: "US", real: true, note: "The pure software-buyout playbook at $100B+ scale" },
    { name: "Ardian", role: "Secondaries powerhouse", country: "FR", real: true, note: "The largest secondaries buyer: this cycle's pricing power seat" }
  ],

  geography: [
    { country: "US", role: "The epicenter", note: "Majority of global deal value; 11 of 2025's 13 megadeals; the deepest debt markets" },
    { country: "GB", role: "Europe's PE capital", note: "London: the sponsor and advisor hub for European buyouts" },
    { country: "LU", role: "Fund domicile", note: "Where the funds legally live: structuring and AIFMD passporting" },
    { country: "SE", role: "Nordic model", note: "EQT and a dealmaking culture that punches far above GDP weight" },
    { country: "CN", role: "The retreat", note: "Once the growth story; geopolitics and exit barriers froze the dollar-fund model" },
    { country: "SA", role: "The new LP capital", note: "Gulf sovereign wealth: the largest marginal checks and co-invest muscle" }
  ],

  cycles: [
    { year: 1989, title: "RJR Nabisco", kind: "boom", text: "KKR wins the $25B fight that defines the LBO era; junk-bond financing peaks and Drexel collapses within months. Lesson: the biggest deal of a cycle usually marks its top." },
    { year: 2007, title: "The club-deal peak", kind: "boom", text: "TXU (~$45B) caps a 2-year mega-buyout binge at peak multiples with covenant-lite debt just before the GFC. Lesson: easy credit writes checks that operating companies must cash." },
    { year: 2009, title: "The GFC crucible", kind: "bust", text: "Marks crater and LPs beg for capital-call relief, yet 'amend and extend' saves most deals and crisis vintages post great returns. Lesson: PE's illiquidity is a feature in a crash: nobody can panic-sell." },
    { year: 2021, title: "The ZIRP zenith", kind: "boom", text: "All-time records in deals, exits, and fundraising; SPACs and sponsors bid the same assets; entry multiples hit historic highs. Lesson: capital deployed fastest at the top ages the worst." },
    { year: 2022, title: "The rate reset", kind: "shift", text: "Rates end multiple expansion; exits freeze, holding periods stretch to ~7 years, and a $3.8T unsold backlog accumulates while CVs become the release valve. Lesson: in PE the cycle shows up in liquidity before it shows up in marks." }
  ],

  risks: [
    { name: "Exit drought persists", severity: 4, likelihood: 3, transmission: "Exits stay scarce -> distributions stay below 15% of NAV -> LPs cannot re-up -> fundraising shrinks -> mid-market GPs zombify and AUM growth stalls." },
    { name: "Mark-to-market reckoning", severity: 4, likelihood: 3, transmission: "Forced sales test stale NAVs -> exits print below marks -> secondaries discounts widen -> LP trust and the wealth-channel pitch both crack." },
    { name: "Leverage / refinancing shock", severity: 4, likelihood: 2, transmission: "Rates or spreads spike -> interest coverage collapses across 2021-vintage portfolios -> PIK, restructurings, and equity wipeouts -> crisis vintage for lenders and sponsors alike." },
    { name: "Retail liquidity mismatch event", severity: 4, likelihood: 2, transmission: "Redemptions hit an evergreen fund -> gates go up -> headlines and lawsuits -> regulators reset the retail-access rules the growth story depends on." },
    { name: "Carry taxation / regulatory turn", severity: 3, likelihood: 2, transmission: "Carried interest reclassified as income -> GP economics repriced -> talent and structure arbitrage offshore -> listed GP multiples compress." }
  ],

  levels: {
    L1: { title: "Beginner", text: ["Private equity firms collect money from pensions and other big institutions, borrow a lot more, and use it to buy whole companies. They spend 5 to 7 years improving them, then sell and split the profits: investors get 80%, the firm keeps 20% plus a yearly fee. The industry now manages about $9T, but its big problem today is selling: about 32,000 companies worth $3.8T are waiting for buyers."] },
    L2: { title: "Intermediate", text: ["The engine is the 10-year fund and the '2 and 20' fee deal. Returns come from 3 levers: debt (leverage), buying low and selling high (multiple expansion), and actually improving the business. Cheap debt did most of the work last decade; since rates rose in 2022, operations must carry the math. The flywheel: raise, buy, sell, return cash, raise again, is jammed at the selling stage: distributions have run below 15% of NAV for 4 straight years, even though 2025 dealmaking rebounded 44% to $904B."] },
    L3: { title: "Advanced", text: ["Analyze GPs as 2 businesses: fee-related earnings (contractual, 50%+ margins, drives listed valuations) and carried interest (lumpy, cycle-dependent, shared with deal teams). Fund analysis runs on DPI, not IRR: IRR can be engineered with subscription lines and marks; cash cannot. The current cycle's key tensions: ~$1.3T of aging buyout dry powder racing its deployment clock, a $240B secondaries market repricing NAVs in real time, and continuation vehicles (147 exits in 2025) blurring the line between exit route and can-kicking."] },
    L4: { title: "Expert", text: ["Trade the liquidity cycle: listed GP prints (fundraising, deployment, realizations) are the tape; Jefferies' secondary pricing is the market's live verdict on private marks; Bain's annuals reset the anchors. Live debates: whether the $3.8T backlog clears near NAV or 10% to 20% below, whether CVs are institutional plumbing or structural conflict, and whether retail evergreen funds are the next trillion or the next gating scandal. Recession vintages outperform: the discipline is having powder and nerve simultaneously."] },
    L5: { title: "Institutional", text: ["Allocator's frame: PE is equity beta plus leverage plus illiquidity, sold with smoothed marks: price it honestly against public equivalents and pay only for genuine operational alpha and access. Portfolio construction is pacing: commit steadily across vintages, never chase peak-cycle funds, and treat DPI as the only report card. This cycle rewards the liquidity providers (secondaries, NAV lenders, GP stakes) over the asset gatherers. The structural bet is that private markets keep absorbing public ones toward Preqin's $32T 2030 marker; the structural risk is that the fee stack, at 6%+ all-in between LP and asset, only survives while returns clear it."] }
  },

  quiz: [
    { q: "The standard PE fee structure is:", choices: ["1% flat", "'2 and 20': ~2% management fee plus 20% of profits above a hurdle", "20% management fee", "Commission per deal"], answer: 1, explain: "Management fees pay the bills regardless of outcome; carried interest (20% over a typical 8% hurdle) is where GP fortunes are made." },
    { q: "In 2025, global buyout deal value was roughly:", choices: ["$90B", "$300B", "$904B, up 44%: the second-best year ever", "$5T"], answer: 2, explain: "Bain's 2026 report: $904B of deals and $717B of exits, both second only to 2021, though 13 megadeals drove 30% of the total." },
    { q: "The industry's defining problem this cycle is:", choices: ["No money to invest", "The exit drought: ~32,000 unsold companies worth ~$3.8T and distributions below 15% of NAV for 4 straight years", "Too few target companies", "Rising management fees"], answer: 1, explain: "The flywheel is jammed at the selling stage: LPs who do not get cash back cannot recommit, which starves fundraising." },
    { q: "A continuation vehicle is:", choices: ["A fund that buys trucks", "A new fund a GP creates to buy assets from its own older fund, letting LPs cash out or roll", "A type of IPO", "A bank loan"], answer: 1, explain: "147 CV exits in 2025 and ~80% of top-100 sponsors have done one; critics note the GP sits on both sides of the price." },
    { q: "DPI matters more than IRR because:", choices: ["It is always higher", "IRR can be engineered with subscription lines and marks; DPI is actual cash returned", "Regulators require it", "IRR ignores fees"], answer: 1, explain: "Distributions to paid-in capital is the unfakeable metric: the current drought (sub-15% of NAV for 4 years) shows up in DPI, not IRR." },
    { q: "The 2025 secondaries market:", choices: ["Barely exists", "Shrank by half", "Hit a record $240B, up 48%, split between LP-led and GP-led volume", "Is illegal in the US"], answer: 2, explain: "Jefferies: $125B LP-led plus $115B GP-led: the release valve for a liquidity-starved asset class, and this cycle's best seat." },
    { q: "The J-curve describes:", choices: ["Interest rate paths", "Early-years negative returns from fees before value builds and distributions land in years 5 to 10", "A golf swing", "Stock chart patterns"], answer: 1, explain: "Fees drag first, value compounds later: which is why evergreen retail funds market themselves on eliminating it." },
    { q: "Listed mega-platforms like Blackstone are best valued on:", choices: ["Book value", "Fee-related earnings plus discounted carry: the fee stream is the compounder, carry is the option", "Dividend yield alone", "Revenue multiples"], answer: 1, explain: "FRE is contractual and 50%+ margin; carry is lumpy and cyclical: sum-of-the-parts prices the 2 businesses correctly." }
  ],

  sources: [
    { name: "Bain Global Private Equity Report 2026", url: "https://www.bain.com/insights/topics/global-private-equity-report/", feeds: "deal/exit value, dry powder, unsold backlog, holding periods" },
    { name: "Jefferies Global Secondary Market Review (2025)", url: "https://www.jefferies.com/insights/the-big-picture/2025-global-secondary-market-review-another-record-breaking-year/", feeds: "secondaries volume, GP-led/CV data, NAV pricing" },
    { name: "Preqin: Private Markets in 2030 (Oct 2025)", url: "https://www.preqin.com/about/press-release/preqin-releases-private-markets-in-2030-report", feeds: "AUM, forecasts" },
    { name: "SEC EDGAR: listed GP filings (BX, KKR, APO, CG)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany", feeds: "FRE, carry, fundraising, deployment" }
  ]
};
