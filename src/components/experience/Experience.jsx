import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>  
              <h4>HTML</h4>
                <small className="text-light">Experience</small>
                </div>
            </article>

            
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>React JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>Next JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>Tailwind CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>AWS</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>TypeSCript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>Jquery</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

              
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>Firebase</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

              
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>Supabase</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

              
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

              
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div className='.experience__details-icons'>
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>

              
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience