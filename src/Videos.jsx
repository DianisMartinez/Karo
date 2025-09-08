const fotos = [
  { id: 4, src: "/foto7.jpg", texto: "No se que nos creiamos mirando al infinito" },
  { id: 5, src: "/foto8.jpg", texto: "Loquitas" },
  { id: 6, src: "/foto9.jpg", texto: "Comiendo algo rico" },
];

function DiaCafeteria() {
  return (
    <div className="container py-5 text-center">
      <h1>Sleep Over 2024</h1>
      <p>
        Una pijamdaa la cuyal la pasew muy bien , cocnoci a sofia ese dia y la
        pasamos increible tambien recuerdo que lleve un vinmo para hacer eso pero
        me salio como el pico. Jugamos uno y charlamos de todo. Me acuerdo que
        sofi me hablala de piedras y de cierncia que le gustaba, karo conttaba
        hacerca de su familia y por mientras yo analizaba y las escuchaba.
      </p>
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