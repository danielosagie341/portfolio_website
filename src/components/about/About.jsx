import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className=" about__container fade-in">

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
        
            <article className="about__card">
              <FiUser className='about__icon' />
              <h5>Clients</h5>
              <small>10+ clients</small>
            </article>
         
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ completed projects</small>
            </article>
          </div>

          <p>
            Hi, I'm Daniel, a passionate web developer with a love for creating innovative and user-friendly applications. I'm currently pursuing a degree in Computer Science, where I hone my skills in web development and software engineering. I specialize in front-end development using React.js and have experience with back-end technologies like Node.js and Supabase. My expertise also extends to responsive design and performance optimization.
          </p>
          <p>
            <strong>Based in Abuja, Nigeria</strong> | Available for remote freelance projects and full-time opportunities worldwide.
          </p>

          <a href="#contact" className='btn-primary btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About