import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/logoAsset";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={getLogoDataUri()} width={140} height={92} alt="" />
      </div>
    ),
    { ...size }
  );
}
