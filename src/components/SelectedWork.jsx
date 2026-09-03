import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { visuals } from './visuals';
import { Reveal, SectionLabel, ArrowUpRight, GitHubIcon, PdfIcon } from './Shared';

const ProjectLinks = ({ p }) => (
  <div className="flex flex-wrap items-center gap-3 mt-7">
    <Link
      data-testid={`breakdown-${p.slug}`}
      to={`/work/${p.slug}`}
      className="font-mono text-[11px] tracking-[0.2em] bg-amber text-ink px-5 py-3 hover:bg-paper transition-colors duration-300"
    >
      READ THE BREAKDOWN
    </Link>
    <a
      data-testid={`case-study-${p.slug}`}
      href={p.caseStudyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-paper border border-black/20 px-5 py-3 hover:border-amber hover:text-amber transition-colors duration-300"
    >
      <PdfIcon /> VIEW CASE STUDY <ArrowUpRight className="w-3 h-3" />
    </a>
    <a
      data-testid={`source-${p.slug}`}
      href={p.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-paper border border-black/20 px-5 py-3 hover:border-amber hover:text-amber transition-colors duration-300"
    >
      <GitHubIcon /> VIEW SOURCE <ArrowUpRight className="w-3 h-3" />
    </a>
  </div>
);

const ProjectCard = ({ p, index }) => {
  const Visual = visuals[p.visual];
  const flip = index % 2 === 1;
  return (
    <Reveal>
      <article
        data-testid={`project-card-${p.slug}`}
        className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
      >
        <div className={`hairline bg-surface overflow-hidden ${flip ? 'lg:order-2' : ''}`}>
          <Link to={`/work/${p.slug}`} aria-label={`Open ${p.title} breakdown`} className="block hover:opacity-90 transition-opacity duration-300">
            <Visual />
          </Link>
        </div>
        <div className={flip ? 'lg:order-1' : ''}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] tracking-[0.25em] text-amber">{String(index + 1).padStart(2, '0')}</span>
            <span className="mono-label">{p.category}</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-paper leading-tight">
            <Link to={`/work/${p.slug}`} className="u-link hover:text-amber transition-colors duration-300">
              {p.title}
            </Link>
          </h3>
          <p className="mt-5 text-smoke text-sm sm:text-base leading-relaxed">{p.summary}</p>
          <p className="mt-4 font-mono text-[11px] tracking-[0.15em] text-faint">{p.role.toUpperCase()}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="font-mono text-[10px] tracking-[0.12em] text-smoke border border-black/10 px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
          <ProjectLinks p={p} />
        </div>
      </article>
    </Reveal>
  );
};

const SelectedWork = () => {
  const featured = projects.filter((p) => p.featured);
  const archived = projects.filter((p) => !p.featured);
  return (
    <section id="work" data-testid="selected-work-section" className="py-28 sm:py-36 hairline-t">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <SectionLabel
          num="02"
          title="SELECTED WORK"
          sub="These are my projects — five real products and analyses I designed and built myself. Click any of them for the full story: the problem, my decisions, the numbers, and the code."
        />
        <div className="space-y-24 sm:space-y-32">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>

        {archived.map((p) => (
          <Reveal key={p.slug}>
            <article
              data-testid={`project-card-${p.slug}`}
              className="mt-24 hairline bg-surface p-6 sm:p-8 grid md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-5">
                <span className="mono-label text-amber">FROM THE ARCHIVE — {p.year}</span>
                <h3 className="font-serif text-2xl text-paper mt-3">
                  <Link to={`/work/${p.slug}`} className="u-link hover:text-amber transition-colors duration-300">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 text-smoke text-sm leading-relaxed">{p.summary}</p>
              </div>
              <div className="md:col-span-3 hairline overflow-hidden max-h-44">
                {(() => {
                  const V = visuals[p.visual];
                  return <V />;
                })()}
              </div>
              <div className="md:col-span-4">
                <ProjectLinks p={p} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
