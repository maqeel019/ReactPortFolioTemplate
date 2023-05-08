import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import  { useState, useEffect } from 'react';
import { FaAward, FaBriefcase, FaCalendar, FaCertificate, FaRegKissWinkHeart, FaTv } from "react-icons/fa";
export default function Card1() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((prevCount) => {
  //       if (prevCount === 100) {
  //         clearInterval(timer);
  //         return prevCount;
  //       } else {
  //         return prevCount + 1;
  //       }
  //     });
  //   }, 20); // Update the counter every 20 milliseconds

  //   return () => {
  //     clearInterval(timer); // Clean up the interval when the component is unmounted
  //   };
  // }, []);

  return (

    <div>

      <section className="section">
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <Card style={{ width: "14rem" }}>
             <FaBriefcase className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />
              <Card.Body>
                <Card.Title>Projects</Card.Title>
                <Card.Text>
                 <h1> 100+ </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "14rem" }}>
          <FaRegKissWinkHeart className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />
              <Card.Body>
                <Card.Title>Happy Clients</Card.Title>
                <Card.Text>
                  <h1> 200+</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "14rem" }}>
          <FaCalendar className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />
              <Card.Body>
                <Card.Title>Year Of Experience</Card.Title>
                <Card.Text>
                 <h1>3+</h1> 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "14rem" }}>
          <FaAward className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />
              <Card.Body>
                <Card.Title>Certification</Card.Title>
                <Card.Text>
                  <h1> 10+</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </section>
    </div>
  );
}
