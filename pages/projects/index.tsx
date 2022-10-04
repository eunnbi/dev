import type { NextPage } from "next";
import styled from "styled-components";
import CustomHead from "../../components/common/CustomHead";
import Heading from "../../components/common/Heading";
import ProjectSection from "../../components/Projects/ProjectSection";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <CustomHead page="Projects" />
      <Main>
        <Heading>Projects</Heading>
        <ProjectSection />
      </Main>
    </>
  );
};

export default ProjectsPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
