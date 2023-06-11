import React from 'react'
import './projects.css'

function Card(props) {
  const {name, des, image} = props;

  return (
    <div className="project_card">
        <img src={image} alt="" />
        <h3 className="project_name">{name}</h3>
        <h4 className="project_des">{des}</h4>
    </div>
  )
}

export default Card