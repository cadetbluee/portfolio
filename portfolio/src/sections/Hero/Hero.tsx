import React from "react";
import MultiTypingEffect from "../../components/MultiTypingEffect";
import decoration from "../../assets/decoration.png";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img className="decoration" src={decoration} alt="decoration image" />
      <div className="content">
        <h1 className="title">
          <MultiTypingEffect
            texts={["직관적인 사용자 경험을 만드는 개발자\n윤채영입니다."]}
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
