import React from 'react';
import "./testimonials.css";
import AVTR1 from "../../assets/ztm2.jpg";
import AVTR2 from "../../assets/w3sch.jpg";
import AVTR3 from "../../assets/jsinfo.png";
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,    
    name: "Andrei Neagoie & Zero To Mastery",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit."
  },
  {avatar: AVTR2,    
    name: "W3 Schools",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit."
  },
  {
    avatar: AVTR3,    
    name: "JavaScript.info",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit."
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Study Recommendations</h5>
      <h2>Special Thanks</h2> 

      <Swiper className='container testimonials_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}   
      >
      {
        data.map (({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt='' />
            </div>
            <h5 client_name="true">{name}</h5>
            <small className='client_review'>
              {review}
            </small>         
        </SwiperSlide>    
          )             
        })
        
      }
      </Swiper>
    </section>
  )
}

export default Testimonials;