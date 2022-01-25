import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./footer.css";
import facebookIcon from "../../assets/images/fb-icon.png";
import gitHubIcon from "../../assets/images/github-icon.png";
import linkedinIcon from "../../assets/images/linkedin-icon.png";
import instaIcon from "../../assets/images/insta-icon.png";

import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <>
      <Navbar bg="light" className="fixed-bottom footer-wrapper">
        <Container>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LutzJason92"
            >
              <img
                className="icons"
                src={gitHubIcon}
                alt="github profile"
              ></img>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jason-lutz-a0710a191/"
            >
              <img
                className="icons"
                src={linkedinIcon}
                alt="linkedin profile"
              ></img>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/JasDanLut"
            >
              <img
                className="icons"
                src={facebookIcon}
                alt="facebook profile"
              ></img>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/jasdanlut/"
            >
              <img
                className="icons"
                src={instaIcon}
                alt="instagram profile"
              ></img>
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
