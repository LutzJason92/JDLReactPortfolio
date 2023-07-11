import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <>
      <div className="ab-wrapper">
        <div className="ab-title">
          <h1>About Me</h1>
        </div>
        <div>
          <h2>Summary</h2>
          <p className="ab-content">
            I am a highly motivated multi-disciplinary professional with
            experience in hospitality, product design, manufacturing, and web
            development. I am eager to use my skills to create unique
            user-centered experiences and designs. I am confident that I can
            contribute to your team and help you achieve your goals. Please
            contact me to discuss your upcoming projects.
          </p>
        </div>
        <div>
          <h2>Technologies</h2>
          <ul className="ab-content">
            <li>React</li>
            <li>Bootstrap</li>
            <li>Mongo</li>
            <li>Sequalize</li>
            <li>Express</li>
            <li>Node</li>
          </ul>
        </div>
        <div>
          <h2>Languages</h2>
          <p className="ab-content">
            <ul className="ab-content">
              <li>Javascript</li>
              <li>Css</li>
              <li>HTML</li>
              <li>JSX</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
