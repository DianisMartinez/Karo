import React from "react";

const videos = [
  {
    id: 1,
    title: "Video de Recuerdo 1",
    src: "/video1.mp4",
    descripcion: "Un momento especial compartido juntos.",
  },
  {
    id: 2,
    title: "Video de Recuerdo 2",
    src: "/video2.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
 
  {
    id: 4,
    title: "Video de Recuerdo 2",
    src: "/video4.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
  {
    id: 5,
    title: "Video de Recuerdo 2",
    src: "/video5.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
  {
    id: 6,
    title: "Video de Recuerdo 2",
    src: "/video6.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
  {
    id:7 ,
    title: "Video de Recuerdo 2",
    src: "/video7.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
  {
    id: 8,
    title: "Video de Recuerdo 2",
    src: "/video8.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
 
  {
    id: 10,
    title: "Video de Recuerdo 2",
    src: "/video10.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
  {
    id: 11,
    title: "Video de Recuerdo 2",
    src: "/video11.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
  {
    id: 12,
    title: "Video de Recuerdo 2",
    src: "/video12.mp4",
    descripcion: "Otro gran recuerdo para no olvidar.",
  },
];

function Videos() {
  return (
    <div className="container py-4">
      <h2 className="mb-5 text-center">Nuestros Videos</h2>
      <div className="row">
        {videos.map((video) => (
          <div key={video.id} className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="embed-responsive embed-responsive-16by9 mb-2" style={{ width: "200%", maxWidth: "200px" }}>
              <iframe
                className="embed-responsive-item"
                src={video.src}
                title={video.title}
                allowFullScreen
                style={{ width: "100%", height: "400px", border: "none", borderRadius: "20px" }}
              ></iframe>
            </div>
            <h5>{video.title}</h5>
            <p className="text-center">{video.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;