import type { NextPage } from "next";
import CustomHead from "../components/common/CustomHead";
import Heading from "../components/common/Heading";
import ProjectList from "../components/Projects/ProjectList";
import ModalsProvider from "../context/ModalsContext";

const Projects: NextPage = () => {
  return (
    <>
      <CustomHead page="Projects" />
      <main>
        <Heading>Projects</Heading>
        <section>
          <ModalsProvider>
            <ProjectList />
          </ModalsProvider>
        </section>
      </main>
    </>
  );
};

export default Projects;
