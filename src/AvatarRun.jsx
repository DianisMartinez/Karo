import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, SpotLight } from "@react-three/drei";
import confetti from "canvas-confetti";
import "./avatar.css";

function AvatarModel() {
  const { scene } = useGLTF("/avatar.glb");
  const ref = useRef();
  useFrame(() => {
    if (ref.current) ref.current.position.x += 0.02;
  });
  return <primitive ref={ref} object={scene} scale={4} position={[-6, -4, 0]} />;
}

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
      // Explosión de emojis igual que en tu App.jsx
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

      // Flash blanco + fade después de 600ms
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

      {/* ── THREE.JS ── */}
      <Canvas>
        <ambientLight intensity={0.15} />
        <SpotLight position={[3, 6, 4]}  angle={0.45} penumbra={0.8} intensity={3.5} color="#ffe0a0" castShadow />
        <SpotLight position={[-4, 4, -2]} angle={0.5}  penumbra={1}   intensity={2}   color="#a0c8ff" castShadow={false} />
        <pointLight position={[0, -2, 2]} intensity={0.6} color="#ffcc88" />
        <AvatarModel />
      </Canvas>
    </div>
  );
}

export default AvatarRun;