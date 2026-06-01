import { collectionOgImage, OG_SIZE } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "설문 모음 — 테스트·설문 링크 허브";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return collectionOgImage();
}
