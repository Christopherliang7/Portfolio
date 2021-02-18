import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-container flex'>
          <div className='title grid'>
            <Link
              to='/' 
              style={{ textDecoration: 'none' }}>
              <h1>Christoper Liang</h1>
            </Link>
            <p>/ Software Engineer</p>
          </div>
          <ul className='navbar-options'>
            <Link 
              to='/' 
              style={{ textDecoration: 'none' }}>
              <li>About Me</li>
            </Link>
            <Link 
              to='/resume'
              style={{ textDecoration: 'none' }}>
              <li>Resume</li>
            </Link>
            <Link 
              to='/projects'
              style={{ textDecoration: 'none' }}>
              <li>Projects</li>
            </Link>
            {/* <Link 
              to='/life'
              style={{ textDecoration: 'none' }}>
              <li>Life</li>
            </Link> */}
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