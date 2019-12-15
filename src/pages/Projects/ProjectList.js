import React from "react";

const ProjectImage = ({ image }) => {
  return (
    <div className="square-image">
      <img src={image} alt="project"></img>
      <div className="square-image__filler"></div>
    </div>
  );
};

const Project = ({ project }) => {
  const { title, img, link, description } = project;
  const projectTitle = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h4>{title}*</h4>
    </a>
  ) : (
    <h4>{title}</h4>
  );
  return (
    <div className="project">
      <div className="project__image">
        <ProjectImage image={img}></ProjectImage>
      </div>
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

const ProjectList = ({ projects }) => {
  return projects.map((project, index) => {
    return <Project key={index} project={project}></Project>;
  });
};

export default ProjectList;
