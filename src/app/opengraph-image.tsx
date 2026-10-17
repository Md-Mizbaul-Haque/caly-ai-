import { ImageResponse } from "next/og";
import { APP_NAME } from "@/lib/content";

export const alt = `${APP_NAME} - AI calorie tracker for Android`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          padding: "80px 96px",
          background: "#fff8f2",
          color: "#1a1a1a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 800 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 18,
              background: "#f2470c",
              color: "#fff8f2",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            C
          </div>
          {APP_NAME}
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
          Calories, without the counting.
        </div>
        <div style={{ fontSize: 34, color: "#8a8a8a" }}>
          Snap a meal. Caly AI logs the calories and macros.
        </div>
      </div>
    ),
    size,
  );
}
