import Heading from "@components/common/Heading";
import styled from "styled-components";
import ProjectLinks from "@components/project/ProjectLinks";
import ProjectTags from "@components/project/ProjectTags";
import Router from "next/router";
import Image from "next/image";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
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
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
`;

// -----------------------------------------------
interface Props extends Project {
  index: number;
}

const ProjectArticle = ({
  title,
  imageCnt,
  tags,
  links,
  id,
  index,
  category
}: Props) => {
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
      <Header>
        <div>
          <h1>{title}</h1>
          <CategoryBadge category={category}>{category}</CategoryBadge>
        </div>
        <ProjectLinks links={links} />
      </Header>
      <ImageWrapper>
        <Image
          src={imageSrc}
          alt={`${title} 썸네일`}
          fill
          sizes="90vw"
          placeholder="blur"
          blurDataURL={imageSrc}
          priority={index === 0 ? true : false}
        />
      </ImageWrapper>
      <ProjectTags tags={tags} center={true} />
    </Article>
  );
};

const Article = styled.article`
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  h1 {
    font-size: 1.5rem;
  }
  & > div:first-child {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px 0.5rem;
  }
`;

const CategoryBadge = styled.span<{ category: Props["category"] }>`
  display: inline-block;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 5px;
  background-color: ${({ category }) =>
    category === "Team" ? "rgb(245, 224, 233)" : "rgb(219, 237, 219)"};
`;

export default ProjectsSection;
