import donhaengLogo from "../assets/donhaengLogo.png";
import donhaeng1 from "../assets/donhaeng1.jpg";
import donhaeng2 from "../assets/donhaeng2.jpg";
import donhaeng3 from "../assets/donhaeng3.jpg";

import pushoflifeLogo from "../assets/pushoflifeLogo.png";
import pushoflife1 from "../assets/pushoflife1.png";
import pushoflife2 from "../assets/pushoflife2.png";
import pushoflife3 from "../assets/pushoflife3.png";
import polCprCode from "../assets/polcprcode.png";

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
 * Trouble shooting 한 건.
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
  /** 히어로에 쓰이는 한 줄 소개 */
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
  troubleshooting?: Troubleshooting[];
  achievements?: string[];
  detail: ProjectDetailInfo;
}

/**
 * 프로젝트 단일 출처.
 * 배열 순서가 곧 홈 화면 노출 순서이자 "이전/다음 프로젝트" 순환 순서다.
 * 홈이 타임라인 레이아웃이라 최신순으로 둔다.
 */
export const projects: Project[] = [
  {
    slug: "donhaeng",
    name: "동행",
    subtitle: "취향 기반 AI 여행 코스 추천 서비스",
    cardDescription: "AI 여행 코스 추천 앱 · 웹",
    logo: donhaengLogo,
    heroImage: donhaeng1,
    heroAlt: "동행 홈 화면",
    period: "2026.07 - 진행 중",
    tags: ["#Flutter", "#Next.js", "#배포"],
    accent: "#2E7D5B",
    heroHeight: "60vh",
    background:
      "여행 계획은 정보 검색, 동선 구성, 시간 배분이 겹치는 부담스러운 작업인데 기존 앱은 정보를 나열할 뿐 코스를 대신 짜 주지 않습니다. 특히 5060 사용자는 여행 수요는 크지만 작은 글씨와 복잡한 다단계 플로우 앞에서 이탈합니다. 접근성이 곧 사용 여부를 결정하는 사용자층이라고 판단해, 코스 자동 생성과 시니어 기준 UI를 함께 설계했습니다. 앱을 설치하지 않은 사람에게도 코스가 전달돼야 서비스가 퍼질 수 있어 앱(생성·관리)과 웹(공유·유입)을 하나의 흐름으로 묶었습니다.",
    differentiators: [
      "취향만 고르면 AI가 일차별 코스를 통째로 만들어 줍니다",
      "본문 16pt·터치 영역 56dp·색 대비 4.5:1을 디자인 토큰에 고정한 시니어 기준 UI",
      "앱이 없어도 웹에서 코스를 보고, 설치하면 딥링크로 그대로 저장됩니다",
    ],
    features: [
      {
        heading: "취향 온보딩과 AI 코스 생성",
        image: donhaeng2,
        imageAlt: "취향 온보딩 카드 화면",
        imageSide: "left",
        items: [
          {
            title: "취향 온보딩",
            body: "테마·지역 카드를 넘기며 좋아요를 눌러 취향 프로필을 만듭니다. 처음 쓰는 사용자를 위해 튜토리얼 코치마크를 함께 제공합니다.",
          },
          {
            title: "AI 코스 생성",
            body: "저장된 취향을 반영해 일차별 코스를 생성합니다. SSE 스트리밍으로 진행 단계를 실시간으로 보여줘 긴 대기 시간에도 이탈하지 않도록 했습니다.",
          },
          {
            title: "코스 평가",
            body: "완료한 코스를 취향·경로·시간·다양성 네 축으로 평가하고 자유 코멘트를 남깁니다.",
          },
        ],
      },
      {
        heading: "지도 동선과 코스 공유",
        image: donhaeng3,
        imageAlt: "코스 지도 동선 화면",
        imageSide: "right",
        items: [
          {
            title: "지도 동선",
            body: "코스의 장소를 순서대로 이은 경로를 지도에 그리고 이동 수단·소요 시간·거리를 함께 보여줍니다.",
          },
          {
            title: "코스 공유와 딥링크 저장",
            body: "백엔드가 발급한 토큰 링크로 공유합니다. 앱이 없는 사람은 웹에서 열람하고, 설치 후에는 App Links로 앱이 열려 내 여행에 그대로 저장됩니다.",
          },
          {
            title: "웹 공유 페이지",
            body: "Next.js SSR로 렌더해 카카오톡·SNS 미리보기(OG)가 정상 표시됩니다. 약관·계정 삭제 안내 페이지도 같은 웹에서 서빙합니다.",
          },
        ],
      },
    ],
    troubleshooting: [
      {
        title: "백엔드 스키마 변경으로 회원가입이 전면 실패",
        desc: "배포된 백엔드와 앱의 요청 계약이 어긋나 가입 자체가 막힌 상황",
        problems: [
          "회원가입이 422로 실패 — 백엔드가 요청 스키마에서 필드를 삭제·추가했는데 앱이 반영하지 못함",
          "서버의 `extra=\"forbid\"` 설정 탓에 조용히 무시되는 대신 요청 전체가 거부됨",
        ],
        solutions: [
          "배포된 백엔드의 실제 계약을 코드로 확인해 필드를 맞춤 — 문서가 아니라 `origin/main` 실측",
          "요청 body의 키와 필수 필드를 계약 테스트로 고정",
          "자유 코멘트에 300자 제한을 클라이언트에 걸어 서버 422 자체를 발생시키지 않도록 변경",
        ],
        results: [
          "회원가입 정상화, 동의 항목을 법무 정본 순서·표기로 재배치",
          "이후 코스 평가 API가 배열 필드로 바뀌었을 때 테스트가 먼저 잡아냄",
          "스키마 변경이 장애가 아니라 테스트 실패로 먼저 드러나는 구조 확보",
        ],
      },
      {
        title: "공유 링크를 다시 누를 때마다 여행이 중복 생성",
        desc: "딥링크로 코스를 저장할 때 서버가 호출마다 새 여행을 만들던 문제",
        problems: [
          "사용자가 공유 링크를 두 번 누르면 같은 여행이 두 개 쌓임",
          "응답 파싱이 실제 스키마와 달라 존재하지 않는 필드에 의존하고 있었음",
        ],
        solutions: [
          "저장 요청에 멱등키 `X-Idempotency-Key: save-shared-{token}` 추가",
          "응답 파싱을 실제 스키마(`tripId`·`dayCount`·`savedCourseCount`)로 교정",
        ],
        results: [
          "서버가 키를 사용자 단위로 구분해, 몇 번을 눌러도 같은 여행 ID가 반환됨",
          "딥링크 반복 탭으로 인한 중복 여행 생성 제거",
        ],
      },
      {
        title: "카카오톡 공유 미리보기가 뜨지 않는 문제",
        desc: "코스 공유 링크의 OG 미리보기가 SNS에서 표시되지 않던 문제",
        problems: [
          "카카오톡 크롤러는 JS를 실행하지 않아 클라이언트 렌더링으로는 OG 태그를 읽지 못함",
          "분석 이벤트를 클라이언트가 백엔드로 직접 호출하면 CORS와 백엔드 주소 노출이 함께 발생",
        ],
        solutions: [
          "코스 페이지를 요청 시점 SSR로 렌더 — Firebase Hosting의 웹 프레임워크 인지 배포 사용",
          "분석 이벤트는 same-origin 라우트로 보내고 서버가 백엔드로 프록시",
        ],
        results: [
          "정적 자산은 CDN, 코스 SSR은 Cloud Run으로 자동 분리",
          "카카오톡·SNS에서 코스 제목과 이미지가 미리보기로 표시됨",
          "백엔드 주소가 브라우저에 노출되지 않음",
        ],
      },
    ],
    achievements: [
      "Android 내부 테스트 배포 완료 (릴리스 AAB 서명 빌드 검증) + 웹 Firebase Hosting 배포 구성",
      "앱·웹 프론트엔드 1인 전담으로 Phase 1 전체 기능 구현",
      "테스트 42건 통과, flutter analyze error·warning 0건 유지, 계약 테스트 도입",
      "`.gitignore`가 `test/`를 통째로 무시해 테스트 대부분이 버전 관리에서 빠져 있던 문제를 발견·복구",
      "카카오 REST 키를 클라이언트에서 제거(백엔드 프록시 이관), 로그인 실패 시 서버 에러 원문 노출 제거",
      "실기기(Galaxy Note9) 스모크 QA 수행 및 리포트 문서화",
    ],
    detail: {
      period: "2026.07 - 진행 중",
      platform: "App (Android, iOS), Web",
      team: "프론트엔드 1(본인), 백엔드 1 외",
      result: "Android 내부 테스트 배포 (v1.0.0+1)",
      roles: "앱·웹 프론트엔드 전담, 배포",
      environment: {
        language: "Dart, TypeScript",
        framework: "Flutter, Riverpod, Next.js 15, TailwindCSS",
        database: "Firebase (Firestore)",
        devops: "Firebase Hosting, Cloud Run, GitHub Actions",
        ai: "AI 코스 생성 연동 (SSE 스트리밍)",
      },
    },
  },

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
    tags: ["#Kotlin", "#WearOS", "#BLE"],
    accent: "#f14d70",
    heroHeight: "56vh",
    background:
      "많은 사람들이 CPR에 대해 들어보았거나 중요성에 대해 알고는 있지만 실제 환자가 발생했을때 어떻게 대처하는지 모르거나 심폐소생술을 제대로 시행하지 못해 망설이는 경우가 많아 환자가 쓰러졌을때 자동으로 신고하고 헬퍼에게는 워치를 통해 심폐소생술 가이드를 제공하는 서비스를 기획했습니다.",
    differentiators: [
      "워치 내 기본 센서를 이용해 정확한 피드백 제공",
      "워치의 심박수 데이터를 이용해 낙상 감지 후 심박수에 이상이 있다면 자동 신고",
      "사고 발생시 환자워치에서 워치를 끼고 있지 않는 헬퍼를 위한 TTS음성안내 및 메트로놈 제공",
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
            body: "Twilio api를 활용한 자동 문자 전송 서비스",
          },
          {
            title: "다양한 분기별 상황 고려",
            body: "워치에서 실제 상황인경우 헬퍼의 위치와 함께 119에 자동신고 기능 등 다양한 상황을 고려해 분기별 기능으로 나눔",
          },
        ],
      },
    ],
    troubleshooting: [
      {
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
      {
        title: "오작동이 곧 피해가 되는 자동 신고",
        desc: "낙상을 감지했을 때 언제 신고할 것인가를 정하는 문제",
        problems: [
          "감지 즉시 신고하면 오탐일 때 구급차가 헛출동함",
          "확신이 설 때까지 기다리면 골든타임을 놓침",
        ],
        solutions: [
          "감지 후 움직임이 있으면 종료하고, 없을 때만 신고하는 2단계 구조로 설계",
          "신호 신뢰도에 따라 대기 시간을 워치 3초 · 모바일 30초로 다르게 설정",
        ],
        results: [
          "오탐으로 인한 불필요한 신고를 줄이면서 실제 상황의 신고 지연은 최소화",
          "감지 즉시 알리는 방식에서, 확신의 정도에 따라 다르게 행동하는 설계로 전환",
        ],
      },
    ],
    achievements: [
      "프레임 드랍 약 50% 감소 — CPR 가이드 애니메이션 안정화",
      "모바일 ↔ 워치 BLE 양방향 통신 구현 — 환자 워치를 터치하면 구조자 워치에서 CPR 가이드 자동 실행",
      "Android 13(Tiramisu) 대응 — 알림 권한 정책 변경에 맞춰 FCM·포그라운드 서비스 재정비",
      "팀 6인 중 커밋 150개로 최다 기여, 모바일 앱과 워치 앱 양쪽 담당",
      "SSAFY 자율 프로젝트 전국대회 일등상",
    ],
    detail: {
      period: "2024.10 - 2024.11",
      platform: "App, Wear OS",
      team: "6인 (FrontEnd 2, BackEnd 4)",
      result: "자율 프로젝트 전국대회 일등상",
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
    tags: ["#ReactNative", "#AI", "#핀테크"],
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
    troubleshooting: [
      {
        title: "데이터 로딩 및 렌더링 개선",
        desc: "사용자의 식단 및 식비 데이터를 일간 레포트로 제공하는 기능 개발",
        problems: [
          "불필요한 API 요청으로 인한 네트워크 부하",
          "보고서 데이터가 많을수록 렌더링 속도 저하 — 열심히 쓰는 사용자일수록 화면이 느려지는 구조",
        ],
        solutions: [
          "요청 시점을 정리해 중복 API 호출 제거",
          "`useMemo`를 활용한 파생 연산 메모이제이션 → 렌더링 성능 개선",
          "결제 내역 조회 범위를 일주일 단위로 축소, 검색 결과를 20개 단위 페이지네이션으로 전환",
        ],
        results: [
          "데이터 초기화 및 로딩 상태 개선 → 사용자 경험(UX) 향상",
          "중복 API 요청 제거 → 네트워크 트래픽 감소",
          "렌더링 최적화보다 불필요한 데이터를 애초에 가져오지 않는 것이 먼저라는 판단",
        ],
        codeImage: alleatCode,
        codeImageAlt: "레포트 데이터 렌더링 최적화 코드",
      },
    ],
    achievements: [
      "중복 API 요청 제거 → 네트워크 트래픽 감소",
      "`useMemo` 적용 → 레포트 렌더링 성능 개선",
      "조회 범위 축소·페이지네이션 도입으로 초기 로딩 데이터량 감소",
      "프론트엔드 3인 중 회원·페이·식단 기록·식비·알림 전 영역 담당 (커밋 136개)",
    ],
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
    tags: ["#React", "#WebRTC", "#PWA"],
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
            body: "구매자는 직거래 예약, 선약이 있을 경우 줄서기를 할 수 있습니다.",
          },
          {
            title: "실시간 채팅",
            body: "WebRTC를 활용해 실시간으로 채팅하며 상품에 관련된 질문을 할 수 있습니다.",
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
    troubleshooting: [
      {
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
    ],
    achievements: [
      "일시적 네트워크 문제 발생 시 최대 3회 자동 재시도 → 안정적인 스트리밍 제공",
      "라이브 이탈 시 세션 자동 종료 처리 — 방치되던 좀비 세션 제거",
      "방송 중간 입장자의 상태 복원 구현 — 늦게 들어온 구매자도 현재 판매 상황을 그대로 확인",
      "40일 만에 라이브 스트리밍·자동 쇼츠·AI 요약·챗봇을 포함한 PWA 완주 (커밋 188개)",
    ],
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
    tags: ["#Vue", "#Django", "#풀스택"],
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
    troubleshooting: [
      {
        title: "AI가 존재하지 않는 영화를 추천하는 문제",
        desc: "ChatGPT가 매일 테마를 정해 영화 3편을 추천하는 기능 개발",
        problems: [
          "ChatGPT가 MEOVA DB에 없는 영화를 그럴듯하게 지어내 반환 — 추천은 자연스러운데 클릭하면 상세 페이지가 없음",
          "매일 자동으로 실행되는 기능이라 사람이 검수할 수 없음",
        ],
        solutions: [
          "DB의 전체 영화 목록을 `제목(ID)` 형태로 프롬프트에 포함하고 시스템 메시지로 응답 형식을 고정",
          "영화를 제목이 아닌 ID로 반환하게 해, DB 조회 시점에 없는 영화가 자연히 걸러지도록 설계",
        ],
        results: [
          "존재하지 않는 영화 추천이 사용자에게 노출되지 않음",
          "프롬프트로 설득하는 대신, 지어내도 시스템이 무사한 구조로 해결",
        ],
      },
    ],
    achievements: [
      "SSAFY 웹 프로젝트 최우수상 (1위)",
      "2인 팀으로 3주 만에 태그 검색·AI 추천·커뮤니티·반응형·다크 모드를 갖춘 풀스택 웹 완성",
      "LLM 응답을 신뢰하지 않는 구조 설계 — ID 기반 참조로 환각(hallucination) 결과를 시스템에서 차단",
      "백엔드부터 배포까지 전 구간 경험",
    ],
    detail: {
      period: "2024.05",
      platform: "Web",
      team: "2인 (Fullstack 2)",
      result: "웹 프로젝트 최우수상",
      roles: "BackEnd, FrontEnd, 서버 배포, UI/UX Design, 기획",
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
