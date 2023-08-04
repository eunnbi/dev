import { useTheme } from "@/hooks/useTheme";
import styled from "styled-components";

const StackList = ({ stacks }: Pick<Project, "stacks">) => {
  const { feStacks, beStacks, deployStacks } = stacks;
  const { isLightTheme } = useTheme();
  return (
    <List>
      {feStacks.map((stack, index) => (
        <Item key={index} $color={isLightTheme ? "#EDE1EC" : "#A17C9E"}>
          {stack}
        </Item>
      ))}
      {beStacks?.map((stack, index) => (
        <Item key={index} $color={isLightTheme ? "#E3EFD9" : "#8B9981"}>
          {stack}
        </Item>
      ))}
      {deployStacks?.map((stack, index) => (
        <Item key={index} $color={isLightTheme ? "#DCE6EE" : "#8AA4BA"}>
          {stack}
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Item = styled.li<{ $color: string }>`
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
  background-color: ${({ $color }) => $color};
`;

export default StackList;
