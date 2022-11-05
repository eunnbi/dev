import { useSlider } from "@hooks/useSlider";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageSlierProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSlierProps) => {
  const { position, moveNext, movePrev } = useSlider(images.length);
  return (
    <SliderSection>
      <button>
        <FiChevronLeft onClick={movePrev} />
      </button>
      <ImageList images={images} position={position} />
      <button>
        <FiChevronRight onClick={moveNext} />
      </button>
    </SliderSection>
  );
};

const SliderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  svg {
    color: ${({ theme }) => theme.color.textColor};
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

// ---------------------------------------------------

interface ImageListProps extends ImageSlierProps {
  position: Position;
}

const ImageList = ({ position, images }: ImageListProps) => {
  return (
    <List>
      {images.map((image, index) => (
        <ImageItem
          key={index}
          index={index}
          position={
            index === position.current
              ? "current"
              : index === position.prev
              ? "prev"
              : "next"
          }
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

const ImageItem = styled.img<{ position: string; index: number }>`
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
