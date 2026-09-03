import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject, projects, STAGE_LABELS } from '../data/projects';
import { visuals } from '../components/visuals';
import Footer from '../components/Footer';
import { ArrowUpRight, GitHubIcon, PdfIcon } from '../components/Shared';
import NotFound from './NotFound';

const Block = ({ label, children, id }) => (
  <div id={id} className="scroll-mt-32 py-10 sm:py-12 hairline-t">
    <p className="mono-label text-amber mb-5">{label}</p>
    {children}
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const [activeStage, setActiveStage] = useState(null);

  useEffect(() => {
    if (!project) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveStage(e.target.id.replace('s-', ''));
        });
      },
      { rootMargin: '-30% 0px -55% 0px' }
    );
    project.stages.forEach((s) => {
      const el = document.getElementById('s-' + s);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [project]);

  if (!project) return <NotFound />;

  const d = project.detail;
  const V = visuals[project.visual];
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <main data-testid={`project-detail-${project.slug}`} className="pt-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16">
          <Link
            data-testid="back-to-index"
            to="/"
            className="font-mono text-[11px] tracking-[0.25em] text-smoke hover:text-amber transition-colors duration-300"
          >
            ← INDEX
          </Link>
          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="mono-label text-amber mb-4">{project.category}</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-paper leading-[1.02] tracking-tight">
                {project.title}
              </h1>
              <p className="mt-6 text-smoke text-base sm:text-lg leading-relaxed max-w-2xl">{d.thinking}</p>
            </div>
            <div className="lg:col-span-5 hairline bg-surface overflow-hidden">
              <V />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="font-mono text-[10px] tracking-[0.12em] text-smoke border border-white/10 px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </div>

        <nav
          data-testid="detail-stage-indicator"
          aria-label="Case study stages"
          className="sticky top-16 z-40 mt-14 bg-ink/90 backdrop-blur-md border-y border-white/10"
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex gap-6 overflow-x-auto py-4">
            {project.stages.map((s) => (
              <button
                key={s}
                data-testid={`stage-${s}`}
                onClick={() => document.getElementById('s-' + s)?.scrollIntoView({ behavior: 'smooth' })}
                className={`font-mono text-[10px] tracking-[0.22em] whitespace-nowrap transition-colors duration-300 ${
                  activeStage === s ? 'text-amber' : 'text-faint hover:text-smoke'
                }`}
              >
                {STAGE_LABELS[s]}
              </button>
            ))}
          </div>
        </nav>

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pb-24">
          <div className="max-w-4xl">
            <Block label="CONTEXT" id="s-context">
              <p className="text-paper/90 text-base sm:text-lg leading-relaxed">{d.context}</p>
              <p className="mt-4 font-mono text-[11px] tracking-[0.15em] text-faint">{project.role.toUpperCase()}</p>
            </Block>

            <Block label="PROBLEM" id="s-problem">
              <p className="font-serif text-xl sm:text-2xl text-paper leading-snug">{d.problem}</p>
              <p className="mt-5 text-smoke text-sm sm:text-base leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.2em] text-amber block mb-2">USER / BUSINESS NEED</span>
                {d.need}
              </p>
            </Block>

            {d.research && (
              <Block label="RESEARCH / ANALYSIS" id="s-research">
                <p className="text-paper/90 text-base leading-relaxed">{d.research}</p>
                <p className="mt-5 text-smoke text-sm leading-relaxed">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-amber block mb-2">APPROACH</span>
                  {d.approach}
                </p>
              </Block>
            )}

            <Block label="KEY DECISIONS" id="s-decision">
              <div className="grid sm:grid-cols-2 gap-4">
                {d.decisions.map((dec, i) => (
                  <div key={i} className="hairline bg-surface p-6">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-amber mb-3">D{i + 1}</p>
                    <h3 className="text-paper font-medium text-base">{dec.title}</h3>
                    <p className="mt-3 text-smoke text-sm leading-relaxed">{dec.body}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block label="WORKFLOW / SYSTEM" id="s-build">
              <ol className="space-y-0 border-l border-white/10 ml-1">
                {d.workflow.map((w, i) => (
                  <li key={i} className="relative pl-8 py-3">
                    <span className="absolute left-[-5px] top-5 w-2.5 h-2.5 bg-ink border border-amber" aria-hidden="true" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-faint mr-3">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-paper/90 text-sm sm:text-base">{w}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-smoke text-sm sm:text-base leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.2em] text-amber block mb-2">SOLUTION</span>
                {d.solution}
              </p>
            </Block>

            {d.metrics && project.stages.includes('validation') && (
              <Block label="METRICS / EVIDENCE" id="s-validation">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {d.metrics.map((m, i) => (
                    <div key={i} className="hairline bg-surface p-5">
                      <p className="font-serif text-2xl sm:text-3xl text-amber">{m.value}</p>
                      <p className="mt-2 text-paper text-xs font-medium tracking-wide">{m.label}</p>
                      <p className="mt-1 text-faint text-[11px] leading-relaxed">{m.note}</p>
                    </div>
                  ))}
                </div>
              </Block>
            )}

            {!project.stages.includes('validation') && d.metrics && (
              <Block label="METRICS / EVIDENCE" id="s-research-metrics">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {d.metrics.map((m, i) => (
                    <div key={i} className="hairline bg-surface p-5">
                      <p className="font-serif text-2xl sm:text-3xl text-amber">{m.value}</p>
                      <p className="mt-2 text-paper text-xs font-medium tracking-wide">{m.label}</p>
                      <p className="mt-1 text-faint text-[11px] leading-relaxed">{m.note}</p>
                    </div>
                  ))}
                </div>
              </Block>
            )}

            <Block label="LIMITATIONS + LEARNINGS" id="s-learning">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-faint mb-4">LIMITATIONS — STATED, NOT HIDDEN</p>
                  <ul className="space-y-3">
                    {d.limitations.map((l, i) => (
                      <li key={i} className="flex gap-3 text-smoke text-sm leading-relaxed">
                        <span className="mt-2 w-3 h-px bg-white/30 shrink-0" aria-hidden="true" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-amber mb-4">WHAT I LEARNED</p>
                  <ul className="space-y-3">
                    {d.learnings.map((l, i) => (
                      <li key={i} className="flex gap-3 text-paper/85 text-sm leading-relaxed">
                        <span className="mt-2 w-3 h-px bg-amber shrink-0" aria-hidden="true" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Block>
          </div>

          <div className="mt-16 hairline bg-surface p-6 sm:p-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-5 justify-between">
            <div className="flex flex-wrap gap-4">
              <a
                data-testid="detail-case-study-link"
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] bg-amber text-ink px-6 py-4 hover:bg-paper transition-colors duration-300"
              >
                <PdfIcon /> READ FULL CASE STUDY <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                data-testid="detail-source-link"
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-paper border border-white/20 px-6 py-4 hover:border-amber hover:text-amber transition-colors duration-300"
              >
                <GitHubIcon /> VIEW SOURCE <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <Link
              data-testid="next-project-link"
              to={`/work/${next.slug}`}
              className="font-mono text-[11px] tracking-[0.2em] text-smoke hover:text-amber transition-colors duration-300"
            >
              NEXT — {next.title.toUpperCase()} →
            </Link>
          </div>
          <p className="mt-6 font-mono text-[10px] tracking-[0.15em] text-faint">
            THE LINKED PDF REMAINS THE AUTHORITATIVE DETAILED DOCUMENT FOR THIS PROJECT.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
