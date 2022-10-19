import styled from "styled-components";
import ReactRotatingText from "react-rotating-text";
import { KEYWORDS } from "@data/keywords";

interface KeywordsRotatingTextProps {
  fontSize: string;
  textAlign: string;
}

const KeywordsRotatingText = ({
  fontSize,
  textAlign,
}: KeywordsRotatingTextProps) => {
  return (
    <Text fontSize={fontSize} textAlign={textAlign}>
      안녕하세요.
      <br />
      <ReactRotatingText items={KEYWORDS} />
      <br />
      개발자 <strong>강은비</strong>입니다.
    </Text>
  );
};

export default KeywordsRotatingText;

const Text = styled.p<{ fontSize: string; textAlign: string }>`
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  line-height: 1.2;
  font-weight: 200;
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`;

KeywordsRotatingText.defaultProps = {
  fontSize: "2.5rem",
  textAlign: "left",
};
