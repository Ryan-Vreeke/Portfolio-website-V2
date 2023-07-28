import React, { useState, useEffect } from 'react'
import Card from './Card.jsx'
import './projectPage.css'
import { Chart, ArcElement, Tooltip, Title, LinearScale, CategoryScale, PointElement, LineElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'

Chart.register(ArcElement, Title, Tooltip, LinearScale, CategoryScale, PointElement, LineElement);

function ProjectPage() {


  const DoughnutChart = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
      fetch('skill/percent')
        .then(response => response.json())
        .then(data => {
          const decodedData = JSON.parse(data);
          setSkills(Object.entries(decodedData).map(([name, experience]) => ({ name, experience })));
        })
        .catch(error => console.error(error));
    }, []);


    const data = {
      labels: skills.map(s => s.name),
      datasets: [
        {
          data: skills.map(s => s.experience),
          backgroundColor: ['#5E81AC', '#B48EAD', '#A3BE8C', '#BF616A', '#D08770', '#EBCB8B'],
        },
      ],
    };

    const options = {
      cutout: 140,
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false // <-- this option disables tooltips
        }
      }
    };

    const textCenter = {
      id: 'textCenter',
      beforeDatasetsDraw(chart) {
        const { ctx, data } = chart;
        const { labels } = data;
        let fontSize = 60;

        ctx.save();
        ctx.font = `bolder ${fontSize / 2}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseLine = 'middle';

        const tooltipItem = chart.tooltip._active && chart.tooltip._active[0];
        const tooltipValue = tooltipItem ? `${data.datasets[0].data[tooltipItem.index]}%` : `${data.datasets[0].data[0]}%`;
        const tooltipLabel = tooltipItem ? labels[tooltipItem.index] : labels[0];
        const fillColor = tooltipItem ? data.datasets[0].backgroundColor[tooltipItem.index] : data.datasets[0].backgroundColor[0];

        ctx.fillStyle = fillColor;
        ctx.fillText(tooltipLabel, chart.width / 2, chart.height / 2 + fontSize);
        ctx.font = `bolder ${fontSize}px sans-serif`;
        ctx.fillText(tooltipValue, chart.width / 2, chart.height / 2);
        ctx.restore();
      }
    };

    return <Doughnut data={data} options={options} plugins={[textCenter]} />
  };

  const LineChart = () => {
    const data = {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Projects',
          data: [12, 19, 20, 4, 3],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.0,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          grid: {
            color: 'black',
          },
          ticks: {
            color: 'white',
          },
        },
        y: {
          grid: {
            color: 'black',
          },
          ticks:{
            color: 'white',
          },
          beginAtZero: false,
        },
      },
      plugins: {
        tooltip: {
          enabled: true // <-- this option disables tooltips
        },
        title: {
          color:'white',
          text: 'Projects Per Year',
          display: true,
        },
      }
    };

    return <Line data={data} options={options} />;
  };



  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects/all')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section id='project-page'>
      <h3 className='section_title'>Projects</h3>
      <div className='overview'>
        <div className="language_chart">
          <DoughnutChart />
        </div>
        <div className="project_chart">
          <LineChart />
        </div>
      </div>
      <div className="project_grid">
        {projects.length > 0 ? (
          projects.map(p => (
            <Card name={p.title} des={p.desc} image={p.image} type={p.skills.map(skill => skill).join(', ')} src={p.id} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  )
}

export default ProjectPage
