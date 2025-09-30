import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Videos from "./Videos.jsx";
import DiaCafeteria from "./DiaCafeteria.jsx";
import DiaEspecial from "./DiaEspecial.jsx";
import DiaCabritas from "./DiaCabritas.jsx";
import confetti from "canvas-confetti";
import AvatarRun from "./AvatarRun.jsx"; // 👈 importamos
function App() {
  const [showMain ,setMain] = useState(false); // Estado para mostrar la página principal
  const [mensaje] = useState("Bienvenida Princess 💛 ");

  const fotos = [
    { id: 1, src: "/foto1.webp", texto: "Pijamada Real 🎄☃️🧸", link: "/cafeteria" },
    { id: 3, src: "/foto3.webp", texto: "Karito in Nevada City 🪵🍃🌲", link: "/cabritas" },
   {id: 42, src: "/foto42.webp", texto: "Las Californianas 🇺🇸", link: "/especial",orientation :"vertical"},
   
  ];
  const lanzarEmojis = () => {
    const corazon = confetti.shapeFromText({ text: "🫶🏽", scalar: 3 });
    const caballo = confetti.shapeFromText({ text: "🦦", scalar: 3 });
    const Otta = confetti.shapeFromText({ text: "✨", scalar: 3 });
    const h = confetti.shapeFromText({ text: "🧚🏻‍♀️", scalar: 3 });
    const i = confetti.shapeFromText({ text: "🪵", scalar: 3 });
    const j = confetti.shapeFromText({ text: "🏕️", scalar: 3 });
    const k = confetti.shapeFromText({ text: "🫧", scalar: 3 });

  
    confetti({
      shapes: [corazon, caballo, Otta,h,i,j,k], // Los emojis/figuras que van a salir
      particleCount: 400,                // Cantidad de partículas lanzadas
      spread: 298,                      // Ángulo de dispersión (qué tan abierto se esparcen)
      origin: { y: 0.5},               // Punto de inicio en el eje Y (0 = arriba, 1 = abajo)
      gravity: 1,                       // Gravedad (0 = flotan, 1 = caen normal, >1 caen más rápido)
      ticks: 500,                       // Duración de las partículas (cuántos frames duran)
      scalar: 5                        // Escala (tamaño de los emojis/partículas)
    });
  };
  if (!showMain) {
    return <AvatarRun onFinish={() => setMain(true)} />; // Mostramos el avatar y al terminar mostramos la página principal
  }
  
  
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-warning shadow-sm bg-opacity-10">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand fw-bold text-secondary" to="/">Recuerdos con Karito</Link>
          <div>
            <Link className="btn  mx-2 shadow-sm text-secondary" to="/">Fotos</Link>
   
            <Link className="btn  mx-2 shadow-sm text-secondary" to="/videos">Videos</Link>
          </div>
        </div>
      </nav>

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="container py-4 text-center">
              <h1 className="fw-bold mb-3 display-5 text-center">{mensaje}</h1>
              <div className="d-flex justify-content-center align-items-center my-4 py-4">
                <button className="btn-surprise px-6 py-6" onClick={lanzarEmojis}>
                  Dale punch 🥹🤍
                </button>
              </div>
              <p className="mb-4 fs-5 fw-normal px-3 py-0">
      Queriamos hacer algo diferente y único para ti, algo que guarde un pedacito de lo que hemos vivido juntas. 
      Cada foto tiene su historia: risas que no se olvidan, grandes recuerdos y la suerte de haber compartido tanto contigo.
      Nos emociona verte empezar esta nueva etapa en Colombia, y aunque nos dé un poco de nostalgia, sabemos que vas a brillar como siempre.
      <br></br>
      Eres única, tienes toda una vida por delante, eres increíblemente inteligente y estamos demasiado orgullosas de ti, como siempre te lo decimos. 💛
      No importa dónde vayas, I’m always by your side
    </p>

              {/* Galería de fotos */}
              <div className="row g-4">
                {fotos.map((foto) => (
                  <div key={foto.id} className="col-12 col-sm-6 col-md-4">
                    <div className="card shadow-sm h-100 border-0 rounded-3 overflow-hidden">
                      <Link to={foto.link}>
                        <img
                          src={foto.src}
                          alt={`Foto: ${foto.texto}`}
                          loading="lazy"
                          className="card-img-top img-hover"
                        />
                      </Link>
                      <div className="card-body">
                        <p className="card-text m-0 text-center fs-6">{foto.texto}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* Otras páginas */}
        <Route path="/videos" element={<Videos />} />
        <Route path="/cafeteria" element={<DiaCafeteria />} />
        <Route path="/cabritas" element={<DiaCabritas />} />
        <Route path="/especial" element={<DiaEspecial />} />
        
      </Routes>
    </div>
  );
}

export default App;