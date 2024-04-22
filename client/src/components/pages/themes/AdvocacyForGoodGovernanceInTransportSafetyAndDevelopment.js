import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const AdvocacyForGoodGovernanceInTransportSafetyAndDevelopment = () => {
  return (
    <Container className="advocacy-container">
      <h2 className="mb-4">Advocacy for Good Governance in Transport Safety and Development</h2>
      <Row>
        <Col md={6}>
          <Image src="/advocacy-image.jpg" alt="Advocacy" fluid className="mb-4" />
        </Col>
        <Col md={6}>
          <p>
            Good governance is essential for ensuring transparency, accountability, and effectiveness in the transport sector. At TSDN, we advocate for policies and practices that promote ethical conduct, regulatory compliance, and public participation in decision-making processes.
          </p>
          <p>
            Through research, policy analysis, and stakeholder engagement, we work to influence government agencies, legislative bodies, and industry associations to adopt measures that prioritize safety, sustainability, and social responsibility in transportation initiatives.
          </p>
          <p>
            By championing good governance principles, we aim to foster trust, collaboration, and long-term success in the transport industry, ultimately benefiting communities, businesses, and the environment.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AdvocacyForGoodGovernanceInTransportSafetyAndDevelopment;