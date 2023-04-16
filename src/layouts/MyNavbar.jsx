import axios from "axios";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";

import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();

  let result = useQuery('작명', () => {
    return axios.get('https://codingapple1.github.io/userdata.json')
      .then((res) => {
        return res.data
      })
  })

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("");
          }}
          href="/"
        >
          renine94's Shop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/detail");
            }}
          >
            detail
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/about");
            }}
          >
            about
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            cart
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
            <Nav.Link>
              { result.isLoading ? '로딩중..' : result.data.name }
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
