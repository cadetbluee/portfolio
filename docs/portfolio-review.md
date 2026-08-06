# 포트폴리오 사이트 진단

> 대상: `portfolio/` (React 19 + CRA + react-router-dom 7)
> 작성: 2026-08-05 · 실제 코드와 GitHub 이력을 대조해 확인한 것만 적었습니다.

프론트엔드 포트폴리오는 **읽히는 콘텐츠**이면서 동시에 **평가받는 코드**입니다. 아래를 그 두 축으로 나눠 정리했습니다. 우선순위는 "고쳤을 때 합격 확률이 얼마나 오르는가" 기준입니다.

---

## 🔴 P0 — 지금 가장 손해 보고 있는 것

> **2026-08-06 기준 1~4번 모두 반영 완료.** 사이트 콘텐츠를 `docs/resume/02-fullstack.md`(풀스택 프리셋) 기준으로 맞췄습니다.

### 1. 동행이 없습니다 — ✅ 해결됨

사이트의 마지막 프로젝트가 **2024년 11월**에서 끝납니다. 오늘이 2026년 8월이니, 사이트만 보면 **1년 9개월 공백**으로 읽힙니다.

그런데 실제로는 그 사이에 동행이 있습니다. 그것도 지금 포트폴리오에서 가장 강한 카드입니다.

| | 기존 4개 프로젝트 | 동행 |
|---|---|---|
| 성격 | 교육과정 팀 프로젝트 | 실제 서비스 |
| 배포 | 없음 | **Android 내부 테스트 배포** |
| 역할 | 팀 내 FE 1/2~1/3 | **앱·웹 프론트엔드 전담** |
| 스택 | 2024년 기준 | **Flutter · Next.js 15 · Riverpod** |
| 기술 깊이 | 화면 구현 중심 | 계약 테스트, 멱등키, 딥링크, 프록시 보안, 접근성 기준 |

**"SSAFY 수료생 포트폴리오"와 "실제 서비스를 배포해 본 개발자 포트폴리오"의 차이**가 여기서 갈립니다. 이거 하나 추가하는 게 나머지 전부보다 효과가 큽니다.

### 2. Skills 섹션이 실제 역량보다 좁습니다 — ✅ 해결됨

`src/sections/Skills/Skills.tsx:800-818` 현재 내용:

```
FrontEnd  Vue, React, React Native, Kotlin
BackEnd   Django
DB        mySQL, SQLite
ETC       Git, Firebase, WebSocket, Jira
```

**빠진 것들** (전부 실제로 쓴 것입니다):

- **Flutter / Dart** — 현재 주력인데 없습니다. 동행 앱 전체가 Flutter입니다.
- **TypeScript** — AllEat·동행 웹·이 포트폴리오까지 TS인데 없습니다.
- **Next.js** — 동행 웹 (App Router, SSR)
- **Riverpod / Redux-Toolkit** — 상태관리 경험이 통째로 안 보입니다
- **Docker · Jenkins · AWS EC2 · Firebase Hosting** — 프로젝트 상세엔 있는데 Skills엔 없습니다
- **Figma** — 디자인을 직접 했다면서 도구가 없습니다

**반대로 근거가 없는 것**: `SQLite`가 어느 프로젝트에서 나온 건지 5개 프로젝트 어디에도 없습니다. 확인해 보시고 없으면 빼는 게 낫습니다 — 면접에서 물어보면 곤란해집니다.

> 스킬 목록은 **검색 필터**입니다. 채용 담당자가 "Flutter"로 훑을 때 여기 없으면 그냥 지나갑니다.

### 3. About Me에 개발자가 없습니다 — ✅ 해결됨

`src/sections/About/About.tsx` 세 문단의 제목입니다.

> 직관적이고 이해하기 쉬운 디자인을 추구합니다
> 사용자 중심의 사고를 지향합니다
> 소통을 중요하게 생각합니다

세 개 다 **태도(attitude)** 이야기이고, 셋 다 어느 직군 누구에게나 붙습니다. 기획자·디자이너·PM 이력서에 그대로 옮겨도 위화감이 없습니다.

문제는 이게 사실이 아니어서가 아니라, **읽는 사람이 "그래서 이 사람은 무엇을 만들 수 있는가"를 알 수 없다**는 점입니다. 지금 사이트에서 기술적 정체성을 드러내는 문장은 사실상 없습니다.

**고칠 방향** — 태도를 빼라는 게 아니라, 태도에 **증거를 붙이면** 됩니다.

