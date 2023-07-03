import React from 'react'

function SkillBar(props) {
    const barHeight = 15;
    const { skill, color, filled, exp } = props;

    return (
        <li className="skill_item">
            <div className="exp_bar">
                <div style={{
                    height: "100%",
                    borderRadius: `${barHeight}px`,
                    width: `${filled}%`,
                    backgroundColor: `${color}`
                }}></div>
            </div>
            <div className="text_items">
                <h4>{skill}</h4>
                {exp > 1 ? (
                    <h4 id='exp-date'>{exp} years</h4>
                ) : (
                    <h4 id='exp-date'>{exp} year</h4>
                )}
            </div>
        </li>
    )
}

export default SkillBar