import styled from "styled-components";

interface Props extends Pick<Project, "tags"> {
  center?: boolean;
}

const ProjectTags = ({ tags, center }: Props) => {
  return (
    <TagList center={center ? "true" : ""}>
      {tags.map((tag, index) => (
        <TagItem key={index}>{tag}</TagItem>
      ))}
    </TagList>
  );
};

const TagList = styled.ul<{ center: "true" | "" }>`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
`;

const TagItem = styled.li`
  background-color: ${({ theme }) => theme.color.chipBgColor};
  padding: 7px 10px;
  border-radius: 10px;
  font-weight: 500;
`;

export default ProjectTags;
