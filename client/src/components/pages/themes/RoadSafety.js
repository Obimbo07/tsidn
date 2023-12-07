import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const RoadSafety = () => {
  return (
    <Container className="road-safety-container">
      <h2 className="mb-4">Road Safety: A Fundamental Priority</h2>
      <Row>
        <Col md={6}>
          <Image alt="Road Safety" fluid className="mb-4" />
        </Col>
        <Col md={6}>
          <p>
            Road safety is not just a catchphrase at TSID-NET; it's a fundamental priority that underscores our commitment to the welfare of our employees, partners, and the wider community. We firmly believe that safe and sustainable road transport begins with a strong emphasis on safety.
          </p>
          <p>
            Our company actively advocates for good governance in road safety and development, and we recognize that our own practices must set an example. We maintain a proactive approach to road safety, implementing robust safety protocols and providing ongoing training to our team members. We're also dedicated to promoting awareness and education on road safety issues, collaborating with local communities and governments to make a tangible difference in reducing accidents and injuries.
          </p>
          <p>
            For us, road safety is not just a legal obligation but a moral duty that guides our every action.
          </p>
        </Col>
      </Row>

      <h2 className="mt-4">Making a Difference on the Roads</h2>
      <Row>
        <Col md={6}>
          <p>
            Every day, our company endeavors to make a difference on the roads by prioritizing road safety. We're deeply invested in the well-being of all road users, and we understand that accidents and injuries on the road can have far-reaching consequences.
          </p>
          <p>
            Our commitment to road safety extends to the design, production, and promotion of efficient tools and decision-making aids for our team members and partners. Through our engagement in research and development, we continuously seek innovative solutions to enhance road safety, striving to ensure that no matter how people travel – by foot, vehicle, or any other means – they are protected from harm.
          </p>
          <p>
            Road safety is not just a corporate policy; it's a shared responsibility that we embrace wholeheartedly. We take pride in contributing to safer roads and more secure journeys for all.
          </p>
        </Col>
        <Col md={6}>
          <Image  alt="Making a Difference on the Roads" fluid className="mb-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default RoadSafety;
