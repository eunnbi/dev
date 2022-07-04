import styled from "styled-components";

export const Item = styled.li<{ position: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: all 0.3s ease-in-out;
  opacity: ${({ position }) => (position === "current" ? 1 : 0)};
  transform: ${({ position }) =>
    position === "current"
      ? `translateX(0)`
      : position === "prev"
      ? `translateX(-100%)`
      : `translateX(100%)`};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  p {
    font-size: 1.1rem;
  }
  span {
    display: inline-block;
    width: 0.5rem;
  }
`;
