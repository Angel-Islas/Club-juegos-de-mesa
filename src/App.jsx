import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CatalogoPage from './pages/CatalogoPage';
import DetalleJuegoPage from './pages/DetalleJuegoPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/juego/:id" element={<DetalleJuegoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
