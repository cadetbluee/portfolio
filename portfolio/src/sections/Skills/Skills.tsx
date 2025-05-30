import React from "react";
import "./Skills.css";
import spike from "../../assets/spike.png";
const Skills: React.FC = () => {
  return (
    <section id="about" className="experience">
      <img src={spike} alt="spikes" className="spikes" />
      <h2 className="skill-title">Experience</h2>

      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-table">
          <div className="skill-row">
            <span className="label">FrontEnd</span>
            <span>Vue, React, React Native, Kotlin</span>
          </div>
          <div className="skill-row">
            <span className="label">BackEnd</span>
            <span>Django</span>
          </div>
          <div className="skill-row">
            <span className="label">DB</span>
            <span>mySQL, SQLite</span>
          </div>
          <div className="skill-row">
            <span className="label">ETC</span>
            <span>Git, Firebase, WebSocket, Jira</span>
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
          SW 역량테스트 A+형 취득 <span className="date">2024.05</span>
        </p>
        <p>
          OPIC AL <span className="date">2024.03</span>
        </p>
        <p>
          웹디자인기능사 <span className="date">2024.09</span>
        </p>
      </div>

      <div className="awards-section">
        <h3>Awards</h3>
        <p>
          삼성 청년 SW 아카데미 관통 프로젝트 1등{" "}
          <span className="date">2024.05</span>
        </p>
        <p>
          삼성 청년 SW 아카데미 1학기 성적우수상{" "}
          <span className="date">2024.05</span>
        </p>
        <p>
          삼성 청년 SW 아카데미 자율 프로젝트 결선 1등{" "}
          <span className="date">2024.12</span>
        </p>
      </div>
    </section>
  );
};

export default Skills;
