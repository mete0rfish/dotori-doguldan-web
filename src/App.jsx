import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import GameCard from './components/GameCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('ko')

  const games = [
    {
      id: 1,
      title: 'Hamstory',
      titleKo: '햄스토리',
      description: '2D pixel art platformer that offers both emotional depth and challenging gameplay.',
      descriptionKo: '2D 픽셀 아트 플랫폼 게임으로, 감동적인 스토리와 도전적인 게임플레이를 제공합니다.',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4008550/3252afa251539d9c3435c262ce2c451518efaac8/header.jpg?t=1762790025',
      logo: 'Hamstory',
      platforms: ['Steam', 'PC', 'Windows'],
      bgColor: 'linear-gradient(135deg, rgba(250, 152, 58, 0.1), rgba(250, 152, 58, 0.05))'
    },
  ]

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'ko' : 'en')
  }

  return (
    <div className="app">
      <Header language={currentLanguage} onLanguageToggle={toggleLanguage} />
      <Hero language={currentLanguage} />

      <section id="games-section" className="games-section">
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
