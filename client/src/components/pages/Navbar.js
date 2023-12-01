import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    { id: 1, text: 'About', url: '/about', dropdown: [ 'Executive Director', 'Mission', 'Core Values', 'TSDN Aims', 'What we do', 'How to get Involved'] },
    { id: 2, text: 'Themes', url: '/themes', dropdown: ['Transport', 'Road Safety', 'Knowledge Sharing', 'Capacity Building', 'Eco-transport development', 'Human Resource development', 'AGG in transport Sector', 'Research and Development'] },
    { id: 3, text: 'Media', url: '/media', dropdown: ['Press Release', 'Podcasts', 'Videos']},
  ];

  return (
    <nav>
      <div className="logo">
        <span>
          <Link to="/" className="logo-name">
          <img src="../../../LOGO.jpg" alt="logo" />
          </Link>
        </span>
      </div>
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
    </nav>
  );
};

export default Navbar;
