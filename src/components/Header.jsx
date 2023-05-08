import React from 'react'
import "./Body.css"
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


export default function Body(props) {
  return (
    <div className='main'>
    <Container className='container'>
      <Row className='firstRow'>
        <Col className='firstCol' >
            <h2>I'm Aqeel Khan</h2>
            <h1>A Passionate ReactJS Developer</h1>
        </Col>
      </Row>
      <FaLinkedin className="mr-4" size={30} color="#0088cc" />
      <FaFacebook className="mr-4" size={30} color="#1877f2" />
      <FaGithub className="mr-4" size={30} color="#24292e" />
      <FaInstagram className=" mr-4" size={30} color="#c13584" />
    </Container>
        </div>
  )
}