| 지금 | 바꾼다면 (동행·AllEat 사례 기반) |
|---|---|
| "사용자 중심의 사고를 지향합니다" | "실패를 성공처럼 보여주지 않습니다. 동행에서 코스 생성이 실패했을 때 더미 일정으로 채우던 폴백을 걷어내고 빈 상태 UI로 교체했습니다." |
| "직관적이고 이해하기 쉬운 디자인" | "5060 사용자를 위해 본문 16pt·터치 영역 56dp·대비 4.5:1을 디자인 토큰에 고정해, 화면이 늘어나도 기준이 흔들리지 않게 했습니다." |
| "소통을 중요하게 생각합니다" | "백엔드 계약을 문서가 아니라 배포된 코드에서 실측하고, 요청 스키마를 계약 테스트로 고정했습니다." |

같은 가치관인데 **검증 가능한 형태**가 됩니다.

### 4. Contact에 GitHub 링크가 없습니다 — ✅ 해결됨

`src/sections/Contact/Contact.tsx` — 이메일 링크 하나가 전부입니다.

개발자 포트폴리오에서 GitHub 링크가 없는 건 꽤 큰 손실입니다. 특히 **커밋 이력이 이 정도로 남아 있는 분이라면** 더 그렇습니다. 블로그(`E:\Work\blog`)도 있는데 링크가 없습니다.

- GitHub: `https://github.com/cadetbluee`
- 블로그
- 이력서 PDF (있다면)

---

## 🟡 P1 — 코드가 평가받을 때 걸리는 것

> 프론트엔드 지원자의 포트폴리오는 **레포도 같이 열어봅니다.** 아래는 그때 눈에 띄는 것들입니다.

### 5. SPA인데 페이지 이동에서 전체 새로고침이 일어납니다 — ✅ 해결됨 (1번 리팩터링)

"이전/다음 프로젝트" 버튼 **8곳 전부**가 `window.location.href`를 씁니다.

```
pages/AllEatPage.tsx:138, 147
pages/FleaOnPage.tsx:153, 162
pages/MeovaPage.tsx:152, 161
pages/PushOfLifePage.tsx:160, 169
```

`react-router-dom`을 설치해서 쓰고 있고, `Projects.tsx`에서는 `<Link>`를 제대로 쓰고 있는데, 유독 이 8곳만 브라우저 네이티브 이동입니다. 결과적으로:

- **React 앱 전체가 언마운트되고 다시 부팅됩니다** — SPA를 쓰는 이유가 사라집니다
- 바로 위 줄의 `window.scrollTo({ behavior: "smooth" })`가 **무의미합니다.** 어차피 새 문서가 로드되면서 스크롤이 초기화되니까요
- 이 경우를 위해 만들어 둔 `components/ScrollToTop.tsx`도 이 경로에선 동작하지 않습니다

```tsx
// 현재
onClick={() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.location.href = "/project/fleaon";
}}

// 이렇게
const navigate = useNavigate();
onClick={() => navigate("/project/fleaon")}   // ScrollToTop이 알아서 처리
```

**면접에서 "SPA 라우팅과 일반 링크의 차이를 아시나요"를 물었을 때, 코드가 먼저 대답해 버립니다.** P1 중에서는 이걸 가장 먼저 고치시길 권합니다.

### 6. Header의 네비게이션이 타이밍에 의존합니다

`layouts/Header/Header.tsx:11-20`

```tsx
navigate("/", { replace: false });
setTimeout(() => {
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
}, 100);
```

`100ms`는 **"렌더가 이 정도면 끝나겠지"라는 추측**입니다. 느린 기기나 이미지가 많은 상태에서는 아직 해당 섹션이 없어서 스크롤이 실패합니다.

추가로 같은 파일에서:

- `:27` 로고가 `<a href="/">` — 홈으로 갈 때도 전체 새로고침
- `:36, 39, 42` `<li onClick>` 안에 `<a href="/#home">` — **onClick과 a 태그 기본 동작이 둘 다 실행됩니다.** 스크롤하다가 페이지가 이동합니다
- `<li>`가 `<ul>` 없이 `<nav>` 직속 — 유효하지 않은 HTML이고 스크린리더가 목록으로 인식하지 못합니다

### 7. 프로젝트 페이지 4개가 완전한 복사·붙여넣기입니다 — ✅ 해결됨

`AllEatPage` · `FleaOnPage` · `MeovaPage` · `PushOfLifePage` — 구조가 동일하고 **CSS 클래스 접두사만 다릅니다** (`ae-` / `fo-` / `m-` / `pol-`). CSS 파일도 4벌입니다.

이게 실제로 버그를 만들었습니다. 오늘 고친 `title="AllEat"` 오류(FleaOn·MEOVA 두 곳)가 정확히 이 복붙의 결과입니다. `alt="식비 통계"`가 영화 페이지에 남아 있는 것도 마찬가지고요.

**그리고 이 구조 때문에 "동행 추가"가 부담스러운 작업이 됩니다.** 데이터를 분리하면 5분이면 될 일이:

