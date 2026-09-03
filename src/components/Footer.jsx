import { GitHubIcon, LinkedInIcon, MailIcon, CONTACT } from './Shared';

const Footer = () => (
  <footer data-testid="footer-minimal" className="hairline-t py-10">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div>
        <p className="font-serif text-paper">ROHIT<span className="text-amber">.</span></p>
        <p className="mono-label mt-1">PRODUCT MANAGER — AI · DATA · SYSTEMS</p>
      </div>
      <div className="flex items-center gap-6">
        <a data-testid="footer-github-link" href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-smoke hover:text-amber transition-colors duration-300">
          <GitHubIcon className="w-4.5 h-4.5 w-5 h-5" />
        </a>
        <a data-testid="footer-linkedin-link" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-smoke hover:text-amber transition-colors duration-300">
          <LinkedInIcon className="w-5 h-5" />
        </a>
        <a data-testid="footer-email-link" href={`mailto:${CONTACT.email}`} aria-label="Email" className="text-smoke hover:text-amber transition-colors duration-300">
          <MailIcon className="w-5 h-5" />
        </a>
      </div>
      <p className="font-mono text-[10px] tracking-[0.2em] text-faint">© 2026 ROHIT — BUILT STATIC, SERVED EVERYWHERE</p>
    </div>
  </footer>
);

export default Footer;
