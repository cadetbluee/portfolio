import alleatLogo from "../assets/alleatLogo.png";
import alleat1 from "../assets/alleat1.png";
import alleat2 from "../assets/alleat2.png";
import alleat3 from "../assets/alleat3.png";
import alleatCode from "../assets/alleatcode.png";

import fleaonLogo from "../assets/fleaonLogo.png";
import fleaon1 from "../assets/fleaon1.png";
import fleaon2 from "../assets/fleaon2.png";
import fleaon3 from "../assets/fleaon3.png";
import fleaonCode from "../assets/fleaoncode.png";

import meovaLogo from "../assets/meovaLogo.png";
import meova1 from "../assets/meova1.png";
import meova2 from "../assets/meova2.png";
import meova3 from "../assets/meova3.png";

import pushoflifeLogo from "../assets/pushoflifeLogo.png";
import pushoflife1 from "../assets/pushoflife1.png";
import pushoflife2 from "../assets/pushoflife2.png";
import pushoflife3 from "../assets/pushoflife3.png";
import polCprCode from "../assets/polcprcode.png";

/** 기능 블록 안의 개별 항목 */
export interface FeatureItem {
  title: string;
  body: string;
}

/** Features 섹션의 한 덩어리 (제목 + 이미지 + 항목들) */
export interface FeatureBlock {
  heading: string;
  image: string;
  imageAlt: string;
  /** 이미지를 텍스트의 왼쪽에 둘지 오른쪽에 둘지 */
  imageSide: "left" | "right";
  items: FeatureItem[];
}

/**
 * Trouble shooting 섹션.
 * solutions·results 의 백틱(`)으로 감싼 부분은 <code> 로 렌더된다.
 */
export interface Troubleshooting {
  title: string;
  desc: string;
  problems: string[];
  solutions: string[];
  results: string[];
  codeImage?: string;
  codeImageAlt?: string;
}

/** ProjectDetail 표에 들어가는 메타 정보 */
export interface ProjectDetailInfo {
  period: string;
  platform: string;
  team: string;
  result?: string;
  roles: string;
  environment: {
    language: string;
    framework: string;
    database: string;
    devops: string;
    ai?: string;
  };
}

export interface Project {
  slug: string;
  name: string;
  /** 히어로와 상세 표에 함께 쓰이는 한 줄 소개 */
  subtitle: string;
  /** 홈 카드에서만 쓰는 짧은 소개 */
  cardDescription: string;
  logo: string;
  heroImage: string;
  heroAlt: string;
  repoUrl?: string;
  /** 홈 카드의 기간 표기 및 상세 표의 개발 기간 — 단일 출처 */
  period: string;
  tags: string[];
  /** 프로젝트 대표색. 제목·소제목·이전/다음 버튼 hover 에 쓰인다. */
  accent: string;
  /** 히어로 이미지 높이 (프로젝트마다 이미지 비율이 달라 개별 지정) */
  heroHeight: string;
  background: string;
  differentiators: string[];
  features: FeatureBlock[];
  troubleshooting?: Troubleshooting;
  detail: ProjectDetailInfo;
}

/**
 * 프로젝트 단일 출처.
 * 배열 순서가 곧 홈 화면 노출 순서이자 "이전/다음 프로젝트" 순환 순서다.
 */
export const projects: Project[] = [
  {
    slug: "pushoflife",
    name: "PushOfLife",
    subtitle: "응급 구조 지원 및 CPR 가이드 서비스",
    cardDescription: "응급구조 지원 및 CPR 가이드",
    logo: pushoflifeLogo,
    heroImage: pushoflife1,
    heroAlt: "PushOfLife 메인 화면",
    repoUrl: "https://github.com/cadetbluee/project-pushoflife",
    period: "2024.10 - 2024.11",
    tags: ["#FE", "#디자인", "#기획"],
    accent: "#f14d70",
    heroHeight: "56vh",
    background:
      "많은 사람들이 CPR에 대해 들어보았거나 중요성에 대해 알고는 있지만 실제 환자가 발생했을때 어떻게 대처하는지 모르거나 심폐소생술을 제대로 시행하지 못해 망설이는 경우가 많아 환자가 쓰러졌을때 자동으로 신고하고 헬퍼에게는 워치를 통해 심폐소생술 가이드를 제공하는 서비스를 기획했습니다.",
    differentiators: [
      "워치 내 기본 센서를 이용해 정확한 피드백 제공",
      "워치의 심박수 데이터를 이용해 낙상 감지 후 심박수에 이상이 있다면 자동 신고",
      "사고 발생시 환자워치에서 워치를 끼고 있지 않는 헬퍼를 위한 TTS음성안내 및 메트로늄 제공",
    ],
    features: [
      {
        heading: "심폐소생술 가이드 화면",
        image: pushoflife2,
        imageAlt: "심폐소생술 가이드 화면",
        imageSide: "left",
        items: [
          {
            title: "CPR가이드 진입점",
            body: "각각 3가지 진입점: 연습, 실전(119신고), 환자워치에 따라 다른 로직을 적용해 구성",
          },
          {
            title: "CPR 가이드",
            body: "심폐소생술에 중요한 각도 깊이 빈도 피드백을 워치화면의 색과 TTS음성, 진동으로 전달",
          },
          {
            title: "CPR 그래프",
            body: "워치의 자이로센서를 화면에 송출해 직관적인 피드백 전달",
          },
        ],
      },
      {
        heading: "구조 문자 전송 기능",
        image: pushoflife3,
        imageAlt: "구조 문자 전송 화면",
        imageSide: "right",
        items: [
          {
            title: "빠른 구조를 위한 개인화 서비스",
            body: "응급상황일때 119에게 전송되는 문자내용을 환자가 직접 입력 가능, 기저질환환자를 고려",
          },
          {
            title: "외부 api를 활용한 자동 신고",
            body: "twillo api를 활용한 자동 문자 전송 서비스",
          },
          {
            title: "다양한 분기별 상황 고려",
            body: "워치에서 실제 상황인경우 헬퍼의 위치와 함께 119에 자동신고 기능 등 다양한 상황을 고려해 분기별 기능으로 나눔",
          },
        ],
      },
    ],
    troubleshooting: {
      title: "CPR 가이드 애니메이션 최적화",
      desc: "사용자의 가속도 데이터를 기반으로 실시간 CPR(심폐소생술) 피드백을 제공하는 기능 개발",
      problems: [
        "실시간 가속도 데이터로 인해 UI 성능 저하",
        "그래프와 배경 애니메이션이 원활하지 않음",
      ],
      solutions: [
        "`remember`를 사용하여 가속도 데이터를 캐싱하고 불필요한 UI 갱신 방지",
        "`maxData`를 활용해 그래프의 크기를 일정하게 유지하여 부드럽게 표시되도록 개선",
      ],
      results: [
        "프레임 드랍 50% 감소 → CPR 가이드 애니메이션이 부드럽게 실행됨",
        "불필요한 UI 재구성을 최소화하여 실시간 데이터 처리 성능 개선",
        "사용자에게 CPR 속도를 직관적으로 인식할 수 있도록 시각적 피드백 강화",
      ],
      codeImage: polCprCode,
      codeImageAlt: "CPR 가이드 렌더링 최적화 코드",
    },
    detail: {
      period: "2024.10 - 2024.11",
      platform: "App, Wear OS",
      team: "6인 (FrontEnd 2, BackEnd 4)",
      result: "자율 프로젝트 결선 1위",
      roles: "FrontEnd, UI/UX Design, 기획",
      environment: {
        language: "Kotlin, Java",
        framework: "Android SDK, WearOS SDK, Jetpack Compose",
        database: "MySQL, Redis, MongoDB",
        devops: "Jenkins, Docker, Nginx, AWS EC2",
      },
    },
  },

  {
    slug: "alleat",
    name: "AllEat",
    subtitle: "식단 및 식비 자동 관리 서비스",
    cardDescription: "식단/식비 자동 관리 서비스",
    logo: alleatLogo,
    heroImage: alleat1,
    heroAlt: "AllEat 메인 화면",
    repoUrl: "https://github.com/cadetbluee/project-alleat",
    period: "2024.08 - 2024.10",
    tags: ["#FE", "#디자인", "#기획"],
    accent: "#326bff",
    heroHeight: "60vh",
    background:
      "핀테크 프로젝트로 기획된 AllEat은 기존의 식단어플과 차별점을 자동화로 두어 올잇에서 제공하는 올잇페이로 결제를 하면 자동으로 식단을 기록해주는 식단식비 자동화 서비스를 목표로 기획되었습니다.",
    differentiators: [
      "페이머니 기반 자동화된 식단기록",
      "사진인식으로 칼로리 자동 계산",
      "지출 통계 시각화 및 사용자 맞춤 식단 리포트 제공",
    ],
    features: [
      {
        heading: "식단 기록",
        image: alleat2,
        imageAlt: "식단 기록 화면",
        imageSide: "left",
        items: [
          {
            title: "결제한 식당 메뉴 노출",
            body: "해당 날짜에 올잇페이로 결제한 곳의 메뉴를 결제 금액을 기반으로 불러와 식단관리를 더 쉽게 만듭니다.",
          },
          {
            title: "한번에 기록",
            body: "토글을 이용해 여러번의 식단을 한번에 기록할 수 있습니다.",
          },
          {
            title: "식비 기록",
            body: "식비도 함께 기록해 지출된 페이머니와 따로 관리할 수 있습니다.",
          },
        ],
      },
      {
        heading: "식단 등록",
        image: alleat3,
        imageAlt: "식단 등록 및 영양정보 화면",
        imageSide: "right",
        items: [
          {
            title: "사진인식 기반 식단 등록",
            body: "음식 사진을 AI모델을 이용해 학습시켜 사진으로 칼로리를 자동인식해 등록할 수 있습니다.",
          },
          {
            title: "가게와의 연동",
            body: "유저들이 해당 가게에서 먹은 메뉴를 등록할 수 있게 해 이용자가 많아질 수록 유저들의 식단관리가 쉬워질 수 있도록 설계했습니다.",
          },
          {
            title: "영양정보 그래프",
            body: "각 메뉴의 영양정보를 보기 편하도록 그래프로 시각화했습니다.",
          },
        ],
      },
    ],
    troubleshooting: {
      title: "데이터 로딩 및 렌더링 개선",
      desc: "사용자의 식단 및 식비 데이터를 일간 레포트로 제공하는 기능 개발",
      problems: [
        "불필요한 API 요청으로 인한 네트워크 부하",
        "보고서 데이터가 많을수록 렌더링 속도 저하",
      ],
      solutions: ["`useMemo`를 활용한 연산 최적화 → 렌더링 성능 개선"],
      results: [
        "데이터 초기화 및 로딩 상태 개선 → 사용자 경험(UX) 향상",
        "중복 API 요청 제거 → 네트워크 트래픽 감소",
      ],
      codeImage: alleatCode,
      codeImageAlt: "레포트 데이터 렌더링 최적화 코드",
    },
    detail: {
      period: "2024.08 - 2024.10",
      platform: "App",
      team: "6인 (FrontEnd 3, BackEnd 3)",
      roles: "FrontEnd, UI/UX Design, 기획",
      environment: {
        language: "TypeScript, Java, HTML/CSS",
        framework: "ReactNative, SpringBoot, Node.js",
        database: "MySQL, Firebase",
        devops: "Jenkins, Docker, Nginx, AWS EC2",
        ai: "YOLOv10, GPU",
      },
    },
  },

  {
    slug: "fleaon",
    name: "Flea:ON",
    subtitle: "라이브 기반 중고거래 플랫폼",
    cardDescription: "라이브 기반 중고거래 플랫폼",
    logo: fleaonLogo,
    heroImage: fleaon1,
    heroAlt: "Flea:ON 메인 화면",
    repoUrl: "https://github.com/cadetbluee/project-fleaon",
    period: "2024.07 - 2024.08",
    tags: ["#FE", "#디자인", "#기획"],
    accent: "#ff5757",
    heroHeight: "72vh",
    background:
      "이사를 갈 때 등 한번에 대량의 중고상품을 거래하고 싶을때 마땅한 서비스가 부족하다는 점에서 아이디어를 얻어 온라인 커머스처럼 개개인이 라이브로 다량의 중고물품을 거래할 수 있는 플랫폼을 기획했습니다.",
    differentiators: [
      "라이브 예고로 미리 근처 유저들에게 홍보가 가능합니다",
      "간단한 상품등록 후 라이브를 진행하면 이후 자동으로 쇼츠로 제작되어 상품홍보를 합니다",
      "마이페이지의 캘린더를 이용해 거래일정을 관리할 수 있습니다",
    ],
    features: [
      {
        heading: "라이브 방송",
        image: fleaon2,
        imageAlt: "라이브 방송 화면",
        imageSide: "left",
        items: [
          {
            title: "한번에 많은 상품 판매",
            body: "버튼이 마치 녹화, 녹화종료 버튼처럼 작동해 내가 팔고싶은 상품을 한번의 라이브에 모두 소개할 수 있습니다",
          },
          {
            title: "예약, 줄서기 기능",
            body: "구매자는 직거래 예약, 선약이 있을 걍우 줄서기를 할 수 있습니다.",
          },
          {
            title: "실시간 채팅",
            body: "webRTC를 활용해 실시간으로 채팅하며 상품에 관련된 질문을 할 수 있습니다.",
          },
        ],
      },
      {
        heading: "중고거래의 전과정",
        image: fleaon3,
        imageAlt: "쇼츠 및 거래 화면",
        imageSide: "right",
        items: [
          {
            title: "판매 예정인 라이브 소개",
            body: "메인페이지나 검색결과 페이지 상단에 지역내 판매 예정인 방송들을 확인할 수 있습니다.",
          },
          {
            title: "판매 중인 방송 소개",
            body: "페이지 중간에는 현재 판매중인 상품이 썸네일이 대표사진으로 떠 구매자들의 참여를 유도했습니다.",
          },
          {
            title: "쇼츠",
            body: "라이브 중 팔리지 않은 상품들은 녹화된 영상이 쇼츠가 되어 AI요약, 채팅과 함께 보여집니다.",
          },
        ],
      },
    ],
    troubleshooting: {
      title: "실시간 스트리밍 최적화",
      desc: "일부 환경에서 라이브 스트리밍이 정상적으로 구독되지 않는 문제",
      problems: [
        "일부 사용자 환경에서 라이브 스트리밍이 정상적으로 표시되지 않음",
        "네트워크 지연으로 인한 구독 실패",
      ],
      solutions: ["스트림 구독 재시도 로직 추가 → 네트워크 지연 대응"],
      results: [
        "일시적인 네트워크 문제 발생 시, 최대 3번까지 자동 재시도하여 안정적인 스트리밍 제공",
        "네트워크 불안정으로 인한 초기 스트리밍 실패율 감소",
      ],
      codeImage: fleaonCode,
      codeImageAlt: "스트림 구독 재시도 로직 코드",
    },
    detail: {
      period: "2024.07 - 2024.08",
      platform: "PWA",
      team: "6인 (FrontEnd 3, BackEnd 3)",
      roles: "FrontEnd, UI/UX Design, 기획",
      environment: {
        language: "JavaScript, Java, HTML/CSS",
        framework: "React, SpringBoot, Node.js",
        database: "MySQL",
        devops: "Jenkins, Docker, Nginx, AWS EC2",
      },
    },
  },

  {
    slug: "meova",
    name: "MEOVA",
    subtitle: "SNS 기반 영화 플랫폼",
    cardDescription: "커뮤니티 기반 영화 플랫폼",
    logo: meovaLogo,
    heroImage: meova1,
    heroAlt: "MEOVA 메인 화면",
    repoUrl: "https://github.com/cadetbluee/project-meova",
    period: "2024.05",
    tags: ["#BE", "#FE", "#디자인"],
    accent: "#000000",
    heroHeight: "50vh",
    background:
      "함께 영화를 볼 때 ‘무슨 영화를 볼지’ 결정하는 데 어려움을 겪는 경우가 많고, 추천받은 영화가 상황에 적합하지 않아 불편함을 겪는 일도 있습니다. 정보가 넘쳐나는 시대에, 상황과 관계에 맞는 영화를 빠르고 간편하게 찾을 수 있는 서비스가 필요하다고 판단했습니다. 그 결과 태그 기반 검색과 직관적인 메인 화면 구성을 통해 검색 시간을 줄이고 접근성을 높이는 방식을 기획하게 되었습니다",
    differentiators: [
      "관람 상황에 맞는 태그 기반 검색 제공으로 사용자의 맥락에 최적화된 추천이 가능합니다",
      "선정성, 폭력성 등 감정적으로 불쾌할 수 있는 요소를 태그화하고 해당 태그에 짧은 코멘트를 달아, 사용자가 영화를 선택하기 전에 사전 정보를 쉽게 파악할 수 있습니다",
      "매일 독창적인 테마의 영화 3편을 추천합니다",
    ],
    features: [
      {
        heading: "영화 상세 페이지",
        image: meova2,
        imageAlt: "영화 상세 페이지",
        imageSide: "left",
        items: [
          {
            title: "태그 코멘트",
            body: "시청자들은 영화의 태그에 코멘트를 달아 다른 시청자들이 시청하기 전 도움을 줄 수 있습니다.",
          },
          {
            title: "영화 상세 정보",
            body: "영화 줄거리, 감독, 배우, 유저들의 후기를 볼 수 있습니다.",
          },
          {
            title: "감독, 배우 상세 정보",
            body: "배우나 감독의 출연작을 확인할 수 있습니다.",
          },
        ],
      },
      {
        heading: "마이페이지",
        image: meova3,
        imageAlt: "마이페이지 화면",
        imageSide: "right",
        items: [
          {
            title: "팔로우 목록",
            body: "마이페이지에서 팔로우중인 유저나 나를 팔로우하는 유저목록을 확인할 수 있습니다.",
          },
          {
            title: "시청한 영화 캘린더",
            body: "후기를 남긴 날짜에 해당 영화의 포스터가 나타나고 클릭시 작성한 후기로 넘어갑니다.",
          },
          {
            title: "좋아요 누른 영화, 배우 목록",
            body: "좋아한 영화나 배우들 목록을 확인할 수 있습니다.",
          },
        ],
      },
    ],
    // TODO: GPT 환각 차단(ID 기반 참조) 내용으로 troubleshooting 추가 예정
    //       — docs/projects/meova.md 참고
    detail: {
      period: "2024.05",
      platform: "Web",
      team: "2인 (Fullstack 2)",
      result: "관통 프로젝트 최우수상 수상",
      roles: "BackEnd, FrontEnd, UI/UX Design, 기획",
      environment: {
        language: "TypeScript, Python, HTML/CSS",
        framework: "Vue, Django",
        database: "MySQL",
        devops: "Figma, Gitlab, Notion",
      },
    },
  },
];

/** slug 로 프로젝트 하나를 찾는다. 없으면 undefined. */
export const getProject = (slug?: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

/**
 * 배열 순서를 따라 순환하는 이전/다음 프로젝트를 돌려준다.
 * 마지막 다음은 처음, 처음 이전은 마지막.
 */
export const getAdjacentProjects = (
  slug: string
): { prev: Project; next: Project } | undefined => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;

  const { length } = projects;
  return {
    prev: projects[(index - 1 + length) % length],
    next: projects[(index + 1) % length],
  };
};
