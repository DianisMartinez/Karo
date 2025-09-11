import { useState, useEffect } from "react";

export default function JuegoInicio({ onGanar }) {
  const [mostrarSecuencia, setMostrarSecuencia] = useState(true);
  const [posicionCorrecta, setPosicionCorrecta] = useState(0);
  const [emojis, setEmojis] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Al iniciar, generar emojis aleatorios
  useEffect(() => {
    const lista = ["🍎", "🍌", "🍇", "🍉", "🍒", "🍍"];
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
      setMensaje("¡Correcto! 🎉");
      setTimeout(() => {
        onGanar(); // Pasa a la App principal
      }, 1500);
    } else {
      setMensaje("❌ Intenta de nuevo...");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-6">🎮 Juego de Memoria</h1>

      {mostrarSecuencia ? (
        <div className="text-6xl space-x-6">
          {emojis.map((emoji, i) => (
            <span key={i}>{emoji}</span>
          ))}
        </div>
      ) : (
        <div>
          <p className="mb-4 text-lg">
            ¿Cuál emoji estaba en la posición {posicionCorrecta + 1}?
          </p>
          <div className="flex gap-4 justify-center">
            {emojis.map((emoji, i) => (
              <button
                key={i}
                onClick={() => verificarRespuesta(emoji)}
                className="text-4xl p-4 border rounded-xl hover:bg-gray-200"
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