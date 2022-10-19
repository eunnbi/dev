import type { NextPage } from "next";
import CustomHead from "@components/common/CustomHead";
import ProjectSection from "@components/projects/ProjectSection";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <CustomHead page="Projects" description="은비의 개발 프로젝트들" />
      <main>
        <ProjectSection />
      </main>
    </>
  );
};

export default ProjectsPage;
