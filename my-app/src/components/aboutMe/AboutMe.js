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
        </div>
        <div>
          <h2>Technologies</h2>
        </div>
        <div>
          <h2>Languages</h2>
        </div>
        <div>
          <h2>Acheivements</h2>
        </div>
      </div>
    </>
  );
}
