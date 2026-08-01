/* Industry Atlas - payments company profiles.
 * Real companies, public well-known facts at approximate precision (asOf noted).
 * Sources: Visa FY2025 Q4 earnings release and 10-K (fiscal year ended Sep 2025, reported Oct/Nov 2025),
 * Mastercard FY2025 Q4 earnings release and 10-K (Jan/Feb 2026),
 * PayPal FY2025 Q4 earnings release and 10-K (Feb 2026), market caps as of Jul 2026. */
window.ATLAS_COMPANIES = window.ATLAS_COMPANIES || {};
Object.assign(window.ATLAS_COMPANIES, {

  "visa": {
    id: "visa", ticker: "V", mcap: 672, name: "Visa", full: "Visa Inc.", country: "US",
    industries: ["payments"], role: "Card network #1", founded: 1958, hq: "San Francisco, USA",
    stats: [{ label: "Revenue", value: "$40.0B", note: "FY2025 (ended Sep), +11%" }, { label: "Total volume", value: "$17T", note: "payments + cash, FY2025" }, { label: "Credentials", value: "4.9B", note: "cards worldwide; 150M+ merchant locations" }, { label: "Operating margin", value: "~66%", note: "FY2025; net income topped $20B" }],
    model: [
      "Visa runs the world's largest payments network and touches almost none of the money. It neither issues cards nor lends: banks do both, while VisaNet switches authorization, clearing, and settlement between them, skimming basis points off $17T of annual volume (FY2025). Fees stack 4 ways: service fees on payment volume, data processing fees on roughly 257B processed transactions, premium international fees whenever a card crosses a border, and a fast-growing value-added services line (risk scoring, tokenization, advisory) of about $11B in FY2025, up over 20%.",
      "The economics are the closest thing to a perpetual toll road in large-cap finance: the network is already built, operating margins run ~66%, capex is negligible, so nearly every incremental transaction is profit. The catch is that Visa pays to keep the flywheel spinning: client incentives of $15.8B in FY2025, netted against gross revenue, are rebates to issuers and co-brand partners for routing volume its way. Growth now comes from new flows: Visa Direct pushed 12.6B payouts in FY2025 (up 27%), and tap-to-pay reached 79% of face-to-face transactions globally."
    ],
    customers: [
      { who: "Issuing banks (JPMorgan Chase, Bank of America, Capital One)", note: "own the cardholder and the credit risk; paid multi-year incentives to route volume onto Visa" },
      { who: "Acquirers and processors (Fiserv, Worldpay, Adyen, Stripe)", note: "connect 150M+ merchant acceptance locations to the network" },
      { who: "Fintechs and wallets", note: "Apple Pay, Cash App, Revolut and thousands of programs ride VisaNet credentials" },
      { who: "Governments and enterprises", note: "payroll, disbursements, and cross-border payouts via Visa Direct" }
    ],
    suppliers: [
      { who: "Its own data centers", note: "VisaNet runs on Visa-owned processing hubs engineered for 65,000+ transactions per second" },
      { who: "Telecom and cloud providers", note: "global fiber, redundancy, and burst capacity around an owned core" },
      { who: "Cybersecurity and AI vendors", note: "layered onto heavy in-house fraud and risk tooling" },
      { who: "EMVCo and standards bodies", note: "chip, contactless, and tokenization specs co-owned with Mastercard and others" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "north of $20B a year; the business self-funds many times over" },
      { source: "Bond markets", note: "modest investment-grade debt, mostly for buyback timing" },
      { source: "The 2008 IPO", note: "raised $17.9B, then the largest in US history, as member banks cashed out" }
    ],
    capitalOut: [
      { use: "Buybacks + dividends", note: "$20B+ a year returned; the default use of cash" },
      { use: "Client incentives $15.8B", note: "FY2025, netted against revenue: the price of keeping banks loyal" },
      { use: "Acquisitions", note: "Tink (open banking, ~$2B), Pismo (issuer processing, ~$1B), Featurespace (fraud AI)" },
      { use: "Technology spend", note: "network capacity, tokens, AI risk models" }
    ],
    revenueMix: [
      { label: "Data processing", pct: 36 }, { label: "Service fees", pct: 31 }, { label: "International transactions", pct: 25 }, { label: "Other (incl. advisory)", pct: 8 }
    ],
    moat: "A 2-sided network effect compounded for 60+ years: 4.9B credentials accepted at 150M+ locations, a brand that means \"this will work\" in 200+ countries, and switching costs that make banks and merchants hostages of convenience.",
    risks: "Interchange regulation and merchant litigation (the US Credit Card Competition Act); disintermediation by real-time rails (Pix, UPI, FedNow) and stablecoins routing around cards.",
    competitors: ["mastercard", "American Express", "China UnionPay", "Real-time rails (Pix, UPI, FedNow)", "paypal"]
  },

  "mastercard": {
    id: "mastercard", ticker: "MA", mcap: 470, name: "Mastercard", full: "Mastercard Incorporated", country: "US",
    industries: ["payments"], role: "Card network #2", founded: 1966, hq: "Purchase, New York, USA",
    stats: [{ label: "Revenue", value: "$32.8B", note: "2025 net revenue, +16%" }, { label: "Gross dollar volume", value: "$10.6T", note: "2025, +9% local currency" }, { label: "Operating margin", value: "57.6%", note: "2025; net income $15.0B" }, { label: "Services share", value: "41%", note: "of net revenue; VAS grew 23% in 2025" }],
    model: [
      "Mastercard is the same toll-road economics as Visa on a slightly smaller highway: $10.6T of gross dollar volume switched in 2025 across roughly 3.6B cards, monetized through domestic assessments on volume, per-transaction switching fees, and premium cross-border pricing (cross-border volume grew 15% in 2025). Gross fees ran to roughly $53B, but about $20.5B flowed straight back out as rebates and incentives to issuers and co-brand partners, leaving $32.8B of net revenue: the duopoly competes by paying banks, not by cutting prices for merchants.",
      "The differentiation is services. Value-added services and solutions (cybersecurity, fraud scoring, data analytics, consulting, loyalty) grew 23% in 2025 to $13.3B, now 41% of net revenue, the fastest diversification away from pure switching among the networks. Operating margins of 57.6% on minimal capex turned that into $15.0B of net income, most of it recycled into buybacks. Acquisitions like Recorded Future ($2.65B, closed December 2024) push the company deeper into threat intelligence: products sold to banks and governments whether or not a card is ever swiped."
    ],
    customers: [
      { who: "Issuing banks (Citi, Capital One, Barclays)", note: "thousands of issuers worldwide; multi-year incentive deals lock in portfolios" },
      { who: "Co-brand partners", note: "Apple Card, airlines, and retailers put Mastercard on flagship products" },
      { who: "Acquirers and PSPs (Fiserv, Worldpay, Adyen, Stripe)", note: "connect 150M+ acceptance locations" },
      { who: "Governments and enterprises", note: "cyber intelligence, analytics, and disbursement services beyond cards" }
    ],
    suppliers: [
      { who: "Its own network core", note: "global processing hubs; the O'Fallon, Missouri tech campus runs the switch" },
      { who: "Telecom and cloud providers", note: "connectivity and burst capacity around an owned backbone" },
      { who: "Acquired tech stack", note: "Recorded Future, RiskRecon, Ethoca feed the services engine" },
      { who: "EMVCo and standards bodies", note: "shared chip, contactless, and tokenization standards" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "~$16B in 2025; funds everything with room to spare" },
      { source: "Bond markets", note: "investment-grade issuance for buyback timing and M&A" },
      { source: "The 2006 IPO", note: "converted a bank-owned cooperative into a public company" }
    ],
    capitalOut: [
      { use: "Buybacks + dividends", note: "the bulk of free cash flow returned each year" },
      { use: "Rebates and incentives", note: "$20B+ in 2025, netted against revenue: the cost of keeping issuers on the network" },
      { use: "Acquisitions", note: "Recorded Future ($2.65B) plus a steady diet of fraud, data, and loyalty tuck-ins" },
      { use: "Technology spend", note: "network capacity, tokenization, AI fraud models" }
    ],
    revenueMix: [
      { label: "Transaction processing", pct: 30 }, { label: "Value-added services", pct: 25 }, { label: "Cross-border fees", pct: 23 }, { label: "Domestic assessments", pct: 22 }
    ],
    moat: "The same 2-sided network gravity as Visa plus the deepest services attach in payments: once a bank runs its fraud, cyber, and analytics stack on Mastercard, leaving means ripping out infrastructure, not swapping a logo.",
    risks: "Interchange regulation and merchant litigation on both sides of the Atlantic; real-time rails and stablecoins bypassing cards; Capital One migrating debit volume to its in-house Discover network.",
    competitors: ["visa", "American Express", "China UnionPay", "Real-time rails (UPI, Pix)", "paypal"]
  },

  "paypal": {
    id: "paypal", ticker: "PYPL", mcap: 50, name: "PayPal", full: "PayPal Holdings, Inc.", country: "US",
    industries: ["payments"], role: "Digital wallet pioneer + PSP", founded: 1998, hq: "San Jose, California, USA",
    stats: [{ label: "Revenue", value: "$33.2B", note: "2025, +4%" }, { label: "Payment volume", value: "$1.79T", note: "TPV, 2025, +7%" }, { label: "Active accounts", value: "439M", note: "Dec 2025, consumers plus 30M+ merchants" }, { label: "Venmo revenue", value: "$1.7B", note: "2025, +20%" }],
    model: [
      "PayPal is 2 businesses under 1 wallet. Branded checkout (the PayPal button, plus Venmo) is where the economics live: consumers store cards and balances, merchants pay roughly 2% to 3% for higher conversion, and PayPal keeps the spread. Unbranded processing (Braintree) is the opposite: enterprise card processing for the likes of Meta and Uber at wafer-thin margins, deliberately repriced since 2024 from growth-at-any-cost to profit. Across both, $1.79T of volume produced $33.2B of revenue in 2025 and a transaction margin of about 86 basis points per $100 processed.",
      "Unlike the networks it rides (and pays interchange to), PayPal owns the customer on both sides, which is the asset and the problem: 439M active accounts, but Apple Pay and Shop Pay attack the button while Stripe and Adyen squeeze Braintree on price. The reset under CEO Alex Chriss trades growth for quality: transaction margin dollars up about 6% in 2025, Venmo finally monetizing ($1.7B revenue, up 20%), an ads business built on shopping data, PYUSD stablecoin plumbing, and early deals to embed PayPal as the wallet inside agentic commerce. Essentially all free cash flow, about $6B a year, goes to buybacks."
    ],
    customers: [
      { who: "Online merchants", note: "from long-tail SMBs to enterprises; the button appears at most large US e-commerce checkouts" },
      { who: "Consumers", note: "400M+ wallet holders funding purchases with cards, balances, and BNPL" },
      { who: "Enterprises via Braintree", note: "Meta, Uber, and other large platforms process unbranded card volume" },
      { who: "Venmo users", note: "60M+ monthly actives; P2P converting into debit cards and online checkout" }
    ],
    suppliers: [
      { who: "Card networks and issuers", note: "Visa and Mastercard rails plus bank interchange: the single largest cost line" },
      { who: "Banks and ACH rails", note: "low-cost balance funding in the US; open banking connections abroad" },
      { who: "Cloud and compute", note: "large public-cloud footprint alongside its own data centers" },
      { who: "Credit partners", note: "WebBank originates US BNPL; KKR buys the European receivables" }
    ],
    capitalIn: [
      { source: "Operating cash flow", note: "about $6B of free cash flow a year" },
      { source: "Customer balances", note: "billions in stored value; interest on it lands in other value-added revenue" },
      { source: "Bond markets", note: "investment-grade issuance; modest net leverage" },
      { source: "Receivables sales", note: "the KKR deal recycles European BNPL loans off the balance sheet" }
    ],
    capitalOut: [
      { use: "Buybacks ~$6B / year", note: "absorbing essentially all free cash flow" },
      { use: "Technology and development ~$3B", note: "checkout, risk models, AI and agentic commerce" },
      { use: "Credit funding", note: "BNPL and merchant working-capital loans before they are sold on" },
      { use: "Acquisitions", note: "quiet now; the portfolio (Braintree, Venmo, Honey, iZettle) came from a busier era" }
    ],
    revenueMix: [
      { label: "Transaction fees, US", pct: 47 }, { label: "Transaction fees, international", pct: 43 }, { label: "Interest, credit, and other services", pct: 10 }
    ],
    moat: "2-sided ubiquity and trust built over 25 years: 400M+ stored wallets make merchants add the button, and the button's higher checkout conversion keeps merchants paying up for it.",
    risks: "Apple Pay, Shop Pay, and Google Pay eroding branded checkout share; take-rate compression as low-margin unbranded volume grows; agentic commerce re-routing checkout before the button is ever seen.",
    competitors: ["Apple Pay / Google Pay", "Stripe", "Adyen", "Block (Square, Cash App)", "Shopify (Shop Pay)"]
  }

});
