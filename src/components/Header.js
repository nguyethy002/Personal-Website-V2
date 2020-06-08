import React from "react";
import "styles/components/Header.style.sass";
const headerLogo = require("../assets/logo/capitolLogo.svg");
const Header = () => {
  return (
    <div className="header-container">
      <img src={headerLogo} id="logo" alt="top logo" />
      <div className="header-menu">
        <h3>Welcome</h3>
        <h3>About</h3>
        <h3>Location</h3>
      </div>
    </div>
  );
};

export default Header;
