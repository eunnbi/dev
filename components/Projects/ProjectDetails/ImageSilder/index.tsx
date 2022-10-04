import { useSlider } from "../../../../hooks/useSlider";
import SliderControlButtons from "../../../common/SliderControlButtons";
import ImageList from "./ImageList";
import styled from "styled-components";

const ImageSlider = ({ images }: { images: string[] }) => {
  const { position, moveNext, movePrev } = useSlider(images.length);
  return (
    <Slider>
      <ImageList images={images} position={position} />
      <SliderControlButtons moveNext={moveNext} movePrev={movePrev} />
    </Slider>
  );
};

export default ImageSlider;

const Slider = styled.div`
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
