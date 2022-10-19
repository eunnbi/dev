import Filter from "../common/Filter";
import ProjectList from "./ProjectList";
import { useFilterHash } from "@hooks/useFilterHash";
import { FILTERS, PROJECTS } from "@data/projects";
import styled from "styled-components";

const ProjectsSection = () => {
  const { filterIndex, selectFilter } = useFilterHash(FILTERS, "/projects");
  const projects =
    filterIndex === 0
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === FILTERS[filterIndex]);
  return (
    <Section>
      <Filter
        filters={FILTERS}
        filterIndex={filterIndex}
        selectFilter={selectFilter}
      />
      <ProjectList projects={projects} />
    </Section>
  );
};

export default ProjectsSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
