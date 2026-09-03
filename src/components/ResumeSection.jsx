import { useEffect, useRef, useState } from 'react';
import { Reveal, SectionLabel, ArrowUpRight, ArrowDown, PdfIcon, CONTACT } from './Shared';

const API = process.env.REACT_APP_BACKEND_URL;

const UploadIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M12 20V8M12 8L6 14M12 8l6 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 4h16" strokeLinecap="round" />
  </svg>
);

const ResumeSection = () => {
  const [href, setHref] = useState(CONTACT.resumePath);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [pin, setPin] = useState(() => localStorage.getItem('resume-update-pin') || '');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API}/api/resume/info`)
      .then((r) => (r.ok ? r.json() : null))
      .then((info) => {
        if (cancelled || !info) return;
        if (info.hasUpload) {
          setHref(`${API}/api/resume/file`);
          setLastUpdated(info.updated);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const onPickFile = (e) => {
    const f = e.target.files && e.target.files[0];
    setMessage('');
    setStatus('idle');
    if (!f) return;
    if (!f.name.toLowerCase().endsWith('.pdf')) {
      setFile(null);
      setStatus('error');
      setMessage('That file is not a PDF. Choose your resume exported as a .pdf file.');
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setFile(null);
      setStatus('error');
      setMessage('That PDF is over 10 MB. Export a lighter version and try again.');
      return;
    }
    setFile(f);
  };

  const publish = async () => {
    if (!file) {
      setStatus('error');
      setMessage('Choose a PDF from this device first.');
      return;
    }
    if (!pin.trim()) {
      setStatus('error');
      setMessage('Enter your update PIN.');
      return;
    }
    setStatus('publishing');
    setMessage('Uploading your new resume…');
    const form = new FormData();
    form.append('file', file);
    form.append('pin', pin.trim());
    try {
      const res = await fetch(`${API}/api/resume`, { method: 'POST', body: form });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('resume-update-pin', pin.trim());
        setHref(`${API}/api/resume/file?v=${Date.now()}`);
        setLastUpdated(data.updated);
        setStatus('success');
        setMessage('Resume updated — it is live on this site right now. VIEW RESUME above opens your new file.');
        return;
      }
      if (res.status === 401) {
        setStatus('error');
        setMessage('Wrong PIN. Try again.');
        return;
      }
      const err = await res.json().catch(() => null);
      setStatus('error');
      setMessage(err?.detail || 'Upload failed. Try again.');
    } catch {
      const localUrl = URL.createObjectURL(file);
      setHref(localUrl);
      setStatus('local');
      setMessage(
        'LOCAL PREVIEW — this device now shows your new resume, but the public site is static. To make it public everywhere: replace public/resume/current-resume.pdf in the GitHub repository (same filename), commit, and push.'
      );
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setFile(null);
    setStatus('idle');
    setMessage('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="resume" data-testid="resume-section" className="py-28 sm:py-36 hairline-t">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <SectionLabel num="08" title="RESUME" />
        <div className="max-w-3xl">
          <Reveal>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-paper leading-tight">
              One page. The full record.
            </h3>
            <p className="mt-5 text-smoke text-sm sm:text-base leading-relaxed">
              Current role, the case studies, education, and certifications — always the latest version, updatable straight
              from any device.
            </p>
            {lastUpdated && (
              <p data-testid="resume-last-updated" className="mt-3 font-mono text-[10px] tracking-[0.2em] text-faint">
                LAST UPDATED — {new Date(lastUpdated).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase()}
              </p>
            )}
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                data-testid="resume-view-button"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] bg-amber text-ink px-7 py-4 hover:bg-paper transition-colors duration-300"
              >
                <PdfIcon /> VIEW RESUME <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                data-testid="resume-download-button"
                href={href}
                download="Rohit-Mannur-Resume.pdf"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-paper border border-white/20 px-7 py-4 hover:border-amber hover:text-amber transition-colors duration-300"
              >
                DOWNLOAD PDF <ArrowDown />
              </a>
              <button
                data-testid="resume-update-button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-paper border border-amber/50 px-7 py-4 hover:bg-amber hover:text-ink transition-colors duration-300"
              >
                <UploadIcon /> UPDATE RESUME
              </button>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <details data-testid="resume-update-help-modal" className="resume-help mt-10 hairline bg-surface p-6">
              <summary className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.25em] text-smoke">OTHER WAY TO UPDATE — GITHUB PAGES</span>
                <span className="help-caret font-mono text-amber text-lg leading-none" aria-hidden="true">+</span>
              </summary>
              <ol className="mt-5 space-y-3 text-smoke text-sm leading-relaxed list-none">
                <li className="flex gap-3"><span className="font-mono text-amber text-xs mt-0.5">1.</span>Replace <code className="font-mono text-paper text-xs">public/resume/current-resume.pdf</code> in the repository with your new resume PDF — keep the filename exactly the same.</li>
                <li className="flex gap-3"><span className="font-mono text-amber text-xs mt-0.5">2.</span>Commit the change and push to <code className="font-mono text-paper text-xs">main</code>.</li>
                <li className="flex gap-3"><span className="font-mono text-amber text-xs mt-0.5">3.</span>GitHub Actions rebuilds and redeploys the site automatically — the new resume goes live everywhere.</li>
              </ol>
              <p className="mt-5 pt-4 border-t border-white/8 font-mono text-[10px] tracking-[0.15em] text-faint leading-relaxed">
                THE UPDATE BUTTON ABOVE WORKS INSTANTLY ON THIS HOSTED SITE. THE GITHUB METHOD IS FOR THE PERMANENT STATIC COPY.
              </p>
            </details>
          </Reveal>
        </div>
      </div>

      {modalOpen && (
        <div
          data-testid="resume-update-modal"
          className="fixed inset-0 z-[90] flex items-center justify-center px-5 bg-ink/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Update resume"
        >
          <div className="hairline bg-surface w-full max-w-md p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <p className="font-mono text-[11px] tracking-[0.25em] text-amber">UPDATE RESUME</p>
              <button data-testid="resume-update-close" onClick={closeModal} className="p-1 text-smoke hover:text-paper" aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <button
              data-testid="resume-file-pick-button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full border border-dashed border-white/25 hover:border-amber transition-colors duration-300 px-5 py-8 text-center"
            >
              <UploadIcon className="w-5 h-5 mx-auto text-amber" />
              <span className="block mt-3 font-mono text-[11px] tracking-[0.2em] text-paper">
                {file ? file.name : 'CHOOSE PDF FROM THIS DEVICE'}
              </span>
              {file && (
                <span className="block mt-1 font-mono text-[10px] tracking-[0.15em] text-faint">
                  {(file.size / 1024).toFixed(0)} KB — READY
                </span>
              )}
            </button>
            <input
              ref={fileInputRef}
              data-testid="resume-file-input"
              type="file"
              accept="application/pdf,.pdf"
              className="hidden"
              onChange={onPickFile}
            />

            <label htmlFor="resume-pin" className="block mt-6 mb-2 font-mono text-[10px] tracking-[0.25em] text-faint">
              YOUR UPDATE PIN
            </label>
            <input
              id="resume-pin"
              data-testid="resume-pin-input"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••••••"
              autoComplete="off"
              className="w-full bg-ink border border-white/15 focus:border-amber px-4 py-3 font-mono text-sm text-paper placeholder:text-faint outline-none transition-colors duration-300"
            />

            <button
              data-testid="resume-publish-button"
              onClick={publish}
              disabled={status === 'publishing'}
              className="mt-6 w-full font-mono text-[11px] tracking-[0.25em] bg-amber text-ink px-6 py-4 hover:bg-paper transition-colors duration-300 disabled:opacity-50"
            >
              {status === 'publishing' ? 'UPDATING…' : 'PUBLISH UPDATE'}
            </button>

            {message && (
              <p
                data-testid="resume-update-status"
                className={`mt-5 text-sm leading-relaxed ${
                  status === 'success' ? 'text-emerald-400' : status === 'error' ? 'text-red-400' : status === 'local' ? 'text-amber' : 'text-smoke'
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeSection;
