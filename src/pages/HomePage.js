import React from "react";
import { SlideShow } from "components";
import "styles/pages/HomePage.style.sass";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-welcome">
        <h1>Welcome to the Capitol</h1>
        <p>It is our absolute pleasure to be returning to Capitol</p>
        <SlideShow/>
      </div>
      
    </div>
  );
};

export default HomePage;
