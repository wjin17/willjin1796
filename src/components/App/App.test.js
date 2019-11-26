import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppThemeProvider } from "../Theme/ThemeContext";

describe("App", () => {
  const ThemeWrapper = () => {
    return (
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    );
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ThemeWrapper />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
