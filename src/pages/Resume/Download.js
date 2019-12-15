import React from "react";

/* 
  //Resume Download
    {
      name: <Resume Name>
      filename: <Saved File Name>
      file: <Which File>
    } 
*/

const DownloadLink = ({ fileProps }) => {
  const { file, fileName, name } = fileProps;
  return (
    <a
      href={file}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4>{name}</h4>
    </a>
  );
};

const Download = ({ files }) => {
  return files.map((file, index) => {
    return <DownloadLink key={index} fileProps={file}></DownloadLink>;
  });
};

export default Download;
