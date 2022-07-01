import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(225, 225, 225, 0.5);
  font-size: 1.65rem;
  margin-top: 5rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  .icon {
    margin-right: 10px;
  }
`;

export const Anchor = styled.a<{ currentPath: string; pathName: string }>`
  color: ${(props) =>
    props.currentPath === props.pathName ? "#fff" : "inherit"};
`;
