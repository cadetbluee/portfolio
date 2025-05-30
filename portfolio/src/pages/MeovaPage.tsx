import React from "react";
import ProjectDetail from "../components/ProjectDetail";
import meovaLogo from "../assets/meovaLogo.png";

const MeovaPage: React.FC = () => {
  return (
    <ProjectDetail
      logo={meovaLogo}
      title="PushOfLife"
      subtitle="응급 구조 지원 및 CPR 가이드 서비스"
      period="2024.10 - 2024.11"
      platform="App, Wear OS"
      team="6인 (FrontEnd 2, BackEnd 4)"
      result="자율 프로젝트 결선 1위"
      roles="FrontEnd, UI/UX Design, 기획"
      environment={{
        language: "Kotlin, Java",
        framework: "Android SDK, WearOS SDK, Jetpack Compose",
        database: "MySQL, Redis, MongoDB",
        devops: "Jenkins, Docker, Nginx, AWS EC2"
      }}
      screenshots={[meovaLogo, meovaLogo]}
    />
  );
};

export default MeovaPage;
