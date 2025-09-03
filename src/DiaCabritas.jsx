const fotos = [
  { id: 4, src: "/foto4.jpg", texto: "Chill viendo el atardecer" },
  { id: 5, src: "/foto5.jpg", texto: "El atardecer increíble 🌅" },
  { id: 6, src: "/foto6.jpg", texto: "La natha llamando" }, 
];

function DiaCabritas() {
  return (
    <div className="container py-5 text-center">
      <a
        href="https://maps.app.goo.gl/PbxS9YZ7RHZiBAH8A/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h1>Huntington Beach</h1>
      </a>
      <p className="text-center">
        Ese día fue uno de mis favoritos, ya que comimos comida Thai, vimos el
        atardecer mientras nos tomábamos fotos y también me metí al mar, pero tú
        no quisiste
      </p>

      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow rounded">
              <img
                src={foto.src}
                alt={`Recuerdo especial ${foto.id}`}
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
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

export default DiaCabritas;