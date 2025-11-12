import './Footer.css'

function Footer({ language }) {
  const content = {
    en: {
      title: 'Team Horay',
      description: 'Crafting immersive indie games with passion and creativity',
      links: ['Home', 'Games', 'Contact', 'Follow Us'],
      copyright: '© 2024 Team Horay. All rights reserved.'
    },
    ko: {
      title: 'Team Horay',
      description: '열정과 창의력으로 만드는 인디 게임',
      links: ['홈', '게임', '문의', '팔로우'],
      copyright: '© 2024 Team Horay. 모든 권리 보유.'
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
          <h4 className="footer-heading">{language === 'en' ? 'Connect' : '연결'}</h4>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
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
