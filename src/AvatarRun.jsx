import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "./avatar.css";

function AvatarRun({ onFinish }) {
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const DURATION = 11000;

  // Barra de progreso
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const p = Math.min(((Date.now() - start) / DURATION) * 100, 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  // Texto aparece a los 2s
  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Explosión final + fade
  useEffect(() => {
    const t = setTimeout(() => {
      const heart  = confetti.shapeFromText({ text: "🫶🏽", scalar: 3 });
      const otter  = confetti.shapeFromText({ text: "🦦",   scalar: 3 });
      const star   = confetti.shapeFromText({ text: "✨",   scalar: 3 });
      const fairy  = confetti.shapeFromText({ text: "🧚🏻‍♀️", scalar: 3 });
      const log    = confetti.shapeFromText({ text: "🪵",   scalar: 3 });
      const camp   = confetti.shapeFromText({ text: "🏕️",   scalar: 3 });
      const bubble = confetti.shapeFromText({ text: "🫧",   scalar: 3 });

      confetti({
        shapes: [heart, otter, star, fairy, log, camp, bubble],
        particleCount: 300,
        spread: 300,
        origin: { y: 0.5 },
        gravity: 0.9,
        ticks: 400,
        scalar: 9,
      });

      setTimeout(() => {
        setFading(true);
        setTimeout(onFinish, 900);
      }, 600);
    }, DURATION);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className={`avatar-screen${fading ? " av-exit" : ""}`}>

      {/* ── TEXTO CENTRAL ── */}
      <div className={`av-welcome${showText ? " av-welcome--show" : ""}`}>
        <p className="av-sub">cargando algo especial para ti</p>
        <h1 className="av-title">Bienvenida<br />My Shayla</h1>
      </div>

      {/* ── AVATAR ANIMADO (rotate — css-animations repo) ── */}
      <div className="av-loading">
        <img src="/x.png" alt="avatar" className="av-loading-img" />
      </div>

      {/* ── BARRA DE PROGRESO ── */}
      <div className="av-bar-wrap">
        <div className="av-bar-track">
          <div className="av-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <button className="av-skip" onClick={() => {
          confetti({ particleCount: 80, spread: 120, origin: { y: 0.6 } });
          setTimeout(() => { setFading(true); setTimeout(onFinish, 900); }, 300);
        }}>
          saltar ✕
        </button>
      </div>
    </div>
  );
}

export default AvatarRun;
