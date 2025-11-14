import './Footer.css'

function Footer({ language }) {
  const socialLinks = [
    { name: 'Reddit', icon: '🔴', color: '#FF4500' },
    { name: 'X', icon: '✖️', color: '#000000' },
    { name: 'YouTube', icon: '▶️', color: '#FF0000' },
    { name: 'Discord', icon: '💬', color: '#5865F2' },
    { name: 'Instagram', icon: '📷', color: '#E4405F' },
    { name: 'Steam', icon: '🎮', color: '#1B2838' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <div className="footer-logo">🐿️</div>
          <h3 className="footer-title">도토리 도굴단</h3>
        </div>

        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href="#"
              className="social-icon"
              style={{ '--social-color': social.color }}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2025 Dotori Doguldan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
