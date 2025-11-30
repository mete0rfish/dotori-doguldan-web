import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import './GameDetail.css'

// Helper function to create a URL-friendly slug from the title
const slugifyTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

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
  const { title: gameTitleSlug } = useParams() // Rename id to gameTitleSlug
  const navigate = useNavigate()
  const [game, setGame] = useState(null)

  useEffect(() => {
    const foundGame = games.find(g => slugifyTitle(g.title) === gameTitleSlug) // Find by slugified title
    if (foundGame) {
      setGame(foundGame)
    }
  }, [gameTitleSlug, games]) // Depend on gameTitleSlug

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
          <div 
            className="game-detail-hero-background" 
            style={{ backgroundImage: `url(${game.image})` }}
          ></div>
          <div className="game-detail-hero-content">
            <button className="back-button" onClick={() => navigate('/')}>
              ← {t.back}
            </button>
            <div className="game-detail-hero-main">
              <div className="game-detail-hero-left">
                <h1 className="game-detail-logo">
                  {game.title}
                </h1>
                <h2 className="game-detail-title-ko">{game.titleKo}</h2>
              </div>
              <div className="game-detail-hero-right">
                {/* 캐릭터 이미지는 사용자가 나중에 추가할 예정 */}
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
                  <iframe
                    width="100%"
                    height="100%"
                    src={detailInfo.trailer}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ border: 'none' }}
                  ></iframe>
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

