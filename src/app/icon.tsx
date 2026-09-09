import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: -0.5,
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
