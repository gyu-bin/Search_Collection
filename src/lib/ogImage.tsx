import { ImageResponse } from "next/og";
import { surveyLinks } from "@/lib/surveyLinks";

export const OG_SIZE = { width: 1200, height: 630 };

const flexCol = {
  display: "flex",
  flexDirection: "column" as const,
};

export function collectionOgImage() {
  const count = surveyLinks.length;
  const emojis = surveyLinks
    .map((s) => s.emoji ?? "🔗")
    .slice(0, 6)
    .join(" ");

  return new ImageResponse(
    (
      <div
        style={{
          ...flexCol,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F3",
          border: "16px solid #B8935A",
          padding: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 80, marginBottom: 20 }}>
          {"📋"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#2A2118",
            marginBottom: 12,
          }}
        >
          {"설문 모음"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#5C4A34",
            textAlign: "center",
            lineHeight: 1.45,
          }}
        >
          {"테스트·설문 링크를 한곳에서"}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 40,
            letterSpacing: 8,
          }}
        >
          {emojis || "🔗"}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 22,
            color: "#9C8E80",
          }}
        >
          {`${count}개의 설문 · 카드 누르면 바로 이동`}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
