import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'JavaScript', icon: '/javascript-icon.svg' },
        { name: 'React', icon: '/react-icon.svg' },
        { name: 'Angular', icon: '/angular-icon.svg' },
        { name: 'TypeScript', icon: '/typescript-icon.svg' },
        { name: 'Next.js', icon: '/nextjs-icon.svg' },
        { name: 'Tailwind CSS', icon: '/tailwind-icon.svg' }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: '/nodejs-icon.svg' },
        { name: 'Express.js', icon: '/express-icon.svg' },
        { name: 'Spring Boot', icon: '/spring-icon.svg' },
        { name: 'gRPC', icon: '/grpc-icon.svg' },
        { name: 'MongoDB', icon: '/mongodb-icon.svg' },
        { name: 'PostgreSQL', icon: '/postgresql-icon.svg' },
        { name: 'Python', icon: '/python-icon.svg' }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', icon: '/github-icon.svg' },
        { name: 'Docker', icon: '/docker-icon.svg' },
        { name: 'Kubernetes', icon: '/kubernetes-icon.svg' },
        { name: 'Argo CD', icon: '/argocd-icon.svg' },
        { name: 'AWS', icon: '/aws-icon.svg' },
        { name: 'Vercel', icon: '/vercel-icon.svg' }
      ]
    }
  ]

  return (
    <section className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills & Technologies</h2>
          <p className="subtitle">My technical expertise and tools I work with</p>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      {skill.icon.endsWith('.svg') ? (
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      ) : (
                        <span className="skill-icon">{skill.icon}</span>
                      )}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 