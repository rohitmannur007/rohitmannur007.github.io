import { useState } from 'react';
import { experience } from '../data/experience';
import { Reveal, SectionLabel } from './Shared';

const ExperienceItem = ({ item, open, onToggle, index }) => (
  <Reveal>
    <div data-testid={`experience-role-${index + 1}`} className="relative pl-8 sm:pl-12 pb-14 last:pb-0">
      <span
        className={`absolute left-0 top-2 w-3 h-3 border ${open ? 'bg-amber border-amber' : 'bg-ink border-black/25'} transition-colors duration-300`}
        aria-hidden="true"
      />
      <button
        data-testid={`experience-toggle-${item.id}`}
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left group"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-serif text-2xl sm:text-3xl text-paper group-hover:text-amber transition-colors duration-300">
            {item.company}
          </h3>
          <span className="font-mono text-[11px] tracking-[0.15em] text-faint">{item.dates}</span>
        </div>
        <div className="mt-1 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-mono text-[11px] tracking-[0.2em] text-amber">{item.role.toUpperCase()}</span>
          <span className="font-mono text-[11px] tracking-[0.15em] text-faint">{item.location.toUpperCase()}</span>
        </div>
        <p className="mt-3 text-smoke text-sm leading-relaxed max-w-3xl">{item.short}</p>
        <span className="mt-3 inline-block font-mono text-[10px] tracking-[0.25em] text-faint group-hover:text-paper transition-colors duration-300">
          {open ? '— COLLAPSE' : '+ EXPAND SCOPE'}
        </span>
      </button>

      {open && (
        <div className="mt-6 hairline bg-surface p-6 sm:p-8">
          <p className="mono-label mb-5">{item.areas}</p>
          <ul className="space-y-4">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-smoke text-sm leading-relaxed">
                <span className="mt-2 w-4 h-px bg-amber shrink-0" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.skills.map((s) => (
              <span key={s} className="font-mono text-[10px] tracking-[0.12em] text-smoke border border-black/10 px-3 py-1.5">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </Reveal>
);

const Experience = () => {
  const [openId, setOpenId] = useState(experience[0].id);
  return (
    <section id="experience" data-testid="experience-section" className="py-28 sm:py-36 hairline-t">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <SectionLabel num="05" title="EXPERIENCE" sub="Where I have worked, what I owned, and the numbers behind it — click a role to open the full scope." />
        <div data-testid="experience-timeline" className="relative max-w-4xl">
          <span className="absolute left-[5px] top-3 bottom-3 w-px bg-black/10" aria-hidden="true" />
          {experience.map((item, i) => (
            <ExperienceItem
              key={item.id}
              item={item}
              index={i}
              open={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
