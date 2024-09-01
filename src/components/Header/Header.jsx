import React from 'react'
import ActionButtons from './ActionButtons'
import MeTwo from '../../assets/me-two.png'
import HeaderSocials from './HeaderSocials'
import ThemeSwitcher from '../ThemeSwither'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <ThemeSwitcher />
        <h1>Hello I'm</h1>
        <h1>Osagie Daniel</h1>
        <h2 className="text-light">FrontEnd Developer</h2>
        <ActionButtons />
        <HeaderSocials />

        <div className="me">
          <img src={MeTwo} alt="pic" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header