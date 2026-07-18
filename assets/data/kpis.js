/* Industry Atlas - KPI library.
 * Shared, fully pedagogical metric records. Industry pages reference these
 * by id (kpiRefs); library.html renders the whole collection.
 * Benchmarks are approximate public-market medians with asOf vintages;
 * treat as orientation, not data feeds. */
window.ATLAS_KPIS = [
  /* ================= semiconductors ================= */
  {
    id: "semi-utilization", name: "Fab Utilization", industries: ["semiconductors"],
    definition: "The share of a fab's theoretical wafer capacity actually running production.",
    formula: "Utilization = Wafer starts ÷ Wafer start capacity",
    interpretation: "Fabs are almost all fixed cost, so utilization IS profitability. Above 90% foundries print money; below 80% margins evaporate.",
    healthy: ">= 90%", warning: "< 80%",
    benchmark: { median: "~85% across cycles (asOf 2024)", topDecile: "95%+ at leading edge in upcycles" },
    investorLens: "The single best real-time read on where the semi cycle sits; watch it turn before revenue does.",
    operatorLens: "Loadings drive everything: pricing posture, capex timing, and whether to accept low-margin fill-in orders.",
    mistakes: ["Comparing utilization across node mixes; a 90%-loaded mature fab and a 90%-loaded leading-edge fab have wildly different economics."],
    trend: "Increasingly divergent: leading-edge tight, mature nodes structurally overbuilt."
  },
  {
    id: "semi-yield", name: "Yield", industries: ["semiconductors"],
    definition: "The % of chips on a wafer that work to spec.",
    formula: "Yield = Good die ÷ Total die per wafer",
    interpretation: "Yield is the difference between profit and scrap on a $15,000+ wafer. New process nodes start low (sometimes below 50%) and climb toward 90%+ as they mature.",
    healthy: "> 85% mature process", warning: "< 60% past ramp phase",
    benchmark: { median: "80% to 90% at mature nodes", topDecile: "93%+ (best-in-class ramps)" },
    investorLens: "Yield ramps decide whether a node transition is accretive or a margin crater; listen for 'defect density' commentary.",
    operatorLens: "The core engineering scoreboard; every point of yield is nearly pure gross margin.",
    mistakes: ["Trusting quoted yields without die-size context; big AI dies suffer geometrically from the same defect density."],
    trend: "Harder every node; EUV-era complexity made yield learning the moat."
  },
  {
    id: "semi-asp", name: "ASP (Average Selling Price)", industries: ["semiconductors"],
    definition: "Average revenue per unit sold, per chip or per wafer.",
    formula: "ASP = Segment revenue ÷ Units shipped",
    interpretation: "Reads pricing power and mix. Rising ASPs with flat units means moving up-market; falling ASPs signal commoditization or a downcycle.",
    healthy: "Rising with mix", warning: "Double-digit % declines",
    benchmark: { median: "Leading-edge wafers $15K to $20K vs mature $2K to $4K (asOf 2024)" },
    investorLens: "ASP direction separates structural winners from cyclical volume stories.",
    operatorLens: "Mix management: which designs to accept into limited capacity.",
    mistakes: ["Averaging ASPs across segments; memory and logic pricing live in different universes."],
    trend: "Leading-edge ASPs climbing steeply with AI demand; memory violently cyclical."
  },
  {
    id: "semi-leadtime", name: "Lead Time", industries: ["semiconductors"],
    definition: "Weeks between placing a chip order and receiving it.",
    formula: "Lead time = Delivery date − Order date (weeks)",
    interpretation: "The industry's fever thermometer. Normal is 8 to 12 weeks; the 2021 shortage stretched past 25. Falling lead times often precede order cancellations and a downcycle.",
    healthy: "8 to 12 weeks, stable", warning: "> 20 weeks (shortage) or collapsing fast (glut coming)",
    benchmark: { median: "~10 weeks normalized" },
    investorLens: "Lead-time inflections lead the cycle by 2 to 3 quarters; the best early-warning series available.",
    operatorLens: "Governs safety stock and double-ordering behavior, which itself amplifies the cycle.",
    mistakes: ["Reading long lead times as demand strength when they may reflect double-ordering that will unwind violently."],
    trend: "Normalized post-2023, structurally watched more closely since the shortage."
  },
  {
    id: "semi-capex-intensity", name: "Capex Intensity", industries: ["semiconductors", "cloud"],
    definition: "Capital spending as a share of revenue.",
    formula: "Capex intensity = Capex ÷ Revenue",
    interpretation: "Chipmaking is the most capital-hungry manufacturing on Earth; foundries reinvest 30% to 50% of revenue in upcycles. Discipline here decides through-cycle returns.",
    healthy: "30% to 40% (foundry, growth phase)", warning: "> 50% into softening demand",
    benchmark: { median: "Foundry ~35%; fabless < 5% (asOf 2024)" },
    investorLens: "Watch capex announcements as supply signals: today's capex is 2026's capacity and possibly 2027's glut.",
    operatorLens: "A $20B fab must be filled the day it opens; capex timing is the existential decision.",
    mistakes: ["Applying one benchmark across the fabless-foundry divide; the whole point of fabless is exporting this line item."],
    trend: "Structurally higher with EUV tools at $200M+ each and national subsidy races."
  },
  {
    id: "semi-inventory-days", name: "Inventory Days (DOI)", industries: ["semiconductors"],
    definition: "Days of inventory held across the chain, the cycle's stored energy.",
    formula: "DOI = Inventory ÷ COGS × 365",
    interpretation: "Chips are sold through distributors and OEMs; when channel inventory swells past ~120 days, a correction is loading even if bookings still look fine.",
    healthy: "70 to 100 days", warning: "> 120 days and rising",
    benchmark: { median: "~90 days blended (asOf 2024)" },
    investorLens: "Inventory digestion phases explain why semi revenue falls 20%+ while end demand falls 5%.",
    operatorLens: "Channel visibility is survival; the bullwhip starts in your customers' warehouses.",
    mistakes: ["Watching only chipmaker inventory and missing the distributor and OEM layers where the whip cracks."],
    trend: "AI parts scarce while analog and MCU inventories digest the 2021 over-order."
  },

  /* ================= SaaS ================= */
  {
    id: "saas-nrr", name: "Net Revenue Retention (NRR)", industries: ["saas", "cloud"],
    definition: "Revenue from last year's customers today, including upsells, downgrades, and churn, as a % of what they paid last year.",
    formula: "NRR = (Starting ARR + expansion − contraction − churn) ÷ Starting ARR",
    interpretation: "Above 100%, the business grows even with zero new logos. The compounding engine of software.",
    healthy: ">= 110%", warning: "< 100%",
    benchmark: { median: "~106% public SaaS (asOf 2024)", topDecile: "120%+" },
    investorLens: "The best single predictor of durable growth and the multiple the market will pay.",
    operatorLens: "Exposes whether the product deepens with use; expansion is cheaper than acquisition.",
    mistakes: ["Confusing NRR with gross retention; 115% NRR can hide ugly logo churn masked by whale expansion."],
    trend: "Fell 5 to 10 points post-2022 as buyers cut seats; elite retention got scarcer and more valuable."
  },
  {
    id: "saas-arr", name: "ARR (Annual Recurring Revenue)", industries: ["saas"],
    definition: "The annualized value of active subscription contracts.",
    formula: "ARR = MRR × 12 (or annualized committed subscriptions)",
    interpretation: "The stock of recurring revenue, the base the whole model compounds on. Growth rate matters more than level.",
    healthy: "Growth > 30% at scale (< $500M ARR)", warning: "Growth < 15% pre-profitability",
    benchmark: { median: "Public SaaS growth ~18% (asOf 2024)", topDecile: "40%+" },
    investorLens: "EV/ARR is the sector's price tag; durability of growth is what the multiple argues about.",
    operatorLens: "The planning denominator for hiring, quota capacity, and burn.",
    mistakes: ["Counting one-time services or usage spikes as 'recurring'; investors re-cut this in diligence every time."],
    trend: "Usage-based and AI pricing blur the definition; disclosure quality varies widely."
  },
  {
    id: "saas-cac-payback", name: "CAC Payback", industries: ["saas"],
    definition: "Months of gross profit needed to recover the cost of acquiring a customer.",
    formula: "CAC payback = CAC ÷ (ARR per customer × gross margin) × 12",
    interpretation: "The cash-efficiency clock. Under 12 months is elite, 12 to 24 workable, beyond 36 the growth is bought, not earned.",
    healthy: "< 18 months", warning: "> 30 months",
    benchmark: { median: "~25 months public SaaS (asOf 2024)", topDecile: "< 12 months" },
    investorLens: "Long paybacks mean growth consumes cash; check it against net burn and NRR together.",
    operatorLens: "Decides how hard you can floor the go-to-market accelerator without refinancing risk.",
    mistakes: ["Using revenue instead of gross profit in the denominator, which flatters payback by a third."],
    trend: "Lengthened industry-wide post-2022; efficiency became the fashionable metric."
  },
  {
    id: "saas-ltv-cac", name: "LTV / CAC", industries: ["saas"],
    definition: "Lifetime gross profit of a customer versus the cost to acquire them.",
    formula: "LTV/CAC = (ARPA × gross margin ÷ churn rate) ÷ CAC",
    interpretation: "The unit-economics verdict: 3x is the folk threshold for a fundable model; below 1x each sale destroys value.",
    healthy: ">= 3x", warning: "< 1.5x",
    benchmark: { median: "~3x is the conventional bar" },
    investorLens: "Directionally useful, easily gamed; always ask what churn assumption drives the L in LTV.",
    operatorLens: "Best used per segment and channel to decide where the next sales dollar goes.",
    mistakes: ["Projecting early-cohort churn onto a 10-year lifetime; small churn errors explode LTV."],
    trend: "Falling out of favor versus CAC payback, which cheats less."
  },
  {
    id: "saas-rule40", name: "Rule of 40", industries: ["saas"],
    definition: "Revenue growth rate plus profit margin should exceed 40.",
    formula: "Rule of 40 = Revenue growth % + FCF (or EBITDA) margin %",
    interpretation: "The growth-profitability exchange rate: a 60% grower may burn 20%; a 10% grower must gush 30% margins.",
    healthy: ">= 40", warning: "< 20",
    benchmark: { median: "~28 for public SaaS (asOf 2024)", topDecile: "55+" },
    investorLens: "The screening scalar that correlates best with SaaS valuation multiples.",
    operatorLens: "A budgeting compass for how much growth to buy with margin.",
    mistakes: ["Mixing margin definitions between companies; FCF vs EBITDA vs operating margin shifts scores 10+ points."],
    trend: "Post-2022 the market pays for the margin half of the sum more than the growth half."
  },
  {
    id: "saas-gross-margin", name: "Gross Margin (Software)", industries: ["saas", "cloud"],
    definition: "Revenue minus cost of delivering the service (hosting, support), as % of revenue.",
    formula: "Gross margin = (Revenue − COGS) ÷ Revenue",
    interpretation: "Software's structural gift: 70% to 85% is normal. AI inference costs are the first real threat to it in 20 years.",
    healthy: ">= 75%", warning: "< 60%",
    benchmark: { median: "~76% public SaaS (asOf 2024)", topDecile: "85%+" },
    investorLens: "Every point of gross margin is a point of eventual operating margin; low GM caps the whole model.",
    operatorLens: "Cloud bills and support headcount are the levers; AI features need their own unit-cost discipline.",
    mistakes: ["Ignoring where AI compute costs are booked; some companies bury them in R&D to protect the GM line."],
    trend: "Drifting down 1 to 3 points at AI-heavy products; a new gross-margin debate is live."
  },
  {
    id: "saas-magic-number", name: "Magic Number", industries: ["saas"],
    definition: "New ARR generated per dollar of sales and marketing spend, one quarter lagged.",
    formula: "Magic number = Net new ARR (Q) × 4 ÷ S&M spend (Q−1)",
    interpretation: "Above 1.0, sales spend pays for itself within a year: press harder. Below 0.5, the go-to-market engine is broken.",
    healthy: "> 0.75", warning: "< 0.5",
    benchmark: { median: "~0.6 public SaaS (asOf 2024)", topDecile: "> 1.0" },
    investorLens: "A quick efficiency screen before deeper cohort work.",
    operatorLens: "The board-meeting answer to 'should we hire more reps?'",
    mistakes: ["Using it at tiny scale where one enterprise deal swings the quarter."],
    trend: "Sector median roughly halved from ZIRP-era peaks."
  },

  /* ================= insurance ================= */
  {
    id: "ins-combined", name: "Combined Ratio", industries: ["insurance"],
    definition: "Claims plus expenses as a % of premiums earned. The underwriting profit line.",
    formula: "Combined ratio = Loss ratio + Expense ratio",
    interpretation: "Below 100% the insurer profits on underwriting itself; above 100% it is paying for float and hoping investments cover the gap.",
    healthy: "< 95%", warning: "> 103%",
    benchmark: { median: "US P&C ~99% long-run (asOf 2024)", topDecile: "< 90% (specialty best-in-class)" },
    investorLens: "The cleanest read of underwriting discipline; consistent sub-95 franchises earn premium multiples.",
    operatorLens: "Pricing adequacy in one number; sustained deterioration means rate increases or exiting lines.",
    mistakes: ["Ignoring reserve releases; a flattering combined ratio can be borrowed from yesterday's conservatism."],
    trend: "Catastrophe volatility pushed property lines hard; 2023-2024 rate hardening restored many books below 100."
  },
  {
    id: "ins-loss-ratio", name: "Loss Ratio", industries: ["insurance", "health-insurance"],
    definition: "Claims incurred as a % of premiums earned.",
    formula: "Loss ratio = Incurred losses ÷ Earned premium",
    interpretation: "The raw cost of the promises sold. P&C healthy range 55% to 75%; health insurance runs 80%+ by regulation (MLR floors).",
    healthy: "55% to 70% (P&C)", warning: "> 80% (P&C)",
    benchmark: { median: "US P&C ~72% (asOf 2024)" },
    investorLens: "Watch the direction against pricing: rising losses into flat rates is margin erosion in progress.",
    operatorLens: "Feeds straight into pricing models and reinsurance purchasing.",
    mistakes: ["Comparing across lines; auto, property cat, and liability have structurally different loss shapes and tails."],
    trend: "Social inflation and climate cat losses are lifting long-run loss trends."
  },
  {
    id: "ins-solvency", name: "Solvency / Capital Ratio", industries: ["insurance"],
    definition: "Capital held versus regulatory required capital (RBC in the US, SCR in Europe).",
    formula: "Solvency ratio = Available capital ÷ Required capital",
    interpretation: "The distance between a bad year and a regulator taking the keys. Above ~150% RBC is comfortable; the strongest run 200%+.",
    healthy: "> 180%", warning: "< 130%",
    benchmark: { median: "European SII ~215% (asOf 2024)" },
    investorLens: "Excess capital is buyback and dividend fuel; deficits mean dilution risk.",
    operatorLens: "Constrains growth: every policy written consumes capital.",
    mistakes: ["Treating all capital as equal; quality (equity vs hybrids) and fungibility across subsidiaries matter."],
    trend: "Higher rates rebuilt life insurer solvency after a brutal decade of ZIRP."
  },
  {
    id: "ins-float", name: "Float per Share Growth", industries: ["insurance"],
    definition: "Premiums collected but not yet paid as claims, available to invest.",
    formula: "Float = Loss reserves + unearned premiums − receivables",
    interpretation: "The Buffett insight: an insurer that underwrites at or below 100% combined gets paid to hold an investment portfolio.",
    healthy: "Growing float + sub-100 combined", warning: "Growing float bought with underwriting losses",
    benchmark: { median: "Cost of float near 0% for disciplined franchises" },
    investorLens: "Float quality (cost and duration) is the hidden asset in insurance valuations.",
    operatorLens: "Asset-liability matching against it defines investment freedom.",
    mistakes: ["Admiring float growth without checking what combined ratio bought it."],
    trend: "Rising rates made float suddenly lucrative again."
  },

  /* ================= banking ================= */
  {
    id: "bank-nim", name: "Net Interest Margin (NIM)", industries: ["banking"],
    definition: "Interest earned minus interest paid, as a % of earning assets.",
    formula: "NIM = (Interest income − Interest expense) ÷ Avg earning assets",
    interpretation: "The core spread business. US large banks run 2.5% to 3.5%; the level and its rate-sensitivity define the earnings model.",
    healthy: "> 3%", warning: "< 2% and compressing",
    benchmark: { median: "US banks ~3.0% (asOf 2024)" },
    investorLens: "NIM trajectory versus deposit beta is the whole bank earnings debate each cycle.",
    operatorLens: "Deposit pricing discipline is the franchise; paying up for hot money poisons the margin.",
    mistakes: ["Reading NIM alone without credit costs; a fat margin from risky lending is borrowed earnings."],
    trend: "Restored by post-2022 rate hikes, then squeezed by deposit repricing."
  },
  {
    id: "bank-roe", name: "Return on Equity (ROE)", industries: ["banking", "capital-markets"],
    definition: "Net income as a % of shareholders' equity.",
    formula: "ROE = Net income ÷ Average equity",
    interpretation: "The gravity metric for banks: sustained ROE above the ~10% cost of equity justifies book value multiples above 1x.",
    healthy: "> 12%", warning: "< 8%",
    benchmark: { median: "US large banks ~11% (asOf 2024)", topDecile: "15%+" },
    investorLens: "P/B tracks ROE almost mechanically across the sector; the pair is the banking valuation model.",
    operatorLens: "Allocates capital across business lines; sub-hurdle units get shrunk.",
    mistakes: ["Comparing ROE across leverage levels without checking capital ratios; leverage buys ROE until it doesn't."],
    trend: "Structurally lower than pre-2008 by design: double the capital, half the ROE."
  },
  {
    id: "bank-cet1", name: "CET1 Ratio", industries: ["banking"],
    definition: "Core equity capital as a % of risk-weighted assets.",
    formula: "CET1 = Common equity tier 1 ÷ Risk-weighted assets",
    interpretation: "The regulatory bedrock. US G-SIBs must hold roughly 9% to 14% depending on surcharges; distance above the minimum is payout capacity.",
    healthy: "150+ bps above requirement", warning: "< 50 bps buffer",
    benchmark: { median: "US large banks ~12.5% (asOf 2024)" },
    investorLens: "Excess CET1 = buybacks; shortfalls = dilution. Capital return math starts here.",
    operatorLens: "Every asset carries a risk weight; balance-sheet strategy is CET1 optimization.",
    mistakes: ["Ignoring AOCI marks and pending rules (Basel endgame) that move the effective buffer."],
    trend: "Requirements still ratcheting; capital efficiency drives the move of assets to private credit."
  },
  {
    id: "bank-efficiency", name: "Efficiency Ratio", industries: ["banking"],
    definition: "Operating expenses as a % of revenue. Lower is better.",
    formula: "Efficiency = Non-interest expense ÷ Revenue",
    interpretation: "Banking's cost discipline scoreboard: under 55% is good, under 50% excellent, over 70% signals structural bloat.",
    healthy: "< 55%", warning: "> 70%",
    benchmark: { median: "US banks ~60% (asOf 2024)", topDecile: "< 50%" },
    investorLens: "Persistent efficiency gaps between similar banks are management quality, made visible.",
    operatorLens: "The case for every technology and branch decision lands in this ratio.",
    mistakes: ["Cutting to a great ratio by starving technology, which shows up later as lost deposits."],
    trend: "Digital shift grinding it lower at scale players; regional banks squeezed."
  },
  {
    id: "bank-npl", name: "NPL Ratio", industries: ["banking"],
    definition: "Non-performing loans as a % of total loans.",
    formula: "NPL ratio = Non-performing loans ÷ Gross loans",
    interpretation: "The credit-quality headline. US normal is under 1%; past 2% the provisioning cycle is biting earnings.",
    healthy: "< 1%", warning: "> 2.5% and rising",
    benchmark: { median: "US ~0.9% (asOf 2024)" },
    investorLens: "Watch formation rate (new NPLs) rather than the stock; it leads provisions by 2 quarters.",
    operatorLens: "Underwriting vintage analysis lives upstream of this number.",
    mistakes: ["Cross-country comparisons without definitional care; 90-day rules and restructuring treatment differ."],
    trend: "CRE, especially office, is the current formation engine."
  },

  /* ================= asset management & markets ================= */
  {
    id: "am-netflows", name: "Net Flows", industries: ["asset-management"],
    definition: "New client money in minus money out, excluding market moves.",
    formula: "Net flows = Gross inflows − Gross outflows",
    interpretation: "The franchise health signal AUM hides: rising markets can mask a business bleeding clients.",
    healthy: "Positive, > 3% of AUM annually (organic growth)", warning: "Persistent outflows",
    benchmark: { median: "Active equity in structural outflow; passive and private markets absorb the flow (asOf 2024)" },
    investorLens: "Flows times fee rate is the revenue growth algorithm; everything else is beta.",
    operatorLens: "Distribution strength and product lineup show up here first.",
    mistakes: ["Celebrating AUM records in an up year while organic flows are negative."],
    trend: "The great rotation continues: passive, alternatives, and cash win; benchmark-hugging active loses."
  },
  {
    id: "am-feerate", name: "Fee Rate (bps of AUM)", industries: ["asset-management"],
    definition: "Blended management fees earned per dollar managed.",
    formula: "Fee rate = Management fees ÷ Average AUM",
    interpretation: "The pricing power line: index funds at 3 to 10 bps, active equity 40 to 70, alternatives 100+ plus carry. Mix drives the blend.",
    healthy: "Stable or mix-shifting up", warning: "> 5% annual compression",
    benchmark: { median: "Traditional managers ~35 bps blended (asOf 2024)" },
    investorLens: "AUM growth means little if the fee rate is melting; revenue = AUM × rate.",
    operatorLens: "Product strategy is fee-rate defense: move up the value (and illiquidity) curve.",
    mistakes: ["Blending performance fees into the base rate; they are cyclical, not structural."],
    trend: "Two-track world: commoditized beta near zero, private-markets fees resilient."
  },
  {
    id: "cm-adv", name: "Trading Volume (ADV)", industries: ["capital-markets"],
    definition: "Average daily volume traded in a market or on a venue.",
    formula: "ADV = Total volume ÷ Trading days",
    interpretation: "Volume is the revenue driver for exchanges, market makers, and trading desks; volatility spikes are their best quarters.",
    healthy: "Growing with listings and volatility", warning: "Structural decline in share",
    benchmark: { median: "US equities ~$500B+ notional daily (asOf 2024)" },
    investorLens: "Exchange revenues are ADV times capture rate; both need watching.",
    operatorLens: "Liquidity begets liquidity; venue share losses compound.",
    mistakes: ["Extrapolating volatility-spike volumes into steady-state forecasts."],
    trend: "Retail and options flow structurally higher; equities increasingly off-exchange."
  },

  /* ================= energy & materials ================= */
  {
    id: "energy-breakeven", name: "Breakeven Oil Price", industries: ["oil-gas"],
    definition: "The crude price at which a project or company covers costs (and often the dividend).",
    formula: "Breakeven = All-in costs (+ payout) ÷ Production",
    interpretation: "The industry's survival line. Best shale and Gulf assets break even below $45; marginal barrels need $60+; petrostate budgets often need $80+.",
    healthy: "< $45 corporate breakeven", warning: "> $65",
    benchmark: { median: "US shale wells ~$47 to $55 (asOf 2024)" },
    investorLens: "Low breakevens are the moat; they decide who funds dividends through the trough.",
    operatorLens: "Ranks every drilling location in the portfolio; capital flows to the lowest number.",
    mistakes: ["Mixing half-cycle (drilling only) and full-cycle (land, infrastructure) breakevens; the gap can be $20."],
    trend: "Efficiency gains keep grinding shale breakevens down; inflation pushed back in 2022-2023."
  },
  {
    id: "energy-reserve-life", name: "Reserve Life (R/P)", industries: ["oil-gas", "mining", "copper-mining"],
    definition: "Years of production remaining at current rates from proved reserves.",
    formula: "R/P = Proved reserves ÷ Annual production",
    interpretation: "The depletion clock. Oil majors run 10 to 15 years; miners 15 to 30. A shrinking R/P means the company is liquidating itself unless it replaces reserves.",
    healthy: "> 12 years, stable", warning: "< 8 years and falling",
    benchmark: { median: "Oil majors ~11 years (asOf 2024)" },
    investorLens: "Reserve replacement below 100% is a slow-motion wind-down the market eventually prices.",
    operatorLens: "Drives exploration budgets and M&A: buying reserves vs finding them.",
    mistakes: ["Taking reserves at face value across price decks; reserves are an economic estimate, not a warehouse count."],
    trend: "Majors increasingly replace barrels through acquisition rather than exploration."
  },
  {
    id: "energy-capacity-factor", name: "Capacity Factor", industries: ["utilities", "solar", "wind", "nuclear"],
    definition: "Actual energy produced as a % of theoretical maximum output.",
    formula: "Capacity factor = Actual MWh ÷ (Nameplate MW × 8,760h)",
    interpretation: "The technology fingerprint: nuclear ~90%, offshore wind ~40 to 50%, onshore ~35%, solar ~15 to 25%. It converts nameplate press releases into real energy.",
    healthy: "Above technology-typical band", warning: "Below band (curtailment, downtime)",
    benchmark: { median: "US nuclear 93%, utility solar ~24%, onshore wind ~34% (asOf 2024)" },
    investorLens: "Revenue per MW installed is capacity factor times price; compare projects on this, not nameplate.",
    operatorLens: "Availability and curtailment management are the levers.",
    mistakes: ["Comparing solar and nuclear on nameplate MW; a 1GW label means 4x different energy."],
    trend: "Curtailment rising in renewable-saturated grids; storage pairing is the response."
  },
  {
    id: "mining-aisc", name: "AISC (All-in Sustaining Cost)", industries: ["mining", "copper-mining", "lithium"],
    definition: "The full per-unit cost of producing a commodity while sustaining the asset base.",
    formula: "AISC = (Operating costs + sustaining capex + royalties + site G&A) ÷ Units produced",
    interpretation: "Position on the global cost curve is destiny: first-quartile producers profit through every trough; fourth-quartile assets are options on the price.",
    healthy: "First or second quartile of cost curve", warning: "Fourth quartile",
    benchmark: { median: "Copper AISC ~$2.20/lb; gold ~$1,350/oz (asOf 2024)" },
    investorLens: "Margin = price minus AISC; the cost curve is the supply-side model in one chart.",
    operatorLens: "Grade decline, energy, and labor are the fights; every mine ages up the curve.",
    mistakes: ["Trusting AISC without checking what capex got classified as 'growth' to flatter it."],
    trend: "Structurally rising: grades falling, deposits deeper, inputs pricier."
  },
  {
    id: "mining-grade", name: "Ore Grade", industries: ["mining", "copper-mining"],
    definition: "Metal content per tonne of rock mined.",
    formula: "Grade = Contained metal ÷ Ore tonnes (% or g/t)",
    interpretation: "Geology's gift or curse: moving from 1% to 0.5% copper roughly doubles rock moved, energy, and cost per tonne of metal.",
    healthy: "Above reserve average, stable mine plan", warning: "Sustained grade decline vs plan",
    benchmark: { median: "New copper projects ~0.45% vs 0.8%+ a generation ago (asOf 2024)" },
    investorLens: "Grade profiles in technical reports foretell the cost curve 10 years out.",
    operatorLens: "Blending and mine sequencing manage the decline every mine eventually faces.",
    mistakes: ["Ignoring that headline 'measured resources' at low grade may never be economic to mine."],
    trend: "Global grade decline is the quiet driver of long-run metal price floors."
  },

  /* ================= cloud & payments extras ================= */
  {
    id: "cloud-rpo", name: "RPO (Remaining Performance Obligations)", industries: ["cloud", "saas"],
    definition: "Contracted future revenue not yet recognized, the committed backlog.",
    formula: "RPO = Total contracted value − revenue recognized to date",
    interpretation: "The forward order book. RPO growth outpacing revenue growth signals acceleration ahead; the reverse warns of slowdown.",
    healthy: "RPO growth >= revenue growth", warning: "RPO growth well below revenue growth",
    benchmark: { median: "Hyperscaler RPO growth 20%+ in the AI cycle (asOf 2024)" },
    investorLens: "The most forward-looking line in a cloud report; moves stocks on print.",
    operatorLens: "Sales commits become capacity planning inputs here.",
    mistakes: ["Ignoring duration mix; a 10-year mega-deal inflates RPO without near-term revenue."],
    trend: "AI commitments are swelling RPOs across infrastructure providers."
  },
  {
    id: "pay-take-rate", name: "Take Rate", industries: ["payments", "ecommerce", "crypto-infrastructure"],
    definition: "Revenue kept as a % of payment or transaction volume processed.",
    formula: "Take rate = Net revenue ÷ Total payment volume",
    interpretation: "The toll on the money river: card networks ~10 bps, acquirers 20 to 60 bps, marketplaces 5% to 15%. Tiny moves at scale are enormous.",
    healthy: "Stable with mix shifting richer", warning: "Structural compression from competition or regulation",
    benchmark: { median: "Merchant acquiring ~40 bps blended (asOf 2024)" },
    investorLens: "Volume growth times take rate is the model; regulation (interchange caps) is the risk to the second term.",
    operatorLens: "Value-added services (fraud, financing) defend the rate that pure processing loses.",
    mistakes: ["Comparing take rates across business models; gross vs net revenue definitions differ wildly."],
    trend: "Core processing commoditizes while software-attached payments push blended rates up."
  },

  /* ================= real estate & consumer ================= */
  {
    id: "re-caprate", name: "Cap Rate", industries: ["real-estate"],
    definition: "A property's net operating income as a % of its price, the sector's yield.",
    formula: "Cap rate = NOI ÷ Property value",
    interpretation: "The valuation compass: prices move inversely to cap rates. Spreads over the 10-year Treasury are the risk premium being paid.",
    healthy: "150+ bps spread over 10Y Treasury", warning: "Negative leverage (cap rate < debt cost)",
    benchmark: { median: "US prime logistics ~5%, office widely dispersed (asOf 2024)" },
    investorLens: "Every 100 bps of cap-rate expansion is roughly a 15% to 20% value haircut; the rate cycle IS the property cycle.",
    operatorLens: "Buy, sell, and refinance timing decisions hang on the spread to debt cost.",
    mistakes: ["Comparing cap rates without lease-length and credit context; a 6% cap on a weak tenant is not cheap."],
    trend: "Post-2022 repricing hit office hardest; industrial and data centers stayed tight."
  },
  {
    id: "re-ffo", name: "FFO (Funds From Operations)", industries: ["real-estate"],
    definition: "REIT earnings adjusted for depreciation and property gains, the sector's cash earnings proxy.",
    formula: "FFO = Net income + D&A (real estate) − gains on sales",
    interpretation: "Buildings do not really depreciate on GAAP schedules, so FFO restores an honest earnings base; P/FFO is the sector's P/E.",
    healthy: "Steady per-share growth", warning: "Payout ratio > 90% of FFO",
    benchmark: { median: "US REITs ~15x P/FFO (asOf 2024)" },
    investorLens: "Dividend safety is FFO coverage; screen payout ratios against it, not net income.",
    operatorLens: "Per-share FFO discipline restrains dilutive empire-building.",
    mistakes: ["Using FFO where capex is real and recurring; AFFO (after capex) is the stricter truth."],
    trend: "Balance-sheet-strong REITs converting rate stress into acquisition pipelines."
  },
  {
    id: "retail-sss", name: "Same-Store Sales", industries: ["retail", "restaurants"],
    definition: "Revenue growth from locations open at least a year, isolating organic performance from expansion.",
    formula: "SSS = (Comparable-store sales_t ÷ sales_t−1) − 1",
    interpretation: "Strips new-store growth out of the story: positive comps mean the concept still works; negative comps with unit growth is a treadmill.",
    healthy: "> +3%", warning: "Negative for 2+ quarters",
    benchmark: { median: "US retail comps ~+2% to +4% nominal (asOf 2024)" },
    investorLens: "The multiple lives on comps; unit growth without comps eventually collapses.",
    operatorLens: "Splits into traffic vs ticket, which point at completely different fixes.",
    mistakes: ["Applauding price-driven comps while traffic declines; that is a brand shrinking politely."],
    trend: "Post-inflation, traffic-driven comps are scarce and prized."
  },
  {
    id: "retail-inventory-turns", name: "Inventory Turns", industries: ["retail", "ecommerce", "consumer-goods"],
    definition: "How many times a year inventory is sold through.",
    formula: "Turns = COGS ÷ Average inventory",
    interpretation: "Retail's velocity metric: grocers turn 12x+, fashion 4 to 6x, big-ticket 3x. Turns times margin is the return engine.",
    healthy: "Above category norm, stable", warning: "Falling turns + rising markdowns",
    benchmark: { median: "General merchandise ~4 to 6x (asOf 2024)" },
    investorLens: "GMROI (margin × turns) separates operators from real-estate-with-shelves.",
    operatorLens: "Buying discipline and supply-chain speed live here; dead stock is silent margin death.",
    mistakes: ["Chasing turns so hard that stockouts hand share to competitors."],
    trend: "Post-COVID whiplash taught the industry to hold leaner, faster books."
  },

  /* ================= healthcare ================= */
  {
    id: "hc-mlr", name: "Medical Loss Ratio (MLR)", industries: ["health-insurance"],
    definition: "Medical claims paid as a % of premium revenue.",
    formula: "MLR = Medical costs ÷ Premium revenue",
    interpretation: "US regulation floors it (80% to 85% must go to care), so payers live in a mandated corridor; 100 bps misses move billions.",
    healthy: "83% to 86% (regulated corridor)", warning: "> 88% (cost trend outrunning pricing)",
    benchmark: { median: "Large US payers ~85% (asOf 2024)" },
    investorLens: "Quarterly MLR surprises are the sector's volatility engine; utilization trend is the thing to model.",
    operatorLens: "Care management and network design are the levers inside the corridor.",
    mistakes: ["Ignoring seasonality and IBNR reserve noise in quarterly MLR reads."],
    trend: "Post-2023 utilization surge (especially Medicare Advantage) squeezed the whole sector."
  },
  {
    id: "pharma-pipeline", name: "Pipeline Value / LOE Cliff", industries: ["pharma", "biotech"],
    definition: "Risk-adjusted value of drugs in development versus revenue losing patent protection.",
    formula: "rNPV = Σ (peak sales × PoS × margin, discounted) − LOE erosion",
    interpretation: "Pharma is a treadmill: patents expire on schedule while pipelines are probabilistic. The gap between the two is the investment case.",
    healthy: "Pipeline rNPV > upcoming LOE losses", warning: "Cliff > 25% of revenue within 5 years, thin pipeline",
    benchmark: { median: "Phase 2 assets carry ~15% to 30% probability of approval" },
    investorLens: "Model erosion curves honestly: small molecules lose 80%+ of revenue within 2 years of generics.",
    operatorLens: "Business development exists to buy what the labs did not produce on schedule.",
    mistakes: ["Valuing pipelines at peak sales without probability weighting; most drugs fail."],
    trend: "The late-2020s LOE wave is driving a biotech acquisition cycle."
  }
];
