import React, { useState, useEffect } from 'react'
import Card from './Card'
import './projects.css'

function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch('projects/')
      .then(response => response.json())
      .then(data => setProject(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section id='Projects'>
      <h3 className='section_title'>Projects</h3>

      {project.length > 0 ? (
        <div className="project_scroll">
          {project.map(p => (
            <Card name={p.title} des={p.desc} image={p.image} type={p.skills.map(skill => skill.name).join(', ')} src={p.id} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </section >
  )
}

export default Projects
