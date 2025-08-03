import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', icon: '🌐' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Next.js', icon: '🚀' },
        { name: 'Tailwind CSS', icon: '🎨' }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '⚡' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Python', icon: '🐍' },
        { name: 'Django', icon: '🎯' }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', icon: '/github-icon.svg' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Figma', icon: '🎨' }
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