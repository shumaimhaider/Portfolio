import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaChartLine, FaUsers, FaClock } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'Lango',
      role: 'Full Stack Developer',
      category: 'Communication Platform',
      icon: '🌐',
      color: '#4F46E5',
      description: 'A sophisticated communication/interpretation platform where I contributed as a Full-Stack Engineer. Owned and delivered multiple core features using React, GraphQL, Golang, and Node.js, following Clean Architecture principles for maintainability.',
      achievements: [
        'Refactored multiple critical modules, reducing code complexity by 40%',
        'Improved API response times by 60% through optimization',
        'Implemented real-time communication features serving 10K+ users',
        'Enhanced system reliability with comprehensive test coverage',
      ],
      technologies: ['React', 'GraphQL', 'Golang', 'Node.js', 'PostgreSQL', 'WebSockets'],
      metrics: [
        { icon: <FaUsers />, label: '10K+', description: 'Active Users' },
        { icon: <FaChartLine />, label: '60%', description: 'Performance Boost' },
        { icon: <FaClock />, label: '40%', description: 'Code Reduction' },
      ],
    },
    {
      title: 'VitalCare',
      role: 'Full Stack Developer',
      category: 'Health-Tech Solution',
      icon: '🏥',
      color: '#059669',
      description: 'A comprehensive health-tech product where I worked as a Full-Stack Developer during a critical delivery phase. Led the optimization of core features to enhance system stability and prepare the product for MVP launch.',
      achievements: [
        'Increased development velocity by 50% by resolving critical blockers',
        'Restructured delayed modules bringing project back on track',
        'Successfully delivered MVP launch ahead of schedule',
        'Implemented robust error handling and monitoring systems',
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'WebSockets'],
      metrics: [
        { icon: <FaChartLine />, label: '50%', description: 'Velocity Increase' },
        { icon: <FaClock />, label: 'On-Time', description: 'MVP Delivery' },
        { icon: <FaUsers />, label: '5K+', description: 'Beta Users' },
      ],
    },
    {
      title: 'Connect Wheels',
      role: 'Personal Project',
      category: 'Microservices Platform',
      icon: '🚗',
      color: '#DC2626',
      description: 'A microservices-driven vehicle marketplace platform built as a self-directed project to deepen practical experience in distributed system design and scalable backend architectures.',
      achievements: [
        'Built scalable microservices architecture in Node.js + Express with TypeORM',
        'Implemented gRPC for low-latency inter-service communication',
        'Used Kafka for event-driven workflows and real-time updates',
        'Developed responsive React frontend with React Query for data management',
      ],
      technologies: ['React', 'Node.js', 'gRPC', 'Kafka', 'TypeORM', 'Microservices', 'Docker'],
      github: '#',
      metrics: [
        { icon: <FaChartLine />, label: '8', description: 'Microservices' },
        { icon: <FaClock />, label: '<50ms', description: 'Latency' },
        { icon: <FaUsers />, label: 'Scalable', description: 'Architecture' },
      ],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Delivering impactful solutions across diverse domains
        </p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card scroll-reveal"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ 
              animationDelay: `${index * 0.15}s`,
              '--project-color': project.color 
            }}
          >
            <div className="project-card-inner">
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <span className="project-icon">{project.icon}</span>
                </div>
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <span className="project-role">{project.role}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-metrics">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="metric-item">
                    <span className="metric-icon">{metric.icon}</span>
                    <div className="metric-content">
                      <span className="metric-label">{metric.label}</span>
                      <span className="metric-description">{metric.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="project-achievements">
                <h4 className="achievements-title">
                  <span className="title-icon">🎯</span>
                  Key Achievements
                </h4>
                <ul>
                  {project.achievements.map((achievement, i) => (
                    <li 
                      key={i}
                      style={{ animationDelay: `${i * 0.1}s` }}
                      className={hoveredProject === index ? 'achievement-visible' : ''}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="tech-tag"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
             
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

