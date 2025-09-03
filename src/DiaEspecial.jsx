
const fotos = [
  { id: 4, src: "/foto10.jpg", texto: "Loquitas"},
  { id: 5, src: "/foto11.jpg", texto: "Bonita vista" },
  { id: 6, src: "/foto12.jpg", texto: "Esta es mi foto favorita ever 🥺" }, 
];





function DiaEspecial() {
    return (
      <div className="container py-5 text-center">
      <a
        href="https://maps.app.goo.gl/tAG25psy9hCTD7JU7/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h1>Bosque Nacional Tahoe</h1>
      </a>
      <p>Ese día fuimos a la nieve, 10/10. Me acuerdo que queríamos tanto "Esquiar" que al final se dio y fuimos no más. También lo mucho que nos reímos, caminamos caleta y   por 2 horas fuimos niñeras jajaja</p>
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

export default DiaEspecial;