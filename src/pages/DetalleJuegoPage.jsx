import { useParams } from 'react-router-dom';
import { juegos } from '../data/juegos';

export default function DetalleJuegoPage() {
  const { id } = useParams();
  const juego = juegos.find(j => j.id === id);

  if (!juego) return <p>Juego no encontrado.</p>;

  return (
    <div>
      <h2>{juego.nombre}</h2>
      <img src={juego.imagen} alt={juego.nombre} />
      <p>{juego.descripcion}</p>
      <a href={juego.instructivo} download>Descargar instructivo</a>
    </div>
  );
}
