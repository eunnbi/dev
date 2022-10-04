import KeywordList from "./KeywordList";
import { useSlider } from "../../../hooks/useSlider";
import { KEYWORDS } from "../../../constants/keywords";
import styled from "styled-components";
import SliderControlButtons from "../../common/SliderControlButtons";

const KeywordSlider = () => {
  const { position, moveNext, movePrev } = useSlider(KEYWORDS.length);
  return (
    <Slider>
      <KeywordList position={position} />
      <SliderControlButtons moveNext={moveNext} movePrev={movePrev} />
    </Slider>
  );
};

export default KeywordSlider;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  svg {
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0 1rem;
  }
`;
