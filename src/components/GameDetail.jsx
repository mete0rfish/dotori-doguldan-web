import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import './GameDetail.css'

function GameDetail({ games, language, onLanguageToggle }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)

  useEffect(() => {
    const foundGame = games.find(g => g.id === parseInt(id))
    if (foundGame) {
      setGame(foundGame)
    }
  }, [id, games])

  if (!game) {
    return (
      <div className="app">
        <Header language={language} onLanguageToggle={onLanguageToggle} />
        <div className="game-detail-not-found">
          <h2>{language === 'en' ? 'Game not found' : '게임을 찾을 수 없습니다'}</h2>
          <button onClick={() => navigate('/')}>
            {language === 'en' ? 'Back to Home' : '홈으로 돌아가기'}
          </button>
        </div>
        <Footer language={language} />
      </div>
    )
  }

  const title = language === 'en' ? game.title : game.titleKo
  const description = language === 'en' ? game.description : game.descriptionKo
  const detailInfo = game.detailInfo || {}

  const text = {
    en: {
      back: 'Back',
      platforms: 'Available on',
      introduction: 'Introduction',
      features: 'Key Features',
      trailer: 'Trailer',
      screenshots: 'Screenshots'
    },
    ko: {
      back: '돌아가기',
      platforms: '플랫폼',
      introduction: '소개',
      features: '주요 특징',
      trailer: '트레일러',
      screenshots: '스크린샷'
    }
  }

  const t = text[language]
  const introduction = detailInfo.introduction ? (language === 'en' ? detailInfo.introduction.en : detailInfo.introduction.ko) : ''
  const features = detailInfo.features ? (language === 'en' ? detailInfo.features.en : detailInfo.features.ko) : []

  return (
    <div className="app">
      <Header language={language} onLanguageToggle={onLanguageToggle} />
      
      <div className="game-detail">
        <div className="game-detail-hero" style={{ backgroundImage: `url(${game.image})` }}>
          <div className="game-detail-overlay"></div>
          <div className="game-detail-hero-content">
            <button className="back-button" onClick={() => navigate('/')}>
              ← {t.back}
            </button>
            <h1 className="game-detail-logo">{game.logo}</h1>
            <h2 className="game-detail-title">{title}</h2>
          </div>
        </div>

        <div className="game-detail-content">
          <div className="game-detail-main">
            {/* 플랫폼 섹션 */}
            <section className="game-detail-section">
              <h3 className="section-title">{t.platforms}</h3>
              <div className="game-detail-platforms">
                {game.platforms.map((platform, index) => (
                  <span key={index} className="platform-tag-large">{platform}</span>
                ))}
              </div>
            </section>

            {/* 소개 섹션 */}
            {introduction && (
              <section className="game-detail-section">
                <h3 className="section-title">{t.introduction}</h3>
                <p className="game-detail-description">{introduction}</p>
              </section>
            )}

            {/* 주요 특징 섹션 */}
            {features && features.length > 0 && (
              <section className="game-detail-section">
                <h3 className="section-title">{t.features}</h3>
                <ul className="features-list">
                  {features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 트레일러 섹션 */}
            {detailInfo.trailer && (
              <section className="game-detail-section">
                <h3 className="section-title">{t.trailer}</h3>
                <div className="trailer-container">
                  <iframe
                    className="trailer-video"
                    src={detailInfo.trailer}
                    title="Game Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
            )}

            {/* 스크린샷 섹션 */}
            {detailInfo.screenshots && detailInfo.screenshots.length > 0 && (
              <section className="game-detail-section">
                <h3 className="section-title">{t.screenshots}</h3>
                <div className="screenshots-grid">
                  {detailInfo.screenshots.map((screenshot, index) => (
                    <div key={index} className="screenshot-item">
                      <img 
                        src={screenshot} 
                        alt={`Screenshot ${index + 1}`}
                        className="screenshot-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <Footer language={language} />
    </div>
  )
}

export default GameDetail

