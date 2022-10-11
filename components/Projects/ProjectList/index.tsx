import ProjectItem from "../ProjectItem";
import styled from "styled-components";
import { PROJECTS, FILTERS } from "../../../constants/projects";

interface ProjectListProps {
  filterIndex: number;
}

const ProjectList = ({ filterIndex }: ProjectListProps) => {
  let projects = PROJECTS;
  if (FILTERS[filterIndex] === FILTERS[1]) {
    projects = projects.filter((project) => project.personal);
  } else if (FILTERS[filterIndex] === FILTERS[2]) {
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
  display: flex;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
`;
