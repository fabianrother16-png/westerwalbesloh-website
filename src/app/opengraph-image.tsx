import { ImageResponse } from "next/og";
import { company } from "@/data/company";

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
          padding: "80px",
          background: "linear-gradient(135deg, #1c3a4e 0%, #12252f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "linear-gradient(135deg, #2e5169, #12252f)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 48 48">
              <path
                d="M10 15 L16.5 33 L24 19 L31.5 33 L38 15"
                fill="none"
                stroke="white"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700 }}>Westerwalbesloh</div>
            <div style={{ fontSize: 18, opacity: 0.7, letterSpacing: 2 }}>ROLLLADENBAU</div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, marginTop: 56, maxWidth: 900, lineHeight: 1.15 }}>
          {company.slogan}
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 28, opacity: 0.75 }}>
          60 Jahre Erfahrung · Somfy-Experte · 4,9 von 5 bei Google
        </div>
      </div>
    ),
    { ...size }
  );
}
