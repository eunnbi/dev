import ProjectItem from "./ProjectItem";
import styled from "styled-components";

const ProjectList = ({ projects }: { projects: Project[] }) => {
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
