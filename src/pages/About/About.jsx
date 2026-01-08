import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import BigAbout from '../../components/BigAbout/BigAbout';
import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <Sidebar />
      
      {/* Aici vine designul cu verde și galben */}
      <BigAbout />
      
      {/* Aici poți adăuga restul conținutului din Handbook (PDF viewer, text, etc.) */}
    </div>
  );
};

export default About;