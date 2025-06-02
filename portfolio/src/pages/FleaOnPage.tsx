import React from "react";
import ProjectDetail from "../components/ProjectDetail";
import fleaonLogo from "../assets/fleaonLogo.png";
import screenshot1 from "../assets/fleaon1.png";
import screenshot2 from "../assets/fleaon2.png";
import screenshot3 from "../assets/fleaon3.png";
import code from "../assets/fleaoncode.png";
import "./FleaOnPage.css";
const FleaOnPage: React.FC = () => {
  return (
    <main className="fo-container">
      <section className="fo-intro">
        <div className="fo-title-box">
          <img src={fleaonLogo} alt="fleaonLogo" className="fo-logo" />
          <div>
            <h1 className="fo-title">Flea:ON</h1>
            <p>라이브 기반 중고거래 플랫폼</p>
          </div>
        </div>

        <div className="fo-origin">
          <img src={screenshot1} alt="main-screen" className="fo-main-img" />
          <div className="fo-origin-text">
            <h2 className="fo-sub-title">기획배경</h2>
            <p>
              이사를 갈 때 등 한번에 대량의 중고상품을 거래하고 싶을때 마땅한
              서비스가 부족하다는 점에서 아이디어를 얻어 온라인 커머스처럼
              개개인이 라이브로 다량의 중고물품을 거래할 수 있는 플랫폼을
              기획했습니다.
            </p>
            <h2 className="fo-sub-title">기존 서비스와의 차별점</h2>
            <p>1. 라이브 예고로 미리 근처 유저들에게 홍보가 가능합니다</p>
            <p>
              2. 간단한 상품등록 후 라이브를 진행하면 이후 자동으로 쇼츠로
              제작되어 상품홍보를 합니다
            </p>
            <p>3. 마이페이지의 캘린더를 이용해 거래일정을 관리할 수 있습니다</p>
            <button
              className="fo-readme"
              onClick={() => {
                window.open("https://github.com/cadetbluee/project-fleaon");
              }}
            >
              GIT
            </button>
          </div>
        </div>
      </section>

      <section className="fo-develop">
        <h2 className="fo-title">Features</h2>
        <div className="fo-circle"></div>
        <div className="fo-circle-bg"></div>

        <h3 className="add-meal-title">라이브 방송</h3>
        <div className="fo-feature-block">
          <img className="fo-img" src={screenshot2} alt="add-meal" />
          <div className="fo-feature-text">
            <h3>한번에 많은 상품 판매</h3>
            <p>
              버튼이 마치 녹화, 녹화종료 버튼처럼 작동해 내가 팔고싶은 상품을
              한번의 라이브에 모두 소개할 수 있습니다
            </p>
            <h3>예약, 줄서기 기능</h3>
            <p>
              구매자는 직거래 예약, 선약이 있을 걍우 줄서기를 할 수 있습니다.
            </p>
            <h3>실시간 채팅</h3>
            <p>
              webRTC를 활용해 실시간으로 채팅하며 상품에 관련된 질문을 할 수
              있습니다.
            </p>
          </div>
        </div>

        <h3 className="add-meal-title">중고거래의 전과정</h3>
        <div className="fo-feature-block">
          <div className="add-meal-text">
            <h3>판매 예정인 라이브 소개</h3>
            <p>
              메인페이지나 검색결과 페이지 상단에 지역내 판매 예정인 방송들을
              확인할 수 있습니다.
            </p>
            <h3>판매 중인 방송 소개</h3>
            <p>
              페이지 중간에는 현재 판매중인 상품이 썸네일이 대표사진으로 떠
              구매자들의 참여를 유도했습니다.
            </p>
            <h3>쇼츠</h3>
            <p>
              라이브 중 팔리지 않은 상품들은 녹화된 영상이 쇼츠가 되어 AI요약,
              채팅과 함께 보여집니다.
            </p>
          </div>
          <img className="fo-img" src={screenshot3} alt="식비 통계" />
        </div>
      </section>

      <section className="troubleshooting">
        <h2 className="fo-title">Trouble shooting</h2>

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
      </section>

      <ProjectDetail
        logo={fleaonLogo}
        title="AllEat"
        subtitle="식단/식비 관리 자동화 앱 서비스"
        period="2024.07 - 2024.08"
        platform="PWA"
        team="6인 (FrontEnd 3, BackEnd 3)"
        roles="FrontEnd, UI/UX Design, 기획"
        environment={{
          language: "JavaScript, Java, HTML/CSS",
          framework: "React, SpringBoot, Node.js",
          database: "MySQL",
          devops: "Jenkins, Docker, Nginx, AWS EC2",
        }}
        screenshots={[screenshot1, screenshot2]}
      />
      <section className="next-project">
        <button
          className="fo-before-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.location.href = "/project/alleat"; // 이전 프로젝트 라우트로 이동
          }}
        >
          이전 프로젝트 보기
        </button>
        <button
          className="fo-next-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.location.href = "/project/meova"; // 다음 프로젝트 라우트로 이동
          }}
        >
          다음 프로젝트 보기
        </button>
      </section>
    </main>
  );
};

export default FleaOnPage;
