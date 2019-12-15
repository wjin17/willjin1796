import React, { useState } from "react";
import useHover from "../../lib/useHover";

const Contact = () => {
  const [hoverRef, isHovered] = useHover();
  const [instructionsText, setInstructionsText] = useState("Click to Copy");
  let hoverStyle;

  const updateClipboard = () => {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email).then(
      function() {
        setInstructionsText("Copied!");
      },
      function(err) {
        console.error("Copy failed :c", err);
        /* clipboard write failed */
      }
    );
  };

  if (isHovered) {
    hoverStyle = "show";
  } else {
    hoverStyle = "";
    setTimeout(() => {
      setInstructionsText("Click to Copy");
    }, 100);
  }

  return (
    <div className="contact page">
      <h1>Contact</h1>
      <div className="contact__content">
        <h2>Email:</h2>
        <h4
          id="email"
          className="contact-email"
          onClick={updateClipboard}
          ref={hoverRef}
        >
          willjin1796{"\u0040"}gmail{"\u002e"}com
        </h4>
        <p
          id="copy-instructions"
          className={`hover-instructions ${hoverStyle}`}
        >
          {instructionsText}
        </p>
        <h2>LinkedIn:</h2>
        <a
          href="https://www.linkedin.com/in/willjin1796/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>linkedin.com/in/willjin1796/</h4>
        </a>
      </div>
    </div>
  );
};

export default Contact;
