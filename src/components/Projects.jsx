import React, { useState, useMemo } from 'react'
import './Projects.css'
import { projects } from '../data/projects'

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')

  // Get all unique technologies for filter options
  const allTechnologies = useMemo(() => {
    const techSet = new Set()
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [])

  // Filter projects based on selected filters and search term
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // If no filters selected, show all projects
      const matchesFilter = selectedFilters.size === 0 || 
        project.technologies.some(tech => selectedFilters.has(tech))
      
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesFilter && matchesSearch
    })
  }, [selectedFilters, searchTerm])

  // Handle filter selection (toggle)
  const handleFilterClick = (tech) => {
    const newFilters = new Set(selectedFilters)
    if (newFilters.has(tech)) {
      newFilters.delete(tech)
    } else {
      newFilters.add(tech)
    }
    setSelectedFilters(newFilters)
    setSearchTerm('') // Clear search bar when filter is clicked
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters(new Set())
    setSearchTerm('')
  }

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p className="subtitle">Here are some of the projects I've worked on</p>
        </div>
        
        <div className="projects-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="filter-section">
            <div className="filter-header">
              <h3>Filter by Technology</h3>
              {selectedFilters.size > 0 && (
                <button onClick={clearAllFilters} className="clear-filters-btn">
                  Clear All
                </button>
              )}
            </div>
            <div className="filter-tabs">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  className={`filter-tab ${selectedFilters.has(tech) ? 'active' : ''}`}
                  onClick={() => handleFilterClick(tech)}
                >
                  {tech}
                  {selectedFilters.has(tech) && <span className="filter-check">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="projects-stats">
          <span className="projects-count">
            Showing {filteredProjects.length} of {projects.length} projects
            {selectedFilters.size > 0 && (
              <span className="active-filters">
                {' '}(Filtered by: {Array.from(selectedFilters).join(', ')})
              </span>
            )}
          </span>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-icon">
                  <span>{project.image}</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>Featured</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link live">
                    <span>🌐</span>
                    Live 
                  </a>
                  <a href={project.githubUrl} className="project-link github">
                    <img src="/github-icon.svg" alt="GitHub" className="project-github-icon" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects 