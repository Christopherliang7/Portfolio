import React from 'react';
import { codeprojects } from '../data/codeprojects.js';

export const Projects = () => {
  return (
    <div className='projects'>
      {codeprojects.map((project) => {
        return (
          <div className='project-cards grid'>
            <div>
              <img className='project-img' src={project.image}/>
            </div>
            <div className='project-info'>
              <div className='project-title'>{project.title}</div>
              <div className='project-role'>{project.role}</div>
              <div className='project-tech'>{project.technologies}</div>
              <div className='project-description'>{project.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}