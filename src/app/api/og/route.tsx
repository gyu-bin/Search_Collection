import { collectionOgImage } from "@/lib/ogImage";

export const runtime = "edge";

/** 카카오·외부 스크래퍼용 OG 이미지 */
export async function GET() {
  return collectionOgImage();
}
