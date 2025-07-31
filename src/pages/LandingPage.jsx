import { Link } from "react-router-dom"
import { FaUsers, FaTrophy, FaHandsHelping } from "react-icons/fa"
import Slider from "react-slick"

export default function LandingPage() {

  const juegos = [
    { title: "Catan", image: "/catan.jpg" },
    { title: "Ticket to Ride", image: "/ticket.jpg" },
    { title: "Azul", image: "/azul.jpg" },
    { title: "Carcassonne", image: "/carcassonne.jpg" },
    { title: "7 Wonders", image: "/7wonders.jpg" },
  ]

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="flex flex-col text-[#F4A4BB] bg-[#1e0c15]">

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#3a1729] to-[#2C111F]">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Descubre la
                <span className="text-[#69EAEC] block">Magia de Compartir Juegos</span>
              </h1>
              <p className="text-xl max-w-lg mx-auto lg:mx-0">
                Únete a nuestro club para disfrutar de sesiones de juegos de mesa, conocer nuevos amigos y vivir experiencias únicas que fortalecen la comunidad.
              </p>
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#2C111F] to-[#1e0c15]">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">¿Por qué unirse a Mesa Mágica?</h2>
            <p className="text-xl text-[#69EAEC] max-w-2xl mx-auto">
              Reunimos a jugadores para compartir momentos divertidos, aprender nuevas estrategias y formar una comunidad activa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Comunidad Activa",
                description:
                  "Jugadores de todos los niveles se reúnen para compartir partidas, experiencias y crecer juntos.",
                icon: <FaUsers className="h-6 w-6 text-[#E94977]" />,
              },
              {
                title: "Eventos y Torneos",
                description:
                  "Encuentros regulares, competencias y desafíos para mantener la emoción constante.",
                icon: <FaTrophy className="h-6 w-6 text-[#15B4D4]" />,
              },
              {
                title: "Apoyo Personalizado",
                description:
                  "Te acompañamos desde tus primeros pasos con los juegos hasta ayudarte en lo académico.",
                icon: <FaHandsHelping className="h-6 w-6 text-[#10659E]" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-[#3c1e30] shadow-lg border border-[#F4A4BB]/20"
              >
                <div className="mx-auto w-12 h-12 bg-[#F4A4BB]/20 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[#F4A4BB]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games Preview */}
      <section className="py-20 md:py-28 bg-[#1e0c15] text-[#F4A4BB]">
        <div className="w-full max-w-screen-xl mx-auto px-4 space-y-12 text-center">

          {/* Título */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Juegos Más Populares</h2>
          </div>

          {/* Carrusel */}
          <div className="max-w-2xl mx-auto">
            <Slider {...settings}>
              {juegos.map((game, index) => (
                <div key={index} className="px-4">
                  <div className="overflow-hidden rounded-xl bg-[#3c1e30] shadow-lg border border-[#F4A4BB]/10">
                    <div className="aspect-video">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{game.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">¿Listo para tu próxima aventura?</h3>
            <p className="text-lg max-w-xl mx-auto opacity-90">
              Explora nuestro catálogo completo y encuentra el juego perfecto para ti.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/catalogo">
                <button className="px-6 py-3 text-lg font-medium bg-[#E94977] text-white rounded-md hover:bg-[#F4A4BB] hover:text-[#921136] transition">
                  Explorar Catálogo
                </button>
              </Link>
              <Link to="/contacto">
                <button className="px-6 py-3 text-lg font-medium border border-[#F4A4BB] text-[#F4A4BB] rounded-md hover:bg-[#F4A4BB] hover:text-[#921136] transition">
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
