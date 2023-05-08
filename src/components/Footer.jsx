import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const MyComponent = () => {
  return (
    <Container className="footer d-flex flex-column align-items-center justify-content-center">
      <div className="footerImg">
        <img src="/images/logo2.png" alt="My Image"/>
      </div>
      <Row>
        <Col className="ColFooter">
          <a href="#">
            <FaLinkedin className="mr-4" size={30} color="#0088cc" />
          </a>
        </Col>
        <Col className="ColFooter">
          <a href="#">
            <FaFacebook className="mr-4" size={30} color="#1877f2" /> 
          </a>
        </Col>
        <Col className="ColFooter">
          <a href="#">
            <FaGithub className="mr-4" size={30} color="#24292e" />
          </a>
        </Col>
        <Col className="ColFooter">
          <a href="#">
            <FaInstagram className=" mr-4" size={30} color="#c13584" />
          </a>
        </Col>
      </Row>
      <h6>Made with Love by AK019</h6>
      <p>© 2023 AKhan019 - ALL RIGHTS RESERVED</p>
    </Container>
  );
};

export default MyComponent;
