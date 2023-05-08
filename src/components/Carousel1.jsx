import React from 'react'
import Carousel from "react-bootstrap/Carousel";

export default function Carousel1() {
  return (
    <div>
    <section className="secondSec" id="Testimonial">
      <h1>Whats our customer Say</h1>
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/landscape1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <img src="/images/person.png" alt="" />
            <h3>Marxi Kaaap</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/landscape1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <img src="/images/person.png" alt="" />
            <h3> Kari KEnzey</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/landscape1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <img src="/images/person.png" alt="" />
            <h3>Abeye Huduna </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section></div>
  )
}
