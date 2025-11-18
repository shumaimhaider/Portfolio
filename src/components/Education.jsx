import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-content scroll-reveal">
        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>
          <div className="education-details">
            <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
            <h4 className="education-school">
              <FaUniversity className="inline-icon" />
              University of Management and Technology
            </h4>
            <p className="education-period">
              <FaCalendar className="inline-icon" />
              September 2018 - November 2022
            </p>
            <p className="education-location">Lahore, Pakistan</p>
          </div>
        </div>

        <div className="languages-section">
          <h3 className="section-subtitle">Languages</h3>
          <div className="languages-grid">
            <div className="language-card">
              <h4>English</h4>
              <p>Full Professional Proficiency</p>
              <div className="language-level">
                <div className="level-bar" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="language-card">
              <h4>Urdu</h4>
              <p>Full Professional Proficiency</p>
              <div className="language-level">
                <div className="level-bar" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

