import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const EcoTransport = () => {
  return (
    <Container className="eco-transport-container">
      <h2 className="mb-4">ECO-Transport Development</h2>
      <Row>
        <Col md={6}>
          <Image src="/eco-transport-image.jpg" alt="Eco-Transport" fluid className="mb-4" />
        </Col>
        <Col md={6}>
          <p>
            ECO-Transport development focuses on promoting environmentally friendly and sustainable transportation solutions. At TSID-NET, we advocate for policies and technologies that reduce emissions, conserve energy, and minimize environmental impact across the transport sector.
          </p>
          <p>
            Through research, education, and partnership initiatives, we support the adoption of alternative fuels, green infrastructure, and eco-friendly vehicle designs. By integrating environmental considerations into transport planning and operations, we aim to mitigate climate change, improve air quality, and protect natural resources for future generations.
          </p>
          <p>
            By promoting ECO-Transport development, we contribute to a cleaner, healthier, and more resilient transportation system that benefits both people and the planet.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default EcoTransport