export default function JuegoCard({ juego, onVerMas }) {
  return (
    <div className="juego-card border rounded-lg p-4 shadow-sm">
      <img src={juego.imagen} alt={juego.nombre} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold mb-2">{juego.nombre}</h3>
      <p className="text-muted-foreground mb-4">{juego.descripcion}</p>
      <button
        onClick={onVerMas}
        className="text-primary font-semibold hover:underline"
      >
        Ver más
      </button>
    </div>
  )
}
