import React from 'react';

export const Nav = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-container flex'>
          <div className='title grid'>
            <h1>Christoper Liang</h1>
            <p>/ Software Engineer</p>
          </div>
          <ul className='navbar-options'>
            <li>About Me</li>
            <li>Resume</li>
            <li>Programming</li>
            <li>Life</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}