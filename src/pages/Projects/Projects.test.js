import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { MAIN_PROJECTS, SIDE_PROJECTS } from "../../config/PROJECTS";

import Projects from "./Projects";
import ProjectList from "./ProjectList";

configure({ adapter: new Adapter() });

describe("Projects", () => {
  it("renders project component", () => {
    const wrapper = mount(<Projects />);
    expect(wrapper).not.toBeEmptyRender();
  });

  describe("Projects List", () => {
    const ALL_PROJECTS = [...MAIN_PROJECTS, ...SIDE_PROJECTS];
    const wrapper = mount(<ProjectList projects={ALL_PROJECTS}></ProjectList>);
    it("renders projects list component", () => {
      expect(wrapper).toContainMatchingElement(".project");
    });
    it(`renders ${ALL_PROJECTS.length} projects`, () => {
      wrapper.find("Project").forEach((node, index) => {
        expect(node.find(".project__title")).toIncludeText(
          ALL_PROJECTS[index].title
        );
      });
    });
    it(`renders ${ALL_PROJECTS.length} project images`, () => {
      wrapper.find("Project").forEach((node, index) => {
        expect(node.find("img")).toHaveProp("src", ALL_PROJECTS[index].img);
      });
    });
  });
});
