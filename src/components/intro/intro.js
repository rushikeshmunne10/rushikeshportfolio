import React from 'react';
import './Intro.css';
import BG from '../../images/photo.jpg';

const intro = () => {
  return (
    <section id='intro' >
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="name">Rushikesh Munne </span><br/>Web Designer and <br/>A Competitive Programmer. </span>
        </div>
          {/* <img src='' alt="Photo" className='bg' /> */}
    </section>
  )
}

export default intro;