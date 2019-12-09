import React from "react";

import { ABOUT } from "../../config/ABOUT";

const About = () => {
  return (
    <div className="about page">
      <h1>About</h1>
      <div className="about__content">
        {ABOUT.map(({ content }, index) => {
          return <h4 key={index}>{content}</h4>;
        })}
      </div>
    </div>
  );
};

export default About;
