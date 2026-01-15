import React, { useState, useMemo } from 'react'
import './Certifications.css'
import { certifications, categories } from '../data/certifications'

const Certifications = () => {
  const [selectedFilters, setSelectedFilters] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')

  // Filter certifications based on selected filters and search term
  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      // If no filters selected, show all certifications
      const matchesFilter = selectedFilters.size === 0 || selectedFilters.has(cert.category)
      
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.category.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [selectedFilters, searchTerm])

  // Handle filter selection (toggle)
  const handleFilterClick = (category) => {
    const newFilters = new Set(selectedFilters)
    if (newFilters.has(category)) {
      newFilters.delete(category)
    } else {
      newFilters.add(category)
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
    <section className="certifications">
      <div className="certifications-container">
        <div className="certifications-header">
          <h2>Certifications</h2>
          <p className="subtitle">Professional certifications and achievements</p>
        </div>
        
        <div className="certifications-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="filter-section">
            <div className="filter-header">
              <h3>Filter by Category</h3>
              {selectedFilters.size > 0 && (
                <button onClick={clearAllFilters} className="clear-filters-btn">
                  Clear All
                </button>
              )}
            </div>
            <div className="filter-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-tab ${selectedFilters.has(category) ? 'active' : ''}`}
                  onClick={() => handleFilterClick(category)}
                >
                  {category}
                  {selectedFilters.has(category) && <span className="filter-check">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="certifications-stats">
          <span className="certifications-count">
            Showing {filteredCertifications.length} of {certifications.length} certifications
            {selectedFilters.size > 0 && (
              <span className="active-filters">
                {' '}(Filtered by: {Array.from(selectedFilters).join(', ')})
              </span>
            )}
          </span>
        </div>
        
        <div className="certifications-grid">
          {filteredCertifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  <span>{cert.image}</span>
                </div>
                <div className="certification-badge">
                  {cert.verified && (
                    <span className="verified-badge">
                      ✓ Verified
                    </span>
                  )}
                </div>
              </div>
              
              <div className="certification-content">
                <div className="certification-category">
                  <span className="category-tag">{cert.category}</span>
                </div>
                
                <h3>{cert.title}</h3>
                <p className="certification-description">{cert.description}</p>
                
                <div className="certification-details">
                  <div className="detail-item">
                    <span className="detail-label">Issuer:</span>
                    <span className="detail-value">{cert.issuer}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{cert.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">ID:</span>
                    <span className="detail-value">{cert.credentialId}</span>
                  </div>
                </div>
                
                <div className="certification-actions">
                  {cert.certificateUrl && (
                    <a 
                      href={cert.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-cert-btn"
                    >
                      <span>📄</span>
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCertifications.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No certifications found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications 