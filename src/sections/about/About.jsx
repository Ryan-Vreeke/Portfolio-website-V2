import React from 'react'
import './about.css'
import portrait from '../../portrait.jpg';

function About() {
  return (
    <header id="header">
      <div className="header__container">
        <img src={portrait} alt="" id="self_Image" />
        <div className="text_blurb">
          <h1 id='name_header'>Ryan Vreeke</h1>
          <h4>University of Utah '24, Computer Science Major, Software Developer, and Technology Enthusiast</h4>
          <br/>
          <p>
            Hello! I'm Ryan Vreeke, a computer science student at the University of Utah. My passion lies in AI, computer graphics, computer vision, and operating systems. I had the opportunity to gain practical experience as a software developer intern at ESRI, where I worked with WPF and .NET. I am dedicated to pushing the boundaries of technology and am excited to contribute my skills to shaping the future. Explore my portfolio website to see the projects that showcase my talent and expertise.
          </p>
          <br/>
          <h3>Education</h3>
          <ul className="education">
            <li>
              <p><span className='bold_text'>University of Utah</span> - Bachelor of Science in Computer Science (Expected 2024)</p>
            </li>
          </ul>

          <h3>Interests</h3>
          <ul className="interests">
            <li>Computer Graphics</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Web Development</li>
            <li>Computer Hardware</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default About