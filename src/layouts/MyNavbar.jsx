import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


const MyNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">renine94's Shop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">menu</Nav.Link>
        <Nav.Link href="#pricing">info</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default MyNavbar;