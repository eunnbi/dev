import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSilder } from "../../../../hooks/useSlider";
import { ImageList, ImageItem, Slider } from "./ImageSilder.styles";

const ImageSlider = ({ images }: { images: string[] }) => {
  const { position, movePrev, moveNext } = useSilder(images.length);
  const { current, prev } = position;
  return (
    <Slider>
      <ImageList>
        {images.map((image, index) => (
          <ImageItem
            key={index}
            index={index}
            position={
              index === current ? "current" : index === prev ? "prev" : "next"
            }
            src={image}
          />
        ))}
      </ImageList>
      <div>
        <FiChevronLeft onClick={movePrev} />
        <FiChevronRight onClick={moveNext} />
      </div>
    </Slider>
  );
};

export default ImageSlider;
