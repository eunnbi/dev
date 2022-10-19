import Filter from "../common/Filter";
import ProjectList from "./ProjectList";
import { useFilterHash } from "../../hooks/useFilterHash";
import { FILTERS, PROJECTS } from "../../data/projects";
import styled from "styled-components";
import Heading from "../common/Heading";

const ProjectsSection = () => {
  const { filterIndex, selectFilter } = useFilterHash(FILTERS, "/projects");
  const projects =
    filterIndex === 0
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === FILTERS[filterIndex]);
  return (
    <Section>
      <Heading title="Projects" />
      <div>
        <Filter
          filters={FILTERS}
          filterIndex={filterIndex}
          selectFilter={selectFilter}
        />
        <ProjectList projects={projects} />
      </div>
    </Section>
  );
};

export default ProjectsSection;

const Section = styled.section`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
