import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as slideShowImages from "assets/slides";
import "styles/components/SlideShow.style.sass";

const SlideShow = () => {
  let slideShowSettings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  const renderSlideShowImages = () =>
    Object.values(slideShowImages).map((image, index) => (
      <img src={image} key={index} alt={`slideShow ${index}`} />
    ));

  return (
    <div className="slider-container">
      <Slider {...slideShowSettings} className="slider-image">{renderSlideShowImages()}</Slider>
    </div>
  );
};

export default SlideShow;
