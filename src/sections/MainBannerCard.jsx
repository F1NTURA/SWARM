import { MainFavoriteButton } from './MainFavoriteButton'

export function MainBannerCard({ imagesSrc, name, online, descriptions, link }) {
  return (
    <div className="main__banner-card">
      <img
        src={imagesSrc}
        alt="background card"
        className="main__banner-card-img"
      ></img>
      <div className="main__banner-card-text">
        <div className="main__banner-card-text-title">
          <p className="main__banner-card-name">{name}</p>
          <p className="main__banner-card-online">{online}+</p>
        </div>

        <p className="main__banner-card-text-subtitle">{descriptions}</p>
        <div className="main__banner-card-btn">
          <button className="main__banner-card-btn-join"><a href={link} target='_blank'>Зайти</a></button>
          <MainFavoriteButton></MainFavoriteButton>
        </div>
      </div>
    </div>
  )
}
