import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "styles/components/Footer.style.sass";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-location">
          <h3>Location</h3>
          <p>1440 NE Broadway Street</p>
          <p>Portland, OR 97232</p>
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-hour">
          <h3>Opening Hours</h3>
          <p>Monday - Friday</p>
          <p>1pm - 10pm</p>
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-social">
          <h3>Social</h3>
          <FontAwesomeIcon icon={["fab", "facebook"]}/>
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="footer-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
