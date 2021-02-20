import React, { useState } from "react";

const Resume: React.FC = () => {
  const [button, setButton] = useState<boolean>(false);
  return (
      <div 
      className="resume"
      onMouseMove={() => setButton(true)}
      onClick={() => setButton(false)}>
        <img
          className="resume-img"
          src="./images/resume.png"
          alt="resume" />
        {button === true 
          ? <a className="resume-dl" href="./images/christopher-liang-resume.pdf" download>Download</a>
          : <></>
        }
      </div>
  );
};

export default Resume;
