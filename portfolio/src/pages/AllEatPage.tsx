import ProjectDetail from "../components/ProjectDetail";
import alleatLogo from "../assets/alleatLogo.png";
import screenshot1 from "../assets/alleat1.png";
import screenshot2 from "../assets/alleat2.png";
import screenshot3 from "../assets/alleat3.png";
import code from "../assets/alleatcode.png";
import "./AllEatPage.css";

const AllEatPage = () => {
  return (
    <main className="ae-container">
      <section className="ae-intro">
        <div className="ae-title-box">
          <img src={alleatLogo} alt="alleatLogo" className="ae-logo" />
          <div>
            <h1 className="ae-title">AllEat</h1>
            <p>식단 및 식비 자동 관리 서비스</p>
          </div>
        </div>

        <div className="ae-origin">
          <img src={screenshot1} alt="main-screen" className="ae-main-img" />
          <div className="ae-origin-text">
            <h2 className="ae-sub-title">기획배경</h2>
            <p>
              핀테크 프로젝트로 기획된 AllEat은 기존의 식단어플과 차별점을
              자동화로 두어 올잇에서 제공하는 올잇페이로 결제를 하면 자동으로
              식단을 기록해주는 식단식비 자동화 서비스를 목표로 기획되었습니다.
            </p>
            <h2 className="ae-sub-title">기존 서비스와의 차별점</h2>
            <p>1. 페이머니 기반 자동화된 식단기록</p>
            <p>2. 사진인식으로 칼로리 자동 계산</p>
            <p>3. 지출 통계 시각화 및 사용자 맞춤 식단 리포트 제공</p>
            <button
              className="ae-readme"
              onClick={() => {
                window.open("https://github.com/cadetbluee/project-alleat");
              }}
            >
              GIT
            </button>
          </div>
        </div>
      </section>

      <section className="ae-develop">
        <h2 className="ae-title">Features</h2>
        <div className="ae-circle"></div>
        <div className="ae-circle-bg"></div>

        <h3 className="add-meal-title">식단 기록</h3>
        <div className="ae-feature-block">
          <img className="ae-img" src={screenshot2} alt="add-meal" />
          <div className="ae-feature-text">
            <h3>결제한 식당 메뉴 노출</h3>
            <p>
              해당 날짜에 올잇페이로 결제한 곳의 메뉴를 결제 금액을 기반으로
              불러와 식단관리를 더 쉽게 만듭니다.
            </p>
            <h3>한번에 기록</h3>
            <p>토글을 이용해 여러번의 식단을 한번에 기록할 수 있습니다.</p>
            <h3>식비 기록</h3>
            <p>식비도 함께 기록해 지출된 페이머니와 따로 관리할 수 있습니다.</p>
          </div>
        </div>

        <h3 className="add-meal-title">식단 등록</h3>
        <div className="ae-feature-block">
          <div className="add-meal-text">
            <h3>사진인식 기반 식단 등록</h3>
            <p>
              음식 사진을 AI모델을 이용해 학습시켜 사진으로 칼로리를 자동인식해
              등록할 수 있습니다.
            </p>
            <h3>가게와의 연동</h3>
            <p>
              유저들이 해당 가게에서 먹은 메뉴를 등록할 수 있게 해 이용자가
              많아질 수록 유저들의 식단관리가 쉬워질 수 있도록 설계했습니다.
            </p>
            <h3>영양정보 그래프</h3>
            <p>각 메뉴의 영양정보를 보기 편하도록 그래프로 시각화했습니다.</p>
          </div>
          <img className="ae-img" src={screenshot3} alt="식비 통계" />
        </div>
      </section>

      <section className="troubleshooting">
        <h2 className="ae-title">Trouble shooting</h2>

        <h3 className="ts-subtitle">데이터 로딩 및 렌더링 개선</h3>
        <p className="ts-desc">
          사용자의 식단 및 식비 데이터를 일간 레포트로 제공하는 기능 개발
        </p>

        <div className="ts-problems">
          <p>
            <strong>문제 1</strong> 불필요한 API 요청으로 인한 네트워크 부하
          </p>
          <p>
            <strong>문제 2</strong> 보고서 데이터가 많을수록 렌더링 속도 저하
          </p>
        </div>

        <div className="ts-solutions">
          <p>➔ useMemo를 활용한 연산 최적화 → 렌더링 성능 개선</p>
        </div>

        <div className="ts-result">
          <p>✅ 데이터 초기화 및 로딩 상태 개선 → 사용자 경험(UX) 향상</p>
          <p>✅ 중복 API 요청 제거 → 네트워크 트래픽 감소</p>
        </div>

        <div className="ts-code-img">
          <img src={code} alt="ocr optimization code" />
        </div>
      </section>

      <ProjectDetail
        logo={alleatLogo}
        title="AllEat"
        subtitle="식단/식비 관리 자동화 앱 서비스"
        period="2024.08 - 2024.10"
        platform="App"
        team="6인 (FrontEnd 3, BackEnd 3)"
        roles="FrontEnd, UI/UX Design, 기획"
        environment={{
          language: "TypeScript, Java, HTML/CSS",
          framework: "ReactNative, SpringBoot, Node.js",
          database: "MySQL, Firebase",
          devops: "Jenkins, Docker, Nginx, AWS EC2",
          ai: "YOLOv10, GPU",
        }}
        screenshots={[screenshot1, screenshot2]}
      />
    </main>
  );
};

export default AllEatPage;
