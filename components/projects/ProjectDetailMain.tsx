import ImageSlider from "./ImageSlider";
import ProjectTags from "./ProjectTags";
import ProjectStacks from "./ProjectStacks";
import ProjectLinks from "./ProjectLinks";
import styled from "styled-components";

const ProjectDetailMain = ({
  title,
  images,
  period,
  tags,
  overview,
  stacks,
  participation,
  review,
  links
}: Project) => {
  return (
    <Main>
      <h1>{title}</h1>
      {images.length === 0 ? null : <ImageSlider images={images} />}
      <Section>
        <p className="project-period">⏰ {period}</p>
        <ProjectTags tags={tags} />
        <article>
          <h3>Overview</h3>
          <p>{overview}</p>
        </article>
        <ProjectStacks stacks={stacks} />
        <article>
          <h3>Member</h3>
          <p>{participation.member}</p>
          {participation.role && <p>{participation.role}</p>}
        </article>
        {(review.text || (review.link && review.linkName)) && (
          <article>
            <h3>Review</h3>
            <p>{review.text}</p>
            <a href={review.link} target="_blank" rel="noreferrer">
              🚀 <span>{review.linkName}</span>
            </a>
          </article>
        )}
        <ProjectLinks links={links} />
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
