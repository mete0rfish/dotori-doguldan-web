import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import './GameDetail.css'

function ScreenshotCarousel({ screenshots }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="screenshots-carousel-container">
      <button className="carousel-nav carousel-prev" onClick={handlePrev}>
        ◀
      </button>
      <div className="screenshots-carousel-wrapper">
        {screenshots.map((screenshot, index) => {
          const offset = index - currentIndex
          const isActive = offset === 0
          const isLeft = offset < 0
          const isRight = offset > 0

          return (
            <div
              key={index}
              className={`screenshot-carousel-item ${isActive ? 'active' : ''} ${isLeft ? 'left' : ''} ${isRight ? 'right' : ''}`}
            >
              <img 
                src={screenshot} 
                alt={`Screenshot ${index + 1}`}
                className="screenshot-carousel-image"
                loading="lazy"
              />
            </div>
          )
        })}
      </div>
      <button className="carousel-nav carousel-next" onClick={handleNext}>
        ▶
      </button>
    </div>
  )
}

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
        <div className="game-detail-hero">
          <div className="game-detail-hero-background"></div>
          <div className="game-detail-hero-content">
            <button className="back-button" onClick={() => navigate('/')}>
              ← {t.back}
            </button>
            <div className="game-detail-hero-main">
              <div className="game-detail-hero-left">
                <h1 className="game-detail-logo">
                  {game.logo.split('').map((char, index) => {
                    const colors = ['#FF8C42', '#4ECB71', '#9B59B6', '#4ECB71', '#3498DB', '#9B59B6', '#FF6B9D', '#5DADE2']
                    return (
                      <span key={index} style={{ color: colors[index % colors.length] }}>
                        {char}
                      </span>
                    )
                  })}
                </h1>
                <h2 className="game-detail-title-ko">{game.titleKo}</h2>
              </div>
              <div className="game-detail-hero-right">
                <div className="game-character-placeholder">
                  {/* 캐릭터 이미지는 사용자가 나중에 추가할 예정 */}
                </div>
              </div>
            </div>
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
                  <div className="trailer-placeholder">
                    유투브 트레일러 연결
                  </div>
                </div>
              </section>
            )}

            {/* 스크린샷 섹션 */}
            {detailInfo.screenshots && detailInfo.screenshots.length > 0 && (
              <section className="game-detail-section">
                <h3 className="section-title">{t.screenshots}</h3>
                <ScreenshotCarousel screenshots={detailInfo.screenshots} />
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

