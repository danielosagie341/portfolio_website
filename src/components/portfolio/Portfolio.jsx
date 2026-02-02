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
    description: 'Real-time chat application with user authentication, instant messaging, and distributed system architecture.',
    techStack: 'React.js, Firebase, Real-time Database',
    github: 'https://github.com/danielosagie341/chathub-distributed-system',
    demo: 'https://chathub-distributed-system.vercel.app',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rise Africa',
    description: 'Modern business website for African enterprise with responsive design and optimized performance.',
    techStack: 'React.js, Tailwind CSS, Vercel',
    github: 'https://github.com/danielosagie341/rise-africa',
    demo: 'https://rise-africa.vercel.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Spotify Clone',
    description: 'Music streaming platform clone with playlist management, search functionality, and sleek UI/UX design.',
    techStack: 'React.js, Spotify API, CSS3',
    github: 'https://github.com/danielosagie341/spotify_clone',
    demo: 'https://spotify-clone-lime-one-39.vercel.app',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Social Media Platform',
    description: 'Full-stack social networking application with user profiles, posts, comments, and real-time interactions.',
    techStack: 'React.js, Node.js, Firebase',
    github: 'https://github.com/danielosagie341/simple_social_media_web_app',
    demo: 'https://simple-social-media-web-app.vercel.app',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Assistant AI',
    description: 'AI-powered cryptocurrency assistant using Large Language Models for market insights and crypto information.',
    techStack: 'React.js, Google Gemini API, Next.js',
    github: 'https://github.com/danielosagie341/geminoid-ui',
    demo: 'https://geminoid-ui.vercel.app',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Fitness Rings - Health Tracker',
    description: 'Smart health and fitness tracking application with activity monitoring, goal setting, and progress visualization.',
    techStack: 'React.js, Chart.js, Local Storage',
    github: 'https://github.com/danielosagie341/fitness-rings',
    demo: 'https://fitness-rings.vercel.app',
  }
]

const featuredProject = {
  image: IMG1,
  title: 'Featured: WhatsApp Clone (Case Study)',
  description: 'A real-time chat platform built for scale, featuring authentication, group messaging, and distributed architecture. Reduced message delivery latency by 40%',
  techStack: 'React.js, Firebase, Node.js, WebSockets',
  github: 'https://github.com/danielosagie341/chathub-distributed-system',
  demo: 'https://chathub-distributed-system.vercel.app',
  metrics: [
    '1,000+ concurrent users',
    '40% faster message delivery',
    '99.99% uptime during test week',
  ],
};

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container fade-in">
        {/* Featured Project Card */}
        {works.map(({ id, image, title, description, techStack, github, demo }) => {
          return (
        <article className="portfolio__item portfolio__featured">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p className="portfolio__item-description">{description}</p>
          <p className="portfolio__item-tech"><strong>Tech Stack:</strong> {techStack}</p>
          
          <div className="portfolio__item-cta">
            <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio