import { useState } from "react"
import { juegos } from "../data/juegos"
import JuegoCard from "../components/JuegoCard"
import JuegoQuickView from "../components/JuegoQuickView"
import { FaSearch } from "react-icons/fa"

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJuego, setSelectedJuego] = useState(null)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")

  const categoriasUnicas = Array.from(
    new Set(juegos.flatMap((j) => j.categorias || []))
  )

  const juegosFiltrados = juegos.filter((juego) => {
    const coincideBusqueda = juego.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    const coincideCategoria = categoriaSeleccionada
      ? juego.categorias?.includes(categoriaSeleccionada)
      : true
    return coincideBusqueda && coincideCategoria
  })

  return (
    <div className="min-h-screen bg-[#1e0c15] text-[#F4A4BB] py-12">
      <div className="w-full max-w-screen-xl mx-auto px-4 space-y-12">
        
        {/* Título y buscador */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Catálogo de Juegos</h1>

          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F4A4BB] opacity-60 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full py-2 bg-[#3c1e30] border border-[#F4A4BB]/30 text-[#F4A4BB] placeholder-[#F4A4BB]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E94977] transition"
            />
          </div>
        </div>

        {/* Dropdown de categorías */}
        <div className="flex justify-center">
          <select
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            className="bg-[#3c1e30] border border-[#F4A4BB]/30 text-[#F4A4BB] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E94977] transition"
          >
            <option value="">Todas las categorías</option>
            {categoriasUnicas.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
