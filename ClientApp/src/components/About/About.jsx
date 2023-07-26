import React from 'react'
import './about.css'
import portrait from './portrait.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <header id="about">
      <div className="about__container">
        <div className="personal_container">
          <img src={portrait} alt="" className="self_Image" />
          <ul className="media_links">
            <li>
              <a href="https://www.github.com/Ryan-Vreeke"><FontAwesomeIcon icon={faGithub}
                className='awesome_icon' /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryan-vreeke-b2071815a/"><FontAwesomeIcon icon={faLinkedin}
                className='awesome_icon' /></a>
            </li>
          </ul>
        </div>
        <div className="text_blurb">
          <h1 id='name_header'>Ryan Vreeke</h1>
          <h4>University of Utah '24, Computer Science Major, Software Developer, and Technology Enthusiast</h4>
          <br />
          <p>
            Hello! I'm Ryan Vreeke, a computer science student at the University of Utah. My passion lies in AI, computer graphics, computer vision, and operating systems. I had the opportunity to gain practical experience as a software developer intern at ESRI, where I worked with WPF and .NET. I'm dedicated to pushing the boundaries of technology and am excited to contribute my skills to shaping the future. Explore my portfolio website to see the projects that showcase my talent and expertise.
          </p>
          <br />
          <h3 id='edu-header'>Education</h3>
          <ul className="education">
            <li>
              <p><span className='bold_text'>University of Utah</span> - Bachelor of Science in Computer Science (Expected 2024)</p>
            </li>
          </ul>

          <h3 id='int-header'>Interests</h3>
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