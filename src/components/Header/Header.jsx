import ActionButtons from './ActionButtons'
import MeTwo from '../../assets/profile.jpg'
import HeaderSocials from './HeaderSocials'
import ThemeSwitcher from '../ThemeSwither'

const Header = () => {
  return (
    <header className="hero-section fade-in">
      <div className="container header__container hero__split">
        <div className="hero__left">
          <ThemeSwitcher />
          <h1 className="hero__greeting">Hello, I'm</h1>
          <h1 className="hero__name">Osagie Daniel</h1>
          <h2 className="hero__role">Frontend Developer</h2>
          <p className="hero__summary">I build elegant, scalable web apps for modern businesses. Available for remote contracts and full-time roles.</p>
          <ActionButtons />
          <HeaderSocials />
        </div>
        <div className="hero__right">
          <div className="hero__avatar">
            <img src={MeTwo} alt="Osagie Daniel - React & Next.js Developer" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header