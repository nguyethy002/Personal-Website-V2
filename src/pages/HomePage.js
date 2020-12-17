import React from "react";
import YouTube from "react-youtube";

import { menuImageList } from "assets/menu";
import "styles/pages/HomePage.style.sass";

const aboutImage = require("assets/about/aboutImage2.png");
const welcomeImage = require("assets/welcome/welcomeImage.png");

const HomePage = () => {
  const renderMenuImages = () =>
    Object.values(menuImageList).map(({ src, title }, index) => (
      <div className="home-project-card" key={index}>
        <img src={src} alt={`menu ${index}`} />
        <h3>___{title}___</h3>
      </div>
    ));

  const opts = {
    playerVars: {
      // autoplay: 1,
    },
  };

  return (
    <div className="home-container">
      <div className="home-welcome">
        <img src={welcomeImage} id="welcomeImage" alt="tea nguyen" />
        <h3>"You don't have to be fearless, just don't let fear stops you"</h3>
      </div>
      <div className="home-about">
        <div className="home-about-des">
          <h2>What I can do</h2>
          <p>
            I could make your website looks good. Beside that, I enjoy my life
            by drawing and playing guitar. If you are looking for a person who
            has good tatse in making website, give me a call :D
          </p>
        </div>
        <div className="home-about-image">
          <img src={aboutImage} id="aboutImage" alt="thy standing" />
        </div>
      </div>
      <div className="home-more">
        <div className="home-more-des">
          <h2>More about me</h2>
          <ul>
            Beside coding, I spend my time to:
            <li>❀ Play the guitar</li>
            <li>❀ Drawing</li>
            <li>❀ Streaming</li>
          </ul>
          <button id="homeMoreButton">Follow my stream</button>
        </div>
        <div className="home-more-video">
          <YouTube videoId="jJu_wgj9UGs" opts={opts} id="homeMoreVideo" />
        </div>
      </div>
      <div className="home-project">
        <h2>Recent Projects</h2>
        <div className="home-project-image">{renderMenuImages()} </div>
      </div>
    </div>
  );
};

export default HomePage;
