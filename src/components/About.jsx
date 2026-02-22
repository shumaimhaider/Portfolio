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
            const targets = { experience: 6, projects: 10, technologies: 15 }
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
                I build high-performance full-stack systems that drive measurable business outcomes. 
                My expertise spans React, Golang, Node.js, and PostgreSQL—delivering scalable architectures 
                that support real-world operations and growth.
              </p>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">🚀</div>
                <div className="detail-content">
                  <h4>Professional Expertise</h4>
                  <p>
                    From scalable distributed architectures to production-ready solutions, I focus on 
                    building software that drives measurable results with reliability and maintainability at scale.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">💼</div>
                <div className="detail-content">
                  <h4>AI-Assisted Development</h4>
                  <p>
                    I leverage AI-assisted development tools to accelerate delivery, improve code quality, 
                    and streamline engineering workflows—without compromising on strong software design principles.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">⚡</div>
                <div className="detail-content">
                  <h4>Business Impact</h4>
                  <p>
                    I believe modern engineering combines deep technical expertise with intelligent tooling 
                    to ship faster, smarter, and with direct business impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats scroll-reveal-right">
            <div className="stat-card stat-card-1">
              <div className="stat-icon">📅</div>
              <h3 className="counter">{6}+</h3>
              <p>Years Experience</p>
              <div className="stat-progress"></div>
            </div>
            <div className="stat-card stat-card-2">
              <div className="stat-icon">✅</div>
              <h3 className="counter">{10}+</h3>
              <p>Projects Completed</p>
              <div className="stat-progress"></div>
            </div>
            <div className="stat-card stat-card-3">
              <div className="stat-icon">⚙️</div>
              <h3 className="counter">{15}+</h3>
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

