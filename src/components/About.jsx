import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content scroll-reveal">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with over 3 years of experience 
              building scalable web applications. My expertise lies in creating efficient, 
              user-friendly solutions using modern technologies.
            </p>
            <p>
              Throughout my career, I've worked on diverse projects ranging from 
              communication platforms to health-tech solutions, always focusing on 
              performance optimization and clean architecture principles.
            </p>
            <p>
              I'm particularly interested in real-time features, microservices architecture, 
              and continuously learning new technologies to stay at the forefront of 
              software development.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

