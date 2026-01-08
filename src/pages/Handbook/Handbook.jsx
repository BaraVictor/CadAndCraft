import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import HandbookHero from '../../components/HandbookHero/HandbookHero';
import './Handbook.scss';

const Handbook = () => {
  return (
    <div className="handbook-page">
      <Sidebar />
      
      {/* Aici vine designul cu verde și galben */}
      <HandbookHero />
      
      {/* Aici poți adăuga restul conținutului din Handbook (PDF viewer, text, etc.) */}
    </div>
  );
};

export default Handbook;