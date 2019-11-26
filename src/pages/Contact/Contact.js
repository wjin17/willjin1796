import React from "react";
import useHover from "../../lib/useHover";

const Contact = () => {
  let showHover;

  const [hoverRef, isHovered] = useHover();

  const updateClipboard = () => {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email).then(
      function() {
        document.getElementById("copy-instructions").innerText = "Copied!";
      },
      function() {
        /* clipboard write failed */
      }
    );
  };

  if (isHovered) {
    showHover = "show";
  } else {
    showHover = "";
    const copyInstructions = document.getElementById("copy-instructions");
    setTimeout(() => {
      if (copyInstructions) copyInstructions.innerText = "Click to Copy";
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
        <p id="copy-instructions" className={`hover-instructions ${showHover}`}>
          Click to Copy
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
