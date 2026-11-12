import { ImageResponse } from "next/og";
import { brandDescription, brandName } from "@/lib/site";

export const alt = `${brandName}. Assessoria comercial para indústrias.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function createShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#061229",
          color: "#f4f1ea",
          padding: "72px 80px"
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#f5b301"
          }}
        >
          Assessoria comercial para indústrias
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05, fontWeight: 700, letterSpacing: -1 }}>
            {brandName}
          </div>
          <div style={{ display: "flex", fontSize: 28, lineHeight: 1.4, color: "#d7deea", maxWidth: 920 }}>
            {brandDescription}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
