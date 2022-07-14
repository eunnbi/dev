import type { NextPage } from "next";
import CustomHead from "../../components/common/CustomHead";
import Heading from "../../components/common/Heading";
import ProjectList from "../../components/Projects/ProjectList";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <CustomHead page="Projects" />
      <main>
        <Heading>Projects</Heading>
        <section>
          <ProjectList />
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
