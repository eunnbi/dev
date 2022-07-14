import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  svg {
    font-size: 2rem;
    margin: 0 1rem;
    cursor: pointer;
  }
`;

export const ImageList = styled.ul`
  width: 100%;
  height: auto;
  max-height: 450px;
  overflow: hidden;
  margin: 0 1rem;
  position: relative;
  display: flex;
  @media screen and (max-width: 1500px) {
    max-width: 600px;
    width: 80vw;
  }
`;

export const ImageItem = styled.img<{ position: string; index: number }>`
  object-fit: contain;
  width: 100%;
  transition: all 0.3s ease-in-out;
  opacity: ${({ position }) => (position === "current" ? 1 : 0)};
  transform: ${({ position, index }) =>
    position === "current"
      ? `translateX(${-(index * 100) + 0}%)`
      : position === "prev"
      ? `translateX(${-(index * 100) - 100}%)`
      : `translateX(${-(index * 100) + 100}%)`};
`;
