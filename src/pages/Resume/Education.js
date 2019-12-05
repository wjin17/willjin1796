import React, { useState } from "react";

const Education = () => {
  const [hideInner, toggleInner] = useState(true);
  const innerClass = hideInner ? "slideup" : "slideup slidedown";
  const rotate = hideInner ? "las la-plus" : "las la-plus rotate";
  return (
    <div className="education">
      <div className="section__title" onClick={() => toggleInner(!hideInner)}>
        <h2 className="title__text">Education</h2>
        <h2 className="plus">
          <i className={rotate}></i>
        </h2>
      </div>
      <div className={innerClass}>
        <div className="education__inner">
          <p>Arizona State University</p>
          <p>Bachelor of Science</p>
          <p>Electrical Engineering</p>
          <p>
            GPA 3.61
            <span style={{ fontStyle: "italic" }}>magna cum laude</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
