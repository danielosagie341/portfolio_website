import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './header.css'

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank"> <BsLinkedin /></a>
        <a href="https://github.com" rel="noreferrer" target="_blank"> <FaGithub /></a>
        <a href="https://dribble.com" rel="noreferrer" target="_blank">X</a>
      </div>
  )
}

export default HeaderSocials