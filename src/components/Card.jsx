import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  FaGlobe,
  FaPen,
  FaPencilRuler,
  FaRProject,
  FaServer,
  FaSteam,
  FaTv,
} from "react-icons/fa";

function Cards() {
  // const handleDownload = () => {
  //   // Create a new <a> element
  //   const link = document.createElement("a");

  //   // Set the file URL
  //   link.href = "/images/MAqeelRCV.pdf";

  //   // Set the file name (optional)
  //   link.download = "MAqeelRCV.pdf";

  //   // Trigger the download
  //   link.click();
  // };
  return (
    <div>
      <Row className="mainrow">
        <Col >
          <Card className="aboutCol" style={{ width: "20rem", background: "unset" }}>
            <Card.Body className="CardBody" id="about">
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's
                content.Some quick example text to build on the card title and
                make up the bulk of the card's content.Some quick example text
                to build on the card title and make up the bulk of the card's
                content.
              </Card.Text>
              <Button
                variant="primary"
                // href="https://john-react.srrafi.com/"
                target="_blank"
              >
                Hire ME
              </Button>
              <Button variant="primary" >
                Download CV
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="imageCol">
          <img variant="top" src={process.env.PUBLIC_URL + '/images/IMG_1663.png'}  alt="image" />
        </Col>
      </Row>
      <section id="service">
        <h2>What I'm Doing</h2>
        <h4>I love what I do. I take great pride in what I do.</h4>
        <Row>
          <Col className="colSec">
            <Card style={{ width: "18rem" }}>
              <FaGlobe className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />
              {/* <Card.Img variant="top" src="/images/web.jpg"/> */}
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tccusamus obcaecati natus esse rerum delectus!
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="colSec">
            <Card style={{ width: "18rem" }}>
              <FaPen className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="colSec">
            <Card style={{ width: "18rem" }}>
              <FaTv className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="colSec">
            <Card style={{ width: "18rem" }}>
              <FaSteam className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="colSec">
            <Card style={{ width: "18rem" }}>
              <FaServer className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="colSec">
            <Card style={{ width: "18rem" }}>
              <FaPencilRuler className="svgIcon mr-4" color="rgba(7, 6, 6, 0.804)" />

              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Cards;
