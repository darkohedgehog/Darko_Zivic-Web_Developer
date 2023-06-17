import React from 'react';
import "./contact.css";
import {MdOutlineMail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {SiViber} from "react-icons/si";
import { useRef } from 'react';
import emailjs from "emailjs-com";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgyua0q', 'template_ix1op9q', form.current, 'BydbX3l37aw-BuJCZ')
      
    e.target.reset ()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
          <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>zivic.darko79@gmail.com</h5>
            <a href="mailto:zivic.darko79@gmail.com">Send an Email</a>
          </article>

          <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Darko Živić</h5>
            <a href="https://m.me//zivic.vu" target='blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
          <SiViber className='contact_option-icon'/>
            <h4>Mobile</h4>
            <h5>+385955074922</h5>
            <a href="viber://add?number=+385955074922" target='blank'>Send a Message via Viber Application</a>

          </article>
          </div>    
               
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>         
      </div>

    </section>
  )
}

export default Contact