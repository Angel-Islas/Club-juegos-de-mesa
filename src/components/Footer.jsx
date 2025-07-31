import { FaDiceD20, FaFacebookF, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t bg-[#921136]/90">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaDiceD20 className="h-6 w-6 text-[#000000]" />
              <span className="text-lg font-bold text-[#F4A4BB]">Mesa Mágica</span>
            </div>
            <p className="text-[#F4A4BB]">
              Club de juegos de mesa donde la diversión, la estrategia y la comunidad se encuentran.
            </p>
          </div>

          {/* Actividades del club */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#F4A4BB]">Actividades del Club</h3>
            <ul className="space-y-2 text-[#F4A4BB]">
              <li>• Juegos nuevos cada semana</li>
              <li>• Torneos y eventos especiales</li>
              <li>• Talleres de iniciación</li>
              <li>• Recomendaciones de juegos</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#F4A4BB]">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F4A4BB] hover:text-[#15B4D4]" aria-label="Facebook">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#F4A4BB] hover:text-[#15B4D4]" aria-label="Instagram">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
            <p className="text-[#F4A4BB]">
              ¡Únete a nuestra comunidad y no te pierdas ninguna partida!
            </p>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-[#F4A4BB]">
          <p>&copy; {new Date().getFullYear()} Mesa Mágica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
