export const STAGE_LABELS = {
  context: 'CONTEXT',
  problem: 'PROBLEM',
  research: 'RESEARCH',
  decision: 'DECISION',
  build: 'BUILD',
  validation: 'VALIDATION',
  learning: 'LEARNING',
};

export const projects = [
  {
    slug: 'autonomyos',
    title: 'AutonomyOS',
    category: 'AI AGENT GOVERNANCE — WORKING MVP',
    year: '2026',
    featured: true,
    visual: 'autonomyos',
    summary:
      'A working MVP that answers one question for every MSP support ticket: should the AI agent be allowed to act? AI recommends — deterministic policy authorizes.',
    role: 'Independent product case study — concept, PRD, full-stack MVP',
    tags: ['FastAPI', 'React + TypeScript', 'Policy Engine', 'SQLite', '26 pytest tests'],
    caseStudyUrl: 'https://drive.google.com/file/d/1FOskLnboQfacXewgtc42RDhiX2k2z62C/view?usp=sharing',
    sourceUrl: 'https://github.com/rohitmannur007/AutonomyOS',
    stages: ['context', 'problem', 'research', 'decision', 'build', 'validation', 'learning'],
    detail: {
      context:
        'Independent product case study, 2026. Concept, PRD, and a full-stack MVP — React + TypeScript frontend, FastAPI + SQLite backend, 26 pytest tests covering the risk engine, autonomy engine, API flows, and policy governance.',
      problem:
        'AI agents can diagnose IT problems convincingly. That is not the same as being safe to let loose on production systems. MSPs need a system that separates what the AI thinks from what the AI is allowed to do.',
      need: 'MSPs want automation leverage without handing a language model execution authority — maximum safe automation, not maximum automation.',
      thinking:
        'Confidence is a statement about the diagnosis, not about the blast radius of the action. A 99%-confident privileged access grant is still a privileged access grant. AutonomyOS gates execution on risk, permission level, customer impact, reversibility, and historical track record — evaluated by a deterministic policy engine, never the LLM.',
      research:
        'Modeled the autonomy question as a product metrics tradeoff — automation rate up while incorrect actions down. Defined the North Star, Safe Automation Rate (automation rate × actual success rate of trusted workflows), with guardrails for incorrect automation, human overrides, escalation rate, and mean time to resolution.',
      approach:
        'Every ticket runs one pipeline: AI diagnosis → enterprise knowledge retrieval → deterministic 0–100 risk scoring → autonomy decision → AUTO / APPROVAL / ASSIST / ESCALATE → execution, approval, or specialist escalation. Every step is a real API call against a real database — nothing on the frontend is faked or hardcoded.',
      workflow: [
        'Ticket intake',
        'AI diagnosis',
        'Knowledge retrieval',
        'Risk scoring (0–100)',
        'Deterministic policy decision',
        'AUTO / APPROVAL / ASSIST / ESCALATE',
        'Audit + analytics update',
      ],
      decisions: [
        {
          title: 'The LLM never decides autonomy',
          body: 'Enterprise execution authority must be predictable and auditable. A policy that drifts with prompt wording or model version is not a policy an MSP can stand behind — the autonomy engine is a small set of fixed, readable rules. Same inputs, same decision.',
        },
        {
          title: 'Four autonomy levels, not a binary',
          body: 'AUTO, APPROVAL, ASSIST, ESCALATE map to how MSPs actually delegate work — including the case where the AI prepares the action but a human pulls the trigger.',
        },
        {
          title: 'Workflow-level autonomy',
          body: 'A password reset and a privileged firewall change never share an execution policy. Each workflow carries its own risk profile, required permission, and historical performance.',
        },
        {
          title: 'Autonomy is earned, never auto-upgraded',
          body: 'Analytics surfaces workflows whose track record qualifies them for a higher ceiling — as recommendations. The only code path that raises a ceiling is an explicit human clicking Approve AUTO.',
        },
      ],
      metrics: [
        { value: '4', label: 'Autonomy levels', note: 'AUTO · APPROVAL · ASSIST · ESCALATE' },
        { value: '26', label: 'Pytest tests', note: 'risk engine · autonomy engine · API flows · governance' },
        { value: '20', label: 'Live demo tickets', note: 'plus seeded 30-day trends, 11 workflow rollups, 50 executions' },
        { value: '1', label: 'North Star', note: 'Safe Automation Rate — bounded above by raw automation rate' },
      ],
      solution:
        'Shipped MVP: ticket inbox, investigation view with the AI → Policy → Execution flow made visible, approvals queue, knowledge base, analytics with a policy-review panel showing live thresholds and evidence, and a full audit trail. Runs with zero API keys via a deterministic mock AI provider; OpenAI is optional with automatic fallback.',
      limitations: [
        "The default 'AI' is a deterministic keyword-matched mock — transparent and reproducible for a demo, not a production NLU system.",
        'Execution is fully simulated; no real Microsoft 365, AWS, or firewall integration exists, by design.',
        'Knowledge retrieval is keyword-based, not vector search — this keeps every citation fully inspectable.',
        'Single-tenant local prototype; no authentication.',
      ],
      learnings: [
        'The demo moment that lands: an 88%-confident diagnosis that still gets ESCALATE — confidence is not permission.',
        'Governance features (audit trail, policy review, human approval) are the product, not overhead around it.',
        'Designing the metrics model first — North Star plus guardrails — made every later UI decision easier.',
      ],
    },
  },
  {
    slug: 'demand-to-bed',
    title: 'Demand-to-Bed',
    category: 'AI DECISION INTELLIGENCE',
    year: '2026',
    featured: true,
    visual: 'demand',
    summary:
      'AI-powered demand & inventory decision intelligence — resident-first eligibility, explainable property fit, booking propensity, and a configurable decision policy over 25,000 leads and 150 properties.',
    role: 'Independent product case study — PRD, architecture, model card, full-stack build',
    tags: ['FastAPI', 'React + Vite', 'Logistic Regression', 'Decision Policy', 'Model Card'],
    caseStudyUrl: 'https://drive.google.com/file/d/1tFq-G1loiAkFKdpeWWSZTKgXXliiWs5G/view?usp=sharing',
    sourceUrl: 'https://github.com/rohitmannur007/Demand-to-Bed-AI-Powered-Demand-Inventory-Decision-Intelligence',
    stages: ['context', 'problem', 'research', 'decision', 'build', 'validation', 'learning'],
    detail: {
      context:
        'Production-style PM portfolio project built on supplied synthetic datasets — disclosed as such on every surface. Source scale: 25,000 leads, 150 properties, 120 days per property, 112,394 interactions, 4,452 bookings, 11,013 sales actions.',
      problem:
        'Sales teams sitting on thousands of leads and finite inventory need to know which resident should see which property next — without letting business pressure override whether the property is actually right for the resident.',
      need: 'Operations and sales need allocation that is explainable to residents, configurable by the business, and honest about what the model does and does not know.',
      thinking:
        'Resident fit first, business optimization second. Hard eligibility constraints are enforced before ranking — inventory pressure and contribution value can reorder eligible options, but they can never make an incompatible property eligible.',
      research:
        'Decomposed the decision into separable engines — eligibility, property fit, booking propensity, inventory pressure — composed by a configurable decision policy with human override and feedback persistence, plus lightweight model monitoring.',
      approach:
        'FastAPI data and decision services behind a React/Vite product UI: Command Center, Leads + lead detail, Inventory + property detail, Recommendations, Experiments, Insights, Model Center, AI Playground, and a Resident Mode.',
      workflow: [
        'Lead intake',
        'Eligibility filter (hard constraints)',
        'Property-fit scoring',
        'Booking propensity model',
        'Inventory pressure',
        'Policy ranking (weighted)',
        'Human override + visit booking',
      ],
      decisions: [
        {
          title: 'Hard constraints before ranking',
          body: 'Eligibility is binary and enforced first. The business levers only influence the order of what is genuinely suitable — the core safety property of the whole system.',
        },
        {
          title: 'Weights are configurable, not hidden',
          body: 'The default policy — Resident Fit 45%, Booking Probability 30%, Inventory 15%, Contribution 10% — is exposed and adjustable, not buried in code where nobody can challenge it.',
        },
        {
          title: 'A model card, not vibes',
          body: 'The logistic-regression propensity model ships with MODEL_CARD.md: training pairs, features (intent, urgency, engagement, budget/rent compatibility, fit, rating, occupancy), and metrics computed at startup and served via /api/models.',
        },
        {
          title: 'Synthetic data, disclosed',
          body: 'The application uses synthetic input data and prototype-generated outputs. It does not claim access to Stanza internal systems, APIs, or proprietary metrics — and says so in the product.',
        },
      ],
      metrics: [
        { value: '25,000', label: 'Leads', note: 'synthetic — disclosed' },
        { value: '150', label: 'Properties', note: '120 days of inventory each' },
        { value: '112K+', label: 'Interactions', note: 'plus 4,452 bookings, 11,013 sales actions' },
        { value: '45/30/15/10', label: 'Policy weights', note: 'fit · propensity · inventory · contribution' },
      ],
      solution:
        'Full-stack decision platform with explainable recommendations, experiments, model monitoring, resident visit booking, and a resident-facing mode — shipped with PRD.md, ARCHITECTURE.md, MODEL_CARD.md, and QA_CHECKLIST.md alongside the code.',
      limitations: [
        'The booking-propensity model is a prototype (logistic regression on synthetic data), not a production model.',
        'Experiment and model outputs are generated from the supplied synthetic data.',
        'Default weights are demonstration assumptions, not any company’s internal policy.',
      ],
      learnings: [
        'Explainability is a feature: showing why a property ranked the way it did shaped the entire UI.',
        'Separating eligibility from ranking is what makes the system safe to tune.',
        'Writing the model card forced honest scoping of what the ML actually knows.',
      ],
    },
  },
  {
    slug: 'visa',
    title: 'Visa Conversion & Revenue Analytics',
    category: 'CONVERSION & REVENUE ANALYTICS',
    year: '2026',
    featured: true,
    visual: 'visa',
    summary:
      'End-to-end funnel analytics for a visa application journey — the biggest revenue leak is Start→Submit abandonment, and a 20% fix is worth ₹72.4L/month.',
    role: 'Independent analytics engagement — data, SQL, ROI model, dashboards',
    tags: ['SQL (DuckDB)', 'Python', 'Tableau', 'ROI Modeling', 'A/B Design'],
    caseStudyUrl: 'https://drive.google.com/file/d/11eGyfFvuoN6ELCLM5MiHcEvem0gVz9gy/view?usp=sharing',
    sourceUrl: 'https://github.com/rohitmannur007/visa-conversion-revenue-analytics',
    stages: ['context', 'problem', 'research', 'decision', 'build', 'learning'],
    detail: {
      context:
        'Independent analytics project on an Atlys-style visa flow, structured exactly as a production analytics engagement: synthetic data with realistic distributions (50k users, 80k applications, ~33k payments, 150k sessions), SQL-first analysis, and a Python fallback so the full analysis runs without a database.',
      problem:
        'Where in the visa application journey are users dropping off, how much revenue is being lost, and what specific actions will recover it?',
      need: 'A Head of Data should be able to act immediately: quantified leaks, a healthy-vs-broken channel diagnosis, and prioritized experiments with expected ROI.',
      thinking:
        'All six acquisition channels show LTV:CAC around 9× — acquisition spend is healthy. The problem is downstream in the product: 10,723 users a month open the visa form and never submit it, a leak twice the size of the payment drop in both volume and rupees.',
      research:
        'Five analysis layers: the core funnel (Started → Submitted → Paid), channel performance, CAC/LTV unit economics, weekly cohort retention, and ROI modeling of 10/20/30% recovery scenarios.',
      approach:
        'Seeded, reproducible Python data generator → DuckDB/PostgreSQL SQL analysis with pandas mirroring every query → six output CSVs → Tableau executive dashboard and a standalone HTML funnel dashboard.',
      workflow: [
        'Synthetic data (seed 42)',
        'Funnel analysis',
        'Channel & unit economics',
        'Cohort retention',
        'ROI scenarios',
        'Dashboards',
        'Prioritized experiments',
      ],
      decisions: [
        {
          title: 'SQL-first, Python fallback',
          body: 'Any analyst can reproduce results in any SQL engine; pandas mirrors the queries exactly so no database setup is required.',
        },
        {
          title: 'Rank fixes by rupees, not vibes',
          body: 'Each leak is priced (users lost × average revenue per paying user of ₹3,377), so prioritization is arithmetic, not opinion.',
        },
        {
          title: 'Mobile is the root cause',
          body: 'Mobile is 70% of sessions with lower submit rates — form state loss. The top recommendation is Save & Resume, not more marketing spend.',
        },
      ],
      metrics: [
        { value: '26.88%', label: 'Start→Submit drop', note: '10,723 users/month never submit' },
        { value: '₹72.4L/mo', label: '20% fix on Start→Submit', note: '≈ ₹8.7 Cr/year' },
        { value: '₹34.3L/mo', label: '20% fix on Submit→Pay', note: '5,080 users lost post-submit' },
        { value: '≈9×', label: 'LTV:CAC, all channels', note: 'the problem is UX, not acquisition' },
      ],
      solution:
        'Three prioritized, measurement-ready experiments: Mobile Save & Resume (highest priority), One-Tap UPI checkout, and an abandonment email drip — each with a primary metric, guardrails, sample sizes, and expected impact. Combined 20% fix modeled at ₹1.07 Cr/month.',
      limitations: [
        'Data is synthetic (seed 42) — real drop rates and root causes may differ.',
        '“Monthly” is the last 30 days; seasonality is not captured.',
        'LTV uses a 12-month window and a fixed USD→INR rate of 83.',
      ],
      learnings: [
        'The biggest leak was twice the payment drop in both volume and rupees — intuition would have fixed checkout first.',
        'Flat ~12% cohort retention across months pointed to a structural product issue, not a campaign problem.',
        'An ROI model turns an analytics repository into a decision document.',
      ],
    },
  },
  {
    slug: 'wishlink',
    title: 'Wishlink Creator Commerce Analytics',
    category: 'CREATOR-COMMERCE ANALYTICS',
    year: '2026',
    featured: true,
    visual: 'wishlink',
    summary:
      'Analytics pipeline over 50 creators and 12 product categories — which creators drive the most value, and how to scale creator-led revenue.',
    role: 'Independent analytics project — ETL, SQL, cohort & lift analysis',
    tags: ['Python ETL', 'SQL', 'Cohort Analysis', 'Lift Metric', 'Tableau'],
    caseStudyUrl: 'https://drive.google.com/file/d/1hrpgWF0uaRXoN_RX3iABkrAuWH0FXQ0E/view?usp=sharing',
    sourceUrl: 'https://github.com/rohitmannur007/wishlink-creator-commerce-analytics',
    stages: ['context', 'problem', 'research', 'decision', 'build', 'learning'],
    detail: {
      context:
        'Independent analytics project for Wishlink, India’s creator-commerce platform: Python ETL, SQL aggregation, cohort retention and lift analysis across full-year 2023 transaction data for 50 creators across 12 product categories — plus Tableau and interactive HTML dashboards.',
      problem: 'Which creators drive the most value — and how can the platform scale creator-led revenue rather than just track it?',
      need: 'Move from reporting GMV to a decision: which creators to invest in, where to feature them, and what to test next.',
      thinking:
        'Click-to-purchase sits at 96.7% — conversion is near-optimal, so the growth lever is reach and creator placement, not checkout fixes. And the top 10 creators drive 60%+ of GMV: a classic concentration pattern arguing for a high-value creator tier.',
      research:
        'Built a Category Lift metric (each creator’s conversion vs the category baseline), retention across 8 monthly cohorts, creator concentration analysis, and platform-wide funnel diagnostics.',
      approach:
        'Python ETL → analysis-ready tables → SQL KPI, segmentation, cohort and lift queries → executive Tableau dashboard plus a 5-panel Chart.js drill-down → three A/B test proposals grounded directly in the findings.',
      workflow: [
        'Raw transactions',
        'ETL pipeline',
        'SQL aggregation',
        'Cohort & lift analysis',
        'Dashboards',
        'A/B test proposals',
      ],
      decisions: [
        {
          title: 'Invented a lift metric',
          body: 'Category Lift measures how much better a creator converts than the category average — turning “good creator” into a comparable number. Peak: 3.31× for Creator #15 in Toys.',
        },
        {
          title: 'Concentration is the strategy',
          body: 'Top-10 creators drive 60%+ of GMV — the data argues for deliberately investing in a high-value tier rather than spreading spend evenly.',
        },
        {
          title: 'Every finding ends in an experiment',
          body: 'Three proposals — creator category-page pinning, creator badges on product pages, and a lift-ranked creator feed — each with a primary metric and guardrails.',
        },
      ],
      metrics: [
        { value: '50', label: 'Creators analyzed', note: '12 categories, full-year 2023' },
        { value: '96.7%', label: 'Click→purchase', note: 'growth lever is reach, not conversion' },
        { value: '3.31×', label: 'Peak category lift', note: 'Creator #15 in Toys vs baseline' },
        { value: '60%+', label: 'GMV from top 10 creators', note: 'a clear high-value tier' },
      ],
      solution:
        'Deliverables: a reproducible ETL + SQL codebase, an executive Tableau dashboard, an interactive HTML dashboard, and three data-grounded A/B experiment designs with target creator–category pairs (3.31×, 3.14×, 2.68×).',
      limitations: [
        'The dataset covers 50 creators over one year — small-n for some category cuts.',
        'Lift is correlational; the proposed A/B tests exist precisely to establish causality.',
        'Average order value of ₹242 reflects the supplied transaction data, not a market claim.',
      ],
      learnings: [
        'A good metric — Category Lift — is a product decision tool, not just analysis output.',
        'When conversion is already 96.7%, the honest recommendation is to stop optimizing it.',
        'Cohort retention reframed “top creators” as “durable creators”.',
      ],
    },
  },
  {
    slug: 'gen-z-payments',
    title: 'Gen-Z Payment Analytics',
    category: 'PAYMENT ANALYTICS & UPLIFT MODELING',
    year: '2024',
    featured: false,
    visual: 'genz',
    summary:
      'Product analytics for a teen payments app — activation funnel, RFM segmentation, a T-Learner uplift model, and an honest readout of an underpowered experiment.',
    role: 'Portfolio analytics project — SQL, ML, experiment analysis',
    tags: ['Python', 'Scikit-learn', 'SQL', 'Uplift Model', 'Power BI'],
    caseStudyUrl: 'https://drive.google.com/file/d/1ezrkCifNGRphbnn_zi7zCMoGQzlcTDWh/view?usp=sharing',
    sourceUrl: 'https://github.com/rohitmannur007/Gen-Z-Payment-Analystics-',
    stages: ['context', 'problem', 'research', 'decision', 'build', 'validation', 'learning'],
    detail: {
      context:
        'Portfolio analytics project for FamApp, a fictional supervised teen wallet in India — disclosed as fictional throughout. Seeded synthetic data (5 tables, 40,000+ rows), 20 SQL queries across 10 sections, full Python EDA, feature engineering, ML, and a 6-tab interactive dashboard.',
      problem:
        'For a supervised teen wallet: where does activation leak, which users are actually worth nudging, and did the notification experiment work at all?',
      need: 'Growth teams need to know not just who converts, but who converts because of the nudge — and whether the data can even answer that yet.',
      thinking:
        '30% of users never transact, and the biggest single leak is 35% never adding a payment method. And the three-arm notification experiment was underpowered — reported as such, with the exact sample size needed to fix it.',
      research:
        'Activation funnel, DAU/WAU/MAU, cohort retention heatmap, RFM segmentation (K-Means plus rule-based labeling), payment-failure analysis by method and error code, notification CTR, and a pre-registered three-arm experiment readout.',
      approach:
        'Twelve leakage-safe features behind a strict cutoff date → a T-Learner uplift model (two Random Forests) scoring an Individual Treatment Effect per user → chi-squared readout with 95% confidence intervals and power analysis.',
      workflow: [
        'Data generation (SEED=42)',
        'SQL layer — 20 queries',
        'EDA — 18 charts',
        'Feature engineering',
        'T-Learner uplift model',
        'A/B readout + power analysis',
        '6-tab dashboard',
      ],
      decisions: [
        {
          title: 'Uplift, not propensity',
          body: 'A T-Learner predicts who converts because of the treatment — so nudges go to persuadables, not sure things or lost causes.',
        },
        {
          title: 'Pre-registered the experiment',
          body: 'Hypothesis, decision rules, guardrail metrics, and the subgroup plan were documented before the experiment launched — good scientific practice even in a portfolio project.',
        },
        {
          title: 'Published a negative result',
          body: 'No statistically significant effect detected — the experiment was underpowered at ~600 users per arm versus the 1,094 needed to detect a 5pp lift at 80% power. Recommendation: extend the test; investigate the directionally negative personalized nudge.',
        },
      ],
      metrics: [
        { value: '68.9%', label: 'Users who transacted', note: 'activation across the base' },
        { value: '35%', label: 'Never add a payment method', note: 'the #1 fix opportunity' },
        { value: '0.69', label: 'CV AUC, treated model', note: '± 0.04' },
        { value: '1,094', label: 'Users/arm needed', note: 'to detect a 5pp lift at 80% power' },
      ],
      solution:
        'End-to-end deliverables: a one-command reproducible pipeline, importable feature and uplift modules, an SDK instrumentation spec for engineers, a pre-registered experiment plan, and a 6-tab interactive dashboard (executive summary, funnel, cohorts, RFM, experiment, operations).',
      limitations: [
        'All data is synthetic and FamApp is fictional — disclosed on every surface.',
        'Uplift estimates rest on ~600 users per arm; mean ITE is small (~0.003).',
        'The experiment window starts July 2024 to prevent pre-treatment bias — limiting historical depth.',
      ],
      learnings: [
        'An underpowered experiment reported honestly is worth more than a significant-looking one reported carelessly.',
        'Data-leakage prevention — feature cutoff dates — is a product-integrity decision, not just an ML detail.',
        'Segment action mapping (Champions → reward, At Risk → win-back) is where analysis becomes a roadmap.',
      ],
    },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
