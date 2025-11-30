import './Hero.css'
import logo from '../img/logo_black.png'

function Hero({ language }) {
  const youtubeVideoId = 'tnpF9C6B9rE'

  const content = {
    en: {
      studioName: 'Dotori Doguldan',
      subtitle: 'Unearthing the essence of fun.',
      description: [
        'Dotori Doguldan is an indie game development team of four people who love games and art.',
        'We constantly think about the experiences games can provide, and strive to create more fun and meaningful play experiences.'
      ],
      cta: 'Browse Games',
      developing: 'Now Developing ...',
      trailerPlaceholder: 'YouTube Trailer Link'
    },
    ko: {
      studioName: '도토리 도굴단',
      subtitle: '재미의 본질을 발굴합니다.',
      description: [
        '도토리도굴단은 게임과 예술을 사랑하는 네 명이 활동 중인 인디 게임 개발 팀입니다.',
        '우리는 게임이 줄 수 있는 경험에 대해 끊임없이 고민하며, 더 재미있고 의미 있는 플레이 경험을 만들기 위해 노력합니다.'
      ],
      cta: '게임 둘러보기',
      developing: 'Now Developing ...',
      trailerPlaceholder: '유투브 트레일러 연결'
    }
  }

  const text = content[language]

  const handleScrollToGames = () => {
    const gamesSection = document.getElementById('project-preview')
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src={logo} alt="Dotori Doguldan" />
          <h1 className="hero-title">{text.studioName}</h1>
        </div>
        <p className="hero-subtitle">{text.subtitle}</p>
        <div className="hero-description">
          {text.description.map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>
        <button className="hero-cta" onClick={handleScrollToGames}>
          <span className="cta-arrow">▶</span>
          {text.cta}
        </button>
        <p className="hero-developing">{text.developing}</p>
        <div className="hero-trailer">
          {youtubeVideoId ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ border: 'none' }}
            ></iframe>
          ) : (
            <div className="trailer-placeholder">{text.trailerPlaceholder}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
