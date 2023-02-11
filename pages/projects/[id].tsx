import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import CustomHead from "@components/common/CustomHead";
import styled from "styled-components";
import { getProjectData, getProjectIds } from "@lib/projects";
import ImageSlider from "@components/project/ImageSlider";
import ProjectLinks from "@components/project/ProjectLinks";
import ProjectTags from "@components/project/ProjectTags";
import StackList from "@components/project/StackList";

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
        keywords={tags}
      />
      <Main>
        <h1>{title}</h1>
        {images.length === 0 ? null : <ImageSlider images={images} />}
        <Wrapper>
          <p className="project-period">⏰ {period}</p>
          <ProjectTags tags={tags} />
          <section>
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>
          <section>
            <h2>Stacks</h2>
            <StackList stacks={stacks} />
          </section>
          <section>
            <h2>Member</h2>
            <p>{participation.member}</p>
            {participation.role && <p>{participation.role}</p>}
          </section>
          {(review.text || (review.link && review.linkName)) && (
            <section>
              <h2>Review</h2>
              <p>{review.text}</p>
              <a href={review.link} target="_blank" rel="noreferrer">
                🚀 <span>{review.linkName}</span>
              </a>
            </section>
          )}
          <ProjectLinks links={links} />
        </Wrapper>
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
  margin-top: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .project-period {
    font-size: 1.05rem;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h2 {
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
