import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/aboutMe/AboutMe";
// import SkillsGraphs from "./components/skillsBarGraph/skillsBarGraph";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
      {/* <SkillsGraphs /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
