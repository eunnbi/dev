import styled, { useTheme } from "styled-components";

const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  img {
    padding: 0 0.5rem;
  }
`;

const Tag = styled.div<{ color: string }>`
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
  background-color: ${({ color }) => `#${color}`};
`;

interface ProjectStacksProps {
  feStacks?: string[];
  beStacks?: string[];
  deployStacks?: string[];
}

const ProjectStacks = ({
  feStacks,
  beStacks,
  deployStacks,
}: ProjectStacksProps) => {
  const { name } = useTheme();
  return (
    <article>
      <h3>Stack</h3>
      <StackList>
        {feStacks?.map((stack, index) => (
          <Tag key={index} color={name === "light" ? "EDE1EC" : "a17c9e"}>
            {stack}
          </Tag>
        ))}
        {beStacks?.map((stack, index) => (
          <Tag key={index} color={name === "light" ? "E3EFD9" : "9ba891"}>
            {stack}
          </Tag>
        ))}
        {deployStacks?.map((stack, index) => (
          <Tag key={index} color={name === "light" ? "DCE6EE" : "9bb3c7"}>
            {stack}
          </Tag>
        ))}
      </StackList>
    </article>
  );
};

export default ProjectStacks;
