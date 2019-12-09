import React from "react";

import Download from "./Download";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

import { DOWNLOAD, SKILLS, EXPERIENCE } from "../../config/RESUME";
import { MAIN_PROJECTS } from "../../config/PROJECTS";

const Resume = () => {
  return (
    <div className="resume page">
      <div className="resume__header">
        <h1>Resume</h1>
        <p>Get a copy</p>
        <Download files={DOWNLOAD}></Download>
      </div>
      <p className="resume__instruction">
        sections tagged with * are clickable
      </p>
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
