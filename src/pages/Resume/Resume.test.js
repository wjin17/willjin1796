import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { DOWNLOAD, SKILLS, EXPERIENCE } from "../../config/RESUME";
import { MAIN_PROJECTS } from "../../config/PROJECTS";

import Resume from "./Resume";
import Download from "./Download";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

configure({ adapter: new Adapter() });

describe("Resume", () => {
  it("renders resume children", () => {
    const wrapper = mount(<Resume />);
    expect(wrapper).toContainMatchingElement(Download);
    expect(wrapper).toContainMatchingElement(Education);
    expect(wrapper).toContainMatchingElement(Skills);
    expect(wrapper).toContainMatchingElement(Experience);
    expect(wrapper).toContainMatchingElement(Projects);
  });

  describe("Download", () => {
    let wrapper;
    beforeAll(() => {
      return (wrapper = mount(<Download files={DOWNLOAD}></Download>));
    });
    it(`renders download component`, () => {
      expect(wrapper).toContainMatchingElements(DOWNLOAD.length, "a");
    });
    it(`renders ${DOWNLOAD.length} download links`, () => {
      wrapper.find("a").forEach((node, index) => {
        expect(node.find("a")).toHaveProp("download", DOWNLOAD[index].fileName);
      });
    });
  });

  describe("Education", () => {
    const wrapper = mount(<Education></Education>);
    it("renders education component", () => {
      expect(wrapper).toContainMatchingElement(".education");
    });
  });

  describe("Skills", () => {
    const wrapper = mount(<Skills skills={SKILLS}></Skills>);
    it("renders skills component", () => {
      expect(wrapper).toContainMatchingElement(".skills");
    });
    it(`renders ${SKILLS.length} skills`, () => {
      wrapper.find("Skill").forEach((node, index) => {
        expect(node.find("p")).toHaveText(SKILLS[index].name);
      });
    });
  });

  describe("Experience", () => {
    const wrapper = mount(<Experience experience={EXPERIENCE}></Experience>);
    it("renders experience component", () => {
      expect(wrapper).toContainMatchingElement(".experience");
    });
    it(`renders ${EXPERIENCE.length} experiences`, () => {
      wrapper.find("ExperienceItem").forEach((node, index) => {
        expect(node.find(".company")).toIncludeText(
          EXPERIENCE[index].organization
        );
      });
    });
  });

  describe("Projects", () => {
    const wrapper = mount(<Projects projects={MAIN_PROJECTS}></Projects>);
    it("renders projects component", () => {
      expect(wrapper).toContainMatchingElement(".resume__projects");
    });
    it(`renders ${MAIN_PROJECTS.length} projects`, () => {
      wrapper.find("Project").forEach((node, index) => {
        expect(node.find(".project__title")).toIncludeText(
          MAIN_PROJECTS[index].title
        );
      });
    });
  });
});
