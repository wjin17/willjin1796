import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION } from "../../site-data/NAVIGATION";
import { SOCIALS } from "../../site-data/SOCIALS";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__text">
        <h1>Willie Jin</h1>
        <h3>Software and Electrical Engineer</h3>
        <div className="landing__text__link">
          {SOCIALS.map(({ link, icon }) => {
            return (
              <h1 key={link}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <i className={icon}></i>
                </a>
              </h1>
            );
          })}
        </div>
      </div>
      <div className="landing__nav">
        <ul id="grid" className="clear">
          {NAVIGATION.map(({ title, link }) => {
            return (
              <li key={title}>
                <Link to={link}>
                  <div className="hexagon">
                    <div className="overlay">
                      <h3>{title}</h3>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Landing;
