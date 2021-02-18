import React from "react";
import { Link } from "react-router-dom";
import { Card } from './reuse/namecard.jsx';

export const About = () => {
  return (
    <div className="about">
      <div className="about-container grid">
        <Card />
        <div className="about-text">
          <h1>Hello!</h1>
          <p>My name is Christopher and I'm a Software Engineer.</p>
          <div className="about-buttons flex">
            <Link to="/resume">
              <button className="btn resume-btn">Resume</button>
            </Link>
            <Link to="/contact">
              <button className="btn contact-btn btn-outline">Contact</button>
            </Link>
          </div>
          <p>
            I have experience working excellently in agile teams, building
            beautiful and performant applications for clients. I’m an ambitious
            engineer who believes in scalable and performant solutions over
            quick fixes.
          </p>
          <p>
            Let's connect! I'd love to discuss the position you're hiring for,
            company culture, and why I could be a great fit for your team.
          </p>
        </div>
      </div>
    </div>
  );
};
