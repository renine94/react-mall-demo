import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';


const MyNavbar = () => {
  const navigate = useNavigate()
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => { navigate('') }} href="/">renine94's Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => { navigate('/detail') }}>detail</Nav.Link>
          <Nav.Link onClick={() => { navigate('/about')}}>about</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavbar;