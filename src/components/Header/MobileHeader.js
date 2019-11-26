import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { NAVIGATION } from "../../site-data/NAVIGATION";

const MobileHeader = () => {
  const [hamburger, toggleHamburger] = useState(false);
  const isMenuOpen = hamburger ? "open" : "";
  return (
    <div className="header__navigation mobile-header">
      <div
        className={`hamburger-icon ${isMenuOpen}`}
        onClick={() => {
          toggleHamburger(!hamburger);
        }}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div
        className={`mobile-header__links ${isMenuOpen}`}
        onClick={() => {
          toggleHamburger(!hamburger);
        }}
      >
        {NAVIGATION.map(({ title, link }) => {
          return (
            <NavLink activeClassName="active-nav" to={link} key={title}>
              <h2>{title}</h2>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileHeader;
