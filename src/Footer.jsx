import swarmLogo from './icons/swarm_logo.png'
import arrow from './icons/arrow-top.png'

import './style/footer.css'

export function Footer() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <footer>
      <div className="container footer_block">
        <img className="footer_swarm-logo" src={swarmLogo} />

        <hr></hr>
        <div className="footer_content">
          <nav>
            <div className="footer_nav-block">
              <p>Про нас</p>
              <ul>
                <li>
                  <a href="https://t.me/SWARM_OFFICIAL" target="_blank">Telegram</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@swarm_tg" target='_blank'>TikTok</a>
                </li>
                <li>
                  <a href="#" target='_blank'>История</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Нужна помощь?</p>
              <ul>
                <li>
                  <a href="https://t.me/f1ntura" target='_blank'>Поддержка</a>
                </li>
                <li>
                  <a href="https://t.me/f1ntura" target='_blank'>Предложение</a>
                </li>
              </ul>
            </div>
          </nav>

          <button onClick={scrollToTop}>
            <img src={arrow} height={20}></img>
          </button>
        </div>
        <hr></hr>
        <p className='footer_swarm-bottom-logo'>SWARM</p>
      </div>
    </footer>
  )
}
