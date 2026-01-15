import React from 'react'
import './About.css'
import { experienceData } from '../data/experience'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="main-title">
              <span>web designer</span> and<br />
              <span>full stack developer</span>
            </h1>
            <p className="intro-text">
              I’m Himanshu, a passionate developer based in Bangalore📍, India. I build scalable web solutions where development, DevOps, and creativity come together.
            </p>
            <div className="github-link">
              <img src="/github-icon.svg" alt="GitHub" className="github-icon" />
              <a href="https://github.com/himanshuu03" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="github-icon" style={{ marginLeft: '20px' }} />
              <a href="https://www.linkedin.com/in/himanshu-%E2%80%8E-95482a235/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="about-illustration">
              <div className="gif-illustration" style={{ marginTop: '16px', textAlign: 'center' }}>
                <img
                  src="https://media.giphy.com/media/u3IfbLCYcN8G0GSraL/giphy.gif"
                  alt="Waving Hi GIF"
                  style={{ width: '300px', borderRadius: '8px' }}
                />
              </div>
            </div>
          </div>

        {/* Experience Section */}
        <div className="experience-section">
          <h2 className="experience-title">Experience</h2>
          <div className="experience-grid">
            {experienceData.map((experience) => (
              <div key={experience.id} className="experience-card">
                <div className="experience-header">
                  <div className="experience-info">
                    <h3 className="job-title">{experience.title}</h3>
                    <span className="company-name">{experience.company}</span>
                  </div>
                  <div className="experience-duration">
                    <span className="duration-badge">{experience.duration}</span>
                  </div>
                </div>
                <p className="job-description">{experience.description}</p>
                <div className="technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 