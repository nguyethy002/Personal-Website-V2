import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as slideShowImages from "assets/images";
import "styles/components/SlideShow.style.sass";

const SlideShow = () => {
  let slideShowSettings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const renderSlideShowImages = () =>
    Object.values(slideShowImages).map((image, index) => (
      <img src={image} key={index} alt={`slideShow ${index}`} />
    ));

  return (
    <div className="slider-container">
      <div className="slider-caption">
        <h1>Welcome to the Capitol</h1>
        <p>It is our absolute pleasure to be returning to Capitol</p>
      </div>

      <Slider {...slideShowSettings}>{renderSlideShowImages()}</Slider>
    </div>
  );
};

export default SlideShow;
