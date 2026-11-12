import { alt, contentType, createShareImage, size } from "@/lib/share-image";

export { alt, contentType, size };

export default function TwitterImage() {
  return createShareImage();
}
