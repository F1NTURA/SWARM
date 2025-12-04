import reload from '../icons/reload.svg'

export function MainFiltersChats({ fun }) {
  return (
    <div className="container filtersChats">
      {fun}
      <div className="main_filter-chats-btns">
        <button className="main_filter-chats-btn-filter">Фильтр</button>
        <button className="main_filter-chats-btn-heart">❤</button>
        <button className="main_filter-chats-btn-reload">
          <img src={reload} />
        </button>
      </div>
    </div>
  )
}
