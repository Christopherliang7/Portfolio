import React from 'react';

export const About = () => {
  return (
    <div className='about'>
      <div className="about-container grid">

        <div className="about-card card">
          {/* <img src='https://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg' atr='Headshot'/> */}
          <img src='./images/headshot.png' alt='Headshot'/>
          <h1>Christopher Liang</h1>
          <p>SOFTWARE ENGINEER</p>
          <div className='about-icons flex'>
            
          </div>
        </div>

        <div className="about-text">
          <h1>Hello!</h1>
          <p>My name is Christopher and I'm a Software Engineer.</p>
          <div className='about-buttons flex'>
            <button className='btn resume-btn'>
              Resume
            </button>
            <button className='btn contact-btn btn-outline'>
              Contact
            </button>
          </div>
          <p>I have experience working excellently in agile teams, building beautiful and performant applications for clients. I’m an ambitious engineer who believes in scalable and performant solutions over quick fixes.</p>
          <p>I would love to have a conversation with you to discuss the position you're hiring for, company culture, and why I could be a great fit for your team.</p>
        </div>

      </div>
    </div>
  )
}