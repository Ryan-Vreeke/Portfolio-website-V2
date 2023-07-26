import React from 'react'
import './projects.css'

function Card(props) {
  const { name, des, image, type, src } = props;

  let langs = type.split(",");

  return (
    <a src={src} className='project_card'>
      <img src={image} alt="" />
      <div className="project_text">
        <h1>{name}</h1>
        <div className="langs_container">
          {
            langs.map((lang, index) => {
              if (lang == "") {
                return <h2> </h2>
              }

              if (index % 2 != 0 || langs.length == 1) {
                return <h2>{lang}</h2>
              }
              return <h2>{lang},</h2>
            })
          }
        </div>
        <p>{des}</p>
      </div>
    </a>
  )
}

export default Card