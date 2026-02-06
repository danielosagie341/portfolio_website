import './portfolio.css'
import IMG1 from '../../assets/zion.png'
import IMG2 from '../../assets/iak.png'
import IMG3 from '../../assets/aptip.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG7 from '../../assets/portfolio1.png'
import IMG8 from '../../assets/explainableai.png'
import IMG9 from '../../assets/arbitrage.png'
import IMG10 from '../../assets/fakenews.png'
import IMG11 from '../../assets/industrialtrack.png'
import IMG12 from '../../assets/jobtracker.png'
import IMG13 from '../../assets/supplychain.png'
import IMG14 from '../../assets/mobileapp.jpeg'
import industrialVid from '../../assets/Industrial.mp4'

const websiteProjects = [
  {
    id: 'web-1',
    title: 'Zion Study Centre',
    description: 'High-converting marketing website with modern UI, SEO best practices, and performance optimization for an academy.',
    image: IMG1,
    techStack: 'React.js, Tailwind CSS, Vite',
    video: '',
    github: 'https://github.com/danielosagie341/zionstudycentrewebsiteui',
    demo: 'https://zionstudycentre.com.ng',
  },
  {
    id: 'web-2',
    title: 'IAK energy Group',
    description: 'Clean, responsive portfolio website tailored for oil and gas company.',
    image: IMG2,
    techStack: 'React.js, CSS, Vercel',
    video: '',
    github: 'https://github.com/danielosagie341/iakenergygroup',
    demo: 'https://iakenergygroup.com',
  },
]

const webAppProjects = [
  {
    id: 'app-1',
    title: 'social media Web App',
    description: 'Simple social media app with crud functionalities, authentication, like, unlike and delete functionalities.',
    image: IMG4,
    techStack: 'React.js, oAuth, firebase, Vercel',
    video: '',
    github: 'https://github.com/danielosagie341/simple_social_media_web_app',
    demo: 'https://simple-social-media-web-app.vercel.app',
  },
  {
    id: 'app-2',
    image: IMG7,
    title: 'WhatsApp Clone',
    description: 'A real-time chat application with user authentication, group chats, and personal chats',
    techStack: 'React.js, Firebase, Real-time Database, vercel',
    video: '',
    github: 'https://github.com/danielosagie341/chathub-distributed-system',
    demo: 'https://chathub-distributed-system.vercel.app',
  },
  {
    id: 'app-3',
    title: 'Explainable AI Student Performance Predictor',
    description: 'An AI-powered system that predicts student grades and provides interpretable insights using SHAP values. It helps educators understand key drivers of performance like attendance and engagement to intervene early for at-risk students.',
    image: IMG8,
    techStack: 'Python, Flask, Scikit-Learn, SHAP, Pandas, HTML/CSS/JS',
    video: '',
    github: 'https://github.com/danielosagie341/explainanbleaimodelforstudentperformanceprediction',
    demo: 'https://explainable-ai-student.onrender.com',
  },
  {
    id: 'app-4',
    title: 'Automated Fake News Detector',
    description: 'A full-stack application leveraging Natural Language Processing (NLP) to classify news articles as real or fake. Features a REST API backend utilizing NLTK/Spacy for text processing and a responsive React frontend for user interaction.',
    image: IMG3,
    techStack: 'React, TypeScript, Tailwind CSS, Python, Flask, NLTK, Scikit-Learn',
    video: '',
    github: 'https://github.com/danielosagie341/automatedfakenewsdetector',
    demo: 'https://automatedfakenewsdetector.vercel.app',
  },
  {
    id: 'app-5',
    title: 'APTip (Advanced Persistent Threat Intelligence Platform)',
    description: 'A cybersecurity platform featuring AI-driven threat analysis (using Fine-tuned DistilBERT), Real-time 3D Threat Globe visualization, and an IP Reputation Checker. It aids in identifying phishing, malware, and other cyber threats.',
    image: IMG10,
    techStack: 'React, React-Globe.gl, Python (Flask), Node.js (Express), Hugging Face Transformers',
    video: '',
    github: 'https://github.com/danielosagie341/aptip',
    demo: 'https://aptip-frontend.onrender.com',
  },
  {
    id: 'app-6',
    title: 'Industrial Object Tracking',
    description: 'A computer vision system for real-time detection and tracking of industrial assets using YOLOv8. It monitors object movement to improve operational efficiency and safety in warehouse environments. The aim of this project was to integrate it into an industrial environment. DUE TO FREE TIER HOSTING LIMITATION PROJECTS PERFORMANCE IS FAR BETTER WHEN RAN LOCALLY',
    image: IMG11,
    techStack: 'Python, Flask, OpenCV, YOLOv8, React',
    video: industrialVid,
    github: 'https://github.com/danielosagie341/industrial-object-tracking',
    demo: 'https://industrial-object-tracking.vercel.app/',
  },
  {
    id: 'app-7',
    title: 'Job Application Tracker',
    description: 'A dedicated productivity tool helping job seekers organize their job hunt. Users can track application statuses, manage company details, and store documents facilitates by a custom backend API.',
    image: IMG12,
    techStack: 'React, TypeScript, Tailwind CSS, Node.js, Express',
    video: '',
    github: 'https://github.com/danielosagie341/jobapplicationtracker',
    demo: 'https://jobapplicationtracker-zeta.vercel.app/',
  },
  {
    id: 'app-8',
    title: 'Supply Chain Management System',
    description: 'A modern solution for managing inventory, products, orders, and blockchain-verified transactions. Features role-based dashboards for different supply chain stakeholders.',
    image: IMG13,
    techStack: 'Next.js, React, TypeScript, Node.js, Express, Tailwind CSS',
    video: '',
    github: 'https://github.com/danielosagie341/supplychainmanagementsystem',
    demo: 'https://supplychainmanagementsystem-two.vercel.app/',
  },
  {
    id: 'app-9',
    title: 'Abitrage finder',
    description: 'Was too broke to pay for a sports arbitrage app so i just made one for myself. It scrapes odds data from multiple bookmakers, identifies arbitrage opportunities, and calculates optimal bet amounts to guarantee profit regardless of the outcome.',
    image: IMG9,
    techStack: 'python, React, TypeScript, Tailwind CSS',
    video: '',
    github: 'https://github.com/danielosagie341/arbitrageFrontend',
    demo: 'https://arbitrage-frontend-six.vercel.app/',
  }
]

