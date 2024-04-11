import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../../Footer';
import { Container, Row, Image } from 'react-bootstrap';

const DirectorAbedi = () => {
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
            <Image src="/DrAbedi.jpg" alt="Austin" className="innovation-officer" fluid /> {/* Use fluid to make image responsive */}
            <h2>Director and Consel</h2>
          </div>
          <Row className="content-section">
        <p>Abedi Amakobe is among the directors consel reporting to  the ED with over 25 years in transport industry.</p>
      
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DirectorAbedi;