```tsx
// data/projects.ts
export const projects = [
  { slug: "donhaeng", title: "동행", subtitle: "...", features: [...], troubleshooting: {...} },
  ...
]

// pages/ProjectPage.tsx  — 한 개로 통합
const { slug } = useParams();
```

동행을 넣기 전에 이걸 먼저 하시면, 동행 추가가 **파일 하나 만들기가 아니라 배열에 객체 하나 추가하기**가 됩니다. 그리고 이 리팩터링 자체가 포트폴리오에 쓸 이야기가 됩니다.

### 8. alt 텍스트가 복붙된 채 남아 있습니다 — ✅ 해결됨

접근성 검사에서 바로 걸리고, 무엇보다 **성의 없어 보입니다.**

| 파일 | 현재 | 실제 |
|---|---|---|
| `MeovaPage.tsx:20` | `alt="fleaonLogo"` | MEOVA 로고 |
| `MeovaPage.tsx`, `FleaOnPage.tsx` | `alt="식비 통계"` | 각각 마이페이지 / 쇼츠 |
| `FleaOnPage.tsx`, `AllEatPage.tsx` | `alt="ocr optimization code"` | OCR과 무관한 코드 |
| `FleaOnPage.tsx` | `alt="add-meal"` | 라이브 방송 화면 |

### 9. README가 CRA 기본 템플릿입니다

`portfolio/README.md`가 `# Getting Started with Create React App` 그대로입니다.

**GitHub에서 레포를 열면 가장 먼저 보이는 화면**입니다. 동행 앱 README는 스크린샷·기능표·라우트표·브랜치 전략까지 갖춰 놓으셨던데, 정작 포트폴리오 레포는 비어 있습니다. 그 대비가 오히려 눈에 띕니다.

---

## 🟢 P2 — 여유 있을 때

### 10. 프로젝트 태그가 전부 똑같습니다 — ✅ 해결됨

`sections/Projects/Projects.tsx` — 4개 중 3개가 `#FE #디자인 #기획`, MEOVA만 `#BE #FE #디자인`.

태그의 목적은 **한눈에 구분**인데 지금은 구분이 안 됩니다. 기술이나 특징으로 바꾸면 스캔이 됩니다.

```
동행        #Flutter  #AI  #배포
PushOfLife  #WearOS   #BLE  #센서
AllEat      #ReactNative  #AI  #핀테크
Flea:ON     #WebRTC   #실시간  #PWA
MEOVA       #Vue  #Django  #풀스택
```

### 11. MEOVA만 Trouble Shooting이 비어 있습니다 — ✅ 해결됨

`MeovaPage.tsx:104-128`이 통째로 주석 처리돼 있습니다. 4개 중 1개만 섹션이 없으면 **구조가 깨져 보이고, 그 프로젝트가 약해 보입니다.** 최우수상 프로젝트인데 손해입니다.

`docs/projects/meova.md`에 GPT 환각 차단(ID 기반 참조) 내용을 정리해 뒀으니 그걸 넣으시면 됩니다.

### 12. 기간 표기가 두 곳에서 다릅니다 — ✅ 해결됨

- `Projects.tsx` MEOVA: `2024.05 - 2024.06`
- `MeovaPage.tsx` MEOVA: `2024.05 - 2024.05`

README 간트차트 기준 5/5~5/23이므로 **`2024.05 - 2024.05`가 맞습니다.** (7번 리팩터링으로 데이터를 한 곳에 모으면 이런 불일치가 구조적으로 사라집니다.)

### 13. 성과가 대부분 정성적입니다

PushOfLife만 "프레임 드랍 50% 감소"라는 숫자가 있고, 나머지는 "✅ UX 향상", "✅ 네트워크 트래픽 감소"입니다. 숫자가 없으면 **읽는 사람이 크기를 가늠할 수 없습니다.**

측정 기록이 없다면 숫자를 지어내지 마시고, 대신 **범위**로 구체화하세요.
- (X) "네트워크 트래픽 감소"
- (O) "레포트 화면 진입 시 발생하던 중복 요청 제거 — 날짜 전환마다 3회 호출되던 것을 1회로"
- 숫자가 정 없으면: "중복 API 요청 제거", "일주일 단위로 조회 범위 축소" 처럼 **한 일 자체를 구체적으로**

### 14. CRA는 유지보수가 끝난 도구입니다

`react-scripts 5.0.1` + React 19 조합입니다. CRA는 공식적으로 권장되지 않은 지 오래고, React 공식 문서에서도 Vite 등을 안내합니다.

당장 문제가 되진 않지만, **프론트엔드 지원자의 포트폴리오라면 도구 선택 자체가 신호**입니다. Vite 마이그레이션은 이 규모에서 반나절이면 끝나고, 빌드가 눈에 띄게 빨라집니다.

