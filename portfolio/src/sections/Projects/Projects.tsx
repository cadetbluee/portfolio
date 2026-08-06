import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="project-timeline">
        {projects.map((project) => (
          <Link
            to={`/project/${project.slug}`}
            key={project.slug}
            className="project-card"
          >
            <span className="project-date">{project.period}</span>
            <img
              src={project.logo}
              alt={`${project.name} 로고`}
              className="project-logo"
            />
            <h3>{project.name}</h3>
            <p>{project.cardDescription}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
