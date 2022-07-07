import styled from "styled-components";

export const Button = styled.button<{ isLightTheme: boolean }>`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.5rem 0.6rem;
  background-color: ${({ isLightTheme }) =>
    isLightTheme ? "#F29F21" : "#17161D"};
  svg {
    font-size: 1rem;
    color: white;
  }
`;

export const Circle = styled.div<{ isLightTheme: boolean }>`
  position: absolute;
  top: 5px;
  left: 0.35rem;
  right: 5px;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  border-radius: 50%;
  transform: ${({ isLightTheme }) => !isLightTheme && `translateY(100%)`};
  transition: all 0.3s ease-in-out;
`;
