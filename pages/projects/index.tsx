import type { NextPage } from "next";
import styled from "styled-components";
import CustomHead from "../../components/common/CustomHead";
import Heading from "../../components/common/Heading";
import ProjectFilter from "../../components/Projects/ProjectFilter";
import ProjectList from "../../components/Projects/ProjectList";
import { FILTERS } from "../../constants/projects";
import { useFilterHash } from "../../hooks/useFilterHash";

const ProjectsPage: NextPage = () => {
  const { filter, selectFilter } = useFilterHash(FILTERS, "/projects");
  return (
    <>
      <CustomHead page="Projects" />
      <Main>
        <Heading>Projects</Heading>
        <ProjectFilter selectedFilter={filter} onSelect={selectFilter} />
        <ProjectList selectedFilter={filter} />
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
