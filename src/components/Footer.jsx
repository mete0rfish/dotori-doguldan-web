import './Footer.css'
import logo from '../img/logo_black.png'
import { FaReddit, FaXTwitter, FaYoutube, FaDiscord, FaInstagram, FaSteam } from 'react-icons/fa6'

function Footer({ language }) {
  const socialLinks = [
    { name: 'Reddit', icon: FaReddit, color: '#FF4500', url: 'https://www.reddit.com/user/dotori-doguldan' },
    { name: 'X', icon: FaXTwitter, color: '#000000', url: 'https://twitter.com/dotori_doguldan' },
    { name: 'YouTube', icon: FaYoutube, color: '#FF0000', url: 'https://www.youtube.com/@dotori-doguldan' },
    { name: 'Discord', icon: FaDiscord, color: '#5865F2', url: 'https://discord.gg/dotori-doguldan' },
    { name: 'Instagram', icon: FaInstagram, color: '#E4405F', url: 'https://www.instagram.com/dotori_doguldan' },
    { name: 'Steam', icon: FaSteam, color: '#1B2838', url: 'https://store.steampowered.com/developer/dotori-doguldan' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src={logo} alt="Dotori Doguldan" />
          </div>
          <h3 className="footer-title">도토리 도굴단</h3>
        </div>

        <div className="footer-social">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ '--social-color': social.color }}
                aria-label={social.name}
              >
                <div className="icon-wrapper">
                  <IconComponent style={{ color: social.color }} />
                </div>
              </a>
            )
          })}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2025 Dotori Doguldan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
