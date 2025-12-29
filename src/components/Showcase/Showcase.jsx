import React, { useState, useEffect, useRef } from 'react';
import { BsArrowRightCircle, BsArrowLeftCircle, BsArrowRight } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import './Showcase.scss';

// --- INLOCUIESTE CU IMAGINILE TALE REALE ---
// Exemple de importuri:
// Importă imaginile tale aici
import teamImage1 from '../../assets/images/team1.jpg'; // Înlocuiește cu pozele mici
import bigShowcaseImage from '../../assets/images/showcase-main.png'; // Poza mare din dreapta
import bigShowcaseImage1 from '../../assets/images/showcase-main1.jpg';

// --- DATE DEMO (Placeholder-uri - Înlocuiește cu datele tale) ---
const teamMembers = [
  { id: 1, name: 'SQUAD CAL', img: teamImage1 },
  { id: 2, name: 'SQUAD CAL', img: teamImage1 },
  { id: 3, name: 'SQUAD CAL', img: teamImage1 },
  { id: 4, name: 'SQUAD CAL', img: teamImage1 },
  { id: 5, name: 'SQUAD CAL', img: teamImage1 },
];

const mainImages = [
  { id: 1, src: bigShowcaseImage, alt: 'Proiect 1' },
  { id: 2, src: bigShowcaseImage1, alt: 'Proiect 2' },
  { id: 3, src: bigShowcaseImage, alt: 'Proiect 3' },
  { id: 4, src: bigShowcaseImage1, alt: 'Proiect 4' },
];

const Showcase = () => {
  // State pentru galeria stânga
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const cardsToShow = 3; 
  const maxTeamIndex = teamMembers.length - cardsToShow;

  const nextTeamSlide = () => { setCurrentTeamIndex(prev => (prev >= maxTeamIndex ? 0 : prev + 1)); };
  const prevTeamSlide = () => { setCurrentTeamIndex(prev => (prev <= 0 ? maxTeamIndex : prev - 1)); };

  // State pentru slider dreapta
  const [mainSlideIndex, setMainSlideIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  function resetTimeout() { if (timeoutRef.current) clearTimeout(timeoutRef.current); }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setMainSlideIndex((prevIndex) => prevIndex === mainImages.length - 1 ? 0 : prevIndex + 1);
    }, delay);
    return () => resetTimeout();
  }, [mainSlideIndex]);


  // --- LOGICĂ ANIMATIE SCROLL ---
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Declanșăm când 20% din secțiune e vizibilă
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);


  return (
    // Adăugăm ref-ul și clasa condițională
    <section ref={sectionRef} className={`showcase ${isVisible ? 'showcase--visible' : ''}`}>
      <div className="showcase__wrapper">
        
        {/* --- COLOANA STÂNGA --- */}
        <div className="showcase__left">
            <h2 className="showcase__title">
                CAD<span className="stroke-text">&</span>CRAFT <br />
                <span className="subtitle">Editia I</span>
            </h2>

            <div className="showcase__description-box">
                <FaQuoteLeft className="quote-icon" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum viverra dignissim mauris ac tristique.
                </p>
            </div>

            <div className="showcase__gallery">
                <div className="gallery-viewport">
                    <div 
                        className="gallery-track"
                        style={{ transform: `translateX(-${currentTeamIndex * (140 + 20)}px)` }}
                    >
                        {teamMembers.map(member => (
                            <div key={member.id} className="gallery-card">
                                <img src={member.img} alt={member.name} />
                                <div className="card-badge">{member.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gallery-controls">
                    <button className="control-btn" onClick={prevTeamSlide}><BsArrowLeftCircle /></button>
                    <button className="control-btn" onClick={nextTeamSlide}><BsArrowRightCircle /></button>
                </div>
            </div>
        </div>

        {/* --- COLOANA DREAPTA --- */}
        <div className="showcase__right">
            <div className="image-container">
                {mainImages.map((image, index) => (
                    <img 
                        key={image.id}
                        src={image.src} 
                        alt={image.alt} 
                        className={`main-image ${index === mainSlideIndex ? 'active' : ''}`} 
                    />
                ))}
                
                <button className="btn-see-more">
                    VEZI MAI MULTE <BsArrowRight className="icon" />
                </button>

                <div className="slider-progress-bar">
                    {mainImages.map((_, index) => (
                        <div 
                            key={index} 
                            className={`progress-indicator ${index === mainSlideIndex ? 'active' : ''}`}
                            onClick={() => setMainSlideIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;