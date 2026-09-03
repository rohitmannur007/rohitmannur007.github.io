const Atmosphere = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <div
      className="atmo-blob atmo-1 -top-[12%] -left-[12%] w-[58vw] h-[58vw]"
      style={{ background: 'radial-gradient(circle, rgba(232,85,30,0.20), transparent 65%)' }}
    />
    <div
      className="atmo-blob atmo-2 top-[20%] -right-[15%] w-[52vw] h-[52vw]"
      style={{ background: 'radial-gradient(circle, rgba(240,178,122,0.13), transparent 65%)' }}
    />
    <div
      className="atmo-blob atmo-3 -bottom-[18%] left-[18%] w-[46vw] h-[46vw]"
      style={{ background: 'radial-gradient(circle, rgba(127,166,201,0.18), transparent 65%)' }}
    />
  </div>
);

export default Atmosphere;
