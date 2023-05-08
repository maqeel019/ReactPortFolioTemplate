import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <div >

      <section className="firstSec" id="portfolio">
      <h2 style={{ textAlign: "center" }}>My PortFolio</h2>
      <h4 style={{ textAlign: "center" }}>
        I love what I do. I take great pride in what I do.
      </h4>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/person.png"
              alt="First slide"
            />
            <Carousel.Caption className="carouselCaption">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra 
                pharetra interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/person.png"
              alt="First slide"
            />
            <Carousel.Caption className="carouselCaption">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra 
                pharetra interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/person.png"
              alt="First slide"
            />
            <Carousel.Caption className="carouselCaption">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra 
               interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/person.png"
              alt="First slide"
            />
            <Carousel.Caption className="carouselCaption">
              <h5>First slide label</h5>
              <p>Nulla vitae libero, a pharetra
                  interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/person.png"
              alt="Second slide"
            />
            <Carousel.Caption className="carouselCaption">
              <h5>Second slide label</h5>
              <p>Lorem ipsum sit amet, 
                pharetra elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/person.png"
              alt="Third slide"
            />
            <Carousel.Caption className="carouselCaption">
              <h5>Third slide label</h5>
              <p>
                Praesent magna, vel 
                nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

    </div>
  );
}

export default DarkVariantExample;
