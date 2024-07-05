'use client';

import Link from "next/link";
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

const socialTwitter ="https://twitter.com/tsdn";
const socialFacebook ="https://web.facebook.com/profile.php?id=61558983545764";
const socialInstagram = "https://instagram.com/tsdn_network";
const socialFlickr = "https://flickr.com";
const socialSoundCloud = "https://on.soundcloud.com/V5dSLU2boZpzKjkD8";
const socialYoutube = "https://www.youtube.com/@tsidn";
const socialWhatsApp = "https://whatsapp.com/channel/0029VaYwqsb6mYPIHhofLG37";

const Footer = () => {

    const handlenewsletter = (e) => {
        e.preventDefault();
        alert("Hello, you have successfully registered to our Newsletter. Check your email for further details");
    }

    return (
        <div className="footerSection bg-gray-900 font-sans">
            <div className="newsletter-section p-10">
                <h3 className="text-center text-white text-5xl  font-sans">Sign up for our Newsletter</h3>
                <form onSubmit={handlenewsletter} className="gap-2 mt-10 flex justify-center flex-wrap">
                    <input type="email" className="w-fit p-2" placeholder="Enter your email" />
                    <button type="submit" className="bg-yellow-600 rounded-full p-2 hover:bg-yellow-400">Subscribe</button>
                </form>
            </div>
            <div className="inner-sctn md:flex md:justify-around">
                <div className="map-container text-white text-center flex justify-center flex-row md:flex-col">
                      <h2 className="text-white text-5xl text-center font-bold p-2">Contact us</h2>
                      <div className="flex">
                        <img src="worldmap.png" alt="Map-image-section" />
                        <span>
                            <p>P.O BOX 557, 323</p>
                            <p>Nairobi, Kenya</p>
                            <p>Mail: admin@tsidn.org</p>
                        </span>
                      </div>
                      
                </div>
                <div className="contentContainer1  text-white text-center flex justify-center flex-col">
                    <h6 className="text-white text-5xl font-bold p-8">ABOUT TSDN</h6>
                    <ul className="about-links ">
                        <li>
                            <Link className="text-white " href="/executive-director">Executive Director</Link>
                        </li>
                        <li>
                            <Link className="text-white" href="/about/mission">Mission</Link>
                        </li>
                        <li>
                            <Link className="text-white" href="/about/whatwedo">What we do</Link>
                        </li>
                    </ul>
                </div>
                <div className="contentContainer2 text-white text-center flex justify-center flex-col">
                    <h6 className="text-white text-5xl font-bold p-8">ORGANIZATION LINKS</h6>
                    <ul className="about-links">
                        <li>
                            <Link className="text-white" href="/transport">TranSafety development</Link>
                        </li>
                        <li>
                            <Link className="text-white" href="/Capacity-building">Capacity Building</Link>
                        </li>
                        <li>
                            <Link className="text-white" href="/eco-transport">Eco-transport</Link>
                        </li>
                    </ul>
                </div>
                <div className="contentContainer4 text-white text-  flex flex-col">
                    <h6 className='icon-text text-white text-5xl font-bold p-8'>FOLLOW US</h6>
                    <div className="icons text-white text-5xl flex justify-around flex-wrap md:gap-4 md:flex-wrap">
                        <Link className="text-white bg-slate-900 p-4" href={socialTwitter}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link className="text-white bg-blue-700 p-4" href={socialFacebook}>
                             <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link className="text-white bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 p-4" href={socialInstagram}>
                             <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link className="text-white bg-gradient-to-r from-blue-600 to-red-300 p-4" href={socialFlickr}>
                             <FontAwesomeIcon icon={faFlickr} />
                        </Link>
                        <Link className="text-white bg-orange-600 p-4" href={socialSoundCloud}>
                             <FontAwesomeIcon icon={faSoundcloud} />
                        </Link>
                        <Link className="text-white bg-red-800 p-4" href={socialYoutube}>
                             <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                        <Link className="text-white bg-green-500 p-4" href={socialWhatsApp}>
                             <FontAwesomeIcon icon={faWhatsapp} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bottom-footer text-white pt-6 pb-2 w-full flex items-center justify-between">
                <span className="horizontal-line h-1 w-1/6"></span>
                <span className="text-2xl font-bold">© 2024 TranSafety Development Network</span>
                <span className="horizontal-line h-1 w-1/6"></span>
            </div>

        </div>
    );
};

export default Footer;
