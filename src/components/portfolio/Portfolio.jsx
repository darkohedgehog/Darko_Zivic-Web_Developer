import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/coffee.png";
import IMG2 from "../../assets/hachi.png";
import IMG3 from "../../assets/robofriends.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "All About Coffee",
    github: "https://github.com/darkohedgehog/all-about-coffee",
    demo: "https://darkohedgehog.github.io/all-about-coffee"
  },
  {
    id: 2,
    image: IMG2,
    title: "Hachi The Spoiled Dog",
    github: "https://github.com/darkohedgehog/hachi",
    demo: "https://hachi-the-spoiled-dog.netlify.app/"

  },
  {
    id: 3,
    image: IMG3,
    title: "Robofriends",
    github: "https://github.com/darkohedgehog/Robofriends",
    demo: "https://darkohedgehog.github.io/Robofriends"
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>     

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='blank'>GitHub</a>
          <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

            )
          })
        }
        
        </div>  

    </section>
  )
}

export default Portfolio;