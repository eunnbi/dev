import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: black;
  background-color: white;
  transition: all 0.3s ease-in-out;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 15px;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const Button = ({ children }: React.PropsWithChildren) => {
  return <StyledButton>{children}</StyledButton>;
};
