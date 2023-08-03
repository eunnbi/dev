import Heading from "@/components/common/Heading";
import styled from "styled-components";
import ProjectLinks from "@/components/project/ProjectLinks";
import ProjectTags from "@/components/project/ProjectTags";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <Section>
      <Heading title="Projects" />
      <Wrapper>
        {projects.map((project, index) => (
          <ProjectArticle {...project} index={index} key={project.id} />
        ))}
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
`;

interface ProjectArticleProps extends Project {
  index: number;
}

function ProjectArticle({
  title,
  imageCnt,
  tags,
  links,
  id,
  index,
  category
}: ProjectArticleProps) {
  const router = useRouter();
  const onClick = (e: any) => {
    const { tagName } = e.target;
    if (tagName === "a" || tagName === "svg" || tagName === "path") return;
    router.push(`/projects/${id}`);
  };
  const imageSrc =
    imageCnt === 0
      ? "/images/projects/project-default.png"
      : `/images/projects/${id}/1.png`;

  return (
    <Article onClick={onClick}>
      <ArticleHeader>
        <div className="title-wrapper">
          <h1 className="title-text">{title}</h1>
          <CategoryBadge category={category}>{category}</CategoryBadge>
        </div>
        <ProjectLinks links={links} />
      </ArticleHeader>
      <ImageWrapper>
        <Image
          src={imageSrc}
          alt={`${title} 썸네일`}
          fill
          sizes="90vw"
          placeholder="blur"
          blurDataURL={imageSrc}
          priority={index === 0 ? true : false}
          className="project-thumbnail"
        />
      </ImageWrapper>
      <ProjectTags tags={tags} center={true} />
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 60vw;
  max-height: 450px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: ${({ theme }) => `1px 5px 15px ${theme.color.shadowColor}`};
  .project-thumbnail {
    border-radius: 5px;
    object-fit: cover;
  }
`;

const ArticleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  .title-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px 0.5rem;
  }
  .title-text {
    font-size: 1.5rem;
  }
`;

const CategoryBadge = styled.span<{
  category: ProjectArticleProps["category"];
}>`
  display: inline-block;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 5px;
  background-color: ${({ category, theme }) =>
    category === "Team"
      ? theme.name === "light"
        ? "rgb(245, 224, 233)"
        : "rgb(183, 131, 154)"
      : theme.name === "light"
      ? "rgb(219, 237, 219)"
      : "rgb(127, 160, 127)"};
`;
