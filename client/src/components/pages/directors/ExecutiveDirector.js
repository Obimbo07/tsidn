import React from 'react';
import Navbar from '../Navbar';
import Footer from '../../Footer';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import '../../styles/ExecutiveDirector.css';

const ExecutiveDirector = () => (
  <div className="executive-director-container">
    <Navbar />
    <Container>
      <Row className="intro-ed">
        <Col>
          <Image src="/samuelMusumba.jpeg" alt="Executive Director" className="executive-director-image" />
        </Col>
        <Col>
          <h1>Executive Director</h1>
        </Col>
      </Row>

      <div className="executive-director-text">
        <p>
          Samuel Musumba is the Executive Director of TSDN and serves on its board of Directors
          as a founder member. He is a highly accomplished Professional in Project Planning and
          Management, Policy development and implementation. He has over 20 years of working experience in Programmes Management and Public Policy Administration. He has successfully implemented Government and Donor funded programmes and projects providing strategic leadership and administrative oversight. Mr Musumba is a professional and well-grounded practitioner in the following fields:
        </p>

        <ListGroup>
          <ListGroup.Item>Projects and Programmes Management</ListGroup.Item>
          <ListGroup.Item>Road Transport Safety and Engineering Management</ListGroup.Item>
          <ListGroup.Item>Peace and Conflict Resolution</ListGroup.Item>
          <ListGroup.Item>Public Policy and Strategy Development and implementation</ListGroup.Item>
          <ListGroup.Item>Public Administration</ListGroup.Item>
          <ListGroup.Item>Stakeholder management</ListGroup.Item>
          <ListGroup.Item>Research</ListGroup.Item>
          <ListGroup.Item>Coordination of Performance Contract Management and implementation</ListGroup.Item>
          <ListGroup.Item>Resource Mobilization for Projects, Donor contract Management; and</ListGroup.Item>
          <ListGroup.Item>Training Trainers</ListGroup.Item>
        </ListGroup>

        <p>
          In his most current position, he has served in a Senior Management position of the National Transport and Safety Authority (NTSA), providing diligently strategic leadership in Road Safety Coordination, Management, and Implementation of National programmes. He has successfully accomplished the following fundamental roles:
        </p>
        
        <ListGroup>
          <ListGroup.Item>Developed and implemented Strategic Road safety Programmes, Policies and Plans in keeping with UN Decade of Action for Road Safety 2021-2030 integrating the Safe System Approach</ListGroup.Item>
          <ListGroup.Item>Coordination and Management of Road safety mainstreaming in all Government Ministries, State Departments(MDA’s)</ListGroup.Item>
          <ListGroup.Item>Coordinated partnerships to support road safety activities - World Bank, EU, Private sector, County Government etc</ListGroup.Item>
          <ListGroup.Item>Coordinating establishment of County Transport and Safety Committees (CTSCs) to strengthen coordination and management of Road safety at the grassroots</ListGroup.Item>
          <ListGroup.Item>Enforcement undertakings with Police ensuring compliance with the traffic law Participated in various international and National Road safety Conferences.</ListGroup.Item>
          <ListGroup.Item>Capacity building Public service transport sector to develop and implement road safety policies.</ListGroup.Item>
          <ListGroup.Item>Key role in the Development and implementation of the Driver and Instructors Training, Testing and Licensing curriculum and further the Defensive Driver’s Defensive Training Curriculum</ListGroup.Item>
          <ListGroup.Item>Coordination of road safety public education and awareness programs</ListGroup.Item>
          <ListGroup.Item>Drafting of Board papers to inform Policy and strategic decisions IN Road Transport Safety</ListGroup.Item>
          <ListGroup.Item>Active role in Strengthening legislations to support road safety improvement</ListGroup.Item>
          <ListGroup.Item>Improving traffic crash data with support from AfDB and JICA.</ListGroup.Item>
        </ListGroup>

        <p>
          Previously before joining NTSA, he worked for GoK as a Public Administrator whence he successfully managed public Security and Development related programmes at the grassroots levels.</p>
        
        <ListGroup>
          <ListGroup.Item>Coordinated Government Transition programmes after promulgation of the 2010 Constitution to devolved governance system</ListGroup.Item>
          <ListGroup.Item>managed, and coordinated Post-Election Peace building programmes aimed at mitigating conflicts and enhancing post-conflict stability in Kenya after the 2007 election violence.</ListGroup.Item>
          <ListGroup.Item>Coordinated climate change compliance initiatives saving the Mau Forest</ListGroup.Item>
          <ListGroup.Item>Conflict expert/ Trainer - Tetra Tech ARD Inc. - USAID-PROMARA Mau Forest Rehabilitation program, on Natural resource-based conflict sensitive programming; Capacity building of Community Forest Associations (CFAs) on Benefit sharing, Land tenure and related land conflicts, compensations for evictees and water cooperative agreements</ListGroup.Item>
          <ListGroup.Item>Played pivotal role in mediation processes to mitigate intractable pastoral conflicts between the Pokot, Samburu, and Turkana communities.</ListGroup.Item>
          <ListGroup.Item>Coordinated roll –out of a Community Based Conflict Early Warning and Response (CB-CEWERs) for Rift Valley and Nyanza Provinces –USAID funded</ListGroup.Item>
          <ListGroup.Item>Oversight role of the UNHCR led Inter-Agency Protection Cluster Framework on Post-Election Internally Displaced Persons (IDPs).</ListGroup.Item>
          {/* Add other list items here */}
        </ListGroup>

      </div>

      <div className="other-engagements">
        <h2>OTHER ENGAGEMENTS AND ACCOMPLISHMENTS</h2>
        <ListGroup>
          <ListGroup.Item>Capacity building organizations in Road safety and Policy development</ListGroup.Item>
          <ListGroup.Item>Trained GoK officers on Road safety risks factors - NTSA, Ministry of Health, WHO and the International Institute for Legislative Affairs (IILA) partnership.</ListGroup.Item>
          <ListGroup.Item>Training Boda Boda (Motorcycle operators) on road safety and GBV -The Gender Violence Recovery Center (GVRC)& UN Women support</ListGroup.Item>
          <ListGroup.Item>Facilitated the National Road safety Conference/Pre-conference to validate the National Road Safety Action Plan supported by World Bank</ListGroup.Item>
          <ListGroup.Item>Participated in popularizing the Sexual Offences Act, Children’s Act, Disability Act,</ListGroup.Item>
          <ListGroup.Item>Conducted research in Natural Resource conflicts -Mau Forest</ListGroup.Item>
          {/* Add other list items here */}
        </ListGroup>
      </div>

      <div>
        <h2>Educational and Professional Qualifications</h2>
        <p>
          Mr. Samuel Musumba’s summary of both Education and Professional Qualifications he has earned in his career development over the years is as follows:
        </p>
        <p>
          DOCTOR OF PHILOSOPHY(PHD) PROJECT MANAGEMENT- (Finalist) in Jomo Kenyatta University of Agriculture and Technology(JKUAT)
          <br />
          Earned a Master of Arts Degree in Project Planning and Management from University of Nairobi
          <br />
          Obtained a Bachelor of Arts Degree in Social Sciences from Moi University.
          <br />
          Professional qualifications - Certificates in :
          <br />
          Road Transport Safety and Engineering Management in SINGAPORE-Land Transport Authority(LTA) under the JAPAN/SINGAPORE PARTNERSHIP PROGRAMME
          <br />
          Certified Road Safety Auditor trained and practiced under the European Union and Government of Kenya Partnership projects
          <br />
          Trained and qualified practitioner in Road Safety Management – by the INTERNATIONAL ROADS FEDERATION (IRF)– 2018 -USA
          {/* Add other qualifications here */}
        </p>
      </div>

      <p>
        Twitter | Linkedin | Email
      </p>
    </Container>
    <Footer />
  </div>
);

export default ExecutiveDirector;
