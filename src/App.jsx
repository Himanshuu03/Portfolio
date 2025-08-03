import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'certifications':
        return <Certifications />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default App
