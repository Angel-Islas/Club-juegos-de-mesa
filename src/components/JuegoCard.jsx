export default function JuegoCard({ juego, onVerMas }) {
  return (
    <div className="bg-[#3c1e30] border border-[#F4A4BB]/20 rounded-xl p-4 shadow-md hover:shadow-lg transition text-[#F4A4BB]">
      <img
        src={juego.imagen}
        alt={juego.nombre}
        className="w-full h-48 object-cover rounded-md mb-4 border border-[#E94977]/40"
      />
      <h3 className="text-xl font-bold mb-2">{juego.nombre}</h3>
      <p className="text-sm text-[#F4A4BB]/70 mb-4">{juego.descripcion}</p>
      <button
        onClick={onVerMas}
        className="text-[#69EAEC] font-semibold hover:underline"
      >
        Ver más
      </button>
    </div>
  )
}
