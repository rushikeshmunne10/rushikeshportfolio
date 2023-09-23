import React from 'react';
import './Projects.css';
import NEWSIFY from '../../images/newsifyy.png';
import HP from '../../images/homepage.png';
import PORTFOLIO from '../../images/portfolio.png';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projTitle">Projects</div>
      <div className="projectcontent">
        <div className="projectBars">
          <div className="projectBar">
            <img src={NEWSIFY} alt="image" className="projectBarImg" />
            <div className="projectBarText">
              <h2>Newsifyy - A News App</h2>
              <p>Newsifyy is a website which delivers top headlines of Six different domains. It is build with REACT JS using 'NEWSAPI'.</p>
            </div>
          </div>
            <div className="projectBar">
              <img src={HP} alt="image" className="projectBarImg" />
              <div className="projectBarText">
                <h2>Homepages - using HTML & CSS </h2>
                <p>Cloned homepages of various websites using HTML & CSS.</p>
            </div>
          </div>
          <div className="projectBar">
              <img src={PORTFOLIO} alt="image" className="projectBarImg" />
              <div className="projectBarText">
                <h2>Portfolio</h2>
                <p>Personal Portfolio website using REACT JS.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects
