import MusicPlayer from "./MusicPlayer.jsx";

const fotos = [
  
{ id: 11, src: "/foto11.webp", texto: "Mi host family hizo una comida para todas nosotras y terminamos el día viendo el atardecer con las chiquillas. Al final me caí por las escaleras y la única que lo vio fuiste tu, típico 🤣" },
{ id: 13, src: "/foto13.webp", texto: "Karito y yo en Downtown Nevada City, Karely nos sacó esa foto, y no entiendo por qué yo colocaba esas cara jajaja, Al principio era toda tímida, nomás te hacía reír… y ahora quién me saca de encima, ahhh 😅"},
{ id: 14, src: "/foto14.webp", texto: "Organizamos una fiesta sorpresa para Sofi. Kareli trajo el pastel, Sofi y tú condujeron caleta, todas compartimos , me acuerdo de esos shots de aguardiente en la cocina y yo pensando que eras alcohólica, porque cada vez que nos veíamos tú estabas con tu aguardiente repartiéndole a todas 🤣" },
{ id: 12, src: "/foto12.webp", texto: "Yuba River siempre será nuestro lugar. No sé cuántas veces fuimos este verano, pero lo pasamos la raja: nadamos, comimos y nos reímos mucho hablando de toda la gente que estaba desnuda jajaja." },{ id: 15, src: "/foto15.webp", texto: "En New Year’s Eve, Sofi y Karito despediendo el 2024 siendo loquitas toda la noche 😂" },
{ id: 16, src: "/foto16.webp", texto: "Karito y yo empezando el 2025 con risas y y todas loquitas , yo por poco casi me quedo sin cabello tambien 😂" },
{ id: 17, src: "/foto17.webp", texto: "1 de Enero fuimos a hacer hiking cerca de mi casa con las chiquillas. Todas con dolor de estómago por el pisco que les di como shot 🤭, pero igual estuvo todo muy lindo" },
{ id: 18, src: "/foto18.webp", texto: "La primera vez que fuimos a correr… pero en realidad solo ejercitamos la lengua. Nos sentamos a chismosear, después pasamos al supermercado y nos devolvimos a la casa y Karina was like ‘wow, ustedes no sudan’ jaja y nosotras 🌚" },
{ id: 19, src: "/foto19.webp", texto: "Esa misma semana te ibas a Disneyland y estabas tan feliz que querías todas las cosas de los personajes de Disney... Lo bueno es que conseguimos las orejitas de Minnie Mouse  a tiempo 🐭🎀" },
{ id: 30, src: "/foto30.webp", texto:  "Fuimos a la feria, reiamos para no llorar y recordar que gastamos 60 dólares en un peluche todo picho 🫠  Pero la pasamos increíble, nos subimos al Freakout y al ascensor 🎡" },
{ id: 21, src: "/foto21.webp", texto: "Primera vez que fuiste al Yuba River, estuvo espectacular. Comimos cerca del río, tomamos nap, yo me metí al agua a medias y tú decías que estaba muy fria , jaja 😂" },
{ id: 23, src: "/foto23.webp", texto: "Primero fuimos a hacer hiking con las chiquillas cerca de donde ahora vives, y es re loquito pensar eso… quién hubiera sabido. Luego fuimos a jugar pickleball, la Sofi nos gano con toda, hasta rompió una de las pelotas jajaja." },
{ id: 24, src: "/foto24.webp", texto: "La Sofi vino a visitarnos, me acuerdo que vimos *El Conjuro* y comimos cabritas 🍿. El chismoso de Gleenn pensó que era alguien más que había llegado a la casa por el auto de Sofi 🤣" },
{ id: 25, src: "/foto25.webp", texto: "4 de Julio en Chapa De 🎆 vimos los fuegos artificiales con mi host family, fue todo muy lindo. Después nos devolvimos por el bosque y con cuea veíamos 😂" },
{ id: 26, src: "/foto26.webp", texto: "La primera vez que fui a tu casa nueva, me diste un house tour y después fuimos al bosque a probar cosas raras como tirarme de una cuerda" },
{ id: 53, src: "/foto53.webp", texto: "Fue como la segunda vez que te quedaste en mi casa. Vimos una película y a media tú estabas terminando tu cambio de estatus, y yo nomás webiando por ahí 🫶🏽" },
{ id: 31, src: "/foto31.webp", texto: "El día después de que llegaste de New York tuviste un viaje largo, pero lleno de amor con tu mamita. Me pone contenta que te reencontraras con ella y que puedan disfrutar juntas. Tambien hicimos pizza en forma de corazón y comimos cupcakes que habían sobrado del cumpleaños de Liliana" }, 
{ id: 29, src: "/foto29.webp", texto:  "Esta fue cuando la Sofí estaba cumpliendo años y después conocieron mi cozy place. La Ari andaba loquita con su cámara tomando fotos y de nuevo yo toda tímida jajaa" },
{ id: 20, src: "/foto20.webp", texto: "Nuestras host moms organizaron algo para que pudiéramos ir a line dancing. Se dio y la pasamos estupendo, aunque fue difícil y terminamos haciendo el ridículo… bueno, solo yo. Igual lo pasamos excelente. Después llegamos a la casa a ver una película de miedo con Karina y tú te quedaste dormida", orientation: "horizontal" },
{ id: 22, src: "/foto22.webp", texto: "Hemos visto varios atardeceres desde mi patio, pero ese fue único. El sol estaba hermoso, parecía una bombilla de luz. Estuvimos un ratico afuera, pero después los mosquitos se fueron al chancho y nos tocó entrar" ,orientation: "horizontal" },
{ id: 28, src: "/foto28.webp", texto: "Después de pasar la noche en tu casa nueva, fuimos al lago y disfrutamos el día relajándonos, haciendo paddle board y comiendo rico",orientation: "horizontal" },


]
function DiaCabritas() {
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
      <a
        href="https://maps.app.goo.gl/6qTSUCfZftktUmmk6"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
       <h1 className="fw-bold mb-3 display-5 text-center">Nevada City</h1>
      </a>
<p className="mt-4 mb-4 fs-5 fw-normal px-3">
  Un pedacito de lo que vivimos juntas en Nevada City 
  <br />
  No puedo creer que hayas pasado este tiempo aquí y disfrutado tanto. Me alegra mucho haber compartido tu compañía, me encanto verte tan feliz.  
  Todas esas risas, los lugares que descubrimos y esos momentos que nos volvíamos loquitas quedarán para siempre en mi corazón.
  <br />  
  Ahora sí… ¡dale punch al botón! 🥹🤍
</p>
      <div className="d-flex justify-content-center my-4">
        <MusicPlayer />
      </div>
      <div className="row">
        {fotos.map((foto) => (
          <div key={foto.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow rounded">
            <img
                src={foto.src}
                alt={`Foto: ${foto.texto}`}
                className="card-img-top img-fluid"
                style={{
                  height: foto.orientation === "horizontal" ? "300px" : "500px",
                  objectFit: "cover",
                }}
                 loading="lazy"
/>
              <div className="card-body p-2 d-flex justify-content-center align-items-center">
              <p className="card-text m-0 text-center fs-6">{foto.texto}</p>              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiaCabritas ;