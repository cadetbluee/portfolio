import React from "react";
import "./About.css";
import ornamment from "../../assets/ornament.png";
const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <img src={ornamment} alt="ornament" className="ornament" />
      <h3>직관적이고 이해하기 쉬운 디자인을 추구합니다</h3>
      <p>
        복잡한 기능도 간결하게 표현하여 사용자의 학습 곡선을 줄이고, 직관적으로
        기능을 파악할 수 있도록 디자인합니다. 이를 통해 사용자들이 사이트를
        탐색하고 활용하는 데 편리함을 느끼도록 합니다
      </p>
      <h3>사용자 중심의 사고를 지향합니다</h3>
      <p>
        사용자 조사를 통해 그들의 니즈와 행동 패턴을 파악하고, 이를 반영하여
        설계합니다. 개발 과정에서 사용자 경험을 최적화하기 위해 꾸준히 피드백을
        수집하고 개선하는 작업을 중요하게 생각합니다
      </p>
      <h3>소통을 중요하게 생각합니다</h3>
      <p>
        프로젝트 진행 시 적극적으로 의견을 교환하고, 협업을 통해 더 나은 결과를
        만들어내는 것을 중요하게 여깁니다. 서로 다른 관점과 아이디어를 조화롭게
        통합하여 최상의 사용자 경험을 제공하는 제품을 만드는 것이 저의
        목표입니다
      </p>
    </section>
  );
};

export default About;
