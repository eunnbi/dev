import ProjectItem from "../ProjectItem";
import styled from "styled-components";
import { PROJECTS } from "../../../constants/projects";

interface ProjectListProps {
  selectedId: number;
}

const ProjectList = ({ selectedId }: ProjectListProps) => {
  let projects = PROJECTS;
  if (selectedId === 1) {
    projects = projects.filter((project) => project.personal);
  } else if (selectedId === 2) {
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
