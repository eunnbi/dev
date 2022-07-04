import { ProjectType } from "../../projects";
import ImageSlider from "../ImageSilder";
import ProjectLinks from "../../ProjectLinks";
import ProjectStacks from "../ProjectStacks";
import ProjectTags from "../../ProjectTags";
import { ContentWrapper, ProjectDetails } from "./ModalContent.styles";

const ModalContent = ({ project }: { project: ProjectType }) => {
  return (
    <ContentWrapper>
      <ImageSlider images={project.images} />
      <ProjectDetails>
        <p className="project-period">⏰ {project.period}</p>
        <ProjectTags tags={project.tags} />
        <article>
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </article>
        <ProjectStacks
          feStacks={project.feStacks}
          beStacks={project.beStacks}
          deployStacks={project.deployStacks}
        />
        <article>
          <h3>Member</h3>
          <p>{project.member}</p>
          {project.role && <p>{project.role}</p>}
        </article>
        <article>
          <h3>Review</h3>
          <p>{project.review}</p>
          <a href={project.reviewLink} target="_blank" rel="noreferrer">
            🚀 <span>{project.title} 회고글 보러 가기</span>
          </a>
        </article>
        <ProjectLinks github={project.github} link={project.link} />
      </ProjectDetails>
    </ContentWrapper>
  );
};

export default ModalContent;
