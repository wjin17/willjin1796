import React from "react";
import ProjectList from "./ProjectList";

import { MAIN_PROJECTS, SIDE_PROJECTS } from "../../config/PROJECTS";

const Projects = () => {
  const ALL_PROJECTS = [...MAIN_PROJECTS, ...SIDE_PROJECTS];

  return (
    <div className="projects page">
      <h1>Projects</h1>
      <p className="projects__instruction">
        sections tagged with * are clickable
      </p>
      <div className="project__list">
        <ProjectList projects={ALL_PROJECTS}></ProjectList>
      </div>
    </div>
  );
};

export default Projects;
