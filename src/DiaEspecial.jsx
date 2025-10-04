import MusicPlayer2 from "./MusicPlayer2";


const fotos = [
  { id: 45, src: "/foto45.webp", descripcion: "Recuerdo ese día que íbamos a ir a la iglesia por primera vez, pero al final llegamos tarde. Después encontramos un parque y nos juntamos con Sofi cerca al rancho Córdoba y vimos el atardecer todas juntas. Sí, también me acuerdo que yo había dicho que hiciéramos un picnic, no me creían que yo llevaba las cosas, y cuando las saqué, la risa que nos dio que yo había ido súper preparada 😂" },
  { id: 61, src: "/foto61.webp", descripcion: "Nos invitaste a un barbecue que te organizo tu ex host family en Placerville Fue bacán, comimos muy rico, hicimos mimosas, comimos helado y también conocimos a los cerditos" },
  { id: 38, src: "/foto38.webp", descripcion: "Este día fue después de año nuevo, un día antes fuimos a un antro de chavas y pagamos doble xq íbamos en busca de chavos guapos y como lo había en uno, nos fuimos a otro 🤣 y nos ligamos a unos árabes para que nos metieran al VIP y tomáramos gratis jajajaajajajajajaja y al otro día fuimos a la playita, a pedir por un año de muchas experiencias y amor",
  title :"-Ari",
   },
  { id: 50, src: "/foto50.webp", descripcion: "Donde estan las chiquillas? En la pista de 🪩 💃" },
  { id: 65, src: "/foto65.webp", descripcion: "😊🥰" },
  { id: 41, src: "/foto41.webp", descripcion: "Fuimos y dejamos a Ari en el aeropuerto, antes de eso pasamos por el In-N-Out y le dimos unos regalitos😊 (Pensar que ahora es lo mismo contigo es muy triste)" },
  { id: 56, src: "/foto56.webp", descripcion: "🥰☺️" },
  { id: 44, src: "/foto44.webp", descripcion: "Truckee Ese día habíamos parado con mi host family a tomarnos fotos porque la vista estaba hermosa. Fue muy lindo ese día, la verdad" },
  { id: 67, src: "/foto67.webp", descripcion: "🥰😝" },
  { id: 39, src: "/foto39.webp", descripcion: "🧚🏻‍♀️🥹" },
  { id: 62, src: "/foto62.webp", descripcion: "Fairfield En tu casa nueva nos invitaste, la Sofi estaba haciendo empanadas, yo cortando cebolla y tú… ahhh 'exprimiendo' unas naranjas para hacer mimosa 😂" },
  { id: 48, src: "/foto48.webp", descripcion: "🧸🦹🏽‍♀️" },
  { id: 27, src: "/foto27.webp", descripcion: "Después de cuidar a Sam todo el día, todas fuimos a la piscina. Muy merecido " },
  { id: 36, src: "/foto36.webp", descripcion: "Esto fue cerca de Napa, paramos a almorzar cerca del downtown jaja, y ustedes me decían “este te va a gustar porque tiene pollo” y ya me convencían" },
  { id: 2, src: "/foto2.webp", descripcion: "Diciembre 2024, Con todas las chiquillas  pasándola la raja. Habíamos ido al bowling en Grass Valley, pero estaba horrible, así que nos tocó caminar y tomarnos fotos jajaja" },
  { id: 59, src: "/foto59.webp", descripcion: "Fuimos a Castello di Amorosa en Napa, jaja me da mucha risa esta foto, posamos como esas señoras de 50 años 😂 Bonita experiencia y qué mejor que con ustedes" },
  { id: 68, src: "/foto68.webp", descripcion: "🥰☺️" },
  { id: 47, src: "/foto47.webp", descripcion: "Me gustó este día. Vimos EL atardecer, comimos comida thai con champán, después pasamos a vitrinear pero no estuvimos mucho ahí. Después nos tocó salir corriendo por que  la cookie nos estaba esperando en la casa jajaja" },
  { id: 40, src: "/foto40.webp", descripcion:"Después de haberse quedado en mi casa, dijimos: y si vamos al cine? Jajaja, así vimos Mufasa. Saliendo nos topamos con un arcoíris tremendo. Hasta la fecha de hoy seguimos webiando con el MUFASSAAAA AHRRRR." },
  { id: 54, src: "/foto54.webp", descripcion: "La primera vez que te uniste a la pijamada navideña, recuerdo que ya solo las esperabamos a ti y a Marlene. Fue una linda noche, entre risas, historias, juegos... Recuerdo estar super entretenidas en el chisme, poniendonos al dia y Lola pidiendo silencio en mi propia casa jahaja. Tu presencia siempre a sido como un abrazito al corazon💕✨",
  title: "-Karely",
   },
  { id: 66, src: "/foto66.webp", descripcion: "Este día estábamos en las vegas apunto de entrar al show de Martín garrix, estuvo muy chido ese día, nos perdimos, nos peleamos🤣 pero es un viaje que llevo en mi corazón, porque a pesar de los malos ratos, los reales siempre se quedan ❤️",
  title:"-Ari",
  },
  { id: 51, src: "/foto51.webp", descripcion: "-" },
  { id: 43, src: "/foto43.webp", descripcion: "El primer día que te conocí me caíste muy bien al instante. Y aunque soy tímida, creo que quería saber tanto de ti que no paraba de hacerte preguntas por doquier. Como te dije esa noche: “nos volveremos a ver”… y míranos ahora. Además fue el día de las velitas , todo muy lindo y nuevo para mi la comida que trajiste, lo que organizaste… de verdad fue especial. " },
  { id: 60, src: "/foto60.webp", descripcion: "El road trip donde tú te sentías entre la espada y la pared... deseando estar atrás con nosotras, riendo hasta no poder más.  Aunque en el asiento de adelante no la pasaste tan bien, salieron lindas fotos y buenas lecciones que nos hacen recordar dar lo mejor en cada momento! 🚗💨💕",
  title: "-Karely",
   },
  { id: 37, src: "/foto37.webp", descripcion: "Ese día fue después de la pijamada de navidad en la casa de Karely, al cual fui invitada un día antes 🤣 xq no conocía a Karely y un día antes la conocí y me invitó, fue la segunda vez que vi a Kari, no sabía que iba a ir y de repente llegoooo!!! Y fui muy feliz porque desde el segundo 1 fue una linda conmigo",
  title: "-Ari",
   },
  { id: 64, src: "/foto64.webp", descripcion: "🧚🏻‍♀️🥹" },
  { id: 49, src: "/foto49.webp", descripcion: " Yosemite con mi mami. Fuimos a acampar totalmente 0 preparadas: sin abrelatas, sin cuchillos ni cubiertos. Aun así, fue un fin de semana hermoso, lleno de aventuras y amor. No dormimos nada para ver el amanecer (sin reservación, obvio) y llegando Sofi y yo terminamos haciendo pipí en la calle. Mi primer campamento, y el más bonito.",
  title: "-Ari",
  },
  { id: 63, src: "/foto63.webp", descripcion: "🫧🫶🏽" },
  { id: 55, src: "/foto55.webp", descripcion: "Este día conocí a karito, una au pair me invitó a los bolos y yo no quería ir pero estaba triste y dije ok iré ajajajaajjaaj y fue la mejor decisión porque conocí a karito ❤️",
  title: "-Ari",
   },
  { id: 52, src: "/foto52.webp", descripcion: "Uno de mis días favoritos contigo. Hice todo lo posible para darte la sorpresa de que iba a correr contigo… aunque solo logré la mitad de lo que hiciste, me encantó vivir esa experiencia a tu lado, princess 🏃🏾‍♀️‍➡️🫶🏽🏃🏽‍♀️" },
  { id: 46, src: "/foto46.webp", descripcion: "6657" },
  { id: 57, src: "/foto57.webp", descripcion: "5" },
  { id: 58, src: "/foto58.webp", descripcion: "65" },
  { id: 69, src: "/foto69.webp", descripcion: "🌝🌚" },
  { id: 70, src: "/foto70.webp", descripcion: "Día inolvidable, obvio. Me dijeron “anda tú primero” y terminé siendo la primera en caer 😂. Todas muertas de la risa, pero tú entre carcajadas fuiste la que me levantó. Jajaja, típico de nosotras." },
  { id: 71, src: "/foto71.webp", descripcion: "Santa Monica, Los Ángeles… dos semanas llenas de amor y locura, de altas y bajas, pero siempre a tu lado. Volvería a repetirlo mil veces. Gracias por todos esos momentos juntas" },
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
      <h1 className="fw-bold mb-3 display-5 text-center">Recuerditos</h1>
      <p className="mt-4 mb-4 fs-5 fw-normal px-3">
       ✨ Nosotras pasándola increíble ✨ <br />
       Guardamos recuerdos hermosos contigo y esperamos que te gusten tanto como a nosotras.  
       Elegimos esta canción porque cada momento contigo se sintió como un <em>electric love</em> 🪐.  
       Y no solo fue nuestra experiencia… esa canción refleja lo que causas en las personas:  
       una energía única, una chispa que ilumina y hace que todo se sienta especial.  
       <br />  
       No importa dónde estemos, lo que vivimos juntas queda guardado acá 💖
      </p>
      <div className="d-flex justify-content-center my-4">
        <MusicPlayer2 />
      </div>
      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow rounded">
              <img
                src={foto.src}
                alt={`Recuerdo especial ${foto.descripcion}`}
                className="card-img-top img-fluid"
                style={{ height: "500px", objectFit: "cover", borderRadius: "12px" }}
                loading="lazy"
              />
             <div className="card-body p-3">
  <p className="card-text m-0 text-center fs-6">
    {foto.descripcion}
    <br />
    <strong>{foto.title}</strong>
  </p>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiaEspecial;