import { useState, useEffect, memo, useRef } from 'react'
import './About.css'

const About = memo(() => {
  const [counts, setCounts] = useState({ projects: 0, technologies: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const targets = { projects: 4, technologies: 5 }
            const duration = 2000
            const steps = 60
            const interval = duration / steps

            let currentStep = 0
            timerRef.current = setInterval(() => {
              currentStep++
              const progress = currentStep / steps

              setCounts({
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
              <h3 className="about-subtitle">Engineering Alongside Your Customers</h3>
              <p className="about-highlight">
                I'm a Claude Certified Developer and Forward Deployed Engineer who works directly with clients
                to understand their requirements and delivers production-ready solutions end to end,
                turning business needs into scalable, reliable software with measurable impact.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">🤝</div>
                <div className="detail-content">
                  <h4>Client-Facing Delivery</h4>
                  <p>
                    I scope problems with stakeholders, design the solution, then build, test and deploy it myself,
                    keeping delivery aligned with business goals from first call to production.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🤖</div>
                <div className="detail-content">
                  <h4>AI Agents &amp; MCP</h4>
                  <p>
                    I build agentic workflows with RAG, tool calling and MCP servers, including a personalized
                    agent that gives customers instant, account-specific subscription and billing answers.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">⚡</div>
                <div className="detail-content">
                  <h4>Reliable Distributed Systems</h4>
                  <p>
                    Event-driven billing at 99.9% reliability, payment gateway integrations, and SQL tuning that cut
                    execution time by 70%: backends built to hold up under high concurrency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats scroll-reveal-right">
            <div className="stat-card stat-card-2">
              <div className="stat-icon">✅</div>
              <h3 className="counter">{5}+</h3>
              <p>Years Experience</p>
              <div className="stat-progress"></div>
            </div>
            <div className="stat-card stat-card-3">
              <div className="stat-icon">⚙️</div>
              <h3 className="counter">{99.9}%</h3>
              <p>Billing Reliability</p>
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

