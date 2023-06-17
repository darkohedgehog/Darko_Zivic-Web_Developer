import React from 'react';
import "./services.css";
import {AiOutlineCheck} from "react-icons/ai";

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3>Web Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>With a keen eye for aesthetics, I create visually captivating websites that engage and delight users.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Using a user-centered design approach, I craft intuitive interfaces that enhance the user experience and drive conversions.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>From wireframing to prototyping, I ensure every design element is meticulously planned to achieve a seamless and engaging website.</p>
            </li>
            
          </ul>
         {/* END OF WEB DESIGN */}
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>I develop responsive and dynamic websites using the latest web technologies, ensuring optimal performance across devices.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>With expertise in HTML5, CSS3, and JavaScript frameworks, I build interactive and feature-rich web applications that meet clients' specific requirements.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>From front-end development to back-end integration, I deliver robust and scalable web solutions that align with industry best practices.</p>
            </li>
            
          </ul>
        {/* END OF WEB DEVELOPMENT */}
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>From front-end development to back-end integration, I deliver robust and scalable web solutions that align with industry best practices.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>With expertise in content strategy and production, I deliver engaging blog posts, articles, and social media content that drive audience engagement and brand awareness.</p>
            </li>
                        
          </ul>

        </article>

      </div>
    </section>
  )
}

export default Service;