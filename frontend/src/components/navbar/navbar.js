import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavbarBootstrap() {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Pitchers</Navbar.Brand>
        <Nav className="me-auto navbarLinks">
          <Nav.Link className="navbarLink" to="/">
            Home
          </Nav.Link>
          <Nav.Link className="navbarLink" to="/sign-up">
            Sign-Up
          </Nav.Link>
          <Nav.Link className="navbarLink" to="/ideas">
            Ideas
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;
