import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './FAQ.scss';

const faqData = [
  {
    id: 1,
    question: "Cine poate participa la CAD&CRAFT?",
    answer: "Competiția este deschisă tuturor studenților pasionați de proiectare CAD și design de produs, indiferent de anul de studiu sau facultate. Echipele pot fi formate din 2-4 membri."
  },
  {
    id: 2,
    question: "Care este tema ediției de anul acesta?",
    answer: "Tema va fi anunțată oficial în ziua deschiderii evenimentului. Totuși, pregătiți-vă pentru provocări legate de sustenabilitate și inovație tehnologică."
  },
  {
    id: 3,
    question: "Am nevoie de experiență avansată în CAD?",
    answer: "Nu neapărat! Căutăm creativitate și ingeniozitate. Deși cunoștințele tehnice ajută, ideea și execuția practică sunt la fel de importante."
  },
  {
    id: 4,
    question: "Ce echipamente trebuie să aducem?",
    answer: "Fiecare echipă trebuie să vină cu propriile laptopuri. Noi vom asigura software-ul necesar (dacă este cazul), internetul, cafeaua și energia!"
  },
  {
    id: 5,
    question: "Există o taxă de înscriere?",
    answer: "Nu, participarea la CAD&CRAFT este complet gratuită. Tot ce trebuie să investești este timp și pasiune."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} className={`faq-section ${isVisible ? 'visible' : ''}`}>
      <div className="faq-container">
        
        <h2 className="faq-title">
          Frequently Asked <span className="highlight">Questions</span>
        </h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={item.id} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
              // AICI ESTE MAGIA: Delay calculat pe baza indexului (0s, 0.1s, 0.2s...)
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="faq-header">
                <h3>{item.question}</h3>
                <IoIosArrowDown className="icon" />
              </div>
              
              <div className="faq-body">
                <div className="faq-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;