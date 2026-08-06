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
              "필요한 기술을 배워 만들고\n배포까지 책임지는 개발자 윤채영입니다.",
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
