import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Jason Daniel Lutz Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
            <NavDropdown title="Employer Documents" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Brand Statement
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mission Statement
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Connect with Me" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">LinkedIn</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.2">GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
