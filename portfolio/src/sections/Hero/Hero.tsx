import React from "react";
import MultiTypingEffect from "../../components/MultiTypingEffect";
import decoration from "../../assets/decoration.png";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* 장식용 이미지 — 의미를 전달하지 않으므로 스크린리더에서 숨긴다 */}
      <img className="decoration" src={decoration} alt="" aria-hidden="true" />
      <div className="content">
        <h1 className="title">
          <MultiTypingEffect
            texts={[
              "화면부터 배포까지 책임지는\n개발자 윤채영입니다.",
              "앱과 웹을 혼자 만들고 배포한\n개발자 윤채영입니다.",
              "동작하는 화면과 정직한 화면을 구분하는\n개발자 윤채영입니다.",
            ]}
          />
        </h1>

        <button
          className="cta-button"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          프로젝트 보러가기
        </button>
      </div>
    </section>
  );
};

export default Hero;
