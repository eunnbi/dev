import { useSlider } from "@hooks/common/useSlider";
import styled, { css } from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageSlierProps {
  images: string[];
}

const getPosittion = (index: number, positionIndex: PositionIndex) => {
  return index === positionIndex.current
    ? "current"
    : index === positionIndex.prev
    ? "prev"
    : "next";
};

const ImageSlider = ({ images }: ImageSlierProps) => {
  const { positionIndex, moveNext, movePrev } = useSlider(images.length);
  return (
    <SliderSection>
      <div>
        <button type="button" onClick={movePrev}>
          <FiChevronLeft />
        </button>
        <ImageList images={images} positionIndex={positionIndex} />
        <button type="button" onClick={moveNext}>
          <FiChevronRight />
        </button>
      </div>
      <div>
        {images.map((image, index) => (
          <PageButton
            key={image}
            position={getPosittion(index, positionIndex)}
          />
        ))}
      </div>
    </SliderSection>
  );
};

const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  svg {
    color: ${({ theme }) => theme.color.textColor};
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const PageButton = styled.button<{ position: Position }>`
  width: ${({ position }) => (position === "current" ? "1rem" : "0.5rem")};
  height: 0.5rem;
  cursor: auto;
  background-color: ${({ position }) =>
    position === "current" ? "#000" : "lightgray"};
  border-radius: ${({ position }) => (position === "current" ? "16px" : "50%")};
`;

// ---------------------------------------------------

interface ImageListProps extends ImageSlierProps {
  positionIndex: PositionIndex;
}

const ImageList = ({ positionIndex, images }: ImageListProps) => {
  return (
    <List>
      {images.map((image, index) => (
        <ImageItem
          key={image}
          index={index}
          position={getPosittion(index, positionIndex)}
          src={image}
        />
      ))}
    </List>
  );
};

const List = styled.ul`
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

const ImageItem = styled.img<{ position: Position; index: number }>`
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

export default ImageSlider;
