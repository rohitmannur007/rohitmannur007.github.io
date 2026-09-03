import { Reveal, SectionLabel, ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, CONTACT } from './Shared';

const Contact = () => (
  <section id="contact" data-testid="contact-section" className="py-20 sm:py-28 hairline-t">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
      <SectionLabel num="09" title="CONTACT SECTION." sub="one email or one call is enough." />
      <Reveal delay={100}>
        <h2 data-testid="contact-section-heading" className="font-serif font-bold text-paper leading-[1.0] tracking-tight">
          <span className="block text-3xl sm:text-4xl lg:text-6xl">HAVE A DIFFICULT PROBLEM?</span>
          <span className="block text-3xl sm:text-4xl lg:text-6xl text-amber mt-2">LET'S WORK ON IT.</span>
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-10 space-y-6">
          <a
            data-testid="contact-email-link"
            href={`mailto:${CONTACT.email}`}
            className="u-link inline-flex items-center gap-3 font-serif font-medium text-xl sm:text-3xl lg:text-4xl text-paper hover:text-amber transition-colors duration-300 break-all"
          >
            <MailIcon className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
            {CONTACT.email}
          </a>
          <div>
            <a
              data-testid="contact-phone-link"
              href={CONTACT.phoneHref}
              className="u-link inline-flex items-center gap-3 font-serif font-medium text-xl sm:text-3xl lg:text-4xl text-paper hover:text-amber transition-colors duration-300"
            >
              <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
              {CONTACT.phone}
            </a>
            <p className="mono-label mt-2 ml-9 sm:ml-11">CALL OR WHATSAPP — SANGLI, IN</p>
          </div>
        </div>
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
