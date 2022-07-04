import { useCallback, useContext } from "react";
import { ProjectType } from "../projects";
import { ModalsDispatchContext } from "../../../context/ModalsContext";
import ProjectModal from "../ProjectModal";
import ProjectTags from "../ProjectTags";
import ProjectLinks from "../ProjectLinks";
import { Item, Info } from "./ProjectItem.styles";

const ProjectItem = ({ project }: { project: ProjectType }) => {
  const { openModal } = useContext(ModalsDispatchContext);
  const onClick = useCallback((e: any) => {
    if (e.target.tagName === "svg") return;
    openModal(ProjectModal, project);
  }, []);
  return (
    <Item onClick={onClick}>
      <img src={project.images[0]} alt="project thumbnail" />
      <Info>
        <h2>{project.title}</h2>
        <ProjectTags tags={project.tags} />
        <ProjectLinks github={project.github} link={project.link} />
      </Info>
    </Item>
  );
};
export default ProjectItem;
