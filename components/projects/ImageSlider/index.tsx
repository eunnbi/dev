import { useSlider } from "@hooks/useSlider";
import ImageList from "./ImageList";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ImageSlider = ({ images }: Pick<Project, "images">) => {
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

export default ImageSlider;

const SliderSection = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
