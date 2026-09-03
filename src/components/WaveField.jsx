import { useEffect, useRef } from 'react';

const WaveField = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf;
    let w = 0;
    let h = 0;

    // mouse state (smoothed) + ripple amplitude with idle decay
    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let amp = 0;
    let lastMove = 0;

    const onMove = (x, y) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = x - r.left;
      mouse.y = y - r.top;
      lastMove = performance.now();
    };
    const onMouseMove = (e) => onMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const COLS = 30;
    const ROWS = 16;
    const SP = 95;
    const F = 720;

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);

      // ease the ripple in when the mouse moves, out when idle
      const idle = performance.now() - lastMove > 1600;
      amp += ((idle ? 0 : 1) - amp) * 0.05;
      if (smooth.x < -5000) {
        smooth.x = mouse.x;
        smooth.y = mouse.y;
      }
      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      const rotY = Math.sin(t * 0.00012) * 0.4;
      const cosR = Math.cos(rotY);
      const sinR = Math.sin(rotY);
      const cx = w / 2;
      const cy = h * 0.58;
      const pts = [];
      for (let r = 0; r < ROWS; r++) {
        pts[r] = [];
        for (let c = 0; c < COLS; c++) {
          const x = (c - COLS / 2) * SP;
          const z = (r - ROWS / 2) * SP;
          const y = Math.sin(x * 0.012 + t * 0.0011) * 26 + Math.cos(z * 0.014 + t * 0.0009) * 22;
          const xr = x * cosR - z * sinR;
          const zr = x * sinR + z * cosR + 500;
          const s = Math.max(0.06, Math.min(1.6, F / (F + zr)));
          const px = cx + xr * s;
          let py = cy + (y * 2.2 - (zr - 500) * 0.38) * s;

          // mouse ripple — radial wave around the cursor
          if (amp > 0.01) {
            const dx = px - smooth.x;
            const dy = py - smooth.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            py += amp * Math.exp(-(d * d) / (2 * 170 * 170)) * Math.cos(d * 0.032 - t * 0.005) * 30;
          }

          pts[r][c] = [px, py, s];
        }
      }
      ctx.lineWidth = 1;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const [px, py, s] = pts[r][c];
          // points near the cursor glow slightly stronger
          const dx = px - smooth.x;
          const dy = py - smooth.y;
          const near = amp > 0.01 ? Math.exp(-(dx * dx + dy * dy) / (2 * 200 * 200)) * amp : 0;
          if (c < COLS - 1) {
            const [qx, qy] = pts[r][c + 1];
            ctx.strokeStyle = `rgba(241,238,229,${0.04 + s * 0.05 + near * 0.12})`;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(qx, qy);
            ctx.stroke();
          }
          if (r < ROWS - 1) {
            const [qx, qy] = pts[r + 1][c];
            ctx.strokeStyle = `rgba(241,238,229,${0.03 + s * 0.04 + near * 0.1})`;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(qx, qy);
            ctx.stroke();
          }
          if ((r * COLS + c) % 37 === 0) {
            ctx.fillStyle = `rgba(240,96,38,${0.25 + s * 0.25 + near * 0.4})`;
            ctx.beginPath();
            ctx.arc(px, py, 2.2 * s + 0.5 + near * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    if (reduce) {
      draw(4000);
      return () => window.removeEventListener('resize', resize);
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    let running = true;
    const loop = (t) => {
      if (running && !document.hidden) draw(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      data-testid="wave-field"
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default WaveField;
