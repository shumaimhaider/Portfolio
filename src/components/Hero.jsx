import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaRocket } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, roleIndex, roles])

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text animate-fadeInUp">
          <div className="hero-badge">
            <FaRocket className="badge-icon" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Shumaim Haider</span>
          </h1>
          <div className="hero-subtitle-wrapper">
            <h2 className="hero-subtitle">
              <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
          </div>
          <p className="hero-description">
            Crafting scalable, high-performance applications with <strong>3+ years of experience</strong>. 
            Specialized in <strong>React</strong>, <strong>Golang</strong>, <strong>Node.js</strong>, and <strong>PostgreSQL</strong>. 
            Passionate about building efficient systems, implementing real-time features, 
            and delivering exceptional user experiences through clean architecture.
          </p>
          
          <div className="hero-contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:shumaimhaider@gmail.com">shumaimhaider@gmail.com</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>03071637899</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

          <div className="hero-social">
            <a 
              href="https://linkedin.com/in/shumaimhaider" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://medium.com/@shumaimhaider" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaMedium />
            </a>
            <a 
              href="https://github.com/shumaimhaider" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <span className="btn-text">Get In Touch</span>
              <span className="btn-icon">→</span>
            </a>
            <a href="#projects" className="btn btn-secondary">
              <span className="btn-text">View My Work</span>
              <FaCode className="btn-icon" />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fadeIn">
          <div className="code-block">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">portfolio.js</span>
              <div className="code-actions">
                <span className="action-icon">⋯</span>
              </div>
            </div>
            <pre className="code-content">
              <code>
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
                  <span className="code-property">name</span>: <span className="code-string">"Shumaim Haider"</span>,
                  <span className="code-property">role</span>: <span className="code-string">"Full Stack Developer"</span>,
                  <span className="code-property">experience</span>: <span className="code-string">"3+ years"</span>,
                  <span className="code-property">skills</span>: [
                    <span className="code-string">"React"</span>, <span className="code-string">"Golang"</span>,
                    <span className="code-string">"Node.js"</span>, <span className="code-string">"PostgreSQL"</span>
                  ],
                  <span className="code-property">passion</span>: <span className="code-string">"Building scalable apps"</span>,
                  <span className="code-property">status</span>: <span className="code-string">"🚀 Available"</span>
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Hero

