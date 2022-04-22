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
            I graduated the Full-Stack Web Development Bootcamp at the
            University of Denver in Spring of 2022. After years of facilitating
            guest experiences, mixing delicious adult beverages, and fabricating
            products or parts from various materials, I decided to shift my
            focus from creating physical assets to digital assets and have begun
            the thrilling journey of Web Development. Whether it's a mean
            martini, a fabricated component, a robust database or a web
            application, you've come to the right place.
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
