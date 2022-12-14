import styled from "styled-components";

const ProjectTags = ({ tags }: Pick<Project, "tags">) => {
  return (
    <TagWrapper>
      {tags.map((tag, index) => (
        <TagItem key={index}>{tag}</TagItem>
      ))}
    </TagWrapper>
  );
};

const TagWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TagItem = styled.li`
  background-color: ${({ theme }) => theme.color.chipBgColor};
  padding: 7px 10px;
  border-radius: 10px;
  font-weight: 500;
`;

export default ProjectTags;
