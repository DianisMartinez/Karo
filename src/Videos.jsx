import React, { useEffect, useRef } from "react";
import MusicPlayer2 from "./MusicPlayer2";
import "./V.css";

const videos = [
  { 
    id: 1, 
    src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_4259_eazkdj.mp4", 
    descripcion: "a", 
    orientation: "vertical" 
  },    
  { 
    id: 2, 
    src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_9459_rcbcdj.mp4", 
    descripcion: "b", 
    orientation: "vertical" 
  },
  { 
    id: 4, 
    src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_3379_txbpar.mp4", 
    descripcion: "c", 
    orientation: "vertical" 
  },
  { 
    id: 5, 
    src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_0427_vsxwzf.mp4", 
    descripcion: "e", 
    orientation: "vertical" 
  },
  { id: 7,
     src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_2552_mliurl.mp4", 
     descripcion: "",
     orientation: "vertical" },
  { id: 9, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/PMM8F-7V356J_hykcip.mp4",
    descripcion: "g",
    orientation: "vertical" },
  { id: 10, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_8488_cbnoxj.mp4",
    descripcion: "5",
    orientation: "vertical" },
  { id: 11, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_4238_eyrsko.mp4", 
  descripcion: "4",
  orientation: "vertical" },
  { id: 12, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/cf9ca9a916684875aa3ae51f7b00515b_s08ets.mp4",
  descripcion: "g", 
  orientation: "vertical" },
  { id: 13, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_5013_xws8cf.mp4",
   descripcion: "b", 
   orientation: "vertical" },
  { id: 14, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_0661_gte8yj.mp4",
  descripcion: "bb",
  orientation: "vertical" },
  { id: 16, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_9206_jhpxwz.mp4",
     descripcion: "11",
     orientation: "vertical" },
];

function Videos() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5, rootMargin: "200px" }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center fw-bold">Nuestros Videos</h1>
      <p className="mt-5 mb-4 fs-5 fw-normal px-3 text-center">
        Un pedacito de todos los recuerdos contigo, Karito. Elegimos esta
        canción porque cada momento contigo se sintió como un electric love🪐
        Gracias por mostrarnos que todavía hay personas buenas en este mundo,
        <br />
        por ser tan buena amiga y estar siempre que te necesitabamos
        <br />
        Hoy te nos vas, pero tu amistad queda para siempre en nuestro corazón.
        <br />
        Buen viaje princess, te queremos mucho 🌹🦦
      </p>
      <div>
        <MusicPlayer2 />
      </div>
      <div className="row">
        {videos.map((video, index) => (
          <div key={video.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm rounded-4 overflow-hidden h-100">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-100"
                playsInline
                preload="metadata"
                muted
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                style={
                  video.orientation === "vertical"
                    ? { height: "400px", width: "auto", margin: "0 auto" }
                    : { height: "250px", width: "100%", objectFit: "cover" }
                }
              >
                <source src={video.src} type="video/mp4" />
                Tu navegador no soporta video.
              </video>
              <div className="card-body text-center">
                <p className="card-text text-muted small">
                  {video.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;