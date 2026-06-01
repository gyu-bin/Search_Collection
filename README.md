<div align="center">

# 📋 Search Collection

**Vercel에 올린 테스트·설문을 한곳에서 모아 보는 링크 허브**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=true)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

**[🌐 라이브 사이트](https://search-collection.vercel.app)** · [GitHub](https://github.com/gyu-bin/Search_Collection)

</div>

---

## ✨ 소개

각각 따로 배포된 **성향 테스트·설문 페이지**를 카드 형태로 모아 두는 가벼운 랜딩 페이지입니다.  
백엔드·DB 없이 **링크만 관리**하면 되고, 새 설문은 설정 파일에 URL 한 줄 추가로 끝납니다.

---

## 🧭 모아 둔 설문

| | 제목 | 설명 |
|:---:|:---|:---|
| ⛪ | [나는 어떤 신앙인일까?](https://faith-test-mu.vercel.app) | 12문항 신앙 성향 테스트 |
| ✈️ | [MyTravel](https://my-travel-flax.vercel.app) | 나에게 맞는 국내 여행지 찾기 |
| 🏠 | [나는 어떤 집에 살아야 할까?](https://my-home-five-kappa.vercel.app) | 14문항 집 유형·동네 분석 |

> 목록은 `src/lib/surveyLinks.ts`에서 수정합니다.

---

## 🛠 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

---

## 🚀 로컬 실행

```bash
git clone https://github.com/gyu-bin/Search_Collection.git
cd Search_Collection
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인합니다.

---

## ➕ 설문 추가하기

`src/lib/surveyLinks.ts`에 객체를 추가합니다.

```ts
{
  id: "unique-id",
  title: "설문 제목",
  description: "카드에 보일 한 줄 설명",
  url: "https://your-app.vercel.app",
  emoji: "📋",
  tag: "카테고리",
},
```

저장 후 배포하면 메인 페이지에 카드가 자동으로 표시됩니다.

---

## 📦 배포 (Vercel)

1. [Vercel](https://vercel.com)에서 **New Project** → 이 저장소 Import
2. Framework Preset: **Next.js** (기본값)
3. Deploy

커스텀 도메인·환경 변수는 필수가 아닙니다. (선택: `NEXT_PUBLIC_SITE_URL`)

---

## 📁 프로젝트 구조

```
search_collection/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 메인 — 설문 카드 목록
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── lib/
│       └── surveyLinks.ts    # ★ 링크 목록 (여기만 편집)
├── package.json
└── README.md
```

---

## 🔗 관련 프로젝트

| 프로젝트 | 역할 |
|:---|:---|
| [Faith Test](https://github.com/gyu-bin/Faith_Test) | 신앙 성향 테스트 (단일 앱) |
| **Search Collection** (이 repo) | 여러 설문 링크 허브 |

---

<div align="center">

Made with ☕ for sharing tests easily

</div>
