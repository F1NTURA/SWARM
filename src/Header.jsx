import { useState } from 'react'
import swarmlogo from './icons/swarm_logo.png'
import './style/header.css'

export function Header() {

  const [isActive, setIsActive] = useState(false)

  return (
    <header>
      <div className="container header__container">
        <a href="/">
          <img alt="SWARM" className="header__logo" src={swarmlogo}></img>
        </a>

        <nav>
          <ul className="header__ul">
            <li>
              <a className="header__nav-text active" href="/">
                Главная
              </a>
            </li>
            <li>
              <a className="header__nav-text" href="/">
                Чаты
              </a>
            </li>
            <li>
              <a className="header__nav-text" href="/">
                Про нас
              </a>
            </li>
          </ul>
        </nav>

        <button onClick={() => setIsActive(!isActive)} className={`header__burger-menu ${isActive ? "activeMenu" : ""}`}>
          <span />
        </button>

        {isActive && <div className='menu'>
          <div className='menu-header'>
            <img className="header__logo-menu" src={swarmlogo} alt="logo" />
          </div>

          <div className='menu-nav'>
            <ul>
              <li><a href="https://t.me/SWARM_OFFICIAL" target="_blank">Telegram</a></li>
              <li><a href="https://t.me/f1ntura" target="_blank">Поддержка</a></li>
              <li><a href="https://t.me/f1ntura" target="_blank">Предложение</a></li>
              <li><a href="https://www.tiktok.com/@swarm_tg" target="_blank">TikTok</a></li>
            </ul>
          </div>
        </div>}


      </div>
    </header>
  )
}
