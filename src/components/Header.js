import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "styles/components/Header.style.sass";
import "styles/components/common/hamburgers.sass";

const headerLogo = require("assets/logo/capitolLogoWhite.svg");

const sectionInfo = [
  {
    to: "home-welcome",
    displayTitle: "Home",
  },
  {
    to: "home-about",
    displayTitle: "About",
  },
  {
    to: "home-menu",
    displayTitle: "Menu",
  },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const checkAtTop = () => {
      const isTop = window.scrollY < 5;
      if (isTop !== atTop) {
        setAtTop(isTop);
      }
    };

    document.addEventListener("scroll", checkAtTop);
    return () => {
      document.removeEventListener("scroll", checkAtTop);
    };
  }, [atTop]);

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
    <div className={`header-container ${atTop ? "header-container-at-top" : ""}`}>
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