const mobileAppProjects = [
  {
    id: 'mobile-1',
    title: 'Fitness Tracker Mobile App',
    description: 'Cross-platform fitness tracker with activity insights, goals, and progress dashboards.',
    image: IMG14,
    techStack: 'React Native, Expo Go, Firebase',
    video: '',
    github: 'https://github.com/danielosagie341/women-health-tracking-mobile-app',
    demo: '',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container fade-in">
        <div className="portfolio__section">
          <h3 className="portfolio__section-title">Websites</h3>
          <div className="portfolio__grid">
            {websiteProjects.map(({ id, image, video, title, description, techStack, github, demo }) => (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  {video ? (
                    <video src={video} controls poster={image} />
                  ) : (
                    <img src={image} alt={title} />
                  )}
                </div>
                <h3>{title}</h3>
                <p className="portfolio__item-description">{description}</p>
                <p className="portfolio__item-tech"><strong>Tech Stack:</strong> {techStack}</p>
                <div className="portfolio__item-cta">
                  {github && (
                    <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                  )}
                  {demo && (
                    <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="portfolio__section">
          <h3 className="portfolio__section-title">Web Applications</h3>
          <div className="portfolio__grid">
            {webAppProjects.map(({ id, image, video, title, description, techStack, github, demo }) => (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  {video ? (
                    <video src={video} controls poster={image} />
                  ) : (
                    <img src={image} alt={title} />
                  )}
                </div>
                <h3>{title}</h3>
                <p className="portfolio__item-description">{description}</p>
                <p className="portfolio__item-tech"><strong>Tech Stack:</strong> {techStack}</p>
                <div className="portfolio__item-cta">
                  {github && (
                    <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                  )}
                  {demo && (
                    <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="portfolio__section">
          <h3 className="portfolio__section-title">Mobile Applications</h3>
          <div className="portfolio__grid">
            {mobileAppProjects.map(({ id, image, video, title, description, techStack, github, demo }) => (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  {video ? (
                    <video src={video} controls poster={image} />
                  ) : (
                    <img src={image} alt={title} />
                  )}
                </div>
                <h3>{title}</h3>
                <p className="portfolio__item-description">{description}</p>
                <p className="portfolio__item-tech"><strong>Tech Stack:</strong> {techStack}</p>
                <div className="portfolio__item-cta">
                  {github && (
                    <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                  )}
                  {demo ? (
                    <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                  ) : (
                   <span className='btn' style={{ cursor: 'default', opacity: 0.8, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#6e473b', border: '1px dashed #beb5a9' }}>
                      Can't really demo mobile app now can I? 🤷‍♂️
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio