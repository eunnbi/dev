import type { NextPage } from "next";
import CustomHead from "@components/common/CustomHead";
import ProjectSection from "@components/projects/ProjectSection";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <CustomHead page="Projects" />
      <main>
        <ProjectSection />
      </main>
    </>
  );
};

export default ProjectsPage;
