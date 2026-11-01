import { useState } from 'react'
import { FaChartLine, FaUsers, FaClock } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'Terraboost Media',
      role: 'Full Stack Developer',
      category: 'Media Platform',
      icon: '📈',
      color: '#7C3AED',
      description: 'Full-stack work on the Terraboost Media platform, covering code quality foundations as well as end-to-end delivery of high-priority features.',
      achievements: [
        'Integrated linters, enforced coding standards, and introduced recommended design patterns for more consistent, readable, and robust code',
        'Implemented high-priority features end-to-end: design, development, testing, and deployment',
        'Kept delivery reliable and aligned with business goals',
      ],
      technologies: ['React', 'Node.js', 'Design Patterns', 'Linting'],
      metrics: [
        { icon: <FaChartLine />, label: 'End-to-End', description: 'Feature Delivery' },
        { icon: <FaClock />, label: 'Consistent', description: 'Code Quality' },
      ],
    },
    {
      title: 'FixaFib',
      role: 'Full Stack Developer',
      category: 'MVP Delivery',
      icon: '🛠️',
      color: '#059669',
      description: 'Joined during a critical delivery phase to optimize core features, improve system stability, and prepare the product for MVP launch.',
      achievements: [
        'Led the optimization of core features to enhance system stability',
        'Increased development velocity by resolving blockers',
        'Restructured delayed modules, bringing the project back on schedule',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      metrics: [
        { icon: <FaClock />, label: 'On Schedule', description: 'MVP Launch' },
        { icon: <FaChartLine />, label: 'Faster', description: 'Dev Velocity' },
      ],
    },
    {
      title: 'Lango',
      role: 'Full Stack Developer',
      category: 'Communication Platform',
      icon: '🌐',
      color: '#4F46E5',
      description: 'Owned and delivered multiple core features using React, GraphQL, Golang, and Node.js, following Clean Architecture principles for maintainability.',
      achievements: [
        'Delivered multiple core features across the full stack',
        'Refactored critical modules, reducing code complexity',
        'Improved API response times',
      ],
      technologies: ['React', 'GraphQL', 'Golang', 'Node.js', 'Clean Architecture'],
      metrics: [
        { icon: <FaChartLine />, label: 'Faster', description: 'API Responses' },
        { icon: <FaClock />, label: 'Lower', description: 'Code Complexity' },
      ],
    },
    {
      title: 'Judy',
      role: 'Front End Developer',
      category: 'Security Platform',
      icon: '🛡️',
      color: '#DC2626',
      description: 'Designed and implemented front-end UI screens for a security platform, supporting device enrollment and management for enterprise organizations.',
      achievements: [
        'Built device enrollment and management screens in React',
        'Enhanced user experience and administrative control for enterprise admins',
      ],
      technologies: ['React', 'JavaScript'],
      metrics: [
        { icon: <FaUsers />, label: 'Enterprise', description: 'Organizations' },
        { icon: <FaChartLine />, label: 'Device', description: 'Management' },
      ],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Client projects delivered end to end
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

