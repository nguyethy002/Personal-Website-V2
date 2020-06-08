import React from "react";
import { SlideShow, Header } from "components";
import "styles/pages/HomePage.style.sass";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header/>
      <div className="home-welcome">
        <SlideShow/>
      </div>
      
    </div>
  );
};

export default HomePage;
