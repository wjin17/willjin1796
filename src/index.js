import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import "./static/scss/main.scss";
import "./static/scss/0-global/line-awesome/line-awesome.min.css";
import { AppThemeProvider } from "./components/Theme/ThemeContext";

const ThemeWrapper = () => {
  return (
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  );
};

ReactDOM.render(<ThemeWrapper />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
