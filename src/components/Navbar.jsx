import { Link } from "react-router-dom"
import { useState } from "react"
import { FaDiceD20 } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#921136]/95 backdrop-blur supports-[backdrop-filter]:bg-[#921136]/80">
      <div className="w-full max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <FaDiceD20 className="h-8 w-8 text-[#000000]" />
          <span className="text-xl font-bold text-[#F4A4BB]">Mesa Mágica</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-sm font-medium text-[#F4A4BB] hover:text-[#15B4D4] transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/catalogo"
            className="text-sm font-medium text-[#F4A4BB] hover:text-[#15B4D4] transition-colors"
          >
            Catálogo
          </Link>
          <Link
            to="/contacto"
            className="text-sm font-medium text-[#F4A4BB] hover:text-[#15B4D4] transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[#E94977]/20 focus:outline-none focus:ring-2 focus:ring-[#F4A4BB]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX className="h-5 w-5 text-[#F4A4BB]" /> : <HiMenu className="h-5 w-5 text-[#F4A4BB]" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#921136] border-b md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="text-sm font-medium text-[#F4A4BB] hover:text-[#E94977] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/catalogo"
                className="text-sm font-medium text-[#F4A4BB] hover:text-[#15B4D4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <Link
                to="/contacto"
                className="text-sm font-medium text-[#F4A4BB] hover:text-[#10659E] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
