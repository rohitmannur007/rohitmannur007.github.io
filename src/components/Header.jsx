import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToId, CONTACT } from './Shared';

const NAV = [
  { id: 'work', label: 'WORK', testId: 'nav-link-work' },
  { id: 'research', label: 'RESEARCH', testId: 'nav-link-research' },
  { id: 'lab', label: 'LAB', testId: 'nav-link-lab' },
  { id: 'experience', label: 'EXPERIENCE', testId: 'nav-link-experience' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const lenis = window.__lenis;
    if (lenis) {
      if (open) lenis.stop();
      else lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const go = (id) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      scrollToId(id, -64);
    }
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        data-testid="main-navigation-bar"
        className={`${isHome ? 'xl:hidden' : ''} fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-black/10' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button
            data-testid="nav-brand"
            onClick={goHome}
            className="font-serif font-bold text-lg tracking-tight text-paper hover:text-amber transition-colors duration-300"
            aria-label="ROHIT MANNUR — back to top"
          >
            ROHIT MANNUR<span className="text-amber">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV.map((n) => (
              <button
                key={n.id}
                data-testid={n.testId}
                onClick={() => go(n.id)}
                className="u-link font-mono text-[11px] tracking-[0.25em] text-smoke hover:text-paper transition-colors duration-300"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-link-resume"
              onClick={() => go('resume')}
              className="hidden sm:inline-block font-mono text-[11px] tracking-[0.25em] text-paper border border-black/20 px-4 py-2 hover:bg-amber hover:text-cream hover:border-amber transition-colors duration-300"
            >
              RESUME
            </button>
            <button
              data-testid="mobile-menu-trigger"
              className="md:hidden p-2 text-paper"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div data-testid="mobile-menu" className="fixed inset-0 z-[70] bg-ink flex flex-col md:hidden">
          <div className="h-16 px-5 flex items-center justify-between border-b border-black/10">
            <span className="font-serif font-bold text-lg text-paper">ROHIT MANNUR<span className="text-amber">.</span></span>
            <button data-testid="mobile-menu-close" onClick={() => setOpen(false)} className="p-2 text-paper" aria-label="Close menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobile">
            {NAV.map((n, i) => (
              <button
                key={n.id}
                data-testid={'mobile-' + n.testId}
                onClick={() => go(n.id)}
                className="text-left py-4 border-b border-black/8 group"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-faint mr-4">0{i + 1}</span>
                <span className="font-serif font-bold text-3xl text-paper group-hover:text-amber transition-colors duration-300">{n.label}</span>
              </button>
            ))}
            <button data-testid="mobile-nav-link-resume" onClick={() => go('resume')} className="text-left py-4 border-b border-black/8 group">
              <span className="font-mono text-[10px] tracking-[0.3em] text-faint mr-4">05</span>
              <span className="font-serif font-bold text-3xl text-paper group-hover:text-amber transition-colors duration-300">RESUME</span>
            </button>
            <button data-testid="mobile-nav-link-contact" onClick={() => go('contact')} className="text-left py-4 group">
              <span className="font-mono text-[10px] tracking-[0.3em] text-faint mr-4">06</span>
              <span className="font-serif font-bold text-3xl text-paper group-hover:text-amber transition-colors duration-300">CONTACT</span>
            </button>
          </nav>
          <div className="px-8 pb-10 space-y-2">
            <a data-testid="mobile-menu-phone" href={CONTACT.phoneHref} className="block font-mono text-xs tracking-widest text-paper">
              {CONTACT.phone}
            </a>
            <a data-testid="mobile-menu-email" href={`mailto:${CONTACT.email}`} className="block font-mono text-xs tracking-widest text-smoke">
              {CONTACT.email.toUpperCase()}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
