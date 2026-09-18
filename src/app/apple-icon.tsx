import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(135deg, #2e5169, #12252f)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="116" height="116" viewBox="0 0 48 48">
          <path
            d="M10 15 L16.5 33 L24 19 L31.5 33 L38 15"
            fill="none"
            stroke="white"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="10" y="37.5" width="28" height="2.6" rx="1.3" fill="#b8551e" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
