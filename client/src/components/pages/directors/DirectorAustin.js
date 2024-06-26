import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../../Footer';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../styles/DirectorAustin.css'; 

const DirectorAustin = () => {
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
            <Image src="/MrObimbo.jpg" alt="Austin" className="innovation-officer" fluid /> {/* Use fluid to make image responsive */}
            <h2>Director Software Engineering, Innovation and Research Division</h2>
          </div>
          <Col md={6} className="content-section">
            <p>
              Austine is TSDN’s senior Director of Software Engineering, Innovation and Transport Research Division reporting to Executive Director. 
              Austine oversees the development and implementation of various innovative applications including online programmes and engagement platforms. 
              His teams are responsible for delivering the software at the heart of TSDN’s innovative programmes, including the user interface, applications and frameworks. 
              The Division promotes the application of innovation, technology, and research for greater aid effectiveness within TSDN and with our partners both locally and internationally. 
              He also played a key role in developing fleet management iSafety suite of applications and partner support teams.
            </p>
            <p>
              Prior to his joining TSDN, Austine led a community of hybrid software engineers improving our daily lives for a better future. 
              He worked voluntarily as a student Mentor at Microverse, an online program for remote software engineers.
            </p>
            <p>
              Austine is currently undertaking his Bachelor's degree in Information Technology from the Technical University of Mombasa. 
              He has also earned certification as a Data analysts helping him make data-driven impacting positive company growth.
            </p>
            <p> <em className="austs-quote">We go down to implement solutions and provide technical result-oriented 
            support to the company, impacting growth and development. 
            The focus is to provide data-driven decisions that help effectively 
            enhance the company's technological vector, improving the agency's
             flow. -- Austin Obimbo</em> </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DirectorAustin;
