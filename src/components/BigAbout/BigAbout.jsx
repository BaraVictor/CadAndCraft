import React from 'react';
import './BigAbout.scss';

const BigAbout = () => {
  return (
    <section className="big-about" id="about">
      
      {/* 1. BACKGROUND PATTERN LAYER */}
      <div className="big-about__pattern"></div>

      {/* 2. CONTENT LAYER */}
      <div className="big-about__content">
        
        {/* Titlu Principal */}
        <h1 className="big-about__title animate-text delay-1">
          About CAD&CRAFT
        </h1>

        {/* Subtitlu */}
        <h2 className="big-about__subtitle animate-text delay-2">
          Ce este CAD&CRAFT?
        </h2>

        {/* Paragrafe Text */}
        <div className="big-about__text-block animate-text delay-3">
          <p>
            CAD&Craft este un eveniment de tip CADATHON, inspirat de formatul Hackathon-urilor, 
            care se concentrează pe aplicarea cunoștințelor de proiectare pentru a rezolva o temă prestabilită. 
            Participanții sunt provocați să își folosească creativitatea în proiectare asistată pe calculator 
            pentru a dezvolta soluții inovative și eficiente, într-un cadru colaborativ și competitiv.
          </p>

          <p>
            Evenimentul, ce implică o competiție intensă, invită studenții pasionați de inginerie și 
            proiectare asistată de calculator să colaboreze și să își dezvolte abilitățile practice 
            în modelarea 3D a unei piese folosind platforma Onshape sau alt software CAD.
          </p>

          <p>
            Participanții își pot pune la încercare cunoștințele tehnice în cadrul unei provocări captivante 
            ce presupune transformarea ideilor în realitate. Concurenții vor fi împărțiți în echipe, 
            în cadrul unui maraton de 24 de ore.
          </p>

          <p>
            Tema proiectului va fi dezvăluită la începutul evenimentului, asigurând astfel o provocare echitabilă 
            pentru toți participanții și stimulându-le capacitatea de adaptare și găsirea unor soluții îndrăznețe.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BigAbout;