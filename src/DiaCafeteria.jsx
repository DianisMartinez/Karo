const fotos = [
  { id: 4, src: "/foto4.webp", texto: "Jugando UNO 🃈" },
  { id: 5, src: "/foto5.webp", texto: "🥹" },
  { id: 6, src: "/foto6.webp", texto: "Las sin fronteras LOL😝" },
  { id: 7, src: "/foto7.webp", texto: "El vino que me salio de la  👎🏽 😶‍🌫️" },
  { id: 8, src: "/foto8.webp", texto: "Otra fotito linda Recien despertandose 💕" },
  { id: 9, src: "/foto9.webp", texto: "Desayunito 🥐🍪☕️" },
  { id: 33, src: "/foto33.webp", texto: "Sofi y Karo rencontrandoce con karely" },
  { id: 34, src: "/foto34.webp", texto: "🫶🏽" },
  { id: 35, src: "/foto35.webp", texto: "🥹" },
];

function DiaCafeteria() {
  return (
    <div className="container py-5 text-center">
      <h1>Sleep Over 2024 🎄❄️</h1>
      <p className="mt-4 mb-4 fs-5 fw-normal px-3">
      ✨ Una pijamada que disfruté muchísimo. Ese día conocí a Sofía y la pasamos increíble. Recuerdo que llevé un vino para preparar algo, aunque no resultó como esperaba, pero igual nos reímos mucho. Jugamos UNO, conversamos de todo y compartimos momentos únicos. Sofi me hablaba de piedras y de ciencia, algo que le apasionaba, mientras Karo me contaba sobre su familia. Yo las escuchaba y sentía lo especial y lo buenas que serian para mi ✨
      </p>
      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4 ">
            <div className="card shadow rounded">
              <img
                src={foto.src}
                alt={`Recuerdo especial ${foto.id}`}
                className="card-img-top"
                style={{ height: "500px", objectFit: "cover" }}
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