import type { NextPage } from "next";
import CustomHead from "@components/common/CustomHead";
import Heading from "@components/common/Heading";
import ProjectsSection from "@components/projects/ProjectsSection";
import styled from "styled-components";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <CustomHead page="Projects" />
      <Main>
        <Heading title="Projects" />
        <ProjectsSection />
      </Main>
    </>
  );
};

export default ProjectsPage;

const Main = styled.main`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
