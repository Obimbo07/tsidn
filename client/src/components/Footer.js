import React from 'react';
import { Link } from 'react-router-dom';
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
import './styles/Footer.css';

const Footer = () => {

    const Newsletter = (e) => {
        e.preventDefault();
        alert("Hello, you have successfully registered to our Newsletter. Check your email for further details");
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
                <div className="map-container">
                      <img src="worldmap.png" alt="Map section" />
                      <p>Nairobi, Kenya</p>
                      <p>Mail: admin@tsidn.org</p>
                </div>
                <div className="contentContainer1">
                    <h6>ABOUT TSDN</h6>
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
                    <h6>ORGANIZATION LINKS</h6>
                    <ul className="about-links">
                        <li>
                            <Link className="text-white" to="/transport">TranSafety development</Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/Capacity-building">Capacity Building</Link>
                        </li>
                        <li>
                            <Link className="text-white" to="/Capacity-building">Eco-transport</Link>
                        </li>
                    </ul>
                </div>
                <div className="contentContainer4">
                    <h6 className='icon-text'>FOLLOW US</h6>
                    <div className="icons text-white">
                        <a className="text-white" href="https://twitter.com/tsdn">
                            Twitter <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="text-white" href="https://web.facebook.com/profile.php?id=61558983545764">
                            Facebook <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="text-white" href="https://instagram.com/tsdn_network">
                            Instagram <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="text-white" href="https://flickr.com">
                            Flickr <FontAwesomeIcon icon={faFlickr} />
                        </a>
                        <a className="text-white" href="https://on.soundcloud.com/V5dSLU2boZpzKjkD8">
                            SoundCloud <FontAwesomeIcon icon={faSoundcloud} />
                        </a>
                        <a className="text-white" href="https://www.youtube.com/@tsidn">
                            Youtube <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a className="text-white" href="https://whatsapp.com/channel/0029VaYwqsb6mYPIHhofLG37">
                            WhatsApp <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <span className="horizontal-line"></span>
                <span className="copyright">© 2024 TranSafety Development Network</span>
                <span className="horizontal-line"></span>
            </div>
        </div>
    );
};

export default Footer;
