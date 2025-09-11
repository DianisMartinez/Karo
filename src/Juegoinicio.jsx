import { useState, useEffect } from "react";

export default function JuegoInicio({ onGanar }) {
  const [mostrarSecuencia, setMostrarSecuencia] = useState(true);
  const [posicionCorrecta, setPosicionCorrecta] = useState(0);
  const [emojis, setEmojis] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Al iniciar, generar emojis aleatorios
  useEffect(() => {
    const lista = ["🐒", "🐭", "🐴", "🌻", "🍱", "🍦"];
    // Tomamos 3 al azar
    const seleccionados = lista.sort(() => 0.5 - Math.random()).slice(0, 3);
    setEmojis(seleccionados);

    // Elegir una posición correcta (0,1,2)
    setPosicionCorrecta(Math.floor(Math.random() * 3));

    // Después de 3 segundos ocultamos
    const timer = setTimeout(() => {
      setMostrarSecuencia(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Verificar respuesta
  function verificarRespuesta(opcion) {
    if (opcion === emojis[posicionCorrecta]) {
      setMensaje("Wenaaa!🥳");
      setTimeout(() => {
        onGanar(); // Pasa a la App principal
      }, 1500);
    } else {
      setMensaje("Yapo 🤡")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-6">🎮 Juego de Memoria</h1>

      {mostrarSecuencia ? (
        <div className="h-screen flex items-center justify-center">
          {emojis.map((emoji, i) => (
            <span key={i}>{emoji}</span>
          ))}
        </div>
      ) : (
        <div>
          <p className="h-screen flex items-center justify-center">
            ¿Cuál emoji estaba en la posición {posicionCorrecta + 1}?
          </p>
          <div className="h-screen flex items-center justify-center">
            {emojis.map((emoji, i) => (
              <button
                key={i}
                onClick={() => verificarRespuesta(emoji)}
                className="text-6xl p-3 border rounded-xl hover:bg-gray-600 hover:text-white transition-colors duration-300 shadow-lg"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mt-6 text-lg">{mensaje}</p>
    </div>
  );
}