import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faFlickr,
  faSoundcloud,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/authSlice';
import Search from './Search';
import '../styles/navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log( user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const links = [
    { id: 1, text: 'About', url: '/about', dropdown: ['Executives', 'Mission', 'Our Core Values'] },
    { id: 2, text: 'TSDN Aims', url: '/tsdn-aims', dropdown: ['What We Do'] },
    { id: 3, text: 'Themes', url: '/themes', dropdown: ['Transport safety and development', 'Expert knowledge sharing in transport safety development', 'Capacity building and human resource Development in transport', 'Eco-transport development', 'Catalyzing financing for road transport safety improvement programmes', 'Advocacy for good governance in transport safety and development', 'Research and Development in transport'] },
    { id: 4, text: 'Media', url: '/media', dropdown: ['Press Release', 'Podcasts', 'Videos'] },
    { id: 5, text: 'Events', url: '/meetings-and-events', dropdown: ['Meetings And Events', 'Ambush Highlights'] },
  ];

  const toplinks = [
    { id: 1, text: 'Contact us', url: '/contact' },
    { id: 2, text: user ? 'Logout' : 'Register', url: user ? '#' : '/register' },
    { id: 3, text: user ? 'Profile' : 'Login', url: user ? '/profile' : '/login' },
  ];

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/');
  };

  return (
    <>
      <section className="top-nav">
        <ul className="inline-flex gap-10">
          {toplinks.map((toplink) => (
            <li className="topNav-link" key={toplink.id}>
              {toplink.text === 'Logout' ? (
                <button onClick={handleLogout}>{toplink.text}</button>
              ) : (
                <Link to={toplink.url} onClick={closeMenu}>{toplink.text}</Link>
              )}
            </li>
          ))}
        </ul>
        <ul className="top-social-link">
          <a href="mailto:admin@tsdn.co.ke" className='mail-top-nav'>admin@tsdn.co.ke</a>
          <a className="text-white" href="https://twitter.com/tsdn">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="text-white" href="https://web.facebook.com/profile.php?id=61558983545764">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="text-white" href="https://instagram.com/tsdn_network">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="text-white" href="https://flickr.com">
            <FontAwesomeIcon icon={faFlickr} />
          </a>
          <a className="text-white" href="https://on.soundcloud.com/V5dSLU2boZpzKjkD8">
            <FontAwesomeIcon icon={faSoundcloud} />
          </a>
          <a className="text-white" href="https://www.youtube.com/@tsidn">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className="text-white" href="https://whatsapp.com/channel/0029VaYwqsb6mYPIHhofLG37">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </ul>
      </section>
      <div className="logo-div">
        <span className="logo-content">
          <Link to="/" className="logo-name">
            <img className="logo" src="../../../LogoFinal.svg" alt="TSDN logo" />
          </Link>
        </span>
        <Search className="search" />
        <span>
          <img className="ad" src="../../../ad.png" alt='add banner' />
        </span>
      </div>
      <nav>
        <button
          className="hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <ul className={`list-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <span className="listclose" onClick={closeMenu}>X</span>
          {links.map((link, index) => (
            <li key={link.id}>
              {link.dropdown ? (
                <div className="dropdown">
                  <Link to={link.url} onClick={closeMenu}>{link.text}</Link>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(index)}>▼</button>
                  <ul className={`dropdown-content ${dropdownOpen === index ? 'open' : ''}`}>
                    {link.dropdown.map((item, idx) => (
                      <li key={idx}>
                        <Link to={`${link.url}/${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeMenu}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={link.url} onClick={closeMenu}>{link.text}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
