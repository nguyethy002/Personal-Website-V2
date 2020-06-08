import React, { useState } from "react";
import { Link } from "react-scroll";

import "styles/components/Header.style.sass";
import "styles/components/common/hamburgers.sass";

const headerLogo = require("assets/logo/capitolLogoWhite.svg");

const sectionInfo = [
  {
    to: "home",
    displayTitle: "Home",
  },
  {
    to: "about",
    displayTitle: "About",
  },
  {
    to: "contact",
    displayTitle: "Contact",
  },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const HeaderLink = ({ displayTitle, to }) => {
    return (
      <Link
        smooth
        offset={-100}
        delay={200}
        spy
        onClick={() => setSidebarOpen(false)}
        to={to}
        className="navbar-item"
        activeClass="navbar-item-active"
      >
        {displayTitle}
      </Link>
    );
  };

  return (
    <div className="header-container">
      <img src={headerLogo} id="logo" alt="top logo" />

      <div className="header-menu">
        {sectionInfo.map((section, index) => (
          <HeaderLink {...section} key={index} />
        ))}
      </div>

      <div className="header-hamburger">
        <button
          className={`hamburger ${sidebarOpen ? "hamburger-active" : ""}`}
          aria-label="Menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span />
        </button>
      </div>

      <ul
        className={`navbar-overlay ${
          sidebarOpen ? "navbar-overlay-active" : ""
        }`}
      >
        {sectionInfo.map((section, index) => (
          <HeaderLink {...section} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Header;
