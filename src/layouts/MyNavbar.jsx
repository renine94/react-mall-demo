import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const MyNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">renine94's Shop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/detail">detail</Nav.Link>
        <Nav.Link href="/about">about</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default MyNavbar;