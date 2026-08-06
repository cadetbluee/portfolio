# 프로젝트 문서

포트폴리오에 실을 프로젝트 내용을 먼저 문서로 정리한 것입니다. UI는 이 내용이 확정된 뒤에 붙입니다.

## 목록 (최신순)

| 프로젝트 | 한 줄 | 기간 | 역할 | 비고 |
|---|---|---|---|---|
| [동행 (Donhaeng)](donhaeng.md) | 취향 기반 AI 여행 코스 추천 앱 (5060 특화) | 2026.07~ | 앱·웹 FE 전담 | Android 내부 테스트 배포 |
| [PushOfLife](pushoflife.md) | 응급 상황 자동 감지 + CPR 실시간 피드백 | 2024.10~11 | FE/Mobile, 디자인, 기획 | 🏆 자율 프로젝트 전국대회 일등상 |
| [AllEat](alleat.md) | 결제 내역·AI 사진 인식 기반 식단/식비 자동 관리 | 2024.08~10 | FE, 디자인, 기획 | |
| [Flea:ON](fleaon.md) | 라이브 커머스 기반 중고 거래 플랫폼 | 2024.07~08 | FE, 디자인, 기획 | |
| [MEOVA](meova.md) | 태그 기반 SNS 영화 추천 플랫폼 | 2024.05 | Full-stack, 디자인, 기획 | 🏆 웹 프로젝트 최우수상 |

## 문서 구조

각 문서는 아래 순서를 따릅니다.

```
한 줄 소개 → 문제 정의 → 내 역할 → 기술 스택 → 핵심 기능
→ 기술적 도전 → 해결 과정 → 성과 → 회고
```

## 작성 상태

| 프로젝트 | 문제/기능 | 기술적 도전·해결 | 성과 | 회고 |
|---|---|---|---|---|
| 동행 | ✅ | ✅ 10건 | ✅ | 🟡 초안 6건 |
| PushOfLife | ✅ | ✅ | ✅ 프레임 드랍 50%↓ | 🟡 초안 5건 |
| AllEat | ✅ | ✅ | 🟡 정성 지표만 | 🟡 초안 4건 |
| Flea:ON | ✅ | ✅ | 🟡 정성 지표만 | 🟡 초안 4건 |
| MEOVA | ✅ | 🟡 1건 확인 + 후보 3건 | ✅ 수상 | 🟡 초안 3건 |

- ✅ 자료로 확인된 사실
- 🟡 커밋 이력 기반 **초안** — 사실 관계는 커밋에 근거하나 판단·감정은 본인이 다듬어야 함
- ⚠️ 자료에 없어 직접 채워야 하는 부분 (문서 안에 `⚠️`로 표시)

> **원칙: 확인된 사실과 추정을 섞지 않는다.** 기억이 나지 않아 추정으로 채운 부분은 문서 안에 "부록"으로 분리하고, 근거·시나리오·**면접에서 방어 가능한 표현의 한계**를 함께 적어 뒀습니다 (예: [PushOfLife의 힙 덤프 부록](pushoflife.md#부록-힙-덤프-파일에-대한-추정)). 포트폴리오 본문에는 추정을 사실처럼 쓰지 마세요 — 면접에서 한 번만 파고들어도 무너집니다.

## 출처

- GitHub README (`cadetbluee/project-*`, `donhaeng-official/*`)
- **커밋 이력** — 특히 아래 두 레포에 실제 개발 커밋이 남아 있음. 공개 레포(`project-alleat`, `project-pushoflife`)는 스쿼시된 미러라 커밋이 1~2개뿐이다.
  - `cadetbluee/project-alleat-private` — 본인 커밋 136개
  - `cadetbluee/project-pushoflife-private` — 본인 커밋 150개 (**팀 내 최다**)
  - `cadetbluee/project-fleaon` — 본인 커밋 188개
  - `cadetbluee/project-meova` — 본인 커밋 41개
  - `donhaeng-official/donhaeng-app` 69개 · `donhaeng-web` 14개 (둘 다 최다 기여자)
- 기존 포트폴리오 사이트 (`portfolio/src/pages/*.tsx`, `sections/*`)

> SSAFY 프로젝트 커밋은 메시지 끝에 `(윤채영)`이 붙어 있어 본인 작업 식별이 가능하다.

## 제출용 PDF

이 문서들에서 발췌·재배열해 만드는 회사별 제출본은 [../resume/](../resume/)에 있습니다. 원본은 여기, 발췌본은 거기 — **사실 관계는 항상 이쪽에서 가져옵니다.**

## 사이트 진단

프로젝트 문서와 별개로, 포트폴리오 **사이트 자체**의 문제점은 [portfolio-review.md](../portfolio-review.md)에 정리했습니다 (P0 4건 · P1 5건 · P2 5건 + 권장 작업 순서).

## 다음 할 일

1. 🟡 초안 회고를 본인 언어로 다듬기 — 각 문서에 "몇 번을 중심에 두면 좋을지" 권장을 적어 뒀습니다
2. `⚠️` 표시 채우기 — **MEOVA 기술적 도전 2~4번**, 각 프로젝트의 정량 지표
3. 내용 확정 후 포트폴리오 사이트 반영
   - 기존 사이트에 **동행이 아직 없음** — 최신이자 유일한 실배포 프로젝트라 추가 필요
   - 각 프로젝트의 **내 역할**이 사이트에는 한 줄(`FrontEnd, UI/UX Design, 기획`)로만 있는데, 문서의 상세 역할 목록으로 교체하면 기여도가 훨씬 잘 드러납니다
   - ~~`FleaOnPage.tsx`·`MeovaPage.tsx`의 `ProjectDetail` `title`/`subtitle`이 `"AllEat"`~~ → 2026-08-05 수정 완료
   - ~~`MeovaPage.tsx` 팀 정보 `"2인 (Fullstack 3)"` 오타~~ → `2인 (Fullstack 2)`로 수정 완료

## 남은 사이트 버그 (미수정)

- `MeovaPage.tsx:20` — 로고 `alt="fleaonLogo"` (MEOVA 로고인데 Flea:ON으로 표기)
- `FleaOnPage.tsx`·`MeovaPage.tsx` — 세 번째 스크린샷 `alt="식비 통계"` (AllEat에서 복붙)
- `FleaOnPage.tsx`·`AllEatPage.tsx` — 코드 이미지 `alt="ocr optimization code"` (OCR과 무관)
- `MeovaPage.tsx` `period="2024.05 - 2024.05"` vs `Projects.tsx` `"2024.05 - 2024.06"` — 두 곳이 불일치. README 간트차트 기준으로는 5/5~5/23이라 `2024.05 - 2024.05`가 맞음
