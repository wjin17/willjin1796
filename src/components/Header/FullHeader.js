import React from "react";
import { NavLink } from "react-router-dom";

import { NAVIGATION } from "../../site-data/NAVIGATION";

const FullHeader = () => {
  return (
    <div className="header__navigation full-header">
      {NAVIGATION.map(({ title, link }) => {
        return (
          <NavLink activeClassName="active-nav" to={link} key={title}>
            <h2>{title}</h2>
          </NavLink>
        );
      })}
    </div>
  );
};

export default FullHeader;
