import React from 'react'
import { BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>OSAGIE DANIEL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/sun_God360" target='_blank' rel="noreferrer" > <BsTelegram /> </a>
        <a href="https://www.instagram.com/osagie_daniel" target='_blank' rel="noreferrer"> <BsInstagram /></a>
        <a href="https://twitter.com/danielosagie_" target='_blank' rel="noreferrer"> <BsTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Osagie Daniel. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer