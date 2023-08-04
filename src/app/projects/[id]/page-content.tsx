"use client";

import ImageSlider from "@/components/project/ImageSlider";
import ProjectLinks from "@/components/project/ProjectLinks";
import ProjectTags from "@/components/project/ProjectTags";
import StackList from "@/components/project/StackList";
import styled from "styled-components";

export default function ProjectPage({ project }: { project: Project }) {
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
    <Main>
      <h1 className="main-title">{title}</h1>
      <ImageSlider images={images} />
      <Wrapper>
        <p className="period-text">⏰ {period}</p>
        <ProjectTags tags={tags} />
        <Section>
          <h2 className="section-title">Overview</h2>
          <p className="section-content">{overview}</p>
        </Section>
        <Section>
          <h2 className="section-title">Stacks</h2>
          <StackList stacks={stacks} />
        </Section>
        <Section>
          <h2 className="section-title">Member</h2>
          <p className="section-content">{participation.member}</p>
          {participation.role && <p>{participation.role}</p>}
        </Section>
        {review && (
          <Section>
            <h2 className="section-title">Review</h2>
            <p className="section-content">{review.text}</p>
            <a
              href={review.link}
              target="_blank"
              rel="noreferrer"
              className="review-link"
            >
              🚀 <span className="link-text">{review.linkName}</span>
            </a>
          </Section>
        )}
        <ProjectLinks links={links} />
      </Wrapper>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  width: 100%;
  margin: 3rem auto;
  .main-title {
    font-size: 2.2rem;
    text-align: center;
  }
  .period-text {
    font-size: 1.05rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .section-title {
    font-size: 1.25rem;
  }
  .section-content {
    font-size: 1.1rem;
  }
  .review-link:hover .link-text {
    text-decoration: underline;
  }
`;
