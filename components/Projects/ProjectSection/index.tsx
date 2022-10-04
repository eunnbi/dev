import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { useFilterHash } from "../../../hooks/useFilterHash";
import { FILTERS } from "../../../constants/projects";
import styled from "styled-components";

const ProjectSection = () => {
  const { filter, selectFilter } = useFilterHash(FILTERS, "/projects");
  return (
    <Section>
      <ProjectFilter selectedFilter={filter} onSelect={selectFilter} />
      <ProjectList selectedFilter={filter} />
    </Section>
  );
};

export default ProjectSection;

const Section = styled.section`
  margin: 0;
`;
