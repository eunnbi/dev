import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import { getProjectsData } from "../../libs/projects";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0vw, 500px));
  gap: 7rem;
  justify-content: center;
`;

const ProjectList = () => {
  const projects = getProjectsData();
  return (
    <List>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </List>
  );
};

export default ProjectList;
