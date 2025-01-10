import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Discord Bots Using Python',
        year: '2023',
        description: 'Developed some Discord Bots for Moderation and In-Game chat loggging.',
        image: '/dc.png', // Replace with the actual path to the image
    },
    {
        title: 'Web Application',
        year: '2024',
        description: 'Developed a web application for a university project.',
        image: '/web.png', // Replace with the actual path to the image
    },
    {
        title: 'Line Follower Robot',
        year: '2024',
        description: 'Made a Robot that follows a path automatically using IoT',
        image: '/images.jpeg', // Replace with the actual path to the image
    },
    {
        title: 'Mentored students for a kick start in IoT',
        year: '2024',
        description: "As a Tech Mentor, I had the privilege of guiding students through hands-on learning, helping them build a strong foundation in electronics and embedded systems.",
        image: 'men.png', // Replace with the actual path to the image
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <div className="project-info">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-year">{project.year}</p>
                        <p className="project-description">{project.description}</p>
                    </div>
                    <div className="project-image">
                        <img src={project.image} alt={project.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
