import Image from "next/image";
import { useRouter } from "next/router";
import { IProject } from "../../../constants/projects";
import ProjectTags from "../ProjectDetails/ProjectTags";
import ProjectLinks from "../ProjectDetails/ProjectLinks";
import { Item, Info, ImageWrapper } from "./ProjectItem.styles";

const ProjectItem = ({ project }: { project: IProject }) => {
  const router = useRouter();
  const onClick = (e: any) => {
    const { tagName } = e.target;
    if (tagName === "a" || tagName === "svg" || tagName === "path") return;
    router.push(`/projects/${project.id}`);
  };

  return (
    <Item onClick={onClick}>
      <ImageWrapper>
        <Image
          src={
            project.images.length === 0
              ? "/images/projects/project-default.png"
              : project.images[0]
          }
          alt="project thumbnail"
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/projects/project-default.png"
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
