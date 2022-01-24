import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation({ currentPage, handlePageChange }) {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <Navbar className="fixed-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          href="#header"
          onClick={() => handlePageChange("Header")}
          className={currentPage === "Header" ? "nav-link active" : "nav-link"}
        >
          Jason Daniel Lutz Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* about me component link within navbar */}
            <Nav.Link
              href="#aboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </Nav.Link>

            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </Nav.Link>
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
