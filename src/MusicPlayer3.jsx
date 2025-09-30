import { useState, useEffect, useRef } from "react";
import "./bottom.css";

function MusicPlayer3() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      // Cargar el audio silenciado al inicio
      audioRef.current.muted = true;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // autoplay bloqueado hasta que el usuario haga clic
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.muted = false; // activar sonido
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="toggle-cont">
      {/* Audio */}
      <audio ref={audioRef} id="song" src="/song3.mp3" loop preload="auto" />

      {/* Botón con acción */}
      <div className="d3warpper">
        <div className="cover">
          <button className="button" onClick={togglePlay}>
            {playing ? "⏸" : "㉿"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer3;