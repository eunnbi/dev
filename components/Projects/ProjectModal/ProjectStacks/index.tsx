import StackTag from "./StackTag";
import styled from "styled-components";

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
  return (
    <article>
      <h3>Stack</h3>
      <StackList>
        {feStacks.map((stack, index) => (
          <StackTag key={index} text={stack} color={"EDE1EC"} />
        ))}
        {beStacks.map((stack, index) => (
          <StackTag key={index} text={stack} color={"E3EFD9"} />
        ))}
        {deployStacks.map((stack, index) => (
          <StackTag key={index} text={stack} color={"DCE6EE"} />
        ))}
      </StackList>
    </article>
  );
};

export default ProjectStacks;
