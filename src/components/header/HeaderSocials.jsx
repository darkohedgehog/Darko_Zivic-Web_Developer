import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href="https://www.linkedin.com/in/darko-%C5%BEivi%C4%87" target='blank'><BsLinkedin/></a>
    <a href="https://github.com/darkohedgehog" target='blank'><FaGithub /></a>
    <a href="https://www.facebook.com/zivic.vu" 
    target='blank'><BsFacebook /></a>

    </div>
  )
}

export default HeaderSocials;