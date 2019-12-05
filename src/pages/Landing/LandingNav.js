import React from "react";
import { Link } from "react-router-dom";

/* 
  //Navigation Template
    [
      { title: "", link: ""},
      { title: "", link: ""}      
    ] 
*/

const NavLink = ({ title, link }) => {
  return (
    <li>
      <Link to={link}>
        <div className="hexagon">
          <div className="overlay">
            <h3>{title}</h3>
          </div>
        </div>
      </Link>
    </li>
  );
};
const LandingNav = ({ navigation }) => {
  return navigation.map(({ title, link }) => {
    return <NavLink key={title} title={title} link={link}></NavLink>;
  });
};

export default LandingNav;
