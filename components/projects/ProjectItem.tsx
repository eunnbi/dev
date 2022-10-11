import Image from "next/image";
import { useRouter } from "next/router";
import { IProject } from "../../data/projects";
import ProjectTags from "./ProjectTags";
import ProjectLinks from "./ProjectLinks";
import styled from "styled-components";
import { NextImageWrapper } from "../common/NextImageWrapper.styled";

const ProjectItem = ({ project }: { project: IProject }) => {
  const router = useRouter();
  const onClick = (e: any) => {
    const { tagName } = e.target;
    if (tagName === "a" || tagName === "svg" || tagName === "path") return;
    router.push(`/projects/${project.id}`);
  };

  return (
    <Item onClick={onClick}>
      <Row>
        <h2>{project.title}</h2>
        <ProjectLinks github={project.github} link={project.link} />
      </Row>
      <ImageWrapper>
        <Image
          src={
            project.images.length === 0
              ? "/images/projects/project-default.png"
              : `/images/projects/${project.images[0]}`
          }
          alt="project thumbnail"
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/projects/project-default.png"
        />
      </ImageWrapper>
      <div>
        <ProjectTags tags={project.tags} />
      </div>
    </Item>
  );
};
export default ProjectItem;

const Item = styled.li`
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ImageWrapper = styled(NextImageWrapper)`
  width: 90%;
  margin: 0 auto;
  position: relative;
  box-shadow: ${({ theme }) => `1px 5px 15px ${theme.color.shadowColor}`};
  border-radius: 5px;
  img {
    border-radius: 5px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
