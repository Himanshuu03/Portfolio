import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="main-title">
              Full-Stack MERN Developer
            </h1>
            <p className="intro-text">
              Hi, I'm Himanshu. A passionate Full-Stack MERN Developer based in Haryana, India.
            </p>
            <div className="github-link">
              <img src="/github-icon.svg" alt="GitHub" className="github-icon" />
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
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
        </div>
    </section>
  )
}

export default About 