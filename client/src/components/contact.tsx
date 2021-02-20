import React from 'react';
import emailjs from 'emailjs-com';
import Card from './reuse/namecard';

const Contact: React.FC = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0z54jso', 'template_myu22sg', e.target, 'user_227JoVKwiLXAX8VacqlrS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }
  

  return (
    <div className="about">
      <div className="about-container grid">
        <Card />
        <form
          onSubmit={sendEmail}
          className="about-text" 
          action='https://formspree.io/f/maylzdll' 
          method='POST'>
          <h1>Contact Me</h1>
          <input 
            type="text" 
            className="field" 
            placeholder='Your Name'
            name='name'/>
          <input 
            type="email" 
            className="field" 
            placeholder='Your Email'
            name='email'/>
          <input 
            type="text" 
            className="field" 
            placeholder='Your Phone'
            name='number'/>
          <textarea 
            className="field" 
            placeholder='Message'
            name='message'/>
          <input 
            type="submit" 
            className='btn submit-btn'/>
        </form>
      </div>
    </div>
  )
}

export default Contact;