import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as slideShowImages from "../assets";
import "styles/components/SlideShow.style.sass";

const SlideShow = () => {
  var settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const renderSlideShowImages = () =>
    Object.values(slideShowImages).map((image, index) => (
      <img src={image} key={index} alt={`slideShow ${index}`} />
    ));

  return (
    <Slider dots {...settings}>
      {renderSlideShowImages()}
    </Slider>
  );
};

export default SlideShow;
