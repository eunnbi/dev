import ImageSlider from "./ImageSlider";
import ProjectTags from "./ProjectTags";
import ProjectStacks from "./ProjectStacks";
import ProjectLinks from "./ProjectLinks";
import styled from "styled-components";

const ProjectDetailMain = ({ project }: { project: Project }) => {
  return (
    <Main>
      <h1>{project.title}</h1>
      {project.images.length === 0 ? null : (
        <ImageSlider images={project.images} />
      )}
      <Section>
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
      </Section>
    </Main>
  );
};

export default ProjectDetailMain;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  margin: 40px 0;
  h1 {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .project-period {
    font-size: 1.05rem;
  }
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
