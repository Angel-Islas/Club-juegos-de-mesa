import React, { useState } from "react"
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiChatAlt2 } from "react-icons/hi"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por escribirnos! Pronto nos pondremos en contacto contigo.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Contacto</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Quieres unirte al club? ¿Tienes dudas sobre nuestros eventos o juegos disponibles? ¡Estamos encantados de conocerte! Escríbenos y te responderemos pronto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border rounded-lg shadow-md p-6">
            <div className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <HiChatAlt2 className="h-5 w-5" />
              <span>Escríbenos un mensaje</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium block">
                    Nombre *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium block">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tu número de contacto"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium block">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium block">
                  Asunto *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium block">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos cómo te gustaría participar, tus juegos favoritos o cualquier duda que tengas."
                  rows={5}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="border rounded-lg shadow-md p-6">
              <div className="mb-4 text-lg font-semibold">Información del Club</div>
              <div className="space-y-6">

                <div className="flex items-start gap-3">
                  <HiMail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contacto@mesamagica.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiClock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Horarios de Actividades</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Martes y Jueves: 18:00 - 21:00</p>
                      <p>Sábados: 16:00 - 20:00</p>
                      <p>Domingos: Sesiones especiales por evento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg shadow-md p-6">
              <div className="mb-4 text-lg font-semibold">¿Te gustaría participar?</div>
              <p className="text-muted-foreground mb-4">
                En Mesa Mágica siempre estamos buscando nuevos miembros que compartan la pasión por los juegos de mesa. Puedes:
              </p>
              <div className="space-y-2 text-sm">
                <p>• Participar en nuestras sesiones semanales</p>
                <p>• Unirte a torneos y eventos temáticos</p>
                <p>• Proponer juegos para el catálogo</p>
                <p>• Conocer a otros jugadores apasionados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
