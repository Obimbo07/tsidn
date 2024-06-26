import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Transport = () => {
  return (
    <Container className="transport-container">
      <h2 className="mb-4">Transport Safety and Development</h2>
      <Row>
       
        <Col md={6}>
          <p>
            Transport Safety and Development is at the core of our mission at TSDN. We strive to promote safe and sustainable road transport in Kenya by collaborating with key stakeholders and implementing initiatives that enhance safety and foster development in the transport sector.
          </p>
          <Col md={6}>
          <Image src="/safety.jpeg" alt="Transport" fluid className="mb-4" />
        </Col>
          <p>
            Through partnerships with government agencies, NGOs, and international organizations, we work to improve road infrastructure, implement safety regulations, and promote responsible practices among drivers and transport operators.
          </p>
          <p>
            Our efforts aim to create a transportation environment that prioritizes the safety of passengers, pedestrians, and goods while contributing to the overall development of communities and the economy.
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
          <Image  alt="Making a Difference on the Roads" fluid className="mb-4" src='/transportsafety.jpg' />
        </Col>
      </Row>
    </Container>
  );
};

export default Transport;
