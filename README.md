# Portfolio

로보티스 OH! GYM 인턴십 지원용 포트폴리오. Jekyll 기반 정적 사이트, GitHub Pages로 배포.

---

## 폴더 구조

```
portfolio/
├── _config.yml              # Jekyll 설정
├── _layouts/
│   ├── default.html         # 모든 페이지의 기본 레이아웃
│   └── project.html         # 프로젝트 페이지 전용 레이아웃
├── _includes/
│   ├── nav.html             # 상단 네비게이션 + 한/영 토글 버튼
│   └── footer.html
├── _projects/               # ← 프로젝트 페이지는 여기에 추가
│   ├── sobi.md
│   ├── my-role.md
│   ├── walker2d.md
│   ├── isaacsim-lambda.md
│   ├── llm-webbook.md
│   ├── saas.md
│   └── system-prompt.md
├── assets/
│   ├── css/style.css        # 미니멀 흑백 스타일
│   └── js/i18n.js           # 한/영 토글 스크립트
├── index.html               # 홈 (Hero + About 요약 + 주요 프로젝트)
├── about.html               # 소개
├── projects.html            # 프로젝트 목록
├── skills.html              # 스킬
├── now.html                 # 현재 / 다음 6개월
├── Gemfile                  # 로컬 Jekyll 실행용 (선택)
└── README.md                # 이 파일
```

---

## 한/영 토글이 어떻게 작동하나

모든 페이지에서 한국어/영어 콘텐츠를 한 파일에 같이 작성합니다:

```html
<span data-lang="ko">한국어 문장</span>
<span data-lang="en">English sentence</span>
```

또는 마크다운 안에서는:

```markdown
<div data-lang="ko" markdown="1">

## 한국어 섹션
내용...

</div>

<div data-lang="en" markdown="1">

## English section
content...

</div>
```

CSS가 `body.lang-ko` / `body.lang-en` 클래스에 따라 한쪽만 보여줍니다.  
우상단 `KO / EN` 버튼을 누르면 토글되고, 선택은 `localStorage`에 저장됩니다.

---

## 새 프로젝트 페이지 추가하기

1. `_projects/` 폴더에 새 `.md` 파일 추가 (예: `my-new-project.md`)
2. 다음 frontmatter를 맨 위에 작성:

```yaml
---
title: "한국어 제목"
title_en: "English Title"
order: 8                          # 정렬 순서 (낮을수록 앞)
tag: "SOLO · DONE"                # 우측 작은 라벨 (모노스페이스로 표시됨)
summary: "한 줄 설명 (한국어)"
summary_en: "One-line summary (English)"
---
```

3. 본문은 위 한/영 div 패턴으로 작성

→ `/projects/my-new-project/` 로 자동 생성, 프로젝트 목록에도 자동 노출됨.

---

## 배포 (가장 간단한 방법)

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

그 다음 GitHub 리포지토리 페이지에서:

1. **Settings → Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / `(root)`
4. 저장하면 `https://wang-gw.github.io/portfolio/` 에서 확인 가능

> `_config.yml`의 `baseurl`이 `/portfolio`로 되어 있어요. 만약 사용자 사이트 (`wang-gw.github.io`) 로 배포하면 `baseurl: ""`로 바꾸세요.

---

## 로컬 프리뷰 (선택)

Windows에서 Jekyll을 돌리려면 Ruby가 필요합니다. 설치가 번거롭다면 그냥 GitHub에 push해서 확인해도 충분합니다.

설치 방법:

1. [RubyInstaller for Windows](https://rubyinstaller.org/) 설치 (DevKit 포함 버전)
2. PowerShell에서:

```powershell
gem install bundler jekyll
cd portfolio
bundle install
bundle exec jekyll serve
```

→ http://localhost:4000/portfolio/ 접속

---

## 채워야 할 자리 (TODO)

현재 다음 자리는 placeholder입니다:

- [ ] `_projects/walker2d.md` — 작업 폴더 / 학습 결과 영상 (사용자 전달 예정)
- [ ] `_projects/isaacsim-lambda.md` — 아키텍처 다이어그램 (사용자 전달 예정)
- [ ] `_projects/llm-webbook.md` — AI.SW 웹북 링크
- [ ] `_projects/saas.md` — 회사명, 역할, 대회 / 아이템 상세
- [ ] `_projects/sobi.md` — 영문 번역 (현재 KR만 채워짐)
- [ ] 사이트 author 이름 (`_config.yml`의 `author` 필드)

---

## 디자인 톤

- 흰 배경 + 검정 텍스트 + 회색 보조
- 폰트: Pretendard (CDN)
- 강조: 굵기 / 위치 / 여백으로만 (색 강조 없음)
- 가로 폭 880px 고정 → 한 줄에 적절한 글자 수 유지
