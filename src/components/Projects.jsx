import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Lango',
      role: 'Full Stack Developer',
      description: 'A communication/interpretation platform where I contributed as a Full-Stack Engineer. Owned and delivered multiple core features using React, GraphQL, Golang, and Node.js, following Clean Architecture principles for maintainability.',
      achievements: [
        'Refactored multiple critical modules, reducing code complexity',
        'Improved API response times significantly',
        'Implemented real-time communication features',
      ],
      technologies: ['React', 'GraphQL', 'Golang', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'FixaFib',
      role: 'Full Stack Developer',
      description: 'A health-tech product where I worked as a Full-Stack Developer during a critical delivery phase. Led the optimization of core features to enhance system stability and prepare the product for MVP launch.',
      achievements: [
        'Increased development velocity by resolving blockers',
        'Restructured delayed modules',
        'Brought the project back on schedule for MVP launch',
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Connect Wheels',
      role: 'Personal Project',
      description: 'A microservices-driven vehicle marketplace platform built as a self-directed project to deepen practical experience in distributed system design and scalable backend architectures.',
      achievements: [
        'Built scalable microservices in Node.js + Express with TypeORM',
        'Implemented gRPC for low-latency service communication',
        'Used Kafka for event-driven workflows',
        'Developed responsive React frontend with React Query',
      ],
      technologies: ['React', 'Node.js', 'gRPC', 'Kafka', 'TypeORM', 'Microservices'],
      github: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card scroll-reveal">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-role">{project.role}</span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            {project.github && (
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

