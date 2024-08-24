import React from 'react'
import CV from '../../assets/cv.pdf'

const ActionButtons = () => {
  return (
      <div className='CTA'>
        <a href={CV} download={true} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
  )
}

export default ActionButtons