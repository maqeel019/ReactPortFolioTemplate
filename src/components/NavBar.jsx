import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='Navbar navbar'>
      <Container>
        <Navbar.Brand href="#home"><img className='navLogo' src="/images/logo2.png" alt="image" style={{borderRadius : '50%'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#portfolio">PortFolio</Nav.Link>
            <Nav.Link  href="#Testimonial">Testimonial</Nav.Link>
            <Nav.Link  href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;