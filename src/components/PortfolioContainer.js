import React, { useState } from "react";

import Contact from "./contact/Contact";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Portfolio from "./portfolio/Portfolio";
import AboutMe from "./aboutMe/AboutMe";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Header");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Header") {
      return <Header />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
