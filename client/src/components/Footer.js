/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faXTwitter, 
    faFacebook, 
    faInstagram, 
    faFlickr, 
    faSoundcloud, 
    faYoutube, 
    faWhatsapp, 
    faMailchimp, 
    faTelegram, } from '@fortawesome/free-brands-svg-icons';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="inner-sctn">
        <div className="contentContainer1">
          <h4>ABOUT TSDN</h4>
          <ul className="about-links">
            <li>
              <Link to="/about/executive-director">Executive Director</Link>
            </li>
            <li>
              <Link to="/about/mission">Mission</Link>
            </li>
            <li>
              <Link to="/about/whatwedo">What we do</Link>
            </li>
          </ul>
        </div>
        <div className="contentContainer2">
          <h4>ORGANIZATION LINKS</h4>
          <ul>
            <li>
              <Link to="/transport">Transport</Link>
            </li>
            <li>
              <Link to="/Capacity-building">Capacity Building </Link>
            </li>
          </ul>
        </div>
        <div className="contentContainer3">
          <h4>Some Content</h4>
        </div>
        <div className="contentContainer4">
          <span>Social icons</span>
          <div className="icons">
          <a href="#">
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faFlickr} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faSoundcloud} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faMailchimp} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faTelegram} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
