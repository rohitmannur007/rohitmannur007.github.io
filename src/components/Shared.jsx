import { motion, useReducedMotion } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1];

export const scrollToId = (id, offset = -80) => {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(el, { offset, duration: 1.2 });
  else el.scrollIntoView({ behavior: 'smooth' });
};

export const Reveal = ({ children, delay = 0, className = '' }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.9, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export const SectionLabel = ({ num, title, sub }) => (
  <Reveal>
    <div className="mb-14 sm:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="mono-label text-amber">{num}</span>
        <span className="h-px w-16 bg-black/15" aria-hidden="true" />
        <span className="mono-label">THIS IS THE</span>
      </div>
      <h2 className="font-serif font-bold uppercase text-paper leading-[0.92] tracking-tight text-[11.5vw] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {sub && <p className="mt-6 font-accent italic text-xl sm:text-2xl text-smoke max-w-2xl leading-snug">{sub}</p>}
    </div>
  </Reveal>
);

export const ArrowUpRight = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowDown = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
    <path d="M12 4V20M12 20L6 14M12 20L18 14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PhoneIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
  </svg>
);

export const GitHubIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const PdfIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M6 2.5h8L19.5 8v13.5H6V2.5Z" strokeLinejoin="round" />
    <path d="M14 2.5V8h5.5" strokeLinejoin="round" />
    <path d="M9 13.5h6M9 16.5h6" strokeLinecap="round" />
  </svg>
);

export const LinkedInIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8.31h4.56V23H.22V8.31ZM8.34 8.31h4.37v2h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.06h-4.55v-7.15c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V23H8.34V8.31Z" />
  </svg>
);

export const MailIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect x="2.5" y="5" width="19" height="14" rx="1" />
    <path d="M3 6l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CONTACT = {
  name: 'ROHIT MANNUR',
  email: 'rohitmannur@gmail.com',
  phone: '888-472-8194',
  phoneHref: 'tel:+918884728194',
  linkedin: 'https://www.linkedin.com/in/rohit-mannur-851a82288/',
  github: 'https://github.com/rohitmannur007',
  resumePath: '/resume/current-resume.pdf',
};
