import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectPreview from './components/ProjectPreview'
import History from './components/History'
import BusinessInquiry from './components/BusinessInquiry'
import GameDetail from './components/GameDetail'
import Footer from './components/Footer'
import { games } from './data/games'
import './App.css'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('ko')

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'ko' : 'en')
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Header language={currentLanguage} onLanguageToggle={toggleLanguage} />
            <Hero language={currentLanguage} />
            <ProjectPreview language={currentLanguage} />
            <History language={currentLanguage} />
            <BusinessInquiry language={currentLanguage} />
            <Footer language={currentLanguage} />
          </div>
        }
      />
      <Route
        path="/game/:id"
        element={
          <GameDetail
            games={games}
            language={currentLanguage}
            onLanguageToggle={toggleLanguage}
          />
        }
      />
    </Routes>
  )
}

export default App
