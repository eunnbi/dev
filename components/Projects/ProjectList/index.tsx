import ProjectItem from "../ProjectItem";
import styled from "styled-components";
import { PROJECTS } from "../../../constants/projects";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0vw, 500px));
  gap: 7rem;
  justify-content: center;
`;

const ProjectList = () => {
  return (
    <List>
      {PROJECTS.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </List>
  );
};

export default ProjectList;
