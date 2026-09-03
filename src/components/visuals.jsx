const C = {
  bg: '#101216',
  line: 'rgba(255,255,255,0.14)',
  faint: '#636A79',
  smoke: '#A0A5B1',
  paper: '#F4F4F6',
  amber: '#E28743',
  emerald: '#10B981',
  sky: '#38BDF8',
  red: '#D66A6A',
};

const mono = { fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.18em' };

const Frame = ({ children, caption }) => (
  <svg viewBox="0 0 800 600" className="w-full h-full block" role="img" aria-label={caption}>
    <rect width="800" height="600" fill={C.bg} />
    {Array.from({ length: 15 }).map((_, i) => (
      <line key={'v' + i} x1={50 * (i + 1)} y1="0" x2={50 * (i + 1)} y2="600" stroke="rgba(255,255,255,0.035)" />
    ))}
    {Array.from({ length: 11 }).map((_, i) => (
      <line key={'h' + i} x1="0" y1={50 * (i + 1)} x2="800" y2={50 * (i + 1)} stroke="rgba(255,255,255,0.035)" />
    ))}
    {children}
    <text x="40" y="568" fill={C.faint} fontSize="13" style={mono}>
      {caption}
    </text>
  </svg>
);

const Node = ({ x, y, w = 150, h = 52, label, color = C.smoke, fill = '#15181d' }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill={fill} stroke={C.line} />
    <rect x={x} y={y} width="3" height={h} fill={color} />
    <text x={x + 16} y={y + h / 2 + 4} fill={C.paper} fontSize="13" style={mono}>
      {label}
    </text>
  </g>
);

const Edge = ({ x1, y1, x2, y2, dashed = false, color = C.line }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.2" strokeDasharray={dashed ? '5 5' : 'none'} />
);

export const AutonomyOSVisual = () => (
  <Frame caption="AUTONOMYOS — AI RECOMMENDS · POLICY AUTHORIZES">
    <Node x={50} y={140} w={130} label="TICKET" />
    <Node x={230} y={140} w={150} label="AI DIAGNOSIS" color={C.sky} />
    <Node x={430} y={140} w={130} label="RISK 0–100" color={C.amber} />
    <Node x={610} y={140} w={150} label="POLICY ENGINE" color={C.paper} />
    <Edge x1={180} y1={166} x2={230} y2={166} />
    <Edge x1={380} y1={166} x2={430} y2={166} />
    <Edge x1={560} y1={166} x2={610} y2={166} />
    <Edge x1={685} y1={192} x2={685} y2={260} />
    <Node x={610} y={260} w={150} label="AUTO" color={C.emerald} />
    <Node x={610} y={330} w={150} label="APPROVAL" color={C.amber} />
    <Node x={610} y={400} w={150} label="ASSIST" color={C.sky} />
    <Node x={610} y={470} w={150} label="ESCALATE" color={C.red} />
    <Edge x1={685} y1={312} x2={685} y2={330} />
    <Edge x1={685} y1={382} x2={685} y2={400} />
    <Edge x1={685} y1={452} x2={685} y2={470} />
    <text x={50} y={300} fill={C.faint} fontSize="12" style={mono}>
      SAFE AUTOMATION RATE
    </text>
    <text x={50} y={330} fill={C.paper} fontSize="26" style={mono}>
      AUTOMATION ↑ · ERRORS ↓
    </text>
    <text x={50} y={380} fill={C.faint} fontSize="12" style={mono}>
      AUTONOMY IS EARNED — NEVER AUTO-UPGRADED
    </text>
    <text x={50} y={404} fill={C.faint} fontSize="12" style={mono}>
      HUMAN APPROVAL IS THE ONLY PATH TO AUTO
    </text>
  </Frame>
);

export const DemandVisual = () => (
  <Frame caption="DEMAND-TO-BED — RESIDENT FIT FIRST">
    {[
      [70, 90], [110, 130], [90, 180], [130, 220], [75, 260], [120, 300], [95, 350], [140, 390], [80, 430],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="4" fill={i % 3 === 0 ? C.amber : C.smoke} opacity="0.85" />
    ))}
    <text x={55} y={490} fill={C.faint} fontSize="12" style={mono}>25,000 LEADS</text>
    <Edge x1={170} y1={270} x2={250} y2={270} />
    <polygon points="300,220 355,270 300,320 245,270" fill="#15181d" stroke={C.line} />
    <text x={268} y={275} fill={C.paper} fontSize="11" style={mono}>ELIGIBLE?</text>
    <Edge x1={355} y1={270} x2={420} y2={270} />
    <Node x={420} y={120} w={170} label="FIT · 45%" color={C.emerald} />
    <Node x={420} y={200} w={170} label="PROPENSITY · 30%" color={C.sky} />
    <Node x={420} y={280} w={170} label="INVENTORY · 15%" color={C.amber} />
    <Node x={420} y={360} w={170} label="CONTRIBUTION · 10%" color={C.smoke} />
    <Edge x1={590} y1={270} x2={650} y2={270} />
    <Node x={650} y={240} w={120} label="DECISION" color={C.paper} />
    <Edge x1={710} y1={292} x2={710} y2={340} />
    <Node x={650} y={340} w={120} label="VISIT" color={C.emerald} />
    <text x={420} y={470} fill={C.faint} fontSize="12" style={mono}>
      HARD CONSTRAINTS BEFORE RANKING
    </text>
    <text x={420} y={494} fill={C.faint} fontSize="12" style={mono}>
      WEIGHTS CONFIGURABLE — NOT HIDDEN
    </text>
  </Frame>
);

