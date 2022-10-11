import styled from "styled-components";

interface ProjectTagsProp {
  tags: string[] | undefined;
}

const ProjectTags = ({ tags }: ProjectTagsProp) => {
  return (
    <TagWrapper>
      {tags?.map((tag, index) => (
        <TagItem key={index}>
          <span></span> {tag}
        </TagItem>
      ))}
    </TagWrapper>
  );
};

export default ProjectTags;

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
