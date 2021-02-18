import React from "react";
import { Icons } from './icons.jsx';

export const Card = () => {
  return (
    <div className="about-card card">
      <img className="card-img" src="./images/headshot.png" alt="Headshot" />
      <h1>Christopher Liang</h1>
      <p>Developer and Photographer</p>
      <Icons />
    </div>
  );
};
