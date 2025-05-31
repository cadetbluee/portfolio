import ProjectDetail from "../components/ProjectDetail";
import pushoflifeLogo from "../assets/pushoflifeLogo.png";
import screenshot1 from "../assets/pushoflife1.png";
import screenshot2 from "../assets/pushoflife2.png";
import screenshot3 from "../assets/pushoflife3.png";
import code from "../assets/polcprcode.png";
import "./PushOfLifePage.css";
const PushOfLifePage = () => {
  return (
    <main className="container">
      <section className="intro">
        <div className="pol-title-box">
          <img src={pushoflifeLogo} alt="pushoflifeLogo" className="pol-logo" />
          <div>
            <h1 className="pol-title">PushOfLife</h1>
            <p>응급 구조 지원 및 CPR 가이드 서비스</p>
          </div>
        </div>

        <div className="origin">
          <img src={screenshot1} alt="main-screen" className="main-img" />
          <div className="origin-text">
            <h2 className="sub-title">기획배경</h2>
            <p>
              많은 사람들이 CPR에 대해 들어보았거나 중요성에 대해 알고는 있지만
              실제 환자가 발생했을때 어떻게 대처하는지 모르거나 심폐소생술을
              제대로 시행하지 못해 망설이는 경우가 많아 환자가 쓰러졌을때
              자동으로 신고하고 헬퍼에게는 워치를 통해 심폐소생술 가이드를
              제공하는 서비스를 기획했습니다.
            </p>
            <h2 className="sub-title">기존 서비스와의 차별점</h2>
            <p>1. 워치 내 기본 센서를 이용해 정확한 피드백 제공</p>
            <p>
              2. 워치의 심박수 데이터를 이용해 낙상 감지 후 심박수에 이상이
              있다면 자동 신고
            </p>
            <p>
              3. 사고 발생시 환자워치에서 워치를 끼고 있지 않는 헬퍼를 위한
              TTS음성안내 및 메트로늄 제공
            </p>
            <button
              className="readme"
              onClick={() => {
                window.open("https://github.com/cadetbluee/project-pushoflife");
              }}
            >
              GIT
            </button>
          </div>
        </div>
      </section>
      <section className="develop">
        <h2 className="pol-title">Features</h2>
        <div className="circle"></div>
        <div className="circle-bg"></div>
        <h3 className="cpr-message-title">심폐소생술 가이드 화면</h3>
        <div className="cpr-guide">
          <img className="cpr-img" src={screenshot2} alt="" />
          <div className="cpr-guide-text">
            <h3>CPR가이드 진입점</h3>
            <p>
              각각 3가지 진입점: 연습, 실전(119신고), 환자워치에 따라 다른
              로직을 적용해 구성
            </p>
            <h3>CPR 가이드</h3>
            <p>
              심폐소생술에 중요한 각도 깊이 빈도 피드백을 워치화면의 색과
              TTS음성, 진동으로 전달
            </p>
            <h3>CPR 그래프</h3>
            <p>워치의 자이로센서를 화면에 송출해 직관적인 피드백 전달</p>
          </div>
        </div>

        <h3 className="cpr-message-title">구조 문자 전송 기능</h3>
        <div className="cpr-message">
          <div className="cpr-message-text">
            <h3>빠른 구조를 위한 개인화 서비스</h3>
            <p>
              응급상황일때 119에게 전송되는 문자내용을 환자가 직접 입력 가능,
              기저질환환자를 고려
            </p>
            <h3>외부 api를 활용한 자동 신고</h3>
            <p>twillo api를 활용한 자동 문자 전송 서비스</p>
            <h3>다양한 분기별 상황 고려</h3>
            <p>
              워치에서 실제 상황인경우 헬퍼의 위치와 함께 119에 자동신고 기능 등
              다양한 상황을 고려해 분기별 기능으로 나눔
            </p>
          </div>
          <img className="cpr-img" src={screenshot3} alt="" />
        </div>
      </section>
      <section className="troubleshooting">
        <h2 className="pol-title">Trouble shooting</h2>

        <h3 className="ts-subtitle">CPR 가이드 애니메이션 최적화</h3>
        <p className="ts-desc">
          사용자의 가속도 데이터를 기반으로 실시간 CPR(심폐소생술) 피드백을
          제공하는 기능 개발
        </p>

        <div className="ts-problems">
          <p>
            <strong>문제 1</strong> 실시간 가속도 데이터로 인해 UI 성능 저하
          </p>
          <p>
            <strong>문제 2</strong> 그래프와 배경 애니메이션이 원활하지 않음
          </p>
        </div>

        <div className="ts-solutions">
          <p>
            ➔ <code>remember</code>를 사용하여 가속도 데이터를 캐싱하고 불필요한
            UI 갱신 방지
          </p>
          <p>
            ➔ <code>maxData</code>를 활용해 그래프의 크기를 일정하게 유지하여
            부드럽게 표시되도록 개선
          </p>
        </div>

        <div className="ts-result">
          <p>
            ✅ 프레임 드랍 50% 감소 → CPR 가이드 애니메이션이 부드럽게 실행됨
          </p>
          <p>✅ 불필요한 UI 재구성을 최소화하여 실시간 데이터 처리 성능 개선</p>
          <p>
            ✅ 사용자에게 CPR 속도를 직관적으로 인식할 수 있도록 시각적 피드백
            강화
          </p>
        </div>

        <div className="ts-code-img">
          <img src={code} alt="code optimization" />
        </div>
      </section>

      <ProjectDetail
        logo={pushoflifeLogo}
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
          devops: "Jenkins, Docker, Nginx, AWS EC2",
        }}
        screenshots={[screenshot1, screenshot2]}
      />
    </main>
  );
};

export default PushOfLifePage;
