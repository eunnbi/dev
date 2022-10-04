import KeywordList from "./KeywordList";
import ControlButtons from "./ControlButtons";
import { useSlider } from "../../../hooks/useSlider";
import { KEYWORDS } from "../../../constants/keywords";
import styled from "styled-components";

const KeywordSlider = () => {
  const { position, moveNext, movePrev } = useSlider(KEYWORDS.length);
  return (
    <Slider>
      <KeywordList position={position} />
      <ControlButtons moveNext={moveNext} movePrev={movePrev} />
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
