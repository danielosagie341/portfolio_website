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
        <h5>Hello I'm</h5>
        <h1>Osagie Daniel</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
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