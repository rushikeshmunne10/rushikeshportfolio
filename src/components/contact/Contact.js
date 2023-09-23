import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/__11.jpeg';
import github from '../../images/github-image.webp';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_414bwmk', 'template_0khenhl', form.current, 'vYcJtrRqN_XOZ4vEW')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent !');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill the form below to discuss any work opportunities.</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>

        <input type="text" className="name1" placeholder='Name' name="user_name" />
        <input type="email" className="email" placeholder='Your Email' name="user_email" />
        <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
        <button type='submit' value='send' className="btnSubmit">Submit</button>

        <div className="links">
            <a href='https://instagram.com/rushikeshmunne_10?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' rel="noreferrer"><img src={instagram} alt="Instagram" className="link1" /></a>
            <a href='https://www.linkedin.com/in/rushikesh-munne-6887b425b' target='_blank' rel="noreferrer"><img src={linkedin} alt="LinkedIn" className="link2" /></a>
            <a href='https://github.com/rushikeshmunne10' target='_blank' rel="noreferrer"><img src={github} alt="Github" className="link3" /></a>
        </div>
      </form>
    </div>
  )
}

export default Contact
