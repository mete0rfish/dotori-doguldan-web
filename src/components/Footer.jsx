import './Footer.css'

function Footer({ language }) {
  const content = {
    en: {
      title: 'Dotori Doguldan',
      description: 'Crafting immersive indie games with passion.',
      links: ['Home', 'Games', 'Contact'],
      copyright: '© 2025 Dotori Doguldan. All rights reserved.'
    },
    ko: {
      title: '도토리 도굴단',
      description: '열정으로 만드는 인디 게임',
      links: ['홈', '게임', '문의'],
      copyright: '© 2025 Dotori Doguldan. All rights reserved.'
    }
  }

  const text = content[language]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">{text.title}</h3>
          <p className="footer-description">{text.description}</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">{language === 'en' ? 'Links' : '링크'}</h4>
          <nav className="footer-nav">
            {text.links.map((link, index) => (
              <a key={index} href="#" className="footer-link">{link}</a>
            ))}
          </nav>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">{language === 'en' ? 'Media' : '미디어'}</h4>
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Discord</a>
            <a href="#" className="social-link">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">{text.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
