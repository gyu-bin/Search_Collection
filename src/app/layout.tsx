import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const ogImage = absoluteUrl("/api/og");

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "설문 모음",
  description: "신앙·여행·집 유형 등 배포된 테스트·설문 링크를 한곳에서",
  openGraph: {
    title: "설문 모음",
    description: "테스트·설문 링크를 한곳에서 — 카드를 눌러 바로 이동",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1200,
        height: 630,
        alt: "설문 모음 — 테스트·설문 링크 허브",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "설문 모음",
    description: "테스트·설문 링크를 한곳에서",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" translate="no">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
