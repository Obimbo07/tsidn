// About.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/history">History</Link>
        </li>
        <li>
          <Link to="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
};

export const History = () => {
  return <div>History content goes here.</div>;
};

export const Team = () => {
  return <div>Team content goes here.</div>;
};

const About = () => {
  return (
    <div className="about">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<div>About content goes here.</div>} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </div>
  );
};

export default About;
