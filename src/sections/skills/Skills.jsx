import './skills.css'

function Skills() {
  const filled = 50;
  const barHeight = 15;
  return (
    <section id="skills">
      <div className="skill_set">
        <ul>
          <li className="skill_item">
            <div className="exp_bar">
              <div style={{
                height: "100%",
                borderRadius: `${barHeight}px`,
                width: `${filled}%`,
                backgroundColor: "blue"
              }}></div>
            </div>
            <h6>C#</h6>
          </li>
          <li className="skill_item">
            <div className="exp_bar">
              <div style={{
                height: "100%",
                borderRadius: `${barHeight}px`,
                width: `${filled}%`,
                backgroundColor: "blue"
              }}></div>
            </div>
            <h6>React</h6>
          </li>
          <li className="skill_item">
            <div className="exp_bar">
              <div style={{
                height: "100%",
                borderRadius: `${barHeight}px`,
                width: `${filled}%`,
                backgroundColor: "blue"
              }}></div>
            </div>
            <h6>C++</h6>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills