import { education, certifications } from '../data/experience';
import { Reveal, SectionLabel } from './Shared';

const Education = () => (
  <section id="education" data-testid="education-certifications-section" className="py-24 sm:py-28 hairline-t">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
      <SectionLabel num="07" title="EDUCATION SECTION." sub="quiet on purpose — the work above does the talking." />
      <div className="grid md:grid-cols-2 gap-12">
        <Reveal>
          <div>
            <p className="mono-label mb-4">EDUCATION</p>
            <h3 className="font-serif text-xl sm:text-2xl text-paper leading-snug">{education.institution}</h3>
            <p className="mt-2 text-smoke text-sm">{education.degree}</p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-faint">{education.dates}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <p className="mono-label mb-4">CERTIFICATIONS</p>
            <ul className="divide-y divide-black/8 border-t border-b border-black/8">
              {certifications.map((c) => (
                <li key={c.name} className="py-3.5 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-paper text-sm">{c.name}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-faint">{c.issuer.toUpperCase()}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Education;
