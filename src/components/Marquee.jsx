const WORDS = ['QUESTION', 'INVESTIGATE', 'BUILD', 'TEST', 'LEARN'];

const Strip = ({ hidden }) => (
  <div className="flex items-center shrink-0" aria-hidden={hidden || undefined}>
    {WORDS.map((w) => (
      <span key={w + (hidden ? '-b' : '-a')} className="flex items-center shrink-0">
        <span className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-paper/85 px-8 sm:px-12">{w}</span>
        <span className="w-2 h-2 bg-amber rotate-45 shrink-0" />
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div data-testid="editorial-marquee" className="hairline-t border-b border-white/8 py-8 sm:py-10 overflow-hidden" aria-label="Question, investigate, build, test, learn">
    <div className="marquee-track flex w-max will-change-transform">
      <Strip />
      <Strip hidden />
    </div>
  </div>
);

export default Marquee;
