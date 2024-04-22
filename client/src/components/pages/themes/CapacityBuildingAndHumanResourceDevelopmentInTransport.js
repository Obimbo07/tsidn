import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const CapacityBuildingAndHumanResourceDevelopmentInTransport = () => {
  return (
    <Container className="capacity-building-container">
      <h2 className="mb-4">Capacity Building and Human Resource Development in Transport</h2>
      <Row>
        <Col md={6}>
          <Image src="/capacity-building-image.jpg" alt="Capacity Building" fluid className="mb-4" />
        </Col>
        <Col md={6}>
          <p>
            Capacity building is essential for creating a skilled workforce and effective transportation systems. At TSDN, we offer training programs, workshops, and mentorship opportunities to enhance the capabilities of individuals and organizations in the transport sector.
          </p>
          <p>
            Our focus is on developing technical expertise, leadership skills, and organizational capacity to address the complex challenges facing the transportation industry. We collaborate with educational institutions, industry experts, and government agencies to design comprehensive training programs tailored to the needs of our stakeholders.
          </p>
          <p>
            Through continuous learning and professional development, we aim to build a resilient and adaptable workforce capable of driving innovation and sustainability in transport safety and development.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CapacityBuildingAndHumanResourceDevelopmentInTransport;
