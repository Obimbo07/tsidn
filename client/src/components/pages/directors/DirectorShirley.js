import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../../Footer';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../styles/directorShirley.css';


const DirectorShirley = () => {
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
          <div md={6} className="intro">
            <Image src="/shirley.jpg" alt="Shirley Cherotich image" className="director-img" fluid />
            <h3>Senior Director Corporate Development and Marketing Communications and a Co-founder TSDN</h3>
          </div>
          <Col md={6} className="content-section">
            <p>
            Shirley is TSDN’s Co-founder and Senior Director of Corporate Development and Marketing Communications, reporting to ED.
            <br />
          Shirley is responsible for TSDN’s strategic partnerships and strategic investing efforts. Since founding TSDN, she has overseen the successful integration of vital technologies and an array of partners from the transport sector and road safety actors. 
          <br />
          Shirley oversees all trainings and education programmes.
          <br />
          As head of the Marketing Communications group, Shirley leads a talented and creative team focused on TSDN’s advertising, internet presence, package design and other consumer-facing marketing.
          <br />
          A graduate of Machakos University. Holds several professional certificates and so skilled in Training and Coaching, Product Development and Marketing, Road Safety Management, Strategic Leadership and Finance management.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};


export default DirectorShirley;
