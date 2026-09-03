import { Reveal, ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon, CONTACT } from './Shared';

const Contact = () => (
  <section id="contact" data-testid="contact-section" className="py-32 sm:py-44 hairline-t">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
      <Reveal>
        <p className="mono-label mb-8">09 — CONTACT</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 data-testid="contact-section-heading" className="font-serif text-paper leading-[1.02] tracking-tight">
          <span className="block text-4xl sm:text-5xl lg:text-7xl">HAVE A DIFFICULT PROBLEM?</span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl text-amber mt-2">LET'S WORK ON IT.</span>
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <a
          data-testid="contact-email-link"
          href={`mailto:${CONTACT.email}`}
          className="u-link mt-14 inline-flex items-center gap-3 font-serif text-xl sm:text-3xl lg:text-4xl text-paper hover:text-amber transition-colors duration-300 break-all"
        >
          <MailIcon className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
          {CONTACT.email}
        </a>
      </Reveal>
      <Reveal delay={300}>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            data-testid="contact-linkedin-link"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-paper border border-black/20 px-6 py-3.5 hover:border-amber hover:text-amber transition-colors duration-300"
          >
            <LinkedInIcon /> LINKEDIN <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            data-testid="contact-github-link"
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-paper border border-black/20 px-6 py-3.5 hover:border-amber hover:text-amber transition-colors duration-300"
          >
            <GitHubIcon /> GITHUB <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
