import React from 'react';
import './About.css';
import { Link } from 'react-scroll';
import btnImg from '../../images/hireme.png';

const About = () => {

  return (
    <section id="about">
      <div className="aboutTitle">About Me</div>
      <div className="aboutDesc">
        <span className="brief"> <p>I'm <b>Rushikesh Munne</b>, a computer science undergrad with expertise in web development and CPP. Passionate about using technology to drive innovation, I enjoy tackling complex challenges and collaborating on exciting projects. Let's connect and create something amazing!</p></span>
        <span className="qual"><p>I'm a III year student pursuing B.Tech in Computer Science and Engineering at Yeshwantrao Chavan College of Engineering, Nagpur (2021-2025)</p></span>
      </div>

      <div className="aboutbtn">
      <div className='buttonContainer'>
        <a href="https://rushikeshmunne10.github.io/resume.html" target="_blank" rel="noopener noreferrer">
          <button className='button'>
            <img src={btnImg} alt='resume' className='btnImg' /> Resume
          </button>
        </a>
      </div>
      <div className='buttonContainer'>
        <a href="https://rushikeshmunne10.github.io/certifications.html" target="_blank" rel="noopener noreferrer">
          <button className='button'>
            <img src={btnImg} alt='certifications' className='btnImg' /> Certifications
          </button>
        </a>
      </div>
    </div>

      {/* <div className="aboutbtn">
        <a href="/resume.html" target="_blank" rel="noopener noreferrer">
          <button >Resume</button>
        </a>
        <a href="/resume.html" target="_blank" rel="noopener noreferrer">
          <button >Certifications</button>
        </a>
        </div> */}

        {/* <span id="aboutBtn1">
        <a href="/resume.html" target="_blank" rel="noopener noreferrer">
          <button ><img src={btnImg} alt='resume' />Certifications</button>
        </a>
        </span> */}



    </section>
  )
}

export default About

