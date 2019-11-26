import React, { useLayoutEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";

import FullHeader from "./FullHeader";
import MobileHeader from "./MobileHeader";

import logoShadow from "../../static/img/w-logo-shadow.png";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return width;
};

const Header = props => {
  const width = useWindowWidth();
  if (props.location.pathname === "/" || width === 0) return null;
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__home">
          <Link to="/">
            <img src={logoShadow} alt="site-logo"></img>
          </Link>
        </div>
        {width >= 768 ? <FullHeader /> : <MobileHeader />}
      </div>
    </div>
  );
};

export default withRouter(Header);
