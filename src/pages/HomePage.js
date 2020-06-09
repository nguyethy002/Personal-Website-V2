import React from "react";

import { SlideShow } from "components";
import { menuImageList } from "assets/menu";
import "styles/pages/HomePage.style.sass";

const aboutImage = require("assets/about/aboutImage.jpeg");
const welcomeImage = require("assets/welcome/welcomeImage2.png");

const HomePage = () => {
  const renderMenuImages = () =>
    Object.values(menuImageList).map(({ src, title }, index) => (
      <div className="home-menu-title" key={index}>
        <img src={src} alt={`menu ${index}`} />
        <h3>___{title}___</h3>
      </div>
    ));
  return (
    <div className="home-container">
      <div className="home-welcome">
        <div className="home-welcome-slider">
          <img src={welcomeImage} id="welcomeImage" alt="capital bar" />
          <p>Full Craft Bar · Vegan Menu · Karaoke</p>
        </div>
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
      <div className="home-menu">
        <h2>Our menu</h2>
        <div className="home-menu-image">{renderMenuImages()} </div>
      </div>
    </div>
  );
};

export default HomePage;
