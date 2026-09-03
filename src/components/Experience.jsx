import { experience } from '../data/experience';
import { Reveal, SectionLabel } from './Shared';

const Experience = () => (
  <section id="experience" data-testid="experience-section" className="py-16 sm:py-20 hairline-t">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
      <SectionLabel num="05" title="EXPERIENCE SECTION." sub="where i've worked and what i owned." />
      <div data-testid="experience-timeline" className="relative max-w-4xl">
        <span className="absolute left-[5px] top-3 bottom-3 w-px bg-black/10" aria-hidden="true" />
        {experience.map((item, i) => (
          <Reveal key={item.id}>
            <div data-testid={`experience-role-${i + 1}`} className="relative pl-8 sm:pl-12 pb-10 last:pb-0">
              <span className="absolute left-0 top-2.5 w-3 h-3 bg-amber border border-amber" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-paper">{item.company}</h3>
                <span className="font-mono text-[11px] tracking-[0.15em] text-faint">{item.dates}</span>
              </div>
              <p className="mt-1.5 font-mono text-[11px] tracking-[0.2em] text-amber">{item.role.toUpperCase()}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
