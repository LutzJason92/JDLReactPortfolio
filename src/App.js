import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PortfolioContainer from "./components/PortfolioContainer";
// import SkillsGraphs from "./components/skillsBarGraph/skillsBarGraph";

function App() {
  return (
    <>
      <PortfolioContainer />
      <Footer />
    </>
  );
}

export default App;
