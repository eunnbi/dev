import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSlider } from "../../../../hooks/useSlider";
import { ImageList, ImageItem, Slider } from "./ImageSilder.styles";

const ImageSlider = ({ images }: { images: string[] }) => {
  const { position, moveNext, movePrev } = useSlider(images.length);
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
            src={`/images/projects/${image}`}
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
