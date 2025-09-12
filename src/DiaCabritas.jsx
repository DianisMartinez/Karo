import MusicPlayer from "./MusicPlayer.jsx";

const fotos = [
  
  { 
    id: 11, 
    src: "/foto11.jpg", 
    texto: "Mi host family hizo una comida para todas nosotras y terminamos el día viendo el bonito atardecer junto a las chiquillas. Al final de la noche, me caí por las escaleras y la única que me vio fue Karo 🤣" 
  },
  { id: 12, src: "/foto12.jpg", texto: "Navidad 2024: Sofi y Karo viendo el arbolito de Navidad 🎄" }, 
  { id: 13, src: "/foto13.jpg", texto: "Karo y Dianita en Downtown" }, 
  { id: 14, src: "/foto14.jpg", texto: "Con las chiquillas organizamos una fiesta sorpresa para Sofi. Kareli trajo un pastel y compartimos todas (¡incluso Liliana y Sam que te aman!)" }, 
  { id: 15, src: "/foto15.jpg", texto: "Sofi y Karo en New Year’s Eve, despidiendo el 2024 👯‍♂️" }, 
  { id: 16, src: "/foto16.jpg", texto: "Las princess en Año Nuevo ✨" }, 
  { id: 17, src: "/foto17.jpg", texto: "El 1 de enero fuimos a hacer hiking cerca de mi casa con todas las chiquillas, fue muy lindo" }, 
  { id: 18, src: "/foto18.jpg", texto: "La primera vez que fuimos a correr... pero en realidad fue ejercitar la lengua jajaja 🤭" }, 
  { id: 19, src: "/foto19.jpg", texto: "Esa misma semana te ibas a Disneyland y estabas tan feliz que querías todas las cosas de los personajes de Disney... Lo bueno es que conseguimos las orejitas de Minnie Mouse  a tiempo 🐭🎀" }, 
  { id: 20, src: "/foto20.jpg", texto: "🫶🏽" }, 
  { id: 21, src: "/foto21.jpg", texto: "Primera vez que fuiste al Yuba River, fue espectacular" }, 
  { id: 22, src: "/foto22.jpg", texto: "Taking a nap" }, 
  { id: 23, src: "/foto23.jpg", texto: "Con todas las chiquillas fuimos primero a hacer hiking y después a jugar pickleball (la Sofi era súper buena 🏓)" }, 
  { id: 24, src: "/foto24.jpg", texto: "La Sofi vino a visitarnos, me acuerdo que vimos *El Conjuro* y comimos cabritas 🍿" }, 
  { id: 25, src: "/foto25.jpg", texto: "4 de Julio en Chapa De 🎆 vimos los fuegos artificiales con mi host family, fue todo muy lindo" }, 
  { id: 26, src: "/foto26.jpg", texto: "La primera vez que fui a tu casa nueva, me diste un house tour y también me llevaste al bosque a probar unas cosas raras como tirarme de una cuerda 🤪" }, 
  { id: 27, src: "/foto27.jpg", texto: "Todas fuimos a la piscina después de haber estado todo el día cuidando a Sam" }, 
  { id: 28, src: "/foto28.jpg", texto: "Fuimos al lago después de haber pasado la noche en tu casa nueva" }, 
  { id: 29, src: "/foto29.jpg", texto: "Esta fue cuando la Sofía estaba cumpliendo años y después conocieron mi cozy place" }, 
  { id: 30, src: "/foto30.jpg", texto: "Fuimos a la feria, estábamos en Rueda riéndonos para no llorar y recordar que gastamos 60 dólares en un peluche todo picho 🫠. Pero la pasamos increíble, nos subimos al Freakout y al ascensor 10/10, comimos rico además 🎡🎢" }, 
  { id: 31, src: "/foto31.jpg", texto: "Encontramos oro 🇨🇴" }, 
]
function DiaCabritas() {
  return (
    <div className="container py-5 text-center">
      <a
        href="https://maps.app.goo.gl/HFtx8BzEbkmAxRHh6/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
       <h1 className="fw-bold mb-3 display-5 text-center">Nevada City</h1>
      </a>
      <p className="mt-5 mb-4 fs-5 fw-normal px-3">
  Un poquito de lo que viviste en Nevada City con nosotras. 
  Recordarte lo feliz y libre que te ves viviendo la vida en las montañas jaja 
  <br></br>
  Dale punch al botón y you’ll see what happens! 😉
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

export default DiaCabritas ;