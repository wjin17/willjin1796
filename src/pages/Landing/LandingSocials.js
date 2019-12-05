import React from "react";

/* 
  //Socials Template
    [
      { link: "", icon: ""},
      { link: "", icon: ""}      
    ] 
*/

const SocialLink = ({ link, icon }) => {
  return (
    <h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <i className={icon}></i>
      </a>
    </h1>
  );
};

const LandingSocials = ({ socials }) => {
  return socials.map(({ link, icon }) => {
    return <SocialLink key={link} link={link} icon={icon}></SocialLink>;
  });
};

export default LandingSocials;
