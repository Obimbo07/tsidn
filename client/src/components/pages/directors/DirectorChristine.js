import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../../Footer';
import { Container, Row, Col, Image } from 'react-bootstrap'

const DirectorChristine = () => {
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
            <Image src="/christine.jpg" alt="Christine Ajulu" className="innovation-officer" fluid />
            <h2>Senior Director Occupational Health, Environment, Policy, and Social Initiatives.</h2>
          </div>
          <Col md={6} className="content-section">
            <p>
            Christine Kajulu is a Senior Director Occupational Health, Environment, Policy, and Social Initiatives at TSDN reporting to the Executive Director. Christine oversees TSDN’s efforts to build capacity in occupational health initiatives, Mental health initiatives, education policy programmes in Road Transport Safety, addressing road transport environmental impacts through promoting sustainable transport - e-mobility and related product accessibility.
            </p>
            <ul >
              <h5>Before tsdn she has the following qualifications: </h5>
              <li>She holds a Master’s Degree in Occupational Health focusing on road safety.</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DirectorChristine;