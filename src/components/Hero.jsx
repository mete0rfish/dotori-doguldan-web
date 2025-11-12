import './Hero.css'

function Hero({ language }) {
  const content = {
    en: {
      title: 'Welcome to Team Horay',
      subtitle: 'Crafting immersive indie games with passion',
      cta: 'Explore Our Games'
    },
    ko: {
      title: 'Team Horay에 오신 것을 환영합니다',
      subtitle: '열정으로 만드는 인디 게임',
      cta: '게임 둘러보기'
    }
  }

  const text = content[language]

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{text.title}</h1>
        <p className="hero-subtitle">{text.subtitle}</p>
        <button className="hero-cta">
          {text.cta}
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="hero-accent"></div>
    </section>
  )
}

export default Hero
