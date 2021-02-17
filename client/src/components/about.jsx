import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container grid">
        <div className="about-card card">
          <img
            className="card-img"
            src="./images/headshot.png"
            alt="Headshot"
          />
          <h1>Christopher Liang</h1>
          <p>Developer and Photographer</p>
          <div className="about-icons">
            <div className="about-icons-list">
              <a
                href="https://www.facebook.com/christopher.liang.1022/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src="./images/social/facebook.png"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/clceru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src="./images/social/instagram.png"
                  alt="instagram"
                />
              </a>
              <a
                href="https://twitter.com/Chl959"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src="./images/social/twitter.png"
                  alt="twitter"
                />
              </a>
              <a
                href="https://github.com/Christopherliang7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src="./images/social/github.png" alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/christopher-liang7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src="./images/social/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>

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
