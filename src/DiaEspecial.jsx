
const fotos = [
  { id: 32, src: "/foto32.jpg", texto: "Loquitas"},
  { id: 32, src: "/foto32.jpg", texto: "Loquitas"},
  { id: 32, src: "/foto32.jpg", texto: "Loquitas"},
  { id: 32, src: "/foto32.jpg", texto: "Loquitas"},
  { id: 32, src: "/foto32.jpg", texto: "Loquitas"},
  
 
];

function DiaEspecial() {
    return (
      <div className="container py-5 text-center">
      <h1 className="fw-bold  display-5 text-center"> s + k + d </h1>
    <div className="container py-5 text-center">
     Nosostars siendo nosotras </div>
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