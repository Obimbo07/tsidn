import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Transport = () => {
  return (
    <Container className="transport-container">
      <h2 className="mb-4">Transport for the Company</h2>
      <Row>
        <Col md={6}>
          <Image  alt="Transport" fluid className="mb-4" />
        </Col>
        <Col md={6}>
          <p>
            Efficient and reliable transport is the lifeblood of our organization. At TSID-NET, we recognize the pivotal role that transportation plays in the success of our company's mission. Whether it's the safe and timely delivery of goods to our clients or ensuring that our dedicated team members can commute to our offices, transport is a critical component of our daily operations.
          </p>
          <p>
            We place a strong emphasis on safety and sustainability, aiming to minimize our environmental footprint while maximizing the efficiency of our transportation networks. Through strategic partnerships and ongoing research and development, we continuously seek to improve our transport systems to better serve our clients and communities.
          </p>
          <p>
            Transport isn't just a means to an end for us; it's a fundamental aspect of our commitment to safe and sustainable road transport.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Transport;
