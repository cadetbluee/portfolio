// src/components/ProjectDetail.tsx
import React from "react";
import "./ProjectDetail.css";

interface ProjectDetailProps {
  logo: string;
  title: string;
  subtitle: string;
  period: string;
  platform: string;
  team: string;
  result: string;
  roles: string;
  environment: {
    language: string;
    framework: string;
    database: string;
    devops: string;
  };
  screenshots: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  logo,
  title,
  subtitle,
  period,
  platform,
  team,
  result,
  roles,
  environment,
  screenshots,
}) => {
  return (
    <section className="project-detail">
      <div className="project-info">
        <div className="logo-title">
          <img src={logo} alt={title} className="project-logo-large" />
          <h2>
            <span className="title-highlight">{title}</span> | {subtitle}
          </h2>
        </div>

        <div className="info-section">
          <div>
            <strong>개발 기간</strong> <br /> {period}
          </div>
          <div>
            <strong>플랫폼</strong> <br /> {platform}
          </div>
          <div>
            <strong>개발 인원</strong> <br /> {team}
          </div>
          <div>
            <strong>성과</strong> <br /> {result}
          </div>
          <div>
            <strong>담당 역할</strong> <br /> {roles}
          </div>
        </div>

        <div className="env-section">
          <h3 className="section-title">개발 환경</h3>
          <div>
            <strong>언어</strong>: {environment.language}
          </div>
          <div>
            <strong>프레임워크</strong>: {environment.framework}
          </div>
          <div>
            <strong>데이터베이스</strong>: {environment.database}
          </div>
          <div>
            <strong>DevOps</strong>: {environment.devops}
          </div>
        </div>
        <div className="project-screenshots">
          {screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`screenshot-${idx}`}
              className="screenshot-img"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
