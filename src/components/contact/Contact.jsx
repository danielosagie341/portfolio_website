import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qh9581v', 'template_s7yjw6n', form.current, 'EjJZ-YO3yNRtAwwOP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      })
    
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>danielosagie341@gmail.com</h5>
            <a href="mailto:danielosagie341@gmail.com" rel="noreferrer" target='_blank'>Send a message</a>
          </article>

          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>EhisOsagie</h5>
            <a href="https://wa.me/2349010794642" rel="noreferrer" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>Osagie Daniel</h5>
            <a href="https://www.instagram.com/osagie_daniel" rel="noreferrer" target='_blank'>Send a message</a>
          </article>


        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact