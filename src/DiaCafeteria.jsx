import React from "react";

const fotos = [
  { id: 1, src: "/foto1.webp", texto: "Un día especial con amigos 🥰" },
  { id: 2, src: "/foto2.webp", texto: "Risas y alegría sin fin 😄" },
  { id: 3, src: "/foto3.webp", texto: "Momentos que quedan para siempre 💖" },
];

function DiaEspecial() {
  return (
    <div
      className="container py-5 text-center"
      style={{
        marginTop: "90px",
        background: "linear-gradient(135deg, #fffbea, #f9e9af, #ffffff)",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
      }}
    >
      <h1 className="fw-bold mb-3 display-5 text-center">Un Día Especial</h1>
      <p className="mt-4 mb-4 fs-5 fw-normal px-3">
        ✨ Un día lleno de momentos inolvidables ✨ <br />
        Compartimos risas, historias y sueños. <br />
        Cada instante fue único y especial, y me llenó de felicidad. <br />
        Gracias por ser parte de este recuerdo tan bonito 💛
      </p>
      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4 ">
            <div className="card shadow rounded">
              <img
                src={foto.src}
                alt={`Recuerdo especial ${foto.texto}`}
                className="card-img-top img-fluid"
                style={{
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
                loading="lazy"
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