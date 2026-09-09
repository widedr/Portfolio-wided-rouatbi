import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0817",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
            backgroundImage: "linear-gradient(120deg, #8f5bff 0%, #fee449 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          WR
        </div>
      </div>
    ),
    { ...size }
  );
}
