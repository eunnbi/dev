import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  font-size: 1.9rem;
  color: white;
  .icon {
    margin: 0 10px;
  }
`;

export const Anchor = styled.a`
  transition: all 0.3s ease-in-out;
  &:hover {
    color: blueviolet;
  }
`;
