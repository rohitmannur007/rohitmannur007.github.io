import { GitHubIcon, LinkedInIcon, CONTACT, scrollToId } from './Shared';

const RAIL_LINKS = [
  { id: 'work', label: 'PROJECTS' },
  { id: 'research', label: 'RESEARCH' },
  { id: 'lab', label: 'LAB & OPEN SOURCE' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'resume', label: 'RESUME' },
  { id: 'contact', label: 'CONTACT' },
];

const SideRail = () => (
  <aside
    data-testid="side-rail"
    className="hidden xl:flex fixed left-0 top-0 h-screen w-[380px] flex-col justify-between border-r border-black/10 bg-ink/75 backdrop-blur-md p-10 z-40"
  >
    <div>
      <div className="hairline w-28 overflow-hidden mb-8 bg-surface">
        <img
          src="/assets/profile/rohit.jpg"
          alt="Portrait of Rohit Mannur"
          className="w-full aspect-[4/5] object-cover object-top grayscale-[25%]"
        />
      </div>
      <p className="font-serif font-bold text-[2.6rem] text-paper leading-[0.92] tracking-tight">
        ROHIT
        <br />
        MANNUR<span className="text-amber">.</span>
      </p>
      <p className="mono-label mt-4">PRODUCT MANAGER</p>
      <p className="font-accent italic text-lg text-smoke mt-4 leading-snug">
        AI · Data · Systems — ambiguous problems in, products and evidence out.
      </p>
    </div>

    <nav className="flex flex-col gap-1" aria-label="Sections">
      {RAIL_LINKS.map((l, i) => (
        <button
          key={l.id}
          data-testid={`rail-link-${l.id}`}
          onClick={() => scrollToId(l.id, -40)}
          className="group flex items-baseline gap-4 py-1.5 text-left"
        >
          <span className="font-mono text-[10px] text-faint tracking-[0.2em]">{String(i + 1).padStart(2, '0')}</span>
          <span className="font-serif font-medium text-xl text-paper group-hover:text-amber group-hover:translate-x-2 transition-all duration-300">
            {l.label}
          </span>
        </button>
      ))}
    </nav>

    <div>
      <a
        data-testid="rail-phone-link"
        href={CONTACT.phoneHref}
        className="block font-mono text-[12px] tracking-[0.18em] text-paper hover:text-amber transition-colors duration-300"
      >
        {CONTACT.phone}
      </a>
      <a
        data-testid="rail-email-link"
        href={`mailto:${CONTACT.email}`}
        className="block mt-2 font-mono text-[11px] tracking-[0.12em] text-smoke hover:text-amber transition-colors duration-300"
      >
        {CONTACT.email}
      </a>
      <div className="flex items-center gap-4 mt-5">
        <a data-testid="rail-github-link" href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-smoke hover:text-amber transition-colors duration-300">
          <GitHubIcon className="w-4 h-4" />
        </a>
        <a data-testid="rail-linkedin-link" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-smoke hover:text-amber transition-colors duration-300">
          <LinkedInIcon className="w-4 h-4" />
        </a>
        <span className="h-px flex-1 bg-black/10" aria-hidden="true" />
        <span className="font-mono text-[9px] tracking-[0.25em] text-faint">SANGLI, IN</span>
      </div>
    </div>
  </aside>
);

export default SideRail;
