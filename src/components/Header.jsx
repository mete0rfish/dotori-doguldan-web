import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../img/logo_black.png'

function Header({ language, onLanguageToggle }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const menuItems = {
    en: ['Home', 'Game', 'Team'],
    ko: ['Home', 'Game', 'Team']
  }

  const logoText = {
    en: 'Dotori Doguldan',
    ko: '도토리 도굴단'
  }

  const scrollToProjectPriview = () => {
    const projectPreview = document.getElementById('project-preview')
    if (projectPreview) {
      projectPreview.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleMenuClick = (index) => {
    if (index === 0) {
      navigate('/')
    } else if (index === 1) {
      // 게임 버튼 클릭 시 메인 페이지로 이동 후 게임 섹션으로 스크롤
      if (location.pathname === '/') {
        // 이미 메인 페이지에 있으면 바로 스크롤
        scrollToProjectPriview()
      } else {
        // 다른 페이지에 있으면 메인 페이지로 이동 후 스크롤
        navigate('/')
        setTimeout(() => {
          scrollToProjectPriview()
        }, 100)
      }
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">
            <img src={logo} alt="Dotori Doguldan" />
          </span>
          <span className="logo-text">{logoText[language]}</span>
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
