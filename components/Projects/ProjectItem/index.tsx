import Image from "next/image";
import { useRouter } from "next/router";
import { ProjectType } from "../projects";
import ProjectTags from "../ProjectDetails/ProjectTags";
import ProjectLinks from "../ProjectDetails/ProjectLinks";
import { Item, Info, ImageWrapper } from "./ProjectItem.styles";

const ProjectItem = ({ project }: { project: ProjectType }) => {
  const router = useRouter();
  const onClick = (e: any) => {
    if (e.target.tagName === "svg") return;
    router.push(`/projects/${project.id}`);
  };

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
