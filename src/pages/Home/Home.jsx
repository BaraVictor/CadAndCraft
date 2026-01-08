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
      
      <main>
        <Hero />
        
        <Countdown />
        
        <Showcase />
        
        {/* Secțiunea Verde "Despre" */}
        <About />
        
        <FAQ />
      </main>
      
    </div>
  );
};

export default Home;