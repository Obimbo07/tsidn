import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ResearchAndDevelopment = () => {
  return (
    <Container className="research-container">
      <h2 className="mb-4">Research and Development in Transport</h2>
      <Row>
        <Col md={6}>
          <Image src="/research-image.jpg" alt="Research" fluid className="mb-4" />
        </Col>
        <Col md={6}>
          <p>
            Research and development play a critical role in advancing innovation and improving safety in the transport sector. At TSDN, we support and conduct research projects that address key challenges and opportunities in road transport, including traffic management, vehicle design, and behavioral analysis.
          </p>
          <p>
            Through partnerships with academic institutions, industry experts, and government agencies, we collaborate on studies, pilot projects, and technology demonstrations to generate evidence-based solutions and best practices.
          </p>
          <p>
            By fostering a culture of inquiry and experimentation, we aim to drive continuous improvement and adaptation in transportation systems, leading to safer, more efficient, and sustainable mobility for all.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ResearchAndDevelopment;
