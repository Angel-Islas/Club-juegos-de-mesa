import { useState } from "react"

export default function JuegoQuickView({ juego, onClose }) {
  const [imgActual, setImgActual] = useState(0)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#3c1e30] text-[#F4A4BB] rounded-xl shadow-2xl max-w-4xl w-full p-6 relative border border-[#F4A4BB]/20">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[#F4A4BB] text-2xl hover:text-[#69EAEC] transition"
          aria-label="Cerrar"
        >
          &times;
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-6">{juego.nombre}</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Carrusel de imágenes */}
          <div className="flex-1">
            <img
              src={juego.imagenes?.[imgActual] || juego.imagen}
              alt={`Vista de ${juego.nombre}`}
              className="w-full h-64 object-cover rounded-lg border border-[#E94977]/40"
            />
            {/* Miniaturas */}
            <div className="flex mt-3 gap-2 overflow-x-auto">
              {(juego.imagenes || [juego.imagen]).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  onClick={() => setImgActual(index)}
                  className={`h-16 w-24 object-cover rounded-md cursor-pointer border transition ${
                    imgActual === index
                      ? 'border-[#69EAEC] ring-2 ring-[#69EAEC]'
                      : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Información del juego */}
          <div className="flex-1 space-y-4">
            <p className="text-[#F4A4BB]/80">{juego.descripcion}</p>

            {/* Categorías */}
            {juego.categorias?.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-1">Categorías:</h4>
                <ul className="flex flex-wrap gap-2">
                  {juego.categorias.map((cat, i) => (
                    <li key={i} className="bg-[#10659E]/60 px-2 py-1 rounded-full text-sm">
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expansiones */}
            {juego.expansiones?.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-1">Expansiones:</h4>
                <ul className="list-disc list-inside text-sm">
                  {juego.expansiones.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructivo */}
            <a
              href={juego.instructivo}
              download
              className="inline-block text-[#15B4D4] hover:text-[#69EAEC] underline font-medium mt-4"
            >
              Descargar instructivo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
