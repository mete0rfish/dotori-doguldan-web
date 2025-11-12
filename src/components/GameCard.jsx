import { useState } from 'react'
import './GameCard.css'

function GameCard({ game, language }) {
  const [isHovered, setIsHovered] = useState(false)

  const text = {
    en: 'Learn More',
    ko: '자세히 보기'
  }

  const title = language === 'en' ? game.title : game.titleKo
  const description = language === 'en' ? game.description : game.descriptionKo

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

        <button className={`game-button ${isHovered ? 'active' : ''}`}>
          {text[language]}
          <span className="button-arrow">→</span>
        </button>
      </div>

      <div className="game-accent"></div>
    </div>
  )
}

export default GameCard
