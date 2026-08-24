import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import { LanguageProvider } from "@/lib/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://portfolio-wided-rouatbi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wided Rouatbi — UX/UI & Product Designer",
  description:
    "Wided Rouatbi, UX/UI Designer, Product Designer & AI-Augmented Designer. Portfolio créatif — design produit SaaS, design systems et expériences augmentées par l'IA.",
  keywords: [
    "Wided Rouatbi",
    "UX Designer",
    "UI Designer",
    "Product Designer",
    "AI-Augmented Design",
    "Portfolio",
    "Neoshore",
    "Mathis BS",
  ],
  openGraph: {
    title: "Wided Rouatbi — UX/UI & Product Designer",
    description:
      "Portfolio créatif — design produit SaaS, design systems et expériences augmentées par l'IA.",
    url: siteUrl,
    siteName: "Wided Rouatbi",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wided Rouatbi — UX/UI & Product Designer",
    description:
      "Portfolio créatif — design produit SaaS, design systems et expériences augmentées par l'IA.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground cursor-none-fine">
        <LanguageProvider>
          <MotionConfig reducedMotion="user">
            <SmoothScroll />
            <CustomCursor />
            <div aria-hidden className="grain" />
            <PageTransition>{children}</PageTransition>
          </MotionConfig>
        </LanguageProvider>
      </body>
    </html>
  );
}
