import { surveyLinks } from "@/lib/surveyLinks";

export default function HomePage() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-app px-4 pb-12 pt-8 sm:px-5 md:max-w-xl md:px-8 lg:max-w-2xl">
      <header className="text-center">
        <p className="text-4xl" aria-hidden>
          📋
        </p>
        <h1 className="font-serif mt-4 text-[26px] font-bold text-ink md:text-[32px]">
          설문 모음
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          카드를 누르면 각 테스트 페이지로 이동합니다
        </p>
      </header>

      <ul className="mt-10 space-y-4">
        {surveyLinks.map((survey) => (
          <li key={survey.id}>
            <a
              href={survey.url}
              className="group block rounded-card border border-gold-light bg-cream2 p-5 shadow-sm transition hover:border-gold hover:bg-cream active:scale-[0.99]"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-inner bg-cream text-2xl"
                  aria-hidden
                >
                  {survey.emoji ?? "🔗"}
                </span>
                <div className="min-w-0 flex-1 text-left">
                  {survey.tag ? (
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">
                      {survey.tag}
                    </span>
                  ) : null}
                  <h2 className="font-serif mt-0.5 text-lg font-semibold text-ink group-hover:text-[#6b4f2a]">
                    {survey.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {survey.description}
                  </p>
                  <p className="mt-2 truncate text-xs text-ink-mute">
                    {survey.url.replace(/^https?:\/\//, "")}
                  </p>
                </div>
                <span
                  className="mt-1 shrink-0 text-gold transition group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {surveyLinks.length === 0 ? (
        <p className="mt-10 text-center text-sm text-ink-mute">
          표시할 설문이 없습니다.{" "}
          <code className="text-ink-soft">src/lib/surveyLinks.ts</code>에
          링크를 추가해 주세요.
        </p>
      ) : null}
    </div>
  );
}
