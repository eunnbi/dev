import styled from "styled-components";

interface ProjectTagsProps extends Pick<Project, "tags"> {
  center?: boolean;
}

const ProjectTags = ({ tags, center }: ProjectTagsProps) => {
  return (
    <TagList $center={center ? "true" : ""}>
      {tags.map(tag => (
        <TagItem key={tag}>{tag}</TagItem>
      ))}
    </TagList>
  );
};

const TagList = styled.ul<{ $center: "true" | "" }>`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: ${({ $center }) => ($center ? "center" : "flex-start")};
`;

const TagItem = styled.li`
  padding: 7px 10px;
  border-radius: 10px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.primaryLightGrayBlue};
`;

export default ProjectTags;
