import { useEffect, useState } from 'react';

const STAGES = ['QUESTION', 'INVESTIGATE', 'BUILD', 'TEST', 'LEARN'];

const ProcessRail = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      setActive(Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside
      data-testid="process-rail"
      className="hidden xl:flex fixed left-7 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-0"
      aria-label="Process indicator"
    >
      {STAGES.map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <span
              className={`stage-dot block w-1.5 h-1.5 rounded-full ${
                i === active ? 'bg-amber scale-125' : i < active ? 'bg-smoke' : 'bg-black/15'
              }`}
            />
            {i < STAGES.length - 1 && <span className={`block w-px h-8 ${i < active ? 'bg-smoke/50' : 'bg-black/10'}`} />}
          </div>
          <span
            className={`font-mono text-[9px] tracking-[0.3em] transition-colors duration-500 ${
              i === active ? 'text-amber' : 'text-faint'
            }`}
          >
            {s}
          </span>
        </div>
      ))}
    </aside>
  );
};

export default ProcessRail;
