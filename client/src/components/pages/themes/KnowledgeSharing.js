import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ExpertKnowledge = () => {
  return (
    <Container className="expert-knowledge-container">
      <h2 className="mb-4">Expert Knowledge Sharing in Transport Safety Development</h2>
      <Row>
        <Col md={6}>
          <Image src="/expert-knowledge-image.jpg" alt="Expert Knowledge" fluid className="mb-4" />
        </Col>
        <Col md={6}>
          <p>
            At TSDN, we believe in the power of sharing expertise and best practices to advance transport safety development. Through workshops, seminars, and online resources, we facilitate the exchange of knowledge among industry professionals, researchers, and policymakers.
          </p>
          <p>
            Our goal is to promote continuous learning and innovation in transport safety, ensuring that stakeholders have access to the latest research findings, technological advancements, and successful interventions from around the world.
          </p>
          <p>
            By fostering a culture of collaboration and knowledge sharing, we empower individuals and organizations to make informed decisions and implement effective strategies to improve road safety and transportation systems.
          </p>
        </Col>
      </Row>
    </Container>
  );
};;

export default ExpertKnowledge;
