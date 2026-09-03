const WORDS = ['QUESTION', 'INVESTIGATE', 'BUILD', 'TEST', 'LEARN'];

const Strip = ({ hidden }) => (
  <div className="flex items-center shrink-0" aria-hidden={hidden || undefined}>
    {WORDS.map((w) => (
      <span key={w + (hidden ? '-b' : '-a')} className="flex items-center shrink-0">
        <span className="font-accent italic text-2xl sm:text-4xl lg:text-5xl text-paper/85 px-6 sm:px-10">{w}</span>
        <span className="w-2 h-2 bg-amber rotate-45 shrink-0" />
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div data-testid="editorial-marquee" className="hairline-t border-b border-black/8 py-6 sm:py-8 overflow-hidden" aria-label="Question, investigate, build, test, learn">
    <div className="marquee-track flex w-max will-change-transform">
      <Strip />
      <Strip hidden />
    </div>
  </div>
);

export default Marquee;
