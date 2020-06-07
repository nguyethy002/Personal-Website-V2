import React from "react";
import Slider from "infinite-react-carousel";
import { image1, image2, image3 } from "../assets";
import "styles/components/SlideShow.style.sass";

const SlideShow = () => {
  const settings =  {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div>
      <Slider dots { ...settings }>
        <img  src={image1} alt="slide1" />
        <img  src={image2} alt="slide2" />
        <img  src={image3} alt="slide3" />
      </Slider>
    </div>
  );
};

export default SlideShow;
