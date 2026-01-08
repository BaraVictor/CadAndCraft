import React from 'react';
import './HandbookHero.scss';
// We need the logo for the drop animation. 
// Adjust this path if your logo is elsewhere (e.g., inside assets/images or just assets)
import LogoSVG from '../../assets/icons/logo.svg'; 

const HandbookHero = () => {
  return (
    <section className="hero">
      
      {/* 1. WRAPPER PRINCIPAL (Pentru efectul de Shake) */}
      <div className="hero__wrapper">
        
        {/* 2. BACKGROUND LAYER (Imaginea de fundal cu Zoom) */}
        <div className="hero__full-image-layer">
           <div className="bg-image"></div>
           {/* Overlay opțional pentru contrast, dacă e nevoie */}
           <div className="overlay"></div>
        </div>

        {/* 3. LOGO INTRO LAYER (Animatia de Drop & Expand) */}
        <div className="hero__intro-logo">
           {/* Folosim imaginea logo importată */}
           <img src={LogoSVG} alt="Intro Logo" />
        </div>

        {/* 4. CONTENT LAYER (Ceea ce rămâne pe ecran) */}
        <div className="hero__content">
            
            {/* TITLU */}
            <h1 className="hero__title">
              CAD<span className="text-highlight">&</span>CRAFT <br />
              HANDBOOK
            </h1>
            
            {/* SUBTITLU */}
            <p className="hero__description">
              Inainte sa te inscrii la acest concurs iti recomandam <br />
              sa citesti regulamentul.
            </p>

            {/* BUTOANE */}
            <div className="hero__actions">
              
              <button className="btn--download">
                Download HANDBOOK 
                <span className="icon-circle">↗</span>
              </button>
              
              <button className="btn--signup">
                Inscrie-te
              </button>

            </div>
        </div>

      </div>
    </section>
  );
};

export default HandbookHero;