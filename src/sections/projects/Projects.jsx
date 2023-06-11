import React from 'react'
import Card from './Card'
import './projects.css'
import image from '../../portfolio.jpg'

function Projects() {
  const count = 4;
  return (
    <section id='Projects'>
      <h3 className='project_title'>Projects</h3>
      <div className="card_section">
        {Array.from({length: count }, (_, index) => (
          <Card name={`Project ${index}`} des='this is a test' image={image} />
        ))}
    
      </div>
    </section>
  )
}

export default Projects