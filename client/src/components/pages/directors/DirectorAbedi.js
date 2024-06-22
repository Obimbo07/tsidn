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
        
        <p>
        <h3>Profession</h3>
         &gt;&gt; He is a trained trainer of trainers and a drivers' trainer on Advanced Safe Defensive Training Systems, from Smith Systems International in UK since 2013 
         to date where he conducts his refresher course every two years.
         <br />
        &gt;&gt; He is a member of NTSA  Road Safety commitee.
         <br />
        &gt;&gt; Mr Abedi helps in the Curriculum development team in NITA and also members of KEBS where he helps in developing standards.
         <br />
         &gt;&gt; He is an authorized trainer of PIEA where he trains oil marketers with its transporters on safe products handling and transportation
         </p>
         
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DirectorAbedi;
