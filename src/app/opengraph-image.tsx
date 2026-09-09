import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Wided Rouatbi — UX/UI & Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(
    join(process.cwd(), "public/images/profile-front.png")
  );
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0b0817",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -100,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "linear-gradient(135deg, rgba(143,91,255,0.55) 0%, rgba(254,228,73,0.35) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 40,
            width: "58%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 20,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.02,
              backgroundImage:
                "linear-gradient(120deg, #8f5bff 0%, #fee449 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Wided Rouatbi
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 600,
              color: "#f6f4fb",
              marginTop: 24,
            }}
          >
            UX/UI &amp; Product Designer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 500,
              color: "rgba(255,255,255,0.6)",
              marginTop: 12,
            }}
          >
            Full Stack Senior Designer (AI-Augmented / AI-Native)
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "42%",
            height: "100%",
          }}
        >
          <img
            src={photoSrc}
            width={520}
            height={520}
            alt=""
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
