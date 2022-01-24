import React from "react";
import "./header.css";
import Me from "../../assets/images/headshot.png";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <>
      <div className="header header-wrapper">
        <div className="h-left">
          <div className="h-left-wrapper">
            <h2 className="h-intro">Hello, my name is</h2>
            <h1 className="h-name">Jason Lutz</h1>
            <div className="h-title">
              <div className="h-title-wrapper">
                <div className="h-title-item">Full Stack Web Developer</div>
                <div className="h-title-item">Photographer</div>
                <div className="h-title-item">Inventor</div>
                <div className="h-title-item">Dog Dad</div>
                <div className="h-title-item">Bartender</div>
                <div className="h-title-item">entrepreneur</div>
                <div className="h-title-item">Dreamer</div>
              </div>
            </div>
            <div className="h-desc">
              A Junior Full Stack Web-Developer whos eager to help YOU create
              responsive, elegant applications using various technologies and
              languages.
            </div>
          </div>
        </div>
        <div className="h-logo-wrapper">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1mYztpHk-GrNJzgNHnTpWKesd8cpDRkce/view?usp=sharing"
            >
              <img src={Logo} alt="Logo" className="logo-img rotate"></img>
            </a>
          </div>
        </div>

        <div className="h-right">
          <div className="h-right-wrapper">
            <div className="h-bg"></div>
            <img src={Me} alt="HeadShot" className="h-img hb-bg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
