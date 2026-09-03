import { research } from '../data/research';
import { visuals } from './visuals';
import { Reveal, SectionLabel, ArrowUpRight, PdfIcon } from './Shared';

const ResearchCard = ({ r, index }) => {
  const V = visuals[r.visual];
  return (
    <Reveal delay={index * 120}>
      <article data-testid={`research-card-${r.id}`} className="hairline bg-surface flex flex-col h-full">
        <div className="border-b border-black/8 max-h-72 overflow-hidden">
          <V />
        </div>
        <div className="p-6 sm:p-8 flex flex-col flex-1">
          <span
            data-testid={`research-status-${r.id}`}
            className={`self-start font-mono text-[10px] tracking-[0.2em] px-3 py-1.5 border ${
              r.tone === 'hypothesis'
                ? 'text-amber border-amber/40 bg-amber/5'
                : 'text-sky-300 border-sky-300/30 bg-sky-300/5'
            }`}
          >
            {r.status}
          </span>
          <h3 className="font-serif text-3xl text-paper mt-5">{r.title}</h3>
          <p className="mono-label mt-2">{r.subtitle}</p>
          <div className="mt-6 space-y-5 flex-1">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-amber mb-1.5">QUESTION</p>
              <p className="text-smoke text-sm leading-relaxed">{r.question}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-amber mb-1.5">DOMAIN</p>
              <p className="text-smoke text-sm">{r.domain}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-amber mb-1.5">RESEARCH DIRECTION</p>
              <p className="text-smoke text-sm leading-relaxed">{r.direction}</p>
            </div>
          </div>
          <a
            data-testid={`read-research-${r.id}`}
            href={r.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 self-start font-mono text-[11px] tracking-[0.2em] text-paper border border-black/20 px-5 py-3 hover:border-amber hover:text-amber transition-colors duration-300"
          >
            <PdfIcon /> READ RESEARCH <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </article>
    </Reveal>
  );
};

const Research = () => (
  <section id="research" data-testid="research-section" className="py-16 sm:py-20 hairline-t">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
      <SectionLabel
        num="03"
        title="RESEARCH SECTION."
        sub="two papers i wrote and published — questions before products, evidence before certainty."
      />
      <div className="grid md:grid-cols-2 gap-8">
        {research.map((r, i) => (
          <ResearchCard key={r.id} r={r} index={i} />
        ))}
      </div>

      <Reveal>
        <div data-testid="judgment-block" className="mt-16 border-l-2 border-amber pl-6 sm:pl-8 max-w-3xl">
          <p className="mono-label text-amber mb-3">JUDGMENT — WHAT I WON'T BUILD YET</p>
          <p className="text-smoke text-sm sm:text-base leading-relaxed">
            Thermasight stays a research question until controlled thermal-exposure experiments show a reliable signal.
            No product, no pitch, no validation theatre — the hypothesis is labelled unvalidated because it is one.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Research;
