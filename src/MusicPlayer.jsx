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
    <div className="toggle-cont">
    <input className="toggle-input" id="toggle" name="toggle" type="checkbox" onChange={togglePlay} />
    <label className="toggle-label" htmlFor="toggle">
      <div className="cont-label-play">
        <span className="label-play"></span>
       
      </div>
    </label>
    <audio ref={audioRef} src="/song.mp3" />
  </div>
  );
}

export default MusicPlayer;