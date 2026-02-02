import React from 'react'
import CV from '../../assets/CV.pdf'
import './header.css'

const ActionButtons = () => {
  return (
      <div className='CTA'>
        <a href={CV} download={true} className='btn'>Download CV</a>
        <a href="#contact" className='btn'>Let's Talk</a>
      </div>
  )
}

export default ActionButtons