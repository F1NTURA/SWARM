import { chatsData } from '../cards/chatsData'
import { MainChatsCard } from './MainChatsCard'
import reload from '../icons/reload.svg'
import { useState } from 'react'

export function MainChats() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className="main__chats">
      {/* в разработке*/}

      {/* <div className="container">
            <div className="main_filter-chats">
                <input type="search"
                    value={searchTerm}
                    onChange={e => {
                        setSearchTerm(e.target.value)
                    }}
                    placeholder="Поиск"
                />
                <div className="main_filter-chats-btns">
                    <button className="main_filter-chats-btn-filter">Фильтр</button>
                    <button className="main_filter-chats-btn-heart">❤</button>
                    <button className="main_filter-chats-btn-reload"><img src={reload} /></button>
                </div>
            </div>
        </div> */}

      <div className="container">
        <div className="main__chats-cards">
          {chatsData
            .filter((card) =>
              card.name.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((card) => (
              <MainChatsCard
                key={card.id}
                images={card.images}
                name={card.name}
                descriptions={card.descriptions}
                online={card.online}
                link={card.link}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
