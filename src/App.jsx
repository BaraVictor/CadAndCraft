import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './styles/main.scss'; // Importăm stilurile globale resetate

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principală */}
        <Route path="/" element={<Home />} />
        
        {/* Exemplu: Dacă vei face o pagină separată de înscriere */}
        {/* <Route path="/inscriere" element={<Register />} /> */}
        
        {/* Ruta pentru 404 (orice alt link greșit) */}
        <Route path="*" element={<div>Pagina nu a fost găsită</div>} />
      </Routes>
    </Router>
  );
}

export default App;