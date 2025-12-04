import { useState } from 'react'

export function MainFavoriteButton() {
  const [isFavorite, setFavorite] = useState(false)

  return (
    <button
      className="main__banner-card-btn-heart"
      onClick={() => setFavorite(!isFavorite)}
    >
      {isFavorite ? '❤️' : '❤'}
    </button>
  )
}
