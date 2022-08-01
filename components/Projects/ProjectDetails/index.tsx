import { IProject } from "../../../constants/projects";
import ImageSlider from "./ImageSilder";
import ProjectTags from "./ProjectTags";
import ProjectStacks from "./ProjectStacks";
import ProjectLinks from "./ProjectLinks";
import { DetailsWrapper, ProjectContent } from "./ProjectDetails.styles";

const ProjectDetails = ({ project }: { project: IProject }) => {
  return (
    <DetailsWrapper imagesLength={project.images.length}>
      {project.images.length === 0 ? null : (
        <ImageSlider images={project.images} />
      )}
      <ProjectContent>
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
        {project.review.text && (
          <article>
            <h3>Review</h3>
            <p>{project.review.text}</p>
            <a href={project.review.link} target="_blank" rel="noreferrer">
              🚀 <span>{project.review.linkName}</span>
            </a>
          </article>
        )}
        <ProjectLinks github={project.github} link={project.link} />
      </ProjectContent>
    </DetailsWrapper>
  );
};

export default ProjectDetails;
