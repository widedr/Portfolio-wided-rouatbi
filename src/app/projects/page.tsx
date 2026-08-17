import type { Metadata } from "next";
import ProjectsPageContent from "@/components/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects — Wided Rouatbi",
  description:
    "All of Wided Rouatbi's projects: UX/UI Design, SaaS products, websites and mobile apps.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
