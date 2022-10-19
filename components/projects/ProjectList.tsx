import ProjectItem from "./ProjectItem";
import styled from "styled-components";

interface ProjectListProps {
  projects: ProjectItem[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <Wrapper>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </Wrapper>
  );
};

export default ProjectList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
`;
