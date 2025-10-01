const fotos = [
  { id: 4, src: "/foto4.webp", texto: "Jugando UNO 🃈" },
  { id: 5, src: "/foto5.webp", texto: "🥹" },
  { id: 6, src: "/foto6.webp", texto: "Las sin fronteras AHHH" },
  { id: 7, src: "/foto7.webp", texto: "El vino que me salio de la  👎🏽 😶‍🌫️" },
  { id: 8, src: "/foto8.webp", texto: "Otra fotito linda Recien despertandose 💕" },
  { id: 9, src: "/foto9.webp", texto: "Desayunito 🥐🍪☕️" },
  { id: 33, src: "/foto33.webp", texto: "Sofi y Tu rencontrandoce con Karely" },
  { id: 34, src: "/foto34.webp", texto: "🫶🏽" },
  { id: 35, src: "/foto35.webp", texto: "🥹" },
];

function DiaCafeteria() {
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
      <h1 className="fw-bold mb-3 display-5 text-center">Sleep Over 2024</h1>
      <p className="mt-4 mb-4 fs-5 fw-normal px-3">
        ✨ Una pijamada que disfruté muchísimo ✨ <br />
        Ese día conocí a Sofí y la pasamos increíble. Recuerdo que llevé un vino para preparar algo y, aunque no resultó como esperaba, igual nos reímos mucho. <br />
        Jugamos UNO, conversamos de todo y compartimos momentos únicos. <br />
        Sofi me hablaba de piedras y de ciencia, algo que le apasionaba, mientras tú me contabas sobre tu familia. <br />
        Yo las escuchaba y sentía lo especial que eran y lo buenas que serían para mí 💛
      </p>
      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4 ">
            <div className="card rounded overflow-hidden">
              <img
                src={foto.src}
                alt={`Recuerdo especial ${foto.texto}`}
                className="card-img-top img-fluid img-hover"
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

export default DiaCafeteria;