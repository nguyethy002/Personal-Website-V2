import React from "react";
import { SlideShow } from "components";
import "styles/pages/HomePage.style.sass";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-welcome">
        <SlideShow />
      </div>
    </div>
  );
};

export default HomePage;
