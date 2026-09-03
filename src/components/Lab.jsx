import { Link } from 'react-router-dom';
import { labItems, openSource, currentlyExploring } from '../data/lab';
import { Reveal, SectionLabel, ArrowUpRight, GitHubIcon } from './Shared';

const TONES = {
  merged: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/5',
  closed: 'text-smoke border-black/15 bg-black/5',
  open: 'text-sky-300 border-sky-300/40 bg-sky-300/5',
  unavailable: 'text-amber border-amber/40 bg-amber/5',
};

const LabRow = ({ item }) => {
  const inner = (
    <>
      <span className="md:col-span-1 font-mono text-[11px] text-faint">{item.year}</span>
      <span className="md:col-span-2 font-mono text-[10px] tracking-[0.2em] text-amber">{item.category}</span>
      <span className="md:col-span-4 font-serif text-xl text-paper">{item.title}</span>
      <span className="md:col-span-4 text-smoke text-sm leading-relaxed">{item.explanation}</span>
      <span className="md:col-span-1 flex md:justify-end">
        {item.link && <ArrowUpRight className="w-4 h-4 text-faint group-hover:text-amber transition-colors duration-300" />}
      </span>
    </>
  );
  const cls = 'group grid md:grid-cols-12 gap-2 md:gap-4 items-baseline py-6 border-b border-black/8 hover:bg-surface/60 transition-colors duration-300 px-2 -mx-2';
  if (item.internal) {
    return (
      <Link data-testid={`lab-item-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} to={item.link} className={cls}>
        {inner}
      </Link>
    );
  }
  if (item.link) {
    return (
      <a
        data-testid={`lab-item-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {inner}
      </a>
    );
  }
  return <div className={cls}>{inner}</div>;
};

const OpenSourceItem = ({ os }) => (
  <div data-testid={`oss-${os.project.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${os.pr.replace('#', '')}`} className="hairline bg-surface p-6 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="font-mono text-[10px] tracking-[0.25em] text-faint mb-2">
          {os.project.toUpperCase()} · PR {os.pr}
        </p>
        {os.url ? (
          <a
            data-testid={`oss-link-${os.pr.replace('#', '')}`}
            href={os.url}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link inline-flex items-center gap-2 text-paper text-sm sm:text-base font-medium hover:text-amber transition-colors duration-300 break-words"
          >
            <GitHubIcon className="w-4 h-4 shrink-0" />
            {os.title}
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        ) : (
          <p className="text-paper text-sm sm:text-base font-medium">{os.title}</p>
        )}
        <p className="mt-3 text-smoke text-sm leading-relaxed max-w-3xl">{os.context}</p>
      </div>
      <span className={`shrink-0 font-mono text-[10px] tracking-[0.18em] px-3 py-1.5 border ${TONES[os.tone]}`}>{os.status}</span>
    </div>
  </div>
);

const Lab = () => (
  <section id="lab" data-testid="lab-section" className="py-28 sm:py-36 hairline-t">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
      <SectionLabel
        num="04"
        title="LAB & OPEN SOURCE."
        sub="my workbench — experiments, prototypes, and real code contributions to duckdb, deepeval & langgraph. every status shown honestly."
      />

      <Reveal>
        <div data-testid="lab-experiment-index" className="border-t border-black/8">
          {labItems.map((item) => (
            <LabRow key={item.title} item={item} />
          ))}
        </div>
      </Reveal>

      <div className="mt-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-paper">Open Source</h3>
              <p className="mt-2 text-smoke text-sm italic font-serif">“I learn by getting close to the system.”</p>
            </div>
            <span className="mono-label">STATUSES VERIFIED VIA GITHUB API</span>
          </div>
        </Reveal>
        <div data-testid="lab-open-source-prs" className="grid gap-3">
          {openSource.map((os) => (
            <OpenSourceItem key={os.project + os.pr} os={os} />
          ))}
        </div>
      </div>

      <Reveal>
        <div data-testid="currently-exploring" className="mt-16 hairline bg-surface p-6 sm:p-8">
          <p className="mono-label text-amber mb-5">CURRENTLY EXPLORING</p>
          <ul className="space-y-4">
            {currentlyExploring.map((c, i) => (
              <li key={i} className="flex gap-3 text-smoke text-sm leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 bg-amber shrink-0" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Lab;
