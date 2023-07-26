import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'


function Timeline() {

    const timelineEvents = [
        {
            date: "May 2021 - August 2021",
            title: "Support Desk - University of Utah",
            description: "Provided technical support to professors and guest lecturers. I addressed inquiries, troubleshot issues, and ensured a smooth library experience. With strong communication skills, I conducted orientations, collaborated with staff, and maintained documentation.",
        },
        {
            date: "April 2021 - current",
            title: "Remote Technician - Capitalfuels",
            description: "Provided efficient and effective remote technical support, troubleshooting hardware and software issues for clients. I ensured optimal system performance and maintained accurate documentation.",
        },
        {
            date: "May 2023 - August 2023",
            title: "Software Developmer Intern - ESRI",
            description: "Collaborated with the team to design and enhance software solutions. Through hands-on experience, I gained expertise in C# programming, ArcGIS SDK, and WPF framework. I contributed to developing high-quality applications, leveraging ArcGIS technology for seamless user experiences.",
        },
        // Add more events as needed
    ];



    return (
        <section id='timeline'>
            <h3 className="section_title">Work Experience</h3>
            <VerticalTimeline className='timeline'>
                {timelineEvents.map((event, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={event.date}
                        iconStyle={{ background: '#B48EAD', color: '#E5E9F0' }}
                        className='timeline-element'
                        dateClassName='timeline-date'
                    >
                        <h3 className="vertical-timeline-element-title">{event.title}</h3>
                        <p>{event.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

        </section>
    )
}

export default Timeline;
