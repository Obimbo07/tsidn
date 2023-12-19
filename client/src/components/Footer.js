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
        <div className="contentContainer4">
          <span>Social icons</span>
          <div className="icons">
          <a href="https://"> Twitter
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://"> Facebook
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://"> Instagram
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://"> Flickr
          <FontAwesomeIcon icon={faFlickr} />
          </a>
          <a href="https://"> SoundCloud
          <FontAwesomeIcon icon={faSoundcloud} />
          </a>
          <a href="https://"> Youtube
          <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://"> WhatsApp
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://"> MailChimp
          <FontAwesomeIcon icon={faMailchimp} />
          </a>
          <a href="https://"> Telegram
          <FontAwesomeIcon icon={faTelegram} />
          </a>
          </div>
          <div className="newsletter" onSubmit={(e) => Newsletter(e)}>
          <form className="get-newsletter">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Submit</button>
          </form>
        </div>
        </div>
      </div>
      <div className="bottom-footer">
       <span className="copyright"> © 2023 TranSafety Development Network. </span>
       </div>
    </div>
  );
};
export default Footer;
