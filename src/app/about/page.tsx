import { getSortedProjectsData } from "@/lib/projects";
import AboutPage from "./page-content";
import { createMetadata } from "../shared-metadata";

export default function Page() {
  const projects = getSortedProjectsData();
  return <AboutPage projects={projects} />;
}

export const metadata = createMetadata({
  path: "/about",
  title: "About"
});
