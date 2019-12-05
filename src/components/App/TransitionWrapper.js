import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Landing from "../../pages/Landing/Landing";
import About from "../../pages/About/About";
import Resume from "../../pages/Resume/Resume";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";

import googleAnalytics from "../../lib/googleAnalytics";
import google from "../../config/GOOGLE";

const TransitionWrapper = ({ location }) => {
  if (process.env.NODE_ENV === "production") {
    googleAnalytics.gtag("config", google.GA_MEASUREMENT_ID, {
      page_title: location.pathname.match(/[^/]*$/g)[0],
      page_path: location.pathname
    });
  }
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={{ enter: 400, exit: 400 }}
        classNames={"fade"}
      >
        <Switch location={location}>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(TransitionWrapper);
