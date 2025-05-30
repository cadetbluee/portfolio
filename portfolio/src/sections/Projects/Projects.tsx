import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import pushoflifeLogo from "../../assets/pushoflifeLogo.png";
import alleatLogo from "../../assets/alleatLogo.png";
import fleaonLogo from "../../assets/fleaonLogo.png";
import meovaLogo from "../../assets/meovaLogo.png";

const projects = [
  {
    name: "PushOfLife",
    description: "응급구조 지원 및 CPR 가이드",
    link: "/project/pushoflife",
    logo: pushoflifeLogo,
    date: "2024.10 - 2024.11",
    tags: ["#FE", "#디자인", "#기획"],
  },
  {
    name: "AllEat!",
    description: "식단/식비 자동 관리 서비스",
    link: "/project/alleat",
    logo: alleatLogo,
    date: "2024.08 - 2024.10",
    tags: ["#FE", "#디자인", "#기획"],
  },
  {
    name: "Flea:ON",
    description: "라이브 기반 중고거래 플랫폼",
    link: "/project/fleaon",
    logo: fleaonLogo,
    date: "2024.07 - 2024.08",
    tags: ["#FE", "#디자인", "#기획"],
  },
  {
    name: "MEOVA",
    description: "커뮤니티 기반 영화 플랫폼",
    link: "/project/meova",
    logo: meovaLogo,
    date: "2024.05 - 2024.06",
    tags: ["#BE", "#FE", "#디자인"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="project-timeline">
        {projects.map((project, index) => (
          <Link to={project.link} key={index} className="project-card">
            <span className="project-date">{project.date}</span>
            <img
              src={project.logo}
              alt={project.name}
              className="project-logo"
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
