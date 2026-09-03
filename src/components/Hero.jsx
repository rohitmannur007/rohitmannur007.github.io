import { Reveal, ArrowUpRight, CONTACT } from './Shared';

const Hero = () => {
  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-amber" aria-hidden="true" />
                <span className="mono-label">PRODUCT MANAGER — AI · DATA · SYSTEMS</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-serif text-paper leading-[0.92] tracking-tight">
                <span className="block text-[19vw] sm:text-[15vw] lg:text-[8.5rem]">ROHIT</span>
                <span className="block mt-3 font-sans font-medium text-sm sm:text-base tracking-[0.45em] text-smoke">
                  PRODUCT MANAGER
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 font-serif text-2xl sm:text-3xl lg:text-4xl text-paper leading-snug max-w-xl">
                I turn ambiguous problems into products, systems, and evidence.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 text-smoke text-sm sm:text-base leading-relaxed max-w-lg">
                Two years shipping B2B SaaS workflows end-to-end — PRDs precise enough to build from, SQL run directly on
                production data, and AI systems designed to earn trust before they earn autonomy.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  data-testid="hero-explore-work-button"
                  onClick={scrollToWork}
                  className="font-mono text-[11px] tracking-[0.25em] bg-amber text-ink px-7 py-4 hover:bg-paper transition-colors duration-300"
                >
                  EXPLORE WORK
                </button>
                <a
                  data-testid="hero-view-resume-button"
                  href={CONTACT.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-paper border border-white/20 px-7 py-4 hover:border-amber hover:text-amber transition-colors duration-300"
                >
                  VIEW RESUME <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={250}>
              <div className="portrait-frame relative max-w-sm mx-auto lg:ml-auto">
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-amber/60" aria-hidden="true" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-amber/60" aria-hidden="true" />
                <div className="hairline overflow-hidden">
                  <img
                    data-testid="hero-editorial-portrait"
                    src="/assets/profile/rohit.jpg"
                    alt="Editorial portrait of Rohit, Product Manager"
                    className="portrait-img w-full aspect-[4/5] object-cover object-top"
                    loading="eager"
                  />
                </div>
                <p className="mono-label mt-4 text-right">ROHIT MANNUR — SANGLI, IN</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={500}>
          <div className="mt-16 lg:mt-8 flex items-center gap-4 text-faint">
            <span className="mono-label">SCROLL</span>
            <span className="h-px flex-1 max-w-[120px] bg-white/15" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.3em]">QUESTION → INVESTIGATE → BUILD → TEST → LEARN</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
