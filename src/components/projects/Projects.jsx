import React from "react";
import "./projects.css"; // Make sure your updated CSS file is being used

function Projects() {
  const projectData = [
    {
      title: "Chess Game App",
      description:
        "I developed a dynamic chess app that lets you challenge friends to a game over the internet. Built with Java, this app features real-time multiplayer functionality, allowing players to connect and compete seamlessly. Whether you're a casual player or a strategic mastermind, Chess Connect offers a smooth and engaging experience for chess enthusiasts everywhere.",
      link: "https://github.com/rtkane/Chess", // Link to the project
    },
    {
      title: "Algorithm Sorting Visualizer",
      description:
        "I developed an interactive algorithm sorting visualizer using Python to showcase the inner workings of various sorting algorithms. This tool provides a dynamic and educational way to visualize how different algorithms handle data, making it easier to understand their performance and behavior in real-time. Whether you're a student learning algorithms or just curious about how they operate, this visualizer brings sorting algorithms to life!",
      link: "https://github.com/rtkane/sortingVisual/blob/main/sortingGame.py",
    },
  ];

  return (
    <div className="projects-section">
      <h3>My Projects</h3>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
