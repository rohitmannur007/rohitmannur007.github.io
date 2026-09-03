import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CONTACT, scrollToId, EASE, PhoneIcon } from './Shared';

const MaskedLine = ({ children, delay, className = '' }) => {
  const reduce = useReducedMotion();
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={reduce ? false : { y: '112%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.15, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const FadeIn = ({ children, delay, className = '' }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section data-testid="hero-section" className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 w-full">
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-2 h-2 bg-amber rotate-45" aria-hidden="true" />
            <span className="mono-label">PRODUCT MANAGER — AI · DATA · SYSTEMS</span>
          </div>
        </FadeIn>

        <h1 className="font-serif font-bold uppercase text-paper leading-[0.88] tracking-tight">
          <MaskedLine delay={0.3}>
            <span className="text-[15vw] sm:text-[11vw] xl:text-[7rem]">ROHIT</span>
          </MaskedLine>
          <MaskedLine delay={0.48}>
            <span
              className="text-[15vw] sm:text-[11vw] xl:text-[7rem]"
              style={{ color: 'transparent', WebkitTextStroke: '2px rgba(241,238,229,0.55)' }}
            >
              MANNUR
            </span>
          </MaskedLine>
        </h1>

        <div className="mt-8 font-serif font-medium text-2xl sm:text-3xl lg:text-4xl text-paper leading-[1.18] max-w-2xl">
          <MaskedLine delay={0.95}>I turn ambiguous problems</MaskedLine>
          <MaskedLine delay={1.08}>
            into <span className="font-accent italic font-normal text-amber">products, systems,</span>
          </MaskedLine>
          <MaskedLine delay={1.21}>and evidence.</MaskedLine>
        </div>

        <FadeIn delay={1.4}>
          <p className="mt-6 text-smoke text-sm sm:text-base leading-relaxed max-w-lg">
            Two years shipping B2B SaaS workflows end-to-end — PRDs precise enough to build from, SQL run directly on
            production data, and AI systems designed to earn trust before they earn autonomy.
          </p>
        </FadeIn>

        <FadeIn delay={1.55}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              data-testid="hero-explore-work-button"
              onClick={() => scrollToId('work', -64)}
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="font-mono text-[11px] tracking-[0.25em] bg-amber text-cream px-7 py-4 hover:bg-paper hover:text-ink transition-colors duration-300"
            >
              EXPLORE WORK
            </motion.button>
            <motion.a
              data-testid="hero-view-resume-button"
              href={CONTACT.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-paper border border-black/20 px-7 py-4 hover:border-amber hover:text-amber transition-colors duration-300"
            >
              VIEW RESUME <ArrowUpRight />
            </motion.a>
            <a
              data-testid="hero-phone-link"
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-smoke hover:text-amber transition-colors duration-300 px-2 py-4"
            >
              <PhoneIcon className="w-3.5 h-3.5" /> {CONTACT.phone}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={1.3} className="xl:hidden mt-10">
          <div className="portrait-frame relative max-w-[220px]">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-amber/70" aria-hidden="true" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-amber/70" aria-hidden="true" />
            <div className="hairline overflow-hidden bg-surface">
              <img
                data-testid="hero-editorial-portrait"
                src="/assets/profile/rohit.jpg"
                alt="Portrait of Rohit Mannur, Product Manager"
                className="portrait-img w-full aspect-[4/5] object-cover object-top"
                loading="eager"
              />
            </div>
            <p className="mono-label mt-3">ROHIT MANNUR — SANGLI, IN</p>
          </div>
        </FadeIn>

        <FadeIn delay={1.75}>
          <div className="mt-12 flex items-center gap-4 text-faint">
            <span className="mono-label">SCROLL</span>
            <span className="h-px flex-1 max-w-[120px] bg-black/15" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.3em]">QUESTION → INVESTIGATE → BUILD → TEST → LEARN</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
