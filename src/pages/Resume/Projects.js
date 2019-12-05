import React, { useState } from "react";

const Project = ({ project }) => {
  const { title, link, description } = project;
  const projectTitle = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h4>{title}*</h4>
    </a>
  ) : (
    <h4>{title}</h4>
  );
  return (
    <div className="project__content">
      <div className="project__title">{projectTitle}</div>
      <ul className="project__description">
        {description.map((desc, index) => {
          return (
            <li key={index}>
              <p>{desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Projects = ({ projects }) => {
  const [hideInner, toggleInner] = useState(true);
  const innerClass = hideInner ? "slideup" : "slideup slidedown";
  const rotate = hideInner ? "las la-plus" : "las la-plus rotate";
  return (
    <div className="resume__projects">
      <div className="section__title" onClick={() => toggleInner(!hideInner)}>
        <h2 className="title__text">Projects</h2>
        <h2 className="plus">
          <i className={rotate}></i>
        </h2>
      </div>
      <div className={innerClass}>
        <div className="projects__inner">
          {projects.map((project, index) => {
            return <Project key={index} project={project}></Project>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
