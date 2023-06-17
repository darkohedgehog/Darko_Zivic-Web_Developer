import React from 'react';
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpeg";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container ">
        <h5>Hello I` m</h5>
        <h1>Darko Živić</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Darko Živić" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header;