export const VisaVisual = () => (
  <Frame caption="VISA FUNNEL — WHERE THE REVENUE LEAKS">
    <rect x={60} y={110} width={620} height={64} fill="#15181d" stroke={C.line} />
    <text x={80} y={148} fill={C.paper} fontSize="14" style={mono}>STARTED — 39,890</text>
    <rect x={60} y={240} width={454} height={64} fill="#15181d" stroke={C.line} />
    <text x={80} y={278} fill={C.paper} fontSize="14" style={mono}>SUBMITTED — 29,167</text>
    <rect x={60} y={370} width={374} height={64} fill="#15181d" stroke={C.line} />
    <text x={80} y={408} fill={C.paper} fontSize="14" style={mono}>PAID — 24,087</text>
    <text x={540} y={216} fill={C.amber} fontSize="13" style={mono}>−26.88% · 10,723 LOST</text>
    <text x={460} y={346} fill={C.amber} fontSize="13" style={mono}>−17.42% · 5,080 LOST</text>
    <rect x={540} y={370} width={220} height={90} fill="none" stroke={C.amber} strokeDasharray="6 5" />
    <text x={560} y={404} fill={C.amber} fontSize="13" style={mono}>20% FIX =</text>
    <text x={560} y={434} fill={C.paper} fontSize="20" style={mono}>₹72.4L / MO</text>
    <text x={60} y={510} fill={C.faint} fontSize="12" style={mono}>ALL CHANNELS LTV:CAC ≈ 9× — THE LEAK IS UX, NOT ACQUISITION</text>
  </Frame>
);

export const WishlinkVisual = () => (
  <Frame caption="WISHLINK — CREATOR → CONTENT → COMMERCE">
    <Node x={60} y={90} w={190} label="C15 · TOYS · 3.31×" color={C.amber} />
    <Node x={60} y={170} w={190} label="C49 · HOME · 3.14×" color={C.amber} />
    <Node x={60} y={250} w={190} label="C9 · FOOD · 2.68×" color={C.amber} />
    <Edge x1={250} y1={116} x2={330} y2={200} />
    <Edge x1={250} y1={196} x2={330} y2={216} />
    <Edge x1={250} y1={276} x2={330} y2={232} />
    <polygon points="330,150 520,150 480,300 370,300" fill="#15181d" stroke={C.line} />
    <text x={376} y={210} fill={C.paper} fontSize="13" style={mono}>COMMERCE</text>
    <text x={382} y={234} fill={C.faint} fontSize="11" style={mono}>FUNNEL</text>
    <Edge x1={425} y1={300} x2={425} y2={360} />
    <polyline points="80,520 200,470 320,490 440,420 560,440 700,380" fill="none" stroke={C.amber} strokeWidth="1.6" />
    <line x1={80} y1={540} x2={700} y2={540} stroke={C.line} />
    <text x={80} y={440} fill={C.paper} fontSize="13" style={mono}>GMV — TOP 10 CREATORS = 60%+</text>
    <text x={560} y={120} fill={C.faint} fontSize="12" style={mono}>CLICK→PURCHASE</text>
    <text x={560} y={146} fill={C.emerald} fontSize="22" style={mono}>96.7%</text>
  </Frame>
);

