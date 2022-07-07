import styled from "styled-components";

const TagWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TagItem = styled.li`
  border: 1px solid lightgray;
  box-shadow: ${({ theme }) => `1px 5px 10px ${theme.color.shadowColor}`};
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

interface ProjectTagsProp {
  tags: string[];
}

const ProjectTags = ({ tags }: ProjectTagsProp) => {
  return (
    <TagWrapper>
      {tags.map((tag, index) => (
        <TagItem key={index}>
          <span>✨</span> {tag}
        </TagItem>
      ))}
    </TagWrapper>
  );
};

export default ProjectTags;
