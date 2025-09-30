import React, { useEffect, useRef } from "react";
import "./V.css";
import MusicPlayer3 from "./MusicPlayer3";

const videos = [
  { 
    id: 1, 
    src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/IMG_2451_bpsaz9.mp4",
    descripcion: "Este video del 4 de julio, donde los fuegos se reflejan en el cielo y tu disfrutas del momento, representa lo que somos: instantes que brillan y nunca se olvidan. ¡Hasta pronto, amiga! 🎆✨", 
    title : "-Karely",
  },    
  { 
    id: 2, 
    src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_9459_rcbcdj.mp4", 
    descripcion: "Agosto del 2025 fuimos a ver The Lumineers y un día increíble. La Sofi y tú pidieron un trago delicioso que compartimos entre las tres, cantamos juntas y nos reímos incluso con esa luz  que nos daba en la cara durante todo el concierto. Fue un momento especial que siempre recordaremos y para cerrar la noche, fuimos a cenar a In-N-Out bien tarde ", 

  },
  { 
    id: 4, 
    src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_3379_txbpar.mp4", 
    descripcion: "Nos dio un ataque de risa en el supermercado, las tres juntas haciendo el ridículo, super casual finjiendo cómo sería la boda de la Sofi... y ella tirando el brócoli a la mierda. Jajaja, fue todo muy chistoso",
  },
  { 
    id: 5, 
    src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_0427_vsxwzf.mp4", 
    descripcion: "Nos estábamos arreglando, esto fue un día después de haber ido la nieve. Webiando con música siempre que nos levantamos, arreglándonos para ir al BBQ con tu host family, y eso sería todo, ahhh."
    
    , 
    orientation: "vertical" 
  },
  { id: 7,
     src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_2552_mliurl.mp4", 
     descripcion: "Sin contexto, pero uno de mis videos favoritos 😂 nos creíamos esquiando con esos zapatos jajj.También me acordé de Karina cayéndose re feo, porque ella sí estaba esquiando en serio... Nos habíamos perdido de mis host, pero valió totalmente la pena para ir a loquear y sacarnos foticos "
 ,
     orientation: "vertical" },
  { id: 9, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/PMM8F-7V356J_hykcip.mp4",
    descripcion: "Las dos loquitas que no podían separarse: tú viviendo en un extremo y yo en el otro, pero siempre buscando la forma de vernos y pasarla bien. Nos juntamos a ver Lilo & Stitch, a comer muchas cabritas y también a llorar por la plata perdida en las alitas de pollo. A veces somos muy demás con la comida 🥲",
    orientation: "vertical" },
  { id: 10, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_8488_cbnoxj.mp4",
    descripcion: "Tú mostrándome el columpio que había en tu casa, intentando explicarme cómo se subía, pero yo muerta de risa porque no me convencías nada 😂. Al final se entiende por qué me daba miedo subirme, jajaja.",
    orientation: "vertical" },
  { id: 11, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_4238_eyrsko.mp4", 
  descripcion: "Nos dimos un lujito y visitamos Castello di Amorosa en Napa, estaba hermoso y nos sentimos como princesas ese día, jaja. Degustamos muchos vinos y además compramos uno que habías pedido tú, estaba riquísimo, así que decidimos llevarlo para tomarlo en el Hotel. Recorrrimos todo el castillo y nos tomamos muchísimas fotos. Fue un día súper divertido junto a ti y la Sofi",
  orientation: "vertical" },
  { id: 12, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/cf9ca9a916684875aa3ae51f7b00515b_s08ets.mp4",
  descripcion: "Después de la pijamada real llegó la despedida. El desayuno estuvo brutal, de esos que despues da cagadera. Pero ya después cada una se fue para su casa… y obvio, nos despedimos con abrazos, risas y puras weas como siempre jajaja , adjunto evidencia", 
  orientation: "vertical" },
  { id: 13, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_5013_xws8cf.mp4",
   descripcion: "Año Nuevo 2025, en la pista de baile con “Pépas” a todo volumen, nosotras cantando como si no hubiera mañana . Esa noche quedamos en la historia, porque cada vez que digo algo de mis amigas dicen: “¡ahhh, las de la fiesta!” y yo 🌝", 
   orientation: "vertical" },
  { id: 14, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/v1725849478/IMG_0661_gte8yj.mp4",
  descripcion: "Esto fue en la casa de los abuelos. Habíamos ido a comer y a estar con los niños un rato, pero al final las que terminamos jugando fuimos nosotras, jaja. Comiendo hasta no poder más, pero felices. Tú patinando y yo en el scooter",
  orientation: "vertical" },
  { id: 16, src: "https://res.cloudinary.com/dwmw7ftnu/video/upload/IMG_9728_aj6oww.mp4",
     descripcion: "Me reí tanto con este video que dije tengo que ponerlo. Estábamos en Scott Flat Lake y nos tocó bajar y subir una montaña para llegar. Compramos Panda Express y estuvimos webiando mucho en el agua, hasta leímos. Cuando ya estábamos por irnos, nos vimos los outfits y no podíamos dejar de reírnos, ¡meras evangelicas! Jajaja",
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
      { threshold: 0.5, rootMargin: "400px" }
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
      <p className="mt-4 mb-4 fs-5 fw-normal px-3">
        Un pedacito de todos los recuerdos contigo, Karito
        <br />
        Gracias por mostrarnos que todavía hay personas buenas en este mundo,
        por ser tan buena amiga y estar siempre que te necesitabamos.
        Hoy te nos vas, pero tu amistad queda para siempre en nuestro corazón.
        <br />
        Buen viaje princess, te queremos mucho 🌹🦦
      </p>
      <MusicPlayer3/>
      <div className="row">
        {videos.map((video, index) => (
          <div key={video.id} className="col-md-6 col-lg-4 mb-4 d-flex">
            <div className="card shadow-sm rounded-4 overflow-hidden h-100 ">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-100"
                playsInline
                preload="metadata"
                muted
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              >
                <source src={video.src} type="video/mp4" />
                Tu navegador no soporta video.
              </video>
              <div className="card-body">
                <p className="card-text">
                  {video.descripcion}
                  <br />
                  <br />
                   {video.title && <strong>{video.title}</strong>}
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