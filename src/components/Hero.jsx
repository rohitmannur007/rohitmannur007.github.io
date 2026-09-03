import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';
import { ArrowUpRight, CONTACT, scrollToId, EASE } from './Shared';

const MaskedLine = ({ children, delay, className = '', as: Tag = 'span' }) => {
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
  const frameRef = useRef(null);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 900], [0, 90]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 120, damping: 18 });
  const spotX = useMotionValue(240);
  const spotY = useMotionValue(200);
  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${spotX}px ${spotY}px, rgba(226,135,67,0.30), transparent 70%)`;

  const onMove = (e) => {
    if (reduce || !frameRef.current) return;
    const r = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px);
    my.set(py);
    spotX.set(e.clientX - r.left);
    spotY.set(e.clientY - r.top);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-amber" aria-hidden="true" />
                <span className="mono-label">PRODUCT MANAGER — AI · DATA · SYSTEMS</span>
              </div>
            </FadeIn>

            <h1 className="font-serif text-paper leading-[0.9] tracking-tight">
              <MaskedLine delay={0.3}>
                <span className="text-[20vw] sm:text-[16vw] lg:text-[9.5rem]">ROHIT</span>
              </MaskedLine>
              <MaskedLine delay={0.68} className="mt-4">
                <span className="font-sans font-medium text-sm sm:text-base tracking-[0.45em] text-smoke">
                  PRODUCT MANAGER
                </span>
              </MaskedLine>
            </h1>

            <div className="mt-10 font-serif text-2xl sm:text-3xl lg:text-[2.6rem] text-paper leading-[1.18] max-w-2xl">
              <MaskedLine delay={0.95}>I turn ambiguous problems</MaskedLine>
              <MaskedLine delay={1.08}>
                into <span className="italic text-amber">products, systems,</span>
              </MaskedLine>
              <MaskedLine delay={1.21}>and evidence.</MaskedLine>
            </div>

            <FadeIn delay={1.4}>
              <p className="mt-7 text-smoke text-sm sm:text-base leading-relaxed max-w-lg">
                Two years shipping B2B SaaS workflows end-to-end — PRDs precise enough to build from, SQL run directly on
                production data, and AI systems designed to earn trust before they earn autonomy.
              </p>
            </FadeIn>

            <FadeIn delay={1.55}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <motion.button
                  data-testid="hero-explore-work-button"
                  onClick={() => scrollToId('work', -64)}
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  whileTap={reduce ? undefined : { scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  className="font-mono text-[11px] tracking-[0.25em] bg-amber text-ink px-7 py-4 hover:bg-paper transition-colors duration-300"
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
                  className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-paper border border-white/20 px-7 py-4 hover:border-amber hover:text-amber transition-colors duration-300"
                >
                  VIEW RESUME <ArrowUpRight />
                </motion.a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5" style={{ perspective: 1200 }}>
            <motion.div
              initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.25, delay: 0.55, ease: EASE }}
              className="max-w-sm mx-auto lg:ml-auto"
            >
              <motion.div
                ref={frameRef}
                data-testid="hero-portrait-frame"
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="portrait-frame relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-amber/60 z-10" aria-hidden="true" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-amber/60 z-10" aria-hidden="true" />
                <div className="hairline overflow-hidden relative">
                  <motion.img
                    data-testid="hero-editorial-portrait"
                    src="/assets/profile/rohit.jpg"
                    alt="Editorial portrait of Rohit, Product Manager"
                    className="portrait-img w-full aspect-[4/5] object-cover object-top"
                    style={reduce ? undefined : { y: parallaxY, scale: 1.12 }}
                    loading="eager"
                  />
                  {!reduce && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                      style={{ background: spotlight }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="mono-label mt-4 text-right">ROHIT MANNUR — SANGLI, IN</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <FadeIn delay={1.75}>
          <div className="mt-16 lg:mt-8 flex items-center gap-4 text-faint">
            <span className="mono-label">SCROLL</span>
            <span className="h-px flex-1 max-w-[120px] bg-white/15" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.3em]">QUESTION → INVESTIGATE → BUILD → TEST → LEARN</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
