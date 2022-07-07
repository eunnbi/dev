import { PROJECTS } from "./projects";
import Modals from "../common/Modals";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0vw, 500px));
  gap: 7rem;
  justify-content: center;
`;

const ProjectList = () => {
  return (
    <>
      <List>
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </List>
      <Modals />
    </>
  );
};

export default ProjectList;
