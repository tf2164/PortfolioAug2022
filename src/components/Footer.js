import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import git from '../assets/img/git.svg';
import resume from '../assets/img/resume.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/tyrafair/"><img src={navIcon1} alt="linkedin icon" /></a>
              <a href="https://github.com/tf2164?tab=repositories"><img src={git} alt="github icon" /></a>
                <a href="FairTyraResume.pdf" download><img src={resume} alt="resume icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
