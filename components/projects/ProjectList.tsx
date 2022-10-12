import ProjectItem from "./ProjectItem";
import styled from "styled-components";

interface ProjectListProps {
  projects: ProjectItem[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
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
  margin-top: 30px;
`;
