import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { FaCode, FaServer, FaRocket, FaMobileAlt } from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container fade-in">
        <article className="service">
          <div className="service__head">
            <FaCode className="service__head-icon" />
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile-friendly and responsive websites using HTML, CSS, and Tailwind CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dynamic and interactive SPAs with React JS and Next.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cross-browser compatibility and device optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Performance optimization and best practices implementation</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <FaMobileAlt className="service__head-icon" />
            <h3>Mobile Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cross-platform mobile apps with React Native and Expo</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>iOS and Android apps from a single codebase</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Native mobile UI/UX with smooth animations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Push notifications, camera, and device API integration</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <FaServer className="service__head-icon" />
            <h3>Backend & Database</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backend functionality with Python and Node.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database setup and management with Firebase and Supabase</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full-stack web applications with integrated front-end and back-end</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API development and integration</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <FaRocket className="service__head-icon" />
            <h3>Deployment & Support</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Version control with Git and deployment to Vercel/AWS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ongoing support and maintenance for web applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Code review and optimization suggestions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical consulting for web development projects</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services