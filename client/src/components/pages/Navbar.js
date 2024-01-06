import React, { useState } from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    { id: 1, text: 'About', url: '/about', dropdown: [ 'Executive Director','Director Christine', 'Director Ian', 'DirectorAbedi', 'Chief Innovation Officer', 'Mission', 'Our Core Values',] },
    { id: 2, text: 'TSDN Aims', url: '/tsdn-aims', dropdown: ['What We Do']},
    { id: 3, text: 'Themes', url: '/themes', dropdown: ['Transport', 'Road Safety', 'Knowledge Sharing', 'Capacity Building', 'Eco-transport development', 'Human Resource development', 'AGG in transport Sector', 'Research and Development'] },
    { id: 4, text: 'Media', url: '/media', dropdown: ['Press Release', 'Podcasts', 'Videos']},
    { id: 5, text: 'Events', url: '/meetings-and-events', dropdown: ['Meetings And Events', 'Ambush Highlights',]},
  ];
  const toplinks = [
    { id: 1, text: 'Contact us', url: '/contact',},
    { id: 2, text: 'Register', url: '/register', },
  ]

  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  return (
    
    <>
    <section className="top-nav">
      <div className="topNav-links">
        <ul>
          {toplinks.map((toplink) => (
            <li className="topNav-link" key={toplink.id}>
              <Link to={toplink.url} >{toplink.text}</Link>
            </li>
          ))}
        </ul>
        <span>
        <img className="ad" src="../../../ad.png" alt='add banner' />
        </span>
      </div>
    </section>
    <div className="logo-div">
      <span className="logo-content">
        <Link to="/" className="logo-name">
          <img className="logo" src="../../../LogoFinal.svg" alt="TSDN logo" />
        </Link>
        <h1>TSDN</h1>
      </span>
      <div className="Search">
        <Search />
      </div>
    </div>
    
    <nav>
    <button
        className="hamburger-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>
        <ul className={`list-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              {link.dropdown ? (
                <div className="dropdown">
                  <Link to={link.url}>{link.text}</Link>
                  <ul className="dropdown-content">
                    {link.dropdown.map((item, index) => (
                      <li key={index}>
                        <Link to={`${link.url}/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={link.url}>{link.text}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav></>
  );
};

export default Navbar;
