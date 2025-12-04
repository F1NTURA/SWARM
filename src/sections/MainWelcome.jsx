export function MainWelcome({ maskotSrc }) {
  return (
    <section className="welcome">
      <div className="container main__welcome-container">
        <div className="welcome-wrapper-text">
          <h1>Добро пожаловать</h1>

          <p>
            {' '}
            Платформа, где ты находишь нужные сообщества, подключаешься в один
            клик и общаешься с людьми по интересам. Быстро, удобно, без лишнего
            шума.
          </p>
        </div>

        <img alt="SWARM maskot" src={maskotSrc} className="maskot" />
      </div>
    </section>
  )
}
