import React from 'react';
import "./footer.css";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer_logo'>HEDGEHOG</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Special Thanks</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/darko-%C5%BEivi%C4%87" target='blank'><BsLinkedin/></a>
      <a href="https://github.com/darkohedgehog" target='blank'><FaGithub /></a>
      <a href="https://www.facebook.com/zivic.vu" 
      target='blank'><BsFacebook /></a>
      </div>
      
      <div className="footer_copyright">
        <small>&copy; HEDGEHOG</small>
      </div>

    </footer>
  )
}

export default Footer;