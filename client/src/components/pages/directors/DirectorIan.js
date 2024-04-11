import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../../Footer';
import { Container, Row, Image } from 'react-bootstrap';
import '../../styles/DirectorAustin.css';

const DirectorIan = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll('.content-section p');

    const handleScroll = () => {
      paragraphs.forEach(paragraph => {
        const paragraphTop = paragraph.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (paragraphTop < windowHeight * 0.75) {
          paragraph.classList.add('show');
        } else {
          paragraph.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="director-container">
      <Navbar />
      <Container>
        <Row className="text-section">
          <div className="intro">
            <Image src="/ian.jpeg" alt="Austin" className="innovation-officer" fluid /> {/* Use fluid to make image responsive */}
            <h2>Senior Director Services TSDN</h2>
          </div>
          <Row className="content-section">
          <p>Ian Kipchumba  is TSDN’s senior  Director  of Services, reporting to  the ED.</p>
            <p>
            Ian oversees the full range of TSDNs services, including TSDN News, TSDN Podcasts, the TSDN TV app, and TSDN TV, as well as TSDN Pay, Social media Apps, Search Ads, TSDN ’s iCloud services, and TSDN’s creativity apps.  
            </p>
            <p>
            Ian’s team has an excellent track record of building and strengthening world-class services that meet and exceed the high expectations of TSDN’s Network of partners, and offer creators and storytellers the opportunity to bring their creative visions to people around the world.
            </p>
            
            <p> Ian leads a large organization of amazing people.  He is instrumental in creating the TSDN online app store and the online Road safety training classes, animations.  

Ian earned a Diploma and professional certificates in Film production from PCEA Rowlege and bachelor’s degree Computer University of Nairobi. 
</p>
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DirectorIan;
