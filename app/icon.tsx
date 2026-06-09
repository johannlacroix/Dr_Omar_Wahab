import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: "#d4af8c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1a1a1a",
          fontWeight: 500,
          letterSpacing: "-0.5px",
        }}
      >
        OW
      </div>
    ),
    { ...size }
  );
}
