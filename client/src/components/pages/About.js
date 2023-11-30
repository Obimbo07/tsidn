// About.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import History from './History';
import Sidebar from './Sidebar';
import Aims from './Aims';
import '../styles/Sidebar.css';

const About = () => {
  return (
    <div className="about">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<History />} />
          <Route path="/history" element={<History />} />
          <Route path="/aims" element={<Aims />} />
        </Routes>
      </div>
    </div>
  );
};

export default About;
