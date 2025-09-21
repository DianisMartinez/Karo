import React, { useEffect, useRef } from "react";
import MusicPlayer2 from "./MusicPlayer2";
import "./V.css";

const videos = [
  { id: 1, src: "https://res.cloudinary.com/dwmw7ftnu/image/upload/v17258494786/D94CDFB9-E101-4FAA-B240-8BE702A5EF69_1_105_c_u6dhjl.jpg", descripcion: "Un momento especial compartido juntos.", orientation: "vertical" },
  { id: 2, src: "/video2.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical"  },
  { id: 4, src: "/video4.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical"  },
  { id: 5, src: "/video5.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical"  },
  { id: 6,  src: "/video6.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical" },
  { id: 7, src: "/video7.mp4", descripcion: "Otro gran recuerdo para no olvidar." , orientation: "vertical" },
  { id: 8,  src: "/video8.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical" },
  { id: 9,  src: "/video9.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical" },
  { id: 10, src: "/video10.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical" },
  { id: 11, src: "/video11.mp4", descripcion: "Otro gran recuerdo para no olvidar." , orientation: "vertical"},
  { id: 12,  src: "/video12.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical" },
  { id: 13, src: "/video13.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical" },
  { id: 14,  src: "/video14.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical"  },
  { id: 15, src: "/video15.mp4", descripcion: "Otro gran recuerdo para no olvidar.", orientation: "vertical" },
  { id: 16, src: "/video16.mp4", descripcion: "Otro gran recuerdo para no olvidar." , orientation: "vertical" },
  
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
      { threshold: 0.5 ,  rootMargin: "200px"  }
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
      Un pedacito de todos los recuerdos contigo, Karito. Elegimos esta canción porque cada momento contigo se sintió como un electric love🪐 Gracias por mostrarnos que todavía hay personas buenas en este mundo,
      <br></br> 
      por ser tan  buena amiga y estar siempre que te necesitabamos
      <br></br>
      Hoy te nos vas, pero tu amistad queda para siempre en nuestro corazón. 
      <br></br>
      Buen viaje princess, te queremos mucho 🌹🦦
      </p>
      <div > <MusicPlayer2 />.</div>
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
      ? { height: "400px", width: "auto", margin: "0 auto" } // para verticales
      : { height: "250px", width: "100%", objectFit: "cover" } // para horizontales
  }
>
  <source src={video.src} type="video/mp4" />
  Tu navegador no soporta video.
</video>
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{video.title}</h5>
                <p className="card-text text-muted small">{video.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;