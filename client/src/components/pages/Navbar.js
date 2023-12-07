import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    { id: 1, text: 'About', url: '/about', dropdown: [ 'Executive Director', 'Mission', 'Our Core Values',] },
    { id: 2, text: 'TSDN Aims', url: '/tsdn-aims', dropdown: ['What We Do']},
    { id: 2, text: 'Themes', url: '/themes', dropdown: ['Transport', 'Road Safety', 'Knowledge Sharing', 'Capacity Building', 'Eco-transport development', 'Human Resource development', 'AGG in transport Sector', 'Research and Development'] },
    { id: 3, text: 'Media', url: '/media', dropdown: ['Press Release', 'Podcasts', 'Videos']},
    { id: 4, text: 'Events', url: '/meetings-and-events', dropdown: ['Meetings And Events', 'Ambush Highlights',]},
  ];
  const toplinks = [
    { id: 1, text: 'Contact us', url: '/contact',},
    { id: 2, text: 'Register', url: '/register', },
  ]
  return (
    
    <>
    <section class="top-nav">
      <div class="topNav-links">
        <ul>
          {toplinks.map((toplink) => (
            <li className="topNav-link">
              <Link to={toplink.url} >{toplink.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <div className="logo-div">
      <span>
        <Link to="#" className="logo-name">
          <img className="logo" src="../../../LOGO.jpg" alt="TSDN logo" />
        </Link>
      </span>
      <div className="adBaneer">
        <span className="ad">
        <img src="../../../ad.png" alt='add banner' />
        </span>
      </div>
    </div>
    <nav>
        <ul className="list-nav">
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
