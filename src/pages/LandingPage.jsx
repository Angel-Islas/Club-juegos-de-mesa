import { Link } from "react-router-dom"
import { FaUsers, FaTrophy, FaHandsHelping } from "react-icons/fa"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Descubre la
              <span className="text-primary block">Magia de Compartir Juegos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Únete a nuestro club para disfrutar de sesiones de juegos de mesa, conocer nuevos amigos y vivir experiencias únicas
              que fortalecen la comunidad y la diversión en cada partida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Link to="/contacto">
                <button className="px-6 py-3 rounded-md border text-lg font-medium hover:bg-muted transition">
                  Contactar
                </button>
              </Link> */}
            </div>
        </div>

            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Juegos de mesa"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">¿Por qué unirse a Mesa Mágica?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos un club apasionado por los juegos de mesa, reuniendo a jugadores para compartir
            momentos divertidos, aprender nuevas estrategias y crear una comunidad amigable y activa.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Comunidad Activa",
              description:
                "Un espacio donde jugadores de todos los semestres se reúnen para compartir partidas, experiencias y aprender juntos.",
              icon: <FaUsers className="h-6 w-6 text-primary" />,
            },
            {
              title: "Eventos y Torneos",
              description:
                "Organizamos encuentros y competencias para que siempre haya algo divertido que esperar y disfrutar.",
              icon: <FaTrophy className="h-6 w-6 text-primary" />,
            },
            {
              title: "Apoyo Personalizado",
              description:
                "Nuestro equipo está siempre listo para ayudarte no solo en juegos, sino en todo lo relacionado con la escuela.",
              icon: <FaHandsHelping className="h-6 w-6 text-primary" />,
            },
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-sm bg-background">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* Popular Games Preview */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Juegos Más Populares</h2>
            <p className="text-xl text-muted-foreground">Descubre los favoritos de nuestros integrantes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Catan",
                image: "/placeholder.svg"
              },
              {
                title: "Ticket to Ride",
                image: "/placeholder.svg"
              },
              {
                title: "Azul",
                image: "/placeholder.svg"
              },
            ].map((game, index) => (
              <div key={index} className="overflow-hidden border rounded-lg bg-background shadow-sm">
                <div className="relative aspect-square">
                  <img src={game.image} alt={game.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-center">{game.title}</h3>
                  <div className="flex items-center justify-between">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 text-primary-foreground">
        <div className="w-full max-w-screen-xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">¿Listo para tu próxima aventura?</h2>
            <p className="text-xl opacity-90">
              Explora nuestro catálogo completo y encuentra el juego perfecto para ti y los tuyos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalogo">
                <button className="px-6 py-3 text-lg font-medium bg-secondary text-primary rounded-md hover:bg-secondary/90">
                  Explorar Catálogo
                </button>
              </Link>
              <Link to="/contacto">
                <button className="px-6 py-3 text-lg font-medium border border-primary-foreground text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary bg-transparent">
                  Contactar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
