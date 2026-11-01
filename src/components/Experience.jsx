import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Focusteck',
      position: 'Senior Software Engineer',
      period: '07/2025 - Present',
      location: 'Lahore',
      achievements: [
        'Implemented a personalized AI agent for platform customers that provides instant, account-specific information on their current subscriptions, payments, and billing details.',
        'Re-architected a synchronous billing workflow into a fault-tolerant, event-driven system for high-concurrency invoice processing, achieving 99.9% reliability through asynchronous workers, retry mechanisms and reconciliation logic.',
        'Integrated multiple payment gateways (Stripe, NetBilling, Braintree) into backend billing workflows, implementing idempotent processing, webhook verification and failure handling to improve transaction reliability and system security.',
        'Optimized long-running SQL queries by refactoring query logic and improving indexing strategy, reducing execution time by 70% and database CPU utilization by 35% under high-concurrency workloads.',
        'Migrated customer analytics data from MongoDB to PostgreSQL to support customer trend reporting.',
        'Optimized cloud infrastructure through containerization, autoscaling, and caching strategies, reducing operational costs by 25-30% while maintaining high performance for production-grade workloads.',
      ],
    },
    {
      company: 'CodingCops',
      position: 'Software Engineer',
      period: '01/2022 - 06/2025',
      location: 'Lahore',
      achievements: [
        'Implemented Twilio Expressions based routing logic for the calling feature, integrating multi-level routing (call type, department, user availability) with backend APIs to dynamically manage inbound and outbound call flows.',
        'Implemented a debounced search feature in a React data table using React Query and custom hooks, reducing redundant API calls and improving search responsiveness.',
        'Designed and delivered an end-to-end csv export feature, leveraging Golang background jobs to process large datasets, Pusher channels for real-time file download status, and a React UI for progress tracking.',
        'Integrated Intento for AI powered translation, enabling automated multilingual processing of high-volume files with optimized performance and reliability.',
        'Optimized front-end slowness by profiling render bottlenecks, reducing unnecessary re-renders, and improving data-fetching patterns for a faster, more responsive user experience.',
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

