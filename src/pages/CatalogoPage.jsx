import { useState } from "react"
import { juegos } from "../data/juegos"
import JuegoCard from "../components/JuegoCard"
import JuegoQuickView from "../components/JuegoQuickView"
import { FaSearch } from "react-icons/fa"

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJuego, setSelectedJuego] = useState(null)

  const juegosFiltrados = juegos.filter((juego) =>
    juego.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Título y buscador */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Catálogo de Juegos</h1>
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full py-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
            />
          </div>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {juegosFiltrados.map((juego) => (
            <JuegoCard key={juego.id} juego={juego} onVerMas={() => setSelectedJuego(juego)} />
          ))}
        </div>

        {/* Modal de QuickView */}
        {selectedJuego && (
          <JuegoQuickView juego={selectedJuego} onClose={() => setSelectedJuego(null)} />
        )}
      </div>
    </div>
  )
}
