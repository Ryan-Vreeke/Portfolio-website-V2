import SkillBar from './SkillBar';
import React, { useState, useEffect } from 'react'
import './skills.css'

function Skills() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('skill/')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);

  const colors = ["#BF616A", "#D08770", "#EBCB8B", "#A3BE8C", "#B48EAD", "#88C0D0"];

  return (
    <section id="skills">
      <h2 className='section_title'>Skills</h2>
      <div className="skill_set">
        <ul className="skill_group">
          {items.slice(0, 3).map((item, index) => (
            <SkillBar key={item.id} skill={item.name} color={colors[index % colors.length]} filled={(item.experience / 4) * 100} exp={item.experience}/>
          ))}
        </ul>

        <ul className="skill_group">
          {items.slice(3).map((item, index) => (
            <SkillBar key={item.id} skill={item.name} color={colors[index + 3 % colors.length]} filled={(item.experience / 4) * 100} exp={item.experience}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
