import { useSlider } from "@hooks/useSlider";
import styled, { css } from "styled-components";
import Image from "next/image";
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
        <button
          type="button"
          onClick={movePrev}
          aria-label="이미지 슬라이더 이전 버튼"
        >
          <FiChevronLeft />
        </button>
        <ImageList images={images} positionIndex={positionIndex} />
        <button
          type="button"
          onClick={moveNext}
          aria-label="이미지 슬라이더 다음 버튼"
        >
          <FiChevronRight />
        </button>
      </div>
      <div>
        {images.map((image, index) => (
          <PageBullet
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
  & > div:first-child {
    width: 100%;
    gap: 0;
    justify-content: center;
  }
  svg {
    color: ${({ theme }) => theme.color.textColor};
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const PageBullet = styled.span<{ position: Position }>`
  width: ${({ position }) => (position === "current" ? "1rem" : "0.5rem")};
  height: 0.5rem;
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
        <ImageWrapper
          key={image}
          index={index}
          position={getPosittion(index, positionIndex)}
        >
          <Image src={image} alt="프로젝트 배포 사이트" fill priority />
        </ImageWrapper>
      ))}
    </List>
  );
};

const List = styled.div`
  width: 100%;
  max-height: 450px;
  overflow: hidden;
  margin: 0 1rem;
  position: relative;
  display: flex;
`;

const ImageWrapper = styled.div<{ position: Position; index: number }>`
  flex-shrink: 0;
  width: 100%;
  height: 60vw;
  position: relative;
  border-radius: 5px;
  max-height: 450px;
  transition: all 0.3s ease-in-out;
  opacity: ${({ position }) => (position === "current" ? 1 : 0)};
  transform: ${({ position, index }) =>
    position === "current"
      ? `translateX(${-(index * 100) + 0}%)`
      : position === "prev"
      ? `translateX(${-(index * 100) - 100}%)`
      : `translateX(${-(index * 100) + 100}%)`};
  img {
    width: 100%;
    border-radius: 5px;
    object-fit: contain;
  }
`;

export default ImageSlider;
