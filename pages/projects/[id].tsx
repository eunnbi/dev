import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import CustomHead from "@components/common/CustomHead";
import styled from "styled-components";
import { getProjectData, getProjectIds } from "@lib/projects";
import ImageSlider from "@components/projects/ImageSlider";
import ProjectLinks from "@components/projects/ProjectLinks";
import ProjectStacks from "@components/projects/ProjectStacks";
import ProjectTags from "@components/projects/ProjectTags";

const ProjectPage = ({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    id,
    title,
    period,
    imageCnt,
    overview,
    tags,
    stacks,
    review,
    participation,
    links
  } = project;
  const images = Array(imageCnt)
    .fill(1)
    .map((elem, index) => `/images/projects/${id}/${elem + index}.png`);
  return (
    <>
      <CustomHead
        page={title}
        description={overview}
        image={imageCnt === 0 ? undefined : `/images/projects/${id}/1.png`}
      />
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
    </>
  );
};

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

export default ProjectPage;

export const getStaticPaths = async () => {
  const paths = getProjectIds();
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const project = getProjectData(id as string);
  return {
    props: {
      project
    }
  };
};
