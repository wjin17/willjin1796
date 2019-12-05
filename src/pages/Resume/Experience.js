import React, { useState } from "react";

/* 
  //Experience Template
    {
        organization: <Company Name>,
        location: <City, State Abv>,
        role: <Job Role>,
        start: <Start Month Year>,
        end: <End Month Year>,
        description: [
                <Descriptions>
            ]
    } 
*/

const ExperienceItem = ({ experience }) => {
  const {
    organization,
    location,
    role,
    start,
    end,
    description,
    url
  } = experience;
  const title = url ? (
    <a href="url" target="_blank">
      <h4>{organization}*</h4>
    </a>
  ) : (
    <h4>{organization}</h4>
  );
  return (
    <div className="experience__content">
      <div className="experience__company-location">
        {title}
        <h4 className="">{location}</h4>
      </div>
      <div className="experience__role-date">
        <h4 className="role">{role}</h4>
        <div className="date">
          <h4>{start}</h4>
          <h4 className="dash">&nbsp;-&nbsp;</h4>
          <h4> {end}</h4>
        </div>
      </div>
      <ul className="experience__description">
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

const Experience = ({ experience }) => {
  const [hideInner, toggleInner] = useState(true);
  const innerClass = hideInner ? "slideup" : "slideup slidedown";
  const rotate = hideInner ? "las la-plus" : "las la-plus rotate";
  return (
    <div className="experience">
      <div className="section__title" onClick={() => toggleInner(!hideInner)}>
        <h2 className="title__text">Experience</h2>
        <h2 className="plus">
          <i className={rotate}></i>
        </h2>
      </div>
      <div className={innerClass}>
        <div className="experience__inner">
          {experience.map((exp, index) => {
            return (
              <ExperienceItem key={index} experience={exp}></ExperienceItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
