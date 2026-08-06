// src/components/ProjectDetail.tsx
import React from "react";
import type { ProjectDetailInfo } from "../data/projects";
import "./ProjectDetail.css";

const ProjectDetail: React.FC<ProjectDetailInfo> = ({
  period,
  platform,
  team,
  result,
  roles,
  environment,
}) => {
  return (
    <section className="project-detail">
      <div className="project-info">
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

          {result && (
            <div>
              <strong>성과</strong> <br /> {result}
            </div>
          )}
          <div>
            <strong>담당 역할</strong> <br /> {roles}
          </div>
        </div>

        <div className="env-section">
          <h3 className="section-title">개발 환경</h3>
          <div>
            <strong>언어</strong> {environment.language}
          </div>
          <div>
            <strong>프레임워크</strong> {environment.framework}
          </div>
          <div>
            <strong>데이터베이스</strong> {environment.database}
          </div>
          <div>
            <strong>DevOps</strong> {environment.devops}
          </div>

          {environment.ai && (
            <div>
              <strong>AI</strong> {environment.ai}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
