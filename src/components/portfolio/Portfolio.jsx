import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const works = [
  {
    id: 1,
    image: IMG1,
    title: 'WhatsApp Clone',
    github: 'https://github.com/danielosagie341/chathub-distributed-system',
    demo: 'https://chathub-distributed-system.vercel.app',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rise Africa',
    github: 'https://github.com/danielosagie341/rise-africa',
    demo: 'https://rise-africa.vercel.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Spotify Clone',
    github: 'https://github.com/danielosagie341/spotify_clone',
    demo: 'https://spotify-clone-lime-one-39.vercel.app',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Basic social media app ',
    github: 'https://github.com/danielosagie341/simple_social_media_web_app',
    demo: 'https://simple-social-media-web-app.vercel.app',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Assistant Large Language Model',
    github: 'https://github.com/danielosagie341/geminoid-ui',
    demo: 'https://geminoid-ui.vercel.app',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Fitness Rings (Smart Health Assistant)',
    github: 'https://github.com/danielosagie341/fitness-rings',
    demo: 'https://fitness-rings.vercel.app',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          works.map(({ id, image, title, github, demo }) => {
            return (
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>

                <div className="portfolio__item-cta">
                  <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                </div>
              </article>
             )
          })
        }
       
      </div>
    </section>
  )
}

export default Portfolio