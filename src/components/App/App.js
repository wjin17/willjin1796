import React from "react";
import { HashRouter } from "react-router-dom";

import Header from "../Header/Header";
import TransitionWrapper from "./TransitionWrapper";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <TransitionWrapper />
      <Footer />
    </HashRouter>
  );
};

export default App;
