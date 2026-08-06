import React from "react";
import "./About.css";
import ornamment from "../../assets/ornament.png";
const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <img src={ornamment} alt="" aria-hidden="true" className="ornament" />
      <h3>한 서비스의 앱, 웹, 배포를 혼자 감당해 봤습니다</h3>
      <p>
        여행 코스 추천 서비스 '동행'에서 Flutter 앱과 Next.js 웹을 1인 전담으로
        개발해 Android 내부 테스트 배포까지 진행했습니다. MEOVA에서는 Django
        백엔드와 Vue 프론트엔드를 함께 구현하고 서버 배포까지 담당했습니다.
        프론트와 백엔드 어느 쪽에 서든, 반대편이 무엇을 필요로 하는지 아는
        상태로 일합니다
      </p>
      <h3>계약은 합의하는 것이 아니라 실측하는 것이라고 믿습니다</h3>
      <p>
        동행에서 백엔드가 요청 스키마를 바꿨을 때 앱이 따라가지 못해 회원가입이
        통째로 막힌 적이 있습니다. 문서와 합의가 아니라 배포된 코드에서 계약을
        확인하는 습관을 이때 만들었고, 요청 스키마를 계약 테스트로 고정해 이후의
        변경은 테스트가 먼저 잡아내도록 했습니다
      </p>
      <h3>동작하는 화면과 정직한 화면을 구분합니다</h3>
      <p>
        동행에는 AI 코스 생성이 실패하면 미리 만들어 둔 더미 일정을 보여주는
        폴백이 있었습니다. 화면은 문제없어 보였지만, 사용자는 AI가 짜 준 코스라
        믿고 그 일정대로 여행을 떠나게 됩니다. 폴백을 걷어내고 빈 상태·에러
        화면으로 교체했습니다. 실패를 감추기보다 다시 시도할 기회를 주는 편이
        낫다고 판단했기 때문입니다
      </p>
    </section>
  );
};

export default About;
