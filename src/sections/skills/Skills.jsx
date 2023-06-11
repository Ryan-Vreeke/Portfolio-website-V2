import './skills.css'

function Skills() {
  const filled = 50;
  const barHeight = 15;
  return (
    <section id="skills">
      <h2 className='section_header'>Skills</h2>
      <div className="skill_set">
        <ul className='skill_group'>
          <li className="skill_item">
            <div className="exp_bar">
              <div style={{
                height: "100%",
                borderRadius: `${barHeight}px`,
                width: `${filled}%`,
                backgroundColor: "blue"
              }}></div>
            </div>
            <h4>C#</h4>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
