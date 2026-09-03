import { Link } from 'react-router-dom';

const NotFound = () => (
  <main data-testid="not-found-page" className="min-h-screen flex items-center justify-center px-5">
    <div className="text-center max-w-lg">
      <p className="mono-label text-amber mb-6">404 — OFF THE MAP</p>
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-paper leading-tight">
        This page isn't part of the system.
      </h1>
      <p className="mt-6 text-smoke text-sm leading-relaxed">
        The route you asked for doesn't exist. The work, the research, and the resume are all back at the index.
      </p>
      <Link
        data-testid="back-to-rohit-button"
        to="/"
        className="mt-10 inline-block font-mono text-[11px] tracking-[0.25em] bg-amber text-ink px-8 py-4 hover:bg-paper transition-colors duration-300"
      >
        BACK TO ROHIT
      </Link>
    </div>
  </main>
);

export default NotFound;
