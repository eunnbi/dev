import styled, { useTheme } from "styled-components";

const StackList = ({ stacks }: Pick<Project, "stacks">) => {
  const { feStacks, beStacks, deployStacks } = stacks;
  const { name } = useTheme();
  return (
    <List>
      {feStacks.length === 0
        ? undefined
        : feStacks.map((stack, index) => (
            <Tag key={index} color={name === "light" ? "EDE1EC" : "a17c9e"}>
              {stack}
            </Tag>
          ))}
      {beStacks.length === 0
        ? undefined
        : beStacks?.map((stack, index) => (
            <Tag key={index} color={name === "light" ? "E3EFD9" : "8b9981"}>
              {stack}
            </Tag>
          ))}
      {deployStacks.length === 0
        ? undefined
        : deployStacks?.map((stack, index) => (
            <Tag key={index} color={name === "light" ? "DCE6EE" : "8aa4ba"}>
              {stack}
            </Tag>
          ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.li<{ color: string }>`
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
  background-color: ${({ color }) => `#${color}`};
`;

export default StackList;