부수적으로 정리할 것들:
- `src/App.test.js`, `src/setupTests.js` — CRA 보일러플레이트 잔재, 실제 테스트 없음
- `package.json`에 `homepage`·`deploy` 스크립트 없음 — 배포 경로가 코드에 안 남아 있습니다

---

## 권장 순서

| 순서 | 작업 | 상태 |
|---|---|---|
| 1 | **7번 리팩터링** — 프로젝트 데이터 분리 + 페이지 템플릿 1개로 통합 | ✅ **완료** (2026-08-06) — 5·8·12번 동반 해결 |
| 2 | **1번 — 동행 추가** | ✅ **완료** (2026-08-06) |
| 3 | **2·3·4번 — Skills / About / Contact** | ✅ **완료** — 풀스택 프리셋 기준 |
| 4 | 6·9번 — Header 정리, README | ⬜ 다음 |
| 5 | 13·14번 — 성과 정량화, Vite 이전 | ⬜ 여유 있을 때 |

### 2~4번 반영 결과 (완료)

사이트 콘텐츠의 기준 문서를 [`docs/resume/02-fullstack.md`](resume/02-fullstack.md)로 삼았습니다.

| 대상 | 변경 |
|---|---|
| 프로젝트 | **동행 추가** (5건) — 스크린샷·로고는 `donhaeng-app` 저장소에서 가져옴. 저장소가 private이라 GIT 버튼은 넣지 않음 |
| About | 태도 3문단 → **증거가 붙은 3문단** (1인 전담 배포 / 계약 실측 / 정직한 화면) |
| Skills | 4행 → **8행**. Flutter·TypeScript·Next.js·Riverpod·배포 추가, 근거 없던 SQLite 제거 |
| Contact | 이메일 단독 → **GitHub · Blog · Email** |
| 태그 | 전부 `#FE #디자인 #기획` → 프로젝트별 기술 태그 |
| MEOVA | Trouble Shooting 신설 (GPT 환각 차단) |
| 데이터 구조 | `troubleshooting`을 **배열로 확장** (동행 3건) + `achievements` 필드 신설 |
| 제목 | `<title>` `cadetbluee` → `윤채영 \| 프론트엔드 개발자 포트폴리오`, 히어로 문구 3종 순환 |

검증: `tsc` 통과 · `CI=true` 빌드 성공 · 테스트 **19건** 통과

### 1번 리팩터링 결과 (완료)

| 구분 | 이전 | 이후 |
|---|---|---|
| 프로젝트 페이지 | `.tsx` 4개 + `.css` 4개 (복붙) | `ProjectPage.tsx` 1개 + `ProjectPage.css` 1개 |
| 프로젝트 데이터 | `Projects.tsx`와 각 페이지에 흩어짐 | `src/data/projects.ts` 단일 출처 |
| 라우트 | `/project/pushoflife` 등 4개 하드코딩 | `/project/:slug` 1개 |
| 페이지 이동 | `window.location.href` (전체 새로고침) | `navigate()` (SPA 라우팅) |
| 이전/다음 순서 | 8곳에 하드코딩 | 배열 순서에서 순환 계산 |
| 버튼 hover 색 | 8곳에 하드코딩 | 이동 대상 프로젝트의 `accent`에서 유도 |
| 테스트 | 0개 (CRA 보일러플레이트는 실패 상태) | 9개 통과 |
| CSS 번들 | — | −498 B (gzip) |

**동행 추가 방법** — 이제 `src/data/projects.ts`의 `projects` 배열 **맨 앞에 객체 하나**를 넣으면 홈 카드·상세 페이지·라우트·이전/다음 순환이 전부 따라옵니다. 파일을 새로 만들 필요가 없습니다.

---

## 잘 되어 있는 것

지적만 하면 균형이 안 맞으니 — 아래는 그대로 두셔도 됩니다.

- **`.gitignore` 관리** — `build/`·`node_modules`가 정확히 제외돼 있습니다. (PushOfLife 시절의 학습이 반영된 것으로 보입니다)
- **`ScrollToTop` 컴포넌트 분리** — 라우트 변경 시 스크롤 초기화를 별도 컴포넌트로 뺀 판단은 좋습니다. 다만 5번 때문에 절반만 동작하고 있어서, 그것만 고치면 제 역할을 합니다
- **`ProjectDetail` 컴포넌트 추출** — 공통 메타 정보를 컴포넌트로 뺀 건 맞는 방향입니다. 7번은 그 방향을 페이지 본문까지 확장하자는 이야기입니다
- **TypeScript 도입 + `tsc --noEmit` 통과** — 타입 오류 없이 유지되고 있습니다
- **반응형 대응** — 햄버거 메뉴(`menu-toggle`)와 모바일 레이아웃이 들어가 있습니다
