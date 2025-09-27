
const fotos = [
  { id: 45, src: "/foto45.webp", texto: "Recuerdo ese día que íbamos a ir a la iglesia por primera vez, pero al final llegamos tarde. Después encontramos un parque y nos juntamos con Sofi cerca al rancho Córdoba y vimos el atardecer todas juntas. Sí, también me acuerdo que yo había dicho que hiciéramos un picnic, no me creían que yo llevaba las cosas, y cuando las saqué, la risa que nos dio que yo había ido súper preparada 😂" },
  { id: 61, src: "/foto61.webp", texto: "Nos invitaste a un barbecue que te organizo tu ex host family en Placerville Fue bacán, comimos muy rico, hicimos mimosas, comimos helado y también conocimos a los cerditos" },
  { id: 38, src: "/foto38.webp", texto: "c" },
  { id: 50, src: "/foto50.webp", texto: "Donde estan las chiquillas? En la pista de 🪩 💃" },
  { id: 65, src: "/foto65.webp", texto: "]" },
  { id: 41, src: "/foto41.webp", texto: "Fuimos y dejamos a Ari en el aeropuerto, antes de eso pasamos por el In-N-Out y le dimos unos regalitos😊 (Pensar que ahora es lo mismo contigo es muy triste)" },
  { id: 56, src: "/foto56.webp", texto: "4" },
  { id: 44, src: "/foto44.webp", texto: "Truckee Ese día habíamos parado con mi host family a tomarnos fotos porque la vista estaba hermosa. Fue muy lindo ese día, la verdad" },
  { id: 67, src: "/foto67.webp", texto: "u" },
  { id: 39, src: "/foto39.webp", texto: "d" },
  { id: 62, src: "/foto62.webp", texto: "Fairfield En tu casa nueva nos invitaste, la Sofi estaba haciendo empanadas, yo cortando cebolla y tú… ahhh 'exprimiendo' unas naranjas para hacer mimosa 😂" },
  { id: 48, src: "/foto48.webp", texto: "0" },
  { id: 53, src: "/foto53.webp", texto: "Fue como la segunda vez que te quedaste en mi casa. Vimos una película y a media tú estabas terminando tu cambio de estatus, y yo nomás webiando por ahí 🫶🏽" },
  { id: 36, src: "/foto36.webp", texto: "Esto fue cerca de Napa, paramos a almorzar cerca del downtown jaja, y ustedes me decían “este te va a gustar porque tiene pollo” y ya me convencían" },
  { id: 42, src: "/foto42.webp", texto: "Diciembre 2024, Con todas las chiquillas  pasándola la raja. Habíamos ido al bowling en Grass Valley, pero estaba horrible, así que nos tocó caminar y tomarnos fotos jajaja" },
  { id: 59, src: "/foto59.webp", texto: "Fuimos a Castello di Amorosa en Napa, jaja me da mucha risa esta foto, posamos como esas señoras de 50 años 😂 Bonita experiencia y qué mejor que con ustedes" },
  { id: 68, src: "/foto68.webp", texto: "u" },
  { id: 47, src: "/foto47.webp", texto: "Me gustó este día. Vimos EL atardecer, comimos comida thai con champán, después pasamos a vitrinear pero no estuvimos mucho ahí. Después nos tocó salir corriendo por que  la cookie nos estaba esperando en la casa jajaja" },
  { id: 40, src: "/foto40.webp", texto: "Despues de haberse quedado en mi casa , dijimos y si vamos a cine jaja asi que saliendo de ver mu" },
  { id: 54, src: "/foto54.webp", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 66, src: "/foto66.webp", texto: "u" },
  { id: 51, src: "/foto51.webp", texto: "-" },
  { id: 43, src: "/foto43.webp", texto: "lllll" },
  { id: 60, src: "/foto60.webp", texto: "8" },
  { id: 37, src: "/foto37.webp", texto: "b" },
  { id: 55, src: "/foto55.webp", texto: "mmm" },
  { id: 64, src: "/foto64.webp", texto: "u" },
  { id: 49, src: "/foto49.webp", texto: "9" },
  { id: 63, src: "/foto63.webp", texto: "u" },
  { id: 52, src: "/foto52.webp", texto: "'" },
  { id: 46, src: "/foto46.webp", texto: "6657" },
  { id: 57, src: "/foto57.webp", texto: "5" },
  { id: 58, src: "/foto58.webp", texto: "65" },
  { id: 69, src: "/foto69.webp", texto: "u" },
  { id: 70, src: "/foto70.webp", texto: "u" },
  { id: 71, src: "/foto71.webp", texto: "u" },
 
];

function DiaEspecial() {
    return (
      <div className="container py-5 text-center">
      <h1 className="fw-bold  display-5 text-center"> Recuerdos con ustedes ⚡️🌈 </h1>
      <p className="mt-4 mb-4 fs-5 fw-normal px-3">
      Nosotras pasándola la raja, muy lindos recuerdos contigo y esperamos que te gusten tanto como a nosotras ✨ </p>
    
      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4">
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

export default DiaEspecial;