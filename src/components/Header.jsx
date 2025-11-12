import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

function Header({ language, onLanguageToggle }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const menuItems = {
    en: ['Home', 'Games'],
    ko: ['홈', '게임']
  }

  const scrollToGamesSection = () => {
    const gamesSection = document.getElementById('games-section')
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleMenuClick = (index) => {
    if (index === 0) {
      navigate('/')
    } else if (index === 1) {
      // 게임 버튼 클릭 시 메인 페이지로 이동 후 게임 섹션으로 스크롤
      if (location.pathname === '/') {
        // 이미 메인 페이지에 있으면 바로 스크롤
        scrollToGamesSection()
      } else {
        // 다른 페이지에 있으면 메인 페이지로 이동 후 스크롤
        navigate('/')
        setTimeout(() => {
          scrollToGamesSection()
        }, 100)
      }
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Dotori Doguldan</span>
        </div>

        <nav className="nav">
          <ul className="nav-menu">
            {menuItems[language].map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMenuClick(index)
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="lang-toggle" onClick={onLanguageToggle}>
          {language === 'en' ? 'KO' : 'EN'}
        </button>
      </div>
    </header>
  )
}

export default Header
