import MusicPlayer from "./MusicPlayer.jsx";

const fotos = [
  
  { id: 11, src: "/foto11.jpg", texto: "h" }, 
  { id: 12, src: "/foto12.jpg", texto: "f" }, 
  { id: 13, src: "/foto13.jpg", texto: "i" }, 
  { id: 14, src: "/foto14.jpg", texto: "w" }, 
  { id: 15, src: "/foto15.jpg", texto: "y" }, 
  { id: 16, src: "/foto16.jpg", texto: "3" }, 
  { id: 17, src: "/foto17.jpg", texto: "2" }, 
  { id: 18, src: "/foto18.jpg", texto: "2" }, 
  { id: 19, src: "/foto19.jpg", texto: "2" }, 
  { id: 20, src: "/foto20.jpg", texto: "2" }, 
  { id: 21, src: "/foto21.jpg", texto: "2" }, 
  { id: 22, src: "/foto22.jpg", texto: "2" }, 
  { id: 23, src: "/foto23.jpg", texto: "2" }, 
  { id: 24, src: "/foto24.jpg", texto: "3" }, 
  { id: 25, src: "/foto25.jpg", texto: "3" }, 
  { id: 26, src: "/foto26.jpg", texto: "3" }, 
  { id: 27, src: "/foto27.jpg", texto: "3" }, 
  { id: 28, src: "/foto28.jpg", texto: "3" }, 
  { id: 29, src: "/foto29.jpg", texto: "3" }, 
  { id: 30, src: "/foto30.jpg", texto: "3" }, 
  { id: 31, src: "/foto31.jpg", texto: "2" }, 
];

function DiaCabritas() {
  return (
    <div className="container py-5 text-center">
      <a
        href="https://maps.app.goo.gl/HFtx8BzEbkmAxRHh6/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h1>Nevada City</h1>
      </a>
      <p className="text-center">
        Ese día fue uno de mis favoritos, ya que comimos comida Thai, 
        vimos el atardecer mientras nos tomábamos fotos y también me metí al mar, 
        pero tú no quisiste.
      </p>
      <div > <MusicPlayer />.</div>
      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow rounded">
              <img
                src={foto.src}
                alt={`Foto: ${foto.texto}`}
                loading="lazy"
                className="card-img-top"
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