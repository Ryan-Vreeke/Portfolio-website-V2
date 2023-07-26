import React from 'react'
import './projects.css'

function Card(props) {
  const { name, des, image, type, src } = props;

  return (
    <a src={src} className='project_card'>
      <img src={image} alt="" />
      <div className="project_text">
        <h1>{name}</h1>
        <h2>{type}</h2>

        <p>{des}</p>
      </div>
    </a>
  )
}

export default Card