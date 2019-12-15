import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import { AppThemeProvider } from "../Theme/ThemeContext";
import TransitionWrapper from "./TransitionWrapper";

configure({ adapter: new Adapter() });

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

  describe("404 Page", () => {
    it("renders 404 on bad uri", () => {
      const wrapper = mount(
        <MemoryRouter
          initialEntries={[
            { hash: "", pathname: "/baduri", search: "", state: undefined }
          ]}
        >
          <TransitionWrapper />
        </MemoryRouter>
      );
      expect(wrapper.find("h1")).toHaveText("4🤔4 Not Found");
    });
  });
});