export const GenZVisual = () => {
  const cells = [];
  const op = [0.9, 0.55, 0.4, 0.3, 0.22, 0.16];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      const o = c <= r ? op[Math.min(c, 5)] * (1 - r * 0.08) : 0.06;
      cells.push(<rect key={r + '-' + c} x={60 + c * 62} y={100 + r * 62} width={54} height={54} fill={c === 0 ? C.amber : C.sky} opacity={o} />);
    }
  }
  return (
    <Frame caption="GEN-Z PAYMENTS — COHORTS, SIGNALS, HONEST READOUTS">
      {cells}
      <text x={60} y={80} fill={C.faint} fontSize="12" style={mono}>COHORT RETENTION — WEEK 0 → 5</text>
      {[
        [560, 140, C.emerald, 'CHAMPIONS'], [620, 180, C.emerald, ''], [590, 240, C.sky, ''], [660, 260, C.sky, ''],
        [540, 330, C.amber, 'AT RISK'], [630, 360, C.amber, ''], [580, 430, C.faint, 'LOST'], [670, 450, C.faint, ''],
      ].map(([x, y, col, label], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7" fill={col} opacity="0.9" />
          {label && <text x={x + 14} y={y + 4} fill={C.faint} fontSize="11" style={mono}>{label}</text>}
        </g>
      ))}
      <text x={520} y={80} fill={C.faint} fontSize="12" style={mono}>RFM SEGMENTS</text>
      <text x={60} y={520} fill={C.red} fontSize="12" style={mono}>A/B UNDERPOWERED — NEED 1,094/ARM, HAVE ~600</text>
    </Frame>
  );
};

export const ThermasightVisual = () => (
  <Frame caption="THERMASIGHT — HYPOTHESIS, NOT VALIDATED">
    <defs>
      <linearGradient id="thermal" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#E28743" stopOpacity="0.05" />
        <stop offset="55%" stopColor="#E28743" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#D66A6A" stopOpacity="0.75" />
      </linearGradient>
    </defs>
    <rect x={150} y={150} width={300} height={240} fill="#15181d" stroke={C.line} />
    <line x1={300} y1={150} x2={300} y2={390} stroke={C.line} strokeDasharray="4 4" />
    <rect x={150} y={150} width={300} height={240} fill="url(#thermal)" />
    <text x={205} y={425} fill={C.faint} fontSize="12" style={mono}>PACKAGE — THERMAL EXPOSURE</text>
    <circle cx={580} cy={230} r={46} fill="none" stroke={C.amber} strokeDasharray="6 5" />
    <text x={570} y={240} fill={C.amber} fontSize="26" style={mono}>?</text>
    <text x={528} y={310} fill={C.faint} fontSize="12" style={mono}>AI INFERENCE</text>
    <Edge x1={450} y1={250} x2={534} y2={235} dashed color={C.amber} />
    <rect x={470} y={420} width={280} height={52} fill="none" stroke={C.amber} strokeDasharray="6 5" />
    <text x={490} y={452} fill={C.amber} fontSize="12" style={mono}>STATUS: NOT VALIDATED</text>
  </Frame>
);

export const ConclusionGraphVisual = () => (
  <Frame caption="THE CONCLUSION GRAPH — EVIDENCE · DEPENDENCY · JUDGMENT">
    <Node x={70} y={120} w={130} label="EVIDENCE A" />
    <Node x={70} y={220} w={130} label="EVIDENCE B" />
    <Node x={70} y={320} w={130} label="EVIDENCE C" />
    <Node x={360} y={210} w={170} label="CONCLUSION" color={C.paper} />
    <Edge x1={200} y1={146} x2={360} y2={226} />
    <Edge x1={200} y1={246} x2={360} y2={240} />
    <Edge x1={200} y1={346} x2={360} y2={258} />
    <Node x={360} y={400} w={170} label="NEW EVIDENCE" color={C.amber} />
    <Edge x1={445} y1={400} x2={445} y2={262} dashed color={C.amber} />
    <text x={470} y={340} fill={C.amber} fontSize="12" style={mono}>THREATENS?</text>
    <Node x={610} y={210} w={150} label="HUMAN" color={C.emerald} />
    <text x={622} y={280} fill={C.faint} fontSize="11" style={mono}>REASSESSES</text>
    <Edge x1={530} y1={236} x2={610} y2={236} />
    <text x={70} y={480} fill={C.faint} fontSize="12" style={mono}>AI TRACES THE DEPENDENCY — A HUMAN RE-JUDGES THE CONCLUSION</text>
  </Frame>
);

export const visuals = {
  autonomyos: AutonomyOSVisual,
  demand: DemandVisual,
  visa: VisaVisual,
  wishlink: WishlinkVisual,
  genz: GenZVisual,
  thermasight: ThermasightVisual,
  conclusiongraph: ConclusionGraphVisual,
};
