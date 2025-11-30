import { useState, useEffect, memo } from 'react'
import { FaRocket, FaFileDownload, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiGo, SiPostgresql } from 'react-icons/si'
import './Hero.css'

const Hero = memo(() => {
  const [nameText, setNameText] = useState('')
  const [typedText, setTypedText] = useState('')
  const [showRole, setShowRole] = useState(false)
  const roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const fullName = 'Shumaim Haider'

  // Typing animation for name on load
  useEffect(() => {
    if (nameText.length < fullName.length) {
      const timer = setTimeout(() => {
        setNameText(fullName.substring(0, nameText.length + 1))
      }, 100)
      return () => clearTimeout(timer)
    } else {
      // After name is typed, wait a bit then show role typing
      const timer = setTimeout(() => {
        setShowRole(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [nameText])

  // Typing animation for role
  useEffect(() => {
    if (!showRole) return

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
  }, [typedText, isDeleting, roleIndex, roles, showRole])

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <FaRocket className="badge-icon" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text typing-name-wrapper">
              {nameText}
              {nameText.length < fullName.length && <span className="cursor">|</span>}
            </span>
          </h1>
          {showRole && (
            <div className="hero-subtitle-wrapper">
              <h2 className="hero-subtitle">
                <span className="typing-text">{typedText}</span>
                <span className="cursor">|</span>
              </h2>
            </div>
          )}
          <p className="hero-description animate-fade-in-delay">
            With <strong>3+ years of experience</strong>, I engineer high-performance applications that drive 
            real business impact. Specialized in <strong>React</strong>, <strong>Golang</strong>, <strong>Node.js</strong>, 
            and <strong>PostgreSQL</strong>—delivering systems that scale reliably and perform exceptionally.
          </p>
          
          <p className="hero-description-secondary">
            From architecting microservices to optimizing complex databases, I transform 
            challenging technical problems into elegant, scalable solutions. Every line of code 
            is written with performance, maintainability, and user experience at its core.
          </p>

          <div className="hero-cta">
            <a 
              href="https://drive.google.com/file/d/1FqxGHmyr9bOxxgF4eC2DwN5ZhHfG1OoA/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-button"
            >
              <FaFileDownload className="resume-icon" />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="animated-shapes">
            {/* Floating particles background */}
            <div className="particles-container">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
              <div className="particle particle-6"></div>
            </div>

            {/* Animated tech icons with glow */}
            <div className="floating-icon float-icon-1">
              <div className="icon-glow"></div>
              <FaReact className="tech-icon react-color spinning-icon" />
            </div>
            <div className="floating-icon float-icon-2">
              <div className="icon-glow"></div>
              <FaNodeJs className="tech-icon node-color" />
            </div>
            <div className="floating-icon float-icon-3">
              <div className="icon-glow"></div>
              <SiGo className="tech-icon go-color spinning-icon" />
            </div>
            <div className="floating-icon float-icon-4">
              <div className="icon-glow"></div>
              <SiPostgresql className="tech-icon postgres-color" />
            </div>
            <div className="floating-icon float-icon-5">
              <div className="icon-glow"></div>
              <FaDatabase className="tech-icon database-color spinning-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero

