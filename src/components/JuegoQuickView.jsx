export default function JuegoQuickView({ juego, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            {/* Botón de cierre */}
            <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
            &times;
            </button>

            {/* Contenido */}
            <h2 className="text-2xl font-bold mb-4">{juego.nombre}</h2>
            <img
            src={juego.imagen}
            alt={juego.nombre}
            className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="text-muted-foreground mb-4">{juego.descripcion}</p>
            <a
            href={juego.instructivo}
            download
            className="text-blue-600 hover:underline"
            >
            Descargar instructivo
            </a>
        </div>
        </div>
    )
    }
