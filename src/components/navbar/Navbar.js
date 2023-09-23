import React from 'react';
import './Navbar.css';
import contactImg from '../../images/contact.png';
import logo from '../../images/logo portfolio.png';
import { Link } from 'react-scroll';



const Navbar = () => {
  return (
    <nav className="navbar">
          <img src={logo} alt='logo' className="logo" />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuItemList">About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuItemList">Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuItemList">Projects</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
          <img src={contactImg} alt="contact Image" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default Navbar;