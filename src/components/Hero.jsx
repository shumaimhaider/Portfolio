import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text animate-fadeInUp">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Shumaim Haider</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I'm a Full Stack Developer with 3 years of experience, specializing in building 
            scalable applications using technologies such as ReactJS, Golang, PostgreSQL, 
            Node.js and Express.js. I'm passionate about creating efficient systems, 
            implementing real-time features, writing thorough test cases and continuously 
            optimizing performance.
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
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>

        <div className="hero-visual animate-fadeIn">
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>{`const developer = {
  name: "Shumaim Haider",
  role: "Full Stack Developer",
  experience: "3+ years",
  skills: [
    "React", "Golang",
    "Node.js", "PostgreSQL"
  ],
  passion: "Building scalable apps"
};`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero

