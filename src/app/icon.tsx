import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/logoAsset";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={getLogoDataUri()} width={26} height={15} alt="" />
      </div>
    ),
    { ...size }
  );
}
