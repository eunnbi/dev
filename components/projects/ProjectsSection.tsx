import { useProjects } from "@hooks/useProjects";
import Image from "next/image";
import ProjectTags from "./ProjectTags";
import ProjectLinks from "./ProjectLinks";
import styled from "styled-components";
import Router from "next/router";

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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
`;

// ---------------------------------------------------------

const ProjectArticle = ({ title, imageCnt, tags, links, id }: Project) => {
  const onClick = (e: any) => {
    const { tagName } = e.target;
    if (tagName === "a" || tagName === "svg" || tagName === "path") return;
    Router.push(`/projects/${id}`);
  };
  const imageSrc =
    imageCnt === 0
      ? "/images/projects/project-default.png"
      : `/images/projects/${id}/1.png`;

  return (
    <Article onClick={onClick}>
      <Row>
        <h2>{title}</h2>
        <ProjectLinks links={links} />
      </Row>
      <ImageWrapper>
        <Image
          src={imageSrc}
          alt="project thumbnail"
          fill
          placeholder="blur"
          blurDataURL={imageSrc}
        />
      </ImageWrapper>
      <ProjectTags tags={tags} />
    </Article>
  );
};

const Article = styled.article`
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ImageWrapper = styled.div`
  width: 90%;
  height: 60vw;
  margin: 0 auto;
  position: relative;
  box-shadow: ${({ theme }) => `1px 5px 15px ${theme.color.shadowColor}`};
  border-radius: 5px;
  max-height: 450px;
  img {
    border-radius: 5px;
    object-fit: cover;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export default ProjectsSection;
