export const labItems = [
  {
    category: 'PROTOTYPE',
    title: 'Exception Autopilot',
    year: '2026',
    explanation:
      'Construction-fintech exception operations: detection → pattern & root-cause analysis → deterministic rule → historical replay → human approval → canary → autopilot → verification → audit.',
    link: null,
  },
  {
    category: 'PROTOTYPE',
    title: 'Billing Readiness',
    year: '2026',
    explanation:
      'Classifies projects Ready / At Risk / Blocked from fragmented contract, SOV, change-order, vendor and ERP data — with a resolve → revalidate loop before a project is marked bill-ready.',
    link: null,
  },
  {
    category: 'DATA',
    title: 'Wishlink — Interactive Dashboard',
    year: '2026',
    explanation: 'Five-panel creator-commerce drill-down: funnel, cohorts, category lift, leaderboard, GMV timeseries.',
    link: 'https://rohitmannur007.github.io/wishlink-creator-commerce-analytics-dashbord/',
  },
  {
    category: 'DATA',
    title: 'Visa — Funnel Dashboard',
    year: '2026',
    explanation: 'Standalone funnel dashboard for the visa conversion analysis — stages, leaks, and ROI scenarios.',
    link: 'https://rohitmannur007.github.io/visa-dashbord/',
  },
  {
    category: 'DATA / ML',
    title: 'Gen-Z Payment Analytics',
    year: '2024',
    explanation: 'Activation funnel, RFM segmentation, T-Learner uplift model, and a pre-registered experiment readout.',
    link: '/work/gen-z-payments',
    internal: true,
  },
];

export const openSource = [
  {
    project: 'DuckDB',
    pr: '#21408',
    title: 'fix(optimizer): skip top_n_window_elimination when struct-pack has no late materialization',
    status: 'CLOSED — NOT MERGED',
    tone: 'closed',
    context:
      'A ROW_NUMBER() = 1 optimizer rewrite could cause a second full-column scan when STRUCT_PACK was used without late materialization on remote S3/Parquet — described evidence: ~50× more HTTP GET requests, ~3× slower execution. The proposed fix falls back to the original WINDOW → FILTER plan.',
    url: 'https://github.com/duckdb/duckdb/pull/21408',
  },
  {
    project: 'DuckDB Web',
    pr: '#6606',
    title: 'Add DST transition documentation for TIMESTAMPTZ',
    status: 'MERGED',
    tone: 'merged',
    context:
      'Documentation covering how DuckDB handles daylight-saving-time transitions when adding calendar intervals to TIMESTAMPTZ values.',
    url: 'https://github.com/duckdb/duckdb-web/pull/6606',
  },
  {
    project: 'DeepEval',
    pr: '#2782',
    title: 'feat: add AgentLoopDetectionMetric scaffold',
    status: 'OPEN',
    tone: 'open',
    context:
      'Metric structure, schemas, trace-integration groundwork, tests, and loop-severity evaluation design — detecting agents stuck in loops.',
    url: 'https://github.com/confident-ai/deepeval/pull/2782',
  },
  {
    project: 'DeepEval',
    pr: '#2785',
    title: 'feat(metrics): document-type threshold overrides for heterogeneous RAG evaluation',
    status: 'CLOSED — NOT MERGED',
    tone: 'closed',
    context: 'Explored per-document-type threshold overrides for Faithfulness, Contextual Precision, and Contextual Recall metrics.',
    url: 'https://github.com/confident-ai/deepeval/pull/2785',
  },
  {
    project: 'DeepEval',
    pr: '#2791',
    title: 'feat(metrics): support document-type specific threshold overrides',
    status: 'CLOSED — MAINTAINER FEEDBACK',
    tone: 'closed',
    context:
      'A later iteration, closed after maintainer feedback identified implementation and product-fit issues. Iteration → external feedback → learning.',
    url: 'https://github.com/confident-ai/deepeval/pull/2791',
  },
  {
    project: 'LM Evaluation Harness',
    pr: '#3863',
    title: 'feat: agent threat bench — memory poison',
    status: 'OPEN',
    tone: 'open',
    context:
      'Dataset integration, a custom dataset loader, and a utility metric measuring agent resistance to memory poisoning.',
    url: 'https://github.com/EleutherAI/lm-evaluation-harness/pull/3863',
  },
  {
    project: 'LangGraph',
    pr: '#8133',
    title: 'fix(cli): avoid CLI hangs caused by stalled analytics requests',
    status: 'CLOSED — PROCESS',
    tone: 'closed',
    context:
      'Added a 10-second timeout to analytics requests to prevent stalled calls from hanging the CLI. Automatically closed for missing a required approved-issue link — a process closure, not a technical rejection.',
    url: 'https://github.com/langchain-ai/langgraph/pull/8133',
  },
  {
    project: 'PostHog',
    pr: '—',
    title: 'Open-source product / codebase contribution',
    status: 'RECORD UNAVAILABLE',
    tone: 'unavailable',
    context:
      'An earlier PostHog contribution whose upstream PR was later deleted by the repository owner. The original PR record is no longer publicly available, so it is listed here without a number, merge status, or technical detail — rather than invented.',
    url: null,
  },
];

export const currentlyExploring = [
  'Agentic-systems evaluation — loop detection (DeepEval #2782) and memory-poisoning resistance (LM-Evaluation-Harness #3863). Both PRs currently open.',
  'AI autonomy governance — when should an agent be allowed to act? Explored as a working product in AutonomyOS.',
];
