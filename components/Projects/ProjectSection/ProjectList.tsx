import ProjectItem from "../ProjectItem";
import styled from "styled-components";
import { PROJECTS, FILTERS } from "../../../constants/projects";

interface ProjectListProps {
  selectedFilter: string;
}

const ProjectList = ({ selectedFilter }: ProjectListProps) => {
  let projects = PROJECTS;
  if (selectedFilter === FILTERS[1]) {
    projects = projects.filter((project) => project.personal);
  } else if (selectedFilter === FILTERS[2]) {
    projects = projects.filter((project) => !project.personal);
  }
  return (
    <List>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </List>
  );
};

export default ProjectList;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0vw, 500px));
  gap: 7rem;
  justify-content: center;
`;
