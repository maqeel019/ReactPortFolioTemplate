import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaAddressCard, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const ContactForm = () => {
  return (
    <Container id="contact" >
      <Row>
        <Col md={6}>
          <h3> Contact Info</h3>
          <div className="contact-info">
            <p>
              <FaAddressCard className="mr-4" />
              Address: Z105 - Tan Thinh, Thai Nguyen - Viet Nam
            </p>
            <p>
              <FaPhone   className="mr-4" />
              Phone: +1.900.3456.789
            </p>
            <p>
              <FaEnvelope className="mr-4" />
              Email: yourname@somemail.com
            </p>
            <p>
              <FaGlobe className="mr-4" />
              Website: http://example.com
            </p>
          </div>
        </Col>
        <Col md={6}>
          <h3>Get In Touch</h3>
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Enter your name *"
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email *"
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="formSubject">
                  <Form.Control
                    type="text"
                    placeholder="Enter subject *"
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formPhone">
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number *"
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={7}
                    placeholder="Enter your message"
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
      <Button variant="primary" type="submit" style={{ marginLeft: "44%" , marginBottom : "3%" }}>
        Send Message
      </Button>
    </Container>
  );
};

export default ContactForm;
