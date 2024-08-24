import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile-friendly and responsive websites using HTML, CSS, and frameworks like Tailwind CSS</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing dynamic and interactive SPAs with React JS and Next JS</p>
            </li>

            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Setting up and managing databases using Firebase and Supabase</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing backend functionality and server-side logic with Python and Node.js</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Delivering complete web applications, including both front-end and back-end development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Enhancing website performance through optimization techniques and best practices</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Managing code versions using Git and deploying applications to platforms like Vercel and AWS.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensuring websites work seamlessly across different browsers and devices</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Providing ongoing support and updates for your web applications to ensure they remain functional and secure</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Advising on the best technologies and practices for your web development projects</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Reviewing existing code and providing suggestions for improvements and optimizations</p>
            </li>


          </ul>
        </article>

        
      </div>
    </section>
  )
}

export default Services