
const fotos = [
  { id: 45, src: "/foto45.jpg", texto: "576" },
  { id: 61, src: "/foto61.jpg", texto: "u" },
  { id: 38, src: "/foto38.jpg", texto: "c" },
  { id: 50, src: "/foto50.jpg", texto: "-" },
  { id: 65, src: "/foto65.jpg", texto: "]" },
  { id: 41, src: "/foto41.jpg", texto: "g" },
  { id: 56, src: "/foto56.jpg", texto: "4" },
  { id: 44, src: "/foto44.jpg", texto: "h" },
  { id: 67, src: "/foto67.jpg", texto: "u" },
  { id: 39, src: "/foto39.jpg", texto: "d" },
  { id: 62, src: "/foto62.jpg", texto: "=" },
  { id: 48, src: "/foto48.jpg", texto: "0" },
  { id: 53, src: "/foto53.jpg", texto: "9" },
  { id: 36, src: "/foto36.jpg", texto: "a" },
  { id: 42, src: "/foto42.jpg", texto: "h" },
  { id: 59, src: "/foto59.jpg", texto: "7" },
  { id: 68, src: "/foto68.jpg", texto: "u" },
  { id: 47, src: "/foto47.jpg", texto: "567" },
  { id: 40, src: "/foto40.jpg", texto: "f" },
  { id: 54, src: "/foto54.jpg", texto: "2" },
  { id: 66, src: "/foto66.jpg", texto: "u" },
  { id: 51, src: "/foto51.jpg", texto: "-" },
  { id: 43, src: "/foto43.jpg", texto: "i" },
  { id: 60, src: "/foto60.jpg", texto: "8" },
  { id: 37, src: "/foto37.jpg", texto: "b" },
  { id: 55, src: "/foto55.jpg", texto: "1" },
  { id: 64, src: "/foto64.jpg", texto: "u" },
  { id: 49, src: "/foto49.jpg", texto: "9" },
  { id: 63, src: "/foto63.jpg", texto: "u" },
  { id: 52, src: "/foto52.jpg", texto: "'" },
  { id: 46, src: "/foto46.jpg", texto: "6657" },
  { id: 57, src: "/foto57.jpg", texto: "5" },
  { id: 58, src: "/foto58.jpg", texto: "65" },
  { id: 69, src: "/foto69.jpg", texto: "u" },
 
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