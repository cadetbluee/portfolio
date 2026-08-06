import React from "react";
import "./Skills.css";
import spike from "../../assets/spike.png";
const Skills: React.FC = () => {
  return (
    <section id="about" className="experience">
      <img src={spike} alt="" aria-hidden="true" className="spikes" />
      <h2 className="skill-title">Experience</h2>

      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-table">
          <div className="skill-row">
            <span className="label">Web</span>
            <span>React, TypeScript, Next.js (App Router, SSR), Vue, TailwindCSS</span>
          </div>
          <div className="skill-row">
            <span className="label">Mobile</span>
            <span>Flutter / Dart, Kotlin, Jetpack Compose, React Native</span>
          </div>
          <div className="skill-row">
            <span className="label">BackEnd</span>
            <span>Django (구현·배포), FastAPI · Spring Boot (협업·계약 정합)</span>
          </div>
          <div className="skill-row">
            <span className="label">State</span>
            <span>Riverpod, Redux-Toolkit</span>
          </div>
          <div className="skill-row">
            <span className="label">연동</span>
            <span>REST, SSE 스트리밍, OAuth 2.0 / JWT, Firebase Auth</span>
          </div>
          <div className="skill-row">
            <span className="label">DB</span>
            <span>MySQL, Firebase (Firestore)</span>
          </div>
          <div className="skill-row">
            <span className="label">배포</span>
            <span>Docker, Jenkins, Nginx, AWS EC2, Firebase Hosting, GitHub Actions</span>
          </div>
          <div className="skill-row">
            <span className="label">협업</span>
            <span>Git / GitHub / GitLab, Jira, Figma, Notion</span>
          </div>
        </div>
      </div>

      <div className="certificates-section">
        <h3>Certificates</h3>
        <p>
          삼성 청년 SW 아카데미 수료 (총 1600시간){" "}
          <span className="date">2024.01 - 2024.12</span>
        </p>
        <p>
          정보처리기사 <span className="date">2025.09</span>
        </p>
        <p>
          웹디자인개발기능사 <span className="date">2024.09</span>
        </p>
        <p>
          OPIc Advanced Low <span className="date">2026.03</span>
        </p>
      </div>

      <div className="awards-section">
        <h3>Awards</h3>
        <p>
          삼성청년SW아카데미 자율 프로젝트 전국대회 일등상{" "}
          <span className="date">2024.11</span>
        </p>
        <p>
          삼성청년SW아카데미 웹 프로젝트 최우수상{" "}
          <span className="date">2024.05</span>
        </p>
      </div>
    </section>
  );
};

export default Skills;
