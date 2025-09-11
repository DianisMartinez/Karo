import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Videos from "./Videos.jsx";
import DiaCafeteria from "./DiaCafeteria.jsx";
import DiaEspecial from "./DiaEspecial.jsx";
import DiaCabritas from "./DiaCabritas.jsx";
import JuegoInicio from "./Juegoinicio.jsx";

function App() {
  const [juegoGanado, setJuegoGanado] = useState(false);
  const [mensaje, setMensaje] = useState("Bienvenida Princess 💛 ");

  const fotos = [
    { id: 1, src: "/foto1.webp", texto: "Pijamada Real", link: "/cafeteria" },
    { id: 2, src: "/foto2.webp", texto: "Nosotras", link: "/especial" },
    { id: 3, src: "/foto3.webp", texto: "Karito Nevada City", link: "/cabritas" },
  ];

  const gifs = [
    "https://media1.tenor.com/m/-YgVT9qYyDIAAAAC/sentient-dog1.gif",
    "https://media.tenor.com/u0M6xZbLEbUAAAAM/cat-dance.gif",
    "https://media1.tenor.com/m/aEDvHjwCmpwAAAAC/cowboys-cowboy.gif",
    "https://media.tenor.com/2roX3uxz_68AAAAM/cute-happy.gif"
  ];

  if (!juegoGanado) {
    return <JuegoInicio onGanar={() => setJuegoGanado(true)} />;
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-warning shadow-sm">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand fw-bold" to="/"> 🐎 ☺︎ 🐒 ☺︎ 😺</Link>
          <div>
            <Link className="btn btn-light mx-1 shadow-sm" to="/">Fotos</Link>
            <Link className="btn btn-light mx-1 shadow-sm" to="/videos">Videos</Link>
          </div>
        </div>
      </nav>

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="container py-5 text-center">
              <h1 className="fw-bold mb-3 display-5">Karito en California</h1>
              
              <p className="lead">
                {mensaje.startsWith("http") ? (
                  <img 
                    src={mensaje} 
                    alt="gif sorpresa" 
                    style={{ width: "120px", borderRadius: "20px" }}
                    loading="lazy"
                  />
                ) : (
                  mensaje
                )}
              </p>

              <button
                className="btn btn-warning shadow-lg rounded-pill px-4"
                onClick={() => {
                  const random = Math.floor(Math.random() * gifs.length);
                  setMensaje(gifs[random]);
                }}
              >
                💖 Apreta aquí
              </button>

              <h2 className="mt-5 mb-4 fs-5 fw-normal px-3">
                ✨ Quise hacer algo diferente, no un simple collage de fotos que quedara aburrido. 
                Mejor dejar esto en internet para que, más adelante, cuando quieras, 
                puedas entrar y revivir un poquito de las memorias que compartimos contigo.
                <br /><br/>
                Espero que lo disfrutes, y quiero decirte lo mucho que te queremos. 
                Te deseamos toda la suerte del mundo en esta nueva etapa y experiencia. 
                Sabemos que la vas a romper porque eres la RAJAAA. 💛 
              </h2>

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
                        <p className="card-text fw-semibold">{foto.texto}</p>
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
        <Route path="/especial" element={<DiaEspecial />} />
        <Route path="/cabritas" element={<DiaCabritas />} />
      </Routes>
    </div>
  );
}

export default App;