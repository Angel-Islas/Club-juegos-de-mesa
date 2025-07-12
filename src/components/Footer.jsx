import { FaDiceD20, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaDiceD20 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Mesa Mágica</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Club de juegos de mesa donde la diversión, la estrategia y la comunidad se encuentran.
            </p>
          </div>

          {/* Actividades del club */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Actividades del Club</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• juegos nuevos cada semana</li>
              <li>• Torneos y eventos especiales</li>
              <li>• Talleres de iniciación</li>
              <li>• Recomendaciones de juegos</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              ¡Únete a nuestra comunidad y no te pierdas ninguna partida!
            </p>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mesa Mágica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
