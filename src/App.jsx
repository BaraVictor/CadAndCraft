import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Handbook from './pages/Handbook/Handbook';
import Footer from './components/Footer/Footer';
import './styles/main.scss'; // Importăm stilurile globale resetate

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta principală */}
        <Route path="/" element={<Home />} />
        
        {/* Exemplu: Dacă vei face o pagină separată de înscriere */}
        {/* <Route path="/inscriere" element={<Register />} /> */}
        <Route path="/about" element={<About />} />
        
        {/* Ruta pentru pagina separată Handbook */}
          <Route path="/handbook" element={<Handbook />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;