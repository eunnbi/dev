import { IProject } from "../../constants/projects";
import ImageSlider from "./ImageSilder";
import ProjectTags from "./ProjectTags";
import ProjectStacks from "./ProjectStacks";
import ProjectLinks from "./ProjectLinks";
import styled from "styled-components";

const ProjectDetailSection = ({ project }: { project: IProject }) => {
  return (
    <Section>
      {project.images.length === 0 ? null : (
        <ImageSlider images={project.images} />
      )}
      <Wrapper>
        <p className="project-period">⏰ {project.period}</p>
        <ProjectTags tags={project.tags} />
        <article>
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </article>
        <ProjectStacks
          feStacks={project.feStacks}
          beStacks={project.beStacks}
          deployStacks={project.deployStacks}
        />
        <article>
          <h3>Member</h3>
          <p>{project.member}</p>
          {project.role && <p>{project.role}</p>}
        </article>
        {(project.review.text ||
          (project.review.link && project.review.linkName)) && (
          <article>
            <h3>Review</h3>
            <p>{project.review.text}</p>
            <a href={project.review.link} target="_blank" rel="noreferrer">
              🚀 <span>{project.review.linkName}</span>
            </a>
          </article>
        )}
        <ProjectLinks github={project.github} link={project.link} />
      </Wrapper>
    </Section>
  );
};

export default ProjectDetailSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 1.25rem;
    }
    p {
      font-size: 1.1rem;
    }
    a:hover span {
      text-decoration: underline;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .project-period {
    font-size: 1.05rem;
  }
`;
