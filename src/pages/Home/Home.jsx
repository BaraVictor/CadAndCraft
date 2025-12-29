import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Countdown from '../../components/Countdown/Countdown';
import About from '../../components/About/About';
import Showcase from '../../components/Showcase/Showcase'; // Secțiunea "Editia I"
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

import './Home.scss';

const Home = () => {
  return (
    <div className="page-home">
      {/* Navbar poate sta aici sau în App.js dacă e global */}
      <Navbar />
      
      <main>
        <Hero />
        
        <Countdown />
        
        <Showcase />
        
        {/* Secțiunea Verde "Despre" */}
        <About />
        
        <FAQ />
      </main>

      <Footer />
      
    </div>
  );
};

export default Home;