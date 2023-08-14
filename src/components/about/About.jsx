import React from 'react';
import "./about.css";
import ME from "../../assets/me4.jpg";
import {FaAward} from "react-icons/fa";
import {GoFileCode} from "react-icons/go";
import {VscFolder} from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Darko Živić" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working Experience</small>
            </article>

            <article className='about_card'>
              <GoFileCode className='about_icon'/>
              <h5>Familiar With</h5>
              <small>HTML5 CSS3 JS ReactJS NodeJS</small>
            </article>

            <article className='about_card'>
              <VscFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
          With over 15 years of experience as an executive manager in the field of commerce and a year of dedicated web development, I bring a unique blend of expertise to the table. My solid foundation as an executive manager has honed my leadership and strategic skills, enabling me to drive successful outcomes in the business world.</p>
          <p>
          Additionally, my passion for web development has led me to master various programming languages including HTML5, CSS3, JavaScript, React, Node.js, Express.js, SQL and PostgresSQL. My proficiency in these languages allows me to craft dynamic and interactive websites, ensuring a seamless user experience. I am constantly seeking opportunities to further expand my knowledge and explore innovative solutions to deliver exceptional results
          </p>

          <a href="#contact" className='btn btn-primary'>Let`s Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;