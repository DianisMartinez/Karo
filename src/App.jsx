import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Videos from "./Videos.jsx";
import DiaCafeteria from "./DiaCafeteria.jsx";
import DiaEspecial from "./DiaEspecial.jsx";
import DiaCabritas from "./DiaCabritas.jsx";

function App() {
  const [mensaje, setMensaje] = useState("💛 Bienvenida 💛");

  const fotos = [
    { id: 1, src: "/foto1.jpg", texto: "Ese día en la Cafetería", link: "/cafeteria" },
    { id: 2, src: "/foto2.jpg", texto: "Un recuerdo especial 💕", link: "/especial" },
    { id: 3, src: "/foto3.jpg", texto: "Las cabritas 🐐 jaja", link: "/cabritas" },
  ];

  return (
    <div>
      {/* Menú de navegación */}
      <nav className="navbar navbar-dark bg-warning">
        <div className="container-fluid d-flex justify-content-between">
          {/* Logo o título */}
          <Link className="navbar-brand" to="/"> Galería 🐎 ☺︎ 🐒 </Link>

          {/* Links de navegación */}
          <div>
            <Link className="btn btn-light mx-1" to="/">Fotos</Link>
            <Link className="btn btn-light mx-1" to="/videos">Videos</Link>
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
              <p className="lead">
  {mensaje.startsWith("http") ? (
    <img 
      src={mensaje} 
      alt="gif sorpresa" 
      style={{ width: "100px", borderRadius: "30px" }}
    />
  ) : (
    mensaje
  )}
</p>

<button
  className="btn btn-warning"
  onClick={() =>
    setMensaje("https://media1.tenor.com/m/gaEpIfzxzPEAAAAC/pedro-monkey-puppet.gif")
  }
>
  Apreta aqui!
</button>

              <h2 className="mt-4 mb-4">  Some memories with U </h2>

              {/* Galería */}
              <div className="row g-4">
                {fotos.map((foto) => (
                  <div key={foto.id} className="col-12 col-sm-6 col-md-4">
                    <div className="card shadow-sm h-100">
                      {/* Foto con Link a otra página */}
                      <Link to={foto.link}>
                        <img
                          src={foto.src}
                          alt={foto.texto}
                          className="card-img-top rounded img-hover"
                          style={{ height: "250px", objectFit: "cover" }}
                        />
                      </Link>
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

        {/* Páginas individuales para recuerdos */}
        <Route path="/cafeteria" element={<DiaCafeteria />} />
        <Route path="/especial" element={<DiaEspecial />} />
        <Route path="/cabritas" element={<DiaCabritas />} />
      </Routes>
    </div>
  );
}

export default App;