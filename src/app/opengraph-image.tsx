import { ImageResponse } from "next/og";
import { company } from "@/data/company";
import { getLogoDataUri } from "@/lib/logoAsset";

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
          background: "linear-gradient(135deg, #2c5a8f 0%, #1e3f66 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 16,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={getLogoDataUri()} width={70} height={40} alt="" />
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
