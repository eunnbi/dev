import type { NextPage } from "next";
import CustomHead from "@components/common/CustomHead";
import ProjectsSection from "@components/projects/ProjectsSection";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <CustomHead page="Projects" />
      <main>
        <ProjectsSection />
      </main>
    </>
  );
};

export default ProjectsPage;
