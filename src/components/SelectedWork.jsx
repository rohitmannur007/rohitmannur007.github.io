import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { visuals } from './visuals';
import { Reveal, SectionLabel, ArrowUpRight, GitHubIcon, PdfIcon } from './Shared';

const ProjectLinks = ({ p }) => (
  <div className="flex flex-wrap items-center gap-3 mt-6">
    <Link
      data-testid={`breakdown-${p.slug}`}
      to={`/work/${p.slug}`}
      className="font-mono text-[11px] tracking-[0.2em] bg-amber text-cream px-5 py-3 hover:bg-paper hover:text-ink transition-colors duration-300"
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

const ProjectRow = ({ p, index }) => {
  const Visual = visuals[p.visual];
  const flip = index % 2 === 1;
  return (
    <Reveal>
      <article
        data-testid={`project-card-${p.slug}`}
        className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 sm:py-14 hairline-t"
      >
        <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
          <div className="flex items-baseline gap-5 mb-4">
            <span
              className="font-serif font-bold text-5xl sm:text-6xl leading-none select-none"
              style={{ color: 'transparent', WebkitTextStroke: '1.3px rgba(232,85,30,0.75)' }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="mono-label">{p.category}</span>
          </div>
          <h3 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-paper leading-[0.98] tracking-tight">
            <Link to={`/work/${p.slug}`} className="u-link hover:text-amber transition-colors duration-300">
              {p.title}
            </Link>
          </h3>
          <p className="mt-4 text-smoke text-sm sm:text-base leading-relaxed max-w-xl">{p.summary}</p>
          <p className="mt-3 font-mono text-[11px] tracking-[0.15em] text-faint">{p.role.toUpperCase()}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="font-mono text-[10px] tracking-[0.12em] text-smoke border border-black/10 px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
          <ProjectLinks p={p} />
        </div>
        <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
          <motion.div
            whileHover={{ rotate: flip ? 1.2 : -1.2, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="hairline bg-surface overflow-hidden shadow-[0_36px_70px_-36px_rgba(0,0,0,0.5)]"
          >
            <Link to={`/work/${p.slug}`} aria-label={`Open ${p.title} breakdown`} className="block">
              <Visual />
            </Link>
          </motion.div>
        </div>
      </article>
    </Reveal>
  );
};

const SelectedWork = () => {
  const featured = projects.filter((p) => p.featured);
  const archived = projects.filter((p) => !p.featured);
  return (
    <section id="work" data-testid="selected-work-section" className="py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <SectionLabel
          num="02"
          title="PROJECT SECTION."
          sub="five products & analyses i designed, built, and measured myself — click any one for the full story: the problem, my decisions, the numbers, the code."
        />
        <div className="border-b border-black/10">
          {featured.map((p, i) => (
            <ProjectRow key={p.slug} p={p} index={i} />
          ))}
        </div>

        {archived.map((p) => {
          const V = visuals[p.visual];
          return (
            <Reveal key={p.slug}>
              <article
                data-testid={`project-card-${p.slug}`}
                className="mt-12 hairline bg-surface p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center shadow-[0_36px_70px_-40px_rgba(0,0,0,0.5)]"
              >
                <div className="md:col-span-5">
                  <span className="mono-label text-amber">FROM THE ARCHIVE — {p.year}</span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-paper mt-3 leading-tight">
                    <Link to={`/work/${p.slug}`} className="u-link hover:text-amber transition-colors duration-300">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-smoke text-sm leading-relaxed">{p.summary}</p>
                </div>
                <div className="md:col-span-3 hairline overflow-hidden max-h-44">
                  <V />
                </div>
                <div className="md:col-span-4">
                  <ProjectLinks p={p} />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default SelectedWork;
