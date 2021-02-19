import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-container flex'>

          <Link
            to='/' 
            style={{ textDecoration: 'none' }}>
            <h1>CL.</h1>
          </Link>

          <ul className='navbar-options'>

            <Link 
              to='/' 
              style={{ textDecoration: 'none' }}>
              <li>About</li>
            </Link>

            <Link 
              to='/projects'
              style={{ textDecoration: 'none' }}>
              <li>Projects</li>
            </Link>

            <a 
              href="./images/christopher-liang-resume.pdf" 
              target='_blank'>
              <li>Resume</li>
            </a>

            <Link  
              to='/contact'
              style={{ textDecoration: 'none' }}>
              <li className='contact'>Contact</li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  )
}