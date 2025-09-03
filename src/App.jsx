import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Videos from "./Videos.jsx";

function App() {
  const [mensaje, setMensaje] = useState("💛 Bienvenida 💛");

  const fotos = [
    { id: 1, src: "/foto1.jpg", texto: "Ese día en la Cafetería" },
    { id: 2, src: "/foto2.jpg", texto: "Un recuerdo especial 💕" },
    { id: 3, src: "/foto3.jpg", texto: "Las cabritas 🐐 jaja" },
  ];

  return (
    <div>
      {/* Menú de navegación */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between">
          {/* Logo o título */}
          <Link className="navbar-brand" to="/">Galería 🐎</Link>

          {/* Links de navegación */}
          <div>
            <Link className="btn btn-light mx-2" to="/">Fotos</Link>
            <Link className="btn btn-outline-light" to="/videos">Videos</Link>
          </div>
        </div>
      </nav>

      <Routes>
        {/* Página de fotos */}
        <Route
          path="/"
          element={
            <div className="container py-5 text-center">
              <h1 className="fw-bold mb-3">Karito en California</h1>
              <p className="lead">{mensaje}</p>

              <button
                className="btn btn-dark my-3"
                onClick={() => setMensaje("🌸 Gracias por estar aquí 🌸")}
              >
                Apreta aquí!
              </button>

              <h2 className="mt-4 mb-4">Galería de recuerdos</h2>

              {/* Galería */}
              <div className="row g-4">
                {fotos.map((foto) => (
                  <div key={foto.id} className="col-12 col-sm-6 col-md-4">
                    <div className="card shadow-sm h-100">
                      <img
                        src={foto.src}
                        alt={foto.texto}
                        className="card-img-top rounded img-hover"
                        style={{ height: "250px", objectFit: "cover" }}
                        onClick={() => setMensaje(`💖 Te gustó: ${foto.texto}`)}
                      />
                      <div className="card-body">
                        <p className="card-text">{foto.texto}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* Página de videos */}
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;