import { useCallback, useContext } from "react";
import Image from "next/image";
import { ProjectType } from "../projects";
import { ModalsDispatchContext } from "../../../context/ModalsContext";
import ProjectModal from "../ProjectModal";
import ProjectTags from "../ProjectTags";
import ProjectLinks from "../ProjectLinks";
import { Item, Info, ImageWrapper } from "./ProjectItem.styles";

const ProjectItem = ({ project }: { project: ProjectType }) => {
  const { openModal } = useContext(ModalsDispatchContext);
  const onClick = useCallback((e: any) => {
    if (e.target.tagName === "svg") return;
    openModal(ProjectModal, project);
  }, []);
  return (
    <Item onClick={onClick}>
      <ImageWrapper>
        <Image
          src={project.images[0]}
          alt="project thumbnail"
          layout="fill"
          placeholder="blur"
          blurDataURL={project.images[0]}
        />
      </ImageWrapper>
      <Info>
        <h2>{project.title}</h2>
        <ProjectTags tags={project.tags} />
        <ProjectLinks github={project.github} link={project.link} />
      </Info>
    </Item>
  );
};
export default ProjectItem;
