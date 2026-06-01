/** 카드에 표시할 설문 — Vercel 배포 URL만 추가하면 됩니다 */
export type SurveyLink = {
  id: string;
  title: string;
  description: string;
  url: string;
  emoji?: string;
  tag?: string;
};

export const surveyLinks: SurveyLink[] = [
  {
    id: "faith-test",
    title: "나는 어떤 신앙인일까?",
    description: "12문항으로 알아보는 나의 신앙 성향",
    url: "https://faith-test-mu.vercel.app",
    emoji: "⛪",
    tag: "신앙 테스트",
  },
  {
    id: "my-travel",
    title: "MyTravel — 나에게 맞는 국내 여행지",
    description: "설문으로 찾는 나에게 맞는 국내 여행지",
    url: "https://my-travel-flax.vercel.app",
    emoji: "✈️",
    tag: "여행",
  },
  {
    id: "my-home",
    title: "나는 어떤 집에 살아야 할까?",
    description: "14문항으로 공간 성향·맞는 집 유형과 동네 분석",
    url: "https://my-home-five-kappa.vercel.app",
    emoji: "🏠",
    tag: "집 유형",
  },
];
