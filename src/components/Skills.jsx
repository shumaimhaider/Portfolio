import { useState, useEffect, useRef } from 'react'
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaDocker } from 'react-icons/fa'
import { SiGo, SiGraphql, SiPostgresql, SiExpress, SiJavascript, SiTypescript, SiApachekafka, SiKubernetes, SiTerraform, SiDotnet } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set())
  const skillsRef = useRef(null)

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90, color: '#3178C6' },
        { name: 'GraphQL', icon: <SiGraphql />, level: 90, color: '#E10098' },
      ],
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Golang', icon: <SiGo />, level: 90, color: '#00ADD8' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 90, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, level: 90, color: '#000000' },
        { name: '.NET', icon: <SiDotnet />, level: 80, color: '#512BD4' },
        { name: 'gRPC', icon: <FaDatabase />, level: 90, color: '#4285F4' },
      ],
    },
    {
      category: 'Data & Messaging',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 90, color: '#4169E1' },
        { name: 'Kafka', icon: <SiApachekafka />, level: 85, color: '#231F20' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'Docker', icon: <FaDocker />, level: 90, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 85, color: '#326CE5' },
        { name: 'Terraform', icon: <SiTerraform />, level: 85, color: '#7B42BC' },
      ],
    },
  ]

  const additionalSkills = [
    { name: 'Agentic Workflows', icon: '🤖' },
    { name: 'Agent Development', icon: '🧠' },
    { name: 'RAG, Tool Calling & MCP', icon: '🔗' },
    { name: 'MCP Server Development', icon: '🖧' },
    { name: 'Prompt Engineering', icon: '✍️' },
    { name: 'Context Engineering', icon: '📚' },
    { name: 'Model Optimization', icon: '🎛️' },
    { name: 'Application Security', icon: '🔒' },
    { name: 'RESTful APIs', icon: '🔌' },
    { name: 'Microservices', icon: '🔧' },
    { name: 'WebSockets', icon: '🔄' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill')
            setVisibleSkills((prev) => new Set([...prev, skillName]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const skillElements = document.querySelectorAll('.skill-item')
    skillElements.forEach((el) => observer.observe(el))

    return () => {
      skillElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-subtitle">
          Full-stack, distributed systems and AI agent engineering
        </p>
      </div>
      
      <div className="skills-container">
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="skill-item"
                    data-skill={`${category.category}-${skill.name}`}
                  >
                    <div className="skill-header">
                      <div className="skill-name">
                        <span 
                          className="skill-icon" 
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </span>
                        {skill.name}
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${
                          visibleSkills.has(`${category.category}-${skill.name}`) 
                            ? 'visible' 
                            : ''
                        }`}
                        style={{ 
                          '--skill-level': `${skill.level}%`,
                          '--skill-color': skill.color 
                        }}
                      >
                        <span className="progress-glow"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills-section scroll-reveal">
          <div className="additional-skills-header">
            <h3 className="category-title">
              <span className="category-icon">💡</span>
              Additional Expertise
            </h3>
            <p className="additional-skills-description">
              AI agents, security and systems skills for client-facing delivery
            </p>
          </div>
          <div className="tags-container">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-tag"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="tag-icon">
                  {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                </span>
                <span className="tag-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

