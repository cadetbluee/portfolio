import React from "react";
import ProjectDetail from "../components/ProjectDetail";
import screenshot1 from "../assets/meova1.png";
import screenshot2 from "../assets/meova2.png";
import screenshot3 from "../assets/meova3.png";
import code from "../assets/fleaoncode.png";
import "./MeovaPage.css";
import meovaLogo from "../assets/meovaLogo.png";

const MeovaPage: React.FC = () => {
  return (
    <main className="m-container">
      <section className="m-intro">
        <div className="m-title-box">
          <img src={meovaLogo} alt="fleaonLogo" className="m-logo" />
          <div>
            <h1 className="m-title">Meova</h1>
            <p>SNS 기반 영화 플랫폼</p>
          </div>
        </div>

        <div className="m-origin">
          <img src={screenshot1} alt="main-screen" className="m-main-img" />
          <div className="m-origin-text">
            <h2 className="m-sub-title">기획배경</h2>
            <p>
              함께 영화를 볼 때 ‘무슨 영화를 볼지’ 결정하는 데 어려움을 겪는
              경우가 많고, 추천받은 영화가 상황에 적합하지 않아 불편함을 겪는
              일도 있습니다. 정보가 넘쳐나는 시대에, 상황과 관계에 맞는 영화를
              빠르고 간편하게 찾을 수 있는 서비스가 필요하다고 판단했습니다. 그
              결과 태그 기반 검색과 직관적인 메인 화면 구성을 통해 검색 시간을
              줄이고 접근성을 높이는 방식을 기획하게 되었습니다
            </p>
            <h2 className="m-sub-title">기존 서비스와의 차별점</h2>
            <p>
              1. 관람 상황에 맞는 태그 기반 검색 제공으로 사용자의 맥락에
              최적화된 추천이 가능합니다
            </p>
            <p>
              2. 선정성, 폭력성 등 감정적으로 불쾌할 수 있는 요소를 태그화하고
              해당 태그에 짧은 코멘트를 달아, 사용자가 영화를 선택하기 전에 사전
              정보를 쉽게 파악할 수 있습니다
            </p>
            <p>3. 매일 독창적인 테마의 영화 3편을 추천합니다</p>
            <button
              className="m-readme"
              onClick={() => {
                window.open("https://github.com/cadetbluee/project-meova");
              }}
            >
              GIT
            </button>
          </div>
        </div>
      </section>

      <section className="m-develop">
        <h2 className="m-title">Features</h2>
        <div className="m-circle"></div>
        <div className="m-circle-bg"></div>

        <h3 className="add-meal-title">영화 상세 페이지</h3>
        <div className="m-feature-block">
          <img className="m-img" src={screenshot2} alt="add-meal" />
          <div className="m-feature-text">
            <h3>태그 코멘트</h3>
            <p>
              시청자들은 영화의 태그에 코멘트를 달아 다른 시청자들이 시청하기 전
              도움을 줄 수 있습니다.
            </p>
            <h3>영화 상세 정보</h3>
            <p>영화 줄거리, 감독, 배우, 유저들의 후기를 볼 수 있습니다.</p>
            <h3>감독, 배우 상세 정보</h3>
            <p>배우나 감독의 출연작을 확인할 수 있습니다.</p>
          </div>
        </div>

        <h3 className="add-meal-title">마이페이지</h3>
        <div className="m-feature-block">
          <div className="add-meal-text">
            <h3>팔로우 목록</h3>
            <p>
              마이페이지에서 팔로우중인 유저나 나를 팔로우하는 유저목록을 확인할
              수 있습니다.
            </p>
            <h3>시청한 영화 캘린더</h3>
            <p>
              후기를 남긴 날짜에 해당 영화의 포스터가 나타나고 클릭시 작성한
              후기로 넘어갑니다.
            </p>
            <h3>좋아요 누른 영화, 배우 목록</h3>
            <p>좋아한 영화나 배우들 목록을 확인할 수 있습니다.</p>
          </div>
          <img className="m-img" src={screenshot3} alt="식비 통계" />
        </div>
      </section>

      {/* <section className="troubleshooting">
        <h2 className="m-title">Trouble shooting</h2>

        <h3 className="ts-subtitle">실시간 스트리밍 최적화</h3>
        <p className="ts-desc">
          일부 환경에서 라이브 스트리밍이 정상적으로 구독되지 않는 문제{" "}
        </p>

        <div className="ts-problems">
          <p>
            <strong>문제 1</strong>일부 사용자 환경에서 라이브 스트리밍이
            정상적으로 표시되지 않음
          </p>
          <p>
            <strong>문제 2</strong> 네트워크 지연으로 인한 구독 실패
          </p>
        </div>

        <div className="ts-solutions">
          <p>➔ 스트림 구독 재시도 로직 추가 → 네트워크 지연 대응</p>
        </div>

        <div className="ts-result">
          <p>
            ✅ 일시적인 네트워크 문제 발생 시, 최대 3번까지 자동 재시도하여
            안정적인 스트리밍 제공
          </p>
          <p>✅ 네트워크 불안정으로 인한 초기 스트리밍 실패율 감소</p>
        </div>

        <div className="ts-code-img">
          <img src={code} alt="ocr optimization code" />
        </div>
      </section> */}

      <ProjectDetail
        logo={meovaLogo}
        title="AllEat"
        subtitle="소셜 커뮤니티 기반 영화 추천 플랫폼"
        period="2024.05 - 2024.05"
        platform="Web"
        team="2인 (Fullstack 3)"
        result="관통 프로젝트 최우수상 수상"
        roles="BackEnd, FrontEnd, UI/UX Design, 기획"
        environment={{
          language: "TypeScript, Python, HTML/CSS",
          framework: "Vue, Django",
          database: "MySQL",
          devops: "Figma, Gitlab, Notion",
        }}
        screenshots={[screenshot1, screenshot2]}
      />
      <section className="next-project">
        <button
          className="m-before-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.location.href = "/project/fleaon"; // 이전 프로젝트 라우트로 이동
          }}
        >
          이전 프로젝트 보기
        </button>
        <button
          className="m-next-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.location.href = "/project/pushoflife"; // 다음 프로젝트 라우트로 이동
          }}
        >
          다음 프로젝트 보기
        </button>
      </section>
    </main>
  );
};

export default MeovaPage;
