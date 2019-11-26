import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Landing from "../../pages/Landing/Landing";
import About from "../../pages/About/About";
import Resume from "../../pages/Resume/Resume";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const TransitionWrapper = ({ location }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default withRouter(TransitionWrapper);
