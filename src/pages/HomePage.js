import React from "react";

import { SlideShow } from "components";
import "styles/pages/HomePage.style.sass";
const aboutImage = require("../assets/about/aboutImage.jpeg");

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-welcome">
        <SlideShow />
      </div>
      <div className="home-about">
        <div className="home-about-des">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget diam nunc. Cras eget bibendum sapien. Curabitur porta nulla at
            metus consectetur molestie. Fusce leo turpis, lobortis et tincidunt
            vitae, placerat vel purus. Pellentesque malesuada felis metus,
            maximus fermentum velit pellentesque sit amet. Donec mattis leo in
            ultricies elementum. 
          </p>
        </div>
        <img src={aboutImage} id="aboutImage" alt="capital bar" />
      </div>
    </div>
  );
};

export default HomePage;
