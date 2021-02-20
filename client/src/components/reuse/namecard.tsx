import React from "react";
import Icons from './icons';

function Card() {
  return (
    <div className="about-card card">
      <img className="card-img" src="./images/headshot.png" alt="Headshot" />
      <h1>Christopher Liang</h1>
      <p>Software Engineer</p>
      <Icons />
    </div>
  );
};

export default Card;
