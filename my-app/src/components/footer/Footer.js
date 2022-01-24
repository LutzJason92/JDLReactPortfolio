import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Jason Daniel Lutz Portfolio</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
