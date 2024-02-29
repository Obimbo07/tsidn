import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Component = () => {
  const links = [
    { id: 1, text: 'About', url: '/about', dropdown: ['Executives', 'Mission', 'Our Core Values',] },
    { id: 2, text: 'TSDN Aims', url: '/tsdn-aims', dropdown: ['What We Do']},
    { id: 3, text: 'Themes', url: '/themes', dropdown: ['Transport safety and development',  'Expert knowledge sharing in transport safety development', 'Capacity building and human resource Development in transport', 'Eco-transport development', 'Catalyzing financing for road transport safety improvement programmes', 'Advocacy for good governance in transport safety and development', 'Research and Development in transport'] },
    { id: 4, text: 'Media', url: '/media', dropdown: ['Press Release', 'Podcasts', 'Videos']},
    { id: 5, text: 'Events', url: '/meetings-and-events', dropdown: ['Meetings And Events', 'Ambush Highlights',]},
  ];

  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            {links.map((toplink) => (
              <li className="nav-item" key={toplink.id}>
                <Link className="nav-link" to={toplink.url}>{toplink.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Middle Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="../../../LogoFinal.svg" alt="TSDN logo" />
            TSDN
          </Link>
          <div className="Search">
            {/* Include Search component here */}
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            {links.map((link) => (
              <li className="nav-item dropdown" key={link.id}>
                <Link className="nav-link dropdown-toggle" to={link.url} id={`navbarDropdown${link.id}`} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {link.text}
                </Link>
                <div className="dropdown-menu" aria-labelledby={`navbarDropdown${link.id}`}>
                  {link.dropdown && link.dropdown.map((item, index) => (
                    <Link className="dropdown-item" key={index} to={`${link.url}/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Component;
