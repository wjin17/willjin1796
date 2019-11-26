import React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";

configure({ adapter: new Adapter() });

describe("Header", () => {
  const resizeWindow = (x, y) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event("resize"));
  };
  describe("on landing page", () => {
    it("renders null on '/' path", () => {
      const wrapper = mount(
        <MemoryRouter
          initialEntries={[
            { hash: "", pathname: "/", search: "", state: undefined }
          ]}
        >
          <Header />
        </MemoryRouter>
      );
      expect(wrapper.find("Header")).toBeEmptyRender();
    });
  });
  describe("on non-landing page", () => {
    it("renders component on non '/' path", () => {
      const wrapper = mount(
        <MemoryRouter
          initialEntries={[
            { hash: "", pathname: "/about", search: "", state: undefined }
          ]}
        >
          <Header />
        </MemoryRouter>
      );
      expect(wrapper.find("Header")).not.toBeEmptyRender();
    });
    it("renders full component on width >= 768px", () => {
      const wrapper = mount(
        <MemoryRouter
          initialEntries={[
            { hash: "", pathname: "/about", search: "", state: undefined }
          ]}
        >
          <Header />
        </MemoryRouter>
      );
      act(() => {
        resizeWindow(768, 666);
      });
      expect(wrapper.find(".full-header")).not.toBeEmptyRender();
    });
    it("renders mobile component on width < 768px", () => {
      const wrapper = mount(
        <MemoryRouter
          initialEntries={[
            { hash: "", pathname: "/about", search: "", state: undefined }
          ]}
        >
          <Header />
        </MemoryRouter>
      );
      act(() => {
        resizeWindow(767, 666);
      });
      expect(wrapper.find(".mobile-header")).not.toBeEmptyRender();
    });
  });
});
