import './Hero.css'

function Hero({ language }) {
  const content = {
    en: {
      title: 'We are Dotori Doguldan.',
      subtitle: 'Crafting immersive indie games with passion',
      cta: 'Explore Our Games'
    },
    ko: {
      title: '저희는 도토리도굴단 입니다.',
      subtitle: '열정으로 만드는 인디 게임',
      cta: '게임 둘러보기'
    }
  }

  const text = content[language]

  const handleScrollToGames = () => {
    const gamesSection = document.getElementById('games-section')
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{text.title}</h1>
        <p className="hero-subtitle">{text.subtitle}</p>
        <button className="hero-cta" onClick={handleScrollToGames}>
          {text.cta}
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="hero-accent"></div>
    </section>
  )
}

export default Hero
