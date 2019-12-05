import React from "react";

import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

import { SKILLS, EXPERIENCE } from "../../config/RESUME";
import { MAIN_PROJECTS } from "../../config/PROJECTS";

const Resume = () => {
  return (
    <div className="resume page">
      <h1>Resume</h1>
      <p className="resume__instruction">words tagged with * are clickable</p>
      <div className="education-skills">
        <Education></Education>
        <Skills skills={SKILLS}></Skills>
      </div>
      <Experience experience={EXPERIENCE}></Experience>
      <Projects projects={MAIN_PROJECTS}></Projects>
    </div>
  );
};

export default Resume;
