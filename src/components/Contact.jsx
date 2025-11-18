import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'shumaimhaider@gmail.com',
      link: 'mailto:shumaimhaider@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '03071637899',
      link: 'tel:03071637899',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Lahore, Pakistan',
    },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shumaimhaider',
      color: '#0077b5',
    },
    {
      icon: <FaMedium />,
      name: 'Medium',
      url: 'https://medium.com/@shumaimhaider',
      color: '#00ab6c',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/shumaimhaider',
      color: '#333',
    },
  ]

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content scroll-reveal">
        <div className="contact-text">
          <h3>Let's Work Together</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your vision. Feel free to reach out 
            through any of the channels below.
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-items">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item-card">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-info">
                  <span className="contact-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} className="contact-value">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="social-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ '--hover-color': social.color }}
                >
                  <div className="social-icon">{social.icon}</div>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section scroll-reveal">
        <div className="cta-card">
          <h3>Ready to start a project?</h3>
          <p>Let's create something amazing together!</p>
          <a href="mailto:shumaimhaider@gmail.com" className="cta-button">
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

