import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { useFilterHash } from "../../hooks/useFilterHash";
import { FILTERS } from "../../data/projects";
import styled from "styled-components";
import SectionHeading from "../common/SectionHeading";

const ProjectSection = () => {
  const { filterIndex, selectFilter } = useFilterHash(FILTERS, "/projects");
  return (
    <Section>
      <SectionHeading title="Projects" />
      <ProjectFilter filterIndex={filterIndex} onSelect={selectFilter} />
      <ProjectList filterIndex={filterIndex} />
    </Section>
  );
};

export default ProjectSection;

const Section = styled.section`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
