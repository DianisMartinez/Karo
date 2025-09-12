
const fotos = [
  { id: 32, src: "/foto32.jpg", texto: "Loquitas"},
  { id: 33, src: "/foto33.jpg", texto: "Bonita vista" },
  { id: 34, src: "/foto34.jpg", texto: "Esta es mi foto favorita ever 🥺" }, 
  { id: 35, src: "/foto35.jpg", texto: "1111 🥺" }, 
];

function DiaEspecial() {
    return (
      <div className="container py-5 text-center">
      <h1 className="fw-bold  display-5 text-center">Sofi 😼 Karo 🐴 Dianis 🐒
      </h1>
    <div className=" mt-5 mb-4 fs-5 fw-normal px-3">
     Nosostars siendo nosotras 
    </div>
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