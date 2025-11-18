import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Focusteck',
      position: 'Software Engineer',
      period: '09/2025 - Present',
      location: 'Remote',
      achievements: [
        'Implemented real-time notifications using websockets, redis adapters and pusher channels for enhancing system scalability, supporting high concurrent users, improving overall user experience.',
        'Integrated Stripe into backend workflows, increasing payment transaction reliability and strengthening platform security.',
        'Investigated long-running SQL queries and identified inefficiencies in the codebase, optimizing query logic and indexing, resulting in significantly reduced execution time and improved overall system performance.',
        'Increased engineering productivity by leveraging AI tools to automate repetitive low-level coding tasks.',
      ],
    },
    {
      company: 'CodingCops',
      position: 'Software Engineer',
      period: '01/2023 - 08/2025',
      location: 'Lahore',
      achievements: [
        'Implemented Twilio Expressions based routing logic for the calling feature, integrating multi-level routing (call type, department, user availability) with backend APIs to dynamically manage inbound and outbound call flows.',
        'Developed a dynamic vendor rate calculation feature for interpreters, integrating backend APIs with redis caching, React frontend to select company-specific rates automatically, ensuring accurate pay calculations.',
        'Implemented a debounced search feature in a React data table using React Query and custom hooks, reducing redundant API calls improving search responsiveness.',
        'Designed and delivered an end-to-end csv export feature, leveraging Golang background jobs to process large datasets, Pusher channels to provide real-time file download status, React UI for progress tracking enabling seamless and efficient large-scale data exports.',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card scroll-reveal">
            <div className="experience-header">
              <div>
                <h3 className="experience-position">{exp.position}</h3>
                <h4 className="experience-company">{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <div className="meta-item">
                  <FaCalendar />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="experience-achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

