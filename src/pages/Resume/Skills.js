import React, { useState } from "react";

/* 
  //Skills Template
    {
      name: <Skill Name>
      level: <Level Out Of 5>
    } 
*/

const Circle = ({ filled }) => {
  const fill = filled ? "filled" : null;
  return (
    <div className="circle">
      <div className={`circle__inner ${fill}`}></div>
    </div>
  );
};

const SkillLevel = ({ level }) => {
  let levels = [...Array(5)];
  return (
    <div className="levels">
      {levels.map((circle, index) => {
        return <Circle key={index} filled={index < level}></Circle>;
      })}
    </div>
  );
};

const Skills = ({ skills }) => {
  const [hideInner, toggleInner] = useState(true);
  const innerClass = hideInner ? "slideup" : "slideup slidedown";
  const rotate = hideInner ? "las la-plus" : "las la-plus rotate";
  return (
    <div className="skills">
      <div className="section__title" onClick={() => toggleInner(!hideInner)}>
        <h2 className="title__text">Skills</h2>
        <h2 className="plus">
          <i className={rotate}></i>
        </h2>
      </div>
      <div className={innerClass}>
        <div className="skills__list">
          {skills.map((skill, index) => {
            const { name, level } = skill;
            return (
              <div className="skills__inner" key={index}>
                <p>{name}</p>
                <SkillLevel level={level}></SkillLevel>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
