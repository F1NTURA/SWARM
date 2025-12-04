import { MainFavoriteButton } from './MainFavoriteButton'

export function MainChatsCard({ images, name, descriptions, online, link }) {
  return (
    <div className="main__chats-card">
      <img src={images} />
      <div className="main__chats-card-text">
        <div className="main__chats-card-text-title">
          <p className="main__chats-card-text-name">{name}</p>
          <p className="main__chats-card-text-online">{online}+</p>
        </div>

        <p className="main__chats-card-text-subtitle">{descriptions}</p>

        <div className="main__chats-card-btn">
          <button className="main__chats-card-btn-join">

            {online > 0 && <span><a href={link} target='_blank'>Зайти</a></span>}
            {online <= 0 && <span><a href="https://t.me/f1ntura" target='_blank'>Занять</a></span>}
          </button>
          <MainFavoriteButton></MainFavoriteButton>
        </div>
      </div>
    </div>
  )
}
