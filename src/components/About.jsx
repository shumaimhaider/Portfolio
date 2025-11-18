import { useState, useEffect, memo, useRef } from 'react'
import './About.css'

const About = memo(() => {
  const [counts, setCounts] = useState({ experience: 0, projects: 0, technologies: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const targets = { experience: 3, projects: 10, technologies: 15 }
            const duration = 2000
            const steps = 60
            const interval = duration / steps

            let currentStep = 0
            timerRef.current = setInterval(() => {
              currentStep++
              const progress = currentStep / steps

              setCounts({
                experience: Math.floor(targets.experience * progress),
                projects: Math.floor(targets.projects * progress),
                technologies: Math.floor(targets.technologies * progress),
              })

              if (currentStep >= steps) {
                setCounts(targets)
                clearInterval(timerRef.current)
                timerRef.current = null
              }
            }, interval)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      // Clear the interval if component unmounts
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [hasAnimated])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text scroll-reveal-left">
            <div className="about-intro">
              <h3 className="about-subtitle">Crafting Digital Excellence</h3>
              <p className="about-highlight">
                A passionate Full Stack Developer with over 3 years of experience 
                building scalable, high-performance web applications that drive business results.
              </p>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">🚀</div>
                <div className="detail-content">
                  <h4>Professional Expertise</h4>
                  <p>
                    Specialized in creating efficient, user-friendly solutions using modern technologies. 
                    Expert in React, Golang, Node.js, and PostgreSQL with a focus on clean architecture.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">💼</div>
                <div className="detail-content">
                  <h4>Proven Track Record</h4>
                  <p>
                    Successfully delivered diverse projects from communication platforms to health-tech 
                    solutions, consistently focusing on performance optimization and maintainability.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">⚡</div>
                <div className="detail-content">
                  <h4>Technical Innovation</h4>
                  <p>
                    Passionate about real-time features, microservices architecture, and leveraging 
                    cutting-edge technologies to solve complex business challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats scroll-reveal-right">
            <div className="stat-card stat-card-1">
              <div className="stat-icon">📅</div>
              <h3 className="counter">{counts.experience}+</h3>
              <p>Years Experience</p>
              <div className="stat-progress"></div>
            </div>
            <div className="stat-card stat-card-2">
              <div className="stat-icon">✅</div>
              <h3 className="counter">{counts.projects}+</h3>
              <p>Projects Completed</p>
              <div className="stat-progress"></div>
            </div>
            <div className="stat-card stat-card-3">
              <div className="stat-icon">⚙️</div>
              <h3 className="counter">{counts.technologies}+</h3>
              <p>Technologies</p>
              <div className="stat-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About

