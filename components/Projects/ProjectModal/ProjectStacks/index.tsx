import StackTag from "./StackTag";
import styled, { useTheme } from "styled-components";

const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  img {
    padding: 0 0.5rem;
  }
`;

interface ProjectStacksProps {
  feStacks: string[];
  beStacks: string[];
  deployStacks: string[];
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
        {feStacks.map((stack, index) => (
          <StackTag
            key={index}
            text={stack}
            color={name === "light" ? "EDE1EC" : "a17c9e"}
          />
        ))}
        {beStacks.map((stack, index) => (
          <StackTag
            key={index}
            text={stack}
            color={name === "light" ? "E3EFD9" : "9ba891"}
          />
        ))}
        {deployStacks.map((stack, index) => (
          <StackTag
            key={index}
            text={stack}
            color={name === "light" ? "DCE6EE" : "9bb3c7"}
          />
        ))}
      </StackList>
    </article>
  );
};

export default ProjectStacks;
