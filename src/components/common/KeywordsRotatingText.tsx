import styled, { css } from "styled-components";
import ReactRotatingText from "react-rotating-text";
import { KEYWORDS } from "data/keywords";

interface KeywordsRotatingTextProps {
  fontSize?: string;
  textAlign?: string;
}

export default function KeywordsRotatingText({
  fontSize,
  textAlign
}: KeywordsRotatingTextProps) {
  return (
    <H1 fontSize={fontSize} textAlign={textAlign}>
      안녕하세요.
      <br />
      <ReactRotatingText items={KEYWORDS} />
      <br />
      개발자 <strong>강은비</strong>입니다.
    </H1>
  );
}

const H1 = styled.h1<KeywordsRotatingTextProps>`
  font-weight: 200;
  line-height: 1.2;
  ${({ fontSize, textAlign }) => css`
    font-size: ${fontSize};
    text-align: ${textAlign};
  `}
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`;

KeywordsRotatingText.defaultProps = {
  fontSize: "2.5rem",
  textAlign: "left"
};
