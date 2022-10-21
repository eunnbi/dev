import { useProjects } from "@hooks/useProjects";
import styled from "styled-components";
import ProjectArticle from "./ProjectArticle";

const ProjectsSection = () => {
  const projects = useProjects();
  return (
    <Section>
      {projects.map(project => (
        <ProjectArticle {...project} key={project.id} />
      ))}
    </Section>
  );
};

export default ProjectsSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
`;
