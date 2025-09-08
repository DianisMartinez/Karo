
const fotos = [
  { id: 10, src: "/foto10.jpg", texto: "Loquitas"},
  { id: 11, src: "/foto11.jpg", texto: "Bonita vista" },
  { id: 6, src: "/foto12.jpg", texto: "Esta es mi foto favorita ever 🥺" }, 
  { id: 12, src: "/foto12.jpg", texto: "1111 🥺" }, 
];

function DiaEspecial() {
    return (
      <div className="container py-5 text-center">
      <h1>Pijamada real ⛄️🎄 </h1>
    <div className="alert alert-primary mt-4 text-center">
      Me acuerdo de este día que traté de llevar un vino para hacer algo que había probado en un evento, pero ¡me quedó horrible, jajaja! Nadie lo tomó. Tú llevaste arepita y quedó deliciosa, Ari llevó tamales, ¡todo bacán! Y Sofi con su presencia.
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