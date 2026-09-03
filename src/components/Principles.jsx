import { Reveal, SectionLabel } from './Shared';

const PRINCIPLES = [
  {
    num: '01',
    statement: 'START WITH THE PROBLEM.',
    support:
      'Every case study here began as a question, not a solution. The Visa work started with “where is the revenue leaking?” — not with a dashboard.',
  },
  {
    num: '02',
    statement: 'EVIDENCE BEFORE CONFIDENCE.',
    support:
      'Thermasight is labelled an unvalidated hypothesis because it is one. An underpowered A/B test is reported as underpowered. Certainty is earned, not declared.',
  },
  {
    num: '03',
    statement: 'UNDERSTAND THE SYSTEM BEFORE CHANGING IT.',
    support:
      'The DuckDB contribution came from reading optimizer behavior first — a rewrite causing ~50× HTTP GETs on remote Parquet — before proposing any fix.',
  },
  {
    num: '04',
    statement: 'SHIP. MEASURE. LEARN.',
    support:
      'AutonomyOS defined its North Star — Safe Automation Rate — before its features. Closed PRs sit next to merged ones here. Iteration is the method.',
  },
];

const Principles = () => (
  <section id="principles" data-testid="principles-section" className="py-28 sm:py-36 hairline-t">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
      <SectionLabel num="06" title="HOW I BUILD" sub="Four operating principles, derived from the work — not from a poster." />
      <div data-testid="operating-principles-grid">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.num} delay={i * 80}>
            <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 sm:py-12 hairline-t items-baseline">
              <span className="md:col-span-2 font-mono text-sm text-amber tracking-[0.2em]">{p.num}</span>
              <h3 className="md:col-span-6 font-serif text-2xl sm:text-3xl lg:text-4xl text-paper leading-tight">{p.statement}</h3>
              <p className="md:col-span-4 text-smoke text-sm leading-relaxed">{p.support}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Principles;
