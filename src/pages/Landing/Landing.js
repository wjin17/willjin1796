import React from "react";
import LandingSocials from "./LandingSocials";
import LandingNav from "./LandingNav";

import { SOCIALS } from "../../config/SOCIALS";
import { NAVIGATION } from "../../config/NAVIGATION";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__text">
        <h1>Willie Jin</h1>
        <h3>Software and Electrical Engineer</h3>
        <div className="landing__text__link">
          <LandingSocials socials={SOCIALS}></LandingSocials>
        </div>
      </div>
      <div className="landing__nav">
        <ul id="grid" className="clear">
          <LandingNav navigation={NAVIGATION}></LandingNav>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
