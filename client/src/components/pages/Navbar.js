import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'Our Work', url: '/about' },
    { id: 3, text: 'Themes', url: '/themes', dropdown: ['Transport', 'Trainings', 'Seminars'] },
    { id: 4, text: 'Media', url: '/media' },
  ];

  return (
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
    </nav>
  );
};

export default Navbar;
