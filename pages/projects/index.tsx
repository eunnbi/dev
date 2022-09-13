import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import CustomHead from "../../components/common/CustomHead";
import Heading from "../../components/common/Heading";
import ProjectFilter from "../../components/Projects/ProjectFilter";
import ProjectList from "../../components/Projects/ProjectList";

const ProjectsPage: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const onSelect = (id: number) => setSelectedId(id);
  return (
    <>
      <CustomHead page="Projects" />
      <Main>
        <Heading>Projects</Heading>
        <ProjectFilter selectedId={selectedId} onSelect={onSelect} />
        <ProjectList selectedId={selectedId} />
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
