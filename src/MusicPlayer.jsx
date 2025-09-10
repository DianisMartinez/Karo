import { useState, useEffect, useRef } from "react";

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // autoplay started muted
        }).catch(() => {
          // autoplay blocked
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.muted = false;
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
    <audio ref={audioRef} id="song" src="/song.mp3" loop>
        </audio>
      <button className="music-btn" onClick={togglePlay}>
        {playing ? "⏸" : "▶︎"}
      </button>
    </div>
  );
}

export default MusicPlayer;