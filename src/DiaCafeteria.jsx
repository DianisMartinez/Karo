const fotos = [
  { id: 4, src: "/foto7.jpg", texto: "No se que nos creiamos mirando al infinito" },
  { id: 5, src: "/foto8.jpg", texto: "Loquitas" },
  { id: 6, src: "/foto9.jpg", texto: "Comiendo algo rico" }, 
];


function DiaCafeteria() {
  return (
    <div className="container py-5 text-center">
      <a
        href="https://maps.app.goo.gl/d9ge5m3uK7gJ75RZ8/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h1>South Yuba River State Park</h1>
      </a>
      <p>Ese día fuimos por primera vez al río, la pasamos rico, comimos hamburguesas, fuimos por helado, jugamos pickleball, pintamos y tomamos una siesta 💛</p>
      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow rounded">
              <img
                src={foto.src}
                alt={`Recuerdo especial ${foto.id}`}
                className="card-img-top"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body p-2 d-flex justify-content-center align-items-center">
                <p className="card-text m-0 text-center">{foto.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiaCafeteria;