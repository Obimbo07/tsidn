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

  const Newsletter = (e) => {
    e.preventDefault();
    alert("Hello, you have successfully registerd to our Newsletter. Check your email for futhur details");
  }

  return (
    <div className="footerSection">
      <div className="newsletter-section">
                <h3>Sign up for our Newsletter</h3>
                <form onSubmit={Newsletter}>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
       </div>
      <div className="inner-sctn">
        <div className="contentContainer1">
          <h4>About Tsdn</h4>
          <ul className="about-links">
            <li>
              <Link className="text-white" to="/executive-director">Executive Director</Link>
            </li>
            <li>
              <Link className="text-white" to="/about/mission">Mission</Link>
            </li>
            <li>
              <Link className="text-white" to="/about/whatwedo">What we do</Link>
            </li>
          </ul>
        </div>
        <div className="contentContainer2">
          <h4>Organization Links</h4>
          <ul className="about-links">
            <li>
              <Link className="text-white" to="/transport">TranSafety</Link>
            </li>
            <li>
              <Link className="text-white" to="/Capacity-building">Capacity Building </Link>
            </li>
          </ul>
        </div>
        <div className="contentContainer4">
          <h4 className='icon-text'>Follow Us</h4>
          <div className="icons text-white">
          <a className="text-white" href="https://">Twitter
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a className="text-white" href="https://">Facebook
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="text-white" href="https://">Instagram
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="text-white" href="https://">Flickr
          <FontAwesomeIcon icon={faFlickr} />
          </a>
          <a className="text-white" href="https://">SoundCloud
          <FontAwesomeIcon icon={faSoundcloud} />
          </a>
          <a className="text-white" href="https://">Youtube
          <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className="text-white" href="https://">WhatsApp
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a className="text-white" href="https://">MailChimp
          <FontAwesomeIcon icon={faMailchimp} />
          </a>
          <a className="text-white" href="https://">Telegram
          <FontAwesomeIcon icon={faTelegram} />
          </a>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
                <span className="horizontal-line"></span>
                <span className="copyright"> © 2023 TranSafety Development Network. </span>
                <span className="horizontal-line"></span>
            </div>
    </div>
  );
};
export default Footer;
