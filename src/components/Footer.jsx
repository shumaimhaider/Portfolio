import { FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Shumaim Haider. All rights reserved.
        </p>
        <p className="footer-built">
          Built with <FaHeart className="heart-icon" /> using React & Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer

