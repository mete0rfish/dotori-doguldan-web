import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './GameCard.css'

function GameCard({ game, language }) {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const text = {
    en: 'Learn More',
    ko: '자세히 보기'
  }

  const title = language === 'en' ? game.title : game.titleKo
  const description = language === 'en' ? game.description : game.descriptionKo

  const handleButtonClick = () => {
    navigate(`/game/${game.id}`)
    // 페이지 이동 후 최상단으로 스크롤
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <div
      className="game-card"
      style={{ backgroundImage: `url(${game.image})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="game-overlay"></div>

      <div className="game-content">
        <h2 className="game-logo">{game.logo}</h2>
        <h3 className="game-title">{title}</h3>
        <p className="game-description">{description}</p>

        <div className="game-platforms">
          {game.platforms.map((platform, index) => (
            <span key={index} className="platform-tag">{platform}</span>
          ))}
        </div>

        <div className="game-buttons">
          <button 
            className={`game-button ${isHovered ? 'active' : ''}`}
            onClick={handleButtonClick}
          >
            {text[language]}
            <span className="button-arrow">→</span>
          </button>
          
          {game.platforms.includes('Steam') && (
            <button 
              className="steam-button"
              onClick={() => {
                if (game.steamUrl) {
                  window.open(game.steamUrl, '_blank')
                }
              }}
            >
              Steam
            </button>
          )}
        </div>
      </div>

      <div className="game-accent"></div>
    </div>
  )
}

export default GameCard
