import type { Metadata } from "next";
import { createMetadata } from "@/app/shared-metadata";
import { getProjectData, getProjectIds } from "@/lib/projects";
import ProjectPage from "./page-content";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const project = getProjectData(params.id);
  return <ProjectPage project={project} />;
}

export function generateStaticParams() {
  const projectIds = getProjectIds();
  return projectIds;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectData(params.id);

  return createMetadata({
    path: `/projects/${params.id}`,
    title: project.title,
    desc: project.overview,
    keywordList: project.tags,
    images: project.imageCnt
      ? `/images/projects/${project.id}/1.png`
      : undefined
  });
}
