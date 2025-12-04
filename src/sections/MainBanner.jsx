import { BannerData } from '../cards/BannerData'
import { MainBannerCard } from './MainBannerCard'

export function MainBanner({ adSrc }) {
  return (
    <section className="banner">
      <div className="container main__banner-container">
        {BannerData.map((card) => (
          <MainBannerCard
            key={card.id}
            imagesSrc={card.images}
            name={card.name}
            online={card.online}
            descriptions={card.descriptions}
            link={card.link}
          ></MainBannerCard>
        ))}

        <div className="main__banner-ad">
          <img
            src={adSrc}
            alt="advertisement"
            className="main__banner-card-ad"
          ></img>
        </div>
      </div>
    </section>
  )
}
