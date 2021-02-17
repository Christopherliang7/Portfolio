import React from 'react';
import { experiences, education, skills } from '../data/experience.js'

export const Resume = () => {
  return (
    <div className='resume'>

      <div className='experience-list'>
        {experiences.map((experience) => {
          return (
            <p>{experience.company}</p>
          )
        })}
      </div>

      <div className='education-list'>
        {education.map((education) => {
          return (
            <p>{education.school}</p>
          )
        })}
      </div>

    </div>
  )
}