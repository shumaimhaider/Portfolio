import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiGo, SiGraphql, SiPostgresql, SiExpress, SiJavascript, SiTypescript, SiRedis } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Golang', icon: <SiGo />, level: 85 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
        { name: 'Express.js', icon: <SiExpress />, level: 85 },
        { name: 'gRPC', icon: <FaDatabase />, level: 75 },
      ],
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
        { name: 'Redis', icon: <SiRedis />, level: 80 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
      ],
    },
  ]

  const additionalSkills = [
    'RESTful APIs',
    'Microservices',
    'WebSockets',
    'Clean Architecture',
    'Test-Driven Development',
    'CI/CD',
    'Docker',
    'Kafka',
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="skills-container">
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category scroll-reveal">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills scroll-reveal">
          <h3 className="category-title">Additional Skills</h3>
          <div className="tags-container">
            {additionalSkills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

