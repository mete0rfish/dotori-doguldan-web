import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import GameCard from './components/GameCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  const games = [
    {
      id: 1,
      title: 'Dungreed',
      titleKo: '던그리드',
      description: '2D side-scrolling action game with roguelike elements. Explore mysterious dungeons and save the town.',
      descriptionKo: '2D 사이드스크롤 액션 게임과 로그라이크 요소가 결합된 게임입니다. 신비로운 던전을 탐험하고 마을을 구해보세요.',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?w=800',
      logo: 'DUNGREED',
      platforms: ['Steam', 'Nintendo Switch', 'PlayStation'],
      bgColor: 'linear-gradient(135deg, rgba(250, 152, 58, 0.1), rgba(250, 152, 58, 0.05))'
    },
    {
      id: 2,
      title: 'Sephiria',
      titleKo: '세피리아',
      description: 'Top-down action roguelike game with pixel art graphics. Follow a rabbit\'s adventure to save the tower.',
      descriptionKo: '픽셀 아트 그래픽의 탑다운 액션 로그라이크 게임입니다. 토끼의 모험을 통해 타워를 구하세요.',
      image: 'https://images.pexels.com/photos/1885573/pexels-photo-1885573.jpeg?w=800',
      logo: 'SEPHIRIA',
      platforms: ['Steam', 'PC'],
      bgColor: 'linear-gradient(135deg, rgba(250, 152, 58, 0.08), rgba(250, 152, 58, 0.03))'
    }
  ]

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'ko' : 'en')
  }

  return (
    <div className="app">
      <Header language={currentLanguage} onLanguageToggle={toggleLanguage} />
      <Hero language={currentLanguage} />

      <section className="games-section">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            language={currentLanguage}
          />
        ))}
      </section>

      <Footer language={currentLanguage} />
    </div>
  )
}

export default App
