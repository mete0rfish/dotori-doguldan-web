import './Header.css'

function Header({ language, onLanguageToggle }) {
  const menuItems = {
    en: ['Home', 'Games'],
    ko: ['홈', '게임']
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
                <a href="#" className="nav-link">{item}</a>
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
