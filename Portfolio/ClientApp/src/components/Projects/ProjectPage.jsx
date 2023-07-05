import React, {useState, useEffect} from 'react'
import './projectPage.css'

function ProjectPage()
{
  const [projects, setProjects] = useState([]);

  console.log("page loaded");

  return(
    <section id='project-page'>
      <h3 className='section_title'>Projects</h3>
    </section>
  )
}

export default ProjectPage
